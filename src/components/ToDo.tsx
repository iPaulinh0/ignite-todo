import styles from './ToDo.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { Empty } from './Empty';

export function ToDo() {

    const [task, setTask] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [finishedTaskCount] = useState<string[]>([])
    const [finishedTaskCounter, setFinishedTaskCounter] = useState(0)
    const isInputEmpty = inputValue.length === 0;
    const isTaskEmpty = task.length === 0

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

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = task.filter(tasks => {
            return tasks !== taskToDelete
        })

        setTask(tasksWithoutDeletedOne)
    }

    function finishTask(taskToFinish: string) {
        const finishedTask = finishedTaskCount.push(taskToFinish)
        setFinishedTaskCounter(finishedTask)
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
                <strong>
                    Concluídas
                    <p className={styles.finishedTask}>
                        {
                            `${finishedTaskCounter} de ${task.length}`
                        }
                    </p>
                </strong>
            </div>

            <main className={styles.list}>
                {
                    isTaskEmpty
                    ?
                    (
                        <Empty />
                    )
                    :
                    task.map(list => {
                        return <Task content={list} key={list} onDeleteTask={deleteTask} onFinishTask={finishTask} />
                    })
                }
            </main>
        </div>
    )
}