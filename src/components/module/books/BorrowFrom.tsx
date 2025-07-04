import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { format } from "date-fns";
import { BookOpen, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type BorrowFormProps = {
  id: string;
};

export function BorrowFrom({ id }: BorrowFormProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const form = useForm();
  const [borrowBook] = useBorrowBookMutation();

  type APIError = {
    data?: {
      message?: string;
      error?: string;
    };
    status?: number;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const bookData = {
        book: id,
        quantity: data.quantity,
        dueDate: data.dueDate,
      };

      const res = await borrowBook(bookData).unwrap();
      if (res.success) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: res?.message,
          timer: 4000,
          timerProgressBar: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          showConfirmButton: true,
          confirmButtonText: "Close",
        });
      }
      setOpen(false);
      form.reset();
      navigate("/borrow-summary");
    } catch (err) {
      const error = err as APIError;
      Swal.fire({
        position: "top",
        icon: "error",
        title: error?.data?.message || "Something went wrong!",
        text: error?.data?.error || "",
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        showConfirmButton: true,
        confirmButtonText: "Close",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close(); // explicitly close on button click
        }
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={
            pathname === "/"
              ? "flex items-center gap-1"
              : "h-8 w-8 bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
          }
        >
          <BookOpen className="w-4 h-4" />
          {pathname === "/" && "Borrow"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription className="sr-only">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* due date */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" onSelect={field.onChange} />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
