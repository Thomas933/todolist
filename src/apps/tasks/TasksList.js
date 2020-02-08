import React, { useEffect, useState } from 'react';
import Task from './Task';

const TaksList = () => {
    const [tasks, setTasks] = useState([]);
    const getTaskFromLocalTstorage = tasks => {
        if (tasks !== null) {
            return JSON.parse(tasks);
        }
        return [];
    };

    useEffect(
        () => setTasks(getTaskFromLocalTstorage(localStorage.getItem('tasks'))),
        []
    );
    return (
        <div>
            <Task tasks={tasks} />
        </div>
    );
};

export default TaksList;
