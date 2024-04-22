// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// import Gallery from './Gallery.js';
// import { Profile } from './Profile.js';

// export default function App() {
//   return (
//     <div>
//       <Profile />
//       <Gallery />
//     </div>
//   );
// }

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }


const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}






// export default App;
