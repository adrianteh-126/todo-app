'use client';

import { useState } from 'react';
import { Todo, Priority } from '@/lib/types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string, priority: Priority) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim(), editPriority);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditPriority(todo.priority);
    setIsEditing(false);
  };

  const priorityColors = {
    low: 'bg-green-100 text-green-800 border-green-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    high: 'bg-red-100 text-red-800 border-red-300',
  };

  const priorityBorder = {
    low: 'border-l-4 border-l-green-500',
    medium: 'border-l-4 border-l-yellow-500',
    high: 'border-l-4 border-l-red-500',
  };

  if (isEditing) {
    return (
      <li className={`bg-white rounded-lg shadow-sm p-4 ${priorityBorder[todo.priority]}`}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            autoFocus
          />
          <div className="flex gap-2">
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value as Priority)}
              className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-900"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={`bg-white rounded-lg shadow-sm p-4 ${priorityBorder[todo.priority]} hover:shadow-md transition-shadow`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
        />
        <div className="flex-1">
          <p className={`text-gray-900 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.text}
          </p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[todo.priority]}`}>
          {todo.priority}
        </span>
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
