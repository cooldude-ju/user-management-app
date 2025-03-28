import { TextField } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search Users"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
};

export default SearchBar;
