import React,{Component} from 'react';
class TodoItem extends Component{
    constructor(){
        super();
        this.HandleRemove= this.HandleRemove.bind(this);
    }
    HandleRemove(index){
        if(window.confirm("Do you want to Remove?")){
            this.props.RemoveHandler(index);   
        }
    }
    render(){
        var todo = this.props.todoItem;        
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        {todo.title}
                        &nbsp;
                        <span className="badge badge-pill badge-danger">
                            {todo.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        {todo.description}
                    </div>
                </div>
                <div className="card-footer">
                    <input 
                        type="button" 
                        className="btn btn-danger" 
                        value="Delete" 
                        onClick={()=>{this.HandleRemove(this.props.index)}}/>
                </div>
            </div>
            
        );
    }
}
export default TodoItem;