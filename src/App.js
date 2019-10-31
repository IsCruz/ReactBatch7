import React from 'react';
import AddTask, { Hello } from './components/AddTask';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: '',
      tasks: []
    };
     this.onChange = this.onChange.bind(this);
     this.addTaskEvent = this.addTaskEvent.bind(this);
  }

  addTaskEvent(event){
    event.preventDefault();
    const {taskValue, tasks} = this.state;
    this.setState({
      tasks: [...tasks, taskValue],
      taskValue: ''
    });
  }
  onChange(event) {
    console.log(event);
    // const {taskValue} = this.state;
    this.setState({
      taskValue: event.target.value
    });
  }

   componentDidMount() {
   }
  render () {
    const user = {
      name: 'Alan',
      lastname: 'Turizo'
    };

    return(
      <Hello />
    );
    /* return (
    <div className="App">
      <AddTask
      mono={this.onChange}
      valueForTask={this.state.taskValue}
      addTaskEvent={this.addTaskEvent}
      />
      {this.state.tasks} 
      <div>
      </div>
    </div>
    );*/
  };
}

export default App;
