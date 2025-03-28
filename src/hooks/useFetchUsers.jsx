import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUsers = (page, token) => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(res.data.data);
        setTotalPages(res.data.total_pages);
      } catch (err) {
        setError("Error fetching users");
      }
      setLoading(false);
    };

    fetchUsers();
  }, [page, token]);

  return { users, totalPages, loading, error, setUsers };
};

export default useFetchUsers;
