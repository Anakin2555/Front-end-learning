// function camelCase(str){
//     // console.log(str)
//     let arr=str.split('')
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==='-'||arr[i]==='_'){
//             let temp=null
//             if(i<arr.length-1){
//                 temp=arr[i+1]
//             }
//             arr.splice(i,2,temp?temp.toUpperCase():'')
            
//         }
//     }
//     return arr.join('')
// }

function camelCase(str){
    return str.replace(/-[a-zA-Z]|_[a-zA-Z]/g, (match, index, string) => {
        console.log(match,index,string)
        return index > 0 ? string[index + 1].toUpperCase() : '';
    });
}
console.log(camelCase('aa-bb'))
console.log(camelCase('aa_bb-cc'))
console.log(camelCase('a-ce'))



