// function calculateAttackableCannons(n, coordinates) {
//     const minX = new Map();
//     const maxX = new Map();
//     const minY = new Map();
//     const maxY = new Map();
  
//     // Populate maps with initial values
//     coordinates.forEach(([x, y]) => {
//       if (!minX.has(y) || x < minX.get(y)) minX.set(y, x);
//       if (!maxX.has(y) || x > maxX.get(y)) maxX.set(y, x);
//       if (!minY.has(x) || y < minY.get(x)) minY.set(x, y);
//       if (!maxY.has(x) || y > maxY.get(x)) maxY.set(x, y);
//     });
  
//     const results = [];
  
//     // Calculate attackable cannons for each cannon
//     coordinates.forEach(([x, y]) => {
//       let count = 0;
  
//       if (minY.get(x) < y&&minY.get(x-1)) count++; // Can attack downwards
//       if (maxY.get(x) > y&&maxY.get(x+1)) count++; // Can attack upwards
//       if (minX.get(y) < x&&minX.get(y-1)) count++; // Can attack right
//       if (maxX.get(y) > x&&maxX.get(y)) count++; // Can attack left
  
//       results.push(count);
//     });
  
//     return results;
//   }


function calculateAttackableCannons(n,coordinates){
    const board=new Array(n).fill().map(()=>new Array(n).fill(false))
    let res=[]
    for(let item of coordinates){
        const x=item[0],y=item[1]
        board[x][y]=true
    }


    for(let item of coordinates){
        let count=0
        const curX=item[0],curY=item[1]

        // 向右寻找
        for(let y=curY+1;y<n-1;y++){
            if(board[curX][y]&&board[curX][y+1]){
                count++
            }
        }
        // 向左寻找
        for(let y=curY-1;y>0;y--){
            if(board[curX][y]&&board[curX][y-1]) {
                count++
                break
            }
        }

        // 向上寻找
        for(let x=curX-1;x>0;x--){
            if(board[x][curY]&&board[x-1][curY]){
                count++
                break
            } 
        }
        // 向下寻找
        for(let x=curX+1;x<n-1;x++){
            if(board[x][curY]&&board[x+1][curY]) {
                count++
                break
            }
        }
        res.push(count)
    }

    return res

}
  
  // Example usage:
  const n = 6;
  const coordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
    [3, 0]
  ];
  
  const attackableCannons = calculateAttackableCannons(n, coordinates);
  console.log(attackableCannons); // Output: [2, 0, 1, 1, 1, 1]