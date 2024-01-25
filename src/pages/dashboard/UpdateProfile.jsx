import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../config/contexts/AuthProvider";

const UpdateProfile = () => {
  const { updateProfile } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = ({ name, photoURL }) => {
    updateProfile(name, photoURL)
      .then(() => {
        alert("Update successful");
      })
      .catch(() => {});
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="text"
              {...register("photoURL")}
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
