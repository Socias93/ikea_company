export interface Category {
  _id: string;
  name: string;
}

export interface Item {
  _id: string;
  name: string;
  category: Category;
  numberInStock: number;
  price: number;
}

export interface ItemFormData {
  _id?: string;
  name: string;
  categoryId: string;
  numberInStock: number;
  price: number;
}
