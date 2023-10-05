import Re, { useEffect as ot, useState as Ze, forwardRef as ga, useCallback as Jt, useRef as ya } from "react";
import { useNavigate as fn, useParams as ba } from "react-router-dom";
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var er = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function ka() {
  if (Zr)
    return Ot;
  Zr = 1;
  var e = Re, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, s, u) {
    var c, f = {}, m = null, p = null;
    u !== void 0 && (m = "" + u), s.key !== void 0 && (m = "" + s.key), s.ref !== void 0 && (p = s.ref);
    for (c in s)
      r.call(s, c) && !o.hasOwnProperty(c) && (f[c] = s[c]);
    if (a && a.defaultProps)
      for (c in s = a.defaultProps, s)
        f[c] === void 0 && (f[c] = s[c]);
    return { $$typeof: n, type: a, key: m, ref: p, props: f, _owner: i.current };
  }
  return Ot.Fragment = t, Ot.jsx = l, Ot.jsxs = l, Ot;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function wa() {
  return ei || (ei = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Re, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = Symbol.iterator, y = "@@iterator";
    function b(k) {
      if (k === null || typeof k != "object")
        return null;
      var O = d && k[d] || k[y];
      return typeof O == "function" ? O : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(k) {
      {
        for (var O = arguments.length, L = new Array(O > 1 ? O - 1 : 0), X = 1; X < O; X++)
          L[X - 1] = arguments[X];
        C("error", k, L);
      }
    }
    function C(k, O, L) {
      {
        var X = w.ReactDebugCurrentFrame, fe = X.getStackAddendum();
        fe !== "" && (O += "%s", L = L.concat([fe]));
        var ye = L.map(function(ae) {
          return String(ae);
        });
        ye.unshift("Warning: " + O), Function.prototype.apply.call(console[k], console, ye);
      }
    }
    var j = !1, v = !1, x = !1, N = !1, q = !1, te;
    te = Symbol.for("react.module.reference");
    function E(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === o || q || k === i || k === u || k === c || N || k === p || j || v || x || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === f || k.$$typeof === l || k.$$typeof === a || k.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === te || k.getModuleId !== void 0));
    }
    function _(k, O, L) {
      var X = k.displayName;
      if (X)
        return X;
      var fe = O.displayName || O.name || "";
      return fe !== "" ? L + "(" + fe + ")" : L;
    }
    function z(k) {
      return k.displayName || "Context";
    }
    function Q(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case a:
            var O = k;
            return z(O) + ".Consumer";
          case l:
            var L = k;
            return z(L._context) + ".Provider";
          case s:
            return _(k, k.render, "ForwardRef");
          case f:
            var X = k.displayName || null;
            return X !== null ? X : Q(k.type) || "Memo";
          case m: {
            var fe = k, ye = fe._payload, ae = fe._init;
            try {
              return Q(ae(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, G = 0, W, le, we, xe, h, F, M;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function U() {
      {
        if (G === 0) {
          W = console.log, le = console.info, we = console.warn, xe = console.error, h = console.group, F = console.groupCollapsed, M = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        G++;
      }
    }
    function ne() {
      {
        if (G--, G === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, k, {
              value: W
            }),
            info: Z({}, k, {
              value: le
            }),
            warn: Z({}, k, {
              value: we
            }),
            error: Z({}, k, {
              value: xe
            }),
            group: Z({}, k, {
              value: h
            }),
            groupCollapsed: Z({}, k, {
              value: F
            }),
            groupEnd: Z({}, k, {
              value: M
            })
          });
        }
        G < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $ = w.ReactCurrentDispatcher, V;
    function Y(k, O, L) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (fe) {
            var X = fe.stack.trim().match(/\n( *(at )?)/);
            V = X && X[1] || "";
          }
        return `
` + V + k;
      }
    }
    var re = !1, K;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ee();
    }
    function D(k, O) {
      if (!k || re)
        return "";
      {
        var L = K.get(k);
        if (L !== void 0)
          return L;
      }
      var X;
      re = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = $.current, $.current = null, U();
      try {
        if (O) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (Qe) {
              X = Qe;
            }
            Reflect.construct(k, [], ae);
          } else {
            try {
              ae.call();
            } catch (Qe) {
              X = Qe;
            }
            k.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            X = Qe;
          }
          k();
        }
      } catch (Qe) {
        if (Qe && X && typeof Qe.stack == "string") {
          for (var oe = Qe.stack.split(`
`), Oe = X.stack.split(`
`), Se = oe.length - 1, Ce = Oe.length - 1; Se >= 1 && Ce >= 0 && oe[Se] !== Oe[Ce]; )
            Ce--;
          for (; Se >= 1 && Ce >= 0; Se--, Ce--)
            if (oe[Se] !== Oe[Ce]) {
              if (Se !== 1 || Ce !== 1)
                do
                  if (Se--, Ce--, Ce < 0 || oe[Se] !== Oe[Ce]) {
                    var Me = `
` + oe[Se].replace(" at new ", " at ");
                    return k.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", k.displayName)), typeof k == "function" && K.set(k, Me), Me;
                  }
                while (Se >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        re = !1, $.current = ye, ne(), Error.prepareStackTrace = fe;
      }
      var gt = k ? k.displayName || k.name : "", Qr = gt ? Y(gt) : "";
      return typeof k == "function" && K.set(k, Qr), Qr;
    }
    function Pe(k, O, L) {
      return D(k, !1);
    }
    function B(k) {
      var O = k.prototype;
      return !!(O && O.isReactComponent);
    }
    function _e(k, O, L) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return D(k, B(k));
      if (typeof k == "string")
        return Y(k);
      switch (k) {
        case u:
          return Y("Suspense");
        case c:
          return Y("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case s:
            return Pe(k.render);
          case f:
            return _e(k.type, O, L);
          case m: {
            var X = k, fe = X._payload, ye = X._init;
            try {
              return _e(ye(fe), O, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, nt = {}, Tt = w.ReactDebugCurrentFrame;
    function dt(k) {
      if (k) {
        var O = k._owner, L = _e(k.type, k._source, O ? O.type : null);
        Tt.setExtraStackFrame(L);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Vt(k, O, L, X, fe) {
      {
        var ye = Function.call.bind(Ne);
        for (var ae in k)
          if (ye(k, ae)) {
            var oe = void 0;
            try {
              if (typeof k[ae] != "function") {
                var Oe = Error((X || "React class") + ": " + L + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              oe = k[ae](O, ae, X, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              oe = Se;
            }
            oe && !(oe instanceof Error) && (dt(fe), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", L, ae, typeof oe), dt(null)), oe instanceof Error && !(oe.message in nt) && (nt[oe.message] = !0, dt(fe), A("Failed %s type: %s", L, oe.message), dt(null));
          }
      }
    }
    var Wt = Array.isArray;
    function At(k) {
      return Wt(k);
    }
    function Sn(k) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, L = O && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return L;
      }
    }
    function Cn(k) {
      try {
        return Yt(k), !1;
      } catch {
        return !0;
      }
    }
    function Yt(k) {
      return "" + k;
    }
    function Gt(k) {
      if (Cn(k))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sn(k)), Yt(k);
    }
    var S = w.ReactCurrentOwner, I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, H, ue, ce;
    ce = {};
    function je(k) {
      if (Ne.call(k, "ref")) {
        var O = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function We(k) {
      if (Ne.call(k, "key")) {
        var O = Object.getOwnPropertyDescriptor(k, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function He(k, O) {
      if (typeof k.ref == "string" && S.current && O && S.current.stateNode !== O) {
        var L = Q(S.current.type);
        ce[L] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(S.current.type), k.ref), ce[L] = !0);
      }
    }
    function st(k, O) {
      {
        var L = function() {
          H || (H = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function ut(k, O) {
      {
        var L = function() {
          ue || (ue = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var ve = function(k, O, L, X, fe, ye, ae) {
      var oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: k,
        key: O,
        ref: L,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return oe._store = {}, Object.defineProperty(oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(oe.props), Object.freeze(oe)), oe;
    };
    function Pt(k, O, L, X, fe) {
      {
        var ye, ae = {}, oe = null, Oe = null;
        L !== void 0 && (Gt(L), oe = "" + L), We(O) && (Gt(O.key), oe = "" + O.key), je(O) && (Oe = O.ref, He(O, fe));
        for (ye in O)
          Ne.call(O, ye) && !I.hasOwnProperty(ye) && (ae[ye] = O[ye]);
        if (k && k.defaultProps) {
          var Se = k.defaultProps;
          for (ye in Se)
            ae[ye] === void 0 && (ae[ye] = Se[ye]);
        }
        if (oe || Oe) {
          var Ce = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          oe && st(ae, Ce), Oe && ut(ae, Ce);
        }
        return ve(k, oe, Oe, fe, X, S.current, ae);
      }
    }
    var De = w.ReactCurrentOwner, Wr = w.ReactDebugCurrentFrame;
    function mt(k) {
      if (k) {
        var O = k._owner, L = _e(k.type, k._source, O ? O.type : null);
        Wr.setExtraStackFrame(L);
      } else
        Wr.setExtraStackFrame(null);
    }
    var Tn;
    Tn = !1;
    function An(k) {
      return typeof k == "object" && k !== null && k.$$typeof === n;
    }
    function Yr() {
      {
        if (De.current) {
          var k = Q(De.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function sa(k) {
      {
        if (k !== void 0) {
          var O = k.fileName.replace(/^.*[\\\/]/, ""), L = k.lineNumber;
          return `

Check your code at ` + O + ":" + L + ".";
        }
        return "";
      }
    }
    var Gr = {};
    function ua(k) {
      {
        var O = Yr();
        if (!O) {
          var L = typeof k == "string" ? k : k.displayName || k.name;
          L && (O = `

Check the top-level render call using <` + L + ">.");
        }
        return O;
      }
    }
    function Jr(k, O) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var L = ua(O);
        if (Gr[L])
          return;
        Gr[L] = !0;
        var X = "";
        k && k._owner && k._owner !== De.current && (X = " It was passed a child from " + Q(k._owner.type) + "."), mt(k), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, X), mt(null);
      }
    }
    function Kr(k, O) {
      {
        if (typeof k != "object")
          return;
        if (At(k))
          for (var L = 0; L < k.length; L++) {
            var X = k[L];
            An(X) && Jr(X, O);
          }
        else if (An(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var fe = b(k);
          if (typeof fe == "function" && fe !== k.entries)
            for (var ye = fe.call(k), ae; !(ae = ye.next()).done; )
              An(ae.value) && Jr(ae.value, O);
        }
      }
    }
    function ca(k) {
      {
        var O = k.type;
        if (O == null || typeof O == "string")
          return;
        var L;
        if (typeof O == "function")
          L = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          L = O.propTypes;
        else
          return;
        if (L) {
          var X = Q(O);
          Vt(L, k.props, "prop", X, k);
        } else if (O.PropTypes !== void 0 && !Tn) {
          Tn = !0;
          var fe = Q(O);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fa(k) {
      {
        for (var O = Object.keys(k.props), L = 0; L < O.length; L++) {
          var X = O[L];
          if (X !== "children" && X !== "key") {
            mt(k), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), mt(null);
            break;
          }
        }
        k.ref !== null && (mt(k), A("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    function Xr(k, O, L, X, fe, ye) {
      {
        var ae = E(k);
        if (!ae) {
          var oe = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = sa(fe);
          Oe ? oe += Oe : oe += Yr();
          var Se;
          k === null ? Se = "null" : At(k) ? Se = "array" : k !== void 0 && k.$$typeof === n ? (Se = "<" + (Q(k.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof k, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, oe);
        }
        var Ce = Pt(k, O, L, fe, ye);
        if (Ce == null)
          return Ce;
        if (ae) {
          var Me = O.children;
          if (Me !== void 0)
            if (X)
              if (At(Me)) {
                for (var gt = 0; gt < Me.length; gt++)
                  Kr(Me[gt], k);
                Object.freeze && Object.freeze(Me);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kr(Me, k);
        }
        return k === r ? fa(Ce) : ca(Ce), Ce;
      }
    }
    function pa(k, O, L) {
      return Xr(k, O, L, !0);
    }
    function ha(k, O, L) {
      return Xr(k, O, L, !1);
    }
    var da = ha, ma = pa;
    Rt.Fragment = r, Rt.jsx = da, Rt.jsxs = ma;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? er.exports = ka() : er.exports = wa();
var P = er.exports;
const yt = ({ href: e, title: n, className: t }) => /* @__PURE__ */ P.jsx("a", { className: `${t} text-zinc-300 hover:text-zinc-100 transition ease-in-out`, href: e, target: "_blank", rel: "noreferrer", children: n });
function wr() {
  return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center w-full font-light text-sm", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ P.jsx(yt, { href: "mailto:hello@quibbble.com", title: "Contact" }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx(yt, { href: "https://www.buymeacoffee.com/quibbble", title: "Support" }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx(yt, { href: "https://discord.gg/VKvjutuhUp", title: "Discord" }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx(yt, { href: "https://github.com/quibbble", title: "Github" }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx(yt, { href: "https://status.quibbble.com", title: "Status" })
    ] }),
    /* @__PURE__ */ P.jsxs("p", { className: "mt-4 text-zinc-300 flex", children: [
      "Made with ♥ by ",
      /* @__PURE__ */ P.jsx(yt, { className: "underline", href: "https://chrisfregly.com", title: " Chris Fregly" })
    ] })
  ] });
}
function Co(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: xa } = Object.prototype, { getPrototypeOf: xr } = Object, pn = ((e) => (n) => {
  const t = xa.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (n) => pn(n) === e), hn = (e) => (n) => typeof n === e, { isArray: Et } = Array, zt = hn("undefined");
function va(e) {
  return e !== null && !zt(e) && e.constructor !== null && !zt(e.constructor) && Be(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const To = Ke("ArrayBuffer");
function Ea(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && To(e.buffer), n;
}
const Sa = hn("string"), Be = hn("function"), Ao = hn("number"), dn = (e) => e !== null && typeof e == "object", Ca = (e) => e === !0 || e === !1, tn = (e) => {
  if (pn(e) !== "object")
    return !1;
  const n = xr(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ta = Ke("Date"), Aa = Ke("File"), Pa = Ke("Blob"), Oa = Ke("FileList"), Ra = (e) => dn(e) && Be(e.pipe), Fa = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || Be(e.append) && ((n = pn(e)) === "formdata" || // detect form-data instance
  n === "object" && Be(e.toString) && e.toString() === "[object FormData]"));
}, Ia = Ke("URLSearchParams"), _a = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $t(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Et(e))
    for (r = 0, i = e.length; r < i; r++)
      n.call(null, e[r], r, e);
  else {
    const o = t ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let a;
    for (r = 0; r < l; r++)
      a = o[r], n.call(null, e[a], a, e);
  }
}
function Po(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, i;
  for (; r-- > 0; )
    if (i = t[r], n === i.toLowerCase())
      return i;
  return null;
}
const Oo = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ro = (e) => !zt(e) && e !== Oo;
function tr() {
  const { caseless: e } = Ro(this) && this || {}, n = {}, t = (r, i) => {
    const o = e && Po(n, i) || i;
    tn(n[o]) && tn(r) ? n[o] = tr(n[o], r) : tn(r) ? n[o] = tr({}, r) : Et(r) ? n[o] = r.slice() : n[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && $t(arguments[r], t);
  return n;
}
const ja = (e, n, t, { allOwnKeys: r } = {}) => ($t(n, (i, o) => {
  t && Be(i) ? e[o] = Co(i, t) : e[o] = i;
}, { allOwnKeys: r }), e), Da = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), za = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, La = (e, n, t, r) => {
  let i, o, l;
  const a = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      l = i[o], (!r || r(l, e, n)) && !a[l] && (n[l] = e[l], a[l] = !0);
    e = t !== !1 && xr(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, Na = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, Ma = (e) => {
  if (!e)
    return null;
  if (Et(e))
    return e;
  let n = e.length;
  if (!Ao(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, $a = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && xr(Uint8Array)), Ba = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    n.call(e, o[0], o[1]);
  }
}, Ua = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, qa = Ke("HTMLFormElement"), Ha = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, i) {
    return r.toUpperCase() + i;
  }
), ti = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), Va = Ke("RegExp"), Fo = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  $t(t, (i, o) => {
    let l;
    (l = n(i, o, e)) !== !1 && (r[o] = l || i);
  }), Object.defineProperties(e, r);
}, Wa = (e) => {
  Fo(e, (n, t) => {
    if (Be(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (Be(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ya = (e, n) => {
  const t = {}, r = (i) => {
    i.forEach((o) => {
      t[o] = !0;
    });
  };
  return Et(e) ? r(e) : r(String(e).split(n)), t;
}, Ga = () => {
}, Ja = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Pn = "abcdefghijklmnopqrstuvwxyz", ni = "0123456789", Io = {
  DIGIT: ni,
  ALPHA: Pn,
  ALPHA_DIGIT: Pn + Pn.toUpperCase() + ni
}, Ka = (e = 16, n = Io.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function Xa(e) {
  return !!(e && Be(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Qa = (e) => {
  const n = new Array(10), t = (r, i) => {
    if (dn(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[i] = r;
        const o = Et(r) ? [] : {};
        return $t(r, (l, a) => {
          const s = t(l, i + 1);
          !zt(s) && (o[a] = s);
        }), n[i] = void 0, o;
      }
    }
    return r;
  };
  return t(e, 0);
}, Za = Ke("AsyncFunction"), es = (e) => e && (dn(e) || Be(e)) && Be(e.then) && Be(e.catch), T = {
  isArray: Et,
  isArrayBuffer: To,
  isBuffer: va,
  isFormData: Fa,
  isArrayBufferView: Ea,
  isString: Sa,
  isNumber: Ao,
  isBoolean: Ca,
  isObject: dn,
  isPlainObject: tn,
  isUndefined: zt,
  isDate: Ta,
  isFile: Aa,
  isBlob: Pa,
  isRegExp: Va,
  isFunction: Be,
  isStream: Ra,
  isURLSearchParams: Ia,
  isTypedArray: $a,
  isFileList: Oa,
  forEach: $t,
  merge: tr,
  extend: ja,
  trim: _a,
  stripBOM: Da,
  inherits: za,
  toFlatObject: La,
  kindOf: pn,
  kindOfTest: Ke,
  endsWith: Na,
  toArray: Ma,
  forEachEntry: Ba,
  matchAll: Ua,
  isHTMLForm: qa,
  hasOwnProperty: ti,
  hasOwnProp: ti,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fo,
  freezeMethods: Wa,
  toObjectSet: Ya,
  toCamelCase: Ha,
  noop: Ga,
  toFiniteNumber: Ja,
  findKey: Po,
  global: Oo,
  isContextDefined: Ro,
  ALPHABET: Io,
  generateString: Ka,
  isSpecCompliantForm: Xa,
  toJSONObject: Qa,
  isAsyncFn: Za,
  isThenable: es
};
function se(e, n, t, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), i && (this.response = i);
}
T.inherits(se, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const _o = se.prototype, jo = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  jo[e] = { value: e };
});
Object.defineProperties(se, jo);
Object.defineProperty(_o, "isAxiosError", { value: !0 });
se.from = (e, n, t, r, i, o) => {
  const l = Object.create(_o);
  return T.toFlatObject(e, l, function(s) {
    return s !== Error.prototype;
  }, (a) => a !== "isAxiosError"), se.call(l, e.message, n, t, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const ts = null;
function nr(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Do(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ri(e, n, t) {
  return e ? e.concat(n).map(function(i, o) {
    return i = Do(i), !t && o ? "[" + i + "]" : i;
  }).join(t ? "." : "") : n;
}
function ns(e) {
  return T.isArray(e) && !e.some(nr);
}
const rs = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function mn(e, n, t) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = T.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, b) {
    return !T.isUndefined(b[y]);
  });
  const r = t.metaTokens, i = t.visitor || c, o = t.dots, l = t.indexes, s = (t.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
  if (!T.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (T.isDate(d))
      return d.toISOString();
    if (!s && T.isBlob(d))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(d) || T.isTypedArray(d) ? s && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, y, b) {
    let w = d;
    if (d && !b && typeof d == "object") {
      if (T.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (T.isArray(d) && ns(d) || (T.isFileList(d) || T.endsWith(y, "[]")) && (w = T.toArray(d)))
        return y = Do(y), w.forEach(function(C, j) {
          !(T.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ri([y], j, o) : l === null ? y : y + "[]",
            u(C)
          );
        }), !1;
    }
    return nr(d) ? !0 : (n.append(ri(b, y, o), u(d)), !1);
  }
  const f = [], m = Object.assign(rs, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: nr
  });
  function p(d, y) {
    if (!T.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(d), T.forEach(d, function(w, A) {
        (!(T.isUndefined(w) || w === null) && i.call(
          n,
          w,
          T.isString(A) ? A.trim() : A,
          y,
          m
        )) === !0 && p(w, y ? y.concat(A) : [A]);
      }), f.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), n;
}
function ii(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return n[r];
  });
}
function vr(e, n) {
  this._pairs = [], e && mn(e, this, n);
}
const zo = vr.prototype;
zo.append = function(n, t) {
  this._pairs.push([n, t]);
};
zo.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, ii);
  } : ii;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function is(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Lo(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || is, i = t && t.serialize;
  let o;
  if (i ? o = i(n, t) : o = T.isURLSearchParams(n) ? n.toString() : new vr(n, t).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class os {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(n, t, r) {
    return this.handlers.push({
      fulfilled: n,
      rejected: t,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(n) {
    T.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const oi = os, No = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ls = typeof URLSearchParams < "u" ? URLSearchParams : vr, as = typeof FormData < "u" ? FormData : null, ss = typeof Blob < "u" ? Blob : null, us = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), cs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ve = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ls,
    FormData: as,
    Blob: ss
  },
  isStandardBrowserEnv: us,
  isStandardBrowserWebWorkerEnv: cs,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function fs(e, n) {
  return mn(e, new Ve.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, i, o) {
      return Ve.isNode && T.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function ps(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function hs(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const i = t.length;
  let o;
  for (r = 0; r < i; r++)
    o = t[r], n[o] = e[o];
  return n;
}
function Mo(e) {
  function n(t, r, i, o) {
    let l = t[o++];
    const a = Number.isFinite(+l), s = o >= t.length;
    return l = !l && T.isArray(i) ? i.length : l, s ? (T.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !a) : ((!i[l] || !T.isObject(i[l])) && (i[l] = []), n(t, r, i[l], o) && T.isArray(i[l]) && (i[l] = hs(i[l])), !a);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const t = {};
    return T.forEachEntry(e, (r, i) => {
      n(ps(r), i, t, 0);
    }), t;
  }
  return null;
}
function ds(e, n, t) {
  if (T.isString(e))
    try {
      return (n || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Er = {
  transitional: No,
  adapter: Ve.isNode ? "http" : "xhr",
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", i = r.indexOf("application/json") > -1, o = T.isObject(n);
    if (o && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return i && i ? JSON.stringify(Mo(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return fs(n, this.formSerializer).toString();
      if ((a = T.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return mn(
          a ? { "files[]": n } : n,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return o || i ? (t.setContentType("application/json", !1), ds(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Er.transitional, r = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (n && T.isString(n) && (r && !this.responseType || i)) {
      const l = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (l)
          throw a.name === "SyntaxError" ? se.from(a, se.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return n;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ve.classes.FormData,
    Blob: Ve.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Er.headers[e] = {};
});
const Sr = Er, ms = T.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gs = (e) => {
  const n = {};
  let t, r, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), t = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!t || n[t] && ms[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, li = Symbol("internals");
function Ft(e) {
  return e && String(e).trim().toLowerCase();
}
function nn(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(nn) : String(e);
}
function ys(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const bs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function On(e, n, t, r, i) {
  if (T.isFunction(r))
    return r.call(this, n, t);
  if (i && (n = t), !!T.isString(n)) {
    if (T.isString(r))
      return n.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(n);
  }
}
function ks(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function ws(e, n) {
  const t = T.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(i, o, l) {
        return this[r].call(this, n, i, o, l);
      },
      configurable: !0
    });
  });
}
class gn {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const i = this;
    function o(a, s, u) {
      const c = Ft(s);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = T.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || s] = nn(a));
    }
    const l = (a, s) => T.forEach(a, (u, c) => o(u, c, s));
    return T.isPlainObject(n) || n instanceof this.constructor ? l(n, t) : T.isString(n) && (n = n.trim()) && !bs(n) ? l(gs(n), t) : n != null && o(t, n, r), this;
  }
  get(n, t) {
    if (n = Ft(n), n) {
      const r = T.findKey(this, n);
      if (r) {
        const i = this[r];
        if (!t)
          return i;
        if (t === !0)
          return ys(i);
        if (T.isFunction(t))
          return t.call(this, i, r);
        if (T.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Ft(n), n) {
      const r = T.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || On(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let i = !1;
    function o(l) {
      if (l = Ft(l), l) {
        const a = T.findKey(r, l);
        a && (!t || On(r, r[a], a, t)) && (delete r[a], i = !0);
      }
    }
    return T.isArray(n) ? n.forEach(o) : o(n), i;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, i = !1;
    for (; r--; ) {
      const o = t[r];
      (!n || On(this, this[o], o, n, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(n) {
    const t = this, r = {};
    return T.forEach(this, (i, o) => {
      const l = T.findKey(r, o);
      if (l) {
        t[l] = nn(i), delete t[o];
        return;
      }
      const a = n ? ks(o) : String(o).trim();
      a !== o && delete t[o], t[a] = nn(i), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, i) => {
      r != null && r !== !1 && (t[i] = n && T.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, t]) => n + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...t) {
    const r = new this(n);
    return t.forEach((i) => r.set(i)), r;
  }
  static accessor(n) {
    const r = (this[li] = this[li] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(l) {
      const a = Ft(l);
      r[a] || (ws(i, l), r[a] = !0);
    }
    return T.isArray(n) ? n.forEach(o) : o(n), this;
  }
}
gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(gn.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
T.freezeMethods(gn);
const et = gn;
function Rn(e, n) {
  const t = this || Sr, r = n || t, i = et.from(r.headers);
  let o = r.data;
  return T.forEach(e, function(a) {
    o = a.call(t, o, i.normalize(), n ? n.status : void 0);
  }), i.normalize(), o;
}
function $o(e) {
  return !!(e && e.__CANCEL__);
}
function Bt(e, n, t) {
  se.call(this, e ?? "canceled", se.ERR_CANCELED, n, t), this.name = "CanceledError";
}
T.inherits(Bt, se, {
  __CANCEL__: !0
});
function xs(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new se(
    "Request failed with status code " + t.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const vs = Ve.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, r, i, o, l, a) {
        const s = [];
        s.push(t + "=" + encodeURIComponent(r)), T.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), T.isString(o) && s.push("path=" + o), T.isString(l) && s.push("domain=" + l), a === !0 && s.push("secure"), document.cookie = s.join("; ");
      },
      read: function(t) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Es(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ss(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Bo(e, n) {
  return e && !Es(n) ? Ss(e, n) : n;
}
const Cs = Ve.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let r;
    function i(o) {
      let l = o;
      return n && (t.setAttribute("href", l), l = t.href), t.setAttribute("href", l), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return r = i(window.location.href), function(l) {
      const a = T.isString(l) ? i(l) : l;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ts(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function As(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let i = 0, o = 0, l;
  return n = n !== void 0 ? n : 1e3, function(s) {
    const u = Date.now(), c = r[o];
    l || (l = u), t[i] = s, r[i] = u;
    let f = o, m = 0;
    for (; f !== i; )
      m += t[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - l < n)
      return;
    const p = c && u - c;
    return p ? Math.round(m * 1e3 / p) : void 0;
  };
}
function ai(e, n) {
  let t = 0;
  const r = As(50, 250);
  return (i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, a = o - t, s = r(a), u = o <= l;
    t = o;
    const c = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: a,
      rate: s || void 0,
      estimated: s && l && u ? (l - o) / s : void 0,
      event: i
    };
    c[n ? "download" : "upload"] = !0, e(c);
  };
}
const Ps = typeof XMLHttpRequest < "u", Os = Ps && function(e) {
  return new Promise(function(t, r) {
    let i = e.data;
    const o = et.from(e.headers).normalize(), l = e.responseType;
    let a;
    function s() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    T.isFormData(i) && (Ve.isStandardBrowserEnv || Ve.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + d));
    }
    const c = Bo(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Lo(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const p = et.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !l || l === "text" || l === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: p,
        config: e,
        request: u
      };
      xs(function(w) {
        t(w), s();
      }, function(w) {
        r(w), s();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new se("Request aborted", se.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new se("Network Error", se.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || No;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new se(
        d,
        y.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Ve.isStandardBrowserEnv) {
      const p = (e.withCredentials || Cs(c)) && e.xsrfCookieName && vs.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in u && T.forEach(o.toJSON(), function(d, y) {
      u.setRequestHeader(y, d);
    }), T.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), l && l !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", ai(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", ai(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (p) => {
      u && (r(!p || p.type ? new Bt(null, e, u) : p), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const m = Ts(c);
    if (m && Ve.protocols.indexOf(m) === -1) {
      r(new se("Unsupported protocol " + m + ":", se.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
}, rn = {
  http: ts,
  xhr: Os
};
T.forEach(rn, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const Uo = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let i = 0; i < n && (t = e[i], !(r = T.isString(t) ? rn[t.toLowerCase()] : t)); i++)
      ;
    if (!r)
      throw r === !1 ? new se(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        T.hasOwnProp(rn, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!T.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: rn
};
function Fn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Bt(null, e);
}
function si(e) {
  return Fn(e), e.headers = et.from(e.headers), e.data = Rn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Uo.getAdapter(e.adapter || Sr.adapter)(e).then(function(r) {
    return Fn(e), r.data = Rn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = et.from(r.headers), r;
  }, function(r) {
    return $o(r) || (Fn(e), r && r.response && (r.response.data = Rn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = et.from(r.response.headers))), Promise.reject(r);
  });
}
const ui = (e) => e instanceof et ? e.toJSON() : e;
function xt(e, n) {
  n = n || {};
  const t = {};
  function r(u, c, f) {
    return T.isPlainObject(u) && T.isPlainObject(c) ? T.merge.call({ caseless: f }, u, c) : T.isPlainObject(c) ? T.merge({}, c) : T.isArray(c) ? c.slice() : c;
  }
  function i(u, c, f) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, c, f);
  }
  function o(u, c) {
    if (!T.isUndefined(c))
      return r(void 0, c);
  }
  function l(u, c) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in n)
      return r(u, c);
    if (f in e)
      return r(void 0, u);
  }
  const s = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a,
    headers: (u, c) => i(ui(u), ui(c), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const f = s[c] || i, m = f(e[c], n[c], c);
    T.isUndefined(m) && f !== a || (t[c] = m);
  }), t;
}
const qo = "1.5.0", Cr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Cr[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const ci = {};
Cr.transitional = function(n, t, r) {
  function i(o, l) {
    return "[Axios v" + qo + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, a) => {
    if (n === !1)
      throw new se(
        i(l, " has been removed" + (t ? " in " + t : "")),
        se.ERR_DEPRECATED
      );
    return t && !ci[l] && (ci[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(o, l, a) : !0;
  };
};
function Rs(e, n, t) {
  if (typeof e != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], l = n[o];
    if (l) {
      const a = e[o], s = a === void 0 || l(a, o, e);
      if (s !== !0)
        throw new se("option " + o + " must be " + s, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new se("Unknown option " + o, se.ERR_BAD_OPTION);
  }
}
const rr = {
  assertOptions: Rs,
  validators: Cr
}, rt = rr.validators;
class sn {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new oi(),
      response: new oi()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(n, t) {
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = xt(this.defaults, t);
    const { transitional: r, paramsSerializer: i, headers: o } = t;
    r !== void 0 && rr.assertOptions(r, {
      silentJSONParsing: rt.transitional(rt.boolean),
      forcedJSONParsing: rt.transitional(rt.boolean),
      clarifyTimeoutError: rt.transitional(rt.boolean)
    }, !1), i != null && (T.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : rr.assertOptions(i, {
      encode: rt.function,
      serialize: rt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let l = o && T.merge(
      o.common,
      o[t.method]
    );
    o && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), t.headers = et.concat(l, o);
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(t) === !1 || (s = s && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c, f = 0, m;
    if (!s) {
      const d = [si.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, u), m = d.length, c = Promise.resolve(t); f < m; )
        c = c.then(d[f++], d[f++]);
      return c;
    }
    m = a.length;
    let p = t;
    for (f = 0; f < m; ) {
      const d = a[f++], y = a[f++];
      try {
        p = d(p);
      } catch (b) {
        y.call(this, b);
        break;
      }
    }
    try {
      c = si.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(n) {
    n = xt(this.defaults, n);
    const t = Bo(n.baseURL, n.url);
    return Lo(t, n.params, n.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(n) {
  sn.prototype[n] = function(t, r) {
    return this.request(xt(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(o, l, a) {
      return this.request(xt(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  sn.prototype[n] = t(), sn.prototype[n + "Form"] = t(!0);
});
const on = sn;
class Tr {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(o) {
      t = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const l = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(i);
      return l.cancel = function() {
        r.unsubscribe(o);
      }, l;
    }, n(function(o, l, a) {
      r.reason || (r.reason = new Bt(o, l, a), t(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(n);
    t !== -1 && this._listeners.splice(t, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new Tr(function(i) {
        n = i;
      }),
      cancel: n
    };
  }
}
const Fs = Tr;
function Is(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function _s(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const ir = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ir).forEach(([e, n]) => {
  ir[n] = e;
});
const js = ir;
function Ho(e) {
  const n = new on(e), t = Co(on.prototype.request, n);
  return T.extend(t, on.prototype, n, { allOwnKeys: !0 }), T.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(i) {
    return Ho(xt(e, i));
  }, t;
}
const Ae = Ho(Sr);
Ae.Axios = on;
Ae.CanceledError = Bt;
Ae.CancelToken = Fs;
Ae.isCancel = $o;
Ae.VERSION = qo;
Ae.toFormData = mn;
Ae.AxiosError = se;
Ae.Cancel = Ae.CanceledError;
Ae.all = function(n) {
  return Promise.all(n);
};
Ae.spread = Is;
Ae.isAxiosError = _s;
Ae.mergeConfig = xt;
Ae.AxiosHeaders = et;
Ae.formToJSON = (e) => Mo(T.isHTMLForm(e) ? new FormData(e) : e);
Ae.getAdapter = Uo.getAdapter;
Ae.HttpStatusCode = js;
Ae.default = Ae;
const yn = Ae;
yn.defaults.withCredentials = !0;
const Ds = async (e, n, t, r, i) => {
  let o = {
    method: "POST",
    url: `${e}/game/create`,
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      GameKey: n,
      GameID: t.toLowerCase(),
      Teams: r,
      TurnLength: null,
      MoreOptions: {
        Seed: Date.now(),
        Variant: i
      }
    })
  };
  return yn(o).catch((l) => l.response).then((l) => l.status);
}, zs = async (e, n, t) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${n}&GameID=${t.toLowerCase()}`
  };
  return yn(r).catch((i) => i.response);
}, Vo = async (e) => {
  let n = {
    method: "GET",
    url: `${e}/health`
  };
  return yn(n).catch((t) => t.response);
};
function hg({ config: e }) {
  const n = fn();
  return ot(() => {
    const t = async () => {
      let i = await Vo(e.host);
      if (i && i.status === 200) {
        let o = sessionStorage.getItem("gameID");
        n(o ? `/${o}` : "/");
      }
    };
    t();
    const r = setInterval(async () => {
      t();
    }, 1e4);
    return () => clearInterval(r);
  }, [n]), /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center my-8 md:my-12", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "w-full flex flex-col items-center mt-48", children: [
      /* @__PURE__ */ P.jsx("p", { className: "font-black text-4xl italic", children: "We'll be right back!" }),
      /* @__PURE__ */ P.jsxs("p", { className: "mb-1 font-thin", children: [
        /* @__PURE__ */ P.jsx("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
        " is down for maintenance"
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ P.jsx(wr, {}) })
  ] });
}
const fi = [
  "able",
  "about",
  "above",
  "abuzz",
  "ace",
  "achy",
  "acid",
  "acned",
  "acute",
  "adept",
  "adult",
  "afire",
  "afoot",
  "afoul",
  "aft",
  "after",
  "aged",
  "agile",
  "aging",
  "aglow",
  "ago",
  "ahead",
  "aided",
  "airy",
  "ajar",
  "akin",
  "alert",
  "alien",
  "alike",
  "alive",
  "alone",
  "aloof",
  "alpha",
  "alto",
  "amber",
  "ample",
  "angry",
  "anti",
  "antic",
  "antsy",
  "any",
  "apart",
  "apish",
  "apt",
  "arced",
  "arch",
  "arid",
  "ashen",
  "ashy",
  "askew",
  "astir",
  "atrip",
  "attic",
  "avian",
  "avid",
  "awake",
  "aware",
  "awash",
  "away",
  "awed",
  "awful",
  "awing",
  "awned",
  "awry",
  "axial",
  "azure",
  "back",
  "bad",
  "baggy",
  "bald",
  "balmy",
  "bandy",
  "bare",
  "bared",
  "basal",
  "base",
  "based",
  "basic",
  "bated",
  "bats",
  "batty",
  "bay",
  "beady",
  "beamy",
  "beat",
  "beefy",
  "beery",
  "beige",
  "bent",
  "best",
  "beta",
  "bias",
  "birch",
  "bitty",
  "black",
  "blame",
  "bland",
  "blank",
  "bleak",
  "blear",
  "blind",
  "blond",
  "blown",
  "blue",
  "bluff",
  "blunt",
  "boggy",
  "bogus",
  "bold",
  "bone",
  "boned",
  "bonny",
  "bony",
  "boon",
  "boozy",
  "bored",
  "born",
  "boss",
  "bossy",
  "both",
  "bound",
  "bowed",
  "boxed",
  "boxy",
  "brag",
  "brash",
  "brave",
  "brief",
  "briny",
  "brisk",
  "broad",
  "broke",
  "brown",
  "brute",
  "buff",
  "buggy",
  "built",
  "bulgy",
  "bulky",
  "bully",
  "bum",
  "bumpy",
  "burly",
  "burnt",
  "bush",
  "bushy",
  "bust",
  "busty",
  "busy",
  "butch",
  "calm",
  "camp",
  "campy",
  "catty",
  "cheap",
  "chewy",
  "chic",
  "chief",
  "civic",
  "civil",
  "clean",
  "clear",
  "cleft",
  "close",
  "cocky",
  "cod",
  "cold",
  "color",
  "comfy",
  "comic",
  "cool",
  "coral",
  "corny",
  "cosy",
  "coy",
  "cozy",
  "crazy",
  "crisp",
  "cross",
  "cubic",
  "cured",
  "curly",
  "curt",
  "curvy",
  "cushy",
  "cut",
  "cute",
  "cyan",
  "daft",
  "daily",
  "damp",
  "dandy",
  "dank",
  "dark",
  "dated",
  "dazed",
  "deaf",
  "dear",
  "deep",
  "deft",
  "deist",
  "dense",
  "dewy",
  "dicey",
  "dim",
  "dingy",
  "dinky",
  "dire",
  "dirty",
  "dodgy",
  "domed",
  "done",
  "dopey",
  "dopy",
  "dormy",
  "down",
  "downy",
  "dozen",
  "drab",
  "drawn",
  "dread",
  "drear",
  "dress",
  "dried",
  "droll",
  "dry",
  "dual",
  "dud",
  "due",
  "dull",
  "dumb",
  "dummy",
  "dusky",
  "dusty",
  "dyed",
  "dying",
  "each",
  "eager",
  "early",
  "eased",
  "east",
  "easy",
  "edged",
  "edgy",
  "eerie",
  "eight",
  "elder",
  "elect",
  "elfin",
  "elite",
  "empty",
  "ended",
  "epic",
  "equal",
  "even",
  "every",
  "evil",
  "exact",
  "extra",
  "eyed",
  "fab",
  "faced",
  "faded",
  "faint",
  "fair",
  "fake",
  "false",
  "famed",
  "fancy",
  "far",
  "fast",
  "fat",
  "fatal",
  "fated",
  "fazed",
  "feral",
  "few",
  "fewer",
  "fiery",
  "fifth",
  "fifty",
  "filmy",
  "final",
  "fine",
  "finer",
  "fired",
  "firm",
  "first",
  "fishy",
  "fit",
  "five",
  "fixed",
  "fizzy",
  "flaky",
  "flash",
  "flat",
  "fleet",
  "flint",
  "flip",
  "fluid",
  "flush",
  "fly",
  "foamy",
  "focal",
  "foggy",
  "fond",
  "fore",
  "foul",
  "found",
  "four",
  "foxy",
  "frail",
  "frank",
  "free",
  "fresh",
  "fried",
  "front",
  "full",
  "fumed",
  "funky",
  "funny",
  "furry",
  "fused",
  "fussy",
  "fuzzy",
  "game",
  "gaudy",
  "gaunt",
  "gawky",
  "giant",
  "giddy",
  "gimpy",
  "glad",
  "glum",
  "godly",
  "going",
  "gold",
  "gone",
  "good",
  "gooey",
  "goofy",
  "grand",
  "great",
  "green",
  "grey",
  "grim",
  "grimy",
  "gross",
  "grown",
  "gruff",
  "gummy",
  "gushy",
  "gusty",
  "gutsy",
  "hairy",
  "hale",
  "half",
  "halt",
  "hammy",
  "handy",
  "happy",
  "hard",
  "hardy",
  "harsh",
  "hasty",
  "hazel",
  "hazy",
  "heard",
  "heavy",
  "hefty",
  "held",
  "here",
  "hex",
  "hexed",
  "high",
  "hilly",
  "hind",
  "hip",
  "hired",
  "hoar",
  "hoary",
  "hokey",
  "holey",
  "holy",
  "home",
  "homey",
  "honey",
  "horny",
  "hot",
  "huffy",
  "huge",
  "human",
  "humid",
  "hurt",
  "husky",
  "icky",
  "icy",
  "ideal",
  "idle",
  "iffy",
  "ill",
  "inert",
  "inky",
  "inner",
  "ionic",
  "irate",
  "iron",
  "jade",
  "jaded",
  "jaggy",
  "jawed",
  "jazzy",
  "jet",
  "joint",
  "jolly",
  "jowly",
  "juicy",
  "jumbo",
  "jumpy",
  "just",
  "kempt",
  "key",
  "keyed",
  "khaki",
  "kin",
  "kind",
  "kinky",
  "known",
  "kooky",
  "laced",
  "lacy",
  "laid",
  "lame",
  "lank",
  "lanky",
  "large",
  "last",
  "late",
  "later",
  "lax",
  "lay",
  "lazy",
  "leafy",
  "leaky",
  "lean",
  "least",
  "left",
  "legal",
  "less",
  "level",
  "light",
  "like",
  "liked",
  "limp",
  "lined",
  "lit",
  "live",
  "liver",
  "livid",
  "loamy",
  "local",
  "loco",
  "lofty",
  "lone",
  "long",
  "loony",
  "loopy",
  "loose",
  "lossy",
  "lost",
  "loud",
  "lousy",
  "loved",
  "low",
  "lowly",
  "loyal",
  "lucid",
  "lucky",
  "lumpy",
  "lunar",
  "lurid",
  "lush",
  "lusty",
  "lyric",
  "macho",
  "macro",
  "mad",
  "made",
  "magic",
  "main",
  "major",
  "male",
  "mangy",
  "manic",
  "manly",
  "many",
  "mass",
  "matt",
  "matte",
  "mauve",
  "mealy",
  "mean",
  "meaty",
  "meek",
  "meet",
  "mere",
  "merry",
  "messy",
  "metal",
  "micro",
  "mild",
  "milky",
  "mimic",
  "mined",
  "mini",
  "minor",
  "mint",
  "minty",
  "minus",
  "mired",
  "mirky",
  "misty",
  "mixed",
  "mock",
  "mod",
  "modal",
  "model",
  "moist",
  "molar",
  "moldy",
  "mono",
  "moody",
  "moony",
  "moot",
  "moral",
  "more",
  "mossy",
  "most",
  "mothy",
  "motor",
  "mousy",
  "moved",
  "mown",
  "much",
  "mucky",
  "muddy",
  "muggy",
  "mum",
  "mural",
  "murky",
  "mushy",
  "musky",
  "must",
  "musty",
  "mute",
  "muted",
  "naive",
  "nary",
  "nasal",
  "nasty",
  "natal",
  "natty",
  "naval",
  "near",
  "neat",
  "needy",
  "nervy",
  "new",
  "newsy",
  "next",
  "nice",
  "nifty",
  "nigh",
  "nine",
  "ninth",
  "noble",
  "noisy",
  "none",
  "north",
  "nosed",
  "noted",
  "novel",
  "nubby",
  "numb",
  "nuts",
  "nutty",
  "oaken",
  "oaten",
  "obese",
  "odd",
  "oiled",
  "oily",
  "okay",
  "old",
  "olden",
  "older",
  "olive",
  "one",
  "only",
  "oozy",
  "open",
  "optic",
  "oral",
  "other",
  "out",
  "outer",
  "oval",
  "over",
  "overt",
  "owing",
  "own",
  "owned",
  "pagan",
  "paid",
  "pale",
  "palmy",
  "pass",
  "past",
  "pasty",
  "pat",
  "paved",
  "peaky",
  "peaty",
  "pedal",
  "pent",
  "peppy",
  "perky",
  "pert",
  "pesky",
  "pet",
  "petty",
  "phony",
  "piano",
  "picky",
  "pied",
  "piggy",
  "pilar",
  "pink",
  "plain",
  "plane",
  "plumb",
  "plump",
  "plus",
  "plush",
  "polar",
  "poor",
  "pop",
  "port",
  "posed",
  "posh",
  "potty",
  "pricy",
  "prim",
  "prior",
  "privy",
  "prize",
  "prone",
  "proof",
  "prosy",
  "proud",
  "pudgy",
  "puff",
  "puffy",
  "pulpy",
  "punk",
  "puny",
  "pupal",
  "pure",
  "pushy",
  "quack",
  "quasi",
  "quick",
  "quiet",
  "rabid",
  "radio",
  "rainy",
  "rapid",
  "rare",
  "rash",
  "raspy",
  "ratty",
  "raw",
  "ready",
  "real",
  "rear",
  "red",
  "regal",
  "retro",
  "rich",
  "rife",
  "right",
  "rigid",
  "riled",
  "ripe",
  "risen",
  "risky",
  "ritzy",
  "roast",
  "robed",
  "rocky",
  "roomy",
  "ropey",
  "rose",
  "rosy",
  "rough",
  "round",
  "rowdy",
  "royal",
  "ruby",
  "rude",
  "ruled",
  "rum",
  "rummy",
  "runic",
  "runny",
  "runty",
  "rural",
  "rush",
  "rushy",
  "rust",
  "rusty",
  "rutty",
  "sad",
  "safe",
  "sage",
  "said",
  "salt",
  "salty",
  "same",
  "sandy",
  "sane",
  "sappy",
  "sassy",
  "saute",
  "saved",
  "scaly",
  "scant",
  "scary",
  "scrub",
  "seamy",
  "sear",
  "seedy",
  "self",
  "sent",
  "seven",
  "sewed",
  "sewn",
  "shady",
  "shaky",
  "sham",
  "sharp",
  "shed",
  "sheer",
  "shiny",
  "short",
  "shot",
  "showy",
  "shut",
  "shy",
  "sick",
  "side",
  "sign",
  "silky",
  "silly",
  "silty",
  "sissy",
  "six",
  "sixth",
  "sixty",
  "size",
  "sized",
  "skew",
  "skim",
  "slack",
  "slain",
  "slaty",
  "slav",
  "sleek",
  "slick",
  "slim",
  "slimy",
  "slow",
  "sly",
  "small",
  "smart",
  "smoky",
  "smug",
  "snaky",
  "sneak",
  "snide",
  "snowy",
  "snub",
  "snuff",
  "snug",
  "soapy",
  "sober",
  "soft",
  "soggy",
  "solar",
  "sold",
  "sole",
  "solid",
  "solo",
  "some",
  "sooty",
  "sore",
  "sorry",
  "sound",
  "soupy",
  "sour",
  "south",
  "sown",
  "spare",
  "spent",
  "spicy",
  "spiky",
  "spiny",
  "splay",
  "split",
  "spry",
  "spumy",
  "squab",
  "squat",
  "stagy",
  "stale",
  "star",
  "stark",
  "steep",
  "stern",
  "stiff",
  "still",
  "stock",
  "stone",
  "stony",
  "stout",
  "straw",
  "stray",
  "stuck",
  "stung",
  "suave",
  "such",
  "sudsy",
  "sulky",
  "sunk",
  "sunny",
  "super",
  "sure",
  "surly",
  "sweet",
  "swell",
  "swept",
  "swift",
  "swish",
  "sworn",
  "tabby",
  "taboo",
  "tacky",
  "taken",
  "talky",
  "tall",
  "tame",
  "tamed",
  "tan",
  "tangy",
  "taped",
  "tardy",
  "tart",
  "tasty",
  "tawny",
  "teal",
  "ten",
  "tenor",
  "tense",
  "tenth",
  "tepid",
  "terse",
  "testy",
  "thick",
  "thin",
  "third",
  "three",
  "tidal",
  "tidy",
  "tied",
  "tight",
  "tiled",
  "timed",
  "timid",
  "tinny",
  "tiny",
  "tipsy",
  "tired",
  "toed",
  "token",
  "tonal",
  "toned",
  "tonic",
  "top",
  "tops",
  "torn",
  "total",
  "tough",
  "toxic",
  "tried",
  "trig",
  "trim",
  "trite",
  "true",
  "tubby",
  "tubed",
  "tumid",
  "twee",
  "twin",
  "two",
  "ugly",
  "ultra",
  "uncut",
  "under",
  "undue",
  "unfed",
  "unfit",
  "union",
  "unlit",
  "unwed",
  "upper",
  "upset",
  "urban",
  "used",
  "usual",
  "utter",
  "vague",
  "vain",
  "valid",
  "vapid",
  "vast",
  "viral",
  "vital",
  "vivid",
  "vocal",
  "void",
  "wacky",
  "warm",
  "wary",
  "washy",
  "waste",
  "wavy",
  "waxed",
  "waxen",
  "waxy",
  "weak",
  "weary",
  "weedy",
  "weeny",
  "weepy",
  "weird",
  "well",
  "welsh",
  "west",
  "wet",
  "whiny",
  "white",
  "whole",
  "wide",
  "wild",
  "wily",
  "wimpy",
  "windy",
  "wired",
  "wiry",
  "wise",
  "wispy",
  "witty",
  "wonky",
  "woody",
  "wooly",
  "woozy",
  "wordy",
  "wormy",
  "worn",
  "worse",
  "worst",
  "worth",
  "wound",
  "woven",
  "wrong",
  "wroth",
  "wry",
  "young",
  "yucky",
  "yummy",
  "zany",
  "zero",
  "zesty",
  "zippy",
  "zonal"
], pi = [
  "ace",
  "ache",
  "acid",
  "acme",
  "acorn",
  "acre",
  "act",
  "actor",
  "add",
  "adder",
  "adept",
  "advil",
  "afro",
  "agave",
  "age",
  "aged",
  "agent",
  "agony",
  "ailey",
  "aim",
  "aioli",
  "air",
  "aisle",
  "akron",
  "alarm",
  "album",
  "ale",
  "alert",
  "algae",
  "alias",
  "alibi",
  "alien",
  "alley",
  "alloy",
  "ally",
  "aloe",
  "alpha",
  "alps",
  "altar",
  "amber",
  "amigo",
  "amino",
  "amish",
  "ammo",
  "amp",
  "angel",
  "anger",
  "angle",
  "angst",
  "angus",
  "anime",
  "ankle",
  "annex",
  "anole",
  "ant",
  "ante",
  "antic",
  "anvil",
  "ape",
  "apex",
  "aphid",
  "apple",
  "april",
  "apron",
  "aqua",
  "arbor",
  "arc",
  "arch",
  "area",
  "arena",
  "argon",
  "argus",
  "ark",
  "arm",
  "armor",
  "arms",
  "army",
  "aroma",
  "array",
  "arrow",
  "arson",
  "art",
  "ascot",
  "aspen",
  "asset",
  "ate",
  "atom",
  "attic",
  "audio",
  "audit",
  "auger",
  "aunt",
  "aunty",
  "aura",
  "auto",
  "award",
  "awe",
  "awl",
  "axe",
  "axiom",
  "axis",
  "axle",
  "azure",
  "baby",
  "back",
  "bacon",
  "badge",
  "bag",
  "bagel",
  "bail",
  "bait",
  "baker",
  "bale",
  "balk",
  "ball",
  "balm",
  "ban",
  "band",
  "bane",
  "banjo",
  "bank",
  "banks",
  "bar",
  "barb",
  "bard",
  "barge",
  "bark",
  "barn",
  "baron",
  "bars",
  "base",
  "bash",
  "basic",
  "basil",
  "basin",
  "basis",
  "bass",
  "bat",
  "batch",
  "bath",
  "baton",
  "bay",
  "bayou",
  "beach",
  "bead",
  "beads",
  "beak",
  "beam",
  "bean",
  "bear",
  "beard",
  "beast",
  "beat",
  "beats",
  "bed",
  "bee",
  "beech",
  "beef",
  "beep",
  "beer",
  "beet",
  "begin",
  "beige",
  "being",
  "belch",
  "bell",
  "belly",
  "belt",
  "bench",
  "bend",
  "bends",
  "bent",
  "beret",
  "berry",
  "bet",
  "beta",
  "bevel",
  "bevy",
  "bias",
  "bib",
  "bible",
  "bid",
  "bidet",
  "bike",
  "biker",
  "bill",
  "bin",
  "bind",
  "bingo",
  "biome",
  "biped",
  "birch",
  "bird",
  "birth",
  "bison",
  "bit",
  "bite",
  "biter",
  "black",
  "blade",
  "blame",
  "blank",
  "blast",
  "blaze",
  "blend",
  "blimp",
  "blind",
  "bling",
  "blink",
  "blip",
  "bliss",
  "blitz",
  "bloat",
  "blob",
  "block",
  "blog",
  "bloke",
  "blond",
  "blood",
  "bloom",
  "blow",
  "blue",
  "blues",
  "bluff",
  "blur",
  "blurb",
  "blush",
  "boa",
  "boar",
  "board",
  "boast",
  "boat",
  "bod",
  "body",
  "bog",
  "bogey",
  "boil",
  "bold",
  "bolt",
  "bomb",
  "bond",
  "bone",
  "boner",
  "bones",
  "bong",
  "bongo",
  "bonus",
  "boo",
  "book",
  "boom",
  "boon",
  "boost",
  "boot",
  "booth",
  "booty",
  "booze",
  "bore",
  "borer",
  "born",
  "boss",
  "bot",
  "botch",
  "bound",
  "bow",
  "bowel",
  "bowl",
  "bowls",
  "box",
  "boxer",
  "boy",
  "bra",
  "brace",
  "brag",
  "braid",
  "brail",
  "brain",
  "brake",
  "bran",
  "brand",
  "brass",
  "brat",
  "brave",
  "bravo",
  "brawl",
  "brawn",
  "bread",
  "break",
  "breed",
  "brew",
  "briar",
  "bribe",
  "brick",
  "bride",
  "brie",
  "brief",
  "brim",
  "brine",
  "brink",
  "brit",
  "brits",
  "britt",
  "broad",
  "broil",
  "brood",
  "brook",
  "broom",
  "broth",
  "brow",
  "brown",
  "brunt",
  "brush",
  "brute",
  "buck",
  "bud",
  "buddy",
  "budge",
  "buff",
  "bug",
  "buggy",
  "bugle",
  "build",
  "bulb",
  "bulge",
  "bulk",
  "bull",
  "bully",
  "bum",
  "bump",
  "bun",
  "bunch",
  "bung",
  "bunk",
  "bunny",
  "buns",
  "bunt",
  "buoy",
  "bur",
  "burn",
  "burns",
  "burp",
  "burst",
  "bus",
  "bush",
  "bust",
  "buy",
  "buyer",
  "buzz",
  "bye",
  "bylaw",
  "byte",
  "cab",
  "cabin",
  "cable",
  "cabot",
  "cache",
  "caddy",
  "cadet",
  "cafe",
  "cage",
  "cager",
  "cake",
  "calf",
  "call",
  "calm",
  "cam",
  "camel",
  "camp",
  "can",
  "canal",
  "candy",
  "cane",
  "cap",
  "cape",
  "caper",
  "car",
  "carat",
  "card",
  "cards",
  "care",
  "caret",
  "cargo",
  "carp",
  "carry",
  "cart",
  "case",
  "cash",
  "cask",
  "cast",
  "caste",
  "cat",
  "catch",
  "caulk",
  "cause",
  "cave",
  "cavil",
  "caw",
  "cease",
  "cedar",
  "cell",
  "cello",
  "cent",
  "chaff",
  "chain",
  "chair",
  "chalk",
  "champ",
  "chant",
  "chaos",
  "chap",
  "chard",
  "charm",
  "chart",
  "chase",
  "chasm",
  "chat",
  "cheat",
  "check",
  "cheek",
  "cheep",
  "cheer",
  "chef",
  "chess",
  "chest",
  "chew",
  "chic",
  "chick",
  "chief",
  "child",
  "chill",
  "chime",
  "chimp",
  "chin",
  "chip",
  "chips",
  "chirp",
  "chit",
  "chive",
  "chock",
  "choir",
  "choke",
  "choky",
  "chomp",
  "chop",
  "chord",
  "chore",
  "chow",
  "chuck",
  "chug",
  "chum",
  "chump",
  "chunk",
  "churn",
  "chute",
  "cider",
  "cigar",
  "cinch",
  "cite",
  "city",
  "clack",
  "claim",
  "clam",
  "clamp",
  "clams",
  "clan",
  "clang",
  "clank",
  "clap",
  "clash",
  "clasp",
  "class",
  "clay",
  "clean",
  "clear",
  "cleat",
  "cleft",
  "clerk",
  "click",
  "cliff",
  "climb",
  "cling",
  "clip",
  "cloak",
  "clock",
  "clog",
  "clone",
  "close",
  "clot",
  "cloth",
  "cloud",
  "clout",
  "clove",
  "clown",
  "club",
  "cluck",
  "clue",
  "clump",
  "clunk",
  "coach",
  "coal",
  "coast",
  "coat",
  "cobra",
  "cocoa",
  "cod",
  "code",
  "cog",
  "coil",
  "coin",
  "coke",
  "cola",
  "cold",
  "colon",
  "color",
  "colt",
  "coma",
  "comb",
  "combo",
  "come",
  "comet",
  "comic",
  "comma",
  "conch",
  "condo",
  "cone",
  "coney",
  "conk",
  "cook",
  "cool",
  "coot",
  "cop",
  "cope",
  "copy",
  "coral",
  "cord",
  "cords",
  "core",
  "cork",
  "corn",
  "corp",
  "corps",
  "cost",
  "costs",
  "cosy",
  "cot",
  "couch",
  "cough",
  "count",
  "court",
  "cove",
  "coven",
  "cover",
  "cow",
  "cowl",
  "cows",
  "cozy",
  "crab",
  "crabs",
  "crack",
  "craft",
  "cramp",
  "crane",
  "crank",
  "crash",
  "crate",
  "crawl",
  "craze",
  "crazy",
  "creak",
  "cream",
  "cred",
  "cree",
  "creed",
  "creek",
  "creep",
  "crepe",
  "cress",
  "crest",
  "crew",
  "crib",
  "crime",
  "crimp",
  "crisp",
  "croak",
  "crock",
  "crook",
  "crop",
  "cross",
  "crow",
  "crowd",
  "crown",
  "crud",
  "crude",
  "crumb",
  "crush",
  "crust",
  "crux",
  "cry",
  "crypt",
  "cub",
  "cubby",
  "cube",
  "cubit",
  "cue",
  "cuff",
  "cull",
  "cult",
  "cup",
  "curb",
  "curd",
  "cure",
  "curl",
  "curry",
  "curse",
  "curve",
  "cut",
  "cyan",
  "cycle",
  "cynic",
  "dab",
  "daily",
  "dairy",
  "daisy",
  "dame",
  "damp",
  "dance",
  "dandy",
  "dane",
  "dare",
  "dark",
  "dart",
  "darts",
  "dash",
  "data",
  "date",
  "dawn",
  "day",
  "days",
  "daze",
  "deaf",
  "deal",
  "dean",
  "dear",
  "debit",
  "debt",
  "debut",
  "decal",
  "decay",
  "deck",
  "decor",
  "decoy",
  "deed",
  "deeds",
  "deep",
  "deer",
  "delay",
  "deli",
  "delta",
  "demo",
  "demon",
  "denim",
  "dent",
  "depot",
  "depth",
  "derby",
  "desk",
  "detox",
  "deuce",
  "devil",
  "dew",
  "dial",
  "diary",
  "dibs",
  "dice",
  "diet",
  "dig",
  "digit",
  "digs",
  "dill",
  "dime",
  "diner",
  "ding",
  "dip",
  "dirt",
  "disc",
  "disco",
  "dish",
  "disk",
  "ditch",
  "ditto",
  "dive",
  "diver",
  "dock",
  "dodge",
  "dog",
  "dogma",
  "doll",
  "dolly",
  "dolt",
  "dome",
  "donor",
  "donut",
  "doom",
  "door",
  "dope",
  "dork",
  "dorm",
  "dot",
  "doubt",
  "dough",
  "dove",
  "dowel",
  "down",
  "dozen",
  "dozer",
  "draft",
  "drag",
  "drain",
  "drama",
  "drape",
  "draw",
  "dread",
  "dream",
  "dress",
  "drew",
  "drier",
  "drift",
  "drill",
  "drink",
  "drip",
  "drive",
  "drone",
  "drool",
  "drop",
  "drove",
  "drug",
  "druid",
  "drum",
  "dry",
  "dryer",
  "duck",
  "duct",
  "due",
  "duel",
  "duet",
  "dug",
  "dunce",
  "dune",
  "dunk",
  "dusk",
  "dust",
  "duty",
  "dye",
  "dyer",
  "dying",
  "eager",
  "eagle",
  "ear",
  "earth",
  "ease",
  "easel",
  "east",
  "eater",
  "eats",
  "echo",
  "edge",
  "eel",
  "egg",
  "eggs",
  "ego",
  "eight",
  "elbow",
  "elder",
  "elect",
  "elf",
  "elite",
  "elk",
  "elm",
  "elves",
  "email",
  "ember",
  "empty",
  "emu",
  "end",
  "enemy",
  "entry",
  "envy",
  "epic",
  "epoxy",
  "equal",
  "era",
  "error",
  "essay",
  "eve",
  "even",
  "event",
  "evil",
  "exam",
  "exile",
  "exit",
  "extra",
  "eye",
  "eyes",
  "fable",
  "face",
  "facet",
  "fact",
  "fad",
  "fade",
  "faint",
  "fair",
  "fairy",
  "faith",
  "fake",
  "fall",
  "falls",
  "fame",
  "fan",
  "fancy",
  "fang",
  "far",
  "farce",
  "fare",
  "farm",
  "fast",
  "fat",
  "fate",
  "fault",
  "favor",
  "fawn",
  "fax",
  "fear",
  "feast",
  "feat",
  "fed",
  "fee",
  "feed",
  "feel",
  "felt",
  "femur",
  "fence",
  "fern",
  "ferry",
  "fetch",
  "feud",
  "fever",
  "few",
  "fib",
  "fiber",
  "field",
  "fiend",
  "fifth",
  "fifty",
  "fig",
  "fight",
  "file",
  "filet",
  "fill",
  "film",
  "filth",
  "final",
  "finch",
  "find",
  "fine",
  "fire",
  "firm",
  "first",
  "fish",
  "fist",
  "fit",
  "five",
  "fiver",
  "fives",
  "fix",
  "fixer",
  "fizz",
  "flag",
  "flair",
  "flak",
  "flake",
  "flame",
  "flank",
  "flap",
  "flaps",
  "flare",
  "flash",
  "flask",
  "flat",
  "flats",
  "flaw",
  "flea",
  "fleet",
  "flesh",
  "flex",
  "flick",
  "flier",
  "flies",
  "fling",
  "flint",
  "flip",
  "flirt",
  "float",
  "flock",
  "flood",
  "floor",
  "flop",
  "floss",
  "flour",
  "flow",
  "flu",
  "flub",
  "fluff",
  "fluid",
  "fluke",
  "flume",
  "flush",
  "flute",
  "flux",
  "fly",
  "flyer",
  "foam",
  "focus",
  "fog",
  "foil",
  "fold",
  "folk",
  "folks",
  "folly",
  "font",
  "food",
  "fool",
  "foot",
  "force",
  "forge",
  "fork",
  "form",
  "fort",
  "forth",
  "forty",
  "forum",
  "foul",
  "found",
  "four",
  "fowl",
  "fox",
  "foyer",
  "frail",
  "frame",
  "frat",
  "fraud",
  "fray",
  "freak",
  "free",
  "freon",
  "fret",
  "friar",
  "fries",
  "frill",
  "frisk",
  "frizz",
  "frog",
  "front",
  "frost",
  "froth",
  "frown",
  "fruit",
  "fry",
  "fryer",
  "fudge",
  "fuel",
  "full",
  "fume",
  "fumes",
  "fun",
  "fund",
  "funds",
  "fungi",
  "funk",
  "funny",
  "fur",
  "fury",
  "fuse",
  "fuss",
  "futon",
  "fuze",
  "fuzz",
  "gag",
  "gage",
  "gain",
  "game",
  "gamma",
  "gap",
  "gape",
  "gas",
  "gash",
  "gasp",
  "gate",
  "gates",
  "gator",
  "gauge",
  "gavel",
  "gawk",
  "gaze",
  "gear",
  "gecko",
  "geek",
  "gel",
  "gem",
  "gene",
  "genie",
  "genoa",
  "genre",
  "gent",
  "germ",
  "ghost",
  "ghoul",
  "giant",
  "gift",
  "gild",
  "gimp",
  "gin",
  "gipsy",
  "girl",
  "gist",
  "give",
  "given",
  "giver",
  "gizmo",
  "glad",
  "glade",
  "gland",
  "glans",
  "glare",
  "glass",
  "glaze",
  "gleam",
  "glee",
  "glide",
  "glint",
  "globe",
  "gloom",
  "glory",
  "gloss",
  "glove",
  "glow",
  "glue",
  "gnat",
  "gnome",
  "goal",
  "goat",
  "going",
  "gold",
  "golem",
  "golf",
  "goner",
  "goo",
  "good",
  "goof",
  "goofy",
  "goon",
  "goose",
  "goth",
  "gouge",
  "gown",
  "grab",
  "grace",
  "grad",
  "grade",
  "graft",
  "grail",
  "grain",
  "gram",
  "grand",
  "grant",
  "grape",
  "graph",
  "grasp",
  "grass",
  "grate",
  "gravy",
  "gray",
  "graze",
  "great",
  "greed",
  "green",
  "grey",
  "grid",
  "grief",
  "grill",
  "grime",
  "grin",
  "grind",
  "grip",
  "gripe",
  "grit",
  "grits",
  "groan",
  "groom",
  "gross",
  "group",
  "grove",
  "growl",
  "grub",
  "gruel",
  "grump",
  "grunt",
  "guard",
  "guess",
  "guest",
  "guide",
  "guild",
  "guilt",
  "gulch",
  "gulf",
  "gull",
  "gulp",
  "gum",
  "gun",
  "guppy",
  "guru",
  "gush",
  "gust",
  "gut",
  "guts",
  "guy",
  "gym",
  "habit",
  "hack",
  "hag",
  "hail",
  "hair",
  "half",
  "hall",
  "halo",
  "halt",
  "ham",
  "hand",
  "hands",
  "handy",
  "hang",
  "hare",
  "harp",
  "hash",
  "haste",
  "hat",
  "hatch",
  "hate",
  "hater",
  "haunt",
  "have",
  "haven",
  "havoc",
  "hawk",
  "hay",
  "haze",
  "hazel",
  "head",
  "heap",
  "heaps",
  "heart",
  "heat",
  "heavy",
  "hedge",
  "heed",
  "heel",
  "heft",
  "heir",
  "helix",
  "hell",
  "hello",
  "helm",
  "help",
  "hem",
  "hemp",
  "hen",
  "herb",
  "herd",
  "here",
  "hero",
  "hex",
  "hick",
  "hide",
  "high",
  "hike",
  "hiker",
  "hill",
  "hilt",
  "hind",
  "hinge",
  "hint",
  "hip",
  "hippo",
  "hippy",
  "hire",
  "hiss",
  "hit",
  "hitch",
  "hive",
  "hives",
  "hoagy",
  "hoard",
  "hoax",
  "hob",
  "hobby",
  "hobo",
  "hog",
  "hoist",
  "hold",
  "hole",
  "home",
  "honey",
  "honk",
  "honor",
  "hoof",
  "hook",
  "hooks",
  "hoop",
  "hoops",
  "hoot",
  "hop",
  "hope",
  "hops",
  "horde",
  "horn",
  "horse",
  "hose",
  "host",
  "hotel",
  "hound",
  "hour",
  "hours",
  "house",
  "howl",
  "hub",
  "hue",
  "huff",
  "hug",
  "hula",
  "hulk",
  "hull",
  "hum",
  "human",
  "humor",
  "hump",
  "humus",
  "hunch",
  "hunk",
  "hunt",
  "hurl",
  "hurry",
  "hurt",
  "hush",
  "husk",
  "husky",
  "hut",
  "hydra",
  "hyena",
  "hymn",
  "hype",
  "ibis",
  "ice",
  "icing",
  "icon",
  "idea",
  "ideal",
  "idiom",
  "idiot",
  "idle",
  "idler",
  "idol",
  "igloo",
  "iglu",
  "ill",
  "image",
  "imp",
  "inch",
  "index",
  "info",
  "ingot",
  "ink",
  "inlet",
  "inn",
  "input",
  "intro",
  "ion",
  "iris",
  "iron",
  "irony",
  "isle",
  "issue",
  "itch",
  "ivory",
  "ivy",
  "jab",
  "jack",
  "jacks",
  "jail",
  "jam",
  "jamb",
  "jar",
  "java",
  "jaw",
  "jay",
  "jazz",
  "jean",
  "jeans",
  "jeep",
  "jeer",
  "jello",
  "jelly",
  "jest",
  "jet",
  "jetty",
  "jewel",
  "jig",
  "jive",
  "job",
  "jock",
  "jog",
  "join",
  "joint",
  "joist",
  "joke",
  "joker",
  "jolly",
  "jolt",
  "joust",
  "joy",
  "judge",
  "jug",
  "juice",
  "juke",
  "jump",
  "junk",
  "junky",
  "juror",
  "jury",
  "kale",
  "kayak",
  "kazoo",
  "kebab",
  "keen",
  "keep",
  "keg",
  "kelp",
  "key",
  "kick",
  "kid",
  "kiddy",
  "kiln",
  "kilo",
  "kilt",
  "kin",
  "kind",
  "king",
  "kiss",
  "kit",
  "kite",
  "kitty",
  "kiwi",
  "knack",
  "knee",
  "kneel",
  "knell",
  "knife",
  "knit",
  "knob",
  "knock",
  "knot",
  "know",
  "koala",
  "krill",
  "lab",
  "label",
  "labor",
  "lace",
  "lack",
  "lad",
  "ladle",
  "lady",
  "lag",
  "lair",
  "lake",
  "lamb",
  "lame",
  "lamp",
  "lance",
  "land",
  "lane",
  "lap",
  "lapel",
  "lapse",
  "lard",
  "large",
  "larva",
  "laser",
  "lash",
  "lass",
  "lasso",
  "last",
  "lat",
  "latch",
  "latex",
  "lathe",
  "latte",
  "laugh",
  "lava",
  "law",
  "lawn",
  "laws",
  "lay",
  "layer",
  "layup",
  "leach",
  "lead",
  "leaf",
  "leak",
  "lean",
  "leap",
  "lear",
  "lease",
  "leash",
  "least",
  "leave",
  "ledge",
  "leech",
  "leeds",
  "leek",
  "leer",
  "left",
  "lefty",
  "leg",
  "lego",
  "legs",
  "lemon",
  "lemur",
  "lens",
  "lent",
  "let",
  "level",
  "lever",
  "liar",
  "libel",
  "lick",
  "lid",
  "lie",
  "lied",
  "life",
  "lift",
  "light",
  "like",
  "lilac",
  "limb",
  "limbo",
  "lime",
  "limit",
  "limp",
  "line",
  "linen",
  "liner",
  "link",
  "links",
  "lint",
  "lion",
  "lip",
  "lisp",
  "list",
  "lit",
  "liter",
  "liver",
  "llama",
  "loach",
  "load",
  "loads",
  "loaf",
  "loan",
  "lob",
  "lobby",
  "lobe",
  "local",
  "lock",
  "lodge",
  "loft",
  "log",
  "logic",
  "logo",
  "loner",
  "look",
  "loom",
  "loon",
  "loony",
  "loop",
  "loot",
  "lord",
  "loser",
  "loss",
  "lost",
  "lot",
  "lots",
  "lotto",
  "lotus",
  "love",
  "lover",
  "low",
  "lower",
  "luck",
  "lump",
  "lunch",
  "lung",
  "lure",
  "lush",
  "lying",
  "mace",
  "macro",
  "madam",
  "mafia",
  "magi",
  "magic",
  "magma",
  "maid",
  "mail",
  "main",
  "major",
  "maker",
  "male",
  "malt",
  "mam",
  "mama",
  "mamba",
  "mambo",
  "mamma",
  "man",
  "mane",
  "mango",
  "mania",
  "manor",
  "map",
  "maple",
  "march",
  "mare",
  "mark",
  "marks",
  "mars",
  "marsh",
  "mash",
  "mask",
  "mass",
  "mast",
  "mat",
  "match",
  "mate",
  "mates",
  "math",
  "maths",
  "max",
  "maxim",
  "may",
  "mayo",
  "mayor",
  "maze",
  "meal",
  "mean",
  "means",
  "meat",
  "medal",
  "medic",
  "meet",
  "meld",
  "melee",
  "melon",
  "melt",
  "memo",
  "men",
  "mend",
  "menu",
  "meow",
  "mercy",
  "merit",
  "mesh",
  "mess",
  "metal",
  "meter",
  "meth",
  "metro",
  "might",
  "mile",
  "milk",
  "mill",
  "mills",
  "mimer",
  "mimic",
  "min",
  "mince",
  "mind",
  "mine",
  "miner",
  "mini",
  "mink",
  "minor",
  "mint",
  "minus",
  "miser",
  "miss",
  "mist",
  "mite",
  "miter",
  "mitt",
  "mix",
  "mixer",
  "moan",
  "moat",
  "mob",
  "mocha",
  "mock",
  "mod",
  "modal",
  "mode",
  "model",
  "modem",
  "mogul",
  "mojo",
  "molar",
  "mold",
  "mole",
  "molt",
  "mom",
  "momma",
  "mommy",
  "money",
  "monk",
  "month",
  "moo",
  "mooch",
  "mood",
  "moody",
  "moon",
  "moose",
  "mop",
  "mope",
  "moped",
  "moral",
  "morse",
  "moss",
  "motel",
  "moth",
  "motor",
  "motto",
  "mould",
  "mound",
  "mount",
  "mouse",
  "mouth",
  "move",
  "mover",
  "movie",
  "mow",
  "mucus",
  "mud",
  "muff",
  "mug",
  "mulch",
  "mule",
  "mum",
  "mummy",
  "munch",
  "mural",
  "muse",
  "mush",
  "music",
  "musk",
  "must",
  "mute",
  "mutt",
  "mylar",
  "nacho",
  "name",
  "namer",
  "names",
  "nanna",
  "nap",
  "nasal",
  "navy",
  "neck",
  "need",
  "needy",
  "neon",
  "nepal",
  "nerd",
  "nerve",
  "nest",
  "net",
  "news",
  "newt",
  "nick",
  "niece",
  "night",
  "nine",
  "niner",
  "ninja",
  "ninth",
  "noble",
  "nod",
  "node",
  "noise",
  "nomad",
  "none",
  "nook",
  "noon",
  "noose",
  "north",
  "nose",
  "notch",
  "note",
  "noun",
  "nudge",
  "nuke",
  "nun",
  "nurse",
  "nut",
  "nylon",
  "oaf",
  "oak",
  "oar",
  "oasis",
  "oat",
  "oates",
  "oath",
  "ocean",
  "octet",
  "odds",
  "ode",
  "odor",
  "offer",
  "ogre",
  "oil",
  "oiler",
  "oink",
  "okay",
  "old",
  "oldie",
  "olive",
  "omega",
  "omen",
  "one",
  "onion",
  "onset",
  "ooze",
  "open",
  "optic",
  "oral",
  "orange",
  "orb",
  "orbit",
  "orca",
  "order",
  "ore",
  "oreo",
  "organ",
  "ounce",
  "out",
  "oval",
  "oven",
  "over",
  "owl",
  "owner",
  "oxbow",
  "oxen",
  "ozone",
  "pace",
  "pacer",
  "pack",
  "pact",
  "pad",
  "page",
  "pager",
  "pail",
  "pain",
  "pains",
  "paint",
  "pair",
  "pal",
  "pale",
  "palm",
  "pan",
  "panda",
  "pane",
  "panel",
  "panic",
  "pansy",
  "pant",
  "pants",
  "papa",
  "paper",
  "par",
  "park",
  "parks",
  "part",
  "parts",
  "party",
  "pass",
  "past",
  "pasta",
  "paste",
  "pat",
  "patch",
  "path",
  "patio",
  "pause",
  "pave",
  "paw",
  "pawn",
  "pay",
  "payer",
  "peace",
  "peach",
  "peak",
  "pear",
  "pearl",
  "pecan",
  "pedal",
  "peek",
  "peel",
  "peer",
  "peg",
  "pelt",
  "pen",
  "penny",
  "perch",
  "peril",
  "perk",
  "pesto",
  "pet",
  "petal",
  "petty",
  "phase",
  "phone",
  "photo",
  "piano",
  "pick",
  "pie",
  "piece",
  "pier",
  "pig",
  "piggy",
  "pigmy",
  "pike",
  "pile",
  "piles",
  "pill",
  "pimp",
  "pin",
  "pinch",
  "pine",
  "ping",
  "pink",
  "pinky",
  "pinot",
  "pint",
  "pipe",
  "pit",
  "pita",
  "pitch",
  "pitt",
  "pity",
  "pivot",
  "pixel",
  "pizza",
  "place",
  "plaid",
  "plain",
  "plan",
  "plane",
  "plank",
  "plant",
  "plate",
  "play",
  "plaza",
  "plea",
  "plier",
  "plot",
  "plow",
  "ploy",
  "pluck",
  "plug",
  "plum",
  "plumb",
  "plume",
  "plump",
  "plus",
  "plush",
  "plyer",
  "pod",
  "poem",
  "poet",
  "point",
  "poke",
  "poker",
  "pole",
  "poll",
  "polls",
  "pond",
  "pong",
  "pony",
  "pooch",
  "poof",
  "pool",
  "poor",
  "pop",
  "poppy",
  "porch",
  "pore",
  "pork",
  "port",
  "pose",
  "poser",
  "post",
  "pot",
  "pouch",
  "pound",
  "power",
  "prank",
  "prawn",
  "press",
  "prey",
  "price",
  "pride",
  "prime",
  "prism",
  "prize",
  "pro",
  "probe",
  "prom",
  "promo",
  "proof",
  "prop",
  "props",
  "prose",
  "prowl",
  "prune",
  "pry",
  "pub",
  "puck",
  "puff",
  "pug",
  "pull",
  "pulp",
  "pulse",
  "puma",
  "pump",
  "pun",
  "punch",
  "punk",
  "punks",
  "punt",
  "pup",
  "pupil",
  "puppy",
  "purge",
  "purse",
  "push",
  "put",
  "putt",
  "putty",
  "quack",
  "quad",
  "quake",
  "qualm",
  "quart",
  "queen",
  "query",
  "quest",
  "quick",
  "quid",
  "quiet",
  "quilt",
  "quirk",
  "quirt",
  "quiz",
  "quota",
  "quote",
  "race",
  "racer",
  "rad",
  "radar",
  "radio",
  "raft",
  "rafts",
  "rag",
  "rage",
  "raid",
  "rail",
  "rails",
  "rain",
  "raise",
  "rake",
  "rally",
  "ram",
  "ramp",
  "ranch",
  "range",
  "rank",
  "rant",
  "rap",
  "rapid",
  "rash",
  "rat",
  "rate",
  "rates",
  "ratio",
  "raw",
  "ray",
  "razor",
  "razz",
  "reach",
  "read",
  "ready",
  "real",
  "realm",
  "ream",
  "rear",
  "rebel",
  "red",
  "reed",
  "reef",
  "reek",
  "reel",
  "reign",
  "relay",
  "relic",
  "rent",
  "reply",
  "reset",
  "resin",
  "rest",
  "retro",
  "revel",
  "rhino",
  "rhyme",
  "rib",
  "rice",
  "ricer",
  "rich",
  "ride",
  "rider",
  "ridge",
  "riff",
  "rifle",
  "rift",
  "rig",
  "right",
  "rim",
  "rind",
  "ring",
  "rings",
  "rink",
  "rinse",
  "riot",
  "rip",
  "rise",
  "riser",
  "risk",
  "rite",
  "rival",
  "river",
  "roach",
  "road",
  "roads",
  "roar",
  "roast",
  "robe",
  "robin",
  "robot",
  "rock",
  "rod",
  "rodeo",
  "rogue",
  "role",
  "roll",
  "room",
  "rooms",
  "roost",
  "root",
  "roots",
  "rope",
  "rose",
  "rot",
  "rotor",
  "rouge",
  "rough",
  "round",
  "route",
  "rover",
  "row",
  "rowdy",
  "rower",
  "royal",
  "rub",
  "rube",
  "ruby",
  "rug",
  "rugby",
  "ruin",
  "rule",
  "ruler",
  "rum",
  "rummy",
  "rumor",
  "run",
  "rune",
  "rung",
  "runt",
  "ruse",
  "rush",
  "rust",
  "rut",
  "saber",
  "safe",
  "sag",
  "saga",
  "sage",
  "sail",
  "saint",
  "salad",
  "sale",
  "salem",
  "sales",
  "salon",
  "salsa",
  "salt",
  "same",
  "sand",
  "sands",
  "sang",
  "sash",
  "sass",
  "sauce",
  "sauna",
  "save",
  "saver",
  "savor",
  "saw",
  "say",
  "scale",
  "scan",
  "scar",
  "scare",
  "scarf",
  "scene",
  "scent",
  "scold",
  "scone",
  "scoop",
  "scope",
  "score",
  "scorn",
  "scout",
  "scrap",
  "sea",
  "seal",
  "seam",
  "seat",
  "seats",
  "sect",
  "sedan",
  "see",
  "seed",
  "seek",
  "seer",
  "self",
  "sell",
  "sense",
  "serum",
  "serve",
  "servo",
  "set",
  "setup",
  "seven",
  "shack",
  "shade",
  "shake",
  "sham",
  "shame",
  "shank",
  "shape",
  "shard",
  "share",
  "shark",
  "sharp",
  "shave",
  "shawl",
  "shed",
  "sheep",
  "sheet",
  "shelf",
  "shell",
  "shift",
  "shill",
  "shim",
  "shin",
  "ship",
  "shirt",
  "shoe",
  "shoes",
  "shop",
  "shore",
  "shot",
  "shove",
  "show",
  "shred",
  "shrub",
  "shrug",
  "shy",
  "sick",
  "siege",
  "sigh",
  "sight",
  "sign",
  "silk",
  "silks",
  "silly",
  "silo",
  "sin",
  "sink",
  "sinus",
  "sip",
  "sir",
  "siren",
  "six",
  "sixer",
  "sixth",
  "sixty",
  "size",
  "ski",
  "skid",
  "skier",
  "skill",
  "skim",
  "skin",
  "skip",
  "skirt",
  "skit",
  "skull",
  "skunk",
  "sky",
  "slab",
  "slack",
  "slag",
  "slain",
  "slam",
  "slang",
  "slant",
  "slap",
  "slash",
  "slate",
  "slave",
  "slaw",
  "sled",
  "sleep",
  "sleet",
  "slew",
  "slews",
  "slice",
  "slick",
  "slide",
  "slime",
  "sling",
  "slip",
  "slit",
  "slob",
  "slope",
  "slot",
  "sloth",
  "slug",
  "slum",
  "slump",
  "slur",
  "slush",
  "smack",
  "small",
  "smart",
  "smash",
  "smear",
  "smell",
  "smelt",
  "smile",
  "smirk",
  "smith",
  "smock",
  "smog",
  "smoke",
  "snack",
  "snag",
  "snail",
  "snake",
  "snap",
  "snare",
  "snarl",
  "sneak",
  "sniff",
  "snipe",
  "snore",
  "snort",
  "snot",
  "snow",
  "snug",
  "soak",
  "soap",
  "soar",
  "sob",
  "sock",
  "sofa",
  "softy",
  "soil",
  "sole",
  "solid",
  "son",
  "sonar",
  "song",
  "sonny",
  "soot",
  "sooth",
  "sore",
  "sort",
  "soul",
  "sound",
  "soup",
  "sour",
  "south",
  "spa",
  "space",
  "spade",
  "spam",
  "span",
  "spar",
  "spare",
  "spark",
  "spasm",
  "spat",
  "spawn",
  "speed",
  "spell",
  "spelt",
  "spice",
  "spike",
  "spill",
  "spin",
  "spit",
  "spite",
  "splat",
  "split",
  "spoil",
  "spoke",
  "spoof",
  "spook",
  "spool",
  "spoon",
  "spore",
  "sport",
  "spot",
  "spots",
  "spout",
  "spray",
  "spree",
  "spud",
  "spur",
  "spurt",
  "spy",
  "squat",
  "squid",
  "stab",
  "stack",
  "staff",
  "stag",
  "stage",
  "stain",
  "stair",
  "stake",
  "stalk",
  "stall",
  "stamp",
  "stand",
  "star",
  "stare",
  "start",
  "stash",
  "state",
  "stay",
  "stays",
  "steak",
  "steal",
  "steam",
  "steed",
  "steel",
  "steer",
  "stem",
  "step",
  "steps",
  "stern",
  "stew",
  "stick",
  "stiff",
  "still",
  "stilt",
  "sting",
  "stink",
  "stint",
  "stir",
  "stock",
  "stoic",
  "stomp",
  "stone",
  "stool",
  "stoop",
  "stop",
  "stops",
  "store",
  "stork",
  "storm",
  "story",
  "stove",
  "strap",
  "straw",
  "stray",
  "strip",
  "strum",
  "strut",
  "stub",
  "stud",
  "study",
  "stuff",
  "stump",
  "stunt",
  "style",
  "sub",
  "suds",
  "sugar",
  "suit",
  "suite",
  "sum",
  "sumer",
  "sun",
  "sung",
  "super",
  "surf",
  "surge",
  "sushi",
  "sutra",
  "swab",
  "swag",
  "swamp",
  "swan",
  "swap",
  "swarm",
  "sway",
  "sweat",
  "sweep",
  "sweet",
  "swell",
  "swift",
  "swim",
  "swine",
  "swing",
  "swipe",
  "swirl",
  "swish",
  "syrup",
  "table",
  "tack",
  "taco",
  "tact",
  "tad",
  "taffy",
  "tag",
  "tail",
  "tails",
  "take",
  "taker",
  "tale",
  "talk",
  "talks",
  "tall",
  "tally",
  "talon",
  "tan",
  "tank",
  "tap",
  "tape",
  "taps",
  "tar",
  "tarp",
  "tart",
  "task",
  "taste",
  "taunt",
  "tax",
  "taxer",
  "taxi",
  "taxis",
  "tea",
  "teach",
  "teal",
  "team",
  "tear",
  "tears",
  "tease",
  "teen",
  "teens",
  "teeth",
  "tell",
  "temp",
  "tempo",
  "ten",
  "tense",
  "tent",
  "tenth",
  "term",
  "terms",
  "test",
  "text",
  "thaw",
  "theft",
  "theme",
  "then",
  "there",
  "theta",
  "thick",
  "thief",
  "thigh",
  "thing",
  "think",
  "third",
  "thorn",
  "three",
  "throw",
  "thud",
  "thug",
  "thumb",
  "tick",
  "tide",
  "tidy",
  "tie",
  "tier",
  "tiger",
  "tilde",
  "tile",
  "till",
  "time",
  "timer",
  "times",
  "timid",
  "tin",
  "tint",
  "tip",
  "tire",
  "titan",
  "title",
  "toad",
  "toady",
  "toast",
  "today",
  "toe",
  "toil",
  "token",
  "toll",
  "tomb",
  "tome",
  "ton",
  "tone",
  "toner",
  "tongs",
  "tonic",
  "tons",
  "tool",
  "toon",
  "toot",
  "tooth",
  "top",
  "topic",
  "torch",
  "torso",
  "toss",
  "total",
  "tote",
  "totem",
  "touch",
  "tough",
  "tour",
  "tours",
  "tow",
  "towel",
  "tower",
  "town",
  "towny",
  "toxin",
  "toy",
  "trace",
  "track",
  "trade",
  "trail",
  "train",
  "trait",
  "trap",
  "trash",
  "tray",
  "tread",
  "treat",
  "tree",
  "trek",
  "trend",
  "triad",
  "trial",
  "trick",
  "trim",
  "trio",
  "trip",
  "troll",
  "troop",
  "trot",
  "trout",
  "truce",
  "truck",
  "true",
  "trump",
  "trunk",
  "trust",
  "truth",
  "try",
  "tub",
  "tuba",
  "tube",
  "tuck",
  "tug",
  "tulip",
  "tummy",
  "tumor",
  "tuna",
  "tune",
  "tuner",
  "tunic",
  "turf",
  "turn",
  "tush",
  "tusk",
  "tutor",
  "twine",
  "twins",
  "twirl",
  "twist",
  "two",
  "tying",
  "type",
  "typo",
  "udder",
  "ulcer",
  "uncle",
  "union",
  "unit",
  "unity",
  "upper",
  "upset",
  "urn",
  "usage",
  "use",
  "user",
  "usher",
  "using",
  "valet",
  "valor",
  "value",
  "valve",
  "van",
  "vase",
  "vat",
  "vault",
  "vegan",
  "veil",
  "vein",
  "venom",
  "vent",
  "venue",
  "verb",
  "verge",
  "vest",
  "vet",
  "vial",
  "vibe",
  "vibes",
  "vice",
  "video",
  "view",
  "vigil",
  "vine",
  "vinyl",
  "viola",
  "viper",
  "virgo",
  "virus",
  "visit",
  "visor",
  "vista",
  "vocal",
  "vodka",
  "vogue",
  "voice",
  "void",
  "volt",
  "vote",
  "voter",
  "vow",
  "vowel",
  "wacko",
  "wad",
  "wade",
  "wader",
  "wads",
  "wafer",
  "waft",
  "wag",
  "wage",
  "wager",
  "wages",
  "wagon",
  "wail",
  "wain",
  "waist",
  "wait",
  "wake",
  "walk",
  "wall",
  "waltz",
  "wane",
  "want",
  "war",
  "ward",
  "ware",
  "warp",
  "wart",
  "wash",
  "wasp",
  "waste",
  "watch",
  "water",
  "watt",
  "watts",
  "wave",
  "waver",
  "wax",
  "way",
  "ways",
  "wear",
  "weave",
  "web",
  "wed",
  "wedge",
  "week",
  "weird",
  "well",
  "wells",
  "welsh",
  "west",
  "wet",
  "whack",
  "whale",
  "wharf",
  "wheat",
  "wheel",
  "whey",
  "whiff",
  "while",
  "whim",
  "whip",
  "whirl",
  "whisk",
  "white",
  "who",
  "whole",
  "whore",
  "why",
  "wick",
  "widow",
  "width",
  "wife",
  "wig",
  "wild",
  "will",
  "wilt",
  "wimp",
  "win",
  "wince",
  "winch",
  "wind",
  "wine",
  "wing",
  "wings",
  "wink",
  "wipe",
  "wiper",
  "wire",
  "wise",
  "wish",
  "wit",
  "witch",
  "wits",
  "woe",
  "wolf",
  "woman",
  "womb",
  "won",
  "wood",
  "woods",
  "woof",
  "wool",
  "word",
  "words",
  "work",
  "works",
  "world",
  "worm",
  "worry",
  "worse",
  "worst",
  "wort",
  "worth",
  "wound",
  "wow",
  "wrack",
  "wrap",
  "wrath",
  "wreck",
  "wring",
  "wrist",
  "wrong",
  "yam",
  "yard",
  "yarn",
  "yawn",
  "yay",
  "year",
  "years",
  "yeast",
  "yell",
  "yes",
  "yeti",
  "yield",
  "yoga",
  "yolk",
  "young",
  "youth",
  "zap",
  "zebra",
  "zinc",
  "zing",
  "zip",
  "zit",
  "zone",
  "zoo",
  "zoom",
  "zero",
  "whir",
  "welt",
  "whig",
  "wand",
  "twin",
  "tribe",
  "tilt",
  "sword",
  "spine",
  "spear",
  "site",
  "shock",
  "sent"
], In = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};
function dg({ config: e }) {
  const n = fn(), [t, r] = Ze(`${fi[Math.floor(Math.random() * fi.length)]}-${pi[Math.floor(Math.random() * pi.length)]}-${Math.floor(Math.random() * (99 - 0 + 1) + 0)}`), [i, o] = Ze(e.minTeams), [l, a] = Ze(e.variants.length > 0 ? e.variants[0] : null);
  ot(() => {
    const u = async () => {
      let f = await Vo(e.host);
      (!f || f.status !== 200) && n("/status/down");
    };
    u();
    const c = setInterval(async () => {
      u();
    }, 1e4);
    return () => clearInterval(c);
  }, [n]);
  async function s(u) {
    u.preventDefault();
    let c = await Ds(e.host, e.key, t, i, l);
    (c === 201 || c === 400) && n(`/${t}`);
  }
  return /* @__PURE__ */ P.jsx("div", { children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center m-8 md:m-12", children: [
    /* @__PURE__ */ P.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center fade-in", children: [
      /* @__PURE__ */ P.jsx("div", { className: ` text-5xl font-black font-['${e.font}'] text-${e.color} mb-1 cursor-pointer`, children: /* @__PURE__ */ P.jsx("a", { href: `${window.location.protocol}//${window.location.host}`, children: e.key }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "font-thin mb-3", children: [
        "Play ",
        e.minTeams === e.maxTeams ? `${In[e.minTeams]}` : `${In[e.minTeams]} to ${In[e.maxTeams]}`,
        " player ",
        e.key,
        " online against friends. To create a game or join an existing one, enter a game ID and click 'Go'."
      ] }),
      /* @__PURE__ */ P.jsxs("form", { className: "w-full flex mb-3", onSubmit: s, children: [
        /* @__PURE__ */ P.jsx("input", { className: "w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2", autoFocus: !0, type: "text", value: t, onChange: (u) => r(u.target.value) }),
        /* @__PURE__ */ P.jsx("button", { className: "w-2/12 font-bold grow-0 bg-blue-500", children: "Go" })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex w-full justify-between flex-wrap", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex order-2 md:order-1", children: [
          /* @__PURE__ */ P.jsx("button", { onClick: () => n("/rules"), title: "how to play", className: "mr-3 md:mr-2 p-2 first-line:p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
          /* @__PURE__ */ P.jsxs("a", { className: "italic text-xs py-1 px-2 border-blue-500 border border-dashed text-blue-500", href: "https://quibbble.com", target: "_blank", children: [
            "more ",
            /* @__PURE__ */ P.jsx("span", { className: "text-zinc-100 font-['lobster'] text-sm not-italic", children: "quibbble" }),
            " games"
          ] })
        ] }),
        /* @__PURE__ */ P.jsxs("div", { className: "flex items-center order-1 md:order-2 mb-3 md:mb-0", children: [
          l ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ P.jsx("div", { className: "mr-1 font-black text-blue-500", children: "VARIANT" }),
            /* @__PURE__ */ P.jsx("select", { className: "mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (u) => a(u.target.value.replace(/\s/g, "")), children: e.variants.map((u) => /* @__PURE__ */ P.jsx("option", { value: u, children: u }, u)) })
          ] }) : null,
          e.minTeams !== e.maxTeams ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ P.jsx("div", { className: "mx-1 font-black text-blue-500", children: "PLAYERS" }),
            /* @__PURE__ */ P.jsx("select", { className: "bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (u) => o(parseInt(u.target.value)), children: Array(e.maxTeams - e.minTeams + 1).fill().map((u, c) => e.minTeams + c).map((u) => /* @__PURE__ */ P.jsx("option", { value: u, children: u }, u)) })
          ] }) : null
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ P.jsx(wr, {}) })
  ] }) });
}
var Wo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, hi = Re.createContext && Re.createContext(Wo), lt = globalThis && globalThis.__assign || function() {
  return lt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, lt.apply(this, arguments);
}, Ls = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
function Yo(e) {
  return e && e.map(function(n, t) {
    return Re.createElement(n.tag, lt({
      key: t
    }, n.attr), Yo(n.child));
  });
}
function bn(e) {
  return function(n) {
    return Re.createElement(Ns, lt({
      attr: lt({}, e.attr)
    }, n), Yo(e.child));
  };
}
function Ns(e) {
  var n = function(t) {
    var r = e.attr, i = e.size, o = e.title, l = Ls(e, ["attr", "size", "title"]), a = i || t.size || "1em", s;
    return t.className && (s = t.className), e.className && (s = (s ? s + " " : "") + e.className), Re.createElement("svg", lt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, l, {
      className: s,
      style: lt(lt({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Re.createElement("title", null, o), e.children);
  };
  return hi !== void 0 ? Re.createElement(hi.Consumer, null, function(t) {
    return n(t);
  }) : n(Wo);
}
function Ms(e) {
  return bn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function $s(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" } }] })(e);
}
function Bs(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48 252 259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z" } }] })(e);
}
function Us(e) {
  return bn({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z" } }, { tag: "path", attr: { d: "M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z" } }] })(e);
}
function qs({ isConn: e }) {
  const [n, t] = Ze(0);
  return ot(() => {
    e ? setTimeout(() => t((r) => r - 1), 1500) : t(0);
  }, [e, t]), /* @__PURE__ */ P.jsxs("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}`, children: [
    n ? null : /* @__PURE__ */ P.jsx("div", { className: "px-1", children: e ? "connected" : "connecting" }),
    /* @__PURE__ */ P.jsx("div", { onClick: () => {
      e && (t(0), setTimeout(() => t(n - 1), 1500));
    }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}`, children: e ? null : /* @__PURE__ */ P.jsx("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" }) })
  ] });
}
const mg = ga((e, n) => {
  const {
    config: t,
    ws: r,
    game: i,
    setGame: o,
    network: l,
    setNetwork: a,
    chat: s,
    setChat: u,
    connected: c,
    setConnected: f,
    error: m,
    setError: p,
    debug: d,
    children: y
  } = e;
  d && (i && console.log("game: ", i), l && console.log("network: ", l), s && console.log("chat: ", s), c && console.log("connected: ", c), m && console.log("error: ", m));
  const { gameID: b } = ba(), w = fn(), A = Jt((W) => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: W } }));
  });
  Jt(() => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetOpenTeam" }));
  });
  const C = Jt(() => {
    if (!r.current)
      return;
    const W = i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "";
    r.current.send(JSON.stringify({ ActionType: "Reset", MoreDetails: { MoreOptions: { Seed: Date.now(), Variant: W } } }));
  }), j = Jt(() => {
    r.current && (i && c && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team !== c[l.Name] || r.current.send(JSON.stringify({ ActionType: "Undo" })));
  }), [v, x] = Ze();
  ot(() => {
    c && l && c[l.Name] && x(c[l.Name]);
  }, [c, l, x]), ot(() => {
    v && localStorage.setItem(b, v);
  }, [v, b]);
  const [N, q] = Ze(!0);
  ot(() => {
    let W = !1;
    const le = async (xe) => {
      if (xe <= 0) {
        w("/");
        return;
      }
      let h = await zs(t.host, t.key, b);
      if (!h) {
        W && sessionStorage.setItem("gameID", b), w("/status/down");
        return;
      }
      if (h.status !== 200) {
        w("/");
        return;
      }
      r.current = new WebSocket(`${t.websocket}/game/join?GameKey=${t.key}&GameID=${b.toLowerCase()}`), r.current.onopen = () => {
        q(!0), W = !0;
        let F = localStorage.getItem(b);
        F && A(F);
      }, r.current.onclose = () => {
        q(!1), setTimeout(function() {
          le(xe - 1);
        }, 1e3 + (3 - xe) * 500);
      }, r.current.onmessage = async (F) => {
        let M = JSON.parse(F.data);
        M.Type === "Game" ? o(M.Payload) : M.Type === "Network" ? a(M.Payload) : M.Type === "Chat" ? u((g) => g.concat([M.Payload])) : M.Type === "Connected" ? f(M.Payload) : M.Type === "Error" && p(M.Payload);
      }, r.current.onerror = (F) => {
        console.error("Socket encountered error: ", F.message, "Closing socket"), r.current.close();
      };
    };
    le(3);
  }, [r, b, w]);
  const [te, E] = Ze(!0);
  ot(() => {
    const W = () => E(!te);
    return window.addEventListener("resize", W), (le) => window.removeEventListener("resize", W);
  });
  const [_, z] = Ze(0);
  ot(() => {
    _ > 0 && setTimeout(() => z(_ - 1), 1e3);
  }, [_]);
  const [Q, Z] = Ze(!1), G = () => /* @__PURE__ */ P.jsx("div", { className: "z-50 absolute h-[95%] w-full flex items-center justify-center fade-in", children: /* @__PURE__ */ P.jsxs("div", { className: "bg-zinc-900 p-8 rounded-md", children: [
    /* @__PURE__ */ P.jsx("p", { className: "mb-4", children: "Are you sure you want to reset the game?" }),
    /* @__PURE__ */ P.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "px-2 py-1 bg-blue-500 text-sm font-bold",
          onClick: () => Z(!1),
          children: "cancel"
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "px-2 py-1 bg-red-500 text-sm font-bold",
          onClick: () => {
            C(), Z(!1);
          },
          children: "reset game"
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ P.jsxs("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4 fade-in", children: [
    Q ? /* @__PURE__ */ P.jsx(G, {}) : null,
    /* @__PURE__ */ P.jsxs("div", { ref: n, className: `h-full w-full ${t.gamePageMaxWidth ? t.gamePageMaxWidth : "max-w-xl"} flex flex-col items-center grow`, children: [
      /* @__PURE__ */ P.jsxs("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm", children: [
        /* @__PURE__ */ P.jsxs("div", { children: [
          /* @__PURE__ */ P.jsxs("div", { className: "flex items-center cursor-pointer", onClick: () => {
            z(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${b}`);
          }, children: [
            /* @__PURE__ */ P.jsx(Us, { className: "mr-1" }),
            /* @__PURE__ */ P.jsx("span", { className: "underline", children: `${window.location.protocol}//${window.location.host}/${b}` })
          ] }),
          _ > 0 ? /* @__PURE__ */ P.jsxs("div", { className: "absolute mt-2 w-6/12 flex justify-center", children: [
            /* @__PURE__ */ P.jsx("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block", children: /* @__PURE__ */ P.jsx("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" }) }),
            /* @__PURE__ */ P.jsx("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1", children: "copied!" })
          ] }) : null
        ] }),
        /* @__PURE__ */ P.jsx("div", { className: "px-1", children: /* @__PURE__ */ P.jsx(qs, { isConn: N }) })
      ] }),
      /* @__PURE__ */ P.jsx("hr", { className: "w-full mb-2" }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex w-full justify-between items-center mb-4", children: [
        /* @__PURE__ */ P.jsx("div", { className: "flex", children: i && i.Teams ? i.Teams.map((W) => /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${W}-500 ${v === W ? `bg-${v}-500 pointer-events-none` : ""}`,
            onClick: () => A(W),
            children: i && i.MoreData && i.MoreData.Points ? i.MoreData.Points[W] : ""
          },
          W
        )) : null }),
        /* @__PURE__ */ P.jsx("div", { className: `font-extrabold ${i && c && l && c[l.Name] && i.Winners.length === 0 ? `text-${i.Turn}-500` : "text-zinc-100"} ${i && l && c && c[l.Name] === i.Turn && i.Winners.length === 0 ? "animate-pulse" : ""}`, children: i && c && l && c[l.Name] ? i.Message : /* @__PURE__ */ P.jsxs("div", { className: "flex items-center animate-pulse", children: [
          /* @__PURE__ */ P.jsx(Ms, { className: "mr-1" }),
          /* @__PURE__ */ P.jsx("div", { children: "select a team" })
        ] }) })
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "p-4 h-full w-full flex flex-col justify-center items-center grow", children: y }),
      /* @__PURE__ */ P.jsx("hr", { className: "w-full mt-4 mb-2" }),
      /* @__PURE__ */ P.jsxs("div", { className: "w-full flex justify-between items-center", children: [
        /* @__PURE__ */ P.jsx("div", { className: `leading-4 text-2xl font-black text-${t.color} cursor-pointer`, children: /* @__PURE__ */ P.jsxs("button", { onClick: () => {
          sessionStorage.setItem("gameID", ""), w("/");
        }, children: [
          /* @__PURE__ */ P.jsx("span", { className: `font-['${t.font}']`, children: t.key }),
          /* @__PURE__ */ P.jsx("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100", children: i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "" })
        ] }) }),
        /* @__PURE__ */ P.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ P.jsx("button", { onClick: () => Z(!0), title: "reset game", className: `p-2 ${i && i.Winners.length > 0 ? "bg-blue-500" : "bg-zinc-500"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ P.jsx($s, {}) }),
          /* @__PURE__ */ P.jsx("button", { onClick: () => j(), title: "undo move", className: `p-2 ${i && c && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team === c[l.Name] ? "bg-amber-500" : "bg-zinc-700 text-zinc-500 cursor-default"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ P.jsx(Bs, {}) }),
          /* @__PURE__ */ P.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), w("/rules");
          }, title: "how to play", className: "p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
          /* @__PURE__ */ P.jsxs("a", { className: "hidden md:flex italic text-xs ml-2 py-1 px-2 border-blue-500 border border-dashed text-blue-500", href: "https://quibbble.com", target: "_blank", children: [
            "more ",
            /* @__PURE__ */ P.jsx("span", { className: "text-zinc-200 font-['lobster'] text-sm not-italic", children: "quibbble" }),
            " games"
          ] })
        ] })
      ] })
    ] })
  ] });
}), di = ["http", "https", "mailto", "tel"];
function Hs(e) {
  const n = (e || "").trim(), t = n.charAt(0);
  if (t === "#" || t === "/")
    return n;
  const r = n.indexOf(":");
  if (r === -1)
    return n;
  let i = -1;
  for (; ++i < di.length; ) {
    const o = di[i];
    if (r === o.length && n.slice(0, o.length).toLowerCase() === o)
      return n;
  }
  return i = n.indexOf("?"), i !== -1 && r > i || (i = n.indexOf("#"), i !== -1 && r > i) ? n : "javascript:void(0)";
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Vs = function(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
};
const Go = /* @__PURE__ */ Mt(Vs);
function jt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? mi(e.position) : "start" in e || "end" in e ? mi(e) : "line" in e || "column" in e ? or(e) : "";
}
function or(e) {
  return gi(e && e.line) + ":" + gi(e && e.column);
}
function mi(e) {
  return or(e && e.start) + "-" + or(e && e.end);
}
function gi(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ue extends Error {
  /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   *
   *   > 👉 **Note**: you should use markdown.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // To do: next major: expose `undefined` everywhere instead of `null`.
  constructor(n, t, r) {
    const i = [null, null];
    let o = {
      // @ts-expect-error: we always follows the structure of `position`.
      start: { line: null, column: null },
      // @ts-expect-error: "
      end: { line: null, column: null }
    };
    if (super(), typeof t == "string" && (r = t, t = void 0), typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? i[1] = r : (i[0] = r.slice(0, l), i[1] = r.slice(l + 1));
    }
    t && ("type" in t || "position" in t ? t.position && (o = t.position) : "start" in t || "end" in t ? o = t : ("line" in t || "column" in t) && (o.start = t)), this.name = jt(t) || "1:1", this.message = typeof n == "object" ? n.message : n, this.stack = "", typeof n == "object" && n.stack && (this.stack = n.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note;
  }
}
Ue.prototype.file = "";
Ue.prototype.name = "";
Ue.prototype.reason = "";
Ue.prototype.message = "";
Ue.prototype.stack = "";
Ue.prototype.fatal = null;
Ue.prototype.column = null;
Ue.prototype.line = null;
Ue.prototype.source = null;
Ue.prototype.ruleId = null;
Ue.prototype.position = null;
const Ye = { basename: Ws, dirname: Ys, extname: Gs, join: Js, sep: "/" };
function Ws(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  Ut(e);
  let t = 0, r = -1, i = e.length, o;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.charCodeAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else
        r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let l = -1, a = n.length - 1;
  for (; i--; )
    if (e.charCodeAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.charCodeAt(i) === n.charCodeAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return t === r ? r = l : r < 0 && (r = e.length), e.slice(t, r);
}
function Ys(e) {
  if (Ut(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.charCodeAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else
      r || (r = !0);
  return n < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : n === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, n);
}
function Gs(e) {
  Ut(e);
  let n = e.length, t = -1, r = 0, i = -1, o = 0, l;
  for (; n--; ) {
    const a = e.charCodeAt(n);
    if (a === 47) {
      if (l) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (l = !0, t = n + 1), a === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function Js(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    Ut(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Ks(t);
}
function Ks(e) {
  Ut(e);
  const n = e.charCodeAt(0) === 47;
  let t = Xs(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.charCodeAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Xs(e, n) {
  let t = "", r = 0, i = -1, o = 0, l = -1, a, s;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.charCodeAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1))
        if (i !== l - 1 && o === 2) {
          if (t.length < 2 || r !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                s < 0 ? (t = "", r = 0) : (t = t.slice(0, s), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
                continue;
              }
            } else if (t.length > 0) {
              t = "", r = 0, i = l, o = 0;
              continue;
            }
          }
          n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
        } else
          t.length > 0 ? t += "/" + e.slice(i + 1, l) : t = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else
      a === 46 && o > -1 ? o++ : o = -1;
  }
  return t;
}
function Ut(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Qs = { cwd: Zs };
function Zs() {
  return "/";
}
function lr(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function eu(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!lr(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return tu(e);
}
function tu(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.charCodeAt(t) === 37 && n.charCodeAt(t + 1) === 50) {
      const r = n.charCodeAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const _n = ["history", "path", "basename", "stem", "extname", "dirname"];
class Jo {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Buffer` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? typeof n == "string" || nu(n) ? t = { value: n } : lr(n) ? t = { path: n } : t = n : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Qs.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < _n.length; ) {
      const o = _n[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      _n.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {string | URL} path
   */
  set path(n) {
    lr(n) && (n = eu(n)), Dn(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the parent path (example: `'~'`).
   */
  get dirname() {
    return typeof this.path == "string" ? Ye.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */
  set dirname(n) {
    yi(this.basename, "dirname"), this.path = Ye.join(n || "", this.basename);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */
  get basename() {
    return typeof this.path == "string" ? Ye.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set basename(n) {
    Dn(n, "basename"), jn(n, "basename"), this.path = Ye.join(this.dirname || "", n);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   */
  get extname() {
    return typeof this.path == "string" ? Ye.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */
  set extname(n) {
    if (jn(n, "extname"), yi(this.dirname, "extname"), n) {
      if (n.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ye.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */
  get stem() {
    return typeof this.path == "string" ? Ye.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set stem(n) {
    Dn(n, "stem"), jn(n, "stem"), this.path = Ye.join(this.dirname || "", n + (this.extname || ""));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Buffer`
   *   (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return (this.value || "").toString(n || void 0);
  }
  /**
   * Create a warning message associated with the file.
   *
   * Its `fatal` is set to `false` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new Ue(n, t, r);
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Create an info message associated with the file.
   *
   * Its `fatal` is set to `null` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = null, i;
  }
  /**
   * Create a fatal error associated with the file.
   *
   * Its `fatal` is set to `true` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Message.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
}
function jn(e, n) {
  if (e && e.includes(Ye.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + Ye.sep + "`"
    );
}
function Dn(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function yi(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function nu(e) {
  return Go(e);
}
function bi(e) {
  if (e)
    throw e;
}
var ln = Object.prototype.hasOwnProperty, Ko = Object.prototype.toString, ki = Object.defineProperty, wi = Object.getOwnPropertyDescriptor, xi = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : Ko.call(n) === "[object Array]";
}, vi = function(n) {
  if (!n || Ko.call(n) !== "[object Object]")
    return !1;
  var t = ln.call(n, "constructor"), r = n.constructor && n.constructor.prototype && ln.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r)
    return !1;
  var i;
  for (i in n)
    ;
  return typeof i > "u" || ln.call(n, i);
}, Ei = function(n, t) {
  ki && t.name === "__proto__" ? ki(n, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : n[t.name] = t.newValue;
}, Si = function(n, t) {
  if (t === "__proto__")
    if (ln.call(n, t)) {
      if (wi)
        return wi(n, t).value;
    } else
      return;
  return n[t];
}, ru = function e() {
  var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (n = arguments[s], n != null)
      for (t in n)
        r = Si(a, t), i = Si(n, t), a !== i && (c && i && (vi(i) || (o = xi(i))) ? (o ? (o = !1, l = r && xi(r) ? r : []) : l = r && vi(r) ? r : {}, Ei(a, { name: t, newValue: e(c, l, i) })) : typeof i < "u" && Ei(a, { name: t, newValue: i }));
  return a;
};
const Ci = /* @__PURE__ */ Mt(ru);
function ar(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function iu() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(s, ...u) {
      const c = e[++o];
      let f = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      i = u, c ? ou(c, a)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function ou(e, n) {
  let t;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let s;
    a && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (a && t)
        throw c;
      return i(c);
    }
    a || (s instanceof Promise ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(l, ...a) {
    t || (t = !0, n(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const lu = Qo().freeze(), Xo = {}.hasOwnProperty;
function Qo() {
  const e = iu(), n = [];
  let t = {}, r, i = -1;
  return o.data = l, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = n, o.use = s, o.parse = u, o.stringify = c, o.run = f, o.runSync = m, o.process = p, o.processSync = d, o;
  function o() {
    const y = Qo();
    let b = -1;
    for (; ++b < n.length; )
      y.use(...n[b]);
    return y.data(Ci(!0, {}, t)), y;
  }
  function l(y, b) {
    return typeof y == "string" ? arguments.length === 2 ? (Nn("data", r), t[y] = b, o) : Xo.call(t, y) && t[y] || null : y ? (Nn("data", r), t = y, o) : t;
  }
  function a() {
    if (r)
      return o;
    for (; ++i < n.length; ) {
      const [y, ...b] = n[i];
      if (b[0] === !1)
        continue;
      b[0] === !0 && (b[0] = void 0);
      const w = y.call(o, ...b);
      typeof w == "function" && e.use(w);
    }
    return r = !0, i = Number.POSITIVE_INFINITY, o;
  }
  function s(y, ...b) {
    let w;
    if (Nn("use", r), y != null)
      if (typeof y == "function")
        v(y, ...b);
      else if (typeof y == "object")
        Array.isArray(y) ? j(y) : C(y);
      else
        throw new TypeError("Expected usable value, not `" + y + "`");
    return w && (t.settings = Object.assign(t.settings || {}, w)), o;
    function A(x) {
      if (typeof x == "function")
        v(x);
      else if (typeof x == "object")
        if (Array.isArray(x)) {
          const [N, ...q] = x;
          v(N, ...q);
        } else
          C(x);
      else
        throw new TypeError("Expected usable value, not `" + x + "`");
    }
    function C(x) {
      j(x.plugins), x.settings && (w = Object.assign(w || {}, x.settings));
    }
    function j(x) {
      let N = -1;
      if (x != null)
        if (Array.isArray(x))
          for (; ++N < x.length; ) {
            const q = x[N];
            A(q);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + x + "`");
    }
    function v(x, N) {
      let q = -1, te;
      for (; ++q < n.length; )
        if (n[q][0] === x) {
          te = n[q];
          break;
        }
      te ? (ar(te[1]) && ar(N) && (N = Ci(!0, te[1], N)), te[1] = N) : n.push([...arguments]);
    }
  }
  function u(y) {
    o.freeze();
    const b = It(y), w = o.Parser;
    return zn("parse", w), Ti(w, "parse") ? new w(String(b), b).parse() : w(String(b), b);
  }
  function c(y, b) {
    o.freeze();
    const w = It(b), A = o.Compiler;
    return Ln("stringify", A), Ai(y), Ti(A, "compile") ? new A(y, w).compile() : A(y, w);
  }
  function f(y, b, w) {
    if (Ai(y), o.freeze(), !w && typeof b == "function" && (w = b, b = void 0), !w)
      return new Promise(A);
    A(null, w);
    function A(C, j) {
      e.run(y, It(b), v);
      function v(x, N, q) {
        N = N || y, x ? j(x) : C ? C(N) : w(null, N, q);
      }
    }
  }
  function m(y, b) {
    let w, A;
    return o.run(y, b, C), Pi("runSync", "run", A), w;
    function C(j, v) {
      bi(j), w = v, A = !0;
    }
  }
  function p(y, b) {
    if (o.freeze(), zn("process", o.Parser), Ln("process", o.Compiler), !b)
      return new Promise(w);
    w(null, b);
    function w(A, C) {
      const j = It(y);
      o.run(o.parse(j), j, (x, N, q) => {
        if (x || !N || !q)
          v(x);
        else {
          const te = o.stringify(N, q);
          te == null || (uu(te) ? q.value = te : q.result = te), v(x, q);
        }
      });
      function v(x, N) {
        x || !N ? C(x) : A ? A(N) : b(null, N);
      }
    }
  }
  function d(y) {
    let b;
    o.freeze(), zn("processSync", o.Parser), Ln("processSync", o.Compiler);
    const w = It(y);
    return o.process(w, A), Pi("processSync", "process", b), w;
    function A(C) {
      b = !0, bi(C);
    }
  }
}
function Ti(e, n) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (au(e.prototype) || n in e.prototype);
}
function au(e) {
  let n;
  for (n in e)
    if (Xo.call(e, n))
      return !0;
  return !1;
}
function zn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function Ln(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Nn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ai(e) {
  if (!ar(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Pi(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function It(e) {
  return su(e) ? e : new Jo(e);
}
function su(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function uu(e) {
  return typeof e == "string" || Go(e);
}
const cu = {};
function fu(e, n) {
  const t = n || cu, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Zo(e, r, i);
}
function Zo(e, n, t) {
  if (pu(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Oi(e.children, n, t);
  }
  return Array.isArray(e) ? Oi(e, n, t) : "";
}
function Oi(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Zo(e[i], n, t);
  return r.join("");
}
function pu(e) {
  return !!(e && typeof e == "object");
}
function Je(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
function $e(e, n) {
  return e.length > 0 ? (Je(e, e.length, 0, n), e) : n;
}
const Ri = {}.hasOwnProperty;
function hu(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    du(n, e[t]);
  return n;
}
function du(e, n) {
  let t;
  for (t in n) {
    const i = (Ri.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        Ri.call(i, l) || (i[l] = []);
        const a = o[l];
        mu(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function mu(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  Je(e, 0, 0, r);
}
const gu = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ge = at(/[A-Za-z]/), Le = at(/[\dA-Za-z]/), yu = at(/[#-'*+\--9=?A-Z^-~]/);
function sr(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const ur = at(/\d/), bu = at(/[\dA-Fa-f]/), ku = at(/[!-/:-@[-`{-~]/);
function J(e) {
  return e !== null && e < -2;
}
function Ie(e) {
  return e !== null && (e < 0 || e === 32);
}
function pe(e) {
  return e === -2 || e === -1 || e === 32;
}
const wu = at(gu), xu = at(/\s/);
function at(e) {
  return n;
  function n(t) {
    return t !== null && e.test(String.fromCharCode(t));
  }
}
function ke(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return pe(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return pe(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const vu = {
  tokenize: Eu
};
function Eu(e) {
  const n = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    i
  );
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ke(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = s), t = s, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return J(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Su = {
  tokenize: Cu
}, Fi = {
  tokenize: Tu
};
function Cu(e) {
  const n = this, t = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < t.length) {
      const j = t[r];
      return n.containerState = j[1], e.attempt(
        j[0].continuation,
        s,
        u
      )(C);
    }
    return u(C);
  }
  function s(C) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && A();
      const j = n.events.length;
      let v = j, x;
      for (; v--; )
        if (n.events[v][0] === "exit" && n.events[v][1].type === "chunkFlow") {
          x = n.events[v][1].end;
          break;
        }
      w(r);
      let N = j;
      for (; N < n.events.length; )
        n.events[N][1].end = Object.assign({}, x), N++;
      return Je(
        n.events,
        v + 1,
        0,
        n.events.slice(j)
      ), n.events.length = N, u(C);
    }
    return a(C);
  }
  function u(C) {
    if (r === t.length) {
      if (!i)
        return m(C);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return d(C);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(
      Fi,
      c,
      f
    )(C);
  }
  function c(C) {
    return i && A(), w(r), m(C);
  }
  function f(C) {
    return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, d(C);
  }
  function m(C) {
    return n.containerState = {}, e.attempt(
      Fi,
      p,
      d
    )(C);
  }
  function p(C) {
    return r++, t.push([n.currentConstruct, n.containerState]), m(C);
  }
  function d(C) {
    if (C === null) {
      i && A(), w(0), e.consume(C);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: o,
      _tokenizer: i
    }), y(C);
  }
  function y(C) {
    if (C === null) {
      b(e.exit("chunkFlow"), !0), w(0), e.consume(C);
      return;
    }
    return J(C) ? (e.consume(C), b(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(C), y);
  }
  function b(C, j) {
    const v = n.sliceStream(C);
    if (j && v.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(v), n.parser.lazy[C.start.line]) {
      let x = i.events.length;
      for (; x--; )
        if (
          // The token starts before the line ending…
          i.events[x][1].start.offset < l && // …and either is not ended yet…
          (!i.events[x][1].end || // …or ends after it.
          i.events[x][1].end.offset > l)
        )
          return;
      const N = n.events.length;
      let q = N, te, E;
      for (; q--; )
        if (n.events[q][0] === "exit" && n.events[q][1].type === "chunkFlow") {
          if (te) {
            E = n.events[q][1].end;
            break;
          }
          te = !0;
        }
      for (w(r), x = N; x < n.events.length; )
        n.events[x][1].end = Object.assign({}, E), x++;
      Je(
        n.events,
        q + 1,
        0,
        n.events.slice(N)
      ), n.events.length = x;
    }
  }
  function w(C) {
    let j = t.length;
    for (; j-- > C; ) {
      const v = t[j];
      n.containerState = v[1], v[0].exit.call(n, e);
    }
    t.length = C;
  }
  function A() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function Tu(e, n, t) {
  return ke(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Ii(e) {
  if (e === null || Ie(e) || xu(e))
    return 1;
  if (wu(e))
    return 2;
}
function Ar(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const cr = {
  name: "attention",
  tokenize: Pu,
  resolveAll: Au
};
function Au(e, n) {
  let t = -1, r, i, o, l, a, s, u, c;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), m = Object.assign({}, e[t][1].start);
          _i(f, -s), _i(m, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: Object.assign({}, e[r][1].end)
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[t][1].start),
            end: m
          }, o = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[t][1].start)
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: Object.assign({}, l.start),
            end: Object.assign({}, a.end)
          }, e[r][1].end = Object.assign({}, l.start), e[t][1].start = Object.assign({}, a.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = $e(u, [
            ["enter", e[r][1], n],
            ["exit", e[r][1], n]
          ])), u = $e(u, [
            ["enter", i, n],
            ["enter", l, n],
            ["exit", l, n],
            ["enter", o, n]
          ]), u = $e(
            u,
            Ar(
              n.parser.constructs.insideSpan.null,
              e.slice(r + 1, t),
              n
            )
          ), u = $e(u, [
            ["exit", o, n],
            ["enter", a, n],
            ["exit", a, n],
            ["exit", i, n]
          ]), e[t][1].end.offset - e[t][1].start.offset ? (c = 2, u = $e(u, [
            ["enter", e[t][1], n],
            ["exit", e[t][1], n]
          ])) : c = 0, Je(e, r - 1, t - r + 3, u), t = r + u.length - c - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Pu(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ii(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Ii(s), f = !c || c === 2 && i || t.includes(s), m = !i || i === 2 && c || t.includes(r);
    return u._open = !!(o === 42 ? f : f && (i || !m)), u._close = !!(o === 42 ? m : m && (c || !f)), n(s);
  }
}
function _i(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Ou = {
  name: "autolink",
  tokenize: Ru
};
function Ru(e, n, t) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ge(p) ? (e.consume(p), l) : u(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || Le(p) ? (r = 1, a(p)) : u(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, s) : (p === 43 || p === 45 || p === 46 || Le(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, u(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || sr(p) ? t(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), c) : yu(p) ? (e.consume(p), u) : t(p);
  }
  function c(p) {
    return Le(p) ? f(p) : t(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : m(p);
  }
  function m(p) {
    if ((p === 45 || Le(p)) && r++ < 63) {
      const d = p === 45 ? m : f;
      return e.consume(p), d;
    }
    return t(p);
  }
}
const kn = {
  tokenize: Fu,
  partial: !0
};
function Fu(e, n, t) {
  return r;
  function r(o) {
    return pe(o) ? ke(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || J(o) ? n(o) : t(o);
  }
}
const el = {
  name: "blockQuote",
  tokenize: Iu,
  continuation: {
    tokenize: _u
  },
  exit: ju
};
function Iu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return t(l);
  }
  function o(l) {
    return pe(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
  }
}
function _u(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return pe(l) ? ke(
      e,
      o,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(l) : o(l);
  }
  function o(l) {
    return e.attempt(el, n, t)(l);
  }
}
function ju(e) {
  e.exit("blockQuote");
}
const tl = {
  name: "characterEscape",
  tokenize: Du
};
function Du(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return ku(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const ji = document.createElement("i");
function Pr(e) {
  const n = "&" + e + ";";
  ji.innerHTML = n;
  const t = ji.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
const nl = {
  name: "characterReference",
  tokenize: zu
};
function zu(e, n, t) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), s;
  }
  function s(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = Le, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = bu, c) : (e.enter("characterReferenceValue"), o = 7, l = ur, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const m = e.exit("characterReferenceValue");
      return l === Le && !Pr(r.sliceSerialize(m)) ? t(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return l(f) && i++ < o ? (e.consume(f), c) : t(f);
  }
}
const Di = {
  tokenize: Nu,
  partial: !0
}, zi = {
  name: "codeFenced",
  tokenize: Lu,
  concrete: !0
};
function Lu(e, n, t) {
  const r = this, i = {
    tokenize: v,
    partial: !0
  };
  let o = 0, l = 0, a;
  return s;
  function s(x) {
    return u(x);
  }
  function u(x) {
    const N = r.events[r.events.length - 1];
    return o = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, a = x, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(x);
  }
  function c(x) {
    return x === a ? (l++, e.consume(x), c) : l < 3 ? t(x) : (e.exit("codeFencedFenceSequence"), pe(x) ? ke(e, f, "whitespace")(x) : f(x));
  }
  function f(x) {
    return x === null || J(x) ? (e.exit("codeFencedFence"), r.interrupt ? n(x) : e.check(Di, y, j)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), m(x));
  }
  function m(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x)) : pe(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ke(e, p, "whitespace")(x)) : x === 96 && x === a ? t(x) : (e.consume(x), m);
  }
  function p(x) {
    return x === null || J(x) ? f(x) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), d(x));
  }
  function d(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(x)) : x === 96 && x === a ? t(x) : (e.consume(x), d);
  }
  function y(x) {
    return e.attempt(i, j, b)(x);
  }
  function b(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), w;
  }
  function w(x) {
    return o > 0 && pe(x) ? ke(
      e,
      A,
      "linePrefix",
      o + 1
    )(x) : A(x);
  }
  function A(x) {
    return x === null || J(x) ? e.check(Di, y, j)(x) : (e.enter("codeFlowValue"), C(x));
  }
  function C(x) {
    return x === null || J(x) ? (e.exit("codeFlowValue"), A(x)) : (e.consume(x), C);
  }
  function j(x) {
    return e.exit("codeFenced"), n(x);
  }
  function v(x, N, q) {
    let te = 0;
    return E;
    function E(G) {
      return x.enter("lineEnding"), x.consume(G), x.exit("lineEnding"), _;
    }
    function _(G) {
      return x.enter("codeFencedFence"), pe(G) ? ke(
        x,
        z,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(G) : z(G);
    }
    function z(G) {
      return G === a ? (x.enter("codeFencedFenceSequence"), Q(G)) : q(G);
    }
    function Q(G) {
      return G === a ? (te++, x.consume(G), Q) : te >= l ? (x.exit("codeFencedFenceSequence"), pe(G) ? ke(x, Z, "whitespace")(G) : Z(G)) : q(G);
    }
    function Z(G) {
      return G === null || J(G) ? (x.exit("codeFencedFence"), N(G)) : q(G);
    }
  }
}
function Nu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const Mn = {
  name: "codeIndented",
  tokenize: $u
}, Mu = {
  tokenize: Bu,
  partial: !0
};
function $u(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), ke(e, o, "linePrefix", 4 + 1)(u);
  }
  function o(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(u) : t(u);
  }
  function l(u) {
    return u === null ? s(u) : J(u) ? e.attempt(Mu, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || J(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function Bu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? t(l) : J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : ke(e, o, "linePrefix", 4 + 1)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : J(l) ? i(l) : t(l);
  }
}
const Uu = {
  name: "codeText",
  tokenize: Vu,
  resolve: qu,
  previous: Hu
};
function qu(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Hu(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Vu(e, n, t) {
  let r = 0, i, o;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), s(f));
  }
  function s(f) {
    return f === null ? t(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), s) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : J(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || J(f) ? (e.exit("codeTextData"), s(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(f)) : (o.type = "codeTextData", u(f));
  }
}
function rl(e) {
  const n = {};
  let t = -1, r, i, o, l, a, s, u;
  for (; ++t < e.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = e[t], t && r[1].type === "chunkFlow" && e[t - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, Wu(e, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o-- && (l = e[o], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, t), a.unshift(r), Je(e, i, t - i + 1, a));
    }
  }
  return !u;
}
function Wu(e, n) {
  const t = e[n][1], r = e[n][2];
  let i = n - 1;
  const o = [], l = t._tokenizer || r.parser[t.contentType](t.start), a = l.events, s = [], u = {};
  let c, f, m = -1, p = t, d = 0, y = 0;
  const b = [y];
  for (; p; ) {
    for (; e[++i][1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = t; ++m < a.length; )
    // Find a void token that includes a break.
    a[m][0] === "exit" && a[m - 1][0] === "enter" && a[m][1].type === a[m - 1][1].type && a[m][1].start.line !== a[m][1].end.line && (y = m + 1, b.push(y), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : b.pop(), m = b.length; m--; ) {
    const w = a.slice(b[m], b[m + 1]), A = o.pop();
    s.unshift([A, A + w.length - 1]), Je(e, A, 2, w);
  }
  for (m = -1; ++m < s.length; )
    u[d + s[m][0]] = d + s[m][1], d += s[m][1] - s[m][0] - 1;
  return u;
}
const Yu = {
  tokenize: Ku,
  resolve: Ju
}, Gu = {
  tokenize: Xu,
  partial: !0
};
function Ju(e) {
  return rl(e), e;
}
function Ku(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : J(a) ? e.check(
      Gu,
      l,
      o
    )(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function Xu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ke(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || J(l))
      return t(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
  }
}
function il(e, n, t, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(w) {
    return w === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(w), e.exit(o), m) : w === null || w === 32 || w === 41 || sr(w) ? t(w) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), y(w));
  }
  function m(w) {
    return w === 62 ? (e.enter(o), e.consume(w), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === 62 ? (e.exit("chunkString"), e.exit(a), m(w)) : w === null || w === 60 || J(w) ? t(w) : (e.consume(w), w === 92 ? d : p);
  }
  function d(w) {
    return w === 60 || w === 62 || w === 92 ? (e.consume(w), p) : p(w);
  }
  function y(w) {
    return !c && (w === null || w === 41 || Ie(w)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(w)) : c < u && w === 40 ? (e.consume(w), c++, y) : w === 41 ? (e.consume(w), c--, y) : w === null || w === 32 || w === 40 || sr(w) ? t(w) : (e.consume(w), w === 92 ? b : y);
  }
  function b(w) {
    return w === 40 || w === 41 || w === 92 ? (e.consume(w), y) : y(w);
  }
}
function ol(e, n, t, r, i, o) {
  const l = this;
  let a = 0, s;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), c;
  }
  function c(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : J(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || J(p) || a++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), s || (s = !pe(p)), p === 92 ? m : f);
  }
  function m(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function ll(e, n, t, r, i, o) {
  let l;
  return a;
  function a(m) {
    return m === 34 || m === 39 || m === 40 ? (e.enter(r), e.enter(i), e.consume(m), e.exit(i), l = m === 40 ? 41 : m, s) : t(m);
  }
  function s(m) {
    return m === l ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), n) : (e.enter(o), u(m));
  }
  function u(m) {
    return m === l ? (e.exit(o), s(l)) : m === null ? t(m) : J(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), ke(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(m));
  }
  function c(m) {
    return m === l || m === null || J(m) ? (e.exit("chunkString"), u(m)) : (e.consume(m), m === 92 ? f : c);
  }
  function f(m) {
    return m === l || m === 92 ? (e.consume(m), c) : c(m);
  }
}
function Dt(e, n) {
  let t;
  return r;
  function r(i) {
    return J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : pe(i) ? ke(
      e,
      r,
      t ? "linePrefix" : "lineSuffix"
    )(i) : n(i);
  }
}
function kt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Qu = {
  name: "definition",
  tokenize: ec
}, Zu = {
  tokenize: tc,
  partial: !0
};
function ec(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return ol.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return i = kt(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : t(p);
  }
  function s(p) {
    return Ie(p) ? Dt(e, u)(p) : u(p);
  }
  function u(p) {
    return il(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function c(p) {
    return e.attempt(Zu, f, f)(p);
  }
  function f(p) {
    return pe(p) ? ke(e, m, "whitespace")(p) : m(p);
  }
  function m(p) {
    return p === null || J(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function tc(e, n, t) {
  return r;
  function r(a) {
    return Ie(a) ? Dt(e, i)(a) : t(a);
  }
  function i(a) {
    return ll(
      e,
      o,
      t,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function o(a) {
    return pe(a) ? ke(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || J(a) ? n(a) : t(a);
  }
}
const nc = {
  name: "hardBreakEscape",
  tokenize: rc
};
function rc(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return J(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const ic = {
  name: "headingAtx",
  tokenize: lc,
  resolve: oc
};
function oc(e, n) {
  let t = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, Je(e, r, t - r + 1, [
    ["enter", i, n],
    ["enter", o, n],
    ["exit", o, n],
    ["exit", i, n]
  ])), e;
}
function lc(e, n, t) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || Ie(c) ? (e.exit("atxHeadingSequence"), a(c)) : t(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || J(c) ? (e.exit("atxHeading"), n(c)) : pe(c) ? ke(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || Ie(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const ac = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Li = ["pre", "script", "style", "textarea"], sc = {
  name: "htmlFlow",
  tokenize: pc,
  resolveTo: fc,
  concrete: !0
}, uc = {
  tokenize: dc,
  partial: !0
}, cc = {
  tokenize: hc,
  partial: !0
};
function fc(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function pc(e, n, t) {
  const r = this;
  let i, o, l, a, s;
  return u;
  function u(g) {
    return c(g);
  }
  function c(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), f;
  }
  function f(g) {
    return g === 33 ? (e.consume(g), m) : g === 47 ? (e.consume(g), o = !0, y) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? n : h) : Ge(g) ? (e.consume(g), l = String.fromCharCode(g), b) : t(g);
  }
  function m(g) {
    return g === 45 ? (e.consume(g), i = 2, p) : g === 91 ? (e.consume(g), i = 5, a = 0, d) : Ge(g) ? (e.consume(g), i = 4, r.interrupt ? n : h) : t(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? n : h) : t(g);
  }
  function d(g) {
    const U = "CDATA[";
    return g === U.charCodeAt(a++) ? (e.consume(g), a === U.length ? r.interrupt ? n : z : d) : t(g);
  }
  function y(g) {
    return Ge(g) ? (e.consume(g), l = String.fromCharCode(g), b) : t(g);
  }
  function b(g) {
    if (g === null || g === 47 || g === 62 || Ie(g)) {
      const U = g === 47, ne = l.toLowerCase();
      return !U && !o && Li.includes(ne) ? (i = 1, r.interrupt ? n(g) : z(g)) : ac.includes(l.toLowerCase()) ? (i = 6, U ? (e.consume(g), w) : r.interrupt ? n(g) : z(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(g) : o ? A(g) : C(g));
    }
    return g === 45 || Le(g) ? (e.consume(g), l += String.fromCharCode(g), b) : t(g);
  }
  function w(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? n : z) : t(g);
  }
  function A(g) {
    return pe(g) ? (e.consume(g), A) : E(g);
  }
  function C(g) {
    return g === 47 ? (e.consume(g), E) : g === 58 || g === 95 || Ge(g) ? (e.consume(g), j) : pe(g) ? (e.consume(g), C) : E(g);
  }
  function j(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Le(g) ? (e.consume(g), j) : v(g);
  }
  function v(g) {
    return g === 61 ? (e.consume(g), x) : pe(g) ? (e.consume(g), v) : C(g);
  }
  function x(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? t(g) : g === 34 || g === 39 ? (e.consume(g), s = g, N) : pe(g) ? (e.consume(g), x) : q(g);
  }
  function N(g) {
    return g === s ? (e.consume(g), s = null, te) : g === null || J(g) ? t(g) : (e.consume(g), N);
  }
  function q(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Ie(g) ? v(g) : (e.consume(g), q);
  }
  function te(g) {
    return g === 47 || g === 62 || pe(g) ? C(g) : t(g);
  }
  function E(g) {
    return g === 62 ? (e.consume(g), _) : t(g);
  }
  function _(g) {
    return g === null || J(g) ? z(g) : pe(g) ? (e.consume(g), _) : t(g);
  }
  function z(g) {
    return g === 45 && i === 2 ? (e.consume(g), W) : g === 60 && i === 1 ? (e.consume(g), le) : g === 62 && i === 4 ? (e.consume(g), F) : g === 63 && i === 3 ? (e.consume(g), h) : g === 93 && i === 5 ? (e.consume(g), xe) : J(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(
      uc,
      M,
      Q
    )(g)) : g === null || J(g) ? (e.exit("htmlFlowData"), Q(g)) : (e.consume(g), z);
  }
  function Q(g) {
    return e.check(
      cc,
      Z,
      M
    )(g);
  }
  function Z(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), G;
  }
  function G(g) {
    return g === null || J(g) ? Q(g) : (e.enter("htmlFlowData"), z(g));
  }
  function W(g) {
    return g === 45 ? (e.consume(g), h) : z(g);
  }
  function le(g) {
    return g === 47 ? (e.consume(g), l = "", we) : z(g);
  }
  function we(g) {
    if (g === 62) {
      const U = l.toLowerCase();
      return Li.includes(U) ? (e.consume(g), F) : z(g);
    }
    return Ge(g) && l.length < 8 ? (e.consume(g), l += String.fromCharCode(g), we) : z(g);
  }
  function xe(g) {
    return g === 93 ? (e.consume(g), h) : z(g);
  }
  function h(g) {
    return g === 62 ? (e.consume(g), F) : g === 45 && i === 2 ? (e.consume(g), h) : z(g);
  }
  function F(g) {
    return g === null || J(g) ? (e.exit("htmlFlowData"), M(g)) : (e.consume(g), F);
  }
  function M(g) {
    return e.exit("htmlFlow"), n(g);
  }
}
function hc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function dc(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(kn, n, t);
  }
}
const mc = {
  name: "htmlText",
  tokenize: gc
};
function gc(e, n, t) {
  const r = this;
  let i, o, l;
  return a;
  function a(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s;
  }
  function s(h) {
    return h === 33 ? (e.consume(h), u) : h === 47 ? (e.consume(h), v) : h === 63 ? (e.consume(h), C) : Ge(h) ? (e.consume(h), q) : t(h);
  }
  function u(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), o = 0, d) : Ge(h) ? (e.consume(h), A) : t(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), p) : t(h);
  }
  function f(h) {
    return h === null ? t(h) : h === 45 ? (e.consume(h), m) : J(h) ? (l = f, le(h)) : (e.consume(h), f);
  }
  function m(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? W(h) : h === 45 ? m(h) : f(h);
  }
  function d(h) {
    const F = "CDATA[";
    return h === F.charCodeAt(o++) ? (e.consume(h), o === F.length ? y : d) : t(h);
  }
  function y(h) {
    return h === null ? t(h) : h === 93 ? (e.consume(h), b) : J(h) ? (l = y, le(h)) : (e.consume(h), y);
  }
  function b(h) {
    return h === 93 ? (e.consume(h), w) : y(h);
  }
  function w(h) {
    return h === 62 ? W(h) : h === 93 ? (e.consume(h), w) : y(h);
  }
  function A(h) {
    return h === null || h === 62 ? W(h) : J(h) ? (l = A, le(h)) : (e.consume(h), A);
  }
  function C(h) {
    return h === null ? t(h) : h === 63 ? (e.consume(h), j) : J(h) ? (l = C, le(h)) : (e.consume(h), C);
  }
  function j(h) {
    return h === 62 ? W(h) : C(h);
  }
  function v(h) {
    return Ge(h) ? (e.consume(h), x) : t(h);
  }
  function x(h) {
    return h === 45 || Le(h) ? (e.consume(h), x) : N(h);
  }
  function N(h) {
    return J(h) ? (l = N, le(h)) : pe(h) ? (e.consume(h), N) : W(h);
  }
  function q(h) {
    return h === 45 || Le(h) ? (e.consume(h), q) : h === 47 || h === 62 || Ie(h) ? te(h) : t(h);
  }
  function te(h) {
    return h === 47 ? (e.consume(h), W) : h === 58 || h === 95 || Ge(h) ? (e.consume(h), E) : J(h) ? (l = te, le(h)) : pe(h) ? (e.consume(h), te) : W(h);
  }
  function E(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Le(h) ? (e.consume(h), E) : _(h);
  }
  function _(h) {
    return h === 61 ? (e.consume(h), z) : J(h) ? (l = _, le(h)) : pe(h) ? (e.consume(h), _) : te(h);
  }
  function z(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? t(h) : h === 34 || h === 39 ? (e.consume(h), i = h, Q) : J(h) ? (l = z, le(h)) : pe(h) ? (e.consume(h), z) : (e.consume(h), Z);
  }
  function Q(h) {
    return h === i ? (e.consume(h), i = void 0, G) : h === null ? t(h) : J(h) ? (l = Q, le(h)) : (e.consume(h), Q);
  }
  function Z(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? t(h) : h === 47 || h === 62 || Ie(h) ? te(h) : (e.consume(h), Z);
  }
  function G(h) {
    return h === 47 || h === 62 || Ie(h) ? te(h) : t(h);
  }
  function W(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(h);
  }
  function le(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), we;
  }
  function we(h) {
    return pe(h) ? ke(
      e,
      xe,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(h) : xe(h);
  }
  function xe(h) {
    return e.enter("htmlTextData"), l(h);
  }
}
const Or = {
  name: "labelEnd",
  tokenize: vc,
  resolveTo: xc,
  resolveAll: wc
}, yc = {
  tokenize: Ec
}, bc = {
  tokenize: Sc
}, kc = {
  tokenize: Cc
};
function wc(e) {
  let n = -1;
  for (; ++n < e.length; ) {
    const t = e[n][1];
    (t.type === "labelImage" || t.type === "labelLink" || t.type === "labelEnd") && (e.splice(n + 1, t.type === "labelImage" ? 4 : 2), t.type = "data", n++);
  }
  return e;
}
function xc(e, n) {
  let t = e.length, r = 0, i, o, l, a;
  for (; t--; )
    if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else
      i.type === "labelEnd" && (l = t);
  const s = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, u = {
    type: "label",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[l][1].end)
  }, c = {
    type: "labelText",
    start: Object.assign({}, e[o + r + 2][1].end),
    end: Object.assign({}, e[l - 2][1].start)
  };
  return a = [
    ["enter", s, n],
    ["enter", u, n]
  ], a = $e(a, e.slice(o + 1, o + r + 3)), a = $e(a, [["enter", c, n]]), a = $e(
    a,
    Ar(
      n.parser.constructs.insideSpan.null,
      e.slice(o + r + 4, l - 3),
      n
    )
  ), a = $e(a, [
    ["exit", c, n],
    e[l - 2],
    e[l - 1],
    ["exit", u, n]
  ]), a = $e(a, e.slice(l + 1)), a = $e(a, [["exit", s, n]]), Je(e, o, e.length, a), e;
}
function vc(e, n, t) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(m) {
    return o ? o._inactive ? f(m) : (l = r.parser.defined.includes(
      kt(
        r.sliceSerialize({
          start: o.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(m), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(m);
  }
  function s(m) {
    return m === 40 ? e.attempt(
      yc,
      c,
      l ? c : f
    )(m) : m === 91 ? e.attempt(
      bc,
      c,
      l ? u : f
    )(m) : l ? c(m) : f(m);
  }
  function u(m) {
    return e.attempt(
      kc,
      c,
      f
    )(m);
  }
  function c(m) {
    return n(m);
  }
  function f(m) {
    return o._balanced = !0, t(m);
  }
}
function Ec(e, n, t) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return Ie(f) ? Dt(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : il(
      e,
      l,
      a,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(f);
  }
  function l(f) {
    return Ie(f) ? Dt(e, s)(f) : c(f);
  }
  function a(f) {
    return t(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? ll(
      e,
      u,
      t,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(f) : c(f);
  }
  function u(f) {
    return Ie(f) ? Dt(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), n) : t(f);
  }
}
function Sc(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return ol.call(
      r,
      e,
      o,
      l,
      "reference",
      "referenceMarker",
      "referenceString"
    )(a);
  }
  function o(a) {
    return r.parser.defined.includes(
      kt(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? n(a) : t(a);
  }
  function l(a) {
    return t(a);
  }
}
function Cc(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const Tc = {
  name: "labelStartImage",
  tokenize: Ac,
  resolveAll: Or.resolveAll
};
function Ac(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : t(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const Pc = {
  name: "labelStartLink",
  tokenize: Oc,
  resolveAll: Or.resolveAll
};
function Oc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const $n = {
  name: "lineEnding",
  tokenize: Rc
};
function Rc(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ke(e, n, "linePrefix");
  }
}
const an = {
  name: "thematicBreak",
  tokenize: Fc
};
function Fc(e, n, t) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || J(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), pe(u) ? ke(e, a, "whitespace")(u) : a(u));
  }
}
const Fe = {
  name: "list",
  tokenize: jc,
  continuation: {
    tokenize: Dc
  },
  exit: Lc
}, Ic = {
  tokenize: Nc,
  partial: !0
}, _c = {
  tokenize: zc,
  partial: !0
};
function jc(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const d = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : ur(p)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(an, t, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return t(p);
  }
  function s(p) {
    return ur(p) && ++l < 10 ? (e.consume(p), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : t(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      kn,
      // Can’t be empty when interrupting.
      r.interrupt ? t : c,
      e.attempt(
        Ic,
        m,
        f
      )
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, m(p);
  }
  function f(p) {
    return pe(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), m) : t(p);
  }
  function m(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(p);
  }
}
function Dc(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(kn, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ke(
      e,
      n,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !pe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(_c, n, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ke(
      e,
      e.attempt(Fe, n, t),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a);
  }
}
function zc(e, n, t) {
  const r = this;
  return ke(
    e,
    i,
    "listItemIndent",
    r.containerState.size + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? n(o) : t(o);
  }
}
function Lc(e) {
  e.exit(this.containerState.type);
}
function Nc(e, n, t) {
  const r = this;
  return ke(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !pe(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const Ni = {
  name: "setextUnderline",
  tokenize: $c,
  resolveTo: Mc
};
function Mc(e, n) {
  let t = e.length, r, i, o;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
  const l = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[r][1], n]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = l, e.push(["exit", l, n]), e;
}
function $c(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, l(u)) : t(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), pe(u) ? ke(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || J(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
const Bc = {
  tokenize: Uc
};
function Uc(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    kn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      ke(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(Yu, i)
        ),
        "linePrefix"
      )
    )
  );
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const qc = {
  resolveAll: sl()
}, Hc = al("string"), Vc = al("text");
function al(e) {
  return {
    tokenize: n,
    resolveAll: sl(
      e === "text" ? Wc : void 0
    )
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], o = t.attempt(i, l, a);
    return l;
    function l(c) {
      return u(c) ? o(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        t.consume(c);
        return;
      }
      return t.enter("data"), t.consume(c), s;
    }
    function s(c) {
      return u(c) ? (t.exit("data"), o(c)) : (t.consume(c), s);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let m = -1;
      if (f)
        for (; ++m < f.length; ) {
          const p = f[m];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function sl(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function Wc(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, l = -1, a = 0, s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l)
            break;
          l = -1;
        } else if (u === -2)
          s = !0, a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const u = {
          type: t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + o,
            _bufferIndex: o ? l : r.start._bufferIndex + l
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(
          t,
          0,
          ["enter", u, n],
          ["exit", u, n]
        ), t += 2);
      }
      t++;
    }
  return e;
}
function Yc(e, n, t) {
  let r = Object.assign(
    t ? Object.assign({}, t) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const i = {}, o = [];
  let l = [], a = [];
  const s = {
    consume: A,
    enter: C,
    exit: j,
    attempt: N(v),
    check: N(x),
    interrupt: N(x, {
      interrupt: !0
    })
  }, u = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: p,
    sliceSerialize: m,
    now: d,
    defineSkip: y,
    write: f
  };
  let c = n.tokenize.call(u, s);
  return n.resolveAll && o.push(n), u;
  function f(_) {
    return l = $e(l, _), b(), l[l.length - 1] !== null ? [] : (q(n, 0), u.events = Ar(o, u.events, u), u.events);
  }
  function m(_, z) {
    return Jc(p(_), z);
  }
  function p(_) {
    return Gc(l, _);
  }
  function d() {
    const { line: _, column: z, offset: Q, _index: Z, _bufferIndex: G } = r;
    return {
      line: _,
      column: z,
      offset: Q,
      _index: Z,
      _bufferIndex: G
    };
  }
  function y(_) {
    i[_.line] = _.column, E();
  }
  function b() {
    let _;
    for (; r._index < l.length; ) {
      const z = l[r._index];
      if (typeof z == "string")
        for (_ = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === _ && r._bufferIndex < z.length; )
          w(z.charCodeAt(r._bufferIndex));
      else
        w(z);
    }
  }
  function w(_) {
    c = c(_);
  }
  function A(_) {
    J(_) ? (r.line++, r.column = 1, r.offset += _ === -3 ? 2 : 1, E()) : _ !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = _;
  }
  function C(_, z) {
    const Q = z || {};
    return Q.type = _, Q.start = d(), u.events.push(["enter", Q, u]), a.push(Q), Q;
  }
  function j(_) {
    const z = a.pop();
    return z.end = d(), u.events.push(["exit", z, u]), z;
  }
  function v(_, z) {
    q(_, z.from);
  }
  function x(_, z) {
    z.restore();
  }
  function N(_, z) {
    return Q;
    function Q(Z, G, W) {
      let le, we, xe, h;
      return Array.isArray(Z) ? M(Z) : "tokenize" in Z ? (
        // @ts-expect-error Looks like a construct.
        M([Z])
      ) : F(Z);
      function F($) {
        return V;
        function V(Y) {
          const re = Y !== null && $[Y], K = Y !== null && $.null, Ee = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(K) ? K : K ? [K] : []
          ];
          return M(Ee)(Y);
        }
      }
      function M($) {
        return le = $, we = 0, $.length === 0 ? W : g($[we]);
      }
      function g($) {
        return V;
        function V(Y) {
          return h = te(), xe = $, $.partial || (u.currentConstruct = $), $.name && u.parser.constructs.disable.null.includes($.name) ? ne() : $.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(u), z) : u,
            s,
            U,
            ne
          )(Y);
        }
      }
      function U($) {
        return _(xe, h), G;
      }
      function ne($) {
        return h.restore(), ++we < le.length ? g(le[we]) : W;
      }
    }
  }
  function q(_, z) {
    _.resolveAll && !o.includes(_) && o.push(_), _.resolve && Je(
      u.events,
      z,
      u.events.length - z,
      _.resolve(u.events.slice(z), u)
    ), _.resolveTo && (u.events = _.resolveTo(u.events, u));
  }
  function te() {
    const _ = d(), z = u.previous, Q = u.currentConstruct, Z = u.events.length, G = Array.from(a);
    return {
      restore: W,
      from: Z
    };
    function W() {
      r = _, u.previous = z, u.currentConstruct = Q, u.events.length = Z, a = G, E();
    }
  }
  function E() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Gc(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
  let l;
  if (t === i)
    l = [e[t].slice(r, o)];
  else {
    if (l = e.slice(t, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function Jc(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const o = e[t];
    let l;
    if (typeof o == "string")
      l = o;
    else
      switch (o) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = n ? " " : "	";
          break;
        }
        case -1: {
          if (!n && i)
            continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(o);
      }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
const Kc = {
  42: Fe,
  43: Fe,
  45: Fe,
  48: Fe,
  49: Fe,
  50: Fe,
  51: Fe,
  52: Fe,
  53: Fe,
  54: Fe,
  55: Fe,
  56: Fe,
  57: Fe,
  62: el
}, Xc = {
  91: Qu
}, Qc = {
  [-2]: Mn,
  [-1]: Mn,
  32: Mn
}, Zc = {
  35: ic,
  42: an,
  45: [Ni, an],
  60: sc,
  61: Ni,
  95: an,
  96: zi,
  126: zi
}, ef = {
  38: nl,
  92: tl
}, tf = {
  [-5]: $n,
  [-4]: $n,
  [-3]: $n,
  33: Tc,
  38: nl,
  42: cr,
  60: [Ou, mc],
  91: Pc,
  92: [nc, tl],
  93: Or,
  95: cr,
  96: Uu
}, nf = {
  null: [cr, qc]
}, rf = {
  null: [42, 95]
}, of = {
  null: []
}, lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: rf,
  contentInitial: Xc,
  disable: of,
  document: Kc,
  flow: Zc,
  flowInitial: Qc,
  insideSpan: nf,
  string: ef,
  text: tf
}, Symbol.toStringTag, { value: "Module" }));
function af(e) {
  const t = (
    /** @type {FullNormalizedExtension} */
    hu([lf, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: t,
    content: i(vu),
    document: i(Su),
    flow: i(Bc),
    string: i(Hc),
    text: i(Vc)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return Yc(r, o, a);
    }
  }
}
const Mi = /[\0\t\n\r]/g;
function sf() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, c, f, m, p;
    for (o = n + o.toString(l), f = 0, n = "", t && (o.charCodeAt(0) === 65279 && f++, t = void 0); f < o.length; ) {
      if (Mi.lastIndex = f, u = Mi.exec(o), m = u && u.index !== void 0 ? u.index : o.length, p = o.charCodeAt(m), !u) {
        n = o.slice(f);
        break;
      }
      if (p === 10 && f === m && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), f < m && (s.push(o.slice(f, m)), e += m - f), p) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; )
              s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = m + 1;
    }
    return a && (r && s.push(-5), n && s.push(n), s.push(null)), s;
  }
}
function uf(e) {
  for (; !rl(e); )
    ;
  return e;
}
function ul(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || (t & 65535) === 65535 || (t & 65535) === 65534 || // Out of range
    t > 1114111 ? "�" : String.fromCharCode(t)
  );
}
const cf = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ff(e) {
  return e.replace(cf, pf);
}
function pf(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return ul(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Pr(t) || e;
}
const cl = {}.hasOwnProperty, hf = (
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */
  /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */
  function(e, n, t) {
    return typeof n != "string" && (t = n, n = void 0), df(t)(
      uf(
        af(t).document().write(sf()(e, n, !0))
      )
    );
  }
);
function df(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Vt),
      autolinkProtocol: _,
      autolinkEmail: _,
      atxHeading: a(Ne),
      blockQuote: a(Ee),
      characterEscape: _,
      characterReference: _,
      codeFenced: a(D),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(D, s),
      codeText: a(Pe, s),
      codeTextData: _,
      data: _,
      codeFlowValue: _,
      definition: a(B),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(_e),
      hardBreakEscape: a(nt),
      hardBreakTrailing: a(nt),
      htmlFlow: a(Tt, s),
      htmlFlowData: _,
      htmlText: a(Tt, s),
      htmlTextData: _,
      image: a(dt),
      label: s,
      link: a(Vt),
      listItem: a(At),
      listItemValue: d,
      listOrdered: a(Wt, p),
      listUnordered: a(Wt),
      paragraph: a(Sn),
      reference: ne,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(Ne),
      strong: a(Cn),
      thematicBreak: a(Gt)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: N,
      autolink: c(),
      autolinkEmail: K,
      autolinkProtocol: re,
      blockQuote: c(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: V,
      characterReferenceMarkerNumeric: V,
      characterReferenceValue: Y,
      codeFenced: c(A),
      codeFencedFence: w,
      codeFencedFenceInfo: y,
      codeFencedFenceMeta: b,
      codeFlowValue: z,
      codeIndented: c(C),
      codeText: c(le),
      codeTextData: z,
      data: z,
      definition: c(),
      definitionDestinationString: x,
      definitionLabelString: j,
      definitionTitleString: v,
      emphasis: c(),
      hardBreakEscape: c(Z),
      hardBreakTrailing: c(Z),
      htmlFlow: c(G),
      htmlFlowData: z,
      htmlText: c(W),
      htmlTextData: z,
      image: c(xe),
      label: F,
      labelText: h,
      lineEnding: Q,
      link: c(we),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: $,
      resourceDestinationString: M,
      resourceTitleString: g,
      resource: U,
      setextHeading: c(E),
      setextHeadingLineSequence: te,
      setextHeadingText: q,
      strong: c(),
      thematicBreak: c()
    }
  };
  fl(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(S) {
    let I = {
      type: "root",
      children: []
    };
    const H = {
      stack: [I],
      tokenStack: [],
      config: n,
      enter: u,
      exit: f,
      buffer: s,
      resume: m,
      setData: o,
      getData: l
    }, ue = [];
    let ce = -1;
    for (; ++ce < S.length; )
      if (S[ce][1].type === "listOrdered" || S[ce][1].type === "listUnordered")
        if (S[ce][0] === "enter")
          ue.push(ce);
        else {
          const je = ue.pop();
          ce = i(S, je, ce);
        }
    for (ce = -1; ++ce < S.length; ) {
      const je = n[S[ce][0]];
      cl.call(je, S[ce][1].type) && je[S[ce][1].type].call(
        Object.assign(
          {
            sliceSerialize: S[ce][2].sliceSerialize
          },
          H
        ),
        S[ce][1]
      );
    }
    if (H.tokenStack.length > 0) {
      const je = H.tokenStack[H.tokenStack.length - 1];
      (je[1] || $i).call(H, void 0, je[0]);
    }
    for (I.position = {
      start: it(
        S.length > 0 ? S[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: it(
        S.length > 0 ? S[S.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, ce = -1; ++ce < n.transforms.length; )
      I = n.transforms[ce](I) || I;
    return I;
  }
  function i(S, I, H) {
    let ue = I - 1, ce = -1, je = !1, We, He, st, ut;
    for (; ++ue <= H; ) {
      const ve = S[ue];
      if (ve[1].type === "listUnordered" || ve[1].type === "listOrdered" || ve[1].type === "blockQuote" ? (ve[0] === "enter" ? ce++ : ce--, ut = void 0) : ve[1].type === "lineEndingBlank" ? ve[0] === "enter" && (We && !ut && !ce && !st && (st = ue), ut = void 0) : ve[1].type === "linePrefix" || ve[1].type === "listItemValue" || ve[1].type === "listItemMarker" || ve[1].type === "listItemPrefix" || ve[1].type === "listItemPrefixWhitespace" || (ut = void 0), !ce && ve[0] === "enter" && ve[1].type === "listItemPrefix" || ce === -1 && ve[0] === "exit" && (ve[1].type === "listUnordered" || ve[1].type === "listOrdered")) {
        if (We) {
          let Pt = ue;
          for (He = void 0; Pt--; ) {
            const De = S[Pt];
            if (De[1].type === "lineEnding" || De[1].type === "lineEndingBlank") {
              if (De[0] === "exit")
                continue;
              He && (S[He][1].type = "lineEndingBlank", je = !0), De[1].type = "lineEnding", He = Pt;
            } else if (!(De[1].type === "linePrefix" || De[1].type === "blockQuotePrefix" || De[1].type === "blockQuotePrefixWhitespace" || De[1].type === "blockQuoteMarker" || De[1].type === "listItemIndent"))
              break;
          }
          st && (!He || st < He) && (We._spread = !0), We.end = Object.assign(
            {},
            He ? S[He][1].start : ve[1].end
          ), S.splice(He || ue, 0, ["exit", We, ve[2]]), ue++, H++;
        }
        ve[1].type === "listItemPrefix" && (We = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, ve[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, S.splice(ue, 0, ["enter", We, ve[2]]), ue++, H++, st = void 0, ut = !0);
      }
    }
    return S[I][1]._spread = je, H;
  }
  function o(S, I) {
    t[S] = I;
  }
  function l(S) {
    return t[S];
  }
  function a(S, I) {
    return H;
    function H(ue) {
      u.call(this, S(ue), ue), I && I.call(this, ue);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function u(S, I, H) {
    return this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([I, H]), S.position = {
      start: it(I.start)
    }, S;
  }
  function c(S) {
    return I;
    function I(H) {
      S && S.call(this, H), f.call(this, H);
    }
  }
  function f(S, I) {
    const H = this.stack.pop(), ue = this.tokenStack.pop();
    if (ue)
      ue[0].type !== S.type && (I ? I.call(this, S, ue[0]) : (ue[1] || $i).call(this, S, ue[0]));
    else
      throw new Error(
        "Cannot close `" + S.type + "` (" + jt({
          start: S.start,
          end: S.end
        }) + "): it’s not open"
      );
    return H.position.end = it(S.end), H;
  }
  function m() {
    return fu(this.stack.pop());
  }
  function p() {
    o("expectingFirstListItemValue", !0);
  }
  function d(S) {
    if (l("expectingFirstListItemValue")) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(S), 10), o("expectingFirstListItemValue");
    }
  }
  function y() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = S;
  }
  function b() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = S;
  }
  function w() {
    l("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
  }
  function A() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside");
  }
  function C() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function j(S) {
    const I = this.resume(), H = this.stack[this.stack.length - 1];
    H.label = I, H.identifier = kt(
      this.sliceSerialize(S)
    ).toLowerCase();
  }
  function v() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function x() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function N(S) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const H = this.sliceSerialize(S).length;
      I.depth = H;
    }
  }
  function q() {
    o("setextHeadingSlurpLineEnding", !0);
  }
  function te(S) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(S).charCodeAt(0) === 61 ? 1 : 2;
  }
  function E() {
    o("setextHeadingSlurpLineEnding");
  }
  function _(S) {
    const I = this.stack[this.stack.length - 1];
    let H = I.children[I.children.length - 1];
    (!H || H.type !== "text") && (H = Yt(), H.position = {
      start: it(S.start)
    }, I.children.push(H)), this.stack.push(H);
  }
  function z(S) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(S), I.position.end = it(S.end);
  }
  function Q(S) {
    const I = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const H = I.children[I.children.length - 1];
      H.position.end = it(S.end), o("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && n.canContainEols.includes(I.type) && (_.call(this, S), z.call(this, S));
  }
  function Z() {
    o("atHardBreak", !0);
  }
  function G() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function W() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function le() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function we() {
    const S = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const I = l("referenceType") || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    o("referenceType");
  }
  function xe() {
    const S = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const I = l("referenceType") || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    o("referenceType");
  }
  function h(S) {
    const I = this.sliceSerialize(S), H = this.stack[this.stack.length - 2];
    H.label = ff(I), H.identifier = kt(I).toLowerCase();
  }
  function F() {
    const S = this.stack[this.stack.length - 1], I = this.resume(), H = this.stack[this.stack.length - 1];
    if (o("inReference", !0), H.type === "link") {
      const ue = S.children;
      H.children = ue;
    } else
      H.alt = I;
  }
  function M() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function g() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function U() {
    o("inReference");
  }
  function ne() {
    o("referenceType", "collapsed");
  }
  function $(S) {
    const I = this.resume(), H = this.stack[this.stack.length - 1];
    H.label = I, H.identifier = kt(
      this.sliceSerialize(S)
    ).toLowerCase(), o("referenceType", "full");
  }
  function V(S) {
    o("characterReferenceType", S.type);
  }
  function Y(S) {
    const I = this.sliceSerialize(S), H = l("characterReferenceType");
    let ue;
    H ? (ue = ul(
      I,
      H === "characterReferenceMarkerNumeric" ? 10 : 16
    ), o("characterReferenceType")) : ue = Pr(I);
    const ce = this.stack.pop();
    ce.value += ue, ce.position.end = it(S.end);
  }
  function re(S) {
    z.call(this, S);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(S);
  }
  function K(S) {
    z.call(this, S);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(S);
  }
  function Ee() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function D() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Pe() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function B() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function _e() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Ne() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function nt() {
    return {
      type: "break"
    };
  }
  function Tt() {
    return {
      type: "html",
      value: ""
    };
  }
  function dt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Vt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Wt(S) {
    return {
      type: "list",
      ordered: S.type === "listOrdered",
      start: null,
      spread: S._spread,
      children: []
    };
  }
  function At(S) {
    return {
      type: "listItem",
      spread: S._spread,
      checked: null,
      children: []
    };
  }
  function Sn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Cn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Yt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Gt() {
    return {
      type: "thematicBreak"
    };
  }
}
function it(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function fl(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? fl(e, r) : mf(e, r);
  }
}
function mf(e, n) {
  let t;
  for (t in n)
    if (cl.call(n, t)) {
      if (t === "canContainEols") {
        const r = n[t];
        r && e[t].push(...r);
      } else if (t === "transforms") {
        const r = n[t];
        r && e[t].push(...r);
      } else if (t === "enter" || t === "exit") {
        const r = n[t];
        r && Object.assign(e[t], r);
      }
    }
}
function $i(e, n) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + jt({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + n.type + "`, " + jt({
      start: n.start,
      end: n.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + n.type + "`, " + jt({
      start: n.start,
      end: n.end
    }) + ") is still open"
  );
}
function gf(e) {
  Object.assign(this, { Parser: (t) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return hf(
      t,
      Object.assign({}, r, e, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
function yf(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function bf(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function kf(e, n) {
  const t = n.value ? n.value + `
` : "", r = n.lang ? n.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null, i = {};
  r && (i.className = ["language-" + r]);
  let o = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (o.data = { meta: n.meta }), e.patch(n, o), o = e.applyData(n, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(n, o), o;
}
function wf(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function xf(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function St(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const o = e.charCodeAt(t);
    let l = "";
    if (o === 37 && Le(e.charCodeAt(t + 1)) && Le(e.charCodeAt(t + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(t + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
function pl(e, n) {
  const t = String(n.identifier).toUpperCase(), r = St(t.toLowerCase()), i = e.footnoteOrder.indexOf(t);
  let o;
  i === -1 ? (e.footnoteOrder.push(t), e.footnoteCounts[t] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[t]++, o = i + 1);
  const l = e.footnoteCounts[t], a = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + e.clobberPrefix + "fn-" + r,
      id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(n, a);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [a]
  };
  return e.patch(n, s), e.applyData(n, s);
}
function vf(e, n) {
  const t = e.footnoteById;
  let r = 1;
  for (; r in t; )
    r++;
  const i = String(r);
  return t[i] = {
    type: "footnoteDefinition",
    identifier: i,
    children: [{ type: "paragraph", children: n.children }],
    position: n.position
  }, pl(e, {
    type: "footnoteReference",
    identifier: i,
    position: n.position
  });
}
function Ef(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Sf(e, n) {
  if (e.dangerous) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
  return null;
}
function hl(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return { type: "text", value: "![" + n.alt + r };
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function Cf(e, n) {
  const t = e.definition(n.identifier);
  if (!t)
    return hl(e, n);
  const r = { src: St(t.url || ""), alt: n.alt };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(n, i), e.applyData(n, i);
}
function Tf(e, n) {
  const t = { src: St(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Af(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Pf(e, n) {
  const t = e.definition(n.identifier);
  if (!t)
    return hl(e, n);
  const r = { href: St(t.url || "") };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(n)
  };
  return e.patch(n, i), e.applyData(n, i);
}
function Of(e, n) {
  const t = { href: St(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Rf(e, n, t) {
  const r = e.all(n), i = t ? Ff(t) : dl(n), o = {}, l = [];
  if (typeof n.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? l.push(...c.children) : l.push(c);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(n, u), e.applyData(n, u);
}
function Ff(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = dl(t[r]);
  }
  return n;
}
function dl(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function If(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function _f(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function jf(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Df(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Rr = ml("start"), Fr = ml("end");
function zf(e) {
  return { start: Rr(e), end: Fr(e) };
}
function ml(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    return {
      // @ts-expect-error: in practice, null is allowed.
      line: r.line || null,
      // @ts-expect-error: in practice, null is allowed.
      column: r.column || null,
      // @ts-expect-error: in practice, null is allowed.
      offset: r.offset > -1 ? r.offset : null
    };
  }
}
function Lf(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], l), i.push(l);
  }
  if (t.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, a = Rr(n.children[1]), s = Fr(n.children[n.children.length - 1]);
    a.line && s.line && (l.position = { start: a, end: s }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Nf(e, n, t) {
  const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, a = l ? l.length : n.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const f = n.children[s], m = {}, p = l ? l[s] : void 0;
    p && (m.align = p);
    let d = { type: "element", tagName: o, properties: m, children: [] };
    f && (d.children = e.all(f), e.patch(f, d), d = e.applyData(n, d)), u.push(d);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(n, c), e.applyData(n, c);
}
function Mf(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Bi = 9, Ui = 32;
function $f(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      qi(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(qi(n.slice(i), i > 0, !1)), o.join("");
}
function qi(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === Bi || o === Ui; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === Bi || o === Ui; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Bf(e, n) {
  const t = { type: "text", value: $f(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Uf(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const qf = {
  blockquote: yf,
  break: bf,
  code: kf,
  delete: wf,
  emphasis: xf,
  footnoteReference: pl,
  footnote: vf,
  heading: Ef,
  html: Sf,
  imageReference: Cf,
  image: Tf,
  inlineCode: Af,
  linkReference: Pf,
  link: Of,
  listItem: Rf,
  list: If,
  paragraph: _f,
  root: jf,
  strong: Df,
  table: Lf,
  tableCell: Mf,
  tableRow: Nf,
  text: Bf,
  thematicBreak: Uf,
  toml: Kt,
  yaml: Kt,
  definition: Kt,
  footnoteDefinition: Kt
};
function Kt() {
  return null;
}
const gl = (
  /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {AssertAnything}
   */
  function(e) {
    if (e == null)
      return Yf;
    if (typeof e == "string")
      return Wf(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Hf(e) : Vf(e);
    if (typeof e == "function")
      return wn(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Hf(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = gl(e[t]);
  return wn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].call(this, ...i))
        return !0;
    return !1;
  }
}
function Vf(e) {
  return wn(n);
  function n(t) {
    let r;
    for (r in e)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
}
function Wf(e) {
  return wn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function wn(e) {
  return n;
  function n(t, ...r) {
    return !!(t && typeof t == "object" && "type" in t && e.call(this, t, ...r));
  }
}
function Yf() {
  return !0;
}
const Gf = !0, Hi = !1, Jf = "skip", Kf = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor<Node>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(e, n, t, r) {
    typeof n == "function" && typeof t != "function" && (r = t, t = n, n = null);
    const i = gl(n), o = r ? -1 : 1;
    l(e, void 0, [])();
    function l(a, s, u) {
      const c = a && typeof a == "object" ? a : {};
      if (typeof c.type == "string") {
        const m = (
          // `hast`
          typeof c.tagName == "string" ? c.tagName : (
            // `xast`
            typeof c.name == "string" ? c.name : void 0
          )
        );
        Object.defineProperty(f, "name", {
          value: "node (" + (a.type + (m ? "<" + m + ">" : "")) + ")"
        });
      }
      return f;
      function f() {
        let m = [], p, d, y;
        if ((!n || i(a, s, u[u.length - 1] || null)) && (m = Xf(t(a, u)), m[0] === Hi))
          return m;
        if (a.children && m[0] !== Jf)
          for (d = (r ? a.children.length : -1) + o, y = u.concat(a); d > -1 && d < a.children.length; ) {
            if (p = l(a.children[d], d, y)(), p[0] === Hi)
              return p;
            d = typeof p[1] == "number" ? p[1] : d + o;
          }
        return m;
      }
    }
  }
);
function Xf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Gf, e] : [e];
}
const Ir = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(e, n, t, r) {
    typeof n == "function" && typeof t != "function" && (r = t, t = n, n = null), Kf(e, n, i, r);
    function i(o, l) {
      const a = l[l.length - 1];
      return t(
        o,
        a ? a.children.indexOf(o) : null,
        a
      );
    }
  }
);
function Qf(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Vi = {}.hasOwnProperty;
function Zf(e) {
  const n = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return Ir(e, "definition", (r) => {
    const i = Wi(r.identifier);
    i && !Vi.call(n, i) && (n[i] = r);
  }), t;
  function t(r) {
    const i = Wi(r);
    return i && Vi.call(n, i) ? n[i] : null;
  }
}
function Wi(e) {
  return String(e || "").toUpperCase();
}
const un = {}.hasOwnProperty;
function ep(e, n) {
  const t = n || {}, r = t.allowDangerousHtml || !1, i = {};
  return l.dangerous = r, l.clobberPrefix = t.clobberPrefix === void 0 || t.clobberPrefix === null ? "user-content-" : t.clobberPrefix, l.footnoteLabel = t.footnoteLabel || "Footnotes", l.footnoteLabelTagName = t.footnoteLabelTagName || "h2", l.footnoteLabelProperties = t.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = t.footnoteBackLabel || "Back to content", l.unknownHandler = t.unknownHandler, l.passThrough = t.passThrough, l.handlers = { ...qf, ...t.handlers }, l.definition = Zf(e), l.footnoteById = i, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = tp, l.applyData = np, l.one = a, l.all = s, l.wrap = ip, l.augment = o, Ir(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    un.call(i, c) || (i[c] = u);
  }), l;
  function o(u, c) {
    if (u && "data" in u && u.data) {
      const f = u.data;
      f.hName && (c.type !== "element" && (c = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), c.tagName = f.hName), c.type === "element" && f.hProperties && (c.properties = { ...c.properties, ...f.hProperties }), "children" in c && c.children && f.hChildren && (c.children = f.hChildren);
    }
    if (u) {
      const f = "type" in u ? u : { position: u };
      Qf(f) || (c.position = { start: Rr(f), end: Fr(f) });
    }
    return c;
  }
  function l(u, c, f, m) {
    return Array.isArray(f) && (m = f, f = {}), o(u, {
      type: "element",
      tagName: c,
      properties: f || {},
      children: m || []
    });
  }
  function a(u, c) {
    return yl(l, u, c);
  }
  function s(u) {
    return _r(l, u);
  }
}
function tp(e, n) {
  e.position && (n.position = zf(e));
}
function np(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    typeof r == "string" && (t.type === "element" ? t.tagName = r : t = {
      type: "element",
      tagName: r,
      properties: {},
      children: []
    }), t.type === "element" && o && (t.properties = { ...t.properties, ...o }), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function yl(e, n, t) {
  const r = n && n.type;
  if (!r)
    throw new Error("Expected node, got `" + n + "`");
  return un.call(e.handlers, r) ? e.handlers[r](e, n, t) : e.passThrough && e.passThrough.includes(r) ? "children" in n ? { ...n, children: _r(e, n) } : n : e.unknownHandler ? e.unknownHandler(e, n, t) : rp(e, n);
}
function _r(e, n) {
  const t = [];
  if ("children" in n) {
    const r = n.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const o = yl(e, r[i], n);
      if (o) {
        if (i && r[i - 1].type === "break" && (!Array.isArray(o) && o.type === "text" && (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && o.type === "element")) {
          const l = o.children[0];
          l && l.type === "text" && (l.value = l.value.replace(/^\s+/, ""));
        }
        Array.isArray(o) ? t.push(...o) : t.push(o);
      }
    }
  }
  return t;
}
function rp(e, n) {
  const t = n.data || {}, r = "value" in n && !(un.call(t, "hProperties") || un.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: _r(e, n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function ip(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function op(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[t]];
    if (!r)
      continue;
    const i = e.all(r), o = String(r.identifier).toUpperCase(), l = St(o.toLowerCase());
    let a = 0;
    const s = [];
    for (; ++a <= e.footnoteCounts[o]; ) {
      const f = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + l + (a > 1 ? "-" + a : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel
        },
        children: [{ type: "text", value: "↩" }]
      };
      a > 1 && f.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(a) }]
      }), s.length > 0 && s.push({ type: "text", value: " " }), s.push(f);
    }
    const u = i[i.length - 1];
    if (u && u.type === "element" && u.tagName === "p") {
      const f = u.children[u.children.length - 1];
      f && f.type === "text" ? f.value += " " : u.children.push({ type: "text", value: " " }), u.children.push(...s);
    } else
      i.push(...s);
    const c = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + l },
      children: e.wrap(i, !0)
    };
    e.patch(r, c), n.push(c);
  }
  if (n.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: e.footnoteLabelTagName,
          properties: {
            // To do: use structured clone.
            ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
            id: "footnote-label"
          },
          children: [{ type: "text", value: e.footnoteLabel }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(n, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
function bl(e, n) {
  const t = ep(e, n), r = t.one(e, null), i = op(t);
  return i && r.children.push({ type: "text", value: `
` }, i), Array.isArray(r) ? { type: "root", children: r } : r;
}
const lp = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  function(e, n) {
    return e && "run" in e ? sp(e, n) : up(e || n);
  }
), ap = lp;
function sp(e, n) {
  return (t, r, i) => {
    e.run(bl(t, n), r, (o) => {
      i(o);
    });
  };
}
function up(e) {
  return (n) => bl(n, e);
}
var fr = { exports: {} }, Xt = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function cp() {
  if (Yi)
    return he;
  Yi = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(v) {
    if (typeof v == "object" && v !== null) {
      var x = v.$$typeof;
      switch (x) {
        case n:
          switch (v = v.type, v) {
            case s:
            case u:
            case r:
            case o:
            case i:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case c:
                case d:
                case p:
                case l:
                  return v;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  function j(v) {
    return C(v) === u;
  }
  return he.AsyncMode = s, he.ConcurrentMode = u, he.ContextConsumer = a, he.ContextProvider = l, he.Element = n, he.ForwardRef = c, he.Fragment = r, he.Lazy = d, he.Memo = p, he.Portal = t, he.Profiler = o, he.StrictMode = i, he.Suspense = f, he.isAsyncMode = function(v) {
    return j(v) || C(v) === s;
  }, he.isConcurrentMode = j, he.isContextConsumer = function(v) {
    return C(v) === a;
  }, he.isContextProvider = function(v) {
    return C(v) === l;
  }, he.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === n;
  }, he.isForwardRef = function(v) {
    return C(v) === c;
  }, he.isFragment = function(v) {
    return C(v) === r;
  }, he.isLazy = function(v) {
    return C(v) === d;
  }, he.isMemo = function(v) {
    return C(v) === p;
  }, he.isPortal = function(v) {
    return C(v) === t;
  }, he.isProfiler = function(v) {
    return C(v) === o;
  }, he.isStrictMode = function(v) {
    return C(v) === i;
  }, he.isSuspense = function(v) {
    return C(v) === f;
  }, he.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === o || v === i || v === f || v === m || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === p || v.$$typeof === l || v.$$typeof === a || v.$$typeof === c || v.$$typeof === b || v.$$typeof === w || v.$$typeof === A || v.$$typeof === y);
  }, he.typeOf = C, he;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function fp() {
  return Gi || (Gi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === u || D === o || D === i || D === f || D === m || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === p || D.$$typeof === l || D.$$typeof === a || D.$$typeof === c || D.$$typeof === b || D.$$typeof === w || D.$$typeof === A || D.$$typeof === y);
    }
    function j(D) {
      if (typeof D == "object" && D !== null) {
        var Pe = D.$$typeof;
        switch (Pe) {
          case n:
            var B = D.type;
            switch (B) {
              case s:
              case u:
              case r:
              case o:
              case i:
              case f:
                return B;
              default:
                var _e = B && B.$$typeof;
                switch (_e) {
                  case a:
                  case c:
                  case d:
                  case p:
                  case l:
                    return _e;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var v = s, x = u, N = a, q = l, te = n, E = c, _ = r, z = d, Q = p, Z = t, G = o, W = i, le = f, we = !1;
    function xe(D) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(D) || j(D) === s;
    }
    function h(D) {
      return j(D) === u;
    }
    function F(D) {
      return j(D) === a;
    }
    function M(D) {
      return j(D) === l;
    }
    function g(D) {
      return typeof D == "object" && D !== null && D.$$typeof === n;
    }
    function U(D) {
      return j(D) === c;
    }
    function ne(D) {
      return j(D) === r;
    }
    function $(D) {
      return j(D) === d;
    }
    function V(D) {
      return j(D) === p;
    }
    function Y(D) {
      return j(D) === t;
    }
    function re(D) {
      return j(D) === o;
    }
    function K(D) {
      return j(D) === i;
    }
    function Ee(D) {
      return j(D) === f;
    }
    de.AsyncMode = v, de.ConcurrentMode = x, de.ContextConsumer = N, de.ContextProvider = q, de.Element = te, de.ForwardRef = E, de.Fragment = _, de.Lazy = z, de.Memo = Q, de.Portal = Z, de.Profiler = G, de.StrictMode = W, de.Suspense = le, de.isAsyncMode = xe, de.isConcurrentMode = h, de.isContextConsumer = F, de.isContextProvider = M, de.isElement = g, de.isForwardRef = U, de.isFragment = ne, de.isLazy = $, de.isMemo = V, de.isPortal = Y, de.isProfiler = re, de.isStrictMode = K, de.isSuspense = Ee, de.isValidElementType = C, de.typeOf = j;
  }()), de;
}
var Ji;
function kl() {
  return Ji || (Ji = 1, process.env.NODE_ENV === "production" ? Xt.exports = cp() : Xt.exports = fp()), Xt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bn, Ki;
function pp() {
  if (Ki)
    return Bn;
  Ki = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var l = {}, a = 0; a < 10; a++)
        l["_" + String.fromCharCode(a)] = a;
      var s = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bn = i() ? Object.assign : function(o, l) {
    for (var a, s = r(o), u, c = 1; c < arguments.length; c++) {
      a = Object(arguments[c]);
      for (var f in a)
        n.call(a, f) && (s[f] = a[f]);
      if (e) {
        u = e(a);
        for (var m = 0; m < u.length; m++)
          t.call(a, u[m]) && (s[u[m]] = a[u[m]]);
      }
    }
    return s;
  }, Bn;
}
var Un, Xi;
function jr() {
  if (Xi)
    return Un;
  Xi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Un = e, Un;
}
var qn, Qi;
function wl() {
  return Qi || (Qi = 1, qn = Function.call.bind(Object.prototype.hasOwnProperty)), qn;
}
var Hn, Zi;
function hp() {
  if (Zi)
    return Hn;
  Zi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = jr(), t = {}, r = wl();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(o, l, a, s, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (r(o, c)) {
          var f;
          try {
            if (typeof o[c] != "function") {
              var m = Error(
                (s || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = o[c](l, c, s, a, null, n);
          } catch (d) {
            f = d;
          }
          if (f && !(f instanceof Error) && e(
            (s || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + a + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Hn = i, Hn;
}
var Vn, eo;
function dp() {
  if (eo)
    return Vn;
  eo = 1;
  var e = kl(), n = pp(), t = jr(), r = wl(), i = hp(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var s = "Warning: " + a;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Vn = function(a, s) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var F = h && (u && h[u] || h[c]);
      if (typeof F == "function")
        return F;
    }
    var m = "<<anonymous>>", p = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: A(),
      arrayOf: C,
      element: j(),
      elementType: v(),
      instanceOf: x,
      node: E(),
      objectOf: q,
      oneOf: N,
      oneOfType: te,
      shape: z,
      exact: Q
    };
    function d(h, F) {
      return h === F ? h !== 0 || 1 / h === 1 / F : h !== h && F !== F;
    }
    function y(h, F) {
      this.message = h, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(h) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, M = 0;
      function g(ne, $, V, Y, re, K, Ee) {
        if (Y = Y || m, K = K || V, Ee !== t) {
          if (s) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = Y + ":" + V;
            !F[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[Pe] = !0, M++);
          }
        }
        return $[V] == null ? ne ? $[V] === null ? new y("The " + re + " `" + K + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new y("The " + re + " `" + K + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : h($, V, Y, re, K);
      }
      var U = g.bind(null, !1);
      return U.isRequired = g.bind(null, !0), U;
    }
    function w(h) {
      function F(M, g, U, ne, $, V) {
        var Y = M[g], re = W(Y);
        if (re !== h) {
          var K = le(Y);
          return new y(
            "Invalid " + ne + " `" + $ + "` of type " + ("`" + K + "` supplied to `" + U + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return b(F);
    }
    function A() {
      return b(l);
    }
    function C(h) {
      function F(M, g, U, ne, $) {
        if (typeof h != "function")
          return new y("Property `" + $ + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var V = M[g];
        if (!Array.isArray(V)) {
          var Y = W(V);
          return new y("Invalid " + ne + " `" + $ + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected an array."));
        }
        for (var re = 0; re < V.length; re++) {
          var K = h(V, re, U, ne, $ + "[" + re + "]", t);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return b(F);
    }
    function j() {
      function h(F, M, g, U, ne) {
        var $ = F[M];
        if (!a($)) {
          var V = W($);
          return new y("Invalid " + U + " `" + ne + "` of type " + ("`" + V + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(h);
    }
    function v() {
      function h(F, M, g, U, ne) {
        var $ = F[M];
        if (!e.isValidElementType($)) {
          var V = W($);
          return new y("Invalid " + U + " `" + ne + "` of type " + ("`" + V + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(h);
    }
    function x(h) {
      function F(M, g, U, ne, $) {
        if (!(M[g] instanceof h)) {
          var V = h.name || m, Y = xe(M[g]);
          return new y("Invalid " + ne + " `" + $ + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return b(F);
    }
    function N(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function F(M, g, U, ne, $) {
        for (var V = M[g], Y = 0; Y < h.length; Y++)
          if (d(V, h[Y]))
            return null;
        var re = JSON.stringify(h, function(Ee, D) {
          var Pe = le(D);
          return Pe === "symbol" ? String(D) : D;
        });
        return new y("Invalid " + ne + " `" + $ + "` of value `" + String(V) + "` " + ("supplied to `" + U + "`, expected one of " + re + "."));
      }
      return b(F);
    }
    function q(h) {
      function F(M, g, U, ne, $) {
        if (typeof h != "function")
          return new y("Property `" + $ + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var V = M[g], Y = W(V);
        if (Y !== "object")
          return new y("Invalid " + ne + " `" + $ + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected an object."));
        for (var re in V)
          if (r(V, re)) {
            var K = h(V, re, U, ne, $ + "." + re, t);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return b(F);
    }
    function te(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var F = 0; F < h.length; F++) {
        var M = h[F];
        if (typeof M != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(M) + " at index " + F + "."
          ), l;
      }
      function g(U, ne, $, V, Y) {
        for (var re = [], K = 0; K < h.length; K++) {
          var Ee = h[K], D = Ee(U, ne, $, V, Y, t);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && re.push(D.data.expectedType);
        }
        var Pe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new y("Invalid " + V + " `" + Y + "` supplied to " + ("`" + $ + "`" + Pe + "."));
      }
      return b(g);
    }
    function E() {
      function h(F, M, g, U, ne) {
        return Z(F[M]) ? null : new y("Invalid " + U + " `" + ne + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return b(h);
    }
    function _(h, F, M, g, U) {
      return new y(
        (h || "React class") + ": " + F + " type `" + M + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function z(h) {
      function F(M, g, U, ne, $) {
        var V = M[g], Y = W(V);
        if (Y !== "object")
          return new y("Invalid " + ne + " `" + $ + "` of type `" + Y + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var re in h) {
          var K = h[re];
          if (typeof K != "function")
            return _(U, ne, $, re, le(K));
          var Ee = K(V, re, U, ne, $ + "." + re, t);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return b(F);
    }
    function Q(h) {
      function F(M, g, U, ne, $) {
        var V = M[g], Y = W(V);
        if (Y !== "object")
          return new y("Invalid " + ne + " `" + $ + "` of type `" + Y + "` " + ("supplied to `" + U + "`, expected `object`."));
        var re = n({}, M[g], h);
        for (var K in re) {
          var Ee = h[K];
          if (r(h, K) && typeof Ee != "function")
            return _(U, ne, $, K, le(Ee));
          if (!Ee)
            return new y(
              "Invalid " + ne + " `" + $ + "` key `" + K + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(M[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var D = Ee(V, K, U, ne, $ + "." + K, t);
          if (D)
            return D;
        }
        return null;
      }
      return b(F);
    }
    function Z(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(Z);
          if (h === null || a(h))
            return !0;
          var F = f(h);
          if (F) {
            var M = F.call(h), g;
            if (F !== h.entries) {
              for (; !(g = M.next()).done; )
                if (!Z(g.value))
                  return !1;
            } else
              for (; !(g = M.next()).done; ) {
                var U = g.value;
                if (U && !Z(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(h, F) {
      return h === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function W(h) {
      var F = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : G(F, h) ? "symbol" : F;
    }
    function le(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var F = W(h);
      if (F === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function we(h) {
      var F = le(h);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function xe(h) {
      return !h.constructor || !h.constructor.name ? m : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Vn;
}
var Wn, to;
function mp() {
  if (to)
    return Wn;
  to = 1;
  var e = jr();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Wn = function() {
    function r(l, a, s, u, c, f) {
      if (f !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, Wn;
}
if (process.env.NODE_ENV !== "production") {
  var gp = kl(), yp = !0;
  fr.exports = dp()(gp.isElement, yp);
} else
  fr.exports = mp()();
var bp = fr.exports;
const ee = /* @__PURE__ */ Mt(bp);
class qt {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(n, t, r) {
    this.property = n, this.normal = t, r && (this.space = r);
  }
}
qt.prototype.property = {};
qt.prototype.normal = {};
qt.prototype.space = null;
function xl(e, n) {
  const t = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
  return new qt(t, r, n);
}
function pr(e) {
  return e.toLowerCase();
}
class qe {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(n, t) {
    this.property = n, this.attribute = t;
  }
}
qe.prototype.space = null;
qe.prototype.boolean = !1;
qe.prototype.booleanish = !1;
qe.prototype.overloadedBoolean = !1;
qe.prototype.number = !1;
qe.prototype.commaSeparated = !1;
qe.prototype.spaceSeparated = !1;
qe.prototype.commaOrSpaceSeparated = !1;
qe.prototype.mustUseProperty = !1;
qe.prototype.defined = !1;
let kp = 0;
const ie = ht(), Te = ht(), vl = ht(), R = ht(), be = ht(), wt = ht(), ze = ht();
function ht() {
  return 2 ** ++kp;
}
const hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ie,
  booleanish: Te,
  commaOrSpaceSeparated: ze,
  commaSeparated: wt,
  number: R,
  overloadedBoolean: vl,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), Yn = Object.keys(hr);
class Dr extends qe {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(n, t, r, i) {
    let o = -1;
    if (super(n, t), no(this, "space", i), typeof r == "number")
      for (; ++o < Yn.length; ) {
        const l = Yn[o];
        no(this, Yn[o], (r & hr[l]) === hr[l]);
      }
  }
}
Dr.prototype.defined = !0;
function no(e, n, t) {
  t && (e[n] = t);
}
const wp = {}.hasOwnProperty;
function Ct(e) {
  const n = {}, t = {};
  let r;
  for (r in e.properties)
    if (wp.call(e.properties, r)) {
      const i = e.properties[r], o = new Dr(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[pr(r)] = r, t[pr(o.attribute)] = r;
    }
  return new qt(n, t, e.space);
}
const El = Ct({
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Sl = Ct({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Cl(e, n) {
  return n in e ? e[n] : n;
}
function Tl(e, n) {
  return Cl(e, n.toLowerCase());
}
const Al = Ct({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Tl,
  properties: { xmlns: null, xmlnsXLink: null }
}), Pl = Ct({
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Te,
    ariaAutoComplete: null,
    ariaBusy: Te,
    ariaChecked: Te,
    ariaColCount: R,
    ariaColIndex: R,
    ariaColSpan: R,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: Te,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: Te,
    ariaFlowTo: be,
    ariaGrabbed: Te,
    ariaHasPopup: null,
    ariaHidden: Te,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: R,
    ariaLive: null,
    ariaModal: Te,
    ariaMultiLine: Te,
    ariaMultiSelectable: Te,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: R,
    ariaPressed: Te,
    ariaReadOnly: Te,
    ariaRelevant: null,
    ariaRequired: Te,
    ariaRoleDescription: be,
    ariaRowCount: R,
    ariaRowIndex: R,
    ariaRowSpan: R,
    ariaSelected: Te,
    ariaSetSize: R,
    ariaSort: null,
    ariaValueMax: R,
    ariaValueMin: R,
    ariaValueNow: R,
    ariaValueText: null,
    role: null
  }
}), xp = Ct({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Tl,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: wt,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: ie,
    allowPaymentRequest: ie,
    allowUserMedia: ie,
    alt: null,
    as: null,
    async: ie,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: ie,
    autoPlay: ie,
    blocking: be,
    capture: ie,
    charSet: null,
    checked: ie,
    cite: null,
    className: be,
    cols: R,
    colSpan: null,
    content: null,
    contentEditable: Te,
    controls: ie,
    controlsList: be,
    coords: R | wt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ie,
    defer: ie,
    dir: null,
    dirName: null,
    disabled: ie,
    download: vl,
    draggable: Te,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ie,
    formTarget: null,
    headers: be,
    height: R,
    hidden: ie,
    high: R,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ie,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ie,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: ie,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ie,
    low: R,
    manifest: null,
    max: null,
    maxLength: R,
    media: null,
    method: null,
    min: null,
    minLength: R,
    multiple: ie,
    muted: ie,
    name: null,
    nonce: null,
    noModule: ie,
    noValidate: ie,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ie,
    optimum: R,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: ie,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ie,
    referrerPolicy: null,
    rel: be,
    required: ie,
    reversed: ie,
    rows: R,
    rowSpan: R,
    sandbox: be,
    scope: null,
    scoped: ie,
    seamless: ie,
    selected: ie,
    shape: null,
    size: R,
    sizes: null,
    slot: null,
    span: R,
    spellCheck: Te,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: R,
    step: null,
    style: null,
    tabIndex: R,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ie,
    useMap: null,
    value: Te,
    width: R,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: be,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: R,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: R,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ie,
    // Lists. Use CSS to reduce space between items instead
    declare: ie,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: R,
    // `<img>` and `<object>`
    leftMargin: R,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: R,
    // `<body>`
    marginWidth: R,
    // `<body>`
    noResize: ie,
    // `<frame>`
    noHref: ie,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ie,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ie,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: R,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Te,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: R,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: R,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ie,
    disableRemotePlayback: ie,
    prefix: null,
    property: null,
    results: R,
    security: null,
    unselectable: null
  }
}), vp = Ct({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Cl,
  properties: {
    about: ze,
    accentHeight: R,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: R,
    amplitude: R,
    arabicForm: null,
    ascent: R,
    attributeName: null,
    attributeType: null,
    azimuth: R,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: R,
    by: null,
    calcMode: null,
    capHeight: R,
    className: be,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: R,
    diffuseConstant: R,
    direction: null,
    display: null,
    dur: null,
    divisor: R,
    dominantBaseline: null,
    download: ie,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: R,
    enableBackground: null,
    end: null,
    event: null,
    exponent: R,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: R,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: wt,
    g2: wt,
    glyphName: wt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: R,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: R,
    horizOriginX: R,
    horizOriginY: R,
    id: null,
    ideographic: R,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: R,
    k: R,
    k1: R,
    k2: R,
    k3: R,
    k4: R,
    kernelMatrix: ze,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: R,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: R,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: R,
    overlineThickness: R,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: R,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: be,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: R,
    pointsAtY: R,
    pointsAtZ: R,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ze,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ze,
    rev: ze,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ze,
    requiredFeatures: ze,
    requiredFonts: ze,
    requiredFormats: ze,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: R,
    specularExponent: R,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: R,
    strikethroughThickness: R,
    string: null,
    stroke: null,
    strokeDashArray: ze,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: R,
    strokeOpacity: R,
    strokeWidth: null,
    style: null,
    surfaceScale: R,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ze,
    tabIndex: R,
    tableValues: null,
    target: null,
    targetX: R,
    targetY: R,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ze,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: R,
    underlineThickness: R,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: R,
    values: null,
    vAlphabetic: R,
    vMathematical: R,
    vectorEffect: null,
    vHanging: R,
    vIdeographic: R,
    version: null,
    vertAdvY: R,
    vertOriginX: R,
    vertOriginY: R,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: R,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Ep = /^data[-\w.:]+$/i, ro = /-[a-z]/g, Sp = /[A-Z]/g;
function Cp(e, n) {
  const t = pr(n);
  let r = n, i = qe;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Ep.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(ro, Ap);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!ro.test(o)) {
        let l = o.replace(Sp, Tp);
        l.charAt(0) !== "-" && (l = "-" + l), n = "data" + l;
      }
    }
    i = Dr;
  }
  return new i(r, n);
}
function Tp(e) {
  return "-" + e.toLowerCase();
}
function Ap(e) {
  return e.charAt(1).toUpperCase();
}
const io = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Pp = xl([Sl, El, Al, Pl, xp], "html"), Op = xl([Sl, El, Al, Pl, vp], "svg");
function Rp(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (n) => {
      Ir(n, "element", (t, r, i) => {
        const o = (
          /** @type {Element|Root} */
          i
        );
        let l;
        if (e.allowedElements ? l = !e.allowedElements.includes(t.tagName) : e.disallowedElements && (l = e.disallowedElements.includes(t.tagName)), !l && e.allowElement && typeof r == "number" && (l = !e.allowElement(t, r, o)), l && typeof r == "number")
          return e.unwrapDisallowed && t.children ? o.children.splice(r, 1, ...t.children) : o.children.splice(r, 1), r;
      });
    };
}
var dr = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function Fp() {
  if (oo)
    return me;
  oo = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function y(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case e:
          switch (b = b.type, b) {
            case t:
            case i:
            case r:
            case u:
            case c:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case l:
                case s:
                case m:
                case f:
                case o:
                  return b;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  return me.ContextConsumer = l, me.ContextProvider = o, me.Element = e, me.ForwardRef = s, me.Fragment = t, me.Lazy = m, me.Memo = f, me.Portal = n, me.Profiler = i, me.StrictMode = r, me.Suspense = u, me.SuspenseList = c, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(b) {
    return y(b) === l;
  }, me.isContextProvider = function(b) {
    return y(b) === o;
  }, me.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, me.isForwardRef = function(b) {
    return y(b) === s;
  }, me.isFragment = function(b) {
    return y(b) === t;
  }, me.isLazy = function(b) {
    return y(b) === m;
  }, me.isMemo = function(b) {
    return y(b) === f;
  }, me.isPortal = function(b) {
    return y(b) === n;
  }, me.isProfiler = function(b) {
    return y(b) === i;
  }, me.isStrictMode = function(b) {
    return y(b) === r;
  }, me.isSuspense = function(b) {
    return y(b) === u;
  }, me.isSuspenseList = function(b) {
    return y(b) === c;
  }, me.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === t || b === i || b === r || b === u || b === c || b === p || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === f || b.$$typeof === o || b.$$typeof === l || b.$$typeof === s || b.$$typeof === d || b.getModuleId !== void 0);
  }, me.typeOf = y, me;
}
var ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Ip() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = !1, y = !1, b = !1, w = !1, A = !1, C;
    C = Symbol.for("react.module.reference");
    function j(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === t || B === i || A || B === r || B === u || B === c || w || B === p || d || y || b || typeof B == "object" && B !== null && (B.$$typeof === m || B.$$typeof === f || B.$$typeof === o || B.$$typeof === l || B.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === C || B.getModuleId !== void 0));
    }
    function v(B) {
      if (typeof B == "object" && B !== null) {
        var _e = B.$$typeof;
        switch (_e) {
          case e:
            var Ne = B.type;
            switch (Ne) {
              case t:
              case i:
              case r:
              case u:
              case c:
                return Ne;
              default:
                var nt = Ne && Ne.$$typeof;
                switch (nt) {
                  case a:
                  case l:
                  case s:
                  case m:
                  case f:
                  case o:
                    return nt;
                  default:
                    return _e;
                }
            }
          case n:
            return _e;
        }
      }
    }
    var x = l, N = o, q = e, te = s, E = t, _ = m, z = f, Q = n, Z = i, G = r, W = u, le = c, we = !1, xe = !1;
    function h(B) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(B) {
      return xe || (xe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(B) {
      return v(B) === l;
    }
    function g(B) {
      return v(B) === o;
    }
    function U(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function ne(B) {
      return v(B) === s;
    }
    function $(B) {
      return v(B) === t;
    }
    function V(B) {
      return v(B) === m;
    }
    function Y(B) {
      return v(B) === f;
    }
    function re(B) {
      return v(B) === n;
    }
    function K(B) {
      return v(B) === i;
    }
    function Ee(B) {
      return v(B) === r;
    }
    function D(B) {
      return v(B) === u;
    }
    function Pe(B) {
      return v(B) === c;
    }
    ge.ContextConsumer = x, ge.ContextProvider = N, ge.Element = q, ge.ForwardRef = te, ge.Fragment = E, ge.Lazy = _, ge.Memo = z, ge.Portal = Q, ge.Profiler = Z, ge.StrictMode = G, ge.Suspense = W, ge.SuspenseList = le, ge.isAsyncMode = h, ge.isConcurrentMode = F, ge.isContextConsumer = M, ge.isContextProvider = g, ge.isElement = U, ge.isForwardRef = ne, ge.isFragment = $, ge.isLazy = V, ge.isMemo = Y, ge.isPortal = re, ge.isProfiler = K, ge.isStrictMode = Ee, ge.isSuspense = D, ge.isSuspenseList = Pe, ge.isValidElementType = j, ge.typeOf = v;
  }()), ge;
}
process.env.NODE_ENV === "production" ? dr.exports = Fp() : dr.exports = Ip();
var _p = dr.exports;
const jp = /* @__PURE__ */ Mt(_p);
function Dp(e) {
  const n = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof n == "string" && n.replace(/[ \t\n\f\r]/g, "") === "";
}
function zp(e) {
  return e.join(" ").trim();
}
function Lp(e, n) {
  const t = n || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
var zr = { exports: {} }, ao = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Np = /\n/g, Mp = /^\s*/, $p = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Bp = /^:\s*/, Up = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, qp = /^[;\s]*/, Hp = /^\s+|\s+$/g, Vp = `
`, so = "/", uo = "*", ft = "", Wp = "comment", Yp = "declaration", Gp = function(e, n) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  n = n || {};
  var t = 1, r = 1;
  function i(d) {
    var y = d.match(Np);
    y && (t += y.length);
    var b = d.lastIndexOf(Vp);
    r = ~b ? d.length - b : r + d.length;
  }
  function o() {
    var d = { line: t, column: r };
    return function(y) {
      return y.position = new l(d), u(), y;
    };
  }
  function l(d) {
    this.start = d, this.end = { line: t, column: r }, this.source = n.source;
  }
  l.prototype.content = e;
  function a(d) {
    var y = new Error(
      n.source + ":" + t + ":" + r + ": " + d
    );
    if (y.reason = d, y.filename = n.source, y.line = t, y.column = r, y.source = e, !n.silent)
      throw y;
  }
  function s(d) {
    var y = d.exec(e);
    if (y) {
      var b = y[0];
      return i(b), e = e.slice(b.length), y;
    }
  }
  function u() {
    s(Mp);
  }
  function c(d) {
    var y;
    for (d = d || []; y = f(); )
      y !== !1 && d.push(y);
    return d;
  }
  function f() {
    var d = o();
    if (!(so != e.charAt(0) || uo != e.charAt(1))) {
      for (var y = 2; ft != e.charAt(y) && (uo != e.charAt(y) || so != e.charAt(y + 1)); )
        ++y;
      if (y += 2, ft === e.charAt(y - 1))
        return a("End of comment missing");
      var b = e.slice(2, y - 2);
      return r += 2, i(b), e = e.slice(y), r += 2, d({
        type: Wp,
        comment: b
      });
    }
  }
  function m() {
    var d = o(), y = s($p);
    if (y) {
      if (f(), !s(Bp))
        return a("property missing ':'");
      var b = s(Up), w = d({
        type: Yp,
        property: co(y[0].replace(ao, ft)),
        value: b ? co(b[0].replace(ao, ft)) : ft
      });
      return s(qp), w;
    }
  }
  function p() {
    var d = [];
    c(d);
    for (var y; y = m(); )
      y !== !1 && (d.push(y), c(d));
    return d;
  }
  return u(), p();
};
function co(e) {
  return e ? e.replace(Hp, ft) : ft;
}
var Jp = Gp;
function Ol(e, n) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  for (var r, i = Jp(e), o = typeof n == "function", l, a, s = 0, u = i.length; s < u; s++)
    r = i[s], l = r.property, a = r.value, o ? n(l, a, r) : a && (t || (t = {}), t[l] = a);
  return t;
}
zr.exports = Ol;
zr.exports.default = Ol;
var Kp = zr.exports;
const Xp = /* @__PURE__ */ Mt(Kp), mr = {}.hasOwnProperty, Qp = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Rl(e, n) {
  const t = [];
  let r = -1, i;
  for (; ++r < n.children.length; )
    i = n.children[r], i.type === "element" ? t.push(Zp(e, i, r, n)) : i.type === "text" ? (n.type !== "element" || !Qp.has(n.tagName) || !Dp(i)) && t.push(i.value) : i.type === "raw" && !e.options.skipHtml && t.push(i.value);
  return t;
}
function Zp(e, n, t, r) {
  const i = e.options, o = i.transformLinkUri === void 0 ? Hs : i.transformLinkUri, l = e.schema, a = n.tagName, s = {};
  let u = l, c;
  if (l.space === "html" && a === "svg" && (u = Op, e.schema = u), n.properties)
    for (c in n.properties)
      mr.call(n.properties, c) && th(s, c, n.properties[c], e);
  (a === "ol" || a === "ul") && e.listDepth++;
  const f = Rl(e, n);
  (a === "ol" || a === "ul") && e.listDepth--, e.schema = l;
  const m = n.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, p = i.components && mr.call(i.components, a) ? i.components[a] : a, d = typeof p == "string" || p === Re.Fragment;
  if (!jp.isValidElementType(p))
    throw new TypeError(
      `Component for name \`${a}\` not defined or is not renderable`
    );
  if (s.key = t, a === "a" && i.linkTarget && (s.target = typeof i.linkTarget == "function" ? i.linkTarget(
    String(s.href || ""),
    n.children,
    typeof s.title == "string" ? s.title : null
  ) : i.linkTarget), a === "a" && o && (s.href = o(
    String(s.href || ""),
    n.children,
    typeof s.title == "string" ? s.title : null
  )), !d && a === "code" && r.type === "element" && r.tagName !== "pre" && (s.inline = !0), !d && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (s.level = Number.parseInt(a.charAt(1), 10)), a === "img" && i.transformImageUri && (s.src = i.transformImageUri(
    String(s.src || ""),
    String(s.alt || ""),
    typeof s.title == "string" ? s.title : null
  )), !d && a === "li" && r.type === "element") {
    const y = eh(n);
    s.checked = y && y.properties ? !!y.properties.checked : null, s.index = Gn(r, n), s.ordered = r.tagName === "ol";
  }
  return !d && (a === "ol" || a === "ul") && (s.ordered = a === "ol", s.depth = e.listDepth), (a === "td" || a === "th") && (s.align && (s.style || (s.style = {}), s.style.textAlign = s.align, delete s.align), d || (s.isHeader = a === "th")), !d && a === "tr" && r.type === "element" && (s.isHeader = r.tagName === "thead"), i.sourcePos && (s["data-sourcepos"] = ih(m)), !d && i.rawSourcePos && (s.sourcePosition = n.position), !d && i.includeElementIndex && (s.index = Gn(r, n), s.siblingCount = Gn(r)), d || (s.node = n), f.length > 0 ? Re.createElement(p, s, f) : Re.createElement(p, s);
}
function eh(e) {
  let n = -1;
  for (; ++n < e.children.length; ) {
    const t = e.children[n];
    if (t.type === "element" && t.tagName === "input")
      return t;
  }
  return null;
}
function Gn(e, n) {
  let t = -1, r = 0;
  for (; ++t < e.children.length && e.children[t] !== n; )
    e.children[t].type === "element" && r++;
  return r;
}
function th(e, n, t, r) {
  const i = Cp(r.schema, n);
  let o = t;
  o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? Lp(o) : zp(o)), i.property === "style" && typeof o == "string" && (o = nh(o)), i.space && i.property ? e[mr.call(io, i.property) ? io[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o));
}
function nh(e) {
  const n = {};
  try {
    Xp(e, t);
  } catch {
  }
  return n;
  function t(r, i) {
    const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    n[o.replace(/-([a-z])/g, rh)] = i;
  }
}
function rh(e, n) {
  return n.toUpperCase();
}
function ih(e) {
  return [
    e.start.line,
    ":",
    e.start.column,
    "-",
    e.end.line,
    ":",
    e.end.column
  ].map(String).join("");
}
const fo = {}.hasOwnProperty, oh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Qt = {
  plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function Fl(e) {
  for (const o in Qt)
    if (fo.call(Qt, o) && fo.call(e, o)) {
      const l = Qt[o];
      console.warn(
        `[react-markdown] Warning: please ${l.to ? `use \`${l.to}\` instead of` : "remove"} \`${o}\` (see <${oh}#${l.id}> for more info)`
      ), delete Qt[o];
    }
  const n = lu().use(gf).use(e.remarkPlugins || []).use(ap, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(Rp, e), t = new Jo();
  typeof e.children == "string" ? t.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = n.runSync(n.parse(t), t);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let i = Re.createElement(
    Re.Fragment,
    {},
    Rl({ options: e, schema: Pp, listDepth: 0 }, r)
  );
  return e.className && (i = Re.createElement("div", { className: e.className }, i)), i;
}
Fl.propTypes = {
  // Core options:
  children: ee.string,
  // Layout options:
  className: ee.string,
  // Filter options:
  allowElement: ee.func,
  allowedElements: ee.arrayOf(ee.string),
  disallowedElements: ee.arrayOf(ee.string),
  unwrapDisallowed: ee.bool,
  // Plugin options:
  remarkPlugins: ee.arrayOf(
    ee.oneOfType([
      ee.object,
      ee.func,
      ee.arrayOf(
        ee.oneOfType([
          ee.bool,
          ee.string,
          ee.object,
          ee.func,
          ee.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            ee.any
          )
        ])
      )
    ])
  ),
  rehypePlugins: ee.arrayOf(
    ee.oneOfType([
      ee.object,
      ee.func,
      ee.arrayOf(
        ee.oneOfType([
          ee.bool,
          ee.string,
          ee.object,
          ee.func,
          ee.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            ee.any
          )
        ])
      )
    ])
  ),
  // Transform options:
  sourcePos: ee.bool,
  rawSourcePos: ee.bool,
  skipHtml: ee.bool,
  includeElementIndex: ee.bool,
  transformLinkUri: ee.oneOfType([ee.func, ee.bool]),
  linkTarget: ee.oneOfType([ee.func, ee.string]),
  transformImageUri: ee.func,
  components: ee.object
};
function po(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
const lh = Lr(/\p{P}/u), ah = Lr(/[!-/:-@[-`{-~]/);
function sh(e) {
  return ah(e) || lh(e);
}
const uh = Lr(/\s/);
function Lr(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function ch(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Nr = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return dh;
    if (typeof e == "function")
      return xn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? fh(e) : ph(e);
    if (typeof e == "string")
      return hh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function fh(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Nr(e[t]);
  return xn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function ph(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return xn(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o])
        return !1;
    return !0;
  }
}
function hh(e) {
  return xn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function xn(e) {
  return n;
  function n(t, r, i) {
    return !!(mh(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function dh() {
  return !0;
}
function mh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Il = [], gh = !0, ho = !1, yh = "skip";
function bh(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = Nr(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(m, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return m;
    function m() {
      let p = Il, d, y, b;
      if ((!n || o(s, u, c[c.length - 1] || void 0)) && (p = kh(t(s, c)), p[0] === ho))
        return p;
      if ("children" in s && s.children) {
        const w = (
          /** @type {UnistParent} */
          s
        );
        if (w.children && p[0] !== yh)
          for (y = (r ? w.children.length : -1) + l, b = c.concat(w); y > -1 && y < w.children.length; ) {
            const A = w.children[y];
            if (d = a(A, y, b)(), d[0] === ho)
              return d;
            y = typeof d[1] == "number" ? d[1] : y + l;
          }
      }
      return p;
    }
  }
}
function kh(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [gh, e] : e == null ? Il : [e];
}
function wh(e, n, t) {
  const i = Nr((t || {}).ignore || []), o = xh(n);
  let l = -1;
  for (; ++l < o.length; )
    bh(e, "text", a);
  function a(u, c) {
    let f = -1, m;
    for (; ++f < c.length; ) {
      const p = c[f], d = m ? m.children : void 0;
      if (i(
        p,
        d ? d.indexOf(p) : void 0,
        m
      ))
        return;
      m = p;
    }
    if (m)
      return s(u, c);
  }
  function s(u, c) {
    const f = c[c.length - 1], m = o[l][0], p = o[l][1];
    let d = 0;
    const b = f.children.indexOf(u);
    let w = !1, A = [];
    m.lastIndex = 0;
    let C = m.exec(u.value);
    for (; C; ) {
      const j = C.index, v = {
        index: C.index,
        input: C.input,
        stack: [...c, u]
      };
      let x = p(...C, v);
      if (typeof x == "string" && (x = x.length > 0 ? { type: "text", value: x } : void 0), x === !1 ? m.lastIndex = j + 1 : (d !== j && A.push({
        type: "text",
        value: u.value.slice(d, j)
      }), Array.isArray(x) ? A.push(...x) : x && A.push(x), d = j + C[0].length, w = !0), !m.global)
        break;
      C = m.exec(u.value);
    }
    return w ? (d < u.value.length && A.push({ type: "text", value: u.value.slice(d) }), f.children.splice(b, 1, ...A)) : A = [u], b + A.length;
  }
}
function xh(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([vh(i[0]), Eh(i[1])]);
  }
  return n;
}
function vh(e) {
  return typeof e == "string" ? new RegExp(ch(e), "g") : e;
}
function Eh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Jn = "phrasing", Kn = ["autolink", "link", "image", "label"];
function Sh() {
  return {
    transforms: [Fh],
    enter: {
      literalAutolink: Th,
      literalAutolinkEmail: Xn,
      literalAutolinkHttp: Xn,
      literalAutolinkWww: Xn
    },
    exit: {
      literalAutolink: Rh,
      literalAutolinkEmail: Oh,
      literalAutolinkHttp: Ah,
      literalAutolinkWww: Ph
    }
  };
}
function Ch() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Jn,
        notInConstruct: Kn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Jn,
        notInConstruct: Kn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Jn,
        notInConstruct: Kn
      }
    ]
  };
}
function Th(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Xn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Ah(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Ph(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function Oh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Rh(e) {
  this.exit(e);
}
function Fh(e) {
  wh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ih],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, _h]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Ih(e, n, t, r, i) {
  let o = "";
  if (!_l(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !jh(t)))
    return !1;
  const l = Dh(t + r);
  if (!l[0])
    return !1;
  const a = {
    type: "link",
    title: null,
    url: o + n + l[0],
    children: [{ type: "text", value: n + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function _h(e, n, t, r) {
  return (
    // Not an expected previous character.
    !_l(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function jh(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function Dh(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = po(e, "(");
  let o = po(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function _l(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || uh(t) || sh(t)) && (!n || t !== 47);
}
function jl(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
Dl.peek = Wh;
function zh() {
  return {
    enter: {
      gfmFootnoteDefinition: Nh,
      gfmFootnoteDefinitionLabelString: Mh,
      gfmFootnoteCall: Uh,
      gfmFootnoteCallString: qh
    },
    exit: {
      gfmFootnoteDefinition: Bh,
      gfmFootnoteDefinitionLabelString: $h,
      gfmFootnoteCall: Vh,
      gfmFootnoteCallString: Hh
    }
  };
}
function Lh() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: Yh, footnoteReference: Dl }
  };
}
function Nh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Mh() {
  this.buffer();
}
function $h(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = jl(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Bh(e) {
  this.exit(e);
}
function Uh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function qh() {
  this.buffer();
}
function Hh(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = jl(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Vh(e) {
  this.exit(e);
}
function Dl(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteReference"), a = t.enter("reference");
  return o += i.move(
    t.safe(t.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), l(), o += i.move("]"), o;
}
function Wh() {
  return "[";
}
function Yh(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteDefinition"), a = t.enter("label");
  return o += i.move(
    t.safe(t.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), o += i.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), i.shift(4), o += i.move(
    t.indentLines(t.containerFlow(e, i.current()), Gh)
  ), l(), o;
}
function Gh(e, n, t) {
  return n === 0 ? e : (t ? "" : "    ") + e;
}
const Jh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
zl.peek = ed;
function Kh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Qh },
    exit: { strikethrough: Zh }
  };
}
function Xh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Jh
      }
    ],
    handlers: { delete: zl }
  };
}
function Qh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Zh(e) {
  this.exit(e);
}
function zl(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function ed() {
  return "~";
}
function td(e, n = {}) {
  const t = (n.align || []).concat(), r = n.stringLength || rd, i = [], o = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const d = [], y = [];
    let b = -1;
    for (e[u].length > s && (s = e[u].length); ++b < e[u].length; ) {
      const w = nd(e[u][b]);
      if (n.alignDelimiters !== !1) {
        const A = r(w);
        y[b] = A, (a[b] === void 0 || A > a[b]) && (a[b] = A);
      }
      d.push(w);
    }
    o[u] = d, l[u] = y;
  }
  let c = -1;
  if (typeof t == "object" && "length" in t)
    for (; ++c < s; )
      i[c] = mo(t[c]);
  else {
    const d = mo(t);
    for (; ++c < s; )
      i[c] = d;
  }
  c = -1;
  const f = [], m = [];
  for (; ++c < s; ) {
    const d = i[c];
    let y = "", b = "";
    d === 99 ? (y = ":", b = ":") : d === 108 ? y = ":" : d === 114 && (b = ":");
    let w = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - y.length - b.length
    );
    const A = y + "-".repeat(w) + b;
    n.alignDelimiters !== !1 && (w = y.length + w + b.length, w > a[c] && (a[c] = w), m[c] = w), f[c] = A;
  }
  o.splice(1, 0, f), l.splice(1, 0, m), u = -1;
  const p = [];
  for (; ++u < o.length; ) {
    const d = o[u], y = l[u];
    c = -1;
    const b = [];
    for (; ++c < s; ) {
      const w = d[c] || "";
      let A = "", C = "";
      if (n.alignDelimiters !== !1) {
        const j = a[c] - (y[c] || 0), v = i[c];
        v === 114 ? A = " ".repeat(j) : v === 99 ? j % 2 ? (A = " ".repeat(j / 2 + 0.5), C = " ".repeat(j / 2 - 0.5)) : (A = " ".repeat(j / 2), C = A) : C = " ".repeat(j);
      }
      n.delimiterStart !== !1 && !c && b.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && w === "") && (n.delimiterStart !== !1 || c) && b.push(" "), n.alignDelimiters !== !1 && b.push(A), b.push(w), n.alignDelimiters !== !1 && b.push(C), n.padding !== !1 && b.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && b.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join("")
    );
  }
  return p.join(`
`);
}
function nd(e) {
  return e == null ? "" : String(e);
}
function rd(e) {
  return e.length;
}
function mo(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function id(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(
    t.containerFlow(e, o.current()),
    od
  );
  return i(), l;
}
function od(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function ld(e, n) {
  return go(e, n.inConstruct, !0) && !go(e, n.notInConstruct, !1);
}
function go(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function yo(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && ld(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function ad(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function sd(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function ud(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function cd(e, n, t, r) {
  const i = ud(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (sd(e, t)) {
    const f = t.enter("codeIndented"), m = t.indentLines(o, fd);
    return f(), m;
  }
  const a = t.createTracker(r), s = i.repeat(Math.max(ad(o, i) + 1, 3)), u = t.enter("codeFenced");
  let c = a.move(s);
  if (e.lang) {
    const f = t.enter(`codeFencedLang${l}`);
    c += a.move(
      t.safe(e.lang, {
        before: c,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), f();
  }
  if (e.lang && e.meta) {
    const f = t.enter(`codeFencedMeta${l}`);
    c += a.move(" "), c += a.move(
      t.safe(e.meta, {
        before: c,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), f();
  }
  return c += a.move(`
`), o && (c += a.move(o + `
`)), c += a.move(s), u(), c;
}
function fd(e, n, t) {
  return (t ? "" : "    ") + e;
}
function Mr(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function pd(e, n, t, r) {
  const i = Mr(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    t.safe(t.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    t.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), l(), u;
}
function hd(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
Ll.peek = dd;
function Ll(e, n, t, r) {
  const i = hd(t), o = t.enter("emphasis"), l = t.createTracker(r);
  let a = l.move(i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i), o(), a;
}
function dd(e, n, t) {
  return t.options.emphasis || "*";
}
const Nl = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return bd;
    if (typeof e == "function")
      return vn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? md(e) : gd(e);
    if (typeof e == "string")
      return yd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function md(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Nl(e[t]);
  return vn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function gd(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return vn(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o])
        return !1;
    return !0;
  }
}
function yd(e) {
  return vn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function vn(e) {
  return n;
  function n(t, r, i) {
    return !!(kd(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function bd() {
  return !0;
}
function kd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ml = [], wd = !0, gr = !1, xd = "skip";
function vd(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = Nl(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(m, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return m;
    function m() {
      let p = Ml, d, y, b;
      if ((!n || o(s, u, c[c.length - 1] || void 0)) && (p = Ed(t(s, c)), p[0] === gr))
        return p;
      if ("children" in s && s.children) {
        const w = (
          /** @type {UnistParent} */
          s
        );
        if (w.children && p[0] !== xd)
          for (y = (r ? w.children.length : -1) + l, b = c.concat(w); y > -1 && y < w.children.length; ) {
            const A = w.children[y];
            if (d = a(A, y, b)(), d[0] === gr)
              return d;
            y = typeof d[1] == "number" ? d[1] : y + l;
          }
      }
      return p;
    }
  }
}
function Ed(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [wd, e] : e == null ? Ml : [e];
}
function Sd(e, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), vd(e, o, a, i);
  function a(s, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(s) : void 0;
    return l(s, f, c);
  }
}
const Cd = {};
function $l(e, n) {
  const t = n || Cd, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Bl(e, r, i);
}
function Bl(e, n, t) {
  if (Td(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return bo(e.children, n, t);
  }
  return Array.isArray(e) ? bo(e, n, t) : "";
}
function bo(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Bl(e[i], n, t);
  return r.join("");
}
function Td(e) {
  return !!(e && typeof e == "object");
}
function Ad(e, n) {
  let t = !1;
  return Sd(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, gr;
  }), !!((!e.depth || e.depth < 3) && $l(e) && (n.options.setext || t));
}
function Pd(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (Ad(e, t)) {
    const c = t.enter("headingSetext"), f = t.enter("phrasing"), m = t.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return f(), c(), m + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      m.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(m.lastIndexOf("\r"), m.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), a = t.enter("headingAtx"), s = t.enter("phrasing");
  o.move(l + " ");
  let u = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = "&#x" + u.charCodeAt(0).toString(16).toUpperCase() + ";" + u.slice(1)), u = u ? l + " " + u : l, t.options.closeAtx && (u += " " + l), s(), a(), u;
}
Ul.peek = Od;
function Ul(e) {
  return e.value || "";
}
function Od() {
  return "<";
}
ql.peek = Rd;
function ql(e, n, t, r) {
  const i = Mr(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    t.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    t.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), u += s.move(")"), l(), u;
}
function Rd() {
  return "!";
}
Hl.peek = Fd;
function Hl(e, n, t, r) {
  const i = e.referenceType, o = t.enter("imageReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("![");
  const u = t.safe(e.alt, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const c = t.stack;
  t.stack = [], l = t.enter("reference");
  const f = t.safe(t.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = c, o(), i === "full" || !u || u !== f ? s += a.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Fd() {
  return "!";
}
Vl.peek = Id;
function Vl(e, n, t) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
    const l = t.unsafe[o], a = t.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function Id() {
  return "`";
}
function Wl(e, n) {
  const t = $l(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Yl.peek = _d;
function Yl(e, n, t, r) {
  const i = Mr(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let a, s;
  if (Wl(e, t)) {
    const c = t.stack;
    t.stack = [], a = t.enter("autolink");
    let f = l.move("<");
    return f += l.move(
      t.containerPhrasing(e, {
        before: f,
        after: ">",
        ...l.current()
      })
    ), f += l.move(">"), a(), t.stack = c, f;
  }
  a = t.enter("link"), s = t.enter("label");
  let u = l.move("[");
  return u += l.move(
    t.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    t.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (s = t.enter("destinationRaw"), u += l.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = t.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), s()), u += l.move(")"), a(), u;
}
function _d(e, n, t) {
  return Wl(e, t) ? "<" : "[";
}
Gl.peek = jd;
function Gl(e, n, t, r) {
  const i = e.referenceType, o = t.enter("linkReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("[");
  const u = t.containerPhrasing(e, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const c = t.stack;
  t.stack = [], l = t.enter("reference");
  const f = t.safe(t.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = c, o(), i === "full" || !u || u !== f ? s += a.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function jd() {
  return "[";
}
function $r(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function Dd(e) {
  const n = $r(e), t = e.options.bulletOther;
  if (!t)
    return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different"
    );
  return t;
}
function zd(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function Jl(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function Ld(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e.ordered ? zd(t) : $r(t);
  const a = e.ordered ? l === "." ? ")" : "." : Dd(t);
  let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = !0), Jl(t) === l && c
    ) {
      let f = -1;
      for (; ++f < e.children.length; ) {
        const m = e.children[f];
        if (m && m.type === "listItem" && m.children && m.children[0] && m.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (l = a), t.bulletCurrent = l;
  const u = t.containerFlow(e, r);
  return t.bulletLastUsed = l, t.bulletCurrent = o, i(), u;
}
function Nd(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function Md(e, n, t, r) {
  const i = Nd(t);
  let o = t.bulletCurrent || $r(t);
  n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = t.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const s = t.enter("listItem"), u = t.indentLines(
    t.containerFlow(e, a.current()),
    c
  );
  return s(), u;
  function c(f, m, p) {
    return m ? (p ? "" : " ".repeat(l)) + f : (p ? o : o + " ".repeat(l - o.length)) + f;
  }
}
function $d(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
  return o(), i(), l;
}
const Kl = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Hd;
    if (typeof e == "function")
      return En(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Bd(e) : Ud(e);
    if (typeof e == "string")
      return qd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Bd(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Kl(e[t]);
  return En(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function Ud(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return En(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o])
        return !1;
    return !0;
  }
}
function qd(e) {
  return En(n);
  function n(t) {
    return t && t.type === e;
  }
}
function En(e) {
  return n;
  function n(t, r, i) {
    return !!(Vd(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Hd() {
  return !0;
}
function Vd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Wd = (
  /** @type {(node?: unknown) => node is PhrasingContent} */
  Kl([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "link",
    "linkReference",
    "strong",
    "text"
  ])
);
function Yd(e, n, t, r) {
  return (e.children.some(function(l) {
    return Wd(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function Gd(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
Xl.peek = Jd;
function Xl(e, n, t, r) {
  const i = Gd(t), o = t.enter("strong"), l = t.createTracker(r);
  let a = l.move(i + i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i + i), o(), a;
}
function Jd(e, n, t) {
  return t.options.strong || "*";
}
function Kd(e, n, t, r) {
  return t.safe(e.value, r);
}
function Xd(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function Qd(e, n, t) {
  const r = (Jl(t) + (t.options.ruleSpaces ? " " : "")).repeat(Xd(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ql = {
  blockquote: id,
  break: yo,
  code: cd,
  definition: pd,
  emphasis: Ll,
  hardBreak: yo,
  heading: Pd,
  html: Ul,
  image: ql,
  imageReference: Hl,
  inlineCode: Vl,
  link: Yl,
  linkReference: Gl,
  list: Ld,
  listItem: Md,
  paragraph: $d,
  root: Yd,
  strong: Xl,
  text: Kd,
  thematicBreak: Qd
};
function Zd() {
  return {
    enter: {
      table: em,
      tableData: ko,
      tableHeader: ko,
      tableRow: nm
    },
    exit: {
      codeText: rm,
      table: tm,
      tableData: Qn,
      tableHeader: Qn,
      tableRow: Qn
    }
  };
}
function em(e) {
  const n = e._align;
  this.enter(
    {
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function tm(e) {
  this.exit(e), this.data.inTable = void 0;
}
function nm(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Qn(e) {
  this.exit(e);
}
function ko(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function rm(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, im));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function im(e, n) {
  return n === "|" ? n : e;
}
function om(e) {
  const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: m,
      table: l,
      tableCell: s,
      tableRow: a
    }
  };
  function l(p, d, y, b) {
    return u(c(p, y, b), p.align);
  }
  function a(p, d, y, b) {
    const w = f(p, y, b), A = u([w]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(p, d, y, b) {
    const w = y.enter("tableCell"), A = y.enter("phrasing"), C = y.containerPhrasing(p, {
      ...b,
      before: o,
      after: o
    });
    return A(), w(), C;
  }
  function u(p, d) {
    return td(p, {
      align: d,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: t,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(p, d, y) {
    const b = p.children;
    let w = -1;
    const A = [], C = d.enter("table");
    for (; ++w < b.length; )
      A[w] = f(b[w], d, y);
    return C(), A;
  }
  function f(p, d, y) {
    const b = p.children;
    let w = -1;
    const A = [], C = d.enter("tableRow");
    for (; ++w < b.length; )
      A[w] = s(b[w], p, d, y);
    return C(), A;
  }
  function m(p, d, y) {
    let b = Ql.inlineCode(p, d, y);
    return y.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function lm() {
  return {
    exit: {
      taskListCheckValueChecked: wo,
      taskListCheckValueUnchecked: wo,
      paragraph: sm
    }
  };
}
function am() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: um }
  };
}
function wo(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function sm(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === "text") {
      const i = n.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function um(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
  o && a.move(l);
  let s = Ql.listItem(e, n, t, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function cm() {
  return [
    Sh(),
    zh(),
    Kh(),
    Zd(),
    lm()
  ];
}
function fm(e) {
  return {
    extensions: [
      Ch(),
      Lh(),
      Xh(),
      om(e),
      am()
    ]
  };
}
function pm(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
const xo = {}.hasOwnProperty;
function hm(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    dm(n, e[t]);
  return n;
}
function dm(e, n) {
  let t;
  for (t in n) {
    const i = (xo.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        xo.call(i, l) || (i[l] = []);
        const a = o[l];
        mm(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function mm(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  pm(e, 0, 0, r);
}
const gm = Ht(/\p{P}/u), Lt = Ht(/[A-Za-z]/), Br = Ht(/[\dA-Za-z]/);
function ym(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const bm = Ht(/[!-/:-@[-`{-~]/);
function vt(e) {
  return e !== null && (e < 0 || e === 32);
}
function Zl(e) {
  return bm(e) || gm(e);
}
const Nt = Ht(/\s/);
function Ht(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
const km = {
  tokenize: Cm,
  partial: !0
}, ea = {
  tokenize: Tm,
  partial: !0
}, ta = {
  tokenize: Am,
  partial: !0
}, na = {
  tokenize: Pm,
  partial: !0
}, wm = {
  tokenize: Om,
  partial: !0
}, ra = {
  tokenize: Em,
  previous: oa
}, ia = {
  tokenize: Sm,
  previous: la
}, tt = {
  tokenize: vm,
  previous: aa
}, Xe = {};
function xm() {
  return {
    text: Xe
  };
}
let ct = 48;
for (; ct < 123; )
  Xe[ct] = tt, ct++, ct === 58 ? ct = 65 : ct === 91 && (ct = 97);
Xe[43] = tt;
Xe[45] = tt;
Xe[46] = tt;
Xe[95] = tt;
Xe[72] = [tt, ia];
Xe[104] = [tt, ia];
Xe[87] = [tt, ra];
Xe[119] = [tt, ra];
function vm(e, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(f) {
    return !yr(f) || !aa.call(r, r.previous) || Ur(r.events) ? t(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(f));
  }
  function a(f) {
    return yr(f) ? (e.consume(f), a) : f === 64 ? (e.consume(f), s) : t(f);
  }
  function s(f) {
    return f === 46 ? e.check(
      wm,
      c,
      u
    )(f) : f === 45 || f === 95 || Br(f) ? (o = !0, e.consume(f), s) : c(f);
  }
  function u(f) {
    return e.consume(f), i = !0, s;
  }
  function c(f) {
    return o && i && Lt(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(f)) : t(f);
  }
}
function Em(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !oa.call(r, r.previous) || Ur(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      km,
      e.attempt(ea, e.attempt(ta, o), t),
      t
    )(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
  }
}
function Sm(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(f) {
    return (f === 72 || f === 104) && la.call(r, r.previous) && !Ur(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), a) : t(f);
  }
  function a(f) {
    if (Lt(f) && i.length < 5)
      return i += String.fromCodePoint(f), e.consume(f), a;
    if (f === 58) {
      const m = i.toLowerCase();
      if (m === "http" || m === "https")
        return e.consume(f), s;
    }
    return t(f);
  }
  function s(f) {
    return f === 47 ? (e.consume(f), o ? u : (o = !0, s)) : t(f);
  }
  function u(f) {
    return f === null || ym(f) || vt(f) || Nt(f) || Zl(f) ? t(f) : e.attempt(ea, e.attempt(ta, c), t)(f);
  }
  function c(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(f);
  }
}
function Cm(e, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function Tm(e, n, t) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(na, s, a)(u) : u === null || vt(u) || Nt(u) || u !== 45 && Zl(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? t(u) : n(u);
  }
}
function Am(e, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(na, n, o)(l) : l === null || vt(l) || Nt(l) ? n(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Pm(e, n, t) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || vt(a) || Nt(a) ? n(a) : t(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || vt(a) || Nt(a) ? n(a) : r(a);
  }
  function o(a) {
    return Lt(a) ? l(a) : t(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : Lt(a) ? (e.consume(a), l) : t(a);
  }
}
function Om(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Br(o) ? t(o) : n(o);
  }
}
function oa(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || vt(e);
}
function la(e) {
  return !Lt(e);
}
function aa(e) {
  return !(e === 47 || yr(e));
}
function yr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Br(e);
}
function Ur(e) {
  let n = e.length, t = !1;
  for (; n--; ) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t;
}
function Rm(e) {
  return e !== null && e < -2;
}
function cn(e) {
  return e !== null && (e < 0 || e === 32);
}
function br(e) {
  return e === -2 || e === -1 || e === 32;
}
function qr(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return br(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return br(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const Fm = {
  tokenize: Im,
  partial: !0
};
function Im(e, n, t) {
  return r;
  function r(o) {
    return br(o) ? qr(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Rm(o) ? n(o) : t(o);
  }
}
function Hr(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const _m = {
  tokenize: Bm,
  partial: !0
};
function jm() {
  return {
    document: {
      91: {
        tokenize: Nm,
        continuation: {
          tokenize: Mm
        },
        exit: $m
      }
    },
    text: {
      91: {
        tokenize: Lm
      },
      93: {
        add: "after",
        tokenize: Dm,
        resolveTo: zm
      }
    }
  };
}
function Dm(e, n, t) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      l = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return a;
  function a(s) {
    if (!l || !l._balanced)
      return t(s);
    const u = Hr(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
  }
}
function zm(e, n) {
  let t = e.length;
  for (; t--; )
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[t + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[t + 3][1].end),
    end: Object.assign({}, e[t + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[t + 1],
    e[t + 2],
    ["enter", r, n],
    // The `[`
    e[t + 3],
    e[t + 4],
    // The `^`.
    ["enter", i, n],
    ["exit", i, n],
    // Everything in between.
    ["enter", o, n],
    ["enter", l, n],
    ["exit", l, n],
    ["exit", o, n],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, n]
  ];
  return e.splice(t, e.length - t + 1, ...a), e;
}
function Lm(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(f) {
    return f !== 94 ? t(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(f) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      f === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      f === null || f === 91 || cn(f)
    )
      return t(f);
    if (f === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteCallString");
      return i.includes(Hr(r.sliceSerialize(m))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(f);
    }
    return cn(f) || (l = !0), o++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), o++, u) : u(f);
  }
}
function Nm(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return s;
  function s(d) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(d) {
    return d === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : t(d);
  }
  function c(d) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      d === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      d === null || d === 91 || cn(d)
    )
      return t(d);
    if (d === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Hr(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), m;
    }
    return cn(d) || (a = !0), l++, e.consume(d), d === 92 ? f : c;
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, c) : c(d);
  }
  function m(d) {
    return d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), i.includes(o) || i.push(o), qr(
      e,
      p,
      "gfmFootnoteDefinitionWhitespace"
    )) : t(d);
  }
  function p(d) {
    return n(d);
  }
}
function Mm(e, n, t) {
  return e.check(Fm, n, e.attempt(_m, n, t));
}
function $m(e) {
  e.exit("gfmFootnoteDefinition");
}
function Bm(e, n, t) {
  const r = this;
  return qr(
    e,
    i,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? n(o) : t(o);
  }
}
function Zn(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
const Um = Vr(/\p{P}/u), qm = Vr(/[!-/:-@[-`{-~]/);
function Hm(e) {
  return e !== null && (e < 0 || e === 32);
}
function Vm(e) {
  return qm(e) || Um(e);
}
const Wm = Vr(/\s/);
function Vr(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function vo(e) {
  if (e === null || Hm(e) || Wm(e))
    return 1;
  if (Vm(e))
    return 2;
}
function Ym(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
function Gm(e) {
  let t = (e || {}).singleTilde;
  const r = {
    tokenize: o,
    resolveAll: i
  };
  return t == null && (t = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, a) {
    let s = -1;
    for (; ++s < l.length; )
      if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && // If the sizes are the same:
          l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[s][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[s][1].start)
            }, m = [
              ["enter", c, a],
              ["enter", l[u][1], a],
              ["exit", l[u][1], a],
              ["enter", f, a]
            ], p = a.parser.constructs.insideSpan.null;
            p && Zn(
              m,
              m.length,
              0,
              Ym(p, l.slice(u + 1, s), a)
            ), Zn(m, m.length, 0, [
              ["exit", f, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["exit", c, a]
            ]), Zn(l, u - 1, s - u + 3, m), s = u + m.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function o(l, a, s) {
    const u = this.previous, c = this.events;
    let f = 0;
    return m;
    function m(d) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(d) : (l.enter("strikethroughSequenceTemporary"), p(d));
    }
    function p(d) {
      const y = vo(u);
      if (d === 126)
        return f > 1 ? s(d) : (l.consume(d), f++, p);
      if (f < 2 && !t)
        return s(d);
      const b = l.exit("strikethroughSequenceTemporary"), w = vo(d);
      return b._open = !w || w === 2 && !!y, b._close = !y || y === 2 && !!w, a(d);
    }
  }
}
function Zt(e) {
  return e !== null && e < -2;
}
function Eo(e) {
  return e !== null && (e < 0 || e === 32);
}
function pt(e) {
  return e === -2 || e === -1 || e === 32;
}
function _t(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return pt(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return pt(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
class Jm {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, t, r) {
    Km(this, n, t, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImpl(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0; )
      t -= 1, r.push(
        n.slice(this.map[t][0] + this.map[t][1]),
        this.map[t][2]
      ), n.length = this.map[t][0];
    r.push([...n]), n.length = 0;
    let i = r.pop();
    for (; i; )
      n.push(...i), i = r.pop();
    this.map.length = 0;
  }
}
function Km(e, n, t, r) {
  let i = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === n) {
        e.map[i][1] += t, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([n, t, r]);
  }
}
function Xm(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length; ) {
    const i = e[n];
    if (t) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(
          e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
        );
      else if (i[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else
      i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = !0);
    n += 1;
  }
  return r;
}
function Qm() {
  return {
    flow: {
      null: {
        tokenize: Zm,
        resolveAll: eg
      }
    }
  };
}
function Zm(e, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(E) {
    let _ = r.events.length - 1;
    for (; _ > -1; ) {
      const Z = r.events[_][1].type;
      if (Z === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      Z === "linePrefix")
        _--;
      else
        break;
    }
    const z = _ > -1 ? r.events[_][1].type : null, Q = z === "tableHead" || z === "tableRow" ? x : s;
    return Q === x && r.parser.lazy[r.now().line] ? t(E) : Q(E);
  }
  function s(E) {
    return e.enter("tableHead"), e.enter("tableRow"), u(E);
  }
  function u(E) {
    return E === 124 || (l = !0, o += 1), c(E);
  }
  function c(E) {
    return E === null ? t(E) : Zt(E) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), p) : t(E) : pt(E) ? _t(e, c, "whitespace")(E) : (o += 1, l && (l = !1, i += 1), E === 124 ? (e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), l = !0, c) : (e.enter("data"), f(E)));
  }
  function f(E) {
    return E === null || E === 124 || Eo(E) ? (e.exit("data"), c(E)) : (e.consume(E), E === 92 ? m : f);
  }
  function m(E) {
    return E === 92 || E === 124 ? (e.consume(E), f) : f(E);
  }
  function p(E) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(E) : (e.enter("tableDelimiterRow"), l = !1, pt(E) ? _t(
      e,
      d,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(E) : d(E));
  }
  function d(E) {
    return E === 45 || E === 58 ? b(E) : E === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), y) : v(E);
  }
  function y(E) {
    return pt(E) ? _t(e, b, "whitespace")(E) : b(E);
  }
  function b(E) {
    return E === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(E), e.exit("tableDelimiterMarker"), w) : E === 45 ? (o += 1, w(E)) : E === null || Zt(E) ? j(E) : v(E);
  }
  function w(E) {
    return E === 45 ? (e.enter("tableDelimiterFiller"), A(E)) : v(E);
  }
  function A(E) {
    return E === 45 ? (e.consume(E), A) : E === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(E), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(E));
  }
  function C(E) {
    return pt(E) ? _t(e, j, "whitespace")(E) : j(E);
  }
  function j(E) {
    return E === 124 ? d(E) : E === null || Zt(E) ? !l || i !== o ? v(E) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(E)) : v(E);
  }
  function v(E) {
    return t(E);
  }
  function x(E) {
    return e.enter("tableRow"), N(E);
  }
  function N(E) {
    return E === 124 ? (e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), N) : E === null || Zt(E) ? (e.exit("tableRow"), n(E)) : pt(E) ? _t(e, N, "whitespace")(E) : (e.enter("data"), q(E));
  }
  function q(E) {
    return E === null || E === 124 || Eo(E) ? (e.exit("data"), N(E)) : (e.consume(E), E === 92 ? te : q);
  }
  function te(E) {
    return E === 92 || E === 124 ? (e.consume(E), q) : q(E);
  }
}
function eg(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, c, f;
  const m = new Jm();
  for (; ++t < e.length; ) {
    const p = e[t], d = p[1];
    p[0] === "enter" ? d.type === "tableHead" ? (a = !1, s !== 0 && (So(m, n, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(t, 0, [["enter", u, n]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = !0, f = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], a && (a = !1, c = {
      type: "tableBody",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(t, 0, [["enter", c, n]])), i = d.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], f = en(
      m,
      n,
      o,
      i,
      void 0,
      f
    ), o = [0, 0, 0, 0]), l[2] = t)) : d.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], f = en(
      m,
      n,
      o,
      i,
      void 0,
      f
    )), o = l, l = [o[1], t, 0, 0])) : d.type === "tableHead" ? (a = !0, s = t) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], f = en(
      m,
      n,
      o,
      i,
      t,
      f
    )) : l[1] !== 0 && (f = en(m, n, l, i, t, f)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (s !== 0 && So(m, n, s, u, c), m.consume(n.events), t = -1; ++t < n.events.length; ) {
    const p = n.events[t];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Xm(n.events, t));
  }
  return e;
}
function en(e, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, bt(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const s = bt(n.events, t[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const u = bt(n.events, t[2]), c = bt(n.events, t[3]), f = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, c)
    };
    if (e.add(t[2], 0, [["enter", f, n]]), r !== 2) {
      const m = n.events[t[2]], p = n.events[t[3]];
      if (m[1].end = Object.assign({}, p[1].end), m[1].type = "chunkText", m[1].contentType = "text", t[3] > t[2] + 1) {
        const d = t[2] + 1, y = t[3] - t[2] - 1;
        e.add(d, y, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", f, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, bt(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function So(e, n, t, r, i) {
  const o = [], l = bt(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function bt(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
function tg(e) {
  return e !== null && e < -2;
}
function ng(e) {
  return e !== null && (e < 0 || e === 32);
}
function kr(e) {
  return e === -2 || e === -1 || e === 32;
}
function rg(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return kr(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return kr(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const ig = {
  tokenize: lg
};
function og() {
  return {
    text: {
      91: ig
    }
  };
}
function lg(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? t(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(s) {
    return ng(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
  }
  function a(s) {
    return tg(s) ? n(s) : kr(s) ? e.check(
      {
        tokenize: ag
      },
      n,
      t
    )(s) : t(s);
  }
}
function ag(e, n, t) {
  return rg(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function sg(e) {
  return hm([
    xm(),
    jm(),
    Gm(e),
    Qm(),
    og()
  ]);
}
const ug = {};
function cg(e) {
  const n = (
    /** @type {Processor} */
    this
  ), t = e || ug, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(sg(t)), o.push(cm()), l.push(fm(t));
}
function gg({ config: e, rules: n }) {
  const t = fn(), r = ya(), i = () => r.current.scrollIntoView(), o = sessionStorage.getItem("gameID");
  return /* @__PURE__ */ P.jsxs("div", { ref: r, className: "flex flex-col items-center m-2 md:m-12", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md", children: [
      /* @__PURE__ */ P.jsxs("article", { className: "prose dark:prose-invert max-w-fit fade-in", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col md:flex-row w-full h-full justify-between items-center", children: [
          /* @__PURE__ */ P.jsxs("div", { className: "text-4xl font-black mb-6 md:mb-0", children: [
            /* @__PURE__ */ P.jsx("span", { className: `text-5xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
            " Game Rules"
          ] }),
          /* @__PURE__ */ P.jsx("button", { onClick: () => t(o ? "/" + o : "/"), className: "bg-blue-500 px-6 py-2 font-bold italic", children: o ? "Back" : "Play Online" })
        ] }),
        /* @__PURE__ */ P.jsx(Fl, { children: n, remarkPlugins: [cg] })
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "mt-12 flex flex-col w-full items-center", children: /* @__PURE__ */ P.jsx("button", { className: "text-zinc-500 font-light italic", onClick: i, children: "back to top 👆" }) })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "mt-8", children: /* @__PURE__ */ P.jsx(wr, {}) })
  ] });
}
export {
  hg as DownPage,
  wr as Footer,
  mg as GamePage,
  dg as HomePage,
  gg as RulesPage
};
