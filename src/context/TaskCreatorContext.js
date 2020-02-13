import React, { createContext } from 'react';

const TaskCreatorContext = createContext({
    showTaskCreator: true,
    taskCreatorHandler: () => {}
});

export default TaskCreatorContext;
