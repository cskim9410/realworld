import type { Dispatch, SetStateAction } from "react";
interface PaginationProps {
  articlesCount: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  articlesCount,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const lastPage = Math.ceil(articlesCount / 10);
  const pageArr = [...Array(lastPage)].map((p, i) => i + 1);

  return (
    <ul className="my-4 flex flex-wrap">
      {pageArr.map((page) => (
        <li key={page}>
          <button
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 border hover:underline ${
              currentPage === page
                ? "text-white bg-green border-green"
                : "text-green border-[#ddd] hover:bg-[#ECEEEF]"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
