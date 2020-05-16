/*Group 1: */
function getStuff() {
  console.log('1a - called getStuff')
  return new Promise((resolve, reject) => {
    // imagine something that takes long.
    setTimeout(() => resolve('my stuff'), 2000);
  });
}

function doExpensiveOperation(s) {
  console.log('1b - called doExpensiveOperation')
  return new Promise((resolve, reject) => {
    // imagine something that takes long.
    setTimeout(() => resolve(s.toUpperCase(), 1000));
  });
}

/*Group 2:*/
function getItem() {
  console.log('2a - called getItem')
  return new Promise((resolve, reject) => {
    // imagine something that takes long.
    setTimeout(() => resolve('Item'), 500);
  });
}

async function myApp() {

  /*Group 1 - get some stuff and do expensive work on it.*/
  const myStuff = await getStuff();
  console.log('1a - myStuff resolved, ', myStuff)

  const result = await doExpensiveOperation(myStuff);
  console.log('1b - doExpensiveOperation resolved, ', result)

  
  /*Group 2 - simply get something. */
  const item = await getItem();
  console.log('2a - getItem resolved, ', item)

}

myApp()