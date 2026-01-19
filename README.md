# Todo List Application

A modern, fully-featured todo list application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete
- ✅ Priority levels (Low, Medium, High) with color-coded indicators
- ✅ Local storage persistence (your todos are saved automatically)
- ✅ Real-time statistics (Total, Active, Completed)
- ✅ Beautiful, responsive UI with Tailwind CSS
- ✅ Built with TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: Bun
- **Build Tool**: Turbopack (Next.js default)

## Getting Started

### Prerequisites

Make sure you have Bun installed. If not, install it:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

Install dependencies:

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Build the application for production:

```bash
bun run build
```

### Production

Start the production server:

```bash
bun run start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles with Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── AddTodo.tsx       # Form component for adding todos
│   ├── TodoItem.tsx      # Individual todo item with edit/delete actions
│   └── TodoList.tsx      # Main todo list component with state management
├── lib/
│   ├── types.ts          # TypeScript type definitions
│   └── useLocalStorage.ts # Custom hook for localStorage persistence
└── package.json
```

## Usage

1. **Add a Todo**: Type your task in the input field, select a priority level, and click "Add Todo"
2. **Complete a Todo**: Click the checkbox next to a todo to mark it as complete
3. **Edit a Todo**: Click the "Edit" button to modify the todo text or priority
4. **Delete a Todo**: Click the "Delete" button to remove a todo
5. **View Statistics**: Check the stats cards to see your progress

## License

MIT
