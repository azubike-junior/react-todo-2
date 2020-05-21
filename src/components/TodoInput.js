import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {handleChange, handleSubmit, title, editItem} = this.props
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fa fa-book'/>
                            </div>
                        </div>
                        <input type='text'
                        value={title}
                        onChange={handleChange}
                        placeholder='add a todo item... '
                        className='form-control text-capitalize'
                            />
                    </div>
                    <button type='submit' className={editItem ?'btn btn-block btn-success mt-3': 'btn btn-block btn-primary mt-3'} >
                       {editItem ? 'Edit Your Todo': 'Add Todo'}
                    </button>
                </form>
            </div>
        )
    }
}
