import { AddBookModal } from "@/components/module/addTask/AddBookModal";
import { useGetBooksQuery, useDeleteBookMutation } from "@/redux/api/baseApi";
import { Loader } from "@/sharedFile/Loader";
import type { IBook } from "@/types";
import { Button } from "@/components/ui/button";
import { Trash2, Eye } from "lucide-react";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { BorrowFrom } from "@/components/module/books/BorrowFrom";
import { Link } from "react-router";
import { EditBook } from "@/components/module/books/EditBook";
import { useEffect} from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Books = () => {
  useEffect(() => {
    document.title = "Books | LibraryHub";
  }, []);
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id);
        Swal.fire({
          title: "Deleted!",
          text: "This book has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (isLoading) {
    return <Loader text="Loading books..." />;
  }

   const genreOptions = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];


const handleSelect = (value: string) => {
  console.log("Selected genre:", value);
  // Do your filtering or logic here directly
};



  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-center">Books</h1>
        <p className="text-muted-foreground text-xl mt-1 text-center max-w-lg mx-auto">
          Browse the complete list of books available in the library. Add new
          books with details like title, author, and genre. Borrow books by
          selecting quantity and due date. Delete or manage entries to keep the
          library updated.
        </p>
      </div>
      <div className="mb-4 flex justify-between">
        <AddBookModal />
        <div>
<Select onValueChange={handleSelect}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filter by genre" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Filters</SelectLabel>
      {genreOptions.map((genre) => (
        <SelectItem key={genre} value={genre}>
          {genre}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>


        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Author</th>
              <th className="px-4 py-3 font-medium">Genre</th>
              <th className="px-4 py-3 font-medium">ISBN</th>
              <th className="px-4 py-3 font-medium">Copies</th>
              <th className="px-4 py-3 font-medium">Available</th>
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((book: IBook) => (
              <tr
                key={book._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">{book.title}</td>
                <td className="px-4 py-3">{book.author}</td>
                <td className="px-4 py-3">{book.genre}</td>
                <td className="px-4 py-3">{book.isbn}</td>
                <td className="px-4 py-3">{book.copies}</td>
                <td className="px-4 py-3">
                  {book.copies > 0 ? "Available" : "Not Available"}
                </td>
                <td className="px-4 py-3">
                  {format(new Date(book.createdAt), "PP")}
                </td>
                <td className="px-4 py-3">
                  {format(new Date(book.updatedAt), "PP")}
                </td>
                <td className="px-4 py-3 flex flex-wrap sm:flex-nowrap gap-2 justify-center">
                  {/* View */}
                  <Link to={`/books/${book._id}`}>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  {/* Edit */}
                  <EditBook book={book}></EditBook>

                  {/* Borrow */}
                  <BorrowFrom id={book._id}></BorrowFrom>
                  {/* Delete */}
                  <Button
                    onClick={() => handleDelete(book._id)}
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
