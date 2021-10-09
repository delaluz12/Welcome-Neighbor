async function addInd(event) {
    event.preventDefault();
    const first_name = document.querySelector('#newIndF').value;
    const last_name = document.querySelector('#newIndL').value;
   
    //fetch request to add a new person
    const response = await fetch(`/api/person/`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        unit_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if person is added, the 'main dashboard' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add person');
    }
  }
  
  document.querySelector('.formContainer').addEventListener('submit', addInd);
    