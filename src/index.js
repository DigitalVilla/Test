import TodoApp from './TodoApp';

/*
## © 2024 NetLync - Interview Test

Fix the todo app to work as expected:
URL: http://localhost:1234

1. Add a new todo
2. Toggle a completed todo
3. Remove a todo
4. No errors should be in the console (except parcel's)
*/


// IGNORE SETUP
const app = new TodoApp();
app.render();
app.focusTodoInput();

if (module.hot) {
  module.hot.accept('./TodoApp', () => {
    const app = new TodoApp();
    app.render();
  });
}