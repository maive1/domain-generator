window.onload = function() {

    document.querySelector('.generator').innerHTML = generateDomain();
    newDomain();
};

let generateDomain = function () {

    let pronoun = ['the','our']; 
    let adj = ['great', 'big' ]; 
    let noun = ['jogger','racoon'];
    
    let newDomain = " ";
    pronoun.forEach((a)=>{  
        adj.forEach((b)=>{            
            noun.forEach((c)=>{
                newDomain += a + b + c + '.com'+ "<br>";
            })
        })
    }) 
    console.log(newDomain);
    return newDomain
            
};


