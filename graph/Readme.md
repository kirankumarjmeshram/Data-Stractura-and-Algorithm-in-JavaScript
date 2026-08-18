# Graphs — Data Structure

A **Graph** is a non-linear data structure used to represent relationships between objects.

## Types

* **Undirected Graph** — edges have no direction.
* **Directed Graph (Digraph)** — edges have a direction.
* **Weighted Graph** — edges have a cost/weight.
* **Unweighted Graph** — edges have no weight.
* **Cyclic Graph** — contains a cycle.
* **Acyclic Graph** — contains no cycle.
* **Connected Graph** — every vertex is reachable.
* **Disconnected Graph** — some vertices are not reachable.

## Representation

### 1. Adjacency Matrix

```js
const graph = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
];
```

`graph[i][j] = 1` means an edge exists between `i` and `j`.

### 2. Adjacency List

```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"]
};
```

## Basic Graph

```js
const graph = new Map();

graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D"]);
graph.set("C", ["A"]);
graph.set("D", ["B"]);
```

## Common Algorithms

* **BFS** — Breadth-First Search
* **DFS** — Depth-First Search
* **Dijkstra** — Shortest path in weighted graphs
* **Bellman-Ford** — Shortest path with negative weights
* **Floyd-Warshall** — All-pairs shortest path
* **Topological Sort** — Ordering vertices in a DAG
* **Kruskal / Prim** — Minimum Spanning Tree

## Complexity

For an adjacency list:

* **Space:** `O(V + E)`
* **BFS:** `O(V + E)`
* **DFS:** `O(V + E)`

Where:

* `V` = number of vertices
* `E` = number of edges
