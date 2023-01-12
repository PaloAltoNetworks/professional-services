"use strict";
exports.id = 732;
exports.ids = [732];
exports.modules = {

/***/ 72732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Graph": () => (/* reexport */ Graph),
  "alg": () => (/* reexport */ alg_namespaceObject),
  "json": () => (/* reexport */ json_namespaceObject)
});

// NAMESPACE OBJECT: ./node_modules/@unovis/graphlibrary/dist/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  "read": () => (read),
  "write": () => (write)
});

// NAMESPACE OBJECT: ./node_modules/@unovis/graphlibrary/dist/alg/index.js
var alg_namespaceObject = {};
__webpack_require__.r(alg_namespaceObject);
__webpack_require__.d(alg_namespaceObject, {
  "components": () => (components),
  "dijkstra": () => (dijkstra),
  "dijkstraAll": () => (dijkstraAll),
  "findCycles": () => (findCycles),
  "floydWarshall": () => (floydWarshall),
  "isAcyclic": () => (isAcyclic),
  "postorder": () => (postorder),
  "preorder": () => (preorder),
  "prim": () => (prim),
  "tarjan": () => (tarjan),
  "topsort": () => (topsort)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/reduce.js + 2 modules
var reduce = __webpack_require__(92344);
// EXTERNAL MODULE: ./node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__(34148);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseFlatten.js + 1 modules
var _baseFlatten = __webpack_require__(10626);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseRest.js
var _baseRest = __webpack_require__(69581);
// EXTERNAL MODULE: ./node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__(63001);
// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayIncludes.js + 3 modules
var _arrayIncludes = __webpack_require__(8538);
// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayIncludesWith.js
var _arrayIncludesWith = __webpack_require__(22783);
// EXTERNAL MODULE: ./node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__(59548);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Set.js
var _Set = __webpack_require__(93203);
// EXTERNAL MODULE: ./node_modules/lodash-es/noop.js
var noop = __webpack_require__(42054);
// EXTERNAL MODULE: ./node_modules/lodash-es/_setToArray.js
var _setToArray = __webpack_require__(6545);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_createSet.js




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set/* default */.Z && (1 / (0,_setToArray/* default */.Z)(new _Set/* default */.Z([,-0]))[1]) == INFINITY) ? noop/* default */.Z : function(values) {
  return new _Set/* default */.Z(values);
};

/* harmony default export */ const _createSet = (createSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUniq.js







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes/* default */.Z,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith/* default */.Z;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return (0,_setToArray/* default */.Z)(set);
    }
    isCommon = false;
    includes = _cacheHas/* default */.Z;
    seen = new _SetCache/* default */.Z;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ const _baseUniq = (baseUniq);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLikeObject.js
var isArrayLikeObject = __webpack_require__(836);
;// CONCATENATED MODULE: ./node_modules/lodash-es/union.js





/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = (0,_baseRest/* default */.Z)(function(arrays) {
  return _baseUniq((0,_baseFlatten/* default */.Z)(arrays, 1, isArrayLikeObject/* default */.Z, true));
});

/* harmony default export */ const lodash_es_union = (union);

// EXTERNAL MODULE: ./node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(49360);
// EXTERNAL MODULE: ./node_modules/lodash-es/forEach.js + 1 modules
var forEach = __webpack_require__(60878);
// EXTERNAL MODULE: ./node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(79697);
// EXTERNAL MODULE: ./node_modules/lodash-es/filter.js + 1 modules
var filter = __webpack_require__(13445);
// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js
var keys = __webpack_require__(17179);
// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__(73234);
// EXTERNAL MODULE: ./node_modules/lodash-es/constant.js
var constant = __webpack_require__(62002);
// EXTERNAL MODULE: ./node_modules/lodash-es/has.js + 1 modules
var has = __webpack_require__(17452);
;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/graph.js












const DEFAULT_EDGE_NAME = '\x00';
const GRAPH_NODE = '\x00';
const EDGE_KEY_DELIM = '\x01'; // Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

function Graph (opts) {
  this._isDirected = (0,has/* default */.Z)(opts, 'directed') ? opts.directed : true;
  this._isMultigraph = (0,has/* default */.Z)(opts, 'multigraph') ? opts.multigraph : false;
  this._isCompound = (0,has/* default */.Z)(opts, 'compound') ? opts.compound : false; // Label for the graph itself

  this._label = undefined; // Defaults to be set when creating a new node

  this._defaultNodeLabelFn = (0,constant/* default */.Z)(undefined); // Defaults to be set when creating a new edge

  this._defaultEdgeLabelFn = (0,constant/* default */.Z)(undefined); // v -> label

  this._nodes = {};

  if (this._isCompound) {
    // v -> parent
    this._parent = {}; // v -> children

    this._children = {};
    this._children[GRAPH_NODE] = {};
  } // v -> edgeObj

  this._in = {}; // u -> v -> Number

  this._preds = {}; // v -> edgeObj

  this._out = {}; // v -> w -> Number

  this._sucs = {}; // e -> edgeObj

  this._edgeObjs = {}; // e -> label

  this._edgeLabels = {};
}
/* Number of nodes in the graph. Should only be changed by the implementation. */

Graph.prototype._nodeCount = 0;
/* Number of edges in the graph. Should only be changed by the implementation. */

Graph.prototype._edgeCount = 0;
/* === Graph functions ========= */

Graph.prototype.isDirected = function () {
  return this._isDirected
};

Graph.prototype.isMultigraph = function () {
  return this._isMultigraph
};

Graph.prototype.isCompound = function () {
  return this._isCompound
};

Graph.prototype.setGraph = function (label) {
  this._label = label;
  return this
};

Graph.prototype.graph = function () {
  return this._label
};
/* === Node functions ========== */

Graph.prototype.setDefaultNodeLabel = function (newDefault) {
  if (!(0,isFunction/* default */.Z)(newDefault)) {
    newDefault = (0,constant/* default */.Z)(newDefault);
  }

  this._defaultNodeLabelFn = newDefault;
  return this
};

Graph.prototype.nodeCount = function () {
  return this._nodeCount
};

Graph.prototype.nodes = function () {
  return (0,keys/* default */.Z)(this._nodes)
};

Graph.prototype.sources = function () {
  var self = this;
  return (0,filter/* default */.Z)(this.nodes(), function (v) {
    return (0,isEmpty/* default */.Z)(self._in[v])
  })
};

Graph.prototype.sinks = function () {
  var self = this;
  return (0,filter/* default */.Z)(this.nodes(), function (v) {
    return (0,isEmpty/* default */.Z)(self._out[v])
  })
};

Graph.prototype.setNodes = function (vs, value) {
  var args = arguments;
  var self = this;

  (0,forEach/* default */.Z)(vs, function (v) {
    if (args.length > 1) {
      self.setNode(v, value);
    } else {
      self.setNode(v);
    }
  });

  return this
};

Graph.prototype.setNode = function (v, value) {
  if ((0,has/* default */.Z)(this._nodes, v)) {
    if (arguments.length > 1) {
      this._nodes[v] = value;
    }

    return this
  }

  this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);

  if (this._isCompound) {
    this._parent[v] = GRAPH_NODE;
    this._children[v] = {};
    this._children[GRAPH_NODE][v] = true;
  }

  this._in[v] = {};
  this._preds[v] = {};
  this._out[v] = {};
  this._sucs[v] = {};
  ++this._nodeCount;
  return this
};

Graph.prototype.node = function (v) {
  return this._nodes[v]
};

Graph.prototype.hasNode = function (v) {
  return (0,has/* default */.Z)(this._nodes, v)
};

Graph.prototype.removeNode = function (v) {
  var self = this;

  if ((0,has/* default */.Z)(this._nodes, v)) {
    var removeEdge = function (e) {
      self.removeEdge(self._edgeObjs[e]);
    };

    delete this._nodes[v];

    if (this._isCompound) {
      this._removeFromParentsChildList(v);

      delete this._parent[v];

      (0,forEach/* default */.Z)(this.children(v), function (child) {
        self.setParent(child);
      });

      delete this._children[v];
    }

    (0,forEach/* default */.Z)((0,keys/* default */.Z)(this._in[v]), removeEdge);

    delete this._in[v];
    delete this._preds[v];

    (0,forEach/* default */.Z)((0,keys/* default */.Z)(this._out[v]), removeEdge);

    delete this._out[v];
    delete this._sucs[v];
    --this._nodeCount;
  }

  return this
};

Graph.prototype.setParent = function (v, parent) {
  if (!this._isCompound) {
    throw new Error('Cannot set parent in a non-compound graph')
  }

  if ((0,isUndefined/* default */.Z)(parent)) {
    parent = GRAPH_NODE;
  } else {
    // Coerce parent to string
    parent += '';

    for (var ancestor = parent; !(0,isUndefined/* default */.Z)(ancestor); ancestor = this.parent(ancestor)) {
      if (ancestor === v) {
        throw new Error('Setting ' + parent + ' as parent of ' + v + ' would create a cycle')
      }
    }

    this.setNode(parent);
  }

  this.setNode(v);

  this._removeFromParentsChildList(v);

  this._parent[v] = parent;
  this._children[parent][v] = true;
  return this
};

Graph.prototype._removeFromParentsChildList = function (v) {
  delete this._children[this._parent[v]][v];
};

Graph.prototype.parent = function (v) {
  if (this._isCompound) {
    var parent = this._parent[v];

    if (parent !== GRAPH_NODE) {
      return parent
    }
  }
};

Graph.prototype.children = function (v) {
  if ((0,isUndefined/* default */.Z)(v)) {
    v = GRAPH_NODE;
  }

  if (this._isCompound) {
    var children = this._children[v];

    if (children) {
      return (0,keys/* default */.Z)(children)
    }
  } else if (v === GRAPH_NODE) {
    return this.nodes()
  } else if (this.hasNode(v)) {
    return []
  }
};

Graph.prototype.predecessors = function (v) {
  var predsV = this._preds[v];

  if (predsV) {
    return (0,keys/* default */.Z)(predsV)
  }
};

Graph.prototype.successors = function (v) {
  var sucsV = this._sucs[v];

  if (sucsV) {
    return (0,keys/* default */.Z)(sucsV)
  }
};

Graph.prototype.neighbors = function (v) {
  var preds = this.predecessors(v);

  if (preds) {
    return lodash_es_union(preds, this.successors(v))
  }
};

Graph.prototype.isLeaf = function (v) {
  var neighbors;

  if (this.isDirected()) {
    neighbors = this.successors(v);
  } else {
    neighbors = this.neighbors(v);
  }

  return neighbors.length === 0
};

Graph.prototype.filterNodes = function (filter) {
  var copy = new this.constructor({
    directed: this._isDirected,
    multigraph: this._isMultigraph,
    compound: this._isCompound
  });
  copy.setGraph(this.graph());
  var self = this;

  (0,forEach/* default */.Z)(this._nodes, function (value, v) {
    if (filter(v)) {
      copy.setNode(v, value);
    }
  });

  (0,forEach/* default */.Z)(this._edgeObjs, function (e) {
    if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
      copy.setEdge(e, self.edge(e));
    }
  });

  var parents = {};

  function findParent (v) {
    var parent = self.parent(v);

    if (parent === undefined || copy.hasNode(parent)) {
      parents[v] = parent;
      return parent
    } else if (parent in parents) {
      return parents[parent]
    } else {
      return findParent(parent)
    }
  }

  if (this._isCompound) {
    (0,forEach/* default */.Z)(copy.nodes(), function (v) {
      copy.setParent(v, findParent(v));
    });
  }

  return copy
};
/* === Edge functions ========== */

Graph.prototype.setDefaultEdgeLabel = function (newDefault) {
  if (!(0,isFunction/* default */.Z)(newDefault)) {
    newDefault = (0,constant/* default */.Z)(newDefault);
  }

  this._defaultEdgeLabelFn = newDefault;
  return this
};

Graph.prototype.edgeCount = function () {
  return this._edgeCount
};

Graph.prototype.edges = function () {
  return (0,values/* default */.Z)(this._edgeObjs)
};

Graph.prototype.setPath = function (vs, value) {
  const self = this;
  const args = arguments;

  (0,reduce/* default */.Z)(vs, function (v, w) {
    if (args.length > 1) {
      self.setEdge(v, w, value);
    } else {
      self.setEdge(v, w);
    }

    return w
  });

  return this
};
/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */

Graph.prototype.setEdge = function () {
  let v, w, name, value;
  let valueSpecified = false;
  const arg0 = arguments[0];

  if (typeof arg0 === 'object' && arg0 !== null && 'v' in arg0) {
    v = arg0.v;
    w = arg0.w;
    name = arg0.name;

    if (arguments.length === 2) {
      value = arguments[1];
      valueSpecified = true;
    }
  } else {
    v = arg0;
    w = arguments[1];
    name = arguments[3];

    if (arguments.length > 2) {
      value = arguments[2];
      valueSpecified = true;
    }
  }

  v = '' + v;
  w = '' + w;

  if (!(0,isUndefined/* default */.Z)(name)) {
    name = '' + name;
  }

  var e = edgeArgsToId(this._isDirected, v, w, name);

  if ((0,has/* default */.Z)(this._edgeLabels, e)) {
    if (valueSpecified) {
      this._edgeLabels[e] = value;
    }

    return this
  }

  if (!(0,isUndefined/* default */.Z)(name) && !this._isMultigraph) {
    throw new Error('Cannot set a named edge when isMultigraph = false')
  } // It didn't exist, so we need to create it.
  // First ensure the nodes exist.

  this.setNode(v);
  this.setNode(w);
  this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
  var edgeObj = edgeArgsToObj(this._isDirected, v, w, name); // Ensure we add undirected edges in a consistent way.

  v = edgeObj.v;
  w = edgeObj.w;
  Object.freeze(edgeObj);
  this._edgeObjs[e] = edgeObj;
  incrementOrInitEntry(this._preds[w], v);
  incrementOrInitEntry(this._sucs[v], w);
  this._in[w][e] = edgeObj;
  this._out[v][e] = edgeObj;
  this._edgeCount++;
  return this
};

Graph.prototype.edge = function (v, w, name) {
  var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
  return this._edgeLabels[e]
};

Graph.prototype.hasEdge = function (v, w, name) {
  var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
  return (0,has/* default */.Z)(this._edgeLabels, e)
};

Graph.prototype.removeEdge = function (v, w, name) {
  const e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
  const edge = this._edgeObjs[e];

  if (edge) {
    v = edge.v;
    w = edge.w;
    delete this._edgeLabels[e];
    delete this._edgeObjs[e];
    decrementOrRemoveEntry(this._preds[w], v);
    decrementOrRemoveEntry(this._sucs[v], w);
    delete this._in[w][e];
    delete this._out[v][e];
    this._edgeCount--;
  }

  return this
};

Graph.prototype.inEdges = function (v, u) {
  var inV = this._in[v];

  if (inV) {
    var edges = (0,values/* default */.Z)(inV);

    if (!u) {
      return edges
    }

    return (0,filter/* default */.Z)(edges, function (edge) {
      return edge.v === u
    })
  }
};

Graph.prototype.outEdges = function (v, w) {
  var outV = this._out[v];

  if (outV) {
    var edges = (0,values/* default */.Z)(outV);

    if (!w) {
      return edges
    }

    return (0,filter/* default */.Z)(edges, function (edge) {
      return edge.w === w
    })
  }
};

Graph.prototype.nodeEdges = function (v, w) {
  var inEdges = this.inEdges(v, w);

  if (inEdges) {
    return inEdges.concat(this.outEdges(v, w))
  }
};

function incrementOrInitEntry (map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry (map, k) {
  if (!--map[k]) {
    delete map[k];
  }
}

function edgeArgsToId (isDirected, v_, w_, name) {
  var v = '' + v_;
  var w = '' + w_;

  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + ((0,isUndefined/* default */.Z)(name) ? DEFAULT_EDGE_NAME : name)
}

function edgeArgsToObj (isDirected, v_, w_, name) {
  var v = '' + v_;
  var w = '' + w_;

  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var edgeObj = {
    v: v,
    w: w
  };

  if (name) {
    edgeObj.name = name;
  }

  return edgeObj
}

function edgeObjToId (isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name)
}


//# sourceMappingURL=graph.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/map.js
var map = __webpack_require__(43836);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseClone.js + 15 modules
var _baseClone = __webpack_require__(48451);
;// CONCATENATED MODULE: ./node_modules/lodash-es/clone.js


/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return (0,_baseClone/* default */.Z)(value, CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ const lodash_es_clone = (clone);

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/json.js






function write (g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };

  if (!(0,isUndefined/* default */.Z)(g.graph())) {
    json.value = lodash_es_clone(g.graph());
  }

  return json
}

function writeNodes (g) {
  return (0,map/* default */.Z)(g.nodes(), function (v) {
    const nodeValue = g.node(v);
    const parent = g.parent(v);
    const node = {
      v: v
    };

    if (!(0,isUndefined/* default */.Z)(nodeValue)) {
      node.value = nodeValue;
    }

    if (!(0,isUndefined/* default */.Z)(parent)) {
      node.parent = parent;
    }

    return node
  })
}

function writeEdges (g) {
  return (0,map/* default */.Z)(g.edges(), function (e) {
    const edgeValue = g.edge(e);
    const edge = {
      v: e.v,
      w: e.w
    };

    if (!(0,isUndefined/* default */.Z)(e.name)) {
      edge.name = e.name;
    }

    if (!(0,isUndefined/* default */.Z)(edgeValue)) {
      edge.value = edgeValue;
    }

    return edge
  })
}

function read (json) {
  var g = new Graph(json.options).setGraph(json.value);

  (0,forEach/* default */.Z)(json.nodes, function (entry) {
    g.setNode(entry.v, entry.value);

    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });

  (0,forEach/* default */.Z)(json.edges, function (entry) {
    g.setEdge({
      v: entry.v,
      w: entry.w,
      name: entry.name
    }, entry.value);
  });

  return g
}


//# sourceMappingURL=json.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/components.js



function components (g) {
  const visited = {};
  const cmpts = [];
  let cmpt;

  function dfs (v) {
    if ((0,has/* default */.Z)(visited, v)) return
    visited[v] = true;
    cmpt.push(v);

    (0,forEach/* default */.Z)(g.successors(v), dfs);

    (0,forEach/* default */.Z)(g.predecessors(v), dfs);
  }

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    cmpt = [];
    dfs(v);

    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts
}


//# sourceMappingURL=components.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/data/priority-queue.js


/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */

function PriorityQueue () {
  this._arr = [];
  this._keyIndices = {};
}
/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */

PriorityQueue.prototype.size = function () {
  return this._arr.length
};
/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */

PriorityQueue.prototype.keys = function () {
  return this._arr.map(function (x) {
    return x.key
  })
};
/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */

PriorityQueue.prototype.has = function (key) {
  return (0,has/* default */.Z)(this._keyIndices, key)
};
/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */

PriorityQueue.prototype.priority = function (key) {
  var index = this._keyIndices[key];

  if (index !== undefined) {
    return this._arr[index].priority
  }
};
/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */

PriorityQueue.prototype.min = function () {
  if (this.size() === 0) {
    throw new Error('Queue underflow')
  }

  return this._arr[0].key
};
/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */

PriorityQueue.prototype.add = function (key, priority) {
  var keyIndices = this._keyIndices;
  key = String(key);

  if (!(0,has/* default */.Z)(keyIndices, key)) {
    var arr = this._arr;
    var index = arr.length;
    keyIndices[key] = index;
    arr.push({
      key: key,
      priority: priority
    });

    this._decrease(index);

    return true
  }

  return false
};
/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */

PriorityQueue.prototype.removeMin = function () {
  this._swap(0, this._arr.length - 1);

  var min = this._arr.pop();

  delete this._keyIndices[min.key];

  this._heapify(0);

  return min.key
};
/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */

PriorityQueue.prototype.decrease = function (key, priority) {
  var index = this._keyIndices[key];

  if (priority > this._arr[index].priority) {
    throw new Error('New priority is greater than current priority. ' + 'Key: ' + key + ' Old: ' + this._arr[index].priority + ' New: ' + priority)
  }

  this._arr[index].priority = priority;

  this._decrease(index);
};

PriorityQueue.prototype._heapify = function (i) {
  const arr = this._arr;
  const l = 2 * i;
  const r = l + 1;
  let largest = i;

  if (l < arr.length) {
    largest = arr[l].priority < arr[largest].priority ? l : largest;

    if (r < arr.length) {
      largest = arr[r].priority < arr[largest].priority ? r : largest;
    }

    if (largest !== i) {
      this._swap(i, largest);

      this._heapify(largest);
    }
  }
};

PriorityQueue.prototype._decrease = function (index) {
  var arr = this._arr;
  var priority = arr[index].priority;
  var parent;

  while (index !== 0) {
    parent = index >> 1;

    if (arr[parent].priority < priority) {
      break
    }

    this._swap(index, parent);

    index = parent;
  }
};

PriorityQueue.prototype._swap = function (i, j) {
  var arr = this._arr;
  var keyIndices = this._keyIndices;
  var origArrI = arr[i];
  var origArrJ = arr[j];
  arr[i] = origArrJ;
  arr[j] = origArrI;
  keyIndices[origArrJ.key] = i;
  keyIndices[origArrI.key] = j;
};


//# sourceMappingURL=priority-queue.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/dijkstra.js



var DEFAULT_WEIGHT_FUNC = (0,constant/* default */.Z)(1);

function dijkstra (g, source, weightFn, edgeFn) {
  return runDijkstra(g, String(source), weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function (v) {
    return g.outEdges(v)
  })
}

function runDijkstra (g, source, weightFn, edgeFn) {
  const results = {};
  const pq = new PriorityQueue();
  let v, vEntry;

  var updateNeighbors = function (edge) {
    const w = edge.v !== v ? edge.v : edge.w;
    const wEntry = results[w];
    const weight = weightFn(edge);
    const distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error('dijkstra does not allow negative edge weights. ' + 'Bad edge: ' + edge + ' Weight: ' + weight)
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function (v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = {
      distance: distance
    };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];

    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results
}


//# sourceMappingURL=dijkstra.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayEach.js
var _arrayEach = __webpack_require__(76579);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseCreate.js
var _baseCreate = __webpack_require__(74705);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseForOwn.js
var _baseForOwn = __webpack_require__(2693);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIteratee.js + 9 modules
var _baseIteratee = __webpack_require__(14669);
// EXTERNAL MODULE: ./node_modules/lodash-es/_getPrototype.js
var _getPrototype = __webpack_require__(12513);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27771);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js + 1 modules
var isBuffer = __webpack_require__(77008);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(77226);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__(18843);
;// CONCATENATED MODULE: ./node_modules/lodash-es/transform.js











/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = (0,isArray/* default */.Z)(object),
      isArrLike = isArr || (0,isBuffer/* default */.Z)(object) || (0,isTypedArray/* default */.Z)(object);

  iteratee = (0,_baseIteratee/* default */.Z)(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if ((0,isObject/* default */.Z)(object)) {
      accumulator = (0,isFunction/* default */.Z)(Ctor) ? (0,_baseCreate/* default */.Z)((0,_getPrototype/* default */.Z)(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? _arrayEach/* default */.Z : _baseForOwn/* default */.Z)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

/* harmony default export */ const lodash_es_transform = (transform);

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/dijkstra-all.js



function dijkstraAll (g, weightFunc, edgeFunc) {
  return lodash_es_transform(g.nodes(), function (acc, v) {
    acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
  }, {})
}


//# sourceMappingURL=dijkstra-all.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/tarjan.js


function tarjan (g) {
  let index = 0;
  const stack = [];
  const visited = {}; // node id -> { onStack, lowlink, index }

  const results = [];

  function dfs (v) {
    var entry = visited[v] = {
      onStack: true,
      lowlink: index,
      index: index++
    };
    stack.push(v);
    g.successors(v).forEach(function (w) {
      if (!(0,has/* default */.Z)(visited, w)) {
        dfs(w);
        entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
      } else if (visited[w].onStack) {
        entry.lowlink = Math.min(entry.lowlink, visited[w].index);
      }
    });

    if (entry.lowlink === entry.index) {
      const cmpt = [];
      let w;

      do {
        w = stack.pop();
        visited[w].onStack = false;
        cmpt.push(w);
      } while (v !== w)

      results.push(cmpt);
    }
  }

  g.nodes().forEach(function (v) {
    if (!(0,has/* default */.Z)(visited, v)) {
      dfs(v);
    }
  });
  return results
}


//# sourceMappingURL=tarjan.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/find-cycles.js



function findCycles (g) {
  return (0,filter/* default */.Z)(tarjan(g), function (cmpt) {
    return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]))
  })
}


//# sourceMappingURL=find-cycles.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/floyd-warshall.js


var floyd_warshall_DEFAULT_WEIGHT_FUNC = (0,constant/* default */.Z)(1);

function floydWarshall (g, weightFn, edgeFn) {
  return runFloydWarshall(g, weightFn || floyd_warshall_DEFAULT_WEIGHT_FUNC, edgeFn || function (v) {
    return g.outEdges(v)
  })
}

function runFloydWarshall (g, weightFn, edgeFn) {
  const results = {};
  const nodes = g.nodes();
  nodes.forEach(function (v) {
    results[v] = {};
    results[v][v] = {
      distance: 0
    };
    nodes.forEach(function (w) {
      if (v !== w) {
        results[v][w] = {
          distance: Number.POSITIVE_INFINITY
        };
      }
    });
    edgeFn(v).forEach(function (edge) {
      const w = edge.v === v ? edge.w : edge.v;
      const d = weightFn(edge);
      results[v][w] = {
        distance: d,
        predecessor: v
      };
    });
  });
  nodes.forEach(function (k) {
    var rowK = results[k];
    nodes.forEach(function (i) {
      var rowI = results[i];
      nodes.forEach(function (j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;

        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });
  return results
}


//# sourceMappingURL=floyd-warshall.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseKeys.js + 1 modules
var _baseKeys = __webpack_require__(39473);
// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 2 modules
var _getTag = __webpack_require__(68411);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(50585);
// EXTERNAL MODULE: ./node_modules/lodash-es/isString.js
var isString = __webpack_require__(36378);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseProperty.js
var _baseProperty = __webpack_require__(54193);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_asciiSize.js


/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = (0,_baseProperty/* default */.Z)('length');

/* harmony default export */ const _asciiSize = (asciiSize);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hasUnicode.js
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/* harmony default export */ const _hasUnicode = (hasUnicode);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_unicodeSize.js
/** Used to compose unicode character classes. */
var _unicodeSize_rsAstralRange = '\\ud800-\\udfff',
    _unicodeSize_rsComboMarksRange = '\\u0300-\\u036f',
    _unicodeSize_reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    _unicodeSize_rsComboSymbolsRange = '\\u20d0-\\u20ff',
    _unicodeSize_rsComboRange = _unicodeSize_rsComboMarksRange + _unicodeSize_reComboHalfMarksRange + _unicodeSize_rsComboSymbolsRange,
    _unicodeSize_rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + _unicodeSize_rsAstralRange + ']',
    rsCombo = '[' + _unicodeSize_rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + _unicodeSize_rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    _unicodeSize_rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + _unicodeSize_rsVarRange + ']?',
    rsOptJoin = '(?:' + _unicodeSize_rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

/* harmony default export */ const _unicodeSize = (unicodeSize);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stringSize.js




/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return _hasUnicode(string)
    ? _unicodeSize(string)
    : _asciiSize(string);
}

/* harmony default export */ const _stringSize = (stringSize);

;// CONCATENATED MODULE: ./node_modules/lodash-es/size.js






/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if ((0,isArrayLike/* default */.Z)(collection)) {
    return (0,isString/* default */.Z)(collection) ? _stringSize(collection) : collection.length;
  }
  var tag = (0,_getTag/* default */.Z)(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return (0,_baseKeys/* default */.Z)(collection).length;
}

/* harmony default export */ const lodash_es_size = (size);

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/topsort.js




function topsort (g) {
  const visited = {};
  const stack = {};
  const results = [];

  function visit (node) {
    if ((0,has/* default */.Z)(stack, node)) {
      throw new CycleException()
    }

    if (!(0,has/* default */.Z)(visited, node)) {
      stack[node] = true;
      visited[node] = true;

      (0,forEach/* default */.Z)(g.predecessors(node), visit);

      delete stack[node];
      results.push(node);
    }
  }

  (0,forEach/* default */.Z)(g.sinks(), visit);

  if (lodash_es_size(visited) !== g.nodeCount()) {
    throw new CycleException()
  }

  return results
}

function CycleException () {}

CycleException.prototype = new Error(); // must be an instance of Error to pass testing

topsort.CycleException = CycleException;


//# sourceMappingURL=topsort.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/is-acyclic.js


function isAcyclic (g) {
  try {
    topsort(g);
  } catch (e) {
    if (e instanceof topsort.CycleException) {
      return false
    }

    throw e
  }

  return true
}


//# sourceMappingURL=is-acyclic.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/dfs.js




/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */

function dfs (g, vs, order) {
  if (!(0,isArray/* default */.Z)(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);
  const acc = [];
  const visited = {};

  (0,forEach/* default */.Z)(vs, function (v) {
    if (!g.hasNode(v)) {
      throw new Error('Graph does not have node: ' + v)
    }

    doDfs(g, v, order === 'post', visited, navigation, acc);
  });

  return acc
}

function doDfs (g, v, postorder, visited, navigation, acc) {
  if (!(0,has/* default */.Z)(visited, v)) {
    visited[v] = true;

    if (!postorder) {
      acc.push(v);
    }

    (0,forEach/* default */.Z)(navigation(v), function (w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });

    if (postorder) {
      acc.push(v);
    }
  }
}


//# sourceMappingURL=dfs.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/postorder.js


function postorder (g, vs) {
  return dfs(g, vs, 'post')
}


//# sourceMappingURL=postorder.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/preorder.js


function preorder (g, vs) {
  return dfs(g, vs, 'pre')
}


//# sourceMappingURL=preorder.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/prim.js





function prim (g, weightFunc) {
  const result = new Graph();
  const parents = {};
  const pq = new PriorityQueue();
  let v;

  function updateNeighbors (edge) {
    const w = edge.v === v ? edge.w : edge.v;
    const pri = pq.priority(w);

    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);

      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result
  }

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  }); // Start from an arbitrary node

  pq.decrease(g.nodes()[0], 0);
  var init = false;

  while (pq.size() > 0) {
    v = pq.removeMin();

    if ((0,has/* default */.Z)(parents, v)) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error('Input graph is not connected: ' + g)
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result
}


//# sourceMappingURL=prim.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/alg/index.js











//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/graphlibrary/dist/index.js





//# sourceMappingURL=index.js.map


/***/ }),

/***/ 13445:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_filter)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayFilter.js
var _arrayFilter = __webpack_require__(68774);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseEach.js + 1 modules
var _baseEach = __webpack_require__(49811);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFilter.js


/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  (0,_baseEach/* default */.Z)(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

/* harmony default export */ const _baseFilter = (baseFilter);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIteratee.js + 9 modules
var _baseIteratee = __webpack_require__(14669);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27771);
;// CONCATENATED MODULE: ./node_modules/lodash-es/filter.js





/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = (0,isArray/* default */.Z)(collection) ? _arrayFilter/* default */.Z : _baseFilter;
  return func(collection, (0,_baseIteratee/* default */.Z)(predicate, 3));
}

/* harmony default export */ const lodash_es_filter = (filter);


/***/ }),

/***/ 60878:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_forEach)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayEach.js
var _arrayEach = __webpack_require__(76579);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseEach.js + 1 modules
var _baseEach = __webpack_require__(49811);
// EXTERNAL MODULE: ./node_modules/lodash-es/identity.js
var identity = __webpack_require__(69203);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_castFunction.js


/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity/* default */.Z;
}

/* harmony default export */ const _castFunction = (castFunction);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27771);
;// CONCATENATED MODULE: ./node_modules/lodash-es/forEach.js





/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = (0,isArray/* default */.Z)(collection) ? _arrayEach/* default */.Z : _baseEach/* default */.Z;
  return func(collection, _castFunction(iteratee));
}

/* harmony default export */ const lodash_es_forEach = (forEach);


/***/ }),

/***/ 17452:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_has)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseHas.js
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseHas_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && _baseHas_hasOwnProperty.call(object, key);
}

/* harmony default export */ const _baseHas = (baseHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_hasPath.js
var _hasPath = __webpack_require__(16174);
;// CONCATENATED MODULE: ./node_modules/lodash-es/has.js



/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && (0,_hasPath/* default */.Z)(object, path, _baseHas);
}

/* harmony default export */ const lodash_es_has = (has);


/***/ }),

/***/ 43836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74073);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14669);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27771);





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(iteratee, 3));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);


/***/ }),

/***/ 42054:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);


/***/ }),

/***/ 92344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_reduce)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayReduce.js
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/* harmony default export */ const _arrayReduce = (arrayReduce);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseEach.js + 1 modules
var _baseEach = __webpack_require__(49811);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIteratee.js + 9 modules
var _baseIteratee = __webpack_require__(14669);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseReduce.js
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

/* harmony default export */ const _baseReduce = (baseReduce);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27771);
;// CONCATENATED MODULE: ./node_modules/lodash-es/reduce.js






/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = (0,isArray/* default */.Z)(collection) ? _arrayReduce : _baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, (0,_baseIteratee/* default */.Z)(iteratee, 4), accumulator, initAccum, _baseEach/* default */.Z);
}

/* harmony default export */ const lodash_es_reduce = (reduce);


/***/ }),

/***/ 34148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_values)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__(74073);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseValues.js


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0,_arrayMap/* default */.Z)(props, function(key) {
    return object[key];
  });
}

/* harmony default export */ const _baseValues = (baseValues);

// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js
var keys = __webpack_require__(17179);
;// CONCATENATED MODULE: ./node_modules/lodash-es/values.js



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, (0,keys/* default */.Z)(object));
}

/* harmony default export */ const lodash_es_values = (values);


/***/ })

};
;