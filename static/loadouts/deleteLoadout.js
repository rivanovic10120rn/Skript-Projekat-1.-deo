function init() {

    fetch('http://localhost:8080/admin/loadouts')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('loadoutTable');

            if(data.msg){
                alert(data.msg);
            }else{
            data.forEach( el => {
                lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.type}</td> <td>${el.rangedWeapon}</td> <td>${el.meleeWeapon}</td> <td>${el.armourType}</td> <td>${el.hasGrenades}</td></tr>`;
        });
    }});


    document.getElementById('loadoutDeleteButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('id').value = '';

        fetch('http://localhost:8080/admin/loadouts/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then( res => res.json() )
            .then( el => {
                document.getElementById('loadoutTable').innerHTML='';
                
                if(el.msg){
                    alert(el.msg)
                }else{
                fetch('http://localhost:8080/admin/loadouts')
                    .then( res => res.json() )
                    .then( data => {
                        const lst = document.getElementById('loadoutTable');
                        document.getElementById('id').value = '';
            
                        if(data.msg){
                            alert(data.msg);
                        }else{
                        data.forEach( el => {
                            lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.type}</td> <td>${el.rangedWeapon}</td> <td>${el.meleeWeapon}</td> <td>${el.armourType}</td> <td>${el.hasGrenades}</td></tr>`;
                    });
                }});
            }});
    });
}