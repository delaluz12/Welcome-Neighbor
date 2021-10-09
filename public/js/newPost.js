const newPostFormHandler = async (event) => {
    event.preventDefault();

    // const formEl = document.getElementById('newPost');
    // const user_id = parseInt(formEl.getAttribute('data-user_id'));

    const e = document.getElementById('visibility');
    const visibility = e.options[e.selectedIndex].value;


    const title = document.getElementById('post_title').value.trim();
    const content = document.getElementById('post_content').value.trim();

    
    // console.log(typeof title);
    // console.log(title);
    // console.log(user_id);
    // console.log(typeof user_id);

    // if (title && content && visibility) {
    //     const response = await fetch('/api/post/', {
    //         method: 'POST',
    //         body: JSON.stringify({  title, content, visibility }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     console.log(response);

    //     if (response.ok) {
    //         document.location.replace('/dashboard');
    //     } else {
    //         alert('Failed to add post.');
    //     }
    // }


};

document.querySelector('.newpost-form').addEventListener('submit', newPostFormHandler);