const tbody = document.querySelector("tbody");
const botao1 = document.querySelector("#btnAlbum1");
const botao2 = document.querySelector("#btnAlbum2");
const botao3 = document.querySelector("#btnAlbum3");

botao1.addEventListener('click',()=>{
    console.log("1")
    const album=[   ["1", "Beijo de Judas", "--", "2:21"],
                    ["2", "Louca", "--", "2:35"],
                    ["3", "Tentação ", "Luísa Sonza", "2:54"],
                    ["4", "Tatuagem", "--", "2:37"],
                    ["5", "Frank Ocean", "--", "2:33"],
                    ["6", "Sempre Que Der", "Vitão","2:31"],
                    ["7", "Inveja", "--", "2:55"],
                    ["8", "Raio X", "Dilsinho", "3:14"],
                    ["9", "Desgrama", "--", "2:44"],
                    ["10", "Rolê", "Gloria Groove", "3:07"]];
    adicionar(album);
});

botao2.addEventListener('click', ()=>{
    console.log("2")
    const album =[  ["1", "ASREVER", "--", "0:34"],
                    ["2", "MALA MEMO", "--", "2:16"],
                    ["3", "BRINCA COM A...", "--", "3:02"],
                    ["4", "GAROTA INFERNAL", "--", "2:29"],
                    ["5", "GLITTER", "--", "2:24"],
                    ["6", "EX NÃO AMA", "--", "2:36"],
                    ["7", "DESSA VEZ NÃO", "--", "2:45"],
                    ["8", "INÍCIO DO FIM", "--", "3:06"],
                    ["9", "POUCO", "--", "0:44"],
                    ["10","CAOS PERFEITO", "--", "2:23"],
                    ["11","PLAYLIST DE SEXO","--", "2:38"],
                    ["12","BACARDI", "--", "2:35"],
                    ["13","MENTA COM CHÁ", "--", "2:30"],
                    ["14","FICA PRO CAFÉ", "--", "2:30"],
                    ["15","ligações de alma", "Baco Exu do Blues", "2:59"],
                    ["16","pouco [mas nem tão pouco assim]", "--", "3:07"],
                    ["17", "glitter [ao vivo]", "--", "3:16"],
                    ["18","real valor", "Marina Sena, Vulgo FK", "3:40"],
                    ["19","isso é tão 2007", "--", "2:08"]];

                    adicionar(album);
});
botao3.addEventListener('click', ()=>{
 
    const album = [ ["1", "Menina do Interior", "--", "3:12"],
                    ["2", "(Não) Quero Me Apaixonar", "--", "2:50"],
                    ["3", "Low Profile", "--", "2:02"],
                    ["4", "1697", "--", "3:02"],
                    ["5", "Tr*nsANte", "--", "2:26"],
                    ["6", "Corações de Pedra", "Duquesa", "2:27"],
                    ["7", "Amor Traumatizado", "--", "3:11"],
                    ["8", "''Casula''", "--", "2:59"],
                    ["9", "Você", "--", "2:57"],
                    ["10", "Consversei com Deus", "--", "2:52"]];

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