const input = process.argv[2];
if(!input){
  console.log("Please provide a string")
  process.exit;
}
if(input.includes("@")){
  console.log("Has @");
}else{
  console.log("No @");
}