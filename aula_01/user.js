fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        //console.log(`Quantidade de itens: ${json.length}`)

        /*json.forEach(item => {
            console.log(`${item.id} - ${item.name.toUpperCase()}, ${item.username.toLowerCase()} `)
            
        })*/

        json.
        filter(item => item.id % 2 === 0)
        .forEach(item => console.log(`${item.id} - ${item.name.toUpperCase()}, ${item.username.toLowerCase()} `));
    })
