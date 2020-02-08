import React, { useState } from 'react';
import { statuses } from '../../shared/constants';
import PropTypes from 'prop-types';

const Task = ({ tasks }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmitTask = () => {
        const newTask = createOjectTask();
        tasks.push(newTask);
        setTasksToLocalStroage();
        setName('');
        setStatus('');
    };

    const createOjectTask = () => ({
        name,
        status,
        createdAt: new Date().toISOString(),
    });

    const setTasksToLocalStroage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <div>
            <label>
                Name
                <input onChange={e => setName(e.target.value)} value={name} />
            </label>
            <label>
                Status
                <select
                    onChange={e => setStatus(e.target.value)}
                    value={status}
                >
                    {statuses.map(({ value, name }) => {
                        return (
                            <option value={value} key={value}>
                                {name}
                            </option>
                        );
                    })}
                </select>
            </label>
            <button onClick={() => handleSubmitTask()}>Create task</button>
        </div>
    );
};

Task.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
        })
    ),
};

export default Task;
