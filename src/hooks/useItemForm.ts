import { useEffect, useState } from "react";
import { getCategories } from "../services/fakeCategoryService";
import { mapToItemData } from "../components/utils";
import { getItem } from "../services/fakeItemService";
import { Category } from "../types";

export function useItemForm(id: string | undefined, reset: any) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: category } = await getCategories();
      if (!category) return;
      setCategories(category);

      if (!id || id === "new/item") {
        reset({
          name: "",
          categoryId: "",
          numberInStock: null,
          price: null,
        } as any);
        return;
      }
      const { data: item } = await getItem(id);
      if (!item) return;
      reset(mapToItemData(item));
    }
    fetch();
  }, [id, reset]);

  return { categories };
}
