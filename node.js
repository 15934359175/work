//var less=require("less");
//var fs=require("fs");
//less.render("@color:red;div{color:@color;}",function(e,data){
//     console.log(data.css);
//});
//fs.readFile("less.less","utf-8",function(e,d){
//   less.render(d,function(e,data){
//       fs.writeFile("css.css",data.css,function(){
//           console.log("success");
//       })
//   })
//})
//var con=fs.readFileSync("less.less","utf-8");
//less.render(con,function(e,d){
//    fs.writeFileSync("less.css", d.css);
//})
require("dcsserver");