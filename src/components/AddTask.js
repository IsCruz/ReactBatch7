import React from 'react';
import propTypes from 'prop-types';

 
export function Hello (props) {
    const myPersonalStyle = {
        backgroundColor: 'green',
        innerHeight: '100px',
        color: 'white'
    };
    return <div style={myPersonalStyle}>hello {props.user.name}
    {props.user.lastname}</div>;
}
function ViewData(props) {
    return (<div key={props.key}>{props.data}</div>);
}
function ListmyTasks (props) {
    const listData = props.allTasks;
    const listMyDataPretty = listData.map((data, key) => {
           return <ViewData key={key} data={data} />;
    });
    return (
        <div>
        {listMyDataPretty}
        </div>
    )
}

function AddTask(props) {
    const personalStyles = {
      width: '80%',
      innerHeight: '80%',
      marginLeft: '10%',
      marginRight: '10%',  
      marginBottom: '2%'
    };
    const alltasks = props.allTasks;

    const handlerMessage = (alltasks) => {
        if( alltasks.length === 0) {
            return (
                <div> You have {alltasks.length} Today</div>
            );
        } else {
            return (
               <ListmyTasks allTasks={alltasks} />
            )
        }
    };
        return(
            <div>
                <form>
                    <div>
                        <label>Add a Task</label>
                        <textarea className="form-control"
                        style={personalStyles}
                        onChange={props.mono}
                        value={props.valueForTask}
                        />
                    </div>
                    <div className="form-group">
                        <button
                          className="btn btn-primary" 
                          onClick={props.addTaskEvent}
                          >
                            Add Task
                            </button>
                    </div>
                    {handlerMessage(alltasks)}
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