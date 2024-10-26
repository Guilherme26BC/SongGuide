const tbody = document.querySelector("tbody");
const botao1 = document.querySelector("#btnAlbum1");
const botao2 = document.querySelector("#btnEp1")
const botao3 = document.querySelector("#btnEp2")

botao1.addEventListener('click', () => {

    const album = [["1", "Às vezes eu ganho", "--", "2:20"],
    ["2", "Um pouco mais", "--", "2:07"],
    ["3", "Te espero ou fujo", "Joyce Alane", "2:14"],
    ["4", "Personagem favorito", "--", "2:49"],
    ["5", "Porque as pessoas mentem?", "--", "2:38"],
    ["6", "Não sei brincar", "--", "2:24"],
    ["7", "Passarinho", "Carol Biazin", "2:37"],
    ["8", "Louco", "--", "3:18"],
    ["9", "Típico de nós", "--", "3:04"],
    ["10", "Tanto faz", "--", "3:12"],
    ["11", "Não amo mais voçê", "--", "2:17"]];

    adicionar(album);

});

botao2.addEventListener('click', () => {

    const album = [["1", "OCASIONALMENTE", "--", "2:42"],
    ["2", "ME PEDE...", "--", "2:21"],
    ["3", "ENQUANTO DUROU", "--", "2:44"],
    ["4", "POD DE UVA", "--", "2:35"],
    ["5", "TO ME SENTINDO MAL :)", "--", "2:24"]];

    adicionar(album);
});

botao3.addEventListener('click', () => {

    const album = [["1", "Everything - Deluxe", "--", "3:13"],
    ["2", "Lay With You", "--", "3:18"],
    ["3", "We`re Just The Same - Deluxe", "--", "4:21"],
    ["4", "Only You - Deluxe", "--", "3:25"],
    ["5", "My Strength - Deluxe", "--", "3:23"],
    ["6", "Best You`ve Ever Had - Deluxe", "--", "4:28"]];

    adicionar(album);
});

function adicionar(album) {
    const tb = document.querySelectorAll(".Songs");

    tb.forEach((item) => {
        item.remove()
    });
    album.forEach(trackList => {
        const tr = document.createElement("tr");
        trackList.forEach(dados => {
            const td = document.createElement("td")
            td.textContent = dados;
            tr.appendChild(td);
            tr.classList.add('Songs')
        })
        tbody.appendChild(tr);
    })
}