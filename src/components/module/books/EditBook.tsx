import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { Pencil } from "lucide-react";
import type { IBook } from "@/types";
import { usePutBookMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

type EditBookProfs = {
  book: IBook;
};

export const EditBook = ({ book }: EditBookProfs) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const form = useForm();
  const [putBook] = usePutBookMutation();

  const genreOptions = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  type APIError = {
    data?: {
      message?: string;
      error?: string;
    };
    status?: number;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await putBook({ id: book._id, data }).unwrap();
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
        form.reset();
        setOpen(false)
        navigate("/books");
      }
    } catch (err) {
      const error = err as APIError;
      console.log(error);
      // Swal.fire({
      //   position: "top",
      //   icon: "error",
      //   title: error?.data?.message || "Something went wrong!",
      //   text: error?.data?.error || "",
      //   timer: 2000,
      //   timerProgressBar: true,
      //   allowOutsideClick: true,
      //   allowEscapeKey: true,
      //   showConfirmButton: true,
      //   confirmButtonText: "Close",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.close(); // explicitly close on button click
      //   }
      // });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="h-8 w-8 bg-amber-100 text-amber-600 hover:bg-amber-200"
        >
          <Pencil className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>edit Book</DialogTitle>
          <DialogDescription className="sr-only">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              defaultValue={book.title}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Author */}
            <FormField
              control={form.control}
              name="author"
              defaultValue={book.author}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Genre */}
            <FormField
              control={form.control}
              name="genre"
              defaultValue={book.genre}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {genreOptions.map((genre) => (
                        <SelectItem key={genre} value={genre}>
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>} */}
                </FormItem>
              )}
            />
            {/* ISBN */}
            <FormField
              control={form.control}
              name="isbn"
              defaultValue={book.isbn}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              defaultValue={book.description}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Copies */}
            <FormField
              control={form.control}
              name="copies"
              defaultValue={book.copies}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Available */}
            <FormField
              control={form.control}
              name="available"
              defaultValue={book.available}
              render={({ field }) => (
                <FormItem className="flex gap-3 items-center">
                  <FormLabel>Available</FormLabel>
                  <FormControl>
                    <Input
                      type="checkbox"
                      {...field}
                      value={field.value || "false"}
                      className="w-4 h-4"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Save changes</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
