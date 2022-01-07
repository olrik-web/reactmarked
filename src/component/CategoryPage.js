import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { getAds } from './ApiHelper.js';
import './CategoryPage.css';
import MOTORCYCLES from './MOTORCYCLES.png';

function CategoryPage(props) {
    const [data, setData] = useState(null);
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        const jsondata = getAds(match.params.category);
        console.log(jsondata);
        jsondata.then(
            data => setData(data)
        );
    }, [])

    function handleOnClick(event) {
        console.log(event.target.value);
        history.push("/ad/" + event.target.value);
    }

    function getList() {
        return data.map((element, index) => {
            return <tr>
                <div>
                    <td>
                        <img src={MOTORCYCLES} height="200" width="200" alt="ad"></img>
                    </td>
                    <td>
                        <h2>{element.type}</h2>
                        <h3>{element.headline}</h3>
                        <p>{element.text}</p>
                        <p>Price: {element.price}</p>
                        <button onClick={handleOnClick} key={index} value={element.id}>Details</button>
                    </td>
                </div>
            </tr>
        }
        )
    }

    if (data == null) {
        return <div></div>;
    }

    return (
        <div>
            <h1>{props.value}</h1>
            <table className="ad">

                {getList()}

            </table>
        </div>
    )
}

export default CategoryPage