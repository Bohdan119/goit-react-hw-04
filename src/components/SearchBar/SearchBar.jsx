import PropTypes from "prop-types";
import css from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ handleChangeInput, handleSubmit }) => {


  return (
    
    <header className={css['header']}> 
          <form
            className={css['form']}
            onSubmit={handleSubmit}>
        <input
        className={css['header-input']}
        onChange={handleChangeInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="search"
        />
        <button className={css['header-btn']} type="submit">Search</button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChangeInput:PropTypes.func.isRequired
};

export default SearchBar;
