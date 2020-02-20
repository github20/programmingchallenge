// Basic random number generator and bubble sort.
// Instructions: Run the code.
var arr = [];
while (arr.length < 100) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
};

  function bubbleSort(A){
  var switched,
      len = arr.length;
  if(len === 1) return;

  do {
    switched = false;
    for(var i=1;i<len;i++) {
      if(A[i-1] > A[i]) {   
        var b = A[i];
        A[i] = A[i-1];
        A[i-1] = b;
        switched = true;
      };   
    }
  }
  while(switched)  
};

bubbleSort(arr);
//console.log(arr);
document.write(arr);
