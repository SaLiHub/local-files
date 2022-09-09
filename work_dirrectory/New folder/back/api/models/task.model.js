import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    isChecked: {type: Boolean, required: true},
    inputValue: {type: String, required: true},
}, {
    timestamps: true
});

const Task = mongoose.model('Tasks', taskSchema);

export default Task;