const arr=[];
for(let i=0; i<100; i++){
    arr[i]=i+1;
}
console.log("배열");
console.log(arr);

console.log("짝수");
const evenNum=arr.filter((item)=> (item%2===0))
console.log(evenNum);

console.log("26의 인덱스 값");
console.log(arr.findIndex((e) => e===26));

console.log("마지막에 200 추가");
arr.push(200);
console.log(arr);



