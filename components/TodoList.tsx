'use client';

import { Todo, Priority } from '@/lib/types';
import { useLocalStorage } from '@/lib/useLocalStorage';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos, isLoaded] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (text: string, priority: Priority) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      priority,
      createdAt: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: string, text: string, priority: Priority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text, priority } : todo
    ));
  };

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
            Todo List
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Stay organized and productive
          </p>

          <AddTodo onAdd={addTodo} />

          <div className="flex gap-4 mb-6 text-sm">
            <div className="flex-1 bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-gray-600">Total</div>
            </div>
            <div className="flex-1 bg-yellow-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.active}</div>
              <div className="text-gray-600">Active</div>
            </div>
            <div className="flex-1 bg-green-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <div className="text-gray-600">Completed</div>
            </div>
          </div>

          {todos.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">No todos yet!</p>
              <p className="text-sm">Add one above to get started</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onUpdate={updateTodo}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
