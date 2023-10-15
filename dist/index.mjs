import Re, { useEffect as bt, useState as it, forwardRef as ba, useCallback as Kt, useRef as To } from "react";
import { useNavigate as Mt, useParams as ka } from "react-router-dom";
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tr = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function wa() {
  if (ei)
    return Ot;
  ei = 1;
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
var ti;
function xa() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Re, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = Symbol.iterator, g = "@@iterator";
    function b(k) {
      if (k === null || typeof k != "object")
        return null;
      var O = d && k[d] || k[g];
      return typeof O == "function" ? O : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(k) {
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
        var be = L.map(function(ae) {
          return String(ae);
        });
        be.unshift("Warning: " + O), Function.prototype.apply.call(console[k], console, be);
      }
    }
    var j = !1, E = !1, x = !1, N = !1, U = !1, te;
    te = Symbol.for("react.module.reference");
    function v(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === o || U || k === i || k === u || k === c || N || k === p || j || E || x || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === f || k.$$typeof === l || k.$$typeof === a || k.$$typeof === s || // This needs to include all possible module reference object
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
      if (typeof k.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
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
            var fe = k, be = fe._payload, ae = fe._init;
            try {
              return Q(ae(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, G = 0, q, oe, xe, ye, h, I, H;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function B() {
      {
        if (G === 0) {
          q = console.log, oe = console.info, xe = console.warn, ye = console.error, h = console.group, I = console.groupCollapsed, H = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: y,
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
              value: q
            }),
            info: Z({}, k, {
              value: oe
            }),
            warn: Z({}, k, {
              value: xe
            }),
            error: Z({}, k, {
              value: ye
            }),
            group: Z({}, k, {
              value: h
            }),
            groupCollapsed: Z({}, k, {
              value: I
            }),
            groupEnd: Z({}, k, {
              value: H
            })
          });
        }
        G < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = w.ReactCurrentDispatcher, W;
    function Y(k, O, L) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (fe) {
            var X = fe.stack.trim().match(/\n( *(at )?)/);
            W = X && X[1] || "";
          }
        return `
` + W + k;
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
      var be;
      be = M.current, M.current = null, B();
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
          for (var le = Qe.stack.split(`
`), Oe = X.stack.split(`
`), Se = le.length - 1, Ce = Oe.length - 1; Se >= 1 && Ce >= 0 && le[Se] !== Oe[Ce]; )
            Ce--;
          for (; Se >= 1 && Ce >= 0; Se--, Ce--)
            if (le[Se] !== Oe[Ce]) {
              if (Se !== 1 || Ce !== 1)
                do
                  if (Se--, Ce--, Ce < 0 || le[Se] !== Oe[Ce]) {
                    var Me = `
` + le[Se].replace(" at new ", " at ");
                    return k.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", k.displayName)), typeof k == "function" && K.set(k, Me), Me;
                  }
                while (Se >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        re = !1, M.current = be, ne(), Error.prepareStackTrace = fe;
      }
      var mt = k ? k.displayName || k.name : "", Zr = mt ? Y(mt) : "";
      return typeof k == "function" && K.set(k, Zr), Zr;
    }
    function Pe(k, O, L) {
      return D(k, !1);
    }
    function $(k) {
      var O = k.prototype;
      return !!(O && O.isReactComponent);
    }
    function _e(k, O, L) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return D(k, $(k));
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
            var X = k, fe = X._payload, be = X._init;
            try {
              return _e(be(fe), O, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, tt = {}, Tt = w.ReactDebugCurrentFrame;
    function ht(k) {
      if (k) {
        var O = k._owner, L = _e(k.type, k._source, O ? O.type : null);
        Tt.setExtraStackFrame(L);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Wt(k, O, L, X, fe) {
      {
        var be = Function.call.bind(Ne);
        for (var ae in k)
          if (be(k, ae)) {
            var le = void 0;
            try {
              if (typeof k[ae] != "function") {
                var Oe = Error((X || "React class") + ": " + L + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              le = k[ae](O, ae, X, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              le = Se;
            }
            le && !(le instanceof Error) && (ht(fe), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", L, ae, typeof le), ht(null)), le instanceof Error && !(le.message in tt) && (tt[le.message] = !0, ht(fe), P("Failed %s type: %s", L, le.message), ht(null));
          }
      }
    }
    var Yt = Array.isArray;
    function At(k) {
      return Yt(k);
    }
    function Cn(k) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, L = O && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return L;
      }
    }
    function Tn(k) {
      try {
        return Gt(k), !1;
      } catch {
        return !0;
      }
    }
    function Gt(k) {
      return "" + k;
    }
    function Jt(k) {
      if (Tn(k))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(k)), Gt(k);
    }
    var S = w.ReactCurrentOwner, F = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V, ue, ce;
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
        ce[L] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(S.current.type), k.ref), ce[L] = !0);
      }
    }
    function at(k, O) {
      {
        var L = function() {
          V || (V = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function st(k, O) {
      {
        var L = function() {
          ue || (ue = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var ve = function(k, O, L, X, fe, be, ae) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: k,
        key: O,
        ref: L,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function Pt(k, O, L, X, fe) {
      {
        var be, ae = {}, le = null, Oe = null;
        L !== void 0 && (Jt(L), le = "" + L), We(O) && (Jt(O.key), le = "" + O.key), je(O) && (Oe = O.ref, He(O, fe));
        for (be in O)
          Ne.call(O, be) && !F.hasOwnProperty(be) && (ae[be] = O[be]);
        if (k && k.defaultProps) {
          var Se = k.defaultProps;
          for (be in Se)
            ae[be] === void 0 && (ae[be] = Se[be]);
        }
        if (le || Oe) {
          var Ce = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          le && at(ae, Ce), Oe && st(ae, Ce);
        }
        return ve(k, le, Oe, fe, X, S.current, ae);
      }
    }
    var De = w.ReactCurrentOwner, Yr = w.ReactDebugCurrentFrame;
    function dt(k) {
      if (k) {
        var O = k._owner, L = _e(k.type, k._source, O ? O.type : null);
        Yr.setExtraStackFrame(L);
      } else
        Yr.setExtraStackFrame(null);
    }
    var An;
    An = !1;
    function Pn(k) {
      return typeof k == "object" && k !== null && k.$$typeof === n;
    }
    function Gr() {
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
    function ca(k) {
      {
        if (k !== void 0) {
          var O = k.fileName.replace(/^.*[\\\/]/, ""), L = k.lineNumber;
          return `

Check your code at ` + O + ":" + L + ".";
        }
        return "";
      }
    }
    var Jr = {};
    function fa(k) {
      {
        var O = Gr();
        if (!O) {
          var L = typeof k == "string" ? k : k.displayName || k.name;
          L && (O = `

Check the top-level render call using <` + L + ">.");
        }
        return O;
      }
    }
    function Kr(k, O) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var L = fa(O);
        if (Jr[L])
          return;
        Jr[L] = !0;
        var X = "";
        k && k._owner && k._owner !== De.current && (X = " It was passed a child from " + Q(k._owner.type) + "."), dt(k), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, X), dt(null);
      }
    }
    function Xr(k, O) {
      {
        if (typeof k != "object")
          return;
        if (At(k))
          for (var L = 0; L < k.length; L++) {
            var X = k[L];
            Pn(X) && Kr(X, O);
          }
        else if (Pn(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var fe = b(k);
          if (typeof fe == "function" && fe !== k.entries)
            for (var be = fe.call(k), ae; !(ae = be.next()).done; )
              Pn(ae.value) && Kr(ae.value, O);
        }
      }
    }
    function pa(k) {
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
          Wt(L, k.props, "prop", X, k);
        } else if (O.PropTypes !== void 0 && !An) {
          An = !0;
          var fe = Q(O);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(k) {
      {
        for (var O = Object.keys(k.props), L = 0; L < O.length; L++) {
          var X = O[L];
          if (X !== "children" && X !== "key") {
            dt(k), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), dt(null);
            break;
          }
        }
        k.ref !== null && (dt(k), P("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function Qr(k, O, L, X, fe, be) {
      {
        var ae = v(k);
        if (!ae) {
          var le = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = ca(fe);
          Oe ? le += Oe : le += Gr();
          var Se;
          k === null ? Se = "null" : At(k) ? Se = "array" : k !== void 0 && k.$$typeof === n ? (Se = "<" + (Q(k.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof k, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, le);
        }
        var Ce = Pt(k, O, L, fe, be);
        if (Ce == null)
          return Ce;
        if (ae) {
          var Me = O.children;
          if (Me !== void 0)
            if (X)
              if (At(Me)) {
                for (var mt = 0; mt < Me.length; mt++)
                  Xr(Me[mt], k);
                Object.freeze && Object.freeze(Me);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xr(Me, k);
        }
        return k === r ? ha(Ce) : pa(Ce), Ce;
      }
    }
    function da(k, O, L) {
      return Qr(k, O, L, !0);
    }
    function ma(k, O, L) {
      return Qr(k, O, L, !1);
    }
    var ga = ma, ya = da;
    Rt.Fragment = r, Rt.jsx = ga, Rt.jsxs = ya;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? tr.exports = wa() : tr.exports = xa();
var T = tr.exports;
const gt = ({ href: e, title: n, className: t }) => /* @__PURE__ */ T.jsx("a", { className: `${t} text-zinc-300 hover:text-zinc-100 transition ease-in-out`, href: e, target: "_blank", rel: "noreferrer", children: n });
function pn() {
  return /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center w-full font-light text-sm", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ T.jsx(gt, { href: "mailto:hello@quibbble.com", title: "Contact" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(gt, { href: "https://www.buymeacoffee.com/quibbble", title: "Support" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(gt, { href: "https://discord.gg/VKvjutuhUp", title: "Discord" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(gt, { href: "https://github.com/quibbble", title: "Github" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(gt, { href: "https://status.quibbble.com", title: "Status" })
    ] }),
    /* @__PURE__ */ T.jsxs("p", { className: "mt-4 text-zinc-300 flex", children: [
      "Made with ♥ by ",
      /* @__PURE__ */ T.jsx(gt, { className: "underline", href: "https://chrisfregly.com", title: " Chris Fregly" })
    ] })
  ] });
}
function Ao(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: va } = Object.prototype, { getPrototypeOf: xr } = Object, hn = ((e) => (n) => {
  const t = va.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (n) => hn(n) === e), dn = (e) => (n) => typeof n === e, { isArray: Et } = Array, zt = dn("undefined");
function Ea(e) {
  return e !== null && !zt(e) && e.constructor !== null && !zt(e.constructor) && Be(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Po = Ke("ArrayBuffer");
function Sa(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Po(e.buffer), n;
}
const Ca = dn("string"), Be = dn("function"), Oo = dn("number"), mn = (e) => e !== null && typeof e == "object", Ta = (e) => e === !0 || e === !1, nn = (e) => {
  if (hn(e) !== "object")
    return !1;
  const n = xr(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Aa = Ke("Date"), Pa = Ke("File"), Oa = Ke("Blob"), Ra = Ke("FileList"), Fa = (e) => mn(e) && Be(e.pipe), Ia = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || Be(e.append) && ((n = hn(e)) === "formdata" || // detect form-data instance
  n === "object" && Be(e.toString) && e.toString() === "[object FormData]"));
}, _a = Ke("URLSearchParams"), ja = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bt(e, n, { allOwnKeys: t = !1 } = {}) {
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
function Ro(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, i;
  for (; r-- > 0; )
    if (i = t[r], n === i.toLowerCase())
      return i;
  return null;
}
const Fo = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Io = (e) => !zt(e) && e !== Fo;
function nr() {
  const { caseless: e } = Io(this) && this || {}, n = {}, t = (r, i) => {
    const o = e && Ro(n, i) || i;
    nn(n[o]) && nn(r) ? n[o] = nr(n[o], r) : nn(r) ? n[o] = nr({}, r) : Et(r) ? n[o] = r.slice() : n[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Bt(arguments[r], t);
  return n;
}
const Da = (e, n, t, { allOwnKeys: r } = {}) => (Bt(n, (i, o) => {
  t && Be(i) ? e[o] = Ao(i, t) : e[o] = i;
}, { allOwnKeys: r }), e), za = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), La = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, Na = (e, n, t, r) => {
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
}, Ma = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, $a = (e) => {
  if (!e)
    return null;
  if (Et(e))
    return e;
  let n = e.length;
  if (!Oo(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Ba = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && xr(Uint8Array)), Ua = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    n.call(e, o[0], o[1]);
  }
}, qa = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Ha = Ke("HTMLFormElement"), Va = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, i) {
    return r.toUpperCase() + i;
  }
), ni = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), Wa = Ke("RegExp"), _o = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Bt(t, (i, o) => {
    let l;
    (l = n(i, o, e)) !== !1 && (r[o] = l || i);
  }), Object.defineProperties(e, r);
}, Ya = (e) => {
  _o(e, (n, t) => {
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
}, Ga = (e, n) => {
  const t = {}, r = (i) => {
    i.forEach((o) => {
      t[o] = !0;
    });
  };
  return Et(e) ? r(e) : r(String(e).split(n)), t;
}, Ja = () => {
}, Ka = (e, n) => (e = +e, Number.isFinite(e) ? e : n), On = "abcdefghijklmnopqrstuvwxyz", ri = "0123456789", jo = {
  DIGIT: ri,
  ALPHA: On,
  ALPHA_DIGIT: On + On.toUpperCase() + ri
}, Xa = (e = 16, n = jo.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function Qa(e) {
  return !!(e && Be(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Za = (e) => {
  const n = new Array(10), t = (r, i) => {
    if (mn(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[i] = r;
        const o = Et(r) ? [] : {};
        return Bt(r, (l, a) => {
          const s = t(l, i + 1);
          !zt(s) && (o[a] = s);
        }), n[i] = void 0, o;
      }
    }
    return r;
  };
  return t(e, 0);
}, es = Ke("AsyncFunction"), ts = (e) => e && (mn(e) || Be(e)) && Be(e.then) && Be(e.catch), A = {
  isArray: Et,
  isArrayBuffer: Po,
  isBuffer: Ea,
  isFormData: Ia,
  isArrayBufferView: Sa,
  isString: Ca,
  isNumber: Oo,
  isBoolean: Ta,
  isObject: mn,
  isPlainObject: nn,
  isUndefined: zt,
  isDate: Aa,
  isFile: Pa,
  isBlob: Oa,
  isRegExp: Wa,
  isFunction: Be,
  isStream: Fa,
  isURLSearchParams: _a,
  isTypedArray: Ba,
  isFileList: Ra,
  forEach: Bt,
  merge: nr,
  extend: Da,
  trim: ja,
  stripBOM: za,
  inherits: La,
  toFlatObject: Na,
  kindOf: hn,
  kindOfTest: Ke,
  endsWith: Ma,
  toArray: $a,
  forEachEntry: Ua,
  matchAll: qa,
  isHTMLForm: Ha,
  hasOwnProperty: ni,
  hasOwnProp: ni,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _o,
  freezeMethods: Ya,
  toObjectSet: Ga,
  toCamelCase: Va,
  noop: Ja,
  toFiniteNumber: Ka,
  findKey: Ro,
  global: Fo,
  isContextDefined: Io,
  ALPHABET: jo,
  generateString: Xa,
  isSpecCompliantForm: Qa,
  toJSONObject: Za,
  isAsyncFn: es,
  isThenable: ts
};
function se(e, n, t, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), i && (this.response = i);
}
A.inherits(se, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Do = se.prototype, zo = {};
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
  zo[e] = { value: e };
});
Object.defineProperties(se, zo);
Object.defineProperty(Do, "isAxiosError", { value: !0 });
se.from = (e, n, t, r, i, o) => {
  const l = Object.create(Do);
  return A.toFlatObject(e, l, function(s) {
    return s !== Error.prototype;
  }, (a) => a !== "isAxiosError"), se.call(l, e.message, n, t, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const ns = null;
function rr(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Lo(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ii(e, n, t) {
  return e ? e.concat(n).map(function(i, o) {
    return i = Lo(i), !t && o ? "[" + i + "]" : i;
  }).join(t ? "." : "") : n;
}
function rs(e) {
  return A.isArray(e) && !e.some(rr);
}
const is = A.toFlatObject(A, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function gn(e, n, t) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = A.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !A.isUndefined(b[g]);
  });
  const r = t.metaTokens, i = t.visitor || c, o = t.dots, l = t.indexes, s = (t.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(n);
  if (!A.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (A.isDate(d))
      return d.toISOString();
    if (!s && A.isBlob(d))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(d) || A.isTypedArray(d) ? s && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, g, b) {
    let w = d;
    if (d && !b && typeof d == "object") {
      if (A.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (A.isArray(d) && rs(d) || (A.isFileList(d) || A.endsWith(g, "[]")) && (w = A.toArray(d)))
        return g = Lo(g), w.forEach(function(C, j) {
          !(A.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ii([g], j, o) : l === null ? g : g + "[]",
            u(C)
          );
        }), !1;
    }
    return rr(d) ? !0 : (n.append(ii(b, g, o), u(d)), !1);
  }
  const f = [], m = Object.assign(is, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: rr
  });
  function p(d, g) {
    if (!A.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), A.forEach(d, function(w, P) {
        (!(A.isUndefined(w) || w === null) && i.call(
          n,
          w,
          A.isString(P) ? P.trim() : P,
          g,
          m
        )) === !0 && p(w, g ? g.concat(P) : [P]);
      }), f.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), n;
}
function oi(e) {
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
  this._pairs = [], e && gn(e, this, n);
}
const No = vr.prototype;
No.append = function(n, t) {
  this._pairs.push([n, t]);
};
No.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, oi);
  } : oi;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function os(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Mo(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || os, i = t && t.serialize;
  let o;
  if (i ? o = i(n, t) : o = A.isURLSearchParams(n) ? n.toString() : new vr(n, t).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ls {
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
    A.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const li = ls, $o = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, as = typeof URLSearchParams < "u" ? URLSearchParams : vr, ss = typeof FormData < "u" ? FormData : null, us = typeof Blob < "u" ? Blob : null, cs = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), fs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ve = {
  isBrowser: !0,
  classes: {
    URLSearchParams: as,
    FormData: ss,
    Blob: us
  },
  isStandardBrowserEnv: cs,
  isStandardBrowserWebWorkerEnv: fs,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function ps(e, n) {
  return gn(e, new Ve.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, i, o) {
      return Ve.isNode && A.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function hs(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function ds(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const i = t.length;
  let o;
  for (r = 0; r < i; r++)
    o = t[r], n[o] = e[o];
  return n;
}
function Bo(e) {
  function n(t, r, i, o) {
    let l = t[o++];
    const a = Number.isFinite(+l), s = o >= t.length;
    return l = !l && A.isArray(i) ? i.length : l, s ? (A.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !a) : ((!i[l] || !A.isObject(i[l])) && (i[l] = []), n(t, r, i[l], o) && A.isArray(i[l]) && (i[l] = ds(i[l])), !a);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const t = {};
    return A.forEachEntry(e, (r, i) => {
      n(hs(r), i, t, 0);
    }), t;
  }
  return null;
}
function ms(e, n, t) {
  if (A.isString(e))
    try {
      return (n || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Er = {
  transitional: $o,
  adapter: Ve.isNode ? "http" : "xhr",
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", i = r.indexOf("application/json") > -1, o = A.isObject(n);
    if (o && A.isHTMLForm(n) && (n = new FormData(n)), A.isFormData(n))
      return i && i ? JSON.stringify(Bo(n)) : n;
    if (A.isArrayBuffer(n) || A.isBuffer(n) || A.isStream(n) || A.isFile(n) || A.isBlob(n))
      return n;
    if (A.isArrayBufferView(n))
      return n.buffer;
    if (A.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ps(n, this.formSerializer).toString();
      if ((a = A.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return gn(
          a ? { "files[]": n } : n,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return o || i ? (t.setContentType("application/json", !1), ms(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Er.transitional, r = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (n && A.isString(n) && (r && !this.responseType || i)) {
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
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Er.headers[e] = {};
});
const Sr = Er, gs = A.toObjectSet([
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
]), ys = (e) => {
  const n = {};
  let t, r, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), t = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!t || n[t] && gs[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, ai = Symbol("internals");
function Ft(e) {
  return e && String(e).trim().toLowerCase();
}
function rn(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(rn) : String(e);
}
function bs(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const ks = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Rn(e, n, t, r, i) {
  if (A.isFunction(r))
    return r.call(this, n, t);
  if (i && (n = t), !!A.isString(n)) {
    if (A.isString(r))
      return n.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(n);
  }
}
function ws(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function xs(e, n) {
  const t = A.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(i, o, l) {
        return this[r].call(this, n, i, o, l);
      },
      configurable: !0
    });
  });
}
class yn {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const i = this;
    function o(a, s, u) {
      const c = Ft(s);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = A.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || s] = rn(a));
    }
    const l = (a, s) => A.forEach(a, (u, c) => o(u, c, s));
    return A.isPlainObject(n) || n instanceof this.constructor ? l(n, t) : A.isString(n) && (n = n.trim()) && !ks(n) ? l(ys(n), t) : n != null && o(t, n, r), this;
  }
  get(n, t) {
    if (n = Ft(n), n) {
      const r = A.findKey(this, n);
      if (r) {
        const i = this[r];
        if (!t)
          return i;
        if (t === !0)
          return bs(i);
        if (A.isFunction(t))
          return t.call(this, i, r);
        if (A.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Ft(n), n) {
      const r = A.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Rn(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let i = !1;
    function o(l) {
      if (l = Ft(l), l) {
        const a = A.findKey(r, l);
        a && (!t || Rn(r, r[a], a, t)) && (delete r[a], i = !0);
      }
    }
    return A.isArray(n) ? n.forEach(o) : o(n), i;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, i = !1;
    for (; r--; ) {
      const o = t[r];
      (!n || Rn(this, this[o], o, n, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(n) {
    const t = this, r = {};
    return A.forEach(this, (i, o) => {
      const l = A.findKey(r, o);
      if (l) {
        t[l] = rn(i), delete t[o];
        return;
      }
      const a = n ? ws(o) : String(o).trim();
      a !== o && delete t[o], t[a] = rn(i), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, i) => {
      r != null && r !== !1 && (t[i] = n && A.isArray(r) ? r.join(", ") : r);
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
    const r = (this[ai] = this[ai] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(l) {
      const a = Ft(l);
      r[a] || (xs(i, l), r[a] = !0);
    }
    return A.isArray(n) ? n.forEach(o) : o(n), this;
  }
}
yn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(yn.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
A.freezeMethods(yn);
const Ze = yn;
function Fn(e, n) {
  const t = this || Sr, r = n || t, i = Ze.from(r.headers);
  let o = r.data;
  return A.forEach(e, function(a) {
    o = a.call(t, o, i.normalize(), n ? n.status : void 0);
  }), i.normalize(), o;
}
function Uo(e) {
  return !!(e && e.__CANCEL__);
}
function Ut(e, n, t) {
  se.call(this, e ?? "canceled", se.ERR_CANCELED, n, t), this.name = "CanceledError";
}
A.inherits(Ut, se, {
  __CANCEL__: !0
});
function vs(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new se(
    "Request failed with status code " + t.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const Es = Ve.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, r, i, o, l, a) {
        const s = [];
        s.push(t + "=" + encodeURIComponent(r)), A.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), A.isString(o) && s.push("path=" + o), A.isString(l) && s.push("domain=" + l), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Ss(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Cs(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function qo(e, n) {
  return e && !Ss(n) ? Cs(e, n) : n;
}
const Ts = Ve.isStandardBrowserEnv ? (
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
      const a = A.isString(l) ? i(l) : l;
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
function As(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Ps(e, n) {
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
function si(e, n) {
  let t = 0;
  const r = Ps(50, 250);
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
const Os = typeof XMLHttpRequest < "u", Rs = Os && function(e) {
  return new Promise(function(t, r) {
    let i = e.data;
    const o = Ze.from(e.headers).normalize(), l = e.responseType;
    let a;
    function s() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    A.isFormData(i) && (Ve.isStandardBrowserEnv || Ve.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + d));
    }
    const c = qo(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Mo(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const p = Ze.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), g = {
        data: !l || l === "text" || l === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: p,
        config: e,
        request: u
      };
      vs(function(w) {
        t(w), s();
      }, function(w) {
        r(w), s();
      }, g), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new se("Request aborted", se.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new se("Network Error", se.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || $o;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new se(
        d,
        g.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Ve.isStandardBrowserEnv) {
      const p = (e.withCredentials || Ts(c)) && e.xsrfCookieName && Es.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in u && A.forEach(o.toJSON(), function(d, g) {
      u.setRequestHeader(g, d);
    }), A.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), l && l !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", si(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", si(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (p) => {
      u && (r(!p || p.type ? new Ut(null, e, u) : p), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const m = As(c);
    if (m && Ve.protocols.indexOf(m) === -1) {
      r(new se("Unsupported protocol " + m + ":", se.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
}, on = {
  http: ns,
  xhr: Rs
};
A.forEach(on, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const Ho = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let i = 0; i < n && (t = e[i], !(r = A.isString(t) ? on[t.toLowerCase()] : t)); i++)
      ;
    if (!r)
      throw r === !1 ? new se(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        A.hasOwnProp(on, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!A.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: on
};
function In(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ut(null, e);
}
function ui(e) {
  return In(e), e.headers = Ze.from(e.headers), e.data = Fn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ho.getAdapter(e.adapter || Sr.adapter)(e).then(function(r) {
    return In(e), r.data = Fn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return Uo(r) || (In(e), r && r.response && (r.response.data = Fn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const ci = (e) => e instanceof Ze ? e.toJSON() : e;
function xt(e, n) {
  n = n || {};
  const t = {};
  function r(u, c, f) {
    return A.isPlainObject(u) && A.isPlainObject(c) ? A.merge.call({ caseless: f }, u, c) : A.isPlainObject(c) ? A.merge({}, c) : A.isArray(c) ? c.slice() : c;
  }
  function i(u, c, f) {
    if (A.isUndefined(c)) {
      if (!A.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, c, f);
  }
  function o(u, c) {
    if (!A.isUndefined(c))
      return r(void 0, c);
  }
  function l(u, c) {
    if (A.isUndefined(c)) {
      if (!A.isUndefined(u))
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
    headers: (u, c) => i(ci(u), ci(c), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const f = s[c] || i, m = f(e[c], n[c], c);
    A.isUndefined(m) && f !== a || (t[c] = m);
  }), t;
}
const Vo = "1.5.0", Cr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Cr[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const fi = {};
Cr.transitional = function(n, t, r) {
  function i(o, l) {
    return "[Axios v" + Vo + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, a) => {
    if (n === !1)
      throw new se(
        i(l, " has been removed" + (t ? " in " + t : "")),
        se.ERR_DEPRECATED
      );
    return t && !fi[l] && (fi[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(o, l, a) : !0;
  };
};
function Fs(e, n, t) {
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
const ir = {
  assertOptions: Fs,
  validators: Cr
}, nt = ir.validators;
class un {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new li(),
      response: new li()
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
    r !== void 0 && ir.assertOptions(r, {
      silentJSONParsing: nt.transitional(nt.boolean),
      forcedJSONParsing: nt.transitional(nt.boolean),
      clarifyTimeoutError: nt.transitional(nt.boolean)
    }, !1), i != null && (A.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : ir.assertOptions(i, {
      encode: nt.function,
      serialize: nt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let l = o && A.merge(
      o.common,
      o[t.method]
    );
    o && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), t.headers = Ze.concat(l, o);
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (s = s && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, f = 0, m;
    if (!s) {
      const d = [ui.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, u), m = d.length, c = Promise.resolve(t); f < m; )
        c = c.then(d[f++], d[f++]);
      return c;
    }
    m = a.length;
    let p = t;
    for (f = 0; f < m; ) {
      const d = a[f++], g = a[f++];
      try {
        p = d(p);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      c = ui.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(n) {
    n = xt(this.defaults, n);
    const t = qo(n.baseURL, n.url);
    return Mo(t, n.params, n.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(n) {
  un.prototype[n] = function(t, r) {
    return this.request(xt(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(n) {
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
  un.prototype[n] = t(), un.prototype[n + "Form"] = t(!0);
});
const ln = un;
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
      r.reason || (r.reason = new Ut(o, l, a), t(r.reason));
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
const Is = Tr;
function _s(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function js(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const or = {
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
Object.entries(or).forEach(([e, n]) => {
  or[n] = e;
});
const Ds = or;
function Wo(e) {
  const n = new ln(e), t = Ao(ln.prototype.request, n);
  return A.extend(t, ln.prototype, n, { allOwnKeys: !0 }), A.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(i) {
    return Wo(xt(e, i));
  }, t;
}
const Ae = Wo(Sr);
Ae.Axios = ln;
Ae.CanceledError = Ut;
Ae.CancelToken = Is;
Ae.isCancel = Uo;
Ae.VERSION = Vo;
Ae.toFormData = gn;
Ae.AxiosError = se;
Ae.Cancel = Ae.CanceledError;
Ae.all = function(n) {
  return Promise.all(n);
};
Ae.spread = _s;
Ae.isAxiosError = js;
Ae.mergeConfig = xt;
Ae.AxiosHeaders = Ze;
Ae.formToJSON = (e) => Bo(A.isHTMLForm(e) ? new FormData(e) : e);
Ae.getAdapter = Ho.getAdapter;
Ae.HttpStatusCode = Ds;
Ae.default = Ae;
const bn = Ae;
bn.defaults.withCredentials = !0;
const zs = async (e, n, t, r, i) => {
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
  return bn(o).catch((l) => l.response).then((l) => l.status);
}, Ls = async (e, n, t) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${n}&GameID=${t.toLowerCase()}`
  };
  return bn(r).catch((i) => i.response);
}, Yo = async (e) => {
  let n = {
    method: "GET",
    url: `${e}/health`
  };
  return bn(n).catch((t) => t.response);
};
function hg({ config: e }) {
  const n = Mt();
  return bt(() => {
    const t = async () => {
      let i = await Yo(e.host);
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
  }, [n]), /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center my-8 md:my-12", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "w-full flex flex-col items-center mt-48", children: [
      /* @__PURE__ */ T.jsx("p", { className: "font-black text-4xl italic", children: "We'll be right back!" }),
      /* @__PURE__ */ T.jsxs("p", { className: "mb-1 font-thin", children: [
        /* @__PURE__ */ T.jsx("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
        " is down for maintenance"
      ] })
    ] }),
    /* @__PURE__ */ T.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] });
}
const pi = [
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
], hi = [
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
], _n = {
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
  const n = Mt(), [t, r] = it(`${pi[Math.floor(Math.random() * pi.length)]}-${hi[Math.floor(Math.random() * hi.length)]}-${Math.floor(Math.random() * (99 - 0 + 1) + 0)}`), [i, o] = it(e.minTeams), [l, a] = it(e.variants.length > 0 ? e.variants[0] : null);
  bt(() => {
    const u = async () => {
      let f = await Yo(e.host);
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
    let c = await zs(e.host, e.key, t, i, l);
    (c === 201 || c === 400) && n(`/${t}`);
  }
  return /* @__PURE__ */ T.jsx("div", { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center m-8 md:m-12", children: [
    /* @__PURE__ */ T.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center fade-in", children: [
      /* @__PURE__ */ T.jsx("div", { className: ` text-5xl font-black font-['${e.font}'] text-${e.color} mb-1 cursor-pointer`, children: /* @__PURE__ */ T.jsx("a", { href: `${window.location.protocol}//${window.location.host}`, children: e.key }) }),
      /* @__PURE__ */ T.jsxs("div", { className: "font-thin mb-3", children: [
        "Play ",
        e.minTeams === e.maxTeams ? `${_n[e.minTeams]}` : `${_n[e.minTeams]} to ${_n[e.maxTeams]}`,
        " player ",
        e.key,
        " online against friends. To create a game or join an existing one, enter a game ID and click 'Go'."
      ] }),
      /* @__PURE__ */ T.jsxs("form", { className: "w-full flex mb-3", onSubmit: s, children: [
        /* @__PURE__ */ T.jsx("input", { className: "w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2", autoFocus: !0, type: "text", value: t, onChange: (u) => r(u.target.value) }),
        /* @__PURE__ */ T.jsx("button", { className: "w-2/12 font-bold grow-0 bg-blue-500", children: "Go" })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex w-full justify-between flex-wrap", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "flex order-2 md:order-1", children: [
          /* @__PURE__ */ T.jsx("button", { onClick: () => n("/rules"), title: "how to play", className: "mr-3 md:mr-2 p-2 first-line:p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
          /* @__PURE__ */ T.jsxs("a", { className: "italic text-xs py-1 px-2 border-blue-500 border border-dashed text-blue-500", href: "https://quibbble.com", target: "_blank", children: [
            "more ",
            /* @__PURE__ */ T.jsx("span", { className: "text-zinc-100 font-['lobster'] text-sm not-italic", children: "quibbble" }),
            " games"
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "flex items-center order-1 md:order-2 mb-3 md:mb-0", children: [
          l ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsx("div", { className: "mr-1 font-black text-blue-500", children: "VARIANT" }),
            /* @__PURE__ */ T.jsx("select", { className: "mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (u) => a(u.target.value.replace(/\s/g, "")), children: e.variants.map((u) => /* @__PURE__ */ T.jsx("option", { value: u, children: u }, u)) })
          ] }) : null,
          e.minTeams !== e.maxTeams ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsx("div", { className: "mx-1 font-black text-blue-500", children: "PLAYERS" }),
            /* @__PURE__ */ T.jsx("select", { className: "bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (u) => o(parseInt(u.target.value)), children: Array(e.maxTeams - e.minTeams + 1).fill().map((u, c) => e.minTeams + c).map((u) => /* @__PURE__ */ T.jsx("option", { value: u, children: u }, u)) })
          ] }) : null
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] }) });
}
var Go = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, di = Re.createContext && Re.createContext(Go), ot = globalThis && globalThis.__assign || function() {
  return ot = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ot.apply(this, arguments);
}, Ns = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
function Jo(e) {
  return e && e.map(function(n, t) {
    return Re.createElement(n.tag, ot({
      key: t
    }, n.attr), Jo(n.child));
  });
}
function kn(e) {
  return function(n) {
    return Re.createElement(Ms, ot({
      attr: ot({}, e.attr)
    }, n), Jo(e.child));
  };
}
function Ms(e) {
  var n = function(t) {
    var r = e.attr, i = e.size, o = e.title, l = Ns(e, ["attr", "size", "title"]), a = i || t.size || "1em", s;
    return t.className && (s = t.className), e.className && (s = (s ? s + " " : "") + e.className), Re.createElement("svg", ot({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, l, {
      className: s,
      style: ot(ot({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Re.createElement("title", null, o), e.children);
  };
  return di !== void 0 ? Re.createElement(di.Consumer, null, function(t) {
    return n(t);
  }) : n(Go);
}
function $s(e) {
  return kn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function Bs(e) {
  return kn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" } }] })(e);
}
function Us(e) {
  return kn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48 252 259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z" } }] })(e);
}
function qs(e) {
  return kn({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z" } }, { tag: "path", attr: { d: "M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z" } }] })(e);
}
function Hs({ isConn: e }) {
  const [n, t] = it(0);
  return bt(() => {
    e ? setTimeout(() => t((r) => r - 1), 1500) : t(0);
  }, [e, t]), /* @__PURE__ */ T.jsxs("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}`, children: [
    n ? null : /* @__PURE__ */ T.jsx("div", { className: "px-1", children: e ? "connected" : "connecting" }),
    /* @__PURE__ */ T.jsx("div", { onClick: () => {
      e && (t(0), setTimeout(() => t(n - 1), 1500));
    }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}`, children: e ? null : /* @__PURE__ */ T.jsx("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" }) })
  ] });
}
const mg = ba((e, n) => {
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
    children: g
  } = e;
  d && (i && console.log("game: ", i), l && console.log("network: ", l), s && console.log("chat: ", s), c && console.log("connected: ", c), m && console.log("error: ", m));
  const { gameID: b } = ka(), w = Mt(), P = c && l && c[l.Name] ? c[l.Name] : null;
  P && localStorage.setItem(b, P);
  const C = Kt((q) => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: q } }));
  }, [r]);
  Kt(() => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetOpenTeam" }));
  }, [r]);
  const j = Kt(() => {
    if (!r.current)
      return;
    const q = i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "";
    r.current.send(JSON.stringify({ ActionType: "Reset", MoreDetails: { MoreOptions: { Seed: Date.now(), Variant: q } } }));
  }, [r]), E = Kt(() => {
    r.current && (i && c && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team !== c[l.Name] || r.current.send(JSON.stringify({ ActionType: "Undo" })));
  }, [r]), [x, N] = it(!1), U = async (q, oe) => {
    if (q <= 0) {
      w("/");
      return;
    }
    let xe = await Ls(t.host, t.key, b);
    if (!xe) {
      oe && sessionStorage.setItem("gameID", b), w("/status/down");
      return;
    }
    if (xe.status !== 200) {
      w("/");
      return;
    }
    r.current = new WebSocket(`${t.websocket}/game/join?GameKey=${t.key}&GameID=${b.toLowerCase()}`), r.current.onopen = () => {
      N(!0);
      let ye = localStorage.getItem(b);
      ye && C(ye);
    }, r.current.onclose = (ye) => {
      N(!1), ye.code != 1e3 && setTimeout(function() {
        U(q - 1, !0);
      }, 1e3 + (3 - q) * 500);
    }, r.current.onmessage = async (ye) => {
      let h = JSON.parse(ye.data);
      h.Type === "Game" ? o(h.Payload) : h.Type === "Network" ? a(h.Payload) : h.Type === "Chat" ? u((I) => I.concat([h.Payload])) : h.Type === "Connected" ? f(h.Payload) : h.Type === "Error" && p(h.Payload);
    }, r.current.onerror = (ye) => {
      console.error("Socket encountered error: ", ye.message);
    };
  };
  bt(() => (U(3, !1), (q) => {
    var oe;
    return (oe = r.current) == null ? void 0 : oe.close(1e3);
  }), []);
  const [te, v] = it(!0);
  bt(() => {
    const q = () => v(!te);
    return window.addEventListener("resize", q), (oe) => window.removeEventListener("resize", q);
  });
  const [_, z] = it(0);
  bt(() => {
    _ > 0 && setTimeout(() => z(_ - 1), 1e3);
  }, [_]);
  const [Q, Z] = it(!1), G = () => /* @__PURE__ */ T.jsx("div", { className: "z-50 absolute h-[95%] w-full flex items-center justify-center fade-in", children: /* @__PURE__ */ T.jsxs("div", { className: "bg-zinc-900 p-8 rounded-md", children: [
    /* @__PURE__ */ T.jsx("p", { className: "mb-4", children: "Are you sure you want to reset the game?" }),
    /* @__PURE__ */ T.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ T.jsx(
        "button",
        {
          className: "px-2 py-1 bg-blue-500 text-sm font-bold",
          onClick: () => Z(!1),
          children: "cancel"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          className: "px-2 py-1 bg-red-500 text-sm font-bold",
          onClick: () => {
            j(), Z(!1);
          },
          children: "reset game"
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ T.jsxs("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4 fade-in", children: [
    Q ? /* @__PURE__ */ T.jsx(G, {}) : null,
    /* @__PURE__ */ T.jsxs("div", { ref: n, className: `h-full w-full ${t.gamePageMaxWidth ? t.gamePageMaxWidth : "max-w-xl"} flex flex-col items-center grow`, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm", children: [
        /* @__PURE__ */ T.jsxs("div", { children: [
          /* @__PURE__ */ T.jsxs("div", { className: "flex items-center cursor-pointer", onClick: () => {
            z(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${b}`);
          }, children: [
            /* @__PURE__ */ T.jsx(qs, { className: "mr-1" }),
            /* @__PURE__ */ T.jsx("span", { className: "underline", children: `${window.location.protocol}//${window.location.host}/${b}` })
          ] }),
          _ > 0 ? /* @__PURE__ */ T.jsxs("div", { className: "absolute mt-2 w-6/12 flex justify-center", children: [
            /* @__PURE__ */ T.jsx("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block", children: /* @__PURE__ */ T.jsx("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" }) }),
            /* @__PURE__ */ T.jsx("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1", children: "copied!" })
          ] }) : null
        ] }),
        /* @__PURE__ */ T.jsx("div", { className: "px-1", children: /* @__PURE__ */ T.jsx(Hs, { isConn: x }) })
      ] }),
      /* @__PURE__ */ T.jsx("hr", { className: "w-full mb-2" }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex w-full justify-between items-center mb-4", children: [
        /* @__PURE__ */ T.jsx("div", { className: "flex", children: i && i.Teams ? i.Teams.map((q) => /* @__PURE__ */ T.jsx(
          "div",
          {
            className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${q}-500 ${P === q ? `bg-${P}-500 pointer-events-none` : ""}`,
            onClick: () => C(q),
            children: i && i.MoreData && i.MoreData.Points ? i.MoreData.Points[q] : ""
          },
          q
        )) : null }),
        /* @__PURE__ */ T.jsx("div", { className: `font-extrabold ${i && c && l && c[l.Name] && i.Winners.length === 0 ? `text-${i.Turn}-500` : "text-zinc-100"} ${i && l && c && c[l.Name] === i.Turn && i.Winners.length === 0 ? "animate-pulse" : ""}`, children: i && c && l && c[l.Name] ? i.Message : /* @__PURE__ */ T.jsxs("div", { className: "flex items-center animate-pulse", children: [
          /* @__PURE__ */ T.jsx($s, { className: "mr-1" }),
          /* @__PURE__ */ T.jsx("div", { children: "select a team" })
        ] }) })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "p-4 h-full w-full flex flex-col justify-center items-center grow", children: g }),
      /* @__PURE__ */ T.jsx("hr", { className: "w-full mt-4 mb-2" }),
      /* @__PURE__ */ T.jsxs("div", { className: "w-full flex justify-between items-center", children: [
        /* @__PURE__ */ T.jsx("div", { className: `leading-4 text-2xl font-black text-${t.color} cursor-pointer`, children: /* @__PURE__ */ T.jsxs("button", { onClick: () => {
          sessionStorage.setItem("gameID", ""), w("/");
        }, children: [
          /* @__PURE__ */ T.jsx("span", { className: `font-['${t.font}']`, children: t.key }),
          /* @__PURE__ */ T.jsx("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100", children: i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "" })
        ] }) }),
        /* @__PURE__ */ T.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ T.jsx("button", { onClick: () => Z(!0), title: "reset game", className: `p-2 ${i && i.Winners.length > 0 ? "bg-blue-500" : "bg-zinc-500"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ T.jsx(Bs, {}) }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => E(), title: "undo move", className: `p-2 ${i && c && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team === c[l.Name] ? "bg-amber-500" : "bg-zinc-700 text-zinc-500 cursor-default"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ T.jsx(Us, {}) }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), w("/rules");
          }, title: "how to play", className: "p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), w("/bugs");
          }, title: "find a bug?", className: "ml-3 md:ml-2 p-2 bg-zinc-500 italic text-xs font-bold", children: "find a bug?" })
        ] })
      ] })
    ] })
  ] });
}), mi = ["http", "https", "mailto", "tel"];
function Vs(e) {
  const n = (e || "").trim(), t = n.charAt(0);
  if (t === "#" || t === "/")
    return n;
  const r = n.indexOf(":");
  if (r === -1)
    return n;
  let i = -1;
  for (; ++i < mi.length; ) {
    const o = mi[i];
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
var Ws = function(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
};
const Ko = /* @__PURE__ */ $t(Ws);
function jt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? gi(e.position) : "start" in e || "end" in e ? gi(e) : "line" in e || "column" in e ? lr(e) : "";
}
function lr(e) {
  return yi(e && e.line) + ":" + yi(e && e.column);
}
function gi(e) {
  return lr(e && e.start) + "-" + lr(e && e.end);
}
function yi(e) {
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
const Ye = { basename: Ys, dirname: Gs, extname: Js, join: Ks, sep: "/" };
function Ys(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  qt(e);
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
function Gs(e) {
  if (qt(e), e.length === 0)
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
function Js(e) {
  qt(e);
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
function Ks(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    qt(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Xs(t);
}
function Xs(e) {
  qt(e);
  const n = e.charCodeAt(0) === 47;
  let t = Qs(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.charCodeAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Qs(e, n) {
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
function qt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Zs = { cwd: eu };
function eu() {
  return "/";
}
function ar(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function tu(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ar(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return nu(e);
}
function nu(e) {
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
const jn = ["history", "path", "basename", "stem", "extname", "dirname"];
class Xo {
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
    n ? typeof n == "string" || ru(n) ? t = { value: n } : ar(n) ? t = { path: n } : t = n : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Zs.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < jn.length; ) {
      const o = jn[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      jn.includes(i) || (this[i] = t[i]);
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
    ar(n) && (n = tu(n)), zn(n, "path"), this.path !== n && this.history.push(n);
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
    bi(this.basename, "dirname"), this.path = Ye.join(n || "", this.basename);
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
    zn(n, "basename"), Dn(n, "basename"), this.path = Ye.join(this.dirname || "", n);
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
    if (Dn(n, "extname"), bi(this.dirname, "extname"), n) {
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
    zn(n, "stem"), Dn(n, "stem"), this.path = Ye.join(this.dirname || "", n + (this.extname || ""));
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
function Dn(e, n) {
  if (e && e.includes(Ye.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + Ye.sep + "`"
    );
}
function zn(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function bi(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function ru(e) {
  return Ko(e);
}
function ki(e) {
  if (e)
    throw e;
}
var an = Object.prototype.hasOwnProperty, Qo = Object.prototype.toString, wi = Object.defineProperty, xi = Object.getOwnPropertyDescriptor, vi = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : Qo.call(n) === "[object Array]";
}, Ei = function(n) {
  if (!n || Qo.call(n) !== "[object Object]")
    return !1;
  var t = an.call(n, "constructor"), r = n.constructor && n.constructor.prototype && an.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r)
    return !1;
  var i;
  for (i in n)
    ;
  return typeof i > "u" || an.call(n, i);
}, Si = function(n, t) {
  wi && t.name === "__proto__" ? wi(n, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : n[t.name] = t.newValue;
}, Ci = function(n, t) {
  if (t === "__proto__")
    if (an.call(n, t)) {
      if (xi)
        return xi(n, t).value;
    } else
      return;
  return n[t];
}, iu = function e() {
  var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (n = arguments[s], n != null)
      for (t in n)
        r = Ci(a, t), i = Ci(n, t), a !== i && (c && i && (Ei(i) || (o = vi(i))) ? (o ? (o = !1, l = r && vi(r) ? r : []) : l = r && Ei(r) ? r : {}, Si(a, { name: t, newValue: e(c, l, i) })) : typeof i < "u" && Si(a, { name: t, newValue: i }));
  return a;
};
const Ti = /* @__PURE__ */ $t(iu);
function sr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ou() {
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
      i = u, c ? lu(c, a)(...u) : l(null, ...u);
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
function lu(e, n) {
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
const au = el().freeze(), Zo = {}.hasOwnProperty;
function el() {
  const e = ou(), n = [];
  let t = {}, r, i = -1;
  return o.data = l, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = n, o.use = s, o.parse = u, o.stringify = c, o.run = f, o.runSync = m, o.process = p, o.processSync = d, o;
  function o() {
    const g = el();
    let b = -1;
    for (; ++b < n.length; )
      g.use(...n[b]);
    return g.data(Ti(!0, {}, t)), g;
  }
  function l(g, b) {
    return typeof g == "string" ? arguments.length === 2 ? (Mn("data", r), t[g] = b, o) : Zo.call(t, g) && t[g] || null : g ? (Mn("data", r), t = g, o) : t;
  }
  function a() {
    if (r)
      return o;
    for (; ++i < n.length; ) {
      const [g, ...b] = n[i];
      if (b[0] === !1)
        continue;
      b[0] === !0 && (b[0] = void 0);
      const w = g.call(o, ...b);
      typeof w == "function" && e.use(w);
    }
    return r = !0, i = Number.POSITIVE_INFINITY, o;
  }
  function s(g, ...b) {
    let w;
    if (Mn("use", r), g != null)
      if (typeof g == "function")
        E(g, ...b);
      else if (typeof g == "object")
        Array.isArray(g) ? j(g) : C(g);
      else
        throw new TypeError("Expected usable value, not `" + g + "`");
    return w && (t.settings = Object.assign(t.settings || {}, w)), o;
    function P(x) {
      if (typeof x == "function")
        E(x);
      else if (typeof x == "object")
        if (Array.isArray(x)) {
          const [N, ...U] = x;
          E(N, ...U);
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
            const U = x[N];
            P(U);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + x + "`");
    }
    function E(x, N) {
      let U = -1, te;
      for (; ++U < n.length; )
        if (n[U][0] === x) {
          te = n[U];
          break;
        }
      te ? (sr(te[1]) && sr(N) && (N = Ti(!0, te[1], N)), te[1] = N) : n.push([...arguments]);
    }
  }
  function u(g) {
    o.freeze();
    const b = It(g), w = o.Parser;
    return Ln("parse", w), Ai(w, "parse") ? new w(String(b), b).parse() : w(String(b), b);
  }
  function c(g, b) {
    o.freeze();
    const w = It(b), P = o.Compiler;
    return Nn("stringify", P), Pi(g), Ai(P, "compile") ? new P(g, w).compile() : P(g, w);
  }
  function f(g, b, w) {
    if (Pi(g), o.freeze(), !w && typeof b == "function" && (w = b, b = void 0), !w)
      return new Promise(P);
    P(null, w);
    function P(C, j) {
      e.run(g, It(b), E);
      function E(x, N, U) {
        N = N || g, x ? j(x) : C ? C(N) : w(null, N, U);
      }
    }
  }
  function m(g, b) {
    let w, P;
    return o.run(g, b, C), Oi("runSync", "run", P), w;
    function C(j, E) {
      ki(j), w = E, P = !0;
    }
  }
  function p(g, b) {
    if (o.freeze(), Ln("process", o.Parser), Nn("process", o.Compiler), !b)
      return new Promise(w);
    w(null, b);
    function w(P, C) {
      const j = It(g);
      o.run(o.parse(j), j, (x, N, U) => {
        if (x || !N || !U)
          E(x);
        else {
          const te = o.stringify(N, U);
          te == null || (cu(te) ? U.value = te : U.result = te), E(x, U);
        }
      });
      function E(x, N) {
        x || !N ? C(x) : P ? P(N) : b(null, N);
      }
    }
  }
  function d(g) {
    let b;
    o.freeze(), Ln("processSync", o.Parser), Nn("processSync", o.Compiler);
    const w = It(g);
    return o.process(w, P), Oi("processSync", "process", b), w;
    function P(C) {
      b = !0, ki(C);
    }
  }
}
function Ai(e, n) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (su(e.prototype) || n in e.prototype);
}
function su(e) {
  let n;
  for (n in e)
    if (Zo.call(e, n))
      return !0;
  return !1;
}
function Ln(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function Nn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Mn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Pi(e) {
  if (!sr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Oi(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function It(e) {
  return uu(e) ? e : new Xo(e);
}
function uu(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function cu(e) {
  return typeof e == "string" || Ko(e);
}
const fu = {};
function pu(e, n) {
  const t = n || fu, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return tl(e, r, i);
}
function tl(e, n, t) {
  if (hu(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ri(e.children, n, t);
  }
  return Array.isArray(e) ? Ri(e, n, t) : "";
}
function Ri(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = tl(e[i], n, t);
  return r.join("");
}
function hu(e) {
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
const Fi = {}.hasOwnProperty;
function du(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    mu(n, e[t]);
  return n;
}
function mu(e, n) {
  let t;
  for (t in n) {
    const i = (Fi.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        Fi.call(i, l) || (i[l] = []);
        const a = o[l];
        gu(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function gu(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  Je(e, 0, 0, r);
}
const yu = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ge = lt(/[A-Za-z]/), Le = lt(/[\dA-Za-z]/), bu = lt(/[#-'*+\--9=?A-Z^-~]/);
function ur(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const cr = lt(/\d/), ku = lt(/[\dA-Fa-f]/), wu = lt(/[!-/:-@[-`{-~]/);
function J(e) {
  return e !== null && e < -2;
}
function Ie(e) {
  return e !== null && (e < 0 || e === 32);
}
function pe(e) {
  return e === -2 || e === -1 || e === 32;
}
const xu = lt(yu), vu = lt(/\s/);
function lt(e) {
  return n;
  function n(t) {
    return t !== null && e.test(String.fromCharCode(t));
  }
}
function we(e, n, t, r) {
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
const Eu = {
  tokenize: Su
};
function Su(e) {
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
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), we(e, n, "linePrefix");
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
const Cu = {
  tokenize: Tu
}, Ii = {
  tokenize: Au
};
function Tu(e) {
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
      n.containerState._closeFlow = void 0, i && P();
      const j = n.events.length;
      let E = j, x;
      for (; E--; )
        if (n.events[E][0] === "exit" && n.events[E][1].type === "chunkFlow") {
          x = n.events[E][1].end;
          break;
        }
      w(r);
      let N = j;
      for (; N < n.events.length; )
        n.events[N][1].end = Object.assign({}, x), N++;
      return Je(
        n.events,
        E + 1,
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
      Ii,
      c,
      f
    )(C);
  }
  function c(C) {
    return i && P(), w(r), m(C);
  }
  function f(C) {
    return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, d(C);
  }
  function m(C) {
    return n.containerState = {}, e.attempt(
      Ii,
      p,
      d
    )(C);
  }
  function p(C) {
    return r++, t.push([n.currentConstruct, n.containerState]), m(C);
  }
  function d(C) {
    if (C === null) {
      i && P(), w(0), e.consume(C);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: o,
      _tokenizer: i
    }), g(C);
  }
  function g(C) {
    if (C === null) {
      b(e.exit("chunkFlow"), !0), w(0), e.consume(C);
      return;
    }
    return J(C) ? (e.consume(C), b(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(C), g);
  }
  function b(C, j) {
    const E = n.sliceStream(C);
    if (j && E.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(E), n.parser.lazy[C.start.line]) {
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
      let U = N, te, v;
      for (; U--; )
        if (n.events[U][0] === "exit" && n.events[U][1].type === "chunkFlow") {
          if (te) {
            v = n.events[U][1].end;
            break;
          }
          te = !0;
        }
      for (w(r), x = N; x < n.events.length; )
        n.events[x][1].end = Object.assign({}, v), x++;
      Je(
        n.events,
        U + 1,
        0,
        n.events.slice(N)
      ), n.events.length = x;
    }
  }
  function w(C) {
    let j = t.length;
    for (; j-- > C; ) {
      const E = t[j];
      n.containerState = E[1], E[0].exit.call(n, e);
    }
    t.length = C;
  }
  function P() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function Au(e, n, t) {
  return we(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function _i(e) {
  if (e === null || Ie(e) || vu(e))
    return 1;
  if (xu(e))
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
const fr = {
  name: "attention",
  tokenize: Ou,
  resolveAll: Pu
};
function Pu(e, n) {
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
          ji(f, -s), ji(m, s), l = {
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
function Ou(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = _i(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = _i(s), f = !c || c === 2 && i || t.includes(s), m = !i || i === 2 && c || t.includes(r);
    return u._open = !!(o === 42 ? f : f && (i || !m)), u._close = !!(o === 42 ? m : m && (c || !f)), n(s);
  }
}
function ji(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Ru = {
  name: "autolink",
  tokenize: Fu
};
function Fu(e, n, t) {
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
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || ur(p) ? t(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), c) : bu(p) ? (e.consume(p), u) : t(p);
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
const wn = {
  tokenize: Iu,
  partial: !0
};
function Iu(e, n, t) {
  return r;
  function r(o) {
    return pe(o) ? we(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || J(o) ? n(o) : t(o);
  }
}
const nl = {
  name: "blockQuote",
  tokenize: _u,
  continuation: {
    tokenize: ju
  },
  exit: Du
};
function _u(e, n, t) {
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
function ju(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return pe(l) ? we(
      e,
      o,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(l) : o(l);
  }
  function o(l) {
    return e.attempt(nl, n, t)(l);
  }
}
function Du(e) {
  e.exit("blockQuote");
}
const rl = {
  name: "characterEscape",
  tokenize: zu
};
function zu(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return wu(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const Di = document.createElement("i");
function Pr(e) {
  const n = "&" + e + ";";
  Di.innerHTML = n;
  const t = Di.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
const il = {
  name: "characterReference",
  tokenize: Lu
};
function Lu(e, n, t) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = ku, c) : (e.enter("characterReferenceValue"), o = 7, l = cr, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const m = e.exit("characterReferenceValue");
      return l === Le && !Pr(r.sliceSerialize(m)) ? t(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return l(f) && i++ < o ? (e.consume(f), c) : t(f);
  }
}
const zi = {
  tokenize: Mu,
  partial: !0
}, Li = {
  name: "codeFenced",
  tokenize: Nu,
  concrete: !0
};
function Nu(e, n, t) {
  const r = this, i = {
    tokenize: E,
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
    return x === a ? (l++, e.consume(x), c) : l < 3 ? t(x) : (e.exit("codeFencedFenceSequence"), pe(x) ? we(e, f, "whitespace")(x) : f(x));
  }
  function f(x) {
    return x === null || J(x) ? (e.exit("codeFencedFence"), r.interrupt ? n(x) : e.check(zi, g, j)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), m(x));
  }
  function m(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x)) : pe(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), we(e, p, "whitespace")(x)) : x === 96 && x === a ? t(x) : (e.consume(x), m);
  }
  function p(x) {
    return x === null || J(x) ? f(x) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), d(x));
  }
  function d(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(x)) : x === 96 && x === a ? t(x) : (e.consume(x), d);
  }
  function g(x) {
    return e.attempt(i, j, b)(x);
  }
  function b(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), w;
  }
  function w(x) {
    return o > 0 && pe(x) ? we(
      e,
      P,
      "linePrefix",
      o + 1
    )(x) : P(x);
  }
  function P(x) {
    return x === null || J(x) ? e.check(zi, g, j)(x) : (e.enter("codeFlowValue"), C(x));
  }
  function C(x) {
    return x === null || J(x) ? (e.exit("codeFlowValue"), P(x)) : (e.consume(x), C);
  }
  function j(x) {
    return e.exit("codeFenced"), n(x);
  }
  function E(x, N, U) {
    let te = 0;
    return v;
    function v(G) {
      return x.enter("lineEnding"), x.consume(G), x.exit("lineEnding"), _;
    }
    function _(G) {
      return x.enter("codeFencedFence"), pe(G) ? we(
        x,
        z,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(G) : z(G);
    }
    function z(G) {
      return G === a ? (x.enter("codeFencedFenceSequence"), Q(G)) : U(G);
    }
    function Q(G) {
      return G === a ? (te++, x.consume(G), Q) : te >= l ? (x.exit("codeFencedFenceSequence"), pe(G) ? we(x, Z, "whitespace")(G) : Z(G)) : U(G);
    }
    function Z(G) {
      return G === null || J(G) ? (x.exit("codeFencedFence"), N(G)) : U(G);
    }
  }
}
function Mu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const $n = {
  name: "codeIndented",
  tokenize: Bu
}, $u = {
  tokenize: Uu,
  partial: !0
};
function Bu(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), we(e, o, "linePrefix", 4 + 1)(u);
  }
  function o(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(u) : t(u);
  }
  function l(u) {
    return u === null ? s(u) : J(u) ? e.attempt($u, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || J(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function Uu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? t(l) : J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : we(e, o, "linePrefix", 4 + 1)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : J(l) ? i(l) : t(l);
  }
}
const qu = {
  name: "codeText",
  tokenize: Wu,
  resolve: Hu,
  previous: Vu
};
function Hu(e) {
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
function Vu(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Wu(e, n, t) {
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
function ol(e) {
  const n = {};
  let t = -1, r, i, o, l, a, s, u;
  for (; ++t < e.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = e[t], t && r[1].type === "chunkFlow" && e[t - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, Yu(e, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o-- && (l = e[o], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, t), a.unshift(r), Je(e, i, t - i + 1, a));
    }
  }
  return !u;
}
function Yu(e, n) {
  const t = e[n][1], r = e[n][2];
  let i = n - 1;
  const o = [], l = t._tokenizer || r.parser[t.contentType](t.start), a = l.events, s = [], u = {};
  let c, f, m = -1, p = t, d = 0, g = 0;
  const b = [g];
  for (; p; ) {
    for (; e[++i][1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = t; ++m < a.length; )
    // Find a void token that includes a break.
    a[m][0] === "exit" && a[m - 1][0] === "enter" && a[m][1].type === a[m - 1][1].type && a[m][1].start.line !== a[m][1].end.line && (g = m + 1, b.push(g), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : b.pop(), m = b.length; m--; ) {
    const w = a.slice(b[m], b[m + 1]), P = o.pop();
    s.unshift([P, P + w.length - 1]), Je(e, P, 2, w);
  }
  for (m = -1; ++m < s.length; )
    u[d + s[m][0]] = d + s[m][1], d += s[m][1] - s[m][0] - 1;
  return u;
}
const Gu = {
  tokenize: Xu,
  resolve: Ku
}, Ju = {
  tokenize: Qu,
  partial: !0
};
function Ku(e) {
  return ol(e), e;
}
function Xu(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : J(a) ? e.check(
      Ju,
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
function Qu(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), we(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || J(l))
      return t(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
  }
}
function ll(e, n, t, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(w) {
    return w === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(w), e.exit(o), m) : w === null || w === 32 || w === 41 || ur(w) ? t(w) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(w));
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
  function g(w) {
    return !c && (w === null || w === 41 || Ie(w)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(w)) : c < u && w === 40 ? (e.consume(w), c++, g) : w === 41 ? (e.consume(w), c--, g) : w === null || w === 32 || w === 40 || ur(w) ? t(w) : (e.consume(w), w === 92 ? b : g);
  }
  function b(w) {
    return w === 40 || w === 41 || w === 92 ? (e.consume(w), g) : g(w);
  }
}
function al(e, n, t, r, i, o) {
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
function sl(e, n, t, r, i, o) {
  let l;
  return a;
  function a(m) {
    return m === 34 || m === 39 || m === 40 ? (e.enter(r), e.enter(i), e.consume(m), e.exit(i), l = m === 40 ? 41 : m, s) : t(m);
  }
  function s(m) {
    return m === l ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), n) : (e.enter(o), u(m));
  }
  function u(m) {
    return m === l ? (e.exit(o), s(l)) : m === null ? t(m) : J(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), we(e, u, "linePrefix")) : (e.enter("chunkString", {
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
    return J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : pe(i) ? we(
      e,
      r,
      t ? "linePrefix" : "lineSuffix"
    )(i) : n(i);
  }
}
function kt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Zu = {
  name: "definition",
  tokenize: tc
}, ec = {
  tokenize: nc,
  partial: !0
};
function tc(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return al.call(
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
    return ll(
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
    return e.attempt(ec, f, f)(p);
  }
  function f(p) {
    return pe(p) ? we(e, m, "whitespace")(p) : m(p);
  }
  function m(p) {
    return p === null || J(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function nc(e, n, t) {
  return r;
  function r(a) {
    return Ie(a) ? Dt(e, i)(a) : t(a);
  }
  function i(a) {
    return sl(
      e,
      o,
      t,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function o(a) {
    return pe(a) ? we(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || J(a) ? n(a) : t(a);
  }
}
const rc = {
  name: "hardBreakEscape",
  tokenize: ic
};
function ic(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return J(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const oc = {
  name: "headingAtx",
  tokenize: ac,
  resolve: lc
};
function lc(e, n) {
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
function ac(e, n, t) {
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
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || J(c) ? (e.exit("atxHeading"), n(c)) : pe(c) ? we(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || Ie(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const sc = [
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
], Ni = ["pre", "script", "style", "textarea"], uc = {
  name: "htmlFlow",
  tokenize: hc,
  resolveTo: pc,
  concrete: !0
}, cc = {
  tokenize: mc,
  partial: !0
}, fc = {
  tokenize: dc,
  partial: !0
};
function pc(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function hc(e, n, t) {
  const r = this;
  let i, o, l, a, s;
  return u;
  function u(y) {
    return c(y);
  }
  function c(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), f;
  }
  function f(y) {
    return y === 33 ? (e.consume(y), m) : y === 47 ? (e.consume(y), o = !0, g) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? n : h) : Ge(y) ? (e.consume(y), l = String.fromCharCode(y), b) : t(y);
  }
  function m(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, a = 0, d) : Ge(y) ? (e.consume(y), i = 4, r.interrupt ? n : h) : t(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? n : h) : t(y);
  }
  function d(y) {
    const B = "CDATA[";
    return y === B.charCodeAt(a++) ? (e.consume(y), a === B.length ? r.interrupt ? n : z : d) : t(y);
  }
  function g(y) {
    return Ge(y) ? (e.consume(y), l = String.fromCharCode(y), b) : t(y);
  }
  function b(y) {
    if (y === null || y === 47 || y === 62 || Ie(y)) {
      const B = y === 47, ne = l.toLowerCase();
      return !B && !o && Ni.includes(ne) ? (i = 1, r.interrupt ? n(y) : z(y)) : sc.includes(l.toLowerCase()) ? (i = 6, B ? (e.consume(y), w) : r.interrupt ? n(y) : z(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(y) : o ? P(y) : C(y));
    }
    return y === 45 || Le(y) ? (e.consume(y), l += String.fromCharCode(y), b) : t(y);
  }
  function w(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? n : z) : t(y);
  }
  function P(y) {
    return pe(y) ? (e.consume(y), P) : v(y);
  }
  function C(y) {
    return y === 47 ? (e.consume(y), v) : y === 58 || y === 95 || Ge(y) ? (e.consume(y), j) : pe(y) ? (e.consume(y), C) : v(y);
  }
  function j(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Le(y) ? (e.consume(y), j) : E(y);
  }
  function E(y) {
    return y === 61 ? (e.consume(y), x) : pe(y) ? (e.consume(y), E) : C(y);
  }
  function x(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? t(y) : y === 34 || y === 39 ? (e.consume(y), s = y, N) : pe(y) ? (e.consume(y), x) : U(y);
  }
  function N(y) {
    return y === s ? (e.consume(y), s = null, te) : y === null || J(y) ? t(y) : (e.consume(y), N);
  }
  function U(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || Ie(y) ? E(y) : (e.consume(y), U);
  }
  function te(y) {
    return y === 47 || y === 62 || pe(y) ? C(y) : t(y);
  }
  function v(y) {
    return y === 62 ? (e.consume(y), _) : t(y);
  }
  function _(y) {
    return y === null || J(y) ? z(y) : pe(y) ? (e.consume(y), _) : t(y);
  }
  function z(y) {
    return y === 45 && i === 2 ? (e.consume(y), q) : y === 60 && i === 1 ? (e.consume(y), oe) : y === 62 && i === 4 ? (e.consume(y), I) : y === 63 && i === 3 ? (e.consume(y), h) : y === 93 && i === 5 ? (e.consume(y), ye) : J(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(
      cc,
      H,
      Q
    )(y)) : y === null || J(y) ? (e.exit("htmlFlowData"), Q(y)) : (e.consume(y), z);
  }
  function Q(y) {
    return e.check(
      fc,
      Z,
      H
    )(y);
  }
  function Z(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), G;
  }
  function G(y) {
    return y === null || J(y) ? Q(y) : (e.enter("htmlFlowData"), z(y));
  }
  function q(y) {
    return y === 45 ? (e.consume(y), h) : z(y);
  }
  function oe(y) {
    return y === 47 ? (e.consume(y), l = "", xe) : z(y);
  }
  function xe(y) {
    if (y === 62) {
      const B = l.toLowerCase();
      return Ni.includes(B) ? (e.consume(y), I) : z(y);
    }
    return Ge(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), xe) : z(y);
  }
  function ye(y) {
    return y === 93 ? (e.consume(y), h) : z(y);
  }
  function h(y) {
    return y === 62 ? (e.consume(y), I) : y === 45 && i === 2 ? (e.consume(y), h) : z(y);
  }
  function I(y) {
    return y === null || J(y) ? (e.exit("htmlFlowData"), H(y)) : (e.consume(y), I);
  }
  function H(y) {
    return e.exit("htmlFlow"), n(y);
  }
}
function dc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function mc(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(wn, n, t);
  }
}
const gc = {
  name: "htmlText",
  tokenize: yc
};
function yc(e, n, t) {
  const r = this;
  let i, o, l;
  return a;
  function a(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s;
  }
  function s(h) {
    return h === 33 ? (e.consume(h), u) : h === 47 ? (e.consume(h), E) : h === 63 ? (e.consume(h), C) : Ge(h) ? (e.consume(h), U) : t(h);
  }
  function u(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), o = 0, d) : Ge(h) ? (e.consume(h), P) : t(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), p) : t(h);
  }
  function f(h) {
    return h === null ? t(h) : h === 45 ? (e.consume(h), m) : J(h) ? (l = f, oe(h)) : (e.consume(h), f);
  }
  function m(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? q(h) : h === 45 ? m(h) : f(h);
  }
  function d(h) {
    const I = "CDATA[";
    return h === I.charCodeAt(o++) ? (e.consume(h), o === I.length ? g : d) : t(h);
  }
  function g(h) {
    return h === null ? t(h) : h === 93 ? (e.consume(h), b) : J(h) ? (l = g, oe(h)) : (e.consume(h), g);
  }
  function b(h) {
    return h === 93 ? (e.consume(h), w) : g(h);
  }
  function w(h) {
    return h === 62 ? q(h) : h === 93 ? (e.consume(h), w) : g(h);
  }
  function P(h) {
    return h === null || h === 62 ? q(h) : J(h) ? (l = P, oe(h)) : (e.consume(h), P);
  }
  function C(h) {
    return h === null ? t(h) : h === 63 ? (e.consume(h), j) : J(h) ? (l = C, oe(h)) : (e.consume(h), C);
  }
  function j(h) {
    return h === 62 ? q(h) : C(h);
  }
  function E(h) {
    return Ge(h) ? (e.consume(h), x) : t(h);
  }
  function x(h) {
    return h === 45 || Le(h) ? (e.consume(h), x) : N(h);
  }
  function N(h) {
    return J(h) ? (l = N, oe(h)) : pe(h) ? (e.consume(h), N) : q(h);
  }
  function U(h) {
    return h === 45 || Le(h) ? (e.consume(h), U) : h === 47 || h === 62 || Ie(h) ? te(h) : t(h);
  }
  function te(h) {
    return h === 47 ? (e.consume(h), q) : h === 58 || h === 95 || Ge(h) ? (e.consume(h), v) : J(h) ? (l = te, oe(h)) : pe(h) ? (e.consume(h), te) : q(h);
  }
  function v(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Le(h) ? (e.consume(h), v) : _(h);
  }
  function _(h) {
    return h === 61 ? (e.consume(h), z) : J(h) ? (l = _, oe(h)) : pe(h) ? (e.consume(h), _) : te(h);
  }
  function z(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? t(h) : h === 34 || h === 39 ? (e.consume(h), i = h, Q) : J(h) ? (l = z, oe(h)) : pe(h) ? (e.consume(h), z) : (e.consume(h), Z);
  }
  function Q(h) {
    return h === i ? (e.consume(h), i = void 0, G) : h === null ? t(h) : J(h) ? (l = Q, oe(h)) : (e.consume(h), Q);
  }
  function Z(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? t(h) : h === 47 || h === 62 || Ie(h) ? te(h) : (e.consume(h), Z);
  }
  function G(h) {
    return h === 47 || h === 62 || Ie(h) ? te(h) : t(h);
  }
  function q(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(h);
  }
  function oe(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), xe;
  }
  function xe(h) {
    return pe(h) ? we(
      e,
      ye,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(h) : ye(h);
  }
  function ye(h) {
    return e.enter("htmlTextData"), l(h);
  }
}
const Or = {
  name: "labelEnd",
  tokenize: Ec,
  resolveTo: vc,
  resolveAll: xc
}, bc = {
  tokenize: Sc
}, kc = {
  tokenize: Cc
}, wc = {
  tokenize: Tc
};
function xc(e) {
  let n = -1;
  for (; ++n < e.length; ) {
    const t = e[n][1];
    (t.type === "labelImage" || t.type === "labelLink" || t.type === "labelEnd") && (e.splice(n + 1, t.type === "labelImage" ? 4 : 2), t.type = "data", n++);
  }
  return e;
}
function vc(e, n) {
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
function Ec(e, n, t) {
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
      bc,
      c,
      l ? c : f
    )(m) : m === 91 ? e.attempt(
      kc,
      c,
      l ? u : f
    )(m) : l ? c(m) : f(m);
  }
  function u(m) {
    return e.attempt(
      wc,
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
function Sc(e, n, t) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return Ie(f) ? Dt(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : ll(
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
    return f === 34 || f === 39 || f === 40 ? sl(
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
function Cc(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return al.call(
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
function Tc(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const Ac = {
  name: "labelStartImage",
  tokenize: Pc,
  resolveAll: Or.resolveAll
};
function Pc(e, n, t) {
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
const Oc = {
  name: "labelStartLink",
  tokenize: Rc,
  resolveAll: Or.resolveAll
};
function Rc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const Bn = {
  name: "lineEnding",
  tokenize: Fc
};
function Fc(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), we(e, n, "linePrefix");
  }
}
const sn = {
  name: "thematicBreak",
  tokenize: Ic
};
function Ic(e, n, t) {
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
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), pe(u) ? we(e, a, "whitespace")(u) : a(u));
  }
}
const Fe = {
  name: "list",
  tokenize: Dc,
  continuation: {
    tokenize: zc
  },
  exit: Nc
}, _c = {
  tokenize: Mc,
  partial: !0
}, jc = {
  tokenize: Lc,
  partial: !0
};
function Dc(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const d = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : cr(p)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(sn, t, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return t(p);
  }
  function s(p) {
    return cr(p) && ++l < 10 ? (e.consume(p), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : t(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      wn,
      // Can’t be empty when interrupting.
      r.interrupt ? t : c,
      e.attempt(
        _c,
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
function zc(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(wn, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, we(
      e,
      n,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !pe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(jc, n, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, we(
      e,
      e.attempt(Fe, n, t),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a);
  }
}
function Lc(e, n, t) {
  const r = this;
  return we(
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
function Nc(e) {
  e.exit(this.containerState.type);
}
function Mc(e, n, t) {
  const r = this;
  return we(
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
const Mi = {
  name: "setextUnderline",
  tokenize: Bc,
  resolveTo: $c
};
function $c(e, n) {
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
function Bc(e, n, t) {
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
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), pe(u) ? we(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || J(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
const Uc = {
  tokenize: qc
};
function qc(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    wn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      we(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(Gu, i)
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
const Hc = {
  resolveAll: cl()
}, Vc = ul("string"), Wc = ul("text");
function ul(e) {
  return {
    tokenize: n,
    resolveAll: cl(
      e === "text" ? Yc : void 0
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
function cl(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function Yc(e, n) {
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
function Gc(e, n, t) {
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
    consume: P,
    enter: C,
    exit: j,
    attempt: N(E),
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
    defineSkip: g,
    write: f
  };
  let c = n.tokenize.call(u, s);
  return n.resolveAll && o.push(n), u;
  function f(_) {
    return l = $e(l, _), b(), l[l.length - 1] !== null ? [] : (U(n, 0), u.events = Ar(o, u.events, u), u.events);
  }
  function m(_, z) {
    return Kc(p(_), z);
  }
  function p(_) {
    return Jc(l, _);
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
  function g(_) {
    i[_.line] = _.column, v();
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
  function P(_) {
    J(_) ? (r.line++, r.column = 1, r.offset += _ === -3 ? 2 : 1, v()) : _ !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = _;
  }
  function C(_, z) {
    const Q = z || {};
    return Q.type = _, Q.start = d(), u.events.push(["enter", Q, u]), a.push(Q), Q;
  }
  function j(_) {
    const z = a.pop();
    return z.end = d(), u.events.push(["exit", z, u]), z;
  }
  function E(_, z) {
    U(_, z.from);
  }
  function x(_, z) {
    z.restore();
  }
  function N(_, z) {
    return Q;
    function Q(Z, G, q) {
      let oe, xe, ye, h;
      return Array.isArray(Z) ? H(Z) : "tokenize" in Z ? (
        // @ts-expect-error Looks like a construct.
        H([Z])
      ) : I(Z);
      function I(M) {
        return W;
        function W(Y) {
          const re = Y !== null && M[Y], K = Y !== null && M.null, Ee = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(K) ? K : K ? [K] : []
          ];
          return H(Ee)(Y);
        }
      }
      function H(M) {
        return oe = M, xe = 0, M.length === 0 ? q : y(M[xe]);
      }
      function y(M) {
        return W;
        function W(Y) {
          return h = te(), ye = M, M.partial || (u.currentConstruct = M), M.name && u.parser.constructs.disable.null.includes(M.name) ? ne() : M.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(u), z) : u,
            s,
            B,
            ne
          )(Y);
        }
      }
      function B(M) {
        return _(ye, h), G;
      }
      function ne(M) {
        return h.restore(), ++xe < oe.length ? y(oe[xe]) : q;
      }
    }
  }
  function U(_, z) {
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
      restore: q,
      from: Z
    };
    function q() {
      r = _, u.previous = z, u.currentConstruct = Q, u.events.length = Z, a = G, v();
    }
  }
  function v() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Jc(e, n) {
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
function Kc(e, n) {
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
const Xc = {
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
  62: nl
}, Qc = {
  91: Zu
}, Zc = {
  [-2]: $n,
  [-1]: $n,
  32: $n
}, ef = {
  35: oc,
  42: sn,
  45: [Mi, sn],
  60: uc,
  61: Mi,
  95: sn,
  96: Li,
  126: Li
}, tf = {
  38: il,
  92: rl
}, nf = {
  [-5]: Bn,
  [-4]: Bn,
  [-3]: Bn,
  33: Ac,
  38: il,
  42: fr,
  60: [Ru, gc],
  91: Oc,
  92: [rc, rl],
  93: Or,
  95: fr,
  96: qu
}, rf = {
  null: [fr, Hc]
}, of = {
  null: [42, 95]
}, lf = {
  null: []
}, af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: of,
  contentInitial: Qc,
  disable: lf,
  document: Xc,
  flow: ef,
  flowInitial: Zc,
  insideSpan: rf,
  string: tf,
  text: nf
}, Symbol.toStringTag, { value: "Module" }));
function sf(e) {
  const t = (
    /** @type {FullNormalizedExtension} */
    du([af, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: t,
    content: i(Eu),
    document: i(Cu),
    flow: i(Uc),
    string: i(Vc),
    text: i(Wc)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return Gc(r, o, a);
    }
  }
}
const $i = /[\0\t\n\r]/g;
function uf() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, c, f, m, p;
    for (o = n + o.toString(l), f = 0, n = "", t && (o.charCodeAt(0) === 65279 && f++, t = void 0); f < o.length; ) {
      if ($i.lastIndex = f, u = $i.exec(o), m = u && u.index !== void 0 ? u.index : o.length, p = o.charCodeAt(m), !u) {
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
function cf(e) {
  for (; !ol(e); )
    ;
  return e;
}
function fl(e, n) {
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
const ff = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function pf(e) {
  return e.replace(ff, hf);
}
function hf(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return fl(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Pr(t) || e;
}
const pl = {}.hasOwnProperty, df = (
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
    return typeof n != "string" && (t = n, n = void 0), mf(t)(
      cf(
        sf(t).document().write(uf()(e, n, !0))
      )
    );
  }
);
function mf(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Wt),
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
      definition: a($),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(_e),
      hardBreakEscape: a(tt),
      hardBreakTrailing: a(tt),
      htmlFlow: a(Tt, s),
      htmlFlowData: _,
      htmlText: a(Tt, s),
      htmlTextData: _,
      image: a(ht),
      label: s,
      link: a(Wt),
      listItem: a(At),
      listItemValue: d,
      listOrdered: a(Yt, p),
      listUnordered: a(Yt),
      paragraph: a(Cn),
      reference: ne,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(Ne),
      strong: a(Tn),
      thematicBreak: a(Jt)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: N,
      autolink: c(),
      autolinkEmail: K,
      autolinkProtocol: re,
      blockQuote: c(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: W,
      characterReferenceMarkerNumeric: W,
      characterReferenceValue: Y,
      codeFenced: c(P),
      codeFencedFence: w,
      codeFencedFenceInfo: g,
      codeFencedFenceMeta: b,
      codeFlowValue: z,
      codeIndented: c(C),
      codeText: c(oe),
      codeTextData: z,
      data: z,
      definition: c(),
      definitionDestinationString: x,
      definitionLabelString: j,
      definitionTitleString: E,
      emphasis: c(),
      hardBreakEscape: c(Z),
      hardBreakTrailing: c(Z),
      htmlFlow: c(G),
      htmlFlowData: z,
      htmlText: c(q),
      htmlTextData: z,
      image: c(ye),
      label: I,
      labelText: h,
      lineEnding: Q,
      link: c(xe),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: M,
      resourceDestinationString: H,
      resourceTitleString: y,
      resource: B,
      setextHeading: c(v),
      setextHeadingLineSequence: te,
      setextHeadingText: U,
      strong: c(),
      thematicBreak: c()
    }
  };
  hl(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(S) {
    let F = {
      type: "root",
      children: []
    };
    const V = {
      stack: [F],
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
      pl.call(je, S[ce][1].type) && je[S[ce][1].type].call(
        Object.assign(
          {
            sliceSerialize: S[ce][2].sliceSerialize
          },
          V
        ),
        S[ce][1]
      );
    }
    if (V.tokenStack.length > 0) {
      const je = V.tokenStack[V.tokenStack.length - 1];
      (je[1] || Bi).call(V, void 0, je[0]);
    }
    for (F.position = {
      start: rt(
        S.length > 0 ? S[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: rt(
        S.length > 0 ? S[S.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, ce = -1; ++ce < n.transforms.length; )
      F = n.transforms[ce](F) || F;
    return F;
  }
  function i(S, F, V) {
    let ue = F - 1, ce = -1, je = !1, We, He, at, st;
    for (; ++ue <= V; ) {
      const ve = S[ue];
      if (ve[1].type === "listUnordered" || ve[1].type === "listOrdered" || ve[1].type === "blockQuote" ? (ve[0] === "enter" ? ce++ : ce--, st = void 0) : ve[1].type === "lineEndingBlank" ? ve[0] === "enter" && (We && !st && !ce && !at && (at = ue), st = void 0) : ve[1].type === "linePrefix" || ve[1].type === "listItemValue" || ve[1].type === "listItemMarker" || ve[1].type === "listItemPrefix" || ve[1].type === "listItemPrefixWhitespace" || (st = void 0), !ce && ve[0] === "enter" && ve[1].type === "listItemPrefix" || ce === -1 && ve[0] === "exit" && (ve[1].type === "listUnordered" || ve[1].type === "listOrdered")) {
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
          at && (!He || at < He) && (We._spread = !0), We.end = Object.assign(
            {},
            He ? S[He][1].start : ve[1].end
          ), S.splice(He || ue, 0, ["exit", We, ve[2]]), ue++, V++;
        }
        ve[1].type === "listItemPrefix" && (We = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, ve[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, S.splice(ue, 0, ["enter", We, ve[2]]), ue++, V++, at = void 0, st = !0);
      }
    }
    return S[F][1]._spread = je, V;
  }
  function o(S, F) {
    t[S] = F;
  }
  function l(S) {
    return t[S];
  }
  function a(S, F) {
    return V;
    function V(ue) {
      u.call(this, S(ue), ue), F && F.call(this, ue);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function u(S, F, V) {
    return this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([F, V]), S.position = {
      start: rt(F.start)
    }, S;
  }
  function c(S) {
    return F;
    function F(V) {
      S && S.call(this, V), f.call(this, V);
    }
  }
  function f(S, F) {
    const V = this.stack.pop(), ue = this.tokenStack.pop();
    if (ue)
      ue[0].type !== S.type && (F ? F.call(this, S, ue[0]) : (ue[1] || Bi).call(this, S, ue[0]));
    else
      throw new Error(
        "Cannot close `" + S.type + "` (" + jt({
          start: S.start,
          end: S.end
        }) + "): it’s not open"
      );
    return V.position.end = rt(S.end), V;
  }
  function m() {
    return pu(this.stack.pop());
  }
  function p() {
    o("expectingFirstListItemValue", !0);
  }
  function d(S) {
    if (l("expectingFirstListItemValue")) {
      const F = this.stack[this.stack.length - 2];
      F.start = Number.parseInt(this.sliceSerialize(S), 10), o("expectingFirstListItemValue");
    }
  }
  function g() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.lang = S;
  }
  function b() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.meta = S;
  }
  function w() {
    l("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
  }
  function P() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside");
  }
  function C() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function j(S) {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = F, V.identifier = kt(
      this.sliceSerialize(S)
    ).toLowerCase();
  }
  function E() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = S;
  }
  function x() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = S;
  }
  function N(S) {
    const F = this.stack[this.stack.length - 1];
    if (!F.depth) {
      const V = this.sliceSerialize(S).length;
      F.depth = V;
    }
  }
  function U() {
    o("setextHeadingSlurpLineEnding", !0);
  }
  function te(S) {
    const F = this.stack[this.stack.length - 1];
    F.depth = this.sliceSerialize(S).charCodeAt(0) === 61 ? 1 : 2;
  }
  function v() {
    o("setextHeadingSlurpLineEnding");
  }
  function _(S) {
    const F = this.stack[this.stack.length - 1];
    let V = F.children[F.children.length - 1];
    (!V || V.type !== "text") && (V = Gt(), V.position = {
      start: rt(S.start)
    }, F.children.push(V)), this.stack.push(V);
  }
  function z(S) {
    const F = this.stack.pop();
    F.value += this.sliceSerialize(S), F.position.end = rt(S.end);
  }
  function Q(S) {
    const F = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const V = F.children[F.children.length - 1];
      V.position.end = rt(S.end), o("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && n.canContainEols.includes(F.type) && (_.call(this, S), z.call(this, S));
  }
  function Z() {
    o("atHardBreak", !0);
  }
  function G() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S;
  }
  function q() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S;
  }
  function oe() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S;
  }
  function xe() {
    const S = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const F = l("referenceType") || "shortcut";
      S.type += "Reference", S.referenceType = F, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    o("referenceType");
  }
  function ye() {
    const S = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const F = l("referenceType") || "shortcut";
      S.type += "Reference", S.referenceType = F, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    o("referenceType");
  }
  function h(S) {
    const F = this.sliceSerialize(S), V = this.stack[this.stack.length - 2];
    V.label = pf(F), V.identifier = kt(F).toLowerCase();
  }
  function I() {
    const S = this.stack[this.stack.length - 1], F = this.resume(), V = this.stack[this.stack.length - 1];
    if (o("inReference", !0), V.type === "link") {
      const ue = S.children;
      V.children = ue;
    } else
      V.alt = F;
  }
  function H() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = S;
  }
  function y() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = S;
  }
  function B() {
    o("inReference");
  }
  function ne() {
    o("referenceType", "collapsed");
  }
  function M(S) {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = F, V.identifier = kt(
      this.sliceSerialize(S)
    ).toLowerCase(), o("referenceType", "full");
  }
  function W(S) {
    o("characterReferenceType", S.type);
  }
  function Y(S) {
    const F = this.sliceSerialize(S), V = l("characterReferenceType");
    let ue;
    V ? (ue = fl(
      F,
      V === "characterReferenceMarkerNumeric" ? 10 : 16
    ), o("characterReferenceType")) : ue = Pr(F);
    const ce = this.stack.pop();
    ce.value += ue, ce.position.end = rt(S.end);
  }
  function re(S) {
    z.call(this, S);
    const F = this.stack[this.stack.length - 1];
    F.url = this.sliceSerialize(S);
  }
  function K(S) {
    z.call(this, S);
    const F = this.stack[this.stack.length - 1];
    F.url = "mailto:" + this.sliceSerialize(S);
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
  function $() {
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
  function tt() {
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
  function ht() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Wt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Yt(S) {
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
  function Cn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Tn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Gt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Jt() {
    return {
      type: "thematicBreak"
    };
  }
}
function rt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function hl(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? hl(e, r) : gf(e, r);
  }
}
function gf(e, n) {
  let t;
  for (t in n)
    if (pl.call(n, t)) {
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
function Bi(e, n) {
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
function yf(e) {
  Object.assign(this, { Parser: (t) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return df(
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
function bf(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function kf(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function wf(e, n) {
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
function xf(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function vf(e, n) {
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
function dl(e, n) {
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
function Ef(e, n) {
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
  }, dl(e, {
    type: "footnoteReference",
    identifier: i,
    position: n.position
  });
}
function Sf(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Cf(e, n) {
  if (e.dangerous) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
  return null;
}
function ml(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return { type: "text", value: "![" + n.alt + r };
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function Tf(e, n) {
  const t = e.definition(n.identifier);
  if (!t)
    return ml(e, n);
  const r = { src: St(t.url || ""), alt: n.alt };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(n, i), e.applyData(n, i);
}
function Af(e, n) {
  const t = { src: St(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Pf(e, n) {
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
function Of(e, n) {
  const t = e.definition(n.identifier);
  if (!t)
    return ml(e, n);
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
function Rf(e, n) {
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
function Ff(e, n, t) {
  const r = e.all(n), i = t ? If(t) : gl(n), o = {}, l = [];
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
function If(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = gl(t[r]);
  }
  return n;
}
function gl(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function _f(e, n) {
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
function jf(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Df(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function zf(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Rr = yl("start"), Fr = yl("end");
function Lf(e) {
  return { start: Rr(e), end: Fr(e) };
}
function yl(e) {
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
function Nf(e, n) {
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
function Mf(e, n, t) {
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
function $f(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Ui = 9, qi = 32;
function Bf(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Hi(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(Hi(n.slice(i), i > 0, !1)), o.join("");
}
function Hi(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === Ui || o === qi; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === Ui || o === qi; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Uf(e, n) {
  const t = { type: "text", value: Bf(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function qf(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Hf = {
  blockquote: bf,
  break: kf,
  code: wf,
  delete: xf,
  emphasis: vf,
  footnoteReference: dl,
  footnote: Ef,
  heading: Sf,
  html: Cf,
  imageReference: Tf,
  image: Af,
  inlineCode: Pf,
  linkReference: Of,
  link: Rf,
  listItem: Ff,
  list: _f,
  paragraph: jf,
  root: Df,
  strong: zf,
  table: Nf,
  tableCell: $f,
  tableRow: Mf,
  text: Uf,
  thematicBreak: qf,
  toml: Xt,
  yaml: Xt,
  definition: Xt,
  footnoteDefinition: Xt
};
function Xt() {
  return null;
}
const bl = (
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
      return Gf;
    if (typeof e == "string")
      return Yf(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Vf(e) : Wf(e);
    if (typeof e == "function")
      return xn(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Vf(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = bl(e[t]);
  return xn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].call(this, ...i))
        return !0;
    return !1;
  }
}
function Wf(e) {
  return xn(n);
  function n(t) {
    let r;
    for (r in e)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
}
function Yf(e) {
  return xn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function xn(e) {
  return n;
  function n(t, ...r) {
    return !!(t && typeof t == "object" && "type" in t && e.call(this, t, ...r));
  }
}
function Gf() {
  return !0;
}
const Jf = !0, Vi = !1, Kf = "skip", Xf = (
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
    const i = bl(n), o = r ? -1 : 1;
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
        let m = [], p, d, g;
        if ((!n || i(a, s, u[u.length - 1] || null)) && (m = Qf(t(a, u)), m[0] === Vi))
          return m;
        if (a.children && m[0] !== Kf)
          for (d = (r ? a.children.length : -1) + o, g = u.concat(a); d > -1 && d < a.children.length; ) {
            if (p = l(a.children[d], d, g)(), p[0] === Vi)
              return p;
            d = typeof p[1] == "number" ? p[1] : d + o;
          }
        return m;
      }
    }
  }
);
function Qf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Jf, e] : [e];
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
    typeof n == "function" && typeof t != "function" && (r = t, t = n, n = null), Xf(e, n, i, r);
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
function Zf(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Wi = {}.hasOwnProperty;
function ep(e) {
  const n = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return Ir(e, "definition", (r) => {
    const i = Yi(r.identifier);
    i && !Wi.call(n, i) && (n[i] = r);
  }), t;
  function t(r) {
    const i = Yi(r);
    return i && Wi.call(n, i) ? n[i] : null;
  }
}
function Yi(e) {
  return String(e || "").toUpperCase();
}
const cn = {}.hasOwnProperty;
function tp(e, n) {
  const t = n || {}, r = t.allowDangerousHtml || !1, i = {};
  return l.dangerous = r, l.clobberPrefix = t.clobberPrefix === void 0 || t.clobberPrefix === null ? "user-content-" : t.clobberPrefix, l.footnoteLabel = t.footnoteLabel || "Footnotes", l.footnoteLabelTagName = t.footnoteLabelTagName || "h2", l.footnoteLabelProperties = t.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = t.footnoteBackLabel || "Back to content", l.unknownHandler = t.unknownHandler, l.passThrough = t.passThrough, l.handlers = { ...Hf, ...t.handlers }, l.definition = ep(e), l.footnoteById = i, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = np, l.applyData = rp, l.one = a, l.all = s, l.wrap = op, l.augment = o, Ir(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    cn.call(i, c) || (i[c] = u);
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
      Zf(f) || (c.position = { start: Rr(f), end: Fr(f) });
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
    return kl(l, u, c);
  }
  function s(u) {
    return _r(l, u);
  }
}
function np(e, n) {
  e.position && (n.position = Lf(e));
}
function rp(e, n) {
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
function kl(e, n, t) {
  const r = n && n.type;
  if (!r)
    throw new Error("Expected node, got `" + n + "`");
  return cn.call(e.handlers, r) ? e.handlers[r](e, n, t) : e.passThrough && e.passThrough.includes(r) ? "children" in n ? { ...n, children: _r(e, n) } : n : e.unknownHandler ? e.unknownHandler(e, n, t) : ip(e, n);
}
function _r(e, n) {
  const t = [];
  if ("children" in n) {
    const r = n.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const o = kl(e, r[i], n);
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
function ip(e, n) {
  const t = n.data || {}, r = "value" in n && !(cn.call(t, "hProperties") || cn.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: _r(e, n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function op(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function lp(e) {
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
function wl(e, n) {
  const t = tp(e, n), r = t.one(e, null), i = lp(t);
  return i && r.children.push({ type: "text", value: `
` }, i), Array.isArray(r) ? { type: "root", children: r } : r;
}
const ap = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  function(e, n) {
    return e && "run" in e ? up(e, n) : cp(e || n);
  }
), sp = ap;
function up(e, n) {
  return (t, r, i) => {
    e.run(wl(t, n), r, (o) => {
      i(o);
    });
  };
}
function cp(e) {
  return (n) => wl(n, e);
}
var pr = { exports: {} }, Qt = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function fp() {
  if (Gi)
    return he;
  Gi = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var x = E.$$typeof;
      switch (x) {
        case n:
          switch (E = E.type, E) {
            case s:
            case u:
            case r:
            case o:
            case i:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case c:
                case d:
                case p:
                case l:
                  return E;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  function j(E) {
    return C(E) === u;
  }
  return he.AsyncMode = s, he.ConcurrentMode = u, he.ContextConsumer = a, he.ContextProvider = l, he.Element = n, he.ForwardRef = c, he.Fragment = r, he.Lazy = d, he.Memo = p, he.Portal = t, he.Profiler = o, he.StrictMode = i, he.Suspense = f, he.isAsyncMode = function(E) {
    return j(E) || C(E) === s;
  }, he.isConcurrentMode = j, he.isContextConsumer = function(E) {
    return C(E) === a;
  }, he.isContextProvider = function(E) {
    return C(E) === l;
  }, he.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }, he.isForwardRef = function(E) {
    return C(E) === c;
  }, he.isFragment = function(E) {
    return C(E) === r;
  }, he.isLazy = function(E) {
    return C(E) === d;
  }, he.isMemo = function(E) {
    return C(E) === p;
  }, he.isPortal = function(E) {
    return C(E) === t;
  }, he.isProfiler = function(E) {
    return C(E) === o;
  }, he.isStrictMode = function(E) {
    return C(E) === i;
  }, he.isSuspense = function(E) {
    return C(E) === f;
  }, he.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === o || E === i || E === f || E === m || typeof E == "object" && E !== null && (E.$$typeof === d || E.$$typeof === p || E.$$typeof === l || E.$$typeof === a || E.$$typeof === c || E.$$typeof === b || E.$$typeof === w || E.$$typeof === P || E.$$typeof === g);
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
var Ji;
function pp() {
  return Ji || (Ji = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === u || D === o || D === i || D === f || D === m || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === p || D.$$typeof === l || D.$$typeof === a || D.$$typeof === c || D.$$typeof === b || D.$$typeof === w || D.$$typeof === P || D.$$typeof === g);
    }
    function j(D) {
      if (typeof D == "object" && D !== null) {
        var Pe = D.$$typeof;
        switch (Pe) {
          case n:
            var $ = D.type;
            switch ($) {
              case s:
              case u:
              case r:
              case o:
              case i:
              case f:
                return $;
              default:
                var _e = $ && $.$$typeof;
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
    var E = s, x = u, N = a, U = l, te = n, v = c, _ = r, z = d, Q = p, Z = t, G = o, q = i, oe = f, xe = !1;
    function ye(D) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(D) || j(D) === s;
    }
    function h(D) {
      return j(D) === u;
    }
    function I(D) {
      return j(D) === a;
    }
    function H(D) {
      return j(D) === l;
    }
    function y(D) {
      return typeof D == "object" && D !== null && D.$$typeof === n;
    }
    function B(D) {
      return j(D) === c;
    }
    function ne(D) {
      return j(D) === r;
    }
    function M(D) {
      return j(D) === d;
    }
    function W(D) {
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
    de.AsyncMode = E, de.ConcurrentMode = x, de.ContextConsumer = N, de.ContextProvider = U, de.Element = te, de.ForwardRef = v, de.Fragment = _, de.Lazy = z, de.Memo = Q, de.Portal = Z, de.Profiler = G, de.StrictMode = q, de.Suspense = oe, de.isAsyncMode = ye, de.isConcurrentMode = h, de.isContextConsumer = I, de.isContextProvider = H, de.isElement = y, de.isForwardRef = B, de.isFragment = ne, de.isLazy = M, de.isMemo = W, de.isPortal = Y, de.isProfiler = re, de.isStrictMode = K, de.isSuspense = Ee, de.isValidElementType = C, de.typeOf = j;
  }()), de;
}
var Ki;
function xl() {
  return Ki || (Ki = 1, process.env.NODE_ENV === "production" ? Qt.exports = fp() : Qt.exports = pp()), Qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Un, Xi;
function hp() {
  if (Xi)
    return Un;
  Xi = 1;
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
  return Un = i() ? Object.assign : function(o, l) {
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
  }, Un;
}
var qn, Qi;
function jr() {
  if (Qi)
    return qn;
  Qi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qn = e, qn;
}
var Hn, Zi;
function vl() {
  return Zi || (Zi = 1, Hn = Function.call.bind(Object.prototype.hasOwnProperty)), Hn;
}
var Vn, eo;
function dp() {
  if (eo)
    return Vn;
  eo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = jr(), t = {}, r = vl();
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
  }, Vn = i, Vn;
}
var Wn, to;
function mp() {
  if (to)
    return Wn;
  to = 1;
  var e = xl(), n = hp(), t = jr(), r = vl(), i = dp(), o = function() {
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
  return Wn = function(a, s) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var I = h && (u && h[u] || h[c]);
      if (typeof I == "function")
        return I;
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
      any: P(),
      arrayOf: C,
      element: j(),
      elementType: E(),
      instanceOf: x,
      node: v(),
      objectOf: U,
      oneOf: N,
      oneOfType: te,
      shape: z,
      exact: Q
    };
    function d(h, I) {
      return h === I ? h !== 0 || 1 / h === 1 / I : h !== h && I !== I;
    }
    function g(h, I) {
      this.message = h, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(h) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, H = 0;
      function y(ne, M, W, Y, re, K, Ee) {
        if (Y = Y || m, K = K || W, Ee !== t) {
          if (s) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = Y + ":" + W;
            !I[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[Pe] = !0, H++);
          }
        }
        return M[W] == null ? ne ? M[W] === null ? new g("The " + re + " `" + K + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new g("The " + re + " `" + K + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : h(M, W, Y, re, K);
      }
      var B = y.bind(null, !1);
      return B.isRequired = y.bind(null, !0), B;
    }
    function w(h) {
      function I(H, y, B, ne, M, W) {
        var Y = H[y], re = q(Y);
        if (re !== h) {
          var K = oe(Y);
          return new g(
            "Invalid " + ne + " `" + M + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return b(I);
    }
    function P() {
      return b(l);
    }
    function C(h) {
      function I(H, y, B, ne, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var W = H[y];
        if (!Array.isArray(W)) {
          var Y = q(W);
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected an array."));
        }
        for (var re = 0; re < W.length; re++) {
          var K = h(W, re, B, ne, M + "[" + re + "]", t);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return b(I);
    }
    function j() {
      function h(I, H, y, B, ne) {
        var M = I[H];
        if (!a(M)) {
          var W = q(M);
          return new g("Invalid " + B + " `" + ne + "` of type " + ("`" + W + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(h);
    }
    function E() {
      function h(I, H, y, B, ne) {
        var M = I[H];
        if (!e.isValidElementType(M)) {
          var W = q(M);
          return new g("Invalid " + B + " `" + ne + "` of type " + ("`" + W + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(h);
    }
    function x(h) {
      function I(H, y, B, ne, M) {
        if (!(H[y] instanceof h)) {
          var W = h.name || m, Y = ye(H[y]);
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return b(I);
    }
    function N(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function I(H, y, B, ne, M) {
        for (var W = H[y], Y = 0; Y < h.length; Y++)
          if (d(W, h[Y]))
            return null;
        var re = JSON.stringify(h, function(Ee, D) {
          var Pe = oe(D);
          return Pe === "symbol" ? String(D) : D;
        });
        return new g("Invalid " + ne + " `" + M + "` of value `" + String(W) + "` " + ("supplied to `" + B + "`, expected one of " + re + "."));
      }
      return b(I);
    }
    function U(h) {
      function I(H, y, B, ne, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var W = H[y], Y = q(W);
        if (Y !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected an object."));
        for (var re in W)
          if (r(W, re)) {
            var K = h(W, re, B, ne, M + "." + re, t);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return b(I);
    }
    function te(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var I = 0; I < h.length; I++) {
        var H = h[I];
        if (typeof H != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(H) + " at index " + I + "."
          ), l;
      }
      function y(B, ne, M, W, Y) {
        for (var re = [], K = 0; K < h.length; K++) {
          var Ee = h[K], D = Ee(B, ne, M, W, Y, t);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && re.push(D.data.expectedType);
        }
        var Pe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new g("Invalid " + W + " `" + Y + "` supplied to " + ("`" + M + "`" + Pe + "."));
      }
      return b(y);
    }
    function v() {
      function h(I, H, y, B, ne) {
        return Z(I[H]) ? null : new g("Invalid " + B + " `" + ne + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return b(h);
    }
    function _(h, I, H, y, B) {
      return new g(
        (h || "React class") + ": " + I + " type `" + H + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function z(h) {
      function I(H, y, B, ne, M) {
        var W = H[y], Y = q(W);
        if (Y !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type `" + Y + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var re in h) {
          var K = h[re];
          if (typeof K != "function")
            return _(B, ne, M, re, oe(K));
          var Ee = K(W, re, B, ne, M + "." + re, t);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return b(I);
    }
    function Q(h) {
      function I(H, y, B, ne, M) {
        var W = H[y], Y = q(W);
        if (Y !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type `" + Y + "` " + ("supplied to `" + B + "`, expected `object`."));
        var re = n({}, H[y], h);
        for (var K in re) {
          var Ee = h[K];
          if (r(h, K) && typeof Ee != "function")
            return _(B, ne, M, K, oe(Ee));
          if (!Ee)
            return new g(
              "Invalid " + ne + " `" + M + "` key `" + K + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(H[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var D = Ee(W, K, B, ne, M + "." + K, t);
          if (D)
            return D;
        }
        return null;
      }
      return b(I);
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
          var I = f(h);
          if (I) {
            var H = I.call(h), y;
            if (I !== h.entries) {
              for (; !(y = H.next()).done; )
                if (!Z(y.value))
                  return !1;
            } else
              for (; !(y = H.next()).done; ) {
                var B = y.value;
                if (B && !Z(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(h, I) {
      return h === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function q(h) {
      var I = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : G(I, h) ? "symbol" : I;
    }
    function oe(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var I = q(h);
      if (I === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function xe(h) {
      var I = oe(h);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function ye(h) {
      return !h.constructor || !h.constructor.name ? m : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Wn;
}
var Yn, no;
function gp() {
  if (no)
    return Yn;
  no = 1;
  var e = jr();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Yn = function() {
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
  }, Yn;
}
if (process.env.NODE_ENV !== "production") {
  var yp = xl(), bp = !0;
  pr.exports = mp()(yp.isElement, bp);
} else
  pr.exports = gp()();
var kp = pr.exports;
const ee = /* @__PURE__ */ $t(kp);
class Ht {
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
Ht.prototype.property = {};
Ht.prototype.normal = {};
Ht.prototype.space = null;
function El(e, n) {
  const t = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
  return new Ht(t, r, n);
}
function hr(e) {
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
let wp = 0;
const ie = pt(), Te = pt(), Sl = pt(), R = pt(), ke = pt(), wt = pt(), ze = pt();
function pt() {
  return 2 ** ++wp;
}
const dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ie,
  booleanish: Te,
  commaOrSpaceSeparated: ze,
  commaSeparated: wt,
  number: R,
  overloadedBoolean: Sl,
  spaceSeparated: ke
}, Symbol.toStringTag, { value: "Module" })), Gn = Object.keys(dr);
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
    if (super(n, t), ro(this, "space", i), typeof r == "number")
      for (; ++o < Gn.length; ) {
        const l = Gn[o];
        ro(this, Gn[o], (r & dr[l]) === dr[l]);
      }
  }
}
Dr.prototype.defined = !0;
function ro(e, n, t) {
  t && (e[n] = t);
}
const xp = {}.hasOwnProperty;
function Ct(e) {
  const n = {}, t = {};
  let r;
  for (r in e.properties)
    if (xp.call(e.properties, r)) {
      const i = e.properties[r], o = new Dr(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[hr(r)] = r, t[hr(o.attribute)] = r;
    }
  return new Ht(n, t, e.space);
}
const Cl = Ct({
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
}), Tl = Ct({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Al(e, n) {
  return n in e ? e[n] : n;
}
function Pl(e, n) {
  return Al(e, n.toLowerCase());
}
const Ol = Ct({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Pl,
  properties: { xmlns: null, xmlnsXLink: null }
}), Rl = Ct({
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
    ariaControls: ke,
    ariaCurrent: null,
    ariaDescribedBy: ke,
    ariaDetails: null,
    ariaDisabled: Te,
    ariaDropEffect: ke,
    ariaErrorMessage: null,
    ariaExpanded: Te,
    ariaFlowTo: ke,
    ariaGrabbed: Te,
    ariaHasPopup: null,
    ariaHidden: Te,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ke,
    ariaLevel: R,
    ariaLive: null,
    ariaModal: Te,
    ariaMultiLine: Te,
    ariaMultiSelectable: Te,
    ariaOrientation: null,
    ariaOwns: ke,
    ariaPlaceholder: null,
    ariaPosInSet: R,
    ariaPressed: Te,
    ariaReadOnly: Te,
    ariaRelevant: null,
    ariaRequired: Te,
    ariaRoleDescription: ke,
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
}), vp = Ct({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Pl,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: wt,
    acceptCharset: ke,
    accessKey: ke,
    action: null,
    allow: null,
    allowFullScreen: ie,
    allowPaymentRequest: ie,
    allowUserMedia: ie,
    alt: null,
    as: null,
    async: ie,
    autoCapitalize: null,
    autoComplete: ke,
    autoFocus: ie,
    autoPlay: ie,
    blocking: ke,
    capture: ie,
    charSet: null,
    checked: ie,
    cite: null,
    className: ke,
    cols: R,
    colSpan: null,
    content: null,
    contentEditable: Te,
    controls: ie,
    controlsList: ke,
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
    download: Sl,
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
    headers: ke,
    height: R,
    hidden: ie,
    high: R,
    href: null,
    hrefLang: null,
    htmlFor: ke,
    httpEquiv: ke,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ie,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ie,
    itemId: null,
    itemProp: ke,
    itemRef: ke,
    itemScope: ie,
    itemType: ke,
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
    ping: ke,
    placeholder: null,
    playsInline: ie,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ie,
    referrerPolicy: null,
    rel: ke,
    required: ie,
    reversed: ie,
    rows: R,
    rowSpan: R,
    sandbox: ke,
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
    archive: ke,
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
}), Ep = Ct({
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
  transform: Al,
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
    className: ke,
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
    ping: ke,
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
}), Sp = /^data[-\w.:]+$/i, io = /-[a-z]/g, Cp = /[A-Z]/g;
function Tp(e, n) {
  const t = hr(n);
  let r = n, i = qe;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Sp.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(io, Pp);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!io.test(o)) {
        let l = o.replace(Cp, Ap);
        l.charAt(0) !== "-" && (l = "-" + l), n = "data" + l;
      }
    }
    i = Dr;
  }
  return new i(r, n);
}
function Ap(e) {
  return "-" + e.toLowerCase();
}
function Pp(e) {
  return e.charAt(1).toUpperCase();
}
const oo = {
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
}, Op = El([Tl, Cl, Ol, Rl, vp], "html"), Rp = El([Tl, Cl, Ol, Rl, Ep], "svg");
function Fp(e) {
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
var mr = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Ip() {
  if (lo)
    return me;
  lo = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function g(b) {
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
    return g(b) === l;
  }, me.isContextProvider = function(b) {
    return g(b) === o;
  }, me.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, me.isForwardRef = function(b) {
    return g(b) === s;
  }, me.isFragment = function(b) {
    return g(b) === t;
  }, me.isLazy = function(b) {
    return g(b) === m;
  }, me.isMemo = function(b) {
    return g(b) === f;
  }, me.isPortal = function(b) {
    return g(b) === n;
  }, me.isProfiler = function(b) {
    return g(b) === i;
  }, me.isStrictMode = function(b) {
    return g(b) === r;
  }, me.isSuspense = function(b) {
    return g(b) === u;
  }, me.isSuspenseList = function(b) {
    return g(b) === c;
  }, me.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === t || b === i || b === r || b === u || b === c || b === p || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === f || b.$$typeof === o || b.$$typeof === l || b.$$typeof === s || b.$$typeof === d || b.getModuleId !== void 0);
  }, me.typeOf = g, me;
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
var ao;
function _p() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = !1, g = !1, b = !1, w = !1, P = !1, C;
    C = Symbol.for("react.module.reference");
    function j($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === i || P || $ === r || $ === u || $ === c || w || $ === p || d || g || b || typeof $ == "object" && $ !== null && ($.$$typeof === m || $.$$typeof === f || $.$$typeof === o || $.$$typeof === l || $.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === C || $.getModuleId !== void 0));
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var _e = $.$$typeof;
        switch (_e) {
          case e:
            var Ne = $.type;
            switch (Ne) {
              case t:
              case i:
              case r:
              case u:
              case c:
                return Ne;
              default:
                var tt = Ne && Ne.$$typeof;
                switch (tt) {
                  case a:
                  case l:
                  case s:
                  case m:
                  case f:
                  case o:
                    return tt;
                  default:
                    return _e;
                }
            }
          case n:
            return _e;
        }
      }
    }
    var x = l, N = o, U = e, te = s, v = t, _ = m, z = f, Q = n, Z = i, G = r, q = u, oe = c, xe = !1, ye = !1;
    function h($) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I($) {
      return ye || (ye = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H($) {
      return E($) === l;
    }
    function y($) {
      return E($) === o;
    }
    function B($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function ne($) {
      return E($) === s;
    }
    function M($) {
      return E($) === t;
    }
    function W($) {
      return E($) === m;
    }
    function Y($) {
      return E($) === f;
    }
    function re($) {
      return E($) === n;
    }
    function K($) {
      return E($) === i;
    }
    function Ee($) {
      return E($) === r;
    }
    function D($) {
      return E($) === u;
    }
    function Pe($) {
      return E($) === c;
    }
    ge.ContextConsumer = x, ge.ContextProvider = N, ge.Element = U, ge.ForwardRef = te, ge.Fragment = v, ge.Lazy = _, ge.Memo = z, ge.Portal = Q, ge.Profiler = Z, ge.StrictMode = G, ge.Suspense = q, ge.SuspenseList = oe, ge.isAsyncMode = h, ge.isConcurrentMode = I, ge.isContextConsumer = H, ge.isContextProvider = y, ge.isElement = B, ge.isForwardRef = ne, ge.isFragment = M, ge.isLazy = W, ge.isMemo = Y, ge.isPortal = re, ge.isProfiler = K, ge.isStrictMode = Ee, ge.isSuspense = D, ge.isSuspenseList = Pe, ge.isValidElementType = j, ge.typeOf = E;
  }()), ge;
}
process.env.NODE_ENV === "production" ? mr.exports = Ip() : mr.exports = _p();
var jp = mr.exports;
const Dp = /* @__PURE__ */ $t(jp);
function zp(e) {
  const n = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof n == "string" && n.replace(/[ \t\n\f\r]/g, "") === "";
}
function Lp(e) {
  return e.join(" ").trim();
}
function Np(e, n) {
  const t = n || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
var zr = { exports: {} }, so = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Mp = /\n/g, $p = /^\s*/, Bp = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Up = /^:\s*/, qp = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Hp = /^[;\s]*/, Vp = /^\s+|\s+$/g, Wp = `
`, uo = "/", co = "*", ct = "", Yp = "comment", Gp = "declaration", Jp = function(e, n) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  n = n || {};
  var t = 1, r = 1;
  function i(d) {
    var g = d.match(Mp);
    g && (t += g.length);
    var b = d.lastIndexOf(Wp);
    r = ~b ? d.length - b : r + d.length;
  }
  function o() {
    var d = { line: t, column: r };
    return function(g) {
      return g.position = new l(d), u(), g;
    };
  }
  function l(d) {
    this.start = d, this.end = { line: t, column: r }, this.source = n.source;
  }
  l.prototype.content = e;
  function a(d) {
    var g = new Error(
      n.source + ":" + t + ":" + r + ": " + d
    );
    if (g.reason = d, g.filename = n.source, g.line = t, g.column = r, g.source = e, !n.silent)
      throw g;
  }
  function s(d) {
    var g = d.exec(e);
    if (g) {
      var b = g[0];
      return i(b), e = e.slice(b.length), g;
    }
  }
  function u() {
    s($p);
  }
  function c(d) {
    var g;
    for (d = d || []; g = f(); )
      g !== !1 && d.push(g);
    return d;
  }
  function f() {
    var d = o();
    if (!(uo != e.charAt(0) || co != e.charAt(1))) {
      for (var g = 2; ct != e.charAt(g) && (co != e.charAt(g) || uo != e.charAt(g + 1)); )
        ++g;
      if (g += 2, ct === e.charAt(g - 1))
        return a("End of comment missing");
      var b = e.slice(2, g - 2);
      return r += 2, i(b), e = e.slice(g), r += 2, d({
        type: Yp,
        comment: b
      });
    }
  }
  function m() {
    var d = o(), g = s(Bp);
    if (g) {
      if (f(), !s(Up))
        return a("property missing ':'");
      var b = s(qp), w = d({
        type: Gp,
        property: fo(g[0].replace(so, ct)),
        value: b ? fo(b[0].replace(so, ct)) : ct
      });
      return s(Hp), w;
    }
  }
  function p() {
    var d = [];
    c(d);
    for (var g; g = m(); )
      g !== !1 && (d.push(g), c(d));
    return d;
  }
  return u(), p();
};
function fo(e) {
  return e ? e.replace(Vp, ct) : ct;
}
var Kp = Jp;
function Fl(e, n) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  for (var r, i = Kp(e), o = typeof n == "function", l, a, s = 0, u = i.length; s < u; s++)
    r = i[s], l = r.property, a = r.value, o ? n(l, a, r) : a && (t || (t = {}), t[l] = a);
  return t;
}
zr.exports = Fl;
zr.exports.default = Fl;
var Xp = zr.exports;
const Qp = /* @__PURE__ */ $t(Xp), gr = {}.hasOwnProperty, Zp = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Il(e, n) {
  const t = [];
  let r = -1, i;
  for (; ++r < n.children.length; )
    i = n.children[r], i.type === "element" ? t.push(eh(e, i, r, n)) : i.type === "text" ? (n.type !== "element" || !Zp.has(n.tagName) || !zp(i)) && t.push(i.value) : i.type === "raw" && !e.options.skipHtml && t.push(i.value);
  return t;
}
function eh(e, n, t, r) {
  const i = e.options, o = i.transformLinkUri === void 0 ? Vs : i.transformLinkUri, l = e.schema, a = n.tagName, s = {};
  let u = l, c;
  if (l.space === "html" && a === "svg" && (u = Rp, e.schema = u), n.properties)
    for (c in n.properties)
      gr.call(n.properties, c) && nh(s, c, n.properties[c], e);
  (a === "ol" || a === "ul") && e.listDepth++;
  const f = Il(e, n);
  (a === "ol" || a === "ul") && e.listDepth--, e.schema = l;
  const m = n.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, p = i.components && gr.call(i.components, a) ? i.components[a] : a, d = typeof p == "string" || p === Re.Fragment;
  if (!Dp.isValidElementType(p))
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
    const g = th(n);
    s.checked = g && g.properties ? !!g.properties.checked : null, s.index = Jn(r, n), s.ordered = r.tagName === "ol";
  }
  return !d && (a === "ol" || a === "ul") && (s.ordered = a === "ol", s.depth = e.listDepth), (a === "td" || a === "th") && (s.align && (s.style || (s.style = {}), s.style.textAlign = s.align, delete s.align), d || (s.isHeader = a === "th")), !d && a === "tr" && r.type === "element" && (s.isHeader = r.tagName === "thead"), i.sourcePos && (s["data-sourcepos"] = oh(m)), !d && i.rawSourcePos && (s.sourcePosition = n.position), !d && i.includeElementIndex && (s.index = Jn(r, n), s.siblingCount = Jn(r)), d || (s.node = n), f.length > 0 ? Re.createElement(p, s, f) : Re.createElement(p, s);
}
function th(e) {
  let n = -1;
  for (; ++n < e.children.length; ) {
    const t = e.children[n];
    if (t.type === "element" && t.tagName === "input")
      return t;
  }
  return null;
}
function Jn(e, n) {
  let t = -1, r = 0;
  for (; ++t < e.children.length && e.children[t] !== n; )
    e.children[t].type === "element" && r++;
  return r;
}
function nh(e, n, t, r) {
  const i = Tp(r.schema, n);
  let o = t;
  o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? Np(o) : Lp(o)), i.property === "style" && typeof o == "string" && (o = rh(o)), i.space && i.property ? e[gr.call(oo, i.property) ? oo[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o));
}
function rh(e) {
  const n = {};
  try {
    Qp(e, t);
  } catch {
  }
  return n;
  function t(r, i) {
    const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    n[o.replace(/-([a-z])/g, ih)] = i;
  }
}
function ih(e, n) {
  return n.toUpperCase();
}
function oh(e) {
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
const po = {}.hasOwnProperty, lh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Zt = {
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
function Lr(e) {
  for (const o in Zt)
    if (po.call(Zt, o) && po.call(e, o)) {
      const l = Zt[o];
      console.warn(
        `[react-markdown] Warning: please ${l.to ? `use \`${l.to}\` instead of` : "remove"} \`${o}\` (see <${lh}#${l.id}> for more info)`
      ), delete Zt[o];
    }
  const n = au().use(yf).use(e.remarkPlugins || []).use(sp, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(Fp, e), t = new Xo();
  typeof e.children == "string" ? t.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = n.runSync(n.parse(t), t);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let i = Re.createElement(
    Re.Fragment,
    {},
    Il({ options: e, schema: Op, listDepth: 0 }, r)
  );
  return e.className && (i = Re.createElement("div", { className: e.className }, i)), i;
}
Lr.propTypes = {
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
function ho(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
const ah = Nr(/\p{P}/u), sh = Nr(/[!-/:-@[-`{-~]/);
function uh(e) {
  return sh(e) || ah(e);
}
const ch = Nr(/\s/);
function Nr(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function fh(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Mr = (
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
      return mh;
    if (typeof e == "function")
      return vn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? ph(e) : hh(e);
    if (typeof e == "string")
      return dh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function ph(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Mr(e[t]);
  return vn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function hh(e) {
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
function dh(e) {
  return vn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function vn(e) {
  return n;
  function n(t, r, i) {
    return !!(gh(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function mh() {
  return !0;
}
function gh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const _l = [], yh = !0, mo = !1, bh = "skip";
function kh(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = Mr(i), l = r ? -1 : 1;
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
      let p = _l, d, g, b;
      if ((!n || o(s, u, c[c.length - 1] || void 0)) && (p = wh(t(s, c)), p[0] === mo))
        return p;
      if ("children" in s && s.children) {
        const w = (
          /** @type {UnistParent} */
          s
        );
        if (w.children && p[0] !== bh)
          for (g = (r ? w.children.length : -1) + l, b = c.concat(w); g > -1 && g < w.children.length; ) {
            const P = w.children[g];
            if (d = a(P, g, b)(), d[0] === mo)
              return d;
            g = typeof d[1] == "number" ? d[1] : g + l;
          }
      }
      return p;
    }
  }
}
function wh(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [yh, e] : e == null ? _l : [e];
}
function xh(e, n, t) {
  const i = Mr((t || {}).ignore || []), o = vh(n);
  let l = -1;
  for (; ++l < o.length; )
    kh(e, "text", a);
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
    let w = !1, P = [];
    m.lastIndex = 0;
    let C = m.exec(u.value);
    for (; C; ) {
      const j = C.index, E = {
        index: C.index,
        input: C.input,
        stack: [...c, u]
      };
      let x = p(...C, E);
      if (typeof x == "string" && (x = x.length > 0 ? { type: "text", value: x } : void 0), x === !1 ? m.lastIndex = j + 1 : (d !== j && P.push({
        type: "text",
        value: u.value.slice(d, j)
      }), Array.isArray(x) ? P.push(...x) : x && P.push(x), d = j + C[0].length, w = !0), !m.global)
        break;
      C = m.exec(u.value);
    }
    return w ? (d < u.value.length && P.push({ type: "text", value: u.value.slice(d) }), f.children.splice(b, 1, ...P)) : P = [u], b + P.length;
  }
}
function vh(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([Eh(i[0]), Sh(i[1])]);
  }
  return n;
}
function Eh(e) {
  return typeof e == "string" ? new RegExp(fh(e), "g") : e;
}
function Sh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Kn = "phrasing", Xn = ["autolink", "link", "image", "label"];
function Ch() {
  return {
    transforms: [Ih],
    enter: {
      literalAutolink: Ah,
      literalAutolinkEmail: Qn,
      literalAutolinkHttp: Qn,
      literalAutolinkWww: Qn
    },
    exit: {
      literalAutolink: Fh,
      literalAutolinkEmail: Rh,
      literalAutolinkHttp: Ph,
      literalAutolinkWww: Oh
    }
  };
}
function Th() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Kn,
        notInConstruct: Xn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Kn,
        notInConstruct: Xn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Kn,
        notInConstruct: Xn
      }
    ]
  };
}
function Ah(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Qn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Ph(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Oh(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function Rh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Fh(e) {
  this.exit(e);
}
function Ih(e) {
  xh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, _h],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, jh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function _h(e, n, t, r, i) {
  let o = "";
  if (!jl(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !Dh(t)))
    return !1;
  const l = zh(t + r);
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
function jh(e, n, t, r) {
  return (
    // Not an expected previous character.
    !jl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function Dh(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function zh(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = ho(e, "(");
  let o = ho(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function jl(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || ch(t) || uh(t)) && (!n || t !== 47);
}
function Dl(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
zl.peek = Yh;
function Lh() {
  return {
    enter: {
      gfmFootnoteDefinition: Mh,
      gfmFootnoteDefinitionLabelString: $h,
      gfmFootnoteCall: qh,
      gfmFootnoteCallString: Hh
    },
    exit: {
      gfmFootnoteDefinition: Uh,
      gfmFootnoteDefinitionLabelString: Bh,
      gfmFootnoteCall: Wh,
      gfmFootnoteCallString: Vh
    }
  };
}
function Nh() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: Gh, footnoteReference: zl }
  };
}
function Mh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function $h() {
  this.buffer();
}
function Bh(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = Dl(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Uh(e) {
  this.exit(e);
}
function qh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Hh() {
  this.buffer();
}
function Vh(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = Dl(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Wh(e) {
  this.exit(e);
}
function zl(e, n, t, r) {
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
function Yh() {
  return "[";
}
function Gh(e, n, t, r) {
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
    t.indentLines(t.containerFlow(e, i.current()), Jh)
  ), l(), o;
}
function Jh(e, n, t) {
  return n === 0 ? e : (t ? "" : "    ") + e;
}
const Kh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Ll.peek = td;
function Xh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Zh },
    exit: { strikethrough: ed }
  };
}
function Qh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Kh
      }
    ],
    handlers: { delete: Ll }
  };
}
function Zh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function ed(e) {
  this.exit(e);
}
function Ll(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function td() {
  return "~";
}
function nd(e, n = {}) {
  const t = (n.align || []).concat(), r = n.stringLength || id, i = [], o = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const d = [], g = [];
    let b = -1;
    for (e[u].length > s && (s = e[u].length); ++b < e[u].length; ) {
      const w = rd(e[u][b]);
      if (n.alignDelimiters !== !1) {
        const P = r(w);
        g[b] = P, (a[b] === void 0 || P > a[b]) && (a[b] = P);
      }
      d.push(w);
    }
    o[u] = d, l[u] = g;
  }
  let c = -1;
  if (typeof t == "object" && "length" in t)
    for (; ++c < s; )
      i[c] = go(t[c]);
  else {
    const d = go(t);
    for (; ++c < s; )
      i[c] = d;
  }
  c = -1;
  const f = [], m = [];
  for (; ++c < s; ) {
    const d = i[c];
    let g = "", b = "";
    d === 99 ? (g = ":", b = ":") : d === 108 ? g = ":" : d === 114 && (b = ":");
    let w = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - g.length - b.length
    );
    const P = g + "-".repeat(w) + b;
    n.alignDelimiters !== !1 && (w = g.length + w + b.length, w > a[c] && (a[c] = w), m[c] = w), f[c] = P;
  }
  o.splice(1, 0, f), l.splice(1, 0, m), u = -1;
  const p = [];
  for (; ++u < o.length; ) {
    const d = o[u], g = l[u];
    c = -1;
    const b = [];
    for (; ++c < s; ) {
      const w = d[c] || "";
      let P = "", C = "";
      if (n.alignDelimiters !== !1) {
        const j = a[c] - (g[c] || 0), E = i[c];
        E === 114 ? P = " ".repeat(j) : E === 99 ? j % 2 ? (P = " ".repeat(j / 2 + 0.5), C = " ".repeat(j / 2 - 0.5)) : (P = " ".repeat(j / 2), C = P) : C = " ".repeat(j);
      }
      n.delimiterStart !== !1 && !c && b.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && w === "") && (n.delimiterStart !== !1 || c) && b.push(" "), n.alignDelimiters !== !1 && b.push(P), b.push(w), n.alignDelimiters !== !1 && b.push(C), n.padding !== !1 && b.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && b.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join("")
    );
  }
  return p.join(`
`);
}
function rd(e) {
  return e == null ? "" : String(e);
}
function id(e) {
  return e.length;
}
function go(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function od(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(
    t.containerFlow(e, o.current()),
    ld
  );
  return i(), l;
}
function ld(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function ad(e, n) {
  return yo(e, n.inConstruct, !0) && !yo(e, n.notInConstruct, !1);
}
function yo(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function bo(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && ad(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function sd(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function ud(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function cd(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function fd(e, n, t, r) {
  const i = cd(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (ud(e, t)) {
    const f = t.enter("codeIndented"), m = t.indentLines(o, pd);
    return f(), m;
  }
  const a = t.createTracker(r), s = i.repeat(Math.max(sd(o, i) + 1, 3)), u = t.enter("codeFenced");
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
function pd(e, n, t) {
  return (t ? "" : "    ") + e;
}
function $r(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function hd(e, n, t, r) {
  const i = $r(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
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
function dd(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
Nl.peek = md;
function Nl(e, n, t, r) {
  const i = dd(t), o = t.enter("emphasis"), l = t.createTracker(r);
  let a = l.move(i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i), o(), a;
}
function md(e, n, t) {
  return t.options.emphasis || "*";
}
const Ml = (
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
      return kd;
    if (typeof e == "function")
      return En(e);
    if (typeof e == "object")
      return Array.isArray(e) ? gd(e) : yd(e);
    if (typeof e == "string")
      return bd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function gd(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Ml(e[t]);
  return En(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function yd(e) {
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
function bd(e) {
  return En(n);
  function n(t) {
    return t && t.type === e;
  }
}
function En(e) {
  return n;
  function n(t, r, i) {
    return !!(wd(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function kd() {
  return !0;
}
function wd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const $l = [], xd = !0, yr = !1, vd = "skip";
function Ed(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = Ml(i), l = r ? -1 : 1;
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
      let p = $l, d, g, b;
      if ((!n || o(s, u, c[c.length - 1] || void 0)) && (p = Sd(t(s, c)), p[0] === yr))
        return p;
      if ("children" in s && s.children) {
        const w = (
          /** @type {UnistParent} */
          s
        );
        if (w.children && p[0] !== vd)
          for (g = (r ? w.children.length : -1) + l, b = c.concat(w); g > -1 && g < w.children.length; ) {
            const P = w.children[g];
            if (d = a(P, g, b)(), d[0] === yr)
              return d;
            g = typeof d[1] == "number" ? d[1] : g + l;
          }
      }
      return p;
    }
  }
}
function Sd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [xd, e] : e == null ? $l : [e];
}
function Cd(e, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), Ed(e, o, a, i);
  function a(s, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(s) : void 0;
    return l(s, f, c);
  }
}
const Td = {};
function Bl(e, n) {
  const t = n || Td, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Ul(e, r, i);
}
function Ul(e, n, t) {
  if (Ad(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ko(e.children, n, t);
  }
  return Array.isArray(e) ? ko(e, n, t) : "";
}
function ko(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ul(e[i], n, t);
  return r.join("");
}
function Ad(e) {
  return !!(e && typeof e == "object");
}
function Pd(e, n) {
  let t = !1;
  return Cd(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, yr;
  }), !!((!e.depth || e.depth < 3) && Bl(e) && (n.options.setext || t));
}
function Od(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (Pd(e, t)) {
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
ql.peek = Rd;
function ql(e) {
  return e.value || "";
}
function Rd() {
  return "<";
}
Hl.peek = Fd;
function Hl(e, n, t, r) {
  const i = $r(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
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
function Fd() {
  return "!";
}
Vl.peek = Id;
function Vl(e, n, t, r) {
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
function Id() {
  return "!";
}
Wl.peek = _d;
function Wl(e, n, t) {
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
function _d() {
  return "`";
}
function Yl(e, n) {
  const t = Bl(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Gl.peek = jd;
function Gl(e, n, t, r) {
  const i = $r(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let a, s;
  if (Yl(e, t)) {
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
function jd(e, n, t) {
  return Yl(e, t) ? "<" : "[";
}
Jl.peek = Dd;
function Jl(e, n, t, r) {
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
function Dd() {
  return "[";
}
function Br(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function zd(e) {
  const n = Br(e), t = e.options.bulletOther;
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
function Ld(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function Kl(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function Nd(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e.ordered ? Ld(t) : Br(t);
  const a = e.ordered ? l === "." ? ")" : "." : zd(t);
  let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = !0), Kl(t) === l && c
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
function Md(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function $d(e, n, t, r) {
  const i = Md(t);
  let o = t.bulletCurrent || Br(t);
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
function Bd(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
  return o(), i(), l;
}
const Xl = (
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
      return Vd;
    if (typeof e == "function")
      return Sn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Ud(e) : qd(e);
    if (typeof e == "string")
      return Hd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Ud(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Xl(e[t]);
  return Sn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function qd(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Sn(t);
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
function Hd(e) {
  return Sn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function Sn(e) {
  return n;
  function n(t, r, i) {
    return !!(Wd(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Vd() {
  return !0;
}
function Wd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Yd = (
  /** @type {(node?: unknown) => node is PhrasingContent} */
  Xl([
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
function Gd(e, n, t, r) {
  return (e.children.some(function(l) {
    return Yd(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function Jd(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
Ql.peek = Kd;
function Ql(e, n, t, r) {
  const i = Jd(t), o = t.enter("strong"), l = t.createTracker(r);
  let a = l.move(i + i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i + i), o(), a;
}
function Kd(e, n, t) {
  return t.options.strong || "*";
}
function Xd(e, n, t, r) {
  return t.safe(e.value, r);
}
function Qd(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function Zd(e, n, t) {
  const r = (Kl(t) + (t.options.ruleSpaces ? " " : "")).repeat(Qd(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Zl = {
  blockquote: od,
  break: bo,
  code: fd,
  definition: hd,
  emphasis: Nl,
  hardBreak: bo,
  heading: Od,
  html: ql,
  image: Hl,
  imageReference: Vl,
  inlineCode: Wl,
  link: Gl,
  linkReference: Jl,
  list: Nd,
  listItem: $d,
  paragraph: Bd,
  root: Gd,
  strong: Ql,
  text: Xd,
  thematicBreak: Zd
};
function em() {
  return {
    enter: {
      table: tm,
      tableData: wo,
      tableHeader: wo,
      tableRow: rm
    },
    exit: {
      codeText: im,
      table: nm,
      tableData: Zn,
      tableHeader: Zn,
      tableRow: Zn
    }
  };
}
function tm(e) {
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
function nm(e) {
  this.exit(e), this.data.inTable = void 0;
}
function rm(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Zn(e) {
  this.exit(e);
}
function wo(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function im(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, om));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function om(e, n) {
  return n === "|" ? n : e;
}
function lm(e) {
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
  function l(p, d, g, b) {
    return u(c(p, g, b), p.align);
  }
  function a(p, d, g, b) {
    const w = f(p, g, b), P = u([w]);
    return P.slice(0, P.indexOf(`
`));
  }
  function s(p, d, g, b) {
    const w = g.enter("tableCell"), P = g.enter("phrasing"), C = g.containerPhrasing(p, {
      ...b,
      before: o,
      after: o
    });
    return P(), w(), C;
  }
  function u(p, d) {
    return nd(p, {
      align: d,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: t,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(p, d, g) {
    const b = p.children;
    let w = -1;
    const P = [], C = d.enter("table");
    for (; ++w < b.length; )
      P[w] = f(b[w], d, g);
    return C(), P;
  }
  function f(p, d, g) {
    const b = p.children;
    let w = -1;
    const P = [], C = d.enter("tableRow");
    for (; ++w < b.length; )
      P[w] = s(b[w], p, d, g);
    return C(), P;
  }
  function m(p, d, g) {
    let b = Zl.inlineCode(p, d, g);
    return g.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function am() {
  return {
    exit: {
      taskListCheckValueChecked: xo,
      taskListCheckValueUnchecked: xo,
      paragraph: um
    }
  };
}
function sm() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: cm }
  };
}
function xo(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function um(e) {
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
function cm(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
  o && a.move(l);
  let s = Zl.listItem(e, n, t, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function fm() {
  return [
    Ch(),
    Lh(),
    Xh(),
    em(),
    am()
  ];
}
function pm(e) {
  return {
    extensions: [
      Th(),
      Nh(),
      Qh(),
      lm(e),
      sm()
    ]
  };
}
function hm(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
const vo = {}.hasOwnProperty;
function dm(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    mm(n, e[t]);
  return n;
}
function mm(e, n) {
  let t;
  for (t in n) {
    const i = (vo.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        vo.call(i, l) || (i[l] = []);
        const a = o[l];
        gm(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function gm(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  hm(e, 0, 0, r);
}
const ym = Vt(/\p{P}/u), Lt = Vt(/[A-Za-z]/), Ur = Vt(/[\dA-Za-z]/);
function bm(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const km = Vt(/[!-/:-@[-`{-~]/);
function vt(e) {
  return e !== null && (e < 0 || e === 32);
}
function ea(e) {
  return km(e) || ym(e);
}
const Nt = Vt(/\s/);
function Vt(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
const wm = {
  tokenize: Tm,
  partial: !0
}, ta = {
  tokenize: Am,
  partial: !0
}, na = {
  tokenize: Pm,
  partial: !0
}, ra = {
  tokenize: Om,
  partial: !0
}, xm = {
  tokenize: Rm,
  partial: !0
}, ia = {
  tokenize: Sm,
  previous: la
}, oa = {
  tokenize: Cm,
  previous: aa
}, et = {
  tokenize: Em,
  previous: sa
}, Xe = {};
function vm() {
  return {
    text: Xe
  };
}
let ut = 48;
for (; ut < 123; )
  Xe[ut] = et, ut++, ut === 58 ? ut = 65 : ut === 91 && (ut = 97);
Xe[43] = et;
Xe[45] = et;
Xe[46] = et;
Xe[95] = et;
Xe[72] = [et, oa];
Xe[104] = [et, oa];
Xe[87] = [et, ia];
Xe[119] = [et, ia];
function Em(e, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(f) {
    return !br(f) || !sa.call(r, r.previous) || qr(r.events) ? t(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(f));
  }
  function a(f) {
    return br(f) ? (e.consume(f), a) : f === 64 ? (e.consume(f), s) : t(f);
  }
  function s(f) {
    return f === 46 ? e.check(
      xm,
      c,
      u
    )(f) : f === 45 || f === 95 || Ur(f) ? (o = !0, e.consume(f), s) : c(f);
  }
  function u(f) {
    return e.consume(f), i = !0, s;
  }
  function c(f) {
    return o && i && Lt(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(f)) : t(f);
  }
}
function Sm(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !la.call(r, r.previous) || qr(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      wm,
      e.attempt(ta, e.attempt(na, o), t),
      t
    )(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
  }
}
function Cm(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(f) {
    return (f === 72 || f === 104) && aa.call(r, r.previous) && !qr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), a) : t(f);
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
    return f === null || bm(f) || vt(f) || Nt(f) || ea(f) ? t(f) : e.attempt(ta, e.attempt(na, c), t)(f);
  }
  function c(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(f);
  }
}
function Tm(e, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function Am(e, n, t) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(ra, s, a)(u) : u === null || vt(u) || Nt(u) || u !== 45 && ea(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? t(u) : n(u);
  }
}
function Pm(e, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(ra, n, o)(l) : l === null || vt(l) || Nt(l) ? n(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Om(e, n, t) {
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
function Rm(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Ur(o) ? t(o) : n(o);
  }
}
function la(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || vt(e);
}
function aa(e) {
  return !Lt(e);
}
function sa(e) {
  return !(e === 47 || br(e));
}
function br(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Ur(e);
}
function qr(e) {
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
function Fm(e) {
  return e !== null && e < -2;
}
function fn(e) {
  return e !== null && (e < 0 || e === 32);
}
function kr(e) {
  return e === -2 || e === -1 || e === 32;
}
function Hr(e, n, t, r) {
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
const Im = {
  tokenize: _m,
  partial: !0
};
function _m(e, n, t) {
  return r;
  function r(o) {
    return kr(o) ? Hr(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Fm(o) ? n(o) : t(o);
  }
}
function Vr(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const jm = {
  tokenize: Um,
  partial: !0
};
function Dm() {
  return {
    document: {
      91: {
        tokenize: Mm,
        continuation: {
          tokenize: $m
        },
        exit: Bm
      }
    },
    text: {
      91: {
        tokenize: Nm
      },
      93: {
        add: "after",
        tokenize: zm,
        resolveTo: Lm
      }
    }
  };
}
function zm(e, n, t) {
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
    const u = Vr(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
  }
}
function Lm(e, n) {
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
function Nm(e, n, t) {
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
      f === null || f === 91 || fn(f)
    )
      return t(f);
    if (f === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteCallString");
      return i.includes(Vr(r.sliceSerialize(m))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(f);
    }
    return fn(f) || (l = !0), o++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), o++, u) : u(f);
  }
}
function Mm(e, n, t) {
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
      d === null || d === 91 || fn(d)
    )
      return t(d);
    if (d === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Vr(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), m;
    }
    return fn(d) || (a = !0), l++, e.consume(d), d === 92 ? f : c;
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, c) : c(d);
  }
  function m(d) {
    return d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), i.includes(o) || i.push(o), Hr(
      e,
      p,
      "gfmFootnoteDefinitionWhitespace"
    )) : t(d);
  }
  function p(d) {
    return n(d);
  }
}
function $m(e, n, t) {
  return e.check(Im, n, e.attempt(jm, n, t));
}
function Bm(e) {
  e.exit("gfmFootnoteDefinition");
}
function Um(e, n, t) {
  const r = this;
  return Hr(
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
function er(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
const qm = Wr(/\p{P}/u), Hm = Wr(/[!-/:-@[-`{-~]/);
function Vm(e) {
  return e !== null && (e < 0 || e === 32);
}
function Wm(e) {
  return Hm(e) || qm(e);
}
const Ym = Wr(/\s/);
function Wr(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function Eo(e) {
  if (e === null || Vm(e) || Ym(e))
    return 1;
  if (Wm(e))
    return 2;
}
function Gm(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
function Jm(e) {
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
            p && er(
              m,
              m.length,
              0,
              Gm(p, l.slice(u + 1, s), a)
            ), er(m, m.length, 0, [
              ["exit", f, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["exit", c, a]
            ]), er(l, u - 1, s - u + 3, m), s = u + m.length - 2;
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
      const g = Eo(u);
      if (d === 126)
        return f > 1 ? s(d) : (l.consume(d), f++, p);
      if (f < 2 && !t)
        return s(d);
      const b = l.exit("strikethroughSequenceTemporary"), w = Eo(d);
      return b._open = !w || w === 2 && !!g, b._close = !g || g === 2 && !!w, a(d);
    }
  }
}
function en(e) {
  return e !== null && e < -2;
}
function So(e) {
  return e !== null && (e < 0 || e === 32);
}
function ft(e) {
  return e === -2 || e === -1 || e === 32;
}
function _t(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return ft(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return ft(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
class Km {
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
    Xm(this, n, t, r);
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
function Xm(e, n, t, r) {
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
function Qm(e, n) {
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
function Zm() {
  return {
    flow: {
      null: {
        tokenize: eg,
        resolveAll: tg
      }
    }
  };
}
function eg(e, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(v) {
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
    return Q === x && r.parser.lazy[r.now().line] ? t(v) : Q(v);
  }
  function s(v) {
    return e.enter("tableHead"), e.enter("tableRow"), u(v);
  }
  function u(v) {
    return v === 124 || (l = !0, o += 1), c(v);
  }
  function c(v) {
    return v === null ? t(v) : en(v) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), p) : t(v) : ft(v) ? _t(e, c, "whitespace")(v) : (o += 1, l && (l = !1, i += 1), v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), l = !0, c) : (e.enter("data"), f(v)));
  }
  function f(v) {
    return v === null || v === 124 || So(v) ? (e.exit("data"), c(v)) : (e.consume(v), v === 92 ? m : f);
  }
  function m(v) {
    return v === 92 || v === 124 ? (e.consume(v), f) : f(v);
  }
  function p(v) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(v) : (e.enter("tableDelimiterRow"), l = !1, ft(v) ? _t(
      e,
      d,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(v) : d(v));
  }
  function d(v) {
    return v === 45 || v === 58 ? b(v) : v === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), g) : E(v);
  }
  function g(v) {
    return ft(v) ? _t(e, b, "whitespace")(v) : b(v);
  }
  function b(v) {
    return v === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), w) : v === 45 ? (o += 1, w(v)) : v === null || en(v) ? j(v) : E(v);
  }
  function w(v) {
    return v === 45 ? (e.enter("tableDelimiterFiller"), P(v)) : E(v);
  }
  function P(v) {
    return v === 45 ? (e.consume(v), P) : v === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(v));
  }
  function C(v) {
    return ft(v) ? _t(e, j, "whitespace")(v) : j(v);
  }
  function j(v) {
    return v === 124 ? d(v) : v === null || en(v) ? !l || i !== o ? E(v) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(v)) : E(v);
  }
  function E(v) {
    return t(v);
  }
  function x(v) {
    return e.enter("tableRow"), N(v);
  }
  function N(v) {
    return v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), N) : v === null || en(v) ? (e.exit("tableRow"), n(v)) : ft(v) ? _t(e, N, "whitespace")(v) : (e.enter("data"), U(v));
  }
  function U(v) {
    return v === null || v === 124 || So(v) ? (e.exit("data"), N(v)) : (e.consume(v), v === 92 ? te : U);
  }
  function te(v) {
    return v === 92 || v === 124 ? (e.consume(v), U) : U(v);
  }
}
function tg(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, c, f;
  const m = new Km();
  for (; ++t < e.length; ) {
    const p = e[t], d = p[1];
    p[0] === "enter" ? d.type === "tableHead" ? (a = !1, s !== 0 && (Co(m, n, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(t, 0, [["enter", u, n]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = !0, f = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], a && (a = !1, c = {
      type: "tableBody",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(t, 0, [["enter", c, n]])), i = d.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], f = tn(
      m,
      n,
      o,
      i,
      void 0,
      f
    ), o = [0, 0, 0, 0]), l[2] = t)) : d.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], f = tn(
      m,
      n,
      o,
      i,
      void 0,
      f
    )), o = l, l = [o[1], t, 0, 0])) : d.type === "tableHead" ? (a = !0, s = t) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], f = tn(
      m,
      n,
      o,
      i,
      t,
      f
    )) : l[1] !== 0 && (f = tn(m, n, l, i, t, f)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (s !== 0 && Co(m, n, s, u, c), m.consume(n.events), t = -1; ++t < n.events.length; ) {
    const p = n.events[t];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Qm(n.events, t));
  }
  return e;
}
function tn(e, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, yt(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const s = yt(n.events, t[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const u = yt(n.events, t[2]), c = yt(n.events, t[3]), f = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, c)
    };
    if (e.add(t[2], 0, [["enter", f, n]]), r !== 2) {
      const m = n.events[t[2]], p = n.events[t[3]];
      if (m[1].end = Object.assign({}, p[1].end), m[1].type = "chunkText", m[1].contentType = "text", t[3] > t[2] + 1) {
        const d = t[2] + 1, g = t[3] - t[2] - 1;
        e.add(d, g, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", f, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, yt(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function Co(e, n, t, r, i) {
  const o = [], l = yt(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function yt(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
function ng(e) {
  return e !== null && e < -2;
}
function rg(e) {
  return e !== null && (e < 0 || e === 32);
}
function wr(e) {
  return e === -2 || e === -1 || e === 32;
}
function ig(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return wr(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return wr(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const og = {
  tokenize: ag
};
function lg() {
  return {
    text: {
      91: og
    }
  };
}
function ag(e, n, t) {
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
    return rg(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
  }
  function a(s) {
    return ng(s) ? n(s) : wr(s) ? e.check(
      {
        tokenize: sg
      },
      n,
      t
    )(s) : t(s);
  }
}
function sg(e, n, t) {
  return ig(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function ug(e) {
  return dm([
    vm(),
    Dm(),
    Jm(e),
    Zm(),
    lg()
  ]);
}
const cg = {};
function ua(e) {
  const n = (
    /** @type {Processor} */
    this
  ), t = e || cg, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(ug(t)), o.push(fm()), l.push(pm(t));
}
function gg({ config: e, rules: n }) {
  const t = Mt(), r = To(), i = () => r.current.scrollIntoView(), o = sessionStorage.getItem("gameID");
  return /* @__PURE__ */ T.jsxs("div", { ref: r, className: "flex flex-col items-center m-2 md:m-12", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md", children: [
      /* @__PURE__ */ T.jsxs("article", { className: "prose dark:prose-invert max-w-fit fade-in", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col md:flex-row w-full h-full justify-between items-center", children: [
          /* @__PURE__ */ T.jsxs("div", { className: "text-4xl font-black mb-6 md:mb-0", children: [
            /* @__PURE__ */ T.jsx("span", { className: `text-5xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
            " Game Rules"
          ] }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => t(o ? "/" + o : "/"), className: "bg-blue-500 px-6 py-2 font-bold italic", children: o ? "Back" : "Play Online" })
        ] }),
        /* @__PURE__ */ T.jsx(Lr, { children: n, remarkPlugins: [ua] })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "mt-12 flex flex-col w-full items-center", children: /* @__PURE__ */ T.jsx("button", { className: "text-zinc-500 font-light italic", onClick: i, children: "back to top 👆" }) })
    ] }),
    /* @__PURE__ */ T.jsx("div", { className: "mt-8", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] });
}
function yg({ config: e }) {
  const n = Mt(), t = To(), r = sessionStorage.getItem("gameID"), i = `
Find a bug? There are two ways to send a report:
1. Send an email to support@quibbble.com.
2. Join our [Discord](https://discord.gg/VKvjutuhUp) and send a report in the **#bugs** channel.

In your bug report message please include the following:
1. The URL of the game, for example https://tsuro.quibbble.com/excited-cat-23.
2. A description of the bug:
    - What happened?
    - What should have happened?
3. Optionally, screenshots of the game to help diagnose the issue.

Reports go a long way to improving the site for everyone so they are greatly appreciated. As always, thanks for playing and contributing to [quibbble.com](https://quibbble.com).

~ *Chris*
`;
  return /* @__PURE__ */ T.jsxs("div", { ref: t, className: "flex flex-col items-center m-2 md:m-12", children: [
    /* @__PURE__ */ T.jsx("div", { className: "w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md", children: /* @__PURE__ */ T.jsxs("article", { className: "prose dark:prose-invert max-w-fit fade-in", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col md:flex-row w-full h-full justify-between items-center", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "text-4xl font-black mb-6 md:mb-0", children: [
          /* @__PURE__ */ T.jsx("span", { className: `text-5xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
          " Bug Report"
        ] }),
        /* @__PURE__ */ T.jsx("button", { onClick: () => n(r ? "/" + r : "/"), className: "bg-blue-500 px-6 py-2 font-bold italic", children: r ? "Back" : "Play Online" })
      ] }),
      /* @__PURE__ */ T.jsx(Lr, { children: i, remarkPlugins: [ua] })
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "mt-8", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] });
}
export {
  yg as BugsPage,
  hg as DownPage,
  pn as Footer,
  mg as GamePage,
  dg as HomePage,
  gg as RulesPage
};
