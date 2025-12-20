function Register() {
  return (
    <>
      <form>
        <div className="vh-100 d-grid justify-content-center align-content-center">
          <h3 className="text-primary mb-3 text-center">Register page</h3>
          <div className="p-3 shadow rounded-3">
            <div className="mb-3 text-primary">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 text-primary">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 text-primary">
              <label className="form-label">Password</label>
              <input type="text" className="form-control" />
            </div>
            <div className="text-center m-2">
              <button className="btn btn-outline-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
