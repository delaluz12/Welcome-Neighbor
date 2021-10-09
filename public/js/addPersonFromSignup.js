const newPersonFromSignupFormHandler =  (event) => {
    event.preventDefault();
    const formEl = document.getElementById('data');
    console.log(formEl);


    const user_id =formEl.getAttribute('data-user_id');
    const unit_id = formEl.getAttribute('data-unit_id');

    const first = document.getElementById('first_name').value.trim();
    const last = document.getElementById('last_name').value.trim();

    const e = document.getElementById('person_type');
    const type = e.options[e.selectedIndex].value;
    const phone = document.getElementById('phone').value.trim();
    const cell = document.getElementById('cell').value.trim();
    const birthday = document.getElementById('birthday').value.trim();


    console.log(unit_id);
    console.log(user_id);
    // if (email && password && role_id && name && city && state && zip && unit_number && street) {
    //     const response = await fetch('/api/post/', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, password, role_id, name, city, state, zip, unit_number, street }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     console.log(response);

    //     if (response.ok) {
    //         document.location.replace('/');
    //     } else {
    //         alert('Failed to sign up.');
    //     }
    // }


};

document.querySelector('.person-form').addEventListener('submit', newPersonFromSignupFormHandler);