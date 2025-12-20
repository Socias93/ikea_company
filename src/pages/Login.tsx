import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginData, schema } from "./schemas/LoginSchema";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({ resolver: zodResolver(schema) });

  function onSubmit(data: loginData) {
    console.log("Submitted", data);
    navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="vh-100 d-grid justify-content-center align-content-center">
          <h3 className="text-primary mb-3 text-center">Register page</h3>
          <div className="p-3 shadow rounded-3">
            <div className="mb-3 text-primary">
              <label className="form-label">Name</label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
              />
              {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
              )}
            </div>

            <div className="mb-3 text-primary">
              <label className="form-label">Password</label>
              <input
                {...register("password")}
                type="text"
                className="form-control"
              />
              {errors.password && (
                <p className="text-danger"> {errors.password.message} </p>
              )}
            </div>
            <div className="text-center m-2">
              <button className="btn btn-outline-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
