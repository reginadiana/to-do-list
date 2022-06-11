const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      /*Os dados vão se acumulando*/
      return [
        ...state,

        /*action.id e action.text foi definido em actions/index.js*/
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    /*Pela id passada, a tarefa pode mudar de estado*/
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todos;
