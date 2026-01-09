import { useEffect, useState } from "react";
import {
  deleteEmploye,
  Employe,
  getEmployes,
} from "../services/FakeEmployeService";
import { NavLink, useOutletContext } from "react-router-dom";

function Employes() {
  const [employes, setEmployes] = useState<Employe[]>([]);
  const { searchValue } = useOutletContext<{
    searchValue: string;
  }>();

  useEffect(() => {
    async function fetch() {
      const { data: employes } = await getEmployes();
      setEmployes(employes);
    }

    fetch();
  }, []);

  async function handleDelete(id: string) {
    const newEmploye = employes.filter((employe) => employe.id !== id);
    setEmployes(newEmploye);
    await deleteEmploye(id);
  }

  const query = searchValue.toLowerCase();
  const numberQuery = searchValue.toString();

  let filtredItems = employes.filter(
    (employe) =>
      employe.name.toLowerCase().includes(query) ||
      employe.email.toLowerCase().includes(query) ||
      employe.number.toString().includes(numberQuery) ||
      employe.role.toLowerCase().includes(query)
  );

  return (
    <div className="container py-4">
      <div className="row g-3 justify-content-center">
        {filtredItems.map((t) => (
          <div key={t.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card shadow-lg border-0 rounded-4 w-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{t.name}</h5>
                <h6> {t.email} </h6>
                <span>+46-{t.number} </span>
                <p className="text-muted fw-bold">{t.role} </p>
                <div className="d-flex gap-4 justify-content-center">
                  <NavLink
                    to={`/update-employe/${t.id}`}
                    className="btn btn-outline-primary">
                    Edit
                  </NavLink>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="btn btn-outline-dark">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employes;
