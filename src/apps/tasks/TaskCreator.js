import React, { useState, useContext } from 'react';
import { statuses } from '../../shared/constants';
import TasksContext from '../../context/TasksContext';
import Card from '../../components/Card';
import { LOCAL_STORAGE_ITEMS_KEY } from '../../shared/constants';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

const TaskCreator = () => {
    const { tasks, changeTasks, tasksListHandler, showTaskList } = useContext(
        TasksContext
    );
    const [name, setName] = useState('');
    const [status, setStatus] = useState(statuses[0].value);

    const handleSubmitCreateTask = () => {
        if (tasks.length) {
            const newTasks = [...tasks, createOjectTask()];
            setTasks(newTasks);
        } else {
            const newTasks = [createOjectTask()];
            setTasks(newTasks);
        }

        setName('');
        setStatus('');
        tasksListHandler(true);
    };

    const handleSubmitCancelTask = () => {
        tasksListHandler(true);
    };

    const createOjectTask = () => ({
        name,
        status,
        createdAt: new Date().toISOString(),
    });

    const setTasksToLocalStroage = newTasks => {
        localStorage.setItem(LOCAL_STORAGE_ITEMS_KEY, JSON.stringify(newTasks));
    };

    const setTasks = newTasks => {
        changeTasks(newTasks);
        setTasksToLocalStroage(newTasks);
    };
    if (showTaskList) {
        return <></>;
    }
    return (
        <Card>
            <div className="task__container">
                <h2>Task Creator</h2>
                <div className="task__label">Name</div>
                <Input handleInputChange={setName} value={name} />

                <div className="task__label">Status</div>
                <Select
                    options={statuses}
                    handleChange={setStatus}
                    value={status}
                />
                <div className="task__controller">
                    <Button
                        btnType="Error"
                        handleClick={handleSubmitCancelTask}
                    >
                        Cancel
                    </Button>
                    <Button
                        btnType="Success"
                        handleClick={handleSubmitCreateTask}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default TaskCreator;
