import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Button, Checkbox, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {parseDate, parseTime} from "./helper.todolist";
import DeleteIcon from "@mui/icons-material/Delete";

const useTodolist = () => {
    const [list, setList] = useState([]);
    const [openCheckboxBar, setOpenCheckboxBar] = useState(false);
    const [openDeleteBar, setOpenDeleteBar] = useState(false);

    // input ref
    const textInput = useRef(null);

    // delete and undo task variables
    const changeObserver = useRef(null);

    const [textFieldProps, setTextFieldProps] = useState({
        id: "outlined-basic",
    })

    async function getAllData() {
        const response = await axios.get('http://localhost:3001/api/v1/tasks');
        setList(response.data);
    }


    useEffect(() => {
        window.addEventListener('beforeunload', (event) => {

        })

        // Make request for initial data
        getAllData();
    }, [])


    function addTask() {
        if (!textInput.current.value) { // if input is empty - do nothing
            setTextFieldProps({
                helperText: "Empty input.",
                error: true,
                id: "outlined-error-helper-text",
            })
            return 0;
        }


        setTextFieldProps({
            id: "outlined-basic",
        })

        const newTask = {
            isChecked: false,
            inputValue: textInput.current.value,
        };

        // Send dada to the server
        const {isChecked, inputValue} = newTask;

        axios.post('http://localhost:3001/api/v1/tasks/add', {isChecked, inputValue})
            .then((res) => {
                setList([...list, res.data]); // Add new data to the list
                console.log('New task was added!')
            }).catch(e => console.log(e))

        textInput.current.value = ''; // Reset input value
        textInput.current.focus();
    }

    async function sendRequest({id, action}, closeSnack = true) {
        if (action === 'delete') {
            await axios.delete('http://localhost:3001/api/v1/tasks/' + id)
        } else {
            await axios.patch('http://localhost:3001/api/v1/tasks/' + id)
        }

        if (closeSnack) {
            changeObserver.current = null;
            setOpenDeleteBar(false);
            setOpenCheckboxBar(false);
        }

    }

    function handlePendingState({id, action}) {
        // If an action was made during timeout,
        // execute previous action and create timeout for current action
        if (changeObserver.current !== null) {
            clearTimeout(changeObserver.current.timeout);
            changeObserver.current.sendRequest(false);
        }

        changeObserver.current = {
            timeout: setTimeout(() => sendRequest({id, action}), 6000),
            sendRequest: (closeSnack) => sendRequest({id, action}, closeSnack)
        }
    }


    function deleteTask(i, id) {
        list.splice(i, 1)
        setList([...list]);

        handlePendingState({action: 'delete', id});

        // Open new Snackbar
        setOpenDeleteBar(true);
    }


    function handleCheckBox(i, id) {
        list[i].isChecked = !list[i].isChecked;
        list[i].updatedAt = new Date().toString();
        setList([...list])

        handlePendingState({action: 'check', id, i});

        // Open new Snackbar
        setOpenCheckboxBar(true);
    }

    function closeSnackbar() {
        clearTimeout(changeObserver.current.timeout);
        changeObserver.current.sendRequest();
        changeObserver.current = null;
        setOpenDeleteBar(false);
        setOpenCheckboxBar(false);
    }

    function undo() {
        clearTimeout(changeObserver.current.timeout);
        changeObserver.current = null;
        getAllData();
        setOpenDeleteBar(false);
        setOpenCheckboxBar(false);
    }

    function generateAction() {
        return (
            <>
                <Button color="secondary" size="small" onClick={undo}>
                    UNDO
                </Button>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={closeSnackbar}
                >
                    <CloseIcon fontSize="small"/>
                </IconButton>
            </>
        )
    }

    function createList(list) {
        return list.map((el, i) => {
            const startTime = parseTime(el.createdAt);
            const startDate = parseDate(el.createdAt)

            const doneTime = parseTime(el.updatedAt);
            const doneDate = parseDate(el.updatedAt);

            const {_id, isChecked, inputValue} = el;
            return (
                <li className='ToDoList__item' key={i}>
                    <Checkbox checked={isChecked}
                              onChange={() => handleCheckBox(i, _id)}
                              disabled={isChecked}
                              inputProps={{'aria-label': 'controlled'}}
                    />
                    {inputValue}
                    <span
                        className='ToDoList__item-time'>{`Started at - ${startDate}, ${startTime} `}</span>
                    ---
                    {isChecked ?
                        (<span
                            className='ToDoList__item-time'>{` Finished at - ${doneDate}, ${doneTime}`}
                                </span>) : ''}
                    <IconButton aria-label="delete"
                                color="primary"
                                disabled={isChecked}
                                onClick={() => deleteTask(i, _id)}>
                        <DeleteIcon/>
                    </IconButton>
                    {isChecked ? (
                        <Button variant="outlined"
                                color="error"
                                onClick={() => deleteTask(i, _id)}>
                            Force delete

                        </Button>
                    ) : ''}
                </li>
            )
        });
    }

    return {
        generateAction,
        addTask,
        textFieldProps,
        openCheckboxBar,
        openDeleteBar,
        textInput,
        list: createList(list)
    }
}

export default useTodolist;