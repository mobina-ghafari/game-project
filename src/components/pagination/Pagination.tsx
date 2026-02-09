interface PaginationProps {
  page: number;
  totalPages: number;
  isFetching?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  page,
  totalPages,
  isFetching = false,
  onPageChange,
}: PaginationProps) => {
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="flex items-center justify-center gap-3 pb-10">
      <button
        className=" px-4 pb-2 flex items-center justify-center text-4xl rounded bg-primary text-text-white disabled:opacity-50 cursor-pointer"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={!canPrev || isFetching}
      >
        ‹
      </button>
      <span className="text-sm text-text-muted">
        Page {page} of {totalPages}
      </span>
      <button
        className=" px-4 pb-2 flex items-center justify-center text-4xl rounded bg-primary text-text-white disabled:opacity-50 cursor-pointer"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={!canNext || isFetching}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
