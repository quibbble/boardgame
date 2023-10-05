import React, { useState, useRef, createRef, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DownPage } from "../components/DownPage/DownPage";
import { GamePage } from "../components/GamePage/GamePage";
import { HomePage } from "../components/HomePage/HomePage";
import { RulesPage } from "../components/RulesPage/RulesPage";

const config = {
  // server attributes
  host: "http://localhost:8080",
  websocket: "ws://localhost:8080",

  // game attributes
  key: "Tsuro",
  variants: ["Classic", "Longest Path", "Most Crossings"],
  minTeams: 2,
  maxTeams: 8,

  // styling attributes
  font: "coquette",
  color: "red-600",

  // misc attributes - optional - uncomment to see change
//   gamePageMaxWidth: "max-w-4xl"
}

export default function App() {
  const ref = createRef();
  const ws = useRef();

  const [game, setGame] = useState();
  const [network, setNetwork] = useState();
  const [chat, setChat] = useState([]);
  const [connected, setConnected] = useState();
  const [error, setError] = useState();

  const [rules, setRules] = useState("");

  useEffect(() => {
    import("./rules.md").then(res => {
      fetch(res.default)
      .then(response => response.text())
      .then(text => setRules(text))
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/:gameID" element=
          {
            <GamePage config={ config } debug={ false }
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
        <Route exact path="/rules" element={ <RulesPage config={ config } rules={ rules } /> }/>
        <Route path="/" element={ <HomePage config={ config } /> } />
      </Routes>
    </BrowserRouter>
  );
}
