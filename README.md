# Sri Lankan Recipe Portal

A web application built with **Python Django (REST Framework + ORM)** and **React (Vite)** for sharing, discovering, and managing authentic Sri Lankan recipes.

## Core Models (Django ORM)
- `Category` — Recipe categories (e.g., Curries, Sambols, Rice & Kottu, Sweets)
- `Ingredient` — Reusable ingredients (e.g., Coconut Milk, Curry Leaves, Goraka)
- `Recipe` & `RecipeIngredient` — Core recipe entity linked to `User` (`author`), `Category` (`ForeignKey`), and `Ingredient` (`ManyToManyField`)
- `Comment` — Recipe reviews and ratings linked to `Recipe` and `User`

## Group Members & Branch Ownership

| Member ID | Git Branch | Primary Responsibility |
| :--- | :--- | :--- |
| `CST23030` | `feat/CST23030-auth-profile` | User Authentication (Register/Login/Profile API & UI), Navbar, AuthContext |
| `CST23036` | `feat/CST23036-categories-ingredients` | Category & Ingredient ORM APIs + Explorer/Management Page |
| `CST23017` | `feat/CST23017-recipe-crud` | Recipe & RecipeIngredient CRUD APIs + Create/Edit Recipe Dynamic Form |
| `CST23074` | `feat/CST23074-search-feed` | Recipe Search & Filter ORM Queries + Home Recipe Feed & Search Bar |
| `CST23022` | `feat/CST23022-detail-comments` | Comment ORM APIs + Recipe Detail Page & Live Comment Section |
| `CST23081` | `feat/CST23081-dashboard-management` | User Recipe Stats/Delete API + My Recipes Management Table & UI Polish |

## Local Setup in VS Code

### 1. Backend (Django)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Backend runs at `http://127.0.0.1:8000` (API health check: `http://127.0.0.1:8000/api/health/`).

### 2. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://127.0.0.1:5173`.

## Git Workflow for Members
1. Clone the repository and configure your **own** Git identity:
   ```bash
   git config user.name "Your GitHub Username"
   git config user.email "your-github-email@example.com"
   ```
2. Switch to your assigned branch:
   ```bash
   git checkout feat/CST230XX-...
   ```
3. Pull updates from `develop` regularly (`git pull origin develop`), commit small incremental changes, and open a Pull Request to `develop`.
