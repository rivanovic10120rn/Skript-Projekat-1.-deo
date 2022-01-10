function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8080/admin/missionthreads', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('missionThreadTable');

            if(data.msg){
                alert(data.msg);
            }else{
            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.message}</td> <td>${el.MissionID}</td> <td>${el.SoldierID}</td> <td>${el.recieved}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
        });
    }});

    document.getElementById('missionThreadAddButton').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            message: document.getElementById('message').value,
            MissionID: document.getElementById('MissionID').value,
            SoldierID: document.getElementById('SoldierID').value,
            recieved: document.getElementById('recieved').value,
        };

        document.getElementById('message').value='';
        document.getElementById('MissionID').value='';
        document.getElementById('SoldierID').value='';
        document.getElementById('recieved').value='';

        fetch('http://localhost:8080/admin/missionthreads', {
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
                document.getElementById('missionThreadTable').innerHTML += `<tr><td>${el.id}</td> <td>${el.message}</td> <td>${el.MissionID}</td> <td>${el.SoldierID}</td> <td>${el.recieved}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
            }});
    });

}