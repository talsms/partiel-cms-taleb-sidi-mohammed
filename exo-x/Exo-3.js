// On sélectionne le bouton et l'élément HTML qui va afficher le nombre de clics via l'id.
let btn = document.getElementById('btn');
let compteur = document.getElementById('compteur');
let nombreDeClics = localStorage.getItem('nombreDeClics');

// On récupère le nombre de clics stocké dans le localStorage avec getItem(). Si aucune valeur n'est stockée, on affiche 0.
if (nombreDeClics) {
  compteur.textContent = "Nombre de clics : " + nombreDeClics;
} else {
  compteur.textContent = "Nombre de clics : 0";
}
// On ajoute un écouteur d'événement "click" sur le bouton qui va augmenter le nombre de clics, 
btn.addEventListener('click', function() {
  nombreDeClics++;

  // le stocker dans le localStorage avec la méthode setItem()
  localStorage.setItem('nombreDeClics', nombreDeClics);

  // et mettre à jour l'affichage du compteur avec le nombre de clics actuel.
  compteur.textContent = "Nombre de clics : " + nombreDeClics;
});
