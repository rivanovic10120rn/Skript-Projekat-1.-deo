function init() {
    
    // fetch('http://localhost:8080/admin/squads/')
    //     .then( res => res.json() )
    //     .then( data => {
    //         const lst = document.getElementById('squadList');

    //         data.forEach( el => {
    //             lst.innerHTML += `<li>ID: ${el.id}</li> <ul><li>Name: ${el.name}</li> <li>Type: ${el.type}</li> <li>Status: ${el.status}</li></ul>`;
    //         });
    //     });


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


    document.getElementById('loadoutAddButton').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            type: document.getElementById('type').value,
            rangedWeapon: document.getElementById('rangedWeapon').value,
            meleeWeapon: document.getElementById('meleeWeapon').value,
            armourType: document.getElementById('armourType').value,
            hasGrenades: document.getElementById('hasGrenades').value
        };

        document.getElementById('type').value = '';
        document.getElementById('rangedWeapon').value = '';
        document.getElementById('meleeWeapon').value = '';
        document.getElementById('armourType').value = '';
        document.getElementById('hasGrenades').value = '';

        fetch('http://localhost:8080/admin/loadouts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if(el.msg){
                    alert(el.msg)
                }else{
                document.getElementById('loadoutTable').innerHTML += `<tr><td>${el.id}</td> <td>${el.type}</td> <td>${el.rangedWeapon}</td> <td>${el.meleeWeapon}</td> <td>${el.armourType}</td> <td>${el.hasGrenades}</td></tr>`;
            }});
    });
}