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

    document.getElementById('squadDeleteButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('id').value = '';

        fetch('http://localhost:8080/admin/squads/' + id, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('squadTable').innerHTML="";
                document.getElementById('id').value="";
    
                if(data.msg){
                    alert(data.msg);
                }else{
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
            }});
    });

}