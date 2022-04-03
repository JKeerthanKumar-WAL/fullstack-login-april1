import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Members = () => {
    const [details, setDetails] = useState([]);
    const navigate = useNavigate();
    let getToken = localStorage.getItem('token');
    getToken = getToken.replace('"', '');
    getToken = getToken.replace('"', '');
    useEffect(() => {
        axios
            .get(`/usersmysql`, {
                headers: {
                    token: getToken,
                },
            })
            .then((res) => {
                setDetails(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const clearAll = () => {
        localStorage.clear();
        navigate('/reglogin');
    };
    return (
        <div className="table table-bordered table-striped">
            <h1 className="buttonHeading">
                <span className="heading">Show Details</span>
                <button className="btn btn-outline-primary" onClick={clearAll}>
                    <b>Log Out</b>
                </button>
            </h1>
            <br />
            <table className="table-data text-center">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                    <th>Date of Birth</th>
                    <th>Button</th>
                </tr>
                {details.map((val, index) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.age}</td>
                            <td>{val.dob}</td>
                            <td>
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => {
                                        navigate(`/edituser/${val.id}`);
                                    }}
                                >
                                    <b> Edit</b>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default Members;
