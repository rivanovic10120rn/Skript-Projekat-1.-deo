function init() {

    fetch('http://localhost:8080/admin/soldiers')
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

    document.getElementById('soldierButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('soldierTable').innerHTML='';
        document.getElementById('id').value ='';

        fetch('http://localhost:8080/admin/soldiers/' + id,)
            .then( res => res.json() )
            .then( el => {
                const lst = document.getElementById('soldierTable');

                if(el.msg){
                    alert(el.msg)
                }else{
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.tag}</td> <td>${el.role}</td> <td>${el.SquadID}</td> <td>${el.LoadoutID}</td> <td>${el.password}</td> <td>${el.status}</td></tr>`;
                }});
    });

    document.getElementById('soldierSquadButton').addEventListener('click', e => {
        e.preventDefault();

        const url = document.getElementById('SquadID').value;

        document.getElementById('soldierTable').innerHTML='';
        document.getElementById('SquadID').value ='';

        fetch('http://localhost:8080/admin/soldiers/squad/' + url,)
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('soldierTable');

                if(data.msg){
                    alert(data.msg)
                }else{
                data.forEach( el => {
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.tag}</td> <td>${el.role}</td> <td>${el.SquadID}</td> <td>${el.LoadoutID}</td> <td>${el.password}</td> <td>${el.status}</td></tr>`;
            })}});
    });

    document.getElementById('soldierLoadoutButton').addEventListener('click', e => {
        e.preventDefault();

        const LoadoutID = document.getElementById('LoadoutID').value;

        document.getElementById('soldierTable').innerHTML='';
        document.getElementById('LoadoutID').value ='';

        fetch('http://localhost:8080/admin/soldiers/loadout/' + LoadoutID,)
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('soldierTable');

                if(data.msg){
                    alert(data.msg)
                }else{
                data.forEach( el => {
                    lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.name}</td> <td>${el.tag}</td> <td>${el.role}</td> <td>${el.SquadID}</td> <td>${el.LoadoutID}</td> <td>${el.password}</td> <td>${el.status}</td></tr>`;
            })}});
    });

}