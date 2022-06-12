const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      /* Pega o estado anterior */
      return [
        ...state,

        /* Adiciona novo objeto com as propriedades
           da task */
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    /* Inverte estado da task de done para active e vice-versa */
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todos;
