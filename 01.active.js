function solve() {
  const inputs = ['type', 'intensity', 'calories', 'duration', 'date'].map(id => document.getElementById(id));
  const addButton = document.getElementById('add-activity');
  const preview = document.getElementById('preview-activity');
  const table = document.getElementById('activities-table');

  addButton.addEventListener('click', function (event) {
    event.preventDefault();

    const values = inputs.map(input => input.value);

    
    if (values.some(value => value === '')) return;

    const [type, intensity, calories, duration, date] = values;
    const liElement = createElement('li', preview);
    const article = createElement('article', liElement);

    createElement('p', article, `Activity: ${type}`);
    createElement('p', article, `Intensity: ${intensity}`);
    createElement('p', article, `Duration: ${duration}`);
    createElement('p', article, `Date: ${date}`);
    createElement('p', article, `Calories: ${calories}`); 

    const buttonsDiv = createElement('div', liElement, undefined, 'btn-container');
    const editButton = createElement('button', buttonsDiv, 'Edit', 'edit-btn');
    const nextButton = createElement('button', buttonsDiv, 'Next', 'next-btn'); 

    
    inputs.forEach(input => input.value = '');
    addButton.disabled = true;

  
    editButton.addEventListener('click', function () {
      inputs.forEach((input, index) => input.value = values[index]);
      preview.removeChild(liElement);
      addButton.disabled = false;
    });

   
    nextButton.addEventListener('click', function () {
      const row = createElement('tr', table); 

      createElement('td', row, type, 'type-cell');
      createElement('td', row, duration, 'duration-cell');
      createElement('td', row, calories, 'calories-cell');
      createElement('td', row, date, 'date-cell');
      createElement('td', row, intensity, 'intensity-cell');

      const buttonCell = createElement('td', row, undefined, 'btn-cell'); 
      const deleteBtn = createElement('button', buttonCell, 'Delete', 'delete-button');

      preview.removeChild(liElement);
      addButton.disabled = false;

      

      deleteBtn.addEventListener('click', function () {
        table.removeChild(row);
      });
    });
  });

  function createElement(tag, parent, text, className) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;
    }
    if (className) {
      element.className = className;
    }

    parent.appendChild(element);
    return element;
  }
}