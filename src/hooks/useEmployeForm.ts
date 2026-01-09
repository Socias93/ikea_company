import { useEffect } from "react";
import { mapToEmployeData } from "../components/utils";
import { getEmploye } from "../services/FakeEmployeService";

export function useEmployeForm(id: string | undefined, reset: any) {
  useEffect(() => {
    async function fetch() {
      if (!id || id === "new/employe") {
        reset({
          age: "",
          email: "",
          name: "",
          phone: "",
          role: "",
        } as any);
        return;
      }
      const { data: employe } = await getEmploye(id);

      if (!employe) return;
      reset(mapToEmployeData(employe));
    }
    fetch();
  }, [reset, id]);
}
