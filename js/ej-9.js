for(let i=1;i<=500;i++){
    
        document.write(`<p>${i}</p>`)
    if(i%4==0){
        document.write(`<p> es multiplo de 4</p>`)
    }else if(i%5==0){
        document.write(`<p>-----------------------</p>`)
    }else if(i%9==0){
        document.write(`<p> es multiplo de 9</p>`)
    }
}