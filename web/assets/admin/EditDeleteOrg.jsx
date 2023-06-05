import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
import BackButton from "../components/BackButton";

function EditDeleteOrg() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/getAllOrganizations`)
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
      .delete(`http://localhost:8008/deleteOrganization/${e.target.id}`)
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
                <th>Image Url</th>
                <th>Location</th>
                <th>Description</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Address</th>
                <th>Save Changes</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((organization) => {
                  return (
                    <tr key={organization.id}>
                      <td>{organization.id}</td>
                      <td>
                        <input
                          name="name"
                          type="text"
                          defaultValue={organization.name}
                        />
                      </td>
                      <td>
                        <input
                          name="image"
                          type="text"
                          defaultValue={organization.image}
                        />
                      </td>
                      <td>
                        <input
                          name="location"
                          type="text"
                          defaultValue={organization.location}
                        />
                      </td>
                      <td>
                        <input
                          name="description"
                          type="text"
                          defaultValue={organization.description}
                        />
                      </td>
                      <td>
                        <input
                          name="email"
                          type="text"
                          defaultValue={organization.email}
                        />
                      </td>
                      <td>
                        <input
                          name="phone"
                          type="text"
                          defaultValue={organization.phone}
                        />
                      </td>
                      <td>
                        <input
                          name="adress"
                          type="text"
                          defaultValue={organization.adress}
                        />
                      </td>

                      <td>
                        <button
                          type="button"
                          id={organization.id}
                          value={organization}
                          name={organization.id}
                          onClick={UpdateHandler}
                        >
                          Save
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          id={organization.id}
                          name={organization.id}
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
export default EditDeleteOrg;
