import { useGetBooksQuery } from "@/redux/api/baseApi"


export const Books = () => {

  const {data,isLoading,isError} = useGetBooksQuery(undefined);

  console.log(data?.data)

  return (
    <div>Books</div>
  )
}
