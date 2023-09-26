import Re, { useState as pn, useEffect as bn, forwardRef as da, useRef as ma } from "react";
import { useNavigate as st, useParams as ga } from "react-router-dom";
function Mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xt = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function ya() {
  if (Kr)
    return On;
  Kr = 1;
  var e = Re, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, u, s) {
    var c, f = {}, m = null, p = null;
    s !== void 0 && (m = "" + s), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (c in u)
      r.call(u, c) && !o.hasOwnProperty(c) && (f[c] = u[c]);
    if (a && a.defaultProps)
      for (c in u = a.defaultProps, u)
        f[c] === void 0 && (f[c] = u[c]);
    return { $$typeof: t, type: a, key: m, ref: p, props: f, _owner: i.current };
  }
  return On.Fragment = n, On.jsx = l, On.jsxs = l, On;
}
var Rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function ba() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Re, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = Symbol.iterator, g = "@@iterator";
    function x(b) {
      if (b === null || typeof b != "object")
        return null;
      var O = d && b[d] || b[g];
      return typeof O == "function" ? O : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(b) {
      {
        for (var O = arguments.length, N = new Array(O > 1 ? O - 1 : 0), Z = 1; Z < O; Z++)
          N[Z - 1] = arguments[Z];
        C("error", b, N);
      }
    }
    function C(b, O, N) {
      {
        var Z = k.ReactDebugCurrentFrame, ce = Z.getStackAddendum();
        ce !== "" && (O += "%s", N = N.concat([ce]));
        var ye = N.map(function(oe) {
          return String(oe);
        });
        ye.unshift("Warning: " + O), Function.prototype.apply.call(console[b], console, ye);
      }
    }
    var I = !1, S = !1, w = !1, z = !1, q = !1, B;
    B = Symbol.for("react.module.reference");
    function E(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === r || b === o || q || b === i || b === s || b === c || z || b === p || I || S || w || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === f || b.$$typeof === l || b.$$typeof === a || b.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === B || b.getModuleId !== void 0));
    }
    function D(b, O, N) {
      var Z = b.displayName;
      if (Z)
        return Z;
      var ce = O.displayName || O.name || "";
      return ce !== "" ? N + "(" + ce + ")" : N;
    }
    function j(b) {
      return b.displayName || "Context";
    }
    function V(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case s:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case a:
            var O = b;
            return j(O) + ".Consumer";
          case l:
            var N = b;
            return j(N._context) + ".Provider";
          case u:
            return D(b, b.render, "ForwardRef");
          case f:
            var Z = b.displayName || null;
            return Z !== null ? Z : V(b.type) || "Memo";
          case m: {
            var ce = b, ye = ce._payload, oe = ce._init;
            try {
              return V(oe(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, K = 0, ae, pe, we, Ae, h, _, W;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function U() {
      {
        if (K === 0) {
          ae = console.log, pe = console.info, we = console.warn, Ae = console.error, h = console.group, _ = console.groupCollapsed, W = console.groupEnd;
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
        K++;
      }
    }
    function ne() {
      {
        if (K--, K === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, b, {
              value: ae
            }),
            info: H({}, b, {
              value: pe
            }),
            warn: H({}, b, {
              value: we
            }),
            error: H({}, b, {
              value: Ae
            }),
            group: H({}, b, {
              value: h
            }),
            groupCollapsed: H({}, b, {
              value: _
            }),
            groupEnd: H({}, b, {
              value: W
            })
          });
        }
        K < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = k.ReactCurrentDispatcher, G;
    function J(b, O, N) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (ce) {
            var Z = ce.stack.trim().match(/\n( *(at )?)/);
            G = Z && Z[1] || "";
          }
        return `
` + G + b;
      }
    }
    var te = !1, Q;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Ee();
    }
    function L(b, O) {
      if (!b || te)
        return "";
      {
        var N = Q.get(b);
        if (N !== void 0)
          return N;
      }
      var Z;
      te = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = M.current, M.current = null, U();
      try {
        if (O) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (Qe) {
              Z = Qe;
            }
            Reflect.construct(b, [], oe);
          } else {
            try {
              oe.call();
            } catch (Qe) {
              Z = Qe;
            }
            b.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            Z = Qe;
          }
          b();
        }
      } catch (Qe) {
        if (Qe && Z && typeof Qe.stack == "string") {
          for (var ie = Qe.stack.split(`
`), Oe = Z.stack.split(`
`), Se = ie.length - 1, ve = Oe.length - 1; Se >= 1 && ve >= 0 && ie[Se] !== Oe[ve]; )
            ve--;
          for (; Se >= 1 && ve >= 0; Se--, ve--)
            if (ie[Se] !== Oe[ve]) {
              if (Se !== 1 || ve !== 1)
                do
                  if (Se--, ve--, ve < 0 || ie[Se] !== Oe[ve]) {
                    var Me = `
` + ie[Se].replace(" at new ", " at ");
                    return b.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", b.displayName)), typeof b == "function" && Q.set(b, Me), Me;
                  }
                while (Se >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        te = !1, M.current = ye, ne(), Error.prepareStackTrace = ce;
      }
      var gn = b ? b.displayName || b.name : "", Jr = gn ? J(gn) : "";
      return typeof b == "function" && Q.set(b, Jr), Jr;
    }
    function Pe(b, O, N) {
      return L(b, !1);
    }
    function $(b) {
      var O = b.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ie(b, O, N) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return L(b, $(b));
      if (typeof b == "string")
        return J(b);
      switch (b) {
        case s:
          return J("Suspense");
        case c:
          return J("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case u:
            return Pe(b.render);
          case f:
            return Ie(b.type, O, N);
          case m: {
            var Z = b, ce = Z._payload, ye = Z._init;
            try {
              return Ie(ye(ce), O, N);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, nn = {}, Tn = k.ReactDebugCurrentFrame;
    function dn(b) {
      if (b) {
        var O = b._owner, N = Ie(b.type, b._source, O ? O.type : null);
        Tn.setExtraStackFrame(N);
      } else
        Tn.setExtraStackFrame(null);
    }
    function Vn(b, O, N, Z, ce) {
      {
        var ye = Function.call.bind(ze);
        for (var oe in b)
          if (ye(b, oe)) {
            var ie = void 0;
            try {
              if (typeof b[oe] != "function") {
                var Oe = Error((Z || "React class") + ": " + N + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              ie = b[oe](O, oe, Z, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              ie = Se;
            }
            ie && !(ie instanceof Error) && (dn(ce), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", N, oe, typeof ie), dn(null)), ie instanceof Error && !(ie.message in nn) && (nn[ie.message] = !0, dn(ce), A("Failed %s type: %s", N, ie.message), dn(null));
          }
      }
    }
    var Wn = Array.isArray;
    function An(b) {
      return Wn(b);
    }
    function wt(b) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, N = O && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return N;
      }
    }
    function Et(b) {
      try {
        return Yn(b), !1;
      } catch {
        return !0;
      }
    }
    function Yn(b) {
      return "" + b;
    }
    function Gn(b) {
      if (Et(b))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(b)), Yn(b);
    }
    var v = k.ReactCurrentOwner, F = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Y, ue, se;
    se = {};
    function De(b) {
      if (ze.call(b, "ref")) {
        var O = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function We(b) {
      if (ze.call(b, "key")) {
        var O = Object.getOwnPropertyDescriptor(b, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function He(b, O) {
      if (typeof b.ref == "string" && v.current && O && v.current.stateNode !== O) {
        var N = V(v.current.type);
        se[N] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(v.current.type), b.ref), se[N] = !0);
      }
    }
    function an(b, O) {
      {
        var N = function() {
          Y || (Y = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        N.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function un(b, O) {
      {
        var N = function() {
          ue || (ue = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        N.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var ke = function(b, O, N, Z, ce, ye, oe) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: O,
        ref: N,
        props: oe,
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
        value: Z
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function Pn(b, O, N, Z, ce) {
      {
        var ye, oe = {}, ie = null, Oe = null;
        N !== void 0 && (Gn(N), ie = "" + N), We(O) && (Gn(O.key), ie = "" + O.key), De(O) && (Oe = O.ref, He(O, ce));
        for (ye in O)
          ze.call(O, ye) && !F.hasOwnProperty(ye) && (oe[ye] = O[ye]);
        if (b && b.defaultProps) {
          var Se = b.defaultProps;
          for (ye in Se)
            oe[ye] === void 0 && (oe[ye] = Se[ye]);
        }
        if (ie || Oe) {
          var ve = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ie && an(oe, ve), Oe && un(oe, ve);
        }
        return ke(b, ie, Oe, ce, Z, v.current, oe);
      }
    }
    var Le = k.ReactCurrentOwner, qr = k.ReactDebugCurrentFrame;
    function mn(b) {
      if (b) {
        var O = b._owner, N = Ie(b.type, b._source, O ? O.type : null);
        qr.setExtraStackFrame(N);
      } else
        qr.setExtraStackFrame(null);
    }
    var St;
    St = !1;
    function vt(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function Hr() {
      {
        if (Le.current) {
          var b = V(Le.current.type);
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
          var O = b.fileName.replace(/^.*[\\\/]/, ""), N = b.lineNumber;
          return `

Check your code at ` + O + ":" + N + ".";
        }
        return "";
      }
    }
    var Vr = {};
    function aa(b) {
      {
        var O = Hr();
        if (!O) {
          var N = typeof b == "string" ? b : b.displayName || b.name;
          N && (O = `

Check the top-level render call using <` + N + ">.");
        }
        return O;
      }
    }
    function Wr(b, O) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var N = aa(O);
        if (Vr[N])
          return;
        Vr[N] = !0;
        var Z = "";
        b && b._owner && b._owner !== Le.current && (Z = " It was passed a child from " + V(b._owner.type) + "."), mn(b), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, Z), mn(null);
      }
    }
    function Yr(b, O) {
      {
        if (typeof b != "object")
          return;
        if (An(b))
          for (var N = 0; N < b.length; N++) {
            var Z = b[N];
            vt(Z) && Wr(Z, O);
          }
        else if (vt(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ce = x(b);
          if (typeof ce == "function" && ce !== b.entries)
            for (var ye = ce.call(b), oe; !(oe = ye.next()).done; )
              vt(oe.value) && Wr(oe.value, O);
        }
      }
    }
    function ua(b) {
      {
        var O = b.type;
        if (O == null || typeof O == "string")
          return;
        var N;
        if (typeof O == "function")
          N = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          N = O.propTypes;
        else
          return;
        if (N) {
          var Z = V(O);
          Vn(N, b.props, "prop", Z, b);
        } else if (O.PropTypes !== void 0 && !St) {
          St = !0;
          var ce = V(O);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sa(b) {
      {
        for (var O = Object.keys(b.props), N = 0; N < O.length; N++) {
          var Z = O[N];
          if (Z !== "children" && Z !== "key") {
            mn(b), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), mn(null);
            break;
          }
        }
        b.ref !== null && (mn(b), A("Invalid attribute `ref` supplied to `React.Fragment`."), mn(null));
      }
    }
    function Gr(b, O, N, Z, ce, ye) {
      {
        var oe = E(b);
        if (!oe) {
          var ie = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = la(ce);
          Oe ? ie += Oe : ie += Hr();
          var Se;
          b === null ? Se = "null" : An(b) ? Se = "array" : b !== void 0 && b.$$typeof === t ? (Se = "<" + (V(b.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof b, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ie);
        }
        var ve = Pn(b, O, N, ce, ye);
        if (ve == null)
          return ve;
        if (oe) {
          var Me = O.children;
          if (Me !== void 0)
            if (Z)
              if (An(Me)) {
                for (var gn = 0; gn < Me.length; gn++)
                  Yr(Me[gn], b);
                Object.freeze && Object.freeze(Me);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yr(Me, b);
        }
        return b === r ? sa(ve) : ua(ve), ve;
      }
    }
    function ca(b, O, N) {
      return Gr(b, O, N, !0);
    }
    function fa(b, O, N) {
      return Gr(b, O, N, !1);
    }
    var pa = fa, ha = ca;
    Rn.Fragment = r, Rn.jsx = pa, Rn.jsxs = ha;
  }()), Rn;
}
process.env.NODE_ENV === "production" ? Xt.exports = ya() : Xt.exports = ba();
var P = Xt.exports;
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
function Eo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: xa } = Object.prototype, { getPrototypeOf: br } = Object, ct = ((e) => (t) => {
  const n = xa.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (t) => ct(t) === e), ft = (e) => (t) => typeof t === e, { isArray: Sn } = Array, jn = ft("undefined");
function ka(e) {
  return e !== null && !jn(e) && e.constructor !== null && !jn(e.constructor) && Be(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const So = Ke("ArrayBuffer");
function wa(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && So(e.buffer), t;
}
const Ea = ft("string"), Be = ft("function"), vo = ft("number"), pt = (e) => e !== null && typeof e == "object", Sa = (e) => e === !0 || e === !1, et = (e) => {
  if (ct(e) !== "object")
    return !1;
  const t = br(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, va = Ke("Date"), Ca = Ke("File"), Ta = Ke("Blob"), Aa = Ke("FileList"), Pa = (e) => pt(e) && Be(e.pipe), Oa = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Be(e.append) && ((t = ct(e)) === "formdata" || // detect form-data instance
  t === "object" && Be(e.toString) && e.toString() === "[object FormData]"));
}, Ra = Ke("URLSearchParams"), Fa = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $n(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Sn(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let a;
    for (r = 0; r < l; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Co(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const To = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ao = (e) => !jn(e) && e !== To;
function Qt() {
  const { caseless: e } = Ao(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && Co(t, i) || i;
    et(t[o]) && et(r) ? t[o] = Qt(t[o], r) : et(r) ? t[o] = Qt({}, r) : Sn(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && $n(arguments[r], n);
  return t;
}
const _a = (e, t, n, { allOwnKeys: r } = {}) => ($n(t, (i, o) => {
  n && Be(i) ? e[o] = Eo(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), Ia = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Da = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, La = (e, t, n, r) => {
  let i, o, l;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      l = i[o], (!r || r(l, e, t)) && !a[l] && (t[l] = e[l], a[l] = !0);
    e = n !== !1 && br(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ja = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Na = (e) => {
  if (!e)
    return null;
  if (Sn(e))
    return e;
  let t = e.length;
  if (!vo(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, za = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && br(Uint8Array)), Ma = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, $a = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ba = Ke("HTMLFormElement"), Ua = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Qr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qa = Ke("RegExp"), Po = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $n(n, (i, o) => {
    let l;
    (l = t(i, o, e)) !== !1 && (r[o] = l || i);
  }), Object.defineProperties(e, r);
}, Ha = (e) => {
  Po(e, (t, n) => {
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
}, Va = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return Sn(e) ? r(e) : r(String(e).split(t)), n;
}, Wa = () => {
}, Ya = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ct = "abcdefghijklmnopqrstuvwxyz", Zr = "0123456789", Oo = {
  DIGIT: Zr,
  ALPHA: Ct,
  ALPHA_DIGIT: Ct + Ct.toUpperCase() + Zr
}, Ga = (e = 16, t = Oo.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ja(e) {
  return !!(e && Be(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ka = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (pt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = Sn(r) ? [] : {};
        return $n(r, (l, a) => {
          const u = n(l, i + 1);
          !jn(u) && (o[a] = u);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Xa = Ke("AsyncFunction"), Qa = (e) => e && (pt(e) || Be(e)) && Be(e.then) && Be(e.catch), T = {
  isArray: Sn,
  isArrayBuffer: So,
  isBuffer: ka,
  isFormData: Oa,
  isArrayBufferView: wa,
  isString: Ea,
  isNumber: vo,
  isBoolean: Sa,
  isObject: pt,
  isPlainObject: et,
  isUndefined: jn,
  isDate: va,
  isFile: Ca,
  isBlob: Ta,
  isRegExp: qa,
  isFunction: Be,
  isStream: Pa,
  isURLSearchParams: Ra,
  isTypedArray: za,
  isFileList: Aa,
  forEach: $n,
  merge: Qt,
  extend: _a,
  trim: Fa,
  stripBOM: Ia,
  inherits: Da,
  toFlatObject: La,
  kindOf: ct,
  kindOfTest: Ke,
  endsWith: ja,
  toArray: Na,
  forEachEntry: Ma,
  matchAll: $a,
  isHTMLForm: Ba,
  hasOwnProperty: Qr,
  hasOwnProp: Qr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Po,
  freezeMethods: Ha,
  toObjectSet: Va,
  toCamelCase: Ua,
  noop: Wa,
  toFiniteNumber: Ya,
  findKey: Co,
  global: To,
  isContextDefined: Ao,
  ALPHABET: Oo,
  generateString: Ga,
  isSpecCompliantForm: Ja,
  toJSONObject: Ka,
  isAsyncFn: Xa,
  isThenable: Qa
};
function le(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
T.inherits(le, Error, {
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
const Ro = le.prototype, Fo = {};
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
  Fo[e] = { value: e };
});
Object.defineProperties(le, Fo);
Object.defineProperty(Ro, "isAxiosError", { value: !0 });
le.from = (e, t, n, r, i, o) => {
  const l = Object.create(Ro);
  return T.toFlatObject(e, l, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), le.call(l, e.message, t, n, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const Za = null;
function Zt(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function _o(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ei(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = _o(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function eu(e) {
  return T.isArray(e) && !e.some(Zt);
}
const nu = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ht(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = T.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, x) {
    return !T.isUndefined(x[g]);
  });
  const r = n.metaTokens, i = n.visitor || c, o = n.dots, l = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(d) {
    if (d === null)
      return "";
    if (T.isDate(d))
      return d.toISOString();
    if (!u && T.isBlob(d))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(d) || T.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, g, x) {
    let k = d;
    if (d && !x && typeof d == "object") {
      if (T.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (T.isArray(d) && eu(d) || (T.isFileList(d) || T.endsWith(g, "[]")) && (k = T.toArray(d)))
        return g = _o(g), k.forEach(function(C, I) {
          !(T.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ei([g], I, o) : l === null ? g : g + "[]",
            s(C)
          );
        }), !1;
    }
    return Zt(d) ? !0 : (t.append(ei(x, g, o), s(d)), !1);
  }
  const f = [], m = Object.assign(nu, {
    defaultVisitor: c,
    convertValue: s,
    isVisitable: Zt
  });
  function p(d, g) {
    if (!T.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), T.forEach(d, function(k, A) {
        (!(T.isUndefined(k) || k === null) && i.call(
          t,
          k,
          T.isString(A) ? A.trim() : A,
          g,
          m
        )) === !0 && p(k, g ? g.concat(A) : [A]);
      }), f.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function ni(e) {
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
function xr(e, t) {
  this._pairs = [], e && ht(e, this, t);
}
const Io = xr.prototype;
Io.append = function(t, n) {
  this._pairs.push([t, n]);
};
Io.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ni);
  } : ni;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function tu(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Do(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || tu, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = T.isURLSearchParams(t) ? t.toString() : new xr(t, n).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ru {
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
    T.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ti = ru, Lo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, iu = typeof URLSearchParams < "u" ? URLSearchParams : xr, ou = typeof FormData < "u" ? FormData : null, lu = typeof Blob < "u" ? Blob : null, au = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), uu = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ve = {
  isBrowser: !0,
  classes: {
    URLSearchParams: iu,
    FormData: ou,
    Blob: lu
  },
  isStandardBrowserEnv: au,
  isStandardBrowserWebWorkerEnv: uu,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function su(e, t) {
  return ht(e, new Ve.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return Ve.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function cu(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function fu(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function jo(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    const a = Number.isFinite(+l), u = o >= n.length;
    return l = !l && T.isArray(i) ? i.length : l, u ? (T.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !a) : ((!i[l] || !T.isObject(i[l])) && (i[l] = []), t(n, r, i[l], o) && T.isArray(i[l]) && (i[l] = fu(i[l])), !a);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (r, i) => {
      t(cu(r), i, n, 0);
    }), n;
  }
  return null;
}
function pu(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const kr = {
  transitional: Lo,
  adapter: Ve.isNode ? "http" : "xhr",
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = T.isObject(t);
    if (o && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return i && i ? JSON.stringify(jo(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return su(t, this.formSerializer).toString();
      if ((a = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ht(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), pu(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || kr.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (t && T.isString(t) && (r && !this.responseType || i)) {
      const l = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (l)
          throw a.name === "SyntaxError" ? le.from(a, le.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ve.classes.FormData,
    Blob: Ve.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  kr.headers[e] = {};
});
const wr = kr, hu = T.toObjectSet([
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
]), du = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), n = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!n || t[n] && hu[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ri = Symbol("internals");
function Fn(e) {
  return e && String(e).trim().toLowerCase();
}
function nt(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(nt) : String(e);
}
function mu(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const gu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Tt(e, t, n, r, i) {
  if (T.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!T.isString(t)) {
    if (T.isString(r))
      return t.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(t);
  }
}
function yu(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function bu(e, t) {
  const n = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0
    });
  });
}
class dt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, u, s) {
      const c = Fn(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = T.findKey(i, c);
      (!f || i[f] === void 0 || s === !0 || s === void 0 && i[f] !== !1) && (i[f || u] = nt(a));
    }
    const l = (a, u) => T.forEach(a, (s, c) => o(s, c, u));
    return T.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : T.isString(t) && (t = t.trim()) && !gu(t) ? l(du(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Fn(t), t) {
      const r = T.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return mu(i);
        if (T.isFunction(n))
          return n.call(this, i, r);
        if (T.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Fn(t), t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Tt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (l = Fn(l), l) {
        const a = T.findKey(r, l);
        a && (!n || Tt(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return T.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Tt(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return T.forEach(this, (i, o) => {
      const l = T.findKey(r, o);
      if (l) {
        n[l] = nt(i), delete n[o];
        return;
      }
      const a = t ? yu(o) : String(o).trim();
      a !== o && delete n[o], n[a] = nt(i), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && T.isArray(r) ? r.join(", ") : r);
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
    const r = (this[ri] = this[ri] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(l) {
      const a = Fn(l);
      r[a] || (bu(i, l), r[a] = !0);
    }
    return T.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(dt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
T.freezeMethods(dt);
const Ze = dt;
function At(e, t) {
  const n = this || wr, r = t || n, i = Ze.from(r.headers);
  let o = r.data;
  return T.forEach(e, function(a) {
    o = a.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function No(e) {
  return !!(e && e.__CANCEL__);
}
function Bn(e, t, n) {
  le.call(this, e ?? "canceled", le.ERR_CANCELED, t, n), this.name = "CanceledError";
}
T.inherits(Bn, le, {
  __CANCEL__: !0
});
function xu(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new le(
    "Request failed with status code " + n.status,
    [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const ku = Ve.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, i, o, l, a) {
        const u = [];
        u.push(n + "=" + encodeURIComponent(r)), T.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), T.isString(o) && u.push("path=" + o), T.isString(l) && u.push("domain=" + l), a === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
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
function wu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Eu(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zo(e, t) {
  return e && !wu(t) ? Eu(e, t) : t;
}
const Su = Ve.isStandardBrowserEnv ? (
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
function vu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cu(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, l;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const s = Date.now(), c = r[o];
    l || (l = s), n[i] = u, r[i] = s;
    let f = o, m = 0;
    for (; f !== i; )
      m += n[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), s - l < t)
      return;
    const p = c && s - c;
    return p ? Math.round(m * 1e3 / p) : void 0;
  };
}
function ii(e, t) {
  let n = 0;
  const r = Cu(50, 250);
  return (i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, a = o - n, u = r(a), s = o <= l;
    n = o;
    const c = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && l && s ? (l - o) / u : void 0,
      event: i
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const Tu = typeof XMLHttpRequest < "u", Au = Tu && function(e) {
  return new Promise(function(n, r) {
    let i = e.data;
    const o = Ze.from(e.headers).normalize(), l = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    T.isFormData(i) && (Ve.isStandardBrowserEnv || Ve.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let s = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + d));
    }
    const c = zo(e.baseURL, e.url);
    s.open(e.method.toUpperCase(), Do(c, e.params, e.paramsSerializer), !0), s.timeout = e.timeout;
    function f() {
      if (!s)
        return;
      const p = Ze.from(
        "getAllResponseHeaders" in s && s.getAllResponseHeaders()
      ), g = {
        data: !l || l === "text" || l === "json" ? s.responseText : s.response,
        status: s.status,
        statusText: s.statusText,
        headers: p,
        config: e,
        request: s
      };
      xu(function(k) {
        n(k), u();
      }, function(k) {
        r(k), u();
      }, g), s = null;
    }
    if ("onloadend" in s ? s.onloadend = f : s.onreadystatechange = function() {
      !s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, s.onabort = function() {
      s && (r(new le("Request aborted", le.ECONNABORTED, e, s)), s = null);
    }, s.onerror = function() {
      r(new le("Network Error", le.ERR_NETWORK, e, s)), s = null;
    }, s.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Lo;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new le(
        d,
        g.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
        e,
        s
      )), s = null;
    }, Ve.isStandardBrowserEnv) {
      const p = (e.withCredentials || Su(c)) && e.xsrfCookieName && ku.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in s && T.forEach(o.toJSON(), function(d, g) {
      s.setRequestHeader(g, d);
    }), T.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), l && l !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", ii(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", ii(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (p) => {
      s && (r(!p || p.type ? new Bn(null, e, s) : p), s.abort(), s = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const m = vu(c);
    if (m && Ve.protocols.indexOf(m) === -1) {
      r(new le("Unsupported protocol " + m + ":", le.ERR_BAD_REQUEST, e));
      return;
    }
    s.send(i || null);
  });
}, tt = {
  http: Za,
  xhr: Au
};
T.forEach(tt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mo = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let i = 0; i < t && (n = e[i], !(r = T.isString(n) ? tt[n.toLowerCase()] : n)); i++)
      ;
    if (!r)
      throw r === !1 ? new le(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        T.hasOwnProp(tt, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!T.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: tt
};
function Pt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Bn(null, e);
}
function oi(e) {
  return Pt(e), e.headers = Ze.from(e.headers), e.data = At.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mo.getAdapter(e.adapter || wr.adapter)(e).then(function(r) {
    return Pt(e), r.data = At.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return No(r) || (Pt(e), r && r.response && (r.response.data = At.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const li = (e) => e instanceof Ze ? e.toJSON() : e;
function wn(e, t) {
  t = t || {};
  const n = {};
  function r(s, c, f) {
    return T.isPlainObject(s) && T.isPlainObject(c) ? T.merge.call({ caseless: f }, s, c) : T.isPlainObject(c) ? T.merge({}, c) : T.isArray(c) ? c.slice() : c;
  }
  function i(s, c, f) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(s))
        return r(void 0, s, f);
    } else
      return r(s, c, f);
  }
  function o(s, c) {
    if (!T.isUndefined(c))
      return r(void 0, c);
  }
  function l(s, c) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(s))
        return r(void 0, s);
    } else
      return r(void 0, c);
  }
  function a(s, c, f) {
    if (f in t)
      return r(s, c);
    if (f in e)
      return r(void 0, s);
  }
  const u = {
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
    headers: (s, c) => i(li(s), li(c), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const f = u[c] || i, m = f(e[c], t[c], c);
    T.isUndefined(m) && f !== a || (n[c] = m);
  }), n;
}
const $o = "1.5.0", Er = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Er[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ai = {};
Er.transitional = function(t, n, r) {
  function i(o, l) {
    return "[Axios v" + $o + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, a) => {
    if (t === !1)
      throw new le(
        i(l, " has been removed" + (n ? " in " + n : "")),
        le.ERR_DEPRECATED
      );
    return n && !ai[l] && (ai[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, l, a) : !0;
  };
};
function Pu(e, t, n) {
  if (typeof e != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], l = t[o];
    if (l) {
      const a = e[o], u = a === void 0 || l(a, o, e);
      if (u !== !0)
        throw new le("option " + o + " must be " + u, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new le("Unknown option " + o, le.ERR_BAD_OPTION);
  }
}
const er = {
  assertOptions: Pu,
  validators: Er
}, tn = er.validators;
class lt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ti(),
      response: new ti()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = wn(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && er.assertOptions(r, {
      silentJSONParsing: tn.transitional(tn.boolean),
      forcedJSONParsing: tn.transitional(tn.boolean),
      clarifyTimeoutError: tn.transitional(tn.boolean)
    }, !1), i != null && (T.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : er.assertOptions(i, {
      encode: tn.function,
      serialize: tn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = o && T.merge(
      o.common,
      o[n.method]
    );
    o && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = Ze.concat(l, o);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (u = u && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(g) {
      s.push(g.fulfilled, g.rejected);
    });
    let c, f = 0, m;
    if (!u) {
      const d = [oi.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, s), m = d.length, c = Promise.resolve(n); f < m; )
        c = c.then(d[f++], d[f++]);
      return c;
    }
    m = a.length;
    let p = n;
    for (f = 0; f < m; ) {
      const d = a[f++], g = a[f++];
      try {
        p = d(p);
      } catch (x) {
        g.call(this, x);
        break;
      }
    }
    try {
      c = oi.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, m = s.length; f < m; )
      c = c.then(s[f++], s[f++]);
    return c;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const n = zo(t.baseURL, t.url);
    return Do(n, t.params, t.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(t) {
  lt.prototype[t] = function(n, r) {
    return this.request(wn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, l, a) {
      return this.request(wn(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  lt.prototype[t] = n(), lt.prototype[t + "Form"] = n(!0);
});
const rt = lt;
class Sr {
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
      r.reason || (r.reason = new Bn(o, l, a), n(r.reason));
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
      token: new Sr(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Ou = Sr;
function Ru(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Fu(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const nr = {
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
Object.entries(nr).forEach(([e, t]) => {
  nr[t] = e;
});
const _u = nr;
function Bo(e) {
  const t = new rt(e), n = Eo(rt.prototype.request, t);
  return T.extend(n, rt.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Bo(wn(e, i));
  }, n;
}
const Te = Bo(wr);
Te.Axios = rt;
Te.CanceledError = Bn;
Te.CancelToken = Ou;
Te.isCancel = No;
Te.VERSION = $o;
Te.toFormData = ht;
Te.AxiosError = le;
Te.Cancel = Te.CanceledError;
Te.all = function(t) {
  return Promise.all(t);
};
Te.spread = Ru;
Te.isAxiosError = Fu;
Te.mergeConfig = wn;
Te.AxiosHeaders = Ze;
Te.formToJSON = (e) => jo(T.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = Mo.getAdapter;
Te.HttpStatusCode = _u;
Te.default = Te;
const mt = Te;
mt.defaults.withCredentials = !0;
const Iu = async (e, t, n, r, i) => {
  let o = {
    method: "POST",
    url: `${e}/game/create`,
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      GameKey: t,
      GameID: n,
      Teams: r,
      TurnLength: null,
      MoreOptions: {
        Seed: Date.now(),
        Variant: i
      }
    })
  };
  return mt(o).catch((l) => l.response).then((l) => l.status);
}, Du = async (e, t, n) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${t}&GameID=${n}`
  };
  return mt(r).catch((i) => i.response);
}, Uo = async (e) => {
  let t = {
    method: "GET",
    url: `${e}/health`
  };
  return mt(t).catch((n) => n.response);
};
function sg({ config: e }) {
  const t = st();
  return setInterval(function() {
    async function n() {
      let r = await Uo(e.host);
      r && r.status === 200 && t("/");
    }
    n();
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
  "slim",
  "earthy",
  "ablaze",
  "hot",
  "magnificent",
  "cold",
  "jagged",
  "lucky",
  "warm",
  "highfalutin",
  "similar",
  "salty",
  "confident",
  "fuzzy",
  "aquatic",
  "strict",
  "fast",
  "petite",
  "excited",
  "efficient",
  "slow",
  "nervous",
  "narrow",
  "loose",
  "dark",
  "gaping",
  "lowly",
  "rural",
  "savory",
  "amusing",
  "small",
  "sore",
  "mature",
  "sordid",
  "rhetorical",
  "soft",
  "strange",
  "significant",
  "savory",
  "sneaky",
  "little",
  "absorbing",
  "nonchalant",
  "happy",
  "fluffy",
  "hard",
  "giant",
  "beneficial",
  "polite",
  "voracious"
], si = [
  "childhood",
  "restaurant",
  "elevator",
  "clarinet",
  "school",
  "cat",
  "dog",
  "horse",
  "town",
  "medicine",
  "committee",
  "video",
  "hair",
  "home",
  "cow",
  "music",
  "worker",
  "bottle",
  "food",
  "juice",
  "chair",
  "bench",
  "tuba",
  "vehicle",
  "car",
  "city",
  "assistant",
  "nature",
  "device",
  "lamp",
  "cup",
  "lab",
  "room",
  "population",
  "bed",
  "guitar",
  "bird",
  "painting",
  "dad",
  "piano",
  "bank",
  "error",
  "horn",
  "friend",
  "employee",
  "computer",
  "midnight",
  "card",
  "sun",
  "fan"
], Ot = {
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
function cg({ config: e }) {
  const t = st(), [n, r] = pn(`${ui[Math.floor(Math.random() * ui.length)]}-${si[Math.floor(Math.random() * si.length)]}`), [i, o] = pn(e.minTeams), [l, a] = pn(e.variants.length > 0 ? e.variants[0] : null);
  bn(() => {
    async function s() {
      let c = await Uo(e.host);
      (!c || c.status !== 200) && t("/status/down");
    }
    s();
  }, [history]);
  async function u(s) {
    s.preventDefault();
    let c = await Iu(e.host, e.key, n, i, l);
    (c === 201 || c === 400) && t(`/${n}`);
  }
  return /* @__PURE__ */ P.jsx("div", { children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center m-8 md:m-12", children: [
    /* @__PURE__ */ P.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col items-center fade-in", children: [
      /* @__PURE__ */ P.jsx("div", { className: ` text-5xl font-black font-['${e.font}'] text-${e.color} mb-1 cursor-pointer`, children: /* @__PURE__ */ P.jsx("a", { href: `${window.location.protocol}//${window.location.host}`, children: e.key }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "font-thin mb-3", children: [
        "Play ",
        e.minTeams === e.maxTeams ? `${Ot[e.minTeams]}` : `${Ot[e.minTeams]} to ${Ot[e.maxTeams]}`,
        " player ",
        e.key,
        " online against friends. To create a game or join an existing one, enter a game ID and click 'Go'."
      ] }),
      /* @__PURE__ */ P.jsxs("form", { className: "w-full flex mb-3", onSubmit: u, children: [
        /* @__PURE__ */ P.jsx("input", { className: "w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2", autoFocus: !0, type: "text", value: n, onChange: (s) => r(s.target.value) }),
        /* @__PURE__ */ P.jsx("button", { className: "w-2/12 font-bold grow-0 bg-blue-500", children: "Go" })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex w-full justify-between flex-wrap", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex order-2 md:order-1", children: [
          /* @__PURE__ */ P.jsx("button", { onClick: () => t("/rules"), title: "how to play", className: "mr-3 md:mr-2 p-2 first-line:p-2 bg-blue-500 italic text-xs font-bold", children: "game rules" }),
          /* @__PURE__ */ P.jsx("div", { className: "italic text-xs  py-1 px-2 border-blue-500 border border-dashed text-blue-500", children: /* @__PURE__ */ P.jsxs("a", { href: "https://quibbble.com", target: "_blank", children: [
            "more ",
            /* @__PURE__ */ P.jsx("span", { className: "text-zinc-200 font-['lobster'] text-sm not-italic", children: "quibbble" }),
            " games"
          ] }) })
        ] }),
        /* @__PURE__ */ P.jsxs("div", { className: "flex items-center order-1 md:order-2 mb-3 md:mb-0", children: [
          l ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ P.jsx("div", { className: "mr-1 font-black text-blue-500", children: "VARIANT" }),
            /* @__PURE__ */ P.jsx("select", { className: "mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (s) => a(s.target.value.replace(/\s/g, "")), children: e.variants.map((s) => /* @__PURE__ */ P.jsx("option", { value: s, children: s }, s)) })
          ] }) : null,
          e.minTeams !== e.maxTeams ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ P.jsx("div", { className: "mx-1 font-black text-blue-500", children: "PLAYERS" }),
            /* @__PURE__ */ P.jsx("select", { className: "bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (s) => o(parseInt(s.target.value)), children: Array(e.maxTeams - e.minTeams + 1).fill().map((s, c) => e.minTeams + c).map((s) => /* @__PURE__ */ P.jsx("option", { value: s, children: s }, s)) })
          ] }) : null
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-8 md:bottom-12", children: /* @__PURE__ */ P.jsx(yr, {}) })
  ] }) });
}
var qo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ci = Re.createContext && Re.createContext(qo), on = globalThis && globalThis.__assign || function() {
  return on = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, on.apply(this, arguments);
}, Lu = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function Ho(e) {
  return e && e.map(function(t, n) {
    return Re.createElement(t.tag, on({
      key: n
    }, t.attr), Ho(t.child));
  });
}
function Vo(e) {
  return function(t) {
    return Re.createElement(ju, on({
      attr: on({}, e.attr)
    }, t), Ho(e.child));
  };
}
function ju(e) {
  var t = function(n) {
    var r = e.attr, i = e.size, o = e.title, l = Lu(e, ["attr", "size", "title"]), a = i || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), Re.createElement("svg", on({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, l, {
      className: u,
      style: on(on({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Re.createElement("title", null, o), e.children);
  };
  return ci !== void 0 ? Re.createElement(ci.Consumer, null, function(n) {
    return t(n);
  }) : t(qo);
}
function Nu(e) {
  return Vo({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function zu(e) {
  return Vo({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" } }] })(e);
}
function Mu({ isConn: e }) {
  const [t, n] = pn(0);
  return bn(() => {
    e ? setTimeout(() => n((r) => r - 1), 1500) : n(0);
  }, [e, n]), /* @__PURE__ */ P.jsxs("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}`, children: [
    t ? null : /* @__PURE__ */ P.jsx("div", { className: "px-1", children: e ? "connected" : "connecting" }),
    /* @__PURE__ */ P.jsx("div", { onClick: () => {
      e && (n(0), setTimeout(() => n(t - 1), 1500));
    }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}`, children: e ? null : /* @__PURE__ */ P.jsx("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" }) })
  ] });
}
const fg = da((e, t) => {
  const {
    config: n,
    ws: r,
    game: i,
    setGame: o,
    network: l,
    setNetwork: a,
    chat: u,
    setChat: s,
    connected: c,
    setConnected: f,
    error: m,
    setError: p,
    children: d
  } = e, { gameID: g } = ga(), x = st(), [k, A] = pn(!0);
  bn(() => {
    c && l && c[l.Name] && sessionStorage.setItem(g, c[l.Name]);
  }, [l, c, g]), bn(() => {
    const B = async (D) => {
      if (D <= 0) {
        x("/");
        return;
      }
      let j = await Du(n.host, n.key, g);
      if (!j) {
        x("/status/down");
        return;
      }
      if (j.status !== 200) {
        x("/");
        return;
      }
      r.current = new WebSocket(`${n.websocket}/game/join?GameKey=${n.key}&GameID=${g}`), r.current.onopen = () => {
        A(!0);
        let V = sessionStorage.getItem(g);
        V && C(V);
      }, r.current.onclose = () => {
        A(!1), setTimeout(function() {
          B(D - 1);
        }, 1e3 + (3 - D) * 500);
      }, r.current.onmessage = async (V) => {
        let H = JSON.parse(V.data);
        H.Type === "Game" ? o(H.Payload) : H.Type === "Network" ? a(H.Payload) : H.Type === "Chat" ? s((K) => K.concat([H.Payload])) : H.Type === "Connected" ? f(H.Payload) : H.Type === "Error" && p(H.Payload);
      }, r.current.onerror = (V) => {
        console.error("Socket encountered error: ", V.message, "Closing socket"), r.current.close();
      };
    };
    B(3);
  }, [r, g, history]);
  const C = (B) => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: B } }));
  }, I = () => {
    if (!r.current)
      return;
    const B = i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "";
    r.current.send(JSON.stringify({ ActionType: "Reset", MoreDetails: { MoreOptions: { Seed: Date.now(), Variant: B } } }));
  }, [S, w] = pn(!0);
  bn(() => {
    const B = () => w(!S);
    return window.addEventListener("resize", B), (E) => window.removeEventListener("resize", B);
  });
  const [z, q] = pn(0);
  return bn(() => {
    z > 0 && setTimeout(() => q(z - 1), 1e3);
  }, [z]), /* @__PURE__ */ P.jsx("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4 fade-in", children: /* @__PURE__ */ P.jsxs("div", { ref: t, className: `h-full w-full ${n.gamePageMaxWidth} flex flex-col items-center grow`, children: [
    /* @__PURE__ */ P.jsxs("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm", children: [
      /* @__PURE__ */ P.jsxs("div", { children: [
        "Share this link: ",
        /* @__PURE__ */ P.jsx("span", { className: "underline cursor-pointer", onClick: () => {
          q(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${g}`);
        }, children: `${window.location.protocol}//${window.location.host}/${g}` }),
        z > 0 ? /* @__PURE__ */ P.jsxs("div", { className: "absolute mt-2 w-full flex justify-center", children: [
          /* @__PURE__ */ P.jsx("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block", children: /* @__PURE__ */ P.jsx("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" }) }),
          /* @__PURE__ */ P.jsx("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1", children: "copied!" })
        ] }) : null
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "px-1", children: /* @__PURE__ */ P.jsx(Mu, { isConn: k }) })
    ] }),
    /* @__PURE__ */ P.jsx("hr", { className: "w-full mb-2" }),
    /* @__PURE__ */ P.jsxs("div", { className: "flex w-full justify-between items-center mb-4", children: [
      /* @__PURE__ */ P.jsx("div", { className: "flex", children: i ? i.Teams.map((B) => /* @__PURE__ */ P.jsx(
        "div",
        {
          className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${B}-500 ${l && c && c[l.Name] === B ? `bg-${c[l.Name]}-500` : ""}`,
          onClick: () => C(B),
          children: i && i.MoreData && i.MoreData.Points ? i.MoreData.Points[B] : ""
        },
        B
      )) : null }),
      /* @__PURE__ */ P.jsx("div", { className: `font-extrabold ${i && c && l && c[l.Name] && i.Winners.length === 0 ? `text-${i.Turn}-500` : "text-zinc-100"} ${i && l && c && c[l.Name] === i.Turn && i.Winners.length === 0 ? "animate-pulse" : ""}`, children: i && c && l && c[l.Name] ? i.Message : /* @__PURE__ */ P.jsxs("div", { className: "flex items-center animate-pulse", children: [
        /* @__PURE__ */ P.jsx(Nu, { className: "mr-1" }),
        /* @__PURE__ */ P.jsx("div", { children: "select a team" })
      ] }) })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "h-full w-full flex flex-col justify-center items-center grow", children: d }),
    /* @__PURE__ */ P.jsx("hr", { className: "w-full mb-2" }),
    /* @__PURE__ */ P.jsxs("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ P.jsx("div", { className: `leading-4 text-2xl font-black text-${n.color} cursor-pointer`, children: /* @__PURE__ */ P.jsxs("button", { onClick: () => {
        sessionStorage.setItem("gameID", ""), x("/");
      }, children: [
        /* @__PURE__ */ P.jsx("span", { className: `font-['${n.font}']`, children: n.key }),
        /* @__PURE__ */ P.jsx("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100", children: i && i.MoreData && i.MoreData.Variant ? i.MoreData.Variant : "" })
      ] }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ P.jsx("button", { onClick: () => I(), title: "reset game", className: `p-2 ${i && i.Winners.length > 0 ? "bg-green-500 animate-pulse" : "bg-zinc-500"} mr-3 md:mr-2 rounded-full`, children: /* @__PURE__ */ P.jsx(zu, {}) }),
        /* @__PURE__ */ P.jsx("button", { onClick: () => {
          sessionStorage.setItem("gameID", g), x("/rules");
        }, title: "how to play", className: "p-2 bg-blue-500 mr-3 md:mr-2 italic text-xs font-bold", children: "game rules" }),
        /* @__PURE__ */ P.jsx("div", { className: "italic text-xs  py-1 px-2 border-blue-500 border border-dashed text-blue-500", children: /* @__PURE__ */ P.jsxs("a", { href: "https://quibbble.com", target: "_blank", children: [
          "more ",
          /* @__PURE__ */ P.jsx("span", { className: "text-zinc-200 font-['lobster'] text-sm not-italic", children: "quibbble" }),
          " games"
        ] }) })
      ] })
    ] })
  ] }) });
}), fi = ["http", "https", "mailto", "tel"];
function $u(e) {
  const t = (e || "").trim(), n = t.charAt(0);
  if (n === "#" || n === "/")
    return t;
  const r = t.indexOf(":");
  if (r === -1)
    return t;
  let i = -1;
  for (; ++i < fi.length; ) {
    const o = fi[i];
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
var Bu = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
};
const Wo = /* @__PURE__ */ Mn(Bu);
function Dn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? pi(e.position) : "start" in e || "end" in e ? pi(e) : "line" in e || "column" in e ? tr(e) : "";
}
function tr(e) {
  return hi(e && e.line) + ":" + hi(e && e.column);
}
function pi(e) {
  return tr(e && e.start) + "-" + tr(e && e.end);
}
function hi(e) {
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
    n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = Dn(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note;
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
const Ye = { basename: Uu, dirname: qu, extname: Hu, join: Vu, sep: "/" };
function Uu(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Un(e);
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
function qu(e) {
  if (Un(e), e.length === 0)
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
function Hu(e) {
  Un(e);
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
function Vu(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Un(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Wu(n);
}
function Wu(e) {
  Un(e);
  const t = e.charCodeAt(0) === 47;
  let n = Yu(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Yu(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, a, u;
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
              if (u = n.lastIndexOf("/"), u !== n.length - 1) {
                u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
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
function Un(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Gu = { cwd: Ju };
function Ju() {
  return "/";
}
function rr(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function Ku(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!rr(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Xu(e);
}
function Xu(e) {
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
const Rt = ["history", "path", "basename", "stem", "extname", "dirname"];
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
  constructor(t) {
    let n;
    t ? typeof t == "string" || Qu(t) ? n = { value: t } : rr(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Gu.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < Rt.length; ) {
      const o = Rt[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Rt.includes(i) || (this[i] = n[i]);
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
    rr(t) && (t = Ku(t)), _t(t, "path"), this.path !== t && this.history.push(t);
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
  set dirname(t) {
    di(this.basename, "dirname"), this.path = Ye.join(t || "", this.basename);
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
  set basename(t) {
    _t(t, "basename"), Ft(t, "basename"), this.path = Ye.join(this.dirname || "", t);
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
  set extname(t) {
    if (Ft(t, "extname"), di(this.dirname, "extname"), t) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ye.join(this.dirname, this.stem + (t || ""));
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
  set stem(t) {
    _t(t, "stem"), Ft(t, "stem"), this.path = Ye.join(this.dirname || "", t + (this.extname || ""));
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
function Ft(e, t) {
  if (e && e.includes(Ye.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ye.sep + "`"
    );
}
function _t(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function di(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Qu(e) {
  return Wo(e);
}
function mi(e) {
  if (e)
    throw e;
}
var it = Object.prototype.hasOwnProperty, Go = Object.prototype.toString, gi = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, bi = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Go.call(t) === "[object Array]";
}, xi = function(t) {
  if (!t || Go.call(t) !== "[object Object]")
    return !1;
  var n = it.call(t, "constructor"), r = t.constructor && t.constructor.prototype && it.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || it.call(t, i);
}, ki = function(t, n) {
  gi && n.name === "__proto__" ? gi(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, wi = function(t, n) {
  if (n === "__proto__")
    if (it.call(t, n)) {
      if (yi)
        return yi(t, n).value;
    } else
      return;
  return t[n];
}, Zu = function e() {
  var t, n, r, i, o, l, a = arguments[0], u = 1, s = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, u = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); u < s; ++u)
    if (t = arguments[u], t != null)
      for (n in t)
        r = wi(a, n), i = wi(t, n), a !== i && (c && i && (xi(i) || (o = bi(i))) ? (o ? (o = !1, l = r && bi(r) ? r : []) : l = r && xi(r) ? r : {}, ki(a, { name: n, newValue: e(c, l, i) })) : typeof i < "u" && ki(a, { name: n, newValue: i }));
  return a;
};
const Ei = /* @__PURE__ */ Mn(Zu);
function ir(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function es() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(u, ...s) {
      const c = e[++o];
      let f = -1;
      if (u) {
        l(u);
        return;
      }
      for (; ++f < i.length; )
        (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
      i = s, c ? ns(c, a)(...s) : l(null, ...s);
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
function ns(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let u;
    a && l.push(i);
    try {
      u = e.apply(this, l);
    } catch (s) {
      const c = (
        /** @type {Error} */
        s
      );
      if (a && n)
        throw c;
      return i(c);
    }
    a || (u instanceof Promise ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(l, ...a) {
    n || (n = !0, t(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const ts = Ko().freeze(), Jo = {}.hasOwnProperty;
function Ko() {
  const e = es(), t = [];
  let n = {}, r, i = -1;
  return o.data = l, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = t, o.use = u, o.parse = s, o.stringify = c, o.run = f, o.runSync = m, o.process = p, o.processSync = d, o;
  function o() {
    const g = Ko();
    let x = -1;
    for (; ++x < t.length; )
      g.use(...t[x]);
    return g.data(Ei(!0, {}, n)), g;
  }
  function l(g, x) {
    return typeof g == "string" ? arguments.length === 2 ? (Lt("data", r), n[g] = x, o) : Jo.call(n, g) && n[g] || null : g ? (Lt("data", r), n = g, o) : n;
  }
  function a() {
    if (r)
      return o;
    for (; ++i < t.length; ) {
      const [g, ...x] = t[i];
      if (x[0] === !1)
        continue;
      x[0] === !0 && (x[0] = void 0);
      const k = g.call(o, ...x);
      typeof k == "function" && e.use(k);
    }
    return r = !0, i = Number.POSITIVE_INFINITY, o;
  }
  function u(g, ...x) {
    let k;
    if (Lt("use", r), g != null)
      if (typeof g == "function")
        S(g, ...x);
      else if (typeof g == "object")
        Array.isArray(g) ? I(g) : C(g);
      else
        throw new TypeError("Expected usable value, not `" + g + "`");
    return k && (n.settings = Object.assign(n.settings || {}, k)), o;
    function A(w) {
      if (typeof w == "function")
        S(w);
      else if (typeof w == "object")
        if (Array.isArray(w)) {
          const [z, ...q] = w;
          S(z, ...q);
        } else
          C(w);
      else
        throw new TypeError("Expected usable value, not `" + w + "`");
    }
    function C(w) {
      I(w.plugins), w.settings && (k = Object.assign(k || {}, w.settings));
    }
    function I(w) {
      let z = -1;
      if (w != null)
        if (Array.isArray(w))
          for (; ++z < w.length; ) {
            const q = w[z];
            A(q);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + w + "`");
    }
    function S(w, z) {
      let q = -1, B;
      for (; ++q < t.length; )
        if (t[q][0] === w) {
          B = t[q];
          break;
        }
      B ? (ir(B[1]) && ir(z) && (z = Ei(!0, B[1], z)), B[1] = z) : t.push([...arguments]);
    }
  }
  function s(g) {
    o.freeze();
    const x = _n(g), k = o.Parser;
    return It("parse", k), Si(k, "parse") ? new k(String(x), x).parse() : k(String(x), x);
  }
  function c(g, x) {
    o.freeze();
    const k = _n(x), A = o.Compiler;
    return Dt("stringify", A), vi(g), Si(A, "compile") ? new A(g, k).compile() : A(g, k);
  }
  function f(g, x, k) {
    if (vi(g), o.freeze(), !k && typeof x == "function" && (k = x, x = void 0), !k)
      return new Promise(A);
    A(null, k);
    function A(C, I) {
      e.run(g, _n(x), S);
      function S(w, z, q) {
        z = z || g, w ? I(w) : C ? C(z) : k(null, z, q);
      }
    }
  }
  function m(g, x) {
    let k, A;
    return o.run(g, x, C), Ci("runSync", "run", A), k;
    function C(I, S) {
      mi(I), k = S, A = !0;
    }
  }
  function p(g, x) {
    if (o.freeze(), It("process", o.Parser), Dt("process", o.Compiler), !x)
      return new Promise(k);
    k(null, x);
    function k(A, C) {
      const I = _n(g);
      o.run(o.parse(I), I, (w, z, q) => {
        if (w || !z || !q)
          S(w);
        else {
          const B = o.stringify(z, q);
          B == null || (os(B) ? q.value = B : q.result = B), S(w, q);
        }
      });
      function S(w, z) {
        w || !z ? C(w) : A ? A(z) : x(null, z);
      }
    }
  }
  function d(g) {
    let x;
    o.freeze(), It("processSync", o.Parser), Dt("processSync", o.Compiler);
    const k = _n(g);
    return o.process(k, A), Ci("processSync", "process", x), k;
    function A(C) {
      x = !0, mi(C);
    }
  }
}
function Si(e, t) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (rs(e.prototype) || t in e.prototype);
}
function rs(e) {
  let t;
  for (t in e)
    if (Jo.call(e, t))
      return !0;
  return !1;
}
function It(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function Dt(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Lt(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function vi(e) {
  if (!ir(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ci(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function _n(e) {
  return is(e) ? e : new Yo(e);
}
function is(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function os(e) {
  return typeof e == "string" || Wo(e);
}
const ls = {};
function as(e, t) {
  const n = t || ls, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Xo(e, r, i);
}
function Xo(e, t, n) {
  if (us(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ti(e.children, t, n);
  }
  return Array.isArray(e) ? Ti(e, t, n) : "";
}
function Ti(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Xo(e[i], t, n);
  return r.join("");
}
function us(e) {
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
const Ai = {}.hasOwnProperty;
function ss(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    cs(t, e[n]);
  return t;
}
function cs(e, t) {
  let n;
  for (n in t) {
    const i = (Ai.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        Ai.call(i, l) || (i[l] = []);
        const a = o[l];
        fs(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function fs(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Je(e, 0, 0, r);
}
const ps = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ge = ln(/[A-Za-z]/), Ne = ln(/[\dA-Za-z]/), hs = ln(/[#-'*+\--9=?A-Z^-~]/);
function or(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const lr = ln(/\d/), ds = ln(/[\dA-Fa-f]/), ms = ln(/[!-/:-@[-`{-~]/);
function X(e) {
  return e !== null && e < -2;
}
function _e(e) {
  return e !== null && (e < 0 || e === 32);
}
function fe(e) {
  return e === -2 || e === -1 || e === 32;
}
const gs = ln(ps), ys = ln(/\s/);
function ln(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function xe(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return fe(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return fe(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const bs = {
  tokenize: xs
};
function xs(e) {
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
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return X(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const ks = {
  tokenize: ws
}, Pi = {
  tokenize: Es
};
function ws(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < n.length) {
      const I = n[r];
      return t.containerState = I[1], e.attempt(
        I[0].continuation,
        u,
        s
      )(C);
    }
    return s(C);
  }
  function u(C) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const I = t.events.length;
      let S = I, w;
      for (; S--; )
        if (t.events[S][0] === "exit" && t.events[S][1].type === "chunkFlow") {
          w = t.events[S][1].end;
          break;
        }
      k(r);
      let z = I;
      for (; z < t.events.length; )
        t.events[z][1].end = Object.assign({}, w), z++;
      return Je(
        t.events,
        S + 1,
        0,
        t.events.slice(I)
      ), t.events.length = z, s(C);
    }
    return a(C);
  }
  function s(C) {
    if (r === n.length) {
      if (!i)
        return m(C);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return d(C);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      Pi,
      c,
      f
    )(C);
  }
  function c(C) {
    return i && A(), k(r), m(C);
  }
  function f(C) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, d(C);
  }
  function m(C) {
    return t.containerState = {}, e.attempt(
      Pi,
      p,
      d
    )(C);
  }
  function p(C) {
    return r++, n.push([t.currentConstruct, t.containerState]), m(C);
  }
  function d(C) {
    if (C === null) {
      i && A(), k(0), e.consume(C);
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
      x(e.exit("chunkFlow"), !0), k(0), e.consume(C);
      return;
    }
    return X(C) ? (e.consume(C), x(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(C), g);
  }
  function x(C, I) {
    const S = t.sliceStream(C);
    if (I && S.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(S), t.parser.lazy[C.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < l && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > l)
        )
          return;
      const z = t.events.length;
      let q = z, B, E;
      for (; q--; )
        if (t.events[q][0] === "exit" && t.events[q][1].type === "chunkFlow") {
          if (B) {
            E = t.events[q][1].end;
            break;
          }
          B = !0;
        }
      for (k(r), w = z; w < t.events.length; )
        t.events[w][1].end = Object.assign({}, E), w++;
      Je(
        t.events,
        q + 1,
        0,
        t.events.slice(z)
      ), t.events.length = w;
    }
  }
  function k(C) {
    let I = n.length;
    for (; I-- > C; ) {
      const S = n[I];
      t.containerState = S[1], S[0].exit.call(t, e);
    }
    n.length = C;
  }
  function A() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Es(e, t, n) {
  return xe(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Oi(e) {
  if (e === null || _e(e) || ys(e))
    return 1;
  if (gs(e))
    return 2;
}
function vr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const ar = {
  name: "attention",
  tokenize: vs,
  resolveAll: Ss
};
function Ss(e, t) {
  let n = -1, r, i, o, l, a, u, s, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), m = Object.assign({}, e[n][1].start);
          Ri(f, -u), Ri(m, u), l = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: Object.assign({}, e[r][1].end)
          }, a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: m
          }, o = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: Object.assign({}, l.start),
            end: Object.assign({}, a.end)
          }, e[r][1].end = Object.assign({}, l.start), e[n][1].start = Object.assign({}, a.end), s = [], e[r][1].end.offset - e[r][1].start.offset && (s = $e(s, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), s = $e(s, [
            ["enter", i, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", o, t]
          ]), s = $e(
            s,
            vr(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), s = $e(s, [
            ["exit", o, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", i, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, s = $e(s, [
            ["enter", e[n][1], t],
            ["exit", e[n][1], t]
          ])) : c = 0, Je(e, r - 1, n - r + 3, s), n = r + s.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function vs(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Oi(r);
  let o;
  return l;
  function l(u) {
    return o = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === o)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), c = Oi(u), f = !c || c === 2 && i || n.includes(u), m = !i || i === 2 && c || n.includes(r);
    return s._open = !!(o === 42 ? f : f && (i || !m)), s._close = !!(o === 42 ? m : m && (c || !f)), t(u);
  }
}
function Ri(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Cs = {
  name: "autolink",
  tokenize: Ts
};
function Ts(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ge(p) ? (e.consume(p), l) : s(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || Ne(p) ? (r = 1, a(p)) : s(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || Ne(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, s(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || or(p) ? n(p) : (e.consume(p), u);
  }
  function s(p) {
    return p === 64 ? (e.consume(p), c) : hs(p) ? (e.consume(p), s) : n(p);
  }
  function c(p) {
    return Ne(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : m(p);
  }
  function m(p) {
    if ((p === 45 || Ne(p)) && r++ < 63) {
      const d = p === 45 ? m : f;
      return e.consume(p), d;
    }
    return n(p);
  }
}
const gt = {
  tokenize: As,
  partial: !0
};
function As(e, t, n) {
  return r;
  function r(o) {
    return fe(o) ? xe(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || X(o) ? t(o) : n(o);
  }
}
const Qo = {
  name: "blockQuote",
  tokenize: Ps,
  continuation: {
    tokenize: Os
  },
  exit: Rs
};
function Ps(e, t, n) {
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
    return fe(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Os(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return fe(l) ? xe(
      e,
      o,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(l) : o(l);
  }
  function o(l) {
    return e.attempt(Qo, t, n)(l);
  }
}
function Rs(e) {
  e.exit("blockQuote");
}
const Zo = {
  name: "characterEscape",
  tokenize: Fs
};
function Fs(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return ms(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Fi = document.createElement("i");
function Cr(e) {
  const t = "&" + e + ";";
  Fi.innerHTML = t;
  const n = Fi.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const el = {
  name: "characterReference",
  tokenize: _s
};
function _s(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u;
  }
  function u(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, l = Ne, c(f));
  }
  function s(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = ds, c) : (e.enter("characterReferenceValue"), o = 7, l = lr, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const m = e.exit("characterReferenceValue");
      return l === Ne && !Cr(r.sliceSerialize(m)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(f) && i++ < o ? (e.consume(f), c) : n(f);
  }
}
const _i = {
  tokenize: Ds,
  partial: !0
}, Ii = {
  name: "codeFenced",
  tokenize: Is,
  concrete: !0
};
function Is(e, t, n) {
  const r = this, i = {
    tokenize: S,
    partial: !0
  };
  let o = 0, l = 0, a;
  return u;
  function u(w) {
    return s(w);
  }
  function s(w) {
    const z = r.events[r.events.length - 1];
    return o = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === a ? (l++, e.consume(w), c) : l < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), fe(w) ? xe(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || X(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(_i, g, I)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), m(w));
  }
  function m(w) {
    return w === null || X(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : fe(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), xe(e, p, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), m);
  }
  function p(w) {
    return w === null || X(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || X(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === a ? n(w) : (e.consume(w), d);
  }
  function g(w) {
    return e.attempt(i, I, x)(w);
  }
  function x(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), k;
  }
  function k(w) {
    return o > 0 && fe(w) ? xe(
      e,
      A,
      "linePrefix",
      o + 1
    )(w) : A(w);
  }
  function A(w) {
    return w === null || X(w) ? e.check(_i, g, I)(w) : (e.enter("codeFlowValue"), C(w));
  }
  function C(w) {
    return w === null || X(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), C);
  }
  function I(w) {
    return e.exit("codeFenced"), t(w);
  }
  function S(w, z, q) {
    let B = 0;
    return E;
    function E(K) {
      return w.enter("lineEnding"), w.consume(K), w.exit("lineEnding"), D;
    }
    function D(K) {
      return w.enter("codeFencedFence"), fe(K) ? xe(
        w,
        j,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(K) : j(K);
    }
    function j(K) {
      return K === a ? (w.enter("codeFencedFenceSequence"), V(K)) : q(K);
    }
    function V(K) {
      return K === a ? (B++, w.consume(K), V) : B >= l ? (w.exit("codeFencedFenceSequence"), fe(K) ? xe(w, H, "whitespace")(K) : H(K)) : q(K);
    }
    function H(K) {
      return K === null || X(K) ? (w.exit("codeFencedFence"), z(K)) : q(K);
    }
  }
}
function Ds(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const jt = {
  name: "codeIndented",
  tokenize: js
}, Ls = {
  tokenize: Ns,
  partial: !0
};
function js(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), xe(e, o, "linePrefix", 4 + 1)(s);
  }
  function o(s) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(s) : n(s);
  }
  function l(s) {
    return s === null ? u(s) : X(s) ? e.attempt(Ls, l, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || X(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Ns(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : xe(e, o, "linePrefix", 4 + 1)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : X(l) ? i(l) : n(l);
  }
}
const zs = {
  name: "codeText",
  tokenize: Bs,
  resolve: Ms,
  previous: $s
};
function Ms(e) {
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
function $s(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Bs(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(f));
  }
  function s(f) {
    return f === null || f === 32 || f === 96 || X(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), s);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", s(f));
  }
}
function nl(e) {
  const t = {};
  let n = -1, r, i, o, l, a, u, s;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Us(e, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o-- && (l = e[o], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, n), a.unshift(r), Je(e, i, n - i + 1, a));
    }
  }
  return !s;
}
function Us(e, t) {
  const n = e[t][1], r = e[t][2];
  let i = t - 1;
  const o = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, u = [], s = {};
  let c, f, m = -1, p = n, d = 0, g = 0;
  const x = [g];
  for (; p; ) {
    for (; e[++i][1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = n; ++m < a.length; )
    // Find a void token that includes a break.
    a[m][0] === "exit" && a[m - 1][0] === "enter" && a[m][1].type === a[m - 1][1].type && a[m][1].start.line !== a[m][1].end.line && (g = m + 1, x.push(g), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : x.pop(), m = x.length; m--; ) {
    const k = a.slice(x[m], x[m + 1]), A = o.pop();
    u.unshift([A, A + k.length - 1]), Je(e, A, 2, k);
  }
  for (m = -1; ++m < u.length; )
    s[d + u[m][0]] = d + u[m][1], d += u[m][1] - u[m][0] - 1;
  return s;
}
const qs = {
  tokenize: Ws,
  resolve: Vs
}, Hs = {
  tokenize: Ys,
  partial: !0
};
function Vs(e) {
  return nl(e), e;
}
function Ws(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : X(a) ? e.check(
      Hs,
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
function Ys(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), xe(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || X(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function tl(e, t, n, r, i, o, l, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), m) : k === null || k === 32 || k === 41 || or(k) ? n(k) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(k));
  }
  function m(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), m(k)) : k === null || k === 60 || X(k) ? n(k) : (e.consume(k), k === 92 ? d : p);
  }
  function d(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k);
  }
  function g(k) {
    return !c && (k === null || k === 41 || _e(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(k)) : c < s && k === 40 ? (e.consume(k), c++, g) : k === 41 ? (e.consume(k), c--, g) : k === null || k === 32 || k === 40 || or(k) ? n(k) : (e.consume(k), k === 92 ? x : g);
  }
  function x(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), g) : g(k);
  }
}
function rl(e, t, n, r, i, o) {
  const l = this;
  let a = 0, u;
  return s;
  function s(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), c;
  }
  function c(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : X(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || X(p) || a++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), u || (u = !fe(p)), p === 92 ? m : f);
  }
  function m(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function il(e, t, n, r, i, o) {
  let l;
  return a;
  function a(m) {
    return m === 34 || m === 39 || m === 40 ? (e.enter(r), e.enter(i), e.consume(m), e.exit(i), l = m === 40 ? 41 : m, u) : n(m);
  }
  function u(m) {
    return m === l ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : (e.enter(o), s(m));
  }
  function s(m) {
    return m === l ? (e.exit(o), u(l)) : m === null ? n(m) : X(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), xe(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(m));
  }
  function c(m) {
    return m === l || m === null || X(m) ? (e.exit("chunkString"), s(m)) : (e.consume(m), m === 92 ? f : c);
  }
  function f(m) {
    return m === l || m === 92 ? (e.consume(m), c) : c(m);
  }
}
function Ln(e, t) {
  let n;
  return r;
  function r(i) {
    return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : fe(i) ? xe(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(i) : t(i);
  }
}
function xn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Gs = {
  name: "definition",
  tokenize: Ks
}, Js = {
  tokenize: Xs,
  partial: !0
};
function Ks(e, t, n) {
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
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return i = xn(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : n(p);
  }
  function u(p) {
    return _e(p) ? Ln(e, s)(p) : s(p);
  }
  function s(p) {
    return tl(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function c(p) {
    return e.attempt(Js, f, f)(p);
  }
  function f(p) {
    return fe(p) ? xe(e, m, "whitespace")(p) : m(p);
  }
  function m(p) {
    return p === null || X(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function Xs(e, t, n) {
  return r;
  function r(a) {
    return _e(a) ? Ln(e, i)(a) : n(a);
  }
  function i(a) {
    return il(
      e,
      o,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function o(a) {
    return fe(a) ? xe(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || X(a) ? t(a) : n(a);
  }
}
const Qs = {
  name: "hardBreakEscape",
  tokenize: Zs
};
function Zs(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return X(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const ec = {
  name: "headingAtx",
  tokenize: tc,
  resolve: nc
};
function nc(e, t) {
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
function tc(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || _e(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : fe(c) ? xe(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), s(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), a(c));
  }
  function s(c) {
    return c === null || c === 35 || _e(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), s);
  }
}
const rc = [
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
], Di = ["pre", "script", "style", "textarea"], ic = {
  name: "htmlFlow",
  tokenize: uc,
  resolveTo: ac,
  concrete: !0
}, oc = {
  tokenize: cc,
  partial: !0
}, lc = {
  tokenize: sc,
  partial: !0
};
function ac(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function uc(e, t, n) {
  const r = this;
  let i, o, l, a, u;
  return s;
  function s(y) {
    return c(y);
  }
  function c(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), f;
  }
  function f(y) {
    return y === 33 ? (e.consume(y), m) : y === 47 ? (e.consume(y), o = !0, g) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : h) : Ge(y) ? (e.consume(y), l = String.fromCharCode(y), x) : n(y);
  }
  function m(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, a = 0, d) : Ge(y) ? (e.consume(y), i = 4, r.interrupt ? t : h) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : h) : n(y);
  }
  function d(y) {
    const U = "CDATA[";
    return y === U.charCodeAt(a++) ? (e.consume(y), a === U.length ? r.interrupt ? t : j : d) : n(y);
  }
  function g(y) {
    return Ge(y) ? (e.consume(y), l = String.fromCharCode(y), x) : n(y);
  }
  function x(y) {
    if (y === null || y === 47 || y === 62 || _e(y)) {
      const U = y === 47, ne = l.toLowerCase();
      return !U && !o && Di.includes(ne) ? (i = 1, r.interrupt ? t(y) : j(y)) : rc.includes(l.toLowerCase()) ? (i = 6, U ? (e.consume(y), k) : r.interrupt ? t(y) : j(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? A(y) : C(y));
    }
    return y === 45 || Ne(y) ? (e.consume(y), l += String.fromCharCode(y), x) : n(y);
  }
  function k(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : j) : n(y);
  }
  function A(y) {
    return fe(y) ? (e.consume(y), A) : E(y);
  }
  function C(y) {
    return y === 47 ? (e.consume(y), E) : y === 58 || y === 95 || Ge(y) ? (e.consume(y), I) : fe(y) ? (e.consume(y), C) : E(y);
  }
  function I(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Ne(y) ? (e.consume(y), I) : S(y);
  }
  function S(y) {
    return y === 61 ? (e.consume(y), w) : fe(y) ? (e.consume(y), S) : C(y);
  }
  function w(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), u = y, z) : fe(y) ? (e.consume(y), w) : q(y);
  }
  function z(y) {
    return y === u ? (e.consume(y), u = null, B) : y === null || X(y) ? n(y) : (e.consume(y), z);
  }
  function q(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || _e(y) ? S(y) : (e.consume(y), q);
  }
  function B(y) {
    return y === 47 || y === 62 || fe(y) ? C(y) : n(y);
  }
  function E(y) {
    return y === 62 ? (e.consume(y), D) : n(y);
  }
  function D(y) {
    return y === null || X(y) ? j(y) : fe(y) ? (e.consume(y), D) : n(y);
  }
  function j(y) {
    return y === 45 && i === 2 ? (e.consume(y), ae) : y === 60 && i === 1 ? (e.consume(y), pe) : y === 62 && i === 4 ? (e.consume(y), _) : y === 63 && i === 3 ? (e.consume(y), h) : y === 93 && i === 5 ? (e.consume(y), Ae) : X(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(
      oc,
      W,
      V
    )(y)) : y === null || X(y) ? (e.exit("htmlFlowData"), V(y)) : (e.consume(y), j);
  }
  function V(y) {
    return e.check(
      lc,
      H,
      W
    )(y);
  }
  function H(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), K;
  }
  function K(y) {
    return y === null || X(y) ? V(y) : (e.enter("htmlFlowData"), j(y));
  }
  function ae(y) {
    return y === 45 ? (e.consume(y), h) : j(y);
  }
  function pe(y) {
    return y === 47 ? (e.consume(y), l = "", we) : j(y);
  }
  function we(y) {
    if (y === 62) {
      const U = l.toLowerCase();
      return Di.includes(U) ? (e.consume(y), _) : j(y);
    }
    return Ge(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), we) : j(y);
  }
  function Ae(y) {
    return y === 93 ? (e.consume(y), h) : j(y);
  }
  function h(y) {
    return y === 62 ? (e.consume(y), _) : y === 45 && i === 2 ? (e.consume(y), h) : j(y);
  }
  function _(y) {
    return y === null || X(y) ? (e.exit("htmlFlowData"), W(y)) : (e.consume(y), _);
  }
  function W(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function sc(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function cc(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(gt, t, n);
  }
}
const fc = {
  name: "htmlText",
  tokenize: pc
};
function pc(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), u;
  }
  function u(h) {
    return h === 33 ? (e.consume(h), s) : h === 47 ? (e.consume(h), S) : h === 63 ? (e.consume(h), C) : Ge(h) ? (e.consume(h), q) : n(h);
  }
  function s(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), o = 0, d) : Ge(h) ? (e.consume(h), A) : n(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), p) : n(h);
  }
  function f(h) {
    return h === null ? n(h) : h === 45 ? (e.consume(h), m) : X(h) ? (l = f, pe(h)) : (e.consume(h), f);
  }
  function m(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? ae(h) : h === 45 ? m(h) : f(h);
  }
  function d(h) {
    const _ = "CDATA[";
    return h === _.charCodeAt(o++) ? (e.consume(h), o === _.length ? g : d) : n(h);
  }
  function g(h) {
    return h === null ? n(h) : h === 93 ? (e.consume(h), x) : X(h) ? (l = g, pe(h)) : (e.consume(h), g);
  }
  function x(h) {
    return h === 93 ? (e.consume(h), k) : g(h);
  }
  function k(h) {
    return h === 62 ? ae(h) : h === 93 ? (e.consume(h), k) : g(h);
  }
  function A(h) {
    return h === null || h === 62 ? ae(h) : X(h) ? (l = A, pe(h)) : (e.consume(h), A);
  }
  function C(h) {
    return h === null ? n(h) : h === 63 ? (e.consume(h), I) : X(h) ? (l = C, pe(h)) : (e.consume(h), C);
  }
  function I(h) {
    return h === 62 ? ae(h) : C(h);
  }
  function S(h) {
    return Ge(h) ? (e.consume(h), w) : n(h);
  }
  function w(h) {
    return h === 45 || Ne(h) ? (e.consume(h), w) : z(h);
  }
  function z(h) {
    return X(h) ? (l = z, pe(h)) : fe(h) ? (e.consume(h), z) : ae(h);
  }
  function q(h) {
    return h === 45 || Ne(h) ? (e.consume(h), q) : h === 47 || h === 62 || _e(h) ? B(h) : n(h);
  }
  function B(h) {
    return h === 47 ? (e.consume(h), ae) : h === 58 || h === 95 || Ge(h) ? (e.consume(h), E) : X(h) ? (l = B, pe(h)) : fe(h) ? (e.consume(h), B) : ae(h);
  }
  function E(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Ne(h) ? (e.consume(h), E) : D(h);
  }
  function D(h) {
    return h === 61 ? (e.consume(h), j) : X(h) ? (l = D, pe(h)) : fe(h) ? (e.consume(h), D) : B(h);
  }
  function j(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), i = h, V) : X(h) ? (l = j, pe(h)) : fe(h) ? (e.consume(h), j) : (e.consume(h), H);
  }
  function V(h) {
    return h === i ? (e.consume(h), i = void 0, K) : h === null ? n(h) : X(h) ? (l = V, pe(h)) : (e.consume(h), V);
  }
  function H(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || _e(h) ? B(h) : (e.consume(h), H);
  }
  function K(h) {
    return h === 47 || h === 62 || _e(h) ? B(h) : n(h);
  }
  function ae(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
  }
  function pe(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), we;
  }
  function we(h) {
    return fe(h) ? xe(
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
const Tr = {
  name: "labelEnd",
  tokenize: bc,
  resolveTo: yc,
  resolveAll: gc
}, hc = {
  tokenize: xc
}, dc = {
  tokenize: kc
}, mc = {
  tokenize: wc
};
function gc(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function yc(e, t) {
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
  const u = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, s = {
    type: "label",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[l][1].end)
  }, c = {
    type: "labelText",
    start: Object.assign({}, e[o + r + 2][1].end),
    end: Object.assign({}, e[l - 2][1].start)
  };
  return a = [
    ["enter", u, t],
    ["enter", s, t]
  ], a = $e(a, e.slice(o + 1, o + r + 3)), a = $e(a, [["enter", c, t]]), a = $e(
    a,
    vr(
      t.parser.constructs.insideSpan.null,
      e.slice(o + r + 4, l - 3),
      t
    )
  ), a = $e(a, [
    ["exit", c, t],
    e[l - 2],
    e[l - 1],
    ["exit", s, t]
  ]), a = $e(a, e.slice(l + 1)), a = $e(a, [["exit", u, t]]), Je(e, o, e.length, a), e;
}
function bc(e, t, n) {
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
      xn(
        r.sliceSerialize({
          start: o.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(m), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(m);
  }
  function u(m) {
    return m === 40 ? e.attempt(
      hc,
      c,
      l ? c : f
    )(m) : m === 91 ? e.attempt(
      dc,
      c,
      l ? s : f
    )(m) : l ? c(m) : f(m);
  }
  function s(m) {
    return e.attempt(
      mc,
      c,
      f
    )(m);
  }
  function c(m) {
    return t(m);
  }
  function f(m) {
    return o._balanced = !0, n(m);
  }
}
function xc(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return _e(f) ? Ln(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : tl(
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
    return _e(f) ? Ln(e, u)(f) : c(f);
  }
  function a(f) {
    return n(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40 ? il(
      e,
      s,
      n,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(f) : c(f);
  }
  function s(f) {
    return _e(f) ? Ln(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function kc(e, t, n) {
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
      xn(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function wc(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Ec = {
  name: "labelStartImage",
  tokenize: Sc,
  resolveAll: Tr.resolveAll
};
function Sc(e, t, n) {
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
const vc = {
  name: "labelStartLink",
  tokenize: Cc,
  resolveAll: Tr.resolveAll
};
function Cc(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Nt = {
  name: "lineEnding",
  tokenize: Tc
};
function Tc(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), xe(e, t, "linePrefix");
  }
}
const ot = {
  name: "thematicBreak",
  tokenize: Ac
};
function Ac(e, t, n) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), l(s);
  }
  function l(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || X(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), fe(s) ? xe(e, a, "whitespace")(s) : a(s));
  }
}
const Fe = {
  name: "list",
  tokenize: Rc,
  continuation: {
    tokenize: Fc
  },
  exit: Ic
}, Pc = {
  tokenize: Dc,
  partial: !0
}, Oc = {
  tokenize: _c,
  partial: !0
};
function Rc(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const d = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : lr(p)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(ot, n, s)(p) : s(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return n(p);
  }
  function u(p) {
    return lr(p) && ++l < 10 ? (e.consume(p), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), s(p)) : n(p);
  }
  function s(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      gt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(
        Pc,
        m,
        f
      )
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, m(p);
  }
  function f(p) {
    return fe(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), m) : n(p);
  }
  function m(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Fc(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(gt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, xe(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !fe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Oc, t, l)(a));
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
function _c(e, t, n) {
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
function Ic(e) {
  e.exit(this.containerState.type);
}
function Dc(e, t, n) {
  const r = this;
  return xe(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !fe(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Li = {
  name: "setextUnderline",
  tokenize: jc,
  resolveTo: Lc
};
function Lc(e, t) {
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
function jc(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(s) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = s, l(s)) : n(s);
  }
  function l(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), fe(s) ? xe(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || X(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Nc = {
  tokenize: zc
};
function zc(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    gt,
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
          e.attempt(qs, i)
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
const Mc = {
  resolveAll: ll()
}, $c = ol("string"), Bc = ol("text");
function ol(e) {
  return {
    tokenize: t,
    resolveAll: ll(
      e === "text" ? Uc : void 0
    )
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, a);
    return l;
    function l(c) {
      return s(c) ? o(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), u;
    }
    function u(c) {
      return s(c) ? (n.exit("data"), o(c)) : (n.consume(c), u);
    }
    function s(c) {
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
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function Uc(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, l = -1, a = 0, u;
      for (; o--; ) {
        const s = i[o];
        if (typeof s == "string") {
          for (l = s.length; s.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l)
            break;
          l = -1;
        } else if (s === -2)
          u = !0, a++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const s = {
          type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + o,
            _bufferIndex: o ? l : r.start._bufferIndex + l
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, s.start), r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(
          n,
          0,
          ["enter", s, t],
          ["exit", s, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function qc(e, t, n) {
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
  const u = {
    consume: A,
    enter: C,
    exit: I,
    attempt: z(S),
    check: z(w),
    interrupt: z(w, {
      interrupt: !0
    })
  }, s = {
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
  let c = t.tokenize.call(s, u);
  return t.resolveAll && o.push(t), s;
  function f(D) {
    return l = $e(l, D), x(), l[l.length - 1] !== null ? [] : (q(t, 0), s.events = vr(o, s.events, s), s.events);
  }
  function m(D, j) {
    return Vc(p(D), j);
  }
  function p(D) {
    return Hc(l, D);
  }
  function d() {
    const { line: D, column: j, offset: V, _index: H, _bufferIndex: K } = r;
    return {
      line: D,
      column: j,
      offset: V,
      _index: H,
      _bufferIndex: K
    };
  }
  function g(D) {
    i[D.line] = D.column, E();
  }
  function x() {
    let D;
    for (; r._index < l.length; ) {
      const j = l[r._index];
      if (typeof j == "string")
        for (D = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === D && r._bufferIndex < j.length; )
          k(j.charCodeAt(r._bufferIndex));
      else
        k(j);
    }
  }
  function k(D) {
    c = c(D);
  }
  function A(D) {
    X(D) ? (r.line++, r.column = 1, r.offset += D === -3 ? 2 : 1, E()) : D !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = D;
  }
  function C(D, j) {
    const V = j || {};
    return V.type = D, V.start = d(), s.events.push(["enter", V, s]), a.push(V), V;
  }
  function I(D) {
    const j = a.pop();
    return j.end = d(), s.events.push(["exit", j, s]), j;
  }
  function S(D, j) {
    q(D, j.from);
  }
  function w(D, j) {
    j.restore();
  }
  function z(D, j) {
    return V;
    function V(H, K, ae) {
      let pe, we, Ae, h;
      return Array.isArray(H) ? W(H) : "tokenize" in H ? (
        // @ts-expect-error Looks like a construct.
        W([H])
      ) : _(H);
      function _(M) {
        return G;
        function G(J) {
          const te = J !== null && M[J], Q = J !== null && M.null, Ee = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(te) ? te : te ? [te] : [],
            ...Array.isArray(Q) ? Q : Q ? [Q] : []
          ];
          return W(Ee)(J);
        }
      }
      function W(M) {
        return pe = M, we = 0, M.length === 0 ? ae : y(M[we]);
      }
      function y(M) {
        return G;
        function G(J) {
          return h = B(), Ae = M, M.partial || (s.currentConstruct = M), M.name && s.parser.constructs.disable.null.includes(M.name) ? ne() : M.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            j ? Object.assign(Object.create(s), j) : s,
            u,
            U,
            ne
          )(J);
        }
      }
      function U(M) {
        return D(Ae, h), K;
      }
      function ne(M) {
        return h.restore(), ++we < pe.length ? y(pe[we]) : ae;
      }
    }
  }
  function q(D, j) {
    D.resolveAll && !o.includes(D) && o.push(D), D.resolve && Je(
      s.events,
      j,
      s.events.length - j,
      D.resolve(s.events.slice(j), s)
    ), D.resolveTo && (s.events = D.resolveTo(s.events, s));
  }
  function B() {
    const D = d(), j = s.previous, V = s.currentConstruct, H = s.events.length, K = Array.from(a);
    return {
      restore: ae,
      from: H
    };
    function ae() {
      r = D, s.previous = j, s.currentConstruct = V, s.events.length = H, a = K, E();
    }
  }
  function E() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Hc(e, t) {
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
function Vc(e, t) {
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
const Wc = {
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
}, Yc = {
  91: Gs
}, Gc = {
  [-2]: jt,
  [-1]: jt,
  32: jt
}, Jc = {
  35: ec,
  42: ot,
  45: [Li, ot],
  60: ic,
  61: Li,
  95: ot,
  96: Ii,
  126: Ii
}, Kc = {
  38: el,
  92: Zo
}, Xc = {
  [-5]: Nt,
  [-4]: Nt,
  [-3]: Nt,
  33: Ec,
  38: el,
  42: ar,
  60: [Cs, fc],
  91: vc,
  92: [Qs, Zo],
  93: Tr,
  95: ar,
  96: zs
}, Qc = {
  null: [ar, Mc]
}, Zc = {
  null: [42, 95]
}, ef = {
  null: []
}, nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Zc,
  contentInitial: Yc,
  disable: ef,
  document: Wc,
  flow: Jc,
  flowInitial: Gc,
  insideSpan: Qc,
  string: Kc,
  text: Xc
}, Symbol.toStringTag, { value: "Module" }));
function tf(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    ss([nf, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: i(bs),
    document: i(ks),
    flow: i(Nc),
    string: i($c),
    text: i(Bc)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return qc(r, o, a);
    }
  }
}
const ji = /[\0\t\n\r]/g;
function rf() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const u = [];
    let s, c, f, m, p;
    for (o = t + o.toString(l), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length; ) {
      if (ji.lastIndex = f, s = ji.exec(o), m = s && s.index !== void 0 ? s.index : o.length, p = o.charCodeAt(m), !s) {
        t = o.slice(f);
        break;
      }
      if (p === 10 && f === m && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), f < m && (u.push(o.slice(f, m)), e += m - f), p) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c; )
              u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = m + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
function of(e) {
  for (; !nl(e); )
    ;
  return e;
}
function al(e, t) {
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
const lf = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function af(e) {
  return e.replace(lf, uf);
}
function uf(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return al(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Cr(n) || e;
}
const ul = {}.hasOwnProperty, sf = (
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
    return typeof t != "string" && (n = t, t = void 0), cf(n)(
      of(
        tf(n).document().write(rf()(e, t, !0))
      )
    );
  }
);
function cf(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Vn),
      autolinkProtocol: D,
      autolinkEmail: D,
      atxHeading: a(ze),
      blockQuote: a(Ee),
      characterEscape: D,
      characterReference: D,
      codeFenced: a(L),
      codeFencedFenceInfo: u,
      codeFencedFenceMeta: u,
      codeIndented: a(L, u),
      codeText: a(Pe, u),
      codeTextData: D,
      data: D,
      codeFlowValue: D,
      definition: a($),
      definitionDestinationString: u,
      definitionLabelString: u,
      definitionTitleString: u,
      emphasis: a(Ie),
      hardBreakEscape: a(nn),
      hardBreakTrailing: a(nn),
      htmlFlow: a(Tn, u),
      htmlFlowData: D,
      htmlText: a(Tn, u),
      htmlTextData: D,
      image: a(dn),
      label: u,
      link: a(Vn),
      listItem: a(An),
      listItemValue: d,
      listOrdered: a(Wn, p),
      listUnordered: a(Wn),
      paragraph: a(wt),
      reference: ne,
      referenceString: u,
      resourceDestinationString: u,
      resourceTitleString: u,
      setextHeading: a(ze),
      strong: a(Et),
      thematicBreak: a(Gn)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: z,
      autolink: c(),
      autolinkEmail: Q,
      autolinkProtocol: te,
      blockQuote: c(),
      characterEscapeValue: j,
      characterReferenceMarkerHexadecimal: G,
      characterReferenceMarkerNumeric: G,
      characterReferenceValue: J,
      codeFenced: c(A),
      codeFencedFence: k,
      codeFencedFenceInfo: g,
      codeFencedFenceMeta: x,
      codeFlowValue: j,
      codeIndented: c(C),
      codeText: c(pe),
      codeTextData: j,
      data: j,
      definition: c(),
      definitionDestinationString: w,
      definitionLabelString: I,
      definitionTitleString: S,
      emphasis: c(),
      hardBreakEscape: c(H),
      hardBreakTrailing: c(H),
      htmlFlow: c(K),
      htmlFlowData: j,
      htmlText: c(ae),
      htmlTextData: j,
      image: c(Ae),
      label: _,
      labelText: h,
      lineEnding: V,
      link: c(we),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: M,
      resourceDestinationString: W,
      resourceTitleString: y,
      resource: U,
      setextHeading: c(E),
      setextHeadingLineSequence: B,
      setextHeadingText: q,
      strong: c(),
      thematicBreak: c()
    }
  };
  sl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(v) {
    let F = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [F],
      tokenStack: [],
      config: t,
      enter: s,
      exit: f,
      buffer: u,
      resume: m,
      setData: o,
      getData: l
    }, ue = [];
    let se = -1;
    for (; ++se < v.length; )
      if (v[se][1].type === "listOrdered" || v[se][1].type === "listUnordered")
        if (v[se][0] === "enter")
          ue.push(se);
        else {
          const De = ue.pop();
          se = i(v, De, se);
        }
    for (se = -1; ++se < v.length; ) {
      const De = t[v[se][0]];
      ul.call(De, v[se][1].type) && De[v[se][1].type].call(
        Object.assign(
          {
            sliceSerialize: v[se][2].sliceSerialize
          },
          Y
        ),
        v[se][1]
      );
    }
    if (Y.tokenStack.length > 0) {
      const De = Y.tokenStack[Y.tokenStack.length - 1];
      (De[1] || Ni).call(Y, void 0, De[0]);
    }
    for (F.position = {
      start: rn(
        v.length > 0 ? v[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: rn(
        v.length > 0 ? v[v.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, se = -1; ++se < t.transforms.length; )
      F = t.transforms[se](F) || F;
    return F;
  }
  function i(v, F, Y) {
    let ue = F - 1, se = -1, De = !1, We, He, an, un;
    for (; ++ue <= Y; ) {
      const ke = v[ue];
      if (ke[1].type === "listUnordered" || ke[1].type === "listOrdered" || ke[1].type === "blockQuote" ? (ke[0] === "enter" ? se++ : se--, un = void 0) : ke[1].type === "lineEndingBlank" ? ke[0] === "enter" && (We && !un && !se && !an && (an = ue), un = void 0) : ke[1].type === "linePrefix" || ke[1].type === "listItemValue" || ke[1].type === "listItemMarker" || ke[1].type === "listItemPrefix" || ke[1].type === "listItemPrefixWhitespace" || (un = void 0), !se && ke[0] === "enter" && ke[1].type === "listItemPrefix" || se === -1 && ke[0] === "exit" && (ke[1].type === "listUnordered" || ke[1].type === "listOrdered")) {
        if (We) {
          let Pn = ue;
          for (He = void 0; Pn--; ) {
            const Le = v[Pn];
            if (Le[1].type === "lineEnding" || Le[1].type === "lineEndingBlank") {
              if (Le[0] === "exit")
                continue;
              He && (v[He][1].type = "lineEndingBlank", De = !0), Le[1].type = "lineEnding", He = Pn;
            } else if (!(Le[1].type === "linePrefix" || Le[1].type === "blockQuotePrefix" || Le[1].type === "blockQuotePrefixWhitespace" || Le[1].type === "blockQuoteMarker" || Le[1].type === "listItemIndent"))
              break;
          }
          an && (!He || an < He) && (We._spread = !0), We.end = Object.assign(
            {},
            He ? v[He][1].start : ke[1].end
          ), v.splice(He || ue, 0, ["exit", We, ke[2]]), ue++, Y++;
        }
        ke[1].type === "listItemPrefix" && (We = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, ke[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, v.splice(ue, 0, ["enter", We, ke[2]]), ue++, Y++, an = void 0, un = !0);
      }
    }
    return v[F][1]._spread = De, Y;
  }
  function o(v, F) {
    n[v] = F;
  }
  function l(v) {
    return n[v];
  }
  function a(v, F) {
    return Y;
    function Y(ue) {
      s.call(this, v(ue), ue), F && F.call(this, ue);
    }
  }
  function u() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(v, F, Y) {
    return this.stack[this.stack.length - 1].children.push(v), this.stack.push(v), this.tokenStack.push([F, Y]), v.position = {
      start: rn(F.start)
    }, v;
  }
  function c(v) {
    return F;
    function F(Y) {
      v && v.call(this, Y), f.call(this, Y);
    }
  }
  function f(v, F) {
    const Y = this.stack.pop(), ue = this.tokenStack.pop();
    if (ue)
      ue[0].type !== v.type && (F ? F.call(this, v, ue[0]) : (ue[1] || Ni).call(this, v, ue[0]));
    else
      throw new Error(
        "Cannot close `" + v.type + "` (" + Dn({
          start: v.start,
          end: v.end
        }) + "): it’s not open"
      );
    return Y.position.end = rn(v.end), Y;
  }
  function m() {
    return as(this.stack.pop());
  }
  function p() {
    o("expectingFirstListItemValue", !0);
  }
  function d(v) {
    if (l("expectingFirstListItemValue")) {
      const F = this.stack[this.stack.length - 2];
      F.start = Number.parseInt(this.sliceSerialize(v), 10), o("expectingFirstListItemValue");
    }
  }
  function g() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.lang = v;
  }
  function x() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.meta = v;
  }
  function k() {
    l("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
  }
  function A() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside");
  }
  function C() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = v.replace(/(\r?\n|\r)$/g, "");
  }
  function I(v) {
    const F = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = F, Y.identifier = xn(
      this.sliceSerialize(v)
    ).toLowerCase();
  }
  function S() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = v;
  }
  function w() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = v;
  }
  function z(v) {
    const F = this.stack[this.stack.length - 1];
    if (!F.depth) {
      const Y = this.sliceSerialize(v).length;
      F.depth = Y;
    }
  }
  function q() {
    o("setextHeadingSlurpLineEnding", !0);
  }
  function B(v) {
    const F = this.stack[this.stack.length - 1];
    F.depth = this.sliceSerialize(v).charCodeAt(0) === 61 ? 1 : 2;
  }
  function E() {
    o("setextHeadingSlurpLineEnding");
  }
  function D(v) {
    const F = this.stack[this.stack.length - 1];
    let Y = F.children[F.children.length - 1];
    (!Y || Y.type !== "text") && (Y = Yn(), Y.position = {
      start: rn(v.start)
    }, F.children.push(Y)), this.stack.push(Y);
  }
  function j(v) {
    const F = this.stack.pop();
    F.value += this.sliceSerialize(v), F.position.end = rn(v.end);
  }
  function V(v) {
    const F = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const Y = F.children[F.children.length - 1];
      Y.position.end = rn(v.end), o("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(F.type) && (D.call(this, v), j.call(this, v));
  }
  function H() {
    o("atHardBreak", !0);
  }
  function K() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = v;
  }
  function ae() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = v;
  }
  function pe() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = v;
  }
  function we() {
    const v = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const F = l("referenceType") || "shortcut";
      v.type += "Reference", v.referenceType = F, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    o("referenceType");
  }
  function Ae() {
    const v = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const F = l("referenceType") || "shortcut";
      v.type += "Reference", v.referenceType = F, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    o("referenceType");
  }
  function h(v) {
    const F = this.sliceSerialize(v), Y = this.stack[this.stack.length - 2];
    Y.label = af(F), Y.identifier = xn(F).toLowerCase();
  }
  function _() {
    const v = this.stack[this.stack.length - 1], F = this.resume(), Y = this.stack[this.stack.length - 1];
    if (o("inReference", !0), Y.type === "link") {
      const ue = v.children;
      Y.children = ue;
    } else
      Y.alt = F;
  }
  function W() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = v;
  }
  function y() {
    const v = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = v;
  }
  function U() {
    o("inReference");
  }
  function ne() {
    o("referenceType", "collapsed");
  }
  function M(v) {
    const F = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = F, Y.identifier = xn(
      this.sliceSerialize(v)
    ).toLowerCase(), o("referenceType", "full");
  }
  function G(v) {
    o("characterReferenceType", v.type);
  }
  function J(v) {
    const F = this.sliceSerialize(v), Y = l("characterReferenceType");
    let ue;
    Y ? (ue = al(
      F,
      Y === "characterReferenceMarkerNumeric" ? 10 : 16
    ), o("characterReferenceType")) : ue = Cr(F);
    const se = this.stack.pop();
    se.value += ue, se.position.end = rn(v.end);
  }
  function te(v) {
    j.call(this, v);
    const F = this.stack[this.stack.length - 1];
    F.url = this.sliceSerialize(v);
  }
  function Q(v) {
    j.call(this, v);
    const F = this.stack[this.stack.length - 1];
    F.url = "mailto:" + this.sliceSerialize(v);
  }
  function Ee() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function L() {
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
  function ze() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function nn() {
    return {
      type: "break"
    };
  }
  function Tn() {
    return {
      type: "html",
      value: ""
    };
  }
  function dn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Vn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Wn(v) {
    return {
      type: "list",
      ordered: v.type === "listOrdered",
      start: null,
      spread: v._spread,
      children: []
    };
  }
  function An(v) {
    return {
      type: "listItem",
      spread: v._spread,
      checked: null,
      children: []
    };
  }
  function wt() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Et() {
    return {
      type: "strong",
      children: []
    };
  }
  function Yn() {
    return {
      type: "text",
      value: ""
    };
  }
  function Gn() {
    return {
      type: "thematicBreak"
    };
  }
}
function rn(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function sl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? sl(e, r) : ff(e, r);
  }
}
function ff(e, t) {
  let n;
  for (n in t)
    if (ul.call(t, n)) {
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
function Ni(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + Dn({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Dn({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + Dn({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function pf(e) {
  Object.assign(this, { Parser: (n) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return sf(
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
function hf(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function df(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function mf(e, t) {
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
function gf(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yf(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vn(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && Ne(e.charCodeAt(n + 1)) && Ne(e.charCodeAt(n + 2)))
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
function cl(e, t) {
  const n = String(t.identifier).toUpperCase(), r = vn(n.toLowerCase()), i = e.footnoteOrder.indexOf(n);
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
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [a]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function bf(e, t) {
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
  }, cl(e, {
    type: "footnoteReference",
    identifier: i,
    position: t.position
  });
}
function xf(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function kf(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function fl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function wf(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return fl(e, t);
  const r = { src: vn(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function Ef(e, t) {
  const n = { src: vn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Sf(e, t) {
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
function vf(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return fl(e, t);
  const r = { href: vn(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function Cf(e, t) {
  const n = { href: vn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Tf(e, t, n) {
  const r = e.all(t), i = n ? Af(n) : pl(t), o = {}, l = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? l.push(...c.children) : l.push(c);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && l.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, s), e.applyData(t, s);
}
function Af(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = pl(n[r]);
  }
  return t;
}
function pl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Pf(e, t) {
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
function Of(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rf(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ff(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ar = hl("start"), Pr = hl("end");
function _f(e) {
  return { start: Ar(e), end: Pr(e) };
}
function hl(e) {
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
function If(e, t) {
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
    }, a = Ar(t.children[1]), u = Pr(t.children[t.children.length - 1]);
    a.line && u.line && (l.position = { start: a, end: u }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Df(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const f = t.children[u], m = {}, p = l ? l[u] : void 0;
    p && (m.align = p);
    let d = { type: "element", tagName: o, properties: m, children: [] };
    f && (d.children = e.all(f), e.patch(f, d), d = e.applyData(t, d)), s.push(d);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Lf(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const zi = 9, Mi = 32;
function jf(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      $i(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push($i(t.slice(i), i > 0, !1)), o.join("");
}
function $i(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === zi || o === Mi; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === zi || o === Mi; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Nf(e, t) {
  const n = { type: "text", value: jf(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function zf(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Mf = {
  blockquote: hf,
  break: df,
  code: mf,
  delete: gf,
  emphasis: yf,
  footnoteReference: cl,
  footnote: bf,
  heading: xf,
  html: kf,
  imageReference: wf,
  image: Ef,
  inlineCode: Sf,
  linkReference: vf,
  link: Cf,
  listItem: Tf,
  list: Pf,
  paragraph: Of,
  root: Rf,
  strong: Ff,
  table: If,
  tableCell: Lf,
  tableRow: Df,
  text: Nf,
  thematicBreak: zf,
  toml: Jn,
  yaml: Jn,
  definition: Jn,
  footnoteDefinition: Jn
};
function Jn() {
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
      return qf;
    if (typeof e == "string")
      return Uf(e);
    if (typeof e == "object")
      return Array.isArray(e) ? $f(e) : Bf(e);
    if (typeof e == "function")
      return yt(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function $f(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = dl(e[n]);
  return yt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].call(this, ...i))
        return !0;
    return !1;
  }
}
function Bf(e) {
  return yt(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function Uf(e) {
  return yt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function yt(e) {
  return t;
  function t(n, ...r) {
    return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r));
  }
}
function qf() {
  return !0;
}
const Hf = !0, Bi = !1, Vf = "skip", Wf = (
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
    const i = dl(t), o = r ? -1 : 1;
    l(e, void 0, [])();
    function l(a, u, s) {
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
        if ((!t || i(a, u, s[s.length - 1] || null)) && (m = Yf(n(a, s)), m[0] === Bi))
          return m;
        if (a.children && m[0] !== Vf)
          for (d = (r ? a.children.length : -1) + o, g = s.concat(a); d > -1 && d < a.children.length; ) {
            if (p = l(a.children[d], d, g)(), p[0] === Bi)
              return p;
            d = typeof p[1] == "number" ? p[1] : d + o;
          }
        return m;
      }
    }
  }
);
function Yf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Hf, e] : [e];
}
const Or = (
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
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), Wf(e, t, i, r);
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
function Gf(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Ui = {}.hasOwnProperty;
function Jf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return Or(e, "definition", (r) => {
    const i = qi(r.identifier);
    i && !Ui.call(t, i) && (t[i] = r);
  }), n;
  function n(r) {
    const i = qi(r);
    return i && Ui.call(t, i) ? t[i] : null;
  }
}
function qi(e) {
  return String(e || "").toUpperCase();
}
const at = {}.hasOwnProperty;
function Kf(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, i = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...Mf, ...n.handlers }, l.definition = Jf(e), l.footnoteById = i, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = Xf, l.applyData = Qf, l.one = a, l.all = u, l.wrap = ep, l.augment = o, Or(e, "footnoteDefinition", (s) => {
    const c = String(s.identifier).toUpperCase();
    at.call(i, c) || (i[c] = s);
  }), l;
  function o(s, c) {
    if (s && "data" in s && s.data) {
      const f = s.data;
      f.hName && (c.type !== "element" && (c = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), c.tagName = f.hName), c.type === "element" && f.hProperties && (c.properties = { ...c.properties, ...f.hProperties }), "children" in c && c.children && f.hChildren && (c.children = f.hChildren);
    }
    if (s) {
      const f = "type" in s ? s : { position: s };
      Gf(f) || (c.position = { start: Ar(f), end: Pr(f) });
    }
    return c;
  }
  function l(s, c, f, m) {
    return Array.isArray(f) && (m = f, f = {}), o(s, {
      type: "element",
      tagName: c,
      properties: f || {},
      children: m || []
    });
  }
  function a(s, c) {
    return ml(l, s, c);
  }
  function u(s) {
    return Rr(l, s);
  }
}
function Xf(e, t) {
  e.position && (t.position = _f(e));
}
function Qf(e, t) {
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
function ml(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return at.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: Rr(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : Zf(e, t);
}
function Rr(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const o = ml(e, r[i], t);
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
function Zf(e, t) {
  const n = t.data || {}, r = "value" in t && !(at.call(n, "hProperties") || at.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: Rr(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ep(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function np(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const i = e.all(r), o = String(r.identifier).toUpperCase(), l = vn(o.toLowerCase());
    let a = 0;
    const u = [];
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
      }), u.length > 0 && u.push({ type: "text", value: " " }), u.push(f);
    }
    const s = i[i.length - 1];
    if (s && s.type === "element" && s.tagName === "p") {
      const f = s.children[s.children.length - 1];
      f && f.type === "text" ? f.value += " " : s.children.push({ type: "text", value: " " }), s.children.push(...u);
    } else
      i.push(...u);
    const c = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + l },
      children: e.wrap(i, !0)
    };
    e.patch(r, c), t.push(c);
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
function gl(e, t) {
  const n = Kf(e, t), r = n.one(e, null), i = np(n);
  return i && r.children.push({ type: "text", value: `
` }, i), Array.isArray(r) ? { type: "root", children: r } : r;
}
const tp = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  function(e, t) {
    return e && "run" in e ? ip(e, t) : op(e || t);
  }
), rp = tp;
function ip(e, t) {
  return (n, r, i) => {
    e.run(gl(n, t), r, (o) => {
      i(o);
    });
  };
}
function op(e) {
  return (t) => gl(t, e);
}
var ur = { exports: {} }, Kn = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function lp() {
  if (Hi)
    return he;
  Hi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (S = S.type, S) {
            case u:
            case s:
            case r:
            case o:
            case i:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case a:
                case c:
                case d:
                case p:
                case l:
                  return S;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function I(S) {
    return C(S) === s;
  }
  return he.AsyncMode = u, he.ConcurrentMode = s, he.ContextConsumer = a, he.ContextProvider = l, he.Element = t, he.ForwardRef = c, he.Fragment = r, he.Lazy = d, he.Memo = p, he.Portal = n, he.Profiler = o, he.StrictMode = i, he.Suspense = f, he.isAsyncMode = function(S) {
    return I(S) || C(S) === u;
  }, he.isConcurrentMode = I, he.isContextConsumer = function(S) {
    return C(S) === a;
  }, he.isContextProvider = function(S) {
    return C(S) === l;
  }, he.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, he.isForwardRef = function(S) {
    return C(S) === c;
  }, he.isFragment = function(S) {
    return C(S) === r;
  }, he.isLazy = function(S) {
    return C(S) === d;
  }, he.isMemo = function(S) {
    return C(S) === p;
  }, he.isPortal = function(S) {
    return C(S) === n;
  }, he.isProfiler = function(S) {
    return C(S) === o;
  }, he.isStrictMode = function(S) {
    return C(S) === i;
  }, he.isSuspense = function(S) {
    return C(S) === f;
  }, he.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === s || S === o || S === i || S === f || S === m || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === p || S.$$typeof === l || S.$$typeof === a || S.$$typeof === c || S.$$typeof === x || S.$$typeof === k || S.$$typeof === A || S.$$typeof === g);
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
var Vi;
function ap() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === r || L === s || L === o || L === i || L === f || L === m || typeof L == "object" && L !== null && (L.$$typeof === d || L.$$typeof === p || L.$$typeof === l || L.$$typeof === a || L.$$typeof === c || L.$$typeof === x || L.$$typeof === k || L.$$typeof === A || L.$$typeof === g);
    }
    function I(L) {
      if (typeof L == "object" && L !== null) {
        var Pe = L.$$typeof;
        switch (Pe) {
          case t:
            var $ = L.type;
            switch ($) {
              case u:
              case s:
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
          case n:
            return Pe;
        }
      }
    }
    var S = u, w = s, z = a, q = l, B = t, E = c, D = r, j = d, V = p, H = n, K = o, ae = i, pe = f, we = !1;
    function Ae(L) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(L) || I(L) === u;
    }
    function h(L) {
      return I(L) === s;
    }
    function _(L) {
      return I(L) === a;
    }
    function W(L) {
      return I(L) === l;
    }
    function y(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function U(L) {
      return I(L) === c;
    }
    function ne(L) {
      return I(L) === r;
    }
    function M(L) {
      return I(L) === d;
    }
    function G(L) {
      return I(L) === p;
    }
    function J(L) {
      return I(L) === n;
    }
    function te(L) {
      return I(L) === o;
    }
    function Q(L) {
      return I(L) === i;
    }
    function Ee(L) {
      return I(L) === f;
    }
    de.AsyncMode = S, de.ConcurrentMode = w, de.ContextConsumer = z, de.ContextProvider = q, de.Element = B, de.ForwardRef = E, de.Fragment = D, de.Lazy = j, de.Memo = V, de.Portal = H, de.Profiler = K, de.StrictMode = ae, de.Suspense = pe, de.isAsyncMode = Ae, de.isConcurrentMode = h, de.isContextConsumer = _, de.isContextProvider = W, de.isElement = y, de.isForwardRef = U, de.isFragment = ne, de.isLazy = M, de.isMemo = G, de.isPortal = J, de.isProfiler = te, de.isStrictMode = Q, de.isSuspense = Ee, de.isValidElementType = C, de.typeOf = I;
  }()), de;
}
var Wi;
function yl() {
  return Wi || (Wi = 1, process.env.NODE_ENV === "production" ? Kn.exports = lp() : Kn.exports = ap()), Kn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zt, Yi;
function up() {
  if (Yi)
    return zt;
  Yi = 1;
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
      var u = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        s[c] = c;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zt = i() ? Object.assign : function(o, l) {
    for (var a, u = r(o), s, c = 1; c < arguments.length; c++) {
      a = Object(arguments[c]);
      for (var f in a)
        t.call(a, f) && (u[f] = a[f]);
      if (e) {
        s = e(a);
        for (var m = 0; m < s.length; m++)
          n.call(a, s[m]) && (u[s[m]] = a[s[m]]);
      }
    }
    return u;
  }, zt;
}
var Mt, Gi;
function Fr() {
  if (Gi)
    return Mt;
  Gi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mt = e, Mt;
}
var $t, Ji;
function bl() {
  return Ji || (Ji = 1, $t = Function.call.bind(Object.prototype.hasOwnProperty)), $t;
}
var Bt, Ki;
function sp() {
  if (Ki)
    return Bt;
  Ki = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fr(), n = {}, r = bl();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(o, l, a, u, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (r(o, c)) {
          var f;
          try {
            if (typeof o[c] != "function") {
              var m = Error(
                (u || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = o[c](l, c, u, a, null, t);
          } catch (d) {
            f = d;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = s ? s() : "";
            e(
              "Failed " + a + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Bt = i, Bt;
}
var Ut, Xi;
function cp() {
  if (Xi)
    return Ut;
  Xi = 1;
  var e = yl(), t = up(), n = Fr(), r = bl(), i = sp(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Ut = function(a, u) {
    var s = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var _ = h && (s && h[s] || h[c]);
      if (typeof _ == "function")
        return _;
    }
    var m = "<<anonymous>>", p = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: A(),
      arrayOf: C,
      element: I(),
      elementType: S(),
      instanceOf: w,
      node: E(),
      objectOf: q,
      oneOf: z,
      oneOfType: B,
      shape: j,
      exact: V
    };
    function d(h, _) {
      return h === _ ? h !== 0 || 1 / h === 1 / _ : h !== h && _ !== _;
    }
    function g(h, _) {
      this.message = h, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function x(h) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, W = 0;
      function y(ne, M, G, J, te, Q, Ee) {
        if (J = J || m, Q = Q || G, Ee !== n) {
          if (u) {
            var L = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw L.name = "Invariant Violation", L;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = J + ":" + G;
            !_[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[Pe] = !0, W++);
          }
        }
        return M[G] == null ? ne ? M[G] === null ? new g("The " + te + " `" + Q + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new g("The " + te + " `" + Q + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : h(M, G, J, te, Q);
      }
      var U = y.bind(null, !1);
      return U.isRequired = y.bind(null, !0), U;
    }
    function k(h) {
      function _(W, y, U, ne, M, G) {
        var J = W[y], te = ae(J);
        if (te !== h) {
          var Q = pe(J);
          return new g(
            "Invalid " + ne + " `" + M + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return x(_);
    }
    function A() {
      return x(l);
    }
    function C(h) {
      function _(W, y, U, ne, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var G = W[y];
        if (!Array.isArray(G)) {
          var J = ae(G);
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected an array."));
        }
        for (var te = 0; te < G.length; te++) {
          var Q = h(G, te, U, ne, M + "[" + te + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return x(_);
    }
    function I() {
      function h(_, W, y, U, ne) {
        var M = _[W];
        if (!a(M)) {
          var G = ae(M);
          return new g("Invalid " + U + " `" + ne + "` of type " + ("`" + G + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(h);
    }
    function S() {
      function h(_, W, y, U, ne) {
        var M = _[W];
        if (!e.isValidElementType(M)) {
          var G = ae(M);
          return new g("Invalid " + U + " `" + ne + "` of type " + ("`" + G + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(h);
    }
    function w(h) {
      function _(W, y, U, ne, M) {
        if (!(W[y] instanceof h)) {
          var G = h.name || m, J = Ae(W[y]);
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return x(_);
    }
    function z(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function _(W, y, U, ne, M) {
        for (var G = W[y], J = 0; J < h.length; J++)
          if (d(G, h[J]))
            return null;
        var te = JSON.stringify(h, function(Ee, L) {
          var Pe = pe(L);
          return Pe === "symbol" ? String(L) : L;
        });
        return new g("Invalid " + ne + " `" + M + "` of value `" + String(G) + "` " + ("supplied to `" + U + "`, expected one of " + te + "."));
      }
      return x(_);
    }
    function q(h) {
      function _(W, y, U, ne, M) {
        if (typeof h != "function")
          return new g("Property `" + M + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var G = W[y], J = ae(G);
        if (J !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected an object."));
        for (var te in G)
          if (r(G, te)) {
            var Q = h(G, te, U, ne, M + "." + te, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return x(_);
    }
    function B(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var _ = 0; _ < h.length; _++) {
        var W = h[_];
        if (typeof W != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(W) + " at index " + _ + "."
          ), l;
      }
      function y(U, ne, M, G, J) {
        for (var te = [], Q = 0; Q < h.length; Q++) {
          var Ee = h[Q], L = Ee(U, ne, M, G, J, n);
          if (L == null)
            return null;
          L.data && r(L.data, "expectedType") && te.push(L.data.expectedType);
        }
        var Pe = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new g("Invalid " + G + " `" + J + "` supplied to " + ("`" + M + "`" + Pe + "."));
      }
      return x(y);
    }
    function E() {
      function h(_, W, y, U, ne) {
        return H(_[W]) ? null : new g("Invalid " + U + " `" + ne + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return x(h);
    }
    function D(h, _, W, y, U) {
      return new g(
        (h || "React class") + ": " + _ + " type `" + W + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function j(h) {
      function _(W, y, U, ne, M) {
        var G = W[y], J = ae(G);
        if (J !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type `" + J + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var te in h) {
          var Q = h[te];
          if (typeof Q != "function")
            return D(U, ne, M, te, pe(Q));
          var Ee = Q(G, te, U, ne, M + "." + te, n);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return x(_);
    }
    function V(h) {
      function _(W, y, U, ne, M) {
        var G = W[y], J = ae(G);
        if (J !== "object")
          return new g("Invalid " + ne + " `" + M + "` of type `" + J + "` " + ("supplied to `" + U + "`, expected `object`."));
        var te = t({}, W[y], h);
        for (var Q in te) {
          var Ee = h[Q];
          if (r(h, Q) && typeof Ee != "function")
            return D(U, ne, M, Q, pe(Ee));
          if (!Ee)
            return new g(
              "Invalid " + ne + " `" + M + "` key `" + Q + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(W[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var L = Ee(G, Q, U, ne, M + "." + Q, n);
          if (L)
            return L;
        }
        return null;
      }
      return x(_);
    }
    function H(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(H);
          if (h === null || a(h))
            return !0;
          var _ = f(h);
          if (_) {
            var W = _.call(h), y;
            if (_ !== h.entries) {
              for (; !(y = W.next()).done; )
                if (!H(y.value))
                  return !1;
            } else
              for (; !(y = W.next()).done; ) {
                var U = y.value;
                if (U && !H(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(h, _) {
      return h === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ae(h) {
      var _ = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : K(_, h) ? "symbol" : _;
    }
    function pe(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var _ = ae(h);
      if (_ === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function we(h) {
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
  }, Ut;
}
var qt, Qi;
function fp() {
  if (Qi)
    return qt;
  Qi = 1;
  var e = Fr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, qt = function() {
    function r(l, a, u, s, c, f) {
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
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, qt;
}
if (process.env.NODE_ENV !== "production") {
  var pp = yl(), hp = !0;
  ur.exports = cp()(pp.isElement, hp);
} else
  ur.exports = fp()();
var dp = ur.exports;
const ee = /* @__PURE__ */ Mn(dp);
class qn {
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
qn.prototype.property = {};
qn.prototype.normal = {};
qn.prototype.space = null;
function xl(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new qn(n, r, t);
}
function sr(e) {
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
let mp = 0;
const re = hn(), Ce = hn(), kl = hn(), R = hn(), be = hn(), kn = hn(), je = hn();
function hn() {
  return 2 ** ++mp;
}
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: re,
  booleanish: Ce,
  commaOrSpaceSeparated: je,
  commaSeparated: kn,
  number: R,
  overloadedBoolean: kl,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), Ht = Object.keys(cr);
class _r extends qe {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Zi(this, "space", i), typeof r == "number")
      for (; ++o < Ht.length; ) {
        const l = Ht[o];
        Zi(this, Ht[o], (r & cr[l]) === cr[l]);
      }
  }
}
_r.prototype.defined = !0;
function Zi(e, t, n) {
  n && (e[t] = n);
}
const gp = {}.hasOwnProperty;
function Cn(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (gp.call(e.properties, r)) {
      const i = e.properties[r], o = new _r(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[sr(r)] = r, n[sr(o.attribute)] = r;
    }
  return new qn(t, n, e.space);
}
const wl = Cn({
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
}), El = Cn({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Sl(e, t) {
  return t in e ? e[t] : t;
}
function vl(e, t) {
  return Sl(e, t.toLowerCase());
}
const Cl = Cn({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: vl,
  properties: { xmlns: null, xmlnsXLink: null }
}), Tl = Cn({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
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
}), yp = Cn({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: vl,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: kn,
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
    coords: R | kn,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: re,
    defer: re,
    dir: null,
    dirName: null,
    disabled: re,
    download: kl,
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
}), bp = Cn({
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
  transform: Sl,
  properties: {
    about: je,
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
    g1: kn,
    g2: kn,
    glyphName: kn,
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
    kernelMatrix: je,
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
    property: je,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: je,
    rev: je,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: je,
    requiredFeatures: je,
    requiredFonts: je,
    requiredFormats: je,
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
    strokeDashArray: je,
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
    systemLanguage: je,
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
    typeOf: je,
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
}), xp = /^data[-\w.:]+$/i, eo = /-[a-z]/g, kp = /[A-Z]/g;
function wp(e, t) {
  const n = sr(t);
  let r = t, i = qe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && xp.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(eo, Sp);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!eo.test(o)) {
        let l = o.replace(kp, Ep);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = _r;
  }
  return new i(r, t);
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
}, vp = xl([El, wl, Cl, Tl, yp], "html"), Cp = xl([El, wl, Cl, Tl, bp], "svg");
function Tp(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      Or(t, "element", (n, r, i) => {
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
var to;
function Ap() {
  if (to)
    return me;
  to = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function g(x) {
    if (typeof x == "object" && x !== null) {
      var k = x.$$typeof;
      switch (k) {
        case e:
          switch (x = x.type, x) {
            case n:
            case i:
            case r:
            case s:
            case c:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case l:
                case u:
                case m:
                case f:
                case o:
                  return x;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  return me.ContextConsumer = l, me.ContextProvider = o, me.Element = e, me.ForwardRef = u, me.Fragment = n, me.Lazy = m, me.Memo = f, me.Portal = t, me.Profiler = i, me.StrictMode = r, me.Suspense = s, me.SuspenseList = c, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(x) {
    return g(x) === l;
  }, me.isContextProvider = function(x) {
    return g(x) === o;
  }, me.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, me.isForwardRef = function(x) {
    return g(x) === u;
  }, me.isFragment = function(x) {
    return g(x) === n;
  }, me.isLazy = function(x) {
    return g(x) === m;
  }, me.isMemo = function(x) {
    return g(x) === f;
  }, me.isPortal = function(x) {
    return g(x) === t;
  }, me.isProfiler = function(x) {
    return g(x) === i;
  }, me.isStrictMode = function(x) {
    return g(x) === r;
  }, me.isSuspense = function(x) {
    return g(x) === s;
  }, me.isSuspenseList = function(x) {
    return g(x) === c;
  }, me.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === i || x === r || x === s || x === c || x === p || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === f || x.$$typeof === o || x.$$typeof === l || x.$$typeof === u || x.$$typeof === d || x.getModuleId !== void 0);
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
var ro;
function Pp() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = !1, g = !1, x = !1, k = !1, A = !1, C;
    C = Symbol.for("react.module.reference");
    function I($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === i || A || $ === r || $ === s || $ === c || k || $ === p || d || g || x || typeof $ == "object" && $ !== null && ($.$$typeof === m || $.$$typeof === f || $.$$typeof === o || $.$$typeof === l || $.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === C || $.getModuleId !== void 0));
    }
    function S($) {
      if (typeof $ == "object" && $ !== null) {
        var Ie = $.$$typeof;
        switch (Ie) {
          case e:
            var ze = $.type;
            switch (ze) {
              case n:
              case i:
              case r:
              case s:
              case c:
                return ze;
              default:
                var nn = ze && ze.$$typeof;
                switch (nn) {
                  case a:
                  case l:
                  case u:
                  case m:
                  case f:
                  case o:
                    return nn;
                  default:
                    return Ie;
                }
            }
          case t:
            return Ie;
        }
      }
    }
    var w = l, z = o, q = e, B = u, E = n, D = m, j = f, V = t, H = i, K = r, ae = s, pe = c, we = !1, Ae = !1;
    function h($) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _($) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W($) {
      return S($) === l;
    }
    function y($) {
      return S($) === o;
    }
    function U($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function ne($) {
      return S($) === u;
    }
    function M($) {
      return S($) === n;
    }
    function G($) {
      return S($) === m;
    }
    function J($) {
      return S($) === f;
    }
    function te($) {
      return S($) === t;
    }
    function Q($) {
      return S($) === i;
    }
    function Ee($) {
      return S($) === r;
    }
    function L($) {
      return S($) === s;
    }
    function Pe($) {
      return S($) === c;
    }
    ge.ContextConsumer = w, ge.ContextProvider = z, ge.Element = q, ge.ForwardRef = B, ge.Fragment = E, ge.Lazy = D, ge.Memo = j, ge.Portal = V, ge.Profiler = H, ge.StrictMode = K, ge.Suspense = ae, ge.SuspenseList = pe, ge.isAsyncMode = h, ge.isConcurrentMode = _, ge.isContextConsumer = W, ge.isContextProvider = y, ge.isElement = U, ge.isForwardRef = ne, ge.isFragment = M, ge.isLazy = G, ge.isMemo = J, ge.isPortal = te, ge.isProfiler = Q, ge.isStrictMode = Ee, ge.isSuspense = L, ge.isSuspenseList = Pe, ge.isValidElementType = I, ge.typeOf = S;
  }()), ge;
}
process.env.NODE_ENV === "production" ? fr.exports = Ap() : fr.exports = Pp();
var Op = fr.exports;
const Rp = /* @__PURE__ */ Mn(Op);
function Fp(e) {
  const t = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
function _p(e) {
  return e.join(" ").trim();
}
function Ip(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
var Ir = { exports: {} }, io = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Dp = /\n/g, Lp = /^\s*/, jp = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Np = /^:\s*/, zp = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Mp = /^[;\s]*/, $p = /^\s+|\s+$/g, Bp = `
`, oo = "/", lo = "*", cn = "", Up = "comment", qp = "declaration", Hp = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var n = 1, r = 1;
  function i(d) {
    var g = d.match(Dp);
    g && (n += g.length);
    var x = d.lastIndexOf(Bp);
    r = ~x ? d.length - x : r + d.length;
  }
  function o() {
    var d = { line: n, column: r };
    return function(g) {
      return g.position = new l(d), s(), g;
    };
  }
  function l(d) {
    this.start = d, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function a(d) {
    var g = new Error(
      t.source + ":" + n + ":" + r + ": " + d
    );
    if (g.reason = d, g.filename = t.source, g.line = n, g.column = r, g.source = e, !t.silent)
      throw g;
  }
  function u(d) {
    var g = d.exec(e);
    if (g) {
      var x = g[0];
      return i(x), e = e.slice(x.length), g;
    }
  }
  function s() {
    u(Lp);
  }
  function c(d) {
    var g;
    for (d = d || []; g = f(); )
      g !== !1 && d.push(g);
    return d;
  }
  function f() {
    var d = o();
    if (!(oo != e.charAt(0) || lo != e.charAt(1))) {
      for (var g = 2; cn != e.charAt(g) && (lo != e.charAt(g) || oo != e.charAt(g + 1)); )
        ++g;
      if (g += 2, cn === e.charAt(g - 1))
        return a("End of comment missing");
      var x = e.slice(2, g - 2);
      return r += 2, i(x), e = e.slice(g), r += 2, d({
        type: Up,
        comment: x
      });
    }
  }
  function m() {
    var d = o(), g = u(jp);
    if (g) {
      if (f(), !u(Np))
        return a("property missing ':'");
      var x = u(zp), k = d({
        type: qp,
        property: ao(g[0].replace(io, cn)),
        value: x ? ao(x[0].replace(io, cn)) : cn
      });
      return u(Mp), k;
    }
  }
  function p() {
    var d = [];
    c(d);
    for (var g; g = m(); )
      g !== !1 && (d.push(g), c(d));
    return d;
  }
  return s(), p();
};
function ao(e) {
  return e ? e.replace($p, cn) : cn;
}
var Vp = Hp;
function Al(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  for (var r, i = Vp(e), o = typeof t == "function", l, a, u = 0, s = i.length; u < s; u++)
    r = i[u], l = r.property, a = r.value, o ? t(l, a, r) : a && (n || (n = {}), n[l] = a);
  return n;
}
Ir.exports = Al;
Ir.exports.default = Al;
var Wp = Ir.exports;
const Yp = /* @__PURE__ */ Mn(Wp), pr = {}.hasOwnProperty, Gp = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Pl(e, t) {
  const n = [];
  let r = -1, i;
  for (; ++r < t.children.length; )
    i = t.children[r], i.type === "element" ? n.push(Jp(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !Gp.has(t.tagName) || !Fp(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
  return n;
}
function Jp(e, t, n, r) {
  const i = e.options, o = i.transformLinkUri === void 0 ? $u : i.transformLinkUri, l = e.schema, a = t.tagName, u = {};
  let s = l, c;
  if (l.space === "html" && a === "svg" && (s = Cp, e.schema = s), t.properties)
    for (c in t.properties)
      pr.call(t.properties, c) && Xp(u, c, t.properties[c], e);
  (a === "ol" || a === "ul") && e.listDepth++;
  const f = Pl(e, t);
  (a === "ol" || a === "ul") && e.listDepth--, e.schema = l;
  const m = t.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, p = i.components && pr.call(i.components, a) ? i.components[a] : a, d = typeof p == "string" || p === Re.Fragment;
  if (!Rp.isValidElementType(p))
    throw new TypeError(
      `Component for name \`${a}\` not defined or is not renderable`
    );
  if (u.key = n, a === "a" && i.linkTarget && (u.target = typeof i.linkTarget == "function" ? i.linkTarget(
    String(u.href || ""),
    t.children,
    typeof u.title == "string" ? u.title : null
  ) : i.linkTarget), a === "a" && o && (u.href = o(
    String(u.href || ""),
    t.children,
    typeof u.title == "string" ? u.title : null
  )), !d && a === "code" && r.type === "element" && r.tagName !== "pre" && (u.inline = !0), !d && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (u.level = Number.parseInt(a.charAt(1), 10)), a === "img" && i.transformImageUri && (u.src = i.transformImageUri(
    String(u.src || ""),
    String(u.alt || ""),
    typeof u.title == "string" ? u.title : null
  )), !d && a === "li" && r.type === "element") {
    const g = Kp(t);
    u.checked = g && g.properties ? !!g.properties.checked : null, u.index = Vt(r, t), u.ordered = r.tagName === "ol";
  }
  return !d && (a === "ol" || a === "ul") && (u.ordered = a === "ol", u.depth = e.listDepth), (a === "td" || a === "th") && (u.align && (u.style || (u.style = {}), u.style.textAlign = u.align, delete u.align), d || (u.isHeader = a === "th")), !d && a === "tr" && r.type === "element" && (u.isHeader = r.tagName === "thead"), i.sourcePos && (u["data-sourcepos"] = eh(m)), !d && i.rawSourcePos && (u.sourcePosition = t.position), !d && i.includeElementIndex && (u.index = Vt(r, t), u.siblingCount = Vt(r)), d || (u.node = t), f.length > 0 ? Re.createElement(p, u, f) : Re.createElement(p, u);
}
function Kp(e) {
  let t = -1;
  for (; ++t < e.children.length; ) {
    const n = e.children[t];
    if (n.type === "element" && n.tagName === "input")
      return n;
  }
  return null;
}
function Vt(e, t) {
  let n = -1, r = 0;
  for (; ++n < e.children.length && e.children[n] !== t; )
    e.children[n].type === "element" && r++;
  return r;
}
function Xp(e, t, n, r) {
  const i = wp(r.schema, t);
  let o = n;
  o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? Ip(o) : _p(o)), i.property === "style" && typeof o == "string" && (o = Qp(o)), i.space && i.property ? e[pr.call(no, i.property) ? no[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o));
}
function Qp(e) {
  const t = {};
  try {
    Yp(e, n);
  } catch {
  }
  return t;
  function n(r, i) {
    const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    t[o.replace(/-([a-z])/g, Zp)] = i;
  }
}
function Zp(e, t) {
  return t.toUpperCase();
}
function eh(e) {
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
const uo = {}.hasOwnProperty, nh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Xn = {
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
  for (const o in Xn)
    if (uo.call(Xn, o) && uo.call(e, o)) {
      const l = Xn[o];
      console.warn(
        `[react-markdown] Warning: please ${l.to ? `use \`${l.to}\` instead of` : "remove"} \`${o}\` (see <${nh}#${l.id}> for more info)`
      ), delete Xn[o];
    }
  const t = ts().use(pf).use(e.remarkPlugins || []).use(rp, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(Tp, e), n = new Yo();
  typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = t.runSync(t.parse(n), n);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let i = Re.createElement(
    Re.Fragment,
    {},
    Pl({ options: e, schema: vp, listDepth: 0 }, r)
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
function so(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
const th = Dr(/\p{P}/u), rh = Dr(/[!-/:-@[-`{-~]/);
function ih(e) {
  return rh(e) || th(e);
}
const oh = Dr(/\s/);
function Dr(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function lh(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Lr = (
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
      return ch;
    if (typeof e == "function")
      return bt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? ah(e) : uh(e);
    if (typeof e == "string")
      return sh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function ah(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Lr(e[n]);
  return bt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i))
        return !0;
    return !1;
  }
}
function uh(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return bt(n);
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
function sh(e) {
  return bt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function bt(e) {
  return t;
  function t(n, r, i) {
    return !!(fh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function ch() {
  return !0;
}
function fh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Rl = [], ph = !0, co = !1, hh = "skip";
function dh(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Lr(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
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
        value: "node (" + (u.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return m;
    function m() {
      let p = Rl, d, g, x;
      if ((!t || o(u, s, c[c.length - 1] || void 0)) && (p = mh(n(u, c)), p[0] === co))
        return p;
      if ("children" in u && u.children) {
        const k = (
          /** @type {UnistParent} */
          u
        );
        if (k.children && p[0] !== hh)
          for (g = (r ? k.children.length : -1) + l, x = c.concat(k); g > -1 && g < k.children.length; ) {
            const A = k.children[g];
            if (d = a(A, g, x)(), d[0] === co)
              return d;
            g = typeof d[1] == "number" ? d[1] : g + l;
          }
      }
      return p;
    }
  }
}
function mh(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [ph, e] : e == null ? Rl : [e];
}
function gh(e, t, n) {
  const i = Lr((n || {}).ignore || []), o = yh(t);
  let l = -1;
  for (; ++l < o.length; )
    dh(e, "text", a);
  function a(s, c) {
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
      return u(s, c);
  }
  function u(s, c) {
    const f = c[c.length - 1], m = o[l][0], p = o[l][1];
    let d = 0;
    const x = f.children.indexOf(s);
    let k = !1, A = [];
    m.lastIndex = 0;
    let C = m.exec(s.value);
    for (; C; ) {
      const I = C.index, S = {
        index: C.index,
        input: C.input,
        stack: [...c, s]
      };
      let w = p(...C, S);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? m.lastIndex = I + 1 : (d !== I && A.push({
        type: "text",
        value: s.value.slice(d, I)
      }), Array.isArray(w) ? A.push(...w) : w && A.push(w), d = I + C[0].length, k = !0), !m.global)
        break;
      C = m.exec(s.value);
    }
    return k ? (d < s.value.length && A.push({ type: "text", value: s.value.slice(d) }), f.children.splice(x, 1, ...A)) : A = [s], x + A.length;
  }
}
function yh(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([bh(i[0]), xh(i[1])]);
  }
  return t;
}
function bh(e) {
  return typeof e == "string" ? new RegExp(lh(e), "g") : e;
}
function xh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Wt = "phrasing", Yt = ["autolink", "link", "image", "label"];
function kh() {
  return {
    transforms: [Ah],
    enter: {
      literalAutolink: Eh,
      literalAutolinkEmail: Gt,
      literalAutolinkHttp: Gt,
      literalAutolinkWww: Gt
    },
    exit: {
      literalAutolink: Th,
      literalAutolinkEmail: Ch,
      literalAutolinkHttp: Sh,
      literalAutolinkWww: vh
    }
  };
}
function wh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Wt,
        notInConstruct: Yt
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Wt,
        notInConstruct: Yt
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Wt,
        notInConstruct: Yt
      }
    ]
  };
}
function Eh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Gt(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Sh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function vh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Ch(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Th(e) {
  this.exit(e);
}
function Ah(e) {
  gh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ph],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Oh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Ph(e, t, n, r, i) {
  let o = "";
  if (!Fl(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !Rh(n)))
    return !1;
  const l = Fh(n + r);
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
function Oh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Fl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Rh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Fh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = so(e, "(");
  let o = so(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Fl(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || oh(n) || ih(n)) && (!t || n !== 47);
}
function _l(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
Il.peek = Uh;
function _h() {
  return {
    enter: {
      gfmFootnoteDefinition: Dh,
      gfmFootnoteDefinitionLabelString: Lh,
      gfmFootnoteCall: zh,
      gfmFootnoteCallString: Mh
    },
    exit: {
      gfmFootnoteDefinition: Nh,
      gfmFootnoteDefinitionLabelString: jh,
      gfmFootnoteCall: Bh,
      gfmFootnoteCallString: $h
    }
  };
}
function Ih() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: qh, footnoteReference: Il }
  };
}
function Dh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Lh() {
  this.buffer();
}
function jh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = _l(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Nh(e) {
  this.exit(e);
}
function zh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Mh() {
  this.buffer();
}
function $h(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = _l(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Bh(e) {
  this.exit(e);
}
function Il(e, t, n, r) {
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
function Uh() {
  return "[";
}
function qh(e, t, n, r) {
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
    n.indentLines(n.containerFlow(e, i.current()), Hh)
  ), l(), o;
}
function Hh(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
const Vh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Dl.peek = Kh;
function Wh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Gh },
    exit: { strikethrough: Jh }
  };
}
function Yh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Vh
      }
    ],
    handlers: { delete: Dl }
  };
}
function Gh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Jh(e) {
  this.exit(e);
}
function Dl(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Kh() {
  return "~";
}
function Xh(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || Zh, i = [], o = [], l = [], a = [];
  let u = 0, s = -1;
  for (; ++s < e.length; ) {
    const d = [], g = [];
    let x = -1;
    for (e[s].length > u && (u = e[s].length); ++x < e[s].length; ) {
      const k = Qh(e[s][x]);
      if (t.alignDelimiters !== !1) {
        const A = r(k);
        g[x] = A, (a[x] === void 0 || A > a[x]) && (a[x] = A);
      }
      d.push(k);
    }
    o[s] = d, l[s] = g;
  }
  let c = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++c < u; )
      i[c] = fo(n[c]);
  else {
    const d = fo(n);
    for (; ++c < u; )
      i[c] = d;
  }
  c = -1;
  const f = [], m = [];
  for (; ++c < u; ) {
    const d = i[c];
    let g = "", x = "";
    d === 99 ? (g = ":", x = ":") : d === 108 ? g = ":" : d === 114 && (x = ":");
    let k = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - g.length - x.length
    );
    const A = g + "-".repeat(k) + x;
    t.alignDelimiters !== !1 && (k = g.length + k + x.length, k > a[c] && (a[c] = k), m[c] = k), f[c] = A;
  }
  o.splice(1, 0, f), l.splice(1, 0, m), s = -1;
  const p = [];
  for (; ++s < o.length; ) {
    const d = o[s], g = l[s];
    c = -1;
    const x = [];
    for (; ++c < u; ) {
      const k = d[c] || "";
      let A = "", C = "";
      if (t.alignDelimiters !== !1) {
        const I = a[c] - (g[c] || 0), S = i[c];
        S === 114 ? A = " ".repeat(I) : S === 99 ? I % 2 ? (A = " ".repeat(I / 2 + 0.5), C = " ".repeat(I / 2 - 0.5)) : (A = " ".repeat(I / 2), C = A) : C = " ".repeat(I);
      }
      t.delimiterStart !== !1 && !c && x.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && k === "") && (t.delimiterStart !== !1 || c) && x.push(" "), t.alignDelimiters !== !1 && x.push(A), x.push(k), t.alignDelimiters !== !1 && x.push(C), t.padding !== !1 && x.push(" "), (t.delimiterEnd !== !1 || c !== u - 1) && x.push("|");
    }
    p.push(
      t.delimiterEnd === !1 ? x.join("").replace(/ +$/, "") : x.join("")
    );
  }
  return p.join(`
`);
}
function Qh(e) {
  return e == null ? "" : String(e);
}
function Zh(e) {
  return e.length;
}
function fo(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function ed(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    nd
  );
  return i(), l;
}
function nd(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function td(e, t) {
  return po(e, t.inConstruct, !0) && !po(e, t.notInConstruct, !1);
}
function po(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ho(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && td(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function rd(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function id(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function od(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function ld(e, t, n, r) {
  const i = od(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (id(e, n)) {
    const f = n.enter("codeIndented"), m = n.indentLines(o, ad);
    return f(), m;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(rd(o, i) + 1, 3)), s = n.enter("codeFenced");
  let c = a.move(u);
  if (e.lang) {
    const f = n.enter(`codeFencedLang${l}`);
    c += a.move(
      n.safe(e.lang, {
        before: c,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), f();
  }
  if (e.lang && e.meta) {
    const f = n.enter(`codeFencedMeta${l}`);
    c += a.move(" "), c += a.move(
      n.safe(e.meta, {
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
`)), c += a.move(u), s(), c;
}
function ad(e, t, n) {
  return (n ? "" : "    ") + e;
}
function jr(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function ud(e, t, n, r) {
  const i = jr(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
  let a = n.enter("label");
  const u = n.createTracker(r);
  let s = u.move("[");
  return s += u.move(
    n.safe(n.associationId(e), {
      before: s,
      after: "]",
      ...u.current()
    })
  ), s += u.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), s += u.move("<"), s += u.move(
    n.safe(e.url, { before: s, after: ">", ...u.current() })
  ), s += u.move(">")) : (a = n.enter("destinationRaw"), s += u.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : `
`,
      ...u.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), s += u.move(" " + i), s += u.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), l(), s;
}
function sd(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
Ll.peek = cd;
function Ll(e, t, n, r) {
  const i = sd(n), o = n.enter("emphasis"), l = n.createTracker(r);
  let a = l.move(i);
  return a += l.move(
    n.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i), o(), a;
}
function cd(e, t, n) {
  return n.options.emphasis || "*";
}
const jl = (
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
      return dd;
    if (typeof e == "function")
      return xt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? fd(e) : pd(e);
    if (typeof e == "string")
      return hd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function fd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = jl(e[n]);
  return xt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i))
        return !0;
    return !1;
  }
}
function pd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return xt(n);
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
function hd(e) {
  return xt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function xt(e) {
  return t;
  function t(n, r, i) {
    return !!(md(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function dd() {
  return !0;
}
function md(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Nl = [], gd = !0, hr = !1, yd = "skip";
function bd(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = jl(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
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
        value: "node (" + (u.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return m;
    function m() {
      let p = Nl, d, g, x;
      if ((!t || o(u, s, c[c.length - 1] || void 0)) && (p = xd(n(u, c)), p[0] === hr))
        return p;
      if ("children" in u && u.children) {
        const k = (
          /** @type {UnistParent} */
          u
        );
        if (k.children && p[0] !== yd)
          for (g = (r ? k.children.length : -1) + l, x = c.concat(k); g > -1 && g < k.children.length; ) {
            const A = k.children[g];
            if (d = a(A, g, x)(), d[0] === hr)
              return d;
            g = typeof d[1] == "number" ? d[1] : g + l;
          }
      }
      return p;
    }
  }
}
function xd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [gd, e] : e == null ? Nl : [e];
}
function kd(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), bd(e, o, a, i);
  function a(u, s) {
    const c = s[s.length - 1], f = c ? c.children.indexOf(u) : void 0;
    return l(u, f, c);
  }
}
const wd = {};
function zl(e, t) {
  const n = t || wd, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ml(e, r, i);
}
function Ml(e, t, n) {
  if (Ed(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return mo(e.children, t, n);
  }
  return Array.isArray(e) ? mo(e, t, n) : "";
}
function mo(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ml(e[i], t, n);
  return r.join("");
}
function Ed(e) {
  return !!(e && typeof e == "object");
}
function Sd(e, t) {
  let n = !1;
  return kd(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, hr;
  }), !!((!e.depth || e.depth < 3) && zl(e) && (t.options.setext || n));
}
function vd(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Sd(e, n)) {
    const c = n.enter("headingSetext"), f = n.enter("phrasing"), m = n.containerPhrasing(e, {
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
  const l = "#".repeat(i), a = n.enter("headingAtx"), u = n.enter("phrasing");
  o.move(l + " ");
  let s = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(s) && (s = "&#x" + s.charCodeAt(0).toString(16).toUpperCase() + ";" + s.slice(1)), s = s ? l + " " + s : l, n.options.closeAtx && (s += " " + l), u(), a(), s;
}
$l.peek = Cd;
function $l(e) {
  return e.value || "";
}
function Cd() {
  return "<";
}
Bl.peek = Td;
function Bl(e, t, n, r) {
  const i = jr(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
  let a = n.enter("label");
  const u = n.createTracker(r);
  let s = u.move("![");
  return s += u.move(
    n.safe(e.alt, { before: s, after: "]", ...u.current() })
  ), s += u.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), s += u.move("<"), s += u.move(
    n.safe(e.url, { before: s, after: ">", ...u.current() })
  ), s += u.move(">")) : (a = n.enter("destinationRaw"), s += u.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...u.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), s += u.move(" " + i), s += u.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), s += u.move(")"), l(), s;
}
function Td() {
  return "!";
}
Ul.peek = Ad;
function Ul(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("![");
  const s = n.safe(e.alt, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), l();
  const c = n.stack;
  n.stack = [], l = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = c, o(), i === "full" || !s || s !== f ? u += a.move(f + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function Ad() {
  return "!";
}
ql.peek = Pd;
function ql(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const l = n.unsafe[o], a = n.compilePattern(l);
    let u;
    if (l.atBreak)
      for (; u = a.exec(r); ) {
        let s = u.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(u.index + 1);
      }
  }
  return i + r + i;
}
function Pd() {
  return "`";
}
function Hl(e, t) {
  const n = zl(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Vl.peek = Od;
function Vl(e, t, n, r) {
  const i = jr(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let a, u;
  if (Hl(e, n)) {
    const c = n.stack;
    n.stack = [], a = n.enter("autolink");
    let f = l.move("<");
    return f += l.move(
      n.containerPhrasing(e, {
        before: f,
        after: ">",
        ...l.current()
      })
    ), f += l.move(">"), a(), n.stack = c, f;
  }
  a = n.enter("link"), u = n.enter("label");
  let s = l.move("[");
  return s += l.move(
    n.containerPhrasing(e, {
      before: s,
      after: "](",
      ...l.current()
    })
  ), s += l.move("]("), u(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (u = n.enter("destinationLiteral"), s += l.move("<"), s += l.move(
    n.safe(e.url, { before: s, after: ">", ...l.current() })
  ), s += l.move(">")) : (u = n.enter("destinationRaw"), s += l.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), u(), e.title && (u = n.enter(`title${o}`), s += l.move(" " + i), s += l.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...l.current()
    })
  ), s += l.move(i), u()), s += l.move(")"), a(), s;
}
function Od(e, t, n) {
  return Hl(e, n) ? "<" : "[";
}
Wl.peek = Rd;
function Wl(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("[");
  const s = n.containerPhrasing(e, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), l();
  const c = n.stack;
  n.stack = [], l = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = c, o(), i === "full" || !s || s !== f ? u += a.move(f + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function Rd() {
  return "[";
}
function Nr(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Fd(e) {
  const t = Nr(e), n = e.options.bulletOther;
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
function _d(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Yl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Id(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? _d(n) : Nr(n);
  const a = e.ordered ? l === "." ? ")" : "." : Fd(n);
  let u = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), Yl(n) === l && c
    ) {
      let f = -1;
      for (; ++f < e.children.length; ) {
        const m = e.children[f];
        if (m && m.type === "listItem" && m.children && m.children[0] && m.children[0].type === "thematicBreak") {
          u = !0;
          break;
        }
      }
    }
  }
  u && (l = a), n.bulletCurrent = l;
  const s = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = o, i(), s;
}
function Dd(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Ld(e, t, n, r) {
  const i = Dd(n);
  let o = n.bulletCurrent || Nr(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const u = n.enter("listItem"), s = n.indentLines(
    n.containerFlow(e, a.current()),
    c
  );
  return u(), s;
  function c(f, m, p) {
    return m ? (p ? "" : " ".repeat(l)) + f : (p ? o : o + " ".repeat(l - o.length)) + f;
  }
}
function jd(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
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
      return $d;
    if (typeof e == "function")
      return kt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Nd(e) : zd(e);
    if (typeof e == "string")
      return Md(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Nd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Gl(e[n]);
  return kt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i))
        return !0;
    return !1;
  }
}
function zd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return kt(n);
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
function Md(e) {
  return kt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function kt(e) {
  return t;
  function t(n, r, i) {
    return !!(Bd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function $d() {
  return !0;
}
function Bd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ud = (
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
function qd(e, t, n, r) {
  return (e.children.some(function(l) {
    return Ud(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Hd(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Jl.peek = Vd;
function Jl(e, t, n, r) {
  const i = Hd(n), o = n.enter("strong"), l = n.createTracker(r);
  let a = l.move(i + i);
  return a += l.move(
    n.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i + i), o(), a;
}
function Vd(e, t, n) {
  return n.options.strong || "*";
}
function Wd(e, t, n, r) {
  return n.safe(e.value, r);
}
function Yd(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Gd(e, t, n) {
  const r = (Yl(n) + (n.options.ruleSpaces ? " " : "")).repeat(Yd(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Kl = {
  blockquote: ed,
  break: ho,
  code: ld,
  definition: ud,
  emphasis: Ll,
  hardBreak: ho,
  heading: vd,
  html: $l,
  image: Bl,
  imageReference: Ul,
  inlineCode: ql,
  link: Vl,
  linkReference: Wl,
  list: Id,
  listItem: Ld,
  paragraph: jd,
  root: qd,
  strong: Jl,
  text: Wd,
  thematicBreak: Gd
};
function Jd() {
  return {
    enter: {
      table: Kd,
      tableData: go,
      tableHeader: go,
      tableRow: Qd
    },
    exit: {
      codeText: Zd,
      table: Xd,
      tableData: Jt,
      tableHeader: Jt,
      tableRow: Jt
    }
  };
}
function Kd(e) {
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
function Xd(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Qd(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Jt(e) {
  this.exit(e);
}
function go(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Zd(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, em));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function em(e, t) {
  return t === "|" ? t : e;
}
function nm(e) {
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
      inlineCode: m,
      table: l,
      tableCell: u,
      tableRow: a
    }
  };
  function l(p, d, g, x) {
    return s(c(p, g, x), p.align);
  }
  function a(p, d, g, x) {
    const k = f(p, g, x), A = s([k]);
    return A.slice(0, A.indexOf(`
`));
  }
  function u(p, d, g, x) {
    const k = g.enter("tableCell"), A = g.enter("phrasing"), C = g.containerPhrasing(p, {
      ...x,
      before: o,
      after: o
    });
    return A(), k(), C;
  }
  function s(p, d) {
    return Xh(p, {
      align: d,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(p, d, g) {
    const x = p.children;
    let k = -1;
    const A = [], C = d.enter("table");
    for (; ++k < x.length; )
      A[k] = f(x[k], d, g);
    return C(), A;
  }
  function f(p, d, g) {
    const x = p.children;
    let k = -1;
    const A = [], C = d.enter("tableRow");
    for (; ++k < x.length; )
      A[k] = u(x[k], p, d, g);
    return C(), A;
  }
  function m(p, d, g) {
    let x = Kl.inlineCode(p, d, g);
    return g.stack.includes("tableCell") && (x = x.replace(/\|/g, "\\$&")), x;
  }
}
function tm() {
  return {
    exit: {
      taskListCheckValueChecked: yo,
      taskListCheckValueUnchecked: yo,
      paragraph: im
    }
  };
}
function rm() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: om }
  };
}
function yo(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function im(e) {
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
function om(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(l);
  let u = Kl.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(c) {
    return c + l;
  }
}
function lm() {
  return [
    kh(),
    _h(),
    Wh(),
    Jd(),
    tm()
  ];
}
function am(e) {
  return {
    extensions: [
      wh(),
      Ih(),
      Yh(),
      nm(e),
      rm()
    ]
  };
}
function um(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
const bo = {}.hasOwnProperty;
function sm(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    cm(t, e[n]);
  return t;
}
function cm(e, t) {
  let n;
  for (n in t) {
    const i = (bo.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        bo.call(i, l) || (i[l] = []);
        const a = o[l];
        fm(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function fm(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  um(e, 0, 0, r);
}
const pm = Hn(/\p{P}/u), Nn = Hn(/[A-Za-z]/), zr = Hn(/[\dA-Za-z]/);
function hm(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const dm = Hn(/[!-/:-@[-`{-~]/);
function En(e) {
  return e !== null && (e < 0 || e === 32);
}
function Xl(e) {
  return dm(e) || pm(e);
}
const zn = Hn(/\s/);
function Hn(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
const mm = {
  tokenize: wm,
  partial: !0
}, Ql = {
  tokenize: Em,
  partial: !0
}, Zl = {
  tokenize: Sm,
  partial: !0
}, ea = {
  tokenize: vm,
  partial: !0
}, gm = {
  tokenize: Cm,
  partial: !0
}, na = {
  tokenize: xm,
  previous: ra
}, ta = {
  tokenize: km,
  previous: ia
}, en = {
  tokenize: bm,
  previous: oa
}, Xe = {};
function ym() {
  return {
    text: Xe
  };
}
let sn = 48;
for (; sn < 123; )
  Xe[sn] = en, sn++, sn === 58 ? sn = 65 : sn === 91 && (sn = 97);
Xe[43] = en;
Xe[45] = en;
Xe[46] = en;
Xe[95] = en;
Xe[72] = [en, ta];
Xe[104] = [en, ta];
Xe[87] = [en, na];
Xe[119] = [en, na];
function bm(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(f) {
    return !dr(f) || !oa.call(r, r.previous) || Mr(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(f));
  }
  function a(f) {
    return dr(f) ? (e.consume(f), a) : f === 64 ? (e.consume(f), u) : n(f);
  }
  function u(f) {
    return f === 46 ? e.check(
      gm,
      c,
      s
    )(f) : f === 45 || f === 95 || zr(f) ? (o = !0, e.consume(f), u) : c(f);
  }
  function s(f) {
    return e.consume(f), i = !0, u;
  }
  function c(f) {
    return o && i && Nn(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f);
  }
}
function xm(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !ra.call(r, r.previous) || Mr(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      mm,
      e.attempt(Ql, e.attempt(Zl, o), n),
      n
    )(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function km(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(f) {
    return (f === 72 || f === 104) && ia.call(r, r.previous) && !Mr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), a) : n(f);
  }
  function a(f) {
    if (Nn(f) && i.length < 5)
      return i += String.fromCodePoint(f), e.consume(f), a;
    if (f === 58) {
      const m = i.toLowerCase();
      if (m === "http" || m === "https")
        return e.consume(f), u;
    }
    return n(f);
  }
  function u(f) {
    return f === 47 ? (e.consume(f), o ? s : (o = !0, u)) : n(f);
  }
  function s(f) {
    return f === null || hm(f) || En(f) || zn(f) || Xl(f) ? n(f) : e.attempt(Ql, e.attempt(Zl, c), n)(f);
  }
  function c(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f);
  }
}
function wm(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function Em(e, t, n) {
  let r, i, o;
  return l;
  function l(s) {
    return s === 46 || s === 95 ? e.check(ea, u, a)(s) : s === null || En(s) || zn(s) || s !== 45 && Xl(s) ? u(s) : (o = !0, e.consume(s), l);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), l;
  }
  function u(s) {
    return i || r || !o ? n(s) : t(s);
  }
}
function Sm(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(ea, t, o)(l) : l === null || En(l) || zn(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function vm(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || En(a) || zn(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || En(a) || zn(a) ? t(a) : r(a);
  }
  function o(a) {
    return Nn(a) ? l(a) : n(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : Nn(a) ? (e.consume(a), l) : n(a);
  }
}
function Cm(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return zr(o) ? n(o) : t(o);
  }
}
function ra(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || En(e);
}
function ia(e) {
  return !Nn(e);
}
function oa(e) {
  return !(e === 47 || dr(e));
}
function dr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || zr(e);
}
function Mr(e) {
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
function Tm(e) {
  return e !== null && e < -2;
}
function ut(e) {
  return e !== null && (e < 0 || e === 32);
}
function mr(e) {
  return e === -2 || e === -1 || e === 32;
}
function $r(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return mr(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return mr(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const Am = {
  tokenize: Pm,
  partial: !0
};
function Pm(e, t, n) {
  return r;
  function r(o) {
    return mr(o) ? $r(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Tm(o) ? t(o) : n(o);
  }
}
function Br(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Om = {
  tokenize: Nm,
  partial: !0
};
function Rm() {
  return {
    document: {
      91: {
        tokenize: Dm,
        continuation: {
          tokenize: Lm
        },
        exit: jm
      }
    },
    text: {
      91: {
        tokenize: Im
      },
      93: {
        add: "after",
        tokenize: Fm,
        resolveTo: _m
      }
    }
  };
}
function Fm(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const u = r.events[i][1];
    if (u.type === "labelImage") {
      l = u;
      break;
    }
    if (u.type === "gfmFootnoteCall" || u.type === "labelLink" || u.type === "label" || u.type === "image" || u.type === "link")
      break;
  }
  return a;
  function a(u) {
    if (!l || !l._balanced)
      return n(u);
    const s = Br(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return s.codePointAt(0) !== 94 || !o.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function _m(e, t) {
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
function Im(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), u;
  }
  function u(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s);
  }
  function s(f) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      f === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      f === null || f === 91 || ut(f)
    )
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteCallString");
      return i.includes(Br(r.sliceSerialize(m))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return ut(f) || (l = !0), o++, e.consume(f), f === 92 ? c : s;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), o++, s) : s(f);
  }
}
function Dm(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return u;
  function u(d) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(d) {
    return d === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(d);
  }
  function c(d) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      d === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      d === null || d === 91 || ut(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Br(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(d), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), m;
    }
    return ut(d) || (a = !0), l++, e.consume(d), d === 92 ? f : c;
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, c) : c(d);
  }
  function m(d) {
    return d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), i.includes(o) || i.push(o), $r(
      e,
      p,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(d);
  }
  function p(d) {
    return t(d);
  }
}
function Lm(e, t, n) {
  return e.check(Am, t, e.attempt(Om, t, n));
}
function jm(e) {
  e.exit("gfmFootnoteDefinition");
}
function Nm(e, t, n) {
  const r = this;
  return $r(
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
function Kt(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
const zm = Ur(/\p{P}/u), Mm = Ur(/[!-/:-@[-`{-~]/);
function $m(e) {
  return e !== null && (e < 0 || e === 32);
}
function Bm(e) {
  return Mm(e) || zm(e);
}
const Um = Ur(/\s/);
function Ur(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function xo(e) {
  if (e === null || $m(e) || Um(e))
    return 1;
  if (Bm(e))
    return 2;
}
function qm(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
function Hm(e) {
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
    let u = -1;
    for (; ++u < l.length; )
      if (l[u][0] === "enter" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._close) {
        let s = u;
        for (; s--; )
          if (l[s][0] === "exit" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._open && // If the sizes are the same:
          l[u][1].end.offset - l[u][1].start.offset === l[s][1].end.offset - l[s][1].start.offset) {
            l[u][1].type = "strikethroughSequence", l[s][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, l[s][1].start),
              end: Object.assign({}, l[u][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, l[s][1].end),
              end: Object.assign({}, l[u][1].start)
            }, m = [
              ["enter", c, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["enter", f, a]
            ], p = a.parser.constructs.insideSpan.null;
            p && Kt(
              m,
              m.length,
              0,
              qm(p, l.slice(s + 1, u), a)
            ), Kt(m, m.length, 0, [
              ["exit", f, a],
              ["enter", l[u][1], a],
              ["exit", l[u][1], a],
              ["exit", c, a]
            ]), Kt(l, s - 1, u - s + 3, m), u = s + m.length - 2;
            break;
          }
      }
    for (u = -1; ++u < l.length; )
      l[u][1].type === "strikethroughSequenceTemporary" && (l[u][1].type = "data");
    return l;
  }
  function o(l, a, u) {
    const s = this.previous, c = this.events;
    let f = 0;
    return m;
    function m(d) {
      return s === 126 && c[c.length - 1][1].type !== "characterEscape" ? u(d) : (l.enter("strikethroughSequenceTemporary"), p(d));
    }
    function p(d) {
      const g = xo(s);
      if (d === 126)
        return f > 1 ? u(d) : (l.consume(d), f++, p);
      if (f < 2 && !n)
        return u(d);
      const x = l.exit("strikethroughSequenceTemporary"), k = xo(d);
      return x._open = !k || k === 2 && !!g, x._close = !g || g === 2 && !!k, a(d);
    }
  }
}
function Qn(e) {
  return e !== null && e < -2;
}
function ko(e) {
  return e !== null && (e < 0 || e === 32);
}
function fn(e) {
  return e === -2 || e === -1 || e === 32;
}
function In(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return fn(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return fn(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
class Vm {
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
    Wm(this, t, n, r);
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
function Wm(e, t, n, r) {
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
function Ym(e, t) {
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
function Gm() {
  return {
    flow: {
      null: {
        tokenize: Jm,
        resolveAll: Km
      }
    }
  };
}
function Jm(e, t, n) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(E) {
    let D = r.events.length - 1;
    for (; D > -1; ) {
      const H = r.events[D][1].type;
      if (H === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      H === "linePrefix")
        D--;
      else
        break;
    }
    const j = D > -1 ? r.events[D][1].type : null, V = j === "tableHead" || j === "tableRow" ? w : u;
    return V === w && r.parser.lazy[r.now().line] ? n(E) : V(E);
  }
  function u(E) {
    return e.enter("tableHead"), e.enter("tableRow"), s(E);
  }
  function s(E) {
    return E === 124 || (l = !0, o += 1), c(E);
  }
  function c(E) {
    return E === null ? n(E) : Qn(E) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), p) : n(E) : fn(E) ? In(e, c, "whitespace")(E) : (o += 1, l && (l = !1, i += 1), E === 124 ? (e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), l = !0, c) : (e.enter("data"), f(E)));
  }
  function f(E) {
    return E === null || E === 124 || ko(E) ? (e.exit("data"), c(E)) : (e.consume(E), E === 92 ? m : f);
  }
  function m(E) {
    return E === 92 || E === 124 ? (e.consume(E), f) : f(E);
  }
  function p(E) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(E) : (e.enter("tableDelimiterRow"), l = !1, fn(E) ? In(
      e,
      d,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(E) : d(E));
  }
  function d(E) {
    return E === 45 || E === 58 ? x(E) : E === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), g) : S(E);
  }
  function g(E) {
    return fn(E) ? In(e, x, "whitespace")(E) : x(E);
  }
  function x(E) {
    return E === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(E), e.exit("tableDelimiterMarker"), k) : E === 45 ? (o += 1, k(E)) : E === null || Qn(E) ? I(E) : S(E);
  }
  function k(E) {
    return E === 45 ? (e.enter("tableDelimiterFiller"), A(E)) : S(E);
  }
  function A(E) {
    return E === 45 ? (e.consume(E), A) : E === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(E), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(E));
  }
  function C(E) {
    return fn(E) ? In(e, I, "whitespace")(E) : I(E);
  }
  function I(E) {
    return E === 124 ? d(E) : E === null || Qn(E) ? !l || i !== o ? S(E) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(E)) : S(E);
  }
  function S(E) {
    return n(E);
  }
  function w(E) {
    return e.enter("tableRow"), z(E);
  }
  function z(E) {
    return E === 124 ? (e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), z) : E === null || Qn(E) ? (e.exit("tableRow"), t(E)) : fn(E) ? In(e, z, "whitespace")(E) : (e.enter("data"), q(E));
  }
  function q(E) {
    return E === null || E === 124 || ko(E) ? (e.exit("data"), z(E)) : (e.consume(E), E === 92 ? B : q);
  }
  function B(E) {
    return E === 92 || E === 124 ? (e.consume(E), q) : q(E);
  }
}
function Km(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, u = 0, s, c, f;
  const m = new Vm();
  for (; ++n < e.length; ) {
    const p = e[n], d = p[1];
    p[0] === "enter" ? d.type === "tableHead" ? (a = !1, u !== 0 && (wo(m, t, u, s, c), c = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(n, 0, [["enter", s, t]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = !0, f = void 0, o = [0, 0, 0, 0], l = [0, n + 1, 0, 0], a && (a = !1, c = {
      type: "tableBody",
      start: Object.assign({}, d.start),
      // Note: correct end is set later.
      end: Object.assign({}, d.end)
    }, m.add(n, 0, [["enter", c, t]])), i = d.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], f = Zn(
      m,
      t,
      o,
      i,
      void 0,
      f
    ), o = [0, 0, 0, 0]), l[2] = n)) : d.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], f = Zn(
      m,
      t,
      o,
      i,
      void 0,
      f
    )), o = l, l = [o[1], n, 0, 0])) : d.type === "tableHead" ? (a = !0, u = n) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (u = n, o[1] !== 0 ? (l[0] = l[1], f = Zn(
      m,
      t,
      o,
      i,
      n,
      f
    )) : l[1] !== 0 && (f = Zn(m, t, l, i, n, f)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (u !== 0 && wo(m, t, u, s, c), m.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Ym(t.events, n));
  }
  return e;
}
function Zn(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, yn(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const u = yn(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const s = yn(t.events, n[2]), c = yn(t.events, n[3]), f = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, c)
    };
    if (e.add(n[2], 0, [["enter", f, t]]), r !== 2) {
      const m = t.events[n[2]], p = t.events[n[3]];
      if (m[1].end = Object.assign({}, p[1].end), m[1].type = "chunkText", m[1].contentType = "text", n[3] > n[2] + 1) {
        const d = n[2] + 1, g = n[3] - n[2] - 1;
        e.add(d, g, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", f, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, yn(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function wo(e, t, n, r, i) {
  const o = [], l = yn(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function yn(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
function Xm(e) {
  return e !== null && e < -2;
}
function Qm(e) {
  return e !== null && (e < 0 || e === 32);
}
function gr(e) {
  return e === -2 || e === -1 || e === 32;
}
function Zm(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return gr(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return gr(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const eg = {
  tokenize: tg
};
function ng() {
  return {
    text: {
      91: eg
    }
  };
}
function tg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(u) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(u) {
    return Qm(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), l) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), l) : n(u);
  }
  function l(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(u);
  }
  function a(u) {
    return Xm(u) ? t(u) : gr(u) ? e.check(
      {
        tokenize: rg
      },
      t,
      n
    )(u) : n(u);
  }
}
function rg(e, t, n) {
  return Zm(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function ig(e) {
  return sm([
    ym(),
    Rm(),
    Hm(e),
    Gm(),
    ng()
  ]);
}
const og = {};
function lg(e) {
  const t = (
    /** @type {Processor} */
    this
  ), n = e || og, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(ig(n)), o.push(lm()), l.push(am(n));
}
function pg({ config: e, rules: t }) {
  const n = st(), r = ma(), i = () => r.current.scrollIntoView(), o = sessionStorage.getItem("gameID");
  return /* @__PURE__ */ P.jsxs("div", { ref: r, className: "flex flex-col items-center m-2 md:m-12", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md", children: [
      /* @__PURE__ */ P.jsxs("article", { className: "prose dark:prose-invert max-w-fit fade-in", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col md:flex-row w-full h-full justify-between items-center", children: [
          /* @__PURE__ */ P.jsxs("div", { className: "text-4xl font-black mb-6 md:mb-0", children: [
            /* @__PURE__ */ P.jsx("span", { className: `text-5xl font-black font-['${e.font}'] text-${e.color} mr-1`, children: e.key }),
            " Game Rules"
          ] }),
          /* @__PURE__ */ P.jsx("button", { onClick: () => n(o ? "/" + o : "/"), className: "bg-blue-500 px-6 py-2 font-bold italic", children: o ? "Back" : "Play Online" })
        ] }),
        /* @__PURE__ */ P.jsx(Ol, { children: t, remarkPlugins: [lg] })
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "mt-12 flex flex-col w-full items-center", children: /* @__PURE__ */ P.jsx("button", { className: "text-zinc-500 font-light italic", onClick: i, children: "back to top 👆" }) })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "mt-8", children: /* @__PURE__ */ P.jsx(yr, {}) })
  ] });
}
export {
  sg as DownPage,
  yr as Footer,
  fg as GamePage,
  cg as HomePage,
  pg as RulesPage
};
