const tbody = document.querySelector("tbody");
const botao1 = document.querySelector("#btnAlbum1");
const botao2 = document.querySelector("#btnAlbum2");
const botao3 = document.querySelector("#btnAlbum3");
const botao4 = document.querySelector("#btnEp1");


botao1.addEventListener('click', () => {

    const album = [["1", "Supermodel", "--", "3:01"],
    ["2", "Love Galore", "Travis Scott", "4:35"],
    ["3", "Doves in the Wind", "Kendrick Lamar", "4:26"],
    ["4", "Drew Barrymore", "--", "3:51"],
    ["5", "Prom", "--", "3:16"],
    ["6", "The Weekend", "--", "4:32"],
    ["7", "Go Gina", "--", "2:41"],
    ["8", "Gardens (Say It Like Dat)", "--", "3:28"],
    ["9", "Broken Clocks", "--", "2:51"],
    ["10", "Anything", "--", "2:29"],
    ["11", "Wavy(Interlude)", "James Fauntleroy", "1:15"],
    ["12", "Normal Girl", "--", "4:13"],
    ["13", "Pretty Little Birds", "Isaiah Rashad", "4:05"],
    ["14", "20 Something", "--", "3:18"]];
    adicionar(album)
});
botao2.addEventListener('click', () => {

    const album = [["1", "Supermodel", "--", "3:01"],
    ["2", "Love Galore", "Travis Scott", "4:35"],
    ["3", "Doves in the Wind", "Kendrick Lamar", "4:26"],
    ["4", "Drew Barrymore", "--", "3:51"],
    ["5", "Prom", "--", "3:16"],
    ["6", "The Weekend", "--", "4:32"],
    ["7", "Go Gina", "--", "2:41"],
    ["8", "Gardens (Say It Like Dat)", "--", "3:28"],
    ["9", "Broken Clocks", "--", "2:51"],
    ["10", "Anything", "--", "2:29"],
    ["11", "Wavy(Interlude)", "James Fauntleroy", "1:15"],
    ["12", "Normal Girl", "--", "4:13"],
    ["13", "Pretty Little Birds", "Isaiah Rashad", "4:05"],
    ["14", "20 Something", "--", "3:18"],
    ["15", "Love Galore(Alt Version)", "--", "4:33"],
    ["16", "2AM", "--", "4:02"],
    ["17", "Miles", "--", "1:09"],
    ["18", "Percolator", "--", "1:24"],
    ["19", "Tread Carefully", "--", "3:02"],
    ["20", "Akward", "Travis Scott", "2:58"],
    ["21", "Jodie", "--", "2:45"]];

    adicionar(album)
});
botao3.addEventListener('click', () => {

    const album = [["1", "SOS", "--", "1:57"],
    ["2", "Kill Bill", "--", "2:33"],
    ["3", "Seek & Destroy", "--", "3:23"],
    ["4", "Low", "--", "3:01"],
    ["5", "Love Language", "--", "3:03"],
    ["6", "Blind", "--", "2:30"],
    ["7", "Used", "Don Toliver", "2:26"],
    ["8", "Snooze", "--", "3:21"],
    ["9", "Notice Me", "--", "2:40"],
    ["10", "Gone Girl", "--", "4:04"],
    ["11", "Smokin on my Ex Pack", "--", "1:23"],
    ["12", "Ghost in the Machine", "Phoebe Bridgers", "3:38"],
    ["13", "F2F", "--", "3:05"],
    ["14", "Nobody Gets Me", "--", "3:00"],
    ["15", "Conceited", "--", "2:31"],
    ["16", "Special", "--", "2:38"],
    ["17", "Too late", "--", "2:44"],
    ["18", "Far", "--", "3:00"],
    ["19", "Shirt", "--", "3:01"],
    ["20", "Open Arms", "Travis Scott", "3:59"],
    ["21", "I Hate U", "--", "2:53"],
    ["22", "Good Days", "--", "4:38"],
    ["23", "Forgivless", "Ol'Dirty Bastard", "2:21"]];

    adicionar(album)
});
botao4.addEventListener('click', () => {

    const album = [["1", "Ur", "--", "3:55"],
    ["2", "Childs Play", "Chance the Rapper", "3:36"],
    ["3", "Julia", "--", "3:39"],
    ["4", "Warm Winds", "Isaiah Rashad", "5:50"],
    ["5", "HiiiJack", "--", "3:42"],
    ["6", "Green Mile", "--", "3:34"],
    ["7", "Babylon", "Kendrick Lamar", "3:54"],
    ["8", "Sweet November", "--", "4:03"],
    ["9", "Shattered Ring", "--", "4:05"],
    ["10", "Omega", "--", "4:23"]];

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