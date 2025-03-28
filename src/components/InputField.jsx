import { TextField } from "@mui/material";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <TextField
      fullWidth
      placeholder={label} 
      type={type}
      value={value}
      onChange={onChange}
      margin="normal"
      required
    />
  );
};

export default InputField;
