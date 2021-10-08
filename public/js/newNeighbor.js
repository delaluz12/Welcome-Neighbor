const newNeighborFormHandler = async (event) => {
    event.preventDefault();
    //set role_id before proceeding 
    const pathname = document.location.pathname;

    if (pathname === '/neighbor') {
        const role_id = 2;


        const e = document.getElementById('avail_neighborhoods');
        const neighborhood_id = e.options[e.selectedIndex].value;

        const email = document.getElementById('neighbor_email').value.trim();
        const password = document.getElementById('neighbor_password').value.trim();

        const unit_number = document.getElementById('unit_number').value.trim();
        const street = document.getElementById('unit_name').value.trim();


        if (email && password && role_id && neighborhood_id && unit_number && street) {
            const response = await fetch('/api/users/', {
                method: 'POST',
                body: JSON.stringify({ email, password, unit_number, street, neighborhood_id, role_id }),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);

            if (response.ok) {
                document.location.replace('/person');
            } else {
                alert('Failed to sign up.');
            }
        }
    } else {
        document.location.replace('/');
    }

};

document.querySelector('.neighbor-form').addEventListener('submit', newNeighborFormHandler);