import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((res) => {
        location.reload();
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2>Student List</h2>
          <div className="d-flex justify-content-end">
            <Link to="/Create" className="btn btn-sm btn-success">
              Create
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action Button</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.ID}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td>
                      <Link
                        to={`/Edit/${student.ID}`}
                        className="btn btn-sm btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(student.ID)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
