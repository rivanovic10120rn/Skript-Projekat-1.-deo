function init() {

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            tag: document.getElementById('tag').value,
            role: document.getElementById('role').value,
            SquadID: document.getElementById('SquadID').value,
            LoadoutID: document.getElementById('LoadoutID').value,
            password: document.getElementById('password').value,
            status: document.getElementById('status').value
        };

        document.getElementById('name').value='';
        document.getElementById('tag').value='';
        document.getElementById('role').value='';
        document.getElementById('SquadID').value='';
        document.getElementById('LoadoutID').value='';
        document.getElementById('password').value='';
        document.getElementById('status').value='';

        // fetch('http://localhost:8080/admin/soldiers', {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify(data)
        // });

        fetch('http://127.0.0.1:9000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'index.html';
            });
    });
}