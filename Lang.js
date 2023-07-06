
// Coming soon 

let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     description = document.querySelector("#desc");
     

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          description.textContent = data[attr].desc
          
     })
})



let data ={
    English:{
        desc: "In the modern era, it can be said that a significant part of ourselves and what constitutes us as individuals exists in a form that can be considered halfway between the concrete and the abstract. This form is often even considered opposite or parallel to 'reality,' a completely different world that most of us fail to fully comprehend." + "<br>" + "<br>" + "Nevertheless we constantly entrust it some of our most prescious belongings, part of what makes up our identity. In it we store our memories, thoughts, secrets; through it's lenguage we express our creativity, an ever growing part of our experiences in most of the areas of our life is taking place in this world." + "<br>" + "<br>" + "This alternative reality is colloquially called 'Digital' and, just like in a fantasy book, what mediates between 'our' world and the digital one, are the 'Machines': non sentient automatas given the task of translators between the human language and the one used in the digital world." + "<br>" + "<br>" + "At first glance this two languages can seem similar to eatchother; it is infact the machines' duty to simplify their code as much as possible,to process it in a complex assembly line that outputs symols, words, sounds and images that emulate our world." + "<br>" + "They feed us with mouthfuls already digested by a myriad of algorithms to make the experience of conversing with them as similar as possible to what we are accustomed to in 'our' reality." + "<br>" + "<br>" + "And that's how an infinite series of 0s and 1s representing color data divided into RGB channels for each individual point that makes up an encoded and compressed file with a specific decryption key is presented to the user as a series of bright dots of different colors that their eyes recognize as a single image, and the whole thing becomes a 'simple' photograph." + "<br>" + "<br>"
    },

    Italiano:{
        desc: "Nell’ era moderna si può affermare che buona parte di noi stessi e di ciò che ci compone come individui, vive in una forma che possiamo considerare a metà tra il concreto e l’astratto, una forma che spesso viene persino considerata opposta o parallela alla “realtà”, un mondo completamente diverso che la maggior parte di noi non riesce pienamente a comprendere." + "<br>" + "<br>" + "Eppure ad esso affidiamo alcune tra le cose a noi più preziose, parte di ciò che costruisce la nostra identità, ciò che ci rende “n0i”. In esso immagazziniamo i nostri ricordi, pensieri, segreti, le nostre capacità e le nostreIn esso immagazziniamo i nostri ricordi, pensieri, segreti, le nostre capacità e le nostre creazione vengono espresse secondo il suo linguaggio, una parte crescente delle nostre esperienze in tutti gli ambiti della vita passa attraverso questo mondo." + "<br>" + "<br>" + "Questa realtà alternativa prende comunemente il nome di “Digitale” e, come in un racconto fantasy, a fare da tramite tra il “nostro” mondo e quello “parallelo” sono le “macchine”: automi non senzienti con il compito di traduttori, dal linguaggio umano a quello usato nel mondo digitale." + "<br>" + "<br>" + "All’ apparenza questi due linguaggi posso sembrare perlopiù simili l’un l’altro; è infatti compito delle macchine semplificare il più possibile il loro codice, processandolo in una complessa catena di montaggio che restituisce simboli, parole, suoni e immagini che quanto più possibile emulino il nostro mondo." + "<br>" + "Ci imboccano con bocconi già digeriti da una miriade di algoritmi per renderci l’esperienza di dialogare con loro quanto più verosimile a ciò a cui siamo abituati nella “nostra” realtà e riusciamo a percepire e comprendere." + "<br>" + "<br>" + "Ed è così che una serie infinita di 0 e 1 che rappresenta dati sul colore diviso in canali RGB di ogni singolo punto che compone un file codificato e compresso con una chiave di lettura specifica, viene esposto all’utente come una serie di puntini luminosi di colore diverso che i suoi occhi riconoscono come singola immagine e il tutto diventa una “semplice” fotografia." + "<br>" + "<br>"

    }
}