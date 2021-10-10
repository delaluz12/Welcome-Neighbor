async function addInd(event) {
    event.preventDefault();

    const first_name = document.querySelector('#newIndF').value;
    const last_name = document.querySelector('#newIndL').value;
    const type = document.querySelector('#type').value;
    const phone = document.querySelector('#phone').value;
    const cell = document.querySelector('#cell').value;
    const birth_date = document.querySelector('#bd').value;
    const unit_id = document.querySelector('#unit').value;

    const response = await fetch(`/api/person/`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        type,
        phone,
        cell,
        birth_date,
        unit_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add new individual');
    }
  }
  
  document.querySelector('.addIndForm').addEventListener('submit', addInd);
    