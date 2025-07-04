import { BorrowCard } from "@/components/module/borrowSummary/BorrowCard";
import { useGetBorrowBookQuery } from "@/redux/api/baseApi";
import { Loader } from "@/sharedFile/Loader";
import type { IBorrow } from "@/types";

export const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowBookQuery(undefined);

  if (isLoading) {
    return <Loader text="Loading borrow summary..." />;
  }
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-center">Borrow Summary</h1>
        <p className="text-muted-foreground text-xl mt-1 text-center max-w-lg mx-auto">
          Overview of all borrowed books, return status, and user activity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.data.map((borrow: IBorrow, idx: number) => (
          <BorrowCard
            key={idx}
            book={borrow.book}
            totalQuantity={borrow.totalQuantity}
          ></BorrowCard>
        ))}
      </div>
    </div>
  );
};
