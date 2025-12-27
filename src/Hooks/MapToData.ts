import { Employe } from "../services/FakeEmployeService";

export function mapToEmployeData(data: Employe) {
  return {
    id: data.id,
    name: data.name,
    age: data.age,
    email: data.email,
    phone: data.number,
    role: data.role,
  };
}
