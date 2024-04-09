export function Item({text}:any){
    return(

        <div className="container-item">
            <input type="checkbox"></input>
        <span>{text}</span>
        <button>X</button>
        </div>
    )
}