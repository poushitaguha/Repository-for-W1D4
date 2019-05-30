// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }

  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });

}

function actionWhenFound(index) {
  console.log("Found Waldo" + " at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);