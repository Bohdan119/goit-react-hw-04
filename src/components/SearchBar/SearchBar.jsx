import PropTypes from "prop-types";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

const SearchBar = ({ handleChangeInput, handleSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.search.value.trim();
    if (input === "") {
      toast.error("Please enter a word");
      return;
    }
    handleSubmit(event);
  };

  return (
    <header className={css["header"]}>
      <form className={css["form"]} onSubmit={handleFormSubmit}>
        <input
          className={css["header-input"]}
          onChange={handleChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css["header-btn"]} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};

export default SearchBar;
