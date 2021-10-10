const updatePersonals = async (event) => {
    event.preventDefault();
const email = document.querySelector('#email').value;
const password = document.querySelector('#psw').value;

    if (email && password) {
        const response = await fetch (`/api/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                email,
                password
             }),
            headers: { 
                'Content-Type': 'application/json' 
            },
        });

        if (response.ok) {
            alert('Your information was successfully updated')
            document.location.replace('/');
        } else {
            alert('Failed to update personal information.');
        }
    }
};

document.querySelector('.updateInfoForm').addEventListener('submit', updatePersonals);

