import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage, totalPage, page }) => {
  return <button className={s.loadMoreBtn}>Load more</button>;
};

export default LoadMoreBtn;
