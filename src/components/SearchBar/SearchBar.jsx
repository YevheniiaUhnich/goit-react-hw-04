import s from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const photo = form.elements.photo.value.trim();

    if (!photo) {
      toast.error("The field cannot be empty");
      return;
    }
    onSubmit(photo);
    form.reset();
  };
  return (
    <header className={s.searchBarStyle}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.containerInput}>
          <FcSearch className={s.iconInput} />
          <input
            className={s.input}
            type="text"
            name="photo"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>

        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
