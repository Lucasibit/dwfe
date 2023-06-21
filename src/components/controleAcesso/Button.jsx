import './button.css';

function Button({Text, onClick, Type = "button"}){
    return(
        <button className='buttonUser' onClick={onClick} type={Type}>{Text}</button>
    )
}

export default Button;