import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import type { IBook } from "@/types";
import { Eye } from "lucide-react";
import { BorrowFrom } from "../books/BorrowFrom";
import { Link } from "react-router";

interface BookCardProps {
  book: IBook;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{book.title}</CardTitle>
        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1 flex-wrap">
          <span>by {book.author}</span>
          <Badge variant="outline">{book.genre}</Badge>
        </p>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3 text-sm pt-2">
        <p>
          <span className="font-medium text-gray-700">ISBN:</span> {book.isbn}
        </p>
        <div>
          <span className="font-medium text-gray-700">Description:</span>
          <p className="text-muted-foreground mt-1">{book.description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <p>
            <span className="font-medium text-gray-700">Total Copies:</span>
            {book.copies}
          </p>
          <p>
            <span className="font-medium text-gray-700">Available:</span>
            This book is {book.copies >= 1 ? " Available" : "Not Available"}
          </p>
        </div>
        <Separator />
        <div className="text-xs text-gray-500">
          <p>Created: {format(new Date(book.createdAt), "PP")}</p>
          <p>Updated: {format(new Date(book.updatedAt), "PP")}</p>
        </div>

        <div className="pt-4 flex justify-between">
          <BorrowFrom id={book._id}></BorrowFrom>

          <Link to={`/books/${book._id}`}>
            <Button className="flex items-center gap-1 bg-blue-100 text-blue-600 hover:bg-blue-200">
              <Eye className="w-4 h-4" /> View
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
