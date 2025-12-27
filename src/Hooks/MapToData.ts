import { Employe } from "../services/FakeEmployeService";
import { Category, Item } from "../types";

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

export function mapToCategoryData(data: Category) {
  return {
    id: data.id,
    name: data.name,
  };
}

export function mapToItemData(data: Item) {
  return {
    id: data.id,
    name: data.name,
    categoryId: data.category.id,
    numberInStock: data.numberInStock,
    price: data.price,
  };
}
