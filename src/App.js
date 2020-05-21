import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from 'uuid'

export default class App extends Component {
  state = {
    items: [],
    title: '',
    id: 0,
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      title: this.state.title,
      id: uuid()
    }
    const updatedTodo = [...this.state.items, newTodo]
    this.setState({
      items: updatedTodo,
      title: '',
      editItem: false
    })
  }

  handleDelete = (id) => {
    const filtered = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filtered,
      editItem:false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleEdit = (id) => {
    const filtered = this.state.items.filter(item => item.id !== id);
    const founded = this.state.items.find(item => item.id === id)
    this.setState({
      items: filtered,
      title: founded.title,
      id: id,
      editItem: true
    })
  }


  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-4'>
              <h3 className='text-capitalize text-center'>
                Todo Input
              </h3>
              <TodoInput 
              title={this.state.title} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />
            <TodoList 
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
