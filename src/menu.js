import {cy} from './cy-utilities';
import convert from 'sbgnml-to-cytoscape';

$("body").on("change", "#inputFile", function(e, fileObject) {
  var inputFile = this.files[0] || fileObject;

  if (inputFile) {
    var fileExtension = inputFile.name.split('.').pop();
    var r = new FileReader();
    r.onload = function(e) {
      cy.remove(cy.elements());
      var content = e.target.result;
      content = convert(content);
      console.log(content)
      cy.json({elements: content});
      cy.nodes().forEach((node) => {
        node.position({x: node.data('bbox').x, y: node.data('bbox').y})
      });
    };
    r.addEventListener('loadend', function(){
    });
    r.readAsText(inputFile);
  } else { 
    alert("Failed to load file");
  }
  $("#inputFile").val(null);
});

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function loadXMLDoc(fileName) {
	var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else // for IE 5/6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", fileName, false);
    xhttp.send();
    return xhttp.response;
}

function loadSample(fileName){
	var xmlResponse = loadXMLDoc(fileName);

	var fileObj = new File([xmlResponse], fileName, {
		type: "text/plain"
	});

	return fileObj;
}

$("body").on("change", "#samples", function() {
	let samples = document.getElementById("samples");
  let filename = samples.options[samples.selectedIndex].value;
	let graph = loadSample("samples/"+filename+".gpml");
	$("#inputFile").trigger("change", [graph]);
});



