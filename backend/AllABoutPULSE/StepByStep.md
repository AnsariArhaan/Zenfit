# Pulse — Step by Step Log

## Session 1: Project Setup

1. Created base folder `pulse/backend` in VS Code (via File Explorer / Desktop)
2. Inside `backend/`, created subfolders: `config/`, `models/`, `routes/`, `controllers/`, `middleware/`
3. Created folder `AllABoutPULSE/` inside `backend/` for documentation:
   - `pulse_context.md`
   - `aboutpulse.md`
   - `pulseresearch.md`
   - `stepbystep.md` (this file)
4. Ran `npm init -y` — this generated a default `package.json`
5. Opened `package.json`, deleted the default content, pasted the real config:
   - set `main` to `server.js`
   - added `start` and `dev` scripts
   - added dependencies: express, mongoose, dotenv, cors, bcryptjs, jsonwebtoken
   - added devDependency: nodemon
6. Ran `npm install` — this installed all packages and created `node_modules/` + `package-lock.json`
7. Created `.env` in the root of `backend/` with:
   - `PORT=5000`
   - `MONGO_URI=mongodb://127.0.0.1:27017/pulse`
   - `JWT_SECRET=Arhaan_12345`
   - `NODE_ENV=development`
    Where did the package.json config come from?

Not magic — it's just standard fields for a Node/Express project, chosen deliberately for what Pulse needs:

main: "server.js" — tells Node "this is the file to run when the app starts." Default from npm init -y was index.js, but our entry file is server.js, so it had to match or npm start would look for the wrong file.
scripts — shortcuts you type instead of long commands:
"start": "node server.js" → for running in production (plain Node, no auto-restart)
"dev": "nodemon server.js" → for development — nodemon watches your files and auto-restarts the server every time you save, so you don't have to stop/start manually while coding
dependencies — packages the app needs to actually run:
express — the web framework, handles routes/requests
mongoose — lets us talk to MongoDB using JavaScript objects instead of raw queries
dotenv — loads your .env file so process.env.MONGO_URI etc. work
cors — allows your frontend (running on a different port) to make requests to this backend without the browser blocking it
bcryptjs — hashes passwords (needed in Session 2 for auth, added now so you don't reinstall later)
jsonwebtoken — creates/verifies login tokens (also Session 2)
devDependencies:
nodemon — only needed while developing, not when the app is actually deployed, so it's kept separate from dependencies

8. Created `.env.example` with the same content, as a template for teammates
9. Created `.gitignore` with:
   - `node_modules/`
   - `.env`
   - `npm-debug.log`
10. Created `config/db.js` — a function `connectDB()` that connects to MongoDB via Mongoose using `MONGO_URI`, logs success, or exits the process on failure
11. Created `routes/healthRoutes.js` — an Express router with one `GET /` route that returns a JSON status ping (used to confirm the server is alive)
12. Created `server.js` in the root of `backend/`:
    - loads `.env` via `dotenv`
    - sets up Express app
    - calls `connectDB()`
    - adds `cors` and `express.json()` middleware
    - mounts `healthRoutes` at `/api/health`
    - adds a 404 fallback handler
    - starts the server on `PORT` (default 5000)

    Explaining server.js, config/db.js, healthRoutes.js in plain terms
server.js — the "ignition key" of the app. When you run it, it: loads your secret settings from .env → creates the Express app → connects to MongoDB → turns on two helpers (cors so the frontend can talk to it, express.json() so it can read JSON sent in requests) → wires up the health-check route → adds a "catch-all" that returns a 404 if someone hits a route that doesn't exist → starts listening on port 5000.
config/db.js — just the MongoDB connection logic, pulled into its own file so server.js doesn't get cluttered. It tries to connect using the address in MONGO_URI; if it works, it logs success; if it fails, it shuts the whole app down (no point running a fitness tracker that can't save any data).
routes/healthRoutes.js — a single test route (/api/health) that just replies "I'm alive" with a timestamp. It exists purely so you can check the server + DB are working before building real features on top — like starting a car and checking the dashboard lights before driving anywhere.

### Hiccup we hit and fixed
- Initially ran `npm init -y` and pasted `package.json` content while sitting in the **outer** `pulse` folder, not inside `backend/`. This created a duplicate, stale `package.json` in the wrong place.
- Diagnosed it by running `dir` in the terminal and comparing folder contents to what VS Code showed.
- Turned out `backend/` already had its own correct `package.json` from an earlier paste — just needed to `cd backend` and run `npm install` there (since `node_modules` wasn't installed in that folder yet).

### Verification
- Ran `npm run dev` from inside `backend/`
- Terminal showed:
  - `Pulse backend running on port 5000`
  - `MongoDB connected: 127.0.0.1`
- Visited `http://localhost:5000/api/health` in browser, got back:
```json
  {
    "status": "ok",
    "message": "Pulse API is up and running",
    "timestamp": "2026-07-28T10:37:49.811Z"
  }
```
- Session 1 confirmed complete.