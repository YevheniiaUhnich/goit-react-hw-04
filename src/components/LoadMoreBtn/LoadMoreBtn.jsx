import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage, page }) => {
  return (
    <div>
      <button onClick={() => setPage(page + 1)} className={s.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
