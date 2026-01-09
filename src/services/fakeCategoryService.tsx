import { CategoryFormData } from "../pages/schemas/CategorySchema";
import { Category } from "../types";
import axios from "axios";

const CATEGORY_URL = "http://localhost:5555/api/categories";

export function getCategories() {
  return axios.get<Category[]>(CATEGORY_URL);
}

export function getCategory(id: string) {
  return axios.get<Category>(`${CATEGORY_URL}/${id}`);
}

export function saveCategory(category: CategoryFormData) {
  if (category.id) {
    return axios.put<Category>(`${CATEGORY_URL}/${(category.id, category)}`);
  } else {
    return axios.post<Category>(CATEGORY_URL, category);
  }
}

export function deleteCategory(id: string) {
  return axios.delete(`${CATEGORY_URL}/${id}`);
}
