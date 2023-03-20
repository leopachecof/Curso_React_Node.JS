import { useEffect, useState } from "react";
import "./ConversorDistancia.css"


export function ConversorDistancia() {
    const [distM, setDistM] = useState(0);
    const [distMm, setDistMm] = useState(0);
    const [distCm, setDistCm] = useState(0);
    const [distKm, setDistKm] = useState(0);

    useEffect(() => {
        const resultConvMm = Number(distM) * 1000;
        setDistMm(resultConvMm);
        
        const resultConvCm = Number(distM) * 100;
        setDistCm(resultConvCm);

        const resultConvKm = Number(distM) / 1000;
        setDistKm(resultConvKm);
        

    },[distM]);


    return (
      <div className="distancia">
        <input
          type="range"
          max = {1000}
          onChange={(evento) => setDistM(evento.target.value)}
        />
        {distM} m
        {/* <input
          type="number"
          placeholder="                        Distância em Metros..."
          onChange={(evento) => setDistM(evento.target.value)}
        /> */}
        
        <div className="resultado">
            {/* <p>Valor em metros: {distM}m</p> */}
            <p>Valor em Milímetros: {distMm}mm</p>
            <p>Valor em Centímetros: {distCm}cm</p>
            <p>Valor em Quilômetros: {distKm}Km</p>
        </div>

      </div>
    );
}