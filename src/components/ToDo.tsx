import styles from './ToDo.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'
import { Empty } from './Empty'
import { PlusCircle } from 'phosphor-react'

export function ToDo() {

    const [task, setTask] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const isInputEmpty = inputValue.length === 0;
    const isTaskEmpty = task.length === 0;

    function handleInputChangeValue(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setInputValue(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        if(inputValue === '') {
            alert('Digite uma tarefa antes de submeter.')
        } else {
            setTask([...task, inputValue])
            setInputValue('')
        }
    }

    function handleInvalidTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Digite uma tarefa!')
    }

    return (
        <div className={styles.box}>
            <form className={styles.form} onSubmit={handleCreateNewTask}>
                <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleInputChangeValue}
                    value={inputValue}
                    onInvalid={handleInvalidTask}
                    required
                />
                <button type='submit' disabled={isInputEmpty}>
                    <span>Criar</span>
                    <PlusCircle size={16}/>
                </button>
            </form>

            <div className={styles.status}>
                <strong>Tarefas Criadas <p>{task.length}</p></strong>
                <strong>Concluídas <p>0</p></strong>
            </div>

            <main className={styles.list}>
                {task.map(list => {
                    if(isTaskEmpty === true) {
                        return <Empty />
                    } else{
                        return <Task content={list} key={list} />
                    }
                })}
            </main>
        </div>
    )
}