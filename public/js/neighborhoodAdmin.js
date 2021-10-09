const newNeighborhoodAdminFormHandler = async (event) => {
    event.preventDefault();
    //set role_id before proceeding 
    const pathname = document.location.pathname;

    if (pathname === '/admin') {
        const role_id = 1;

        const email = document.getElementById('admin_email').value.trim();
        const password = document.getElementById('admin_password').value.trim();

        const name = document.getElementById('neighborhood_name').value.trim();
        const city = document.getElementById('neighborhood_city').value.trim();
        const state = document.getElementById('neighborhood_state').value.trim();
        const zip = document.getElementById('neighborhood_zip').value.trim();


        const unit_number = document.getElementById('unit_number').value.trim();
        const street = document.getElementById('unit_name').value.trim();


        if (email && password && role_id && name && city && state && zip && unit_number && street) {
            const response = await fetch('/api/admin/', {
                method: 'POST',
                body: JSON.stringify({ email, password, role_id, name, city, state, zip, unit_number, street }),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);

            if (response.ok) {
                document.location.replace('/newUserProfile');
            } else {
                alert('Failed to sign up.');
            }
        }
    } else {
        document.location.replace('/');
    }

};

document.querySelector('.admin-form').addEventListener('submit', newNeighborhoodAdminFormHandler);