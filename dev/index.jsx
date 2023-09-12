import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "../src/Footer";
import '../src/tailwind.css'

function App() {
    return (
      <div>
        <Footer />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
