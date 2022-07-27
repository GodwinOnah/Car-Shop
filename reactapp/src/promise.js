const urls=[

'https://swapi.co/api/people/1',
'https://swapi.co/api/people/1',
'https://swapi.co/api/people/1'
]

Promise.all(urls.map(url=>{

return fetch(url).then(people=>people.json())

})

	).then(array=>{


console.log('1',array[0])
console.log('2',array[1])
console.log('3',array[2])
console.log('4',array[3])

	})




	fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
	.then(users=>console.log(users))