const tbody = document.querySelector("tbody");
const botao1 = document.querySelector("#btnAlbum1");
const botao2 = document.querySelector("#btnAlbum2");
const botao3 = document.querySelector("#btnEp1");

botao1.addEventListener('click', () => {

    const album = [["1", "The Beginning", "--", "0:58"],
    ["2", "Good in Goodbye", "--", "2:21"],
    ["3", "Default", "--", "1:56"],
    ["4", "Follow the White Rabbit", "--", "2:59"],
    ["5", "Effortlessly", "--", "2:48"],
    ["6", "Stay Numb and Carry On", "--", "2:43"],
    ["7", "Blue", "--", "3:49"],
    ["8", "Interlude", "--", "1:49"],
    ["9", "Homesick", "--", "3:47"],
    ["10", "Selfish", "--", "3:42"],
    ["11", "Sour Times", "--", "2:45"],
    ["12", "BOYSHIT", "--", "2:40"],
    ["13", "Baby", "--", "2:27"],
    ["14", "Stained Glass", "--", "3:27"],
    ["15", "Emotional Bruises", "--", "3:01"],
    ["16", "Everything Happens For a Reason", "--", "2:25"],
    ["17", "Chanel Surfing / the end", "--", "1:44"]];

    adicionar(album)
});

botao2.addEventListener('click', () => {

    const album = [["1", "Spinning", "--", "2:46"],
    ["2", "Sweet Relief", "--", "2:41"],
    ["3", "Envy the Leaves", "--", "3:19"],
    ["4", "17", "--", "3:36"],
    ["5", "Ryder", "--", "4:06"],
    ["6", "Nothing Matters But You", "--", "2:45"],
    ["7", "I Wonder", "--", "2:37"],
    ["8", "At Your Worst", "--", "2:58"],
    ["9", "Showed Me (How I Fell in Love With You)", "--", "3:15"],
    ["10", "Home to Another One", "--", "2:29"],
    ["11", "Dangerous", "--", "3:47"],
    ["12", "Reckless", "--", "3:23"],
    ["13", "Silence Between Songs", "--", "2:29"],
    ["14", "King Of Everything", "--", "4:28"]];

    adicionar(album)
});

botao3.addEventListener('click', () => {

    const album = [["1", "Dead", "--", "3:14"],
    ["2", "Fools", "--", "3:38"],
    ["3", "Heartless", "--", "2:38"],
    ["4", "Tyler Durden", "--", "2:07"],
    ["5", "Home with You", "--", "3:10"],
    ["6", "Teenager in Love", "--", "3:34"],
    ["7", "Say It to My Face", "--", "3:09"]];
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