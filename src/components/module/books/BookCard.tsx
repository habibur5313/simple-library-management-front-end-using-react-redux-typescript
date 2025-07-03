import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import type { IBook } from "@/types";
import { Trash2, BookOpen } from "lucide-react";
import { useDeleteBookMutation } from "@/redux/api/baseApi";

interface BookCardProps {
  book: IBook;
}

export const BookCard = ({ book }: BookCardProps) => {

  const [deleteBook] = useDeleteBookMutation();

  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{book.title}</CardTitle>
        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1 flex-wrap">
          <span>by {book.author}</span>
          <Badge variant="outline">{book.genre}</Badge>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3 text-sm pt-2">
        <div>
          <span className="font-medium text-gray-700">ISBN:</span> {book.isbn}
        </div>
        <div>
          <span className="font-medium text-gray-700">Description:</span>
          <p className="text-muted-foreground mt-1">{book.description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <span className="font-medium text-gray-700">Total Copies:</span>{" "}
            {book.copies}
          </div>
          <div>
            <span className="font-medium text-gray-700">Available:</span>{" "}
            {book.available}
          </div>
        </div>
        <Separator />
        <div className="text-xs text-gray-500">
          <div>Created: {format(new Date(book.createdAt), "PP")}</div>
          <div>Updated: {format(new Date(book.updatedAt), "PP")}</div>
        </div>

        <div className="pt-4 flex justify-between">
          <Button className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            Borrow
          </Button>

          <Button onClick={() => deleteBook(book._id)} variant="destructive" className="flex items-center gap-1">
            <Trash2 className="w-4 h-4" />
            Delete 
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
