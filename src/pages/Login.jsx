import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import InputField from "../components/InputField"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/login", { email, password });
      login(res.data.token);
      toast.success("Logged in successfully!");
      navigate("/users");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Login Page
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          {error && <Typography color="error">{error}</Typography>}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
