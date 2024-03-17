// function flickSwitch(arr){
//   let isSwitch = true
//   let boolArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'flick') {
//       isSwitch = !isSwitch
//       boolArr.push(isSwitch)
//     } else {
//       boolArr.push(isSwitch)
//     }
//   }
//   return boolArr
// }

function flickSwitch(arr){
  let isSwitch = true;
  return arr.map(e => {
    return e === 'flick' ? isSwitch = !isSwitch : isSwitch
  })
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']))
// console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']))
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))