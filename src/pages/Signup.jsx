import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginModal from "../components/LoginModal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex max-w-md bg-white shadow w-full mx-auto items-center justify-center mt-20 pb-6">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create a Account!</h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
              id="password"
              {...register("password", { required: true })}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-accent hover:bg-black text-white"
            />
          </div>
          <p className="text-center my-2 ">
            Have an account?{" "}
            <button
              className="underline text-error ml-1"
              onClick={() => document.getElementById("login").showModal()}
            >
              Login
            </button>
            <LoginModal />
          </p>
        </form>
        {/* social btn  */}
        <div className="text-center space-x-3">
          <button className="btn btn-circle hover:bg-accent hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-accent hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-accent hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
