"use strict";
exports.id = 264;
exports.ids = [264,732];
exports.modules = {

/***/ 58264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index),
  "layout": () => (/* binding */ dist_layout)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseAssignValue.js
var _baseAssignValue = __webpack_require__(74752);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseForOwn.js
var _baseForOwn = __webpack_require__(2693);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIteratee.js + 9 modules
var _baseIteratee = __webpack_require__(14669);
;// CONCATENATED MODULE: ./node_modules/lodash-es/mapValues.js




/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = (0,_baseIteratee/* default */.Z)(iteratee, 3);

  (0,_baseForOwn/* default */.Z)(object, function(value, key, object) {
    (0,_baseAssignValue/* default */.Z)(result, key, iteratee(value, key, object));
  });
  return result;
}

/* harmony default export */ const lodash_es_mapValues = (mapValues);

;// CONCATENATED MODULE: ./node_modules/lodash-es/last.js
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/* harmony default export */ const lodash_es_last = (last);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseRest.js
var _baseRest = __webpack_require__(69581);
// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(79651);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIterateeCall.js
var _isIterateeCall = __webpack_require__(50439);
// EXTERNAL MODULE: ./node_modules/lodash-es/keysIn.js + 2 modules
var keysIn = __webpack_require__(32957);
;// CONCATENATED MODULE: ./node_modules/lodash-es/defaults.js





/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var defaults_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = (0,_baseRest/* default */.Z)(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && (0,_isIterateeCall/* default */.Z)(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = (0,keysIn/* default */.Z)(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          ((0,eq/* default */.Z)(value, objectProto[key]) && !defaults_hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

/* harmony default export */ const lodash_es_defaults = (defaults);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGet.js
var _baseGet = __webpack_require__(13317);
// EXTERNAL MODULE: ./node_modules/lodash-es/_assignValue.js
var _assignValue = __webpack_require__(72954);
// EXTERNAL MODULE: ./node_modules/lodash-es/_castPath.js + 3 modules
var _castPath = __webpack_require__(10134);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(56009);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(77226);
// EXTERNAL MODULE: ./node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__(62281);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSet.js






/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!(0,isObject/* default */.Z)(object)) {
    return object;
  }
  path = (0,_castPath/* default */.Z)(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = (0,_toKey/* default */.Z)(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = (0,isObject/* default */.Z)(objValue)
          ? objValue
          : ((0,_isIndex/* default */.Z)(path[index + 1]) ? [] : {});
      }
    }
    (0,_assignValue/* default */.Z)(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/* harmony default export */ const _baseSet = (baseSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_basePickBy.js




/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = (0,_baseGet/* default */.Z)(object, path);

    if (predicate(value, path)) {
      _baseSet(result, (0,_castPath/* default */.Z)(path, object), value);
    }
  }
  return result;
}

/* harmony default export */ const _basePickBy = (basePickBy);

// EXTERNAL MODULE: ./node_modules/lodash-es/hasIn.js + 1 modules
var hasIn = __webpack_require__(75487);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_basePick.js



/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value, path) {
    return (0,hasIn/* default */.Z)(object, path);
  });
}

/* harmony default export */ const _basePick = (basePick);

// EXTERNAL MODULE: ./node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(27961);
// EXTERNAL MODULE: ./node_modules/lodash-es/_overRest.js
var _overRest = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/lodash-es/_setToString.js + 1 modules
var _setToString = __webpack_require__(90734);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_flatRest.js




/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return (0,_setToString/* default */.Z)((0,_overRest/* default */.Z)(func, undefined, flatten/* default */.Z), func + '');
}

/* harmony default export */ const _flatRest = (flatRest);

;// CONCATENATED MODULE: ./node_modules/lodash-es/pick.js



/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = _flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});

/* harmony default export */ const lodash_es_pick = (pick);

// EXTERNAL MODULE: ./node_modules/lodash-es/merge.js + 6 modules
var merge = __webpack_require__(59236);
// EXTERNAL MODULE: ./node_modules/lodash-es/has.js + 1 modules
var has = __webpack_require__(17452);
// EXTERNAL MODULE: ./node_modules/lodash-es/forEach.js + 1 modules
var forEach = __webpack_require__(60878);
// EXTERNAL MODULE: ./node_modules/@unovis/graphlibrary/dist/index.js + 26 modules
var dist = __webpack_require__(72732);
// EXTERNAL MODULE: ./node_modules/lodash-es/toString.js + 1 modules
var lodash_es_toString = __webpack_require__(50751);
;// CONCATENATED MODULE: ./node_modules/lodash-es/uniqueId.js


/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return (0,lodash_es_toString/* default */.Z)(prefix) + id;
}

/* harmony default export */ const lodash_es_uniqueId = (uniqueId);

// EXTERNAL MODULE: ./node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(74379);
// EXTERNAL MODULE: ./node_modules/lodash-es/map.js
var map = __webpack_require__(43836);
// EXTERNAL MODULE: ./node_modules/lodash-es/constant.js
var constant = __webpack_require__(62002);
;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/data/list.js
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */
function List () {
  const sentinel = {};
  sentinel._next = sentinel._prev = sentinel;
  this._sentinel = sentinel;
}

List.prototype.dequeue = function () {
  const sentinel = this._sentinel;
  const entry = sentinel._prev;

  if (entry !== sentinel) {
    unlink(entry);
    return entry
  }
};

List.prototype.enqueue = function (entry) {
  const sentinel = this._sentinel;

  if (entry._prev && entry._next) {
    unlink(entry);
  }

  entry._next = sentinel._next;
  sentinel._next._prev = entry;
  sentinel._next = entry;
  entry._prev = sentinel;
};

List.prototype.toString = function () {
  const strs = [];
  const sentinel = this._sentinel;
  let curr = sentinel._prev;

  while (curr !== sentinel) {
    strs.push(JSON.stringify(curr, filterOutLinks));
    curr = curr._prev;
  }

  return '[' + strs.join(', ') + ']'
};

function unlink (entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks (k, v) {
  if (k !== '_next' && k !== '_prev') {
    return v
  }
}


//# sourceMappingURL=list.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/greedy-fas.js








/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */

const DEFAULT_WEIGHT_FN = (0,constant/* default */.Z)(1);

function greedyFAS (g, weightFn) {
  if (g.nodeCount() <= 1) {
    return []
  }

  const state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  const results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx); // Expand multi-edges

  return (0,flatten/* default */.Z)((0,map/* default */.Z)(results, function (e) {
    return g.outEdges(e.v, e.w)
  }), true)
}

function doGreedyFAS (g, buckets, zeroIdx) {
  let results = [];
  const sources = buckets[buckets.length - 1];
  const sinks = buckets[0];
  let entry;

  while (g.nodeCount()) {
    while ((entry = sinks.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }

    while ((entry = sources.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }

    if (g.nodeCount()) {
      for (let i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();

        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break
        }
      }
    }
  }

  return results
}

function removeNode (g, buckets, zeroIdx, entry, collectPredecessors) {
  const results = collectPredecessors ? [] : undefined;

  (0,forEach/* default */.Z)(g.inEdges(entry.v), function (edge) {
    const weight = g.edge(edge);
    const uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({
        v: edge.v,
        w: edge.w
      });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  (0,forEach/* default */.Z)(g.outEdges(entry.v), function (edge) {
    const weight = g.edge(edge);
    const w = edge.w;
    const wEntry = g.node(w);
    wEntry['in'] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);
  return results
}

function buildState (g, weightFn) {
  const fasGraph = new dist.Graph();
  let maxIn = 0;
  let maxOut = 0;

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    fasGraph.setNode(v, {
      v: v,
      'in': 0,
      out: 0
    });
  }); // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const prevWeight = fasGraph.edge(e.v, e.w) || 0;
    const weight = weightFn(e);
    const edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
    maxIn = Math.max(maxIn, fasGraph.node(e.w)['in'] += weight);
  });

  const buckets = (0,range/* default */.Z)(maxOut + maxIn + 3).map(function () {
    return new List()
  });

  const zeroIdx = maxIn + 1;

  (0,forEach/* default */.Z)(fasGraph.nodes(), function (v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return {
    graph: fasGraph,
    buckets: buckets,
    zeroIdx: zeroIdx
  }
}

function assignBucket (buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry['in']) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry['in'] + zeroIdx].enqueue(entry);
  }
}


//# sourceMappingURL=greedy-fas.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/acyclic.js





function run (g) {
  const fas = g.graph().acyclicer === 'greedy' ? greedyFAS(g, weightFn(g)) : dfsFAS(g);

  (0,forEach/* default */.Z)(fas, function (e) {
    const label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, lodash_es_uniqueId('rev'));
  });

  function weightFn (g) {
    return function (e) {
      return g.edge(e).weight
    }
  }
}

function dfsFAS (g) {
  const fas = [];
  const stack = {};
  const visited = {};

  function dfs (v) {
    if ((0,has/* default */.Z)(visited, v)) {
      return
    }

    visited[v] = true;
    stack[v] = true;

    (0,forEach/* default */.Z)(g.outEdges(v), function (e) {
      if ((0,has/* default */.Z)(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });

    delete stack[v];
  }

  (0,forEach/* default */.Z)(g.nodes(), dfs);

  return fas
}

function undo (g) {
  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const label = g.edge(e);

    if (label.reversed) {
      g.removeEdge(e);
      const forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}

var acyclic = {
  run,
  undo
};


//# sourceMappingURL=acyclic.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/now.js
var now = __webpack_require__(25222);
// EXTERNAL MODULE: ./node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(72714);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseExtremum.js


/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !(0,isSymbol/* default */.Z)(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/* harmony default export */ const _baseExtremum = (baseExtremum);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGt.js
/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

/* harmony default export */ const _baseGt = (baseGt);

// EXTERNAL MODULE: ./node_modules/lodash-es/identity.js
var identity = __webpack_require__(69203);
;// CONCATENATED MODULE: ./node_modules/lodash-es/max.js




/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity/* default */.Z, _baseGt)
    : undefined;
}

/* harmony default export */ const lodash_es_max = (max);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseLt.js
/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

/* harmony default export */ const _baseLt = (baseLt);

;// CONCATENATED MODULE: ./node_modules/lodash-es/min.js




/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity/* default */.Z, _baseLt)
    : undefined;
}

/* harmony default export */ const lodash_es_min = (min);

// EXTERNAL MODULE: ./node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(49360);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseZipObject.js
/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

/* harmony default export */ const _baseZipObject = (baseZipObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/zipObject.js



/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return _baseZipObject(props || [], values || [], _assignValue/* default */.Z);
}

/* harmony default export */ const lodash_es_zipObject = (zipObject);

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/util.js












/*
 * Adds a dummy node to the graph and return v.
 */

function addDummyNode (g, type, attrs, name) {
  let v;

  do {
    v = lodash_es_uniqueId(name);
  } while (g.hasNode(v))

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v
}
/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */

function simplify (g) {
  const simplified = new dist.Graph().setGraph(g.graph());

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    simplified.setNode(v, g.node(v));
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const simpleLabel = simplified.edge(e.v, e.w) || {
      weight: 0,
      minlen: 1
    };
    const label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen)
    });
  });

  return simplified
}
function asNonCompoundGraph (g) {
  const simplified = new dist.Graph({
    multigraph: g.isMultigraph()
  }).setGraph(g.graph());

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    simplified.setEdge(e, g.edge(e));
  });

  return simplified
}
function successorWeights (g) {
  const weightMap = (0,map/* default */.Z)(g.nodes(), function (v) {
    const sucs = {};

    (0,forEach/* default */.Z)(g.outEdges(v), function (e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });

    return sucs
  });

  return lodash_es_zipObject(g.nodes(), weightMap)
}
function predecessorWeights (g) {
  const weightMap = (0,map/* default */.Z)(g.nodes(), function (v) {
    const preds = {};

    (0,forEach/* default */.Z)(g.inEdges(v), function (e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });

    return preds
  });

  return lodash_es_zipObject(g.nodes(), weightMap)
}
/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */

function intersectRect (rect, point) {
  const x = rect.x;
  const y = rect.y; // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes

  const dx = point.x - x;
  const dy = point.y - y;
  let w = rect.width / 2;
  let h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error('Not possible to find intersection inside of the rectangle')
  }

  let sx;
  let sy;

  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }

    sx = h * dx / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }

    sx = w;
    sy = w * dy / dx;
  }

  return {
    x: x + sx,
    y: y + sy
  }
}
/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */

function buildLayerMatrix (g) {
  const layering = (0,map/* default */.Z)((0,range/* default */.Z)(maxRank(g) + 1), function () {
    return []
  });

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);
    const rank = node.rank;

    if (!(0,isUndefined/* default */.Z)(rank)) {
      layering[rank][node.order] = v;
    }
  });

  return layering
}
/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */

function normalizeRanks (g) {
  const min = lodash_es_min((0,map/* default */.Z)(g.nodes(), function (v) {
    return g.node(v).rank
  }));

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);

    if ((0,has/* default */.Z)(node, 'rank')) {
      node.rank -= min;
    }
  });
}
function removeEmptyRanks (g) {
  // Ranks may not start at 0, so we need to offset them
  const offset = lodash_es_min((0,map/* default */.Z)(g.nodes(), function (v) {
    return g.node(v).rank
  }));

  const layers = [];

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const rank = g.node(v).rank - offset;

    if (!layers[rank]) {
      layers[rank] = [];
    }

    layers[rank].push(v);
  });

  let delta = 0;
  const nodeRankFactor = g.graph().nodeRankFactor;

  (0,forEach/* default */.Z)(layers, function (vs, i) {
    if ((0,isUndefined/* default */.Z)(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      (0,forEach/* default */.Z)(vs, function (v) {
        g.node(v).rank += delta;
      });
    }
  });
}
function addBorderNode (g, prefix, rank, order) {
  const node = {
    width: 0,
    height: 0
  };

  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }

  return addDummyNode(g, 'border', node, prefix)
}
function maxRank (g) {
  return lodash_es_max((0,map/* default */.Z)(g.nodes(), function (v) {
    const rank = g.node(v).rank;

    if (!(0,isUndefined/* default */.Z)(rank)) {
      return rank
    }
  }))
}
/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */

function partition (collection, fn) {
  const result = {
    lhs: [],
    rhs: []
  };

  (0,forEach/* default */.Z)(collection, function (value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });

  return result
}
/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */

function time (name, fn) {
  const start = (0,now/* default */.Z)();

  try {
    return fn()
  } finally {
    console.log(name + ' time: ' + ((0,now/* default */.Z)() - start) + 'ms');
  }
}
function notime (name, fn) {
  return fn()
}
var util = {
  addDummyNode,
  simplify,
  asNonCompoundGraph,
  successorWeights,
  predecessorWeights,
  intersectRect,
  buildLayerMatrix,
  normalizeRanks,
  removeEmptyRanks,
  addBorderNode,
  maxRank,
  partition,
  time,
  notime
};


//# sourceMappingURL=util.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/normalize.js



/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */

function normalize_run (g) {
  g.graph().dummyChains = [];

  (0,forEach/* default */.Z)(g.edges(), function (edge) {
    normalizeEdge(g, edge);
  });
}

function normalizeEdge (g, e) {
  let v = e.v;
  let vRank = g.node(v).rank;
  const w = e.w;
  const wRank = g.node(w).rank;
  const name = e.name;
  const edgeLabel = g.edge(e);
  const labelRank = edgeLabel.labelRank;
  if (wRank === vRank + 1) return
  g.removeEdge(e);
  let dummy;
  let attrs;
  let i;

  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0,
      height: 0,
      edgeLabel: edgeLabel,
      edgeObj: e,
      rank: vRank
    };
    dummy = util.addDummyNode(g, 'edge', attrs, '_d');

    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      attrs.dummy = 'edge-label';
      attrs.labelpos = edgeLabel.labelpos;
    }

    g.setEdge(v, dummy, {
      weight: edgeLabel.weight
    }, name);

    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }

    v = dummy;
  }

  g.setEdge(v, w, {
    weight: edgeLabel.weight
  }, name);
}

function normalize_undo (g) {
  (0,forEach/* default */.Z)(g.graph().dummyChains, function (v) {
    let node = g.node(v);
    const origLabel = node.edgeLabel;
    let w = null;
    g.setEdge(node.edgeObj, origLabel);

    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({
        x: node.x,
        y: node.y
      });

      if (node.dummy === 'edge-label') {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }

      v = w;
      node = g.node(v);
    }
  });
}

var normalize = {
  run: normalize_run,
  undo: normalize_undo
};


//# sourceMappingURL=normalize.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/rank/util.js





/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath (g) {
  const visited = {};

  function dfs (v) {
    const label = g.node(v);

    if ((0,has/* default */.Z)(visited, v)) {
      return label.rank
    }

    visited[v] = true;
    const rank = lodash_es_min((0,map/* default */.Z)(g.outEdges(v), function (e) {
      return dfs(e.w) - g.edge(e).minlen
    })) || 0;
    return (label.rank = rank)
  }

  (0,forEach/* default */.Z)(g.sources(), dfs);
}
/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */

function slack (g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen
}


//# sourceMappingURL=util.js.map

;// CONCATENATED MODULE: ./node_modules/lodash-es/minBy.js




/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, (0,_baseIteratee/* default */.Z)(iteratee, 2), _baseLt)
    : undefined;
}

/* harmony default export */ const lodash_es_minBy = (minBy);

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/rank/feasible-tree.js





/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */

function feasibleTree (g) {
  const t = new dist.Graph({
    directed: false
  }); // Choose arbitrary node from which to start our tree

  const start = g.nodes()[0];
  const size = g.nodeCount();
  t.setNode(start, {});
  let edge;
  let delta;

  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t
}
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */

function tightTree (t, g) {
  function dfs (v) {
    (0,forEach/* default */.Z)(g.nodeEdges(v), function (e) {
      const edgeV = e.v;
      const w = v === edgeV ? e.w : edgeV;

      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  (0,forEach/* default */.Z)(t.nodes(), dfs);

  return t.nodeCount()
}
/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */

function findMinSlackEdge (t, g) {
  return lodash_es_minBy(g.edges(), function (e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e)
    }
  })
}

function shiftRanks (t, g, delta) {
  (0,forEach/* default */.Z)(t.nodes(), function (v) {
    g.node(v).rank += delta;
  });
}


//# sourceMappingURL=feasible-tree.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/filter.js + 1 modules
var filter = __webpack_require__(13445);
// EXTERNAL MODULE: ./node_modules/lodash-es/find.js + 1 modules
var find = __webpack_require__(84144);
;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/rank/network-simplex.js










const {
  preorder,
  postorder
} = dist.alg; // Expose some internals for testing purposes

networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;
/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */

function networkSimplex (g) {
  g = simplify(g);
  longestPath(g);
  const t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);
  let e;
  let f;

  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}
/*
 * Initializes cut values for all edges in the tree.
 */

function initCutValues (t, g) {
  let vs = postorder(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);

  (0,forEach/* default */.Z)(vs, function (v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue (t, g, child) {
  const childLab = t.node(child);
  const parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}
/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */

function calcCutValue (t, g, child) {
  const childLab = t.node(child);
  const parent = childLab.parent; // True if the child is on the tail end of the edge in the directed graph

  let childIsTail = true; // The graph's view of the tree edge we're inspecting

  let graphEdge = g.edge(child, parent); // The accumulated cut value for the edge between this node and its parent

  let cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  (0,forEach/* default */.Z)(g.nodeEdges(child), function (e) {
    const isOutEdge = e.v === child;
    const other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      const pointsToHead = isOutEdge === childIsTail;
      const otherWeight = g.edge(e).weight;
      cutValue += pointsToHead ? otherWeight : -otherWeight;

      if (isTreeEdge(t, child, other)) {
        const otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue
}

function initLowLimValues (tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }

  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim (tree, visited, nextLim, v, parent) {
  const low = nextLim;
  const label = tree.node(v);
  visited[v] = true;

  (0,forEach/* default */.Z)(tree.neighbors(v), function (w) {
    if (!(0,has/* default */.Z)(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;

  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim
}

function leaveEdge (tree) {
  return (0,find/* default */.Z)(tree.edges(), function (e) {
    return tree.edge(e).cutvalue < 0
  })
}

function enterEdge (t, g, edge) {
  let v = edge.v;
  let w = edge.w; // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.

  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  const vLabel = t.node(v);
  const wLabel = t.node(w);
  let tailLabel = vLabel;
  let flip = false; // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.

  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  const candidates = (0,filter/* default */.Z)(g.edges(), function (edge) {
    return flip === isDescendant(t, t.node(edge.v), tailLabel) && flip !== isDescendant(t, t.node(edge.w), tailLabel)
  });

  return lodash_es_minBy(candidates, function (edge) {
    return slack(g, edge)
  })
}

function exchangeEdges (t, g, e, f) {
  const v = e.v;
  const w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks (t, g) {
  const root = (0,find/* default */.Z)(t.nodes(), function (v) {
    return !g.node(v).parent
  });

  let vs = preorder(t, root);
  vs = vs.slice(1);

  (0,forEach/* default */.Z)(vs, function (v) {
    const parent = t.node(v).parent;
    let edge = g.edge(v, parent);
    let flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}
/*
 * Returns true if the edge is in the tree.
 */

function isTreeEdge (tree, u, v) {
  return tree.hasEdge(u, v)
}
/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */

function isDescendant (tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim
}


//# sourceMappingURL=network-simplex.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/rank/index.js




/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */

function rank (g) {
  switch (g.graph().ranker) {
    case 'network-simplex':
      networkSimplexRanker(g);
      break

    case 'tight-tree':
      tightTreeRanker(g);
      break

    case 'longest-path':
      longestPathRanker(g);
      break

    default:
      networkSimplexRanker(g);
  }
} // A fast and simple ranker, but results are far from optimal.

const longestPathRanker = longestPath;

function tightTreeRanker (g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker (g) {
  networkSimplex(g);
}


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/parent-dummy-chains.js


function parentDummyChains (g) {
  const postorderNums = parent_dummy_chains_postorder(g);

  (0,forEach/* default */.Z)(g.graph().dummyChains, function (v) {
    let node = g.node(v);
    const edgeObj = node.edgeObj;
    const pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
    const path = pathData.path;
    const lca = pathData.lca;
    let pathIdx = 0;
    let pathV = path[pathIdx];
    let ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
          pathIdx++;
        }

        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
} // Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.

function findPath (g, postorderNums, v, w) {
  const vPath = [];
  const wPath = [];
  const low = Math.min(postorderNums[v].low, postorderNums[w].low);
  const lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
  let parent;
  let lca; // Traverse up from v to find the LCA

  parent = v;

  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim))

  lca = parent; // Traverse from w to LCA

  parent = w;

  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return {
    path: vPath.concat(wPath.reverse()),
    lca: lca
  }
}

function parent_dummy_chains_postorder (g) {
  const result = {};
  let lim = 0;

  function dfs (v) {
    const low = lim;

    (0,forEach/* default */.Z)(g.children(v), dfs);

    result[v] = {
      low: low,
      lim: lim++
    };
  }

  (0,forEach/* default */.Z)(g.children(), dfs);

  return result
}


//# sourceMappingURL=parent-dummy-chains.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/reduce.js + 2 modules
var reduce = __webpack_require__(92344);
// EXTERNAL MODULE: ./node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__(34148);
;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/nesting-graph.js






/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */

function nesting_graph_run (g) {
  const root = util.addDummyNode(g, 'root', {}, '_root');
  const depths = treeDepths(g);
  const height = lodash_es_max((0,values/* default */.Z)(depths)) - 1;
  const nodeSep = 2 * height + 1;
  g.graph().nestingRoot = root; // Multiply minlen by nodeSep to align nodes on non-border ranks.

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    g.edge(e).minlen *= nodeSep;
  }); // Calculate a weight that is sufficient to keep subgraphs vertically compact

  const weight = sumWeights(g) + 1; // Create border nodes and link them up

  (0,forEach/* default */.Z)(g.children(), function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  }); // Save the multiplier for node layers for later removal of empty border
  // layers.

  g.graph().nodeRankFactor = nodeSep;
}

function dfs (g, root, nodeSep, weight, height, depths, v) {
  const children = g.children(v);

  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, {
        weight: 0,
        minlen: nodeSep
      });
    }

    return
  }

  const top = util.addBorderNode(g, '_bt');
  const bottom = util.addBorderNode(g, '_bb');
  const label = g.node(v);
  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  (0,forEach/* default */.Z)(children, function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
    const childNode = g.node(child);
    const childTop = childNode.borderTop ? childNode.borderTop : child;
    const childBottom = childNode.borderBottom ? childNode.borderBottom : child;
    const thisWeight = childNode.borderTop ? weight : 2 * weight;
    const minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, {
      weight: 0,
      minlen: height + depths[v]
    });
  }
}

function treeDepths (g) {
  const depths = {};

  function dfs (v, depth) {
    const children = g.children(v);

    if (children && children.length) {
      (0,forEach/* default */.Z)(children, function (child) {
        dfs(child, depth + 1);
      });
    }

    depths[v] = depth;
  }

  (0,forEach/* default */.Z)(g.children(), function (v) {
    dfs(v, 1);
  });

  return depths
}

function sumWeights (g) {
  return (0,reduce/* default */.Z)(g.edges(), function (acc, e) {
    return acc + g.edge(e).weight
  }, 0)
}

function cleanup (g) {
  const graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}

var nestingGraph = {
  run: nesting_graph_run,
  cleanup
};


//# sourceMappingURL=nesting-graph.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/add-border-segments.js




function addBorderSegments (g) {
  function dfs (v) {
    const children = g.children(v);
    const node = g.node(v);

    if (children.length) {
      (0,forEach/* default */.Z)(children, dfs);
    }

    if ((0,has/* default */.Z)(node, 'minRank')) {
      node.borderLeft = [];
      node.borderRight = [];

      for (let rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
        add_border_segments_addBorderNode(g, 'borderLeft', '_bl', v, node, rank);
        add_border_segments_addBorderNode(g, 'borderRight', '_br', v, node, rank);
      }
    }
  }

  (0,forEach/* default */.Z)(g.children(), dfs);
}

function add_border_segments_addBorderNode (g, prop, prefix, sg, sgNode, rank) {
  const label = {
    width: 0,
    height: 0,
    rank: rank,
    borderType: prop
  };
  const prev = sgNode[prop][rank - 1];
  const curr = util.addDummyNode(g, 'border', label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);

  if (prev) {
    g.setEdge(prev, curr, {
      weight: 1
    });
  }
}


//# sourceMappingURL=add-border-segments.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/coordinate-system.js



function adjust (g) {
  const rankDir = g.graph().rankdir.toLowerCase();

  if (rankDir === 'lr' || rankDir === 'rl') {
    swapWidthHeight(g);
  }
}

function coordinate_system_undo (g) {
  const rankDir = g.graph().rankdir.toLowerCase();

  if (rankDir === 'bt' || rankDir === 'rl') {
    reverseY(g);
  }

  if (rankDir === 'lr' || rankDir === 'rl') {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight (g) {
  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    swapWidthHeightOne(g.node(v));
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    swapWidthHeightOne(g.edge(e));
  });
}

function swapWidthHeightOne (attrs) {
  const w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY (g) {
  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    reverseYOne(g.node(v));
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    (0,forEach/* default */.Z)(edge.points, reverseYOne);

    if ((0,has/* default */.Z)(edge, 'y')) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne (attrs) {
  attrs.y = -attrs.y;
}

function swapXY (g) {
  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    swapXYOne(g.node(v));
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    (0,forEach/* default */.Z)(edge.points, swapXYOne);

    if ((0,has/* default */.Z)(edge, 'x')) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne (attrs) {
  const x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}

var coordinateSystem = {
  adjust,
  undo: coordinate_system_undo
};


//# sourceMappingURL=coordinate-system.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(68652);
// EXTERNAL MODULE: ./node_modules/lodash-es/sortBy.js + 4 modules
var sortBy = __webpack_require__(16406);
;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/init-order.js








/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder (g) {
  const visited = {};

  const simpleNodes = (0,filter/* default */.Z)(g.nodes(), function (v) {
    return !g.children(v).length
  });

  const maxRank = lodash_es_max((0,map/* default */.Z)(simpleNodes, function (v) {
    return g.node(v).rank
  }));

  const layers = (0,map/* default */.Z)((0,range/* default */.Z)(maxRank + 1), function () {
    return []
  });

  function dfs (v) {
    if ((0,has/* default */.Z)(visited, v)) return
    visited[v] = true;
    const node = g.node(v);
    layers[node.rank].push(v);

    (0,forEach/* default */.Z)(g.successors(v), dfs);
  }

  const orderedVs = (0,sortBy/* default */.Z)(simpleNodes, function (v) {
    return g.node(v).rank
  });

  (0,forEach/* default */.Z)(orderedVs, dfs);

  return layers
}


//# sourceMappingURL=init-order.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/cross-count.js






/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount (g, layering) {
  let cc = 0;

  for (let i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
  }

  return cc
}

function twoLayerCrossCount (g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  const southPos = lodash_es_zipObject(southLayer, (0,map/* default */.Z)(southLayer, function (v, i) {
    return i
  }));

  const southEntries = (0,flatten/* default */.Z)((0,map/* default */.Z)(northLayer, function (v) {
    const outEdges = g.outEdges(v);

    const pos = (0,map/* default */.Z)(outEdges, e => ({
      pos: southPos[e.w],
      weight: g.edge(e).weight
    }));

    const posSorted = (0,sortBy/* default */.Z)(pos, 'pos');

    return posSorted
  }), true); // Build the accumulator tree

  let firstIndex = 1;

  while (firstIndex < southLayer.length) {
    firstIndex <<= 1;
  }

  const treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;

  const tree = (0,map/* default */.Z)(new Array(treeSize), function () {
    return 0
  }); // Calculate the weighted crossings

  let cc = 0;

  (0,forEach/* default */.Z)(southEntries.forEach(function (entry) {
    let index = entry.pos + firstIndex;
    tree[index] += entry.weight;
    let weightSum = 0;

    while (index > 0) {
      if (index % 2) {
        weightSum += tree[index + 1];
      }

      index = index - 1 >> 1;
      tree[index] += entry.weight;
    }

    cc += entry.weight * weightSum;
  }));

  return cc
}


//# sourceMappingURL=cross-count.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/barycenter.js



function barycenter (g, movable) {
  return (0,map/* default */.Z)(movable, function (v) {
    const inV = g.inEdges(v);

    if (!inV.length) {
      return {
        v: v
      }
    } else {
      const result = (0,reduce/* default */.Z)(inV, function (acc, e) {
        const edge = g.edge(e);
        const nodeU = g.node(e.v);
        return {
          sum: acc.sum + edge.weight * nodeU.order,
          weight: acc.weight + edge.weight
        }
      }, {
        sum: 0,
        weight: 0
      });

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight
      }
    }
  })
}


//# sourceMappingURL=barycenter.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/resolve-conflicts.js






/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts (entries, cg) {
  const mappedEntries = {};

  (0,forEach/* default */.Z)(entries, function (entry, i) {
    const tmp = mappedEntries[entry.v] = {
      indegree: 0,
      'in': [],
      out: [],
      vs: [entry.v],
      i: i
    };

    if (!(0,isUndefined/* default */.Z)(entry.barycenter)) {
      tmp.barycenter = entry.barycenter;
      tmp.weight = entry.weight;
    }
  });

  (0,forEach/* default */.Z)(cg.edges(), function (e) {
    const entryV = mappedEntries[e.v];
    const entryW = mappedEntries[e.w];

    if (!(0,isUndefined/* default */.Z)(entryV) && !(0,isUndefined/* default */.Z)(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  const sourceSet = (0,filter/* default */.Z)(mappedEntries, function (entry) {
    return !entry.indegree
  });

  return doResolveConflicts(sourceSet)
}

function doResolveConflicts (sourceSet) {
  const entries = [];

  function handleIn (vEntry) {
    return function (uEntry) {
      if (uEntry.merged) {
        return
      }

      if ((0,isUndefined/* default */.Z)(uEntry.barycenter) || (0,isUndefined/* default */.Z)(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) {
        mergeEntries(vEntry, uEntry);
      }
    }
  }

  function handleOut (vEntry) {
    return function (wEntry) {
      wEntry['in'].push(vEntry);

      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    }
  }

  while (sourceSet.length) {
    const entry = sourceSet.pop();
    entries.push(entry);

    (0,forEach/* default */.Z)(entry['in'].reverse(), handleIn(entry));

    (0,forEach/* default */.Z)(entry.out, handleOut(entry));
  }

  const entriesFiltered = (0,filter/* default */.Z)(entries, function (entry) {
    return !entry.merged
  });

  return (0,map/* default */.Z)(entriesFiltered, function (entry) {
    return lodash_es_pick(entry, ['vs', 'i', 'barycenter', 'weight'])
  })
}

function mergeEntries (target, source) {
  let sum = 0;
  let weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}


//# sourceMappingURL=resolve-conflicts.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/sort.js







function sort (entries, biasRight) {
  const parts = util.partition(entries, function (entry) {
    return (0,has/* default */.Z)(entry, 'barycenter')
  });
  const sortable = parts.lhs;

  const unsortable = (0,sortBy/* default */.Z)(parts.rhs, function (entry) {
    return -entry.i
  });

  const vs = [];
  let sum = 0;
  let weight = 0;
  let vsIndex = 0;
  sortable.sort(compareWithBias(!!biasRight));
  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  (0,forEach/* default */.Z)(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  const result = {
    vs: (0,flatten/* default */.Z)(vs, true)
  };

  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }

  return result
}

function consumeUnsortable (vs, unsortable, index) {
  let last;

  while (unsortable.length && (last = lodash_es_last(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }

  return index
}

function compareWithBias (bias) {
  return function (entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i
  }
}


//# sourceMappingURL=sort.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/sort-subgraph.js









function sortSubgraph (g, v, cg, biasRight) {
  let movable = g.children(v);
  const node = g.node(v);
  const bl = node ? node.borderLeft : undefined;
  const br = node ? node.borderRight : undefined;
  const subgraphs = {};

  if (bl) {
    movable = (0,filter/* default */.Z)(movable, function (w) {
      return w !== bl && w !== br
    });
  }

  const barycenters = barycenter(g, movable);

  (0,forEach/* default */.Z)(barycenters, function (entry) {
    if (g.children(entry.v).length) {
      const subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;

      if ((0,has/* default */.Z)(subgraphResult, 'barycenter')) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  const entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);
  const result = sort(entries, biasRight);

  if (bl) {
    result.vs = (0,flatten/* default */.Z)([bl, result.vs, br], true);

    if (g.predecessors(bl).length) {
      const blPred = g.node(g.predecessors(bl)[0]);
      const brPred = g.node(g.predecessors(br)[0]);

      if (!(0,has/* default */.Z)(result, 'barycenter')) {
        result.barycenter = 0;
        result.weight = 0;
      }

      result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result
}

function expandSubgraphs (entries, subgraphs) {
  (0,forEach/* default */.Z)(entries, function (entry) {
    entry.vs = (0,flatten/* default */.Z)(entry.vs.map(function (v) {
      if (subgraphs[v]) {
        return subgraphs[v].vs
      }

      return v
    }), true);
  });
}

function mergeBarycenters (target, other) {
  if (!(0,isUndefined/* default */.Z)(target.barycenter)) {
    target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}


//# sourceMappingURL=sort-subgraph.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/build-layer-graph.js






/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */

function buildLayerGraph (g, rank, relationship) {
  const root = createRootNode(g);
  const result = new dist.Graph({
    compound: true
  }).setGraph({
    root: root
  }).setDefaultNodeLabel(function (v) {
    return g.node(v)
  });

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);
    const parent = g.parent(v);

    if (node.rank === rank || (node.minRank <= rank && rank <= node.maxRank)) {
      result.setNode(v);
      result.setParent(v, parent || root); // This assumes we have only short edges!

      (0,forEach/* default */.Z)(g[relationship](v), function (e) {
        const u = e.v === v ? e.w : e.v;
        const edge = result.edge(u, v);
        const weight = !(0,isUndefined/* default */.Z)(edge) ? edge.weight : 0;
        result.setEdge(u, v, {
          weight: g.edge(e).weight + weight
        });
      });

      if ((0,has/* default */.Z)(node, 'minRank')) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank]
        });
      }
    }
  });

  return result
}

function createRootNode (g) {
  let v;

  while (g.hasNode(v = lodash_es_uniqueId('_root')));

  return v
}


//# sourceMappingURL=build-layer-graph.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/add-subgraph-constraints.js


function addSubgraphConstraints (g, cg, vs) {
  const prev = {};
  let rootPrev;

  (0,forEach/* default */.Z)(vs, function (v) {
    let child = g.parent(v);
    let parent;
    let prevChild;

    while (child) {
      parent = g.parent(child);

      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }

      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return
      }

      child = parent;
    }
  });
  /*
  function dfs(v) {
    const children = v ? g.children(v) : g.children();
    if (children.length) {
      const min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.forEach(children, function(child) {
        const childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}


//# sourceMappingURL=add-subgraph-constraints.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/order/index.js












/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */

function order (g) {
  const maxRank = util.maxRank(g);
  const downLayerGraphs = buildLayerGraphs(g, (0,range/* default */.Z)(1, maxRank + 1), 'inEdges');
  const upLayerGraphs = buildLayerGraphs(g, (0,range/* default */.Z)(maxRank - 1, -1, -1), 'outEdges');
  let layering = initOrder(g);
  assignOrder(g, layering);
  let bestCC = Number.POSITIVE_INFINITY;
  let best;

  for (let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
    layering = util.buildLayerMatrix(g);
    const cc = crossCount(g, layering);

    if (cc < bestCC) {
      lastBest = 0;
      best = (0,cloneDeep/* default */.Z)(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs (g, ranks, relationship) {
  return (0,map/* default */.Z)(ranks, function (rank) {
    return buildLayerGraph(g, rank, relationship)
  })
}

function sweepLayerGraphs (layerGraphs, biasRight) {
  const cg = new dist.Graph();

  (0,forEach/* default */.Z)(layerGraphs, function (lg) {
    const root = lg.graph().root;
    const sorted = sortSubgraph(lg, root, cg, biasRight);

    (0,forEach/* default */.Z)(sorted.vs, function (v, i) {
      lg.node(v).order = i;
    });

    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder (g, layering) {
  (0,forEach/* default */.Z)(layering, function (layer) {
    (0,forEach/* default */.Z)(layer, function (v, i) {
      g.node(v).order = i;
    });
  });
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/lodash-es/_WeakMap.js
var _WeakMap = __webpack_require__(13840);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_metaMap.js


/** Used to store function metadata. */
var metaMap = _WeakMap/* default */.Z && new _WeakMap/* default */.Z;

/* harmony default export */ const _metaMap = (metaMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetData.js



/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !_metaMap ? identity/* default */.Z : function(func, data) {
  _metaMap.set(func, data);
  return func;
};

/* harmony default export */ const _baseSetData = (baseSetData);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseCreate.js
var _baseCreate = __webpack_require__(74705);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_createCtor.js



/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = (0,_baseCreate/* default */.Z)(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return (0,isObject/* default */.Z)(result) ? result : thisBinding;
  };
}

/* harmony default export */ const _createCtor = (createCtor);

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(66092);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_createBind.js



/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = _createCtor(func);

  function wrapper() {
    var fn = (this && this !== _root/* default */.Z && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/* harmony default export */ const _createBind = (createBind);

// EXTERNAL MODULE: ./node_modules/lodash-es/_apply.js
var _apply = __webpack_require__(18069);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_composeArgs.js
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/* harmony default export */ const _composeArgs = (composeArgs);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_composeArgsRight.js
/* Built-in method references for those with the same name as other `lodash` methods. */
var _composeArgsRight_nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = _composeArgsRight_nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/* harmony default export */ const _composeArgsRight = (composeArgsRight);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_countHolders.js
/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

/* harmony default export */ const _countHolders = (countHolders);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseLodash.js
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

/* harmony default export */ const _baseLodash = (baseLodash);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_LazyWrapper.js



/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = (0,_baseCreate/* default */.Z)(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

/* harmony default export */ const _LazyWrapper = (LazyWrapper);

// EXTERNAL MODULE: ./node_modules/lodash-es/noop.js
var noop = __webpack_require__(42054);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_getData.js



/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !_metaMap ? noop/* default */.Z : function(func) {
  return _metaMap.get(func);
};

/* harmony default export */ const _getData = (getData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_realNames.js
/** Used to lookup unminified function names. */
var realNames = {};

/* harmony default export */ const _realNames = (realNames);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getFuncName.js


/** Used for built-in method references. */
var _getFuncName_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getFuncName_hasOwnProperty = _getFuncName_objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = _realNames[result],
      length = _getFuncName_hasOwnProperty.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

/* harmony default export */ const _getFuncName = (getFuncName);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_LodashWrapper.js



/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = (0,_baseCreate/* default */.Z)(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

/* harmony default export */ const _LodashWrapper = (LodashWrapper);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27771);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(18533);
// EXTERNAL MODULE: ./node_modules/lodash-es/_copyArray.js
var _copyArray = __webpack_require__(87215);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_wrapperClone.js




/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }
  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = (0,_copyArray/* default */.Z)(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

/* harmony default export */ const _wrapperClone = (wrapperClone);

;// CONCATENATED MODULE: ./node_modules/lodash-es/wrapperLodash.js







/** Used for built-in method references. */
var wrapperLodash_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var wrapperLodash_hasOwnProperty = wrapperLodash_objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if ((0,isObjectLike/* default */.Z)(value) && !(0,isArray/* default */.Z)(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }
    if (wrapperLodash_hasOwnProperty.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }
  return new _LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;

/* harmony default export */ const wrapperLodash = (lodash);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isLaziable.js





/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = _getData(other);
  return !!data && func === data[0];
}

/* harmony default export */ const _isLaziable = (isLaziable);

// EXTERNAL MODULE: ./node_modules/lodash-es/_shortOut.js
var _shortOut = __webpack_require__(87581);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_setData.js



/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = (0,_shortOut/* default */.Z)(_baseSetData);

/* harmony default export */ const _setData = (setData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getWrapDetails.js
/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/* harmony default export */ const _getWrapDetails = (getWrapDetails);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_insertWrapDetails.js
/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/* harmony default export */ const _insertWrapDetails = (insertWrapDetails);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayEach.js
var _arrayEach = __webpack_require__(76579);
// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayIncludes.js + 3 modules
var _arrayIncludes = __webpack_require__(8538);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_updateWrapDetails.js



/** Used to compose bitmasks for function metadata. */
var _updateWrapDetails_WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', _updateWrapDetails_WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  (0,_arrayEach/* default */.Z)(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !(0,_arrayIncludes/* default */.Z)(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/* harmony default export */ const _updateWrapDetails = (updateWrapDetails);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setWrapToString.js





/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return (0,_setToString/* default */.Z)(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
}

/* harmony default export */ const _setWrapToString = (setWrapToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createRecurry.js




/** Used to compose bitmasks for function metadata. */
var _createRecurry_WRAP_BIND_FLAG = 1,
    _createRecurry_WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    _createRecurry_WRAP_CURRY_FLAG = 8,
    _createRecurry_WRAP_PARTIAL_FLAG = 32,
    _createRecurry_WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & _createRecurry_WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? _createRecurry_WRAP_PARTIAL_FLAG : _createRecurry_WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? _createRecurry_WRAP_PARTIAL_RIGHT_FLAG : _createRecurry_WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(_createRecurry_WRAP_BIND_FLAG | _createRecurry_WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (_isLaziable(func)) {
    _setData(result, newData);
  }
  result.placeholder = placeholder;
  return _setWrapToString(result, func, bitmask);
}

/* harmony default export */ const _createRecurry = (createRecurry);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getHolder.js
/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/* harmony default export */ const _getHolder = (getHolder);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_reorder.js



/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = (0,_copyArray/* default */.Z)(array);

  while (length--) {
    var index = indexes[length];
    array[length] = (0,_isIndex/* default */.Z)(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/* harmony default export */ const _reorder = (reorder);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_replaceHolders.js
/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/* harmony default export */ const _replaceHolders = (replaceHolders);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createHybrid.js










/** Used to compose bitmasks for function metadata. */
var _createHybrid_WRAP_BIND_FLAG = 1,
    _createHybrid_WRAP_BIND_KEY_FLAG = 2,
    _createHybrid_WRAP_CURRY_FLAG = 8,
    _createHybrid_WRAP_CURRY_RIGHT_FLAG = 16,
    _createHybrid_WRAP_ARY_FLAG = 128,
    _createHybrid_WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & _createHybrid_WRAP_ARY_FLAG,
      isBind = bitmask & _createHybrid_WRAP_BIND_FLAG,
      isBindKey = bitmask & _createHybrid_WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (_createHybrid_WRAP_CURRY_FLAG | _createHybrid_WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & _createHybrid_WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = _getHolder(wrapper),
          holdersCount = _countHolders(args, placeholder);
    }
    if (partials) {
      args = _composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = _replaceHolders(args, placeholder);
      return _createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = _reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== _root/* default */.Z && this instanceof wrapper) {
      fn = Ctor || _createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/* harmony default export */ const _createHybrid = (createHybrid);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createCurry.js








/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = _getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : _replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return _createRecurry(
        func, bitmask, _createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== _root/* default */.Z && this instanceof wrapper) ? Ctor : func;
    return (0,_apply/* default */.Z)(fn, this, args);
  }
  return wrapper;
}

/* harmony default export */ const _createCurry = (createCurry);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createPartial.js




/** Used to compose bitmasks for function metadata. */
var _createPartial_WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & _createPartial_WRAP_BIND_FLAG,
      Ctor = _createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== _root/* default */.Z && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return (0,_apply/* default */.Z)(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/* harmony default export */ const _createPartial = (createPartial);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mergeData.js




/** Used as the internal argument placeholder. */
var _mergeData_PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var _mergeData_WRAP_BIND_FLAG = 1,
    _mergeData_WRAP_BIND_KEY_FLAG = 2,
    _mergeData_WRAP_CURRY_BOUND_FLAG = 4,
    _mergeData_WRAP_CURRY_FLAG = 8,
    _mergeData_WRAP_ARY_FLAG = 128,
    _mergeData_WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var _mergeData_nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (_mergeData_WRAP_BIND_FLAG | _mergeData_WRAP_BIND_KEY_FLAG | _mergeData_WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == _mergeData_WRAP_ARY_FLAG) && (bitmask == _mergeData_WRAP_CURRY_FLAG)) ||
    ((srcBitmask == _mergeData_WRAP_ARY_FLAG) && (bitmask == _mergeData_WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (_mergeData_WRAP_ARY_FLAG | _mergeData_WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == _mergeData_WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & _mergeData_WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & _mergeData_WRAP_BIND_FLAG ? 0 : _mergeData_WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? _replaceHolders(data[3], _mergeData_PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? _replaceHolders(data[5], _mergeData_PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & _mergeData_WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : _mergeData_nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

/* harmony default export */ const _mergeData = (mergeData);

// EXTERNAL MODULE: ./node_modules/lodash-es/toInteger.js
var toInteger = __webpack_require__(24930);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_createWrap.js











/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var _createWrap_WRAP_BIND_FLAG = 1,
    _createWrap_WRAP_BIND_KEY_FLAG = 2,
    _createWrap_WRAP_CURRY_FLAG = 8,
    _createWrap_WRAP_CURRY_RIGHT_FLAG = 16,
    _createWrap_WRAP_PARTIAL_FLAG = 32,
    _createWrap_WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var _createWrap_nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & _createWrap_WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(_createWrap_WRAP_PARTIAL_FLAG | _createWrap_WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : _createWrap_nativeMax((0,toInteger/* default */.Z)(ary), 0);
  arity = arity === undefined ? arity : (0,toInteger/* default */.Z)(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & _createWrap_WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : _getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    _mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : _createWrap_nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (_createWrap_WRAP_CURRY_FLAG | _createWrap_WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(_createWrap_WRAP_CURRY_FLAG | _createWrap_WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == _createWrap_WRAP_BIND_FLAG) {
    var result = _createBind(func, bitmask, thisArg);
  } else if (bitmask == _createWrap_WRAP_CURRY_FLAG || bitmask == _createWrap_WRAP_CURRY_RIGHT_FLAG) {
    result = _createCurry(func, bitmask, arity);
  } else if ((bitmask == _createWrap_WRAP_PARTIAL_FLAG || bitmask == (_createWrap_WRAP_BIND_FLAG | _createWrap_WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = _createPartial(func, bitmask, thisArg, partials);
  } else {
    result = _createHybrid.apply(undefined, newData);
  }
  var setter = data ? _baseSetData : _setData;
  return _setWrapToString(setter(result, newData), func, bitmask);
}

/* harmony default export */ const _createWrap = (createWrap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/bind.js





/** Used to compose bitmasks for function metadata. */
var bind_WRAP_BIND_FLAG = 1,
    bind_WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = (0,_baseRest/* default */.Z)(function(func, thisArg, partials) {
  var bitmask = bind_WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = _replaceHolders(partials, _getHolder(bind));
    bitmask |= bind_WRAP_PARTIAL_FLAG;
  }
  return _createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

/* harmony default export */ const lodash_es_bind = (bind);

;// CONCATENATED MODULE: ./node_modules/lodash-es/maxBy.js




/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, (0,_baseIteratee/* default */.Z)(iteratee, 2), _baseGt)
    : undefined;
}

/* harmony default export */ const lodash_es_maxBy = (maxBy);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__(74073);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseToPairs.js


/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */
function baseToPairs(object, props) {
  return (0,_arrayMap/* default */.Z)(props, function(key) {
    return [key, object[key]];
  });
}

/* harmony default export */ const _baseToPairs = (baseToPairs);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 2 modules
var _getTag = __webpack_require__(68411);
// EXTERNAL MODULE: ./node_modules/lodash-es/_mapToArray.js
var _mapToArray = __webpack_require__(84910);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToPairs.js
/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}

/* harmony default export */ const _setToPairs = (setToPairs);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createToPairs.js





/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function(object) {
    var tag = (0,_getTag/* default */.Z)(object);
    if (tag == mapTag) {
      return (0,_mapToArray/* default */.Z)(object);
    }
    if (tag == setTag) {
      return _setToPairs(object);
    }
    return _baseToPairs(object, keysFunc(object));
  };
}

/* harmony default export */ const _createToPairs = (createToPairs);

// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js
var keys = __webpack_require__(17179);
;// CONCATENATED MODULE: ./node_modules/lodash-es/toPairs.js



/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
var toPairs = _createToPairs(keys/* default */.Z);

/* harmony default export */ const lodash_es_toPairs = (toPairs);

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/position/bk.js




















/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */

/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */

function findType1Conflicts (g, layering) {
  const conflicts = {};

  function visitLayer (prevLayer, layer) {
    // last visited node in the previous layer that is incident on an inner
    // segment.
    let k0 = 0; // Tracks the last node in this layer scanned for crossings with a type-1
    // segment.

    let scanPos = 0;
    const prevLayerLength = prevLayer.length;

    const lastNode = lodash_es_last(layer);

    (0,forEach/* default */.Z)(layer, function (v, i) {
      const w = findOtherInnerSegmentNode(g, v);
      const k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        (0,forEach/* default */.Z)(layer.slice(scanPos, i + 1), function (scanNode) {
          (0,forEach/* default */.Z)(g.predecessors(scanNode), function (u) {
            const uLabel = g.node(u);
            const uPos = uLabel.order;

            if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });

        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer
  }

  (0,reduce/* default */.Z)(layering, visitLayer);

  return conflicts
}

function findType2Conflicts (g, layering) {
  const conflicts = {};

  function scan (south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    let v;

    (0,forEach/* default */.Z)((0,range/* default */.Z)(southPos, southEnd), function (i) {
      v = south[i];

      if (g.node(v).dummy) {
        (0,forEach/* default */.Z)(g.predecessors(v), function (u) {
          const uNode = g.node(u);

          if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }

  function visitLayer (north, south) {
    let prevNorthPos = -1;
    let nextNorthPos;
    let southPos = 0;

    (0,forEach/* default */.Z)(south, function (v, southLookahead) {
      if (g.node(v).dummy === 'border') {
        const predecessors = g.predecessors(v);

        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }

      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south
  }

  (0,reduce/* default */.Z)(layering, visitLayer);

  return conflicts
}

function findOtherInnerSegmentNode (g, v) {
  if (g.node(v).dummy) {
    return (0,find/* default */.Z)(g.predecessors(v), function (u) {
      return g.node(u).dummy
    })
  }
}

function addConflict (conflicts, v, w) {
  if (v > w) {
    const tmp = v;
    v = w;
    w = tmp;
  }

  let conflictsV = conflicts[v];

  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }

  conflictsV[w] = true;
}

function hasConflict (conflicts, v, w) {
  if (v > w) {
    const tmp = v;
    v = w;
    w = tmp;
  }

  return (0,has/* default */.Z)(conflicts[v], w)
}
/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */

function verticalAlignment (g, layering, conflicts, neighborFn) {
  const root = {};
  const align = {};
  const pos = {}; // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.

  (0,forEach/* default */.Z)(layering, function (layer) {
    (0,forEach/* default */.Z)(layer, function (v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  (0,forEach/* default */.Z)(layering, function (layer) {
    let prevIdx = -1;

    (0,forEach/* default */.Z)(layer, function (v) {
      let ws = neighborFn(v);

      if (ws.length) {
        ws = (0,sortBy/* default */.Z)(ws, function (w) {
          return pos[w]
        });
        const mp = (ws.length - 1) / 2;

        for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          const w = ws[i];

          if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return {
    root: root,
    align: align
  }
}

function horizontalCompaction (g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  const xs = {};
  const blockG = buildBlockGraph(g, layering, root, reverseSep); // First pass, assign smallest coordinates via DFS

  const visited = {};

  function pass1 (v) {
    if (!(0,has/* default */.Z)(visited, v)) {
      visited[v] = true;
      xs[v] = (0,reduce/* default */.Z)(blockG.inEdges(v), function (max, e) {
        pass1(e.v);
        return Math.max(max, xs[e.v] + blockG.edge(e))
      }, 0);
    }
  }

  (0,forEach/* default */.Z)(blockG.nodes(), pass1);

  const borderType = reverseSep ? 'borderLeft' : 'borderRight';

  function pass2 (v) {
    if (visited[v] !== 2) {
      visited[v]++;
      const node = g.node(v);

      const min = (0,reduce/* default */.Z)(blockG.outEdges(v), function (min, e) {
        pass2(e.w);
        return Math.min(min, xs[e.w] - blockG.edge(e))
      }, Number.POSITIVE_INFINITY);

      if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
        xs[v] = Math.max(xs[v], min);
      }
    }
  }

  (0,forEach/* default */.Z)(blockG.nodes(), pass2); // Assign x coordinates to all nodes

  (0,forEach/* default */.Z)(align, function (v) {
    xs[v] = xs[root[v]];
  });

  return xs
}

function buildBlockGraph (g, layering, root, reverseSep) {
  const blockGraph = new dist.Graph();
  const graphLabel = g.graph();
  const sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  (0,forEach/* default */.Z)(layering, function (layer) {
    let u;

    (0,forEach/* default */.Z)(layer, function (v) {
      const vRoot = root[v];
      blockGraph.setNode(vRoot);

      if (u) {
        const uRoot = root[u];
        const prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }

      u = v;
    });
  });

  return blockGraph
}
/*
 * Returns the alignment that has the smallest width of the given alignments.
 */

function findSmallestWidthAlignment (g, xss) {
  return lodash_es_minBy((0,values/* default */.Z)(xss), function (xs) {
    const min = (lodash_es_minBy(lodash_es_toPairs(xs), pair => pair[1] - width(g, pair[0]) / 2) || ['k', 0])[1];
    const max = (lodash_es_maxBy(lodash_es_toPairs(xs), pair => pair[1] + width(g, pair[0]) / 2) || ['k', 0])[1];
    return max - min
  })
}
/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */

function alignCoordinates (xss, alignTo) {
  const alignToVals = (0,values/* default */.Z)(alignTo);

  const alignToMin = lodash_es_min(alignToVals);

  const alignToMax = lodash_es_max(alignToVals);

  (0,forEach/* default */.Z)(['u', 'd'], function (vert) {
    (0,forEach/* default */.Z)(['l', 'r'], function (horiz) {
      const alignment = vert + horiz;
      const xs = xss[alignment];

      if (xs === alignTo) {
        return
      }

      const xsVals = (0,values/* default */.Z)(xs);

      const delta = horiz === 'l' ? alignToMin - lodash_es_min(xsVals) : alignToMax - lodash_es_max(xsVals);

      if (delta) {
        xss[alignment] = lodash_es_mapValues(xs, function (x) {
          return x + delta
        });
      }
    });
  });
}

function balance (xss, align) {
  return lodash_es_mapValues(xss.ul, function (ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v]
    } else {
      const xs = (0,sortBy/* default */.Z)((0,map/* default */.Z)(xss, v));

      return (xs[1] + xs[2]) / 2
    }
  })
}

function positionX (g) {
  const layering = util.buildLayerMatrix(g);

  const conflicts = (0,merge/* default */.Z)(findType1Conflicts(g, layering), findType2Conflicts(g, layering));

  const xss = {};
  let adjustedLayering;

  (0,forEach/* default */.Z)(['u', 'd'], function (vert) {
    adjustedLayering = vert === 'u' ? layering : (0,values/* default */.Z)(layering).reverse();

    (0,forEach/* default */.Z)(['l', 'r'], function (horiz) {
      if (horiz === 'r') {
        adjustedLayering = (0,map/* default */.Z)(adjustedLayering, function (inner) {
          return (0,values/* default */.Z)(inner).reverse()
        });
      }

      const neighborFn = lodash_es_bind(vert === 'u' ? g.predecessors : g.successors, g);

      const align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      let xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === 'r');

      if (horiz === 'r') {
        xs = lodash_es_mapValues(xs, function (x) {
          return -x
        });
      }

      xss[vert + horiz] = xs;
    });
  });

  const smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align)
}

function sep (nodeSep, edgeSep, reverseSep) {
  return function (g, v, w) {
    const vLabel = g.node(v);
    const wLabel = g.node(w);
    let sum = 0;
    let delta;
    sum += vLabel.width / 2;

    if ((0,has/* default */.Z)(vLabel, 'labelpos')) {
      switch (vLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = -vLabel.width / 2;
          break

        case 'r':
          delta = vLabel.width / 2;
          break
      }
    }

    if (delta) {
      sum += reverseSep ? delta : -delta;
    }

    delta = 0;
    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += wLabel.width / 2;

    if ((0,has/* default */.Z)(wLabel, 'labelpos')) {
      switch (wLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = wLabel.width / 2;
          break

        case 'r':
          delta = -wLabel.width / 2;
          break
      }
    }

    if (delta) {
      sum += reverseSep ? delta : -delta;
    }

    delta = 0;
    return sum
  }
}

function width (g, v) {
  return g.node(v).width
}


//# sourceMappingURL=bk.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/position/index.js






function position (g) {
  g = util.asNonCompoundGraph(g);
  positionY(g);

  (0,forEach/* default */.Z)(positionX(g), function (x, v) {
    g.node(v).x = x;
  });
}

function positionY (g) {
  const layering = util.buildLayerMatrix(g);
  const rankSep = g.graph().ranksep;
  let prevY = 0;

  (0,forEach/* default */.Z)(layering, function (layer) {
    const maxHeight = lodash_es_max((0,map/* default */.Z)(layer, function (v) {
      return g.node(v).height
    }));

    (0,forEach/* default */.Z)(layer, function (v) {
      g.node(v).y = prevY + maxHeight / 2;
    });

    prevY += maxHeight + rankSep;
  });
}


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/layout.js



















function layout (g, opts) {
  const time = opts && opts.debugTiming ? util.time : util.notime;
  time('layout', function () {
    const layoutGraph = time('  buildLayoutGraph', function () {
      return buildLayoutGraph(g)
    });
    time('  runLayout', function () {
      runLayout(layoutGraph, time);
    });
    time('  updateInputGraph', function () {
      updateInputGraph(g, layoutGraph);
    });
  });
}

function runLayout (g, time) {
  time('    makeSpaceForEdgeLabels', function () {
    makeSpaceForEdgeLabels(g);
  });
  time('    removeSelfEdges', function () {
    removeSelfEdges(g);
  });
  time('    acyclic', function () {
    acyclic.run(g);
  });
  time('    nestingGraph.run', function () {
    nestingGraph.run(g);
  });
  time('    rank', function () {
    rank(util.asNonCompoundGraph(g));
  });
  time('    injectEdgeLabelProxies', function () {
    injectEdgeLabelProxies(g);
  });
  time('    removeEmptyRanks', function () {
    removeEmptyRanks(g);
  });
  time('    nestingGraph.cleanup', function () {
    nestingGraph.cleanup(g);
  });
  time('    normalizeRanks', function () {
    normalizeRanks(g);
  });
  time('    assignRankMinMax', function () {
    assignRankMinMax(g);
  });
  time('    removeEdgeLabelProxies', function () {
    removeEdgeLabelProxies(g);
  });
  time('    normalize.run', function () {
    normalize.run(g);
  });
  time('    parentDummyChains', function () {
    parentDummyChains(g);
  });
  time('    addBorderSegments', function () {
    addBorderSegments(g);
  });
  time('    order', function () {
    order(g);
  });
  time('    insertSelfEdges', function () {
    insertSelfEdges(g);
  });
  time('    adjustCoordinateSystem', function () {
    coordinateSystem.adjust(g);
  });
  time('    position', function () {
    position(g);
  });
  time('    positionSelfEdges', function () {
    positionSelfEdges(g);
  });
  time('    removeBorderNodes', function () {
    removeBorderNodes(g);
  });
  time('    normalize.undo', function () {
    normalize.undo(g);
  });
  time('    fixupEdgeLabelCoords', function () {
    fixupEdgeLabelCoords(g);
  });
  time('    undoCoordinateSystem', function () {
    coordinateSystem.undo(g);
  });
  time('    translateGraph', function () {
    translateGraph(g);
  });
  time('    assignNodeIntersects', function () {
    assignNodeIntersects(g);
  });
  time('    reversePoints', function () {
    reversePointsForReversedEdges(g);
  });
  time('    acyclic.undo', function () {
    acyclic.undo(g);
  });
}
/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */

function updateInputGraph (inputGraph, layoutGraph) {
  (0,forEach/* default */.Z)(inputGraph.nodes(), function (v) {
    const inputLabel = inputGraph.node(v);
    const layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  (0,forEach/* default */.Z)(inputGraph.edges(), function (e) {
    const inputLabel = inputGraph.edge(e);
    const layoutLabel = layoutGraph.edge(e);
    inputLabel.points = layoutLabel.points;

    if ((0,has/* default */.Z)(layoutLabel, 'x')) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

const graphNumAttrs = ['nodesep', 'edgesep', 'ranksep', 'marginx', 'marginy'];
const graphDefaults = {
  ranksep: 50,
  edgesep: 20,
  nodesep: 50,
  rankdir: 'tb'
};
const graphAttrs = ['acyclicer', 'ranker', 'rankdir', 'align'];
const nodeNumAttrs = ['width', 'height'];
const nodeDefaults = {
  width: 0,
  height: 0
};
const edgeNumAttrs = ['minlen', 'weight', 'width', 'height', 'labeloffset'];
const edgeDefaults = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: 'r'
};
const edgeAttrs = ['labelpos'];
/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */

function buildLayoutGraph (inputGraph) {
  const g = new dist.Graph({
    multigraph: true,
    compound: true
  });
  const graph = canonicalize(inputGraph.graph());
  g.setGraph((0,merge/* default */.Z)({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), lodash_es_pick(graph, graphAttrs)));

  (0,forEach/* default */.Z)(inputGraph.nodes(), function (v) {
    const node = canonicalize(inputGraph.node(v));
    g.setNode(v, lodash_es_defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  (0,forEach/* default */.Z)(inputGraph.edges(), function (e) {
    const edge = canonicalize(inputGraph.edge(e));
    g.setEdge(e, (0,merge/* default */.Z)({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), lodash_es_pick(edge, edgeAttrs)));
  });

  return g
}
/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */

function makeSpaceForEdgeLabels (g) {
  const graph = g.graph();
  graph.ranksep /= 2;

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);
    edge.minlen *= 2;

    if (edge.labelpos.toLowerCase() !== 'c') {
      if (graph.rankdir === 'TB' || graph.rankdir === 'BT') {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}
/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */

function injectEdgeLabelProxies (g) {
  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    if (edge.width && edge.height) {
      const v = g.node(e.v);
      const w = g.node(e.w);
      const label = {
        rank: (w.rank - v.rank) / 2 + v.rank,
        e: e
      };
      util.addDummyNode(g, 'edge-proxy', label, '_ep');
    }
  });
}

function assignRankMinMax (g) {
  let maxRank = 0;

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);

    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      maxRank = Math.max(maxRank, node.maxRank);
    }
  });

  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies (g) {
  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);

    if (node.dummy === 'edge-proxy') {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph (g) {
  let minX = Number.POSITIVE_INFINITY;
  let maxX = 0;
  let minY = Number.POSITIVE_INFINITY;
  let maxY = 0;
  const graphLabel = g.graph();
  const marginX = graphLabel.marginx || 0;
  const marginY = graphLabel.marginy || 0;

  function getExtremes (attrs) {
    const x = attrs.x;
    const y = attrs.y;
    const w = attrs.width;
    const h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    getExtremes(g.node(v));
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    if ((0,has/* default */.Z)(edge, 'x')) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    (0,forEach/* default */.Z)(edge.points, function (p) {
      p.x -= minX;
      p.y -= minY;
    });

    if ((0,has/* default */.Z)(edge, 'x')) {
      edge.x -= minX;
    }

    if ((0,has/* default */.Z)(edge, 'y')) {
      edge.y -= minY;
    }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects (g) {
  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);
    const nodeV = g.node(e.v);
    const nodeW = g.node(e.w);
    let p1 = null;
    let p2 = null;

    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }

    edge.points.unshift(util.intersectRect(nodeV, p1));
    edge.points.push(util.intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords (g) {
  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    if ((0,has/* default */.Z)(edge, 'x')) {
      if (edge.labelpos === 'l' || edge.labelpos === 'r') {
        edge.width -= edge.labeloffset;
      }

      switch (edge.labelpos) {
        case 'l':
          edge.x -= edge.width / 2 + edge.labeloffset;
          break

        case 'r':
          edge.x += edge.width / 2 + edge.labeloffset;
          break
      }
    }
  });
}

function reversePointsForReversedEdges (g) {
  (0,forEach/* default */.Z)(g.edges(), function (e) {
    const edge = g.edge(e);

    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes (g) {
  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    if (g.children(v).length) {
      const node = g.node(v);
      const t = g.node(node.borderTop);
      const b = g.node(node.borderBottom);
      const l = g.node(lodash_es_last(node.borderLeft));
      const r = g.node(lodash_es_last(node.borderRight));
      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    if (g.node(v).dummy === 'border') {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges (g) {
  (0,forEach/* default */.Z)(g.edges(), function (e) {
    if (e.v === e.w) {
      const node = g.node(e.v);

      if (!node.selfEdges) {
        node.selfEdges = [];
      }

      node.selfEdges.push({
        e: e,
        label: g.edge(e)
      });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges (g) {
  const layers = util.buildLayerMatrix(g);

  (0,forEach/* default */.Z)(layers, function (layer) {
    let orderShift = 0;

    (0,forEach/* default */.Z)(layer, function (v, i) {
      const node = g.node(v);
      node.order = i + orderShift;

      (0,forEach/* default */.Z)(node.selfEdges, function (selfEdge) {
        util.addDummyNode(g, 'selfedge', {
          width: selfEdge.label.width,
          height: selfEdge.label.height,
          rank: node.rank,
          order: i + ++orderShift,
          e: selfEdge.e,
          label: selfEdge.label
        }, '_se');
      });

      delete node.selfEdges;
    });
  });
}

function positionSelfEdges (g) {
  (0,forEach/* default */.Z)(g.nodes(), function (v) {
    const node = g.node(v);

    if (node.dummy === 'selfedge') {
      const selfNode = g.node(node.e.v);
      const x = selfNode.x + selfNode.width / 2;
      const y = selfNode.y;
      const dx = node.x - x;
      const dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [{
        x: x + 2 * dx / 3,
        y: y - dy
      }, {
        x: x + 5 * dx / 6,
        y: y - dy
      }, {
        x: x + dx,
        y: y
      }, {
        x: x + 5 * dx / 6,
        y: y + dy
      }, {
        x: x + 2 * dx / 3,
        y: y + dy
      }];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs (obj, attrs) {
  return lodash_es_mapValues(lodash_es_pick(obj, attrs), Number)
}

function canonicalize (attrs) {
  const newAttrs = {};

  (0,forEach/* default */.Z)(attrs, function (v, k) {
    newAttrs[k.toLowerCase()] = v;
  });

  return newAttrs
}


//# sourceMappingURL=layout.js.map

;// CONCATENATED MODULE: ./node_modules/@unovis/dagre-layout/dist/index.js


const dist_layout = layout;
var index = {
  layout: layout
};


//# sourceMappingURL=index.js.map


/***/ }),

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