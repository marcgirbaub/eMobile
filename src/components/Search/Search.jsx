import TextField from "@mui/material/TextField";

const Search = ({ searchValue, onChangeHandler, className }) => (
  <TextField
    label="Search"
    placeholder="Search by brand and model"
    variant="outlined"
    value={searchValue}
    onChange={onChangeHandler}
    className={`${className}`}
  />
);

export default Search;
