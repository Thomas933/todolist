import React, { useContext, useState, memo } from 'react';
import { statuses, LOCAL_STORAGE_ITEMS_KEY } from '../../shared/constants';
import TasksContext from '../../context/TasksContext';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import './styles/Task.css';
import TasksEditorContext from '../../context/TaskEditorContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

const TaskEditor = () => {
    const { tasks, changeTasks, tasksListHandler } = useContext(TasksContext);
    const { task, taskEditorHandler } = useContext(TasksEditorContext);

    const { name, status, createdAt } = task;

    const [newName, setNewName] = useState(name);
    const [newStatus, setNewStatus] = useState(status);

    const handleSubmitChange = () => {
        const newTasks = [...tasks];
        const index = newTasks.findIndex(
            taskComp => taskComp.createdAt === task.createdAt
        );
        newTasks[index] = createOjectTask();
        setTasks(newTasks);
        setNewName('');
        setNewStatus('');
        tasksListHandler(true);
        taskEditorHandler(false);
    };

    const createOjectTask = () => ({
        name: newName,
        status: newStatus,
        createdAt,
    });

    const handleCancelChange = () => {
        tasksListHandler(true);
        taskEditorHandler(false);
    };

    const setTasksToLocalStroage = newTasks => {
        localStorage.setItem(LOCAL_STORAGE_ITEMS_KEY, JSON.stringify(newTasks));
    };

    const setTasks = newTasks => {
        changeTasks(newTasks);
        setTasksToLocalStroage(newTasks);
    };

    return (
        <Card>
            <div className="task__container">
                <h2>Task Editor</h2>
                <div className="task__label">Name</div>
                <Input handleInputChange={setNewName} value={newName} />

                <div className="task__label">Status</div>
                <Select
                    options={statuses}
                    handleChange={setNewStatus}
                    value={newStatus}
                />
                <div className="task__controller">
                    <Button btnType="Error" handleClick={handleCancelChange}>
                        Cancel
                    </Button>
                    <Button btnType="Success" handleClick={handleSubmitChange}>
                        Confirm
                    </Button>
                </div>
            </div>
        </Card>
    );
};

TaskEditor.propTypes = {
    task: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }),
};

export default memo(TaskEditor);
