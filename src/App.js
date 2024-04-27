// import React, { useState, useEffect } from 'react';
// import PersonIcon from '@mui/icons-material/PersonAdd';

// function App() {
//   const [data, setData] = useState(null);
//   // const [data, setState] = useState(null);

//   useEffect(() => {
//     // JSONファイルのパス
//     // const jsonFilePath = './test.json';
//     const jsonFilePath = 'https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users';

//     // JSONファイルを取得する関数
//     const fetchData = async () => {
//       try {
//         const response = await fetch(jsonFilePath);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching JSON data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   // fetchTasks(){
//   //   fetch("http://localhost:6000/user1") // データを取得しに行く
//   //   .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
//   //   .then( json => { // オブジェクトに変換したレスポンスを受け取り、
//   //     this.setState({ tasks: json }) // Stateを更新する
//   //   })
//   // }

//   return (
//     <div>
//       <h1>JSONファイルの表示</h1>
//       <PersonIcon />
//       {data ? (
//         <div>
//           <h2>{data.user_name}</h2>
//           <p>{data.status}</p>
//           {/* <p>{data.user1.update_time}</p>
//           <h2>{data.user2.username}</h2>
//           <p>{data.user2.status}</p>
//           <p>{data.user2.update_time}</p>
//           <h2>{data.user3.username}</h2>
//           <p>{data.user3.status}</p>
//           <p>{data.user3.update_time}</p> */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );

// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import PersonIcon from '@mui/icons-material/PersonAdd';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:6000/user1');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching JSON data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>JSONファイルの表示</h1>
//       <PersonIcon />
//       {data ? (
//         <div>
//           <h2>{data.user1.username}</h2>
//           <p>{data.user1.status}</p>
//           <p>{data.user1.update_time}</p>
//           {/* <h2>{data.user2.username}</h2>
//           <p>{data.user2.status}</p>
//           <p>{data.user2.update_time}</p>
//           <h2>{data.user3.username}</h2>
//           <p>{data.user3.status}</p>
//           <p>{data.user3.update_time}</p> */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );


// }

// export default App;


import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/PersonAdd';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const jsonFilePath = 'https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users';

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
  console.log();

  return (
    <div>
      <h1>JSONファイルの表示</h1>
      <PersonIcon />

      
      
      {data ? (
        <div>
          <h2>{data.user_name}</h2>
          <p>{data.status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}

export default App;
