
import * as React from "react";
import CardBox from "./CardBox";
import Header from "./Header";

export default function App() {
  const colordotTemp = "#22B04B";
  const colordotQuant = "#F49229";
  const colordotPuiss = "#ED1C24";
  return (
    <div className="App">
        <Header page={"Accueil"} dimensionsTitre={90}/>
      <CardBox colordot={colordotTemp} title={"Température"} />
      <CardBox colordot={colordotQuant} title={"Quantité fût"} />
      <CardBox colordot={colordotPuiss} title={"Puissance"} />
    </div>
  );
}
