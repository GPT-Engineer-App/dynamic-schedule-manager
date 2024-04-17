# dynamic-schedule-manager

Description:
A dynamic drag and drop scheduling calendar to plan, track and manage various supports and services for participants of the NDIS so that the support coordinator and ensure they are in line with the plan budget and goals by graphical financial diagrams via the dashboard.
Technologies:
Frontend: HTML, CSS, JavaScript (frameworks like React or Vue.js can be helpful)
Backend: A server-side language like Python or Node.js to handle data storage and retrieval
Database: To store information about participants, services, schedules, budgets, etc.
Drag-and-drop library: Such as FullCalendar or DHTMLX Scheduler
Key functionalities:
Calendar view:
•	Display participant schedules with drag-and-drop functionality to adjust appointments.
•	Color-code appointments based on service type, participant, or other criteria.
•	Allow adding/editing/deleting appointments.
•	Support and service management:
•	Create and manage a database of available supports and services with associated costs.
•	Link services to appointments and track their utilization.
Budget tracking:
•	Set individual budgets for participants.
•	Calculate and display budget utilization based on scheduled services.
•	Provide visual warnings when approaching or exceeding budget limits.
Goal tracking:
•	Define goals for each participant.
•	Link services and appointments to specific goals.
•	Track progress towards goals and visualize it on the dashboard.
Financial diagrams:
•	Generate charts and graphs on the dashboard to visualize budget utilization, service costs, and goal progress.
Implementation steps:
Design the data model: Define the structure of your data, including participants, services, appointments, budgets, goals, etc.
Develop the backend: Implement server-side logic for data storage, retrieval, and manipulation.
Build the frontend: Create the user interface with the calendar view, service management, budget tracking, and goal tracking features.
Integrate drag-and-drop functionality: Use a library to enable drag-and-drop scheduling of appointments.
Implement financial diagrams: Use charting libraries to visualize financial data on the dashboard.
Connect frontend and backend: Ensure seamless communication between the user interface and the server-side logic.
Additional considerations:
Security: Implement user authentication and authorization to protect sensitive data.
Accessibility: Ensure the application is accessible to users with disabilities.
Responsiveness: Design the application to work well on different devices (desktop, tablet, mobile).

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/dynamic-schedule-manager.git
cd dynamic-schedule-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
