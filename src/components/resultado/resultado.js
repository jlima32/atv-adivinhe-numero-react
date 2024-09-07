import { useState } from "react";
import "./resultado.css";


export default function Resultado(props){
    const Acertou = () => {
        return<>
            <h4>Acertou!</h4>
            <p>Parabéns, o numéro sorteado foi {props.sorteado}</p>
            <p>Você acertou o número em {props.tentativas} {props.tentativas  <= 1 ? 'tentativa' : 'tentativas'}!</p>
        </> 
    }
    
    return<>
        <div className={`resultado ${props.resultado}`}>
            {props.resultado === 'acertou' ? <Acertou /> : `Errou: ${props.palpite}`}
        </div>
    </>
}