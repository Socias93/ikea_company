import { CategoryFormData } from "../pages/schemas/CategorySchema";
import { Category } from "../types";
import axios from "axios";

const BASE_URL = "http://localhost:5555/";

const CATEGORY_URL = "api/categories";

export const categories: Category[] = [
  { id: "1", name: "Furniture" },
  { id: "2", name: "Lighting" },
  { id: "3", name: "Textiles" },
  { id: "4", name: "Storage" },
  { id: "5", name: "Kitchen" },
  { id: "6", name: "Decor" },
  { id: "7", name: "Outdoor" },
];

export function getCategories() {
  return axios.get<Category[]>(BASE_URL + CATEGORY_URL);
}

export function getCategory(id: string) {
  return axios.get<Category>(`${BASE_URL + CATEGORY_URL}/${id}`);
}

export function saveCategory(category: CategoryFormData) {
  if (category.id) {
    return axios.put<Category>(
      `${BASE_URL + CATEGORY_URL}/${(category.id, category)}`
    );
  } else {
    return axios.post<Category>(BASE_URL + CATEGORY_URL, category);
  }
}

export function deleteCategory(id: string) {
  return axios.delete(`${BASE_URL + CATEGORY_URL}/${id}`);
}
