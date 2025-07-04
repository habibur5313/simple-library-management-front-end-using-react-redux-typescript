import { AddBookModal } from "@/components/module/addTask/AddBookModal";
import { BookCard } from "@/components/module/books/BookCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";

export const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    <p>loading....</p>;
  }

  const uniqueGenres: string[] = Array.from(
    new Set(data?.data.map((book: IBook) => book.genre))
  );

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
      <div className="flex justify-between items-center">
        <div>
          <AddBookModal></AddBookModal>
        </div>
        <Tabs defaultValue="All">
          <TabsList className="hidden md:block">
            <TabsTrigger value="All">All</TabsTrigger>
            {uniqueGenres.map((genre) => (
              <TabsTrigger key={genre} value={genre}>
                {genre}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};
