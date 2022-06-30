//Primeira
    //number - inteiro(int) - float
    //obs - 2,50 - 2.50
    //R - float
//Segunda
    // console.log(10/'1o')
    //não é numero - not a number - NaN
    //R - NaN
//Terceira
    //string -
    // console.log('Text'.replace('ex','es'))
    //.split()
    // console.log('ola-mundo'.split('-'))
    //.substring()
    //'olá-mundo'
    // console.log('olá-mundo'.substring(0,3))
    //.slice()
    // console.log('ola-mundi'.slice(0,3))
//Quarta
    //eval('')
    //eval('console.log(1+1)')
//Quinta
    //"ANDRE-NASCIMENTO-SALES;12312312-123123;RUA-EUSEBIO-123-B;11233312-3"
    const data = "ANDRE-NASCIMENTO-SALES;12312312-123123;RUA-EUSEBIO-123-B;11233312-3"
    const importantData = data.split(';')
    //[ANDRE...,12312312,RUA-...,]
    const nome = importantData[0].split('-').join(' ')
    const endereco = importantData[2].split('-').join(' ') //(-2)
    // console.log(nome,endereco)
//Sexta
    //1 - true, 0 - false
    //[] - false
    //R - 0,[],-0,null,undefined,NaN
    // if([]){
    //     //algo
    // }
//Setima
    //||,&&,==
    const exprecao = (((false || true)&&(true && true)) && ( 3 == 3))
    exprecao? console.log('Acertou'): console.log('Errou')
    //R - (((false || true)&&(true && true)) && ( 3 == 3))
//Oitava
    //R - Tipica elevação de variaveis ao topo do escorpo mais externo do código
// Nona 
    //R - const - 
    //var,let , const