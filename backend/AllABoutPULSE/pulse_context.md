# Pulse — Backend Build Context

Tracks progress across sessions. This is the file your friend (frontend) and
anyone else joining should read first to know exactly what's built and what's next.

## Stack decisions
- Backend: Node.js + Express
- Database: MongoDB (local) + Mongoose
- Auth: JWT (planned for Session 2)
- Frontend (separate track): static HTML/CSS/JS

## Session plan
1. Project setup — Express server, folder structure, env config, DB connection ✅ DONE
2. Auth — register/login, JWT, protected routes — not started
3. Core tracking — BMI, steps, calorie tracker models + APIs — not started
4. Workouts + supplements info APIs — not started
5. Blog module + final polish — not started

## Session 1 — Project Setup (done)
- Folder structure: `config/`, `models/`, `routes/`, `controllers/`, `middleware/`
- `server.js` — Express entry point, mounts routes, 404 fallback
- `config/db.js` — Mongoose connection, reads `MONGO_URI` from env
- `.env` / `.env.example` — PORT, MONGO_URI, JWT_SECRET, NODE_ENV
- `routes/healthRoutes.js` — `GET /api/health` status ping
- Verified: `npm run dev` connects to local MongoDB and server responds on `/api/health`

## API endpoints so far
| Method | Route | Description | Auth required |
|---|---|---|---|
| GET | /api/health | Health check | No |

## Next session (Session 2 — Auth)
- `models/User.js` — name, email, password (hashed), createdAt
- `controllers/authController.js` — register, login
- `middleware/authMiddleware.js` — JWT verification
- `routes/authRoutes.js` — POST /api/auth/register, POST /api/auth/login
- Mount `/api/auth` in `server.js`