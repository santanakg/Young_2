let data = new Date()
//let hora = data.getHours()
let hora = window.prompt('que horas são ?')

let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let corpo = document.getElementsByTagName('body')

let manhã = 'https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg' 
let tarde = 'https://metsul.com/wp-content/uploads/2021/05/22C3C0B5-E123-44D9-AF81-8C262EE5B495-1280x640.png'
let noite = 'https://img.freepik.com/fotos-premium/linda-noite-no-oceano-com-lua-cheia_104785-866.jpg'

msg.innerHTML = `Agora são exatamente ${hora} horas.`

if (hora >= 4 && hora < 12){
    corpo[0].style.background = '#ef9e2d'
    img.src = manhã
}
else if (hora <= 18){
    corpo[0].style.background = '#ee5412'
   img.src = tarde
}
else{
    corpo[0].style.background = '#002a36'
    img.src = noite
}
