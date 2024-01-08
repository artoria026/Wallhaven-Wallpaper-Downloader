// Obtener todos los elementos <section> con la clase "thumb-listing-page"
var sections = document.querySelectorAll('section.thumb-listing-page');

// Crear un objeto para almacenar los URLs agrupados por sección
var dataToSave = {};

// Iterar a través de las secciones
sections.forEach(function(section, index) {
  // Obtener todos los elementos <a> con la clase "preview" dentro de la sección actual
  var previewLinks = section.querySelectorAll('a.preview');
  
  // Crear un array para almacenar los URLs dentro de esta sección
  var sectionUrls = [];
  
  // Iterar a través de los elementos <a> de vista previa dentro de la sección
  previewLinks.forEach(function(link) {
    // Obtener el valor del atributo "href" de cada elemento <a> y agregarlo al array
    sectionUrls.push(link.getAttribute('href'));
  });
  
  // Agregar los URLs de esta sección al objeto de datos
  dataToSave['Sección ' + (index + 1)] = sectionUrls;
});

// Convertir el objeto de datos a formato JSON
var jsonData = JSON.stringify(dataToSave, null, 2);

// Crear un elemento de descarga de archivo
var downloadLink = document.createElement('a');
downloadLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonData);
downloadLink.download = 'urls.json';

// Simular un clic en el enlace de descarga
downloadLink.click();