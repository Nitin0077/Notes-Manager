# 📝 Notes Manager

A full-stack CRUD web application for managing personal notes — built with Angular, Node.js, Express, and MySQL.

---

## 🚀 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | Angular 21              |
| Backend    | Node.js + Express.js    |
| Database   | MySQL                   |
| UI Icons   | Tabler Icons            |

---

## ✨ Features

- ✅ View all notes in a responsive card layout
- ✅ Create a new note via a modal form
- ✅ Edit an existing note (reusable form component)
- ✅ Delete a note
- ✅ REST API with full CRUD support
- ✅ Angular service for clean HTTP communication

---

## 📁 Project Structure

```
NotesManageProject/
│
├── backend/                  # Node.js + Express API
│   ├── index.js              # All API routes + DB connection
│   └── package.json
│
└── frontend/                 # Angular Application
    └── src/app/
        ├── dashboard/        # Main page — shows all UI
        ├── add-notes/        # Reusable Create + Edit modal
        └── notes-list/       # Displays all notes as cards
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

| Method   | Endpoint       | Description       |
|----------|----------------|-------------------|
| `POST`   | `/notes`       | Create a new note |
| `GET`    | `/notes`       | Get all notes     |
| `GET`    | `/notes/:id`   | Get one note      |
| `PUT`    | `/notes/:id`   | Update a note     |
| `DELETE` | `/notes/:id`   | Delete a note     |

---

## 🗄️ Database Setup

Before running the project, set up MySQL manually:

**Step 1 — Create the database**
```sql
CREATE DATABASE notesdb;
USE notesdb;
```

**Step 2 — Create the notes table**
```sql

CREATE DATABASE notesdb;
USE notesdb;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);

```

**Step 3 — Update DB credentials in `backend/index.js`**
```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "root",   // your MySQL password
  database: "notesdb"
});
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Nitin0077/Notes-Manager.git
cd Notes-Manager
```

### 2. Start the Backend
```bash
cd backend
npm install
node index.js
```
Backend runs at → `http://localhost:3000`

### 3. Start the Frontend
```bash
cd frontend
npm install
ng serve
```
Frontend runs at → `http://localhost:4200`

> ⚠️ Make sure MySQL is running and the database is set up before starting the backend.

---

## 🧩 Angular Components

| Component       | Responsibility                                      |
|-----------------|-----------------------------------------------------|
| `Dashboard`     | Main layout — header, add button, notes section     |
| `AddNotes`      | Reusable modal form for both Create and Edit        |
| `NotesList`     | Fetches and displays all notes, emits edit event    |
| `NoteService`   | Handles all HTTP calls to the backend API           |

---

## 📸 How It Works

```
User opens app (Angular)
        ↓
Dashboard loads → NotesList fetches GET /notes
        ↓
Notes displayed as cards
        ↓
Click "Add New Note" → AddNotes modal opens → POST /notes
Click "Edit"        → AddNotes modal opens with data → PUT /notes/:id
Click "Delete"      → DELETE /notes/:id
        ↓
UI updates automatically
```

---

## 👨‍💻 Author

**Nitin Vishwakarma**
- GitHub: [@Nitin0077](https://github.com/Nitin0077)
- Email: vishwakarmanitin7263@gmail.com
