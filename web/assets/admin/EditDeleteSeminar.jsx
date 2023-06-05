import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Loader from "../UI/Loader";

function EditDeleteSeminar() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8008/getAllSeminars`)
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        alert(error);
      });

    setIsLoading(false);
  }, []);

  const deleteHandler = (e) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:8008/deleteSeminar/${e.target.id}`)
      .catch((error) => alert(error));

    setIsLoading(false);
  };

  const UpdateHandler = (e) => {};

  return isLoading ? (
    <Loader />
  ) : (
    <div className="wrapper">
      <div className="innerWrapper">
        <h2>Edit or delete Organization</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>About</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Address</th>
                <th>Organizations</th>
                <th>Speakers</th>
                <th>Save Changes</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((seminar) => {
                  return (
                    <tr key={seminar.id}>
                      <td>{seminar.id}</td>
                      <td>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          defaultValue={seminar.name}
                        />
                      </td>
                      <td>
                        <input type="text" defaultValue={seminar.about} />
                      </td>
                      <td>
                        <input
                          type="date"
                          defaultValue={seminar.start_datetime.date}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          defaultValue={seminar.end_datetime.date}
                        />
                      </td>
                      <td>
                        <input type="text" defaultValue={seminar.address} />
                      </td>
                      <td>
                        {seminar.organizations.map((organization, i) => (
                          <p key={i}>
                            {organization.name ? organization.name : ""}
                          </p>
                        ))}
                      </td>
                      <td>
                        {seminar.speakers?.map((speaker, i) => (
                          <p key={i}>
                            <input type="text" defaultValue={speaker} />
                          </p>
                        ))}
                      </td>
                      <td>
                        <button
                          type="button"
                          id={seminar.id}
                          value={seminar}
                          name={seminar.id}
                          onClick={UpdateHandler}
                        >
                          Save
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          id={seminar.id}
                          name={seminar.id}
                          onClick={deleteHandler}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <BackButton />
      </div>
    </div>
  );
}

export default EditDeleteSeminar;
