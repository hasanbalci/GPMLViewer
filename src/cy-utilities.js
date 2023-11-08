import cytoscape from 'cytoscape';

let cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)' || '',
        'width': (node) => {return node.data('bbox').w}, 
        'height': (node) => {return node.data('bbox').h},
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
      selector: 'node[class = "GeneProduct"]',
      style: {
        'shape': 'rectangle',
        'border-width': 1,
        'background-color': '#ffffff',
        'border-color': '#000000',
        'font-size': (node) => {return node.data('style').fontSize || 10},
      }
    },
    {
      selector: 'node[class = "Metabolite"]',
      style: {
        'shape': 'rectangle',
        'border-width': 1,
        'background-color': '#ffffff',
        'border-color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'font-size': (node) => {return node.data('style').fontSize || 10},
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'}
      }
    },
    {
      selector: 'node[class = "Label"]',
      style: {
        'shape': 'rectangle',
        'border-width': 0,
        'background-color': '#ffffff',
        'font-size': (node) => {return node.data('style').fontSize || 10},
        'font-weight': (node) => {return 'bold'},
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'text-wrap': 'wrap'
      }
    },
    {
      selector: 'node[class = "Shape"]',
      style: {
        'shape': (node) => {return node.data('style').shapeType ? 'round-rectangle' : 'rectangle'},
        'border-width': (node) => {return node.data('style').lineThickness ? parseFloat(node.data('style').lineThickness) : 1},
        'background-color': '#ffffff',
        'color': (node) => {return node.data('style').color ? ('#' + node.data('style').color) : '#000000'},
        'text-wrap': 'wrap'
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
      selector: 'edge',
      style: {
        'line-color': (edge) => {return edge.data('style').color ? ('#' + edge.data('style').color) : '#000000'},
        'curve-style': 'straight',
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
        'target-arrow-fill': 'hollow'
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
