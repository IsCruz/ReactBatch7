import React from 'react';
import propTypes from 'prop-types';

 
export function Hello (props) {
    return <div>hello {props.user.name}
    {props.user.lastname}</div>;
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

Hello.defaultProps = {
    user: {
        name: 'Guillermo',
        lastname: 'Del Toro'
    }
};

Hello.propTypes = {
    user: propTypes.shape({
        name: propTypes.string,
        lastname: propTypes.string.isRequired
    }).isRequired
};

export default AddTask;