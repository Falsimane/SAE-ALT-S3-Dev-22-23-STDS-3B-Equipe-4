
import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "./CardBoxMaintenance";

export default function Maintenance() {
    return (
        <div className="Maintenance">
            <Header page={"Maintenance"} dimensionsTitre={130}/>
            <CardBoxMaintenance titre="Notice d'utilisation" pdfimg = {true} /> 
            <CardBoxMaintenance titre="Manuel de service" pdfimg = {true} /> 
            <CardBoxMaintenance titre="Maintenance préventive" pdfimg = {false}/>
            <CardBoxMaintenance titre="Maintenance curative" pdfimg = {false}/> 

            
        </div>
    );
}
