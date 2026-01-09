import axios from "axios";
import { employeFormData } from "../pages/schemas/EmployeSchema";
import { Employe } from "../types";

const EMPLOYE_URL = "http://localhost:5555/api/employes";

export function getEmployes() {
  return axios.get<Employe[]>(EMPLOYE_URL);
}

export function getEmploye(id: string) {
  return axios.get<Employe>(`${EMPLOYE_URL}/${id}`);
}

export function saveEmploye(employe: employeFormData) {
  if (employe.id) {
    return axios.put<Employe>(`${EMPLOYE_URL}/${employe.id}`, employe);
  } else {
    return axios.post<Employe>(EMPLOYE_URL, employe);
  }
}

export function deleteEmploye(id: string) {
  return axios.delete(`${EMPLOYE_URL}/${id}`);
}
