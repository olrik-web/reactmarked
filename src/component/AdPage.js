import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { getAd } from './ApiHelper.js';
import MOTORCYCLES from './MOTORCYCLES.png';
import './CategoryPage.css';
import user from './user.png';

function AdPage() {
    const [data, setData] = useState(null);
    const match = useRouteMatch();

    useEffect(() => {
        const jsondata = getAd(match.params.id);
        console.log(jsondata);
        jsondata.then(
            data => setData(data)
        );
    }, [])

    if (data == null) {
        return <div></div>;
    }

    function getList() {
        return <div>
            <tr>
                <td>
                    <img src={MOTORCYCLES} height="200" width="200" alt="ad"></img>
                </td>
                <td>
                    {/* {console.log(data.user)} */}
                    <img src={user} alt="user" height="50" width="50"></img>

                </td>
                <td>
                    <p>
                        {data.user.type} <br></br>
                        {data.user.first_name} {data.user.last_name} <br></br>
                        Email: {data.user.email} <br></br>
                        Phone: {data.user.phone_code} {data.user.phone_number}
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2>{data.type}</h2>
                    <p>Created: {data.creation_date.join('/')}</p>
                    <h3>{data.headline}</h3>
                    <p>{data.text}</p>
                    <p>Price: {data.price}</p>
                </td>
            </tr>
        </div>
    }

    return (
        <div>
            <table className="ad">
                {getList()}
            </table>
        </div>
    )
}


export default AdPage