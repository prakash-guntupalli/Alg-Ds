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
        this.adjacencyList[vertex] = []
    }
    // add connections (edges)
} 