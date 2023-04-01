'use strict';

// $ Define a Vertex Class with a constructor that takes in a value

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// $ Define an Edge Class with a constructor that takes in a vertex and a weight

class Edge {
  constructor(vertex, weight = 0) {
    //$ The vertex should be a vertex and the weight should be a number
    this.vertex = vertex;
    this.weight = weight;
  }
}

// $ Define a Graph Class with a constructor that initializes an empty adjacency list

class Graph {
  constructor() {
    // $ The adjacency list should be a Map that uses a vertex as a key and a list of edges as the value
    this.adjacencyList = new Map();
  }

  // $ Define a method called addVertex that takes in a value and adds a new vertex to the graph Map.prototype.set() method sets the value for the key in the Map object. Returns the Map object.

  addVertex(value) {
    const vertex = new Vertex(value);
    // $ The method should add a key to the adjacency list with the vertex as the key and an empty array as the value
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  // $ Define a method called addDirectedEdge that takes in the start and end vertices and a weight (optional) Arguments: 2 nodes to be connected by the edge, weight (optional) The function should create a new edge and add it to the adjacency list for both nodes If specified, assign a weight to the edge Both nodes should already be in the Graph

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    const neighbor = this.adjacencyList.get(startVertex);

    neighbor.push(new Edge(endVertex, weight));
  }
  // $ Define a method called getNodes that returns all of the nodes in the graph as a collection (set, list, or similar)

  getNodes() {
    let iterator = this.adjacencyList.keys();
    // $ The method should return a collection of all the nodes in the graph
    return iterator;
  }

  // $ Define a method called getNeighbors that takes in a vertex and returns a collection of edges connected to that vertex

  getNeighbors(vertex) {
    // $ The method should return a collection of edges connected to the given vertex
    return [...this.adjacencyList.get(vertex)];
  }

  // $ Define a method called size that returns the total number of nodes in the graph

  size() {
    if (this.adjacencyList.size) {
      return this.adjacencyList.size;
    } else {
      // else return an empty collection
      return 0;
    }
  }

  //$ Define a method called breadthFirst that takes in a starting vertex and a callback function. Arguments: starting vertex, callback function The function should traverse the graph using the breadth-first approach, invoking the callback function with each vertex that is visited

  breadthFirst(root, callback) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (queue.length) {
      current = queue.pop();
      if (callback) {
        callback(current);
      }
      // grab the neighbors
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }

  depthFirst(root, callback) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      // the first time, we pop the vertex
      current = stack.pop();

      // if a callback exists, we use it to "do the thing"
      if (callback) {
        callback(current.value);
      }

      // grab neighbor if it exists
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }
}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

graph.breadthFirst(A, console.log);
console.log('-------------------');
graph.depthFirst(A, console.log);
console.log('-------------------');
console.log(graph.size());

module.exports = {
  Graph,
  Vertex,
  Edge,
};
