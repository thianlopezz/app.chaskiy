/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function(e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function(e, t) {
  'use strict';
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return 'function' == typeof t && 'number' != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement('script');
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? l[c.call(e)] || 'object' : typeof e;
  }
  var b = '3.3.1',
    w = function(e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype = {
    jquery: '3.3.1',
    constructor: w,
    length: 0,
    toArray: function() {
      return o.call(this);
    },
    get: function(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function(e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function(e) {
      return w.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        w.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }),
    (w.extend = w.fn.extend = function() {
      var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for (
        'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
          'object' == typeof a || g(a) || (a = {}),
          s === u && ((a = this), s--);
        s < u;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (n = a[t]),
              a !== (r = e[t]) &&
                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                  ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}),
                    (a[t] = w.extend(l, o, r)))
                  : void 0 !== r && (a[t] = r));
      return a;
    }),
    w.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== c.call(e)) &&
          (!(t = i(e)) || ('function' == typeof (n = f.call(t, 'constructor') && t.constructor) && p.call(n) === d))
        );
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function(e) {
        m(e);
      },
      each: function(e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? '' : (e + '').replace(T, '');
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? w.merge(n, 'string' == typeof e ? [e] : e) : s.call(n, e)), n;
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function(e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function(e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h
    }),
    'function' == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {
      l['[object ' + t + ']'] = t.toLowerCase();
    });
  function C(e) {
    var t = !!e && 'length' in e && e.length,
      n = x(e);
    return !g(e) && !y(e) && ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e));
  }
  var E = (function(e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = 'sizzle' + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function(e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      I =
        '\\[' +
        M +
        '*(' +
        R +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        R +
        '))|)' +
        M +
        '*\\]',
      W =
        ':(' +
        R +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        I +
        ')*)|.*)\\)|)',
      $ = new RegExp(M + '+', 'g'),
      B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      F = new RegExp('^' + M + '*,' + M + '*'),
      _ = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      z = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'),
      X = new RegExp(W),
      U = new RegExp('^' + R + '$'),
      V = {
        ID: new RegExp('^#(' + R + ')'),
        CLASS: new RegExp('^\\.(' + R + ')'),
        TAG: new RegExp('^(' + R + '|[*])'),
        ATTR: new RegExp('^' + I),
        PSEUDO: new RegExp('^' + W),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + P + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
      ee = function(e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function(e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
          : '\\' + e;
      },
      re = function() {
        p();
      },
      ie = me(
        function(e) {
          return !0 === e.disabled && ('form' in e || 'label' in e);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function(e, t) {
              q.apply(e, H.call(t));
            }
          : function(e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            }
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (((r = r || []), 'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + ' '] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute('id')) ? (c = c.replace(te, ne)) : t.setAttribute('id', (c = b)),
              (s = (h = a(e)).length);
            while (s--) h[s] = '#' + c + ' ' + ve(h[s]);
            (v = h.join(',')), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute('id');
            }
        }
      }
      return u(e.replace(B, '$1'), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], (t[n + ' '] = i);
      }
      return t;
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      var n = e.split('|'),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function(t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function de(e) {
      return function(t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function(t) {
        return (
          (t = +t),
          se(function(n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && 'HTML' !== t.nodeName;
      }),
      (p = oe.setDocument = function(e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return a !== d && 9 === a.nodeType && a.documentElement
          ? ((d = a),
            (h = d.documentElement),
            (g = !o(d)),
            w !== d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener('unload', re, !1)
                : i.attachEvent && i.attachEvent('onunload', re)),
            (n.attributes = ue(function(e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (n.getElementsByTagName = ue(function(e) {
              return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
            (n.getById = ue(function(e) {
              return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
            })),
            n.getById
              ? ((r.filter.ID = function(e) {
                  var t = e.replace(Z, ee);
                  return function(e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (r.find.ID = function(e, t) {
                  if ('undefined' != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function(e) {
                  var t = e.replace(Z, ee);
                  return function(e) {
                    var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function(e, t) {
                  if ('undefined' != typeof t.getElementById && g) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++])) if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function(e, t) {
                  return 'undefined' != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function(e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function(e, t) {
                if ('undefined' != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
              }),
            (v = []),
            (y = []),
            (n.qsa = Q.test(d.querySelectorAll)) &&
              (ue(function(e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && y.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || y.push('\\[' + M + '*(?:value|' + P + ')'),
                  e.querySelectorAll('[id~=' + b + '-]').length || y.push('~='),
                  e.querySelectorAll(':checked').length || y.push(':checked'),
                  e.querySelectorAll('a#' + b + '+*').length || y.push('.#.+[+~]');
              }),
              ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && y.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length && y.push(':enabled', ':disabled'),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length && y.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  y.push(',.*:');
              })),
            (n.matchesSelector = Q.test(
              (m =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function(e) {
                (n.disconnectedMatch = m.call(e, '*')), m.call(e, "[s!='']:x"), v.push('!=', W);
              }),
            (y = y.length && new RegExp(y.join('|'))),
            (v = v.length && new RegExp(v.join('|'))),
            (t = Q.test(h.compareDocumentPosition)),
            (x =
              t || Q.test(h.contains)
                ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function(e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function(e, t) {
                  if (e === t) return (f = !0), 0;
                  var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function(e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                  if (i === o) return ce(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                }),
            d)
          : d;
      }),
      (oe.matches = function(e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function(e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector && g && !S[t + ' '] && (!v || !v.test(t)) && (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function(e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function(e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function(e) {
        return (e + '').replace(te, ne);
      }),
      (oe.error = function(e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (oe.uniqueSort = function(e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText = function(e) {
        var t,
          n = '',
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else while ((t = e[r++])) n += i(t);
        return n;
      }),
      ((r = oe.selectors = {
        cacheLength: 50,
        createPseudo: se,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' }
        },
        preFilter: {
          ATTR: function(e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function(e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function(e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(Z, ee).toLowerCase();
            return '*' === e
              ? function() {
                  return !0;
                }
              : function(e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function(e) {
            var t = E[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                E(e, function(e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute && e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function(e, t, n) {
            return function(r) {
              var i = oe.attr(r, e);
              return null == i
                ? '!=' === t
                : !t ||
                    ((i += ''),
                    '=' === t
                      ? i === n
                      : '!=' === t
                      ? i !== n
                      : '^=' === t
                      ? n && 0 === i.indexOf(n)
                      : '*=' === t
                      ? n && i.indexOf(n) > -1
                      : '$=' === t
                      ? n && i.slice(-n.length) === n
                      : '~=' === t
                      ? (' ' + i.replace($, ' ') + ' ').indexOf(n) > -1
                      : '|=' === t && (i === n || i.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function(e, t, n, r, i) {
            var o = 'nth' !== e.slice(0, 3),
              a = 'last' !== e.slice(-4),
              s = 'of-type' === t;
            return 1 === r && 0 === i
              ? function(e) {
                  return !!e.parentNode;
                }
              : function(t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? 'nextSibling' : 'previousSibling',
                    y = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    m = !u && !s,
                    x = !1;
                  if (y) {
                    if (o) {
                      while (g) {
                        p = t;
                        while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                        h = g = 'only' === e && !h && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                      (x =
                        (d =
                          (l =
                            (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                            T && l[1]) && l[2]),
                        (p = d && y.childNodes[d]);
                      while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [T, d, x];
                          break;
                        }
                    } else if (
                      (m &&
                        (x = d =
                          (l =
                            (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                            T && l[1]),
                      !1 === x)
                    )
                      while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                        if (
                          (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) &&
                          ++x &&
                          (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                          p === t)
                        )
                          break;
                    return (x -= i) === r || (x % r == 0 && x / r >= 0);
                  }
                };
          },
          PSEUDO: function(e, t) {
            var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error('unsupported pseudo: ' + e);
            return i[b]
              ? i(t)
              : i.length > 1
              ? ((n = [e, e, '', t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function(e, n) {
                      var r,
                        o = i(e, t),
                        a = o.length;
                      while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                    })
                  : function(e) {
                      return i(e, 0, n);
                    })
              : i;
          }
        },
        pseudos: {
          not: se(function(e) {
            var t = [],
              n = [],
              r = s(e.replace(B, '$1'));
            return r[b]
              ? se(function(e, t, n, i) {
                  var o,
                    a = r(e, null, i, []),
                    s = e.length;
                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function(e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: se(function(e) {
            return function(t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: se(function(e) {
            return (
              (e = e.replace(Z, ee)),
              function(t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: se(function(e) {
            return (
              U.test(e || '') || oe.error('unsupported lang: ' + e),
              (e = e.replace(Z, ee).toLowerCase()),
              function(t) {
                var n;
                do {
                  if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function(e) {
            return e === h;
          },
          focus: function(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function(e) {
            return !r.pseudos.empty(e);
          },
          header: function(e) {
            return Y.test(e.nodeName);
          },
          input: function(e) {
            return G.test(e.nodeName);
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function(e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
            );
          },
          first: he(function() {
            return [0];
          }),
          last: he(function(e, t) {
            return [t - 1];
          }),
          eq: he(function(e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function(e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: he(function(e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize = function(e, t) {
        var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + ' '];
        if (c) return t ? 0 : c.slice(0);
        (s = e), (u = []), (l = r.preFilter);
        while (s) {
          (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
            (n = !1),
            (i = _.exec(s)) &&
              ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, ' ') }), (s = s.slice(n.length)));
          for (a in r.filter)
            !(i = V[a].exec(s)) ||
              (l[a] && !(i = l[a](i))) ||
              ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
      });
    function ve(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && 'parentNode' === o,
        s = C++;
      return t.first
        ? function(t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function(t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function(t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function(o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || '*', s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            (l = we(v, d)), r(l, [], s, u), (c = l.length);
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (l = []), (c = v.length);
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[' '],
          u = a ? 1 : 0,
          c = me(
            function(e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function(e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function(e, n, r) {
              var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            }
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 && ve(e.slice(0, u - 1).concat({ value: ' ' === e[u - 2].type ? '*' : '' })).replace(B, '$1'),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function(o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = '0',
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG('*', c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
            if (i && f) {
              (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile = function(e, t) {
        var n,
          r = [],
          i = [],
          o = S[e + ' '];
        if (!o) {
          t || (t = a(e)), (n = t.length);
          while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
          (o = S(e, Ee(i, r))).selector = e;
        }
        return o;
      }),
      (u = oe.select = function(e, t, n, i) {
        var o,
          u,
          l,
          c,
          f,
          p = 'function' == typeof e && e,
          d = !i && a((e = p.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if (
            (u = d[0] = d[0].slice(0)).length > 2 &&
            'ID' === (l = u[0]).type &&
            9 === t.nodeType &&
            g &&
            r.relative[u[1].type]
          ) {
            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
            p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
          }
          o = V.needsContext.test(e) ? 0 : u.length;
          while (o--) {
            if (((l = u[o]), r.relative[(c = l.type)])) break;
            if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
              if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
              break;
            }
          }
        }
        return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
      }),
      (n.sortStable =
        b
          .split('')
          .sort(D)
          .join('') === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function(e) {
        return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
      })),
      ue(function(e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        le('type|href|height|width', function(e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function(e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        le('value', function(e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function(e) {
        return null == e.getAttribute('disabled');
      }) ||
        le(P, function(e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[':'] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function(e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? w.grep(e, function(e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function(e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function(e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            w(e).filter(function() {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function(e) {
        return !!j(this, 'string' == typeof e && D.test(e) ? w(e) : e || [], !1).length;
      }
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function(e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), 'string' == typeof e)) {
      if (!(i = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function(e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function(e) {
      return e
        ? 'string' == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function(e) {
        return k(e, 'parentNode');
      },
      parentsUntil: function(e, t, n) {
        return k(e, 'parentNode', n);
      },
      next: function(e) {
        return P(e, 'nextSibling');
      },
      prev: function(e) {
        return P(e, 'previousSibling');
      },
      nextAll: function(e) {
        return k(e, 'nextSibling');
      },
      prevAll: function(e) {
        return k(e, 'previousSibling');
      },
      nextUntil: function(e, t, n) {
        return k(e, 'nextSibling', n);
      },
      prevUntil: function(e, t, n) {
        return k(e, 'previousSibling', n);
      },
      siblings: function(e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return S(e.firstChild);
      },
      contents: function(e) {
        return N(e, 'iframe')
          ? e.contentDocument
          : (N(e, 'template') && (e = e.content || e), w.merge([], e.childNodes));
      }
    },
    function(e, t) {
      w.fn[e] = function(n, r) {
        var i = w.map(this, t, n);
        return (
          'Until' !== e.slice(-5) && (r = n),
          r && 'string' == typeof r && (i = w.filter(r, i)),
          this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function(e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function(e) {
    e = 'string' == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function() {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
      },
      l = {
        add: function() {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function(n, r) {
                  g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && 'string' !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function() {
          return (
            w.each(arguments, function(e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function() {
          return o && (o = []), this;
        },
        disable: function() {
          return (i = a = []), (o = n = ''), this;
        },
        disabled: function() {
          return !o;
        },
        lock: function() {
          return (i = a = []), n || t || (o = n = ''), this;
        },
        locked: function() {
          return !!i;
        },
        fireWith: function(e, n) {
          return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
        },
        fire: function() {
          return l.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!r;
        }
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i
            .call(e)
            .done(t)
            .fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function(t) {
      var n = [
          ['notify', 'progress', w.Callbacks('memory'), w.Callbacks('memory'), 2],
          ['resolve', 'done', w.Callbacks('once memory'), w.Callbacks('once memory'), 0, 'resolved'],
          ['reject', 'fail', w.Callbacks('once memory'), w.Callbacks('once memory'), 1, 'rejected']
        ],
        r = 'pending',
        i = {
          state: function() {
            return r;
          },
          always: function() {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function(e) {
            return i.then(null, e);
          },
          pipe: function() {
            var e = arguments;
            return w
              .Deferred(function(t) {
                w.each(n, function(n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function() {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + 'With'](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function(t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function() {
                var s = this,
                  u = arguments,
                  l = function() {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise()) throw new TypeError('Thenable self-resolution');
                      (l = e && ('object' == typeof e || 'function' == typeof e) && e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                          : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                    }
                  },
                  c = i
                    ? l
                    : function() {
                        try {
                          l();
                        } catch (e) {
                          w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                            t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                        }
                      };
                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
              };
            }
            return w
              .Deferred(function(e) {
                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W));
              })
              .promise();
          },
          promise: function(e) {
            return null != e ? w.extend(e, i) : i;
          }
        },
        o = {};
      return (
        w.each(n, function(e, t) {
          var a = t[2],
            s = t[5];
          (i[t[1]] = a.add),
            s &&
              a.add(
                function() {
                  r = s;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            a.add(t[3].fire),
            (o[t[0]] = function() {
              return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
            }),
            (o[t[0] + 'With'] = a.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function(e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function(e) {
          return function(n) {
            (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
          };
        };
      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), 'pending' === a.state() || g(i[n] && i[n].then)))
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function(t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (w.readyException = function(t) {
      e.setTimeout(function() {
        throw t;
      });
    });
  var F = w.Deferred();
  (w.fn.ready = function(e) {
    return (
      F.then(e)['catch'](function(e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      }
    }),
    (w.ready.then = F.then);
  function _() {
    r.removeEventListener('DOMContentLoaded', _), e.removeEventListener('load', _), w.ready();
  }
  'complete' === r.readyState || ('loading' !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener('DOMContentLoaded', _), e.addEventListener('load', _));
  var z = function(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function(e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, 'ms-').replace(U, V);
  }
  var Y = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function(e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
      },
      access: function(e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function(e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      }
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      'true' === e || ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : Z.test(e) ? JSON.parse(e) : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = 'data-' + t.replace(ee, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(r)))) {
        try {
          n = te(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function(e, t) {
      K.remove(e, t);
    },
    _data: function(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function(e, t) {
      J.remove(e, t);
    }
  }),
    w.fn.extend({
      data: function(e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, 'hasDataAttrs'))) {
            n = a.length;
            while (n--) a[n] && 0 === (r = a[n].name).indexOf('data-') && ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof e
          ? this.each(function() {
              K.set(this, e);
            })
          : z(
              this,
              function(t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function() {
                    K.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(e) {
        return this.each(function() {
          K.remove(this, e);
        });
      }
    }),
    w.extend({
      queue: function(e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = J.get(e, t)),
            n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)),
            r || []
          );
      },
      dequeue: function(e, t) {
        t = t || 'fx';
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function() {
            w.dequeue(e, t);
          };
        'inprogress' === i && ((i = n.shift()), r--),
          i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + 'queueHooks';
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks('once memory').add(function() {
              J.remove(e, [t + 'queue', n]);
            })
          })
        );
      }
    }),
    w.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          w.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || 'fx', []);
      },
      promise: function(e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function() {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--) (n = J.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      }
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
    oe = ['Top', 'Right', 'Bottom', 'Left'],
    ae = function(e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display && w.contains(e.ownerDocument, e) && 'none' === w.css(e, 'display'))
      );
    },
    se = function(e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function() {
            return r.cur();
          }
        : function() {
            return w.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
      c = (w.cssNumber[t] || ('px' !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === i && (i = 'block'),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n && ((i[o] = J.get(r, 'display') || null), i[o] || (r.style.display = '')),
            '' === r.style.display && ae(r) && (i[o] = ce(r)))
          : 'none' !== n && ((i[o] = 'none'), J.set(r, 'display', n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function() {
      return fe(this, !0);
    },
    hide: function() {
      return fe(this);
    },
    toggle: function(e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function() {
            ae(this) ? w(this).show() : w(this).hide();
          });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
  (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
  function ye(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ('object' === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))),
            (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), 'script')), l && ve(a), n)) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || '') && n.push(o);
      }
    return f;
  }
  !(function() {
    var e = r.createDocumentFragment().appendChild(r.createElement('div')),
      t = r.createElement('input');
    t.setAttribute('type', 'radio'),
      t.setAttribute('checked', 'checked'),
      t.setAttribute('name', 't'),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      'string' != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i && ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function(e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function() {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
            (a = y.handle = function(t) {
              return 'undefined' != typeof w && w.event.triggered !== t.type
                ? w.event.dispatch.apply(e, arguments)
                : void 0;
            }),
          (l = (t = (t || '').match(M) || ['']).length);
        while (l--)
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join('.')
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
              f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
      }
    },
    remove: function(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || '').match(M) || ['']).length;
        while (l--)
          if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || '').split('.').sort()), d)) {
            (f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, 'handle events');
      }
    },
    dispatch: function(e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, 'events') || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
        (s = w.event.handlers.call(this, t, l)), (n = 0);
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        }
      });
    },
    fix: function(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          if ('checkbox' === this.type && this.click && N(this, 'input')) return this.click(), !1;
        },
        _default: function(e) {
          return N(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (w.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function(e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        }
      },
      w.event.addProp
    ),
    w.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function(e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          }
        };
      }
    ),
    w.fn.extend({
      on: function(e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function(e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function() {
            w.event.remove(this, e, n, t);
          })
        );
      }
    });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, 'table') && N(11 !== t.nodeType ? t : t.firstChild, 'tr') ? w(e).children('tbody')[0] || e : e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Oe(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
        delete a.handle, (a.events = {});
        for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && 'string' == typeof y && !h.checkClone && je.test(y)))
      return e.each(function(i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)
    ) {
      for (u = (s = w.map(ye(i, 'script'), He)).length; f < p; f++)
        (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, 'script'))), n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || '') &&
              !J.access(l, 'globalEval') &&
              w.contains(c, l) &&
              (l.src && 'module' !== (l.type || '').toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ''), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function(e) {
      return e.replace(Ne, '<$1></$2>');
    },
    clone: function(e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
      if (t)
        if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
        else Pe(e, s);
      return (a = ye(s, 'script')).length > 0 && ve(a, !u && ye(e, 'script')), s;
    },
    cleanData: function(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    }
  }),
    w.fn.extend({
      detach: function(e) {
        return Ie(this, e, !0);
      },
      remove: function(e) {
        return Ie(this, e);
      },
      text: function(e) {
        return z(
          this,
          function(e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return Re(this, arguments, function(e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return Re(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return Re(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return Re(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return w.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return z(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ('string' == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = [];
        return Re(
          this,
          arguments,
          function(t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    w.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(e, t) {
        w.fn[e] = function(e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
    $e = function(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join('|'), 'i');
  !(function() {
    function t() {
      if (c) {
        (l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = '1%' !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (a = 36 === c.offsetWidth || 'absolute'),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement('div'),
      c = r.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function() {
          return t(), o;
        },
        pixelBoxStyles: function() {
          return t(), s;
        },
        pixelPosition: function() {
          return t(), i;
        },
        reliableMarginLeft: function() {
          return t(), u;
        },
        scrollboxSize: function() {
          return t(), a;
        }
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function _e(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ve = { letterSpacing: '0', fontWeight: '400' },
    Ge = ['Webkit', 'Moz', 'ms'],
    Ye = r.createElement('div').style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ('content' === n && (u -= w.css(e, 'padding' + oe[a], !0, i)),
            'margin' !== n && (u -= w.css(e, 'border' + oe[a] + 'Width', !0, i)))
          : ((u += w.css(e, 'padding' + oe[a], !0, i)),
            'padding' !== n
              ? (u += w.css(e, 'border' + oe[a] + 'Width', !0, i))
              : (s += w.css(e, 'border' + oe[a] + 'Width', !0, i)));
    return (
      !r && o >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = 'border-box' === w.css(e, 'boxSizing', !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = 'auto';
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ('auto' === i || (!parseFloat(i) && 'inline' === w.css(e, 'display', !1, r))) &&
        ((i = e['offset' + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? 'border' : 'content'), a, r, i) + 'px'
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Fe(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n))
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = 'number')),
          null != n &&
            n === n &&
            ('number' === o && (n += (i && i[3]) || (w.cssNumber[s] ? '' : 'px')),
            h.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function(e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        'normal' === i && t in Ve && (i = Ve[t]),
        '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    }
  }),
    w.each(['height', 'width'], function(e, t) {
      w.cssHooks[t] = {
        get: function(e, n, r) {
          if (n)
            return !ze.test(w.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function() {
                  return et(e, t, r);
                });
        },
        set: function(e, n, r) {
          var i,
            o = $e(e),
            a = 'border-box' === w.css(e, 'boxSizing', !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, 'border', !1, o) - 0.5
              )),
            s && (i = ie.exec(n)) && 'px' !== (i[3] || 'px') && ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        }
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    w.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
      (w.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        }
      }),
        'margin' !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function(e, t) {
        return z(
          this,
          function(e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      }
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function(e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? '' : 'px'));
      },
      cur: function() {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      }
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function(e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (w.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function() {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = oe[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners['*']), o = 0, a = i.length; o < a; o++)
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = 'width' in t || 'height' in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, 'fxshow');
    n.queue ||
      (null == (a = w._queueHooks(e, 'fx')).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function() {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function() {
        p.always(function() {
          a.unqueued--, w.queue(e, 'fx').length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
          if ('show' !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = y && y.display) && (l = J.get(e, 'display')),
        'none' === (c = w.css(e, 'display')) &&
          (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, 'display')), fe([e]))),
        ('inline' === c || ('inline-block' === c && null != l)) &&
          'none' === w.css(e, 'float') &&
          (u ||
            (p.done(function() {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
          (h.display = 'inline-block'))),
        n.overflow &&
          ((h.overflow = 'hidden'),
          p.always(function() {
            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (y ? 'hidden' in y && (g = y.hidden) : (y = J.access(e, 'fxshow', { display: l })),
          o && (y.hidden = !g),
          g && fe([e], !0),
          p.done(function() {
            g || fe([e]), J.remove(e, 'fxshow');
            for (r in d) w.style(e, r, d[r]);
          })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = w.cssHooks[r]) && 'expand' in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function() {
        delete u.elem;
      }),
      u = function() {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
        }
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      '*': [
        function(e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      g(e) ? ((t = e), (e = ['*'])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
    },
    prefilters: [ct],
    prefilter: function(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  })),
    (w.speed = function(e, t, n) {
      var r =
        e && 'object' == typeof e
          ? w.extend({}, e)
          : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
      return (
        w.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function() {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function(e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function() {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, 'finish')) && t.stop(!0);
          };
        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function() {
            var t = !0,
              i = null != e && e + 'queueHooks',
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function() {
            var t,
              n = J.get(this),
              r = n[e + 'queue'],
              i = n[e + 'queueHooks'],
              o = w.timers,
              a = r ? r.length : 0;
            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    w.each(['toggle', 'show', 'hide'], function(e, t) {
      var n = w.fn[t];
      w.fn[t] = function(e, r, i) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut('show'),
        slideUp: ut('hide'),
        slideToggle: ut('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(e, t) {
        w.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function() {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function(e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function() {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function() {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function(t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || 'fx'),
        this.queue(n, function(n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function() {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function() {
      var e = r.createElement('input'),
        t = r.createElement('select').appendChild(r.createElement('option'));
      (e.type = 'checkbox'),
        (h.checkOn = '' !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (h.radioValue = 't' === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        w.removeAttr(this, e);
      });
    }
  }),
    w.extend({
      attr: function(e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!h.radioValue && 'radio' === t && N(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      }
    }),
    (dt = {
      set: function(e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function(e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[w.propFix[e] || e];
      });
    }
  }),
    w.extend({
      prop: function(e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = w.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    w.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function() {
        w.propFix[this.toLowerCase()] = this;
      }
    );
  function vt(e) {
    return (e.match(M) || []).join(' ');
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function xt(e) {
    return Array.isArray(e) ? e : 'string' == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function(t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            i !== (s = vt(r)) && n.setAttribute('class', s);
          }
      return this;
    },
    removeClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function(t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))) {
            a = 0;
            while ((o = t[a++])) while (r.indexOf(' ' + o + ' ') > -1) r = r.replace(' ' + o + ' ', ' ');
            i !== (s = vt(r)) && n.setAttribute('class', s);
          }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        r = 'string' === n || Array.isArray(e);
      return 'boolean' == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function(n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function() {
            var t, i, o, a;
            if (r) {
              (i = 0), (o = w(this)), (a = xt(e));
              while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && 'boolean' !== n) || ((t = mt(this)) && J.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : J.get(this, '__className__') || ''));
          });
    },
    hasClass: function(e) {
      var t,
        n,
        r = 0;
      t = ' ' + e + ' ';
      while ((n = this[r++])) if (1 === n.nodeType && (' ' + vt(mt(n)) + ' ').indexOf(t) > -1) return !0;
      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function(e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function(n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = '')
                  : 'number' == typeof i
                  ? (i += '')
                  : Array.isArray(i) &&
                    (i = w.map(i, function(e) {
                      return null == e ? '' : e + '';
                    })),
                ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
                  'set' in t &&
                  void 0 !== t.set(this, i, 'value')) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            'get' in t &&
            void 0 !== (n = t.get(i, 'value'))
            ? n
            : 'string' == typeof (n = i.value)
            ? n.replace(bt, '')
            : null == n
            ? ''
            : n;
      }
    }
  }),
    w.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = w.find.attr(e, 'value');
            return null != t ? t : vt(w.text(e));
          }
        },
        select: {
          get: function(e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, 'optgroup'))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function(e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }),
    w.each(['radio', 'checkbox'], function() {
      (w.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
        }
      }),
        h.checkOn ||
          (w.valHooks[this].get = function(e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (h.focusin = 'onfocusin' in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function(e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function(t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, 'type') ? t.type : t,
        x = f.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf('.') > -1 && ((m = (x = m.split('.')).shift()), x.sort()),
          (c = m.indexOf(':') < 0 && 'on' + m),
          (t = t[w.expando] ? t : new w.Event(m, 'object' == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = x.join('.')),
          (t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + x.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, 'events') || {})[t.type] && J.get(s, 'handle')) && p.apply(s, n),
            (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    }
  }),
    w.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      }
    }),
    h.focusin ||
      w.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
        var n = function(e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function() {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function() {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
          }
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function(t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName('parsererror').length) || w.error('Invalid XML: ' + t), n;
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function(t, i) {
        n || St.test(e) ? r(e, i) : jt(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== x(t)) r(e, t);
    else for (i in t) jt(e + '[' + i + ']', t[i], n, r);
  }
  (w.param = function(e, t) {
    var n,
      r = [],
      i = function(e, t) {
        var n = g(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function() {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join('&');
  }),
    w.fn.extend({
      serialize: function() {
        return w.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = w.prop(this, 'elements');
          return e ? w.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(':disabled') &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function(e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function(e) {
                  return { name: t.name, value: e.replace(Dt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Dt, '\r\n') };
          })
          .get();
      }
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = '*/'.concat('*'),
    Bt = r.createElement('a');
  Bt.href = Ct.href;
  function Ft(e) {
    return function(t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          '+' === r[0] ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function(e, s) {
          var l = s(t, n, r);
          return 'string' != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i['*'] && a('*'));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ('*' === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ('*' === o) o = u;
        else if ('*' !== u && u !== o) {
          if (!(a = l[u + ' ' + o] || l['* ' + o]))
            for (i in l)
              if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e['throws']) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return { state: 'parsererror', error: a ? e : 'No conversion from ' + u + ' to ' + o };
              }
        }
    return { state: 'success', data: t };
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: 'GET',
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': $t,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
      converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': w.parseXML },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function(t, n) {
      'object' == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks('once memory'),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = 'canceled',
        E = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function() {
            return c ? a : null;
          },
          setRequestHeader: function(e, t) {
            return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
          },
          overrideMimeType: function(e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function(e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this;
          }
        };
      if (
        (v.promise(E),
        (h.url = ((t || h.url || Ct.href) + '').replace(Rt, Ct.protocol + '//')),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || '*').toLowerCase().match(M) || ['']),
        null == h.crossDomain)
      ) {
        l = r.createElement('a');
        try {
          (l.href = h.url),
            (l.href = l.href),
            (h.crossDomain = Bt.protocol + '//' + Bt.host != l.protocol + '//' + l.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data && h.processData && 'string' != typeof h.data && (h.data = w.param(h.data, h.traditional)),
        _t(It, h, n, E),
        c)
      )
        return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') &&
            (h.data = h.data.replace(qt, '+'))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || 'string' == typeof h.data) &&
              ((o += (kt.test(o) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache && ((o = o.replace(Ht, '$1')), (d = (kt.test(o) ? '&' : '?') + '_=' + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] && E.setRequestHeader('If-Modified-Since', w.lastModified[o]),
          w.etag[o] && E.setRequestHeader('If-None-Match', w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader('Content-Type', h.contentType),
        E.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + $t + '; q=0.01' : '')
            : h.accepts['*']
        );
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
      if (((C = 'abort'), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
        if (((E.readyState = 1), f && y.trigger('ajaxSend', [E, h]), c)) return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function() {
            E.abort('timeout');
          }, h.timeout));
        try {
          (c = !1), i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, 'No Transport');
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
          u && e.clearTimeout(u),
          (i = void 0),
          (a = s || ''),
          (E.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && t < 300) || 304 === t),
          r && (b = Xt(h, E, r)),
          (b = Ut(h, b, E, l)),
          l
            ? (h.ifModified &&
                ((T = E.getResponseHeader('Last-Modified')) && (w.lastModified[o] = T),
                (T = E.getResponseHeader('etag')) && (w.etag[o] = T)),
              204 === t || 'HEAD' === h.type
                ? (C = 'nocontent')
                : 304 === t
                ? (C = 'notmodified')
                : ((C = b.state), (p = b.data), (l = !(d = b.error))))
            : ((d = C), (!t && C) || ((C = 'error'), t < 0 && (t = 0))),
          (E.status = t),
          (E.statusText = (n || C) + ''),
          l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
          E.statusCode(x),
          (x = void 0),
          f && y.trigger(l ? 'ajaxSuccess' : 'ajaxError', [E, h, l ? p : d]),
          m.fireWith(g, [E, C]),
          f && (y.trigger('ajaxComplete', [E, h]), --w.active || w.event.trigger('ajaxStop')));
      }
      return E;
    },
    getJSON: function(e, t, n) {
      return w.get(e, t, n, 'json');
    },
    getScript: function(e, t) {
      return w.get(e, void 0, t, 'script');
    }
  }),
    w.each(['get', 'post'], function(e, t) {
      w[t] = function(e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e))
        );
      };
    }),
    (w._evalUrl = function(e) {
      return w.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
    }),
    w.fn.extend({
      wrapAll: function(e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(e) {
        return g(e)
          ? this.each(function(t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = g(e);
        return this.each(function(n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return (
          this.parent(e)
            .not('body')
            .each(function() {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (w.expr.pseudos.hidden = function(e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && 'withCredentials' in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function(t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function(i, o) {
            var a,
              s = t.xhr();
            if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function(e) {
              return function() {
                n &&
                  ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  'abort' === e
                    ? s.abort()
                    : 'error' === e
                    ? 'number' != typeof s.status
                      ? o(0, 'error')
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n('error')),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function() {
                    4 === s.readyState &&
                      e.setTimeout(function() {
                        n && r();
                      });
                  }),
              (n = n('abort'));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    w.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function(e) {
          return w.globalEval(e), e;
        }
      }
    }),
    w.ajaxPrefilter('script', function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    w.ajaxTransport('script', function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(i, o) {
            (t = w('<script>')
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function(e) {
                  t.remove(), (n = null), e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var e = Yt.pop() || w.expando + '_' + Et++;
      return (this[e] = !0), e;
    }
  }),
    w.ajaxPrefilter('json jsonp', function(t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Qt.test(t.data) &&
              'data');
      if (s || 'jsonp' === t.dataTypes[0])
        return (
          (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, '$1' + i))
            : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
          (t.converters['script json'] = function() {
            return a || w.error(i + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[i]),
          (e[i] = function() {
            a = arguments;
          }),
          r.always(function() {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script'
        );
    }),
    (h.createHTMLDocument = (function() {
      var e = r.implementation.createHTMLDocument('').body;
      return (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length;
    })()),
    (w.parseHTML = function(e, t, n) {
      if ('string' != typeof e) return [];
      'boolean' == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t = r.implementation.createHTMLDocument('')).createElement('base')).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function(e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function(e) {
              (o = arguments),
                a.html(
                  r
                    ? w('<div>')
                        .append(w.parseHTML(e))
                        .find(r)
                    : e
                );
            })
            .always(
              n &&
                function(e, t) {
                  a.each(function() {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
      w.fn[t] = function(e) {
        return this.on(t, e);
      };
    }),
    (w.expr.pseudos.animated = function(e) {
      return w.grep(w.timers, function(t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, 'position'),
          f = w(e),
          p = {};
        'static' === c && (e.style.position = 'relative'),
          (s = f.offset()),
          (o = w.css(e, 'top')),
          (u = w.css(e, 'left')),
          (l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, p) : f.css(p);
      }
    }),
    w.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function(t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === w.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
            while (e && (e === n.body || e === n.documentElement) && 'static' === w.css(e, 'position'))
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, 'borderTopWidth', !0)),
              (i.left += w.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - i.top - w.css(r, 'marginTop', !0), left: t.left - i.left - w.css(r, 'marginLeft', !0) };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var e = this.offsetParent;
          while (e && 'static' === w.css(e, 'position')) e = e.offsetParent;
          return e || be;
        });
      }
    }),
    w.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, t) {
      var n = 'pageYOffset' === t;
      w.fn[e] = function(r) {
        return z(
          this,
          function(e, r, i) {
            var o;
            if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
          },
          e,
          r,
          arguments.length
        );
      };
    }),
    w.each(['top', 'left'], function(e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
        if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + 'px' : n;
      });
    }),
    w.each({ Height: 'height', Width: 'width' }, function(e, t) {
      w.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(n, r) {
        w.fn[r] = function(i, o) {
          var a = arguments.length && (n || 'boolean' != typeof i),
            s = n || (!0 === i || !0 === o ? 'margin' : 'border');
          return z(
            this,
            function(t, n, i) {
              var o;
              return y(t)
                ? 0 === r.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body['scroll' + e],
                    o['scroll' + e],
                    t.body['offset' + e],
                    o['offset' + e],
                    o['client' + e]
                  ))
                : void 0 === i
                ? w.css(t, n, s)
                : w.style(t, n, i, s);
            },
            t,
            a ? i : void 0,
            a
          );
        };
      });
    }),
    w.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function(e, t) {
        w.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    w.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      }
    }),
    (w.proxy = function(e, t) {
      var n, r, i;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function(e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function(e) {
      var t = w.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function() {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function(t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(
  e,
  t
) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function() {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe;
  }
  function p(e) {
    if (!e) return document.documentElement;
    for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling; )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position')
        ? p(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }
  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }
  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }
  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }
    return e[o];
  }
  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = l(t, 'top'),
      i = l(t, 'left'),
      r = o ? -1 : 1;
    return (e.top += n * r), (e.bottom += n * r), (e.left += i * r), (e.right += i * r), e;
  }
  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }
  function h(e, t, o, n) {
    return $(
      t['offset' + e],
      t['scroll' + e],
      o['client' + e],
      o['offset' + e],
      o['scroll' + e],
      r(10)
        ? o['offset' + e] +
            n['margin' + ('Height' === e ? 'Top' : 'Left')] +
            n['margin' + ('Height' === e ? 'Bottom' : 'Right')]
        : 0
    );
  }
  function c() {
    var e = document.body,
      t = document.documentElement,
      o = r(10) && getComputedStyle(t);
    return { height: h('Height', e, t, o), width: h('Width', e, t, o) };
  }
  function g(e) {
    return le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
          i = l(e, 'left');
        (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
      } else o = e.getBoundingClientRect();
    } catch (t) {}
    var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
      s = 'HTML' === e.nodeName ? c() : {},
      d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top,
      f = e.offsetWidth - d,
      h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      (f -= m(u, 'x')), (h -= m(u, 'y')), (p.width -= f), (p.height -= h);
    }
    return g(p);
  }
  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      p = r(10),
      s = 'HTML' === o.nodeName,
      d = u(e),
      a = u(o),
      l = n(e),
      m = t(o),
      h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i && 'HTML' === o.nodeName && ((a.top = $(a.top, 0)), (a.left = $(a.left, 0)));
    var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height });
    if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
      var y = parseFloat(m.marginTop, 10),
        w = parseFloat(m.marginLeft, 10);
      (b.top -= h - y),
        (b.bottom -= h - y),
        (b.left -= c - w),
        (b.right -= c - w),
        (b.marginTop = y),
        (b.marginLeft = w);
    }
    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }
  function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = b(e, o),
      i = $(o.clientWidth, window.innerWidth || 0),
      r = $(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o),
      s = t ? 0 : l(o, 'left'),
      d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };
    return g(d);
  }
  function w(e) {
    var n = e.nodeName;
    return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }
  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && 'none' === t(o, 'transform'); ) o = o.parentElement;
    return o || document.documentElement;
  }
  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = { top: 0, left: 0 },
      d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = y(d, p);
    else {
      var l;
      'scrollParent' === r
        ? ((l = n(o(t))), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement))
        : 'window' === r
        ? (l = e.ownerDocument.documentElement)
        : (l = r);
      var f = b(l, d, p);
      if ('HTML' === l.nodeName && !w(d)) {
        var m = c(),
          h = m.height,
          g = m.width;
        (s.top += f.top - f.marginTop),
          (s.bottom = h + f.top),
          (s.left += f.left - f.marginLeft),
          (s.right = g + f.left);
      } else s = f;
    }
    return (s.left += i), (s.top += i), (s.right -= i), (s.bottom -= i), s;
  }
  function x(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height }
      },
      d = Object.keys(s)
        .map(function(e) {
          return le({ key: e }, s[e], { area: x(s[e]) });
        })
        .sort(function(e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function(e) {
        var t = e.width,
          n = e.height;
        return t >= o.clientWidth && n >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }
  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }
  function S(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      i = { width: e.offsetWidth + n, height: e.offsetHeight + o };
    return i;
  }
  function T(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return e.replace(/left|right|bottom|top/g, function(e) {
      return t[e];
    });
  }
  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
      i = { width: n.width, height: n.height },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return (i[p] = t[p] + t[d] / 2 - n[d] / 2), (i[s] = o === s ? t[s] - n[a] : t[T(s)]), i;
  }
  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function(e) {
        return e[t] === o;
      });
    var n = D(e, function(e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }
  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return (
      i.forEach(function(t) {
        t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var n = t['function'] || t.fn;
        t.enabled &&
          e(n) &&
          ((o.offsets.popper = g(o.offsets.popper)), (o.offsets.reference = g(o.offsets.reference)), (o = n(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
      (e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed)),
        (e.placement = O(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = C(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
        (e = P(this.modifiers, e)),
        this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function(e) {
      var o = e.name,
        n = e.enabled;
      return n && o === t;
    });
  }
  function B(e) {
    for (
      var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0;
      n < t.length;
      n++
    ) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function H() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[B('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }
  function I(e, t, o, i) {
    (o.updateBound = i), A(e).addEventListener('resize', o.updateBound, { passive: !0 });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), (o.scrollElement = r), (o.eventsEnabled = !0), o;
  }
  function F() {
    this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function R(e, t) {
    return (
      A(e).removeEventListener('resize', t.updateBound),
      t.scrollParents.forEach(function(e) {
        e.removeEventListener('scroll', t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function U() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate), (this.state = R(this.reference, this.state)));
  }
  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function j(e, t) {
    Object.keys(t).forEach(function(o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
        (e.style[o] = t[o] + n);
    });
  }
  function K(e, t) {
    Object.keys(t).forEach(function(o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function q(e, t, o) {
    var n = D(e, function(e) {
        var o = e.name;
        return o === t;
      }),
      i =
        !!n &&
        e.some(function(e) {
          return e.name === o && e.enabled && e.order < n.order;
        });
    if (!i) {
      var r = '`' + t + '`';
      console.warn(
        '`' +
          o +
          '`' +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!'
      );
    }
    return i;
  }
  function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }
  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = me.indexOf(e),
      n = me.slice(o + 1).concat(me.slice(0, o));
    return t ? n.reverse() : n;
  }
  function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = n;
      }
      var d = g(s);
      return (d[t] / 100) * r;
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return (
        (a =
          'vh' === p
            ? $(document.documentElement.clientHeight, window.innerHeight || 0)
            : $(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function _(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(n),
      p = e.split(/(\+|\-)/).map(function(e) {
        return e.trim();
      }),
      s = p.indexOf(
        D(p, function(e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(',') &&
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return (
      (a = a.map(function(e, n) {
        var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
        return e
          .reduce(function(e, t) {
            return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function(e) {
            return V(e, i, t, o);
          });
      })),
      a.forEach(function(e, t) {
        e.forEach(function(o, n) {
          Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
        });
      }),
      i
    );
  }
  function X(e, t) {
    var o,
      n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split('-')[0];
    return (
      (o = Y(+n) ? [+n, 0] : _(n, p, s, d)),
      'left' === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : 'right' === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : 'top' === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : 'bottom' === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var J = Math.min,
      Q = Math.round,
      Z = Math.floor,
      $ = Math.max,
      ee = 'undefined' != typeof window && 'undefined' != typeof document,
      te = ['Edge', 'Trident', 'Firefox'],
      oe = 0,
      ne = 0;
    ne < te.length;
    ne += 1
  )
    if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
      oe = 1;
      break;
    }
  var i = ee && window.Promise,
    ie = i
      ? function(e) {
          var t = !1;
          return function() {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function() {
                (t = !1), e();
              }));
          };
        }
      : function(e) {
          var t = !1;
          return function() {
            t ||
              ((t = !0),
              setTimeout(function() {
                (t = !1), e();
              }, oe));
          };
        },
    re = ee && !!(window.MSInputMethodContext && document.documentMode),
    pe = ee && /MSIE 10/.test(navigator.userAgent),
    se = function(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
    de = (function() {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    })(),
    ae = function(e, t, o) {
      return (
        t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o),
        e
      );
    },
    le =
      Object.assign ||
      function(e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var n in ((t = arguments[o]), t)) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      },
    fe = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start'
    ],
    me = fe.slice(3),
    he = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
    ce = (function() {
      function t(o, n) {
        var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        se(this, t),
          (this.scheduleUpdate = function() {
            return requestAnimationFrame(i.update);
          }),
          (this.update = ie(this.update.bind(this))),
          (this.options = le({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o && o.jquery ? o[0] : o),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
            i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
          }),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function(e) {
              return le({ name: e }, i.options.modifiers[e]);
            })
            .sort(function(e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function(t) {
            t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        de(t, [
          {
            key: 'update',
            value: function() {
              return k.call(this);
            }
          },
          {
            key: 'destroy',
            value: function() {
              return H.call(this);
            }
          },
          {
            key: 'enableEventListeners',
            value: function() {
              return F.call(this);
            }
          },
          {
            key: 'disableEventListeners',
            value: function() {
              return U.call(this);
            }
          }
        ]),
        t
      );
    })();
  return (
    (ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
    (ce.placements = fe),
    (ce.Defaults = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function(e) {
            var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];
            if (n) {
              var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) };
              e.offsets.popper = le({}, p, l[n]);
            }
            return e;
          }
        },
        offset: { order: 200, enabled: !0, fn: X, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function(e, t) {
            var o = t.boundariesElement || p(e.instance.popper);
            e.instance.reference === o && (o = p(o));
            var n = B('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
            (i.top = ''), (i.left = ''), (i[n] = '');
            var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
            (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
            var l = t.priority,
              f = e.offsets.popper,
              m = {
                primary: function(e) {
                  var o = f[e];
                  return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o);
                },
                secondary: function(e) {
                  var o = 'right' === e ? 'left' : 'top',
                    n = f[o];
                  return (
                    f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))),
                    ae({}, o, n)
                  );
                }
              };
            return (
              l.forEach(function(e) {
                var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                f = le({}, f, m[t](e));
              }),
              (e.offsets.popper = f),
              e
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent'
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function(e) {
            var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
            return (
              o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
              o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
              e
            );
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function(e, o) {
            var n;
            if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
            var i = o.element;
            if ('string' == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i))
              return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
            var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
            d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
              d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
              (e.offsets.popper = g(e.offsets.popper));
            var b = d[m] + d[l] / 2 - u / 2,
              y = t(e.instance.popper),
              w = parseFloat(y['margin' + f], 10),
              E = parseFloat(y['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - w - E;
            return (
              (v = $(J(s[l] - u, v), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = ((n = {}), ae(n, m, Q(v)), ae(n, h, ''), n)),
              e
            );
          },
          element: '[x-arrow]'
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function(e, t) {
            if (W(e.instance.modifiers, 'inner')) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];
            switch (t.behavior) {
              case he.FLIP:
                p = [n, i];
                break;
              case he.CLOCKWISE:
                p = z(n);
                break;
              case he.COUNTERCLOCKWISE:
                p = z(n, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function(s, d) {
                if (n !== s || p.length === d + 1) return e;
                (n = e.placement.split('-')[0]), (i = T(n));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = Z,
                  m =
                    ('left' === n && f(a.right) > f(l.left)) ||
                    ('right' === n && f(a.left) < f(l.right)) ||
                    ('top' === n && f(a.bottom) > f(l.top)) ||
                    ('bottom' === n && f(a.top) < f(l.bottom)),
                  h = f(a.left) < f(o.left),
                  c = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b = ('left' === n && h) || ('right' === n && c) || ('top' === n && g) || ('bottom' === n && u),
                  y = -1 !== ['top', 'bottom'].indexOf(n),
                  w =
                    !!t.flipVariations &&
                    ((y && 'start' === r && h) ||
                      (y && 'end' === r && c) ||
                      (!y && 'start' === r && g) ||
                      (!y && 'end' === r && u));
                (m || b || w) &&
                  ((e.flipped = !0),
                  (m || b) && (n = p[d + 1]),
                  w && (r = G(r)),
                  (e.placement = n + (r ? '-' + r : '')),
                  (e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement))),
                  (e = P(e.instance.modifiers, e, 'flip')));
              }),
              e
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport'
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function(e) {
            var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
            return (
              (i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0)),
              (e.placement = T(t)),
              (e.offsets.popper = g(i)),
              e
            );
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function(e) {
            if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
            var t = e.offsets.reference,
              o = D(e.instance.modifiers, function(e) {
                return 'preventOverflow' === e.name;
              }).boundaries;
            if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
            }
            return e;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function(e, t) {
            var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = D(e.instance.modifiers, function(e) {
                return 'applyStyle' === e.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
            var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = { left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right) },
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = B('transform');
            if (
              ((d = 'bottom' == c ? -f.height + h.bottom : h.top),
              (s = 'right' == g ? -f.width + h.right : h.left),
              a && b)
            )
              (m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)'), (m[c] = 0), (m[g] = 0), (m.willChange = 'transform');
            else {
              var y = 'bottom' == c ? -1 : 1,
                w = 'right' == g ? -1 : 1;
              (m[c] = d * y), (m[g] = s * w), (m.willChange = c + ', ' + g);
            }
            var E = { 'x-placement': e.placement };
            return (
              (e.attributes = le({}, E, e.attributes)),
              (e.styles = le({}, m, e.styles)),
              (e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right'
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function(e) {
            return (
              j(e.instance.popper, e.styles),
              K(e.instance.popper, e.attributes),
              e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function(e, t, o, n, i) {
            var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
            return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o;
          },
          gpuAcceleration: void 0
        }
      }
    }),
    ce
  );
});
/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
//# sourceMappingURL=popper.min.js.map

!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function(t, e, c) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s);
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(s).filter(function(t) {
            return Object.getOwnPropertyDescriptor(s, t).enumerable;
          })
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = r),
            (i = s[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 })
              : (e[n] = i);
        });
    }
    return r;
  }
  (e = e && e.hasOwnProperty('default') ? e.default : e), (c = c && c.hasOwnProperty('default') ? c.default : c);
  var r,
    n,
    s,
    a,
    l,
    u,
    f,
    d,
    _,
    g,
    m,
    p,
    v,
    E,
    y,
    T,
    C,
    I,
    A,
    D,
    b,
    S,
    w,
    N,
    O,
    k,
    P,
    L,
    j,
    R,
    H,
    W,
    M,
    x,
    U,
    K,
    F,
    V,
    Q,
    B,
    Y,
    G,
    q,
    z,
    X,
    J,
    Z,
    $,
    tt,
    et,
    nt,
    it,
    rt,
    st,
    ot,
    at,
    lt,
    ht,
    ct,
    ut,
    ft,
    dt,
    _t,
    gt,
    mt,
    pt,
    vt,
    Et,
    yt,
    Tt,
    Ct,
    It,
    At,
    Dt,
    bt,
    St,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    Lt,
    jt,
    Rt,
    Ht,
    Wt,
    Mt,
    xt,
    Ut,
    Kt,
    Ft,
    Vt,
    Qt,
    Bt,
    Yt,
    Gt,
    qt,
    zt,
    Xt,
    Jt,
    Zt,
    $t,
    te,
    ee,
    ne,
    ie,
    re,
    se,
    oe,
    ae,
    le,
    he,
    ce,
    ue,
    fe,
    de,
    _e,
    ge,
    me,
    pe,
    ve,
    Ee,
    ye,
    Te,
    Ce,
    Ie,
    Ae,
    De,
    be,
    Se,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    Le,
    je,
    Re,
    He,
    We,
    Me,
    xe,
    Ue,
    Ke,
    Fe,
    Ve,
    Qe,
    Be,
    Ye,
    Ge,
    qe,
    ze,
    Xe,
    Je,
    Ze,
    $e,
    tn,
    en,
    nn,
    rn,
    sn,
    on,
    an,
    ln,
    hn,
    cn,
    un,
    fn,
    dn,
    _n,
    gn,
    mn,
    pn,
    vn,
    En,
    yn,
    Tn,
    Cn = (function(i) {
      var e = 'transitionend';
      function t(t) {
        var e = this,
          n = !1;
        return (
          i(this).one(l.TRANSITION_END, function() {
            n = !0;
          }),
          setTimeout(function() {
            n || l.triggerTransitionEnd(e);
          }, t),
          this
        );
      }
      var l = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function(t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function(t) {
          var e = t.getAttribute('data-target');
          (e && '#' !== e) || (e = t.getAttribute('href') || '');
          try {
            return 0 < i(document).find(e).length ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function(t) {
          if (!t) return 0;
          var e = i(t).css('transition-duration');
          return parseFloat(e) ? ((e = e.split(',')[0]), 1e3 * parseFloat(e)) : 0;
        },
        reflow: function(t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function(t) {
          i(t).trigger(e);
        },
        supportsTransitionEnd: function() {
          return Boolean(e);
        },
        isElement: function(t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function(t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                s = e[i],
                o =
                  s && l.isElement(s)
                    ? 'element'
                    : ((a = s),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(o))
                throw new Error(
                  t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".'
                );
            }
          var a;
        }
      };
      return (
        (i.fn.emulateTransitionEnd = t),
        (i.event.special[l.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function(t) {
            if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
          }
        }),
        l
      );
    })(e),
    In = ((n = 'alert'),
    (a = '.' + (s = 'bs.alert')),
    (l = (r = e).fn[n]),
    (u = { CLOSE: 'close' + a, CLOSED: 'closed' + a, CLICK_DATA_API: 'click' + a + '.data-api' }),
    (f = 'alert'),
    (d = 'fade'),
    (_ = 'show'),
    (g = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function(t) {
          var e = this._element;
          t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }),
        (t.dispose = function() {
          r.removeData(this._element, s), (this._element = null);
        }),
        (t._getRootElement = function(t) {
          var e = Cn.getSelectorFromElement(t),
            n = !1;
          return e && (n = r(e)[0]), n || (n = r(t).closest('.' + f)[0]), n;
        }),
        (t._triggerCloseEvent = function(t) {
          var e = r.Event(u.CLOSE);
          return r(t).trigger(e), e;
        }),
        (t._removeElement = function(e) {
          var n = this;
          if ((r(e).removeClass(_), r(e).hasClass(d))) {
            var t = Cn.getTransitionDurationFromElement(e);
            r(e)
              .one(Cn.TRANSITION_END, function(t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function(t) {
          r(t)
            .detach()
            .trigger(u.CLOSED)
            .remove();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = r(this),
              e = t.data(s);
            e || ((e = new i(this)), t.data(s, e)), 'close' === n && e[n](this);
          });
        }),
        (i._handleDismiss = function(e) {
          return function(t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        o(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          }
        ]),
        i
      );
    })()),
    r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())),
    (r.fn[n] = g._jQueryInterface),
    (r.fn[n].Constructor = g),
    (r.fn[n].noConflict = function() {
      return (r.fn[n] = l), g._jQueryInterface;
    }),
    g),
    An = ((p = 'button'),
    (E = '.' + (v = 'bs.button')),
    (y = '.data-api'),
    (T = (m = e).fn[p]),
    (C = 'active'),
    (I = 'btn'),
    (D = '[data-toggle^="button"]'),
    (b = '[data-toggle="buttons"]'),
    (S = 'input'),
    (w = '.active'),
    (N = '.btn'),
    (O = { CLICK_DATA_API: 'click' + E + y, FOCUS_BLUR_DATA_API: (A = 'focus') + E + y + ' blur' + E + y }),
    (k = (function() {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function() {
          var t = !0,
            e = !0,
            n = m(this._element).closest(b)[0];
          if (n) {
            var i = m(this._element).find(S)[0];
            if (i) {
              if ('radio' === i.type)
                if (i.checked && m(this._element).hasClass(C)) t = !1;
                else {
                  var r = m(n).find(w)[0];
                  r && m(r).removeClass(C);
                }
              if (t) {
                if (
                  i.hasAttribute('disabled') ||
                  n.hasAttribute('disabled') ||
                  i.classList.contains('disabled') ||
                  n.classList.contains('disabled')
                )
                  return;
                (i.checked = !m(this._element).hasClass(C)), m(i).trigger('change');
              }
              i.focus(), (e = !1);
            }
          }
          e && this._element.setAttribute('aria-pressed', !m(this._element).hasClass(C)),
            t && m(this._element).toggleClass(C);
        }),
        (t.dispose = function() {
          m.removeData(this._element, v), (this._element = null);
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = m(this).data(v);
            t || ((t = new n(this)), m(this).data(v, t)), 'toggle' === e && t[e]();
          });
        }),
        o(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          }
        ]),
        n
      );
    })()),
    m(document)
      .on(O.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), 'toggle');
      })
      .on(O.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = m(t.target).closest(N)[0];
        m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
      }),
    (m.fn[p] = k._jQueryInterface),
    (m.fn[p].Constructor = k),
    (m.fn[p].noConflict = function() {
      return (m.fn[p] = T), k._jQueryInterface;
    }),
    k),
    Dn = ((L = 'carousel'),
    (R = '.' + (j = 'bs.carousel')),
    (H = '.data-api'),
    (W = (P = e).fn[L]),
    (M = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0 }),
    (x = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    }),
    (U = 'next'),
    (K = 'prev'),
    (F = 'left'),
    (V = 'right'),
    (Q = {
      SLIDE: 'slide' + R,
      SLID: 'slid' + R,
      KEYDOWN: 'keydown' + R,
      MOUSEENTER: 'mouseenter' + R,
      MOUSELEAVE: 'mouseleave' + R,
      TOUCHEND: 'touchend' + R,
      LOAD_DATA_API: 'load' + R + H,
      CLICK_DATA_API: 'click' + R + H
    }),
    (B = 'carousel'),
    (Y = 'active'),
    (G = 'slide'),
    (q = 'carousel-item-right'),
    (z = 'carousel-item-left'),
    (X = 'carousel-item-next'),
    (J = 'carousel-item-prev'),
    (Z = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
    }),
    ($ = (function() {
      function s(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._config = this._getConfig(e)),
          (this._element = P(t)[0]),
          (this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0]),
          this._addEventListeners();
      }
      var t = s.prototype;
      return (
        (t.next = function() {
          this._isSliding || this._slide(U);
        }),
        (t.nextWhenVisible = function() {
          !document.hidden &&
            P(this._element).is(':visible') &&
            'hidden' !== P(this._element).css('visibility') &&
            this.next();
        }),
        (t.prev = function() {
          this._isSliding || this._slide(K);
        }),
        (t.pause = function(t) {
          t || (this._isPaused = !0),
            P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function(t) {
          t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function(t) {
          var e = this;
          this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              P(this._element).one(Q.SLID, function() {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? U : K;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function() {
          P(this._element).off(R),
            P.removeData(this._element, j),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function(t) {
          return (t = h({}, M, t)), Cn.typeCheckConfig(L, t, x), t;
        }),
        (t._addEventListeners = function() {
          var e = this;
          this._config.keyboard &&
            P(this._element).on(Q.KEYDOWN, function(t) {
              return e._keydown(t);
            }),
            'hover' === this._config.pause &&
              (P(this._element)
                .on(Q.MOUSEENTER, function(t) {
                  return e.pause(t);
                })
                .on(Q.MOUSELEAVE, function(t) {
                  return e.cycle(t);
                }),
              'ontouchstart' in document.documentElement &&
                P(this._element).on(Q.TOUCHEND, function() {
                  e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function(t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval));
                }));
        }),
        (t._keydown = function(t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function(t) {
          return (
            (this._items = P.makeArray(
              P(t)
                .parent()
                .find(Z.ITEM)
            )),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function(t, e) {
          var n = t === U,
            i = t === K,
            r = this._getItemIndex(e),
            s = this._items.length - 1;
          if (((i && 0 === r) || (n && r === s)) && !this._config.wrap) return e;
          var o = (r + (t === K ? -1 : 1)) % this._items.length;
          return -1 === o ? this._items[this._items.length - 1] : this._items[o];
        }),
        (t._triggerSlideEvent = function(t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
            r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
          return P(this._element).trigger(r), r;
        }),
        (t._setActiveIndicatorElement = function(t) {
          if (this._indicatorsElement) {
            P(this._indicatorsElement)
              .find(Z.ACTIVE)
              .removeClass(Y);
            var e = this._indicatorsElement.children[this._getItemIndex(t)];
            e && P(e).addClass(Y);
          }
        }),
        (t._slide = function(t, e) {
          var n,
            i,
            r,
            s = this,
            o = P(this._element).find(Z.ACTIVE_ITEM)[0],
            a = this._getItemIndex(o),
            l = e || (o && this._getItemByDirection(t, o)),
            h = this._getItemIndex(l),
            c = Boolean(this._interval);
          if ((t === U ? ((n = z), (i = X), (r = F)) : ((n = q), (i = J), (r = V)), l && P(l).hasClass(Y)))
            this._isSliding = !1;
          else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
            (this._isSliding = !0), c && this.pause(), this._setActiveIndicatorElement(l);
            var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h });
            if (P(this._element).hasClass(G)) {
              P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
              var f = Cn.getTransitionDurationFromElement(o);
              P(o)
                .one(Cn.TRANSITION_END, function() {
                  P(l)
                    .removeClass(n + ' ' + i)
                    .addClass(Y),
                    P(o).removeClass(Y + ' ' + i + ' ' + n),
                    (s._isSliding = !1),
                    setTimeout(function() {
                      return P(s._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(f);
            } else P(o).removeClass(Y), P(l).addClass(Y), (this._isSliding = !1), P(this._element).trigger(u);
            c && this.cycle();
          }
        }),
        (s._jQueryInterface = function(i) {
          return this.each(function() {
            var t = P(this).data(j),
              e = h({}, M, P(this).data());
            'object' == typeof i && (e = h({}, e, i));
            var n = 'string' == typeof i ? i : e.slide;
            if ((t || ((t = new s(this, e)), P(this).data(j, t)), 'number' == typeof i)) t.to(i);
            else if ('string' == typeof n) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && (t.pause(), t.cycle());
          });
        }),
        (s._dataApiClickHandler = function(t) {
          var e = Cn.getSelectorFromElement(this);
          if (e) {
            var n = P(e)[0];
            if (n && P(n).hasClass(B)) {
              var i = h({}, P(n).data(), P(this).data()),
                r = this.getAttribute('data-slide-to');
              r && (i.interval = !1),
                s._jQueryInterface.call(P(n), i),
                r &&
                  P(n)
                    .data(j)
                    .to(r),
                t.preventDefault();
            }
          }
        }),
        o(s, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return M;
            }
          }
        ]),
        s
      );
    })()),
    P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler),
    P(window).on(Q.LOAD_DATA_API, function() {
      P(Z.DATA_RIDE).each(function() {
        var t = P(this);
        $._jQueryInterface.call(t, t.data());
      });
    }),
    (P.fn[L] = $._jQueryInterface),
    (P.fn[L].Constructor = $),
    (P.fn[L].noConflict = function() {
      return (P.fn[L] = W), $._jQueryInterface;
    }),
    $),
    bn = ((et = 'collapse'),
    (it = '.' + (nt = 'bs.collapse')),
    (rt = (tt = e).fn[et]),
    (st = { toggle: !0, parent: '' }),
    (ot = { toggle: 'boolean', parent: '(string|element)' }),
    (at = {
      SHOW: 'show' + it,
      SHOWN: 'shown' + it,
      HIDE: 'hide' + it,
      HIDDEN: 'hidden' + it,
      CLICK_DATA_API: 'click' + it + '.data-api'
    }),
    (lt = 'show'),
    (ht = 'collapse'),
    (ct = 'collapsing'),
    (ut = 'collapsed'),
    (ft = 'width'),
    (dt = 'height'),
    (_t = { ACTIVES: '.show, .collapsing', DATA_TOGGLE: '[data-toggle="collapse"]' }),
    (gt = (function() {
      function a(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = tt.makeArray(
            tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')
          ));
        for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
          var r = n[i],
            s = Cn.getSelectorFromElement(r);
          null !== s && 0 < tt(s).filter(t).length && ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function() {
          tt(this._element).hasClass(lt) ? this.hide() : this.show();
        }),
        (t.show = function() {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !tt(this._element).hasClass(lt) &&
            (this._parent &&
              0 ===
                (t = tt.makeArray(
                  tt(this._parent)
                    .find(_t.ACTIVES)
                    .filter('[data-parent="' + this._config.parent + '"]')
                )).length &&
              (t = null),
            !(
              t &&
              (e = tt(t)
                .not(this._selector)
                .data(nt)) &&
              e._isTransitioning
            ))
          ) {
            var i = tt.Event(at.SHOW);
            if ((tt(this._element).trigger(i), !i.isDefaultPrevented())) {
              t && (a._jQueryInterface.call(tt(t).not(this._selector), 'hide'), e || tt(t).data(nt, null));
              var r = this._getDimension();
              tt(this._element)
                .removeClass(ht)
                .addClass(ct),
                (this._element.style[r] = 0) < this._triggerArray.length &&
                  tt(this._triggerArray)
                    .removeClass(ut)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var s = 'scroll' + (r[0].toUpperCase() + r.slice(1)),
                o = Cn.getTransitionDurationFromElement(this._element);
              tt(this._element)
                .one(Cn.TRANSITION_END, function() {
                  tt(n._element)
                    .removeClass(ct)
                    .addClass(ht)
                    .addClass(lt),
                    (n._element.style[r] = ''),
                    n.setTransitioning(!1),
                    tt(n._element).trigger(at.SHOWN);
                })
                .emulateTransitionEnd(o),
                (this._element.style[r] = this._element[s] + 'px');
            }
          }
        }),
        (t.hide = function() {
          var t = this;
          if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
            var e = tt.Event(at.HIDE);
            if ((tt(this._element).trigger(e), !e.isDefaultPrevented())) {
              var n = this._getDimension();
              if (
                ((this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px'),
                Cn.reflow(this._element),
                tt(this._element)
                  .addClass(ct)
                  .removeClass(ht)
                  .removeClass(lt),
                0 < this._triggerArray.length)
              )
                for (var i = 0; i < this._triggerArray.length; i++) {
                  var r = this._triggerArray[i],
                    s = Cn.getSelectorFromElement(r);
                  if (null !== s)
                    tt(s).hasClass(lt) ||
                      tt(r)
                        .addClass(ut)
                        .attr('aria-expanded', !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = '';
              var o = Cn.getTransitionDurationFromElement(this._element);
              tt(this._element)
                .one(Cn.TRANSITION_END, function() {
                  t.setTransitioning(!1),
                    tt(t._element)
                      .removeClass(ct)
                      .addClass(ht)
                      .trigger(at.HIDDEN);
                })
                .emulateTransitionEnd(o);
            }
          }
        }),
        (t.setTransitioning = function(t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function() {
          tt.removeData(this._element, nt),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function(t) {
          return ((t = h({}, st, t)).toggle = Boolean(t.toggle)), Cn.typeCheckConfig(et, t, ot), t;
        }),
        (t._getDimension = function() {
          return tt(this._element).hasClass(ft) ? ft : dt;
        }),
        (t._getParent = function() {
          var n = this,
            t = null;
          Cn.isElement(this._config.parent)
            ? ((t = this._config.parent),
              'undefined' != typeof this._config.parent.jquery && (t = this._config.parent[0]))
            : (t = tt(this._config.parent)[0]);
          var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
          return (
            tt(t)
              .find(e)
              .each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function(t, e) {
          if (t) {
            var n = tt(t).hasClass(lt);
            0 < e.length &&
              tt(e)
                .toggleClass(ut, !n)
                .attr('aria-expanded', n);
          }
        }),
        (a._getTargetFromElement = function(t) {
          var e = Cn.getSelectorFromElement(t);
          return e ? tt(e)[0] : null;
        }),
        (a._jQueryInterface = function(i) {
          return this.each(function() {
            var t = tt(this),
              e = t.data(nt),
              n = h({}, st, t.data(), 'object' == typeof i && i ? i : {});
            if (
              (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(nt, e)),
              'string' == typeof i)
            ) {
              if ('undefined' == typeof e[i]) throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        o(a, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return st;
            }
          }
        ]),
        a
      );
    })()),
    tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) {
      'A' === t.currentTarget.tagName && t.preventDefault();
      var n = tt(this),
        e = Cn.getSelectorFromElement(this);
      tt(e).each(function() {
        var t = tt(this),
          e = t.data(nt) ? 'toggle' : n.data();
        gt._jQueryInterface.call(t, e);
      });
    }),
    (tt.fn[et] = gt._jQueryInterface),
    (tt.fn[et].Constructor = gt),
    (tt.fn[et].noConflict = function() {
      return (tt.fn[et] = rt), gt._jQueryInterface;
    }),
    gt),
    Sn = ((pt = 'dropdown'),
    (Et = '.' + (vt = 'bs.dropdown')),
    (yt = '.data-api'),
    (Tt = (mt = e).fn[pt]),
    (Ct = new RegExp('38|40|27')),
    (It = {
      HIDE: 'hide' + Et,
      HIDDEN: 'hidden' + Et,
      SHOW: 'show' + Et,
      SHOWN: 'shown' + Et,
      CLICK: 'click' + Et,
      CLICK_DATA_API: 'click' + Et + yt,
      KEYDOWN_DATA_API: 'keydown' + Et + yt,
      KEYUP_DATA_API: 'keyup' + Et + yt
    }),
    (At = 'disabled'),
    (Dt = 'show'),
    (bt = 'dropup'),
    (St = 'dropright'),
    (wt = 'dropleft'),
    (Nt = 'dropdown-menu-right'),
    (Ot = 'position-static'),
    (kt = '[data-toggle="dropdown"]'),
    (Pt = '.dropdown form'),
    (Lt = '.dropdown-menu'),
    (jt = '.navbar-nav'),
    (Rt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'),
    (Ht = 'top-start'),
    (Wt = 'top-end'),
    (Mt = 'bottom-start'),
    (xt = 'bottom-end'),
    (Ut = 'right-start'),
    (Kt = 'left-start'),
    (Ft = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' }),
    (Vt = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    }),
    (Qt = (function() {
      function l(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = l.prototype;
      return (
        (t.toggle = function() {
          if (!this._element.disabled && !mt(this._element).hasClass(At)) {
            var t = l._getParentFromElement(this._element),
              e = mt(this._menu).hasClass(Dt);
            if ((l._clearMenus(), !e)) {
              var n = { relatedTarget: this._element },
                i = mt.Event(It.SHOW, n);
              if ((mt(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if ('undefined' == typeof c)
                    throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
                  var r = this._element;
                  'parent' === this._config.reference
                    ? (r = t)
                    : Cn.isElement(this._config.reference) &&
                      ((r = this._config.reference),
                      'undefined' != typeof this._config.reference.jquery && (r = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary && mt(t).addClass(Ot),
                    (this._popper = new c(r, this._menu, this._getPopperConfig()));
                }
                'ontouchstart' in document.documentElement &&
                  0 === mt(t).closest(jt).length &&
                  mt(document.body)
                    .children()
                    .on('mouseover', null, mt.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  mt(this._menu).toggleClass(Dt),
                  mt(t)
                    .toggleClass(Dt)
                    .trigger(mt.Event(It.SHOWN, n));
              }
            }
          }
        }),
        (t.dispose = function() {
          mt.removeData(this._element, vt),
            mt(this._element).off(Et),
            (this._element = null),
            (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function() {
          (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function() {
          var e = this;
          mt(this._element).on(It.CLICK, function(t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function(t) {
          return (
            (t = h({}, this.constructor.Default, mt(this._element).data(), t)),
            Cn.typeCheckConfig(pt, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function() {
          if (!this._menu) {
            var t = l._getParentFromElement(this._element);
            this._menu = mt(t).find(Lt)[0];
          }
          return this._menu;
        }),
        (t._getPlacement = function() {
          var t = mt(this._element).parent(),
            e = Mt;
          return (
            t.hasClass(bt)
              ? ((e = Ht), mt(this._menu).hasClass(Nt) && (e = Wt))
              : t.hasClass(St)
              ? (e = Ut)
              : t.hasClass(wt)
              ? (e = Kt)
              : mt(this._menu).hasClass(Nt) && (e = xt),
            e
          );
        }),
        (t._detectNavbar = function() {
          return 0 < mt(this._element).closest('.navbar').length;
        }),
        (t._getPopperConfig = function() {
          var e = this,
            t = {};
          'function' == typeof this._config.offset
            ? (t.fn = function(t) {
                return (t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {})), t;
              })
            : (t.offset = this._config.offset);
          var n = {
            placement: this._getPlacement(),
            modifiers: {
              offset: t,
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary }
            }
          };
          return 'static' === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
        }),
        (l._jQueryInterface = function(e) {
          return this.each(function() {
            var t = mt(this).data(vt);
            if (
              (t || ((t = new l(this, 'object' == typeof e ? e : null)), mt(this).data(vt, t)), 'string' == typeof e)
            ) {
              if ('undefined' == typeof t[e]) throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (l._clearMenus = function(t) {
          if (!t || (3 !== t.which && ('keyup' !== t.type || 9 === t.which)))
            for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
              var i = l._getParentFromElement(e[n]),
                r = mt(e[n]).data(vt),
                s = { relatedTarget: e[n] };
              if (r) {
                var o = r._menu;
                if (
                  mt(i).hasClass(Dt) &&
                  !(
                    t &&
                    (('click' === t.type && /input|textarea/i.test(t.target.tagName)) ||
                      ('keyup' === t.type && 9 === t.which)) &&
                    mt.contains(i, t.target)
                  )
                ) {
                  var a = mt.Event(It.HIDE, s);
                  mt(i).trigger(a),
                    a.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        mt(document.body)
                          .children()
                          .off('mouseover', null, mt.noop),
                      e[n].setAttribute('aria-expanded', 'false'),
                      mt(o).removeClass(Dt),
                      mt(i)
                        .removeClass(Dt)
                        .trigger(mt.Event(It.HIDDEN, s)));
                }
              }
            }
        }),
        (l._getParentFromElement = function(t) {
          var e,
            n = Cn.getSelectorFromElement(t);
          return n && (e = mt(n)[0]), e || t.parentNode;
        }),
        (l._dataApiKeydownHandler = function(t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which && ((40 !== t.which && 38 !== t.which) || mt(t.target).closest(Lt).length))
                )
              : Ct.test(t.which)) &&
            (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))
          ) {
            var e = l._getParentFromElement(this),
              n = mt(e).hasClass(Dt);
            if ((n || (27 === t.which && 32 === t.which)) && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = mt(e)
                .find(Rt)
                .get();
              if (0 !== i.length) {
                var r = i.indexOf(t.target);
                38 === t.which && 0 < r && r--,
                  40 === t.which && r < i.length - 1 && r++,
                  r < 0 && (r = 0),
                  i[r].focus();
              }
            } else {
              if (27 === t.which) {
                var s = mt(e).find(kt)[0];
                mt(s).trigger('focus');
              }
              mt(this).trigger('click');
            }
          }
        }),
        o(l, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Ft;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Vt;
            }
          }
        ]),
        l
      );
    })()),
    mt(document)
      .on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler)
      .on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler)
      .on(It.CLICK_DATA_API + ' ' + It.KEYUP_DATA_API, Qt._clearMenus)
      .on(It.CLICK_DATA_API, kt, function(t) {
        t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), 'toggle');
      })
      .on(It.CLICK_DATA_API, Pt, function(t) {
        t.stopPropagation();
      }),
    (mt.fn[pt] = Qt._jQueryInterface),
    (mt.fn[pt].Constructor = Qt),
    (mt.fn[pt].noConflict = function() {
      return (mt.fn[pt] = Tt), Qt._jQueryInterface;
    }),
    Qt),
    wn = ((Yt = 'modal'),
    (qt = '.' + (Gt = 'bs.modal')),
    (zt = (Bt = e).fn[Yt]),
    (Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
    (Jt = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' }),
    (Zt = {
      HIDE: 'hide' + qt,
      HIDDEN: 'hidden' + qt,
      SHOW: 'show' + qt,
      SHOWN: 'shown' + qt,
      FOCUSIN: 'focusin' + qt,
      RESIZE: 'resize' + qt,
      CLICK_DISMISS: 'click.dismiss' + qt,
      KEYDOWN_DISMISS: 'keydown.dismiss' + qt,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + qt,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + qt,
      CLICK_DATA_API: 'click' + qt + '.data-api'
    }),
    ($t = 'modal-scrollbar-measure'),
    (te = 'modal-backdrop'),
    (ee = 'modal-open'),
    (ne = 'fade'),
    (ie = 'show'),
    (re = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
    }),
    (se = (function() {
      function r(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = Bt(t).find(re.DIALOG)[0]),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._scrollbarWidth = 0);
      }
      var t = r.prototype;
      return (
        (t.toggle = function(t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function(t) {
          var e = this;
          if (!this._isTransitioning && !this._isShown) {
            Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
            var n = Bt.Event(Zt.SHOW, { relatedTarget: t });
            Bt(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                Bt(document.body).addClass(ee),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) {
                  return e.hide(t);
                }),
                Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() {
                  Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) {
                    Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function() {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function(t) {
          var e = this;
          if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
            var n = Bt.Event(Zt.HIDE);
            if ((Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
              this._isShown = !1;
              var i = Bt(this._element).hasClass(ne);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                Bt(document).off(Zt.FOCUSIN),
                Bt(this._element).removeClass(ie),
                Bt(this._element).off(Zt.CLICK_DISMISS),
                Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),
                i)
              ) {
                var r = Cn.getTransitionDurationFromElement(this._element);
                Bt(this._element)
                  .one(Cn.TRANSITION_END, function(t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function() {
          Bt.removeData(this._element, Gt),
            Bt(window, document, this._element, this._backdrop).off(qt),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function() {
          this._adjustDialog();
        }),
        (t._getConfig = function(t) {
          return (t = h({}, Xt, t)), Cn.typeCheckConfig(Yt, t, Jt), t;
        }),
        (t._showElement = function(t) {
          var e = this,
            n = Bt(this._element).hasClass(ne);
          (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            (this._element.scrollTop = 0),
            n && Cn.reflow(this._element),
            Bt(this._element).addClass(ie),
            this._config.focus && this._enforceFocus();
          var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
            r = function() {
              e._config.focus && e._element.focus(), (e._isTransitioning = !1), Bt(e._element).trigger(i);
            };
          if (n) {
            var s = Cn.getTransitionDurationFromElement(this._element);
            Bt(this._dialog)
              .one(Cn.TRANSITION_END, r)
              .emulateTransitionEnd(s);
          } else r();
        }),
        (t._enforceFocus = function() {
          var e = this;
          Bt(document)
            .off(Zt.FOCUSIN)
            .on(Zt.FOCUSIN, function(t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === Bt(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function() {
          var e = this;
          this._isShown && this._config.keyboard
            ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function() {
          var e = this;
          this._isShown
            ? Bt(window).on(Zt.RESIZE, function(t) {
                return e.handleUpdate(t);
              })
            : Bt(window).off(Zt.RESIZE);
        }),
        (t._hideModal = function() {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            (this._isTransitioning = !1),
            this._showBackdrop(function() {
              Bt(document.body).removeClass(ee),
                t._resetAdjustments(),
                t._resetScrollbar(),
                Bt(t._element).trigger(Zt.HIDDEN);
            });
        }),
        (t._removeBackdrop = function() {
          this._backdrop && (Bt(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function(t) {
          var e = this,
            n = Bt(this._element).hasClass(ne) ? ne : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = te),
              n && Bt(this._backdrop).addClass(n),
              Bt(this._backdrop).appendTo(document.body),
              Bt(this._element).on(Zt.CLICK_DISMISS, function(t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget && ('static' === e._config.backdrop ? e._element.focus() : e.hide());
              }),
              n && Cn.reflow(this._backdrop),
              Bt(this._backdrop).addClass(ie),
              !t)
            )
              return;
            if (!n) return void t();
            var i = Cn.getTransitionDurationFromElement(this._backdrop);
            Bt(this._backdrop)
              .one(Cn.TRANSITION_END, t)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            Bt(this._backdrop).removeClass(ie);
            var r = function() {
              e._removeBackdrop(), t && t();
            };
            if (Bt(this._element).hasClass(ne)) {
              var s = Cn.getTransitionDurationFromElement(this._backdrop);
              Bt(this._backdrop)
                .one(Cn.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
          } else t && t();
        }),
        (t._adjustDialog = function() {
          var t = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
        }),
        (t._resetAdjustments = function() {
          (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
        }),
        (t._checkScrollbar = function() {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function() {
          var r = this;
          if (this._isBodyOverflowing) {
            Bt(re.FIXED_CONTENT).each(function(t, e) {
              var n = Bt(e)[0].style.paddingRight,
                i = Bt(e).css('padding-right');
              Bt(e)
                .data('padding-right', n)
                .css('padding-right', parseFloat(i) + r._scrollbarWidth + 'px');
            }),
              Bt(re.STICKY_CONTENT).each(function(t, e) {
                var n = Bt(e)[0].style.marginRight,
                  i = Bt(e).css('margin-right');
                Bt(e)
                  .data('margin-right', n)
                  .css('margin-right', parseFloat(i) - r._scrollbarWidth + 'px');
              }),
              Bt(re.NAVBAR_TOGGLER).each(function(t, e) {
                var n = Bt(e)[0].style.marginRight,
                  i = Bt(e).css('margin-right');
                Bt(e)
                  .data('margin-right', n)
                  .css('margin-right', parseFloat(i) + r._scrollbarWidth + 'px');
              });
            var t = document.body.style.paddingRight,
              e = Bt(document.body).css('padding-right');
            Bt(document.body)
              .data('padding-right', t)
              .css('padding-right', parseFloat(e) + this._scrollbarWidth + 'px');
          }
        }),
        (t._resetScrollbar = function() {
          Bt(re.FIXED_CONTENT).each(function(t, e) {
            var n = Bt(e).data('padding-right');
            'undefined' != typeof n &&
              Bt(e)
                .css('padding-right', n)
                .removeData('padding-right');
          }),
            Bt(re.STICKY_CONTENT + ', ' + re.NAVBAR_TOGGLER).each(function(t, e) {
              var n = Bt(e).data('margin-right');
              'undefined' != typeof n &&
                Bt(e)
                  .css('margin-right', n)
                  .removeData('margin-right');
            });
          var t = Bt(document.body).data('padding-right');
          'undefined' != typeof t &&
            Bt(document.body)
              .css('padding-right', t)
              .removeData('padding-right');
        }),
        (t._getScrollbarWidth = function() {
          var t = document.createElement('div');
          (t.className = $t), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (r._jQueryInterface = function(n, i) {
          return this.each(function() {
            var t = Bt(this).data(Gt),
              e = h({}, Xt, Bt(this).data(), 'object' == typeof n && n ? n : {});
            if ((t || ((t = new r(this, e)), Bt(this).data(Gt, t)), 'string' == typeof n)) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        o(r, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Xt;
            }
          }
        ]),
        r
      );
    })()),
    Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) {
      var e,
        n = this,
        i = Cn.getSelectorFromElement(this);
      i && (e = Bt(i)[0]);
      var r = Bt(e).data(Gt) ? 'toggle' : h({}, Bt(e).data(), Bt(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
      var s = Bt(e).one(Zt.SHOW, function(t) {
        t.isDefaultPrevented() ||
          s.one(Zt.HIDDEN, function() {
            Bt(n).is(':visible') && n.focus();
          });
      });
      se._jQueryInterface.call(Bt(e), r, this);
    }),
    (Bt.fn[Yt] = se._jQueryInterface),
    (Bt.fn[Yt].Constructor = se),
    (Bt.fn[Yt].noConflict = function() {
      return (Bt.fn[Yt] = zt), se._jQueryInterface;
    }),
    se),
    Nn = ((ae = 'tooltip'),
    (he = '.' + (le = 'bs.tooltip')),
    (ce = (oe = e).fn[ae]),
    (ue = 'bs-tooltip'),
    (fe = new RegExp('(^|\\s)' + ue + '\\S+', 'g')),
    (ge = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !(_e = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' }),
      selector: !(de = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)'
      }),
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent'
    }),
    (pe = 'out'),
    (ve = {
      HIDE: 'hide' + he,
      HIDDEN: 'hidden' + he,
      SHOW: (me = 'show') + he,
      SHOWN: 'shown' + he,
      INSERTED: 'inserted' + he,
      CLICK: 'click' + he,
      FOCUSIN: 'focusin' + he,
      FOCUSOUT: 'focusout' + he,
      MOUSEENTER: 'mouseenter' + he,
      MOUSELEAVE: 'mouseleave' + he
    }),
    (Ee = 'fade'),
    (ye = 'show'),
    (Te = '.tooltip-inner'),
    (Ce = '.arrow'),
    (Ie = 'hover'),
    (Ae = 'focus'),
    (De = 'click'),
    (be = 'manual'),
    (Se = (function() {
      function i(t, e) {
        if ('undefined' == typeof c)
          throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function() {
          this._isEnabled = !0;
        }),
        (t.disable = function() {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function(t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = oe(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                oe(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
            } else {
              if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            oe.removeData(this.element, this.constructor.DATA_KEY),
            oe(this.element).off(this.constructor.EVENT_KEY),
            oe(this.element)
              .closest('.modal')
              .off('hide.bs.modal'),
            this.tip && oe(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function() {
          var e = this;
          if ('none' === oe(this.element).css('display')) throw new Error('Please use show on visible elements');
          var t = oe.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            oe(this.element).trigger(t);
            var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
            if (t.isDefaultPrevented() || !n) return;
            var i = this.getTipElement(),
              r = Cn.getUID(this.constructor.NAME);
            i.setAttribute('id', r),
              this.element.setAttribute('aria-describedby', r),
              this.setContent(),
              this.config.animation && oe(i).addClass(Ee);
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, i, this.element)
                  : this.config.placement,
              o = this._getAttachment(s);
            this.addAttachmentClass(o);
            var a = !1 === this.config.container ? document.body : oe(this.config.container);
            oe(i).data(this.constructor.DATA_KEY, this),
              oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a),
              oe(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new c(this.element, i, {
                placement: o,
                modifiers: {
                  offset: { offset: this.config.offset },
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Ce },
                  preventOverflow: { boundariesElement: this.config.boundary }
                },
                onCreate: function(t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                },
                onUpdate: function(t) {
                  e._handlePopperPlacementChange(t);
                }
              })),
              oe(i).addClass(ye),
              'ontouchstart' in document.documentElement &&
                oe(document.body)
                  .children()
                  .on('mouseover', null, oe.noop);
            var l = function() {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null), oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
            };
            if (oe(this.tip).hasClass(Ee)) {
              var h = Cn.getTransitionDurationFromElement(this.tip);
              oe(this.tip)
                .one(Cn.TRANSITION_END, l)
                .emulateTransitionEnd(h);
            } else l();
          }
        }),
        (t.hide = function(t) {
          var e = this,
            n = this.getTipElement(),
            i = oe.Event(this.constructor.Event.HIDE),
            r = function() {
              e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute('aria-describedby'),
                oe(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((oe(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (oe(n).removeClass(ye),
              'ontouchstart' in document.documentElement &&
                oe(document.body)
                  .children()
                  .off('mouseover', null, oe.noop),
              (this._activeTrigger[De] = !1),
              (this._activeTrigger[Ae] = !1),
              (this._activeTrigger[Ie] = !1),
              oe(this.tip).hasClass(Ee))
            ) {
              var s = Cn.getTransitionDurationFromElement(n);
              oe(n)
                .one(Cn.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
            this._hoverState = '';
          }
        }),
        (t.update = function() {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function() {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function(t) {
          oe(this.getTipElement()).addClass(ue + '-' + t);
        }),
        (t.getTipElement = function() {
          return (this.tip = this.tip || oe(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function() {
          var t = oe(this.getTipElement());
          this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + ' ' + ye);
        }),
        (t.setElementContent = function(t, e) {
          var n = this.config.html;
          'object' == typeof e && (e.nodeType || e.jquery)
            ? n
              ? oe(e)
                  .parent()
                  .is(t) || t.empty().append(e)
              : t.text(oe(e).text())
            : t[n ? 'html' : 'text'](e);
        }),
        (t.getTitle = function() {
          var t = this.element.getAttribute('data-original-title');
          return (
            t ||
              (t = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
          );
        }),
        (t._getAttachment = function(t) {
          return _e[t.toUpperCase()];
        }),
        (t._setListeners = function() {
          var i = this;
          this.config.trigger.split(' ').forEach(function(t) {
            if ('click' === t)
              oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                return i.toggle(t);
              });
            else if (t !== be) {
              var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
              oe(i.element)
                .on(e, i.config.selector, function(t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function(t) {
                  return i._leave(t);
                });
            }
            oe(i.element)
              .closest('.modal')
              .on('hide.bs.modal', function() {
                return i.hide();
              });
          }),
            this.config.selector
              ? (this.config = h({}, this.config, { trigger: 'manual', selector: '' }))
              : this._fixTitle();
        }),
        (t._fixTitle = function() {
          var t = typeof this.element.getAttribute('data-original-title');
          (this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''),
            this.element.setAttribute('title', ''));
        }),
        (t._enter = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || oe(t.currentTarget).data(n)) ||
            ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), oe(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusin' === t.type ? Ae : Ie] = !0),
            oe(e.getTipElement()).hasClass(ye) || e._hoverState === me
              ? (e._hoverState = me)
              : (clearTimeout(e._timeout),
                (e._hoverState = me),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function() {
                      e._hoverState === me && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || oe(t.currentTarget).data(n)) ||
            ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), oe(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusout' === t.type ? Ae : Ie] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = pe),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function() {
                    e._hoverState === pe && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function() {
          for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function(t) {
          return (
            'number' ==
              typeof (t = h({}, this.constructor.Default, oe(this.element).data(), 'object' == typeof t && t ? t : {}))
                .delay && (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            Cn.typeCheckConfig(ae, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getDelegateConfig = function() {
          var t = {};
          if (this.config)
            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function() {
          var t = oe(this.getTipElement()),
            e = t.attr('class').match(fe);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (t._handlePopperPlacementChange = function(t) {
          this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function() {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (oe(t).removeClass(Ee),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = oe(this).data(le),
              e = 'object' == typeof n && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), oe(this).data(le, t)), 'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        o(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return ge;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return ae;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return le;
            }
          },
          {
            key: 'Event',
            get: function() {
              return ve;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return he;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return de;
            }
          }
        ]),
        i
      );
    })()),
    (oe.fn[ae] = Se._jQueryInterface),
    (oe.fn[ae].Constructor = Se),
    (oe.fn[ae].noConflict = function() {
      return (oe.fn[ae] = ce), Se._jQueryInterface;
    }),
    Se),
    On = ((Ne = 'popover'),
    (ke = '.' + (Oe = 'bs.popover')),
    (Pe = (we = e).fn[Ne]),
    (Le = 'bs-popover'),
    (je = new RegExp('(^|\\s)' + Le + '\\S+', 'g')),
    (Re = h({}, Nn.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })),
    (He = h({}, Nn.DefaultType, { content: '(string|element|function)' })),
    (We = 'fade'),
    (xe = '.popover-header'),
    (Ue = '.popover-body'),
    (Ke = {
      HIDE: 'hide' + ke,
      HIDDEN: 'hidden' + ke,
      SHOW: (Me = 'show') + ke,
      SHOWN: 'shown' + ke,
      INSERTED: 'inserted' + ke,
      CLICK: 'click' + ke,
      FOCUSIN: 'focusin' + ke,
      FOCUSOUT: 'focusout' + ke,
      MOUSEENTER: 'mouseenter' + ke,
      MOUSELEAVE: 'mouseleave' + ke
    }),
    (Fe = (function(t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
      var r = i.prototype;
      return (
        (r.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }),
        (r.addAttachmentClass = function(t) {
          we(this.getTipElement()).addClass(Le + '-' + t);
        }),
        (r.getTipElement = function() {
          return (this.tip = this.tip || we(this.config.template)[0]), this.tip;
        }),
        (r.setContent = function() {
          var t = we(this.getTipElement());
          this.setElementContent(t.find(xe), this.getTitle());
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(Ue), e),
            t.removeClass(We + ' ' + Me);
        }),
        (r._getContent = function() {
          return this.element.getAttribute('data-content') || this.config.content;
        }),
        (r._cleanTipClass = function() {
          var t = we(this.getTipElement()),
            e = t.attr('class').match(je);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = we(this).data(Oe),
              e = 'object' == typeof n ? n : null;
            if (
              (t || !/destroy|hide/.test(n)) &&
              (t || ((t = new i(this, e)), we(this).data(Oe, t)), 'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        o(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Re;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return Ne;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Oe;
            }
          },
          {
            key: 'Event',
            get: function() {
              return Ke;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return ke;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return He;
            }
          }
        ]),
        i
      );
    })(Nn)),
    (we.fn[Ne] = Fe._jQueryInterface),
    (we.fn[Ne].Constructor = Fe),
    (we.fn[Ne].noConflict = function() {
      return (we.fn[Ne] = Pe), Fe._jQueryInterface;
    }),
    Fe),
    kn = ((Qe = 'scrollspy'),
    (Ye = '.' + (Be = 'bs.scrollspy')),
    (Ge = (Ve = e).fn[Qe]),
    (qe = { offset: 10, method: 'auto', target: '' }),
    (ze = { offset: 'number', method: 'string', target: '(string|element)' }),
    (Xe = { ACTIVATE: 'activate' + Ye, SCROLL: 'scroll' + Ye, LOAD_DATA_API: 'load' + Ye + '.data-api' }),
    (Je = 'dropdown-item'),
    (Ze = 'active'),
    ($e = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    }),
    (tn = 'offset'),
    (en = 'position'),
    (nn = (function() {
      function n(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' ' +
            $e.NAV_LINKS +
            ',' +
            this._config.target +
            ' ' +
            $e.LIST_ITEMS +
            ',' +
            this._config.target +
            ' ' +
            $e.DROPDOWN_ITEMS),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          Ve(this._scrollElement).on(Xe.SCROLL, function(t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = n.prototype;
      return (
        (t.refresh = function() {
          var e = this,
            t = this._scrollElement === this._scrollElement.window ? tn : en,
            r = 'auto' === this._config.method ? t : this._config.method,
            s = r === en ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            Ve.makeArray(Ve(this._selector))
              .map(function(t) {
                var e,
                  n = Cn.getSelectorFromElement(t);
                if ((n && (e = Ve(n)[0]), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height) return [Ve(e)[r]().top + s, n];
                }
                return null;
              })
              .filter(function(t) {
                return t;
              })
              .sort(function(t, e) {
                return t[0] - e[0];
              })
              .forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function() {
          Ve.removeData(this._element, Be),
            Ve(this._scrollElement).off(Ye),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function(t) {
          if ('string' != typeof (t = h({}, qe, 'object' == typeof t && t ? t : {})).target) {
            var e = Ve(t.target).attr('id');
            e || ((e = Cn.getUID(Qe)), Ve(t.target).attr('id', e)), (t.target = '#' + e);
          }
          return Cn.typeCheckConfig(Qe, t, ze), t;
        }),
        (t._getScrollTop = function() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function() {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          );
        }),
        (t._getOffsetHeight = function() {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function() {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
              return (this._activeTarget = null), void this._clear();
            for (var r = this._offsets.length; r--; ) {
              this._activeTarget !== this._targets[r] &&
                t >= this._offsets[r] &&
                ('undefined' == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) &&
                this._activate(this._targets[r]);
            }
          }
        }),
        (t._activate = function(e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(',');
          t = t.map(function(t) {
            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
          });
          var n = Ve(t.join(','));
          n.hasClass(Je)
            ? (n
                .closest($e.DROPDOWN)
                .find($e.DROPDOWN_TOGGLE)
                .addClass(Ze),
              n.addClass(Ze))
            : (n.addClass(Ze),
              n
                .parents($e.NAV_LIST_GROUP)
                .prev($e.NAV_LINKS + ', ' + $e.LIST_ITEMS)
                .addClass(Ze),
              n
                .parents($e.NAV_LIST_GROUP)
                .prev($e.NAV_ITEMS)
                .children($e.NAV_LINKS)
                .addClass(Ze)),
            Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e });
        }),
        (t._clear = function() {
          Ve(this._selector)
            .filter($e.ACTIVE)
            .removeClass(Ze);
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = Ve(this).data(Be);
            if ((t || ((t = new n(this, 'object' == typeof e && e)), Ve(this).data(Be, t)), 'string' == typeof e)) {
              if ('undefined' == typeof t[e]) throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        o(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return qe;
            }
          }
        ]),
        n
      );
    })()),
    Ve(window).on(Xe.LOAD_DATA_API, function() {
      for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--; ) {
        var n = Ve(t[e]);
        nn._jQueryInterface.call(n, n.data());
      }
    }),
    (Ve.fn[Qe] = nn._jQueryInterface),
    (Ve.fn[Qe].Constructor = nn),
    (Ve.fn[Qe].noConflict = function() {
      return (Ve.fn[Qe] = Ge), nn._jQueryInterface;
    }),
    nn),
    Pn = ((on = '.' + (sn = 'bs.tab')),
    (an = (rn = e).fn.tab),
    (ln = {
      HIDE: 'hide' + on,
      HIDDEN: 'hidden' + on,
      SHOW: 'show' + on,
      SHOWN: 'shown' + on,
      CLICK_DATA_API: 'click' + on + '.data-api'
    }),
    (hn = 'dropdown-menu'),
    (cn = 'active'),
    (un = 'disabled'),
    (fn = 'fade'),
    (dn = 'show'),
    (_n = '.dropdown'),
    (gn = '.nav, .list-group'),
    (mn = '.active'),
    (pn = '> li > .active'),
    (vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
    (En = '.dropdown-toggle'),
    (yn = '> .dropdown-menu .active'),
    (Tn = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                rn(this._element).hasClass(cn)) ||
              rn(this._element).hasClass(un)
            )
          ) {
            var t,
              i,
              e = rn(this._element).closest(gn)[0],
              r = Cn.getSelectorFromElement(this._element);
            if (e) {
              var s = 'UL' === e.nodeName ? pn : mn;
              i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
            }
            var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
              a = rn.Event(ln.SHOW, { relatedTarget: i });
            if (
              (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented())
            ) {
              r && (t = rn(r)[0]), this._activate(this._element, e);
              var l = function() {
                var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                  e = rn.Event(ln.SHOWN, { relatedTarget: i });
                rn(i).trigger(t), rn(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function() {
          rn.removeData(this._element, sn), (this._element = null);
        }),
        (t._activate = function(t, e, n) {
          var i = this,
            r = ('UL' === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
            s = n && r && rn(r).hasClass(fn),
            o = function() {
              return i._transitionComplete(t, r, n);
            };
          if (r && s) {
            var a = Cn.getTransitionDurationFromElement(r);
            rn(r)
              .one(Cn.TRANSITION_END, o)
              .emulateTransitionEnd(a);
          } else o();
        }),
        (t._transitionComplete = function(t, e, n) {
          if (e) {
            rn(e).removeClass(dn + ' ' + cn);
            var i = rn(e.parentNode).find(yn)[0];
            i && rn(i).removeClass(cn), 'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !1);
          }
          if (
            (rn(t).addClass(cn),
            'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0),
            Cn.reflow(t),
            rn(t).addClass(dn),
            t.parentNode && rn(t.parentNode).hasClass(hn))
          ) {
            var r = rn(t).closest(_n)[0];
            r &&
              rn(r)
                .find(En)
                .addClass(cn),
              t.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = rn(this),
              e = t.data(sn);
            if ((e || ((e = new i(this)), t.data(sn, e)), 'string' == typeof n)) {
              if ('undefined' == typeof e[n]) throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        o(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.1.1';
            }
          }
        ]),
        i
      );
    })()),
    rn(document).on(ln.CLICK_DATA_API, vn, function(t) {
      t.preventDefault(), Tn._jQueryInterface.call(rn(this), 'show');
    }),
    (rn.fn.tab = Tn._jQueryInterface),
    (rn.fn.tab.Constructor = Tn),
    (rn.fn.tab.noConflict = function() {
      return (rn.fn.tab = an), Tn._jQueryInterface;
    }),
    Tn);
  !(function(t) {
    if ('undefined' == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(' ')[0].split('.');
    if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0])
      throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  })(e),
    (t.Util = Cn),
    (t.Alert = In),
    (t.Button = An),
    (t.Carousel = Dn),
    (t.Collapse = bn),
    (t.Dropdown = Sn),
    (t.Modal = wn),
    (t.Popover = On),
    (t.Scrollspy = kn),
    (t.Tab = Pn),
    (t.Tooltip = Nn),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */ !(function(a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : 'object' == typeof module && module.exports
    ? (module.exports = function(b, c) {
        return void 0 === c && (c = 'undefined' != typeof window ? require('jquery') : require('jquery')(b)), a(c), c;
      })
    : a(jQuery);
})(function(a) {
  var b = (function() {
      if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
      var b;
      return (
        (function() {
          if (!b || !b.requirejs) {
            b ? (c = b) : (b = {});
            var a, c, d;
            !(function(b) {
              function e(a, b) {
                return v.call(a, b);
              }
              function f(a, b) {
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n,
                  o = b && b.split('/'),
                  p = t.map,
                  q = (p && p['*']) || {};
                if (a) {
                  for (
                    a = a.split('/'),
                      g = a.length - 1,
                      t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, '')),
                      '.' === a[0].charAt(0) && o && ((n = o.slice(0, o.length - 1)), (a = n.concat(a))),
                      k = 0;
                    k < a.length;
                    k++
                  )
                    if ('.' === (m = a[k])) a.splice(k, 1), (k -= 1);
                    else if ('..' === m) {
                      if (0 === k || (1 === k && '..' === a[2]) || '..' === a[k - 1]) continue;
                      k > 0 && (a.splice(k - 1, 2), (k -= 2));
                    }
                  a = a.join('/');
                }
                if ((o || q) && p) {
                  for (c = a.split('/'), k = c.length; k > 0; k -= 1) {
                    if (((d = c.slice(0, k).join('/')), o))
                      for (l = o.length; l > 0; l -= 1)
                        if ((e = p[o.slice(0, l).join('/')]) && (e = e[d])) {
                          (f = e), (h = k);
                          break;
                        }
                    if (f) break;
                    !i && q && q[d] && ((i = q[d]), (j = k));
                  }
                  !f && i && ((f = i), (h = j)), f && (c.splice(0, h, f), (a = c.join('/')));
                }
                return a;
              }
              function g(a, c) {
                return function() {
                  var d = w.call(arguments, 0);
                  return 'string' != typeof d[0] && 1 === d.length && d.push(null), o.apply(b, d.concat([a, c]));
                };
              }
              function h(a) {
                return function(b) {
                  return f(b, a);
                };
              }
              function i(a) {
                return function(b) {
                  r[a] = b;
                };
              }
              function j(a) {
                if (e(s, a)) {
                  var c = s[a];
                  delete s[a], (u[a] = !0), n.apply(b, c);
                }
                if (!e(r, a) && !e(u, a)) throw new Error('No ' + a);
                return r[a];
              }
              function k(a) {
                var b,
                  c = a ? a.indexOf('!') : -1;
                return c > -1 && ((b = a.substring(0, c)), (a = a.substring(c + 1, a.length))), [b, a];
              }
              function l(a) {
                return a ? k(a) : [];
              }
              function m(a) {
                return function() {
                  return (t && t.config && t.config[a]) || {};
                };
              }
              var n,
                o,
                p,
                q,
                r = {},
                s = {},
                t = {},
                u = {},
                v = Object.prototype.hasOwnProperty,
                w = [].slice,
                x = /\.js$/;
              (p = function(a, b) {
                var c,
                  d = k(a),
                  e = d[0],
                  g = b[1];
                return (
                  (a = d[1]),
                  e && ((e = f(e, g)), (c = j(e))),
                  e
                    ? (a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g))
                    : ((a = f(a, g)), (d = k(a)), (e = d[0]), (a = d[1]), e && (c = j(e))),
                  { f: e ? e + '!' + a : a, n: a, pr: e, p: c }
                );
              }),
                (q = {
                  require: function(a) {
                    return g(a);
                  },
                  exports: function(a) {
                    var b = r[a];
                    return void 0 !== b ? b : (r[a] = {});
                  },
                  module: function(a) {
                    return { id: a, uri: '', exports: r[a], config: m(a) };
                  }
                }),
                (n = function(a, c, d, f) {
                  var h,
                    k,
                    m,
                    n,
                    o,
                    t,
                    v,
                    w = [],
                    x = typeof d;
                  if (((f = f || a), (t = l(f)), 'undefined' === x || 'function' === x)) {
                    for (c = !c.length && d.length ? ['require', 'exports', 'module'] : c, o = 0; o < c.length; o += 1)
                      if (((n = p(c[o], t)), 'require' === (k = n.f))) w[o] = q.require(a);
                      else if ('exports' === k) (w[o] = q.exports(a)), (v = !0);
                      else if ('module' === k) h = w[o] = q.module(a);
                      else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);
                      else {
                        if (!n.p) throw new Error(a + ' missing ' + k);
                        n.p.load(n.n, g(f, !0), i(k), {}), (w[o] = r[k]);
                      }
                    (m = d ? d.apply(r[a], w) : void 0),
                      a &&
                        (h && h.exports !== b && h.exports !== r[a]
                          ? (r[a] = h.exports)
                          : (m === b && v) || (r[a] = m));
                  } else a && (r[a] = d);
                }),
                (a = c = o = function(a, c, d, e, f) {
                  if ('string' == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);
                  if (!a.splice) {
                    if (((t = a), t.deps && o(t.deps, t.callback), !c)) return;
                    c.splice ? ((a = c), (c = d), (d = null)) : (a = b);
                  }
                  return (
                    (c = c || function() {}),
                    'function' == typeof d && ((d = e), (e = f)),
                    e
                      ? n(b, a, c, d)
                      : setTimeout(function() {
                          n(b, a, c, d);
                        }, 4),
                    o
                  );
                }),
                (o.config = function(a) {
                  return o(a);
                }),
                (a._defined = r),
                (d = function(a, b, c) {
                  if ('string' != typeof a)
                    throw new Error('See almond README: incorrect module build, no module name');
                  b.splice || ((c = b), (b = [])), e(r, a) || e(s, a) || (s[a] = [a, b, c]);
                }),
                (d.amd = { jQuery: !0 });
            })(),
              (b.requirejs = a),
              (b.require = c),
              (b.define = d);
          }
        })(),
        b.define('almond', function() {}),
        b.define('jquery', [], function() {
          var b = a || $;
          return (
            null == b &&
              console &&
              console.error &&
              console.error(
                'Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.'
              ),
            b
          );
        }),
        b.define('select2/utils', ['jquery'], function(a) {
          function b(a) {
            var b = a.prototype,
              c = [];
            for (var d in b) {
              'function' == typeof b[d] && ('constructor' !== d && c.push(d));
            }
            return c;
          }
          var c = {};
          (c.Extend = function(a, b) {
            function c() {
              this.constructor = a;
            }
            var d = {}.hasOwnProperty;
            for (var e in b) d.call(b, e) && (a[e] = b[e]);
            return (c.prototype = b.prototype), (a.prototype = new c()), (a.__super__ = b.prototype), a;
          }),
            (c.Decorate = function(a, c) {
              function d() {
                var b = Array.prototype.unshift,
                  d = c.prototype.constructor.length,
                  e = a.prototype.constructor;
                d > 0 && (b.call(arguments, a.prototype.constructor), (e = c.prototype.constructor)),
                  e.apply(this, arguments);
              }
              function e() {
                this.constructor = d;
              }
              var f = b(c),
                g = b(a);
              (c.displayName = a.displayName), (d.prototype = new e());
              for (var h = 0; h < g.length; h++) {
                var i = g[h];
                d.prototype[i] = a.prototype[i];
              }
              for (
                var j = function(a) {
                    var b = function() {};
                    (a in d.prototype) && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function() {
                      return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments);
                    };
                  },
                  k = 0;
                k < f.length;
                k++
              ) {
                var l = f[k];
                d.prototype[l] = j(l);
              }
              return d;
            });
          var d = function() {
            this.listeners = {};
          };
          (d.prototype.on = function(a, b) {
            (this.listeners = this.listeners || {}),
              a in this.listeners ? this.listeners[a].push(b) : (this.listeners[a] = [b]);
          }),
            (d.prototype.trigger = function(a) {
              var b = Array.prototype.slice,
                c = b.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == c && (c = []),
                0 === c.length && c.push({}),
                (c[0]._type = a),
                a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)),
                '*' in this.listeners && this.invoke(this.listeners['*'], arguments);
            }),
            (d.prototype.invoke = function(a, b) {
              for (var c = 0, d = a.length; c < d; c++) a[c].apply(this, b);
            }),
            (c.Observable = d),
            (c.generateChars = function(a) {
              for (var b = '', c = 0; c < a; c++) {
                b += Math.floor(36 * Math.random()).toString(36);
              }
              return b;
            }),
            (c.bind = function(a, b) {
              return function() {
                a.apply(b, arguments);
              };
            }),
            (c._convertData = function(a) {
              for (var b in a) {
                var c = b.split('-'),
                  d = a;
                if (1 !== c.length) {
                  for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    (f = f.substring(0, 1).toLowerCase() + f.substring(1)),
                      f in d || (d[f] = {}),
                      e == c.length - 1 && (d[f] = a[b]),
                      (d = d[f]);
                  }
                  delete a[b];
                }
              }
              return a;
            }),
            (c.hasScroll = function(b, c) {
              var d = a(c),
                e = c.style.overflowX,
                f = c.style.overflowY;
              return (
                (e !== f || ('hidden' !== f && 'visible' !== f)) &&
                ('scroll' === e ||
                  'scroll' === f ||
                  (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
              );
            }),
            (c.escapeMarkup = function(a) {
              var b = {
                '\\': '&#92;',
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#47;'
              };
              return 'string' != typeof a
                ? a
                : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                    return b[a];
                  });
            }),
            (c.appendMany = function(b, c) {
              if ('1.7' === a.fn.jquery.substr(0, 3)) {
                var d = a();
                a.map(c, function(a) {
                  d = d.add(a);
                }),
                  (c = d);
              }
              b.append(c);
            }),
            (c.__cache = {});
          var e = 0;
          return (
            (c.GetUniqueElementId = function(a) {
              var b = a.getAttribute('data-select2-id');
              return (
                null == b &&
                  (a.id
                    ? ((b = a.id), a.setAttribute('data-select2-id', b))
                    : (a.setAttribute('data-select2-id', ++e), (b = e.toString()))),
                b
              );
            }),
            (c.StoreData = function(a, b, d) {
              var e = c.GetUniqueElementId(a);
              c.__cache[e] || (c.__cache[e] = {}), (c.__cache[e][b] = d);
            }),
            (c.GetData = function(b, d) {
              var e = c.GetUniqueElementId(b);
              return d ? (c.__cache[e] && null != c.__cache[e][d] ? c.__cache[e][d] : a(b).data(d)) : c.__cache[e];
            }),
            (c.RemoveData = function(a) {
              var b = c.GetUniqueElementId(a);
              null != c.__cache[b] && delete c.__cache[b];
            }),
            c
          );
        }),
        b.define('select2/results', ['jquery', './utils'], function(a, b) {
          function c(a, b, d) {
            (this.$element = a), (this.data = d), (this.options = b), c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function() {
              var b = a('<ul class="select2-results__options" role="tree"></ul>');
              return this.options.get('multiple') && b.attr('aria-multiselectable', 'true'), (this.$results = b), b;
            }),
            (c.prototype.clear = function() {
              this.$results.empty();
            }),
            (c.prototype.displayMessage = function(b) {
              var c = this.options.get('escapeMarkup');
              this.clear(), this.hideLoading();
              var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                e = this.options.get('translations').get(b.message);
              d.append(c(e(b.args))), (d[0].className += ' select2-results__message'), this.$results.append(d);
            }),
            (c.prototype.hideMessages = function() {
              this.$results.find('.select2-results__message').remove();
            }),
            (c.prototype.append = function(a) {
              this.hideLoading();
              var b = [];
              if (null == a.results || 0 === a.results.length)
                return void (
                  0 === this.$results.children().length && this.trigger('results:message', { message: 'noResults' })
                );
              a.results = this.sort(a.results);
              for (var c = 0; c < a.results.length; c++) {
                var d = a.results[c],
                  e = this.option(d);
                b.push(e);
              }
              this.$results.append(b);
            }),
            (c.prototype.position = function(a, b) {
              b.find('.select2-results').append(a);
            }),
            (c.prototype.sort = function(a) {
              return this.options.get('sorter')(a);
            }),
            (c.prototype.highlightFirstItem = function() {
              var a = this.$results.find('.select2-results__option[aria-selected]'),
                b = a.filter('[aria-selected=true]');
              b.length > 0 ? b.first().trigger('mouseenter') : a.first().trigger('mouseenter'),
                this.ensureHighlightVisible();
            }),
            (c.prototype.setClasses = function() {
              var c = this;
              this.data.current(function(d) {
                var e = a.map(d, function(a) {
                  return a.id.toString();
                });
                c.$results.find('.select2-results__option[aria-selected]').each(function() {
                  var c = a(this),
                    d = b.GetData(this, 'data'),
                    f = '' + d.id;
                  (null != d.element && d.element.selected) || (null == d.element && a.inArray(f, e) > -1)
                    ? c.attr('aria-selected', 'true')
                    : c.attr('aria-selected', 'false');
                });
              });
            }),
            (c.prototype.showLoading = function(a) {
              this.hideLoading();
              var b = this.options.get('translations').get('searching'),
                c = { disabled: !0, loading: !0, text: b(a) },
                d = this.option(c);
              (d.className += ' loading-results'), this.$results.prepend(d);
            }),
            (c.prototype.hideLoading = function() {
              this.$results.find('.loading-results').remove();
            }),
            (c.prototype.option = function(c) {
              var d = document.createElement('li');
              d.className = 'select2-results__option';
              var e = { role: 'treeitem', 'aria-selected': 'false' };
              c.disabled && (delete e['aria-selected'], (e['aria-disabled'] = 'true')),
                null == c.id && delete e['aria-selected'],
                null != c._resultId && (d.id = c._resultId),
                c.title && (d.title = c.title),
                c.children && ((e.role = 'group'), (e['aria-label'] = c.text), delete e['aria-selected']);
              for (var f in e) {
                var g = e[f];
                d.setAttribute(f, g);
              }
              if (c.children) {
                var h = a(d),
                  i = document.createElement('strong');
                i.className = 'select2-results__group';
                a(i);
                this.template(c, i);
                for (var j = [], k = 0; k < c.children.length; k++) {
                  var l = c.children[k],
                    m = this.option(l);
                  j.push(m);
                }
                var n = a('<ul></ul>', { class: 'select2-results__options select2-results__options--nested' });
                n.append(j), h.append(i), h.append(n);
              } else this.template(c, d);
              return b.StoreData(d, 'data', c), d;
            }),
            (c.prototype.bind = function(c, d) {
              var e = this,
                f = c.id + '-results';
              this.$results.attr('id', f),
                c.on('results:all', function(a) {
                  e.clear(), e.append(a.data), c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }),
                c.on('results:append', function(a) {
                  e.append(a.data), c.isOpen() && e.setClasses();
                }),
                c.on('query', function(a) {
                  e.hideMessages(), e.showLoading(a);
                }),
                c.on('select', function() {
                  c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }),
                c.on('unselect', function() {
                  c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }),
                c.on('open', function() {
                  e.$results.attr('aria-expanded', 'true'),
                    e.$results.attr('aria-hidden', 'false'),
                    e.setClasses(),
                    e.ensureHighlightVisible();
                }),
                c.on('close', function() {
                  e.$results.attr('aria-expanded', 'false'),
                    e.$results.attr('aria-hidden', 'true'),
                    e.$results.removeAttr('aria-activedescendant');
                }),
                c.on('results:toggle', function() {
                  var a = e.getHighlightedResults();
                  0 !== a.length && a.trigger('mouseup');
                }),
                c.on('results:select', function() {
                  var a = e.getHighlightedResults();
                  if (0 !== a.length) {
                    var c = b.GetData(a[0], 'data');
                    'true' == a.attr('aria-selected') ? e.trigger('close', {}) : e.trigger('select', { data: c });
                  }
                }),
                c.on('results:previous', function() {
                  var a = e.getHighlightedResults(),
                    b = e.$results.find('[aria-selected]'),
                    c = b.index(a);
                  if (!(c <= 0)) {
                    var d = c - 1;
                    0 === a.length && (d = 0);
                    var f = b.eq(d);
                    f.trigger('mouseenter');
                    var g = e.$results.offset().top,
                      h = f.offset().top,
                      i = e.$results.scrollTop() + (h - g);
                    0 === d ? e.$results.scrollTop(0) : h - g < 0 && e.$results.scrollTop(i);
                  }
                }),
                c.on('results:next', function() {
                  var a = e.getHighlightedResults(),
                    b = e.$results.find('[aria-selected]'),
                    c = b.index(a),
                    d = c + 1;
                  if (!(d >= b.length)) {
                    var f = b.eq(d);
                    f.trigger('mouseenter');
                    var g = e.$results.offset().top + e.$results.outerHeight(!1),
                      h = f.offset().top + f.outerHeight(!1),
                      i = e.$results.scrollTop() + h - g;
                    0 === d ? e.$results.scrollTop(0) : h > g && e.$results.scrollTop(i);
                  }
                }),
                c.on('results:focus', function(a) {
                  a.element.addClass('select2-results__option--highlighted');
                }),
                c.on('results:message', function(a) {
                  e.displayMessage(a);
                }),
                a.fn.mousewheel &&
                  this.$results.on('mousewheel', function(a) {
                    var b = e.$results.scrollTop(),
                      c = e.$results.get(0).scrollHeight - b + a.deltaY,
                      d = a.deltaY > 0 && b - a.deltaY <= 0,
                      f = a.deltaY < 0 && c <= e.$results.height();
                    d
                      ? (e.$results.scrollTop(0), a.preventDefault(), a.stopPropagation())
                      : f &&
                        (e.$results.scrollTop(e.$results.get(0).scrollHeight - e.$results.height()),
                        a.preventDefault(),
                        a.stopPropagation());
                  }),
                this.$results.on('mouseup', '.select2-results__option[aria-selected]', function(c) {
                  var d = a(this),
                    f = b.GetData(this, 'data');
                  if ('true' === d.attr('aria-selected'))
                    return void (e.options.get('multiple')
                      ? e.trigger('unselect', { originalEvent: c, data: f })
                      : e.trigger('close', {}));
                  e.trigger('select', { originalEvent: c, data: f });
                }),
                this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function(c) {
                  var d = b.GetData(this, 'data');
                  e.getHighlightedResults().removeClass('select2-results__option--highlighted'),
                    e.trigger('results:focus', { data: d, element: a(this) });
                });
            }),
            (c.prototype.getHighlightedResults = function() {
              return this.$results.find('.select2-results__option--highlighted');
            }),
            (c.prototype.destroy = function() {
              this.$results.remove();
            }),
            (c.prototype.ensureHighlightVisible = function() {
              var a = this.getHighlightedResults();
              if (0 !== a.length) {
                var b = this.$results.find('[aria-selected]'),
                  c = b.index(a),
                  d = this.$results.offset().top,
                  e = a.offset().top,
                  f = this.$results.scrollTop() + (e - d),
                  g = e - d;
                (f -= 2 * a.outerHeight(!1)),
                  c <= 2
                    ? this.$results.scrollTop(0)
                    : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f);
              }
            }),
            (c.prototype.template = function(b, c) {
              var d = this.options.get('templateResult'),
                e = this.options.get('escapeMarkup'),
                f = d(b, c);
              null == f ? (c.style.display = 'none') : 'string' == typeof f ? (c.innerHTML = e(f)) : a(c).append(f);
            }),
            c
          );
        }),
        b.define('select2/keys', [], function() {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          };
        }),
        b.define('select2/selection/base', ['jquery', '../utils', '../keys'], function(a, b, c) {
          function d(a, b) {
            (this.$element = a), (this.options = b), d.__super__.constructor.call(this);
          }
          return (
            b.Extend(d, b.Observable),
            (d.prototype.render = function() {
              var c = a(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != b.GetData(this.$element[0], 'old-tabindex')
                  ? (this._tabindex = b.GetData(this.$element[0], 'old-tabindex'))
                  : null != this.$element.attr('tabindex') && (this._tabindex = this.$element.attr('tabindex')),
                c.attr('title', this.$element.attr('title')),
                c.attr('tabindex', this._tabindex),
                (this.$selection = c),
                c
              );
            }),
            (d.prototype.bind = function(a, b) {
              var d = this,
                e = (a.id, a.id + '-results');
              (this.container = a),
                this.$selection.on('focus', function(a) {
                  d.trigger('focus', a);
                }),
                this.$selection.on('blur', function(a) {
                  d._handleBlur(a);
                }),
                this.$selection.on('keydown', function(a) {
                  d.trigger('keypress', a), a.which === c.SPACE && a.preventDefault();
                }),
                a.on('results:focus', function(a) {
                  d.$selection.attr('aria-activedescendant', a.data._resultId);
                }),
                a.on('selection:update', function(a) {
                  d.update(a.data);
                }),
                a.on('open', function() {
                  d.$selection.attr('aria-expanded', 'true'),
                    d.$selection.attr('aria-owns', e),
                    d._attachCloseHandler(a);
                }),
                a.on('close', function() {
                  d.$selection.attr('aria-expanded', 'false'),
                    d.$selection.removeAttr('aria-activedescendant'),
                    d.$selection.removeAttr('aria-owns'),
                    d.$selection.focus(),
                    window.setTimeout(function() {
                      d.$selection.focus();
                    }, 0),
                    d._detachCloseHandler(a);
                }),
                a.on('enable', function() {
                  d.$selection.attr('tabindex', d._tabindex);
                }),
                a.on('disable', function() {
                  d.$selection.attr('tabindex', '-1');
                });
            }),
            (d.prototype._handleBlur = function(b) {
              var c = this;
              window.setTimeout(function() {
                document.activeElement == c.$selection[0] ||
                  a.contains(c.$selection[0], document.activeElement) ||
                  c.trigger('blur', b);
              }, 1);
            }),
            (d.prototype._attachCloseHandler = function(c) {
              a(document.body).on('mousedown.select2.' + c.id, function(c) {
                var d = a(c.target),
                  e = d.closest('.select2');
                a('.select2.select2-container--open').each(function() {
                  a(this), this != e[0] && b.GetData(this, 'element').select2('close');
                });
              });
            }),
            (d.prototype._detachCloseHandler = function(b) {
              a(document.body).off('mousedown.select2.' + b.id);
            }),
            (d.prototype.position = function(a, b) {
              b.find('.selection').append(a);
            }),
            (d.prototype.destroy = function() {
              this._detachCloseHandler(this.container);
            }),
            (d.prototype.update = function(a) {
              throw new Error('The `update` method must be defined in child classes.');
            }),
            d
          );
        }),
        b.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function(a, b, c, d) {
          function e() {
            e.__super__.constructor.apply(this, arguments);
          }
          return (
            c.Extend(e, b),
            (e.prototype.render = function() {
              var a = e.__super__.render.call(this);
              return (
                a.addClass('select2-selection--single'),
                a.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                ),
                a
              );
            }),
            (e.prototype.bind = function(a, b) {
              var c = this;
              e.__super__.bind.apply(this, arguments);
              var d = a.id + '-container';
              this.$selection
                .find('.select2-selection__rendered')
                .attr('id', d)
                .attr('role', 'textbox')
                .attr('aria-readonly', 'true'),
                this.$selection.attr('aria-labelledby', d),
                this.$selection.on('mousedown', function(a) {
                  1 === a.which && c.trigger('toggle', { originalEvent: a });
                }),
                this.$selection.on('focus', function(a) {}),
                this.$selection.on('blur', function(a) {}),
                a.on('focus', function(b) {
                  a.isOpen() || c.$selection.focus();
                });
            }),
            (e.prototype.clear = function() {
              var a = this.$selection.find('.select2-selection__rendered');
              a.empty(), a.removeAttr('title');
            }),
            (e.prototype.display = function(a, b) {
              var c = this.options.get('templateSelection');
              return this.options.get('escapeMarkup')(c(a, b));
            }),
            (e.prototype.selectionContainer = function() {
              return a('<span></span>');
            }),
            (e.prototype.update = function(a) {
              if (0 === a.length) return void this.clear();
              var b = a[0],
                c = this.$selection.find('.select2-selection__rendered'),
                d = this.display(b, c);
              c.empty().append(d), c.attr('title', b.title || b.text);
            }),
            e
          );
        }),
        b.define('select2/selection/multiple', ['jquery', './base', '../utils'], function(a, b, c) {
          function d(a, b) {
            d.__super__.constructor.apply(this, arguments);
          }
          return (
            c.Extend(d, b),
            (d.prototype.render = function() {
              var a = d.__super__.render.call(this);
              return (
                a.addClass('select2-selection--multiple'), a.html('<ul class="select2-selection__rendered"></ul>'), a
              );
            }),
            (d.prototype.bind = function(b, e) {
              var f = this;
              d.__super__.bind.apply(this, arguments),
                this.$selection.on('click', function(a) {
                  f.trigger('toggle', { originalEvent: a });
                }),
                this.$selection.on('click', '.select2-selection__choice__remove', function(b) {
                  if (!f.options.get('disabled')) {
                    var d = a(this),
                      e = d.parent(),
                      g = c.GetData(e[0], 'data');
                    f.trigger('unselect', { originalEvent: b, data: g });
                  }
                });
            }),
            (d.prototype.clear = function() {
              var a = this.$selection.find('.select2-selection__rendered');
              a.empty(), a.removeAttr('title');
            }),
            (d.prototype.display = function(a, b) {
              var c = this.options.get('templateSelection');
              return this.options.get('escapeMarkup')(c(a, b));
            }),
            (d.prototype.selectionContainer = function() {
              return a(
                '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
              );
            }),
            (d.prototype.update = function(a) {
              if ((this.clear(), 0 !== a.length)) {
                for (var b = [], d = 0; d < a.length; d++) {
                  var e = a[d],
                    f = this.selectionContainer(),
                    g = this.display(e, f);
                  f.append(g), f.attr('title', e.title || e.text), c.StoreData(f[0], 'data', e), b.push(f);
                }
                var h = this.$selection.find('.select2-selection__rendered');
                c.appendMany(h, b);
              }
            }),
            d
          );
        }),
        b.define('select2/selection/placeholder', ['../utils'], function(a) {
          function b(a, b, c) {
            (this.placeholder = this.normalizePlaceholder(c.get('placeholder'))), a.call(this, b, c);
          }
          return (
            (b.prototype.normalizePlaceholder = function(a, b) {
              return 'string' == typeof b && (b = { id: '', text: b }), b;
            }),
            (b.prototype.createPlaceholder = function(a, b) {
              var c = this.selectionContainer();
              return (
                c.html(this.display(b)),
                c.addClass('select2-selection__placeholder').removeClass('select2-selection__choice'),
                c
              );
            }),
            (b.prototype.update = function(a, b) {
              var c = 1 == b.length && b[0].id != this.placeholder.id;
              if (b.length > 1 || c) return a.call(this, b);
              this.clear();
              var d = this.createPlaceholder(this.placeholder);
              this.$selection.find('.select2-selection__rendered').append(d);
            }),
            b
          );
        }),
        b.define('select2/selection/allowClear', ['jquery', '../keys', '../utils'], function(a, b, c) {
          function d() {}
          return (
            (d.prototype.bind = function(a, b, c) {
              var d = this;
              a.call(this, b, c),
                null == this.placeholder &&
                  this.options.get('debug') &&
                  window.console &&
                  console.error &&
                  console.error(
                    'Select2: The `allowClear` option should be used in combination with the `placeholder` option.'
                  ),
                this.$selection.on('mousedown', '.select2-selection__clear', function(a) {
                  d._handleClear(a);
                }),
                b.on('keypress', function(a) {
                  d._handleKeyboardClear(a, b);
                });
            }),
            (d.prototype._handleClear = function(a, b) {
              if (!this.options.get('disabled')) {
                var d = this.$selection.find('.select2-selection__clear');
                if (0 !== d.length) {
                  b.stopPropagation();
                  var e = c.GetData(d[0], 'data'),
                    f = this.$element.val();
                  this.$element.val(this.placeholder.id);
                  var g = { data: e };
                  if ((this.trigger('clear', g), g.prevented)) return void this.$element.val(f);
                  for (var h = 0; h < e.length; h++)
                    if (((g = { data: e[h] }), this.trigger('unselect', g), g.prevented))
                      return void this.$element.val(f);
                  this.$element.trigger('change'), this.trigger('toggle', {});
                }
              }
            }),
            (d.prototype._handleKeyboardClear = function(a, c, d) {
              d.isOpen() || (c.which != b.DELETE && c.which != b.BACKSPACE) || this._handleClear(c);
            }),
            (d.prototype.update = function(b, d) {
              if (
                (b.call(this, d),
                !(this.$selection.find('.select2-selection__placeholder').length > 0 || 0 === d.length))
              ) {
                var e = a('<span class="select2-selection__clear">&times;</span>');
                c.StoreData(e[0], 'data', d), this.$selection.find('.select2-selection__rendered').prepend(e);
              }
            }),
            d
          );
        }),
        b.define('select2/selection/search', ['jquery', '../utils', '../keys'], function(a, b, c) {
          function d(a, b, c) {
            a.call(this, b, c);
          }
          return (
            (d.prototype.render = function(b) {
              var c = a(
                '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
              );
              (this.$searchContainer = c), (this.$search = c.find('input'));
              var d = b.call(this);
              return this._transferTabIndex(), d;
            }),
            (d.prototype.bind = function(a, d, e) {
              var f = this;
              a.call(this, d, e),
                d.on('open', function() {
                  f.$search.trigger('focus');
                }),
                d.on('close', function() {
                  f.$search.val(''), f.$search.removeAttr('aria-activedescendant'), f.$search.trigger('focus');
                }),
                d.on('enable', function() {
                  f.$search.prop('disabled', !1), f._transferTabIndex();
                }),
                d.on('disable', function() {
                  f.$search.prop('disabled', !0);
                }),
                d.on('focus', function(a) {
                  f.$search.trigger('focus');
                }),
                d.on('results:focus', function(a) {
                  f.$search.attr('aria-activedescendant', a.id);
                }),
                this.$selection.on('focusin', '.select2-search--inline', function(a) {
                  f.trigger('focus', a);
                }),
                this.$selection.on('focusout', '.select2-search--inline', function(a) {
                  f._handleBlur(a);
                }),
                this.$selection.on('keydown', '.select2-search--inline', function(a) {
                  if (
                    (a.stopPropagation(),
                    f.trigger('keypress', a),
                    (f._keyUpPrevented = a.isDefaultPrevented()),
                    a.which === c.BACKSPACE && '' === f.$search.val())
                  ) {
                    var d = f.$searchContainer.prev('.select2-selection__choice');
                    if (d.length > 0) {
                      var e = b.GetData(d[0], 'data');
                      f.searchRemoveChoice(e), a.preventDefault();
                    }
                  }
                });
              var g = document.documentMode,
                h = g && g <= 11;
              this.$selection.on('input.searchcheck', '.select2-search--inline', function(a) {
                if (h) return void f.$selection.off('input.search input.searchcheck');
                f.$selection.off('keyup.search');
              }),
                this.$selection.on('keyup.search input.search', '.select2-search--inline', function(a) {
                  if (h && 'input' === a.type) return void f.$selection.off('input.search input.searchcheck');
                  var b = a.which;
                  b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && f.handleSearch(a);
                });
            }),
            (d.prototype._transferTabIndex = function(a) {
              this.$search.attr('tabindex', this.$selection.attr('tabindex')), this.$selection.attr('tabindex', '-1');
            }),
            (d.prototype.createPlaceholder = function(a, b) {
              this.$search.attr('placeholder', b.text);
            }),
            (d.prototype.update = function(a, b) {
              var c = this.$search[0] == document.activeElement;
              if (
                (this.$search.attr('placeholder', ''),
                a.call(this, b),
                this.$selection.find('.select2-selection__rendered').append(this.$searchContainer),
                this.resizeSearch(),
                c)
              ) {
                this.$element.find('[data-select2-tag]').length ? this.$element.focus() : this.$search.focus();
              }
            }),
            (d.prototype.handleSearch = function() {
              if ((this.resizeSearch(), !this._keyUpPrevented)) {
                var a = this.$search.val();
                this.trigger('query', { term: a });
              }
              this._keyUpPrevented = !1;
            }),
            (d.prototype.searchRemoveChoice = function(a, b) {
              this.trigger('unselect', { data: b }), this.$search.val(b.text), this.handleSearch();
            }),
            (d.prototype.resizeSearch = function() {
              this.$search.css('width', '25px');
              var a = '';
              if ('' !== this.$search.attr('placeholder'))
                a = this.$selection.find('.select2-selection__rendered').innerWidth();
              else {
                a = 0.75 * (this.$search.val().length + 1) + 'em';
              }
              this.$search.css('width', a);
            }),
            d
          );
        }),
        b.define('select2/selection/eventRelay', ['jquery'], function(a) {
          function b() {}
          return (
            (b.prototype.bind = function(b, c, d) {
              var e = this,
                f = [
                  'open',
                  'opening',
                  'close',
                  'closing',
                  'select',
                  'selecting',
                  'unselect',
                  'unselecting',
                  'clear',
                  'clearing'
                ],
                g = ['opening', 'closing', 'selecting', 'unselecting', 'clearing'];
              b.call(this, c, d),
                c.on('*', function(b, c) {
                  if (-1 !== a.inArray(b, f)) {
                    c = c || {};
                    var d = a.Event('select2:' + b, { params: c });
                    e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
                  }
                });
            }),
            b
          );
        }),
        b.define('select2/translation', ['jquery', 'require'], function(a, b) {
          function c(a) {
            this.dict = a || {};
          }
          return (
            (c.prototype.all = function() {
              return this.dict;
            }),
            (c.prototype.get = function(a) {
              return this.dict[a];
            }),
            (c.prototype.extend = function(b) {
              this.dict = a.extend({}, b.all(), this.dict);
            }),
            (c._cache = {}),
            (c.loadPath = function(a) {
              if (!(a in c._cache)) {
                var d = b(a);
                c._cache[a] = d;
              }
              return new c(c._cache[a]);
            }),
            c
          );
        }),
        b.define('select2/diacritics', [], function() {
          return {
            'Ⓐ': 'A',
            Ａ: 'A',
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ầ: 'A',
            Ấ: 'A',
            Ẫ: 'A',
            Ẩ: 'A',
            Ã: 'A',
            Ā: 'A',
            Ă: 'A',
            Ằ: 'A',
            Ắ: 'A',
            Ẵ: 'A',
            Ẳ: 'A',
            Ȧ: 'A',
            Ǡ: 'A',
            Ä: 'A',
            Ǟ: 'A',
            Ả: 'A',
            Å: 'A',
            Ǻ: 'A',
            Ǎ: 'A',
            Ȁ: 'A',
            Ȃ: 'A',
            Ạ: 'A',
            Ậ: 'A',
            Ặ: 'A',
            Ḁ: 'A',
            Ą: 'A',
            Ⱥ: 'A',
            Ɐ: 'A',
            Ꜳ: 'AA',
            Æ: 'AE',
            Ǽ: 'AE',
            Ǣ: 'AE',
            Ꜵ: 'AO',
            Ꜷ: 'AU',
            Ꜹ: 'AV',
            Ꜻ: 'AV',
            Ꜽ: 'AY',
            'Ⓑ': 'B',
            Ｂ: 'B',
            Ḃ: 'B',
            Ḅ: 'B',
            Ḇ: 'B',
            Ƀ: 'B',
            Ƃ: 'B',
            Ɓ: 'B',
            'Ⓒ': 'C',
            Ｃ: 'C',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            Ç: 'C',
            Ḉ: 'C',
            Ƈ: 'C',
            Ȼ: 'C',
            Ꜿ: 'C',
            'Ⓓ': 'D',
            Ｄ: 'D',
            Ḋ: 'D',
            Ď: 'D',
            Ḍ: 'D',
            Ḑ: 'D',
            Ḓ: 'D',
            Ḏ: 'D',
            Đ: 'D',
            Ƌ: 'D',
            Ɗ: 'D',
            Ɖ: 'D',
            Ꝺ: 'D',
            Ǳ: 'DZ',
            Ǆ: 'DZ',
            ǲ: 'Dz',
            ǅ: 'Dz',
            'Ⓔ': 'E',
            Ｅ: 'E',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ề: 'E',
            Ế: 'E',
            Ễ: 'E',
            Ể: 'E',
            Ẽ: 'E',
            Ē: 'E',
            Ḕ: 'E',
            Ḗ: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ë: 'E',
            Ẻ: 'E',
            Ě: 'E',
            Ȅ: 'E',
            Ȇ: 'E',
            Ẹ: 'E',
            Ệ: 'E',
            Ȩ: 'E',
            Ḝ: 'E',
            Ę: 'E',
            Ḙ: 'E',
            Ḛ: 'E',
            Ɛ: 'E',
            Ǝ: 'E',
            'Ⓕ': 'F',
            Ｆ: 'F',
            Ḟ: 'F',
            Ƒ: 'F',
            Ꝼ: 'F',
            'Ⓖ': 'G',
            Ｇ: 'G',
            Ǵ: 'G',
            Ĝ: 'G',
            Ḡ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ǧ: 'G',
            Ģ: 'G',
            Ǥ: 'G',
            Ɠ: 'G',
            Ꞡ: 'G',
            Ᵹ: 'G',
            Ꝿ: 'G',
            'Ⓗ': 'H',
            Ｈ: 'H',
            Ĥ: 'H',
            Ḣ: 'H',
            Ḧ: 'H',
            Ȟ: 'H',
            Ḥ: 'H',
            Ḩ: 'H',
            Ḫ: 'H',
            Ħ: 'H',
            Ⱨ: 'H',
            Ⱶ: 'H',
            Ɥ: 'H',
            'Ⓘ': 'I',
            Ｉ: 'I',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            İ: 'I',
            Ï: 'I',
            Ḯ: 'I',
            Ỉ: 'I',
            Ǐ: 'I',
            Ȉ: 'I',
            Ȋ: 'I',
            Ị: 'I',
            Į: 'I',
            Ḭ: 'I',
            Ɨ: 'I',
            'Ⓙ': 'J',
            Ｊ: 'J',
            Ĵ: 'J',
            Ɉ: 'J',
            'Ⓚ': 'K',
            Ｋ: 'K',
            Ḱ: 'K',
            Ǩ: 'K',
            Ḳ: 'K',
            Ķ: 'K',
            Ḵ: 'K',
            Ƙ: 'K',
            Ⱪ: 'K',
            Ꝁ: 'K',
            Ꝃ: 'K',
            Ꝅ: 'K',
            Ꞣ: 'K',
            'Ⓛ': 'L',
            Ｌ: 'L',
            Ŀ: 'L',
            Ĺ: 'L',
            Ľ: 'L',
            Ḷ: 'L',
            Ḹ: 'L',
            Ļ: 'L',
            Ḽ: 'L',
            Ḻ: 'L',
            Ł: 'L',
            Ƚ: 'L',
            Ɫ: 'L',
            Ⱡ: 'L',
            Ꝉ: 'L',
            Ꝇ: 'L',
            Ꞁ: 'L',
            Ǉ: 'LJ',
            ǈ: 'Lj',
            'Ⓜ': 'M',
            Ｍ: 'M',
            Ḿ: 'M',
            Ṁ: 'M',
            Ṃ: 'M',
            Ɱ: 'M',
            Ɯ: 'M',
            'Ⓝ': 'N',
            Ｎ: 'N',
            Ǹ: 'N',
            Ń: 'N',
            Ñ: 'N',
            Ṅ: 'N',
            Ň: 'N',
            Ṇ: 'N',
            Ņ: 'N',
            Ṋ: 'N',
            Ṉ: 'N',
            Ƞ: 'N',
            Ɲ: 'N',
            Ꞑ: 'N',
            Ꞥ: 'N',
            Ǌ: 'NJ',
            ǋ: 'Nj',
            'Ⓞ': 'O',
            Ｏ: 'O',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Ồ: 'O',
            Ố: 'O',
            Ỗ: 'O',
            Ổ: 'O',
            Õ: 'O',
            Ṍ: 'O',
            Ȭ: 'O',
            Ṏ: 'O',
            Ō: 'O',
            Ṑ: 'O',
            Ṓ: 'O',
            Ŏ: 'O',
            Ȯ: 'O',
            Ȱ: 'O',
            Ö: 'O',
            Ȫ: 'O',
            Ỏ: 'O',
            Ő: 'O',
            Ǒ: 'O',
            Ȍ: 'O',
            Ȏ: 'O',
            Ơ: 'O',
            Ờ: 'O',
            Ớ: 'O',
            Ỡ: 'O',
            Ở: 'O',
            Ợ: 'O',
            Ọ: 'O',
            Ộ: 'O',
            Ǫ: 'O',
            Ǭ: 'O',
            Ø: 'O',
            Ǿ: 'O',
            Ɔ: 'O',
            Ɵ: 'O',
            Ꝋ: 'O',
            Ꝍ: 'O',
            Ƣ: 'OI',
            Ꝏ: 'OO',
            Ȣ: 'OU',
            'Ⓟ': 'P',
            Ｐ: 'P',
            Ṕ: 'P',
            Ṗ: 'P',
            Ƥ: 'P',
            Ᵽ: 'P',
            Ꝑ: 'P',
            Ꝓ: 'P',
            Ꝕ: 'P',
            'Ⓠ': 'Q',
            Ｑ: 'Q',
            Ꝗ: 'Q',
            Ꝙ: 'Q',
            Ɋ: 'Q',
            'Ⓡ': 'R',
            Ｒ: 'R',
            Ŕ: 'R',
            Ṙ: 'R',
            Ř: 'R',
            Ȑ: 'R',
            Ȓ: 'R',
            Ṛ: 'R',
            Ṝ: 'R',
            Ŗ: 'R',
            Ṟ: 'R',
            Ɍ: 'R',
            Ɽ: 'R',
            Ꝛ: 'R',
            Ꞧ: 'R',
            Ꞃ: 'R',
            'Ⓢ': 'S',
            Ｓ: 'S',
            ẞ: 'S',
            Ś: 'S',
            Ṥ: 'S',
            Ŝ: 'S',
            Ṡ: 'S',
            Š: 'S',
            Ṧ: 'S',
            Ṣ: 'S',
            Ṩ: 'S',
            Ș: 'S',
            Ş: 'S',
            Ȿ: 'S',
            Ꞩ: 'S',
            Ꞅ: 'S',
            'Ⓣ': 'T',
            Ｔ: 'T',
            Ṫ: 'T',
            Ť: 'T',
            Ṭ: 'T',
            Ț: 'T',
            Ţ: 'T',
            Ṱ: 'T',
            Ṯ: 'T',
            Ŧ: 'T',
            Ƭ: 'T',
            Ʈ: 'T',
            Ⱦ: 'T',
            Ꞇ: 'T',
            Ꜩ: 'TZ',
            'Ⓤ': 'U',
            Ｕ: 'U',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ũ: 'U',
            Ṹ: 'U',
            Ū: 'U',
            Ṻ: 'U',
            Ŭ: 'U',
            Ü: 'U',
            Ǜ: 'U',
            Ǘ: 'U',
            Ǖ: 'U',
            Ǚ: 'U',
            Ủ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ǔ: 'U',
            Ȕ: 'U',
            Ȗ: 'U',
            Ư: 'U',
            Ừ: 'U',
            Ứ: 'U',
            Ữ: 'U',
            Ử: 'U',
            Ự: 'U',
            Ụ: 'U',
            Ṳ: 'U',
            Ų: 'U',
            Ṷ: 'U',
            Ṵ: 'U',
            Ʉ: 'U',
            'Ⓥ': 'V',
            Ｖ: 'V',
            Ṽ: 'V',
            Ṿ: 'V',
            Ʋ: 'V',
            Ꝟ: 'V',
            Ʌ: 'V',
            Ꝡ: 'VY',
            'Ⓦ': 'W',
            Ｗ: 'W',
            Ẁ: 'W',
            Ẃ: 'W',
            Ŵ: 'W',
            Ẇ: 'W',
            Ẅ: 'W',
            Ẉ: 'W',
            Ⱳ: 'W',
            'Ⓧ': 'X',
            Ｘ: 'X',
            Ẋ: 'X',
            Ẍ: 'X',
            'Ⓨ': 'Y',
            Ｙ: 'Y',
            Ỳ: 'Y',
            Ý: 'Y',
            Ŷ: 'Y',
            Ỹ: 'Y',
            Ȳ: 'Y',
            Ẏ: 'Y',
            Ÿ: 'Y',
            Ỷ: 'Y',
            Ỵ: 'Y',
            Ƴ: 'Y',
            Ɏ: 'Y',
            Ỿ: 'Y',
            'Ⓩ': 'Z',
            Ｚ: 'Z',
            Ź: 'Z',
            Ẑ: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            Ẓ: 'Z',
            Ẕ: 'Z',
            Ƶ: 'Z',
            Ȥ: 'Z',
            Ɀ: 'Z',
            Ⱬ: 'Z',
            Ꝣ: 'Z',
            'ⓐ': 'a',
            ａ: 'a',
            ẚ: 'a',
            à: 'a',
            á: 'a',
            â: 'a',
            ầ: 'a',
            ấ: 'a',
            ẫ: 'a',
            ẩ: 'a',
            ã: 'a',
            ā: 'a',
            ă: 'a',
            ằ: 'a',
            ắ: 'a',
            ẵ: 'a',
            ẳ: 'a',
            ȧ: 'a',
            ǡ: 'a',
            ä: 'a',
            ǟ: 'a',
            ả: 'a',
            å: 'a',
            ǻ: 'a',
            ǎ: 'a',
            ȁ: 'a',
            ȃ: 'a',
            ạ: 'a',
            ậ: 'a',
            ặ: 'a',
            ḁ: 'a',
            ą: 'a',
            ⱥ: 'a',
            ɐ: 'a',
            ꜳ: 'aa',
            æ: 'ae',
            ǽ: 'ae',
            ǣ: 'ae',
            ꜵ: 'ao',
            ꜷ: 'au',
            ꜹ: 'av',
            ꜻ: 'av',
            ꜽ: 'ay',
            'ⓑ': 'b',
            ｂ: 'b',
            ḃ: 'b',
            ḅ: 'b',
            ḇ: 'b',
            ƀ: 'b',
            ƃ: 'b',
            ɓ: 'b',
            'ⓒ': 'c',
            ｃ: 'c',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            ç: 'c',
            ḉ: 'c',
            ƈ: 'c',
            ȼ: 'c',
            ꜿ: 'c',
            ↄ: 'c',
            'ⓓ': 'd',
            ｄ: 'd',
            ḋ: 'd',
            ď: 'd',
            ḍ: 'd',
            ḑ: 'd',
            ḓ: 'd',
            ḏ: 'd',
            đ: 'd',
            ƌ: 'd',
            ɖ: 'd',
            ɗ: 'd',
            ꝺ: 'd',
            ǳ: 'dz',
            ǆ: 'dz',
            'ⓔ': 'e',
            ｅ: 'e',
            è: 'e',
            é: 'e',
            ê: 'e',
            ề: 'e',
            ế: 'e',
            ễ: 'e',
            ể: 'e',
            ẽ: 'e',
            ē: 'e',
            ḕ: 'e',
            ḗ: 'e',
            ĕ: 'e',
            ė: 'e',
            ë: 'e',
            ẻ: 'e',
            ě: 'e',
            ȅ: 'e',
            ȇ: 'e',
            ẹ: 'e',
            ệ: 'e',
            ȩ: 'e',
            ḝ: 'e',
            ę: 'e',
            ḙ: 'e',
            ḛ: 'e',
            ɇ: 'e',
            ɛ: 'e',
            ǝ: 'e',
            'ⓕ': 'f',
            ｆ: 'f',
            ḟ: 'f',
            ƒ: 'f',
            ꝼ: 'f',
            'ⓖ': 'g',
            ｇ: 'g',
            ǵ: 'g',
            ĝ: 'g',
            ḡ: 'g',
            ğ: 'g',
            ġ: 'g',
            ǧ: 'g',
            ģ: 'g',
            ǥ: 'g',
            ɠ: 'g',
            ꞡ: 'g',
            ᵹ: 'g',
            ꝿ: 'g',
            'ⓗ': 'h',
            ｈ: 'h',
            ĥ: 'h',
            ḣ: 'h',
            ḧ: 'h',
            ȟ: 'h',
            ḥ: 'h',
            ḩ: 'h',
            ḫ: 'h',
            ẖ: 'h',
            ħ: 'h',
            ⱨ: 'h',
            ⱶ: 'h',
            ɥ: 'h',
            ƕ: 'hv',
            'ⓘ': 'i',
            ｉ: 'i',
            ì: 'i',
            í: 'i',
            î: 'i',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            ï: 'i',
            ḯ: 'i',
            ỉ: 'i',
            ǐ: 'i',
            ȉ: 'i',
            ȋ: 'i',
            ị: 'i',
            į: 'i',
            ḭ: 'i',
            ɨ: 'i',
            ı: 'i',
            'ⓙ': 'j',
            ｊ: 'j',
            ĵ: 'j',
            ǰ: 'j',
            ɉ: 'j',
            'ⓚ': 'k',
            ｋ: 'k',
            ḱ: 'k',
            ǩ: 'k',
            ḳ: 'k',
            ķ: 'k',
            ḵ: 'k',
            ƙ: 'k',
            ⱪ: 'k',
            ꝁ: 'k',
            ꝃ: 'k',
            ꝅ: 'k',
            ꞣ: 'k',
            'ⓛ': 'l',
            ｌ: 'l',
            ŀ: 'l',
            ĺ: 'l',
            ľ: 'l',
            ḷ: 'l',
            ḹ: 'l',
            ļ: 'l',
            ḽ: 'l',
            ḻ: 'l',
            ſ: 'l',
            ł: 'l',
            ƚ: 'l',
            ɫ: 'l',
            ⱡ: 'l',
            ꝉ: 'l',
            ꞁ: 'l',
            ꝇ: 'l',
            ǉ: 'lj',
            'ⓜ': 'm',
            ｍ: 'm',
            ḿ: 'm',
            ṁ: 'm',
            ṃ: 'm',
            ɱ: 'm',
            ɯ: 'm',
            'ⓝ': 'n',
            ｎ: 'n',
            ǹ: 'n',
            ń: 'n',
            ñ: 'n',
            ṅ: 'n',
            ň: 'n',
            ṇ: 'n',
            ņ: 'n',
            ṋ: 'n',
            ṉ: 'n',
            ƞ: 'n',
            ɲ: 'n',
            ŉ: 'n',
            ꞑ: 'n',
            ꞥ: 'n',
            ǌ: 'nj',
            'ⓞ': 'o',
            ｏ: 'o',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            ồ: 'o',
            ố: 'o',
            ỗ: 'o',
            ổ: 'o',
            õ: 'o',
            ṍ: 'o',
            ȭ: 'o',
            ṏ: 'o',
            ō: 'o',
            ṑ: 'o',
            ṓ: 'o',
            ŏ: 'o',
            ȯ: 'o',
            ȱ: 'o',
            ö: 'o',
            ȫ: 'o',
            ỏ: 'o',
            ő: 'o',
            ǒ: 'o',
            ȍ: 'o',
            ȏ: 'o',
            ơ: 'o',
            ờ: 'o',
            ớ: 'o',
            ỡ: 'o',
            ở: 'o',
            ợ: 'o',
            ọ: 'o',
            ộ: 'o',
            ǫ: 'o',
            ǭ: 'o',
            ø: 'o',
            ǿ: 'o',
            ɔ: 'o',
            ꝋ: 'o',
            ꝍ: 'o',
            ɵ: 'o',
            ƣ: 'oi',
            ȣ: 'ou',
            ꝏ: 'oo',
            'ⓟ': 'p',
            ｐ: 'p',
            ṕ: 'p',
            ṗ: 'p',
            ƥ: 'p',
            ᵽ: 'p',
            ꝑ: 'p',
            ꝓ: 'p',
            ꝕ: 'p',
            'ⓠ': 'q',
            ｑ: 'q',
            ɋ: 'q',
            ꝗ: 'q',
            ꝙ: 'q',
            'ⓡ': 'r',
            ｒ: 'r',
            ŕ: 'r',
            ṙ: 'r',
            ř: 'r',
            ȑ: 'r',
            ȓ: 'r',
            ṛ: 'r',
            ṝ: 'r',
            ŗ: 'r',
            ṟ: 'r',
            ɍ: 'r',
            ɽ: 'r',
            ꝛ: 'r',
            ꞧ: 'r',
            ꞃ: 'r',
            'ⓢ': 's',
            ｓ: 's',
            ß: 's',
            ś: 's',
            ṥ: 's',
            ŝ: 's',
            ṡ: 's',
            š: 's',
            ṧ: 's',
            ṣ: 's',
            ṩ: 's',
            ș: 's',
            ş: 's',
            ȿ: 's',
            ꞩ: 's',
            ꞅ: 's',
            ẛ: 's',
            'ⓣ': 't',
            ｔ: 't',
            ṫ: 't',
            ẗ: 't',
            ť: 't',
            ṭ: 't',
            ț: 't',
            ţ: 't',
            ṱ: 't',
            ṯ: 't',
            ŧ: 't',
            ƭ: 't',
            ʈ: 't',
            ⱦ: 't',
            ꞇ: 't',
            ꜩ: 'tz',
            'ⓤ': 'u',
            ｕ: 'u',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ũ: 'u',
            ṹ: 'u',
            ū: 'u',
            ṻ: 'u',
            ŭ: 'u',
            ü: 'u',
            ǜ: 'u',
            ǘ: 'u',
            ǖ: 'u',
            ǚ: 'u',
            ủ: 'u',
            ů: 'u',
            ű: 'u',
            ǔ: 'u',
            ȕ: 'u',
            ȗ: 'u',
            ư: 'u',
            ừ: 'u',
            ứ: 'u',
            ữ: 'u',
            ử: 'u',
            ự: 'u',
            ụ: 'u',
            ṳ: 'u',
            ų: 'u',
            ṷ: 'u',
            ṵ: 'u',
            ʉ: 'u',
            'ⓥ': 'v',
            ｖ: 'v',
            ṽ: 'v',
            ṿ: 'v',
            ʋ: 'v',
            ꝟ: 'v',
            ʌ: 'v',
            ꝡ: 'vy',
            'ⓦ': 'w',
            ｗ: 'w',
            ẁ: 'w',
            ẃ: 'w',
            ŵ: 'w',
            ẇ: 'w',
            ẅ: 'w',
            ẘ: 'w',
            ẉ: 'w',
            ⱳ: 'w',
            'ⓧ': 'x',
            ｘ: 'x',
            ẋ: 'x',
            ẍ: 'x',
            'ⓨ': 'y',
            ｙ: 'y',
            ỳ: 'y',
            ý: 'y',
            ŷ: 'y',
            ỹ: 'y',
            ȳ: 'y',
            ẏ: 'y',
            ÿ: 'y',
            ỷ: 'y',
            ẙ: 'y',
            ỵ: 'y',
            ƴ: 'y',
            ɏ: 'y',
            ỿ: 'y',
            'ⓩ': 'z',
            ｚ: 'z',
            ź: 'z',
            ẑ: 'z',
            ż: 'z',
            ž: 'z',
            ẓ: 'z',
            ẕ: 'z',
            ƶ: 'z',
            ȥ: 'z',
            ɀ: 'z',
            ⱬ: 'z',
            ꝣ: 'z',
            Ά: 'Α',
            Έ: 'Ε',
            Ή: 'Η',
            Ί: 'Ι',
            Ϊ: 'Ι',
            Ό: 'Ο',
            Ύ: 'Υ',
            Ϋ: 'Υ',
            Ώ: 'Ω',
            ά: 'α',
            έ: 'ε',
            ή: 'η',
            ί: 'ι',
            ϊ: 'ι',
            ΐ: 'ι',
            ό: 'ο',
            ύ: 'υ',
            ϋ: 'υ',
            ΰ: 'υ',
            ω: 'ω',
            ς: 'σ'
          };
        }),
        b.define('select2/data/base', ['../utils'], function(a) {
          function b(a, c) {
            b.__super__.constructor.call(this);
          }
          return (
            a.Extend(b, a.Observable),
            (b.prototype.current = function(a) {
              throw new Error('The `current` method must be defined in child classes.');
            }),
            (b.prototype.query = function(a, b) {
              throw new Error('The `query` method must be defined in child classes.');
            }),
            (b.prototype.bind = function(a, b) {}),
            (b.prototype.destroy = function() {}),
            (b.prototype.generateResultId = function(b, c) {
              var d = b.id + '-result-';
              return (
                (d += a.generateChars(4)),
                null != c.id ? (d += '-' + c.id.toString()) : (d += '-' + a.generateChars(4)),
                d
              );
            }),
            b
          );
        }),
        b.define('select2/data/select', ['./base', '../utils', 'jquery'], function(a, b, c) {
          function d(a, b) {
            (this.$element = a), (this.options = b), d.__super__.constructor.call(this);
          }
          return (
            b.Extend(d, a),
            (d.prototype.current = function(a) {
              var b = [],
                d = this;
              this.$element.find(':selected').each(function() {
                var a = c(this),
                  e = d.item(a);
                b.push(e);
              }),
                a(b);
            }),
            (d.prototype.select = function(a) {
              var b = this;
              if (((a.selected = !0), c(a.element).is('option')))
                return (a.element.selected = !0), void this.$element.trigger('change');
              if (this.$element.prop('multiple'))
                this.current(function(d) {
                  var e = [];
                  (a = [a]), a.push.apply(a, d);
                  for (var f = 0; f < a.length; f++) {
                    var g = a[f].id;
                    -1 === c.inArray(g, e) && e.push(g);
                  }
                  b.$element.val(e), b.$element.trigger('change');
                });
              else {
                var d = a.id;
                this.$element.val(d), this.$element.trigger('change');
              }
            }),
            (d.prototype.unselect = function(a) {
              var b = this;
              if (this.$element.prop('multiple')) {
                if (((a.selected = !1), c(a.element).is('option')))
                  return (a.element.selected = !1), void this.$element.trigger('change');
                this.current(function(d) {
                  for (var e = [], f = 0; f < d.length; f++) {
                    var g = d[f].id;
                    g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                  }
                  b.$element.val(e), b.$element.trigger('change');
                });
              }
            }),
            (d.prototype.bind = function(a, b) {
              var c = this;
              (this.container = a),
                a.on('select', function(a) {
                  c.select(a.data);
                }),
                a.on('unselect', function(a) {
                  c.unselect(a.data);
                });
            }),
            (d.prototype.destroy = function() {
              this.$element.find('*').each(function() {
                b.RemoveData(this);
              });
            }),
            (d.prototype.query = function(a, b) {
              var d = [],
                e = this;
              this.$element.children().each(function() {
                var b = c(this);
                if (b.is('option') || b.is('optgroup')) {
                  var f = e.item(b),
                    g = e.matches(a, f);
                  null !== g && d.push(g);
                }
              }),
                b({ results: d });
            }),
            (d.prototype.addOptions = function(a) {
              b.appendMany(this.$element, a);
            }),
            (d.prototype.option = function(a) {
              var d;
              a.children
                ? ((d = document.createElement('optgroup')), (d.label = a.text))
                : ((d = document.createElement('option')),
                  void 0 !== d.textContent ? (d.textContent = a.text) : (d.innerText = a.text)),
                void 0 !== a.id && (d.value = a.id),
                a.disabled && (d.disabled = !0),
                a.selected && (d.selected = !0),
                a.title && (d.title = a.title);
              var e = c(d),
                f = this._normalizeItem(a);
              return (f.element = d), b.StoreData(d, 'data', f), e;
            }),
            (d.prototype.item = function(a) {
              var d = {};
              if (null != (d = b.GetData(a[0], 'data'))) return d;
              if (a.is('option'))
                d = {
                  id: a.val(),
                  text: a.text(),
                  disabled: a.prop('disabled'),
                  selected: a.prop('selected'),
                  title: a.prop('title')
                };
              else if (a.is('optgroup')) {
                d = { text: a.prop('label'), children: [], title: a.prop('title') };
                for (var e = a.children('option'), f = [], g = 0; g < e.length; g++) {
                  var h = c(e[g]),
                    i = this.item(h);
                  f.push(i);
                }
                d.children = f;
              }
              return (d = this._normalizeItem(d)), (d.element = a[0]), b.StoreData(a[0], 'data', d), d;
            }),
            (d.prototype._normalizeItem = function(a) {
              a !== Object(a) && (a = { id: a, text: a }), (a = c.extend({}, { text: '' }, a));
              var b = { selected: !1, disabled: !1 };
              return (
                null != a.id && (a.id = a.id.toString()),
                null != a.text && (a.text = a.text.toString()),
                null == a._resultId &&
                  a.id &&
                  null != this.container &&
                  (a._resultId = this.generateResultId(this.container, a)),
                c.extend({}, b, a)
              );
            }),
            (d.prototype.matches = function(a, b) {
              return this.options.get('matcher')(a, b);
            }),
            d
          );
        }),
        b.define('select2/data/array', ['./select', '../utils', 'jquery'], function(a, b, c) {
          function d(a, b) {
            var c = b.get('data') || [];
            d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
          }
          return (
            b.Extend(d, a),
            (d.prototype.select = function(a) {
              var b = this.$element.find('option').filter(function(b, c) {
                return c.value == a.id.toString();
              });
              0 === b.length && ((b = this.option(a)), this.addOptions(b)), d.__super__.select.call(this, a);
            }),
            (d.prototype.convertToOptions = function(a) {
              function d(a) {
                return function() {
                  return c(this).val() == a.id;
                };
              }
              for (
                var e = this,
                  f = this.$element.find('option'),
                  g = f
                    .map(function() {
                      return e.item(c(this)).id;
                    })
                    .get(),
                  h = [],
                  i = 0;
                i < a.length;
                i++
              ) {
                var j = this._normalizeItem(a[i]);
                if (c.inArray(j.id, g) >= 0) {
                  var k = f.filter(d(j)),
                    l = this.item(k),
                    m = c.extend(!0, {}, j, l),
                    n = this.option(m);
                  k.replaceWith(n);
                } else {
                  var o = this.option(j);
                  if (j.children) {
                    var p = this.convertToOptions(j.children);
                    b.appendMany(o, p);
                  }
                  h.push(o);
                }
              }
              return h;
            }),
            d
          );
        }),
        b.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function(a, b, c) {
          function d(a, b) {
            (this.ajaxOptions = this._applyDefaults(b.get('ajax'))),
              null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
              d.__super__.constructor.call(this, a, b);
          }
          return (
            b.Extend(d, a),
            (d.prototype._applyDefaults = function(a) {
              var b = {
                data: function(a) {
                  return c.extend({}, a, { q: a.term });
                },
                transport: function(a, b, d) {
                  var e = c.ajax(a);
                  return e.then(b), e.fail(d), e;
                }
              };
              return c.extend({}, b, a, !0);
            }),
            (d.prototype.processResults = function(a) {
              return a;
            }),
            (d.prototype.query = function(a, b) {
              function d() {
                var d = f.transport(
                  f,
                  function(d) {
                    var f = e.processResults(d, a);
                    e.options.get('debug') &&
                      window.console &&
                      console.error &&
                      ((f && f.results && c.isArray(f.results)) ||
                        console.error(
                          'Select2: The AJAX results did not return an array in the `results` key of the response.'
                        )),
                      b(f);
                  },
                  function() {
                    ('status' in d && (0 === d.status || '0' === d.status)) ||
                      e.trigger('results:message', { message: 'errorLoading' });
                  }
                );
                e._request = d;
              }
              var e = this;
              null != this._request &&
                (c.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
              var f = c.extend({ type: 'GET' }, this.ajaxOptions);
              'function' == typeof f.url && (f.url = f.url.call(this.$element, a)),
                'function' == typeof f.data && (f.data = f.data.call(this.$element, a)),
                this.ajaxOptions.delay && null != a.term
                  ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)))
                  : d();
            }),
            d
          );
        }),
        b.define('select2/data/tags', ['jquery'], function(a) {
          function b(b, c, d) {
            var e = d.get('tags'),
              f = d.get('createTag');
            void 0 !== f && (this.createTag = f);
            var g = d.get('insertTag');
            if ((void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)))
              for (var h = 0; h < e.length; h++) {
                var i = e[h],
                  j = this._normalizeItem(i),
                  k = this.option(j);
                this.$element.append(k);
              }
          }
          return (
            (b.prototype.query = function(a, b, c) {
              function d(a, f) {
                for (var g = a.results, h = 0; h < g.length; h++) {
                  var i = g[h],
                    j = null != i.children && !d({ results: i.children }, !0);
                  if ((i.text || '').toUpperCase() === (b.term || '').toUpperCase() || j)
                    return !f && ((a.data = g), void c(a));
                }
                if (f) return !0;
                var k = e.createTag(b);
                if (null != k) {
                  var l = e.option(k);
                  l.attr('data-select2-tag', !0), e.addOptions([l]), e.insertTag(g, k);
                }
                (a.results = g), c(a);
              }
              var e = this;
              if ((this._removeOldTags(), null == b.term || null != b.page)) return void a.call(this, b, c);
              a.call(this, b, d);
            }),
            (b.prototype.createTag = function(b, c) {
              var d = a.trim(c.term);
              return '' === d ? null : { id: d, text: d };
            }),
            (b.prototype.insertTag = function(a, b, c) {
              b.unshift(c);
            }),
            (b.prototype._removeOldTags = function(b) {
              this._lastTag;
              this.$element.find('option[data-select2-tag]').each(function() {
                this.selected || a(this).remove();
              });
            }),
            b
          );
        }),
        b.define('select2/data/tokenizer', ['jquery'], function(a) {
          function b(a, b, c) {
            var d = c.get('tokenizer');
            void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
          }
          return (
            (b.prototype.bind = function(a, b, c) {
              a.call(this, b, c),
                (this.$search = b.dropdown.$search || b.selection.$search || c.find('.select2-search__field'));
            }),
            (b.prototype.query = function(b, c, d) {
              function e(b) {
                var c = g._normalizeItem(b);
                if (
                  !g.$element.find('option').filter(function() {
                    return a(this).val() === c.id;
                  }).length
                ) {
                  var d = g.option(c);
                  d.attr('data-select2-tag', !0), g._removeOldTags(), g.addOptions([d]);
                }
                f(c);
              }
              function f(a) {
                g.trigger('select', { data: a });
              }
              var g = this;
              c.term = c.term || '';
              var h = this.tokenizer(c, this.options, e);
              h.term !== c.term &&
                (this.$search.length && (this.$search.val(h.term), this.$search.focus()), (c.term = h.term)),
                b.call(this, c, d);
            }),
            (b.prototype.tokenizer = function(b, c, d, e) {
              for (
                var f = d.get('tokenSeparators') || [],
                  g = c.term,
                  h = 0,
                  i =
                    this.createTag ||
                    function(a) {
                      return { id: a.term, text: a.term };
                    };
                h < g.length;

              ) {
                var j = g[h];
                if (-1 !== a.inArray(j, f)) {
                  var k = g.substr(0, h),
                    l = a.extend({}, c, { term: k }),
                    m = i(l);
                  null != m ? (e(m), (g = g.substr(h + 1) || ''), (h = 0)) : h++;
                } else h++;
              }
              return { term: g };
            }),
            b
          );
        }),
        b.define('select2/data/minimumInputLength', [], function() {
          function a(a, b, c) {
            (this.minimumInputLength = c.get('minimumInputLength')), a.call(this, b, c);
          }
          return (
            (a.prototype.query = function(a, b, c) {
              if (((b.term = b.term || ''), b.term.length < this.minimumInputLength))
                return void this.trigger('results:message', {
                  message: 'inputTooShort',
                  args: { minimum: this.minimumInputLength, input: b.term, params: b }
                });
              a.call(this, b, c);
            }),
            a
          );
        }),
        b.define('select2/data/maximumInputLength', [], function() {
          function a(a, b, c) {
            (this.maximumInputLength = c.get('maximumInputLength')), a.call(this, b, c);
          }
          return (
            (a.prototype.query = function(a, b, c) {
              if (((b.term = b.term || ''), this.maximumInputLength > 0 && b.term.length > this.maximumInputLength))
                return void this.trigger('results:message', {
                  message: 'inputTooLong',
                  args: { maximum: this.maximumInputLength, input: b.term, params: b }
                });
              a.call(this, b, c);
            }),
            a
          );
        }),
        b.define('select2/data/maximumSelectionLength', [], function() {
          function a(a, b, c) {
            (this.maximumSelectionLength = c.get('maximumSelectionLength')), a.call(this, b, c);
          }
          return (
            (a.prototype.query = function(a, b, c) {
              var d = this;
              this.current(function(e) {
                var f = null != e ? e.length : 0;
                if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength)
                  return void d.trigger('results:message', {
                    message: 'maximumSelected',
                    args: { maximum: d.maximumSelectionLength }
                  });
                a.call(d, b, c);
              });
            }),
            a
          );
        }),
        b.define('select2/dropdown', ['jquery', './utils'], function(a, b) {
          function c(a, b) {
            (this.$element = a), (this.options = b), c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function() {
              var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
              return b.attr('dir', this.options.get('dir')), (this.$dropdown = b), b;
            }),
            (c.prototype.bind = function() {}),
            (c.prototype.position = function(a, b) {}),
            (c.prototype.destroy = function() {
              this.$dropdown.remove();
            }),
            c
          );
        }),
        b.define('select2/dropdown/search', ['jquery', '../utils'], function(a, b) {
          function c() {}
          return (
            (c.prototype.render = function(b) {
              var c = b.call(this),
                d = a(
                  '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'
                );
              return (this.$searchContainer = d), (this.$search = d.find('input')), c.prepend(d), c;
            }),
            (c.prototype.bind = function(b, c, d) {
              var e = this;
              b.call(this, c, d),
                this.$search.on('keydown', function(a) {
                  e.trigger('keypress', a), (e._keyUpPrevented = a.isDefaultPrevented());
                }),
                this.$search.on('input', function(b) {
                  a(this).off('keyup');
                }),
                this.$search.on('keyup input', function(a) {
                  e.handleSearch(a);
                }),
                c.on('open', function() {
                  e.$search.attr('tabindex', 0),
                    e.$search.focus(),
                    window.setTimeout(function() {
                      e.$search.focus();
                    }, 0);
                }),
                c.on('close', function() {
                  e.$search.attr('tabindex', -1), e.$search.val(''), e.$search.blur();
                }),
                c.on('focus', function() {
                  c.isOpen() || e.$search.focus();
                }),
                c.on('results:all', function(a) {
                  if (null == a.query.term || '' === a.query.term) {
                    e.showSearch(a)
                      ? e.$searchContainer.removeClass('select2-search--hide')
                      : e.$searchContainer.addClass('select2-search--hide');
                  }
                });
            }),
            (c.prototype.handleSearch = function(a) {
              if (!this._keyUpPrevented) {
                var b = this.$search.val();
                this.trigger('query', { term: b });
              }
              this._keyUpPrevented = !1;
            }),
            (c.prototype.showSearch = function(a, b) {
              return !0;
            }),
            c
          );
        }),
        b.define('select2/dropdown/hidePlaceholder', [], function() {
          function a(a, b, c, d) {
            (this.placeholder = this.normalizePlaceholder(c.get('placeholder'))), a.call(this, b, c, d);
          }
          return (
            (a.prototype.append = function(a, b) {
              (b.results = this.removePlaceholder(b.results)), a.call(this, b);
            }),
            (a.prototype.normalizePlaceholder = function(a, b) {
              return 'string' == typeof b && (b = { id: '', text: b }), b;
            }),
            (a.prototype.removePlaceholder = function(a, b) {
              for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                this.placeholder.id === e.id && c.splice(d, 1);
              }
              return c;
            }),
            a
          );
        }),
        b.define('select2/dropdown/infiniteScroll', ['jquery'], function(a) {
          function b(a, b, c, d) {
            (this.lastParams = {}),
              a.call(this, b, c, d),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (b.prototype.append = function(a, b) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                a.call(this, b),
                this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
            }),
            (b.prototype.bind = function(b, c, d) {
              var e = this;
              b.call(this, c, d),
                c.on('query', function(a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                c.on('query:append', function(a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                this.$results.on('scroll', function() {
                  var b = a.contains(document.documentElement, e.$loadingMore[0]);
                  if (!e.loading && b) {
                    e.$results.offset().top + e.$results.outerHeight(!1) + 50 >=
                      e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore();
                  }
                });
            }),
            (b.prototype.loadMore = function() {
              this.loading = !0;
              var b = a.extend({}, { page: 1 }, this.lastParams);
              b.page++, this.trigger('query:append', b);
            }),
            (b.prototype.showLoadingMore = function(a, b) {
              return b.pagination && b.pagination.more;
            }),
            (b.prototype.createLoadingMore = function() {
              var b = a(
                  '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                ),
                c = this.options.get('translations').get('loadingMore');
              return b.html(c(this.lastParams)), b;
            }),
            b
          );
        }),
        b.define('select2/dropdown/attachBody', ['jquery', '../utils'], function(a, b) {
          function c(b, c, d) {
            (this.$dropdownParent = d.get('dropdownParent') || a(document.body)), b.call(this, c, d);
          }
          return (
            (c.prototype.bind = function(a, b, c) {
              var d = this,
                e = !1;
              a.call(this, b, c),
                b.on('open', function() {
                  d._showDropdown(),
                    d._attachPositioningHandler(b),
                    e ||
                      ((e = !0),
                      b.on('results:all', function() {
                        d._positionDropdown(), d._resizeDropdown();
                      }),
                      b.on('results:append', function() {
                        d._positionDropdown(), d._resizeDropdown();
                      }));
                }),
                b.on('close', function() {
                  d._hideDropdown(), d._detachPositioningHandler(b);
                }),
                this.$dropdownContainer.on('mousedown', function(a) {
                  a.stopPropagation();
                });
            }),
            (c.prototype.destroy = function(a) {
              a.call(this), this.$dropdownContainer.remove();
            }),
            (c.prototype.position = function(a, b, c) {
              b.attr('class', c.attr('class')),
                b.removeClass('select2'),
                b.addClass('select2-container--open'),
                b.css({ position: 'absolute', top: -999999 }),
                (this.$container = c);
            }),
            (c.prototype.render = function(b) {
              var c = a('<span></span>'),
                d = b.call(this);
              return c.append(d), (this.$dropdownContainer = c), c;
            }),
            (c.prototype._hideDropdown = function(a) {
              this.$dropdownContainer.detach();
            }),
            (c.prototype._attachPositioningHandler = function(c, d) {
              var e = this,
                f = 'scroll.select2.' + d.id,
                g = 'resize.select2.' + d.id,
                h = 'orientationchange.select2.' + d.id,
                i = this.$container.parents().filter(b.hasScroll);
              i.each(function() {
                b.StoreData(this, 'select2-scroll-position', { x: a(this).scrollLeft(), y: a(this).scrollTop() });
              }),
                i.on(f, function(c) {
                  var d = b.GetData(this, 'select2-scroll-position');
                  a(this).scrollTop(d.y);
                }),
                a(window).on(f + ' ' + g + ' ' + h, function(a) {
                  e._positionDropdown(), e._resizeDropdown();
                });
            }),
            (c.prototype._detachPositioningHandler = function(c, d) {
              var e = 'scroll.select2.' + d.id,
                f = 'resize.select2.' + d.id,
                g = 'orientationchange.select2.' + d.id;
              this.$container
                .parents()
                .filter(b.hasScroll)
                .off(e),
                a(window).off(e + ' ' + f + ' ' + g);
            }),
            (c.prototype._positionDropdown = function() {
              var b = a(window),
                c = this.$dropdown.hasClass('select2-dropdown--above'),
                d = this.$dropdown.hasClass('select2-dropdown--below'),
                e = null,
                f = this.$container.offset();
              f.bottom = f.top + this.$container.outerHeight(!1);
              var g = { height: this.$container.outerHeight(!1) };
              (g.top = f.top), (g.bottom = f.top + g.height);
              var h = { height: this.$dropdown.outerHeight(!1) },
                i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
                j = i.top < f.top - h.height,
                k = i.bottom > f.bottom + h.height,
                l = { left: f.left, top: g.bottom },
                m = this.$dropdownParent;
              'static' === m.css('position') && (m = m.offsetParent());
              var n = m.offset();
              (l.top -= n.top),
                (l.left -= n.left),
                c || d || (e = 'below'),
                k || !j || c ? !j && k && c && (e = 'below') : (e = 'above'),
                ('above' == e || (c && 'below' !== e)) && (l.top = g.top - n.top - h.height),
                null != e &&
                  (this.$dropdown
                    .removeClass('select2-dropdown--below select2-dropdown--above')
                    .addClass('select2-dropdown--' + e),
                  this.$container
                    .removeClass('select2-container--below select2-container--above')
                    .addClass('select2-container--' + e)),
                this.$dropdownContainer.css(l);
            }),
            (c.prototype._resizeDropdown = function() {
              var a = { width: this.$container.outerWidth(!1) + 'px' };
              this.options.get('dropdownAutoWidth') &&
                ((a.minWidth = a.width), (a.position = 'relative'), (a.width = 'auto')),
                this.$dropdown.css(a);
            }),
            (c.prototype._showDropdown = function(a) {
              this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
            }),
            c
          );
        }),
        b.define('select2/dropdown/minimumResultsForSearch', [], function() {
          function a(b) {
            for (var c = 0, d = 0; d < b.length; d++) {
              var e = b[d];
              e.children ? (c += a(e.children)) : c++;
            }
            return c;
          }
          function b(a, b, c, d) {
            (this.minimumResultsForSearch = c.get('minimumResultsForSearch')),
              this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
              a.call(this, b, c, d);
          }
          return (
            (b.prototype.showSearch = function(b, c) {
              return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c);
            }),
            b
          );
        }),
        b.define('select2/dropdown/selectOnClose', ['../utils'], function(a) {
          function b() {}
          return (
            (b.prototype.bind = function(a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on('close', function(a) {
                  d._handleSelectOnClose(a);
                });
            }),
            (b.prototype._handleSelectOnClose = function(b, c) {
              if (c && null != c.originalSelect2Event) {
                var d = c.originalSelect2Event;
                if ('select' === d._type || 'unselect' === d._type) return;
              }
              var e = this.getHighlightedResults();
              if (!(e.length < 1)) {
                var f = a.GetData(e[0], 'data');
                (null != f.element && f.element.selected) ||
                  (null == f.element && f.selected) ||
                  this.trigger('select', { data: f });
              }
            }),
            b
          );
        }),
        b.define('select2/dropdown/closeOnSelect', [], function() {
          function a() {}
          return (
            (a.prototype.bind = function(a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on('select', function(a) {
                  d._selectTriggered(a);
                }),
                b.on('unselect', function(a) {
                  d._selectTriggered(a);
                });
            }),
            (a.prototype._selectTriggered = function(a, b) {
              var c = b.originalEvent;
              (c && c.ctrlKey) || this.trigger('close', { originalEvent: c, originalSelect2Event: b });
            }),
            a
          );
        }),
        b.define('select2/i18n/en', [], function() {
          return {
            errorLoading: function() {
              return 'The results could not be loaded.';
            },
            inputTooLong: function(a) {
              var b = a.input.length - a.maximum,
                c = 'Please delete ' + b + ' character';
              return 1 != b && (c += 's'), c;
            },
            inputTooShort: function(a) {
              return 'Please enter ' + (a.minimum - a.input.length) + ' or more characters';
            },
            loadingMore: function() {
              return 'Loading more results…';
            },
            maximumSelected: function(a) {
              var b = 'You can only select ' + a.maximum + ' item';
              return 1 != a.maximum && (b += 's'), b;
            },
            noResults: function() {
              return 'No results found';
            },
            searching: function() {
              return 'Searching…';
            }
          };
        }),
        b.define(
          'select2/defaults',
          [
            'jquery',
            'require',
            './results',
            './selection/single',
            './selection/multiple',
            './selection/placeholder',
            './selection/allowClear',
            './selection/search',
            './selection/eventRelay',
            './utils',
            './translation',
            './diacritics',
            './data/select',
            './data/array',
            './data/ajax',
            './data/tags',
            './data/tokenizer',
            './data/minimumInputLength',
            './data/maximumInputLength',
            './data/maximumSelectionLength',
            './dropdown',
            './dropdown/search',
            './dropdown/hidePlaceholder',
            './dropdown/infiniteScroll',
            './dropdown/attachBody',
            './dropdown/minimumResultsForSearch',
            './dropdown/selectOnClose',
            './dropdown/closeOnSelect',
            './i18n/en'
          ],
          function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
              this.reset();
            }
            return (
              (D.prototype.apply = function(l) {
                if (((l = a.extend(!0, {}, this.defaults, l)), null == l.dataAdapter)) {
                  if (
                    (null != l.ajax ? (l.dataAdapter = o) : null != l.data ? (l.dataAdapter = n) : (l.dataAdapter = m),
                    l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)),
                    l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)),
                    l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)),
                    l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)),
                    (null == l.tokenSeparators && null == l.tokenizer) ||
                      (l.dataAdapter = j.Decorate(l.dataAdapter, q)),
                    null != l.query)
                  ) {
                    var C = b(l.amdBase + 'compat/query');
                    l.dataAdapter = j.Decorate(l.dataAdapter, C);
                  }
                  if (null != l.initSelection) {
                    var D = b(l.amdBase + 'compat/initSelection');
                    l.dataAdapter = j.Decorate(l.dataAdapter, D);
                  }
                }
                if (
                  (null == l.resultsAdapter &&
                    ((l.resultsAdapter = c),
                    null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)),
                    null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)),
                    l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))),
                  null == l.dropdownAdapter)
                ) {
                  if (l.multiple) l.dropdownAdapter = u;
                  else {
                    var E = j.Decorate(u, v);
                    l.dropdownAdapter = E;
                  }
                  if (
                    (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)),
                    l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)),
                    null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass)
                  ) {
                    var F = b(l.amdBase + 'compat/dropdownCss');
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                  }
                  l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
                }
                if (null == l.selectionAdapter) {
                  if (
                    (l.multiple ? (l.selectionAdapter = e) : (l.selectionAdapter = d),
                    null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)),
                    l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)),
                    l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)),
                    null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass)
                  ) {
                    var G = b(l.amdBase + 'compat/containerCss');
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                  }
                  l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
                }
                if ('string' == typeof l.language)
                  if (l.language.indexOf('-') > 0) {
                    var H = l.language.split('-'),
                      I = H[0];
                    l.language = [l.language, I];
                  } else l.language = [l.language];
                if (a.isArray(l.language)) {
                  var J = new k();
                  l.language.push('en');
                  for (var K = l.language, L = 0; L < K.length; L++) {
                    var M = K[L],
                      N = {};
                    try {
                      N = k.loadPath(M);
                    } catch (a) {
                      try {
                        (M = this.defaults.amdLanguageBase + M), (N = k.loadPath(M));
                      } catch (a) {
                        l.debug &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              M +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                        continue;
                      }
                    }
                    J.extend(N);
                  }
                  l.translations = J;
                } else {
                  var O = k.loadPath(this.defaults.amdLanguageBase + 'en'),
                    P = new k(l.language);
                  P.extend(O), (l.translations = P);
                }
                return l;
              }),
              (D.prototype.reset = function() {
                function b(a) {
                  function b(a) {
                    return l[a] || a;
                  }
                  return a.replace(/[^\u0000-\u007E]/g, b);
                }
                function c(d, e) {
                  if ('' === a.trim(d.term)) return e;
                  if (e.children && e.children.length > 0) {
                    for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                      null == c(d, e.children[g]) && f.children.splice(g, 1);
                    }
                    return f.children.length > 0 ? f : c(d, f);
                  }
                  var h = b(e.text).toUpperCase(),
                    i = b(d.term).toUpperCase();
                  return h.indexOf(i) > -1 ? e : null;
                }
                this.defaults = {
                  amdBase: './',
                  amdLanguageBase: './i18n/',
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: j.escapeMarkup,
                  language: C,
                  matcher: c,
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  sorter: function(a) {
                    return a;
                  },
                  templateResult: function(a) {
                    return a.text;
                  },
                  templateSelection: function(a) {
                    return a.text;
                  },
                  theme: 'default',
                  width: 'resolve'
                };
              }),
              (D.prototype.set = function(b, c) {
                var d = a.camelCase(b),
                  e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(!0, this.defaults, f);
              }),
              new D()
            );
          }
        ),
        b.define('select2/options', ['require', 'jquery', './defaults', './utils'], function(a, b, c, d) {
          function e(b, e) {
            if (
              ((this.options = b),
              null != e && this.fromElement(e),
              (this.options = c.apply(this.options)),
              e && e.is('input'))
            ) {
              var f = a(this.get('amdBase') + 'compat/inputData');
              this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
            }
          }
          return (
            (e.prototype.fromElement = function(a) {
              var c = ['select2'];
              null == this.options.multiple && (this.options.multiple = a.prop('multiple')),
                null == this.options.disabled && (this.options.disabled = a.prop('disabled')),
                null == this.options.language &&
                  (a.prop('lang')
                    ? (this.options.language = a.prop('lang').toLowerCase())
                    : a.closest('[lang]').prop('lang') && (this.options.language = a.closest('[lang]').prop('lang'))),
                null == this.options.dir &&
                  (a.prop('dir')
                    ? (this.options.dir = a.prop('dir'))
                    : a.closest('[dir]').prop('dir')
                    ? (this.options.dir = a.closest('[dir]').prop('dir'))
                    : (this.options.dir = 'ltr')),
                a.prop('disabled', this.options.disabled),
                a.prop('multiple', this.options.multiple),
                d.GetData(a[0], 'select2Tags') &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                    ),
                  d.StoreData(a[0], 'data', d.GetData(a[0], 'select2Tags')),
                  d.StoreData(a[0], 'tags', !0)),
                d.GetData(a[0], 'ajaxUrl') &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.'
                    ),
                  a.attr('ajax--url', d.GetData(a[0], 'ajaxUrl')),
                  d.StoreData(a[0], 'ajax-Url', d.GetData(a[0], 'ajaxUrl')));
              var e = {};
              e =
                b.fn.jquery && '1.' == b.fn.jquery.substr(0, 2) && a[0].dataset
                  ? b.extend(!0, {}, a[0].dataset, d.GetData(a[0]))
                  : d.GetData(a[0]);
              var f = b.extend(!0, {}, e);
              f = d._convertData(f);
              for (var g in f)
                b.inArray(g, c) > -1 ||
                  (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : (this.options[g] = f[g]));
              return this;
            }),
            (e.prototype.get = function(a) {
              return this.options[a];
            }),
            (e.prototype.set = function(a, b) {
              this.options[a] = b;
            }),
            e
          );
        }),
        b.define('select2/core', ['jquery', './options', './utils', './keys'], function(a, b, c, d) {
          var e = function(a, d) {
            null != c.GetData(a[0], 'select2') && c.GetData(a[0], 'select2').destroy(),
              (this.$element = a),
              (this.id = this._generateId(a)),
              (d = d || {}),
              (this.options = new b(d, a)),
              e.__super__.constructor.call(this);
            var f = a.attr('tabindex') || 0;
            c.StoreData(a[0], 'old-tabindex', f), a.attr('tabindex', '-1');
            var g = this.options.get('dataAdapter');
            this.dataAdapter = new g(a, this.options);
            var h = this.render();
            this._placeContainer(h);
            var i = this.options.get('selectionAdapter');
            (this.selection = new i(a, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, h);
            var j = this.options.get('dropdownAdapter');
            (this.dropdown = new j(a, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, h);
            var k = this.options.get('resultsAdapter');
            (this.results = new k(a, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown);
            var l = this;
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function(a) {
                l.trigger('selection:update', { data: a });
              }),
              a.addClass('select2-hidden-accessible'),
              a.attr('aria-hidden', 'true'),
              this._syncAttributes(),
              c.StoreData(a[0], 'select2', this),
              a.data('select2', this);
          };
          return (
            c.Extend(e, c.Observable),
            (e.prototype._generateId = function(a) {
              var b = '';
              return (
                (b =
                  null != a.attr('id')
                    ? a.attr('id')
                    : null != a.attr('name')
                    ? a.attr('name') + '-' + c.generateChars(2)
                    : c.generateChars(4)),
                (b = b.replace(/(:|\.|\[|\]|,)/g, '')),
                (b = 'select2-' + b)
              );
            }),
            (e.prototype._placeContainer = function(a) {
              a.insertAfter(this.$element);
              var b = this._resolveWidth(this.$element, this.options.get('width'));
              null != b && a.css('width', b);
            }),
            (e.prototype._resolveWidth = function(a, b) {
              var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ('resolve' == b) {
                var d = this._resolveWidth(a, 'style');
                return null != d ? d : this._resolveWidth(a, 'element');
              }
              if ('element' == b) {
                var e = a.outerWidth(!1);
                return e <= 0 ? 'auto' : e + 'px';
              }
              if ('style' == b) {
                var f = a.attr('style');
                if ('string' != typeof f) return null;
                for (var g = f.split(';'), h = 0, i = g.length; h < i; h += 1) {
                  var j = g[h].replace(/\s/g, ''),
                    k = j.match(c);
                  if (null !== k && k.length >= 1) return k[1];
                }
                return null;
              }
              return b;
            }),
            (e.prototype._bindAdapters = function() {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (e.prototype._registerDomEvents = function() {
              var b = this;
              this.$element.on('change.select2', function() {
                b.dataAdapter.current(function(a) {
                  b.trigger('selection:update', { data: a });
                });
              }),
                this.$element.on('focus.select2', function(a) {
                  b.trigger('focus', a);
                }),
                (this._syncA = c.bind(this._syncAttributes, this)),
                (this._syncS = c.bind(this._syncSubtree, this)),
                this.$element[0].attachEvent && this.$element[0].attachEvent('onpropertychange', this._syncA);
              var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
              null != d
                ? ((this._observer = new d(function(c) {
                    a.each(c, b._syncA), a.each(c, b._syncS);
                  })),
                  this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }))
                : this.$element[0].addEventListener &&
                  (this.$element[0].addEventListener('DOMAttrModified', b._syncA, !1),
                  this.$element[0].addEventListener('DOMNodeInserted', b._syncS, !1),
                  this.$element[0].addEventListener('DOMNodeRemoved', b._syncS, !1));
            }),
            (e.prototype._registerDataEvents = function() {
              var a = this;
              this.dataAdapter.on('*', function(b, c) {
                a.trigger(b, c);
              });
            }),
            (e.prototype._registerSelectionEvents = function() {
              var b = this,
                c = ['toggle', 'focus'];
              this.selection.on('toggle', function() {
                b.toggleDropdown();
              }),
                this.selection.on('focus', function(a) {
                  b.focus(a);
                }),
                this.selection.on('*', function(d, e) {
                  -1 === a.inArray(d, c) && b.trigger(d, e);
                });
            }),
            (e.prototype._registerDropdownEvents = function() {
              var a = this;
              this.dropdown.on('*', function(b, c) {
                a.trigger(b, c);
              });
            }),
            (e.prototype._registerResultsEvents = function() {
              var a = this;
              this.results.on('*', function(b, c) {
                a.trigger(b, c);
              });
            }),
            (e.prototype._registerEvents = function() {
              var a = this;
              this.on('open', function() {
                a.$container.addClass('select2-container--open');
              }),
                this.on('close', function() {
                  a.$container.removeClass('select2-container--open');
                }),
                this.on('enable', function() {
                  a.$container.removeClass('select2-container--disabled');
                }),
                this.on('disable', function() {
                  a.$container.addClass('select2-container--disabled');
                }),
                this.on('blur', function() {
                  a.$container.removeClass('select2-container--focus');
                }),
                this.on('query', function(b) {
                  a.isOpen() || a.trigger('open', {}),
                    this.dataAdapter.query(b, function(c) {
                      a.trigger('results:all', { data: c, query: b });
                    });
                }),
                this.on('query:append', function(b) {
                  this.dataAdapter.query(b, function(c) {
                    a.trigger('results:append', { data: c, query: b });
                  });
                }),
                this.on('keypress', function(b) {
                  var c = b.which;
                  a.isOpen()
                    ? c === d.ESC || c === d.TAB || (c === d.UP && b.altKey)
                      ? (a.close(), b.preventDefault())
                      : c === d.ENTER
                      ? (a.trigger('results:select', {}), b.preventDefault())
                      : c === d.SPACE && b.ctrlKey
                      ? (a.trigger('results:toggle', {}), b.preventDefault())
                      : c === d.UP
                      ? (a.trigger('results:previous', {}), b.preventDefault())
                      : c === d.DOWN && (a.trigger('results:next', {}), b.preventDefault())
                    : (c === d.ENTER || c === d.SPACE || (c === d.DOWN && b.altKey)) && (a.open(), b.preventDefault());
                });
            }),
            (e.prototype._syncAttributes = function() {
              this.options.set('disabled', this.$element.prop('disabled')),
                this.options.get('disabled')
                  ? (this.isOpen() && this.close(), this.trigger('disable', {}))
                  : this.trigger('enable', {});
            }),
            (e.prototype._syncSubtree = function(a, b) {
              var c = !1,
                d = this;
              if (!a || !a.target || 'OPTION' === a.target.nodeName || 'OPTGROUP' === a.target.nodeName) {
                if (b)
                  if (b.addedNodes && b.addedNodes.length > 0)
                    for (var e = 0; e < b.addedNodes.length; e++) {
                      var f = b.addedNodes[e];
                      f.selected && (c = !0);
                    }
                  else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                else c = !0;
                c &&
                  this.dataAdapter.current(function(a) {
                    d.trigger('selection:update', { data: a });
                  });
              }
            }),
            (e.prototype.trigger = function(a, b) {
              var c = e.__super__.trigger,
                d = {
                  open: 'opening',
                  close: 'closing',
                  select: 'selecting',
                  unselect: 'unselecting',
                  clear: 'clearing'
                };
              if ((void 0 === b && (b = {}), a in d)) {
                var f = d[a],
                  g = { prevented: !1, name: a, args: b };
                if ((c.call(this, f, g), g.prevented)) return void (b.prevented = !0);
              }
              c.call(this, a, b);
            }),
            (e.prototype.toggleDropdown = function() {
              this.options.get('disabled') || (this.isOpen() ? this.close() : this.open());
            }),
            (e.prototype.open = function() {
              this.isOpen() || this.trigger('query', {});
            }),
            (e.prototype.close = function() {
              this.isOpen() && this.trigger('close', {});
            }),
            (e.prototype.isOpen = function() {
              return this.$container.hasClass('select2-container--open');
            }),
            (e.prototype.hasFocus = function() {
              return this.$container.hasClass('select2-container--focus');
            }),
            (e.prototype.focus = function(a) {
              this.hasFocus() || (this.$container.addClass('select2-container--focus'), this.trigger('focus', {}));
            }),
            (e.prototype.enable = function(a) {
              this.options.get('debug') &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                ),
                (null != a && 0 !== a.length) || (a = [!0]);
              var b = !a[0];
              this.$element.prop('disabled', b);
            }),
            (e.prototype.data = function() {
              this.options.get('debug') &&
                arguments.length > 0 &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                );
              var a = [];
              return (
                this.dataAdapter.current(function(b) {
                  a = b;
                }),
                a
              );
            }),
            (e.prototype.val = function(b) {
              if (
                (this.options.get('debug') &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                  ),
                null == b || 0 === b.length)
              )
                return this.$element.val();
              var c = b[0];
              a.isArray(c) &&
                (c = a.map(c, function(a) {
                  return a.toString();
                })),
                this.$element.val(c).trigger('change');
            }),
            (e.prototype.destroy = function() {
              this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent('onpropertychange', this._syncA),
                null != this._observer
                  ? (this._observer.disconnect(), (this._observer = null))
                  : this.$element[0].removeEventListener &&
                    (this.$element[0].removeEventListener('DOMAttrModified', this._syncA, !1),
                    this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, !1),
                    this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, !1)),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off('.select2'),
                this.$element.attr('tabindex', c.GetData(this.$element[0], 'old-tabindex')),
                this.$element.removeClass('select2-hidden-accessible'),
                this.$element.attr('aria-hidden', 'false'),
                c.RemoveData(this.$element[0]),
                this.$element.removeData('select2'),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (e.prototype.render = function() {
              var b = a(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                b.attr('dir', this.options.get('dir')),
                (this.$container = b),
                this.$container.addClass('select2-container--' + this.options.get('theme')),
                c.StoreData(b[0], 'element', this.$element),
                b
              );
            }),
            e
          );
        }),
        b.define('jquery-mousewheel', ['jquery'], function(a) {
          return a;
        }),
        b.define(
          'jquery.select2',
          ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils'],
          function(a, b, c, d, e) {
            if (null == a.fn.select2) {
              var f = ['open', 'close', 'destroy'];
              a.fn.select2 = function(b) {
                if ('object' == typeof (b = b || {}))
                  return (
                    this.each(function() {
                      var d = a.extend(!0, {}, b);
                      new c(a(this), d);
                    }),
                    this
                  );
                if ('string' == typeof b) {
                  var d,
                    g = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function() {
                      var a = e.GetData(this, 'select2');
                      null == a &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" + b + "') method was called on an element that is not using Select2."
                        ),
                        (d = a[b].apply(a, g));
                    }),
                    a.inArray(b, f) > -1 ? this : d
                  );
                }
                throw new Error('Invalid arguments for Select2: ' + b);
              };
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
          }
        ),
        { define: b.define, require: b.require }
      );
    })(),
    c = b.require('jquery.select2');
  return (a.fn.select2.amd = b), c;
});
!(function(e) {
  e(['jquery'], function(e) {
    return (function() {
      function t(e, t, n) {
        return g({ type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t });
      }
      function n(t, n) {
        return t || (t = m()), (v = e('#' + t.containerId)), v.length ? v : (n && (v = d(t)), v);
      }
      function o(e, t, n) {
        return g({ type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t });
      }
      function s(e) {
        C = e;
      }
      function i(e, t, n) {
        return g({ type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t });
      }
      function a(e, t, n) {
        return g({ type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t });
      }
      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o);
      }
      function c(t) {
        var o = m();
        return v || n(o), t && 0 === e(':focus', t).length ? void h(t) : void (v.children().length && v.remove());
      }
      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t);
      }
      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return (
          !(!t || (!s && 0 !== e(':focus', t).length)) &&
          (t[n.hideMethod]({
            duration: n.hideDuration,
            easing: n.hideEasing,
            complete: function() {
              h(t);
            }
          }),
          !0)
        );
      }
      function d(t) {
        return (
          (v = e('<div/>')
            .attr('id', t.containerId)
            .addClass(t.positionClass)),
          v.appendTo(e(t.target)),
          v
        );
      }
      function p() {
        return {
          tapToDismiss: !0,
          toastClass: 'toast',
          containerId: 'toast-container',
          debug: !1,
          showMethod: 'fadeIn',
          showDuration: 300,
          showEasing: 'swing',
          onShown: void 0,
          hideMethod: 'fadeOut',
          hideDuration: 1e3,
          hideEasing: 'swing',
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: { error: 'toast-error', info: 'toast-info', success: 'toast-success', warning: 'toast-warning' },
          iconClass: 'toast-info',
          positionClass: 'toast-top-right',
          timeOut: 5e3,
          titleClass: 'toast-title',
          messageClass: 'toast-message',
          escapeHtml: !1,
          target: 'body',
          closeHtml: '<button type="button">&times;</button>',
          closeClass: 'toast-close-button',
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: 'toast-progress',
          rtl: !1
        };
      }
      function f(e) {
        C && C(e);
      }
      function g(t) {
        function o(e) {
          return (
            null == e && (e = ''),
            e
              .replace(/&/g, '&amp;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
          );
        }
        function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }
        function i() {
          var e = '';
          switch (t.iconClass) {
            case 'toast-success':
            case 'toast-info':
              e = 'polite';
              break;
            default:
              e = 'assertive';
          }
          I.attr('aria-live', e);
        }
        function a() {
          E.closeOnHover && I.hover(H, D),
            !E.onclick && E.tapToDismiss && I.click(b),
            E.closeButton &&
              j &&
              j.click(function(e) {
                e.stopPropagation
                  ? e.stopPropagation()
                  : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0),
                  E.onCloseClick && E.onCloseClick(e),
                  b(!0);
              }),
            E.onclick &&
              I.click(function(e) {
                E.onclick(e), b();
              });
        }
        function r() {
          I.hide(),
            I[E.showMethod]({ duration: E.showDuration, easing: E.showEasing, complete: E.onShown }),
            E.timeOut > 0 &&
              ((k = setTimeout(b, E.timeOut)),
              (F.maxHideTime = parseFloat(E.timeOut)),
              (F.hideEta = new Date().getTime() + F.maxHideTime),
              E.progressBar && (F.intervalId = setInterval(x, 10)));
        }
        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }
        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }
        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }
        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }
        function p() {
          E.closeButton && (j.addClass(E.closeClass).attr('role', 'button'), I.prepend(j));
        }
        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }
        function C() {
          E.rtl && I.addClass('rtl');
        }
        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;
            w = t.message;
          }
          return !1;
        }
        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
            o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
            s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(':focus', I).length || t)
            return (
              clearTimeout(F.intervalId),
              I[n]({
                duration: o,
                easing: s,
                complete: function() {
                  h(I),
                    clearTimeout(k),
                    E.onHidden && 'hidden' !== P.state && E.onHidden(),
                    (P.state = 'hidden'),
                    (P.endTime = new Date()),
                    f(P);
                }
              })
            );
        }
        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) &&
            ((k = setTimeout(b, E.extendedTimeOut)),
            (F.maxHideTime = parseFloat(E.extendedTimeOut)),
            (F.hideEta = new Date().getTime() + F.maxHideTime));
        }
        function H() {
          clearTimeout(k),
            (F.hideEta = 0),
            I.stop(!0, !0)[E.showMethod]({ duration: E.showDuration, easing: E.showEasing });
        }
        function x() {
          var e = ((F.hideEta - new Date().getTime()) / F.maxHideTime) * 100;
          q.width(e + '%');
        }
        var E = m(),
          y = t.iconClass || E.iconClass;
        if (
          ('undefined' != typeof t.optionsOverride &&
            ((E = e.extend(E, t.optionsOverride)), (y = t.optionsOverride.iconClass || y)),
          !O(E, t))
        ) {
          T++, (v = n(E, !0));
          var k = null,
            I = e('<div/>'),
            M = e('<div/>'),
            B = e('<div/>'),
            q = e('<div/>'),
            j = e(E.closeHtml),
            F = { intervalId: null, hideEta: null, maxHideTime: null },
            P = { toastId: T, state: 'visible', startTime: new Date(), options: E, map: t };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }
      function m() {
        return e.extend({}, p(), b.options);
      }
      function h(e) {
        v || (v = n()),
          e.is(':visible') || (e.remove(), (e = null), 0 === v.children().length && (v.remove(), (w = void 0)));
      }
      var v,
        C,
        w,
        T = 0,
        O = { error: 'error', info: 'info', success: 'success', warning: 'warning' },
        b = {
          clear: r,
          remove: c,
          error: t,
          getContainer: n,
          info: o,
          options: {},
          subscribe: s,
          success: i,
          version: '2.1.4',
          warning: a
        };
      return b;
    })();
  });
})(
  'function' == typeof define && define.amd
    ? define
    : function(e, t) {
        'undefined' != typeof module && module.exports
          ? (module.exports = t(require('jquery')))
          : (window.toastr = t(window.jQuery));
      }
);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
//# sourceMappingURL=toastr.js.map

!(function(t) {
  if ('object' == typeof exports && 'undefined' != typeof module) module.exports = t();
  else if ('function' == typeof define && define.amd) define([], t);
  else {
    ('undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : this
    ).Chart = t();
  }
})(function() {
  return (function t(e, i, n) {
    function a(r, s) {
      if (!i[r]) {
        if (!e[r]) {
          var l = 'function' == typeof require && require;
          if (!s && l) return l(r, !0);
          if (o) return o(r, !0);
          var u = new Error("Cannot find module '" + r + "'");
          throw ((u.code = 'MODULE_NOT_FOUND'), u);
        }
        var d = (i[r] = { exports: {} });
        e[r][0].call(
          d.exports,
          function(t) {
            var i = e[r][1][t];
            return a(i || t);
          },
          d,
          d.exports,
          t,
          e,
          i,
          n
        );
      }
      return i[r].exports;
    }
    for (var o = 'function' == typeof require && require, r = 0; r < n.length; r++) a(n[r]);
    return a;
  })(
    {
      1: [function(t, e, i) {}, {}],
      2: [
        function(t, e, i) {
          var n = t(6);
          function a(t) {
            if (t) {
              var e = [0, 0, 0],
                i = 1,
                a = t.match(/^#([a-fA-F0-9]{3})$/i);
              if (a) {
                a = a[1];
                for (var o = 0; o < e.length; o++) e[o] = parseInt(a[o] + a[o], 16);
              } else if ((a = t.match(/^#([a-fA-F0-9]{6})$/i))) {
                a = a[1];
                for (o = 0; o < e.length; o++) e[o] = parseInt(a.slice(2 * o, 2 * o + 2), 16);
              } else if (
                (a = t.match(
                  /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                ))
              ) {
                for (o = 0; o < e.length; o++) e[o] = parseInt(a[o + 1]);
                i = parseFloat(a[4]);
              } else if (
                (a = t.match(
                  /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                ))
              ) {
                for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(a[o + 1]));
                i = parseFloat(a[4]);
              } else if ((a = t.match(/(\w+)/))) {
                if ('transparent' == a[1]) return [0, 0, 0, 0];
                if (!(e = n[a[1]])) return;
              }
              for (o = 0; o < e.length; o++) e[o] = d(e[o], 0, 255);
              return (i = i || 0 == i ? d(i, 0, 1) : 1), (e[3] = i), e;
            }
          }
          function o(t) {
            if (t) {
              var e = t.match(
                /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
              );
              if (e) {
                var i = parseFloat(e[4]);
                return [
                  d(parseInt(e[1]), 0, 360),
                  d(parseFloat(e[2]), 0, 100),
                  d(parseFloat(e[3]), 0, 100),
                  d(isNaN(i) ? 1 : i, 0, 1)
                ];
              }
            }
          }
          function r(t) {
            if (t) {
              var e = t.match(
                /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
              );
              if (e) {
                var i = parseFloat(e[4]);
                return [
                  d(parseInt(e[1]), 0, 360),
                  d(parseFloat(e[2]), 0, 100),
                  d(parseFloat(e[3]), 0, 100),
                  d(isNaN(i) ? 1 : i, 0, 1)
                ];
              }
            }
          }
          function s(t, e) {
            return (
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
              'rgba(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + e + ')'
            );
          }
          function l(t, e) {
            return (
              'rgba(' +
              Math.round((t[0] / 255) * 100) +
              '%, ' +
              Math.round((t[1] / 255) * 100) +
              '%, ' +
              Math.round((t[2] / 255) * 100) +
              '%, ' +
              (e || t[3] || 1) +
              ')'
            );
          }
          function u(t, e) {
            return (
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
              'hsla(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%, ' + e + ')'
            );
          }
          function d(t, e, i) {
            return Math.min(Math.max(e, t), i);
          }
          function c(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? '0' + e : e;
          }
          e.exports = {
            getRgba: a,
            getHsla: o,
            getRgb: function(t) {
              var e = a(t);
              return e && e.slice(0, 3);
            },
            getHsl: function(t) {
              var e = o(t);
              return e && e.slice(0, 3);
            },
            getHwb: r,
            getAlpha: function(t) {
              var e = a(t);
              {
                if (e) return e[3];
                if ((e = o(t))) return e[3];
                if ((e = r(t))) return e[3];
              }
            },
            hexString: function(t) {
              return '#' + c(t[0]) + c(t[1]) + c(t[2]);
            },
            rgbString: function(t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return s(t, e);
              return 'rgb(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
            },
            rgbaString: s,
            percentString: function(t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return l(t, e);
              var i = Math.round((t[0] / 255) * 100),
                n = Math.round((t[1] / 255) * 100),
                a = Math.round((t[2] / 255) * 100);
              return 'rgb(' + i + '%, ' + n + '%, ' + a + '%)';
            },
            percentaString: l,
            hslString: function(t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return u(t, e);
              return 'hsl(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%)';
            },
            hslaString: u,
            hwbString: function(t, e) {
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
              return 'hwb(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%' + (void 0 !== e && 1 !== e ? ', ' + e : '') + ')';
            },
            keyword: function(t) {
              return h[t.slice(0, 3)];
            }
          };
          var h = {};
          for (var f in n) h[n[f]] = f;
        },
        { 6: 6 }
      ],
      3: [
        function(t, e, i) {
          var n = t(5),
            a = t(2),
            o = function(t) {
              return t instanceof o
                ? t
                : this instanceof o
                ? ((this.valid = !1),
                  (this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                  }),
                  void ('string' == typeof t
                    ? (e = a.getRgba(t))
                      ? this.setValues('rgb', e)
                      : (e = a.getHsla(t))
                      ? this.setValues('hsl', e)
                      : (e = a.getHwb(t)) && this.setValues('hwb', e)
                    : 'object' == typeof t &&
                      (void 0 !== (e = t).r || void 0 !== e.red
                        ? this.setValues('rgb', e)
                        : void 0 !== e.l || void 0 !== e.lightness
                        ? this.setValues('hsl', e)
                        : void 0 !== e.v || void 0 !== e.value
                        ? this.setValues('hsv', e)
                        : void 0 !== e.w || void 0 !== e.whiteness
                        ? this.setValues('hwb', e)
                        : (void 0 === e.c && void 0 === e.cyan) || this.setValues('cmyk', e))))
                : new o(t);
              var e;
            };
          (o.prototype = {
            isValid: function() {
              return this.valid;
            },
            rgb: function() {
              return this.setSpace('rgb', arguments);
            },
            hsl: function() {
              return this.setSpace('hsl', arguments);
            },
            hsv: function() {
              return this.setSpace('hsv', arguments);
            },
            hwb: function() {
              return this.setSpace('hwb', arguments);
            },
            cmyk: function() {
              return this.setSpace('cmyk', arguments);
            },
            rgbArray: function() {
              return this.values.rgb;
            },
            hslArray: function() {
              return this.values.hsl;
            },
            hsvArray: function() {
              return this.values.hsv;
            },
            hwbArray: function() {
              var t = this.values;
              return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
            },
            cmykArray: function() {
              return this.values.cmyk;
            },
            rgbaArray: function() {
              var t = this.values;
              return t.rgb.concat([t.alpha]);
            },
            hslaArray: function() {
              var t = this.values;
              return t.hsl.concat([t.alpha]);
            },
            alpha: function(t) {
              return void 0 === t ? this.values.alpha : (this.setValues('alpha', t), this);
            },
            red: function(t) {
              return this.setChannel('rgb', 0, t);
            },
            green: function(t) {
              return this.setChannel('rgb', 1, t);
            },
            blue: function(t) {
              return this.setChannel('rgb', 2, t);
            },
            hue: function(t) {
              return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel('hsl', 0, t);
            },
            saturation: function(t) {
              return this.setChannel('hsl', 1, t);
            },
            lightness: function(t) {
              return this.setChannel('hsl', 2, t);
            },
            saturationv: function(t) {
              return this.setChannel('hsv', 1, t);
            },
            whiteness: function(t) {
              return this.setChannel('hwb', 1, t);
            },
            blackness: function(t) {
              return this.setChannel('hwb', 2, t);
            },
            value: function(t) {
              return this.setChannel('hsv', 2, t);
            },
            cyan: function(t) {
              return this.setChannel('cmyk', 0, t);
            },
            magenta: function(t) {
              return this.setChannel('cmyk', 1, t);
            },
            yellow: function(t) {
              return this.setChannel('cmyk', 2, t);
            },
            black: function(t) {
              return this.setChannel('cmyk', 3, t);
            },
            hexString: function() {
              return a.hexString(this.values.rgb);
            },
            rgbString: function() {
              return a.rgbString(this.values.rgb, this.values.alpha);
            },
            rgbaString: function() {
              return a.rgbaString(this.values.rgb, this.values.alpha);
            },
            percentString: function() {
              return a.percentString(this.values.rgb, this.values.alpha);
            },
            hslString: function() {
              return a.hslString(this.values.hsl, this.values.alpha);
            },
            hslaString: function() {
              return a.hslaString(this.values.hsl, this.values.alpha);
            },
            hwbString: function() {
              return a.hwbString(this.values.hwb, this.values.alpha);
            },
            keyword: function() {
              return a.keyword(this.values.rgb, this.values.alpha);
            },
            rgbNumber: function() {
              var t = this.values.rgb;
              return (t[0] << 16) | (t[1] << 8) | t[2];
            },
            luminosity: function() {
              for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                var n = t[i] / 255;
                e[i] = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
              }
              return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
            },
            contrast: function(t) {
              var e = this.luminosity(),
                i = t.luminosity();
              return e > i ? (e + 0.05) / (i + 0.05) : (i + 0.05) / (e + 0.05);
            },
            level: function(t) {
              var e = this.contrast(t);
              return e >= 7.1 ? 'AAA' : e >= 4.5 ? 'AA' : '';
            },
            dark: function() {
              var t = this.values.rgb;
              return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
            },
            light: function() {
              return !this.dark();
            },
            negate: function() {
              for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
              return this.setValues('rgb', t), this;
            },
            lighten: function(t) {
              var e = this.values.hsl;
              return (e[2] += e[2] * t), this.setValues('hsl', e), this;
            },
            darken: function(t) {
              var e = this.values.hsl;
              return (e[2] -= e[2] * t), this.setValues('hsl', e), this;
            },
            saturate: function(t) {
              var e = this.values.hsl;
              return (e[1] += e[1] * t), this.setValues('hsl', e), this;
            },
            desaturate: function(t) {
              var e = this.values.hsl;
              return (e[1] -= e[1] * t), this.setValues('hsl', e), this;
            },
            whiten: function(t) {
              var e = this.values.hwb;
              return (e[1] += e[1] * t), this.setValues('hwb', e), this;
            },
            blacken: function(t) {
              var e = this.values.hwb;
              return (e[2] += e[2] * t), this.setValues('hwb', e), this;
            },
            greyscale: function() {
              var t = this.values.rgb,
                e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
              return this.setValues('rgb', [e, e, e]), this;
            },
            clearer: function(t) {
              var e = this.values.alpha;
              return this.setValues('alpha', e - e * t), this;
            },
            opaquer: function(t) {
              var e = this.values.alpha;
              return this.setValues('alpha', e + e * t), this;
            },
            rotate: function(t) {
              var e = this.values.hsl,
                i = (e[0] + t) % 360;
              return (e[0] = i < 0 ? 360 + i : i), this.setValues('hsl', e), this;
            },
            mix: function(t, e) {
              var i = this,
                n = t,
                a = void 0 === e ? 0.5 : e,
                o = 2 * a - 1,
                r = i.alpha() - n.alpha(),
                s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                l = 1 - s;
              return this.rgb(
                s * i.red() + l * n.red(),
                s * i.green() + l * n.green(),
                s * i.blue() + l * n.blue()
              ).alpha(i.alpha() * a + n.alpha() * (1 - a));
            },
            toJSON: function() {
              return this.rgb();
            },
            clone: function() {
              var t,
                e,
                i = new o(),
                n = this.values,
                a = i.values;
              for (var r in n)
                n.hasOwnProperty(r) &&
                  ((t = n[r]),
                  '[object Array]' === (e = {}.toString.call(t))
                    ? (a[r] = t.slice(0))
                    : '[object Number]' === e
                    ? (a[r] = t)
                    : console.error('unexpected color value:', t));
              return i;
            }
          }),
            (o.prototype.spaces = {
              rgb: ['red', 'green', 'blue'],
              hsl: ['hue', 'saturation', 'lightness'],
              hsv: ['hue', 'saturation', 'value'],
              hwb: ['hue', 'whiteness', 'blackness'],
              cmyk: ['cyan', 'magenta', 'yellow', 'black']
            }),
            (o.prototype.maxes = {
              rgb: [255, 255, 255],
              hsl: [360, 100, 100],
              hsv: [360, 100, 100],
              hwb: [360, 100, 100],
              cmyk: [100, 100, 100, 100]
            }),
            (o.prototype.getValues = function(t) {
              for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
              return 1 !== e.alpha && (i.a = e.alpha), i;
            }),
            (o.prototype.setValues = function(t, e) {
              var i,
                a,
                o = this.values,
                r = this.spaces,
                s = this.maxes,
                l = 1;
              if (((this.valid = !0), 'alpha' === t)) l = e;
              else if (e.length) (o[t] = e.slice(0, t.length)), (l = e[t.length]);
              else if (void 0 !== e[t.charAt(0)]) {
                for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                l = e.a;
              } else if (void 0 !== e[r[t][0]]) {
                var u = r[t];
                for (i = 0; i < t.length; i++) o[t][i] = e[u[i]];
                l = e.alpha;
              }
              if (((o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l))), 'alpha' === t)) return !1;
              for (i = 0; i < t.length; i++) (a = Math.max(0, Math.min(s[t][i], o[t][i]))), (o[t][i] = Math.round(a));
              for (var d in r) d !== t && (o[d] = n[t][d](o[t]));
              return !0;
            }),
            (o.prototype.setSpace = function(t, e) {
              var i = e[0];
              return void 0 === i
                ? this.getValues(t)
                : ('number' == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
            }),
            (o.prototype.setChannel = function(t, e, i) {
              var n = this.values[t];
              return void 0 === i ? n[e] : i === n[e] ? this : ((n[e] = i), this.setValues(t, n), this);
            }),
            'undefined' != typeof window && (window.Color = o),
            (e.exports = o);
        },
        { 2: 2, 5: 5 }
      ],
      4: [
        function(t, e, i) {
          function n(t) {
            var e,
              i,
              n = t[0] / 255,
              a = t[1] / 255,
              o = t[2] / 255,
              r = Math.min(n, a, o),
              s = Math.max(n, a, o),
              l = s - r;
            return (
              s == r
                ? (e = 0)
                : n == s
                ? (e = (a - o) / l)
                : a == s
                ? (e = 2 + (o - n) / l)
                : o == s && (e = 4 + (n - a) / l),
              (e = Math.min(60 * e, 360)) < 0 && (e += 360),
              (i = (r + s) / 2),
              [e, 100 * (s == r ? 0 : i <= 0.5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
            );
          }
          function a(t) {
            var e,
              i,
              n = t[0],
              a = t[1],
              o = t[2],
              r = Math.min(n, a, o),
              s = Math.max(n, a, o),
              l = s - r;
            return (
              (i = 0 == s ? 0 : ((l / s) * 1e3) / 10),
              s == r
                ? (e = 0)
                : n == s
                ? (e = (a - o) / l)
                : a == s
                ? (e = 2 + (o - n) / l)
                : o == s && (e = 4 + (n - a) / l),
              (e = Math.min(60 * e, 360)) < 0 && (e += 360),
              [e, i, ((s / 255) * 1e3) / 10]
            );
          }
          function o(t) {
            var e = t[0],
              i = t[1],
              a = t[2];
            return [
              n(t)[0],
              100 * ((1 / 255) * Math.min(e, Math.min(i, a))),
              100 * (a = 1 - (1 / 255) * Math.max(e, Math.max(i, a)))
            ];
          }
          function s(t) {
            var e,
              i = t[0] / 255,
              n = t[1] / 255,
              a = t[2] / 255;
            return [
              100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0),
              100 * ((1 - n - e) / (1 - e) || 0),
              100 * ((1 - a - e) / (1 - e) || 0),
              100 * e
            ];
          }
          function l(t) {
            return C[JSON.stringify(t)];
          }
          function u(t) {
            var e = t[0] / 255,
              i = t[1] / 255,
              n = t[2] / 255;
            return [
              100 *
                (0.4124 * (e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) +
                  0.3576 * (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92) +
                  0.1805 * (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92)),
              100 * (0.2126 * e + 0.7152 * i + 0.0722 * n),
              100 * (0.0193 * e + 0.1192 * i + 0.9505 * n)
            ];
          }
          function d(t) {
            var e = u(t),
              i = e[0],
              n = e[1],
              a = e[2];
            return (
              (n /= 100),
              (a /= 108.883),
              (i = (i /= 95.047) > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
              [
                116 * (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16,
                500 * (i - n),
                200 * (n - (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))
              ]
            );
          }
          function c(t) {
            var e,
              i,
              n,
              a,
              o,
              r = t[0] / 360,
              s = t[1] / 100,
              l = t[2] / 100;
            if (0 == s) return [(o = 255 * l), o, o];
            (e = 2 * l - (i = l < 0.5 ? l * (1 + s) : l + s - l * s)), (a = [0, 0, 0]);
            for (var u = 0; u < 3; u++)
              (n = r + (1 / 3) * -(u - 1)) < 0 && n++,
                n > 1 && n--,
                (o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e),
                (a[u] = 255 * o);
            return a;
          }
          function h(t) {
            var e = t[0] / 60,
              i = t[1] / 100,
              n = t[2] / 100,
              a = Math.floor(e) % 6,
              o = e - Math.floor(e),
              r = 255 * n * (1 - i),
              s = 255 * n * (1 - i * o),
              l = 255 * n * (1 - i * (1 - o));
            n *= 255;
            switch (a) {
              case 0:
                return [n, l, r];
              case 1:
                return [s, n, r];
              case 2:
                return [r, n, l];
              case 3:
                return [r, s, n];
              case 4:
                return [l, r, n];
              case 5:
                return [n, r, s];
            }
          }
          function f(t) {
            var e,
              i,
              n,
              a,
              o = t[0] / 360,
              s = t[1] / 100,
              l = t[2] / 100,
              u = s + l;
            switch (
              (u > 1 && ((s /= u), (l /= u)),
              (n = 6 * o - (e = Math.floor(6 * o))),
              0 != (1 & e) && (n = 1 - n),
              (a = s + n * ((i = 1 - l) - s)),
              e)
            ) {
              default:
              case 6:
              case 0:
                (r = i), (g = a), (b = s);
                break;
              case 1:
                (r = a), (g = i), (b = s);
                break;
              case 2:
                (r = s), (g = i), (b = a);
                break;
              case 3:
                (r = s), (g = a), (b = i);
                break;
              case 4:
                (r = a), (g = s), (b = i);
                break;
              case 5:
                (r = i), (g = s), (b = a);
            }
            return [255 * r, 255 * g, 255 * b];
          }
          function p(t) {
            var e = t[0] / 100,
              i = t[1] / 100,
              n = t[2] / 100,
              a = t[3] / 100;
            return [
              255 * (1 - Math.min(1, e * (1 - a) + a)),
              255 * (1 - Math.min(1, i * (1 - a) + a)),
              255 * (1 - Math.min(1, n * (1 - a) + a))
            ];
          }
          function m(t) {
            var e,
              i,
              n,
              a = t[0] / 100,
              o = t[1] / 100,
              r = t[2] / 100;
            return (
              (i = -0.9689 * a + 1.8758 * o + 0.0415 * r),
              (n = 0.0557 * a + -0.204 * o + 1.057 * r),
              (e =
                (e = 3.2406 * a + -1.5372 * o + -0.4986 * r) > 0.0031308
                  ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                  : (e *= 12.92)),
              (i = i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : (i *= 12.92)),
              (n = n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : (n *= 12.92)),
              [
                255 * (e = Math.min(Math.max(0, e), 1)),
                255 * (i = Math.min(Math.max(0, i), 1)),
                255 * (n = Math.min(Math.max(0, n), 1))
              ]
            );
          }
          function v(t) {
            var e = t[0],
              i = t[1],
              n = t[2];
            return (
              (i /= 100),
              (n /= 108.883),
              (e = (e /= 95.047) > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
              [
                116 * (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16,
                500 * (e - i),
                200 * (i - (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))
              ]
            );
          }
          function x(t) {
            var e,
              i,
              n,
              a,
              o = t[0],
              r = t[1],
              s = t[2];
            return (
              o <= 8
                ? (a = ((i = (100 * o) / 903.3) / 100) * 7.787 + 16 / 116)
                : ((i = 100 * Math.pow((o + 16) / 116, 3)), (a = Math.pow(i / 100, 1 / 3))),
              [
                (e =
                  e / 95.047 <= 0.008856
                    ? (e = (95.047 * (r / 500 + a - 16 / 116)) / 7.787)
                    : 95.047 * Math.pow(r / 500 + a, 3)),
                i,
                (n =
                  n / 108.883 <= 0.008859
                    ? (n = (108.883 * (a - s / 200 - 16 / 116)) / 7.787)
                    : 108.883 * Math.pow(a - s / 200, 3))
              ]
            );
          }
          function y(t) {
            var e,
              i = t[0],
              n = t[1],
              a = t[2];
            return (e = (360 * Math.atan2(a, n)) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
          }
          function k(t) {
            return m(x(t));
          }
          function M(t) {
            var e,
              i = t[0],
              n = t[1];
            return (e = (t[2] / 360) * 2 * Math.PI), [i, n * Math.cos(e), n * Math.sin(e)];
          }
          function w(t) {
            return S[t];
          }
          e.exports = {
            rgb2hsl: n,
            rgb2hsv: a,
            rgb2hwb: o,
            rgb2cmyk: s,
            rgb2keyword: l,
            rgb2xyz: u,
            rgb2lab: d,
            rgb2lch: function(t) {
              return y(d(t));
            },
            hsl2rgb: c,
            hsl2hsv: function(t) {
              var e = t[0],
                i = t[1] / 100,
                n = t[2] / 100;
              if (0 === n) return [0, 0, 0];
              return [e, 100 * ((2 * (i *= (n *= 2) <= 1 ? n : 2 - n)) / (n + i)), 100 * ((n + i) / 2)];
            },
            hsl2hwb: function(t) {
              return o(c(t));
            },
            hsl2cmyk: function(t) {
              return s(c(t));
            },
            hsl2keyword: function(t) {
              return l(c(t));
            },
            hsv2rgb: h,
            hsv2hsl: function(t) {
              var e,
                i,
                n = t[0],
                a = t[1] / 100,
                o = t[2] / 100;
              return (e = a * o), [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
            },
            hsv2hwb: function(t) {
              return o(h(t));
            },
            hsv2cmyk: function(t) {
              return s(h(t));
            },
            hsv2keyword: function(t) {
              return l(h(t));
            },
            hwb2rgb: f,
            hwb2hsl: function(t) {
              return n(f(t));
            },
            hwb2hsv: function(t) {
              return a(f(t));
            },
            hwb2cmyk: function(t) {
              return s(f(t));
            },
            hwb2keyword: function(t) {
              return l(f(t));
            },
            cmyk2rgb: p,
            cmyk2hsl: function(t) {
              return n(p(t));
            },
            cmyk2hsv: function(t) {
              return a(p(t));
            },
            cmyk2hwb: function(t) {
              return o(p(t));
            },
            cmyk2keyword: function(t) {
              return l(p(t));
            },
            keyword2rgb: w,
            keyword2hsl: function(t) {
              return n(w(t));
            },
            keyword2hsv: function(t) {
              return a(w(t));
            },
            keyword2hwb: function(t) {
              return o(w(t));
            },
            keyword2cmyk: function(t) {
              return s(w(t));
            },
            keyword2lab: function(t) {
              return d(w(t));
            },
            keyword2xyz: function(t) {
              return u(w(t));
            },
            xyz2rgb: m,
            xyz2lab: v,
            xyz2lch: function(t) {
              return y(v(t));
            },
            lab2xyz: x,
            lab2rgb: k,
            lab2lch: y,
            lch2lab: M,
            lch2xyz: function(t) {
              return x(M(t));
            },
            lch2rgb: function(t) {
              return k(M(t));
            }
          };
          var S = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50]
            },
            C = {};
          for (var _ in S) C[JSON.stringify(S[_])] = _;
        },
        {}
      ],
      5: [
        function(t, e, i) {
          var n = t(4),
            a = function() {
              return new u();
            };
          for (var o in n) {
            a[o + 'Raw'] = (function(t) {
              return function(e) {
                return 'number' == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e);
              };
            })(o);
            var r = /(\w+)2(\w+)/.exec(o),
              s = r[1],
              l = r[2];
            (a[s] = a[s] || {})[l] = a[o] = (function(t) {
              return function(e) {
                'number' == typeof e && (e = Array.prototype.slice.call(arguments));
                var i = n[t](e);
                if ('string' == typeof i || void 0 === i) return i;
                for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]);
                return i;
              };
            })(o);
          }
          var u = function() {
            this.convs = {};
          };
          (u.prototype.routeSpace = function(t, e) {
            var i = e[0];
            return void 0 === i
              ? this.getValues(t)
              : ('number' == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
          }),
            (u.prototype.setValues = function(t, e) {
              return (this.space = t), (this.convs = {}), (this.convs[t] = e), this;
            }),
            (u.prototype.getValues = function(t) {
              var e = this.convs[t];
              if (!e) {
                var i = this.space,
                  n = this.convs[i];
                (e = a[i][t](n)), (this.convs[t] = e);
              }
              return e;
            }),
            ['rgb', 'hsl', 'hsv', 'cmyk', 'keyword'].forEach(function(t) {
              u.prototype[t] = function(e) {
                return this.routeSpace(t, arguments);
              };
            }),
            (e.exports = a);
        },
        { 4: 4 }
      ],
      6: [
        function(t, e, i) {
          'use strict';
          e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          };
        },
        {}
      ],
      7: [
        function(t, e, i) {
          var n = t(29)();
          (n.helpers = t(45)),
            t(27)(n),
            (n.defaults = t(25)),
            (n.Element = t(26)),
            (n.elements = t(40)),
            (n.Interaction = t(28)),
            (n.layouts = t(30)),
            (n.platform = t(48)),
            (n.plugins = t(31)),
            (n.Ticks = t(34)),
            t(22)(n),
            t(23)(n),
            t(24)(n),
            t(33)(n),
            t(32)(n),
            t(35)(n),
            t(55)(n),
            t(53)(n),
            t(54)(n),
            t(56)(n),
            t(57)(n),
            t(58)(n),
            t(15)(n),
            t(16)(n),
            t(17)(n),
            t(18)(n),
            t(19)(n),
            t(20)(n),
            t(21)(n),
            t(8)(n),
            t(9)(n),
            t(10)(n),
            t(11)(n),
            t(12)(n),
            t(13)(n),
            t(14)(n);
          var a = t(49);
          for (var o in a) a.hasOwnProperty(o) && n.plugins.register(a[o]);
          n.platform.initialize(),
            (e.exports = n),
            'undefined' != typeof window && (window.Chart = n),
            (n.Legend = a.legend._element),
            (n.Title = a.title._element),
            (n.pluginService = n.plugins),
            (n.PluginBase = n.Element.extend({})),
            (n.canvasHelpers = n.helpers.canvas),
            (n.layoutService = n.layouts);
        },
        {
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          17: 17,
          18: 18,
          19: 19,
          20: 20,
          21: 21,
          22: 22,
          23: 23,
          24: 24,
          25: 25,
          26: 26,
          27: 27,
          28: 28,
          29: 29,
          30: 30,
          31: 31,
          32: 32,
          33: 33,
          34: 34,
          35: 35,
          40: 40,
          45: 45,
          48: 48,
          49: 49,
          53: 53,
          54: 54,
          55: 55,
          56: 56,
          57: 57,
          58: 58,
          8: 8,
          9: 9
        }
      ],
      8: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.Bar = function(e, i) {
              return (i.type = 'bar'), new t(e, i);
            };
          };
        },
        {}
      ],
      9: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.Bubble = function(e, i) {
              return (i.type = 'bubble'), new t(e, i);
            };
          };
        },
        {}
      ],
      10: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.Doughnut = function(e, i) {
              return (i.type = 'doughnut'), new t(e, i);
            };
          };
        },
        {}
      ],
      11: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.Line = function(e, i) {
              return (i.type = 'line'), new t(e, i);
            };
          };
        },
        {}
      ],
      12: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.PolarArea = function(e, i) {
              return (i.type = 'polarArea'), new t(e, i);
            };
          };
        },
        {}
      ],
      13: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.Radar = function(e, i) {
              return (i.type = 'radar'), new t(e, i);
            };
          };
        },
        {}
      ],
      14: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            t.Scatter = function(e, i) {
              return (i.type = 'scatter'), new t(e, i);
            };
          };
        },
        {}
      ],
      15: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('bar', {
            hover: { mode: 'label' },
            scales: {
              xAxes: [
                {
                  type: 'category',
                  categoryPercentage: 0.8,
                  barPercentage: 0.9,
                  offset: !0,
                  gridLines: { offsetGridLines: !0 }
                }
              ],
              yAxes: [{ type: 'linear' }]
            }
          }),
            n._set('horizontalBar', {
              hover: { mode: 'index', axis: 'y' },
              scales: {
                xAxes: [{ type: 'linear', position: 'bottom' }],
                yAxes: [
                  {
                    position: 'left',
                    type: 'category',
                    categoryPercentage: 0.8,
                    barPercentage: 0.9,
                    offset: !0,
                    gridLines: { offsetGridLines: !0 }
                  }
                ]
              },
              elements: { rectangle: { borderSkipped: 'left' } },
              tooltips: {
                callbacks: {
                  title: function(t, e) {
                    var i = '';
                    return (
                      t.length > 0 &&
                        (t[0].yLabel
                          ? (i = t[0].yLabel)
                          : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])),
                      i
                    );
                  },
                  label: function(t, e) {
                    return (e.datasets[t.datasetIndex].label || '') + ': ' + t.xLabel;
                  }
                },
                mode: 'index',
                axis: 'y'
              }
            }),
            (e.exports = function(t) {
              (t.controllers.bar = t.DatasetController.extend({
                dataElementType: a.Rectangle,
                initialize: function() {
                  var e;
                  t.DatasetController.prototype.initialize.apply(this, arguments),
                    ((e = this.getMeta()).stack = this.getDataset().stack),
                    (e.bar = !0);
                },
                update: function(t) {
                  var e,
                    i,
                    n = this.getMeta().data;
                  for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t);
                },
                updateElement: function(t, e, i) {
                  var n = this,
                    a = n.chart,
                    r = n.getMeta(),
                    s = n.getDataset(),
                    l = t.custom || {},
                    u = a.options.elements.rectangle;
                  (t._xScale = n.getScaleForId(r.xAxisID)),
                    (t._yScale = n.getScaleForId(r.yAxisID)),
                    (t._datasetIndex = n.index),
                    (t._index = e),
                    (t._model = {
                      datasetLabel: s.label,
                      label: a.data.labels[e],
                      borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                      backgroundColor: l.backgroundColor
                        ? l.backgroundColor
                        : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                      borderColor: l.borderColor
                        ? l.borderColor
                        : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                      borderWidth: l.borderWidth
                        ? l.borderWidth
                        : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                    }),
                    n.updateElementGeometry(t, e, i),
                    t.pivot();
                },
                updateElementGeometry: function(t, e, i) {
                  var n = this,
                    a = t._model,
                    o = n.getValueScale(),
                    r = o.getBasePixel(),
                    s = o.isHorizontal(),
                    l = n._ruler || n.getRuler(),
                    u = n.calculateBarValuePixels(n.index, e),
                    d = n.calculateBarIndexPixels(n.index, e, l);
                  (a.horizontal = s),
                    (a.base = i ? r : u.base),
                    (a.x = s ? (i ? r : u.head) : d.center),
                    (a.y = s ? d.center : i ? r : u.head),
                    (a.height = s ? d.size : void 0),
                    (a.width = s ? void 0 : d.size);
                },
                getValueScaleId: function() {
                  return this.getMeta().yAxisID;
                },
                getIndexScaleId: function() {
                  return this.getMeta().xAxisID;
                },
                getValueScale: function() {
                  return this.getScaleForId(this.getValueScaleId());
                },
                getIndexScale: function() {
                  return this.getScaleForId(this.getIndexScaleId());
                },
                _getStacks: function(t) {
                  var e,
                    i,
                    n = this.chart,
                    a = this.getIndexScale().options.stacked,
                    o = void 0 === t ? n.data.datasets.length : t + 1,
                    r = [];
                  for (e = 0; e < o; ++e)
                    (i = n.getDatasetMeta(e)).bar &&
                      n.isDatasetVisible(e) &&
                      (!1 === a ||
                        (!0 === a && -1 === r.indexOf(i.stack)) ||
                        (void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack)))) &&
                      r.push(i.stack);
                  return r;
                },
                getStackCount: function() {
                  return this._getStacks().length;
                },
                getStackIndex: function(t, e) {
                  var i = this._getStacks(t),
                    n = void 0 !== e ? i.indexOf(e) : -1;
                  return -1 === n ? i.length - 1 : n;
                },
                getRuler: function() {
                  var t,
                    e,
                    i = this.getIndexScale(),
                    n = this.getStackCount(),
                    a = this.index,
                    r = i.isHorizontal(),
                    s = r ? i.left : i.top,
                    l = s + (r ? i.width : i.height),
                    u = [];
                  for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(i.getPixelForValue(null, t, a));
                  return {
                    min: o.isNullOrUndef(i.options.barThickness)
                      ? (function(t, e) {
                          var i,
                            n,
                            a,
                            o,
                            r = t.isHorizontal() ? t.width : t.height,
                            s = t.getTicks();
                          for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, e[a] - e[a - 1]);
                          for (a = 0, o = s.length; a < o; ++a)
                            (n = t.getPixelForTick(a)), (r = a > 0 ? Math.min(r, n - i) : r), (i = n);
                          return r;
                        })(i, u)
                      : -1,
                    pixels: u,
                    start: s,
                    end: l,
                    stackCount: n,
                    scale: i
                  };
                },
                calculateBarValuePixels: function(t, e) {
                  var i,
                    n,
                    a,
                    o,
                    r,
                    s,
                    l = this.chart,
                    u = this.getMeta(),
                    d = this.getValueScale(),
                    c = l.data.datasets,
                    h = d.getRightValue(c[t].data[e]),
                    f = d.options.stacked,
                    g = u.stack,
                    p = 0;
                  if (f || (void 0 === f && void 0 !== g))
                    for (i = 0; i < t; ++i)
                      (n = l.getDatasetMeta(i)).bar &&
                        n.stack === g &&
                        n.controller.getValueScaleId() === d.id &&
                        l.isDatasetVisible(i) &&
                        ((a = d.getRightValue(c[i].data[e])), ((h < 0 && a < 0) || (h >= 0 && a > 0)) && (p += a));
                  return (
                    (o = d.getPixelForValue(p)),
                    { size: (s = ((r = d.getPixelForValue(p + h)) - o) / 2), base: o, head: r, center: r + s / 2 }
                  );
                },
                calculateBarIndexPixels: function(t, e, i) {
                  var n,
                    a,
                    r,
                    s,
                    l,
                    u,
                    d,
                    c,
                    h,
                    f,
                    g,
                    p,
                    m,
                    v,
                    b,
                    x,
                    y,
                    k = i.scale.options,
                    M =
                      'flex' === k.barThickness
                        ? ((h = e),
                          (g = k),
                          (m = (f = i).pixels),
                          (v = m[h]),
                          (b = h > 0 ? m[h - 1] : null),
                          (x = h < m.length - 1 ? m[h + 1] : null),
                          (y = g.categoryPercentage),
                          null === b && (b = v - (null === x ? f.end - v : x - v)),
                          null === x && (x = v + v - b),
                          (p = v - ((v - b) / 2) * y),
                          { chunk: (((x - b) / 2) * y) / f.stackCount, ratio: g.barPercentage, start: p })
                        : ((n = e),
                          (a = i),
                          (u = (r = k).barThickness),
                          (d = a.stackCount),
                          (c = a.pixels[n]),
                          o.isNullOrUndef(u)
                            ? ((s = a.min * r.categoryPercentage), (l = r.barPercentage))
                            : ((s = u * d), (l = 1)),
                          { chunk: s / d, ratio: l, start: c - s / 2 }),
                    w = this.getStackIndex(t, this.getMeta().stack),
                    S = M.start + M.chunk * w + M.chunk / 2,
                    C = Math.min(o.valueOrDefault(k.maxBarThickness, 1 / 0), M.chunk * M.ratio);
                  return { base: S - C / 2, head: S + C / 2, center: S, size: C };
                },
                draw: function() {
                  var t = this.chart,
                    e = this.getValueScale(),
                    i = this.getMeta().data,
                    n = this.getDataset(),
                    a = i.length,
                    r = 0;
                  for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r)
                    isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                  o.canvas.unclipArea(t.ctx);
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    n = t.custom || {},
                    a = t._model;
                  (a.backgroundColor = n.hoverBackgroundColor
                    ? n.hoverBackgroundColor
                    : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor))),
                    (a.borderColor = n.hoverBorderColor
                      ? n.hoverBorderColor
                      : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor))),
                    (a.borderWidth = n.hoverBorderWidth
                      ? n.hoverBorderWidth
                      : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth));
                },
                removeHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    n = t.custom || {},
                    a = t._model,
                    r = this.chart.options.elements.rectangle;
                  (a.backgroundColor = n.backgroundColor
                    ? n.backgroundColor
                    : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor)),
                    (a.borderColor = n.borderColor
                      ? n.borderColor
                      : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor)),
                    (a.borderWidth = n.borderWidth
                      ? n.borderWidth
                      : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth));
                }
              })),
                (t.controllers.horizontalBar = t.controllers.bar.extend({
                  getValueScaleId: function() {
                    return this.getMeta().xAxisID;
                  },
                  getIndexScaleId: function() {
                    return this.getMeta().yAxisID;
                  }
                }));
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      16: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('bubble', {
            hover: { mode: 'single' },
            scales: {
              xAxes: [{ type: 'linear', position: 'bottom', id: 'x-axis-0' }],
              yAxes: [{ type: 'linear', position: 'left', id: 'y-axis-0' }]
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return '';
                },
                label: function(t, e) {
                  var i = e.datasets[t.datasetIndex].label || '',
                    n = e.datasets[t.datasetIndex].data[t.index];
                  return i + ': (' + t.xLabel + ', ' + t.yLabel + ', ' + n.r + ')';
                }
              }
            }
          }),
            (e.exports = function(t) {
              t.controllers.bubble = t.DatasetController.extend({
                dataElementType: a.Point,
                update: function(t) {
                  var e = this,
                    i = e.getMeta().data;
                  o.each(i, function(i, n) {
                    e.updateElement(i, n, t);
                  });
                },
                updateElement: function(t, e, i) {
                  var n = this,
                    a = n.getMeta(),
                    o = t.custom || {},
                    r = n.getScaleForId(a.xAxisID),
                    s = n.getScaleForId(a.yAxisID),
                    l = n._resolveElementOptions(t, e),
                    u = n.getDataset().data[e],
                    d = n.index,
                    c = i ? r.getPixelForDecimal(0.5) : r.getPixelForValue('object' == typeof u ? u : NaN, e, d),
                    h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                  (t._xScale = r),
                    (t._yScale = s),
                    (t._options = l),
                    (t._datasetIndex = d),
                    (t._index = e),
                    (t._model = {
                      backgroundColor: l.backgroundColor,
                      borderColor: l.borderColor,
                      borderWidth: l.borderWidth,
                      hitRadius: l.hitRadius,
                      pointStyle: l.pointStyle,
                      radius: i ? 0 : l.radius,
                      skip: o.skip || isNaN(c) || isNaN(h),
                      x: c,
                      y: h
                    }),
                    t.pivot();
                },
                setHoverStyle: function(t) {
                  var e = t._model,
                    i = t._options;
                  (e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor))),
                    (e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor))),
                    (e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth)),
                    (e.radius = i.radius + i.hoverRadius);
                },
                removeHoverStyle: function(t) {
                  var e = t._model,
                    i = t._options;
                  (e.backgroundColor = i.backgroundColor),
                    (e.borderColor = i.borderColor),
                    (e.borderWidth = i.borderWidth),
                    (e.radius = i.radius);
                },
                _resolveElementOptions: function(t, e) {
                  var i,
                    n,
                    a,
                    r = this.chart,
                    s = r.data.datasets[this.index],
                    l = t.custom || {},
                    u = r.options.elements.point,
                    d = o.options.resolve,
                    c = s.data[e],
                    h = {},
                    f = { chart: r, dataIndex: e, dataset: s, datasetIndex: this.index },
                    g = [
                      'backgroundColor',
                      'borderColor',
                      'borderWidth',
                      'hoverBackgroundColor',
                      'hoverBorderColor',
                      'hoverBorderWidth',
                      'hoverRadius',
                      'hitRadius',
                      'pointStyle'
                    ];
                  for (i = 0, n = g.length; i < n; ++i) h[(a = g[i])] = d([l[a], s[a], u[a]], f, e);
                  return (h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e)), h;
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      17: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('doughnut', {
            animation: { animateRotate: !0, animateScale: !1 },
            hover: { mode: 'single' },
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              var i = t.data,
                n = i.datasets,
                a = i.labels;
              if (n.length)
                for (var o = 0; o < n[0].data.length; ++o)
                  e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'),
                    a[o] && e.push(a[o]),
                    e.push('</li>');
              return e.push('</ul>'), e.join('');
            },
            legend: {
              labels: {
                generateLabels: function(t) {
                  var e = t.data;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map(function(i, n) {
                        var a = t.getDatasetMeta(0),
                          r = e.datasets[0],
                          s = a.data[n],
                          l = (s && s.custom) || {},
                          u = o.valueAtIndexOrDefault,
                          d = t.options.elements.arc;
                        return {
                          text: i,
                          fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                          strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                          lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth),
                          hidden: isNaN(r.data[n]) || a.data[n].hidden,
                          index: n
                        };
                      })
                    : [];
                }
              },
              onClick: function(t, e) {
                var i,
                  n,
                  a,
                  o = e.index,
                  r = this.chart;
                for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)
                  (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                r.update();
              }
            },
            cutoutPercentage: 50,
            rotation: -0.5 * Math.PI,
            circumference: 2 * Math.PI,
            tooltips: {
              callbacks: {
                title: function() {
                  return '';
                },
                label: function(t, e) {
                  var i = e.labels[t.index],
                    n = ': ' + e.datasets[t.datasetIndex].data[t.index];
                  return o.isArray(i) ? ((i = i.slice())[0] += n) : (i += n), i;
                }
              }
            }
          }),
            n._set('pie', o.clone(n.doughnut)),
            n._set('pie', { cutoutPercentage: 0 }),
            (e.exports = function(t) {
              t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                dataElementType: a.Arc,
                linkScales: o.noop,
                getRingIndex: function(t) {
                  for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                  return e;
                },
                update: function(t) {
                  var e = this,
                    i = e.chart,
                    n = i.chartArea,
                    a = i.options,
                    r = a.elements.arc,
                    s = n.right - n.left - r.borderWidth,
                    l = n.bottom - n.top - r.borderWidth,
                    u = Math.min(s, l),
                    d = { x: 0, y: 0 },
                    c = e.getMeta(),
                    h = a.cutoutPercentage,
                    f = a.circumference;
                  if (f < 2 * Math.PI) {
                    var g = a.rotation % (2 * Math.PI),
                      p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                      m = Math.cos(g),
                      v = Math.sin(g),
                      b = Math.cos(p),
                      x = Math.sin(p),
                      y = (g <= 0 && p >= 0) || (g <= 2 * Math.PI && 2 * Math.PI <= p),
                      k = (g <= 0.5 * Math.PI && 0.5 * Math.PI <= p) || (g <= 2.5 * Math.PI && 2.5 * Math.PI <= p),
                      M = (g <= -Math.PI && -Math.PI <= p) || (g <= Math.PI && Math.PI <= p),
                      w = (g <= 0.5 * -Math.PI && 0.5 * -Math.PI <= p) || (g <= 1.5 * Math.PI && 1.5 * Math.PI <= p),
                      S = h / 100,
                      C = M ? -1 : Math.min(m * (m < 0 ? 1 : S), b * (b < 0 ? 1 : S)),
                      _ = w ? -1 : Math.min(v * (v < 0 ? 1 : S), x * (x < 0 ? 1 : S)),
                      D = y ? 1 : Math.max(m * (m > 0 ? 1 : S), b * (b > 0 ? 1 : S)),
                      I = k ? 1 : Math.max(v * (v > 0 ? 1 : S), x * (x > 0 ? 1 : S)),
                      P = 0.5 * (D - C),
                      A = 0.5 * (I - _);
                    (u = Math.min(s / P, l / A)), (d = { x: -0.5 * (D + C), y: -0.5 * (I + _) });
                  }
                  (i.borderWidth = e.getMaxBorderWidth(c.data)),
                    (i.outerRadius = Math.max((u - i.borderWidth) / 2, 0)),
                    (i.innerRadius = Math.max(h ? (i.outerRadius / 100) * h : 0, 0)),
                    (i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount()),
                    (i.offsetX = d.x * i.outerRadius),
                    (i.offsetY = d.y * i.outerRadius),
                    (c.total = e.calculateTotal()),
                    (e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index)),
                    (e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0)),
                    o.each(c.data, function(i, n) {
                      e.updateElement(i, n, t);
                    });
                },
                updateElement: function(t, e, i) {
                  var n = this,
                    a = n.chart,
                    r = a.chartArea,
                    s = a.options,
                    l = s.animation,
                    u = (r.left + r.right) / 2,
                    d = (r.top + r.bottom) / 2,
                    c = s.rotation,
                    h = s.rotation,
                    f = n.getDataset(),
                    g =
                      i && l.animateRotate
                        ? 0
                        : t.hidden
                        ? 0
                        : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                    p = i && l.animateScale ? 0 : n.innerRadius,
                    m = i && l.animateScale ? 0 : n.outerRadius,
                    v = o.valueAtIndexOrDefault;
                  o.extend(t, {
                    _datasetIndex: n.index,
                    _index: e,
                    _model: {
                      x: u + a.offsetX,
                      y: d + a.offsetY,
                      startAngle: c,
                      endAngle: h,
                      circumference: g,
                      outerRadius: m,
                      innerRadius: p,
                      label: v(f.label, e, a.data.labels[e])
                    }
                  });
                  var b = t._model;
                  this.removeHoverStyle(t),
                    (i && l.animateRotate) ||
                      ((b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle),
                      (b.endAngle = b.startAngle + b.circumference)),
                    t.pivot();
                },
                removeHoverStyle: function(e) {
                  t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
                },
                calculateTotal: function() {
                  var t,
                    e = this.getDataset(),
                    i = this.getMeta(),
                    n = 0;
                  return (
                    o.each(i.data, function(i, a) {
                      (t = e.data[a]), isNaN(t) || i.hidden || (n += Math.abs(t));
                    }),
                    n
                  );
                },
                calculateCircumference: function(t) {
                  var e = this.getMeta().total;
                  return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
                },
                getMaxBorderWidth: function(t) {
                  for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++)
                    (e = t[r]._model ? t[r]._model.borderWidth : 0),
                      (n =
                        (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) >
                        (n = e > n ? e : n)
                          ? i
                          : n);
                  return n;
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      18: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('line', {
            showLines: !0,
            spanGaps: !1,
            hover: { mode: 'label' },
            scales: { xAxes: [{ type: 'category', id: 'x-axis-0' }], yAxes: [{ type: 'linear', id: 'y-axis-0' }] }
          }),
            (e.exports = function(t) {
              function e(t, e) {
                return o.valueOrDefault(t.showLine, e.showLines);
              }
              t.controllers.line = t.DatasetController.extend({
                datasetElementType: a.Line,
                dataElementType: a.Point,
                update: function(t) {
                  var i,
                    n,
                    a,
                    r = this,
                    s = r.getMeta(),
                    l = s.dataset,
                    u = s.data || [],
                    d = r.chart.options,
                    c = d.elements.line,
                    h = r.getScaleForId(s.yAxisID),
                    f = r.getDataset(),
                    g = e(f, d);
                  for (
                    g &&
                      ((a = l.custom || {}),
                      void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension),
                      (l._scale = h),
                      (l._datasetIndex = r.index),
                      (l._children = u),
                      (l._model = {
                        spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                        tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
                        backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
                        borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
                        borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
                        borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                        borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
                        borderDashOffset: a.borderDashOffset
                          ? a.borderDashOffset
                          : f.borderDashOffset || c.borderDashOffset,
                        borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                        fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
                        steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
                        cubicInterpolationMode: a.cubicInterpolationMode
                          ? a.cubicInterpolationMode
                          : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
                      }),
                      l.pivot()),
                      i = 0,
                      n = u.length;
                    i < n;
                    ++i
                  )
                    r.updateElement(u[i], i, t);
                  for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i)
                    u[i].pivot();
                },
                getPointBackgroundColor: function(t, e) {
                  var i = this.chart.options.elements.point.backgroundColor,
                    n = this.getDataset(),
                    a = t.custom || {};
                  return (
                    a.backgroundColor
                      ? (i = a.backgroundColor)
                      : n.pointBackgroundColor
                      ? (i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i))
                      : n.backgroundColor && (i = n.backgroundColor),
                    i
                  );
                },
                getPointBorderColor: function(t, e) {
                  var i = this.chart.options.elements.point.borderColor,
                    n = this.getDataset(),
                    a = t.custom || {};
                  return (
                    a.borderColor
                      ? (i = a.borderColor)
                      : n.pointBorderColor
                      ? (i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i))
                      : n.borderColor && (i = n.borderColor),
                    i
                  );
                },
                getPointBorderWidth: function(t, e) {
                  var i = this.chart.options.elements.point.borderWidth,
                    n = this.getDataset(),
                    a = t.custom || {};
                  return (
                    isNaN(a.borderWidth)
                      ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth)
                        ? (i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i))
                        : isNaN(n.borderWidth) || (i = n.borderWidth)
                      : (i = a.borderWidth),
                    i
                  );
                },
                updateElement: function(t, e, i) {
                  var n,
                    a,
                    r = this,
                    s = r.getMeta(),
                    l = t.custom || {},
                    u = r.getDataset(),
                    d = r.index,
                    c = u.data[e],
                    h = r.getScaleForId(s.yAxisID),
                    f = r.getScaleForId(s.xAxisID),
                    g = r.chart.options.elements.point;
                  void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius),
                    void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius),
                    (n = f.getPixelForValue('object' == typeof c ? c : NaN, e, d)),
                    (a = i ? h.getBasePixel() : r.calculatePointY(c, e, d)),
                    (t._xScale = f),
                    (t._yScale = h),
                    (t._datasetIndex = d),
                    (t._index = e),
                    (t._model = {
                      x: n,
                      y: a,
                      skip: l.skip || isNaN(n) || isNaN(a),
                      radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
                      pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
                      backgroundColor: r.getPointBackgroundColor(t, e),
                      borderColor: r.getPointBorderColor(t, e),
                      borderWidth: r.getPointBorderWidth(t, e),
                      tension: s.dataset._model ? s.dataset._model.tension : 0,
                      steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                      hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
                    });
                },
                calculatePointY: function(t, e, i) {
                  var n,
                    a,
                    o,
                    r = this.chart,
                    s = this.getMeta(),
                    l = this.getScaleForId(s.yAxisID),
                    u = 0,
                    d = 0;
                  if (l.options.stacked) {
                    for (n = 0; n < i; n++)
                      if (
                        ((a = r.data.datasets[n]),
                        'line' === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n))
                      ) {
                        var c = Number(l.getRightValue(a.data[e]));
                        c < 0 ? (d += c || 0) : (u += c || 0);
                      }
                    var h = Number(l.getRightValue(t));
                    return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h);
                  }
                  return l.getPixelForValue(t);
                },
                updateBezierControlPoints: function() {
                  var t,
                    e,
                    i,
                    n,
                    a = this.getMeta(),
                    r = this.chart.chartArea,
                    s = a.data || [];
                  function l(t, e, i) {
                    return Math.max(Math.min(t, i), e);
                  }
                  if (
                    (a.dataset._model.spanGaps &&
                      (s = s.filter(function(t) {
                        return !t._model.skip;
                      })),
                    'monotone' === a.dataset._model.cubicInterpolationMode)
                  )
                    o.splineCurveMonotone(s);
                  else
                    for (t = 0, e = s.length; t < e; ++t)
                      (i = s[t]._model),
                        (n = o.splineCurve(
                          o.previousItem(s, t)._model,
                          i,
                          o.nextItem(s, t)._model,
                          a.dataset._model.tension
                        )),
                        (i.controlPointPreviousX = n.previous.x),
                        (i.controlPointPreviousY = n.previous.y),
                        (i.controlPointNextX = n.next.x),
                        (i.controlPointNextY = n.next.y);
                  if (this.chart.options.elements.line.capBezierPoints)
                    for (t = 0, e = s.length; t < e; ++t)
                      ((i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right)),
                        (i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom)),
                        (i.controlPointNextX = l(i.controlPointNextX, r.left, r.right)),
                        (i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom));
                },
                draw: function() {
                  var t = this.chart,
                    i = this.getMeta(),
                    n = i.data || [],
                    a = t.chartArea,
                    r = n.length,
                    s = 0;
                  for (
                    o.canvas.clipArea(t.ctx, a),
                      e(this.getDataset(), t.options) && i.dataset.draw(),
                      o.canvas.unclipArea(t.ctx);
                    s < r;
                    ++s
                  )
                    n[s].draw(a);
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    n = t.custom || {},
                    a = t._model;
                  (a.radius =
                    n.hoverRadius ||
                    o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius)),
                    (a.backgroundColor =
                      n.hoverBackgroundColor ||
                      o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor))),
                    (a.borderColor =
                      n.hoverBorderColor ||
                      o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor))),
                    (a.borderWidth =
                      n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth));
                },
                removeHoverStyle: function(t) {
                  var e = this,
                    i = e.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    a = t.custom || {},
                    r = t._model;
                  void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius),
                    (r.radius =
                      a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius)),
                    (r.backgroundColor = e.getPointBackgroundColor(t, n)),
                    (r.borderColor = e.getPointBorderColor(t, n)),
                    (r.borderWidth = e.getPointBorderWidth(t, n));
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      19: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('polarArea', {
            scale: {
              type: 'radialLinear',
              angleLines: { display: !1 },
              gridLines: { circular: !0 },
              pointLabels: { display: !1 },
              ticks: { beginAtZero: !0 }
            },
            animation: { animateRotate: !0, animateScale: !0 },
            startAngle: -0.5 * Math.PI,
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              var i = t.data,
                n = i.datasets,
                a = i.labels;
              if (n.length)
                for (var o = 0; o < n[0].data.length; ++o)
                  e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'),
                    a[o] && e.push(a[o]),
                    e.push('</li>');
              return e.push('</ul>'), e.join('');
            },
            legend: {
              labels: {
                generateLabels: function(t) {
                  var e = t.data;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map(function(i, n) {
                        var a = t.getDatasetMeta(0),
                          r = e.datasets[0],
                          s = a.data[n].custom || {},
                          l = o.valueAtIndexOrDefault,
                          u = t.options.elements.arc;
                        return {
                          text: i,
                          fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor),
                          strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor),
                          lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth),
                          hidden: isNaN(r.data[n]) || a.data[n].hidden,
                          index: n
                        };
                      })
                    : [];
                }
              },
              onClick: function(t, e) {
                var i,
                  n,
                  a,
                  o = e.index,
                  r = this.chart;
                for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)
                  (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                r.update();
              }
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return '';
                },
                label: function(t, e) {
                  return e.labels[t.index] + ': ' + t.yLabel;
                }
              }
            }
          }),
            (e.exports = function(t) {
              t.controllers.polarArea = t.DatasetController.extend({
                dataElementType: a.Arc,
                linkScales: o.noop,
                update: function(t) {
                  var e = this,
                    i = e.chart,
                    n = i.chartArea,
                    a = e.getMeta(),
                    r = i.options,
                    s = r.elements.arc,
                    l = Math.min(n.right - n.left, n.bottom - n.top);
                  (i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0)),
                    (i.innerRadius = Math.max(r.cutoutPercentage ? (i.outerRadius / 100) * r.cutoutPercentage : 1, 0)),
                    (i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount()),
                    (e.outerRadius = i.outerRadius - i.radiusLength * e.index),
                    (e.innerRadius = e.outerRadius - i.radiusLength),
                    (a.count = e.countVisibleElements()),
                    o.each(a.data, function(i, n) {
                      e.updateElement(i, n, t);
                    });
                },
                updateElement: function(t, e, i) {
                  for (
                    var n = this,
                      a = n.chart,
                      r = n.getDataset(),
                      s = a.options,
                      l = s.animation,
                      u = a.scale,
                      d = a.data.labels,
                      c = n.calculateCircumference(r.data[e]),
                      h = u.xCenter,
                      f = u.yCenter,
                      g = 0,
                      p = n.getMeta(),
                      m = 0;
                    m < e;
                    ++m
                  )
                    isNaN(r.data[m]) || p.data[m].hidden || ++g;
                  var v = s.startAngle,
                    b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                    x = v + c * g,
                    y = x + (t.hidden ? 0 : c),
                    k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
                  o.extend(t, {
                    _datasetIndex: n.index,
                    _index: e,
                    _scale: u,
                    _model: {
                      x: h,
                      y: f,
                      innerRadius: 0,
                      outerRadius: i ? k : b,
                      startAngle: i && l.animateRotate ? v : x,
                      endAngle: i && l.animateRotate ? v : y,
                      label: o.valueAtIndexOrDefault(d, e, d[e])
                    }
                  }),
                    n.removeHoverStyle(t),
                    t.pivot();
                },
                removeHoverStyle: function(e) {
                  t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
                },
                countVisibleElements: function() {
                  var t = this.getDataset(),
                    e = this.getMeta(),
                    i = 0;
                  return (
                    o.each(e.data, function(e, n) {
                      isNaN(t.data[n]) || e.hidden || i++;
                    }),
                    i
                  );
                },
                calculateCircumference: function(t) {
                  var e = this.getMeta().count;
                  return e > 0 && !isNaN(t) ? (2 * Math.PI) / e : 0;
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      20: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('radar', { scale: { type: 'radialLinear' }, elements: { line: { tension: 0 } } }),
            (e.exports = function(t) {
              t.controllers.radar = t.DatasetController.extend({
                datasetElementType: a.Line,
                dataElementType: a.Point,
                linkScales: o.noop,
                update: function(t) {
                  var e = this,
                    i = e.getMeta(),
                    n = i.dataset,
                    a = i.data,
                    r = n.custom || {},
                    s = e.getDataset(),
                    l = e.chart.options.elements.line,
                    u = e.chart.scale;
                  void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension),
                    o.extend(i.dataset, {
                      _datasetIndex: e.index,
                      _scale: u,
                      _children: a,
                      _loop: !0,
                      _model: {
                        tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
                        backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                        borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                        borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                        fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                        borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                        borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                        borderDashOffset: r.borderDashOffset
                          ? r.borderDashOffset
                          : s.borderDashOffset || l.borderDashOffset,
                        borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                      }
                    }),
                    i.dataset.pivot(),
                    o.each(
                      a,
                      function(i, n) {
                        e.updateElement(i, n, t);
                      },
                      e
                    ),
                    e.updateBezierControlPoints();
                },
                updateElement: function(t, e, i) {
                  var n = this,
                    a = t.custom || {},
                    r = n.getDataset(),
                    s = n.chart.scale,
                    l = n.chart.options.elements.point,
                    u = s.getPointPositionForValue(e, r.data[e]);
                  void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius),
                    void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius),
                    o.extend(t, {
                      _datasetIndex: n.index,
                      _index: e,
                      _scale: s,
                      _model: {
                        x: i ? s.xCenter : u.x,
                        y: i ? s.yCenter : u.y,
                        tension: a.tension
                          ? a.tension
                          : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                        radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                        backgroundColor: a.backgroundColor
                          ? a.backgroundColor
                          : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                        borderColor: a.borderColor
                          ? a.borderColor
                          : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                        borderWidth: a.borderWidth
                          ? a.borderWidth
                          : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                        pointStyle: a.pointStyle
                          ? a.pointStyle
                          : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                        hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
                      }
                    }),
                    (t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y));
                },
                updateBezierControlPoints: function() {
                  var t = this.chart.chartArea,
                    e = this.getMeta();
                  o.each(e.data, function(i, n) {
                    var a = i._model,
                      r = o.splineCurve(
                        o.previousItem(e.data, n, !0)._model,
                        a,
                        o.nextItem(e.data, n, !0)._model,
                        a.tension
                      );
                    (a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left)),
                      (a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top)),
                      (a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left)),
                      (a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top)),
                      i.pivot();
                  });
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    i = t.custom || {},
                    n = t._index,
                    a = t._model;
                  (a.radius = i.hoverRadius
                    ? i.hoverRadius
                    : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)),
                    (a.backgroundColor = i.hoverBackgroundColor
                      ? i.hoverBackgroundColor
                      : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor))),
                    (a.borderColor = i.hoverBorderColor
                      ? i.hoverBorderColor
                      : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor))),
                    (a.borderWidth = i.hoverBorderWidth
                      ? i.hoverBorderWidth
                      : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth));
                },
                removeHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    i = t.custom || {},
                    n = t._index,
                    a = t._model,
                    r = this.chart.options.elements.point;
                  (a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius)),
                    (a.backgroundColor = i.backgroundColor
                      ? i.backgroundColor
                      : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor)),
                    (a.borderColor = i.borderColor
                      ? i.borderColor
                      : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor)),
                    (a.borderWidth = i.borderWidth
                      ? i.borderWidth
                      : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth));
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      21: [
        function(t, e, i) {
          'use strict';
          t(25)._set('scatter', {
            hover: { mode: 'single' },
            scales: {
              xAxes: [{ id: 'x-axis-1', type: 'linear', position: 'bottom' }],
              yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left' }]
            },
            showLines: !1,
            tooltips: {
              callbacks: {
                title: function() {
                  return '';
                },
                label: function(t) {
                  return '(' + t.xLabel + ', ' + t.yLabel + ')';
                }
              }
            }
          }),
            (e.exports = function(t) {
              t.controllers.scatter = t.controllers.line;
            });
        },
        { 25: 25 }
      ],
      22: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45);
          n._set('global', {
            animation: { duration: 1e3, easing: 'easeOutQuart', onProgress: o.noop, onComplete: o.noop }
          }),
            (e.exports = function(t) {
              (t.Animation = a.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: '',
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
              })),
                (t.animationService = {
                  frameDuration: 17,
                  animations: [],
                  dropFrames: 0,
                  request: null,
                  addAnimation: function(t, e, i, n) {
                    var a,
                      o,
                      r = this.animations;
                    for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
                      if (r[a].chart === t) return void (r[a] = e);
                    r.push(e), 1 === r.length && this.requestAnimationFrame();
                  },
                  cancelAnimation: function(t) {
                    var e = o.findIndex(this.animations, function(e) {
                      return e.chart === t;
                    });
                    -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
                  },
                  requestAnimationFrame: function() {
                    var t = this;
                    null === t.request &&
                      (t.request = o.requestAnimFrame.call(window, function() {
                        (t.request = null), t.startDigest();
                      }));
                  },
                  startDigest: function() {
                    var t = this,
                      e = Date.now(),
                      i = 0;
                    t.dropFrames > 1 && ((i = Math.floor(t.dropFrames)), (t.dropFrames = t.dropFrames % 1)),
                      t.advance(1 + i);
                    var n = Date.now();
                    (t.dropFrames += (n - e) / t.frameDuration), t.animations.length > 0 && t.requestAnimationFrame();
                  },
                  advance: function(t) {
                    for (var e, i, n = this.animations, a = 0; a < n.length; )
                      (i = (e = n[a]).chart),
                        (e.currentStep = (e.currentStep || 0) + t),
                        (e.currentStep = Math.min(e.currentStep, e.numSteps)),
                        o.callback(e.render, [i, e], i),
                        o.callback(e.onAnimationProgress, [e], i),
                        e.currentStep >= e.numSteps
                          ? (o.callback(e.onAnimationComplete, [e], i), (i.animating = !1), n.splice(a, 1))
                          : ++a;
                  }
                }),
                Object.defineProperty(t.Animation.prototype, 'animationObject', {
                  get: function() {
                    return this;
                  }
                }),
                Object.defineProperty(t.Animation.prototype, 'chartInstance', {
                  get: function() {
                    return this.chart;
                  },
                  set: function(t) {
                    this.chart = t;
                  }
                });
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      23: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(45),
            o = t(28),
            r = t(30),
            s = t(48),
            l = t(31);
          e.exports = function(t) {
            function e(t) {
              return 'top' === t || 'bottom' === t;
            }
            (t.types = {}),
              (t.instances = {}),
              (t.controllers = {}),
              a.extend(t.prototype, {
                construct: function(e, i) {
                  var o,
                    r,
                    l = this;
                  ((r = (o = (o = i) || {}).data = o.data || {}).datasets = r.datasets || []),
                    (r.labels = r.labels || []),
                    (o.options = a.configMerge(n.global, n[o.type], o.options || {})),
                    (i = o);
                  var u = s.acquireContext(e, i),
                    d = u && u.canvas,
                    c = d && d.height,
                    h = d && d.width;
                  (l.id = a.uid()),
                    (l.ctx = u),
                    (l.canvas = d),
                    (l.config = i),
                    (l.width = h),
                    (l.height = c),
                    (l.aspectRatio = c ? h / c : null),
                    (l.options = i.options),
                    (l._bufferedRender = !1),
                    (l.chart = l),
                    (l.controller = l),
                    (t.instances[l.id] = l),
                    Object.defineProperty(l, 'data', {
                      get: function() {
                        return l.config.data;
                      },
                      set: function(t) {
                        l.config.data = t;
                      }
                    }),
                    u && d
                      ? (l.initialize(), l.update())
                      : console.error("Failed to create chart: can't acquire context from the given item");
                },
                initialize: function() {
                  var t = this;
                  return (
                    l.notify(t, 'beforeInit'),
                    a.retinaScale(t, t.options.devicePixelRatio),
                    t.bindEvents(),
                    t.options.responsive && t.resize(!0),
                    t.ensureScalesHaveIDs(),
                    t.buildOrUpdateScales(),
                    t.initToolTip(),
                    l.notify(t, 'afterInit'),
                    t
                  );
                },
                clear: function() {
                  return a.canvas.clear(this), this;
                },
                stop: function() {
                  return t.animationService.cancelAnimation(this), this;
                },
                resize: function(t) {
                  var e = this,
                    i = e.options,
                    n = e.canvas,
                    o = (i.maintainAspectRatio && e.aspectRatio) || null,
                    r = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                    s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(n)));
                  if (
                    (e.width !== r || e.height !== s) &&
                    ((n.width = e.width = r),
                    (n.height = e.height = s),
                    (n.style.width = r + 'px'),
                    (n.style.height = s + 'px'),
                    a.retinaScale(e, i.devicePixelRatio),
                    !t)
                  ) {
                    var u = { width: r, height: s };
                    l.notify(e, 'resize', [u]),
                      e.options.onResize && e.options.onResize(e, u),
                      e.stop(),
                      e.update(e.options.responsiveAnimationDuration);
                  }
                },
                ensureScalesHaveIDs: function() {
                  var t = this.options,
                    e = t.scales || {},
                    i = t.scale;
                  a.each(e.xAxes, function(t, e) {
                    t.id = t.id || 'x-axis-' + e;
                  }),
                    a.each(e.yAxes, function(t, e) {
                      t.id = t.id || 'y-axis-' + e;
                    }),
                    i && (i.id = i.id || 'scale');
                },
                buildOrUpdateScales: function() {
                  var i = this,
                    n = i.options,
                    o = i.scales || {},
                    r = [],
                    s = Object.keys(o).reduce(function(t, e) {
                      return (t[e] = !1), t;
                    }, {});
                  n.scales &&
                    (r = r.concat(
                      (n.scales.xAxes || []).map(function(t) {
                        return { options: t, dtype: 'category', dposition: 'bottom' };
                      }),
                      (n.scales.yAxes || []).map(function(t) {
                        return { options: t, dtype: 'linear', dposition: 'left' };
                      })
                    )),
                    n.scale &&
                      r.push({ options: n.scale, dtype: 'radialLinear', isDefault: !0, dposition: 'chartArea' }),
                    a.each(r, function(n) {
                      var r = n.options,
                        l = r.id,
                        u = a.valueOrDefault(r.type, n.dtype);
                      e(r.position) !== e(n.dposition) && (r.position = n.dposition), (s[l] = !0);
                      var d = null;
                      if (l in o && o[l].type === u) ((d = o[l]).options = r), (d.ctx = i.ctx), (d.chart = i);
                      else {
                        var c = t.scaleService.getScaleConstructor(u);
                        if (!c) return;
                        (d = new c({ id: l, type: u, options: r, ctx: i.ctx, chart: i })), (o[d.id] = d);
                      }
                      d.mergeTicksOptions(), n.isDefault && (i.scale = d);
                    }),
                    a.each(s, function(t, e) {
                      t || delete o[e];
                    }),
                    (i.scales = o),
                    t.scaleService.addScalesToLayout(this);
                },
                buildOrUpdateControllers: function() {
                  var e = this,
                    i = [],
                    n = [];
                  return (
                    a.each(
                      e.data.datasets,
                      function(a, o) {
                        var r = e.getDatasetMeta(o),
                          s = a.type || e.config.type;
                        if (
                          (r.type && r.type !== s && (e.destroyDatasetMeta(o), (r = e.getDatasetMeta(o))),
                          (r.type = s),
                          i.push(r.type),
                          r.controller)
                        )
                          r.controller.updateIndex(o), r.controller.linkScales();
                        else {
                          var l = t.controllers[r.type];
                          if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                          (r.controller = new l(e, o)), n.push(r.controller);
                        }
                      },
                      e
                    ),
                    n
                  );
                },
                resetElements: function() {
                  var t = this;
                  a.each(
                    t.data.datasets,
                    function(e, i) {
                      t.getDatasetMeta(i).controller.reset();
                    },
                    t
                  );
                },
                reset: function() {
                  this.resetElements(), this.tooltip.initialize();
                },
                update: function(e) {
                  var i,
                    n,
                    o = this;
                  if (
                    ((e && 'object' == typeof e) || (e = { duration: e, lazy: arguments[1] }),
                    (n = (i = o).options),
                    a.each(i.scales, function(t) {
                      r.removeBox(i, t);
                    }),
                    (n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n)),
                    (i.options = i.config.options = n),
                    i.ensureScalesHaveIDs(),
                    i.buildOrUpdateScales(),
                    (i.tooltip._options = n.tooltips),
                    i.tooltip.initialize(),
                    l._invalidate(o),
                    !1 !== l.notify(o, 'beforeUpdate'))
                  ) {
                    o.tooltip._data = o.data;
                    var s = o.buildOrUpdateControllers();
                    a.each(
                      o.data.datasets,
                      function(t, e) {
                        o.getDatasetMeta(e).controller.buildOrUpdateElements();
                      },
                      o
                    ),
                      o.updateLayout(),
                      o.options.animation &&
                        o.options.animation.duration &&
                        a.each(s, function(t) {
                          t.reset();
                        }),
                      o.updateDatasets(),
                      o.tooltip.initialize(),
                      (o.lastActive = []),
                      l.notify(o, 'afterUpdate'),
                      o._bufferedRender
                        ? (o._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy })
                        : o.render(e);
                  }
                },
                updateLayout: function() {
                  !1 !== l.notify(this, 'beforeLayout') &&
                    (r.update(this, this.width, this.height),
                    l.notify(this, 'afterScaleUpdate'),
                    l.notify(this, 'afterLayout'));
                },
                updateDatasets: function() {
                  if (!1 !== l.notify(this, 'beforeDatasetsUpdate')) {
                    for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                    l.notify(this, 'afterDatasetsUpdate');
                  }
                },
                updateDataset: function(t) {
                  var e = this.getDatasetMeta(t),
                    i = { meta: e, index: t };
                  !1 !== l.notify(this, 'beforeDatasetUpdate', [i]) &&
                    (e.controller.update(), l.notify(this, 'afterDatasetUpdate', [i]));
                },
                render: function(e) {
                  var i = this;
                  (e && 'object' == typeof e) || (e = { duration: e, lazy: arguments[1] });
                  var n = e.duration,
                    o = e.lazy;
                  if (!1 !== l.notify(i, 'beforeRender')) {
                    var r = i.options.animation,
                      s = function(t) {
                        l.notify(i, 'afterRender'), a.callback(r && r.onComplete, [t], i);
                      };
                    if (r && ((void 0 !== n && 0 !== n) || (void 0 === n && 0 !== r.duration))) {
                      var u = new t.Animation({
                        numSteps: (n || r.duration) / 16.66,
                        easing: e.easing || r.easing,
                        render: function(t, e) {
                          var i = a.easing.effects[e.easing],
                            n = e.currentStep,
                            o = n / e.numSteps;
                          t.draw(i(o), o, n);
                        },
                        onAnimationProgress: r.onProgress,
                        onAnimationComplete: s
                      });
                      t.animationService.addAnimation(i, u, n, o);
                    } else i.draw(), s(new t.Animation({ numSteps: 0, chart: i }));
                    return i;
                  }
                },
                draw: function(t) {
                  var e = this;
                  e.clear(),
                    a.isNullOrUndef(t) && (t = 1),
                    e.transition(t),
                    !1 !== l.notify(e, 'beforeDraw', [t]) &&
                      (a.each(
                        e.boxes,
                        function(t) {
                          t.draw(e.chartArea);
                        },
                        e
                      ),
                      e.scale && e.scale.draw(),
                      e.drawDatasets(t),
                      e._drawTooltip(t),
                      l.notify(e, 'afterDraw', [t]));
                },
                transition: function(t) {
                  for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e)
                    this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                  this.tooltip.transition(t);
                },
                drawDatasets: function(t) {
                  var e = this;
                  if (!1 !== l.notify(e, 'beforeDatasetsDraw', [t])) {
                    for (var i = (e.data.datasets || []).length - 1; i >= 0; --i)
                      e.isDatasetVisible(i) && e.drawDataset(i, t);
                    l.notify(e, 'afterDatasetsDraw', [t]);
                  }
                },
                drawDataset: function(t, e) {
                  var i = this.getDatasetMeta(t),
                    n = { meta: i, index: t, easingValue: e };
                  !1 !== l.notify(this, 'beforeDatasetDraw', [n]) &&
                    (i.controller.draw(e), l.notify(this, 'afterDatasetDraw', [n]));
                },
                _drawTooltip: function(t) {
                  var e = this.tooltip,
                    i = { tooltip: e, easingValue: t };
                  !1 !== l.notify(this, 'beforeTooltipDraw', [i]) &&
                    (e.draw(), l.notify(this, 'afterTooltipDraw', [i]));
                },
                getElementAtEvent: function(t) {
                  return o.modes.single(this, t);
                },
                getElementsAtEvent: function(t) {
                  return o.modes.label(this, t, { intersect: !0 });
                },
                getElementsAtXAxis: function(t) {
                  return o.modes['x-axis'](this, t, { intersect: !0 });
                },
                getElementsAtEventForMode: function(t, e, i) {
                  var n = o.modes[e];
                  return 'function' == typeof n ? n(this, t, i) : [];
                },
                getDatasetAtEvent: function(t) {
                  return o.modes.dataset(this, t, { intersect: !0 });
                },
                getDatasetMeta: function(t) {
                  var e = this.data.datasets[t];
                  e._meta || (e._meta = {});
                  var i = e._meta[this.id];
                  return (
                    i ||
                      (i = e._meta[this.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null
                      }),
                    i
                  );
                },
                getVisibleDatasetCount: function() {
                  for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                  return t;
                },
                isDatasetVisible: function(t) {
                  var e = this.getDatasetMeta(t);
                  return 'boolean' == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
                },
                generateLegend: function() {
                  return this.options.legendCallback(this);
                },
                destroyDatasetMeta: function(t) {
                  var e = this.id,
                    i = this.data.datasets[t],
                    n = i._meta && i._meta[e];
                  n && (n.controller.destroy(), delete i._meta[e]);
                },
                destroy: function() {
                  var e,
                    i,
                    n = this,
                    o = n.canvas;
                  for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
                  o &&
                    (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), (n.canvas = null), (n.ctx = null)),
                    l.notify(n, 'destroy'),
                    delete t.instances[n.id];
                },
                toBase64Image: function() {
                  return this.canvas.toDataURL.apply(this.canvas, arguments);
                },
                initToolTip: function() {
                  var e = this;
                  e.tooltip = new t.Tooltip(
                    { _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips },
                    e
                  );
                },
                bindEvents: function() {
                  var t = this,
                    e = (t._listeners = {}),
                    i = function() {
                      t.eventHandler.apply(t, arguments);
                    };
                  a.each(t.options.events, function(n) {
                    s.addEventListener(t, n, i), (e[n] = i);
                  }),
                    t.options.responsive &&
                      ((i = function() {
                        t.resize();
                      }),
                      s.addEventListener(t, 'resize', i),
                      (e.resize = i));
                },
                unbindEvents: function() {
                  var t = this,
                    e = t._listeners;
                  e &&
                    (delete t._listeners,
                    a.each(e, function(e, i) {
                      s.removeEventListener(t, i, e);
                    }));
                },
                updateHoverStyle: function(t, e, i) {
                  var n,
                    a,
                    o,
                    r = i ? 'setHoverStyle' : 'removeHoverStyle';
                  for (a = 0, o = t.length; a < o; ++a)
                    (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n);
                },
                eventHandler: function(t) {
                  var e = this,
                    i = e.tooltip;
                  if (!1 !== l.notify(e, 'beforeEvent', [t])) {
                    (e._bufferedRender = !0), (e._bufferedRequest = null);
                    var n = e.handleEvent(t);
                    i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, 'afterEvent', [t]);
                    var a = e._bufferedRequest;
                    return (
                      a
                        ? e.render(a)
                        : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)),
                      (e._bufferedRender = !1),
                      (e._bufferedRequest = null),
                      e
                    );
                  }
                },
                handleEvent: function(t) {
                  var e,
                    i = this,
                    n = i.options || {},
                    o = n.hover;
                  return (
                    (i.lastActive = i.lastActive || []),
                    'mouseout' === t.type ? (i.active = []) : (i.active = i.getElementsAtEventForMode(t, o.mode, o)),
                    a.callback(n.onHover || n.hover.onHover, [t.native, i.active], i),
                    ('mouseup' !== t.type && 'click' !== t.type) ||
                      (n.onClick && n.onClick.call(i, t.native, i.active)),
                    i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1),
                    i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0),
                    (e = !a.arrayEquals(i.active, i.lastActive)),
                    (i.lastActive = i.active),
                    e
                  );
                }
              }),
              (t.Controller = t);
          };
        },
        { 25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48 }
      ],
      24: [
        function(t, e, i) {
          'use strict';
          var n = t(45);
          e.exports = function(t) {
            var e = ['push', 'pop', 'shift', 'splice', 'unshift'];
            function i(t, i) {
              var n = t._chartjs;
              if (n) {
                var a = n.listeners,
                  o = a.indexOf(i);
                -1 !== o && a.splice(o, 1),
                  a.length > 0 ||
                    (e.forEach(function(e) {
                      delete t[e];
                    }),
                    delete t._chartjs);
              }
            }
            (t.DatasetController = function(t, e) {
              this.initialize(t, e);
            }),
              n.extend(t.DatasetController.prototype, {
                datasetElementType: null,
                dataElementType: null,
                initialize: function(t, e) {
                  (this.chart = t), (this.index = e), this.linkScales(), this.addElements();
                },
                updateIndex: function(t) {
                  this.index = t;
                },
                linkScales: function() {
                  var t = this,
                    e = t.getMeta(),
                    i = t.getDataset();
                  (null !== e.xAxisID && e.xAxisID in t.chart.scales) ||
                    (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id),
                    (null !== e.yAxisID && e.yAxisID in t.chart.scales) ||
                      (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
                },
                getDataset: function() {
                  return this.chart.data.datasets[this.index];
                },
                getMeta: function() {
                  return this.chart.getDatasetMeta(this.index);
                },
                getScaleForId: function(t) {
                  return this.chart.scales[t];
                },
                reset: function() {
                  this.update(!0);
                },
                destroy: function() {
                  this._data && i(this._data, this);
                },
                createMetaDataset: function() {
                  var t = this.datasetElementType;
                  return t && new t({ _chart: this.chart, _datasetIndex: this.index });
                },
                createMetaData: function(t) {
                  var e = this.dataElementType;
                  return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t });
                },
                addElements: function() {
                  var t,
                    e,
                    i = this.getMeta(),
                    n = this.getDataset().data || [],
                    a = i.data;
                  for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                  i.dataset = i.dataset || this.createMetaDataset();
                },
                addElementAndReset: function(t) {
                  var e = this.createMetaData(t);
                  this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
                },
                buildOrUpdateElements: function() {
                  var t,
                    a,
                    o = this,
                    r = o.getDataset(),
                    s = r.data || (r.data = []);
                  o._data !== s &&
                    (o._data && i(o._data, o),
                    (a = o),
                    (t = s)._chartjs
                      ? t._chartjs.listeners.push(a)
                      : (Object.defineProperty(t, '_chartjs', {
                          configurable: !0,
                          enumerable: !1,
                          value: { listeners: [a] }
                        }),
                        e.forEach(function(e) {
                          var i = 'onData' + e.charAt(0).toUpperCase() + e.slice(1),
                            a = t[e];
                          Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                              var e = Array.prototype.slice.call(arguments),
                                o = a.apply(this, e);
                              return (
                                n.each(t._chartjs.listeners, function(t) {
                                  'function' == typeof t[i] && t[i].apply(t, e);
                                }),
                                o
                              );
                            }
                          });
                        })),
                    (o._data = s)),
                    o.resyncElements();
                },
                update: n.noop,
                transition: function(t) {
                  for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                  e.dataset && e.dataset.transition(t);
                },
                draw: function() {
                  var t = this.getMeta(),
                    e = t.data || [],
                    i = e.length,
                    n = 0;
                  for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw();
                },
                removeHoverStyle: function(t, e) {
                  var i = this.chart.data.datasets[t._datasetIndex],
                    a = t._index,
                    o = t.custom || {},
                    r = n.valueAtIndexOrDefault,
                    s = t._model;
                  (s.backgroundColor = o.backgroundColor
                    ? o.backgroundColor
                    : r(i.backgroundColor, a, e.backgroundColor)),
                    (s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor)),
                    (s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth));
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    a = t.custom || {},
                    o = n.valueAtIndexOrDefault,
                    r = n.getHoverColor,
                    s = t._model;
                  (s.backgroundColor = a.hoverBackgroundColor
                    ? a.hoverBackgroundColor
                    : o(e.hoverBackgroundColor, i, r(s.backgroundColor))),
                    (s.borderColor = a.hoverBorderColor
                      ? a.hoverBorderColor
                      : o(e.hoverBorderColor, i, r(s.borderColor))),
                    (s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth));
                },
                resyncElements: function() {
                  var t = this.getMeta(),
                    e = this.getDataset().data,
                    i = t.data.length,
                    n = e.length;
                  n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
                },
                insertElements: function(t, e) {
                  for (var i = 0; i < e; ++i) this.addElementAndReset(t + i);
                },
                onDataPush: function() {
                  this.insertElements(this.getDataset().data.length - 1, arguments.length);
                },
                onDataPop: function() {
                  this.getMeta().data.pop();
                },
                onDataShift: function() {
                  this.getMeta().data.shift();
                },
                onDataSplice: function(t, e) {
                  this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
                },
                onDataUnshift: function() {
                  this.insertElements(0, arguments.length);
                }
              }),
              (t.DatasetController.extend = n.inherits);
          };
        },
        { 45: 45 }
      ],
      25: [
        function(t, e, i) {
          'use strict';
          var n = t(45);
          e.exports = {
            _set: function(t, e) {
              return n.merge(this[t] || (this[t] = {}), e);
            }
          };
        },
        { 45: 45 }
      ],
      26: [
        function(t, e, i) {
          'use strict';
          var n = t(3),
            a = t(45);
          var o = function(t) {
            a.extend(this, t), this.initialize.apply(this, arguments);
          };
          a.extend(o.prototype, {
            initialize: function() {
              this.hidden = !1;
            },
            pivot: function() {
              var t = this;
              return t._view || (t._view = a.clone(t._model)), (t._start = {}), t;
            },
            transition: function(t) {
              var e = this,
                i = e._model,
                a = e._start,
                o = e._view;
              return i && 1 !== t
                ? (o || (o = e._view = {}),
                  a || (a = e._start = {}),
                  (function(t, e, i, a) {
                    var o,
                      r,
                      s,
                      l,
                      u,
                      d,
                      c,
                      h,
                      f,
                      g = Object.keys(i);
                    for (o = 0, r = g.length; o < r; ++o)
                      if (((d = i[(s = g[o])]), e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && '_' !== s[0])) {
                        if ((t.hasOwnProperty(s) || (t[s] = l), (c = typeof d) == typeof (u = t[s])))
                          if ('string' === c) {
                            if ((h = n(u)).valid && (f = n(d)).valid) {
                              e[s] = f.mix(h, a).rgbString();
                              continue;
                            }
                          } else if ('number' === c && isFinite(u) && isFinite(d)) {
                            e[s] = u + (d - u) * a;
                            continue;
                          }
                        e[s] = d;
                      }
                  })(a, o, i, t),
                  e)
                : ((e._view = i), (e._start = null), e);
            },
            tooltipPosition: function() {
              return { x: this._model.x, y: this._model.y };
            },
            hasValue: function() {
              return a.isNumber(this._model.x) && a.isNumber(this._model.y);
            }
          }),
            (o.extend = a.inherits),
            (e.exports = o);
        },
        { 3: 3, 45: 45 }
      ],
      27: [
        function(t, e, i) {
          'use strict';
          var n = t(3),
            a = t(25),
            o = t(45);
          e.exports = function(t) {
            function e(t, e, i) {
              var n;
              return (
                'string' == typeof t
                  ? ((n = parseInt(t, 10)), -1 !== t.indexOf('%') && (n = (n / 100) * e.parentNode[i]))
                  : (n = t),
                n
              );
            }
            function i(t) {
              return null != t && 'none' !== t;
            }
            function r(t, n, a) {
              var o = document.defaultView,
                r = t.parentNode,
                s = o.getComputedStyle(t)[n],
                l = o.getComputedStyle(r)[n],
                u = i(s),
                d = i(l),
                c = Number.POSITIVE_INFINITY;
              return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : 'none';
            }
            (o.configMerge = function() {
              return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, i, n, a) {
                  var r = i[e] || {},
                    s = n[e];
                  'scales' === e
                    ? (i[e] = o.scaleMerge(r, s))
                    : 'scale' === e
                    ? (i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]))
                    : o._merger(e, i, n, a);
                }
              });
            }),
              (o.scaleMerge = function() {
                return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                  merger: function(e, i, n, a) {
                    if ('xAxes' === e || 'yAxes' === e) {
                      var r,
                        s,
                        l,
                        u = n[e].length;
                      for (i[e] || (i[e] = []), r = 0; r < u; ++r)
                        (l = n[e][r]),
                          (s = o.valueOrDefault(l.type, 'xAxes' === e ? 'category' : 'linear')),
                          r >= i[e].length && i[e].push({}),
                          !i[e][r].type || (l.type && l.type !== i[e][r].type)
                            ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l])
                            : o.merge(i[e][r], l);
                    } else o._merger(e, i, n, a);
                  }
                });
              }),
              (o.where = function(t, e) {
                if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                var i = [];
                return (
                  o.each(t, function(t) {
                    e(t) && i.push(t);
                  }),
                  i
                );
              }),
              (o.findIndex = Array.prototype.findIndex
                ? function(t, e, i) {
                    return t.findIndex(e, i);
                  }
                : function(t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, a = t.length; n < a; ++n) if (e.call(i, t[n], n, t)) return n;
                    return -1;
                  }),
              (o.findNextWhere = function(t, e, i) {
                o.isNullOrUndef(i) && (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                  var a = t[n];
                  if (e(a)) return a;
                }
              }),
              (o.findPreviousWhere = function(t, e, i) {
                o.isNullOrUndef(i) && (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                  var a = t[n];
                  if (e(a)) return a;
                }
              }),
              (o.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
              }),
              (o.almostEquals = function(t, e, i) {
                return Math.abs(t - e) < i;
              }),
              (o.almostWhole = function(t, e) {
                var i = Math.round(t);
                return i - e < t && i + e > t;
              }),
              (o.max = function(t) {
                return t.reduce(function(t, e) {
                  return isNaN(e) ? t : Math.max(t, e);
                }, Number.NEGATIVE_INFINITY);
              }),
              (o.min = function(t) {
                return t.reduce(function(t, e) {
                  return isNaN(e) ? t : Math.min(t, e);
                }, Number.POSITIVE_INFINITY);
              }),
              (o.sign = Math.sign
                ? function(t) {
                    return Math.sign(t);
                  }
                : function(t) {
                    return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                  }),
              (o.log10 = Math.log10
                ? function(t) {
                    return Math.log10(t);
                  }
                : function(t) {
                    var e = Math.log(t) * Math.LOG10E,
                      i = Math.round(e);
                    return t === Math.pow(10, i) ? i : e;
                  }),
              (o.toRadians = function(t) {
                return t * (Math.PI / 180);
              }),
              (o.toDegrees = function(t) {
                return t * (180 / Math.PI);
              }),
              (o.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                  n = e.y - t.y,
                  a = Math.sqrt(i * i + n * n),
                  o = Math.atan2(n, i);
                return o < -0.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: a };
              }),
              (o.distanceBetweenPoints = function(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
              }),
              (o.aliasPixel = function(t) {
                return t % 2 == 0 ? 0 : 0.5;
              }),
              (o.splineCurve = function(t, e, i, n) {
                var a = t.skip ? e : t,
                  o = e,
                  r = i.skip ? e : i,
                  s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                  l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                  u = s / (s + l),
                  d = l / (s + l),
                  c = n * (u = isNaN(u) ? 0 : u),
                  h = n * (d = isNaN(d) ? 0 : d);
                return {
                  previous: { x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y) },
                  next: { x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y) }
                };
              }),
              (o.EPSILON = Number.EPSILON || 1e-14),
              (o.splineCurveMonotone = function(t) {
                var e,
                  i,
                  n,
                  a,
                  r,
                  s,
                  l,
                  u,
                  d,
                  c = (t || []).map(function(t) {
                    return { model: t._model, deltaK: 0, mK: 0 };
                  }),
                  h = c.length;
                for (e = 0; e < h; ++e)
                  if (!(n = c[e]).model.skip) {
                    if (((i = e > 0 ? c[e - 1] : null), (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip)) {
                      var f = a.model.x - n.model.x;
                      n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0;
                    }
                    !i || i.model.skip
                      ? (n.mK = n.deltaK)
                      : !a || a.model.skip
                      ? (n.mK = i.deltaK)
                      : this.sign(i.deltaK) !== this.sign(n.deltaK)
                      ? (n.mK = 0)
                      : (n.mK = (i.deltaK + n.deltaK) / 2);
                  }
                for (e = 0; e < h - 1; ++e)
                  (n = c[e]),
                    (a = c[e + 1]),
                    n.model.skip ||
                      a.model.skip ||
                      (o.almostEquals(n.deltaK, 0, this.EPSILON)
                        ? (n.mK = a.mK = 0)
                        : ((r = n.mK / n.deltaK),
                          (s = a.mK / n.deltaK),
                          (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 ||
                            ((l = 3 / Math.sqrt(u)), (n.mK = r * l * n.deltaK), (a.mK = s * l * n.deltaK))));
                for (e = 0; e < h; ++e)
                  (n = c[e]).model.skip ||
                    ((i = e > 0 ? c[e - 1] : null),
                    (a = e < h - 1 ? c[e + 1] : null),
                    i &&
                      !i.model.skip &&
                      ((d = (n.model.x - i.model.x) / 3),
                      (n.model.controlPointPreviousX = n.model.x - d),
                      (n.model.controlPointPreviousY = n.model.y - d * n.mK)),
                    a &&
                      !a.model.skip &&
                      ((d = (a.model.x - n.model.x) / 3),
                      (n.model.controlPointNextX = n.model.x + d),
                      (n.model.controlPointNextY = n.model.y + d * n.mK)));
              }),
              (o.nextItem = function(t, e, i) {
                return i ? (e >= t.length - 1 ? t[0] : t[e + 1]) : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
              }),
              (o.previousItem = function(t, e, i) {
                return i ? (e <= 0 ? t[t.length - 1] : t[e - 1]) : e <= 0 ? t[0] : t[e - 1];
              }),
              (o.niceNum = function(t, e) {
                var i = Math.floor(o.log10(t)),
                  n = t / Math.pow(10, i);
                return (
                  (e ? (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) *
                  Math.pow(10, i)
                );
              }),
              (o.requestAnimFrame =
                'undefined' == typeof window
                  ? function(t) {
                      t();
                    }
                  : window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(t) {
                      return window.setTimeout(t, 1e3 / 60);
                    }),
              (o.getRelativePosition = function(t, e) {
                var i,
                  n,
                  a = t.originalEvent || t,
                  r = t.currentTarget || t.srcElement,
                  s = r.getBoundingClientRect(),
                  l = a.touches;
                l && l.length > 0 ? ((i = l[0].clientX), (n = l[0].clientY)) : ((i = a.clientX), (n = a.clientY));
                var u = parseFloat(o.getStyle(r, 'padding-left')),
                  d = parseFloat(o.getStyle(r, 'padding-top')),
                  c = parseFloat(o.getStyle(r, 'padding-right')),
                  h = parseFloat(o.getStyle(r, 'padding-bottom')),
                  f = s.right - s.left - u - c,
                  g = s.bottom - s.top - d - h;
                return {
                  x: (i = Math.round((((i - s.left - u) / f) * r.width) / e.currentDevicePixelRatio)),
                  y: (n = Math.round((((n - s.top - d) / g) * r.height) / e.currentDevicePixelRatio))
                };
              }),
              (o.getConstraintWidth = function(t) {
                return r(t, 'max-width', 'clientWidth');
              }),
              (o.getConstraintHeight = function(t) {
                return r(t, 'max-height', 'clientHeight');
              }),
              (o.getMaximumWidth = function(t) {
                var e = t.parentNode;
                if (!e) return t.clientWidth;
                var i = parseInt(o.getStyle(e, 'padding-left'), 10),
                  n = parseInt(o.getStyle(e, 'padding-right'), 10),
                  a = e.clientWidth - i - n,
                  r = o.getConstraintWidth(t);
                return isNaN(r) ? a : Math.min(a, r);
              }),
              (o.getMaximumHeight = function(t) {
                var e = t.parentNode;
                if (!e) return t.clientHeight;
                var i = parseInt(o.getStyle(e, 'padding-top'), 10),
                  n = parseInt(o.getStyle(e, 'padding-bottom'), 10),
                  a = e.clientHeight - i - n,
                  r = o.getConstraintHeight(t);
                return isNaN(r) ? a : Math.min(a, r);
              }),
              (o.getStyle = function(t, e) {
                return t.currentStyle
                  ? t.currentStyle[e]
                  : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
              }),
              (o.retinaScale = function(t, e) {
                var i = (t.currentDevicePixelRatio = e || window.devicePixelRatio || 1);
                if (1 !== i) {
                  var n = t.canvas,
                    a = t.height,
                    o = t.width;
                  (n.height = a * i),
                    (n.width = o * i),
                    t.ctx.scale(i, i),
                    n.style.height || n.style.width || ((n.style.height = a + 'px'), (n.style.width = o + 'px'));
                }
              }),
              (o.fontString = function(t, e, i) {
                return e + ' ' + t + 'px ' + i;
              }),
              (o.longestText = function(t, e, i, n) {
                var a = ((n = n || {}).data = n.data || {}),
                  r = (n.garbageCollect = n.garbageCollect || []);
                n.font !== e && ((a = n.data = {}), (r = n.garbageCollect = []), (n.font = e)), (t.font = e);
                var s = 0;
                o.each(i, function(e) {
                  null != e && !0 !== o.isArray(e)
                    ? (s = o.measureText(t, a, r, s, e))
                    : o.isArray(e) &&
                      o.each(e, function(e) {
                        null == e || o.isArray(e) || (s = o.measureText(t, a, r, s, e));
                      });
                });
                var l = r.length / 2;
                if (l > i.length) {
                  for (var u = 0; u < l; u++) delete a[r[u]];
                  r.splice(0, l);
                }
                return s;
              }),
              (o.measureText = function(t, e, i, n, a) {
                var o = e[a];
                return o || ((o = e[a] = t.measureText(a).width), i.push(a)), o > n && (n = o), n;
              }),
              (o.numberOfLabelLines = function(t) {
                var e = 1;
                return (
                  o.each(t, function(t) {
                    o.isArray(t) && t.length > e && (e = t.length);
                  }),
                  e
                );
              }),
              (o.color = n
                ? function(t) {
                    return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t);
                  }
                : function(t) {
                    return console.error('Color.js not found!'), t;
                  }),
              (o.getHoverColor = function(t) {
                return t instanceof CanvasPattern
                  ? t
                  : o
                      .color(t)
                      .saturate(0.5)
                      .darken(0.1)
                      .rgbString();
              });
          };
        },
        { 25: 25, 3: 3, 45: 45 }
      ],
      28: [
        function(t, e, i) {
          'use strict';
          var n = t(45);
          function a(t, e) {
            return t.native ? { x: t.x, y: t.y } : n.getRelativePosition(t, e);
          }
          function o(t, e) {
            var i, n, a, o, r;
            for (n = 0, o = t.data.datasets.length; n < o; ++n)
              if (t.isDatasetVisible(n))
                for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                  var s = i.data[a];
                  s._view.skip || e(s);
                }
          }
          function r(t, e) {
            var i = [];
            return (
              o(t, function(t) {
                t.inRange(e.x, e.y) && i.push(t);
              }),
              i
            );
          }
          function s(t, e, i, n) {
            var a = Number.POSITIVE_INFINITY,
              r = [];
            return (
              o(t, function(t) {
                if (!i || t.inRange(e.x, e.y)) {
                  var o = t.getCenterPoint(),
                    s = n(e, o);
                  s < a ? ((r = [t]), (a = s)) : s === a && r.push(t);
                }
              }),
              r
            );
          }
          function l(t) {
            var e = -1 !== t.indexOf('x'),
              i = -1 !== t.indexOf('y');
            return function(t, n) {
              var a = e ? Math.abs(t.x - n.x) : 0,
                o = i ? Math.abs(t.y - n.y) : 0;
              return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
            };
          }
          function u(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || 'x';
            var o = l(i.axis),
              u = i.intersect ? r(t, n) : s(t, n, !1, o),
              d = [];
            return u.length
              ? (t.data.datasets.forEach(function(e, i) {
                  if (t.isDatasetVisible(i)) {
                    var n = t.getDatasetMeta(i).data[u[0]._index];
                    n && !n._view.skip && d.push(n);
                  }
                }),
                d)
              : [];
          }
          e.exports = {
            modes: {
              single: function(t, e) {
                var i = a(e, t),
                  n = [];
                return (
                  o(t, function(t) {
                    if (t.inRange(i.x, i.y)) return n.push(t), n;
                  }),
                  n.slice(0, 1)
                );
              },
              label: u,
              index: u,
              dataset: function(t, e, i) {
                var n = a(e, t);
                i.axis = i.axis || 'xy';
                var o = l(i.axis),
                  u = i.intersect ? r(t, n) : s(t, n, !1, o);
                return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
              },
              'x-axis': function(t, e) {
                return u(t, e, { intersect: !1 });
              },
              point: function(t, e) {
                return r(t, a(e, t));
              },
              nearest: function(t, e, i) {
                var n = a(e, t);
                i.axis = i.axis || 'xy';
                var o = l(i.axis),
                  r = s(t, n, i.intersect, o);
                return (
                  r.length > 1 &&
                    r.sort(function(t, e) {
                      var i = t.getArea() - e.getArea();
                      return 0 === i && (i = t._datasetIndex - e._datasetIndex), i;
                    }),
                  r.slice(0, 1)
                );
              },
              x: function(t, e, i) {
                var n = a(e, t),
                  r = [],
                  s = !1;
                return (
                  o(t, function(t) {
                    t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0);
                  }),
                  i.intersect && !s && (r = []),
                  r
                );
              },
              y: function(t, e, i) {
                var n = a(e, t),
                  r = [],
                  s = !1;
                return (
                  o(t, function(t) {
                    t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0);
                  }),
                  i.intersect && !s && (r = []),
                  r
                );
              }
            }
          };
        },
        { 45: 45 }
      ],
      29: [
        function(t, e, i) {
          'use strict';
          t(25)._set('global', {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
            hover: { onHover: null, mode: 'nearest', intersect: !0, animationDuration: 400 },
            onClick: null,
            defaultColor: 'rgba(0,0,0,0.1)',
            defaultFontColor: '#666',
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: 'normal',
            showLines: !0,
            elements: {},
            layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } }
          }),
            (e.exports = function() {
              var t = function(t, e) {
                return this.construct(t, e), this;
              };
              return (t.Chart = t), t;
            });
        },
        { 25: 25 }
      ],
      30: [
        function(t, e, i) {
          'use strict';
          var n = t(45);
          function a(t, e) {
            return n.where(t, function(t) {
              return t.position === e;
            });
          }
          function o(t, e) {
            t.forEach(function(t, e) {
              return (t._tmpIndex_ = e), t;
            }),
              t.sort(function(t, i) {
                var n = e ? i : t,
                  a = e ? t : i;
                return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
              }),
              t.forEach(function(t) {
                delete t._tmpIndex_;
              });
          }
          e.exports = {
            defaults: {},
            addBox: function(t, e) {
              t.boxes || (t.boxes = []),
                (e.fullWidth = e.fullWidth || !1),
                (e.position = e.position || 'top'),
                (e.weight = e.weight || 0),
                t.boxes.push(e);
            },
            removeBox: function(t, e) {
              var i = t.boxes ? t.boxes.indexOf(e) : -1;
              -1 !== i && t.boxes.splice(i, 1);
            },
            configure: function(t, e, i) {
              for (var n, a = ['fullWidth', 'position', 'weight'], o = a.length, r = 0; r < o; ++r)
                (n = a[r]), i.hasOwnProperty(n) && (e[n] = i[n]);
            },
            update: function(t, e, i) {
              if (t) {
                var r = t.options.layout || {},
                  s = n.options.toPadding(r.padding),
                  l = s.left,
                  u = s.right,
                  d = s.top,
                  c = s.bottom,
                  h = a(t.boxes, 'left'),
                  f = a(t.boxes, 'right'),
                  g = a(t.boxes, 'top'),
                  p = a(t.boxes, 'bottom'),
                  m = a(t.boxes, 'chartArea');
                o(h, !0), o(f, !1), o(g, !0), o(p, !1);
                var v = e - l - u,
                  b = i - d - c,
                  x = b / 2,
                  y = (e - v / 2) / (h.length + f.length),
                  k = (i - x) / (g.length + p.length),
                  M = v,
                  w = b,
                  S = [];
                n.each(h.concat(f, g, p), function(t) {
                  var e,
                    i = t.isHorizontal();
                  i
                    ? ((e = t.update(t.fullWidth ? v : M, k)), (w -= e.height))
                    : ((e = t.update(y, w)), (M -= e.width)),
                    S.push({ horizontal: i, minSize: e, box: t });
                });
                var C = 0,
                  _ = 0,
                  D = 0,
                  I = 0;
                n.each(g.concat(p), function(t) {
                  if (t.getPadding) {
                    var e = t.getPadding();
                    (C = Math.max(C, e.left)), (_ = Math.max(_, e.right));
                  }
                }),
                  n.each(h.concat(f), function(t) {
                    if (t.getPadding) {
                      var e = t.getPadding();
                      (D = Math.max(D, e.top)), (I = Math.max(I, e.bottom));
                    }
                  });
                var P = l,
                  A = u,
                  T = d,
                  F = c;
                n.each(h.concat(f), N),
                  n.each(h, function(t) {
                    P += t.width;
                  }),
                  n.each(f, function(t) {
                    A += t.width;
                  }),
                  n.each(g.concat(p), N),
                  n.each(g, function(t) {
                    T += t.height;
                  }),
                  n.each(p, function(t) {
                    F += t.height;
                  }),
                  n.each(h.concat(f), function(t) {
                    var e = n.findNextWhere(S, function(e) {
                        return e.box === t;
                      }),
                      i = { left: 0, right: 0, top: T, bottom: F };
                    e && t.update(e.minSize.width, w, i);
                  }),
                  (P = l),
                  (A = u),
                  (T = d),
                  (F = c),
                  n.each(h, function(t) {
                    P += t.width;
                  }),
                  n.each(f, function(t) {
                    A += t.width;
                  }),
                  n.each(g, function(t) {
                    T += t.height;
                  }),
                  n.each(p, function(t) {
                    F += t.height;
                  });
                var O = Math.max(C - P, 0);
                (P += O), (A += Math.max(_ - A, 0));
                var R = Math.max(D - T, 0);
                (T += R), (F += Math.max(I - F, 0));
                var L = i - T - F,
                  z = e - P - A;
                (z === M && L === w) ||
                  (n.each(h, function(t) {
                    t.height = L;
                  }),
                  n.each(f, function(t) {
                    t.height = L;
                  }),
                  n.each(g, function(t) {
                    t.fullWidth || (t.width = z);
                  }),
                  n.each(p, function(t) {
                    t.fullWidth || (t.width = z);
                  }),
                  (w = L),
                  (M = z));
                var B = l + O,
                  W = d + R;
                n.each(h.concat(g), V),
                  (B += M),
                  (W += w),
                  n.each(f, V),
                  n.each(p, V),
                  (t.chartArea = { left: P, top: T, right: P + M, bottom: T + w }),
                  n.each(m, function(e) {
                    (e.left = t.chartArea.left),
                      (e.top = t.chartArea.top),
                      (e.right = t.chartArea.right),
                      (e.bottom = t.chartArea.bottom),
                      e.update(M, w);
                  });
              }
              function N(t) {
                var e = n.findNextWhere(S, function(e) {
                  return e.box === t;
                });
                if (e)
                  if (t.isHorizontal()) {
                    var i = { left: Math.max(P, C), right: Math.max(A, _), top: 0, bottom: 0 };
                    t.update(t.fullWidth ? v : M, b / 2, i);
                  } else t.update(e.minSize.width, w);
              }
              function V(t) {
                t.isHorizontal()
                  ? ((t.left = t.fullWidth ? l : P),
                    (t.right = t.fullWidth ? e - u : P + M),
                    (t.top = W),
                    (t.bottom = W + t.height),
                    (W = t.bottom))
                  : ((t.left = B), (t.right = B + t.width), (t.top = T), (t.bottom = T + w), (B = t.right));
              }
            }
          };
        },
        { 45: 45 }
      ],
      31: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(45);
          n._set('global', { plugins: {} }),
            (e.exports = {
              _plugins: [],
              _cacheId: 0,
              register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                  -1 === e.indexOf(t) && e.push(t);
                }),
                  this._cacheId++;
              },
              unregister: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                  var i = e.indexOf(t);
                  -1 !== i && e.splice(i, 1);
                }),
                  this._cacheId++;
              },
              clear: function() {
                (this._plugins = []), this._cacheId++;
              },
              count: function() {
                return this._plugins.length;
              },
              getAll: function() {
                return this._plugins;
              },
              notify: function(t, e, i) {
                var n,
                  a,
                  o,
                  r,
                  s,
                  l = this.descriptors(t),
                  u = l.length;
                for (n = 0; n < u; ++n)
                  if (
                    'function' == typeof (s = (o = (a = l[n]).plugin)[e]) &&
                    ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))
                  )
                    return !1;
                return !0;
              },
              descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var i = [],
                  o = [],
                  r = (t && t.config) || {},
                  s = (r.options && r.options.plugins) || {};
                return (
                  this._plugins.concat(r.plugins || []).forEach(function(t) {
                    if (-1 === i.indexOf(t)) {
                      var e = t.id,
                        r = s[e];
                      !1 !== r &&
                        (!0 === r && (r = a.clone(n.global.plugins[e])),
                        i.push(t),
                        o.push({ plugin: t, options: r || {} }));
                    }
                  }),
                  (e.descriptors = o),
                  (e.id = this._cacheId),
                  o
                );
              },
              _invalidate: function(t) {
                delete t.$plugins;
              }
            });
        },
        { 25: 25, 45: 45 }
      ],
      32: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45),
            r = t(34);
          function s(t) {
            var e,
              i,
              n = [];
            for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
            return n;
          }
          function l(t, e, i) {
            var n = t.getPixelForTick(e);
            return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
          }
          n._set('scale', {
            display: !0,
            position: 'left',
            offset: !1,
            gridLines: {
              display: !0,
              color: 'rgba(0, 0, 0, 0.1)',
              lineWidth: 1,
              drawBorder: !0,
              drawOnChartArea: !0,
              drawTicks: !0,
              tickMarkLength: 10,
              zeroLineWidth: 1,
              zeroLineColor: 'rgba(0,0,0,0.25)',
              zeroLineBorderDash: [],
              zeroLineBorderDashOffset: 0,
              offsetGridLines: !1,
              borderDash: [],
              borderDashOffset: 0
            },
            scaleLabel: { display: !1, labelString: '', lineHeight: 1.2, padding: { top: 4, bottom: 4 } },
            ticks: {
              beginAtZero: !1,
              minRotation: 0,
              maxRotation: 50,
              mirror: !1,
              padding: 0,
              reverse: !1,
              display: !0,
              autoSkip: !0,
              autoSkipPadding: 0,
              labelOffset: 0,
              callback: r.formatters.values,
              minor: {},
              major: {}
            }
          }),
            (e.exports = function(t) {
              function e(t, e, i) {
                return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width;
              }
              function i(t) {
                var e = o.valueOrDefault,
                  i = n.global,
                  a = e(t.fontSize, i.defaultFontSize),
                  r = e(t.fontStyle, i.defaultFontStyle),
                  s = e(t.fontFamily, i.defaultFontFamily);
                return { size: a, style: r, family: s, font: o.fontString(a, r, s) };
              }
              function r(t) {
                return o.options.toLineHeight(
                  o.valueOrDefault(t.lineHeight, 1.2),
                  o.valueOrDefault(t.fontSize, n.global.defaultFontSize)
                );
              }
              t.Scale = a.extend({
                getPadding: function() {
                  return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                  };
                },
                getTicks: function() {
                  return this._ticks;
                },
                mergeTicksOptions: function() {
                  var t = this.options.ticks;
                  for (var e in (!1 === t.minor && (t.minor = { display: !1 }),
                  !1 === t.major && (t.major = { display: !1 }),
                  t))
                    'major' !== e &&
                      'minor' !== e &&
                      (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
                },
                beforeUpdate: function() {
                  o.callback(this.options.beforeUpdate, [this]);
                },
                update: function(t, e, i) {
                  var n,
                    a,
                    r,
                    s,
                    l,
                    u,
                    d = this;
                  for (
                    d.beforeUpdate(),
                      d.maxWidth = t,
                      d.maxHeight = e,
                      d.margins = o.extend({ left: 0, right: 0, top: 0, bottom: 0 }, i),
                      d.longestTextCache = d.longestTextCache || {},
                      d.beforeSetDimensions(),
                      d.setDimensions(),
                      d.afterSetDimensions(),
                      d.beforeDataLimits(),
                      d.determineDataLimits(),
                      d.afterDataLimits(),
                      d.beforeBuildTicks(),
                      l = d.buildTicks() || [],
                      d.afterBuildTicks(),
                      d.beforeTickToLabelConversion(),
                      r = d.convertTicksToLabels(l) || d.ticks,
                      d.afterTickToLabelConversion(),
                      d.ticks = r,
                      n = 0,
                      a = r.length;
                    n < a;
                    ++n
                  )
                    (s = r[n]), (u = l[n]) ? (u.label = s) : l.push((u = { label: s, major: !1 }));
                  return (
                    (d._ticks = l),
                    d.beforeCalculateTickRotation(),
                    d.calculateTickRotation(),
                    d.afterCalculateTickRotation(),
                    d.beforeFit(),
                    d.fit(),
                    d.afterFit(),
                    d.afterUpdate(),
                    d.minSize
                  );
                },
                afterUpdate: function() {
                  o.callback(this.options.afterUpdate, [this]);
                },
                beforeSetDimensions: function() {
                  o.callback(this.options.beforeSetDimensions, [this]);
                },
                setDimensions: function() {
                  var t = this;
                  t.isHorizontal()
                    ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                    : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                    (t.paddingLeft = 0),
                    (t.paddingTop = 0),
                    (t.paddingRight = 0),
                    (t.paddingBottom = 0);
                },
                afterSetDimensions: function() {
                  o.callback(this.options.afterSetDimensions, [this]);
                },
                beforeDataLimits: function() {
                  o.callback(this.options.beforeDataLimits, [this]);
                },
                determineDataLimits: o.noop,
                afterDataLimits: function() {
                  o.callback(this.options.afterDataLimits, [this]);
                },
                beforeBuildTicks: function() {
                  o.callback(this.options.beforeBuildTicks, [this]);
                },
                buildTicks: o.noop,
                afterBuildTicks: function() {
                  o.callback(this.options.afterBuildTicks, [this]);
                },
                beforeTickToLabelConversion: function() {
                  o.callback(this.options.beforeTickToLabelConversion, [this]);
                },
                convertTicksToLabels: function() {
                  var t = this.options.ticks;
                  this.ticks = this.ticks.map(t.userCallback || t.callback, this);
                },
                afterTickToLabelConversion: function() {
                  o.callback(this.options.afterTickToLabelConversion, [this]);
                },
                beforeCalculateTickRotation: function() {
                  o.callback(this.options.beforeCalculateTickRotation, [this]);
                },
                calculateTickRotation: function() {
                  var t = this,
                    e = t.ctx,
                    n = t.options.ticks,
                    a = s(t._ticks),
                    r = i(n);
                  e.font = r.font;
                  var l = n.minRotation || 0;
                  if (a.length && t.options.display && t.isHorizontal())
                    for (
                      var u,
                        d = o.longestText(e, r.font, a, t.longestTextCache),
                        c = d,
                        h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6;
                      c > h && l < n.maxRotation;

                    ) {
                      var f = o.toRadians(l);
                      if (((u = Math.cos(f)), Math.sin(f) * d > t.maxHeight)) {
                        l--;
                        break;
                      }
                      l++, (c = u * d);
                    }
                  t.labelRotation = l;
                },
                afterCalculateTickRotation: function() {
                  o.callback(this.options.afterCalculateTickRotation, [this]);
                },
                beforeFit: function() {
                  o.callback(this.options.beforeFit, [this]);
                },
                fit: function() {
                  var t = this,
                    n = (t.minSize = { width: 0, height: 0 }),
                    a = s(t._ticks),
                    l = t.options,
                    u = l.ticks,
                    d = l.scaleLabel,
                    c = l.gridLines,
                    h = l.display,
                    f = t.isHorizontal(),
                    g = i(u),
                    p = l.gridLines.tickMarkLength;
                  if (
                    ((n.width = f
                      ? t.isFullWidth()
                        ? t.maxWidth - t.margins.left - t.margins.right
                        : t.maxWidth
                      : h && c.drawTicks
                      ? p
                      : 0),
                    (n.height = f ? (h && c.drawTicks ? p : 0) : t.maxHeight),
                    d.display && h)
                  ) {
                    var m = r(d) + o.options.toPadding(d.padding).height;
                    f ? (n.height += m) : (n.width += m);
                  }
                  if (u.display && h) {
                    var v = o.longestText(t.ctx, g.font, a, t.longestTextCache),
                      b = o.numberOfLabelLines(a),
                      x = 0.5 * g.size,
                      y = t.options.ticks.padding;
                    if (f) {
                      t.longestLabelWidth = v;
                      var k = o.toRadians(t.labelRotation),
                        M = Math.cos(k),
                        w = Math.sin(k) * v + g.size * b + x * (b - 1) + x;
                      (n.height = Math.min(t.maxHeight, n.height + w + y)), (t.ctx.font = g.font);
                      var S = e(t.ctx, a[0], g.font),
                        C = e(t.ctx, a[a.length - 1], g.font);
                      0 !== t.labelRotation
                        ? ((t.paddingLeft = 'bottom' === l.position ? M * S + 3 : M * x + 3),
                          (t.paddingRight = 'bottom' === l.position ? M * x + 3 : M * C + 3))
                        : ((t.paddingLeft = S / 2 + 3), (t.paddingRight = C / 2 + 3));
                    } else
                      u.mirror ? (v = 0) : (v += y + x),
                        (n.width = Math.min(t.maxWidth, n.width + v)),
                        (t.paddingTop = g.size / 2),
                        (t.paddingBottom = g.size / 2);
                  }
                  t.handleMargins(), (t.width = n.width), (t.height = n.height);
                },
                handleMargins: function() {
                  var t = this;
                  t.margins &&
                    ((t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0)),
                    (t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0)),
                    (t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0)),
                    (t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0)));
                },
                afterFit: function() {
                  o.callback(this.options.afterFit, [this]);
                },
                isHorizontal: function() {
                  return 'top' === this.options.position || 'bottom' === this.options.position;
                },
                isFullWidth: function() {
                  return this.options.fullWidth;
                },
                getRightValue: function(t) {
                  if (o.isNullOrUndef(t)) return NaN;
                  if ('number' == typeof t && !isFinite(t)) return NaN;
                  if (t)
                    if (this.isHorizontal()) {
                      if (void 0 !== t.x) return this.getRightValue(t.x);
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                  return t;
                },
                getLabelForIndex: o.noop,
                getPixelForValue: o.noop,
                getValueForPixel: o.noop,
                getPixelForTick: function(t) {
                  var e = this,
                    i = e.options.offset;
                  if (e.isHorizontal()) {
                    var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                      a = n * t + e.paddingLeft;
                    i && (a += n / 2);
                    var o = e.left + Math.round(a);
                    return (o += e.isFullWidth() ? e.margins.left : 0);
                  }
                  var r = e.height - (e.paddingTop + e.paddingBottom);
                  return e.top + t * (r / (e._ticks.length - 1));
                },
                getPixelForDecimal: function(t) {
                  var e = this;
                  if (e.isHorizontal()) {
                    var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                      n = e.left + Math.round(i);
                    return (n += e.isFullWidth() ? e.margins.left : 0);
                  }
                  return e.top + t * e.height;
                },
                getBasePixel: function() {
                  return this.getPixelForValue(this.getBaseValue());
                },
                getBaseValue: function() {
                  var t = this.min,
                    e = this.max;
                  return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
                },
                _autoSkip: function(t) {
                  var e,
                    i,
                    n,
                    a,
                    r = this,
                    s = r.isHorizontal(),
                    l = r.options.ticks.minor,
                    u = t.length,
                    d = o.toRadians(r.labelRotation),
                    c = Math.cos(d),
                    h = r.longestLabelWidth * c,
                    f = [];
                  for (
                    l.maxTicksLimit && (a = l.maxTicksLimit),
                      s &&
                        ((e = !1),
                        (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) &&
                          (e =
                            1 +
                            Math.floor(((h + l.autoSkipPadding) * u) / (r.width - (r.paddingLeft + r.paddingRight)))),
                        a && u > a && (e = Math.max(e, Math.floor(u / a)))),
                      i = 0;
                    i < u;
                    i++
                  )
                    (n = t[i]),
                      ((e > 1 && i % e > 0) || (i % e == 0 && i + e >= u)) && i !== u - 1 && delete n.label,
                      f.push(n);
                  return f;
                },
                draw: function(t) {
                  var e = this,
                    a = e.options;
                  if (a.display) {
                    var s = e.ctx,
                      u = n.global,
                      d = a.ticks.minor,
                      c = a.ticks.major || d,
                      h = a.gridLines,
                      f = a.scaleLabel,
                      g = 0 !== e.labelRotation,
                      p = e.isHorizontal(),
                      m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                      v = o.valueOrDefault(d.fontColor, u.defaultFontColor),
                      b = i(d),
                      x = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                      y = i(c),
                      k = h.drawTicks ? h.tickMarkLength : 0,
                      M = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                      w = i(f),
                      S = o.options.toPadding(f.padding),
                      C = o.toRadians(e.labelRotation),
                      _ = [],
                      D = e.options.gridLines.lineWidth,
                      I = 'right' === a.position ? e.right : e.right - D - k,
                      P = 'right' === a.position ? e.right + k : e.right,
                      A = 'bottom' === a.position ? e.top + D : e.bottom - k - D,
                      T = 'bottom' === a.position ? e.top + D + k : e.bottom + D;
                    if (
                      (o.each(m, function(i, n) {
                        if (!o.isNullOrUndef(i.label)) {
                          var r,
                            s,
                            c,
                            f,
                            v,
                            b,
                            x,
                            y,
                            M,
                            w,
                            S,
                            F,
                            O,
                            R,
                            L = i.label;
                          n === e.zeroLineIndex && a.offset === h.offsetGridLines
                            ? ((r = h.zeroLineWidth),
                              (s = h.zeroLineColor),
                              (c = h.zeroLineBorderDash),
                              (f = h.zeroLineBorderDashOffset))
                            : ((r = o.valueAtIndexOrDefault(h.lineWidth, n)),
                              (s = o.valueAtIndexOrDefault(h.color, n)),
                              (c = o.valueOrDefault(h.borderDash, u.borderDash)),
                              (f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset)));
                          var z = 'middle',
                            B = 'middle',
                            W = d.padding;
                          if (p) {
                            var N = k + W;
                            'bottom' === a.position
                              ? ((B = g ? 'middle' : 'top'), (z = g ? 'right' : 'center'), (R = e.top + N))
                              : ((B = g ? 'middle' : 'bottom'), (z = g ? 'left' : 'center'), (R = e.bottom - N));
                            var V = l(e, n, h.offsetGridLines && m.length > 1);
                            V < e.left && (s = 'rgba(0,0,0,0)'),
                              (V += o.aliasPixel(r)),
                              (O = e.getPixelForTick(n) + d.labelOffset),
                              (v = x = M = S = V),
                              (b = A),
                              (y = T),
                              (w = t.top),
                              (F = t.bottom + D);
                          } else {
                            var E,
                              H = 'left' === a.position;
                            d.mirror
                              ? ((z = H ? 'left' : 'right'), (E = W))
                              : ((z = H ? 'right' : 'left'), (E = k + W)),
                              (O = H ? e.right - E : e.left + E);
                            var j = l(e, n, h.offsetGridLines && m.length > 1);
                            j < e.top && (s = 'rgba(0,0,0,0)'),
                              (j += o.aliasPixel(r)),
                              (R = e.getPixelForTick(n) + d.labelOffset),
                              (v = I),
                              (x = P),
                              (M = t.left),
                              (S = t.right + D),
                              (b = y = w = F = j);
                          }
                          _.push({
                            tx1: v,
                            ty1: b,
                            tx2: x,
                            ty2: y,
                            x1: M,
                            y1: w,
                            x2: S,
                            y2: F,
                            labelX: O,
                            labelY: R,
                            glWidth: r,
                            glColor: s,
                            glBorderDash: c,
                            glBorderDashOffset: f,
                            rotation: -1 * C,
                            label: L,
                            major: i.major,
                            textBaseline: B,
                            textAlign: z
                          });
                        }
                      }),
                      o.each(_, function(t) {
                        if (
                          (h.display &&
                            (s.save(),
                            (s.lineWidth = t.glWidth),
                            (s.strokeStyle = t.glColor),
                            s.setLineDash && (s.setLineDash(t.glBorderDash), (s.lineDashOffset = t.glBorderDashOffset)),
                            s.beginPath(),
                            h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)),
                            h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)),
                            s.stroke(),
                            s.restore()),
                          d.display)
                        ) {
                          s.save(),
                            s.translate(t.labelX, t.labelY),
                            s.rotate(t.rotation),
                            (s.font = t.major ? y.font : b.font),
                            (s.fillStyle = t.major ? x : v),
                            (s.textBaseline = t.textBaseline),
                            (s.textAlign = t.textAlign);
                          var i = t.label;
                          if (o.isArray(i))
                            for (
                              var n = i.length, a = 1.5 * b.size, r = e.isHorizontal() ? 0 : (-a * (n - 1)) / 2, l = 0;
                              l < n;
                              ++l
                            )
                              s.fillText('' + i[l], 0, r), (r += a);
                          else s.fillText(i, 0, 0);
                          s.restore();
                        }
                      }),
                      f.display)
                    ) {
                      var F,
                        O,
                        R = 0,
                        L = r(f) / 2;
                      if (p)
                        (F = e.left + (e.right - e.left) / 2),
                          (O = 'bottom' === a.position ? e.bottom - L - S.bottom : e.top + L + S.top);
                      else {
                        var z = 'left' === a.position;
                        (F = z ? e.left + L + S.top : e.right - L - S.top),
                          (O = e.top + (e.bottom - e.top) / 2),
                          (R = z ? -0.5 * Math.PI : 0.5 * Math.PI);
                      }
                      s.save(),
                        s.translate(F, O),
                        s.rotate(R),
                        (s.textAlign = 'center'),
                        (s.textBaseline = 'middle'),
                        (s.fillStyle = M),
                        (s.font = w.font),
                        s.fillText(f.labelString, 0, 0),
                        s.restore();
                    }
                    if (h.drawBorder) {
                      (s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0)),
                        (s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0));
                      var B = e.left,
                        W = e.right + D,
                        N = e.top,
                        V = e.bottom + D,
                        E = o.aliasPixel(s.lineWidth);
                      p
                        ? ((N = V = 'top' === a.position ? e.bottom : e.top), (N += E), (V += E))
                        : ((B = W = 'left' === a.position ? e.right : e.left), (B += E), (W += E)),
                        s.beginPath(),
                        s.moveTo(B, N),
                        s.lineTo(W, V),
                        s.stroke();
                    }
                  }
                }
              });
            });
        },
        { 25: 25, 26: 26, 34: 34, 45: 45 }
      ],
      33: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(45),
            o = t(30);
          e.exports = function(t) {
            t.scaleService = {
              constructors: {},
              defaults: {},
              registerScaleType: function(t, e, i) {
                (this.constructors[t] = e), (this.defaults[t] = a.clone(i));
              },
              getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
              },
              getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {};
              },
              updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
              },
              addScalesToLayout: function(t) {
                a.each(t.scales, function(e) {
                  (e.fullWidth = e.options.fullWidth),
                    (e.position = e.options.position),
                    (e.weight = e.options.weight),
                    o.addBox(t, e);
                });
              }
            };
          };
        },
        { 25: 25, 30: 30, 45: 45 }
      ],
      34: [
        function(t, e, i) {
          'use strict';
          var n = t(45);
          e.exports = {
            formatters: {
              values: function(t) {
                return n.isArray(t) ? t : '' + t;
              },
              linear: function(t, e, i) {
                var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                var o = n.log10(Math.abs(a)),
                  r = '';
                if (0 !== t) {
                  var s = -1 * Math.floor(o);
                  (s = Math.max(Math.min(s, 20), 0)), (r = t.toFixed(s));
                } else r = '0';
                return r;
              },
              logarithmic: function(t, e, i) {
                var a = t / Math.pow(10, Math.floor(n.log10(t)));
                return 0 === t
                  ? '0'
                  : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1
                  ? t.toExponential()
                  : '';
              }
            }
          };
        },
        { 45: 45 }
      ],
      35: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45);
          n._set('global', {
            tooltips: {
              enabled: !0,
              custom: null,
              mode: 'nearest',
              position: 'average',
              intersect: !0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleFontStyle: 'bold',
              titleSpacing: 2,
              titleMarginBottom: 6,
              titleFontColor: '#fff',
              titleAlign: 'left',
              bodySpacing: 2,
              bodyFontColor: '#fff',
              bodyAlign: 'left',
              footerFontStyle: 'bold',
              footerSpacing: 2,
              footerMarginTop: 6,
              footerFontColor: '#fff',
              footerAlign: 'left',
              yPadding: 6,
              xPadding: 6,
              caretPadding: 2,
              caretSize: 5,
              cornerRadius: 6,
              multiKeyBackground: '#fff',
              displayColors: !0,
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              callbacks: {
                beforeTitle: o.noop,
                title: function(t, e) {
                  var i = '',
                    n = e.labels,
                    a = n ? n.length : 0;
                  if (t.length > 0) {
                    var o = t[0];
                    o.xLabel ? (i = o.xLabel) : a > 0 && o.index < a && (i = n[o.index]);
                  }
                  return i;
                },
                afterTitle: o.noop,
                beforeBody: o.noop,
                beforeLabel: o.noop,
                label: function(t, e) {
                  var i = e.datasets[t.datasetIndex].label || '';
                  return i && (i += ': '), (i += t.yLabel);
                },
                labelColor: function(t, e) {
                  var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                  return { borderColor: i.borderColor, backgroundColor: i.backgroundColor };
                },
                labelTextColor: function() {
                  return this._options.bodyFontColor;
                },
                afterLabel: o.noop,
                afterBody: o.noop,
                beforeFooter: o.noop,
                footer: o.noop,
                afterFooter: o.noop
              }
            }
          }),
            (e.exports = function(t) {
              function e(t, e) {
                var i = o.color(t);
                return i.alpha(e * i.alpha()).rgbaString();
              }
              function i(t, e) {
                return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
              }
              function r(t) {
                var e = n.global,
                  i = o.valueOrDefault;
                return {
                  xPadding: t.xPadding,
                  yPadding: t.yPadding,
                  xAlign: t.xAlign,
                  yAlign: t.yAlign,
                  bodyFontColor: t.bodyFontColor,
                  _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                  _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                  _bodyAlign: t.bodyAlign,
                  bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                  bodySpacing: t.bodySpacing,
                  titleFontColor: t.titleFontColor,
                  _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                  _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                  titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                  _titleAlign: t.titleAlign,
                  titleSpacing: t.titleSpacing,
                  titleMarginBottom: t.titleMarginBottom,
                  footerFontColor: t.footerFontColor,
                  _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                  _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                  footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                  _footerAlign: t.footerAlign,
                  footerSpacing: t.footerSpacing,
                  footerMarginTop: t.footerMarginTop,
                  caretSize: t.caretSize,
                  cornerRadius: t.cornerRadius,
                  backgroundColor: t.backgroundColor,
                  opacity: 0,
                  legendColorBackground: t.multiKeyBackground,
                  displayColors: t.displayColors,
                  borderColor: t.borderColor,
                  borderWidth: t.borderWidth
                };
              }
              (t.Tooltip = a.extend({
                initialize: function() {
                  (this._model = r(this._options)), (this._lastActive = []);
                },
                getTitle: function() {
                  var t = this._options.callbacks,
                    e = t.beforeTitle.apply(this, arguments),
                    n = t.title.apply(this, arguments),
                    a = t.afterTitle.apply(this, arguments),
                    o = [];
                  return (o = i((o = i((o = i(o, e)), n)), a));
                },
                getBeforeBody: function() {
                  var t = this._options.callbacks.beforeBody.apply(this, arguments);
                  return o.isArray(t) ? t : void 0 !== t ? [t] : [];
                },
                getBody: function(t, e) {
                  var n = this,
                    a = n._options.callbacks,
                    r = [];
                  return (
                    o.each(t, function(t) {
                      var o = { before: [], lines: [], after: [] };
                      i(o.before, a.beforeLabel.call(n, t, e)),
                        i(o.lines, a.label.call(n, t, e)),
                        i(o.after, a.afterLabel.call(n, t, e)),
                        r.push(o);
                    }),
                    r
                  );
                },
                getAfterBody: function() {
                  var t = this._options.callbacks.afterBody.apply(this, arguments);
                  return o.isArray(t) ? t : void 0 !== t ? [t] : [];
                },
                getFooter: function() {
                  var t = this._options.callbacks,
                    e = t.beforeFooter.apply(this, arguments),
                    n = t.footer.apply(this, arguments),
                    a = t.afterFooter.apply(this, arguments),
                    o = [];
                  return (o = i((o = i((o = i(o, e)), n)), a));
                },
                update: function(e) {
                  var i,
                    n,
                    a,
                    s,
                    l,
                    u,
                    d,
                    c,
                    h,
                    f,
                    g,
                    p,
                    m,
                    v,
                    b,
                    x,
                    y,
                    k,
                    M,
                    w,
                    S = this,
                    C = S._options,
                    _ = S._model,
                    D = (S._model = r(C)),
                    I = S._active,
                    P = S._data,
                    A = { xAlign: _.xAlign, yAlign: _.yAlign },
                    T = { x: _.x, y: _.y },
                    F = { width: _.width, height: _.height },
                    O = { x: _.caretX, y: _.caretY };
                  if (I.length) {
                    D.opacity = 1;
                    var R = [],
                      L = [];
                    O = t.Tooltip.positioners[C.position].call(S, I, S._eventPosition);
                    var z = [];
                    for (i = 0, n = I.length; i < n; ++i)
                      z.push(
                        ((x = I[i]),
                        (y = void 0),
                        (k = void 0),
                        void 0,
                        void 0,
                        (y = x._xScale),
                        (k = x._yScale || x._scale),
                        (M = x._index),
                        (w = x._datasetIndex),
                        {
                          xLabel: y ? y.getLabelForIndex(M, w) : '',
                          yLabel: k ? k.getLabelForIndex(M, w) : '',
                          index: M,
                          datasetIndex: w,
                          x: x._model.x,
                          y: x._model.y
                        })
                      );
                    C.filter &&
                      (z = z.filter(function(t) {
                        return C.filter(t, P);
                      })),
                      C.itemSort &&
                        (z = z.sort(function(t, e) {
                          return C.itemSort(t, e, P);
                        })),
                      o.each(z, function(t) {
                        R.push(C.callbacks.labelColor.call(S, t, S._chart)),
                          L.push(C.callbacks.labelTextColor.call(S, t, S._chart));
                      }),
                      (D.title = S.getTitle(z, P)),
                      (D.beforeBody = S.getBeforeBody(z, P)),
                      (D.body = S.getBody(z, P)),
                      (D.afterBody = S.getAfterBody(z, P)),
                      (D.footer = S.getFooter(z, P)),
                      (D.x = Math.round(O.x)),
                      (D.y = Math.round(O.y)),
                      (D.caretPadding = C.caretPadding),
                      (D.labelColors = R),
                      (D.labelTextColors = L),
                      (D.dataPoints = z),
                      (A = (function(t, e) {
                        var i,
                          n,
                          a,
                          o,
                          r,
                          s = t._model,
                          l = t._chart,
                          u = t._chart.chartArea,
                          d = 'center',
                          c = 'center';
                        s.y < e.height ? (c = 'top') : s.y > l.height - e.height && (c = 'bottom');
                        var h = (u.left + u.right) / 2,
                          f = (u.top + u.bottom) / 2;
                        'center' === c
                          ? ((i = function(t) {
                              return t <= h;
                            }),
                            (n = function(t) {
                              return t > h;
                            }))
                          : ((i = function(t) {
                              return t <= e.width / 2;
                            }),
                            (n = function(t) {
                              return t >= l.width - e.width / 2;
                            })),
                          (a = function(t) {
                            return t + e.width + s.caretSize + s.caretPadding > l.width;
                          }),
                          (o = function(t) {
                            return t - e.width - s.caretSize - s.caretPadding < 0;
                          }),
                          (r = function(t) {
                            return t <= f ? 'top' : 'bottom';
                          }),
                          i(s.x)
                            ? ((d = 'left'), a(s.x) && ((d = 'center'), (c = r(s.y))))
                            : n(s.x) && ((d = 'right'), o(s.x) && ((d = 'center'), (c = r(s.y))));
                        var g = t._options;
                        return { xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : c };
                      })(
                        this,
                        (F = (function(t, e) {
                          var i = t._chart.ctx,
                            n = 2 * e.yPadding,
                            a = 0,
                            r = e.body,
                            s = r.reduce(function(t, e) {
                              return t + e.before.length + e.lines.length + e.after.length;
                            }, 0);
                          s += e.beforeBody.length + e.afterBody.length;
                          var l = e.title.length,
                            u = e.footer.length,
                            d = e.titleFontSize,
                            c = e.bodyFontSize,
                            h = e.footerFontSize;
                          (n += l * d),
                            (n += l ? (l - 1) * e.titleSpacing : 0),
                            (n += l ? e.titleMarginBottom : 0),
                            (n += s * c),
                            (n += s ? (s - 1) * e.bodySpacing : 0),
                            (n += u ? e.footerMarginTop : 0),
                            (n += u * h),
                            (n += u ? (u - 1) * e.footerSpacing : 0);
                          var f = 0,
                            g = function(t) {
                              a = Math.max(a, i.measureText(t).width + f);
                            };
                          return (
                            (i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily)),
                            o.each(e.title, g),
                            (i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily)),
                            o.each(e.beforeBody.concat(e.afterBody), g),
                            (f = e.displayColors ? c + 2 : 0),
                            o.each(r, function(t) {
                              o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g);
                            }),
                            (f = 0),
                            (i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily)),
                            o.each(e.footer, g),
                            { width: (a += 2 * e.xPadding), height: n }
                          );
                        })(this, D))
                      )),
                      (a = D),
                      (s = F),
                      (l = A),
                      (u = S._chart),
                      (d = a.x),
                      (c = a.y),
                      (h = a.caretSize),
                      (f = a.caretPadding),
                      (g = a.cornerRadius),
                      (p = l.xAlign),
                      (m = l.yAlign),
                      (v = h + f),
                      (b = g + f),
                      'right' === p
                        ? (d -= s.width)
                        : 'center' === p &&
                          ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)),
                      'top' === m ? (c += v) : (c -= 'bottom' === m ? s.height + v : s.height / 2),
                      'center' === m
                        ? 'left' === p
                          ? (d += v)
                          : 'right' === p && (d -= v)
                        : 'left' === p
                        ? (d -= b)
                        : 'right' === p && (d += b),
                      (T = { x: d, y: c });
                  } else D.opacity = 0;
                  return (
                    (D.xAlign = A.xAlign),
                    (D.yAlign = A.yAlign),
                    (D.x = T.x),
                    (D.y = T.y),
                    (D.width = F.width),
                    (D.height = F.height),
                    (D.caretX = O.x),
                    (D.caretY = O.y),
                    (S._model = D),
                    e && C.custom && C.custom.call(S, D),
                    S
                  );
                },
                drawCaret: function(t, e) {
                  var i = this._chart.ctx,
                    n = this._view,
                    a = this.getCaretPosition(t, e, n);
                  i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
                },
                getCaretPosition: function(t, e, i) {
                  var n,
                    a,
                    o,
                    r,
                    s,
                    l,
                    u = i.caretSize,
                    d = i.cornerRadius,
                    c = i.xAlign,
                    h = i.yAlign,
                    f = t.x,
                    g = t.y,
                    p = e.width,
                    m = e.height;
                  if ('center' === h)
                    (s = g + m / 2),
                      'left' === c
                        ? ((a = (n = f) - u), (o = n), (r = s + u), (l = s - u))
                        : ((a = (n = f + p) + u), (o = n), (r = s - u), (l = s + u));
                  else if (
                    ('left' === c
                      ? ((n = (a = f + d + u) - u), (o = a + u))
                      : 'right' === c
                      ? ((n = (a = f + p - d - u) - u), (o = a + u))
                      : ((n = (a = i.caretX) - u), (o = a + u)),
                    'top' === h)
                  )
                    (s = (r = g) - u), (l = r);
                  else {
                    (s = (r = g + m) + u), (l = r);
                    var v = o;
                    (o = n), (n = v);
                  }
                  return { x1: n, x2: a, x3: o, y1: r, y2: s, y3: l };
                },
                drawTitle: function(t, i, n, a) {
                  var r = i.title;
                  if (r.length) {
                    (n.textAlign = i._titleAlign), (n.textBaseline = 'top');
                    var s,
                      l,
                      u = i.titleFontSize,
                      d = i.titleSpacing;
                    for (
                      n.fillStyle = e(i.titleFontColor, a),
                        n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily),
                        s = 0,
                        l = r.length;
                      s < l;
                      ++s
                    )
                      n.fillText(r[s], t.x, t.y),
                        (t.y += u + d),
                        s + 1 === r.length && (t.y += i.titleMarginBottom - d);
                  }
                },
                drawBody: function(t, i, n, a) {
                  var r = i.bodyFontSize,
                    s = i.bodySpacing,
                    l = i.body;
                  (n.textAlign = i._bodyAlign),
                    (n.textBaseline = 'top'),
                    (n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily));
                  var u = 0,
                    d = function(e) {
                      n.fillText(e, t.x + u, t.y), (t.y += r + s);
                    };
                  (n.fillStyle = e(i.bodyFontColor, a)), o.each(i.beforeBody, d);
                  var c = i.displayColors;
                  (u = c ? r + 2 : 0),
                    o.each(l, function(s, l) {
                      var u = e(i.labelTextColors[l], a);
                      (n.fillStyle = u),
                        o.each(s.before, d),
                        o.each(s.lines, function(o) {
                          c &&
                            ((n.fillStyle = e(i.legendColorBackground, a)),
                            n.fillRect(t.x, t.y, r, r),
                            (n.lineWidth = 1),
                            (n.strokeStyle = e(i.labelColors[l].borderColor, a)),
                            n.strokeRect(t.x, t.y, r, r),
                            (n.fillStyle = e(i.labelColors[l].backgroundColor, a)),
                            n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2),
                            (n.fillStyle = u)),
                            d(o);
                        }),
                        o.each(s.after, d);
                    }),
                    (u = 0),
                    o.each(i.afterBody, d),
                    (t.y -= s);
                },
                drawFooter: function(t, i, n, a) {
                  var r = i.footer;
                  r.length &&
                    ((t.y += i.footerMarginTop),
                    (n.textAlign = i._footerAlign),
                    (n.textBaseline = 'top'),
                    (n.fillStyle = e(i.footerFontColor, a)),
                    (n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily)),
                    o.each(r, function(e) {
                      n.fillText(e, t.x, t.y), (t.y += i.footerFontSize + i.footerSpacing);
                    }));
                },
                drawBackground: function(t, i, n, a, o) {
                  (n.fillStyle = e(i.backgroundColor, o)),
                    (n.strokeStyle = e(i.borderColor, o)),
                    (n.lineWidth = i.borderWidth);
                  var r = i.xAlign,
                    s = i.yAlign,
                    l = t.x,
                    u = t.y,
                    d = a.width,
                    c = a.height,
                    h = i.cornerRadius;
                  n.beginPath(),
                    n.moveTo(l + h, u),
                    'top' === s && this.drawCaret(t, a),
                    n.lineTo(l + d - h, u),
                    n.quadraticCurveTo(l + d, u, l + d, u + h),
                    'center' === s && 'right' === r && this.drawCaret(t, a),
                    n.lineTo(l + d, u + c - h),
                    n.quadraticCurveTo(l + d, u + c, l + d - h, u + c),
                    'bottom' === s && this.drawCaret(t, a),
                    n.lineTo(l + h, u + c),
                    n.quadraticCurveTo(l, u + c, l, u + c - h),
                    'center' === s && 'left' === r && this.drawCaret(t, a),
                    n.lineTo(l, u + h),
                    n.quadraticCurveTo(l, u, l + h, u),
                    n.closePath(),
                    n.fill(),
                    i.borderWidth > 0 && n.stroke();
                },
                draw: function() {
                  var t = this._chart.ctx,
                    e = this._view;
                  if (0 !== e.opacity) {
                    var i = { width: e.width, height: e.height },
                      n = { x: e.x, y: e.y },
                      a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                      o =
                        e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled &&
                      o &&
                      (this.drawBackground(n, e, t, i, a),
                      (n.x += e.xPadding),
                      (n.y += e.yPadding),
                      this.drawTitle(n, e, t, a),
                      this.drawBody(n, e, t, a),
                      this.drawFooter(n, e, t, a));
                  }
                },
                handleEvent: function(t) {
                  var e,
                    i = this,
                    n = i._options;
                  return (
                    (i._lastActive = i._lastActive || []),
                    'mouseout' === t.type
                      ? (i._active = [])
                      : (i._active = i._chart.getElementsAtEventForMode(t, n.mode, n)),
                    (e = !o.arrayEquals(i._active, i._lastActive)) &&
                      ((i._lastActive = i._active),
                      (n.enabled || n.custom) && ((i._eventPosition = { x: t.x, y: t.y }), i.update(!0), i.pivot())),
                    e
                  );
                }
              })),
                (t.Tooltip.positioners = {
                  average: function(t) {
                    if (!t.length) return !1;
                    var e,
                      i,
                      n = 0,
                      a = 0,
                      o = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                      var r = t[e];
                      if (r && r.hasValue()) {
                        var s = r.tooltipPosition();
                        (n += s.x), (a += s.y), ++o;
                      }
                    }
                    return { x: Math.round(n / o), y: Math.round(a / o) };
                  },
                  nearest: function(t, e) {
                    var i,
                      n,
                      a,
                      r = e.x,
                      s = e.y,
                      l = Number.POSITIVE_INFINITY;
                    for (i = 0, n = t.length; i < n; ++i) {
                      var u = t[i];
                      if (u && u.hasValue()) {
                        var d = u.getCenterPoint(),
                          c = o.distanceBetweenPoints(e, d);
                        c < l && ((l = c), (a = u));
                      }
                    }
                    if (a) {
                      var h = a.tooltipPosition();
                      (r = h.x), (s = h.y);
                    }
                    return { x: r, y: s };
                  }
                });
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      36: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45);
          n._set('global', {
            elements: { arc: { backgroundColor: n.global.defaultColor, borderColor: '#fff', borderWidth: 2 } }
          }),
            (e.exports = a.extend({
              inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
              },
              inRange: function(t, e) {
                var i = this._view;
                if (i) {
                  for (
                    var n = o.getAngleFromPoint(i, { x: t, y: e }),
                      a = n.angle,
                      r = n.distance,
                      s = i.startAngle,
                      l = i.endAngle;
                    l < s;

                  )
                    l += 2 * Math.PI;
                  for (; a > l; ) a -= 2 * Math.PI;
                  for (; a < s; ) a += 2 * Math.PI;
                  var u = a >= s && a <= l,
                    d = r >= i.innerRadius && r <= i.outerRadius;
                  return u && d;
                }
                return !1;
              },
              getCenterPoint: function() {
                var t = this._view,
                  e = (t.startAngle + t.endAngle) / 2,
                  i = (t.innerRadius + t.outerRadius) / 2;
                return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
              },
              getArea: function() {
                var t = this._view;
                return (
                  Math.PI *
                  ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                  (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                );
              },
              tooltipPosition: function() {
                var t = this._view,
                  e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                  i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
              },
              draw: function() {
                var t = this._chart.ctx,
                  e = this._view,
                  i = e.startAngle,
                  n = e.endAngle;
                t.beginPath(),
                  t.arc(e.x, e.y, e.outerRadius, i, n),
                  t.arc(e.x, e.y, e.innerRadius, n, i, !0),
                  t.closePath(),
                  (t.strokeStyle = e.borderColor),
                  (t.lineWidth = e.borderWidth),
                  (t.fillStyle = e.backgroundColor),
                  t.fill(),
                  (t.lineJoin = 'bevel'),
                  e.borderWidth && t.stroke();
              }
            }));
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      37: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45),
            r = n.global;
          n._set('global', {
            elements: {
              line: {
                tension: 0.4,
                backgroundColor: r.defaultColor,
                borderWidth: 3,
                borderColor: r.defaultColor,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                capBezierPoints: !0,
                fill: !0
              }
            }
          }),
            (e.exports = a.extend({
              draw: function() {
                var t,
                  e,
                  i,
                  n,
                  a = this._view,
                  s = this._chart.ctx,
                  l = a.spanGaps,
                  u = this._children.slice(),
                  d = r.elements.line,
                  c = -1;
                for (
                  this._loop && u.length && u.push(u[0]),
                    s.save(),
                    s.lineCap = a.borderCapStyle || d.borderCapStyle,
                    s.setLineDash && s.setLineDash(a.borderDash || d.borderDash),
                    s.lineDashOffset = a.borderDashOffset || d.borderDashOffset,
                    s.lineJoin = a.borderJoinStyle || d.borderJoinStyle,
                    s.lineWidth = a.borderWidth || d.borderWidth,
                    s.strokeStyle = a.borderColor || r.defaultColor,
                    s.beginPath(),
                    c = -1,
                    t = 0;
                  t < u.length;
                  ++t
                )
                  (e = u[t]),
                    (i = o.previousItem(u, t)),
                    (n = e._view),
                    0 === t
                      ? n.skip || (s.moveTo(n.x, n.y), (c = t))
                      : ((i = -1 === c ? i : u[c]),
                        n.skip ||
                          ((c !== t - 1 && !l) || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view),
                          (c = t)));
                s.stroke(), s.restore();
              }
            }));
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      38: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45),
            r = n.global.defaultColor;
          function s(t) {
            var e = this._view;
            return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
          }
          n._set('global', {
            elements: {
              point: {
                radius: 3,
                pointStyle: 'circle',
                backgroundColor: r,
                borderColor: r,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
              }
            }
          }),
            (e.exports = a.extend({
              inRange: function(t, e) {
                var i = this._view;
                return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
              },
              inLabelRange: s,
              inXRange: s,
              inYRange: function(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
              },
              getCenterPoint: function() {
                var t = this._view;
                return { x: t.x, y: t.y };
              },
              getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2);
              },
              tooltipPosition: function() {
                var t = this._view;
                return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
              },
              draw: function(t) {
                var e = this._view,
                  i = this._model,
                  a = this._chart.ctx,
                  s = e.pointStyle,
                  l = e.radius,
                  u = e.x,
                  d = e.y,
                  c = o.color,
                  h = 0;
                e.skip ||
                  ((a.strokeStyle = e.borderColor || r),
                  (a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth)),
                  (a.fillStyle = e.backgroundColor || r),
                  void 0 !== t &&
                    (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) &&
                    (i.x < t.left
                      ? (h = (u - i.x) / (t.left - i.x))
                      : 1.01 * t.right < i.x
                      ? (h = (i.x - u) / (i.x - t.right))
                      : i.y < t.top
                      ? (h = (d - i.y) / (t.top - i.y))
                      : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)),
                    (h = Math.round(100 * h) / 100),
                    (a.strokeStyle = c(a.strokeStyle)
                      .alpha(h)
                      .rgbString()),
                    (a.fillStyle = c(a.fillStyle)
                      .alpha(h)
                      .rgbString())),
                  o.canvas.drawPoint(a, s, l, u, d));
              }
            }));
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      39: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26);
          function o(t) {
            return void 0 !== t._view.width;
          }
          function r(t) {
            var e,
              i,
              n,
              a,
              r = t._view;
            if (o(t)) {
              var s = r.width / 2;
              (e = r.x - s), (i = r.x + s), (n = Math.min(r.y, r.base)), (a = Math.max(r.y, r.base));
            } else {
              var l = r.height / 2;
              (e = Math.min(r.x, r.base)), (i = Math.max(r.x, r.base)), (n = r.y - l), (a = r.y + l);
            }
            return { left: e, top: n, right: i, bottom: a };
          }
          n._set('global', {
            elements: {
              rectangle: {
                backgroundColor: n.global.defaultColor,
                borderColor: n.global.defaultColor,
                borderSkipped: 'bottom',
                borderWidth: 0
              }
            }
          }),
            (e.exports = a.extend({
              draw: function() {
                var t,
                  e,
                  i,
                  n,
                  a,
                  o,
                  r,
                  s = this._chart.ctx,
                  l = this._view,
                  u = l.borderWidth;
                if (
                  (l.horizontal
                    ? ((t = l.base),
                      (e = l.x),
                      (i = l.y - l.height / 2),
                      (n = l.y + l.height / 2),
                      (a = e > t ? 1 : -1),
                      (o = 1),
                      (r = l.borderSkipped || 'left'))
                    : ((t = l.x - l.width / 2),
                      (e = l.x + l.width / 2),
                      (i = l.y),
                      (a = 1),
                      (o = (n = l.base) > i ? 1 : -1),
                      (r = l.borderSkipped || 'bottom')),
                  u)
                ) {
                  var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                    c = (u = u > d ? d : u) / 2,
                    h = t + ('left' !== r ? c * a : 0),
                    f = e + ('right' !== r ? -c * a : 0),
                    g = i + ('top' !== r ? c * o : 0),
                    p = n + ('bottom' !== r ? -c * o : 0);
                  h !== f && ((i = g), (n = p)), g !== p && ((t = h), (e = f));
                }
                s.beginPath(), (s.fillStyle = l.backgroundColor), (s.strokeStyle = l.borderColor), (s.lineWidth = u);
                var m = [[t, n], [t, i], [e, i], [e, n]],
                  v = ['bottom', 'left', 'top', 'right'].indexOf(r, 0);
                function b(t) {
                  return m[(v + t) % 4];
                }
                -1 === v && (v = 0);
                var x = b(0);
                s.moveTo(x[0], x[1]);
                for (var y = 1; y < 4; y++) (x = b(y)), s.lineTo(x[0], x[1]);
                s.fill(), u && s.stroke();
              },
              height: function() {
                var t = this._view;
                return t.base - t.y;
              },
              inRange: function(t, e) {
                var i = !1;
                if (this._view) {
                  var n = r(this);
                  i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
                }
                return i;
              },
              inLabelRange: function(t, e) {
                if (!this._view) return !1;
                var i = r(this);
                return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom;
              },
              inXRange: function(t) {
                var e = r(this);
                return t >= e.left && t <= e.right;
              },
              inYRange: function(t) {
                var e = r(this);
                return t >= e.top && t <= e.bottom;
              },
              getCenterPoint: function() {
                var t,
                  e,
                  i = this._view;
                return (
                  o(this) ? ((t = i.x), (e = (i.y + i.base) / 2)) : ((t = (i.x + i.base) / 2), (e = i.y)),
                  { x: t, y: e }
                );
              },
              getArea: function() {
                var t = this._view;
                return t.width * Math.abs(t.y - t.base);
              },
              tooltipPosition: function() {
                var t = this._view;
                return { x: t.x, y: t.y };
              }
            }));
        },
        { 25: 25, 26: 26 }
      ],
      40: [
        function(t, e, i) {
          'use strict';
          (e.exports = {}),
            (e.exports.Arc = t(36)),
            (e.exports.Line = t(37)),
            (e.exports.Point = t(38)),
            (e.exports.Rectangle = t(39));
        },
        { 36: 36, 37: 37, 38: 38, 39: 39 }
      ],
      41: [
        function(t, e, i) {
          'use strict';
          var n = t(42);
          i = e.exports = {
            clear: function(t) {
              t.ctx.clearRect(0, 0, t.width, t.height);
            },
            roundedRect: function(t, e, i, n, a, o) {
              if (o) {
                var r = Math.min(o, n / 2),
                  s = Math.min(o, a / 2);
                t.moveTo(e + r, i),
                  t.lineTo(e + n - r, i),
                  t.quadraticCurveTo(e + n, i, e + n, i + s),
                  t.lineTo(e + n, i + a - s),
                  t.quadraticCurveTo(e + n, i + a, e + n - r, i + a),
                  t.lineTo(e + r, i + a),
                  t.quadraticCurveTo(e, i + a, e, i + a - s),
                  t.lineTo(e, i + s),
                  t.quadraticCurveTo(e, i, e + r, i);
              } else t.rect(e, i, n, a);
            },
            drawPoint: function(t, e, i, n, a) {
              var o, r, s, l, u, d;
              if (
                !e ||
                'object' != typeof e ||
                ('[object HTMLImageElement]' !== (o = e.toString()) && '[object HTMLCanvasElement]' !== o)
              ) {
                if (!(isNaN(i) || i <= 0)) {
                  switch (e) {
                    default:
                      t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                      break;
                    case 'triangle':
                      t.beginPath(),
                        (u = ((r = (3 * i) / Math.sqrt(3)) * Math.sqrt(3)) / 2),
                        t.moveTo(n - r / 2, a + u / 3),
                        t.lineTo(n + r / 2, a + u / 3),
                        t.lineTo(n, a - (2 * u) / 3),
                        t.closePath(),
                        t.fill();
                      break;
                    case 'rect':
                      (d = (1 / Math.SQRT2) * i),
                        t.beginPath(),
                        t.fillRect(n - d, a - d, 2 * d, 2 * d),
                        t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                      break;
                    case 'rectRounded':
                      var c = i / Math.SQRT2,
                        h = n - c,
                        f = a - c,
                        g = Math.SQRT2 * i;
                      t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill();
                      break;
                    case 'rectRot':
                      (d = (1 / Math.SQRT2) * i),
                        t.beginPath(),
                        t.moveTo(n - d, a),
                        t.lineTo(n, a + d),
                        t.lineTo(n + d, a),
                        t.lineTo(n, a - d),
                        t.closePath(),
                        t.fill();
                      break;
                    case 'cross':
                      t.beginPath(),
                        t.moveTo(n, a + i),
                        t.lineTo(n, a - i),
                        t.moveTo(n - i, a),
                        t.lineTo(n + i, a),
                        t.closePath();
                      break;
                    case 'crossRot':
                      t.beginPath(),
                        (s = Math.cos(Math.PI / 4) * i),
                        (l = Math.sin(Math.PI / 4) * i),
                        t.moveTo(n - s, a - l),
                        t.lineTo(n + s, a + l),
                        t.moveTo(n - s, a + l),
                        t.lineTo(n + s, a - l),
                        t.closePath();
                      break;
                    case 'star':
                      t.beginPath(),
                        t.moveTo(n, a + i),
                        t.lineTo(n, a - i),
                        t.moveTo(n - i, a),
                        t.lineTo(n + i, a),
                        (s = Math.cos(Math.PI / 4) * i),
                        (l = Math.sin(Math.PI / 4) * i),
                        t.moveTo(n - s, a - l),
                        t.lineTo(n + s, a + l),
                        t.moveTo(n - s, a + l),
                        t.lineTo(n + s, a - l),
                        t.closePath();
                      break;
                    case 'line':
                      t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                      break;
                    case 'dash':
                      t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath();
                  }
                  t.stroke();
                }
              } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
            },
            clipArea: function(t, e) {
              t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
            },
            unclipArea: function(t) {
              t.restore();
            },
            lineTo: function(t, e, i, n) {
              if (i.steppedLine)
                return (
                  ('after' === i.steppedLine && !n) || ('after' !== i.steppedLine && n)
                    ? t.lineTo(e.x, i.y)
                    : t.lineTo(i.x, e.y),
                  void t.lineTo(i.x, i.y)
                );
              i.tension
                ? t.bezierCurveTo(
                    n ? e.controlPointPreviousX : e.controlPointNextX,
                    n ? e.controlPointPreviousY : e.controlPointNextY,
                    n ? i.controlPointNextX : i.controlPointPreviousX,
                    n ? i.controlPointNextY : i.controlPointPreviousY,
                    i.x,
                    i.y
                  )
                : t.lineTo(i.x, i.y);
            }
          };
          (n.clear = i.clear),
            (n.drawRoundedRectangle = function(t) {
              t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath();
            });
        },
        { 42: 42 }
      ],
      42: [
        function(t, e, i) {
          'use strict';
          var n,
            a = {
              noop: function() {},
              uid: ((n = 0),
              function() {
                return n++;
              }),
              isNullOrUndef: function(t) {
                return null == t;
              },
              isArray: Array.isArray
                ? Array.isArray
                : function(t) {
                    return '[object Array]' === Object.prototype.toString.call(t);
                  },
              isObject: function(t) {
                return null !== t && '[object Object]' === Object.prototype.toString.call(t);
              },
              valueOrDefault: function(t, e) {
                return void 0 === t ? e : t;
              },
              valueAtIndexOrDefault: function(t, e, i) {
                return a.valueOrDefault(a.isArray(t) ? t[e] : t, i);
              },
              callback: function(t, e, i) {
                if (t && 'function' == typeof t.call) return t.apply(i, e);
              },
              each: function(t, e, i, n) {
                var o, r, s;
                if (a.isArray(t))
                  if (((r = t.length), n)) for (o = r - 1; o >= 0; o--) e.call(i, t[o], o);
                  else for (o = 0; o < r; o++) e.call(i, t[o], o);
                else if (a.isObject(t))
                  for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) e.call(i, t[s[o]], s[o]);
              },
              arrayEquals: function(t, e) {
                var i, n, o, r;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, n = t.length; i < n; ++i)
                  if (((o = t[i]), (r = e[i]), o instanceof Array && r instanceof Array)) {
                    if (!a.arrayEquals(o, r)) return !1;
                  } else if (o !== r) return !1;
                return !0;
              },
              clone: function(t) {
                if (a.isArray(t)) return t.map(a.clone);
                if (a.isObject(t)) {
                  for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = a.clone(t[i[o]]);
                  return e;
                }
                return t;
              },
              _merger: function(t, e, i, n) {
                var o = e[t],
                  r = i[t];
                a.isObject(o) && a.isObject(r) ? a.merge(o, r, n) : (e[t] = a.clone(r));
              },
              _mergerIf: function(t, e, i) {
                var n = e[t],
                  o = i[t];
                a.isObject(n) && a.isObject(o) ? a.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = a.clone(o));
              },
              merge: function(t, e, i) {
                var n,
                  o,
                  r,
                  s,
                  l,
                  u = a.isArray(e) ? e : [e],
                  d = u.length;
                if (!a.isObject(t)) return t;
                for (n = (i = i || {}).merger || a._merger, o = 0; o < d; ++o)
                  if (((e = u[o]), a.isObject(e)))
                    for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) n(r[l], t, e, i);
                return t;
              },
              mergeIf: function(t, e) {
                return a.merge(t, e, { merger: a._mergerIf });
              },
              extend: function(t) {
                for (
                  var e = function(e, i) {
                      t[i] = e;
                    },
                    i = 1,
                    n = arguments.length;
                  i < n;
                  ++i
                )
                  a.each(arguments[i], e);
                return t;
              },
              inherits: function(t) {
                var e = this,
                  i =
                    t && t.hasOwnProperty('constructor')
                      ? t.constructor
                      : function() {
                          return e.apply(this, arguments);
                        },
                  n = function() {
                    this.constructor = i;
                  };
                return (
                  (n.prototype = e.prototype),
                  (i.prototype = new n()),
                  (i.extend = a.inherits),
                  t && a.extend(i.prototype, t),
                  (i.__super__ = e.prototype),
                  i
                );
              }
            };
          (e.exports = a),
            (a.callCallback = a.callback),
            (a.indexOf = function(t, e, i) {
              return Array.prototype.indexOf.call(t, e, i);
            }),
            (a.getValueOrDefault = a.valueOrDefault),
            (a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault);
        },
        {}
      ],
      43: [
        function(t, e, i) {
          'use strict';
          var n = t(42),
            a = {
              linear: function(t) {
                return t;
              },
              easeInQuad: function(t) {
                return t * t;
              },
              easeOutQuad: function(t) {
                return -t * (t - 2);
              },
              easeInOutQuad: function(t) {
                return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
              },
              easeInCubic: function(t) {
                return t * t * t;
              },
              easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1;
              },
              easeInOutCubic: function(t) {
                return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
              },
              easeInQuart: function(t) {
                return t * t * t * t;
              },
              easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1);
              },
              easeInOutQuart: function(t) {
                return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
              },
              easeInQuint: function(t) {
                return t * t * t * t * t;
              },
              easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1;
              },
              easeInOutQuint: function(t) {
                return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
              },
              easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2));
              },
              easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2));
              },
              easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              },
              easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
              },
              easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
              },
              easeInOutExpo: function(t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (t /= 0.5) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * --t));
              },
              easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
              },
              easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t);
              },
              easeInOutCirc: function(t) {
                return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              },
              easeInElastic: function(t) {
                var e = 1.70158,
                  i = 0,
                  n = 1;
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (i || (i = 0.3),
                    n < 1 ? ((n = 1), (e = i / 4)) : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                    -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i));
              },
              easeOutElastic: function(t) {
                var e = 1.70158,
                  i = 0,
                  n = 1;
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (i || (i = 0.3),
                    n < 1 ? ((n = 1), (e = i / 4)) : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                    n * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / i) + 1);
              },
              easeInOutElastic: function(t) {
                var e = 1.70158,
                  i = 0,
                  n = 1;
                return 0 === t
                  ? 0
                  : 2 == (t /= 0.5)
                  ? 1
                  : (i || (i = 0.45),
                    n < 1 ? ((n = 1), (e = i / 4)) : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                    t < 1
                      ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i) * -0.5
                      : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i) * 0.5 + 1);
              },
              easeInBack: function(t) {
                return t * t * (2.70158 * t - 1.70158);
              },
              easeOutBack: function(t) {
                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
              },
              easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= 0.5) < 1
                  ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                  : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
              },
              easeInBounce: function(t) {
                return 1 - a.easeOutBounce(1 - t);
              },
              easeOutBounce: function(t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
              easeInOutBounce: function(t) {
                return t < 0.5 ? 0.5 * a.easeInBounce(2 * t) : 0.5 * a.easeOutBounce(2 * t - 1) + 0.5;
              }
            };
          (e.exports = { effects: a }), (n.easingEffects = a);
        },
        { 42: 42 }
      ],
      44: [
        function(t, e, i) {
          'use strict';
          var n = t(42);
          e.exports = {
            toLineHeight: function(t, e) {
              var i = ('' + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!i || 'normal' === i[1]) return 1.2 * e;
              switch (((t = +i[2]), i[3])) {
                case 'px':
                  return t;
                case '%':
                  t /= 100;
              }
              return e * t;
            },
            toPadding: function(t) {
              var e, i, a, o;
              return (
                n.isObject(t)
                  ? ((e = +t.top || 0), (i = +t.right || 0), (a = +t.bottom || 0), (o = +t.left || 0))
                  : (e = i = a = o = +t || 0),
                { top: e, right: i, bottom: a, left: o, height: e + a, width: o + i }
              );
            },
            resolve: function(t, e, i) {
              var a, o, r;
              for (a = 0, o = t.length; a < o; ++a)
                if (
                  void 0 !== (r = t[a]) &&
                  (void 0 !== e && 'function' == typeof r && (r = r(e)),
                  void 0 !== i && n.isArray(r) && (r = r[i]),
                  void 0 !== r)
                )
                  return r;
            }
          };
        },
        { 42: 42 }
      ],
      45: [
        function(t, e, i) {
          'use strict';
          (e.exports = t(42)), (e.exports.easing = t(43)), (e.exports.canvas = t(41)), (e.exports.options = t(44));
        },
        { 41: 41, 42: 42, 43: 43, 44: 44 }
      ],
      46: [
        function(t, e, i) {
          e.exports = {
            acquireContext: function(t) {
              return t && t.canvas && (t = t.canvas), (t && t.getContext('2d')) || null;
            }
          };
        },
        {}
      ],
      47: [
        function(t, e, i) {
          'use strict';
          var n = t(45),
            a = '$chartjs',
            o = 'chartjs-',
            r = o + 'render-monitor',
            s = o + 'render-animation',
            l = ['animationstart', 'webkitAnimationStart'],
            u = {
              touchstart: 'mousedown',
              touchmove: 'mousemove',
              touchend: 'mouseup',
              pointerenter: 'mouseenter',
              pointerdown: 'mousedown',
              pointermove: 'mousemove',
              pointerup: 'mouseup',
              pointerleave: 'mouseout',
              pointerout: 'mouseout'
            };
          function d(t, e) {
            var i = n.getStyle(t, e),
              a = i && i.match(/^(\d+)(\.\d+)?px$/);
            return a ? Number(a[1]) : void 0;
          }
          var c = !!(function() {
            var t = !1;
            try {
              var e = Object.defineProperty({}, 'passive', {
                get: function() {
                  t = !0;
                }
              });
              window.addEventListener('e', null, e);
            } catch (t) {}
            return t;
          })() && { passive: !0 };
          function h(t, e, i) {
            t.addEventListener(e, i, c);
          }
          function f(t, e, i) {
            t.removeEventListener(e, i, c);
          }
          function g(t, e, i, n, a) {
            return { type: t, chart: e, native: a || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null };
          }
          function p(t, e, i) {
            var u,
              d,
              c,
              f,
              p,
              m,
              v,
              b,
              x = t[a] || (t[a] = {}),
              y = (x.resizer = (function(t) {
                var e = document.createElement('div'),
                  i = o + 'size-monitor',
                  n =
                    'position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;';
                (e.style.cssText = n),
                  (e.className = i),
                  (e.innerHTML =
                    '<div class="' +
                    i +
                    '-expand" style="' +
                    n +
                    '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' +
                    i +
                    '-shrink" style="' +
                    n +
                    '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>');
                var a = e.childNodes[0],
                  r = e.childNodes[1];
                e._reset = function() {
                  (a.scrollLeft = 1e6), (a.scrollTop = 1e6), (r.scrollLeft = 1e6), (r.scrollTop = 1e6);
                };
                var s = function() {
                  e._reset(), t();
                };
                return h(a, 'scroll', s.bind(a, 'expand')), h(r, 'scroll', s.bind(r, 'shrink')), e;
              })(
                ((u = function() {
                  if (x.resizer) return e(g('resize', i));
                }),
                (c = !1),
                (f = []),
                function() {
                  (f = Array.prototype.slice.call(arguments)),
                    (d = d || this),
                    c ||
                      ((c = !0),
                      n.requestAnimFrame.call(window, function() {
                        (c = !1), u.apply(d, f);
                      }));
                })
              ));
            (m = function() {
              if (x.resizer) {
                var e = t.parentNode;
                e && e !== y.parentNode && e.insertBefore(y, e.firstChild), y._reset();
              }
            }),
              (v = (p = t)[a] || (p[a] = {})),
              (b = v.renderProxy = function(t) {
                t.animationName === s && m();
              }),
              n.each(l, function(t) {
                h(p, t, b);
              }),
              (v.reflow = !!p.offsetParent),
              p.classList.add(r);
          }
          function m(t) {
            var e,
              i,
              o,
              s = t[a] || {},
              u = s.resizer;
            delete s.resizer,
              (i = (e = t)[a] || {}),
              (o = i.renderProxy) &&
                (n.each(l, function(t) {
                  f(e, t, o);
                }),
                delete i.renderProxy),
              e.classList.remove(r),
              u && u.parentNode && u.parentNode.removeChild(u);
          }
          (e.exports = {
            _enabled: 'undefined' != typeof window && 'undefined' != typeof document,
            initialize: function() {
              var t,
                e,
                i,
                n = 'from{opacity:0.99}to{opacity:1}';
              (e =
                '@-webkit-keyframes ' +
                s +
                '{' +
                n +
                '}@keyframes ' +
                s +
                '{' +
                n +
                '}.' +
                r +
                '{-webkit-animation:' +
                s +
                ' 0.001s;animation:' +
                s +
                ' 0.001s;}'),
                (i = (t = this)._style || document.createElement('style')),
                t._style ||
                  ((t._style = i),
                  (e = '/* Chart.js */\n' + e),
                  i.setAttribute('type', 'text/css'),
                  document.getElementsByTagName('head')[0].appendChild(i)),
                i.appendChild(document.createTextNode(e));
            },
            acquireContext: function(t, e) {
              'string' == typeof t ? (t = document.getElementById(t)) : t.length && (t = t[0]),
                t && t.canvas && (t = t.canvas);
              var i = t && t.getContext && t.getContext('2d');
              return i && i.canvas === t
                ? ((function(t, e) {
                    var i = t.style,
                      n = t.getAttribute('height'),
                      o = t.getAttribute('width');
                    if (
                      ((t[a] = {
                        initial: {
                          height: n,
                          width: o,
                          style: { display: i.display, height: i.height, width: i.width }
                        }
                      }),
                      (i.display = i.display || 'block'),
                      null === o || '' === o)
                    ) {
                      var r = d(t, 'width');
                      void 0 !== r && (t.width = r);
                    }
                    if (null === n || '' === n)
                      if ('' === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                      else {
                        var s = d(t, 'height');
                        void 0 !== r && (t.height = s);
                      }
                  })(t, e),
                  i)
                : null;
            },
            releaseContext: function(t) {
              var e = t.canvas;
              if (e[a]) {
                var i = e[a].initial;
                ['height', 'width'].forEach(function(t) {
                  var a = i[t];
                  n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
                }),
                  n.each(i.style || {}, function(t, i) {
                    e.style[i] = t;
                  }),
                  (e.width = e.width),
                  delete e[a];
              }
            },
            addEventListener: function(t, e, i) {
              var o = t.canvas;
              if ('resize' !== e) {
                var r = i[a] || (i[a] = {});
                h(
                  o,
                  e,
                  ((r.proxies || (r.proxies = {}))[t.id + '_' + e] = function(e) {
                    var a, o, r, s;
                    i(
                      ((o = t),
                      (r = u[(a = e).type] || a.type),
                      (s = n.getRelativePosition(a, o)),
                      g(r, o, s.x, s.y, a))
                    );
                  })
                );
              } else p(o, i, t);
            },
            removeEventListener: function(t, e, i) {
              var n = t.canvas;
              if ('resize' !== e) {
                var o = ((i[a] || {}).proxies || {})[t.id + '_' + e];
                o && f(n, e, o);
              } else m(n);
            }
          }),
            (n.addEvent = h),
            (n.removeEvent = f);
        },
        { 45: 45 }
      ],
      48: [
        function(t, e, i) {
          'use strict';
          var n = t(45),
            a = t(46),
            o = t(47),
            r = o._enabled ? o : a;
          e.exports = n.extend(
            {
              initialize: function() {},
              acquireContext: function() {},
              releaseContext: function() {},
              addEventListener: function() {},
              removeEventListener: function() {}
            },
            r
          );
        },
        { 45: 45, 46: 46, 47: 47 }
      ],
      49: [
        function(t, e, i) {
          'use strict';
          (e.exports = {}), (e.exports.filler = t(50)), (e.exports.legend = t(51)), (e.exports.title = t(52));
        },
        { 50: 50, 51: 51, 52: 52 }
      ],
      50: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(40),
            o = t(45);
          n._set('global', { plugins: { filler: { propagate: !0 } } });
          var r = {
            dataset: function(t) {
              var e = t.fill,
                i = t.chart,
                n = i.getDatasetMeta(e),
                a = (n && i.isDatasetVisible(e) && n.dataset._children) || [],
                o = a.length || 0;
              return o
                ? function(t, e) {
                    return (e < o && a[e]._view) || null;
                  }
                : null;
            },
            boundary: function(t) {
              var e = t.boundary,
                i = e ? e.x : null,
                n = e ? e.y : null;
              return function(t) {
                return { x: null === i ? t.x : i, y: null === n ? t.y : n };
              };
            }
          };
          function s(t, e, i) {
            var n,
              a = t._model || {},
              o = a.fill;
            if ((void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o)) return !1;
            if (!0 === o) return 'origin';
            if (((n = parseFloat(o, 10)), isFinite(n) && Math.floor(n) === n))
              return ('-' !== o[0] && '+' !== o[0]) || (n = e + n), !(n === e || n < 0 || n >= i) && n;
            switch (o) {
              case 'bottom':
                return 'start';
              case 'top':
                return 'end';
              case 'zero':
                return 'origin';
              case 'origin':
              case 'start':
              case 'end':
                return o;
              default:
                return !1;
            }
          }
          function l(t) {
            var e,
              i = t.el._model || {},
              n = t.el._scale || {},
              a = t.fill,
              o = null;
            if (isFinite(a)) return null;
            if (
              ('start' === a
                ? (o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom)
                : 'end' === a
                ? (o = void 0 === i.scaleTop ? n.top : i.scaleTop)
                : void 0 !== i.scaleZero
                ? (o = i.scaleZero)
                : n.getBasePosition
                ? (o = n.getBasePosition())
                : n.getBasePixel && (o = n.getBasePixel()),
              null != o)
            ) {
              if (void 0 !== o.x && void 0 !== o.y) return o;
              if ('number' == typeof o && isFinite(o)) return { x: (e = n.isHorizontal()) ? o : null, y: e ? null : o };
            }
            return null;
          }
          function u(t, e, i) {
            var n,
              a = t[e].fill,
              o = [e];
            if (!i) return a;
            for (; !1 !== a && -1 === o.indexOf(a); ) {
              if (!isFinite(a)) return a;
              if (!(n = t[a])) return !1;
              if (n.visible) return a;
              o.push(a), (a = n.fill);
            }
            return !1;
          }
          function d(t) {
            return t && !t.skip;
          }
          function c(t, e, i, n, a) {
            var r;
            if (n && a) {
              for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) o.canvas.lineTo(t, e[r - 1], e[r]);
              for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) o.canvas.lineTo(t, i[r], i[r - 1], !0);
            }
          }
          e.exports = {
            id: 'filler',
            afterDatasetsUpdate: function(t, e) {
              var i,
                n,
                o,
                d,
                c,
                h,
                f,
                g = (t.data.datasets || []).length,
                p = e.propagate,
                m = [];
              for (n = 0; n < g; ++n)
                (d = null),
                  (o = (i = t.getDatasetMeta(n)).dataset) &&
                    o._model &&
                    o instanceof a.Line &&
                    (d = { visible: t.isDatasetVisible(n), fill: s(o, n, g), chart: t, el: o }),
                  (i.$filler = d),
                  m.push(d);
              for (n = 0; n < g; ++n)
                (d = m[n]) &&
                  ((d.fill = u(m, n, p)),
                  (d.boundary = l(d)),
                  (d.mapper = (void 0,
                  (f = void 0),
                  (h = (c = d).fill),
                  (f = 'dataset'),
                  !1 === h ? null : (isFinite(h) || (f = 'boundary'), r[f](c)))));
            },
            beforeDatasetDraw: function(t, e) {
              var i = e.meta.$filler;
              if (i) {
                var a = t.ctx,
                  r = i.el,
                  s = r._view,
                  l = r._children || [],
                  u = i.mapper,
                  h = s.backgroundColor || n.global.defaultColor;
                u &&
                  h &&
                  l.length &&
                  (o.canvas.clipArea(a, t.chartArea),
                  (function(t, e, i, n, a, o) {
                    var r,
                      s,
                      l,
                      u,
                      h,
                      f,
                      g,
                      p = e.length,
                      m = n.spanGaps,
                      v = [],
                      b = [],
                      x = 0,
                      y = 0;
                    for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r)
                      (h = i((u = e[(l = r % p)]._view), l, n)),
                        (f = d(u)),
                        (g = d(h)),
                        f && g
                          ? ((x = v.push(u)), (y = b.push(h)))
                          : x &&
                            y &&
                            (m
                              ? (f && v.push(u), g && b.push(h))
                              : (c(t, v, b, x, y), (x = y = 0), (v = []), (b = [])));
                    c(t, v, b, x, y), t.closePath(), (t.fillStyle = a), t.fill();
                  })(a, l, u, s, h, r._loop),
                  o.canvas.unclipArea(a));
              }
            }
          };
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      51: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45),
            r = t(30),
            s = o.noop;
          function l(t, e) {
            return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
          }
          n._set('global', {
            legend: {
              display: !0,
              position: 'top',
              fullWidth: !0,
              reverse: !1,
              weight: 1e3,
              onClick: function(t, e) {
                var i = e.datasetIndex,
                  n = this.chart,
                  a = n.getDatasetMeta(i);
                (a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null), n.update();
              },
              onHover: null,
              labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                  var e = t.data;
                  return o.isArray(e.datasets)
                    ? e.datasets.map(function(e, i) {
                        return {
                          text: e.label,
                          fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                          hidden: !t.isDatasetVisible(i),
                          lineCap: e.borderCapStyle,
                          lineDash: e.borderDash,
                          lineDashOffset: e.borderDashOffset,
                          lineJoin: e.borderJoinStyle,
                          lineWidth: e.borderWidth,
                          strokeStyle: e.borderColor,
                          pointStyle: e.pointStyle,
                          datasetIndex: i
                        };
                      }, this)
                    : [];
                }
              }
            },
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              for (var i = 0; i < t.data.datasets.length; i++)
                e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'),
                  t.data.datasets[i].label && e.push(t.data.datasets[i].label),
                  e.push('</li>');
              return e.push('</ul>'), e.join('');
            }
          });
          var u = a.extend({
            initialize: function(t) {
              o.extend(this, t), (this.legendHitBoxes = []), (this.doughnutMode = !1);
            },
            beforeUpdate: s,
            update: function(t, e, i) {
              var n = this;
              return (
                n.beforeUpdate(),
                (n.maxWidth = t),
                (n.maxHeight = e),
                (n.margins = i),
                n.beforeSetDimensions(),
                n.setDimensions(),
                n.afterSetDimensions(),
                n.beforeBuildLabels(),
                n.buildLabels(),
                n.afterBuildLabels(),
                n.beforeFit(),
                n.fit(),
                n.afterFit(),
                n.afterUpdate(),
                n.minSize
              );
            },
            afterUpdate: s,
            beforeSetDimensions: s,
            setDimensions: function() {
              var t = this;
              t.isHorizontal()
                ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0),
                (t.minSize = { width: 0, height: 0 });
            },
            afterSetDimensions: s,
            beforeBuildLabels: s,
            buildLabels: function() {
              var t = this,
                e = t.options.labels || {},
                i = o.callback(e.generateLabels, [t.chart], t) || [];
              e.filter &&
                (i = i.filter(function(i) {
                  return e.filter(i, t.chart.data);
                })),
                t.options.reverse && i.reverse(),
                (t.legendItems = i);
            },
            afterBuildLabels: s,
            beforeFit: s,
            fit: function() {
              var t = this,
                e = t.options,
                i = e.labels,
                a = e.display,
                r = t.ctx,
                s = n.global,
                u = o.valueOrDefault,
                d = u(i.fontSize, s.defaultFontSize),
                c = u(i.fontStyle, s.defaultFontStyle),
                h = u(i.fontFamily, s.defaultFontFamily),
                f = o.fontString(d, c, h),
                g = (t.legendHitBoxes = []),
                p = t.minSize,
                m = t.isHorizontal();
              if (
                (m
                  ? ((p.width = t.maxWidth), (p.height = a ? 10 : 0))
                  : ((p.width = a ? 10 : 0), (p.height = t.maxHeight)),
                a)
              )
                if (((r.font = f), m)) {
                  var v = (t.lineWidths = [0]),
                    b = t.legendItems.length ? d + i.padding : 0;
                  (r.textAlign = 'left'),
                    (r.textBaseline = 'top'),
                    o.each(t.legendItems, function(e, n) {
                      var a = l(i, d) + d / 2 + r.measureText(e.text).width;
                      v[v.length - 1] + a + i.padding >= t.width && ((b += d + i.padding), (v[v.length] = t.left)),
                        (g[n] = { left: 0, top: 0, width: a, height: d }),
                        (v[v.length - 1] += a + i.padding);
                    }),
                    (p.height += b);
                } else {
                  var x = i.padding,
                    y = (t.columnWidths = []),
                    k = i.padding,
                    M = 0,
                    w = 0,
                    S = d + x;
                  o.each(t.legendItems, function(t, e) {
                    var n = l(i, d) + d / 2 + r.measureText(t.text).width;
                    w + S > p.height && ((k += M + i.padding), y.push(M), (M = 0), (w = 0)),
                      (M = Math.max(M, n)),
                      (w += S),
                      (g[e] = { left: 0, top: 0, width: n, height: d });
                  }),
                    (k += M),
                    y.push(M),
                    (p.width += k);
                }
              (t.width = p.width), (t.height = p.height);
            },
            afterFit: s,
            isHorizontal: function() {
              return 'top' === this.options.position || 'bottom' === this.options.position;
            },
            draw: function() {
              var t = this,
                e = t.options,
                i = e.labels,
                a = n.global,
                r = a.elements.line,
                s = t.width,
                u = t.lineWidths;
              if (e.display) {
                var d,
                  c = t.ctx,
                  h = o.valueOrDefault,
                  f = h(i.fontColor, a.defaultFontColor),
                  g = h(i.fontSize, a.defaultFontSize),
                  p = h(i.fontStyle, a.defaultFontStyle),
                  m = h(i.fontFamily, a.defaultFontFamily),
                  v = o.fontString(g, p, m);
                (c.textAlign = 'left'),
                  (c.textBaseline = 'middle'),
                  (c.lineWidth = 0.5),
                  (c.strokeStyle = f),
                  (c.fillStyle = f),
                  (c.font = v);
                var b = l(i, g),
                  x = t.legendHitBoxes,
                  y = t.isHorizontal();
                d = y
                  ? { x: t.left + (s - u[0]) / 2, y: t.top + i.padding, line: 0 }
                  : { x: t.left + i.padding, y: t.top + i.padding, line: 0 };
                var k = g + i.padding;
                o.each(t.legendItems, function(n, l) {
                  var f,
                    p,
                    m,
                    v,
                    M,
                    w = c.measureText(n.text).width,
                    S = b + g / 2 + w,
                    C = d.x,
                    _ = d.y;
                  y
                    ? C + S >= s && ((_ = d.y += k), d.line++, (C = d.x = t.left + (s - u[d.line]) / 2))
                    : _ + k > t.bottom &&
                      ((C = d.x = C + t.columnWidths[d.line] + i.padding), (_ = d.y = t.top + i.padding), d.line++),
                    (function(t, i, n) {
                      if (!(isNaN(b) || b <= 0)) {
                        c.save(),
                          (c.fillStyle = h(n.fillStyle, a.defaultColor)),
                          (c.lineCap = h(n.lineCap, r.borderCapStyle)),
                          (c.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset)),
                          (c.lineJoin = h(n.lineJoin, r.borderJoinStyle)),
                          (c.lineWidth = h(n.lineWidth, r.borderWidth)),
                          (c.strokeStyle = h(n.strokeStyle, a.defaultColor));
                        var s = 0 === h(n.lineWidth, r.borderWidth);
                        if (
                          (c.setLineDash && c.setLineDash(h(n.lineDash, r.borderDash)),
                          e.labels && e.labels.usePointStyle)
                        ) {
                          var l = (g * Math.SQRT2) / 2,
                            u = l / Math.SQRT2,
                            d = t + u,
                            f = i + u;
                          o.canvas.drawPoint(c, n.pointStyle, l, d, f);
                        } else s || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);
                        c.restore();
                      }
                    })(C, _, n),
                    (x[l].left = C),
                    (x[l].top = _),
                    (f = n),
                    (p = w),
                    (v = b + (m = g / 2) + C),
                    (M = _ + m),
                    c.fillText(f.text, v, M),
                    f.hidden && (c.beginPath(), (c.lineWidth = 2), c.moveTo(v, M), c.lineTo(v + p, M), c.stroke()),
                    y ? (d.x += S + i.padding) : (d.y += k);
                });
              }
            },
            handleEvent: function(t) {
              var e = this,
                i = e.options,
                n = 'mouseup' === t.type ? 'click' : t.type,
                a = !1;
              if ('mousemove' === n) {
                if (!i.onHover) return;
              } else {
                if ('click' !== n) return;
                if (!i.onClick) return;
              }
              var o = t.x,
                r = t.y;
              if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
                for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                  var u = s[l];
                  if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                    if ('click' === n) {
                      i.onClick.call(e, t.native, e.legendItems[l]), (a = !0);
                      break;
                    }
                    if ('mousemove' === n) {
                      i.onHover.call(e, t.native, e.legendItems[l]), (a = !0);
                      break;
                    }
                  }
                }
              return a;
            }
          });
          function d(t, e) {
            var i = new u({ ctx: t.ctx, options: e, chart: t });
            r.configure(t, i, e), r.addBox(t, i), (t.legend = i);
          }
          e.exports = {
            id: 'legend',
            _element: u,
            beforeInit: function(t) {
              var e = t.options.legend;
              e && d(t, e);
            },
            beforeUpdate: function(t) {
              var e = t.options.legend,
                i = t.legend;
              e
                ? (o.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), (i.options = e)) : d(t, e))
                : i && (r.removeBox(t, i), delete t.legend);
            },
            afterEvent: function(t, e) {
              var i = t.legend;
              i && i.handleEvent(e);
            }
          };
        },
        { 25: 25, 26: 26, 30: 30, 45: 45 }
      ],
      52: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(26),
            o = t(45),
            r = t(30),
            s = o.noop;
          n._set('global', {
            title: {
              display: !1,
              fontStyle: 'bold',
              fullWidth: !0,
              lineHeight: 1.2,
              padding: 10,
              position: 'top',
              text: '',
              weight: 2e3
            }
          });
          var l = a.extend({
            initialize: function(t) {
              o.extend(this, t), (this.legendHitBoxes = []);
            },
            beforeUpdate: s,
            update: function(t, e, i) {
              var n = this;
              return (
                n.beforeUpdate(),
                (n.maxWidth = t),
                (n.maxHeight = e),
                (n.margins = i),
                n.beforeSetDimensions(),
                n.setDimensions(),
                n.afterSetDimensions(),
                n.beforeBuildLabels(),
                n.buildLabels(),
                n.afterBuildLabels(),
                n.beforeFit(),
                n.fit(),
                n.afterFit(),
                n.afterUpdate(),
                n.minSize
              );
            },
            afterUpdate: s,
            beforeSetDimensions: s,
            setDimensions: function() {
              var t = this;
              t.isHorizontal()
                ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0),
                (t.minSize = { width: 0, height: 0 });
            },
            afterSetDimensions: s,
            beforeBuildLabels: s,
            buildLabels: s,
            afterBuildLabels: s,
            beforeFit: s,
            fit: function() {
              var t = this,
                e = o.valueOrDefault,
                i = t.options,
                a = i.display,
                r = e(i.fontSize, n.global.defaultFontSize),
                s = t.minSize,
                l = o.isArray(i.text) ? i.text.length : 1,
                u = o.options.toLineHeight(i.lineHeight, r),
                d = a ? l * u + 2 * i.padding : 0;
              t.isHorizontal() ? ((s.width = t.maxWidth), (s.height = d)) : ((s.width = d), (s.height = t.maxHeight)),
                (t.width = s.width),
                (t.height = s.height);
            },
            afterFit: s,
            isHorizontal: function() {
              var t = this.options.position;
              return 'top' === t || 'bottom' === t;
            },
            draw: function() {
              var t = this,
                e = t.ctx,
                i = o.valueOrDefault,
                a = t.options,
                r = n.global;
              if (a.display) {
                var s,
                  l,
                  u,
                  d = i(a.fontSize, r.defaultFontSize),
                  c = i(a.fontStyle, r.defaultFontStyle),
                  h = i(a.fontFamily, r.defaultFontFamily),
                  f = o.fontString(d, c, h),
                  g = o.options.toLineHeight(a.lineHeight, d),
                  p = g / 2 + a.padding,
                  m = 0,
                  v = t.top,
                  b = t.left,
                  x = t.bottom,
                  y = t.right;
                (e.fillStyle = i(a.fontColor, r.defaultFontColor)),
                  (e.font = f),
                  t.isHorizontal()
                    ? ((l = b + (y - b) / 2), (u = v + p), (s = y - b))
                    : ((l = 'left' === a.position ? b + p : y - p),
                      (u = v + (x - v) / 2),
                      (s = x - v),
                      (m = Math.PI * ('left' === a.position ? -0.5 : 0.5))),
                  e.save(),
                  e.translate(l, u),
                  e.rotate(m),
                  (e.textAlign = 'center'),
                  (e.textBaseline = 'middle');
                var k = a.text;
                if (o.isArray(k)) for (var M = 0, w = 0; w < k.length; ++w) e.fillText(k[w], 0, M, s), (M += g);
                else e.fillText(k, 0, 0, s);
                e.restore();
              }
            }
          });
          function u(t, e) {
            var i = new l({ ctx: t.ctx, options: e, chart: t });
            r.configure(t, i, e), r.addBox(t, i), (t.titleBlock = i);
          }
          e.exports = {
            id: 'title',
            _element: l,
            beforeInit: function(t) {
              var e = t.options.title;
              e && u(t, e);
            },
            beforeUpdate: function(t) {
              var e = t.options.title,
                i = t.titleBlock;
              e
                ? (o.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), (i.options = e)) : u(t, e))
                : i && (r.removeBox(t, i), delete t.titleBlock);
            }
          };
        },
        { 25: 25, 26: 26, 30: 30, 45: 45 }
      ],
      53: [
        function(t, e, i) {
          'use strict';
          e.exports = function(t) {
            var e = t.Scale.extend({
              getLabels: function() {
                var t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
              },
              determineDataLimits: function() {
                var t,
                  e = this,
                  i = e.getLabels();
                (e.minIndex = 0),
                  (e.maxIndex = i.length - 1),
                  void 0 !== e.options.ticks.min &&
                    ((t = i.indexOf(e.options.ticks.min)), (e.minIndex = -1 !== t ? t : e.minIndex)),
                  void 0 !== e.options.ticks.max &&
                    ((t = i.indexOf(e.options.ticks.max)), (e.maxIndex = -1 !== t ? t : e.maxIndex)),
                  (e.min = i[e.minIndex]),
                  (e.max = i[e.maxIndex]);
              },
              buildTicks: function() {
                var t = this,
                  e = t.getLabels();
                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
              },
              getLabelForIndex: function(t, e) {
                var i = this,
                  n = i.chart.data,
                  a = i.isHorizontal();
                return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex];
              },
              getPixelForValue: function(t, e) {
                var i,
                  n = this,
                  a = n.options.offset,
                  o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                if ((null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || (void 0 !== t && isNaN(e)))) {
                  t = i || t;
                  var r = n.getLabels().indexOf(t);
                  e = -1 !== r ? r : e;
                }
                if (n.isHorizontal()) {
                  var s = n.width / o,
                    l = s * (e - n.minIndex);
                  return a && (l += s / 2), n.left + Math.round(l);
                }
                var u = n.height / o,
                  d = u * (e - n.minIndex);
                return a && (d += u / 2), n.top + Math.round(d);
              },
              getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
              },
              getValueForPixel: function(t) {
                var e = this,
                  i = e.options.offset,
                  n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                  a = e.isHorizontal(),
                  o = (a ? e.width : e.height) / n;
                return (t -= a ? e.left : e.top), i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
              },
              getBasePixel: function() {
                return this.bottom;
              }
            });
            t.scaleService.registerScaleType('category', e, { position: 'bottom' });
          };
        },
        {}
      ],
      54: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(45),
            o = t(34);
          e.exports = function(t) {
            var e = { position: 'left', ticks: { callback: o.formatters.linear } },
              i = t.LinearScaleBase.extend({
                determineDataLimits: function() {
                  var t = this,
                    e = t.options,
                    i = t.chart,
                    n = i.data.datasets,
                    o = t.isHorizontal();
                  function r(e) {
                    return o ? e.xAxisID === t.id : e.yAxisID === t.id;
                  }
                  (t.min = null), (t.max = null);
                  var s = e.stacked;
                  if (
                    (void 0 === s &&
                      a.each(n, function(t, e) {
                        if (!s) {
                          var n = i.getDatasetMeta(e);
                          i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0);
                        }
                      }),
                    e.stacked || s)
                  ) {
                    var l = {};
                    a.each(n, function(n, o) {
                      var s = i.getDatasetMeta(o),
                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : '', s.stack].join('.');
                      void 0 === l[u] && (l[u] = { positiveValues: [], negativeValues: [] });
                      var d = l[u].positiveValues,
                        c = l[u].negativeValues;
                      i.isDatasetVisible(o) &&
                        r(s) &&
                        a.each(n.data, function(i, n) {
                          var a = +t.getRightValue(i);
                          isNaN(a) ||
                            s.data[n].hidden ||
                            ((d[n] = d[n] || 0),
                            (c[n] = c[n] || 0),
                            e.relativePoints ? (d[n] = 100) : a < 0 ? (c[n] += a) : (d[n] += a));
                        });
                    }),
                      a.each(l, function(e) {
                        var i = e.positiveValues.concat(e.negativeValues),
                          n = a.min(i),
                          o = a.max(i);
                        (t.min = null === t.min ? n : Math.min(t.min, n)),
                          (t.max = null === t.max ? o : Math.max(t.max, o));
                      });
                  } else
                    a.each(n, function(e, n) {
                      var o = i.getDatasetMeta(n);
                      i.isDatasetVisible(n) &&
                        r(o) &&
                        a.each(e.data, function(e, i) {
                          var n = +t.getRightValue(e);
                          isNaN(n) ||
                            o.data[i].hidden ||
                            (null === t.min ? (t.min = n) : n < t.min && (t.min = n),
                            null === t.max ? (t.max = n) : n > t.max && (t.max = n));
                        });
                    });
                  (t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0),
                    (t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1),
                    this.handleTickRangeOptions();
                },
                getTickLimit: function() {
                  var t,
                    e = this.options.ticks;
                  if (this.isHorizontal())
                    t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                  else {
                    var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                    t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)));
                  }
                  return t;
                },
                handleDirectionalChanges: function() {
                  this.isHorizontal() || this.ticks.reverse();
                },
                getLabelForIndex: function(t, e) {
                  return +this.getRightValue(this.chart.data.datasets[e].data[t]);
                },
                getPixelForValue: function(t) {
                  var e = this,
                    i = e.start,
                    n = +e.getRightValue(t),
                    a = e.end - i;
                  return e.isHorizontal() ? e.left + (e.width / a) * (n - i) : e.bottom - (e.height / a) * (n - i);
                },
                getValueForPixel: function(t) {
                  var e = this,
                    i = e.isHorizontal(),
                    n = i ? e.width : e.height,
                    a = (i ? t - e.left : e.bottom - t) / n;
                  return e.start + (e.end - e.start) * a;
                },
                getPixelForTick: function(t) {
                  return this.getPixelForValue(this.ticksAsNumbers[t]);
                }
              });
            t.scaleService.registerScaleType('linear', i, e);
          };
        },
        { 25: 25, 34: 34, 45: 45 }
      ],
      55: [
        function(t, e, i) {
          'use strict';
          var n = t(45);
          e.exports = function(t) {
            var e = n.noop;
            t.LinearScaleBase = t.Scale.extend({
              getRightValue: function(e) {
                return 'string' == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
              },
              handleTickRangeOptions: function() {
                var t = this,
                  e = t.options.ticks;
                if (e.beginAtZero) {
                  var i = n.sign(t.min),
                    a = n.sign(t.max);
                  i < 0 && a < 0 ? (t.max = 0) : i > 0 && a > 0 && (t.min = 0);
                }
                var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                  r = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min
                  ? (t.min = e.min)
                  : void 0 !== e.suggestedMin &&
                    (null === t.min ? (t.min = e.suggestedMin) : (t.min = Math.min(t.min, e.suggestedMin))),
                  void 0 !== e.max
                    ? (t.max = e.max)
                    : void 0 !== e.suggestedMax &&
                      (null === t.max ? (t.max = e.suggestedMax) : (t.max = Math.max(t.max, e.suggestedMax))),
                  o !== r && t.min >= t.max && (o ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                  t.min === t.max && (t.max++, e.beginAtZero || t.min--);
              },
              getTickLimit: e,
              handleDirectionalChanges: e,
              buildTicks: function() {
                var t = this,
                  e = t.options.ticks,
                  i = t.getTickLimit(),
                  a = {
                    maxTicks: (i = Math.max(2, i)),
                    min: e.min,
                    max: e.max,
                    stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
                  },
                  o = (t.ticks = (function(t, e) {
                    var i,
                      a = [];
                    if (t.stepSize && t.stepSize > 0) i = t.stepSize;
                    else {
                      var o = n.niceNum(e.max - e.min, !1);
                      i = n.niceNum(o / (t.maxTicks - 1), !0);
                    }
                    var r = Math.floor(e.min / i) * i,
                      s = Math.ceil(e.max / i) * i;
                    t.min &&
                      t.max &&
                      t.stepSize &&
                      n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) &&
                      ((r = t.min), (s = t.max));
                    var l = (s - r) / i;
                    l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);
                    var u = 1;
                    i < 1 &&
                      ((u = Math.pow(10, i.toString().length - 2)),
                      (r = Math.round(r * u) / u),
                      (s = Math.round(s * u) / u)),
                      a.push(void 0 !== t.min ? t.min : r);
                    for (var d = 1; d < l; ++d) a.push(Math.round((r + d * i) * u) / u);
                    return a.push(void 0 !== t.max ? t.max : s), a;
                  })(a, t));
                t.handleDirectionalChanges(),
                  (t.max = n.max(o)),
                  (t.min = n.min(o)),
                  e.reverse ? (o.reverse(), (t.start = t.max), (t.end = t.min)) : ((t.start = t.min), (t.end = t.max));
              },
              convertTicksToLabels: function() {
                var e = this;
                (e.ticksAsNumbers = e.ticks.slice()),
                  (e.zeroLineIndex = e.ticks.indexOf(0)),
                  t.Scale.prototype.convertTicksToLabels.call(e);
              }
            });
          };
        },
        { 45: 45 }
      ],
      56: [
        function(t, e, i) {
          'use strict';
          var n = t(45),
            a = t(34);
          e.exports = function(t) {
            var e = { position: 'left', ticks: { callback: a.formatters.logarithmic } },
              i = t.Scale.extend({
                determineDataLimits: function() {
                  var t = this,
                    e = t.options,
                    i = t.chart,
                    a = i.data.datasets,
                    o = t.isHorizontal();
                  function r(e) {
                    return o ? e.xAxisID === t.id : e.yAxisID === t.id;
                  }
                  (t.min = null), (t.max = null), (t.minNotZero = null);
                  var s = e.stacked;
                  if (
                    (void 0 === s &&
                      n.each(a, function(t, e) {
                        if (!s) {
                          var n = i.getDatasetMeta(e);
                          i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0);
                        }
                      }),
                    e.stacked || s)
                  ) {
                    var l = {};
                    n.each(a, function(a, o) {
                      var s = i.getDatasetMeta(o),
                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : '', s.stack].join('.');
                      i.isDatasetVisible(o) &&
                        r(s) &&
                        (void 0 === l[u] && (l[u] = []),
                        n.each(a.data, function(e, i) {
                          var n = l[u],
                            a = +t.getRightValue(e);
                          isNaN(a) || s.data[i].hidden || a < 0 || ((n[i] = n[i] || 0), (n[i] += a));
                        }));
                    }),
                      n.each(l, function(e) {
                        if (e.length > 0) {
                          var i = n.min(e),
                            a = n.max(e);
                          (t.min = null === t.min ? i : Math.min(t.min, i)),
                            (t.max = null === t.max ? a : Math.max(t.max, a));
                        }
                      });
                  } else
                    n.each(a, function(e, a) {
                      var o = i.getDatasetMeta(a);
                      i.isDatasetVisible(a) &&
                        r(o) &&
                        n.each(e.data, function(e, i) {
                          var n = +t.getRightValue(e);
                          isNaN(n) ||
                            o.data[i].hidden ||
                            n < 0 ||
                            (null === t.min ? (t.min = n) : n < t.min && (t.min = n),
                            null === t.max ? (t.max = n) : n > t.max && (t.max = n),
                            0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
                        });
                    });
                  this.handleTickRangeOptions();
                },
                handleTickRangeOptions: function() {
                  var t = this,
                    e = t.options.ticks,
                    i = n.valueOrDefault;
                  (t.min = i(e.min, t.min)),
                    (t.max = i(e.max, t.max)),
                    t.min === t.max &&
                      (0 !== t.min && null !== t.min
                        ? ((t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1)),
                          (t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)))
                        : ((t.min = 1), (t.max = 10))),
                    null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)),
                    null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10),
                    null === t.minNotZero &&
                      (t.min > 0
                        ? (t.minNotZero = t.min)
                        : t.max < 1
                        ? (t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))))
                        : (t.minNotZero = 1));
                },
                buildTicks: function() {
                  var t = this,
                    e = t.options.ticks,
                    i = !t.isHorizontal(),
                    a = { min: e.min, max: e.max },
                    o = (t.ticks = (function(t, e) {
                      var i,
                        a,
                        o = [],
                        r = n.valueOrDefault,
                        s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                        l = Math.floor(n.log10(e.max)),
                        u = Math.ceil(e.max / Math.pow(10, l));
                      0 === s
                        ? ((i = Math.floor(n.log10(e.minNotZero))),
                          (a = Math.floor(e.minNotZero / Math.pow(10, i))),
                          o.push(s),
                          (s = a * Math.pow(10, i)))
                        : ((i = Math.floor(n.log10(s))), (a = Math.floor(s / Math.pow(10, i))));
                      for (
                        var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                        o.push(s),
                          10 == ++a && ((a = 1), (d = ++i >= 0 ? 1 : d)),
                          (s = Math.round(a * Math.pow(10, i) * d) / d),
                          i < l || (i === l && a < u);

                      );
                      var c = r(t.max, s);
                      return o.push(c), o;
                    })(a, t));
                  (t.max = n.max(o)),
                    (t.min = n.min(o)),
                    e.reverse ? ((i = !i), (t.start = t.max), (t.end = t.min)) : ((t.start = t.min), (t.end = t.max)),
                    i && o.reverse();
                },
                convertTicksToLabels: function() {
                  (this.tickValues = this.ticks.slice()), t.Scale.prototype.convertTicksToLabels.call(this);
                },
                getLabelForIndex: function(t, e) {
                  return +this.getRightValue(this.chart.data.datasets[e].data[t]);
                },
                getPixelForTick: function(t) {
                  return this.getPixelForValue(this.tickValues[t]);
                },
                _getFirstTickValue: function(t) {
                  var e = Math.floor(n.log10(t));
                  return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
                },
                getPixelForValue: function(e) {
                  var i,
                    a,
                    o,
                    r,
                    s,
                    l = this,
                    u = l.options.ticks.reverse,
                    d = n.log10,
                    c = l._getFirstTickValue(l.minNotZero),
                    h = 0;
                  return (
                    (e = +l.getRightValue(e)),
                    u ? ((o = l.end), (r = l.start), (s = -1)) : ((o = l.start), (r = l.end), (s = 1)),
                    l.isHorizontal()
                      ? ((i = l.width), (a = u ? l.right : l.left))
                      : ((i = l.height), (s *= -1), (a = u ? l.top : l.bottom)),
                    e !== o &&
                      (0 === o &&
                        ((i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize)),
                        (o = c)),
                      0 !== e && (h += (i / (d(r) - d(o))) * (d(e) - d(o))),
                      (a += s * h)),
                    a
                  );
                },
                getValueForPixel: function(e) {
                  var i,
                    a,
                    o,
                    r,
                    s = this,
                    l = s.options.ticks.reverse,
                    u = n.log10,
                    d = s._getFirstTickValue(s.minNotZero);
                  if (
                    (l ? ((a = s.end), (o = s.start)) : ((a = s.start), (o = s.end)),
                    s.isHorizontal()
                      ? ((i = s.width), (r = l ? s.right - e : e - s.left))
                      : ((i = s.height), (r = l ? e - s.top : s.bottom - e)),
                    r !== a)
                  ) {
                    if (0 === a) {
                      var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                      (r -= c), (i -= c), (a = d);
                    }
                    (r *= u(o) - u(a)), (r /= i), (r = Math.pow(10, u(a) + r));
                  }
                  return r;
                }
              });
            t.scaleService.registerScaleType('logarithmic', i, e);
          };
        },
        { 34: 34, 45: 45 }
      ],
      57: [
        function(t, e, i) {
          'use strict';
          var n = t(25),
            a = t(45),
            o = t(34);
          e.exports = function(t) {
            var e = n.global,
              i = {
                display: !0,
                animate: !0,
                position: 'chartArea',
                angleLines: { display: !0, color: 'rgba(0, 0, 0, 0.1)', lineWidth: 1 },
                gridLines: { circular: !1 },
                ticks: {
                  showLabelBackdrop: !0,
                  backdropColor: 'rgba(255,255,255,0.75)',
                  backdropPaddingY: 2,
                  backdropPaddingX: 2,
                  callback: o.formatters.linear
                },
                pointLabels: {
                  display: !0,
                  fontSize: 10,
                  callback: function(t) {
                    return t;
                  }
                }
              };
            function r(t) {
              var e = t.options;
              return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
            }
            function s(t) {
              var i = t.options.pointLabels,
                n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
                o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
                r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
              return { size: n, style: o, family: r, font: a.fontString(n, o, r) };
            }
            function l(t, e, i, n, a) {
              return t === n || t === a
                ? { start: e - i / 2, end: e + i / 2 }
                : t < n || t > a
                ? { start: e - i - 5, end: e }
                : { start: e, end: e + i + 5 };
            }
            function u(t, e, i, n) {
              if (a.isArray(e))
                for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, o), (o += r);
              else t.fillText(e, i.x, i.y);
            }
            function d(t) {
              return a.isNumber(t) ? t : 0;
            }
            var c = t.LinearScaleBase.extend({
              setDimensions: function() {
                var t = this,
                  i = t.options,
                  n = i.ticks;
                (t.width = t.maxWidth),
                  (t.height = t.maxHeight),
                  (t.xCenter = Math.round(t.width / 2)),
                  (t.yCenter = Math.round(t.height / 2));
                var o = a.min([t.height, t.width]),
                  r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
                t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2;
              },
              determineDataLimits: function() {
                var t = this,
                  e = t.chart,
                  i = Number.POSITIVE_INFINITY,
                  n = Number.NEGATIVE_INFINITY;
                a.each(e.data.datasets, function(o, r) {
                  if (e.isDatasetVisible(r)) {
                    var s = e.getDatasetMeta(r);
                    a.each(o.data, function(e, a) {
                      var o = +t.getRightValue(e);
                      isNaN(o) || s.data[a].hidden || ((i = Math.min(o, i)), (n = Math.max(o, n)));
                    });
                  }
                }),
                  (t.min = i === Number.POSITIVE_INFINITY ? 0 : i),
                  (t.max = n === Number.NEGATIVE_INFINITY ? 0 : n),
                  t.handleTickRangeOptions();
              },
              getTickLimit: function() {
                var t = this.options.ticks,
                  i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
              },
              convertTicksToLabels: function() {
                var e = this;
                t.LinearScaleBase.prototype.convertTicksToLabels.call(e),
                  (e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e));
              },
              getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t]);
              },
              fit: function() {
                var t, e;
                this.options.pointLabels.display
                  ? (function(t) {
                      var e,
                        i,
                        n,
                        o = s(t),
                        u = Math.min(t.height / 2, t.width / 2),
                        d = { r: t.width, l: 0, t: t.height, b: 0 },
                        c = {};
                      (t.ctx.font = o.font), (t._pointLabelSizes = []);
                      var h,
                        f,
                        g,
                        p = r(t);
                      for (e = 0; e < p; e++) {
                        (n = t.getPointPosition(e, u)),
                          (h = t.ctx),
                          (f = o.size),
                          (g = t.pointLabels[e] || ''),
                          (i = a.isArray(g)
                            ? { w: a.longestText(h, h.font, g), h: g.length * f + 1.5 * (g.length - 1) * f }
                            : { w: h.measureText(g).width, h: f }),
                          (t._pointLabelSizes[e] = i);
                        var m = t.getIndexAngle(e),
                          v = a.toDegrees(m) % 360,
                          b = l(v, n.x, i.w, 0, 180),
                          x = l(v, n.y, i.h, 90, 270);
                        b.start < d.l && ((d.l = b.start), (c.l = m)),
                          b.end > d.r && ((d.r = b.end), (c.r = m)),
                          x.start < d.t && ((d.t = x.start), (c.t = m)),
                          x.end > d.b && ((d.b = x.end), (c.b = m));
                      }
                      t.setReductions(u, d, c);
                    })(this)
                  : ((t = this),
                    (e = Math.min(t.height / 2, t.width / 2)),
                    (t.drawingArea = Math.round(e)),
                    t.setCenterPoint(0, 0, 0, 0));
              },
              setReductions: function(t, e, i) {
                var n = e.l / Math.sin(i.l),
                  a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                  o = -e.t / Math.cos(i.t),
                  r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                (n = d(n)),
                  (a = d(a)),
                  (o = d(o)),
                  (r = d(r)),
                  (this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2))),
                  this.setCenterPoint(n, a, o, r);
              },
              setCenterPoint: function(t, e, i, n) {
                var a = this,
                  o = a.width - e - a.drawingArea,
                  r = t + a.drawingArea,
                  s = i + a.drawingArea,
                  l = a.height - n - a.drawingArea;
                (a.xCenter = Math.round((r + o) / 2 + a.left)), (a.yCenter = Math.round((s + l) / 2 + a.top));
              },
              getIndexAngle: function(t) {
                return (
                  t * ((2 * Math.PI) / r(this)) +
                  ((this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) *
                    Math.PI *
                    2) /
                    360
                );
              },
              getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (null === t) return 0;
                var i = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
              },
              getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t) - Math.PI / 2;
                return { x: Math.round(Math.cos(i) * e) + this.xCenter, y: Math.round(Math.sin(i) * e) + this.yCenter };
              },
              getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
              },
              getBasePosition: function() {
                var t = this.min,
                  e = this.max;
                return this.getPointPositionForValue(
                  0,
                  this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                );
              },
              draw: function() {
                var t = this,
                  i = t.options,
                  n = i.gridLines,
                  o = i.ticks,
                  l = a.valueOrDefault;
                if (i.display) {
                  var d = t.ctx,
                    c = this.getIndexAngle(0),
                    h = l(o.fontSize, e.defaultFontSize),
                    f = l(o.fontStyle, e.defaultFontStyle),
                    g = l(o.fontFamily, e.defaultFontFamily),
                    p = a.fontString(h, f, g);
                  a.each(t.ticks, function(i, s) {
                    if (s > 0 || o.reverse) {
                      var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                      if (
                        (n.display &&
                          0 !== s &&
                          (function(t, e, i, n) {
                            var o = t.ctx;
                            if (
                              ((o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1)),
                              (o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1)),
                              t.options.gridLines.circular)
                            )
                              o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();
                            else {
                              var s = r(t);
                              if (0 === s) return;
                              o.beginPath();
                              var l = t.getPointPosition(0, i);
                              o.moveTo(l.x, l.y);
                              for (var u = 1; u < s; u++) (l = t.getPointPosition(u, i)), o.lineTo(l.x, l.y);
                              o.closePath(), o.stroke();
                            }
                          })(t, n, u, s),
                        o.display)
                      ) {
                        var f = l(o.fontColor, e.defaultFontColor);
                        if (
                          ((d.font = p), d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(c), o.showLabelBackdrop)
                        ) {
                          var g = d.measureText(i).width;
                          (d.fillStyle = o.backdropColor),
                            d.fillRect(
                              -g / 2 - o.backdropPaddingX,
                              -u - h / 2 - o.backdropPaddingY,
                              g + 2 * o.backdropPaddingX,
                              h + 2 * o.backdropPaddingY
                            );
                        }
                        (d.textAlign = 'center'),
                          (d.textBaseline = 'middle'),
                          (d.fillStyle = f),
                          d.fillText(i, 0, -u),
                          d.restore();
                      }
                    }
                  }),
                    (i.angleLines.display || i.pointLabels.display) &&
                      (function(t) {
                        var i = t.ctx,
                          n = t.options,
                          o = n.angleLines,
                          l = n.pointLabels;
                        (i.lineWidth = o.lineWidth), (i.strokeStyle = o.color);
                        var d,
                          c,
                          h,
                          f,
                          g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                          p = s(t);
                        i.textBaseline = 'top';
                        for (var m = r(t) - 1; m >= 0; m--) {
                          if (o.display) {
                            var v = t.getPointPosition(m, g);
                            i.beginPath(),
                              i.moveTo(t.xCenter, t.yCenter),
                              i.lineTo(v.x, v.y),
                              i.stroke(),
                              i.closePath();
                          }
                          if (l.display) {
                            var b = t.getPointPosition(m, g + 5),
                              x = a.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                            (i.font = p.font), (i.fillStyle = x);
                            var y = t.getIndexAngle(m),
                              k = a.toDegrees(y);
                            (i.textAlign = 0 === (f = k) || 180 === f ? 'center' : f < 180 ? 'left' : 'right'),
                              (d = k),
                              (c = t._pointLabelSizes[m]),
                              (h = b),
                              90 === d || 270 === d ? (h.y -= c.h / 2) : (d > 270 || d < 90) && (h.y -= c.h),
                              u(i, t.pointLabels[m] || '', b, p.size);
                          }
                        }
                      })(t);
                }
              }
            });
            t.scaleService.registerScaleType('radialLinear', c, i);
          };
        },
        { 25: 25, 34: 34, 45: 45 }
      ],
      58: [
        function(t, e, i) {
          'use strict';
          var n = t(1);
          n = 'function' == typeof n ? n : window.moment;
          var a = t(25),
            o = t(45),
            r = Number.MIN_SAFE_INTEGER || -9007199254740991,
            s = Number.MAX_SAFE_INTEGER || 9007199254740991,
            l = {
              millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] },
              second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 30] },
              minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 30] },
              hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
              day: { common: !0, size: 864e5, steps: [1, 2, 5] },
              week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
              month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
              quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
              year: { common: !0, size: 3154e7 }
            },
            u = Object.keys(l);
          function d(t, e) {
            return t - e;
          }
          function c(t) {
            var e,
              i,
              n,
              a = {},
              o = [];
            for (e = 0, i = t.length; e < i; ++e) a[(n = t[e])] || ((a[n] = !0), o.push(n));
            return o;
          }
          function h(t, e, i, n) {
            var a = (function(t, e, i) {
                for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s; ) {
                  if (((a = t[(n = (r + s) >> 1) - 1] || null), (o = t[n]), !a)) return { lo: null, hi: o };
                  if (o[e] < i) r = n + 1;
                  else {
                    if (!(a[e] > i)) return { lo: a, hi: o };
                    s = n - 1;
                  }
                }
                return { lo: o, hi: null };
              })(t, e, i),
              o = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
              r = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
              s = r[e] - o[e],
              l = s ? (i - o[e]) / s : 0,
              u = (r[n] - o[n]) * l;
            return o[n] + u;
          }
          function f(t, e) {
            var i = e.parser,
              a = e.parser || e.format;
            return 'function' == typeof i
              ? i(t)
              : 'string' == typeof t && 'string' == typeof a
              ? n(t, a)
              : (t instanceof n || (t = n(t)), t.isValid() ? t : 'function' == typeof a ? a(t) : t);
          }
          function g(t, e) {
            if (o.isNullOrUndef(t)) return null;
            var i = e.options.time,
              n = f(e.getRightValue(t), i);
            return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
          }
          function p(t) {
            for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e) if (l[u[e]].common) return u[e];
          }
          function m(t, e, i, a) {
            var r,
              d = a.time,
              c =
                d.unit ||
                (function(t, e, i, n) {
                  var a,
                    o,
                    r,
                    d = u.length;
                  for (a = u.indexOf(t); a < d - 1; ++a)
                    if (
                      ((r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s),
                      o.common && Math.ceil((i - e) / (r * o.size)) <= n)
                    )
                      return u[a];
                  return u[d - 1];
                })(d.minUnit, t, e, i),
              h = p(c),
              f = o.valueOrDefault(d.stepSize, d.unitStepSize),
              g = 'week' === c && d.isoWeekday,
              m = a.ticks.major.enabled,
              v = l[c],
              b = n(t),
              x = n(e),
              y = [];
            for (
              f ||
                (f = (function(t, e, i, n) {
                  var a,
                    o,
                    r,
                    s = e - t,
                    u = l[i],
                    d = u.size,
                    c = u.steps;
                  if (!c) return Math.ceil(s / (n * d));
                  for (a = 0, o = c.length; a < o && ((r = c[a]), !(Math.ceil(s / (d * r)) <= n)); ++a);
                  return r;
                })(t, e, c, i)),
                g && ((b = b.isoWeekday(g)), (x = x.isoWeekday(g))),
                b = b.startOf(g ? 'day' : c),
                (x = x.startOf(g ? 'day' : c)) < e && x.add(1, c),
                r = n(b),
                m && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (v.size * f)) * f, c));
              r < x;
              r.add(f, c)
            )
              y.push(+r);
            return y.push(+r), y;
          }
          e.exports = function(t) {
            var e = t.Scale.extend({
              initialize: function() {
                if (!n)
                  throw new Error(
                    'Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com'
                  );
                this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
              },
              update: function() {
                var e = this.options;
                return (
                  e.time &&
                    e.time.format &&
                    console.warn('options.time.format is deprecated and replaced by options.time.parser.'),
                  t.Scale.prototype.update.apply(this, arguments)
                );
              },
              getRightValue: function(e) {
                return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
              },
              determineDataLimits: function() {
                var t,
                  e,
                  i,
                  a,
                  l,
                  u,
                  h = this,
                  f = h.chart,
                  p = h.options.time,
                  m = p.unit || 'day',
                  v = s,
                  b = r,
                  x = [],
                  y = [],
                  k = [];
                for (t = 0, i = f.data.labels.length; t < i; ++t) k.push(g(f.data.labels[t], h));
                for (t = 0, i = (f.data.datasets || []).length; t < i; ++t)
                  if (f.isDatasetVisible(t))
                    if (((l = f.data.datasets[t].data), o.isObject(l[0])))
                      for (y[t] = [], e = 0, a = l.length; e < a; ++e) (u = g(l[e], h)), x.push(u), (y[t][e] = u);
                    else x.push.apply(x, k), (y[t] = k.slice(0));
                  else y[t] = [];
                k.length && ((k = c(k).sort(d)), (v = Math.min(v, k[0])), (b = Math.max(b, k[k.length - 1]))),
                  x.length && ((x = c(x).sort(d)), (v = Math.min(v, x[0])), (b = Math.max(b, x[x.length - 1]))),
                  (v = g(p.min, h) || v),
                  (b = g(p.max, h) || b),
                  (v = v === s ? +n().startOf(m) : v),
                  (b = b === r ? +n().endOf(m) + 1 : b),
                  (h.min = Math.min(v, b)),
                  (h.max = Math.max(v + 1, b)),
                  (h._horizontal = h.isHorizontal()),
                  (h._table = []),
                  (h._timestamps = { data: x, datasets: y, labels: k });
              },
              buildTicks: function() {
                var t,
                  e,
                  i,
                  a,
                  o,
                  r,
                  s,
                  d,
                  c,
                  v,
                  b,
                  x,
                  y = this,
                  k = y.min,
                  M = y.max,
                  w = y.options,
                  S = w.time,
                  C = [],
                  _ = [];
                switch (w.ticks.source) {
                  case 'data':
                    C = y._timestamps.data;
                    break;
                  case 'labels':
                    C = y._timestamps.labels;
                    break;
                  case 'auto':
                  default:
                    C = m(k, M, y.getLabelCapacity(k), w);
                }
                for (
                  'ticks' === w.bounds && C.length && ((k = C[0]), (M = C[C.length - 1])),
                    k = g(S.min, y) || k,
                    M = g(S.max, y) || M,
                    t = 0,
                    e = C.length;
                  t < e;
                  ++t
                )
                  (i = C[t]) >= k && i <= M && _.push(i);
                return (
                  (y.min = k),
                  (y.max = M),
                  (y._unit =
                    S.unit ||
                    (function(t, e, i, a) {
                      var o,
                        r,
                        s = n.duration(n(a).diff(n(i)));
                      for (o = u.length - 1; o >= u.indexOf(e); o--)
                        if (((r = u[o]), l[r].common && s.as(r) >= t.length)) return r;
                      return u[e ? u.indexOf(e) : 0];
                    })(_, S.minUnit, y.min, y.max)),
                  (y._majorUnit = p(y._unit)),
                  (y._table = (function(t, e, i, n) {
                    if ('linear' === n || !t.length) return [{ time: e, pos: 0 }, { time: i, pos: 1 }];
                    var a,
                      o,
                      r,
                      s,
                      l,
                      u = [],
                      d = [e];
                    for (a = 0, o = t.length; a < o; ++a) (s = t[a]) > e && s < i && d.push(s);
                    for (d.push(i), a = 0, o = d.length; a < o; ++a)
                      (l = d[a + 1]),
                        (r = d[a - 1]),
                        (s = d[a]),
                        (void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s) ||
                          u.push({ time: s, pos: a / (o - 1) });
                    return u;
                  })(y._timestamps.data, k, M, w.distribution)),
                  (y._offsets = ((a = y._table),
                  (o = _),
                  (r = k),
                  (s = M),
                  (b = 0),
                  (x = 0),
                  (d = w).offset &&
                    o.length &&
                    (d.time.min ||
                      ((c = o.length > 1 ? o[1] : s),
                      (v = o[0]),
                      (b = (h(a, 'time', c, 'pos') - h(a, 'time', v, 'pos')) / 2)),
                    d.time.max ||
                      ((c = o[o.length - 1]),
                      (v = o.length > 1 ? o[o.length - 2] : r),
                      (x = (h(a, 'time', c, 'pos') - h(a, 'time', v, 'pos')) / 2))),
                  { left: b, right: x })),
                  (y._labelFormat = (function(t, e) {
                    var i,
                      n,
                      a,
                      o = t.length;
                    for (i = 0; i < o; i++) {
                      if (0 !== (n = f(t[i], e)).millisecond()) return 'MMM D, YYYY h:mm:ss.SSS a';
                      (0 === n.second() && 0 === n.minute() && 0 === n.hour()) || (a = !0);
                    }
                    return a ? 'MMM D, YYYY h:mm:ss a' : 'MMM D, YYYY';
                  })(y._timestamps.data, S)),
                  (function(t, e) {
                    var i,
                      a,
                      o,
                      r,
                      s = [];
                    for (i = 0, a = t.length; i < a; ++i)
                      (o = t[i]), (r = !!e && o === +n(o).startOf(e)), s.push({ value: o, major: r });
                    return s;
                  })(_, y._majorUnit)
                );
              },
              getLabelForIndex: function(t, e) {
                var i = this.chart.data,
                  n = this.options.time,
                  a = i.labels && t < i.labels.length ? i.labels[t] : '',
                  r = i.datasets[e].data[t];
                return (
                  o.isObject(r) && (a = this.getRightValue(r)),
                  n.tooltipFormat
                    ? f(a, n).format(n.tooltipFormat)
                    : 'string' == typeof a
                    ? a
                    : f(a, n).format(this._labelFormat)
                );
              },
              tickFormatFunction: function(t, e, i, n) {
                var a = this.options,
                  r = t.valueOf(),
                  s = a.time.displayFormats,
                  l = s[this._unit],
                  u = this._majorUnit,
                  d = s[u],
                  c = t
                    .clone()
                    .startOf(u)
                    .valueOf(),
                  h = a.ticks.major,
                  f = h.enabled && u && d && r === c,
                  g = t.format(n || (f ? d : l)),
                  p = f ? h : a.ticks.minor,
                  m = o.valueOrDefault(p.callback, p.userCallback);
                return m ? m(g, e, i) : g;
              },
              convertTicksToLabels: function(t) {
                var e,
                  i,
                  a = [];
                for (e = 0, i = t.length; e < i; ++e) a.push(this.tickFormatFunction(n(t[e].value), e, t));
                return a;
              },
              getPixelForOffset: function(t) {
                var e = this,
                  i = e._horizontal ? e.width : e.height,
                  n = e._horizontal ? e.left : e.top,
                  a = h(e._table, 'time', t, 'pos');
                return n + (i * (e._offsets.left + a)) / (e._offsets.left + 1 + e._offsets.right);
              },
              getPixelForValue: function(t, e, i) {
                var n = null;
                if (
                  (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]),
                  null === n && (n = g(t, this)),
                  null !== n)
                )
                  return this.getPixelForOffset(n);
              },
              getPixelForTick: function(t) {
                var e = this.getTicks();
                return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
              },
              getValueForPixel: function(t) {
                var e = this,
                  i = e._horizontal ? e.width : e.height,
                  a = e._horizontal ? e.left : e.top,
                  o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                  r = h(e._table, 'pos', o, 'time');
                return n(r);
              },
              getLabelWidth: function(t) {
                var e = this.options.ticks,
                  i = this.ctx.measureText(t).width,
                  n = o.toRadians(e.maxRotation),
                  r = Math.cos(n),
                  s = Math.sin(n);
                return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s;
              },
              getLabelCapacity: function(t) {
                var e = this,
                  i = e.options.time.displayFormats.millisecond,
                  a = e.tickFormatFunction(n(t), 0, [], i),
                  o = e.getLabelWidth(a),
                  r = e.isHorizontal() ? e.width : e.height,
                  s = Math.floor(r / o);
                return s > 0 ? s : 1;
              }
            });
            t.scaleService.registerScaleType('time', e, {
              position: 'bottom',
              distribution: 'linear',
              bounds: 'data',
              time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: 'millisecond',
                displayFormats: {
                  millisecond: 'h:mm:ss.SSS a',
                  second: 'h:mm:ss a',
                  minute: 'h:mm a',
                  hour: 'hA',
                  day: 'MMM D',
                  week: 'll',
                  month: 'MMM YYYY',
                  quarter: '[Q]Q - YYYY',
                  year: 'YYYY'
                }
              },
              ticks: { autoSkip: !1, source: 'auto', major: { enabled: !1 } }
            });
          };
        },
        { 1: 1, 25: 25, 45: 45 }
      ]
    },
    {},
    [7]
  )(7);
});
//# sourceMappingURL=scripts.js.map
