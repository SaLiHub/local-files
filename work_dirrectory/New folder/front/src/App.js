import './App.css';
import Todolist from "./Todolist";
import {createTheme} from "@mui/material";

const mainTheme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
        ]
    },
});

function App() {
    return (
        <div className="App" theme={mainTheme}>
            <Todolist/>
        </div>
    );
}

export default App;
