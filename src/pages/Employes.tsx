import { useState } from "react";
import { getEmployes } from "../services/FakeEmployeService";
import { NavLink } from "react-router-dom";

function Employes() {
  const [employes, setEmployes] = useState(getEmployes());

  function handleDelete(id: string) {
    const newEmploye = employes.filter((employe) => employe.id !== id);
    setEmployes(newEmploye);
  }

  return (
    <div className="container py-4">
      <div className="row g-3 justify-content-center">
        {employes.map((t) => (
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
