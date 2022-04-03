import { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from 'use-local-storage';
import { useNavigate } from 'react-router-dom';

const UsersMySql = () => {
    const [user, setUser] = useState([]);
    const [login, setLogin] = useState(false);
    const [token, setToken] = useLocalStorage('token', '');
    const navigate = useNavigate();
    const getUsers = () => {
        axios
            .get('/usersmysql')
            .then((res) => {
                setUser(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getUsers();
    });
    const createUser = (event) => {
        event.preventDefault();
        const userObject = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            age: event.target.age.value,
            dob: event.target.dob.value,
        };
        axios
            .post('/usersmysql', userObject)
            .then((res) => {
                console.log(res.data);
                getUsers();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const loginForm = () => {
        setLogin(true);
    };
    const loginUser = (event) => {
        event.preventDefault();
        const userObject = {
            email: event.target.email.value,
            password: event.target.password.value,
        };
        axios
            .post(`/usersmysql/checklogin`, userObject)
            .then((res) => {
                setLogin(false);
                setToken(res.data.token);
                navigate('/members');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid text-center">
            {login ? (
                <div>
                    <h1 className="mt-3">Log In</h1>
                    <form className="form-group" onSubmit={loginUser}>
                        <b className="subHeading">Email : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                        />
                        <br />
                        <b className="subHeading">Password : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <br />
                        <button className="btn btn-outline-primary">
                            <b>Log In</b>
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1 className="mt-3">Registration</h1>
                    <form className="form-group" onSubmit={createUser}>
                        <b className="subHeading">Name : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                        />
                        <br />
                        <b className="subHeading">Email : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="email"
                            name="email"
                            placeholder="Enter User Name"
                        />
                        <br />
                        <b className="subHeading">Password : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <br />
                        <b className="subHeading">Age : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="number"
                            name="age"
                            placeholder="Enter Age"
                        />
                        <br />
                        <b className="subHeading">Date of Birth : </b>
                        <input
                            className="form-control d-inline-flex w-50"
                            type="date"
                            name="dob"
                        />
                        <br />
                        <button className="btn btn-outline-primary">
                            <b>Register</b>
                        </button>
                    </form>
                    <button
                        className="btn btn-outline-primary"
                        onClick={loginForm}
                    >
                        <b>Sign Up</b>
                    </button>
                </div>
            )}
        </div>
    );
};
export default UsersMySql;
