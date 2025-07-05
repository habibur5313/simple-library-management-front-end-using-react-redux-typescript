
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
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const AddBookForm = () => {
  const form = useForm();

  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

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
      const res = await createBook(data).unwrap();
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
        navigate("/books");
      }
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* title and author */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7">
          {/* title */}
          <FormField
            control={form.control}
            name="title"
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* genre and isbn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7">
          {/* Genre */}
          <FormField
            control={form.control}
            name="genre"
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* description and copies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7">
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input type="number" {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* Available */}
        <FormField
          control={form.control}
          name="available"
          render={({ field }) => (
            <FormItem className="flex gap-3 items-center">
              <FormLabel>Available</FormLabel>
              <FormControl>
                <Input
                  type="checkbox"
                  {...field}
                  value={field.value || ""}
                  className="w-4 h-4"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
}