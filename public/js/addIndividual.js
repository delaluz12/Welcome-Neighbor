const newPersonFromDashboard = async (event) => {
  event.preventDefault();
  const first_name = document.querySelector('#newIndF').value;
  const last_name = document.querySelector('#newIndL').value;
  const e = document.getElementById('person_type');
  const person_type = e.options[e.selectedIndex].value;
  const phone = document.querySelector('#phone').value;
  const cell = document.querySelector('#cell').value;
  const birth_date = document.querySelector('#birthday').value;

  if (first_name) {
      const response = await fetch('/api/person/new', {
          method: 'POST',
          body: JSON.stringify({ first_name, last_name, person_type, phone, cell, birth_date }),
          headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);

      if (response.ok) {
          document.location.replace('/dashboard/household');
      } else {
          alert('Failed to add person.');
      }
  }
};

document.querySelector('#addIndForm').addEventListener('submit', newPersonFromDashboard);




  // const e = document.getElementById('person_type');
  // const person_type = e.options[e.selectedIndex].value;
  // const phoneEl = document.getElementById('phone').value.trim();
  // const phone=phoneEl.replace(/[^0-9]/g,'');
  // const cellEl = document.getElementById('cell').value.trim();
  // const cell=cellEl.replace(/[^0-9]/g,'');
  // const birthday = document.getElementById('birthday').value.trim();
  // // console.log(type);
  // // console.log(phone);
  // // console.log(typeof phone);
  // // console.log(cell);
  // // console.log(typeof birthday);


  // console.log(typeof unit_id);
  // console.log(typeof user_id);
    