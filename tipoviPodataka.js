//PRIMITIVNI TIPOVI
var godine = 25;
var ime = "Elmin";
var studira = true;
//KOMPLEKSNI TIPOVI
var predmeti = ["epos", "klijentske", "cloud"];
var ocene = [10, 9, 8];
//TUPLES
var tuple = ["Elmin", 20];
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InforamcioniSistemi"] = 2] = "InforamcioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//OBJEKTI
var student = {
    ime: "Elmin",
    godine: 20,
    studira: true
};
//UNIJA TIPOVA
var brojIliString = 10;
//ANY TIPO
var biloKojiTip = "Moze bilo koji tip";
//VOID TIP
function cao() {
    console.log("cao");
}
//NULL I UNDEFINED TIP
var n = null;
var u = undefined;
//TYPE ASSERTIONS
var nekaVrednost = "Neki string";
var duzinaStringa = nekaVrednost.length;
console.log("Duzina stringa je:", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
