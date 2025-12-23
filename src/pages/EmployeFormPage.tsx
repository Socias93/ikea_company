import { zodResolver } from "@hookform/resolvers/zod";
import { employeFormData, schema } from "./schemas/EmployeSchema";
import { useForm } from "react-hook-form";

function EmployeFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<employeFormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: employeFormData) {
    console.log("Submitted", data);
  }
  return (
    <>
      <div className="vh-100 d-grid justify-content-center align-content-center">
        <div
          className="p-3 shadow rounded-3"
          style={{ width: "500px", maxWidth: "500px" }}>
          <form onSubmit={handleSubmit(onSubmit)} className="text-primary">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input {...register("name")} className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.name && (
                  <p className="text-danger">{errors.name.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label
                {...register("age", { valueAsNumber: true })}
                className="form-label">
                Age
              </label>
              <input className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.age && (
                  <p className="text-danger">{errors.age.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label {...register("email")} className="form-label">
                Email
              </label>
              <input className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.email && (
                  <p className="text-danger">{errors.email.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label
                {...register("phone", { valueAsNumber: true })}
                className="form-label">
                Phone
              </label>
              <input className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.phone && (
                  <p className="text-danger">{errors.phone.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label {...register("role")} className="form-label">
                Role
              </label>
              <input className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.role && (
                  <p className="text-danger">{errors.role.message} </p>
                )}
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary w-50">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmployeFormPage;
