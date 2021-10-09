const newPersonFromSignupFormHandler = (event) => {
    event.preventDefault();
    const formEl = document.getElementById('data');
    // console.log(formEl);


    const user_id = formEl.getAttribute('data-user_id');
    const unit_id = formEl.getAttribute('data-unit_id');

    const first = document.getElementById('first_name').value.trim();
    const last = document.getElementById('last_name').value.trim();
    // console.log(first);
    // console.log(last);


    const e = document.getElementById('person_type');
    const type = e.options[e.selectedIndex].value;
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


    // console.log(unit_id);
    // console.log(user_id);

    if (first && last && type && phone && cell && birthday && user_id && unit_id) {
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({ first, last, type, phone, cell, birthday, user_id, unit_id }),
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