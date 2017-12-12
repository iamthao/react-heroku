import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/ToDo/AddTodo'
import VisibleTodoList from '../../containers/ToDo/VisibleTodoList'

const AppToDo = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default AppToDo