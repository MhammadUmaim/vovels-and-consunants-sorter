var vovels = [];
var consunant =[];

// FUNSTION STARS FROM HERE  >>>>

function add() {
    var addElm = document.getElementById('userinput').value;

    // LOOP STARS FROM HERE >>>>
  
    for (let i = 0; i < addElm.length; i++) {
        
        if (addElm.slice(i, i+1) === 'a' || addElm.slice(i, i+1) === 'e' || addElm.slice(i, i+1) == 'i'|| addElm.slice(i, i+1) == 'o'|| addElm.slice(i, i+1) == 'u') {
            vovels.push(addElm);
        }
        else{
            consunant.push(addElm);
        }
    
    console.log("vovels :",vovels);
    console.log("consunants :",consunant);
    return;
    
    }
}