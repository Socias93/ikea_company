import { useEffect, useState } from "react";
import { getCategories } from "../services/fakeCategoryService";
import { mapToItemData } from "../components/utils";
import { getItem } from "../services/fakeItemService";

export function useItemForm(id: string | undefined, reset: any) {
  const [categories, setCategories] = useState(getCategories());

  useEffect(() => {
    function fetch() {
      const category = getCategories();
      if (!category) return;
      setCategories(categories);

      if (!id || id === "new/item") {
        reset({
          name: "",
          categoryId: "",
          numberInStock: null,
          price: null,
        } as any);
        return;
      }
      const item = getItem(id);
      if (!item) return;
      reset(mapToItemData(item));
    }
    fetch();
  }, [id, reset]);

  return { categories };
}
