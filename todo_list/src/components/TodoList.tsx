import { useState } from "react"
import { InputForm } from "./InputForm/InputForm"


function TodoList(){
    const [item, setItem] = React.useState<string>("Inicial")

    const handleAddItem = (text: string) => {
        setItem(text)
    }

    return(
        <div className="todo-list">
            <InputForm onAddItem={handleAddItem}/>
            <span>{item}</span>
        </div>
    )
}

export default TodoList