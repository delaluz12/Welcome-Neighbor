async function addInd(event) {
    event.preventDefault();

    const first_name = document.querySelector('#newIndF').value;
    const last_name = document.querySelector('#newIndL').value;
    const type = document.querySelector('#person_type').value;
    const phone = document.querySelector('#phone').value;
    const cell = document.querySelector('#cell').value;
    const birth_date = document.querySelector('#birthday').value;
    

    const response = await fetch(`/api/person`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        type,
        phone,
        cell,
        birth_date,
      
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      alert('New individual successfully added')
      document.location.replace('/');
    } else {
      alert('Failed to add new individual');
    }
  }
  
  document.querySelector('.addIndForm').addEventListener('submit', addInd);
    