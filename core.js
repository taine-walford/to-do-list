
let db, items

window.onload = function () {
    let firebaseConfig = {
        apiKey: window.location.search.substring(1),
        authDomain: "t-d-l-44dc8.firebaseapp.com",
        databaseURL: "https://t-d-l-44dc8.firebaseio.com",
        projectId: "t-d-l-44dc8",
        storageBucket: "t-d-l-44dc8.appspot.com",
        messagingSenderId: "480785288665",
        appId: "1:480785288665:web:055245c8cd58ebb1631dc8"
    }
    console.log(firebaseConfig.apiKey)
    firebase.initializeApp(firebaseConfig)
    db = firebase.firestore()
    loadItems()
}

function loadItems () {
    return db.collection("list")
        .get()
        .then(snapshot => {
            items = []
            snapshot.forEach(doc => {
                items.push(doc.data())
            })
            console.log(items)
            return items
        })
        .catch(err => {
            console.error("erro >>> loading list | ", err)
        })
}