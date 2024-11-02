const tbody = document.querySelector("tbody");
const botao1 = document.querySelector("#btnAlbum1");
const botao2 = document.querySelector("#btnAlbum2");
const botao3 = document.querySelector("#btnAlbum3");
const botao4 = document.querySelector("#btnAlbum4");
const botao5 = document.querySelector("#btnAlbum5");
const botao6 = document.querySelector("#btnAlbum6");
const botao7 = document.querySelector("#btnAlbum7");
const botao8 = document.querySelector("#btnEp1");
const botao9 = document.querySelector("#btnEp2");

botao1.addEventListener('click', () => {
    const album = [["1", "Honeymoon Aveneu", "--", "5:39"],
    ["2", "Baby I", "--", "3:17"],
    ["3", "Right There", "Big Sean ", "4:07"],
    ["4", "Tattooed Heart", "--", "3:14"],
    ["5", "Lovin It", "--", "3:00"],
    ["6", "Piano", "--", "3:54"],
    ["7", "Daydreamin'", "--", "3:31"],
    ["8", "The Way", "Mac Miller", "3:47"],
    ["9", "You'll Never Know", "--", "3:34"],
    ["10", "Almost Is Never Enough", "--", "5:27"],
    ["11", "Popular Song", "MIKA", "3:20"],
    ["12", "Better Left Unsaid", "--", "3:31"],
    ["13", "The Way Spanglish version", "Mac Miller", "3:46"],
    ["14", "The Way Spanglish version", "J Balvin", "3:46"]];

    adicionar(album);

});

botao2.addEventListener('click', () => {
    const album = [["1", "Intro", "--", "1:19"],
    ["2", "Problem", "Iggy Azalea", "3:13"],
    ["3", "One Last Time", "--", "3:17"],
    ["4", "Why Try", "--", "3:31"],
    ["5", "Break Free", "Zedd", "3:34"],
    ["6", "Best Mistake", "Big Sean", "3:53"],
    ["7", "Be My Baby", "Cashmere Cat", "3:37"],
    ["8", "Break Your Heart Right Back", "Childish Gambino", "4:12"],
    ["9", " Love Me Harder", " The Weeknd", "3:56"],
    ["10", "Just A Little Bit Of Your Heart", "--", "3:53"],
    ["11", "Hands On Me", " A$AP Ferg", "3:11"],
    ["12", "My Everything", "--", "2:48"],
    ["13", "Bang Bang", "Jessie J and Nick Minaj", "3:19"],
    ["14", "Only 1", "--", "3:14"],
    ["15", "You Don't Know Me", "--", " 3:54"]];

    adicionar(album)
});
botao3.addEventListener('click', ()=>{

    const album =[  ["1","Moonlight", "--", "3:22"],
                    ["2","Dangerous Woman", "--", "3:55"],
                    ["3","Be Alright", "--", "2:59"],
                    ["4","Into You", "--", "4:04"],
                    ["5", "Side to Side", "Nick Minak", "3:46"],
                    ["6", "Let Me Love You", "Lil Wayne", "3:43"],
                    ["7","Greedy", "--", "3:34"],
                    ["8","Leave Me Lonely", "Macy Gray","3:49"],
                    ["9","Everyday", "Future","3:14"],
                    ["10","Sometimes", "--", "3:43"],
                    ["11","I Don't Care","--", "2:58"],
                    ["12", "Bad Decisions", "--", "3:46"],
                    ["13"," Touch it", "--","4:20"],
                    ["14", "Knew Better/ Forever Boy", "--", "4:59"],
                    ["15","Thinking Bout You", "--", "3:20"],
                    ["16", "Step on Up", "--", "3:00"],
                    ["17", "Jason's Song (Gave It Away)", "--"," 4:24"]];
                    
    adicionar(album)
});

botao4.addEventListener('click', ()=>{
    const album = [ ["1","raindrops (an angel cried)", "--", "0:37"],
                    ["2","blazed", "Pharrell Williams","3:16"],
                    ["3","the light is comming", "Nick Minaj", "3:48"],
                    ["4","R.E.M", "--", "4:05"],
                    ["5","God is a woman", "--", "3:17"],
                    ["6","sweetner", "--", "3:28"],
                    ["7","successful", "--","3:47"],
                    ["8","everytime", "--", "2:52"],
                    ["9","breathin", "--", "3:18"],
                    ["10","no tears left to cry", "--", "3:25"],
                    ["11","boderline", "Missy Eliot", "2:57"],
                    ["12","better off", "--", "2:51"],
                    ["13","goodnight n go", "--", "3:09"],
                    ["14","pete davidson", "--","1:13"],
                    ["15","get well soon ", "--", "5:22"]];

    adicionar(album);
})
botao5.addEventListener('click', ()=>{
    const album = [ ["1", "imagine", "--", "3:22"],
                    ["2", "needy", "--","2:51"],
                    ["3", "NASA", "--", "3:02"],
                    ["4", "bloodline", "--","3:36"],
                    ["5", "fake smile", "--", "3:28"],
                    ["6", "bad idea", "--","4:27"],
                    ["7", "make up", "--", "2:20"],
                    ["8", "ghostin", "--", "4:31"],
                    ["9", "in my head", "--", "3:42"],
                    ["10", "7 rings", "--", "2:58"],
                    ["11", "thank u, next", "--", "3:27"],
                    ["12", "break up with your girlfriend, i'm bored", "--", "3:10"]];
    
    adicionar(album);
})

botao6.addEventListener('click', ()=>{
    const album = [ ["1", "shut up", "--", "2:37"],
                    ["2", "34+35", "--", "2:53"],
                    ["3", "motive", "Doja Cat", "2:47"],
                    ["4", "just like magic", "--", "2:29"],
                    ["5", "off the table", "The Weeknd", "3:59"],
                    ["6", "six thirty", "--", "3:03"],
                    ["7", "safety net", "Ty Dolla $ign", "3:28"],
                    ["8", "my hair", "--", "2:38"],
                    ["9", "nasty", "--", "3:20"],
                    ["10", "west side", "--", "2:12"],
                    ["11", "love language", "--", "2:59"],
                    ["12", "positions", "--", "2:52"],
                    ["13", "obvious", "--", "2:26"],
                    ["14", "pov", "--", "3:21"],
                    ["15", "someone like u - interlude", "--","1:16"],
                    ["16", "test drive", "--", "2:02"],
                    ["17", "34+35 Remix", "Doja Cat and Megan Thee Stalion", "3:02"],
                    ["18", "worst behavior", "--", "2:04"],
                    ["19", "main thing", "--", "2:09"]];
    
    adicionar(album);
})

botao7.addEventListener('click', ()=>{
    const album = [ ["1", "intro (end of world)", "--", "1:32"],
                    ["2", "bye", "--","2:44"],
                    ["3", "don't wanna break up again", "--", "2:54"],
                    ["4", "Saturn Returns Interlude", "--", "0:52"],
                    ["5", "eternal sunshine", "--", "3:32"],
                    ["6", "supernatural", "--", "2:43"],
                    ["7", "true story", "--", "2:43"],
                    ["8", "the boy is mine", "--", "2:53"],
                    ["9", "yes, and?", "--", "3:34"],
                    ["10", "we can't be friends (wait for your love)", "--", "3:48"],
                    ["11", "i wish i hated you", "--", "2:33"],
                    ["12", "imperfect for you", "--", "3:02"],
                    ["13", "ordinary things", "Nonna", "2:48"],
                    ["14", "yes, and? - Remix", "Mariah Carey", "3:34"],
                    ["15", "supernatural", "Troye Sivan", "2:43"],
                    ["16", "the boy is mine - Remix", "Brandy and Monica", "3:33"],
                    ["17", "imperfect for you - acoustic", "--", "3:03"],
                    ["18", "intro (end of world) - live version", "--", "1:42"],
                    ["19", "don't wanna break up again - live version", "--", "2:54"],
                    ["20", "eternal sunshine - live version", "--", "3:26"],
                    ["21", "supernatural - live version", "--", "2:43"],
                    ["22", "yes, and? - live version", "--", "3:19"],
                    ["23", "we can't be friends (wait for your love) - live version", "--", "3:24"],
                    ["24", "imperfect for you - live version", "--", "3:06"]];
    
    adicionar(album);
});
botao8.addEventListener('click', ()=>{
    const album=[   ["1", "Last Christmas", "--", "3:23"],
                    ["2", "Love Is Everything", "--", "3:32"],
                    ["3", "Snow In California", "--", "3:26"],
                    ["4", "Santa Baby", "Liz Gillies", "2:50"]];
    adicionar(album);
});
botao9.addEventListener('click', ()=>{
    const album=[   ["1", "Intro", "--", "1:05"],
                    ["2", "Wit It this Christmas", "--", "2:41"],
                    ["3", "December", "--", "1:56"],
                    ["4", "Not Just On Christmas", "--", "2:02"],
                    ["5", "True Love", "--", "2:46"],
                    ["6", "Winter Things", "--", "2:38"],
                    ["7", "Santa Tell Me - Naughty Version", "--", "3:23"]];

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
            tr.classList.add('Songs');
        })
        tbody.appendChild(tr);
    })
}