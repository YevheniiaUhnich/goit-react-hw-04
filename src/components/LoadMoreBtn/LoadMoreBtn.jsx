import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage, totalPages, page }) => {
  return (
    <div>
      <button onClick={() => setPage(page + 1)} className={s.loadMoreBtn}>
        Load more
      </button>
      <span className={s.spanEffect}>Page: {page}</span>
      <span className={s.spanEffect}>Total Page: {totalPages}</span>
    </div>
  );
};

export default LoadMoreBtn;
