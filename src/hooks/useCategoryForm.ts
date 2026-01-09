import { useEffect } from "react";
import { getCategory } from "../services/fakeCategoryService";
import { mapToCategoryData } from "../components/utils";

export function useCategoryForm(id: string | undefined, reset: any) {
  useEffect(() => {
    async function fetch() {
      if (!id || id === "new/category") {
        reset({
          name: "",
        });
        return;
      }
      const { data: category } = await getCategory(id);
      if (!category) return;
      reset(mapToCategoryData(category));
    }
    fetch();
  }, [reset, id]);
}
