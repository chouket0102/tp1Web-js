document.addEventListener("DOMContentLoaded",()=>{
    function definirParametres(niveau){
        switch(niveau){
            case "Facile":
                return { essaisMax: 10, min: 0, max: 100 };
            case "Intermédiaire":
                return { essaisMax: 5, min: 0, max: 100 };
            case "Difficile":
                return { essaisMax: 3, min: 0, max: 100 };
            default:
                return { essaisMax: 10, min: 0, max: 100 };
        }   

    }
    
    function genererNombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
    function demanderNombre(message) {
        let saisie = prompt(message);
        if (saisie === null) {
          return null; 
        }
        return parseInt(saisie, 10);
    }
    function jouer() {
        let niveau =document.getElementById("niveau").value;
        console.log(niveau)
    
        const { essaisMax, min, max } = definirParametres(niveau);
        let nombreSecret = genererNombreAleatoire(min, max);
        let essais = 0;
        let trouve = false;
    
        while (essais < essaisMax && !trouve) {
          const message = `Essai ${essais + 1} sur ${essaisMax}\nDevinez le nombre entre ${min} et ${max} :`;
          let proposition = demanderNombre(message);
    
          if (proposition === null) {
            alert("Jeu annulé.");
            return;
          }
    
          if (isNaN(proposition)) {
            alert("Veuillez entrer un nombre valide.");
            continue;
          }
    
          essais++;
    
          if (proposition === nombreSecret) {
            alert(`Félicitations ! Vous avez trouvé le nombre ${nombreSecret} en ${essais} essai(s).`);
            trouve = true;
          } else if (proposition < nombreSecret) {
            alert("inferieur");
          } else {
            alert("superieur");
          }
        }
    
        if (!trouve) {
          alert(`Vous avez épuisé vos essais. Le nombre caché était ${nombreSecret}.`);
        }
      }
    function start(){
        do{
            jouer()
        }while(prompt("voulez vous jouer(oui ou non)")==="oui")
         
    }
    document.getElementById("jouer").addEventListener("click",start)
    

}
)