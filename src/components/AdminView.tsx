import axios from "axios";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { UserBasicInfo } from "../types/UserTypes";

function AdminView() {
  const [users, setUsers] = useState([]);

  const handleGetAllUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.VITE_BACKEND_BASE_URL}/registered-users`,
      );
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin View</h1>
        <Button onClick={handleGetAllUsers}>Get All Users</Button>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: UserBasicInfo) => (
                <tr key={user.userId}>
                    <td>{user.email}</td>
                    <td>{user.fName}</td>
                    <td>{user.lName}</td>
                    <td>{user.userRole}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
  );
}

export default AdminView;
