function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = 0;

// The following is the closure function
  return function() {
// This inner function accesses and assigns the value of
// the variable id, which was defined in the parent function
    let dieNum = list[index];
    index += 1;
    return dieNum;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5