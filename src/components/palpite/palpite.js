import "./palpite.css"

export default function Palpite(props){
    
    return <>
        <div className="palpite">
            <input type="text" name="palpite" className="palpiteText" placeholder={`Digite um numero entre ${props.inicial} e ${props.final}`} />
            <button type="submit" className="btnPalpitar">CHUTAR</button>
        </div>
    </>
    
}