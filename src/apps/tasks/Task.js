import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import './styles/Task.css';
import TasksContext from '../../context/TasksContext';
import TaskEditorContext from '../../context/TaskEditorContext';
import { statusConvertor } from '../../shared/constants';
import Button from '../../components/Button';

const Task = ({ task }) => {
    const { name, status, createdAt } = task;

    const { tasks, changeTasks, tasksListHandler } = useContext(TasksContext);
    const { setTask, taskEditorHandler } = useContext(TaskEditorContext);

    const handleRemoveTask = () => {
        const newTasks = tasks.filter(item => item.createdAt !== createdAt);
        changeTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const showTaskEditorHandler = () => {
        tasksListHandler(false);
        taskEditorHandler(true);
        setTask(task);
    };

    return (
        <div className="task-list__row">
            <div className="task__value">{name}</div>
            <div className="task__value">{statusConvertor(status)}</div>
            <div className="task__value">
                {new Date(createdAt).toLocaleString()}
            </div>
            <div className="task__control">
                <Button btnType="Danger" handleClick={showTaskEditorHandler}>
                    Edit
                </Button>

                <Button btnType="Error" handleClick={handleRemoveTask}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }),
};

export default memo(Task);
