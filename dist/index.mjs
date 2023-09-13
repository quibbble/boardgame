import l, { useState as v, useEffect as _, forwardRef as it } from "react";
import { useNavigate as ue, useParams as lt } from "react-router-dom";
function De() {
  return /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center w-full font-light text-sm" }, /* @__PURE__ */ l.createElement("div", { className: "flex" }, /* @__PURE__ */ l.createElement("a", { href: "mailto:hello@quibbble.com" }, /* @__PURE__ */ l.createElement("p", null, "Contact")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://www.buymeacoffee.com/quibbble", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Support")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://discord.gg/VKvjutuhUp", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Discord")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://status.quibbble.com", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Status")), /* @__PURE__ */ l.createElement("p", { className: "mx-2 md:mx-4" }, "/"), /* @__PURE__ */ l.createElement("a", { href: "https://github.com/quibbble", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ l.createElement("p", null, "Code"))), /* @__PURE__ */ l.createElement("p", { className: "mt-2 italic" }, "Made with 🤍 by ", /* @__PURE__ */ l.createElement("a", { className: "underline", href: "https://chrisfregly.com", target: "_blank", rel: "noreferrer" }, "Chris Fregly")));
}
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ct } = Object.prototype, { getPrototypeOf: fe } = Object, G = ((e) => (t) => {
  const n = ct.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), R = (e) => (e = e.toLowerCase(), (t) => G(t) === e), W = (e) => (t) => typeof t === e, { isArray: B } = Array, U = W("undefined");
function ut(e) {
  return e !== null && !U(e) && e.constructor !== null && !U(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _e = R("ArrayBuffer");
function ft(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _e(e.buffer), t;
}
const mt = W("string"), S = W("function"), je = W("number"), K = (e) => e !== null && typeof e == "object", dt = (e) => e === !0 || e === !1, M = (e) => {
  if (G(e) !== "object")
    return !1;
  const t = fe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, pt = R("Date"), ht = R("File"), bt = R("Blob"), yt = R("FileList"), Et = (e) => K(e) && S(e.pipe), wt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || S(e.append) && ((t = G(e)) === "formdata" || // detect form-data instance
  t === "object" && S(e.toString) && e.toString() === "[object FormData]"));
}, xt = R("URLSearchParams"), gt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let u;
    for (r = 0; r < o; r++)
      u = a[r], t.call(null, e[u], u, e);
  }
}
function Be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Le = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ue = (e) => !U(e) && e !== Le;
function ae() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, s) => {
    const a = e && Be(t, s) || s;
    M(t[a]) && M(r) ? t[a] = ae(t[a], r) : M(r) ? t[a] = ae({}, r) : B(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && $(arguments[r], n);
  return t;
}
const Nt = (e, t, n, { allOwnKeys: r } = {}) => ($(t, (s, a) => {
  n && S(s) ? e[a] = Fe(s, n) : e[a] = s;
}, { allOwnKeys: r }), e), St = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ot = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Tt = (e, t, n, r) => {
  let s, a, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!r || r(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = n !== !1 && fe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Rt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, At = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!je(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ct = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && fe(Uint8Array)), Pt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, vt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, kt = R("HTMLFormElement"), Dt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), we = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ft = R("RegExp"), $e = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $(n, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (r[a] = o || s);
  }), Object.defineProperties(e, r);
}, _t = (e) => {
  $e(e, (t, n) => {
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
}, jt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Bt = () => {
}, Lt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), te = "abcdefghijklmnopqrstuvwxyz", xe = "0123456789", ze = {
  DIGIT: xe,
  ALPHA: te,
  ALPHA_DIGIT: te + te.toUpperCase() + xe
}, Ut = (e = 16, t = ze.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function $t(e) {
  return !!(e && S(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const zt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const a = B(r) ? [] : {};
        return $(r, (o, u) => {
          const p = n(o, s + 1);
          !U(p) && (a[u] = p);
        }), t[s] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, It = R("AsyncFunction"), Mt = (e) => e && (K(e) || S(e)) && S(e.then) && S(e.catch), i = {
  isArray: B,
  isArrayBuffer: _e,
  isBuffer: ut,
  isFormData: wt,
  isArrayBufferView: ft,
  isString: mt,
  isNumber: je,
  isBoolean: dt,
  isObject: K,
  isPlainObject: M,
  isUndefined: U,
  isDate: pt,
  isFile: ht,
  isBlob: bt,
  isRegExp: Ft,
  isFunction: S,
  isStream: Et,
  isURLSearchParams: xt,
  isTypedArray: Ct,
  isFileList: yt,
  forEach: $,
  merge: ae,
  extend: Nt,
  trim: gt,
  stripBOM: St,
  inherits: Ot,
  toFlatObject: Tt,
  kindOf: G,
  kindOfTest: R,
  endsWith: Rt,
  toArray: At,
  forEachEntry: Pt,
  matchAll: vt,
  isHTMLForm: kt,
  hasOwnProperty: we,
  hasOwnProp: we,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $e,
  freezeMethods: _t,
  toObjectSet: jt,
  toCamelCase: Dt,
  noop: Bt,
  toFiniteNumber: Lt,
  findKey: Be,
  global: Le,
  isContextDefined: Ue,
  ALPHABET: ze,
  generateString: Ut,
  isSpecCompliantForm: $t,
  toJSONObject: zt,
  isAsyncFn: It,
  isThenable: Mt
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
const Ie = b.prototype, Me = {};
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
  Me[e] = { value: e };
});
Object.defineProperties(b, Me);
Object.defineProperty(Ie, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, a) => {
  const o = Object.create(Ie);
  return i.toFlatObject(e, o, function(p) {
    return p !== Error.prototype;
  }, (u) => u !== "isAxiosError"), b.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const Ht = null;
function ie(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function He(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ge(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = He(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function qt(e) {
  return i.isArray(e) && !e.some(ie);
}
const Vt = i.toFlatObject(i, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function X(e, t, n) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = i.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, g) {
    return !i.isUndefined(g[h]);
  });
  const r = n.metaTokens, s = n.visitor || f, a = n.dots, o = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && i.isSpecCompliantForm(t);
  if (!i.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null)
      return "";
    if (i.isDate(d))
      return d.toISOString();
    if (!p && i.isBlob(d))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(d) || i.isTypedArray(d) ? p && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function f(d, h, g) {
    let N = d;
    if (d && !g && typeof d == "object") {
      if (i.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (i.isArray(d) && qt(d) || (i.isFileList(d) || i.endsWith(h, "[]")) && (N = i.toArray(d)))
        return h = He(h), N.forEach(function(D, Z) {
          !(i.isUndefined(D) || D === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ge([h], Z, a) : o === null ? h : h + "[]",
            c(D)
          );
        }), !1;
    }
    return ie(d) ? !0 : (t.append(ge(g, h, a), c(d)), !1);
  }
  const m = [], y = Object.assign(Vt, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: ie
  });
  function E(d, h) {
    if (!i.isUndefined(d)) {
      if (m.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      m.push(d), i.forEach(d, function(N, A) {
        (!(i.isUndefined(N) || N === null) && s.call(
          t,
          N,
          i.isString(A) ? A.trim() : A,
          h,
          y
        )) === !0 && E(N, h ? h.concat(A) : [A]);
      }), m.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ne(e) {
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
function me(e, t) {
  this._pairs = [], e && X(e, this, t);
}
const qe = me.prototype;
qe.append = function(t, n) {
  this._pairs.push([t, n]);
};
qe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ne);
  } : Ne;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Jt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ve(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Jt, s = n && n.serialize;
  let a;
  if (s ? a = s(t, n) : a = i.isURLSearchParams(t) ? t.toString() : new me(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Gt {
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
const Se = Gt, Je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wt = typeof URLSearchParams < "u" ? URLSearchParams : me, Kt = typeof FormData < "u" ? FormData : null, Xt = typeof Blob < "u" ? Blob : null, Qt = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Yt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), O = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wt,
    FormData: Kt,
    Blob: Xt
  },
  isStandardBrowserEnv: Qt,
  isStandardBrowserWebWorkerEnv: Yt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Zt(e, t) {
  return X(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, a) {
      return O.isNode && i.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function en(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function tn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Ge(e) {
  function t(n, r, s, a) {
    let o = n[a++];
    const u = Number.isFinite(+o), p = a >= n.length;
    return o = !o && i.isArray(s) ? s.length : o, p ? (i.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !u) : ((!s[o] || !i.isObject(s[o])) && (s[o] = []), t(n, r, s[o], a) && i.isArray(s[o]) && (s[o] = tn(s[o])), !u);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const n = {};
    return i.forEachEntry(e, (r, s) => {
      t(en(r), s, n, 0);
    }), n;
  }
  return null;
}
function nn(e, t, n) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const de = {
  transitional: Je,
  adapter: O.isNode ? "http" : "xhr",
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = i.isObject(t);
    if (a && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t))
      return s && s ? JSON.stringify(Ge(t)) : t;
    if (i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t))
      return t;
    if (i.isArrayBufferView(t))
      return t.buffer;
    if (i.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Zt(t, this.formSerializer).toString();
      if ((u = i.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return X(
          u ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), nn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || de.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && i.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
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
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
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
  de.headers[e] = {};
});
const pe = de, rn = i.toObjectSet([
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
]), sn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && rn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Oe = Symbol("internals");
function L(e) {
  return e && String(e).trim().toLowerCase();
}
function H(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(H) : String(e);
}
function on(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const an = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ne(e, t, n, r, s) {
  if (i.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!i.isString(t)) {
    if (i.isString(r))
      return t.indexOf(r) !== -1;
    if (i.isRegExp(r))
      return r.test(t);
  }
}
function ln(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function cn(e, t) {
  const n = i.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, a, o) {
        return this[r].call(this, t, s, a, o);
      },
      configurable: !0
    });
  });
}
class Q {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(u, p, c) {
      const f = L(p);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const m = i.findKey(s, f);
      (!m || s[m] === void 0 || c === !0 || c === void 0 && s[m] !== !1) && (s[m || p] = H(u));
    }
    const o = (u, p) => i.forEach(u, (c, f) => a(c, f, p));
    return i.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : i.isString(t) && (t = t.trim()) && !an(t) ? o(sn(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = L(t), t) {
      const r = i.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return on(s);
        if (i.isFunction(n))
          return n.call(this, s, r);
        if (i.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = L(t), t) {
      const r = i.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ne(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(o) {
      if (o = L(o), o) {
        const u = i.findKey(r, o);
        u && (!n || ne(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return i.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ne(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return i.forEach(this, (s, a) => {
      const o = i.findKey(r, a);
      if (o) {
        n[o] = H(s), delete n[a];
        return;
      }
      const u = t ? ln(a) : String(a).trim();
      u !== a && delete n[a], n[u] = H(s), r[u] = !0;
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
    const r = (this[Oe] = this[Oe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const u = L(o);
      r[u] || (cn(s, o), r[u] = !0);
    }
    return i.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Q.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
i.reduceDescriptors(Q.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
i.freezeMethods(Q);
const C = Q;
function re(e, t) {
  const n = this || pe, r = t || n, s = C.from(r.headers);
  let a = r.data;
  return i.forEach(e, function(u) {
    a = u.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function We(e) {
  return !!(e && e.__CANCEL__);
}
function z(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
i.inherits(z, b, {
  __CANCEL__: !0
});
function un(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const fn = O.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, a, o, u) {
        const p = [];
        p.push(n + "=" + encodeURIComponent(r)), i.isNumber(s) && p.push("expires=" + new Date(s).toGMTString()), i.isString(a) && p.push("path=" + a), i.isString(o) && p.push("domain=" + o), u === !0 && p.push("secure"), document.cookie = p.join("; ");
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
function mn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ke(e, t) {
  return e && !mn(t) ? dn(e, t) : t;
}
const pn = O.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(a) {
      let o = a;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
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
    return r = s(window.location.href), function(o) {
      const u = i.isString(o) ? s(o) : o;
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
function hn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function bn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const c = Date.now(), f = r[a];
    o || (o = c), n[s] = p, r[s] = c;
    let m = a, y = 0;
    for (; m !== s; )
      y += n[m++], m = m % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), c - o < t)
      return;
    const E = f && c - f;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function Te(e, t) {
  let n = 0;
  const r = bn(50, 250);
  return (s) => {
    const a = s.loaded, o = s.lengthComputable ? s.total : void 0, u = a - n, p = r(u), c = a <= o;
    n = a;
    const f = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: u,
      rate: p || void 0,
      estimated: p && o && c ? (o - a) / p : void 0,
      event: s
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const yn = typeof XMLHttpRequest < "u", En = yn && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const a = C.from(e.headers).normalize(), o = e.responseType;
    let u;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    i.isFormData(s) && (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const E = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(E + ":" + d));
    }
    const f = Ke(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ve(f, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function m() {
      if (!c)
        return;
      const E = C.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), h = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: E,
        config: e,
        request: c
      };
      un(function(N) {
        n(N), p();
      }, function(N) {
        r(N), p();
      }, h), c = null;
    }
    if ("onloadend" in c ? c.onloadend = m : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, c.onabort = function() {
      c && (r(new b("Request aborted", b.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || Je;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new b(
        d,
        h.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        c
      )), c = null;
    }, O.isStandardBrowserEnv) {
      const E = (e.withCredentials || pn(f)) && e.xsrfCookieName && fn.read(e.xsrfCookieName);
      E && a.set(e.xsrfHeaderName, E);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in c && i.forEach(a.toJSON(), function(d, h) {
      c.setRequestHeader(h, d);
    }), i.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Te(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Te(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (E) => {
      c && (r(!E || E.type ? new z(null, e, c) : E), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const y = hn(f);
    if (y && O.protocols.indexOf(y) === -1) {
      r(new b("Unsupported protocol " + y + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, q = {
  http: Ht,
  xhr: En
};
i.forEach(q, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Xe = {
  getAdapter: (e) => {
    e = i.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = i.isString(n) ? q[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new b(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        i.hasOwnProp(q, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!i.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: q
};
function se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new z(null, e);
}
function Re(e) {
  return se(e), e.headers = C.from(e.headers), e.data = re.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xe.getAdapter(e.adapter || pe.adapter)(e).then(function(r) {
    return se(e), r.data = re.call(
      e,
      e.transformResponse,
      r
    ), r.headers = C.from(r.headers), r;
  }, function(r) {
    return We(r) || (se(e), r && r.response && (r.response.data = re.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = C.from(r.response.headers))), Promise.reject(r);
  });
}
const Ae = (e) => e instanceof C ? e.toJSON() : e;
function j(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, m) {
    return i.isPlainObject(c) && i.isPlainObject(f) ? i.merge.call({ caseless: m }, c, f) : i.isPlainObject(f) ? i.merge({}, f) : i.isArray(f) ? f.slice() : f;
  }
  function s(c, f, m) {
    if (i.isUndefined(f)) {
      if (!i.isUndefined(c))
        return r(void 0, c, m);
    } else
      return r(c, f, m);
  }
  function a(c, f) {
    if (!i.isUndefined(f))
      return r(void 0, f);
  }
  function o(c, f) {
    if (i.isUndefined(f)) {
      if (!i.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, f);
  }
  function u(c, f, m) {
    if (m in t)
      return r(c, f);
    if (m in e)
      return r(void 0, c);
  }
  const p = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: u,
    headers: (c, f) => s(Ae(c), Ae(f), !0)
  };
  return i.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const m = p[f] || s, y = m(e[f], t[f], f);
    i.isUndefined(y) && m !== u || (n[f] = y);
  }), n;
}
const Qe = "1.5.0", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  he[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ce = {};
he.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + Qe + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, u) => {
    if (t === !1)
      throw new b(
        s(o, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Ce[o] && (Ce[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, u) : !0;
  };
};
function wn(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], o = t[a];
    if (o) {
      const u = e[a], p = u === void 0 || o(u, a, e);
      if (p !== !0)
        throw new b("option " + a + " must be " + p, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + a, b.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: wn,
  validators: he
}, P = le.validators;
class J {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Se(),
      response: new Se()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 && le.assertOptions(r, {
      silentJSONParsing: P.transitional(P.boolean),
      forcedJSONParsing: P.transitional(P.boolean),
      clarifyTimeoutError: P.transitional(P.boolean)
    }, !1), s != null && (i.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : le.assertOptions(s, {
      encode: P.function,
      serialize: P.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = a && i.merge(
      a.common,
      a[n.method]
    );
    a && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), n.headers = C.concat(o, a);
    const u = [];
    let p = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (p = p && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let f, m = 0, y;
    if (!p) {
      const d = [Re.bind(this), void 0];
      for (d.unshift.apply(d, u), d.push.apply(d, c), y = d.length, f = Promise.resolve(n); m < y; )
        f = f.then(d[m++], d[m++]);
      return f;
    }
    y = u.length;
    let E = n;
    for (m = 0; m < y; ) {
      const d = u[m++], h = u[m++];
      try {
        E = d(E);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      f = Re.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (m = 0, y = c.length; m < y; )
      f = f.then(c[m++], c[m++]);
    return f;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = Ke(t.baseURL, t.url);
    return Ve(n, t.params, t.paramsSerializer);
  }
}
i.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, o, u) {
      return this.request(j(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  J.prototype[t] = n(), J.prototype[t + "Form"] = n(!0);
});
const V = J;
class be {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((u) => {
        r.subscribe(u), a = u;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(a);
      }, o;
    }, t(function(a, o, u) {
      r.reason || (r.reason = new z(a, o, u), n(r.reason));
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
      token: new be(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const xn = be;
function gn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Nn(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const ce = {
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
Object.entries(ce).forEach(([e, t]) => {
  ce[t] = e;
});
const Sn = ce;
function Ye(e) {
  const t = new V(e), n = Fe(V.prototype.request, t);
  return i.extend(n, V.prototype, t, { allOwnKeys: !0 }), i.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ye(j(e, s));
  }, n;
}
const w = Ye(pe);
w.Axios = V;
w.CanceledError = z;
w.CancelToken = xn;
w.isCancel = We;
w.VERSION = Qe;
w.toFormData = X;
w.AxiosError = b;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = gn;
w.isAxiosError = Nn;
w.mergeConfig = j;
w.AxiosHeaders = C;
w.formToJSON = (e) => Ge(i.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Xe.getAdapter;
w.HttpStatusCode = Sn;
w.default = w;
const Y = w;
Y.defaults.withCredentials = !0;
const On = async (e, t, n, r, s) => {
  let a = {
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
  return Y(a).catch((o) => o.response).then((o) => o.status);
}, Tn = async (e, t, n) => {
  let r = {
    method: "GET",
    url: `${e}/game/snapshot?GameKey=${t}&GameID=${n}`
  };
  return Y(r).catch((s) => s.response);
}, Ze = async (e) => {
  let t = {
    method: "GET",
    url: `${e}/health`
  };
  return Y(t).catch((n) => n.response);
};
function Fn({ config: e }) {
  const t = ue();
  return setInterval(function() {
    async function n() {
      let r = await Ze(e.host);
      r && r.status === 200 && t("/");
    }
    n();
  }, 5e3), /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center my-8 md:my-12" }, /* @__PURE__ */ l.createElement("div", { className: "w-full flex flex-col items-center mt-48" }, /* @__PURE__ */ l.createElement("p", { className: "font-black text-4xl italic" }, "We'll be right back!"), /* @__PURE__ */ l.createElement("p", { className: "mb-1 font-thin" }, /* @__PURE__ */ l.createElement("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1` }, e.key), " is down for maintenance")), /* @__PURE__ */ l.createElement("div", { className: "absolute bottom-8 md:bottom-12" }, /* @__PURE__ */ l.createElement(De, null)));
}
const Pe = [
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
], ve = [
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
], oe = {
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
var et = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ke = l.createContext && l.createContext(et), k = globalThis && globalThis.__assign || function() {
  return k = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, k.apply(this, arguments);
}, Rn = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
};
function tt(e) {
  return e && e.map(function(t, n) {
    return l.createElement(t.tag, k({
      key: n
    }, t.attr), tt(t.child));
  });
}
function nt(e) {
  return function(t) {
    return l.createElement(An, k({
      attr: k({}, e.attr)
    }, t), tt(e.child));
  };
}
function An(e) {
  var t = function(n) {
    var r = e.attr, s = e.size, a = e.title, o = Rn(e, ["attr", "size", "title"]), u = s || n.size || "1em", p;
    return n.className && (p = n.className), e.className && (p = (p ? p + " " : "") + e.className), l.createElement("svg", k({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, o, {
      className: p,
      style: k(k({
        color: e.color || n.color
      }, n.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && l.createElement("title", null, a), e.children);
  };
  return ke !== void 0 ? l.createElement(ke.Consumer, null, function(n) {
    return t(n);
  }) : t(et);
}
function Cn(e) {
  return nt({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" } }, { tag: "path", attr: { d: "M277 360h-42V235h42v125zm0-166h-42v-42h42v42z" } }] })(e);
}
function _n({ config: e }) {
  const t = ue(), [n, r] = v(`${Pe[Math.floor(Math.random() * Pe.length)]}-${ve[Math.floor(Math.random() * ve.length)]}`), [s, a] = v(e.minTeams), [o, u] = v(Object.keys(e.variants).length > 0 ? Object.keys(e.variants)[0] : null), [p, c] = v(!1);
  _(() => {
    async function m() {
      let y = await Ze(e.host);
      (!y || y.status !== 200) && t("/status/down");
    }
    m();
  }, [history]);
  async function f(m) {
    m.preventDefault();
    let y = await On(e.host, e.key, n, s, o);
    (y === 201 || y === 400) && t(`/${n}`);
  }
  return /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center m-8 md:m-12" }, p ? /* @__PURE__ */ l.createElement("div", { className: "absolute w-full h-full top-0 bg-zinc-500 bg-opacity-50 flex items-center justify-center fade-in" }, /* @__PURE__ */ l.createElement("div", { className: "px-4 py-4 bg-zinc-800 mx-2" }, /* @__PURE__ */ l.createElement("p", { className: "font-bold text-center mb-1" }, /* @__PURE__ */ l.createElement("span", { className: `text-3xl font-black font-['${e.font}'] text-${e.color} mr-1` }, e.key), " variants"), Object.keys(e.variants).map((m) => /* @__PURE__ */ l.createElement("p", { key: m, className: "text-sm" }, /* @__PURE__ */ l.createElement("span", { className: "font-bold" }, m, ":"), " ", e.variants[m])), /* @__PURE__ */ l.createElement("button", { className: "w-full bg-red-500 mt-2", onClick: () => c(!1) }, "close"))) : /* @__PURE__ */ l.createElement(l.Fragment, null), /* @__PURE__ */ l.createElement("div", { className: "w-full max-w-2xl" }, /* @__PURE__ */ l.createElement("div", { className: "flex flex-col items-center fade-in" }, /* @__PURE__ */ l.createElement("div", { className: ` text-5xl font-black font-['${e.font}'] text-${e.color} mb-1 cursor-pointer` }, /* @__PURE__ */ l.createElement("a", { href: `${window.location.protocol}//${window.location.host}` }, e.key)), /* @__PURE__ */ l.createElement("div", { className: "font-thin mb-3" }, "Play ", e.minTeams === e.maxTeams ? `${oe[e.minTeams]}` : `${oe[e.minTeams]} to ${oe[e.maxTeams]}`, " player ", e.key, " online against friends. To create a game or join an existing one, enter a game ID and click 'Go'."), /* @__PURE__ */ l.createElement("form", { className: "w-full flex mb-2", onSubmit: f }, /* @__PURE__ */ l.createElement("input", { className: "w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2", autoFocus: !0, type: "text", value: n, onChange: (m) => r(m.target.value) }), /* @__PURE__ */ l.createElement("button", { className: "w-2/12 font-bold grow-0 bg-blue-500" }, "Go")), /* @__PURE__ */ l.createElement("div", { className: "flex w-full justify-between flex-wrap" }, /* @__PURE__ */ l.createElement("div", { className: "italic text-xs bg-blue-500 py-1 px-2 order-2 md:order-1" }, /* @__PURE__ */ l.createElement("a", { href: "https://quibbble.com" }, "more ", /* @__PURE__ */ l.createElement("span", { className: "font-['lobster'] text-sm not-italic" }, "quibbble"), " games")), /* @__PURE__ */ l.createElement("div", { className: "flex items-center order-1 md:order-2 mb-2 md:mb-0" }, o ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Cn, { className: "mr-1 text-xl cursor-pointer", onClick: () => c(!0) }), /* @__PURE__ */ l.createElement("div", { className: "mr-1 font-black text-blue-500" }, "VARIANT"), /* @__PURE__ */ l.createElement("select", { className: "mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (m) => u(m.target.value.replace(/\s/g, "")) }, Object.keys(e.variants).map((m) => /* @__PURE__ */ l.createElement("option", { key: m, value: m }, m)))) : null, e.minTeams !== e.maxTeams ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "mx-1 font-black text-blue-500" }, "PLAYERS"), /* @__PURE__ */ l.createElement("select", { className: "bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none", id: "players", onChange: (m) => a(parseInt(m.target.value)) }, Array(e.maxTeams - e.minTeams + 1).fill().map((m, y) => e.minTeams + y).map((m) => /* @__PURE__ */ l.createElement("option", { key: m, value: m }, m)))) : null)))), /* @__PURE__ */ l.createElement("div", { className: "absolute bottom-8 md:bottom-12" }, /* @__PURE__ */ l.createElement(De, null))));
}
function Pn(e) {
  return nt({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
}
function vn({ isConn: e }) {
  const [t, n] = v(0);
  return _(() => {
    e ? setTimeout(() => n((r) => r - 1), 1500) : n(0);
  }, [e, n]), /* @__PURE__ */ l.createElement("div", { className: `flex items-center ${e ? "cursor-pointer" : ""}` }, t ? null : /* @__PURE__ */ l.createElement("div", { className: "px-1" }, e ? "connected" : "reconnecting"), /* @__PURE__ */ l.createElement("div", { onClick: () => {
    e && (n(0), setTimeout(() => n(t - 1), 1500));
  }, className: `rounded-full w-2 h-2 ${e ? "bg-green-500" : "bg-orange-500"}` }, e ? null : /* @__PURE__ */ l.createElement("div", { className: "rounded-full w-2 h-2  bg-orange-500 animate-ping" })));
}
const jn = it((e, t) => {
  const {
    config: n,
    ws: r,
    game: s,
    setGame: a,
    network: o,
    setNetwork: u,
    chat: p,
    setChat: c,
    connected: f,
    setConnected: m,
    error: y,
    setError: E,
    children: d
  } = e, { gameID: h } = lt(), g = ue(), [N, A] = v(!0);
  _(() => {
    f && o && f[o.Name] && sessionStorage.setItem(h, f[o.Name]);
  }, [o, f, h]), _(() => {
    const x = async (ee) => {
      if (ee <= 0) {
        g("/");
        return;
      }
      let Ee = await Tn(n.host, n.key, h);
      if (!Ee) {
        g("/status/down");
        return;
      }
      if (Ee.status !== 200) {
        g("/");
        return;
      }
      r.current = new WebSocket(`${n.websocket}/game/join?GameKey=${n.key}&GameID=${h}`), r.current.onopen = () => {
        A(!0);
        let F = sessionStorage.getItem(h);
        F && D(F);
      }, r.current.onclose = () => {
        A(!1), setTimeout(function() {
          x(ee - 1);
        }, 1e3 + (3 - ee) * 500);
      }, r.current.onmessage = async (F) => {
        let T = JSON.parse(F.data);
        T.Type === "Game" ? a(T.Payload) : T.Type === "Network" ? u(T.Payload) : T.Type === "Chat" ? c((at) => at.concat([T.Payload])) : T.Type === "Connected" ? m(T.Payload) : T.Type === "Error" && E(T.Payload);
      }, r.current.onerror = (F) => {
        console.error("Socket encountered error: ", F.message, "Closing socket"), r.current.close();
      };
    };
    x(3);
  }, [r, h, history]);
  const D = (x) => {
    r.current && r.current.send(JSON.stringify({ ActionType: "SetTeam", MoreDetails: { Team: x } }));
  }, Z = () => {
    if (!r.current)
      return;
    const x = s && s.MoreData && s.MoreData.Variant ? s.MoreData.Variant : "";
    r.current.send(JSON.stringify({ ActionType: "Reset", MoreDetails: { MoreOptions: { Seed: Date.now(), Variant: x } } }));
  }, [rt, st] = v(!0);
  _(() => {
    const x = () => st(!rt);
    return window.addEventListener("resize", x), (ot) => window.removeEventListener("resize", x);
  });
  const [I, ye] = v(0);
  return _(() => {
    I > 0 && setTimeout(() => ye(I - 1), 1e3);
  }, [I]), /* @__PURE__ */ l.createElement("div", { className: "min-h-screen flex flex-col items-center p-2 md:p-4" }, /* @__PURE__ */ l.createElement("div", { ref: t, className: "h-full w-full flex flex-col items-center max-w-xl grow" }, /* @__PURE__ */ l.createElement("div", { className: "flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm" }, /* @__PURE__ */ l.createElement("div", null, "Share this link: ", /* @__PURE__ */ l.createElement("span", { className: "underline cursor-pointer", onClick: () => {
    ye(1), navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/${h}`);
  } }, `${window.location.protocol}//${window.location.host}/${h}`), I > 0 ? /* @__PURE__ */ l.createElement("div", { className: "absolute mt-2 w-full flex justify-center" }, /* @__PURE__ */ l.createElement("div", { className: "absolute top-[-12px] w-6 overflow-hidden inline-block" }, /* @__PURE__ */ l.createElement("div", { className: " h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" })), /* @__PURE__ */ l.createElement("div", { className: "font-bold text-xs text-center bg-zinc-600 px-2 py-1" }, "copied!")) : null), /* @__PURE__ */ l.createElement("div", { className: "px-1" }, /* @__PURE__ */ l.createElement(vn, { isConn: N }))), /* @__PURE__ */ l.createElement("hr", { className: "w-full mb-2" }), /* @__PURE__ */ l.createElement("div", { className: "flex w-full justify-between items-center mb-4" }, /* @__PURE__ */ l.createElement("div", { className: "flex" }, s ? s.Teams.map((x) => /* @__PURE__ */ l.createElement(
    "div",
    {
      key: x,
      className: `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${x}-500 ${o && f && f[o.Name] === x ? `bg-${f[o.Name]}-500` : ""}`,
      onClick: () => D(x)
    },
    s && ["LongestPath", "MostCrossings"].includes(s.MoreData.Variant) ? s.MoreData.Points[x] : ""
  )) : null), /* @__PURE__ */ l.createElement("div", { className: `font-extrabold ${s && f && o && f[o.Name] && s.Winners.length === 0 ? `text-${s.Turn}-500` : "text-zinc-100"} ${s && o && f && f[o.Name] === s.Turn && s.Winners.length === 0 ? "animate-pulse" : ""}` }, s && f && o && f[o.Name] ? s.Message : /* @__PURE__ */ l.createElement("div", { className: "flex items-center animate-pulse" }, /* @__PURE__ */ l.createElement(Pn, { className: "mr-1" }), /* @__PURE__ */ l.createElement("div", null, "select a team")))), /* @__PURE__ */ l.createElement("div", { className: "h-full flex flex-col justify-center items-center grow" }, d), /* @__PURE__ */ l.createElement("hr", { className: "w-full mb-2" }), /* @__PURE__ */ l.createElement("div", { className: "w-full flex justify-between items-center" }, /* @__PURE__ */ l.createElement("div", { className: `leading-4 text-2xl font-black text-${n.color} cursor-pointer` }, /* @__PURE__ */ l.createElement("a", { href: `${window.location.protocol}//${window.location.host}` }, /* @__PURE__ */ l.createElement("span", { className: `font-['${n.font}']` }, n.key), /* @__PURE__ */ l.createElement("span", { className: "ml-1 text-[0.5rem] md:text-xs text-zinc-100" }, s && s.MoreData && s.MoreData.Variant ? s.MoreData.Variant : ""))), /* @__PURE__ */ l.createElement("div", { className: "flex" }, /* @__PURE__ */ l.createElement("div", { className: "flex" }, /* @__PURE__ */ l.createElement("div", { className: `px-3 py-1 font-bold cursor-pointer flex items-center justify-center text-xs bg-zinc-600 mr-2 ${s && s.Winners.length > 0 ? "animate-pulse" : ""}`, onClick: () => Z() }, "new game")), /* @__PURE__ */ l.createElement("div", { className: "italic text-xs bg-blue-500 py-1 px-2" }, /* @__PURE__ */ l.createElement("a", { href: "https://quibbble.com" }, "more ", /* @__PURE__ */ l.createElement("span", { className: "font-['lobster'] text-sm not-italic" }, "quibbble"), " games"))))));
});
export {
  Fn as DownPage,
  De as Footer,
  jn as GamePage,
  _n as HomePage
};
