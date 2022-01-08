function init() {
    
    fetch('http://localhost:8080/admin/squads/')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('squadList');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}</li> <ul><li>Name: ${el.name}</li> <li>Type: ${el.type}</li> <li>Status: ${el.status}</li></ul>`;
            });
        });


    fetch('http://localhost:8080/admin/squads/')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('squadTable');

            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.type}</td> <td>${el.status}</td></tr>`;
            });
        });

    fetch('http://localhost:8080/admin/missionthreads')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('msgLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}\n Body: ${el.body}\n User: ${el.user.name}</li>`;
            });
        });
    
    document.getElementById('usrBtn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
        };

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

        fetch('http://192.168.0.143:8000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('usrLst').innerHTML += `<li>ID: ${data.id}, Name: ${data.name}, E-mail: ${data.email}</li>`;
            });
    });

    document.getElementById('msgBtn').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            body: document.getElementById('body').value,
            userId: document.getElementById('userId').value
        };

        document.getElementById('body').value = '';
        document.getElementById('userId').value = '';

        fetch('http://192.168.0.143:8000/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('msgLst').innerHTML += `<li>ID: ${data.id}, Body: ${data.body}</li>`;
            });
    });
}