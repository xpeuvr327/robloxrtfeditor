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

// Définir une fonction qui change la couleur du texte en fonction des valeurs RGB
function changeRGB(text, red, green, blue) {
  // Convertir les valeurs RGB en une chaîne de caractères
  let rgb = "rgb(" + red + "," + green + "," + blue + ")";
  // Ajouter la balise <font> avec l'attribut color au début du texte
  return '<font color="' + rgb + '">' + text;
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

// Définir une fonction qui change la couleur du texte en fonction des curseurs RGB
function applyRGB() {
  // Récupérer l'élément input qui contient le texte à transformer
  let input = document.getElementById("input");
  // Récupérer l'élément output qui affiche le texte transformé
  let output = document.getElementById("output");
  // Récupérer les éléments red, green et blue qui contiennent les valeurs des curseurs RGB
  let red = document.getElementById("red");
  let green = document.getElementById("green");
  let blue = document.getElementById("blue");
  // Changer la couleur du texte en fonction des valeurs RGB
  let coloredText = changeRGB(input.value, red.value, green.value, blue.value);
  // Afficher le texte coloré dans l'élément output
  output.value = coloredText;
  // Récupérer l'élément preview qui affiche la couleur choisie
  let preview = document.getElementById("preview");
  // Changer la couleur de fond de l'élément preview
  preview.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}

// Définir une fonction qui détecte les raccourcis clavier et applique le style correspondant
function detectShortcut(event) {
  // Récupérer le code de la touche appuyée
  let key = event.keyCode;
  // Vérifier si la touche Ctrl est enfoncée
  if (event.ctrlKey) {
    // Vérifier si la touche B, I, U ou S est appuyée
    if (key == 66) { // B
      // Appliquer le style gras
      applyStyle('bold');
    } else if (key == 73) { // I
      // Appliquer le style italique
      applyStyle('italic');
    } else if (key == 85) { // U
      // Appliquer le style souligné
      applyStyle('underline');
    } else if (key == 83) { // S
      // Appliquer le style barré
      applyStyle('strike');
    }
  }
}

// Ajouter un écouteur d'événement sur l'élément input pour détecter les raccourcis clavier
document.getElementById("input").addEventListener("keydown", detectShortcut);
