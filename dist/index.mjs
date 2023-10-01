import Re, { useState as ft, useEffect as yt, forwardRef as da, useRef as ma } from "react";
import { useNavigate as un, useParams as ga } from "react-router-dom";
function Nt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xn = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function ya() {
  if (Xr)
    return Pt;
  Xr = 1;
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
  return Pt.Fragment = t, Pt.jsx = l, Pt.jsxs = l, Pt;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function ba() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Re, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = Symbol.iterator, g = "@@iterator";
    function k(b) {
      if (b === null || typeof b != "object")
        return null;
      var O = d && b[d] || b[g];
      return typeof O == "function" ? O : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(b) {
      {
        for (var O = arguments.length, L = new Array(O > 1 ? O - 1 : 0), Q = 1; Q < O; Q++)
          L[Q - 1] = arguments[Q];
        C("error", b, L);
      }
    }
    function C(b, O, L) {
      {
        var Q = w.ReactDebugCurrentFrame, ce = Q.getStackAddendum();
        ce !== "" && (O += "%s", L = L.concat([ce]));
        var ye = L.map(function(le) {
          return String(le);
        });
        ye.unshift("Warning: " + O), Function.prototype.apply.call(console[b], console, ye);
      }
    }
    var I = !1, E = !1, x = !1, N = !1, q = !1, Z;
    Z = Symbol.for("react.module.reference");
    function v(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === r || b === o || q || b === i || b === u || b === c || N || b === p || I || E || x || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === f || b.$$typeof === l || b.$$typeof === a || b.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === Z || b.getModuleId !== void 0));
    }
    function D(b, O, L) {
      var Q = b.displayName;
      if (Q)
        return Q;
      var ce = O.displayName || O.name || "";
      return ce !== "" ? L + "(" + ce + ")" : L;
    }
    function z(b) {
      return b.displayName || "Context";
    }
    function K(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
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
      if (typeof b == "object")
        switch (b.$$typeof) {
          case a:
            var O = b;
            return z(O) + ".Consumer";
          case l:
            var L = b;
            return z(L._context) + ".Provider";
          case s:
            return D(b, b.render, "ForwardRef");
          case f:
            var Q = b.displayName || null;
            return Q !== null ? Q : K(b.type) || "Memo";
          case m: {
            var ce = b, ye = ce._payload, le = ce._init;
            try {
              return K(le(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, B = 0, oe, pe, xe, Ae, h, _, H;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function U() {
      {
        if (B === 0) {
          oe = console.log, pe = console.info, xe = console.warn, Ae = console.error, h = console.group, _ = console.groupCollapsed, H = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        B++;
      }
    }
    function te() {
      {
        if (B--, B === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, b, {
              value: oe
            }),
            info: Y({}, b, {
              value: pe
            }),
            warn: Y({}, b, {
              value: xe
            }),
            error: Y({}, b, {
              value: Ae
            }),
            group: Y({}, b, {
              value: h
            }),
            groupCollapsed: Y({}, b, {
              value: _
            }),
            groupEnd: Y({}, b, {
              value: H
            })
          });
        }
        B < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = w.ReactCurrentDispatcher, W;
    function G(b, O, L) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (ce) {
            var Q = ce.stack.trim().match(/\n( *(at )?)/);
            W = Q && Q[1] || "";
          }
        return `
` + W + b;
      }
    }
    var ne = !1, X;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ve();
    }
    function j(b, O) {
      if (!b || ne)
        return "";
      {
        var L = X.get(b);
        if (L !== void 0)
          return L;
      }
      var Q;
      ne = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = M.current, M.current = null, U();
      try {
        if (O) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Qe) {
              Q = Qe;
            }
            Reflect.construct(b, [], le);
          } else {
            try {
              le.call();
            } catch (Qe) {
              Q = Qe;
            }
            b.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            Q = Qe;
          }
          b();
        }
      } catch (Qe) {
        if (Qe && Q && typeof Qe.stack == "string") {
          for (var ie = Qe.stack.split(`
`), Oe = Q.stack.split(`
`), Ee = ie.length - 1, Se = Oe.length - 1; Ee >= 1 && Se >= 0 && ie[Ee] !== Oe[Se]; )
            Se--;
          for (; Ee >= 1 && Se >= 0; Ee--, Se--)
            if (ie[Ee] !== Oe[Se]) {
              if (Ee !== 1 || Se !== 1)
                do
                  if (Ee--, Se--, Se < 0 || ie[Ee] !== Oe[Se]) {
                    var Me = `
` + ie[Ee].replace(" at new ", " at ");
                    return b.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", b.displayName)), typeof b == "function" && X.set(b, Me), Me;
                  }
                while (Ee >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        ne = !1, M.current = ye, te(), Error.prepareStackTrace = ce;
      }
      var mt = b ? b.displayName || b.name : "", Kr = mt ? G(mt) : "";
      return typeof b == "function" && X.set(b, Kr), Kr;
    }
    function Pe(b, O, L) {
      return j(b, !1);
    }
    function $(b) {
      var O = b.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ie(b, O, L) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return j(b, $(b));
      if (typeof b == "string")
        return G(b);
      switch (b) {
        case u:
          return G("Suspense");
        case c:
          return G("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case s:
            return Pe(b.render);
          case f:
            return Ie(b.type, O, L);
          case m: {
            var Q = b, ce = Q._payload, ye = Q._init;
            try {
              return Ie(ye(ce), O, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, tt = {}, Ct = w.ReactDebugCurrentFrame;
    function ht(b) {
      if (b) {
        var O = b._owner, L = Ie(b.type, b._source, O ? O.type : null);
        Ct.setExtraStackFrame(L);
      } else
        Ct.setExtraStackFrame(null);
    }
    function Ht(b, O, L, Q, ce) {
      {
        var ye = Function.call.bind(Ne);
        for (var le in b)
          if (ye(b, le)) {
            var ie = void 0;
            try {
              if (typeof b[le] != "function") {
                var Oe = Error((Q || "React class") + ": " + L + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              ie = b[le](O, le, Q, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              ie = Ee;
            }
            ie && !(ie instanceof Error) && (ht(ce), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", L, le, typeof ie), ht(null)), ie instanceof Error && !(ie.message in tt) && (tt[ie.message] = !0, ht(ce), A("Failed %s type: %s", L, ie.message), ht(null));
          }
      }
    }
    var Vt = Array.isArray;
    function Tt(b) {
      return Vt(b);
    }
    function xn(b) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, L = O && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return L;
      }
    }
    function vn(b) {
      try {
        return Wt(b), !1;
      } catch {
        return !0;
      }
    }
    function Wt(b) {
      return "" + b;
    }
    function Yt(b) {
      if (vn(b))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(b)), Wt(b);
    }
    var S = w.ReactCurrentOwner, F = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V, se, ue;
    ue = {};
    function je(b) {
      if (Ne.call(b, "ref")) {
        var O = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function We(b) {
      if (Ne.call(b, "key")) {
        var O = Object.getOwnPropertyDescriptor(b, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function He(b, O) {
      if (typeof b.ref == "string" && S.current && O && S.current.stateNode !== O) {
        var L = K(S.current.type);
        ue[L] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(S.current.type), b.ref), ue[L] = !0);
      }
    }
    function lt(b, O) {
      {
        var L = function() {
          V || (V = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function at(b, O) {
      {
        var L = function() {
          se || (se = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var we = function(b, O, L, Q, ce, ye, le) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: b,
        key: O,
        ref: L,
        props: le,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function At(b, O, L, Q, ce) {
      {
        var ye, le = {}, ie = null, Oe = null;
        L !== void 0 && (Yt(L), ie = "" + L), We(O) && (Yt(O.key), ie = "" + O.key), je(O) && (Oe = O.ref, He(O, ce));
        for (ye in O)
          Ne.call(O, ye) && !F.hasOwnProperty(ye) && (le[ye] = O[ye]);
        if (b && b.defaultProps) {
          var Ee = b.defaultProps;
          for (ye in Ee)
            le[ye] === void 0 && (le[ye] = Ee[ye]);
        }
        if (ie || Oe) {
          var Se = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ie && lt(le, Se), Oe && at(le, Se);
        }
        return we(b, ie, Oe, ce, Q, S.current, le);
      }
    }
    var De = w.ReactCurrentOwner, Hr = w.ReactDebugCurrentFrame;
    function dt(b) {
      if (b) {
        var O = b._owner, L = Ie(b.type, b._source, O ? O.type : null);
        Hr.setExtraStackFrame(L);
      } else
        Hr.setExtraStackFrame(null);
    }
    var En;
    En = !1;
    function Sn(b) {
      return typeof b == "object" && b !== null && b.$$typeof === n;
    }
    function Vr() {
      {
        if (De.current) {
          var b = K(De.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function la(b) {
      {
        if (b !== void 0) {
          var O = b.fileName.replace(/^.*[\\\/]/, ""), L = b.lineNumber;
          return `

Check your code at ` + O + ":" + L + ".";
        }
        return "";
      }
    }
    var Wr = {};
    function aa(b) {
      {
        var O = Vr();
        if (!O) {
          var L = typeof b == "string" ? b : b.displayName || b.name;
          L && (O = `

Check the top-level render call using <` + L + ">.");
        }
        return O;
      }
    }
    function Yr(b, O) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var L = aa(O);
        if (Wr[L])
          return;
        Wr[L] = !0;
        var Q = "";
        b && b._owner && b._owner !== De.current && (Q = " It was passed a child from " + K(b._owner.type) + "."), dt(b), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, Q), dt(null);
      }
    }
    function Gr(b, O) {
      {
        if (typeof b != "object")
          return;
        if (Tt(b))
          for (var L = 0; L < b.length; L++) {
            var Q = b[L];
            Sn(Q) && Yr(Q, O);
          }
        else if (Sn(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ce = k(b);
          if (typeof ce == "function" && ce !== b.entries)
            for (var ye = ce.call(b), le; !(le = ye.next()).done; )
              Sn(le.value) && Yr(le.value, O);
        }
      }
    }
    function sa(b) {
      {
        var O = b.type;
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
          var Q = K(O);
          Ht(L, b.props, "prop", Q, b);
        } else if (O.PropTypes !== void 0 && !En) {
          En = !0;
          var ce = K(O);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ua(b) {
      {
        for (var O = Object.keys(b.props), L = 0; L < O.length; L++) {
          var Q = O[L];
          if (Q !== "children" && Q !== "key") {
            dt(b), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), dt(null);
            break;
          }
        }
        b.ref !== null && (dt(b), A("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function Jr(b, O, L, Q, ce, ye) {
      {
        var le = v(b);
        if (!le) {
          var ie = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = la(ce);
          Oe ? ie += Oe : ie += Vr();
          var Ee;
          b === null ? Ee = "null" : Tt(b) ? Ee = "array" : b !== void 0 && b.$$typeof === n ? (Ee = "<" + (K(b.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof b, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ie);
        }
        var Se = At(b, O, L, ce, ye);
        if (Se == null)
          return Se;
        if (le) {
          var Me = O.children;
          if (Me !== void 0)
            if (Q)
              if (Tt(Me)) {
                for (var mt = 0; mt < Me.length; mt++)
                  Gr(Me[mt], b);
                Object.freeze && Object.freeze(Me);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gr(Me, b);
        }
        return b === r ? ua(Se) : sa(Se), Se;
      }
    }
    function ca(b, O, L) {
      return Jr(b, O, L, !0);
    }
    function fa(b, O, L) {
      return Jr(b, O, L, !1);
    }
    var pa = fa, ha = ca;
    Ot.Fragment = r, Ot.jsx = pa, Ot.jsxs = ha;
  }()), Ot;
}
process.env.NODE_ENV === "production" ? Xn.exports = ya() : Xn.exports = ba();
var P = Xn.exports;
function yr() {
  return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center w-full font-light text-sm", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ P.jsx("a", { href: "mailto:hello@quibbble.com", children: /* @__PURE__ */ P.jsx("p", { children: "Contact" }) }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx("a", { href: "https://www.buymeacoffee.com/quibbble", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ P.jsx("p", { children: "Support" }) }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx("a", { href: "https://discord.gg/VKvjutuhUp", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ P.jsx("p", { children: "Discord" }) }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx("a", { href: "https://status.quibbble.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ P.jsx("p", { children: "Status" }) }),
      /* @__PURE__ */ P.jsx("p", { className: "mx-2 md:mx-4", children: "/" }),
      /* @__PURE__ */ P.jsx("a", { href: "https://github.com/quibbble", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ P.jsx("p", { children: "Code" }) })
    ] }),
    /* @__PURE__ */ P.jsxs("p", { className: "mt-2 italic", children: [
      "Made with 🤍 by ",
      /* @__PURE__ */ P.jsx("a", { className: "underline", href: "https://chrisfregly.com", target: "_blank", rel: "noreferrer", children: "Chris Fregly" })
    ] })
  ] });
}
function Eo(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: ka } = Object.prototype, { getPrototypeOf: br } = Object, cn = ((e) => (n) => {
  const t = ka.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (n) => cn(n) === e), fn = (e) => (n) => typeof n === e, { isArray: vt } = Array, Dt = fn("undefined");
function wa(e) {
  return e !== null && !Dt(e) && e.constructor !== null && !Dt(e.constructor) && Be(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const So = Ke("ArrayBuffer");
function xa(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && So(e.buffer), n;
}
const va = fn("string"), Be = fn("function"), Co = fn("number"), pn = (e) => e !== null && typeof e == "object", Ea = (e) => e === !0 || e === !1, Zt = (e) => {
  if (cn(e) !== "object")
    return !1;
  const n = br(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Sa = Ke("Date"), Ca = Ke("File"), Ta = Ke("Blob"), Aa = Ke("FileList"), Pa = (e) => pn(e) && Be(e.pipe), Oa = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || Be(e.append) && ((n = cn(e)) === "formdata" || // detect form-data instance
  n === "object" && Be(e.toString) && e.toString() === "[object FormData]"));
}, Ra = Ke("URLSearchParams"), Fa = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mt(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), vt(e))
    for (r = 0, i = e.length; r < i; r++)
      n.call(null, e[r], r, e);
  else {
    const o = t ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let a;
    for (r = 0; r < l; r++)
      a = o[r], n.call(null, e[a], a, e);
  }
}
function To(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, i;
  for (; r-- > 0; )
    if (i = t[r], n === i.toLowerCase())
      return i;
  return null;
}
const Ao = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Po = (e) => !Dt(e) && e !== Ao;
function Qn() {
  const { caseless: e } = Po(this) && this || {}, n = {}, t = (r, i) => {
    const o = e && To(n, i) || i;
    Zt(n[o]) && Zt(r) ? n[o] = Qn(n[o], r) : Zt(r) ? n[o] = Qn({}, r) : vt(r) ? n[o] = r.slice() : n[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Mt(arguments[r], t);
  return n;
}
const _a = (e, n, t, { allOwnKeys: r } = {}) => (Mt(n, (i, o) => {
  t && Be(i) ? e[o] = Eo(i, t) : e[o] = i;
}, { allOwnKeys: r }), e), Ia = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ja = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, Da = (e, n, t, r) => {
  let i, o, l;
  const a = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      l = i[o], (!r || r(l, e, n)) && !a[l] && (n[l] = e[l], a[l] = !0);
    e = t !== !1 && br(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, za = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, La = (e) => {
  if (!e)
    return null;
  if (vt(e))
    return e;
  let n = e.length;
  if (!Co(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Na = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && br(Uint8Array)), Ma = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    n.call(e, o[0], o[1]);
  }
}, $a = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Ba = Ke("HTMLFormElement"), Ua = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, i) {
    return r.toUpperCase() + i;
  }
), Zr = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), qa = Ke("RegExp"), Oo = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Mt(t, (i, o) => {
    let l;
    (l = n(i, o, e)) !== !1 && (r[o] = l || i);
  }), Object.defineProperties(e, r);
}, Ha = (e) => {
  Oo(e, (n, t) => {
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
}, Va = (e, n) => {
  const t = {}, r = (i) => {
    i.forEach((o) => {
      t[o] = !0;
    });
  };
  return vt(e) ? r(e) : r(String(e).split(n)), t;
}, Wa = () => {
}, Ya = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Cn = "abcdefghijklmnopqrstuvwxyz", ei = "0123456789", Ro = {
  DIGIT: ei,
  ALPHA: Cn,
  ALPHA_DIGIT: Cn + Cn.toUpperCase() + ei
}, Ga = (e = 16, n = Ro.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function Ja(e) {
  return !!(e && Be(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ka = (e) => {
  const n = new Array(10), t = (r, i) => {
    if (pn(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[i] = r;
        const o = vt(r) ? [] : {};
        return Mt(r, (l, a) => {
          const s = t(l, i + 1);
          !Dt(s) && (o[a] = s);
        }), n[i] = void 0, o;
      }
    }
    return r;
  };
  return t(e, 0);
}, Xa = Ke("AsyncFunction"), Qa = (e) => e && (pn(e) || Be(e)) && Be(e.then) && Be(e.catch), T = {
  isArray: vt,
  isArrayBuffer: So,
  isBuffer: wa,
  isFormData: Oa,
  isArrayBufferView: xa,
  isString: va,
  isNumber: Co,
  isBoolean: Ea,
  isObject: pn,
  isPlainObject: Zt,
  isUndefined: Dt,
  isDate: Sa,
  isFile: Ca,
  isBlob: Ta,
  isRegExp: qa,
  isFunction: Be,
  isStream: Pa,
  isURLSearchParams: Ra,
  isTypedArray: Na,
  isFileList: Aa,
  forEach: Mt,
  merge: Qn,
  extend: _a,
  trim: Fa,
  stripBOM: Ia,
  inherits: ja,
  toFlatObject: Da,
  kindOf: cn,
  kindOfTest: Ke,
  endsWith: za,
  toArray: La,
  forEachEntry: Ma,
  matchAll: $a,
  isHTMLForm: Ba,
  hasOwnProperty: Zr,
  hasOwnProp: Zr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Oo,
  freezeMethods: Ha,
  toObjectSet: Va,
  toCamelCase: Ua,
  noop: Wa,
  toFiniteNumber: Ya,
  findKey: To,
  global: Ao,
  isContextDefined: Po,
  ALPHABET: Ro,
  generateString: Ga,
  isSpecCompliantForm: Ja,
  toJSONObject: Ka,
  isAsyncFn: Xa,
  isThenable: Qa
};
function ae(e, n, t, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), i && (this.response = i);
}
T.inherits(ae, Error, {
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
const Fo = ae.prototype, _o = {};
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
  _o[e] = { value: e };
});
Object.defineProperties(ae, _o);
Object.defineProperty(Fo, "isAxiosError", { value: !0 });
ae.from = (e, n, t, r, i, o) => {
  const l = Object.create(Fo);
  return T.toFlatObject(e, l, function(s) {
    return s !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ae.call(l, e.message, n, t, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const Za = null;
function Zn(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Io(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ti(e, n, t) {
  return e ? e.concat(n).map(function(i, o) {
    return i = Io(i), !t && o ? "[" + i + "]" : i;
  }).join(t ? "." : "") : n;
}
function es(e) {
  return T.isArray(e) && !e.some(Zn);
}
const ts = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function hn(e, n, t) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = T.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, k) {
    return !T.isUndefined(k[g]);
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
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(d) || T.isTypedArray(d) ? s && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, g, k) {
    let w = d;
    if (d && !k && typeof d == "object") {
      if (T.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (T.isArray(d) && es(d) || (T.isFileList(d) || T.endsWith(g, "[]")) && (w = T.toArray(d)))
        return g = Io(g), w.forEach(function(C, I) {
          !(T.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ti([g], I, o) : l === null ? g : g + "[]",
            u(C)
          );
        }), !1;
    }
    return Zn(d) ? !0 : (n.append(ti(k, g, o), u(d)), !1);
  }
  const f = [], m = Object.assign(ts, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Zn
  });
  function p(d, g) {
    if (!T.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), T.forEach(d, function(w, A) {
        (!(T.isUndefined(w) || w === null) && i.call(
          n,
          w,
          T.isString(A) ? A.trim() : A,
          g,
          m
        )) === !0 && p(w, g ? g.concat(A) : [A]);
      }), f.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), n;
}
function ni(e) {
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
function kr(e, n) {
  this._pairs = [], e && hn(e, this, n);
}
const jo = kr.prototype;
jo.append = function(n, t) {
  this._pairs.push([n, t]);
};
jo.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, ni);
  } : ni;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Do(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || ns, i = t && t.serialize;
  let o;
  if (i ? o = i(n, t) : o = T.isURLSearchParams(n) ? n.toString() : new kr(n, t).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class rs {
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
const ri = rs, zo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, is = typeof URLSearchParams < "u" ? URLSearchParams : kr, os = typeof FormData < "u" ? FormData : null, ls = typeof Blob < "u" ? Blob : null, as = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ss = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ve = {
  isBrowser: !0,
  classes: {
    URLSearchParams: is,
    FormData: os,
    Blob: ls
  },
  isStandardBrowserEnv: as,
  isStandardBrowserWebWorkerEnv: ss,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function us(e, n) {
  return hn(e, new Ve.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, i, o) {
      return Ve.isNode && T.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function cs(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function fs(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const i = t.length;
  let o;
  for (r = 0; r < i; r++)
    o = t[r], n[o] = e[o];
  return n;
}
function Lo(e) {
  function n(t, r, i, o) {
    let l = t[o++];
    const a = Number.isFinite(+l), s = o >= t.length;
    return l = !l && T.isArray(i) ? i.length : l, s ? (T.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !a) : ((!i[l] || !T.isObject(i[l])) && (i[l] = []), n(t, r, i[l], o) && T.isArray(i[l]) && (i[l] = fs(i[l])), !a);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const t = {};
    return T.forEachEntry(e, (r, i) => {
      n(cs(r), i, t, 0);
    }), t;
  }
  return null;
}
function ps(e, n, t) {
  if (T.isString(e))
    try {
      return (n || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const wr = {
  transitional: zo,
  adapter: Ve.isNode ? "http" : "xhr",
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", i = r.indexOf("application/json") > -1, o = T.isObject(n);
    if (o && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return i && i ? JSON.stringify(Lo(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return us(n, this.formSerializer).toString();
      if ((a = T.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return hn(
          a ? { "files[]": n } : n,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return o || i ? (t.setContentType("application/json", !1), ps(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || wr.transitional, r = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (n && T.isString(n) && (r && !this.responseType || i)) {
      const l = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (l)
          throw a.name === "SyntaxError" ? ae.from(a, ae.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  wr.headers[e] = {};
});
const xr = wr, hs = T.toObjectSet([
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
]), ds = (e) => {
  const n = {};
  let t, r, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), t = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!t || n[t] && hs[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, ii = Symbol("internals");
function Rt(e) {
  return e && String(e).trim().toLowerCase();
}
function en(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(en) : String(e);
}
function ms(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const gs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Tn(e, n, t, r, i) {
  if (T.isFunction(r))
    return r.call(this, n, t);
  if (i && (n = t), !!T.isString(n)) {
    if (T.isString(r))
      return n.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(n);
  }
}
function ys(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function bs(e, n) {
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
class dn {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const i = this;
    function o(a, s, u) {
      const c = Rt(s);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = T.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || s] = en(a));
    }
    const l = (a, s) => T.forEach(a, (u, c) => o(u, c, s));
    return T.isPlainObject(n) || n instanceof this.constructor ? l(n, t) : T.isString(n) && (n = n.trim()) && !gs(n) ? l(ds(n), t) : n != null && o(t, n, r), this;
  }
  get(n, t) {
    if (n = Rt(n), n) {
      const r = T.findKey(this, n);
      if (r) {
        const i = this[r];
        if (!t)
          return i;
        if (t === !0)
          return ms(i);
        if (T.isFunction(t))
          return t.call(this, i, r);
        if (T.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Rt(n), n) {
      const r = T.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Tn(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let i = !1;
    function o(l) {
      if (l = Rt(l), l) {
        const a = T.findKey(r, l);
        a && (!t || Tn(r, r[a], a, t)) && (delete r[a], i = !0);
      }
    }
    return T.isArray(n) ? n.forEach(o) : o(n), i;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, i = !1;
    for (; r--; ) {
      const o = t[r];
      (!n || Tn(this, this[o], o, n, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(n) {
    const t = this, r = {};
    return T.forEach(this, (i, o) => {
      const l = T.findKey(r, o);
      if (l) {
        t[l] = en(i), delete t[o];
        return;
      }
      const a = n ? ys(o) : String(o).trim();
      a !== o && delete t[o], t[a] = en(i), r[a] = !0;
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
    const r = (this[ii] = this[ii] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(l) {
      const a = Rt(l);
      r[a] || (bs(i, l), r[a] = !0);
    }
    return T.isArray(n) ? n.forEach(o) : o(n), this;
  }
}
dn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(dn.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
T.freezeMethods(dn);
const Ze = dn;
function An(e, n) {
  const t = this || xr, r = n || t, i = Ze.from(r.headers);
  let o = r.data;
  return T.forEach(e, function(a) {
    o = a.call(t, o, i.normalize(), n ? n.status : void 0);
  }), i.normalize(), o;
}
function No(e) {
  return !!(e && e.__CANCEL__);
}
function $t(e, n, t) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, n, t), this.name = "CanceledError";
}
T.inherits($t, ae, {
  __CANCEL__: !0
});
function ks(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new ae(
    "Request failed with status code " + t.status,
    [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const ws = Ve.isStandardBrowserEnv ? (
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
function xs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function vs(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Mo(e, n) {
  return e && !xs(n) ? vs(e, n) : n;
}
const Es = Ve.isStandardBrowserEnv ? (
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
function Ss(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Cs(e, n) {
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
function oi(e, n) {
  let t = 0;
  const r = Cs(50, 250);
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
const Ts = typeof XMLHttpRequest < "u", As = Ts && function(e) {
  return new Promise(function(t, r) {
    let i = e.data;
    const o = Ze.from(e.headers).normalize(), l = e.responseType;
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
    const c = Mo(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Do(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
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
      ks(function(w) {
        t(w), s();
      }, function(w) {
        r(w), s();
      }, g), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new ae("Request aborted", ae.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new ae("Network Error", ae.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || zo;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new ae(
        d,
        g.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Ve.isStandardBrowserEnv) {
      const p = (e.withCredentials || Es(c)) && e.xsrfCookieName && ws.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in u && T.forEach(o.toJSON(), function(d, g) {
      u.setRequestHeader(g, d);
    }), T.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), l && l !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", oi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", oi(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (p) => {
      u && (r(!p || p.type ? new $t(null, e, u) : p), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const m = Ss(c);
    if (m && Ve.protocols.indexOf(m) === -1) {
      r(new ae("Unsupported protocol " + m + ":", ae.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
}, tn = {
  http: Za,
  xhr: As
};
T.forEach(tn, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const $o = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let i = 0; i < n && (t = e[i], !(r = T.isString(t) ? tn[t.toLowerCase()] : t)); i++)
      ;
    if (!r)
      throw r === !1 ? new ae(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        T.hasOwnProp(tn, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!T.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: tn
};
function Pn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $t(null, e);
}
function li(e) {
  return Pn(e), e.headers = Ze.from(e.headers), e.data = An.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $o.getAdapter(e.adapter || xr.adapter)(e).then(function(r) {
    return Pn(e), r.data = An.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return No(r) || (Pn(e), r && r.response && (r.response.data = An.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const ai = (e) => e instanceof Ze ? e.toJSON() : e;
function wt(e, n) {
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
    headers: (u, c) => i(ai(u), ai(c), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const f = s[c] || i, m = f(e[c], n[c], c);
    T.isUndefined(m) && f !== a || (t[c] = m);
  }), t;
}
const Bo = "1.5.0", vr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  vr[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const si = {};
vr.transitional = function(n, t, r) {
  function i(o, l) {
    return "[Axios v" + Bo + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, a) => {
    if (n === !1)
      throw new ae(
        i(l, " has been removed" + (t ? " in " + t : "")),
        ae.ERR_DEPRECATED
      );
    return t && !si[l] && (si[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(o, l, a) : !0;
  };
};
function Ps(e, n, t) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], l = n[o];
    if (l) {
      const a = e[o], s = a === void 0 || l(a, o, e);
      if (s !== !0)
        throw new ae("option " + o + " must be " + s, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new ae("Unknown option " + o, ae.ERR_BAD_OPTION);
  }
}
const er = {
  assertOptions: Ps,
  validators: vr
}, nt = er.validators;
class ln {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new ri(),
      response: new ri()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = wt(this.defaults, t);
    const { transitional: r, paramsSerializer: i, headers: o } = t;
    r !== void 0 && er.assertOptions(r, {
      silentJSONParsing: nt.transitional(nt.boolean),
      forcedJSONParsing: nt.transitional(nt.boolean),
      clarifyTimeoutError: nt.transitional(nt.boolean)
    }, !1), i != null && (T.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : er.assertOptions(i, {
      encode: nt.function,
      serialize: nt.function
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
      const d = [li.bind(this), void 0];
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
      } catch (k) {
        g.call(this, k);
        break;
      }
    }
    try {
      c = li.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(n) {
    n = wt(this.defaults, n);
    const t = Mo(n.baseURL, n.url);
    return Do(t, n.params, n.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(n) {
  ln.prototype[n] = function(t, r) {
    return this.request(wt(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(o, l, a) {
      return this.request(wt(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  ln.prototype[n] = t(), ln.prototype[n + "Form"] = t(!0);
});
const nn = ln;
class Er {
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
      r.reason || (r.reason = new $t(o, l, a), t(r.reason));
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
      token: new Er(function(i) {
        n = i;
      }),
      cancel: n
    };
  }
}
const Os = Er;
function Rs(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Fs(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const tr = {
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
Object.entries(tr).forEach(([e, n]) => {
  tr[n] = e;
});
const _s = tr;
function Uo(e) {
  const n = new nn(e), t = Eo(nn.prototype.request, n);
  return T.extend(t, nn.prototype, n, { allOwnKeys: !0 }), T.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(i) {
    return Uo(wt(e, i));
  }, t;
}
const Te = Uo(xr);
Te.Axios = nn;
Te.CanceledError = $t;
Te.CancelToken = Os;
Te.isCancel = No;
Te.VERSION = Bo;
Te.toFormData = hn;
Te.AxiosError = ae;
Te.Cancel = Te.CanceledError;
Te.all = function(n) {
  return Promise.all(n);
};
Te.spread = Rs;
Te.isAxiosError = Fs;
Te.mergeConfig = wt;
Te.AxiosHeaders = Ze;
Te.formToJSON = (e) => Lo(T.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = $o.getAdapter;
Te.HttpStatusCode = _s;
Te.default = Te;
const mn = Te;
mn.defaults.withCredentials = !0;
const Is = async (e, n, t, r, i) => {
  let o = {
    method: "POST",
    url: `${e}/game/create`,
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      GameKey: n,
      GameID: t,
      Teams: r,
      TurnLength: null,
      MoreOptions: {
        Seed: Date.now(),
        Variant: i
      }
    })
  };
  return mn(o).catch((l) => l.response).then((l) => l.status);
}, js = async (e, n, t) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${n}&GameID=${t}`
  };
  return mn(r).catch((i) => i.response);
}, qo = async (e) => {
  let n = {
    method: "GET",
    url: `${e}/health`
  };
  return mn(n).catch((t) => t.response);
};
function cg({ config: e }) {
  const n = un();
  return setInterval(function() {
    async function t() {
      let r = await qo(e.host);
      r && r.status === 200 && n("/");
    }
    t();
  }, 5e3), /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center my-8 md:my-12", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "w-full flex flex-col items-center mt-48", children: [
      /* @__PURE__ */ P.jsx("p", { className: "font-black text-4xl italic", children: "We'll be right back!" }),
      /* @__PURE__ */ P.jsxs("p", { className: "mb-1 font-thin", children: [
        /* @__PURE__ */ P.jsx("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
        " is down for maintenance"
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ P.jsx(yr, {}) })
  ] });
}
const ui = [
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
  "pubic",
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
], ci = [
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
], On = {
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
function fg({ config: e }) {
  const n = un(), [t, r] = ft(`${ui[Math.floor(Math.random() * ui.length)]}-${ci[Math.floor(Math.random() * ci.length)]}-${Math.floor(Math.random() * (99 - 0 + 1) + 0)}`), [i, o] = ft(e.minTeams), [l, a] = ft(e.variants.length > 0 ? e.variants[0] : null);
  yt(() => {
    async function u() {
      let c = await qo(e.host);
      (!c || c.status !== 200) && n("/status/down");
    }
    u();
  }, [history]);
  async function s(u) {
    u.preventDefault();
    let c = await Is(e.host, e.key, t, i, l);
    (c === 201 || c === 400) && n(`/${t}`);
  }
  return /* @__PURE__ */ P.jsx("div", { children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center m-8 md:m-12", children: [
    /* @__PURE__ */ P.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center fade-in", children: [
      /* @__PURE__ */ P.jsx("div", { className: ` text-5xl font-black font-['${e.font}'] text-${e.color} mb-1 cursor-pointer`, children: /* @__PURE__ */ P.jsx("a", { href: `${window.location.protocol}//${window.location.host}`, children: e.key }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "font-thin mb-3", children: [
        "Play ",
        e.minTeams === e.maxTeams ? `${On[e.minTeams]}` : `${On[e.minTeams]} to ${On[e.maxTeams]}`,
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
          /* @__PURE__ */ P.jsx("div", { className: "italic text-xs  py-1 px-2 border-blue-500 border border-dashed text-blue-500", children: /* @__PURE__ */ P.jsxs("a", { href: "https://quibbble.com", target: "_blank", children: [
            "more ",
            /* @__PURE__ */ P.jsx("span", { className: "text-zinc-100 font-['lobster'] text-sm not-italic", children: "quibbble" }),
            " games"
          ] }) })
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
    /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ P.jsx(yr, {}) })
  ] }) });
}
var Ho = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, fi = Re.createContext && Re.createContext(Ho), it = globalThis && globalThis.__assign || function() {
  return it = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, it.apply(this, arguments);
}, Ds = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
function Vo(e) {
  return e && e.map(function(n, t) {
    return Re.createElement(n.tag, it({
      key: t
    }, n.attr), Vo(n.child));
  });
}
function Sr(e) {
  return function(n) {
    return Re.createElement(zs, it({
      attr: it({}, e.attr)
    }, n), Vo(e.child));
  };
}
function zs(e) {
  var n = function(t) {
    var r = e.attr, i = e.size, o = e.title, l = Ds(e, ["attr", "size", "title"]), a = i || t.size || "1em", s;
    return t.className && (s = t.className), e.className && (s = (s ? s + " " : "") + e.className), Re.createElement("svg", it({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, l, {
      className: s,
      style: it(it({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Re.createElement("title", null, o), e.children);
  };
  return fi !== void 0 ? Re.createElement(fi.Consumer, null, function(t) {
    return n(t);
  }) : n(Ho);
}
function Ls(e) {
  return Sr({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function Ns(e) {
  return Sr({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" } }] })(e);
}
function Ms(e) {
  return Sr({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48 252 259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z" } }] })(e);
}
function $s({ isConn: e }) {
  const [n, t] = ft(0);
  return yt(() => {
    e ? setTimeout(() => t((r) => r - 1), 1500) : t(0);
  }, [e, t]), /* @__PURE__ */ P.jsxs("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}`, children: [
    n ? null : /* @__PURE__ */ P.jsx("div", { className: "px-1", children: e ? "connected" : "connecting" }),
    /* @__PURE__ */ P.jsx("div", { onClick: () => {
      e && (t(0), setTimeout(() => t(n - 1), 1500));
    }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}`, children: e ? null : /* @__PURE__ */ P.jsx("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" }) })
  ] });
}
const pg = da((e, n) => {
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
    children: d
  } = e, { gameID: g } = ga(), k = un(), [w, A] = ft(!0);
  yt(() => {
    c && l && c[l.Name] && localStorage.setItem(g, c[l.Name]);
  }, [l, c, g]), yt(() => {
    const v = async (z) => {
      if (z <= 0) {
        k("/");
        return;
      }
      let K = await js(t.host, t.key, g);
      if (!K) {
        k("/status/down");
        return;
      }
      if (K.status !== 200) {
        k("/");
        return;
      }
      r.current = new WebSocket(`${t.websocket}/game/join?GameKey=${t.key}&GameID=${g}`), r.current.onopen = () => {
        A(!0);
        let Y = localStorage.getItem(g);
        Y && C(Y);
      }, r.current.onclose = () => {
        A(!1), setTimeout(function() {
          v(z - 1);
        }, 1e3 + (3 - z) * 500);
      }, r.current.onmessage = async (Y) => {
        let B = JSON.parse(Y.data);
        B.Type === "Game" ? o(B.Payload) : B.Type === "Network" ? a(B.Payload) : B.Type === "Chat" ? u((oe) => oe.concat([B.Payload])) : B.Type === "Connected" ? f(B.Payload) : B.Type === "Error" && p(B.Payload);
      }, r.current.onerror = (Y) => {
        console.error("Socket encountered error: ", Y.message, "Closing socket"), r.current.close();
      };
    };
    v(3);
  }, [r, g, history]);
  const C = (v) => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: v } }));
  }, I = () => {
    if (!r.current)
      return;
    const v = i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "";
    r.current.send(JSON.stringify({ ActionType: "Reset", MoreDetails: { MoreOptions: { Seed: Date.now(), Variant: v } } }));
  }, E = () => {
    r.current && (i && c && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team !== c[l.Name] || r.current.send(JSON.stringify({ ActionType: "Undo" })));
  }, [x, N] = ft(!0);
  yt(() => {
    const v = () => N(!x);
    return window.addEventListener("resize", v), (D) => window.removeEventListener("resize", v);
  });
  const [q, Z] = ft(0);
  return yt(() => {
    q > 0 && setTimeout(() => Z(q - 1), 1e3);
  }, [q]), /* @__PURE__ */ P.jsx("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4 fade-in", children: /* @__PURE__ */ P.jsxs("div", { ref: n, className: `h-full w-full ${t.gamePageMaxWidth} flex flex-col items-center grow`, children: [
    /* @__PURE__ */ P.jsxs("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm", children: [
      /* @__PURE__ */ P.jsxs("div", { children: [
        "Share this link: ",
        /* @__PURE__ */ P.jsx("span", { className: "underline cursor-pointer", onClick: () => {
          Z(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${g}`);
        }, children: `${window.location.protocol}//${window.location.host}/${g}` }),
        q > 0 ? /* @__PURE__ */ P.jsxs("div", { className: "absolute mt-2 w-full flex justify-center", children: [
          /* @__PURE__ */ P.jsx("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block", children: /* @__PURE__ */ P.jsx("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" }) }),
          /* @__PURE__ */ P.jsx("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1", children: "copied!" })
        ] }) : null
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "px-1", children: /* @__PURE__ */ P.jsx($s, { isConn: w }) })
    ] }),
    /* @__PURE__ */ P.jsx("hr", { className: "w-full mb-2" }),
    /* @__PURE__ */ P.jsxs("div", { className: "flex w-full justify-between items-center mb-4", children: [
      /* @__PURE__ */ P.jsx("div", { className: "flex", children: i ? i.Teams.map((v) => /* @__PURE__ */ P.jsx(
        "div",
        {
          className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${v}-500 ${l && c && c[l.Name] === v ? `bg-${c[l.Name]}-500` : ""}`,
          onClick: () => C(v),
          children: i && i.MoreData && i.MoreData.Points ? i.MoreData.Points[v] : ""
        },
        v
      )) : null }),
      /* @__PURE__ */ P.jsx("div", { className: `font-extrabold ${i && c && l && c[l.Name] && i.Winners.length === 0 ? `text-${i.Turn}-500` : "text-zinc-100"} ${i && l && c && c[l.Name] === i.Turn && i.Winners.length === 0 ? "animate-pulse" : ""}`, children: i && c && l && c[l.Name] ? i.Message : /* @__PURE__ */ P.jsxs("div", { className: "flex items-center animate-pulse", children: [
        /* @__PURE__ */ P.jsx(Ls, { className: "mr-1" }),
        /* @__PURE__ */ P.jsx("div", { children: "select a team" })
      ] }) })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "h-full w-full flex flex-col justify-center items-center grow", children: d }),
    /* @__PURE__ */ P.jsx("hr", { className: "w-full mb-2" }),
    /* @__PURE__ */ P.jsxs("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ P.jsx("div", { className: `leading-4 text-2xl font-black text-${t.color} cursor-pointer`, children: /* @__PURE__ */ P.jsxs("button", { onClick: () => {
        sessionStorage.setItem("gameID", ""), k("/");
      }, children: [
        /* @__PURE__ */ P.jsx("span", { className: `font-['${t.font}']`, children: t.key }),
        /* @__PURE__ */ P.jsx("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100", children: i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "" })
      ] }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ P.jsx("button", { onClick: () => I(), title: "reset game", className: `p-2 ${i && i.Winners.length > 0 ? "bg-blue-500" : "bg-zinc-500"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ P.jsx(Ns, {}) }),
        /* @__PURE__ */ P.jsx("button", { onClick: () => E(), title: "undo move", className: `p-2 ${i && c && l && i.Actions && i.Actions.length > 0 && i.Actions[i.Actions.length - 1].Team === c[l.Name] ? "bg-amber-500" : "bg-zinc-700 text-zinc-500 cursor-default"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ P.jsx(Ms, {}) }),
        /* @__PURE__ */ P.jsx("button", { onClick: () => {
          sessionStorage.setItem("gameID", g), k("/rules");
        }, title: "how to play", className: "p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
        /* @__PURE__ */ P.jsx("div", { className: "hidden md:flex italic text-xs ml-2 py-1 px-2 border-blue-500 border border-dashed text-blue-500", children: /* @__PURE__ */ P.jsxs("a", { href: "https://quibbble.com", target: "_blank", children: [
          "more ",
          /* @__PURE__ */ P.jsx("span", { className: "text-zinc-200 font-['lobster'] text-sm not-italic", children: "quibbble" }),
          " games"
        ] }) })
      ] })
    ] })
  ] }) });
}), pi = ["http", "https", "mailto", "tel"];
function Bs(e) {
  const n = (e || "").trim(), t = n.charAt(0);
  if (t === "#" || t === "/")
    return n;
  const r = n.indexOf(":");
  if (r === -1)
    return n;
  let i = -1;
  for (; ++i < pi.length; ) {
    const o = pi[i];
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
var Us = function(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
};
const Wo = /* @__PURE__ */ Nt(Us);
function It(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? hi(e.position) : "start" in e || "end" in e ? hi(e) : "line" in e || "column" in e ? nr(e) : "";
}
function nr(e) {
  return di(e && e.line) + ":" + di(e && e.column);
}
function hi(e) {
  return nr(e && e.start) + "-" + nr(e && e.end);
}
function di(e) {
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
    t && ("type" in t || "position" in t ? t.position && (o = t.position) : "start" in t || "end" in t ? o = t : ("line" in t || "column" in t) && (o.start = t)), this.name = It(t) || "1:1", this.message = typeof n == "object" ? n.message : n, this.stack = "", typeof n == "object" && n.stack && (this.stack = n.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note;
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
const Ye = { basename: qs, dirname: Hs, extname: Vs, join: Ws, sep: "/" };
function qs(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  Bt(e);
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
function Hs(e) {
  if (Bt(e), e.length === 0)
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
function Vs(e) {
  Bt(e);
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
function Ws(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    Bt(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Ys(t);
}
function Ys(e) {
  Bt(e);
  const n = e.charCodeAt(0) === 47;
  let t = Gs(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.charCodeAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Gs(e, n) {
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
function Bt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Js = { cwd: Ks };
function Ks() {
  return "/";
}
function rr(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function Xs(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!rr(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return Qs(e);
}
function Qs(e) {
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
const Rn = ["history", "path", "basename", "stem", "extname", "dirname"];
class Yo {
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
    n ? typeof n == "string" || Zs(n) ? t = { value: n } : rr(n) ? t = { path: n } : t = n : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Js.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < Rn.length; ) {
      const o = Rn[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      Rn.includes(i) || (this[i] = t[i]);
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
    rr(n) && (n = Xs(n)), _n(n, "path"), this.path !== n && this.history.push(n);
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
    mi(this.basename, "dirname"), this.path = Ye.join(n || "", this.basename);
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
    _n(n, "basename"), Fn(n, "basename"), this.path = Ye.join(this.dirname || "", n);
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
    if (Fn(n, "extname"), mi(this.dirname, "extname"), n) {
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
    _n(n, "stem"), Fn(n, "stem"), this.path = Ye.join(this.dirname || "", n + (this.extname || ""));
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
function Fn(e, n) {
  if (e && e.includes(Ye.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + Ye.sep + "`"
    );
}
function _n(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function mi(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Zs(e) {
  return Wo(e);
}
function gi(e) {
  if (e)
    throw e;
}
var rn = Object.prototype.hasOwnProperty, Go = Object.prototype.toString, yi = Object.defineProperty, bi = Object.getOwnPropertyDescriptor, ki = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : Go.call(n) === "[object Array]";
}, wi = function(n) {
  if (!n || Go.call(n) !== "[object Object]")
    return !1;
  var t = rn.call(n, "constructor"), r = n.constructor && n.constructor.prototype && rn.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r)
    return !1;
  var i;
  for (i in n)
    ;
  return typeof i > "u" || rn.call(n, i);
}, xi = function(n, t) {
  yi && t.name === "__proto__" ? yi(n, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : n[t.name] = t.newValue;
}, vi = function(n, t) {
  if (t === "__proto__")
    if (rn.call(n, t)) {
      if (bi)
        return bi(n, t).value;
    } else
      return;
  return n[t];
}, eu = function e() {
  var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (n = arguments[s], n != null)
      for (t in n)
        r = vi(a, t), i = vi(n, t), a !== i && (c && i && (wi(i) || (o = ki(i))) ? (o ? (o = !1, l = r && ki(r) ? r : []) : l = r && wi(r) ? r : {}, xi(a, { name: t, newValue: e(c, l, i) })) : typeof i < "u" && xi(a, { name: t, newValue: i }));
  return a;
};
const Ei = /* @__PURE__ */ Nt(eu);
function ir(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function tu() {
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
      i = u, c ? nu(c, a)(...u) : l(null, ...u);
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
function nu(e, n) {
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
const ru = Ko().freeze(), Jo = {}.hasOwnProperty;
function Ko() {
  const e = tu(), n = [];
  let t = {}, r, i = -1;
  return o.data = l, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = n, o.use = s, o.parse = u, o.stringify = c, o.run = f, o.runSync = m, o.process = p, o.processSync = d, o;
  function o() {
    const g = Ko();
    let k = -1;
    for (; ++k < n.length; )
      g.use(...n[k]);
    return g.data(Ei(!0, {}, t)), g;
  }
  function l(g, k) {
    return typeof g == "string" ? arguments.length === 2 ? (Dn("data", r), t[g] = k, o) : Jo.call(t, g) && t[g] || null : g ? (Dn("data", r), t = g, o) : t;
  }
  function a() {
    if (r)
      return o;
    for (; ++i < n.length; ) {
      const [g, ...k] = n[i];
      if (k[0] === !1)
        continue;
      k[0] === !0 && (k[0] = void 0);
      const w = g.call(o, ...k);
      typeof w == "function" && e.use(w);
    }
    return r = !0, i = Number.POSITIVE_INFINITY, o;
  }
  function s(g, ...k) {
    let w;
    if (Dn("use", r), g != null)
      if (typeof g == "function")
        E(g, ...k);
      else if (typeof g == "object")
        Array.isArray(g) ? I(g) : C(g);
      else
        throw new TypeError("Expected usable value, not `" + g + "`");
    return w && (t.settings = Object.assign(t.settings || {}, w)), o;
    function A(x) {
      if (typeof x == "function")
        E(x);
      else if (typeof x == "object")
        if (Array.isArray(x)) {
          const [N, ...q] = x;
          E(N, ...q);
        } else
          C(x);
      else
        throw new TypeError("Expected usable value, not `" + x + "`");
    }
    function C(x) {
      I(x.plugins), x.settings && (w = Object.assign(w || {}, x.settings));
    }
    function I(x) {
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
    function E(x, N) {
      let q = -1, Z;
      for (; ++q < n.length; )
        if (n[q][0] === x) {
          Z = n[q];
          break;
        }
      Z ? (ir(Z[1]) && ir(N) && (N = Ei(!0, Z[1], N)), Z[1] = N) : n.push([...arguments]);
    }
  }
  function u(g) {
    o.freeze();
    const k = Ft(g), w = o.Parser;
    return In("parse", w), Si(w, "parse") ? new w(String(k), k).parse() : w(String(k), k);
  }
  function c(g, k) {
    o.freeze();
    const w = Ft(k), A = o.Compiler;
    return jn("stringify", A), Ci(g), Si(A, "compile") ? new A(g, w).compile() : A(g, w);
  }
  function f(g, k, w) {
    if (Ci(g), o.freeze(), !w && typeof k == "function" && (w = k, k = void 0), !w)
      return new Promise(A);
    A(null, w);
    function A(C, I) {
      e.run(g, Ft(k), E);
      function E(x, N, q) {
        N = N || g, x ? I(x) : C ? C(N) : w(null, N, q);
      }
    }
  }
  function m(g, k) {
    let w, A;
    return o.run(g, k, C), Ti("runSync", "run", A), w;
    function C(I, E) {
      gi(I), w = E, A = !0;
    }
  }
  function p(g, k) {
    if (o.freeze(), In("process", o.Parser), jn("process", o.Compiler), !k)
      return new Promise(w);
    w(null, k);
    function w(A, C) {
      const I = Ft(g);
      o.run(o.parse(I), I, (x, N, q) => {
        if (x || !N || !q)
          E(x);
        else {
          const Z = o.stringify(N, q);
          Z == null || (lu(Z) ? q.value = Z : q.result = Z), E(x, q);
        }
      });
      function E(x, N) {
        x || !N ? C(x) : A ? A(N) : k(null, N);
      }
    }
  }
  function d(g) {
    let k;
    o.freeze(), In("processSync", o.Parser), jn("processSync", o.Compiler);
    const w = Ft(g);
    return o.process(w, A), Ti("processSync", "process", k), w;
    function A(C) {
      k = !0, gi(C);
    }
  }
}
function Si(e, n) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (iu(e.prototype) || n in e.prototype);
}
function iu(e) {
  let n;
  for (n in e)
    if (Jo.call(e, n))
      return !0;
  return !1;
}
function In(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function jn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Dn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ci(e) {
  if (!ir(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ti(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function Ft(e) {
  return ou(e) ? e : new Yo(e);
}
function ou(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function lu(e) {
  return typeof e == "string" || Wo(e);
}
const au = {};
function su(e, n) {
  const t = n || au, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Xo(e, r, i);
}
function Xo(e, n, t) {
  if (uu(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ai(e.children, n, t);
  }
  return Array.isArray(e) ? Ai(e, n, t) : "";
}
function Ai(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Xo(e[i], n, t);
  return r.join("");
}
function uu(e) {
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
const Pi = {}.hasOwnProperty;
function cu(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    fu(n, e[t]);
  return n;
}
function fu(e, n) {
  let t;
  for (t in n) {
    const i = (Pi.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        Pi.call(i, l) || (i[l] = []);
        const a = o[l];
        pu(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function pu(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  Je(e, 0, 0, r);
}
const hu = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ge = ot(/[A-Za-z]/), Le = ot(/[\dA-Za-z]/), du = ot(/[#-'*+\--9=?A-Z^-~]/);
function or(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const lr = ot(/\d/), mu = ot(/[\dA-Fa-f]/), gu = ot(/[!-/:-@[-`{-~]/);
function J(e) {
  return e !== null && e < -2;
}
function _e(e) {
  return e !== null && (e < 0 || e === 32);
}
function fe(e) {
  return e === -2 || e === -1 || e === 32;
}
const yu = ot(hu), bu = ot(/\s/);
function ot(e) {
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
    return fe(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return fe(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const ku = {
  tokenize: wu
};
function wu(e) {
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
const xu = {
  tokenize: vu
}, Oi = {
  tokenize: Eu
};
function vu(e) {
  const n = this, t = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < t.length) {
      const I = t[r];
      return n.containerState = I[1], e.attempt(
        I[0].continuation,
        s,
        u
      )(C);
    }
    return u(C);
  }
  function s(C) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && A();
      const I = n.events.length;
      let E = I, x;
      for (; E--; )
        if (n.events[E][0] === "exit" && n.events[E][1].type === "chunkFlow") {
          x = n.events[E][1].end;
          break;
        }
      w(r);
      let N = I;
      for (; N < n.events.length; )
        n.events[N][1].end = Object.assign({}, x), N++;
      return Je(
        n.events,
        E + 1,
        0,
        n.events.slice(I)
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
      Oi,
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
      Oi,
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
    }), g(C);
  }
  function g(C) {
    if (C === null) {
      k(e.exit("chunkFlow"), !0), w(0), e.consume(C);
      return;
    }
    return J(C) ? (e.consume(C), k(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(C), g);
  }
  function k(C, I) {
    const E = n.sliceStream(C);
    if (I && E.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(E), n.parser.lazy[C.start.line]) {
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
      let q = N, Z, v;
      for (; q--; )
        if (n.events[q][0] === "exit" && n.events[q][1].type === "chunkFlow") {
          if (Z) {
            v = n.events[q][1].end;
            break;
          }
          Z = !0;
        }
      for (w(r), x = N; x < n.events.length; )
        n.events[x][1].end = Object.assign({}, v), x++;
      Je(
        n.events,
        q + 1,
        0,
        n.events.slice(N)
      ), n.events.length = x;
    }
  }
  function w(C) {
    let I = t.length;
    for (; I-- > C; ) {
      const E = t[I];
      n.containerState = E[1], E[0].exit.call(n, e);
    }
    t.length = C;
  }
  function A() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function Eu(e, n, t) {
  return ke(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Ri(e) {
  if (e === null || _e(e) || bu(e))
    return 1;
  if (yu(e))
    return 2;
}
function Cr(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const ar = {
  name: "attention",
  tokenize: Cu,
  resolveAll: Su
};
function Su(e, n) {
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
          Fi(f, -s), Fi(m, s), l = {
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
            Cr(
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
function Cu(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ri(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Ri(s), f = !c || c === 2 && i || t.includes(s), m = !i || i === 2 && c || t.includes(r);
    return u._open = !!(o === 42 ? f : f && (i || !m)), u._close = !!(o === 42 ? m : m && (c || !f)), n(s);
  }
}
function Fi(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Tu = {
  name: "autolink",
  tokenize: Au
};
function Au(e, n, t) {
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
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || or(p) ? t(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), c) : du(p) ? (e.consume(p), u) : t(p);
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
const gn = {
  tokenize: Pu,
  partial: !0
};
function Pu(e, n, t) {
  return r;
  function r(o) {
    return fe(o) ? ke(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || J(o) ? n(o) : t(o);
  }
}
const Qo = {
  name: "blockQuote",
  tokenize: Ou,
  continuation: {
    tokenize: Ru
  },
  exit: Fu
};
function Ou(e, n, t) {
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
    return fe(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
  }
}
function Ru(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return fe(l) ? ke(
      e,
      o,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(l) : o(l);
  }
  function o(l) {
    return e.attempt(Qo, n, t)(l);
  }
}
function Fu(e) {
  e.exit("blockQuote");
}
const Zo = {
  name: "characterEscape",
  tokenize: _u
};
function _u(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return gu(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const _i = document.createElement("i");
function Tr(e) {
  const n = "&" + e + ";";
  _i.innerHTML = n;
  const t = _i.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
const el = {
  name: "characterReference",
  tokenize: Iu
};
function Iu(e, n, t) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = mu, c) : (e.enter("characterReferenceValue"), o = 7, l = lr, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const m = e.exit("characterReferenceValue");
      return l === Le && !Tr(r.sliceSerialize(m)) ? t(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return l(f) && i++ < o ? (e.consume(f), c) : t(f);
  }
}
const Ii = {
  tokenize: Du,
  partial: !0
}, ji = {
  name: "codeFenced",
  tokenize: ju,
  concrete: !0
};
function ju(e, n, t) {
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
    return x === a ? (l++, e.consume(x), c) : l < 3 ? t(x) : (e.exit("codeFencedFenceSequence"), fe(x) ? ke(e, f, "whitespace")(x) : f(x));
  }
  function f(x) {
    return x === null || J(x) ? (e.exit("codeFencedFence"), r.interrupt ? n(x) : e.check(Ii, g, I)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), m(x));
  }
  function m(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x)) : fe(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ke(e, p, "whitespace")(x)) : x === 96 && x === a ? t(x) : (e.consume(x), m);
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
    return e.attempt(i, I, k)(x);
  }
  function k(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), w;
  }
  function w(x) {
    return o > 0 && fe(x) ? ke(
      e,
      A,
      "linePrefix",
      o + 1
    )(x) : A(x);
  }
  function A(x) {
    return x === null || J(x) ? e.check(Ii, g, I)(x) : (e.enter("codeFlowValue"), C(x));
  }
  function C(x) {
    return x === null || J(x) ? (e.exit("codeFlowValue"), A(x)) : (e.consume(x), C);
  }
  function I(x) {
    return e.exit("codeFenced"), n(x);
  }
  function E(x, N, q) {
    let Z = 0;
    return v;
    function v(B) {
      return x.enter("lineEnding"), x.consume(B), x.exit("lineEnding"), D;
    }
    function D(B) {
      return x.enter("codeFencedFence"), fe(B) ? ke(
        x,
        z,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(B) : z(B);
    }
    function z(B) {
      return B === a ? (x.enter("codeFencedFenceSequence"), K(B)) : q(B);
    }
    function K(B) {
      return B === a ? (Z++, x.consume(B), K) : Z >= l ? (x.exit("codeFencedFenceSequence"), fe(B) ? ke(x, Y, "whitespace")(B) : Y(B)) : q(B);
    }
    function Y(B) {
      return B === null || J(B) ? (x.exit("codeFencedFence"), N(B)) : q(B);
    }
  }
}
function Du(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const zn = {
  name: "codeIndented",
  tokenize: Lu
}, zu = {
  tokenize: Nu,
  partial: !0
};
function Lu(e, n, t) {
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
    return u === null ? s(u) : J(u) ? e.attempt(zu, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || J(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function Nu(e, n, t) {
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
const Mu = {
  name: "codeText",
  tokenize: Uu,
  resolve: $u,
  previous: Bu
};
function $u(e) {
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
function Bu(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Uu(e, n, t) {
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
function tl(e) {
  const n = {};
  let t = -1, r, i, o, l, a, s, u;
  for (; ++t < e.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = e[t], t && r[1].type === "chunkFlow" && e[t - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, qu(e, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o-- && (l = e[o], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, t), a.unshift(r), Je(e, i, t - i + 1, a));
    }
  }
  return !u;
}
function qu(e, n) {
  const t = e[n][1], r = e[n][2];
  let i = n - 1;
  const o = [], l = t._tokenizer || r.parser[t.contentType](t.start), a = l.events, s = [], u = {};
  let c, f, m = -1, p = t, d = 0, g = 0;
  const k = [g];
  for (; p; ) {
    for (; e[++i][1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = t; ++m < a.length; )
    // Find a void token that includes a break.
    a[m][0] === "exit" && a[m - 1][0] === "enter" && a[m][1].type === a[m - 1][1].type && a[m][1].start.line !== a[m][1].end.line && (g = m + 1, k.push(g), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : k.pop(), m = k.length; m--; ) {
    const w = a.slice(k[m], k[m + 1]), A = o.pop();
    s.unshift([A, A + w.length - 1]), Je(e, A, 2, w);
  }
  for (m = -1; ++m < s.length; )
    u[d + s[m][0]] = d + s[m][1], d += s[m][1] - s[m][0] - 1;
  return u;
}
const Hu = {
  tokenize: Yu,
  resolve: Wu
}, Vu = {
  tokenize: Gu,
  partial: !0
};
function Wu(e) {
  return tl(e), e;
}
function Yu(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : J(a) ? e.check(
      Vu,
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
function Gu(e, n, t) {
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
function nl(e, n, t, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(w) {
    return w === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(w), e.exit(o), m) : w === null || w === 32 || w === 41 || or(w) ? t(w) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
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
    return !c && (w === null || w === 41 || _e(w)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(w)) : c < u && w === 40 ? (e.consume(w), c++, g) : w === 41 ? (e.consume(w), c--, g) : w === null || w === 32 || w === 40 || or(w) ? t(w) : (e.consume(w), w === 92 ? k : g);
  }
  function k(w) {
    return w === 40 || w === 41 || w === 92 ? (e.consume(w), g) : g(w);
  }
}
function rl(e, n, t, r, i, o) {
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
    return p === null || p === 91 || p === 93 || J(p) || a++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), s || (s = !fe(p)), p === 92 ? m : f);
  }
  function m(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function il(e, n, t, r, i, o) {
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
function jt(e, n) {
  let t;
  return r;
  function r(i) {
    return J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : fe(i) ? ke(
      e,
      r,
      t ? "linePrefix" : "lineSuffix"
    )(i) : n(i);
  }
}
function bt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ju = {
  name: "definition",
  tokenize: Xu
}, Ku = {
  tokenize: Qu,
  partial: !0
};
function Xu(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return rl.call(
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
    return i = bt(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : t(p);
  }
  function s(p) {
    return _e(p) ? jt(e, u)(p) : u(p);
  }
  function u(p) {
    return nl(
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
    return e.attempt(Ku, f, f)(p);
  }
  function f(p) {
    return fe(p) ? ke(e, m, "whitespace")(p) : m(p);
  }
  function m(p) {
    return p === null || J(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function Qu(e, n, t) {
  return r;
  function r(a) {
    return _e(a) ? jt(e, i)(a) : t(a);
  }
  function i(a) {
    return il(
      e,
      o,
      t,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function o(a) {
    return fe(a) ? ke(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || J(a) ? n(a) : t(a);
  }
}
const Zu = {
  name: "hardBreakEscape",
  tokenize: ec
};
function ec(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return J(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const tc = {
  name: "headingAtx",
  tokenize: rc,
  resolve: nc
};
function nc(e, n) {
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
function rc(e, n, t) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || _e(c) ? (e.exit("atxHeadingSequence"), a(c)) : t(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || J(c) ? (e.exit("atxHeading"), n(c)) : fe(c) ? ke(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || _e(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const ic = [
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
], Di = ["pre", "script", "style", "textarea"], oc = {
  name: "htmlFlow",
  tokenize: uc,
  resolveTo: sc,
  concrete: !0
}, lc = {
  tokenize: fc,
  partial: !0
}, ac = {
  tokenize: cc,
  partial: !0
};
function sc(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function uc(e, n, t) {
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
    return y === 33 ? (e.consume(y), m) : y === 47 ? (e.consume(y), o = !0, g) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? n : h) : Ge(y) ? (e.consume(y), l = String.fromCharCode(y), k) : t(y);
  }
  function m(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, a = 0, d) : Ge(y) ? (e.consume(y), i = 4, r.interrupt ? n : h) : t(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? n : h) : t(y);
  }
  function d(y) {
    const U = "CDATA[";
    return y === U.charCodeAt(a++) ? (e.consume(y), a === U.length ? r.interrupt ? n : z : d) : t(y);
  }
  function g(y) {
    return Ge(y) ? (e.consume(y), l = String.fromCharCode(y), k) : t(y);
  }
  function k(y) {
    if (y === null || y === 47 || y === 62 || _e(y)) {
      const U = y === 47, te = l.toLowerCase();
      return !U && !o && Di.includes(te) ? (i = 1, r.interrupt ? n(y) : z(y)) : ic.includes(l.toLowerCase()) ? (i = 6, U ? (e.consume(y), w) : r.interrupt ? n(y) : z(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(y) : o ? A(y) : C(y));
    }
    return y === 45 || Le(y) ? (e.consume(y), l += String.fromCharCode(y), k) : t(y);
  }
  function w(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? n : z) : t(y);
  }
  function A(y) {
    return fe(y) ? (e.consume(y), A) : v(y);
  }
  function C(y) {
    return y === 47 ? (e.consume(y), v) : y === 58 || y === 95 || Ge(y) ? (e.consume(y), I) : fe(y) ? (e.consume(y), C) : v(y);
  }
  function I(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Le(y) ? (e.consume(y), I) : E(y);
  }
  function E(y) {
    return y === 61 ? (e.consume(y), x) : fe(y) ? (e.consume(y), E) : C(y);
  }
  function x(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? t(y) : y === 34 || y === 39 ? (e.consume(y), s = y, N) : fe(y) ? (e.consume(y), x) : q(y);
  }
  function N(y) {
    return y === s ? (e.consume(y), s = null, Z) : y === null || J(y) ? t(y) : (e.consume(y), N);
  }
  function q(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || _e(y) ? E(y) : (e.consume(y), q);
  }
  function Z(y) {
    return y === 47 || y === 62 || fe(y) ? C(y) : t(y);
  }
  function v(y) {
    return y === 62 ? (e.consume(y), D) : t(y);
  }
  function D(y) {
    return y === null || J(y) ? z(y) : fe(y) ? (e.consume(y), D) : t(y);
  }
  function z(y) {
    return y === 45 && i === 2 ? (e.consume(y), oe) : y === 60 && i === 1 ? (e.consume(y), pe) : y === 62 && i === 4 ? (e.consume(y), _) : y === 63 && i === 3 ? (e.consume(y), h) : y === 93 && i === 5 ? (e.consume(y), Ae) : J(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(
      lc,
      H,
      K
    )(y)) : y === null || J(y) ? (e.exit("htmlFlowData"), K(y)) : (e.consume(y), z);
  }
  function K(y) {
    return e.check(
      ac,
      Y,
      H
    )(y);
  }
  function Y(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), B;
  }
  function B(y) {
    return y === null || J(y) ? K(y) : (e.enter("htmlFlowData"), z(y));
  }
  function oe(y) {
    return y === 45 ? (e.consume(y), h) : z(y);
  }
  function pe(y) {
    return y === 47 ? (e.consume(y), l = "", xe) : z(y);
  }
  function xe(y) {
    if (y === 62) {
      const U = l.toLowerCase();
      return Di.includes(U) ? (e.consume(y), _) : z(y);
    }
    return Ge(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), xe) : z(y);
  }
  function Ae(y) {
    return y === 93 ? (e.consume(y), h) : z(y);
  }
  function h(y) {
    return y === 62 ? (e.consume(y), _) : y === 45 && i === 2 ? (e.consume(y), h) : z(y);
  }
  function _(y) {
    return y === null || J(y) ? (e.exit("htmlFlowData"), H(y)) : (e.consume(y), _);
  }
  function H(y) {
    return e.exit("htmlFlow"), n(y);
  }
}
function cc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function fc(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(gn, n, t);
  }
}
const pc = {
  name: "htmlText",
  tokenize: hc
};
function hc(e, n, t) {
  const r = this;
  let i, o, l;
  return a;
  function a(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s;
  }
  function s(h) {
    return h === 33 ? (e.consume(h), u) : h === 47 ? (e.consume(h), E) : h === 63 ? (e.consume(h), C) : Ge(h) ? (e.consume(h), q) : t(h);
  }
  function u(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), o = 0, d) : Ge(h) ? (e.consume(h), A) : t(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), p) : t(h);
  }
  function f(h) {
    return h === null ? t(h) : h === 45 ? (e.consume(h), m) : J(h) ? (l = f, pe(h)) : (e.consume(h), f);
  }
  function m(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? oe(h) : h === 45 ? m(h) : f(h);
  }
  function d(h) {
    const _ = "CDATA[";
    return h === _.charCodeAt(o++) ? (e.consume(h), o === _.length ? g : d) : t(h);
  }
  function g(h) {
    return h === null ? t(h) : h === 93 ? (e.consume(h), k) : J(h) ? (l = g, pe(h)) : (e.consume(h), g);
  }
  function k(h) {
    return h === 93 ? (e.consume(h), w) : g(h);
  }
  function w(h) {
    return h === 62 ? oe(h) : h === 93 ? (e.consume(h), w) : g(h);
  }
  function A(h) {
    return h === null || h === 62 ? oe(h) : J(h) ? (l = A, pe(h)) : (e.consume(h), A);
  }
  function C(h) {
    return h === null ? t(h) : h === 63 ? (e.consume(h), I) : J(h) ? (l = C, pe(h)) : (e.consume(h), C);
  }
  function I(h) {
    return h === 62 ? oe(h) : C(h);
  }
  function E(h) {
    return Ge(h) ? (e.consume(h), x) : t(h);
  }
  function x(h) {
    return h === 45 || Le(h) ? (e.consume(h), x) : N(h);
  }
  function N(h) {
    return J(h) ? (l = N, pe(h)) : fe(h) ? (e.consume(h), N) : oe(h);
  }
  function q(h) {
    return h === 45 || Le(h) ? (e.consume(h), q) : h === 47 || h === 62 || _e(h) ? Z(h) : t(h);
  }
  function Z(h) {
    return h === 47 ? (e.consume(h), oe) : h === 58 || h === 95 || Ge(h) ? (e.consume(h), v) : J(h) ? (l = Z, pe(h)) : fe(h) ? (e.consume(h), Z) : oe(h);
  }
  function v(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Le(h) ? (e.consume(h), v) : D(h);
  }
  function D(h) {
    return h === 61 ? (e.consume(h), z) : J(h) ? (l = D, pe(h)) : fe(h) ? (e.consume(h), D) : Z(h);
  }
  function z(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? t(h) : h === 34 || h === 39 ? (e.consume(h), i = h, K) : J(h) ? (l = z, pe(h)) : fe(h) ? (e.consume(h), z) : (e.consume(h), Y);
  }
  function K(h) {
    return h === i ? (e.consume(h), i = void 0, B) : h === null ? t(h) : J(h) ? (l = K, pe(h)) : (e.consume(h), K);
  }
  function Y(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? t(h) : h === 47 || h === 62 || _e(h) ? Z(h) : (e.consume(h), Y);
  }
  function B(h) {
    return h === 47 || h === 62 || _e(h) ? Z(h) : t(h);
  }
  function oe(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(h);
  }
  function pe(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), xe;
  }
  function xe(h) {
    return fe(h) ? ke(
      e,
      Ae,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(h) : Ae(h);
  }
  function Ae(h) {
    return e.enter("htmlTextData"), l(h);
  }
}
const Ar = {
  name: "labelEnd",
  tokenize: kc,
  resolveTo: bc,
  resolveAll: yc
}, dc = {
  tokenize: wc
}, mc = {
  tokenize: xc
}, gc = {
  tokenize: vc
};
function yc(e) {
  let n = -1;
  for (; ++n < e.length; ) {
    const t = e[n][1];
    (t.type === "labelImage" || t.type === "labelLink" || t.type === "labelEnd") && (e.splice(n + 1, t.type === "labelImage" ? 4 : 2), t.type = "data", n++);
  }
  return e;
}
function bc(e, n) {
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
    Cr(
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
function kc(e, n, t) {
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
      bt(
        r.sliceSerialize({
          start: o.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(m), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(m);
  }
  function s(m) {
    return m === 40 ? e.attempt(
      dc,
      c,
      l ? c : f
    )(m) : m === 91 ? e.attempt(
      mc,
      c,
      l ? u : f
    )(m) : l ? c(m) : f(m);
  }
  function u(m) {
    return e.attempt(
      gc,
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
function wc(e, n, t) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return _e(f) ? jt(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : nl(
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
    return _e(f) ? jt(e, s)(f) : c(f);
  }
  function a(f) {
    return t(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? il(
      e,
      u,
      t,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(f) : c(f);
  }
  function u(f) {
    return _e(f) ? jt(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), n) : t(f);
  }
}
function xc(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return rl.call(
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
      bt(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? n(a) : t(a);
  }
  function l(a) {
    return t(a);
  }
}
function vc(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const Ec = {
  name: "labelStartImage",
  tokenize: Sc,
  resolveAll: Ar.resolveAll
};
function Sc(e, n, t) {
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
const Cc = {
  name: "labelStartLink",
  tokenize: Tc,
  resolveAll: Ar.resolveAll
};
function Tc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const Ln = {
  name: "lineEnding",
  tokenize: Ac
};
function Ac(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ke(e, n, "linePrefix");
  }
}
const on = {
  name: "thematicBreak",
  tokenize: Pc
};
function Pc(e, n, t) {
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
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), fe(u) ? ke(e, a, "whitespace")(u) : a(u));
  }
}
const Fe = {
  name: "list",
  tokenize: Fc,
  continuation: {
    tokenize: _c
  },
  exit: jc
}, Oc = {
  tokenize: Dc,
  partial: !0
}, Rc = {
  tokenize: Ic,
  partial: !0
};
function Fc(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const d = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : lr(p)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(on, t, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return t(p);
  }
  function s(p) {
    return lr(p) && ++l < 10 ? (e.consume(p), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : t(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      gn,
      // Can’t be empty when interrupting.
      r.interrupt ? t : c,
      e.attempt(
        Oc,
        m,
        f
      )
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, m(p);
  }
  function f(p) {
    return fe(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), m) : t(p);
  }
  function m(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(p);
  }
}
function _c(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(gn, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ke(
      e,
      n,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !fe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Rc, n, l)(a));
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
function Ic(e, n, t) {
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
function jc(e) {
  e.exit(this.containerState.type);
}
function Dc(e, n, t) {
  const r = this;
  return ke(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !fe(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const zi = {
  name: "setextUnderline",
  tokenize: Lc,
  resolveTo: zc
};
function zc(e, n) {
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
function Lc(e, n, t) {
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
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), fe(u) ? ke(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || J(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
const Nc = {
  tokenize: Mc
};
function Mc(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    gn,
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
          e.attempt(Hu, i)
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
const $c = {
  resolveAll: ll()
}, Bc = ol("string"), Uc = ol("text");
function ol(e) {
  return {
    tokenize: n,
    resolveAll: ll(
      e === "text" ? qc : void 0
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
function ll(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function qc(e, n) {
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
function Hc(e, n, t) {
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
    exit: I,
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
  function f(D) {
    return l = $e(l, D), k(), l[l.length - 1] !== null ? [] : (q(n, 0), u.events = Cr(o, u.events, u), u.events);
  }
  function m(D, z) {
    return Wc(p(D), z);
  }
  function p(D) {
    return Vc(l, D);
  }
  function d() {
    const { line: D, column: z, offset: K, _index: Y, _bufferIndex: B } = r;
    return {
      line: D,
      column: z,
      offset: K,
      _index: Y,
      _bufferIndex: B
    };
  }
  function g(D) {
    i[D.line] = D.column, v();
  }
  function k() {
    let D;
    for (; r._index < l.length; ) {
      const z = l[r._index];
      if (typeof z == "string")
        for (D = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === D && r._bufferIndex < z.length; )
          w(z.charCodeAt(r._bufferIndex));
      else
        w(z);
    }
  }
  function w(D) {
    c = c(D);
  }
  function A(D) {
    J(D) ? (r.line++, r.column = 1, r.offset += D === -3 ? 2 : 1, v()) : D !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = D;
  }
  function C(D, z) {
    const K = z || {};
    return K.type = D, K.start = d(), u.events.push(["enter", K, u]), a.push(K), K;
  }
  function I(D) {
    const z = a.pop();
    return z.end = d(), u.events.push(["exit", z, u]), z;
  }
  function E(D, z) {
    q(D, z.from);
  }
  function x(D, z) {
    z.restore();
  }
  function N(D, z) {
    return K;
    function K(Y, B, oe) {
      let pe, xe, Ae, h;
      return Array.isArray(Y) ? H(Y) : "tokenize" in Y ? (
        // @ts-expect-error Looks like a construct.
        H([Y])
      ) : _(Y);
      function _(M) {
        return W;
        function W(G) {
          const ne = G !== null && M[G], X = G !== null && M.null, ve = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ne) ? ne : ne ? [ne] : [],
            ...Array.isArray(X) ? X : X ? [X] : []
          ];
          return H(ve)(G);
        }
      }
      function H(M) {
        return pe = M, xe = 0, M.length === 0 ? oe : y(M[xe]);
      }
      function y(M) {
        return W;
        function W(G) {
          return h = Z(), Ae = M, M.partial || (u.currentConstruct = M), M.name && u.parser.constructs.disable.null.includes(M.name) ? te() : M.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(u), z) : u,
            s,
            U,
            te
          )(G);
        }
      }
      function U(M) {
        return D(Ae, h), B;
      }
      function te(M) {
        return h.restore(), ++xe < pe.length ? y(pe[xe]) : oe;
      }
    }
  }
  function q(D, z) {
    D.resolveAll && !o.includes(D) && o.push(D), D.resolve && Je(
      u.events,
      z,
      u.events.length - z,
      D.resolve(u.events.slice(z), u)
    ), D.resolveTo && (u.events = D.resolveTo(u.events, u));
  }
  function Z() {
    const D = d(), z = u.previous, K = u.currentConstruct, Y = u.events.length, B = Array.from(a);
    return {
      restore: oe,
      from: Y
    };
    function oe() {
      r = D, u.previous = z, u.currentConstruct = K, u.events.length = Y, a = B, v();
    }
  }
  function v() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Vc(e, n) {
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
function Wc(e, n) {
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
const Yc = {
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
  62: Qo
}, Gc = {
  91: Ju
}, Jc = {
  [-2]: zn,
  [-1]: zn,
  32: zn
}, Kc = {
  35: tc,
  42: on,
  45: [zi, on],
  60: oc,
  61: zi,
  95: on,
  96: ji,
  126: ji
}, Xc = {
  38: el,
  92: Zo
}, Qc = {
  [-5]: Ln,
  [-4]: Ln,
  [-3]: Ln,
  33: Ec,
  38: el,
  42: ar,
  60: [Tu, pc],
  91: Cc,
  92: [Zu, Zo],
  93: Ar,
  95: ar,
  96: Mu
}, Zc = {
  null: [ar, $c]
}, ef = {
  null: [42, 95]
}, tf = {
  null: []
}, nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ef,
  contentInitial: Gc,
  disable: tf,
  document: Yc,
  flow: Kc,
  flowInitial: Jc,
  insideSpan: Zc,
  string: Xc,
  text: Qc
}, Symbol.toStringTag, { value: "Module" }));
function rf(e) {
  const t = (
    /** @type {FullNormalizedExtension} */
    cu([nf, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: t,
    content: i(ku),
    document: i(xu),
    flow: i(Nc),
    string: i(Bc),
    text: i(Uc)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return Hc(r, o, a);
    }
  }
}
const Li = /[\0\t\n\r]/g;
function of() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, c, f, m, p;
    for (o = n + o.toString(l), f = 0, n = "", t && (o.charCodeAt(0) === 65279 && f++, t = void 0); f < o.length; ) {
      if (Li.lastIndex = f, u = Li.exec(o), m = u && u.index !== void 0 ? u.index : o.length, p = o.charCodeAt(m), !u) {
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
function lf(e) {
  for (; !tl(e); )
    ;
  return e;
}
function al(e, n) {
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
const af = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function sf(e) {
  return e.replace(af, uf);
}
function uf(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return al(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Tr(t) || e;
}
const sl = {}.hasOwnProperty, cf = (
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
    return typeof n != "string" && (t = n, n = void 0), ff(t)(
      lf(
        rf(t).document().write(of()(e, n, !0))
      )
    );
  }
);
function ff(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Ht),
      autolinkProtocol: D,
      autolinkEmail: D,
      atxHeading: a(Ne),
      blockQuote: a(ve),
      characterEscape: D,
      characterReference: D,
      codeFenced: a(j),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(j, s),
      codeText: a(Pe, s),
      codeTextData: D,
      data: D,
      codeFlowValue: D,
      definition: a($),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(Ie),
      hardBreakEscape: a(tt),
      hardBreakTrailing: a(tt),
      htmlFlow: a(Ct, s),
      htmlFlowData: D,
      htmlText: a(Ct, s),
      htmlTextData: D,
      image: a(ht),
      label: s,
      link: a(Ht),
      listItem: a(Tt),
      listItemValue: d,
      listOrdered: a(Vt, p),
      listUnordered: a(Vt),
      paragraph: a(xn),
      reference: te,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(Ne),
      strong: a(vn),
      thematicBreak: a(Yt)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: N,
      autolink: c(),
      autolinkEmail: X,
      autolinkProtocol: ne,
      blockQuote: c(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: W,
      characterReferenceMarkerNumeric: W,
      characterReferenceValue: G,
      codeFenced: c(A),
      codeFencedFence: w,
      codeFencedFenceInfo: g,
      codeFencedFenceMeta: k,
      codeFlowValue: z,
      codeIndented: c(C),
      codeText: c(pe),
      codeTextData: z,
      data: z,
      definition: c(),
      definitionDestinationString: x,
      definitionLabelString: I,
      definitionTitleString: E,
      emphasis: c(),
      hardBreakEscape: c(Y),
      hardBreakTrailing: c(Y),
      htmlFlow: c(B),
      htmlFlowData: z,
      htmlText: c(oe),
      htmlTextData: z,
      image: c(Ae),
      label: _,
      labelText: h,
      lineEnding: K,
      link: c(xe),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: M,
      resourceDestinationString: H,
      resourceTitleString: y,
      resource: U,
      setextHeading: c(v),
      setextHeadingLineSequence: Z,
      setextHeadingText: q,
      strong: c(),
      thematicBreak: c()
    }
  };
  ul(n, (e || {}).mdastExtensions || []);
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
    }, se = [];
    let ue = -1;
    for (; ++ue < S.length; )
      if (S[ue][1].type === "listOrdered" || S[ue][1].type === "listUnordered")
        if (S[ue][0] === "enter")
          se.push(ue);
        else {
          const je = se.pop();
          ue = i(S, je, ue);
        }
    for (ue = -1; ++ue < S.length; ) {
      const je = n[S[ue][0]];
      sl.call(je, S[ue][1].type) && je[S[ue][1].type].call(
        Object.assign(
          {
            sliceSerialize: S[ue][2].sliceSerialize
          },
          V
        ),
        S[ue][1]
      );
    }
    if (V.tokenStack.length > 0) {
      const je = V.tokenStack[V.tokenStack.length - 1];
      (je[1] || Ni).call(V, void 0, je[0]);
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
    }, ue = -1; ++ue < n.transforms.length; )
      F = n.transforms[ue](F) || F;
    return F;
  }
  function i(S, F, V) {
    let se = F - 1, ue = -1, je = !1, We, He, lt, at;
    for (; ++se <= V; ) {
      const we = S[se];
      if (we[1].type === "listUnordered" || we[1].type === "listOrdered" || we[1].type === "blockQuote" ? (we[0] === "enter" ? ue++ : ue--, at = void 0) : we[1].type === "lineEndingBlank" ? we[0] === "enter" && (We && !at && !ue && !lt && (lt = se), at = void 0) : we[1].type === "linePrefix" || we[1].type === "listItemValue" || we[1].type === "listItemMarker" || we[1].type === "listItemPrefix" || we[1].type === "listItemPrefixWhitespace" || (at = void 0), !ue && we[0] === "enter" && we[1].type === "listItemPrefix" || ue === -1 && we[0] === "exit" && (we[1].type === "listUnordered" || we[1].type === "listOrdered")) {
        if (We) {
          let At = se;
          for (He = void 0; At--; ) {
            const De = S[At];
            if (De[1].type === "lineEnding" || De[1].type === "lineEndingBlank") {
              if (De[0] === "exit")
                continue;
              He && (S[He][1].type = "lineEndingBlank", je = !0), De[1].type = "lineEnding", He = At;
            } else if (!(De[1].type === "linePrefix" || De[1].type === "blockQuotePrefix" || De[1].type === "blockQuotePrefixWhitespace" || De[1].type === "blockQuoteMarker" || De[1].type === "listItemIndent"))
              break;
          }
          lt && (!He || lt < He) && (We._spread = !0), We.end = Object.assign(
            {},
            He ? S[He][1].start : we[1].end
          ), S.splice(He || se, 0, ["exit", We, we[2]]), se++, V++;
        }
        we[1].type === "listItemPrefix" && (We = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, we[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, S.splice(se, 0, ["enter", We, we[2]]), se++, V++, lt = void 0, at = !0);
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
    function V(se) {
      u.call(this, S(se), se), F && F.call(this, se);
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
    const V = this.stack.pop(), se = this.tokenStack.pop();
    if (se)
      se[0].type !== S.type && (F ? F.call(this, S, se[0]) : (se[1] || Ni).call(this, S, se[0]));
    else
      throw new Error(
        "Cannot close `" + S.type + "` (" + It({
          start: S.start,
          end: S.end
        }) + "): it’s not open"
      );
    return V.position.end = rt(S.end), V;
  }
  function m() {
    return su(this.stack.pop());
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
  function k() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.meta = S;
  }
  function w() {
    l("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
  }
  function A() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside");
  }
  function C() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function I(S) {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = F, V.identifier = bt(
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
  function q() {
    o("setextHeadingSlurpLineEnding", !0);
  }
  function Z(S) {
    const F = this.stack[this.stack.length - 1];
    F.depth = this.sliceSerialize(S).charCodeAt(0) === 61 ? 1 : 2;
  }
  function v() {
    o("setextHeadingSlurpLineEnding");
  }
  function D(S) {
    const F = this.stack[this.stack.length - 1];
    let V = F.children[F.children.length - 1];
    (!V || V.type !== "text") && (V = Wt(), V.position = {
      start: rt(S.start)
    }, F.children.push(V)), this.stack.push(V);
  }
  function z(S) {
    const F = this.stack.pop();
    F.value += this.sliceSerialize(S), F.position.end = rt(S.end);
  }
  function K(S) {
    const F = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const V = F.children[F.children.length - 1];
      V.position.end = rt(S.end), o("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && n.canContainEols.includes(F.type) && (D.call(this, S), z.call(this, S));
  }
  function Y() {
    o("atHardBreak", !0);
  }
  function B() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S;
  }
  function oe() {
    const S = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = S;
  }
  function pe() {
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
  function Ae() {
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
    V.label = sf(F), V.identifier = bt(F).toLowerCase();
  }
  function _() {
    const S = this.stack[this.stack.length - 1], F = this.resume(), V = this.stack[this.stack.length - 1];
    if (o("inReference", !0), V.type === "link") {
      const se = S.children;
      V.children = se;
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
  function U() {
    o("inReference");
  }
  function te() {
    o("referenceType", "collapsed");
  }
  function M(S) {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = F, V.identifier = bt(
      this.sliceSerialize(S)
    ).toLowerCase(), o("referenceType", "full");
  }
  function W(S) {
    o("characterReferenceType", S.type);
  }
  function G(S) {
    const F = this.sliceSerialize(S), V = l("characterReferenceType");
    let se;
    V ? (se = al(
      F,
      V === "characterReferenceMarkerNumeric" ? 10 : 16
    ), o("characterReferenceType")) : se = Tr(F);
    const ue = this.stack.pop();
    ue.value += se, ue.position.end = rt(S.end);
  }
  function ne(S) {
    z.call(this, S);
    const F = this.stack[this.stack.length - 1];
    F.url = this.sliceSerialize(S);
  }
  function X(S) {
    z.call(this, S);
    const F = this.stack[this.stack.length - 1];
    F.url = "mailto:" + this.sliceSerialize(S);
  }
  function ve() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function j() {
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
  function Ie() {
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
  function Ct() {
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
  function Ht() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Vt(S) {
    return {
      type: "list",
      ordered: S.type === "listOrdered",
      start: null,
      spread: S._spread,
      children: []
    };
  }
  function Tt(S) {
    return {
      type: "listItem",
      spread: S._spread,
      checked: null,
      children: []
    };
  }
  function xn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function vn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Wt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Yt() {
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
function ul(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? ul(e, r) : pf(e, r);
  }
}
function pf(e, n) {
  let t;
  for (t in n)
    if (sl.call(n, t)) {
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
function Ni(e, n) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + It({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + n.type + "`, " + It({
      start: n.start,
      end: n.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + n.type + "`, " + It({
      start: n.start,
      end: n.end
    }) + ") is still open"
  );
}
function hf(e) {
  Object.assign(this, { Parser: (t) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return cf(
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
function df(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function mf(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function gf(e, n) {
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
function yf(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function bf(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Et(e) {
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
function cl(e, n) {
  const t = String(n.identifier).toUpperCase(), r = Et(t.toLowerCase()), i = e.footnoteOrder.indexOf(t);
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
function kf(e, n) {
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
  }, cl(e, {
    type: "footnoteReference",
    identifier: i,
    position: n.position
  });
}
function wf(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function xf(e, n) {
  if (e.dangerous) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
  return null;
}
function fl(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return { type: "text", value: "![" + n.alt + r };
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function vf(e, n) {
  const t = e.definition(n.identifier);
  if (!t)
    return fl(e, n);
  const r = { src: Et(t.url || ""), alt: n.alt };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(n, i), e.applyData(n, i);
}
function Ef(e, n) {
  const t = { src: Et(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Sf(e, n) {
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
function Cf(e, n) {
  const t = e.definition(n.identifier);
  if (!t)
    return fl(e, n);
  const r = { href: Et(t.url || "") };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(n)
  };
  return e.patch(n, i), e.applyData(n, i);
}
function Tf(e, n) {
  const t = { href: Et(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Af(e, n, t) {
  const r = e.all(n), i = t ? Pf(t) : pl(n), o = {}, l = [];
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
function Pf(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = pl(t[r]);
  }
  return n;
}
function pl(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function Of(e, n) {
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
function Rf(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Ff(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function _f(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Pr = hl("start"), Or = hl("end");
function If(e) {
  return { start: Pr(e), end: Or(e) };
}
function hl(e) {
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
function jf(e, n) {
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
    }, a = Pr(n.children[1]), s = Or(n.children[n.children.length - 1]);
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
function Df(e, n, t) {
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
function zf(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Mi = 9, $i = 32;
function Lf(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Bi(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(Bi(n.slice(i), i > 0, !1)), o.join("");
}
function Bi(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === Mi || o === $i; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === Mi || o === $i; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Nf(e, n) {
  const t = { type: "text", value: Lf(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Mf(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const $f = {
  blockquote: df,
  break: mf,
  code: gf,
  delete: yf,
  emphasis: bf,
  footnoteReference: cl,
  footnote: kf,
  heading: wf,
  html: xf,
  imageReference: vf,
  image: Ef,
  inlineCode: Sf,
  linkReference: Cf,
  link: Tf,
  listItem: Af,
  list: Of,
  paragraph: Rf,
  root: Ff,
  strong: _f,
  table: jf,
  tableCell: zf,
  tableRow: Df,
  text: Nf,
  thematicBreak: Mf,
  toml: Gt,
  yaml: Gt,
  definition: Gt,
  footnoteDefinition: Gt
};
function Gt() {
  return null;
}
const dl = (
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
      return Hf;
    if (typeof e == "string")
      return qf(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Bf(e) : Uf(e);
    if (typeof e == "function")
      return yn(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Bf(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = dl(e[t]);
  return yn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].call(this, ...i))
        return !0;
    return !1;
  }
}
function Uf(e) {
  return yn(n);
  function n(t) {
    let r;
    for (r in e)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
}
function qf(e) {
  return yn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function yn(e) {
  return n;
  function n(t, ...r) {
    return !!(t && typeof t == "object" && "type" in t && e.call(this, t, ...r));
  }
}
function Hf() {
  return !0;
}
const Vf = !0, Ui = !1, Wf = "skip", Yf = (
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
    const i = dl(n), o = r ? -1 : 1;
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
        if ((!n || i(a, s, u[u.length - 1] || null)) && (m = Gf(t(a, u)), m[0] === Ui))
          return m;
        if (a.children && m[0] !== Wf)
          for (d = (r ? a.children.length : -1) + o, g = u.concat(a); d > -1 && d < a.children.length; ) {
            if (p = l(a.children[d], d, g)(), p[0] === Ui)
              return p;
            d = typeof p[1] == "number" ? p[1] : d + o;
          }
        return m;
      }
    }
  }
);
function Gf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Vf, e] : [e];
}
const Rr = (
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
    typeof n == "function" && typeof t != "function" && (r = t, t = n, n = null), Yf(e, n, i, r);
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
function Jf(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const qi = {}.hasOwnProperty;
function Kf(e) {
  const n = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return Rr(e, "definition", (r) => {
    const i = Hi(r.identifier);
    i && !qi.call(n, i) && (n[i] = r);
  }), t;
  function t(r) {
    const i = Hi(r);
    return i && qi.call(n, i) ? n[i] : null;
  }
}
function Hi(e) {
  return String(e || "").toUpperCase();
}
const an = {}.hasOwnProperty;
function Xf(e, n) {
  const t = n || {}, r = t.allowDangerousHtml || !1, i = {};
  return l.dangerous = r, l.clobberPrefix = t.clobberPrefix === void 0 || t.clobberPrefix === null ? "user-content-" : t.clobberPrefix, l.footnoteLabel = t.footnoteLabel || "Footnotes", l.footnoteLabelTagName = t.footnoteLabelTagName || "h2", l.footnoteLabelProperties = t.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = t.footnoteBackLabel || "Back to content", l.unknownHandler = t.unknownHandler, l.passThrough = t.passThrough, l.handlers = { ...$f, ...t.handlers }, l.definition = Kf(e), l.footnoteById = i, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = Qf, l.applyData = Zf, l.one = a, l.all = s, l.wrap = tp, l.augment = o, Rr(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    an.call(i, c) || (i[c] = u);
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
      Jf(f) || (c.position = { start: Pr(f), end: Or(f) });
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
    return ml(l, u, c);
  }
  function s(u) {
    return Fr(l, u);
  }
}
function Qf(e, n) {
  e.position && (n.position = If(e));
}
function Zf(e, n) {
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
function ml(e, n, t) {
  const r = n && n.type;
  if (!r)
    throw new Error("Expected node, got `" + n + "`");
  return an.call(e.handlers, r) ? e.handlers[r](e, n, t) : e.passThrough && e.passThrough.includes(r) ? "children" in n ? { ...n, children: Fr(e, n) } : n : e.unknownHandler ? e.unknownHandler(e, n, t) : ep(e, n);
}
function Fr(e, n) {
  const t = [];
  if ("children" in n) {
    const r = n.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const o = ml(e, r[i], n);
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
function ep(e, n) {
  const t = n.data || {}, r = "value" in n && !(an.call(t, "hProperties") || an.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: Fr(e, n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function tp(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function np(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[t]];
    if (!r)
      continue;
    const i = e.all(r), o = String(r.identifier).toUpperCase(), l = Et(o.toLowerCase());
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
function gl(e, n) {
  const t = Xf(e, n), r = t.one(e, null), i = np(t);
  return i && r.children.push({ type: "text", value: `
` }, i), Array.isArray(r) ? { type: "root", children: r } : r;
}
const rp = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  function(e, n) {
    return e && "run" in e ? op(e, n) : lp(e || n);
  }
), ip = rp;
function op(e, n) {
  return (t, r, i) => {
    e.run(gl(t, n), r, (o) => {
      i(o);
    });
  };
}
function lp(e) {
  return (n) => gl(n, e);
}
var sr = { exports: {} }, Jt = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function ap() {
  if (Vi)
    return he;
  Vi = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
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
  function I(E) {
    return C(E) === u;
  }
  return he.AsyncMode = s, he.ConcurrentMode = u, he.ContextConsumer = a, he.ContextProvider = l, he.Element = n, he.ForwardRef = c, he.Fragment = r, he.Lazy = d, he.Memo = p, he.Portal = t, he.Profiler = o, he.StrictMode = i, he.Suspense = f, he.isAsyncMode = function(E) {
    return I(E) || C(E) === s;
  }, he.isConcurrentMode = I, he.isContextConsumer = function(E) {
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
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === o || E === i || E === f || E === m || typeof E == "object" && E !== null && (E.$$typeof === d || E.$$typeof === p || E.$$typeof === l || E.$$typeof === a || E.$$typeof === c || E.$$typeof === k || E.$$typeof === w || E.$$typeof === A || E.$$typeof === g);
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
var Wi;
function sp() {
  return Wi || (Wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === r || j === u || j === o || j === i || j === f || j === m || typeof j == "object" && j !== null && (j.$$typeof === d || j.$$typeof === p || j.$$typeof === l || j.$$typeof === a || j.$$typeof === c || j.$$typeof === k || j.$$typeof === w || j.$$typeof === A || j.$$typeof === g);
    }
    function I(j) {
      if (typeof j == "object" && j !== null) {
        var Pe = j.$$typeof;
        switch (Pe) {
          case n:
            var $ = j.type;
            switch ($) {
              case s:
              case u:
              case r:
              case o:
              case i:
              case f:
                return $;
              default:
                var Ie = $ && $.$$typeof;
                switch (Ie) {
                  case a:
                  case c:
                  case d:
                  case p:
                  case l:
                    return Ie;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var E = s, x = u, N = a, q = l, Z = n, v = c, D = r, z = d, K = p, Y = t, B = o, oe = i, pe = f, xe = !1;
    function Ae(j) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(j) || I(j) === s;
    }
    function h(j) {
      return I(j) === u;
    }
    function _(j) {
      return I(j) === a;
    }
    function H(j) {
      return I(j) === l;
    }
    function y(j) {
      return typeof j == "object" && j !== null && j.$$typeof === n;
    }
    function U(j) {
      return I(j) === c;
    }
    function te(j) {
      return I(j) === r;
    }
    function M(j) {
      return I(j) === d;
    }
    function W(j) {
      return I(j) === p;
    }
    function G(j) {
      return I(j) === t;
    }
    function ne(j) {
      return I(j) === o;
    }
    function X(j) {
      return I(j) === i;
    }
    function ve(j) {
      return I(j) === f;
    }
    de.AsyncMode = E, de.ConcurrentMode = x, de.ContextConsumer = N, de.ContextProvider = q, de.Element = Z, de.ForwardRef = v, de.Fragment = D, de.Lazy = z, de.Memo = K, de.Portal = Y, de.Profiler = B, de.StrictMode = oe, de.Suspense = pe, de.isAsyncMode = Ae, de.isConcurrentMode = h, de.isContextConsumer = _, de.isContextProvider = H, de.isElement = y, de.isForwardRef = U, de.isFragment = te, de.isLazy = M, de.isMemo = W, de.isPortal = G, de.isProfiler = ne, de.isStrictMode = X, de.isSuspense = ve, de.isValidElementType = C, de.typeOf = I;
  }()), de;
}
var Yi;
function yl() {
  return Yi || (Yi = 1, process.env.NODE_ENV === "production" ? Jt.exports = ap() : Jt.exports = sp()), Jt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Nn, Gi;
function up() {
  if (Gi)
    return Nn;
  Gi = 1;
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
  return Nn = i() ? Object.assign : function(o, l) {
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
  }, Nn;
}
var Mn, Ji;
function _r() {
  if (Ji)
    return Mn;
  Ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mn = e, Mn;
}
var $n, Ki;
function bl() {
  return Ki || (Ki = 1, $n = Function.call.bind(Object.prototype.hasOwnProperty)), $n;
}
var Bn, Xi;
function cp() {
  if (Xi)
    return Bn;
  Xi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = _r(), t = {}, r = bl();
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
  }, Bn = i, Bn;
}
var Un, Qi;
function fp() {
  if (Qi)
    return Un;
  Qi = 1;
  var e = yl(), n = up(), t = _r(), r = bl(), i = cp(), o = function() {
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
  return Un = function(a, s) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var _ = h && (u && h[u] || h[c]);
      if (typeof _ == "function")
        return _;
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
      element: I(),
      elementType: E(),
      instanceOf: x,
      node: v(),
      objectOf: q,
      oneOf: N,
      oneOfType: Z,
      shape: z,
      exact: K
    };
    function d(h, _) {
      return h === _ ? h !== 0 || 1 / h === 1 / _ : h !== h && _ !== _;
    }
    function g(h, _) {
      this.message = h, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function k(h) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, H = 0;
      function y(te, M, W, G, ne, X, ve) {
        if (G = G || m, X = X || W, ve !== t) {
          if (s) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = G + ":" + W;
            !_[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[Pe] = !0, H++);
          }
        }
        return M[W] == null ? te ? M[W] === null ? new g("The " + ne + " `" + X + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new g("The " + ne + " `" + X + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : h(M, W, G, ne, X);
      }
      var U = y.bind(null, !1);
      return U.isRequired = y.bind(null, !0), U;
    }
    function w(h) {
      function _(H, y, U, te, M, W) {
        var G = H[y], ne = oe(G);
        if (ne !== h) {
          var X = pe(G);
          return new g(
            "Invalid " + te + " `" + M + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return k(_);
    }
    function A() {
      return k(l);
    }
    function C(h) {
      function _(H, y, U, te, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var W = H[y];
        if (!Array.isArray(W)) {
          var G = oe(W);
          return new g("Invalid " + te + " `" + M + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var ne = 0; ne < W.length; ne++) {
          var X = h(W, ne, U, te, M + "[" + ne + "]", t);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return k(_);
    }
    function I() {
      function h(_, H, y, U, te) {
        var M = _[H];
        if (!a(M)) {
          var W = oe(M);
          return new g("Invalid " + U + " `" + te + "` of type " + ("`" + W + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(h);
    }
    function E() {
      function h(_, H, y, U, te) {
        var M = _[H];
        if (!e.isValidElementType(M)) {
          var W = oe(M);
          return new g("Invalid " + U + " `" + te + "` of type " + ("`" + W + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(h);
    }
    function x(h) {
      function _(H, y, U, te, M) {
        if (!(H[y] instanceof h)) {
          var W = h.name || m, G = Ae(H[y]);
          return new g("Invalid " + te + " `" + M + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return k(_);
    }
    function N(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function _(H, y, U, te, M) {
        for (var W = H[y], G = 0; G < h.length; G++)
          if (d(W, h[G]))
            return null;
        var ne = JSON.stringify(h, function(ve, j) {
          var Pe = pe(j);
          return Pe === "symbol" ? String(j) : j;
        });
        return new g("Invalid " + te + " `" + M + "` of value `" + String(W) + "` " + ("supplied to `" + U + "`, expected one of " + ne + "."));
      }
      return k(_);
    }
    function q(h) {
      function _(H, y, U, te, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var W = H[y], G = oe(W);
        if (G !== "object")
          return new g("Invalid " + te + " `" + M + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var ne in W)
          if (r(W, ne)) {
            var X = h(W, ne, U, te, M + "." + ne, t);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return k(_);
    }
    function Z(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var _ = 0; _ < h.length; _++) {
        var H = h[_];
        if (typeof H != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(H) + " at index " + _ + "."
          ), l;
      }
      function y(U, te, M, W, G) {
        for (var ne = [], X = 0; X < h.length; X++) {
          var ve = h[X], j = ve(U, te, M, W, G, t);
          if (j == null)
            return null;
          j.data && r(j.data, "expectedType") && ne.push(j.data.expectedType);
        }
        var Pe = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new g("Invalid " + W + " `" + G + "` supplied to " + ("`" + M + "`" + Pe + "."));
      }
      return k(y);
    }
    function v() {
      function h(_, H, y, U, te) {
        return Y(_[H]) ? null : new g("Invalid " + U + " `" + te + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return k(h);
    }
    function D(h, _, H, y, U) {
      return new g(
        (h || "React class") + ": " + _ + " type `" + H + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function z(h) {
      function _(H, y, U, te, M) {
        var W = H[y], G = oe(W);
        if (G !== "object")
          return new g("Invalid " + te + " `" + M + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var ne in h) {
          var X = h[ne];
          if (typeof X != "function")
            return D(U, te, M, ne, pe(X));
          var ve = X(W, ne, U, te, M + "." + ne, t);
          if (ve)
            return ve;
        }
        return null;
      }
      return k(_);
    }
    function K(h) {
      function _(H, y, U, te, M) {
        var W = H[y], G = oe(W);
        if (G !== "object")
          return new g("Invalid " + te + " `" + M + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var ne = n({}, H[y], h);
        for (var X in ne) {
          var ve = h[X];
          if (r(h, X) && typeof ve != "function")
            return D(U, te, M, X, pe(ve));
          if (!ve)
            return new g(
              "Invalid " + te + " `" + M + "` key `" + X + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(H[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var j = ve(W, X, U, te, M + "." + X, t);
          if (j)
            return j;
        }
        return null;
      }
      return k(_);
    }
    function Y(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(Y);
          if (h === null || a(h))
            return !0;
          var _ = f(h);
          if (_) {
            var H = _.call(h), y;
            if (_ !== h.entries) {
              for (; !(y = H.next()).done; )
                if (!Y(y.value))
                  return !1;
            } else
              for (; !(y = H.next()).done; ) {
                var U = y.value;
                if (U && !Y(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(h, _) {
      return h === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function oe(h) {
      var _ = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : B(_, h) ? "symbol" : _;
    }
    function pe(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var _ = oe(h);
      if (_ === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function xe(h) {
      var _ = pe(h);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Ae(h) {
      return !h.constructor || !h.constructor.name ? m : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Un;
}
var qn, Zi;
function pp() {
  if (Zi)
    return qn;
  Zi = 1;
  var e = _r();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, qn = function() {
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
  }, qn;
}
if (process.env.NODE_ENV !== "production") {
  var hp = yl(), dp = !0;
  sr.exports = fp()(hp.isElement, dp);
} else
  sr.exports = pp()();
var mp = sr.exports;
const ee = /* @__PURE__ */ Nt(mp);
class Ut {
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
Ut.prototype.property = {};
Ut.prototype.normal = {};
Ut.prototype.space = null;
function kl(e, n) {
  const t = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
  return new Ut(t, r, n);
}
function ur(e) {
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
let gp = 0;
const re = pt(), Ce = pt(), wl = pt(), R = pt(), be = pt(), kt = pt(), ze = pt();
function pt() {
  return 2 ** ++gp;
}
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: re,
  booleanish: Ce,
  commaOrSpaceSeparated: ze,
  commaSeparated: kt,
  number: R,
  overloadedBoolean: wl,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), Hn = Object.keys(cr);
class Ir extends qe {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(n, t, r, i) {
    let o = -1;
    if (super(n, t), eo(this, "space", i), typeof r == "number")
      for (; ++o < Hn.length; ) {
        const l = Hn[o];
        eo(this, Hn[o], (r & cr[l]) === cr[l]);
      }
  }
}
Ir.prototype.defined = !0;
function eo(e, n, t) {
  t && (e[n] = t);
}
const yp = {}.hasOwnProperty;
function St(e) {
  const n = {}, t = {};
  let r;
  for (r in e.properties)
    if (yp.call(e.properties, r)) {
      const i = e.properties[r], o = new Ir(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[ur(r)] = r, t[ur(o.attribute)] = r;
    }
  return new Ut(n, t, e.space);
}
const xl = St({
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
}), vl = St({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function El(e, n) {
  return n in e ? e[n] : n;
}
function Sl(e, n) {
  return El(e, n.toLowerCase());
}
const Cl = St({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Sl,
  properties: { xmlns: null, xmlnsXLink: null }
}), Tl = St({
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ce,
    ariaAutoComplete: null,
    ariaBusy: Ce,
    ariaChecked: Ce,
    ariaColCount: R,
    ariaColIndex: R,
    ariaColSpan: R,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: Ce,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: Ce,
    ariaFlowTo: be,
    ariaGrabbed: Ce,
    ariaHasPopup: null,
    ariaHidden: Ce,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: R,
    ariaLive: null,
    ariaModal: Ce,
    ariaMultiLine: Ce,
    ariaMultiSelectable: Ce,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: R,
    ariaPressed: Ce,
    ariaReadOnly: Ce,
    ariaRelevant: null,
    ariaRequired: Ce,
    ariaRoleDescription: be,
    ariaRowCount: R,
    ariaRowIndex: R,
    ariaRowSpan: R,
    ariaSelected: Ce,
    ariaSetSize: R,
    ariaSort: null,
    ariaValueMax: R,
    ariaValueMin: R,
    ariaValueNow: R,
    ariaValueText: null,
    role: null
  }
}), bp = St({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Sl,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: kt,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: re,
    allowPaymentRequest: re,
    allowUserMedia: re,
    alt: null,
    as: null,
    async: re,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: re,
    autoPlay: re,
    blocking: be,
    capture: re,
    charSet: null,
    checked: re,
    cite: null,
    className: be,
    cols: R,
    colSpan: null,
    content: null,
    contentEditable: Ce,
    controls: re,
    controlsList: be,
    coords: R | kt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: re,
    defer: re,
    dir: null,
    dirName: null,
    disabled: re,
    download: wl,
    draggable: Ce,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: re,
    formTarget: null,
    headers: be,
    height: R,
    hidden: re,
    high: R,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: re,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: re,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: re,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: re,
    low: R,
    manifest: null,
    max: null,
    maxLength: R,
    media: null,
    method: null,
    min: null,
    minLength: R,
    multiple: re,
    muted: re,
    name: null,
    nonce: null,
    noModule: re,
    noValidate: re,
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
    open: re,
    optimum: R,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: re,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: re,
    referrerPolicy: null,
    rel: be,
    required: re,
    reversed: re,
    rows: R,
    rowSpan: R,
    sandbox: be,
    scope: null,
    scoped: re,
    seamless: re,
    selected: re,
    shape: null,
    size: R,
    sizes: null,
    slot: null,
    span: R,
    spellCheck: Ce,
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
    typeMustMatch: re,
    useMap: null,
    value: Ce,
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
    compact: re,
    // Lists. Use CSS to reduce space between items instead
    declare: re,
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
    noResize: re,
    // `<frame>`
    noHref: re,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: re,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: re,
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
    scrolling: Ce,
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
    disablePictureInPicture: re,
    disableRemotePlayback: re,
    prefix: null,
    property: null,
    results: R,
    security: null,
    unselectable: null
  }
}), kp = St({
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
  transform: El,
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
    download: re,
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
    g1: kt,
    g2: kt,
    glyphName: kt,
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
}), wp = /^data[-\w.:]+$/i, to = /-[a-z]/g, xp = /[A-Z]/g;
function vp(e, n) {
  const t = ur(n);
  let r = n, i = qe;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && wp.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(to, Sp);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!to.test(o)) {
        let l = o.replace(xp, Ep);
        l.charAt(0) !== "-" && (l = "-" + l), n = "data" + l;
      }
    }
    i = Ir;
  }
  return new i(r, n);
}
function Ep(e) {
  return "-" + e.toLowerCase();
}
function Sp(e) {
  return e.charAt(1).toUpperCase();
}
const no = {
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
}, Cp = kl([vl, xl, Cl, Tl, bp], "html"), Tp = kl([vl, xl, Cl, Tl, kp], "svg");
function Ap(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (n) => {
      Rr(n, "element", (t, r, i) => {
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
var fr = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Pp() {
  if (ro)
    return me;
  ro = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function g(k) {
    if (typeof k == "object" && k !== null) {
      var w = k.$$typeof;
      switch (w) {
        case e:
          switch (k = k.type, k) {
            case t:
            case i:
            case r:
            case u:
            case c:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case a:
                case l:
                case s:
                case m:
                case f:
                case o:
                  return k;
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
  }, me.isContextConsumer = function(k) {
    return g(k) === l;
  }, me.isContextProvider = function(k) {
    return g(k) === o;
  }, me.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, me.isForwardRef = function(k) {
    return g(k) === s;
  }, me.isFragment = function(k) {
    return g(k) === t;
  }, me.isLazy = function(k) {
    return g(k) === m;
  }, me.isMemo = function(k) {
    return g(k) === f;
  }, me.isPortal = function(k) {
    return g(k) === n;
  }, me.isProfiler = function(k) {
    return g(k) === i;
  }, me.isStrictMode = function(k) {
    return g(k) === r;
  }, me.isSuspense = function(k) {
    return g(k) === u;
  }, me.isSuspenseList = function(k) {
    return g(k) === c;
  }, me.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === t || k === i || k === r || k === u || k === c || k === p || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === f || k.$$typeof === o || k.$$typeof === l || k.$$typeof === s || k.$$typeof === d || k.getModuleId !== void 0);
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
var io;
function Op() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = !1, g = !1, k = !1, w = !1, A = !1, C;
    C = Symbol.for("react.module.reference");
    function I($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === i || A || $ === r || $ === u || $ === c || w || $ === p || d || g || k || typeof $ == "object" && $ !== null && ($.$$typeof === m || $.$$typeof === f || $.$$typeof === o || $.$$typeof === l || $.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === C || $.getModuleId !== void 0));
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var Ie = $.$$typeof;
        switch (Ie) {
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
                    return Ie;
                }
            }
          case n:
            return Ie;
        }
      }
    }
    var x = l, N = o, q = e, Z = s, v = t, D = m, z = f, K = n, Y = i, B = r, oe = u, pe = c, xe = !1, Ae = !1;
    function h($) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _($) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H($) {
      return E($) === l;
    }
    function y($) {
      return E($) === o;
    }
    function U($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function te($) {
      return E($) === s;
    }
    function M($) {
      return E($) === t;
    }
    function W($) {
      return E($) === m;
    }
    function G($) {
      return E($) === f;
    }
    function ne($) {
      return E($) === n;
    }
    function X($) {
      return E($) === i;
    }
    function ve($) {
      return E($) === r;
    }
    function j($) {
      return E($) === u;
    }
    function Pe($) {
      return E($) === c;
    }
    ge.ContextConsumer = x, ge.ContextProvider = N, ge.Element = q, ge.ForwardRef = Z, ge.Fragment = v, ge.Lazy = D, ge.Memo = z, ge.Portal = K, ge.Profiler = Y, ge.StrictMode = B, ge.Suspense = oe, ge.SuspenseList = pe, ge.isAsyncMode = h, ge.isConcurrentMode = _, ge.isContextConsumer = H, ge.isContextProvider = y, ge.isElement = U, ge.isForwardRef = te, ge.isFragment = M, ge.isLazy = W, ge.isMemo = G, ge.isPortal = ne, ge.isProfiler = X, ge.isStrictMode = ve, ge.isSuspense = j, ge.isSuspenseList = Pe, ge.isValidElementType = I, ge.typeOf = E;
  }()), ge;
}
process.env.NODE_ENV === "production" ? fr.exports = Pp() : fr.exports = Op();
var Rp = fr.exports;
const Fp = /* @__PURE__ */ Nt(Rp);
function _p(e) {
  const n = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof n == "string" && n.replace(/[ \t\n\f\r]/g, "") === "";
}
function Ip(e) {
  return e.join(" ").trim();
}
function jp(e, n) {
  const t = n || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
var jr = { exports: {} }, oo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Dp = /\n/g, zp = /^\s*/, Lp = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Np = /^:\s*/, Mp = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, $p = /^[;\s]*/, Bp = /^\s+|\s+$/g, Up = `
`, lo = "/", ao = "*", ut = "", qp = "comment", Hp = "declaration", Vp = function(e, n) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  n = n || {};
  var t = 1, r = 1;
  function i(d) {
    var g = d.match(Dp);
    g && (t += g.length);
    var k = d.lastIndexOf(Up);
    r = ~k ? d.length - k : r + d.length;
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
      var k = g[0];
      return i(k), e = e.slice(k.length), g;
    }
  }
  function u() {
    s(zp);
  }
  function c(d) {
    var g;
    for (d = d || []; g = f(); )
      g !== !1 && d.push(g);
    return d;
  }
  function f() {
    var d = o();
    if (!(lo != e.charAt(0) || ao != e.charAt(1))) {
      for (var g = 2; ut != e.charAt(g) && (ao != e.charAt(g) || lo != e.charAt(g + 1)); )
        ++g;
      if (g += 2, ut === e.charAt(g - 1))
        return a("End of comment missing");
      var k = e.slice(2, g - 2);
      return r += 2, i(k), e = e.slice(g), r += 2, d({
        type: qp,
        comment: k
      });
    }
  }
  function m() {
    var d = o(), g = s(Lp);
    if (g) {
      if (f(), !s(Np))
        return a("property missing ':'");
      var k = s(Mp), w = d({
        type: Hp,
        property: so(g[0].replace(oo, ut)),
        value: k ? so(k[0].replace(oo, ut)) : ut
      });
      return s($p), w;
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
function so(e) {
  return e ? e.replace(Bp, ut) : ut;
}
var Wp = Vp;
function Al(e, n) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  for (var r, i = Wp(e), o = typeof n == "function", l, a, s = 0, u = i.length; s < u; s++)
    r = i[s], l = r.property, a = r.value, o ? n(l, a, r) : a && (t || (t = {}), t[l] = a);
  return t;
}
jr.exports = Al;
jr.exports.default = Al;
var Yp = jr.exports;
const Gp = /* @__PURE__ */ Nt(Yp), pr = {}.hasOwnProperty, Jp = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Pl(e, n) {
  const t = [];
  let r = -1, i;
  for (; ++r < n.children.length; )
    i = n.children[r], i.type === "element" ? t.push(Kp(e, i, r, n)) : i.type === "text" ? (n.type !== "element" || !Jp.has(n.tagName) || !_p(i)) && t.push(i.value) : i.type === "raw" && !e.options.skipHtml && t.push(i.value);
  return t;
}
function Kp(e, n, t, r) {
  const i = e.options, o = i.transformLinkUri === void 0 ? Bs : i.transformLinkUri, l = e.schema, a = n.tagName, s = {};
  let u = l, c;
  if (l.space === "html" && a === "svg" && (u = Tp, e.schema = u), n.properties)
    for (c in n.properties)
      pr.call(n.properties, c) && Qp(s, c, n.properties[c], e);
  (a === "ol" || a === "ul") && e.listDepth++;
  const f = Pl(e, n);
  (a === "ol" || a === "ul") && e.listDepth--, e.schema = l;
  const m = n.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, p = i.components && pr.call(i.components, a) ? i.components[a] : a, d = typeof p == "string" || p === Re.Fragment;
  if (!Fp.isValidElementType(p))
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
    const g = Xp(n);
    s.checked = g && g.properties ? !!g.properties.checked : null, s.index = Vn(r, n), s.ordered = r.tagName === "ol";
  }
  return !d && (a === "ol" || a === "ul") && (s.ordered = a === "ol", s.depth = e.listDepth), (a === "td" || a === "th") && (s.align && (s.style || (s.style = {}), s.style.textAlign = s.align, delete s.align), d || (s.isHeader = a === "th")), !d && a === "tr" && r.type === "element" && (s.isHeader = r.tagName === "thead"), i.sourcePos && (s["data-sourcepos"] = th(m)), !d && i.rawSourcePos && (s.sourcePosition = n.position), !d && i.includeElementIndex && (s.index = Vn(r, n), s.siblingCount = Vn(r)), d || (s.node = n), f.length > 0 ? Re.createElement(p, s, f) : Re.createElement(p, s);
}
function Xp(e) {
  let n = -1;
  for (; ++n < e.children.length; ) {
    const t = e.children[n];
    if (t.type === "element" && t.tagName === "input")
      return t;
  }
  return null;
}
function Vn(e, n) {
  let t = -1, r = 0;
  for (; ++t < e.children.length && e.children[t] !== n; )
    e.children[t].type === "element" && r++;
  return r;
}
function Qp(e, n, t, r) {
  const i = vp(r.schema, n);
  let o = t;
  o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? jp(o) : Ip(o)), i.property === "style" && typeof o == "string" && (o = Zp(o)), i.space && i.property ? e[pr.call(no, i.property) ? no[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o));
}
function Zp(e) {
  const n = {};
  try {
    Gp(e, t);
  } catch {
  }
  return n;
  function t(r, i) {
    const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    n[o.replace(/-([a-z])/g, eh)] = i;
  }
}
function eh(e, n) {
  return n.toUpperCase();
}
function th(e) {
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
const uo = {}.hasOwnProperty, nh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Kt = {
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
function Ol(e) {
  for (const o in Kt)
    if (uo.call(Kt, o) && uo.call(e, o)) {
      const l = Kt[o];
      console.warn(
        `[react-markdown] Warning: please ${l.to ? `use \`${l.to}\` instead of` : "remove"} \`${o}\` (see <${nh}#${l.id}> for more info)`
      ), delete Kt[o];
    }
  const n = ru().use(hf).use(e.remarkPlugins || []).use(ip, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(Ap, e), t = new Yo();
  typeof e.children == "string" ? t.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = n.runSync(n.parse(t), t);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let i = Re.createElement(
    Re.Fragment,
    {},
    Pl({ options: e, schema: Cp, listDepth: 0 }, r)
  );
  return e.className && (i = Re.createElement("div", { className: e.className }, i)), i;
}
Ol.propTypes = {
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
function co(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
const rh = Dr(/\p{P}/u), ih = Dr(/[!-/:-@[-`{-~]/);
function oh(e) {
  return ih(e) || rh(e);
}
const lh = Dr(/\s/);
function Dr(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function ah(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const zr = (
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
      return fh;
    if (typeof e == "function")
      return bn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? sh(e) : uh(e);
    if (typeof e == "string")
      return ch(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function sh(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = zr(e[t]);
  return bn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function uh(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return bn(t);
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
function ch(e) {
  return bn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function bn(e) {
  return n;
  function n(t, r, i) {
    return !!(ph(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function fh() {
  return !0;
}
function ph(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Rl = [], hh = !0, fo = !1, dh = "skip";
function mh(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = zr(i), l = r ? -1 : 1;
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
      let p = Rl, d, g, k;
      if ((!n || o(s, u, c[c.length - 1] || void 0)) && (p = gh(t(s, c)), p[0] === fo))
        return p;
      if ("children" in s && s.children) {
        const w = (
          /** @type {UnistParent} */
          s
        );
        if (w.children && p[0] !== dh)
          for (g = (r ? w.children.length : -1) + l, k = c.concat(w); g > -1 && g < w.children.length; ) {
            const A = w.children[g];
            if (d = a(A, g, k)(), d[0] === fo)
              return d;
            g = typeof d[1] == "number" ? d[1] : g + l;
          }
      }
      return p;
    }
  }
}
function gh(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [hh, e] : e == null ? Rl : [e];
}
function yh(e, n, t) {
  const i = zr((t || {}).ignore || []), o = bh(n);
  let l = -1;
  for (; ++l < o.length; )
    mh(e, "text", a);
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
    const k = f.children.indexOf(u);
    let w = !1, A = [];
    m.lastIndex = 0;
    let C = m.exec(u.value);
    for (; C; ) {
      const I = C.index, E = {
        index: C.index,
        input: C.input,
        stack: [...c, u]
      };
      let x = p(...C, E);
      if (typeof x == "string" && (x = x.length > 0 ? { type: "text", value: x } : void 0), x === !1 ? m.lastIndex = I + 1 : (d !== I && A.push({
        type: "text",
        value: u.value.slice(d, I)
      }), Array.isArray(x) ? A.push(...x) : x && A.push(x), d = I + C[0].length, w = !0), !m.global)
        break;
      C = m.exec(u.value);
    }
    return w ? (d < u.value.length && A.push({ type: "text", value: u.value.slice(d) }), f.children.splice(k, 1, ...A)) : A = [u], k + A.length;
  }
}
function bh(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([kh(i[0]), wh(i[1])]);
  }
  return n;
}
function kh(e) {
  return typeof e == "string" ? new RegExp(ah(e), "g") : e;
}
function wh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Wn = "phrasing", Yn = ["autolink", "link", "image", "label"];
function xh() {
  return {
    transforms: [Ph],
    enter: {
      literalAutolink: Eh,
      literalAutolinkEmail: Gn,
      literalAutolinkHttp: Gn,
      literalAutolinkWww: Gn
    },
    exit: {
      literalAutolink: Ah,
      literalAutolinkEmail: Th,
      literalAutolinkHttp: Sh,
      literalAutolinkWww: Ch
    }
  };
}
function vh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Wn,
        notInConstruct: Yn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Wn,
        notInConstruct: Yn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Wn,
        notInConstruct: Yn
      }
    ]
  };
}
function Eh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Gn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Sh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Ch(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function Th(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Ah(e) {
  this.exit(e);
}
function Ph(e) {
  yh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Oh],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Rh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Oh(e, n, t, r, i) {
  let o = "";
  if (!Fl(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !Fh(t)))
    return !1;
  const l = _h(t + r);
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
function Rh(e, n, t, r) {
  return (
    // Not an expected previous character.
    !Fl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function Fh(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function _h(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = co(e, "(");
  let o = co(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function Fl(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || lh(t) || oh(t)) && (!n || t !== 47);
}
function _l(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
Il.peek = qh;
function Ih() {
  return {
    enter: {
      gfmFootnoteDefinition: Dh,
      gfmFootnoteDefinitionLabelString: zh,
      gfmFootnoteCall: Mh,
      gfmFootnoteCallString: $h
    },
    exit: {
      gfmFootnoteDefinition: Nh,
      gfmFootnoteDefinitionLabelString: Lh,
      gfmFootnoteCall: Uh,
      gfmFootnoteCallString: Bh
    }
  };
}
function jh() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: Hh, footnoteReference: Il }
  };
}
function Dh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function zh() {
  this.buffer();
}
function Lh(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = _l(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Nh(e) {
  this.exit(e);
}
function Mh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function $h() {
  this.buffer();
}
function Bh(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = _l(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Uh(e) {
  this.exit(e);
}
function Il(e, n, t, r) {
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
function qh() {
  return "[";
}
function Hh(e, n, t, r) {
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
    t.indentLines(t.containerFlow(e, i.current()), Vh)
  ), l(), o;
}
function Vh(e, n, t) {
  return n === 0 ? e : (t ? "" : "    ") + e;
}
const Wh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
jl.peek = Xh;
function Yh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Jh },
    exit: { strikethrough: Kh }
  };
}
function Gh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Wh
      }
    ],
    handlers: { delete: jl }
  };
}
function Jh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Kh(e) {
  this.exit(e);
}
function jl(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Xh() {
  return "~";
}
function Qh(e, n = {}) {
  const t = (n.align || []).concat(), r = n.stringLength || ed, i = [], o = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const d = [], g = [];
    let k = -1;
    for (e[u].length > s && (s = e[u].length); ++k < e[u].length; ) {
      const w = Zh(e[u][k]);
      if (n.alignDelimiters !== !1) {
        const A = r(w);
        g[k] = A, (a[k] === void 0 || A > a[k]) && (a[k] = A);
      }
      d.push(w);
    }
    o[u] = d, l[u] = g;
  }
  let c = -1;
  if (typeof t == "object" && "length" in t)
    for (; ++c < s; )
      i[c] = po(t[c]);
  else {
    const d = po(t);
    for (; ++c < s; )
      i[c] = d;
  }
  c = -1;
  const f = [], m = [];
  for (; ++c < s; ) {
    const d = i[c];
    let g = "", k = "";
    d === 99 ? (g = ":", k = ":") : d === 108 ? g = ":" : d === 114 && (k = ":");
    let w = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - g.length - k.length
    );
    const A = g + "-".repeat(w) + k;
    n.alignDelimiters !== !1 && (w = g.length + w + k.length, w > a[c] && (a[c] = w), m[c] = w), f[c] = A;
  }
  o.splice(1, 0, f), l.splice(1, 0, m), u = -1;
  const p = [];
  for (; ++u < o.length; ) {
    const d = o[u], g = l[u];
    c = -1;
    const k = [];
    for (; ++c < s; ) {
      const w = d[c] || "";
      let A = "", C = "";
      if (n.alignDelimiters !== !1) {
        const I = a[c] - (g[c] || 0), E = i[c];
        E === 114 ? A = " ".repeat(I) : E === 99 ? I % 2 ? (A = " ".repeat(I / 2 + 0.5), C = " ".repeat(I / 2 - 0.5)) : (A = " ".repeat(I / 2), C = A) : C = " ".repeat(I);
      }
      n.delimiterStart !== !1 && !c && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && w === "") && (n.delimiterStart !== !1 || c) && k.push(" "), n.alignDelimiters !== !1 && k.push(A), k.push(w), n.alignDelimiters !== !1 && k.push(C), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && k.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return p.join(`
`);
}
function Zh(e) {
  return e == null ? "" : String(e);
}
function ed(e) {
  return e.length;
}
function po(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function td(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(
    t.containerFlow(e, o.current()),
    nd
  );
  return i(), l;
}
function nd(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function rd(e, n) {
  return ho(e, n.inConstruct, !0) && !ho(e, n.notInConstruct, !1);
}
function ho(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function mo(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && rd(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function id(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function od(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function ld(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function ad(e, n, t, r) {
  const i = ld(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (od(e, t)) {
    const f = t.enter("codeIndented"), m = t.indentLines(o, sd);
    return f(), m;
  }
  const a = t.createTracker(r), s = i.repeat(Math.max(id(o, i) + 1, 3)), u = t.enter("codeFenced");
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
function sd(e, n, t) {
  return (t ? "" : "    ") + e;
}
function Lr(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function ud(e, n, t, r) {
  const i = Lr(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
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
function cd(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
Dl.peek = fd;
function Dl(e, n, t, r) {
  const i = cd(t), o = t.enter("emphasis"), l = t.createTracker(r);
  let a = l.move(i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i), o(), a;
}
function fd(e, n, t) {
  return t.options.emphasis || "*";
}
const zl = (
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
      return md;
    if (typeof e == "function")
      return kn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? pd(e) : hd(e);
    if (typeof e == "string")
      return dd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function pd(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = zl(e[t]);
  return kn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function hd(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return kn(t);
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
function dd(e) {
  return kn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function kn(e) {
  return n;
  function n(t, r, i) {
    return !!(gd(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function md() {
  return !0;
}
function gd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ll = [], yd = !0, hr = !1, bd = "skip";
function kd(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = zl(i), l = r ? -1 : 1;
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
      let p = Ll, d, g, k;
      if ((!n || o(s, u, c[c.length - 1] || void 0)) && (p = wd(t(s, c)), p[0] === hr))
        return p;
      if ("children" in s && s.children) {
        const w = (
          /** @type {UnistParent} */
          s
        );
        if (w.children && p[0] !== bd)
          for (g = (r ? w.children.length : -1) + l, k = c.concat(w); g > -1 && g < w.children.length; ) {
            const A = w.children[g];
            if (d = a(A, g, k)(), d[0] === hr)
              return d;
            g = typeof d[1] == "number" ? d[1] : g + l;
          }
      }
      return p;
    }
  }
}
function wd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [yd, e] : e == null ? Ll : [e];
}
function xd(e, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), kd(e, o, a, i);
  function a(s, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(s) : void 0;
    return l(s, f, c);
  }
}
const vd = {};
function Nl(e, n) {
  const t = n || vd, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Ml(e, r, i);
}
function Ml(e, n, t) {
  if (Ed(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return go(e.children, n, t);
  }
  return Array.isArray(e) ? go(e, n, t) : "";
}
function go(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ml(e[i], n, t);
  return r.join("");
}
function Ed(e) {
  return !!(e && typeof e == "object");
}
function Sd(e, n) {
  let t = !1;
  return xd(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, hr;
  }), !!((!e.depth || e.depth < 3) && Nl(e) && (n.options.setext || t));
}
function Cd(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (Sd(e, t)) {
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
$l.peek = Td;
function $l(e) {
  return e.value || "";
}
function Td() {
  return "<";
}
Bl.peek = Ad;
function Bl(e, n, t, r) {
  const i = Lr(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
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
function Ad() {
  return "!";
}
Ul.peek = Pd;
function Ul(e, n, t, r) {
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
function Pd() {
  return "!";
}
ql.peek = Od;
function ql(e, n, t) {
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
function Od() {
  return "`";
}
function Hl(e, n) {
  const t = Nl(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Vl.peek = Rd;
function Vl(e, n, t, r) {
  const i = Lr(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let a, s;
  if (Hl(e, t)) {
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
function Rd(e, n, t) {
  return Hl(e, t) ? "<" : "[";
}
Wl.peek = Fd;
function Wl(e, n, t, r) {
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
function Fd() {
  return "[";
}
function Nr(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function _d(e) {
  const n = Nr(e), t = e.options.bulletOther;
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
function Id(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function Yl(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function jd(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e.ordered ? Id(t) : Nr(t);
  const a = e.ordered ? l === "." ? ")" : "." : _d(t);
  let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = !0), Yl(t) === l && c
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
function Dd(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function zd(e, n, t, r) {
  const i = Dd(t);
  let o = t.bulletCurrent || Nr(t);
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
function Ld(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
  return o(), i(), l;
}
const Gl = (
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
      return Bd;
    if (typeof e == "function")
      return wn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Nd(e) : Md(e);
    if (typeof e == "string")
      return $d(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Nd(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Gl(e[t]);
  return wn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i))
        return !0;
    return !1;
  }
}
function Md(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return wn(t);
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
function $d(e) {
  return wn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function wn(e) {
  return n;
  function n(t, r, i) {
    return !!(Ud(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Bd() {
  return !0;
}
function Ud(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const qd = (
  /** @type {(node?: unknown) => node is PhrasingContent} */
  Gl([
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
function Hd(e, n, t, r) {
  return (e.children.some(function(l) {
    return qd(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function Vd(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
Jl.peek = Wd;
function Jl(e, n, t, r) {
  const i = Vd(t), o = t.enter("strong"), l = t.createTracker(r);
  let a = l.move(i + i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i + i), o(), a;
}
function Wd(e, n, t) {
  return t.options.strong || "*";
}
function Yd(e, n, t, r) {
  return t.safe(e.value, r);
}
function Gd(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function Jd(e, n, t) {
  const r = (Yl(t) + (t.options.ruleSpaces ? " " : "")).repeat(Gd(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Kl = {
  blockquote: td,
  break: mo,
  code: ad,
  definition: ud,
  emphasis: Dl,
  hardBreak: mo,
  heading: Cd,
  html: $l,
  image: Bl,
  imageReference: Ul,
  inlineCode: ql,
  link: Vl,
  linkReference: Wl,
  list: jd,
  listItem: zd,
  paragraph: Ld,
  root: Hd,
  strong: Jl,
  text: Yd,
  thematicBreak: Jd
};
function Kd() {
  return {
    enter: {
      table: Xd,
      tableData: yo,
      tableHeader: yo,
      tableRow: Zd
    },
    exit: {
      codeText: em,
      table: Qd,
      tableData: Jn,
      tableHeader: Jn,
      tableRow: Jn
    }
  };
}
function Xd(e) {
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
function Qd(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Zd(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Jn(e) {
  this.exit(e);
}
function yo(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function em(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, tm));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function tm(e, n) {
  return n === "|" ? n : e;
}
function nm(e) {
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
  function l(p, d, g, k) {
    return u(c(p, g, k), p.align);
  }
  function a(p, d, g, k) {
    const w = f(p, g, k), A = u([w]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(p, d, g, k) {
    const w = g.enter("tableCell"), A = g.enter("phrasing"), C = g.containerPhrasing(p, {
      ...k,
      before: o,
      after: o
    });
    return A(), w(), C;
  }
  function u(p, d) {
    return Qh(p, {
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
    const k = p.children;
    let w = -1;
    const A = [], C = d.enter("table");
    for (; ++w < k.length; )
      A[w] = f(k[w], d, g);
    return C(), A;
  }
  function f(p, d, g) {
    const k = p.children;
    let w = -1;
    const A = [], C = d.enter("tableRow");
    for (; ++w < k.length; )
      A[w] = s(k[w], p, d, g);
    return C(), A;
  }
  function m(p, d, g) {
    let k = Kl.inlineCode(p, d, g);
    return g.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function rm() {
  return {
    exit: {
      taskListCheckValueChecked: bo,
      taskListCheckValueUnchecked: bo,
      paragraph: om
    }
  };
}
function im() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: lm }
  };
}
function bo(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function om(e) {
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
function lm(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
  o && a.move(l);
  let s = Kl.listItem(e, n, t, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function am() {
  return [
    xh(),
    Ih(),
    Yh(),
    Kd(),
    rm()
  ];
}
function sm(e) {
  return {
    extensions: [
      vh(),
      jh(),
      Gh(),
      nm(e),
      im()
    ]
  };
}
function um(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
const ko = {}.hasOwnProperty;
function cm(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    fm(n, e[t]);
  return n;
}
function fm(e, n) {
  let t;
  for (t in n) {
    const i = (ko.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        ko.call(i, l) || (i[l] = []);
        const a = o[l];
        pm(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function pm(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  um(e, 0, 0, r);
}
const hm = qt(/\p{P}/u), zt = qt(/[A-Za-z]/), Mr = qt(/[\dA-Za-z]/);
function dm(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const mm = qt(/[!-/:-@[-`{-~]/);
function xt(e) {
  return e !== null && (e < 0 || e === 32);
}
function Xl(e) {
  return mm(e) || hm(e);
}
const Lt = qt(/\s/);
function qt(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
const gm = {
  tokenize: vm,
  partial: !0
}, Ql = {
  tokenize: Em,
  partial: !0
}, Zl = {
  tokenize: Sm,
  partial: !0
}, ea = {
  tokenize: Cm,
  partial: !0
}, ym = {
  tokenize: Tm,
  partial: !0
}, ta = {
  tokenize: wm,
  previous: ra
}, na = {
  tokenize: xm,
  previous: ia
}, et = {
  tokenize: km,
  previous: oa
}, Xe = {};
function bm() {
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
Xe[72] = [et, na];
Xe[104] = [et, na];
Xe[87] = [et, ta];
Xe[119] = [et, ta];
function km(e, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(f) {
    return !dr(f) || !oa.call(r, r.previous) || $r(r.events) ? t(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(f));
  }
  function a(f) {
    return dr(f) ? (e.consume(f), a) : f === 64 ? (e.consume(f), s) : t(f);
  }
  function s(f) {
    return f === 46 ? e.check(
      ym,
      c,
      u
    )(f) : f === 45 || f === 95 || Mr(f) ? (o = !0, e.consume(f), s) : c(f);
  }
  function u(f) {
    return e.consume(f), i = !0, s;
  }
  function c(f) {
    return o && i && zt(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(f)) : t(f);
  }
}
function wm(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !ra.call(r, r.previous) || $r(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      gm,
      e.attempt(Ql, e.attempt(Zl, o), t),
      t
    )(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
  }
}
function xm(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(f) {
    return (f === 72 || f === 104) && ia.call(r, r.previous) && !$r(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), a) : t(f);
  }
  function a(f) {
    if (zt(f) && i.length < 5)
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
    return f === null || dm(f) || xt(f) || Lt(f) || Xl(f) ? t(f) : e.attempt(Ql, e.attempt(Zl, c), t)(f);
  }
  function c(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(f);
  }
}
function vm(e, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function Em(e, n, t) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(ea, s, a)(u) : u === null || xt(u) || Lt(u) || u !== 45 && Xl(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? t(u) : n(u);
  }
}
function Sm(e, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(ea, n, o)(l) : l === null || xt(l) || Lt(l) ? n(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Cm(e, n, t) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || xt(a) || Lt(a) ? n(a) : t(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || xt(a) || Lt(a) ? n(a) : r(a);
  }
  function o(a) {
    return zt(a) ? l(a) : t(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : zt(a) ? (e.consume(a), l) : t(a);
  }
}
function Tm(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Mr(o) ? t(o) : n(o);
  }
}
function ra(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || xt(e);
}
function ia(e) {
  return !zt(e);
}
function oa(e) {
  return !(e === 47 || dr(e));
}
function dr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Mr(e);
}
function $r(e) {
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
function Am(e) {
  return e !== null && e < -2;
}
function sn(e) {
  return e !== null && (e < 0 || e === 32);
}
function mr(e) {
  return e === -2 || e === -1 || e === 32;
}
function Br(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return mr(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return mr(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const Pm = {
  tokenize: Om,
  partial: !0
};
function Om(e, n, t) {
  return r;
  function r(o) {
    return mr(o) ? Br(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Am(o) ? n(o) : t(o);
  }
}
function Ur(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Rm = {
  tokenize: Nm,
  partial: !0
};
function Fm() {
  return {
    document: {
      91: {
        tokenize: Dm,
        continuation: {
          tokenize: zm
        },
        exit: Lm
      }
    },
    text: {
      91: {
        tokenize: jm
      },
      93: {
        add: "after",
        tokenize: _m,
        resolveTo: Im
      }
    }
  };
}
function _m(e, n, t) {
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
    const u = Ur(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
  }
}
function Im(e, n) {
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
function jm(e, n, t) {
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
      f === null || f === 91 || sn(f)
    )
      return t(f);
    if (f === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteCallString");
      return i.includes(Ur(r.sliceSerialize(m))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(f);
    }
    return sn(f) || (l = !0), o++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), o++, u) : u(f);
  }
}
function Dm(e, n, t) {
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
      d === null || d === 91 || sn(d)
    )
      return t(d);
    if (d === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Ur(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), m;
    }
    return sn(d) || (a = !0), l++, e.consume(d), d === 92 ? f : c;
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, c) : c(d);
  }
  function m(d) {
    return d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), i.includes(o) || i.push(o), Br(
      e,
      p,
      "gfmFootnoteDefinitionWhitespace"
    )) : t(d);
  }
  function p(d) {
    return n(d);
  }
}
function zm(e, n, t) {
  return e.check(Pm, n, e.attempt(Rm, n, t));
}
function Lm(e) {
  e.exit("gfmFootnoteDefinition");
}
function Nm(e, n, t) {
  const r = this;
  return Br(
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
function Kn(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
const Mm = qr(/\p{P}/u), $m = qr(/[!-/:-@[-`{-~]/);
function Bm(e) {
  return e !== null && (e < 0 || e === 32);
}
function Um(e) {
  return $m(e) || Mm(e);
}
const qm = qr(/\s/);
function qr(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function wo(e) {
  if (e === null || Bm(e) || qm(e))
    return 1;
  if (Um(e))
    return 2;
}
function Hm(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
function Vm(e) {
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
            p && Kn(
              m,
              m.length,
              0,
              Hm(p, l.slice(u + 1, s), a)
            ), Kn(m, m.length, 0, [
              ["exit", f, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["exit", c, a]
            ]), Kn(l, u - 1, s - u + 3, m), s = u + m.length - 2;
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
      const g = wo(u);
      if (d === 126)
        return f > 1 ? s(d) : (l.consume(d), f++, p);
      if (f < 2 && !t)
        return s(d);
      const k = l.exit("strikethroughSequenceTemporary"), w = wo(d);
      return k._open = !w || w === 2 && !!g, k._close = !g || g === 2 && !!w, a(d);
    }
  }
}
function Xt(e) {
  return e !== null && e < -2;
}
function xo(e) {
  return e !== null && (e < 0 || e === 32);
}
function ct(e) {
  return e === -2 || e === -1 || e === 32;
}
function _t(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return ct(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return ct(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
class Wm {
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
    Ym(this, n, t, r);
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
function Ym(e, n, t, r) {
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
function Gm(e, n) {
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
function Jm() {
  return {
    flow: {
      null: {
        tokenize: Km,
        resolveAll: Xm
      }
    }
  };
}
function Km(e, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(v) {
    let D = r.events.length - 1;
    for (; D > -1; ) {
      const Y = r.events[D][1].type;
      if (Y === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      Y === "linePrefix")
        D--;
      else
        break;
    }
    const z = D > -1 ? r.events[D][1].type : null, K = z === "tableHead" || z === "tableRow" ? x : s;
    return K === x && r.parser.lazy[r.now().line] ? t(v) : K(v);
  }
  function s(v) {
    return e.enter("tableHead"), e.enter("tableRow"), u(v);
  }
  function u(v) {
    return v === 124 || (l = !0, o += 1), c(v);
  }
  function c(v) {
    return v === null ? t(v) : Xt(v) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), p) : t(v) : ct(v) ? _t(e, c, "whitespace")(v) : (o += 1, l && (l = !1, i += 1), v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), l = !0, c) : (e.enter("data"), f(v)));
  }
  function f(v) {
    return v === null || v === 124 || xo(v) ? (e.exit("data"), c(v)) : (e.consume(v), v === 92 ? m : f);
  }
  function m(v) {
    return v === 92 || v === 124 ? (e.consume(v), f) : f(v);
  }
  function p(v) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(v) : (e.enter("tableDelimiterRow"), l = !1, ct(v) ? _t(
      e,
      d,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(v) : d(v));
  }
  function d(v) {
    return v === 45 || v === 58 ? k(v) : v === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), g) : E(v);
  }
  function g(v) {
    return ct(v) ? _t(e, k, "whitespace")(v) : k(v);
  }
  function k(v) {
    return v === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), w) : v === 45 ? (o += 1, w(v)) : v === null || Xt(v) ? I(v) : E(v);
  }
  function w(v) {
    return v === 45 ? (e.enter("tableDelimiterFiller"), A(v)) : E(v);
  }
  function A(v) {
    return v === 45 ? (e.consume(v), A) : v === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(v));
  }
  function C(v) {
    return ct(v) ? _t(e, I, "whitespace")(v) : I(v);
  }
  function I(v) {
    return v === 124 ? d(v) : v === null || Xt(v) ? !l || i !== o ? E(v) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(v)) : E(v);
  }
  function E(v) {
    return t(v);
  }
  function x(v) {
    return e.enter("tableRow"), N(v);
  }
  function N(v) {
    return v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), N) : v === null || Xt(v) ? (e.exit("tableRow"), n(v)) : ct(v) ? _t(e, N, "whitespace")(v) : (e.enter("data"), q(v));
  }
  function q(v) {
    return v === null || v === 124 || xo(v) ? (e.exit("data"), N(v)) : (e.consume(v), v === 92 ? Z : q);
  }
  function Z(v) {
    return v === 92 || v === 124 ? (e.consume(v), q) : q(v);
  }
}
function Xm(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, c, f;
  const m = new Wm();
  for (; ++t < e.length; ) {
    const p = e[t], d = p[1];
    p[0] === "enter" ? d.type === "tableHead" ? (a = !1, s !== 0 && (vo(m, n, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(t, 0, [["enter", u, n]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = !0, f = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], a && (a = !1, c = {
      type: "tableBody",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(t, 0, [["enter", c, n]])), i = d.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], f = Qt(
      m,
      n,
      o,
      i,
      void 0,
      f
    ), o = [0, 0, 0, 0]), l[2] = t)) : d.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], f = Qt(
      m,
      n,
      o,
      i,
      void 0,
      f
    )), o = l, l = [o[1], t, 0, 0])) : d.type === "tableHead" ? (a = !0, s = t) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], f = Qt(
      m,
      n,
      o,
      i,
      t,
      f
    )) : l[1] !== 0 && (f = Qt(m, n, l, i, t, f)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (s !== 0 && vo(m, n, s, u, c), m.consume(n.events), t = -1; ++t < n.events.length; ) {
    const p = n.events[t];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Gm(n.events, t));
  }
  return e;
}
function Qt(e, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, gt(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const s = gt(n.events, t[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const u = gt(n.events, t[2]), c = gt(n.events, t[3]), f = {
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
  return i !== void 0 && (o.end = Object.assign({}, gt(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function vo(e, n, t, r, i) {
  const o = [], l = gt(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function gt(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
function Qm(e) {
  return e !== null && e < -2;
}
function Zm(e) {
  return e !== null && (e < 0 || e === 32);
}
function gr(e) {
  return e === -2 || e === -1 || e === 32;
}
function eg(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return gr(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return gr(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const tg = {
  tokenize: rg
};
function ng() {
  return {
    text: {
      91: tg
    }
  };
}
function rg(e, n, t) {
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
    return Zm(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
  }
  function a(s) {
    return Qm(s) ? n(s) : gr(s) ? e.check(
      {
        tokenize: ig
      },
      n,
      t
    )(s) : t(s);
  }
}
function ig(e, n, t) {
  return eg(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function og(e) {
  return cm([
    bm(),
    Fm(),
    Vm(e),
    Jm(),
    ng()
  ]);
}
const lg = {};
function ag(e) {
  const n = (
    /** @type {Processor} */
    this
  ), t = e || lg, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(og(t)), o.push(am()), l.push(sm(t));
}
function hg({ config: e, rules: n }) {
  const t = un(), r = ma(), i = () => r.current.scrollIntoView(), o = sessionStorage.getItem("gameID");
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
        /* @__PURE__ */ P.jsx(Ol, { children: n, remarkPlugins: [ag] })
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "mt-12 flex flex-col w-full items-center", children: /* @__PURE__ */ P.jsx("button", { className: "text-zinc-500 font-light italic", onClick: i, children: "back to top 👆" }) })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "mt-8", children: /* @__PURE__ */ P.jsx(yr, {}) })
  ] });
}
export {
  cg as DownPage,
  yr as Footer,
  pg as GamePage,
  fg as HomePage,
  hg as RulesPage
};
