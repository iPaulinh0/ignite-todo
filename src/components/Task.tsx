import {  useState } from 'react'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface Content {
    content: string,
    onDeleteTask: (tasks: string) => void,
    onFinishTask: (finished: string) => void
}

export function Task({ content, onDeleteTask, onFinishTask }: Content) {

    const [isFinished, setIsFinished] = useState(false)

    function handleTaskDelete() {
        onDeleteTask(content)
    }

    function handleFinishedTask() {
        setIsFinished(true)
        onFinishTask(content)
    }

    return (
        <div className={styles.task}>
            <input type="checkbox" onChange={handleFinishedTask} checked={isFinished} disabled={isFinished === true}/>
            <p className={ isFinished ? styles.taskParagraphFinished : styles.taskParagraph }>{content}</p>
            <button>
                <Trash size={24}  onClick={handleTaskDelete}/>
            </button>
        </div>
    )
}