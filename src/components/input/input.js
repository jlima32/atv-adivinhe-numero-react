import "./input.css"


export default function Input(props){
    return<>
        <input type="text" name={props.nome} className={props.classe} placeholder={props.placeholder}/>
    </>
}