import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Pagination, Button, Snackbar, Alert, Container } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import useFetchUsers from "../hooks/useFetchUsers";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import axios from "axios";

const Users = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const { users, totalPages, setUsers } = useFetchUsers(page, token);

  if (!token) {
    navigate("/login");
    return null;
  }

  // Search filter (only for the current page)
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      setMessage("User deleted successfully");
    } catch (err) {
      setMessage("Error deleting user");
    }
  };

  return (
    <Container>
      <Button onClick={logout} sx={{ my: 2 }} variant="contained" color="error">
        Logout
      </Button>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard
              user={user}
              onEdit={() => {
                setSelectedUser(user);
                setOpenForm(true);
              }}
              onDelete={() => handleDelete(user.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ mt: 3 }}
      />

      <UserForm
        open={openForm}
        user={selectedUser}
        onClose={() => setOpenForm(false)}
      />

      <Snackbar open={!!message} onClose={() => setMessage("")}>
        <Alert severity={message.includes("success") ? "success" : "error"}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Users;
