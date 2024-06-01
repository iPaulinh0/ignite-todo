import styles from './Empty.module.css'
import { ClipboardText } from 'phosphor-react'

export function Empty() {
    return (
        <div className={styles.wrapper}>
            <ClipboardText size={56}/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}