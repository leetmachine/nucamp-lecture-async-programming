/*Group 1: */
function getStuff() {
  console.log('1a - called getStuff')
  return new Promise((resolve, reject) => {
    // imagine something that takes long.
    setTimeout(() => resolve('my stuff'), 1000);
  });
}

function doExpensiveOperation(s) {
  console.log('1b - called doExpensiveOperation')
  return new Promise((resolve, reject) => {
    // imagine something that takes long.
    setTimeout(() => resolve(s.toUpperCase(), 2000));
  });
}

/*Group 2:*/
function getItem() {
  console.log('2a - called getItem')
  return new Promise((resolve, reject) => {
    // imagine something that takes long.
    setTimeout(() => resolve('Item'), 1000);
  });
}


function myApp() {

  /*Group 1 - get some stuff and do expensive work on it.*/
  getStuff().then(myStuff => {
    console.log('1a - myStuff resolved, ', myStuff)
    doExpensiveOperation(myStuff).then(result => {
      console.log('1b - doExpensiveOperation resolved, ', result)
    })
  });

  /*Group 2 - simply get something. */
  getItem().then(item => console.log('2a - getItem resolved, ', item));

}

myApp()