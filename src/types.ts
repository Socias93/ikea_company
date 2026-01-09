import { JSX } from "react";

export interface Category {
  id: string;
  name: string;
}

export interface Employe {
  id: string;
  name: string;
  email: string;
  phone: number;
  role: string;
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

export interface Textcolumn {
  path: string;
  label: string;
}

export interface ContentColumn {
  key: string;
  content: (item: Item) => JSX.Element;
}

export type Column = Textcolumn | ContentColumn;
