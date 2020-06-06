let nextTodoId = 0

/*Essa action cria uma nova tarefa e atribui um novo id a ela*/
/*Recebe o nome da tarefa*/
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

/*Essa action marca se a tarefa foi concluida e recebendo o seu id*/
export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

/*Action que irá desparar o tipo de filtro a ser usado*/
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}