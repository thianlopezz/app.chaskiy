!(function(t, e) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function(t) {
            if (!t.document) throw new Error('jQuery requires a window with a document');
            return e(t);
          })
    : e(t);
})('undefined' != typeof window ? window : this, function(t, e) {
  'use strict';
  var n = [],
    i = t.document,
    r = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    l = n.indexOf,
    u = {},
    c = u.toString,
    d = u.hasOwnProperty,
    h = d.toString,
    f = h.call(Object),
    p = {},
    g = function(t) {
      return 'function' == typeof t && 'number' != typeof t.nodeType;
    },
    m = function(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function y(t, e, n) {
    var r,
      o = (e = e || i).createElement('script');
    if (((o.text = t), n)) for (r in v) n[r] && (o[r] = n[r]);
    e.head.appendChild(o).parentNode.removeChild(o);
  }
  function b(t) {
    return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? u[c.call(t)] || 'object' : typeof t;
  }
  var x = function(t, e) {
      return new x.fn.init(t, e);
    },
    _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function w(t) {
    var e = !!t && 'length' in t && t.length,
      n = b(t);
    return !g(t) && !m(t) && ('array' === n || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t));
  }
  (x.fn = x.prototype = {
    jquery: '3.3.1',
    constructor: x,
    length: 0,
    toArray: function() {
      return o.call(this);
    },
    get: function(t) {
      return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    pushStack: function(t) {
      var e = x.merge(this.constructor(), t);
      return (e.prevObject = this), e;
    },
    each: function(t) {
      return x.each(this, t);
    },
    map: function(t) {
      return this.pushStack(
        x.map(this, function(e, n) {
          return t.call(e, n, e);
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
    eq: function(t) {
      var e = this.length,
        n = +t + (t < 0 ? e : 0);
      return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }),
    (x.extend = x.fn.extend = function() {
      var t,
        e,
        n,
        i,
        r,
        o,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
      for (
        'boolean' == typeof a && ((u = a), (a = arguments[s] || {}), s++),
          'object' == typeof a || g(a) || (a = {}),
          s === l && ((a = this), s--);
        s < l;
        s++
      )
        if (null != (t = arguments[s]))
          for (e in t)
            (n = a[e]),
              a !== (i = t[e]) &&
                (u && i && (x.isPlainObject(i) || (r = Array.isArray(i)))
                  ? (r ? ((r = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && x.isPlainObject(n) ? n : {}),
                    (a[e] = x.extend(u, o, i)))
                  : void 0 !== i && (a[e] = i));
      return a;
    }),
    x.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(t) {
        throw new Error(t);
      },
      noop: function() {},
      isPlainObject: function(t) {
        var e, n;
        return !(
          !t ||
          '[object Object]' !== c.call(t) ||
          ((e = r(t)) && ('function' != typeof (n = d.call(e, 'constructor') && e.constructor) || h.call(n) !== f))
        );
      },
      isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      globalEval: function(t) {
        y(t);
      },
      each: function(t, e) {
        var n,
          i = 0;
        if (w(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
        return t;
      },
      trim: function(t) {
        return null == t ? '' : (t + '').replace(_, '');
      },
      makeArray: function(t, e) {
        var n = e || [];
        return null != t && (w(Object(t)) ? x.merge(n, 'string' == typeof t ? [t] : t) : s.call(n, t)), n;
      },
      inArray: function(t, e, n) {
        return null == e ? -1 : l.call(e, t, n);
      },
      merge: function(t, e) {
        for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
        return (t.length = r), t;
      },
      grep: function(t, e, n) {
        for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
        return i;
      },
      map: function(t, e, n) {
        var i,
          r,
          o = 0,
          s = [];
        if (w(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
        else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
        return a.apply([], s);
      },
      guid: 1,
      support: p
    }),
    'function' == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(t, e) {
      u['[object ' + e + ']'] = e.toLowerCase();
    });
  var C = (function(t) {
    var e,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      c,
      d,
      h,
      f,
      p,
      g,
      m,
      v,
      y,
      b,
      x = 'sizzle' + 1 * new Date(),
      _ = t.document,
      w = 0,
      C = 0,
      S = at(),
      T = at(),
      k = at(),
      D = function(t, e) {
        return t === e && (d = !0), 0;
      },
      A = {}.hasOwnProperty,
      E = [],
      I = E.pop,
      M = E.push,
      O = E.push,
      P = E.slice,
      N = function(t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      },
      L =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      R = '[\\x20\\t\\r\\n\\f]',
      F = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      j =
        '\\[' +
        R +
        '*(' +
        F +
        ')(?:' +
        R +
        '*([*^$|!~]?=)' +
        R +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        F +
        '))|)' +
        R +
        '*\\]',
      H =
        ':(' +
        F +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        j +
        ')*)|.*)\\)|)',
      W = new RegExp(R + '+', 'g'),
      B = new RegExp('^' + R + '+|((?:^|[^\\\\])(?:\\\\.)*)' + R + '+$', 'g'),
      $ = new RegExp('^' + R + '*,' + R + '*'),
      q = new RegExp('^' + R + '*([>+~]|' + R + ')' + R + '*'),
      z = new RegExp('=' + R + '*([^\\]\'"]*?)' + R + '*\\]', 'g'),
      V = new RegExp(H),
      U = new RegExp('^' + F + '$'),
      Y = {
        ID: new RegExp('^#(' + F + ')'),
        CLASS: new RegExp('^\\.(' + F + ')'),
        TAG: new RegExp('^(' + F + '|[*])'),
        ATTR: new RegExp('^' + j),
        PSEUDO: new RegExp('^' + H),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            R +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            R +
            '*(?:([+-]|)' +
            R +
            '*(\\d+)|))' +
            R +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + L + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            R +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            R +
            '*((?:-\\d)?\\d*)' +
            R +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      Z = new RegExp('\\\\([\\da-f]{1,6}' + R + '?|(' + R + ')|.)', 'ig'),
      tt = function(t, e, n) {
        var i = '0x' + e - 65536;
        return i != i || n
          ? e
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      nt = function(t, e) {
        return e
          ? '\0' === t
            ? '\ufffd'
            : t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' '
          : '\\' + t;
      },
      it = function() {
        h();
      },
      rt = yt(
        function(t) {
          return !0 === t.disabled && ('form' in t || 'label' in t);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      O.apply((E = P.call(_.childNodes)), _.childNodes);
    } catch (t) {
      O = {
        apply: E.length
          ? function(t, e) {
              M.apply(t, P.call(e));
            }
          : function(t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            }
      };
    }
    function ot(t, e, i, r) {
      var o,
        s,
        u,
        c,
        d,
        p,
        v,
        y = e && e.ownerDocument,
        w = e ? e.nodeType : 9;
      if (((i = i || []), 'string' != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))) return i;
      if (!r && ((e ? e.ownerDocument || e : _) !== f && h(e), (e = e || f), g)) {
        if (11 !== w && (d = X.exec(t)))
          if ((o = d[1])) {
            if (9 === w) {
              if (!(u = e.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i;
          } else {
            if (d[2]) return O.apply(i, e.getElementsByTagName(t)), i;
            if ((o = d[3]) && n.getElementsByClassName && e.getElementsByClassName)
              return O.apply(i, e.getElementsByClassName(o)), i;
          }
        if (n.qsa && !k[t + ' '] && (!m || !m.test(t))) {
          if (1 !== w) (y = e), (v = t);
          else if ('object' !== e.nodeName.toLowerCase()) {
            for (
              (c = e.getAttribute('id')) ? (c = c.replace(et, nt)) : e.setAttribute('id', (c = x)),
                s = (p = a(t)).length;
              s--;

            )
              p[s] = '#' + c + ' ' + vt(p[s]);
            (v = p.join(',')), (y = (J.test(t) && gt(e.parentNode)) || e);
          }
          if (v)
            try {
              return O.apply(i, y.querySelectorAll(v)), i;
            } catch (t) {
            } finally {
              c === x && e.removeAttribute('id');
            }
        }
      }
      return l(t.replace(B, '$1'), e, i, r);
    }
    function at() {
      var t = [];
      return function e(n, r) {
        return t.push(n + ' ') > i.cacheLength && delete e[t.shift()], (e[n + ' '] = r);
      };
    }
    function st(t) {
      return (t[x] = !0), t;
    }
    function lt(t) {
      var e = f.createElement('fieldset');
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ut(t, e) {
      for (var n = t.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = e;
    }
    function ct(t, e) {
      var n = e && t,
        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function dt(t) {
      return function(e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function ht(t) {
      return function(e) {
        var n = e.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && e.type === t;
      };
    }
    function ft(t) {
      return function(e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function pt(t) {
      return st(function(e) {
        return (
          (e = +e),
          st(function(n, i) {
            for (var r, o = t([], n.length, e), a = o.length; a--; ) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function gt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((n = ot.support = {}),
    (o = ot.isXML = function(t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && 'HTML' !== e.nodeName;
    }),
    (h = ot.setDocument = function(t) {
      var e,
        r,
        a = t ? t.ownerDocument || t : _;
      return a !== f && 9 === a.nodeType && a.documentElement
        ? ((p = (f = a).documentElement),
          (g = !o(f)),
          _ !== f &&
            (r = f.defaultView) &&
            r.top !== r &&
            (r.addEventListener
              ? r.addEventListener('unload', it, !1)
              : r.attachEvent && r.attachEvent('onunload', it)),
          (n.attributes = lt(function(t) {
            return (t.className = 'i'), !t.getAttribute('className');
          })),
          (n.getElementsByTagName = lt(function(t) {
            return t.appendChild(f.createComment('')), !t.getElementsByTagName('*').length;
          })),
          (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
          (n.getById = lt(function(t) {
            return (p.appendChild(t).id = x), !f.getElementsByName || !f.getElementsByName(x).length;
          })),
          n.getById
            ? ((i.filter.ID = function(t) {
                var e = t.replace(Z, tt);
                return function(t) {
                  return t.getAttribute('id') === e;
                };
              }),
              (i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                  var n = e.getElementById(t);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function(t) {
                var e = t.replace(Z, tt);
                return function(t) {
                  var n = void 0 !== t.getAttributeNode && t.getAttributeNode('id');
                  return n && n.value === e;
                };
              }),
              (i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                  var n,
                    i,
                    r,
                    o = e.getElementById(t);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === t) return [o];
                    for (r = e.getElementsByName(t), i = 0; (o = r[i++]); )
                      if ((n = o.getAttributeNode('id')) && n.value === t) return [o];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function(t, e) {
                return void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t)
                  : n.qsa
                  ? e.querySelectorAll(t)
                  : void 0;
              }
            : function(t, e) {
                var n,
                  i = [],
                  r = 0,
                  o = e.getElementsByTagName(t);
                if ('*' === t) {
                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return o;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function(t, e) {
              if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
            }),
          (v = []),
          (m = []),
          (n.qsa = Q.test(f.querySelectorAll)) &&
            (lt(function(t) {
              (p.appendChild(t).innerHTML =
                "<a id='" +
                x +
                "'></a><select id='" +
                x +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                t.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + R + '*(?:\'\'|"")'),
                t.querySelectorAll('[selected]').length || m.push('\\[' + R + '*(?:value|' + L + ')'),
                t.querySelectorAll('[id~=' + x + '-]').length || m.push('~='),
                t.querySelectorAll(':checked').length || m.push(':checked'),
                t.querySelectorAll('a#' + x + '+*').length || m.push('.#.+[+~]');
            }),
            lt(function(t) {
              t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var e = f.createElement('input');
              e.setAttribute('type', 'hidden'),
                t.appendChild(e).setAttribute('name', 'D'),
                t.querySelectorAll('[name=d]').length && m.push('name' + R + '*[*^$|!~]?='),
                2 !== t.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                (p.appendChild(t).disabled = !0),
                2 !== t.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                t.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (n.matchesSelector = Q.test(
            (y =
              p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)
          )) &&
            lt(function(t) {
              (n.disconnectedMatch = y.call(t, '*')), y.call(t, "[s!='']:x"), v.push('!=', H);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (v = v.length && new RegExp(v.join('|'))),
          (e = Q.test(p.compareDocumentPosition)),
          (b =
            e || Q.test(p.contains)
              ? function(t, e) {
                  var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                  return (
                    t === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i))
                    )
                  );
                }
              : function(t, e) {
                  if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                  return !1;
                }),
          (D = e
            ? function(t, e) {
                if (t === e) return (d = !0), 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return (
                  i ||
                  (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) ||
                  (!n.sortDetached && e.compareDocumentPosition(t) === i)
                    ? t === f || (t.ownerDocument === _ && b(_, t))
                      ? -1
                      : e === f || (e.ownerDocument === _ && b(_, e))
                      ? 1
                      : c
                      ? N(c, t) - N(c, e)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function(t, e) {
                if (t === e) return (d = !0), 0;
                var n,
                  i = 0,
                  r = t.parentNode,
                  o = e.parentNode,
                  a = [t],
                  s = [e];
                if (!r || !o) return t === f ? -1 : e === f ? 1 : r ? -1 : o ? 1 : c ? N(c, t) - N(c, e) : 0;
                if (r === o) return ct(t, e);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (n = e; (n = n.parentNode); ) s.unshift(n);
                for (; a[i] === s[i]; ) i++;
                return i ? ct(a[i], s[i]) : a[i] === _ ? -1 : s[i] === _ ? 1 : 0;
              }),
          f)
        : f;
    }),
    (ot.matches = function(t, e) {
      return ot(t, null, null, e);
    }),
    (ot.matchesSelector = function(t, e) {
      if (
        ((t.ownerDocument || t) !== f && h(t),
        (e = e.replace(z, "='$1']")),
        n.matchesSelector && g && !k[e + ' '] && (!v || !v.test(e)) && (!m || !m.test(e)))
      )
        try {
          var i = y.call(t, e);
          if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
        } catch (t) {}
      return ot(e, f, null, [t]).length > 0;
    }),
    (ot.contains = function(t, e) {
      return (t.ownerDocument || t) !== f && h(t), b(t, e);
    }),
    (ot.attr = function(t, e) {
      (t.ownerDocument || t) !== f && h(t);
      var r = i.attrHandle[e.toLowerCase()],
        o = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? t.getAttribute(e)
        : (o = t.getAttributeNode(e)) && o.specified
        ? o.value
        : null;
    }),
    (ot.escape = function(t) {
      return (t + '').replace(et, nt);
    }),
    (ot.error = function(t) {
      throw new Error('Syntax error, unrecognized expression: ' + t);
    }),
    (ot.uniqueSort = function(t) {
      var e,
        i = [],
        r = 0,
        o = 0;
      if (((d = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(D), d)) {
        for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
        for (; r--; ) t.splice(i[r], 1);
      }
      return (c = null), t;
    }),
    (r = ot.getText = function(t) {
      var e,
        n = '',
        i = 0,
        o = t.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ('string' == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
        } else if (3 === o || 4 === o) return t.nodeValue;
      } else for (; (e = t[i++]); ) n += r(e);
      return n;
    }),
    ((i = ot.selectors = {
      cacheLength: 50,
      createPseudo: st,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function(t) {
          return (
            (t[1] = t[1].replace(Z, tt)),
            (t[3] = (t[3] || t[4] || t[5] || '').replace(Z, tt)),
            '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
            t.slice(0, 4)
          );
        },
        CHILD: function(t) {
          return (
            (t[1] = t[1].toLowerCase()),
            'nth' === t[1].slice(0, 3)
              ? (t[3] || ot.error(t[0]),
                (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3]))),
                (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
              : t[3] && ot.error(t[0]),
            t
          );
        },
        PSEUDO: function(t) {
          var e,
            n = !t[6] && t[2];
          return Y.CHILD.test(t[0])
            ? null
            : (t[3]
                ? (t[2] = t[4] || t[5] || '')
                : n &&
                  V.test(n) &&
                  (e = a(n, !0)) &&
                  (e = n.indexOf(')', n.length - e) - n.length) &&
                  ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
              t.slice(0, 3));
        }
      },
      filter: {
        TAG: function(t) {
          var e = t.replace(Z, tt).toLowerCase();
          return '*' === t
            ? function() {
                return !0;
              }
            : function(t) {
                return t.nodeName && t.nodeName.toLowerCase() === e;
              };
        },
        CLASS: function(t) {
          var e = S[t + ' '];
          return (
            e ||
            ((e = new RegExp('(^|' + R + ')' + t + '(' + R + '|$)')) &&
              S(t, function(t) {
                return e.test(
                  ('string' == typeof t.className && t.className) ||
                    (void 0 !== t.getAttribute && t.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function(t, e, n) {
          return function(i) {
            var r = ot.attr(i, t);
            return null == r
              ? '!=' === e
              : !e ||
                  ((r += ''),
                  '=' === e
                    ? r === n
                    : '!=' === e
                    ? r !== n
                    : '^=' === e
                    ? n && 0 === r.indexOf(n)
                    : '*=' === e
                    ? n && r.indexOf(n) > -1
                    : '$=' === e
                    ? n && r.slice(-n.length) === n
                    : '~=' === e
                    ? (' ' + r.replace(W, ' ') + ' ').indexOf(n) > -1
                    : '|=' === e && (r === n || r.slice(0, n.length + 1) === n + '-'));
          };
        },
        CHILD: function(t, e, n, i, r) {
          var o = 'nth' !== t.slice(0, 3),
            a = 'last' !== t.slice(-4),
            s = 'of-type' === e;
          return 1 === i && 0 === r
            ? function(t) {
                return !!t.parentNode;
              }
            : function(e, n, l) {
                var u,
                  c,
                  d,
                  h,
                  f,
                  p,
                  g = o !== a ? 'nextSibling' : 'previousSibling',
                  m = e.parentNode,
                  v = s && e.nodeName.toLowerCase(),
                  y = !l && !s,
                  b = !1;
                if (m) {
                  if (o) {
                    for (; g; ) {
                      for (h = e; (h = h[g]); ) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      p = g = 'only' === t && !p && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((p = [a ? m.firstChild : m.lastChild]), a && y)) {
                    for (
                      b =
                        (f =
                          (u =
                            (c = (d = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] ===
                            w && u[1]) && u[2],
                        h = f && m.childNodes[f];
                      (h = (++f && h && h[g]) || (b = f = 0) || p.pop());

                    )
                      if (1 === h.nodeType && ++b && h === e) {
                        c[t] = [w, f, b];
                        break;
                      }
                  } else if (
                    (y &&
                      (b = f =
                        (u = (c = (d = (h = e)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] ===
                          w && u[1]),
                    !1 === b)
                  )
                    for (
                      ;
                      (h = (++f && h && h[g]) || (b = f = 0) || p.pop()) &&
                      ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) ||
                        !++b ||
                        (y && ((c = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [w, b]),
                        h !== e));

                    );
                  return (b -= r) === i || (b % i == 0 && b / i >= 0);
                }
              };
        },
        PSEUDO: function(t, e) {
          var n,
            r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error('unsupported pseudo: ' + t);
          return r[x]
            ? r(e)
            : r.length > 1
            ? ((n = [t, t, '', e]),
              i.setFilters.hasOwnProperty(t.toLowerCase())
                ? st(function(t, n) {
                    for (var i, o = r(t, e), a = o.length; a--; ) t[(i = N(t, o[a]))] = !(n[i] = o[a]);
                  })
                : function(t) {
                    return r(t, 0, n);
                  })
            : r;
        }
      },
      pseudos: {
        not: st(function(t) {
          var e = [],
            n = [],
            i = s(t.replace(B, '$1'));
          return i[x]
            ? st(function(t, e, n, r) {
                for (var o, a = i(t, null, r, []), s = t.length; s--; ) (o = a[s]) && (t[s] = !(e[s] = o));
              })
            : function(t, r, o) {
                return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop();
              };
        }),
        has: st(function(t) {
          return function(e) {
            return ot(t, e).length > 0;
          };
        }),
        contains: st(function(t) {
          return (
            (t = t.replace(Z, tt)),
            function(e) {
              return (e.textContent || e.innerText || r(e)).indexOf(t) > -1;
            }
          );
        }),
        lang: st(function(t) {
          return (
            U.test(t || '') || ot.error('unsupported lang: ' + t),
            (t = t.replace(Z, tt).toLowerCase()),
            function(e) {
              var n;
              do {
                if ((n = g ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')))
                  return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + '-');
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function(e) {
          var n = t.location && t.location.hash;
          return n && n.slice(1) === e.id;
        },
        root: function(t) {
          return t === p;
        },
        focus: function(t) {
          return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        },
        enabled: ft(!1),
        disabled: ft(!0),
        checked: function(t) {
          var e = t.nodeName.toLowerCase();
          return ('input' === e && !!t.checked) || ('option' === e && !!t.selected);
        },
        selected: function(t) {
          return !0 === t.selected;
        },
        empty: function(t) {
          for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
          return !0;
        },
        parent: function(t) {
          return !i.pseudos.empty(t);
        },
        header: function(t) {
          return K.test(t.nodeName);
        },
        input: function(t) {
          return G.test(t.nodeName);
        },
        button: function(t) {
          var e = t.nodeName.toLowerCase();
          return ('input' === e && 'button' === t.type) || 'button' === e;
        },
        text: function(t) {
          var e;
          return (
            'input' === t.nodeName.toLowerCase() &&
            'text' === t.type &&
            (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase())
          );
        },
        first: pt(function() {
          return [0];
        }),
        last: pt(function(t, e) {
          return [e - 1];
        }),
        eq: pt(function(t, e, n) {
          return [n < 0 ? n + e : n];
        }),
        even: pt(function(t, e) {
          for (var n = 0; n < e; n += 2) t.push(n);
          return t;
        }),
        odd: pt(function(t, e) {
          for (var n = 1; n < e; n += 2) t.push(n);
          return t;
        }),
        lt: pt(function(t, e, n) {
          for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
          return t;
        }),
        gt: pt(function(t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
          return t;
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[e] = dt(e);
    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ht(e);
    function mt() {}
    function vt(t) {
      for (var e = 0, n = t.length, i = ''; e < n; e++) i += t[e].value;
      return i;
    }
    function yt(t, e, n) {
      var i = e.dir,
        r = e.next,
        o = r || i,
        a = n && 'parentNode' === o,
        s = C++;
      return e.first
        ? function(e, n, r) {
            for (; (e = e[i]); ) if (1 === e.nodeType || a) return t(e, n, r);
            return !1;
          }
        : function(e, n, l) {
            var u,
              c,
              d,
              h = [w, s];
            if (l) {
              for (; (e = e[i]); ) if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
            } else
              for (; (e = e[i]); )
                if (1 === e.nodeType || a)
                  if (
                    ((c = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {})),
                    r && r === e.nodeName.toLowerCase())
                  )
                    e = e[i] || e;
                  else {
                    if ((u = c[o]) && u[0] === w && u[1] === s) return (h[2] = u[2]);
                    if (((c[o] = h), (h[2] = t(e, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function bt(t) {
      return t.length > 1
        ? function(e, n, i) {
            for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
            return !0;
          }
        : t[0];
    }
    function xt(t, e, n, i, r) {
      for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)
        (o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), u && e.push(s)));
      return a;
    }
    function _t(t, e, n, i, r, o) {
      return (
        i && !i[x] && (i = _t(i)),
        r && !r[x] && (r = _t(r, o)),
        st(function(o, a, s, l) {
          var u,
            c,
            d,
            h = [],
            f = [],
            p = a.length,
            g =
              o ||
              (function(t, e, n) {
                for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                return n;
              })(e || '*', s.nodeType ? [s] : s, []),
            m = !t || (!o && e) ? g : xt(g, h, t, s, l),
            v = n ? (r || (o ? t : p || i) ? [] : a) : m;
          if ((n && n(m, v, s, l), i))
            for (u = xt(v, f), i(u, [], s, l), c = u.length; c--; ) (d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
          if (o) {
            if (r || t) {
              if (r) {
                for (u = [], c = v.length; c--; ) (d = v[c]) && u.push((m[c] = d));
                r(null, (v = []), u, l);
              }
              for (c = v.length; c--; ) (d = v[c]) && (u = r ? N(o, d) : h[c]) > -1 && (o[u] = !(a[u] = d));
            }
          } else (v = xt(v === a ? v.splice(p, v.length) : v)), r ? r(null, a, v, l) : O.apply(a, v);
        })
      );
    }
    function wt(t) {
      for (
        var e,
          n,
          r,
          o = t.length,
          a = i.relative[t[0].type],
          s = a || i.relative[' '],
          l = a ? 1 : 0,
          c = yt(
            function(t) {
              return t === e;
            },
            s,
            !0
          ),
          d = yt(
            function(t) {
              return N(e, t) > -1;
            },
            s,
            !0
          ),
          h = [
            function(t, n, i) {
              var r = (!a && (i || n !== u)) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
              return (e = null), r;
            }
          ];
        l < o;
        l++
      )
        if ((n = i.relative[t[l].type])) h = [yt(bt(h), n)];
        else {
          if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
            for (r = ++l; r < o && !i.relative[t[r].type]; r++);
            return _t(
              l > 1 && bt(h),
              l > 1 && vt(t.slice(0, l - 1).concat({ value: ' ' === t[l - 2].type ? '*' : '' })).replace(B, '$1'),
              n,
              l < r && wt(t.slice(l, r)),
              r < o && wt((t = t.slice(r))),
              r < o && vt(t)
            );
          }
          h.push(n);
        }
      return bt(h);
    }
    function Ct(t, e) {
      var n = e.length > 0,
        r = t.length > 0,
        o = function(o, a, s, l, c) {
          var d,
            p,
            m,
            v = 0,
            y = '0',
            b = o && [],
            x = [],
            _ = u,
            C = o || (r && i.find.TAG('*', c)),
            S = (w += null == _ ? 1 : Math.random() || 0.1),
            T = C.length;
          for (c && (u = a === f || a || c); y !== T && null != (d = C[y]); y++) {
            if (r && d) {
              for (p = 0, a || d.ownerDocument === f || (h(d), (s = !g)); (m = t[p++]); )
                if (m(d, a || f, s)) {
                  l.push(d);
                  break;
                }
              c && (w = S);
            }
            n && ((d = !m && d) && v--, o && b.push(d));
          }
          if (((v += y), n && y !== v)) {
            for (p = 0; (m = e[p++]); ) m(b, x, a, s);
            if (o) {
              if (v > 0) for (; y--; ) b[y] || x[y] || (x[y] = I.call(l));
              x = xt(x);
            }
            O.apply(l, x), c && !o && x.length > 0 && v + e.length > 1 && ot.uniqueSort(l);
          }
          return c && ((w = S), (u = _)), b;
        };
      return n ? st(o) : o;
    }
    return (
      (mt.prototype = i.filters = i.pseudos),
      (i.setFilters = new mt()),
      (a = ot.tokenize = function(t, e) {
        var n,
          r,
          o,
          a,
          s,
          l,
          u,
          c = T[t + ' '];
        if (c) return e ? 0 : c.slice(0);
        for (s = t, l = [], u = i.preFilter; s; ) {
          for (a in ((n && !(r = $.exec(s))) || (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
          (n = !1),
          (r = q.exec(s)) &&
            ((n = r.shift()), o.push({ value: n, type: r[0].replace(B, ' ') }), (s = s.slice(n.length))),
          i.filter))
            !(r = Y[a].exec(s)) ||
              (u[a] && !(r = u[a](r))) ||
              ((n = r.shift()), o.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
          if (!n) break;
        }
        return e ? s.length : s ? ot.error(t) : T(t, l).slice(0);
      }),
      (s = ot.compile = function(t, e) {
        var n,
          i = [],
          r = [],
          o = k[t + ' '];
        if (!o) {
          for (e || (e = a(t)), n = e.length; n--; ) (o = wt(e[n]))[x] ? i.push(o) : r.push(o);
          (o = k(t, Ct(r, i))).selector = t;
        }
        return o;
      }),
      (l = ot.select = function(t, e, n, r) {
        var o,
          l,
          u,
          c,
          d,
          h = 'function' == typeof t && t,
          f = !r && a((t = h.selector || t));
        if (((n = n || []), 1 === f.length)) {
          if (
            (l = f[0] = f[0].slice(0)).length > 2 &&
            'ID' === (u = l[0]).type &&
            9 === e.nodeType &&
            g &&
            i.relative[l[1].type]
          ) {
            if (!(e = (i.find.ID(u.matches[0].replace(Z, tt), e) || [])[0])) return n;
            h && (e = e.parentNode), (t = t.slice(l.shift().value.length));
          }
          for (o = Y.needsContext.test(t) ? 0 : l.length; o-- && !i.relative[(c = (u = l[o]).type)]; )
            if ((d = i.find[c]) && (r = d(u.matches[0].replace(Z, tt), (J.test(l[0].type) && gt(e.parentNode)) || e))) {
              if ((l.splice(o, 1), !(t = r.length && vt(l)))) return O.apply(n, r), n;
              break;
            }
        }
        return (h || s(t, f))(r, e, !g, n, !e || (J.test(t) && gt(e.parentNode)) || e), n;
      }),
      (n.sortStable =
        x
          .split('')
          .sort(D)
          .join('') === x),
      (n.detectDuplicates = !!d),
      h(),
      (n.sortDetached = lt(function(t) {
        return 1 & t.compareDocumentPosition(f.createElement('fieldset'));
      })),
      lt(function(t) {
        return (t.innerHTML = "<a href='#'></a>"), '#' === t.firstChild.getAttribute('href');
      }) ||
        ut('type|href|height|width', function(t, e, n) {
          if (!n) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        lt(function(t) {
          return (
            (t.innerHTML = '<input/>'),
            t.firstChild.setAttribute('value', ''),
            '' === t.firstChild.getAttribute('value')
          );
        })) ||
        ut('value', function(t, e, n) {
          if (!n && 'input' === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      lt(function(t) {
        return null == t.getAttribute('disabled');
      }) ||
        ut(L, function(t, e, n) {
          var i;
          if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }),
      ot
    );
  })(t);
  (x.find = C),
    (x.expr = C.selectors),
    (x.expr[':'] = x.expr.pseudos),
    (x.uniqueSort = x.unique = C.uniqueSort),
    (x.text = C.getText),
    (x.isXMLDoc = C.isXML),
    (x.contains = C.contains),
    (x.escapeSelector = C.escape);
  var S = function(t, e, n) {
      for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (r && x(t).is(n)) break;
          i.push(t);
        }
      return i;
    },
    T = function(t, e) {
      for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
    k = x.expr.match.needsContext;
  function D(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function E(t, e, n) {
    return g(e)
      ? x.grep(t, function(t, i) {
          return !!e.call(t, i, t) !== n;
        })
      : e.nodeType
      ? x.grep(t, function(t) {
          return (t === e) !== n;
        })
      : 'string' != typeof e
      ? x.grep(t, function(t) {
          return l.call(e, t) > -1 !== n;
        })
      : x.filter(e, t, n);
  }
  (x.filter = function(t, e, n) {
    var i = e[0];
    return (
      n && (t = ':not(' + t + ')'),
      1 === e.length && 1 === i.nodeType
        ? x.find.matchesSelector(i, t)
          ? [i]
          : []
        : x.find.matches(
            t,
            x.grep(e, function(t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    x.fn.extend({
      find: function(t) {
        var e,
          n,
          i = this.length,
          r = this;
        if ('string' != typeof t)
          return this.pushStack(
            x(t).filter(function() {
              for (e = 0; e < i; e++) if (x.contains(r[e], this)) return !0;
            })
          );
        for (n = this.pushStack([]), e = 0; e < i; e++) x.find(t, r[e], n);
        return i > 1 ? x.uniqueSort(n) : n;
      },
      filter: function(t) {
        return this.pushStack(E(this, t || [], !1));
      },
      not: function(t) {
        return this.pushStack(E(this, t || [], !0));
      },
      is: function(t) {
        return !!E(this, 'string' == typeof t && k.test(t) ? x(t) : t || [], !1).length;
      }
    });
  var I,
    M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((x.fn.init = function(t, e, n) {
    var r, o;
    if (!t) return this;
    if (((n = n || I), 'string' == typeof t)) {
      if (!(r = '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || (!r[1] && e))
        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (r[1]) {
        if (
          (x.merge(
            this,
            x.parseHTML(r[1], (e = e instanceof x ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i, !0)
          ),
          A.test(r[1]) && x.isPlainObject(e))
        )
          for (r in e) g(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
        return this;
      }
      return (o = i.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : g(t)
      ? void 0 !== n.ready
        ? n.ready(t)
        : t(x)
      : x.makeArray(t, this);
  }).prototype = x.fn),
    (I = x(i));
  var O = /^(?:parents|prev(?:Until|All))/,
    P = { children: !0, contents: !0, next: !0, prev: !0 };
  function N(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  x.fn.extend({
    has: function(t) {
      var e = x(t, this),
        n = e.length;
      return this.filter(function() {
        for (var t = 0; t < n; t++) if (x.contains(this, e[t])) return !0;
      });
    },
    closest: function(t, e) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = 'string' != typeof t && x(t);
      if (!k.test(t))
        for (; i < r; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o);
    },
    index: function(t) {
      return t
        ? 'string' == typeof t
          ? l.call(x(t), this[0])
          : l.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(t, e) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
    },
    addBack: function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }),
    x.each(
      {
        parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
          return S(t, 'parentNode');
        },
        parentsUntil: function(t, e, n) {
          return S(t, 'parentNode', n);
        },
        next: function(t) {
          return N(t, 'nextSibling');
        },
        prev: function(t) {
          return N(t, 'previousSibling');
        },
        nextAll: function(t) {
          return S(t, 'nextSibling');
        },
        prevAll: function(t) {
          return S(t, 'previousSibling');
        },
        nextUntil: function(t, e, n) {
          return S(t, 'nextSibling', n);
        },
        prevUntil: function(t, e, n) {
          return S(t, 'previousSibling', n);
        },
        siblings: function(t) {
          return T((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
          return T(t.firstChild);
        },
        contents: function(t) {
          return D(t, 'iframe')
            ? t.contentDocument
            : (D(t, 'template') && (t = t.content || t), x.merge([], t.childNodes));
        }
      },
      function(t, e) {
        x.fn[t] = function(n, i) {
          var r = x.map(this, e, n);
          return (
            'Until' !== t.slice(-5) && (i = n),
            i && 'string' == typeof i && (r = x.filter(i, r)),
            this.length > 1 && (P[t] || x.uniqueSort(r), O.test(t) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var L = /[^\x20\t\r\n\f]+/g;
  function R(t) {
    return t;
  }
  function F(t) {
    throw t;
  }
  function j(t, e, n, i) {
    var r;
    try {
      t && g((r = t.promise))
        ? r
            .call(t)
            .done(e)
            .fail(n)
        : t && g((r = t.then))
        ? r.call(t, e, n)
        : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }
  (x.Callbacks = function(t) {
    t =
      'string' == typeof t
        ? (function(t) {
            var e = {};
            return (
              x.each(t.match(L) || [], function(t, n) {
                e[n] = !0;
              }),
              e
            );
          })(t)
        : x.extend({}, t);
    var e,
      n,
      i,
      r,
      o = [],
      a = [],
      s = -1,
      l = function() {
        for (r = r || t.once, i = e = !0; a.length; s = -1)
          for (n = a.shift(); ++s < o.length; )
            !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && ((s = o.length), (n = !1));
        t.memory || (n = !1), (e = !1), r && (o = n ? [] : '');
      },
      u = {
        add: function() {
          return (
            o &&
              (n && !e && ((s = o.length - 1), a.push(n)),
              (function e(n) {
                x.each(n, function(n, i) {
                  g(i) ? (t.unique && u.has(i)) || o.push(i) : i && i.length && 'string' !== b(i) && e(i);
                });
              })(arguments),
              n && !e && l()),
            this
          );
        },
        remove: function() {
          return (
            x.each(arguments, function(t, e) {
              for (var n; (n = x.inArray(e, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function(t) {
          return t ? x.inArray(t, o) > -1 : o.length > 0;
        },
        empty: function() {
          return o && (o = []), this;
        },
        disable: function() {
          return (r = a = []), (o = n = ''), this;
        },
        disabled: function() {
          return !o;
        },
        lock: function() {
          return (r = a = []), n || e || (o = n = ''), this;
        },
        locked: function() {
          return !!r;
        },
        fireWith: function(t, n) {
          return r || ((n = [t, (n = n || []).slice ? n.slice() : n]), a.push(n), e || l()), this;
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!i;
        }
      };
    return u;
  }),
    x.extend({
      Deferred: function(e) {
        var n = [
            ['notify', 'progress', x.Callbacks('memory'), x.Callbacks('memory'), 2],
            ['resolve', 'done', x.Callbacks('once memory'), x.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', x.Callbacks('once memory'), x.Callbacks('once memory'), 1, 'rejected']
          ],
          i = 'pending',
          r = {
            state: function() {
              return i;
            },
            always: function() {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function(t) {
              return r.then(null, t);
            },
            pipe: function() {
              var t = arguments;
              return x
                .Deferred(function(e) {
                  x.each(n, function(n, i) {
                    var r = g(t[i[4]]) && t[i[4]];
                    o[i[1]](function() {
                      var t = r && r.apply(this, arguments);
                      t && g(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[i[0] + 'With'](this, r ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function(e, i, r) {
              var o = 0;
              function a(e, n, i, r) {
                return function() {
                  var s = this,
                    l = arguments,
                    u = function() {
                      var t, u;
                      if (!(e < o)) {
                        if ((t = i.apply(s, l)) === n.promise()) throw new TypeError('Thenable self-resolution');
                        g((u = t && ('object' == typeof t || 'function' == typeof t) && t.then))
                          ? r
                            ? u.call(t, a(o, n, R, r), a(o, n, F, r))
                            : u.call(t, a(++o, n, R, r), a(o, n, F, r), a(o, n, R, n.notifyWith))
                          : (i !== R && ((s = void 0), (l = [t])), (r || n.resolveWith)(s, l));
                      }
                    },
                    c = r
                      ? u
                      : function() {
                          try {
                            u();
                          } catch (t) {
                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, c.stackTrace),
                              e + 1 >= o && (i !== F && ((s = void 0), (l = [t])), n.rejectWith(s, l));
                          }
                        };
                  e ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), t.setTimeout(c));
                };
              }
              return x
                .Deferred(function(t) {
                  n[0][3].add(a(0, t, g(r) ? r : R, t.notifyWith)),
                    n[1][3].add(a(0, t, g(e) ? e : R)),
                    n[2][3].add(a(0, t, g(i) ? i : F));
                })
                .promise();
            },
            promise: function(t) {
              return null != t ? x.extend(t, r) : r;
            }
          },
          o = {};
        return (
          x.each(n, function(t, e) {
            var a = e[2],
              s = e[5];
            (r[e[1]] = a.add),
              s &&
                a.add(
                  function() {
                    i = s;
                  },
                  n[3 - t][2].disable,
                  n[3 - t][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(e[3].fire),
              (o[e[0]] = function() {
                return o[e[0] + 'With'](this === o ? void 0 : this, arguments), this;
              }),
              (o[e[0] + 'With'] = a.fireWith);
          }),
          r.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function(t) {
        var e = arguments.length,
          n = e,
          i = Array(n),
          r = o.call(arguments),
          a = x.Deferred(),
          s = function(t) {
            return function(n) {
              (i[t] = this), (r[t] = arguments.length > 1 ? o.call(arguments) : n), --e || a.resolveWith(i, r);
            };
          };
        if (e <= 1 && (j(t, a.done(s(n)).resolve, a.reject, !e), 'pending' === a.state() || g(r[n] && r[n].then)))
          return a.then();
        for (; n--; ) j(r[n], s(n), a.reject);
        return a.promise();
      }
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (x.Deferred.exceptionHook = function(e, n) {
    t.console &&
      t.console.warn &&
      e &&
      H.test(e.name) &&
      t.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, n);
  }),
    (x.readyException = function(e) {
      t.setTimeout(function() {
        throw e;
      });
    });
  var W = x.Deferred();
  function B() {
    i.removeEventListener('DOMContentLoaded', B), t.removeEventListener('load', B), x.ready();
  }
  (x.fn.ready = function(t) {
    return (
      W.then(t).catch(function(t) {
        x.readyException(t);
      }),
      this
    );
  }),
    x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(t) {
        (!0 === t ? --x.readyWait : x.isReady) ||
          ((x.isReady = !0), (!0 !== t && --x.readyWait > 0) || W.resolveWith(i, [x]));
      }
    }),
    (x.ready.then = W.then),
    'complete' === i.readyState || ('loading' !== i.readyState && !i.documentElement.doScroll)
      ? t.setTimeout(x.ready)
      : (i.addEventListener('DOMContentLoaded', B), t.addEventListener('load', B));
  var $ = function(t, e, n, i, r, o, a) {
      var s = 0,
        l = t.length,
        u = null == n;
      if ('object' === b(n)) for (s in ((r = !0), n)) $(t, e, s, n[s], !0, o, a);
      else if (
        void 0 !== i &&
        ((r = !0),
        g(i) || (a = !0),
        u &&
          (a
            ? (e.call(t, i), (e = null))
            : ((u = e),
              (e = function(t, e, n) {
                return u.call(x(t), n);
              }))),
        e)
      )
        for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
      return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
    },
    q = /^-ms-/,
    z = /-([a-z])/g;
  function V(t, e) {
    return e.toUpperCase();
  }
  function U(t) {
    return t.replace(q, 'ms-').replace(z, V);
  }
  var Y = function(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };
  function G() {
    this.expando = x.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function(t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Y(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))),
          e
        );
      },
      set: function(t, e, n) {
        var i,
          r = this.cache(t);
        if ('string' == typeof e) r[U(e)] = n;
        else for (i in e) r[U(i)] = e[i];
        return r;
      },
      get: function(t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)];
      },
      access: function(t, e, n) {
        return void 0 === e || (e && 'string' == typeof e && void 0 === n)
          ? this.get(t, e)
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function(t, e) {
        var n,
          i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(L) || []).length;
            for (; n--; ) delete i[e[n]];
          }
          (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function(t) {
        var e = t[this.expando];
        return void 0 !== e && !x.isEmptyObject(e);
      }
    });
  var K = new G(),
    Q = new G(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(t, e, n) {
    var i;
    if (void 0 === n && 1 === t.nodeType)
      if (((i = 'data-' + e.replace(J, '-$&').toLowerCase()), 'string' == typeof (n = t.getAttribute(i)))) {
        try {
          n = (function(t) {
            return (
              'true' === t ||
              ('false' !== t && ('null' === t ? null : t === +t + '' ? +t : X.test(t) ? JSON.parse(t) : t))
            );
          })(n);
        } catch (t) {}
        Q.set(t, e, n);
      } else n = void 0;
    return n;
  }
  x.extend({
    hasData: function(t) {
      return Q.hasData(t) || K.hasData(t);
    },
    data: function(t, e, n) {
      return Q.access(t, e, n);
    },
    removeData: function(t, e) {
      Q.remove(t, e);
    },
    _data: function(t, e, n) {
      return K.access(t, e, n);
    },
    _removeData: function(t, e) {
      K.remove(t, e);
    }
  }),
    x.fn.extend({
      data: function(t, e) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === t) {
          if (this.length && ((r = Q.get(o)), 1 === o.nodeType && !K.get(o, 'hasDataAttrs'))) {
            for (n = a.length; n--; )
              a[n] && 0 === (i = a[n].name).indexOf('data-') && ((i = U(i.slice(5))), Z(o, i, r[i]));
            K.set(o, 'hasDataAttrs', !0);
          }
          return r;
        }
        return 'object' == typeof t
          ? this.each(function() {
              Q.set(this, t);
            })
          : $(
              this,
              function(e) {
                var n;
                if (o && void 0 === e) {
                  if (void 0 !== (n = Q.get(o, t))) return n;
                  if (void 0 !== (n = Z(o, t))) return n;
                } else
                  this.each(function() {
                    Q.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(t) {
        return this.each(function() {
          Q.remove(this, t);
        });
      }
    }),
    x.extend({
      queue: function(t, e, n) {
        var i;
        if (t)
          return (
            (i = K.get(t, (e = (e || 'fx') + 'queue'))),
            n && (!i || Array.isArray(n) ? (i = K.access(t, e, x.makeArray(n))) : i.push(n)),
            i || []
          );
      },
      dequeue: function(t, e) {
        var n = x.queue(t, (e = e || 'fx')),
          i = n.length,
          r = n.shift(),
          o = x._queueHooks(t, e);
        'inprogress' === r && ((r = n.shift()), i--),
          r &&
            ('fx' === e && n.unshift('inprogress'),
            delete o.stop,
            r.call(
              t,
              function() {
                x.dequeue(t, e);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function(t, e) {
        var n = e + 'queueHooks';
        return (
          K.get(t, n) ||
          K.access(t, n, {
            empty: x.Callbacks('once memory').add(function() {
              K.remove(t, [e + 'queue', n]);
            })
          })
        );
      }
    }),
    x.fn.extend({
      queue: function(t, e) {
        var n = 2;
        return (
          'string' != typeof t && ((e = t), (t = 'fx'), n--),
          arguments.length < n
            ? x.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function() {
                var n = x.queue(this, t, e);
                x._queueHooks(this, t), 'fx' === t && 'inprogress' !== n[0] && x.dequeue(this, t);
              })
        );
      },
      dequeue: function(t) {
        return this.each(function() {
          x.dequeue(this, t);
        });
      },
      clearQueue: function(t) {
        return this.queue(t || 'fx', []);
      },
      promise: function(t, e) {
        var n,
          i = 1,
          r = x.Deferred(),
          o = this,
          a = this.length,
          s = function() {
            --i || r.resolveWith(o, [o]);
          };
        for ('string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx'; a--; )
          (n = K.get(o[a], t + 'queueHooks')) && n.empty && (i++, n.empty.add(s));
        return s(), r.promise(e);
      }
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp('^(?:([+-])=|)(' + tt + ')([a-z%]*)$', 'i'),
    nt = ['Top', 'Right', 'Bottom', 'Left'],
    it = function(t, e) {
      return (
        'none' === (t = e || t).style.display ||
        ('' === t.style.display && x.contains(t.ownerDocument, t) && 'none' === x.css(t, 'display'))
      );
    },
    rt = function(t, e, n, i) {
      var r,
        o,
        a = {};
      for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = a[o];
      return r;
    };
  function ot(t, e, n, i) {
    var r,
      o,
      a = 20,
      s = i
        ? function() {
            return i.cur();
          }
        : function() {
            return x.css(t, e, '');
          },
      l = s(),
      u = (n && n[3]) || (x.cssNumber[e] ? '' : 'px'),
      c = (x.cssNumber[e] || ('px' !== u && +l)) && et.exec(x.css(t, e));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; a--; )
        x.style(t, e, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), (c /= o);
      x.style(t, e, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var at = {};
  function st(t) {
    var e,
      n = t.ownerDocument,
      i = t.nodeName,
      r = at[i];
    return (
      r ||
      ((e = n.body.appendChild(n.createElement(i))),
      (r = x.css(e, 'display')),
      e.parentNode.removeChild(e),
      'none' === r && (r = 'block'),
      (at[i] = r),
      r)
    );
  }
  function lt(t, e) {
    for (var n, i, r = [], o = 0, a = t.length; o < a; o++)
      (i = t[o]).style &&
        ((n = i.style.display),
        e
          ? ('none' === n && ((r[o] = K.get(i, 'display') || null), r[o] || (i.style.display = '')),
            '' === i.style.display && it(i) && (r[o] = st(i)))
          : 'none' !== n && ((r[o] = 'none'), K.set(i, 'display', n)));
    for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
    return t;
  }
  x.fn.extend({
    show: function() {
      return lt(this, !0);
    },
    hide: function() {
      return lt(this);
    },
    toggle: function(t) {
      return 'boolean' == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function() {
            it(this) ? x(this).show() : x(this).hide();
          });
    }
  });
  var ut = /^(?:checkbox|radio)$/i,
    ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    dt = /^$|^module$|\/(?:java|ecma)script/i,
    ht = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
  function ft(t, e) {
    var n;
    return (
      (n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || '*')
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || '*')
          : []),
      void 0 === e || (e && D(t, e)) ? x.merge([t], n) : n
    );
  }
  function pt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) K.set(t[n], 'globalEval', !e || K.get(e[n], 'globalEval'));
  }
  (ht.optgroup = ht.option), (ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead), (ht.th = ht.td);
  var gt = /<|&#?\w+;/;
  function mt(t, e, n, i, r) {
    for (var o, a, s, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
      if ((o = t[f]) || 0 === o)
        if ('object' === b(o)) x.merge(h, o.nodeType ? [o] : o);
        else if (gt.test(o)) {
          for (
            a = a || d.appendChild(e.createElement('div')),
              s = (ct.exec(o) || ['', ''])[1].toLowerCase(),
              a.innerHTML = (l = ht[s] || ht._default)[1] + x.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            a = a.lastChild;
          x.merge(h, a.childNodes), ((a = d.firstChild).textContent = '');
        } else h.push(e.createTextNode(o));
    for (d.textContent = '', f = 0; (o = h[f++]); )
      if (i && x.inArray(o, i) > -1) r && r.push(o);
      else if (((u = x.contains(o.ownerDocument, o)), (a = ft(d.appendChild(o), 'script')), u && pt(a), n))
        for (c = 0; (o = a[c++]); ) dt.test(o.type || '') && n.push(o);
    return d;
  }
  !(function() {
    var t = i.createDocumentFragment().appendChild(i.createElement('div')),
      e = i.createElement('input');
    e.setAttribute('type', 'radio'),
      e.setAttribute('checked', 'checked'),
      e.setAttribute('name', 't'),
      t.appendChild(e),
      (p.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = '<textarea>x</textarea>'),
      (p.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var vt = i.documentElement,
    yt = /^key/,
    bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    xt = /^([^.]*)(?:\.(.+)|)/;
  function _t() {
    return !0;
  }
  function wt() {
    return !1;
  }
  function Ct() {
    try {
      return i.activeElement;
    } catch (t) {}
  }
  function St(t, e, n, i, r, o) {
    var a, s;
    if ('object' == typeof e) {
      for (s in ('string' != typeof n && ((i = i || n), (n = void 0)), e)) St(t, s, n, i, e[s], o);
      return t;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r && ('string' == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = wt;
    else if (!r) return t;
    return (
      1 === o &&
        ((a = r),
        ((r = function(t) {
          return x().off(t), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = x.guid++))),
      t.each(function() {
        x.event.add(this, e, r, i, n);
      })
    );
  }
  (x.event = {
    global: {},
    add: function(t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        g,
        m = K.get(t);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && x.find.matchesSelector(vt, r),
            n.guid || (n.guid = x.guid++),
            (l = m.events) || (l = m.events = {}),
            (a = m.handle) ||
              (a = m.handle = function(e) {
                return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0;
              }),
            u = (e = (e || '').match(L) || ['']).length;
          u--;

        )
          (f = g = (s = xt.exec(e[u]) || [])[1]),
            (p = (s[2] || '').split('.').sort()),
            f &&
              ((d = x.event.special[f] || {}),
              (d = x.event.special[(f = (r ? d.delegateType : d.bindType) || f)] || {}),
              (c = x.extend(
                {
                  type: f,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && x.expr.match.needsContext.test(r),
                  namespace: p.join('.')
                },
                o
              )),
              (h = l[f]) ||
                (((h = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(t, i, p, a)) || (t.addEventListener && t.addEventListener(f, a))),
              d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (x.event.global[f] = !0));
    },
    remove: function(t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        g,
        m = K.hasData(t) && K.get(t);
      if (m && (l = m.events)) {
        for (u = (e = (e || '').match(L) || ['']).length; u--; )
          if (((f = g = (s = xt.exec(e[u]) || [])[1]), (p = (s[2] || '').split('.').sort()), f)) {
            for (
              d = x.event.special[f] || {},
                h = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                s = s[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = o = h.length;
              o--;

            )
              (c = h[o]),
                (!r && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                  (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
            a &&
              !h.length &&
              ((d.teardown && !1 !== d.teardown.call(t, p, m.handle)) || x.removeEvent(t, f, m.handle), delete l[f]);
          } else for (f in l) x.event.remove(t, f + e[u], n, i, !0);
        x.isEmptyObject(l) && K.remove(t, 'handle events');
      }
    },
    dispatch: function(t) {
      var e,
        n,
        i,
        r,
        o,
        a,
        s = x.event.fix(t),
        l = new Array(arguments.length),
        u = (K.get(this, 'events') || {})[s.type] || [],
        c = x.event.special[s.type] || {};
      for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
      if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
        for (a = x.event.handlers.call(this, s, u), e = 0; (r = a[e++]) && !s.isPropagationStopped(); )
          for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) &&
                !1 === (s.result = i) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function(t, e) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        l = e.delegateCount,
        u = t.target;
      if (l && u.nodeType && !('click' === t.type && t.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== t.type || !0 !== u.disabled)) {
            for (o = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(r = (i = e[n]).selector + ' ')] &&
                (a[r] = i.needsContext ? x(r, this).index(u) > -1 : x.find(r, this, null, [u]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: u, handlers: o });
          }
      return (u = this), l < e.length && s.push({ elem: u, handlers: e.slice(l) }), s;
    },
    addProp: function(t, e) {
      Object.defineProperty(x.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: g(e)
          ? function() {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function(e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        }
      });
    },
    fix: function(t) {
      return t[x.expando] ? t : new x.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== Ct() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          if (this === Ct() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          if ('checkbox' === this.type && this.click && D(this, 'input')) return this.click(), !1;
        },
        _default: function(t) {
          return D(t.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }),
    (x.removeEvent = function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (x.Event = function(t, e) {
      if (!(this instanceof x.Event)) return new x.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? _t : wt),
          (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && x.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: wt,
      isPropagationStopped: wt,
      isImmediatePropagationStopped: wt,
      isSimulated: !1,
      preventDefault: function() {
        var t = this.originalEvent;
        (this.isDefaultPrevented = _t), t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function() {
        var t = this.originalEvent;
        (this.isPropagationStopped = _t), t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = _t),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    x.each(
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
        which: function(t) {
          var e = t.button;
          return null == t.which && yt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && bt.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        }
      },
      x.event.addProp
    ),
    x.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function(t, e) {
        x.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
            var n,
              i = t.relatedTarget,
              r = t.handleObj;
            return (
              (i && (i === this || x.contains(this, i))) ||
                ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)),
              n
            );
          }
        };
      }
    ),
    x.fn.extend({
      on: function(t, e, n, i) {
        return St(this, t, e, n, i);
      },
      one: function(t, e, n, i) {
        return St(this, t, e, n, i, 1);
      },
      off: function(t, e, n) {
        var i, r;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            x(t.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
            this
          );
        if ('object' == typeof t) {
          for (r in t) this.off(r, e, t[r]);
          return this;
        }
        return (
          (!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
          !1 === n && (n = wt),
          this.each(function() {
            x.event.remove(this, t, n, e);
          })
        );
      }
    });
  var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    kt = /<script|<style|<link/i,
    Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Et(t, e) {
    return (D(t, 'table') && D(11 !== e.nodeType ? e : e.firstChild, 'tr') && x(t).children('tbody')[0]) || t;
  }
  function It(t) {
    return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
  }
  function Mt(t) {
    return 'true/' === (t.type || '').slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute('type'), t;
  }
  function Ot(t, e) {
    var n, i, r, o, a, s, l, u;
    if (1 === e.nodeType) {
      if (K.hasData(t) && ((o = K.access(t)), (a = K.set(e, o)), (u = o.events)))
        for (r in (delete a.handle, (a.events = {}), u))
          for (n = 0, i = u[r].length; n < i; n++) x.event.add(e, r, u[r][n]);
      Q.hasData(t) && ((s = Q.access(t)), (l = x.extend({}, s)), Q.set(e, l));
    }
  }
  function Pt(t, e) {
    var n = e.nodeName.toLowerCase();
    'input' === n && ut.test(t.type)
      ? (e.checked = t.checked)
      : ('input' !== n && 'textarea' !== n) || (e.defaultValue = t.defaultValue);
  }
  function Nt(t, e, n, i) {
    e = a.apply([], e);
    var r,
      o,
      s,
      l,
      u,
      c,
      d = 0,
      h = t.length,
      f = h - 1,
      m = e[0],
      v = g(m);
    if (v || (h > 1 && 'string' == typeof m && !p.checkClone && Dt.test(m)))
      return t.each(function(r) {
        var o = t.eq(r);
        v && (e[0] = m.call(this, r, o.html())), Nt(o, e, n, i);
      });
    if (
      h &&
      ((o = (r = mt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)
    ) {
      for (l = (s = x.map(ft(r, 'script'), It)).length; d < h; d++)
        (u = r), d !== f && ((u = x.clone(u, !0, !0)), l && x.merge(s, ft(u, 'script'))), n.call(t[d], u, d);
      if (l)
        for (c = s[s.length - 1].ownerDocument, x.map(s, Mt), d = 0; d < l; d++)
          dt.test((u = s[d]).type || '') &&
            !K.access(u, 'globalEval') &&
            x.contains(c, u) &&
            (u.src && 'module' !== (u.type || '').toLowerCase()
              ? x._evalUrl && x._evalUrl(u.src)
              : y(u.textContent.replace(At, ''), c, u));
    }
    return t;
  }
  function Lt(t, e, n) {
    for (var i, r = e ? x.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || x.cleanData(ft(i)),
        i.parentNode && (n && x.contains(i.ownerDocument, i) && pt(ft(i, 'script')), i.parentNode.removeChild(i));
    return t;
  }
  x.extend({
    htmlPrefilter: function(t) {
      return t.replace(Tt, '<$1></$2>');
    },
    clone: function(t, e, n) {
      var i,
        r,
        o,
        a,
        s = t.cloneNode(!0),
        l = x.contains(t.ownerDocument, t);
      if (!(p.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || x.isXMLDoc(t)))
        for (a = ft(s), i = 0, r = (o = ft(t)).length; i < r; i++) Pt(o[i], a[i]);
      if (e)
        if (n) for (o = o || ft(t), a = a || ft(s), i = 0, r = o.length; i < r; i++) Ot(o[i], a[i]);
        else Ot(t, s);
      return (a = ft(s, 'script')).length > 0 && pt(a, !l && ft(t, 'script')), s;
    },
    cleanData: function(t) {
      for (var e, n, i, r = x.event.special, o = 0; void 0 !== (n = t[o]); o++)
        if (Y(n)) {
          if ((e = n[K.expando])) {
            if (e.events) for (i in e.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
            n[K.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    }
  }),
    x.fn.extend({
      detach: function(t) {
        return Lt(this, t, !0);
      },
      remove: function(t) {
        return Lt(this, t);
      },
      text: function(t) {
        return $(
          this,
          function(t) {
            return void 0 === t
              ? x.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function() {
        return Nt(this, arguments, function(t) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Et(this, t).appendChild(t);
        });
      },
      prepend: function() {
        return Nt(this, arguments, function(t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = Et(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function() {
        return Nt(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function() {
        return Nt(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (x.cleanData(ft(t, !1)), (t.textContent = ''));
        return this;
      },
      clone: function(t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function() {
            return x.clone(this, t, e);
          })
        );
      },
      html: function(t) {
        return $(
          this,
          function(t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if ('string' == typeof t && !kt.test(t) && !ht[(ct.exec(t) || ['', ''])[1].toLowerCase()]) {
              t = x.htmlPrefilter(t);
              try {
                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (x.cleanData(ft(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function() {
        var t = [];
        return Nt(
          this,
          arguments,
          function(e) {
            var n = this.parentNode;
            x.inArray(this, t) < 0 && (x.cleanData(ft(this)), n && n.replaceChild(e, this));
          },
          t
        );
      }
    }),
    x.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(t, e) {
        x.fn[t] = function(t) {
          for (var n, i = [], r = x(t), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)), x(r[a])[e](n), s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Rt = new RegExp('^(' + tt + ')(?!px)[a-z%]+$', 'i'),
    Ft = function(e) {
      var n = e.ownerDocument.defaultView;
      return (n && n.opener) || (n = t), n.getComputedStyle(e);
    },
    jt = new RegExp(nt.join('|'), 'i');
  function Ht(t, e, n) {
    var i,
      r,
      o,
      a,
      s = t.style;
    return (
      (n = n || Ft(t)) &&
        ('' !== (a = n.getPropertyValue(e) || n[e]) || x.contains(t.ownerDocument, t) || (a = x.style(t, e)),
        !p.pixelBoxStyles() &&
          Rt.test(a) &&
          jt.test(e) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Wt(t, e) {
    return {
      get: function() {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function() {
    function e() {
      if (c) {
        (u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          vt.appendChild(u).appendChild(c);
        var e = t.getComputedStyle(c);
        (r = '1%' !== e.top),
          (l = 12 === n(e.marginLeft)),
          (c.style.right = '60%'),
          (s = 36 === n(e.right)),
          (o = 36 === n(e.width)),
          (c.style.position = 'absolute'),
          (a = 36 === c.offsetWidth || 'absolute'),
          vt.removeChild(u),
          (c = null);
      }
    }
    function n(t) {
      return Math.round(parseFloat(t));
    }
    var r,
      o,
      a,
      s,
      l,
      u = i.createElement('div'),
      c = i.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (p.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      x.extend(p, {
        boxSizingReliable: function() {
          return e(), o;
        },
        pixelBoxStyles: function() {
          return e(), s;
        },
        pixelPosition: function() {
          return e(), r;
        },
        reliableMarginLeft: function() {
          return e(), l;
        },
        scrollboxSize: function() {
          return e(), a;
        }
      }));
  })();
  var Bt = /^(none|table(?!-c[ea]).+)/,
    $t = /^--/,
    qt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    zt = { letterSpacing: '0', fontWeight: '400' },
    Vt = ['Webkit', 'Moz', 'ms'],
    Ut = i.createElement('div').style;
  function Yt(t) {
    var e = x.cssProps[t];
    return (
      e ||
        (e = x.cssProps[t] =
          (function(t) {
            if (t in Ut) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--; ) if ((t = Vt[n] + e) in Ut) return t;
          })(t) || t),
      e
    );
  }
  function Gt(t, e, n) {
    var i = et.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : e;
  }
  function Kt(t, e, n, i, r, o) {
    var a = 'width' === e ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (l += x.css(t, n + nt[a], !0, r)),
        i
          ? ('content' === n && (l -= x.css(t, 'padding' + nt[a], !0, r)),
            'margin' !== n && (l -= x.css(t, 'border' + nt[a] + 'Width', !0, r)))
          : ((l += x.css(t, 'padding' + nt[a], !0, r)),
            'padding' !== n
              ? (l += x.css(t, 'border' + nt[a] + 'Width', !0, r))
              : (s += x.css(t, 'border' + nt[a] + 'Width', !0, r)));
    return (
      !i && o >= 0 && (l += Math.max(0, Math.ceil(t['offset' + e[0].toUpperCase() + e.slice(1)] - o - l - s - 0.5))), l
    );
  }
  function Qt(t, e, n) {
    var i = Ft(t),
      r = Ht(t, e, i),
      o = 'border-box' === x.css(t, 'boxSizing', !1, i),
      a = o;
    if (Rt.test(r)) {
      if (!n) return r;
      r = 'auto';
    }
    return (
      (a = a && (p.boxSizingReliable() || r === t.style[e])),
      ('auto' === r || (!parseFloat(r) && 'inline' === x.css(t, 'display', !1, i))) &&
        ((r = t['offset' + e[0].toUpperCase() + e.slice(1)]), (a = !0)),
      (r = parseFloat(r) || 0) + Kt(t, e, n || (o ? 'border' : 'content'), a, i, r) + 'px'
    );
  }
  function Xt(t, e, n, i, r) {
    return new Xt.prototype.init(t, e, n, i, r);
  }
  x.extend({
    cssHooks: {
      opacity: {
        get: function(t, e) {
          if (e) {
            var n = Ht(t, 'opacity');
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
    style: function(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          o,
          a,
          s = U(e),
          l = $t.test(e),
          u = t.style;
        if ((l || (e = Yt(s)), (a = x.cssHooks[e] || x.cssHooks[s]), void 0 === n))
          return a && 'get' in a && void 0 !== (r = a.get(t, !1, i)) ? r : u[e];
        'string' == (o = typeof n) && (r = et.exec(n)) && r[1] && ((n = ot(t, e, r)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' === o && (n += (r && r[3]) || (x.cssNumber[s] ? '' : 'px')),
            p.clearCloneStyle || '' !== n || 0 !== e.indexOf('background') || (u[e] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(t, n, i))) || (l ? u.setProperty(e, n) : (u[e] = n)));
      }
    },
    css: function(t, e, n, i) {
      var r,
        o,
        a,
        s = U(e);
      return (
        $t.test(e) || (e = Yt(s)),
        (a = x.cssHooks[e] || x.cssHooks[s]) && 'get' in a && (r = a.get(t, !0, n)),
        void 0 === r && (r = Ht(t, e, i)),
        'normal' === r && e in zt && (r = zt[e]),
        '' === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
      );
    }
  }),
    x.each(['height', 'width'], function(t, e) {
      x.cssHooks[e] = {
        get: function(t, n, i) {
          if (n)
            return !Bt.test(x.css(t, 'display')) || (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Qt(t, e, i)
              : rt(t, qt, function() {
                  return Qt(t, e, i);
                });
        },
        set: function(t, n, i) {
          var r,
            o = Ft(t),
            a = 'border-box' === x.css(t, 'boxSizing', !1, o),
            s = i && Kt(t, e, i, a, o);
          return (
            a &&
              p.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                t['offset' + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Kt(t, e, 'border', !1, o) - 0.5
              )),
            s && (r = et.exec(n)) && 'px' !== (r[3] || 'px') && ((t.style[e] = n), (n = x.css(t, e))),
            Gt(0, n, s)
          );
        }
      };
    }),
    (x.cssHooks.marginLeft = Wt(p.reliableMarginLeft, function(t, e) {
      if (e)
        return (
          (parseFloat(Ht(t, 'marginLeft')) ||
            t.getBoundingClientRect().left -
              rt(t, { marginLeft: 0 }, function() {
                return t.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    x.each({ margin: '', padding: '', border: 'Width' }, function(t, e) {
      (x.cssHooks[t + e] = {
        expand: function(n) {
          for (var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
            r[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
          return r;
        }
      }),
        'margin' !== t && (x.cssHooks[t + e].set = Gt);
    }),
    x.fn.extend({
      css: function(t, e) {
        return $(
          this,
          function(t, e, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(e)) {
              for (i = Ft(t), r = e.length; a < r; a++) o[e[a]] = x.css(t, e[a], !1, i);
              return o;
            }
            return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      }
    }),
    (x.Tween = Xt),
    ((Xt.prototype = {
      constructor: Xt,
      init: function(t, e, n, i, r, o) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = r || x.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (x.cssNumber[n] ? '' : 'px'));
      },
      cur: function() {
        var t = Xt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Xt.propHooks._default.get(this);
      },
      run: function(t) {
        var e,
          n = Xt.propHooks[this.prop];
        return (
          (this.pos = e = this.options.duration
            ? x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)
            : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Xt.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = Xt.prototype),
    ((Xt.propHooks = {
      _default: {
        get: function(t) {
          var e;
          return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = x.css(t.elem, t.prop, '')) && 'auto' !== e
            ? e
            : 0;
        },
        set: function(t) {
          x.fx.step[t.prop]
            ? x.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType || (null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : x.style(t.elem, t.prop, t.now + t.unit);
        }
      }
    }).scrollTop = Xt.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }),
    (x.easing = {
      linear: function(t) {
        return t;
      },
      swing: function(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (x.fx = Xt.prototype.init),
    (x.fx.step = {});
  var Jt,
    Zt,
    te = /^(?:toggle|show|hide)$/,
    ee = /queueHooks$/;
  function ne() {
    Zt &&
      (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ne) : t.setTimeout(ne, x.fx.interval),
      x.fx.tick());
  }
  function ie() {
    return (
      t.setTimeout(function() {
        Jt = void 0;
      }),
      (Jt = Date.now())
    );
  }
  function re(t, e) {
    var n,
      i = 0,
      r = { height: t };
    for (e = e ? 1 : 0; i < 4; i += 2 - e) r['margin' + (n = nt[i])] = r['padding' + n] = t;
    return e && (r.opacity = r.width = t), r;
  }
  function oe(t, e, n) {
    for (var i, r = (ae.tweeners[e] || []).concat(ae.tweeners['*']), o = 0, a = r.length; o < a; o++)
      if ((i = r[o].call(n, e, t))) return i;
  }
  function ae(t, e, n) {
    var i,
      r,
      o = 0,
      a = ae.prefilters.length,
      s = x.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (r) return !1;
        for (
          var e = Jt || ie(),
            n = Math.max(0, u.startTime + u.duration - e),
            i = 1 - (n / u.duration || 0),
            o = 0,
            a = u.tweens.length;
          o < a;
          o++
        )
          u.tweens[o].run(i);
        return (
          s.notifyWith(t, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1)
        );
      },
      u = s.promise({
        elem: t,
        props: x.extend({}, e),
        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: Jt || ie(),
        duration: n.duration,
        tweens: [],
        createTween: function(e, n) {
          var i = x.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
          return u.tweens.push(i), i;
        },
        stop: function(e) {
          var n = 0,
            i = e ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this;
        }
      }),
      c = u.props;
    for (
      (function(t, e) {
        var n, i, r, o, a;
        for (n in t)
          if (
            ((r = e[(i = U(n))]),
            (o = t[n]),
            Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
            n !== i && ((t[i] = o), delete t[n]),
            (a = x.cssHooks[i]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete t[i], o)) (n in t) || ((t[n] = o[n]), (e[n] = r));
          else e[i] = r;
      })(c, u.opts.specialEasing);
      o < a;
      o++
    )
      if ((i = ae.prefilters[o].call(u, t, c, u.opts)))
        return g(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    return (
      x.map(c, oe, u),
      g(u.opts.start) && u.opts.start.call(t, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      x.fx.timer(x.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (x.Animation = x.extend(ae, {
    tweeners: {
      '*': [
        function(t, e) {
          var n = this.createTween(t, e);
          return ot(n.elem, t, et.exec(e), n), n;
        }
      ]
    },
    tweener: function(t, e) {
      g(t) ? ((e = t), (t = ['*'])) : (t = t.match(L));
      for (var n, i = 0, r = t.length; i < r; i++) (ae.tweeners[(n = t[i])] = ae.tweeners[n] || []).unshift(e);
    },
    prefilters: [
      function(t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          d = 'width' in e || 'height' in e,
          h = this,
          f = {},
          p = t.style,
          g = t.nodeType && it(t),
          m = K.get(t, 'fxshow');
        for (i in (n.queue ||
          (null == (a = x._queueHooks(t, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function() {
              a.unqueued || s();
            })),
          a.unqueued++,
          h.always(function() {
            h.always(function() {
              a.unqueued--, x.queue(t, 'fx').length || a.empty.fire();
            });
          })),
        e))
          if (te.test((r = e[i]))) {
            if ((delete e[i], (o = o || 'toggle' === r), r === (g ? 'hide' : 'show'))) {
              if ('show' !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            f[i] = (m && m[i]) || x.style(t, i);
          }
        if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f))
          for (i in (d &&
            1 === t.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = K.get(t, 'display')),
            'none' === (c = x.css(t, 'display')) &&
              (u ? (c = u) : (lt([t], !0), (u = t.style.display || u), (c = x.css(t, 'display')), lt([t]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === x.css(t, 'float') &&
              (l ||
                (h.done(function() {
                  p.display = u;
                }),
                null == u && (u = 'none' === (c = p.display) ? '' : c)),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            h.always(function() {
              (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (m ? 'hidden' in m && (g = m.hidden) : (m = K.access(t, 'fxshow', { display: u })),
              o && (m.hidden = !g),
              g && lt([t], !0),
              h.done(function() {
                for (i in (g || lt([t]), K.remove(t, 'fxshow'), f)) x.style(t, i, f[i]);
              })),
              (l = oe(g ? m[i] : 0, i, h)),
              i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      }
    ],
    prefilter: function(t, e) {
      e ? ae.prefilters.unshift(t) : ae.prefilters.push(t);
    }
  })),
    (x.speed = function(t, e, n) {
      var i =
        t && 'object' == typeof t
          ? x.extend({}, t)
          : { complete: n || (!n && e) || (g(t) && t), duration: t, easing: (n && e) || (e && !g(e) && e) };
      return (
        x.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration = i.duration in x.fx.speeds ? x.fx.speeds[i.duration] : x.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function() {
          g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
        }),
        i
      );
    }),
    x.fn.extend({
      fadeTo: function(t, e, n, i) {
        return this.filter(it)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function(t, e, n, i) {
        var r = x.isEmptyObject(t),
          o = x.speed(e, n, i),
          a = function() {
            var e = ae(this, x.extend({}, t), o);
            (r || K.get(this, 'finish')) && e.stop(!0);
          };
        return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function(t, e, n) {
        var i = function(t) {
          var e = t.stop;
          delete t.stop, e(n);
        };
        return (
          'string' != typeof t && ((n = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || 'fx', []),
          this.each(function() {
            var e = !0,
              r = null != t && t + 'queueHooks',
              o = x.timers,
              a = K.get(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else for (r in a) a[r] && a[r].stop && ee.test(r) && i(a[r]);
            for (r = o.length; r--; )
              o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
            (!e && n) || x.dequeue(this, t);
          })
        );
      },
      finish: function(t) {
        return (
          !1 !== t && (t = t || 'fx'),
          this.each(function() {
            var e,
              n = K.get(this),
              i = n[t + 'queue'],
              r = n[t + 'queueHooks'],
              o = x.timers,
              a = i ? i.length : 0;
            for (n.finish = !0, x.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; )
              o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    x.each(['toggle', 'show', 'hide'], function(t, e) {
      var n = x.fn[e];
      x.fn[e] = function(t, i, r) {
        return null == t || 'boolean' == typeof t ? n.apply(this, arguments) : this.animate(re(e, !0), t, i, r);
      };
    }),
    x.each(
      {
        slideDown: re('show'),
        slideUp: re('hide'),
        slideToggle: re('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(t, e) {
        x.fn[t] = function(t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    (x.timers = []),
    (x.fx.tick = function() {
      var t,
        e = 0,
        n = x.timers;
      for (Jt = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || x.fx.stop(), (Jt = void 0);
    }),
    (x.fx.timer = function(t) {
      x.timers.push(t), x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function() {
      Zt || ((Zt = !0), ne());
    }),
    (x.fx.stop = function() {
      Zt = null;
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fn.delay = function(e, n) {
      return (
        (e = (x.fx && x.fx.speeds[e]) || e),
        this.queue((n = n || 'fx'), function(n, i) {
          var r = t.setTimeout(n, e);
          i.stop = function() {
            t.clearTimeout(r);
          };
        })
      );
    }),
    (function() {
      var t = i.createElement('input'),
        e = i.createElement('select').appendChild(i.createElement('option'));
      (t.type = 'checkbox'),
        (p.checkOn = '' !== t.value),
        (p.optSelected = e.selected),
        ((t = i.createElement('input')).value = 't'),
        (t.type = 'radio'),
        (p.radioValue = 't' === t.value);
    })();
  var se,
    le = x.expr.attrHandle;
  x.fn.extend({
    attr: function(t, e) {
      return $(this, x.attr, t, e, arguments.length > 1);
    },
    removeAttr: function(t) {
      return this.each(function() {
        x.removeAttr(this, t);
      });
    }
  }),
    x.extend({
      attr: function(t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? x.prop(t, e, n)
            : ((1 === o && x.isXMLDoc(t)) ||
                (r = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? se : void 0)),
              void 0 !== n
                ? null === n
                  ? void x.removeAttr(t, e)
                  : r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                  ? i
                  : (t.setAttribute(e, n + ''), n)
                : r && 'get' in r && null !== (i = r.get(t, e))
                ? i
                : null == (i = x.find.attr(t, e))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(t, e) {
            if (!p.radioValue && 'radio' === e && D(t, 'input')) {
              var n = t.value;
              return t.setAttribute('type', e), n && (t.value = n), e;
            }
          }
        }
      },
      removeAttr: function(t, e) {
        var n,
          i = 0,
          r = e && e.match(L);
        if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
      }
    }),
    (se = {
      set: function(t, e, n) {
        return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n;
      }
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var n = le[e] || x.find.attr;
      le[e] = function(t, e, i) {
        var r,
          o,
          a = e.toLowerCase();
        return i || ((o = le[a]), (le[a] = r), (r = null != n(t, e, i) ? a : null), (le[a] = o)), r;
      };
    });
  var ue = /^(?:input|select|textarea|button)$/i,
    ce = /^(?:a|area)$/i;
  function de(t) {
    return (t.match(L) || []).join(' ');
  }
  function he(t) {
    return (t.getAttribute && t.getAttribute('class')) || '';
  }
  function fe(t) {
    return Array.isArray(t) ? t : ('string' == typeof t && t.match(L)) || [];
  }
  x.fn.extend({
    prop: function(t, e) {
      return $(this, x.prop, t, e, arguments.length > 1);
    },
    removeProp: function(t) {
      return this.each(function() {
        delete this[x.propFix[t] || t];
      });
    }
  }),
    x.extend({
      prop: function(t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && x.isXMLDoc(t)) || (r = x.propHooks[(e = x.propFix[e] || e)]),
            void 0 !== n
              ? r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                ? i
                : (t[e] = n)
              : r && 'get' in r && null !== (i = r.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var e = x.find.attr(t, 'tabindex');
            return e ? parseInt(e, 10) : ue.test(t.nodeName) || (ce.test(t.nodeName) && t.href) ? 0 : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    p.optSelected ||
      (x.propHooks.selected = {
        get: function(t) {
          return null;
        },
        set: function(t) {}
      }),
    x.each(
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
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.fn.extend({
      addClass: function(t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (g(t))
          return this.each(function(e) {
            x(this).addClass(t.call(this, e, he(this)));
          });
        if ((e = fe(t)).length)
          for (; (n = this[l++]); )
            if (((r = he(n)), (i = 1 === n.nodeType && ' ' + de(r) + ' '))) {
              for (a = 0; (o = e[a++]); ) i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
              r !== (s = de(i)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function(t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (g(t))
          return this.each(function(e) {
            x(this).removeClass(t.call(this, e, he(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = fe(t)).length)
          for (; (n = this[l++]); )
            if (((r = he(n)), (i = 1 === n.nodeType && ' ' + de(r) + ' '))) {
              for (a = 0; (o = e[a++]); ) for (; i.indexOf(' ' + o + ' ') > -1; ) i = i.replace(' ' + o + ' ', ' ');
              r !== (s = de(i)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function(t, e) {
        var n = typeof t,
          i = 'string' === n || Array.isArray(t);
        return 'boolean' == typeof e && i
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : g(t)
          ? this.each(function(n) {
              x(this).toggleClass(t.call(this, n, he(this), e), e);
            })
          : this.each(function() {
              var e, r, o, a;
              if (i)
                for (r = 0, o = x(this), a = fe(t); (e = a[r++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && 'boolean' !== n) ||
                  ((e = he(this)) && K.set(this, '__className__', e),
                  this.setAttribute &&
                    this.setAttribute('class', e || !1 === t ? '' : K.get(this, '__className__') || ''));
            });
      },
      hasClass: function(t) {
        var e,
          n,
          i = 0;
        for (e = ' ' + t + ' '; (n = this[i++]); )
          if (1 === n.nodeType && (' ' + de(he(n)) + ' ').indexOf(e) > -1) return !0;
        return !1;
      }
    });
  var pe = /\r/g;
  x.fn.extend({
    val: function(t) {
      var e,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = g(t)),
          this.each(function(n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? t.call(this, n, x(this).val()) : t)
                ? (r = '')
                : 'number' == typeof r
                ? (r += '')
                : Array.isArray(r) &&
                  (r = x.map(r, function(t) {
                    return null == t ? '' : t + '';
                  })),
              ((e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in e &&
                void 0 !== e.set(this, r, 'value')) ||
                (this.value = r));
          }))
        : r
        ? (e = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) &&
          'get' in e &&
          void 0 !== (n = e.get(r, 'value'))
          ? n
          : 'string' == typeof (n = r.value)
          ? n.replace(pe, '')
          : null == n
          ? ''
          : n
        : void 0;
    }
  }),
    x.extend({
      valHooks: {
        option: {
          get: function(t) {
            var e = x.find.attr(t, 'value');
            return null != e ? e : de(x.text(t));
          }
        },
        select: {
          get: function(t) {
            var e,
              n,
              i,
              r = t.options,
              o = t.selectedIndex,
              a = 'select-one' === t.type,
              s = a ? null : [],
              l = a ? o + 1 : r.length;
            for (i = o < 0 ? l : a ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !D(n.parentNode, 'optgroup'))
              ) {
                if (((e = x(n).val()), a)) return e;
                s.push(e);
              }
            return s;
          },
          set: function(t, e) {
            for (var n, i, r = t.options, o = x.makeArray(e), a = r.length; a--; )
              ((i = r[a]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
            return n || (t.selectedIndex = -1), o;
          }
        }
      }
    }),
    x.each(['radio', 'checkbox'], function() {
      (x.valHooks[this] = {
        set: function(t, e) {
          if (Array.isArray(e)) return (t.checked = x.inArray(x(t).val(), e) > -1);
        }
      }),
        p.checkOn ||
          (x.valHooks[this].get = function(t) {
            return null === t.getAttribute('value') ? 'on' : t.value;
          });
    }),
    (p.focusin = 'onfocusin' in t);
  var ge = /^(?:focusinfocus|focusoutblur)$/,
    me = function(t) {
      t.stopPropagation();
    };
  x.extend(x.event, {
    trigger: function(e, n, r, o) {
      var a,
        s,
        l,
        u,
        c,
        h,
        f,
        p,
        v = [r || i],
        y = d.call(e, 'type') ? e.type : e,
        b = d.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((s = p = l = r = r || i),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !ge.test(y + x.event.triggered) &&
          (y.indexOf('.') > -1 && ((y = (b = y.split('.')).shift()), b.sort()),
          (c = y.indexOf(':') < 0 && 'on' + y),
          ((e = e[x.expando] ? e : new x.Event(y, 'object' == typeof e && e)).isTrigger = o ? 2 : 3),
          (e.namespace = b.join('.')),
          (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (e.result = void 0),
          e.target || (e.target = r),
          (n = null == n ? [e] : x.makeArray(n, [e])),
          (f = x.event.special[y] || {}),
          o || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!o && !f.noBubble && !m(r)) {
          for (ge.test((u = f.delegateType || y) + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (l = s);
          l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t);
        }
        for (a = 0; (s = v[a++]) && !e.isPropagationStopped(); )
          (p = s),
            (e.type = a > 1 ? u : f.bindType || y),
            (h = (K.get(s, 'events') || {})[e.type] && K.get(s, 'handle')) && h.apply(s, n),
            (h = c && s[c]) && h.apply && Y(s) && ((e.result = h.apply(s, n)), !1 === e.result && e.preventDefault());
        return (
          (e.type = y),
          o ||
            e.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(v.pop(), n)) ||
            !Y(r) ||
            (c &&
              g(r[y]) &&
              !m(r) &&
              ((l = r[c]) && (r[c] = null),
              (x.event.triggered = y),
              e.isPropagationStopped() && p.addEventListener(y, me),
              r[y](),
              e.isPropagationStopped() && p.removeEventListener(y, me),
              (x.event.triggered = void 0),
              l && (r[c] = l))),
          e.result
        );
      }
    },
    simulate: function(t, e, n) {
      var i = x.extend(new x.Event(), n, { type: t, isSimulated: !0 });
      x.event.trigger(i, null, e);
    }
  }),
    x.fn.extend({
      trigger: function(t, e) {
        return this.each(function() {
          x.event.trigger(t, e, this);
        });
      },
      triggerHandler: function(t, e) {
        var n = this[0];
        if (n) return x.event.trigger(t, e, n, !0);
      }
    }),
    p.focusin ||
      x.each({ focus: 'focusin', blur: 'focusout' }, function(t, e) {
        var n = function(t) {
          x.event.simulate(e, t.target, x.event.fix(t));
        };
        x.event.special[e] = {
          setup: function() {
            var i = this.ownerDocument || this,
              r = K.access(i, e);
            r || i.addEventListener(t, n, !0), K.access(i, e, (r || 0) + 1);
          },
          teardown: function() {
            var i = this.ownerDocument || this,
              r = K.access(i, e) - 1;
            r ? K.access(i, e, r) : (i.removeEventListener(t, n, !0), K.remove(i, e));
          }
        };
      });
  var ve = t.location,
    ye = Date.now(),
    be = /\?/;
  x.parseXML = function(e) {
    var n;
    if (!e || 'string' != typeof e) return null;
    try {
      n = new t.DOMParser().parseFromString(e, 'text/xml');
    } catch (t) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName('parsererror').length) || x.error('Invalid XML: ' + e), n;
  };
  var xe = /\[\]$/,
    _e = /\r?\n/g,
    we = /^(?:submit|button|image|reset|file)$/i,
    Ce = /^(?:input|select|textarea|keygen)/i;
  function Se(t, e, n, i) {
    var r;
    if (Array.isArray(e))
      x.each(e, function(e, r) {
        n || xe.test(t) ? i(t, r) : Se(t + '[' + ('object' == typeof r && null != r ? e : '') + ']', r, n, i);
      });
    else if (n || 'object' !== b(e)) i(t, e);
    else for (r in e) Se(t + '[' + r + ']', e[r], n, i);
  }
  (x.param = function(t, e) {
    var n,
      i = [],
      r = function(t, e) {
        var n = g(e) ? e() : e;
        i[i.length] = encodeURIComponent(t) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(t) || (t.jquery && !x.isPlainObject(t)))
      x.each(t, function() {
        r(this.name, this.value);
      });
    else for (n in t) Se(n, t[n], e, r);
    return i.join('&');
  }),
    x.fn.extend({
      serialize: function() {
        return x.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var t = x.prop(this, 'elements');
          return t ? x.makeArray(t) : this;
        })
          .filter(function() {
            var t = this.type;
            return (
              this.name &&
              !x(this).is(':disabled') &&
              Ce.test(this.nodeName) &&
              !we.test(t) &&
              (this.checked || !ut.test(t))
            );
          })
          .map(function(t, e) {
            var n = x(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? x.map(n, function(t) {
                  return { name: e.name, value: t.replace(_e, '\r\n') };
                })
              : { name: e.name, value: n.replace(_e, '\r\n') };
          })
          .get();
      }
    });
  var Te = /%20/g,
    ke = /#.*$/,
    De = /([?&])_=[^&]*/,
    Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ee = /^(?:GET|HEAD)$/,
    Ie = /^\/\//,
    Me = {},
    Oe = {},
    Pe = '*/'.concat('*'),
    Ne = i.createElement('a');
  function Le(t) {
    return function(e, n) {
      'string' != typeof e && ((n = e), (e = '*'));
      var i,
        r = 0,
        o = e.toLowerCase().match(L) || [];
      if (g(n))
        for (; (i = o[r++]); )
          '+' === i[0] ? ((i = i.slice(1) || '*'), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
    };
  }
  function Re(t, e, n, i) {
    var r = {},
      o = t === Oe;
    function a(s) {
      var l;
      return (
        (r[s] = !0),
        x.each(t[s] || [], function(t, s) {
          var u = s(e, n, i);
          return 'string' != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (e.dataTypes.unshift(u), a(u), !1);
        }),
        l
      );
    }
    return a(e.dataTypes[0]) || (!r['*'] && a('*'));
  }
  function Fe(t, e) {
    var n,
      i,
      r = x.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
    return i && x.extend(!0, t, i), t;
  }
  (Ne.href = ve.href),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ve.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Pe,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': x.parseXML },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(t, e) {
        return e ? Fe(Fe(t, x.ajaxSettings), e) : Fe(x.ajaxSettings, t);
      },
      ajaxPrefilter: Le(Me),
      ajaxTransport: Le(Oe),
      ajax: function(e, n) {
        'object' == typeof e && ((n = e), (e = void 0));
        var r,
          o,
          a,
          s,
          l,
          u,
          c,
          d,
          h,
          f,
          p = x.ajaxSetup({}, (n = n || {})),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? x(g) : x.event,
          v = x.Deferred(),
          y = x.Callbacks('once memory'),
          b = p.statusCode || {},
          _ = {},
          w = {},
          C = 'canceled',
          S = {
            readyState: 0,
            getResponseHeader: function(t) {
              var e;
              if (c) {
                if (!s) for (s = {}; (e = Ae.exec(a)); ) s[e[1].toLowerCase()] = e[2];
                e = s[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function() {
              return c ? a : null;
            },
            setRequestHeader: function(t, e) {
              return null == c && ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t), (_[t] = e)), this;
            },
            overrideMimeType: function(t) {
              return null == c && (p.mimeType = t), this;
            },
            statusCode: function(t) {
              var e;
              if (t)
                if (c) S.always(t[S.status]);
                else for (e in t) b[e] = [b[e], t[e]];
              return this;
            },
            abort: function(t) {
              var e = t || C;
              return r && r.abort(e), T(0, e), this;
            }
          };
        if (
          (v.promise(S),
          (p.url = ((e || p.url || ve.href) + '').replace(Ie, ve.protocol + '//')),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = (p.dataType || '*').toLowerCase().match(L) || ['']),
          null == p.crossDomain)
        ) {
          u = i.createElement('a');
          try {
            (u.href = p.url),
              (u.href = u.href),
              (p.crossDomain = Ne.protocol + '//' + Ne.host != u.protocol + '//' + u.host);
          } catch (t) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data && p.processData && 'string' != typeof p.data && (p.data = x.param(p.data, p.traditional)),
          Re(Me, p, n, S),
          c)
        )
          return S;
        for (h in ((d = x.event && p.global) && 0 == x.active++ && x.event.trigger('ajaxStart'),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Ee.test(p.type)),
        (o = p.url.replace(ke, '')),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
            (p.data = p.data.replace(Te, '+'))
          : ((f = p.url.slice(o.length)),
            p.data &&
              (p.processData || 'string' == typeof p.data) &&
              ((o += (be.test(o) ? '&' : '?') + p.data), delete p.data),
            !1 === p.cache && ((o = o.replace(De, '$1')), (f = (be.test(o) ? '&' : '?') + '_=' + ye++ + f)),
            (p.url = o + f)),
        p.ifModified &&
          (x.lastModified[o] && S.setRequestHeader('If-Modified-Since', x.lastModified[o]),
          x.etag[o] && S.setRequestHeader('If-None-Match', x.etag[o])),
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
          S.setRequestHeader('Content-Type', p.contentType),
        S.setRequestHeader(
          'Accept',
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Pe + '; q=0.01' : '')
            : p.accepts['*']
        ),
        p.headers))
          S.setRequestHeader(h, p.headers[h]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || c)) return S.abort();
        if (((C = 'abort'), y.add(p.complete), S.done(p.success), S.fail(p.error), (r = Re(Oe, p, n, S)))) {
          if (((S.readyState = 1), d && m.trigger('ajaxSend', [S, p]), c)) return S;
          p.async &&
            p.timeout > 0 &&
            (l = t.setTimeout(function() {
              S.abort('timeout');
            }, p.timeout));
          try {
            (c = !1), r.send(_, T);
          } catch (t) {
            if (c) throw t;
            T(-1, t);
          }
        } else T(-1, 'No Transport');
        function T(e, n, i, s) {
          var u,
            h,
            f,
            _,
            w,
            C = n;
          c ||
            ((c = !0),
            l && t.clearTimeout(l),
            (r = void 0),
            (a = s || ''),
            (S.readyState = e > 0 ? 4 : 0),
            (u = (e >= 200 && e < 300) || 304 === e),
            i &&
              (_ = (function(t, e, n) {
                for (var i, r, o, a, s = t.contents, l = t.dataTypes; '*' === l[0]; )
                  l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader('Content-Type'));
                if (i)
                  for (r in s)
                    if (s[r] && s[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || t.converters[r + ' ' + l[0]]) {
                      o = r;
                      break;
                    }
                    a || (a = r);
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(p, S, i)),
            (_ = (function(t, e, n, i) {
              var r,
                o,
                a,
                s,
                l,
                u = {},
                c = t.dataTypes.slice();
              if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
              for (o = c.shift(); o; )
                if (
                  (t.responseFields[o] && (n[t.responseFields[o]] = e),
                  !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = l;
                  else if ('*' !== l && l !== o) {
                    if (!(a = u[l + ' ' + o] || u['* ' + o]))
                      for (r in u)
                        if ((s = r.split(' '))[1] === o && (a = u[l + ' ' + s[0]] || u['* ' + s[0]])) {
                          !0 === a ? (a = u[r]) : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && t.throws) e = a(e);
                      else
                        try {
                          e = a(e);
                        } catch (t) {
                          return { state: 'parsererror', error: a ? t : 'No conversion from ' + l + ' to ' + o };
                        }
                  }
              return { state: 'success', data: e };
            })(p, _, S, u)),
            u
              ? (p.ifModified &&
                  ((w = S.getResponseHeader('Last-Modified')) && (x.lastModified[o] = w),
                  (w = S.getResponseHeader('etag')) && (x.etag[o] = w)),
                204 === e || 'HEAD' === p.type
                  ? (C = 'nocontent')
                  : 304 === e
                  ? (C = 'notmodified')
                  : ((C = _.state), (h = _.data), (u = !(f = _.error))))
              : ((f = C), (!e && C) || ((C = 'error'), e < 0 && (e = 0))),
            (S.status = e),
            (S.statusText = (n || C) + ''),
            u ? v.resolveWith(g, [h, C, S]) : v.rejectWith(g, [S, C, f]),
            S.statusCode(b),
            (b = void 0),
            d && m.trigger(u ? 'ajaxSuccess' : 'ajaxError', [S, p, u ? h : f]),
            y.fireWith(g, [S, C]),
            d && (m.trigger('ajaxComplete', [S, p]), --x.active || x.event.trigger('ajaxStop')));
        }
        return S;
      },
      getJSON: function(t, e, n) {
        return x.get(t, e, n, 'json');
      },
      getScript: function(t, e) {
        return x.get(t, void 0, e, 'script');
      }
    }),
    x.each(['get', 'post'], function(t, e) {
      x[e] = function(t, n, i, r) {
        return (
          g(n) && ((r = r || i), (i = n), (n = void 0)),
          x.ajax(x.extend({ url: t, type: e, dataType: r, data: n, success: i }, x.isPlainObject(t) && t))
        );
      };
    }),
    (x._evalUrl = function(t) {
      return x.ajax({ url: t, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
    }),
    x.fn.extend({
      wrapAll: function(t) {
        var e;
        return (
          this[0] &&
            (g(t) && (t = t.call(this[0])),
            (e = x(t, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(t) {
        return g(t)
          ? this.each(function(e) {
              x(this).wrapInner(t.call(this, e));
            })
          : this.each(function() {
              var e = x(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function(t) {
        var e = g(t);
        return this.each(function(n) {
          x(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function(t) {
        return (
          this.parent(t)
            .not('body')
            .each(function() {
              x(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (x.expr.pseudos.hidden = function(t) {
      return !x.expr.pseudos.visible(t);
    }),
    (x.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (x.ajaxSettings.xhr = function() {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var je = { 0: 200, 1223: 204 },
    He = x.ajaxSettings.xhr();
  (p.cors = !!He && 'withCredentials' in He),
    (p.ajax = He = !!He),
    x.ajaxTransport(function(e) {
      var n, i;
      if (p.cors || (He && !e.crossDomain))
        return {
          send: function(r, o) {
            var a,
              s = e.xhr();
            if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
              for (a in e.xhrFields) s[a] = e.xhrFields[a];
            for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
            e.crossDomain || r['X-Requested-With'] || (r['X-Requested-With'] = 'XMLHttpRequest'),
            r))
              s.setRequestHeader(a, r[a]);
            (n = function(t) {
              return function() {
                n &&
                  ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  'abort' === t
                    ? s.abort()
                    : 'error' === t
                    ? 'number' != typeof s.status
                      ? o(0, 'error')
                      : o(s.status, s.statusText)
                    : o(
                        je[s.status] || s.status,
                        s.statusText,
                        'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n('error')),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function() {
                    4 === s.readyState &&
                      t.setTimeout(function() {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              s.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (n) throw t;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    x.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    x.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function(t) {
          return x.globalEval(t), t;
        }
      }
    }),
    x.ajaxPrefilter('script', function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET');
    }),
    x.ajaxTransport('script', function(t) {
      var e, n;
      if (t.crossDomain)
        return {
          send: function(r, o) {
            (e = x('<script>')
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                'load error',
                (n = function(t) {
                  e.remove(), (n = null), t && o('error' === t.type ? 404 : 200, t.type);
                })
              )),
              i.head.appendChild(e[0]);
          },
          abort: function() {
            n && n();
          }
        };
    });
  var We = [],
    Be = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var t = We.pop() || x.expando + '_' + ye++;
      return (this[t] = !0), t;
    }
  }),
    x.ajaxPrefilter('json jsonp', function(e, n, i) {
      var r,
        o,
        a,
        s =
          !1 !== e.jsonp &&
          (Be.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Be.test(e.data) &&
              'data');
      if (s || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(Be, '$1' + r))
            : !1 !== e.jsonp && (e.url += (be.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function() {
            return a || x.error(r + ' was not called'), a[0];
          }),
          (e.dataTypes[0] = 'json'),
          (o = t[r]),
          (t[r] = function() {
            a = arguments;
          }),
          i.always(function() {
            void 0 === o ? x(t).removeProp(r) : (t[r] = o),
              e[r] && ((e.jsonpCallback = n.jsonpCallback), We.push(r)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script'
        );
    }),
    (p.createHTMLDocument = (function() {
      var t = i.implementation.createHTMLDocument('').body;
      return (t.innerHTML = '<form></form><form></form>'), 2 === t.childNodes.length;
    })()),
    (x.parseHTML = function(t, e, n) {
      return 'string' != typeof t
        ? []
        : ('boolean' == typeof e && ((n = e), (e = !1)),
          e ||
            (p.createHTMLDocument
              ? (((r = (e = i.implementation.createHTMLDocument('')).createElement('base')).href = i.location.href),
                e.head.appendChild(r))
              : (e = i)),
          (o = A.exec(t)),
          (a = !n && []),
          o
            ? [e.createElement(o[1])]
            : ((o = mt([t], e, a)), a && a.length && x(a).remove(), x.merge([], o.childNodes)));
      var r, o, a;
    }),
    (x.fn.load = function(t, e, n) {
      var i,
        r,
        o,
        a = this,
        s = t.indexOf(' ');
      return (
        s > -1 && ((i = de(t.slice(s))), (t = t.slice(0, s))),
        g(e) ? ((n = e), (e = void 0)) : e && 'object' == typeof e && (r = 'POST'),
        a.length > 0 &&
          x
            .ajax({ url: t, type: r || 'GET', dataType: 'html', data: e })
            .done(function(t) {
              (o = arguments),
                a.html(
                  i
                    ? x('<div>')
                        .append(x.parseHTML(t))
                        .find(i)
                    : t
                );
            })
            .always(
              n &&
                function(t, e) {
                  a.each(function() {
                    n.apply(this, o || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(t, e) {
      x.fn[e] = function(t) {
        return this.on(e, t);
      };
    }),
    (x.expr.pseudos.animated = function(t) {
      return x.grep(x.timers, function(e) {
        return t === e.elem;
      }).length;
    }),
    (x.offset = {
      setOffset: function(t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u = x.css(t, 'position'),
          c = x(t),
          d = {};
        'static' === u && (t.style.position = 'relative'),
          (s = c.offset()),
          (o = x.css(t, 'top')),
          (l = x.css(t, 'left')),
          ('absolute' === u || 'fixed' === u) && (o + l).indexOf('auto') > -1
            ? ((a = (i = c.position()).top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          g(e) && (e = e.call(t, n, x.extend({}, s))),
          null != e.top && (d.top = e.top - s.top + a),
          null != e.left && (d.left = e.left - s.left + r),
          'using' in e ? e.using.call(t, d) : c.css(d);
      }
    }),
    x.fn.extend({
      offset: function(t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function(e) {
                x.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top: (e = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: e.left + n.pageXOffset
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var t,
            e,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ('fixed' === x.css(i, 'position')) e = i.getBoundingClientRect();
          else {
            for (
              e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement;
              t && (t === n.body || t === n.documentElement) && 'static' === x.css(t, 'position');

            )
              t = t.parentNode;
            t &&
              t !== i &&
              1 === t.nodeType &&
              (((r = x(t).offset()).top += x.css(t, 'borderTopWidth', !0)),
              (r.left += x.css(t, 'borderLeftWidth', !0)));
          }
          return { top: e.top - r.top - x.css(i, 'marginTop', !0), left: e.left - r.left - x.css(i, 'marginLeft', !0) };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var t = this.offsetParent; t && 'static' === x.css(t, 'position'); ) t = t.offsetParent;
          return t || vt;
        });
      }
    }),
    x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(t, e) {
      var n = 'pageYOffset' === e;
      x.fn[t] = function(i) {
        return $(
          this,
          function(t, i, r) {
            var o;
            if ((m(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r)) return o ? o[e] : t[i];
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r);
          },
          t,
          i,
          arguments.length
        );
      };
    }),
    x.each(['top', 'left'], function(t, e) {
      x.cssHooks[e] = Wt(p.pixelPosition, function(t, n) {
        if (n) return (n = Ht(t, e)), Rt.test(n) ? x(t).position()[e] + 'px' : n;
      });
    }),
    x.each({ Height: 'height', Width: 'width' }, function(t, e) {
      x.each({ padding: 'inner' + t, content: e, '': 'outer' + t }, function(n, i) {
        x.fn[i] = function(r, o) {
          var a = arguments.length && (n || 'boolean' != typeof r),
            s = n || (!0 === r || !0 === o ? 'margin' : 'border');
          return $(
            this,
            function(e, n, r) {
              var o;
              return m(e)
                ? 0 === i.indexOf('outer')
                  ? e['inner' + t]
                  : e.document.documentElement['client' + t]
                : 9 === e.nodeType
                ? ((o = e.documentElement),
                  Math.max(
                    e.body['scroll' + t],
                    o['scroll' + t],
                    e.body['offset' + t],
                    o['offset' + t],
                    o['client' + t]
                  ))
                : void 0 === r
                ? x.css(e, n, s)
                : x.style(e, n, r, s);
            },
            e,
            a ? r : void 0,
            a
          );
        };
      });
    }),
    x.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function(t, e) {
        x.fn[e] = function(t, n) {
          return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        };
      }
    ),
    x.fn.extend({
      hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      }
    }),
    x.fn.extend({
      bind: function(t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function(t, e) {
        return this.off(t, null, e);
      },
      delegate: function(t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function(t, e, n) {
        return 1 === arguments.length ? this.off(t, '**') : this.off(e, t || '**', n);
      }
    }),
    (x.proxy = function(t, e) {
      var n, i, r;
      if (('string' == typeof e && ((n = t[e]), (e = t), (t = n)), g(t)))
        return (
          (i = o.call(arguments, 2)),
          ((r = function() {
            return t.apply(e || this, i.concat(o.call(arguments)));
          }).guid = t.guid = t.guid || x.guid++),
          r
        );
    }),
    (x.holdReady = function(t) {
      t ? x.readyWait++ : x.ready(!0);
    }),
    (x.isArray = Array.isArray),
    (x.parseJSON = JSON.parse),
    (x.nodeName = D),
    (x.isFunction = g),
    (x.isWindow = m),
    (x.camelCase = U),
    (x.type = b),
    (x.now = Date.now),
    (x.isNumeric = function(t) {
      var e = x.type(t);
      return ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function() {
        return x;
      });
  var $e = t.jQuery,
    qe = t.$;
  return (
    (x.noConflict = function(e) {
      return t.$ === x && (t.$ = qe), e && t.jQuery === x && (t.jQuery = $e), x;
    }),
    e || (t.jQuery = t.$ = x),
    x
  );
}),
  (function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define(e)
      : (t.Popper = e());
  })(this, function() {
    'use strict';
    function t(t) {
      return t && '[object Function]' === {}.toString.call(t);
    }
    function e(t, e) {
      if (1 !== t.nodeType) return [];
      var n = getComputedStyle(t, null);
      return e ? n[e] : n;
    }
    function n(t) {
      return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
    }
    function i(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case 'HTML':
        case 'BODY':
          return t.ownerDocument.body;
        case '#document':
          return t.body;
      }
      var r = e(t);
      return /(auto|scroll|overlay)/.test(r.overflow + r.overflowY + r.overflowX) ? t : i(n(t));
    }
    function r(t) {
      return 11 === t ? q : 10 === t ? z : q || z;
    }
    function o(t) {
      if (!t) return document.documentElement;
      for (var n = r(10) ? document.body : null, i = t.offsetParent; i === n && t.nextElementSibling; )
        i = (t = t.nextElementSibling).offsetParent;
      var a = i && i.nodeName;
      return a && 'BODY' !== a && 'HTML' !== a
        ? -1 !== ['TD', 'TABLE'].indexOf(i.nodeName) && 'static' === e(i, 'position')
          ? o(i)
          : i
        : t
        ? t.ownerDocument.documentElement
        : document.documentElement;
    }
    function a(t) {
      return null === t.parentNode ? t : a(t.parentNode);
    }
    function s(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        r = n ? e : t,
        l = document.createRange();
      l.setStart(i, 0), l.setEnd(r, 0);
      var u = l.commonAncestorContainer;
      if ((t !== u && e !== u) || i.contains(r))
        return (function(t) {
          var e = t.nodeName;
          return 'BODY' !== e && ('HTML' === e || o(t.firstElementChild) === t);
        })(u)
          ? u
          : o(u);
      var c = a(t);
      return c.host ? s(c.host, e) : s(t, a(e).host);
    }
    function l(t) {
      var e =
          'top' === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top')
            ? 'scrollTop'
            : 'scrollLeft',
        n = t.nodeName;
      return 'BODY' === n || 'HTML' === n
        ? (t.ownerDocument.scrollingElement || t.ownerDocument.documentElement)[e]
        : t[e];
    }
    function u(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(e, 'top'),
        r = l(e, 'left'),
        o = n ? -1 : 1;
      return (t.top += i * o), (t.bottom += i * o), (t.left += r * o), (t.right += r * o), t;
    }
    function c(t, e) {
      var n = 'x' === e ? 'Left' : 'Top',
        i = 'Left' == n ? 'Right' : 'Bottom';
      return parseFloat(t['border' + n + 'Width'], 10) + parseFloat(t['border' + i + 'Width'], 10);
    }
    function d(t, e, n, i) {
      return F(
        e['offset' + t],
        e['scroll' + t],
        n['client' + t],
        n['offset' + t],
        n['scroll' + t],
        r(10)
          ? n['offset' + t] +
              i['margin' + ('Height' === t ? 'Top' : 'Left')] +
              i['margin' + ('Height' === t ? 'Bottom' : 'Right')]
          : 0
      );
    }
    function h() {
      var t = document.body,
        e = document.documentElement,
        n = r(10) && getComputedStyle(e);
      return { height: d('Height', t, e, n), width: d('Width', t, e, n) };
    }
    function f(t) {
      return G({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function p(t) {
      var n = {};
      try {
        if (r(10)) {
          n = t.getBoundingClientRect();
          var i = l(t, 'top'),
            o = l(t, 'left');
          (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
        } else n = t.getBoundingClientRect();
      } catch (t) {}
      var a = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
        s = 'HTML' === t.nodeName ? h() : {},
        u = t.offsetWidth - (s.width || t.clientWidth || a.right - a.left),
        d = t.offsetHeight - (s.height || t.clientHeight || a.bottom - a.top);
      if (u || d) {
        var p = e(t);
        (u -= c(p, 'x')), (d -= c(p, 'y')), (a.width -= u), (a.height -= d);
      }
      return f(a);
    }
    function g(t, n) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        a = r(10),
        s = 'HTML' === n.nodeName,
        l = p(t),
        c = p(n),
        d = i(t),
        h = e(n),
        g = parseFloat(h.borderTopWidth, 10),
        m = parseFloat(h.borderLeftWidth, 10);
      o && 'HTML' === n.nodeName && ((c.top = F(c.top, 0)), (c.left = F(c.left, 0)));
      var v = f({ top: l.top - c.top - g, left: l.left - c.left - m, width: l.width, height: l.height });
      if (((v.marginTop = 0), (v.marginLeft = 0), !a && s)) {
        var y = parseFloat(h.marginTop, 10),
          b = parseFloat(h.marginLeft, 10);
        (v.top -= g - y),
          (v.bottom -= g - y),
          (v.left -= m - b),
          (v.right -= m - b),
          (v.marginTop = y),
          (v.marginLeft = b);
      }
      return (a && !o ? n.contains(d) : n === d && 'BODY' !== d.nodeName) && (v = u(v, n)), v;
    }
    function m(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = t.ownerDocument.documentElement,
        i = g(t, n),
        r = F(n.clientWidth, window.innerWidth || 0),
        o = F(n.clientHeight, window.innerHeight || 0),
        a = e ? 0 : l(n),
        s = e ? 0 : l(n, 'left');
      return f({ top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o });
    }
    function v(t) {
      var i = t.nodeName;
      return 'BODY' !== i && 'HTML' !== i && ('fixed' === e(t, 'position') || v(n(t)));
    }
    function y(t) {
      if (!t || !t.parentElement || r()) return document.documentElement;
      for (var n = t.parentElement; n && 'none' === e(n, 'transform'); ) n = n.parentElement;
      return n || document.documentElement;
    }
    function b(t, e, r, o) {
      var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        l = { top: 0, left: 0 },
        u = a ? y(t) : s(t, e);
      if ('viewport' === o) l = m(u, a);
      else {
        var c;
        'scrollParent' === o
          ? 'BODY' === (c = i(n(e))).nodeName && (c = t.ownerDocument.documentElement)
          : (c = 'window' === o ? t.ownerDocument.documentElement : o);
        var d = g(c, u, a);
        if ('HTML' !== c.nodeName || v(u)) l = d;
        else {
          var f = h(),
            p = f.height,
            b = f.width;
          (l.top += d.top - d.marginTop),
            (l.bottom = p + d.top),
            (l.left += d.left - d.marginLeft),
            (l.right = b + d.left);
        }
      }
      return (l.left += r), (l.top += r), (l.right -= r), (l.bottom -= r), l;
    }
    function x(t, e, n, i, r) {
      var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf('auto')) return t;
      var a = b(n, i, o, r),
        s = {
          top: { width: a.width, height: e.top - a.top },
          right: { width: a.right - e.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - e.bottom },
          left: { width: e.left - a.left, height: a.height }
        },
        l = Object.keys(s)
          .map(function(t) {
            return G({ key: t }, s[t], {
              area: (function(t) {
                return t.width * t.height;
              })(s[t])
            });
          })
          .sort(function(t, e) {
            return e.area - t.area;
          }),
        u = l.filter(function(t) {
          return t.width >= n.clientWidth && t.height >= n.clientHeight;
        }),
        c = 0 < u.length ? u[0].key : l[0].key,
        d = t.split('-')[1];
      return c + (d ? '-' + d : '');
    }
    function _(t, e, n) {
      var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return g(n, i ? y(e) : s(e, n), i);
    }
    function w(t) {
      var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function C(t) {
      var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return t.replace(/left|right|bottom|top/g, function(t) {
        return e[t];
      });
    }
    function S(t, e, n) {
      n = n.split('-')[0];
      var i = w(t),
        r = { width: i.width, height: i.height },
        o = -1 !== ['right', 'left'].indexOf(n),
        a = o ? 'top' : 'left',
        s = o ? 'left' : 'top',
        l = o ? 'height' : 'width',
        u = o ? 'width' : 'height';
      return (r[a] = e[a] + e[l] / 2 - i[l] / 2), (r[s] = n === s ? e[s] - i[u] : e[C(s)]), r;
    }
    function T(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function k(e, n, i) {
      return (
        (void 0 === i
          ? e
          : e.slice(
              0,
              (function(t, e, n) {
                if (Array.prototype.findIndex)
                  return t.findIndex(function(t) {
                    return t[e] === n;
                  });
                var i = T(t, function(t) {
                  return t[e] === n;
                });
                return t.indexOf(i);
              })(e, 'name', i)
            )
        ).forEach(function(e) {
          e.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var i = e.function || e.fn;
          e.enabled &&
            t(i) &&
            ((n.offsets.popper = f(n.offsets.popper)), (n.offsets.reference = f(n.offsets.reference)), (n = i(n, e)));
        }),
        n
      );
    }
    function D(t, e) {
      return t.some(function(t) {
        return t.enabled && t.name === e;
      });
    }
    function A(t) {
      for (
        var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0;
        i < e.length;
        i++
      ) {
        var r = e[i],
          o = r ? '' + r + n : t;
        if (void 0 !== document.body.style[o]) return o;
      }
      return null;
    }
    function E(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }
    function I(t) {
      return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function M(t, e) {
      Object.keys(e).forEach(function(n) {
        var i = '';
        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && I(e[n]) && (i = 'px'),
          (t.style[n] = e[n] + i);
      });
    }
    function O(t, e, n) {
      var i = T(t, function(t) {
          return t.name === e;
        }),
        r =
          !!i &&
          t.some(function(t) {
            return t.name === n && t.enabled && t.order < i.order;
          });
      if (!r) {
        var o = '`' + e + '`';
        console.warn(
          '`' +
            n +
            '` modifier is required by ' +
            o +
            ' modifier in order to work, be sure to include it before ' +
            o +
            '!'
        );
      }
      return r;
    }
    function P(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = Q.indexOf(t),
        i = Q.slice(n + 1).concat(Q.slice(0, n));
      return e ? i.reverse() : i;
    }
    for (
      var N = Math.min,
        L = Math.round,
        R = Math.floor,
        F = Math.max,
        j = 'undefined' != typeof window && 'undefined' != typeof document,
        H = ['Edge', 'Trident', 'Firefox'],
        W = 0,
        B = 0;
      B < H.length;
      B += 1
    )
      if (j && 0 <= navigator.userAgent.indexOf(H[B])) {
        W = 1;
        break;
      }
    var $ =
        j && window.Promise
          ? function(t) {
              var e = !1;
              return function() {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function() {
                    (e = !1), t();
                  }));
              };
            }
          : function(t) {
              var e = !1;
              return function() {
                e ||
                  ((e = !0),
                  setTimeout(function() {
                    (e = !1), t();
                  }, W));
              };
            },
      q = j && !(!window.MSInputMethodContext || !document.documentMode),
      z = j && /MSIE 10/.test(navigator.userAgent),
      V = function(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      },
      U = (function() {
        function t(t, e) {
          for (var n, i = 0; i < e.length; i++)
            ((n = e[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      Y = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        );
      },
      G =
        Object.assign ||
        function(t) {
          for (var e, n = 1; n < arguments.length; n++)
            for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        },
      K = [
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
      Q = K.slice(3),
      X = (function() {
        function e(n, i) {
          var r = this,
            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          V(this, e),
            (this.scheduleUpdate = function() {
              return requestAnimationFrame(r.update);
            }),
            (this.update = $(this.update.bind(this))),
            (this.options = G({}, e.Defaults, o)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(G({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
              r.options.modifiers[t] = G({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {});
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function(t) {
                return G({ name: t }, r.options.modifiers[t]);
              })
              .sort(function(t, e) {
                return t.order - e.order;
              })),
            this.modifiers.forEach(function(e) {
              e.enabled && t(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
            }),
            this.update();
          var a = this.options.eventsEnabled;
          a && this.enableEventListeners(), (this.state.eventsEnabled = a);
        }
        return (
          U(e, [
            {
              key: 'update',
              value: function() {
                return function() {
                  if (!this.state.isDestroyed) {
                    var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                    (t.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed)),
                      (t.placement = x(
                        this.options.placement,
                        t.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                      )),
                      (t.originalPlacement = t.placement),
                      (t.positionFixed = this.options.positionFixed),
                      (t.offsets.popper = S(this.popper, t.offsets.reference, t.placement)),
                      (t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
                      (t = k(this.modifiers, t)),
                      this.state.isCreated
                        ? this.options.onUpdate(t)
                        : ((this.state.isCreated = !0), this.options.onCreate(t));
                  }
                }.call(this);
              }
            },
            {
              key: 'destroy',
              value: function() {
                return function() {
                  return (
                    (this.state.isDestroyed = !0),
                    D(this.modifiers, 'applyStyle') &&
                      (this.popper.removeAttribute('x-placement'),
                      (this.popper.style.position = ''),
                      (this.popper.style.top = ''),
                      (this.popper.style.left = ''),
                      (this.popper.style.right = ''),
                      (this.popper.style.bottom = ''),
                      (this.popper.style.willChange = ''),
                      (this.popper.style[A('transform')] = '')),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                  );
                }.call(this);
              }
            },
            {
              key: 'enableEventListeners',
              value: function() {
                return function() {
                  this.state.eventsEnabled ||
                    (this.state = (function(t, e, n, r) {
                      (n.updateBound = r), E(t).addEventListener('resize', n.updateBound, { passive: !0 });
                      var o = i(t);
                      return (
                        (function t(e, n, r, o) {
                          var a = 'BODY' === e.nodeName,
                            s = a ? e.ownerDocument.defaultView : e;
                          s.addEventListener(n, r, { passive: !0 }), a || t(i(s.parentNode), n, r, o), o.push(s);
                        })(o, 'scroll', n.updateBound, n.scrollParents),
                        (n.scrollElement = o),
                        (n.eventsEnabled = !0),
                        n
                      );
                    })(this.reference, 0, this.state, this.scheduleUpdate));
                }.call(this);
              }
            },
            {
              key: 'disableEventListeners',
              value: function() {
                return function() {
                  this.state.eventsEnabled &&
                    (cancelAnimationFrame(this.scheduleUpdate),
                    (this.state = (function(t, e) {
                      return (
                        E(t).removeEventListener('resize', e.updateBound),
                        e.scrollParents.forEach(function(t) {
                          t.removeEventListener('scroll', e.updateBound);
                        }),
                        (e.updateBound = null),
                        (e.scrollParents = []),
                        (e.scrollElement = null),
                        (e.eventsEnabled = !1),
                        e
                      );
                    })(this.reference, this.state)));
                }.call(this);
              }
            }
          ]),
          e
        );
      })();
    return (
      (X.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
      (X.placements = K),
      (X.Defaults = {
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
            fn: function(t) {
              var e = t.placement,
                n = e.split('-')[0],
                i = e.split('-')[1];
              if (i) {
                var r = t.offsets,
                  o = r.reference,
                  a = r.popper,
                  s = -1 !== ['bottom', 'top'].indexOf(n),
                  l = s ? 'left' : 'top',
                  u = s ? 'width' : 'height',
                  c = { start: Y({}, l, o[l]), end: Y({}, l, o[l] + o[u] - a[u]) };
                t.offsets.popper = G({}, a, c[i]);
              }
              return t;
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function(t, e) {
              var n,
                i = e.offset,
                r = t.offsets,
                o = r.popper,
                a = r.reference,
                s = t.placement.split('-')[0];
              return (
                (n = I(+i)
                  ? [+i, 0]
                  : (function(t, e, n, i) {
                      var r = [0, 0],
                        o = -1 !== ['right', 'left'].indexOf(i),
                        a = t.split(/(\+|\-)/).map(function(t) {
                          return t.trim();
                        }),
                        s = a.indexOf(
                          T(a, function(t) {
                            return -1 !== t.search(/,|\s/);
                          })
                        );
                      a[s] &&
                        -1 === a[s].indexOf(',') &&
                        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                      var l = /\s*,\s*|\s+/,
                        u =
                          -1 === s
                            ? [a]
                            : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
                      return (
                        (u = u.map(function(t, i) {
                          var r = (1 === i ? !o : o) ? 'height' : 'width',
                            a = !1;
                          return t
                            .reduce(function(t, e) {
                              return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e)
                                ? ((t[t.length - 1] = e), (a = !0), t)
                                : a
                                ? ((t[t.length - 1] += e), (a = !1), t)
                                : t.concat(e);
                            }, [])
                            .map(function(t) {
                              return (function(t, e, n, i) {
                                var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                  o = +r[1],
                                  a = r[2];
                                if (!o) return t;
                                if (0 === a.indexOf('%')) {
                                  var s;
                                  switch (a) {
                                    case '%p':
                                      s = n;
                                      break;
                                    case '%':
                                    case '%r':
                                    default:
                                      s = i;
                                  }
                                  return (f(s)[e] / 100) * o;
                                }
                                return 'vh' === a || 'vw' === a
                                  ? (('vh' === a
                                      ? F(document.documentElement.clientHeight, window.innerHeight || 0)
                                      : F(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                      100) *
                                      o
                                  : o;
                              })(t, r, e, n);
                            });
                        })).forEach(function(t, e) {
                          t.forEach(function(n, i) {
                            I(n) && (r[e] += n * ('-' === t[i - 1] ? -1 : 1));
                          });
                        }),
                        r
                      );
                    })(i, o, a, s)),
                'left' === s
                  ? ((o.top += n[0]), (o.left -= n[1]))
                  : 'right' === s
                  ? ((o.top += n[0]), (o.left += n[1]))
                  : 'top' === s
                  ? ((o.left += n[0]), (o.top -= n[1]))
                  : 'bottom' === s && ((o.left += n[0]), (o.top += n[1])),
                (t.popper = o),
                t
              );
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function(t, e) {
              var n = e.boundariesElement || o(t.instance.popper);
              t.instance.reference === n && (n = o(n));
              var i = A('transform'),
                r = t.instance.popper.style,
                a = r.top,
                s = r.left,
                l = r[i];
              (r.top = ''), (r.left = ''), (r[i] = '');
              var u = b(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
              (r.top = a), (r.left = s), (r[i] = l), (e.boundaries = u);
              var c = t.offsets.popper,
                d = {
                  primary: function(t) {
                    var n = c[t];
                    return c[t] < u[t] && !e.escapeWithReference && (n = F(c[t], u[t])), Y({}, t, n);
                  },
                  secondary: function(t) {
                    var n = 'right' === t ? 'left' : 'top',
                      i = c[n];
                    return (
                      c[t] > u[t] &&
                        !e.escapeWithReference &&
                        (i = N(c[n], u[t] - ('right' === t ? c.width : c.height))),
                      Y({}, n, i)
                    );
                  }
                };
              return (
                e.priority.forEach(function(t) {
                  var e = -1 === ['left', 'top'].indexOf(t) ? 'secondary' : 'primary';
                  c = G({}, c, d[e](t));
                }),
                (t.offsets.popper = c),
                t
              );
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent'
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function(t) {
              var e = t.offsets,
                n = e.popper,
                i = e.reference,
                r = t.placement.split('-')[0],
                o = R,
                a = -1 !== ['top', 'bottom'].indexOf(r),
                s = a ? 'right' : 'bottom',
                l = a ? 'left' : 'top',
                u = a ? 'width' : 'height';
              return (
                n[s] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]),
                n[l] > o(i[s]) && (t.offsets.popper[l] = o(i[s])),
                t
              );
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function(t, n) {
              var i;
              if (!O(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
              var r = n.element;
              if ('string' == typeof r) {
                if (!(r = t.instance.popper.querySelector(r))) return t;
              } else if (!t.instance.popper.contains(r))
                return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;
              var o = t.placement.split('-')[0],
                a = t.offsets,
                s = a.popper,
                l = a.reference,
                u = -1 !== ['left', 'right'].indexOf(o),
                c = u ? 'height' : 'width',
                d = u ? 'Top' : 'Left',
                h = d.toLowerCase(),
                p = u ? 'left' : 'top',
                g = u ? 'bottom' : 'right',
                m = w(r)[c];
              l[g] - m < s[h] && (t.offsets.popper[h] -= s[h] - (l[g] - m)),
                l[h] + m > s[g] && (t.offsets.popper[h] += l[h] + m - s[g]),
                (t.offsets.popper = f(t.offsets.popper));
              var v = l[h] + l[c] / 2 - m / 2,
                y = e(t.instance.popper),
                b = parseFloat(y['margin' + d], 10),
                x = parseFloat(y['border' + d + 'Width'], 10),
                _ = v - t.offsets.popper[h] - b - x;
              return (
                (_ = F(N(s[c] - m, _), 0)),
                (t.arrowElement = r),
                (t.offsets.arrow = (Y((i = {}), h, L(_)), Y(i, p, ''), i)),
                t
              );
            },
            element: '[x-arrow]'
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function(t, e) {
              if (D(t.instance.modifiers, 'inner')) return t;
              if (t.flipped && t.placement === t.originalPlacement) return t;
              var n = b(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                i = t.placement.split('-')[0],
                r = C(i),
                o = t.placement.split('-')[1] || '',
                a = [];
              switch (e.behavior) {
                case 'flip':
                  a = [i, r];
                  break;
                case 'clockwise':
                  a = P(i);
                  break;
                case 'counterclockwise':
                  a = P(i, !0);
                  break;
                default:
                  a = e.behavior;
              }
              return (
                a.forEach(function(s, l) {
                  if (i !== s || a.length === l + 1) return t;
                  (i = t.placement.split('-')[0]), (r = C(i));
                  var u = t.offsets.popper,
                    c = t.offsets.reference,
                    d = R,
                    h =
                      ('left' === i && d(u.right) > d(c.left)) ||
                      ('right' === i && d(u.left) < d(c.right)) ||
                      ('top' === i && d(u.bottom) > d(c.top)) ||
                      ('bottom' === i && d(u.top) < d(c.bottom)),
                    f = d(u.left) < d(n.left),
                    p = d(u.right) > d(n.right),
                    g = d(u.top) < d(n.top),
                    m = d(u.bottom) > d(n.bottom),
                    v = ('left' === i && f) || ('right' === i && p) || ('top' === i && g) || ('bottom' === i && m),
                    y = -1 !== ['top', 'bottom'].indexOf(i),
                    b =
                      !!e.flipVariations &&
                      ((y && 'start' === o && f) ||
                        (y && 'end' === o && p) ||
                        (!y && 'start' === o && g) ||
                        (!y && 'end' === o && m));
                  (h || v || b) &&
                    ((t.flipped = !0),
                    (h || v) && (i = a[l + 1]),
                    b && (o = 'end' === o ? 'start' : 'start' === o ? 'end' : o),
                    (t.placement = i + (o ? '-' + o : '')),
                    (t.offsets.popper = G(
                      {},
                      t.offsets.popper,
                      S(t.instance.popper, t.offsets.reference, t.placement)
                    )),
                    (t = k(t.instance.modifiers, t, 'flip')));
                }),
                t
              );
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport'
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function(t) {
              var e = t.placement,
                n = e.split('-')[0],
                i = t.offsets,
                r = i.popper,
                o = i.reference,
                a = -1 !== ['left', 'right'].indexOf(n),
                s = -1 === ['top', 'left'].indexOf(n);
              return (
                (r[a ? 'left' : 'top'] = o[n] - (s ? r[a ? 'width' : 'height'] : 0)),
                (t.placement = C(e)),
                (t.offsets.popper = f(r)),
                t
              );
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function(t) {
              if (!O(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
              var e = t.offsets.reference,
                n = T(t.instance.modifiers, function(t) {
                  return 'preventOverflow' === t.name;
                }).boundaries;
              if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
              }
              return t;
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function(t, e) {
              var n = e.x,
                i = e.y,
                r = t.offsets.popper,
                a = T(t.instance.modifiers, function(t) {
                  return 'applyStyle' === t.name;
                }).gpuAcceleration;
              void 0 !== a &&
                console.warn(
                  'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                );
              var s,
                l,
                u = void 0 === a ? e.gpuAcceleration : a,
                c = p(o(t.instance.popper)),
                d = { position: r.position },
                h = { left: R(r.left), top: L(r.top), bottom: L(r.bottom), right: R(r.right) },
                f = 'bottom' === n ? 'top' : 'bottom',
                g = 'right' === i ? 'left' : 'right',
                m = A('transform');
              if (
                ((l = 'bottom' == f ? -c.height + h.bottom : h.top),
                (s = 'right' == g ? -c.width + h.right : h.left),
                u && m)
              )
                (d[m] = 'translate3d(' + s + 'px, ' + l + 'px, 0)'),
                  (d[f] = 0),
                  (d[g] = 0),
                  (d.willChange = 'transform');
              else {
                var v = 'right' == g ? -1 : 1;
                (d[f] = l * ('bottom' == f ? -1 : 1)), (d[g] = s * v), (d.willChange = f + ', ' + g);
              }
              return (
                (t.attributes = G({}, { 'x-placement': t.placement }, t.attributes)),
                (t.styles = G({}, d, t.styles)),
                (t.arrowStyles = G({}, t.offsets.arrow, t.arrowStyles)),
                t
              );
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right'
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function(t) {
              return (
                M(t.instance.popper, t.styles),
                (function(t, e) {
                  Object.keys(e).forEach(function(n) {
                    !1 === e[n] ? t.removeAttribute(n) : t.setAttribute(n, e[n]);
                  });
                })(t.instance.popper, t.attributes),
                t.arrowElement && Object.keys(t.arrowStyles).length && M(t.arrowElement, t.arrowStyles),
                t
              );
            },
            onLoad: function(t, e, n, i, r) {
              var o = _(r, e, t, n.positionFixed),
                a = x(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
              return e.setAttribute('x-placement', a), M(e, { position: n.positionFixed ? 'fixed' : 'absolute' }), n;
            },
            gpuAcceleration: void 0
          }
        }
      }),
      X
    );
  }),
  (function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? e(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], e)
      : e((t.bootstrap = {}), t.jQuery, t.Popper);
  })(this, function(t, e, n) {
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
    function r(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          i.forEach(function(e) {
            var i, r, o;
            (o = n[(r = e)]),
              r in (i = t)
                ? Object.defineProperty(i, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                : (i[r] = o);
          });
      }
      return t;
    }
    (e = e && e.hasOwnProperty('default') ? e.default : e), (n = n && n.hasOwnProperty('default') ? n.default : n);
    var a,
      s,
      l,
      u,
      c,
      d,
      h,
      f,
      p,
      g,
      m,
      v,
      y,
      b,
      x,
      _,
      w,
      C,
      S,
      T,
      k,
      D,
      A,
      E,
      I,
      M,
      O,
      P,
      N,
      L,
      R,
      F,
      j,
      H,
      W,
      B,
      $,
      q,
      z,
      V,
      U,
      Y,
      G,
      K,
      Q,
      X,
      J,
      Z,
      tt,
      et,
      nt,
      it,
      rt,
      ot,
      at,
      st,
      lt,
      ut,
      ct,
      dt,
      ht,
      ft,
      pt,
      gt,
      mt,
      vt,
      yt,
      bt,
      xt,
      _t,
      wt,
      Ct,
      St,
      Tt,
      kt,
      Dt,
      At,
      Et,
      It,
      Mt,
      Ot,
      Pt,
      Nt,
      Lt,
      Rt,
      Ft,
      jt,
      Ht,
      Wt,
      Bt,
      $t,
      qt,
      zt,
      Vt,
      Ut,
      Yt,
      Gt,
      Kt,
      Qt,
      Xt,
      Jt,
      Zt,
      te,
      ee,
      ne,
      ie,
      re,
      oe,
      ae,
      se,
      le,
      ue,
      ce,
      de,
      he,
      fe,
      pe,
      ge,
      me,
      ve,
      ye,
      be,
      xe,
      _e,
      we,
      Ce,
      Se,
      Te,
      ke,
      De,
      Ae,
      Ee,
      Ie,
      Me,
      Oe,
      Pe,
      Ne,
      Le,
      Re,
      Fe,
      je,
      He,
      We,
      Be,
      $e,
      qe,
      ze,
      Ve,
      Ue,
      Ye,
      Ge,
      Ke,
      Qe,
      Xe,
      Je,
      Ze,
      tn,
      en,
      nn,
      rn,
      on,
      an,
      sn,
      ln,
      un,
      cn,
      dn,
      hn = (function(t) {
        var e = 'transitionend',
          n = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function(t) {
              for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
              return t;
            },
            getSelectorFromElement: function(e) {
              var n = e.getAttribute('data-target');
              (n && '#' !== n) || (n = e.getAttribute('href') || '');
              try {
                return 0 < t(document).find(n).length ? n : null;
              } catch (e) {
                return null;
              }
            },
            getTransitionDurationFromElement: function(e) {
              if (!e) return 0;
              var n = t(e).css('transition-duration');
              return parseFloat(n) ? ((n = n.split(',')[0]), 1e3 * parseFloat(n)) : 0;
            },
            reflow: function(t) {
              return t.offsetHeight;
            },
            triggerTransitionEnd: function(n) {
              t(n).trigger(e);
            },
            supportsTransitionEnd: function() {
              return Boolean(e);
            },
            isElement: function(t) {
              return (t[0] || t).nodeType;
            },
            typeCheckConfig: function(t, e, i) {
              for (var r in i)
                if (Object.prototype.hasOwnProperty.call(i, r)) {
                  var o = i[r],
                    a = e[r],
                    s =
                      a && n.isElement(a)
                        ? 'element'
                        : {}.toString
                            .call(a)
                            .match(/\s([a-z]+)/i)[1]
                            .toLowerCase();
                  if (!new RegExp(o).test(s))
                    throw new Error(
                      t.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".'
                    );
                }
            }
          };
        return (
          (t.fn.emulateTransitionEnd = function(e) {
            var i = this,
              r = !1;
            return (
              t(this).one(n.TRANSITION_END, function() {
                r = !0;
              }),
              setTimeout(function() {
                r || n.triggerTransitionEnd(i);
              }, e),
              this
            );
          }),
          (t.event.special[n.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(e) {
              if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
          }),
          n
        );
      })(e),
      fn = ((u = '.' + (l = 'bs.alert')),
      (c = (a = e).fn[(s = 'alert')]),
      (d = { CLOSE: 'close' + u, CLOSED: 'closed' + u, CLICK_DATA_API: 'click' + u + '.data-api' }),
      (h = 'alert'),
      (f = 'fade'),
      (p = 'show'),
      (g = (function() {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
          }),
          (e.dispose = function() {
            a.removeData(this._element, l), (this._element = null);
          }),
          (e._getRootElement = function(t) {
            var e = hn.getSelectorFromElement(t),
              n = !1;
            return e && (n = a(e)[0]), n || (n = a(t).closest('.' + h)[0]), n;
          }),
          (e._triggerCloseEvent = function(t) {
            var e = a.Event(d.CLOSE);
            return a(t).trigger(e), e;
          }),
          (e._removeElement = function(t) {
            var e = this;
            if ((a(t).removeClass(p), a(t).hasClass(f))) {
              var n = hn.getTransitionDurationFromElement(t);
              a(t)
                .one(hn.TRANSITION_END, function(n) {
                  return e._destroyElement(t, n);
                })
                .emulateTransitionEnd(n);
            } else this._destroyElement(t);
          }),
          (e._destroyElement = function(t) {
            a(t)
              .detach()
              .trigger(d.CLOSED)
              .remove();
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = a(this),
                i = n.data(l);
              i || ((i = new t(this)), n.data(l, i)), 'close' === e && i[e](this);
            });
          }),
          (t._handleDismiss = function(t) {
            return function(e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            }
          ]),
          t
        );
      })()),
      a(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())),
      (a.fn[s] = g._jQueryInterface),
      (a.fn[s].Constructor = g),
      (a.fn[s].noConflict = function() {
        return (a.fn[s] = c), g._jQueryInterface;
      }),
      g),
      pn = ((b = '.' + (y = 'bs.button')),
      (_ = (m = e).fn[(v = 'button')]),
      (w = 'active'),
      (S = '[data-toggle^="button"]'),
      (T = '[data-toggle="buttons"]'),
      (k = 'input'),
      (D = '.active'),
      (A = '.btn'),
      (E = {
        CLICK_DATA_API: 'click' + b + (x = '.data-api'),
        FOCUS_BLUR_DATA_API: (C = 'focus') + b + x + ' blur' + b + x
      }),
      (I = (function() {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.toggle = function() {
            var t = !0,
              e = !0,
              n = m(this._element).closest(T)[0];
            if (n) {
              var i = m(this._element).find(k)[0];
              if (i) {
                if ('radio' === i.type)
                  if (i.checked && m(this._element).hasClass(w)) t = !1;
                  else {
                    var r = m(n).find(D)[0];
                    r && m(r).removeClass(w);
                  }
                if (t) {
                  if (
                    i.hasAttribute('disabled') ||
                    n.hasAttribute('disabled') ||
                    i.classList.contains('disabled') ||
                    n.classList.contains('disabled')
                  )
                    return;
                  (i.checked = !m(this._element).hasClass(w)), m(i).trigger('change');
                }
                i.focus(), (e = !1);
              }
            }
            e && this._element.setAttribute('aria-pressed', !m(this._element).hasClass(w)),
              t && m(this._element).toggleClass(w);
          }),
          (e.dispose = function() {
            m.removeData(this._element, y), (this._element = null);
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = m(this).data(y);
              n || ((n = new t(this)), m(this).data(y, n)), 'toggle' === e && n[e]();
            });
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            }
          ]),
          t
        );
      })()),
      m(document)
        .on(E.CLICK_DATA_API, S, function(t) {
          t.preventDefault();
          var e = t.target;
          m(e).hasClass('btn') || (e = m(e).closest(A)), I._jQueryInterface.call(m(e), 'toggle');
        })
        .on(E.FOCUS_BLUR_DATA_API, S, function(t) {
          var e = m(t.target).closest(A)[0];
          m(e).toggleClass(C, /^focus(in)?$/.test(t.type));
        }),
      (m.fn[v] = I._jQueryInterface),
      (m.fn[v].Constructor = I),
      (m.fn[v].noConflict = function() {
        return (m.fn[v] = _), I._jQueryInterface;
      }),
      I),
      gn = ((N = '.' + (P = 'bs.carousel')),
      (R = (M = e).fn[(O = 'carousel')]),
      (F = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0 }),
      (j = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean'
      }),
      (H = 'next'),
      (W = 'prev'),
      (B = 'left'),
      ($ = 'right'),
      (q = {
        SLIDE: 'slide' + N,
        SLID: 'slid' + N,
        KEYDOWN: 'keydown' + N,
        MOUSEENTER: 'mouseenter' + N,
        MOUSELEAVE: 'mouseleave' + N,
        TOUCHEND: 'touchend' + N,
        LOAD_DATA_API: 'load' + N + (L = '.data-api'),
        CLICK_DATA_API: 'click' + N + L
      }),
      (z = 'carousel'),
      (V = 'active'),
      (U = 'slide'),
      (Y = 'carousel-item-right'),
      (G = 'carousel-item-left'),
      (K = 'carousel-item-next'),
      (Q = 'carousel-item-prev'),
      (X = {
        ACTIVE: '.active',
        ACTIVE_ITEM: '.active.carousel-item',
        ITEM: '.carousel-item',
        NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
        INDICATORS: '.carousel-indicators',
        DATA_SLIDE: '[data-slide], [data-slide-to]',
        DATA_RIDE: '[data-ride="carousel"]'
      }),
      (J = (function() {
        function t(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = M(t)[0]),
            (this._indicatorsElement = M(this._element).find(X.INDICATORS)[0]),
            this._addEventListeners();
        }
        var e = t.prototype;
        return (
          (e.next = function() {
            this._isSliding || this._slide(H);
          }),
          (e.nextWhenVisible = function() {
            !document.hidden &&
              M(this._element).is(':visible') &&
              'hidden' !== M(this._element).css('visibility') &&
              this.next();
          }),
          (e.prev = function() {
            this._isSliding || this._slide(W);
          }),
          (e.pause = function(t) {
            t || (this._isPaused = !0),
              M(this._element).find(X.NEXT_PREV)[0] && (hn.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (e.cycle = function(t) {
            t || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                  this._config.interval
                ));
          }),
          (e.to = function(t) {
            var e = this;
            this._activeElement = M(this._element).find(X.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                M(this._element).one(q.SLID, function() {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                this._slide(n < t ? H : W, this._items[t]);
              }
          }),
          (e.dispose = function() {
            M(this._element).off(N),
              M.removeData(this._element, P),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (e._getConfig = function(t) {
            return (t = o({}, F, t)), hn.typeCheckConfig(O, t, j), t;
          }),
          (e._addEventListeners = function() {
            var t = this;
            this._config.keyboard &&
              M(this._element).on(q.KEYDOWN, function(e) {
                return t._keydown(e);
              }),
              'hover' === this._config.pause &&
                (M(this._element)
                  .on(q.MOUSEENTER, function(e) {
                    return t.pause(e);
                  })
                  .on(q.MOUSELEAVE, function(e) {
                    return t.cycle(e);
                  }),
                'ontouchstart' in document.documentElement &&
                  M(this._element).on(q.TOUCHEND, function() {
                    t.pause(),
                      t.touchTimeout && clearTimeout(t.touchTimeout),
                      (t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e);
                      }, 500 + t._config.interval));
                  }));
          }),
          (e._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (e._getItemIndex = function(t) {
            return (
              (this._items = M.makeArray(
                M(t)
                  .parent()
                  .find(X.ITEM)
              )),
              this._items.indexOf(t)
            );
          }),
          (e._getItemByDirection = function(t, e) {
            var n = t === H,
              i = t === W,
              r = this._getItemIndex(e);
            if (((i && 0 === r) || (n && r === this._items.length - 1)) && !this._config.wrap) return e;
            var o = (r + (t === W ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o];
          }),
          (e._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(M(this._element).find(X.ACTIVE_ITEM)[0]),
              r = M.Event(q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
            return M(this._element).trigger(r), r;
          }),
          (e._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
              M(this._indicatorsElement)
                .find(X.ACTIVE)
                .removeClass(V);
              var e = this._indicatorsElement.children[this._getItemIndex(t)];
              e && M(e).addClass(V);
            }
          }),
          (e._slide = function(t, e) {
            var n,
              i,
              r,
              o = this,
              a = M(this._element).find(X.ACTIVE_ITEM)[0],
              s = this._getItemIndex(a),
              l = e || (a && this._getItemByDirection(t, a)),
              u = this._getItemIndex(l),
              c = Boolean(this._interval);
            if ((t === H ? ((n = G), (i = K), (r = B)) : ((n = Y), (i = Q), (r = $)), l && M(l).hasClass(V)))
              this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && a && l) {
              (this._isSliding = !0), c && this.pause(), this._setActiveIndicatorElement(l);
              var d = M.Event(q.SLID, { relatedTarget: l, direction: r, from: s, to: u });
              if (M(this._element).hasClass(U)) {
                M(l).addClass(i), hn.reflow(l), M(a).addClass(n), M(l).addClass(n);
                var h = hn.getTransitionDurationFromElement(a);
                M(a)
                  .one(hn.TRANSITION_END, function() {
                    M(l)
                      .removeClass(n + ' ' + i)
                      .addClass(V),
                      M(a).removeClass(V + ' ' + i + ' ' + n),
                      (o._isSliding = !1),
                      setTimeout(function() {
                        return M(o._element).trigger(d);
                      }, 0);
                  })
                  .emulateTransitionEnd(h);
              } else M(a).removeClass(V), M(l).addClass(V), (this._isSliding = !1), M(this._element).trigger(d);
              c && this.cycle();
            }
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = M(this).data(P),
                i = o({}, F, M(this).data());
              'object' == typeof e && (i = o({}, i, e));
              var r = 'string' == typeof e ? e : i.slide;
              if ((n || ((n = new t(this, i)), M(this).data(P, n)), 'number' == typeof e)) n.to(e);
              else if ('string' == typeof r) {
                if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                n[r]();
              } else i.interval && (n.pause(), n.cycle());
            });
          }),
          (t._dataApiClickHandler = function(e) {
            var n = hn.getSelectorFromElement(this);
            if (n) {
              var i = M(n)[0];
              if (i && M(i).hasClass(z)) {
                var r = o({}, M(i).data(), M(this).data()),
                  a = this.getAttribute('data-slide-to');
                a && (r.interval = !1),
                  t._jQueryInterface.call(M(i), r),
                  a &&
                    M(i)
                      .data(P)
                      .to(a),
                  e.preventDefault();
              }
            }
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return F;
              }
            }
          ]),
          t
        );
      })()),
      M(document).on(q.CLICK_DATA_API, X.DATA_SLIDE, J._dataApiClickHandler),
      M(window).on(q.LOAD_DATA_API, function() {
        M(X.DATA_RIDE).each(function() {
          var t = M(this);
          J._jQueryInterface.call(t, t.data());
        });
      }),
      (M.fn[O] = J._jQueryInterface),
      (M.fn[O].Constructor = J),
      (M.fn[O].noConflict = function() {
        return (M.fn[O] = R), J._jQueryInterface;
      }),
      J),
      mn = ((nt = '.' + (et = 'bs.collapse')),
      (it = (Z = e).fn[(tt = 'collapse')]),
      (rt = { toggle: !0, parent: '' }),
      (ot = { toggle: 'boolean', parent: '(string|element)' }),
      (at = {
        SHOW: 'show' + nt,
        SHOWN: 'shown' + nt,
        HIDE: 'hide' + nt,
        HIDDEN: 'hidden' + nt,
        CLICK_DATA_API: 'click' + nt + '.data-api'
      }),
      (st = 'show'),
      (lt = 'collapse'),
      (ut = 'collapsing'),
      (ct = 'collapsed'),
      (dt = 'width'),
      (ht = { ACTIVES: '.show, .collapsing', DATA_TOGGLE: '[data-toggle="collapse"]' }),
      (ft = (function() {
        function t(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = Z.makeArray(
              Z('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')
            ));
          for (var n = Z(ht.DATA_TOGGLE), i = 0; i < n.length; i++) {
            var r = n[i],
              o = hn.getSelectorFromElement(r);
            null !== o && 0 < Z(o).filter(t).length && ((this._selector = o), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var e = t.prototype;
        return (
          (e.toggle = function() {
            Z(this._element).hasClass(st) ? this.hide() : this.show();
          }),
          (e.show = function() {
            var e,
              n,
              i = this;
            if (
              !(
                this._isTransitioning ||
                Z(this._element).hasClass(st) ||
                (this._parent &&
                  0 ===
                    (e = Z.makeArray(
                      Z(this._parent)
                        .find(ht.ACTIVES)
                        .filter('[data-parent="' + this._config.parent + '"]')
                    )).length &&
                  (e = null),
                e &&
                  (n = Z(e)
                    .not(this._selector)
                    .data(et)) &&
                  n._isTransitioning)
              )
            ) {
              var r = Z.Event(at.SHOW);
              if ((Z(this._element).trigger(r), !r.isDefaultPrevented())) {
                e && (t._jQueryInterface.call(Z(e).not(this._selector), 'hide'), n || Z(e).data(et, null));
                var o = this._getDimension();
                Z(this._element)
                  .removeClass(lt)
                  .addClass(ut),
                  (this._element.style[o] = 0) < this._triggerArray.length &&
                    Z(this._triggerArray)
                      .removeClass(ct)
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var a = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
                  s = hn.getTransitionDurationFromElement(this._element);
                Z(this._element)
                  .one(hn.TRANSITION_END, function() {
                    Z(i._element)
                      .removeClass(ut)
                      .addClass(lt)
                      .addClass(st),
                      (i._element.style[o] = ''),
                      i.setTransitioning(!1),
                      Z(i._element).trigger(at.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[o] = this._element[a] + 'px');
              }
            }
          }),
          (e.hide = function() {
            var t = this;
            if (!this._isTransitioning && Z(this._element).hasClass(st)) {
              var e = Z.Event(at.HIDE);
              if ((Z(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                if (
                  ((this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px'),
                  hn.reflow(this._element),
                  Z(this._element)
                    .addClass(ut)
                    .removeClass(lt)
                    .removeClass(st),
                  0 < this._triggerArray.length)
                )
                  for (var i = 0; i < this._triggerArray.length; i++) {
                    var r = this._triggerArray[i],
                      o = hn.getSelectorFromElement(r);
                    null !== o &&
                      (Z(o).hasClass(st) ||
                        Z(r)
                          .addClass(ct)
                          .attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[n] = '');
                var a = hn.getTransitionDurationFromElement(this._element);
                Z(this._element)
                  .one(hn.TRANSITION_END, function() {
                    t.setTransitioning(!1),
                      Z(t._element)
                        .removeClass(ut)
                        .addClass(lt)
                        .trigger(at.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (e.setTransitioning = function(t) {
            this._isTransitioning = t;
          }),
          (e.dispose = function() {
            Z.removeData(this._element, et),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (e._getConfig = function(t) {
            return ((t = o({}, rt, t)).toggle = Boolean(t.toggle)), hn.typeCheckConfig(tt, t, ot), t;
          }),
          (e._getDimension = function() {
            return Z(this._element).hasClass(dt) ? dt : 'height';
          }),
          (e._getParent = function() {
            var e = this,
              n = null;
            hn.isElement(this._config.parent)
              ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
              : (n = Z(this._config.parent)[0]);
            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return (
              Z(n)
                .find(i)
                .each(function(n, i) {
                  e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
                }),
              n
            );
          }),
          (e._addAriaAndCollapsedClass = function(t, e) {
            if (t) {
              var n = Z(t).hasClass(st);
              0 < e.length &&
                Z(e)
                  .toggleClass(ct, !n)
                  .attr('aria-expanded', n);
            }
          }),
          (t._getTargetFromElement = function(t) {
            var e = hn.getSelectorFromElement(t);
            return e ? Z(e)[0] : null;
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = Z(this),
                i = n.data(et),
                r = o({}, rt, n.data(), 'object' == typeof e && e ? e : {});
              if (
                (!i && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
                i || ((i = new t(this, r)), n.data(et, i)),
                'string' == typeof e)
              ) {
                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return rt;
              }
            }
          ]),
          t
        );
      })()),
      Z(document).on(at.CLICK_DATA_API, ht.DATA_TOGGLE, function(t) {
        'A' === t.currentTarget.tagName && t.preventDefault();
        var e = Z(this),
          n = hn.getSelectorFromElement(this);
        Z(n).each(function() {
          var t = Z(this),
            n = t.data(et) ? 'toggle' : e.data();
          ft._jQueryInterface.call(t, n);
        });
      }),
      (Z.fn[tt] = ft._jQueryInterface),
      (Z.fn[tt].Constructor = ft),
      (Z.fn[tt].noConflict = function() {
        return (Z.fn[tt] = it), ft._jQueryInterface;
      }),
      ft),
      vn = ((vt = '.' + (mt = 'bs.dropdown')),
      (yt = '.data-api'),
      (bt = (pt = e).fn[(gt = 'dropdown')]),
      (xt = new RegExp('38|40|27')),
      (_t = {
        HIDE: 'hide' + vt,
        HIDDEN: 'hidden' + vt,
        SHOW: 'show' + vt,
        SHOWN: 'shown' + vt,
        CLICK: 'click' + vt,
        CLICK_DATA_API: 'click' + vt + yt,
        KEYDOWN_DATA_API: 'keydown' + vt + yt,
        KEYUP_DATA_API: 'keyup' + vt + yt
      }),
      (wt = 'disabled'),
      (Ct = 'show'),
      (St = 'dropright'),
      (Tt = 'dropleft'),
      (kt = 'dropdown-menu-right'),
      (Dt = 'position-static'),
      (At = '[data-toggle="dropdown"]'),
      (Et = '.dropdown form'),
      (It = '.dropdown-menu'),
      (Mt = '.navbar-nav'),
      (Ot = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'),
      (Pt = 'top-start'),
      (Nt = 'top-end'),
      (Lt = 'bottom-start'),
      (Rt = 'bottom-end'),
      (Ft = 'right-start'),
      (jt = 'left-start'),
      (Ht = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' }),
      (Wt = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string'
      }),
      (Bt = (function() {
        function t(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = t.prototype;
        return (
          (e.toggle = function() {
            if (!this._element.disabled && !pt(this._element).hasClass(wt)) {
              var e = t._getParentFromElement(this._element),
                i = pt(this._menu).hasClass(Ct);
              if ((t._clearMenus(), !i)) {
                var r = { relatedTarget: this._element },
                  o = pt.Event(_t.SHOW, r);
                if ((pt(e).trigger(o), !o.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === n)
                      throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
                    var a = this._element;
                    'parent' === this._config.reference
                      ? (a = e)
                      : hn.isElement(this._config.reference) &&
                        ((a = this._config.reference),
                        void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                      'scrollParent' !== this._config.boundary && pt(e).addClass(Dt),
                      (this._popper = new n(a, this._menu, this._getPopperConfig()));
                  }
                  'ontouchstart' in document.documentElement &&
                    0 === pt(e).closest(Mt).length &&
                    pt(document.body)
                      .children()
                      .on('mouseover', null, pt.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    pt(this._menu).toggleClass(Ct),
                    pt(e)
                      .toggleClass(Ct)
                      .trigger(pt.Event(_t.SHOWN, r));
                }
              }
            }
          }),
          (e.dispose = function() {
            pt.removeData(this._element, mt),
              pt(this._element).off(vt),
              (this._element = null),
              (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function() {
            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function() {
            var t = this;
            pt(this._element).on(_t.CLICK, function(e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function(t) {
            return (
              (t = o({}, this.constructor.Default, pt(this._element).data(), t)),
              hn.typeCheckConfig(gt, t, this.constructor.DefaultType),
              t
            );
          }),
          (e._getMenuElement = function() {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element);
              this._menu = pt(e).find(It)[0];
            }
            return this._menu;
          }),
          (e._getPlacement = function() {
            var t = pt(this._element).parent(),
              e = Lt;
            return (
              t.hasClass('dropup')
                ? ((e = Pt), pt(this._menu).hasClass(kt) && (e = Nt))
                : t.hasClass(St)
                ? (e = Ft)
                : t.hasClass(Tt)
                ? (e = jt)
                : pt(this._menu).hasClass(kt) && (e = Rt),
              e
            );
          }),
          (e._detectNavbar = function() {
            return 0 < pt(this._element).closest('.navbar').length;
          }),
          (e._getPopperConfig = function() {
            var t = this,
              e = {};
            'function' == typeof this._config.offset
              ? (e.fn = function(e) {
                  return (e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {})), e;
                })
              : (e.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: e,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary }
              }
            };
            return 'static' === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = pt(this).data(mt);
              if (
                (n || ((n = new t(this, 'object' == typeof e ? e : null)), pt(this).data(mt, n)), 'string' == typeof e)
              ) {
                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          (t._clearMenus = function(e) {
            if (!e || (3 !== e.which && ('keyup' !== e.type || 9 === e.which)))
              for (var n = pt.makeArray(pt(At)), i = 0; i < n.length; i++) {
                var r = t._getParentFromElement(n[i]),
                  o = pt(n[i]).data(mt),
                  a = { relatedTarget: n[i] };
                if (o) {
                  var s = o._menu;
                  if (
                    pt(r).hasClass(Ct) &&
                    !(
                      e &&
                      (('click' === e.type && /input|textarea/i.test(e.target.tagName)) ||
                        ('keyup' === e.type && 9 === e.which)) &&
                      pt.contains(r, e.target)
                    )
                  ) {
                    var l = pt.Event(_t.HIDE, a);
                    pt(r).trigger(l),
                      l.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          pt(document.body)
                            .children()
                            .off('mouseover', null, pt.noop),
                        n[i].setAttribute('aria-expanded', 'false'),
                        pt(s).removeClass(Ct),
                        pt(r)
                          .removeClass(Ct)
                          .trigger(pt.Event(_t.HIDDEN, a)));
                  }
                }
              }
          }),
          (t._getParentFromElement = function(t) {
            var e,
              n = hn.getSelectorFromElement(t);
            return n && (e = pt(n)[0]), e || t.parentNode;
          }),
          (t._dataApiKeydownHandler = function(e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which && ((40 !== e.which && 38 !== e.which) || pt(e.target).closest(It).length))
                  )
                : xt.test(e.which)) &&
              (e.preventDefault(), e.stopPropagation(), !this.disabled && !pt(this).hasClass(wt))
            ) {
              var n = t._getParentFromElement(this),
                i = pt(n).hasClass(Ct);
              if ((i || (27 === e.which && 32 === e.which)) && (!i || (27 !== e.which && 32 !== e.which))) {
                var r = pt(n)
                  .find(Ot)
                  .get();
                if (0 !== r.length) {
                  var o = r.indexOf(e.target);
                  38 === e.which && 0 < o && o--,
                    40 === e.which && o < r.length - 1 && o++,
                    o < 0 && (o = 0),
                    r[o].focus();
                }
              } else {
                if (27 === e.which) {
                  var a = pt(n).find(At)[0];
                  pt(a).trigger('focus');
                }
                pt(this).trigger('click');
              }
            }
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return Ht;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return Wt;
              }
            }
          ]),
          t
        );
      })()),
      pt(document)
        .on(_t.KEYDOWN_DATA_API, At, Bt._dataApiKeydownHandler)
        .on(_t.KEYDOWN_DATA_API, It, Bt._dataApiKeydownHandler)
        .on(_t.CLICK_DATA_API + ' ' + _t.KEYUP_DATA_API, Bt._clearMenus)
        .on(_t.CLICK_DATA_API, At, function(t) {
          t.preventDefault(), t.stopPropagation(), Bt._jQueryInterface.call(pt(this), 'toggle');
        })
        .on(_t.CLICK_DATA_API, Et, function(t) {
          t.stopPropagation();
        }),
      (pt.fn[gt] = Bt._jQueryInterface),
      (pt.fn[gt].Constructor = Bt),
      (pt.fn[gt].noConflict = function() {
        return (pt.fn[gt] = bt), Bt._jQueryInterface;
      }),
      Bt),
      yn = ((Vt = '.' + (zt = 'bs.modal')),
      (Ut = ($t = e).fn[(qt = 'modal')]),
      (Yt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (Gt = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' }),
      (Kt = {
        HIDE: 'hide' + Vt,
        HIDDEN: 'hidden' + Vt,
        SHOW: 'show' + Vt,
        SHOWN: 'shown' + Vt,
        FOCUSIN: 'focusin' + Vt,
        RESIZE: 'resize' + Vt,
        CLICK_DISMISS: 'click.dismiss' + Vt,
        KEYDOWN_DISMISS: 'keydown.dismiss' + Vt,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + Vt,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + Vt,
        CLICK_DATA_API: 'click' + Vt + '.data-api'
      }),
      (Qt = 'modal-scrollbar-measure'),
      (Xt = 'modal-backdrop'),
      (Jt = 'modal-open'),
      (Zt = 'fade'),
      (te = 'show'),
      (ee = {
        DIALOG: '.modal-dialog',
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        STICKY_CONTENT: '.sticky-top',
        NAVBAR_TOGGLER: '.navbar-toggler'
      }),
      (ne = (function() {
        function t(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = $t(t).find(ee.DIALOG)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var e = t.prototype;
        return (
          (e.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (e.show = function(t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              $t(this._element).hasClass(Zt) && (this._isTransitioning = !0);
              var n = $t.Event(Kt.SHOW, { relatedTarget: t });
              $t(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  $t(document.body).addClass(Jt),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(this._element).on(Kt.CLICK_DISMISS, ee.DATA_DISMISS, function(t) {
                    return e.hide(t);
                  }),
                  $t(this._dialog).on(Kt.MOUSEDOWN_DISMISS, function() {
                    $t(e._element).one(Kt.MOUSEUP_DISMISS, function(t) {
                      $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function() {
                    return e._showElement(t);
                  }));
            }
          }),
          (e.hide = function(t) {
            var e = this;
            if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
              var n = $t.Event(Kt.HIDE);
              if (($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                this._isShown = !1;
                var i = $t(this._element).hasClass(Zt);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(document).off(Kt.FOCUSIN),
                  $t(this._element).removeClass(te),
                  $t(this._element).off(Kt.CLICK_DISMISS),
                  $t(this._dialog).off(Kt.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = hn.getTransitionDurationFromElement(this._element);
                  $t(this._element)
                    .one(hn.TRANSITION_END, function(t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (e.dispose = function() {
            $t.removeData(this._element, zt),
              $t(window, document, this._element, this._backdrop).off(Vt),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function() {
            this._adjustDialog();
          }),
          (e._getConfig = function(t) {
            return (t = o({}, Yt, t)), hn.typeCheckConfig(qt, t, Gt), t;
          }),
          (e._showElement = function(t) {
            var e = this,
              n = $t(this._element).hasClass(Zt);
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              (this._element.scrollTop = 0),
              n && hn.reflow(this._element),
              $t(this._element).addClass(te),
              this._config.focus && this._enforceFocus();
            var i = $t.Event(Kt.SHOWN, { relatedTarget: t }),
              r = function() {
                e._config.focus && e._element.focus(), (e._isTransitioning = !1), $t(e._element).trigger(i);
              };
            if (n) {
              var o = hn.getTransitionDurationFromElement(this._element);
              $t(this._dialog)
                .one(hn.TRANSITION_END, r)
                .emulateTransitionEnd(o);
            } else r();
          }),
          (e._enforceFocus = function() {
            var t = this;
            $t(document)
              .off(Kt.FOCUSIN)
              .on(Kt.FOCUSIN, function(e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === $t(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard
              ? $t(this._element).on(Kt.KEYDOWN_DISMISS, function(e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                })
              : this._isShown || $t(this._element).off(Kt.KEYDOWN_DISMISS);
          }),
          (e._setResizeEvent = function() {
            var t = this;
            this._isShown
              ? $t(window).on(Kt.RESIZE, function(e) {
                  return t.handleUpdate(e);
                })
              : $t(window).off(Kt.RESIZE);
          }),
          (e._hideModal = function() {
            var t = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function() {
                $t(document.body).removeClass(Jt),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  $t(t._element).trigger(Kt.HIDDEN);
              });
          }),
          (e._removeBackdrop = function() {
            this._backdrop && ($t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function(t) {
            var e = this,
              n = $t(this._element).hasClass(Zt) ? Zt : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = Xt),
                n && $t(this._backdrop).addClass(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(Kt.CLICK_DISMISS, function(t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget && ('static' === e._config.backdrop ? e._element.focus() : e.hide());
                }),
                n && hn.reflow(this._backdrop),
                $t(this._backdrop).addClass(te),
                !t)
              )
                return;
              if (!n) return void t();
              var i = hn.getTransitionDurationFromElement(this._backdrop);
              $t(this._backdrop)
                .one(hn.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              $t(this._backdrop).removeClass(te);
              var r = function() {
                e._removeBackdrop(), t && t();
              };
              if ($t(this._element).hasClass(Zt)) {
                var o = hn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop)
                  .one(hn.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            } else t && t();
          }),
          (e._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
          }),
          (e._resetAdjustments = function() {
            (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
          }),
          (e._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
              $t(ee.FIXED_CONTENT).each(function(e, n) {
                var i = $t(n)[0].style.paddingRight,
                  r = $t(n).css('padding-right');
                $t(n)
                  .data('padding-right', i)
                  .css('padding-right', parseFloat(r) + t._scrollbarWidth + 'px');
              }),
                $t(ee.STICKY_CONTENT).each(function(e, n) {
                  var i = $t(n)[0].style.marginRight,
                    r = $t(n).css('margin-right');
                  $t(n)
                    .data('margin-right', i)
                    .css('margin-right', parseFloat(r) - t._scrollbarWidth + 'px');
                }),
                $t(ee.NAVBAR_TOGGLER).each(function(e, n) {
                  var i = $t(n)[0].style.marginRight,
                    r = $t(n).css('margin-right');
                  $t(n)
                    .data('margin-right', i)
                    .css('margin-right', parseFloat(r) + t._scrollbarWidth + 'px');
                });
              var e = document.body.style.paddingRight,
                n = $t(document.body).css('padding-right');
              $t(document.body)
                .data('padding-right', e)
                .css('padding-right', parseFloat(n) + this._scrollbarWidth + 'px');
            }
          }),
          (e._resetScrollbar = function() {
            $t(ee.FIXED_CONTENT).each(function(t, e) {
              var n = $t(e).data('padding-right');
              void 0 !== n &&
                $t(e)
                  .css('padding-right', n)
                  .removeData('padding-right');
            }),
              $t(ee.STICKY_CONTENT + ', ' + ee.NAVBAR_TOGGLER).each(function(t, e) {
                var n = $t(e).data('margin-right');
                void 0 !== n &&
                  $t(e)
                    .css('margin-right', n)
                    .removeData('margin-right');
              });
            var t = $t(document.body).data('padding-right');
            void 0 !== t &&
              $t(document.body)
                .css('padding-right', t)
                .removeData('padding-right');
          }),
          (e._getScrollbarWidth = function() {
            var t = document.createElement('div');
            (t.className = Qt), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (t._jQueryInterface = function(e, n) {
            return this.each(function() {
              var i = $t(this).data(zt),
                r = o({}, Yt, $t(this).data(), 'object' == typeof e && e ? e : {});
              if ((i || ((i = new t(this, r)), $t(this).data(zt, i)), 'string' == typeof e)) {
                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                i[e](n);
              } else r.show && i.show(n);
            });
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return Yt;
              }
            }
          ]),
          t
        );
      })()),
      $t(document).on(Kt.CLICK_DATA_API, ee.DATA_TOGGLE, function(t) {
        var e,
          n = this,
          i = hn.getSelectorFromElement(this);
        i && (e = $t(i)[0]);
        var r = $t(e).data(zt) ? 'toggle' : o({}, $t(e).data(), $t(this).data());
        ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
        var a = $t(e).one(Kt.SHOW, function(t) {
          t.isDefaultPrevented() ||
            a.one(Kt.HIDDEN, function() {
              $t(n).is(':visible') && n.focus();
            });
        });
        ne._jQueryInterface.call($t(e), r, this);
      }),
      ($t.fn[qt] = ne._jQueryInterface),
      ($t.fn[qt].Constructor = ne),
      ($t.fn[qt].noConflict = function() {
        return ($t.fn[qt] = Ut), ne._jQueryInterface;
      }),
      ne),
      bn = ((ae = '.' + (oe = 'bs.tooltip')),
      (se = (ie = e).fn[(re = 'tooltip')]),
      (le = 'bs-tooltip'),
      (ue = new RegExp('(^|\\s)' + le + '\\S+', 'g')),
      (he = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !(de = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' }),
        selector: !(ce = {
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
      (ge = {
        HIDE: 'hide' + ae,
        HIDDEN: 'hidden' + ae,
        SHOW: (fe = 'show') + ae,
        SHOWN: 'shown' + ae,
        INSERTED: 'inserted' + ae,
        CLICK: 'click' + ae,
        FOCUSIN: 'focusin' + ae,
        FOCUSOUT: 'focusout' + ae,
        MOUSEENTER: 'mouseenter' + ae,
        MOUSELEAVE: 'mouseleave' + ae
      }),
      (me = 'fade'),
      (ve = 'show'),
      (ye = '.tooltip-inner'),
      (be = 'hover'),
      (xe = 'focus'),
      (_e = (function() {
        function t(t, e) {
          if (void 0 === n) throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
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
        var e = t.prototype;
        return (
          (e.enable = function() {
            this._isEnabled = !0;
          }),
          (e.disable = function() {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function(t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = ie(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                  ie(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
              } else {
                if (ie(this.getTipElement()).hasClass(ve)) return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (e.dispose = function() {
            clearTimeout(this._timeout),
              ie.removeData(this.element, this.constructor.DATA_KEY),
              ie(this.element).off(this.constructor.EVENT_KEY),
              ie(this.element)
                .closest('.modal')
                .off('hide.bs.modal'),
              this.tip && ie(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function() {
            var t = this;
            if ('none' === ie(this.element).css('display')) throw new Error('Please use show on visible elements');
            var e = ie.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              ie(this.element).trigger(e);
              var i = ie.contains(this.element.ownerDocument.documentElement, this.element);
              if (e.isDefaultPrevented() || !i) return;
              var r = this.getTipElement(),
                o = hn.getUID(this.constructor.NAME);
              r.setAttribute('id', o),
                this.element.setAttribute('aria-describedby', o),
                this.setContent(),
                this.config.animation && ie(r).addClass(me);
              var a =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, r, this.element)
                    : this.config.placement,
                s = this._getAttachment(a);
              this.addAttachmentClass(s);
              var l = !1 === this.config.container ? document.body : ie(this.config.container);
              ie(r).data(this.constructor.DATA_KEY, this),
                ie.contains(this.element.ownerDocument.documentElement, this.tip) || ie(r).appendTo(l),
                ie(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, r, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: '.arrow' },
                    preventOverflow: { boundariesElement: this.config.boundary }
                  },
                  onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function(e) {
                    t._handlePopperPlacementChange(e);
                  }
                })),
                ie(r).addClass(ve),
                'ontouchstart' in document.documentElement &&
                  ie(document.body)
                    .children()
                    .on('mouseover', null, ie.noop);
              var u = function() {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                (t._hoverState = null), ie(t.element).trigger(t.constructor.Event.SHOWN), e === pe && t._leave(null, t);
              };
              if (ie(this.tip).hasClass(me)) {
                var c = hn.getTransitionDurationFromElement(this.tip);
                ie(this.tip)
                  .one(hn.TRANSITION_END, u)
                  .emulateTransitionEnd(c);
              } else u();
            }
          }),
          (e.hide = function(t) {
            var e = this,
              n = this.getTipElement(),
              i = ie.Event(this.constructor.Event.HIDE),
              r = function() {
                e._hoverState !== fe && n.parentNode && n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute('aria-describedby'),
                  ie(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((ie(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (ie(n).removeClass(ve),
                'ontouchstart' in document.documentElement &&
                  ie(document.body)
                    .children()
                    .off('mouseover', null, ie.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[xe] = !1),
                (this._activeTrigger[be] = !1),
                ie(this.tip).hasClass(me))
              ) {
                var o = hn.getTransitionDurationFromElement(n);
                ie(n)
                  .one(hn.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
              this._hoverState = '';
            }
          }),
          (e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function() {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function(t) {
            ie(this.getTipElement()).addClass(le + '-' + t);
          }),
          (e.getTipElement = function() {
            return (this.tip = this.tip || ie(this.config.template)[0]), this.tip;
          }),
          (e.setContent = function() {
            var t = ie(this.getTipElement());
            this.setElementContent(t.find(ye), this.getTitle()), t.removeClass(me + ' ' + ve);
          }),
          (e.setElementContent = function(t, e) {
            var n = this.config.html;
            'object' == typeof e && (e.nodeType || e.jquery)
              ? n
                ? ie(e)
                    .parent()
                    .is(t) || t.empty().append(e)
                : t.text(ie(e).text())
              : t[n ? 'html' : 'text'](e);
          }),
          (e.getTitle = function() {
            var t = this.element.getAttribute('data-original-title');
            return (
              t ||
                (t = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
              t
            );
          }),
          (e._getAttachment = function(t) {
            return de[t.toUpperCase()];
          }),
          (e._setListeners = function() {
            var t = this;
            this.config.trigger.split(' ').forEach(function(e) {
              if ('click' === e)
                ie(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                  return t.toggle(e);
                });
              else if ('manual' !== e) {
                var n = e === be ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                  i = e === be ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                ie(t.element)
                  .on(n, t.config.selector, function(e) {
                    return t._enter(e);
                  })
                  .on(i, t.config.selector, function(e) {
                    return t._leave(e);
                  });
              }
              ie(t.element)
                .closest('.modal')
                .on('hide.bs.modal', function() {
                  return t.hide();
                });
            }),
              this.config.selector
                ? (this.config = o({}, this.config, { trigger: 'manual', selector: '' }))
                : this._fixTitle();
          }),
          (e._fixTitle = function() {
            var t = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== t) &&
              (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''),
              this.element.setAttribute('title', ''));
          }),
          (e._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || ie(t.currentTarget).data(n)) ||
              ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), ie(t.currentTarget).data(n, e)),
              t && (e._activeTrigger['focusin' === t.type ? xe : be] = !0),
              ie(e.getTipElement()).hasClass(ve) || e._hoverState === fe
                ? (e._hoverState = fe)
                : (clearTimeout(e._timeout),
                  (e._hoverState = fe),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function() {
                        e._hoverState === fe && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (e._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || ie(t.currentTarget).data(n)) ||
              ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), ie(t.currentTarget).data(n, e)),
              t && (e._activeTrigger['focusout' === t.type ? xe : be] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = pe),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function() {
                      e._hoverState === pe && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (e._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (e._getConfig = function(t) {
            return (
              'number' ==
                typeof (t = o(
                  {},
                  this.constructor.Default,
                  ie(this.element).data(),
                  'object' == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              'number' == typeof t.title && (t.title = t.title.toString()),
              'number' == typeof t.content && (t.content = t.content.toString()),
              hn.typeCheckConfig(re, t, this.constructor.DefaultType),
              t
            );
          }),
          (e._getDelegateConfig = function() {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
          }),
          (e._cleanTipClass = function() {
            var t = ie(this.getTipElement()),
              e = t.attr('class').match(ue);
            null !== e && 0 < e.length && t.removeClass(e.join(''));
          }),
          (e._handlePopperPlacementChange = function(t) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (e._fixTransition = function() {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute('x-placement') &&
              (ie(t).removeClass(me),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = ie(this).data(oe),
                i = 'object' == typeof e && e;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new t(this, i)), ie(this).data(oe, n)), 'string' == typeof e)
              ) {
                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return he;
              }
            },
            {
              key: 'NAME',
              get: function() {
                return re;
              }
            },
            {
              key: 'DATA_KEY',
              get: function() {
                return oe;
              }
            },
            {
              key: 'Event',
              get: function() {
                return ge;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function() {
                return ae;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return ce;
              }
            }
          ]),
          t
        );
      })()),
      (ie.fn[re] = _e._jQueryInterface),
      (ie.fn[re].Constructor = _e),
      (ie.fn[re].noConflict = function() {
        return (ie.fn[re] = se), _e._jQueryInterface;
      }),
      _e),
      xn = ((Te = '.' + (Se = 'bs.popover')),
      (ke = (we = e).fn[(Ce = 'popover')]),
      (De = 'bs-popover'),
      (Ae = new RegExp('(^|\\s)' + De + '\\S+', 'g')),
      (Ee = o({}, bn.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      })),
      (Ie = o({}, bn.DefaultType, { content: '(string|element|function)' })),
      (Me = '.popover-header'),
      (Oe = '.popover-body'),
      (Pe = {
        HIDE: 'hide' + Te,
        HIDDEN: 'hidden' + Te,
        SHOW: 'show' + Te,
        SHOWN: 'shown' + Te,
        INSERTED: 'inserted' + Te,
        CLICK: 'click' + Te,
        FOCUSIN: 'focusin' + Te,
        FOCUSOUT: 'focusout' + Te,
        MOUSEENTER: 'mouseenter' + Te,
        MOUSELEAVE: 'mouseleave' + Te
      }),
      (Ne = (function(t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
        var o = i.prototype;
        return (
          (o.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }),
          (o.addAttachmentClass = function(t) {
            we(this.getTipElement()).addClass(De + '-' + t);
          }),
          (o.getTipElement = function() {
            return (this.tip = this.tip || we(this.config.template)[0]), this.tip;
          }),
          (o.setContent = function() {
            var t = we(this.getTipElement());
            this.setElementContent(t.find(Me), this.getTitle());
            var e = this._getContent();
            'function' == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(Oe), e),
              t.removeClass('fade show');
          }),
          (o._getContent = function() {
            return this.element.getAttribute('data-content') || this.config.content;
          }),
          (o._cleanTipClass = function() {
            var t = we(this.getTipElement()),
              e = t.attr('class').match(Ae);
            null !== e && 0 < e.length && t.removeClass(e.join(''));
          }),
          (i._jQueryInterface = function(t) {
            return this.each(function() {
              var e = we(this).data(Se),
                n = 'object' == typeof t ? t : null;
              if (
                (e || !/destroy|hide/.test(t)) &&
                (e || ((e = new i(this, n)), we(this).data(Se, e)), 'string' == typeof t)
              ) {
                if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          r(i, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return Ee;
              }
            },
            {
              key: 'NAME',
              get: function() {
                return Ce;
              }
            },
            {
              key: 'DATA_KEY',
              get: function() {
                return Se;
              }
            },
            {
              key: 'Event',
              get: function() {
                return Pe;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function() {
                return Te;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return Ie;
              }
            }
          ]),
          i
        );
      })(bn)),
      (we.fn[Ce] = Ne._jQueryInterface),
      (we.fn[Ce].Constructor = Ne),
      (we.fn[Ce].noConflict = function() {
        return (we.fn[Ce] = ke), Ne._jQueryInterface;
      }),
      Ne),
      _n = ((je = '.' + (Fe = 'bs.scrollspy')),
      (He = (Le = e).fn[(Re = 'scrollspy')]),
      (We = { offset: 10, method: 'auto', target: '' }),
      (Be = { offset: 'number', method: 'string', target: '(string|element)' }),
      ($e = { ACTIVATE: 'activate' + je, SCROLL: 'scroll' + je, LOAD_DATA_API: 'load' + je + '.data-api' }),
      (qe = 'dropdown-item'),
      (ze = 'active'),
      (Ve = {
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
      (Ue = 'position'),
      (Ye = (function() {
        function t(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = 'BODY' === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              ' ' +
              Ve.NAV_LINKS +
              ',' +
              this._config.target +
              ' ' +
              Ve.LIST_ITEMS +
              ',' +
              this._config.target +
              ' ' +
              Ve.DROPDOWN_ITEMS),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            Le(this._scrollElement).on($e.SCROLL, function(t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var e = t.prototype;
        return (
          (e.refresh = function() {
            var t = this,
              e =
                'auto' === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : Ue
                  : this._config.method,
              n = e === Ue ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              Le.makeArray(Le(this._selector))
                .map(function(t) {
                  var i,
                    r = hn.getSelectorFromElement(t);
                  if ((r && (i = Le(r)[0]), i)) {
                    var o = i.getBoundingClientRect();
                    if (o.width || o.height) return [Le(i)[e]().top + n, r];
                  }
                  return null;
                })
                .filter(function(t) {
                  return t;
                })
                .sort(function(t, e) {
                  return t[0] - e[0];
                })
                .forEach(function(e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function() {
            Le.removeData(this._element, Fe),
              Le(this._scrollElement).off(je),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function(t) {
            if ('string' != typeof (t = o({}, We, 'object' == typeof t && t ? t : {})).target) {
              var e = Le(t.target).attr('id');
              e || ((e = hn.getUID(Re)), Le(t.target).attr('id', e)), (t.target = '#' + e);
            }
            return hn.typeCheckConfig(Re, t, Be), t;
          }),
          (e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function() {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            );
          }),
          (e._getOffsetHeight = function() {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function() {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; )
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
            }
          }),
          (e._activate = function(t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(',');
            e = e.map(function(e) {
              return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
            });
            var n = Le(e.join(','));
            n.hasClass(qe)
              ? (n
                  .closest(Ve.DROPDOWN)
                  .find(Ve.DROPDOWN_TOGGLE)
                  .addClass(ze),
                n.addClass(ze))
              : (n.addClass(ze),
                n
                  .parents(Ve.NAV_LIST_GROUP)
                  .prev(Ve.NAV_LINKS + ', ' + Ve.LIST_ITEMS)
                  .addClass(ze),
                n
                  .parents(Ve.NAV_LIST_GROUP)
                  .prev(Ve.NAV_ITEMS)
                  .children(Ve.NAV_LINKS)
                  .addClass(ze)),
              Le(this._scrollElement).trigger($e.ACTIVATE, { relatedTarget: t });
          }),
          (e._clear = function() {
            Le(this._selector)
              .filter(Ve.ACTIVE)
              .removeClass(ze);
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = Le(this).data(Fe);
              if ((n || ((n = new t(this, 'object' == typeof e && e)), Le(this).data(Fe, n)), 'string' == typeof e)) {
                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return We;
              }
            }
          ]),
          t
        );
      })()),
      Le(window).on($e.LOAD_DATA_API, function() {
        for (var t = Le.makeArray(Le(Ve.DATA_SPY)), e = t.length; e--; ) {
          var n = Le(t[e]);
          Ye._jQueryInterface.call(n, n.data());
        }
      }),
      (Le.fn[Re] = Ye._jQueryInterface),
      (Le.fn[Re].Constructor = Ye),
      (Le.fn[Re].noConflict = function() {
        return (Le.fn[Re] = He), Ye._jQueryInterface;
      }),
      Ye),
      wn = ((Qe = '.' + (Ke = 'bs.tab')),
      (Xe = (Ge = e).fn.tab),
      (Je = {
        HIDE: 'hide' + Qe,
        HIDDEN: 'hidden' + Qe,
        SHOW: 'show' + Qe,
        SHOWN: 'shown' + Qe,
        CLICK_DATA_API: 'click' + Qe + '.data-api'
      }),
      (Ze = 'dropdown-menu'),
      (tn = 'active'),
      (en = 'disabled'),
      (nn = 'show'),
      (rn = '.dropdown'),
      (on = '.nav, .list-group'),
      (an = '.active'),
      (sn = '> li > .active'),
      (ln = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (un = '.dropdown-toggle'),
      (cn = '> .dropdown-menu .active'),
      (dn = (function() {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.show = function() {
            var t = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  Ge(this._element).hasClass(tn)) ||
                Ge(this._element).hasClass(en)
              )
            ) {
              var e,
                n,
                i = Ge(this._element).closest(on)[0],
                r = hn.getSelectorFromElement(this._element);
              if (i) {
                var o = 'UL' === i.nodeName ? sn : an;
                n = (n = Ge.makeArray(Ge(i).find(o)))[n.length - 1];
              }
              var a = Ge.Event(Je.HIDE, { relatedTarget: this._element }),
                s = Ge.Event(Je.SHOW, { relatedTarget: n });
              if (
                (n && Ge(n).trigger(a),
                Ge(this._element).trigger(s),
                !s.isDefaultPrevented() && !a.isDefaultPrevented())
              ) {
                r && (e = Ge(r)[0]), this._activate(this._element, i);
                var l = function() {
                  var e = Ge.Event(Je.HIDDEN, { relatedTarget: t._element }),
                    i = Ge.Event(Je.SHOWN, { relatedTarget: n });
                  Ge(n).trigger(e), Ge(t._element).trigger(i);
                };
                e ? this._activate(e, e.parentNode, l) : l();
              }
            }
          }),
          (e.dispose = function() {
            Ge.removeData(this._element, Ke), (this._element = null);
          }),
          (e._activate = function(t, e, n) {
            var i = this,
              r = ('UL' === e.nodeName ? Ge(e).find(sn) : Ge(e).children(an))[0],
              o = n && r && Ge(r).hasClass('fade'),
              a = function() {
                return i._transitionComplete(t, r, n);
              };
            if (r && o) {
              var s = hn.getTransitionDurationFromElement(r);
              Ge(r)
                .one(hn.TRANSITION_END, a)
                .emulateTransitionEnd(s);
            } else a();
          }),
          (e._transitionComplete = function(t, e, n) {
            if (e) {
              Ge(e).removeClass(nn + ' ' + tn);
              var i = Ge(e.parentNode).find(cn)[0];
              i && Ge(i).removeClass(tn), 'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !1);
            }
            if (
              (Ge(t).addClass(tn),
              'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0),
              hn.reflow(t),
              Ge(t).addClass(nn),
              t.parentNode && Ge(t.parentNode).hasClass(Ze))
            ) {
              var r = Ge(t).closest(rn)[0];
              r &&
                Ge(r)
                  .find(un)
                  .addClass(tn),
                t.setAttribute('aria-expanded', !0);
            }
            n && n();
          }),
          (t._jQueryInterface = function(e) {
            return this.each(function() {
              var n = Ge(this),
                i = n.data(Ke);
              if ((i || ((i = new t(this)), n.data(Ke, i)), 'string' == typeof e)) {
                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.1.1';
              }
            }
          ]),
          t
        );
      })()),
      Ge(document).on(Je.CLICK_DATA_API, ln, function(t) {
        t.preventDefault(), dn._jQueryInterface.call(Ge(this), 'show');
      }),
      (Ge.fn.tab = dn._jQueryInterface),
      (Ge.fn.tab.Constructor = dn),
      (Ge.fn.tab.noConflict = function() {
        return (Ge.fn.tab = Xe), dn._jQueryInterface;
      }),
      dn);
    !(function(t) {
      if (void 0 === t)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = t.fn.jquery.split(' ')[0].split('.');
      if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0])
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    })(e),
      (t.Util = hn),
      (t.Alert = fn),
      (t.Button = pn),
      (t.Carousel = gn),
      (t.Collapse = mn),
      (t.Dropdown = vn),
      (t.Modal = yn),
      (t.Popover = xn),
      (t.Scrollspy = _n),
      (t.Tab = wn),
      (t.Tooltip = bn),
      Object.defineProperty(t, '__esModule', { value: !0 });
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : 'object' == typeof module && module.exports
      ? (module.exports = function(e, n) {
          return void 0 === n && (n = 'undefined' != typeof window ? require('jquery') : require('jquery')(e)), t(n), n;
        })
      : t(jQuery);
  })(function(t) {
    var e = (function() {
        if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
        return (
          (function() {
            var t, n, i;
            (e && e.requirejs) ||
              (e ? (n = e) : (e = {}),
              (function(e) {
                function r(t, e) {
                  return b.call(t, e);
                }
                function o(t, e) {
                  var n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d,
                    h,
                    f = e && e.split('/'),
                    p = v.map,
                    g = (p && p['*']) || {};
                  if (t) {
                    for (
                      a = (t = t.split('/')).length - 1,
                        v.nodeIdCompat && _.test(t[a]) && (t[a] = t[a].replace(_, '')),
                        '.' === t[0].charAt(0) && f && (t = f.slice(0, f.length - 1).concat(t)),
                        c = 0;
                      c < t.length;
                      c++
                    )
                      if ('.' === (h = t[c])) t.splice(c, 1), (c -= 1);
                      else if ('..' === h) {
                        if (0 === c || (1 === c && '..' === t[2]) || '..' === t[c - 1]) continue;
                        c > 0 && (t.splice(c - 1, 2), (c -= 2));
                      }
                    t = t.join('/');
                  }
                  if ((f || g) && p) {
                    for (c = (n = t.split('/')).length; c > 0; c -= 1) {
                      if (((i = n.slice(0, c).join('/')), f))
                        for (d = f.length; d > 0; d -= 1)
                          if ((r = p[f.slice(0, d).join('/')]) && (r = r[i])) {
                            (o = r), (s = c);
                            break;
                          }
                      if (o) break;
                      !l && g && g[i] && ((l = g[i]), (u = c));
                    }
                    !o && l && ((o = l), (s = u)), o && (n.splice(0, s, o), (t = n.join('/')));
                  }
                  return t;
                }
                function a(t, n) {
                  return function() {
                    var i = x.call(arguments, 0);
                    return 'string' != typeof i[0] && 1 === i.length && i.push(null), h.apply(e, i.concat([t, n]));
                  };
                }
                function s(t) {
                  return function(e) {
                    g[t] = e;
                  };
                }
                function l(t) {
                  if (r(m, t)) {
                    var n = m[t];
                    delete m[t], (y[t] = !0), d.apply(e, n);
                  }
                  if (!r(g, t) && !r(y, t)) throw new Error('No ' + t);
                  return g[t];
                }
                function u(t) {
                  var e,
                    n = t ? t.indexOf('!') : -1;
                  return n > -1 && ((e = t.substring(0, n)), (t = t.substring(n + 1, t.length))), [e, t];
                }
                function c(t) {
                  return t ? u(t) : [];
                }
                var d,
                  h,
                  f,
                  p,
                  g = {},
                  m = {},
                  v = {},
                  y = {},
                  b = Object.prototype.hasOwnProperty,
                  x = [].slice,
                  _ = /\.js$/;
                (f = function(t, e) {
                  var n,
                    i = u(t),
                    r = i[0],
                    a = e[1];
                  return (
                    (t = i[1]),
                    r && (n = l((r = o(r, a)))),
                    r
                      ? (t =
                          n && n.normalize
                            ? n.normalize(
                                t,
                                (function(t) {
                                  return function(e) {
                                    return o(e, t);
                                  };
                                })(a)
                              )
                            : o(t, a))
                      : ((t = (i = u((t = o(t, a))))[1]), (r = i[0]) && (n = l(r))),
                    { f: r ? r + '!' + t : t, n: t, pr: r, p: n }
                  );
                }),
                  (p = {
                    require: function(t) {
                      return a(t);
                    },
                    exports: function(t) {
                      var e = g[t];
                      return void 0 !== e ? e : (g[t] = {});
                    },
                    module: function(t) {
                      return {
                        id: t,
                        uri: '',
                        exports: g[t],
                        config: (function(t) {
                          return function() {
                            return (v && v.config && v.config[t]) || {};
                          };
                        })(t)
                      };
                    }
                  }),
                  (d = function(t, n, i, o) {
                    var u,
                      d,
                      h,
                      v,
                      b,
                      x,
                      _,
                      w = [],
                      C = typeof i;
                    if (((x = c((o = o || t))), 'undefined' === C || 'function' === C)) {
                      for (
                        n = !n.length && i.length ? ['require', 'exports', 'module'] : n, b = 0;
                        b < n.length;
                        b += 1
                      )
                        if ('require' === (d = (v = f(n[b], x)).f)) w[b] = p.require(t);
                        else if ('exports' === d) (w[b] = p.exports(t)), (_ = !0);
                        else if ('module' === d) u = w[b] = p.module(t);
                        else if (r(g, d) || r(m, d) || r(y, d)) w[b] = l(d);
                        else {
                          if (!v.p) throw new Error(t + ' missing ' + d);
                          v.p.load(v.n, a(o, !0), s(d), {}), (w[b] = g[d]);
                        }
                      (h = i ? i.apply(g[t], w) : void 0),
                        t &&
                          (u && u.exports !== e && u.exports !== g[t]
                            ? (g[t] = u.exports)
                            : (h === e && _) || (g[t] = h));
                    } else t && (g[t] = i);
                  }),
                  (t = n = h = function(t, n, i, r, o) {
                    if ('string' == typeof t) return p[t] ? p[t](n) : l(f(t, c(n)).f);
                    if (!t.splice) {
                      if (((v = t).deps && h(v.deps, v.callback), !n)) return;
                      n.splice ? ((t = n), (n = i), (i = null)) : (t = e);
                    }
                    return (
                      (n = n || function() {}),
                      'function' == typeof i && ((i = r), (r = o)),
                      r
                        ? d(e, t, n, i)
                        : setTimeout(function() {
                            d(e, t, n, i);
                          }, 4),
                      h
                    );
                  }),
                  (h.config = function(t) {
                    return h(t);
                  }),
                  (t._defined = g),
                  ((i = function(t, e, n) {
                    if ('string' != typeof t)
                      throw new Error('See almond README: incorrect module build, no module name');
                    e.splice || ((n = e), (e = [])), r(g, t) || r(m, t) || (m[t] = [t, e, n]);
                  }).amd = { jQuery: !0 });
              })(),
              (e.requirejs = t),
              (e.require = n),
              (e.define = i));
          })(),
          e.define('almond', function() {}),
          e.define('jquery', [], function() {
            var e = t || $;
            return (
              null == e &&
                console &&
                console.error &&
                console.error(
                  'Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.'
                ),
              e
            );
          }),
          e.define('select2/utils', ['jquery'], function(t) {
            function e(t) {
              var e = t.prototype,
                n = [];
              for (var i in e) 'function' == typeof e[i] && 'constructor' !== i && n.push(i);
              return n;
            }
            var n = {
                Extend: function(t, e) {
                  function n() {
                    this.constructor = t;
                  }
                  var i = {}.hasOwnProperty;
                  for (var r in e) i.call(e, r) && (t[r] = e[r]);
                  return (n.prototype = e.prototype), (t.prototype = new n()), (t.__super__ = e.prototype), t;
                },
                Decorate: function(t, n) {
                  function i() {
                    var e = Array.prototype.unshift,
                      i = t.prototype.constructor;
                    n.prototype.constructor.length > 0 &&
                      (e.call(arguments, t.prototype.constructor), (i = n.prototype.constructor)),
                      i.apply(this, arguments);
                  }
                  var r = e(n),
                    o = e(t);
                  (n.displayName = t.displayName),
                    (i.prototype = new function() {
                      this.constructor = i;
                    }());
                  for (var a = 0; a < o.length; a++) {
                    var s = o[a];
                    i.prototype[s] = t.prototype[s];
                  }
                  for (
                    var l = function(t) {
                        var e = function() {};
                        (t in i.prototype) && (e = i.prototype[t]);
                        var r = n.prototype[t];
                        return function() {
                          return Array.prototype.unshift.call(arguments, e), r.apply(this, arguments);
                        };
                      },
                      u = 0;
                    u < r.length;
                    u++
                  ) {
                    var c = r[u];
                    i.prototype[c] = l(c);
                  }
                  return i;
                }
              },
              i = function() {
                this.listeners = {};
              };
            (i.prototype.on = function(t, e) {
              (this.listeners = this.listeners || {}),
                t in this.listeners ? this.listeners[t].push(e) : (this.listeners[t] = [e]);
            }),
              (i.prototype.trigger = function(t) {
                var e = Array.prototype.slice,
                  n = e.call(arguments, 1);
                (this.listeners = this.listeners || {}),
                  null == n && (n = []),
                  0 === n.length && n.push({}),
                  (n[0]._type = t),
                  t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)),
                  '*' in this.listeners && this.invoke(this.listeners['*'], arguments);
              }),
              (i.prototype.invoke = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e);
              }),
              (n.Observable = i),
              (n.generateChars = function(t) {
                for (var e = '', n = 0; n < t; n++) e += Math.floor(36 * Math.random()).toString(36);
                return e;
              }),
              (n.bind = function(t, e) {
                return function() {
                  t.apply(e, arguments);
                };
              }),
              (n._convertData = function(t) {
                for (var e in t) {
                  var n = e.split('-'),
                    i = t;
                  if (1 !== n.length) {
                    for (var r = 0; r < n.length; r++) {
                      var o = n[r];
                      (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}),
                        r == n.length - 1 && (i[o] = t[e]),
                        (i = i[o]);
                    }
                    delete t[e];
                  }
                }
                return t;
              }),
              (n.hasScroll = function(e, n) {
                var i = t(n),
                  r = n.style.overflowX,
                  o = n.style.overflowY;
                return (
                  (r !== o || ('hidden' !== o && 'visible' !== o)) &&
                  ('scroll' === r ||
                    'scroll' === o ||
                    i.innerHeight() < n.scrollHeight ||
                    i.innerWidth() < n.scrollWidth)
                );
              }),
              (n.escapeMarkup = function(t) {
                var e = {
                  '\\': '&#92;',
                  '&': '&amp;',
                  '<': '&lt;',
                  '>': '&gt;',
                  '"': '&quot;',
                  "'": '&#39;',
                  '/': '&#47;'
                };
                return 'string' != typeof t
                  ? t
                  : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                      return e[t];
                    });
              }),
              (n.appendMany = function(e, n) {
                if ('1.7' === t.fn.jquery.substr(0, 3)) {
                  var i = t();
                  t.map(n, function(t) {
                    i = i.add(t);
                  }),
                    (n = i);
                }
                e.append(n);
              }),
              (n.__cache = {});
            var r = 0;
            return (
              (n.GetUniqueElementId = function(t) {
                var e = t.getAttribute('data-select2-id');
                return (
                  null == e &&
                    (t.id
                      ? t.setAttribute('data-select2-id', (e = t.id))
                      : (t.setAttribute('data-select2-id', ++r), (e = r.toString()))),
                  e
                );
              }),
              (n.StoreData = function(t, e, i) {
                var r = n.GetUniqueElementId(t);
                n.__cache[r] || (n.__cache[r] = {}), (n.__cache[r][e] = i);
              }),
              (n.GetData = function(e, i) {
                var r = n.GetUniqueElementId(e);
                return i ? (n.__cache[r] && null != n.__cache[r][i] ? n.__cache[r][i] : t(e).data(i)) : n.__cache[r];
              }),
              (n.RemoveData = function(t) {
                var e = n.GetUniqueElementId(t);
                null != n.__cache[e] && delete n.__cache[e];
              }),
              n
            );
          }),
          e.define('select2/results', ['jquery', './utils'], function(t, e) {
            function n(t, e, i) {
              (this.$element = t), (this.data = i), (this.options = e), n.__super__.constructor.call(this);
            }
            return (
              e.Extend(n, e.Observable),
              (n.prototype.render = function() {
                var e = t('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get('multiple') && e.attr('aria-multiselectable', 'true'), (this.$results = e), e;
              }),
              (n.prototype.clear = function() {
                this.$results.empty();
              }),
              (n.prototype.displayMessage = function(e) {
                var n = this.options.get('escapeMarkup');
                this.clear(), this.hideLoading();
                var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                  r = this.options.get('translations').get(e.message);
                i.append(n(r(e.args))), (i[0].className += ' select2-results__message'), this.$results.append(i);
              }),
              (n.prototype.hideMessages = function() {
                this.$results.find('.select2-results__message').remove();
              }),
              (n.prototype.append = function(t) {
                this.hideLoading();
                var e = [];
                if (null != t.results && 0 !== t.results.length) {
                  t.results = this.sort(t.results);
                  for (var n = 0; n < t.results.length; n++) {
                    var i = this.option(t.results[n]);
                    e.push(i);
                  }
                  this.$results.append(e);
                } else
                  0 === this.$results.children().length && this.trigger('results:message', { message: 'noResults' });
              }),
              (n.prototype.position = function(t, e) {
                e.find('.select2-results').append(t);
              }),
              (n.prototype.sort = function(t) {
                return this.options.get('sorter')(t);
              }),
              (n.prototype.highlightFirstItem = function() {
                var t = this.$results.find('.select2-results__option[aria-selected]'),
                  e = t.filter('[aria-selected=true]');
                e.length > 0 ? e.first().trigger('mouseenter') : t.first().trigger('mouseenter'),
                  this.ensureHighlightVisible();
              }),
              (n.prototype.setClasses = function() {
                var n = this;
                this.data.current(function(i) {
                  var r = t.map(i, function(t) {
                    return t.id.toString();
                  });
                  n.$results.find('.select2-results__option[aria-selected]').each(function() {
                    var n = t(this),
                      i = e.GetData(this, 'data');
                    (null != i.element && i.element.selected) || (null == i.element && t.inArray('' + i.id, r) > -1)
                      ? n.attr('aria-selected', 'true')
                      : n.attr('aria-selected', 'false');
                  });
                });
              }),
              (n.prototype.showLoading = function(t) {
                this.hideLoading();
                var e = { disabled: !0, loading: !0, text: this.options.get('translations').get('searching')(t) },
                  n = this.option(e);
                (n.className += ' loading-results'), this.$results.prepend(n);
              }),
              (n.prototype.hideLoading = function() {
                this.$results.find('.loading-results').remove();
              }),
              (n.prototype.option = function(n) {
                var i = document.createElement('li');
                i.className = 'select2-results__option';
                var r = { role: 'treeitem', 'aria-selected': 'false' };
                for (var o in (n.disabled && (delete r['aria-selected'], (r['aria-disabled'] = 'true')),
                null == n.id && delete r['aria-selected'],
                null != n._resultId && (i.id = n._resultId),
                n.title && (i.title = n.title),
                n.children && ((r.role = 'group'), (r['aria-label'] = n.text), delete r['aria-selected']),
                r))
                  i.setAttribute(o, r[o]);
                if (n.children) {
                  var a = t(i),
                    s = document.createElement('strong');
                  (s.className = 'select2-results__group'), t(s), this.template(n, s);
                  for (var l = [], u = 0; u < n.children.length; u++) {
                    var c = this.option(n.children[u]);
                    l.push(c);
                  }
                  var d = t('<ul></ul>', { class: 'select2-results__options select2-results__options--nested' });
                  d.append(l), a.append(s), a.append(d);
                } else this.template(n, i);
                return e.StoreData(i, 'data', n), i;
              }),
              (n.prototype.bind = function(n, i) {
                var r = this;
                this.$results.attr('id', n.id + '-results'),
                  n.on('results:all', function(t) {
                    r.clear(), r.append(t.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  n.on('results:append', function(t) {
                    r.append(t.data), n.isOpen() && r.setClasses();
                  }),
                  n.on('query', function(t) {
                    r.hideMessages(), r.showLoading(t);
                  }),
                  n.on('select', function() {
                    n.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  n.on('unselect', function() {
                    n.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  n.on('open', function() {
                    r.$results.attr('aria-expanded', 'true'),
                      r.$results.attr('aria-hidden', 'false'),
                      r.setClasses(),
                      r.ensureHighlightVisible();
                  }),
                  n.on('close', function() {
                    r.$results.attr('aria-expanded', 'false'),
                      r.$results.attr('aria-hidden', 'true'),
                      r.$results.removeAttr('aria-activedescendant');
                  }),
                  n.on('results:toggle', function() {
                    var t = r.getHighlightedResults();
                    0 !== t.length && t.trigger('mouseup');
                  }),
                  n.on('results:select', function() {
                    var t = r.getHighlightedResults();
                    if (0 !== t.length) {
                      var n = e.GetData(t[0], 'data');
                      'true' == t.attr('aria-selected') ? r.trigger('close', {}) : r.trigger('select', { data: n });
                    }
                  }),
                  n.on('results:previous', function() {
                    var t = r.getHighlightedResults(),
                      e = r.$results.find('[aria-selected]'),
                      n = e.index(t);
                    if (!(n <= 0)) {
                      var i = n - 1;
                      0 === t.length && (i = 0);
                      var o = e.eq(i);
                      o.trigger('mouseenter');
                      var a = r.$results.offset().top,
                        s = o.offset().top,
                        l = r.$results.scrollTop() + (s - a);
                      0 === i ? r.$results.scrollTop(0) : s - a < 0 && r.$results.scrollTop(l);
                    }
                  }),
                  n.on('results:next', function() {
                    var t = r.getHighlightedResults(),
                      e = r.$results.find('[aria-selected]'),
                      n = e.index(t) + 1;
                    if (!(n >= e.length)) {
                      var i = e.eq(n);
                      i.trigger('mouseenter');
                      var o = r.$results.offset().top + r.$results.outerHeight(!1),
                        a = i.offset().top + i.outerHeight(!1),
                        s = r.$results.scrollTop() + a - o;
                      0 === n ? r.$results.scrollTop(0) : a > o && r.$results.scrollTop(s);
                    }
                  }),
                  n.on('results:focus', function(t) {
                    t.element.addClass('select2-results__option--highlighted');
                  }),
                  n.on('results:message', function(t) {
                    r.displayMessage(t);
                  }),
                  t.fn.mousewheel &&
                    this.$results.on('mousewheel', function(t) {
                      var e = r.$results.scrollTop(),
                        n = r.$results.get(0).scrollHeight - e + t.deltaY,
                        i = t.deltaY > 0 && e - t.deltaY <= 0,
                        o = t.deltaY < 0 && n <= r.$results.height();
                      i
                        ? (r.$results.scrollTop(0), t.preventDefault(), t.stopPropagation())
                        : o &&
                          (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()),
                          t.preventDefault(),
                          t.stopPropagation());
                    }),
                  this.$results.on('mouseup', '.select2-results__option[aria-selected]', function(n) {
                    var i = t(this),
                      o = e.GetData(this, 'data');
                    'true' !== i.attr('aria-selected')
                      ? r.trigger('select', { originalEvent: n, data: o })
                      : r.options.get('multiple')
                      ? r.trigger('unselect', { originalEvent: n, data: o })
                      : r.trigger('close', {});
                  }),
                  this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function(n) {
                    var i = e.GetData(this, 'data');
                    r.getHighlightedResults().removeClass('select2-results__option--highlighted'),
                      r.trigger('results:focus', { data: i, element: t(this) });
                  });
              }),
              (n.prototype.getHighlightedResults = function() {
                return this.$results.find('.select2-results__option--highlighted');
              }),
              (n.prototype.destroy = function() {
                this.$results.remove();
              }),
              (n.prototype.ensureHighlightVisible = function() {
                var t = this.getHighlightedResults();
                if (0 !== t.length) {
                  var e = this.$results.find('[aria-selected]').index(t),
                    n = this.$results.offset().top,
                    i = t.offset().top,
                    r = this.$results.scrollTop() + (i - n),
                    o = i - n;
                  (r -= 2 * t.outerHeight(!1)),
                    e <= 2
                      ? this.$results.scrollTop(0)
                      : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r);
                }
              }),
              (n.prototype.template = function(e, n) {
                var i = this.options.get('templateResult'),
                  r = this.options.get('escapeMarkup'),
                  o = i(e, n);
                null == o ? (n.style.display = 'none') : 'string' == typeof o ? (n.innerHTML = r(o)) : t(n).append(o);
              }),
              n
            );
          }),
          e.define('select2/keys', [], function() {
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
          e.define('select2/selection/base', ['jquery', '../utils', '../keys'], function(t, e, n) {
            function i(t, e) {
              (this.$element = t), (this.options = e), i.__super__.constructor.call(this);
            }
            return (
              e.Extend(i, e.Observable),
              (i.prototype.render = function() {
                var n = t(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != e.GetData(this.$element[0], 'old-tabindex')
                    ? (this._tabindex = e.GetData(this.$element[0], 'old-tabindex'))
                    : null != this.$element.attr('tabindex') && (this._tabindex = this.$element.attr('tabindex')),
                  n.attr('title', this.$element.attr('title')),
                  n.attr('tabindex', this._tabindex),
                  (this.$selection = n),
                  n
                );
              }),
              (i.prototype.bind = function(t, e) {
                var i = this,
                  r = t.id + '-results';
                (this.container = t),
                  this.$selection.on('focus', function(t) {
                    i.trigger('focus', t);
                  }),
                  this.$selection.on('blur', function(t) {
                    i._handleBlur(t);
                  }),
                  this.$selection.on('keydown', function(t) {
                    i.trigger('keypress', t), t.which === n.SPACE && t.preventDefault();
                  }),
                  t.on('results:focus', function(t) {
                    i.$selection.attr('aria-activedescendant', t.data._resultId);
                  }),
                  t.on('selection:update', function(t) {
                    i.update(t.data);
                  }),
                  t.on('open', function() {
                    i.$selection.attr('aria-expanded', 'true'),
                      i.$selection.attr('aria-owns', r),
                      i._attachCloseHandler(t);
                  }),
                  t.on('close', function() {
                    i.$selection.attr('aria-expanded', 'false'),
                      i.$selection.removeAttr('aria-activedescendant'),
                      i.$selection.removeAttr('aria-owns'),
                      i.$selection.focus(),
                      window.setTimeout(function() {
                        i.$selection.focus();
                      }, 0),
                      i._detachCloseHandler(t);
                  }),
                  t.on('enable', function() {
                    i.$selection.attr('tabindex', i._tabindex);
                  }),
                  t.on('disable', function() {
                    i.$selection.attr('tabindex', '-1');
                  });
              }),
              (i.prototype._handleBlur = function(e) {
                var n = this;
                window.setTimeout(function() {
                  document.activeElement == n.$selection[0] ||
                    t.contains(n.$selection[0], document.activeElement) ||
                    n.trigger('blur', e);
                }, 1);
              }),
              (i.prototype._attachCloseHandler = function(n) {
                t(document.body).on('mousedown.select2.' + n.id, function(n) {
                  var i = t(n.target).closest('.select2');
                  t('.select2.select2-container--open').each(function() {
                    t(this), this != i[0] && e.GetData(this, 'element').select2('close');
                  });
                });
              }),
              (i.prototype._detachCloseHandler = function(e) {
                t(document.body).off('mousedown.select2.' + e.id);
              }),
              (i.prototype.position = function(t, e) {
                e.find('.selection').append(t);
              }),
              (i.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
              }),
              (i.prototype.update = function(t) {
                throw new Error('The `update` method must be defined in child classes.');
              }),
              i
            );
          }),
          e.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function(t, e, n, i) {
            function r() {
              r.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(r, e),
              (r.prototype.render = function() {
                var t = r.__super__.render.call(this);
                return (
                  t.addClass('select2-selection--single'),
                  t.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  t
                );
              }),
              (r.prototype.bind = function(t, e) {
                var n = this;
                r.__super__.bind.apply(this, arguments);
                var i = t.id + '-container';
                this.$selection
                  .find('.select2-selection__rendered')
                  .attr('id', i)
                  .attr('role', 'textbox')
                  .attr('aria-readonly', 'true'),
                  this.$selection.attr('aria-labelledby', i),
                  this.$selection.on('mousedown', function(t) {
                    1 === t.which && n.trigger('toggle', { originalEvent: t });
                  }),
                  this.$selection.on('focus', function(t) {}),
                  this.$selection.on('blur', function(t) {}),
                  t.on('focus', function(e) {
                    t.isOpen() || n.$selection.focus();
                  });
              }),
              (r.prototype.clear = function() {
                var t = this.$selection.find('.select2-selection__rendered');
                t.empty(), t.removeAttr('title');
              }),
              (r.prototype.display = function(t, e) {
                var n = this.options.get('templateSelection');
                return this.options.get('escapeMarkup')(n(t, e));
              }),
              (r.prototype.selectionContainer = function() {
                return t('<span></span>');
              }),
              (r.prototype.update = function(t) {
                if (0 !== t.length) {
                  var e = t[0],
                    n = this.$selection.find('.select2-selection__rendered'),
                    i = this.display(e, n);
                  n.empty().append(i), n.attr('title', e.title || e.text);
                } else this.clear();
              }),
              r
            );
          }),
          e.define('select2/selection/multiple', ['jquery', './base', '../utils'], function(t, e, n) {
            function i(t, e) {
              i.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(i, e),
              (i.prototype.render = function() {
                var t = i.__super__.render.call(this);
                return (
                  t.addClass('select2-selection--multiple'), t.html('<ul class="select2-selection__rendered"></ul>'), t
                );
              }),
              (i.prototype.bind = function(e, r) {
                var o = this;
                i.__super__.bind.apply(this, arguments),
                  this.$selection.on('click', function(t) {
                    o.trigger('toggle', { originalEvent: t });
                  }),
                  this.$selection.on('click', '.select2-selection__choice__remove', function(e) {
                    if (!o.options.get('disabled')) {
                      var i = t(this).parent(),
                        r = n.GetData(i[0], 'data');
                      o.trigger('unselect', { originalEvent: e, data: r });
                    }
                  });
              }),
              (i.prototype.clear = function() {
                var t = this.$selection.find('.select2-selection__rendered');
                t.empty(), t.removeAttr('title');
              }),
              (i.prototype.display = function(t, e) {
                var n = this.options.get('templateSelection');
                return this.options.get('escapeMarkup')(n(t, e));
              }),
              (i.prototype.selectionContainer = function() {
                return t(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                );
              }),
              (i.prototype.update = function(t) {
                if ((this.clear(), 0 !== t.length)) {
                  for (var e = [], i = 0; i < t.length; i++) {
                    var r = t[i],
                      o = this.selectionContainer(),
                      a = this.display(r, o);
                    o.append(a), o.attr('title', r.title || r.text), n.StoreData(o[0], 'data', r), e.push(o);
                  }
                  var s = this.$selection.find('.select2-selection__rendered');
                  n.appendMany(s, e);
                }
              }),
              i
            );
          }),
          e.define('select2/selection/placeholder', ['../utils'], function(t) {
            function e(t, e, n) {
              (this.placeholder = this.normalizePlaceholder(n.get('placeholder'))), t.call(this, e, n);
            }
            return (
              (e.prototype.normalizePlaceholder = function(t, e) {
                return 'string' == typeof e && (e = { id: '', text: e }), e;
              }),
              (e.prototype.createPlaceholder = function(t, e) {
                var n = this.selectionContainer();
                return (
                  n.html(this.display(e)),
                  n.addClass('select2-selection__placeholder').removeClass('select2-selection__choice'),
                  n
                );
              }),
              (e.prototype.update = function(t, e) {
                if (e.length > 1 || (1 == e.length && e[0].id != this.placeholder.id)) return t.call(this, e);
                this.clear();
                var n = this.createPlaceholder(this.placeholder);
                this.$selection.find('.select2-selection__rendered').append(n);
              }),
              e
            );
          }),
          e.define('select2/selection/allowClear', ['jquery', '../keys', '../utils'], function(t, e, n) {
            function i() {}
            return (
              (i.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                  null == this.placeholder &&
                    this.options.get('debug') &&
                    window.console &&
                    console.error &&
                    console.error(
                      'Select2: The `allowClear` option should be used in combination with the `placeholder` option.'
                    ),
                  this.$selection.on('mousedown', '.select2-selection__clear', function(t) {
                    i._handleClear(t);
                  }),
                  e.on('keypress', function(t) {
                    i._handleKeyboardClear(t, e);
                  });
              }),
              (i.prototype._handleClear = function(t, e) {
                if (!this.options.get('disabled')) {
                  var i = this.$selection.find('.select2-selection__clear');
                  if (0 !== i.length) {
                    e.stopPropagation();
                    var r = n.GetData(i[0], 'data'),
                      o = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var a = { data: r };
                    if ((this.trigger('clear', a), a.prevented)) return void this.$element.val(o);
                    for (var s = 0; s < r.length; s++)
                      if ((this.trigger('unselect', (a = { data: r[s] })), a.prevented))
                        return void this.$element.val(o);
                    this.$element.trigger('change'), this.trigger('toggle', {});
                  }
                }
              }),
              (i.prototype._handleKeyboardClear = function(t, n, i) {
                i.isOpen() || (n.which != e.DELETE && n.which != e.BACKSPACE) || this._handleClear(n);
              }),
              (i.prototype.update = function(e, i) {
                if (
                  (e.call(this, i),
                  !(this.$selection.find('.select2-selection__placeholder').length > 0 || 0 === i.length))
                ) {
                  var r = t('<span class="select2-selection__clear">&times;</span>');
                  n.StoreData(r[0], 'data', i), this.$selection.find('.select2-selection__rendered').prepend(r);
                }
              }),
              i
            );
          }),
          e.define('select2/selection/search', ['jquery', '../utils', '../keys'], function(t, e, n) {
            function i(t, e, n) {
              t.call(this, e, n);
            }
            return (
              (i.prototype.render = function(e) {
                var n = t(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = n), (this.$search = n.find('input'));
                var i = e.call(this);
                return this._transferTabIndex(), i;
              }),
              (i.prototype.bind = function(t, i, r) {
                var o = this;
                t.call(this, i, r),
                  i.on('open', function() {
                    o.$search.trigger('focus');
                  }),
                  i.on('close', function() {
                    o.$search.val(''), o.$search.removeAttr('aria-activedescendant'), o.$search.trigger('focus');
                  }),
                  i.on('enable', function() {
                    o.$search.prop('disabled', !1), o._transferTabIndex();
                  }),
                  i.on('disable', function() {
                    o.$search.prop('disabled', !0);
                  }),
                  i.on('focus', function(t) {
                    o.$search.trigger('focus');
                  }),
                  i.on('results:focus', function(t) {
                    o.$search.attr('aria-activedescendant', t.id);
                  }),
                  this.$selection.on('focusin', '.select2-search--inline', function(t) {
                    o.trigger('focus', t);
                  }),
                  this.$selection.on('focusout', '.select2-search--inline', function(t) {
                    o._handleBlur(t);
                  }),
                  this.$selection.on('keydown', '.select2-search--inline', function(t) {
                    if (
                      (t.stopPropagation(),
                      o.trigger('keypress', t),
                      (o._keyUpPrevented = t.isDefaultPrevented()),
                      t.which === n.BACKSPACE && '' === o.$search.val())
                    ) {
                      var i = o.$searchContainer.prev('.select2-selection__choice');
                      if (i.length > 0) {
                        var r = e.GetData(i[0], 'data');
                        o.searchRemoveChoice(r), t.preventDefault();
                      }
                    }
                  });
                var a = document.documentMode,
                  s = a && a <= 11;
                this.$selection.on('input.searchcheck', '.select2-search--inline', function(t) {
                  o.$selection.off(s ? 'input.search input.searchcheck' : 'keyup.search');
                }),
                  this.$selection.on('keyup.search input.search', '.select2-search--inline', function(t) {
                    if (s && 'input' === t.type) o.$selection.off('input.search input.searchcheck');
                    else {
                      var e = t.which;
                      e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && o.handleSearch(t);
                    }
                  });
              }),
              (i.prototype._transferTabIndex = function(t) {
                this.$search.attr('tabindex', this.$selection.attr('tabindex')), this.$selection.attr('tabindex', '-1');
              }),
              (i.prototype.createPlaceholder = function(t, e) {
                this.$search.attr('placeholder', e.text);
              }),
              (i.prototype.update = function(t, e) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr('placeholder', ''),
                  t.call(this, e),
                  this.$selection.find('.select2-selection__rendered').append(this.$searchContainer),
                  this.resizeSearch(),
                  n && (this.$element.find('[data-select2-tag]').length ? this.$element.focus() : this.$search.focus());
              }),
              (i.prototype.handleSearch = function() {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var t = this.$search.val();
                  this.trigger('query', { term: t });
                }
                this._keyUpPrevented = !1;
              }),
              (i.prototype.searchRemoveChoice = function(t, e) {
                this.trigger('unselect', { data: e }), this.$search.val(e.text), this.handleSearch();
              }),
              (i.prototype.resizeSearch = function() {
                var t;
                this.$search.css('width', '25px'),
                  (t =
                    '' !== this.$search.attr('placeholder')
                      ? this.$selection.find('.select2-selection__rendered').innerWidth()
                      : 0.75 * (this.$search.val().length + 1) + 'em'),
                  this.$search.css('width', t);
              }),
              i
            );
          }),
          e.define('select2/selection/eventRelay', ['jquery'], function(t) {
            function e() {}
            return (
              (e.prototype.bind = function(e, n, i) {
                var r = this,
                  o = [
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
                  a = ['opening', 'closing', 'selecting', 'unselecting', 'clearing'];
                e.call(this, n, i),
                  n.on('*', function(e, n) {
                    if (-1 !== t.inArray(e, o)) {
                      var i = t.Event('select2:' + e, { params: (n = n || {}) });
                      r.$element.trigger(i), -1 !== t.inArray(e, a) && (n.prevented = i.isDefaultPrevented());
                    }
                  });
              }),
              e
            );
          }),
          e.define('select2/translation', ['jquery', 'require'], function(t, e) {
            function n(t) {
              this.dict = t || {};
            }
            return (
              (n.prototype.all = function() {
                return this.dict;
              }),
              (n.prototype.get = function(t) {
                return this.dict[t];
              }),
              (n.prototype.extend = function(e) {
                this.dict = t.extend({}, e.all(), this.dict);
              }),
              (n._cache = {}),
              (n.loadPath = function(t) {
                if (!(t in n._cache)) {
                  var i = e(t);
                  n._cache[t] = i;
                }
                return new n(n._cache[t]);
              }),
              n
            );
          }),
          e.define('select2/diacritics', [], function() {
            return {
              '\u24b6': 'A',
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
              '\u24b7': 'B',
              Ｂ: 'B',
              Ḃ: 'B',
              Ḅ: 'B',
              Ḇ: 'B',
              Ƀ: 'B',
              Ƃ: 'B',
              Ɓ: 'B',
              '\u24b8': 'C',
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
              '\u24b9': 'D',
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
              '\u24ba': 'E',
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
              '\u24bb': 'F',
              Ｆ: 'F',
              Ḟ: 'F',
              Ƒ: 'F',
              Ꝼ: 'F',
              '\u24bc': 'G',
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
              '\u24bd': 'H',
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
              '\u24be': 'I',
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
              '\u24bf': 'J',
              Ｊ: 'J',
              Ĵ: 'J',
              Ɉ: 'J',
              '\u24c0': 'K',
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
              '\u24c1': 'L',
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
              '\u24c2': 'M',
              Ｍ: 'M',
              Ḿ: 'M',
              Ṁ: 'M',
              Ṃ: 'M',
              Ɱ: 'M',
              Ɯ: 'M',
              '\u24c3': 'N',
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
              '\u24c4': 'O',
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
              '\u24c5': 'P',
              Ｐ: 'P',
              Ṕ: 'P',
              Ṗ: 'P',
              Ƥ: 'P',
              Ᵽ: 'P',
              Ꝑ: 'P',
              Ꝓ: 'P',
              Ꝕ: 'P',
              '\u24c6': 'Q',
              Ｑ: 'Q',
              Ꝗ: 'Q',
              Ꝙ: 'Q',
              Ɋ: 'Q',
              '\u24c7': 'R',
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
              '\u24c8': 'S',
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
              '\u24c9': 'T',
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
              '\u24ca': 'U',
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
              '\u24cb': 'V',
              Ｖ: 'V',
              Ṽ: 'V',
              Ṿ: 'V',
              Ʋ: 'V',
              Ꝟ: 'V',
              Ʌ: 'V',
              Ꝡ: 'VY',
              '\u24cc': 'W',
              Ｗ: 'W',
              Ẁ: 'W',
              Ẃ: 'W',
              Ŵ: 'W',
              Ẇ: 'W',
              Ẅ: 'W',
              Ẉ: 'W',
              Ⱳ: 'W',
              '\u24cd': 'X',
              Ｘ: 'X',
              Ẋ: 'X',
              Ẍ: 'X',
              '\u24ce': 'Y',
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
              '\u24cf': 'Z',
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
              '\u24d0': 'a',
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
              '\u24d1': 'b',
              ｂ: 'b',
              ḃ: 'b',
              ḅ: 'b',
              ḇ: 'b',
              ƀ: 'b',
              ƃ: 'b',
              ɓ: 'b',
              '\u24d2': 'c',
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
              '\u24d3': 'd',
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
              '\u24d4': 'e',
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
              '\u24d5': 'f',
              ｆ: 'f',
              ḟ: 'f',
              ƒ: 'f',
              ꝼ: 'f',
              '\u24d6': 'g',
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
              '\u24d7': 'h',
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
              '\u24d8': 'i',
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
              '\u24d9': 'j',
              ｊ: 'j',
              ĵ: 'j',
              ǰ: 'j',
              ɉ: 'j',
              '\u24da': 'k',
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
              '\u24db': 'l',
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
              '\u24dc': 'm',
              ｍ: 'm',
              ḿ: 'm',
              ṁ: 'm',
              ṃ: 'm',
              ɱ: 'm',
              ɯ: 'm',
              '\u24dd': 'n',
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
              '\u24de': 'o',
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
              '\u24df': 'p',
              ｐ: 'p',
              ṕ: 'p',
              ṗ: 'p',
              ƥ: 'p',
              ᵽ: 'p',
              ꝑ: 'p',
              ꝓ: 'p',
              ꝕ: 'p',
              '\u24e0': 'q',
              ｑ: 'q',
              ɋ: 'q',
              ꝗ: 'q',
              ꝙ: 'q',
              '\u24e1': 'r',
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
              '\u24e2': 's',
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
              '\u24e3': 't',
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
              '\u24e4': 'u',
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
              '\u24e5': 'v',
              ｖ: 'v',
              ṽ: 'v',
              ṿ: 'v',
              ʋ: 'v',
              ꝟ: 'v',
              ʌ: 'v',
              ꝡ: 'vy',
              '\u24e6': 'w',
              ｗ: 'w',
              ẁ: 'w',
              ẃ: 'w',
              ŵ: 'w',
              ẇ: 'w',
              ẅ: 'w',
              ẘ: 'w',
              ẉ: 'w',
              ⱳ: 'w',
              '\u24e7': 'x',
              ｘ: 'x',
              ẋ: 'x',
              ẍ: 'x',
              '\u24e8': 'y',
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
              '\u24e9': 'z',
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
              Ά: '\u0391',
              Έ: '\u0395',
              Ή: '\u0397',
              Ί: '\u0399',
              Ϊ: '\u0399',
              Ό: '\u039f',
              Ύ: '\u03a5',
              Ϋ: '\u03a5',
              Ώ: '\u03a9',
              ά: '\u03b1',
              έ: '\u03b5',
              ή: '\u03b7',
              ί: '\u03b9',
              ϊ: '\u03b9',
              ΐ: '\u03b9',
              ό: '\u03bf',
              ύ: '\u03c5',
              ϋ: '\u03c5',
              ΰ: '\u03c5',
              ω: '\u03c9',
              ς: '\u03c3'
            };
          }),
          e.define('select2/data/base', ['../utils'], function(t) {
            function e(t, n) {
              e.__super__.constructor.call(this);
            }
            return (
              t.Extend(e, t.Observable),
              (e.prototype.current = function(t) {
                throw new Error('The `current` method must be defined in child classes.');
              }),
              (e.prototype.query = function(t, e) {
                throw new Error('The `query` method must be defined in child classes.');
              }),
              (e.prototype.bind = function(t, e) {}),
              (e.prototype.destroy = function() {}),
              (e.prototype.generateResultId = function(e, n) {
                var i = e.id + '-result-';
                return (i += t.generateChars(4)) + (null != n.id ? '-' + n.id.toString() : '-' + t.generateChars(4));
              }),
              e
            );
          }),
          e.define('select2/data/select', ['./base', '../utils', 'jquery'], function(t, e, n) {
            function i(t, e) {
              (this.$element = t), (this.options = e), i.__super__.constructor.call(this);
            }
            return (
              e.Extend(i, t),
              (i.prototype.current = function(t) {
                var e = [],
                  i = this;
                this.$element.find(':selected').each(function() {
                  var t = n(this),
                    r = i.item(t);
                  e.push(r);
                }),
                  t(e);
              }),
              (i.prototype.select = function(t) {
                var e = this;
                if (((t.selected = !0), n(t.element).is('option')))
                  return (t.element.selected = !0), void this.$element.trigger('change');
                this.$element.prop('multiple')
                  ? this.current(function(i) {
                      var r = [];
                      (t = [t]).push.apply(t, i);
                      for (var o = 0; o < t.length; o++) {
                        var a = t[o].id;
                        -1 === n.inArray(a, r) && r.push(a);
                      }
                      e.$element.val(r), e.$element.trigger('change');
                    })
                  : (this.$element.val(t.id), this.$element.trigger('change'));
              }),
              (i.prototype.unselect = function(t) {
                var e = this;
                if (this.$element.prop('multiple')) {
                  if (((t.selected = !1), n(t.element).is('option')))
                    return (t.element.selected = !1), void this.$element.trigger('change');
                  this.current(function(i) {
                    for (var r = [], o = 0; o < i.length; o++) {
                      var a = i[o].id;
                      a !== t.id && -1 === n.inArray(a, r) && r.push(a);
                    }
                    e.$element.val(r), e.$element.trigger('change');
                  });
                }
              }),
              (i.prototype.bind = function(t, e) {
                var n = this;
                (this.container = t),
                  t.on('select', function(t) {
                    n.select(t.data);
                  }),
                  t.on('unselect', function(t) {
                    n.unselect(t.data);
                  });
              }),
              (i.prototype.destroy = function() {
                this.$element.find('*').each(function() {
                  e.RemoveData(this);
                });
              }),
              (i.prototype.query = function(t, e) {
                var i = [],
                  r = this;
                this.$element.children().each(function() {
                  var e = n(this);
                  if (e.is('option') || e.is('optgroup')) {
                    var o = r.item(e),
                      a = r.matches(t, o);
                    null !== a && i.push(a);
                  }
                }),
                  e({ results: i });
              }),
              (i.prototype.addOptions = function(t) {
                e.appendMany(this.$element, t);
              }),
              (i.prototype.option = function(t) {
                var i;
                t.children
                  ? ((i = document.createElement('optgroup')).label = t.text)
                  : void 0 !== (i = document.createElement('option')).textContent
                  ? (i.textContent = t.text)
                  : (i.innerText = t.text),
                  void 0 !== t.id && (i.value = t.id),
                  t.disabled && (i.disabled = !0),
                  t.selected && (i.selected = !0),
                  t.title && (i.title = t.title);
                var r = n(i),
                  o = this._normalizeItem(t);
                return (o.element = i), e.StoreData(i, 'data', o), r;
              }),
              (i.prototype.item = function(t) {
                var i = {};
                if (null != (i = e.GetData(t[0], 'data'))) return i;
                if (t.is('option'))
                  i = {
                    id: t.val(),
                    text: t.text(),
                    disabled: t.prop('disabled'),
                    selected: t.prop('selected'),
                    title: t.prop('title')
                  };
                else if (t.is('optgroup')) {
                  i = { text: t.prop('label'), children: [], title: t.prop('title') };
                  for (var r = t.children('option'), o = [], a = 0; a < r.length; a++) {
                    var s = n(r[a]),
                      l = this.item(s);
                    o.push(l);
                  }
                  i.children = o;
                }
                return ((i = this._normalizeItem(i)).element = t[0]), e.StoreData(t[0], 'data', i), i;
              }),
              (i.prototype._normalizeItem = function(t) {
                return (
                  t !== Object(t) && (t = { id: t, text: t }),
                  null != (t = n.extend({}, { text: '' }, t)).id && (t.id = t.id.toString()),
                  null != t.text && (t.text = t.text.toString()),
                  null == t._resultId &&
                    t.id &&
                    null != this.container &&
                    (t._resultId = this.generateResultId(this.container, t)),
                  n.extend({}, { selected: !1, disabled: !1 }, t)
                );
              }),
              (i.prototype.matches = function(t, e) {
                return this.options.get('matcher')(t, e);
              }),
              i
            );
          }),
          e.define('select2/data/array', ['./select', '../utils', 'jquery'], function(t, e, n) {
            function i(t, e) {
              var n = e.get('data') || [];
              i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n));
            }
            return (
              e.Extend(i, t),
              (i.prototype.select = function(t) {
                var e = this.$element.find('option').filter(function(e, n) {
                  return n.value == t.id.toString();
                });
                0 === e.length && ((e = this.option(t)), this.addOptions(e)), i.__super__.select.call(this, t);
              }),
              (i.prototype.convertToOptions = function(t) {
                function i(t) {
                  return function() {
                    return n(this).val() == t.id;
                  };
                }
                for (
                  var r = this,
                    o = this.$element.find('option'),
                    a = o
                      .map(function() {
                        return r.item(n(this)).id;
                      })
                      .get(),
                    s = [],
                    l = 0;
                  l < t.length;
                  l++
                ) {
                  var u = this._normalizeItem(t[l]);
                  if (n.inArray(u.id, a) >= 0) {
                    var c = o.filter(i(u)),
                      d = this.item(c),
                      h = n.extend(!0, {}, u, d),
                      f = this.option(h);
                    c.replaceWith(f);
                  } else {
                    var p = this.option(u);
                    if (u.children) {
                      var g = this.convertToOptions(u.children);
                      e.appendMany(p, g);
                    }
                    s.push(p);
                  }
                }
                return s;
              }),
              i
            );
          }),
          e.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function(t, e, n) {
            function i(t, e) {
              (this.ajaxOptions = this._applyDefaults(e.get('ajax'))),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                i.__super__.constructor.call(this, t, e);
            }
            return (
              e.Extend(i, t),
              (i.prototype._applyDefaults = function(t) {
                return n.extend(
                  {},
                  {
                    data: function(t) {
                      return n.extend({}, t, { q: t.term });
                    },
                    transport: function(t, e, i) {
                      var r = n.ajax(t);
                      return r.then(e), r.fail(i), r;
                    }
                  },
                  t,
                  !0
                );
              }),
              (i.prototype.processResults = function(t) {
                return t;
              }),
              (i.prototype.query = function(t, e) {
                function i() {
                  var i = o.transport(
                    o,
                    function(i) {
                      var o = r.processResults(i, t);
                      r.options.get('debug') &&
                        window.console &&
                        console.error &&
                        ((o && o.results && n.isArray(o.results)) ||
                          console.error(
                            'Select2: The AJAX results did not return an array in the `results` key of the response.'
                          )),
                        e(o);
                    },
                    function() {
                      ('status' in i && (0 === i.status || '0' === i.status)) ||
                        r.trigger('results:message', { message: 'errorLoading' });
                    }
                  );
                  r._request = i;
                }
                var r = this;
                null != this._request &&
                  (n.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
                var o = n.extend({ type: 'GET' }, this.ajaxOptions);
                'function' == typeof o.url && (o.url = o.url.call(this.$element, t)),
                  'function' == typeof o.data && (o.data = o.data.call(this.$element, t)),
                  this.ajaxOptions.delay && null != t.term
                    ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)))
                    : i();
              }),
              i
            );
          }),
          e.define('select2/data/tags', ['jquery'], function(t) {
            function e(e, n, i) {
              var r = i.get('tags'),
                o = i.get('createTag');
              void 0 !== o && (this.createTag = o);
              var a = i.get('insertTag');
              if ((void 0 !== a && (this.insertTag = a), e.call(this, n, i), t.isArray(r)))
                for (var s = 0; s < r.length; s++) {
                  var l = this._normalizeItem(r[s]),
                    u = this.option(l);
                  this.$element.append(u);
                }
            }
            return (
              (e.prototype.query = function(t, e, n) {
                var i = this;
                this._removeOldTags(),
                  t.call(
                    this,
                    e,
                    null != e.term && null == e.page
                      ? function t(r, o) {
                          for (var a = r.results, s = 0; s < a.length; s++) {
                            var l = a[s],
                              u = null != l.children && !t({ results: l.children }, !0);
                            if ((l.text || '').toUpperCase() === (e.term || '').toUpperCase() || u)
                              return !o && ((r.data = a), void n(r));
                          }
                          if (o) return !0;
                          var c = i.createTag(e);
                          if (null != c) {
                            var d = i.option(c);
                            d.attr('data-select2-tag', !0), i.addOptions([d]), i.insertTag(a, c);
                          }
                          (r.results = a), n(r);
                        }
                      : n
                  );
              }),
              (e.prototype.createTag = function(e, n) {
                var i = t.trim(n.term);
                return '' === i ? null : { id: i, text: i };
              }),
              (e.prototype.insertTag = function(t, e, n) {
                e.unshift(n);
              }),
              (e.prototype._removeOldTags = function(e) {
                this.$element.find('option[data-select2-tag]').each(function() {
                  this.selected || t(this).remove();
                });
              }),
              e
            );
          }),
          e.define('select2/data/tokenizer', ['jquery'], function(t) {
            function e(t, e, n) {
              var i = n.get('tokenizer');
              void 0 !== i && (this.tokenizer = i), t.call(this, e, n);
            }
            return (
              (e.prototype.bind = function(t, e, n) {
                t.call(this, e, n),
                  (this.$search = e.dropdown.$search || e.selection.$search || n.find('.select2-search__field'));
              }),
              (e.prototype.query = function(e, n, i) {
                var r = this;
                n.term = n.term || '';
                var o = this.tokenizer(n, this.options, function(e) {
                  var n = r._normalizeItem(e);
                  if (
                    !r.$element.find('option').filter(function() {
                      return t(this).val() === n.id;
                    }).length
                  ) {
                    var i = r.option(n);
                    i.attr('data-select2-tag', !0), r._removeOldTags(), r.addOptions([i]);
                  }
                  r.trigger('select', { data: n });
                });
                o.term !== n.term &&
                  (this.$search.length && (this.$search.val(o.term), this.$search.focus()), (n.term = o.term)),
                  e.call(this, n, i);
              }),
              (e.prototype.tokenizer = function(e, n, i, r) {
                for (
                  var o = i.get('tokenSeparators') || [],
                    a = n.term,
                    s = 0,
                    l =
                      this.createTag ||
                      function(t) {
                        return { id: t.term, text: t.term };
                      };
                  s < a.length;

                )
                  if (-1 !== t.inArray(a[s], o)) {
                    var u = a.substr(0, s),
                      c = l(t.extend({}, n, { term: u }));
                    null != c ? (r(c), (a = a.substr(s + 1) || ''), (s = 0)) : s++;
                  } else s++;
                return { term: a };
              }),
              e
            );
          }),
          e.define('select2/data/minimumInputLength', [], function() {
            function t(t, e, n) {
              (this.minimumInputLength = n.get('minimumInputLength')), t.call(this, e, n);
            }
            return (
              (t.prototype.query = function(t, e, n) {
                (e.term = e.term || ''),
                  e.term.length < this.minimumInputLength
                    ? this.trigger('results:message', {
                        message: 'inputTooShort',
                        args: { minimum: this.minimumInputLength, input: e.term, params: e }
                      })
                    : t.call(this, e, n);
              }),
              t
            );
          }),
          e.define('select2/data/maximumInputLength', [], function() {
            function t(t, e, n) {
              (this.maximumInputLength = n.get('maximumInputLength')), t.call(this, e, n);
            }
            return (
              (t.prototype.query = function(t, e, n) {
                (e.term = e.term || ''),
                  this.maximumInputLength > 0 && e.term.length > this.maximumInputLength
                    ? this.trigger('results:message', {
                        message: 'inputTooLong',
                        args: { maximum: this.maximumInputLength, input: e.term, params: e }
                      })
                    : t.call(this, e, n);
              }),
              t
            );
          }),
          e.define('select2/data/maximumSelectionLength', [], function() {
            function t(t, e, n) {
              (this.maximumSelectionLength = n.get('maximumSelectionLength')), t.call(this, e, n);
            }
            return (
              (t.prototype.query = function(t, e, n) {
                var i = this;
                this.current(function(r) {
                  i.maximumSelectionLength > 0 && (null != r ? r.length : 0) >= i.maximumSelectionLength
                    ? i.trigger('results:message', {
                        message: 'maximumSelected',
                        args: { maximum: i.maximumSelectionLength }
                      })
                    : t.call(i, e, n);
                });
              }),
              t
            );
          }),
          e.define('select2/dropdown', ['jquery', './utils'], function(t, e) {
            function n(t, e) {
              (this.$element = t), (this.options = e), n.__super__.constructor.call(this);
            }
            return (
              e.Extend(n, e.Observable),
              (n.prototype.render = function() {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr('dir', this.options.get('dir')), (this.$dropdown = e), e;
              }),
              (n.prototype.bind = function() {}),
              (n.prototype.position = function(t, e) {}),
              (n.prototype.destroy = function() {
                this.$dropdown.remove();
              }),
              n
            );
          }),
          e.define('select2/dropdown/search', ['jquery', '../utils'], function(t, e) {
            function n() {}
            return (
              (n.prototype.render = function(e) {
                var n = e.call(this),
                  i = t(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'
                  );
                return (this.$searchContainer = i), (this.$search = i.find('input')), n.prepend(i), n;
              }),
              (n.prototype.bind = function(e, n, i) {
                var r = this;
                e.call(this, n, i),
                  this.$search.on('keydown', function(t) {
                    r.trigger('keypress', t), (r._keyUpPrevented = t.isDefaultPrevented());
                  }),
                  this.$search.on('input', function(e) {
                    t(this).off('keyup');
                  }),
                  this.$search.on('keyup input', function(t) {
                    r.handleSearch(t);
                  }),
                  n.on('open', function() {
                    r.$search.attr('tabindex', 0),
                      r.$search.focus(),
                      window.setTimeout(function() {
                        r.$search.focus();
                      }, 0);
                  }),
                  n.on('close', function() {
                    r.$search.attr('tabindex', -1), r.$search.val(''), r.$search.blur();
                  }),
                  n.on('focus', function() {
                    n.isOpen() || r.$search.focus();
                  }),
                  n.on('results:all', function(t) {
                    (null != t.query.term && '' !== t.query.term) ||
                      (r.showSearch(t)
                        ? r.$searchContainer.removeClass('select2-search--hide')
                        : r.$searchContainer.addClass('select2-search--hide'));
                  });
              }),
              (n.prototype.handleSearch = function(t) {
                if (!this._keyUpPrevented) {
                  var e = this.$search.val();
                  this.trigger('query', { term: e });
                }
                this._keyUpPrevented = !1;
              }),
              (n.prototype.showSearch = function(t, e) {
                return !0;
              }),
              n
            );
          }),
          e.define('select2/dropdown/hidePlaceholder', [], function() {
            function t(t, e, n, i) {
              (this.placeholder = this.normalizePlaceholder(n.get('placeholder'))), t.call(this, e, n, i);
            }
            return (
              (t.prototype.append = function(t, e) {
                (e.results = this.removePlaceholder(e.results)), t.call(this, e);
              }),
              (t.prototype.normalizePlaceholder = function(t, e) {
                return 'string' == typeof e && (e = { id: '', text: e }), e;
              }),
              (t.prototype.removePlaceholder = function(t, e) {
                for (var n = e.slice(0), i = e.length - 1; i >= 0; i--)
                  this.placeholder.id === e[i].id && n.splice(i, 1);
                return n;
              }),
              t
            );
          }),
          e.define('select2/dropdown/infiniteScroll', ['jquery'], function(t) {
            function e(t, e, n, i) {
              (this.lastParams = {}),
                t.call(this, e, n, i),
                (this.$loadingMore = this.createLoadingMore()),
                (this.loading = !1);
            }
            return (
              (e.prototype.append = function(t, e) {
                this.$loadingMore.remove(),
                  (this.loading = !1),
                  t.call(this, e),
                  this.showLoadingMore(e) && this.$results.append(this.$loadingMore);
              }),
              (e.prototype.bind = function(e, n, i) {
                var r = this;
                e.call(this, n, i),
                  n.on('query', function(t) {
                    (r.lastParams = t), (r.loading = !0);
                  }),
                  n.on('query:append', function(t) {
                    (r.lastParams = t), (r.loading = !0);
                  }),
                  this.$results.on('scroll', function() {
                    var e = t.contains(document.documentElement, r.$loadingMore[0]);
                    !r.loading &&
                      e &&
                      r.$results.offset().top + r.$results.outerHeight(!1) + 50 >=
                        r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1) &&
                      r.loadMore();
                  });
              }),
              (e.prototype.loadMore = function() {
                this.loading = !0;
                var e = t.extend({}, { page: 1 }, this.lastParams);
                e.page++, this.trigger('query:append', e);
              }),
              (e.prototype.showLoadingMore = function(t, e) {
                return e.pagination && e.pagination.more;
              }),
              (e.prototype.createLoadingMore = function() {
                var e = t(
                    '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                  ),
                  n = this.options.get('translations').get('loadingMore');
                return e.html(n(this.lastParams)), e;
              }),
              e
            );
          }),
          e.define('select2/dropdown/attachBody', ['jquery', '../utils'], function(t, e) {
            function n(e, n, i) {
              (this.$dropdownParent = i.get('dropdownParent') || t(document.body)), e.call(this, n, i);
            }
            return (
              (n.prototype.bind = function(t, e, n) {
                var i = this,
                  r = !1;
                t.call(this, e, n),
                  e.on('open', function() {
                    i._showDropdown(),
                      i._attachPositioningHandler(e),
                      r ||
                        ((r = !0),
                        e.on('results:all', function() {
                          i._positionDropdown(), i._resizeDropdown();
                        }),
                        e.on('results:append', function() {
                          i._positionDropdown(), i._resizeDropdown();
                        }));
                  }),
                  e.on('close', function() {
                    i._hideDropdown(), i._detachPositioningHandler(e);
                  }),
                  this.$dropdownContainer.on('mousedown', function(t) {
                    t.stopPropagation();
                  });
              }),
              (n.prototype.destroy = function(t) {
                t.call(this), this.$dropdownContainer.remove();
              }),
              (n.prototype.position = function(t, e, n) {
                e.attr('class', n.attr('class')),
                  e.removeClass('select2'),
                  e.addClass('select2-container--open'),
                  e.css({ position: 'absolute', top: -999999 }),
                  (this.$container = n);
              }),
              (n.prototype.render = function(e) {
                var n = t('<span></span>'),
                  i = e.call(this);
                return n.append(i), (this.$dropdownContainer = n), n;
              }),
              (n.prototype._hideDropdown = function(t) {
                this.$dropdownContainer.detach();
              }),
              (n.prototype._attachPositioningHandler = function(n, i) {
                var r = this,
                  o = 'scroll.select2.' + i.id,
                  a = 'resize.select2.' + i.id,
                  s = 'orientationchange.select2.' + i.id,
                  l = this.$container.parents().filter(e.hasScroll);
                l.each(function() {
                  e.StoreData(this, 'select2-scroll-position', { x: t(this).scrollLeft(), y: t(this).scrollTop() });
                }),
                  l.on(o, function(n) {
                    var i = e.GetData(this, 'select2-scroll-position');
                    t(this).scrollTop(i.y);
                  }),
                  t(window).on(o + ' ' + a + ' ' + s, function(t) {
                    r._positionDropdown(), r._resizeDropdown();
                  });
              }),
              (n.prototype._detachPositioningHandler = function(n, i) {
                var r = 'scroll.select2.' + i.id,
                  o = 'resize.select2.' + i.id,
                  a = 'orientationchange.select2.' + i.id;
                this.$container
                  .parents()
                  .filter(e.hasScroll)
                  .off(r),
                  t(window).off(r + ' ' + o + ' ' + a);
              }),
              (n.prototype._positionDropdown = function() {
                var e = t(window),
                  n = this.$dropdown.hasClass('select2-dropdown--above'),
                  i = this.$dropdown.hasClass('select2-dropdown--below'),
                  r = null,
                  o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var a = { height: this.$container.outerHeight(!1) };
                (a.top = o.top), (a.bottom = o.top + a.height);
                var s = this.$dropdown.outerHeight(!1),
                  l = e.scrollTop(),
                  u = e.scrollTop() + e.height(),
                  c = l < o.top - s,
                  d = u > o.bottom + s,
                  h = { left: o.left, top: a.bottom },
                  f = this.$dropdownParent;
                'static' === f.css('position') && (f = f.offsetParent());
                var p = f.offset();
                (h.top -= p.top),
                  (h.left -= p.left),
                  n || i || (r = 'below'),
                  d || !c || n ? !c && d && n && (r = 'below') : (r = 'above'),
                  ('above' == r || (n && 'below' !== r)) && (h.top = a.top - p.top - s),
                  null != r &&
                    (this.$dropdown
                      .removeClass('select2-dropdown--below select2-dropdown--above')
                      .addClass('select2-dropdown--' + r),
                    this.$container
                      .removeClass('select2-container--below select2-container--above')
                      .addClass('select2-container--' + r)),
                  this.$dropdownContainer.css(h);
              }),
              (n.prototype._resizeDropdown = function() {
                var t = { width: this.$container.outerWidth(!1) + 'px' };
                this.options.get('dropdownAutoWidth') &&
                  ((t.minWidth = t.width), (t.position = 'relative'), (t.width = 'auto')),
                  this.$dropdown.css(t);
              }),
              (n.prototype._showDropdown = function(t) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              n
            );
          }),
          e.define('select2/dropdown/minimumResultsForSearch', [], function() {
            function t(t, e, n, i) {
              (this.minimumResultsForSearch = n.get('minimumResultsForSearch')),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                t.call(this, e, n, i);
            }
            return (
              (t.prototype.showSearch = function(t, e) {
                return (
                  !(
                    (function t(e) {
                      for (var n = 0, i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.children ? (n += t(r.children)) : n++;
                      }
                      return n;
                    })(e.data.results) < this.minimumResultsForSearch
                  ) && t.call(this, e)
                );
              }),
              t
            );
          }),
          e.define('select2/dropdown/selectOnClose', ['../utils'], function(t) {
            function e() {}
            return (
              (e.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                  e.on('close', function(t) {
                    i._handleSelectOnClose(t);
                  });
              }),
              (e.prototype._handleSelectOnClose = function(e, n) {
                if (n && null != n.originalSelect2Event) {
                  var i = n.originalSelect2Event;
                  if ('select' === i._type || 'unselect' === i._type) return;
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                  var o = t.GetData(r[0], 'data');
                  (null != o.element && o.element.selected) ||
                    (null == o.element && o.selected) ||
                    this.trigger('select', { data: o });
                }
              }),
              e
            );
          }),
          e.define('select2/dropdown/closeOnSelect', [], function() {
            function t() {}
            return (
              (t.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                  e.on('select', function(t) {
                    i._selectTriggered(t);
                  }),
                  e.on('unselect', function(t) {
                    i._selectTriggered(t);
                  });
              }),
              (t.prototype._selectTriggered = function(t, e) {
                var n = e.originalEvent;
                (n && n.ctrlKey) || this.trigger('close', { originalEvent: n, originalSelect2Event: e });
              }),
              t
            );
          }),
          e.define('select2/i18n/en', [], function() {
            return {
              errorLoading: function() {
                return 'The results could not be loaded.';
              },
              inputTooLong: function(t) {
                var e = t.input.length - t.maximum,
                  n = 'Please delete ' + e + ' character';
                return 1 != e && (n += 's'), n;
              },
              inputTooShort: function(t) {
                return 'Please enter ' + (t.minimum - t.input.length) + ' or more characters';
              },
              loadingMore: function() {
                return 'Loading more results\u2026';
              },
              maximumSelected: function(t) {
                var e = 'You can only select ' + t.maximum + ' item';
                return 1 != t.maximum && (e += 's'), e;
              },
              noResults: function() {
                return 'No results found';
              },
              searching: function() {
                return 'Searching\u2026';
              }
            };
          }),
          e.define(
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
            function(t, e, n, i, r, o, a, s, l, u, c, d, h, f, p, g, m, v, y, b, x, _, w, C, S, T, k, D, A) {
              function E() {
                this.reset();
              }
              return (
                (E.prototype.apply = function(d) {
                  if (null == (d = t.extend(!0, {}, this.defaults, d)).dataAdapter) {
                    if (
                      ((d.dataAdapter = null != d.ajax ? p : null != d.data ? f : h),
                      d.minimumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, v)),
                      d.maximumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, y)),
                      d.maximumSelectionLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, b)),
                      d.tags && (d.dataAdapter = u.Decorate(d.dataAdapter, g)),
                      (null == d.tokenSeparators && null == d.tokenizer) ||
                        (d.dataAdapter = u.Decorate(d.dataAdapter, m)),
                      null != d.query)
                    ) {
                      var A = e(d.amdBase + 'compat/query');
                      d.dataAdapter = u.Decorate(d.dataAdapter, A);
                    }
                    if (null != d.initSelection) {
                      var E = e(d.amdBase + 'compat/initSelection');
                      d.dataAdapter = u.Decorate(d.dataAdapter, E);
                    }
                  }
                  if (
                    (null == d.resultsAdapter &&
                      ((d.resultsAdapter = n),
                      null != d.ajax && (d.resultsAdapter = u.Decorate(d.resultsAdapter, C)),
                      null != d.placeholder && (d.resultsAdapter = u.Decorate(d.resultsAdapter, w)),
                      d.selectOnClose && (d.resultsAdapter = u.Decorate(d.resultsAdapter, k))),
                    null == d.dropdownAdapter)
                  ) {
                    if (d.multiple) d.dropdownAdapter = x;
                    else {
                      var I = u.Decorate(x, _);
                      d.dropdownAdapter = I;
                    }
                    if (
                      (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, T)),
                      d.closeOnSelect && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, D)),
                      null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass)
                    ) {
                      var M = e(d.amdBase + 'compat/dropdownCss');
                      d.dropdownAdapter = u.Decorate(d.dropdownAdapter, M);
                    }
                    d.dropdownAdapter = u.Decorate(d.dropdownAdapter, S);
                  }
                  if (null == d.selectionAdapter) {
                    if (
                      ((d.selectionAdapter = d.multiple ? r : i),
                      null != d.placeholder && (d.selectionAdapter = u.Decorate(d.selectionAdapter, o)),
                      d.allowClear && (d.selectionAdapter = u.Decorate(d.selectionAdapter, a)),
                      d.multiple && (d.selectionAdapter = u.Decorate(d.selectionAdapter, s)),
                      null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass)
                    ) {
                      var O = e(d.amdBase + 'compat/containerCss');
                      d.selectionAdapter = u.Decorate(d.selectionAdapter, O);
                    }
                    d.selectionAdapter = u.Decorate(d.selectionAdapter, l);
                  }
                  if ('string' == typeof d.language)
                    if (d.language.indexOf('-') > 0) {
                      var P = d.language.split('-');
                      d.language = [d.language, P[0]];
                    } else d.language = [d.language];
                  if (t.isArray(d.language)) {
                    var N = new c();
                    d.language.push('en');
                    for (var L = d.language, R = 0; R < L.length; R++) {
                      var F = L[R],
                        j = {};
                      try {
                        j = c.loadPath(F);
                      } catch (t) {
                        try {
                          j = c.loadPath((F = this.defaults.amdLanguageBase + F));
                        } catch (t) {
                          d.debug &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The language file for "' +
                                F +
                                '" could not be automatically loaded. A fallback will be used instead.'
                            );
                          continue;
                        }
                      }
                      N.extend(j);
                    }
                    d.translations = N;
                  } else {
                    var H = c.loadPath(this.defaults.amdLanguageBase + 'en'),
                      W = new c(d.language);
                    W.extend(H), (d.translations = W);
                  }
                  return d;
                }),
                (E.prototype.reset = function() {
                  function e(t) {
                    return t.replace(/[^\u0000-\u007E]/g, function(t) {
                      return d[t] || t;
                    });
                  }
                  this.defaults = {
                    amdBase: './',
                    amdLanguageBase: './i18n/',
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: u.escapeMarkup,
                    language: A,
                    matcher: function n(i, r) {
                      if ('' === t.trim(i.term)) return r;
                      if (r.children && r.children.length > 0) {
                        for (var o = t.extend(!0, {}, r), a = r.children.length - 1; a >= 0; a--)
                          null == n(i, r.children[a]) && o.children.splice(a, 1);
                        return o.children.length > 0 ? o : n(i, o);
                      }
                      var s = e(r.text).toUpperCase(),
                        l = e(i.term).toUpperCase();
                      return s.indexOf(l) > -1 ? r : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(t) {
                      return t;
                    },
                    templateResult: function(t) {
                      return t.text;
                    },
                    templateSelection: function(t) {
                      return t.text;
                    },
                    theme: 'default',
                    width: 'resolve'
                  };
                }),
                (E.prototype.set = function(e, n) {
                  var i = {};
                  i[t.camelCase(e)] = n;
                  var r = u._convertData(i);
                  t.extend(!0, this.defaults, r);
                }),
                new E()
              );
            }
          ),
          e.define('select2/options', ['require', 'jquery', './defaults', './utils'], function(t, e, n, i) {
            function r(e, r) {
              if (
                ((this.options = e),
                null != r && this.fromElement(r),
                (this.options = n.apply(this.options)),
                r && r.is('input'))
              ) {
                var o = t(this.get('amdBase') + 'compat/inputData');
                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o);
              }
            }
            return (
              (r.prototype.fromElement = function(t) {
                var n,
                  r = ['select2'];
                null == this.options.multiple && (this.options.multiple = t.prop('multiple')),
                  null == this.options.disabled && (this.options.disabled = t.prop('disabled')),
                  null == this.options.language &&
                    (t.prop('lang')
                      ? (this.options.language = t.prop('lang').toLowerCase())
                      : t.closest('[lang]').prop('lang') && (this.options.language = t.closest('[lang]').prop('lang'))),
                  null == this.options.dir &&
                    (this.options.dir = t.prop('dir')
                      ? t.prop('dir')
                      : t.closest('[dir]').prop('dir')
                      ? t.closest('[dir]').prop('dir')
                      : 'ltr'),
                  t.prop('disabled', this.options.disabled),
                  t.prop('multiple', this.options.multiple),
                  i.GetData(t[0], 'select2Tags') &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    i.StoreData(t[0], 'data', i.GetData(t[0], 'select2Tags')),
                    i.StoreData(t[0], 'tags', !0)),
                  i.GetData(t[0], 'ajaxUrl') &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.'
                      ),
                    t.attr('ajax--url', i.GetData(t[0], 'ajaxUrl')),
                    i.StoreData(t[0], 'ajax-Url', i.GetData(t[0], 'ajaxUrl'))),
                  (n =
                    e.fn.jquery && '1.' == e.fn.jquery.substr(0, 2) && t[0].dataset
                      ? e.extend(!0, {}, t[0].dataset, i.GetData(t[0]))
                      : i.GetData(t[0]));
                var o = e.extend(!0, {}, n);
                for (var a in (o = i._convertData(o)))
                  e.inArray(a, r) > -1 ||
                    (e.isPlainObject(this.options[a]) ? e.extend(this.options[a], o[a]) : (this.options[a] = o[a]));
                return this;
              }),
              (r.prototype.get = function(t) {
                return this.options[t];
              }),
              (r.prototype.set = function(t, e) {
                this.options[t] = e;
              }),
              r
            );
          }),
          e.define('select2/core', ['jquery', './options', './utils', './keys'], function(t, e, n, i) {
            var r = function(t, i) {
              null != n.GetData(t[0], 'select2') && n.GetData(t[0], 'select2').destroy(),
                (this.$element = t),
                (this.id = this._generateId(t)),
                (this.options = new e((i = i || {}), t)),
                r.__super__.constructor.call(this);
              var o = t.attr('tabindex') || 0;
              n.StoreData(t[0], 'old-tabindex', o), t.attr('tabindex', '-1');
              var a = this.options.get('dataAdapter');
              this.dataAdapter = new a(t, this.options);
              var s = this.render();
              this._placeContainer(s);
              var l = this.options.get('selectionAdapter');
              (this.selection = new l(t, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, s);
              var u = this.options.get('dropdownAdapter');
              (this.dropdown = new u(t, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, s);
              var c = this.options.get('resultsAdapter');
              (this.results = new c(t, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var d = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function(t) {
                  d.trigger('selection:update', { data: t });
                }),
                t.addClass('select2-hidden-accessible'),
                t.attr('aria-hidden', 'true'),
                this._syncAttributes(),
                n.StoreData(t[0], 'select2', this),
                t.data('select2', this);
            };
            return (
              n.Extend(r, n.Observable),
              (r.prototype._generateId = function(t) {
                return (
                  'select2-' +
                  (null != t.attr('id')
                    ? t.attr('id')
                    : null != t.attr('name')
                    ? t.attr('name') + '-' + n.generateChars(2)
                    : n.generateChars(4)
                  ).replace(/(:|\.|\[|\]|,)/g, '')
                );
              }),
              (r.prototype._placeContainer = function(t) {
                t.insertAfter(this.$element);
                var e = this._resolveWidth(this.$element, this.options.get('width'));
                null != e && t.css('width', e);
              }),
              (r.prototype._resolveWidth = function(t, e) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ('resolve' == e) {
                  var i = this._resolveWidth(t, 'style');
                  return null != i ? i : this._resolveWidth(t, 'element');
                }
                if ('element' == e) {
                  var r = t.outerWidth(!1);
                  return r <= 0 ? 'auto' : r + 'px';
                }
                if ('style' == e) {
                  var o = t.attr('style');
                  if ('string' != typeof o) return null;
                  for (var a = o.split(';'), s = 0, l = a.length; s < l; s += 1) {
                    var u = a[s].replace(/\s/g, '').match(n);
                    if (null !== u && u.length >= 1) return u[1];
                  }
                  return null;
                }
                return e;
              }),
              (r.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (r.prototype._registerDomEvents = function() {
                var e = this;
                this.$element.on('change.select2', function() {
                  e.dataAdapter.current(function(t) {
                    e.trigger('selection:update', { data: t });
                  });
                }),
                  this.$element.on('focus.select2', function(t) {
                    e.trigger('focus', t);
                  }),
                  (this._syncA = n.bind(this._syncAttributes, this)),
                  (this._syncS = n.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent && this.$element[0].attachEvent('onpropertychange', this._syncA);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i
                  ? ((this._observer = new i(function(n) {
                      t.each(n, e._syncA), t.each(n, e._syncS);
                    })),
                    this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener('DOMAttrModified', e._syncA, !1),
                    this.$element[0].addEventListener('DOMNodeInserted', e._syncS, !1),
                    this.$element[0].addEventListener('DOMNodeRemoved', e._syncS, !1));
              }),
              (r.prototype._registerDataEvents = function() {
                var t = this;
                this.dataAdapter.on('*', function(e, n) {
                  t.trigger(e, n);
                });
              }),
              (r.prototype._registerSelectionEvents = function() {
                var e = this,
                  n = ['toggle', 'focus'];
                this.selection.on('toggle', function() {
                  e.toggleDropdown();
                }),
                  this.selection.on('focus', function(t) {
                    e.focus(t);
                  }),
                  this.selection.on('*', function(i, r) {
                    -1 === t.inArray(i, n) && e.trigger(i, r);
                  });
              }),
              (r.prototype._registerDropdownEvents = function() {
                var t = this;
                this.dropdown.on('*', function(e, n) {
                  t.trigger(e, n);
                });
              }),
              (r.prototype._registerResultsEvents = function() {
                var t = this;
                this.results.on('*', function(e, n) {
                  t.trigger(e, n);
                });
              }),
              (r.prototype._registerEvents = function() {
                var t = this;
                this.on('open', function() {
                  t.$container.addClass('select2-container--open');
                }),
                  this.on('close', function() {
                    t.$container.removeClass('select2-container--open');
                  }),
                  this.on('enable', function() {
                    t.$container.removeClass('select2-container--disabled');
                  }),
                  this.on('disable', function() {
                    t.$container.addClass('select2-container--disabled');
                  }),
                  this.on('blur', function() {
                    t.$container.removeClass('select2-container--focus');
                  }),
                  this.on('query', function(e) {
                    t.isOpen() || t.trigger('open', {}),
                      this.dataAdapter.query(e, function(n) {
                        t.trigger('results:all', { data: n, query: e });
                      });
                  }),
                  this.on('query:append', function(e) {
                    this.dataAdapter.query(e, function(n) {
                      t.trigger('results:append', { data: n, query: e });
                    });
                  }),
                  this.on('keypress', function(e) {
                    var n = e.which;
                    t.isOpen()
                      ? n === i.ESC || n === i.TAB || (n === i.UP && e.altKey)
                        ? (t.close(), e.preventDefault())
                        : n === i.ENTER
                        ? (t.trigger('results:select', {}), e.preventDefault())
                        : n === i.SPACE && e.ctrlKey
                        ? (t.trigger('results:toggle', {}), e.preventDefault())
                        : n === i.UP
                        ? (t.trigger('results:previous', {}), e.preventDefault())
                        : n === i.DOWN && (t.trigger('results:next', {}), e.preventDefault())
                      : (n === i.ENTER || n === i.SPACE || (n === i.DOWN && e.altKey)) &&
                        (t.open(), e.preventDefault());
                  });
              }),
              (r.prototype._syncAttributes = function() {
                this.options.set('disabled', this.$element.prop('disabled')),
                  this.options.get('disabled')
                    ? (this.isOpen() && this.close(), this.trigger('disable', {}))
                    : this.trigger('enable', {});
              }),
              (r.prototype._syncSubtree = function(t, e) {
                var n = !1,
                  i = this;
                if (!t || !t.target || 'OPTION' === t.target.nodeName || 'OPTGROUP' === t.target.nodeName) {
                  if (e)
                    if (e.addedNodes && e.addedNodes.length > 0)
                      for (var r = 0; r < e.addedNodes.length; r++) e.addedNodes[r].selected && (n = !0);
                    else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                  else n = !0;
                  n &&
                    this.dataAdapter.current(function(t) {
                      i.trigger('selection:update', { data: t });
                    });
                }
              }),
              (r.prototype.trigger = function(t, e) {
                var n = r.__super__.trigger,
                  i = {
                    open: 'opening',
                    close: 'closing',
                    select: 'selecting',
                    unselect: 'unselecting',
                    clear: 'clearing'
                  };
                if ((void 0 === e && (e = {}), t in i)) {
                  var o = { prevented: !1, name: t, args: e };
                  if ((n.call(this, i[t], o), o.prevented)) return void (e.prevented = !0);
                }
                n.call(this, t, e);
              }),
              (r.prototype.toggleDropdown = function() {
                this.options.get('disabled') || (this.isOpen() ? this.close() : this.open());
              }),
              (r.prototype.open = function() {
                this.isOpen() || this.trigger('query', {});
              }),
              (r.prototype.close = function() {
                this.isOpen() && this.trigger('close', {});
              }),
              (r.prototype.isOpen = function() {
                return this.$container.hasClass('select2-container--open');
              }),
              (r.prototype.hasFocus = function() {
                return this.$container.hasClass('select2-container--focus');
              }),
              (r.prototype.focus = function(t) {
                this.hasFocus() || (this.$container.addClass('select2-container--focus'), this.trigger('focus', {}));
              }),
              (r.prototype.enable = function(t) {
                this.options.get('debug') &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null != t && 0 !== t.length) || (t = [!0]),
                  this.$element.prop('disabled', !t[0]);
              }),
              (r.prototype.data = function() {
                this.options.get('debug') &&
                  arguments.length > 0 &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var t = [];
                return (
                  this.dataAdapter.current(function(e) {
                    t = e;
                  }),
                  t
                );
              }),
              (r.prototype.val = function(e) {
                if (
                  (this.options.get('debug') &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == e || 0 === e.length)
                )
                  return this.$element.val();
                var n = e[0];
                t.isArray(n) &&
                  (n = t.map(n, function(t) {
                    return t.toString();
                  })),
                  this.$element.val(n).trigger('change');
              }),
              (r.prototype.destroy = function() {
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
                  this.$element.attr('tabindex', n.GetData(this.$element[0], 'old-tabindex')),
                  this.$element.removeClass('select2-hidden-accessible'),
                  this.$element.attr('aria-hidden', 'false'),
                  n.RemoveData(this.$element[0]),
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
              (r.prototype.render = function() {
                var e = t(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  e.attr('dir', this.options.get('dir')),
                  (this.$container = e),
                  this.$container.addClass('select2-container--' + this.options.get('theme')),
                  n.StoreData(e[0], 'element', this.$element),
                  e
                );
              }),
              r
            );
          }),
          e.define('jquery-mousewheel', ['jquery'], function(t) {
            return t;
          }),
          e.define(
            'jquery.select2',
            ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils'],
            function(t, e, n, i, r) {
              if (null == t.fn.select2) {
                var o = ['open', 'close', 'destroy'];
                t.fn.select2 = function(e) {
                  if ('object' == typeof (e = e || {}))
                    return (
                      this.each(function() {
                        var i = t.extend(!0, {}, e);
                        new n(t(this), i);
                      }),
                      this
                    );
                  if ('string' == typeof e) {
                    var i,
                      a = Array.prototype.slice.call(arguments, 1);
                    return (
                      this.each(function() {
                        var t = r.GetData(this, 'select2');
                        null == t &&
                          window.console &&
                          console.error &&
                          console.error(
                            "The select2('" + e + "') method was called on an element that is not using Select2."
                          ),
                          (i = t[e].apply(t, a));
                      }),
                      t.inArray(e, o) > -1 ? this : i
                    );
                  }
                  throw new Error('Invalid arguments for Select2: ' + e);
                };
              }
              return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n;
            }
          ),
          { define: e.define, require: e.require }
        );
      })(),
      n = e.require('jquery.select2');
    return (t.fn.select2.amd = e), n;
  }),
  ('function' == typeof define && define.amd
    ? define
    : function(t, e) {
        'undefined' != typeof module && module.exports
          ? (module.exports = e(require('jquery')))
          : (window.toastr = e(window.jQuery));
      })(['jquery'], function(t) {
    return (function() {
      function e(e, n) {
        return (
          e || (e = a()),
          (l = t('#' + e.containerId)).length
            ? l
            : (n &&
                (l = (function(e) {
                  return (
                    (l = t('<div/>')
                      .attr('id', e.containerId)
                      .addClass(e.positionClass)).appendTo(t(e.target)),
                    l
                  );
                })(e)),
              l)
        );
      }
      function n(e) {
        for (var n = l.children(), r = n.length - 1; r >= 0; r--) i(t(n[r]), e);
      }
      function i(e, n, i) {
        return !(
          !e ||
          (!(i && i.force && i.force) && 0 !== t(':focus', e).length) ||
          (e[n.hideMethod]({
            duration: n.hideDuration,
            easing: n.hideEasing,
            complete: function() {
              s(e);
            }
          }),
          0)
        );
      }
      function r(t) {
        u && u(t);
      }
      function o(n) {
        function i(t) {
          return (
            null == t && (t = ''),
            t
              .replace(/&/g, '&amp;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
          );
        }
        function o(e) {
          var n = e && !1 !== u.closeMethod ? u.closeMethod : u.hideMethod,
            i = e && !1 !== u.closeDuration ? u.closeDuration : u.hideDuration,
            o = e && !1 !== u.closeEasing ? u.closeEasing : u.hideEasing;
          if (!t(':focus', p).length || e)
            return (
              clearTimeout(b.intervalId),
              p[n]({
                duration: i,
                easing: o,
                complete: function() {
                  s(p),
                    clearTimeout(f),
                    u.onHidden && 'hidden' !== x.state && u.onHidden(),
                    (x.state = 'hidden'),
                    (x.endTime = new Date()),
                    r(x);
                }
              })
            );
        }
        var u = a(),
          h = n.iconClass || u.iconClass;
        if (
          (void 0 !== n.optionsOverride &&
            ((u = t.extend(u, n.optionsOverride)), (h = n.optionsOverride.iconClass || h)),
          !(function(t, e) {
            if (u.preventDuplicates) {
              if (e.message === c) return !0;
              c = e.message;
            }
            return !1;
          })(0, n))
        ) {
          d++, (l = e(u, !0));
          var f = null,
            p = t('<div/>'),
            g = t('<div/>'),
            m = t('<div/>'),
            v = t('<div/>'),
            y = t(u.closeHtml),
            b = { intervalId: null, hideEta: null, maxHideTime: null },
            x = { toastId: d, state: 'visible', startTime: new Date(), options: u, map: n };
          return (
            n.iconClass && p.addClass(u.toastClass).addClass(h),
            (function() {
              if (n.title) {
                var t = n.title;
                u.escapeHtml && (t = i(n.title)), g.append(t).addClass(u.titleClass), p.append(g);
              }
            })(),
            (function() {
              if (n.message) {
                var t = n.message;
                u.escapeHtml && (t = i(n.message)), m.append(t).addClass(u.messageClass), p.append(m);
              }
            })(),
            u.closeButton && (y.addClass(u.closeClass).attr('role', 'button'), p.prepend(y)),
            u.progressBar && (v.addClass(u.progressClass), p.prepend(v)),
            u.rtl && p.addClass('rtl'),
            u.newestOnTop ? l.prepend(p) : l.append(p),
            (function() {
              var t = '';
              switch (n.iconClass) {
                case 'toast-success':
                case 'toast-info':
                  t = 'polite';
                  break;
                default:
                  t = 'assertive';
              }
              p.attr('aria-live', t);
            })(),
            p.hide(),
            p[u.showMethod]({ duration: u.showDuration, easing: u.showEasing, complete: u.onShown }),
            u.timeOut > 0 &&
              ((f = setTimeout(o, u.timeOut)),
              (b.maxHideTime = parseFloat(u.timeOut)),
              (b.hideEta = new Date().getTime() + b.maxHideTime),
              u.progressBar &&
                (b.intervalId = setInterval(function() {
                  var t = ((b.hideEta - new Date().getTime()) / b.maxHideTime) * 100;
                  v.width(t + '%');
                }, 10))),
            u.closeOnHover &&
              p.hover(
                function() {
                  clearTimeout(f),
                    (b.hideEta = 0),
                    p.stop(!0, !0)[u.showMethod]({ duration: u.showDuration, easing: u.showEasing });
                },
                function() {
                  (u.timeOut > 0 || u.extendedTimeOut > 0) &&
                    ((f = setTimeout(o, u.extendedTimeOut)),
                    (b.maxHideTime = parseFloat(u.extendedTimeOut)),
                    (b.hideEta = new Date().getTime() + b.maxHideTime));
                }
              ),
            !u.onclick && u.tapToDismiss && p.click(o),
            u.closeButton &&
              y &&
              y.click(function(t) {
                t.stopPropagation
                  ? t.stopPropagation()
                  : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0),
                  u.onCloseClick && u.onCloseClick(t),
                  o(!0);
              }),
            u.onclick &&
              p.click(function(t) {
                u.onclick(t), o();
              }),
            r(x),
            u.debug && console && console.log(x),
            p
          );
        }
      }
      function a() {
        return t.extend(
          {},
          {
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
            iconClasses: {
              error: 'toast-error',
              info: 'toast-info',
              success: 'toast-success',
              warning: 'toast-warning'
            },
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
          },
          h.options
        );
      }
      function s(t) {
        l || (l = e()),
          t.is(':visible') || (t.remove(), (t = null), 0 === l.children().length && (l.remove(), (c = void 0)));
      }
      var l,
        u,
        c,
        d = 0,
        h = {
          clear: function(t, r) {
            var o = a();
            l || e(o), i(t, o, r) || n(o);
          },
          remove: function(n) {
            var i = a();
            return l || e(i), n && 0 === t(':focus', n).length ? void s(n) : void (l.children().length && l.remove());
          },
          error: function(t, e, n) {
            return o({ type: 'error', iconClass: a().iconClasses.error, message: t, optionsOverride: n, title: e });
          },
          getContainer: e,
          info: function(t, e, n) {
            return o({ type: 'info', iconClass: a().iconClasses.info, message: t, optionsOverride: n, title: e });
          },
          options: {},
          subscribe: function(t) {
            u = t;
          },
          success: function(t, e, n) {
            return o({ type: 'success', iconClass: a().iconClasses.success, message: t, optionsOverride: n, title: e });
          },
          version: '2.1.4',
          warning: function(t, e, n) {
            return o({ type: 'warning', iconClass: a().iconClasses.warning, message: t, optionsOverride: n, title: e });
          }
        };
      return h;
    })();
  }),
  (function(t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define([], t)
      : (('undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : this
        ).Chart = t());
  })(function() {
    return (function t(e, n, i) {
      function r(a, s) {
        if (!n[a]) {
          if (!e[a]) {
            var l = 'function' == typeof require && require;
            if (!s && l) return l(a, !0);
            if (o) return o(a, !0);
            var u = new Error("Cannot find module '" + a + "'");
            throw ((u.code = 'MODULE_NOT_FOUND'), u);
          }
          var c = (n[a] = { exports: {} });
          e[a][0].call(
            c.exports,
            function(t) {
              return r(e[a][1][t] || t);
            },
            c,
            c.exports,
            t,
            e,
            n,
            i
          );
        }
        return n[a].exports;
      }
      for (var o = 'function' == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
      return r;
    })(
      {
        1: [function(t, e, n) {}, {}],
        2: [
          function(t, e, n) {
            var i = t(6);
            function r(t) {
              if (t) {
                var e = [0, 0, 0],
                  n = 1,
                  r = t.match(/^#([a-fA-F0-9]{3})$/i);
                if (r) {
                  r = r[1];
                  for (var o = 0; o < e.length; o++) e[o] = parseInt(r[o] + r[o], 16);
                } else if ((r = t.match(/^#([a-fA-F0-9]{6})$/i)))
                  for (r = r[1], o = 0; o < e.length; o++) e[o] = parseInt(r.slice(2 * o, 2 * o + 2), 16);
                else if (
                  (r = t.match(
                    /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                  ))
                ) {
                  for (o = 0; o < e.length; o++) e[o] = parseInt(r[o + 1]);
                  n = parseFloat(r[4]);
                } else if (
                  (r = t.match(
                    /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                  ))
                ) {
                  for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(r[o + 1]));
                  n = parseFloat(r[4]);
                } else if ((r = t.match(/(\w+)/))) {
                  if ('transparent' == r[1]) return [0, 0, 0, 0];
                  if (!(e = i[r[1]])) return;
                }
                for (o = 0; o < e.length; o++) e[o] = c(e[o], 0, 255);
                return (n = n || 0 == n ? c(n, 0, 1) : 1), (e[3] = n), e;
              }
            }
            function o(t) {
              if (t) {
                var e = t.match(
                  /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                );
                if (e) {
                  var n = parseFloat(e[4]);
                  return [
                    c(parseInt(e[1]), 0, 360),
                    c(parseFloat(e[2]), 0, 100),
                    c(parseFloat(e[3]), 0, 100),
                    c(isNaN(n) ? 1 : n, 0, 1)
                  ];
                }
              }
            }
            function a(t) {
              if (t) {
                var e = t.match(
                  /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                );
                if (e) {
                  var n = parseFloat(e[4]);
                  return [
                    c(parseInt(e[1]), 0, 360),
                    c(parseFloat(e[2]), 0, 100),
                    c(parseFloat(e[3]), 0, 100),
                    c(isNaN(n) ? 1 : n, 0, 1)
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
            function c(t, e, n) {
              return Math.min(Math.max(e, t), n);
            }
            function d(t) {
              var e = t.toString(16).toUpperCase();
              return e.length < 2 ? '0' + e : e;
            }
            e.exports = {
              getRgba: r,
              getHsla: o,
              getRgb: function(t) {
                var e = r(t);
                return e && e.slice(0, 3);
              },
              getHsl: function(t) {
                var e = o(t);
                return e && e.slice(0, 3);
              },
              getHwb: a,
              getAlpha: function(t) {
                var e = r(t);
                return e ? e[3] : (e = o(t)) ? e[3] : (e = a(t)) ? e[3] : void 0;
              },
              hexString: function(t) {
                return '#' + d(t[0]) + d(t[1]) + d(t[2]);
              },
              rgbString: function(t, e) {
                return e < 1 || (t[3] && t[3] < 1) ? s(t, e) : 'rgb(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
              },
              rgbaString: s,
              percentString: function(t, e) {
                return e < 1 || (t[3] && t[3] < 1)
                  ? l(t, e)
                  : 'rgb(' +
                      Math.round((t[0] / 255) * 100) +
                      '%, ' +
                      Math.round((t[1] / 255) * 100) +
                      '%, ' +
                      Math.round((t[2] / 255) * 100) +
                      '%)';
              },
              percentaString: l,
              hslString: function(t, e) {
                return e < 1 || (t[3] && t[3] < 1) ? u(t, e) : 'hsl(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%)';
              },
              hslaString: u,
              hwbString: function(t, e) {
                return (
                  void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                  'hwb(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%' + (void 0 !== e && 1 !== e ? ', ' + e : '') + ')'
                );
              },
              keyword: function(t) {
                return h[t.slice(0, 3)];
              }
            };
            var h = {};
            for (var f in i) h[i[f]] = f;
          },
          { 6: 6 }
        ],
        3: [
          function(t, e, n) {
            var i = t(5),
              r = t(2),
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
                      ? (e = r.getRgba(t))
                        ? this.setValues('rgb', e)
                        : (e = r.getHsla(t))
                        ? this.setValues('hsl', e)
                        : (e = r.getHwb(t)) && this.setValues('hwb', e)
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
                return r.hexString(this.values.rgb);
              },
              rgbString: function() {
                return r.rgbString(this.values.rgb, this.values.alpha);
              },
              rgbaString: function() {
                return r.rgbaString(this.values.rgb, this.values.alpha);
              },
              percentString: function() {
                return r.percentString(this.values.rgb, this.values.alpha);
              },
              hslString: function() {
                return r.hslString(this.values.hsl, this.values.alpha);
              },
              hslaString: function() {
                return r.hslaString(this.values.hsl, this.values.alpha);
              },
              hwbString: function() {
                return r.hwbString(this.values.hwb, this.values.alpha);
              },
              keyword: function() {
                return r.keyword(this.values.rgb, this.values.alpha);
              },
              rgbNumber: function() {
                var t = this.values.rgb;
                return (t[0] << 16) | (t[1] << 8) | t[2];
              },
              luminosity: function() {
                for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                  var i = t[n] / 255;
                  e[n] = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
                }
                return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
              },
              contrast: function(t) {
                var e = this.luminosity(),
                  n = t.luminosity();
                return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
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
                  n = (e[0] + t) % 360;
                return (e[0] = n < 0 ? 360 + n : n), this.setValues('hsl', e), this;
              },
              mix: function(t, e) {
                var n = this,
                  i = t,
                  r = void 0 === e ? 0.5 : e,
                  o = 2 * r - 1,
                  a = n.alpha() - i.alpha(),
                  s = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
                  l = 1 - s;
                return this.rgb(
                  s * n.red() + l * i.red(),
                  s * n.green() + l * i.green(),
                  s * n.blue() + l * i.blue()
                ).alpha(n.alpha() * r + i.alpha() * (1 - r));
              },
              toJSON: function() {
                return this.rgb();
              },
              clone: function() {
                var t,
                  e,
                  n = new o(),
                  i = this.values,
                  r = n.values;
                for (var a in i)
                  i.hasOwnProperty(a) &&
                    ('[object Array]' === (e = {}.toString.call((t = i[a])))
                      ? (r[a] = t.slice(0))
                      : '[object Number]' === e
                      ? (r[a] = t)
                      : console.error('unexpected color value:', t));
                return n;
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
                for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n;
              }),
              (o.prototype.setValues = function(t, e) {
                var n,
                  r,
                  o = this.values,
                  a = this.spaces,
                  s = this.maxes,
                  l = 1;
                if (((this.valid = !0), 'alpha' === t)) l = e;
                else if (e.length) (o[t] = e.slice(0, t.length)), (l = e[t.length]);
                else if (void 0 !== e[t.charAt(0)]) {
                  for (n = 0; n < t.length; n++) o[t][n] = e[t.charAt(n)];
                  l = e.a;
                } else if (void 0 !== e[a[t][0]]) {
                  var u = a[t];
                  for (n = 0; n < t.length; n++) o[t][n] = e[u[n]];
                  l = e.alpha;
                }
                if (((o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l))), 'alpha' === t)) return !1;
                for (n = 0; n < t.length; n++) (r = Math.max(0, Math.min(s[t][n], o[t][n]))), (o[t][n] = Math.round(r));
                for (var c in a) c !== t && (o[c] = i[t][c](o[t]));
                return !0;
              }),
              (o.prototype.setSpace = function(t, e) {
                var n = e[0];
                return void 0 === n
                  ? this.getValues(t)
                  : ('number' == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
              }),
              (o.prototype.setChannel = function(t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : n === i[e] ? this : ((i[e] = n), this.setValues(t, i), this);
              }),
              'undefined' != typeof window && (window.Color = o),
              (e.exports = o);
          },
          { 2: 2, 5: 5 }
        ],
        4: [
          function(t, e, n) {
            function i(t) {
              var e,
                n,
                i = t[0] / 255,
                r = t[1] / 255,
                o = t[2] / 255,
                a = Math.min(i, r, o),
                s = Math.max(i, r, o),
                l = s - a;
              return (
                s == a
                  ? (e = 0)
                  : i == s
                  ? (e = (r - o) / l)
                  : r == s
                  ? (e = 2 + (o - i) / l)
                  : o == s && (e = 4 + (i - r) / l),
                (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                (n = (a + s) / 2),
                [e, 100 * (s == a ? 0 : n <= 0.5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
              );
            }
            function o(t) {
              var e,
                n,
                i = t[0],
                r = t[1],
                o = t[2],
                a = Math.min(i, r, o),
                s = Math.max(i, r, o),
                l = s - a;
              return (
                (n = 0 == s ? 0 : ((l / s) * 1e3) / 10),
                s == a
                  ? (e = 0)
                  : i == s
                  ? (e = (r - o) / l)
                  : r == s
                  ? (e = 2 + (o - i) / l)
                  : o == s && (e = 4 + (i - r) / l),
                (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                [e, n, ((s / 255) * 1e3) / 10]
              );
            }
            function a(t) {
              var e = t[0],
                n = t[1],
                r = t[2];
              return [
                i(t)[0],
                (1 / 255) * Math.min(e, Math.min(n, r)) * 100,
                100 * (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r)))
              ];
            }
            function s(t) {
              var e,
                n = t[0] / 255,
                i = t[1] / 255,
                r = t[2] / 255;
              return [
                100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0),
                100 * ((1 - i - e) / (1 - e) || 0),
                100 * ((1 - r - e) / (1 - e) || 0),
                100 * e
              ];
            }
            function l(t) {
              return T[JSON.stringify(t)];
            }
            function u(t) {
              var e = t[0] / 255,
                n = t[1] / 255,
                i = t[2] / 255;
              return [
                100 *
                  (0.4124 * (e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) +
                    0.3576 * (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) +
                    0.1805 * (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92)),
                100 * (0.2126 * e + 0.7152 * n + 0.0722 * i),
                100 * (0.0193 * e + 0.1192 * n + 0.9505 * i)
              ];
            }
            function c(t) {
              var e = u(t),
                n = e[0],
                i = e[1],
                r = e[2];
              return (
                (i /= 100),
                (r /= 108.883),
                (n = (n /= 95.047) > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
                [
                  116 * (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16,
                  500 * (n - i),
                  200 * (i - (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))
                ]
              );
            }
            function d(t) {
              var e,
                n,
                i,
                r,
                o,
                a = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100;
              if (0 == s) return [(o = 255 * l), o, o];
              (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)), (r = [0, 0, 0]);
              for (var u = 0; u < 3; u++)
                (i = a + (1 / 3) * -(u - 1)) < 0 && i++,
                  i > 1 && i--,
                  (r[u] =
                    255 *
                    (o =
                      6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e));
              return r;
            }
            function h(t) {
              var e = t[0] / 60,
                n = t[1] / 100,
                i = t[2] / 100,
                r = Math.floor(e) % 6,
                o = e - Math.floor(e),
                a = 255 * i * (1 - n),
                s = 255 * i * (1 - n * o),
                l = 255 * i * (1 - n * (1 - o));
              switch (((i *= 255), r)) {
                case 0:
                  return [i, l, a];
                case 1:
                  return [s, i, a];
                case 2:
                  return [a, i, l];
                case 3:
                  return [a, s, i];
                case 4:
                  return [l, a, i];
                case 5:
                  return [i, a, s];
              }
            }
            function f(t) {
              var e,
                n,
                i,
                o,
                a = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100,
                u = s + l;
              switch (
                (u > 1 && ((s /= u), (l /= u)),
                (i = 6 * a - (e = Math.floor(6 * a))),
                0 != (1 & e) && (i = 1 - i),
                (o = s + i * ((n = 1 - l) - s)),
                e)
              ) {
                default:
                case 6:
                case 0:
                  (r = n), (g = o), (b = s);
                  break;
                case 1:
                  (r = o), (g = n), (b = s);
                  break;
                case 2:
                  (r = s), (g = n), (b = o);
                  break;
                case 3:
                  (r = s), (g = o), (b = n);
                  break;
                case 4:
                  (r = o), (g = s), (b = n);
                  break;
                case 5:
                  (r = n), (g = s), (b = o);
              }
              return [255 * r, 255 * g, 255 * b];
            }
            function p(t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                i = t[3] / 100;
              return [
                255 * (1 - Math.min(1, (t[0] / 100) * (1 - i) + i)),
                255 * (1 - Math.min(1, e * (1 - i) + i)),
                255 * (1 - Math.min(1, n * (1 - i) + i))
              ];
            }
            function m(t) {
              var e,
                n,
                i,
                r = t[0] / 100,
                o = t[1] / 100,
                a = t[2] / 100;
              return (
                (n = -0.9689 * r + 1.8758 * o + 0.0415 * a),
                (i = 0.0557 * r + -0.204 * o + 1.057 * a),
                (e =
                  (e = 3.2406 * r + -1.5372 * o + -0.4986 * a) > 0.0031308
                    ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                    : (e *= 12.92)),
                (n = n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : (n *= 12.92)),
                (i = i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : (i *= 12.92)),
                [
                  255 * (e = Math.min(Math.max(0, e), 1)),
                  255 * (n = Math.min(Math.max(0, n), 1)),
                  255 * (i = Math.min(Math.max(0, i), 1))
                ]
              );
            }
            function v(t) {
              var e = t[0],
                n = t[1],
                i = t[2];
              return (
                (n /= 100),
                (i /= 108.883),
                (e = (e /= 95.047) > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
                [
                  116 * (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16,
                  500 * (e - n),
                  200 * (n - (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))
                ]
              );
            }
            function y(t) {
              var e,
                n,
                i,
                r,
                o = t[0],
                a = t[1],
                s = t[2];
              return (
                o <= 8
                  ? (r = ((n = (100 * o) / 903.3) / 100) * 7.787 + 16 / 116)
                  : ((n = 100 * Math.pow((o + 16) / 116, 3)), (r = Math.pow(n / 100, 1 / 3))),
                [
                  (e =
                    e / 95.047 <= 0.008856
                      ? (e = (95.047 * (a / 500 + r - 16 / 116)) / 7.787)
                      : 95.047 * Math.pow(a / 500 + r, 3)),
                  n,
                  (i =
                    i / 108.883 <= 0.008859
                      ? (i = (108.883 * (r - s / 200 - 16 / 116)) / 7.787)
                      : 108.883 * Math.pow(r - s / 200, 3))
                ]
              );
            }
            function x(t) {
              var e,
                n = t[0],
                i = t[1],
                r = t[2];
              return (e = (360 * Math.atan2(r, i)) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e];
            }
            function _(t) {
              return m(y(t));
            }
            function w(t) {
              var e,
                n = t[1];
              return (e = (t[2] / 360) * 2 * Math.PI), [t[0], n * Math.cos(e), n * Math.sin(e)];
            }
            function C(t) {
              return S[t];
            }
            e.exports = {
              rgb2hsl: i,
              rgb2hsv: o,
              rgb2hwb: a,
              rgb2cmyk: s,
              rgb2keyword: l,
              rgb2xyz: u,
              rgb2lab: c,
              rgb2lch: function(t) {
                return x(c(t));
              },
              hsl2rgb: d,
              hsl2hsv: function(t) {
                var e = t[1] / 100,
                  n = t[2] / 100;
                return 0 === n
                  ? [0, 0, 0]
                  : [t[0], ((2 * (e *= (n *= 2) <= 1 ? n : 2 - n)) / (n + e)) * 100, ((n + e) / 2) * 100];
              },
              hsl2hwb: function(t) {
                return a(d(t));
              },
              hsl2cmyk: function(t) {
                return s(d(t));
              },
              hsl2keyword: function(t) {
                return l(d(t));
              },
              hsv2rgb: h,
              hsv2hsl: function(t) {
                var e,
                  n,
                  i = t[1] / 100,
                  r = t[2] / 100;
                return (e = i * r), [t[0], 100 * (e = (e /= (n = (2 - i) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)];
              },
              hsv2hwb: function(t) {
                return a(h(t));
              },
              hsv2cmyk: function(t) {
                return s(h(t));
              },
              hsv2keyword: function(t) {
                return l(h(t));
              },
              hwb2rgb: f,
              hwb2hsl: function(t) {
                return i(f(t));
              },
              hwb2hsv: function(t) {
                return o(f(t));
              },
              hwb2cmyk: function(t) {
                return s(f(t));
              },
              hwb2keyword: function(t) {
                return l(f(t));
              },
              cmyk2rgb: p,
              cmyk2hsl: function(t) {
                return i(p(t));
              },
              cmyk2hsv: function(t) {
                return o(p(t));
              },
              cmyk2hwb: function(t) {
                return a(p(t));
              },
              cmyk2keyword: function(t) {
                return l(p(t));
              },
              keyword2rgb: C,
              keyword2hsl: function(t) {
                return i(C(t));
              },
              keyword2hsv: function(t) {
                return o(C(t));
              },
              keyword2hwb: function(t) {
                return a(C(t));
              },
              keyword2cmyk: function(t) {
                return s(C(t));
              },
              keyword2lab: function(t) {
                return c(C(t));
              },
              keyword2xyz: function(t) {
                return u(C(t));
              },
              xyz2rgb: m,
              xyz2lab: v,
              xyz2lch: function(t) {
                return x(v(t));
              },
              lab2xyz: y,
              lab2rgb: _,
              lab2lch: x,
              lch2lab: w,
              lch2xyz: function(t) {
                return y(w(t));
              },
              lch2rgb: function(t) {
                return _(w(t));
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
              T = {};
            for (var k in S) T[JSON.stringify(S[k])] = k;
          },
          {}
        ],
        5: [
          function(t, e, n) {
            var i = t(4),
              r = function() {
                return new u();
              };
            for (var o in i) {
              r[o + 'Raw'] = (function(t) {
                return function(e) {
                  return 'number' == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
                };
              })(o);
              var a = /(\w+)2(\w+)/.exec(o),
                s = a[1],
                l = a[2];
              (r[s] = r[s] || {})[l] = r[o] = (function(t) {
                return function(e) {
                  'number' == typeof e && (e = Array.prototype.slice.call(arguments));
                  var n = i[t](e);
                  if ('string' == typeof n || void 0 === n) return n;
                  for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
                  return n;
                };
              })(o);
            }
            var u = function() {
              this.convs = {};
            };
            (u.prototype.routeSpace = function(t, e) {
              var n = e[0];
              return void 0 === n
                ? this.getValues(t)
                : ('number' == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
            }),
              (u.prototype.setValues = function(t, e) {
                return (this.space = t), (this.convs = {}), (this.convs[t] = e), this;
              }),
              (u.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                  var n = this.space;
                  (e = r[n][t](this.convs[n])), (this.convs[t] = e);
                }
                return e;
              }),
              ['rgb', 'hsl', 'hsv', 'cmyk', 'keyword'].forEach(function(t) {
                u.prototype[t] = function(e) {
                  return this.routeSpace(t, arguments);
                };
              }),
              (e.exports = r);
          },
          { 4: 4 }
        ],
        6: [
          function(t, e, n) {
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
          function(t, e, n) {
            var i = t(29)();
            (i.helpers = t(45)),
              t(27)(i),
              (i.defaults = t(25)),
              (i.Element = t(26)),
              (i.elements = t(40)),
              (i.Interaction = t(28)),
              (i.layouts = t(30)),
              (i.platform = t(48)),
              (i.plugins = t(31)),
              (i.Ticks = t(34)),
              t(22)(i),
              t(23)(i),
              t(24)(i),
              t(33)(i),
              t(32)(i),
              t(35)(i),
              t(55)(i),
              t(53)(i),
              t(54)(i),
              t(56)(i),
              t(57)(i),
              t(58)(i),
              t(15)(i),
              t(16)(i),
              t(17)(i),
              t(18)(i),
              t(19)(i),
              t(20)(i),
              t(21)(i),
              t(8)(i),
              t(9)(i),
              t(10)(i),
              t(11)(i),
              t(12)(i),
              t(13)(i),
              t(14)(i);
            var r = t(49);
            for (var o in r) r.hasOwnProperty(o) && i.plugins.register(r[o]);
            i.platform.initialize(),
              (e.exports = i),
              'undefined' != typeof window && (window.Chart = i),
              (i.Legend = r.legend._element),
              (i.Title = r.title._element),
              (i.pluginService = i.plugins),
              (i.PluginBase = i.Element.extend({})),
              (i.canvasHelpers = i.helpers.canvas),
              (i.layoutService = i.layouts);
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
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.Bar = function(e, n) {
                return (n.type = 'bar'), new t(e, n);
              };
            };
          },
          {}
        ],
        9: [
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.Bubble = function(e, n) {
                return (n.type = 'bubble'), new t(e, n);
              };
            };
          },
          {}
        ],
        10: [
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.Doughnut = function(e, n) {
                return (n.type = 'doughnut'), new t(e, n);
              };
            };
          },
          {}
        ],
        11: [
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.Line = function(e, n) {
                return (n.type = 'line'), new t(e, n);
              };
            };
          },
          {}
        ],
        12: [
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.PolarArea = function(e, n) {
                return (n.type = 'polarArea'), new t(e, n);
              };
            };
          },
          {}
        ],
        13: [
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.Radar = function(e, n) {
                return (n.type = 'radar'), new t(e, n);
              };
            };
          },
          {}
        ],
        14: [
          function(t, e, n) {
            'use strict';
            e.exports = function(t) {
              t.Scatter = function(e, n) {
                return (n.type = 'scatter'), new t(e, n);
              };
            };
          },
          {}
        ],
        15: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('bar', {
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
              i._set('horizontalBar', {
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
                      var n = '';
                      return (
                        t.length > 0 &&
                          (t[0].yLabel
                            ? (n = t[0].yLabel)
                            : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])),
                        n
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
                  dataElementType: r.Rectangle,
                  initialize: function() {
                    var e;
                    t.DatasetController.prototype.initialize.apply(this, arguments),
                      ((e = this.getMeta()).stack = this.getDataset().stack),
                      (e.bar = !0);
                  },
                  update: function(t) {
                    var e,
                      n,
                      i = this.getMeta().data;
                    for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t);
                  },
                  updateElement: function(t, e, n) {
                    var i = this,
                      r = i.chart,
                      a = i.getMeta(),
                      s = i.getDataset(),
                      l = t.custom || {},
                      u = r.options.elements.rectangle;
                    (t._xScale = i.getScaleForId(a.xAxisID)),
                      (t._yScale = i.getScaleForId(a.yAxisID)),
                      (t._datasetIndex = i.index),
                      (t._index = e),
                      (t._model = {
                        datasetLabel: s.label,
                        label: r.data.labels[e],
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
                      i.updateElementGeometry(t, e, n),
                      t.pivot();
                  },
                  updateElementGeometry: function(t, e, n) {
                    var i = this,
                      r = t._model,
                      o = i.getValueScale(),
                      a = o.getBasePixel(),
                      s = o.isHorizontal(),
                      l = i._ruler || i.getRuler(),
                      u = i.calculateBarValuePixels(i.index, e),
                      c = i.calculateBarIndexPixels(i.index, e, l);
                    (r.horizontal = s),
                      (r.base = n ? a : u.base),
                      (r.x = s ? (n ? a : u.head) : c.center),
                      (r.y = s ? c.center : n ? a : u.head),
                      (r.height = s ? c.size : void 0),
                      (r.width = s ? void 0 : c.size);
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
                      n,
                      i = this.chart,
                      r = this.getIndexScale().options.stacked,
                      o = void 0 === t ? i.data.datasets.length : t + 1,
                      a = [];
                    for (e = 0; e < o; ++e)
                      (n = i.getDatasetMeta(e)).bar &&
                        i.isDatasetVisible(e) &&
                        (!1 === r ||
                          (!0 === r && -1 === a.indexOf(n.stack)) ||
                          (void 0 === r && (void 0 === n.stack || -1 === a.indexOf(n.stack)))) &&
                        a.push(n.stack);
                    return a;
                  },
                  getStackCount: function() {
                    return this._getStacks().length;
                  },
                  getStackIndex: function(t, e) {
                    var n = this._getStacks(t),
                      i = void 0 !== e ? n.indexOf(e) : -1;
                    return -1 === i ? n.length - 1 : i;
                  },
                  getRuler: function() {
                    var t,
                      e,
                      n = this.getIndexScale(),
                      i = this.getStackCount(),
                      r = this.index,
                      a = n.isHorizontal(),
                      s = a ? n.left : n.top,
                      l = s + (a ? n.width : n.height),
                      u = [];
                    for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(n.getPixelForValue(null, t, r));
                    return {
                      min: o.isNullOrUndef(n.options.barThickness)
                        ? (function(t, e) {
                            var n,
                              i,
                              r,
                              o,
                              a = t.isHorizontal() ? t.width : t.height,
                              s = t.getTicks();
                            for (r = 1, o = e.length; r < o; ++r) a = Math.min(a, e[r] - e[r - 1]);
                            for (r = 0, o = s.length; r < o; ++r)
                              (i = t.getPixelForTick(r)), (a = r > 0 ? Math.min(a, i - n) : a), (n = i);
                            return a;
                          })(n, u)
                        : -1,
                      pixels: u,
                      start: s,
                      end: l,
                      stackCount: i,
                      scale: n
                    };
                  },
                  calculateBarValuePixels: function(t, e) {
                    var n,
                      i,
                      r,
                      o,
                      a,
                      s,
                      l = this.chart,
                      u = this.getMeta(),
                      c = this.getValueScale(),
                      d = l.data.datasets,
                      h = c.getRightValue(d[t].data[e]),
                      f = c.options.stacked,
                      p = u.stack,
                      g = 0;
                    if (f || (void 0 === f && void 0 !== p))
                      for (n = 0; n < t; ++n)
                        (i = l.getDatasetMeta(n)).bar &&
                          i.stack === p &&
                          i.controller.getValueScaleId() === c.id &&
                          l.isDatasetVisible(n) &&
                          ((r = c.getRightValue(d[n].data[e])), ((h < 0 && r < 0) || (h >= 0 && r > 0)) && (g += r));
                    return (
                      (o = c.getPixelForValue(g)),
                      { size: (s = ((a = c.getPixelForValue(g + h)) - o) / 2), base: o, head: a, center: a + s / 2 }
                    );
                  },
                  calculateBarIndexPixels: function(t, e, n) {
                    var i,
                      r,
                      a,
                      s,
                      l,
                      u,
                      c,
                      d,
                      h,
                      f,
                      p,
                      g,
                      m,
                      v,
                      y,
                      b = n.scale.options,
                      x =
                        'flex' === b.barThickness
                          ? ((f = b),
                            (g = (p = (h = n).pixels)[(d = e)]),
                            (m = d > 0 ? p[d - 1] : null),
                            (v = d < p.length - 1 ? p[d + 1] : null),
                            (y = f.categoryPercentage),
                            null === m && (m = g - (null === v ? h.end - g : v - g)),
                            null === v && (v = g + g - m),
                            {
                              chunk: (((v - m) / 2) * y) / h.stackCount,
                              ratio: f.barPercentage,
                              start: g - ((g - m) / 2) * y
                            })
                          : ((l = (r = b).barThickness),
                            (u = (i = n).stackCount),
                            (c = i.pixels[e]),
                            o.isNullOrUndef(l)
                              ? ((a = i.min * r.categoryPercentage), (s = r.barPercentage))
                              : ((a = l * u), (s = 1)),
                            { chunk: a / u, ratio: s, start: c - a / 2 }),
                      _ = this.getStackIndex(t, this.getMeta().stack),
                      w = x.start + x.chunk * _ + x.chunk / 2,
                      C = Math.min(o.valueOrDefault(b.maxBarThickness, 1 / 0), x.chunk * x.ratio);
                    return { base: w - C / 2, head: w + C / 2, center: w, size: C };
                  },
                  draw: function() {
                    var t = this.chart,
                      e = this.getValueScale(),
                      n = this.getMeta().data,
                      i = this.getDataset(),
                      r = n.length,
                      a = 0;
                    for (o.canvas.clipArea(t.ctx, t.chartArea); a < r; ++a)
                      isNaN(e.getRightValue(i.data[a])) || n[a].draw();
                    o.canvas.unclipArea(t.ctx);
                  },
                  setHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                      n = t._index,
                      i = t.custom || {},
                      r = t._model;
                    (r.backgroundColor = i.hoverBackgroundColor
                      ? i.hoverBackgroundColor
                      : o.valueAtIndexOrDefault(e.hoverBackgroundColor, n, o.getHoverColor(r.backgroundColor))),
                      (r.borderColor = i.hoverBorderColor
                        ? i.hoverBorderColor
                        : o.valueAtIndexOrDefault(e.hoverBorderColor, n, o.getHoverColor(r.borderColor))),
                      (r.borderWidth = i.hoverBorderWidth
                        ? i.hoverBorderWidth
                        : o.valueAtIndexOrDefault(e.hoverBorderWidth, n, r.borderWidth));
                  },
                  removeHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                      n = t._index,
                      i = t.custom || {},
                      r = t._model,
                      a = this.chart.options.elements.rectangle;
                    (r.backgroundColor = i.backgroundColor
                      ? i.backgroundColor
                      : o.valueAtIndexOrDefault(e.backgroundColor, n, a.backgroundColor)),
                      (r.borderColor = i.borderColor
                        ? i.borderColor
                        : o.valueAtIndexOrDefault(e.borderColor, n, a.borderColor)),
                      (r.borderWidth = i.borderWidth
                        ? i.borderWidth
                        : o.valueAtIndexOrDefault(e.borderWidth, n, a.borderWidth));
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('bubble', {
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
                    return (
                      (e.datasets[t.datasetIndex].label || '') +
                      ': (' +
                      t.xLabel +
                      ', ' +
                      t.yLabel +
                      ', ' +
                      e.datasets[t.datasetIndex].data[t.index].r +
                      ')'
                    );
                  }
                }
              }
            }),
              (e.exports = function(t) {
                t.controllers.bubble = t.DatasetController.extend({
                  dataElementType: r.Point,
                  update: function(t) {
                    var e = this,
                      n = e.getMeta().data;
                    o.each(n, function(n, i) {
                      e.updateElement(n, i, t);
                    });
                  },
                  updateElement: function(t, e, n) {
                    var i = this,
                      r = i.getMeta(),
                      o = t.custom || {},
                      a = i.getScaleForId(r.xAxisID),
                      s = i.getScaleForId(r.yAxisID),
                      l = i._resolveElementOptions(t, e),
                      u = i.getDataset().data[e],
                      c = i.index,
                      d = n ? a.getPixelForDecimal(0.5) : a.getPixelForValue('object' == typeof u ? u : NaN, e, c),
                      h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                    (t._xScale = a),
                      (t._yScale = s),
                      (t._options = l),
                      (t._datasetIndex = c),
                      (t._index = e),
                      (t._model = {
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        hitRadius: l.hitRadius,
                        pointStyle: l.pointStyle,
                        radius: n ? 0 : l.radius,
                        skip: o.skip || isNaN(d) || isNaN(h),
                        x: d,
                        y: h
                      }),
                      t.pivot();
                  },
                  setHoverStyle: function(t) {
                    var e = t._model,
                      n = t._options;
                    (e.backgroundColor = o.valueOrDefault(n.hoverBackgroundColor, o.getHoverColor(n.backgroundColor))),
                      (e.borderColor = o.valueOrDefault(n.hoverBorderColor, o.getHoverColor(n.borderColor))),
                      (e.borderWidth = o.valueOrDefault(n.hoverBorderWidth, n.borderWidth)),
                      (e.radius = n.radius + n.hoverRadius);
                  },
                  removeHoverStyle: function(t) {
                    var e = t._model,
                      n = t._options;
                    (e.backgroundColor = n.backgroundColor),
                      (e.borderColor = n.borderColor),
                      (e.borderWidth = n.borderWidth),
                      (e.radius = n.radius);
                  },
                  _resolveElementOptions: function(t, e) {
                    var n,
                      i,
                      r,
                      a = this.chart,
                      s = a.data.datasets[this.index],
                      l = t.custom || {},
                      u = a.options.elements.point,
                      c = o.options.resolve,
                      d = s.data[e],
                      h = {},
                      f = { chart: a, dataIndex: e, dataset: s, datasetIndex: this.index },
                      p = [
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
                    for (n = 0, i = p.length; n < i; ++n) h[(r = p[n])] = c([l[r], s[r], u[r]], f, e);
                    return (h.radius = c([l.radius, d ? d.r : void 0, s.radius, u.radius], f, e)), h;
                  }
                });
              });
          },
          { 25: 25, 40: 40, 45: 45 }
        ],
        17: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('doughnut', {
              animation: { animateRotate: !0, animateScale: !1 },
              hover: { mode: 'single' },
              legendCallback: function(t) {
                var e = [];
                e.push('<ul class="' + t.id + '-legend">');
                var n = t.data,
                  i = n.datasets,
                  r = n.labels;
                if (i.length)
                  for (var o = 0; o < i[0].data.length; ++o)
                    e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'),
                      r[o] && e.push(r[o]),
                      e.push('</li>');
                return e.push('</ul>'), e.join('');
              },
              legend: {
                labels: {
                  generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length
                      ? e.labels.map(function(n, i) {
                          var r = t.getDatasetMeta(0),
                            a = e.datasets[0],
                            s = r.data[i],
                            l = (s && s.custom) || {},
                            u = o.valueAtIndexOrDefault,
                            c = t.options.elements.arc;
                          return {
                            text: n,
                            fillStyle: l.backgroundColor
                              ? l.backgroundColor
                              : u(a.backgroundColor, i, c.backgroundColor),
                            strokeStyle: l.borderColor ? l.borderColor : u(a.borderColor, i, c.borderColor),
                            lineWidth: l.borderWidth ? l.borderWidth : u(a.borderWidth, i, c.borderWidth),
                            hidden: isNaN(a.data[i]) || r.data[i].hidden,
                            index: i
                          };
                        })
                      : [];
                  }
                },
                onClick: function(t, e) {
                  var n,
                    i,
                    r,
                    o = e.index,
                    a = this.chart;
                  for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)
                    (r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                  a.update();
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
                    var n = e.labels[t.index],
                      i = ': ' + e.datasets[t.datasetIndex].data[t.index];
                    return o.isArray(n) ? ((n = n.slice())[0] += i) : (n += i), n;
                  }
                }
              }
            }),
              i._set('pie', o.clone(i.doughnut)),
              i._set('pie', { cutoutPercentage: 0 }),
              (e.exports = function(t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                  dataElementType: r.Arc,
                  linkScales: o.noop,
                  getRingIndex: function(t) {
                    for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                    return e;
                  },
                  update: function(t) {
                    var e = this,
                      n = e.chart,
                      i = n.chartArea,
                      r = n.options,
                      a = r.elements.arc,
                      s = i.right - i.left - a.borderWidth,
                      l = i.bottom - i.top - a.borderWidth,
                      u = Math.min(s, l),
                      c = { x: 0, y: 0 },
                      d = e.getMeta(),
                      h = r.cutoutPercentage,
                      f = r.circumference;
                    if (f < 2 * Math.PI) {
                      var p = r.rotation % (2 * Math.PI),
                        g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                        m = Math.cos(p),
                        v = Math.sin(p),
                        y = Math.cos(g),
                        b = Math.sin(g),
                        x = (p <= 0 && g >= 0) || (p <= 2 * Math.PI && 2 * Math.PI <= g),
                        _ = (p <= 0.5 * Math.PI && 0.5 * Math.PI <= g) || (p <= 2.5 * Math.PI && 2.5 * Math.PI <= g),
                        w = (p <= -Math.PI && -Math.PI <= g) || (p <= Math.PI && Math.PI <= g),
                        C = (p <= 0.5 * -Math.PI && 0.5 * -Math.PI <= g) || (p <= 1.5 * Math.PI && 1.5 * Math.PI <= g),
                        S = h / 100,
                        T = w ? -1 : Math.min(m * (m < 0 ? 1 : S), y * (y < 0 ? 1 : S)),
                        k = C ? -1 : Math.min(v * (v < 0 ? 1 : S), b * (b < 0 ? 1 : S)),
                        D = x ? 1 : Math.max(m * (m > 0 ? 1 : S), y * (y > 0 ? 1 : S)),
                        A = _ ? 1 : Math.max(v * (v > 0 ? 1 : S), b * (b > 0 ? 1 : S));
                      (u = Math.min(s / (0.5 * (D - T)), l / (0.5 * (A - k)))),
                        (c = { x: -0.5 * (D + T), y: -0.5 * (A + k) });
                    }
                    (n.borderWidth = e.getMaxBorderWidth(d.data)),
                      (n.outerRadius = Math.max((u - n.borderWidth) / 2, 0)),
                      (n.innerRadius = Math.max(h ? (n.outerRadius / 100) * h : 0, 0)),
                      (n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount()),
                      (n.offsetX = c.x * n.outerRadius),
                      (n.offsetY = c.y * n.outerRadius),
                      (d.total = e.calculateTotal()),
                      (e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index)),
                      (e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0)),
                      o.each(d.data, function(n, i) {
                        e.updateElement(n, i, t);
                      });
                  },
                  updateElement: function(t, e, n) {
                    var i = this,
                      r = i.chart,
                      a = r.chartArea,
                      s = r.options,
                      l = s.animation,
                      u = (a.left + a.right) / 2,
                      c = (a.top + a.bottom) / 2,
                      d = s.rotation,
                      h = s.rotation,
                      f = i.getDataset(),
                      p =
                        n && l.animateRotate
                          ? 0
                          : t.hidden
                          ? 0
                          : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI));
                    o.extend(t, {
                      _datasetIndex: i.index,
                      _index: e,
                      _model: {
                        x: u + r.offsetX,
                        y: c + r.offsetY,
                        startAngle: d,
                        endAngle: h,
                        circumference: p,
                        outerRadius: n && l.animateScale ? 0 : i.outerRadius,
                        innerRadius: n && l.animateScale ? 0 : i.innerRadius,
                        label: (0, o.valueAtIndexOrDefault)(f.label, e, r.data.labels[e])
                      }
                    });
                    var g = t._model;
                    this.removeHoverStyle(t),
                      (n && l.animateRotate) ||
                        ((g.startAngle = 0 === e ? s.rotation : i.getMeta().data[e - 1]._model.endAngle),
                        (g.endAngle = g.startAngle + g.circumference)),
                      t.pivot();
                  },
                  removeHoverStyle: function(e) {
                    t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
                  },
                  calculateTotal: function() {
                    var t,
                      e = this.getDataset(),
                      n = this.getMeta(),
                      i = 0;
                    return (
                      o.each(n.data, function(n, r) {
                        (t = e.data[r]), isNaN(t) || n.hidden || (i += Math.abs(t));
                      }),
                      i
                    );
                  },
                  calculateCircumference: function(t) {
                    var e = this.getMeta().total;
                    return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
                  },
                  getMaxBorderWidth: function(t) {
                    for (var e, n, i = 0, r = this.index, o = t.length, a = 0; a < o; a++)
                      (e = t[a]._model ? t[a]._model.borderWidth : 0),
                        (i =
                          (n = t[a]._chart ? t[a]._chart.config.data.datasets[r].hoverBorderWidth : 0) >
                          (i = e > i ? e : i)
                            ? n
                            : i);
                    return i;
                  }
                });
              });
          },
          { 25: 25, 40: 40, 45: 45 }
        ],
        18: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('line', {
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
                  datasetElementType: r.Line,
                  dataElementType: r.Point,
                  update: function(t) {
                    var n,
                      i,
                      r,
                      a = this,
                      s = a.getMeta(),
                      l = s.dataset,
                      u = s.data || [],
                      c = a.chart.options,
                      d = c.elements.line,
                      h = a.getScaleForId(s.yAxisID),
                      f = a.getDataset(),
                      p = e(f, c);
                    for (
                      p &&
                        ((r = l.custom || {}),
                        void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension),
                        (l._scale = h),
                        (l._datasetIndex = a.index),
                        (l._children = u),
                        (l._model = {
                          spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
                          tension: r.tension ? r.tension : o.valueOrDefault(f.lineTension, d.tension),
                          backgroundColor: r.backgroundColor
                            ? r.backgroundColor
                            : f.backgroundColor || d.backgroundColor,
                          borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || d.borderWidth,
                          borderColor: r.borderColor ? r.borderColor : f.borderColor || d.borderColor,
                          borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                          borderDash: r.borderDash ? r.borderDash : f.borderDash || d.borderDash,
                          borderDashOffset: r.borderDashOffset
                            ? r.borderDashOffset
                            : f.borderDashOffset || d.borderDashOffset,
                          borderJoinStyle: r.borderJoinStyle
                            ? r.borderJoinStyle
                            : f.borderJoinStyle || d.borderJoinStyle,
                          fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : d.fill,
                          steppedLine: r.steppedLine ? r.steppedLine : o.valueOrDefault(f.steppedLine, d.stepped),
                          cubicInterpolationMode: r.cubicInterpolationMode
                            ? r.cubicInterpolationMode
                            : o.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
                        }),
                        l.pivot()),
                        n = 0,
                        i = u.length;
                      n < i;
                      ++n
                    )
                      a.updateElement(u[n], n, t);
                    for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n)
                      u[n].pivot();
                  },
                  getPointBackgroundColor: function(t, e) {
                    var n = this.chart.options.elements.point.backgroundColor,
                      i = this.getDataset(),
                      r = t.custom || {};
                    return (
                      r.backgroundColor
                        ? (n = r.backgroundColor)
                        : i.pointBackgroundColor
                        ? (n = o.valueAtIndexOrDefault(i.pointBackgroundColor, e, n))
                        : i.backgroundColor && (n = i.backgroundColor),
                      n
                    );
                  },
                  getPointBorderColor: function(t, e) {
                    var n = this.chart.options.elements.point.borderColor,
                      i = this.getDataset(),
                      r = t.custom || {};
                    return (
                      r.borderColor
                        ? (n = r.borderColor)
                        : i.pointBorderColor
                        ? (n = o.valueAtIndexOrDefault(i.pointBorderColor, e, n))
                        : i.borderColor && (n = i.borderColor),
                      n
                    );
                  },
                  getPointBorderWidth: function(t, e) {
                    var n = this.chart.options.elements.point.borderWidth,
                      i = this.getDataset(),
                      r = t.custom || {};
                    return (
                      isNaN(r.borderWidth)
                        ? !isNaN(i.pointBorderWidth) || o.isArray(i.pointBorderWidth)
                          ? (n = o.valueAtIndexOrDefault(i.pointBorderWidth, e, n))
                          : isNaN(i.borderWidth) || (n = i.borderWidth)
                        : (n = r.borderWidth),
                      n
                    );
                  },
                  updateElement: function(t, e, n) {
                    var i,
                      r,
                      a = this,
                      s = a.getMeta(),
                      l = t.custom || {},
                      u = a.getDataset(),
                      c = a.index,
                      d = u.data[e],
                      h = a.getScaleForId(s.yAxisID),
                      f = a.getScaleForId(s.xAxisID),
                      p = a.chart.options.elements.point;
                    void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius),
                      void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius),
                      (i = f.getPixelForValue('object' == typeof d ? d : NaN, e, c)),
                      (r = n ? h.getBasePixel() : a.calculatePointY(d, e, c)),
                      (t._xScale = f),
                      (t._yScale = h),
                      (t._datasetIndex = c),
                      (t._index = e),
                      (t._model = {
                        x: i,
                        y: r,
                        skip: l.skip || isNaN(i) || isNaN(r),
                        radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
                        pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
                        backgroundColor: a.getPointBackgroundColor(t, e),
                        borderColor: a.getPointBorderColor(t, e),
                        borderWidth: a.getPointBorderWidth(t, e),
                        tension: s.dataset._model ? s.dataset._model.tension : 0,
                        steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                        hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
                      });
                  },
                  calculatePointY: function(t, e, n) {
                    var i,
                      r,
                      o,
                      a = this.chart,
                      s = this.getMeta(),
                      l = this.getScaleForId(s.yAxisID),
                      u = 0,
                      c = 0;
                    if (l.options.stacked) {
                      for (i = 0; i < n; i++)
                        if (
                          ((r = a.data.datasets[i]),
                          'line' === (o = a.getDatasetMeta(i)).type && o.yAxisID === l.id && a.isDatasetVisible(i))
                        ) {
                          var d = Number(l.getRightValue(r.data[e]));
                          d < 0 ? (c += d || 0) : (u += d || 0);
                        }
                      var h = Number(l.getRightValue(t));
                      return l.getPixelForValue(h < 0 ? c + h : u + h);
                    }
                    return l.getPixelForValue(t);
                  },
                  updateBezierControlPoints: function() {
                    var t,
                      e,
                      n,
                      i,
                      r = this.getMeta(),
                      a = this.chart.chartArea,
                      s = r.data || [];
                    function l(t, e, n) {
                      return Math.max(Math.min(t, n), e);
                    }
                    if (
                      (r.dataset._model.spanGaps &&
                        (s = s.filter(function(t) {
                          return !t._model.skip;
                        })),
                      'monotone' === r.dataset._model.cubicInterpolationMode)
                    )
                      o.splineCurveMonotone(s);
                    else
                      for (t = 0, e = s.length; t < e; ++t)
                        (n = s[t]._model),
                          (i = o.splineCurve(
                            o.previousItem(s, t)._model,
                            n,
                            o.nextItem(s, t)._model,
                            r.dataset._model.tension
                          )),
                          (n.controlPointPreviousX = i.previous.x),
                          (n.controlPointPreviousY = i.previous.y),
                          (n.controlPointNextX = i.next.x),
                          (n.controlPointNextY = i.next.y);
                    if (this.chart.options.elements.line.capBezierPoints)
                      for (t = 0, e = s.length; t < e; ++t)
                        ((n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, a.left, a.right)),
                          (n.controlPointPreviousY = l(n.controlPointPreviousY, a.top, a.bottom)),
                          (n.controlPointNextX = l(n.controlPointNextX, a.left, a.right)),
                          (n.controlPointNextY = l(n.controlPointNextY, a.top, a.bottom));
                  },
                  draw: function() {
                    var t = this.chart,
                      n = this.getMeta(),
                      i = n.data || [],
                      r = t.chartArea,
                      a = i.length,
                      s = 0;
                    for (
                      o.canvas.clipArea(t.ctx, r),
                        e(this.getDataset(), t.options) && n.dataset.draw(),
                        o.canvas.unclipArea(t.ctx);
                      s < a;
                      ++s
                    )
                      i[s].draw(r);
                  },
                  setHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                      n = t._index,
                      i = t.custom || {},
                      r = t._model;
                    (r.radius =
                      i.hoverRadius ||
                      o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)),
                      (r.backgroundColor =
                        i.hoverBackgroundColor ||
                        o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(r.backgroundColor))),
                      (r.borderColor =
                        i.hoverBorderColor ||
                        o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(r.borderColor))),
                      (r.borderWidth =
                        i.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, r.borderWidth));
                  },
                  removeHoverStyle: function(t) {
                    var e = this,
                      n = e.chart.data.datasets[t._datasetIndex],
                      i = t._index,
                      r = t.custom || {},
                      a = t._model;
                    void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius),
                      (a.radius =
                        r.radius || o.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius)),
                      (a.backgroundColor = e.getPointBackgroundColor(t, i)),
                      (a.borderColor = e.getPointBorderColor(t, i)),
                      (a.borderWidth = e.getPointBorderWidth(t, i));
                  }
                });
              });
          },
          { 25: 25, 40: 40, 45: 45 }
        ],
        19: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('polarArea', {
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
                var n = t.data,
                  i = n.datasets,
                  r = n.labels;
                if (i.length)
                  for (var o = 0; o < i[0].data.length; ++o)
                    e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'),
                      r[o] && e.push(r[o]),
                      e.push('</li>');
                return e.push('</ul>'), e.join('');
              },
              legend: {
                labels: {
                  generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length
                      ? e.labels.map(function(n, i) {
                          var r = t.getDatasetMeta(0),
                            a = e.datasets[0],
                            s = r.data[i].custom || {},
                            l = o.valueAtIndexOrDefault,
                            u = t.options.elements.arc;
                          return {
                            text: n,
                            fillStyle: s.backgroundColor
                              ? s.backgroundColor
                              : l(a.backgroundColor, i, u.backgroundColor),
                            strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, i, u.borderColor),
                            lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, i, u.borderWidth),
                            hidden: isNaN(a.data[i]) || r.data[i].hidden,
                            index: i
                          };
                        })
                      : [];
                  }
                },
                onClick: function(t, e) {
                  var n,
                    i,
                    r,
                    o = e.index,
                    a = this.chart;
                  for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)
                    (r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
                  a.update();
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
                  dataElementType: r.Arc,
                  linkScales: o.noop,
                  update: function(t) {
                    var e = this,
                      n = e.chart,
                      i = n.chartArea,
                      r = e.getMeta(),
                      a = n.options,
                      s = a.elements.arc,
                      l = Math.min(i.right - i.left, i.bottom - i.top);
                    (n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0)),
                      (n.innerRadius = Math.max(
                        a.cutoutPercentage ? (n.outerRadius / 100) * a.cutoutPercentage : 1,
                        0
                      )),
                      (n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount()),
                      (e.outerRadius = n.outerRadius - n.radiusLength * e.index),
                      (e.innerRadius = e.outerRadius - n.radiusLength),
                      (r.count = e.countVisibleElements()),
                      o.each(r.data, function(n, i) {
                        e.updateElement(n, i, t);
                      });
                  },
                  updateElement: function(t, e, n) {
                    for (
                      var i = this,
                        r = i.chart,
                        a = i.getDataset(),
                        s = r.options,
                        l = s.animation,
                        u = r.scale,
                        c = r.data.labels,
                        d = i.calculateCircumference(a.data[e]),
                        h = u.xCenter,
                        f = u.yCenter,
                        p = 0,
                        g = i.getMeta(),
                        m = 0;
                      m < e;
                      ++m
                    )
                      isNaN(a.data[m]) || g.data[m].hidden || ++p;
                    var v = s.startAngle,
                      y = t.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[e]),
                      b = v + d * p,
                      x = b + (t.hidden ? 0 : d),
                      _ = l.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[e]);
                    o.extend(t, {
                      _datasetIndex: i.index,
                      _index: e,
                      _scale: u,
                      _model: {
                        x: h,
                        y: f,
                        innerRadius: 0,
                        outerRadius: n ? _ : y,
                        startAngle: n && l.animateRotate ? v : b,
                        endAngle: n && l.animateRotate ? v : x,
                        label: o.valueAtIndexOrDefault(c, e, c[e])
                      }
                    }),
                      i.removeHoverStyle(t),
                      t.pivot();
                  },
                  removeHoverStyle: function(e) {
                    t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
                  },
                  countVisibleElements: function() {
                    var t = this.getDataset(),
                      e = this.getMeta(),
                      n = 0;
                    return (
                      o.each(e.data, function(e, i) {
                        isNaN(t.data[i]) || e.hidden || n++;
                      }),
                      n
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('radar', { scale: { type: 'radialLinear' }, elements: { line: { tension: 0 } } }),
              (e.exports = function(t) {
                t.controllers.radar = t.DatasetController.extend({
                  datasetElementType: r.Line,
                  dataElementType: r.Point,
                  linkScales: o.noop,
                  update: function(t) {
                    var e = this,
                      n = e.getMeta(),
                      i = n.data,
                      r = n.dataset.custom || {},
                      a = e.getDataset(),
                      s = e.chart.options.elements.line,
                      l = e.chart.scale;
                    void 0 !== a.tension && void 0 === a.lineTension && (a.lineTension = a.tension),
                      o.extend(n.dataset, {
                        _datasetIndex: e.index,
                        _scale: l,
                        _children: i,
                        _loop: !0,
                        _model: {
                          tension: r.tension ? r.tension : o.valueOrDefault(a.lineTension, s.tension),
                          backgroundColor: r.backgroundColor
                            ? r.backgroundColor
                            : a.backgroundColor || s.backgroundColor,
                          borderWidth: r.borderWidth ? r.borderWidth : a.borderWidth || s.borderWidth,
                          borderColor: r.borderColor ? r.borderColor : a.borderColor || s.borderColor,
                          fill: r.fill ? r.fill : void 0 !== a.fill ? a.fill : s.fill,
                          borderCapStyle: r.borderCapStyle ? r.borderCapStyle : a.borderCapStyle || s.borderCapStyle,
                          borderDash: r.borderDash ? r.borderDash : a.borderDash || s.borderDash,
                          borderDashOffset: r.borderDashOffset
                            ? r.borderDashOffset
                            : a.borderDashOffset || s.borderDashOffset,
                          borderJoinStyle: r.borderJoinStyle
                            ? r.borderJoinStyle
                            : a.borderJoinStyle || s.borderJoinStyle
                        }
                      }),
                      n.dataset.pivot(),
                      o.each(
                        i,
                        function(n, i) {
                          e.updateElement(n, i, t);
                        },
                        e
                      ),
                      e.updateBezierControlPoints();
                  },
                  updateElement: function(t, e, n) {
                    var i = this,
                      r = t.custom || {},
                      a = i.getDataset(),
                      s = i.chart.scale,
                      l = i.chart.options.elements.point,
                      u = s.getPointPositionForValue(e, a.data[e]);
                    void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius),
                      void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius),
                      o.extend(t, {
                        _datasetIndex: i.index,
                        _index: e,
                        _scale: s,
                        _model: {
                          x: n ? s.xCenter : u.x,
                          y: n ? s.yCenter : u.y,
                          tension: r.tension
                            ? r.tension
                            : o.valueOrDefault(a.lineTension, i.chart.options.elements.line.tension),
                          radius: r.radius ? r.radius : o.valueAtIndexOrDefault(a.pointRadius, e, l.radius),
                          backgroundColor: r.backgroundColor
                            ? r.backgroundColor
                            : o.valueAtIndexOrDefault(a.pointBackgroundColor, e, l.backgroundColor),
                          borderColor: r.borderColor
                            ? r.borderColor
                            : o.valueAtIndexOrDefault(a.pointBorderColor, e, l.borderColor),
                          borderWidth: r.borderWidth
                            ? r.borderWidth
                            : o.valueAtIndexOrDefault(a.pointBorderWidth, e, l.borderWidth),
                          pointStyle: r.pointStyle
                            ? r.pointStyle
                            : o.valueAtIndexOrDefault(a.pointStyle, e, l.pointStyle),
                          hitRadius: r.hitRadius
                            ? r.hitRadius
                            : o.valueAtIndexOrDefault(a.pointHitRadius, e, l.hitRadius)
                        }
                      }),
                      (t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y));
                  },
                  updateBezierControlPoints: function() {
                    var t = this.chart.chartArea,
                      e = this.getMeta();
                    o.each(e.data, function(n, i) {
                      var r = n._model,
                        a = o.splineCurve(
                          o.previousItem(e.data, i, !0)._model,
                          r,
                          o.nextItem(e.data, i, !0)._model,
                          r.tension
                        );
                      (r.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left)),
                        (r.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top)),
                        (r.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left)),
                        (r.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top)),
                        n.pivot();
                    });
                  },
                  setHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                      n = t.custom || {},
                      i = t._index,
                      r = t._model;
                    (r.radius = n.hoverRadius
                      ? n.hoverRadius
                      : o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius)),
                      (r.backgroundColor = n.hoverBackgroundColor
                        ? n.hoverBackgroundColor
                        : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(r.backgroundColor))),
                      (r.borderColor = n.hoverBorderColor
                        ? n.hoverBorderColor
                        : o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(r.borderColor))),
                      (r.borderWidth = n.hoverBorderWidth
                        ? n.hoverBorderWidth
                        : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth));
                  },
                  removeHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                      n = t.custom || {},
                      i = t._index,
                      r = t._model,
                      a = this.chart.options.elements.point;
                    (r.radius = n.radius ? n.radius : o.valueAtIndexOrDefault(e.pointRadius, i, a.radius)),
                      (r.backgroundColor = n.backgroundColor
                        ? n.backgroundColor
                        : o.valueAtIndexOrDefault(e.pointBackgroundColor, i, a.backgroundColor)),
                      (r.borderColor = n.borderColor
                        ? n.borderColor
                        : o.valueAtIndexOrDefault(e.pointBorderColor, i, a.borderColor)),
                      (r.borderWidth = n.borderWidth
                        ? n.borderWidth
                        : o.valueAtIndexOrDefault(e.pointBorderWidth, i, a.borderWidth));
                  }
                });
              });
          },
          { 25: 25, 40: 40, 45: 45 }
        ],
        21: [
          function(t, e, n) {
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45);
            i._set('global', {
              animation: { duration: 1e3, easing: 'easeOutQuart', onProgress: o.noop, onComplete: o.noop }
            }),
              (e.exports = function(t) {
                (t.Animation = r.extend({
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
                    addAnimation: function(t, e, n, i) {
                      var r,
                        o,
                        a = this.animations;
                      for (e.chart = t, i || (t.animating = !0), r = 0, o = a.length; r < o; ++r)
                        if (a[r].chart === t) return void (a[r] = e);
                      a.push(e), 1 === a.length && this.requestAnimationFrame();
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
                        n = 0;
                      t.dropFrames > 1 && ((n = Math.floor(t.dropFrames)), (t.dropFrames = t.dropFrames % 1)),
                        t.advance(1 + n);
                      var i = Date.now();
                      (t.dropFrames += (i - e) / t.frameDuration), t.animations.length > 0 && t.requestAnimationFrame();
                    },
                    advance: function(t) {
                      for (var e, n, i = this.animations, r = 0; r < i.length; )
                        (n = (e = i[r]).chart),
                          (e.currentStep = (e.currentStep || 0) + t),
                          (e.currentStep = Math.min(e.currentStep, e.numSteps)),
                          o.callback(e.render, [n, e], n),
                          o.callback(e.onAnimationProgress, [e], n),
                          e.currentStep >= e.numSteps
                            ? (o.callback(e.onAnimationComplete, [e], n), (n.animating = !1), i.splice(r, 1))
                            : ++r;
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(45),
              o = t(28),
              a = t(30),
              s = t(48),
              l = t(31);
            e.exports = function(t) {
              function e(t) {
                return 'top' === t || 'bottom' === t;
              }
              (t.types = {}),
                (t.instances = {}),
                (t.controllers = {}),
                r.extend(t.prototype, {
                  construct: function(e, n) {
                    var o,
                      a,
                      l = this;
                    ((a = (o = (o = n) || {}).data = o.data || {}).datasets = a.datasets || []),
                      (a.labels = a.labels || []),
                      (o.options = r.configMerge(i.global, i[o.type], o.options || {}));
                    var u = s.acquireContext(e, (n = o)),
                      c = u && u.canvas,
                      d = c && c.height,
                      h = c && c.width;
                    (l.id = r.uid()),
                      (l.ctx = u),
                      (l.canvas = c),
                      (l.config = n),
                      (l.width = h),
                      (l.height = d),
                      (l.aspectRatio = d ? h / d : null),
                      (l.options = n.options),
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
                      u && c
                        ? (l.initialize(), l.update())
                        : console.error("Failed to create chart: can't acquire context from the given item");
                  },
                  initialize: function() {
                    var t = this;
                    return (
                      l.notify(t, 'beforeInit'),
                      r.retinaScale(t, t.options.devicePixelRatio),
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
                    return r.canvas.clear(this), this;
                  },
                  stop: function() {
                    return t.animationService.cancelAnimation(this), this;
                  },
                  resize: function(t) {
                    var e = this,
                      n = e.options,
                      i = e.canvas,
                      o = (n.maintainAspectRatio && e.aspectRatio) || null,
                      a = Math.max(0, Math.floor(r.getMaximumWidth(i))),
                      s = Math.max(0, Math.floor(o ? a / o : r.getMaximumHeight(i)));
                    if (
                      (e.width !== a || e.height !== s) &&
                      ((i.width = e.width = a),
                      (i.height = e.height = s),
                      (i.style.width = a + 'px'),
                      (i.style.height = s + 'px'),
                      r.retinaScale(e, n.devicePixelRatio),
                      !t)
                    ) {
                      var u = { width: a, height: s };
                      l.notify(e, 'resize', [u]),
                        e.options.onResize && e.options.onResize(e, u),
                        e.stop(),
                        e.update(e.options.responsiveAnimationDuration);
                    }
                  },
                  ensureScalesHaveIDs: function() {
                    var t = this.options,
                      e = t.scales || {},
                      n = t.scale;
                    r.each(e.xAxes, function(t, e) {
                      t.id = t.id || 'x-axis-' + e;
                    }),
                      r.each(e.yAxes, function(t, e) {
                        t.id = t.id || 'y-axis-' + e;
                      }),
                      n && (n.id = n.id || 'scale');
                  },
                  buildOrUpdateScales: function() {
                    var n = this,
                      i = n.options,
                      o = n.scales || {},
                      a = [],
                      s = Object.keys(o).reduce(function(t, e) {
                        return (t[e] = !1), t;
                      }, {});
                    i.scales &&
                      (a = a.concat(
                        (i.scales.xAxes || []).map(function(t) {
                          return { options: t, dtype: 'category', dposition: 'bottom' };
                        }),
                        (i.scales.yAxes || []).map(function(t) {
                          return { options: t, dtype: 'linear', dposition: 'left' };
                        })
                      )),
                      i.scale &&
                        a.push({ options: i.scale, dtype: 'radialLinear', isDefault: !0, dposition: 'chartArea' }),
                      r.each(a, function(i) {
                        var a = i.options,
                          l = a.id,
                          u = r.valueOrDefault(a.type, i.dtype);
                        e(a.position) !== e(i.dposition) && (a.position = i.dposition), (s[l] = !0);
                        var c = null;
                        if (l in o && o[l].type === u) ((c = o[l]).options = a), (c.ctx = n.ctx), (c.chart = n);
                        else {
                          var d = t.scaleService.getScaleConstructor(u);
                          if (!d) return;
                          (c = new d({ id: l, type: u, options: a, ctx: n.ctx, chart: n })), (o[c.id] = c);
                        }
                        c.mergeTicksOptions(), i.isDefault && (n.scale = c);
                      }),
                      r.each(s, function(t, e) {
                        t || delete o[e];
                      }),
                      (n.scales = o),
                      t.scaleService.addScalesToLayout(this);
                  },
                  buildOrUpdateControllers: function() {
                    var e = this,
                      n = [],
                      i = [];
                    return (
                      r.each(
                        e.data.datasets,
                        function(r, o) {
                          var a = e.getDatasetMeta(o),
                            s = r.type || e.config.type;
                          if (
                            (a.type && a.type !== s && (e.destroyDatasetMeta(o), (a = e.getDatasetMeta(o))),
                            (a.type = s),
                            n.push(a.type),
                            a.controller)
                          )
                            a.controller.updateIndex(o), a.controller.linkScales();
                          else {
                            var l = t.controllers[a.type];
                            if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                            (a.controller = new l(e, o)), i.push(a.controller);
                          }
                        },
                        e
                      ),
                      i
                    );
                  },
                  resetElements: function() {
                    var t = this;
                    r.each(
                      t.data.datasets,
                      function(e, n) {
                        t.getDatasetMeta(n).controller.reset();
                      },
                      t
                    );
                  },
                  reset: function() {
                    this.resetElements(), this.tooltip.initialize();
                  },
                  update: function(e) {
                    var n,
                      i,
                      o = this;
                    if (
                      ((e && 'object' == typeof e) || (e = { duration: e, lazy: arguments[1] }),
                      (i = (n = o).options),
                      r.each(n.scales, function(t) {
                        a.removeBox(n, t);
                      }),
                      (i = r.configMerge(t.defaults.global, t.defaults[n.config.type], i)),
                      (n.options = n.config.options = i),
                      n.ensureScalesHaveIDs(),
                      n.buildOrUpdateScales(),
                      (n.tooltip._options = i.tooltips),
                      n.tooltip.initialize(),
                      l._invalidate(o),
                      !1 !== l.notify(o, 'beforeUpdate'))
                    ) {
                      o.tooltip._data = o.data;
                      var s = o.buildOrUpdateControllers();
                      r.each(
                        o.data.datasets,
                        function(t, e) {
                          o.getDatasetMeta(e).controller.buildOrUpdateElements();
                        },
                        o
                      ),
                        o.updateLayout(),
                        o.options.animation &&
                          o.options.animation.duration &&
                          r.each(s, function(t) {
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
                      (a.update(this, this.width, this.height),
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
                      n = { meta: e, index: t };
                    !1 !== l.notify(this, 'beforeDatasetUpdate', [n]) &&
                      (e.controller.update(), l.notify(this, 'afterDatasetUpdate', [n]));
                  },
                  render: function(e) {
                    var n = this;
                    (e && 'object' == typeof e) || (e = { duration: e, lazy: arguments[1] });
                    var i = e.duration,
                      o = e.lazy;
                    if (!1 !== l.notify(n, 'beforeRender')) {
                      var a = n.options.animation,
                        s = function(t) {
                          l.notify(n, 'afterRender'), r.callback(a && a.onComplete, [t], n);
                        };
                      if (a && ((void 0 !== i && 0 !== i) || (void 0 === i && 0 !== a.duration))) {
                        var u = new t.Animation({
                          numSteps: (i || a.duration) / 16.66,
                          easing: e.easing || a.easing,
                          render: function(t, e) {
                            var n = e.currentStep,
                              i = n / e.numSteps;
                            t.draw((0, r.easing.effects[e.easing])(i), i, n);
                          },
                          onAnimationProgress: a.onProgress,
                          onAnimationComplete: s
                        });
                        t.animationService.addAnimation(n, u, i, o);
                      } else n.draw(), s(new t.Animation({ numSteps: 0, chart: n }));
                      return n;
                    }
                  },
                  draw: function(t) {
                    var e = this;
                    e.clear(),
                      r.isNullOrUndef(t) && (t = 1),
                      e.transition(t),
                      !1 !== l.notify(e, 'beforeDraw', [t]) &&
                        (r.each(
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
                    for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
                      this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                    this.tooltip.transition(t);
                  },
                  drawDatasets: function(t) {
                    var e = this;
                    if (!1 !== l.notify(e, 'beforeDatasetsDraw', [t])) {
                      for (var n = (e.data.datasets || []).length - 1; n >= 0; --n)
                        e.isDatasetVisible(n) && e.drawDataset(n, t);
                      l.notify(e, 'afterDatasetsDraw', [t]);
                    }
                  },
                  drawDataset: function(t, e) {
                    var n = this.getDatasetMeta(t),
                      i = { meta: n, index: t, easingValue: e };
                    !1 !== l.notify(this, 'beforeDatasetDraw', [i]) &&
                      (n.controller.draw(e), l.notify(this, 'afterDatasetDraw', [i]));
                  },
                  _drawTooltip: function(t) {
                    var e = this.tooltip,
                      n = { tooltip: e, easingValue: t };
                    !1 !== l.notify(this, 'beforeTooltipDraw', [n]) &&
                      (e.draw(), l.notify(this, 'afterTooltipDraw', [n]));
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
                  getElementsAtEventForMode: function(t, e, n) {
                    var i = o.modes[e];
                    return 'function' == typeof i ? i(this, t, n) : [];
                  },
                  getDatasetAtEvent: function(t) {
                    return o.modes.dataset(this, t, { intersect: !0 });
                  },
                  getDatasetMeta: function(t) {
                    var e = this.data.datasets[t];
                    e._meta || (e._meta = {});
                    var n = e._meta[this.id];
                    return (
                      n ||
                        (n = e._meta[this.id] = {
                          type: null,
                          data: [],
                          dataset: null,
                          controller: null,
                          hidden: null,
                          xAxisID: null,
                          yAxisID: null
                        }),
                      n
                    );
                  },
                  getVisibleDatasetCount: function() {
                    for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
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
                      n = this.data.datasets[t],
                      i = n._meta && n._meta[e];
                    i && (i.controller.destroy(), delete n._meta[e]);
                  },
                  destroy: function() {
                    var e,
                      n,
                      i = this,
                      o = i.canvas;
                    for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) i.destroyDatasetMeta(e);
                    o &&
                      (i.unbindEvents(), r.canvas.clear(i), s.releaseContext(i.ctx), (i.canvas = null), (i.ctx = null)),
                      l.notify(i, 'destroy'),
                      delete t.instances[i.id];
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
                      n = function() {
                        t.eventHandler.apply(t, arguments);
                      };
                    r.each(t.options.events, function(i) {
                      s.addEventListener(t, i, n), (e[i] = n);
                    }),
                      t.options.responsive &&
                        (s.addEventListener(
                          t,
                          'resize',
                          (n = function() {
                            t.resize();
                          })
                        ),
                        (e.resize = n));
                  },
                  unbindEvents: function() {
                    var t = this,
                      e = t._listeners;
                    e &&
                      (delete t._listeners,
                      r.each(e, function(e, n) {
                        s.removeEventListener(t, n, e);
                      }));
                  },
                  updateHoverStyle: function(t, e, n) {
                    var i,
                      r,
                      o,
                      a = n ? 'setHoverStyle' : 'removeHoverStyle';
                    for (r = 0, o = t.length; r < o; ++r)
                      (i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[a](i);
                  },
                  eventHandler: function(t) {
                    var e = this,
                      n = e.tooltip;
                    if (!1 !== l.notify(e, 'beforeEvent', [t])) {
                      (e._bufferedRender = !0), (e._bufferedRequest = null);
                      var i = e.handleEvent(t);
                      n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), l.notify(e, 'afterEvent', [t]);
                      var r = e._bufferedRequest;
                      return (
                        r
                          ? e.render(r)
                          : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)),
                        (e._bufferedRender = !1),
                        (e._bufferedRequest = null),
                        e
                      );
                    }
                  },
                  handleEvent: function(t) {
                    var e,
                      n = this,
                      i = n.options || {},
                      o = i.hover;
                    return (
                      (n.lastActive = n.lastActive || []),
                      (n.active = 'mouseout' === t.type ? [] : n.getElementsAtEventForMode(t, o.mode, o)),
                      r.callback(i.onHover || i.hover.onHover, [t.native, n.active], n),
                      ('mouseup' !== t.type && 'click' !== t.type) ||
                        (i.onClick && i.onClick.call(n, t.native, n.active)),
                      n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1),
                      n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0),
                      (e = !r.arrayEquals(n.active, n.lastActive)),
                      (n.lastActive = n.active),
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
          function(t, e, n) {
            'use strict';
            var i = t(45);
            e.exports = function(t) {
              var e = ['push', 'pop', 'shift', 'splice', 'unshift'];
              function n(t, n) {
                var i = t._chartjs;
                if (i) {
                  var r = i.listeners,
                    o = r.indexOf(n);
                  -1 !== o && r.splice(o, 1),
                    r.length > 0 ||
                      (e.forEach(function(e) {
                        delete t[e];
                      }),
                      delete t._chartjs);
                }
              }
              (t.DatasetController = function(t, e) {
                this.initialize(t, e);
              }),
                i.extend(t.DatasetController.prototype, {
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
                      n = t.getDataset();
                    (null !== e.xAxisID && e.xAxisID in t.chart.scales) ||
                      (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id),
                      (null !== e.yAxisID && e.yAxisID in t.chart.scales) ||
                        (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
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
                    this._data && n(this._data, this);
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
                      n = this.getMeta(),
                      i = this.getDataset().data || [],
                      r = n.data;
                    for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
                    n.dataset = n.dataset || this.createMetaDataset();
                  },
                  addElementAndReset: function(t) {
                    var e = this.createMetaData(t);
                    this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
                  },
                  buildOrUpdateElements: function() {
                    var t,
                      r,
                      o = this,
                      a = o.getDataset(),
                      s = a.data || (a.data = []);
                    o._data !== s &&
                      (o._data && n(o._data, o),
                      (r = o),
                      (t = s)._chartjs
                        ? t._chartjs.listeners.push(r)
                        : (Object.defineProperty(t, '_chartjs', {
                            configurable: !0,
                            enumerable: !1,
                            value: { listeners: [r] }
                          }),
                          e.forEach(function(e) {
                            var n = 'onData' + e.charAt(0).toUpperCase() + e.slice(1),
                              r = t[e];
                            Object.defineProperty(t, e, {
                              configurable: !0,
                              enumerable: !1,
                              value: function() {
                                var e = Array.prototype.slice.call(arguments),
                                  o = r.apply(this, e);
                                return (
                                  i.each(t._chartjs.listeners, function(t) {
                                    'function' == typeof t[n] && t[n].apply(t, e);
                                  }),
                                  o
                                );
                              }
                            });
                          })),
                      (o._data = s)),
                      o.resyncElements();
                  },
                  update: i.noop,
                  transition: function(t) {
                    for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
                    e.dataset && e.dataset.transition(t);
                  },
                  draw: function() {
                    var t = this.getMeta(),
                      e = t.data || [],
                      n = e.length,
                      i = 0;
                    for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw();
                  },
                  removeHoverStyle: function(t, e) {
                    var n = this.chart.data.datasets[t._datasetIndex],
                      r = t._index,
                      o = t.custom || {},
                      a = i.valueAtIndexOrDefault,
                      s = t._model;
                    (s.backgroundColor = o.backgroundColor
                      ? o.backgroundColor
                      : a(n.backgroundColor, r, e.backgroundColor)),
                      (s.borderColor = o.borderColor ? o.borderColor : a(n.borderColor, r, e.borderColor)),
                      (s.borderWidth = o.borderWidth ? o.borderWidth : a(n.borderWidth, r, e.borderWidth));
                  },
                  setHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                      n = t._index,
                      r = t.custom || {},
                      o = i.valueAtIndexOrDefault,
                      a = i.getHoverColor,
                      s = t._model;
                    (s.backgroundColor = r.hoverBackgroundColor
                      ? r.hoverBackgroundColor
                      : o(e.hoverBackgroundColor, n, a(s.backgroundColor))),
                      (s.borderColor = r.hoverBorderColor
                        ? r.hoverBorderColor
                        : o(e.hoverBorderColor, n, a(s.borderColor))),
                      (s.borderWidth = r.hoverBorderWidth
                        ? r.hoverBorderWidth
                        : o(e.hoverBorderWidth, n, s.borderWidth));
                  },
                  resyncElements: function() {
                    var t = this.getMeta(),
                      e = this.getDataset().data,
                      n = t.data.length,
                      i = e.length;
                    i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
                  },
                  insertElements: function(t, e) {
                    for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
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
                (t.DatasetController.extend = i.inherits);
            };
          },
          { 45: 45 }
        ],
        25: [
          function(t, e, n) {
            'use strict';
            var i = t(45);
            e.exports = {
              _set: function(t, e) {
                return i.merge(this[t] || (this[t] = {}), e);
              }
            };
          },
          { 45: 45 }
        ],
        26: [
          function(t, e, n) {
            'use strict';
            var i = t(3),
              r = t(45),
              o = function(t) {
                r.extend(this, t), this.initialize.apply(this, arguments);
              };
            r.extend(o.prototype, {
              initialize: function() {
                this.hidden = !1;
              },
              pivot: function() {
                var t = this;
                return t._view || (t._view = r.clone(t._model)), (t._start = {}), t;
              },
              transition: function(t) {
                var e = this,
                  n = e._model,
                  r = e._start,
                  o = e._view;
                return n && 1 !== t
                  ? (o || (o = e._view = {}),
                    r || (r = e._start = {}),
                    (function(t, e, n, r) {
                      var o,
                        a,
                        s,
                        l,
                        u,
                        c,
                        d,
                        h,
                        f,
                        p = Object.keys(n);
                      for (o = 0, a = p.length; o < a; ++o)
                        if (
                          ((c = n[(s = p[o])]), e.hasOwnProperty(s) || (e[s] = c), (l = e[s]) !== c && '_' !== s[0])
                        ) {
                          if ((t.hasOwnProperty(s) || (t[s] = l), (d = typeof c) == typeof (u = t[s])))
                            if ('string' === d) {
                              if ((h = i(u)).valid && (f = i(c)).valid) {
                                e[s] = f.mix(h, r).rgbString();
                                continue;
                              }
                            } else if ('number' === d && isFinite(u) && isFinite(c)) {
                              e[s] = u + (c - u) * r;
                              continue;
                            }
                          e[s] = c;
                        }
                    })(r, o, n, t),
                    e)
                  : ((e._view = n), (e._start = null), e);
              },
              tooltipPosition: function() {
                return { x: this._model.x, y: this._model.y };
              },
              hasValue: function() {
                return r.isNumber(this._model.x) && r.isNumber(this._model.y);
              }
            }),
              (o.extend = r.inherits),
              (e.exports = o);
          },
          { 3: 3, 45: 45 }
        ],
        27: [
          function(t, e, n) {
            'use strict';
            var i = t(3),
              r = t(25),
              o = t(45);
            e.exports = function(t) {
              function e(t, e, n) {
                var i;
                return (
                  'string' == typeof t
                    ? ((i = parseInt(t, 10)), -1 !== t.indexOf('%') && (i = (i / 100) * e.parentNode[n]))
                    : (i = t),
                  i
                );
              }
              function n(t) {
                return null != t && 'none' !== t;
              }
              function a(t, i, r) {
                var o = document.defaultView,
                  a = t.parentNode,
                  s = o.getComputedStyle(t)[i],
                  l = o.getComputedStyle(a)[i],
                  u = n(s),
                  c = n(l),
                  d = Number.POSITIVE_INFINITY;
                return u || c ? Math.min(u ? e(s, t, r) : d, c ? e(l, a, r) : d) : 'none';
              }
              (o.configMerge = function() {
                return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                  merger: function(e, n, i, r) {
                    var a = n[e] || {},
                      s = i[e];
                    'scales' === e
                      ? (n[e] = o.scaleMerge(a, s))
                      : 'scale' === e
                      ? (n[e] = o.merge(a, [t.scaleService.getScaleDefaults(s.type), s]))
                      : o._merger(e, n, i, r);
                  }
                });
              }),
                (o.scaleMerge = function() {
                  return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(e, n, i, r) {
                      if ('xAxes' === e || 'yAxes' === e) {
                        var a,
                          s,
                          l,
                          u = i[e].length;
                        for (n[e] || (n[e] = []), a = 0; a < u; ++a)
                          (s = o.valueOrDefault((l = i[e][a]).type, 'xAxes' === e ? 'category' : 'linear')),
                            a >= n[e].length && n[e].push({}),
                            o.merge(
                              n[e][a],
                              !n[e][a].type || (l.type && l.type !== n[e][a].type)
                                ? [t.scaleService.getScaleDefaults(s), l]
                                : l
                            );
                      } else o._merger(e, n, i, r);
                    }
                  });
                }),
                (o.where = function(t, e) {
                  if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                  var n = [];
                  return (
                    o.each(t, function(t) {
                      e(t) && n.push(t);
                    }),
                    n
                  );
                }),
                (o.findIndex = Array.prototype.findIndex
                  ? function(t, e, n) {
                      return t.findIndex(e, n);
                    }
                  : function(t, e, n) {
                      n = void 0 === n ? t : n;
                      for (var i = 0, r = t.length; i < r; ++i) if (e.call(n, t[i], i, t)) return i;
                      return -1;
                    }),
                (o.findNextWhere = function(t, e, n) {
                  o.isNullOrUndef(n) && (n = -1);
                  for (var i = n + 1; i < t.length; i++) {
                    var r = t[i];
                    if (e(r)) return r;
                  }
                }),
                (o.findPreviousWhere = function(t, e, n) {
                  o.isNullOrUndef(n) && (n = t.length);
                  for (var i = n - 1; i >= 0; i--) {
                    var r = t[i];
                    if (e(r)) return r;
                  }
                }),
                (o.isNumber = function(t) {
                  return !isNaN(parseFloat(t)) && isFinite(t);
                }),
                (o.almostEquals = function(t, e, n) {
                  return Math.abs(t - e) < n;
                }),
                (o.almostWhole = function(t, e) {
                  var n = Math.round(t);
                  return n - e < t && n + e > t;
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
                      return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                    }),
                (o.log10 = Math.log10
                  ? function(t) {
                      return Math.log10(t);
                    }
                  : function(t) {
                      var e = Math.log(t) * Math.LOG10E,
                        n = Math.round(e);
                      return t === Math.pow(10, n) ? n : e;
                    }),
                (o.toRadians = function(t) {
                  return t * (Math.PI / 180);
                }),
                (o.toDegrees = function(t) {
                  return t * (180 / Math.PI);
                }),
                (o.getAngleFromPoint = function(t, e) {
                  var n = e.x - t.x,
                    i = e.y - t.y,
                    r = Math.sqrt(n * n + i * i),
                    o = Math.atan2(i, n);
                  return o < -0.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: r };
                }),
                (o.distanceBetweenPoints = function(t, e) {
                  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
                }),
                (o.aliasPixel = function(t) {
                  return t % 2 == 0 ? 0 : 0.5;
                }),
                (o.splineCurve = function(t, e, n, i) {
                  var r = t.skip ? e : t,
                    o = e,
                    a = n.skip ? e : n,
                    s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                    l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                    u = s / (s + l),
                    c = l / (s + l),
                    d = i * (u = isNaN(u) ? 0 : u),
                    h = i * (c = isNaN(c) ? 0 : c);
                  return {
                    previous: { x: o.x - d * (a.x - r.x), y: o.y - d * (a.y - r.y) },
                    next: { x: o.x + h * (a.x - r.x), y: o.y + h * (a.y - r.y) }
                  };
                }),
                (o.EPSILON = Number.EPSILON || 1e-14),
                (o.splineCurveMonotone = function(t) {
                  var e,
                    n,
                    i,
                    r,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = (t || []).map(function(t) {
                      return { model: t._model, deltaK: 0, mK: 0 };
                    }),
                    h = d.length;
                  for (e = 0; e < h; ++e)
                    if (!(i = d[e]).model.skip) {
                      if (((n = e > 0 ? d[e - 1] : null), (r = e < h - 1 ? d[e + 1] : null) && !r.model.skip)) {
                        var f = r.model.x - i.model.x;
                        i.deltaK = 0 !== f ? (r.model.y - i.model.y) / f : 0;
                      }
                      i.mK =
                        !n || n.model.skip
                          ? i.deltaK
                          : !r || r.model.skip
                          ? n.deltaK
                          : this.sign(n.deltaK) !== this.sign(i.deltaK)
                          ? 0
                          : (n.deltaK + i.deltaK) / 2;
                    }
                  for (e = 0; e < h - 1; ++e)
                    (r = d[e + 1]),
                      (i = d[e]).model.skip ||
                        r.model.skip ||
                        (o.almostEquals(i.deltaK, 0, this.EPSILON)
                          ? (i.mK = r.mK = 0)
                          : ((a = i.mK / i.deltaK),
                            (s = r.mK / i.deltaK),
                            (u = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 ||
                              ((l = 3 / Math.sqrt(u)), (i.mK = a * l * i.deltaK), (r.mK = s * l * i.deltaK))));
                  for (e = 0; e < h; ++e)
                    (i = d[e]).model.skip ||
                      ((n = e > 0 ? d[e - 1] : null),
                      (r = e < h - 1 ? d[e + 1] : null),
                      n &&
                        !n.model.skip &&
                        ((i.model.controlPointPreviousX = i.model.x - (c = (i.model.x - n.model.x) / 3)),
                        (i.model.controlPointPreviousY = i.model.y - c * i.mK)),
                      r &&
                        !r.model.skip &&
                        ((i.model.controlPointNextX = i.model.x + (c = (r.model.x - i.model.x) / 3)),
                        (i.model.controlPointNextY = i.model.y + c * i.mK)));
                }),
                (o.nextItem = function(t, e, n) {
                  return n ? (e >= t.length - 1 ? t[0] : t[e + 1]) : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
                }),
                (o.previousItem = function(t, e, n) {
                  return n ? (e <= 0 ? t[t.length - 1] : t[e - 1]) : e <= 0 ? t[0] : t[e - 1];
                }),
                (o.niceNum = function(t, e) {
                  var n = Math.floor(o.log10(t)),
                    i = t / Math.pow(10, n);
                  return (
                    (e ? (i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10) : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) *
                    Math.pow(10, n)
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
                  var n,
                    i,
                    r = t.originalEvent || t,
                    a = t.currentTarget || t.srcElement,
                    s = a.getBoundingClientRect(),
                    l = r.touches;
                  l && l.length > 0 ? ((n = l[0].clientX), (i = l[0].clientY)) : ((n = r.clientX), (i = r.clientY));
                  var u = parseFloat(o.getStyle(a, 'padding-left')),
                    c = parseFloat(o.getStyle(a, 'padding-top')),
                    d = parseFloat(o.getStyle(a, 'padding-right')),
                    h = parseFloat(o.getStyle(a, 'padding-bottom')),
                    f = s.bottom - s.top - c - h;
                  return {
                    x: (n = Math.round(
                      (((n - s.left - u) / (s.right - s.left - u - d)) * a.width) / e.currentDevicePixelRatio
                    )),
                    y: (i = Math.round((((i - s.top - c) / f) * a.height) / e.currentDevicePixelRatio))
                  };
                }),
                (o.getConstraintWidth = function(t) {
                  return a(t, 'max-width', 'clientWidth');
                }),
                (o.getConstraintHeight = function(t) {
                  return a(t, 'max-height', 'clientHeight');
                }),
                (o.getMaximumWidth = function(t) {
                  var e = t.parentNode;
                  if (!e) return t.clientWidth;
                  var n = parseInt(o.getStyle(e, 'padding-left'), 10),
                    i = parseInt(o.getStyle(e, 'padding-right'), 10),
                    r = e.clientWidth - n - i,
                    a = o.getConstraintWidth(t);
                  return isNaN(a) ? r : Math.min(r, a);
                }),
                (o.getMaximumHeight = function(t) {
                  var e = t.parentNode;
                  if (!e) return t.clientHeight;
                  var n = parseInt(o.getStyle(e, 'padding-top'), 10),
                    i = parseInt(o.getStyle(e, 'padding-bottom'), 10),
                    r = e.clientHeight - n - i,
                    a = o.getConstraintHeight(t);
                  return isNaN(a) ? r : Math.min(r, a);
                }),
                (o.getStyle = function(t, e) {
                  return t.currentStyle
                    ? t.currentStyle[e]
                    : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
                }),
                (o.retinaScale = function(t, e) {
                  var n = (t.currentDevicePixelRatio = e || window.devicePixelRatio || 1);
                  if (1 !== n) {
                    var i = t.canvas,
                      r = t.height,
                      o = t.width;
                    (i.height = r * n),
                      (i.width = o * n),
                      t.ctx.scale(n, n),
                      i.style.height || i.style.width || ((i.style.height = r + 'px'), (i.style.width = o + 'px'));
                  }
                }),
                (o.fontString = function(t, e, n) {
                  return e + ' ' + t + 'px ' + n;
                }),
                (o.longestText = function(t, e, n, i) {
                  var r = ((i = i || {}).data = i.data || {}),
                    a = (i.garbageCollect = i.garbageCollect || []);
                  i.font !== e && ((r = i.data = {}), (a = i.garbageCollect = []), (i.font = e)), (t.font = e);
                  var s = 0;
                  o.each(n, function(e) {
                    null != e && !0 !== o.isArray(e)
                      ? (s = o.measureText(t, r, a, s, e))
                      : o.isArray(e) &&
                        o.each(e, function(e) {
                          null == e || o.isArray(e) || (s = o.measureText(t, r, a, s, e));
                        });
                  });
                  var l = a.length / 2;
                  if (l > n.length) {
                    for (var u = 0; u < l; u++) delete r[a[u]];
                    a.splice(0, l);
                  }
                  return s;
                }),
                (o.measureText = function(t, e, n, i, r) {
                  var o = e[r];
                  return o || ((o = e[r] = t.measureText(r).width), n.push(r)), o > i && (i = o), i;
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
                (o.color = i
                  ? function(t) {
                      return t instanceof CanvasGradient && (t = r.global.defaultColor), i(t);
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
          function(t, e, n) {
            'use strict';
            var i = t(45);
            function r(t, e) {
              return t.native ? { x: t.x, y: t.y } : i.getRelativePosition(t, e);
            }
            function o(t, e) {
              var n, i, r, o, a;
              for (i = 0, o = t.data.datasets.length; i < o; ++i)
                if (t.isDatasetVisible(i))
                  for (r = 0, a = (n = t.getDatasetMeta(i)).data.length; r < a; ++r) {
                    var s = n.data[r];
                    s._view.skip || e(s);
                  }
            }
            function a(t, e) {
              var n = [];
              return (
                o(t, function(t) {
                  t.inRange(e.x, e.y) && n.push(t);
                }),
                n
              );
            }
            function s(t, e, n, i) {
              var r = Number.POSITIVE_INFINITY,
                a = [];
              return (
                o(t, function(t) {
                  if (!n || t.inRange(e.x, e.y)) {
                    var o = t.getCenterPoint(),
                      s = i(e, o);
                    s < r ? ((a = [t]), (r = s)) : s === r && a.push(t);
                  }
                }),
                a
              );
            }
            function l(t) {
              var e = -1 !== t.indexOf('x'),
                n = -1 !== t.indexOf('y');
              return function(t, i) {
                var r = e ? Math.abs(t.x - i.x) : 0,
                  o = n ? Math.abs(t.y - i.y) : 0;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
              };
            }
            function u(t, e, n) {
              var i = r(e, t);
              n.axis = n.axis || 'x';
              var o = l(n.axis),
                u = n.intersect ? a(t, i) : s(t, i, !1, o),
                c = [];
              return u.length
                ? (t.data.datasets.forEach(function(e, n) {
                    if (t.isDatasetVisible(n)) {
                      var i = t.getDatasetMeta(n).data[u[0]._index];
                      i && !i._view.skip && c.push(i);
                    }
                  }),
                  c)
                : [];
            }
            e.exports = {
              modes: {
                single: function(t, e) {
                  var n = r(e, t),
                    i = [];
                  return (
                    o(t, function(t) {
                      if (t.inRange(n.x, n.y)) return i.push(t), i;
                    }),
                    i.slice(0, 1)
                  );
                },
                label: u,
                index: u,
                dataset: function(t, e, n) {
                  var i = r(e, t);
                  n.axis = n.axis || 'xy';
                  var o = l(n.axis),
                    u = n.intersect ? a(t, i) : s(t, i, !1, o);
                  return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
                },
                'x-axis': function(t, e) {
                  return u(t, e, { intersect: !1 });
                },
                point: function(t, e) {
                  return a(t, r(e, t));
                },
                nearest: function(t, e, n) {
                  var i = r(e, t);
                  n.axis = n.axis || 'xy';
                  var o = l(n.axis),
                    a = s(t, i, n.intersect, o);
                  return (
                    a.length > 1 &&
                      a.sort(function(t, e) {
                        var n = t.getArea() - e.getArea();
                        return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
                      }),
                    a.slice(0, 1)
                  );
                },
                x: function(t, e, n) {
                  var i = r(e, t),
                    a = [],
                    s = !1;
                  return (
                    o(t, function(t) {
                      t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (s = !0);
                    }),
                    n.intersect && !s && (a = []),
                    a
                  );
                },
                y: function(t, e, n) {
                  var i = r(e, t),
                    a = [],
                    s = !1;
                  return (
                    o(t, function(t) {
                      t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (s = !0);
                    }),
                    n.intersect && !s && (a = []),
                    a
                  );
                }
              }
            };
          },
          { 45: 45 }
        ],
        29: [
          function(t, e, n) {
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
          function(t, e, n) {
            'use strict';
            var i = t(45);
            function r(t, e) {
              return i.where(t, function(t) {
                return t.position === e;
              });
            }
            function o(t, e) {
              t.forEach(function(t, e) {
                return (t._tmpIndex_ = e), t;
              }),
                t.sort(function(t, n) {
                  var i = e ? n : t,
                    r = e ? t : n;
                  return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight;
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
                var n = t.boxes ? t.boxes.indexOf(e) : -1;
                -1 !== n && t.boxes.splice(n, 1);
              },
              configure: function(t, e, n) {
                for (var i, r = ['fullWidth', 'position', 'weight'], o = r.length, a = 0; a < o; ++a)
                  n.hasOwnProperty((i = r[a])) && (e[i] = n[i]);
              },
              update: function(t, e, n) {
                if (t) {
                  var a = i.options.toPadding((t.options.layout || {}).padding),
                    s = a.left,
                    l = a.right,
                    u = a.top,
                    c = a.bottom,
                    d = r(t.boxes, 'left'),
                    h = r(t.boxes, 'right'),
                    f = r(t.boxes, 'top'),
                    p = r(t.boxes, 'bottom'),
                    g = r(t.boxes, 'chartArea');
                  o(d, !0), o(h, !1), o(f, !0), o(p, !1);
                  var m = e - s - l,
                    v = n - u - c,
                    y = (e - m / 2) / (d.length + h.length),
                    b = (n - v / 2) / (f.length + p.length),
                    x = m,
                    _ = v,
                    w = [];
                  i.each(d.concat(h, f, p), function(t) {
                    var e,
                      n = t.isHorizontal();
                    n
                      ? ((e = t.update(t.fullWidth ? m : x, b)), (_ -= e.height))
                      : ((e = t.update(y, _)), (x -= e.width)),
                      w.push({ horizontal: n, minSize: e, box: t });
                  });
                  var C = 0,
                    S = 0,
                    T = 0,
                    k = 0;
                  i.each(f.concat(p), function(t) {
                    if (t.getPadding) {
                      var e = t.getPadding();
                      (C = Math.max(C, e.left)), (S = Math.max(S, e.right));
                    }
                  }),
                    i.each(d.concat(h), function(t) {
                      if (t.getPadding) {
                        var e = t.getPadding();
                        (T = Math.max(T, e.top)), (k = Math.max(k, e.bottom));
                      }
                    });
                  var D = s,
                    A = l,
                    E = u,
                    I = c;
                  i.each(d.concat(h), F),
                    i.each(d, function(t) {
                      D += t.width;
                    }),
                    i.each(h, function(t) {
                      A += t.width;
                    }),
                    i.each(f.concat(p), F),
                    i.each(f, function(t) {
                      E += t.height;
                    }),
                    i.each(p, function(t) {
                      I += t.height;
                    }),
                    i.each(d.concat(h), function(t) {
                      var e = i.findNextWhere(w, function(e) {
                        return e.box === t;
                      });
                      e && t.update(e.minSize.width, _, { left: 0, right: 0, top: E, bottom: I });
                    }),
                    (D = s),
                    (A = l),
                    (E = u),
                    (I = c),
                    i.each(d, function(t) {
                      D += t.width;
                    }),
                    i.each(h, function(t) {
                      A += t.width;
                    }),
                    i.each(f, function(t) {
                      E += t.height;
                    }),
                    i.each(p, function(t) {
                      I += t.height;
                    });
                  var M = Math.max(C - D, 0);
                  (D += M), (A += Math.max(S - A, 0));
                  var O = Math.max(T - E, 0);
                  (E += O), (I += Math.max(k - I, 0));
                  var P = n - E - I,
                    N = e - D - A;
                  (N === x && P === _) ||
                    (i.each(d, function(t) {
                      t.height = P;
                    }),
                    i.each(h, function(t) {
                      t.height = P;
                    }),
                    i.each(f, function(t) {
                      t.fullWidth || (t.width = N);
                    }),
                    i.each(p, function(t) {
                      t.fullWidth || (t.width = N);
                    }),
                    (_ = P),
                    (x = N));
                  var L = s + M,
                    R = u + O;
                  i.each(d.concat(f), j),
                    (L += x),
                    (R += _),
                    i.each(h, j),
                    i.each(p, j),
                    (t.chartArea = { left: D, top: E, right: D + x, bottom: E + _ }),
                    i.each(g, function(e) {
                      (e.left = t.chartArea.left),
                        (e.top = t.chartArea.top),
                        (e.right = t.chartArea.right),
                        (e.bottom = t.chartArea.bottom),
                        e.update(x, _);
                    });
                }
                function F(t) {
                  var e = i.findNextWhere(w, function(e) {
                    return e.box === t;
                  });
                  if (e)
                    if (t.isHorizontal()) {
                      var n = { left: Math.max(D, C), right: Math.max(A, S), top: 0, bottom: 0 };
                      t.update(t.fullWidth ? m : x, v / 2, n);
                    } else t.update(e.minSize.width, _);
                }
                function j(t) {
                  t.isHorizontal()
                    ? ((t.left = t.fullWidth ? s : D),
                      (t.right = t.fullWidth ? e - l : D + x),
                      (t.top = R),
                      (t.bottom = R + t.height),
                      (R = t.bottom))
                    : ((t.left = L), (t.right = L + t.width), (t.top = E), (t.bottom = E + _), (L = t.right));
                }
              }
            };
          },
          { 45: 45 }
        ],
        31: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(45);
            i._set('global', { plugins: {} }),
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
                    var n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1);
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
                notify: function(t, e, n) {
                  var i,
                    r,
                    o,
                    a,
                    s,
                    l = this.descriptors(t),
                    u = l.length;
                  for (i = 0; i < u; ++i)
                    if (
                      'function' == typeof (s = (o = (r = l[i]).plugin)[e]) &&
                      ((a = [t].concat(n || [])).push(r.options), !1 === s.apply(o, a))
                    )
                      return !1;
                  return !0;
                },
                descriptors: function(t) {
                  var e = t.$plugins || (t.$plugins = {});
                  if (e.id === this._cacheId) return e.descriptors;
                  var n = [],
                    o = [],
                    a = (t && t.config) || {},
                    s = (a.options && a.options.plugins) || {};
                  return (
                    this._plugins.concat(a.plugins || []).forEach(function(t) {
                      if (-1 === n.indexOf(t)) {
                        var e = t.id,
                          a = s[e];
                        !1 !== a &&
                          (!0 === a && (a = r.clone(i.global.plugins[e])),
                          n.push(t),
                          o.push({ plugin: t, options: a || {} }));
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45),
              a = t(34);
            function s(t) {
              var e,
                n,
                i = [];
              for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
              return i;
            }
            function l(t, e, n) {
              var i = t.getPixelForTick(e);
              return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i;
            }
            i._set('scale', {
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
                callback: a.formatters.values,
                minor: {},
                major: {}
              }
            }),
              (e.exports = function(t) {
                function e(t, e, n) {
                  return o.isArray(e) ? o.longestText(t, n, e) : t.measureText(e).width;
                }
                function n(t) {
                  var e = o.valueOrDefault,
                    n = i.global,
                    r = e(t.fontSize, n.defaultFontSize),
                    a = e(t.fontStyle, n.defaultFontStyle),
                    s = e(t.fontFamily, n.defaultFontFamily);
                  return { size: r, style: a, family: s, font: o.fontString(r, a, s) };
                }
                function a(t) {
                  return o.options.toLineHeight(
                    o.valueOrDefault(t.lineHeight, 1.2),
                    o.valueOrDefault(t.fontSize, i.global.defaultFontSize)
                  );
                }
                t.Scale = r.extend({
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
                  update: function(t, e, n) {
                    var i,
                      r,
                      a,
                      s,
                      l,
                      u,
                      c = this;
                    for (
                      c.beforeUpdate(),
                        c.maxWidth = t,
                        c.maxHeight = e,
                        c.margins = o.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n),
                        c.longestTextCache = c.longestTextCache || {},
                        c.beforeSetDimensions(),
                        c.setDimensions(),
                        c.afterSetDimensions(),
                        c.beforeDataLimits(),
                        c.determineDataLimits(),
                        c.afterDataLimits(),
                        c.beforeBuildTicks(),
                        l = c.buildTicks() || [],
                        c.afterBuildTicks(),
                        c.beforeTickToLabelConversion(),
                        a = c.convertTicksToLabels(l) || c.ticks,
                        c.afterTickToLabelConversion(),
                        c.ticks = a,
                        i = 0,
                        r = a.length;
                      i < r;
                      ++i
                    )
                      (s = a[i]), (u = l[i]) ? (u.label = s) : l.push((u = { label: s, major: !1 }));
                    return (
                      (c._ticks = l),
                      c.beforeCalculateTickRotation(),
                      c.calculateTickRotation(),
                      c.afterCalculateTickRotation(),
                      c.beforeFit(),
                      c.fit(),
                      c.afterFit(),
                      c.afterUpdate(),
                      c.minSize
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
                      i = t.options.ticks,
                      r = s(t._ticks),
                      a = n(i);
                    e.font = a.font;
                    var l = i.minRotation || 0;
                    if (r.length && t.options.display && t.isHorizontal())
                      for (
                        var u,
                          c = o.longestText(e, a.font, r, t.longestTextCache),
                          d = c,
                          h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6;
                        d > h && l < i.maxRotation;

                      ) {
                        var f = o.toRadians(l);
                        if (((u = Math.cos(f)), Math.sin(f) * c > t.maxHeight)) {
                          l--;
                          break;
                        }
                        l++, (d = u * c);
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
                      i = (t.minSize = { width: 0, height: 0 }),
                      r = s(t._ticks),
                      l = t.options,
                      u = l.ticks,
                      c = l.scaleLabel,
                      d = l.gridLines,
                      h = l.display,
                      f = t.isHorizontal(),
                      p = n(u),
                      g = l.gridLines.tickMarkLength;
                    if (
                      ((i.width = f
                        ? t.isFullWidth()
                          ? t.maxWidth - t.margins.left - t.margins.right
                          : t.maxWidth
                        : h && d.drawTicks
                        ? g
                        : 0),
                      (i.height = f ? (h && d.drawTicks ? g : 0) : t.maxHeight),
                      c.display && h)
                    ) {
                      var m = a(c) + o.options.toPadding(c.padding).height;
                      f ? (i.height += m) : (i.width += m);
                    }
                    if (u.display && h) {
                      var v = o.longestText(t.ctx, p.font, r, t.longestTextCache),
                        y = o.numberOfLabelLines(r),
                        b = 0.5 * p.size,
                        x = t.options.ticks.padding;
                      if (f) {
                        t.longestLabelWidth = v;
                        var _ = o.toRadians(t.labelRotation),
                          w = Math.cos(_),
                          C = Math.sin(_) * v + p.size * y + b * (y - 1) + b;
                        (i.height = Math.min(t.maxHeight, i.height + C + x)), (t.ctx.font = p.font);
                        var S = e(t.ctx, r[0], p.font),
                          T = e(t.ctx, r[r.length - 1], p.font);
                        0 !== t.labelRotation
                          ? ((t.paddingLeft = 'bottom' === l.position ? w * S + 3 : w * b + 3),
                            (t.paddingRight = 'bottom' === l.position ? w * b + 3 : w * T + 3))
                          : ((t.paddingLeft = S / 2 + 3), (t.paddingRight = T / 2 + 3));
                      } else
                        u.mirror ? (v = 0) : (v += x + b),
                          (i.width = Math.min(t.maxWidth, i.width + v)),
                          (t.paddingTop = p.size / 2),
                          (t.paddingBottom = p.size / 2);
                    }
                    t.handleMargins(), (t.width = i.width), (t.height = i.height);
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
                      n = e.options.offset;
                    if (e.isHorizontal()) {
                      var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                        r = i * t + e.paddingLeft;
                      return n && (r += i / 2), e.left + Math.round(r) + (e.isFullWidth() ? e.margins.left : 0);
                    }
                    return e.top + t * ((e.height - (e.paddingTop + e.paddingBottom)) / (e._ticks.length - 1));
                  },
                  getPixelForDecimal: function(t) {
                    var e = this;
                    return e.isHorizontal()
                      ? e.left +
                          Math.round((e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft) +
                          (e.isFullWidth() ? e.margins.left : 0)
                      : e.top + t * e.height;
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
                      n,
                      i,
                      r,
                      a = this,
                      s = a.isHorizontal(),
                      l = a.options.ticks.minor,
                      u = t.length,
                      c = o.toRadians(a.labelRotation),
                      d = Math.cos(c),
                      h = a.longestLabelWidth * d,
                      f = [];
                    for (
                      l.maxTicksLimit && (r = l.maxTicksLimit),
                        s &&
                          ((e = !1),
                          (h + l.autoSkipPadding) * u > a.width - (a.paddingLeft + a.paddingRight) &&
                            (e =
                              1 +
                              Math.floor(((h + l.autoSkipPadding) * u) / (a.width - (a.paddingLeft + a.paddingRight)))),
                          r && u > r && (e = Math.max(e, Math.floor(u / r)))),
                        n = 0;
                      n < u;
                      n++
                    )
                      (i = t[n]),
                        ((e > 1 && n % e > 0) || (n % e == 0 && n + e >= u)) && n !== u - 1 && delete i.label,
                        f.push(i);
                    return f;
                  },
                  draw: function(t) {
                    var e = this,
                      r = e.options;
                    if (r.display) {
                      var s = e.ctx,
                        u = i.global,
                        c = r.ticks.minor,
                        d = r.ticks.major || c,
                        h = r.gridLines,
                        f = r.scaleLabel,
                        p = 0 !== e.labelRotation,
                        g = e.isHorizontal(),
                        m = c.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                        v = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                        y = n(c),
                        b = o.valueOrDefault(d.fontColor, u.defaultFontColor),
                        x = n(d),
                        _ = h.drawTicks ? h.tickMarkLength : 0,
                        w = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                        C = n(f),
                        S = o.options.toPadding(f.padding),
                        T = o.toRadians(e.labelRotation),
                        k = [],
                        D = e.options.gridLines.lineWidth,
                        A = 'right' === r.position ? e.right : e.right - D - _,
                        E = 'right' === r.position ? e.right + _ : e.right,
                        I = 'bottom' === r.position ? e.top + D : e.bottom - _ - D,
                        M = 'bottom' === r.position ? e.top + D + _ : e.bottom + D;
                      if (
                        (o.each(m, function(n, i) {
                          if (!o.isNullOrUndef(n.label)) {
                            var a,
                              s,
                              d,
                              f,
                              v,
                              y,
                              b,
                              x,
                              w,
                              C,
                              S,
                              O,
                              P,
                              N,
                              L = n.label;
                            i === e.zeroLineIndex && r.offset === h.offsetGridLines
                              ? ((a = h.zeroLineWidth),
                                (s = h.zeroLineColor),
                                (d = h.zeroLineBorderDash),
                                (f = h.zeroLineBorderDashOffset))
                              : ((a = o.valueAtIndexOrDefault(h.lineWidth, i)),
                                (s = o.valueAtIndexOrDefault(h.color, i)),
                                (d = o.valueOrDefault(h.borderDash, u.borderDash)),
                                (f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset)));
                            var R = 'middle',
                              F = 'middle',
                              j = c.padding;
                            if (g) {
                              var H = _ + j;
                              'bottom' === r.position
                                ? ((F = p ? 'middle' : 'top'), (R = p ? 'right' : 'center'), (N = e.top + H))
                                : ((F = p ? 'middle' : 'bottom'), (R = p ? 'left' : 'center'), (N = e.bottom - H));
                              var W = l(e, i, h.offsetGridLines && m.length > 1);
                              W < e.left && (s = 'rgba(0,0,0,0)'),
                                (W += o.aliasPixel(a)),
                                (P = e.getPixelForTick(i) + c.labelOffset),
                                (v = b = w = S = W),
                                (y = I),
                                (x = M),
                                (C = t.top),
                                (O = t.bottom + D);
                            } else {
                              var B,
                                $ = 'left' === r.position;
                              c.mirror
                                ? ((R = $ ? 'left' : 'right'), (B = j))
                                : ((R = $ ? 'right' : 'left'), (B = _ + j)),
                                (P = $ ? e.right - B : e.left + B);
                              var q = l(e, i, h.offsetGridLines && m.length > 1);
                              q < e.top && (s = 'rgba(0,0,0,0)'),
                                (q += o.aliasPixel(a)),
                                (N = e.getPixelForTick(i) + c.labelOffset),
                                (v = A),
                                (b = E),
                                (w = t.left),
                                (S = t.right + D),
                                (y = x = C = O = q);
                            }
                            k.push({
                              tx1: v,
                              ty1: y,
                              tx2: b,
                              ty2: x,
                              x1: w,
                              y1: C,
                              x2: S,
                              y2: O,
                              labelX: P,
                              labelY: N,
                              glWidth: a,
                              glColor: s,
                              glBorderDash: d,
                              glBorderDashOffset: f,
                              rotation: -1 * T,
                              label: L,
                              major: n.major,
                              textBaseline: F,
                              textAlign: R
                            });
                          }
                        }),
                        o.each(k, function(t) {
                          if (
                            (h.display &&
                              (s.save(),
                              (s.lineWidth = t.glWidth),
                              (s.strokeStyle = t.glColor),
                              s.setLineDash &&
                                (s.setLineDash(t.glBorderDash), (s.lineDashOffset = t.glBorderDashOffset)),
                              s.beginPath(),
                              h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)),
                              h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)),
                              s.stroke(),
                              s.restore()),
                            c.display)
                          ) {
                            s.save(),
                              s.translate(t.labelX, t.labelY),
                              s.rotate(t.rotation),
                              (s.font = t.major ? x.font : y.font),
                              (s.fillStyle = t.major ? b : v),
                              (s.textBaseline = t.textBaseline),
                              (s.textAlign = t.textAlign);
                            var n = t.label;
                            if (o.isArray(n))
                              for (
                                var i = n.length,
                                  r = 1.5 * y.size,
                                  a = e.isHorizontal() ? 0 : (-r * (i - 1)) / 2,
                                  l = 0;
                                l < i;
                                ++l
                              )
                                s.fillText('' + n[l], 0, a), (a += r);
                            else s.fillText(n, 0, 0);
                            s.restore();
                          }
                        }),
                        f.display)
                      ) {
                        var O,
                          P,
                          N = 0,
                          L = a(f) / 2;
                        if (g)
                          (O = e.left + (e.right - e.left) / 2),
                            (P = 'bottom' === r.position ? e.bottom - L - S.bottom : e.top + L + S.top);
                        else {
                          var R = 'left' === r.position;
                          (O = R ? e.left + L + S.top : e.right - L - S.top),
                            (P = e.top + (e.bottom - e.top) / 2),
                            (N = R ? -0.5 * Math.PI : 0.5 * Math.PI);
                        }
                        s.save(),
                          s.translate(O, P),
                          s.rotate(N),
                          (s.textAlign = 'center'),
                          (s.textBaseline = 'middle'),
                          (s.fillStyle = w),
                          (s.font = C.font),
                          s.fillText(f.labelString, 0, 0),
                          s.restore();
                      }
                      if (h.drawBorder) {
                        (s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0)),
                          (s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0));
                        var F = e.left,
                          j = e.right + D,
                          H = e.top,
                          W = e.bottom + D,
                          B = o.aliasPixel(s.lineWidth);
                        g
                          ? ((H = W = 'top' === r.position ? e.bottom : e.top), (H += B), (W += B))
                          : ((F = j = 'left' === r.position ? e.right : e.left), (F += B), (j += B)),
                          s.beginPath(),
                          s.moveTo(F, H),
                          s.lineTo(j, W),
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(45),
              o = t(30);
            e.exports = function(t) {
              t.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(t, e, n) {
                  (this.constructors[t] = e), (this.defaults[t] = r.clone(n));
                },
                getScaleConstructor: function(t) {
                  return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
                },
                getScaleDefaults: function(t) {
                  return this.defaults.hasOwnProperty(t) ? r.merge({}, [i.scale, this.defaults[t]]) : {};
                },
                updateScaleDefaults: function(t, e) {
                  this.defaults.hasOwnProperty(t) && (this.defaults[t] = r.extend(this.defaults[t], e));
                },
                addScalesToLayout: function(t) {
                  r.each(t.scales, function(e) {
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
          function(t, e, n) {
            'use strict';
            var i = t(45);
            e.exports = {
              formatters: {
                values: function(t) {
                  return i.isArray(t) ? t : '' + t;
                },
                linear: function(t, e, n) {
                  var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                  Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                  var o = i.log10(Math.abs(r)),
                    a = '';
                  if (0 !== t) {
                    var s = -1 * Math.floor(o);
                    (s = Math.max(Math.min(s, 20), 0)), (a = t.toFixed(s));
                  } else a = '0';
                  return a;
                },
                logarithmic: function(t, e, n) {
                  var r = t / Math.pow(10, Math.floor(i.log10(t)));
                  return 0 === t
                    ? '0'
                    : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1
                    ? t.toExponential()
                    : '';
                }
              }
            };
          },
          { 45: 45 }
        ],
        35: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45);
            i._set('global', {
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
                    var n = '',
                      i = e.labels,
                      r = i ? i.length : 0;
                    if (t.length > 0) {
                      var o = t[0];
                      o.xLabel ? (n = o.xLabel) : r > 0 && o.index < r && (n = i[o.index]);
                    }
                    return n;
                  },
                  afterTitle: o.noop,
                  beforeBody: o.noop,
                  beforeLabel: o.noop,
                  label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || '';
                    return n && (n += ': '), n + t.yLabel;
                  },
                  labelColor: function(t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return { borderColor: n.borderColor, backgroundColor: n.backgroundColor };
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
                  var n = o.color(t);
                  return n.alpha(e * n.alpha()).rgbaString();
                }
                function n(t, e) {
                  return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
                }
                function a(t) {
                  var e = i.global,
                    n = o.valueOrDefault;
                  return {
                    xPadding: t.xPadding,
                    yPadding: t.yPadding,
                    xAlign: t.xAlign,
                    yAlign: t.yAlign,
                    bodyFontColor: t.bodyFontColor,
                    _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                    _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                    _bodyAlign: t.bodyAlign,
                    bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                    bodySpacing: t.bodySpacing,
                    titleFontColor: t.titleFontColor,
                    _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                    _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                    titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                    _titleAlign: t.titleAlign,
                    titleSpacing: t.titleSpacing,
                    titleMarginBottom: t.titleMarginBottom,
                    footerFontColor: t.footerFontColor,
                    _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                    _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                    footerFontSize: n(t.footerFontSize, e.defaultFontSize),
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
                (t.Tooltip = r.extend({
                  initialize: function() {
                    (this._model = a(this._options)), (this._lastActive = []);
                  },
                  getTitle: function() {
                    var t = this._options.callbacks,
                      e = t.beforeTitle.apply(this, arguments),
                      i = t.title.apply(this, arguments),
                      r = t.afterTitle.apply(this, arguments),
                      o = [];
                    return n((o = n((o = n(o, e)), i)), r);
                  },
                  getBeforeBody: function() {
                    var t = this._options.callbacks.beforeBody.apply(this, arguments);
                    return o.isArray(t) ? t : void 0 !== t ? [t] : [];
                  },
                  getBody: function(t, e) {
                    var i = this,
                      r = i._options.callbacks,
                      a = [];
                    return (
                      o.each(t, function(t) {
                        var o = { before: [], lines: [], after: [] };
                        n(o.before, r.beforeLabel.call(i, t, e)),
                          n(o.lines, r.label.call(i, t, e)),
                          n(o.after, r.afterLabel.call(i, t, e)),
                          a.push(o);
                      }),
                      a
                    );
                  },
                  getAfterBody: function() {
                    var t = this._options.callbacks.afterBody.apply(this, arguments);
                    return o.isArray(t) ? t : void 0 !== t ? [t] : [];
                  },
                  getFooter: function() {
                    var t = this._options.callbacks,
                      e = t.beforeFooter.apply(this, arguments),
                      i = t.footer.apply(this, arguments),
                      r = t.afterFooter.apply(this, arguments),
                      o = [];
                    return n((o = n((o = n(o, e)), i)), r);
                  },
                  update: function(e) {
                    var n,
                      i,
                      r,
                      s,
                      l,
                      u,
                      c,
                      d,
                      h,
                      f,
                      p,
                      g,
                      m,
                      v,
                      y,
                      b,
                      x,
                      _,
                      w = this,
                      C = w._options,
                      S = w._model,
                      T = (w._model = a(C)),
                      k = w._active,
                      D = w._data,
                      A = { xAlign: S.xAlign, yAlign: S.yAlign },
                      E = { x: S.x, y: S.y },
                      I = { width: S.width, height: S.height },
                      M = { x: S.caretX, y: S.caretY };
                    if (k.length) {
                      T.opacity = 1;
                      var O = [],
                        P = [];
                      M = t.Tooltip.positioners[C.position].call(w, k, w._eventPosition);
                      var N = [];
                      for (n = 0, i = k.length; n < i; ++n)
                        N.push(
                          ((y = void 0),
                          (b = void 0),
                          (y = (v = k[n])._xScale),
                          (b = v._yScale || v._scale),
                          (x = v._index),
                          (_ = v._datasetIndex),
                          {
                            xLabel: y ? y.getLabelForIndex(x, _) : '',
                            yLabel: b ? b.getLabelForIndex(x, _) : '',
                            index: x,
                            datasetIndex: _,
                            x: v._model.x,
                            y: v._model.y
                          })
                        );
                      C.filter &&
                        (N = N.filter(function(t) {
                          return C.filter(t, D);
                        })),
                        C.itemSort &&
                          (N = N.sort(function(t, e) {
                            return C.itemSort(t, e, D);
                          })),
                        o.each(N, function(t) {
                          O.push(C.callbacks.labelColor.call(w, t, w._chart)),
                            P.push(C.callbacks.labelTextColor.call(w, t, w._chart));
                        }),
                        (T.title = w.getTitle(N, D)),
                        (T.beforeBody = w.getBeforeBody(N, D)),
                        (T.body = w.getBody(N, D)),
                        (T.afterBody = w.getAfterBody(N, D)),
                        (T.footer = w.getFooter(N, D)),
                        (T.x = Math.round(M.x)),
                        (T.y = Math.round(M.y)),
                        (T.caretPadding = C.caretPadding),
                        (T.labelColors = O),
                        (T.labelTextColors = P),
                        (T.dataPoints = N),
                        (A = (function(t, e) {
                          var n,
                            i,
                            r,
                            o,
                            a,
                            s = t._model,
                            l = t._chart,
                            u = t._chart.chartArea,
                            c = 'center',
                            d = 'center';
                          s.y < e.height ? (d = 'top') : s.y > l.height - e.height && (d = 'bottom');
                          var h = (u.left + u.right) / 2,
                            f = (u.top + u.bottom) / 2;
                          'center' === d
                            ? ((n = function(t) {
                                return t <= h;
                              }),
                              (i = function(t) {
                                return t > h;
                              }))
                            : ((n = function(t) {
                                return t <= e.width / 2;
                              }),
                              (i = function(t) {
                                return t >= l.width - e.width / 2;
                              })),
                            (r = function(t) {
                              return t + e.width + s.caretSize + s.caretPadding > l.width;
                            }),
                            (o = function(t) {
                              return t - e.width - s.caretSize - s.caretPadding < 0;
                            }),
                            (a = function(t) {
                              return t <= f ? 'top' : 'bottom';
                            }),
                            n(s.x)
                              ? ((c = 'left'), r(s.x) && ((c = 'center'), (d = a(s.y))))
                              : i(s.x) && ((c = 'right'), o(s.x) && ((c = 'center'), (d = a(s.y))));
                          var p = t._options;
                          return { xAlign: p.xAlign ? p.xAlign : c, yAlign: p.yAlign ? p.yAlign : d };
                        })(
                          this,
                          (I = (function(t, e) {
                            var n = t._chart.ctx,
                              i = 2 * e.yPadding,
                              r = 0,
                              a = e.body,
                              s = a.reduce(function(t, e) {
                                return t + e.before.length + e.lines.length + e.after.length;
                              }, 0);
                            s += e.beforeBody.length + e.afterBody.length;
                            var l = e.title.length,
                              u = e.footer.length,
                              c = e.titleFontSize,
                              d = e.bodyFontSize,
                              h = e.footerFontSize;
                            (i += l * c),
                              (i += l ? (l - 1) * e.titleSpacing : 0),
                              (i += l ? e.titleMarginBottom : 0),
                              (i += s * d),
                              (i += s ? (s - 1) * e.bodySpacing : 0),
                              (i += u ? e.footerMarginTop : 0),
                              (i += u * h),
                              (i += u ? (u - 1) * e.footerSpacing : 0);
                            var f = 0,
                              p = function(t) {
                                r = Math.max(r, n.measureText(t).width + f);
                              };
                            return (
                              (n.font = o.fontString(c, e._titleFontStyle, e._titleFontFamily)),
                              o.each(e.title, p),
                              (n.font = o.fontString(d, e._bodyFontStyle, e._bodyFontFamily)),
                              o.each(e.beforeBody.concat(e.afterBody), p),
                              (f = e.displayColors ? d + 2 : 0),
                              o.each(a, function(t) {
                                o.each(t.before, p), o.each(t.lines, p), o.each(t.after, p);
                              }),
                              (f = 0),
                              (n.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily)),
                              o.each(e.footer, p),
                              { width: (r += 2 * e.xPadding), height: i }
                            );
                          })(this, T))
                        )),
                        (s = I),
                        (u = w._chart),
                        (c = (r = T).x),
                        (d = r.y),
                        (p = (l = A).yAlign),
                        (g = r.caretSize + (h = r.caretPadding)),
                        (m = r.cornerRadius + h),
                        'right' === (f = l.xAlign)
                          ? (c -= s.width)
                          : 'center' === f &&
                            ((c -= s.width / 2) + s.width > u.width && (c = u.width - s.width), c < 0 && (c = 0)),
                        'top' === p ? (d += g) : (d -= 'bottom' === p ? s.height + g : s.height / 2),
                        'center' === p
                          ? 'left' === f
                            ? (c += g)
                            : 'right' === f && (c -= g)
                          : 'left' === f
                          ? (c -= m)
                          : 'right' === f && (c += m),
                        (E = { x: c, y: d });
                    } else T.opacity = 0;
                    return (
                      (T.xAlign = A.xAlign),
                      (T.yAlign = A.yAlign),
                      (T.x = E.x),
                      (T.y = E.y),
                      (T.width = I.width),
                      (T.height = I.height),
                      (T.caretX = M.x),
                      (T.caretY = M.y),
                      (w._model = T),
                      e && C.custom && C.custom.call(w, T),
                      w
                    );
                  },
                  drawCaret: function(t, e) {
                    var n = this._chart.ctx,
                      i = this.getCaretPosition(t, e, this._view);
                    n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
                  },
                  getCaretPosition: function(t, e, n) {
                    var i,
                      r,
                      o,
                      a,
                      s,
                      l,
                      u = n.caretSize,
                      c = n.cornerRadius,
                      d = n.xAlign,
                      h = n.yAlign,
                      f = t.x,
                      p = t.y,
                      g = e.width,
                      m = e.height;
                    if ('center' === h)
                      (s = p + m / 2),
                        'left' === d
                          ? ((r = (i = f) - u), (o = i), (a = s + u), (l = s - u))
                          : ((r = (i = f + g) + u), (o = i), (a = s - u), (l = s + u));
                    else if (
                      ('left' === d
                        ? ((i = (r = f + c + u) - u), (o = r + u))
                        : 'right' === d
                        ? ((i = (r = f + g - c - u) - u), (o = r + u))
                        : ((i = (r = n.caretX) - u), (o = r + u)),
                      'top' === h)
                    )
                      (s = (a = p) - u), (l = a);
                    else {
                      (s = (a = p + m) + u), (l = a);
                      var v = o;
                      (o = i), (i = v);
                    }
                    return { x1: i, x2: r, x3: o, y1: a, y2: s, y3: l };
                  },
                  drawTitle: function(t, n, i, r) {
                    var a = n.title;
                    if (a.length) {
                      (i.textAlign = n._titleAlign), (i.textBaseline = 'top');
                      var s,
                        l,
                        u = n.titleFontSize,
                        c = n.titleSpacing;
                      for (
                        i.fillStyle = e(n.titleFontColor, r),
                          i.font = o.fontString(u, n._titleFontStyle, n._titleFontFamily),
                          s = 0,
                          l = a.length;
                        s < l;
                        ++s
                      )
                        i.fillText(a[s], t.x, t.y),
                          (t.y += u + c),
                          s + 1 === a.length && (t.y += n.titleMarginBottom - c);
                    }
                  },
                  drawBody: function(t, n, i, r) {
                    var a = n.bodyFontSize,
                      s = n.bodySpacing,
                      l = n.body;
                    (i.textAlign = n._bodyAlign),
                      (i.textBaseline = 'top'),
                      (i.font = o.fontString(a, n._bodyFontStyle, n._bodyFontFamily));
                    var u = 0,
                      c = function(e) {
                        i.fillText(e, t.x + u, t.y), (t.y += a + s);
                      };
                    (i.fillStyle = e(n.bodyFontColor, r)), o.each(n.beforeBody, c);
                    var d = n.displayColors;
                    (u = d ? a + 2 : 0),
                      o.each(l, function(s, l) {
                        var u = e(n.labelTextColors[l], r);
                        (i.fillStyle = u),
                          o.each(s.before, c),
                          o.each(s.lines, function(o) {
                            d &&
                              ((i.fillStyle = e(n.legendColorBackground, r)),
                              i.fillRect(t.x, t.y, a, a),
                              (i.lineWidth = 1),
                              (i.strokeStyle = e(n.labelColors[l].borderColor, r)),
                              i.strokeRect(t.x, t.y, a, a),
                              (i.fillStyle = e(n.labelColors[l].backgroundColor, r)),
                              i.fillRect(t.x + 1, t.y + 1, a - 2, a - 2),
                              (i.fillStyle = u)),
                              c(o);
                          }),
                          o.each(s.after, c);
                      }),
                      (u = 0),
                      o.each(n.afterBody, c),
                      (t.y -= s);
                  },
                  drawFooter: function(t, n, i, r) {
                    var a = n.footer;
                    a.length &&
                      ((t.y += n.footerMarginTop),
                      (i.textAlign = n._footerAlign),
                      (i.textBaseline = 'top'),
                      (i.fillStyle = e(n.footerFontColor, r)),
                      (i.font = o.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily)),
                      o.each(a, function(e) {
                        i.fillText(e, t.x, t.y), (t.y += n.footerFontSize + n.footerSpacing);
                      }));
                  },
                  drawBackground: function(t, n, i, r, o) {
                    (i.fillStyle = e(n.backgroundColor, o)),
                      (i.strokeStyle = e(n.borderColor, o)),
                      (i.lineWidth = n.borderWidth);
                    var a = n.xAlign,
                      s = n.yAlign,
                      l = t.x,
                      u = t.y,
                      c = r.width,
                      d = r.height,
                      h = n.cornerRadius;
                    i.beginPath(),
                      i.moveTo(l + h, u),
                      'top' === s && this.drawCaret(t, r),
                      i.lineTo(l + c - h, u),
                      i.quadraticCurveTo(l + c, u, l + c, u + h),
                      'center' === s && 'right' === a && this.drawCaret(t, r),
                      i.lineTo(l + c, u + d - h),
                      i.quadraticCurveTo(l + c, u + d, l + c - h, u + d),
                      'bottom' === s && this.drawCaret(t, r),
                      i.lineTo(l + h, u + d),
                      i.quadraticCurveTo(l, u + d, l, u + d - h),
                      'center' === s && 'left' === a && this.drawCaret(t, r),
                      i.lineTo(l, u + h),
                      i.quadraticCurveTo(l, u, l + h, u),
                      i.closePath(),
                      i.fill(),
                      n.borderWidth > 0 && i.stroke();
                  },
                  draw: function() {
                    var t = this._chart.ctx,
                      e = this._view;
                    if (0 !== e.opacity) {
                      var n = { width: e.width, height: e.height },
                        i = { x: e.x, y: e.y },
                        r = Math.abs(e.opacity < 0.001) ? 0 : e.opacity;
                      this._options.enabled &&
                        (e.title.length ||
                          e.beforeBody.length ||
                          e.body.length ||
                          e.afterBody.length ||
                          e.footer.length) &&
                        (this.drawBackground(i, e, t, n, r),
                        (i.x += e.xPadding),
                        (i.y += e.yPadding),
                        this.drawTitle(i, e, t, r),
                        this.drawBody(i, e, t, r),
                        this.drawFooter(i, e, t, r));
                    }
                  },
                  handleEvent: function(t) {
                    var e,
                      n = this,
                      i = n._options;
                    return (
                      (n._lastActive = n._lastActive || []),
                      (n._active = 'mouseout' === t.type ? [] : n._chart.getElementsAtEventForMode(t, i.mode, i)),
                      (e = !o.arrayEquals(n._active, n._lastActive)) &&
                        ((n._lastActive = n._active),
                        (i.enabled || i.custom) && ((n._eventPosition = { x: t.x, y: t.y }), n.update(!0), n.pivot())),
                      e
                    );
                  }
                })),
                  (t.Tooltip.positioners = {
                    average: function(t) {
                      if (!t.length) return !1;
                      var e,
                        n,
                        i = 0,
                        r = 0,
                        o = 0;
                      for (e = 0, n = t.length; e < n; ++e) {
                        var a = t[e];
                        if (a && a.hasValue()) {
                          var s = a.tooltipPosition();
                          (i += s.x), (r += s.y), ++o;
                        }
                      }
                      return { x: Math.round(i / o), y: Math.round(r / o) };
                    },
                    nearest: function(t, e) {
                      var n,
                        i,
                        r,
                        a = e.x,
                        s = e.y,
                        l = Number.POSITIVE_INFINITY;
                      for (n = 0, i = t.length; n < i; ++n) {
                        var u = t[n];
                        if (u && u.hasValue()) {
                          var c = u.getCenterPoint(),
                            d = o.distanceBetweenPoints(e, c);
                          d < l && ((l = d), (r = u));
                        }
                      }
                      if (r) {
                        var h = r.tooltipPosition();
                        (a = h.x), (s = h.y);
                      }
                      return { x: a, y: s };
                    }
                  });
              });
          },
          { 25: 25, 26: 26, 45: 45 }
        ],
        36: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45);
            i._set('global', {
              elements: { arc: { backgroundColor: i.global.defaultColor, borderColor: '#fff', borderWidth: 2 } }
            }),
              (e.exports = r.extend({
                inLabelRange: function(t) {
                  var e = this._view;
                  return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
                },
                inRange: function(t, e) {
                  var n = this._view;
                  if (n) {
                    for (
                      var i = o.getAngleFromPoint(n, { x: t, y: e }),
                        r = i.angle,
                        a = i.distance,
                        s = n.startAngle,
                        l = n.endAngle;
                      l < s;

                    )
                      l += 2 * Math.PI;
                    for (; r > l; ) r -= 2 * Math.PI;
                    for (; r < s; ) r += 2 * Math.PI;
                    return r >= s && r <= l && a >= n.innerRadius && a <= n.outerRadius;
                  }
                  return !1;
                },
                getCenterPoint: function() {
                  var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    n = (t.innerRadius + t.outerRadius) / 2;
                  return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
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
                    n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                  return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
                },
                draw: function() {
                  var t = this._chart.ctx,
                    e = this._view,
                    n = e.startAngle,
                    i = e.endAngle;
                  t.beginPath(),
                    t.arc(e.x, e.y, e.outerRadius, n, i),
                    t.arc(e.x, e.y, e.innerRadius, i, n, !0),
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45),
              a = i.global;
            i._set('global', {
              elements: {
                line: {
                  tension: 0.4,
                  backgroundColor: a.defaultColor,
                  borderWidth: 3,
                  borderColor: a.defaultColor,
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0,
                  borderJoinStyle: 'miter',
                  capBezierPoints: !0,
                  fill: !0
                }
              }
            }),
              (e.exports = r.extend({
                draw: function() {
                  var t,
                    e,
                    n,
                    i,
                    r = this._view,
                    s = this._chart.ctx,
                    l = r.spanGaps,
                    u = this._children.slice(),
                    c = a.elements.line,
                    d = -1;
                  for (
                    this._loop && u.length && u.push(u[0]),
                      s.save(),
                      s.lineCap = r.borderCapStyle || c.borderCapStyle,
                      s.setLineDash && s.setLineDash(r.borderDash || c.borderDash),
                      s.lineDashOffset = r.borderDashOffset || c.borderDashOffset,
                      s.lineJoin = r.borderJoinStyle || c.borderJoinStyle,
                      s.lineWidth = r.borderWidth || c.borderWidth,
                      s.strokeStyle = r.borderColor || a.defaultColor,
                      s.beginPath(),
                      d = -1,
                      t = 0;
                    t < u.length;
                    ++t
                  )
                    (e = u[t]),
                      (n = o.previousItem(u, t)),
                      (i = e._view),
                      0 === t
                        ? i.skip || (s.moveTo(i.x, i.y), (d = t))
                        : ((n = -1 === d ? n : u[d]),
                          i.skip ||
                            ((d !== t - 1 && !l) || -1 === d
                              ? s.moveTo(i.x, i.y)
                              : o.canvas.lineTo(s, n._view, e._view),
                            (d = t)));
                  s.stroke(), s.restore();
                }
              }));
          },
          { 25: 25, 26: 26, 45: 45 }
        ],
        38: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45),
              a = i.global.defaultColor;
            function s(t) {
              var e = this._view;
              return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
            }
            i._set('global', {
              elements: {
                point: {
                  radius: 3,
                  pointStyle: 'circle',
                  backgroundColor: a,
                  borderColor: a,
                  borderWidth: 1,
                  hitRadius: 1,
                  hoverRadius: 4,
                  hoverBorderWidth: 1
                }
              }
            }),
              (e.exports = r.extend({
                inRange: function(t, e) {
                  var n = this._view;
                  return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
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
                    n = this._model,
                    r = this._chart.ctx,
                    s = e.pointStyle,
                    l = e.radius,
                    u = e.x,
                    c = e.y,
                    d = o.color,
                    h = 0;
                  e.skip ||
                    ((r.strokeStyle = e.borderColor || a),
                    (r.lineWidth = o.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth)),
                    (r.fillStyle = e.backgroundColor || a),
                    void 0 !== t &&
                      (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) &&
                      (n.x < t.left
                        ? (h = (u - n.x) / (t.left - n.x))
                        : 1.01 * t.right < n.x
                        ? (h = (n.x - u) / (n.x - t.right))
                        : n.y < t.top
                        ? (h = (c - n.y) / (t.top - n.y))
                        : 1.01 * t.bottom < n.y && (h = (n.y - c) / (n.y - t.bottom)),
                      (h = Math.round(100 * h) / 100),
                      (r.strokeStyle = d(r.strokeStyle)
                        .alpha(h)
                        .rgbString()),
                      (r.fillStyle = d(r.fillStyle)
                        .alpha(h)
                        .rgbString())),
                    o.canvas.drawPoint(r, s, l, u, c));
                }
              }));
          },
          { 25: 25, 26: 26, 45: 45 }
        ],
        39: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26);
            function o(t) {
              return void 0 !== t._view.width;
            }
            function a(t) {
              var e,
                n,
                i,
                r,
                a = t._view;
              if (o(t)) {
                var s = a.width / 2;
                (e = a.x - s), (n = a.x + s), (i = Math.min(a.y, a.base)), (r = Math.max(a.y, a.base));
              } else {
                var l = a.height / 2;
                (e = Math.min(a.x, a.base)), (n = Math.max(a.x, a.base)), (i = a.y - l), (r = a.y + l);
              }
              return { left: e, top: i, right: n, bottom: r };
            }
            i._set('global', {
              elements: {
                rectangle: {
                  backgroundColor: i.global.defaultColor,
                  borderColor: i.global.defaultColor,
                  borderSkipped: 'bottom',
                  borderWidth: 0
                }
              }
            }),
              (e.exports = r.extend({
                draw: function() {
                  var t,
                    e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s = this._chart.ctx,
                    l = this._view,
                    u = l.borderWidth;
                  if (
                    (l.horizontal
                      ? ((n = l.y - l.height / 2),
                        (i = l.y + l.height / 2),
                        (r = (e = l.x) > (t = l.base) ? 1 : -1),
                        (o = 1),
                        (a = l.borderSkipped || 'left'))
                      : ((t = l.x - l.width / 2),
                        (e = l.x + l.width / 2),
                        (r = 1),
                        (o = (i = l.base) > (n = l.y) ? 1 : -1),
                        (a = l.borderSkipped || 'bottom')),
                    u)
                  ) {
                    var c = Math.min(Math.abs(t - e), Math.abs(n - i)),
                      d = (u = u > c ? c : u) / 2,
                      h = t + ('left' !== a ? d * r : 0),
                      f = e + ('right' !== a ? -d * r : 0),
                      p = n + ('top' !== a ? d * o : 0),
                      g = i + ('bottom' !== a ? -d * o : 0);
                    h !== f && ((n = p), (i = g)), p !== g && ((t = h), (e = f));
                  }
                  s.beginPath(), (s.fillStyle = l.backgroundColor), (s.strokeStyle = l.borderColor), (s.lineWidth = u);
                  var m = [[t, i], [t, n], [e, n], [e, i]],
                    v = ['bottom', 'left', 'top', 'right'].indexOf(a, 0);
                  function y(t) {
                    return m[(v + t) % 4];
                  }
                  -1 === v && (v = 0);
                  var b = y(0);
                  s.moveTo(b[0], b[1]);
                  for (var x = 1; x < 4; x++) (b = y(x)), s.lineTo(b[0], b[1]);
                  s.fill(), u && s.stroke();
                },
                height: function() {
                  var t = this._view;
                  return t.base - t.y;
                },
                inRange: function(t, e) {
                  var n = !1;
                  if (this._view) {
                    var i = a(this);
                    n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom;
                  }
                  return n;
                },
                inLabelRange: function(t, e) {
                  if (!this._view) return !1;
                  var n = a(this);
                  return o(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom;
                },
                inXRange: function(t) {
                  var e = a(this);
                  return t >= e.left && t <= e.right;
                },
                inYRange: function(t) {
                  var e = a(this);
                  return t >= e.top && t <= e.bottom;
                },
                getCenterPoint: function() {
                  var t,
                    e,
                    n = this._view;
                  return (
                    o(this) ? ((t = n.x), (e = (n.y + n.base) / 2)) : ((t = (n.x + n.base) / 2), (e = n.y)),
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
          function(t, e, n) {
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
          function(t, e, n) {
            'use strict';
            var i = t(42);
            (n = e.exports = {
              clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height);
              },
              roundedRect: function(t, e, n, i, r, o) {
                if (o) {
                  var a = Math.min(o, i / 2),
                    s = Math.min(o, r / 2);
                  t.moveTo(e + a, n),
                    t.lineTo(e + i - a, n),
                    t.quadraticCurveTo(e + i, n, e + i, n + s),
                    t.lineTo(e + i, n + r - s),
                    t.quadraticCurveTo(e + i, n + r, e + i - a, n + r),
                    t.lineTo(e + a, n + r),
                    t.quadraticCurveTo(e, n + r, e, n + r - s),
                    t.lineTo(e, n + s),
                    t.quadraticCurveTo(e, n, e + a, n);
                } else t.rect(e, n, i, r);
              },
              drawPoint: function(t, e, n, i, r) {
                var o, a, s, l, u, c;
                if (
                  !e ||
                  'object' != typeof e ||
                  ('[object HTMLImageElement]' !== (o = e.toString()) && '[object HTMLCanvasElement]' !== o)
                ) {
                  if (!(isNaN(n) || n <= 0)) {
                    switch (e) {
                      default:
                        t.beginPath(), t.arc(i, r, n, 0, 2 * Math.PI), t.closePath(), t.fill();
                        break;
                      case 'triangle':
                        t.beginPath(),
                          (u = ((a = (3 * n) / Math.sqrt(3)) * Math.sqrt(3)) / 2),
                          t.moveTo(i - a / 2, r + u / 3),
                          t.lineTo(i + a / 2, r + u / 3),
                          t.lineTo(i, r - (2 * u) / 3),
                          t.closePath(),
                          t.fill();
                        break;
                      case 'rect':
                        (c = (1 / Math.SQRT2) * n),
                          t.beginPath(),
                          t.fillRect(i - c, r - c, 2 * c, 2 * c),
                          t.strokeRect(i - c, r - c, 2 * c, 2 * c);
                        break;
                      case 'rectRounded':
                        var d = n / Math.SQRT2,
                          h = i - d,
                          f = r - d,
                          p = Math.SQRT2 * n;
                        t.beginPath(), this.roundedRect(t, h, f, p, p, n / 2), t.closePath(), t.fill();
                        break;
                      case 'rectRot':
                        (c = (1 / Math.SQRT2) * n),
                          t.beginPath(),
                          t.moveTo(i - c, r),
                          t.lineTo(i, r + c),
                          t.lineTo(i + c, r),
                          t.lineTo(i, r - c),
                          t.closePath(),
                          t.fill();
                        break;
                      case 'cross':
                        t.beginPath(),
                          t.moveTo(i, r + n),
                          t.lineTo(i, r - n),
                          t.moveTo(i - n, r),
                          t.lineTo(i + n, r),
                          t.closePath();
                        break;
                      case 'crossRot':
                        t.beginPath(),
                          (s = Math.cos(Math.PI / 4) * n),
                          (l = Math.sin(Math.PI / 4) * n),
                          t.moveTo(i - s, r - l),
                          t.lineTo(i + s, r + l),
                          t.moveTo(i - s, r + l),
                          t.lineTo(i + s, r - l),
                          t.closePath();
                        break;
                      case 'star':
                        t.beginPath(),
                          t.moveTo(i, r + n),
                          t.lineTo(i, r - n),
                          t.moveTo(i - n, r),
                          t.lineTo(i + n, r),
                          (s = Math.cos(Math.PI / 4) * n),
                          (l = Math.sin(Math.PI / 4) * n),
                          t.moveTo(i - s, r - l),
                          t.lineTo(i + s, r + l),
                          t.moveTo(i - s, r + l),
                          t.lineTo(i + s, r - l),
                          t.closePath();
                        break;
                      case 'line':
                        t.beginPath(), t.moveTo(i - n, r), t.lineTo(i + n, r), t.closePath();
                        break;
                      case 'dash':
                        t.beginPath(), t.moveTo(i, r), t.lineTo(i + n, r), t.closePath();
                    }
                    t.stroke();
                  }
                } else t.drawImage(e, i - e.width / 2, r - e.height / 2, e.width, e.height);
              },
              clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
              },
              unclipArea: function(t) {
                t.restore();
              },
              lineTo: function(t, e, n, i) {
                if (n.steppedLine)
                  return (
                    ('after' === n.steppedLine && !i) || ('after' !== n.steppedLine && i)
                      ? t.lineTo(e.x, n.y)
                      : t.lineTo(n.x, e.y),
                    void t.lineTo(n.x, n.y)
                  );
                n.tension
                  ? t.bezierCurveTo(
                      i ? e.controlPointPreviousX : e.controlPointNextX,
                      i ? e.controlPointPreviousY : e.controlPointNextY,
                      i ? n.controlPointNextX : n.controlPointPreviousX,
                      i ? n.controlPointNextY : n.controlPointPreviousY,
                      n.x,
                      n.y
                    )
                  : t.lineTo(n.x, n.y);
              }
            }),
              (i.clear = n.clear),
              (i.drawRoundedRectangle = function(t) {
                t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath();
              });
          },
          { 42: 42 }
        ],
        42: [
          function(t, e, n) {
            'use strict';
            var i,
              r = {
                noop: function() {},
                uid: ((i = 0),
                function() {
                  return i++;
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
                valueAtIndexOrDefault: function(t, e, n) {
                  return r.valueOrDefault(r.isArray(t) ? t[e] : t, n);
                },
                callback: function(t, e, n) {
                  if (t && 'function' == typeof t.call) return t.apply(n, e);
                },
                each: function(t, e, n, i) {
                  var o, a, s;
                  if (r.isArray(t))
                    if (((a = t.length), i)) for (o = a - 1; o >= 0; o--) e.call(n, t[o], o);
                    else for (o = 0; o < a; o++) e.call(n, t[o], o);
                  else if (r.isObject(t))
                    for (a = (s = Object.keys(t)).length, o = 0; o < a; o++) e.call(n, t[s[o]], s[o]);
                },
                arrayEquals: function(t, e) {
                  var n, i, o, a;
                  if (!t || !e || t.length !== e.length) return !1;
                  for (n = 0, i = t.length; n < i; ++n)
                    if (((a = e[n]), (o = t[n]) instanceof Array && a instanceof Array)) {
                      if (!r.arrayEquals(o, a)) return !1;
                    } else if (o !== a) return !1;
                  return !0;
                },
                clone: function(t) {
                  if (r.isArray(t)) return t.map(r.clone);
                  if (r.isObject(t)) {
                    for (var e = {}, n = Object.keys(t), i = n.length, o = 0; o < i; ++o) e[n[o]] = r.clone(t[n[o]]);
                    return e;
                  }
                  return t;
                },
                _merger: function(t, e, n, i) {
                  var o = e[t],
                    a = n[t];
                  r.isObject(o) && r.isObject(a) ? r.merge(o, a, i) : (e[t] = r.clone(a));
                },
                _mergerIf: function(t, e, n) {
                  var i = e[t],
                    o = n[t];
                  r.isObject(i) && r.isObject(o) ? r.mergeIf(i, o) : e.hasOwnProperty(t) || (e[t] = r.clone(o));
                },
                merge: function(t, e, n) {
                  var i,
                    o,
                    a,
                    s,
                    l,
                    u = r.isArray(e) ? e : [e],
                    c = u.length;
                  if (!r.isObject(t)) return t;
                  for (i = (n = n || {}).merger || r._merger, o = 0; o < c; ++o)
                    if (r.isObject((e = u[o])))
                      for (l = 0, s = (a = Object.keys(e)).length; l < s; ++l) i(a[l], t, e, n);
                  return t;
                },
                mergeIf: function(t, e) {
                  return r.merge(t, e, { merger: r._mergerIf });
                },
                extend: function(t) {
                  for (
                    var e = function(e, n) {
                        t[n] = e;
                      },
                      n = 1,
                      i = arguments.length;
                    n < i;
                    ++n
                  )
                    r.each(arguments[n], e);
                  return t;
                },
                inherits: function(t) {
                  var e = this,
                    n =
                      t && t.hasOwnProperty('constructor')
                        ? t.constructor
                        : function() {
                            return e.apply(this, arguments);
                          },
                    i = function() {
                      this.constructor = n;
                    };
                  return (
                    (i.prototype = e.prototype),
                    (n.prototype = new i()),
                    (n.extend = r.inherits),
                    t && r.extend(n.prototype, t),
                    (n.__super__ = e.prototype),
                    n
                  );
                }
              };
            (e.exports = r),
              (r.callCallback = r.callback),
              (r.indexOf = function(t, e, n) {
                return Array.prototype.indexOf.call(t, e, n);
              }),
              (r.getValueOrDefault = r.valueOrDefault),
              (r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault);
          },
          {}
        ],
        43: [
          function(t, e, n) {
            'use strict';
            var i = t(42),
              r = {
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
                    n = 0,
                    i = 1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (n || (n = 0.3),
                      i < 1 ? ((i = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                      -i * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n));
                },
                easeOutElastic: function(t) {
                  var e = 1.70158,
                    n = 0,
                    i = 1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (n || (n = 0.3),
                      i < 1 ? ((i = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                      i * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1);
                },
                easeInOutElastic: function(t) {
                  var e = 1.70158,
                    n = 0,
                    i = 1;
                  return 0 === t
                    ? 0
                    : 2 == (t /= 0.5)
                    ? 1
                    : (n || (n = 0.45),
                      i < 1 ? ((i = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                      t < 1
                        ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * -0.5
                        : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * 0.5 + 1);
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
                  return 1 - r.easeOutBounce(1 - t);
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
                  return t < 0.5 ? 0.5 * r.easeInBounce(2 * t) : 0.5 * r.easeOutBounce(2 * t - 1) + 0.5;
                }
              };
            (e.exports = { effects: r }), (i.easingEffects = r);
          },
          { 42: 42 }
        ],
        44: [
          function(t, e, n) {
            'use strict';
            var i = t(42);
            e.exports = {
              toLineHeight: function(t, e) {
                var n = ('' + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!n || 'normal' === n[1]) return 1.2 * e;
                switch (((t = +n[2]), n[3])) {
                  case 'px':
                    return t;
                  case '%':
                    t /= 100;
                }
                return e * t;
              },
              toPadding: function(t) {
                var e, n, r, o;
                return (
                  i.isObject(t)
                    ? ((e = +t.top || 0), (n = +t.right || 0), (r = +t.bottom || 0), (o = +t.left || 0))
                    : (e = n = r = o = +t || 0),
                  { top: e, right: n, bottom: r, left: o, height: e + r, width: o + n }
                );
              },
              resolve: function(t, e, n) {
                var r, o, a;
                for (r = 0, o = t.length; r < o; ++r)
                  if (
                    void 0 !== (a = t[r]) &&
                    (void 0 !== e && 'function' == typeof a && (a = a(e)),
                    void 0 !== n && i.isArray(a) && (a = a[n]),
                    void 0 !== a)
                  )
                    return a;
              }
            };
          },
          { 42: 42 }
        ],
        45: [
          function(t, e, n) {
            'use strict';
            (e.exports = t(42)), (e.exports.easing = t(43)), (e.exports.canvas = t(41)), (e.exports.options = t(44));
          },
          { 41: 41, 42: 42, 43: 43, 44: 44 }
        ],
        46: [
          function(t, e, n) {
            e.exports = {
              acquireContext: function(t) {
                return t && t.canvas && (t = t.canvas), (t && t.getContext('2d')) || null;
              }
            };
          },
          {}
        ],
        47: [
          function(t, e, n) {
            'use strict';
            var i = t(45),
              r = '$chartjs',
              o = 'chartjs-',
              a = o + 'render-monitor',
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
            function c(t, e) {
              var n = i.getStyle(t, e),
                r = n && n.match(/^(\d+)(\.\d+)?px$/);
              return r ? Number(r[1]) : void 0;
            }
            var d = !!(function() {
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
            function h(t, e, n) {
              t.addEventListener(e, n, d);
            }
            function f(t, e, n) {
              t.removeEventListener(e, n, d);
            }
            function p(t, e, n, i, r) {
              return { type: t, chart: e, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null };
            }
            function g(t, e, n) {
              var u,
                c,
                d,
                f,
                g,
                m,
                v,
                y,
                b = t[r] || (t[r] = {}),
                x = (b.resizer = (function(t) {
                  var e = document.createElement('div'),
                    n = o + 'size-monitor',
                    i =
                      'position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;';
                  (e.style.cssText = i),
                    (e.className = n),
                    (e.innerHTML =
                      '<div class="' +
                      n +
                      '-expand" style="' +
                      i +
                      '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' +
                      n +
                      '-shrink" style="' +
                      i +
                      '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>');
                  var r = e.childNodes[0],
                    a = e.childNodes[1];
                  e._reset = function() {
                    (r.scrollLeft = 1e6), (r.scrollTop = 1e6), (a.scrollLeft = 1e6), (a.scrollTop = 1e6);
                  };
                  var s = function() {
                    e._reset(), t();
                  };
                  return h(r, 'scroll', s.bind(r, 'expand')), h(a, 'scroll', s.bind(a, 'shrink')), e;
                })(
                  ((u = function() {
                    if (b.resizer) return e(p('resize', n));
                  }),
                  (d = !1),
                  (f = []),
                  function() {
                    (f = Array.prototype.slice.call(arguments)),
                      (c = c || this),
                      d ||
                        ((d = !0),
                        i.requestAnimFrame.call(window, function() {
                          (d = !1), u.apply(c, f);
                        }));
                  })
                ));
              (m = function() {
                if (b.resizer) {
                  var e = t.parentNode;
                  e && e !== x.parentNode && e.insertBefore(x, e.firstChild), x._reset();
                }
              }),
                (v = (g = t)[r] || (g[r] = {})),
                (y = v.renderProxy = function(t) {
                  t.animationName === s && m();
                }),
                i.each(l, function(t) {
                  h(g, t, y);
                }),
                (v.reflow = !!g.offsetParent),
                g.classList.add(a);
            }
            function m(t) {
              var e,
                n,
                o,
                s = t[r] || {},
                u = s.resizer;
              delete s.resizer,
                (n = (e = t)[r] || {}),
                (o = n.renderProxy) &&
                  (i.each(l, function(t) {
                    f(e, t, o);
                  }),
                  delete n.renderProxy),
                e.classList.remove(a),
                u && u.parentNode && u.parentNode.removeChild(u);
            }
            (e.exports = {
              _enabled: 'undefined' != typeof window && 'undefined' != typeof document,
              initialize: function() {
                var t,
                  e,
                  n,
                  i = 'from{opacity:0.99}to{opacity:1}';
                (e =
                  '@-webkit-keyframes ' +
                  s +
                  '{' +
                  i +
                  '}@keyframes ' +
                  s +
                  '{' +
                  i +
                  '}.' +
                  a +
                  '{-webkit-animation:' +
                  s +
                  ' 0.001s;animation:' +
                  s +
                  ' 0.001s;}'),
                  (n = (t = this)._style || document.createElement('style')),
                  t._style ||
                    ((t._style = n),
                    (e = '/* Chart.js */\n' + e),
                    n.setAttribute('type', 'text/css'),
                    document.getElementsByTagName('head')[0].appendChild(n)),
                  n.appendChild(document.createTextNode(e));
              },
              acquireContext: function(t, e) {
                'string' == typeof t ? (t = document.getElementById(t)) : t.length && (t = t[0]),
                  t && t.canvas && (t = t.canvas);
                var n = t && t.getContext && t.getContext('2d');
                return n && n.canvas === t
                  ? ((function(t, e) {
                      var n = t.style,
                        i = t.getAttribute('height'),
                        o = t.getAttribute('width');
                      if (
                        ((t[r] = {
                          initial: {
                            height: i,
                            width: o,
                            style: { display: n.display, height: n.height, width: n.width }
                          }
                        }),
                        (n.display = n.display || 'block'),
                        null === o || '' === o)
                      ) {
                        var a = c(t, 'width');
                        void 0 !== a && (t.width = a);
                      }
                      if (null === i || '' === i)
                        if ('' === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                        else {
                          var s = c(t, 'height');
                          void 0 !== a && (t.height = s);
                        }
                    })(t, e),
                    n)
                  : null;
              },
              releaseContext: function(t) {
                var e = t.canvas;
                if (e[r]) {
                  var n = e[r].initial;
                  ['height', 'width'].forEach(function(t) {
                    var r = n[t];
                    i.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
                  }),
                    i.each(n.style || {}, function(t, n) {
                      e.style[n] = t;
                    }),
                    (e.width = e.width),
                    delete e[r];
                }
              },
              addEventListener: function(t, e, n) {
                var o = t.canvas;
                if ('resize' !== e) {
                  var a = n[r] || (n[r] = {});
                  h(
                    o,
                    e,
                    ((a.proxies || (a.proxies = {}))[t.id + '_' + e] = function(e) {
                      var r, o, a;
                      n(((o = t), p(u[(r = e).type] || r.type, o, (a = i.getRelativePosition(r, o)).x, a.y, r)));
                    })
                  );
                } else g(o, n, t);
              },
              removeEventListener: function(t, e, n) {
                var i = t.canvas;
                if ('resize' !== e) {
                  var o = ((n[r] || {}).proxies || {})[t.id + '_' + e];
                  o && f(i, e, o);
                } else m(i);
              }
            }),
              (i.addEvent = h),
              (i.removeEvent = f);
          },
          { 45: 45 }
        ],
        48: [
          function(t, e, n) {
            'use strict';
            var i = t(45),
              r = t(46),
              o = t(47);
            e.exports = i.extend(
              {
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
              },
              o._enabled ? o : r
            );
          },
          { 45: 45, 46: 46, 47: 47 }
        ],
        49: [
          function(t, e, n) {
            'use strict';
            (e.exports = {}), (e.exports.filler = t(50)), (e.exports.legend = t(51)), (e.exports.title = t(52));
          },
          { 50: 50, 51: 51, 52: 52 }
        ],
        50: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(40),
              o = t(45);
            i._set('global', { plugins: { filler: { propagate: !0 } } });
            var a = {
              dataset: function(t) {
                var e = t.fill,
                  n = t.chart,
                  i = n.getDatasetMeta(e),
                  r = (i && n.isDatasetVisible(e) && i.dataset._children) || [],
                  o = r.length || 0;
                return o
                  ? function(t, e) {
                      return (e < o && r[e]._view) || null;
                    }
                  : null;
              },
              boundary: function(t) {
                var e = t.boundary,
                  n = e ? e.x : null,
                  i = e ? e.y : null;
                return function(t) {
                  return { x: null === n ? t.x : n, y: null === i ? t.y : i };
                };
              }
            };
            function s(t, e, n) {
              var i,
                r = t._model || {},
                o = r.fill;
              if ((void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o)) return !1;
              if (!0 === o) return 'origin';
              if (((i = parseFloat(o, 10)), isFinite(i) && Math.floor(i) === i))
                return ('-' !== o[0] && '+' !== o[0]) || (i = e + i), !(i === e || i < 0 || i >= n) && i;
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
                n = t.el._model || {},
                i = t.el._scale || {},
                r = t.fill,
                o = null;
              if (isFinite(r)) return null;
              if (
                ('start' === r
                  ? (o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom)
                  : 'end' === r
                  ? (o = void 0 === n.scaleTop ? i.top : n.scaleTop)
                  : void 0 !== n.scaleZero
                  ? (o = n.scaleZero)
                  : i.getBasePosition
                  ? (o = i.getBasePosition())
                  : i.getBasePixel && (o = i.getBasePixel()),
                null != o)
              ) {
                if (void 0 !== o.x && void 0 !== o.y) return o;
                if ('number' == typeof o && isFinite(o))
                  return { x: (e = i.isHorizontal()) ? o : null, y: e ? null : o };
              }
              return null;
            }
            function u(t, e, n) {
              var i,
                r = t[e].fill,
                o = [e];
              if (!n) return r;
              for (; !1 !== r && -1 === o.indexOf(r); ) {
                if (!isFinite(r)) return r;
                if (!(i = t[r])) return !1;
                if (i.visible) return r;
                o.push(r), (r = i.fill);
              }
              return !1;
            }
            function c(t) {
              return t && !t.skip;
            }
            function d(t, e, n, i, r) {
              var a;
              if (i && r) {
                for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a) o.canvas.lineTo(t, e[a - 1], e[a]);
                for (t.lineTo(n[r - 1].x, n[r - 1].y), a = r - 1; a > 0; --a) o.canvas.lineTo(t, n[a], n[a - 1], !0);
              }
            }
            e.exports = {
              id: 'filler',
              afterDatasetsUpdate: function(t, e) {
                var n,
                  i,
                  o,
                  c,
                  d,
                  h,
                  f,
                  p = (t.data.datasets || []).length,
                  g = e.propagate,
                  m = [];
                for (i = 0; i < p; ++i)
                  (c = null),
                    (o = (n = t.getDatasetMeta(i)).dataset) &&
                      o._model &&
                      o instanceof r.Line &&
                      (c = { visible: t.isDatasetVisible(i), fill: s(o, i, p), chart: t, el: o }),
                    (n.$filler = c),
                    m.push(c);
                for (i = 0; i < p; ++i)
                  (c = m[i]) &&
                    ((c.fill = u(m, i, g)),
                    (c.boundary = l(c)),
                    (c.mapper = ((f = void 0),
                    (f = 'dataset'),
                    !1 === (h = (d = c).fill) ? null : (isFinite(h) || (f = 'boundary'), a[f](d)))));
              },
              beforeDatasetDraw: function(t, e) {
                var n = e.meta.$filler;
                if (n) {
                  var r = t.ctx,
                    a = n.el,
                    s = a._view,
                    l = a._children || [],
                    u = n.mapper,
                    h = s.backgroundColor || i.global.defaultColor;
                  u &&
                    h &&
                    l.length &&
                    (o.canvas.clipArea(r, t.chartArea),
                    (function(t, e, n, i, r, o) {
                      var a,
                        s,
                        l,
                        u,
                        h,
                        f,
                        p,
                        g = e.length,
                        m = i.spanGaps,
                        v = [],
                        y = [],
                        b = 0,
                        x = 0;
                      for (t.beginPath(), a = 0, s = g + !!o; a < s; ++a)
                        (h = n((u = e[(l = a % g)]._view), l, i)),
                          (f = c(u)),
                          (p = c(h)),
                          f && p
                            ? ((b = v.push(u)), (x = y.push(h)))
                            : b &&
                              x &&
                              (m
                                ? (f && v.push(u), p && y.push(h))
                                : (d(t, v, y, b, x), (b = x = 0), (v = []), (y = [])));
                      d(t, v, y, b, x), t.closePath(), (t.fillStyle = r), t.fill();
                    })(r, l, u, s, h, a._loop),
                    o.canvas.unclipArea(r));
                }
              }
            };
          },
          { 25: 25, 40: 40, 45: 45 }
        ],
        51: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45),
              a = t(30),
              s = o.noop;
            function l(t, e) {
              return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
            }
            i._set('global', {
              legend: {
                display: !0,
                position: 'top',
                fullWidth: !0,
                reverse: !1,
                weight: 1e3,
                onClick: function(t, e) {
                  var n = e.datasetIndex,
                    i = this.chart,
                    r = i.getDatasetMeta(n);
                  (r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null), i.update();
                },
                onHover: null,
                labels: {
                  boxWidth: 40,
                  padding: 10,
                  generateLabels: function(t) {
                    var e = t.data;
                    return o.isArray(e.datasets)
                      ? e.datasets.map(function(e, n) {
                          return {
                            text: e.label,
                            fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                            hidden: !t.isDatasetVisible(n),
                            lineCap: e.borderCapStyle,
                            lineDash: e.borderDash,
                            lineDashOffset: e.borderDashOffset,
                            lineJoin: e.borderJoinStyle,
                            lineWidth: e.borderWidth,
                            strokeStyle: e.borderColor,
                            pointStyle: e.pointStyle,
                            datasetIndex: n
                          };
                        }, this)
                      : [];
                  }
                }
              },
              legendCallback: function(t) {
                var e = [];
                e.push('<ul class="' + t.id + '-legend">');
                for (var n = 0; n < t.data.datasets.length; n++)
                  e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'),
                    t.data.datasets[n].label && e.push(t.data.datasets[n].label),
                    e.push('</li>');
                return e.push('</ul>'), e.join('');
              }
            });
            var u = r.extend({
              initialize: function(t) {
                o.extend(this, t), (this.legendHitBoxes = []), (this.doughnutMode = !1);
              },
              beforeUpdate: s,
              update: function(t, e, n) {
                var i = this;
                return (
                  i.beforeUpdate(),
                  (i.maxWidth = t),
                  (i.maxHeight = e),
                  (i.margins = n),
                  i.beforeSetDimensions(),
                  i.setDimensions(),
                  i.afterSetDimensions(),
                  i.beforeBuildLabels(),
                  i.buildLabels(),
                  i.afterBuildLabels(),
                  i.beforeFit(),
                  i.fit(),
                  i.afterFit(),
                  i.afterUpdate(),
                  i.minSize
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
                  n = o.callback(e.generateLabels, [t.chart], t) || [];
                e.filter &&
                  (n = n.filter(function(n) {
                    return e.filter(n, t.chart.data);
                  })),
                  t.options.reverse && n.reverse(),
                  (t.legendItems = n);
              },
              afterBuildLabels: s,
              beforeFit: s,
              fit: function() {
                var t = this,
                  e = t.options,
                  n = e.labels,
                  r = e.display,
                  a = t.ctx,
                  s = i.global,
                  u = o.valueOrDefault,
                  c = u(n.fontSize, s.defaultFontSize),
                  d = u(n.fontStyle, s.defaultFontStyle),
                  h = u(n.fontFamily, s.defaultFontFamily),
                  f = o.fontString(c, d, h),
                  p = (t.legendHitBoxes = []),
                  g = t.minSize,
                  m = t.isHorizontal();
                if (
                  (m
                    ? ((g.width = t.maxWidth), (g.height = r ? 10 : 0))
                    : ((g.width = r ? 10 : 0), (g.height = t.maxHeight)),
                  r)
                )
                  if (((a.font = f), m)) {
                    var v = (t.lineWidths = [0]),
                      y = t.legendItems.length ? c + n.padding : 0;
                    (a.textAlign = 'left'),
                      (a.textBaseline = 'top'),
                      o.each(t.legendItems, function(e, i) {
                        var r = l(n, c) + c / 2 + a.measureText(e.text).width;
                        v[v.length - 1] + r + n.padding >= t.width && ((y += c + n.padding), (v[v.length] = t.left)),
                          (p[i] = { left: 0, top: 0, width: r, height: c }),
                          (v[v.length - 1] += r + n.padding);
                      }),
                      (g.height += y);
                  } else {
                    var b = n.padding,
                      x = (t.columnWidths = []),
                      _ = n.padding,
                      w = 0,
                      C = 0,
                      S = c + b;
                    o.each(t.legendItems, function(t, e) {
                      var i = l(n, c) + c / 2 + a.measureText(t.text).width;
                      C + S > g.height && ((_ += w + n.padding), x.push(w), (w = 0), (C = 0)),
                        (w = Math.max(w, i)),
                        (C += S),
                        (p[e] = { left: 0, top: 0, width: i, height: c });
                    }),
                      (_ += w),
                      x.push(w),
                      (g.width += _);
                  }
                (t.width = g.width), (t.height = g.height);
              },
              afterFit: s,
              isHorizontal: function() {
                return 'top' === this.options.position || 'bottom' === this.options.position;
              },
              draw: function() {
                var t = this,
                  e = t.options,
                  n = e.labels,
                  r = i.global,
                  a = r.elements.line,
                  s = t.width,
                  u = t.lineWidths;
                if (e.display) {
                  var c,
                    d = t.ctx,
                    h = o.valueOrDefault,
                    f = h(n.fontColor, r.defaultFontColor),
                    p = h(n.fontSize, r.defaultFontSize),
                    g = h(n.fontStyle, r.defaultFontStyle),
                    m = h(n.fontFamily, r.defaultFontFamily),
                    v = o.fontString(p, g, m);
                  (d.textAlign = 'left'),
                    (d.textBaseline = 'middle'),
                    (d.lineWidth = 0.5),
                    (d.strokeStyle = f),
                    (d.fillStyle = f),
                    (d.font = v);
                  var y = l(n, p),
                    b = t.legendHitBoxes,
                    x = t.isHorizontal();
                  c = x
                    ? { x: t.left + (s - u[0]) / 2, y: t.top + n.padding, line: 0 }
                    : { x: t.left + n.padding, y: t.top + n.padding, line: 0 };
                  var _ = p + n.padding;
                  o.each(t.legendItems, function(i, l) {
                    var f,
                      g,
                      m,
                      v,
                      w,
                      C = d.measureText(i.text).width,
                      S = y + p / 2 + C,
                      T = c.x,
                      k = c.y;
                    x
                      ? T + S >= s && ((k = c.y += _), c.line++, (T = c.x = t.left + (s - u[c.line]) / 2))
                      : k + _ > t.bottom &&
                        ((T = c.x = T + t.columnWidths[c.line] + n.padding), (k = c.y = t.top + n.padding), c.line++),
                      (function(t, n, i) {
                        if (!(isNaN(y) || y <= 0)) {
                          d.save(),
                            (d.fillStyle = h(i.fillStyle, r.defaultColor)),
                            (d.lineCap = h(i.lineCap, a.borderCapStyle)),
                            (d.lineDashOffset = h(i.lineDashOffset, a.borderDashOffset)),
                            (d.lineJoin = h(i.lineJoin, a.borderJoinStyle)),
                            (d.lineWidth = h(i.lineWidth, a.borderWidth)),
                            (d.strokeStyle = h(i.strokeStyle, r.defaultColor));
                          var s = 0 === h(i.lineWidth, a.borderWidth);
                          if (
                            (d.setLineDash && d.setLineDash(h(i.lineDash, a.borderDash)),
                            e.labels && e.labels.usePointStyle)
                          ) {
                            var l = (p * Math.SQRT2) / 2,
                              u = l / Math.SQRT2;
                            o.canvas.drawPoint(d, i.pointStyle, l, t + u, n + u);
                          } else s || d.strokeRect(t, n, y, p), d.fillRect(t, n, y, p);
                          d.restore();
                        }
                      })(T, k, i),
                      (b[l].left = T),
                      (b[l].top = k),
                      (g = C),
                      (v = y + (m = p / 2) + T),
                      d.fillText((f = i).text, v, (w = k + m)),
                      f.hidden && (d.beginPath(), (d.lineWidth = 2), d.moveTo(v, w), d.lineTo(v + g, w), d.stroke()),
                      x ? (c.x += S + n.padding) : (c.y += _);
                  });
                }
              },
              handleEvent: function(t) {
                var e = this,
                  n = e.options,
                  i = 'mouseup' === t.type ? 'click' : t.type,
                  r = !1;
                if ('mousemove' === i) {
                  if (!n.onHover) return;
                } else {
                  if ('click' !== i) return;
                  if (!n.onClick) return;
                }
                var o = t.x,
                  a = t.y;
                if (o >= e.left && o <= e.right && a >= e.top && a <= e.bottom)
                  for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                    var u = s[l];
                    if (o >= u.left && o <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
                      if ('click' === i) {
                        n.onClick.call(e, t.native, e.legendItems[l]), (r = !0);
                        break;
                      }
                      if ('mousemove' === i) {
                        n.onHover.call(e, t.native, e.legendItems[l]), (r = !0);
                        break;
                      }
                    }
                  }
                return r;
              }
            });
            function c(t, e) {
              var n = new u({ ctx: t.ctx, options: e, chart: t });
              a.configure(t, n, e), a.addBox(t, n), (t.legend = n);
            }
            e.exports = {
              id: 'legend',
              _element: u,
              beforeInit: function(t) {
                var e = t.options.legend;
                e && c(t, e);
              },
              beforeUpdate: function(t) {
                var e = t.options.legend,
                  n = t.legend;
                e
                  ? (o.mergeIf(e, i.global.legend), n ? (a.configure(t, n, e), (n.options = e)) : c(t, e))
                  : n && (a.removeBox(t, n), delete t.legend);
              },
              afterEvent: function(t, e) {
                var n = t.legend;
                n && n.handleEvent(e);
              }
            };
          },
          { 25: 25, 26: 26, 30: 30, 45: 45 }
        ],
        52: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(26),
              o = t(45),
              a = t(30),
              s = o.noop;
            i._set('global', {
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
            var l = r.extend({
              initialize: function(t) {
                o.extend(this, t), (this.legendHitBoxes = []);
              },
              beforeUpdate: s,
              update: function(t, e, n) {
                var i = this;
                return (
                  i.beforeUpdate(),
                  (i.maxWidth = t),
                  (i.maxHeight = e),
                  (i.margins = n),
                  i.beforeSetDimensions(),
                  i.setDimensions(),
                  i.afterSetDimensions(),
                  i.beforeBuildLabels(),
                  i.buildLabels(),
                  i.afterBuildLabels(),
                  i.beforeFit(),
                  i.fit(),
                  i.afterFit(),
                  i.afterUpdate(),
                  i.minSize
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
                  e = t.options,
                  n = e.display,
                  r = (0, o.valueOrDefault)(e.fontSize, i.global.defaultFontSize),
                  a = t.minSize,
                  s = o.isArray(e.text) ? e.text.length : 1,
                  l = o.options.toLineHeight(e.lineHeight, r),
                  u = n ? s * l + 2 * e.padding : 0;
                t.isHorizontal() ? ((a.width = t.maxWidth), (a.height = u)) : ((a.width = u), (a.height = t.maxHeight)),
                  (t.width = a.width),
                  (t.height = a.height);
              },
              afterFit: s,
              isHorizontal: function() {
                var t = this.options.position;
                return 'top' === t || 'bottom' === t;
              },
              draw: function() {
                var t = this,
                  e = t.ctx,
                  n = o.valueOrDefault,
                  r = t.options,
                  a = i.global;
                if (r.display) {
                  var s,
                    l,
                    u,
                    c = n(r.fontSize, a.defaultFontSize),
                    d = n(r.fontStyle, a.defaultFontStyle),
                    h = n(r.fontFamily, a.defaultFontFamily),
                    f = o.fontString(c, d, h),
                    p = o.options.toLineHeight(r.lineHeight, c),
                    g = p / 2 + r.padding,
                    m = 0,
                    v = t.top,
                    y = t.left,
                    b = t.bottom,
                    x = t.right;
                  (e.fillStyle = n(r.fontColor, a.defaultFontColor)),
                    (e.font = f),
                    t.isHorizontal()
                      ? ((l = y + (x - y) / 2), (u = v + g), (s = x - y))
                      : ((l = 'left' === r.position ? y + g : x - g),
                        (u = v + (b - v) / 2),
                        (s = b - v),
                        (m = Math.PI * ('left' === r.position ? -0.5 : 0.5))),
                    e.save(),
                    e.translate(l, u),
                    e.rotate(m),
                    (e.textAlign = 'center'),
                    (e.textBaseline = 'middle');
                  var _ = r.text;
                  if (o.isArray(_)) for (var w = 0, C = 0; C < _.length; ++C) e.fillText(_[C], 0, w, s), (w += p);
                  else e.fillText(_, 0, 0, s);
                  e.restore();
                }
              }
            });
            function u(t, e) {
              var n = new l({ ctx: t.ctx, options: e, chart: t });
              a.configure(t, n, e), a.addBox(t, n), (t.titleBlock = n);
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
                  n = t.titleBlock;
                e
                  ? (o.mergeIf(e, i.global.title), n ? (a.configure(t, n, e), (n.options = e)) : u(t, e))
                  : n && (a.removeBox(t, n), delete t.titleBlock);
              }
            };
          },
          { 25: 25, 26: 26, 30: 30, 45: 45 }
        ],
        53: [
          function(t, e, n) {
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
                    n = e.getLabels();
                  (e.minIndex = 0),
                    (e.maxIndex = n.length - 1),
                    void 0 !== e.options.ticks.min &&
                      ((t = n.indexOf(e.options.ticks.min)), (e.minIndex = -1 !== t ? t : e.minIndex)),
                    void 0 !== e.options.ticks.max &&
                      ((t = n.indexOf(e.options.ticks.max)), (e.maxIndex = -1 !== t ? t : e.maxIndex)),
                    (e.min = n[e.minIndex]),
                    (e.max = n[e.maxIndex]);
                },
                buildTicks: function() {
                  var t = this,
                    e = t.getLabels();
                  t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
                },
                getLabelForIndex: function(t, e) {
                  var n = this,
                    i = n.chart.data,
                    r = n.isHorizontal();
                  return i.yLabels && !r ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
                },
                getPixelForValue: function(t, e) {
                  var n,
                    i = this,
                    r = i.options.offset,
                    o = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
                  if ((null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || (void 0 !== t && isNaN(e)))) {
                    t = n || t;
                    var a = i.getLabels().indexOf(t);
                    e = -1 !== a ? a : e;
                  }
                  if (i.isHorizontal()) {
                    var s = i.width / o,
                      l = s * (e - i.minIndex);
                    return r && (l += s / 2), i.left + Math.round(l);
                  }
                  var u = i.height / o,
                    c = u * (e - i.minIndex);
                  return r && (c += u / 2), i.top + Math.round(c);
                },
                getPixelForTick: function(t) {
                  return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
                },
                getValueForPixel: function(t) {
                  var e = this,
                    n = e.options.offset,
                    i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                    r = e.isHorizontal(),
                    o = (r ? e.width : e.height) / i;
                  return (t -= r ? e.left : e.top), n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
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
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(45),
              o = t(34);
            e.exports = function(t) {
              var e = { position: 'left', ticks: { callback: o.formatters.linear } },
                n = t.LinearScaleBase.extend({
                  determineDataLimits: function() {
                    var t = this,
                      e = t.options,
                      n = t.chart,
                      i = n.data.datasets,
                      o = t.isHorizontal();
                    function a(e) {
                      return o ? e.xAxisID === t.id : e.yAxisID === t.id;
                    }
                    (t.min = null), (t.max = null);
                    var s = e.stacked;
                    if (
                      (void 0 === s &&
                        r.each(i, function(t, e) {
                          if (!s) {
                            var i = n.getDatasetMeta(e);
                            n.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (s = !0);
                          }
                        }),
                      e.stacked || s)
                    ) {
                      var l = {};
                      r.each(i, function(i, o) {
                        var s = n.getDatasetMeta(o),
                          u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : '', s.stack].join('.');
                        void 0 === l[u] && (l[u] = { positiveValues: [], negativeValues: [] });
                        var c = l[u].positiveValues,
                          d = l[u].negativeValues;
                        n.isDatasetVisible(o) &&
                          a(s) &&
                          r.each(i.data, function(n, i) {
                            var r = +t.getRightValue(n);
                            isNaN(r) ||
                              s.data[i].hidden ||
                              ((c[i] = c[i] || 0),
                              (d[i] = d[i] || 0),
                              e.relativePoints ? (c[i] = 100) : r < 0 ? (d[i] += r) : (c[i] += r));
                          });
                      }),
                        r.each(l, function(e) {
                          var n = e.positiveValues.concat(e.negativeValues),
                            i = r.min(n),
                            o = r.max(n);
                          (t.min = null === t.min ? i : Math.min(t.min, i)),
                            (t.max = null === t.max ? o : Math.max(t.max, o));
                        });
                    } else
                      r.each(i, function(e, i) {
                        var o = n.getDatasetMeta(i);
                        n.isDatasetVisible(i) &&
                          a(o) &&
                          r.each(e.data, function(e, n) {
                            var i = +t.getRightValue(e);
                            isNaN(i) ||
                              o.data[n].hidden ||
                              (null === t.min ? (t.min = i) : i < t.min && (t.min = i),
                              null === t.max ? (t.max = i) : i > t.max && (t.max = i));
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
                      var n = r.valueOrDefault(e.fontSize, i.global.defaultFontSize);
                      t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)));
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
                      n = e.start,
                      i = +e.getRightValue(t),
                      r = e.end - n;
                    return e.isHorizontal() ? e.left + (e.width / r) * (i - n) : e.bottom - (e.height / r) * (i - n);
                  },
                  getValueForPixel: function(t) {
                    var e = this,
                      n = e.isHorizontal();
                    return e.start + ((n ? t - e.left : e.bottom - t) / (n ? e.width : e.height)) * (e.end - e.start);
                  },
                  getPixelForTick: function(t) {
                    return this.getPixelForValue(this.ticksAsNumbers[t]);
                  }
                });
              t.scaleService.registerScaleType('linear', n, e);
            };
          },
          { 25: 25, 34: 34, 45: 45 }
        ],
        55: [
          function(t, e, n) {
            'use strict';
            var i = t(45);
            e.exports = function(t) {
              var e = i.noop;
              t.LinearScaleBase = t.Scale.extend({
                getRightValue: function(e) {
                  return 'string' == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
                },
                handleTickRangeOptions: function() {
                  var t = this,
                    e = t.options.ticks;
                  if (e.beginAtZero) {
                    var n = i.sign(t.min),
                      r = i.sign(t.max);
                    n < 0 && r < 0 ? (t.max = 0) : n > 0 && r > 0 && (t.min = 0);
                  }
                  var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                    a = void 0 !== e.max || void 0 !== e.suggestedMax;
                  void 0 !== e.min
                    ? (t.min = e.min)
                    : void 0 !== e.suggestedMin &&
                      (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)),
                    void 0 !== e.max
                      ? (t.max = e.max)
                      : void 0 !== e.suggestedMax &&
                        (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)),
                    o !== a && t.min >= t.max && (o ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                    t.min === t.max && (t.max++, e.beginAtZero || t.min--);
                },
                getTickLimit: e,
                handleDirectionalChanges: e,
                buildTicks: function() {
                  var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    r = {
                      maxTicks: (n = Math.max(2, n)),
                      min: e.min,
                      max: e.max,
                      stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    o = (t.ticks = (function(t, e) {
                      var n,
                        r = [];
                      if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                      else {
                        var o = i.niceNum(e.max - e.min, !1);
                        n = i.niceNum(o / (t.maxTicks - 1), !0);
                      }
                      var a = Math.floor(e.min / n) * n,
                        s = Math.ceil(e.max / n) * n;
                      t.min &&
                        t.max &&
                        t.stepSize &&
                        i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) &&
                        ((a = t.min), (s = t.max));
                      var l = (s - a) / n;
                      l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l);
                      var u = 1;
                      n < 1 &&
                        ((u = Math.pow(10, n.toString().length - 2)),
                        (a = Math.round(a * u) / u),
                        (s = Math.round(s * u) / u)),
                        r.push(void 0 !== t.min ? t.min : a);
                      for (var c = 1; c < l; ++c) r.push(Math.round((a + c * n) * u) / u);
                      return r.push(void 0 !== t.max ? t.max : s), r;
                    })(r, t));
                  t.handleDirectionalChanges(),
                    (t.max = i.max(o)),
                    (t.min = i.min(o)),
                    e.reverse
                      ? (o.reverse(), (t.start = t.max), (t.end = t.min))
                      : ((t.start = t.min), (t.end = t.max));
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
          function(t, e, n) {
            'use strict';
            var i = t(45),
              r = t(34);
            e.exports = function(t) {
              var e = { position: 'left', ticks: { callback: r.formatters.logarithmic } },
                n = t.Scale.extend({
                  determineDataLimits: function() {
                    var t = this,
                      e = t.options,
                      n = t.chart,
                      r = n.data.datasets,
                      o = t.isHorizontal();
                    function a(e) {
                      return o ? e.xAxisID === t.id : e.yAxisID === t.id;
                    }
                    (t.min = null), (t.max = null), (t.minNotZero = null);
                    var s = e.stacked;
                    if (
                      (void 0 === s &&
                        i.each(r, function(t, e) {
                          if (!s) {
                            var i = n.getDatasetMeta(e);
                            n.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (s = !0);
                          }
                        }),
                      e.stacked || s)
                    ) {
                      var l = {};
                      i.each(r, function(r, o) {
                        var s = n.getDatasetMeta(o),
                          u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : '', s.stack].join('.');
                        n.isDatasetVisible(o) &&
                          a(s) &&
                          (void 0 === l[u] && (l[u] = []),
                          i.each(r.data, function(e, n) {
                            var i = l[u],
                              r = +t.getRightValue(e);
                            isNaN(r) || s.data[n].hidden || r < 0 || ((i[n] = i[n] || 0), (i[n] += r));
                          }));
                      }),
                        i.each(l, function(e) {
                          if (e.length > 0) {
                            var n = i.min(e),
                              r = i.max(e);
                            (t.min = null === t.min ? n : Math.min(t.min, n)),
                              (t.max = null === t.max ? r : Math.max(t.max, r));
                          }
                        });
                    } else
                      i.each(r, function(e, r) {
                        var o = n.getDatasetMeta(r);
                        n.isDatasetVisible(r) &&
                          a(o) &&
                          i.each(e.data, function(e, n) {
                            var i = +t.getRightValue(e);
                            isNaN(i) ||
                              o.data[n].hidden ||
                              i < 0 ||
                              (null === t.min ? (t.min = i) : i < t.min && (t.min = i),
                              null === t.max ? (t.max = i) : i > t.max && (t.max = i),
                              0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i));
                          });
                      });
                    this.handleTickRangeOptions();
                  },
                  handleTickRangeOptions: function() {
                    var t = this,
                      e = t.options.ticks,
                      n = i.valueOrDefault;
                    (t.min = n(e.min, t.min)),
                      (t.max = n(e.max, t.max)),
                      t.min === t.max &&
                        (0 !== t.min && null !== t.min
                          ? ((t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1)),
                            (t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)))
                          : ((t.min = 1), (t.max = 10))),
                      null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)),
                      null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10),
                      null === t.minNotZero &&
                        (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(i.log10(t.max))) : 1);
                  },
                  buildTicks: function() {
                    var t = this,
                      e = t.options.ticks,
                      n = !t.isHorizontal(),
                      r = (t.ticks = (function(t, e) {
                        var n,
                          r,
                          o = [],
                          a = i.valueOrDefault,
                          s = a(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                          l = Math.floor(i.log10(e.max)),
                          u = Math.ceil(e.max / Math.pow(10, l));
                        0 === s
                          ? ((n = Math.floor(i.log10(e.minNotZero))),
                            (r = Math.floor(e.minNotZero / Math.pow(10, n))),
                            o.push(s),
                            (s = r * Math.pow(10, n)))
                          : ((n = Math.floor(i.log10(s))), (r = Math.floor(s / Math.pow(10, n))));
                        for (
                          var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                          o.push(s),
                            10 == ++r && ((r = 1), (c = ++n >= 0 ? 1 : c)),
                            (s = Math.round(r * Math.pow(10, n) * c) / c),
                            n < l || (n === l && r < u);

                        );
                        var d = a(t.max, s);
                        return o.push(d), o;
                      })({ min: e.min, max: e.max }, t));
                    (t.max = i.max(r)),
                      (t.min = i.min(r)),
                      e.reverse ? ((n = !n), (t.start = t.max), (t.end = t.min)) : ((t.start = t.min), (t.end = t.max)),
                      n && r.reverse();
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
                    var e = Math.floor(i.log10(t));
                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
                  },
                  getPixelForValue: function(e) {
                    var n,
                      r,
                      o,
                      a,
                      s,
                      l = this,
                      u = l.options.ticks.reverse,
                      c = i.log10,
                      d = l._getFirstTickValue(l.minNotZero),
                      h = 0;
                    return (
                      (e = +l.getRightValue(e)),
                      u ? ((o = l.end), (a = l.start), (s = -1)) : ((o = l.start), (a = l.end), (s = 1)),
                      l.isHorizontal()
                        ? ((n = l.width), (r = u ? l.right : l.left))
                        : ((n = l.height), (s *= -1), (r = u ? l.top : l.bottom)),
                      e !== o &&
                        (0 === o &&
                          ((n -= h = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize)),
                          (o = d)),
                        0 !== e && (h += (n / (c(a) - c(o))) * (c(e) - c(o))),
                        (r += s * h)),
                      r
                    );
                  },
                  getValueForPixel: function(e) {
                    var n,
                      r,
                      o,
                      a,
                      s = this,
                      l = s.options.ticks.reverse,
                      u = i.log10,
                      c = s._getFirstTickValue(s.minNotZero);
                    if (
                      (l ? ((r = s.end), (o = s.start)) : ((r = s.start), (o = s.end)),
                      s.isHorizontal()
                        ? ((n = s.width), (a = l ? s.right - e : e - s.left))
                        : ((n = s.height), (a = l ? e - s.top : s.bottom - e)),
                      a !== r)
                    ) {
                      if (0 === r) {
                        var d = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                        (a -= d), (n -= d), (r = c);
                      }
                      (a *= u(o) - u(r)), (a /= n), (a = Math.pow(10, u(r) + a));
                    }
                    return a;
                  }
                });
              t.scaleService.registerScaleType('logarithmic', n, e);
            };
          },
          { 34: 34, 45: 45 }
        ],
        57: [
          function(t, e, n) {
            'use strict';
            var i = t(25),
              r = t(45),
              o = t(34);
            e.exports = function(t) {
              var e = i.global,
                n = {
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
              function a(t) {
                var e = t.options;
                return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
              }
              function s(t) {
                var n = t.options.pointLabels,
                  i = r.valueOrDefault(n.fontSize, e.defaultFontSize),
                  o = r.valueOrDefault(n.fontStyle, e.defaultFontStyle),
                  a = r.valueOrDefault(n.fontFamily, e.defaultFontFamily);
                return { size: i, style: o, family: a, font: r.fontString(i, o, a) };
              }
              function l(t, e, n, i, r) {
                return t === i || t === r
                  ? { start: e - n / 2, end: e + n / 2 }
                  : t < i || t > r
                  ? { start: e - n - 5, end: e }
                  : { start: e, end: e + n + 5 };
              }
              function u(t, e, n, i) {
                if (r.isArray(e))
                  for (var o = n.y, a = 1.5 * i, s = 0; s < e.length; ++s) t.fillText(e[s], n.x, o), (o += a);
                else t.fillText(e, n.x, n.y);
              }
              function c(t) {
                return r.isNumber(t) ? t : 0;
              }
              var d = t.LinearScaleBase.extend({
                setDimensions: function() {
                  var t = this,
                    n = t.options,
                    i = n.ticks;
                  (t.width = t.maxWidth),
                    (t.height = t.maxHeight),
                    (t.xCenter = Math.round(t.width / 2)),
                    (t.yCenter = Math.round(t.height / 2));
                  var o = r.min([t.height, t.width]),
                    a = r.valueOrDefault(i.fontSize, e.defaultFontSize);
                  t.drawingArea = n.display ? o / 2 - (a / 2 + i.backdropPaddingY) : o / 2;
                },
                determineDataLimits: function() {
                  var t = this,
                    e = t.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                  r.each(e.data.datasets, function(o, a) {
                    if (e.isDatasetVisible(a)) {
                      var s = e.getDatasetMeta(a);
                      r.each(o.data, function(e, r) {
                        var o = +t.getRightValue(e);
                        isNaN(o) || s.data[r].hidden || ((n = Math.min(o, n)), (i = Math.max(o, i)));
                      });
                    }
                  }),
                    (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                    (t.max = i === Number.NEGATIVE_INFINITY ? 0 : i),
                    t.handleTickRangeOptions();
                },
                getTickLimit: function() {
                  var t = this.options.ticks,
                    n = r.valueOrDefault(t.fontSize, e.defaultFontSize);
                  return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)));
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
                          n,
                          i,
                          o = s(t),
                          u = Math.min(t.height / 2, t.width / 2),
                          c = { r: t.width, l: 0, t: t.height, b: 0 },
                          d = {};
                        (t.ctx.font = o.font), (t._pointLabelSizes = []);
                        var h,
                          f,
                          p,
                          g = a(t);
                        for (e = 0; e < g; e++) {
                          (i = t.getPointPosition(e, u)),
                            (h = t.ctx),
                            (f = o.size),
                            (n = r.isArray((p = t.pointLabels[e] || ''))
                              ? { w: r.longestText(h, h.font, p), h: p.length * f + 1.5 * (p.length - 1) * f }
                              : { w: h.measureText(p).width, h: f }),
                            (t._pointLabelSizes[e] = n);
                          var m = t.getIndexAngle(e),
                            v = r.toDegrees(m) % 360,
                            y = l(v, i.x, n.w, 0, 180),
                            b = l(v, i.y, n.h, 90, 270);
                          y.start < c.l && ((c.l = y.start), (d.l = m)),
                            y.end > c.r && ((c.r = y.end), (d.r = m)),
                            b.start < c.t && ((c.t = b.start), (d.t = m)),
                            b.end > c.b && ((c.b = b.end), (d.b = m));
                        }
                        t.setReductions(u, c, d);
                      })(this)
                    : ((t = this),
                      (e = Math.min(t.height / 2, t.width / 2)),
                      (t.drawingArea = Math.round(e)),
                      t.setCenterPoint(0, 0, 0, 0));
                },
                setReductions: function(t, e, n) {
                  var i = e.l / Math.sin(n.l),
                    r = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                    o = -e.t / Math.cos(n.t),
                    a = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
                  (i = c(i)),
                    (r = c(r)),
                    (o = c(o)),
                    (a = c(a)),
                    (this.drawingArea = Math.min(Math.round(t - (i + r) / 2), Math.round(t - (o + a) / 2))),
                    this.setCenterPoint(i, r, o, a);
                },
                setCenterPoint: function(t, e, n, i) {
                  var r = this,
                    o = n + r.drawingArea,
                    a = r.height - i - r.drawingArea;
                  (r.xCenter = Math.round((t + r.drawingArea + (r.width - e - r.drawingArea)) / 2 + r.left)),
                    (r.yCenter = Math.round((o + a) / 2 + r.top));
                },
                getIndexAngle: function(t) {
                  return (
                    t * ((2 * Math.PI) / a(this)) +
                    ((this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) *
                      Math.PI *
                      2) /
                      360
                  );
                },
                getDistanceFromCenterForValue: function(t) {
                  var e = this;
                  if (null === t) return 0;
                  var n = e.drawingArea / (e.max - e.min);
                  return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
                },
                getPointPosition: function(t, e) {
                  var n = this.getIndexAngle(t) - Math.PI / 2;
                  return {
                    x: Math.round(Math.cos(n) * e) + this.xCenter,
                    y: Math.round(Math.sin(n) * e) + this.yCenter
                  };
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
                    n = t.options,
                    i = n.gridLines,
                    o = n.ticks,
                    l = r.valueOrDefault;
                  if (n.display) {
                    var c = t.ctx,
                      d = this.getIndexAngle(0),
                      h = l(o.fontSize, e.defaultFontSize),
                      f = l(o.fontStyle, e.defaultFontStyle),
                      p = l(o.fontFamily, e.defaultFontFamily),
                      g = r.fontString(h, f, p);
                    r.each(t.ticks, function(n, s) {
                      if (s > 0 || o.reverse) {
                        var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                        if (
                          (i.display &&
                            0 !== s &&
                            (function(t, e, n, i) {
                              var o = t.ctx;
                              if (
                                ((o.strokeStyle = r.valueAtIndexOrDefault(e.color, i - 1)),
                                (o.lineWidth = r.valueAtIndexOrDefault(e.lineWidth, i - 1)),
                                t.options.gridLines.circular)
                              )
                                o.beginPath(),
                                  o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI),
                                  o.closePath(),
                                  o.stroke();
                              else {
                                var s = a(t);
                                if (0 === s) return;
                                o.beginPath();
                                var l = t.getPointPosition(0, n);
                                o.moveTo(l.x, l.y);
                                for (var u = 1; u < s; u++) (l = t.getPointPosition(u, n)), o.lineTo(l.x, l.y);
                                o.closePath(), o.stroke();
                              }
                            })(t, i, u, s),
                          o.display)
                        ) {
                          var f = l(o.fontColor, e.defaultFontColor);
                          if (
                            ((c.font = g),
                            c.save(),
                            c.translate(t.xCenter, t.yCenter),
                            c.rotate(d),
                            o.showLabelBackdrop)
                          ) {
                            var p = c.measureText(n).width;
                            (c.fillStyle = o.backdropColor),
                              c.fillRect(
                                -p / 2 - o.backdropPaddingX,
                                -u - h / 2 - o.backdropPaddingY,
                                p + 2 * o.backdropPaddingX,
                                h + 2 * o.backdropPaddingY
                              );
                          }
                          (c.textAlign = 'center'),
                            (c.textBaseline = 'middle'),
                            (c.fillStyle = f),
                            c.fillText(n, 0, -u),
                            c.restore();
                        }
                      }
                    }),
                      (n.angleLines.display || n.pointLabels.display) &&
                        (function(t) {
                          var n = t.ctx,
                            i = t.options,
                            o = i.angleLines,
                            l = i.pointLabels;
                          (n.lineWidth = o.lineWidth), (n.strokeStyle = o.color);
                          var c,
                            d,
                            h,
                            f,
                            p = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                            g = s(t);
                          n.textBaseline = 'top';
                          for (var m = a(t) - 1; m >= 0; m--) {
                            if (o.display) {
                              var v = t.getPointPosition(m, p);
                              n.beginPath(),
                                n.moveTo(t.xCenter, t.yCenter),
                                n.lineTo(v.x, v.y),
                                n.stroke(),
                                n.closePath();
                            }
                            if (l.display) {
                              var y = t.getPointPosition(m, p + 5),
                                b = r.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                              (n.font = g.font), (n.fillStyle = b);
                              var x = t.getIndexAngle(m),
                                _ = r.toDegrees(x);
                              (n.textAlign = 0 === (f = _) || 180 === f ? 'center' : f < 180 ? 'left' : 'right'),
                                (d = t._pointLabelSizes[m]),
                                (h = y),
                                90 === (c = _) || 270 === c ? (h.y -= d.h / 2) : (c > 270 || c < 90) && (h.y -= d.h),
                                u(n, t.pointLabels[m] || '', y, g.size);
                            }
                          }
                        })(t);
                  }
                }
              });
              t.scaleService.registerScaleType('radialLinear', d, n);
            };
          },
          { 25: 25, 34: 34, 45: 45 }
        ],
        58: [
          function(t, e, n) {
            'use strict';
            var i = t(1);
            i = 'function' == typeof i ? i : window.moment;
            var r = t(25),
              o = t(45),
              a = Number.MIN_SAFE_INTEGER || -9007199254740991,
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
            function c(t, e) {
              return t - e;
            }
            function d(t) {
              var e,
                n,
                i,
                r = {},
                o = [];
              for (e = 0, n = t.length; e < n; ++e) r[(i = t[e])] || ((r[i] = !0), o.push(i));
              return o;
            }
            function h(t, e, n, i) {
              var r = (function(t, e, n) {
                  for (var i, r, o, a = 0, s = t.length - 1; a >= 0 && a <= s; ) {
                    if (((r = t[(i = (a + s) >> 1) - 1] || null), (o = t[i]), !r)) return { lo: null, hi: o };
                    if (o[e] < n) a = i + 1;
                    else {
                      if (!(r[e] > n)) return { lo: r, hi: o };
                      s = i - 1;
                    }
                  }
                  return { lo: o, hi: null };
                })(t, e, n),
                o = r.lo ? (r.hi ? r.lo : t[t.length - 2]) : t[0],
                a = r.lo ? (r.hi ? r.hi : t[t.length - 1]) : t[1],
                s = a[e] - o[e];
              return o[i] + (a[i] - o[i]) * (s ? (n - o[e]) / s : 0);
            }
            function f(t, e) {
              var n = e.parser,
                r = e.parser || e.format;
              return 'function' == typeof n
                ? n(t)
                : 'string' == typeof t && 'string' == typeof r
                ? i(t, r)
                : (t instanceof i || (t = i(t)), t.isValid() ? t : 'function' == typeof r ? r(t) : t);
            }
            function p(t, e) {
              if (o.isNullOrUndef(t)) return null;
              var n = e.options.time,
                i = f(e.getRightValue(t), n);
              return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null;
            }
            function g(t) {
              for (var e = u.indexOf(t) + 1, n = u.length; e < n; ++e) if (l[u[e]].common) return u[e];
            }
            function m(t, e, n, r) {
              var a,
                c = r.time,
                d =
                  c.unit ||
                  (function(t, e, n, i) {
                    var r,
                      o,
                      a,
                      c = u.length;
                    for (r = u.indexOf(t); r < c - 1; ++r)
                      if (
                        ((a = (o = l[u[r]]).steps ? o.steps[o.steps.length - 1] : s),
                        o.common && Math.ceil((n - e) / (a * o.size)) <= i)
                      )
                        return u[r];
                    return u[c - 1];
                  })(c.minUnit, t, e, n),
                h = g(d),
                f = o.valueOrDefault(c.stepSize, c.unitStepSize),
                p = 'week' === d && c.isoWeekday,
                m = r.ticks.major.enabled,
                v = l[d],
                y = i(t),
                b = i(e),
                x = [];
              for (
                f ||
                  (f = (function(t, e, n, i) {
                    var r,
                      o,
                      a,
                      s = e - t,
                      u = l[n],
                      c = u.size,
                      d = u.steps;
                    if (!d) return Math.ceil(s / (i * c));
                    for (r = 0, o = d.length; r < o && ((a = d[r]), !(Math.ceil(s / (c * a)) <= i)); ++r);
                    return a;
                  })(t, e, d, n)),
                  p && ((y = y.isoWeekday(p)), (b = b.isoWeekday(p))),
                  y = y.startOf(p ? 'day' : d),
                  (b = b.startOf(p ? 'day' : d)) < e && b.add(1, d),
                  a = i(y),
                  m && h && !p && !c.round && (a.startOf(h), a.add(~~((y - a) / (v.size * f)) * f, d));
                a < b;
                a.add(f, d)
              )
                x.push(+a);
              return x.push(+a), x;
            }
            e.exports = function(t) {
              var e = t.Scale.extend({
                initialize: function() {
                  if (!i)
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
                    n,
                    r,
                    l,
                    u,
                    h = this,
                    f = h.chart,
                    g = h.options.time,
                    m = g.unit || 'day',
                    v = s,
                    y = a,
                    b = [],
                    x = [],
                    _ = [];
                  for (t = 0, n = f.data.labels.length; t < n; ++t) _.push(p(f.data.labels[t], h));
                  for (t = 0, n = (f.data.datasets || []).length; t < n; ++t)
                    if (f.isDatasetVisible(t))
                      if (o.isObject((l = f.data.datasets[t].data)[0]))
                        for (x[t] = [], e = 0, r = l.length; e < r; ++e) (u = p(l[e], h)), b.push(u), (x[t][e] = u);
                      else b.push.apply(b, _), (x[t] = _.slice(0));
                    else x[t] = [];
                  _.length && ((_ = d(_).sort(c)), (v = Math.min(v, _[0])), (y = Math.max(y, _[_.length - 1]))),
                    b.length && ((b = d(b).sort(c)), (v = Math.min(v, b[0])), (y = Math.max(y, b[b.length - 1]))),
                    (v = p(g.min, h) || v),
                    (y = p(g.max, h) || y),
                    (v = v === s ? +i().startOf(m) : v),
                    (y = y === a ? +i().endOf(m) + 1 : y),
                    (h.min = Math.min(v, y)),
                    (h.max = Math.max(v + 1, y)),
                    (h._horizontal = h.isHorizontal()),
                    (h._table = []),
                    (h._timestamps = { data: b, datasets: x, labels: _ });
                },
                buildTicks: function() {
                  var t,
                    e,
                    n,
                    r,
                    o,
                    a,
                    s,
                    c,
                    d,
                    v,
                    y,
                    b = this,
                    x = b.min,
                    _ = b.max,
                    w = b.options,
                    C = w.time,
                    S = [],
                    T = [];
                  switch (w.ticks.source) {
                    case 'data':
                      S = b._timestamps.data;
                      break;
                    case 'labels':
                      S = b._timestamps.labels;
                      break;
                    case 'auto':
                    default:
                      S = m(x, _, b.getLabelCapacity(x), w);
                  }
                  for (
                    'ticks' === w.bounds && S.length && ((x = S[0]), (_ = S[S.length - 1])),
                      x = p(C.min, b) || x,
                      _ = p(C.max, b) || _,
                      t = 0,
                      e = S.length;
                    t < e;
                    ++t
                  )
                    (n = S[t]) >= x && n <= _ && T.push(n);
                  return (
                    (b.min = x),
                    (b.max = _),
                    (b._unit =
                      C.unit ||
                      (function(t, e, n, r) {
                        var o,
                          a,
                          s = i.duration(i(b.max).diff(i(n)));
                        for (o = u.length - 1; o >= u.indexOf(e); o--)
                          if (l[(a = u[o])].common && s.as(a) >= t.length) return a;
                        return u[e ? u.indexOf(e) : 0];
                      })(T, C.minUnit, b.min)),
                    (b._majorUnit = g(b._unit)),
                    (b._table = (function(t, e, n, i) {
                      if ('linear' === w.distribution || !t.length) return [{ time: e, pos: 0 }, { time: n, pos: 1 }];
                      var r,
                        o,
                        a,
                        s,
                        l,
                        u = [],
                        c = [e];
                      for (r = 0, o = t.length; r < o; ++r) (s = t[r]) > e && s < n && c.push(s);
                      for (c.push(n), r = 0, o = c.length; r < o; ++r)
                        (l = c[r + 1]),
                          (s = c[r]),
                          (void 0 !== (a = c[r - 1]) && void 0 !== l && Math.round((l + a) / 2) === s) ||
                            u.push({ time: s, pos: r / (o - 1) });
                      return u;
                    })(b._timestamps.data, x, _)),
                    (b._offsets = ((r = b._table),
                    (o = T),
                    (a = x),
                    (v = 0),
                    (y = 0),
                    (s = w).offset &&
                      o.length &&
                      (s.time.min ||
                        ((d = o[0]),
                        (v = (h(r, 'time', (c = o.length > 1 ? o[1] : _), 'pos') - h(r, 'time', d, 'pos')) / 2)),
                      s.time.max ||
                        ((c = o[o.length - 1]),
                        (d = o.length > 1 ? o[o.length - 2] : a),
                        (y = (h(r, 'time', c, 'pos') - h(r, 'time', d, 'pos')) / 2))),
                    { left: v, right: y })),
                    (b._labelFormat = (function(t, e) {
                      var n,
                        i,
                        r,
                        o = t.length;
                      for (n = 0; n < o; n++) {
                        if (0 !== (i = f(t[n], e)).millisecond()) return 'MMM D, YYYY h:mm:ss.SSS a';
                        (0 === i.second() && 0 === i.minute() && 0 === i.hour()) || (r = !0);
                      }
                      return r ? 'MMM D, YYYY h:mm:ss a' : 'MMM D, YYYY';
                    })(b._timestamps.data, C)),
                    (function(t, e) {
                      var n,
                        r,
                        o,
                        a,
                        s = [];
                      for (n = 0, r = t.length; n < r; ++n)
                        (o = t[n]), (a = !!e && o === +i(o).startOf(e)), s.push({ value: o, major: a });
                      return s;
                    })(T, b._majorUnit)
                  );
                },
                getLabelForIndex: function(t, e) {
                  var n = this.chart.data,
                    i = this.options.time,
                    r = n.labels && t < n.labels.length ? n.labels[t] : '',
                    a = n.datasets[e].data[t];
                  return (
                    o.isObject(a) && (r = this.getRightValue(a)),
                    i.tooltipFormat
                      ? f(r, i).format(i.tooltipFormat)
                      : 'string' == typeof r
                      ? r
                      : f(r, i).format(this._labelFormat)
                  );
                },
                tickFormatFunction: function(t, e, n, i) {
                  var r = this.options,
                    a = t.valueOf(),
                    s = r.time.displayFormats,
                    l = s[this._unit],
                    u = this._majorUnit,
                    c = s[u],
                    d = t
                      .clone()
                      .startOf(u)
                      .valueOf(),
                    h = r.ticks.major,
                    f = h.enabled && u && c && a === d,
                    p = t.format(i || (f ? c : l)),
                    g = f ? h : r.ticks.minor,
                    m = o.valueOrDefault(g.callback, g.userCallback);
                  return m ? m(p, e, n) : p;
                },
                convertTicksToLabels: function(t) {
                  var e,
                    n,
                    r = [];
                  for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(i(t[e].value), e, t));
                  return r;
                },
                getPixelForOffset: function(t) {
                  var e = this,
                    n = e._horizontal ? e.width : e.height,
                    i = e._horizontal ? e.left : e.top,
                    r = h(e._table, 'time', t, 'pos');
                  return i + (n * (e._offsets.left + r)) / (e._offsets.left + 1 + e._offsets.right);
                },
                getPixelForValue: function(t, e, n) {
                  var i = null;
                  if (
                    (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]),
                    null === i && (i = p(t, this)),
                    null !== i)
                  )
                    return this.getPixelForOffset(i);
                },
                getPixelForTick: function(t) {
                  var e = this.getTicks();
                  return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
                },
                getValueForPixel: function(t) {
                  var e = this,
                    n = e._horizontal ? e.width : e.height,
                    r = h(
                      e._table,
                      'pos',
                      (n ? (t - (e._horizontal ? e.left : e.top)) / n : 0) * (e._offsets.left + 1 + e._offsets.left) -
                        e._offsets.right,
                      'time'
                    );
                  return i(r);
                },
                getLabelWidth: function(t) {
                  var e = this.options.ticks,
                    n = this.ctx.measureText(t).width,
                    i = o.toRadians(e.maxRotation),
                    a = Math.cos(i),
                    s = Math.sin(i);
                  return n * a + o.valueOrDefault(e.fontSize, r.global.defaultFontSize) * s;
                },
                getLabelCapacity: function(t) {
                  var e = this,
                    n = e.options.time.displayFormats.millisecond,
                    r = e.tickFormatFunction(i(t), 0, [], n),
                    o = e.getLabelWidth(r),
                    a = e.isHorizontal() ? e.width : e.height,
                    s = Math.floor(a / o);
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
