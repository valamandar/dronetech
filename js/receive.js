let request = new XMLHttpRequest()

request.open("GET", "http://147.135.134.53/~GPS-TRACKER/nicolas_passy.txt")

request.setRequestHeader("Content-Type", "application/json")
request.setRequestHeader("Accept", "application/json")
request.setRequestHeader("X-Requested-With", "XMLHttpRequest")
request.setRequestHeader("Access-Control-Allow-Origin", "*")

request.addEventListener("readystatechange", e => {
    console.log("Ouverture de la connexion ")
    if (request.readyState == XMLHttpRequest.DONE) {
        switch (request.status) {
            case 201 || 200:
                let data = JSON.parse(request.responseText)
                console.log(data)
                break;
            case 500:
                console.error("Erreur du serveur")
                break;
        }
    } else {
        console.log("Chargement ...")
    }
})

request.send()