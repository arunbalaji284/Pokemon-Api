var  div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","pokemon");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search [Enter 1 to 50]";
button.addEventListener("click",getPokemon);

let pokemonName=document.createElement("div");
pokemonName.setAttribute("id","pokemonName");

let pokemonAbilities=document.createElement("div");
pokemonAbilities.setAttribute("id","pokemonAbilities");

let pokemonMoves=document.createElement("div");
pokemonMoves.setAttribute("id","pokemonMoves")

let pokemonWeight=document.createElement("div");
pokemonWeight.setAttribute("id","pokemonWeight");


div.append(input,button,pokemonName,pokemonAbilities,pokemonMoves,pokemonWeight);
document.body.append(div);

async function getPokemon(){

    let res=document.getElementById("pokemon").value;
    var url=`https://pokeapi.co/api/v2/pokemon/${res}`;
    let result=await fetch(url);
    let result1=await result.json();
    console.log(result1);

    console.log(result1.name);
    pokemonName.innerHTML=`Pokemon's Name : ${result1.name}`;

    console.log(result1.abilities[0].ability.name,result1.abilities[1].ability.name);
    pokemonAbilities.innerHTML=`Pokemon's Abilities : ${result1.abilities[0].ability.name+", "+result1.abilities[1].ability.name}`;

    console.log(result1.moves[0].move.name,result1.moves[1].move.name,result1.moves[3].move.name,result1.moves[3].move.name);
    pokemonMoves.innerHTML=`Pokemon's Moves : ${result1.moves[0].move.name+", "+result1.moves[1].move.name+","+result1.moves[2].move.name+", "+result1.moves[3].move.name}`;

    console.log(result1.weight);
    pokemonWeight.innerHTML=`Pokemon's Weight : ${result1.weight}`;
    
}













// async function foo(){
//     let res=document.getElementById("country").value;
//     var url=`https://pokeapi.co/api/v2/pokemon?limit=50`;

//     let result=await fetch(url);
//     let result1=await result.json();
//     console.log(result1);
    
//     // active.innerHTML=`Total Active cases : ${result1[index].Active}`;
//     // console.log(result1[index].recovered);
//     // recovered.innerHTML=`Total Recovered cases : ${result1[index].Recovered}`;
//     // console.log(result1[index].Deaths);
//     // deaths.innerHTML=`Total Deaths : ${result1[index].Deaths}`;

// }


