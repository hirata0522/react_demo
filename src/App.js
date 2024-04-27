import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/PersonAdd';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // JSONファイルのパス
    const jsonFilePath = './test.json';

    // JSONファイルを取得する関数
    const fetchData = async () => {
      try {
        const response = await fetch(jsonFilePath);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>JSONファイルの表示</h1>
      <PersonIcon />
      {data ? (
        <div>
          <h2>{data.user1.username}</h2>
          <p>{data.user1.status}</p>
          <p>{data.user1.update_time}</p>
          <h2>{data.user2.username}</h2>
          <p>{data.user2.status}</p>
          <p>{data.user2.update_time}</p>
          <h2>{data.user3.username}</h2>
          <p>{data.user3.status}</p>
          <p>{data.user3.update_time}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}

export default App;
