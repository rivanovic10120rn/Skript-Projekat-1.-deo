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

    document.getElementById('missionThreadButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('missionThreadTable').innerHTML='';
        document.getElementById('id').value ='';

        fetch('http://localhost:8080/admin/missionthreads/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( res => res.json() )
            .then( el => {
                const lst = document.getElementById('missionThreadTable');

                if(el.msg){
                    alert(el.msg)
                }else{
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.message}</td> <td>${el.MissionID}</td> <td>${el.SoldierID}</td> <td>${el.recieved}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
                }});
    });

    document.getElementById('missionThreadMissionButton').addEventListener('click', e => {
        e.preventDefault();

        const url = document.getElementById('MissionID').value;

        document.getElementById('missionThreadTable').innerHTML='';
        document.getElementById('MissionID').value ='';

        fetch('http://localhost:8080/admin/missionthreads/mission/' + url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('missionThreadTable');

                if(data.msg){
                    alert(data.msg)
                }else{
                data.forEach( el => {
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.message}</td> <td>${el.MissionID}</td> <td>${el.SoldierID}</td> <td>${el.recieved}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
                })}});
    });

    document.getElementById('missionThreadSoldierButton').addEventListener('click', e => {
        e.preventDefault();

        const SoldierID = document.getElementById('SoldierID').value;

        document.getElementById('missionThreadTable').innerHTML='';
        document.getElementById('SoldierID').value ='';

        fetch('http://localhost:8080/admin/missionthreads/soldier/' + SoldierID, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('missionThreadTable');

                if(data.msg){
                    alert(data.msg)
                }else{
                data.forEach( el => {
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.message}</td> <td>${el.MissionID}</td> <td>${el.SoldierID}</td> <td>${el.recieved}</td> <td>${el.createdAt}</td> <td>${el.updatedAt}</td></tr>`;
                })}});
    });

}