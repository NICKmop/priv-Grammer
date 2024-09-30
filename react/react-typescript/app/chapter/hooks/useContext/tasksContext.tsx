import { createContext, useContext, useReducer, useState } from "react";

interface TasksProviderType {
    children: React.ReactNode
}

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }: TasksProviderType) {
    // const [tasks, dispatch] = useReducer(
    //     setTest, tasks, "string"
    // )
    return (
        <>
            <TasksContext.Provider value={null}>
                <TasksDispatchContext.Provider value={null}>
                    {children}
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}