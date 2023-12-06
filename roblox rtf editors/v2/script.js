// Définir une fonction qui transforme le texte en fonction du deuxième argument
function transformText(text, style) {
  // Utiliser un objet pour mapper les styles aux balises HTML
  let styles = {"bold": "<b>", "italic": "<i>", "underline": "<u>", "strike": "<s>"};
  // Vérifier si le style est valide
  if (style in styles) {
    // Ajouter les balises HTML au début et à la fin du texte
    return styles[style] + text + styles[style].replace("<", "</");
  } else {
    // Retourner le texte sans modification
    return text;
  }
}

// Définir une fonction qui change la couleur du texte en fonction du deuxième argument
function changeColor(text, color) {
  // Utiliser un objet pour mapper les couleurs aux codes RGB
  let colors = {"red": "rgb(255,0,0)", "green": "rgb(0,255,0)", "blue": "rgb(0,0,255)", "orange": "rgb(255,125,0)", "purple": "rgb(128,0,128)", "yellow": "rgb(255,255,0)"};
  // Vérifier si la couleur est valide
  if (color in colors) {
    // Ajouter la balise <font> avec l'attribut color au début du texte
    return '<font color="' + colors[color] + '">' + text;
  } else {
    // Retourner le texte sans modification
    return text;
  }
}

// Définir une fonction qui ferme la balise <font> à la fin du texte
function closeFont(text) {
  // Ajouter la balise </font> à la fin du texte
  return text + "</font>";
}

// Définir une fonction qui applique un style au texte en fonction du bouton cliqué
function applyStyle(style) {
  // Récupérer l'élément input qui contient le texte à transformer
  let input = document.getElementById("input");
  // Récupérer l'élément output qui affiche le texte transformé
  let output = document.getElementById("output");
  // Transformer le texte en fonction du style
  let transformedText = transformText(input.value, style);
  // Afficher le texte transformé dans l'élément output
  output.value = transformedText;
}

// Définir une fonction qui change la couleur du texte en fonction du curseur
function applyColor() {
  // Récupérer l'élément input qui contient le texte à transformer
  let input = document.getElementById("input");
  // Récupérer l'élément output qui affiche le texte transformé
  let output = document.getElementById("output");
  // Récupérer l'élément color qui contient la valeur du curseur
  let color = document.getElementById("color");
  // Définir un tableau qui contient les noms des couleurs
  let colorNames = ["red", "green", "blue", "orange", "purple"];
  // Changer la couleur du texte en fonction de la valeur du curseur
  let coloredText = changeColor(input.value, colorNames[color.value]);
  // Afficher le texte coloré dans l'élément output
  output.value = coloredText;
  // Récupérer l'élément preview qui affiche la couleur choisie
  let preview = document.getElementById("preview");
  // Changer la couleur de fond de l'élément preview
  preview.style.backgroundColor = colors[colorNames[color.value]];
}
