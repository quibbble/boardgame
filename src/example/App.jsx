import React, { useState, useRef, createRef, useLayoutEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DownPage } from "../components/DownPage/DownPage";
import { GamePage } from "../components/GamePage/GamePage";
import { HomePage } from "../components/HomePage/HomePage";
import { RulesPage } from "../components/RulesPage/RulesPage";
import { BugsPage } from "../components/BugsPage";
import Rules from "./rules.md"

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
  // gamePageMaxWidth: "max-w-4xl"
}

// extra options example if more options are needed for game creation
const extra = ["A", "B", "C"]
function ExtraOption({ setOptions }) {
  return (
    <div className="flex">
      <div className="mx-1 ml-2 font-black text-blue-500">EXTRA</div>
      <select className="px-2 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none" id="players" onChange={ e => setOptions(options => ({ ...options, ...{ Extra: e.target.value } })) }>
          { extra.map(el => <option key={ el } value={ el }>{ el }</option>) }
      </select>
    </div>
  )
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

  const [options, setOptions] = useState({
      Seed: Date.now(),
      Variant: config.variants.length > 0 ? config.variants[0] : null,
      ExtraOption: extra[0],
  })

  useLayoutEffect(() => {
      fetch(Rules)
      .then(response => response.text())
      .then(text => setRules(text))
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
                <div>game component(s) go here</div>
            </GamePage>
          }
        />
        <Route exact path="/status/down" element={ <DownPage config={ config } /> }/>
        <Route exact path="/rules" element={ <RulesPage config={ config } rules={ rules } /> }/>
        <Route exact path="/bugs" element={ <BugsPage config={ config } /> }/>
        <Route path="/" element=
          { 
            <HomePage config={ config } options={ options } setOptions={ setOptions }>
              <ExtraOption setOptions={ setOptions } />
            </HomePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
