import React from "react";
import "./../Dashboard/Toursform.css";

import TourArray from "./TourArray";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";

function AddFormtours({ handleCreateClick }) {
  const onSubmit = async (tour) => {
    const formData = new FormData();
    formData.append("destination", tour.destination);
    formData.append("Title", tour.title);
    formData.append("Description", tour.description);
    formData.append("Duration", tour.duration);
    formData.append("GroupSize", tour.groupSize);
    formData.append("Price", tour.price);
    formData.append("Discount", tour.discount);
    formData.append("backdropImage", tour.image[0]);
    formData.append("Gallery", tour.gallery[0]);

    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Notify.success("Tour created successfuly");
      if (res.data) {
        console.log("Tour created", res.data);
      }
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="addover">
      <div className="overall">
        <div className="tourform">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-groupT">
              <label for="garrely">gallery:</label>
              <input
                type="file"
                name="gallery"
                accept="image/*"
                {...register("gallery", { required: true })}
              />
            </div>
            <div className="form-groupT">
              <label for="Image">Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                {...register("image", { required: true })}
              />
            </div>

            <div className="form-groupT">
              <label>Country:</label>
              <input
                type="text"
                name="title"
                {...register("title", { required: true })}
              />
            </div>

            <div className="form-groupT">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                {...register("description", { required: true })}
              />
            </div>

            <div className="form-groupT">
              <label>Groupsize:</label>
              <input
                type="number"
                name="price"
                {...register("groupsize", { required: true })}
              />
            </div>

            <div className="form-groupT">
              <label>Duration:</label>
              <input
                type="text"
                name="duration"
                {...register("duration", { required: true })}
              />
            </div>

            <div className="edit-footerT">
              <button type="submit" className="edit-button edit-save">
                Create
              </button>
              <button
                type="option"
                className="edit-button edit-save"
                onClick={handleCreateClick}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFormtours;
