import { useState } from "react"
import { InputForm } from "../InputForm/InputForm"
import { Container } from "../Container/Conteiner"
import { Item } from "../Item/Item"


function TodoList() {
    const [items, setItems] = useState<string[]>([])

    const handleAddItem = (text: string) => {

        setItems([...items, text])
    }

    return (
        <div className="todo-list">
            <InputForm onAddItem={handleAddItem} />
            <section className="main-container">
                <Container titulo="Tareas Pendientes" >
                    {items.map((item) => {
                        return <Item text={item}></Item>
                    })}
                </Container>
                <Container titulo="Tareas Realizadas" />
            </section>
        </div>
    )
}

export default TodoList