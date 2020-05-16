/*Group 1: */
function getStuff() {
  console.log('1a - called getStuff')
  
  let myStuff;
  // imagine something that takes long.(1B)
  for(let i = 0; i < 1000000000; i++){
    let j = 0 + i;
  }

  myStuff = 'my stuff';

  return myStuff;
}

function doExpensiveOperation(s) {
  console.log('1b - called doExpensiveOperation')

    // imagine something that takes even long. (2B)
    for(let i = 0; i < 2000000000; i++){
      let j = 0 + i;
    }

  return s.toUpperCase();
}

/*Group 2:*/
function getItem() {
  console.log('2a - called getItem')

  // imagine something that takes long. (1B)
  for(let i = 0; i < 1000000000; i++){
    let j = 0 + i;
  }

  return 'Item';
}


function myApp() {

  /*Group 1*/
  const myStuff = getStuff();
  console.log('1a - getStuff finished', myStuff );

  const result = doExpensiveOperation(myStuff);
  console.log('1b - doExpensiveOperation finished, ', result);

  /*Group 2*/
  const item = getItem();
  console.log('2a - getItem finished, ', item);

}


//start the app.
myApp();