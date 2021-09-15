import React from "react";
import { SearchIcon, ArrowRight, CloseIcon } from "../icons";
import "./styles.scss";

const SearchBar = ({
  className,
  onChange,
  value,
  arrowClass,
  onSubmit,
  disabled,
  statusDisplay,
  searchText,
  searchValue,
  toggleSearchStatus,
}) => {
  return (
    <div>
      {/* <img src={Logo} className="logo-alt" /> */}
      <form className={`search_bar ${className}`} onSubmit={onSubmit}>
        <SearchIcon width="20px" height="20px" />

        <input
          placeholder="Search for photo"
          onChange={onChange}
          value={value}
        />
        <button disabled={disabled}>
          <ArrowRight width="20px" height="20px" className={arrowClass} />
        </button>
      </form>
      <h1 className={`search_status ${statusDisplay}`}>
        {searchText} <span className="faded">{` "${searchValue}"`}</span>
        <span onClick={toggleSearchStatus}>
          <CloseIcon fill="black" />
        </span>
      </h1>
    </div>
  );
};

export default SearchBar;
