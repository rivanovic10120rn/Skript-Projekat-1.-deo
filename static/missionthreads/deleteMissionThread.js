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

    document.getElementById('missionThreadDeleteButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        
        document.getElementById('missionThreadTable').innerHTML='';
        document.getElementById('id').value='';

        fetch('http://localhost:8080/admin/missionthreads/' +id, {
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
            }});
    });

}