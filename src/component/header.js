import logo from './logo.svg';
import './header.css';
import { get } from './ApiHelper.js';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    const [data, setData] = useState(null);
    const history = useHistory();

    function handleOnClick(event) {
        history.push("/ads/" + event.target.value);
    }

    useEffect(() => {
        const jsondata = get();
        jsondata.then(
            data => setData(data)
        );
    }, [])

    function getList() {
        return data.map((element, index) => {
            return <option key={index} value={element.id}>{element}</option>
        });
    }

    if (data == null) {
        return <div></div>;
    }

    return (
        <div className="Header">
            <table className="tableheader">
                <tr>
                    <td>
                        <Link to="/">
                            <img src={logo} alt="logo" width="60" height="60"></img>
                        </Link>
                    </td>
                    <td>
                        <select onChange={handleOnClick}>
                            <option></option>
                            {getList()}</select>
                    </td>
                    <td>
                        <button>Create Ad</button>
                    </td>
                    <td>
                        <button>Login</button>
                    </td>
                    <td>
                        <button>Register</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Header