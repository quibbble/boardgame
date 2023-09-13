import React, { useState, useRef, createRef } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import '../src/tailwind.css'
import { DownPage } from "./components/DownPage/DownPage";
import { GamePage } from "./components/GamePage/GamePage";
import { HomePage } from "./components/HomePage/HomePage";

const config = {
  // server attributes
  host: "http://localhost:8080",
  websocket: "ws://localhost:8080",

  // game attributes
  key: "Tsuro",
  variants: {
    "Classic": "standard Tsuro.",
    "Longest Path": "player with the longest path wins.",
    "Most Crossings": "player whose path crosses itself the most wins."
  },
  minTeams: 2,
  maxTeams: 8,

  // styling attributes
  font: "coquette",
  color: "red-600"
}

function App() {
  const ref = createRef();
  const ws = useRef();

  const [game, setGame] = useState();
  const [network, setNetwork] = useState();
  const [chat, setChat] = useState([]);
  const [connected, setConnected] = useState();
  const [error, setError] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/:gameID" element=
          { 
            <GamePage config={ config }
              ref={ ref } ws={ ws }
              game={ game } setGame={ setGame }
              network={ network } setNetwork={ setNetwork }
              chat={ chat } setChat={ setChat }
              connected={ connected } setConnected={ setConnected }
              error={ error } setError={ setError }>
                game component(s) go here
            </GamePage>
          }
        />
        <Route exact path="/status/down" element={ <DownPage config={ config } /> }/>
        <Route path="/" element={ <HomePage config={ config } /> } />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
