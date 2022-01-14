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

    document.getElementById('soldierDeleteButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('soldierTable').innerHTML='';
        document.getElementById('id').value='';

        fetch('http://localhost:8080/admin/soldiers/' +id, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then( res => res.json() )
            .then( el => {
                if(el.msg){
                    alert(el.msg)
                }else{
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
            }});
    });

}