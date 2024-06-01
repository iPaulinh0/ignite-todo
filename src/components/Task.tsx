import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface Content {
    content: string
}

export function Task({ content }: Content) {
    return (
        <div className={styles.task}>
            <input type="checkbox"/>
            <p>{content}</p>
            <button>
                <Trash size={24}/>
            </button>
        </div>
    )
}