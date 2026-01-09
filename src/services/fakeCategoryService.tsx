import { CategoryFormData } from "../pages/schemas/CategorySchema";
import { Category } from "../types";
import axios from "axios";

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
  return categories;
}

export function getCategory(id: string) {
  return categories.find((category) => category.id === id);
}

export function saveCategory(category: CategoryFormData) {
  let categoryInDb;

  if (category.id) {
    categoryInDb = categories.find((c) => c.id === category.id);
    if (!categoryInDb) throw new Error("Category not found");
    categoryInDb.name = category.name;
  } else {
    categoryInDb = {
      id: Date.now().toString(),
      name: category.name,
    };
    categories.push(categoryInDb);
  }

  return categoryInDb;
}

export function deleteCategory(id: string) {
  const categoryInDb = categories.find((c) => c.id === id);
  if (!categoryInDb) return null;

  categories.splice(categories.indexOf(categoryInDb), 1);
  return categoryInDb;
}
