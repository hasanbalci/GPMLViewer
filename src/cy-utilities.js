import cytoscape from 'cytoscape';

let cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  wheelSensitivity: 0.1,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)' || '',
        'width': (node) => {return node.data('bbox') ? node.data('bbox').w: 30}, 
        'height': (node) => {return node.data('bbox') ? node.data('bbox').h : 30},
        'text-valign': 'center',
        'z-index': (node) => {return node.data('style').zOrder ? node.data('style').zOrder : 0},
      }
    },
    {
      selector: 'node[!label]',
      style: {
        'label': ''
      }
    },
    {
      selector: 'node[class = "GeneProduct"], node[class = "Protein"]',
      style: {
        'shape': 'rectangle',
        'border-width': 1,
        'background-color': '#ffffff',
        'border-color': '#000000',
        'font-size': (node) => {return node.data('style').fontSize ? node.data('style').fontSize : 10},
        'font-weight': (node) => { 
          if(node.data('style').fontWeight) {
            if(node.data('style').fontWeight == 'Normal') 
              return 'normal';
            else if (node.data('style').fontWeight == 'Bold')
              return 'bold';
            else
              return 'normal';
          }
          else {
            return 'normal';
          }
        }
      }
    },
    {
      selector: 'node[class = "Metabolite"]',
      style: {
        'shape': 'rectangle',
        'border-width': 1,
        'background-color': '#ffffff',
        'border-color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'font-size': (node) => {return node.data('style').fontSize ? node.data('style').fontSize : 10},
        'font-weight': (node) => { 
          if(node.data('style').fontWeight) {
            if(node.data('style').fontWeight == 'Normal') 
              return 'normal';
            else if (node.data('style').fontWeight == 'Bold')
              return 'bold';
            else
              return 'normal';
          }
          else {
            return 'normal';
          }
        },
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'}
      }
    },
    {
      selector: 'node[class = "Pathway"]',
      style: {
        'shape': (node) => 
        { 
          if(node.data('style').shapeType) {
            if(node.data('style').shapeType == 'Rectangle') 
              return 'rectangle';
            else if (node.data('style').shapeType == 'RoundedRectangle')
              return 'round-rectangle'
            else if (node.data('style').shapeType == 'Oval')
              return 'ellipse' 
            else 
              return 'rectangle' 
          }
          else {
            return 'rectangle';
          }
        },
        'border-width': (node) => {return node.data('style').shapeType ? 1 : 0},
        'background-color': '#ffffff',
        'border-color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'font-size': (node) => {return node.data('style').fontSize ? node.data('style').fontSize : 10},
        'font-weight': (node) => {return 'bold'},
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'text-wrap': 'wrap'
      }
    },    
    {
      selector: 'node[class = "Label"]',
      style: {
        'shape': (node) => 
        { 
          if(node.data('style').shapeType) {
            if(node.data('style').shapeType == 'Rectangle') 
              return 'rectangle';
            else if (node.data('style').shapeType == 'RoundedRectangle')
              return 'round-rectangle'
            else if (node.data('style').shapeType == 'Oval')
              return 'ellipse' 
            else 
              return 'rectangle' 
          }
          else {
            return 'rectangle';
          }
        },
        'border-width': (node) => {return node.data('style').shapeType ? 1 : 0},
        'background-color': '#ffffff',
        'border-color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'font-size': (node) => {return node.data('style').fontSize ? node.data('style').fontSize : 10},
        'font-weight': (node) => {return 'bold'},
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'text-wrap': 'wrap'
      }
    },
    {
      selector: 'node[class = "Shape"]',
      style: {
        'shape': (node) => 
        { 
          if(node.data('style').shapeType) {
            if(node.data('style').shapeType == 'Rectangle') 
              return 'rectangle';
            else if (node.data('style').shapeType == 'RoundedRectangle')
              return 'round-rectangle'
            else if (node.data('style').shapeType == 'Oval')
              return 'ellipse' 
            else 
              return 'rectangle' 
          }
          else {
            return 'rectangle';
          }
        },
        'border-width': (node) => {return node.data('style').lineThickness ? parseFloat(node.data('style').lineThickness) : 1},
        'border-style': 'double',
        'background-color': '#ffffff',
        'border-color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'text-wrap': 'wrap',
        'background-opacity': 0      
      }
    },
    {
      selector: 'node[class = "Group"]',
      style: {
        'shape': (node) => 
        { 
          if(node.data('style')) {
            if(node.data('style') == 'Group') 
              return 'rectangle';
            else if (node.data('style') == 'Complex')
              return 'cut-rectangle'
          }
          else {
            return 'rectangle';
          }
        },
        'border-width': (node) => {return node.data('style') == 'Group' ? 0 : 1},
        'border-style': (node) => {return node.data('style') == 'Complex' ? 'solid' : 'dashed'},
        'background-color': (node) => 
        { 
          if(node.data('style')) {
            if(node.data('style') == 'Group') 
              return '#ffffff';
            else if (node.data('style') == 'Complex')
              return '#f7f7ef'
            else
              return '#f7f7ef';
          }
          else {
            return '#f7f7ef';
          }
        },
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'text-wrap': 'wrap',
        'background-opacity': 1
      }
    },    
    {
      selector: 'node[class = "Anchor"]',
      style: {
        'shape': 'rectangle',
        'border-width': 0,
        'background-color': '#000000',
        'color': '#000000'
      }
    },
    {
      selector: 'node[class = "DummyNode"]',
      style: {
        'shape': 'rectangle',
        'border-width': 0,
        'background-color': '#000000',
        'color': '#000000'
      }
    },    
    {
      selector: 'edge',
      style: {
        'line-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'curve-style': 'bezier',
        'line-style': (edge) => 
          { 
            if(edge.data('style').lineStyle) {
              if(edge.data('style').lineStyle == 'Broken') 
                return 'dashed'; 
            }
            else {
              return 'solid';
            }
          },
        'width': (edge) => {return edge.data('style').lineThickness || 1},
        'z-index': (edge) => {return edge.data('style').zOrder ? edge.data('style').zOrder : 0},
      }
    },
    {
      selector: 'edge[class = "mim-catalysis"]',
      style: {
        'target-arrow-shape': 'circle',
        'target-arrow-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'target-arrow-fill': 'hollow'
      }
    },
    {
      selector: 'edge[class = "mim-binding"]',
      style: {
        'target-arrow-shape': 'vee',
        'target-arrow-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'target-arrow-fill': 'filled'
      }
    },
    {
      selector: 'edge[class = "mim-inhibition"]',
      style: {
        'target-arrow-shape': 'tee',
        'target-arrow-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'target-arrow-fill': 'filled'
      }
    },
    {
      selector: 'edge[class = "mim-transcription-translation"]',
      style: {
        'target-arrow-shape': 'triangle-tee',
        'target-arrow-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'target-arrow-fill': 'filled'
      }
    },
    {
      selector: 'edge[class = "Arrow"], edge[class = "mim-conversion"]',
      style: {
        'target-arrow-shape': 'triangle',
        'target-arrow-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'target-arrow-fill': 'filled'
      }
    },
    {
      selector: 'node:selected',
      style: {
//        'background-color': '#8FBC8F'
      }
    },
    {
      selector: 'edge:selected',
      style: {
//        'line-color': '#8FBC8F'
      }
    }
  ],
});

export {cy};
