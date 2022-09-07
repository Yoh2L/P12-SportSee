![Getting Started](./src/assets/logo.png)

# Track your performance !

This application allow you to track your workout performance.

## Prerequisites

- NodeJS (version 12.18)
- Yarn
- Sass
- Recharts
- Jsdoc
- Axios

If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

## Launching the project

- Fork the repository
- Clone it on your computer.
- The yarn command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.
  (Path `\P12-SportSee-API-Back`)
- `npm start` on the front-end (Path `p12_sportsee`). Default port : 3001

# Back-end endpoints :

- `http://localhost:3000/user/${userId}` retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

# Charts

This project use recharts to render charts. There is currently 5 mains charts :

- Daily activity chart, type : `BarChart` (fetch from `/user/:id/activity`). Render informations of weight and calories.
- Average duration chart, type : `LineChart` (fetch from `/user/:id/average-sessions`). Render informations about average sessions length.
- Radar chart, type : `RadarChart` (fetch from `/user/:id/performance`). Render informations about cardio, energy, endurance, strength, speed and intensity.
- Score chart, type `RadialBarChart` (fetch from `/user/:id`). Render the current completion of the goal.
- Macronutrients cards, no chart used here. Show the calories burned and macronutrients consumed for the current day.
