export interface IClienti{ //interfaccia di articoli in TScript
    nome:string
    cognome:string
    codCliente:string
    eta:number
    dataNascita:Date
    dataNoleggio:Date //determina se un articolo è presente
    durataNoleggioH:number  //determina la data di inserimento di un articolo

}