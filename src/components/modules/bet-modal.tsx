"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { HandCoins } from "lucide-react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import useMakeBet from "@/api/hooks/mutation/useMakeBet";
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
  lotId: number;
}

const BetModal = ({ currentPrice, minStep, lotId }: BetModalProps) => {
  const BetModalSchema = z.object({
    rate: z.string().min(1, { message: "Rate is required" }),
  });

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: bet } = useMakeBet({
    onSuccessfulCallback: () => {
      queryClient.invalidateQueries({ queryKey: ["lot", lotId] });
      router.refresh();
    },
  });
  const form = useForm<z.infer<typeof BetModalSchema>>({
    resolver: zodResolver(BetModalSchema),
  });

  const handleSubmit = (data: z.infer<typeof BetModalSchema>) => {
    bet({ amount: parseInt(data.rate), lotId: lotId });
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          className="h-9 items-center justify-center rounded-lg w-full md:w-fit"
          onClick={() => setOpen(true)}
        >
          <HandCoins className="h-5 mr-2" />
          Bid
        </Button>
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
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => setOpen(false)}
                >
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
