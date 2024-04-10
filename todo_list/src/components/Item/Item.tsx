import{ITask} from "../TodoList/TodoList"
import confetti from "canvas-confetti"

export function Item({item, onCheckboxClick, onRemoveItem}:{item:ITask; onCheckboxClick: (item:ITask) => void; onRemoveItem: (item:ITask) => void}){
const handleChange = () => {
    onCheckboxClick(item)
}

interface Item {
    item: ITask
}

const openConfetti = () => {
    confetti({})
}

const handleOnClick = () => {
    onRemoveItem(item)
}
    return(

        <div className="container-item">
            <input type="checkbox" onChange={handleChange}></input>
        <span>{item.text}</span>
        <button>X</button>
        </div>
    )
}