import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import TodoHeader from "./components/TodoHeader/TodoHeader";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            todos: [],
        };
    }

    // Eğer input alanı boş değilse todos'a ekleye
    addItem = () => {
        // input'ta yazılı olan string değer
        let currentValue = this.state.userInput;

        //Removes whitespaces
        currentValue = currentValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

        //Removed if statement. we check empty string in line 31
        const newTodo = {
            // Delete yaparken kullanılabilmesi için bir her item için random bir id
            id: Math.random(),
            content: currentValue,
        };

        //checks if "currentValue" has value
        currentValue &&
            this.setState(
                {
                    // Var olan array'i korumak için spread operatör kullanılıyor
                    // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
                    todos: [...this.state.todos, newTodo],
                },
                () => {
                    // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
                    this.setState({ userInput: "" });
                }
            );
    };

    onInputChange = (e) => {
        const newVal = e.target.value;
        this.setState({
            userInput: newVal,
        });
    };
    
    deleteTodo = (id) => {
      this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)})
    };

    render() {
        return (
            <div className="App">
                <TodoHeader />
                <Form
                    userInput={this.state.userInput}
                    onInputChange={this.onInputChange}
                    addItem={this.addItem}
                />
                {this.state.todos.length > 0 && (
                    <div className="list">
                        <TodoList removeTodo = {this.deleteTodo} todos={this.state.todos} />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
