import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const clearAll = () => {
        localStorage.clear();
        navigate('/reglogin');
    };
    return (
        <div>
            <h1 className="buttonHeading">
                <span className="heading">Show Details</span>
                <button className="btn btn-outline-primary" onClick={clearAll}>
                    <b>Log Out</b>
                </button>
            </h1>
        </div>
    );
};
export default Logout;
