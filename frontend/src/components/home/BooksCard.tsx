import BookSingleCard from './BookSingleCard';
interface BookType {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: string;
  __v: number;
}
const BooksCard = ({ books }: { books: BookType[] }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item: BookType) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
