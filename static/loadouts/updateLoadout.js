function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8080/admin/loadouts', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
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


    document.getElementById('loadoutUpdateButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        const data = {
            type: document.getElementById('type').value,
            rangedWeapon: document.getElementById('rangedWeapon').value,
            meleeWeapon: document.getElementById('meleeWeapon').value,
            armourType: document.getElementById('armourType').value,
            hasGrenades: document.getElementById('hasGrenades').value
        };

        document.getElementById('loadoutTable').innerHTML = '';
        document.getElementById('id').value = '';
        document.getElementById('type').value = '';
        document.getElementById('rangedWeapon').value = '';
        document.getElementById('meleeWeapon').value = '';
        document.getElementById('armourType').value = '';
        document.getElementById('hasGrenades').value = '';

        fetch('http://localhost:8080/admin/loadouts/' + id, {
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
                fetch('http://localhost:8080/admin/loadouts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
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
            }});
    });
}