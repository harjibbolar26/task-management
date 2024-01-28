This Task Management Dashboard was built with [Next.js](https://nextjs.org/) and [Tailwind Css](https://tailwindcss.com/)

## Getting Started

Before runing this task, the json data in public/data.json must first be hosted on a json live server. 

Follow the instruction below to host it.

First in the terminal of the project, run:
```bash

npm install -g json-server

```

Then, the json data is hosted on an endpoint with port 3002, so run the next command

``` bash

json-server --watch public/data.json --port 3002

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app was built to manage the task allocation system in [TeachMateAI](https://teachmateai.com/).

TeachMateAI is an AI-powered digital assistant, designed by teachers and tech experts to help take control of users' valuable time.

The home page of this app gives details of TeachMateAI and what it is all about.

Then the Task page consists of the list of tasks available - their title, description of the task, date which task will be due and current status.

The app allows for users to add new tasks to the current list and update the current tasks. 

In adding new tasks, the due date is automatically set by the system to 5 days after the task was added and the status is automatically set to pending. 

So, only the task title and description can be manually filled by a user. This then updates the list of the current tasks in the task page.

Tasks already available can also be updated and also gives a 5 days due date from the date updated which makes status pending.

There is also a card that displays the number of completed and pending status each, which uploads themselves as tasks are added to the list.

A search box is included in the task page, just above the list of tasks and it filters the list of tasks by status (either completed or pending).

Other dependencies used for the project are:

[React icons](https://react-icons.github.io/react-icons/) - used to add all icons needed to the project

[Tailwind CSS](https://tailwindcss.com/) is the styling library used.
