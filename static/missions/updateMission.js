function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8080/admin/missions', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('missionTable');

            if(data.msg){
                alert(data.msg);
            }else{
            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.description}</td> <td>${el.location}</td> <td>${el.SquadID}</td> <td>${el.missionStatus}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
        });
    }});

    document.getElementById('missionUpdateButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        const data = {
            description: document.getElementById('description').value,
            location: document.getElementById('location').value,
            SquadID: document.getElementById('SquadID').value,
            missionStatus: document.getElementById('missionStatus').value,
        };

        document.getElementById('missionTable').innerHTML='';
        document.getElementById('id').value='';
        document.getElementById('description').value='';
        document.getElementById('location').value='';
        document.getElementById('SquadID').value='';
        document.getElementById('missionStatus').value='';

        fetch('http://localhost:8080/admin/missions/' + id, {
            method: 'PUT',
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
                    fetch('http://localhost:8080/admin/missions')
                    .then( res => res.json() )
                    .then( data => {
                        const lst = document.getElementById('missionTable');
            
                        if(data.msg){
                            alert(data.msg);
                        }else{
                        data.forEach( el => {
                            lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.description}</td> <td>${el.location}</td> <td>${el.SquadID}</td> <td>${el.missionStatus}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
                    });
                }});
            }});
    });

}