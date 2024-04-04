//PRIMITIVNI TIPOVI

let godine:number = 25;
let ime:string = "Elmin";
let studira:boolean = true;


//KOMPLEKSNI TIPOVI

let predmeti:string[]=["epos","klijentske","cloud"];
let ocene:number[]=[10,9,8];


//TUPLES

let tuple:[string, number]=["Elmin", 20];
enum Modul{
   TehnologijeElektronskogPoslovanja,
   SoftverskoInzenjerstvo,
   InforamcioniSistemi
}

let modul:Modul=Modul.TehnologijeElektronskogPoslovanja;


//OBJEKTI

let student:{ime:string, godine:number, studira:boolean}={
    ime:"Elmin",
    godine:20,
    studira:true
};

//UNIJA TIPOVA

let brojIliString:number | string = 10;


//ANY TIPO

let biloKojiTip:any = "Moze bilo koji tip";


//VOID TIP

function cao():void{
    console.log("cao");
}


//NULL I UNDEFINED TIP

let n:null=null;
let u:undefined=undefined;


//TYPE ASSERTIONS

let nekaVrednost:any = "Neki string";
let duzinaStringa:number = (nekaVrednost as String).length;
console.log("Duzina stringa je:", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);