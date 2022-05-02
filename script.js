window.document.querySelector('input#buttone').addEventListener('click', verificar)

function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.querySelector('input#txtano') //f ano para formulário ano
  var res = window.document.querySelector('div#res')

  if (fano.value.lenght == 0 || Number(fano.value) > ano) { // Uso do Number acaba sendo opcinal para deixar explicito que queremmos comprar os números
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto') // Adicionando o id foto a imagem
    img.style.border = '1px solid black' // Editando o estilo da imagem
    img.style.borderRadius = '50%'
    
    var genero = ''
    if (fsex[0].checked) { // Caso a primeira opção esteja marcada
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', '/img/baby-maggie-bigode.jpg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', '/img/young-bruce.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', '/img/adult-bruce.png')
      } else {
        //Idoso
        img.setAttribute('src', '/img/old-alfred.jpg')        
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', '/img/young-maggie.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', '/img/young-margie.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', '/img/adult-margie.png')
      } else {
        //Idoso
        img.setAttribute('src', '/img/old-jacqueline.png')  
      }
    }
    res.style.textAlign = 'center' // CSS através do JS
    res.innerHTML = `Gênero marcado é ${genero} e sua idade ${idade}`
    res.appendChild(img) // Adicionando o elemento ao HTML, como filho do res (window.document.querySelector('div#res'))
  }
}