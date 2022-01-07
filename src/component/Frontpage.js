import './Frontpage.css';
import { getCount } from './ApiHelper.js';
import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const history = useHistory();

  function handleOnClick(event) {
    history.push("/ads/" + event.target.value);
  }

  useEffect(() => {
    const jsondata = getCount();
    jsondata.then(
      data => setData(data)
    );
  }, [])

  function getList() {
    return data.map((element, index) => {
      return <tr>
        <td>
          <button onClick={handleOnClick} key={index} value={element.category.name}>{element.category.name} {element.count}</button>
        </td>
      </tr>
    }
    )
  }

  if (data == null) {
    return <div></div>;
  }

  return (
    <div>
      <table className="tablecategories">
        {getList()}
      </table>
    </div>
  );
}

export default App;