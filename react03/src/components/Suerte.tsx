//Componentes de React son funciones
//<></> es un componente vacio / empty element / void element

function Suerte() {
    
    const suerte = Math.random() > .5 ? "Suerte" : "Mala Suerte"
    return (
        <>
            <p>{suerte}</p>
        </>
    )
}


export default Suerte