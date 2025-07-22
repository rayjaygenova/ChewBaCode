# Task Manager

A web-based Task Manager built with HTML, Bootstrap, and JavaScript.  
It allows you to add, edit, delete, view, and search tasks, with support for task priority, due dates, and tab-based organization.

## Features

- **Add/Edit Tasks:** Use the modal form to add or edit tasks, including name, description, priority, due date, and tab (Accenture/Constellation).
- **Delete Tasks:** Delete tasks with confirmation using SweetAlert2.
- **Mark as Done:** Checkbox to mark tasks as completed.
- **Search:** Filter tasks by name or description in real time.
- **Tabs:** Organize tasks under Accenture or Constellation tabs.
- **Priority & Due Date:** Tasks can have High, Medium, or Low priority and an optional due date.
- **Persistent Storage:** All tasks are saved in browser `localStorage`.
- **Responsive UI:** Styled with Bootstrap and custom CSS, including background image.

## Project Structure

```
index.html         # Main UI and all logic/scripts
css/style.css      # Custom styles
images/bg.png      # Background image
```

## How It Works

### Task Data

- Tasks are stored in a JS object:  
  `tasks = { accenture: [...], constellation: [...] }`
- On page load, tasks are loaded from `localStorage` if available.

### Adding/Editing Tasks

- Click **Add Task** to open the modal.
- Fill in task details (name, description, priority, due date, tab).
- For editing, the modal is pre-filled with the selected task’s data.
- High-priority tasks with a due date of tomorrow trigger a warning.

### Deleting Tasks

- Click the **Delete** button.
- SweetAlert2 asks for confirmation before deleting.

### Marking Tasks as Done

- Use the checkbox next to each task to mark it as done/undone.

### Searching Tasks

- Type in the search box to filter tasks by name or description.

### Viewing Tasks

- Click **View** to see task details in a separate page (`view-task.html`).

### Tabs

- Switch between Accenture and Constellation tabs to view respective tasks.

### Scripts & Logic

- **Modal Handling:** Bootstrap modal is used for add/edit forms.
- **SweetAlert2:** Used for confirmation dialogs and error messages.
- **Task Rendering:** Tasks are sorted by priority and rendered in tables.
- **Event Delegation:** Handles edit, delete, and checkbox events for tasks.
- **Form Validation:** Ensures required fields are filled and validates high-priority due dates.
- **Persistent Storage:** All changes are saved to `localStorage`.

## Customization

- Add more tabs by updating the HTML and JS `tasks` object.
- Change styles in `css/style.css` or the `<style>` section of `index.html`.
- Extend logic by modifying the script section in `index.html`.

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [SweetAlert2](https://sweetalert2.github.io/)

## Usage

1. Open `index.html` in your browser.
2. Add, edit, delete, and search tasks as needed.
3. All changes are saved automatically.

---

**Note:**  
For full logic and script, see [index.html](index.html).