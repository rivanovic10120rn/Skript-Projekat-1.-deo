function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8080/admin/squads', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('squadTable');

            if(data.msg){
                alert(data.msg);
            }else{
            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.type}</td> <td>${el.status}</td></tr>`;
            });
    }});


    document.getElementById('squadAddButton').addEventListener('click', e => {
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
                document.getElementById('squadTable').innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.type}</td> <td>${el.status}</td></tr>`;
            }});
    });
}