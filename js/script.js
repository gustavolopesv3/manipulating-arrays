addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();

  doSome();
  doEvery();
  doSort();
  doSortObj();
  doSortObjHighestToLowest();
});

//trazer todos os names e email usando map
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}
//filtrando todos o maiores de 60 anos usando filter
function doFilter() {
  const olderThan60 = people.results.filter((person) => {
    return person.dob.age > 60;
  });
  console.log('maiores de 60', olderThan60);
}

//adicionar nova propriedade no objeto com forEach
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}

//somar as idades com reduce
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(`soma das idades é ${totalAges}`);
}

//pegar o primeiro usuario de Minas Gerais usando find
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

//buscar todos os usuarios de Amazonas (so returna true ou false)
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  console.log(found);
}

//verificar se todos os usuario são de naturalidade BR

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);
}

//ordenação de string com sort (nao confunciona com numeros)
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return person.name.first; //vai me trazer uma lista de str
    })
    .filter((person) => person.startsWith('A')) //filtrando todos que começa com A
    .sort(); //ordenando as string
  console.log('lista de nomes ordenado', mappedNames);
}

//ordenação de objetos com sort, funciona tanto com numeros ou com strings
function doSortObj() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A')) //filtrando todos que começa com A
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    }); //ordenando
  console.log('lista de obj ordenados', mappedNames);
}

//ordenando os nomes do menor para o maior nome
function doSortObjHighestToLowest() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A')) //filtrando todos que começa com A
    .sort((a, b) => {
      return a.name.length - b.name.length;
    }); //ordenando
  console.log('lista de obj ordenados do menor para o maior', mappedNames);
}
