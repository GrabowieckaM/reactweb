import React from 'react';

class HomeWHosHelping extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: ['Organization Lorem1','Organization Lorem2','Organization Lorem3','Organization Lorem4','Organization Lorem5','Organization Lorem6'],
            todos2: ['Zbiorka Lorem1','Zbiorka Lorem2','Zbiorka Lorem3'],
            todos3: ['Fundacja Lorem1','Fundacja Lorem2','Fundacja Lorem3','Fundacja Lorem4','Fundacja Lorem5','Fundacja Lorem6','Fundacja Lorem7','Fundacja Lorem8','Fundacja Lorem9'],
            currentPage: 1,
            todosPerPage: 3,
            currentPage2: 1,
            todosPerPage2: 3,
            currentPage3: 1,
            todosPerPage3: 3
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleClick2(event) {
        this.setState({
            currentPage2: Number(event.target.id)
        });
    }

    handleClick3(event) {
        this.setState({
            currentPage3: Number(event.target.id)
        });
    }

render() {
    const { todos, todos2,todos3, currentPage, todosPerPage,currentPage2, todosPerPage2,currentPage3, todosPerPage3 } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const indexOfLastTodo2 = currentPage2 * todosPerPage2;
    const indexOfFirstTodo2 = indexOfLastTodo2 - todosPerPage2;
    const indexOfLastTodo3 = currentPage3 * todosPerPage3;
    const indexOfFirstTodo3 = indexOfLastTodo3 - todosPerPage3;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    const currentTodos2 = todos2.slice(indexOfFirstTodo2, indexOfLastTodo2);
    const currentTodos3 = todos3.slice(indexOfFirstTodo3, indexOfLastTodo3);

    const renderTodos = currentTodos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
    });
    const renderTodos2 = currentTodos2.map((todo, index) => {
        return <li key={index+'g'}>{todo}</li>;
    });
    const renderTodos3 = currentTodos3.map((todo, index) => {
        return <li key={index+'f'}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }
    const pageNumbers2 = [];
    for (let i = 1; i <= Math.ceil(todos2.length / todosPerPage2); i++) {
        pageNumbers2.push(i);
    }
    const pageNumbers3 = [];
    for (let i = 1; i <= Math.ceil(todos3.length / todosPerPage3); i++) {
        pageNumbers3.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={this.handleClick}
            >
                {number}
            </li>
        );
    });
    const renderPageNumbers2 = pageNumbers2.map(number => {
        return (
            <li
                key={number+'b'}
                id={number+'a'}
                onClick={this.handleClick2}
            >
                {number}
            </li>
        );
    });
    const renderPageNumbers3 = pageNumbers3.map(number => {
        return (
            <li
                key={number+'d'}
                id={number+'c'}
                onClick={this.handleClick3}
            >
                {number}
            </li>
        );
    });
    return(
        <div className='whcont'>
            <h1>Komu pomagamy?</h1>
            <div className="deco">

            </div>
            <div className="buttons">
                <button id='frst' onClick={()=>{

                }}>Fundacjom</button>
                <button id='sec' onClick={()=>{

                }
                }>Organizacjom pozarządowym</button>
                <button id='trd'onClick={()=>{
                    }}>Lokalnym zbiórkom</button>
            </div>
            <div id='bigcontain'>

                <div id='frstpag'>
                    <ul id='rendertools'>
                        {renderTodos}
                    </ul>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>
                <div id='secpag'>
                    <ul id='rendertools2'>
                        {renderTodos2}
                    </ul>
                    <ul id="page-numbers2">
                    </ul>
                </div>
                <div id='thrdpag'>
                    <ul id='rendertools3'>
                        {renderTodos3}
                    </ul>
                    <ul id="page-numbers3">
                        {renderPageNumbers3}
                    </ul>
                </div>
            </div>
        </div>
    );
}



}

export default HomeWHosHelping;