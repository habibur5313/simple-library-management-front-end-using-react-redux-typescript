import { useGetBooksQuery } from "@/redux/api/baseApi"


export const Books = () => {

  const {data,isLoading,isError} = useGetBooksQuery(undefined);

  if(isLoading){
    <p>loading....</p>
  }

  console.log(data?.data)

  return (
    <div>Books</div>
  )
}
