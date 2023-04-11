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

  // $ Define a method called depthFirst that takes in a starting vertex and a callback function. Arguments: starting vertex, callback function The function should traverse the graph using the depth-first approach, invoking the callback function with each vertex that is visited

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
// $ Define a method called businessTrip that takes in a graph and an array of city names. Arguments: graph, array of city names The function should return the total cost of the trip. If the trip is not possible, return $0 with a message

const businessTrip = (graph, cities) => {
  let cost = 0;
  let currentCity = null;
  let nextCity = null;
  let connection = false;
  while (cities.length) {
    currentCity = cities.shift();
    if (!cities.length) {
      return cost;
    } else {
      nextCity = cities[0];
      const neighbors = graph.getNeighbors(currentCity);
      for (let neighbor of neighbors) {
        if (neighbor.vertex === nextCity) {
          cost += neighbor.weight;
          connection = true;
        }
      }
      if (!connection) return null;
      connection = false;
    }
  }
  return cost;
};

// $ Define a method called isConnected that takes in a graph and two nodes. Arguments: graph, two nodes The function should return a boolean indicating whether or not the two nodes are connected

const isConnected = (graph, nodeA, nodeB) => {
  const stack = [];
  const visited = new Set();

  stack.push(nodeA);
  visited.add(nodeA);
  let currentNode = null;

  while (stack.length) {
    currentNode = stack.pop();

    if (currentNode === nodeB) return true;

    const neighbors = this.getNeighbors(currentNode);
    for (let neighbor of neighbors) {
      const neighborNode = neighbor.vertex;
      if (visited.has(neighborNode)) {
        continue;
      } else {
        visited.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  return false;
};

module.exports = { Graph, Vertex, Edge, isConnected, businessTrip };
