import React, { createContext } from 'react';

const TasksContext = createContext({
    tasks: [],
    changeTasks: () => {},
    showTaskList: true,
    handleShowTasksList: () => {},
});

export default TasksContext;
