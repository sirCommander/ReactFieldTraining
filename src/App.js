import { Component } from "react"
import minelogo from "./minecraft-logo.webp"
import "./App.css"


class App extends Component{

  render() {
    return <div className="App">
      <div className="App-body">
        <img src={minelogo} alt="Test" className="App-logo"/>
        <p>
          Example Minecraft Page with a logo
        </p>
      </div>
    </div>
  }
}


export default App;


















// constructor() {
  //   this.state = 1;
  // }

// import logo from './logo.svg';
// import './App.css';

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

// export default App;
