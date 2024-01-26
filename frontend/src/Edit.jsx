import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].name,
          email: res.data[0].email,
          address: res.data[0].address,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/edit/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleEdit}>
          <h2>Edit Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={values.address}
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-success">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
