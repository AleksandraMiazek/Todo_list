import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {
    state = {
        elements: [
            { id: '3435345', isCompleted: true,  title: 'Zrobić zakupy'},
            { id: '343hg45', isCompleted: false, title: 'Opłacić domenę'}
        ],
        inputValue: '' 
    }
    markCompleted(id) {
        const index = this.state.elements.
                        findIndex(x => x.id == id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true
        this.setState({elements: newElements})
    }
     addItem() {
         //dodawanie elementu
        const item = {     //tablica przechowuje dane nowo wpisanej jednostki
            id: Math.random(),
            title: this.state.inputValue
        }//tworzę nową tablicę elementów składającą się z item + wszystko to co było
        const newElements = [item, ...this.state.elements]
        this.setState({ elements: newElements }) //aktualizuję state
     }
     inputHandler(event) {
         const newValue = event.target.value
         this.setState({ inputValue: newValue })
     }

    render() {
        const elements = this.state.elements.map(e => {
        return <TodoItem element={e} markClicked={this.markCompleted.bind(this)} />
        })
        
        return (
            <div>
                Todo App
                <p><input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button></p>
                {elements}
            </div>
        )
    }
}

export default Todo