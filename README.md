# Todo-using-react

# 📝 React To-Do List Application

A modern and efficient **To-Do List** built using **React**, following best practices for component-based architecture, global state management, and performance optimization.

This project implements a **Single Source of Truth** using `useReducer` and `useContext`, while data is globally distributed through a custom **Provider**, allowing all child components to access and interact with the shared state seamlessly.

---

## 🚀 Features

- ✅ Add, delete, and toggle tasks
- 🌍 Global state management using a custom **Provider** with `useContext`
- 🧠 Centralized state updates using `useReducer`
- ⚡ Optimized performance with `useMemo`
- 🔁 Code reusability via **Higher-Order Components (HOCs)**
- 🧩 Modular and maintainable component structure
- 🎯 Predictable behavior with a **Single Source of Truth**

---

## 🧱 Technologies Used

- **React**
- **React Hooks** (`useState`, `useContext`, `useReducer`, `useMemo`)
- **JavaScript (ES6+)**
- **Higher-Order Components (HOCs)**

---

## 🧠 State Management Strategy

The app uses a **Reducer pattern** with `useReducer` to manage all to-do related state in one place. This state is wrapped inside a custom **Context Provider**, which is then used to supply both state and dispatch across the entire component tree via `useContext`.

### Why this matters:

- ✅ **Single Source of Truth** – All state changes flow through one reducer.
- 📡 **Provider Pattern** – Global access to state without prop drilling.
- 🛠️ **Scalability** – Easily extendable for features like filters, categories, or persistence.

---

## ⚙️ Optimization & Best Practices

- **`useMemo`** is used to memoize computed data (like filtered tasks), reducing unnecessary renders.
- **HOCs** (Higher-Order Components) are used for shared behavior (e.g., logging, conditional rendering) without repeating logic.
- All logic is cleanly separated into components, hooks, and utility functions for maintainability.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 14.x
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
npm install
