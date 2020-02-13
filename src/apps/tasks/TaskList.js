import React, { useContext, useState, useCallback, memo } from 'react';
import Task from './Task';
import TasksContext from '../../context/TasksContext';
import TaskEditorContext from '../../context/TaskEditorContext';
import TaskCreatorContext from '../../context/TaskCreatorContext';
import Card from '../../components/Card';
import './styles/TaskList.css';
import TaskCreator from './TaskCreator';
import TaskEditor from './TaskEditor';

const TaksList = () => {
    const { tasks, showTaskList, tasksListHandler } = useContext(TasksContext);
    const { showTaskEditor } = useContext(TaskEditorContext);
    const { showTaskCreator, taskCreatorHandler } = useContext(
        TaskCreatorContext
    );

    const [searchTerm, setSearchTerm] = useState('');

    const results = !searchTerm
        ? tasks
        : tasks.filter(task =>
              task.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          );

    const handleTaskCreator = useCallback(() => {
        tasksListHandler(false);
        taskCreatorHandler(true);
    }, [tasksListHandler, taskCreatorHandler]);

    return (
        <div className="task-list">
            {showTaskList && (
                <Card>
                    <h2>Task list</h2>
                    <div className="task-list__controler">
                        <input
                            type="text"
                            placeholder="Search task"
                            value={searchTerm}
                            className="task-list__input"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="task-list__button"
                            onClick={handleTaskCreator}
                        >
                            Create task
                        </button>
                    </div>

                    <div className="task-list__row task-list__header">
                        <div>Name</div>
                        <div>Status</div>
                        <div>Created At</div>
                        <div>Actions</div>
                    </div>

                    <div className="task-list__rows">
                        {!!results.length &&
                            results.map(task => (
                                <Task task={task} key={task.createdAt} />
                            ))}
                    </div>
                </Card>
            )}
            {showTaskCreator && <TaskCreator />}
            {showTaskEditor && <TaskEditor />}
        </div>
    );
};

export default memo(TaksList);
