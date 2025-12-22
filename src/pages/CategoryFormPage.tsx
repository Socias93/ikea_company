import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryData, schema } from "./schemas/CategorySchema";
import { useForm } from "react-hook-form";

function CategoryFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryData>({ resolver: zodResolver(schema) });

  function onSubmit(data: CategoryData) {
    console.log("Submitted", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="vh-100 d-grid justify-content-center align-content-center">
          <h3 className="text-primary text-center">CategoryForm</h3>;
          <div className="p-3 shadow-lg rounded-3">
            <div className="m-2">
              <label className="form-label text-primary">Name</label>
              <input {...register("name")} className="form-control" />{" "}
              {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
              )}
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary m-3">Save</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CategoryFormPage;
