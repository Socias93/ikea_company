import { zodResolver } from "@hookform/resolvers/zod";
import { ItemFormData, schema } from "./schemas/ItemSchema";
import { useForm } from "react-hook-form";

function ItemFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemFormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: ItemFormData) {
    console.log("Submitted", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="vh-100 d-grid justify-content-center align-content-center">
          <h3 className="text-primary text-center">ItemForm</h3>;
          <div className="p-3 shadow-lg rounded-3">
            <div className="m-2">
              <label className="form-label text-primary">Name</label>
              <input {...register("name")} className="form-control" />
              {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
              )}
            </div>
            <div className="m-2">
              <label className="form-label text-primary">Stock</label>
              <input {...register("numberInStock")} className="form-control" />
              {errors.numberInStock && (
                <p className="text-danger"> {errors.numberInStock.message} </p>
              )}
            </div>
            <div className="m-2">
              <label className="form-label text-primary">Name</label>
              <input {...register("price")} className="form-control" />
              {errors.price && (
                <p className="text-danger"> {errors.price.message} </p>
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

export default ItemFormPage;
