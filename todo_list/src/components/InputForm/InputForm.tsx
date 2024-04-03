export function InputForm({ onAddItem }: any){

    const handleForm = (event: any) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const text: string = form.get("item") as string
        onAddItem(text)
    } 

    return(
        <form className="input-form" onSubmit={handleForm}>
            <input 
            name="item" 
            type="text" 
            placeholder="Agregar aquí" 
            required 
            autoFocus></input>

            <button>Agregar</button>
        </form>
    )
}

