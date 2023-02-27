
    function months(month, color, days) { // pode ser convertida em classe
        this.month = month;
        this.color = color;
        this.days = days;
    }

    /**
     * achei uma melhor prática adicionar uma função construtora
     * para definir o tipo de objeto, especificando 
     * seu nome e suas propriedades
     */



 // Pode ser instanciado e definido assim ou..
 let Fevereiro  = new months(02, 'roxo', 28);

 let Janeiro = new months();


 let meses = [    
    
    Janeiro = { 
        month: 01,
        color: 'laranja',
        days: 31
    },
    Fevereiro = { 
        month: 02,
        color: 'cinza',
        days: 28
    },
    Março ={ 
        month: 03,
        color: 'gray',
        days: 31
    },
    Abril = { 
        month: 04,
        color: 'azul',
        days: 30
    },
    Maio = { 
        month: 05,
        color: 'rosa',
        days: 31
    },
    Junho = {
        month: 06,
        color: 'branco',
        days: 30
    }
 ]

function getMonths(){

    return console.log(Junho.color)
}

getMonths()
