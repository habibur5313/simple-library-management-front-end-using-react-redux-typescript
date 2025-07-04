import { BookCard } from "@/components/module/landingPage/BookCard";
import { useGetBooksLimitQuery } from "@/redux/api/baseApi";
import { Loader } from "@/sharedFile/Loader";
import type { IBook } from "@/types";

export const LandingPageBooks = () => {
  const { data, isLoading } = useGetBooksLimitQuery(undefined);

  if (isLoading) {
    return <Loader text="Loading books..." />;
  }



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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};
