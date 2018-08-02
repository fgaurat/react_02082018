import * as React from 'react';
import 'node_modules/bootstrap/dist/css/bootstrap.css';
import TodoListContainer from './containers/TodoListContainer';


class App extends React.Component {
  public render() {
    return (
      <main role="main" className="container">
          <h1>TodoList</h1>
          <TodoListContainer/>
      </main>

        );
      }
    }
    
    export default App;
