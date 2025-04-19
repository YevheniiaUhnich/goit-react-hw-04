const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const photo = form.elements.photo.value;
    onSubmit(photo);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} initialValues={initialValues}>
        <input
          type="text"
          name="photo"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
