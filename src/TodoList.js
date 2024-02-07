import TodoListItem from './TodoListItem'

// ## Incomplete Todo

class TodoList {
  constructor(texts = []) {
    // Map array of strings to array of TodoListItem
    this.list = texts.map((text) => {
      const todoListItem = new TodoListItem(text)
      return todoListItem.getItem()
    })
  }

  add(text) {
    if (!text) return
    // Instantiate new TodoListItem and add to list
  }

  toggle(itemId) {
    // toggle the isResolved attribute
  }

  remove(itemId) {
    // Remove todo
  }

  getList() {
    return this.list
  }
}

export default TodoList
