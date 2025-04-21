let N=4, M=5;

let arr = [
  [1,2,3,4,5],
  [6,7,8,9,1],
  [3,2,5,4,6],
  [7,8,9,1,2]
];


let newArr = [];

for(let i=0; i<N; i++){
  
  if(i%2==0){
    newArr.push(...arr[i].reverse());
  }else{
    newArr.push(...arr[i]);
  }
  
}
  console.log(newArr.join(' '));
