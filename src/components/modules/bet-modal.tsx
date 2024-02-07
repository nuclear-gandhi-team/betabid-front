"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface BetModalProps {
  minStep: number;
  currentPrice: number;
}

const BetModalSchema = z.object({
  rate: z.string().min(1, { message: "Rate is required" }),
});

const BetModal = ({ currentPrice, minStep }: BetModalProps) => {
  const form = useForm<z.infer<typeof BetModalSchema>>({
    resolver: zodResolver(BetModalSchema),
  });

  const handleSubmit = (data: z.infer<typeof BetModalSchema>) => {
    toast("We submitted the new rate!");
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Make a bet</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make a bet</DialogTitle>
          <DialogDescription>
            Current price for this lot is {currentPrice}$
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel color="black">New rate</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`${currentPrice + minStep}`}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Minimal step is {minStep}$</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="gap-3 sm:gap-0">
              <DialogClose asChild>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BetModal;
