import * as x from "react";
import l, { useState as _, useEffect as U } from "react";
function qe() {
  return /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center w-full font-light text-sm" }, /* @__PURE__ */ l.createElement("div", { className: "flex" }, /* @__PURE__ */ l.createElement("a", { href: "mailto:hello@quibbble.com" }, /* @__PURE__ */ l.createElement("p", null, "Contact")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://www.buymeacoffee.com/quibbble", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Support")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://discord.gg/VKvjutuhUp", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Discord")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://status.quibbble.com", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Status")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://github.com/quibbble", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Code"))), /* @__PURE__ */ l.createElement("p", { className: "mt-2 italic" }, "Made with 🤍 by ", /* @__PURE__ */ l.createElement("a", { className: "underline", href: "https://chrisfregly.com", target: "_blank", rel: "noreferrer" }, "Chris Fregly")));
}
function Ve(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Rt } = Object.prototype, { getPrototypeOf: be } = Object, X = ((e) => (t) => {
  const n = Rt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => X(t) === e), Q = (e) => (t) => typeof t === e, { isArray: B } = Array, M = Q("undefined");
function Tt(e) {
  return e !== null && !M(e) && e.constructor !== null && !M(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const He = C("ArrayBuffer");
function Ct(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && He(e.buffer), t;
}
const At = Q("string"), S = Q("function"), Je = Q("number"), Y = (e) => e !== null && typeof e == "object", Pt = (e) => e === !0 || e === !1, H = (e) => {
  if (X(e) !== "object")
    return !1;
  const t = be(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Dt = C("Date"), _t = C("File"), jt = C("Blob"), kt = C("FileList"), Lt = (e) => Y(e) && S(e.pipe), Ut = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || S(e.append) && ((t = X(e)) === "formdata" || // detect form-data instance
  t === "object" && S(e.toString) && e.toString() === "[object FormData]"));
}, Ft = C("URLSearchParams"), Bt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let u;
    for (r = 0; r < a; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function We(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ge = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ke = (e) => !M(e) && e !== Ge;
function ue() {
  const { caseless: e } = Ke(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && We(t, s) || s;
    H(t[o]) && H(r) ? t[o] = ue(t[o], r) : H(r) ? t[o] = ue({}, r) : B(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && $(arguments[r], n);
  return t;
}
const It = (e, t, n, { allOwnKeys: r } = {}) => ($(t, (s, o) => {
  n && S(s) ? e[o] = Ve(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Mt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $t = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, zt = (e, t, n, r) => {
  let s, o, a;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, e, t)) && !u[a] && (t[a] = e[a], u[a] = !0);
    e = n !== !1 && be(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, qt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Vt = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!Je(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ht = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && be(Uint8Array)), Jt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Wt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Gt = C("HTMLFormElement"), Kt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ce = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Xt = C("RegExp"), Xe = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Qt = (e) => {
  Xe(e, (t, n) => {
    if (S(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (S(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Yt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Zt = () => {
}, en = (e, t) => (e = +e, Number.isFinite(e) ? e : t), se = "abcdefghijklmnopqrstuvwxyz", Ae = "0123456789", Qe = {
  DIGIT: Ae,
  ALPHA: se,
  ALPHA_DIGIT: se + se.toUpperCase() + Ae
}, tn = (e = 16, t = Qe.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function nn(e) {
  return !!(e && S(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const rn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Y(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = B(r) ? [] : {};
        return $(r, (a, u) => {
          const m = n(a, s + 1);
          !M(m) && (o[u] = m);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, sn = C("AsyncFunction"), on = (e) => e && (Y(e) || S(e)) && S(e.then) && S(e.catch), i = {
  isArray: B,
  isArrayBuffer: He,
  isBuffer: Tt,
  isFormData: Ut,
  isArrayBufferView: Ct,
  isString: At,
  isNumber: Je,
  isBoolean: Pt,
  isObject: Y,
  isPlainObject: H,
  isUndefined: M,
  isDate: Dt,
  isFile: _t,
  isBlob: jt,
  isRegExp: Xt,
  isFunction: S,
  isStream: Lt,
  isURLSearchParams: Ft,
  isTypedArray: Ht,
  isFileList: kt,
  forEach: $,
  merge: ue,
  extend: It,
  trim: Bt,
  stripBOM: Mt,
  inherits: $t,
  toFlatObject: zt,
  kindOf: X,
  kindOfTest: C,
  endsWith: qt,
  toArray: Vt,
  forEachEntry: Jt,
  matchAll: Wt,
  isHTMLForm: Gt,
  hasOwnProperty: Ce,
  hasOwnProp: Ce,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xe,
  freezeMethods: Qt,
  toObjectSet: Yt,
  toCamelCase: Kt,
  noop: Zt,
  toFiniteNumber: en,
  findKey: We,
  global: Ge,
  isContextDefined: Ke,
  ALPHABET: Qe,
  generateString: tn,
  isSpecCompliantForm: nn,
  toJSONObject: rn,
  isAsyncFn: sn,
  isThenable: on
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
i.inherits(b, Error, {
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
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ye = b.prototype, Ze = {};
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
  Ze[e] = { value: e };
});
Object.defineProperties(b, Ze);
Object.defineProperty(Ye, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, o) => {
  const a = Object.create(Ye);
  return i.toFlatObject(e, a, function(m) {
    return m !== Error.prototype;
  }, (u) => u !== "isAxiosError"), b.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const an = null;
function fe(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function et(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Pe(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = et(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ln(e) {
  return i.isArray(e) && !e.some(fe);
}
const cn = i.toFlatObject(i, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Z(e, t, n) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = i.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, v) {
    return !i.isUndefined(v[h]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, a = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && i.isSpecCompliantForm(t);
  if (!i.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (i.isDate(p))
      return p.toISOString();
    if (!m && i.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(p) || i.isTypedArray(p) ? m && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, h, v) {
    let N = p;
    if (p && !v && typeof p == "object") {
      if (i.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (i.isArray(p) && ln(p) || (i.isFileList(p) || i.endsWith(h, "[]")) && (N = i.toArray(p)))
        return h = et(h), N.forEach(function(k, ne) {
          !(i.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Pe([h], ne, o) : a === null ? h : h + "[]",
            c(k)
          );
        }), !1;
    }
    return fe(p) ? !0 : (t.append(Pe(v, h, o), c(p)), !1);
  }
  const f = [], E = Object.assign(cn, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: fe
  });
  function y(p, h) {
    if (!i.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(p), i.forEach(p, function(N, A) {
        (!(i.isUndefined(N) || N === null) && s.call(
          t,
          N,
          i.isString(A) ? A.trim() : A,
          h,
          E
        )) === !0 && y(N, h ? h.concat(A) : [A]);
      }), f.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function De(e) {
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
function Ee(e, t) {
  this._pairs = [], e && Z(e, this, t);
}
const tt = Ee.prototype;
tt.append = function(t, n) {
  this._pairs.push([t, n]);
};
tt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, De);
  } : De;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function un(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || un, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = i.isURLSearchParams(t) ? t.toString() : new Ee(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class fn {
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
    i.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const _e = fn, rt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dn = typeof URLSearchParams < "u" ? URLSearchParams : Ee, mn = typeof FormData < "u" ? FormData : null, pn = typeof Blob < "u" ? Blob : null, hn = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), bn = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), R = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dn,
    FormData: mn,
    Blob: pn
  },
  isStandardBrowserEnv: hn,
  isStandardBrowserWebWorkerEnv: bn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function En(e, t) {
  return Z(e, new R.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return R.isNode && i.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function yn(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function st(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    const u = Number.isFinite(+a), m = o >= n.length;
    return a = !a && i.isArray(s) ? s.length : a, m ? (i.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !u) : ((!s[a] || !i.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && i.isArray(s[a]) && (s[a] = xn(s[a])), !u);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const n = {};
    return i.forEachEntry(e, (r, s) => {
      t(yn(r), s, n, 0);
    }), n;
  }
  return null;
}
function wn(e, t, n) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ye = {
  transitional: rt,
  adapter: R.isNode ? "http" : "xhr",
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = i.isObject(t);
    if (o && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t))
      return s && s ? JSON.stringify(st(t)) : t;
    if (i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t))
      return t;
    if (i.isArrayBufferView(t))
      return t.buffer;
    if (i.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return En(t, this.formSerializer).toString();
      if ((u = i.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Z(
          u ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), wn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ye.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && i.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (a)
          throw u.name === "SyntaxError" ? b.from(u, b.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
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
i.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ye.headers[e] = {};
});
const xe = ye, gn = i.toObjectSet([
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
]), Nn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && gn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, je = Symbol("internals");
function I(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(J) : String(e);
}
function On(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Sn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function oe(e, t, n, r, s) {
  if (i.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!i.isString(t)) {
    if (i.isString(r))
      return t.indexOf(r) !== -1;
    if (i.isRegExp(r))
      return r.test(t);
  }
}
function vn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Rn(e, t) {
  const n = i.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, a) {
        return this[r].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
class ee {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, m, c) {
      const d = I(m);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = i.findKey(s, d);
      (!f || s[f] === void 0 || c === !0 || c === void 0 && s[f] !== !1) && (s[f || m] = J(u));
    }
    const a = (u, m) => i.forEach(u, (c, d) => o(c, d, m));
    return i.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : i.isString(t) && (t = t.trim()) && !Sn(t) ? a(Nn(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = I(t), t) {
      const r = i.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return On(s);
        if (i.isFunction(n))
          return n.call(this, s, r);
        if (i.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = I(t), t) {
      const r = i.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || oe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = I(a), a) {
        const u = i.findKey(r, a);
        u && (!n || oe(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return i.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || oe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return i.forEach(this, (s, o) => {
      const a = i.findKey(r, o);
      if (a) {
        n[a] = J(s), delete n[o];
        return;
      }
      const u = t ? vn(o) : String(o).trim();
      u !== o && delete n[o], n[u] = J(s), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return i.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && i.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[je] = this[je] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const u = I(a);
      r[u] || (Rn(s, a), r[u] = !0);
    }
    return i.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
i.reduceDescriptors(ee.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
i.freezeMethods(ee);
const P = ee;
function ae(e, t) {
  const n = this || xe, r = t || n, s = P.from(r.headers);
  let o = r.data;
  return i.forEach(e, function(u) {
    o = u.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function ot(e) {
  return !!(e && e.__CANCEL__);
}
function z(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
i.inherits(z, b, {
  __CANCEL__: !0
});
function Tn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Cn = R.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, a, u) {
        const m = [];
        m.push(n + "=" + encodeURIComponent(r)), i.isNumber(s) && m.push("expires=" + new Date(s).toGMTString()), i.isString(o) && m.push("path=" + o), i.isString(a) && m.push("domain=" + a), u === !0 && m.push("secure"), document.cookie = m.join("; ");
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
function An(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function at(e, t) {
  return e && !An(t) ? Pn(e, t) : t;
}
const Dn = R.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let a = o;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
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
    return r = s(window.location.href), function(a) {
      const u = i.isString(a) ? s(a) : a;
      return u.protocol === r.protocol && u.host === r.host;
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
function _n(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function jn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const c = Date.now(), d = r[o];
    a || (a = c), n[s] = m, r[s] = c;
    let f = o, E = 0;
    for (; f !== s; )
      E += n[f++], f = f % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - a < t)
      return;
    const y = d && c - d;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function ke(e, t) {
  let n = 0;
  const r = jn(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, u = o - n, m = r(u), c = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: u,
      rate: m || void 0,
      estimated: m && a && c ? (a - o) / m : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const kn = typeof XMLHttpRequest < "u", Ln = kn && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = P.from(e.headers).normalize(), a = e.responseType;
    let u;
    function m() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    i.isFormData(s) && (R.isStandardBrowserEnv || R.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + p));
    }
    const d = at(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), nt(d, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const y = P.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), h = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      Tn(function(N) {
        n(N), m();
      }, function(N) {
        r(N), m();
      }, h), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (r(new b("Request aborted", b.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || rt;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), r(new b(
        p,
        h.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        c
      )), c = null;
    }, R.isStandardBrowserEnv) {
      const y = (e.withCredentials || Dn(d)) && e.xsrfCookieName && Cn.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && i.forEach(o.toJSON(), function(p, h) {
      c.setRequestHeader(h, p);
    }), i.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ke(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ke(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (y) => {
      c && (r(!y || y.type ? new z(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const E = _n(d);
    if (E && R.protocols.indexOf(E) === -1) {
      r(new b("Unsupported protocol " + E + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, W = {
  http: an,
  xhr: Ln
};
i.forEach(W, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const it = {
  getAdapter: (e) => {
    e = i.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = i.isString(n) ? W[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new b(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        i.hasOwnProp(W, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!i.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: W
};
function ie(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new z(null, e);
}
function Le(e) {
  return ie(e), e.headers = P.from(e.headers), e.data = ae.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), it.getAdapter(e.adapter || xe.adapter)(e).then(function(r) {
    return ie(e), r.data = ae.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return ot(r) || (ie(e), r && r.response && (r.response.data = ae.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const Ue = (e) => e instanceof P ? e.toJSON() : e;
function F(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f) {
    return i.isPlainObject(c) && i.isPlainObject(d) ? i.merge.call({ caseless: f }, c, d) : i.isPlainObject(d) ? i.merge({}, d) : i.isArray(d) ? d.slice() : d;
  }
  function s(c, d, f) {
    if (i.isUndefined(d)) {
      if (!i.isUndefined(c))
        return r(void 0, c, f);
    } else
      return r(c, d, f);
  }
  function o(c, d) {
    if (!i.isUndefined(d))
      return r(void 0, d);
  }
  function a(c, d) {
    if (i.isUndefined(d)) {
      if (!i.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, d);
  }
  function u(c, d, f) {
    if (f in t)
      return r(c, d);
    if (f in e)
      return r(void 0, c);
  }
  const m = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: u,
    headers: (c, d) => s(Ue(c), Ue(d), !0)
  };
  return i.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = m[d] || s, E = f(e[d], t[d], d);
    i.isUndefined(E) && f !== u || (n[d] = E);
  }), n;
}
const lt = "1.5.0", we = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  we[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fe = {};
we.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + lt + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, u) => {
    if (t === !1)
      throw new b(
        s(a, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Fe[a] && (Fe[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, u) : !0;
  };
};
function Un(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const u = e[o], m = u === void 0 || a(u, o, e);
      if (m !== !0)
        throw new b("option " + o + " must be " + m, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const de = {
  assertOptions: Un,
  validators: we
}, D = de.validators;
class K {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new _e(),
      response: new _e()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = F(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && de.assertOptions(r, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), s != null && (i.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : de.assertOptions(s, {
      encode: D.function,
      serialize: D.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && i.merge(
      o.common,
      o[n.method]
    );
    o && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = P.concat(a, o);
    const u = [];
    let m = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (m = m && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let d, f = 0, E;
    if (!m) {
      const p = [Le.bind(this), void 0];
      for (p.unshift.apply(p, u), p.push.apply(p, c), E = p.length, d = Promise.resolve(n); f < E; )
        d = d.then(p[f++], p[f++]);
      return d;
    }
    E = u.length;
    let y = n;
    for (f = 0; f < E; ) {
      const p = u[f++], h = u[f++];
      try {
        y = p(y);
      } catch (v) {
        h.call(this, v);
        break;
      }
    }
    try {
      d = Le.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, E = c.length; f < E; )
      d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = F(this.defaults, t);
    const n = at(t.baseURL, t.url);
    return nt(n, t.params, t.paramsSerializer);
  }
}
i.forEach(["delete", "get", "head", "options"], function(t) {
  K.prototype[t] = function(n, r) {
    return this.request(F(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, u) {
      return this.request(F(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  K.prototype[t] = n(), K.prototype[t + "Form"] = n(!0);
});
const G = K;
class ge {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, u) {
      r.reason || (r.reason = new z(o, a, u), n(r.reason));
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
      token: new ge(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Fn = ge;
function Bn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function In(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const me = {
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
Object.entries(me).forEach(([e, t]) => {
  me[t] = e;
});
const Mn = me;
function ct(e) {
  const t = new G(e), n = Ve(G.prototype.request, t);
  return i.extend(n, G.prototype, t, { allOwnKeys: !0 }), i.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ct(F(e, s));
  }, n;
}
const w = ct(xe);
w.Axios = G;
w.CanceledError = z;
w.CancelToken = Fn;
w.isCancel = ot;
w.VERSION = lt;
w.toFormData = Z;
w.AxiosError = b;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = Bn;
w.isAxiosError = In;
w.mergeConfig = F;
w.AxiosHeaders = P;
w.formToJSON = (e) => st(i.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = it.getAdapter;
w.HttpStatusCode = Mn;
w.default = w;
const te = w;
te.defaults.withCredentials = !0;
const $n = async (e, t, n, r, s) => {
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
        Variant: s
      }
    })
  };
  return te(o).catch((a) => a.response).then((a) => a.status);
}, zn = async (e, t, n) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${t}&GameID=${n}`
  };
  return te(r).catch((s) => s.response);
}, ut = async (e) => {
  let t = {
    method: "GET",
    url: `${e}/health`
  };
  return te(t).catch((n) => n.response);
};
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pe.apply(this, arguments);
}
var Be;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Be || (Be = {}));
function O(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function ft(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var Ie;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ie || (Ie = {}));
function qn(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = ""
  } = typeof e == "string" ? dt(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Vn(n, t) : t,
    search: Gn(r),
    hash: Kn(s)
  };
}
function Vn(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
  }), n.length > 1 ? n.join("/") : "/";
}
function le(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Hn(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Jn(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string" ? s = dt(e) : (s = pe({}, e), O(!s.pathname || !s.pathname.includes("?"), le("?", "pathname", "search", s)), O(!s.pathname || !s.pathname.includes("#"), le("#", "pathname", "hash", s)), O(!s.search || !s.search.includes("#"), le("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "", a = o ? "/" : s.pathname, u;
  if (r || a == null)
    u = n;
  else {
    let f = t.length - 1;
    if (a.startsWith("..")) {
      let E = a.split("/");
      for (; E[0] === ".."; )
        E.shift(), f -= 1;
      s.pathname = E.join("/");
    }
    u = f >= 0 ? t[f] : "/";
  }
  let m = qn(s, u), c = a && a !== "/" && a.endsWith("/"), d = (o || a === ".") && n.endsWith("/");
  return !m.pathname.endsWith("/") && (c || d) && (m.pathname += "/"), m;
}
const Wn = (e) => e.join("/").replace(/\/\/+/g, "/"), Gn = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Kn = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, mt = ["post", "put", "patch", "delete"];
new Set(mt);
const Xn = ["get", ...mt];
new Set(Xn);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function he() {
  return he = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, he.apply(this, arguments);
}
const Ne = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Ne.displayName = "DataRouter");
const Qn = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Qn.displayName = "DataRouterState");
const Yn = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Yn.displayName = "Await");
const Oe = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Oe.displayName = "Navigation");
const Se = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Se.displayName = "Location");
const q = /* @__PURE__ */ x.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (q.displayName = "Route");
const Zn = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Zn.displayName = "RouteError");
function pt() {
  return x.useContext(Se) != null;
}
function er() {
  return pt() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : O(!1)), x.useContext(Se).location;
}
const ht = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bt(e) {
  x.useContext(Oe).static || x.useLayoutEffect(e);
}
function ve() {
  let {
    isDataRoute: e
  } = x.useContext(q);
  return e ? ar() : tr();
}
function tr() {
  pt() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : O(!1));
  let e = x.useContext(Ne), {
    basename: t,
    navigator: n
  } = x.useContext(Oe), {
    matches: r
  } = x.useContext(q), {
    pathname: s
  } = er(), o = JSON.stringify(Hn(r).map((m) => m.pathnameBase)), a = x.useRef(!1);
  return bt(() => {
    a.current = !0;
  }), x.useCallback(function(m, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && ft(a.current, ht), !a.current)
      return;
    if (typeof m == "number") {
      n.go(m);
      return;
    }
    let d = Jn(m, JSON.parse(o), s, c.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Wn([t, d.pathname])), (c.replace ? n.replace : n.push)(d, c.state, c);
  }, [t, n, o, s, e]);
}
function nr() {
  let {
    matches: e
  } = x.useContext(q), t = e[e.length - 1];
  return t ? t.params : {};
}
var Et = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Et || {}), yt = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(yt || {});
function xt(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function rr(e) {
  let t = x.useContext(Ne);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, xt(e)) : O(!1)), t;
}
function sr(e) {
  let t = x.useContext(q);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, xt(e)) : O(!1)), t;
}
function or(e) {
  let t = sr(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? O(!1, e + ' can only be used on routes that contain a unique "id"') : O(!1)), n.route.id;
}
function ar() {
  let {
    router: e
  } = rr(Et.UseNavigateStable), t = or(yt.UseNavigateStable), n = x.useRef(!1);
  return bt(() => {
    n.current = !0;
  }), x.useCallback(function(s, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && ft(n.current, ht), n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, he({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
new Promise(() => {
});
function mr({ config: e }) {
  const t = ve();
  return setInterval(function() {
    async function n() {
      let r = await ut(e.host);
      r && r.status === 200 && t("/");
    }
    n();
  }, 5e3), /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center my-8 md:my-12" }, /* @__PURE__ */ l.createElement("div", { className: "w-full flex flex-col items-center mt-48" }, /* @__PURE__ */ l.createElement("p", { className: "font-black text-4xl italic" }, "We'll be right back!"), /* @__PURE__ */ l.createElement("p", { className: "mb-1 font-thin" }, /* @__PURE__ */ l.createElement("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1` }, e.key), " is down for maintenance")), /* @__PURE__ */ l.createElement("div", { className: "absolute bottom-8 md:bottom-12" }, /* @__PURE__ */ l.createElement(qe, null)));
}
const Me = [
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
], $e = [
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
], ce = {
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
var wt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ze = l.createContext && l.createContext(wt), j = globalThis && globalThis.__assign || function() {
  return j = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, j.apply(this, arguments);
}, ir = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
};
function gt(e) {
  return e && e.map(function(t, n) {
    return l.createElement(t.tag, j({
      key: n
    }, t.attr), gt(t.child));
  });
}
function Nt(e) {
  return function(t) {
    return l.createElement(lr, j({
      attr: j({}, e.attr)
    }, t), gt(e.child));
  };
}
function lr(e) {
  var t = function(n) {
    var r = e.attr, s = e.size, o = e.title, a = ir(e, ["attr", "size", "title"]), u = s || n.size || "1em", m;
    return n.className && (m = n.className), e.className && (m = (m ? m + " " : "") + e.className), l.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: m,
      style: j(j({
        color: e.color || n.color
      }, n.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && l.createElement("title", null, o), e.children);
  };
  return ze !== void 0 ? l.createElement(ze.Consumer, null, function(n) {
    return t(n);
  }) : t(wt);
}
function cr(e) {
  return Nt({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" } }, { tag: "path", attr: { d: "M277 360h-42V235h42v125zm0-166h-42v-42h42v42z" } }] })(e);
}
function pr({ config: e }) {
  const t = ve(), [n, r] = _(`${Me[Math.floor(Math.random() * Me.length)]}-${$e[Math.floor(Math.random() * $e.length)]}`), [s, o] = _(e.minTeams), [a, u] = _(Object.keys(e.variants).length > 0 ? Object.keys(e.variants)[0] : null), [m, c] = _(!1);
  U(() => {
    async function f() {
      let E = await ut(e.host);
      (!E || E.status !== 200) && t("/status/down");
    }
    f();
  }, [history]);
  async function d(f) {
    f.preventDefault();
    let E = await $n(e.host, e.key, n, s, a);
    (E === 201 || E === 400) && t(`/${n}`);
  }
  return /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center m-8 md:m-12" }, m ? /* @__PURE__ */ l.createElement("div", { className: "absolute w-full h-full top-0 bg-zinc-500 bg-opacity-50 flex items-center justify-center fade-in" }, /* @__PURE__ */ l.createElement("div", { className: "px-4 py-4 bg-zinc-800 mx-2" }, /* @__PURE__ */ l.createElement("p", { className: "font-bold text-center mb-1" }, /* @__PURE__ */ l.createElement("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1` }, e.key), " variants"), Object.keys(e.variants).map((f) => /* @__PURE__ */ l.createElement("p", { key: f, className: "text-sm" }, /* @__PURE__ */ l.createElement("span", { className: "font-bold" }, f, ":"), " ", e.variants[f])), /* @__PURE__ */ l.createElement("button", { className: "w-full bg-red-500 mt-2", onClick: () => c(!1) }, "close"))) : /* @__PURE__ */ l.createElement(l.Fragment, null), /* @__PURE__ */ l.createElement("div", { className: "w-full max-w-2xl" }, /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center fade-in" }, /* @__PURE__ */ l.createElement("div", { className: ` text-5xl font-black font-['${e.font}'] text-${e.color} mb-1 cursor-pointer` }, /* @__PURE__ */ l.createElement("a", { href: `${window.location.protocol}//${window.location.host}` }, e.key)), /* @__PURE__ */ l.createElement("div", { className: "font-thin mb-3" }, "Play ", e.minTeams === e.maxTeams ? `${ce[e.minTeams]}` : `${ce[e.minTeams]} to ${ce[e.maxTeams]}`, " player ", e.key, " online against friends. To create a game or join an existing one, enter a game ID and click 'Go'."), /* @__PURE__ */ l.createElement("form", { className: "w-full flex mb-2", onSubmit: d }, /* @__PURE__ */ l.createElement("input", { className: "w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2", autoFocus: !0, type: "text", value: n, onChange: (f) => r(f.target.value) }), /* @__PURE__ */ l.createElement("button", { className: "w-2/12 font-bold grow-0 bg-blue-500" }, "Go")), /* @__PURE__ */ l.createElement("div", { className: "flex w-full justify-between flex-wrap" }, /* @__PURE__ */ l.createElement("div", { className: "italic text-xs bg-blue-500 py-1 px-2 order-2 md:order-1" }, /* @__PURE__ */ l.createElement("a", { href: "https://quibbble.com" }, "more ", /* @__PURE__ */ l.createElement("span", { className: "font-['lobster'] text-sm not-italic" }, "quibbble"), " games")), /* @__PURE__ */ l.createElement("div", { className: "flex items-center order-1 md:order-2 mb-2 md:mb-0" }, a ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(cr, { className: "mr-1 text-xl cursor-pointer", onClick: () => c(!0) }), /* @__PURE__ */ l.createElement("div", { className: "mr-1 font-black text-blue-500" }, "VARIANT"), /* @__PURE__ */ l.createElement("select", { className: "mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (f) => u(f.target.value.replace(/\s/g, "")) }, Object.keys(e.variants).map((f) => /* @__PURE__ */ l.createElement("option", { key: f, value: f }, f)))) : null, e.minTeams !== e.maxTeams ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "mx-1 font-black text-blue-500" }, "PLAYERS"), /* @__PURE__ */ l.createElement("select", { className: "bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (f) => o(parseInt(f.target.value)) }, Array(e.maxTeams - e.minTeams + 1).fill().map((f, E) => e.minTeams + E).map((f) => /* @__PURE__ */ l.createElement("option", { key: f, value: f }, f)))) : null)))), /* @__PURE__ */ l.createElement("div", { className: "absolute bottom-8 md:bottom-12" }, /* @__PURE__ */ l.createElement(qe, null))));
}
function ur(e) {
  return Nt({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function fr({ isConn: e }) {
  const [t, n] = _(0);
  return U(() => {
    e ? setTimeout(() => n((r) => r - 1), 1500) : n(0);
  }, [e, n]), /* @__PURE__ */ l.createElement("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}` }, t ? null : /* @__PURE__ */ l.createElement("div", { className: "px-1" }, e ? "connected" : "reconnecting"), /* @__PURE__ */ l.createElement("div", { onClick: () => {
    e && (n(0), setTimeout(() => n(t - 1), 1500));
  }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}` }, e ? null : /* @__PURE__ */ l.createElement("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" })));
}
function hr({
  config: e,
  ref: t,
  ws: n,
  game: r,
  setGame: s,
  network: o,
  setNetwork: a,
  chat: u,
  setChat: m,
  connected: c,
  setConnected: d,
  error: f,
  setError: E,
  children: y
}) {
  const p = ve(), { gameID: h } = nr(), [v, N] = _(!0);
  U(() => {
    c && o && c[o.Name] && sessionStorage.setItem(h, c[o.Name]);
  }, [o, c, h]), U(() => {
    const g = async (re) => {
      if (re <= 0) {
        p("/");
        return;
      }
      let Te = await zn(e.host, e.key, h);
      if (!Te) {
        p("/status/down");
        return;
      }
      if (Te.status !== 200) {
        p("/");
        return;
      }
      n.current = new WebSocket(`${e.websocket}/game/join?GameKey=${e.key}&GameID=${h}`), n.current.onopen = () => {
        N(!0);
        let L = sessionStorage.getItem(h);
        L && A(L);
      }, n.current.onclose = () => {
        N(!1), setTimeout(function() {
          g(re - 1);
        }, 1e3 + (3 - re) * 500);
      }, n.current.onmessage = async (L) => {
        let T = JSON.parse(L.data);
        T.Type === "Game" ? s(T.Payload) : T.Type === "Network" ? a(T.Payload) : T.Type === "Chat" ? m((vt) => vt.concat([T.Payload])) : T.Type === "Connected" ? d(T.Payload) : T.Type === "Error" && E(T.Payload);
      }, n.current.onerror = (L) => {
        console.error("Socket encountered error: ", L.message, "Closing socket"), n.current.close();
      };
    };
    g(3);
  }, [n, h, history]);
  const A = (g) => {
    n.current && n.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: g } }));
  }, k = () => {
    if (!n.current)
      return;
    const g = r && r.MoreData && r.MoreData.Variant ? r.MoreData.Variant : "";
    n.current.send(JSON.stringify({ ActionType: "Reset", MoreDetails: { MoreOptions: { Seed: Date.now(), Variant: g } } }));
  }, [ne, Ot] = _(!0);
  U(() => {
    const g = () => Ot(!ne);
    return window.addEventListener("resize", g), (St) => window.removeEventListener("resize", g);
  });
  const [V, Re] = _(0);
  return U(() => {
    V > 0 && setTimeout(() => Re(V - 1), 1e3);
  }, [V]), /* @__PURE__ */ l.createElement("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4" }, /* @__PURE__ */ l.createElement("div", { ref: t, className: "h-full w-full flex flex-col items-center max-w-full max-w-xl grow" }, /* @__PURE__ */ l.createElement("div", { className: "text-red-500 text-blue-500 text-green-500 text-yellow-500 text-orange-500 text-pink-500 text-purple-500 text-teal-500" }), /* @__PURE__ */ l.createElement("div", { className: "border-red-500 border-blue-500 border-green-500 border-yellow-500 border-orange-500 border-pink-500 border-purple-500 border-teal-500" }), /* @__PURE__ */ l.createElement("div", { className: "bg-red-500 bg-blue-500 bg-green-500 bg-yellow-500 bg-orange-500 bg-pink-500 bg-pink-500 bg-purple-500 bg-teal-500" }), /* @__PURE__ */ l.createElement("div", { className: "fill-red-500 fill-blue-500 fill-green-500 fill-yellow-500 fill-orange-500 fill-pink-500 fill-pink-500 fill-purple-500 fill-teal-500" }), /* @__PURE__ */ l.createElement("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm" }, /* @__PURE__ */ l.createElement("div", null, "Share this link: ", /* @__PURE__ */ l.createElement("span", { className: "underline cursor-pointer", onClick: () => {
    Re(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${h}`);
  } }, `${window.location.protocol}//${window.location.host}/${h}`), V > 0 ? /* @__PURE__ */ l.createElement("div", { className: "absolute mt-2 w-full flex justify-center" }, /* @__PURE__ */ l.createElement("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block" }, /* @__PURE__ */ l.createElement("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" })), /* @__PURE__ */ l.createElement("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1" }, "copied!")) : null), /* @__PURE__ */ l.createElement("div", { className: "px-1" }, /* @__PURE__ */ l.createElement(fr, { isConn: v }))), /* @__PURE__ */ l.createElement("hr", { className: "w-full mb-2" }), /* @__PURE__ */ l.createElement("div", { className: "flex w-full justify-between items-center mb-4" }, /* @__PURE__ */ l.createElement("div", { className: "flex" }, r ? r.Teams.map((g) => /* @__PURE__ */ l.createElement(
    "div",
    {
      key: g,
      className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${g}-500 ${o && c && c[o.Name] === g ? `bg-${c[o.Name]}-500` : ""}`,
      onClick: () => A(g)
    },
    r && ["LongestPath", "MostCrossings"].includes(r.MoreData.Variant) ? r.MoreData.Points[g] : ""
  )) : null), /* @__PURE__ */ l.createElement("div", { className: `font-extrabold ${r && c && o && c[o.Name] && r.Winners.length === 0 ? `text-${r.Turn}-500` : "text-zinc-100"} ${r && o && c && c[o.Name] === r.Turn && r.Winners.length === 0 ? "animate-pulse" : ""}` }, r && c && o && c[o.Name] ? r.Message : /* @__PURE__ */ l.createElement("div", { className: "flex items-center animate-pulse" }, /* @__PURE__ */ l.createElement(ur, { className: "mr-1" }), /* @__PURE__ */ l.createElement("div", null, "select a team")))), /* @__PURE__ */ l.createElement("div", { className: "h-full flex flex-col justify-center items-center grow" }, y), /* @__PURE__ */ l.createElement("hr", { className: "w-full mb-2" }), /* @__PURE__ */ l.createElement("div", { className: "w-full flex justify-between items-center" }, /* @__PURE__ */ l.createElement("div", { className: `leading-4 text-2xl font-black text-${e.color} cursor-pointer` }, /* @__PURE__ */ l.createElement("a", { href: `${window.location.protocol}//${window.location.host}` }, /* @__PURE__ */ l.createElement("span", { className: `font-['${e.font}']` }, e.key), /* @__PURE__ */ l.createElement("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100" }, r && r.MoreData && r.MoreData.Variant ? r.MoreData.Variant : ""))), /* @__PURE__ */ l.createElement("div", { className: "flex" }, /* @__PURE__ */ l.createElement("div", { className: "flex" }, /* @__PURE__ */ l.createElement("div", { className: `px-3 py-1 font-bold cursor-pointer flex items-center justify-center text-xs bg-zinc-600 mr-2 ${r && r.Winners.length > 0 ? "animate-pulse" : ""}`, onClick: () => k() }, "new game")), /* @__PURE__ */ l.createElement("div", { className: "italic text-xs bg-blue-500 py-1 px-2" }, /* @__PURE__ */ l.createElement("a", { href: "https://quibbble.com" }, "more ", /* @__PURE__ */ l.createElement("span", { className: "font-['lobster'] text-sm not-italic" }, "quibbble"), " games"))))));
}
export {
  mr as DownPage,
  hr as GamePage,
  pr as HomePage
};
