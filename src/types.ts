export interface Category {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  name: string;
  category: Category;
  numberInStock: number;
  price: number;
}

export interface ItemFormData {
  id?: string;
  name: string;
  categoryId: string;
  numberInStock: number;
  price: number;
}

export interface Column {
  path: string;
  label: string;
}
