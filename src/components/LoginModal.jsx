import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // redirecting to home page

  const onSubmit = ({ email, password }) => {};
  return (
    <dialog id="login" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg">Login</h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
                value="Login"
                className="btn bg-accent hover:bg-black text-white"
              />
            </div>
            <p className="text-center my-2 ">
              Do not have an account?{" "}
              <Link className="underline text-error ml-1" to="signup">
                Signup Now
              </Link>
            </p>
            <button
              onClick={() => document.getElementById("login").close()}
              htmlFor="login"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
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
    </dialog>
  );
};

export default LoginModal;
