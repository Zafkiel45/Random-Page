const button = document.querySelector('#random');
const img = document.querySelector('#img');

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 11 + 1);
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
    }
})