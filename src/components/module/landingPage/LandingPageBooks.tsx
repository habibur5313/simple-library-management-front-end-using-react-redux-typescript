import { BookCard } from "@/components/module/landingPage/BookCard";
import { Button } from "@/components/ui/button";
import {  useGetBooksQuery } from "@/redux/api/baseApi";
import { Loader } from "@/sharedFile/Loader";
import type { IBook } from "@/types";
import { Book } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const LandingPageBooks = () => {
    const [filters, setFilters] = useState<{
    limit?: number;
  }>({});
  const { data, isLoading } = useGetBooksQuery(filters);

useEffect(() => {
    const limit = 6;
  setFilters({limit})
},[])

  if (isLoading) {
    return <Loader text="Loading books..." />;
  }

  return (
    <div>
      <div className="mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-center">Books</h1>
              <p className="text-muted-foreground text-xl mt-1 text-center max-w-lg mx-auto">
                Browse all books, manage entries, and perform actions like viewing,
                editing, borrowing or deleting.
              </p>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
        <Link to={"/books"} className="flex justify-center" >
          <Button className=" mt-5 gap-2 bg-white text-black hover:bg-white"><Book />
          All Books</Button>
        </Link>
    </div>
  );
};
