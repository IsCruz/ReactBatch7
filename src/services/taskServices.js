const BASE_URL = 'https://powerful-shelf-95000.herokuapp.com';
const token = localStorage.getItem('token');

export function getList() {
    return fetch(`${BASE_URL}/todos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(response => response.json())
    .then(data => {
        let task = data.message.map(todo => {
            return todo.todo_description
        });
        return task;
    });
}

export function saveTask(task) {
    return fetch(`${BASE_URL}/todos/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(task)
    }).then(response => {return response.json()})
    .catch(err => console.log(err));
}
