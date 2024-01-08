import React, { useState } from "react";
import "./Tourarray.css";

import { Appcontext } from "../context/Contextprovider";
import { mycontext } from "../context/Contextprovider";
import Toursform from "./Toursform";
import AddFormtours from "./AddFormtours";
import Notiflix from "notiflix";
import axios from "axios";

function TourArray() {
  const { listcard } = mycontext();

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedTour, setEditedTour] = useState(null);
  const handleEditClick = (item) => {
    setEditedTour(item);
    setEditModalOpen((previsEditModal) => !previsEditModal);
  };
  const [isCreate, setCreate] = useState(false);
  const handleCreateClick = () => {
    setCreate((previsEditModal) => !previsEditModal);
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);
  const handleConfirmDelete = async (id) => {
    try {
      Notiflix.Confirm.show(
        "Confirm delete user",
        "Do you want to delete?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          window.location.reload();
        },
        () => {
          alert("If you say so...");
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (tours) => {
    setTourToDelete(tours);
    handleConfirmDelete();
    // setShowDeleteConfirm(true);
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  
  
  return (
    <div className="dash_array_tour">
      {isCreate && <AddFormtours handleCreateClick={handleCreateClick} />}
      {isEditModalOpen && (
        <Toursform handleEditClick={handleEditClick} item={editedTour} />
      )}

      <div className="add">
        <button type="option" onClick={handleCreateClick}>
          Add Tours
        </button>
      </div>
      <table>
        <thead>
          <tr className="tab1">
            <th>gallery</th>
            <th>Image</th>
            <th>Country</th>
            <th>Description</th>
            <th>GroupSize</th>
            <th>Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listcard?.map((item) => (
            <tr key={item._id}>
              <td className="gl">{item.Gallery}</td>
              <td>
                <img
                  src={item.backdropImage}
                  alt={`Image for ${item.Galley}`}
                  className="img_tours"
                />
              </td>

              <td>{item.Title}</td>
              <td>{item.Description}</td>
              <td>{item.GroupSize}</td>
              <td>{item.Duration}</td>
              <td>
                <button type="option" onClick={() => handleEditClick(item)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="cancel"
                  className="A"
                  onClick={() => handleConfirmDelete(item._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}

          {showDeleteConfirm && (
            <div className="popup">
              <p>Are you sure you want to delete {tourToDelete._id}?</p>
              <button onClick={handleConfirmDelete}>OK</button>
              <button onClick={handleCancelDelete}>Cancel</button>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TourArray;
