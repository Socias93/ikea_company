import axios from "axios";
import { employeFormData } from "../pages/schemas/EmployeSchema";

const EMPLOYE_URL = "http://localhost:5555/api/employes";

export interface Employe {
  id: string;
  name: string;
  email: string;
  number: number;
  role: string;
}

export function getEmployes() {
  return axios.get<Employe[]>(EMPLOYE_URL);
}

export function getEmploye(id: string) {
  return axios.get(`${EMPLOYE_URL}/${id}`);
}

export function saveEmploye(employe: employeFormData) {}

export function deleteEmploye(id: string) {
  const employeInDb = employes.find((employe) => employe.id === id);
  if (!employeInDb) return null;

  employes.splice(employes.indexOf(employeInDb), 1);
  return employeInDb;
}
