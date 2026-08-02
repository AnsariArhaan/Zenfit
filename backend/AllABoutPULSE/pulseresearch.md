# Pulse — Research & Environment Setup

## Why these choices

**Node.js + Express (backend framework)**
Lightweight, huge ecosystem, easy to teach across a 3-person team,
and pairs naturally with a plain HTML/CSS/JS frontend without needing
a build step on either side.

**MongoDB + Mongoose (database)**
Schema is flexible while we're still figuring out exactly what fields
tracker/workout/blog entries need. Mongoose gives just enough structure
(schemas, validation) without the rigidity of a SQL migration workflow,
which is easier for a college project timeline.

**JWT for auth**
Stateless — no server-side session storage needed. Frontend just stores
the token and sends it on protected requests. Simple to reason about
for a small team.

**Separate frontend/backend (instead of one combined app)**
Two people can build in parallel without stepping on each other. The
backend defines a clean REST API; the frontend consumes it. This is
also just how real-world web apps are usually structured, so it's a
better learning outcome for the project.

## Environment setup (for anyone joining the project)

1. Install [Node.js](https://nodejs.org) (LTS version)
2. Install MongoDB Community Server locally, or set up a free MongoDB
   Atlas cluster if not running Mongo locally(i'm connected locally)
3. Install VS Code + recommended extensions: ESLint, MongoDB for VS Code
4. Clone/copy the `backend` folder
5. Run `npm install`
6. Copy `.env.example` to `.env` and fill in your own `MONGO_URI` and
   `JWT_SECRET`
7. Run `npm run dev` — should print "Pulse backend running on port 5000"
   and "MongoDB connected"
8. Confirm by visiting `http://localhost:5000/api/health`