const newPersonFromSignupFormHandler = async (event) => {
    event.preventDefault();
    const formEl = document.getElementById('data');
    // console.log(formEl);


    const user_id = parseInt(formEl.getAttribute('data-user_id'));
    const unit_id = parseInt(formEl.getAttribute('data-unit_id'));

    const first_name = document.getElementById('first_name').value.trim();
    const last_name = document.getElementById('last_name').value.trim();
    // console.log(first);
    // console.log(last);


    const e = document.getElementById('person_type');
    const person_type = e.options[e.selectedIndex].value;
    const phoneEl = document.getElementById('phone').value.trim();
    const phone=phoneEl.replace(/[^0-9]/g,'');
    const cellEl = document.getElementById('cell').value.trim();
    const cell=cellEl.replace(/[^0-9]/g,'');
    const birthday = document.getElementById('birthday').value.trim();
    // console.log(type);
    // console.log(phone);
    // console.log(typeof phone);
    // console.log(cell);
    // console.log(typeof birthday);


    // console.log(typeof unit_id);
    // console.log(typeof user_id);

    if (first_name && last_name && person_type && phone && cell && birthday && user_id && unit_id) {
        const response = await fetch('/api/person/', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, person_type, phone, cell, birthday, user_id, unit_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up.');
        }
    }


};

document.querySelector('.person-form').addEventListener('submit', newPersonFromSignupFormHandler);