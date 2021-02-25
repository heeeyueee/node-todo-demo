#!/usr/bin/env node
const program=require("commander")
const api=require("./index.js")
const pkg=require("./package.json")
program
  .version(pkg.version)
  program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words=args[1].args.join("")
    api.add(words).then(()=>{console.log("添加成功");},(error)=>{console.log(error);})
  });
  program
  .command('clear')
  .description('clear tasks')
  .action((...args) => {
    api.clear().then(()=>{console.log("清除成功");},()=>{console.log("清除失败");})
  });
  program
  .command('show')
  .description('show all tasks')
  .action((...args) => {
    api.showAll()
  });
program.parse(process.argv);
// if(process.argv.length===2){
//     api.showAll()
// }