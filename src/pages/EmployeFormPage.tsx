function EmployeFormPage() {
  return (
    <>
      <div className="vh-100 d-grid justify-content-center align-content-center">
        <h1 className="text-primary text-center">EmployeFormPage</h1>;
        <div
          className="p-3 shadow rounded-3"
          style={{ width: "500px", maxWidth: "500px" }}>
          <form className="text-primary">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <input className="form-control" />
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary w-50">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmployeFormPage;
