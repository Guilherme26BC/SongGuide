const tbody = document.querySelector("tbody");
const botao1 = document.querySelector("#btnAlbum1");
const botao2 = document.querySelector("#btnAlbum2");
const botao3 = document.querySelector("#btnAlbum3");
const botao4 = document.querySelector("#btnEp1");


botao1.addEventListener('click', () => {

    const album = [["1", "!!!!!!!", "--", "0:13"],
    ["2", "bad guy", "--", "3:14"],
    ["3", "xanny", "--", "4:03"],
    ["4", "you should see me in a crown", "--", "3:00"],
    ["5", "all the good girls go to hell", "--", "2:48"],
    ["6", "wish you were gay", "--", "3:41"],
    ["7", "when the party is over", "--", "3:16"],
    ["8", "8", "--", "2:53"],
    ["9", "my strange addiction", "--", "2:59"],
    ["10", "bury a friend", "--", "3:13"],
    ["11", "ilomilo", "--", "2:36"],
    ["12", "listen before i go", "--", "4:02"],
    ["13", "i love you", "--", "4:51"],
    ["14", "goodbey", "--", "1:59"]];
    adicionar(album)
});
botao2.addEventListener('click', () => {

    const album = [["1", "Getting Older", "--", "4:04"],
    ["2", "I Didn't Change My Number", "--", "2:38"],
    ["3", "Billie Bossa Nova", "--", "3:36"],
    ["4", "my future", "--", "3:30"],
    ["5", "Oxytocin", "--", "3:30"],
    ["6", "GOLDWING", "--", "2:31"],
    ["7", "Lost Cause", "--", "3:32"],
    ["8", "Halley's Comet", "--", "3:54"],
    ["9", "Not My Responsability", "--", "3:47"],
    ["10", "OverHeated", "--", "3:34"],
    ["11", "Everybody Dies", "--", "3:26"],
    ["12", "Your Power", "--", "4:05"],
    ["13", "NDA", "--", "3:16"],
    ["14", "Therfore I Am", "--", "2:53"],
    ["15", "Happier Than Ever", "--", "4:58"],
    ["16", "Male Fantasy", "--", "3:14"]];

    adicionar(album)
});
botao3.addEventListener('click', () => {

    const album = [["1", "SKINNY", "--", "3:39"],
    ["2", "LUNCH", "--", "2:59"],
    ["3", "CHIHIRO", "--", "5:03"],
    ["4", "BIRDS OF A FEATHER", "--", "3:30"],
    ["5", "WILDFLOWER", "--", "4:21"],
    ["6", "THE GREATEST", "--", "4:53"],
    ["7", "L'AMOUR DE MA VIE", "--", "5:33"],
    ["8", "THE DINER", "--", "3:06"],
    ["9", "BITTERSUITE", "--", "4:58"],
    ["10", "BLUE", "--", "5:43"]];

    adicionar(album)
});
botao4.addEventListener('click', () => {

    const album = [["1", "COPYCAT", "--", "3:14"],
    ["2", "idontwannabeyouanymore", "--", "3:23"],
    ["3", "my boy", "--", "2:50"],
    ["4", "watch", "--", "2:57"],
    ["5", "party favor", "--", "3:24"],
    ["6", "bellyache", "--", "2:59"],
    ["7", "ocean eyes", "--", "3:20"],
    ["8", "hostage", "--", "3:49"],
    ["9", "&burn", "Vince Staples", "2:59"]];

    adicionar(album)
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
            tr.classList.add('Songs');
        })
        tbody.appendChild(tr);
    })

}