import * as React from 'react';

class TodoList extends React.Component<any,any> {

    constructor(props:any){
        super(props);
        console.log("constructor",this.props);
    }
    public render() {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map( (todo:any) =>
                            (<tr key={todo.id}>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button className="btn">Delete</button>
                                </td>
                            </tr>)
                        )}

                    </tbody>
                </table>

                
            </>
        );
    }
}

export default TodoList;
