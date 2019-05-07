class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addTodo.bind(this));  // 1. подписка на событие add у View - отправляем туда обработчик addTodo
        view.on('toggle', this.toggleTodo.bind(this));
        view.on('edit', this.editTodo.bind(this));
        view.on('remove', this.removeTodo.bind(this));

        view.show(model, items);
    }

    addTodo(title) {                               //2.  обработчик получит title - заголовок задачи (из View) //5.вызывается ф-ция addTodo через EventEmitter,
        const todo = this.model.addItem({          //6. просим model добавить объект, мы его сохраняем в константе todo
            id: Date.now(),
            title,
            completed: false
        });

        this.view.addItem(todo);                    //7. обратно передваем объект todo в View, чтобы оно создало новый элемент li
    }

    toggleTodo({ id, completed }) {
        const item = this.model.updateItem(id, { completed });
        console.log(completed);
        this.view.toggleItem(todo);
    }

    editTodo({ id, title }) {
        const todo = this.model.updateItem(id , { title });

        this.view.editItem(todo);
    }

    removeTodo(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
    }
}

export default Controller;