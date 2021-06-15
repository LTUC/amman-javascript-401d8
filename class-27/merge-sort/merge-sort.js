'use strict';

const mergeSort = module.exports = function (items, compare){
  
  compare = compare ? compare : (a, b) => a < b;
  
  if (items.length < 2) return items;

  let middle = Math.floor(items.length / 2);

  let left = items.slice(0, middle);
  let right = items.slice(middle);
  
  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

function merge(left, right, compare){
  
  var result  = [];

  while (left.length || right.length){
    if (!left.length) {
      result.push(right.shift())
      continue;
    }

    if (!right.length) {
      result.push(left.shift())
      continue;
    }

    if (compare(left[0], right[0])){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}