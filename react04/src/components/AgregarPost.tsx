function AgregarPost() {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre del Titulo"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
        </>
    )
}


export default AgregarPost