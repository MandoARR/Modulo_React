import { ITask } from "../TodoList/TodoList"
import confetti from "canvas-confetti"

interface IItem {
    item: ITask;
    onCheckboxClick: (item: ITask) => void;
    onRemoveItem: (item: ITask) => void;
}

const openConfetti = () => {
    confetti({
        spread: 400,
        particleCount: Math.random() * 100 + 20,
    })
}

export function Item({ item, onCheckboxClick, onRemoveItem }: { item: ITask; onCheckboxClick: (item: ITask) => void; onRemoveItem: (item: ITask) => void }) {
    const handleChange = () => {
        if (!item.checked) {
            openConfetti()
        }
        onCheckboxClick({ ...item, checked: !item.checked })
    }

    const handleOnClick = () => {
        onRemoveItem(item)
    }
    return (

        <div className="container-item">
            <input type="checkbox" checked={item.checked} onChange={handleChange}/>
            <span>{item.text}</span>
            <button onClick={handleOnClick}>X</button>
        </div>
    )
}