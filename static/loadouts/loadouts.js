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

    document.getElementById('loadoutButton').addEventListener('click', e => {
        e.preventDefault();

        const id = document.getElementById('id').value;

        document.getElementById('loadoutTable').innerHTML='';
        document.getElementById('id').value ='';

        fetch('http://localhost:8080/admin/loadouts/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( res => res.json() )
            .then( el => {
                const lst = document.getElementById('loadoutTable');

                if(el.msg){
                    alert(el.msg)
                }else{
                  lst.innerHTML += `<tr><td>${el.id}</td> <td>${el.type}</td> <td>${el.rangedWeapon}</td> <td>${el.meleeWeapon}</td> <td>${el.armourType}</td> <td>${el.hasGrenades}</td></tr>`;  
            }});
    });

}