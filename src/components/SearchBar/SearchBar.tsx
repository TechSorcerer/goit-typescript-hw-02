import styles from "./SearchBar.module.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

type SearchBarProps = {
  onSubmit: (input: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.inputCont} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
