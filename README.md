# 🎮 Tic-Tac-Toe with AI (Minimax Algorithm)

A modern **React + Tailwind CSS** Tic-Tac-Toe game where you play against an **unbeatable AI** powered by the **Minimax algorithm**.

---

# 🚀 Features

* ✅ Play against AI (never loses)
* ✅ Built with React functional components
* ✅ Clean UI using Tailwind CSS
* ✅ Move history (time travel)
* ✅ Winner detection + highlight
* ✅ Draw detection
* ✅ Smart decision-making using Minimax

---

# 🧠 AI Logic

This project uses the **Minimax Algorithm** (Game Theory) to simulate all possible game outcomes and select the optimal move.

### 🔹 How it works

1. AI explores all possible moves
2. Simulates opponent responses
3. Assigns scores:

   * **+1** → AI wins
   * **-1** → Player wins
   * **0** → Draw
4. Chooses the move that:

   * Maximizes AI’s chance of winning
   * Minimizes player’s chance of winning

---

# 📁 Project Structure

```
src/
│
├── components/
│   ├── Board/
│   │   └── Board.jsx
│   │
│   ├── Square/
│   │   └── Square.jsx
│
├── utils/
│   ├── calculateWinner.js
│   └── aiMove.js
│
├── pages/
│   └── Game.jsx
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### 4. Configure Tailwind

**tailwind.config.js**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 5. Run the app

```bash
npm run dev
```

---

# 🎮 How to Play

* You are **X**
* AI is **O**
* Click any square to make a move
* AI will automatically respond
* First to align 3 symbols wins

---

# 🧩 Key Components

### 🔹 Board.jsx

* Renders grid
* Handles game status (win/draw/turn)

### 🔹 Square.jsx

* Single cell component
* Highlights winning move

### 🔹 Game.jsx

* Main controller
* Manages state & history

---

# 🤖 AI Implementation

## 📄 `aiMove.js`

Core logic:

```js
function getBestMove(squares, isMaximizing)
```

### Key Concepts:

* **Recursion** → explores future states
* **Backtracking** → resets board after simulation
* **Min vs Max**

  * AI → maximize score
  * Player → minimize score

---

# 🌳 Example Decision Tree

```
AI Turn
   |
   ├── Move A → Score -1
   ├── Move B → Score 0
   └── Move C → Score +1
```

👉 AI selects **Move C**

---

# 🎯 Learning Outcomes

By building this project, you understand:

* React component architecture
* State management with hooks
* Game logic design
* Recursion & backtracking
* Decision-making algorithms (Minimax)

---

# ⚡ Future Improvements

* 🎯 Difficulty levels (Easy / Medium / Hard)
* ⚡ Alpha-Beta pruning (performance optimization)
* 🌙 Dark mode
* 🎨 Animations
* 🤝 Multiplayer mode

---

# 💡 Interview Explanation

> “I implemented an AI opponent using the Minimax algorithm, which recursively evaluates all possible board states and selects the optimal move by maximizing its chances of winning while minimizing the opponent’s.”

---

# 📜 License

This project is open-source and free to use.

---

# 🙌 Acknowledgment

Inspired by classic Tic-Tac-Toe implementations and game theory concepts.

---

## ⭐ If you like this project, consider giving it a star!











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
