let url="https://catfact.ninja/fact";


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    console.log("button was clicked");
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#para");
    p.innerText=fact;
});


async function getFacts(){
    try{
        let response=await axios.get(url);// Fetch Alternative
        return response.data.fact;
    }
    catch(err){
        console.log("No API Found",err);
        console.log("No fact found");
    }
}


















