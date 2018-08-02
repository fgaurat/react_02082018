import { connect } from 'react-redux'
import TodoList from "../components/TodoList";



const mapStateToProps = (state:any) => ({
    todos: state.todosReducer.todos
})

export default connect(mapStateToProps)(TodoList)