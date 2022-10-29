bilt-in modules (node.js own modules )http, url path , fs (thats no ned to install)

File System module 
asyncronas      | syncronas
1 writeFile()     | writeFileSync()
2 appendFile()    | appendFileSync()
3 readFile()      | readFileSync()
4 rename()        | renameSync()
5 Unlink()        | UnlinkSync()
6 Exists()        | ExistsSync()

1 writeFile();
______________
you will use this function use const fileSystem = require('fs')

writeFile function create a new file 
writeFile get 3 paramiters 
fast = file name with extension (demo.txt)
second = which value (hi my name is aswoad)
third = callback function recive error 
****************************************************************
 example fileSystem.writeFile('demo.txt','file value hi my naem is ad ',e=>if(e){console.log(e)}eles{console.log('done')})
****************************************************************
2 appendFile () 
_____________
add new value in existing file 
it's get three parameter in 
fast = exitsting file name (if this file note exists then it's creact a new file);
second = new value you add (which value concat with existing value);
third = callback function;

****************************************************************
 example fileSystem.writeFile('demo.txt','secend line',e=>if(e){console.log(e)}eles{console.log('done')})
****************************************************************
3 readFile ()
______________
fi you can read any file then you use this function or modules
this fuction is get three paramiter
fast =file name || location
second = which code you watch (utf-8)
third = call back function it's return tow parmetar (fast =error, second = which data you collect other file)
****************************************************************
 example fileSystem.writeFile('demo.txt','utf-8',(e,data)=>if(e){console.log(e)}eles{console.log(data)})
****************************************************************
4 rename()
__________
if you can change file name then you use this module
this function get 3par
1 fast= file name ;
2 second = new file name;
3 third = callback function;
****************************************************************
fileSysterm.rename('demo.txt','textFile.txt',(e)=>console.log(e))
****************************************************************

5 Delete file Unlink()
______________________
if you delet any file then you will use this 
it's get 2 paramiter 
fast = file name (which one you delete)
second = callback functon 
******************************************************************
fileSysterm.unlink('demo.txt',(e)=>console.log(e))
******************************************************************
6 exists()
________________
this module chack only this file exites or node 
its get 2 par
fast = file name (which file you chack )
scend =call back functiion (if file is exits then return ture )
******************************************************************
fileSysterm.exists('textFile.txt',(e)=>console.log(e))
******************************************************************