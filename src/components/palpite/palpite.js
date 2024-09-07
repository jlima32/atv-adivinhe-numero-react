import "./palpite.css"

export default function Palpite(){
    return <>
        <div className="palpite">
            <input type="text" name="palpite" className="palpiteText" placeholder="Digite um número entre 0 e 100"/>
            <button type="submit" className="btnPalpitar">CHUTAR</button>
        </div>
    </>
}