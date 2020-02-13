import React, { createContext } from 'react';

const TasksEditorContext = createContext({
    task: {name: '', status: '', createdAt: ''},
    setTask: () => {},
    showTaskEditor: true,
    taskEditorHandler: () => {}
});

export default TasksEditorContext;
