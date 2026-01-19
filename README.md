# Todo List Application

A modern, production-ready todo list application built with Next.js 14, TypeScript, and Tailwind CSS 4. Features a beautiful gradient UI, local storage persistence, and comprehensive task management capabilities.

## Features

- ✅ **Full CRUD Operations**: Add, edit, and delete todos with ease
- ✅ **Task Completion**: Mark todos as complete or incomplete
- ✅ **Priority Levels**: Organize tasks with Low, Medium, and High priorities
- ✅ **Color-Coded Indicators**: Visual priority feedback with color-coded badges
- ✅ **Local Storage Persistence**: Your todos are automatically saved and persist across sessions
- ✅ **Real-time Statistics**: Track Total, Active, and Completed tasks at a glance
- ✅ **Inline Editing**: Edit todos directly without modal dialogs
- ✅ **Responsive Design**: Beautiful UI that works on all screen sizes
- ✅ **Type Safety**: Built with TypeScript for robust development
- ✅ **Production Ready**: Includes error handling and data recovery mechanisms

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Build Tool**: [Turbopack](https://turbo.build/pack) (Next.js default)

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed. If not, install it:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/adrianteh-126/todo-app.git
cd todo-app
```

2. Install dependencies:

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you make changes to the code.

### Build

Build the application for production:

```bash
bun run build
```

This creates an optimized production build in the `.next` folder.

### Production

Start the production server:

```bash
bun run start
```

## Project Structure

```
todo-app/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx            # Root layout with metadata and fonts
│   └── page.tsx              # Home page (renders TodoList component)
├── components/
│   ├── AddTodo.tsx           # Form component for adding new todos
│   ├── TodoItem.tsx          # Individual todo item with actions
│   └── TodoList.tsx          # Main todo list with state management
├── lib/
│   ├── types.ts              # TypeScript interfaces (Todo, Priority)
│   └── useLocalStorage.ts    # Custom React hook for localStorage
├── .gitignore                # Git ignore rules
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## Usage

### Adding a Todo

1. Type your task in the input field
2. Select a priority level (Low, Medium, or High)
3. Click the "Add Todo" button or press Enter

### Managing Todos

- **Mark Complete**: Click the checkbox to toggle completion status
- **Edit Todo**: Click the "Edit" button, modify the text/priority, then click "Save"
- **Delete Todo**: Click the "Delete" button to remove a todo
- **View Statistics**: Check the stats cards at the top to see your progress

### Priority Levels

- **Low**: Gray badge - For non-urgent tasks
- **Medium**: Yellow badge - For moderately important tasks  
- **High**: Red badge - For urgent and important tasks

## Architecture

### State Management

The application uses React's built-in `useState` for local state management. Todos are stored in the `TodoList` component and synchronized with `localStorage` via a custom hook.

### Data Persistence

The `useLocalStorage` hook provides:
- Automatic synchronization with browser localStorage
- Error handling for corrupted data
- Recovery mechanisms that clear invalid data
- Type-safe generic implementation

### Key Design Decisions

1. **UUID for IDs**: Uses `crypto.randomUUID()` to prevent ID collisions when rapidly adding todos
2. **Functional State Updates**: Ensures all state updates use the current state to prevent race conditions
3. **Corrupted Data Recovery**: Automatically clears corrupted localStorage data instead of crashing
4. **Inline Editing**: Provides a seamless editing experience without modal dialogs

## Browser Compatibility

- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported  
- Safari: ✅ Fully supported
- Opera: ✅ Fully supported

Requires a modern browser with localStorage and crypto.randomUUID() support.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Acknowledgments

Built with modern web technologies and best practices for a delightful developer and user experience.
