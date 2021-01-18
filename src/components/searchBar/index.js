import React from "react";
import { SearchIcon, ArrowRight } from "../icons";
import "./styles.scss";

const SearchBar = ({
  className,
  onChange,
  value,
  arrowClass,
  onSubmit,
  disabled,
}) => {
  return (
    <form className={`search_bar ${className}`} onSubmit={onSubmit}>
      <SearchIcon width="20px" height="20px" />

      <input placeholder="Search for photo" onChange={onChange} value={value} />
      <button disabled={disabled}>
        <ArrowRight width="20px" height="20px" className={arrowClass} />
      </button>
    </form>
  );
};

export default SearchBar;
