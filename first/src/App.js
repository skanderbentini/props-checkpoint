import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbarcomponent from "./profile/Profile component/navbar";
import ProfileComponent from "./profile/Profile component/Profilecomponent";
import Bio from "./profile/Profile component/bio";
import Contact from "./profile/Profile component/contact";
import myImg from "./profile/image.jpg";

function App() {
  return (
    <div className="App">
      <Navbarcomponent />

      <br />

      <Bio />
      <ProfileComponent name="SKANDER BENTINI" myimg={myImg} />
      <Contact
        Telephone="(+216) 56555369"
        Email="skanderbentini33@gmail.com"
        Adresse="Diar soukra l'aouina, Tunis"
      />
    </div>
  );
}

export default App;
