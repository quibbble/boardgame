import Oe, { useEffect as ft, useState as pt, forwardRef as xa, useCallback as Ot, useRef as Ao } from "react";
import { useNavigate as Bt, useParams as wa } from "react-router-dom";
function Ut(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var er = { exports: {} }, Ft = {};
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
function va() {
  if (ei)
    return Ft;
  ei = 1;
  var e = Oe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, s, c) {
    var f, u = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), s.ref !== void 0 && (p = s.ref);
    for (f in s)
      r.call(s, f) && !o.hasOwnProperty(f) && (u[f] = s[f]);
    if (a && a.defaultProps)
      for (f in s = a.defaultProps, s)
        u[f] === void 0 && (u[f] = s[f]);
    return { $$typeof: t, type: a, key: d, ref: p, props: u, _owner: i.current };
  }
  return Ft.Fragment = n, Ft.jsx = l, Ft.jsxs = l, Ft;
}
var It = {};
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
function Ea() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function b(k) {
      if (k === null || typeof k != "object")
        return null;
      var R = m && k[m] || k[g];
      return typeof R == "function" ? R : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(k) {
      {
        for (var R = arguments.length, L = new Array(R > 1 ? R - 1 : 0), X = 1; X < R; X++)
          L[X - 1] = arguments[X];
        C("error", k, L);
      }
    }
    function C(k, R, L) {
      {
        var X = x.ReactDebugCurrentFrame, pe = X.getStackAddendum();
        pe !== "" && (R += "%s", L = L.concat([pe]));
        var be = L.map(function(ae) {
          return String(ae);
        });
        be.unshift("Warning: " + R), Function.prototype.apply.call(console[k], console, be);
      }
    }
    var j = !1, E = !1, w = !1, N = !1, U = !1, te;
    te = Symbol.for("react.module.reference");
    function v(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === o || U || k === i || k === c || k === f || N || k === p || j || E || w || typeof k == "object" && k !== null && (k.$$typeof === d || k.$$typeof === u || k.$$typeof === l || k.$$typeof === a || k.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === te || k.getModuleId !== void 0));
    }
    function _(k, R, L) {
      var X = k.displayName;
      if (X)
        return X;
      var pe = R.displayName || R.name || "";
      return pe !== "" ? L + "(" + pe + ")" : L;
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
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case a:
            var R = k;
            return z(R) + ".Consumer";
          case l:
            var L = k;
            return z(L._context) + ".Provider";
          case s:
            return _(k, k.render, "ForwardRef");
          case u:
            var X = k.displayName || null;
            return X !== null ? X : Q(k.type) || "Memo";
          case d: {
            var pe = k, be = pe._payload, ae = pe._init;
            try {
              return Q(ae(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, G = 0, oe, H, ue, we, h, F, q;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function B() {
      {
        if (G === 0) {
          oe = console.log, H = console.info, ue = console.warn, we = console.error, h = console.group, F = console.groupCollapsed, q = console.groupEnd;
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
              value: oe
            }),
            info: Z({}, k, {
              value: H
            }),
            warn: Z({}, k, {
              value: ue
            }),
            error: Z({}, k, {
              value: we
            }),
            group: Z({}, k, {
              value: h
            }),
            groupCollapsed: Z({}, k, {
              value: F
            }),
            groupEnd: Z({}, k, {
              value: q
            })
          });
        }
        G < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, W;
    function Y(k, R, L) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (pe) {
            var X = pe.stack.trim().match(/\n( *(at )?)/);
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
    function D(k, R) {
      if (!k || re)
        return "";
      {
        var L = K.get(k);
        if (L !== void 0)
          return L;
      }
      var X;
      re = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = M.current, M.current = null, B();
      try {
        if (R) {
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
`), Re = X.stack.split(`
`), Se = le.length - 1, Ce = Re.length - 1; Se >= 1 && Ce >= 0 && le[Se] !== Re[Ce]; )
            Ce--;
          for (; Se >= 1 && Ce >= 0; Se--, Ce--)
            if (le[Se] !== Re[Ce]) {
              if (Se !== 1 || Ce !== 1)
                do
                  if (Se--, Ce--, Ce < 0 || le[Se] !== Re[Ce]) {
                    var Me = `
` + le[Se].replace(" at new ", " at ");
                    return k.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", k.displayName)), typeof k == "function" && K.set(k, Me), Me;
                  }
                while (Se >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        re = !1, M.current = be, ne(), Error.prepareStackTrace = pe;
      }
      var gt = k ? k.displayName || k.name : "", Zr = gt ? Y(gt) : "";
      return typeof k == "function" && K.set(k, Zr), Zr;
    }
    function Pe(k, R, L) {
      return D(k, !1);
    }
    function $(k) {
      var R = k.prototype;
      return !!(R && R.isReactComponent);
    }
    function _e(k, R, L) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return D(k, $(k));
      if (typeof k == "string")
        return Y(k);
      switch (k) {
        case c:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case s:
            return Pe(k.render);
          case u:
            return _e(k.type, R, L);
          case d: {
            var X = k, pe = X._payload, be = X._init;
            try {
              return _e(be(pe), R, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, tt = {}, At = x.ReactDebugCurrentFrame;
    function dt(k) {
      if (k) {
        var R = k._owner, L = _e(k.type, k._source, R ? R.type : null);
        At.setExtraStackFrame(L);
      } else
        At.setExtraStackFrame(null);
    }
    function Gt(k, R, L, X, pe) {
      {
        var be = Function.call.bind(Ne);
        for (var ae in k)
          if (be(k, ae)) {
            var le = void 0;
            try {
              if (typeof k[ae] != "function") {
                var Re = Error((X || "React class") + ": " + L + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              le = k[ae](R, ae, X, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              le = Se;
            }
            le && !(le instanceof Error) && (dt(pe), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", L, ae, typeof le), dt(null)), le instanceof Error && !(le.message in tt) && (tt[le.message] = !0, dt(pe), A("Failed %s type: %s", L, le.message), dt(null));
          }
      }
    }
    var Jt = Array.isArray;
    function Pt(k) {
      return Jt(k);
    }
    function Sn(k) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, L = R && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return L;
      }
    }
    function Cn(k) {
      try {
        return Kt(k), !1;
      } catch {
        return !0;
      }
    }
    function Kt(k) {
      return "" + k;
    }
    function Xt(k) {
      if (Cn(k))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sn(k)), Kt(k);
    }
    var S = x.ReactCurrentOwner, I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V, ce, fe;
    fe = {};
    function je(k) {
      if (Ne.call(k, "ref")) {
        var R = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Ve(k) {
      if (Ne.call(k, "key")) {
        var R = Object.getOwnPropertyDescriptor(k, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function He(k, R) {
      if (typeof k.ref == "string" && S.current && R && S.current.stateNode !== R) {
        var L = Q(S.current.type);
        fe[L] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(S.current.type), k.ref), fe[L] = !0);
      }
    }
    function lt(k, R) {
      {
        var L = function() {
          V || (V = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        L.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function at(k, R) {
      {
        var L = function() {
          ce || (ce = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        L.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var ve = function(k, R, L, X, pe, be, ae) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: k,
        key: R,
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
        value: pe
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function Rt(k, R, L, X, pe) {
      {
        var be, ae = {}, le = null, Re = null;
        L !== void 0 && (Xt(L), le = "" + L), Ve(R) && (Xt(R.key), le = "" + R.key), je(R) && (Re = R.ref, He(R, pe));
        for (be in R)
          Ne.call(R, be) && !I.hasOwnProperty(be) && (ae[be] = R[be]);
        if (k && k.defaultProps) {
          var Se = k.defaultProps;
          for (be in Se)
            ae[be] === void 0 && (ae[be] = Se[be]);
        }
        if (le || Re) {
          var Ce = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          le && lt(ae, Ce), Re && at(ae, Ce);
        }
        return ve(k, le, Re, pe, X, S.current, ae);
      }
    }
    var De = x.ReactCurrentOwner, Yr = x.ReactDebugCurrentFrame;
    function mt(k) {
      if (k) {
        var R = k._owner, L = _e(k.type, k._source, R ? R.type : null);
        Yr.setExtraStackFrame(L);
      } else
        Yr.setExtraStackFrame(null);
    }
    var Tn;
    Tn = !1;
    function An(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
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
    function pa(k) {
      {
        if (k !== void 0) {
          var R = k.fileName.replace(/^.*[\\\/]/, ""), L = k.lineNumber;
          return `

Check your code at ` + R + ":" + L + ".";
        }
        return "";
      }
    }
    var Jr = {};
    function ha(k) {
      {
        var R = Gr();
        if (!R) {
          var L = typeof k == "string" ? k : k.displayName || k.name;
          L && (R = `

Check the top-level render call using <` + L + ">.");
        }
        return R;
      }
    }
    function Kr(k, R) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var L = ha(R);
        if (Jr[L])
          return;
        Jr[L] = !0;
        var X = "";
        k && k._owner && k._owner !== De.current && (X = " It was passed a child from " + Q(k._owner.type) + "."), mt(k), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, X), mt(null);
      }
    }
    function Xr(k, R) {
      {
        if (typeof k != "object")
          return;
        if (Pt(k))
          for (var L = 0; L < k.length; L++) {
            var X = k[L];
            An(X) && Kr(X, R);
          }
        else if (An(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var pe = b(k);
          if (typeof pe == "function" && pe !== k.entries)
            for (var be = pe.call(k), ae; !(ae = be.next()).done; )
              An(ae.value) && Kr(ae.value, R);
        }
      }
    }
    function da(k) {
      {
        var R = k.type;
        if (R == null || typeof R == "string")
          return;
        var L;
        if (typeof R == "function")
          L = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === u))
          L = R.propTypes;
        else
          return;
        if (L) {
          var X = Q(R);
          Gt(L, k.props, "prop", X, k);
        } else if (R.PropTypes !== void 0 && !Tn) {
          Tn = !0;
          var pe = Q(R);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ma(k) {
      {
        for (var R = Object.keys(k.props), L = 0; L < R.length; L++) {
          var X = R[L];
          if (X !== "children" && X !== "key") {
            mt(k), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), mt(null);
            break;
          }
        }
        k.ref !== null && (mt(k), A("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    function Qr(k, R, L, X, pe, be) {
      {
        var ae = v(k);
        if (!ae) {
          var le = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = pa(pe);
          Re ? le += Re : le += Gr();
          var Se;
          k === null ? Se = "null" : Pt(k) ? Se = "array" : k !== void 0 && k.$$typeof === t ? (Se = "<" + (Q(k.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof k, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, le);
        }
        var Ce = Rt(k, R, L, pe, be);
        if (Ce == null)
          return Ce;
        if (ae) {
          var Me = R.children;
          if (Me !== void 0)
            if (X)
              if (Pt(Me)) {
                for (var gt = 0; gt < Me.length; gt++)
                  Xr(Me[gt], k);
                Object.freeze && Object.freeze(Me);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xr(Me, k);
        }
        return k === r ? ma(Ce) : da(Ce), Ce;
      }
    }
    function ga(k, R, L) {
      return Qr(k, R, L, !0);
    }
    function ya(k, R, L) {
      return Qr(k, R, L, !1);
    }
    var ba = ya, ka = ga;
    It.Fragment = r, It.jsx = ba, It.jsxs = ka;
  }()), It;
}
process.env.NODE_ENV === "production" ? er.exports = va() : er.exports = Ea();
var T = er.exports;
const yt = ({ href: e, title: t, className: n }) => /* @__PURE__ */ T.jsx("a", { className: `${n} text-zinc-300 hover:text-zinc-100 transition ease-in-out`, href: e, target: "_blank", rel: "noreferrer", children: t });
function pn() {
  return /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center w-full font-light text-sm", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ T.jsx(yt, { href: "mailto:hello@quibbble.com", title: "Contact" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(yt, { href: "https://www.buymeacoffee.com/quibbble", title: "Support" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(yt, { href: "https://discord.gg/VKvjutuhUp", title: "Discord" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(yt, { href: "https://github.com/quibbble", title: "Github" }),
      /* @__PURE__ */ T.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ T.jsx(yt, { href: "https://status.quibbble.com", title: "Status" })
    ] }),
    /* @__PURE__ */ T.jsxs("p", { className: "mt-4 text-zinc-300 flex", children: [
      "Made with ♥ by ",
      /* @__PURE__ */ T.jsx(yt, { className: "underline", href: "https://chrisfregly.com", title: " Chris Fregly" })
    ] })
  ] });
}
function Po(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Sa } = Object.prototype, { getPrototypeOf: wr } = Object, hn = ((e) => (t) => {
  const n = Sa.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (t) => hn(t) === e), dn = (e) => (t) => typeof t === e, { isArray: Et } = Array, Nt = dn("undefined");
function Ca(e) {
  return e !== null && !Nt(e) && e.constructor !== null && !Nt(e.constructor) && Be(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ro = Ke("ArrayBuffer");
function Ta(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ro(e.buffer), t;
}
const Aa = dn("string"), Be = dn("function"), Oo = dn("number"), mn = (e) => e !== null && typeof e == "object", Pa = (e) => e === !0 || e === !1, rn = (e) => {
  if (hn(e) !== "object")
    return !1;
  const t = wr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ra = Ke("Date"), Oa = Ke("File"), Fa = Ke("Blob"), Ia = Ke("FileList"), _a = (e) => mn(e) && Be(e.pipe), ja = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Be(e.append) && ((t = hn(e)) === "formdata" || // detect form-data instance
  t === "object" && Be(e.toString) && e.toString() === "[object FormData]"));
}, Da = Ke("URLSearchParams"), za = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Et(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let a;
    for (r = 0; r < l; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Fo(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const Io = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), _o = (e) => !Nt(e) && e !== Io;
function tr() {
  const { caseless: e } = _o(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && Fo(t, i) || i;
    rn(t[o]) && rn(r) ? t[o] = tr(t[o], r) : rn(r) ? t[o] = tr({}, r) : Et(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && qt(arguments[r], n);
  return t;
}
const La = (e, t, n, { allOwnKeys: r } = {}) => (qt(t, (i, o) => {
  n && Be(i) ? e[o] = Po(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), Na = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ma = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, $a = (e, t, n, r) => {
  let i, o, l;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      l = i[o], (!r || r(l, e, t)) && !a[l] && (t[l] = e[l], a[l] = !0);
    e = n !== !1 && wr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ba = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ua = (e) => {
  if (!e)
    return null;
  if (Et(e))
    return e;
  let t = e.length;
  if (!Oo(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, qa = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && wr(Uint8Array)), Ha = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, Va = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Wa = Ke("HTMLFormElement"), Ya = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), ni = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ga = Ke("RegExp"), jo = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  qt(n, (i, o) => {
    let l;
    (l = t(i, o, e)) !== !1 && (r[o] = l || i);
  }), Object.defineProperties(e, r);
}, Ja = (e) => {
  jo(e, (t, n) => {
    if (Be(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Be(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ka = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return Et(e) ? r(e) : r(String(e).split(t)), n;
}, Xa = () => {
}, Qa = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Pn = "abcdefghijklmnopqrstuvwxyz", ri = "0123456789", Do = {
  DIGIT: ri,
  ALPHA: Pn,
  ALPHA_DIGIT: Pn + Pn.toUpperCase() + ri
}, Za = (e = 16, t = Do.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function es(e) {
  return !!(e && Be(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ts = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (mn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = Et(r) ? [] : {};
        return qt(r, (l, a) => {
          const s = n(l, i + 1);
          !Nt(s) && (o[a] = s);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ns = Ke("AsyncFunction"), rs = (e) => e && (mn(e) || Be(e)) && Be(e.then) && Be(e.catch), P = {
  isArray: Et,
  isArrayBuffer: Ro,
  isBuffer: Ca,
  isFormData: ja,
  isArrayBufferView: Ta,
  isString: Aa,
  isNumber: Oo,
  isBoolean: Pa,
  isObject: mn,
  isPlainObject: rn,
  isUndefined: Nt,
  isDate: Ra,
  isFile: Oa,
  isBlob: Fa,
  isRegExp: Ga,
  isFunction: Be,
  isStream: _a,
  isURLSearchParams: Da,
  isTypedArray: qa,
  isFileList: Ia,
  forEach: qt,
  merge: tr,
  extend: La,
  trim: za,
  stripBOM: Na,
  inherits: Ma,
  toFlatObject: $a,
  kindOf: hn,
  kindOfTest: Ke,
  endsWith: Ba,
  toArray: Ua,
  forEachEntry: Ha,
  matchAll: Va,
  isHTMLForm: Wa,
  hasOwnProperty: ni,
  hasOwnProp: ni,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jo,
  freezeMethods: Ja,
  toObjectSet: Ka,
  toCamelCase: Ya,
  noop: Xa,
  toFiniteNumber: Qa,
  findKey: Fo,
  global: Io,
  isContextDefined: _o,
  ALPHABET: Do,
  generateString: Za,
  isSpecCompliantForm: es,
  toJSONObject: ts,
  isAsyncFn: ns,
  isThenable: rs
};
function se(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
P.inherits(se, Error, {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const zo = se.prototype, Lo = {};
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
  Lo[e] = { value: e };
});
Object.defineProperties(se, Lo);
Object.defineProperty(zo, "isAxiosError", { value: !0 });
se.from = (e, t, n, r, i, o) => {
  const l = Object.create(zo);
  return P.toFlatObject(e, l, function(s) {
    return s !== Error.prototype;
  }, (a) => a !== "isAxiosError"), se.call(l, e.message, t, n, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const is = null;
function nr(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function No(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ii(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = No(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function os(e) {
  return P.isArray(e) && !e.some(nr);
}
const ls = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function gn(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = P.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !P.isUndefined(b[g]);
  });
  const r = n.metaTokens, i = n.visitor || f, o = n.dots, l = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (P.isDate(m))
      return m.toISOString();
    if (!s && P.isBlob(m))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(m) || P.isTypedArray(m) ? s && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, g, b) {
    let x = m;
    if (m && !b && typeof m == "object") {
      if (P.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (P.isArray(m) && os(m) || (P.isFileList(m) || P.endsWith(g, "[]")) && (x = P.toArray(m)))
        return g = No(g), x.forEach(function(C, j) {
          !(P.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ii([g], j, o) : l === null ? g : g + "[]",
            c(C)
          );
        }), !1;
    }
    return nr(m) ? !0 : (t.append(ii(b, g, o), c(m)), !1);
  }
  const u = [], d = Object.assign(ls, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: nr
  });
  function p(m, g) {
    if (!P.isUndefined(m)) {
      if (u.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      u.push(m), P.forEach(m, function(x, A) {
        (!(P.isUndefined(x) || x === null) && i.call(
          t,
          x,
          P.isString(A) ? A.trim() : A,
          g,
          d
        )) === !0 && p(x, g ? g.concat(A) : [A]);
      }), u.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function oi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function vr(e, t) {
  this._pairs = [], e && gn(e, this, t);
}
const Mo = vr.prototype;
Mo.append = function(t, n) {
  this._pairs.push([t, n]);
};
Mo.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, oi);
  } : oi;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function as(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $o(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || as, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = P.isURLSearchParams(t) ? t.toString() : new vr(t, n).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ss {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    P.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const li = ss, Bo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, us = typeof URLSearchParams < "u" ? URLSearchParams : vr, cs = typeof FormData < "u" ? FormData : null, fs = typeof Blob < "u" ? Blob : null, ps = {
  isBrowser: !0,
  classes: {
    URLSearchParams: us,
    FormData: cs,
    Blob: fs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Uo = typeof window < "u" && typeof document < "u", hs = ((e) => Uo && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ds = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Uo,
  hasStandardBrowserEnv: hs,
  hasStandardBrowserWebWorkerEnv: ds
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  ...ms,
  ...ps
};
function gs(e, t) {
  return gn(e, new Ge.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return Ge.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ys(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function bs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function qo(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    const a = Number.isFinite(+l), s = o >= n.length;
    return l = !l && P.isArray(i) ? i.length : l, s ? (P.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !a) : ((!i[l] || !P.isObject(i[l])) && (i[l] = []), t(n, r, i[l], o) && P.isArray(i[l]) && (i[l] = bs(i[l])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, i) => {
      t(ys(r), i, n, 0);
    }), n;
  }
  return null;
}
function ks(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Er = {
  transitional: Bo,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = P.isObject(t);
    if (o && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
      return i && i ? JSON.stringify(qo(t)) : t;
    if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t))
      return t;
    if (P.isArrayBufferView(t))
      return t.buffer;
    if (P.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return gs(t, this.formSerializer).toString();
      if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return gn(
          a ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), ks(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Er.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (t && P.isString(t) && (r && !this.responseType || i)) {
      const l = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (l)
          throw a.name === "SyntaxError" ? se.from(a, se.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
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
    FormData: Ge.classes.FormData,
    Blob: Ge.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Er.headers[e] = {};
});
const Sr = Er, xs = P.toObjectSet([
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
]), ws = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), n = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!n || t[n] && xs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ai = Symbol("internals");
function _t(e) {
  return e && String(e).trim().toLowerCase();
}
function on(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(on) : String(e);
}
function vs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Es = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Rn(e, t, n, r, i) {
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function Ss(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cs(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0
    });
  });
}
class yn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, s, c) {
      const f = _t(s);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const u = P.findKey(i, f);
      (!u || i[u] === void 0 || c === !0 || c === void 0 && i[u] !== !1) && (i[u || s] = on(a));
    }
    const l = (a, s) => P.forEach(a, (c, f) => o(c, f, s));
    return P.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : P.isString(t) && (t = t.trim()) && !Es(t) ? l(ws(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = _t(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return vs(i);
        if (P.isFunction(n))
          return n.call(this, i, r);
        if (P.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = _t(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Rn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (l = _t(l), l) {
        const a = P.findKey(r, l);
        a && (!n || Rn(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return P.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Rn(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return P.forEach(this, (i, o) => {
      const l = P.findKey(r, o);
      if (l) {
        n[l] = on(i), delete n[o];
        return;
      }
      const a = t ? Ss(o) : String(o).trim();
      a !== o && delete n[o], n[a] = on(i), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[ai] = this[ai] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(l) {
      const a = _t(l);
      r[a] || (Cs(i, l), r[a] = !0);
    }
    return P.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
yn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(yn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
P.freezeMethods(yn);
const Ze = yn;
function On(e, t) {
  const n = this || Sr, r = t || n, i = Ze.from(r.headers);
  let o = r.data;
  return P.forEach(e, function(a) {
    o = a.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Ho(e) {
  return !!(e && e.__CANCEL__);
}
function Ht(e, t, n) {
  se.call(this, e ?? "canceled", se.ERR_CANCELED, t, n), this.name = "CanceledError";
}
P.inherits(Ht, se, {
  __CANCEL__: !0
});
function Ts(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new se(
    "Request failed with status code " + n.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const As = Ge.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, o) {
      const l = [e + "=" + encodeURIComponent(t)];
      P.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), P.isString(r) && l.push("path=" + r), P.isString(i) && l.push("domain=" + i), o === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ps(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vo(e, t) {
  return e && !Ps(t) ? Rs(e, t) : t;
}
const Os = Ge.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(o) {
      let l = o;
      return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(l) {
      const a = P.isString(l) ? i(l) : l;
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
function Fs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Is(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, l;
  return t = t !== void 0 ? t : 1e3, function(s) {
    const c = Date.now(), f = r[o];
    l || (l = c), n[i] = s, r[i] = c;
    let u = o, d = 0;
    for (; u !== i; )
      d += n[u++], u = u % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - l < t)
      return;
    const p = f && c - f;
    return p ? Math.round(d * 1e3 / p) : void 0;
  };
}
function si(e, t) {
  let n = 0;
  const r = Is(50, 250);
  return (i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, a = o - n, s = r(a), c = o <= l;
    n = o;
    const f = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: a,
      rate: s || void 0,
      estimated: s && l && c ? (l - o) / s : void 0,
      event: i
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const _s = typeof XMLHttpRequest < "u", js = _s && function(e) {
  return new Promise(function(n, r) {
    let i = e.data;
    const o = Ze.from(e.headers).normalize();
    let { responseType: l, withXSRFToken: a } = e, s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    let f;
    if (P.isFormData(i)) {
      if (Ge.hasStandardBrowserEnv || Ge.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((f = o.getContentType()) !== !1) {
        const [g, ...b] = f ? f.split(";").map((x) => x.trim()).filter(Boolean) : [];
        o.setContentType([g || "multipart/form-data", ...b].join("; "));
      }
    }
    let u = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(g + ":" + b));
    }
    const d = Vo(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), $o(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function p() {
      if (!u)
        return;
      const g = Ze.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), x = {
        data: !l || l === "text" || l === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: e,
        request: u
      };
      Ts(function(C) {
        n(C), c();
      }, function(C) {
        r(C), c();
      }, x), u = null;
    }
    if ("onloadend" in u ? u.onloadend = p : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, u.onabort = function() {
      u && (r(new se("Request aborted", se.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new se("Network Error", se.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const x = e.transitional || Bo;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), r(new se(
        b,
        x.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Ge.hasStandardBrowserEnv && (a && P.isFunction(a) && (a = a(e)), a || a !== !1 && Os(d))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && As.read(e.xsrfCookieName);
      g && o.set(e.xsrfHeaderName, g);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in u && P.forEach(o.toJSON(), function(b, x) {
      u.setRequestHeader(x, b);
    }), P.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), l && l !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", si(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", si(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (g) => {
      u && (r(!g || g.type ? new Ht(null, e, u) : g), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const m = Fs(d);
    if (m && Ge.protocols.indexOf(m) === -1) {
      r(new se("Unsupported protocol " + m + ":", se.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
}, rr = {
  http: is,
  xhr: js
};
P.forEach(rr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ui = (e) => `- ${e}`, Ds = (e) => P.isFunction(e) || e === null || e === !1, Wo = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let l;
      if (r = n, !Ds(n) && (r = rr[(l = String(n)).toLowerCase()], r === void 0))
        throw new se(`Unknown adapter '${l}'`);
      if (r)
        break;
      i[l || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(i).map(
        ([a, s]) => `adapter ${a} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? o.length > 1 ? `since :
` + o.map(ui).join(`
`) : " " + ui(o[0]) : "as no adapter specified";
      throw new se(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: rr
};
function Fn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ht(null, e);
}
function ci(e) {
  return Fn(e), e.headers = Ze.from(e.headers), e.data = On.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wo.getAdapter(e.adapter || Sr.adapter)(e).then(function(r) {
    return Fn(e), r.data = On.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return Ho(r) || (Fn(e), r && r.response && (r.response.data = On.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const fi = (e) => e instanceof Ze ? e.toJSON() : e;
function wt(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, u) {
    return P.isPlainObject(c) && P.isPlainObject(f) ? P.merge.call({ caseless: u }, c, f) : P.isPlainObject(f) ? P.merge({}, f) : P.isArray(f) ? f.slice() : f;
  }
  function i(c, f, u) {
    if (P.isUndefined(f)) {
      if (!P.isUndefined(c))
        return r(void 0, c, u);
    } else
      return r(c, f, u);
  }
  function o(c, f) {
    if (!P.isUndefined(f))
      return r(void 0, f);
  }
  function l(c, f) {
    if (P.isUndefined(f)) {
      if (!P.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, f);
  }
  function a(c, f, u) {
    if (u in t)
      return r(c, f);
    if (u in e)
      return r(void 0, c);
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
    withXSRFToken: l,
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
    headers: (c, f) => i(fi(c), fi(f), !0)
  };
  return P.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const u = s[f] || i, d = u(e[f], t[f], f);
    P.isUndefined(d) && u !== a || (n[f] = d);
  }), n;
}
const Yo = "1.6.2", Cr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Cr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pi = {};
Cr.transitional = function(t, n, r) {
  function i(o, l) {
    return "[Axios v" + Yo + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, a) => {
    if (t === !1)
      throw new se(
        i(l, " has been removed" + (n ? " in " + n : "")),
        se.ERR_DEPRECATED
      );
    return n && !pi[l] && (pi[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, l, a) : !0;
  };
};
function zs(e, t, n) {
  if (typeof e != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], l = t[o];
    if (l) {
      const a = e[o], s = a === void 0 || l(a, o, e);
      if (s !== !0)
        throw new se("option " + o + " must be " + s, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new se("Unknown option " + o, se.ERR_BAD_OPTION);
  }
}
const ir = {
  assertOptions: zs,
  validators: Cr
}, nt = ir.validators;
class un {
  constructor(t) {
    this.defaults = t, this.interceptors = {
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = wt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && ir.assertOptions(r, {
      silentJSONParsing: nt.transitional(nt.boolean),
      forcedJSONParsing: nt.transitional(nt.boolean),
      clarifyTimeoutError: nt.transitional(nt.boolean)
    }, !1), i != null && (P.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : ir.assertOptions(i, {
      encode: nt.function,
      serialize: nt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = o && P.merge(
      o.common,
      o[n.method]
    );
    o && P.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = Ze.concat(l, o);
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (s = s && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let f, u = 0, d;
    if (!s) {
      const m = [ci.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, c), d = m.length, f = Promise.resolve(n); u < d; )
        f = f.then(m[u++], m[u++]);
      return f;
    }
    d = a.length;
    let p = n;
    for (u = 0; u < d; ) {
      const m = a[u++], g = a[u++];
      try {
        p = m(p);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      f = ci.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (u = 0, d = c.length; u < d; )
      f = f.then(c[u++], c[u++]);
    return f;
  }
  getUri(t) {
    t = wt(this.defaults, t);
    const n = Vo(t.baseURL, t.url);
    return $o(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function(t) {
  un.prototype[t] = function(n, r) {
    return this.request(wt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, l, a) {
      return this.request(wt(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  un.prototype[t] = n(), un.prototype[t + "Form"] = n(!0);
});
const ln = un;
class Tr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
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
    }, t(function(o, l, a) {
      r.reason || (r.reason = new Ht(o, l, a), n(r.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Tr(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Ls = Tr;
function Ns(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ms(e) {
  return P.isObject(e) && e.isAxiosError === !0;
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
Object.entries(or).forEach(([e, t]) => {
  or[t] = e;
});
const $s = or;
function Go(e) {
  const t = new ln(e), n = Po(ln.prototype.request, t);
  return P.extend(n, ln.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Go(wt(e, i));
  }, n;
}
const Ae = Go(Sr);
Ae.Axios = ln;
Ae.CanceledError = Ht;
Ae.CancelToken = Ls;
Ae.isCancel = Ho;
Ae.VERSION = Yo;
Ae.toFormData = gn;
Ae.AxiosError = se;
Ae.Cancel = Ae.CanceledError;
Ae.all = function(t) {
  return Promise.all(t);
};
Ae.spread = Ns;
Ae.isAxiosError = Ms;
Ae.mergeConfig = wt;
Ae.AxiosHeaders = Ze;
Ae.formToJSON = (e) => qo(P.isHTMLForm(e) ? new FormData(e) : e);
Ae.getAdapter = Wo.getAdapter;
Ae.HttpStatusCode = $s;
Ae.default = Ae;
const bn = Ae;
bn.defaults.withCredentials = !0;
const Bs = async (e, t, n, r, i) => {
  let o = {
    method: "POST",
    url: `${e}/game/create`,
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      GameKey: t,
      GameID: n.toLowerCase(),
      Teams: r,
      TurnLength: null,
      MoreOptions: i
    })
  };
  return bn(o).catch((l) => l.response).then((l) => l.status);
}, Us = async (e, t, n) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${t}&GameID=${n.toLowerCase()}`
  };
  return bn(r).catch((i) => i.response);
}, Jo = async (e) => {
  let t = {
    method: "GET",
    url: `${e}/health`
  };
  return bn(t).catch((n) => n.response);
};
function xg({ config: e }) {
  const t = Bt();
  return ft(() => {
    const n = async () => {
      let i = await Jo(e.host);
      if (i && i.status === 200) {
        let o = sessionStorage.getItem("gameID");
        t(o ? `/${o}` : "/");
      }
    };
    n();
    const r = setInterval(async () => {
      n();
    }, 1e4);
    return () => clearInterval(r);
  }, [t]), /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center my-8 md:my-12", children: [
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
const hi = [
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
], di = [
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
function wg(e) {
  const { config: t, options: n, setOptions: r, children: i } = e, o = Bt(), [l, a] = pt(`${hi[Math.floor(Math.random() * hi.length)]}-${di[Math.floor(Math.random() * di.length)]}-${Math.floor(Math.random() * (99 - 0 + 1) + 0)}`), [s, c] = pt(t.minTeams);
  ft(() => {
    const u = async () => {
      let p = await Jo(t.host);
      (!p || p.status !== 200) && o("/status/down");
    };
    u();
    const d = setInterval(async () => {
      u();
    }, 1e4);
    return () => clearInterval(d);
  }, [o]);
  async function f(u) {
    u.preventDefault();
    let d = await Bs(t.host, t.key, l, s, n);
    (d === 201 || d === 400) && o(`/${l}`);
  }
  return /* @__PURE__ */ T.jsx("div", { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center m-8 md:m-12", children: [
    /* @__PURE__ */ T.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center fade-in", children: [
      /* @__PURE__ */ T.jsx("div", { className: ` text-5xl font-black font-['${t.font}'] text-${t.color} mb-1 cursor-pointer`, children: /* @__PURE__ */ T.jsx("a", { href: `${window.location.protocol}//${window.location.host}`, children: t.key }) }),
      /* @__PURE__ */ T.jsxs("div", { className: "font-thin mb-3", children: [
        "Play ",
        t.minTeams === t.maxTeams ? `${In[t.minTeams]}` : `${In[t.minTeams]} to ${In[t.maxTeams]}`,
        " player ",
        t.key,
        " online against friends. To create a game or join an existing one, enter a game ID and click 'Go'."
      ] }),
      /* @__PURE__ */ T.jsxs("form", { className: "w-full flex mb-3", onSubmit: f, children: [
        /* @__PURE__ */ T.jsx("input", { className: "w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2", autoFocus: !0, type: "text", value: l, onChange: (u) => a(u.target.value) }),
        /* @__PURE__ */ T.jsx("button", { className: "w-2/12 font-bold grow-0 bg-blue-500", children: "Go" })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex w-full justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "flex order-2 md:order-1", children: [
          /* @__PURE__ */ T.jsx("button", { onClick: () => o("/rules"), title: "how to play", className: "mr-3 md:mr-2 p-2 first-line:p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
          /* @__PURE__ */ T.jsxs("a", { className: "italic text-xs py-1 px-2 border-blue-500 border border-dashed text-blue-500", href: "https://quibbble.com", target: "_blank", children: [
            "more ",
            /* @__PURE__ */ T.jsx("span", { className: "text-zinc-100 font-['lobster'] text-sm not-italic", children: "quibbble" }),
            " games"
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "overflow-scroll flex flex-warp items-center order-1 md:order-2 mb-3 md:mb-0", children: [
          n.Variant ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsx("div", { className: "mr-1 font-black text-blue-500", children: "VARIANT" }),
            /* @__PURE__ */ T.jsx("select", { className: "px-2 mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (u) => r((d) => ({ ...d, Variant: u.target.value.replace(/\s/g, "") })), children: t.variants.map((u) => /* @__PURE__ */ T.jsx("option", { value: u, children: u }, u)) })
          ] }) : null,
          t.minTeams !== t.maxTeams ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsx("div", { className: "mx-1 font-black text-blue-500", children: "PLAYERS" }),
            /* @__PURE__ */ T.jsx("select", { className: "px-2 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (u) => c(parseInt(u.target.value)), children: Array(t.maxTeams - t.minTeams + 1).fill().map((u, d) => t.minTeams + d).map((u) => /* @__PURE__ */ T.jsx("option", { value: u, children: u }, u)) })
          ] }) : null,
          i
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] }) });
}
var Ko = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mi = Oe.createContext && Oe.createContext(Ko), it = globalThis && globalThis.__assign || function() {
  return it = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, it.apply(this, arguments);
}, qs = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function Xo(e) {
  return e && e.map(function(t, n) {
    return Oe.createElement(t.tag, it({
      key: n
    }, t.attr), Xo(t.child));
  });
}
function St(e) {
  return function(t) {
    return Oe.createElement(Hs, it({
      attr: it({}, e.attr)
    }, t), Xo(e.child));
  };
}
function Hs(e) {
  var t = function(n) {
    var r = e.attr, i = e.size, o = e.title, l = qs(e, ["attr", "size", "title"]), a = i || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), Oe.createElement("svg", it({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, l, {
      className: s,
      style: it(it({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Oe.createElement("title", null, o), e.children);
  };
  return mi !== void 0 ? Oe.createElement(mi.Consumer, null, function(n) {
    return t(n);
  }) : t(Ko);
}
function Vs(e) {
  return St({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function Ws(e) {
  return St({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" } }] })(e);
}
function Ys(e) {
  return St({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48 252 259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z" } }] })(e);
}
function Gs(e) {
  return St({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M480 304.13v-32h-80V215.2c29.42-27.95 32-64.76 32-103.2V96h-32v16c0 28-1.86 48.15-9.9 63.84C368 128 324.32 112 256 112c-39.8 0-75.19 7.06-100.43 24.32-14.9 10.19-25.2 24.91-32.7 39.72C114 160.57 112 140.82 112 112V96H80v16c0 37.44 2.59 73.36 32 101.2v58.93H32v32l80-.13c0 19 3.7 53.09 10.39 69.69C96.6 396.76 80 422.31 80 464v16h32v-16c0-27.66 9.1-44.71 26.17-61.32C160 448 177 464 240 464V176h32v288c65 0 80-16 101.83-61.32C390.9 419.29 400 436.35 400 464v16h32v-16c0-41.68-16.6-67.23-42.39-90.31C396.3 357.09 400 323 400 304z" } }, { tag: "path", attr: { d: "M256 32c-48.06 0-96 0-96 84 26.12-14 59.35-20 96-20 24.09 0 46.09 2.65 65.39 8 10.75 3 24.66 8.71 30.61 12 0-84-47.94-84-96-84z" } }] })(e);
}
function Js(e) {
  return St({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" } }] })(e);
}
function Ks(e) {
  return St({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z" } }, { tag: "path", attr: { d: "M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z" } }] })(e);
}
function Xs({ isConn: e }) {
  const [t, n] = pt(0);
  return ft(() => {
    e ? setTimeout(() => n((r) => r - 1), 1500) : n(0);
  }, [e, n]), /* @__PURE__ */ T.jsxs("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}`, children: [
    t ? null : /* @__PURE__ */ T.jsx("div", { className: "px-1", children: e ? "connected" : "connecting" }),
    /* @__PURE__ */ T.jsx("div", { onClick: () => {
      e && (n(0), setTimeout(() => n(t - 1), 1500));
    }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}`, children: e ? null : /* @__PURE__ */ T.jsx("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" }) })
  ] });
}
const vg = xa((e, t) => {
  const {
    config: n,
    ws: r,
    game: i,
    setGame: o,
    network: l,
    setNetwork: a,
    chat: s,
    setChat: c,
    connected: f,
    setConnected: u,
    error: d,
    setError: p,
    debug: m,
    children: g
  } = e;
  m && (i && console.log("game: ", i), l && console.log("network: ", l), s && console.log("chat: ", s), f && console.log("connected: ", f), d && console.log("error: ", d));
  const { gameID: b } = wa(), x = Bt(), A = f && l && f[l.Name] ? f[l.Name] : null;
  A && localStorage.setItem(b, A);
  const C = Ot((H) => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: H } }));
  }, [r]);
  Ot(() => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetOpenTeam" }));
  }, [r]);
  const j = Ot(() => {
    r.current && r.current.send(JSON.stringify({ ActionType: "Reset" }));
  }, [i, r]), E = Ot(() => {
    r.current && (i && f && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team !== f[l.Name] || r.current.send(JSON.stringify({ ActionType: "Undo" })));
  }, [r]), [w, N] = pt(!1), U = async (H, ue) => {
    if (H <= 0) {
      x("/");
      return;
    }
    let we = await Us(n.host, n.key, b);
    if (!we) {
      ue && sessionStorage.setItem("gameID", b), x("/status/down");
      return;
    }
    if (we.status !== 200) {
      x("/");
      return;
    }
    r.current = new WebSocket(`${n.websocket}/game/join?GameKey=${n.key}&GameID=${b.toLowerCase()}`), r.current.onopen = () => {
      N(!0);
      let h = localStorage.getItem(b);
      h && C(h);
    }, r.current.onclose = (h) => {
      N(!1), h.code != 1e3 && setTimeout(function() {
        U(H - 1, !0);
      }, 1e3 + (3 - H) * 500);
    }, r.current.onmessage = async (h) => {
      let F = JSON.parse(h.data);
      F.Type === "Game" ? o(F.Payload) : F.Type === "Network" ? a(F.Payload) : F.Type === "Chat" ? c((q) => q.concat([F.Payload])) : F.Type === "Connected" ? u(F.Payload) : F.Type === "Error" && p(F.Payload);
    }, r.current.onerror = (h) => {
      console.error("Socket encountered error: ", h.message);
    };
  };
  ft(() => (U(3, !1), (H) => {
    var ue;
    return (ue = r.current) == null ? void 0 : ue.close(1e3);
  }), []);
  const [te, v] = pt(!0);
  ft(() => {
    const H = () => v(!te);
    return window.addEventListener("resize", H), (ue) => window.removeEventListener("resize", H);
  });
  const [_, z] = pt(0);
  ft(() => {
    _ > 0 && setTimeout(() => z(_ - 1), 1e3);
  }, [_]);
  const [Q, Z] = pt(!1), G = () => /* @__PURE__ */ T.jsx("div", { className: "z-50 absolute h-[95%] w-full flex items-center justify-center fade-in", children: /* @__PURE__ */ T.jsxs("div", { className: "bg-zinc-900 p-8 rounded-md", children: [
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
  ] }) }), oe = Ot((H) => {
    if (n.shortcut || (n.shortcut = {
      nextTeam: "n",
      currentTeam: "c",
      undo: "u"
    }), H.key === n.shortcut.nextTeam) {
      let ue = i.Teams, we = ue[(ue.indexOf(A) + 1) % ue.length];
      C(we);
    } else
      H.key === n.shortcut.currentTeam && i.Turn !== A ? C(i.Turn) : H.key === n.shortcut.undo && E();
  }, [i, A]);
  return ft(() => (document.addEventListener("keydown", oe), () => {
    document.removeEventListener("keydown", oe);
  }), [oe]), /* @__PURE__ */ T.jsxs("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4 fade-in", children: [
    Q ? /* @__PURE__ */ T.jsx(G, {}) : null,
    /* @__PURE__ */ T.jsxs("div", { ref: t, className: `h-full w-full ${n.gamePageMaxWidth ? n.gamePageMaxWidth : "max-w-xl"} flex flex-col items-center grow`, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm", children: [
        /* @__PURE__ */ T.jsxs("div", { children: [
          /* @__PURE__ */ T.jsxs("div", { className: "flex items-center cursor-pointer", onClick: () => {
            z(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${b}`);
          }, children: [
            /* @__PURE__ */ T.jsx(Ks, { className: "mr-1" }),
            /* @__PURE__ */ T.jsx("span", { className: "underline", children: `${window.location.protocol}//${window.location.host}/${b}` })
          ] }),
          _ > 0 ? /* @__PURE__ */ T.jsxs("div", { className: "absolute mt-2 w-6/12 flex justify-center", children: [
            /* @__PURE__ */ T.jsx("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block", children: /* @__PURE__ */ T.jsx("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" }) }),
            /* @__PURE__ */ T.jsx("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1", children: "copied!" })
          ] }) : null
        ] }),
        /* @__PURE__ */ T.jsx("div", { className: "px-1", children: /* @__PURE__ */ T.jsx(Xs, { isConn: w }) })
      ] }),
      /* @__PURE__ */ T.jsx("hr", { className: "w-full mb-2" }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex w-full justify-between items-center mb-4", children: [
        /* @__PURE__ */ T.jsx("div", { className: "flex", children: i && i.Teams ? i.Teams.map((H) => /* @__PURE__ */ T.jsx(
          "div",
          {
            className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${H}-500 ${A === H ? `bg-${A}-500 pointer-events-none` : ""}`,
            onClick: () => C(H),
            children: i && i.MoreData && i.MoreData.Points ? i.MoreData.Points[H] : ""
          },
          H
        )) : null }),
        /* @__PURE__ */ T.jsx("div", { className: `font-extrabold ${i && f && l && f[l.Name] && i.Winners.length === 0 ? `text-${i.Turn}-500` : "text-zinc-100"} ${i && l && f && f[l.Name] === i.Turn && i.Winners.length === 0 ? "animate-pulse" : ""}`, children: i && f && l && f[l.Name] ? i.Message : /* @__PURE__ */ T.jsxs("div", { className: "flex items-center animate-pulse", children: [
          /* @__PURE__ */ T.jsx(Vs, { className: "mr-1" }),
          /* @__PURE__ */ T.jsx("div", { children: "select a team" })
        ] }) })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "p-4 h-full w-full flex flex-col justify-center items-center grow", children: g }),
      /* @__PURE__ */ T.jsx("hr", { className: "w-full mt-4 mb-2" }),
      /* @__PURE__ */ T.jsxs("div", { className: "w-full flex justify-between items-center", children: [
        /* @__PURE__ */ T.jsx("div", { className: `leading-4 text-2xl font-black text-${n.color} cursor-pointer`, children: /* @__PURE__ */ T.jsxs("button", { onClick: () => {
          sessionStorage.setItem("gameID", ""), x("/");
        }, children: [
          /* @__PURE__ */ T.jsx("span", { className: `font-['${n.font}']`, children: n.key }),
          /* @__PURE__ */ T.jsx("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100", children: i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "" })
        ] }) }),
        /* @__PURE__ */ T.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ T.jsx("button", { onClick: () => E(), title: "undo move", className: `p-2 ${i && f && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team === f[l.Name] ? "bg-amber-500" : "bg-zinc-700 text-zinc-500 cursor-default"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ T.jsx(Ys, {}) }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => Z(!0), title: "reset game", className: `p-2 ${i && i.Winners.length > 0 ? "bg-blue-500" : "bg-zinc-500"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ T.jsx(Ws, {}) }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), x("/bugs");
          }, title: "find a bug?", className: "block md:hidden p-2 bg-zinc-500 mr-3 md:mr-2 rounded-full", children: /* @__PURE__ */ T.jsx(Gs, {}) }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), x("/bugs");
          }, title: "find a bug?", className: "hidden md:block mr-3 md:mr-2 p-2 bg-zinc-500 italic text-xs font-bold", children: "find a bug?" }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), x("/rules");
          }, title: "game rules", className: "block md:hidden p-2 bg-blue-500 rounded-full", children: /* @__PURE__ */ T.jsx(Js, {}) }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => {
            sessionStorage.setItem("gameID", b), x("/rules");
          }, title: "game rules", className: "hidden md:block p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" })
        ] })
      ] })
    ] })
  ] });
}), gi = ["http", "https", "mailto", "tel"];
function Qs(e) {
  const t = (e || "").trim(), n = t.charAt(0);
  if (n === "#" || n === "/")
    return t;
  const r = t.indexOf(":");
  if (r === -1)
    return t;
  let i = -1;
  for (; ++i < gi.length; ) {
    const o = gi[i];
    if (r === o.length && t.slice(0, o.length).toLowerCase() === o)
      return t;
  }
  return i = t.indexOf("?"), i !== -1 && r > i || (i = t.indexOf("#"), i !== -1 && r > i) ? t : "javascript:void(0)";
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Zs = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
};
const Qo = /* @__PURE__ */ Ut(Zs);
function zt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? yi(e.position) : "start" in e || "end" in e ? yi(e) : "line" in e || "column" in e ? lr(e) : "";
}
function lr(e) {
  return bi(e && e.line) + ":" + bi(e && e.column);
}
function yi(e) {
  return lr(e && e.start) + "-" + lr(e && e.end);
}
function bi(e) {
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
  constructor(t, n, r) {
    const i = [null, null];
    let o = {
      // @ts-expect-error: we always follows the structure of `position`.
      start: { line: null, column: null },
      // @ts-expect-error: "
      end: { line: null, column: null }
    };
    if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? i[1] = r : (i[0] = r.slice(0, l), i[1] = r.slice(l + 1));
    }
    n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = zt(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note;
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
const We = { basename: eu, dirname: tu, extname: nu, join: ru, sep: "/" };
function eu(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Vt(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.charCodeAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else
        r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, a = t.length - 1;
  for (; i--; )
    if (e.charCodeAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.charCodeAt(i) === t.charCodeAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function tu(e) {
  if (Vt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.charCodeAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else
      r || (r = !0);
  return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t);
}
function nu(e) {
  Vt(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, l;
  for (; t--; ) {
    const a = e.charCodeAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function ru(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Vt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : iu(n);
}
function iu(e) {
  Vt(e);
  const t = e.charCodeAt(0) === 47;
  let n = ou(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function ou(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, a, s;
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
          if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              if (s = n.lastIndexOf("/"), s !== n.length - 1) {
                s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
                continue;
              }
            } else if (n.length > 0) {
              n = "", r = 0, i = l, o = 0;
              continue;
            }
          }
          t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
        } else
          n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else
      a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function Vt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const lu = { cwd: au };
function au() {
  return "/";
}
function ar(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function su(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ar(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return uu(e);
}
function uu(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
      const r = t.charCodeAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const _n = ["history", "path", "basename", "stem", "extname", "dirname"];
class Zo {
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
  constructor(t) {
    let n;
    t ? typeof t == "string" || cu(t) ? n = { value: t } : ar(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = lu.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < _n.length; ) {
      const o = _n[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      _n.includes(i) || (this[i] = n[i]);
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
  set path(t) {
    ar(t) && (t = su(t)), Dn(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the parent path (example: `'~'`).
   */
  get dirname() {
    return typeof this.path == "string" ? We.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */
  set dirname(t) {
    ki(this.basename, "dirname"), this.path = We.join(t || "", this.basename);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */
  get basename() {
    return typeof this.path == "string" ? We.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set basename(t) {
    Dn(t, "basename"), jn(t, "basename"), this.path = We.join(this.dirname || "", t);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   */
  get extname() {
    return typeof this.path == "string" ? We.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */
  set extname(t) {
    if (jn(t, "extname"), ki(this.dirname, "extname"), t) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = We.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */
  get stem() {
    return typeof this.path == "string" ? We.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set stem(t) {
    Dn(t, "stem"), jn(t, "stem"), this.path = We.join(this.dirname || "", t + (this.extname || ""));
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
  toString(t) {
    return (this.value || "").toString(t || void 0);
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
  message(t, n, r) {
    const i = new Ue(t, n, r);
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
  info(t, n, r) {
    const i = this.message(t, n, r);
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
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
}
function jn(e, t) {
  if (e && e.includes(We.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + We.sep + "`"
    );
}
function Dn(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function ki(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function cu(e) {
  return Qo(e);
}
function xi(e) {
  if (e)
    throw e;
}
var an = Object.prototype.hasOwnProperty, el = Object.prototype.toString, wi = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, Ei = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : el.call(t) === "[object Array]";
}, Si = function(t) {
  if (!t || el.call(t) !== "[object Object]")
    return !1;
  var n = an.call(t, "constructor"), r = t.constructor && t.constructor.prototype && an.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || an.call(t, i);
}, Ci = function(t, n) {
  wi && n.name === "__proto__" ? wi(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Ti = function(t, n) {
  if (n === "__proto__")
    if (an.call(t, n)) {
      if (vi)
        return vi(t, n).value;
    } else
      return;
  return t[n];
}, fu = function e() {
  var t, n, r, i, o, l, a = arguments[0], s = 1, c = arguments.length, f = !1;
  for (typeof a == "boolean" && (f = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < c; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Ti(a, n), i = Ti(t, n), a !== i && (f && i && (Si(i) || (o = Ei(i))) ? (o ? (o = !1, l = r && Ei(r) ? r : []) : l = r && Si(r) ? r : {}, Ci(a, { name: n, newValue: e(f, l, i) })) : typeof i < "u" && Ci(a, { name: n, newValue: i }));
  return a;
};
const Ai = /* @__PURE__ */ Ut(fu);
function sr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function pu() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(s, ...c) {
      const f = e[++o];
      let u = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++u < i.length; )
        (c[u] === null || c[u] === void 0) && (c[u] = i[u]);
      i = c, f ? hu(f, a)(...c) : l(null, ...c);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function hu(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let s;
    a && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (c) {
      const f = (
        /** @type {Error} */
        c
      );
      if (a && n)
        throw f;
      return i(f);
    }
    a || (s instanceof Promise ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(l, ...a) {
    n || (n = !0, t(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const du = nl().freeze(), tl = {}.hasOwnProperty;
function nl() {
  const e = pu(), t = [];
  let n = {}, r, i = -1;
  return o.data = l, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = t, o.use = s, o.parse = c, o.stringify = f, o.run = u, o.runSync = d, o.process = p, o.processSync = m, o;
  function o() {
    const g = nl();
    let b = -1;
    for (; ++b < t.length; )
      g.use(...t[b]);
    return g.data(Ai(!0, {}, n)), g;
  }
  function l(g, b) {
    return typeof g == "string" ? arguments.length === 2 ? (Nn("data", r), n[g] = b, o) : tl.call(n, g) && n[g] || null : g ? (Nn("data", r), n = g, o) : n;
  }
  function a() {
    if (r)
      return o;
    for (; ++i < t.length; ) {
      const [g, ...b] = t[i];
      if (b[0] === !1)
        continue;
      b[0] === !0 && (b[0] = void 0);
      const x = g.call(o, ...b);
      typeof x == "function" && e.use(x);
    }
    return r = !0, i = Number.POSITIVE_INFINITY, o;
  }
  function s(g, ...b) {
    let x;
    if (Nn("use", r), g != null)
      if (typeof g == "function")
        E(g, ...b);
      else if (typeof g == "object")
        Array.isArray(g) ? j(g) : C(g);
      else
        throw new TypeError("Expected usable value, not `" + g + "`");
    return x && (n.settings = Object.assign(n.settings || {}, x)), o;
    function A(w) {
      if (typeof w == "function")
        E(w);
      else if (typeof w == "object")
        if (Array.isArray(w)) {
          const [N, ...U] = w;
          E(N, ...U);
        } else
          C(w);
      else
        throw new TypeError("Expected usable value, not `" + w + "`");
    }
    function C(w) {
      j(w.plugins), w.settings && (x = Object.assign(x || {}, w.settings));
    }
    function j(w) {
      let N = -1;
      if (w != null)
        if (Array.isArray(w))
          for (; ++N < w.length; ) {
            const U = w[N];
            A(U);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + w + "`");
    }
    function E(w, N) {
      let U = -1, te;
      for (; ++U < t.length; )
        if (t[U][0] === w) {
          te = t[U];
          break;
        }
      te ? (sr(te[1]) && sr(N) && (N = Ai(!0, te[1], N)), te[1] = N) : t.push([...arguments]);
    }
  }
  function c(g) {
    o.freeze();
    const b = jt(g), x = o.Parser;
    return zn("parse", x), Pi(x, "parse") ? new x(String(b), b).parse() : x(String(b), b);
  }
  function f(g, b) {
    o.freeze();
    const x = jt(b), A = o.Compiler;
    return Ln("stringify", A), Ri(g), Pi(A, "compile") ? new A(g, x).compile() : A(g, x);
  }
  function u(g, b, x) {
    if (Ri(g), o.freeze(), !x && typeof b == "function" && (x = b, b = void 0), !x)
      return new Promise(A);
    A(null, x);
    function A(C, j) {
      e.run(g, jt(b), E);
      function E(w, N, U) {
        N = N || g, w ? j(w) : C ? C(N) : x(null, N, U);
      }
    }
  }
  function d(g, b) {
    let x, A;
    return o.run(g, b, C), Oi("runSync", "run", A), x;
    function C(j, E) {
      xi(j), x = E, A = !0;
    }
  }
  function p(g, b) {
    if (o.freeze(), zn("process", o.Parser), Ln("process", o.Compiler), !b)
      return new Promise(x);
    x(null, b);
    function x(A, C) {
      const j = jt(g);
      o.run(o.parse(j), j, (w, N, U) => {
        if (w || !N || !U)
          E(w);
        else {
          const te = o.stringify(N, U);
          te == null || (yu(te) ? U.value = te : U.result = te), E(w, U);
        }
      });
      function E(w, N) {
        w || !N ? C(w) : A ? A(N) : b(null, N);
      }
    }
  }
  function m(g) {
    let b;
    o.freeze(), zn("processSync", o.Parser), Ln("processSync", o.Compiler);
    const x = jt(g);
    return o.process(x, A), Oi("processSync", "process", b), x;
    function A(C) {
      b = !0, xi(C);
    }
  }
}
function Pi(e, t) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (mu(e.prototype) || t in e.prototype);
}
function mu(e) {
  let t;
  for (t in e)
    if (tl.call(e, t))
      return !0;
  return !1;
}
function zn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function Ln(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Nn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ri(e) {
  if (!sr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Oi(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function jt(e) {
  return gu(e) ? e : new Zo(e);
}
function gu(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function yu(e) {
  return typeof e == "string" || Qo(e);
}
const bu = {};
function ku(e, t) {
  const n = t || bu, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return rl(e, r, i);
}
function rl(e, t, n) {
  if (xu(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Fi(e.children, t, n);
  }
  return Array.isArray(e) ? Fi(e, t, n) : "";
}
function Fi(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = rl(e[i], t, n);
  return r.join("");
}
function xu(e) {
  return !!(e && typeof e == "object");
}
function Je(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function $e(e, t) {
  return e.length > 0 ? (Je(e, e.length, 0, t), e) : t;
}
const Ii = {}.hasOwnProperty;
function wu(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    vu(t, e[n]);
  return t;
}
function vu(e, t) {
  let n;
  for (n in t) {
    const i = (Ii.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        Ii.call(i, l) || (i[l] = []);
        const a = o[l];
        Eu(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Eu(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Je(e, 0, 0, r);
}
const Su = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ye = ot(/[A-Za-z]/), Le = ot(/[\dA-Za-z]/), Cu = ot(/[#-'*+\--9=?A-Z^-~]/);
function ur(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const cr = ot(/\d/), Tu = ot(/[\dA-Fa-f]/), Au = ot(/[!-/:-@[-`{-~]/);
function J(e) {
  return e !== null && e < -2;
}
function Ie(e) {
  return e !== null && (e < 0 || e === 32);
}
function he(e) {
  return e === -2 || e === -1 || e === 32;
}
const Pu = ot(Su), Ru = ot(/\s/);
function ot(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function xe(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return he(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return he(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const Ou = {
  tokenize: Fu
};
function Fu(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    i
  );
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), xe(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return J(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Iu = {
  tokenize: _u
}, _i = {
  tokenize: ju
};
function _u(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < n.length) {
      const j = n[r];
      return t.containerState = j[1], e.attempt(
        j[0].continuation,
        s,
        c
      )(C);
    }
    return c(C);
  }
  function s(C) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const j = t.events.length;
      let E = j, w;
      for (; E--; )
        if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
          w = t.events[E][1].end;
          break;
        }
      x(r);
      let N = j;
      for (; N < t.events.length; )
        t.events[N][1].end = Object.assign({}, w), N++;
      return Je(
        t.events,
        E + 1,
        0,
        t.events.slice(j)
      ), t.events.length = N, c(C);
    }
    return a(C);
  }
  function c(C) {
    if (r === n.length) {
      if (!i)
        return d(C);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(C);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      _i,
      f,
      u
    )(C);
  }
  function f(C) {
    return i && A(), x(r), d(C);
  }
  function u(C) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, m(C);
  }
  function d(C) {
    return t.containerState = {}, e.attempt(
      _i,
      p,
      m
    )(C);
  }
  function p(C) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(C);
  }
  function m(C) {
    if (C === null) {
      i && A(), x(0), e.consume(C);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: o,
      _tokenizer: i
    }), g(C);
  }
  function g(C) {
    if (C === null) {
      b(e.exit("chunkFlow"), !0), x(0), e.consume(C);
      return;
    }
    return J(C) ? (e.consume(C), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(C), g);
  }
  function b(C, j) {
    const E = t.sliceStream(C);
    if (j && E.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(E), t.parser.lazy[C.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < l && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > l)
        )
          return;
      const N = t.events.length;
      let U = N, te, v;
      for (; U--; )
        if (t.events[U][0] === "exit" && t.events[U][1].type === "chunkFlow") {
          if (te) {
            v = t.events[U][1].end;
            break;
          }
          te = !0;
        }
      for (x(r), w = N; w < t.events.length; )
        t.events[w][1].end = Object.assign({}, v), w++;
      Je(
        t.events,
        U + 1,
        0,
        t.events.slice(N)
      ), t.events.length = w;
    }
  }
  function x(C) {
    let j = n.length;
    for (; j-- > C; ) {
      const E = n[j];
      t.containerState = E[1], E[0].exit.call(t, e);
    }
    n.length = C;
  }
  function A() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function ju(e, t, n) {
  return xe(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function ji(e) {
  if (e === null || Ie(e) || Ru(e))
    return 1;
  if (Pu(e))
    return 2;
}
function Ar(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const fr = {
  name: "attention",
  tokenize: zu,
  resolveAll: Du
};
function Du(e, t) {
  let n = -1, r, i, o, l, a, s, c, f;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const u = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Di(u, -s), Di(d, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: u,
            end: Object.assign({}, e[r][1].end)
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: d
          }, o = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: Object.assign({}, l.start),
            end: Object.assign({}, a.end)
          }, e[r][1].end = Object.assign({}, l.start), e[n][1].start = Object.assign({}, a.end), c = [], e[r][1].end.offset - e[r][1].start.offset && (c = $e(c, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), c = $e(c, [
            ["enter", i, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", o, t]
          ]), c = $e(
            c,
            Ar(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), c = $e(c, [
            ["exit", o, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", i, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, c = $e(c, [
            ["enter", e[n][1], t],
            ["exit", e[n][1], t]
          ])) : f = 0, Je(e, r - 1, n - r + 3, c), n = r + c.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function zu(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = ji(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const c = e.exit("attentionSequence"), f = ji(s), u = !f || f === 2 && i || n.includes(s), d = !i || i === 2 && f || n.includes(r);
    return c._open = !!(o === 42 ? u : u && (i || !d)), c._close = !!(o === 42 ? d : d && (f || !u)), t(s);
  }
}
function Di(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Lu = {
  name: "autolink",
  tokenize: Nu
};
function Nu(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ye(p) ? (e.consume(p), l) : c(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || Le(p) ? (r = 1, a(p)) : c(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, s) : (p === 43 || p === 45 || p === 46 || Le(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, c(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || ur(p) ? n(p) : (e.consume(p), s);
  }
  function c(p) {
    return p === 64 ? (e.consume(p), f) : Cu(p) ? (e.consume(p), c) : n(p);
  }
  function f(p) {
    return Le(p) ? u(p) : n(p);
  }
  function u(p) {
    return p === 46 ? (e.consume(p), r = 0, f) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || Le(p)) && r++ < 63) {
      const m = p === 45 ? d : u;
      return e.consume(p), m;
    }
    return n(p);
  }
}
const kn = {
  tokenize: Mu,
  partial: !0
};
function Mu(e, t, n) {
  return r;
  function r(o) {
    return he(o) ? xe(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || J(o) ? t(o) : n(o);
  }
}
const il = {
  name: "blockQuote",
  tokenize: $u,
  continuation: {
    tokenize: Bu
  },
  exit: Uu
};
function $u(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return n(l);
  }
  function o(l) {
    return he(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Bu(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return he(l) ? xe(
      e,
      o,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(l) : o(l);
  }
  function o(l) {
    return e.attempt(il, t, n)(l);
  }
}
function Uu(e) {
  e.exit("blockQuote");
}
const ol = {
  name: "characterEscape",
  tokenize: qu
};
function qu(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Au(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const zi = document.createElement("i");
function Pr(e) {
  const t = "&" + e + ";";
  zi.innerHTML = t;
  const n = zi.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const ll = {
  name: "characterReference",
  tokenize: Hu
};
function Hu(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(u) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), s;
  }
  function s(u) {
    return u === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(u), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), o = 31, l = Le, f(u));
  }
  function c(u) {
    return u === 88 || u === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(u), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Tu, f) : (e.enter("characterReferenceValue"), o = 7, l = cr, f(u));
  }
  function f(u) {
    if (u === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === Le && !Pr(r.sliceSerialize(d)) ? n(u) : (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(u) && i++ < o ? (e.consume(u), f) : n(u);
  }
}
const Li = {
  tokenize: Wu,
  partial: !0
}, Ni = {
  name: "codeFenced",
  tokenize: Vu,
  concrete: !0
};
function Vu(e, t, n) {
  const r = this, i = {
    tokenize: E,
    partial: !0
  };
  let o = 0, l = 0, a;
  return s;
  function s(w) {
    return c(w);
  }
  function c(w) {
    const N = r.events[r.events.length - 1];
    return o = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(w);
  }
  function f(w) {
    return w === a ? (l++, e.consume(w), f) : l < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), he(w) ? xe(e, u, "whitespace")(w) : u(w));
  }
  function u(w) {
    return w === null || J(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Li, g, j)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || J(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(w)) : he(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), xe(e, p, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), d);
  }
  function p(w) {
    return w === null || J(w) ? u(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(w));
  }
  function m(w) {
    return w === null || J(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(w)) : w === 96 && w === a ? n(w) : (e.consume(w), m);
  }
  function g(w) {
    return e.attempt(i, j, b)(w);
  }
  function b(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), x;
  }
  function x(w) {
    return o > 0 && he(w) ? xe(
      e,
      A,
      "linePrefix",
      o + 1
    )(w) : A(w);
  }
  function A(w) {
    return w === null || J(w) ? e.check(Li, g, j)(w) : (e.enter("codeFlowValue"), C(w));
  }
  function C(w) {
    return w === null || J(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), C);
  }
  function j(w) {
    return e.exit("codeFenced"), t(w);
  }
  function E(w, N, U) {
    let te = 0;
    return v;
    function v(G) {
      return w.enter("lineEnding"), w.consume(G), w.exit("lineEnding"), _;
    }
    function _(G) {
      return w.enter("codeFencedFence"), he(G) ? xe(
        w,
        z,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(G) : z(G);
    }
    function z(G) {
      return G === a ? (w.enter("codeFencedFenceSequence"), Q(G)) : U(G);
    }
    function Q(G) {
      return G === a ? (te++, w.consume(G), Q) : te >= l ? (w.exit("codeFencedFenceSequence"), he(G) ? xe(w, Z, "whitespace")(G) : Z(G)) : U(G);
    }
    function Z(G) {
      return G === null || J(G) ? (w.exit("codeFencedFence"), N(G)) : U(G);
    }
  }
}
function Wu(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Mn = {
  name: "codeIndented",
  tokenize: Gu
}, Yu = {
  tokenize: Ju,
  partial: !0
};
function Gu(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return e.enter("codeIndented"), xe(e, o, "linePrefix", 4 + 1)(c);
  }
  function o(c) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? l(c) : n(c);
  }
  function l(c) {
    return c === null ? s(c) : J(c) ? e.attempt(Yu, l, s)(c) : (e.enter("codeFlowValue"), a(c));
  }
  function a(c) {
    return c === null || J(c) ? (e.exit("codeFlowValue"), l(c)) : (e.consume(c), a);
  }
  function s(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function Ju(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : xe(e, o, "linePrefix", 4 + 1)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : J(l) ? i(l) : n(l);
  }
}
const Ku = {
  name: "codeText",
  tokenize: Zu,
  resolve: Xu,
  previous: Qu
};
function Xu(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Qu(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Zu(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(u) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(u);
  }
  function a(u) {
    return u === 96 ? (e.consume(u), r++, a) : (e.exit("codeTextSequence"), s(u));
  }
  function s(u) {
    return u === null ? n(u) : u === 32 ? (e.enter("space"), e.consume(u), e.exit("space"), s) : u === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(u)) : J(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), s) : (e.enter("codeTextData"), c(u));
  }
  function c(u) {
    return u === null || u === 32 || u === 96 || J(u) ? (e.exit("codeTextData"), s(u)) : (e.consume(u), c);
  }
  function f(u) {
    return u === 96 ? (e.consume(u), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(u)) : (o.type = "codeTextData", c(u));
  }
}
function al(e) {
  const t = {};
  let n = -1, r, i, o, l, a, s, c;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ec(e, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o-- && (l = e[o], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, n), a.unshift(r), Je(e, i, n - i + 1, a));
    }
  }
  return !c;
}
function ec(e, t) {
  const n = e[t][1], r = e[t][2];
  let i = t - 1;
  const o = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, s = [], c = {};
  let f, u, d = -1, p = n, m = 0, g = 0;
  const b = [g];
  for (; p; ) {
    for (; e[++i][1] !== p; )
      ;
    o.push(i), p._tokenizer || (f = r.sliceStream(p), p.next || f.push(null), u && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(f), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), u = p, p = p.next;
  }
  for (p = n; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (g = d + 1, b.push(g), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : b.pop(), d = b.length; d--; ) {
    const x = a.slice(b[d], b[d + 1]), A = o.pop();
    s.unshift([A, A + x.length - 1]), Je(e, A, 2, x);
  }
  for (d = -1; ++d < s.length; )
    c[m + s[d][0]] = m + s[d][1], m += s[d][1] - s[d][0] - 1;
  return c;
}
const tc = {
  tokenize: ic,
  resolve: rc
}, nc = {
  tokenize: oc,
  partial: !0
};
function rc(e) {
  return al(e), e;
}
function ic(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : J(a) ? e.check(
      nc,
      l,
      o
    )(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function oc(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), xe(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || J(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function sl(e, t, n, r, i, o, l, a, s) {
  const c = s || Number.POSITIVE_INFINITY;
  let f = 0;
  return u;
  function u(x) {
    return x === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(x), e.exit(o), d) : x === null || x === 32 || x === 41 || ur(x) ? n(x) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(x));
  }
  function d(x) {
    return x === 62 ? (e.enter(o), e.consume(x), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(x));
  }
  function p(x) {
    return x === 62 ? (e.exit("chunkString"), e.exit(a), d(x)) : x === null || x === 60 || J(x) ? n(x) : (e.consume(x), x === 92 ? m : p);
  }
  function m(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), p) : p(x);
  }
  function g(x) {
    return !f && (x === null || x === 41 || Ie(x)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(x)) : f < c && x === 40 ? (e.consume(x), f++, g) : x === 41 ? (e.consume(x), f--, g) : x === null || x === 32 || x === 40 || ur(x) ? n(x) : (e.consume(x), x === 92 ? b : g);
  }
  function b(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), g) : g(x);
  }
}
function ul(e, t, n, r, i, o) {
  const l = this;
  let a = 0, s;
  return c;
  function c(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), f;
  }
  function f(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : J(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), u(p));
  }
  function u(p) {
    return p === null || p === 91 || p === 93 || J(p) || a++ > 999 ? (e.exit("chunkString"), f(p)) : (e.consume(p), s || (s = !he(p)), p === 92 ? d : u);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, u) : u(p);
  }
}
function cl(e, t, n, r, i, o) {
  let l;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), l = d === 40 ? 41 : d, s) : n(d);
  }
  function s(d) {
    return d === l ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), c(d));
  }
  function c(d) {
    return d === l ? (e.exit(o), s(l)) : d === null ? n(d) : J(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), xe(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === l || d === null || J(d) ? (e.exit("chunkString"), c(d)) : (e.consume(d), d === 92 ? u : f);
  }
  function u(d) {
    return d === l || d === 92 ? (e.consume(d), f) : f(d);
  }
}
function Lt(e, t) {
  let n;
  return r;
  function r(i) {
    return J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : he(i) ? xe(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(i) : t(i);
  }
}
function kt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const lc = {
  name: "definition",
  tokenize: sc
}, ac = {
  tokenize: uc,
  partial: !0
};
function sc(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return ul.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return i = kt(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : n(p);
  }
  function s(p) {
    return Ie(p) ? Lt(e, c)(p) : c(p);
  }
  function c(p) {
    return sl(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function f(p) {
    return e.attempt(ac, u, u)(p);
  }
  function u(p) {
    return he(p) ? xe(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || J(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function uc(e, t, n) {
  return r;
  function r(a) {
    return Ie(a) ? Lt(e, i)(a) : n(a);
  }
  function i(a) {
    return cl(
      e,
      o,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function o(a) {
    return he(a) ? xe(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || J(a) ? t(a) : n(a);
  }
}
const cc = {
  name: "hardBreakEscape",
  tokenize: fc
};
function fc(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return J(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const pc = {
  name: "headingAtx",
  tokenize: dc,
  resolve: hc
};
function hc(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Je(e, r, n - r + 1, [
    ["enter", i, t],
    ["enter", o, t],
    ["exit", o, t],
    ["exit", i, t]
  ])), e;
}
function dc(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), l(f);
  }
  function l(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), l) : f === null || Ie(f) ? (e.exit("atxHeadingSequence"), a(f)) : n(f);
  }
  function a(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), s(f)) : f === null || J(f) ? (e.exit("atxHeading"), t(f)) : he(f) ? xe(e, a, "whitespace")(f) : (e.enter("atxHeadingText"), c(f));
  }
  function s(f) {
    return f === 35 ? (e.consume(f), s) : (e.exit("atxHeadingSequence"), a(f));
  }
  function c(f) {
    return f === null || f === 35 || Ie(f) ? (e.exit("atxHeadingText"), a(f)) : (e.consume(f), c);
  }
}
const mc = [
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
], Mi = ["pre", "script", "style", "textarea"], gc = {
  name: "htmlFlow",
  tokenize: xc,
  resolveTo: kc,
  concrete: !0
}, yc = {
  tokenize: vc,
  partial: !0
}, bc = {
  tokenize: wc,
  partial: !0
};
function kc(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function xc(e, t, n) {
  const r = this;
  let i, o, l, a, s;
  return c;
  function c(y) {
    return f(y);
  }
  function f(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), u;
  }
  function u(y) {
    return y === 33 ? (e.consume(y), d) : y === 47 ? (e.consume(y), o = !0, g) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : h) : Ye(y) ? (e.consume(y), l = String.fromCharCode(y), b) : n(y);
  }
  function d(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, a = 0, m) : Ye(y) ? (e.consume(y), i = 4, r.interrupt ? t : h) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : h) : n(y);
  }
  function m(y) {
    const B = "CDATA[";
    return y === B.charCodeAt(a++) ? (e.consume(y), a === B.length ? r.interrupt ? t : z : m) : n(y);
  }
  function g(y) {
    return Ye(y) ? (e.consume(y), l = String.fromCharCode(y), b) : n(y);
  }
  function b(y) {
    if (y === null || y === 47 || y === 62 || Ie(y)) {
      const B = y === 47, ne = l.toLowerCase();
      return !B && !o && Mi.includes(ne) ? (i = 1, r.interrupt ? t(y) : z(y)) : mc.includes(l.toLowerCase()) ? (i = 6, B ? (e.consume(y), x) : r.interrupt ? t(y) : z(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? A(y) : C(y));
    }
    return y === 45 || Le(y) ? (e.consume(y), l += String.fromCharCode(y), b) : n(y);
  }
  function x(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : z) : n(y);
  }
  function A(y) {
    return he(y) ? (e.consume(y), A) : v(y);
  }
  function C(y) {
    return y === 47 ? (e.consume(y), v) : y === 58 || y === 95 || Ye(y) ? (e.consume(y), j) : he(y) ? (e.consume(y), C) : v(y);
  }
  function j(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Le(y) ? (e.consume(y), j) : E(y);
  }
  function E(y) {
    return y === 61 ? (e.consume(y), w) : he(y) ? (e.consume(y), E) : C(y);
  }
  function w(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), s = y, N) : he(y) ? (e.consume(y), w) : U(y);
  }
  function N(y) {
    return y === s ? (e.consume(y), s = null, te) : y === null || J(y) ? n(y) : (e.consume(y), N);
  }
  function U(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || Ie(y) ? E(y) : (e.consume(y), U);
  }
  function te(y) {
    return y === 47 || y === 62 || he(y) ? C(y) : n(y);
  }
  function v(y) {
    return y === 62 ? (e.consume(y), _) : n(y);
  }
  function _(y) {
    return y === null || J(y) ? z(y) : he(y) ? (e.consume(y), _) : n(y);
  }
  function z(y) {
    return y === 45 && i === 2 ? (e.consume(y), oe) : y === 60 && i === 1 ? (e.consume(y), H) : y === 62 && i === 4 ? (e.consume(y), F) : y === 63 && i === 3 ? (e.consume(y), h) : y === 93 && i === 5 ? (e.consume(y), we) : J(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(
      yc,
      q,
      Q
    )(y)) : y === null || J(y) ? (e.exit("htmlFlowData"), Q(y)) : (e.consume(y), z);
  }
  function Q(y) {
    return e.check(
      bc,
      Z,
      q
    )(y);
  }
  function Z(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), G;
  }
  function G(y) {
    return y === null || J(y) ? Q(y) : (e.enter("htmlFlowData"), z(y));
  }
  function oe(y) {
    return y === 45 ? (e.consume(y), h) : z(y);
  }
  function H(y) {
    return y === 47 ? (e.consume(y), l = "", ue) : z(y);
  }
  function ue(y) {
    if (y === 62) {
      const B = l.toLowerCase();
      return Mi.includes(B) ? (e.consume(y), F) : z(y);
    }
    return Ye(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), ue) : z(y);
  }
  function we(y) {
    return y === 93 ? (e.consume(y), h) : z(y);
  }
  function h(y) {
    return y === 62 ? (e.consume(y), F) : y === 45 && i === 2 ? (e.consume(y), h) : z(y);
  }
  function F(y) {
    return y === null || J(y) ? (e.exit("htmlFlowData"), q(y)) : (e.consume(y), F);
  }
  function q(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function wc(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function vc(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(kn, t, n);
  }
}
const Ec = {
  name: "htmlText",
  tokenize: Sc
};
function Sc(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s;
  }
  function s(h) {
    return h === 33 ? (e.consume(h), c) : h === 47 ? (e.consume(h), E) : h === 63 ? (e.consume(h), C) : Ye(h) ? (e.consume(h), U) : n(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), f) : h === 91 ? (e.consume(h), o = 0, m) : Ye(h) ? (e.consume(h), A) : n(h);
  }
  function f(h) {
    return h === 45 ? (e.consume(h), p) : n(h);
  }
  function u(h) {
    return h === null ? n(h) : h === 45 ? (e.consume(h), d) : J(h) ? (l = u, H(h)) : (e.consume(h), u);
  }
  function d(h) {
    return h === 45 ? (e.consume(h), p) : u(h);
  }
  function p(h) {
    return h === 62 ? oe(h) : h === 45 ? d(h) : u(h);
  }
  function m(h) {
    const F = "CDATA[";
    return h === F.charCodeAt(o++) ? (e.consume(h), o === F.length ? g : m) : n(h);
  }
  function g(h) {
    return h === null ? n(h) : h === 93 ? (e.consume(h), b) : J(h) ? (l = g, H(h)) : (e.consume(h), g);
  }
  function b(h) {
    return h === 93 ? (e.consume(h), x) : g(h);
  }
  function x(h) {
    return h === 62 ? oe(h) : h === 93 ? (e.consume(h), x) : g(h);
  }
  function A(h) {
    return h === null || h === 62 ? oe(h) : J(h) ? (l = A, H(h)) : (e.consume(h), A);
  }
  function C(h) {
    return h === null ? n(h) : h === 63 ? (e.consume(h), j) : J(h) ? (l = C, H(h)) : (e.consume(h), C);
  }
  function j(h) {
    return h === 62 ? oe(h) : C(h);
  }
  function E(h) {
    return Ye(h) ? (e.consume(h), w) : n(h);
  }
  function w(h) {
    return h === 45 || Le(h) ? (e.consume(h), w) : N(h);
  }
  function N(h) {
    return J(h) ? (l = N, H(h)) : he(h) ? (e.consume(h), N) : oe(h);
  }
  function U(h) {
    return h === 45 || Le(h) ? (e.consume(h), U) : h === 47 || h === 62 || Ie(h) ? te(h) : n(h);
  }
  function te(h) {
    return h === 47 ? (e.consume(h), oe) : h === 58 || h === 95 || Ye(h) ? (e.consume(h), v) : J(h) ? (l = te, H(h)) : he(h) ? (e.consume(h), te) : oe(h);
  }
  function v(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Le(h) ? (e.consume(h), v) : _(h);
  }
  function _(h) {
    return h === 61 ? (e.consume(h), z) : J(h) ? (l = _, H(h)) : he(h) ? (e.consume(h), _) : te(h);
  }
  function z(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), i = h, Q) : J(h) ? (l = z, H(h)) : he(h) ? (e.consume(h), z) : (e.consume(h), Z);
  }
  function Q(h) {
    return h === i ? (e.consume(h), i = void 0, G) : h === null ? n(h) : J(h) ? (l = Q, H(h)) : (e.consume(h), Q);
  }
  function Z(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || Ie(h) ? te(h) : (e.consume(h), Z);
  }
  function G(h) {
    return h === 47 || h === 62 || Ie(h) ? te(h) : n(h);
  }
  function oe(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
  }
  function H(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), ue;
  }
  function ue(h) {
    return he(h) ? xe(
      e,
      we,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(h) : we(h);
  }
  function we(h) {
    return e.enter("htmlTextData"), l(h);
  }
}
const Rr = {
  name: "labelEnd",
  tokenize: Oc,
  resolveTo: Rc,
  resolveAll: Pc
}, Cc = {
  tokenize: Fc
}, Tc = {
  tokenize: Ic
}, Ac = {
  tokenize: _c
};
function Pc(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function Rc(e, t) {
  let n = e.length, r = 0, i, o, l, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else
      i.type === "labelEnd" && (l = n);
  const s = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, c = {
    type: "label",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[l][1].end)
  }, f = {
    type: "labelText",
    start: Object.assign({}, e[o + r + 2][1].end),
    end: Object.assign({}, e[l - 2][1].start)
  };
  return a = [
    ["enter", s, t],
    ["enter", c, t]
  ], a = $e(a, e.slice(o + 1, o + r + 3)), a = $e(a, [["enter", f, t]]), a = $e(
    a,
    Ar(
      t.parser.constructs.insideSpan.null,
      e.slice(o + r + 4, l - 3),
      t
    )
  ), a = $e(a, [
    ["exit", f, t],
    e[l - 2],
    e[l - 1],
    ["exit", c, t]
  ]), a = $e(a, e.slice(l + 1)), a = $e(a, [["exit", s, t]]), Je(e, o, e.length, a), e;
}
function Oc(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o ? o._inactive ? u(d) : (l = r.parser.defined.includes(
      kt(
        r.sliceSerialize({
          start: o.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(d);
  }
  function s(d) {
    return d === 40 ? e.attempt(
      Cc,
      f,
      l ? f : u
    )(d) : d === 91 ? e.attempt(
      Tc,
      f,
      l ? c : u
    )(d) : l ? f(d) : u(d);
  }
  function c(d) {
    return e.attempt(
      Ac,
      f,
      u
    )(d);
  }
  function f(d) {
    return t(d);
  }
  function u(d) {
    return o._balanced = !0, n(d);
  }
}
function Fc(e, t, n) {
  return r;
  function r(u) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), i;
  }
  function i(u) {
    return Ie(u) ? Lt(e, o)(u) : o(u);
  }
  function o(u) {
    return u === 41 ? f(u) : sl(
      e,
      l,
      a,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(u);
  }
  function l(u) {
    return Ie(u) ? Lt(e, s)(u) : f(u);
  }
  function a(u) {
    return n(u);
  }
  function s(u) {
    return u === 34 || u === 39 || u === 40 ? cl(
      e,
      c,
      n,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(u) : f(u);
  }
  function c(u) {
    return Ie(u) ? Lt(e, f)(u) : f(u);
  }
  function f(u) {
    return u === 41 ? (e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), e.exit("resource"), t) : n(u);
  }
}
function Ic(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ul.call(
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
    ) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function _c(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const jc = {
  name: "labelStartImage",
  tokenize: Dc,
  resolveAll: Rr.resolveAll
};
function Dc(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const zc = {
  name: "labelStartLink",
  tokenize: Lc,
  resolveAll: Rr.resolveAll
};
function Lc(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const $n = {
  name: "lineEnding",
  tokenize: Nc
};
function Nc(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), xe(e, t, "linePrefix");
  }
}
const sn = {
  name: "thematicBreak",
  tokenize: Mc
};
function Mc(e, t, n) {
  let r = 0, i;
  return o;
  function o(c) {
    return e.enter("thematicBreak"), l(c);
  }
  function l(c) {
    return i = c, a(c);
  }
  function a(c) {
    return c === i ? (e.enter("thematicBreakSequence"), s(c)) : r >= 3 && (c === null || J(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function s(c) {
    return c === i ? (e.consume(c), r++, s) : (e.exit("thematicBreakSequence"), he(c) ? xe(e, a, "whitespace")(c) : a(c));
  }
}
const Fe = {
  name: "list",
  tokenize: Uc,
  continuation: {
    tokenize: qc
  },
  exit: Vc
}, $c = {
  tokenize: Wc,
  partial: !0
}, Bc = {
  tokenize: Hc,
  partial: !0
};
function Uc(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const m = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : cr(p)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(sn, n, c)(p) : c(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return n(p);
  }
  function s(p) {
    return cr(p) && ++l < 10 ? (e.consume(p), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), c(p)) : n(p);
  }
  function c(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      kn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(
        $c,
        d,
        u
      )
    );
  }
  function f(p) {
    return r.containerState.initialBlankLine = !0, o++, d(p);
  }
  function u(p) {
    return he(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function qc(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(kn, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, xe(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !he(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Bc, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, xe(
      e,
      e.attempt(Fe, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a);
  }
}
function Hc(e, t, n) {
  const r = this;
  return xe(
    e,
    i,
    "listItemIndent",
    r.containerState.size + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Vc(e) {
  e.exit(this.containerState.type);
}
function Wc(e, t, n) {
  const r = this;
  return xe(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !he(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const $i = {
  name: "setextUnderline",
  tokenize: Gc,
  resolveTo: Yc
};
function Yc(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const l = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function Gc(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(c) {
    let f = r.events.length, u;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        u = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || u) ? (e.enter("setextHeadingLine"), i = c, l(c)) : n(c);
  }
  function l(c) {
    return e.enter("setextHeadingLineSequence"), a(c);
  }
  function a(c) {
    return c === i ? (e.consume(c), a) : (e.exit("setextHeadingLineSequence"), he(c) ? xe(e, s, "lineSuffix")(c) : s(c));
  }
  function s(c) {
    return c === null || J(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const Jc = {
  tokenize: Kc
};
function Kc(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    kn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      xe(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(tc, i)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Xc = {
  resolveAll: pl()
}, Qc = fl("string"), Zc = fl("text");
function fl(e) {
  return {
    tokenize: t,
    resolveAll: pl(
      e === "text" ? ef : void 0
    )
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, a);
    return l;
    function l(f) {
      return c(f) ? o(f) : a(f);
    }
    function a(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), s;
    }
    function s(f) {
      return c(f) ? (n.exit("data"), o(f)) : (n.consume(f), s);
    }
    function c(f) {
      if (f === null)
        return !0;
      const u = i[f];
      let d = -1;
      if (u)
        for (; ++d < u.length; ) {
          const p = u[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function pl(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function ef(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, l = -1, a = 0, s;
      for (; o--; ) {
        const c = i[o];
        if (typeof c == "string") {
          for (l = c.length; c.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l)
            break;
          l = -1;
        } else if (c === -2)
          s = !0, a++;
        else if (c !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const c = {
          type: n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + o,
            _bufferIndex: o ? l : r.start._bufferIndex + l
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, c.start), r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(
          n,
          0,
          ["enter", c, t],
          ["exit", c, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function tf(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
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
    attempt: N(E),
    check: N(w),
    interrupt: N(w, {
      interrupt: !0
    })
  }, c = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: p,
    sliceSerialize: d,
    now: m,
    defineSkip: g,
    write: u
  };
  let f = t.tokenize.call(c, s);
  return t.resolveAll && o.push(t), c;
  function u(_) {
    return l = $e(l, _), b(), l[l.length - 1] !== null ? [] : (U(t, 0), c.events = Ar(o, c.events, c), c.events);
  }
  function d(_, z) {
    return rf(p(_), z);
  }
  function p(_) {
    return nf(l, _);
  }
  function m() {
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
          x(z.charCodeAt(r._bufferIndex));
      else
        x(z);
    }
  }
  function x(_) {
    f = f(_);
  }
  function A(_) {
    J(_) ? (r.line++, r.column = 1, r.offset += _ === -3 ? 2 : 1, v()) : _ !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = _;
  }
  function C(_, z) {
    const Q = z || {};
    return Q.type = _, Q.start = m(), c.events.push(["enter", Q, c]), a.push(Q), Q;
  }
  function j(_) {
    const z = a.pop();
    return z.end = m(), c.events.push(["exit", z, c]), z;
  }
  function E(_, z) {
    U(_, z.from);
  }
  function w(_, z) {
    z.restore();
  }
  function N(_, z) {
    return Q;
    function Q(Z, G, oe) {
      let H, ue, we, h;
      return Array.isArray(Z) ? q(Z) : "tokenize" in Z ? (
        // @ts-expect-error Looks like a construct.
        q([Z])
      ) : F(Z);
      function F(M) {
        return W;
        function W(Y) {
          const re = Y !== null && M[Y], K = Y !== null && M.null, Ee = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(K) ? K : K ? [K] : []
          ];
          return q(Ee)(Y);
        }
      }
      function q(M) {
        return H = M, ue = 0, M.length === 0 ? oe : y(M[ue]);
      }
      function y(M) {
        return W;
        function W(Y) {
          return h = te(), we = M, M.partial || (c.currentConstruct = M), M.name && c.parser.constructs.disable.null.includes(M.name) ? ne() : M.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(c), z) : c,
            s,
            B,
            ne
          )(Y);
        }
      }
      function B(M) {
        return _(we, h), G;
      }
      function ne(M) {
        return h.restore(), ++ue < H.length ? y(H[ue]) : oe;
      }
    }
  }
  function U(_, z) {
    _.resolveAll && !o.includes(_) && o.push(_), _.resolve && Je(
      c.events,
      z,
      c.events.length - z,
      _.resolve(c.events.slice(z), c)
    ), _.resolveTo && (c.events = _.resolveTo(c.events, c));
  }
  function te() {
    const _ = m(), z = c.previous, Q = c.currentConstruct, Z = c.events.length, G = Array.from(a);
    return {
      restore: oe,
      from: Z
    };
    function oe() {
      r = _, c.previous = z, c.currentConstruct = Q, c.events.length = Z, a = G, v();
    }
  }
  function v() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function nf(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, o)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function rf(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
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
          l = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i)
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
const of = {
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
  62: il
}, lf = {
  91: lc
}, af = {
  [-2]: Mn,
  [-1]: Mn,
  32: Mn
}, sf = {
  35: pc,
  42: sn,
  45: [$i, sn],
  60: gc,
  61: $i,
  95: sn,
  96: Ni,
  126: Ni
}, uf = {
  38: ll,
  92: ol
}, cf = {
  [-5]: $n,
  [-4]: $n,
  [-3]: $n,
  33: jc,
  38: ll,
  42: fr,
  60: [Lu, Ec],
  91: zc,
  92: [cc, ol],
  93: Rr,
  95: fr,
  96: Ku
}, ff = {
  null: [fr, Xc]
}, pf = {
  null: [42, 95]
}, hf = {
  null: []
}, df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: pf,
  contentInitial: lf,
  disable: hf,
  document: of,
  flow: sf,
  flowInitial: af,
  insideSpan: ff,
  string: uf,
  text: cf
}, Symbol.toStringTag, { value: "Module" }));
function mf(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    wu([df, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: i(Ou),
    document: i(Iu),
    flow: i(Jc),
    string: i(Qc),
    text: i(Zc)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return tf(r, o, a);
    }
  }
}
const Bi = /[\0\t\n\r]/g;
function gf() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let c, f, u, d, p;
    for (o = t + o.toString(l), u = 0, t = "", n && (o.charCodeAt(0) === 65279 && u++, n = void 0); u < o.length; ) {
      if (Bi.lastIndex = u, c = Bi.exec(o), d = c && c.index !== void 0 ? c.index : o.length, p = o.charCodeAt(d), !c) {
        t = o.slice(u);
        break;
      }
      if (p === 10 && u === d && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), u < d && (s.push(o.slice(u, d)), e += d - u), p) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, s.push(-2); e++ < f; )
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
      u = d + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
function yf(e) {
  for (; !al(e); )
    ;
  return e;
}
function hl(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || // Out of range
    n > 1114111 ? "�" : String.fromCharCode(n)
  );
}
const bf = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function kf(e) {
  return e.replace(bf, xf);
}
function xf(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return hl(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Pr(n) || e;
}
const dl = {}.hasOwnProperty, wf = (
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
  function(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), vf(n)(
      yf(
        mf(n).document().write(gf()(e, t, !0))
      )
    );
  }
);
function vf(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Gt),
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
      htmlFlow: a(At, s),
      htmlFlowData: _,
      htmlText: a(At, s),
      htmlTextData: _,
      image: a(dt),
      label: s,
      link: a(Gt),
      listItem: a(Pt),
      listItemValue: m,
      listOrdered: a(Jt, p),
      listUnordered: a(Jt),
      paragraph: a(Sn),
      reference: ne,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(Ne),
      strong: a(Cn),
      thematicBreak: a(Xt)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: N,
      autolink: f(),
      autolinkEmail: K,
      autolinkProtocol: re,
      blockQuote: f(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: W,
      characterReferenceMarkerNumeric: W,
      characterReferenceValue: Y,
      codeFenced: f(A),
      codeFencedFence: x,
      codeFencedFenceInfo: g,
      codeFencedFenceMeta: b,
      codeFlowValue: z,
      codeIndented: f(C),
      codeText: f(H),
      codeTextData: z,
      data: z,
      definition: f(),
      definitionDestinationString: w,
      definitionLabelString: j,
      definitionTitleString: E,
      emphasis: f(),
      hardBreakEscape: f(Z),
      hardBreakTrailing: f(Z),
      htmlFlow: f(G),
      htmlFlowData: z,
      htmlText: f(oe),
      htmlTextData: z,
      image: f(we),
      label: F,
      labelText: h,
      lineEnding: Q,
      link: f(ue),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: M,
      resourceDestinationString: q,
      resourceTitleString: y,
      resource: B,
      setextHeading: f(v),
      setextHeadingLineSequence: te,
      setextHeadingText: U,
      strong: f(),
      thematicBreak: f()
    }
  };
  ml(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(S) {
    let I = {
      type: "root",
      children: []
    };
    const V = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: c,
      exit: u,
      buffer: s,
      resume: d,
      setData: o,
      getData: l
    }, ce = [];
    let fe = -1;
    for (; ++fe < S.length; )
      if (S[fe][1].type === "listOrdered" || S[fe][1].type === "listUnordered")
        if (S[fe][0] === "enter")
          ce.push(fe);
        else {
          const je = ce.pop();
          fe = i(S, je, fe);
        }
    for (fe = -1; ++fe < S.length; ) {
      const je = t[S[fe][0]];
      dl.call(je, S[fe][1].type) && je[S[fe][1].type].call(
        Object.assign(
          {
            sliceSerialize: S[fe][2].sliceSerialize
          },
          V
        ),
        S[fe][1]
      );
    }
    if (V.tokenStack.length > 0) {
      const je = V.tokenStack[V.tokenStack.length - 1];
      (je[1] || Ui).call(V, void 0, je[0]);
    }
    for (I.position = {
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
    }, fe = -1; ++fe < t.transforms.length; )
      I = t.transforms[fe](I) || I;
    return I;
  }
  function i(S, I, V) {
    let ce = I - 1, fe = -1, je = !1, Ve, He, lt, at;
    for (; ++ce <= V; ) {
      const ve = S[ce];
      if (ve[1].type === "listUnordered" || ve[1].type === "listOrdered" || ve[1].type === "blockQuote" ? (ve[0] === "enter" ? fe++ : fe--, at = void 0) : ve[1].type === "lineEndingBlank" ? ve[0] === "enter" && (Ve && !at && !fe && !lt && (lt = ce), at = void 0) : ve[1].type === "linePrefix" || ve[1].type === "listItemValue" || ve[1].type === "listItemMarker" || ve[1].type === "listItemPrefix" || ve[1].type === "listItemPrefixWhitespace" || (at = void 0), !fe && ve[0] === "enter" && ve[1].type === "listItemPrefix" || fe === -1 && ve[0] === "exit" && (ve[1].type === "listUnordered" || ve[1].type === "listOrdered")) {
        if (Ve) {
          let Rt = ce;
          for (He = void 0; Rt--; ) {
            const De = S[Rt];
            if (De[1].type === "lineEnding" || De[1].type === "lineEndingBlank") {
              if (De[0] === "exit")
                continue;
              He && (S[He][1].type = "lineEndingBlank", je = !0), De[1].type = "lineEnding", He = Rt;
            } else if (!(De[1].type === "linePrefix" || De[1].type === "blockQuotePrefix" || De[1].type === "blockQuotePrefixWhitespace" || De[1].type === "blockQuoteMarker" || De[1].type === "listItemIndent"))
              break;
          }
          lt && (!He || lt < He) && (Ve._spread = !0), Ve.end = Object.assign(
            {},
            He ? S[He][1].start : ve[1].end
          ), S.splice(He || ce, 0, ["exit", Ve, ve[2]]), ce++, V++;
        }
        ve[1].type === "listItemPrefix" && (Ve = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, ve[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, S.splice(ce, 0, ["enter", Ve, ve[2]]), ce++, V++, lt = void 0, at = !0);
      }
    }
    return S[I][1]._spread = je, V;
  }
  function o(S, I) {
    n[S] = I;
  }
  function l(S) {
    return n[S];
  }
  function a(S, I) {
    return V;
    function V(ce) {
      c.call(this, S(ce), ce), I && I.call(this, ce);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(S, I, V) {
    return this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([I, V]), S.position = {
      start: rt(I.start)
    }, S;
  }
  function f(S) {
    return I;
    function I(V) {
      S && S.call(this, V), u.call(this, V);
    }
  }
  function u(S, I) {
    const V = this.stack.pop(), ce = this.tokenStack.pop();
    if (ce)
      ce[0].type !== S.type && (I ? I.call(this, S, ce[0]) : (ce[1] || Ui).call(this, S, ce[0]));
    else
      throw new Error(
        "Cannot close `" + S.type + "` (" + zt({
          start: S.start,
          end: S.end
        }) + "): it’s not open"
      );
    return V.position.end = rt(S.end), V;
  }
  function d() {
    return ku(this.stack.pop());
  }
  function p() {
    o("expectingFirstListItemValue", !0);
  }
  function m(S) {
    if (l("expectingFirstListItemValue")) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(S), 10), o("expectingFirstListItemValue");
    }
  }
  function g() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = S;
  }
  function b() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = S;
  }
  function x() {
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
    const I = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = I, V.identifier = kt(
      this.sliceSerialize(S)
    ).toLowerCase();
  }
  function E() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function w() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function N(S) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const V = this.sliceSerialize(S).length;
      I.depth = V;
    }
  }
  function U() {
    o("setextHeadingSlurpLineEnding", !0);
  }
  function te(S) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(S).charCodeAt(0) === 61 ? 1 : 2;
  }
  function v() {
    o("setextHeadingSlurpLineEnding");
  }
  function _(S) {
    const I = this.stack[this.stack.length - 1];
    let V = I.children[I.children.length - 1];
    (!V || V.type !== "text") && (V = Kt(), V.position = {
      start: rt(S.start)
    }, I.children.push(V)), this.stack.push(V);
  }
  function z(S) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(S), I.position.end = rt(S.end);
  }
  function Q(S) {
    const I = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const V = I.children[I.children.length - 1];
      V.position.end = rt(S.end), o("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(I.type) && (_.call(this, S), z.call(this, S));
  }
  function Z() {
    o("atHardBreak", !0);
  }
  function G() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function oe() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function H() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function ue() {
    const S = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const I = l("referenceType") || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    o("referenceType");
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
  function h(S) {
    const I = this.sliceSerialize(S), V = this.stack[this.stack.length - 2];
    V.label = kf(I), V.identifier = kt(I).toLowerCase();
  }
  function F() {
    const S = this.stack[this.stack.length - 1], I = this.resume(), V = this.stack[this.stack.length - 1];
    if (o("inReference", !0), V.type === "link") {
      const ce = S.children;
      V.children = ce;
    } else
      V.alt = I;
  }
  function q() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function y() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function B() {
    o("inReference");
  }
  function ne() {
    o("referenceType", "collapsed");
  }
  function M(S) {
    const I = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = I, V.identifier = kt(
      this.sliceSerialize(S)
    ).toLowerCase(), o("referenceType", "full");
  }
  function W(S) {
    o("characterReferenceType", S.type);
  }
  function Y(S) {
    const I = this.sliceSerialize(S), V = l("characterReferenceType");
    let ce;
    V ? (ce = hl(
      I,
      V === "characterReferenceMarkerNumeric" ? 10 : 16
    ), o("characterReferenceType")) : ce = Pr(I);
    const fe = this.stack.pop();
    fe.value += ce, fe.position.end = rt(S.end);
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
  function At() {
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
  function Gt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Jt(S) {
    return {
      type: "list",
      ordered: S.type === "listOrdered",
      start: null,
      spread: S._spread,
      children: []
    };
  }
  function Pt(S) {
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
  function Kt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Xt() {
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
function ml(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? ml(e, r) : Ef(e, r);
  }
}
function Ef(e, t) {
  let n;
  for (n in t)
    if (dl.call(t, n)) {
      if (n === "canContainEols") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "transforms") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "enter" || n === "exit") {
        const r = t[n];
        r && Object.assign(e[n], r);
      }
    }
}
function Ui(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + zt({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + zt({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + zt({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function Sf(e) {
  Object.assign(this, { Parser: (n) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return wf(
      n,
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
function Cf(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Tf(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Af(e, t) {
  const n = t.value ? t.value + `
` : "", r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null, i = {};
  r && (i.className = ["language-" + r]);
  let o = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function Pf(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rf(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ct(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && Le(e.charCodeAt(n + 1)) && Le(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function gl(e, t) {
  const n = String(t.identifier).toUpperCase(), r = Ct(n.toLowerCase()), i = e.footnoteOrder.indexOf(n);
  let o;
  i === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[n]++, o = i + 1);
  const l = e.footnoteCounts[n], a = {
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
  e.patch(t, a);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [a]
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Of(e, t) {
  const n = e.footnoteById;
  let r = 1;
  for (; r in n; )
    r++;
  const i = String(r);
  return n[i] = {
    type: "footnoteDefinition",
    identifier: i,
    children: [{ type: "paragraph", children: t.children }],
    position: t.position
  }, gl(e, {
    type: "footnoteReference",
    identifier: i,
    position: t.position
  });
}
function Ff(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function If(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function yl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function _f(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return yl(e, t);
  const r = { src: Ct(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function jf(e, t) {
  const n = { src: Ct(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Df(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function zf(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return yl(e, t);
  const r = { href: Ct(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function Lf(e, t) {
  const n = { href: Ct(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Nf(e, t, n) {
  const r = e.all(t), i = n ? Mf(n) : bl(t), o = {}, l = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let u;
    f && f.type === "element" && f.tagName === "p" ? u = f : (u = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(u)), u.children.length > 0 && u.children.unshift({ type: "text", value: " " }), u.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const f = r[a];
    (i || a !== 0 || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? l.push(...f.children) : l.push(f);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, c), e.applyData(t, c);
}
function Mf(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = bl(n[r]);
  }
  return t;
}
function bl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function $f(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Bf(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Uf(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function qf(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Or = kl("start"), Fr = kl("end");
function Hf(e) {
  return { start: Or(e), end: Fr(e) };
}
function kl(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
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
function Vf(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = Or(t.children[1]), s = Fr(t.children[t.children.length - 1]);
    a.line && s.line && (l.position = { start: a, end: s }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Wf(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let s = -1;
  const c = [];
  for (; ++s < a; ) {
    const u = t.children[s], d = {}, p = l ? l[s] : void 0;
    p && (d.align = p);
    let m = { type: "element", tagName: o, properties: d, children: [] };
    u && (m.children = e.all(u), e.patch(u, m), m = e.applyData(t, m)), c.push(m);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function Yf(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const qi = 9, Hi = 32;
function Gf(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Vi(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Vi(t.slice(i), i > 0, !1)), o.join("");
}
function Vi(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === qi || o === Hi; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === qi || o === Hi; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Jf(e, t) {
  const n = { type: "text", value: Gf(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Kf(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Xf = {
  blockquote: Cf,
  break: Tf,
  code: Af,
  delete: Pf,
  emphasis: Rf,
  footnoteReference: gl,
  footnote: Of,
  heading: Ff,
  html: If,
  imageReference: _f,
  image: jf,
  inlineCode: Df,
  linkReference: zf,
  link: Lf,
  listItem: Nf,
  list: $f,
  paragraph: Bf,
  root: Uf,
  strong: qf,
  table: Vf,
  tableCell: Yf,
  tableRow: Wf,
  text: Jf,
  thematicBreak: Kf,
  toml: Qt,
  yaml: Qt,
  definition: Qt,
  footnoteDefinition: Qt
};
function Qt() {
  return null;
}
const xl = (
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
      return tp;
    if (typeof e == "string")
      return ep(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Qf(e) : Zf(e);
    if (typeof e == "function")
      return xn(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Qf(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = xl(e[n]);
  return xn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].call(this, ...i))
        return !0;
    return !1;
  }
}
function Zf(e) {
  return xn(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function ep(e) {
  return xn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function xn(e) {
  return t;
  function t(n, ...r) {
    return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r));
  }
}
function tp() {
  return !0;
}
const np = !0, Wi = !1, rp = "skip", ip = (
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
  function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
    const i = xl(t), o = r ? -1 : 1;
    l(e, void 0, [])();
    function l(a, s, c) {
      const f = a && typeof a == "object" ? a : {};
      if (typeof f.type == "string") {
        const d = (
          // `hast`
          typeof f.tagName == "string" ? f.tagName : (
            // `xast`
            typeof f.name == "string" ? f.name : void 0
          )
        );
        Object.defineProperty(u, "name", {
          value: "node (" + (a.type + (d ? "<" + d + ">" : "")) + ")"
        });
      }
      return u;
      function u() {
        let d = [], p, m, g;
        if ((!t || i(a, s, c[c.length - 1] || null)) && (d = op(n(a, c)), d[0] === Wi))
          return d;
        if (a.children && d[0] !== rp)
          for (m = (r ? a.children.length : -1) + o, g = c.concat(a); m > -1 && m < a.children.length; ) {
            if (p = l(a.children[m], m, g)(), p[0] === Wi)
              return p;
            m = typeof p[1] == "number" ? p[1] : m + o;
          }
        return d;
      }
    }
  }
);
function op(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [np, e] : [e];
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
  function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), ip(e, t, i, r);
    function i(o, l) {
      const a = l[l.length - 1];
      return n(
        o,
        a ? a.children.indexOf(o) : null,
        a
      );
    }
  }
);
function lp(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Yi = {}.hasOwnProperty;
function ap(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return Ir(e, "definition", (r) => {
    const i = Gi(r.identifier);
    i && !Yi.call(t, i) && (t[i] = r);
  }), n;
  function n(r) {
    const i = Gi(r);
    return i && Yi.call(t, i) ? t[i] : null;
  }
}
function Gi(e) {
  return String(e || "").toUpperCase();
}
const cn = {}.hasOwnProperty;
function sp(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, i = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...Xf, ...n.handlers }, l.definition = ap(e), l.footnoteById = i, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = up, l.applyData = cp, l.one = a, l.all = s, l.wrap = pp, l.augment = o, Ir(e, "footnoteDefinition", (c) => {
    const f = String(c.identifier).toUpperCase();
    cn.call(i, f) || (i[f] = c);
  }), l;
  function o(c, f) {
    if (c && "data" in c && c.data) {
      const u = c.data;
      u.hName && (f.type !== "element" && (f = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), f.tagName = u.hName), f.type === "element" && u.hProperties && (f.properties = { ...f.properties, ...u.hProperties }), "children" in f && f.children && u.hChildren && (f.children = u.hChildren);
    }
    if (c) {
      const u = "type" in c ? c : { position: c };
      lp(u) || (f.position = { start: Or(u), end: Fr(u) });
    }
    return f;
  }
  function l(c, f, u, d) {
    return Array.isArray(u) && (d = u, u = {}), o(c, {
      type: "element",
      tagName: f,
      properties: u || {},
      children: d || []
    });
  }
  function a(c, f) {
    return wl(l, c, f);
  }
  function s(c) {
    return _r(l, c);
  }
}
function up(e, t) {
  e.position && (t.position = Hf(e));
}
function cp(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    typeof r == "string" && (n.type === "element" ? n.tagName = r : n = {
      type: "element",
      tagName: r,
      properties: {},
      children: []
    }), n.type === "element" && o && (n.properties = { ...n.properties, ...o }), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function wl(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return cn.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: _r(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : fp(e, t);
}
function _r(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const o = wl(e, r[i], t);
      if (o) {
        if (i && r[i - 1].type === "break" && (!Array.isArray(o) && o.type === "text" && (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && o.type === "element")) {
          const l = o.children[0];
          l && l.type === "text" && (l.value = l.value.replace(/^\s+/, ""));
        }
        Array.isArray(o) ? n.push(...o) : n.push(o);
      }
    }
  }
  return n;
}
function fp(e, t) {
  const n = t.data || {}, r = "value" in t && !(cn.call(n, "hProperties") || cn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: _r(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function pp(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function hp(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const i = e.all(r), o = String(r.identifier).toUpperCase(), l = Ct(o.toLowerCase());
    let a = 0;
    const s = [];
    for (; ++a <= e.footnoteCounts[o]; ) {
      const u = {
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
      a > 1 && u.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(a) }]
      }), s.length > 0 && s.push({ type: "text", value: " " }), s.push(u);
    }
    const c = i[i.length - 1];
    if (c && c.type === "element" && c.tagName === "p") {
      const u = c.children[c.children.length - 1];
      u && u.type === "text" ? u.value += " " : c.children.push({ type: "text", value: " " }), c.children.push(...s);
    } else
      i.push(...s);
    const f = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + l },
      children: e.wrap(i, !0)
    };
    e.patch(r, f), t.push(f);
  }
  if (t.length !== 0)
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
          children: e.wrap(t, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
function vl(e, t) {
  const n = sp(e, t), r = n.one(e, null), i = hp(n);
  return i && r.children.push({ type: "text", value: `
` }, i), Array.isArray(r) ? { type: "root", children: r } : r;
}
const dp = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  function(e, t) {
    return e && "run" in e ? gp(e, t) : yp(e || t);
  }
), mp = dp;
function gp(e, t) {
  return (n, r, i) => {
    e.run(vl(n, t), r, (o) => {
      i(o);
    });
  };
}
function yp(e) {
  return (t) => vl(t, e);
}
var pr = { exports: {} }, Zt = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ji;
function bp() {
  if (Ji)
    return de;
  Ji = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var w = E.$$typeof;
      switch (w) {
        case t:
          switch (E = E.type, E) {
            case s:
            case c:
            case r:
            case o:
            case i:
            case u:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case f:
                case m:
                case p:
                case l:
                  return E;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function j(E) {
    return C(E) === c;
  }
  return de.AsyncMode = s, de.ConcurrentMode = c, de.ContextConsumer = a, de.ContextProvider = l, de.Element = t, de.ForwardRef = f, de.Fragment = r, de.Lazy = m, de.Memo = p, de.Portal = n, de.Profiler = o, de.StrictMode = i, de.Suspense = u, de.isAsyncMode = function(E) {
    return j(E) || C(E) === s;
  }, de.isConcurrentMode = j, de.isContextConsumer = function(E) {
    return C(E) === a;
  }, de.isContextProvider = function(E) {
    return C(E) === l;
  }, de.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, de.isForwardRef = function(E) {
    return C(E) === f;
  }, de.isFragment = function(E) {
    return C(E) === r;
  }, de.isLazy = function(E) {
    return C(E) === m;
  }, de.isMemo = function(E) {
    return C(E) === p;
  }, de.isPortal = function(E) {
    return C(E) === n;
  }, de.isProfiler = function(E) {
    return C(E) === o;
  }, de.isStrictMode = function(E) {
    return C(E) === i;
  }, de.isSuspense = function(E) {
    return C(E) === u;
  }, de.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === c || E === o || E === i || E === u || E === d || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === p || E.$$typeof === l || E.$$typeof === a || E.$$typeof === f || E.$$typeof === b || E.$$typeof === x || E.$$typeof === A || E.$$typeof === g);
  }, de.typeOf = C, de;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function kp() {
  return Ki || (Ki = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === c || D === o || D === i || D === u || D === d || typeof D == "object" && D !== null && (D.$$typeof === m || D.$$typeof === p || D.$$typeof === l || D.$$typeof === a || D.$$typeof === f || D.$$typeof === b || D.$$typeof === x || D.$$typeof === A || D.$$typeof === g);
    }
    function j(D) {
      if (typeof D == "object" && D !== null) {
        var Pe = D.$$typeof;
        switch (Pe) {
          case t:
            var $ = D.type;
            switch ($) {
              case s:
              case c:
              case r:
              case o:
              case i:
              case u:
                return $;
              default:
                var _e = $ && $.$$typeof;
                switch (_e) {
                  case a:
                  case f:
                  case m:
                  case p:
                  case l:
                    return _e;
                  default:
                    return Pe;
                }
            }
          case n:
            return Pe;
        }
      }
    }
    var E = s, w = c, N = a, U = l, te = t, v = f, _ = r, z = m, Q = p, Z = n, G = o, oe = i, H = u, ue = !1;
    function we(D) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(D) || j(D) === s;
    }
    function h(D) {
      return j(D) === c;
    }
    function F(D) {
      return j(D) === a;
    }
    function q(D) {
      return j(D) === l;
    }
    function y(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function B(D) {
      return j(D) === f;
    }
    function ne(D) {
      return j(D) === r;
    }
    function M(D) {
      return j(D) === m;
    }
    function W(D) {
      return j(D) === p;
    }
    function Y(D) {
      return j(D) === n;
    }
    function re(D) {
      return j(D) === o;
    }
    function K(D) {
      return j(D) === i;
    }
    function Ee(D) {
      return j(D) === u;
    }
    me.AsyncMode = E, me.ConcurrentMode = w, me.ContextConsumer = N, me.ContextProvider = U, me.Element = te, me.ForwardRef = v, me.Fragment = _, me.Lazy = z, me.Memo = Q, me.Portal = Z, me.Profiler = G, me.StrictMode = oe, me.Suspense = H, me.isAsyncMode = we, me.isConcurrentMode = h, me.isContextConsumer = F, me.isContextProvider = q, me.isElement = y, me.isForwardRef = B, me.isFragment = ne, me.isLazy = M, me.isMemo = W, me.isPortal = Y, me.isProfiler = re, me.isStrictMode = K, me.isSuspense = Ee, me.isValidElementType = C, me.typeOf = j;
  }()), me;
}
var Xi;
function El() {
  return Xi || (Xi = 1, process.env.NODE_ENV === "production" ? Zt.exports = bp() : Zt.exports = kp()), Zt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bn, Qi;
function xp() {
  if (Qi)
    return Bn;
  Qi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
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
      var s = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bn = i() ? Object.assign : function(o, l) {
    for (var a, s = r(o), c, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var u in a)
        t.call(a, u) && (s[u] = a[u]);
      if (e) {
        c = e(a);
        for (var d = 0; d < c.length; d++)
          n.call(a, c[d]) && (s[c[d]] = a[c[d]]);
      }
    }
    return s;
  }, Bn;
}
var Un, Zi;
function jr() {
  if (Zi)
    return Un;
  Zi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Un = e, Un;
}
var qn, eo;
function Sl() {
  return eo || (eo = 1, qn = Function.call.bind(Object.prototype.hasOwnProperty)), qn;
}
var Hn, to;
function wp() {
  if (to)
    return Hn;
  to = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = jr(), n = {}, r = Sl();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(o, l, a, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (r(o, f)) {
          var u;
          try {
            if (typeof o[f] != "function") {
              var d = Error(
                (s || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            u = o[f](l, f, s, a, null, t);
          } catch (m) {
            u = m;
          }
          if (u && !(u instanceof Error) && e(
            (s || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + a + " type: " + u.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Hn = i, Hn;
}
var Vn, no;
function vp() {
  if (no)
    return Vn;
  no = 1;
  var e = El(), t = xp(), n = jr(), r = Sl(), i = wp(), o = function() {
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
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function u(h) {
      var F = h && (c && h[c] || h[f]);
      if (typeof F == "function")
        return F;
    }
    var d = "<<anonymous>>", p = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: A(),
      arrayOf: C,
      element: j(),
      elementType: E(),
      instanceOf: w,
      node: v(),
      objectOf: U,
      oneOf: N,
      oneOfType: te,
      shape: z,
      exact: Q
    };
    function m(h, F) {
      return h === F ? h !== 0 || 1 / h === 1 / F : h !== h && F !== F;
    }
    function g(h, F) {
      this.message = h, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(h) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, q = 0;
      function y(ne, M, W, Y, re, K, Ee) {
        if (Y = Y || d, K = K || W, Ee !== n) {
          if (s) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = Y + ":" + W;
            !F[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[Pe] = !0, q++);
          }
        }
        return M[W] == null ? ne ? M[W] === null ? new g("The " + re + " `" + K + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new g("The " + re + " `" + K + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : h(M, W, Y, re, K);
      }
      var B = y.bind(null, !1);
      return B.isRequired = y.bind(null, !0), B;
    }
    function x(h) {
      function F(q, y, B, ne, M, W) {
        var Y = q[y], re = oe(Y);
        if (re !== h) {
          var K = H(Y);
          return new g(
            "Invalid " + ne + " `" + M + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected ") + ("`" + h + "`."),
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
      function F(q, y, B, ne, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var W = q[y];
        if (!Array.isArray(W)) {
          var Y = oe(W);
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected an array."));
        }
        for (var re = 0; re < W.length; re++) {
          var K = h(W, re, B, ne, M + "[" + re + "]", n);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return b(F);
    }
    function j() {
      function h(F, q, y, B, ne) {
        var M = F[q];
        if (!a(M)) {
          var W = oe(M);
          return new g("Invalid " + B + " `" + ne + "` of type " + ("`" + W + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(h);
    }
    function E() {
      function h(F, q, y, B, ne) {
        var M = F[q];
        if (!e.isValidElementType(M)) {
          var W = oe(M);
          return new g("Invalid " + B + " `" + ne + "` of type " + ("`" + W + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(h);
    }
    function w(h) {
      function F(q, y, B, ne, M) {
        if (!(q[y] instanceof h)) {
          var W = h.name || d, Y = we(q[y]);
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected ") + ("instance of `" + W + "`."));
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
      function F(q, y, B, ne, M) {
        for (var W = q[y], Y = 0; Y < h.length; Y++)
          if (m(W, h[Y]))
            return null;
        var re = JSON.stringify(h, function(Ee, D) {
          var Pe = H(D);
          return Pe === "symbol" ? String(D) : D;
        });
        return new g("Invalid " + ne + " `" + M + "` of value `" + String(W) + "` " + ("supplied to `" + B + "`, expected one of " + re + "."));
      }
      return b(F);
    }
    function U(h) {
      function F(q, y, B, ne, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var W = q[y], Y = oe(W);
        if (Y !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected an object."));
        for (var re in W)
          if (r(W, re)) {
            var K = h(W, re, B, ne, M + "." + re, n);
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
        var q = h[F];
        if (typeof q != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(q) + " at index " + F + "."
          ), l;
      }
      function y(B, ne, M, W, Y) {
        for (var re = [], K = 0; K < h.length; K++) {
          var Ee = h[K], D = Ee(B, ne, M, W, Y, n);
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
      function h(F, q, y, B, ne) {
        return Z(F[q]) ? null : new g("Invalid " + B + " `" + ne + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return b(h);
    }
    function _(h, F, q, y, B) {
      return new g(
        (h || "React class") + ": " + F + " type `" + q + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function z(h) {
      function F(q, y, B, ne, M) {
        var W = q[y], Y = oe(W);
        if (Y !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type `" + Y + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var re in h) {
          var K = h[re];
          if (typeof K != "function")
            return _(B, ne, M, re, H(K));
          var Ee = K(W, re, B, ne, M + "." + re, n);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return b(F);
    }
    function Q(h) {
      function F(q, y, B, ne, M) {
        var W = q[y], Y = oe(W);
        if (Y !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type `" + Y + "` " + ("supplied to `" + B + "`, expected `object`."));
        var re = t({}, q[y], h);
        for (var K in re) {
          var Ee = h[K];
          if (r(h, K) && typeof Ee != "function")
            return _(B, ne, M, K, H(Ee));
          if (!Ee)
            return new g(
              "Invalid " + ne + " `" + M + "` key `" + K + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(q[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var D = Ee(W, K, B, ne, M + "." + K, n);
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
          var F = u(h);
          if (F) {
            var q = F.call(h), y;
            if (F !== h.entries) {
              for (; !(y = q.next()).done; )
                if (!Z(y.value))
                  return !1;
            } else
              for (; !(y = q.next()).done; ) {
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
    function G(h, F) {
      return h === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function oe(h) {
      var F = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : G(F, h) ? "symbol" : F;
    }
    function H(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var F = oe(h);
      if (F === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function ue(h) {
      var F = H(h);
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
    function we(h) {
      return !h.constructor || !h.constructor.name ? d : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Vn;
}
var Wn, ro;
function Ep() {
  if (ro)
    return Wn;
  ro = 1;
  var e = jr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Wn = function() {
    function r(l, a, s, c, f, u) {
      if (u !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Wn;
}
if (process.env.NODE_ENV !== "production") {
  var Sp = El(), Cp = !0;
  pr.exports = vp()(Sp.isElement, Cp);
} else
  pr.exports = Ep()();
var Tp = pr.exports;
const ee = /* @__PURE__ */ Ut(Tp);
class Wt {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Wt.prototype.property = {};
Wt.prototype.normal = {};
Wt.prototype.space = null;
function Cl(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new Wt(n, r, t);
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
  constructor(t, n) {
    this.property = t, this.attribute = n;
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
let Ap = 0;
const ie = ht(), Te = ht(), Tl = ht(), O = ht(), ke = ht(), xt = ht(), ze = ht();
function ht() {
  return 2 ** ++Ap;
}
const dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ie,
  booleanish: Te,
  commaOrSpaceSeparated: ze,
  commaSeparated: xt,
  number: O,
  overloadedBoolean: Tl,
  spaceSeparated: ke
}, Symbol.toStringTag, { value: "Module" })), Yn = Object.keys(dr);
class Dr extends qe {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), io(this, "space", i), typeof r == "number")
      for (; ++o < Yn.length; ) {
        const l = Yn[o];
        io(this, Yn[o], (r & dr[l]) === dr[l]);
      }
  }
}
Dr.prototype.defined = !0;
function io(e, t, n) {
  n && (e[t] = n);
}
const Pp = {}.hasOwnProperty;
function Tt(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Pp.call(e.properties, r)) {
      const i = e.properties[r], o = new Dr(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[hr(r)] = r, n[hr(o.attribute)] = r;
    }
  return new Wt(t, n, e.space);
}
const Al = Tt({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
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
}), Pl = Tt({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Rl(e, t) {
  return t in e ? e[t] : t;
}
function Ol(e, t) {
  return Rl(e, t.toLowerCase());
}
const Fl = Tt({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Ol,
  properties: { xmlns: null, xmlnsXLink: null }
}), Il = Tt({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Te,
    ariaAutoComplete: null,
    ariaBusy: Te,
    ariaChecked: Te,
    ariaColCount: O,
    ariaColIndex: O,
    ariaColSpan: O,
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
    ariaLevel: O,
    ariaLive: null,
    ariaModal: Te,
    ariaMultiLine: Te,
    ariaMultiSelectable: Te,
    ariaOrientation: null,
    ariaOwns: ke,
    ariaPlaceholder: null,
    ariaPosInSet: O,
    ariaPressed: Te,
    ariaReadOnly: Te,
    ariaRelevant: null,
    ariaRequired: Te,
    ariaRoleDescription: ke,
    ariaRowCount: O,
    ariaRowIndex: O,
    ariaRowSpan: O,
    ariaSelected: Te,
    ariaSetSize: O,
    ariaSort: null,
    ariaValueMax: O,
    ariaValueMin: O,
    ariaValueNow: O,
    ariaValueText: null,
    role: null
  }
}), Rp = Tt({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Ol,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: xt,
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
    cols: O,
    colSpan: null,
    content: null,
    contentEditable: Te,
    controls: ie,
    controlsList: ke,
    coords: O | xt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ie,
    defer: ie,
    dir: null,
    dirName: null,
    disabled: ie,
    download: Tl,
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
    height: O,
    hidden: ie,
    high: O,
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
    low: O,
    manifest: null,
    max: null,
    maxLength: O,
    media: null,
    method: null,
    min: null,
    minLength: O,
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
    optimum: O,
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
    rows: O,
    rowSpan: O,
    sandbox: ke,
    scope: null,
    scoped: ie,
    seamless: ie,
    selected: ie,
    shape: null,
    size: O,
    sizes: null,
    slot: null,
    span: O,
    spellCheck: Te,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: O,
    step: null,
    style: null,
    tabIndex: O,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ie,
    useMap: null,
    value: Te,
    width: O,
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
    border: O,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: O,
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
    hSpace: O,
    // `<img>` and `<object>`
    leftMargin: O,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: O,
    // `<body>`
    marginWidth: O,
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
    rightMargin: O,
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
    topMargin: O,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: O,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ie,
    disableRemotePlayback: ie,
    prefix: null,
    property: null,
    results: O,
    security: null,
    unselectable: null
  }
}), Op = Tt({
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
  transform: Rl,
  properties: {
    about: ze,
    accentHeight: O,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: O,
    amplitude: O,
    arabicForm: null,
    ascent: O,
    attributeName: null,
    attributeType: null,
    azimuth: O,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: O,
    by: null,
    calcMode: null,
    capHeight: O,
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
    descent: O,
    diffuseConstant: O,
    direction: null,
    display: null,
    dur: null,
    divisor: O,
    dominantBaseline: null,
    download: ie,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: O,
    enableBackground: null,
    end: null,
    event: null,
    exponent: O,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: O,
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
    g1: xt,
    g2: xt,
    glyphName: xt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: O,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: O,
    horizOriginX: O,
    horizOriginY: O,
    id: null,
    ideographic: O,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: O,
    k: O,
    k1: O,
    k2: O,
    k3: O,
    k4: O,
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
    limitingConeAngle: O,
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
    mediaSize: O,
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
    overlinePosition: O,
    overlineThickness: O,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: O,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ke,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: O,
    pointsAtY: O,
    pointsAtZ: O,
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
    specularConstant: O,
    specularExponent: O,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: O,
    strikethroughThickness: O,
    string: null,
    stroke: null,
    strokeDashArray: ze,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: O,
    strokeOpacity: O,
    strokeWidth: null,
    style: null,
    surfaceScale: O,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ze,
    tabIndex: O,
    tableValues: null,
    target: null,
    targetX: O,
    targetY: O,
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
    underlinePosition: O,
    underlineThickness: O,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: O,
    values: null,
    vAlphabetic: O,
    vMathematical: O,
    vectorEffect: null,
    vHanging: O,
    vIdeographic: O,
    version: null,
    vertAdvY: O,
    vertOriginX: O,
    vertOriginY: O,
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
    xHeight: O,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Fp = /^data[-\w.:]+$/i, oo = /-[a-z]/g, Ip = /[A-Z]/g;
function _p(e, t) {
  const n = hr(t);
  let r = t, i = qe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Fp.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(oo, Dp);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!oo.test(o)) {
        let l = o.replace(Ip, jp);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = Dr;
  }
  return new i(r, t);
}
function jp(e) {
  return "-" + e.toLowerCase();
}
function Dp(e) {
  return e.charAt(1).toUpperCase();
}
const lo = {
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
}, zp = Cl([Pl, Al, Fl, Il, Rp], "html"), Lp = Cl([Pl, Al, Fl, Il, Op], "svg");
function Np(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      Ir(t, "element", (n, r, i) => {
        const o = (
          /** @type {Element|Root} */
          i
        );
        let l;
        if (e.allowedElements ? l = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (l = e.disallowedElements.includes(n.tagName)), !l && e.allowElement && typeof r == "number" && (l = !e.allowElement(n, r, o)), l && typeof r == "number")
          return e.unwrapDisallowed && n.children ? o.children.splice(r, 1, ...n.children) : o.children.splice(r, 1), r;
      });
    };
}
var mr = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function Mp() {
  if (ao)
    return ge;
  ao = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function g(b) {
    if (typeof b == "object" && b !== null) {
      var x = b.$$typeof;
      switch (x) {
        case e:
          switch (b = b.type, b) {
            case n:
            case i:
            case r:
            case c:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case l:
                case s:
                case d:
                case u:
                case o:
                  return b;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ge.ContextConsumer = l, ge.ContextProvider = o, ge.Element = e, ge.ForwardRef = s, ge.Fragment = n, ge.Lazy = d, ge.Memo = u, ge.Portal = t, ge.Profiler = i, ge.StrictMode = r, ge.Suspense = c, ge.SuspenseList = f, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(b) {
    return g(b) === l;
  }, ge.isContextProvider = function(b) {
    return g(b) === o;
  }, ge.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, ge.isForwardRef = function(b) {
    return g(b) === s;
  }, ge.isFragment = function(b) {
    return g(b) === n;
  }, ge.isLazy = function(b) {
    return g(b) === d;
  }, ge.isMemo = function(b) {
    return g(b) === u;
  }, ge.isPortal = function(b) {
    return g(b) === t;
  }, ge.isProfiler = function(b) {
    return g(b) === i;
  }, ge.isStrictMode = function(b) {
    return g(b) === r;
  }, ge.isSuspense = function(b) {
    return g(b) === c;
  }, ge.isSuspenseList = function(b) {
    return g(b) === f;
  }, ge.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === i || b === r || b === c || b === f || b === p || typeof b == "object" && b !== null && (b.$$typeof === d || b.$$typeof === u || b.$$typeof === o || b.$$typeof === l || b.$$typeof === s || b.$$typeof === m || b.getModuleId !== void 0);
  }, ge.typeOf = g, ge;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function $p() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = !1, g = !1, b = !1, x = !1, A = !1, C;
    C = Symbol.for("react.module.reference");
    function j($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === i || A || $ === r || $ === c || $ === f || x || $ === p || m || g || b || typeof $ == "object" && $ !== null && ($.$$typeof === d || $.$$typeof === u || $.$$typeof === o || $.$$typeof === l || $.$$typeof === s || // This needs to include all possible module reference object
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
              case n:
              case i:
              case r:
              case c:
              case f:
                return Ne;
              default:
                var tt = Ne && Ne.$$typeof;
                switch (tt) {
                  case a:
                  case l:
                  case s:
                  case d:
                  case u:
                  case o:
                    return tt;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var w = l, N = o, U = e, te = s, v = n, _ = d, z = u, Q = t, Z = i, G = r, oe = c, H = f, ue = !1, we = !1;
    function h($) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F($) {
      return we || (we = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q($) {
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
      return E($) === n;
    }
    function W($) {
      return E($) === d;
    }
    function Y($) {
      return E($) === u;
    }
    function re($) {
      return E($) === t;
    }
    function K($) {
      return E($) === i;
    }
    function Ee($) {
      return E($) === r;
    }
    function D($) {
      return E($) === c;
    }
    function Pe($) {
      return E($) === f;
    }
    ye.ContextConsumer = w, ye.ContextProvider = N, ye.Element = U, ye.ForwardRef = te, ye.Fragment = v, ye.Lazy = _, ye.Memo = z, ye.Portal = Q, ye.Profiler = Z, ye.StrictMode = G, ye.Suspense = oe, ye.SuspenseList = H, ye.isAsyncMode = h, ye.isConcurrentMode = F, ye.isContextConsumer = q, ye.isContextProvider = y, ye.isElement = B, ye.isForwardRef = ne, ye.isFragment = M, ye.isLazy = W, ye.isMemo = Y, ye.isPortal = re, ye.isProfiler = K, ye.isStrictMode = Ee, ye.isSuspense = D, ye.isSuspenseList = Pe, ye.isValidElementType = j, ye.typeOf = E;
  }()), ye;
}
process.env.NODE_ENV === "production" ? mr.exports = Mp() : mr.exports = $p();
var Bp = mr.exports;
const Up = /* @__PURE__ */ Ut(Bp);
function qp(e) {
  const t = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
function Hp(e) {
  return e.join(" ").trim();
}
function Vp(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
var zr = { exports: {} }, uo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Wp = /\n/g, Yp = /^\s*/, Gp = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Jp = /^:\s*/, Kp = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Xp = /^[;\s]*/, Qp = /^\s+|\s+$/g, Zp = `
`, co = "/", fo = "*", ut = "", eh = "comment", th = "declaration", nh = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var n = 1, r = 1;
  function i(m) {
    var g = m.match(Wp);
    g && (n += g.length);
    var b = m.lastIndexOf(Zp);
    r = ~b ? m.length - b : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(g) {
      return g.position = new l(m), c(), g;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function a(m) {
    var g = new Error(
      t.source + ":" + n + ":" + r + ": " + m
    );
    if (g.reason = m, g.filename = t.source, g.line = n, g.column = r, g.source = e, !t.silent)
      throw g;
  }
  function s(m) {
    var g = m.exec(e);
    if (g) {
      var b = g[0];
      return i(b), e = e.slice(b.length), g;
    }
  }
  function c() {
    s(Yp);
  }
  function f(m) {
    var g;
    for (m = m || []; g = u(); )
      g !== !1 && m.push(g);
    return m;
  }
  function u() {
    var m = o();
    if (!(co != e.charAt(0) || fo != e.charAt(1))) {
      for (var g = 2; ut != e.charAt(g) && (fo != e.charAt(g) || co != e.charAt(g + 1)); )
        ++g;
      if (g += 2, ut === e.charAt(g - 1))
        return a("End of comment missing");
      var b = e.slice(2, g - 2);
      return r += 2, i(b), e = e.slice(g), r += 2, m({
        type: eh,
        comment: b
      });
    }
  }
  function d() {
    var m = o(), g = s(Gp);
    if (g) {
      if (u(), !s(Jp))
        return a("property missing ':'");
      var b = s(Kp), x = m({
        type: th,
        property: po(g[0].replace(uo, ut)),
        value: b ? po(b[0].replace(uo, ut)) : ut
      });
      return s(Xp), x;
    }
  }
  function p() {
    var m = [];
    f(m);
    for (var g; g = d(); )
      g !== !1 && (m.push(g), f(m));
    return m;
  }
  return c(), p();
};
function po(e) {
  return e ? e.replace(Qp, ut) : ut;
}
var rh = nh;
function _l(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  for (var r, i = rh(e), o = typeof t == "function", l, a, s = 0, c = i.length; s < c; s++)
    r = i[s], l = r.property, a = r.value, o ? t(l, a, r) : a && (n || (n = {}), n[l] = a);
  return n;
}
zr.exports = _l;
zr.exports.default = _l;
var ih = zr.exports;
const oh = /* @__PURE__ */ Ut(ih), gr = {}.hasOwnProperty, lh = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function jl(e, t) {
  const n = [];
  let r = -1, i;
  for (; ++r < t.children.length; )
    i = t.children[r], i.type === "element" ? n.push(ah(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !lh.has(t.tagName) || !qp(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
  return n;
}
function ah(e, t, n, r) {
  const i = e.options, o = i.transformLinkUri === void 0 ? Qs : i.transformLinkUri, l = e.schema, a = t.tagName, s = {};
  let c = l, f;
  if (l.space === "html" && a === "svg" && (c = Lp, e.schema = c), t.properties)
    for (f in t.properties)
      gr.call(t.properties, f) && uh(s, f, t.properties[f], e);
  (a === "ol" || a === "ul") && e.listDepth++;
  const u = jl(e, t);
  (a === "ol" || a === "ul") && e.listDepth--, e.schema = l;
  const d = t.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, p = i.components && gr.call(i.components, a) ? i.components[a] : a, m = typeof p == "string" || p === Oe.Fragment;
  if (!Up.isValidElementType(p))
    throw new TypeError(
      `Component for name \`${a}\` not defined or is not renderable`
    );
  if (s.key = n, a === "a" && i.linkTarget && (s.target = typeof i.linkTarget == "function" ? i.linkTarget(
    String(s.href || ""),
    t.children,
    typeof s.title == "string" ? s.title : null
  ) : i.linkTarget), a === "a" && o && (s.href = o(
    String(s.href || ""),
    t.children,
    typeof s.title == "string" ? s.title : null
  )), !m && a === "code" && r.type === "element" && r.tagName !== "pre" && (s.inline = !0), !m && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (s.level = Number.parseInt(a.charAt(1), 10)), a === "img" && i.transformImageUri && (s.src = i.transformImageUri(
    String(s.src || ""),
    String(s.alt || ""),
    typeof s.title == "string" ? s.title : null
  )), !m && a === "li" && r.type === "element") {
    const g = sh(t);
    s.checked = g && g.properties ? !!g.properties.checked : null, s.index = Gn(r, t), s.ordered = r.tagName === "ol";
  }
  return !m && (a === "ol" || a === "ul") && (s.ordered = a === "ol", s.depth = e.listDepth), (a === "td" || a === "th") && (s.align && (s.style || (s.style = {}), s.style.textAlign = s.align, delete s.align), m || (s.isHeader = a === "th")), !m && a === "tr" && r.type === "element" && (s.isHeader = r.tagName === "thead"), i.sourcePos && (s["data-sourcepos"] = ph(d)), !m && i.rawSourcePos && (s.sourcePosition = t.position), !m && i.includeElementIndex && (s.index = Gn(r, t), s.siblingCount = Gn(r)), m || (s.node = t), u.length > 0 ? Oe.createElement(p, s, u) : Oe.createElement(p, s);
}
function sh(e) {
  let t = -1;
  for (; ++t < e.children.length; ) {
    const n = e.children[t];
    if (n.type === "element" && n.tagName === "input")
      return n;
  }
  return null;
}
function Gn(e, t) {
  let n = -1, r = 0;
  for (; ++n < e.children.length && e.children[n] !== t; )
    e.children[n].type === "element" && r++;
  return r;
}
function uh(e, t, n, r) {
  const i = _p(r.schema, t);
  let o = n;
  o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? Vp(o) : Hp(o)), i.property === "style" && typeof o == "string" && (o = ch(o)), i.space && i.property ? e[gr.call(lo, i.property) ? lo[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o));
}
function ch(e) {
  const t = {};
  try {
    oh(e, n);
  } catch {
  }
  return t;
  function n(r, i) {
    const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    t[o.replace(/-([a-z])/g, fh)] = i;
  }
}
function fh(e, t) {
  return t.toUpperCase();
}
function ph(e) {
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
const ho = {}.hasOwnProperty, hh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", en = {
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
  for (const o in en)
    if (ho.call(en, o) && ho.call(e, o)) {
      const l = en[o];
      console.warn(
        `[react-markdown] Warning: please ${l.to ? `use \`${l.to}\` instead of` : "remove"} \`${o}\` (see <${hh}#${l.id}> for more info)`
      ), delete en[o];
    }
  const t = du().use(Sf).use(e.remarkPlugins || []).use(mp, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(Np, e), n = new Zo();
  typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = t.runSync(t.parse(n), n);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let i = Oe.createElement(
    Oe.Fragment,
    {},
    jl({ options: e, schema: zp, listDepth: 0 }, r)
  );
  return e.className && (i = Oe.createElement("div", { className: e.className }, i)), i;
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
function mo(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
const dh = Nr(/\p{P}/u), mh = Nr(/[!-/:-@[-`{-~]/);
function gh(e) {
  return mh(e) || dh(e);
}
const yh = Nr(/\s/);
function Nr(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function bh(e) {
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
      return vh;
    if (typeof e == "function")
      return wn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? kh(e) : xh(e);
    if (typeof e == "string")
      return wh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function kh(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Mr(e[n]);
  return wn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i))
        return !0;
    return !1;
  }
}
function xh(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return wn(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o])
        return !1;
    return !0;
  }
}
function wh(e) {
  return wn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function wn(e) {
  return t;
  function t(n, r, i) {
    return !!(Eh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function vh() {
  return !0;
}
function Eh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Dl = [], Sh = !0, go = !1, Ch = "skip";
function Th(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Mr(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, c, f) {
    const u = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof u.type == "string") {
      const p = (
        // `hast`
        typeof u.tagName == "string" ? u.tagName : (
          // `xast`
          typeof u.name == "string" ? u.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = Dl, m, g, b;
      if ((!t || o(s, c, f[f.length - 1] || void 0)) && (p = Ah(n(s, f)), p[0] === go))
        return p;
      if ("children" in s && s.children) {
        const x = (
          /** @type {UnistParent} */
          s
        );
        if (x.children && p[0] !== Ch)
          for (g = (r ? x.children.length : -1) + l, b = f.concat(x); g > -1 && g < x.children.length; ) {
            const A = x.children[g];
            if (m = a(A, g, b)(), m[0] === go)
              return m;
            g = typeof m[1] == "number" ? m[1] : g + l;
          }
      }
      return p;
    }
  }
}
function Ah(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Sh, e] : e == null ? Dl : [e];
}
function Ph(e, t, n) {
  const i = Mr((n || {}).ignore || []), o = Rh(t);
  let l = -1;
  for (; ++l < o.length; )
    Th(e, "text", a);
  function a(c, f) {
    let u = -1, d;
    for (; ++u < f.length; ) {
      const p = f[u], m = d ? d.children : void 0;
      if (i(
        p,
        m ? m.indexOf(p) : void 0,
        d
      ))
        return;
      d = p;
    }
    if (d)
      return s(c, f);
  }
  function s(c, f) {
    const u = f[f.length - 1], d = o[l][0], p = o[l][1];
    let m = 0;
    const b = u.children.indexOf(c);
    let x = !1, A = [];
    d.lastIndex = 0;
    let C = d.exec(c.value);
    for (; C; ) {
      const j = C.index, E = {
        index: C.index,
        input: C.input,
        stack: [...f, c]
      };
      let w = p(...C, E);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? d.lastIndex = j + 1 : (m !== j && A.push({
        type: "text",
        value: c.value.slice(m, j)
      }), Array.isArray(w) ? A.push(...w) : w && A.push(w), m = j + C[0].length, x = !0), !d.global)
        break;
      C = d.exec(c.value);
    }
    return x ? (m < c.value.length && A.push({ type: "text", value: c.value.slice(m) }), u.children.splice(b, 1, ...A)) : A = [c], b + A.length;
  }
}
function Rh(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Oh(i[0]), Fh(i[1])]);
  }
  return t;
}
function Oh(e) {
  return typeof e == "string" ? new RegExp(bh(e), "g") : e;
}
function Fh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Jn = "phrasing", Kn = ["autolink", "link", "image", "label"];
function Ih() {
  return {
    transforms: [Mh],
    enter: {
      literalAutolink: jh,
      literalAutolinkEmail: Xn,
      literalAutolinkHttp: Xn,
      literalAutolinkWww: Xn
    },
    exit: {
      literalAutolink: Nh,
      literalAutolinkEmail: Lh,
      literalAutolinkHttp: Dh,
      literalAutolinkWww: zh
    }
  };
}
function _h() {
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
function jh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Xn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Dh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function zh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Lh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Nh(e) {
  this.exit(e);
}
function Mh(e) {
  Ph(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, $h],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Bh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function $h(e, t, n, r, i) {
  let o = "";
  if (!zl(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !Uh(n)))
    return !1;
  const l = qh(n + r);
  if (!l[0])
    return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function Bh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !zl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Uh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function qh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = mo(e, "(");
  let o = mo(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function zl(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || yh(n) || gh(n)) && (!t || n !== 47);
}
function Ll(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
Nl.peek = ed;
function Hh() {
  return {
    enter: {
      gfmFootnoteDefinition: Wh,
      gfmFootnoteDefinitionLabelString: Yh,
      gfmFootnoteCall: Kh,
      gfmFootnoteCallString: Xh
    },
    exit: {
      gfmFootnoteDefinition: Jh,
      gfmFootnoteDefinitionLabelString: Gh,
      gfmFootnoteCall: Zh,
      gfmFootnoteCallString: Qh
    }
  };
}
function Vh() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: td, footnoteReference: Nl }
  };
}
function Wh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Yh() {
  this.buffer();
}
function Gh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = Ll(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Jh(e) {
  this.exit(e);
}
function Kh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Xh() {
  this.buffer();
}
function Qh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = Ll(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Zh(e) {
  this.exit(e);
}
function Nl(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), l(), o += i.move("]"), o;
}
function ed() {
  return "[";
}
function td(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteDefinition"), a = n.enter("label");
  return o += i.move(
    n.safe(n.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), o += i.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), i.shift(4), o += i.move(
    n.indentLines(n.containerFlow(e, i.current()), nd)
  ), l(), o;
}
function nd(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
const rd = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Ml.peek = sd;
function id() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: ld },
    exit: { strikethrough: ad }
  };
}
function od() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: rd
      }
    ],
    handlers: { delete: Ml }
  };
}
function ld(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function ad(e) {
  this.exit(e);
}
function Ml(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function sd() {
  return "~";
}
function ud(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || fd, i = [], o = [], l = [], a = [];
  let s = 0, c = -1;
  for (; ++c < e.length; ) {
    const m = [], g = [];
    let b = -1;
    for (e[c].length > s && (s = e[c].length); ++b < e[c].length; ) {
      const x = cd(e[c][b]);
      if (t.alignDelimiters !== !1) {
        const A = r(x);
        g[b] = A, (a[b] === void 0 || A > a[b]) && (a[b] = A);
      }
      m.push(x);
    }
    o[c] = m, l[c] = g;
  }
  let f = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++f < s; )
      i[f] = yo(n[f]);
  else {
    const m = yo(n);
    for (; ++f < s; )
      i[f] = m;
  }
  f = -1;
  const u = [], d = [];
  for (; ++f < s; ) {
    const m = i[f];
    let g = "", b = "";
    m === 99 ? (g = ":", b = ":") : m === 108 ? g = ":" : m === 114 && (b = ":");
    let x = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[f] - g.length - b.length
    );
    const A = g + "-".repeat(x) + b;
    t.alignDelimiters !== !1 && (x = g.length + x + b.length, x > a[f] && (a[f] = x), d[f] = x), u[f] = A;
  }
  o.splice(1, 0, u), l.splice(1, 0, d), c = -1;
  const p = [];
  for (; ++c < o.length; ) {
    const m = o[c], g = l[c];
    f = -1;
    const b = [];
    for (; ++f < s; ) {
      const x = m[f] || "";
      let A = "", C = "";
      if (t.alignDelimiters !== !1) {
        const j = a[f] - (g[f] || 0), E = i[f];
        E === 114 ? A = " ".repeat(j) : E === 99 ? j % 2 ? (A = " ".repeat(j / 2 + 0.5), C = " ".repeat(j / 2 - 0.5)) : (A = " ".repeat(j / 2), C = A) : C = " ".repeat(j);
      }
      t.delimiterStart !== !1 && !f && b.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && x === "") && (t.delimiterStart !== !1 || f) && b.push(" "), t.alignDelimiters !== !1 && b.push(A), b.push(x), t.alignDelimiters !== !1 && b.push(C), t.padding !== !1 && b.push(" "), (t.delimiterEnd !== !1 || f !== s - 1) && b.push("|");
    }
    p.push(
      t.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join("")
    );
  }
  return p.join(`
`);
}
function cd(e) {
  return e == null ? "" : String(e);
}
function fd(e) {
  return e.length;
}
function yo(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function pd(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    hd
  );
  return i(), l;
}
function hd(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function dd(e, t) {
  return bo(e, t.inConstruct, !0) && !bo(e, t.notInConstruct, !1);
}
function bo(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ko(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && dd(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function md(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function gd(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function yd(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function bd(e, t, n, r) {
  const i = yd(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (gd(e, n)) {
    const u = n.enter("codeIndented"), d = n.indentLines(o, kd);
    return u(), d;
  }
  const a = n.createTracker(r), s = i.repeat(Math.max(md(o, i) + 1, 3)), c = n.enter("codeFenced");
  let f = a.move(s);
  if (e.lang) {
    const u = n.enter(`codeFencedLang${l}`);
    f += a.move(
      n.safe(e.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), u();
  }
  if (e.lang && e.meta) {
    const u = n.enter(`codeFencedMeta${l}`);
    f += a.move(" "), f += a.move(
      n.safe(e.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), u();
  }
  return f += a.move(`
`), o && (f += a.move(o + `
`)), f += a.move(s), c(), f;
}
function kd(e, t, n) {
  return (n ? "" : "    ") + e;
}
function $r(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function xd(e, t, n, r) {
  const i = $r(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let c = s.move("[");
  return c += s.move(
    n.safe(n.associationId(e), {
      before: c,
      after: "]",
      ...s.current()
    })
  ), c += s.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), c += s.move("<"), c += s.move(
    n.safe(e.url, { before: c, after: ">", ...s.current() })
  ), c += s.move(">")) : (a = n.enter("destinationRaw"), c += s.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), c += s.move(" " + i), c += s.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...s.current()
    })
  ), c += s.move(i), a()), l(), c;
}
function wd(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
$l.peek = vd;
function $l(e, t, n, r) {
  const i = wd(n), o = n.enter("emphasis"), l = n.createTracker(r);
  let a = l.move(i);
  return a += l.move(
    n.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i), o(), a;
}
function vd(e, t, n) {
  return n.options.emphasis || "*";
}
const Bl = (
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
      return Td;
    if (typeof e == "function")
      return vn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Ed(e) : Sd(e);
    if (typeof e == "string")
      return Cd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Ed(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Bl(e[n]);
  return vn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i))
        return !0;
    return !1;
  }
}
function Sd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return vn(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o])
        return !1;
    return !0;
  }
}
function Cd(e) {
  return vn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function vn(e) {
  return t;
  function t(n, r, i) {
    return !!(Ad(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Td() {
  return !0;
}
function Ad(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ul = [], Pd = !0, yr = !1, Rd = "skip";
function Od(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Bl(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, c, f) {
    const u = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof u.type == "string") {
      const p = (
        // `hast`
        typeof u.tagName == "string" ? u.tagName : (
          // `xast`
          typeof u.name == "string" ? u.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = Ul, m, g, b;
      if ((!t || o(s, c, f[f.length - 1] || void 0)) && (p = Fd(n(s, f)), p[0] === yr))
        return p;
      if ("children" in s && s.children) {
        const x = (
          /** @type {UnistParent} */
          s
        );
        if (x.children && p[0] !== Rd)
          for (g = (r ? x.children.length : -1) + l, b = f.concat(x); g > -1 && g < x.children.length; ) {
            const A = x.children[g];
            if (m = a(A, g, b)(), m[0] === yr)
              return m;
            g = typeof m[1] == "number" ? m[1] : g + l;
          }
      }
      return p;
    }
  }
}
function Fd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Pd, e] : e == null ? Ul : [e];
}
function Id(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), Od(e, o, a, i);
  function a(s, c) {
    const f = c[c.length - 1], u = f ? f.children.indexOf(s) : void 0;
    return l(s, u, f);
  }
}
const _d = {};
function ql(e, t) {
  const n = t || _d, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Hl(e, r, i);
}
function Hl(e, t, n) {
  if (jd(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return xo(e.children, t, n);
  }
  return Array.isArray(e) ? xo(e, t, n) : "";
}
function xo(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Hl(e[i], t, n);
  return r.join("");
}
function jd(e) {
  return !!(e && typeof e == "object");
}
function Dd(e, t) {
  let n = !1;
  return Id(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, yr;
  }), !!((!e.depth || e.depth < 3) && ql(e) && (t.options.setext || n));
}
function zd(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Dd(e, n)) {
    const f = n.enter("headingSetext"), u = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return u(), f(), d + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      d.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), a = n.enter("headingAtx"), s = n.enter("phrasing");
  o.move(l + " ");
  let c = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(c) && (c = "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";" + c.slice(1)), c = c ? l + " " + c : l, n.options.closeAtx && (c += " " + l), s(), a(), c;
}
Vl.peek = Ld;
function Vl(e) {
  return e.value || "";
}
function Ld() {
  return "<";
}
Wl.peek = Nd;
function Wl(e, t, n, r) {
  const i = $r(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let c = s.move("![");
  return c += s.move(
    n.safe(e.alt, { before: c, after: "]", ...s.current() })
  ), c += s.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), c += s.move("<"), c += s.move(
    n.safe(e.url, { before: c, after: ">", ...s.current() })
  ), c += s.move(">")) : (a = n.enter("destinationRaw"), c += s.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), c += s.move(" " + i), c += s.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...s.current()
    })
  ), c += s.move(i), a()), c += s.move(")"), l(), c;
}
function Nd() {
  return "!";
}
Yl.peek = Md;
function Yl(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("![");
  const c = n.safe(e.alt, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(c + "]["), l();
  const f = n.stack;
  n.stack = [], l = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = f, o(), i === "full" || !c || c !== u ? s += a.move(u + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Md() {
  return "!";
}
Gl.peek = $d;
function Gl(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const l = n.unsafe[o], a = n.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = a.exec(r); ) {
        let c = s.index;
        r.charCodeAt(c) === 10 && r.charCodeAt(c - 1) === 13 && c--, r = r.slice(0, c) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function $d() {
  return "`";
}
function Jl(e, t) {
  const n = ql(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Kl.peek = Bd;
function Kl(e, t, n, r) {
  const i = $r(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let a, s;
  if (Jl(e, n)) {
    const f = n.stack;
    n.stack = [], a = n.enter("autolink");
    let u = l.move("<");
    return u += l.move(
      n.containerPhrasing(e, {
        before: u,
        after: ">",
        ...l.current()
      })
    ), u += l.move(">"), a(), n.stack = f, u;
  }
  a = n.enter("link"), s = n.enter("label");
  let c = l.move("[");
  return c += l.move(
    n.containerPhrasing(e, {
      before: c,
      after: "](",
      ...l.current()
    })
  ), c += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), c += l.move("<"), c += l.move(
    n.safe(e.url, { before: c, after: ">", ...l.current() })
  ), c += l.move(">")) : (s = n.enter("destinationRaw"), c += l.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), c += l.move(" " + i), c += l.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...l.current()
    })
  ), c += l.move(i), s()), c += l.move(")"), a(), c;
}
function Bd(e, t, n) {
  return Jl(e, n) ? "<" : "[";
}
Xl.peek = Ud;
function Xl(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("[");
  const c = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(c + "]["), l();
  const f = n.stack;
  n.stack = [], l = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = f, o(), i === "full" || !c || c !== u ? s += a.move(u + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Ud() {
  return "[";
}
function Br(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function qd(e) {
  const t = Br(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Hd(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Ql(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Vd(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? Hd(n) : Br(n);
  const a = e.ordered ? l === "." ? ")" : "." : qd(n);
  let s = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Ql(n) === l && f
    ) {
      let u = -1;
      for (; ++u < e.children.length; ) {
        const d = e.children[u];
        if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (l = a), n.bulletCurrent = l;
  const c = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = o, i(), c;
}
function Wd(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Yd(e, t, n, r) {
  const i = Wd(n);
  let o = n.bulletCurrent || Br(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const s = n.enter("listItem"), c = n.indentLines(
    n.containerFlow(e, a.current()),
    f
  );
  return s(), c;
  function f(u, d, p) {
    return d ? (p ? "" : " ".repeat(l)) + u : (p ? o : o + " ".repeat(l - o.length)) + u;
  }
}
function Gd(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const Zl = (
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
      return Qd;
    if (typeof e == "function")
      return En(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Jd(e) : Kd(e);
    if (typeof e == "string")
      return Xd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Jd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Zl(e[n]);
  return En(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i))
        return !0;
    return !1;
  }
}
function Kd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return En(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o])
        return !1;
    return !0;
  }
}
function Xd(e) {
  return En(t);
  function t(n) {
    return n && n.type === e;
  }
}
function En(e) {
  return t;
  function t(n, r, i) {
    return !!(Zd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Qd() {
  return !0;
}
function Zd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const em = (
  /** @type {(node?: unknown) => node is PhrasingContent} */
  Zl([
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
function tm(e, t, n, r) {
  return (e.children.some(function(l) {
    return em(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function nm(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
ea.peek = rm;
function ea(e, t, n, r) {
  const i = nm(n), o = n.enter("strong"), l = n.createTracker(r);
  let a = l.move(i + i);
  return a += l.move(
    n.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i + i), o(), a;
}
function rm(e, t, n) {
  return n.options.strong || "*";
}
function im(e, t, n, r) {
  return n.safe(e.value, r);
}
function om(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function lm(e, t, n) {
  const r = (Ql(n) + (n.options.ruleSpaces ? " " : "")).repeat(om(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const ta = {
  blockquote: pd,
  break: ko,
  code: bd,
  definition: xd,
  emphasis: $l,
  hardBreak: ko,
  heading: zd,
  html: Vl,
  image: Wl,
  imageReference: Yl,
  inlineCode: Gl,
  link: Kl,
  linkReference: Xl,
  list: Vd,
  listItem: Yd,
  paragraph: Gd,
  root: tm,
  strong: ea,
  text: im,
  thematicBreak: lm
};
function am() {
  return {
    enter: {
      table: sm,
      tableData: wo,
      tableHeader: wo,
      tableRow: cm
    },
    exit: {
      codeText: fm,
      table: um,
      tableData: Qn,
      tableHeader: Qn,
      tableRow: Qn
    }
  };
}
function sm(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function um(e) {
  this.exit(e), this.data.inTable = void 0;
}
function cm(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Qn(e) {
  this.exit(e);
}
function wo(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function fm(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, pm));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function pm(e, t) {
  return t === "|" ? t : e;
}
function hm(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
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
      inlineCode: d,
      table: l,
      tableCell: s,
      tableRow: a
    }
  };
  function l(p, m, g, b) {
    return c(f(p, g, b), p.align);
  }
  function a(p, m, g, b) {
    const x = u(p, g, b), A = c([x]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(p, m, g, b) {
    const x = g.enter("tableCell"), A = g.enter("phrasing"), C = g.containerPhrasing(p, {
      ...b,
      before: o,
      after: o
    });
    return A(), x(), C;
  }
  function c(p, m) {
    return ud(p, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(p, m, g) {
    const b = p.children;
    let x = -1;
    const A = [], C = m.enter("table");
    for (; ++x < b.length; )
      A[x] = u(b[x], m, g);
    return C(), A;
  }
  function u(p, m, g) {
    const b = p.children;
    let x = -1;
    const A = [], C = m.enter("tableRow");
    for (; ++x < b.length; )
      A[x] = s(b[x], p, m, g);
    return C(), A;
  }
  function d(p, m, g) {
    let b = ta.inlineCode(p, m, g);
    return g.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function dm() {
  return {
    exit: {
      taskListCheckValueChecked: vo,
      taskListCheckValueUnchecked: vo,
      paragraph: gm
    }
  };
}
function mm() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: ym }
  };
}
function vo(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function gm(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function ym(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(l);
  let s = ta.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), s;
  function c(f) {
    return f + l;
  }
}
function bm() {
  return [
    Ih(),
    Hh(),
    id(),
    am(),
    dm()
  ];
}
function km(e) {
  return {
    extensions: [
      _h(),
      Vh(),
      od(),
      hm(e),
      mm()
    ]
  };
}
function xm(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
const Eo = {}.hasOwnProperty;
function wm(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    vm(t, e[n]);
  return t;
}
function vm(e, t) {
  let n;
  for (n in t) {
    const i = (Eo.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        Eo.call(i, l) || (i[l] = []);
        const a = o[l];
        Em(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Em(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  xm(e, 0, 0, r);
}
const Sm = Yt(/\p{P}/u), Mt = Yt(/[A-Za-z]/), Ur = Yt(/[\dA-Za-z]/);
function Cm(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Tm = Yt(/[!-/:-@[-`{-~]/);
function vt(e) {
  return e !== null && (e < 0 || e === 32);
}
function na(e) {
  return Tm(e) || Sm(e);
}
const $t = Yt(/\s/);
function Yt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
const Am = {
  tokenize: _m,
  partial: !0
}, ra = {
  tokenize: jm,
  partial: !0
}, ia = {
  tokenize: Dm,
  partial: !0
}, oa = {
  tokenize: zm,
  partial: !0
}, Pm = {
  tokenize: Lm,
  partial: !0
}, la = {
  tokenize: Fm,
  previous: sa
}, aa = {
  tokenize: Im,
  previous: ua
}, et = {
  tokenize: Om,
  previous: ca
}, Xe = {};
function Rm() {
  return {
    text: Xe
  };
}
let st = 48;
for (; st < 123; )
  Xe[st] = et, st++, st === 58 ? st = 65 : st === 91 && (st = 97);
Xe[43] = et;
Xe[45] = et;
Xe[46] = et;
Xe[95] = et;
Xe[72] = [et, aa];
Xe[104] = [et, aa];
Xe[87] = [et, la];
Xe[119] = [et, la];
function Om(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(u) {
    return !br(u) || !ca.call(r, r.previous) || qr(r.events) ? n(u) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(u));
  }
  function a(u) {
    return br(u) ? (e.consume(u), a) : u === 64 ? (e.consume(u), s) : n(u);
  }
  function s(u) {
    return u === 46 ? e.check(
      Pm,
      f,
      c
    )(u) : u === 45 || u === 95 || Ur(u) ? (o = !0, e.consume(u), s) : f(u);
  }
  function c(u) {
    return e.consume(u), i = !0, s;
  }
  function f(u) {
    return o && i && Mt(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(u)) : n(u);
  }
}
function Fm(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !sa.call(r, r.previous) || qr(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      Am,
      e.attempt(ra, e.attempt(ia, o), n),
      n
    )(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function Im(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(u) {
    return (u === 72 || u === 104) && ua.call(r, r.previous) && !qr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(u), e.consume(u), a) : n(u);
  }
  function a(u) {
    if (Mt(u) && i.length < 5)
      return i += String.fromCodePoint(u), e.consume(u), a;
    if (u === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(u), s;
    }
    return n(u);
  }
  function s(u) {
    return u === 47 ? (e.consume(u), o ? c : (o = !0, s)) : n(u);
  }
  function c(u) {
    return u === null || Cm(u) || vt(u) || $t(u) || na(u) ? n(u) : e.attempt(ra, e.attempt(ia, f), n)(u);
  }
  function f(u) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(u);
  }
}
function _m(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function jm(e, t, n) {
  let r, i, o;
  return l;
  function l(c) {
    return c === 46 || c === 95 ? e.check(oa, s, a)(c) : c === null || vt(c) || $t(c) || c !== 45 && na(c) ? s(c) : (o = !0, e.consume(c), l);
  }
  function a(c) {
    return c === 95 ? r = !0 : (i = r, r = void 0), e.consume(c), l;
  }
  function s(c) {
    return i || r || !o ? n(c) : t(c);
  }
}
function Dm(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(oa, t, o)(l) : l === null || vt(l) || $t(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function zm(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || vt(a) || $t(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || vt(a) || $t(a) ? t(a) : r(a);
  }
  function o(a) {
    return Mt(a) ? l(a) : n(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : Mt(a) ? (e.consume(a), l) : n(a);
  }
}
function Lm(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Ur(o) ? n(o) : t(o);
  }
}
function sa(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || vt(e);
}
function ua(e) {
  return !Mt(e);
}
function ca(e) {
  return !(e === 47 || br(e));
}
function br(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Ur(e);
}
function qr(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
function Nm(e) {
  return e !== null && e < -2;
}
function fn(e) {
  return e !== null && (e < 0 || e === 32);
}
function kr(e) {
  return e === -2 || e === -1 || e === 32;
}
function Hr(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return kr(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return kr(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const Mm = {
  tokenize: $m,
  partial: !0
};
function $m(e, t, n) {
  return r;
  function r(o) {
    return kr(o) ? Hr(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Nm(o) ? t(o) : n(o);
  }
}
function Vr(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Bm = {
  tokenize: Jm,
  partial: !0
};
function Um() {
  return {
    document: {
      91: {
        tokenize: Wm,
        continuation: {
          tokenize: Ym
        },
        exit: Gm
      }
    },
    text: {
      91: {
        tokenize: Vm
      },
      93: {
        add: "after",
        tokenize: qm,
        resolveTo: Hm
      }
    }
  };
}
function qm(e, t, n) {
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
      return n(s);
    const c = Vr(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return c.codePointAt(0) !== 94 || !o.includes(c.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function Hm(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
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
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function Vm(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(u) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(u) {
    return u !== 94 ? n(u) : (e.enter("gfmFootnoteCallMarker"), e.consume(u), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c);
  }
  function c(u) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      u === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || fn(u)
    )
      return n(u);
    if (u === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(Vr(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(u);
    }
    return fn(u) || (l = !0), o++, e.consume(u), u === 92 ? f : c;
  }
  function f(u) {
    return u === 91 || u === 92 || u === 93 ? (e.consume(u), o++, c) : c(u);
  }
}
function Wm(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), c;
  }
  function c(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(m);
  }
  function f(m) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || fn(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Vr(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return fn(m) || (a = !0), l++, e.consume(m), m === 92 ? u : f;
  }
  function u(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, f) : f(m);
  }
  function d(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), Hr(
      e,
      p,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(m);
  }
  function p(m) {
    return t(m);
  }
}
function Ym(e, t, n) {
  return e.check(Mm, t, e.attempt(Bm, t, n));
}
function Gm(e) {
  e.exit("gfmFootnoteDefinition");
}
function Jm(e, t, n) {
  const r = this;
  return Hr(
    e,
    i,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Zn(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
const Km = Wr(/\p{P}/u), Xm = Wr(/[!-/:-@[-`{-~]/);
function Qm(e) {
  return e !== null && (e < 0 || e === 32);
}
function Zm(e) {
  return Xm(e) || Km(e);
}
const eg = Wr(/\s/);
function Wr(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function So(e) {
  if (e === null || Qm(e) || eg(e))
    return 1;
  if (Zm(e))
    return 2;
}
function tg(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
function ng(e) {
  let n = (e || {}).singleTilde;
  const r = {
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
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
        let c = s;
        for (; c--; )
          if (l[c][0] === "exit" && l[c][1].type === "strikethroughSequenceTemporary" && l[c][1]._open && // If the sizes are the same:
          l[s][1].end.offset - l[s][1].start.offset === l[c][1].end.offset - l[c][1].start.offset) {
            l[s][1].type = "strikethroughSequence", l[c][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, l[c][1].start),
              end: Object.assign({}, l[s][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, l[c][1].end),
              end: Object.assign({}, l[s][1].start)
            }, d = [
              ["enter", f, a],
              ["enter", l[c][1], a],
              ["exit", l[c][1], a],
              ["enter", u, a]
            ], p = a.parser.constructs.insideSpan.null;
            p && Zn(
              d,
              d.length,
              0,
              tg(p, l.slice(c + 1, s), a)
            ), Zn(d, d.length, 0, [
              ["exit", u, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["exit", f, a]
            ]), Zn(l, c - 1, s - c + 3, d), s = c + d.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function o(l, a, s) {
    const c = this.previous, f = this.events;
    let u = 0;
    return d;
    function d(m) {
      return c === 126 && f[f.length - 1][1].type !== "characterEscape" ? s(m) : (l.enter("strikethroughSequenceTemporary"), p(m));
    }
    function p(m) {
      const g = So(c);
      if (m === 126)
        return u > 1 ? s(m) : (l.consume(m), u++, p);
      if (u < 2 && !n)
        return s(m);
      const b = l.exit("strikethroughSequenceTemporary"), x = So(m);
      return b._open = !x || x === 2 && !!g, b._close = !g || g === 2 && !!x, a(m);
    }
  }
}
function tn(e) {
  return e !== null && e < -2;
}
function Co(e) {
  return e !== null && (e < 0 || e === 32);
}
function ct(e) {
  return e === -2 || e === -1 || e === 32;
}
function Dt(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return ct(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return ct(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
class rg {
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
  add(t, n, r) {
    ig(this, t, n, r);
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
  consume(t) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(
        t.slice(this.map[n][0] + this.map[n][1]),
        this.map[n][2]
      ), t.length = this.map[n][0];
    r.push([...t]), t.length = 0;
    let i = r.pop();
    for (; i; )
      t.push(...i), i = r.pop();
    this.map.length = 0;
  }
}
function ig(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function og(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(
          e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
        );
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else
      i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function lg() {
  return {
    flow: {
      null: {
        tokenize: ag,
        resolveAll: sg
      }
    }
  };
}
function ag(e, t, n) {
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
    const z = _ > -1 ? r.events[_][1].type : null, Q = z === "tableHead" || z === "tableRow" ? w : s;
    return Q === w && r.parser.lazy[r.now().line] ? n(v) : Q(v);
  }
  function s(v) {
    return e.enter("tableHead"), e.enter("tableRow"), c(v);
  }
  function c(v) {
    return v === 124 || (l = !0, o += 1), f(v);
  }
  function f(v) {
    return v === null ? n(v) : tn(v) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), p) : n(v) : ct(v) ? Dt(e, f, "whitespace")(v) : (o += 1, l && (l = !1, i += 1), v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), l = !0, f) : (e.enter("data"), u(v)));
  }
  function u(v) {
    return v === null || v === 124 || Co(v) ? (e.exit("data"), f(v)) : (e.consume(v), v === 92 ? d : u);
  }
  function d(v) {
    return v === 92 || v === 124 ? (e.consume(v), u) : u(v);
  }
  function p(v) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(v) : (e.enter("tableDelimiterRow"), l = !1, ct(v) ? Dt(
      e,
      m,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(v) : m(v));
  }
  function m(v) {
    return v === 45 || v === 58 ? b(v) : v === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), g) : E(v);
  }
  function g(v) {
    return ct(v) ? Dt(e, b, "whitespace")(v) : b(v);
  }
  function b(v) {
    return v === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), x) : v === 45 ? (o += 1, x(v)) : v === null || tn(v) ? j(v) : E(v);
  }
  function x(v) {
    return v === 45 ? (e.enter("tableDelimiterFiller"), A(v)) : E(v);
  }
  function A(v) {
    return v === 45 ? (e.consume(v), A) : v === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(v));
  }
  function C(v) {
    return ct(v) ? Dt(e, j, "whitespace")(v) : j(v);
  }
  function j(v) {
    return v === 124 ? m(v) : v === null || tn(v) ? !l || i !== o ? E(v) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(v)) : E(v);
  }
  function E(v) {
    return n(v);
  }
  function w(v) {
    return e.enter("tableRow"), N(v);
  }
  function N(v) {
    return v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), N) : v === null || tn(v) ? (e.exit("tableRow"), t(v)) : ct(v) ? Dt(e, N, "whitespace")(v) : (e.enter("data"), U(v));
  }
  function U(v) {
    return v === null || v === 124 || Co(v) ? (e.exit("data"), N(v)) : (e.consume(v), v === 92 ? te : U);
  }
  function te(v) {
    return v === 92 || v === 124 ? (e.consume(v), U) : U(v);
  }
}
function sg(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, c, f, u;
  const d = new rg();
  for (; ++n < e.length; ) {
    const p = e[n], m = p[1];
    p[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (To(d, t, s, c, f), f = void 0, s = 0), c = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, d.add(n, 0, [["enter", c, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, u = void 0, o = [0, 0, 0, 0], l = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, d.add(n, 0, [["enter", f, t]])), i = m.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], u = nn(
      d,
      t,
      o,
      i,
      void 0,
      u
    ), o = [0, 0, 0, 0]), l[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], u = nn(
      d,
      t,
      o,
      i,
      void 0,
      u
    )), o = l, l = [o[1], n, 0, 0])) : m.type === "tableHead" ? (a = !0, s = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = n, o[1] !== 0 ? (l[0] = l[1], u = nn(
      d,
      t,
      o,
      i,
      n,
      u
    )) : l[1] !== 0 && (u = nn(d, t, l, i, n, u)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (s !== 0 && To(d, t, s, c, f), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = og(t.events, n));
  }
  return e;
}
function nn(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, bt(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const s = bt(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const c = bt(t.events, n[2]), f = bt(t.events, n[3]), u = {
      type: a,
      start: Object.assign({}, c),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", u, t]]), r !== 2) {
      const d = t.events[n[2]], p = t.events[n[3]];
      if (d[1].end = Object.assign({}, p[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, g = n[3] - n[2] - 1;
        e.add(m, g, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", u, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, bt(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function To(e, t, n, r, i) {
  const o = [], l = bt(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function bt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
function ug(e) {
  return e !== null && e < -2;
}
function cg(e) {
  return e !== null && (e < 0 || e === 32);
}
function xr(e) {
  return e === -2 || e === -1 || e === 32;
}
function fg(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return xr(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return xr(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const pg = {
  tokenize: dg
};
function hg() {
  return {
    text: {
      91: pg
    }
  };
}
function dg(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(s) {
    return cg(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return ug(s) ? t(s) : xr(s) ? e.check(
      {
        tokenize: mg
      },
      t,
      n
    )(s) : n(s);
  }
}
function mg(e, t, n) {
  return fg(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function gg(e) {
  return wm([
    Rm(),
    Um(),
    ng(e),
    lg(),
    hg()
  ]);
}
const yg = {};
function fa(e) {
  const t = (
    /** @type {Processor} */
    this
  ), n = e || yg, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(gg(n)), o.push(bm()), l.push(km(n));
}
function Eg({ config: e, rules: t }) {
  const n = Bt(), r = Ao(), i = () => r.current.scrollIntoView(), o = sessionStorage.getItem("gameID");
  return /* @__PURE__ */ T.jsxs("div", { ref: r, className: "flex flex-col items-center m-2 md:m-12", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md", children: [
      /* @__PURE__ */ T.jsxs("article", { className: "prose dark:prose-invert max-w-fit fade-in", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col md:flex-row w-full h-full justify-between items-center", children: [
          /* @__PURE__ */ T.jsxs("div", { className: "text-4xl font-black mb-6 md:mb-0", children: [
            /* @__PURE__ */ T.jsx("span", { className: `text-5xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
            " Game Rules"
          ] }),
          /* @__PURE__ */ T.jsx("button", { onClick: () => n(o ? "/" + o : "/"), className: "bg-blue-500 px-6 py-2 font-bold italic", children: o ? "Back" : "Play Online" })
        ] }),
        /* @__PURE__ */ T.jsx(Lr, { children: t, remarkPlugins: [fa] })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "mt-12 flex flex-col w-full items-center", children: /* @__PURE__ */ T.jsx("button", { className: "text-zinc-500 font-light italic", onClick: i, children: "back to top 👆" }) })
    ] }),
    /* @__PURE__ */ T.jsx("div", { className: "mt-8", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] });
}
function Sg({ config: e }) {
  const t = Bt(), n = Ao(), r = sessionStorage.getItem("gameID"), i = `
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
  return /* @__PURE__ */ T.jsxs("div", { ref: n, className: "flex flex-col items-center m-2 md:m-12", children: [
    /* @__PURE__ */ T.jsx("div", { className: "w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md", children: /* @__PURE__ */ T.jsxs("article", { className: "prose dark:prose-invert max-w-fit fade-in", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col md:flex-row w-full h-full justify-between items-center", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "text-4xl font-black mb-6 md:mb-0", children: [
          /* @__PURE__ */ T.jsx("span", { className: `text-5xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
          " Bug Report"
        ] }),
        /* @__PURE__ */ T.jsx("button", { onClick: () => t(r ? "/" + r : "/"), className: "bg-blue-500 px-6 py-2 font-bold italic", children: r ? "Back" : "Play Online" })
      ] }),
      /* @__PURE__ */ T.jsx(Lr, { children: i, remarkPlugins: [fa] })
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "mt-8", children: /* @__PURE__ */ T.jsx(pn, {}) })
  ] });
}
export {
  Sg as BugsPage,
  xg as DownPage,
  pn as Footer,
  vg as GamePage,
  wg as HomePage,
  Eg as RulesPage
};
