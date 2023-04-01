const { Graph, Vertex, Edge } = require('../index.js');

describe('Graph', () => {
  it('Tests that the addvertex method adds a new vertex to the graph and that the size of the graph increases by 1', () => {
    const graph = new Graph();
    graph.addVertex(1);
    expect(graph.size()).toBe(1);
    graph.addVertex(2);
    expect(graph.size()).toBe(2);
  });

  it('Tests that the size method returns the correct number of nodes in the graph', () => {
    const graph = new Graph();
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    const vertex3 = new Vertex(3);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    expect(graph.size()).toBe(3);
  });

  it('Tests that the addvertex method adds a new vertex to the graph and increases the size of the graph', () => {
    const graph = new Graph();
    graph.addVertex(1);
    expect(graph.size()).toBe(1);
    graph.addVertex(2);
    expect(graph.size()).toBe(2);
  });
  // Tests that the breadthfirst method traverses the graph using the breadth-first approach and invokes the callback function with each visited vertex. tags: [happy path]
  it('test_breadth_first_traversal', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex(1);
    const vertex2 = graph.addVertex(2);
    const vertex3 = graph.addVertex(3);
    const vertex4 = graph.addVertex(4);
    graph.addDirectedEdge(vertex1, vertex2);
    graph.addDirectedEdge(vertex1, vertex3);
    graph.addDirectedEdge(vertex2, vertex4);
    graph.addDirectedEdge(vertex3, vertex4);

    const visitedVertices = [];
    const callback = (vertex) => visitedVertices.push(vertex.value);

    graph.breadthFirst(vertex1, callback);

    expect(visitedVertices).toEqual([1, 2, 3, 4]);
  });
  // Tests that the depthfirst method traverses the graph using the depth-first approach and invokes the callback function with each visited vertex. tags: [happy path]
  it('test_depth_first_traversal', () => {
    const graph = new Graph();
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    const vertexD = graph.addVertex('D');
    const vertexE = graph.addVertex('E');
    const vertexF = graph.addVertex('F');
    const vertexG = graph.addVertex('G');

    graph.addDirectedEdge(vertexA, vertexB);
    graph.addDirectedEdge(vertexA, vertexD);
    graph.addDirectedEdge(vertexB, vertexC);
    graph.addDirectedEdge(vertexC, vertexG);
    graph.addDirectedEdge(vertexD, vertexE);
    graph.addDirectedEdge(vertexD, vertexF);
    graph.addDirectedEdge(vertexF, vertexG);

    const visited = [];
    const callback = (vertex) => visited.push(vertex);

    graph.depthFirst(vertexA, callback);

    expect(visited).toEqual(['A', 'D', 'F', 'G', 'E', 'B', 'C']);
  });

  it('Tests that the getneighbors method returns a collection of edges connected to the given vertexeighbors', () => {
    const graph = new Graph();
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');

    graph.addDirectedEdge(vertexA, vertexB);
    graph.addDirectedEdge(vertexA, vertexC);

    const neighbors = graph.getNeighbors(vertexA);

    expect(neighbors.length).toBe(2);
    expect(neighbors[0].vertex).toBe(vertexB);
    expect(neighbors[1].vertex).toBe(vertexC);
  });
  // Tests that the size method returns the total number of nodes in the graph. tags: [happy path, edge case]
  it('test_size', () => {
    const graph = new Graph();
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');

    expect(graph.size()).toBe(3);

    graph.addDirectedEdge(vertexA, vertexB);

    expect(graph.size()).toBe(3);
  });
});
