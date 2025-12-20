import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .email({ error: "You must write a valid email" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password cant be less than 8 characters" }),
});

type registerData = z.infer<typeof schema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({ resolver: zodResolver(schema) });
  return (
    <>
      <form>
        <div className="vh-100 d-grid justify-content-center align-content-center">
          <h3 className="text-primary mb-3 text-center">Register page</h3>
          <div className="p-3 shadow rounded-3">
            <div className="mb-3 text-primary">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 text-primary">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 text-primary">
              <label className="form-label">Password</label>
              <input type="text" className="form-control" />
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
