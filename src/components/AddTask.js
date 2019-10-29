import React from 'react';

export function Hello () {
    return <div>hello</div>;
}
function AddTask(props) {
        return(
            <div>
                <form>
                    <div>
                        <label>Add a Task</label>
                    </div>
                    <div>
                        <textarea
                        onChange={props.mono}
                        value={props.valueForTask}
                        />
                    </div>
                    <div>
                        <button onClick={props.addTaskEvent}>Add Task</button>
                    </div>
                    <Hello/>
                </form>
            </div>
        );
}
export default AddTask;