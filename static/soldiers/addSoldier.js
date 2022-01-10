function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8080/admin/soldiers', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('soldierTable');

            if(data.msg){
                alert(data.msg);
            }else{
            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.tag}</td> <td>${el.role}</td> <td>${el.SquadID}</td> <td>${el.LoadoutID}</td> <td>${el.password}</td> <td>${el.status}</td></tr>`;
        });
    }});

    document.getElementById('soldierAddButton').addEventListener('click', e => {
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

        fetch('http://localhost:8080/admin/soldiers', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if(el.msg){
                    alert(el.msg)
                }else{
                document.getElementById('soldierTable').innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.tag}</td> <td>${el.role}</td> <td>${el.SquadID}</td> <td>${el.LoadoutID}</td> <td>${el.password}</td> <td>${el.status}</td></tr>`;
            }});
    });

}