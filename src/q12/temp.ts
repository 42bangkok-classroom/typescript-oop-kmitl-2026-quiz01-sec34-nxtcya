const input = Number(process.argv[2]);
if(!input){
  console.log("The number is not number")
  process.exit;
}
if(input > 30){
    console.log("Hot");

}else{
    console.log("Normal");
}