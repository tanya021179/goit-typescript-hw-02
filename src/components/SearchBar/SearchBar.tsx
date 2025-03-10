import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { useState, FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      toast.error("Please enter a query to search for images.");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
