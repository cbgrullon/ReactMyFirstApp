import React,{Component} from 'react';
// import TodoItem from './TodoItem';
// import TodoForm from './TodoForm';
class TodoList extends Component{
    constructor(){
        super();
        this.state ={todos:[]}
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(result=>{ return result.json()})
            .then(data=>{
                this.setState({todos:data});
                const todosHtml = this.state.todos.map((todo,index)=>{
                    return (
                        <div className="card">
                            <div className="card-header">
                                <h3>
                                    {todo.title}
                                </h3>
                            </div>
                            <div className="card-body">
                                {todo.completed}
                            </div>
                        </div>
                    );
                });
                this.setState({
                    ...this.state,
                    todosHtml
                });
            });

    }
    render(){
        return (
            <div>
                {this.state.todosHtml}
            </div>
            // <div className="container">
            //     <div className="row">
            //         <TodoForm onAddTodo={this.handleAddTodo}/>
            //         {todosHtml}
            //     </div>
            // </div>
        );
    }
    handleAddTodo(todo){
        this.setState({todos:[
            ...this.state.todos,
            todo
        ]});
    }
    handleRemoveTodo(index){
        var arr = this.state.todos;
        arr.splice(index,1);
        this.setState({todos:arr});
    }
}
export default TodoList;