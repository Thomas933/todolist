import React, { useEffect, useState } from 'react';
import TaskList from './apps/tasks/TaskList';
import TaskEditorContext from './context/TaskEditorContext';
import TasksContext from './context/TasksContext';
import { LOCAL_STORAGE_ITEMS_KEY } from './shared/constants';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [showTaskList, handleShowTasksList] = useState(true);

    const [task, setTask] = useState({ name: '', createdAt: '', status: '' });
    const [showTaskEditor, handleShowTaskEditor] = useState(false);

    const getDefaultTasks = () => {
        if (localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY)) {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY));
        }
        return [];
    };

    useEffect(() => {
        setTasks(getDefaultTasks);
    }, []);

    const changeTasks = newTasks => {
        setTasks(newTasks);
    };

    const tasksListHandler = value => {
        handleShowTasksList(value);
    };

    const taskEditorHandler = value => {
        handleShowTaskEditor(value);
    };

    const tasksContextState = {
        tasks,
        changeTasks,
        showTaskList,
        tasksListHandler,
    };

    const taskEditorState = {
        task,
        setTask,
        showTaskEditor,
        taskEditorHandler,
    };

    return (
        <TasksContext.Provider value={tasksContextState}>
            <TaskEditorContext.Provider value={taskEditorState}>
                <h1>Aplication ToDo</h1>
                <TaskList />
            </TaskEditorContext.Provider>
        </TasksContext.Provider>
    );
};

export default App;
