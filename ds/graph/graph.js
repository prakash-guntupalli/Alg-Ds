// A graph consists of nodes/points and connections between them
// maps, social networking, advertiser targeting, recommendations, modelling users

// undirected graph - no direction , sets of unordered nodes
// directed graph - directed, ordered pairs of nodes

// weighted graphs - values assigned to connections (between nodes)
// unweighted graphs - no value associated to connections

// Adjecency Matrix & Adjacency List are two ways to represent or storing graphs



// Adjacency List - Undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // add vertex (node)
    addVertex(vertex) {
        //todo: if condition to check if already the vertex exist
        this.adjacencyList[vertex] = []
    }
    // add connections (edges)
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    // remove connections
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v =>
            v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v =>
            v !== vertex1
        );
    }
} 

let g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Berlin");
g.addVertex("Denver");

g.addEdge("Tokyo", "Denver");
// adjacencyList:
// Berlin: []
// Denver: ["Tokyo"]
// Tokyo: ["Denver"]