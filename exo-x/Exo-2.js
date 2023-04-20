// On commence par sélectionner le bouton et le div dans lequel on va ajouter les images grâce à leur id.
let btn = document.getElementById('btn');
let images = document.getElementById('images');

// On ajoute un écouteur d'événement "click" sur le bouton qui va créer une balise img et lui ajouter un attribut src contenant l'URL de l'image.
btn.addEventListener('click', function() {
  let img = document.createElement('img');
  img.setAttribute('src', 'MIB.jpg');

  // Enfin, on ajoute cette balise img dans le div images en utilisant la méthode appendChild().
  images.appendChild(img);
});

