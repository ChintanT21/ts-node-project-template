
# 🚀 Node.js + TypeScript Project Templates

This repository provides minimal, ready-to-use Node.js boilerplates with TypeScript and popular ORMs. Select your preferred setup and kickstart your backend project within seconds.

---

## 📁 Available Templates

| Template  | Description                          | Quick Start Command                                                  |
|-----------|--------------------------------------|----------------------------------------------------------------------|
| Sequelize | Node.js + TypeScript + Sequelize ORM | npx degit ChintanT21/ts-node-project-template/sequelize my-app      |
| TypeORM   | Node.js + TypeScript + TypeORM       | npx degit ChintanT21/ts-node-project-template/typeorm my-app        |

---

## ⚙️ Getting Started

### Step 1: Clone a Template

Use `degit` to clone only the template folder you need — no `.git` history, just clean code.

#### ▶ For Sequelize:

```
npx degit ChintanT21/ts-node-project-template/sequelize my-app
```

#### ▶ For TypeORM:

```
npx degit ChintanT21/ts-node-project-template/typeorm my-app
```

### Step 2: Install Dependencies

```
cd my-app
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the project root to define environment-specific variables like database configuration and API port.

Example:

```
API_PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=secret
```

### Step 4: Run the Project

```
npm run dev
```

You're now up and running! 🎉

---

## 📦 What's Included

✅ Express.js  
✅ TypeScript configuration  
✅ Sequelize or TypeORM integration  
✅ Pre-configured folder structure  
✅ `.env` support via `dotenv`  
✅ Live-reloading with `ts-node-dev`  
✅ Prettier for code formatting  

---

## 🙌 Contributing

Want to add your favorite setup? Contributions are welcome! Feel free to submit a pull request with your own template.

---

## 📄 License

This project is licensed under the **MIT License**.
