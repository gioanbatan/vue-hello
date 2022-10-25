// Esercizio di oggi: Vue Hello
// nome repo: vue-hello
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue;

createApp( {
    data: function() {
        return {
            message: "Boolean",
            image: "https://picsum.photos/600"
        }
    }
}
).mount("#app");
