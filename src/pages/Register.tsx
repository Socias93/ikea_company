import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerData, schema } from "./schemas/RegisterSchema";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({ resolver: zodResolver(schema) });

  function onSubmit(data: registerData) {
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
              <label className="form-label">Email</label>
              <input
                {...register("email")}
                type="text"
                className="form-control"
              />
              {errors.email && (
                <p className="text-danger"> {errors.email.message} </p>
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

export default Register;
