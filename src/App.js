import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/PersonAdd';

const fileName = 'jsonファイル'
const jsonData = { a: 1, b: 2 }

const fileNameWithJson = `${fileName}.json`
const blobData = new Blob([JSON.stringify(jsonData)], {
  type: 'text/json',
})
const jsonURL = URL.createObjectURL(blobData)



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // JSONファイルのパス
    const jsonFilePath = './code.json';

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


  const fileName = 'jsonファイル'
  const jsonData = { a: 1, b: 2 }

  const fileNameWithJson = `${fileName}.json`
  const blobData = new Blob([JSON.stringify(jsonData)], {
    type: 'text/json',
  })

  // return (
  //     <a href={jsonURL} download={fileNameWithJson}>
  //       エクスポート
  //     </a>
  //   )

  return (
    <div>
      <h1>JSONファイルの表示</h1>
      <PersonIcon />
      {data ? (
        <div>
          <h2>{data.CD001.NAME}</h2>
          <p>{data.CD001.SUPP}</p>
          <h2>{data.CD002.NAME}</h2>
          <p>{data.CD002.SUPP}</p>
          <h2>{data.CD003.NAME}</h2>
          <p>{data.CD003.SUPP}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       真っ白
//     </div>
//   );
// }

// export default App;
