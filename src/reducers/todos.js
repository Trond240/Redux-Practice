export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Date.now(), 
                todo: action.todo, 
                completed: false
            }];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                console.log('made-it', action.id)
                if (action.id == todo.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
         default:
           return state;
    }
}