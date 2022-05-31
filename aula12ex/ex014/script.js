function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    //var hora = data.getHours()
    //var minuto = data.getMinutes()
    var hora = 13
    var minuto = 23
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fa712c'
    } else if (hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#ed824b'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#7b6298'
    }
}