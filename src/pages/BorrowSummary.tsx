import { useGetBorrowBookQuery } from "@/redux/api/baseApi";



export const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowBookQuery(undefined);
  console.log(data?.data)
    if (isLoading) {
      <p>loading....</p>;
    }
  return (
    <div>BorrowSummary</div>
  )
}
