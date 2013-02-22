function showTOC_DOM() {
  var nav = document.querySelector('#toc');
  if (!nav)
    return;

  var niveau = nav.dataset.level || 4; //kinou
  var titre = '';

  for (var j = 2; j < niveau; j++) {//kinou pas fini 
    titre += 'h' + j + ', ' ;
  }
  titre += 'h' + niveau;
  var titles = document.querySelectorAll(titre);
  var liste = document.createElement('ul');

  for (var i = 0; i < titles.length - 1; i++) {
    var id    = titles[i].id;
    var tag   = titles[i].tagName;
    var texte = titles[i].textContent;

    var noeudTexte = document.createTextNode(texte);
    var li         = document.createElement('li');

    if (id) {
      var lien = document.createElement('a');
      lien.href = '#' + id;
      lien.appendChild(noeudTexte);
      li.appendChild(lien);
    } else {
      li.appendChild(noeudTexte);
    }
    liste.appendChild(li);
  }

  nav.appendChild(liste);
}

function showTOC_innerHTML() {
  var nav = document.querySelector('#toc');
  if (!nav)
    return;

  nav.innerHTML = '\n';
  var titles = document.querySelectorAll('h2, h3, h4, h5, h6');

  for (var i = 0; i < titles.length - 1; i++) {
    var id    = titles[i].id;
    var tag   = titles[i].tagName;
    var texte = titles[i].textContent;

    if (id) {
      var lien = '<a href="#' + id + '">' + texte + '</a>';
      nav.innerHTML += lien;
    } else {
      nav.innerHTML += texte;
    }
    nav.innerHTML += '<br />\n';
  }
}

/**
 * Idée pour la suite :
 *
 * faire en sorte d’aller chercher les [N] niveaux de titres,
 * [N] étant défini par l’attribut “data-level” de #toc.
 *
 * Évidemment, il faut penser à utiliser une valeur par défaut.
 */
 
window.onload = showTOC_DOM;

