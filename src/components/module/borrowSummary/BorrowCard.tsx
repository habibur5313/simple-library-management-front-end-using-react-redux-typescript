import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IBorrow } from "@/types";

export const BorrowCard = ({ book, totalQuantity }: IBorrow) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-lg p-4 bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{book.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-800">ISBN:</span> {book.isbn}
        </p>
        <p>
          <span className="font-medium text-gray-800">Quantity Available:</span>{" "}
          {totalQuantity}
        </p>
      </CardContent>
    </Card>
  );
};
