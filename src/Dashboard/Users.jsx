
import './User.css';
// import Userarray from "./Userarray";
import React, { useState } from "react";
import Edituser from '../Dashboard/Edituser';
function Users() {
const [isEditModalOpen, setEditModalOpen] = useState(false);
const handleEditClick = () => {
  setEditModalOpen((previsEditModal) => !previsEditModal);
};

  return (
    <div className="USER_DISPLAY">
      {isEditModalOpen && <Edituser handleEditClick={handleEditClick} />}
      <table>
        <thead>
          <tr className="tab1">
            <th>Username</th>
            <th>Email</th>

            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {Userarray.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>

              <td className="yv">
                <button type="option" onClick={handleEditClick}>
                  edit 
                </button>&nbsp;&nbsp;&nbsp;
                <button type="submit" className="A">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
