import { useGetBorrowSummaryQuery } from "@/app/features/books/bookApi";

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery();
  console.log("borrow data",data)

  if (isLoading) return <p>Loading summary...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">📊 Borrow Summary</h1>
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">ISBN</th>
            <th className="p-2">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, idx: number) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{item.book.title}</td>
              <td className="p-2">{item.book.isbn}</td>
              <td className="p-2">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
