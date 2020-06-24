function Graph() {
	this.vertices = [];
	this.edges = [];
}

Graph.prototype = {
	addVertex: function(v) {
		this.vertices.push(v);
	}
};

var g = new Graph();
g.addVertex(1);
console.log(g.edges);

Graph.prototype.test = function() { console.log('test') }

g.test()

Graph.prototype = {
	addEdge: function(e) {
		this.edges.push(e)
	}
}

g.addEdge(1)
