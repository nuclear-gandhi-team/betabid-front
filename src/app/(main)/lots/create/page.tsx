"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

import useCreateLotMutation from "@/api/hooks/mutation/useCreateLotMutation";
import useTagsQuery from "@/api/hooks/query/useTagsQuery";
import PageTitle from "@/components/modules/page-title";
import { Button } from "@/components/ui/button";
import DatePickerForm from "@/components/ui/date-picker-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CreateSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  tagIds: z.string().min(1),
  dateStarted: z.date().min(new Date()),
  deadline: z.date().min(new Date()),
  betStep: z.string().min(1),
  startPrice: z.string().min(1),
  pictures: z.string().min(1),
});

const Page = () => {
  const router = useRouter();
  const { mutate: lotCreation } = useCreateLotMutation({
    onSuccessfulCallback: (id: string) => {
      toast.success("Lot created successfully");
      router.push(`/lots/${id}`);
    },
  });
  const [tags, isLoading] = useTagsQuery({});
  const form = useForm<z.infer<typeof CreateSchema>>({
    resolver: zodResolver(CreateSchema),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (data: z.infer<typeof CreateSchema>) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("tagIds", data.tagIds);
    formData.append("dateStarted", data.dateStarted.toISOString());
    formData.append("deadline", data.deadline.toISOString());
    formData.append("betStep", data.betStep);
    formData.append("startPrice", data.startPrice);
    formData.append("pictures", data.pictures);
    formData.append("ownerId", String(1));

    if (data.pictures && document.getElementById("picture")) {
      const pictureInput = document.getElementById(
        "picture",
      ) as HTMLInputElement;
      if (pictureInput.files) {
        for (let i = 0; i < pictureInput.files.length; i++) {
          formData.append("pictures", pictureInput.files[i]);
        }
      }
    }
    lotCreation(formData);
  };

  return (
    <div className="mb-12">
      <PageTitle
        title="Create a lot"
        description="Here you can create your own lot"
      />
      <Form {...form}>
        <form
          autoComplete="off"
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 lg:w-2/3 mt-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Antique chair" {...field} />
                </FormControl>
                <FormDescription>
                  This is a public display name for your lot. People will see it
                  on browse page and in search results.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="A beautiful chair that has been found in 1989..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is a description for your lot. People will evaluate it
                  before making a bid. Make sure to provide all the necessary.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pictures"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Photo</FormLabel>
                <Input
                  id="picture"
                  type="file"
                  accept="image/*"
                  multiple
                  {...field}
                />
                <FormDescription>
                  This is a photo for your lot. People will see it on browse.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tagIds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tag to classify your lot" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tags &&
                      tags.map((tag) => (
                        <SelectItem key={tag.id} value={`${tag.id}`}>
                          {tag.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  This is a tag for your lot. People can use it to filter and
                  find your lot faster. Make sure that filter corresponds to
                  your lot.
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="flex gap-5 flex-col md:flex-row">
            <FormField
              control={form.control}
              name="startPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel color="black">Current Price</FormLabel>
                  <FormControl>
                    <Input placeholder="2500" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is a current price for your lot. Your lot will start at
                    this price and people will bid from it.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="betStep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel color="black">Step</FormLabel>
                  <FormControl>
                    <Input placeholder="500" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is minimal step for your lot. People have to bit at
                    least previous amount plus this step.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <FormField
              control={form.control}
              name="dateStarted"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start date</FormLabel>
                  <DatePickerForm
                    value={field.value}
                    onChange={field.onChange}
                    disabled={(date) => date < new Date()}
                  />
                  <FormDescription>
                    This is a start date for your lot.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Deadline</FormLabel>
                  <DatePickerForm
                    value={field.value}
                    onChange={field.onChange}
                    disabled={(date) => date <= new Date()}
                  />
                  <FormDescription>
                    This is the last date for your lot.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-fit">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
