import React, {Component  } from "react";
class TodoForm extends Component{
    constructor(){
        super();
        this.state ={
            title:"",
            description:"",
            priority:"low",
            responsible:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name,value} =e.target;
        var obj = this.state;
        obj[name]=value;
        this.setState(obj);
    }
    handleSubmit(e){
        e.preventDefault();
        console.table();
        this.props.onAddTodo(this.state);
    }
    render(){
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <h3 className="card-header">
                        Todo Form
                    </h3>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Title"
                                className="form-control"
                                name="title"
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                placeholder="Description"
                                className="form-control"
                                name="description"
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                placeholder="Responsible"
                                className="form-control"
                                name="responsible"
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                        
                            <select
                                name="priority"
                                className="form-control"
                                onChange={this.handleChange}>
                                <option title="low">
                                    Low
                                </option>
                                <option title="medium">
                                    Medium
                                </option>
                                <option title="High">
                                    High
                                </option>
                            </select>
                        </div>
                        <div className="card-footer">
                            <input 
                                type="submit"
                                className="btn btn-success"
                                value="Submit"
                                />
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
export default TodoForm;