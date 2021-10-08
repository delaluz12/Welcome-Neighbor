async function addInd(event) {
    event.preventDefault();
    const firstName = document.querySelector('#newIndF').value;
    const lastName = document.querySelector('#newIndL').value;
   
    // Send fetch request to add a new dish
    const response = await fetch(`/api/dish`, {
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
    