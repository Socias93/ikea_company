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
    name: "BILLY Bookcase",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 10,
    price: 120,
  },
  {
    _id: "i2",
    name: "MALM Bed Frame",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 5,
    price: 250,
  },
  {
    _id: "i3",
    name: "POÄNG Armchair",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 8,
    price: 80,
  },
  {
    _id: "i4",
    name: "LACK Side Table",
    category: { _id: "1", name: "Furniture" },
    numberInStock: 12,
    price: 50,
  },

  // Lighting
  {
    _id: "i5",
    name: "FADO Table Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 15,
    price: 40,
  },
  {
    _id: "i6",
    name: "RANARP Work Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 7,
    price: 60,
  },
  {
    _id: "i7",
    name: "SINNERLIG Pendant Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 5,
    price: 70,
  },
  {
    _id: "i8",
    name: "MASKROS Pendant Lamp",
    category: { _id: "2", name: "Lighting" },
    numberInStock: 3,
    price: 90,
  },

  // Textiles
  {
    _id: "i9",
    name: "GULLKLOCKA Curtains",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 20,
    price: 25,
  },
  {
    _id: "i10",
    name: "VÄRNAMO Rug",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 10,
    price: 70,
  },
  {
    _id: "i11",
    name: "DVALA Bedspread",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 15,
    price: 35,
  },
  {
    _id: "i12",
    name: "TÅSTRUP Cushion Cover",
    category: { _id: "3", name: "Textiles" },
    numberInStock: 25,
    price: 15,
  },

  // Storage
  {
    _id: "i13",
    name: "KALLAX Shelf Unit",
    category: { _id: "4", name: "Storage" },
    numberInStock: 10,
    price: 60,
  },
  {
    _id: "i14",
    name: "SKUBB Storage Box",
    category: { _id: "4", name: "Storage" },
    numberInStock: 30,
    price: 10,
  },
  {
    _id: "i15",
    name: "TRONES Shoe Cabinet",
    category: { _id: "4", name: "Storage" },
    numberInStock: 5,
    price: 25,
  },
  {
    _id: "i16",
    name: "BRIMNES Wardrobe",
    category: { _id: "4", name: "Storage" },
    numberInStock: 7,
    price: 150,
  },

  // Kitchen
  {
    _id: "i17",
    name: "IKEA 365+ Frying Pan",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 15,
    price: 30,
  },
  {
    _id: "i18",
    name: "KLOCKIS Clock / Thermometer",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 12,
    price: 15,
  },
  {
    _id: "i19",
    name: "FINTORP Rail",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 10,
    price: 20,
  },
  {
    _id: "i20",
    name: "IKEA 365+ Glass",
    category: { _id: "5", name: "Kitchen" },
    numberInStock: 50,
    price: 5,
  },

  // Decor
  {
    _id: "i21",
    name: "FEJKA Artificial Potted Plant",
    category: { _id: "6", name: "Decor" },
    numberInStock: 25,
    price: 10,
  },
  {
    _id: "i22",
    name: "LACK Wall Shelf",
    category: { _id: "6", name: "Decor" },
    numberInStock: 15,
    price: 20,
  },
  {
    _id: "i23",
    name: "STRÅLA LED Candles",
    category: { _id: "6", name: "Decor" },
    numberInStock: 10,
    price: 15,
  },
  {
    _id: "i24",
    name: "SOCKER Plant Pot",
    category: { _id: "6", name: "Decor" },
    numberInStock: 30,
    price: 12,
  },

  // Outdoor
  {
    _id: "i25",
    name: "ÄPPLARÖ Outdoor Chair",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 8,
    price: 90,
  },
  {
    _id: "i26",
    name: "ÄPPLARÖ Outdoor Table",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 5,
    price: 150,
  },
  {
    _id: "i27",
    name: "TÄRNÖ Outdoor Chair",
    category: { _id: "7", name: "Outdoor" },
    numberInStock: 10,
    price: 70,
  },
  {
    _id: "i28",
    name: "SUNNANÖ Parasol",
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
