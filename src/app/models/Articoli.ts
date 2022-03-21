export interface IArticoli{ //interfaccia di articoli in TScript
    codart:string
    descrizione:string
    um:string
    pzcart:number
    peso:number
    prezzo:number
    active:boolean //determina se un articolo è presente
    data:Date  //determina la data di inserimento di un articolo

}