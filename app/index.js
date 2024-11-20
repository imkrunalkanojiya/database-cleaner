(() => {
  "use strict";
  var e,
    t = {
      3324: (e, t, n) => {
        var r = n(5072),
          a = n(7665),
          o = n(2564),
          i = n(9270),
          c = n(7097),
          s = n(4977),
          l = n(7039),
          u = n(4536),
          f = n(5263),
          p = n(6913),
          m = n(2237),
          d = n(4547),
          h = n(3676),
          y = n(9296),
          v = n(4461),
          g = n(4186),
          b = dbclnr.prefix,
          E = dbclnr.db_prefix,
          w = dbclnr.domain,
          T = dbclnr.rest_url.replace(/\/+$/, ""),
          _ = dbclnr.api_url.replace(/\/+$/, ""),
          S = dbclnr.plugin_url.replace(/\/+$/, ""),
          O = "1" === dbclnr.is_pro,
          x = O && "1" === dbclnr.is_registered,
          L = dbclnr.rest_nonce,
          R = dbclnr.core,
          A = dbclnr.core_count,
          k = dbclnr.options,
          C = dbclnr.metadata_tables,
          N = k.db_historical_sizes,
          P = N ? N[N.length - 1] : null,
          I = null;
        (null == N ? void 0 : N.length) > 1
          ? (I = N[N.length - 2])
          : (null == N ? void 0 : N.length) > 0 && (I = N[N.length - 1]),
          (k.totalSize = P),
          (k.previousTotalSize = I);
        var U,
          B,
          M,
          j,
          D,
          F = n(197),
          G = n(9616);
        function z(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        var Y = G.Ay.div(
            U ||
              (U = z([
                "\n  color: white;\n  padding: 15px;\n  margin-bottom: -15px;\n\n  a {\n    color: #7dedff;\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 15px;\n  }\n",
              ]))
          ),
          W = (0, G.Ay)(v.z)(
            B ||
              (B = z([
                "\n\n  .neko-block-title {\n    display: none;\n  }\n\n  .plugin-desc {\n    display: flex;\n    flex-direction: column;\n    margin-left: 15px;\n  }\n\n  .neko-block-content {\n    display: flex;\n    padding: 15px;\n\n    h2 {\n      font-size: 18px;\n      margin: 0;\n\n      a {\n        text-decoration: none;\n      }\n    }\n\n    p {\n      margin: 0px;\n      margin-top: 10px;\n      font-size: 13px;\n      line-height: 1.5;\n    }\n\n    .plugin-actual-desc {\n      font-size: 13px;\n      font-weight: 500;\n    }\n  }\n",
              ]))
          ),
          V = G.Ay.img(
            M ||
              (M = z([
                "\n  height: 125px;\n  width: auto;\n  border-radius: 10px;\n  background: lightgray;\n",
              ]))
          ),
          K = G.Ay.div(
            j ||
              (j = z([
                "\n\n  margin: 15px;\n\n  .center {\n    background: white;\n    color: black;\n    border-radius: 10px;\n    padding: 10px;\n    max-width: 100%\n    overflow: none;\n\n    h2 {\n      font-size: 26px;\n    }\n\n    table {\n      width: 100%;\n\n      tr td:first-child {\n        width: 220px;\n        font-weight: bold;\n        color: #1e7cba;\n      }\n\n      * {\n        overflow-wrap: anywhere;\n      }\n    }\n  }\n\n  hr {\n    border-color: #1e7cba;\n  }\n",
              ]))
          ),
          H = G.Ay.ul(
            D ||
              (D = z([
                "\n  margin-top: 10px;\n  background: rgb(0, 72, 88);\n  padding: 10px;\n  color: rgb(58, 212, 58);\n  max-height: 600px;\n  min-height: 200px;\n  display: block;\n  font-family: monospace;\n  font-size: 12px;\n  white-space: pre;\n  overflow-x: auto;\n  width: calc(100vw - 276px);\n  color: white;\n\n  .log-date {\n    color: var(--neko-yellow);\n    margin-left: 8px;\n  }\n\n  .log-type {\n    background: #0000004d;\n    padding: 2px 5px;\n    border-radius: 8px;\n    text-transform: uppercase;\n  }\n\n  .log-content {\n    display: block;\n  }\n\n  .log-warning .log-type {\n    background: var(--neko-yellow);\n    color: white;\n  }\n\n  .log-fatal .log-type {\n    background: var(--neko-red);\n    color: white;\n  }\n",
              ]))
          );
        function q(e) {
          return (
            (q =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            q(e)
          );
        }
        function J() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ J =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == q(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(q(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Q(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return te(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            ee(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function X(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Z(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                X(o, r, a, i, c, "next", e);
              }
              function c(e) {
                X(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function $(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            ee(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ee(e, t) {
          if (e) {
            if ("string" == typeof e) return te(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? te(e, t)
                : void 0
            );
          }
        }
        function te(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ne = wp.element,
          re = ne.useState,
          ae = ne.useEffect,
          oe = "".concat(T, "/meow-common/v1"),
          ie = function (e) {
            var t = e.request,
              n = e.title,
              r = e.max,
              a = $(re(!1), 2),
              o = a[0],
              i = a[1],
              c = $(re([]), 2),
              l = c[0],
              u = c[1],
              f =
                l.length > 0
                  ? l.reduce(function (e, t) {
                      return e + t;
                    })
                  : 0,
              p = l.length > 0 ? Math.ceil(f / l.length) : 0,
              m = !l.length && o;
            ae(
              function () {
                o &&
                  setTimeout(
                    Z(
                      J().mark(function e() {
                        var n, r, a;
                        return J().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = new Date().getTime()),
                                  (e.next = 3),
                                  (0, g.IU)("".concat(oe, "/").concat(t), {
                                    method: "POST",
                                    nonce: L,
                                  })
                                );
                              case 3:
                                (r = new Date().getTime()),
                                  (a = r - n),
                                  u(function (e) {
                                    return [].concat(Q(e), [a]);
                                  });
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    1e3
                  );
              },
              [l]
            );
            return React.createElement(
              Y,
              { style: { width: 200, textAlign: "center" } },
              React.createElement(
                s.s,
                { h2: !0, style: { color: "white" } },
                n
              ),
              React.createElement(
                F.X,
                { size: 200, value: m ? r : p, max: r },
                React.createElement(
                  "span",
                  { style: { fontSize: 20 } },
                  m ? "START" : p + " ms"
                ),
                React.createElement(
                  "span",
                  { style: { fontSize: 12 } },
                  m ? "YOUR ENGINE" : l.length + " requests"
                )
              ),
              React.createElement(
                y.M,
                {
                  style: { width: "100%", marginTop: 10 },
                  color: o ? "#cc3627" : "#ccb027",
                  onClick: function () {
                    o || u([]), i(!o);
                  },
                },
                o ? "Stop" : "Start"
              )
            );
          };
        function ce(e) {
          return (
            (ce =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            ce(e)
          );
        }
        function se(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return le(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return le(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function le(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function ue() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ue =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == ce(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(ce(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function fe(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function pe(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                fe(o, r, a, i, c, "next", e);
              }
              function c(e) {
                fe(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        var me = wp.element,
          de = me.useState,
          he = me.useEffect;
        (_ && T && S) ||
          console.error(
            "[@common/dashboard] apiUrl, restUrl and pluginUrl are mandatory."
          );
        var ye = "".concat(T, "/meow-common/v1"),
          ve = React.createElement(
            Y,
            null,
            React.createElement(
              s.s,
              { p: !0, style: { lineHeight: "1.5", margin: "0 0 15px 0" } },
              "Hi! ☀️ Meow Apps isn't your typical plugin suite—it's a passion project led by me, ",
              React.createElement(
                "a",
                { target: "_blank", href: "https://jordymeow.com" },
                "Jordy Meow"
              ),
              ", and a stellar team! 💕 Based in ",
              React.createElement(
                "a",
                { target: "_blank", href: "https://offbeatjapan.org" },
                "Japan"
              ),
              ", we're all about making your WordPress experience smoother and speedier. Our plugins are all about boosting your site's performance and user-friendliness. Ready to level up your WordPress game? Check out ",
              React.createElement(
                "a",
                { href: "http://meowapps.com", target: "_blank" },
                "Meow Apps"
              ),
              " and let's make magic happen! 🌴🙀"
            )
          ),
          ge = React.createElement(
            Y,
            null,
            React.createElement(
              s.s,
              { p: !0 },
              "The ",
              React.createElement("b", null, "Empty Request Time"),
              " measures your installation's basic performance by showing the average time needed to process an empty request on your server. To see how disabling plugins affects the results, turn some off and run the test again. Aim for a time under 2,000 ms, but ideally, keep it below 500 ms. The ",
              React.createElement("b", null, "File Operation Time"),
              " creates a temporary 10MB file each time it runs. ",
              React.createElement("b", null, "The SQL Request Time"),
              " calculates the total number of posts. This process should be quick and have a similar duration to the Empty Request Time."
            )
          ),
          be = React.createElement(
            Y,
            null,
            React.createElement(
              s.s,
              { p: !0 },
              "Maintain a streamlined WordPress setup by using essential plugins and a dependable hosting provider. Refrain from self-hosting unless you're an expert. Go further by reading our tutorials:",
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "⭐️ ",
                  React.createElement(
                    "a",
                    {
                      href: "https://meowapps.com/tutorial-improve-seo-wordpress/",
                      target: "_blank",
                    },
                    "SEO Checklist & Optimization"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  "⭐️ ",
                  React.createElement(
                    "a",
                    {
                      href: "https://meowapps.com/tutorial-faster-wordpress-optimize/",
                      target: "_blank",
                    },
                    "Optimize your WordPress Speed"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  "⭐️ ",
                  React.createElement(
                    "a",
                    {
                      href: "https://meowapps.com/tutorial-optimize-images-wordpress/",
                      target: "_blank",
                    },
                    "Optimize Images (CDN, and so on)"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  "⭐️ ",
                  React.createElement(
                    "a",
                    {
                      href: "https://meowapps.com/tutorial-hosting-service-wordpress/",
                      target: "_blank",
                    },
                    "The Best Hosting Services for WordPress"
                  )
                )
              )
            )
          ),
          Ee = (function () {
            var e = pe(
              ue().mark(function e() {
                var t;
                return ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, g.IU)("".concat(ye, "/all_settings/"), {
                            method: "POST",
                            nonce: L,
                          })
                        );
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          we = (function () {
            var e = pe(
              ue().mark(function e(t) {
                var n, r, a;
                return ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.value),
                          (r = t.id),
                          (e.next = 3),
                          (0, g.IU)("".concat(ye, "/update_option"), {
                            method: "POST",
                            nonce: L,
                            json: { name: r, value: n },
                          })
                        );
                      case 3:
                        return (a = e.sent), e.abrupt("return", a);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          Te = (function () {
            var e = pe(
              ue().mark(function e() {
                var t;
                return ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, g.IU)("".concat(ye, "/error_logs"), {
                            method: "POST",
                            nonce: L,
                          })
                        );
                      case 2:
                        return (
                          (t = e.sent), e.abrupt("return", t.data.reverse())
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          _e = function () {
            var e = (0, a.jE)(),
              t = se(de(!1), 2),
              n = t[0],
              r = t[1],
              o = se(de(!1), 2),
              g = o[0],
              b = (o[1], se(de(""), 2)),
              E = b[0],
              w = b[1],
              T = (0, i.I)({ queryKey: ["all_settings"], queryFn: Ee }),
              _ = T.data,
              S = T.error,
              O =
                (T.isLoading,
                (0, c.n)({
                  mutationFn: we,
                  onSuccess: function () {
                    e.invalidateQueries(["all_settings"]);
                  },
                }).mutate),
              x = (0, c.n)({ mutationFn: Te }),
              L = x.mutate,
              R = x.data,
              A = void 0 === R ? [] : R,
              k = null == _ ? void 0 : _.meowapps_hide_meowapps,
              C = null == _ ? void 0 : _.force_sslverify;
            he(
              function () {
                S &&
                  !n &&
                  (r(!0), console.error("Error from useQuery", S.message));
              },
              [S]
            ),
              he(function () {
                var e = document.getElementById("meow-common-phpinfo");
                w(e.innerHTML);
              }, []);
            var N = function (e, t) {
                O({ value: e, id: t });
              },
              P = React.createElement(
                l.d,
                { title: "Main Menu" },
                React.createElement(
                  u.E,
                  { max: "1" },
                  React.createElement(f.R, {
                    name: "meowapps_hide_meowapps",
                    label: "Hide (Not Recommended)",
                    description: React.createElement(
                      s.s,
                      { p: !0 },
                      "This will hide the Meow Apps Menu (on the left side) and everything it contains. You can re-enable it through though an option that will be added in Settings → General."
                    ),
                    value: "1",
                    disabled: g,
                    checked: k,
                    onChange: N,
                  })
                )
              ),
              I = React.createElement(
                l.d,
                { title: "SSL Verify" },
                React.createElement(
                  u.E,
                  { max: "1" },
                  React.createElement(f.R, {
                    name: "force_sslverify",
                    label: "Force (Not Recommended)",
                    description: React.createElement(
                      s.s,
                      { p: !0 },
                      "This will enforce the usage of SSL when checking the license or updating the plugin."
                    ),
                    value: "1",
                    disabled: g,
                    checked: C,
                    onChange: N,
                  })
                )
              );
            return React.createElement(
              p.z,
              { showRestError: n },
              React.createElement(m.n, { title: "The Dashboard" }),
              React.createElement(
                d.N,
                null,
                React.createElement(
                  d.Y,
                  { full: !0 },
                  React.createElement(
                    h._,
                    { keepTabOnReload: !0 },
                    React.createElement(
                      h.V,
                      { title: "Database Cleaner" },
                      ve,
                      React.createElement(
                        d.N,
                        null,
                        React.createElement(
                          d.Y,
                          { minimal: !0 },
                          React.createElement(
                            W,
                            { title: "AI Engine", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/ai-engine/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/ai-engine/",
                                  },
                                  "AI Engine"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "This is the ultimate AI plugin for WordPress. From a chatbot adapted to your needs to an AI that can write your content for you, API, REST, and more."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/ai-engine/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/ai-engine/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Media Cleaner", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/media-cleaner/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/media-cleaner/",
                                  },
                                  "Media Cleaner"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Is your Media Library bloated, your database heavy, and your website running slow? Media Cleaner will clean your Media Library from the media entries (and files) which aren't used in your website, as well as broken entries."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/media-cleaner/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/media-cleaner/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Database Cleaner", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/database-cleaner/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/database-cleaner/",
                                  },
                                  "Database Cleaner"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Not only does Database Cleaner have a user-friendly UI, but it's also equipped to handle large DBs, giving it an edge over other plugins. It's a must-have for any WordPress site."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/database-cleaner/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/database-cleaner/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            {
                              title: "Media File Renamer",
                              className: "primary",
                            },
                            React.createElement(V, {
                              src: "https://ps.w.org/media-file-renamer/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/media-file-renamer/",
                                  },
                                  "Media File Renamer"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Rename and move files directly from the dashboard, manually, automatically or via AI, either individually or in bulk. It's the best way to rename your files."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/media-file-renamer/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/media-file-renamer/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Social Engine", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/social-engine/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/social-engine/",
                                  },
                                  "Social Engine"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                'Effortlessly schedule and automate the perfect posts for all your networks. Unlimited capabilities and infinite className="plugin-actual-desc" extensibility, for free!'
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/social-engine/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/social-engine/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Meow Analytics", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/meow-analytics/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/meow-analytics/",
                                  },
                                  "Meow Analytics"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Google Analytics for your website. Simple and fast."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/meow-analytics/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/meow-analytics/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          )
                        ),
                        React.createElement(
                          d.Y,
                          { minimal: !0 },
                          React.createElement(
                            W,
                            {
                              title: "Contact Form Block",
                              className: "primary",
                            },
                            React.createElement(V, {
                              src: "https://ps.w.org/seo-engine/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/seo-engine/",
                                  },
                                  "SEO Engine"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Optimize your content for SEO and for the AI world, with AI assistants... while keeping everything simple and fast, as it should be! ✌️"
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/seo-engine/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/seo-engine/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Meow Gallery", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/meow-gallery/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/meow-gallery/",
                                  },
                                  "Meow Gallery"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Fast and beautiful galleries with many layouts. Forget the heavy and slow plugins, use the Meow Gallery for a better experience! 💕"
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/meow-gallery/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/meow-gallery/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Meow Lightbox", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/meow-lightbox/assets/icon-256x256.gif",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/meow-lightbox/",
                                  },
                                  "Meow Lightbox"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Sleek and performant lightbox with EXIF support."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/meow-lightbox/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/meow-lightbox/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            {
                              title: "Perfect Images (Retina)",
                              className: "primary",
                            },
                            React.createElement(V, {
                              src: "https://ps.w.org/wp-retina-2x/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/wp-retina-2x/",
                                  },
                                  "Perfect Images"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Manage, Optimize, Replace your images with Perfect Images."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/wp-retina-2x/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/wp-retina-2x/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            { title: "Photo Engine", className: "primary" },
                            React.createElement(V, {
                              src: "https://ps.w.org/wplr-sync/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/wplr-sync/",
                                  },
                                  "Photo Engine"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Organize your photos in folders and collections. Synchronize with Lightroom. Simplify and speed up your workflow."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/wplr-sync/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/wplr-sync/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          ),
                          React.createElement(
                            W,
                            {
                              title: "Contact Form Block",
                              className: "primary",
                            },
                            React.createElement(V, {
                              src: "https://ps.w.org/contact-form-block/assets/icon-256x256.png",
                            }),
                            React.createElement(
                              "div",
                              { className: "plugin-desc" },
                              React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href: "https://wordpress.org/plugins/contact-form-block/",
                                  },
                                  "Contact Form Block"
                                )
                              ),
                              React.createElement(
                                "p",
                                { className: "plugin-actual-desc" },
                                "Need a very simple but straightforward contact form? This is the one you need. It's fast, simple, and efficient."
                              ),
                              React.createElement(
                                "p",
                                null,
                                React.createElement(
                                  "div",
                                  null,
                                  "Free Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://wordpress.org/plugins/contact-form-block/",
                                    },
                                    "WordPress.org"
                                  )
                                ),
                                React.createElement(
                                  "div",
                                  null,
                                  "Pro Version: ",
                                  React.createElement(
                                    "a",
                                    {
                                      target: "_blank",
                                      href: "https://meowapps.com/contact-form-block/",
                                    },
                                    "Meow Apps"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      h.V,
                      { title: "Performance" },
                      ge,
                      React.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            justifyContent: "space-around",
                            marginBottom: 25,
                          },
                        },
                        React.createElement(ie, {
                          title: "Empty Request Time",
                          request: "empty_request",
                          max: 2500,
                        }),
                        React.createElement(ie, {
                          title: "File Operation Time",
                          request: "file_operation",
                          max: 2600,
                        }),
                        React.createElement(ie, {
                          title: "SQL Request Time",
                          request: "sql_request",
                          max: 2800,
                        })
                      ),
                      be
                    ),
                    React.createElement(
                      h.V,
                      { title: "PHP Info" },
                      React.createElement(K, {
                        dangerouslySetInnerHTML: { __html: E },
                      })
                    ),
                    React.createElement(
                      h.V,
                      { title: "PHP Error Logs" },
                      React.createElement(
                        Y,
                        null,
                        React.createElement(
                          y.M,
                          {
                            style: { marginBottom: 10 },
                            color: "#ccb027",
                            onClick: function () {
                              L();
                            },
                            disabled: g,
                            isBusy: "isLoadingErrorLogs" === g,
                          },
                          "Load PHP Error Logs"
                        ),
                        React.createElement(
                          H,
                          null,
                          A.map(function (e) {
                            return React.createElement(
                              "li",
                              { class: "log-".concat(e.type) },
                              React.createElement(
                                "span",
                                { class: "log-type" },
                                e.type
                              ),
                              React.createElement(
                                "span",
                                { class: "log-date" },
                                e.date
                              ),
                              React.createElement(
                                "span",
                                { class: "log-content" },
                                e.content
                              )
                            );
                          })
                        ),
                        React.createElement(
                          s.s,
                          { p: !0 },
                          "If you don't see any errors, your host might not allow remote access to PHP error logs. Contact them for assistance, or look in your hosting control panel."
                        )
                      )
                    ),
                    React.createElement(
                      h.V,
                      { title: "Settings" },
                      React.createElement(
                        v.z,
                        { title: "Settings", className: "primary" },
                        P,
                        I
                      )
                    )
                  )
                )
              )
            );
          },
          Se = n(1543),
          Oe = n(7494),
          xe = n(8482),
          Le = n(8058),
          Re = n(851),
          Ae = n(9794),
          ke = n(2330),
          Ce = n(520),
          Ne = n(890),
          Pe = n(6897),
          Ie = n(8785),
          Ue = n.n(Ie),
          Be = n(8696),
          Me = n(7213);
        function je(e) {
          return (
            (je =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            je(e)
          );
        }
        function De() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ De =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == je(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(je(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Fe(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Ge(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Fe(o, r, a, i, c, "next", e);
              }
              function c(e) {
                Fe(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function ze(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Ye(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ye(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ye(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var We = wp.element,
          Ve = We.useState,
          Ke = We.useEffect,
          He = "".concat(T, "/meow-licenser/").concat(b, "/v1"),
          qe = function () {
            var e = ze(Ve(!1), 2),
              t = e[0],
              n = e[1],
              r = ze(Ve(!1), 2),
              a = r[0],
              o = r[1],
              i = ze(Ve(null), 2),
              c = i[0],
              l = i[1],
              u = ze(Ve(null), 2),
              f = u[0],
              p = u[1],
              m = ze(Ve(""), 2),
              d = m[0],
              h = m[1],
              b = x && (!f || "valid" !== f.license),
              E = (function () {
                var e = Ge(
                  De().mark(function e() {
                    var t;
                    return De().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (O) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                n(!0),
                                (e.prev = 3),
                                (e.next = 6),
                                (0, g.IU)("".concat(He, "/get_license"), {
                                  method: "POST",
                                  nonce: L,
                                })
                              );
                            case 6:
                              (t = e.sent),
                                p(t.data),
                                t.data.key && h(t.data.key),
                                (e.next = 15);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(3)),
                                alert(
                                  "Error while checking the license. Check your console for more information."
                                ),
                                console.error(e.t0);
                            case 15:
                              n(!1);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 11]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              w = (function () {
                var e = Ge(
                  De().mark(function e() {
                    return De().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n(!0),
                                (e.prev = 1),
                                (e.next = 4),
                                (0, g.IU)("".concat(He, "/set_license"), {
                                  method: "POST",
                                  nonce: L,
                                  json: { serialKey: null },
                                })
                              );
                            case 4:
                              e.sent.success &&
                                (h(""), p(null), l("licenseRemoved")),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                alert(
                                  "Error while removing the license. Check your console for more information."
                                ),
                                console.error(e.t0);
                            case 12:
                              n(!1);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              T = (function () {
                var e = Ge(
                  De().mark(function e() {
                    var t;
                    return De().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n(!0),
                                (e.prev = 1),
                                (e.next = 4),
                                (0, g.IU)("".concat(He, "/set_license"), {
                                  method: "POST",
                                  nonce: L,
                                  json: { serialKey: d, override: !0 },
                                })
                              );
                            case 4:
                              (t = e.sent).success &&
                                (p(t.data),
                                t.data && !t.data.issue && l("licenseAdded")),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                alert(
                                  "Error while forcing the license. Check your console for more information."
                                ),
                                console.error(e.t0);
                            case 12:
                              n(!1);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              _ = (function () {
                var e = Ge(
                  De().mark(function e() {
                    var t;
                    return De().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("MEOW_OVERRIDE" !== d) {
                                e.next = 5;
                                break;
                              }
                              return o(!0), p(null), h(""), e.abrupt("return");
                            case 5:
                              return (
                                n(!0),
                                (e.prev = 6),
                                (e.next = 9),
                                (0, g.IU)("".concat(He, "/set_license"), {
                                  method: "POST",
                                  nonce: L,
                                  json: { serialKey: d },
                                })
                              );
                            case 9:
                              (t = e.sent).success &&
                                (p(t.data),
                                t.data && !t.data.issue && l("licenseAdded")),
                                (e.next = 17);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(6)),
                                alert(
                                  "Error while validating the license. Check your console for more information."
                                ),
                                console.error(e.t0);
                            case 17:
                              n(!1);
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[6, 13]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            Ke(function () {
              E();
            }, []);
            var S = b ? "Forced License" : x ? "Enabled" : "Disabled",
              R = b || (f && "valid" === f.license),
              A = "Your license is active. Thanks a lot for your support :)";
            b &&
              ((A = "This license has been force-enabled for you."),
              f &&
                f.check_url &&
                (A = React.createElement(
                  React.Fragment,
                  null,
                  React.createElement("span", null, A),
                  React.createElement("br", null),
                  React.createElement(
                    "small",
                    null,
                    "To check your license status, please click ",
                    React.createElement(
                      "a",
                      {
                        target: "_blank",
                        href: f.check_url + "&cache=" + 642e3 * Math.random(),
                        rel: "noreferrer",
                      },
                      "here"
                    ),
                    "."
                  )
                ))),
              R ||
                (f
                  ? "no_activations_left" === f.issue
                    ? (A = React.createElement(
                        "span",
                        null,
                        "There are no activations left for this license. You can visit your account at ",
                        React.createElement(
                          "a",
                          {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://meowapps.com",
                          },
                          "Meow Apps"
                        ),
                        ", unregister a site, and click on ",
                        React.createElement("i", null, "Retry to validate"),
                        "."
                      ))
                    : "expired" === f.issue
                    ? (A = React.createElement(
                        "span",
                        null,
                        "Your license has expired. You can get another license or renew the current one by visiting your account at ",
                        React.createElement(
                          "a",
                          {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://meowapps.com",
                          },
                          "Meow Apps"
                        ),
                        "."
                      ))
                    : "missing" === f.issue
                    ? (A = "This license does not exist.")
                    : "disabled" === f.issue
                    ? (A = "This license has been disabled.")
                    : "item_name_mismatch" === f.issue
                    ? (A =
                        "This license seems to be for a different plugin... isn't it? :)")
                    : "forced" === f.issue
                    ? (A = "ABC")
                    : ((A = React.createElement(
                        "span",
                        null,
                        "There is an unknown error related to the system or this serial key. Really sorry about this! Make sure your security plugins and systems are off temporarily. If you are still experiencing an issue, please ",
                        React.createElement(
                          "a",
                          {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://meowapps.com/contact/",
                          },
                          "contact us"
                        ),
                        "."
                      )),
                      console.error({ license: f }))
                  : (A = "Unknown error :("));
            var k = React.createElement(
                v.z,
                { title: "Pro Version (Not Installed)", className: "primary" },
                "You will find more information about the Pro Version ",
                React.createElement(
                  "a",
                  {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://meowapps.com",
                  },
                  "here"
                ),
                ". If you actually bought the Pro Version already, please remove the current plugin and download the Pro Version from your account at ",
                React.createElement(
                  "a",
                  {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://meowapps.com/",
                  },
                  "Meow Apps"
                ),
                "."
              ),
              C = React.createElement(
                v.z,
                {
                  title: "Pro Version (".concat(S, ")"),
                  busy: t,
                  className: "primary",
                },
                !b &&
                  !(f && f.key === d) &&
                  React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                      "div",
                      { style: { marginBottom: 10 } },
                      "License Key:"
                    ),
                    React.createElement(Be.A, {
                      id: "mfrh_pro_serial",
                      name: "mfrh_pro_serial",
                      disabled: t,
                      value: d,
                      onChange: function (e) {
                        return h(e);
                      },
                      placeholder: "Type your license key...",
                    }),
                    React.createElement(
                      s.s,
                      { p: !0 },
                      "Insert your serial key above. If you don't have one yet, you can get one ",
                      React.createElement(
                        "a",
                        { href: "https://meowapps.com" },
                        "here"
                      ),
                      ". If there was an error during the validation, try the ",
                      React.createElement("i", null, "Retry"),
                      " to ",
                      React.createElement("i", null, "validate"),
                      " button."
                    )
                  ),
                f && !R && React.createElement(Me.X, { variant: "danger" }, A),
                (b || f) &&
                  R &&
                  React.createElement(Me.X, { variant: "success" }, A),
                React.createElement(
                  "div",
                  {
                    style: {
                      marginTop: 15,
                      display: "flex",
                      justifyContent: "end",
                    },
                  },
                  f &&
                    !R &&
                    React.createElement(
                      y.M,
                      { className: "secondary", disabled: t || !d, onClick: _ },
                      "Retry to validate"
                    ),
                  f &&
                    f.key === d &&
                    React.createElement(
                      y.M,
                      { className: "secondary", disabled: t || !d, onClick: w },
                      "Remove License"
                    ),
                  React.createElement(
                    y.M,
                    { disabled: t || !d || (f && f.key === d), onClick: _ },
                    "Validate License"
                  ),
                  a &&
                    !R &&
                    React.createElement(
                      y.M,
                      {
                        disabled: t || !d || (f && f.key === d),
                        onClick: T,
                        className: "danger",
                      },
                      "Force License"
                    )
                ),
                React.createElement(Ae.n, {
                  isOpen: "licenseAdded" === c,
                  title: "Thank you :)",
                  content:
                    "The Pro features have been enabled. This page should be now reloaded.",
                  okButton: {
                    label: "Reload",
                    onClick: function () {
                      return location.reload();
                    },
                  },
                }),
                React.createElement(Ae.n, {
                  isOpen: "licenseRemoved" === c,
                  title: "Goodbye :(",
                  content:
                    "The Pro features have been disabled. This page should be now reloaded.",
                  okButton: {
                    label: "Reload",
                    onClick: function () {
                      return location.reload();
                    },
                  },
                })
              );
            return O ? C : k;
          };
        const { __: Je } = wp.i18n,
          Qe = {};
        (Qe.COMMON = {
          PLUGIN_NAME: Je("Database Cleaner", "database-cleaner"),
          TUTORIAL: Je("Tutorial", "database-cleaner"),
          SETTINGS: Je("Settings", "database-cleaner"),
          DASHBOARD: Je("Dashboard", "database-cleaner"),
          BY_JORDY_MEOW: Je("By TechAlgoSpotlight", "media-cleaner"),
          TABLE: Je("Table", "database-cleaner"),
          CLOSE: Je("Close", "database-cleaner"),
          USED_BY: Je("Used By", "database-cleaner"),
          SELECTED_ITEMS: Je("selected items", "database-cleaner"),
          UNKNOWN: Je("Unknown", "database-cleaner"),
          ASSIGN_PLUGIN: Je("Assign Plugin", "database-cleaner"),
          RE_ASSIGN_PLUGIN: Je("ReAssign Plugin", "database-cleaner"),
          NATIVE_PLUGIN_WARNING: Je(
            "⚠️ This is a natively supported plugin, you should not change its association. Are you sure you want to proceed?",
            "database-cleaner"
          ),
          SEARCH: Je("Search", "database-cleaner"),
          ITEMS_PER_PAGE: Je("items per page", "database-cleaner"),
          CLEAN: Je("Clean", "database-cleaner"),
          DEV_TOOLS: Je("Dev Tools", "ai-engine"),
          LOGS: Je("Logs", "database-cleaner"),
          CLEAR_LOGS: Je("Clear Logs", "database-cleaner"),
          REFRESH_LOGS: Je("Refresh Logs", "database-cleaner"),
        }),
          (Qe.HELP = {
            DEV_TOOLS: Je(
              "Enable a new tab with debugging tools. For developers only.",
              "ai-engine"
            ),
            SWEEPER: Je(
              'Constantly and discreetly cleans your database in bite-sized tasks, keeping your site\'s speed unaffected. All the items set with "Auto" will be processed.',
              "ai-engine"
            ),
          }),
          (Qe.CHART_SIZES = {
            THIS_IS_FAKE_DATA: Je("This is fake data! 😎", "database-cleaner"),
          }),
          (Qe.DASHBOARD = {
            WELCOME_MESSAGE: Je(
              "Welcome to the Database Cleaner Dashboard.",
              "database-cleaner"
            ),
          }),
          (Qe.CORE_SECTIONS = {
            POSTS: Je("Posts", "database-cleaner"),
            POSTS_METADATA: Je("Posts Metadata", "database-cleaner"),
            USERS: Je("Users", "database-cleaner"),
            COMMENTS: Je("Comments", "database-cleaner"),
            TRANSIENTS: Je("Transients", "database-cleaner"),
            POST_TYPES: Je("Post Types", "database-cleaner"),
          }),
          (Qe.HOOKS = {
            POSTS_METADATA_DUPLICATED_WARNING: Je(
              "Based on the nature of meta duplicates, it is better to do it manually",
              "database-cleaner"
            ),
          }),
          (Qe.TABLE_COLUMN_TITLE = {
            DETAILS: Je("Details", "database-cleaner"),
            COUNT: Je("Count", "database-cleaner"),
            MODE: Je("Mode", "database-cleaner"),
            POST_TYPE: Je("Post Type", "database-cleaner"),
            USED_BY: Je("Used By", "database-cleaner"),
            TABLE: Je("Table", "database-cleaner"),
            SIZE: Je("Size", "database-cleaner"),
            RELATIVE_PERCENTAGE: Je("Relative %", "database-cleaner"),
            AUTO: Je("Auto", "database-cleaner"),
            SCHEDULE: Je("Schedule", "database-cleaner"),
            NEXT_RUN: Je("Next Run", "database-cleaner"),
            NAME: Je("Name", "database-cleaner"),
            CLEAN: Je("Clean", "database-cleaner"),
            ACTION: Je("Action", "database-cleaner"),
            POST_ID: Je("Post ID", "database-cleaner"),
            USER_ID: Je("User ID", "database-cleaner"),
          }),
          (Qe.FILTER_TITLE = {
            ALL: Je("All", "database-cleaner"),
            NOT_USED: Je("Not Used", "database-cleaner"),
            USED: Je("Used", "database-cleaner"),
            AUTOLOADED: Je("Autoloaded", "database-cleaner"),
            NOT_AUTOLOADED: Je("Not Autoloaded", "database-cleaner"),
            UNKNOWN: Je("Unknown", "database-cleaner"),
            SIZE: Je("Size", "database-cleaner"),
            RELATIVE_PERCENTAGE: Je("Relative %", "database-cleaner"),
            AUTO: Je("Auto", "database-cleaner"),
            SCHEDULE: Je("Schedule", "database-cleaner"),
            NEXT_RUN: Je("Next Run", "database-cleaner"),
          }),
          (Qe.CLEAN_STYLE_LABEL = {
            AUTO: Je("Auto", "database-cleaner"),
            MANUAL: Je("Manual", "database-cleaner"),
            NEVER: Je("Never", "database-cleaner"),
          }),
          (Qe.AGE_LABEL = {
            NONE: Je("None", "database-cleaner"),
            DAY: Je("day", "database-cleaner"),
            DAYS: Je("days", "database-cleaner"),
            MONTH: Je("month", "database-cleaner"),
            YEAR: Je("year", "database-cleaner"),
          }),
          (Qe.MODE = {
            EXPERT: Je("Expert", "database-cleaner"),
            EASY: Je("Easy", "database-cleaner"),
          }),
          (Qe.CONTEXT = {
            HIDE_ITEMS_USED_BY_WORDPRESS: Je(
              "Hide items used by WordPress",
              "database-cleaner"
            ),
            MODAL_DOES_NOT_EXIST: Je(
              "The modal {0} doesn't exist.",
              "database-cleaner"
            ),
            HISTORICAL_DB_SIZES: Je("Historical DB Sizes", "database-cleaner"),
          }),
          (Qe.MODAL = {
            DELETE_ALL: Je("Delete All", "database-cleaner"),
            DATA: Je("Data", "database-cleaner"),
            USED_BY: Je("Used By", "database-cleaner"),
            OPTION_DATA: Je("Option data", "database-cleaner"),
            METADATA: Je("Metadata", "database-cleaner"),
            TABLE: Je("Table", "database-cleaner"),
            FINISHED: Je("Finished", "database-cleaner"),
            ARE_YOU_SURE: Je("Are you sure?", "database-cleaner"),
            WRITE_TO_BROWSER_CONSOLE: Je(
              "Write to Browser Console",
              "database-cleaner"
            ),
            NO_DATA: Je("No data.", "database-cleaner"),
            NO_ENTRIES: Je("No entries.", "database-cleaner"),
            UNASSIGN: Je("Unassign", "database-cleaner"),
            ASSIGN: Je("Assign", "database-cleaner"),
            SELECTED_PLUGIN_SLUG: Je(
              "Selected Plugin Slug",
              "database-cleaner"
            ),
            EVERYTHING_CLEAN: Je(
              "Everything is clean already!",
              "database-cleaner"
            ),
            EVERYTHING_CLEAN_INFO: Je(
              "",
              "database-cleaner"
            ),
            USED_BY_RECOMMEND_PRO_MESSAGE: Je(
              "The <b>Pro Version</b> of Database Cleaner knows much more about how data is used, and can simplify this for you! Please check <a href='https://meowapps.com/products/database-cleaner-pro/' target='_blank'>Database Cleaner Pro</a>. And don't hesitate to <a href='https://meowapps.com/contact' target='_blank'>contact me</a> for a discount! 💕",
              "database-cleaner"
            ),
            USED_BY_DESCRIPTION: Je(
              "Please visit the <b>Settings</b> tab to access all your <b>Used By</b> data. Don't hesitate to share it <a href='https://meowapps.com/support/' target='_blank'>with me</a> so that I can make this plugin better.",
              "database-cleaner"
            ),
            EDIT_CUSTOM_QUERY: Je("Edit Custom Query", "database-cleaner"),
            SAVE: Je("Save", "database-cleaner"),
            OPTION_VALUE_TITLE: Je("Option: {0}", "database-cleaner"),
          }),
          (Qe.BULK_TASK = {
            STEP: Je("STEP", "database-cleaner"),
            GETTING_TASKS: Je("Getting tasks...", "database-cleaner"),
            CLEANING_ITEMS: Je("Cleaning items...", "database-cleaner"),
            FINAL_MESSAGE_WITH_ERROR: Je(
              "The process has finished, but {0} error(s) occurred.",
              "database-cleaner"
            ),
            REFRESH_COUNTS: Je("Refresh the counts", "database-cleaner"),
            DELETE_SELECTED_ITEMS: Je(
              "Delete the selected items",
              "database-cleaner"
            ),
            DELETE: Je(
              "Delete the data older than the date threshold",
              "database-cleaner"
            ),
            USED_BY: Je("Assign Plugin for Selected Items", "database-cleaner"),
          }),
          (Qe.SETTINGS = {
            AUTO_CLEAN: Je("Auto Clean", "database-cleaner"),
            TODAY: Je("TODAY", "database-cleaner"),
            WORDPRESS_CORE: Je("WordPress Core", "database-cleaner"),
            POST_TYPES: Je("Post Types", "database-cleaner"),
            LIST_POST_TYPES: Je("List Post Types", "database-cleaner"),
            TABLES: Je("Tables", "database-cleaner"),
            OPTIONS: Je("Options", "database-cleaner"),
            CRON_JOBS: Je("Cron Jobs", "database-cleaner"),
            CUSTOM_QUERIES: Je("Custom Queries", "database-cleaner"),
            SETTINGS_LOGS: Je("Settings & Logs", "database-cleaner"),
            SETTINGS: Je("Settings", "database-cleaner"),
            LICENSE: Je("License", "database-cleaner"),
            AGE_THRESHOLD: Je("Age Threshold", "database-cleaner"),
            AGE_THRESHOLD_DESCRIPTION: Je(
              "Auto Clean will be applied on items which are older than the specified number of days, months or years.",
              "database-cleaner"
            ),
            MESSAGE: Je("Message", "database-cleaner"),
            MESSAGE_DESCRIPTION: Je(
              "Have you read it twice? If yes, hide it :)",
              "database-cleaner"
            ),
            PERFORMANCE: Je("Performance", "database-cleaner"),
            BATCH_SIZE: Je("Batch Size", "database-cleaner"),
            BATCH_SIZE_DESCRIPTION: Je(
              "The maximum amount of entries to delete at the same time. That will slow down the process a little but will make it work on huge databases.",
              "database-cleaner"
            ),
            DELAY_IN_MS: Je("Delay (in ms)", "database-cleaner"),
            DELAY_IN_MS_DESCRIPTION: Je(
              "Time to wait between each request (in milliseconds). The overall process is intensive so this gives the chance to your server to chill out a bit. A very good server doesn't need it, but a slow/shared hosting might even reject requests if they are too fast and frequent. Recommended value is actually 0, 100 for safety, 2000 or 5000 if your hosting is kind of cheap.",
              "database-cleaner"
            ),
            DEEP_DELETIONS: Je("Deep Deletions", "database-cleaner"),
            DEEP_DELETIONS_DESCRIPTION: Je(
              "Items will be deleted by calling the internal WordPress functions, so it will have the side effect of a <i>natural cleaning</i>, as if you were deleting posts (and other elements) naturally.",
              "database-cleaner"
            ),
            CUSTOM_USED_BY_DATA: Je(
              "Custom <i>Used By</i> data",
              "database-cleaner"
            ),
            RESET_USED_BY_DATA: Je("Reset Used By", "database-cleaner"),
            CUSTOM_USED_BY_DATA_DESCRIPTION: Je(
              "Did you categorized everything? Nice! ☺️ Please share this data with me through my <a href='https://meowapps.com/contact' target='_blank'>contact form</a>. Thank you! ",
              "database-cleaner"
            ),
            USED_BY_POST_TYPES: Je("POST TYPES", "database-cleaner"),
            USED_BY_OPTIONS: Je("OPTIONS", "database-cleaner"),
            USED_BY_TABLES: Je("TABLES", "database-cleaner"),
            USED_BY_CRON_JOBS: Je("CRON JOBS", "database-cleaner"),
            FOR_ADVANCED_USERS_DEVELOPERS: Je(
              "For Advanced Users & Developers",
              "database-cleaner"
            ),
            RESET_OPTIONS: Je("Reset Options", "database-cleaner"),
            GENERATE_FAKE_DATA: Je("Generate Fake Data", "database-cleaner"),
            METADATA: Je("Metadata", "database-cleaner"),
            NYAO_SWEEPER: Je("Nyao Sweeper", "database-cleaner"),
            PERFORM_NEXT_TASK: Je("Perform Next Task", "database-cleaner"),
            RESET_TASKS: Je("Reset Tasks", "database-cleaner"),
            SWEEPER: Je("Sweeper", "database-cleaner"),
            SCHEDULE: Je("Schedule", "database-cleaner"),
            SCHEDULE_5_MINUTES: Je("Every 5 Minutes", "database-cleaner"),
            SCHEDULE_10_MINUTES: Je("Every 10 Minutes", "database-cleaner"),
            SCHEDULE_30_MINUTES: Je("Every 30 Minutes", "database-cleaner"),
            SCHEDULE_HOURLY: Je("Hourly", "database-cleaner"),
            SCHEDULE_TWICE_DAILY: Je("Twice Daily", "database-cleaner"),
            SCHEDULE_DAILY: Je("Daily", "database-cleaner"),
            ENABLE: Je("Enable", "database-cleaner"),
            ENABLED: Je("Enabled", "database-cleaner"),
            MODULES: Je("Modules", "database-cleaner"),
            BUILD_INDEXES: Je("Build Indexes", "database-cleaner"),
            REMOVE_INDEXES: Je("Remove Indexes", "database-cleaner"),
          }),
          (Qe.CUSTOM_QUERIES = {
            NAME: Je("Name", "database-cleaner"),
            CLEAN: Je("Clean", "database-cleaner"),
            QUERY_COUNT: Je("Query Count", "database-cleaner"),
            QUERY_DELETE: Je("Query Delete", "database-cleaner"),
            RUN_COUNT: Je("Run Count", "database-cleaner"),
            RUN_DELETE: Je("Run Delete", "database-cleaner"),
            BACK: Je("Back", "database-cleaner"),
            ADD_CUSTOM: Je("Add Custom", "database-cleaner"),
            SETUP_NOT_COMPLETE: Je(
              "The setup is not complete.",
              "database-cleaner"
            ),
          }),
          (Qe.TABLES = {
            OPTIMIZE: Je("Optimize", "database-cleaner"),
            REPAIR: Je("Repair", "database-cleaner"),
            TABLE: Je("Table", "database-cleaner"),
            INFO_TABLE_DROP: Je("Remove this table", "database-cleaner"),
            INFO_TABLE_OPTIMIZE: Je(
              "Optimize this table (check the tutorial to learn more about it)",
              "database-cleaner"
            ),
            INFO_TABLE_REPAIR: Je("Repair this table", "database-cleaner"),
            INFO_TABLE_BULK_DROP: Je(
              "Remove the selected tables",
              "database-cleaner"
            ),
            INFO_TABLE_BULK_OPTIMIZE: Je(
              "Optimize the selected tables (check the tutorial to learn more about it)",
              "database-cleaner"
            ),
            INFO_TABLE_BULK_REPAIR: Je(
              "Repair the selected tables",
              "database-cleaner"
            ),
          });
        const Xe = Qe;
        var Ze = n(1594);
        function $e(e) {
          return (
            ($e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            $e(e)
          );
        }
        function et() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ et =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == $e(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError($e(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function tt(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        var nt = function (e) {
            return new Promise(function (t) {
              return setTimeout(t, e);
            });
          },
          rt = function (e, t) {
            return new Promise(
              (function () {
                var n,
                  r =
                    ((n = et().mark(function n(r) {
                      var a, o, i, c;
                      return et().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (a = new Date()), (n.next = 3), t();
                            case 3:
                              if (
                                ((o = new Date()),
                                (i = o.getTime() - a.getTime()),
                                !((c = e - i) > 0))
                              ) {
                                n.next = 9;
                                break;
                              }
                              return (n.next = 9), nt(c);
                            case 9:
                              r();
                            case 10:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })),
                    function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (r, a) {
                        var o = n.apply(e, t);
                        function i(e) {
                          tt(o, r, a, i, c, "next", e);
                        }
                        function c(e) {
                          tt(o, r, a, i, c, "throw", e);
                        }
                        i(void 0);
                      });
                    });
                return function (e) {
                  return r.apply(this, arguments);
                };
              })()
            );
          },
          at = { auto: 1, manual: 2, never: 3 },
          ot = function (e) {
            return e.sort(function (e, t) {
              return at[e.clean_style] - at[t.clean_style];
            });
          };
        var it = function (e) {
            return isNaN(e) ? "-" : (0, g.z3)(ct(e));
          },
          ct = function (e) {
            return 1024 * e * 1024;
          },
          st = function (e, t, n) {
            var r = (t - 1) * n,
              a = t * n;
            return e.slice(r, a);
          };
        function lt(e) {
          return (
            (lt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            lt(e)
          );
        }
        function ut() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ut =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == lt(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(lt(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function ft(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function pt(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                ft(o, r, a, i, c, "next", e);
              }
              function c(e) {
                ft(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function mt(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return bt(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            gt(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function dt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function ht(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? dt(Object(n), !0).forEach(function (t) {
                  yt(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : dt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function yt(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== lt(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== lt(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === lt(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function vt(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            gt(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function gt(e, t) {
          if (e) {
            if ("string" == typeof e) return bt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? bt(e, t)
                : void 0
            );
          }
        }
        function bt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Et,
          wt,
          Tt,
          _t,
          St,
          Ot,
          xt,
          Lt,
          Rt,
          At,
          kt,
          Ct = function (e) {
            return "".concat(e, "_count");
          },
          Nt = function (e) {
            return "".concat(e, "_delete");
          },
          Pt = "totalDbSize",
          It = Xe.CONTEXT.HIDE_ITEMS_USED_BY_WORDPRESS,
          Ut = [
            {
              accessor: "details",
              title: Xe.TABLE_COLUMN_TITLE.DETAILS,
              sortable: !1,
              width: "",
            },
            {
              accessor: "count",
              title: Xe.TABLE_COLUMN_TITLE.COUNT,
              sortable: !1,
              width: "100px",
              align: "right",
            },
            {
              accessor: "clean",
              title: Xe.TABLE_COLUMN_TITLE.MODE,
              sortable: !1,
              width: "80px",
            },
            { accessor: "action", title: "", sortable: !1, width: "80px" },
          ],
          Bt = [
            {
              accessor: "details",
              title: Xe.TABLE_COLUMN_TITLE.DETAILS,
              sortable: !1,
              width: "",
            },
            {
              accessor: "count",
              title: Xe.TABLE_COLUMN_TITLE.COUNT,
              sortable: !1,
              width: "80px",
              align: "right",
            },
            { accessor: "action", title: "", sortable: !1, width: "80px" },
          ],
          Mt = {
            filters: {
              type: "checkbox",
              options: [
                { label: "More than 512 KB", value: 524288 },
                { label: "More than 64 KB", value: 65536 },
              ],
            },
          },
          jt = [
            {
              accessor: "details",
              title: Xe.TABLE_COLUMN_TITLE.POST_TYPE,
              sortable: !0,
              width: "350px",
            },
            {
              accessor: "usedBy",
              title: Xe.TABLE_COLUMN_TITLE.USED_BY,
              sortable: !0,
            },
            {
              accessor: "count",
              title: Xe.TABLE_COLUMN_TITLE.COUNT,
              sortable: !1,
              width: "110px",
              align: "right",
            },
            {
              accessor: "clean",
              title: Xe.TABLE_COLUMN_TITLE.MODE,
              sortable: !1,
              width: "80px",
            },
            { accessor: "action", title: "", sortable: !1, width: "80px" },
          ],
          Dt = [
            { accessor: "deletion", title: "", sortable: !1, width: "40px" },
            {
              accessor: "table",
              title: Xe.TABLE_COLUMN_TITLE.TABLE,
              sortable: !0,
              width: "350px",
            },
            {
              accessor: "usedBy",
              title: Xe.TABLE_COLUMN_TITLE.USED_BY,
              sortable: !0,
            },
            ht(
              {
                accessor: "size",
                title: Xe.TABLE_COLUMN_TITLE.SIZE,
                sortable: !0,
                width: "110px",
                align: "right",
              },
              Mt
            ),
            {
              accessor: "percent",
              title: Xe.TABLE_COLUMN_TITLE.RELATIVE_PERCENTAGE,
              sortable: !1,
              width: "80px",
              align: "right",
            },
            { accessor: "actions", title: "", sortable: !1, width: "200px" },
          ],
          Ft = [
            {
              accessor: "table",
              title: Xe.TABLE_COLUMN_TITLE.TABLE,
              sortable: !0,
              width: "450px",
            },
            {
              accessor: "usedBy",
              title: Xe.TABLE_COLUMN_TITLE.USED_BY,
              sortable: !0,
              width: "300px",
            },
            ht(
              {
                accessor: "size",
                title: Xe.TABLE_COLUMN_TITLE.SIZE,
                sortable: !0,
                width: "80px",
                align: "right",
              },
              Mt
            ),
            {
              accessor: "percent",
              title: Xe.TABLE_COLUMN_TITLE.RELATIVE_PERCENTAGE,
              sortable: !1,
              width: "80px",
              align: "right",
            },
            { accessor: "actions", title: "", sortable: !1, width: "200px" },
          ],
          Gt = [
            { accessor: "actions", title: "", sortable: !1, width: "30px" },
            {
              accessor: "name",
              title: Xe.TABLE_COLUMN_TITLE.NAME,
              sortable: !0,
              width: "350px",
            },
            {
              accessor: "usedBy",
              title: Xe.TABLE_COLUMN_TITLE.USED_BY,
              sortable: !0,
            },
            ht(
              {
                accessor: "size",
                title: Xe.TABLE_COLUMN_TITLE.SIZE,
                sortable: !0,
                width: "110px",
                align: "right",
              },
              Mt
            ),
            {
              accessor: "autoloaded",
              title: Xe.TABLE_COLUMN_TITLE.AUTO,
              sortable: !0,
              width: "58px",
            },
          ],
          zt = [
            { accessor: "actions", title: "", sortable: !1, width: "30px" },
            {
              accessor: "name",
              title: Xe.TABLE_COLUMN_TITLE.NAME,
              sortable: !0,
              width: "450px",
            },
            {
              accessor: "usedBy",
              title: Xe.TABLE_COLUMN_TITLE.USED_BY,
              sortable: !0,
              width: "400px",
            },
            {
              accessor: "schedule",
              title: Xe.TABLE_COLUMN_TITLE.SCHEDULE,
              sortable: !1,
              width: "100px",
            },
            {
              accessor: "nextRun",
              title: Xe.TABLE_COLUMN_TITLE.NEXT_RUN,
              sortable: !1,
              width: "180px",
            },
          ],
          Yt = [
            { accessor: "actions", title: "", sortable: !1, width: "30px" },
            {
              accessor: "postId",
              title: Xe.TABLE_COLUMN_TITLE.POST_ID,
              sortable: !0,
              width: "100px",
            },
            {
              accessor: "userId",
              title: Xe.TABLE_COLUMN_TITLE.USER_ID,
              sortable: !0,
              width: "100px",
            },
            {
              accessor: "name",
              title: Xe.TABLE_COLUMN_TITLE.NAME,
              sortable: !0,
              width: "350px",
              filters: { type: "text" },
            },
            ht(
              {
                accessor: "size",
                title: Xe.TABLE_COLUMN_TITLE.SIZE,
                sortable: !0,
                width: "50px",
                align: "right",
              },
              Mt
            ),
          ],
          Wt = [
            { label: Xe.CLEAN_STYLE_LABEL.AUTO, value: "auto" },
            { label: Xe.CLEAN_STYLE_LABEL.MANUAL, value: "manual" },
            { label: Xe.CLEAN_STYLE_LABEL.NEVER, value: "never" },
          ],
          Vt = [
            { label: Xe.AGE_LABEL.NONE, value: "none" },
            { label: "1 ".concat(Xe.AGE_LABEL.DAY), value: "1 day" },
            { label: "7 ".concat(Xe.AGE_LABEL.DAYS), value: "7 days" },
            { label: "14 ".concat(Xe.AGE_LABEL.DAYS), value: "14 days" },
            { label: "1 ".concat(Xe.AGE_LABEL.MONTH), value: "1 month" },
            { label: "3 ".concat(Xe.AGE_LABEL.MONTH), value: "3 month" },
            { label: "6 ".concat(Xe.AGE_LABEL.MONTH), value: "6 month" },
            { label: "1 ".concat(Xe.AGE_LABEL.YEAR), value: "1 year" },
          ],
          Kt = [
            { title: Xe.FILTER_TITLE.ALL, value: "all", filterValue: "" },
            {
              title: Xe.FILTER_TITLE.NOT_USED,
              value: "notUsed",
              filterValue: "warn",
            },
            { title: Xe.FILTER_TITLE.USED, value: "used", filterValue: "ok" },
            {
              title: Xe.FILTER_TITLE.AUTOLOADED,
              value: "yes",
              filterValue: "yes",
            },
            {
              title: Xe.FILTER_TITLE.UNKNOWN,
              value: "unknown",
              filterValue: "n/a",
            },
          ],
          Ht = [
            { title: Xe.FILTER_TITLE.ALL, value: "all", filterValue: "" },
            {
              title: Xe.FILTER_TITLE.NOT_USED,
              value: "notUsed",
              filterValue: "warn",
            },
            { title: Xe.FILTER_TITLE.USED, value: "used", filterValue: "ok" },
            {
              title: Xe.FILTER_TITLE.UNKNOWN,
              value: "unknown",
              filterValue: "n/a",
            },
          ],
          qt = [
            { title: Xe.FILTER_TITLE.ALL, value: "all", filterValue: "" },
            {
              title: Xe.FILTER_TITLE.NOT_USED,
              value: "notUsed",
              filterValue: "warn",
            },
            { title: Xe.FILTER_TITLE.USED, value: "used", filterValue: "ok" },
            {
              title: Xe.FILTER_TITLE.UNKNOWN,
              value: "unknown",
              filterValue: "n/a",
            },
          ],
          Jt = [
            { title: Xe.FILTER_TITLE.ALL, value: "all", filterValue: "" },
            {
              title: Xe.FILTER_TITLE.NOT_USED,
              value: "notUsed",
              filterValue: "warn",
            },
            { title: Xe.FILTER_TITLE.USED, value: "used", filterValue: "ok" },
            {
              title: Xe.FILTER_TITLE.UNKNOWN,
              value: "unknown",
              filterValue: "n/a",
            },
          ],
          Qt = [
            { title: Xe.FILTER_TITLE.ALL, value: "all", filterValue: "" },
            {
              title: Xe.FILTER_TITLE.NOT_USED,
              value: "notUsed",
              filterValue: "warn",
            },
            { title: Xe.FILTER_TITLE.USED, value: "used", filterValue: "ok" },
            {
              title: Xe.FILTER_TITLE.UNKNOWN,
              value: "unknown",
              filterValue: "n/a",
            },
          ],
          Xt = {
            on: { label: Xe.MODE.EXPERT, value: "expert" },
            off: { label: Xe.MODE.EASY, value: "easy" },
          },
          Zt = [
            "ID",
            "post_title",
            "post_content",
            "post_name",
            "post_date",
            "post_status",
            "post_type",
            "option_id",
            "option_name",
            "autoload",
            "meta_id",
            "meta_key",
            "post_id",
            "object_id",
            "term_order",
            "term_taxonomy_id",
            "comment_ID",
            "comment_post_ID",
            "comment_author",
            "comment_date",
            "user_id",
            "meta_key",
          ],
          $t = [
            { label: Xe.SETTINGS.SCHEDULE_5_MINUTES, value: "dbclnr_5mn" },
            { label: Xe.SETTINGS.SCHEDULE_10_MINUTES, value: "dbclnr_10mn" },
            { label: Xe.SETTINGS.SCHEDULE_30_MINUTES, value: "dbclnr_30mn" },
            { label: Xe.SETTINGS.SCHEDULE_HOURLY, value: "hourly" },
            { label: Xe.SETTINGS.SCHEDULE_TWICE_DAILY, value: "twicedaily" },
            { label: Xe.SETTINGS.SCHEDULE_DAILY, value: "daily" },
          ],
          en = function (e, t, n) {
            return e < t
              ? "asc" === n
                ? -1
                : 1
              : e > t
              ? "asc" === n
                ? 1
                : -1
              : 0;
          },
          tn = function (e, t, n) {
            var r = Number(e),
              a = Number(t);
            return "asc" === n ? a - r : r - a;
          },
          nn = function (e, t, n) {
            if (!t && !n) return mt(e);
            switch (t) {
              case "usedBy":
                return e.sort(function (e, t) {
                  return en(
                    e.info.usedBy.toUpperCase(),
                    t.info.usedBy.toUpperCase(),
                    n
                  );
                });
              case "details":
                return e.sort(function (e, t) {
                  return en(e.name.toUpperCase(), t.name.toUpperCase(), n);
                });
              case "table":
                return e.sort(function (e, t) {
                  return en(e.table.toUpperCase(), t.table.toUpperCase(), n);
                });
              case "size":
                return e.sort(function (e, t) {
                  return e.hasOwnProperty("size")
                    ? tn(e.size, t.size, n)
                    : e.hasOwnProperty("option_value_length")
                    ? tn(e.option_value_length, t.option_value_length, n)
                    : 0;
                });
              case "name":
                return e.sort(function (e, t) {
                  return e.hasOwnProperty("cron_name")
                    ? en(
                        e.cron_name.toUpperCase(),
                        t.cron_name.toUpperCase(),
                        n
                      )
                    : e.hasOwnProperty("option_name")
                    ? en(
                        e.option_name.toUpperCase(),
                        t.option_name.toUpperCase(),
                        n
                      )
                    : 0;
                });
              case "autoloaded":
                return e.sort(function (e, t) {
                  return en(t.autoload, e.autoload, n);
                });
            }
            return mt(e);
          },
          rn = function (e, t, n, r) {
            var a,
              o,
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : "",
              c =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : [],
              s = mt(e);
            r && (s = an(mt(s), "wordpress")),
              i && (s = on(mt(s), i)),
              c.length && (s = cn(mt(s), c));
            var l =
              null !==
                (a =
                  null ===
                    (o = n.find(function (e) {
                      return e.value === t;
                    })) || void 0 === o
                    ? void 0
                    : o.filterValue) && void 0 !== a
                ? a
                : "";
            return l
              ? ["yes", "no"].includes(l)
                ? s.filter(function (e) {
                    return e.autoload === l;
                  })
                : s.filter(function (e) {
                    var t;
                    return (
                      (null === (t = e.info) || void 0 === t
                        ? void 0
                        : t.status) === l
                    );
                  })
              : mt(s);
          },
          an = function (e, t) {
            return e.filter(function (e) {
              var n;
              return (
                (null === (n = e.info) || void 0 === n
                  ? void 0
                  : n.usedBy.toLowerCase()) !== t
              );
            });
          },
          on = function (e, t) {
            return e.filter(function (e) {
              return (
                !(!e.hasOwnProperty("cron_name") || !e.cron_name.includes(t)) ||
                !(!e.hasOwnProperty("table") || !e.table.includes(t)) ||
                !(!e.hasOwnProperty("name") || !e.name.includes(t)) ||
                !(
                  !e.hasOwnProperty("option_name") || !e.option_name.includes(t)
                ) ||
                e.info.usedBy.toLowerCase().includes(t.toLowerCase())
              );
            });
          },
          cn = function (e, t) {
            return e.filter(function (e) {
              return (
                !(
                  !e.hasOwnProperty("size") ||
                  !t.some(function (t) {
                    return ct(e.size) >= t;
                  })
                ) ||
                !(
                  !e.hasOwnProperty("option_value_length") ||
                  !t.some(function (t) {
                    return e.option_value_length >= t;
                  })
                ) ||
                !(
                  !e.hasOwnProperty("meta_value_length") ||
                  !t.some(function (t) {
                    return e.meta_value_length >= t;
                  })
                )
              );
            });
          },
          sn = Object.keys(A).map(function (e) {
            return e.replace(/[^a-zA-Z0-9]+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
          }),
          ln = function (e, t) {
            return Object.keys(e).find(function (n) {
              return e[n].some(function (e) {
                return e.item === t;
              });
            });
          },
          un = function (e, t) {
            var n, r;
            return null !==
              (n =
                null == e ||
                null ===
                  (r = e.find(function (e) {
                    return void 0 !== e.count && Number(e.count) > 0;
                  })) ||
                void 0 === r
                  ? void 0
                  : r[t]) && void 0 !== n
              ? n
              : null;
          },
          fn = function (e, t, n, r) {
            var a = e.findIndex(function (e) {
                return e[t] === n;
              }),
              o =
                -1 === a
                  ? mt(e)
                  : [].concat(mt(e.slice(a + 1)), mt(e.slice(0, a)));
            return "prev" === r && o.reverse(), un(o, t);
          },
          pn = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "next",
              r = ln(t, e);
            if (!sn.includes(r)) return fn(mt(t[r]), "item", e, n);
            var a = (function (e, t) {
                var n = sn.findIndex(function (t) {
                    return t === e;
                  }),
                  r = [].concat(mt(sn.slice(n)), mt(sn.slice(0, n)));
                return "prev" === t && r.reverse(), r;
              })(r, n),
              o = void 0;
            return (
              a.some(function (r) {
                var a = fn(mt(t[r]), "item", e, n);
                return a && (o = a), !!a;
              }),
              o
            );
          },
          mn = function (e) {
            return e.replace(new RegExp("^".concat(E)), "");
          },
          dn = function (e) {
            return "".concat(E).concat(e);
          },
          hn = {
            Welcome: "Welcome",
            Tables: "Tables",
            WordPressCore: "WordPressCore",
            PostTypes: "PostTypes",
            Options: "Options",
            Settings: "Settings",
            Logs: "Logs",
            CustomQueries: "CustomQueries",
          },
          yn = {
            Welcome: 0,
            Tables: 0,
            WordPressCore: 0,
            PostTypes: 0,
            Options: 0,
            Settings: 0,
            Logs: 0,
          },
          vn = "posts",
          gn = "postsMetadata",
          bn = "users",
          En = "comments",
          wn = "transients",
          Tn = "listPostTypes",
          _n = "options",
          Sn = "metadata",
          On = {
            deleteAll: Xe.MODAL.DELETE_ALL,
            loadEntry: Xe.MODAL.DATA,
            usedBy: Xe.MODAL.USED_BY,
            optionValue: Xe.MODAL.OPTION_DATA,
            table: Xe.MODAL.TABLE,
            metadataValue: Xe.MODAL.METADATA,
            editCustomQuery: Xe.MODAL.EDIT_CUSTOM_QUERY,
          },
          xn = 0,
          Ln = 0,
          Rn = 0,
          An = 0,
          kn = 0,
          Cn = 0,
          Nn = {
            busy: !1,
            busyAction: [],
            busyBulkTasks: !1,
            busyCleanBulkTasks: !1,
            busyOptions: !1,
            busyCronJobs: !1,
            busyMetadata: !1,
            apiErrors: null,
            status: "",
            settingsOptions: k,
            clickedTab: yn,
            fileContent: "",
            agaThreshold: k.aga_threshold,
            bulkBatchSize: k.bulk_batch_size,
            deepDeletions: k.deep_deletions,
            mode: k.mode,
            postTypesUsedBy: k.post_type_usedby,
            optionsUsedBy: k.option_usedby,
            tablesUsedBy: k.table_usedby,
            cronJobsUsedBy: k.cron_usedby,
            metadataUsedBy: k.metadata_usedby,
            totalSizes: k.db_historical_sizes,
            hideMessage: k.hide_message,
            moduleDevTools: k.module_devtools,
            delay: k.delay,
            sweeperTasks: k.sweeper_tasks,
            sweeperEnabled: k.sweeper_enabled,
            sweeperSchedule: k.sweeper_schedule,
            modulePosttypes: k.module_posttypes,
            moduleTables: k.module_tables,
            moduleOptions: k.module_options,
            moduleMetadata: k.module_metadata,
            moduleCronjobs: k.module_cronjobs,
            moduleCustomequeries: k.module_customequeries,
            customQueries: k.custom_queries,
            customQueriesCount: [],
            editCustomQuery: null,
            dbSizes: [],
            previousTotalSize: k.previousTotalSize,
            totalSize: k.totalSize,
            listPostTypes: [],
            listPostTypesCount: [],
            posts: R.posts,
            postsCount: A.posts,
            postsMetadata: R.posts_metadata,
            postsMetadataCount: A.posts_metadata,
            users: R.users,
            usersCount: A.users,
            comments: R.comments,
            commentsCount: A.comments,
            transients: R.transients,
            transientsCount: A.transients,
            options: [],
            metadata: [],
            filteredOptions: [],
            filteredCronJobs: [],
            filteredListPostTypes: [],
            filteredTables: [],
            filteredMetadata: [],
            entries: [],
            entriesTableColumns: [],
            cronJobs: [],
            plugins: [],
            selectedUsedBy: { items: [], value: "unknown" },
            initialized: { PostTypes: !1 },
            modals: {
              deleteAll: {
                enable: !1,
                title: On.deleteAll,
                onNext: function () {},
              },
              loadEntry: {
                enable: !1,
                title: On.loadEntry,
                onNext: function () {},
              },
              usedBy: { enable: !1, title: On.usedBy, onNext: function () {} },
              optionValue: {
                enable: !1,
                title: On.optionValue,
                onNext: function () {},
              },
              metadataValue: {
                enable: !1,
                title: On.metadataValue,
                onNext: function () {},
              },
              table: {
                enable: !1,
                title: On.table,
                onNext: function () {},
                data: { tableName: "" },
              },
              editCustomQuery: {
                enable: !1,
                title: On.editCustomQuery,
                onNext: function () {},
              },
            },
            loadEntryItems: {},
            loadEntryItem: null,
            loadEntryPrevItem: null,
            loadEntryNextItem: null,
            loadEntryItemCount: 0,
            loadEntryItemPage: 1,
            loadEntryItemLimit: 10,
            mutateDbSizes:
              ((kt = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return kt.apply(this, arguments);
              }),
            mutateListPostTypes:
              ((At = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return At.apply(this, arguments);
              }),
            mutatePosts:
              ((Rt = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return Rt.apply(this, arguments);
              }),
            mutatePostsMetadata:
              ((Lt = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return Lt.apply(this, arguments);
              }),
            mutateUsers:
              ((xt = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return xt.apply(this, arguments);
              }),
            mutateComments:
              ((Ot = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return Ot.apply(this, arguments);
              }),
            mutateTransients:
              ((St = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return St.apply(this, arguments);
              }),
            mutateOptions:
              ((_t = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return _t.apply(this, arguments);
              }),
            mutateCronJobs:
              ((Tt = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return Tt.apply(this, arguments);
              }),
            mutatePlugins:
              ((wt = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return wt.apply(this, arguments);
              }),
            mutateMetadata:
              ((Et = pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return Et.apply(this, arguments);
              }),
            shouldFetchOptions: !1,
            shouldFetchCronJobs: !1,
            shouldFetchMetadata: !1,
            optionsFilters: {
              page: 1,
              limit: Number(k.options_limit),
              filterBy: "all",
              hideUsedByWordPress: !1,
              search: "",
              sort: "",
              accessor: "",
              size: [],
            },
            optionsTotal: { all: "-", yes: "-", no: "-" },
            cronJobsFilters: {
              page: 1,
              limit: Number(k.cron_jobs_limit),
              filterBy: "all",
              hideUsedByWordPress: !1,
              search: "",
              sort: "",
              accessor: "",
            },
            cronJobsTotal: { all: "-", yes: "-", no: "-" },
            tablesFilters: {
              page: 1,
              limit: Number(k.db_historical_sizes_limit),
              filterBy: "all",
              hideUsedByWordPress: !1,
              search: "",
              sort: "",
              accessor: "",
              size: [],
            },
            tablesTotal: { active: "-", inactive: "-", unknown: "-" },
            listPostTypesFilters: {
              page: 1,
              limit: Number(k.list_post_types_limit),
              filterBy: "all",
              hideUsedByWordPress: !1,
              search: "",
              sort: "",
              accessor: "",
            },
            listPostTypesTotal: { all: "-", yes: "-", no: "-" },
            metadataFilters: {
              page: 1,
              limit: Number(k.metadata_limit),
              filterBy: "all",
              hideUsedByWordPress: !1,
              search: "",
              sort: "",
              accessor: "",
              table: Object.values(C)[0],
              size: [],
              name: "",
            },
            metadataTotal: { all: "-", notUsed: "-", used: "-", unknown: "-" },
          },
          Pn = "SETTINGS_UPDATED",
          In = "DB_SIZES_UPDATED",
          Un = "LIST_POST_TYPES_UPDATED",
          Bn = "LIST_POST_TYPES_COUNT_UPDATED",
          Mn = "POSTS_UPDATED",
          jn = "POSTS_COUNT_UPDATED",
          Dn = "POSTS_METADATA_UPDATED",
          Fn = "POSTS_METADATA_COUNT_UPDATED",
          Gn = "USERS_UPDATED",
          zn = "USERS_COUNT_UPDATED",
          Yn = "COMMENTS_UPDATED",
          Wn = "COMMENTS_COUNT_UPDATED",
          Vn = "TRANSIENTS_UPDATED",
          Kn = "TRANSIENTS_COUNT_UPDATED",
          Hn = "OPTIONS_UPDATED",
          qn = "METADATA_UPDATED",
          Jn = "FILTERED_OPTIONS_UPDATED",
          Qn = "FILTERED_CRON_JOBS_UPDATED",
          Xn = "FILTERED_POST_TYPES_UPDATED",
          Zn = "FILTERED_TABLES_UPDATED",
          $n = "FILTERED_METADATA_UPDATED",
          er = "CUSTOM_QUERIES_COUNT_UPDATED",
          tr = "EDIT_CUSTOM_QUERY_UPDATED",
          nr = "CLICKED_TAB_UPDATED",
          rr = "BUSY_ACTION_UPDATED",
          ar = "OPTIONS_FILTERS_UPDATED",
          or = "OPTIONS_TOTAL_UPDATED",
          ir = "METADATA_FILTERS_UPDATED",
          cr = "METADATA_TOTAL_UPDATED",
          sr = "CRON_JOBS_FILTERS_UPDATED",
          lr = "CRON_JOBS_TOTAL_UPDATED",
          ur = "TABLES_FILTERS_UPDATED",
          fr = "TABLES_TOTAL_UPDATED",
          pr = "LIST_POST_TYPES_FILTERS_UPDATED",
          mr = "LIST_POST_TYPES_TOTAL_UPDATED",
          dr = "ENTRIES_UPDATED",
          hr = "CRON_JOBS_UPDATED",
          yr = "INITIALIZED_UPDATED",
          vr = "PLUGINS_UPDATED",
          gr = "SELECTED_USEDBY_UPDATED",
          br = "TOGGLE_MODAL",
          Er = "PUSH_BUSY",
          wr = "POP_BUSY",
          Tr = "PUSH_BUSY_OPTIONS",
          _r = "POP_BUSY_OPTIONS",
          Sr = "PUSH_BUSY_CRON_JOBS",
          Or = "POP_BUSY_CRON_JOBS",
          xr = "PUSH_BUSY_BULK_TASKS",
          Lr = "POP_BUSY_BULK_TASKS",
          Rr = "RESET_BUSY_BULK_TASKS",
          Ar = "PUSH_BUSY_CLEAN_BULK_TASKS",
          kr = "POP_BUSY_CLEAN_BULK_TASKS",
          Cr = "PUSH_BUSY_METADATA",
          Nr = "POP_BUSY_METADATA",
          Pr = "ERROR_UPDATED",
          Ir = "SET_DB_SIZES_MUTATE",
          Ur = "SET_LIST_POST_TYPES_MUTATE",
          Br = "SET_POSTS_MUTATE",
          Mr = "SET_POSTS_METADATA_MUTATE",
          jr = "SET_USERS_MUTATE",
          Dr = "SET_COMMENTS_MUTATE",
          Fr = "SET_TRANSIENTS_MUTATE",
          Gr = "SET_OPTIONS_MUTATE",
          zr = "SET_SHOULD_FETCH_OPTIONS",
          Yr = "SET_SHOULD_FETCH_CRON_JOBS_OPTIONS",
          Wr = "SET_SHOULD_FETCH_METADATA",
          Vr = "SET_CRON_JOBS_MUTATE",
          Kr = "SET_PLUGINS_MUTATE",
          Hr = "SET_METADATA_MUTATE",
          qr = "LOAD_ENTRY_ITEMS_UPDATED",
          Jr = "LOAD_ENTRY_ITEMS_COUNT_UPDATED",
          Qr = "LOAD_ENTRY_ITEM_UPDATED",
          Xr = "LOAD_ENTRY_ITEM_COUNT_UPDATED",
          Zr = "LOAD_ENTRY_ITEM_PAGE_UPDATED",
          $r = function (e, t) {
            switch (t.type) {
              case Pr:
                var n = t.apiErrors;
                return ht(ht({}, e), {}, { apiErrors: n });
              case Ir:
                var r = t.mutateDbSizes;
                return ht(ht({}, e), {}, { mutateDbSizes: r });
              case Ur:
                var a = t.mutateListPostTypes;
                return ht(ht({}, e), {}, { mutateListPostTypes: a });
              case Br:
                var o = t.mutatePosts;
                return ht(ht({}, e), {}, { mutatePosts: o });
              case Mr:
                var i = t.mutatePostsMetadata;
                return ht(ht({}, e), {}, { mutatePostsMetadata: i });
              case jr:
                var c = t.mutateUsers;
                return ht(ht({}, e), {}, { mutateUsers: c });
              case Dr:
                var s = t.mutateComments;
                return ht(ht({}, e), {}, { mutateComments: s });
              case Fr:
                var l = t.mutateTransients;
                return ht(ht({}, e), {}, { mutateTransients: l });
              case Gr:
                var u = t.mutateOptions;
                return ht(ht({}, e), {}, { mutateOptions: u });
              case Vr:
                var f = t.mutateCronJobs;
                return ht(ht({}, e), {}, { mutateCronJobs: f });
              case Kr:
                var p = t.mutatePlugins;
                return ht(ht({}, e), {}, { mutatePlugins: p });
              case Hr:
                var m = t.mutateMetadata;
                return ht(ht({}, e), {}, { mutateMetadata: m });
              case zr:
                return ht(ht({}, e), {}, { shouldFetchOptions: !0 });
              case Yr:
                return ht(ht({}, e), {}, { shouldFetchCronJobs: !0 });
              case Wr:
                return ht(ht({}, e), {}, { shouldFetchMetadata: !0 });
              case ar:
                var d = t.optionsFilters;
                return ht(ht({}, e), {}, { optionsFilters: d });
              case or:
                var h = t.options,
                  y = t.search,
                  v = t.size,
                  b = {};
                return (
                  Kt.forEach(function (e) {
                    var t = rn(h, e.value, Kt, !1, y, v),
                      n = rn(h, e.value, Kt, !0, y, v);
                    b[e.value] = { false: t.length, true: n.length };
                  }),
                  ht(ht({}, e), {}, { optionsTotal: b })
                );
              case ir:
                var E = t.metadataFilters;
                return ht(ht({}, e), {}, { metadataFilters: E });
              case cr:
                var w = t.metadata,
                  T = t.total,
                  _ = {};
                return (
                  Qt.forEach(function (e) {
                    if ("all" !== e.value || -1 === T) {
                      var t = rn(w, e.value, Qt, !1),
                        n = rn(w, e.value, Qt, !0);
                      _[e.value] = { false: t.length, true: n.length };
                    } else {
                      var r = rn(w, e.value, Qt, !0);
                      _[e.value] = { false: T, true: r.length };
                    }
                  }),
                  ht(ht({}, e), {}, { metadataTotal: _ })
                );
              case sr:
                var S = t.cronJobsFilters;
                return ht(ht({}, e), {}, { cronJobsFilters: S });
              case lr:
                var O = t.cronJobs,
                  x = t.search,
                  L = {};
                return (
                  Ht.forEach(function (e) {
                    var t = rn(O, e.value, Ht, !1, x),
                      n = rn(O, e.value, Ht, !0, x);
                    L[e.value] = { false: t.length, true: n.length };
                  }),
                  ht(ht({}, e), {}, { cronJobsTotal: L })
                );
              case fr:
                var R = t.dbSizes,
                  k = t.search,
                  C = t.size,
                  N = {};
                return (
                  qt.forEach(function (e) {
                    var t = rn(R, e.value, qt, !1, k, C),
                      n = rn(R, e.value, qt, !0, k, C);
                    N[e.value] = { false: t.length, true: n.length };
                  }),
                  ht(ht({}, e), {}, { tablesTotal: N })
                );
              case ur:
                var P = t.tablesFilters;
                return ht(ht({}, e), {}, { tablesFilters: P });
              case pr:
                var I = t.listPostTypesFilters;
                return ht(ht({}, e), {}, { listPostTypesFilters: I });
              case mr:
                var U = t.listPostTypes,
                  B = t.search,
                  M = {};
                return (
                  Jt.forEach(function (e) {
                    var t = rn(U, e.value, Jt, !1, B),
                      n = rn(U, e.value, Jt, !0, B);
                    M[e.value] = { false: t.length, true: n.length };
                  }),
                  ht(ht({}, e), {}, { listPostTypesTotal: M })
                );
              case br:
                var j = t.modal,
                  D = t.enable,
                  F = t.onNext,
                  G = t.title,
                  z = t.data;
                if (void 0 === e.modals[j])
                  return (
                    alert((0, g.g7)(Xe.CONTEXT.MODAL_DOES_NOT_EXIST, j)),
                    console.error(
                      (0, g.g7)(Xe.CONTEXT.MODAL_DOES_NOT_EXIST, j)
                    ),
                    e
                  );
                void 0 === D && (D = !e.modals[j].enable),
                  void 0 === G && (G = On[j]),
                  D || (G = "");
                var Y = ht({}, e);
                return (
                  (Y.modals = ht({}, Y.modals)),
                  (Y.modals[j] = { enable: D, onNext: F, title: G, data: z }),
                  Y
                );
              case Er:
                var W = t.status,
                  V = void 0 === W ? "" : W;
                return ht(ht({}, e), {}, { busy: ++xn > 0, status: V });
              case wr:
                var K = t.status,
                  H = void 0 === K ? "" : K;
                return ht(ht({}, e), {}, { busy: --xn > 0, status: H });
              case Tr:
                return ht(ht({}, e), {}, { busyOptions: ++An > 0 });
              case _r:
                return ht(ht({}, e), {}, { busyOptions: --An > 0 });
              case Sr:
                return ht(ht({}, e), {}, { busyCronJobs: ++kn > 0 });
              case Or:
                return ht(ht({}, e), {}, { busyCronJobs: --kn > 0 });
              case xr:
                return ht(ht({}, e), {}, { busyBulkTasks: ++Ln > 0 });
              case Lr:
                return ht(ht({}, e), {}, { busyBulkTasks: --Ln > 0 });
              case Rr:
                return ht(ht({}, e), {}, { busyBulkTasks: 0 });
              case Ar:
                return ht(ht({}, e), {}, { busyCleanBulkTasks: ++Rn > 0 });
              case kr:
                return ht(ht({}, e), {}, { busyCleanBulkTasks: --Rn > 0 });
              case Cr:
                return ht(ht({}, e), {}, { busyMetadata: ++Cn > 0 });
              case Nr:
                return ht(ht({}, e), {}, { busyMetadata: --Cn > 0 });
              case "STATUS_UPDATED":
                var q = t.status,
                  J = void 0 === q ? "" : q;
                return ht(ht({}, e), {}, { status: J });
              case Pn:
                var Q = t.options,
                  X = Q.aga_threshold,
                  Z = Q.custom_queries,
                  $ = Q.bulk_batch_size,
                  ee = Q.deep_deletions,
                  te = Number(Q.options_limit),
                  ne = Number(Q.cron_jobs_limit),
                  re = Number(Q.db_historical_sizes_limit),
                  ae = Number(Q.list_post_types_limit),
                  oe = Number(Q.metadata_limit),
                  ie = Q.post_type_usedby,
                  ce = Q.option_usedby,
                  se = Q.table_usedby,
                  le = Q.cron_usedby,
                  ue = Q.metadata_usedby,
                  fe = Q.db_historical_sizes,
                  pe = Q.mode,
                  me = Q.hide_message,
                  de = Q.module_devtools,
                  he = Q.delay,
                  ye = Q.sweeper_tasks,
                  ve = Q.sweeper_enabled,
                  ge = Q.sweeper_schedule,
                  be = Q.module_posttypes,
                  Ee = Q.module_tables,
                  we = Q.module_options,
                  Te = Q.module_metadata,
                  _e = Q.module_cronjobs,
                  Se = Q.module_customequeries,
                  Oe = fe ? fe[fe.length - 1] : null,
                  xe = null;
                (null == fe ? void 0 : fe.length) > 1
                  ? (xe = fe[fe.length - 2])
                  : (null == fe ? void 0 : fe.length) > 0 &&
                    (xe = fe[fe.length - 1]);
                var Le = ht(ht({}, e.optionsFilters), {}, { limit: te }),
                  Re = ht(ht({}, e.cronJobsFilters), {}, { limit: ne }),
                  Ae = ht(ht({}, e.tablesFilters), {}, { limit: re }),
                  ke = ht(ht({}, e.listPostTypesFilters), {}, { limit: ae }),
                  Ce = ht(ht({}, e.metadataFilters), {}, { limit: oe });
                return ht(
                  ht({}, e),
                  {},
                  {
                    settingsOptions: Q,
                    optionsFilters: Le,
                    cronJobsFilters: Re,
                    tablesFilters: Ae,
                    listPostTypesFilters: ke,
                    metadataFilters: Ce,
                    agaThreshold: X,
                    customQueries: Z,
                    totalSizes: fe,
                    bulkBatchSize: $,
                    deepDeletions: ee,
                    totalSize: Oe,
                    previousTotalSize: xe,
                    postTypesUsedBy: ie,
                    optionsUsedBy: ce,
                    tablesUsedBy: se,
                    cronJobsUsedBy: le,
                    metadataUsedBy: ue,
                    mode: pe,
                    hideMessage: me,
                    moduleDevTools: de,
                    delay: he,
                    sweeperTasks: ye,
                    sweeperEnabled: ve,
                    sweeperSchedule: ge,
                    modulePosttypes: be,
                    moduleTables: Ee,
                    moduleOptions: we,
                    moduleMetadata: Te,
                    moduleCronjobs: _e,
                    moduleCustomequeries: Se,
                  }
                );
              case In:
                var Ne = t.dbSizes;
                return ht(ht({}, e), {}, { dbSizes: Ne });
              case Un:
                var Pe = t.listPostTypes;
                return ht(ht({}, e), {}, { listPostTypes: Pe });
              case Bn:
                var Ie = t.listPostTypesCount;
                return ht(ht({}, e), {}, { listPostTypesCount: Ie });
              case Mn:
                var Ue = t.posts;
                return ht(ht({}, e), {}, { posts: Ue });
              case jn:
                var Be = t.postsCount;
                return ht(ht({}, e), {}, { postsCount: Be });
              case Dn:
                var Me = t.postsMetadata;
                return ht(ht({}, e), {}, { postsMetadata: Me });
              case Fn:
                var je = t.postsMetadataCount;
                return ht(ht({}, e), {}, { postsMetadataCount: je });
              case Gn:
                var De = t.users;
                return ht(ht({}, e), {}, { users: De });
              case zn:
                var Fe = t.usersCount;
                return ht(ht({}, e), {}, { usersCount: Fe });
              case Yn:
                var Ge = t.comments;
                return ht(ht({}, e), {}, { comments: Ge });
              case Wn:
                var ze = t.commentsCount;
                return ht(ht({}, e), {}, { commentsCount: ze });
              case Vn:
                var Ye = t.transients;
                return ht(ht({}, e), {}, { transients: Ye });
              case Kn:
                var We = t.transientsCount;
                return ht(ht({}, e), {}, { transientsCount: We });
              case Hn:
                var Ve = t.options;
                return ht(ht({}, e), {}, { options: Ve });
              case qn:
                var Ke = t.metadata;
                return ht(ht({}, e), {}, { metadata: Ke });
              case Jn:
                var He = t.options,
                  qe = t.filterBy,
                  Je = t.limit,
                  Qe = t.page,
                  Ze = t.hideUsedByWordPress,
                  $e = t.search,
                  et = t.accessor,
                  tt = t.sort,
                  nt = t.size,
                  rt = ["cron"],
                  at = nn(He, et, tt).filter(function (e) {
                    return !rt.includes(e.option_name);
                  }),
                  it = st(rn(at, qe, Kt, Ze, $e, nt), Qe, Je);
                return ht(ht({}, e), {}, { filteredOptions: it });
              case Qn:
                var ct = t.cronJobs,
                  lt = t.filterBy,
                  ut = t.limit,
                  ft = t.page,
                  pt = t.hideUsedByWordPress,
                  dt = t.search,
                  vt = t.accessor,
                  gt = t.sort,
                  bt = nn(ct, vt, gt),
                  Et = st(rn(bt, lt, Ht, pt, dt), ft, ut);
                return ht(ht({}, e), {}, { filteredCronJobs: Et });
              case Xn:
                var wt = t.listPostTypes,
                  Tt = t.filterBy,
                  _t = t.limit,
                  St = t.page,
                  Ot = t.hideUsedByWordPress,
                  xt = t.search,
                  Lt = t.accessor,
                  Rt = t.sort,
                  At = nn(wt, Lt, Rt),
                  kt = st(rn(At, Tt, Jt, Ot, xt), St, _t);
                return ht(ht({}, e), {}, { filteredListPostTypes: kt });
              case Zn:
                var Ct = t.dbSizes,
                  Nt = t.filterBy,
                  Pt = t.limit,
                  It = t.page,
                  Ut = t.hideUsedByWordPress,
                  Bt = t.search,
                  Mt = t.accessor,
                  jt = t.sort,
                  Dt = t.size,
                  Ft = nn(Ct, Mt, jt),
                  Gt = st(rn(Ft, Nt, qt, Ut, Bt, Dt), It, Pt).map(function (e) {
                    return ht(ht({}, e), {}, { tableName: mn(e.table) });
                  });
                return ht(ht({}, e), {}, { filteredTables: Gt });
              case $n:
                var zt = t.metadata;
                t.filterBy,
                  t.limit,
                  t.page,
                  t.hideUsedByWordPress,
                  t.accessor,
                  t.sort;
                return ht(ht({}, e), {}, { filteredMetadata: zt });
              case er:
                var Yt = t.customQueriesCount;
                return ht(ht({}, e), {}, { customQueriesCount: Yt });
              case tr:
                var Wt = t.editCustomQuery;
                return ht(ht({}, e), {}, { editCustomQuery: Wt });
              case nr:
                var Vt = t.clickedTab;
                return ht(ht({}, e), {}, { clickedTab: Vt });
              case "FILE_CONTENT_UPDATED":
                var Xt = t.fileContent;
                return ht(ht({}, e), {}, { fileContent: Xt });
              case rr:
                var $t = t.busyAction;
                return ht(ht({}, e), {}, { busyAction: $t });
              case dr:
                var en = t.entries,
                  tn = en.length
                    ? Object.keys(en.at(0))
                        .filter(function (e) {
                          return Zt.includes(e);
                        })
                        .map(function (e) {
                          var t = e.replace(/_/g, " ");
                          return {
                            accessor: e,
                            title: t
                              .replace(/^post/, "")
                              .replace(/\w\S*/g, function (e) {
                                return e.replace(/^\w/, function (e) {
                                  return e.toUpperCase();
                                });
                              }),
                            sortable: !1,
                            style: {
                              width: "auto",
                              maxWidth: "400px",
                              minWidth: "50px",
                            },
                          };
                        })
                    : {};
                return ht(
                  ht({}, e),
                  {},
                  { entries: en, entriesTableColumns: tn }
                );
              case hr:
                var an = t.cronJobs;
                return ht(ht({}, e), {}, { cronJobs: an });
              case yr:
                var on = t.tab,
                  cn = t.value,
                  ln = ht({}, e.initialized);
                return (ln[on] = cn), ht(ht({}, e), {}, { initialized: ln });
              case vr:
                var un = t.plugins;
                return ht(ht({}, e), {}, { plugins: un });
              case gr:
                var fn = t.selectedUsedBy;
                return ht(ht({}, e), {}, { selectedUsedBy: fn });
              case qr:
                var dn = t.key,
                  hn = t.data,
                  yn = t.itemKey,
                  vn = void 0 === yn ? "item" : yn,
                  gn = ![].concat(mt(sn), [Tn]).includes(dn) || void 0,
                  bn = dn.replace(/[A-Z]/g, function (e) {
                    return "_".concat(e.toLowerCase());
                  }),
                  En = A.hasOwnProperty(bn) ? A[bn] : [],
                  wn = ot(hn).map(function (e) {
                    var t, n;
                    return {
                      item: e[vn],
                      count:
                        null !==
                          (t =
                            null ===
                              (n = En.find(function (t) {
                                return t.item === e[vn];
                              })) || void 0 === n
                              ? void 0
                              : n.count) && void 0 !== t
                          ? t
                          : gn,
                    };
                  });
                return ht(
                  ht({}, e),
                  {},
                  {
                    loadEntryItems: ht(
                      ht({}, e.loadEntryItems),
                      {},
                      yt({}, dn, wn)
                    ),
                  }
                );
              case Jr:
                var _n = t.item,
                  Sn = t.count,
                  Nn = Object.keys(e.loadEntryItems).find(function (t) {
                    return e.loadEntryItems[t].some(function (e) {
                      return e.item === _n;
                    });
                  });
                if (!Nn) return ht({}, e);
                var $r = e.loadEntryItems[Nn].map(function (e) {
                  return e.item === _n ? ht(ht({}, e), {}, { count: Sn }) : e;
                });
                return ht(
                  ht({}, e),
                  {},
                  {
                    loadEntryItems: ht(
                      ht({}, e.loadEntryItems),
                      {},
                      yt({}, Nn, $r)
                    ),
                  }
                );
              case Qr:
                var ea = t.loadEntryItem,
                  ta = null == ea ? void 0 : ea.currentItem,
                  na = ta ? pn(ta, e.loadEntryItems, "prev") : null,
                  ra = ta ? pn(ta, e.loadEntryItems, "next") : null;
                return ht(
                  ht({}, e),
                  {},
                  {
                    loadEntryItem: ea,
                    loadEntryPrevItem: na,
                    loadEntryNextItem: ra,
                  }
                );
              case Xr:
                var aa = t.count;
                return ht(ht({}, e), {}, { loadEntryItemCount: aa });
              case Zr:
                var oa = t.page;
                return ht(ht({}, e), {}, { loadEntryItemPage: oa });
              default:
                return e;
            }
          },
          ea = (0, Ze.createContext)(),
          ta = function (e) {
            var t = e.children,
              n = vt((0, Ze.useReducer)($r, Nn), 2),
              r = n[0],
              o = n[1],
              c = r.tablesFilters,
              s = (0, a.jE)(),
              l = (function () {
                var e = pt(
                  ut().mark(function e(t) {
                    var n, r, a, o, i;
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.queryKey),
                              (r = vt(n, 2)),
                              (a = r[0]),
                              (o = r[1]),
                              (e.next = 4),
                              (0, g.m9)(a, o)
                            );
                          case 4:
                            return (i = e.sent), e.abrupt("return", i);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              u = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/db_sizes/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              f = (0, i.I)({ queryKey: u, queryFn: l }),
              p = f.data,
              m = f.isLoading,
              d = f.error,
              h = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == p ? void 0 : p.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [p]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: In, dbSizes: h });
              },
              [h]
            );
            var y = (0, Ze.useCallback)(
              pt(
                ut().mark(function e() {
                  return ut().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), s.invalidateQueries({ queryKey: u })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [u]
            );
            (0, Ze.useEffect)(
              function () {
                o({ type: Ir, mutateDbSizes: y });
              },
              [y]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: m ? Er : wr });
                },
                [m]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: In, dbSizes: h });
                },
                [h]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: fr, dbSizes: h, search: c.search, size: c.size });
                },
                [h, c.search, c.size]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: d });
                },
                [d]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({
                    type: Zn,
                    dbSizes: h,
                    filterBy: c.filterBy,
                    limit: c.limit,
                    page: c.page,
                    hideUsedByWordPress: c.hideUsedByWordPress,
                    search: c.search,
                    accessor: c.accessor,
                    sort: c.sort,
                    size: c.size,
                  });
                },
                [
                  h,
                  c.filterBy,
                  c.page,
                  c.limit,
                  c.hideUsedByWordPress,
                  c.search,
                  c.accessor,
                  c.sort,
                  c.size,
                ]
              );
            var v = r.listPostTypesFilters,
              b = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/list_post_types/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              E = (0, i.I)({ queryKey: b, queryFn: l }),
              w = E.data,
              T = E.isLoading,
              S = E.error,
              O = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == w ? void 0 : w.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [w]
              ),
              x = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), s.invalidateQueries({ queryKey: b })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [b]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Ur, mutateListPostTypes: x });
              },
              [x]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: T ? Er : wr });
                },
                [T]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Un, listPostTypes: O });
                },
                [O]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: Tn, data: O });
                },
                [O]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: mr, listPostTypes: O, search: v.search });
                },
                [O, v.search]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: S });
                },
                [S]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({
                    type: Xn,
                    listPostTypes: O,
                    filterBy: v.filterBy,
                    limit: v.limit,
                    page: v.page,
                    hideUsedByWordPress: v.hideUsedByWordPress,
                    search: v.search,
                    accessor: v.accessor,
                    sort: v.sort,
                  });
                },
                [
                  O,
                  v.filterBy,
                  v.page,
                  v.limit,
                  v.hideUsedByWordPress,
                  v.search,
                  v.accessor,
                  v.sort,
                ]
              );
            var R = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/posts/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              A = (0, i.I)({ queryKey: R, queryFn: l }),
              k = A.data,
              C = (A.isLoading, A.error),
              N = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == k ? void 0 : k.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [k]
              ),
              P = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), s.invalidateQueries({ queryKey: R })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [R]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Br, mutatePosts: P });
              },
              [P]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Mn, posts: N });
                },
                [N]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: vn, data: N });
                },
                [N]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: C });
                },
                [C]
              );
            var I = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/posts_metadata/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              U = (0, i.I)({ queryKey: I, queryFn: l }),
              B = U.data,
              M = (U.isLoading, U.error),
              j = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == B ? void 0 : B.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [B]
              ),
              D = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), s.invalidateQueries({ queryKey: I })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [I]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Mr, mutatePostsMetadata: D });
              },
              [D]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Dn, postsMetadata: j });
                },
                [j]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: gn, data: j });
                },
                [j]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: M });
                },
                [M]
              );
            var F = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/users/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              G = (0, i.I)({ queryKey: F, queryFn: l }),
              z = G.data,
              Y = (G.isLoading, G.error),
              W = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == z ? void 0 : z.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [z]
              ),
              V = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), s.invalidateQueries({ queryKey: F })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [F]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: jr, mutateUsers: V });
              },
              [V]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Gn, users: W });
                },
                [W]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: bn, data: W });
                },
                [W]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: Y });
                },
                [Y]
              );
            var K = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/comments/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              H = (0, i.I)({ queryKey: K, queryFn: l }),
              q = H.data,
              J = (H.isLoading, H.error),
              Q = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == q ? void 0 : q.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [q]
              ),
              X = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), s.invalidateQueries({ queryKey: K })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [K]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Dr, mutateComments: X });
              },
              [X]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Yn, comments: Q });
                },
                [Q]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: En, data: Q });
                },
                [Q]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: J });
                },
                [J]
              );
            var Z = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/transients/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              $ = (0, i.I)({ queryKey: Z, queryFn: l }),
              ee = $.data,
              te = ($.isLoading, $.error),
              ne = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == ee ? void 0 : ee.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [ee]
              ),
              re = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), s.invalidateQueries({ queryKey: Z })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [Z]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Fr, mutateTransients: re });
              },
              [re]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Vn, transients: ne });
                },
                [ne]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: wn, data: ne });
                },
                [ne]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: te });
                },
                [te]
              );
            var ae = r.optionsFilters,
              oe = (0, Ze.useMemo)(
                function () {
                  return r.shouldFetchOptions
                    ? [
                        "".concat(_, "/options/"),
                        { headers: { "X-WP-Nonce": L } },
                      ]
                    : null;
                },
                [_, L, r.shouldFetchOptions]
              ),
              ie = (0, i.I)({ queryKey: oe, queryFn: l }),
              ce = ie.data,
              se = ie.isLoading,
              le = ie.error,
              ue = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == ce ? void 0 : ce.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [ce]
              ),
              fe = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              s.invalidateQueries({ queryKey: oe })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [oe]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Gr, mutateOptions: fe });
              },
              [fe]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: se ? Tr : _r });
                },
                [se]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Hn, options: ue });
                },
                [ue]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: _n, data: ue, itemKey: "option_name" });
                },
                [ue]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({
                    type: or,
                    options: ue,
                    search: ae.search,
                    size: ae.size,
                  });
                },
                [ue, ae.search, ae.size]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({
                    type: Jn,
                    options: ue,
                    filterBy: ae.filterBy,
                    limit: ae.limit,
                    page: ae.page,
                    hideUsedByWordPress: ae.hideUsedByWordPress,
                    search: ae.search,
                    accessor: ae.accessor,
                    sort: ae.sort,
                    size: ae.size,
                  });
                },
                [
                  ue,
                  ae.filterBy,
                  ae.page,
                  ae.limit,
                  ae.hideUsedByWordPress,
                  ae.search,
                  ae.accessor,
                  ae.sort,
                  ae.size,
                ]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: le });
                },
                [le]
              );
            var pe = r.metadataFilters,
              me = (0, Ze.useMemo)(
                function () {
                  return r.shouldFetchMetadata
                    ? [
                        (0, g.mR)("".concat(_, "/metadata/"), {
                          table: pe.table,
                          limit: pe.limit,
                          skip: (pe.page - 1) * pe.limit,
                          orderBy: pe.accessor,
                          order: pe.sort,
                          search: Array.from(
                            new Set([pe.search, pe.name])
                          ).filter(Boolean),
                          size: pe.size,
                        }),
                        { headers: { "X-WP-Nonce": L } },
                      ]
                    : null;
                },
                [
                  _,
                  L,
                  r.shouldFetchMetadata,
                  pe.table,
                  pe.limit,
                  pe.page,
                  pe.accessor,
                  pe.sort,
                  pe.search,
                  pe.name,
                  pe.size,
                ]
              ),
              de = (0, i.I)({ queryKey: me, queryFn: l }),
              he = de.data,
              ye = de.isLoading,
              ve = de.error,
              ge = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == he ? void 0 : he.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [he]
              ),
              be = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == he ? void 0 : he.total) &&
                    void 0 !== e
                    ? e
                    : 0;
                },
                [he]
              ),
              Ee = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              s.invalidateQueries({ queryKey: me })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [me]
              );
            (0, Ze.useEffect)(
              function () {
                o({ type: Hr, mutateMetadata: Ee });
              },
              [Ee]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: ye ? Cr : Nr });
                },
                [ye]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qn, metadata: ge });
                },
                [ge]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: qr, key: Sn, data: ge, itemKey: "meta_id" });
                },
                [ge]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: cr, metadata: ge, total: be });
                },
                [ge, be]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({
                    type: $n,
                    metadata: ge,
                    filterBy: pe.filterBy,
                    limit: pe.limit,
                    page: pe.page,
                    hideUsedByWordPress: pe.hideUsedByWordPress,
                    accessor: pe.accessor,
                    sort: pe.sort,
                  });
                },
                [
                  ge,
                  pe.filterBy,
                  pe.page,
                  pe.limit,
                  pe.hideUsedByWordPress,
                  pe.accessor,
                  pe.sort,
                ]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: ve });
                },
                [ve]
              );
            var we = r.cronJobsFilters,
              Te = (0, Ze.useMemo)(
                function () {
                  return r.shouldFetchCronJobs
                    ? [
                        "".concat(_, "/cron_jobs/"),
                        { headers: { "X-WP-Nonce": L } },
                      ]
                    : null;
                },
                [_, L, r.shouldFetchCronJobs]
              ),
              _e = (0, i.I)({ queryKey: Te, queryFn: l }),
              Se = _e.data,
              Oe = _e.isLoading,
              xe = _e.error,
              Le = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == Se ? void 0 : Se.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [Se]
              ),
              Re =
                ((0, Ze.useMemo)(
                  function () {
                    var e;
                    return null !== (e = null == Se ? void 0 : Se.total) &&
                      void 0 !== e
                      ? e
                      : 0;
                  },
                  [Se]
                ),
                (0, Ze.useCallback)(
                  pt(
                    ut().mark(function e() {
                      return ut().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                s.invalidateQueries({ queryKey: Te })
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  [Te]
                ));
            (0, Ze.useEffect)(
              function () {
                o({ type: Vr, mutateCronJobs: Re });
              },
              [Re]
            ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Oe ? Sr : Or });
                },
                [Oe]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: hr, cronJobs: Le });
                },
                [Le]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: lr, cronJobs: Le, search: we.search });
                },
                [Le, we.search]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({
                    type: Qn,
                    cronJobs: Le,
                    filterBy: we.filterBy,
                    limit: we.limit,
                    page: we.page,
                    hideUsedByWordPress: we.hideUsedByWordPress,
                    search: we.search,
                    accessor: we.accessor,
                    sort: we.sort,
                  });
                },
                [
                  Le,
                  we.filterBy,
                  we.page,
                  we.limit,
                  we.hideUsedByWordPress,
                  we.search,
                  we.accessor,
                  we.sort,
                ]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: xe });
                },
                [xe]
              );
            var Ae = (0, Ze.useMemo)(
                function () {
                  return [
                    "".concat(_, "/plugins/"),
                    { headers: { "X-WP-Nonce": L } },
                  ];
                },
                [_, L]
              ),
              ke = (0, i.I)({ queryKey: Ae, queryFn: l }),
              Ce = ke.data,
              Ne = ke.isLoading,
              Pe = ke.error,
              Ie = (0, Ze.useMemo)(
                function () {
                  var e;
                  return null !== (e = null == Ce ? void 0 : Ce.data) &&
                    void 0 !== e
                    ? e
                    : [];
                },
                [Ce]
              ),
              Ue = (0, Ze.useCallback)(
                pt(
                  ut().mark(function e() {
                    return ut().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              s.invalidateQueries({ queryKey: Ae })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                [Ae]
              );
            return (
              (0, Ze.useEffect)(
                function () {
                  o({ type: Kr, mutatePlugins: Ue });
                },
                [Ue]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Ne ? Er : wr });
                },
                [Ne]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: vr, plugins: Ie });
                },
                [Ie]
              ),
              (0, Ze.useEffect)(
                function () {
                  o({ type: Pr, apiError: Pe });
                },
                [Pe]
              ),
              React.createElement(ea.Provider, { value: [r, o] }, t)
            );
          };
        const na = function () {
          var e = {},
            t = vt((0, Ze.useContext)(ea), 2),
            n = t[0],
            r = t[1];
          return (
            (e.updateOption = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s, l;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.busyItem),
                              (o = t.param),
                              (i = t.onSuccess),
                              (c = t.onFailure),
                              a &&
                                r({
                                  type: rr,
                                  busyAction: [].concat(mt(n.busyAction), [
                                    { item: a },
                                  ]),
                                }),
                              (s = ht(
                                ht({}, n.settingsOptions),
                                {},
                                yt({}, o.name, o.value)
                              )),
                              (e.prev = 3),
                              (e.next = 6),
                              (0, g.IU)("".concat(_, "/update_options"), {
                                json: { options: s },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 6:
                            (l = e.sent).success &&
                              (r({ type: Pn, options: l.options }), i && i()),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(3)),
                              e.t0.message && alert(e.t0.message),
                              c(e.t0);
                          case 14:
                            return (
                              (e.prev = 14),
                              a &&
                                r({
                                  type: rr,
                                  busyAction: n.busyAction.filter(function (e) {
                                    return e.item !== a;
                                  }),
                                }),
                              e.finish(14)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10, 14, 17]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.resetOptions = pt(
              ut().mark(function t() {
                var n;
                return ut().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            r({ type: Er }),
                            (t.prev = 1),
                            (t.next = 4),
                            (0, g.IU)("".concat(_, "/reset_options"), {
                              nonce: L,
                              method: "POST",
                            })
                          );
                        case 4:
                          if (!(n = t.sent).success) {
                            t.next = 9;
                            break;
                          }
                          return (
                            r({ type: Pn, options: n.data }),
                            (t.next = 9),
                            e.mutateResetAll()
                          );
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(1)),
                            t.t0.message && alert(t.t0.message);
                        case 14:
                          r({ type: wr });
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 11]]
                );
              })
            )),
            (e.performNextTask = pt(
              ut().mark(function e() {
                var t;
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r({ type: Er }),
                            (e.prev = 1),
                            (e.next = 4),
                            (0, g.IU)("".concat(_, "/run_sweeper"), {
                              nonce: L,
                              method: "POST",
                            })
                          );
                        case 4:
                          (t = e.sent).success || alert(t.message),
                            r({ type: Pn, options: t.data }),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            e.t0.message && alert(e.t0.message);
                        case 12:
                          r({ type: wr });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            )),
            (e.resetTasks = pt(
              ut().mark(function e() {
                var t;
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r({ type: Er }),
                            (e.prev = 1),
                            (e.next = 4),
                            (0, g.IU)("".concat(_, "/run_sweeper_reset"), {
                              nonce: L,
                              method: "POST",
                            })
                          );
                        case 4:
                          (t = e.sent).success || alert(t.message),
                            r({ type: Pn, options: t.data }),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            e.t0.message && alert(e.t0.message);
                        case 12:
                          r({ type: wr });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            )),
            (e.mutateResetAll = pt(
              ut().mark(function e() {
                return ut().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), n.mutateDbSizes();
                      case 2:
                        return (e.next = 4), n.mutatePosts();
                      case 4:
                        return (e.next = 6), n.mutatePostsMetadata();
                      case 6:
                        return (e.next = 8), n.mutateUsers();
                      case 8:
                        return (e.next = 10), n.mutateComments();
                      case 10:
                        return (e.next = 12), n.mutateListPostTypes();
                      case 12:
                        return (e.next = 14), n.mutateTransients();
                      case 14:
                        return (e.next = 16), n.mutateOptions();
                      case 16:
                        r({ type: Bn, listPostTypesCount: [] }),
                          r({ type: jn, postsCount: [] }),
                          r({ type: Fn, postsCount: [] }),
                          r({ type: zn, usersCount: [] }),
                          r({ type: Wn, commentsCount: [] }),
                          r({ type: Kn, transientsCount: [] }),
                          r({ type: er, customQueriesCount: [] }),
                          r({ type: tr, editCustomQuery: null }),
                          r({ type: nr, clickedTab: yn });
                      case 25:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            (e.deleteEntries = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var n, r, a, o, i, c;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.item),
                              (r = t.isAutoClean),
                              (a = void 0 !== r && r),
                              (o = t.onSuccess),
                              (i = t.signal),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, g.IU)("".concat(_, "/delete_entries"), {
                                json: { item: n, is_auto_clean: a },
                                signal: i,
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 4:
                            return (
                              (c = e.sent).success && o && o(),
                              e.abrupt("return", c)
                            );
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              e.t0.message && console.error(e.t0.message);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.getEntries = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s, l, u;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              (o = t.offset),
                              (i = void 0 === o ? 0 : o),
                              (c = new AbortController()),
                              (s = c.signal),
                              (l = (0, g.mR)("".concat(_, "/entries/"), {
                                item: a,
                                offset: i,
                              })),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: "loading_".concat(a) },
                                ]),
                              }),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.J4)(l, null, s, L)
                            );
                          case 8:
                            if ((u = e.sent).success) {
                              e.next = 12;
                              break;
                            }
                            return (
                              u.message && alert(u.message), e.abrupt("return")
                            );
                          case 12:
                            return (
                              (e.next = 14), r({ type: dr, entries: u.data })
                            );
                          case 14:
                            e.next = 19;
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(5)),
                              e.t0.message && alert(e.t0.message);
                          case 19:
                            return (
                              (e.prev = 19),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== "loading_".concat(a);
                                }),
                              }),
                              e.finish(19)
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 16, 19, 22]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.getOptionValue = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.optionName),
                              (o = new AbortController()),
                              (i = o.signal),
                              (c = (0, g.mR)("".concat(_, "/option_value/"), {
                                option_name: a,
                              })),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: "loading_".concat(a) },
                                ]),
                              }),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.J4)(c, null, i, L)
                            );
                          case 8:
                            if ((s = e.sent).success) {
                              e.next = 12;
                              break;
                            }
                            return (
                              s.message && alert(s.message), e.abrupt("return")
                            );
                          case 12:
                            r({ type: dr, entries: s.data }), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              e.t0.message && alert(e.t0.message);
                          case 18:
                            return (
                              (e.prev = 18),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== "loading_".concat(a);
                                }),
                              }),
                              e.finish(18)
                            );
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15, 18, 21]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.customQueryDelete = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var n, r, a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.item),
                              (r = t.query),
                              (a = t.onSuccess),
                              (o = t.onFailure),
                              (i = t.signal),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, g.IU)("".concat(_, "/custom_query_delete"), {
                                json: { item: n, query: r },
                                signal: i,
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 4:
                            if ((c = e.sent).success || !c.message) {
                              e.next = 9;
                              break;
                            }
                            throw new Error(c.message);
                          case 9:
                            a && a(n, c);
                          case 10:
                            return e.abrupt("return", c);
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              o
                                ? o(
                                    null !== (s = e.t0.message) && void 0 !== s
                                      ? s
                                      : ""
                                  )
                                : e.t0.message && alert(e.t0.message);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.refreshCostomQueryCount = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s, l;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              (o = t.query),
                              (i = t.onSuccess),
                              (c = t.onFailure),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: Ct(a) },
                                ]),
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, g.IU)("".concat(_, "/custom_query_count"), {
                                json: { item: a, query: o },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 5:
                            if ((s = e.sent).success) {
                              e.next = 8;
                              break;
                            }
                            throw new Error(s.message);
                          case 8:
                            i && i(a, s), (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(2)),
                              c
                                ? c(
                                    null !== (l = e.t0.message) && void 0 !== l
                                      ? l
                                      : ""
                                  )
                                : e.t0.message && alert(e.t0.message);
                          case 14:
                            return (
                              (e.prev = 14),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== Ct(a);
                                }),
                              }),
                              e.finish(14)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 11, 14, 17]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.allRefreshCostomQueryCount = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              (o = t.onSuccess),
                              (i = t.counts),
                              (c = mt(i)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: Ct(a) },
                                ]),
                              }),
                              (e.prev = 3),
                              (e.next = 6),
                              (0, g.IU)("".concat(_, "/custom_query_count"), {
                                json: { item: a },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 6:
                            if ((s = e.sent).success) {
                              e.next = 10;
                              break;
                            }
                            return (
                              s.message && alert(s.message), e.abrupt("return")
                            );
                          case 10:
                            (c = [].concat(
                              mt(
                                i.filter(function (e) {
                                  return e.item !== a;
                                })
                              ),
                              [{ item: a, count: s.data }]
                            )),
                              o(c),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(3)),
                              e.t0.message && alert(e.t0.message);
                          case 17:
                            return (
                              (e.prev = 17),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== Ct(a);
                                }),
                              }),
                              e.finish(17)
                            );
                          case 20:
                            return e.abrupt("return", c);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 14, 17, 20]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.loadEntryCount = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var n, a, o, i, c, s, l, u;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.item),
                              (a = t.onSuccess),
                              (o = t.avoidUpdateState),
                              (i = void 0 !== o && o),
                              (c = new AbortController()),
                              (s = c.signal),
                              (l = (0, g.mR)("".concat(_, "/entry_count/"), {
                                item: n,
                              })),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, g.J4)(l, null, s, L)
                            );
                          case 7:
                            if ((u = e.sent).success) {
                              e.next = 11;
                              break;
                            }
                            return (
                              u.message && alert(u.message), e.abrupt("return")
                            );
                          case 11:
                            return (
                              a && a(n, u),
                              i && r({ type: Jr, item: n, count: u.data }),
                              e.abrupt("return", u.data)
                            );
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(4)),
                              e.t0.message && alert(e.t0.message);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 16]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.refreshEntryCount = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s, l, u, f;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.busyItem),
                              (o = t.item),
                              (i = t.onSuccess),
                              (c = new AbortController()),
                              (s = c.signal),
                              (l = (0, g.mR)("".concat(_, "/entry_count/"), {
                                item: o,
                              })),
                              (u = null != a ? a : Ct(o)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: u },
                                ]),
                              }),
                              (e.prev = 6),
                              (e.next = 9),
                              (0, g.J4)(l, null, s, L)
                            );
                          case 9:
                            if ((f = e.sent).success) {
                              e.next = 13;
                              break;
                            }
                            return (
                              f.message && alert(f.message), e.abrupt("return")
                            );
                          case 13:
                            i && i(o, f),
                              r({ type: Jr, item: o, count: f.data }),
                              (e.next = 20);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(6)),
                              e.t0.message && alert(e.t0.message);
                          case 20:
                            return (
                              (e.prev = 20),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== u;
                                }),
                              }),
                              e.finish(20)
                            );
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 17, 20, 23]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.allRefreshEntryCount = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s, l, u, f;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              (o = t.onSuccess),
                              (i = t.counts),
                              (c = new AbortController()),
                              (s = c.signal),
                              (l = (0, g.mR)("".concat(_, "/entry_count/"), {
                                item: a,
                              })),
                              (u = mt(i)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: Ct(a) },
                                ]),
                              }),
                              (e.prev = 6),
                              (e.next = 9),
                              (0, g.J4)(l, null, s, L)
                            );
                          case 9:
                            if ((f = e.sent).success) {
                              e.next = 13;
                              break;
                            }
                            return (
                              f.message && alert(f.message), e.abrupt("return")
                            );
                          case 13:
                            (u = [].concat(
                              mt(
                                i.filter(function (e) {
                                  return e.item !== a;
                                })
                              ),
                              [{ item: a, count: f.data }]
                            )),
                              r({ type: Jr, item: a, count: f.data }),
                              o(u),
                              (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(6)),
                              e.t0.message && alert(e.t0.message);
                          case 21:
                            return (
                              (e.prev = 21),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== Ct(a);
                                }),
                              }),
                              e.abrupt("return", u)
                            );
                          case 25:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 18, 21, 25]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.deleteOption = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: a },
                                ]),
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, g.IU)("".concat(_, "/delete_options"), {
                                json: { item: a },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 5:
                            if ((o = e.sent).success) {
                              e.next = 9;
                              break;
                            }
                            return (
                              o.message && alert(o.message), e.abrupt("return")
                            );
                          case 9:
                            return (e.next = 11), nt(n.delay);
                          case 11:
                            n.mutateOptions(), (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(2)),
                              e.t0.message && console.error(e.t0.message);
                          case 17:
                            return (
                              (e.prev = 17),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== a;
                                }),
                              }),
                              e.finish(17)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 14, 17, 20]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.deleteOptions = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.items),
                              (o = a.map(function (e) {
                                return { item: e };
                              })),
                              (i = mt(n.busyAction)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), mt(o)),
                              }),
                              (c = []),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.IU)("".concat(_, "/delete_options"), {
                                json: { items: a },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 8:
                            return (
                              (s = e.sent).success ||
                                (s.message && alert(s.message),
                                (c = s.data ? mt(s.data) : [])),
                              (e.next = 12),
                              nt(n.delay)
                            );
                          case 12:
                            n.mutateOptions(), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              e.t0.message && console.error(e.t0.message);
                          case 18:
                            return (
                              r({ type: rr, busyAction: mt(i) }),
                              e.abrupt("return", c)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.switchAutoloadedOption = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              (o = t.autoload),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: a },
                                ]),
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, g.IU)(
                                "".concat(_, "/switch_autoloaded_option"),
                                {
                                  json: { item: a, autoload: o },
                                  nonce: L,
                                  method: "POST",
                                }
                              )
                            );
                          case 5:
                            if (e.sent.success) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            n.mutateOptions(), (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(2)),
                              e.t0.message && alert(e.t0.message);
                          case 14:
                            return (
                              (e.prev = 14),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== a;
                                }),
                              }),
                              e.finish(14)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 11, 14, 17]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.deleteCron = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: a.name },
                                ]),
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, g.IU)("".concat(_, "/delete_crons"), {
                                json: { item: a },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 5:
                            if ((o = e.sent).success) {
                              e.next = 9;
                              break;
                            }
                            return (
                              o.message && alert(o.message), e.abrupt("return")
                            );
                          case 9:
                            return (e.next = 11), nt(n.delay);
                          case 11:
                            n.mutateCronJobs(), (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(2)),
                              e.t0.message && console.error(e.t0.message);
                          case 17:
                            return (
                              (e.prev = 17),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== a;
                                }),
                              }),
                              e.finish(17)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 14, 17, 20]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.deleteCrons = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.items),
                              (o = a.map(function (e) {
                                return { item: e.name };
                              })),
                              (i = mt(n.busyAction)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), mt(o)),
                              }),
                              (c = []),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.IU)("".concat(_, "/delete_crons"), {
                                json: { items: a },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 8:
                            return (
                              (s = e.sent).success ||
                                (s.message && alert(s.message),
                                (c = mt(s.data))),
                              (e.next = 12),
                              nt(n.delay)
                            );
                          case 12:
                            n.mutateCronJobs(), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              e.t0.message && console.error(e.t0.message);
                          case 18:
                            return (
                              r({ type: rr, busyAction: mt(i) }),
                              e.abrupt("return", c)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.getMetadataValue = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.id),
                              (o = new AbortController()),
                              (i = o.signal),
                              (c = (0, g.mR)("".concat(_, "/metadata_value/"), {
                                id: a,
                                table: n.metadataFilters.table,
                              })),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: "loading_".concat(a) },
                                ]),
                              }),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.J4)(c, null, i, L)
                            );
                          case 8:
                            if ((s = e.sent).success) {
                              e.next = 12;
                              break;
                            }
                            return (
                              s.message && alert(s.message), e.abrupt("return")
                            );
                          case 12:
                            r({ type: dr, entries: s.data }), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              e.t0.message && alert(e.t0.message);
                          case 18:
                            return (
                              (e.prev = 18),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== "loading_".concat(a);
                                }),
                              }),
                              e.finish(18)
                            );
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15, 18, 21]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.deleteMetadata = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.item),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), [
                                  { item: a },
                                ]),
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, g.IU)("".concat(_, "/delete_metadata"), {
                                json: {
                                  item: a,
                                  table: n.metadataFilters.table,
                                },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 5:
                            if ((o = e.sent).success) {
                              e.next = 9;
                              break;
                            }
                            return (
                              o.message && alert(o.message), e.abrupt("return")
                            );
                          case 9:
                            return (e.next = 11), nt(n.delay);
                          case 11:
                            n.mutateMetadata(), (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(2)),
                              e.t0.message && console.error(e.t0.message);
                          case 17:
                            return (
                              (e.prev = 17),
                              r({
                                type: rr,
                                busyAction: n.busyAction.filter(function (e) {
                                  return e.item !== a;
                                }),
                              }),
                              e.finish(17)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 14, 17, 20]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.deleteMultipleMetadata = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.items),
                              (o = a.map(function (e) {
                                return { item: e };
                              })),
                              (i = mt(n.busyAction)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), mt(o)),
                              }),
                              (c = []),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.IU)("".concat(_, "/delete_metadata"), {
                                json: {
                                  items: a,
                                  table: n.metadataFilters.table,
                                },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 8:
                            return (
                              (s = e.sent).success ||
                                (s.message && alert(s.message),
                                (c = s.data ? mt(s.data) : [])),
                              (e.next = 12),
                              nt(n.delay)
                            );
                          case 12:
                            n.mutateMetadata(), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              e.t0.message && console.error(e.t0.message);
                          case 18:
                            return (
                              r({ type: rr, busyAction: mt(i) }),
                              e.abrupt("return", c)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.updateClickedTabByIndex = function (e) {
              var t = ht({}, n.clickedTab),
                a = e.replace(/\s+/g, ""),
                o = n.clickedTab[hn[a]] + 1;
              (t[hn[a]] = o > 1 ? 2 : o), r({ type: nr, clickedTab: t });
            }),
            (e.updateClickedTabByTitle = function (e) {
              var t = ht({}, n.clickedTab);
              (t[e.replace(/\s+/g, "")] = 1), r({ type: nr, clickedTab: t });
            }),
            (e.logDbSize = pt(
              ut().mark(function e() {
                return ut().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, g.IU)("".concat(_, "/log_db_size"), {
                            nonce: L,
                            method: "POST",
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            (e.refreshLogs = pt(
              ut().mark(function e() {
                var t;
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            (0, g.IU)("".concat(_, "/refresh_logs"), {
                              nonce: L,
                              method: "POST",
                            })
                          );
                        case 3:
                          if (!(t = e.sent).success) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return", t.data);
                        case 8:
                          throw new Error(t.message);
                        case 9:
                          e.next = 14;
                          break;
                        case 11:
                          throw (
                            ((e.prev = 11),
                            (e.t0 = e.catch(0)),
                            new Error("Failed to refresh logs"))
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 11]]
                );
              })
            )),
            (e.clearLogs = pt(
              ut().mark(function e() {
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            (0, g.IU)("".concat(_, "/clear_logs"), {
                              nonce: L,
                              method: "POST",
                            })
                          );
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          throw (
                            ((e.prev = 5),
                            (e.t0 = e.catch(0)),
                            new Error("Failed to clear logs"))
                          );
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                );
              })
            )),
            (e.generateFakeData = pt(
              ut().mark(function e() {
                return ut().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r({
                            type: rr,
                            busyAction: [].concat(mt(n.busyAction), [
                              { item: "fakeData" },
                            ]),
                          }),
                          (e.next = 3),
                          (0, g.IU)("".concat(_, "/generate_fake_data"), {
                            nonce: L,
                            method: "POST",
                          })
                        );
                      case 3:
                        r({ type: rr, busyAction: mt(n.busyAction) });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            (e.deleteCustomUsedBy = pt(
              ut().mark(function e() {
                var t, a;
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r({
                              type: rr,
                              busyAction: [].concat(mt(n.busyAction), [
                                { item: "deleteCustomUsedBy" },
                              ]),
                            }),
                            (t = ht(
                              ht({}, n.settingsOptions),
                              {},
                              {
                                post_type_usedby: [],
                                option_usedby: [],
                                table_usedby: [],
                                cron_usedby: [],
                                metadata_usedby: [],
                              }
                            )),
                            (e.prev = 2),
                            (e.next = 5),
                            (0, g.IU)("".concat(_, "/update_options"), {
                              json: { options: t },
                              nonce: L,
                              method: "POST",
                            })
                          );
                        case 5:
                          (a = e.sent).success &&
                            r({ type: Pn, options: a.options }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            e.t0.message && alert(e.t0.message),
                            onFailure(e.t0);
                        case 13:
                          return (
                            (e.prev = 13),
                            r({ type: rr, busyAction: mt(n.busyAction) }),
                            e.finish(13)
                          );
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9, 13, 16]]
                );
              })
            )),
            (e.deleteTables = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.tables),
                              (o = a.map(function (e) {
                                return { item: "delete_".concat(e.tableName) };
                              })),
                              (i = mt(n.busyAction)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), mt(o)),
                              }),
                              (c = []),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.IU)("".concat(_, "/delete_tables"), {
                                json: {
                                  tables: a.map(function (e) {
                                    return e.needsSuffix
                                      ? dn(e.tableName)
                                      : e.tableName;
                                  }),
                                },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 8:
                            return (
                              (s = e.sent).success ||
                                (s.message && alert(s.message),
                                (c = s.data
                                  ? mt(s.data).map(function (e) {
                                      return mn(e);
                                    })
                                  : [])),
                              (e.next = 12),
                              nt(n.delay)
                            );
                          case 12:
                            n.mutateDbSizes(), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              e.t0.message && console.error(e.t0.message);
                          case 18:
                            return (
                              r({ type: rr, busyAction: mt(i) }),
                              e.abrupt("return", c)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.optimizeTables = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.tables),
                              (o = a.map(function (e) {
                                return {
                                  item: "optimize_".concat(e.tableName),
                                };
                              })),
                              (i = mt(n.busyAction)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), mt(o)),
                              }),
                              (c = []),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.IU)("".concat(_, "/optimize_tables"), {
                                json: {
                                  tables: a.map(function (e) {
                                    return e.needsSuffix
                                      ? dn(e.tableName)
                                      : e.tableName;
                                  }),
                                },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 8:
                            (s = e.sent).success ||
                              (s.message && alert(s.message),
                              (c = s.data
                                ? mt(s.data).map(function (e) {
                                    return mn(e);
                                  })
                                : [])),
                              n.mutateDbSizes(),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(5)),
                              e.t0.message && alert(e.t0.message);
                          case 16:
                            return (
                              r({ type: rr, busyAction: mt(i) }),
                              e.abrupt("return", c)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.repairTables = (function () {
              var e = pt(
                ut().mark(function e(t) {
                  var a, o, i, c, s;
                  return ut().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.tables),
                              (o = a.map(function (e) {
                                return { item: "repair_".concat(e.tableName) };
                              })),
                              (i = mt(n.busyAction)),
                              r({
                                type: rr,
                                busyAction: [].concat(mt(n.busyAction), mt(o)),
                              }),
                              (c = []),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, g.IU)("".concat(_, "/repair_tables"), {
                                json: {
                                  tables: a.map(function (e) {
                                    return e.needsSuffix
                                      ? dn(e.tableName)
                                      : e.tableName;
                                  }),
                                },
                                nonce: L,
                                method: "POST",
                              })
                            );
                          case 8:
                            (s = e.sent).success ||
                              (s.message && alert(s.message),
                              (c = s.data
                                ? mt(s.data).map(function (e) {
                                    return mn(e);
                                  })
                                : [])),
                              n.mutateDbSizes(),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(5)),
                              e.t0.message && alert(e.t0.message);
                          case 16:
                            return (
                              r({ type: rr, busyAction: mt(i) }),
                              e.abrupt("return", c)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.getTotalDbSizes = pt(
              ut().mark(function e() {
                var t, a, o;
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new AbortController()),
                            (a = t.signal),
                            r({
                              type: rr,
                              busyAction: [].concat(mt(n.busyAction), [
                                { item: Pt },
                              ]),
                            }),
                            (e.prev = 3),
                            (e.next = 6),
                            (0, g.J4)(
                              "".concat(_, "/total_db_size/"),
                              null,
                              a,
                              L
                            )
                          );
                        case 6:
                          if ((o = e.sent).success) {
                            e.next = 10;
                            break;
                          }
                          return (
                            o.message && alert(o.message), e.abrupt("return")
                          );
                        case 10:
                          console.log(
                            Xe.CONTEXT.HISTORICAL_DB_SIZES,
                            o.data.db_historical_sizes
                          ),
                            r({ type: Pn, options: o.data }),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(3)),
                            e.t0.message && alert(e.t0.message);
                        case 17:
                          return (
                            (e.prev = 17),
                            r({
                              type: rr,
                              busyAction: n.busyAction.filter(function (e) {
                                return e.item !== Pt;
                              }),
                            }),
                            e.finish(17)
                          );
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 14, 17, 20]]
                );
              })
            )),
            (e.getAutoCleanItems = pt(
              ut().mark(function e() {
                var t, n, r;
                return ut().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new AbortController()),
                            (n = t.signal),
                            (e.prev = 2),
                            (e.next = 5),
                            (0, g.J4)(
                              "".concat(_, "/auto_clean_items/"),
                              null,
                              n,
                              L
                            )
                          );
                        case 5:
                          return (r = e.sent), e.abrupt("return", r.data);
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            e.t0.message && alert(e.t0.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            )),
            (e.resetAutoCleanItemsCount = function (e) {
              var t = function (e, t) {
                  return e.map(function (e) {
                    return ht(
                      ht({}, e),
                      {},
                      { count: t.includes(e.item) ? 0 : e.count }
                    );
                  });
                },
                a = e
                  .filter(function (e) {
                    return (
                      e.item.includes("posts_") &&
                      !e.item.includes("posts_metadata_")
                    );
                  })
                  .map(function (e) {
                    return e.item;
                  }),
                o = t(n.postsCount, a);
              r({ type: jn, postsCount: o });
              var i = e
                  .filter(function (e) {
                    return e.item.includes("posts_metadata_");
                  })
                  .map(function (e) {
                    return e.item;
                  }),
                c = t(n.postsMetadataCount, i);
              r({ type: Fn, postsMetadataCount: c });
              var s = e
                  .filter(function (e) {
                    return e.item.includes("users_");
                  })
                  .map(function (e) {
                    return e.item;
                  }),
                l = t(n.usersCount, s);
              r({ type: zn, usersCount: l });
              var u = e
                  .filter(function (e) {
                    return e.item.includes("comments_");
                  })
                  .map(function (e) {
                    return e.item;
                  }),
                f = t(n.commentsCount, u);
              r({ type: Wn, commentsCount: f });
              var p = e
                  .filter(function (e) {
                    return e.item.includes("options_");
                  })
                  .map(function (e) {
                    return e.item;
                  }),
                m = t(n.transientsCount, p);
              r({ type: Kn, transientsCount: m });
              var d = e
                  .filter(function (e) {
                    return e.item.includes("list_post_types_");
                  })
                  .map(function (e) {
                    return e.item;
                  }),
                h = t(n.listPostTypesCount, d);
              r({ type: Bn, listPostTypesCount: h });
            }),
            (e.buildIndexes = pt(
              ut().mark(function e() {
                return ut().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r({
                            type: rr,
                            busyAction: [].concat(mt(n.busyAction), [
                              { item: "build_indexes" },
                            ]),
                          }),
                          (e.next = 3),
                          (0, g.IU)("".concat(_, "/build_indexes"), {
                            nonce: L,
                            method: "POST",
                          })
                        );
                      case 3:
                        r({ type: rr, busyAction: mt(n.busyAction) });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            (e.removeIndexes = pt(
              ut().mark(function e() {
                return ut().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r({
                            type: rr,
                            busyAction: [].concat(mt(n.busyAction), [
                              { item: "remove_indexes" },
                            ]),
                          }),
                          (e.next = 3),
                          (0, g.IU)("".concat(_, "/remove_indexes"), {
                            nonce: L,
                            method: "POST",
                          })
                        );
                      case 3:
                        r({ type: rr, busyAction: mt(n.busyAction) });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            (e.setListPostTypesCount = function (e) {
              r({ type: Bn, listPostTypesCount: e });
            }),
            (e.setPostsCount = function (e) {
              r({ type: jn, postsCount: e });
            }),
            (e.setPostsMetadataCount = function (e) {
              r({ type: Fn, postsMetadataCount: e });
            }),
            (e.setUsersCount = function (e) {
              r({ type: zn, usersCount: e });
            }),
            (e.setCommentsCount = function (e) {
              r({ type: Wn, commentsCount: e });
            }),
            (e.setTransientsCount = function (e) {
              r({ type: Kn, transientsCount: e });
            }),
            (e.setCustomQueriesCount = function (e) {
              r({ type: er, customQueriesCount: e });
            }),
            (e.setEditCustomQuery = function (e) {
              r({ type: tr, editCustomQuery: e });
            }),
            (e.setLoadEntryItem = (function () {
              var t = pt(
                ut().mark(function t(a) {
                  var o, i, c, s, l;
                  return ut().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((o = a.loadEntryItem),
                            (i = a.count),
                            (c = void 0 === i ? 0 : i),
                            (s = a.page),
                            (l = void 0 === s ? 1 : s),
                            r({ type: Qr, loadEntryItem: o }),
                            r({ type: Xr, count: c }),
                            r({ type: Zr, page: l }),
                            null != o)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt("return");
                        case 6:
                          return (
                            (t.next = 8),
                            e.getEntries({
                              item: o,
                              offset: n.loadEntryItemLimit * (l - 1),
                            })
                          );
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (e.setLoadEntryItemPage = (function () {
              var t = pt(
                ut().mark(function t(a) {
                  return ut().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            r({ type: Zr, page: a }),
                            (t.next = 3),
                            e.getEntries({
                              item: n.loadEntryItem,
                              offset: n.loadEntryItemLimit * (a - 1),
                            })
                          );
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (e.setBusyAction = function (e) {
              r({ type: rr, busyAction: e });
            }),
            (e.setShouldFetchOptions = function () {
              r({ type: zr });
            }),
            (e.setEntries = function (e) {
              r({ type: dr, entries: e });
            }),
            (e.setShouldFetchCronJobs = function () {
              r({ type: Yr });
            }),
            (e.setShouldFetchMetadata = function () {
              r({ type: Wr });
            }),
            (e.setInitialized = function (e, t) {
              r({ type: yr, tab: e, value: t });
            }),
            (e.setSelectedUsedBy = function (e) {
              r({ type: gr, selectedUsedBy: e });
            }),
            (e.updateOptionsFilters = function (e) {
              var t = e.limit,
                a = e.page,
                o = e.filterBy,
                i = e.hideUsedByWordPress,
                c = e.search,
                s = e.accessor,
                l = e.sort,
                u = e.size,
                f = null != t ? t : n.optionsFilters.limit,
                p = null != a ? a : n.optionsFilters.page,
                m = null != o ? o : n.optionsFilters.filterBy,
                d = null != i ? i : n.optionsFilters.hideUsedByWordPress,
                h = null != c ? c : n.optionsFilters.search,
                y = null != s ? s : n.optionsFilters.accessor,
                v = null != l ? l : n.optionsFilters.sort,
                g = null != u ? u : n.optionsFilters.size;
              r({
                type: ar,
                optionsFilters: ht(
                  ht({}, n.optionsFilters),
                  {},
                  {
                    limit: f,
                    page: p,
                    filterBy: m,
                    hideUsedByWordPress: d,
                    search: h,
                    accessor: y,
                    sort: v,
                    size: g,
                  }
                ),
              });
            }),
            (e.updateCronJobsFilters = function (e) {
              var t = e.limit,
                a = e.page,
                o = e.filterBy,
                i = e.hideUsedByWordPress,
                c = e.search,
                s = e.accessor,
                l = e.sort,
                u = null != t ? t : n.cronJobsFilters.limit,
                f = null != a ? a : n.cronJobsFilters.page,
                p = null != o ? o : n.cronJobsFilters.filterBy,
                m = null != i ? i : n.cronJobsFilters.hideUsedByWordPress,
                d = null != c ? c : n.cronJobsFilters.search,
                h = null != s ? s : n.cronJobsFilters.accessor,
                y = null != l ? l : n.cronJobsFilters.sort;
              r({
                type: sr,
                cronJobsFilters: ht(
                  ht({}, n.cronJobsFilters),
                  {},
                  {
                    limit: u,
                    page: f,
                    filterBy: p,
                    hideUsedByWordPress: m,
                    search: d,
                    accessor: h,
                    sort: y,
                  }
                ),
              });
            }),
            (e.updateTablesFilters = function (e) {
              var t = e.limit,
                a = e.page,
                o = e.filterBy,
                i = e.hideUsedByWordPress,
                c = e.search,
                s = e.accessor,
                l = e.sort,
                u = e.size,
                f = null != t ? t : n.tablesFilters.limit,
                p = null != a ? a : n.tablesFilters.page,
                m = null != o ? o : n.tablesFilters.filterBy,
                d = null != i ? i : n.tablesFilters.hideUsedByWordPress,
                h = null != c ? c : n.tablesFilters.search,
                y = null != s ? s : n.tablesFilters.accessor,
                v = null != l ? l : n.tablesFilters.sort,
                g = null != u ? u : n.tablesFilters.size;
              r({
                type: ur,
                tablesFilters: ht(
                  ht({}, n.tablesFilters),
                  {},
                  {
                    limit: f,
                    page: p,
                    filterBy: m,
                    hideUsedByWordPress: d,
                    search: h,
                    accessor: y,
                    sort: v,
                    size: g,
                  }
                ),
              });
            }),
            (e.updateListPostTypesFilters = function (e) {
              var t = e.limit,
                a = e.page,
                o = e.filterBy,
                i = e.hideUsedByWordPress,
                c = e.search,
                s = e.accessor,
                l = e.sort,
                u = null != t ? t : n.listPostTypesFilters.limit,
                f = null != a ? a : n.listPostTypesFilters.page,
                p = null != o ? o : n.listPostTypesFilters.filterBy,
                m = null != i ? i : n.listPostTypesFilters.hideUsedByWordPress,
                d = null != c ? c : n.listPostTypesFilters.search,
                h = null != s ? s : n.listPostTypesFilters.accessor,
                y = null != l ? l : n.listPostTypesFilters.sort;
              r({
                type: pr,
                listPostTypesFilters: ht(
                  ht({}, n.listPostTypesFilters),
                  {},
                  {
                    limit: u,
                    filterBy: p,
                    page: f,
                    hideUsedByWordPress: m,
                    search: d,
                    accessor: h,
                    sort: y,
                  }
                ),
              });
            }),
            (e.updateMetadataFilters = function (e) {
              var t = e.limit,
                a = e.page,
                o = e.filterBy,
                i = e.hideUsedByWordPress,
                c = e.search,
                s = e.accessor,
                l = e.sort,
                u = e.table,
                f = e.size,
                p = e.name,
                m = null != t ? t : n.metadataFilters.limit,
                d = null != a ? a : n.metadataFilters.page,
                h = null != o ? o : n.metadataFilters.filterBy,
                y = null != i ? i : n.metadataFilters.hideUsedByWordPress,
                v = null != c ? c : n.metadataFilters.search,
                g = null != s ? s : n.metadataFilters.accessor,
                b = null != l ? l : n.metadataFilters.sort,
                E = null != u ? u : n.metadataFilters.table,
                w = null != f ? f : n.metadataFilters.size,
                T = null != p ? p : n.metadataFilters.name;
              r({
                type: ir,
                metadataFilters: ht(
                  ht({}, n.metadataFilters),
                  {},
                  {
                    limit: m,
                    page: d,
                    filterBy: h,
                    hideUsedByWordPress: y,
                    search: v,
                    accessor: g,
                    sort: b,
                    table: E,
                    size: w,
                    name: T,
                  }
                ),
              });
            }),
            (e.toggleModal = function (e) {
              var t = e.modal,
                n = e.enable,
                a = void 0 === n ? void 0 : n,
                o = e.onNext,
                i = void 0 === o ? function () {} : o,
                c = e.title,
                s = e.data;
              r({
                type: br,
                modal: t,
                enable: a,
                onNext: i,
                title: c,
                data: void 0 === s ? {} : s,
              });
            }),
            (e.pushBusy = function () {
              r({ type: Er });
            }),
            (e.popBusy = function () {
              r({ type: wr });
            }),
            (e.pushBusyBulkTasks = function () {
              r({ type: xr });
            }),
            (e.popBusyBulkTasks = function () {
              r({ type: Lr });
            }),
            (e.resetBusyBulkTasks = function () {
              r({ type: Rr });
            }),
            (e.pushBusyCleanBulkTasks = function () {
              r({ type: Ar });
            }),
            (e.popBusyCleanBulkTasks = function () {
              r({ type: kr });
            }),
            (e.pushBusyOptions = function () {
              r({ type: Tr });
            }),
            (e.popBusyOptions = function () {
              r({ type: _r });
            }),
            (e.pushBusyCronJobs = function () {
              r({ type: Sr });
            }),
            (e.popBusyCronJobs = function () {
              r({ type: Or });
            }),
            ht(ht({}, n), e)
          );
        };
        var ra,
          aa = n(1843),
          oa = n(1997);
        function ia(e) {
          return (
            (ia =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            ia(e)
          );
        }
        function ca(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function sa(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ca(Object(n), !0).forEach(function (t) {
                  la(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ca(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function la(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== ia(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== ia(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === ia(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function ua() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ua =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == ia(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(ia(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function fa(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return pa(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return pa(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return pa(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function pa(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function ma(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function da(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                ma(o, r, a, i, c, "next", e);
              }
              function c(e) {
                ma(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        var ha,
          ya,
          va = { minWidth: 0, padding: "0 4px" },
          ga = {
            marginTop: 25,
            borderTop: "1px solid lightgray",
            paddingTop: 15,
            display: "flex",
            alignItems: "center",
          },
          ba = G.Ay.div(
            ra ||
              ((ha = [
                "\n  cursor: pointer;\n\n  .actions {\n    display: flex;\n    font-size: 10px;\n    color: var(--neko-blue);\n    text-transform: uppercase;\n    line-height: 10px;\n    margin-left: 27px;\n    opacity: 0.5;\n    transition: opacity 0.2s ease-out;\n  }\n\n  .dashicons {\n    font-size: 10px;\n    margin-top: 2px;\n    margin-bottom: -10px;\n  }\n\n  &:hover .actions {\n    opacity: 1;\n  }\n",
              ]),
              ya || (ya = ha.slice(0)),
              (ra = Object.freeze(
                Object.defineProperties(ha, {
                  raw: { value: Object.freeze(ya) },
                })
              )))
          ),
          Ea = function (e) {
            var t,
              n,
              r = e.item,
              a =
                (e.override,
                null !==
                  (t =
                    null == r || null === (n = r.info) || void 0 === n
                      ? void 0
                      : n.status) && void 0 !== t
                  ? t
                  : "ok");
            return "never" === (null == r ? void 0 : r.clean_style) || !r.info
              ? null
              : React.createElement(Le.z, {
                  icon:
                    "ok" === a
                      ? "check-circle"
                      : "warn" === a
                      ? "close"
                      : "alert",
                  color:
                    "ok" === a
                      ? "var(--neko-green)"
                      : "warn" === a
                      ? "#ba4300"
                      : "var(--neko-orange)",
                  width: 24,
                  height: 24,
                  style: { marginRight: 3 },
                });
          },
          wa = function (e) {
            var t,
              n,
              r = e.item,
              a = e.itemText,
              o =
                null !==
                  (t =
                    null == r || null === (n = r.info) || void 0 === n
                      ? void 0
                      : n.status) && void 0 !== t
                  ? t
                  : "ok",
              i =
                "never" === (null == r ? void 0 : r.clean_style)
                  ? "#cac4c4"
                  : "ok" === o
                  ? "black"
                  : "warn" === o
                  ? "#ba4300"
                  : "black";
            return React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              React.createElement("span", { style: { color: i } }, a)
            );
          },
          Ta = function (e) {
            var t = e.itemsUsedBy,
              n = e.optionName,
              r = e.plugins,
              a = e.selectedItems,
              o = e.setSelectedUsedBy,
              i = e.toggleModal,
              c = e.updateOption,
              s = e.onRefresh,
              l = "unknown",
              u = a
                .filter(function (e) {
                  var t, n;
                  return (
                    (null == e || null === (t = e.info) || void 0 === t
                      ? void 0
                      : t.custom) ||
                    !(
                      null != e &&
                      null !== (n = e.info) &&
                      void 0 !== n &&
                      n.usedBy.toLowerCase()
                    )
                  );
                })
                .map(function (e) {
                  return e.name;
                });
            if (!u.length) return null;
            var f = (function () {
              var e = da(
                ua().mark(function e(a) {
                  var o, i, u, f;
                  return ua().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = fa(a.items)),
                            (i = t.filter(function (e) {
                              return !o.includes(e.item);
                            })),
                            (u = r.find(function (e) {
                              return e.slug === a.value;
                            })),
                            (f =
                              a.value !== l
                                ? a.items.map(function (e) {
                                    return {
                                      item: e,
                                      name: u.name,
                                      slug: u.slug.replace(/-pro$/, ""),
                                    };
                                  })
                                : []),
                            (e.next = 6),
                            c({
                              param: {
                                name: n,
                                value: [].concat(fa(i), fa(f)),
                              },
                              onSuccess: function () {
                                s();
                              },
                            })
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return React.createElement(
              y.M,
              {
                icon: "link",
                style: sa(
                  sa({}, va),
                  {},
                  { background: "#016699", padding: "0px 15px" }
                ),
                onClick: function () {
                  o({ items: u, value: l });
                  var e = ""
                    .concat(Xe.COMMON.USED_BY)
                    .concat(
                      u.length > 1
                        ? " ("
                            .concat(u.length, " ")
                            .concat(Xe.COMMON.SELECTED_ITEMS, ")")
                        : ""
                    );
                  i({ modal: "usedBy", enable: !0, onNext: f, title: e });
                },
              },
              Xe.BULK_TASK.USED_BY
            );
          },
          _a = function (e) {
            var t,
              n = e.item,
              r = e.itemName,
              a = e.itemsUsedBy,
              o = e.optionName,
              i = e.plugins,
              c = e.setSelectedUsedBy,
              s = e.toggleModal,
              l = e.updateOption,
              u = e.onRefresh,
              f = "unknown",
              p = null == n ? void 0 : n.info,
              m = null == p ? void 0 : p.usedBy,
              d = null == p ? void 0 : p.status,
              h = null == p ? void 0 : p.custom,
              y =
                null ===
                  (t = a.find(function (e) {
                    return e.item === r;
                  })) || void 0 === t
                  ? void 0
                  : t.name,
              v = y !== m && void 0 !== y,
              g = "never" === (null == n ? void 0 : n.clean_style),
              b = !1,
              E = null;
            if (!g) {
              var w,
                T,
                _ =
                  null !==
                    (w =
                      null ===
                        (T = a.find(function (e) {
                          return e.item === r;
                        })) || void 0 === T
                        ? void 0
                        : T.slug) && void 0 !== w
                    ? w
                    : f;
              b = _ === f && m && !h;
              var S = (function () {
                var e = da(
                  ua().mark(function e(t) {
                    var n, r, c, s;
                    return ua().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = fa(t.items)),
                              (r = a.filter(function (e) {
                                return !n.includes(e.item);
                              })),
                              (c = i.find(function (e) {
                                return e.slug === t.value;
                              })),
                              (s =
                                t.value !== f
                                  ? t.items.map(function (e) {
                                      return {
                                        item: e,
                                        name: c.name,
                                        slug: c.slug.replace(/-pro$/, ""),
                                      };
                                    })
                                  : []),
                              (e.next = 6),
                              l({
                                param: {
                                  name: o,
                                  value: [].concat(fa(r), fa(s)),
                                },
                                onSuccess: function () {
                                  u();
                                },
                              })
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
              E = function () {
                (b && !confirm(Xe.COMMON.NATIVE_PLUGIN_WARNING)) ||
                  (c({ items: [r], value: _ }),
                  s({
                    modal: "usedBy",
                    enable: !0,
                    onNext: S,
                    title: Xe.COMMON.USED_BY,
                  }));
              };
            }
            return React.createElement(
              ba,
              { onClick: E },
              React.createElement(
                "div",
                { style: { display: "flex", alignItems: "center" } },
                React.createElement(Ea, { item: n }),
                "ok" === d &&
                  !v &&
                  React.createElement(
                    "span",
                    { style: { color: g ? "#cac4c4" : "#3c434a" } },
                    m
                  ),
                "ok" === d &&
                  v &&
                  React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                      "span",
                      {
                        style: {
                          color: g ? "#cac4c4" : "#3c434a",
                          textDecoration: "line-through",
                        },
                      },
                      m
                    ),
                    React.createElement(
                      "span",
                      { style: { color: "var(--neko-orange)", marginLeft: 5 } },
                      y
                    )
                  ),
                "warn" === d &&
                  React.createElement(
                    "span",
                    {
                      style: {
                        color: "#ba4300",
                        textDecoration: "line-through",
                      },
                    },
                    m
                  ),
                "n/a" === d &&
                  React.createElement(
                    "a",
                    { style: { color: "var(--neko-orange)" } },
                    Xe.COMMON.UNKNOWN
                  ),
                (h || v) &&
                  React.createElement("span", {
                    class: "dashicons dashicons-tag",
                  })
              ),
              !!E &&
                React.createElement(
                  "div",
                  { className: "actions" },
                  "n/a" === d &&
                    React.createElement("span", null, Xe.COMMON.ASSIGN_PLUGIN),
                  "n/a" !== d &&
                    React.createElement(
                      "span",
                      null,
                      Xe.COMMON.RE_ASSIGN_PLUGIN
                    ),
                  React.createElement(Le.z, {
                    icon: "pencil",
                    style: { marginLeft: 3 },
                    height: "10",
                  })
                )
            );
          },
          Sa = function (e) {
            var t = e.name,
              n = e.value,
              r = e.onChange,
              a = e.onReset;
            return React.createElement(
              "label",
              { style: { display: "flex", alignItems: "center" } },
              React.createElement(
                "span",
                { style: { marginRight: "4px" } },
                Xe.COMMON.SEARCH,
                ":"
              ),
              React.createElement(Be.A, {
                name: t,
                value: n,
                onChange: r,
                onReset: a,
              })
            );
          },
          Oa = function (e, t, n) {
            return React.createElement(
              Ne.u,
              { name: e, scrolldown: !0, value: t, onChange: n },
              React.createElement(Ne.j, {
                value: 5,
                label: "5 ".concat(Xe.COMMON.ITEMS_PER_PAGE),
              }),
              React.createElement(Ne.j, {
                value: 10,
                label: "10 ".concat(Xe.COMMON.ITEMS_PER_PAGE),
              }),
              React.createElement(Ne.j, {
                value: 25,
                label: "25 ".concat(Xe.COMMON.ITEMS_PER_PAGE),
              }),
              React.createElement(Ne.j, {
                value: 50,
                label: "50 ".concat(Xe.COMMON.ITEMS_PER_PAGE),
              }),
              React.createElement(Ne.j, {
                value: 100,
                label: "100 ".concat(Xe.COMMON.ITEMS_PER_PAGE),
              }),
              React.createElement(Ne.j, {
                value: 200,
                label: "200 ".concat(Xe.COMMON.ITEMS_PER_PAGE),
              })
            );
          },
          xa = function (e) {
            var t = e.infoType,
              n = e.info;
            return React.createElement(
              oa.f,
              { text: n },
              React.createElement(Le.z, {
                icon: "info-outline",
                width: 16,
                height: 16,
                color: "warn" === t ? "var(--neko-orange)" : "black",
                style: { marginLeft: "2px" },
              })
            );
          };
        function La(e) {
          return (
            (La =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            La(e)
          );
        }
        function Ra(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = Ia(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: a,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            i = !0,
            c = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (i = e.done), e;
            },
            e: function (e) {
              (c = !0), (o = e);
            },
            f: function () {
              try {
                i || null == n.return || n.return();
              } finally {
                if (c) throw o;
              }
            },
          };
        }
        function Aa() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Aa =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == La(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(La(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function ka(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Ca(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                ka(o, r, a, i, c, "next", e);
              }
              function c(e) {
                ka(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function Na(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Ua(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Ia(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Pa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            Ia(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ia(e, t) {
          if (e) {
            if ("string" == typeof e) return Ua(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Ua(e, t)
                : void 0
            );
          }
        }
        function Ua(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Ba = wp.element,
          Ma = Ba.useState,
          ja = Ba.useMemo,
          Da = Ba.useCallback,
          Fa = {
            posts: Xe.CORE_SECTIONS.POSTS,
            postsMetadata: Xe.CORE_SECTIONS.POSTS_METADATA,
            users: Xe.CORE_SECTIONS.USERS,
            comments: Xe.CORE_SECTIONS.COMMENTS,
            transients: Xe.CORE_SECTIONS.TRANSIENTS,
            postTypes: Xe.CORE_SECTIONS.POST_TYPES,
          },
          Ga = function (e) {
            var t = e.bulkTasks,
              n = e.initialList,
              r = e.initialCounts,
              a = e.initialUsedBy,
              o = e.mutateList,
              i = e.onUpdateCounts,
              c = e.usedbyKey,
              s = e.section,
              l = na(),
              u = l.busyAction,
              f = l.bulkBatchSize,
              p = l.busyBulkTasks,
              m = l.busyCleanBulkTasks,
              d = l.plugins,
              h = l.delay,
              v = na(),
              g = v.setBusyAction,
              b = v.toggleModal,
              E = v.deleteEntries,
              w = v.updateOption,
              T = v.refreshEntryCount,
              _ = v.allRefreshEntryCount,
              S = v.setLoadEntryItem,
              O = v.pushBusyBulkTasks,
              x = v.popBusyBulkTasks,
              L = v.setEntries,
              R = v.setSelectedUsedBy,
              A = v.loadEntryCount,
              k = Pa(Ma(n || []), 2),
              C = k[0],
              N = k[1],
              P = Pa(Ma(r || []), 2),
              I = P[0],
              U = P[1],
              B = Pa(Ma(a || []), 2),
              M = B[0],
              j = B[1],
              D = Da(function (e) {
                N(e);
              }, []),
              F = Da(function (e) {
                U(e);
              }, []),
              G = Da(function (e) {
                j(e);
              }, []),
              z = Da(
                function () {
                  o && o();
                },
                [o]
              ),
              Y = Da(
                function (e) {
                  i && i(e);
                },
                [i]
              ),
              W = Da(
                function (e, t, n) {
                  var r = [].concat(
                    Na(
                      (null != t ? t : I).filter(function (t) {
                        return t.item !== e;
                      })
                    ),
                    [n]
                  );
                  return Y(r), r;
                },
                [I, Y]
              ),
              V = Da(
                function () {
                  return z();
                },
                [z]
              ),
              K = Da(
                function (e, t) {
                  var n = I.filter(function (t) {
                    return t.item !== e;
                  });
                  Y([].concat(Na(n), [{ item: e, count: t.data }]));
                },
                [I, Y]
              ),
              H = Da(
                function (e) {
                  Y(Na(e));
                },
                [Y]
              ),
              q = Da(
                (function () {
                  var e = Ca(
                    Aa().mark(function e(n) {
                      var r, a, o, i, c, s, l, p, m, d, y, v, b;
                      return Aa().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (o = n.item),
                                (i = n.currentCounts),
                                g([].concat(Na(u), [{ item: Nt(o) }])),
                                (s =
                                  null !==
                                    (r =
                                      null ===
                                        (a = (c = null != i ? i : I).find(
                                          function (e) {
                                            return e.item === o;
                                          }
                                        )) || void 0 === a
                                        ? void 0
                                        : a.count) && void 0 !== r
                                    ? r
                                    : 0),
                                (l = Math.ceil(s / f)),
                                (p = []),
                                (m = Aa().mark(function e(n) {
                                  var r;
                                  return Aa().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          (r = (function () {
                                            var e = Ca(
                                              Aa().mark(function e(r) {
                                                var a;
                                                return Aa().wrap(function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        return (
                                                          (e.next = 2), nt(h)
                                                        );
                                                      case 2:
                                                        return (
                                                          (e.next = 4),
                                                          E({
                                                            item: o,
                                                            signal: r,
                                                          })
                                                        );
                                                      case 4:
                                                        return (
                                                          (a = e.sent).data
                                                            .finished &&
                                                            n + 1 < l &&
                                                            t.setAlwaysSkip(),
                                                          e.abrupt("return", a)
                                                        );
                                                      case 7:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                              })
                                            );
                                            return function (t) {
                                              return e.apply(this, arguments);
                                            };
                                          })()),
                                            p.push(r);
                                        case 2:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })),
                                (d = 0);
                            case 8:
                              if (!(d < l)) {
                                e.next = 13;
                                break;
                              }
                              return e.delegateYield(m(d), "t0", 10);
                            case 10:
                              d++, (e.next = 8);
                              break;
                            case 13:
                              return O(), (e.next = 16), t.start(p);
                            case 16:
                              if (
                                (t.reset(),
                                x(),
                                !("posts_metadata_duplicated_post_meta" === o))
                              ) {
                                e.next = 25;
                                break;
                              }
                              return (
                                (e.next = 22),
                                A({ item: o, avoidUpdateState: !0 })
                              );
                            case 22:
                              (e.t1 = e.sent), (e.next = 26);
                              break;
                            case 25:
                              e.t1 = 0;
                            case 26:
                              return (
                                (y = e.t1),
                                (v = { item: o, count: y }),
                                (b = Na(c)),
                                (b = W
                                  ? W(o, i, v)
                                  : [].concat(
                                      Na(
                                        c.filter(function (e) {
                                          return e.item !== o;
                                        })
                                      ),
                                      [v]
                                    )),
                                g(Na(u)),
                                e.abrupt("return", b)
                              );
                            case 32:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                [I, u, f, W, h]
              ),
              J = Da(
                (function () {
                  var e = Ca(
                    Aa().mark(function e(t) {
                      var n;
                      return Aa().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                "posts_metadata_duplicated_post_meta_clean_style" !==
                                  (n = t.param).name ||
                                "auto" !== n.value
                              ) {
                                e.next = 4;
                                break;
                              }
                              return (
                                alert(
                                  Xe.HOOKS.POSTS_METADATA_DUPLICATED_WARNING
                                ),
                                e.abrupt("return")
                              );
                            case 4:
                              return (
                                (e.next = 6),
                                w({ param: n, onSuccess: V, busyItem: s })
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                [V, w, s]
              ),
              Q = Da(
                (function () {
                  var e = Ca(
                    Aa().mark(function e(t) {
                      var n;
                      return Aa().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.item),
                                (e.next = 3),
                                T({ item: n, onSuccess: K, busyItem: s })
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                [K, s]
              ),
              X = Da(
                Ca(
                  Aa().mark(function e() {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i,
                      c,
                      s,
                      l,
                      u,
                      f,
                      p = arguments;
                    return Aa().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = (t =
                                  p.length > 0 && void 0 !== p[0] ? p[0] : {})
                                  .exceptManual),
                                void 0 === n ? null : n,
                                (r = t.customList),
                                (a = void 0 === r ? [] : r),
                                C.length || a.length)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 4:
                              (o = Na(I)),
                                (i = a.length ? a : C),
                                (c = ["auto", "manual"]),
                                (s = i.filter(function (e) {
                                  return c.includes(e.clean_style);
                                })),
                                (l = Ra(s)),
                                (e.prev = 9),
                                l.s();
                            case 11:
                              if ((u = l.n()).done) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (f = u.value),
                                (e.next = 15),
                                _({ item: f.item, counts: o, onSuccess: H })
                              );
                            case 15:
                              o = e.sent;
                            case 16:
                              e.next = 11;
                              break;
                            case 18:
                              e.next = 23;
                              break;
                            case 20:
                              (e.prev = 20), (e.t0 = e.catch(9)), l.e(e.t0);
                            case 23:
                              return (e.prev = 23), l.f(), e.finish(23);
                            case 26:
                              return e.abrupt("return", !0);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[9, 20, 23, 26]]
                    );
                  })
                ),
                [C, I, H]
              ),
              Z = Da(
                Ca(
                  Aa().mark(function e() {
                    var t, n, r, a, o;
                    return Aa().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = Na(I)),
                                (n = C.filter(function (e) {
                                  var t;
                                  return (
                                    (null == I ||
                                    null ===
                                      (t = I.find(function (t) {
                                        return t.item === e.item;
                                      })) ||
                                    void 0 === t
                                      ? void 0
                                      : t.count) > 0
                                  );
                                })),
                                (r = Ra(n)),
                                (e.prev = 3),
                                r.s();
                            case 5:
                              if ((a = r.n()).done) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (o = a.value),
                                (e.next = 9),
                                q({ item: o.item, currentCounts: t })
                              );
                            case 9:
                              t = e.sent;
                            case 10:
                              e.next = 5;
                              break;
                            case 12:
                              e.next = 17;
                              break;
                            case 14:
                              (e.prev = 14), (e.t0 = e.catch(3)), r.e(e.t0);
                            case 17:
                              return (e.prev = 17), r.f(), e.finish(17);
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 14, 17, 20]]
                    );
                  })
                ),
                [C, I, q]
              ),
              $ = ja(
                function () {
                  return (
                    p ||
                    !C.some(function (e) {
                      var t;
                      return (
                        (null == I ||
                        null ===
                          (t = I.find(function (t) {
                            return t.item === e.item;
                          })) ||
                        void 0 === t
                          ? void 0
                          : t.count) > 0
                      );
                    })
                  );
                },
                [C, I, p]
              ),
              ee = ja(
                function () {
                  return ot(C).map(function (e, n) {
                    var r,
                      a,
                      o,
                      i = n,
                      l = "never" === e.clean_style,
                      f =
                        null !==
                          (r =
                            null == I ||
                            null ===
                              (a = I.find(function (t) {
                                return t.item === e.item;
                              })) ||
                            void 0 === a
                              ? void 0
                              : a.count) && void 0 !== r
                          ? r
                          : "-",
                      h =
                        "auto" !== e.clean_style
                          ? function () {
                              return b({
                                modal: "deleteAll",
                                enable: !0,
                                onNext: function () {
                                  return q({ item: e.item });
                                },
                              });
                            }
                          : function () {
                              return q({ item: e.item });
                            },
                      v = u.some(function (t) {
                        return t.item === Ct(e.item) || t.item === Nt(e.item);
                      }),
                      g =
                        f > 0 &&
                        !u.some(function (t) {
                          return t.item === Nt(e.item);
                        }),
                      E = u.some(function (t) {
                        return t.item === "loading_".concat(e.item);
                      }),
                      T = e.item.replace(/^(list_post_types_)/, ""),
                      _ = u.some(function (e) {
                        return e.item === "".concat(c).concat(T);
                      }),
                      O = React.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        React.createElement(wa, { item: e, itemText: e.name }),
                        !!e.info &&
                          !!e.infoType &&
                          React.createElement(xa, {
                            info: e.info,
                            infoType: e.infoType,
                          })
                      ),
                      x = parseFloat(t.value) / parseFloat(t.max),
                      A = isNaN(x)
                        ? ""
                        : "".concat(parseInt(Math.round(100 * x)), "%"),
                      k = v || _,
                      C = (function () {
                        var t = Ca(
                          Aa().mark(function t() {
                            return Aa().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      L([]),
                                      (t.next = 3),
                                      S({
                                        loadEntryItem: e.item,
                                        count: f,
                                        page: 1,
                                      })
                                    );
                                  case 3:
                                    b({
                                      modal: "loadEntry",
                                      enable: !0,
                                      title: ""
                                        .concat(Fa[s], ": ")
                                        .concat(e.name),
                                    });
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })(),
                      N = l
                        ? null
                        : React.createElement(
                            "div",
                            {
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              },
                            },
                            React.createElement(
                              "span",
                              null,
                              isNaN(x) ? f : "-"
                            ),
                            React.createElement(
                              "div",
                              {
                                style: {
                                  display: "inline-flex",
                                  alignItems: "center",
                                  marginLeft: 10,
                                },
                              },
                              g &&
                                React.createElement(Le.z, {
                                  onClick: C,
                                  icon: "search",
                                  color: "#007cba",
                                  isBusy: E,
                                  spinning: E,
                                  style: {
                                    width: 20,
                                    marginRight: -2,
                                    cursor: "pointer",
                                  },
                                }),
                              React.createElement(Le.z, {
                                onClick: function () {
                                  return Q({ item: e.item });
                                },
                                icon: "replay",
                                color: "#007cba",
                                spinning: v,
                                style: { width: 20, cursor: "pointer" },
                              })
                            )
                          ),
                      P = React.createElement(
                        "div",
                        { style: { width: "90px" } },
                        React.createElement(
                          Ne.u,
                          {
                            name: ((o = e.item), "".concat(o, "_clean_style")),
                            scrolldown: !0,
                            onChange: function (e, t) {
                              return J({ param: { name: t, value: e } });
                            },
                            value: e.clean_style,
                          },
                          Wt.map(function (e) {
                            return React.createElement(Ne.j, {
                              id: e.value,
                              value: e.value,
                              label: e.label,
                            });
                          })
                        )
                      ),
                      U =
                        !l &&
                        React.createElement(
                          "div",
                          { style: { display: "flex" } },
                          React.createElement(
                            y.M,
                            {
                              className: "danger",
                              onClick: h,
                              icon: k ? "" : "trash",
                              isBusy: k,
                              busyText: A,
                              hideBusyIcon: !1,
                              disabled: !g || v || p || m || _,
                            },
                            Xe.COMMON.CLEAN
                          )
                        );
                    return e.info
                      ? {
                          id: i,
                          details: O,
                          usedBy: React.createElement(_a, {
                            item: e,
                            itemName: T,
                            itemsUsedBy: M,
                            optionName: c,
                            plugins: d,
                            setSelectedUsedBy: R,
                            toggleModal: b,
                            updateOption: w,
                            busy: _,
                            onRefresh: z,
                          }),
                          count: N,
                          clean: P,
                          action: U,
                        }
                      : { id: i, details: O, count: N, clean: P, action: U };
                  });
                },
                [C, I, M, c, u, p, m, t, q, J, Q, d, w, s]
              );
            return {
              data: ee,
              onAllRefreshClick: X,
              onAllTrashClick: Z,
              disabledAllTrash: $,
              updateList: D,
              updateCounts: F,
              updateUsedBy: G,
              memoizedMutateList: z,
            };
          },
          za = function (e) {
            var t = e.pressShift,
              n = e.list,
              r = e.selectedList,
              a = e.setSelectedList,
              o = e.key,
              i = ja(
                function () {
                  if (!t || !r.length) return null;
                  var e = r[r.length - 1];
                  return n.findIndex(function (t) {
                    return t[o] === e.name;
                  });
                },
                [t]
              );
            return {
              onCheckboxChange: Da(
                function (e, t) {
                  if (null !== i && e) {
                    var c = n.findIndex(function (e) {
                        return e[o] === t[o];
                      }),
                      s = (i < c ? i : c) + 1,
                      l = i < c ? c : i,
                      u = n
                        .slice(s, l)
                        .map(function (e) {
                          return { name: e[o], info: e.info };
                        })
                        .filter(function (e) {
                          return !r.some(function (t) {
                            return t.name === e.name;
                          });
                        });
                    a([].concat(Na(r), Na(u), [{ name: t[o], info: t.info }]));
                  } else
                    a(
                      e
                        ? [].concat(Na(r), [
                            { name: t[o], info: t.info, args: t.args },
                          ])
                        : Na(
                            r.filter(function (e) {
                              return e.name !== t[o];
                            })
                          )
                    );
                },
                [r, i, n]
              ),
            };
          };
        function Ya(e) {
          return (
            (Ya =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Ya(e)
          );
        }
        function Wa(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Qa(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Ja(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Va() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Va =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == Ya(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(Ya(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Ka(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Ha(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Ka(o, r, a, i, c, "next", e);
              }
              function c(e) {
                Ka(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function qa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            Ja(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ja(e, t) {
          if (e) {
            if ("string" == typeof e) return Qa(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Qa(e, t)
                : void 0
            );
          }
        }
        function Qa(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Xa = wp.element,
          Za = Xa.useState,
          $a = Xa.useMemo,
          eo = Xa.useCallback,
          to = Xa.useEffect,
          no = { value: "clean", label: "Clean" },
          ro = { value: "optimize", label: "Optimize" };
        const ao = function () {
          var e = na(),
            t = e.busy,
            n = e.filteredTables,
            r = e.tablesTotal,
            a = e.busyAction,
            o = e.tablesFilters,
            i = e.tablesUsedBy,
            c = e.plugins,
            l = e.mode,
            u = na(),
            p = u.toggleModal,
            m = u.deleteTables,
            h = u.optimizeTables,
            g = u.repairTables,
            b = u.mutateDbSizes,
            E = u.updateOption,
            w = u.setSelectedUsedBy,
            T = u.updateTablesFilters,
            _ = qa(Za([]), 2),
            S = _[0],
            O = _[1],
            x = qa(Za(!1), 2),
            L = x[0],
            R = x[1],
            A = qa(Za(no.value), 2),
            k = A[0],
            C = A[1],
            N = a.some(function (e) {
              return "tables" === e.item;
            }),
            P = a.some(function (e) {
              var t;
              return null === (t = e.item) || void 0 === t
                ? void 0
                : t.includes("delete_");
            }),
            I = a.some(function (e) {
              var t;
              return null === (t = e.item) || void 0 === t
                ? void 0
                : t.includes("optimize_");
            }),
            U = a.some(function (e) {
              var t;
              return null === (t = e.item) || void 0 === t
                ? void 0
                : t.includes("repair_");
            }),
            B = P || I || U,
            M = S.some(function (e) {
              return "ok" === e.info.status;
            }),
            j = S.map(function (e) {
              return e.name;
            }),
            D = (0, Pe.v_)().pressShift,
            F = za({
              pressShift: D,
              list: n,
              selectedList: S,
              setSelectedList: O,
              key: "tableName",
            }).onCheckboxChange,
            G = $a(
              function () {
                return n.map(function (e) {
                  var t,
                    n,
                    r,
                    o = e.table,
                    l = e.tableName,
                    u = S.some(function (e) {
                      return e.name === l;
                    }),
                    f = a.some(function (e) {
                      return e.item === "delete_".concat(l);
                    }),
                    d = a.some(function (e) {
                      return e.item === "optimize_".concat(l);
                    }),
                    v = a.some(function (e) {
                      return e.item === "repair_".concat(l);
                    }),
                    b = d || f || v,
                    T = a.some(function (e) {
                      return e.item === "loading_".concat(l);
                    }),
                    _ =
                      "ok" ===
                      (null === (t = e.info) || void 0 === t
                        ? void 0
                        : t.status),
                    O = (function () {
                      var e = Ha(
                        Va().mark(function e() {
                          return Va().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    h({
                                      tables: [
                                        { tableName: l, needsSuffix: l !== o },
                                      ],
                                    })
                                  );
                                case 2:
                                  return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    x = (function () {
                      var e = Ha(
                        Va().mark(function e() {
                          return Va().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    g({
                                      tables: [
                                        { tableName: l, needsSuffix: l !== o },
                                      ],
                                    })
                                  );
                                case 2:
                                  return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    L =
                      null !==
                        (n =
                          null == e || null === (r = e.percent) || void 0 === r
                            ? void 0
                            : r.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                useGrouping: !1,
                              })) && void 0 !== n
                        ? n
                        : "0",
                    R = (function () {
                      var e = Ha(
                        Va().mark(function e() {
                          return Va().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  p({
                                    modal: "table",
                                    enable: !0,
                                    data: { tableName: o },
                                  });
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })();
                  return {
                    id: e.tableName,
                    isBusy: u && b,
                    deletion: React.createElement(y.M, {
                      title: Xe.TABLES.INFO_TABLE_DROP,
                      className: _ ? "primary" : "danger",
                      busyIconSize: "100%",
                      onClick: function () {
                        return p({
                          modal: "deleteAll",
                          enable: !0,
                          onNext:
                            ((e = Ha(
                              Va().mark(function e() {
                                return Va().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          m({
                                            tables: [
                                              {
                                                tableName: l,
                                                needsSuffix: l !== o,
                                              },
                                            ],
                                          })
                                        );
                                      case 2:
                                        return e.abrupt("return", e.sent);
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )),
                            function () {
                              return e.apply(this, arguments);
                            }),
                        });
                        var e;
                      },
                      icon: "close",
                      style: { minWidth: 40, width: 40 },
                      isBusy: f,
                      disabled: _ || d || v,
                    }),
                    table: React.createElement(wa, { item: e, itemText: o }),
                    usedBy: React.createElement(_a, {
                      item: e,
                      itemName: l,
                      itemsUsedBy: i,
                      optionName: "table_usedby",
                      plugins: c,
                      setSelectedUsedBy: w,
                      toggleModal: p,
                      updateOption: E,
                      onRefresh: function () {
                        q();
                      },
                    }),
                    size: React.createElement(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          justifyItem: "center",
                          alignItems: "center",
                        },
                      },
                      React.createElement(s.s, null, it(e.size)),
                      React.createElement(Le.z, {
                        onClick: R,
                        icon: "search",
                        color: "#007cba",
                        style: { width: 20, marginLeft: 5, cursor: "pointer" },
                        isBusy: T,
                      })
                    ),
                    percent: "".concat(L, " %"),
                    actions: React.createElement(
                      "div",
                      { style: { display: "flex", alignItems: "center" } },
                      React.createElement(
                        y.M,
                        {
                          title: Xe.TABLES.INFO_TABLE_OPTIMIZE,
                          className: "primary",
                          onClick: O,
                          icon: "rocket-launch",
                          isBusy: d,
                          disabled: b,
                        },
                        Xe.TABLES.OPTIMIZE
                      ),
                      React.createElement(
                        y.M,
                        {
                          title: Xe.TABLES.INFO_TABLE_REPAIR,
                          className: "primary",
                          onClick: x,
                          icon: "tools",
                          isBusy: v,
                          disabled: b,
                        },
                        Xe.TABLES.REPAIR
                      )
                    ),
                  };
                });
              },
              [n, S, a, i, c, l, k]
            ),
            z = eo(
              function (e) {
                return e.map(function (e) {
                  var t = e.name,
                    r = n.find(function (e) {
                      return e.tableName === t;
                    });
                  if (r) return { tableName: t, needsSuffix: r.table !== t };
                  console.error(
                    "Table ".concat(t, " not found in filteredTables")
                  );
                });
              },
              [n]
            ),
            Y = eo(
              function () {
                var e;
                p({
                  modal: "deleteAll",
                  enable: !0,
                  onNext:
                    ((e = Ha(
                      Va().mark(function e() {
                        var t, n;
                        return Va().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), m({ tables: z(S) });
                              case 2:
                                (t = e.sent),
                                  (n = S.filter(function (e) {
                                    return t.includes(e.name);
                                  })),
                                  O(n);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                });
              },
              [S, z]
            ),
            W = eo(
              Ha(
                Va().mark(function e() {
                  var t, n;
                  return Va().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), h({ tables: z(S) });
                        case 2:
                          (t = e.sent),
                            (n = S.filter(function (e) {
                              return t.includes(e.name);
                            })),
                            O(n);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [S, z]
            ),
            V = eo(
              Ha(
                Va().mark(function e() {
                  var t, n;
                  return Va().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), g({ tables: z(S) });
                        case 2:
                          (t = e.sent),
                            (n = S.filter(function (e) {
                              return t.includes(e.name);
                            })),
                            O(n);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [S, z]
            ),
            K = $a(
              function () {
                var e = l === Xt.on.value ? Wa(Dt) : Wa(Ft);
                if (k === no.value) {
                  var t = e.findIndex(function (e) {
                    return "actions" === e.accessor;
                  });
                  e.splice(t, 1);
                } else if (k === ro.value) {
                  var n = e.findIndex(function (e) {
                    return "deletion" === e.accessor;
                  });
                  e.splice(n, 1);
                }
                var r = e.findIndex(function (e) {
                    return "actions" === e.accessor;
                  }),
                  a = -1 !== r,
                  o = e.findIndex(function (e) {
                    return "deletion" === e.accessor;
                  }),
                  i = -1 !== o;
                return (
                  a && (e[r].title = ""),
                  i && (e[o].title = ""),
                  S.length
                    ? (a &&
                        (e[r].title = React.createElement(
                          React.Fragment,
                          null,
                          React.createElement(
                            y.M,
                            {
                              icon: "rocket-launch",
                              title: Xe.TABLES.INFO_TABLE_BULK_OPTIMIZE,
                              onClick: W,
                              isBusy: I,
                              disabled: B,
                            },
                            Xe.TABLES.OPTIMIZE
                          ),
                          React.createElement(
                            y.M,
                            {
                              icon: "tools",
                              title: Xe.TABLES.INFO_TABLE_BULK_REPAIR,
                              onClick: V,
                              isBusy: U,
                              disabled: B,
                            },
                            Xe.TABLES.REPAIR
                          )
                        )),
                      i &&
                        (e[o].title = React.createElement(y.M, {
                          icon: "close",
                          title: Xe.TABLES.INFO_TABLE_BULK_DROP,
                          style: { minWidth: 40, width: 40 },
                          className: M ? "primary" : "danger",
                          busyIconSize: "100%",
                          onClick: Y,
                          isBusy: P,
                          disabled: M || B,
                        })),
                      e)
                    : e
                );
              },
              [l, Dt, Ft, n, S, Y, W, P, M, B, I, k]
            ),
            H = eo(
              (function () {
                var e = Ha(
                  Va().mark(function e(t, n) {
                    return Va().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            E({ param: { name: n, value: t } });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [E]
            ),
            q = eo(
              Ha(
                Va().mark(function e() {
                  var t,
                    n = arguments;
                  return Va().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.length > 0 && void 0 !== n[0] && n[0]),
                            R(!0),
                            (e.next = 4),
                            b()
                          );
                        case 4:
                          t && O([]), R(!1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [b]
            ),
            J = $a(
              function () {
                return Oa(
                  "db_historical_sizes_limit",
                  o.limit,
                  function (e, t) {
                    O([]), T({ limit: e, page: 1 }), H(e, t);
                  }
                );
              },
              [o.limit, T, H]
            ),
            Q = $a(
              function () {
                var e = o.page,
                  t = o.limit,
                  n = o.filterBy,
                  a = o.hideUsedByWordPress,
                  i = r[n][a];
                return React.createElement(Ce.Q, {
                  currentPage: e,
                  limit: t,
                  total: i,
                  onClick: function (e) {
                    O([]), T({ page: e });
                  },
                });
              },
              [o.page, o.limit, r, T]
            ),
            X = $a(
              function () {
                return { by: o.sort, accessor: o.accessor };
              },
              [o.accessor, o.sort]
            ),
            Z = eo(
              function (e, t) {
                1 !== t.length
                  ? O(
                      e
                        ? n.map(function (e) {
                            return { name: e.tableName, info: e.info };
                          })
                        : []
                    )
                  : F(
                      e,
                      n.find(function (e) {
                        return e.tableName === t[0];
                      })
                    );
              },
              [F, n, S]
            );
          return (
            to(
              function () {
                O([]);
              },
              [X]
            ),
            React.createElement(
              d.N,
              null,
              React.createElement(
                d.Y,
                { minimal: !0 },
                React.createElement(
                  v.z,
                  {
                    busy: t || N || L,
                    title: Xe.SETTINGS.TABLES,
                    className: "primary",
                    action: React.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent:
                            l === Xt.on.value ? "space-between" : "flex-end",
                          width: "100%",
                        },
                      },
                      l === Xt.on.value &&
                        React.createElement(xe.S, {
                          small: !0,
                          onLabel: no.label,
                          offLabel: ro.label,
                          onValue: no.value,
                          offValue: ro.value,
                          onBackgroundColor: "var(--neko-purple)",
                          offBackgroundColor: "var(--neko-green)",
                          width: "105px",
                          height: "30px",
                          checked: k === no.value,
                          onChange: function (e) {
                            return C(e);
                          },
                        }),
                      React.createElement(Ta, {
                        itemsUsedBy: i,
                        selectedItems: S,
                        optionName: "table_usedby",
                        plugins: c,
                        setSelectedUsedBy: w,
                        toggleModal: p,
                        updateOption: E,
                        onRefresh: function () {
                          return q(!0);
                        },
                      })
                    ),
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      },
                    },
                    React.createElement(
                      aa.o,
                      {
                        name: "dbclnr-tables-filters",
                        value: o.filterBy,
                        onChange: function (e) {
                          O([]), T({ filterBy: e, page: 1 });
                        },
                      },
                      qt.map(function (e) {
                        return React.createElement(aa.K, {
                          title: e.title,
                          value: e.value,
                          count: r[e.value][o.hideUsedByWordPress],
                          variant: "".concat(
                            "warn" === e.filterValue &&
                              r[e.value][o.hideUsedByWordPress] > 0
                              ? "danger"
                              : "primary"
                          ),
                        });
                      })
                    ),
                    React.createElement(
                      "div",
                      { style: { display: "flex" } },
                      Q,
                      React.createElement(Le.z, {
                        icon: "replay",
                        color: "var(--neko-blue)",
                        onClick: q,
                        spinning: L,
                      })
                    )
                  ),
                  React.createElement(ke.o, {
                    variant: "raw",
                    alternateRowColor: !0,
                    data: G,
                    columns: K,
                    selectedItems: j,
                    sort: X,
                    onSelect: function (e) {
                      return Z(!0, e);
                    },
                    onUnselect: function (e) {
                      return Z(!1, e);
                    },
                    onSortChange: function (e, t) {
                      return T({ accessor: e, sort: t });
                    },
                    filters: [{ accessor: "size", value: o.size }],
                    onFilterChange: function (e, t) {
                      return T({ size: t });
                    },
                  }),
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 10,
                      },
                    },
                    J,
                    Q
                  ),
                  React.createElement(
                    "div",
                    { style: ga },
                    React.createElement(Sa, {
                      name: "tables_search",
                      value: o.search,
                      onChange: function (e) {
                        return T({ search: e, page: 1 });
                      },
                      onReset: function () {
                        return T({ search: "" });
                      },
                    }),
                    React.createElement("div", { style: { flex: "auto" } }),
                    React.createElement(f.R, {
                      name: "tables_hide_wordpress",
                      label: It,
                      checked: o.hideUsedByWordPress,
                      onChange: function (e) {
                        return T({ hideUsedByWordPress: e, page: 1 });
                      },
                    })
                  )
                )
              )
            )
          );
        };
        function oo(e) {
          return (
            (oo =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            oo(e)
          );
        }
        function io() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ io =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == oo(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(oo(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function co(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function so(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? co(Object(n), !0).forEach(function (t) {
                  lo(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : co(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function lo(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== oo(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== oo(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === oo(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function uo(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function fo(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                uo(o, r, a, i, c, "next", e);
              }
              function c(e) {
                uo(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function po(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return mo(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return mo(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function mo(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ho = wp.element,
          yo = ho.useState,
          vo = ho.useEffect,
          go = "posts",
          bo = "postsMetadata",
          Eo = "users",
          wo = "comments",
          To = "transients";
        const _o = function () {
          var e = na(),
            t = e.busy,
            n = e.busyAction,
            r = e.posts,
            a = e.postsCount,
            o = e.postsMetadata,
            i = e.postsMetadataCount,
            c = e.users,
            s = e.usersCount,
            l = e.mode,
            u = e.comments,
            f = e.commentsCount,
            p = e.transients,
            m = e.transientsCount,
            h = e.busyCleanBulkTasks,
            g = na(),
            b = g.mutatePosts,
            E = g.setPostsCount,
            w = g.mutatePostsMetadata,
            T = g.setPostsMetadataCount,
            _ = g.setBusyAction,
            S = g.mutateUsers,
            O = g.setUsersCount,
            x = g.mutateComments,
            L = g.setCommentsCount,
            R = g.setTransientsCount,
            A = g.mutateTransients,
            k = g.resetBusyBulkTasks,
            C = (0, Pe.XS)(),
            N = po(
              yo({
                posts: !1,
                postsMetadata: !1,
                users: !1,
                comments: !1,
                transients: !1,
              }),
              2
            ),
            P = N[0],
            I = N[1],
            U = l === Xt.on.value ? Ut : Bt,
            B = function (e) {
              return n.some(function (t) {
                return t.item === e;
              });
            };
          vo(
            function () {
              return function () {
                h || (C.stop(), k(), _([]));
              };
            },
            [h]
          );
          var M = Ga({
              bulkTasks: C,
              initialList: r,
              initialCounts: a,
              mutateList: b,
              onUpdateCounts: E,
              section: go,
            }),
            j = M.data,
            D = M.onAllRefreshClick,
            F = M.onAllTrashClick,
            G = M.disabledAllTrash,
            z = M.updateList,
            Y = M.updateCounts;
          vo(
            function () {
              z(r);
            },
            [r, z]
          ),
            vo(
              function () {
                Y(a);
              },
              [a, Y]
            );
          var W = (function () {
              var e = fo(
                io().mark(function e() {
                  return io().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I(so(so({}, P), {}, { posts: !0 })),
                            (e.next = 3),
                            D()
                          );
                        case 3:
                          I(so(so({}, P), {}, { posts: !1 }));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            V = Ga({
              bulkTasks: C,
              initialList: o,
              initialCounts: i,
              mutateList: w,
              onUpdateCounts: T,
              section: bo,
            }),
            K = V.data,
            H = V.onAllRefreshClick,
            q = V.onAllTrashClick,
            J = V.disabledAllTrash,
            Q = V.updateList,
            X = V.updateCounts;
          vo(
            function () {
              Q(o);
            },
            [o, Q]
          ),
            vo(
              function () {
                X(i);
              },
              [i, X]
            );
          var Z = (function () {
              var e = fo(
                io().mark(function e() {
                  return io().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I(so(so({}, P), {}, { postsMetadata: !0 })),
                            (e.next = 3),
                            H()
                          );
                        case 3:
                          I(so(so({}, P), {}, { postsMetadata: !1 }));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            $ = Ga({
              bulkTasks: C,
              initialList: c,
              initialCounts: s,
              mutateList: S,
              onUpdateCounts: O,
              section: Eo,
            }),
            ee = $.data,
            te = $.onAllRefreshClick,
            ne = $.onAllTrashClick,
            re = $.disabledAllTrash,
            ae = $.updateList,
            oe = $.updateCounts;
          vo(
            function () {
              ae(c);
            },
            [c, ae]
          ),
            vo(
              function () {
                oe(s);
              },
              [s, oe]
            );
          var ie = (function () {
              var e = fo(
                io().mark(function e() {
                  return io().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I(so(so({}, P), {}, { users: !0 })),
                            (e.next = 3),
                            te()
                          );
                        case 3:
                          I(so(so({}, P), {}, { users: !1 }));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ce = Ga({
              bulkTasks: C,
              initialList: u,
              initialCounts: f,
              mutateList: x,
              onUpdateCounts: L,
              section: wo,
            }),
            se = ce.data,
            le = ce.onAllRefreshClick,
            ue = ce.onAllTrashClick,
            fe = ce.disabledAllTrash,
            pe = ce.updateList,
            me = ce.updateCounts;
          vo(
            function () {
              pe(u);
            },
            [u, pe]
          ),
            vo(
              function () {
                me(f);
              },
              [f, me]
            );
          var de = (function () {
              var e = fo(
                io().mark(function e() {
                  return io().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I(so(so({}, P), {}, { comments: !0 })),
                            (e.next = 3),
                            le()
                          );
                        case 3:
                          I(so(so({}, P), {}, { comments: !1 }));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            he = Ga({
              bulkTasks: C,
              initialList: p,
              initialCounts: m,
              mutateList: A,
              onUpdateCounts: R,
              section: To,
            }),
            ye = he.data,
            ve = he.onAllRefreshClick,
            ge = he.onAllTrashClick,
            be = he.disabledAllTrash,
            Ee = he.updateList,
            we = he.updateCounts;
          vo(
            function () {
              Ee(p);
            },
            [p, Ee]
          ),
            vo(
              function () {
                we(m);
              },
              [m, we]
            );
          var Te = (function () {
            var e = fo(
              io().mark(function e() {
                return io().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          I(so(so({}, P), {}, { transients: !0 })),
                          (e.next = 3),
                          ve()
                        );
                      case 3:
                        I(so(so({}, P), {}, { transients: !1 }));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return React.createElement(
            d.N,
            null,
            React.createElement(
              d.Y,
              { minimal: !0 },
              React.createElement(
                v.z,
                {
                  busy: t || P.posts || B(go),
                  title: Xe.CORE_SECTIONS.POSTS,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    React.createElement(y.M, {
                      icon: "replay",
                      title: Xe.BULK_TASK.REFRESH_COUNTS,
                      style: va,
                      onClick: W,
                      spinning: P.posts,
                      isBusy: P.posts,
                    }),
                    React.createElement(y.M, {
                      icon: "trash",
                      title: Xe.BULK_TASK.DELETE,
                      style: va,
                      onClick: function () {
                        return F();
                      },
                      disabled: G,
                    })
                  ),
                },
                React.createElement(ke.o, {
                  variant: "raw",
                  data: j,
                  columns: U,
                  selectedItems: [],
                })
              ),
              React.createElement(
                v.z,
                {
                  busy: t || P.postsMetadata || B(bo),
                  title: Xe.CORE_SECTIONS.POSTS_METADATA,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    React.createElement(y.M, {
                      icon: "replay",
                      title: Xe.BULK_TASK.REFRESH_COUNTS,
                      style: va,
                      onClick: Z,
                      spinning: P.postsMetadata,
                      isBusy: P.postsMetadata,
                    }),
                    React.createElement(y.M, {
                      icon: "trash",
                      title: Xe.BULK_TASK.DELETE,
                      style: va,
                      onClick: function () {
                        return q();
                      },
                      disabled: J,
                    })
                  ),
                },
                React.createElement(ke.o, {
                  variant: "raw",
                  data: K,
                  columns: U,
                  selectedItems: [],
                })
              )
            ),
            React.createElement(
              d.Y,
              { minimal: !0 },
              React.createElement(
                v.z,
                {
                  busy: t || P.users || B(Eo),
                  title: Xe.CORE_SECTIONS.USERS,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    React.createElement(y.M, {
                      icon: "replay",
                      title: Xe.BULK_TASK.REFRESH_COUNTS,
                      style: va,
                      onClick: ie,
                      spinning: P.users,
                      isBusy: P.users,
                    }),
                    React.createElement(y.M, {
                      icon: "trash",
                      title: Xe.BULK_TASK.DELETE,
                      style: va,
                      onClick: function () {
                        return ne();
                      },
                      disabled: re,
                    })
                  ),
                },
                React.createElement(ke.o, {
                  variant: "raw",
                  data: ee,
                  columns: U,
                  selectedItems: [],
                })
              ),
              React.createElement(
                v.z,
                {
                  busy: t || P.comments || B(wo),
                  title: Xe.CORE_SECTIONS.COMMENTS,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    React.createElement(y.M, {
                      icon: "replay",
                      title: Xe.BULK_TASK.REFRESH_COUNTS,
                      style: va,
                      onClick: de,
                      spinning: P.comments,
                      isBusy: P.comments,
                    }),
                    React.createElement(y.M, {
                      icon: "trash",
                      title: Xe.BULK_TASK.DELETE,
                      style: va,
                      onClick: function () {
                        return ue();
                      },
                      disabled: fe,
                    })
                  ),
                },
                React.createElement(ke.o, {
                  variant: "raw",
                  data: se,
                  columns: U,
                  selectedItems: [],
                })
              ),
              React.createElement(
                v.z,
                {
                  busy: t || P.transients || B(To),
                  title: Xe.CORE_SECTIONS.TRANSIENTS,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    React.createElement(y.M, {
                      icon: "replay",
                      title: Xe.BULK_TASK.REFRESH_COUNTS,
                      style: va,
                      onClick: Te,
                      spinning: P.transients,
                      isBusy: P.transients,
                    }),
                    React.createElement(y.M, {
                      icon: "trash",
                      title: Xe.BULK_TASK.DELETE,
                      style: va,
                      onClick: function () {
                        return ge();
                      },
                      disabled: be,
                    })
                  ),
                },
                React.createElement(ke.o, {
                  variant: "raw",
                  data: ye,
                  columns: U,
                  selectedItems: [],
                })
              )
            ),
            C.TasksErrorModal
          );
        };
        function So(e) {
          return (
            (So =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            So(e)
          );
        }
        function Oo() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Oo =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == So(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(So(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function xo(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Lo(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                xo(o, r, a, i, c, "next", e);
              }
              function c(e) {
                xo(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function Ro(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Ao(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ao(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ao(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ko = wp.element,
          Co = ko.useState,
          No = ko.useMemo,
          Po = ko.useCallback,
          Io = ko.useEffect,
          Uo = "postTypes";
        const Bo = function () {
          var e = na(),
            t = e.busy,
            n = e.busyAction,
            r = e.listPostTypesTotal,
            a = e.filteredListPostTypes,
            o = e.listPostTypesCount,
            i = e.postTypesUsedBy,
            c = e.clickedTab,
            s = e.busyCleanBulkTasks,
            l = e.initialized,
            u = e.listPostTypesFilters,
            p = na(),
            m = p.mutateListPostTypes,
            h = p.setListPostTypesCount,
            g = p.resetBusyBulkTasks,
            b = p.setBusyAction,
            E = p.setInitialized,
            w = p.updateOption,
            T = p.updateListPostTypesFilters,
            _ = c.PostTypes,
            S = (0, Pe.XS)(),
            O = Ro(Co(!1), 2),
            x = O[0],
            L = O[1],
            R = Ro(Co(!1), 2),
            A = R[0],
            k = R[1],
            C = n.some(function (e) {
              return e.item === Uo;
            });
          Io(
            function () {
              return function () {
                s || (S.stop(), g(), b([]));
              };
            },
            [s]
          );
          var N = Po(
              Lo(
                Oo().mark(function e() {
                  return Oo().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return k(!0), (e.next = 3), m();
                        case 3:
                          k(!1);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [m]
            ),
            P = Ga({
              bulkTasks: S,
              initialList: a,
              initialCounts: o,
              initialUsedBy: i,
              mutateList: N,
              onUpdateCounts: h,
              usedbyKey: "post_type_usedby",
              section: Uo,
            }),
            I = P.data,
            U = P.onAllRefreshClick,
            B = P.onAllTrashClick,
            M = P.disabledAllTrash,
            j = P.updateList,
            D = P.updateCounts,
            F = P.updateUsedBy;
          Io(
            function () {
              j(a);
            },
            [a, j]
          ),
            Io(
              function () {
                D(o);
              },
              [o, D]
            ),
            Io(
              function () {
                F(i);
              },
              [i, F]
            );
          var G = (function () {
              var e = Lo(
                Oo().mark(function e() {
                  return Oo().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return k(!0), (e.next = 3), m();
                        case 3:
                          return (e.next = 5), U();
                        case 5:
                          k(!1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            z = Po(
              (function () {
                var e = Lo(
                  Oo().mark(function e(t) {
                    var n, r;
                    return Oo().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.list),
                              (r = void 0 === n ? [] : n),
                              L(!0),
                              (e.next = 4),
                              U({ exceptManual: !0, customList: r })
                            );
                          case 4:
                            e.sent && E("PostTypes", !0), L(!1);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [U]
            ),
            Y = (0, Ze.useRef)(!1);
          Io(
            function () {
              x ||
                l.PostTypes ||
                (1 === _ &&
                  !Y.current &&
                  a.length &&
                  ((Y.current = !0), z({ list: a })));
            },
            [_, z, x, l.PostTypes, a]
          );
          var W = Po(
              (function () {
                var e = Lo(
                  Oo().mark(function e(t, n) {
                    return Oo().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            w({ param: { name: n, value: t } });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [w]
            ),
            V = No(
              function () {
                return Oa("list_post_types_limit", u.limit, function (e, t) {
                  T({ limit: e, page: 1 }), W(e, t);
                });
              },
              [u.limit, T, W]
            ),
            K = No(
              function () {
                var e = u.page,
                  t = u.limit,
                  n = u.filterBy,
                  a = u.hideUsedByWordPress,
                  o = r[n][a];
                return React.createElement(Ce.Q, {
                  currentPage: e,
                  limit: t,
                  total: o,
                  onClick: function (e) {
                    return T({ page: e });
                  },
                });
              },
              [u.limit, u.page, r, W, T]
            ),
            H = No(
              function () {
                return { by: u.sort, accessor: u.accessor };
              },
              [u.accessor, u.sort]
            );
          return React.createElement(
            d.N,
            null,
            React.createElement(
              d.Y,
              { minimal: !0 },
              React.createElement(
                v.z,
                {
                  busy: t || A || C,
                  title: Xe.SETTINGS.LIST_POST_TYPES,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    React.createElement(y.M, {
                      icon: "trash",
                      title: Xe.BULK_TASK.DELETE,
                      style: va,
                      onClick: function () {
                        return B();
                      },
                      disabled: M,
                    })
                  ),
                },
                React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    },
                  },
                  React.createElement(
                    aa.o,
                    {
                      name: "dbclnr-post-types-filters",
                      value: u.filterBy,
                      onChange: function (e) {
                        T({ filterBy: e, page: 1 });
                      },
                    },
                    Jt.map(function (e) {
                      return React.createElement(aa.K, {
                        title: e.title,
                        value: e.value,
                        count: r[e.value][u.hideUsedByWordPress],
                        variant:
                          "warn" === e.filterValue &&
                          r[e.value][u.hideUsedByWordPress] > 0
                            ? "danger"
                            : "primary",
                      });
                    })
                  ),
                  React.createElement(
                    "div",
                    { style: { display: "flex" } },
                    K,
                    React.createElement(Le.z, {
                      title: Xe.BULK_TASK.REFRESH_COUNTS,
                      icon: "replay",
                      color: "var(--neko-blue)",
                      onClick: G,
                      spinning: A,
                    })
                  )
                ),
                React.createElement(ke.o, {
                  variant: "raw",
                  alternateRowColor: !0,
                  data: I,
                  columns: jt,
                  selectedItems: [],
                  sort: H,
                  sortIconColor: "var(--neko-blue)",
                  onSortChange: function (e, t) {
                    T({ accessor: e, sort: t });
                  },
                }),
                React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                    },
                  },
                  V,
                  K
                ),
                React.createElement(
                  "div",
                  { style: ga },
                  React.createElement(Sa, {
                    name: "post_types_search",
                    value: u.search,
                    onChange: function (e) {
                      return T({ search: e, page: 1 });
                    },
                    onReset: function () {
                      return T({ search: "" });
                    },
                  }),
                  React.createElement("div", { style: { flex: "auto" } }),
                  React.createElement(f.R, {
                    name: "post_types_hide_wordpress",
                    label: It,
                    checked: u.hideUsedByWordPress,
                    onChange: function (e) {
                      return T({ hideUsedByWordPress: e, page: 1 });
                    },
                  })
                )
              )
            ),
            S.TasksErrorModal
          );
        };
        function Mo(e) {
          return (
            (Mo =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Mo(e)
          );
        }
        function jo() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ jo =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == Mo(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(Mo(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Do(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Fo(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Do(o, r, a, i, c, "next", e);
              }
              function c(e) {
                Do(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function Go(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return zo(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return zo(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function zo(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Yo = wp.element,
          Wo = Yo.useState,
          Vo = Yo.useMemo,
          Ko = Yo.useEffect,
          Ho = Yo.useCallback;
        const qo = function () {
          var e = na(),
            t = e.busyAction,
            n = e.filteredOptions,
            r = e.busyCleanBulkTasks,
            a = e.busyOptions,
            o = e.optionsFilters,
            i = e.optionsTotal,
            c = e.optionsUsedBy,
            l = e.plugins,
            u = na(),
            p = u.deleteOption,
            m = u.switchAutoloadedOption,
            h = u.resetBusyBulkTasks,
            b = u.updateOption,
            E = u.toggleModal,
            w = (u.setLoadEntryItem, u.setBusyAction),
            T = u.setShouldFetchOptions,
            _ = u.updateOptionsFilters,
            S = u.mutateOptions,
            O = u.setEntries,
            x = u.getOptionValue,
            L = u.pushBusyOptions,
            R = u.popBusyOptions,
            A = u.deleteOptions,
            k = u.setSelectedUsedBy,
            C = (0, Pe.XS)(),
            N = Go(Wo([]), 2),
            P = N[0],
            I = N[1],
            U = P.map(function (e) {
              return e.name;
            }),
            B = (0, Pe.v_)().pressShift,
            M = za({
              pressShift: B,
              list: n,
              selectedList: P,
              setSelectedList: I,
              key: "option_name",
            }).onCheckboxChange;
          Ko(function () {
            T();
          }, []),
            Ko(
              function () {
                return function () {
                  r || (C.stop(), h(), w([]));
                };
              },
              [r]
            );
          var j = Vo(
              function () {
                var e = n.map(function (e) {
                  return e.option_name;
                });
                return t.filter(function (t) {
                  return e.includes(t.item);
                });
              },
              [t, n]
            ),
            D = Vo(
              function () {
                return P.some(function (e) {
                  return "wordpress" === e.slug;
                });
              },
              [P]
            ),
            F = Vo(
              function () {
                return n.map(function (e) {
                  var n,
                    r = P.some(function (t) {
                      return t.name === e.option_name;
                    }),
                    a = "yes" === e.autoload,
                    o = t.some(function (t) {
                      return t.item === e.option_name;
                    }),
                    i = t.some(function (t) {
                      return t.item === "loading_".concat(e.option_name);
                    }),
                    u =
                      "ok" ===
                      (null === (n = e.info) || void 0 === n
                        ? void 0
                        : n.status),
                    d = (function () {
                      var t = Fo(
                        jo().mark(function t() {
                          return jo().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    O([]),
                                    (t.next = 3),
                                    x({ optionName: e.option_name })
                                  );
                                case 3:
                                  E({
                                    modal: "optionValue",
                                    enable: !0,
                                    title: (0, g.g7)(
                                      Xe.MODAL.OPTION_VALUE_TITLE,
                                      e.option_name
                                    ),
                                  });
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })();
                  return {
                    id: e.option_name,
                    isBusy: r && o,
                    name: React.createElement(wa, {
                      item: e,
                      itemText: e.option_name,
                    }),
                    usedBy: React.createElement(_a, {
                      item: e,
                      itemName: e.option_name,
                      itemsUsedBy: c,
                      optionName: "option_usedby",
                      plugins: l,
                      setSelectedUsedBy: k,
                      toggleModal: E,
                      updateOption: b,
                      onRefresh: function () {
                        z();
                      },
                    }),
                    size: React.createElement(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          justifyItem: "center",
                          alignItems: "center",
                        },
                      },
                      React.createElement(
                        s.s,
                        null,
                        (0, g.z3)(e.option_value_length)
                      ),
                      React.createElement(Le.z, {
                        onClick: d,
                        icon: "search",
                        color: "#007cba",
                        style: { width: 20, marginLeft: 5, cursor: "pointer" },
                        isBusy: i,
                      })
                    ),
                    autoloaded: React.createElement(
                      "div",
                      { style: { display: "flex", justifyContent: "right" } },
                      React.createElement(f.R, {
                        name: "".concat(e.option_name, "-autoloaded"),
                        checked: a,
                        onChange: function (t) {
                          m({
                            item: e.option_name,
                            autoload: t ? "yes" : "no",
                          });
                        },
                      })
                    ),
                    actions: React.createElement(y.M, {
                      className: u ? "primary" : "danger",
                      onClick: function () {
                        return p({ item: e.option_name });
                      },
                      icon: "close",
                      busyIconSize: "100%",
                      style: { minWidth: 40, width: 40 },
                      disabled: o || u,
                      isBusy: o,
                    }),
                  };
                });
              },
              [n, t, P, c]
            ),
            G = Ho(
              (function () {
                var e = Fo(
                  jo().mark(function e(t, n) {
                    return jo().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            b({ param: { name: n, value: t } });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [b]
            ),
            z = Ho(
              Fo(
                jo().mark(function e() {
                  var t,
                    n = arguments;
                  return jo().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.length > 0 && void 0 !== n[0] && n[0]),
                            L(),
                            (e.next = 4),
                            S()
                          );
                        case 4:
                          t && I([]), R();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [S]
            ),
            Y = Ho(
              function () {
                var e;
                E({
                  modal: "deleteAll",
                  enable: !0,
                  onNext:
                    ((e = Fo(
                      jo().mark(function e() {
                        var t;
                        return jo().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  A({
                                    items: P.map(function (e) {
                                      return e.name;
                                    }),
                                  })
                                );
                              case 2:
                                if (!(t = e.sent).length) {
                                  e.next = 6;
                                  break;
                                }
                                return I(t), e.abrupt("return");
                              case 6:
                                I([]);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                });
              },
              [P]
            ),
            W = Vo(
              function () {
                var e = Gt.findIndex(function (e) {
                  return "actions" === e.accessor;
                });
                if (((Gt[e].title = ""), !P.length)) return Gt;
                var t = React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(y.M, {
                    icon: "close",
                    title: Xe.BULK_TASK.DELETE_SELECTED_ITEMS,
                    style: { minWidth: 40, width: 40 },
                    className: D ? "primary" : "danger",
                    busyIconSize: "100%",
                    onClick: Y,
                    isBusy: j.length > 1,
                    disabled: j.length || D,
                  })
                );
                return (Gt[e].title = t), Gt;
              },
              [Gt, n, P, j, D, Y]
            ),
            V = Vo(
              function () {
                return Oa("options_limit", o.limit, function (e, t) {
                  I([]), _({ limit: e, page: 1 }), G(e, t);
                });
              },
              [o.limit, _, G]
            ),
            K = Vo(
              function () {
                var e = o.page,
                  t = o.limit,
                  n = o.filterBy,
                  r = o.hideUsedByWordPress,
                  a = i[n][r];
                return React.createElement(Ce.Q, {
                  currentPage: e,
                  limit: t,
                  total: a,
                  onClick: function (e) {
                    I([]), _({ page: e });
                  },
                });
              },
              [o.page, o.limit, i, _]
            ),
            H = Vo(
              function () {
                return { by: o.sort, accessor: o.accessor };
              },
              [o.accessor, o.sort]
            ),
            q = Ho(
              function (e, t) {
                1 !== t.length
                  ? I(
                      e
                        ? n.map(function (e) {
                            return { name: e.option_name, info: e.info };
                          })
                        : []
                    )
                  : M(
                      e,
                      n.find(function (e) {
                        return e.option_name === t[0];
                      })
                    );
              },
              [M, n, P]
            );
          return (
            Ko(
              function () {
                I([]);
              },
              [H]
            ),
            React.createElement(
              d.N,
              null,
              React.createElement(
                d.Y,
                { minimal: !0 },
                React.createElement(
                  v.z,
                  {
                    busy: a,
                    title: Xe.SETTINGS.OPTIONS,
                    className: "primary",
                    action: React.createElement(Ta, {
                      itemsUsedBy: c,
                      optionName: "option_usedby",
                      selectedItems: P,
                      plugins: l,
                      setSelectedUsedBy: k,
                      toggleModal: E,
                      updateOption: b,
                      onRefresh: function () {
                        z(!0);
                      },
                    }),
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      },
                    },
                    React.createElement(
                      aa.o,
                      {
                        name: "dbclnr-options-filters",
                        value: o.filterBy,
                        onChange: function (e) {
                          I([]), _({ filterBy: e, page: 1 });
                        },
                      },
                      Kt.map(function (e) {
                        return React.createElement(aa.K, {
                          title: e.title,
                          value: e.value,
                          count: i[e.value][o.hideUsedByWordPress],
                          variant:
                            "warn" === e.filterValue &&
                            i[e.value][o.hideUsedByWordPress] > 0
                              ? "danger"
                              : "primary",
                        });
                      })
                    ),
                    React.createElement(
                      "div",
                      { style: { display: "flex" } },
                      K,
                      React.createElement(Le.z, {
                        icon: "replay",
                        color: "var(--neko-blue)",
                        onClick: z,
                      })
                    )
                  ),
                  React.createElement(ke.o, {
                    variant: "raw",
                    alternateRowColor: !0,
                    data: F,
                    columns: W,
                    selectedItems: U,
                    onSelect: function (e) {
                      return q(!0, e);
                    },
                    onUnselect: function (e) {
                      return q(!1, e);
                    },
                    sort: H,
                    onSortChange: function (e, t) {
                      return _({ accessor: e, sort: t });
                    },
                    filters: [{ accessor: "size", value: o.size }],
                    onFilterChange: function (e, t) {
                      return _({ size: t });
                    },
                  }),
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 10,
                      },
                    },
                    V,
                    K
                  ),
                  React.createElement(
                    "div",
                    { style: ga },
                    React.createElement(Sa, {
                      name: "options_search",
                      value: o.search,
                      onChange: function (e) {
                        return _({ search: e, page: 1 });
                      },
                      onReset: function () {
                        return _({ search: "" });
                      },
                    }),
                    React.createElement("div", { style: { flex: "auto" } }),
                    React.createElement(f.R, {
                      name: "options_hide_wordpress",
                      label: It,
                      checked: o.hideUsedByWordPress,
                      onChange: function (e) {
                        return _({ hideUsedByWordPress: e, page: 1 });
                      },
                    })
                  )
                )
              ),
              C.TasksErrorModal
            )
          );
        };
        var Jo = n(7392),
          Qo = wp.element.useCallback;
        const Xo = function () {
          var e = na(),
            t = e.busy,
            n = e.busyAction,
            r = e.agaThreshold,
            a = e.bulkBatchSize,
            o = e.sweeperEnabled,
            i = e.sweeperSchedule,
            c = e.deepDeletions,
            p = e.hideMessage,
            m = e.moduleDevTools,
            h = e.delay,
            b = e.mode,
            E = e.modulePosttypes,
            w = e.moduleTables,
            T = e.moduleOptions,
            _ = e.moduleMetadata,
            S = e.moduleCronjobs,
            L = e.moduleCustomequeries,
            R = na(),
            A = R.refreshLogs,
            k = R.clearLogs,
            C = R.deleteCustomUsedBy,
            N = R.updateOption,
            P = R.buildIndexes,
            I = R.removeIndexes,
            U = na(),
            B = U.postTypesUsedBy,
            M = U.optionsUsedBy,
            j = U.tablesUsedBy,
            D = U.cronJobsUsedBy,
            F = Qo(
              function (e) {
                var t = e.name,
                  n = e.value;
                N({ param: { name: t, value: n } });
              },
              [N]
            ),
            G = n.some(function (e) {
              return "deleteCustomUsedBy" === e.item;
            }),
            z = n.some(function (e) {
              return "logs" === e.item;
            }),
            Y = n.some(function (e) {
              return "build_indexes" === e.item;
            }),
            W = n.some(function (e) {
              return "remove_indexes" === e.item;
            }),
            V = b === Xt.on.value;
          return React.createElement(
            d.N,
            null,
            React.createElement(
              d.Y,
              { minimal: !0 },
              React.createElement(
                v.z,
                { busy: t, title: Xe.SETTINGS.SETTINGS, className: "primary" },
                React.createElement(
                  l.d,
                  { title: Xe.SETTINGS.AGE_THRESHOLD },
                  React.createElement(
                    Ne.u,
                    {
                      name: "aga_threshold",
                      scrolldown: !0,
                      onChange: function (e, t) {
                        return F({ name: t, value: e });
                      },
                      value: r,
                      description: Xe.SETTINGS.AGE_THRESHOLD_DESCRIPTION,
                    },
                    Vt.map(function (e) {
                      return React.createElement(Ne.j, {
                        id: e.value,
                        value: e.value,
                        label: e.label,
                      });
                    })
                  )
                ),
                React.createElement(
                  l.d,
                  { title: Xe.SETTINGS.MESSAGE },
                  React.createElement(
                    u.E,
                    { max: "1" },
                    React.createElement(f.R, {
                      name: "hide_message",
                      label: "Hide",
                      description: Xe.SETTINGS.MESSAGE_DESCRIPTION,
                      value: "1",
                      checked: p,
                      onChange: function (e, t) {
                        return F({ name: t, value: e });
                      },
                    })
                  )
                ),
                React.createElement(
                  l.d,
                  { title: Xe.COMMON.DEV_TOOLS },
                  React.createElement(f.R, {
                    name: "module_devtools",
                    label: Xe.COMMON.ENABLE,
                    value: "1",
                    checked: m,
                    description: Xe.HELP.DEV_TOOLS,
                    onChange: function (e, t) {
                      return F({ name: t, value: e });
                    },
                  })
                )
              ),
              V &&
                React.createElement(
                  v.z,
                  { busy: t, title: Xe.SETTINGS.MODULES, className: "primary" },
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.POST_TYPES },
                    React.createElement(
                      u.E,
                      null,
                      React.createElement(f.R, {
                        name: "module_posttypes",
                        label: Xe.SETTINGS.ENABLED,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        checked: E,
                      })
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.TABLES },
                    React.createElement(
                      u.E,
                      null,
                      React.createElement(f.R, {
                        name: "module_tables",
                        label: Xe.SETTINGS.ENABLED,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        checked: w,
                      })
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.OPTIONS },
                    React.createElement(
                      u.E,
                      null,
                      React.createElement(f.R, {
                        name: "module_options",
                        label: Xe.SETTINGS.ENABLED,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        checked: T,
                      })
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.METADATA },
                    React.createElement(
                      u.E,
                      null,
                      React.createElement(f.R, {
                        name: "module_metadata",
                        label: Xe.SETTINGS.ENABLED,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        checked: _,
                      })
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.CRON_JOBS },
                    React.createElement(
                      u.E,
                      null,
                      React.createElement(f.R, {
                        name: "module_cronjobs",
                        label: Xe.SETTINGS.ENABLED,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        checked: S,
                      })
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.CUSTOM_QUERIES },
                    React.createElement(
                      u.E,
                      null,
                      React.createElement(f.R, {
                        name: "module_customequeries",
                        label: Xe.SETTINGS.ENABLED,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        checked: L,
                      })
                    )
                  )
                ),
              React.createElement(
                v.z,
                {
                  busy: t,
                  title: Xe.SETTINGS.PERFORMANCE,
                  className: "primary",
                  action: React.createElement(
                    "div",
                    { style: { display: "flex", alignItems: "center" } },
                    React.createElement(
                      y.M,
                      { color: "#005883", onClick: P, isBusy: Y },
                      Xe.SETTINGS.BUILD_INDEXES
                    ),
                    React.createElement(
                      y.M,
                      { color: "#005883", onClick: I, isBusy: W },
                      Xe.SETTINGS.REMOVE_INDEXES
                    )
                  ),
                },
                React.createElement(
                  l.d,
                  { title: Xe.SETTINGS.BATCH_SIZE },
                  React.createElement(Be.A, {
                    name: "bulk_batch_size",
                    type: "number",
                    value: a,
                    onBlur: function (e, t) {
                      return F({ name: t, value: e });
                    },
                    description: Xe.SETTINGS.BATCH_SIZE_DESCRIPTION,
                  })
                ),
                React.createElement(
                  l.d,
                  { title: Xe.SETTINGS.DELAY_IN_MS },
                  React.createElement(Be.A, {
                    name: "delay",
                    type: "number",
                    value: h,
                    min: "0",
                    max: "20000",
                    onBlur: function (e, t) {
                      return F({ name: t, value: e });
                    },
                    description: Xe.SETTINGS.DELAY_IN_MS_DESCRIPTION,
                  })
                ),
                React.createElement(
                  l.d,
                  { title: Xe.SETTINGS.DEEP_DELETIONS },
                  React.createElement(
                    u.E,
                    { isPro: O },
                    React.createElement(f.R, {
                      name: "deep_deletions",
                      label: "Enable",
                      requirePro: !x,
                      onChange: function (e, t) {
                        return F({ name: t, value: e });
                      },
                      description: (0, g.FE)(
                        Xe.SETTINGS.DEEP_DELETIONS_DESCRIPTION
                      ),
                      checked: c,
                    })
                  )
                )
              ),
              React.createElement(
                v.z,
                {
                  title: Xe.SETTINGS.NYAO_SWEEPER,
                  busy: t || z,
                  className: "primary",
                },
                React.createElement(
                  l.d,
                  { title: Xe.SETTINGS.SWEEPER },
                  React.createElement(
                    u.E,
                    { max: "1" },
                    React.createElement(f.R, {
                      name: "sweeper_enabled",
                      label: Xe.SETTINGS.ENABLE,
                      description: Xe.HELP.SWEEPER,
                      requirePro: !x,
                      value: "1",
                      checked: o,
                      onChange: function (e, t) {
                        return F({ name: t, value: e });
                      },
                    })
                  )
                ),
                o &&
                  React.createElement(
                    l.d,
                    { title: Xe.SETTINGS.SCHEDULE },
                    React.createElement(
                      Ne.u,
                      {
                        name: "sweeper_schedule",
                        scrolldown: !0,
                        disabled: !o || !x,
                        onChange: function (e, t) {
                          return F({ name: t, value: e });
                        },
                        value: i,
                      },
                      $t.map(function (e) {
                        return React.createElement(Ne.j, {
                          id: e.value,
                          value: e.value,
                          label: e.label,
                        });
                      })
                    )
                  )
              )
            ),
            React.createElement(
              d.Y,
              { minimal: !0 },
              React.createElement(
                v.z,
                {
                  busy: t || G,
                  title: (0, g.FE)(Xe.SETTINGS.CUSTOM_USED_BY_DATA),
                  className: "primary",
                  action: React.createElement(
                    y.M,
                    { className: "primary-block", isBusy: t || G, onClick: C },
                    (0, g.FE)(Xe.SETTINGS.RESET_USED_BY_DATA)
                  ),
                },
                O &&
                  React.createElement(
                    s.s,
                    null,
                    (0, g.FE)(Xe.SETTINGS.CUSTOM_USED_BY_DATA_DESCRIPTION)
                  ),
                React.createElement(
                  "pre",
                  {
                    style: {
                      height: 145,
                      overflow: "auto",
                      border: "1px solid #dedede",
                      padding: 10,
                      background: "#f8f8f8",
                      color: "#8b8b8b",
                    },
                  },
                  (null == B ? void 0 : B.length) > 0 &&
                    React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(
                        "b",
                        null,
                        "# ",
                        Xe.SETTINGS.USED_BY_POST_TYPES
                      ),
                      null == B
                        ? void 0
                        : B.sort(function (e, t) {
                            return e.name.localeCompare(t.name);
                          }).map(function (e) {
                            return React.createElement(
                              "div",
                              null,
                              e.name,
                              "|",
                              e.item,
                              "|",
                              e.slug
                            );
                          }),
                      React.createElement("br", null)
                    ),
                  (null == M ? void 0 : M.length) > 0 &&
                    React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(
                        "b",
                        null,
                        "# ",
                        Xe.SETTINGS.USED_BY_OPTIONS
                      ),
                      null == M
                        ? void 0
                        : M.sort(function (e, t) {
                            return e.name.localeCompare(t.name);
                          }).map(function (e) {
                            return React.createElement(
                              "div",
                              null,
                              e.name,
                              "|",
                              e.item,
                              "|",
                              e.slug
                            );
                          }),
                      React.createElement("br", null)
                    ),
                  (null == j ? void 0 : j.length) > 0 &&
                    React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(
                        "b",
                        null,
                        "# ",
                        Xe.SETTINGS.USED_BY_TABLES
                      ),
                      null == j
                        ? void 0
                        : j
                            .sort(function (e, t) {
                              return e.name.localeCompare(t.name);
                            })
                            .map(function (e) {
                              return React.createElement(
                                "div",
                                null,
                                e.name,
                                "|",
                                e.item,
                                "|",
                                e.slug
                              );
                            }),
                      React.createElement("br", null)
                    ),
                  (null == D ? void 0 : D.length) > 0 &&
                    React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(
                        "b",
                        null,
                        "# ",
                        Xe.SETTINGS.USED_BY_CRON_JOBS
                      ),
                      null == D
                        ? void 0
                        : D.sort(function (e, t) {
                            return e.name.localeCompare(t.name);
                          }).map(function (e) {
                            return React.createElement(
                              "div",
                              null,
                              e.name,
                              "|",
                              e.item,
                              "|",
                              e.slug
                            );
                          }),
                      React.createElement("br", null)
                    )
                )
              ),
              React.createElement(Jo.k, {
                refreshQuery: A,
                clearQuery: k,
                i18n: Xe,
              })
            )
          );
        };
        function Zo(e) {
          return (
            (Zo =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Zo(e)
          );
        }
        function $o() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ $o =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == Zo(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(Zo(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function ei(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function ti(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                ei(o, r, a, i, c, "next", e);
              }
              function c(e) {
                ei(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function ni(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return ri(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return ri(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ri(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ai = wp.element,
          oi = ai.useState,
          ii = ai.useMemo,
          ci = ai.useEffect,
          si = ai.useCallback;
        const li = function () {
          var e = na(),
            t = e.busyAction,
            n = e.filteredCronJobs,
            r = e.busyCleanBulkTasks,
            a = e.busyCronJobs,
            o = e.cronJobsFilters,
            i = e.cronJobsTotal,
            c = e.plugins,
            s = e.cronJobsUsedBy,
            l = na(),
            u = l.deleteCron,
            p = l.deleteCrons,
            m = l.resetBusyBulkTasks,
            h = l.updateOption,
            g = l.toggleModal,
            b = l.setBusyAction,
            E = l.setShouldFetchCronJobs,
            w = l.mutateCronJobs,
            T = l.pushBusyCronJobs,
            _ = l.popBusyCronJobs,
            S = l.setSelectedUsedBy,
            O = l.updateCronJobsFilters,
            x = (0, Pe.XS)(),
            L = ni(oi([]), 2),
            R = L[0],
            A = L[1],
            k = R.map(function (e) {
              return e.name;
            }),
            C = (0, Pe.v_)().pressShift,
            N = za({
              pressShift: C,
              list: n,
              selectedList: R,
              setSelectedList: A,
              key: "cron_name",
            }).onCheckboxChange;
          ci(function () {
            E();
          }, []),
            ci(
              function () {
                return function () {
                  r || (x.stop(), m(), b([]));
                };
              },
              [r]
            );
          var P = ii(
              function () {
                var e = n.map(function (e) {
                  return e.cron_name;
                });
                return t.filter(function (t) {
                  return e.includes(t.item);
                });
              },
              [t, n]
            ),
            I = ii(
              function () {
                return R.some(function (e) {
                  return "wordpress" === e.slug;
                });
              },
              [R]
            ),
            U = ii(
              function () {
                return n.map(function (e) {
                  var n,
                    r,
                    a,
                    o,
                    i,
                    l = R.some(function (t) {
                      return t.name === e.cron_name;
                    }),
                    f = "wordpress" === e.info.usedBy.toLowerCase(),
                    p = t.some(function (t) {
                      return t.item === e.cron_name;
                    });
                  return {
                    id: e.cron_name,
                    isBusy: l && p,
                    name: React.createElement(wa, {
                      item: e,
                      itemText: e.cron_name,
                    }),
                    usedBy: React.createElement(_a, {
                      item: e,
                      itemName: e.cron_name,
                      itemsUsedBy: s,
                      optionName: "cron_usedby",
                      plugins: c,
                      setSelectedUsedBy: S,
                      toggleModal: g,
                      updateOption: h,
                      onRefresh: function () {
                        M();
                      },
                    }),
                    schedule:
                      null !== (n = e.schedule) && void 0 !== n ? n : "-",
                    nextRun:
                      ((r = e.unixtime),
                      (a = new Date(1e3 * r)),
                      (o = (a = new Date(
                        a.getTime() - 60 * a.getTimezoneOffset() * 1e3
                      )).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })),
                      (i = a.toLocaleTimeString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })),
                      React.createElement(
                        "div",
                        { style: { textAlign: "right" } },
                        o,
                        React.createElement("br", null),
                        React.createElement("small", null, i)
                      )),
                    actions: React.createElement(y.M, {
                      className: f ? "primary" : "danger",
                      icon: "close",
                      onClick: function () {
                        var t = { name: e.cron_name, args: e.args };
                        u({ item: t });
                      },
                      busyIconSize: "100%",
                      style: { minWidth: 40, width: 40 },
                      disabled: p || f,
                      isBusy: p,
                    }),
                  };
                });
              },
              [n, t, R, s]
            ),
            B = si(
              (function () {
                var e = ti(
                  $o().mark(function e(t, n) {
                    return $o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            h({ param: { name: n, value: t } });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [h]
            ),
            M = si(
              ti(
                $o().mark(function e() {
                  var t,
                    n = arguments;
                  return $o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.length > 0 && void 0 !== n[0] && n[0]),
                            T(),
                            (e.next = 4),
                            w()
                          );
                        case 4:
                          t && A([]), _();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [w]
            ),
            j = si(
              function () {
                var e;
                g({
                  modal: "deleteAll",
                  enable: !0,
                  onNext:
                    ((e = ti(
                      $o().mark(function e() {
                        var t;
                        return $o().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  p({
                                    items: R.map(function (e) {
                                      return { name: e.name, args: e.args };
                                    }),
                                  })
                                );
                              case 2:
                                if (!(t = e.sent).length) {
                                  e.next = 6;
                                  break;
                                }
                                return A(t), e.abrupt("return");
                              case 6:
                                A([]);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                });
              },
              [R]
            ),
            D = ii(
              function () {
                var e = zt.findIndex(function (e) {
                  return "actions" === e.accessor;
                });
                if (((zt[e].title = ""), !R.length)) return zt;
                var t = React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(y.M, {
                    icon: "close",
                    title: Xe.BULK_TASK.DELETE_SELECTED_ITEMS,
                    style: { minWidth: 40, width: 40 },
                    className: I ? "primary" : "danger",
                    busyIconSize: "100%",
                    onClick: j,
                    isBusy: P.length > 1,
                    disabled: P.length || I,
                  })
                );
                return (zt[e].title = t), zt;
              },
              [zt, n, R, P, I, j]
            ),
            F = ii(
              function () {
                return Oa("cron_jobs_limit", o.limit, function (e, t) {
                  A([]), O({ limit: e, page: 1 }), B(e, t);
                });
              },
              [o.limit, O, B]
            ),
            G = ii(
              function () {
                var e = o.page,
                  t = o.limit,
                  n = o.filterBy,
                  r = o.hideUsedByWordPress,
                  a = i[n][r];
                return React.createElement(Ce.Q, {
                  currentPage: e,
                  limit: t,
                  total: a,
                  onClick: function (e) {
                    A([]), O({ page: e });
                  },
                });
              },
              [o.page, o.limit, i, O]
            ),
            z = ii(
              function () {
                return { by: o.sort, accessor: o.accessor };
              },
              [o.accessor, o.sort]
            ),
            Y = si(
              function (e, t) {
                1 !== t.length
                  ? A(
                      e
                        ? n.map(function (e) {
                            return {
                              name: e.cron_name,
                              args: e.args,
                              info: e.info,
                            };
                          })
                        : []
                    )
                  : N(
                      e,
                      n.find(function (e) {
                        return e.cron_name === t[0];
                      })
                    );
              },
              [N, n, R]
            );
          return (
            ci(
              function () {
                A([]);
              },
              [z]
            ),
            React.createElement(
              d.N,
              null,
              React.createElement(
                d.Y,
                { minimal: !0 },
                React.createElement(
                  v.z,
                  {
                    busy: a,
                    title: Xe.SETTINGS.CRON_JOBS,
                    className: "primary",
                    action: React.createElement(Ta, {
                      itemsUsedBy: s,
                      selectedItems: R,
                      optionName: "cron_usedby",
                      plugins: c,
                      setSelectedUsedBy: S,
                      toggleModal: g,
                      updateOption: h,
                      onRefresh: function () {
                        M(!0);
                      },
                    }),
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      },
                    },
                    React.createElement(
                      aa.o,
                      {
                        name: "dbclnr-cron-filters",
                        value: o.filterBy,
                        onChange: function (e) {
                          A([]), O({ filterBy: e, page: 1 });
                        },
                      },
                      Ht.map(function (e) {
                        return React.createElement(aa.K, {
                          title: e.title,
                          value: e.value,
                          count: i[e.value][o.hideUsedByWordPress],
                          variant:
                            "warn" === e.filterValue &&
                            i[e.value][o.hideUsedByWordPress] > 0
                              ? "danger"
                              : "primary",
                        });
                      })
                    ),
                    React.createElement(
                      "div",
                      { style: { display: "flex" } },
                      G,
                      React.createElement(Le.z, {
                        icon: "replay",
                        color: "var(--neko-blue)",
                        onClick: M,
                      })
                    )
                  ),
                  React.createElement(ke.o, {
                    variant: "raw",
                    alternateRowColor: !0,
                    data: U,
                    columns: D,
                    selectedItems: k,
                    onSelect: function (e) {
                      return Y(!0, e);
                    },
                    onUnselect: function (e) {
                      return Y(!1, e);
                    },
                    sort: z,
                    sortIconColor: "var(--neko-blue)",
                    onSortChange: function (e, t) {
                      return O({ accessor: e, sort: t });
                    },
                  }),
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 10,
                      },
                    },
                    F,
                    G
                  ),
                  React.createElement(
                    "div",
                    { style: ga },
                    React.createElement(Sa, {
                      name: "cron_jobs_search",
                      value: o.search,
                      onChange: function (e) {
                        return O({ search: e, page: 1 });
                      },
                      onReset: function () {
                        return O({ search: "" });
                      },
                    }),
                    React.createElement("div", { style: { flex: "auto" } }),
                    React.createElement(f.R, {
                      name: "cron_jobs_hide_wordpress",
                      label: It,
                      checked: o.hideUsedByWordPress,
                      onChange: function (e) {
                        return O({ hideUsedByWordPress: e, page: 1 });
                      },
                    })
                  )
                )
              ),
              x.TasksErrorModal
            )
          );
        };
        var ui = n(3896);
        function fi(e) {
          return (
            (fi =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            fi(e)
          );
        }
        function pi(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function mi(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? pi(Object(n), !0).forEach(function (t) {
                  di(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : pi(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function di(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== fi(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== fi(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === fi(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function hi() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ hi =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == fi(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(fi(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function yi(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = Ei(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: a,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            i = !0,
            c = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (i = e.done), e;
            },
            e: function (e) {
              (c = !0), (o = e);
            },
            f: function () {
              try {
                i || null == n.return || n.return();
              } finally {
                if (c) throw o;
              }
            },
          };
        }
        function vi(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function gi(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return wi(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Ei(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function bi(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            Ei(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ei(e, t) {
          if (e) {
            if ("string" == typeof e) return wi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? wi(e, t)
                : void 0
            );
          }
        }
        function wi(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Ti = wp.element,
          _i = Ti.useState,
          Si = Ti.useMemo,
          Oi = Ti.useCallback,
          xi = Ti.useEffect,
          Li = { name: "", clean_style: "", query_count: "", query_delete: "" };
        const Ri = function () {
          var e,
            t,
            n,
            r,
            a = na(),
            o = a.customQueries,
            i = a.busy,
            c = a.busyAction,
            u = a.customQueriesCount,
            f = a.editCustomQuery,
            p = a.clickedTab,
            m = a.modals,
            h = na(),
            g = h.toggleModal,
            b = h.setCustomQueriesCount,
            E = h.setEditCustomQuery,
            w = h.updateOption,
            T = h.customQueryDelete,
            _ = h.refreshCostomQueryCount,
            S = h.allRefreshCostomQueryCount,
            O = p.CustomQueries,
            x = bi(_i({}), 2),
            L = x[0],
            R = x[1],
            A = bi(_i({}), 2),
            k = A[0],
            C = A[1],
            N = bi(
              _i(
                null !== (e = null == f ? void 0 : f.name) && void 0 !== e
                  ? e
                  : ""
              ),
              2
            ),
            P = N[0],
            I = N[1],
            U = bi(
              _i(
                null !== (t = null == f ? void 0 : f.clean_style) &&
                  void 0 !== t
                  ? t
                  : ""
              ),
              2
            ),
            B = U[0],
            M = U[1],
            j = bi(
              _i(
                null !== (n = null == f ? void 0 : f.query_count) &&
                  void 0 !== n
                  ? n
                  : ""
              ),
              2
            ),
            D = j[0],
            F = j[1],
            G = bi(
              _i(
                null !== (r = null == f ? void 0 : f.query_delete) &&
                  void 0 !== r
                  ? r
                  : ""
              ),
              2
            ),
            z = G[0],
            Y = G[1],
            W = Si(
              function () {
                return (
                  !!f &&
                  (f.name !== P ||
                    f.clean_style !== B ||
                    f.query_count !== D ||
                    f.query_delete !== z)
                );
              },
              [f, P, B, D, z]
            );
          xi(
            function () {
              if (!f) return I(""), M(""), F(""), void Y("");
              I(f.name), M(f.clean_style), F(f.query_count), Y(f.query_delete);
            },
            [f]
          ),
            xi(
              function () {
                u.length || (1 === O && o && K(!0));
              },
              [O, o]
            );
          var V = Oi(
              function (e) {
                var t = e.item,
                  n = e.query,
                  r = void 0 === n ? null : n,
                  a = e.onSuccessCallback,
                  o = e.onFailureCallback;
                _({
                  item: t,
                  query: r,
                  onSuccess: function (e, t) {
                    var n = u.filter(function (t) {
                      return t.item !== e;
                    });
                    b([].concat(gi(n), [{ item: e, count: t.data }])),
                      a && a(t);
                  },
                  onFailure: o,
                });
              },
              [u, b]
            ),
            K = (function () {
              var e,
                t =
                  ((e = hi().mark(function e() {
                    var t,
                      n,
                      r,
                      a,
                      i,
                      c,
                      s,
                      l,
                      f = arguments;
                    return hi().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = f.length > 0 && void 0 !== f[0] && f[0]),
                                (n = function (e) {
                                  b(gi(e));
                                }),
                                (r = gi(u)),
                                (a = t ? ["auto"] : ["auto", "manual"]),
                                (i = o.filter(function (e) {
                                  return a.includes(e.clean_style);
                                })),
                                (c = yi(i)),
                                (e.prev = 6),
                                c.s();
                            case 8:
                              if ((s = c.n()).done) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (l = s.value),
                                (e.next = 12),
                                S({ item: l.item, counts: r, onSuccess: n })
                              );
                            case 12:
                              r = e.sent;
                            case 13:
                              e.next = 8;
                              break;
                            case 15:
                              e.next = 20;
                              break;
                            case 17:
                              (e.prev = 17), (e.t0 = e.catch(6)), c.e(e.t0);
                            case 20:
                              return (e.prev = 20), c.f(), e.finish(20);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[6, 17, 20, 23]]
                    );
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var o = e.apply(t, n);
                      function i(e) {
                        vi(o, r, a, i, c, "next", e);
                      }
                      function c(e) {
                        vi(o, r, a, i, c, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            H = Oi(
              function (e) {
                var t = e.item,
                  n = e.query,
                  r = void 0 === n ? null : n,
                  a = e.onSuccessCallback,
                  o = e.onFailureCallback;
                T({
                  item: t,
                  query: r,
                  signal: void 0,
                  onSuccess: function (e, t) {
                    V({ item: e }), a && a(t);
                  },
                  onFailure: o,
                });
              },
              [V]
            ),
            q = Oi(
              function (e) {
                w({
                  busyItem:
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "cq-new",
                  param: { name: "custom_queries", value: e },
                });
              },
              [w]
            ),
            J = Oi(
              function () {
                var e = mi(
                    mi(
                      {},
                      o.find(function (e) {
                        return e.item === f.item;
                      })
                    ),
                    {},
                    { name: P, clean_style: B, query_count: D, query_delete: z }
                  ),
                  t = [].concat(
                    gi(
                      o.filter(function (e) {
                        return e.item !== f.item;
                      })
                    ),
                    [e]
                  );
                q(t, f.item);
              },
              [q, o, f, P, B, D, z]
            ),
            Q = Oi(
              function () {
                q([].concat(gi(o), [mi({}, Li)]));
              },
              [q, o]
            ),
            X = Oi(
              function (e) {
                q(
                  o.filter(function (t) {
                    return t.item !== e.item;
                  }),
                  e.item
                );
              },
              [q, o]
            ),
            Z = Oi(
              function () {
                g({ modal: "editCustomQuery", enable: !1 }), E(null);
              },
              [g, E]
            ),
            $ = Si(
              function () {
                var e, t;
                if (!f) return null;
                var n = c.some(function (e) {
                    return e.item === f.item;
                  }),
                  r = null !== (e = L[f.item]) && void 0 !== e ? e : null,
                  a = null !== (t = k[f.item]) && void 0 !== t ? t : null;
                return React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    l.d,
                    { key: f.item, title: Xe.CUSTOM_QUERIES.NAME },
                    React.createElement(Be.A, {
                      name: "name",
                      value: P,
                      onBlur: function (e) {
                        return I(e);
                      },
                    })
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.CUSTOM_QUERIES.CLEAN },
                    React.createElement(
                      "div",
                      { style: { width: "90px" } },
                      React.createElement(
                        Ne.u,
                        {
                          name: "clean_style",
                          scrolldown: !0,
                          onChange: function (e) {
                            return M(e);
                          },
                          value: B,
                          disabled: n,
                        },
                        Wt.map(function (e) {
                          return React.createElement(Ne.j, {
                            id: e.value,
                            value: e.value,
                            label: e.label,
                          });
                        })
                      )
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.CUSTOM_QUERIES.QUERY_COUNT },
                    React.createElement(ui.m, {
                      name: "query_count",
                      value: D,
                      onBlur: function (e) {
                        return F(e);
                      },
                      onChange: function (e) {
                        return F(e);
                      },
                    }),
                    null != r &&
                      React.createElement(
                        s.s,
                        { p: !0, style: { margin: "8px 0" } },
                        "Result: ",
                        r
                      ),
                    React.createElement(
                      "div",
                      { style: { marginTop: "8px", textAlign: "right" } },
                      React.createElement(
                        y.M,
                        {
                          fullWidth: !0,
                          disabled: !D,
                          onClick: function () {
                            return V({
                              item: f.item,
                              query: D,
                              onSuccessCallback: function (e) {
                                return R(
                                  mi(mi({}, L), {}, di({}, f.item, e.data))
                                );
                              },
                              onFailureCallback: function (e) {
                                return R(mi(mi({}, L), {}, di({}, f.item, e)));
                              },
                            });
                          },
                        },
                        Xe.CUSTOM_QUERIES.RUN_COUNT
                      )
                    )
                  ),
                  React.createElement(
                    l.d,
                    { title: Xe.CUSTOM_QUERIES.QUERY_DELETE },
                    React.createElement(ui.m, {
                      name: "query_delete",
                      value: z,
                      onBlur: function (e) {
                        return Y(e);
                      },
                      onChange: function (e) {
                        return Y(e);
                      },
                    }),
                    null != a &&
                      React.createElement(
                        s.s,
                        { p: !0, style: { margin: "8px 0" } },
                        "Result: ",
                        a
                      ),
                    React.createElement(
                      "div",
                      { style: { marginTop: "8px", textAlign: "right" } },
                      React.createElement(
                        y.M,
                        {
                          fullWidth: !0,
                          className: "danger",
                          disabled: !z,
                          onClick: function () {
                            return H({
                              item: f.item,
                              query: z,
                              onSuccessCallback: function (e) {
                                return C(
                                  mi(
                                    mi({}, k),
                                    {},
                                    di({}, f.item, e.data.deleted)
                                  )
                                );
                              },
                              onFailureCallback: function (e) {
                                return C(mi(mi({}, k), {}, di({}, f.item, e)));
                              },
                            });
                          },
                        },
                        Xe.CUSTOM_QUERIES.RUN_DELETE
                      )
                    )
                  )
                );
              },
              [c, f, L, k, P, B, D, z, V, H]
            ),
            ee = Oi(
              function (e) {
                var t, n;
                if (!e) return null;
                var r = !(
                    e.name &&
                    e.clean_style &&
                    e.query_count &&
                    e.query_delete
                  ),
                  a = r
                    ? "(".concat(Xe.CUSTOM_QUERIES.SETUP_NOT_COMPLETE, ")")
                    : "",
                  o = "never" === e.clean_style,
                  i = c.some(function (t) {
                    return t.item === Ct(e.item);
                  }),
                  l =
                    null !==
                      (t =
                        null ===
                          (n = u.find(function (t) {
                            return t.item === e.item;
                          })) || void 0 === n
                          ? void 0
                          : n.count) && void 0 !== t
                      ? t
                      : "-",
                  f =
                    l > 0 &&
                    !c.some(function (t) {
                      return t.item === Nt(e.item);
                    });
                return React.createElement(
                  "div",
                  {
                    key: e.item,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      background: "white",
                      padding: "8px",
                    },
                  },
                  React.createElement(
                    s.s,
                    { p: !0, style: { margin: 0, width: "55px" } },
                    React.createElement(y.M, {
                      className: "danger",
                      onClick: function () {
                        return X(e);
                      },
                      busyIconSize: "100%",
                      icon: "close",
                      style: { minWidth: 40, width: 40 },
                      disabled: r,
                    })
                  ),
                  React.createElement(
                    s.s,
                    { p: !0, style: { margin: 0, width: "35%" } },
                    e.name,
                    a
                  ),
                  React.createElement(
                    s.s,
                    {
                      p: !0,
                      style: { margin: 0, width: "20%", position: "relative" },
                    },
                    i ? "-" : l
                  ),
                  React.createElement(
                    s.s,
                    { p: !0, style: { margin: 0, width: "20%" } },
                    e.clean_style
                  ),
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        width: "25%",
                      },
                    },
                    !o &&
                      React.createElement(y.M, {
                        isBusy: i,
                        onClick: function () {
                          return V({ item: e.item });
                        },
                        icon: "replay",
                        style: { justifyContent: "center" },
                        disabled: r,
                      }),
                    !o &&
                      f &&
                      React.createElement(y.M, {
                        className: "danger",
                        onClick: function () {
                          return g({
                            modal: "deleteAll",
                            enable: !0,
                            onNext: function () {
                              return H({ item: e.item });
                            },
                          });
                        },
                        icon: "trash",
                        style: { justifyContent: "center" },
                        disabled: r,
                      }),
                    React.createElement(y.M, {
                      onClick: function () {
                        E(e), g({ modal: "editCustomQuery", enable: !0 });
                      },
                      icon: "pencil",
                      style: { justifyContent: "center" },
                    })
                  )
                );
              },
              [c, f, E, u, X]
            ),
            te = Si(
              function () {
                return ot(o);
              },
              [o]
            );
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              d.N,
              null,
              React.createElement(
                d.Y,
                { minimal: !0 },
                React.createElement(
                  "div",
                  {
                    style: {
                      margin: "-10px -10px 25px -10px",
                      padding: 10,
                      background: "#00000014",
                    },
                  },
                  React.createElement(
                    y.M,
                    {
                      onClick: function () {
                        Q();
                      },
                      disabled: i,
                    },
                    "+ ",
                    Xe.CUSTOM_QUERIES.ADD_CUSTOM
                  )
                ),
                React.createElement(
                  v.z,
                  {
                    busy: i,
                    title: Xe.SETTINGS.CUSTOM_QUERIES,
                    className: "primary",
                    action: React.createElement(y.M, {
                      icon: "replay",
                      rounded: !0,
                      onClick: function () {
                        return K();
                      },
                    }),
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        background: "white",
                        padding: "8px",
                        fontWeight: "bold",
                      },
                    },
                    React.createElement(s.s, {
                      p: !0,
                      style: { margin: 0, width: "55px" },
                    }),
                    React.createElement(
                      s.s,
                      { p: !0, style: { margin: 0, width: "35%" } },
                      Xe.TABLE_COLUMN_TITLE.NAME
                    ),
                    React.createElement(
                      s.s,
                      { p: !0, style: { margin: 0, width: "20%" } },
                      Xe.TABLE_COLUMN_TITLE.COUNT
                    ),
                    React.createElement(
                      s.s,
                      { p: !0, style: { margin: 0, width: "20%" } },
                      Xe.TABLE_COLUMN_TITLE.CLEAN
                    ),
                    React.createElement(
                      s.s,
                      { p: !0, style: { margin: 0, width: "25%" } },
                      Xe.TABLE_COLUMN_TITLE.ACTION
                    )
                  ),
                  te.map(function (e) {
                    return ee(e);
                  })
                )
              )
            ),
            React.createElement(Ae.n, {
              isOpen: !!m.editCustomQuery.enable,
              onRequestClose: Z,
              title: m.editCustomQuery.title,
              content: $,
              okButton: {
                label: Xe.MODAL.SAVE,
                onClick: function () {
                  J(), Z();
                },
                disabled: !W,
              },
              onCancel: { onClick: Z },
              okOnEnter: !0,
              contentWidth: "700px",
            })
          );
        };
        function Ai(e) {
          return (
            (Ai =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Ai(e)
          );
        }
        function ki(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== Ai(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== Ai(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === Ai(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Ci(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Mi(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Bi(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ni() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Ni =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == Ai(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(Ai(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Pi(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Ii(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Pi(o, r, a, i, c, "next", e);
              }
              function c(e) {
                Pi(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function Ui(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            Bi(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Bi(e, t) {
          if (e) {
            if ("string" == typeof e) return Mi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Mi(e, t)
                : void 0
            );
          }
        }
        function Mi(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var ji = wp.element,
          Di = ji.useState,
          Fi = ji.useMemo,
          Gi = ji.useEffect,
          zi = ji.useCallback;
        const Yi = function () {
          var e = na(),
            t = e.busyAction,
            n = e.filteredMetadata,
            r = e.busyCleanBulkTasks,
            a = e.busyMetadata,
            o = e.metadataFilters,
            i = e.metadataTotal,
            c = e.metadataUsedBy,
            l = (e.plugins, na()),
            u = l.deleteMetadata,
            f = l.resetBusyBulkTasks,
            p = l.updateOption,
            m = l.toggleModal,
            h = l.setBusyAction,
            b = l.setShouldFetchMetadata,
            E = l.updateMetadataFilters,
            w = l.mutateMetadata,
            T = l.setEntries,
            _ = l.getMetadataValue,
            S = l.pushBusyOptions,
            O = l.popBusyOptions,
            x = l.deleteMultipleMetadata,
            L = (l.setSelectedUsedBy, (0, Pe.XS)()),
            R = Ui(Di([]), 2),
            A = R[0],
            k = R[1],
            N = A.map(function (e) {
              return e.name;
            }),
            P = (0, Pe.v_)().pressShift,
            I = za({
              pressShift: P,
              list: n,
              selectedList: A,
              setSelectedList: k,
              key: "id",
            }).onCheckboxChange;
          Gi(function () {
            b();
          }, []),
            Gi(
              function () {
                return function () {
                  r || (L.stop(), f(), h([]));
                };
              },
              [r]
            );
          var U = Fi(
              function () {
                var e = n.map(function (e) {
                  return e.id;
                });
                return t.filter(function (t) {
                  return e.includes(t.item);
                });
              },
              [t, n]
            ),
            B = Fi(
              function () {
                return A.some(function (e) {
                  return "wordpress" === e.info.usedBy.toLowerCase();
                });
              },
              [A]
            ),
            M = Fi(
              function () {
                return n.map(function (e) {
                  var n,
                    r = A.some(function (e) {
                      return e.name === e.id;
                    }),
                    a = t.some(function (t) {
                      return t.item === e.id;
                    }),
                    o = t.some(function (t) {
                      return t.item === "loading_".concat(e.id);
                    }),
                    i =
                      "ok" ===
                      (null === (n = e.info) || void 0 === n
                        ? void 0
                        : n.status),
                    c = (function () {
                      var t = Ii(
                        Ni().mark(function t() {
                          return Ni().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return T([]), (t.next = 3), _({ id: e.id });
                                case 3:
                                  m({
                                    modal: "metadataValue",
                                    enable: !0,
                                    title: "Metadata: ".concat(e.meta_key),
                                  });
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })();
                  return {
                    id: e.id,
                    isBusy: r && a,
                    postId: null == e ? void 0 : e.post_id,
                    userId: null == e ? void 0 : e.user_id,
                    name: React.createElement(wa, {
                      item: e,
                      itemText: e.meta_key,
                    }),
                    size: React.createElement(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          justifyItem: "center",
                          alignItems: "center",
                        },
                      },
                      React.createElement(
                        s.s,
                        null,
                        (0, g.z3)(e.meta_value_length)
                      ),
                      React.createElement(Le.z, {
                        onClick: c,
                        icon: "search",
                        color: "#007cba",
                        style: { width: 20, marginLeft: 5, cursor: "pointer" },
                        isBusy: o,
                      })
                    ),
                    actions: React.createElement(y.M, {
                      className: i ? "primary" : "danger",
                      onClick: function () {
                        return u({ item: e.id });
                      },
                      icon: "close",
                      busyIconSize: "100%",
                      style: { minWidth: 40, width: 40 },
                      disabled: a || i,
                      isBusy: a,
                    }),
                  };
                });
              },
              [n, t, A, c]
            ),
            j = zi(
              (function () {
                var e = Ii(
                  Ni().mark(function e(t, n) {
                    return Ni().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            p({ param: { name: n, value: t } });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [p]
            ),
            D = zi(
              Ii(
                Ni().mark(function e() {
                  var t,
                    n = arguments;
                  return Ni().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.length > 0 && void 0 !== n[0] && n[0]),
                            S(),
                            (e.next = 4),
                            w()
                          );
                        case 4:
                          t && k([]), O();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [w]
            ),
            F = zi(
              function () {
                var e;
                m({
                  modal: "deleteAll",
                  enable: !0,
                  onNext:
                    ((e = Ii(
                      Ni().mark(function e() {
                        var t;
                        return Ni().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  x({
                                    items: A.map(function (e) {
                                      return e.name;
                                    }),
                                  })
                                );
                              case 2:
                                if (!(t = e.sent).length) {
                                  e.next = 6;
                                  break;
                                }
                                return k(t), e.abrupt("return");
                              case 6:
                                k([]);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                });
              },
              [A]
            ),
            G = Fi(
              function () {
                var e = Ci(Yt);
                if (o.table.includes("post")) {
                  var t = e.findIndex(function (e) {
                    return "userId" === e.accessor;
                  });
                  e.splice(t, 1);
                } else if (o.table.includes("user")) {
                  var n = e.findIndex(function (e) {
                    return "postId" === e.accessor;
                  });
                  e.splice(n, 1);
                }
                var r = e.findIndex(function (e) {
                  return "actions" === e.accessor;
                });
                if (((e[r].title = ""), !A.length)) return e;
                var a = React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(y.M, {
                    icon: "close",
                    title: Xe.BULK_TASK.DELETE_SELECTED_ITEMS,
                    style: { minWidth: 40, width: 40 },
                    className: B ? "primary" : "danger",
                    busyIconSize: "100%",
                    onClick: F,
                    isBusy: U.length > 1,
                    disabled: U.length || B,
                  })
                );
                return (e[r].title = a), e;
              },
              [Yt, o.table, A, U, B, F]
            ),
            z = Fi(
              function () {
                return Oa("metadata_limit", o.limit, function (e, t) {
                  k([]), E({ limit: e, page: 1 }), j(e, t);
                });
              },
              [o.limit, E, j]
            ),
            Y = Fi(
              function () {
                var e = o.page,
                  t = o.limit,
                  n = o.filterBy,
                  r = o.hideUsedByWordPress,
                  a = i[n][r];
                return React.createElement(Ce.Q, {
                  currentPage: e,
                  limit: t,
                  total: a,
                  onClick: function (e) {
                    k([]), E({ page: e });
                  },
                });
              },
              [o.page, o.limit, i, E]
            ),
            W = Fi(
              function () {
                return { by: o.sort, accessor: o.accessor };
              },
              [o.accessor, o.sort]
            ),
            V = zi(
              function (e, t) {
                1 !== t.length
                  ? k(
                      e
                        ? n.map(function (e) {
                            return { name: e.id, info: e.info };
                          })
                        : []
                    )
                  : I(
                      e,
                      n.find(function (e) {
                        return e.id === t[0];
                      })
                    );
              },
              [I, n, A]
            );
          return (
            Gi(
              function () {
                k([]);
              },
              [W]
            ),
            React.createElement(
              d.N,
              null,
              React.createElement(
                d.Y,
                { minimal: !0 },
                React.createElement(
                  v.z,
                  {
                    busy: a,
                    title: Xe.SETTINGS.METADATA,
                    className: "primary",
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      },
                    },
                    React.createElement(
                      "div",
                      { style: { display: "flex" } },
                      React.createElement(
                        Ne.u,
                        {
                          name: "metadata_table",
                          style: { marginRight: "8px" },
                          scrolldown: !0,
                          value: o.table,
                          onChange: function (e) {
                            k([]), E({ table: e, page: 1 });
                          },
                        },
                        Object.keys(C).map(function (e) {
                          return React.createElement(Ne.j, {
                            value: C[e],
                            label: e,
                          });
                        })
                      )
                    ),
                    React.createElement(
                      "div",
                      { style: { display: "flex" } },
                      Y,
                      React.createElement(Le.z, {
                        icon: "replay",
                        color: "var(--neko-blue)",
                        onClick: D,
                      })
                    )
                  ),
                  React.createElement(ke.o, {
                    variant: "raw",
                    alternateRowColor: !0,
                    data: M,
                    columns: G,
                    selectedItems: N,
                    onSelect: function (e) {
                      return V(!0, e);
                    },
                    onUnselect: function (e) {
                      return V(!1, e);
                    },
                    sort: W,
                    onSortChange: function (e, t) {
                      return E({ accessor: e, sort: t });
                    },
                    filters: [{ accessor: "size", value: o.size }],
                    onFilterChange: function (e, t) {
                      return E(ki({}, e, null != t ? t : ""));
                    },
                  }),
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 10,
                      },
                    },
                    z,
                    Y
                  ),
                  React.createElement(
                    "div",
                    { style: ga },
                    React.createElement(Sa, {
                      name: "options_search",
                      value: o.search,
                      onChange: function (e) {
                        return E({ search: e, page: 1 });
                      },
                      onReset: function () {
                        return E({ search: "" });
                      },
                    })
                  )
                )
              ),
              L.TasksErrorModal
            )
          );
        };
        function Wi(e) {
          return (
            (Wi =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Wi(e)
          );
        }
        function Vi(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Ki(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Vi(Object(n), !0).forEach(function (t) {
                  Hi(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Vi(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Hi(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== Wi(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== Wi(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === Wi(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function qi(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Xi(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Qi(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ji(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            Qi(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Qi(e, t) {
          if (e) {
            if ("string" == typeof e) return Xi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Xi(e, t)
                : void 0
            );
          }
        }
        function Xi(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Zi = wp.element,
          $i = Zi.useMemo,
          ec = Zi.useState,
          tc = {
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: 38,
            marginRight: 10,
          },
          nc = {
            borderRadius: "1px 1px 0px 0px",
            background: "var(--neko-gray)",
            transition: "height 0.2s ease-out",
          },
          rc = {
            borderRadius: "1px 1px 0px 0px",
            background: "var(--neko-red)",
            transition: "height 0.2s ease-out",
          },
          ac = {
            borderRadius: "0px 0px 1px 1px",
            background: "var(--neko-green)",
            transition: "height 0.2s ease-out",
          },
          oc = {
            fontSize: 6,
            lineHeight: "10px",
            height: 5,
            textAlign: "center",
          },
          ic = {
            paddingLeft: 1,
            paddingRight: 1,
            width: 6.5,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            cursor: "pointer",
          },
          cc = {
            fontSize: 11,
            textAlign: "right",
            marginRight: 10,
            height: "100%",
            lineHeight: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          };
        const sc = function () {
          var e = Ji(ec(), 2),
            t = e[0],
            n = e[1],
            r = na().totalSizes,
            a = r.length < 3,
            o = Ji(ec("size"), 2),
            i = o[0],
            c = o[1],
            s = $i(
              function () {
                if (a) {
                  var e = [],
                    t = new Date();
                  t.setDate(t.getDate() - 7);
                  for (var n = 0; n < 8; n++) {
                    var o = t.toISOString().split("T")[0],
                      i = Math.floor(10 * Math.random()) + 530;
                    e.push({ date: o, size: i }), t.setDate(t.getDate() + 1);
                  }
                  return e;
                }
                return r;
              },
              [r]
            ),
            l = function (e) {
              return e > 0
                ? Math.log(1.2 + e)
                : e < 0
                ? -Math.log(1.2 + -1 * e)
                : 0;
            },
            u = $i(
              function () {
                var e = s.slice(-60),
                  t = null;
                e = e.map(function (e) {
                  var n = t ? ((e.size - t) / t) * 100 : 0,
                    r = l(n),
                    a = new Date(e.date).getDate(),
                    o = {
                      date: e.date.replaceAll("-", "/"),
                      day: a,
                      size: e.size,
                      change: Math.round(100 * n) / 100,
                      changeLog: r,
                    };
                  return (t = e.size), o;
                });
                var n = Math.min.apply(
                    Math,
                    qi(
                      e.map(function (e) {
                        return e.changeLog;
                      })
                    )
                  ),
                  r =
                    Math.max.apply(
                      Math,
                      qi(
                        e.map(function (e) {
                          return e.changeLog;
                        })
                      )
                    ) - n,
                  a = (100 * Math.abs(n)) / r;
                return (e = e.map(function (e) {
                  var t = r ? (100 * Math.abs(e.changeLog)) / r : 0;
                  return (
                    (t = Math.round(100 * t) / 100),
                    Ki(
                      Ki({}, e),
                      {},
                      {
                        height: t,
                        isUp: e.changeLog > 0,
                        heightSpace: r ? (e.changeLog > 0 ? a : a - t) : 32,
                      }
                    )
                  );
                }));
              },
              [s]
            ),
            f = $i(
              function () {
                var e = s.slice(-60),
                  t = null;
                e = e.map(function (e) {
                  var n = t ? ((e.size - t) / t) * 100 : 0,
                    r = l(n),
                    a = e.size,
                    o = l(a),
                    i = new Date(e.date).getDate(),
                    c = {
                      date: e.date.replaceAll("-", "/"),
                      day: i,
                      size: e.size,
                      value: a,
                      valueLog: o,
                      change: Math.round(100 * n) / 100,
                      changeLog: r,
                    };
                  return (t = e.size), c;
                });
                var n = Math.min.apply(
                    Math,
                    qi(
                      e.map(function (e) {
                        return e.value;
                      })
                    )
                  ),
                  r =
                    Math.max.apply(
                      Math,
                      qi(
                        e.map(function (e) {
                          return e.value;
                        })
                      )
                    ) - n;
                return (e = e.map(function (e) {
                  return Ki(
                    Ki({}, e),
                    {},
                    {
                      isUp: e.change > 0,
                      height: ((e.value - n) / r) * 80 + 20,
                      heightSpace: 0,
                      heightInPixels: 32,
                    }
                  );
                }));
              },
              [s]
            ),
            p = "size" === i ? f : u;
          return React.createElement(
            "div",
            {
              style: tc,
              onClick: function () {
                c("size" === i ? "change" : "size");
              },
            },
            t &&
              React.createElement(
                "div",
                { style: cc },
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "b",
                    null,
                    a
                      ? Xe.CHART_SIZES.THIS_IS_FAKE_DATA
                      : null == t
                      ? void 0
                      : t.date
                  ),
                  React.createElement("br", null),
                  a &&
                    React.createElement("span", null, "Come back in 3-4 days."),
                  !a &&
                    React.createElement(
                      "span",
                      null,
                      null == t ? void 0 : t.size,
                      " MB (",
                      null == t ? void 0 : t.change,
                      "%)"
                    )
                )
              ),
            p.map(function (e) {
              return React.createElement(
                "div",
                {
                  key: e.date,
                  onMouseEnter: function () {
                    n(e);
                  },
                  onMouseLeave: function () {
                    n();
                  },
                  style: Ki(
                    Ki({}, ic),
                    {},
                    {
                      background:
                        (null == e ? void 0 : e.date) ===
                        (null == t ? void 0 : t.date)
                          ? "lightgray"
                          : "inherit",
                    }
                  ),
                },
                React.createElement("div", {
                  className: "space-top",
                  style: { flex: "auto" },
                }),
                React.createElement("div", {
                  className: "space-value",
                  style: Ki(
                    Ki({}, a ? nc : e.isUp ? rc : ac),
                    {},
                    {
                      height: e.height
                        ? "".concat((e.height / 100) * 32, "px")
                        : 1,
                    }
                  ),
                }),
                React.createElement("div", {
                  className: "space-bottom",
                  style: {
                    width: 6,
                    height: "".concat((e.heightSpace / 100) * 32, "px"),
                  },
                }),
                React.createElement("div", { style: oc }, e.day)
              );
            })
          );
        };
        var lc;
        var uc = (0, G.Ay)(Ae.n)(
          lc ||
            (lc = (function (e, t) {
              return (
                t || (t = e.slice(0)),
                Object.freeze(
                  Object.defineProperties(e, {
                    raw: { value: Object.freeze(t) },
                  })
                )
              );
            })([
              "\n    width: 80vw;\n    max-width: 80vw !important;\n    max-height: 85vh;\n",
            ]))
        );
        function fc(e) {
          return (
            (fc =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            fc(e)
          );
        }
        function pc(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function mc(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? pc(Object(n), !0).forEach(function (t) {
                  dc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : pc(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function dc(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== fc(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== fc(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === fc(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function hc() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ hc =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == fc(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(fc(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function yc(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function vc(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                yc(o, r, a, i, c, "next", e);
              }
              function c(e) {
                yc(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function gc(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return bc(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return bc(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function bc(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Ec = wp.element,
          wc = Ec.useCallback,
          Tc = Ec.useEffect,
          _c = Ec.useState,
          Sc = ["ID", "post_date", "post_title", "post_content", "post_status"];
        function Oc(e) {
          return (
            (Oc =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Oc(e)
          );
        }
        function xc(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Lc(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Lc(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Lc(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Lc(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function Rc(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Ac(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Rc(Object(n), !0).forEach(function (t) {
                  kc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Rc(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function kc(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== Oc(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== Oc(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === Oc(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Cc() {
          return (
            (Cc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Cc.apply(this, arguments)
          );
        }
        var Nc = wp.element.useMemo;
        const Pc = function (e) {
          var t = (function (e) {
              var t = e.isOpen,
                n = e.tableName,
                r = e.onClose,
                a = gc(_c(), 2),
                o = a[0],
                i = a[1],
                c = gc(_c([]), 2),
                s = c[0],
                l = c[1],
                u = gc(_c([]), 2),
                f = u[0],
                p = u[1],
                m = gc(_c([]), 2),
                d = m[0],
                h = m[1],
                y = gc(_c([]), 2),
                v = y[0],
                b = y[1],
                E = gc(_c(0), 2),
                w = E[0],
                T = E[1],
                S = gc(_c(1), 2),
                O = S[0],
                x = S[1],
                R = gc(_c(!1), 2),
                A = R[0],
                k = R[1];
              Tc(
                function () {
                  n && U(o, n);
                },
                [n]
              ),
                Tc(
                  function () {
                    k(t);
                  },
                  [t]
                );
              var C = wc(
                  function () {
                    k(!1), r();
                  },
                  [r]
                ),
                N = wc(
                  (function () {
                    var e = vc(
                      hc().mark(function e(t) {
                        var n,
                          r,
                          a,
                          o = arguments;
                        return hc().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n =
                                      o.length > 1 && void 0 !== o[1]
                                        ? o[1]
                                        : 1),
                                    (e.prev = 1),
                                    (r = 10 * (n - 1)),
                                    (e.next = 5),
                                    (0, g.Tb)("".concat(_, "/table"), {
                                      json: { table: t, offset: r },
                                      nonce: L,
                                    })
                                  );
                                case 5:
                                  if (!(a = e.sent).success) {
                                    e.next = 10;
                                    break;
                                  }
                                  return e.abrupt("return", {
                                    entries: a.data,
                                    count: a.count,
                                  });
                                case 10:
                                  a.message && alert(a.message);
                                case 11:
                                  e.next = 16;
                                  break;
                                case 13:
                                  (e.prev = 13),
                                    (e.t0 = e.catch(1)),
                                    e.t0.message && alert(e.t0.message);
                                case 16:
                                  return e.abrupt("return", null);
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 13]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  []
                ),
                P = wc(function (e) {
                  var t = e.length
                      ? Object.keys(e.at(0)).map(function (e) {
                          var t = e.replace(/_/g, " ");
                          return {
                            accessor: e,
                            title: t
                              .replace(/^post/, "")
                              .replace(/\w\S*/g, function (e) {
                                return e.replace(/^\w/, function (e) {
                                  return e.toUpperCase();
                                });
                              }),
                            sortable: !1,
                            style: {
                              width: "auto",
                              maxWidth: "400px",
                              minWidth: "50px",
                            },
                          };
                        })
                      : [],
                    n = t.map(function (e) {
                      return {
                        label: e.title,
                        accessor: e.accessor,
                        checked: !0,
                      };
                    });
                  return (
                    t.length > 8 &&
                      (n = n.map(function (e) {
                        return Sc.includes(e.accessor)
                          ? mc(mc({}, e), {}, { checked: !0 })
                          : mc(mc({}, e), {}, { checked: !1 });
                      })),
                    n.filter(function (e) {
                      return e.checked;
                    }).length ||
                      (n = n.map(function (e, t) {
                        return mc(
                          mc({}, e),
                          {},
                          t < 8 ? { checked: !0 } : { checked: !1 }
                        );
                      })),
                    { tableColumns: t, tableColumnsFilter: n }
                  );
                }, []),
                I = wc(function (e, t) {
                  var n = t
                      .filter(function (e) {
                        return e.checked;
                      })
                      .map(function (e) {
                        return e.accessor;
                      }),
                    r = e.filter(function (e) {
                      return n.includes(e.accessor);
                    });
                  b(t), h(r);
                }, []),
                U = wc(
                  (function () {
                    var e = vc(
                      hc().mark(function e(t, n) {
                        var r, a, o, c, s, u;
                        return hc().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t !== n) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (e.next = 4), N(n);
                              case 4:
                                (r = e.sent),
                                  (a = r.entries),
                                  (o = r.count),
                                  (c = P(a)),
                                  (s = c.tableColumns),
                                  (u = c.tableColumnsFilter),
                                  x(1),
                                  i(n),
                                  T(o),
                                  l(a),
                                  p(s),
                                  I(s, u);
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [N, P]
                ),
                B = wc(
                  (function () {
                    var e = vc(
                      hc().mark(function e(t) {
                        var n, r;
                        return hc().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), N(o, t);
                              case 2:
                                (n = e.sent), (r = n.entries), x(t), l(r);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, N]
                );
              return {
                table: o,
                tableEntries: s,
                tableColumns: f,
                filteredTableColumns: d,
                tableColumnsFilter: v,
                tableCount: w,
                tablePage: O,
                open: A,
                onCloseTableModal: C,
                updateTablePage: B,
                updateTableColumnsFilter: I,
              };
            })(
              Ac(
                {},
                Cc(
                  {},
                  ((function (e) {
                    if (null == e)
                      throw new TypeError("Cannot destructure " + e);
                  })(e),
                  e)
                )
              )
            ),
            n = t.table,
            r = t.tableEntries,
            a = t.tableColumns,
            o = t.filteredTableColumns,
            i = t.tableColumnsFilter,
            c = t.tableCount,
            s = t.tablePage,
            l = t.open,
            u = t.onCloseTableModal,
            p = t.updateTablePage,
            m = t.updateTableColumnsFilter,
            d = Nc(
              function () {
                return React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                        flexWrap: "wrap",
                      },
                    },
                    i.map(function (e) {
                      return React.createElement(
                        "div",
                        { style: { marginRight: "8px" } },
                        React.createElement(f.R, {
                          name: e.accessor,
                          label: e.label,
                          checked: e.checked,
                          onChange: function (t, n) {
                            var r = i.findIndex(function (e) {
                                return e.accessor === n;
                              }),
                              o = xc(i);
                            (o[r] = Ac(Ac({}, e), {}, { checked: t })), m(a, o);
                          },
                        })
                      );
                    })
                  ),
                  React.createElement(
                    "div",
                    { style: { maxHeight: "60vh", overflowY: "auto" } },
                    React.createElement(
                      "div",
                      { style: { marginRight: 10 } },
                      r.length > 0
                        ? React.createElement(ke.o, {
                            columns: o,
                            selectedItems: [],
                            data: r.map(function (e) {
                              var t = Object.keys(e).map(function (t) {
                                var n = e[t];
                                return (
                                  "string" == typeof n &&
                                    n.length > 100 &&
                                    (n = React.createElement(
                                      React.Fragment,
                                      null,
                                      n.substring(0, 100) + "...",
                                      " ",
                                      React.createElement("br", null),
                                      React.createElement(
                                        "small",
                                        null,
                                        React.createElement(
                                          "a",
                                          {
                                            href: "#",
                                            onClick: function () {
                                              console.log("Content", e[t]);
                                            },
                                          },
                                          Xe.MODAL.WRITE_TO_BROWSER_CONSOLE
                                        )
                                      )
                                    )),
                                  kc({}, t, React.createElement("p", null, n))
                                );
                              });
                              return t.reduce(function (e, t) {
                                return Object.assign(e, t);
                              }, {});
                            }),
                          })
                        : React.createElement("p", null, Xe.MODAL.NO_DATA)
                    )
                  )
                );
              },
              [o, i, r]
            );
          return React.createElement(uc, {
            isOpen: l,
            onRequestClose: u,
            title: "".concat(Xe.COMMON.TABLE, ": ").concat(n),
            contentWidth: "100%",
            content: d,
            okButton: { label: Xe.COMMON.CLOSE, onClick: u },
            okOnEnter: !0,
            customButtons: React.createElement(
              "div",
              { style: { marginRight: "auto" } },
              React.createElement(Ce.Q, {
                currentPage: s,
                limit: 10,
                total: c,
                onClick: function (e) {
                  return p(e);
                },
              })
            ),
            customButtonsPosition: "left",
          });
        };
        function Ic(e) {
          return (
            (Ic =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Ic(e)
          );
        }
        function Uc() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Uc =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == Ic(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(Ic(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Bc(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        var Mc = wp.element.useCallback;
        const jc = function () {
          var e = na(),
            t = e.busy,
            n = e.busyAction,
            r = e.sweeperTasks,
            a = na(),
            o = a.resetOptions,
            i = a.updateOption,
            c = a.performNextTask,
            s = a.resetTasks,
            l = na().generateFakeData,
            u = Mc(
              function (e) {
                i({ param: { name: "sweeper_tasks", value: e } });
              },
              [i]
            ),
            f = (function () {
              var e,
                t =
                  ((e = Uc().mark(function e() {
                    return Uc().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), o();
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var o = e.apply(t, n);
                      function i(e) {
                        Bc(o, r, a, i, c, "next", e);
                      }
                      function c(e) {
                        Bc(o, r, a, i, c, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            p = n.some(function (e) {
              return "logs" === e.item;
            });
          return React.createElement(
            d.N,
            null,
            React.createElement(
              d.Y,
              { minimal: !0 },
              React.createElement(
                v.z,
                { className: "primary", busy: t || p },
                React.createElement(
                  y.M,
                  { onClick: c },
                  Xe.SETTINGS.PERFORM_NEXT_TASK
                ),
                React.createElement(
                  y.M,
                  { className: "danger", disabled: t, onClick: s },
                  Xe.SETTINGS.RESET_TASKS
                ),
                React.createElement(
                  y.M,
                  {
                    onClick: l,
                    isBusy: n.some(function (e) {
                      return "fakeData" === e.item;
                    }),
                  },
                  Xe.SETTINGS.GENERATE_FAKE_DATA
                ),
                React.createElement(
                  y.M,
                  { className: "danger", disabled: t, onClick: f },
                  Xe.SETTINGS.RESET_OPTIONS
                ),
                React.createElement(
                  "div",
                  {
                    style: {
                      color: "#8b8b8b",
                      overflowY: "auto",
                      marginTop: 10,
                      border: "0px solid #dedede",
                    },
                  },
                  React.createElement(Ue(), {
                    src: r,
                    name: "sweeper_tasks",
                    iconStyle: "circle",
                    collapseStringsAfterLength: 512,
                    enableClipboard: !1,
                    displayDataTypes: !1,
                    onEdit: function (e) {
                      return u(e.updated_src);
                    },
                  })
                )
              )
            )
          );
        };
        function Dc(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Fc(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Dc(Object(n), !0).forEach(function (t) {
                  zc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Dc(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Gc(e) {
          return (
            (Gc =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Gc(e)
          );
        }
        function zc(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== Gc(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== Gc(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === Gc(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Yc() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Yc =
            function () {
              return t;
            };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              c = new k(r || []);
            return a(i, "_invoke", { value: x(e, n, c) }), i;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            m = "suspendedYield",
            d = "executing",
            h = "completed",
            y = {};
          function v() {}
          function g() {}
          function b() {}
          var E = {};
          l(E, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            T = w && w(w(C([])));
          T && T !== n && r.call(T, i) && (E = T);
          var _ = (b.prototype = v.prototype = Object.create(E));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(a, o, i, c) {
              var s = f(e[a], e, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == Gc(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function a() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function x(t, n, r) {
            var a = p;
            return function (o, i) {
              if (a === d) throw new Error("Generator is already running");
              if (a === h) {
                if ("throw" === o) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = L(c, r);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === p) throw ((a = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = d;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? h : m), l.arg === y)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              a = t.iterator[r];
            if (a === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                y
              );
            var o = f(a, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function C(t) {
            if (t || "" === t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < t.length; )
                      if (r.call(t, a))
                        return (n.value = t[a]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(Gc(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            a(_, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            S(O.prototype),
            l(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new O(u(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            S(_),
            l(_, s, "Generator"),
            l(_, i, function () {
              return this;
            }),
            l(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function a(r, a) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"),
                      l = r.call(i, "finallyLoc");
                    if (s && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), A(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      A(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        }
        function Wc(e, t, n, r, a, o, i) {
          try {
            var c = e[o](i),
              s = c.value;
          } catch (e) {
            return void n(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function Vc(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Wc(o, r, a, i, c, "next", e);
              }
              function c(e) {
                Wc(o, r, a, i, c, "throw", e);
              }
              i(void 0);
            });
          };
        }
        function Kc(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  c = [],
                  s = !0,
                  l = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (l = !0), (a = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw a;
                  }
                }
                return c;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Hc(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Hc(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Hc(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var qc = wp.element,
          Jc = qc.useState,
          Qc = qc.useCallback,
          Xc = qc.useMemo;
        const Zc = function () {
          var e,
            t = na(),
            n = t.apiErrors,
            r = t.modals,
            a = t.totalSize,
            o = t.previousTotalSize,
            i = t.busyAction,
            c = t.loadEntryItemPage,
            l = t.loadEntryItemCount,
            u = t.loadEntryItemLimit,
            f = t.entriesTableColumns,
            v = t.hideMessage,
            E = t.moduleDevTools,
            T = t.entries,
            _ = t.plugins,
            S = t.selectedUsedBy,
            L = t.mode,
            R = t.delay,
            A = t.modulePosttypes,
            k = t.moduleTables,
            C = t.moduleOptions,
            N = t.moduleMetadata,
            P = t.moduleCronjobs,
            I = t.moduleCustomequeries,
            U = na(),
            B = U.toggleModal,
            M = U.updateClickedTabByIndex,
            j = U.deleteEntries,
            D = U.pushBusyCleanBulkTasks,
            F = U.getAutoCleanItems,
            G = U.resetAutoCleanItemsCount,
            z = U.popBusyCleanBulkTasks,
            Y = U.getOptionValue,
            W = U.setLoadEntryItemPage,
            V = U.getTotalDbSizes,
            K = U.setSelectedUsedBy,
            H = U.setLoadEntryItem,
            q = U.updateOption,
            J = Kc(Jc(), 2),
            Q = J[0],
            X = J[1],
            Z = Kc(Jc(0), 2),
            $ = Z[0],
            ee = Z[1],
            te = Kc(Jc(0), 2),
            ne = te[0],
            re = te[1],
            ae = Kc(Jc(""), 2),
            oe = ae[0],
            ie = ae[1],
            ce = Kc(Jc(!1), 2),
            se = ce[0],
            le = ce[1],
            ue = Kc(Jc(!1), 2),
            fe = ue[0],
            pe = ue[1],
            me = (0, Pe.XS)(),
            de = Xc(
              function () {
                if (null == a || !a.size || null == o || !o.size) return null;
                var e =
                  1e4 * (a.size > o.size ? o.size / a.size : a.size / o.size);
                return (
                  (e = Math.round(1e4 - e) / 100), a.size > o.size ? e : -1 * e
                );
              },
              [null == a ? void 0 : a.size, null == o ? void 0 : o.size]
            ),
            he = L === Xt.on.value,
            ye = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              (t = null !== t ? t : me.getErrorCount()) > 0 &&
                ie((0, g.g7)(Xe.BULK_TASK.FINAL_MESSAGE_WITH_ERROR, t)),
                me.reset(),
                X(),
                ee(0),
                re(0),
                G(e);
            },
            ve = (function () {
              var e = Vc(
                Yc().mark(function e() {
                  var t, n, r;
                  return Yc().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0),
                            D(),
                            le(!0),
                            X(Xe.BULK_TASK.GETTING_TASKS),
                            (e.next = 6),
                            F()
                          );
                        case 6:
                          if (
                            ((n = e.sent),
                            console.log("Tasks for Database Cleaner:", n),
                            n
                              .map(function (e) {
                                return e.times;
                              })
                              .reduce(function (e, t) {
                                return e + t;
                              }))
                          ) {
                            e.next = 15;
                            break;
                          }
                          return (
                            pe(!0), ye(n, t), z(), le(!1), e.abrupt("return")
                          );
                        case 15:
                          return (
                            console.log(T),
                            !0,
                            (r = []),
                            (e.next = 20),
                            rt(
                              500,
                              Vc(
                                Yc().mark(function e() {
                                  var t, a;
                                  return Yc().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          (t = Yc().mark(function e() {
                                            var t, o, i, c;
                                            return Yc().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    (t = n[a]),
                                                      (o = t.times),
                                                      (i = Yc().mark(function e(
                                                        n
                                                      ) {
                                                        var a;
                                                        return Yc().wrap(
                                                          function (e) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  (a =
                                                                    (function () {
                                                                      var e =
                                                                        Vc(
                                                                          Yc().mark(
                                                                            function e(
                                                                              r
                                                                            ) {
                                                                              var a;
                                                                              return Yc().wrap(
                                                                                function (
                                                                                  e
                                                                                ) {
                                                                                  for (;;)
                                                                                    switch (
                                                                                      (e.prev =
                                                                                        e.next)
                                                                                    ) {
                                                                                      case 0:
                                                                                        return (
                                                                                          X(
                                                                                            React.createElement(
                                                                                              "small",
                                                                                              null,
                                                                                              t.name
                                                                                            )
                                                                                          ),
                                                                                          ee(
                                                                                            function (
                                                                                              e
                                                                                            ) {
                                                                                              return (
                                                                                                e +
                                                                                                1
                                                                                              );
                                                                                            }
                                                                                          ),
                                                                                          (e.next = 4),
                                                                                          nt(
                                                                                            R
                                                                                          )
                                                                                        );
                                                                                      case 4:
                                                                                        return (
                                                                                          (e.next = 6),
                                                                                          j(
                                                                                            {
                                                                                              item: t.item,
                                                                                              signal:
                                                                                                r,
                                                                                              is_auto_clean: true,
                                                                                            }
                                                                                          )
                                                                                        );
                                                                                      case 6:
                                                                                        return (
                                                                                          (a =
                                                                                            e.sent)
                                                                                            .data
                                                                                            .finished &&
                                                                                            n +
                                                                                              1 <
                                                                                              o &&
                                                                                            me.setAlwaysSkip(),
                                                                                          e.abrupt(
                                                                                            "return",
                                                                                            a
                                                                                          )
                                                                                        );
                                                                                      case 9:
                                                                                      case "end":
                                                                                        return e.stop();
                                                                                    }
                                                                                },
                                                                                e
                                                                              );
                                                                            }
                                                                          )
                                                                        );
                                                                      return function (
                                                                        t
                                                                      ) {
                                                                        return e.apply(
                                                                          this,
                                                                          arguments
                                                                        );
                                                                      };
                                                                    })()),
                                                                    r.push(a);
                                                                case 2:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e
                                                        );
                                                      })),
                                                      (c = 0);
                                                  case 4:
                                                    if (!(c < o)) {
                                                      e.next = 9;
                                                      break;
                                                    }
                                                    return e.delegateYield(
                                                      i(c),
                                                      "t0",
                                                      6
                                                    );
                                                  case 6:
                                                    (c += 1), (e.next = 4);
                                                    break;
                                                  case 9:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })),
                                            (a = 0);
                                        case 2:
                                          if (!(a < n.length)) {
                                            e.next = 7;
                                            break;
                                          }
                                          return e.delegateYield(t(), "t0", 4);
                                        case 4:
                                          (a += 1), (e.next = 2);
                                          break;
                                        case 7:
                                          re(r.length);
                                        case 8:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            )
                          );
                        case 20:
                          return (
                            X(Xe.BULK_TASK.CLEANING_ITEMS),
                            (e.next = 23),
                            me.start(r)
                          );
                        case 23:
                          me.reset(),
                            (t += me.getErrorCount()),
                            ye(n, t),
                            z(),
                            le(!1);
                        case 28:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ge = Qc(function () {
              B({ modal: "loadEntry", enable: !1 }), H({ loadEntryItem: null });
            }, []),
            be = Qc(function () {
              B({ modal: "optionValue", enable: !1 }),
                H({ loadEntryItem: null });
            }, []),
            Ee = Qc(function () {
              B({ modal: "metadataValue", enable: !1 }),
                H({ loadEntryItem: null });
            }, []),
            we =
              (Qc(function (e) {
                Y({ optionName: e }), H({ loadEntryItem: e });
              }, []),
              Qc(
                (function () {
                  var e = Vc(
                    Yc().mark(function e(t) {
                      return Yc().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              q({ param: { name: "mode", value: t } });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                [q]
              ));
          return React.createElement(
            p.z,
            { nekoErrors: [n] },
            React.createElement(
              m.n,
              {
                title: ""
                  .concat(Xe.COMMON.PLUGIN_NAME, " | ")
                  .concat(Xe.COMMON.SETTINGS),
                subtitle: Xe.COMMON.BY_JORDY_MEOW,
              },
              React.createElement(
                "div",
                { style: { display: "flex", justifyContent: "flex-end" } },
                React.createElement(
                  y.M,
                  {
                    className: "header",
                    onClick: function () {
                      return window.open(
                        "https://meowapps.com/database-cleaner/tutorial/",
                        "_blank"
                      );
                    },
                  },
                  Xe.COMMON.TUTORIAL
                )
              )
            ),
            React.createElement(
              d.N,
              null,
              React.createElement(
                d.Y,
                { fullWidth: !0 },
                !v &&
                  React.createElement(
                    Se.L,
                    null,
                    React.createElement(
                      s.s,
                      { p: !0 },
                      React.createElement(
                        "p",
                        null,
                        (0, g.FE)(Xe.SETTINGS.INTRODUCTION)
                      )
                    )
                  ),
                React.createElement(
                  "div",
                  { style: { marginBottom: "30px" } },
                  React.createElement(
                    Oe.V,
                    { style: { alignItems: "center" } },
                    !Q &&
                      React.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          },
                        },
                        React.createElement(
                          "div",
                          { style: { display: "flex", alignItems: "center" } },
                          React.createElement(
                            y.M,
                            { icon: "play", disabled: se, onClick: ve },
                            Xe.SETTINGS.AUTO_CLEAN
                          ),
                          React.createElement(xe.S, {
                            onLabel: Xt.on.label,
                            offLabel: Xt.off.label,
                            onValue: Xt.on.value,
                            offValue: Xt.off.value,
                            onBackgroundColor: "var(--neko-purple)",
                            offBackgroundColor: "var(--neko-green)",
                            width: "85px",
                            height: "30px",
                            style: { marginLeft: 5 },
                            onChange: we,
                            checked: he,
                          })
                        ),
                        React.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              margin: "-14px 0 -12px 0",
                            },
                          },
                          React.createElement(sc, null),
                          React.createElement(
                            "div",
                            { style: { textAlign: "right" } },
                            React.createElement(
                              s.s,
                              {
                                p: !0,
                                style: {
                                  fontSize: 10,
                                  margin: 0,
                                  color: "var(--neko-gray-60)",
                                  lineHeight: 1,
                                },
                              },
                              Xe.SETTINGS.TODAY,
                              React.createElement(
                                s.s,
                                {
                                  style: {
                                    fontSize: 10,
                                    color:
                                      de > 0
                                        ? "var(--neko-red)"
                                        : "var(--neko-green)",
                                    marginLeft: "2px",
                                  },
                                },
                                "(",
                                de > 0 ? "+" : de < 0 ? "-" : "",
                                Math.abs(de),
                                "%)"
                              )
                            ),
                            React.createElement(
                              s.s,
                              {
                                p: !0,
                                style: {
                                  fontSize: 22,
                                  fontWeight: "bold",
                                  margin: 0,
                                  lineHeight: 1,
                                },
                              },
                              it(null == a ? void 0 : a.size)
                            )
                          ),
                          React.createElement(Le.z, {
                            icon: "replay",
                            width: 20,
                            height: 20,
                            containerStyle: {
                              alignSelf: "end",
                              padding: "0 5px 5px 8px",
                            },
                            color: "var(--neko-blue)",
                            spinning: i.some(function (e) {
                              return e.item === Pt;
                            }),
                            onClick: function () {
                              return V();
                            },
                          }),
                          React.createElement(Le.z, {
                            icon: "database",
                            width: 36,
                            height: 36,
                            style: { marginLeft: 0 },
                          })
                        )
                      ),
                    Q &&
                      React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                          "div",
                          {
                            style:
                              ((e = {
                                display: "flex",
                                padding: "0 10px",
                                flexDirection: "column",
                                fontWeight: 600,
                                width: 180,
                              }),
                              zc(e, "flexDirection", "column"),
                              zc(e, "height", 30),
                              zc(e, "lineHeight", "16px"),
                              zc(e, "justifyContent", "center"),
                              zc(e, "textTransform", "uppercase"),
                              e),
                          },
                          ne > 0 &&
                            React.createElement(
                              "div",
                              { style: { color: "#144675", fontSize: 17 } },
                              ""
                                .concat(Xe.BULK_TASK.STEP, " ")
                                .concat($, "/")
                                .concat(ne)
                            ),
                          React.createElement(
                            "div",
                            { style: { color: "#007bba" } },
                            Q
                          )
                        ),
                        React.createElement(
                          "div",
                          { style: { flex: 1 } },
                          React.createElement(Re.j, {
                            status: function (e) {
                              return me.max
                                ? "".concat(e, "%")
                                : React.createElement(Le.z, {
                                    icon: "replay",
                                    height: 16,
                                    spinning: !0,
                                  });
                            },
                            busy: me.busy,
                            value: me.value,
                            max: me.max,
                            onStopClick: me.stop,
                          })
                        )
                      )
                  )
                ),
                React.createElement(
                  h._,
                  {
                    keepTabOnReload: !0,
                    onChange: function (e, t, n) {
                      M(t.title);
                    },
                  },
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.WORDPRESS_CORE },
                    React.createElement(_o, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.POST_TYPES, hidden: !he || !A },
                    React.createElement(Bo, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.TABLES, hidden: he && !k },
                    React.createElement(ao, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.OPTIONS, hidden: !he || !C },
                    React.createElement(qo, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.METADATA, hidden: !he || !N },
                    React.createElement(Yi, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.CRON_JOBS, hidden: !he || !P },
                    React.createElement(li, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.CUSTOM_QUERIES, hidden: !he || !I },
                    React.createElement(Ri, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.SETTINGS_LOGS },
                    React.createElement(Xo, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.COMMON.DEV_TOOLS, hidden: !E },
                    React.createElement(jc, null)
                  ),
                  React.createElement(
                    h.V,
                    { title: Xe.SETTINGS.LICENSE },
                    React.createElement(qe, {
                      domain: w,
                      prefix: b,
                      isPro: O,
                      isRegistered: x,
                    })
                  )
                )
              )
            ),
            React.createElement(Ae.n, {
              isOpen: !!r.deleteAll.enable,
              onRequestClose: function () {
                return B({ modal: "deleteAll", enable: !1 });
              },
              title: r.deleteAll.title,
              content: Xe.MODAL.ARE_YOU_SURE,
              okButton: {
                onClick: function () {
                  r.deleteAll.onNext(), B({ modal: "deleteAll", enable: !1 });
                },
              },
              cancelButton: {
                onClick: function () {
                  return B({ modal: "deleteAll", enable: !1 });
                },
              },
              okOnEnter: !0,
            }),
            React.createElement(Ae.n, {
              isOpen: oe,
              title: Xe.MODAL.FINISHED,
              okButton: {
                label: Xe.COMMON.CLOSE,
                onClick: function () {
                  ie(""), me.reset();
                },
              },
              content: oe,
            }),
            React.createElement(uc, {
              isOpen: !!r.loadEntry.enable,
              onRequestClose: ge,
              title: r.loadEntry.title,
              contentWidth: "100%",
              content: React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  { style: { maxHeight: "65vh", overflowY: "auto" } },
                  React.createElement(
                    "div",
                    { style: { marginRight: 10 } },
                    T.length > 0
                      ? React.createElement(ke.o, {
                          columns: f,
                          selectedItems: [],
                          data:
                            (null == T ? void 0 : T.map) &&
                            T.map(function (e) {
                              return Object.keys(e)
                                .filter(function (e) {
                                  return Zt.includes(e);
                                })
                                .map(function (t) {
                                  var n = e[t];
                                  return (
                                    "string" == typeof n &&
                                      n.length > 100 &&
                                      (n = React.createElement(
                                        React.Fragment,
                                        null,
                                        n.substr(0, 100) + "...",
                                        " ",
                                        React.createElement("br", null),
                                        React.createElement(
                                          "small",
                                          null,
                                          React.createElement(
                                            "a",
                                            {
                                              href: "#",
                                              onClick: function () {
                                                console.log("Content", e[t]);
                                              },
                                            },
                                            Xe.MODAL.WRITE_TO_BROWSER_CONSOLE
                                          )
                                        )
                                      )),
                                    zc({}, t, React.createElement("p", null, n))
                                  );
                                })
                                .reduce(function (e, t) {
                                  return Object.assign(e, t);
                                }, {});
                            }),
                        })
                      : React.createElement("p", null, Xe.MODAL.NO_ENTRIES)
                  )
                )
              ),
              okButton: { label: Xe.COMMON.CLOSE, onClick: ge },
              okOnEnter: !0,
              customButtons: React.createElement(
                "div",
                { style: { marginRight: "auto" } },
                React.createElement(Ce.Q, {
                  currentPage: c,
                  limit: u,
                  total: l,
                  onClick: function (e) {
                    return W(e);
                  },
                })
              ),
              customButtonsPosition: "left",
            }),
            React.createElement(Pc, {
              isOpen: r.table.enable,
              tableName: r.table.data.tableName,
              onClose: function () {
                return B({
                  modal: "table",
                  enable: !1,
                  data: { tableName: "" },
                });
              },
            }),
            React.createElement(uc, {
              isOpen: !!r.optionValue.enable,
              onRequestClose: be,
              title: r.optionValue.title,
              contentWidth: "100%",
              content: React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  {
                    style: {
                      maxHeight: "65vh",
                      overflowY: "auto",
                      padding: 10,
                    },
                  },
                  React.createElement(Ue(), {
                    src: "object" === Gc(T) ? T : { text: T },
                    name: "data",
                    iconStyle: "circle",
                    collapseStringsAfterLength: 512,
                    enableClipboard: !1,
                    displayDataTypes: !1,
                  })
                )
              ),
              okButton: { onClick: be },
              okOnEnter: !0,
              customButtonsPosition: "left",
            }),
            React.createElement(uc, {
              isOpen: !!r.metadataValue.enable,
              onRequestClose: Ee,
              title: r.metadataValue.title,
              contentWidth: "100%",
              content: React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  {
                    style: {
                      maxHeight: "65vh",
                      overflowY: "auto",
                      padding: 10,
                    },
                  },
                  React.createElement(Ue(), {
                    src: "object" === Gc(T) ? T : { text: T },
                    name: "data",
                    iconStyle: "circle",
                    collapseStringsAfterLength: 512,
                    enableClipboard: !1,
                    displayDataTypes: !1,
                  })
                )
              ),
              okButton: { onClick: Ee },
              okOnEnter: !0,
              customButtonsPosition: "left",
            }),
            React.createElement(Ae.n, {
              isOpen: !!r.usedBy.enable,
              onRequestClose: function () {
                B({ modal: "usedBy", enable: !1 }),
                  K({ items: [], value: "unknown" });
              },
              title: r.usedBy.title,
              content: React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  Ne.u,
                  {
                    name: "used-by",
                    scrolldown: !0,
                    value: S.value,
                    textFiltering: !0,
                    onChange: function (e) {
                      return K(Fc(Fc({}, S), {}, { value: e }));
                    },
                    style: { maxHeight: "200px", marginBottom: 20 },
                  },
                  React.createElement(Ne.j, {
                    value: "unknown",
                    label: "Unknown",
                  }),
                  _.map(function (e) {
                    return React.createElement(Ne.j, {
                      value: e.slug,
                      label: e.name,
                    });
                  })
                ),
                "unknown" !== S.value &&
                  React.createElement(
                    "div",
                    { style: { marginTop: -15, marginBottom: 15 } },
                    React.createElement(
                      "small",
                      null,
                      Xe.MODAL.SELECTED_PLUGIN_SLUG,
                      ": ",
                      S.value
                    )
                  ),
                !O &&
                  React.createElement(
                    s.s,
                    null,
                    (0, g.FE)(Xe.MODAL.USED_BY_RECOMMEND_PRO_MESSAGE)
                  ),
                O &&
                  React.createElement(
                    s.s,
                    null,
                    (0, g.FE)(Xe.MODAL.USED_BY_DESCRIPTION)
                  )
              ),
              cancelButton: {
                label: Xe.MODAL.UNASSIGN,
                onClick: function () {
                  r.usedBy.onNext({ items: S.items, value: "unknown" }),
                    B({ modal: "usedBy", enable: !1 }),
                    K({ items: [], value: "unknown" });
                },
              },
              okButton: {
                label: Xe.MODAL.ASSIGN,
                onClick: function () {
                  r.usedBy.onNext(S),
                    B({ modal: "usedBy", enable: !1 }),
                    K({ items: [], value: "unknown" });
                },
              },
              okOnEnter: !0,
            }),
            React.createElement(Ae.n, {
              isOpen: fe,
              onRequestClose: function () {
                return pe(!1);
              },
              title: Xe.MODAL.EVERYTHING_CLEAN,
              content: (0, g.FE)(Xe.MODAL.EVERYTHING_CLEAN_INFO),
              okButton: {
                onClick: function () {
                  return pe(!1);
                },
              },
            }),
            me.TasksErrorModal
          );
        };
        var $c = wp.element.render,
          es = new r.E({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: !1,
                refetchOnMount: !1,
                retry: !1,
                placeholderData: function (e) {
                  return e;
                },
              },
            },
          });
        document.addEventListener("DOMContentLoaded", function (e) {
          var t = document.getElementById("dbclnr-admin-settings");
          t &&
            $c(
              React.createElement(
                a.Ht,
                { client: es },
                React.createElement(
                  ta,
                  null,
                  React.createElement(o.A, null, React.createElement(Zc, null))
                )
              ),
              t
            );
          var n = document.getElementById("meow-common-dashboard");
          n &&
            $c(
              React.createElement(
                a.Ht,
                { client: es },
                React.createElement(o.A, null, React.createElement(_e, null))
              ),
              n
            );
        });
      },
      1594: (e) => {
        e.exports = React;
      },
      5206: (e) => {
        e.exports = ReactDOM;
      },
    },
    n = {};
  function r(e) {
    var a = n[e];
    if (void 0 !== a) return a.exports;
    var o = (n[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.m = t),
    (r.amdO = {}),
    (e = []),
    (r.O = (t, n, a, o) => {
      if (!n) {
        var i = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, a, o] = e[u], c = !0, s = 0; s < n.length; s++)
            (!1 & o || i >= o) && Object.keys(r.O).every((e) => r.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((c = !1), o < i && (i = o));
          if (c) {
            e.splice(u--, 1);
            var l = a();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      o = o || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
      e[u] = [n, a, o];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 57: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var a,
            o,
            [i, c, s] = n,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in c) r.o(c, a) && (r.m[a] = c[a]);
            if (s) var u = s(r);
          }
          for (t && t(n); l < i.length; l++)
            (o = i[l]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(u);
        },
        n = (self.wpJsonWpmc = self.wpJsonWpmc || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (r.nc = void 0);
  var a = r.O(void 0, [121], () => r(3324));
  a = r.O(a);
})();
//# sourceMappingURL=index.js.map
