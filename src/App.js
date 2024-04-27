import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/PersonAdd';

function App() {
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:6000/user4');
        // const response = await fetch('./user1.json');
        // const response = await fetch("https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users/");
        const response = await fetch("https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users", {
    headers: {
        "ngrok-skip-browser-warning": "true",
    }
})
//         const  response = await axios.post("https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users", {
//     headers: {
//         "ngrok-skip-browser-warning": "true",
//     }
// },{id:2,user_name:"User4",status:"学外",updated_at:"2024/4/28"})
        // const responseBody = await response.text(); // レスポンスボディをテキストとして取得
        // console.log(responseBody); // レスポンス内容をコンソールから確認

        // console.log(response);

        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  


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
    </div>
  );
}



export default App;
