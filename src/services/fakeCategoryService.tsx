export interface Category {
  _id: string;
  name: string;
}

export const categories: Category[] = [
  { _id: "1", name: "Furniture" },
  { _id: "2", name: "Lighting" },
  { _id: "3", name: "Textiles" },
  { _id: "4", name: "Storage" },
  { _id: "5", name: "Kitchen" },
  { _id: "6", name: "Decor" },
  { _id: "7", name: "Outdoor" },
];

export function getCategories() {
  return categories;
}
