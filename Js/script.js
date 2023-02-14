const button = document.querySelector('#random');
const img = document.querySelector('#img');

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 25 + 1);
//=========================================================================================
    console.log(random)
//=========================================================================================
    let res = document.querySelector('#res');
    res.innerHTML = ``

    switch(random) {
        case 1:
            img.src = 'image/Ayaka-icon.jpg'
            res.innerHTML = `Ayaka - Genshin Impact`
        break;
        case 2:
            img.src = 'image/Beidou-icon.jpg'
            res.innerHTML = `Beidou - Genshin Impact`
        break; 
        case 3:
            img.src = 'image/Ei-icon.jpg'
            res.innerHTML = `Ei - Genshin Impact`
        break;
        case 4:
            img.src = 'image/Eula-icon.jpg'
            res.innerHTML = `Eula - Genshin Impact`
        break; 
        case 5:
            img.src = 'image/icon.jpg'
            res.innerHTML = `Yoimiya- Genshin Impact`
        break;
        case 6:
            img.src = 'image/Keqing.jpg'
            res.innerHTML = `Keqing - Genshin Impact`
        break;
        case 7:
            img.src = 'image/kokomi-icon.jpg'
            res.innerHTML = `Kokomi- Genshin Impact`
        break;
        case 8:
            img.src = 'image/Nilou.jpg'
            res.innerHTML = `Nilou - Genshin Impact`
        break;
        case 9:
            img.src = 'image/shenshe.jpg'
            res.innerHTML = `Shenshe- Genshin Impact`
        break;
        case 10:
            img.src = 'image/Yae-icon.jpg'
            res.innerHTML = `Yae Miko- Genshin Impact`
        break;
        case 11:
            img.src = 'image/Yelan-icon.jpg'
            res.innerHTML = `Yelan- Genshin Impact`
        break;
        case 12:
            img.src = 'image/2b.jpg'
            res.innerHTML = `2B - Nier: Automata`
        break;
        case 13:
            img.src = 'image/Akame.jpg'
            res.innerHTML = `Akame - Akame ga Kill`
        break;
        case 14:
            img.src = 'image/Astolfo.jpg'
            res.innerHTML = `Astolfo - Fate Apocrypha`
        break;
        case 15:
            img.src = 'image/esdeath.jpg'
            res.innerHTML = `Esdeath - Akame Ga Kill`
        break;
        case 16:
            img.src = 'image/haku.jpg'
            res.innerHTML = `Haku - Naruto`
        break;
        case 17:
            img.src = 'image/inori.jpg'
            res.innerHTML = `Inori - Guilty Crown`
        break;
        case 18:
            img.src = 'image/jeanne.jpg'
            res.innerHTML = `Jeanne - Fate Apocrypha`
        break;
        case 19:
            img.src = 'image/kurumi.jpg'
            res.innerHTML = `Kurumi - Date a Live`
        break;
        case 20:
            img.src = 'image/lena.jpg'
            res.innerHTML = `Lena - 86`
        break;
        case 21:
            img.src = 'image/Sakuraku.jpg'
            res.innerHTML = `Sakuraku - Sakuraku-san`
        break;
        case 22:
            img.src = 'image/shikimori.jpg'
            res.innerHTML = `Shikimori - Kawaii Dake`
        break;
        case 23:
            img.src = 'image/vivy.jpg'
            res.innerHTML = `Vivy - Vivy: Fluorite Eye's Song`
        break;
        case 24:
            img.src = 'image/Yukino.jpg'
            res.innerHTML = `Yukino - Oreigairu`
        break;
        case 25:
            img.src = 'image/zero-two.jpg'
            res.innerHTML = `Zero Two - Darling in the fraxx`
        break;
    }
})