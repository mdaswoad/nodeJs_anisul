const fileSysterm = require("fs");

// fileSysterm.appendFile("demo.txt", "Instutite name: Rangpur ploytechic", (e) =>
//   e ? console.log(e) : console.log("complete")
// );
// fileSysterm.readFile('demo.txt','utf-8',((e,data)=>{e?console.log(e):console.log(data)}))
// fileSysterm.readFile('Readme.md','utf-8',((e,data)=>e?console.log(e):console.log(data)))
// fileSysterm.exists('textFile.txt',(e)=>console.log(e))
fileSysterm.unlinkSync('aswoad.txt')