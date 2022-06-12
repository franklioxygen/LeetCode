/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function(deadends, target) {
	let deadendsSet = new Set();
    deadends.forEach(item => deadendsSet.add(item));
    if(deadendsSet.has(target) || deadendsSet.has("0000")) return -1;
    if(target === "0000") return 0;
    let visited = new Set();
    let q = [];
    let steps = 0;
    let genQueue = (curr) => {
        visited.add(curr);
        for(let i=0;i<curr.length;i++){
          let currNum = parseInt(curr[i]);
          let pos = currNum>=9?10:0
          let neg = currNum<1?10:0
          let numUp = curr.slice(0,i)+String(currNum+1-pos)+curr.slice(i+1,curr.length);
          let numDn = curr.slice(0,i)+String(currNum-1+neg)+curr.slice(i+1,curr.length);
          visited.has(numUp)? null:q.push(numUp);
          visited.has(numDn)? null:q.push(numDn);
        }
    };
    genQueue("0000");
    while(q.length>0) {
      steps+=1;
      let len = q.length;
      for(let i=0; i< len; i++){
        let item = q.shift();
        if(!deadendsSet.has(item)) {
          if(item === target) return steps;
          if(!visited.has(item)){
            genQueue(item);
          }
        }
      }
    }
	return -1
};