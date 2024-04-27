import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/PersonAdd';

function App() {
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users", {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const postData = async () => {
    try {
      const newData = {
        user_name: "User5",
        status: "学内",
      };

      const response = await fetch("https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users", {
        method: 'POST',
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // データを再読み込み
      fetchData();
    } catch (error) {
      setError(error);
    }
  };

  const handlePostData = () => {
    postData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>JSONファイルの表示</h1>
      
      {data && data.map((item, index) => (
        <div key={index}>
          <h2><PersonIcon /> ID : {item.id}</h2>
          <p>User Name : {item.user_name}</p>
          <p>Status : {item.status}</p>
          <p>Last Update : {item.updated_at}</p>
        </div>
      ))}

      <button onClick={handlePostData}>Add New Data</button>
    </div>
  );
}

export default App;
