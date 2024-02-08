
// Coming soon 

let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     description = document.querySelector("#desc");
     Theme = document.querySelector("#theme");
     Tech = document.querySelector("#Techsection");

     collector = document.querySelector("#colldesc");
     

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          description.innerHTML = data[attr].desc
          Theme.innerHTML = data[attr].theme
          Tech.innerHTML = data[attr].tech
          collector.innerHTML = data[attr].TCdesc
          
     })
})



let data ={
    English:{
        desc: "In the modern era, it can be said that a significant part of ourselves and what constitutes us as individuals exists in a form that can be considered halfway between the concrete and the abstract. This form is often even considered opposite or parallel to 'reality,' a completely different world that most of us fail to fully comprehend." 
        + "<br>" + "<br>" +"Nevertheless we constantly entrust it some of our most prescious belongings, part of what makes up our identity. In it we store our memories, thoughts, secrets; through it's lenguage we express our creativity, an ever growing part of our experiences in most of the areas of our life is taking place in this world."
         + "<br>" + "<br>" + "This alternative reality is colloquially called 'Digital' and, just like in a fantasy book, what mediates between 'our' world and the digital one, are the 'Machines': non sentient automatas given the task of translators between the human language and the one used in the digital world."
          + "<br>" + "<br>" + "At first glance this two languages can seem similar to eatchother; it is infact the machines' duty to simplify their code as much as possible,to process it in a complex assembly line that outputs symols, words, sounds and images that emulate our world."
           + "<br>" + "They feed us with mouthfuls already digested by a myriad of algorithms to make the experience of conversing with them as similar as possible to what we are accustomed to in 'our' reality."
            + "<br>" + "<br>" + "And that's how an infinite series of 0s and 1s representing color data divided into RGB channels for each individual point that makes up an encoded and compressed file with a specific decryption key is presented to the user as a series of bright dots of different colors that their eyes recognize as a single image, and the whole thing becomes a 'simple' photograph."+ "<br>" + "<br>",
        theme:"<hr>"+
        "<br>"+
        "<br>"+
        "<b>"+
          "Oculus Machina wants to give an audiovisual depiction of the flow of data, codes and information that make up a digital file, bypassing machine decoding." +
          
        "<br>"+
          "This work investigates what lies behind the simulation of reality staged"+
          " by the machines, uncovering it and looking at its insides as if it were an anthill."+
          " What we perceive as photography, video, music, etc. it is only the appearance it takes on through the"+
          " screen, what the machine wants us to see, its simulation of what we interpret as such,"+
          " while behind the scenes complicated processing processes on binary sequences take place"+
          " which in our eyes would not have the slightest meaning."+
        "</b>",

        tech:"Oculus_Machina consists in a .NET algorithm based on open CV." + 
           " Starting from a video feed, the algorithm returns a realtime reconstruction"+
           " of the images extrapolating the key elements through image recognition."+ 
           " At the same time these parameters send MIDI signals to a bunch of synthesizers,"+
           " creating generative sounds along with the image reconstructions.",

        TCdesc: "The collector is my first experience with the stop-motion technique. Made with recycled materials and minimal equipment. The video represents a trailer for a possible future revisitation and creation of a complete work. "
   


            
    },
    

    Italiano:{
        desc: "Nell’ era moderna si può affermare che buona parte di noi stessi e di ciò che ci compone come individui, vive in una forma che possiamo considerare a metà tra il concreto e l’astratto, una forma che spesso viene persino considerata opposta o parallela alla “realtà”, un mondo completamente diverso che la maggior parte di noi non riesce pienamente a comprendere." 
        + "<br>" + "<br>" + "Eppure ad esso affidiamo alcune tra le cose a noi più preziose, parte di ciò che costruisce la nostra identità, ciò che ci rende “n0i”. In esso immagazziniamo i nostri ricordi, pensieri, segreti, le nostre capacità e le nostreIn esso immagazziniamo i nostri ricordi, pensieri, segreti, le nostre capacità e le nostre creazione vengono espresse secondo il suo linguaggio, una parte crescente delle nostre esperienze in tutti gli ambiti della vita passa attraverso questo mondo."
         + "<br>" + "<br>" + "Questa realtà alternativa prende comunemente il nome di “Digitale” e, come in un racconto fantasy, a fare da tramite tra il “nostro” mondo e quello “parallelo” sono le “macchine”: automi non senzienti con il compito di traduttori, dal linguaggio umano a quello usato nel mondo digitale." 
         + "<br>" + "<br>" + "All’ apparenza questi due linguaggi posso sembrare perlopiù simili l’un l’altro; è infatti compito delle macchine semplificare il più possibile il loro codice, processandolo in una complessa catena di montaggio che restituisce simboli, parole, suoni e immagini che quanto più possibile emulino il nostro mondo."
          + "<br>" + "Ci imboccano con bocconi già digeriti da una miriade di algoritmi per renderci l’esperienza di dialogare con loro quanto più verosimile a ciò a cui siamo abituati nella “nostra” realtà e riusciamo a percepire e comprendere."
           + "<br>" + "<br>" + "Ed è così che una serie infinita di 0 e 1 che rappresenta dati sul colore diviso in canali RGB di ogni singolo punto che compone un file codificato e compresso con una chiave di lettura specifica, viene esposto all’utente come una serie di puntini luminosi di colore diverso che i suoi occhi riconoscono come singola immagine e il tutto diventa una “semplice” fotografia." + "<br>" + "<br>",

    
           theme:"<hr>"+
           "<br>"+
           "<br>"+
           "<b>"+
             "Oculus Machina vuole dare una raffigurazione audiovisiva del flusso di dati, codici e informazione che compongono un file digitale, bypassando la decodifica della macchina." +
             
           "<br>"+
             "L’opera indaga su quello che si nasconde dietro alla simulazione della realtà messa in scena"+
             " dalla macchina, scoperchiando quest’ ultima e guardandoci dentro come fosse un formicaio."+
             " Questo porta a interrogarsi su cosa sia effettivamente un “file”. Quello che noi chiamiamo e"+
             " percepiamo come fotografia, video, musica, etc. è soltanto l’aspetto che assume attraverso lo"+
             " schermo, ciò che la macchina vuole farci vedere, una sua simulazione di quello che noi interpretiamo"+
             " come tale, mentre dietro le quinte avvengono complicati processi di elaborazione su sequenze binarie"+
             " che ai nostri occhi non avrebbero il benchè minimo significato."+
           "</b>",

           tech:"Oculus_Machina consiste in un algoritmo in framework .NET e basato su Open CV." + 
           " Partendo da un qualsiasi file video, l'algoritmo restituisce in tempo reale una ricostruzione"+
           " delle immagini a schermo estrapolandone gli elementi chiave tramite image recognition."+ 
           " Allo stesso modo con i parametri restituiti dal riconoscimento delle immagini inviano"+
           " segnali MIDI a sintetizzatori e stumenti digitali che creano suoni generativi che rispondono"+
           " alla ricostruzione dell'immagine.",

           TCdesc:"The Collector è una prima esperienza con la tecnica della animazione stop-motion. Realizzato in solitaria con materiali di recupero e attrezzatura minima. Il video rappresenta un trailer per una possibile futura revisitazione e realizzazione di un opera completa. "


   

    }
}