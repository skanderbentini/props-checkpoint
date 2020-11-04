import React from "react";

export default function bio() {
  const styleObject = { color: "cyan", textAlign: "center" };

  return (
    <div style={styleObject} className="banner-text" id="bio">
      <h1 style={{ marginTop: "40px" }}> Bio </h1>
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>Skander Bentini</p>
      <p>Web developper</p>
      <p>
        Outils:
        <br />
        JavaScript,HTML...
        
      </p>
    </div>
  );
}