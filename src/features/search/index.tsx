import { useState } from "react";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import classes from "./Search.module.css";

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event);
  };

  return (
    <input
      className={classes.search}
      {...props}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search"
    />
  );
};

export default Search;
