import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import LoginModal from "../components/LoginModal";
import { AuthContext } from "../config/contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { loginGmail, userSignup } = useContext(AuthContext);
  // redirecting to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    loginGmail()
      .then((result) => {
        const user = result.user;
        alert("login success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmit = ({ email, password }) => {
    userSignup(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Create success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <button
            className="btn btn-circle hover:bg-accent hover:text-white"
            onClick={handleGoogleLogin}
          >
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
