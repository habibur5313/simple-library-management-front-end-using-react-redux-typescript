import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom"; 
import { Loader } from "@/sharedFile/Loader"; 
import { useEffect } from "react";

export const BooksDetails = () => {
    useEffect(() => {
      document.title = "books details | LibraryHub";
    }, []);
  const params = useParams();
  const bookId = params?.id as string;

  const { data, isLoading } = useGetSingleBookQuery(bookId);

  if (isLoading) {
    return <Loader text="Loading book details..." />;
  }

  if (!data?.data) {
    return <p className="text-center text-red-500 py-10">Book not found!</p>;
  }

  const book = data.data;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl mt-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">{book.title}</h1>
      <p className="text-muted-foreground text-center">by {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Copies:</strong> {book.copies}</p>
      <p>
        <strong>Status:</strong> {book.copies > 0 ? "Available" : "Not Available"}
      </p>
      <p><strong>Created:</strong> {new Date(book.createdAt).toLocaleDateString()}</p>
      <p><strong>Updated:</strong> {new Date(book.updatedAt).toLocaleDateString()}</p>
    </div>
  );
};
