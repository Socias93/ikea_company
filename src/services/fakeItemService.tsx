import { Category, getCategories } from "./fakeCategoryService";

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

const items: Item[] = [
  {
    _id: "i1",
    name: "Billy Bookcase",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 10,
    price: 120,
  },
  {
    _id: "i2",
    name: "Malm Bed",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 5,
    price: 250,
  },
  {
    _id: "i3",
    name: "Poäng Chair",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 8,
    price: 80,
  },
  {
    _id: "i4",
    name: "Lack Table",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 12,
    price: 50,
  },

  // Lighting
  {
    _id: "i5",
    name: "Fado Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 15,
    price: 40,
  },
  {
    _id: "i6",
    name: "Ranarp Work Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 7,
    price: 60,
  },
  {
    _id: "i7",
    name: "Sinnerlig Pendant",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 5,
    price: 70,
  },
  {
    _id: "i8",
    name: "Maskros Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 3,
    price: 90,
  },

  // Textiles
  {
    _id: "i9",
    name: "Gullklocka Curtain",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 20,
    price: 25,
  },
  {
    _id: "i10",
    name: "Värnamo Rug",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 10,
    price: 70,
  },
  {
    _id: "i11",
    name: "Dvala Bedspread",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 15,
    price: 35,
  },
  {
    _id: "i12",
    name: "Tåstrup Pillow",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 25,
    price: 15,
  },

  // Storage
  {
    _id: "i13",
    name: "Kallax Shelf",
    category: { _id: "4", name: "Storage" },
    numberInStock: 10,
    price: 60,
  },
  {
    _id: "i14",
    name: "Skubb Box",
    category: { _id: "4", name: "Storage" },
    numberInStock: 30,
    price: 10,
  },
  {
    _id: "i15",
    name: "Trones Shoe Cabinet",
    category: { _id: "4", name: "Storage" },
    numberInStock: 5,
    price: 25,
  },
  {
    _id: "i16",
    name: "Brimnes Wardrobe",
    category: { _id: "4", name: "Storage" },
    numberInStock: 7,
    price: 150,
  },

  // Kitchen
  {
    _id: "i17",
    name: "IKEA 365+ Pan",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 15,
    price: 30,
  },
  {
    _id: "i18",
    name: "Klockis Clock",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 12,
    price: 15,
  },
  {
    _id: "i19",
    name: "Fintorp Rail",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 10,
    price: 20,
  },
  {
    _id: "i20",
    name: "365+ Glass",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 50,
    price: 5,
  },

  // Decor
  {
    _id: "i21",
    name: "Fejka Plant",
    category: { _id: "6", name: "Decor" },
    numberInStock: 25,
    price: 10,
  },
  {
    _id: "i22",
    name: "Lack Wall Shelf",
    category: { _id: "6", name: "Decor" },
    numberInStock: 15,
    price: 20,
  },
  {
    _id: "i23",
    name: "Stråla LED Candles",
    category: { _id: "6", name: "Decor" },
    numberInStock: 10,
    price: 15,
  },
  {
    _id: "i24",
    name: "Socker Plant Pot",
    category: { _id: "6", name: "Decor" },
    numberInStock: 30,
    price: 12,
  },

  // Outdoor
  {
    _id: "i25",
    name: "Äpplarö Chair",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 8,
    price: 90,
  },
  {
    _id: "i26",
    name: "Äpplarö Table",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 5,
    price: 150,
  },
  {
    _id: "i27",
    name: "Tärnö Lounge Chair",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 10,
    price: 70,
  },
  {
    _id: "i28",
    name: "Sunnanö Umbrella",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 6,
    price: 50,
  },
];

export function getItems() {
  return items;
}

export function getItem(id: string) {
  return items.find((item) => item._id === id);
}

export function saveItem(item: ItemFormData) {
  const categoryInDb = getCategories().find((c) => c._id === item.categoryId);
  if (!categoryInDb) throw new Error("Category not found");

  const itemInDb = items.find((i) => i._id === item._id) || ({} as Item);

  itemInDb.name = item.name;
  itemInDb.category = categoryInDb;
  itemInDb.numberInStock = item.numberInStock;
  itemInDb.price = item.price;

  if (!itemInDb._id) {
    itemInDb._id = Date.now().toString();
    items.push(itemInDb);
  }

  return itemInDb;
}

export function deleteItem(id: string) {
  const itemInDb = items.find((i) => i._id === id);
  if (itemInDb) items.splice(items.indexOf(itemInDb), 1);
  return itemInDb;
}
