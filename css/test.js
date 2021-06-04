function num(n,m,p){
    var tmp = new Array();
    var lines = [
        [1,2],
        [2,3],
        [4,3]
    ]
    var t = 0;
    for(var y = 0;y<m;y++){
        for(var z = 1;z<m;z++){
            if(lines[y][1]==lines[z][0]){
                tmp.unshift(lines[y][0]);
                tmp.push(lines[z][1]);
                t = lines[z][1];
            }
            else{
                tmp.push(lines[y][1]);
                tmp.push(lines[y][0]);
                t = lines[y][1];
            }
        }
    }
    for(var b = 0;b<tmp.length-1;b++){
        if(tmp[b]==p){
            for(var c=0;c<n;c++){
                if(b-c>=0){
                    console.log(b-c);
                }
                else break;
            }
        }
    }
}
num(4,3,4);
