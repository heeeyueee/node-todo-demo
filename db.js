
const fs=require("fs");
const homedir = require('os').homedir();
const p=require("path")
const dbPath=p.join(homedir,".todo")
const db={
    read(path=dbPath){
        return new Promise((resolve,reject)=>{
            fs.readFile(path,{flag:"a+"},(error,data)=>{
                if(error){
                    console.log(error);
                    return reject(error)
                }
                let list
                try{
                    list=JSON.parse(data.toString())
                }catch(error2){
                    list=[]
                }
                resolve(list)               
            })

        })
    
},
write(list,path=dbPath){
    return new Promise((resolve,reject)=>{
        const string=JSON.stringify(list)
        fs.writeFile(path,string+"\n",(error)=>{
            if(error){
            console.log(error);
            return reject(error);
            }
            resolve();
        })

    })
}

}
module.exports=db;