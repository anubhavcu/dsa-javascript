// function buildMaxHeap(array) {
//   const lastParentIndex = Math.floor((array.length - 1) / 2);
//   for (let i = lastParentIndex; i >= 0; i--) {
//     siftDown(i, array.length - 1, array);
//   }
//   return array;
// }

// function siftDown(currentIndex, endIndex, heap) {
//   let childOneIndex = currentIndex * 2 + 1;
//   while (childOneIndex <= endIndex) {
//     let childTwoIndex =
//       currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
//     let indexToSwap;
//     if (childTwoIndex !== -1 && heap[childTwoIndex] > heap[childOneIndex]) {
//       indexToSwap = childTwoIndex;
//     } else {
//       indexToSwap = childOneIndex;
//     }
//     if (heap[indexToSwap] < heap[currentIndex]) {
//       swap(currentIndex, indexToSwap, heap);
//       currentIndex = indexToSwap;
//       childOneIndex = currentIndex * 2 + 1;
//     } else {
//       return;
//     }
//   }
// }

// function swap(i, j, array) {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// let arr = [9, 15, 10, 7, 12, 11];
// console.log(buildMaxHeap(arr));

// * another implementation
// left = 2 * i + 1
// right = 2 * i + 2
// root  = i / 2

let minHeap = function () {
  let heap = [];

  this.insert = function (num) {
    // push to the end of array
    heap.push(num);
    if (heap.length > 1) {
      let idx = heap.length - 1; // index of inserted element
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        // checking to the parent element until found a smaller number
        if (idx >= 1) {
          // ! check if this condition is required
          swap(idx, Math.floor(idx / 2), heap); // swapping the inserted value and the parent value
          if (Math.floor(idx / 2) > 1) {
            //
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };
  this.remove = function () {
    let smallest = heap[0];
    if (heap.length > 1) {
      heap[0] = heap[heap.length - 1]; // swap the last element with the first
      heap.splice(heap.length - 1); // remove the last element
      if (heap.length === 2) {
        if (heap[1] > heap[2]) {
          [heap[2], heap[1]] = [heap[1], heap[2]];
        }
        return smallest;
      }
      let i = 0,
        left = 2 * i,
        right = 2 * i + 1;
    }
  };
  this.swap = function (i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
};
