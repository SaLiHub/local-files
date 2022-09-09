import {Button, Container, Snackbar, Stack, TextField} from "@mui/material";
import useTodolist from "./useTodolist";

// import './Todolist.sass';

export default function Todolist() {
    const {
        textInput,
        generateAction,
        addTask,
        textFieldProps,
        openCheckboxBar,
        openDeleteBar,
        list
    } = useTodolist();
    return (
        <div className='ToDoList'>
            <Container maxWidth="sm">
                <div className='ToDoList__header'>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <TextField inputRef={textInput}
                                   label="Enter a task"
                                   variant="outlined"
                                   margin="dense"
                                   {...textFieldProps}
                        />
                        <Button variant="outlined" onClick={addTask}>Add</Button>
                    </Stack>
                </div>

                <div className='TodoList__body'>
                    <ol>
                        {list}
                    </ol>
                </div>
                <Snackbar
                    open={openDeleteBar}
                    message="Task deleted"
                    action={generateAction('delete')}
                />
                <Snackbar
                    open={openCheckboxBar}
                    message="Task finished"
                    action={generateAction('checkbox')}
                />
            </Container>
        </div>
    )
}