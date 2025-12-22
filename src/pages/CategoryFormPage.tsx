import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryFormData, schema } from "./schemas/CategorySchema";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategory, saveCategory } from "../services/fakeCategoryService";
import { Category } from "../types";

function CategoryFormPage() {
  const [categories, setCategories] = useState<Category | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    defaultValues: { name: "" },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    function fetch() {
      if (!id || id === "new/category") {
        reset({
          name: "",
        });
        setCategories(null);
        return;
      }
      const category = getCategory(id);
      if (!category) return;
      reset(mapToCategoryData(category));
    }
    fetch();
  }, [reset, id]);

  function mapToCategoryData(data: CategoryFormData) {
    return {
      name: data.name,
    };
  }

  function onSubmit(data: CategoryFormData) {
    console.log("Submitted", data);
    saveCategory(data);
    navigate("/");
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
