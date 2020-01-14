
try{
    function sum(x, y){
    //check data types first and throw error
    if(1 + 2 === 3){
        throw "BUT FOR WHY?!"
    }
    }
}

catch(err){
    console.log(err)
}

finally{
    console.log("I'm gonna run!")
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
}
try{
    if(user.username === "steve" && user.password !== "123abc"){
        throw "not again!"
    }
}
catch(err){
    console.log(err)
}
finally{
    console.log("phew it's working!")
}