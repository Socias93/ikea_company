import { zodResolver } from "@hookform/resolvers/zod";
import { ItemFormData, schema } from "./schemas/ItemSchema";
import { useForm } from "react-hook-form";
import { saveItem } from "../services/fakeItemService";
import { useNavigate, useParams } from "react-router-dom";
import { useItemForm } from "../hooks/useItemForm";

function ItemFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemFormData>({ resolver: zodResolver(schema) });

  const { categories } = useItemForm(id, reset);

  function onSubmit(data: ItemFormData) {
    console.log("Submitted", data);
    saveItem(data);
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="vh-100 d-grid justify-content-center align-content-center">
          <h3 className="text-primary text-center">ItemForm</h3>;
          <div
            className="p-3 shadow-lg rounded-3"
            style={{ maxWidth: "300px" }}>
            <div className="mb-4">
              <label className="form-label text-primary">Name</label>
              <input {...register("name")} className="form-control" />
              <div style={{ minHeight: "20px" }}>
                {errors.name && (
                  <p className="text-danger"> {errors.name.message} </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <select {...register("categoryId")} className="form-select">
                <option value="">Category</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div style={{ minHeight: "20px" }}>
                {errors.categoryId && (
                  <p className="text-danger"> {errors.categoryId.message} </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label text-primary">Stock</label>
                <input
                  {...register("numberInStock", { valueAsNumber: true })}
                  className="form-control"
                />
                {errors.numberInStock && (
                  <p className="text-danger">{errors.numberInStock.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="form-label text-primary">Price</label>
              <input
                {...register("price", { valueAsNumber: true })}
                className="form-control"
              />
              <div style={{ minHeight: "20px" }}>
                {errors.price && (
                  <p className="text-danger"> {errors.price.message} </p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-outline-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ItemFormPage;
