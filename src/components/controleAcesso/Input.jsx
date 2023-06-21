import './input.css';

function Input({type, placeholder, value, onChange}){
    return(
        <input className="inputUser" value={value} type={type} onChange={onChange} placeholder={placeholder} />
    )
}

export default Input;