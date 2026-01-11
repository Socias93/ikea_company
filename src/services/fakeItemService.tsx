import axios from "axios";
import { Item, ItemFormData } from "../types";

const ITEM_URL = "http://localhost:5555/api/items";

export async function getItems() {
  return axios.get<Item[]>(ITEM_URL);
}

export function getItem(id: string) {
  return axios.get<Item>(`${ITEM_URL}/${id}`);
}

export function saveItem(item: ItemFormData) {
  if (item.id) {
    return axios.put(`${ITEM_URL}/${item.id}`, item);
  } else {
    return axios.post(ITEM_URL, item);
  }
}

export function deleteItem(id: string) {
  return axios.delete(`${ITEM_URL}/${id}`);
}
