"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

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
  title: z.string().min(1),
  description: z.string().min(1),
  img: z.string().min(1),
  tag: z.string().min(1),
  startDate: z.date(),
  deadline: z.date(),
  currentPrice: z.string().min(1),
  step: z.string().min(1),
});

const Page = () => {
  const form = useForm<z.infer<typeof CreateSchema>>({
    resolver: zodResolver(CreateSchema),
  });

  const handleSubmit = (data: z.infer<typeof CreateSchema>) => {
    toast("We submitted the new rate!");
    console.log(data);
  };

  return (
    <div className="mb-12">
      <PageTitle
        title="Create a lot"
        description="Here you can create your own lot"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 lg:w-2/3 mt-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Antique chair" {...field} />
                </FormControl>
                <FormDescription>
                  This is a public display title for your lot. People will see
                  it on browse page and in search results.
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
            name="img"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Photo</FormLabel>
                <Input id="picture" type="file" accept="image/*" {...field} />
                <FormDescription>
                  This is a photo for your lot. People will see it on browse.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tag"
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
                    <SelectItem value="antique">Antique</SelectItem>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="currentPrice"
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
              name="step"
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
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="startDate"
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
