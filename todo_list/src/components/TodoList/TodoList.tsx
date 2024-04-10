import { useState } from "react"
import { InputForm } from "../InputForm/InputForm"
import { Container } from "../Container/Conteiner"
import { Item } from "../Item/Item"

export interface ITask{
    id:string
    text:string
    checked: boolean
}

function TodoList() {
    const [items, setItems] = useState<ITask[]>([])

    const handleAddItem = (text: string) => {
        const task: ITask = {
            id: crypto.randomUUID(),
            text:text,
            checked:false
        }
        setItems([...items, task])
    }
    
    const handleCheckboxClick = ({item: ITask}: void) => {
        const newItems = item.filter((_item: ITask) => _item.id !== item.id)
        newItems.push(item)
        setItems(newItems)
    }

    return (
        <div className="todo-list">
            <InputForm onAddItem={handleAddItem} />
            <section className="main-container">
                <Container titulo="Tareas Pendientes" >
                    {items
                    .filter((item) => !item.checked)
                    .map((item, index) => {
                        return (
                            <Item 
                            key={index}
                            item={item}
                            onCheckboxClick={handleCheckboxClick}
                            ></Item>
                        )
                    })}
                </Container>
                <Container titulo="Tareas Realizadas" />
            </section>
        </div>
    )
}

export default TodoList