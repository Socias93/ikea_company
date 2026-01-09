import { Category, Item, Employe } from "../types";

export function range(startNumber: number, endNumber: number): number[] {
  let pages: number[] = [];

  for (let count = startNumber; count <= endNumber; count++) {
    pages.push(count);
  }
  return pages;
}

export function paginate<T>(
  items: T[],
  pageSize: number,
  selectedPage: number
) {
  const startNumber = pageSize * (selectedPage - 1);
  const endNumber = pageSize * selectedPage;

  return items.slice(startNumber, endNumber);
}

export function mapToEmployeData(data: Employe) {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone,
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
