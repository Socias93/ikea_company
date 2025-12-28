import { zodResolver } from "@hookform/resolvers/zod";
import { employeFormData, schema } from "./schemas/EmployeSchema";
import { useForm } from "react-hook-form";
import { getEmploye, saveEmploye } from "../services/FakeEmployeService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { mapToEmployeData } from "../components/utils";

function EmployeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<employeFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    function fetch() {
      if (!id || id === "new/employe") {
        reset({
          age: "",
          email: "",
          name: "",
          phone: "",
          role: "",
        } as any);
        return;
      }
      const employe = getEmploye(id);

      if (!employe) return;
      reset(mapToEmployeData(employe));
    }
    fetch();
  }, [reset, id]);

  function onSubmit(data: employeFormData) {
    console.log("Submitted", data);
    saveEmploye(data);
    navigate("/employes");
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
              <label className="form-label">Age</label>
              <input
                {...register("age", { valueAsNumber: true })}
                className="form-control"
              />
              <div style={{ minHeight: "20px" }}>
                {errors.age && (
                  <p className="text-danger">{errors.age.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input {...register("email")} className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.email && (
                  <p className="text-danger">{errors.email.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                {...register("phone", { valueAsNumber: true })}
                className="form-control"
              />
              <div style={{ minHeight: "20px" }}>
                {errors.phone && (
                  <p className="text-danger">{errors.phone.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <input {...register("role")} className="form-control" />
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
