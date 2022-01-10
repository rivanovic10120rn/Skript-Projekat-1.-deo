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

    document.getElementById('missionButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('missionTable').innerHTML='';
        document.getElementById('id').value ='';

        fetch('http://localhost:8080/admin/missions/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( res => res.json() )
            .then( el => {
                const lst = document.getElementById('missionTable');

                if(el.msg){
                    alert(el.msg)
                }else{
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.description}</td> <td>${el.location}</td> <td>${el.SquadID}</td> <td>${el.missionStatus}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
                }});
    });

    document.getElementById('missionSquadButton').addEventListener('click', e => {
        e.preventDefault();

        const promise = document.getElementById('SquadID').value;

        document.getElementById('missionTable').innerHTML='';
        document.getElementById('SquadID').value ='';

        fetch('http://localhost:8080/admin/missions/squad/' + promise, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('missionTable');

                if(data.msg){
                    alert(data.msg)
                }else{
                data.forEach( el => {
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.description}</td> <td>${el.location}</td> <td>${el.SquadID}</td> <td>${el.missionStatus}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
                })}});
    });


}