import React, { useState } from "react";
import "./../Dashboard/Toursform.css";

import axios from "axios";


function Toursform({ handleEditClick, item }) {
  const [title, setTitle] = useState(item.Title);
  const [description, setDescription] = useState(item.Description);
  const [groupsize, setGroupSize] = useState(item.GroupSize);

  const [duration, setDuration] = useState(item.Duration);

  function handleUpdate(e) {
    e.preventDefault();

    const Formdata = {
      Title: title,
      Description: description,
      GroupSize: groupsize,
      Duration: duration,
    };
    axios.put(`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${item._id}`,
        Formdata
      )
      .then(({ response }) => {
        alert("tour updated");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div>
      <div className="tourform">
        <form method="get" onSubmit={handleUpdate}>
          <div className="form-groupT">
            <label for="Image">Image:</label>
            <input type="file" id="Image" name="Image" />
          </div>

          <div className="form-groupT">
            <label>Country:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-groupT">
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-groupT">
            <label>Group Size:</label>
            <input
              type="number"
              value={groupsize}
              onChange={(e) => setGroupSize(e.target.value)}
            />
          </div>

          <div className="form-groupT">
            <label>Duration:</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="edit-footerT">
            <button type="submit" className="edit-button edit-save">
              Save
            </button>
            <button
              type="button"
              className="edit-button edit-cancel"
              onClick={handleEditClick}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Toursform;
