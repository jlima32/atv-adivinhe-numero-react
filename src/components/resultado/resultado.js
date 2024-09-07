import "./resultado.css";


export default function Resultado(props){
    const Acertou = () => {
        return<>
            <h4>Acertou!</h4>
            <p>Parabéns, o numéro sorteado foi <strong>{props.sorteado}</strong></p>
            <p>Você acertou o número em <strong>{props.tentativas} {props.tentativas  <= 1 ? 'tentativa' : 'tentativas'}!</strong></p>
        </> 
    
    }
    const Errou = () => {
        return<>
            <h4>Errou!</h4>
            <p>O número sorteado é <strong>{props.palpite < props.sorteado ? 'maior' : 'menor'}</strong> do que <strong>{props.palpite}!</strong> </p>
            <p><strong>Tente novamente</strong></p>
        </> 
    
    }
    
    return<>
        <div className={`resultado ${props.resultado}`}>
            {props.resultado === 'acertou' ? <Acertou /> : <Errou />}
        </div>
    </>
}