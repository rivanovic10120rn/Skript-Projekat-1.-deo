function init() {
    
    // fetch('http://localhost:8080/admin/squads/')
    //     .then( res => res.json() )
    //     .then( data => {
    //         const lst = document.getElementById('squadList');

    //         data.forEach( el => {
    //             lst.innerHTML += `<li>ID: ${el.id}</li> <ul><li>Name: ${el.name}</li> <li>Type: ${el.type}</li> <li>Status: ${el.status}</li></ul>`;
    //         });
    //     });


    fetch('http://localhost:8080/admin/squads')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('squadTable');

            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.type}</td> <td>${el.status}</td></tr>`;
            });
        });
    
    document.getElementById('squadsButton').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            type: document.getElementById('type').value,
            status: document.getElementById('status').value
        };

        document.getElementById('name').value = '';
        document.getElementById('type').value = '';
        document.getElementById('status').value = '';

        fetch('http://localhost:8080/admin/squads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('squadTable').innerHTML += `<tr><td>${data.id}</td> <td>${data.name}</td> <td>${data.type}</td> <td>${data.status}</td></tr>`;
            });
    });

}