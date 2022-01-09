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
            headers: { 'Content-Type': 'application/json' },
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('squadTable').innerHTML="";
                document.getElementById('id').value="";
    
                if(data.msg){
                    alert(data.msg);
                }else{
                fetch('http://localhost:8080/admin/squads')
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