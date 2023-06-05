import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style/AddOrg.css";
import Loader from "../UI/Loader";

const EditOrg = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [org, setOrg] = useState({
        name: "",
        image: "",
        description: "",
        locatiion: "test 1",
        email: "",
        phone: "",
        address: "",
        created_at: new Date(),
    });
    useEffect(() => {
        axios
            .get(`http://localhost:8008/getOneOrganization/${id}`)
            .then((res) => {
                setOrg(res.data);
                setIsLoading(false);
            })
            .catch((err) => alert(err.message));
    }, []);

    const changeHandler = (e) => {
        setOrg({ ...org, [e.target.name]: e.target.value });
    };

    const EditOrgHandler = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:8008/updateOrganization/${id}`, org)
            .then((res) => {
                alert(res.data);
                navigate("/admin/organizations_admin_board");
            })
            .catch((err) => alert(err.message));
        e.target.reset();
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div>
            <div className="form-wrapper">
                <h2>Update Organization</h2>
                <form onSubmit={EditOrgHandler}>
                    <div>
                        <label htmlFor="name">Organization Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={org.name}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="pic">Company pic</label>
                        <input
                            type="text"
                            id="pic"
                            name="image"
                            alt="pic"
                            value={org.image}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            cols="15"
                            rows="5"
                            value={org.description}
                            onChange={changeHandler}
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={org.email}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={org.phone}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={org.address}
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="submit" id="submit" name="submit" value="submit">
                        Save
                    </button>
                </form>
                <div className="btns"></div>
            </div>
        </div>
    );
};

export default EditOrg;