# About ZenFit

ZenFit is a college-level fitness tracking website — workouts, BMI/steps/
calorie tracking, supplements info, a blog, and user accounts. Originally
built as a single-file HTML/CSS/JS prototype, now being rebuilt properly
with a separate backend (Node/Express + MongoDB) and frontend
(HTML/CSS/JS), built by two different people in parallel.

## Session 1 — Project Setup
Started the backend from scratch. Set up the Express server, connected it
to a local MongoDB instance via Mongoose, and organized the code into
`config/`, `models/`, `routes/`, `controllers/`, and `middleware/` folders
so logic stays separated as the app grows. Added a `/api/health` route
just to confirm the server and DB connection both work before building
real features on top. Verified everything runs with `npm run dev`.

