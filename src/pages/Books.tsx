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
      <div className="flex justify-between items-center">
        <h1>Books</h1>
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
      <div className="grid grid-cols-3 gap-4 mt-10">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};
