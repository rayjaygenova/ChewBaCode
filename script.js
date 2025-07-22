document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('taskSearch');
  

  searchInput.addEventListener('input', function () {
    const searchText = this.value.trim().toLowerCase();
    const tables = document.querySelectorAll('.task-table');

    tables.forEach(table => {
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
        const taskName = (row.querySelector('.task-name')?.innerText || '').trim().toLowerCase();
        const dueDate = (row.querySelector('.due-date')?.innerText || '').trim().toLowerCase();
        const priority = (row.querySelector('.priority')?.innerText || '').trim().toLowerCase();

        const matchesSearch = taskName.includes(searchText) ||
                              dueDate.includes(searchText) ||
                              priority.includes(searchText);

        row.style.display = matchesSearch ? '' : 'none';
      });
    });
  });
});

