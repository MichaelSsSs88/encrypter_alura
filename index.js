
let visibleResult = false;

const encrypt=(event)=>{
    event.preventDefault();
    let result=document.getElementById("result");
    let sentence= document.getElementById("sentence");
    let textResult=document.getElementById("text-result");
    let content=document.getElementById("content");
    let buttons= document.getElementById("buttons");
    textResult.value=findLetters(sentence.value);
    if(textResult.value.length>0)visibleResult= !visibleResult;
    visibleResult?(result.style.display="flex",content.style.display="none",buttons.style.display="none"): "";
    sentence.value="";
    !visibleResult?(result.style.display="none", content.style.display="flex"): "none";
}

const desencrypt=(event)=>{
    event.preventDefault();
    let result=document.getElementById("result");
    let sentence= document.getElementById("sentence");
    let textResult=document.getElementById("text-result");
    let content=document.getElementById("content");
    let btnEncrypt= document.getElementById("btn-encrypt");
    let btnDecrypt= document.getElementById("btn-decrypt");
    let buttons= document.getElementById("buttons");
    textResult.value=findWord(sentence.value);
    if(textResult.value.length>0)visibleResult= !visibleResult;
   
    visibleResult?(result.style.display="flex",content.style.display="none",buttons.style.display="none"): "";
    sentence.value="";
    !visibleResult?(result.style.display="none", content.style.display="flex"): "none";
}

const copy=(event)=>{
    event.preventDefault();
    visibleResult= !visibleResult;
    !visibleResult?(result.style.display="none", content.style.display="flex"): "none";
    let textResult=document.getElementById("text-result").value;
    navigator.clipboard.writeText(textResult);
    buttons.style.display="flex"
}

const findLetters=(cadena)=>{
    let newWord="";
    Array.from(cadena).map((caracter)=>{
        if(caracter==="a"){
            newWord= newWord + "ai";
        }
        else if(caracter==="e"){
            newWord= newWord + "entrer";
        }
        else if(caracter==="i"){
            newWord= newWord + "imes";
        }
        else if(caracter==="o"){
            newWord= newWord + "ober";
        }
        else if(caracter==="u"){
            newWord= newWord + "ufat";
        }else{
            newWord= newWord + caracter;
        }
    })

    return newWord;
}

const findWord=(phrase)=>{
    let newWord="";
    const dictionary =["ai","enter","imes","ober", "ufat"]

    let posicion = 1;
   
        const backupPhrase=phrase;
        dictionary.map(letter =>{
            posicion=1;
            newWord.length>0?phrase=newWord:"";
            console.log(phrase)
            while(posicion!=-1){
                posicion = phrase.indexOf(letter);
                console.log(posicion)
                if(posicion!=-1){
                    posicion>=0?newWord= phrase.substring(0,posicion)+letter[0]+phrase.substring(posicion+letter.length,phrase.length):letter+phrase.substring(posicion+letter.length,phrase.length);
                    phrase=newWord
                    console.log(newWord)
                }
                
            }

        })
    if(newWord.length>0) return newWord;
    else return backupPhrase;
}