!(function (u) {
  const s = window.pbjsChunk;
  window.pbjsChunk = function (e, t, n) {
    for (var r, i, o, a = 0, c = []; a < e.length; a++)
      (i = e[a]), d[i] && c.push(d[i][0]), (d[i] = 0);
    for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
    for (s && s(e, t, n); c.length; ) c.shift()();
    if (n) for (a = 0; a < n.length; a++) o = f((f.s = n[a]));
    return o;
  };
  const n = {};
  var d = { 266: 0 };
  function f(e) {
    if (n[e]) return n[e].exports;
    const t = (n[e] = { i: e, l: !1, exports: {} });
    return u[e].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
  }
  (f.m = u),
    (f.c = n),
    (f.d = function (e, t, n) {
      f.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
    }),
    (f.n = function (e) {
      const t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return f.d(t, 'a', t), t;
    }),
    (f.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (f.p = ''),
    (f.oe = function (e) {
      throw (console.error(e), e);
    }),
    f((f.s = 666));
})({
  0(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'internal', function () {
        return _;
      }),
      n.d(t, 'bind', function () {
        return B;
      }),
      (t.replaceTokenInString = function (i, e, o) {
        return (
          re(e, function (e, t) {
            e = void 0 === e ? '' : e;
            const n = o + t.toUpperCase() + o;
            const r = new RegExp(n, 'g');
            i = i.replace(r, e);
          }),
          i
        );
      }),
      (t.getUniqueIdentifierStr = x),
      (t.generateUUID = function e(t) {
        return t
          ? (t ^ (D() >> (t / 4))).toString(16)
          : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
      }),
      (t.getBidIdParameter = function (e, t) {
        if (t && t[e]) return t[e];
        return '';
      }),
      (t.tryAppendQueryString = function (e, t, n) {
        if (n) return (e += `${t}=${encodeURIComponent(n)}&`);
        return e;
      }),
      (t.parseQueryStringParameters = function (e) {
        let t = '';
        for (const n in e) e.hasOwnProperty(n) && (t += `${n}=${encodeURIComponent(e[n])}&`);
        return t;
      }),
      (t.transformAdServerTargetingObj = function (t) {
        return t && Object.getOwnPropertyNames(t).length > 0
          ? pe(t)
              .map(function (e) {
                return ''.concat(e, '=').concat(encodeURIComponent(ge(t, e)));
              })
              .join('&')
          : '';
      }),
      (t.getAdUnitSizes = function (e) {
        if (!e) return;
        let t = [];
        if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
          const n = e.mediaTypes.banner.sizes;
          Array.isArray(n[0]) ? (t = n) : t.push(n);
        } else
          Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? (t = e.sizes) : t.push(e.sizes));
        return t;
      }),
      (t.parseSizesInput = function (e) {
        const t = [];
        if (typeof e === 'string') {
          const n = e.split(',');
          const r = /^(\d)+x(\d)+$/i;
          if (n) for (const i in n) oe(n, i) && n[i].match(r) && t.push(n[i]);
        } else if (b(e) === 'object') {
          const o = e.length;
          if (o > 0)
            if (o === 2 && typeof e[0] === 'number' && typeof e[1] === 'number') t.push(k(e));
            else for (let a = 0; a < o; a++) t.push(k(e[a]));
        }
        return t;
      }),
      (t.parseGPTSingleSizeArray = k),
      (t.parseGPTSingleSizeArrayToRtbSize = function (e) {
        if (P(e)) return { w: e[0], h: e[1] };
      }),
      (t.getTopWindowLocation = M),
      (t.getTopFrameReferrer = q),
      (t.getAncestorOrigins = G),
      (t.getWindowTop = W),
      (t.getWindowSelf = L),
      (t.getWindowLocation = z),
      (t.getTopWindowUrl = function () {
        let t;
        try {
          t = _.getTopWindowLocation().href;
        } catch (e) {
          t = '';
        }
        return t;
      }),
      (t.getTopWindowReferrer = function () {
        try {
          return window.top.document.referrer;
        } catch (e) {
          return document.referrer;
        }
      }),
      (t.logMessage = F),
      (t.logInfo = V),
      (t.logWarn = H),
      (t.logError = K),
      (t.hasConsoleLogger = function () {
        return I;
      }),
      (t.debugTurnedOn = Y),
      (t.createInvisibleIframe = function () {
        const e = document.createElement('iframe');
        return (
          (e.id = x()),
          (e.height = 0),
          (e.width = 0),
          (e.border = '0px'),
          (e.hspace = '0'),
          (e.vspace = '0'),
          (e.marginWidth = '0'),
          (e.marginHeight = '0'),
          (e.style.border = '0'),
          (e.scrolling = 'no'),
          (e.frameBorder = '0'),
          (e.src = 'about:blank'),
          (e.style.display = 'none'),
          e
        );
      }),
      (t.getParameterByName = function (e) {
        const t = new RegExp(`[\\?&]${e}=([^&#]*)`).exec(window.location.search);
        return t !== null ? decodeURIComponent(t[1].replace(/\+/g, ' ')) : '';
      }),
      (t.hasValidBidRequest = function (e, n, t) {
        let r = !1;
        function i(e, t) {
          t === n[o] && (r = !0);
        }
        for (var o = 0; o < n.length; o++)
          if (((r = !1), re(e, i), !r))
            return (
              K(
                `Params are missing for bid request. One of these required paramaters are missing: ${n}`,
                t
              ),
              !1
            );
        return !0;
      }),
      (t.addEventHandler = function (e, t, n) {
        e.addEventListener
          ? e.addEventListener(t, n, !0)
          : e.attachEvent && e.attachEvent(`on${t}`, n);
      }),
      (t.isA = Q),
      (t.isFn = X),
      (t.isStr = $),
      (t.isArray = Z),
      (t.isNumber = ee),
      (t.isPlainObject = te),
      (t.isBoolean = function (e) {
        return Q(e, A);
      }),
      (t.isEmpty = ne),
      (t.isEmptyStr = function (e) {
        return $(e) && (!e || e.length === 0);
      }),
      (t._each = re),
      (t.contains = function (e, t) {
        if (ne(e)) return !1;
        if (X(e.indexOf)) return e.indexOf(t) !== -1;
        let n = e.length;
        for (; n--; ) if (e[n] === t) return !0;
        return !1;
      }),
      n.d(t, 'indexOf', function () {
        return ie;
      }),
      (t._map = function (n, r) {
        if (ne(n)) return [];
        if (X(n.map)) return n.map(r);
        const i = [];
        return (
          re(n, function (e, t) {
            i.push(r(e, t, n));
          }),
          i
        );
      }),
      (t.hasOwn = oe),
      (t.insertElement = ae),
      (t.triggerPixel = ce),
      (t.callBurl = function (e) {
        const t = e.source;
        const n = e.burl;
        t === y.S2S.SRC && n && _.triggerPixel(n);
      }),
      (t.insertHtmlIntoIframe = function (e) {
        if (!e) return;
        const t = document.createElement('iframe');
        (t.id = x()),
          (t.width = 0),
          (t.height = 0),
          (t.hspace = '0'),
          (t.vspace = '0'),
          (t.marginWidth = '0'),
          (t.marginHeight = '0'),
          (t.style.display = 'none'),
          (t.style.height = '0px'),
          (t.style.width = '0px'),
          (t.scrolling = 'no'),
          (t.frameBorder = '0'),
          (t.allowtransparency = 'true'),
          _.insertElement(t, document, 'body'),
          t.contentWindow.document.open(),
          t.contentWindow.document.write(e),
          t.contentWindow.document.close();
      }),
      (t.insertUserSyncIframe = ue),
      (t.createTrackPixelHtml = function (e) {
        if (!e) return '';
        const t = encodeURI(e);
        let n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return (n += `<img src="${t}"></div>`);
      }),
      (t.createTrackPixelIframeHtml = se),
      (t.getIframeDocument = function (e) {
        if (!e) return;
        let t;
        try {
          t = e.contentWindow
            ? e.contentWindow.document
            : e.contentDocument.document
            ? e.contentDocument.document
            : e.contentDocument;
        } catch (e) {
          _.logError('Cannot get iframe document', e);
        }
        return t;
      }),
      (t.getValueString = de),
      (t.uniques = fe),
      (t.flatten = le),
      (t.getBidRequest = function (n, e) {
        return n
          ? (e.some(function (e) {
              const t = c()(e.bids, function (t) {
                return ['bidId', 'adId', 'bid_id'].some(function (e) {
                  return t[e] === n;
                });
              });
              return t && (r = t), t;
            }),
            r)
          : void 0;
        let r;
      }),
      (t.getKeys = pe),
      (t.getValue = ge),
      (t.getKeyByValue = function (e, t) {
        for (const n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
      }),
      (t.getBidderCodes = function () {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits)
          .map(function (e) {
            return e.bids
              .map(function (e) {
                return e.bidder;
              })
              .reduce(le, []);
          })
          .reduce(le)
          .filter(fe);
      }),
      (t.isGptPubadsDefined = function () {
        if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots))
          return !0;
      }),
      n.d(t, 'getHighestCpm', function () {
        return be;
      }),
      n.d(t, 'getOldestHighestCpmBid', function () {
        return ye;
      }),
      n.d(t, 'getLatestHighestCpmBid', function () {
        return ve;
      }),
      (t.shuffle = function (e) {
        let t = e.length;
        for (; t > 0; ) {
          const n = Math.floor(Math.random() * t);
          const r = e[--t];
          (e[t] = e[n]), (e[n] = r);
        }
        return e;
      }),
      (t.adUnitsFilter = function (e, t) {
        return s()(e, t && t.adUnitCode);
      }),
      (t.isSrcdocSupported = function (e) {
        return (
          e.defaultView &&
          e.defaultView.frameElement &&
          'srcdoc' in e.defaultView.frameElement &&
          !/firefox/i.test(navigator.userAgent)
        );
      }),
      (t.deepClone = me),
      (t.inIframe = Se),
      (t.isSafariBrowser = function () {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }),
      (t.replaceAuctionPrice = function (e, t) {
        if (!e) return;
        return e.replace(/\$\{AUCTION_PRICE\}/g, t);
      }),
      (t.timestamp = function () {
        return new Date().getTime();
      }),
      (t.checkCookieSupport = Ee),
      (t.cookiesAreEnabled = function () {
        if (_.checkCookieSupport()) return !0;
        return (
          (window.document.cookie = 'prebid.cookieTest'),
          window.document.cookie.indexOf('prebid.cookieTest') != -1
        );
      }),
      (t.getCookie = function (e) {
        const t = window.document.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]*)\\s*(;|$)`);
        return t ? decodeURIComponent(t[2]) : null;
      }),
      (t.setCookie = function (e, t, n, r) {
        document.cookie = ''
          .concat(e, '=')
          .concat(encodeURIComponent(t))
          .concat(n !== '' ? '; expires='.concat(n) : '', '; path=/')
          .concat(r ? '; SameSite='.concat(r) : '');
      }),
      (t.localStorageIsEnabled = function () {
        try {
          return (
            localStorage.setItem('prebid.cookieTest', '1'),
            localStorage.getItem('prebid.cookieTest') === '1'
          );
        } catch (e) {
          return !1;
        }
      }),
      (t.delayExecution = function (e, t) {
        if (t < 1) throw new Error('numRequiredCalls must be a positive number. Got '.concat(t));
        let n = 0;
        return function () {
          ++n === t && e.apply(null, arguments);
        };
      }),
      (t.groupBy = function (e, n) {
        return e.reduce(function (e, t) {
          return (e[t[n]] = e[t[n]] || []).push(t), e;
        }, {});
      }),
      (t.createContentToExecuteExtScriptInFriendlyFrame = function (e) {
        return e
          ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(
              e,
              '"></script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
            )
          : '';
      }),
      (t.getDefinedParams = function (n, e) {
        return e
          .filter(function (e) {
            return n[e];
          })
          .reduce(function (e, t) {
            return g(
              e,
              (function (e, t, n) {
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n);
                return e;
              })({}, t, n[t])
            );
          }, {});
      }),
      (t.isValidMediaTypes = function (e) {
        const t = ['banner', 'native', 'video'];
        if (
          !Object.keys(e).every(function (e) {
            return s()(t, e);
          })
        )
          return !1;
        if (e.video && e.video.context)
          return s()(['instream', 'outstream', 'adpod'], e.video.context);
        return !0;
      }),
      (t.getBidderRequest = function (e, t, n) {
        return (
          c()(e, function (e) {
            return (
              e.bids.filter(function (e) {
                return e.bidder === t && e.adUnitCode === n;
              }).length > 0
            );
          }) || { start: null, auctionId: null }
        );
      }),
      (t.getUserConfiguredParams = function (e, t, n) {
        return e
          .filter(function (e) {
            return e.code === t;
          })
          .map(function (e) {
            return e.bids;
          })
          .reduce(le, [])
          .filter(function (e) {
            return e.bidder === n;
          })
          .map(function (e) {
            return e.params || {};
          });
      }),
      (t.getOrigin = function () {
        return window.location.origin
          ? window.location.origin
          : `${window.location.protocol}//${window.location.hostname}${
              window.location.port ? `:${window.location.port}` : ''
            }`;
      }),
      (t.getDNT = function () {
        return (
          navigator.doNotTrack === '1' ||
          window.doNotTrack === '1' ||
          navigator.msDoNotTrack === '1' ||
          navigator.doNotTrack === 'yes'
        );
      }),
      (t.isAdUnitCodeMatchingSlot = function (t) {
        return function (e) {
          return Ae(t, e);
        };
      }),
      (t.isSlotMatchingAdUnitCode = function (t) {
        return function (e) {
          return Ae(e, t);
        };
      }),
      (t.unsupportedBidderMessage = function (e, t) {
        const n = Object.keys(e.mediaTypes || { banner: 'banner' }).join(', ');
        return '\n    '
          .concat(e.code, ' is a ')
          .concat(n, " ad unit\n    containing bidders that don't support ")
          .concat(n, ': ')
          .concat(t, ".\n    This bidder won't fetch demand.\n  ");
      }),
      (t.deletePropertyFromObject = function (e, t) {
        const n = { ...e };
        return delete n[t], n;
      }),
      (t.isInteger = Te),
      (t.convertCamelToUnderscore = function (e) {
        return e
          .replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
            return `_${t.toLowerCase()}`;
          })
          .replace(/^_/, '');
      }),
      (t.cleanObj = function (n) {
        return Object.keys(n).reduce(function (e, t) {
          return void 0 !== n[t] && (e[t] = n[t]), e;
        }, {});
      }),
      (t.pick = function (a, c) {
        return b(a) === 'object'
          ? c.reduce(function (e, t, n) {
              if (typeof t === 'function') return e;
              let r = t;
              const i = t.match(/^(.+?)\sas\s(.+?)$/i);
              i && ((t = i[1]), (r = i[2]));
              let o = a[t];
              return (
                typeof c[n + 1] === 'function' && (o = c[n + 1](o, e)),
                void 0 !== o && (e[r] = o),
                e
              );
            }, {})
          : {};
      }),
      (t.transformBidderParamKeywords = function (e) {
        const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'keywords';
        const i = [];
        return (
          re(e, function (e, t) {
            if (Z(e)) {
              const n = [];
              re(e, function (e) {
                (!(e = de(`${r}.${t}`, e)) && e !== '') || n.push(e);
              }),
                (e = n);
            } else {
              if (!$((e = de(`${r}.${t}`, e)))) return;
              e = [e];
            }
            i.push({ key: t, value: e });
          }),
          i
        );
      }),
      (t.convertTypes = function (t, n) {
        return (
          Object.keys(t).forEach(function (e) {
            n[e] &&
              (X(t[e])
                ? (n[e] = t[e](n[e]))
                : (n[e] = (function (e, t) {
                    return e === 'string' ? t && t.toString() : e === 'number' ? Number(t) : t;
                  })(t[e], n[e])),
              isNaN(n[e]) && delete n.key);
          }),
          n
        );
      }),
      (t.setDataInLocalStorage = function (e, t) {
        Oe() && window.localStorage.setItem(e, t);
      }),
      (t.getDataFromLocalStorage = function (e) {
        if (Oe()) return window.localStorage.getItem(e);
      }),
      (t.hasLocalStorage = Oe),
      (t.isArrayOfNums = function (e, t) {
        return (
          Z(e) &&
          (!t || e.length === t) &&
          e.every(function (e) {
            return Te(e);
          })
        );
      }),
      (t.fill = function (e, t) {
        for (var n = [], r = 0; r < t; r++) {
          const i = te(e) ? me(e) : e;
          n.push(i);
        }
        return n;
      }),
      (t.chunk = function (e, t) {
        for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
          const i = r * t;
          const o = i + t;
          n.push(e.slice(i, o));
        }
        return n;
      }),
      (t.getMinValueFromArray = function (e) {
        return Math.min.apply(Math, p(e));
      }),
      (t.getMaxValueFromArray = function (e) {
        return Math.max.apply(Math, p(e));
      }),
      (t.compareOn = function (n) {
        return function (e, t) {
          return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
        };
      });
    const r = n(3);
    const i = n(88);
    const o = n.n(i);
    const a = n(12);
    var c = n.n(a);
    const u = n(10);
    var s = n.n(u);
    const d = n(9);
    const f = n(89);
    n.d(t, 'deepAccess', function () {
      return f.a;
    });
    const l = n(90);
    function p(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            Object.prototype.toString.call(e) === '[object Arguments]'
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function g() {
      return (g =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function b(e) {
      return (b =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    n.d(t, 'deepSetValue', function () {
      return l.a;
    });
    var y = n(4);
    const v = 'Array';
    const h = 'String';
    const m = 'Function';
    const S = 'Number';
    const E = 'Object';
    var A = 'Boolean';
    const T = Object.prototype.toString;
    const O = Boolean(window.console);
    var I = Boolean(O && window.console.log);
    const w = Boolean(O && window.console.info);
    const j = Boolean(O && window.console.warn);
    const C = Boolean(O && window.console.error);
    var _ = {
      checkCookieSupport: Ee,
      createTrackPixelIframeHtml: se,
      getWindowSelf: L,
      getWindowTop: W,
      getAncestorOrigins: G,
      getTopFrameReferrer: q,
      getWindowLocation: z,
      getTopWindowLocation: M,
      insertUserSyncIframe: ue,
      insertElement: ae,
      isFn: X,
      triggerPixel: ce,
      logError: K,
      logWarn: H,
      logMessage: F,
      logInfo: V,
    };
    const U = {};
    var B =
      function (e, t) {
        return t;
      }.bind(null, 1, U)() === U
        ? Function.prototype.bind
        : function (e) {
            const t = this;
            const n = Array.prototype.slice.call(arguments, 1);
            return function () {
              return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
            };
          };
    let R;
    const N =
      ((R = 0),
      function () {
        return ++R;
      });
    function x() {
      return N() + Math.random().toString(16).substr(2);
    }
    function D() {
      return window && window.crypto && window.crypto.getRandomValues
        ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
        : 16 * Math.random();
    }
    function k(e) {
      if (P(e)) return `${e[0]}x${e[1]}`;
    }
    function P(e) {
      return Z(e) && e.length === 2 && !isNaN(e[0]) && !isNaN(e[1]);
    }
    function M() {
      if (Se()) {
        let e;
        try {
          e = _.getAncestorOrigins() || _.getTopFrameReferrer();
        } catch (e) {
          V('could not obtain top window location', e);
        }
        if (e) return Object(d.c)(e, { decodeSearchAsString: !0 });
      }
      return _.getWindowLocation();
    }
    function q() {
      try {
        window.top.location.toString();
        for (
          var e, t = '';
          (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer),
            e !== window.top;

        );
        return t;
      } catch (e) {
        return window.document.referrer;
      }
    }
    function G() {
      if (
        window.document.location &&
        window.document.location.ancestorOrigins &&
        window.document.location.ancestorOrigins.length >= 1
      )
        return window.document.location.ancestorOrigins[
          window.document.location.ancestorOrigins.length - 1
        ];
    }
    function W() {
      return window.top;
    }
    function L() {
      return window.self;
    }
    function z() {
      return window.location;
    }
    function F() {
      Y() && I && console.log.apply(console, J(arguments, 'MESSAGE:'));
    }
    function V() {
      Y() && w && console.info.apply(console, J(arguments, 'INFO:'));
    }
    function H() {
      Y() && j && console.warn.apply(console, J(arguments, 'WARNING:'));
    }
    function K() {
      Y() && C && console.error.apply(console, J(arguments, 'ERROR:'));
    }
    function J(e, t) {
      return (
        (e = [].slice.call(e)),
        t && e.unshift(t),
        e.unshift(
          'display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;'
        ),
        e.unshift('%cPrebid'),
        e
      );
    }
    function Y() {
      return !!r.b.getConfig('debug');
    }
    function Q(e, t) {
      return T.call(e) === `[object ${t}]`;
    }
    function X(e) {
      return Q(e, m);
    }
    function $(e) {
      return Q(e, h);
    }
    function Z(e) {
      return Q(e, v);
    }
    function ee(e) {
      return Q(e, S);
    }
    function te(e) {
      return Q(e, E);
    }
    function ne(e) {
      if (!e) return !0;
      if (Z(e) || $(e)) return !(e.length > 0);
      for (const t in e) if (hasOwnProperty.call(e, t)) return !1;
      return !0;
    }
    function re(e, t) {
      if (!ne(e)) {
        if (X(e.forEach)) return e.forEach(t, this);
        let n = 0;
        const r = e.length;
        if (r > 0) for (; n < r; n++) t(e[n], n, e);
        else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
      }
    }
    var ie = (function () {
      if (Array.prototype.indexOf) return Array.prototype.indexOf;
    })();
    function oe(e, t) {
      return e.hasOwnProperty
        ? e.hasOwnProperty(t)
        : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
    }
    function ae(e, t, n, r) {
      let i;
      (t = t || document), (i = n ? t.getElementsByTagName(n) : t.getElementsByTagName('head'));
      try {
        if ((i = i.length ? i : t.getElementsByTagName('body')).length) {
          i = i[0];
          const o = r ? null : i.firstChild;
          return i.insertBefore(e, o);
        }
      } catch (e) {}
    }
    function ce(e, t) {
      const n = new Image();
      t && _.isFn(t) && (n.addEventListener('load', t), n.addEventListener('error', t)),
        (n.src = e);
    }
    function ue(e, t) {
      const n = _.createTrackPixelIframeHtml(e, !1, 'allow-scripts allow-same-origin');
      const r = document.createElement('div');
      r.innerHTML = n;
      const i = r.firstChild;
      t && _.isFn(t) && (i.addEventListener('load', t), i.addEventListener('error', t)),
        _.insertElement(i, document, 'html', !0);
    }
    function se(e) {
      let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
      return e
        ? ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) &&
            (e = encodeURI(e)),
          (t = t && 'sandbox="'.concat(t, '"')),
          '<iframe '
            .concat(t, ' id="')
            .concat(
              x(),
              '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
            )
            .concat(e, '">\n    </iframe>'))
        : '';
    }
    function de(e, t, n) {
      return t == null
        ? n
        : $(t)
        ? t
        : ee(t)
        ? t.toString()
        : void _.logWarn(`Unsuported type for param: ${e} required type: String`);
    }
    function fe(e, t, n) {
      return n.indexOf(e) === t;
    }
    function le(e, t) {
      return e.concat(t);
    }
    function pe(e) {
      return Object.keys(e);
    }
    function ge(e, t) {
      return e[t];
    }
    var be = he('timeToRespond', function (e, t) {
      return t < e;
    });
    var ye = he('responseTimestamp', function (e, t) {
      return t < e;
    });
    var ve = he('responseTimestamp', function (e, t) {
      return e < t;
    });
    function he(n, r) {
      return function (e, t) {
        return e.cpm === t.cpm ? (r(e[n], t[n]) ? t : e) : e.cpm < t.cpm ? t : e;
      };
    }
    function me(e) {
      return o()(e);
    }
    function Se() {
      try {
        return _.getWindowSelf() !== _.getWindowTop();
      } catch (e) {
        return !0;
      }
    }
    function Ee() {
      if (window.navigator.cookieEnabled || document.cookie.length) return !0;
    }
    var Ae = function (e, t) {
      return e.getAdUnitPath() === t || e.getSlotElementId() === t;
    };
    function Te(e) {
      return Number.isInteger
        ? Number.isInteger(e)
        : typeof e === 'number' && isFinite(e) && Math.floor(e) === e;
    }
    function Oe() {
      try {
        return !!window.localStorage;
      } catch (e) {
        K('Local storage api disabled');
      }
    }
  },
  1(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.registerBidder = function (t) {
        const n = Array.isArray(t.supportedMediaTypes)
          ? { supportedMediaTypes: t.supportedMediaTypes }
          : void 0;
        function r(e) {
          const t = I(e);
          a.default.registerBidAdapter(t, e.code, n);
        }
        r(t),
          Array.isArray(t.aliases) &&
            t.aliases.forEach(function (e) {
              (a.default.aliasRegistry[e] = t.code), r({ ...t, code: e });
            });
      }),
      (t.newBidder = I),
      (t.preloadBidderMappingFile = w),
      (t.getIabSubCategory = function (t, e) {
        const n = a.default.getBidAdapter(t);
        if (n.getSpec().getMappingFileInfo) {
          const r = n.getSpec().getMappingFileInfo();
          const i = r.localStorageKey ? r.localStorageKey : n.getBidderCode();
          let o = Object(h.getDataFromLocalStorage)(i);
          if (o) {
            try {
              o = JSON.parse(o);
            } catch (e) {
              Object(h.logError)(
                'Failed to parse '.concat(t, ' mapping data stored in local storage')
              );
            }
            return o.mapping[e] ? o.mapping[e] : null;
          }
        }
      }),
      (t.isValid = j);
    const r = n(41);
    var a = n(7);
    const i = n(3);
    const b = n(23);
    const o = n(26);
    const c = n(25);
    const u = n(31);
    const s = n(4);
    const y = n.n(s);
    const d = n(8);
    const v = n.n(d);
    const f = n(10);
    const l = n.n(f);
    const p = n(5);
    var h = n(0);
    const g = n(2);
    const m = n(13);
    function S(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              Object.prototype.toString.call(e) === '[object Arguments]'
            )
          )
            return;
          const n = [];
          let r = !0;
          let i = !1;
          let o = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || c.return == null || c.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        })()
      );
    }
    function E(e) {
      return (E =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function A() {
      return (A =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    const T = ['requestId', 'cpm', 'ttl', 'creativeId', 'netRevenue', 'currency'];
    const O = 1;
    function I(l) {
      return A(new r.a(l.code), {
        getSpec() {
          return Object.freeze(l);
        },
        registerSyncs: p,
        callBids(o, a, e, n, c) {
          if (Array.isArray(o.bids)) {
            const u = {};
            var s = [];
            const t = o.bids.filter(g);
            if (t.length !== 0) {
              const d = {};
              t.forEach(function (e) {
                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
              });
              let r = l.buildRequests(t, o);
              if (r && r.length !== 0) {
                Array.isArray(r) || (r = [r]);
                const f = Object(h.delayExecution)(i, r.length);
                r.forEach(function (i) {
                  switch (i.method) {
                    case 'GET':
                      n(
                        ''.concat(i.url).concat(
                          (function (e) {
                            if (e)
                              return '?'.concat(
                                E(e) === 'object' ? Object(h.parseQueryStringParameters)(e) : e
                              );
                            return '';
                          })(i.data)
                        ),
                        { success: e, error: t },
                        void 0,
                        { method: 'GET', withCredentials: !0, ...i.options }
                      );
                      break;
                    case 'POST':
                      n(
                        i.url,
                        { success: e, error: t },
                        typeof i.data === 'string' ? i.data : JSON.stringify(i.data),
                        {
                          method: 'POST',
                          contentType: 'text/plain',
                          withCredentials: !0,
                          ...i.options,
                        }
                      );
                      break;
                    default:
                      Object(h.logWarn)(
                        'Skipping invalid request from '
                          .concat(l.code, '. Request type ')
                          .concat(i.type, ' must be GET or POST')
                      ),
                        f();
                  }
                  function e(e, t) {
                    c(l.code);
                    try {
                      e = JSON.parse(e);
                    } catch (e) {}
                    let n;
                    (e = { body: e, headers: { get: t.getResponseHeader.bind(t) } }), s.push(e);
                    try {
                      n = l.interpretResponse(e, i);
                    } catch (e) {
                      return (
                        Object(h.logError)(
                          'Bidder '.concat(
                            l.code,
                            " failed to interpret the server's response. Continuing without bids"
                          ),
                          null,
                          e
                        ),
                        void f()
                      );
                    }
                    function r(e) {
                      const t = d[e.requestId];
                      if (t) {
                        const n = A(Object(b.a)(y.a.STATUS.GOOD, t), e);
                        !(function (e, t) {
                          (u[e] = !0), j(e, t, [o]) && a(e, t);
                        })(t.adUnitCode, n);
                      } else Object(h.logWarn)('Bidder '.concat(l.code, ' made bid for unknown request ID: ').concat(e.requestId, '. Ignoring.'));
                    }
                    n && (n.forEach ? n.forEach(r) : r(n)), f(n);
                  }
                  function t(e) {
                    c(l.code),
                      Object(h.logError)(
                        'Server call for '
                          .concat(l.code, ' failed: ')
                          .concat(e, '. Continuing without bids.')
                      ),
                      f();
                  }
                });
              } else i();
            } else i();
          }
          function i() {
            e(), v.a.emit(y.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent);
          }
        },
      });
      function p(e, t) {
        if (l.getUserSyncs) {
          const n = i.b.getConfig('userSync.filterSettings');
          let r = l.getUserSyncs(
            {
              iframeEnabled: !!(
                i.b.getConfig('userSync.iframeEnabled') ||
                (n && (n.iframe || n.all))
              ),
              pixelEnabled: !!(i.b.getConfig('userSync.pixelEnabled') || (n && (n.image || n.all))),
            },
            e,
            t
          );
          r &&
            (Array.isArray(r) || (r = [r]),
            r.forEach(function (e) {
              o.a.registerSync(e.type, l.code, e.url);
            }));
        }
      }
      function g(e) {
        return (
          !!l.isBidRequestValid(e) ||
          (Object(h.logWarn)(
            'Invalid bid sent to bidder '.concat(l.code, ': ').concat(JSON.stringify(e))
          ),
          !1)
        );
      }
    }
    function w(e, t) {
      if (!i.b.getConfig('adpod.brandCategoryExclusion')) return e.call(this, t);
      t
        .filter(function (e) {
          return Object(h.deepAccess)(e, 'mediaTypes.video.context') === g.a;
        })
        .map(function (e) {
          return e.bids.map(function (e) {
            return e.bidder;
          });
        })
        .reduce(h.flatten, [])
        .filter(h.uniques)
        .forEach(function (n) {
          const e = a.default.getBidAdapter(n);
          if (e.getSpec().getMappingFileInfo) {
            const t = e.getSpec().getMappingFileInfo();
            const r = t.refreshInDays ? t.refreshInDays : O;
            const i = t.localStorageKey ? t.localStorageKey : e.getSpec().code;
            const o = Object(h.getDataFromLocalStorage)(i);
            (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) &&
              Object(p.a)(t.url, {
                success(e) {
                  try {
                    e = JSON.parse(e);
                    const t = { lastUpdated: Object(h.timestamp)(), mapping: e.mapping };
                    Object(h.setDataInLocalStorage)(i, JSON.stringify(t));
                  } catch (e) {
                    Object(h.logError)(
                      'Failed to parse '.concat(n, ' bidder translation mapping file')
                    );
                  }
                },
                error() {
                  Object(h.logError)('Failed to load '.concat(n, ' bidder translation file'));
                },
              });
          }
        }),
        e.call(this, t);
    }
    function j(e, t, n) {
      function r(e) {
        return 'Invalid bid from '.concat(t.bidderCode, '. Ignoring bid: ').concat(e);
      }
      return e
        ? t
          ? ((i = Object.keys(t)),
            T.every(function (e) {
              return l()(i, e) && !l()([void 0, null], t[e]);
            })
              ? t.mediaType !== 'native' || Object(c.f)(t, n)
                ? t.mediaType !== 'video' || Object(u.d)(t, n)
                  ? !(
                      t.mediaType === 'banner' &&
                      !(function (e, t, n) {
                        if (
                          (t.width || parseInt(t.width, 10) === 0) &&
                          (t.height || parseInt(t.height, 10) === 0)
                        )
                          return (
                            (t.width = parseInt(t.width, 10)),
                            (t.height = parseInt(t.height, 10)),
                            !0
                          );
                        const r = Object(h.getBidderRequest)(n, t.bidderCode, e);
                        const i = r && r.bids && r.bids[0] && r.bids[0].sizes;
                        const o = Object(h.parseSizesInput)(i);
                        if (o.length !== 1) return !1;
                        const a = S(o[0].split('x'), 2);
                        const c = a[0];
                        const u = a[1];
                        return (t.width = parseInt(c, 10)), (t.height = parseInt(u, 10)), !0;
                      })(e, t, n)
                    ) || (Object(h.logError)(r('Banner bids require a width and height')), !1)
                  : (Object(h.logError)(
                      r('Video bid does not have required vastUrl or renderer property')
                    ),
                    !1)
                : (Object(h.logError)(r('Native bid missing some required properties.')), !1)
              : (Object(h.logError)(
                  r(
                    'Bidder '.concat(
                      t.bidderCode,
                      ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.'
                    )
                  )
                ),
                !1))
          : (Object(h.logWarn)('Some adapter tried to add an undefined bid for '.concat(e, '.')),
            !1)
        : (Object(h.logWarn)('No adUnitCode was supplied to addBidResponse.'), !1);
      let i;
    }
    Object(m.a)('checkAdUnitSetup').before(w);
  },
  10(e, t, n) {
    n(86), (e.exports = n(16).Array.includes);
  },
  11(e, t, n) {
    (t.a = i),
      (t.c = function (e) {
        return !(!e || !e.url);
      }),
      (t.b = function (e, t) {
        e.render(t);
      });
    const u = n(50);
    const s = n(0);
    const r = n(12);
    const d = n.n(r);
    function i(e) {
      const t = this;
      const n = e.url;
      const r = e.config;
      const i = e.id;
      const o = e.callback;
      const a = e.loaded;
      const c = e.adUnitCode;
      (this.url = n),
        (this.config = r),
        (this.handlers = {}),
        (this.id = i),
        (this.loaded = a),
        (this.cmd = []),
        (this.push = function (e) {
          typeof e === 'function'
            ? t.loaded
              ? e.call()
              : t.cmd.push(e)
            : s.logError('Commands given to Renderer.push must be wrapped in a function');
        }),
        (this.callback =
          o ||
          function () {
            (t.loaded = !0), t.process();
          }),
        !(function (t) {
          const e = pbjs.adUnits;
          const n = d()(e, function (e) {
            return e.code === t;
          });
          return !!(n && n.renderer && n.renderer.url && n.renderer.render);
        })(c)
          ? Object(u.b)(n, this.callback, !0)
          : s.logWarn(
              'External Js not loaded by Renderer since renderer url and callback is already defined on adUnit '.concat(
                c
              )
            );
    }
    (i.install = function (e) {
      return new i({
        url: e.url,
        config: e.config,
        id: e.id,
        callback: e.callback,
        loaded: e.loaded,
        adUnitCode: e.adUnitCode,
      });
    }),
      (i.prototype.getConfig = function () {
        return this.config;
      }),
      (i.prototype.setRender = function (e) {
        this.render = e;
      }),
      (i.prototype.setEventHandlers = function (e) {
        this.handlers = e;
      }),
      (i.prototype.handleVideoEvent = function (e) {
        const t = e.id;
        const n = e.eventName;
        typeof this.handlers[n] === 'function' && this.handlers[n](),
          s.logMessage('Prebid Renderer event for id '.concat(t, ' type ').concat(n));
      }),
      (i.prototype.process = function () {
        for (; this.cmd.length > 0; )
          try {
            this.cmd.shift().call();
          } catch (e) {
            s.logError('Error processing Renderer command: ', e);
          }
      });
  },
  12(e, t, n) {
    n(80), (e.exports = n(16).Array.find);
  },
  13(e, t, n) {
    n.d(t, 'b', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return a;
      }),
      (t.d = function (e, t) {
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
        e.getHooks({ hook: t }).length === 0 && e.before(t, n);
      }),
      (t.c = function (e, t) {
        o(
          'async',
          function (e) {
            e.forEach(function (e) {
              return t.apply(
                void 0,
                (function (e) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                      }
                    })(e) ||
                    (function (e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        Object.prototype.toString.call(e) === '[object Arguments]'
                      )
                        return Array.from(e);
                    })(e) ||
                    (function () {
                      throw new TypeError('Invalid attempt to spread non-iterable instance');
                    })()
                  );
                })(e)
              );
            });
          },
          e
        )([]);
      }),
      (t.e = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        a(e).before(function (e, t) {
          t.push(n), e(t);
        });
      });
    const r = n(91);
    const i = n.n(r);
    var o = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE });
    var a = o.get;
  },
  130(e, t, n) {
    const r = n(15);
    const i = n(44)(6);
    const o = 'findIndex';
    let a = !0;
    o in [] &&
      Array(1)[o](function () {
        a = !1;
      }),
      r(r.P + r.F * a, 'Array', {
        findIndex(e, t) {
          return i(this, e, arguments.length > 1 ? t : void 0);
        },
      }),
      n(37)(o);
  },
  133(e, t, n) {
    t.a = function () {
      addEventListener('message', p, !1);
    };
    const r = n(8);
    const o = n.n(r);
    const a = n(25);
    const i = n(4);
    const d = (n.n(i), n(0));
    const c = n(28);
    const u = n(12);
    const f = n.n(u);
    const l = n(11);
    const s = i.EVENTS.BID_WON;
    function p(e) {
      const t = e.message ? 'message' : 'data';
      let n = {};
      try {
        n = JSON.parse(e[t]);
      } catch (e) {
        return;
      }
      if (n && n.adId) {
        const r = f()(c.a.getBidsReceived(), function (e) {
          return e.adId === n.adId;
        });
        if (
          (r &&
            n.message === 'Prebid Request' &&
            ((function (e, t, n) {
              const r = e.adId;
              const i = e.ad;
              const o = e.adUrl;
              const a = e.width;
              const c = e.height;
              const u = e.renderer;
              const s = e.cpm;
              Object(l.c)(u)
                ? Object(l.b)(u, e)
                : r &&
                  ((function (e) {
                    const r = e.adUnitCode;
                    const i = e.width;
                    const o = e.height;
                    function a(e) {
                      const t = (function (e) {
                        return window.googletag
                          ? (function (e) {
                              return f()(
                                window.googletag
                                  .pubads()
                                  .getSlots()
                                  .filter(Object(d.isSlotMatchingAdUnitCode)(e)),
                                function (e) {
                                  return e;
                                }
                              ).getSlotElementId();
                            })(e)
                          : window.apntag
                          ? (function (e) {
                              const t = window.apntag.getTag(e);
                              return t && t.targetId;
                            })(e)
                          : e;
                      })(r);
                      const n = document.getElementById(t);
                      return n && n.querySelector(e);
                    }
                    ['div:last-child', 'div:last-child iframe'].forEach(function (e) {
                      const t = a(e);
                      if (t) {
                        const n = t.style;
                        (n.width = `${i}px`), (n.height = `${o}px`);
                      } else Object(d.logWarn)('Unable to locate matching page element for adUnitCode '.concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."));
                    });
                  })(e),
                  n.postMessage(
                    JSON.stringify({
                      message: 'Prebid Response',
                      ad: Object(d.replaceAuctionPrice)(i, s),
                      adUrl: Object(d.replaceAuctionPrice)(o, s),
                      adId: r,
                      width: a,
                      height: c,
                    }),
                    t
                  ));
            })(r, n.adServerDomain, e.source),
            c.a.addWinningBid(r),
            o.a.emit(s, r)),
          r && n.message === 'Prebid Native')
        ) {
          if (n.action === 'assetRequest') {
            const i = Object(a.c)(n, r);
            return void e.source.postMessage(JSON.stringify(i), e.origin);
          }
          if (Object(a.b)(n, r) === 'click') return;
          c.a.addWinningBid(r), o.a.emit(s, r);
        }
      }
    }
  },
  134(e, t, n) {
    t.a = function (e) {
      let t;
      try {
        (e = e || window.sessionStorage), (t = JSON.parse(e.getItem(u)));
      } catch (e) {}
      t && f(t, !0);
    };
    const r = n(3);
    const o = n(0);
    const i = n(39);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    let c;
    var u = 'pbjs:debugging';
    function s(e) {
      Object(o.logMessage)(`DEBUG: ${e}`);
    }
    function d() {
      i.c.getHooks({ hook: c }).remove();
    }
    function f(e, t) {
      const n = arguments.length > 1 && void 0 !== t && t;
      r.b.setConfig({ debug: !0 }),
        s('bidder overrides enabled'.concat(n ? ' from session' : '')),
        d(),
        (c = function (e, r, i) {
          if (Array.isArray(this.bidders) && this.bidders.indexOf(i.bidderCode) === -1)
            return void (function (e) {
              Object(o.logWarn)(`DEBUG: ${e}`);
            })("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
          Array.isArray(this.bids) &&
            this.bids.forEach(function (n) {
              (n.bidder && n.bidder !== i.bidderCode) ||
                (n.adUnitCode && n.adUnitCode !== r) ||
                ((i = { ...i }),
                Object.keys(n)
                  .filter(function (e) {
                    return ['bidder', 'adUnitCode'].indexOf(e) === -1;
                  })
                  .forEach(function (e) {
                    const t = n[e];
                    s(
                      "bidder overrides changed '"
                        .concat(r, '/')
                        .concat(i.bidderCode, "' bid.")
                        .concat(e, " from '")
                        .concat(i[e], "' to '")
                        .concat(t, "'")
                    ),
                      (i[e] = t);
                  }));
            });
          e(r, i);
        }.bind(e)),
        i.c.before(c, 5);
    }
    function l(e) {
      if (e.enabled) {
        try {
          window.sessionStorage.setItem(u, JSON.stringify(e));
        } catch (e) {}
        f(e);
      } else {
        d(), s('bidder overrides disabled');
        try {
          window.sessionStorage.removeItem(u);
        } catch (e) {}
      }
    }
    r.b.getConfig('debugging', function (e) {
      return l(e.debugging);
    });
  },
  135(e, t, n) {
    n(136), n(65), n(145), n(147), n(151), n(154), n(156), (e.exports = n(16).Set);
  },
  136(e, t) {},
  137(e, t, n) {
    const u = n(46);
    const s = n(35);
    e.exports = function (c) {
      return function (e, t) {
        let n;
        let r;
        const i = String(s(e));
        const o = u(t);
        const a = i.length;
        return o < 0 || a <= o
          ? c
            ? ''
            : void 0
          : (n = i.charCodeAt(o)) < 55296 ||
            n > 56319 ||
            o + 1 === a ||
            (r = i.charCodeAt(o + 1)) < 56320 ||
            r > 57343
          ? c
            ? i.charAt(o)
            : n
          : c
          ? i.slice(o, o + 2)
          : r - 56320 + ((n - 55296) << 10) + 65536;
      };
    };
  },
  138(e, t, n) {
    e.exports = n(21);
  },
  139(e, t, n) {
    const r = n(66);
    const i = n(43);
    const o = n(53);
    const a = {};
    n(21)(a, n(14)('iterator'), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(a, { next: i(1, n) })), o(e, `${t} Iterator`);
      });
  },
  14(e, t, n) {
    const r = n(57)('wks');
    const i = n(47);
    const o = n(19).Symbol;
    const a = typeof o === 'function';
    (e.exports = function (e) {
      return r[e] || (r[e] = (a && o[e]) || (a ? o : i)(`Symbol.${e}`));
    }).store = r;
  },
  140(e, t, n) {
    const a = n(20);
    const c = n(29);
    const u = n(141);
    e.exports = n(22)
      ? Object.defineProperties
      : function (e, t) {
          c(e);
          for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, (n = r[o++]), t[n]);
          return e;
        };
  },
  141(e, t, n) {
    const r = n(142);
    const i = n(67);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  142(e, t, n) {
    const a = n(30);
    const c = n(48);
    const u = n(59)(!1);
    const s = n(52)('IE_PROTO');
    e.exports = function (e, t) {
      let n;
      const r = c(e);
      let i = 0;
      const o = [];
      for (n in r) n != s && a(r, n) && o.push(n);
      for (; t.length > i; ) a(r, (n = t[i++])) && (~u(o, n) || o.push(n));
      return o;
    };
  },
  143(e, t, n) {
    const r = n(19).document;
    e.exports = r && r.documentElement;
  },
  144(e, t, n) {
    const r = n(30);
    const i = n(45);
    const o = n(52)('IE_PROTO');
    const a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = i(e)),
          r(e, o)
            ? e[o]
            : typeof e.constructor === 'function' && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  145(e, t, n) {
    n(146);
    for (
      let r = n(19),
        i = n(21),
        o = n(32),
        a = n(14)('toStringTag'),
        c = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
          ','
        ),
        u = 0;
      u < c.length;
      u++
    ) {
      const s = c[u];
      const d = r[s];
      const f = d && d.prototype;
      f && !f[a] && i(f, a, s), (o[s] = o.Array);
    }
  },
  146(e, t, n) {
    const r = n(37);
    const i = n(68);
    const o = n(32);
    const a = n(48);
    (e.exports = n(51)(
      Array,
      'Array',
      function (e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function () {
        const e = this._t;
        const t = this._k;
        const n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), i(1))
          : i(0, t == 'keys' ? n : t == 'values' ? e[n] : [n, e[n]]);
      },
      'values'
    )),
      (o.Arguments = o.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  147(e, t, n) {
    const r = n(148);
    const i = n(76);
    e.exports = n(150)(
      'Set',
      function (t) {
        return function (e) {
          return t(this, arguments.length > 0 ? e : void 0);
        };
      },
      {
        add(e) {
          return r.def(i(this, 'Set'), (e = e === 0 ? 0 : e), e);
        },
      },
      r
    );
  },
  148(e, t, n) {
    function a(e, t) {
      let n;
      const r = g(t);
      if (r !== 'F') return e._i[r];
      for (n = e._f; n; n = n.n) if (n.k == t) return n;
    }
    const c = n(20).f;
    const u = n(66);
    const s = n(69);
    const d = n(24);
    const f = n(70);
    const l = n(40);
    const r = n(51);
    const i = n(68);
    const o = n(149);
    const p = n(22);
    var g = n(75).fastKey;
    const b = n(76);
    const y = p ? '_s' : 'size';
    e.exports = {
      getConstructor(e, o, n, r) {
        var i = e(function (e, t) {
          f(e, i, o, '_i'),
            (e._t = o),
            (e._i = u(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[y] = 0),
            t != null && l(t, n, e[r], e);
        });
        return (
          s(i.prototype, {
            clear() {
              for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n)
                (n.r = !0), n.p && (n.p = n.p.n = void 0), delete t[n.i];
              (e._f = e._l = void 0), (e[y] = 0);
            },
            delete(e) {
              const t = b(this, o);
              const n = a(t, e);
              if (n) {
                const r = n.n;
                const i = n.p;
                delete t._i[n.i],
                  (n.r = !0),
                  i && (i.n = r),
                  r && (r.p = i),
                  t._f == n && (t._f = r),
                  t._l == n && (t._l = i),
                  t[y]--;
              }
              return !!n;
            },
            forEach(e, t) {
              b(this, o);
              for (var n, r = d(e, arguments.length > 1 ? t : void 0, 3); (n = n ? n.n : this._f); )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has(e) {
              return !!a(b(this, o), e);
            },
          }),
          p &&
            c(i.prototype, 'size', {
              get() {
                return b(this, o)[y];
              },
            }),
          i
        );
      },
      def(e, t, n) {
        let r;
        let i;
        let o = a(e, t);
        return (
          o
            ? (o.v = n)
            : ((e._l = o = { i: (i = g(t, !0)), k: t, v: n, p: (r = e._l), n: void 0, r: !1 }),
              e._f || (e._f = o),
              r && (r.n = o),
              e[y]++,
              i !== 'F' && (e._i[i] = o)),
          e
        );
      },
      getEntry: a,
      setStrong(e, n, t) {
        r(
          e,
          n,
          function (e, t) {
            (this._t = b(e, n)), (this._k = t), (this._l = void 0);
          },
          function () {
            for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
            return e._t && (e._l = n = n ? n.n : e._t._f)
              ? i(0, t == 'keys' ? n.k : t == 'values' ? n.v : [n.k, n.v])
              : ((e._t = void 0), i(1));
          },
          t ? 'entries' : 'values',
          !t,
          !0
        ),
          o(n);
      },
    };
  },
  149(e, t, n) {
    const r = n(19);
    const i = n(16);
    const o = n(20);
    const a = n(22);
    const c = n(14)('species');
    e.exports = function (e) {
      const t = typeof i[e] === 'function' ? i[e] : r[e];
      a &&
        t &&
        !t[c] &&
        o.f(t, c, {
          configurable: !0,
          get() {
            return this;
          },
        });
    };
  },
  15(e, t, n) {
    const b = n(19);
    const y = n(16);
    const v = n(24);
    const h = n(21);
    const m = n(30);
    const S = 'prototype';
    var E = function (e, t, n) {
      let r;
      let i;
      let o;
      const a = e & E.F;
      const c = e & E.G;
      const u = e & E.S;
      const s = e & E.P;
      const d = e & E.B;
      const f = e & E.W;
      const l = c ? y : y[t] || (y[t] = {});
      const p = l[S];
      const g = c ? b : u ? b[t] : (b[t] || {})[S];
      for (r in (c && (n = t), n))
        ((i = !a && g && void 0 !== g[r]) && m(l, r)) ||
          ((o = i ? g[r] : n[r]),
          (l[r] =
            c && typeof g[r] !== 'function'
              ? n[r]
              : d && i
              ? v(o, b)
              : f && g[r] == o
              ? (function (r) {
                  function e(e, t, n) {
                    if (this instanceof r) {
                      switch (arguments.length) {
                        case 0:
                          return new r();
                        case 1:
                          return new r(e);
                        case 2:
                          return new r(e, t);
                      }
                      return new r(e, t, n);
                    }
                    return r.apply(this, arguments);
                  }
                  return (e[S] = r[S]), e;
                })(o)
              : s && typeof o === 'function'
              ? v(Function.call, o)
              : o),
          s && (((l.virtual || (l.virtual = {}))[r] = o), e & E.R && p && !p[r] && h(p, r, o)));
    };
    (E.F = 1),
      (E.G = 2),
      (E.S = 4),
      (E.P = 8),
      (E.B = 16),
      (E.W = 32),
      (E.U = 64),
      (E.R = 128),
      (e.exports = E);
  },
  150(e, t, n) {
    const f = n(19);
    const l = n(15);
    const p = n(75);
    const g = n(33);
    const b = n(21);
    const y = n(69);
    const v = n(40);
    const h = n(70);
    const m = n(18);
    const S = n(53);
    const E = n(20).f;
    const A = n(44)(0);
    const T = n(22);
    e.exports = function (n, e, t, r, i, o) {
      const a = f[n];
      let c = a;
      const u = i ? 'set' : 'add';
      const s = c && c.prototype;
      const d = {};
      return (
        T &&
        typeof c === 'function' &&
        (o ||
          (s.forEach &&
            !g(function () {
              new c().entries().next();
            })))
          ? ((c = e(function (e, t) {
              h(e, c, n, '_c'), (e._c = new a()), t != null && v(t, i, e[u], e);
            })),
            A(
              'add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),
              function (r) {
                const i = r == 'add' || r == 'set';
                r in s &&
                  (!o || r != 'clear') &&
                  b(c.prototype, r, function (e, t) {
                    if ((h(this, c, r), !i && o && !m(e))) return r == 'get' && void 0;
                    const n = this._c[r](e === 0 ? 0 : e, t);
                    return i ? this : n;
                  });
              }
            ),
            o ||
              E(c.prototype, 'size', {
                get() {
                  return this._c.size;
                },
              }))
          : ((c = r.getConstructor(e, n, i, u)), y(c.prototype, t), (p.NEED = !0)),
        S(c, n),
        (d[n] = c),
        l(l.G + l.W + l.F, d),
        o || r.setStrong(c, n, i),
        c
      );
    };
  },
  151(e, t, n) {
    const r = n(15);
    r(r.P + r.R, 'Set', { toJSON: n(152)('Set') });
  },
  152(e, t, n) {
    const r = n(74);
    const i = n(153);
    e.exports = function (e) {
      return function () {
        if (r(this) != e) throw TypeError(`${e}#toJSON isn't generic`);
        return i(this);
      };
    };
  },
  153(e, t, n) {
    const r = n(40);
    e.exports = function (e, t) {
      const n = [];
      return r(e, !1, n.push, n, t), n;
    };
  },
  154(e, t, n) {
    n(155)('Set');
  },
  155(e, t, n) {
    const r = n(15);
    e.exports = function (e) {
      r(r.S, e, {
        of() {
          for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
          return new this(t);
        },
      });
    };
  },
  156(e, t, n) {
    n(157)('Set');
  },
  157(e, t, n) {
    const r = n(15);
    const u = n(54);
    const s = n(24);
    const d = n(40);
    e.exports = function (e) {
      r(r.S, e, {
        from(e, t, n) {
          let r;
          let i;
          let o;
          let a;
          const c = t;
          return (
            u(this),
            (r = void 0 !== c) && u(c),
            e == null
              ? new this()
              : ((i = []),
                r
                  ? ((o = 0),
                    (a = s(c, n, 2)),
                    d(e, !1, function (e) {
                      i.push(a(e, o++));
                    }))
                  : d(e, !1, i.push, i),
                new this(i))
          );
        },
      });
    };
  },
  158(e, t, n) {
    n(65), n(159), (e.exports = n(16).Array.from);
  },
  159(e, t, n) {
    const g = n(24);
    const r = n(15);
    const b = n(45);
    const y = n(71);
    const v = n(72);
    const h = n(36);
    const m = n(160);
    const S = n(73);
    r(
      r.S +
        r.F *
          !n(161)(function (e) {
            Array.from(e);
          }),
      'Array',
      {
        from(e, t, n) {
          let r;
          let i;
          let o;
          let a;
          const c = b(e);
          const u = typeof this === 'function' ? this : Array;
          const s = arguments.length;
          let d = s > 1 ? t : void 0;
          const f = void 0 !== d;
          let l = 0;
          const p = S(c);
          if ((f && (d = g(d, s > 2 ? n : void 0, 2)), p == null || (u == Array && v(p))))
            for (i = new u((r = h(c.length))); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
          else
            for (a = p.call(c), i = new u(); !(o = a.next()).done; l++)
              m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
          return (i.length = l), i;
        },
      }
    );
  },
  16(e, t) {
    const n = (e.exports = { version: '2.6.9' });
    typeof __e === 'number' && (__e = n);
  },
  160(e, t, n) {
    const r = n(20);
    const i = n(43);
    e.exports = function (e, t, n) {
      t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
    };
  },
  161(e, t, n) {
    const o = n(14)('iterator');
    let a = !1;
    try {
      const r = [7][o]();
      (r.return = function () {
        a = !0;
      }),
        Array.from(r, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !a) return !1;
      let n = !1;
      try {
        const r = [7];
        const i = r[o]();
        (i.next = function () {
          return { done: (n = !0) };
        }),
          (r[o] = function () {
            return i;
          }),
          e(r);
      } catch (e) {}
      return n;
    };
  },
  18(e, t) {
    e.exports = function (e) {
      return typeof e === 'object' ? e !== null : typeof e === 'function';
    };
  },
  19(e, t) {
    const n = (e.exports =
      typeof window !== 'undefined' && window.Math == Math
        ? window
        : typeof self !== 'undefined' && self.Math == Math
        ? self
        : Function('return this')());
    typeof __g === 'number' && (__g = n);
  },
  2(e, t, n) {
    n.d(t, 'c', function () {
      return r;
    }),
      n.d(t, 'd', function () {
        return i;
      }),
      n.d(t, 'b', function () {
        return o;
      }),
      n.d(t, 'a', function () {
        return a;
      });
    var r = 'native';
    var i = 'video';
    var o = 'banner';
    var a = 'adpod';
  },
  20(e, t, n) {
    const r = n(29);
    const i = n(81);
    const o = n(82);
    const a = Object.defineProperty;
    t.f = n(22)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
          return 'value' in n && (e[t] = n.value), e;
        };
  },
  21(e, t, n) {
    const r = n(20);
    const i = n(43);
    e.exports = n(22)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  22(e, t, n) {
    e.exports = !n(33)(function () {
      return (
        Object.defineProperty({}, 'a', {
          get() {
            return 7;
          },
        }).a != 7
      );
    });
  },
  23(e, t, n) {
    t.a = function (e, t) {
      return new r(e, t);
    };
    const i = n(0);
    function r(e, t) {
      const n = (t && t.src) || 'client';
      const r = e || 0;
      (this.bidderCode = (t && t.bidder) || ''),
        (this.width = 0),
        (this.height = 0),
        (this.statusMessage = (function () {
          switch (r) {
            case 0:
              return 'Pending';
            case 1:
              return 'Bid available';
            case 2:
              return 'Bid returned empty or error response';
            case 3:
              return 'Bid timed out';
          }
        })()),
        (this.adId = i.getUniqueIdentifierStr()),
        (this.requestId = t && t.bidId),
        (this.mediaType = 'banner'),
        (this.source = n),
        (this.getStatusCode = function () {
          return r;
        }),
        (this.getSize = function () {
          return `${this.width}x${this.height}`;
        });
    }
  },
  24(e, t, n) {
    const o = n(54);
    e.exports = function (r, i, e) {
      if ((o(r), void 0 === i)) return r;
      switch (e) {
        case 1:
          return function (e) {
            return r.call(i, e);
          };
        case 2:
          return function (e, t) {
            return r.call(i, e, t);
          };
        case 3:
          return function (e, t, n) {
            return r.call(i, e, t, n);
          };
      }
      return function () {
        return r.apply(i, arguments);
      };
    };
  },
  25(e, t, n) {
    n.d(t, 'e', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return s;
      }),
      (t.g = function (e) {
        if (
          e &&
          e.type &&
          (function (e) {
            return (
              !(!e || !c()(Object.keys(d), e)) ||
              (Object(a.logError)(''.concat(e, ' nativeParam is not supported')), !1)
            );
          })(e.type)
        )
          return d[e.type];
        return e;
      }),
      (t.f = function (t, e) {
        const n = Object(a.getBidRequest)(t.requestId, e);
        if (!n) return !1;
        if (!Object(a.deepAccess)(t, 'native.clickUrl')) return !1;
        if (
          Object(a.deepAccess)(t, 'native.image') &&
          (!Object(a.deepAccess)(t, 'native.image.height') ||
            !Object(a.deepAccess)(t, 'native.image.width'))
        )
          return !1;
        if (
          Object(a.deepAccess)(t, 'native.icon') &&
          (!Object(a.deepAccess)(t, 'native.icon.height') ||
            !Object(a.deepAccess)(t, 'native.icon.width'))
        )
          return !1;
        const r = n.nativeParams;
        if (!r) return !0;
        const i = Object.keys(r).filter(function (e) {
          return r[e].required;
        });
        const o = Object.keys(t.native).filter(function (e) {
          return t.native[e];
        });
        return i.every(function (e) {
          return c()(o, e);
        });
      }),
      (t.b = function (e, t) {
        let n;
        e.action === 'click'
          ? (n = t.native && t.native.clickTrackers)
          : ((n = t.native && t.native.impressionTrackers),
            t.native &&
              t.native.javascriptTrackers &&
              Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
        return (n || []).forEach(a.triggerPixel), e.action;
      }),
      (t.d = function (r, i) {
        const o = {};
        return (
          Object.keys(r.native).forEach(function (e) {
            const t = u.NATIVE_KEYS[e];
            let n = f(r.native[e]);
            Object(a.deepAccess)(i, 'mediaTypes.native.'.concat(e, '.sendId')) &&
              (n = ''.concat(t, ':').concat(r.adId));
            t && n && (o[t] = n);
          }),
          o
        );
      }),
      (t.c = function (e, r) {
        const i = { message: 'assetResponse', adId: e.adId, assets: [] };
        return (
          e.assets.forEach(function (e) {
            const t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e);
            const n = f(r.native[t]);
            i.assets.push({ key: t, value: n });
          }),
          i
        );
      });
    var a = n(0);
    const r = n(10);
    var c = n.n(r);
    function i(e) {
      return (i =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    var u = n(4);
    var o = [];
    var s = Object.keys(u.NATIVE_KEYS).map(function (e) {
      return u.NATIVE_KEYS[e];
    });
    var d = {
      image: {
        image: { required: !0 },
        title: { required: !0 },
        sponsoredBy: { required: !0 },
        clickUrl: { required: !0 },
        body: { required: !1 },
        icon: { required: !1 },
      },
    };
    function f(e) {
      return i(e) === 'object' && e.url ? e.url : e;
    }
  },
  250(e, t, n) {
    n(251), (e.exports = n(16).String.includes);
  },
  251(e, t, n) {
    const r = n(15);
    const i = n(252);
    const o = 'includes';
    r(r.P + r.F * n(254)(o), 'String', {
      includes(e, t) {
        return !!~i(this, e, o).indexOf(e, arguments.length > 1 ? t : void 0);
      },
    });
  },
  252(e, t, n) {
    const r = n(253);
    const i = n(35);
    e.exports = function (e, t, n) {
      if (r(t)) throw TypeError(`String#${n} doesn't accept regex!`);
      return String(i(e));
    };
  },
  253(e, t, n) {
    const r = n(18);
    const i = n(34);
    const o = n(14)('match');
    e.exports = function (e) {
      let t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : i(e) == 'RegExp');
    };
  },
  254(e, t, n) {
    const r = n(14)('match');
    e.exports = function (t) {
      const n = /./;
      try {
        '/./'[t](n);
      } catch (e) {
        try {
          return (n[r] = !1), !'/./'[t](n);
        } catch (e) {}
      }
      return !0;
    };
  },
  26(e, t, n) {
    n.d(t, 'a', function () {
      return v;
    });
    const a = n(0);
    const r = n(3);
    const i = n(10);
    const o = n.n(i);
    function c(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              Object.prototype.toString.call(e) === '[object Arguments]'
            )
          )
            return;
          const n = [];
          let r = !0;
          let i = !1;
          let o = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || c.return == null || c.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        })()
      );
    }
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    r.b.setDefaults({
      userSync: { syncEnabled: !0, pixelEnabled: !0, syncsPerBidder: 5, syncDelay: 3e3 },
    });
    let s;
    let d;
    let f;
    let l;
    let p;
    let g;
    let b;
    const y = !a.isSafariBrowser() && a.cookiesAreEnabled();
    var v =
      ((s = { config: r.b.getConfig('userSync'), browserSupportsCookies: y }),
      (d = {}),
      (f = { image: [], iframe: [] }),
      (l = new Set()),
      (g = { image: !(p = {}), iframe: !1 }),
      (b = s.config),
      r.b.getConfig('userSync', function (e) {
        b = u(b, e.userSync);
      }),
      (d.registerSync = function (e, t, n) {
        return l.has(t)
          ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call'))
          : b.syncEnabled && a.isArray(f[e])
          ? t
            ? b.syncsPerBidder !== 0 && Number(p[t]) >= b.syncsPerBidder
              ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"'))
              : d.canBidderRegisterSync(e, t)
              ? (f[e].push([t, n]),
                void (p = (function (e, t) {
                  return e[t] ? (e[t] += 1) : (e[t] = 1), e;
                })(p, t)))
              : a.logWarn(
                  'Bidder "'
                    .concat(t, '" not permitted to register their "')
                    .concat(e, '" userSync pixels.')
                )
            : a.logWarn('Bidder is required for registering sync')
          : a.logWarn('User sync type "'.concat(e, '" not supported'));
      }),
      (d.syncUsers = function () {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        if (e) return setTimeout(h, Number(e));
        h();
      }),
      (d.triggerUserSyncs = function () {
        b.enableOverride && d.syncUsers();
      }),
      (d.canBidderRegisterSync = function (e, t) {
        if (b.filterSettings) {
          if (S(e, t)) return !1;
        } else {
          if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0)
            return !1;
          if (e === 'iframe' && !b.iframeEnabled && !g.iframe) return !1;
          if (e === 'image' && !b.pixelEnabled && !g.image) return !1;
        }
        return !0;
      }),
      d);
    function h() {
      if (b.syncEnabled && s.browserSupportsCookies) {
        try {
          !(function () {
            if (!b.pixelEnabled && !g.image) return;
            m(f.image, function (e) {
              const t = c(e, 2);
              const n = t[0];
              const r = t[1];
              a.logMessage('Invoking image pixel user sync for bidder: '.concat(n)),
                a.triggerPixel(r);
            });
          })(),
            (function () {
              if (!b.iframeEnabled && !g.iframe) return;
              m(f.iframe, function (e) {
                const t = c(e, 2);
                const n = t[0];
                const r = t[1];
                a.logMessage('Invoking iframe user sync for bidder: '.concat(n)),
                  a.insertUserSyncIframe(r);
              });
            })();
        } catch (e) {
          return a.logError('Error firing user syncs', e);
        }
        f = { image: [], iframe: [] };
      }
    }
    function m(e, t) {
      a.shuffle(e).forEach(function (e) {
        t(e), l.add(e[0]);
      });
    }
    function S(e, t) {
      const n = b.filterSettings;
      if (
        (function (e, t) {
          if (e.all && e[t])
            return (
              a.logWarn(
                'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                  t,
                  '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                )
              ),
              !1
            );
          const n = e.all ? e.all : e[t];
          const r = e.all ? 'all' : t;
          if (!n) return !1;
          const i = n.filter;
          const o = n.bidders;
          if (i && i !== 'include' && i !== 'exclude')
            return (
              a.logWarn(
                'UserSync "filterSettings.'
                  .concat(r, '.filter" setting \'')
                  .concat(i, "' is not a valid option; use either 'include' or 'exclude'.")
              ),
              !1
            );
          return (
            !!(
              o === '*' ||
              (Array.isArray(o) &&
                o.length > 0 &&
                o.every(function (e) {
                  return a.isStr(e) && e !== '*';
                }))
            ) ||
            (a.logWarn(
              'Detected an invalid setup in userSync "filterSettings.'.concat(
                r,
                ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
              )
            ),
            !1)
          );
        })(n, e)
      ) {
        g[e] = !0;
        const r = n.all ? n.all : n[e];
        const i = r.bidders === '*' ? [t] : r.bidders;
        return {
          include(e, t) {
            return !o()(e, t);
          },
          exclude(e, t) {
            return o()(e, t);
          },
        }[r.filter || 'include'](i, t);
      }
      return !1;
    }
  },
  27(e, t, n) {
    (t.a = function () {
      return window.pbjs;
    }),
      (window.pbjs = window.pbjs || {}),
      (window.pbjs.cmd = window.pbjs.cmd || []),
      (window.pbjs.que = window.pbjs.que || []);
  },
  28(e, t, n) {
    n.d(t, 'a', function () {
      return d;
    });
    const r = n(0);
    const u = n(39);
    const i = n(12);
    const o = n.n(i);
    const a = n(4);
    let s;
    let c;
    var d =
      ((s = []),
      ((c = {}).addWinningBid = function (t) {
        const e = o()(s, function (e) {
          return e.getAuctionId() === t.auctionId;
        });
        e ? e.addWinningBid(t) : utils.logWarn('Auction not found when adding winning bid');
      }),
      (c.getAllWinningBids = function () {
        return s
          .map(function (e) {
            return e.getWinningBids();
          })
          .reduce(r.flatten, []);
      }),
      (c.getBidsRequested = function () {
        return s
          .map(function (e) {
            return e.getBidRequests();
          })
          .reduce(r.flatten, []);
      }),
      (c.getNoBids = function () {
        return s
          .map(function (e) {
            return e.getNoBids();
          })
          .reduce(r.flatten, []);
      }),
      (c.getBidsReceived = function () {
        return s
          .map(function (e) {
            if (e.getAuctionStatus() === u.a) return e.getBidsReceived();
          })
          .reduce(r.flatten, [])
          .filter(function (e) {
            return e;
          });
      }),
      (c.getAdUnits = function () {
        return s
          .map(function (e) {
            return e.getAdUnits();
          })
          .reduce(r.flatten, []);
      }),
      (c.getAdUnitCodes = function () {
        return s
          .map(function (e) {
            return e.getAdUnitCodes();
          })
          .reduce(r.flatten, [])
          .filter(r.uniques);
      }),
      (c.createAuction = function (e) {
        const t = e.adUnits;
        const n = e.adUnitCodes;
        const r = e.callback;
        const i = e.cbTimeout;
        const o = e.labels;
        const a = e.auctionId;
        const c = Object(u.j)({
          adUnits: t,
          adUnitCodes: n,
          callback: r,
          cbTimeout: i,
          labels: o,
          auctionId: a,
        });
        return (
          (function (e) {
            s.push(e);
          })(c),
          c
        );
      }),
      (c.findBidByAdId = function (t) {
        return o()(
          s
            .map(function (e) {
              return e.getBidsReceived();
            })
            .reduce(r.flatten, []),
          function (e) {
            return e.adId === t;
          }
        );
      }),
      (c.getStandardBidderAdServerTargeting = function () {
        return Object(u.i)()[a.JSON_MAPPING.ADSERVER_TARGETING];
      }),
      (c.setStatusForBids = function (e, t) {
        const n = c.findBidByAdId(e);
        if ((n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET)) {
          const r = o()(s, function (e) {
            return e.getAuctionId() === n.auctionId;
          });
          r && r.setBidTargeting(n);
        }
      }),
      (c.getLastAuctionId = function () {
        return s.length && s[s.length - 1].getAuctionId();
      }),
      c);
  },
  29(e, t, n) {
    const r = n(18);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(`${e} is not an object!`);
      return e;
    };
  },
  3(e, t, n) {
    n.d(t, 'a', function () {
      return b;
    }),
      n.d(t, 'b', function () {
        return A;
      });
    const r = n(42);
    const i = n(12);
    const a = n.n(i);
    const o = n(10);
    const c = n.n(o);
    const u = n(9);
    function s() {
      return (s =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function d(e) {
      return (d =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    const f = n(0);
    const l = n(4);
    const p = (Object(u.d)(window.location.search)[l.DEBUG_MODE] || '').toUpperCase() === 'TRUE';
    const g = window.location.origin;
    var b = 'random';
    const y = {};
    (y[b] = !0), (y.fixed = !0);
    const v = b;
    const h = {
      LOW: 'low',
      MEDIUM: 'medium',
      HIGH: 'high',
      AUTO: 'auto',
      DENSE: 'dense',
      CUSTOM: 'custom',
    };
    let m;
    let S;
    let E;
    var A =
      ((E = []),
      T(),
      {
        getConfig() {
          if (
            arguments.length <= 1 &&
            typeof (arguments.length <= 0 ? void 0 : arguments[0]) !== 'function'
          ) {
            const e = arguments.length <= 0 ? void 0 : arguments[0];
            return e ? f.deepAccess(S, e) : S;
          }
          return function (e, t) {
            let n = t;
            return (
              typeof e !== 'string' && ((n = e), (e = '*')),
              typeof n === 'function'
                ? (E.push({ topic: e, callback: n }),
                  function () {
                    E.splice(E.indexOf(t), 1);
                  })
                : void f.logError('listener must be a function')
            );
          }.apply(void 0, arguments);
        },
        setConfig(n) {
          if (d(n) === 'object') {
            const e = Object.keys(n);
            const r = {};
            e.forEach(function (e) {
              let t = n[e];
              d(m[e]) === 'object' && d(t) === 'object' && (t = { ...m[e], ...t }),
                (r[e] = S[e] = t);
            }),
              O(r);
          } else f.logError('setConfig options must be an object');
        },
        setDefaults(e) {
          d(m) === 'object' ? (s(m, e), s(S, e)) : f.logError('defaults must be an object');
        },
        resetConfig: T,
      });
    function T() {
      const n = {
        _debug: p,
        get debug() {
          return this._debug;
        },
        set debug(e) {
          this._debug = e;
        },
        _bidderTimeout: 3e3,
        get bidderTimeout() {
          return this._bidderTimeout;
        },
        set bidderTimeout(e) {
          this._bidderTimeout = e;
        },
        _publisherDomain: g,
        get publisherDomain() {
          return this._publisherDomain;
        },
        set publisherDomain(e) {
          this._publisherDomain = e;
        },
        _priceGranularity: h.MEDIUM,
        set priceGranularity(e) {
          o(e) &&
            (typeof e === 'string'
              ? (this._priceGranularity = i(e) ? e : h.MEDIUM)
              : d(e) === 'object' &&
                ((this._customPriceBucket = e),
                (this._priceGranularity = h.CUSTOM),
                f.logMessage('Using custom price granularity')));
        },
        get priceGranularity() {
          return this._priceGranularity;
        },
        _customPriceBucket: {},
        get customPriceBucket() {
          return this._customPriceBucket;
        },
        _mediaTypePriceGranularity: {},
        get mediaTypePriceGranularity() {
          return this._mediaTypePriceGranularity;
        },
        set mediaTypePriceGranularity(n) {
          const r = this;
          this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
            return (
              o(n[t])
                ? typeof n === 'string'
                  ? (e[t] = i(n[t]) ? n[t] : r._priceGranularity)
                  : d(n) === 'object' &&
                    ((e[t] = n[t]), f.logMessage('Using custom price granularity for '.concat(t)))
                : f.logWarn('Invalid price granularity for media type: '.concat(t)),
              e
            );
          }, {});
        },
        _sendAllBids: !0,
        get enableSendAllBids() {
          return this._sendAllBids;
        },
        set enableSendAllBids(e) {
          this._sendAllBids = e;
        },
        _useBidCache: !(m = {}),
        get useBidCache() {
          return this._useBidCache;
        },
        set useBidCache(e) {
          this._useBidCache = e;
        },
        _bidderSequence: v,
        get bidderSequence() {
          return this._bidderSequence;
        },
        set bidderSequence(e) {
          y[e]
            ? (this._bidderSequence = e)
            : f.logWarn('Invalid order: '.concat(e, '. Bidder Sequence was not set.'));
        },
        _timeoutBuffer: 400,
        get timeoutBuffer() {
          return this._timeoutBuffer;
        },
        set timeoutBuffer(e) {
          this._timeoutBuffer = e;
        },
        _disableAjaxTimeout: !1,
        get disableAjaxTimeout() {
          return this._disableAjaxTimeout;
        },
        set disableAjaxTimeout(e) {
          this._disableAjaxTimeout = e;
        },
      };
      function i(t) {
        return a()(Object.keys(h), function (e) {
          return t === h[e];
        });
      }
      function o(e) {
        if (!e) return f.logError('Prebid Error: no value passed to `setPriceGranularity()`'), !1;
        if (typeof e === 'string')
          i(e) ||
            f.logWarn(
              'Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.'
            );
        else if (d(e) === 'object' && !Object(r.b)(e))
          return f.logError('Invalid custom price value passed to `setPriceGranularity()`'), !1;
        return !0;
      }
      S &&
        O(
          Object.keys(S).reduce(function (e, t) {
            return S[t] !== n[t] && (e[t] = n[t] || {}), e;
          }, {})
        ),
        (S = n);
    }
    function O(t) {
      const n = Object.keys(t);
      E.filter(function (e) {
        return c()(n, e.topic);
      }).forEach(function (e) {
        e.callback(
          (function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          })({}, e.topic, t[e.topic])
        );
      }),
        E.filter(function (e) {
          return e.topic === '*';
        }).forEach(function (e) {
          return e.callback(t);
        });
    }
  },
  30(e, t) {
    const n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  31(e, t, n) {
    n.d(t, 'b', function () {
      return c;
    }),
      n.d(t, 'a', function () {
        return u;
      }),
      (t.d = function (e, t) {
        const n = Object(o.getBidRequest)(e.requestId, t);
        const r = n && Object(o.deepAccess)(n, 'mediaTypes.video');
        const i = r && Object(o.deepAccess)(r, 'context');
        return s(e, n, r, i);
      }),
      n.d(t, 'c', function () {
        return s;
      });
    n(7);
    var o = n(0);
    const i = n(3);
    const r = n(10);
    const a = (n.n(r), n(13));
    var c = 'outstream';
    var u = 'instream';
    var s = Object(a.b)(
      'sync',
      function (e, t, n, r) {
        return !t || (n && r !== c)
          ? i.b.getConfig('cache.url') || !e.vastXml || e.vastUrl
            ? !(!e.vastUrl && !e.vastXml)
            : (Object(o.logError)(
                '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
              ),
              !1)
          : r !== c || !(!e.renderer && !t.renderer);
      },
      'checkVideoBidSetup'
    );
  },
  32(e, t) {
    e.exports = {};
  },
  33(e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  34(e, t) {
    const n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  35(e, t) {
    e.exports = function (e) {
      if (e == null) throw TypeError(`Can't call method on  ${e}`);
      return e;
    };
  },
  36(e, t, n) {
    const r = n(46);
    const i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  366(e, t, n) {
    n(367), (e.exports = n(16).Number.isInteger);
  },
  367(e, t, n) {
    const r = n(15);
    r(r.S, 'Number', { isInteger: n(368) });
  },
  368(e, t, n) {
    const r = n(18);
    const i = Math.floor;
    e.exports = function (e) {
      return !r(e) && isFinite(e) && i(e) === e;
    };
  },
  37(e, t) {
    e.exports = function () {};
  },
  38(e, t, n) {
    n(130), (e.exports = n(16).Array.findIndex);
  },
  39(e, t, n) {
    n.d(t, 'b', function () {
      return G;
    }),
      n.d(t, 'a', function () {
        return W;
      }),
      (t.j = function (e) {
        let a;
        let c;
        let u;
        let s;
        const d = e.adUnits;
        const t = e.adUnitCodes;
        const n = e.callback;
        const r = e.cbTimeout;
        const i = e.labels;
        const o = e.auctionId;
        const f = d;
        const l = i;
        const p = t;
        let g = [];
        let b = [];
        let y = [];
        const v = o || D.generateUUID();
        let h = n;
        const m = r;
        let S = [];
        const E = new Set();
        function A() {
          return {
            auctionId: v,
            timestamp: a,
            auctionEnd: c,
            auctionStatus: u,
            adUnits: f,
            adUnitCodes: p,
            labels: l,
            bidderRequests: g,
            noBids: y,
            bidsReceived: b,
            winningBids: S,
            timeout: m,
          };
        }
        function T(e, t) {
          if ((t && clearTimeout(s), void 0 === c)) {
            let n = [];
            e &&
              (D.logMessage('Auction '.concat(v, ' timedOut')),
              (n = (function (e, t) {
                return e
                  .map(function (e) {
                    return (e.bids || []).filter(function (e) {
                      return !t.has(e.bidder);
                    });
                  })
                  .reduce(w.flatten, [])
                  .map(function (e) {
                    return {
                      bidId: e.bidId,
                      bidder: e.bidder,
                      adUnitCode: e.adUnitCode,
                      auctionId: e.auctionId,
                    };
                  });
              })(g, E)).length && P.emit(M.EVENTS.BID_TIMEOUT, n)),
              (u = W),
              (c = Date.now()),
              P.emit(M.EVENTS.AUCTION_END, A());
            try {
              if (h != null) {
                const r = p;
                const i = b.filter(D.bind.call(w.adUnitsFilter, this, r)).reduce(Y, {});
                h.apply(pbjs, [i, e]), (h = null);
              }
            } catch (e) {
              D.logError('Error executing bidsBackHandler', null, e);
            } finally {
              n.length && k.callTimedOutBidders(d, n, m);
              const o = _.b.getConfig('userSync') || {};
              o.enableOverride || x(o.syncDelay);
            }
          }
        }
        function O() {
          D.logInfo('Bids Received for Auction with id: '.concat(v), b), (u = W), T(!1, !0);
        }
        function I(e) {
          E.add(e);
        }
        return {
          addBidReceived(e) {
            b = b.concat(e);
          },
          addNoBid(e) {
            y = y.concat(e);
          },
          executeCallback: T,
          callBids() {
            const e = this;
            (u = q), (a = Date.now());
            const t = k.makeBidRequests(f, a, v, m, l);
            D.logInfo('Bids Requested for Auction with id: '.concat(v), t),
              t.forEach(function (e) {
                !(function (e) {
                  g = g.concat(e);
                })(e);
              });
            const n = {};
            if (t.length < 1) D.logWarn('No valid bid requests returned for auction'), O();
            else {
              const r = {
                bidRequests: t,
                run() {
                  !(function () {
                    const e = T.bind(null, !0);
                    const t = setTimeout(e, m);
                    s = t;
                  })(),
                    (u = G),
                    P.emit(M.EVENTS.AUCTION_INIT, A());
                  const r = (function (e, r) {
                    let i = 0;
                    let t = !1;
                    const n = new Set();
                    const o = {};
                    function a() {
                      i--, t && i === 0 && e();
                    }
                    return {
                      addBidResponse(e, t) {
                        (o[t.requestId] = !0), i++;
                        const n = (function (e) {
                          const t = e.adUnitCode;
                          const n = e.bid;
                          const r = e.bidderRequest;
                          const i = e.auctionId;
                          const o = r.start;
                          const a = {
                            ...n,
                            auctionId: i,
                            responseTimestamp: Object(w.timestamp)(),
                            requestTimestamp: o,
                            cpm: parseFloat(n.cpm) || 0,
                            bidder: n.bidderCode,
                            adUnitCode: t,
                          };
                          (a.timeToRespond = a.responseTimestamp - a.requestTimestamp),
                            P.emit(M.EVENTS.BID_ADJUSTMENT, a);
                          const c =
                            r.bids &&
                            U()(r.bids, function (e) {
                              return e.adUnitCode == t;
                            });
                          const u = c && c.renderer;
                          u &&
                            u.url &&
                            ((a.renderer = C.a.install({ url: u.url })),
                            a.renderer.setRender(u.render));
                          const s = _.b.getConfig('mediaTypePriceGranularity.'.concat(n.mediaType));
                          const d = Object(j.a)(
                            a.cpm,
                            R(s) === 'object' ? s : _.b.getConfig('customPriceBucket'),
                            _.b.getConfig('currency.granularityMultiplier')
                          );
                          return (
                            (a.pbLg = d.low),
                            (a.pbMg = d.med),
                            (a.pbHg = d.high),
                            (a.pbAg = d.auto),
                            (a.pbDg = d.dense),
                            (a.pbCg = d.custom),
                            a
                          );
                        })({
                          adUnitCode: e,
                          bid: t,
                          bidderRequest: this,
                          auctionId: r.getAuctionId(),
                        });
                        n.mediaType === 'video'
                          ? (function (e, t, n, r) {
                              let i = !0;
                              const o = Object(w.getBidRequest)(t.requestId, [n]);
                              const a = o && Object(w.deepAccess)(o, 'mediaTypes.video');
                              const c = a && Object(w.deepAccess)(a, 'context');
                              _.b.getConfig('cache.url') &&
                                c !== B.b &&
                                (t.videoCacheKey
                                  ? t.vastUrl ||
                                    (D.logError(
                                      'videoCacheKey specified but not required vastUrl for video bid'
                                    ),
                                    (i = !1))
                                  : ((i = !1), J(e, t, r, o)));
                              i && (K(e, t), r());
                            })(r, n, this, a)
                          : (K(r, n), a());
                      },
                      adapterDone() {
                        n.add(this),
                          (t = r.getBidRequests().every(function (e) {
                            return n.has(e);
                          })),
                          this.bids.forEach(function (e) {
                            o[e.bidId] || (r.addNoBid(e), P.emit(M.EVENTS.NO_BID, e));
                          }),
                          t && i === 0 && e();
                      },
                    };
                  })(O, e);
                  k.callBids(
                    f,
                    t,
                    function () {
                      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                      H.apply({ dispatch: r.addBidResponse, bidderRequest: this }, t);
                    },
                    r.adapterDone,
                    {
                      request(e, t) {
                        o(z, t),
                          o(n, e),
                          F[e] || (F[e] = { SRA: !0, origin: t }),
                          n[e] > 1 && (F[e].SRA = !1);
                      },
                      done(e) {
                        z[e]--, V[0] && i(V[0]) && V.shift();
                      },
                    },
                    m,
                    I
                  );
                },
              };
              i(r) || (D.logWarn('queueing auction due to limited endpoint capacity'), V.push(r));
            }
            function i(e) {
              let r = !0;
              const i = _.b.getConfig('maxRequestsPerOrigin') || L;
              return (
                e.bidRequests.some(function (e) {
                  let t = 1;
                  const n = void 0 !== e.src && e.src === M.S2S.SRC ? 's2s' : e.bidderCode;
                  return (
                    F[n] &&
                      (!1 === F[n].SRA && (t = Math.min(e.bids.length, i)),
                      z[F[n].origin] + t > i && (r = !1)),
                    !r
                  );
                }),
                r && e.run(),
                r
              );
            }
            function o(e, t) {
              void 0 === e[t] ? (e[t] = 1) : e[t]++;
            }
          },
          addWinningBid(e) {
            (S = S.concat(e)), k.callBidWonBidder(e.bidder, e, d);
          },
          setBidTargeting(e) {
            k.callSetTargetingBidder(e.bidder, e);
          },
          getWinningBids() {
            return S;
          },
          getTimeout() {
            return m;
          },
          getAuctionId() {
            return v;
          },
          getAuctionStatus() {
            return u;
          },
          getAdUnits() {
            return f;
          },
          getAdUnitCodes() {
            return p;
          },
          getBidRequests() {
            return g;
          },
          getBidsReceived() {
            return b;
          },
          getNoBids() {
            return y;
          },
        };
      }),
      n.d(t, 'c', function () {
        return H;
      }),
      (t.f = s),
      (t.d = K),
      n.d(t, 'e', function () {
        return J;
      }),
      n.d(t, 'h', function () {
        return d;
      }),
      n.d(t, 'g', function () {
        return f;
      }),
      (t.i = l);
    var w = n(0);
    const u = n(9);
    var j = n(42);
    const a = n(25);
    const o = n(62);
    var C = n(11);
    var _ = n(3);
    const r = n(26);
    const i = n(13);
    const c = n(12);
    var U = n.n(c);
    var B = n(31);
    function R(e) {
      return (R =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function N() {
      return (N =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var x = r.a.syncUsers;
    var D = n(0);
    var k = n(7).default;
    var P = n(8);
    var M = n(4);
    var q = 'started';
    var G = 'inProgress';
    var W = 'completed';
    P.on(M.EVENTS.BID_ADJUSTMENT, function (e) {
      !(function (e) {
        let t;
        const n = e.bidderCode;
        let r = e.cpm;
        if (
          pbjs.bidderSettings &&
          (n &&
          pbjs.bidderSettings[n] &&
          typeof pbjs.bidderSettings[n].bidCpmAdjustment === 'function'
            ? (t = pbjs.bidderSettings[n].bidCpmAdjustment)
            : pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] &&
              typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment ===
                'function' &&
              (t = pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
          t)
        )
          try {
            r = t(e.cpm, { ...e });
          } catch (e) {
            D.logError('Error during bid adjustment', 'bidmanager.js', e);
          }
        r >= 0 && (e.cpm = r);
      })(e);
    });
    var L = 4;
    var z = {};
    var F = {};
    var V = [];
    var H = Object(i.b)(
      'async',
      function (e, t) {
        this.dispatch.call(this.bidderRequest, e, t);
      },
      'addBidResponse'
    );
    function s(e, t) {
      t.timeToRespond > e.getTimeout() + _.b.getConfig('timeoutBuffer') && e.executeCallback(!0);
    }
    function K(e, t) {
      const n = e.getBidRequests();
      const r = U()(n, function (e) {
        return e.bidderCode === t.bidderCode;
      });
      !(function (t, e) {
        let n;
        if (t.bidderCode && (t.cpm > 0 || t.dealId)) {
          const r = U()(e.bids, function (e) {
            return e.adUnitCode === t.adUnitCode;
          });
          n = (function (e, t, n) {
            if (!t) return {};
            let r = {};
            const i = pbjs.bidderSettings;
            if (i) {
              const o = l(t.mediaType, e);
              p(r, o, t),
                e &&
                  i[e] &&
                  i[e][M.JSON_MAPPING.ADSERVER_TARGETING] &&
                  (p(r, i[e], t), (t.sendStandardTargeting = i[e].sendStandardTargeting));
            }
            t.native && (r = { ...r, ...Object(a.d)(t, n) });
            return r;
          })(t.bidderCode, t, r);
        }
        t.adserverTargeting = N(t.adserverTargeting || {}, n);
      })(t, r),
        P.emit(M.EVENTS.BID_RESPONSE, t),
        e.addBidReceived(t),
        s(e, t);
    }
    var J = Object(i.b)(
      'async',
      function (n, r, i, e) {
        Object(o.b)([r], function (e, t) {
          e
            ? (D.logWarn(
                'Failed to save to the video cache: '.concat(e, '. Video bid must be discarded.')
              ),
              s(n, r))
            : t[0].uuid === ''
            ? (D.logWarn(
                'Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.'
              ),
              s(n, r))
            : ((r.videoCacheKey = t[0].uuid),
              r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)),
              K(n, r),
              i());
        });
      },
      'callPrebidCache'
    );
    var d = function (e) {
      const t = _.b.getConfig('mediaTypePriceGranularity.'.concat(e));
      return typeof e === 'string' && t
        ? typeof t === 'string'
          ? t
          : 'custom'
        : _.b.getConfig('priceGranularity');
    };
    var f = function (t) {
      return function (e) {
        return t === M.GRANULARITY_OPTIONS.AUTO
          ? e.pbAg
          : t === M.GRANULARITY_OPTIONS.DENSE
          ? e.pbDg
          : t === M.GRANULARITY_OPTIONS.LOW
          ? e.pbLg
          : t === M.GRANULARITY_OPTIONS.MEDIUM
          ? e.pbMg
          : t === M.GRANULARITY_OPTIONS.HIGH
          ? e.pbHg
          : t === M.GRANULARITY_OPTIONS.CUSTOM
          ? e.pbCg
          : void 0;
      };
    };
    function l(e, t) {
      function n(e, t) {
        return {
          key: e,
          val:
            typeof t === 'function'
              ? function (e) {
                  return t(e);
                }
              : function (e) {
                  return Object(w.getValue)(e, t);
                },
        };
      }
      const r = M.TARGETING_KEYS;
      const i = d(e);
      const o = pbjs.bidderSettings;
      if (
        (o[M.JSON_MAPPING.BD_SETTING_STANDARD] || (o[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
        o[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] ||
          (o[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [
            n(r.BIDDER, 'bidderCode'),
            n(r.AD_ID, 'adId'),
            n(r.PRICE_BUCKET, f(i)),
            n(r.SIZE, 'size'),
            n(r.DEAL, 'dealId'),
            n(r.SOURCE, 'source'),
            n(r.FORMAT, 'mediaType'),
          ]),
        e === 'video')
      ) {
        const a = o[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING];
        if (
          ([r.UUID, r.CACHE_ID].forEach(function (t) {
            void 0 ===
              U()(a, function (e) {
                return e.key === t;
              }) && a.push(n(t, 'videoCacheKey'));
          }),
          _.b.getConfig('cache.url') &&
            (!t || !1 !== D.deepAccess(o, ''.concat(t, '.sendStandardTargeting'))))
        ) {
          const c = Object(u.c)(_.b.getConfig('cache.url'));
          void 0 ===
            U()(a, function (e) {
              return e.key === r.CACHE_HOST;
            }) &&
            a.push(
              n(r.CACHE_HOST, function (e) {
                return D.deepAccess(e, 'adserverTargeting.'.concat(r.CACHE_HOST))
                  ? e.adserverTargeting[r.CACHE_HOST]
                  : c.hostname;
              })
            );
        }
      }
      return o[M.JSON_MAPPING.BD_SETTING_STANDARD];
    }
    function p(r, i, o) {
      const e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
      return (
        (o.size = o.getSize()),
        D._each(e, function (e) {
          const t = e.key;
          let n = e.val;
          if ((r[t] && D.logWarn(`The key: ${t} is getting ovewritten`), D.isFn(n)))
            try {
              n = n(o);
            } catch (e) {
              D.logError('bidmanager', 'ERROR', e);
            }
          ((void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) &&
            t !== M.TARGETING_KEYS.DEAL) ||
          (!D.isEmptyStr(n) && n != null)
            ? (r[t] = n)
            : D.logInfo(`suppressing empty key '${t}' from adserver targeting`);
        }),
        r
      );
    }
    function Y(e, t) {
      return e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }), e[t.adUnitCode].bids.push(t), e;
    }
  },
  4(e, t) {
    e.exports = {
      JSON_MAPPING: {
        PL_CODE: 'code',
        PL_SIZE: 'sizes',
        PL_BIDS: 'bids',
        BD_BIDDER: 'bidder',
        BD_ID: 'paramsd',
        BD_PL_ID: 'placementId',
        ADSERVER_TARGETING: 'adserverTargeting',
        BD_SETTING_STANDARD: 'standard',
      },
      DEBUG_MODE: 'pbjs_debug',
      STATUS: { GOOD: 1, NO_BID: 2 },
      CB: {
        TYPE: {
          ALL_BIDS_BACK: 'allRequestedBidsBack',
          AD_UNIT_BIDS_BACK: 'adUnitBidsBack',
          BID_WON: 'bidWon',
          REQUEST_BIDS: 'requestBids',
        },
      },
      EVENTS: {
        AUCTION_INIT: 'auctionInit',
        AUCTION_END: 'auctionEnd',
        BID_ADJUSTMENT: 'bidAdjustment',
        BID_TIMEOUT: 'bidTimeout',
        BID_REQUESTED: 'bidRequested',
        BID_RESPONSE: 'bidResponse',
        NO_BID: 'noBid',
        BID_WON: 'bidWon',
        BIDDER_DONE: 'bidderDone',
        SET_TARGETING: 'setTargeting',
        REQUEST_BIDS: 'requestBids',
        ADD_AD_UNITS: 'addAdUnits',
        AD_RENDER_FAILED: 'adRenderFailed',
      },
      AD_RENDER_FAILED_REASON: {
        PREVENT_WRITING_ON_MAIN_DOCUMENT: 'preventWritingOnMainDocuemnt',
        NO_AD: 'noAd',
        EXCEPTION: 'exception',
        CANNOT_FIND_AD: 'cannotFindAd',
        MISSING_DOC_OR_ADID: 'missingDocOrAdid',
      },
      EVENT_ID_PATHS: { bidWon: 'adUnitCode' },
      GRANULARITY_OPTIONS: {
        LOW: 'low',
        MEDIUM: 'medium',
        HIGH: 'high',
        AUTO: 'auto',
        DENSE: 'dense',
        CUSTOM: 'custom',
      },
      TARGETING_KEYS: {
        BIDDER: 'hb_bidder',
        AD_ID: 'hb_adid',
        PRICE_BUCKET: 'hb_pb',
        SIZE: 'hb_size',
        DEAL: 'hb_deal',
        SOURCE: 'hb_source',
        FORMAT: 'hb_format',
        UUID: 'hb_uuid',
        CACHE_ID: 'hb_cache_id',
        CACHE_HOST: 'hb_cache_host',
      },
      NATIVE_KEYS: {
        title: 'hb_native_title',
        body: 'hb_native_body',
        body2: 'hb_native_body2',
        privacyLink: 'hb_native_privacy',
        privacyIcon: 'hb_native_privicon',
        sponsoredBy: 'hb_native_brand',
        image: 'hb_native_image',
        icon: 'hb_native_icon',
        clickUrl: 'hb_native_linkurl',
        displayUrl: 'hb_native_displayurl',
        cta: 'hb_native_cta',
        rating: 'hb_native_rating',
        address: 'hb_native_address',
        downloads: 'hb_native_downloads',
        likes: 'hb_native_likes',
        phone: 'hb_native_phone',
        price: 'hb_native_price',
        salePrice: 'hb_native_saleprice',
      },
      S2S: {
        SRC: 's2s',
        DEFAULT_ENDPOINT: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        SYNCED_BIDDERS_KEY: 'pbjsSyncs',
      },
      BID_STATUS: { BID_TARGETING_SET: 'targetingSet', RENDERED: 'rendered' },
    };
  },
  40(e, t, n) {
    const l = n(24);
    const p = n(71);
    const g = n(72);
    const b = n(29);
    const y = n(36);
    const v = n(73);
    const h = {};
    const m = {};
    ((t = e.exports = function (e, t, n, r, i) {
      let o;
      let a;
      let c;
      let u;
      const s = i
        ? function () {
            return e;
          }
        : v(e);
      const d = l(n, r, t ? 2 : 1);
      let f = 0;
      if (typeof s !== 'function') throw TypeError(`${e} is not iterable!`);
      if (g(s)) {
        for (o = y(e.length); f < o; f++)
          if ((u = t ? d(b((a = e[f]))[0], a[1]) : d(e[f])) === h || u === m) return u;
      } else
        for (c = s.call(e); !(a = c.next()).done; )
          if ((u = p(c, d, a.value, t)) === h || u === m) return u;
    }).BREAK = h),
      (t.RETURN = m);
  },
  41(e, t, n) {
    t.a = function (e) {
      let t = e;
      return {
        callBids() {},
        setBidderCode(e) {
          t = e;
        },
        getBidderCode() {
          return t;
        },
      };
    };
  },
  42(e, t, n) {
    n.d(t, 'a', function () {
      return l;
    }),
      n.d(t, 'b', function () {
        return g;
      });
    const r = n(12);
    const a = n.n(r);
    const i = n(0);
    const s = 2;
    const o = { buckets: [{ min: 0, max: 5, increment: 0.5 }] };
    const c = { buckets: [{ min: 0, max: 20, increment: 0.1 }] };
    const u = { buckets: [{ min: 0, max: 20, increment: 0.01 }] };
    const d = {
      buckets: [
        { min: 0, max: 3, increment: 0.01 },
        { min: 3, max: 8, increment: 0.05 },
        { min: 8, max: 20, increment: 0.5 },
      ],
    };
    const f = {
      buckets: [
        { min: 0, max: 5, increment: 0.05 },
        { min: 5, max: 10, increment: 0.1 },
        { min: 10, max: 20, increment: 0.5 },
      ],
    };
    function l(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      let r = parseFloat(e);
      return (
        isNaN(r) && (r = ''),
        {
          low: r === '' ? '' : p(e, o, n),
          med: r === '' ? '' : p(e, c, n),
          high: r === '' ? '' : p(e, u, n),
          auto: r === '' ? '' : p(e, f, n),
          dense: r === '' ? '' : p(e, d, n),
          custom: r === '' ? '' : p(e, t, n),
        }
      );
    }
    function p(n, e, r) {
      let i = '';
      if (!g(e)) return i;
      const o = e.buckets.reduce(
        function (e, t) {
          return e.max > t.max ? e : t;
        },
        { max: 0 }
      );
      const t = a()(e.buckets, function (e) {
        if (n > o.max * r) {
          let t = e.precision;
          void 0 === t && (t = s), (i = (e.max * r).toFixed(t));
        } else if (n <= e.max * r && n >= e.min * r) return e;
      });
      return (
        t &&
          (i = (function (e, t, n) {
            const r = void 0 !== t.precision ? t.precision : s;
            const i = t.increment * n;
            const o = t.min * n;
            const a = Math.pow(10, r + 2);
            const c = (e * a - o * a) / (i * a);
            let u = Math.floor(c) * i + o;
            return (u = Number(u.toFixed(10))).toFixed(r);
          })(n, t, r)),
        i
      );
    }
    function g(e) {
      if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
      let t = !0;
      return (
        e.buckets.forEach(function (e) {
          (void 0 !== e.min && e.max && e.increment) || (t = !1);
        }),
        t
      );
    }
  },
  43(e, t) {
    e.exports = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
    };
  },
  44(e, t, n) {
    const m = n(24);
    const S = n(56);
    const E = n(45);
    const A = n(36);
    const r = n(83);
    e.exports = function (f, e) {
      const l = f == 1;
      const p = f == 2;
      const g = f == 3;
      const b = f == 4;
      const y = f == 6;
      const v = f == 5 || y;
      const h = e || r;
      return function (e, t, n) {
        for (
          var r,
            i,
            o = E(e),
            a = S(o),
            c = m(t, n, 3),
            u = A(a.length),
            s = 0,
            d = l ? h(e, u) : p ? h(e, 0) : void 0;
          s < u;
          s++
        )
          if ((v || s in a) && ((i = c((r = a[s]), s, o)), f))
            if (l) d[s] = i;
            else if (i)
              switch (f) {
                case 3:
                  return !0;
                case 5:
                  return r;
                case 6:
                  return s;
                case 2:
                  d.push(r);
              }
            else if (b) return !1;
        return y ? -1 : g || b ? b : d;
      };
    };
  },
  45(e, t, n) {
    const r = n(35);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  46(e, t) {
    const n = Math.ceil;
    const r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  47(e, t) {
    let n = 0;
    const r = Math.random();
    e.exports = function (e) {
      return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
    };
  },
  48(e, t, n) {
    const r = n(56);
    const i = n(35);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  49(e, t, n) {
    (t.a = r),
      n.d(t, 'b', function () {
        return i;
      });
    const c = n(0);
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function r(i) {
      function o() {
        const e = (function () {
          let t;
          const n = [];
          do {
            try {
              t = t ? t.parent : i;
              try {
                const e = t == i.top;
                let r = {
                  referrer: t.document.referrer || null,
                  location: t.location.href || null,
                  isTop: e,
                };
                e && (r = u(r, { canonicalUrl: a(t.document) })), n.push(r);
              } catch (e) {
                n.push({ referrer: null, location: null, isTop: t == i.top }),
                  Object(c.logWarn)(
                    'Trying to access cross domain iframe. Continuing without referrer and location'
                  );
              }
            } catch (e) {
              return n.push({ referrer: null, location: null, isTop: !1 }), n;
            }
          } while (t != i.top);
          return n;
        })();
        const t = (function () {
          try {
            if (!i.location.ancestorOrigins) return;
            return i.location.ancestorOrigins;
          } catch (e) {}
        })();
        if (t) for (let n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
        return e;
      }
      function a(e) {
        try {
          const t = e.querySelector("link[rel='canonical']");
          if (t !== null) return t.href;
        } catch (e) {}
        return null;
      }
      return function () {
        try {
          let e;
          const t = o();
          const n = t.length - 1;
          const r = t[n].location !== null || (n > 0 && t[n - 1].referrer !== null);
          const i = (function (e) {
            let t;
            const n = [];
            let r = null;
            let i = null;
            let o = null;
            let a = null;
            let c = null;
            for (t = e.length - 1; t >= 0; t--) {
              try {
                r = e[t].location;
              } catch (e) {}
              if (r) n.push(r), (c = c || r);
              else if (t !== 0) {
                i = e[t - 1];
                try {
                  (o = i.referrer), (a = i.ancestor);
                } catch (e) {}
                o ? (n.push(o), (c = c || o)) : a ? (n.push(a), (c = c || a)) : n.push(null);
              } else n.push(null);
            }
            return { stack: n, detectedRefererUrl: c };
          })(t);
          return (
            t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl),
            {
              referer: i.detectedRefererUrl,
              reachedTop: r,
              numIframes: n,
              stack: i.stack,
              canonicalUrl: e,
            }
          );
        } catch (e) {}
      };
    }
    var i = r(window);
  },
  5(e, t, n) {
    n.d(t, 'a', function () {
      return r;
    }),
      (t.b = i);
    const l = n(9);
    const p = n(3);
    function g() {
      return (g =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function b(e) {
      return (b =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    const y = n(0);
    const v = 4;
    var r = i();
    function i() {
      const s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
      const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const d = e.request;
      const f = e.done;
      return function (e, t, n) {
        const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          let i;
          const o = r.method || (n ? 'POST' : 'GET');
          const a = document.createElement('a');
          a.href = e;
          const c =
            b(t) === 'object' && t !== null
              ? t
              : {
                  success() {
                    y.logMessage('xhr success');
                  },
                  error(e) {
                    y.logError('xhr error', null, e);
                  },
                };
          if (
            (typeof t === 'function' && (c.success = t),
            ((i = new window.XMLHttpRequest()).onreadystatechange = function () {
              if (i.readyState === v) {
                typeof f === 'function' && f(a.origin);
                const e = i.status;
                (e >= 200 && e < 300) || e === 304
                  ? c.success(i.responseText, i)
                  : c.error(i.statusText, i);
              }
            }),
            p.b.getConfig('disableAjaxTimeout') ||
              (i.ontimeout = function () {
                y.logError('  xhr timeout after ', i.timeout, 'ms');
              }),
            o === 'GET' && n)
          ) {
            const u = Object(l.c)(e, r);
            g(u.search, n), (e = Object(l.a)(u));
          }
          i.open(o, e, !0),
            p.b.getConfig('disableAjaxTimeout') || (i.timeout = s),
            r.withCredentials && (i.withCredentials = !0),
            y._each(r.customHeaders, function (e, t) {
              i.setRequestHeader(t, e);
            }),
            r.preflight && i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
            i.setRequestHeader('Content-Type', r.contentType || 'text/plain'),
            typeof d === 'function' && d(a.origin),
            o === 'POST' && n ? i.send(n) : i.send();
        } catch (e) {
          y.logError('xhr construction', e);
        }
      };
    }
  },
  50(e, t, n) {
    (t.a = function (e, t) {
      if (!t || !e)
        return void o.logError('cannot load external script without url and moduleCode');
      if (!i()(c, t))
        return void o.logError(''.concat(t, ' not whitelisted for loading external JavaScript'));
      if (a[e]) return;
      o.logWarn('module '.concat(t, ' is loading external JavaScript'));
      const n = document.createElement('script');
      (n.type = 'text/javascript'), (n.async = !0), (n.src = e), o.insertElement(n), (a[e] = !0);
    }),
      (t.b = function (t, e, n) {
        if (!t)
          return void o.logError('Error attempting to request empty URL', 'adloader.js:loadScript');
        n
          ? a[t]
            ? e && typeof e === 'function' && (a[t].loaded ? e() : a[t].callbacks.push(e))
            : ((a[t] = { loaded: !1, callbacks: [] }),
              e && typeof e === 'function' && a[t].callbacks.push(e),
              u(t, function () {
                a[t].loaded = !0;
                try {
                  for (let e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]();
                } catch (e) {
                  o.logError('Error executing callback', 'adloader.js:loadScript', e);
                }
              }))
          : u(t, e);
      });
    const r = n(10);
    var i = n.n(r);
    var o = n(0);
    var a = {};
    var c = ['criteo'];
    function u(e, t) {
      const n = document.createElement('script');
      (n.type = 'text/javascript'),
        (n.async = !0),
        t &&
          typeof t === 'function' &&
          (n.readyState
            ? (n.onreadystatechange = function () {
                (n.readyState !== 'loaded' && n.readyState !== 'complete') ||
                  ((n.onreadystatechange = null), t());
              })
            : (n.onload = function () {
                t();
              })),
        (n.src = e);
      let r = document.getElementsByTagName('head');
      (r = r.length ? r : document.getElementsByTagName('body')).length &&
        (r = r[0]).insertBefore(n, r.firstChild);
    }
  },
  51(e, t, n) {
    function m() {
      return this;
    }
    const S = n(58);
    const E = n(15);
    const A = n(138);
    const T = n(21);
    const O = n(32);
    const I = n(139);
    const w = n(53);
    const j = n(144);
    const C = n(14)('iterator');
    const _ = !([].keys && 'next' in [].keys());
    const U = 'values';
    e.exports = function (e, t, n, r, i, o, a) {
      I(n, t, r);
      function c(e) {
        if (!_ && e in g) return g[e];
        switch (e) {
          case 'keys':
          case U:
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this, e);
        };
      }
      let u;
      let s;
      let d;
      const f = `${t} Iterator`;
      const l = i == U;
      let p = !1;
      var g = e.prototype;
      const b = g[C] || g['@@iterator'] || (i && g[i]);
      let y = b || c(i);
      const v = i ? (l ? c('entries') : y) : void 0;
      const h = (t == 'Array' && g.entries) || b;
      if (
        (h &&
          (d = j(h.call(new e()))) !== Object.prototype &&
          d.next &&
          (w(d, f, !0), S || typeof d[C] === 'function' || T(d, C, m)),
        l &&
          b &&
          b.name !== U &&
          ((p = !0),
          (y = function () {
            return b.call(this);
          })),
        (S && !a) || (!_ && !p && g[C]) || T(g, C, y),
        (O[t] = y),
        (O[f] = m),
        i)
      )
        if (((u = { values: l ? y : c(U), keys: o ? y : c('keys'), entries: v }), a))
          for (s in u) s in g || A(g, s, u[s]);
        else E(E.P + E.F * (_ || p), t, u);
      return u;
    };
  },
  52(e, t, n) {
    const r = n(57)('keys');
    const i = n(47);
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  53(e, t, n) {
    const r = n(20).f;
    const i = n(30);
    const o = n(14)('toStringTag');
    e.exports = function (e, t, n) {
      e && !i((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t });
    };
  },
  54(e, t) {
    e.exports = function (e) {
      if (typeof e !== 'function') throw TypeError(`${e} is not a function!`);
      return e;
    };
  },
  55(e, t, n) {
    const r = n(18);
    const i = n(19).document;
    const o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  56(e, t, n) {
    const r = n(34);
    e.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return r(e) == 'String' ? e.split('') : Object(e);
        };
  },
  57(e, t, n) {
    const r = n(16);
    const i = n(19);
    const o = '__core-js_shared__';
    const a = i[o] || (i[o] = {});
    (e.exports = function (e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: r.version,
      mode: n(58) ? 'pure' : 'global',
      copyright: 'Â© 2019 Denis Pushkarev (zloirock.ru)',
    });
  },
  58(e, t) {
    e.exports = !0;
  },
  59(e, t, n) {
    const u = n(48);
    const s = n(36);
    const d = n(87);
    e.exports = function (c) {
      return function (e, t, n) {
        let r;
        const i = u(e);
        const o = s(i.length);
        let a = d(n, o);
        if (c && t != t) {
          for (; a < o; ) if ((r = i[a++]) != r) return !0;
        } else for (; a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
        return !c && -1;
      };
    };
  },
  60(e, t, n) {
    (t.a = function (e, t) {
      if (e.labelAll) return { labelAll: !0, labels: e.labelAll, activeLabels: t };
      return { labelAll: !1, labels: e.labelAny, activeLabels: t };
    }),
      (t.c = function (e) {
        const t = y(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b);
        return !t.shouldFilter || !!t.sizesSupported[e];
      }),
      (t.b = function () {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = e.labels;
        const n = void 0 === t ? [] : t;
        const r = e.labelAll;
        const i = void 0 !== r && r;
        const o = e.activeLabels;
        const a = void 0 === o ? [] : o;
        let c = arguments.length > 1 ? arguments[1] : void 0;
        const u = arguments.length > 2 ? arguments[2] : void 0;
        const s = y(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b);
        c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? { banner: { sizes: u } } : {};
        const d = Object(p.deepAccess)(c, 'banner.sizes');
        s.shouldFilter &&
          d &&
          (c.banner.sizes = d.filter(function (e) {
            return s.sizesSupported[e];
          }));
        const f = Object.keys(c);
        const l = {
          active:
            f.every(function (e) {
              return e !== 'banner';
            }) ||
            (f.some(function (e) {
              return e === 'banner';
            }) &&
              Object(p.deepAccess)(c, 'banner.sizes.length') > 0 &&
              (n.length === 0 ||
                (!i &&
                  (n.some(function (e) {
                    return s.labels[e];
                  }) ||
                    n.some(function (e) {
                      return g()(a, e);
                    }))) ||
                (i &&
                  n.reduce(function (e, t) {
                    return e ? s.labels[t] || g()(a, t) : e;
                  }, !0)))),
          mediaTypes: c,
        };
        d &&
          d.length !== c.banner.sizes.length &&
          (l.filterResults = { before: d, after: c.banner.sizes });
        return l;
      });
    const r = n(3);
    var p = n(0);
    const i = n(10);
    var g = n.n(i);
    function o(e) {
      return (o =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    var b = [];
    function y(e) {
      return e.reduce(
        function (n, r) {
          if (o(r) === 'object' && typeof r.mediaQuery === 'string') {
            let t = !1;
            try {
              t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
            } catch (e) {
              Object(p.logWarn)(
                'Unfriendly iFrame blocks sizeConfig from being correctly evaluated'
              ),
                (t = matchMedia(r.mediaQuery).matches);
            }
            t &&
              (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0),
              ['labels', 'sizesSupported'].forEach(function (t) {
                return (r[t] || []).forEach(function (e) {
                  return (n[t][e] = !0);
                });
              }));
          } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
          return n;
        },
        { labels: {}, sizesSupported: {}, shouldFilter: !1 }
      );
    }
    r.b.getConfig('sizeConfig', function (e) {
      return (function (e) {
        b = e;
      })(e.sizeConfig);
    });
  },
  61(e, t, n) {
    n.d(t, 'a', function () {
      return o;
    });
    const r = n(0);
    const i = {};
    var o = {
      incrementCounter(e) {
        return (
          (i[e] = i[e] || {}),
          (i[e].counter = Object(r.deepAccess)(i, ''.concat(e, '.counter')) + 1 || 1),
          i[e].counter
        );
      },
      getCounter(e) {
        return Object(r.deepAccess)(i, ''.concat(e, '.counter')) || 0;
      },
    };
  },
  62(e, t, n) {
    (t.b = function (e, t) {
      const n = { puts: e.map(o) };
      Object(r.a)(
        i.b.getConfig('cache.url'),
        (function (n) {
          return {
            success(e) {
              let t;
              try {
                t = JSON.parse(e).responses;
              } catch (e) {
                return void n(e, []);
              }
              t
                ? n(null, t)
                : n(new Error("The cache server didn't respond with a responses property."), []);
            },
            error(e, t) {
              n(
                new Error(
                  'Error storing video ad in the cache: '.concat(e, ': ').concat(JSON.stringify(t))
                ),
                []
              );
            },
          };
        })(t),
        JSON.stringify(n),
        { contentType: 'text/plain', withCredentials: !0 }
      );
    }),
      (t.a = function (e) {
        return ''.concat(i.b.getConfig('cache.url'), '?uuid=').concat(e);
      });
    var r = n(5);
    var i = n(3);
    function o(e) {
      const t = {
        type: 'xml',
        value: e.vastXml
          ? e.vastXml
          : (function (e, t) {
              const n = t ? '<![CDATA['.concat(t, ']]>') : '';
              return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
                .concat(e, ']]></VASTAdTagURI>\n        <Impression>')
                .concat(
                  n,
                  '</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>'
                );
            })(e.vastUrl, e.vastImpUrl),
        ttlseconds: Number(e.ttl),
      };
      return (
        typeof e.customCacheKey === 'string' &&
          e.customCacheKey !== '' &&
          (t.key = e.customCacheKey),
        t
      );
    }
  },
  63(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'checkAdUnitSetup', function () {
        return G;
      });
    const r = n(27);
    const c = n(0);
    const i = n(133);
    const o = n(26);
    const a = n(50);
    const d = n(3);
    const v = n(28);
    const f = n(64);
    const u = n(13);
    const s = n(134);
    const l = n(10);
    const p = n.n(l);
    const g = n(61);
    const h = n(11);
    const b = n(23);
    function y(e) {
      return (y =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function m() {
      return (m =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    const S = Object(r.a)();
    const E = n(4);
    const A = n(0);
    const T = n(7).default;
    const O = n(8);
    const I = o.a.triggerUserSyncs;
    const w = E.EVENTS;
    const j = w.ADD_AD_UNITS;
    const C = w.BID_WON;
    const _ = w.REQUEST_BIDS;
    const U = w.SET_TARGETING;
    const B = w.AD_RENDER_FAILED;
    const R = E.AD_RENDER_FAILED_REASON;
    const N = R.PREVENT_WRITING_ON_MAIN_DOCUMENT;
    const x = R.NO_AD;
    const D = R.EXCEPTION;
    const k = R.CANNOT_FIND_AD;
    const P = R.MISSING_DOC_OR_ADID;
    const M = {
      bidWon(e) {
        const t = v.a
          .getBidsRequested()
          .map(function (e) {
            return e.bids.map(function (e) {
              return e.adUnitCode;
            });
          })
          .reduce(c.flatten)
          .filter(c.uniques);
        return !!A.contains(t, e) || void A.logError(`The "${e}" placement is not defined.`);
      },
    };
    function q(e, t, n) {
      e.defaultView &&
        e.defaultView.frameElement &&
        ((e.defaultView.frameElement.width = t), (e.defaultView.frameElement.height = n));
    }
    Object(s.a)(),
      (S.bidderSettings = S.bidderSettings || {}),
      (S.libLoaded = !0),
      (S.version = 'v2.34.0'),
      A.logInfo('Prebid.js v2.34.0 loaded'),
      (S.adUnits = S.adUnits || []),
      (S.triggerUserSyncs = I);
    var G = Object(u.b)(
      'sync',
      function (e) {
        return (
          e.forEach(function (e) {
            const t = e.mediaTypes;
            const n = A.getAdUnitSizes(e);
            if (t && t.banner) {
              const r = t.banner;
              r.sizes
                ? ((r.sizes = n), (e.sizes = n))
                : (A.logError(
                    'Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request.'
                  ),
                  delete e.mediaTypes.banner);
            } else e.sizes && (A.logWarn('Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).'), (e.sizes = n));
            if (t && t.video) {
              const i = t.video;
              if (i.playerSize)
                if (
                  Array.isArray(i.playerSize) &&
                  i.playerSize.length === 1 &&
                  i.playerSize.every(function (e) {
                    return Object(c.isArrayOfNums)(e, 2);
                  })
                )
                  e.sizes = i.playerSize;
                else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                  const o = [];
                  o.push(i.playerSize),
                    A.logInfo(
                      'Transforming video.playerSize from ['
                        .concat(i.playerSize, '] to [[')
                        .concat(o, "]] so it's in the proper format.")
                    ),
                    (e.sizes = i.playerSize = o);
                } else
                  A.logError(
                    'Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.'
                  ),
                    delete e.mediaTypes.video.playerSize;
            }
            if (t && t.native) {
              const a = t.native;
              a.image &&
                a.image.sizes &&
                !Array.isArray(a.image.sizes) &&
                (A.logError(
                  'Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.'
                ),
                delete e.mediaTypes.native.image.sizes),
                a.image &&
                  a.image.aspect_ratios &&
                  !Array.isArray(a.image.aspect_ratios) &&
                  (A.logError(
                    'Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.'
                  ),
                  delete e.mediaTypes.native.image.aspect_ratios),
                a.icon &&
                  a.icon.sizes &&
                  !Array.isArray(a.icon.sizes) &&
                  (A.logError(
                    'Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.'
                  ),
                  delete e.mediaTypes.native.icon.sizes);
            }
          }),
          e
        );
      },
      'checkAdUnitSetup'
    );
    function W(e) {
      const n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes()));
      const r = v.a.getLastAuctionId();
      return n
        .map(function (e) {
          return e.adUnitCode;
        })
        .filter(c.uniques)
        .map(function (t) {
          return n.filter(function (e) {
            return e.auctionId === r && e.adUnitCode === t;
          });
        })
        .filter(function (e) {
          return e && e[0] && e[0].adUnitCode;
        })
        .map(function (e) {
          return (function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          })({}, e[0].adUnitCode, { bids: e });
        })
        .reduce(function (e, t) {
          return m(e, t);
        }, {});
    }
    function L(e) {
      const t = e.reason;
      const n = e.message;
      const r = e.bid;
      const i = e.id;
      const o = { reason: t, message: n };
      r && (o.bid = r), i && (o.adId = i), A.logError(n), O.emit(B, o);
    }
    function z(e) {
      e.forEach(function (e) {
        if (void 0 === e.called)
          try {
            e.call(), (e.called = !0);
          } catch (e) {
            A.logError('Error processing command :', 'prebid.js', e);
          }
      });
    }
    (S.getAdserverTargetingForAdUnitCodeStr = function (e) {
      if ((A.logInfo('Invoking pbjs.getAdserverTargetingForAdUnitCodeStr', arguments), e)) {
        const t = S.getAdserverTargetingForAdUnitCode(e);
        return A.transformAdServerTargetingObj(t);
      }
      A.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
    }),
      (S.getAdserverTargetingForAdUnitCode = function (e) {
        return S.getAdserverTargeting(e)[e];
      }),
      (S.getAdserverTargeting = function (e) {
        return A.logInfo('Invoking pbjs.getAdserverTargeting', arguments), f.b.getAllTargeting(e);
      }),
      (S.getNoBids = function () {
        return A.logInfo('Invoking pbjs.getNoBids', arguments), W('getNoBids');
      }),
      (S.getBidResponses = function () {
        return A.logInfo('Invoking pbjs.getBidResponses', arguments), W('getBidsReceived');
      }),
      (S.getBidResponsesForAdUnitCode = function (t) {
        return {
          bids: v.a.getBidsReceived().filter(function (e) {
            return e.adUnitCode === t;
          }),
        };
      }),
      (S.setTargetingForGPTAsync = function (e, t) {
        if (
          (A.logInfo('Invoking pbjs.setTargetingForGPTAsync', arguments),
          Object(c.isGptPubadsDefined)())
        ) {
          const n = f.b.getAllTargeting(e);
          f.b.resetPresetTargeting(e),
            f.b.setTargetingForGPT(n, t),
            Object.keys(n).forEach(function (t) {
              Object.keys(n[t]).forEach(function (e) {
                e === 'hb_adid' && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET);
              });
            }),
            O.emit(U, n);
        } else A.logError('window.googletag is not defined on the page');
      }),
      (S.setTargetingForAst = function (e) {
        A.logInfo('Invoking pbjs.setTargetingForAn', arguments),
          f.b.isApntagDefined()
            ? (f.b.setTargetingForAst(e), O.emit(U, f.b.getAllTargeting()))
            : A.logError('window.apntag is not defined on the page');
      }),
      (S.renderAd = function (e, t) {
        if (
          (A.logInfo('Invoking pbjs.renderAd', arguments),
          A.logMessage(`Calling renderAd with adId :${t}`),
          e && t)
        )
          try {
            const n = v.a.findBidByAdId(t);
            if (n) {
              (n.status = E.BID_STATUS.RENDERED),
                (n.ad = A.replaceAuctionPrice(n.ad, n.cpm)),
                (n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm)),
                v.a.addWinningBid(n),
                O.emit(C, n);
              const r = n.height;
              const i = n.width;
              const o = n.ad;
              const a = n.mediaType;
              const c = n.adUrl;
              const u = n.renderer;
              const s = document.createComment(
                'Creative '
                  .concat(n.creativeId, ' served by ')
                  .concat(n.bidder, ' Prebid.js Header Bidding')
              );
              if ((A.insertElement(s, e, 'body'), Object(h.c)(u))) Object(h.b)(u, n);
              else if ((e === document && !A.inIframe()) || a === 'video') {
                const d = 'Error trying to write ad. Ad render call ad id '.concat(
                  t,
                  ' was prevented from writing to the main document.'
                );
                L({ reason: N, message: d, bid: n, id: t });
              } else if (o) {
                if (
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().indexOf('firefox/') > -1
                ) {
                  const f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                  f && parseInt(f, 10) < 67 && e.open('text/html', 'replace');
                }
                e.write(o), e.close(), q(e, i, r), A.callBurl(n);
              } else if (c) {
                const l = A.createInvisibleIframe();
                (l.height = r),
                  (l.width = i),
                  (l.style.display = 'inline'),
                  (l.style.overflow = 'hidden'),
                  (l.src = c),
                  A.insertElement(l, e, 'body'),
                  q(e, i, r),
                  A.callBurl(n);
              } else {
                const p = 'Error trying to write ad. No ad for bid response id: '.concat(t);
                L({ reason: x, message: p, bid: n, id: t });
              }
            } else {
              const g = 'Error trying to write ad. Cannot find ad by given id : '.concat(t);
              L({ reason: k, message: g, id: t });
            }
          } catch (e) {
            const b = 'Error trying to write ad Id :'.concat(t, ' to the page:').concat(e.message);
            L({ reason: D, message: b, id: t });
          }
        else {
          const y = 'Error trying to write ad Id :'.concat(
            t,
            ' to the page. Missing document or adId'
          );
          L({ reason: P, message: y, id: t });
        }
      }),
      (S.removeAdUnit = function (e) {
        (A.logInfo('Invoking pbjs.removeAdUnit', arguments), e)
          ? (A.isArray(e) ? e : [e]).forEach(function (e) {
              for (let t = S.adUnits.length - 1; t >= 0; t--)
                S.adUnits[t].code === e && S.adUnits.splice(t, 1);
            })
          : (S.adUnits = []);
      }),
      (S.requestBids = Object(u.b)('async', function () {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = e.bidsBackHandler;
        const n = e.timeout;
        let r = e.adUnits;
        let i = e.adUnitCodes;
        const o = e.labels;
        const a = e.auctionId;
        O.emit(_);
        const c = n || d.b.getConfig('bidderTimeout');
        if (
          ((r = r || S.adUnits),
          A.logInfo('Invoking pbjs.requestBids', arguments),
          i && i.length
            ? (r = r.filter(function (e) {
                return p()(i, e.code);
              }))
            : (i =
                r &&
                r.map(function (e) {
                  return e.code;
                })),
          (r = G(r)).forEach(function (i) {
            const o = Object.keys(i.mediaTypes || { banner: 'banner' });
            const e = i.bids.map(function (e) {
              return e.bidder;
            });
            const a = T.bidderRegistry;
            const t = d.b.getConfig('s2sConfig');
            const n = t && t.bidders;
            const r = n
              ? e.filter(function (e) {
                  return !p()(n, e);
                })
              : e;
            (i.transactionId = A.generateUUID()),
              r.forEach(function (t) {
                const e = a[t];
                const n = e && e.getSpec && e.getSpec();
                const r = (n && n.supportedMediaTypes) || ['banner'];
                o.some(function (e) {
                  return p()(r, e);
                }) ||
                  (A.logWarn(A.unsupportedBidderMessage(i, t)),
                  (i.bids = i.bids.filter(function (e) {
                    return e.bidder !== t;
                  })));
              }),
              g.a.incrementCounter(i.code);
          }),
          r && r.length !== 0)
        ) {
          const u = v.a.createAuction({
            adUnits: r,
            adUnitCodes: i,
            callback: t,
            cbTimeout: c,
            labels: o,
            auctionId: a,
          });
          const s = r.length;
          return (
            s > 15 &&
              A.logInfo(
                'Current auction '.concat(u.getAuctionId(), ' contains ').concat(s, ' adUnits.'),
                r
              ),
            i.forEach(function (e) {
              return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId());
            }),
            u.callBids(),
            u
          );
        }
        if ((A.logMessage('No adUnits configured. No bids requested.'), typeof t === 'function'))
          try {
            t();
          } catch (e) {
            A.logError('Error executing bidsBackHandler', null, e);
          }
      })),
      (S.addAdUnits = function (e) {
        A.logInfo('Invoking pbjs.addAdUnits', arguments),
          A.isArray(e)
            ? S.adUnits.push.apply(S.adUnits, e)
            : y(e) === 'object' && S.adUnits.push(e),
          O.emit(j);
      }),
      (S.onEvent = function (e, t, n) {
        A.logInfo('Invoking pbjs.onEvent', arguments),
          A.isFn(t)
            ? !n || M[e].call(null, n)
              ? O.on(e, t, n)
              : A.logError(`The id provided is not valid for event "${e}" and no handler was set.`)
            : A.logError(
                `The event handler provided is not a function and was not set on event "${e}".`
              );
      }),
      (S.offEvent = function (e, t, n) {
        A.logInfo('Invoking pbjs.offEvent', arguments),
          (n && !M[e].call(null, n)) || O.off(e, t, n);
      }),
      (S.registerBidAdapter = function (e, t) {
        A.logInfo('Invoking pbjs.registerBidAdapter', arguments);
        try {
          T.registerBidAdapter(e(), t);
        } catch (e) {
          A.logError(`Error registering bidder adapter : ${e.message}`);
        }
      }),
      (S.registerAnalyticsAdapter = function (e) {
        A.logInfo('Invoking pbjs.registerAnalyticsAdapter', arguments);
        try {
          T.registerAnalyticsAdapter(e);
        } catch (e) {
          A.logError(`Error registering analytics adapter : ${e.message}`);
        }
      }),
      (S.createBid = function (e) {
        return A.logInfo('Invoking pbjs.createBid', arguments), Object(b.a)(e);
      }),
      (S.loadScript = function (e, t, n) {
        A.logInfo('Invoking pbjs.loadScript', arguments), Object(a.b)(e, t, n);
      }),
      (S.enableAnalytics = function (e) {
        e && !A.isEmpty(e)
          ? (A.logInfo('Invoking pbjs.enableAnalytics for: ', e), T.enableAnalytics(e))
          : A.logError('pbjs.enableAnalytics should be called with option {}');
      }),
      (S.aliasBidder = function (e, t) {
        A.logInfo('Invoking pbjs.aliasBidder', arguments),
          e && t
            ? T.aliasBidAdapter(e, t)
            : A.logError('bidderCode and alias must be passed as arguments', 'pbjs.aliasBidder');
      }),
      (S.getAllWinningBids = function () {
        return v.a.getAllWinningBids();
      }),
      (S.getAllPrebidWinningBids = function () {
        return v.a.getBidsReceived().filter(function (e) {
          return e.status === E.BID_STATUS.BID_TARGETING_SET;
        });
      }),
      (S.getHighestCpmBids = function (e) {
        const t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
        return f.b.getWinningBids(e, t);
      }),
      (S.markWinningBidAsUsed = function (t) {
        let e = [];
        t.adUnitCode && t.adId
          ? (e = v.a.getBidsReceived().filter(function (e) {
              return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
            }))
          : t.adUnitCode
          ? (e = f.b.getWinningBids(t.adUnitCode))
          : t.adId
          ? (e = v.a.getBidsReceived().filter(function (e) {
              return e.adId === t.adId;
            }))
          : A.logWarn(
              "Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."
            ),
          e.length > 0 && (e[0].status = E.BID_STATUS.RENDERED);
      }),
      (S.getConfig = d.b.getConfig),
      (S.setConfig = d.b.setConfig),
      S.que.push(function () {
        return Object(i.a)();
      }),
      (S.cmd.push = function (e) {
        if (typeof e === 'function')
          try {
            e.call();
          } catch (e) {
            A.logError('Error processing command :', e.message, e.stack);
          }
        else A.logError('Commands written into pbjs.cmd.push must be wrapped in a function');
      }),
      (S.que.push = S.cmd.push),
      (S.processQueue = function () {
        u.b.ready(), z(S.que), z(S.cmd);
      }),
      (t.default = S);
  },
  64(e, t, n) {
    (t.a = S),
      n.d(t, 'b', function () {
        return I;
      });
    const s = n(0);
    const o = n(3);
    const a = n(25);
    const r = n(28);
    const i = n(60);
    const c = n(2);
    const u = n(10);
    const d = n.n(u);
    function f(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            Object.prototype.toString.call(e) === '[object Arguments]'
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function l() {
      return (l =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function p(e, t, n) {
      return (
        t in e
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
    const g = n(0);
    const b = n(4);
    let y = [];
    const v = Object.keys(b.TARGETING_KEYS).map(function (e) {
      return b.TARGETING_KEYS[e];
    });
    const h = function (e) {
      return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(s.timestamp)();
    };
    const m = function (e) {
      return (
        e &&
        ((e.status && !d()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status)) ||
          !e.status)
      );
    };
    function S(e, n) {
      const r = [];
      const i = Object(s.groupBy)(e, 'adUnitCode');
      return (
        Object.keys(i).forEach(function (e) {
          const t = Object(s.groupBy)(i[e], 'bidderCode');
          Object.keys(t).forEach(function (e) {
            return r.push(t[e].reduce(n));
          });
        }),
        r
      );
    }
    function E(e, t) {
      return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal
        ? -1
        : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal
        ? 1
        : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb;
    }
    let A;
    let T;
    let O;
    var I =
      ((A = r.a),
      (O = {}),
      ((T = {}).setLatestAuctionForAdUnit = function (e, t) {
        O[e] = t;
      }),
      (T.resetPresetTargeting = function (e) {
        if (Object(s.isGptPubadsDefined)()) {
          const t = j(e);
          const r = A.getAdUnits().filter(function (e) {
            return d()(t, e.code);
          });
          window.googletag
            .pubads()
            .getSlots()
            .forEach(function (n) {
              y.forEach(function (t) {
                r.forEach(function (e) {
                  (e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId()) ||
                    n.setTargeting(t, null);
                });
              });
            });
        }
      }),
      (T.resetPresetTargetingAST = function (e) {
        j(e).forEach(function (e) {
          const t = window.apntag.getTag(e);
          if (t && t.keywords) {
            const n = Object.keys(t.keywords);
            const r = {};
            n.forEach(function (e) {
              d()(y, e.toLowerCase()) || (r[e] = t.keywords[e]);
            }),
              window.apntag.modifyTag(e, { keywords: r });
          }
        });
      }),
      (T.getAllTargeting = function (e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C();
        const n = j(e);
        let r = (function (e, t) {
          let n = T.getWinningBids(e, t);
          const r = _();
          return (n = n.map(function (o) {
            return p(
              {},
              o.adUnitCode,
              Object.keys(o.adserverTargeting)
                .filter(function (e) {
                  return (
                    void 0 === o.sendStandardTargeting ||
                    o.sendStandardTargeting ||
                    r.indexOf(e) === -1
                  );
                })
                .reduce(function (e, t) {
                  const n = [o.adserverTargeting[t]];
                  const r = p({}, t.substring(0, 20), n);
                  if (t !== b.TARGETING_KEYS.DEAL) return [].concat(f(e), [r]);
                  const i = p({}, ''.concat(t, '_').concat(o.bidderCode).substring(0, 20), n);
                  return [].concat(f(e), [r, i]);
                }, [])
            );
          }));
        })(n, t)
          .concat(
            (function (t, e) {
              return e
                .filter(function (e) {
                  return d()(t, e.adUnitCode);
                })
                .map(function (e) {
                  return { ...e };
                })
                .reduce(U, [])
                .map(R)
                .filter(function (e) {
                  return e;
                });
            })(n, t)
          )
          .concat(
            o.b.getConfig('enableSendAllBids')
              ? (function (e, t) {
                  const n = v.concat(a.a);
                  return S(t, s.getHighestCpm)
                    .map(function (t) {
                      if (w(t, e))
                        return p(
                          {},
                          t.adUnitCode,
                          N(
                            t,
                            n.filter(function (e) {
                              return void 0 !== t.adserverTargeting[e];
                            })
                          )
                        );
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(n, t)
              : (function (e, t) {
                  if (!0 !== o.b.getConfig('targetingControls.alwaysIncludeDeals')) return [];
                  const n = v.concat(a.a);
                  return S(t, s.getHighestCpm)
                    .map(function (t) {
                      if (t.dealId && w(t, e))
                        return p(
                          {},
                          t.adUnitCode,
                          N(
                            t,
                            n.filter(function (e) {
                              return void 0 !== t.adserverTargeting[e];
                            })
                          )
                        );
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(n, t)
          );
        r.map(function (t) {
          Object.keys(t).map(function (e) {
            t[e].map(function (e) {
              y.indexOf(Object.keys(e)[0]) === -1 && (y = Object.keys(e).concat(y));
            });
          });
        }),
          (r = (function (e) {
            return e
              .map(function (e) {
                return p(
                  {},
                  Object.keys(e)[0],
                  e[Object.keys(e)[0]]
                    .map(function (e) {
                      return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(', '));
                    })
                    .reduce(function (e, t) {
                      return l(t, e);
                    }, {})
                );
              })
              .reduce(function (e, t) {
                const n = Object.keys(t)[0];
                return (e[n] = { ...e[n], ...t[n] }), e;
              }, {});
          })(r));
        const i = o.b.getConfig('targetingControls.auctionKeyMaxChars');
        return (
          i &&
            (Object(s.logInfo)(
              "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                i,
                ' characters.  Running checks on auction keys...'
              )
            ),
            (r = (function (e, c) {
              const u = Object(s.deepClone)(e);
              return Object.keys(u)
                .map(function (e) {
                  return { adUnitCode: e, adUnitTargeting: u[e] };
                })
                .sort(E)
                .reduce(function (e, t, n, r) {
                  let i = (function (n) {
                    return Object.keys(n).reduce(function (e, t) {
                      return e + ''.concat(t, '%3d').concat(encodeURIComponent(n[t]), '%26');
                    }, '');
                  })(t.adUnitTargeting);
                  n + 1 === r.length && (i = i.slice(0, -3));
                  const o = t.adUnitCode;
                  const a = i.length;
                  return (
                    a <= c
                      ? ((c -= a),
                        Object(s.logInfo)(
                          "AdUnit '"
                            .concat(o, "' auction keys comprised of ")
                            .concat(
                              a,
                              ' characters.  Deducted from running threshold; new limit is '
                            )
                            .concat(c),
                          u[o]
                        ),
                        (e[o] = u[o]))
                      : Object(s.logWarn)(
                          "The following keys for adUnitCode '"
                            .concat(
                              o,
                              "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
                            )
                            .concat(a, ', the current allotted amount was ')
                            .concat(c, '.\n'),
                          u[o]
                        ),
                    n + 1 === r.length &&
                      Object.keys(e).length === 0 &&
                      Object(s.logError)(
                        'No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.'
                      ),
                    e
                  );
                }, {});
            })(r, i))),
          n.forEach(function (e) {
            r[e] || (r[e] = {});
          }),
          r
        );
      }),
      (T.setTargetingForGPT = function (i, e) {
        window.googletag
          .pubads()
          .getSlots()
          .forEach(function (r) {
            Object.keys(i)
              .filter(e ? e(r) : Object(s.isAdUnitCodeMatchingSlot)(r))
              .forEach(function (n) {
                return Object.keys(i[n]).forEach(function (t) {
                  let e = i[n][t].split(',');
                  (e = e.length > 1 ? [e] : e)
                    .map(function (e) {
                      return (
                        g.logMessage(
                          'Attempting to set key value for slot: '
                            .concat(r.getSlotElementId(), ' key: ')
                            .concat(t, ' value: ')
                            .concat(e)
                        ),
                        e
                      );
                    })
                    .forEach(function (e) {
                      r.setTargeting(t, e);
                    });
                });
              });
          });
      }),
      (T.getWinningBids = function (e) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C();
        const t = j(e);
        return n
          .filter(function (e) {
            return d()(t, e.adUnitCode);
          })
          .filter(function (e) {
            return e.cpm > 0;
          })
          .map(function (e) {
            return e.adUnitCode;
          })
          .filter(s.uniques)
          .map(function (t) {
            return n
              .filter(function (e) {
                return e.adUnitCode === t ? e : null;
              })
              .reduce(s.getHighestCpm);
          });
      }),
      (T.setTargetingForAst = function (e) {
        const r = T.getAllTargeting(e);
        try {
          T.resetPresetTargetingAST(e);
        } catch (e) {
          g.logError(`unable to reset targeting for AST${e}`);
        }
        Object.keys(r).forEach(function (n) {
          return Object.keys(r[n]).forEach(function (e) {
            if (
              (g.logMessage(
                'Attempting to set targeting for targetId: '
                  .concat(n, ' key: ')
                  .concat(e, ' value: ')
                  .concat(r[n][e])
              ),
              g.isStr(r[n][e]) || g.isArray(r[n][e]))
            ) {
              const t = {};
              e.search(/pt[0-9]/) < 0 ? (t[e.toUpperCase()] = r[n][e]) : (t[e] = r[n][e]),
                window.apntag.setKeywords(n, t, { overrideKeyValue: !0 });
            }
          });
        });
      }),
      (T.isApntagDefined = function () {
        if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0;
      }),
      T);
    function w(e, t) {
      return (
        e.adserverTargeting &&
        t &&
        ((g.isArray(t) && d()(t, e.adUnitCode)) || (typeof t === 'string' && e.adUnitCode === t))
      );
    }
    function j(e) {
      return typeof e === 'string' ? [e] : g.isArray(e) ? e : A.getAdUnitCodes() || [];
    }
    function C() {
      let e = A.getBidsReceived();
      return (
        o.b.getConfig('useBidCache') ||
          (e = e.filter(function (e) {
            return O[e.adUnitCode] === e.auctionId;
          })),
        S(
          (e = e
            .filter(function (e) {
              return Object(s.deepAccess)(e, 'video.context') !== c.a;
            })
            .filter(function (e) {
              return e.mediaType !== 'banner' || Object(i.c)([e.width, e.height]);
            })
            .filter(m)
            .filter(h)),
          s.getOldestHighestCpmBid
        )
      );
    }
    function _() {
      return A.getStandardBidderAdServerTargeting()
        .map(function (e) {
          return e.key;
        })
        .concat(v)
        .filter(s.uniques);
    }
    function U(t, n, e, r) {
      return (
        Object.keys(n.adserverTargeting)
          .filter(B())
          .forEach(function (e) {
            t.length &&
              t
                .filter(
                  (function (t) {
                    return function (e) {
                      return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t];
                    };
                  })(e)
                )
                .forEach(
                  (function (t) {
                    return function (e) {
                      g.isArray(e.adserverTargeting[t]) ||
                        (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                        (e.adserverTargeting[t] = e.adserverTargeting[t]
                          .concat(n.adserverTargeting[t])
                          .filter(s.uniques)),
                        delete n.adserverTargeting[t];
                    };
                  })(e)
                );
          }),
        t.push(n),
        t
      );
    }
    function B() {
      const t = _().concat(a.a);
      return function (e) {
        return t.indexOf(e) === -1;
      };
    }
    function R(t) {
      return p(
        {},
        t.adUnitCode,
        Object.keys(t.adserverTargeting)
          .filter(B())
          .map(function (e) {
            return p({}, e.substring(0, 20), [t.adserverTargeting[e]]);
          })
      );
    }
    function N(t, e) {
      return e.map(function (e) {
        return p({}, ''.concat(e, '_').concat(t.bidderCode).substring(0, 20), [
          t.adserverTargeting[e],
        ]);
      });
    }
  },
  65(e, t, n) {
    const r = n(137)(!0);
    n(51)(
      String,
      'String',
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        let e;
        const t = this._t;
        const n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  66(e, t, r) {
    function i() {}
    const o = r(29);
    const a = r(140);
    const c = r(67);
    const u = r(52)('IE_PROTO');
    const s = 'prototype';
    var d = function () {
      let e;
      const t = r(55)('iframe');
      let n = c.length;
      for (
        t.style.display = 'none',
          r(143).appendChild(t),
          t.src = 'javascript:',
          (e = t.contentWindow.document).open(),
          e.write('<script>document.F=Object</script>'),
          e.close(),
          d = e.F;
        n--;

      )
        delete d[s][c[n]];
      return d();
    };
    e.exports =
      Object.create ||
      function (e, t) {
        let n;
        return (
          e !== null ? ((i[s] = o(e)), (n = new i()), (i[s] = null), (n[u] = e)) : (n = d()),
          void 0 === t ? n : a(n, t)
        );
      };
  },
  666(e, t, n) {
    e.exports = n(63);
  },
  67(e, t) {
    e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    );
  },
  68(e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  69(e, t, n) {
    const i = n(21);
    e.exports = function (e, t, n) {
      for (const r in t) n && e[r] ? (e[r] = t[r]) : i(e, r, t[r]);
      return e;
    };
  },
  7(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'gdprDataHandler', function () {
        return B;
      }),
      (t.setS2STestingModule = function (e) {
        O = e;
      });
    const h = n(0);
    const p = n(60);
    const g = n(25);
    const u = n(1);
    const m = n(5);
    const y = n(3);
    const r = n(10);
    const S = n.n(r);
    const i = n(12);
    const v = n.n(i);
    const b = n(61);
    const E = n(49);
    function A(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              Object.prototype.toString.call(e) === '[object Arguments]'
            )
          )
            return;
          const n = [];
          let r = !0;
          let i = !1;
          let o = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || c.return == null || c.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        })()
      );
    }
    function T() {
      return (T =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    let O;
    const I = n(0);
    const w = n(4);
    const j = n(8);
    const s = {};
    const C = (s.bidderRegistry = {});
    const d = (s.aliasRegistry = {});
    let _ = {};
    y.b.getConfig('s2sConfig', function (e) {
      _ = e.s2sConfig;
    });
    const o = {};
    function U(e) {
      const i = e.bidderCode;
      const s = e.auctionId;
      const d = e.bidderRequestId;
      const t = e.adUnits;
      const f = e.labels;
      const l = e.src;
      return t
        .reduce(function (e, c) {
          const t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes);
          const n = t.active;
          const u = t.mediaTypes;
          const r = t.filterResults;
          return (
            n
              ? r &&
                I.logInfo(
                  'Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '),
                  r.before,
                  'to ',
                  r.after
                )
              : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')),
            n &&
              e.push(
                c.bids
                  .filter(function (e) {
                    return e.bidder === i;
                  })
                  .reduce(function (e, t) {
                    const n = c.nativeParams || I.deepAccess(c, 'mediaTypes.native');
                    n && (t = { ...t, nativeParams: Object(g.g)(n) }),
                      (t = { ...t, ...Object(h.getDefinedParams)(c, ['mediaType', 'renderer']) });
                    const r = Object(p.b)(Object(p.a)(t, f), u);
                    const i = r.active;
                    const o = r.mediaTypes;
                    const a = r.filterResults;
                    return (
                      i
                        ? a &&
                          I.logInfo(
                            'Size mapping filtered adUnit "'
                              .concat(c.code, '" bidder "')
                              .concat(t.bidder, '" banner sizes from '),
                            a.before,
                            'to ',
                            a.after
                          )
                        : I.logInfo(
                            'Size mapping deactivated adUnit "'
                              .concat(c.code, '" bidder "')
                              .concat(t.bidder, '"')
                          ),
                      I.isValidMediaTypes(o)
                        ? (t = { ...t, mediaTypes: o })
                        : I.logError(
                            'mediaTypes is not correctly configured for adunit '.concat(c.code)
                          ),
                      i &&
                        e.push({
                          ...t,
                          adUnitCode: c.code,
                          transactionId: c.transactionId,
                          sizes:
                            I.deepAccess(o, 'banner.sizes') ||
                            I.deepAccess(o, 'video.playerSize') ||
                            [],
                          bidId: t.bid_id || I.getUniqueIdentifierStr(),
                          bidderRequestId: d,
                          auctionId: s,
                          src: l,
                          bidRequestsCount: b.a.getCounter(c.code),
                        }),
                      e
                    );
                  }, [])
              ),
            e
          );
        }, [])
        .reduce(h.flatten, [])
        .filter(function (e) {
          return e !== '';
        });
    }
    var B = {
      consentData: null,
      setConsentData(e) {
        B.consentData = e;
      },
      getConsentData() {
        return B.consentData;
      },
    };
    function R() {
      return _ && _.enabled && _.testing && O;
    }
    function a(t, n, e) {
      try {
        const r = C[t].getSpec();
        r &&
          r[n] &&
          typeof r[n] === 'function' &&
          (I.logInfo('Invoking '.concat(t, '.').concat(n)), r[n](e));
      } catch (e) {
        I.logWarn('Error calling '.concat(n, ' of ').concat(t));
      }
    }
    (s.makeBidRequests = function (e, i, o, a, c) {
      const u = [];
      let t = Object(h.getBidderCodes)(e);
      y.b.getConfig('bidderSequence') === y.a && (t = Object(h.shuffle)(t));
      let n;
      const s = Object(E.b)();
      let r = t;
      let d = [];
      if (_.enabled) {
        if (R()) {
          const f = O.getSourceBidderMap(e);
          d = f[O.CLIENT];
        }
        const l = _.bidders;
        r = t.filter(function (e) {
          return !S()(l, e) || S()(d, e);
        });
        Boolean(R() && _.testServerOnly) &&
          ((n = e),
          Boolean(
            v()(n, function (e) {
              return v()(e.bids, function (e) {
                return (
                  (e.bidSource || (_.bidderControl && _.bidderControl[e.bidder])) &&
                  e.finalSource === O.SERVER
                );
              });
            })
          )) &&
          (r.length = 0);
        const p = (function (e) {
          const t = _.bidders;
          let n = I.deepClone(e);
          return (
            n.forEach(function (e) {
              e.bids = e.bids
                .filter(function (e) {
                  return S()(t, e.bidder) && (!R() || e.finalSource !== O.CLIENT);
                })
                .map(function (e) {
                  return (e.bid_id = I.getUniqueIdentifierStr()), e;
                });
            }),
            (n = n.filter(function (e) {
              return e.bids.length !== 0;
            }))
          );
        })(e);
        const g = I.generateUUID();
        l.forEach(function (e) {
          const t = I.getUniqueIdentifierStr();
          const n = {
            bidderCode: e,
            auctionId: o,
            bidderRequestId: t,
            tid: g,
            bids: U({
              bidderCode: e,
              auctionId: o,
              bidderRequestId: t,
              adUnits: I.deepClone(p),
              labels: c,
              src: w.S2S.SRC,
            }),
            auctionStart: i,
            timeout: _.timeout,
            src: w.S2S.SRC,
            refererInfo: s,
          };
          n.bids.length !== 0 && u.push(n);
        }),
          p.forEach(function (e) {
            const t = e.bids.filter(function (t) {
              return v()(u, function (e) {
                return v()(e.bids, function (e) {
                  return e.bidId === t.bid_id;
                });
              });
            });
            e.bids = t;
          }),
          u.forEach(function (e) {
            e.adUnitsS2SCopy = p.filter(function (e) {
              return e.bids.length > 0;
            });
          });
      }
      const b = (function (e) {
        let t = I.deepClone(e);
        return (
          t.forEach(function (e) {
            e.bids = e.bids.filter(function (e) {
              return !R() || e.finalSource !== O.SERVER;
            });
          }),
          (t = t.filter(function (e) {
            return e.bids.length !== 0;
          }))
        );
      })(e);
      return (
        r.forEach(function (e) {
          const t = I.getUniqueIdentifierStr();
          const n = {
            bidderCode: e,
            auctionId: o,
            bidderRequestId: t,
            bids: U({
              bidderCode: e,
              auctionId: o,
              bidderRequestId: t,
              adUnits: I.deepClone(b),
              labels: c,
              src: 'client',
            }),
            auctionStart: i,
            timeout: a,
            refererInfo: s,
          };
          const r = C[e];
          r || I.logError('Trying to make a request for bidder that does not exist: '.concat(e)),
            r && n.bids && n.bids.length !== 0 && u.push(n);
        }),
        B.getConsentData() &&
          u.forEach(function (e) {
            e.gdprConsent = B.getConsentData();
          }),
        u
      );
    }),
      (s.callBids = function (e, t, r, i, o, a, c) {
        if (t.length) {
          const n = A(
            t.reduce(
              function (e, t) {
                return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e;
              },
              [[], []]
            ),
            2
          );
          const u = n[0];
          const s = n[1];
          if (s.length) {
            const d = Object(m.b)(
              a,
              o ? { request: o.request.bind(null, 's2s'), done: o.done } : void 0
            );
            const f = _.bidders;
            const l = C[_.adapter];
            const p = s[0].tid;
            const g = s[0].adUnitsS2SCopy;
            if (l) {
              const b = { tid: p, ad_units: g };
              if (b.ad_units.length) {
                const y = s.map(function (e) {
                  return (e.start = Object(h.timestamp)()), i.bind(e);
                });
                const v = b.ad_units.reduce(function (e, t) {
                  return e.concat(
                    (t.bids || []).reduce(function (e, t) {
                      return e.concat(t.bidder);
                    }, [])
                  );
                }, []);
                I.logMessage(
                  'CALLING S2S HEADER BIDDERS ==== '.concat(
                    f
                      .filter(function (e) {
                        return S()(v, e);
                      })
                      .join(',')
                  )
                ),
                  s.forEach(function (e) {
                    j.emit(w.EVENTS.BID_REQUESTED, e);
                  }),
                  l.callBids(
                    b,
                    s,
                    function (e, t) {
                      const n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                      n && r.call(n, e, t);
                    },
                    function () {
                      return y.forEach(function (e) {
                        return e();
                      });
                    },
                    d
                  );
              }
            }
          }
          u.forEach(function (e) {
            e.start = Object(h.timestamp)();
            const t = C[e.bidderCode];
            I.logMessage('CALLING BIDDER ======= '.concat(e.bidderCode)),
              j.emit(w.EVENTS.BID_REQUESTED, e);
            const n = Object(m.b)(
              a,
              o ? { request: o.request.bind(null, e.bidderCode), done: o.done } : void 0
            );
            t.callBids(e, r.bind(e), i.bind(e), n, c);
          });
        } else
          I.logWarn(
            'callBids executed with no bidRequests.  Were they filtered by labels or sizing?'
          );
      }),
      (s.videoAdapters = []),
      (s.registerBidAdapter = function (e, t) {
        const n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
          .supportedMediaTypes;
        const r = void 0 === n ? [] : n;
        e && t
          ? typeof e.callBids === 'function'
            ? ((C[t] = e),
              S()(r, 'video') && s.videoAdapters.push(t),
              S()(r, 'native') && g.e.push(t))
            : I.logError(
                `Bidder adaptor error for bidder code: ${t}bidder must implement a callBids() function`
              )
          : I.logError('bidAdaptor or bidderCode not specified');
      }),
      (s.aliasBidAdapter = function (t, e) {
        if (void 0 === C[e]) {
          const n = C[t];
          if (void 0 === n) {
            const r = y.b.getConfig('s2sConfig');
            const i = r && r.bidders;
            i && S()(i, e)
              ? (d[e] = t)
              : I.logError(
                  `bidderCode "${t}" is not an existing bidder.`,
                  'adapterManager.aliasBidAdapter'
                );
          } else
            try {
              let o;
              const a = (function (e) {
                const t = [];
                return (
                  S()(s.videoAdapters, e) && t.push('video'), S()(g.e, e) && t.push('native'), t
                );
              })(t);
              if (n.constructor.prototype != Object.prototype)
                (o = new n.constructor()).setBidderCode(e);
              else {
                const c = n.getSpec();
                (o = Object(u.newBidder)({ ...c, code: e })), (d[e] = t);
              }
              s.registerBidAdapter(o, e, { supportedMediaTypes: a });
            } catch (e) {
              I.logError(
                `${t} bidder does not currently support aliasing.`,
                'adapterManager.aliasBidAdapter'
              );
            }
        } else I.logMessage(`alias name "${e}" has been already specified.`);
      }),
      (s.registerAnalyticsAdapter = function (e) {
        const t = e.adapter;
        const n = e.code;
        t && n
          ? typeof t.enableAnalytics === 'function'
            ? ((t.code = n), (o[n] = t))
            : I.logError(
                'Prebid Error: Analytics adaptor error for analytics "'.concat(
                  n,
                  '"\n        analytics adapter must implement an enableAnalytics() function'
                )
              )
          : I.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
      }),
      (s.enableAnalytics = function (e) {
        I.isArray(e) || (e = [e]),
          I._each(e, function (e) {
            const t = o[e.provider];
            t
              ? t.enableAnalytics(e)
              : I.logError(
                  'Prebid Error: no analytics adapter found in registry for\n        '.concat(
                    e.provider,
                    '.'
                  )
                );
          });
      }),
      (s.getBidAdapter = function (e) {
        return C[e];
      }),
      (s.callTimedOutBidders = function (t, n, r) {
        (n = n.map(function (e) {
          return (
            (e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder)), (e.timeout = r), e
          );
        })),
          (n = I.groupBy(n, 'bidder')),
          Object.keys(n).forEach(function (e) {
            a(e, 'onTimeout', n[e]);
          });
      }),
      (s.callBidWonBidder = function (e, t, n) {
        (t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder)), a(e, 'onBidWon', t);
      }),
      (s.callSetTargetingBidder = function (e, t) {
        a(e, 'onSetTargeting', t);
      }),
      (t.default = s);
  },
  70(e, t) {
    e.exports = function (e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(`${n}: incorrect invocation!`);
      return e;
    };
  },
  71(e, t, n) {
    const o = n(29);
    e.exports = function (t, e, n, r) {
      try {
        return r ? e(o(n)[0], n[1]) : e(n);
      } catch (e) {
        const i = t.return;
        throw (void 0 !== i && o(i.call(t)), e);
      }
    };
  },
  72(e, t, n) {
    const r = n(32);
    const i = n(14)('iterator');
    const o = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || o[i] === e);
    };
  },
  73(e, t, n) {
    const r = n(74);
    const i = n(14)('iterator');
    const o = n(32);
    e.exports = n(16).getIteratorMethod = function (e) {
      if (e != null) return e[i] || e['@@iterator'] || o[r(e)];
    };
  },
  74(e, t, n) {
    const i = n(34);
    const o = n(14)('toStringTag');
    const a =
      i(
        (function () {
          return arguments;
        })()
      ) == 'Arguments';
    e.exports = function (e) {
      let t;
      let n;
      let r;
      return void 0 === e
        ? 'Undefined'
        : e === null
        ? 'Null'
        : typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), o)) === 'string'
        ? n
        : a
        ? i(t)
        : (r = i(t)) == 'Object' && typeof t.callee === 'function'
        ? 'Arguments'
        : r;
    };
  },
  75(e, t, n) {
    function r(e) {
      c(e, i, { value: { i: `O${++u}`, w: {} } });
    }
    var i = n(47)('meta');
    const o = n(18);
    const a = n(30);
    var c = n(20).f;
    var u = 0;
    const s =
      Object.isExtensible ||
      function () {
        return !0;
      };
    const d = !n(33)(function () {
      return s(Object.preventExtensions({}));
    });
    var f = (e.exports = {
      KEY: i,
      NEED: !1,
      fastKey(e, t) {
        if (!o(e)) return typeof e === 'symbol' ? e : (typeof e === 'string' ? 'S' : 'P') + e;
        if (!a(e, i)) {
          if (!s(e)) return 'F';
          if (!t) return 'E';
          r(e);
        }
        return e[i].i;
      },
      getWeak(e, t) {
        if (!a(e, i)) {
          if (!s(e)) return !0;
          if (!t) return !1;
          r(e);
        }
        return e[i].w;
      },
      onFreeze(e) {
        return d && f.NEED && s(e) && !a(e, i) && r(e), e;
      },
    });
  },
  76(e, t, n) {
    const r = n(18);
    e.exports = function (e, t) {
      if (!r(e) || e._t !== t) throw TypeError(`Incompatible receiver, ${t} required!`);
      return e;
    };
  },
  77(e, t, n) {
    t.a = function (t, n) {
      (o.adServers = o.adServers || {}),
        (o.adServers[t] = o.adServers[t] || {}),
        Object.keys(n).forEach(function (e) {
          o.adServers[t][e]
            ? Object(i.logWarn)(
                'Attempting to add an already registered function property '
                  .concat(e, ' for AdServer ')
                  .concat(t, '.')
              )
            : (o.adServers[t][e] = n[e]);
        });
    };
    const r = n(27);
    var i = n(0);
    var o = Object(r.a)();
  },
  8(e, t, n) {
    function r() {
      return (r =
        Object.assign ||
        function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    let c;
    let i;
    const u = n(0);
    const o = n(4);
    const a = Array.prototype.slice;
    const s = Array.prototype.push;
    const d = u._map(o.EVENTS, function (e) {
      return e;
    });
    const f = o.EVENT_ID_PATHS;
    const l = [];
    e.exports =
      ((c = {}),
      ((i = {}).on = function (e, t, n) {
        if (
          (function (e) {
            return u.contains(d, e);
          })(e)
        ) {
          const r = c[e] || { que: [] };
          n ? ((r[n] = r[n] || { que: [] }), r[n].que.push(t)) : r.que.push(t), (c[e] = r);
        } else u.logError(`Wrong event name : ${e} Valid event names :${d}`);
      }),
      (i.emit = function (e) {
        !(function (e, t) {
          u.logMessage(`Emitting event for: ${e}`);
          const n = t[0] || {};
          const r = n[f[e]];
          const i = c[e] || { que: [] };
          const o = u._map(i, function (e, t) {
            return t;
          });
          const a = [];
          l.push({ eventType: e, args: n, id: r }),
            r && u.contains(o, r) && s.apply(a, i[r].que),
            s.apply(a, i.que),
            u._each(a, function (e) {
              if (e)
                try {
                  e.apply(null, t);
                } catch (e) {
                  u.logError('Error executing handler:', 'events.js', e);
                }
            });
        })(e, a.call(arguments, 1));
      }),
      (i.off = function (e, n, r) {
        const i = c[e];
        u.isEmpty(i) ||
          (u.isEmpty(i.que) && u.isEmpty(i[r])) ||
          (r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que))) ||
          (r
            ? u._each(i[r].que, function (e) {
                const t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1);
              })
            : u._each(i.que, function (e) {
                const t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1);
              }),
          (c[e] = i));
      }),
      (i.get = function () {
        return c;
      }),
      (i.getEvents = function () {
        const n = [];
        return (
          u._each(l, function (e) {
            const t = { ...e };
            n.push(t);
          }),
          n
        );
      }),
      i);
  },
  80(e, t, n) {
    const r = n(15);
    const i = n(44)(5);
    const o = 'find';
    let a = !0;
    o in [] &&
      Array(1)[o](function () {
        a = !1;
      }),
      r(r.P + r.F * a, 'Array', {
        find(e, t) {
          return i(this, e, arguments.length > 1 ? t : void 0);
        },
      }),
      n(37)(o);
  },
  81(e, t, n) {
    e.exports =
      !n(22) &&
      !n(33)(function () {
        return (
          Object.defineProperty(n(55)('div'), 'a', {
            get() {
              return 7;
            },
          }).a != 7
        );
      });
  },
  82(e, t, n) {
    const i = n(18);
    e.exports = function (e, t) {
      if (!i(e)) return e;
      let n;
      let r;
      if (t && typeof (n = e.toString) === 'function' && !i((r = n.call(e)))) return r;
      if (typeof (n = e.valueOf) === 'function' && !i((r = n.call(e)))) return r;
      if (!t && typeof (n = e.toString) === 'function' && !i((r = n.call(e)))) return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  83(e, t, n) {
    const r = n(84);
    e.exports = function (e, t) {
      return new (r(e))(t);
    };
  },
  84(e, t, n) {
    const r = n(18);
    const i = n(85);
    const o = n(14)('species');
    e.exports = function (e) {
      let t;
      return (
        i(e) &&
          (typeof (t = e.constructor) !== 'function' ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && (t = t[o]) === null && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  85(e, t, n) {
    const r = n(34);
    e.exports =
      Array.isArray ||
      function (e) {
        return r(e) == 'Array';
      };
  },
  86(e, t, n) {
    const r = n(15);
    const i = n(59)(!0);
    r(r.P, 'Array', {
      includes(e, t) {
        return i(this, e, arguments.length > 1 ? t : void 0);
      },
    }),
      n(37)('includes');
  },
  87(e, t, n) {
    const r = n(46);
    const i = Math.max;
    const o = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
    };
  },
  88(e, t) {
    e.exports = function e(t) {
      const n = Array.isArray(t) ? [] : {};
      for (const r in t) {
        const i = t[r];
        n[r] = i && typeof i === 'object' ? e(i) : i;
      }
      return n;
    };
  },
  89(e, t, n) {
    t.a = function (e, t, n, r, i) {
      for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
      return e === i ? n : e;
    };
  },
  9(e, t, n) {
    function o(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              Object.prototype.toString.call(e) === '[object Arguments]'
            )
          )
            return;
          const n = [];
          let r = !0;
          let i = !1;
          let o = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || c.return == null || c.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        })()
      );
    }
    function i(e) {
      return e
        ? e
            .replace(/^\?/, '')
            .split('&')
            .reduce(function (e, t) {
              const n = o(t.split('='), 2);
              let r = n[0];
              const i = n[1];
              return (
                /\[\]$/.test(r)
                  ? ((e[(r = r.replace('[]', ''))] = e[r] || []), e[r].push(i))
                  : (e[r] = i || ''),
                e
              );
            }, {})
        : {};
    }
    function r(e) {
      return Object.keys(e)
        .map(function (t) {
          return Array.isArray(e[t])
            ? e[t]
                .map(function (e) {
                  return ''.concat(t, '[]=').concat(e);
                })
                .join('&')
            : ''.concat(t, '=').concat(e[t]);
        })
        .join('&');
    }
    (t.d = i),
      (t.b = r),
      (t.c = function (e, t) {
        const n = document.createElement('a');
        t && 'noDecodeWholeURL' in t && t.noDecodeWholeURL
          ? (n.href = e)
          : (n.href = decodeURIComponent(e));
        const r = t && 'decodeSearchAsString' in t && t.decodeSearchAsString;
        return {
          href: n.href,
          protocol: (n.protocol || '').replace(/:$/, ''),
          hostname: n.hostname,
          port: +n.port,
          pathname: n.pathname.replace(/^(?!\/)/, '/'),
          search: r ? n.search : i(n.search || ''),
          hash: (n.hash || '').replace(/^#/, ''),
          host: n.host || window.location.host,
        };
      }),
      (t.a = function (e) {
        return `${e.protocol || 'http'}://${
          e.host || e.hostname + (e.port ? ':'.concat(e.port) : '')
        }${e.pathname || ''}${e.search ? '?'.concat(r(e.search || '')) : ''}${
          e.hash ? '#'.concat(e.hash) : ''
        }`;
      });
  },
  90(e, t, n) {
    t.a = function (e, t, n) {
      t.split && (t = t.split('.'));
      for (var r, i = 0, o = t.length, a = e; i < o; ++i)
        (r = a[t[i]]),
          (a = a[t[i]] =
            i === o - 1 ? n : r != null ? r : !~t[i + 1].indexOf('.') && +t[i + 1] > -1 ? [] : {});
    };
  },
  91(e, t) {
    (h.SYNC = 1), (h.ASYNC = 2), (h.QUEUE = 4);
    const g = 'fun-hooks';
    const n = Object.freeze({ useProxy: !0, ready: 0 });
    const b = new WeakMap();
    const r =
      [1]
        .reduce(function (e, t, n) {
          return [e, t, n];
        }, 2)
        .toString() === '2,1,0'
        ? Array.prototype.reduce
        : function (e, t) {
            let n;
            const r = Object(this);
            const i = r.length >>> 0;
            let o = 0;
            if (t) n = t;
            else {
              for (; o < i && !(o in r); ) o++;
              n = r[o++];
            }
            for (; o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
            return n;
          };
    function y(e, t) {
      return Array.prototype.slice.call(e, t);
    }
    const v =
      Object.assign ||
      function (e) {
        return r.call(
          y(arguments, 1),
          function (t, n) {
            return (
              n &&
                Object.keys(n).forEach(function (e) {
                  t[e] = n[e];
                }),
              t
            );
          },
          e
        );
      };
    function h(u) {
      let s;
      const e = {};
      const d = [];
      function t(e, t) {
        return typeof e === 'function'
          ? f.call(null, 'sync', e, t)
          : typeof e === 'string' && typeof t === 'function'
          ? f.apply(null, arguments)
          : typeof e === 'object'
          ? function (o, e, a) {
              let t = !0;
              void 0 === e && ((e = Object.getOwnPropertyNames(o)), (t = !1));
              const c = {};
              const n = ['constructor'];
              for (
                ;
                (e = e.filter(function (e) {
                  return !(typeof o[e] !== 'function' || n.indexOf(e) !== -1 || e.match(/^_/));
                })).forEach(function (e) {
                  const t = e.split(':');
                  const n = t[0];
                  const r = t[1] || 'sync';
                  if (!c[n]) {
                    const i = o[n];
                    c[n] = o[n] = f(r, i, a ? [a, n] : void 0);
                  }
                }),
                  (o = Object.getPrototypeOf(o)),
                  t && o;

              );
              return c;
            }.apply(null, arguments)
          : void 0;
      }
      function l(o) {
        const a = Array.isArray(o) ? o : o.split('.');
        return r.call(
          a,
          function (t, n, e) {
            const r = t[n];
            let i = !1;
            return (
              r ||
              (e === a.length - 1
                ? (s ||
                    d.push(function () {
                      i || console.warn(`${g}: referenced '${o}' but it was never created`);
                    }),
                  (t[n] = p(function (e) {
                    (t[n] = e), (i = !0);
                  })))
                : (t[n] = {}))
            );
          },
          e
        );
      }
      function p(r) {
        const o = [];
        const a = [];
        let c = function () {};
        const e = {
          before(e, t) {
            return n.call(this, o, 'before', e, t);
          },
          after(e, t) {
            return n.call(this, a, 'after', e, t);
          },
          getHooks(n) {
            let e = o.concat(a);
            return (
              typeof n === 'object' &&
                (e = e.filter(function (t) {
                  return Object.keys(n).every(function (e) {
                    return t[e] === n[e];
                  });
                })),
              v(e, {
                remove() {
                  return (
                    e.forEach(function (e) {
                      e.remove();
                    }),
                    this
                  );
                },
              })
            );
          },
          removeAll() {
            return this.getHooks().remove();
          },
        };
        const t = {
          install(e, t, n) {
            (this.type = e), (c = n)(o, a), r && r(t);
          },
        };
        return b.set(e.after, t), e;
        function n(t, e, n, r) {
          var i = {
            hook: n,
            type: e,
            priority: r || 10,
            remove() {
              const e = t.indexOf(i);
              e !== -1 && (t.splice(e, 1), c(o, a));
            },
          };
          return (
            t.push(i),
            t.sort(function (e, t) {
              return t.priority - e.priority;
            }),
            c(o, a),
            this
          );
        }
      }
      function f(f, e, t) {
        const n = e.after && b.get(e.after);
        if (n) {
          if (n.type !== f) throw `${g}: recreated hookable with different type`;
          return e;
        }
        let r;
        let i;
        const o = t ? l(t) : p();
        const a = {
          get(e, t) {
            return o[t] || Reflect.get.apply(Reflect, arguments);
          },
        };
        return (
          s || d.push(c),
          u.useProxy && typeof Proxy === 'function' && Proxy.revocable
            ? (i = new Proxy(e, a))
            : v(
                (i = function () {
                  return a.apply ? a.apply(e, this, y(arguments)) : e.apply(this, arguments);
                }),
                o
              ),
          b.get(i.after).install(f, i, function (e, t) {
            let s;
            const d = [];
            r =
              e.length || t.length
                ? (e.forEach(n),
                  (s = d.push(void 0) - 1),
                  t.forEach(n),
                  function (n, r, e) {
                    let i;
                    let o = 0;
                    const a = f === 'async' && typeof e[e.length - 1] === 'function' && e.pop();
                    function c(e) {
                      f === 'sync' ? (i = e) : a && a.apply(null, arguments);
                    }
                    function u(e) {
                      if (d[o]) {
                        const t = y(arguments);
                        return (u.bail = c), t.unshift(u), d[o++].apply(r, t);
                      }
                      f === 'sync' ? (i = e) : a && a.apply(null, arguments);
                    }
                    return (
                      (d[s] = function () {
                        const e = y(arguments, 1);
                        f === 'async' && a && (delete u.bail, e.push(u));
                        const t = n.apply(r, e);
                        f === 'sync' && u(t);
                      }),
                      u.apply(null, e),
                      i
                    );
                  })
                : void 0;
            function n(e) {
              d.push(e.hook);
            }
            c();
          }),
          i
        );
        function c() {
          !s && (f !== 'sync' || u.ready & h.SYNC) && (f !== 'async' || u.ready & h.ASYNC)
            ? f !== 'sync' && u.ready & h.QUEUE
              ? (a.apply = function () {
                  const e = arguments;
                  d.push(function () {
                    i.apply(e[1], e[2]);
                  });
                })
              : (a.apply = function () {
                  throw `${g}: hooked function not ready`;
                })
            : (a.apply = r);
        }
      }
      return (
        (u = { ...n, ...u }).ready
          ? (t.ready = function () {
              (s = !0),
                (function (e) {
                  for (var t; (t = e.shift()); ) t();
                })(d);
            })
          : (s = !0),
        (t.get = l),
        t
      );
    }
    e.exports = h;
  },
});
pbjsChunk(
  [255],
  {
    114(e, r, n) {
      e.exports = n(115);
    },
    115(e, r, n) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        n.d(r, 'spec', function () {
          return m;
        });
      const u = n(0);
      const a = n(2);
      const t = n(1);
      const i = n(12);
      const o = n.n(i);
      const d = n(10);
      const c = n.n(d);
      const s = n(9);
      const p = [
        'mimes',
        'minduration',
        'maxduration',
        'protocols',
        'startdelay',
        'linearity',
        'boxingallowed',
        'playbackmethod',
        'delivery',
        'pos',
        'api',
        'ext',
      ];
      var m = {
        code: 'adkernel',
        aliases: ['headbidding', 'adsolut', 'oftmediahb', 'audiencemedia'],
        supportedMediaTypes: [a.b, a.d],
        isBidRequestValid(e) {
          return (
            'params' in e &&
            void 0 !== e.params.host &&
            'zoneId' in e.params &&
            !isNaN(Number(e.params.zoneId)) &&
            e.params.zoneId > 0 &&
            e.mediaTypes &&
            (e.mediaTypes.banner || e.mediaTypes.video)
          );
        },
        buildRequests(e, t) {
          const a = (function (o, e) {
            const r = e && e.referer.indexOf('https:') === 0;
            return o
              .map(function (e) {
                return (function (r, e) {
                  const n = { id: r.bidId, tagid: r.adUnitCode };
                  if (u.deepAccess(r, 'mediaTypes.banner')) {
                    const t = f(r.mediaTypes.banner.sizes);
                    n.banner = {
                      format: t.map(function (e) {
                        return u.parseGPTSingleSizeArrayToRtbSize(e);
                      }),
                      topframe: 0,
                    };
                  } else if (u.deepAccess(r, 'mediaTypes.video')) {
                    const a = f(r.mediaTypes.video.playerSize)[0];
                    (n.video = u.parseGPTSingleSizeArrayToRtbSize(a)),
                      r.params.video &&
                        Object.keys(r.params.video)
                          .filter(function (e) {
                            return c()(p, e);
                          })
                          .forEach(function (e) {
                            return (n.video[e] = r.params.video[e]);
                          });
                  }
                  e && (n.secure = 1);
                  return n;
                })(e, r);
              })
              .reduce(function (e, r, n) {
                const t = o[n];
                const a = t.params.zoneId;
                const i = t.params.host;
                return (e[i] = e[i] || {}), (e[i][a] = e[i][a] || []), e[i][a].push(r), e;
              }, {});
          })(e, t.refererInfo);
          const i = t.gdprConsent;
          const o = t.auctionId;
          const d = [];
          return (
            Object.keys(a).forEach(function (n) {
              Object.keys(a[n]).forEach(function (e) {
                const r = (function (e, r, n, t) {
                  const a = {
                    id: r,
                    imp: e,
                    site: (function (e) {
                      const r = Object(s.c)(e.referer);
                      const n = {
                        domain: r.hostname,
                        page: `${r.protocol}://${r.hostname}${r.pathname}`,
                      };
                      self === top && document.referrer && (n.ref = document.referrer);
                      const t = document.getElementsByTagName('meta').keywords;
                      t && t.content && (n.keywords = t.content);
                      return n;
                    })(t),
                    at: 1,
                    device: {
                      ip: 'caller',
                      ua: 'caller',
                      js: 1,
                      language: (function () {
                        const e = navigator.language ? 'language' : 'userLanguage';
                        return navigator[e].split('-')[0];
                      })(),
                    },
                    ext: { adk_usersync: 1 },
                  };
                  u.getDNT() && (a.device.dnt = 1);
                  n &&
                    void 0 !== n.gdprApplies &&
                    (a.regs = { ext: { gdpr: Number(n.gdprApplies) } });
                  n &&
                    void 0 !== n.consentString &&
                    (a.user = { ext: { consent: n.consentString } });
                  return a;
                })(a[n][e], o, i, t.refererInfo);
                d.push({
                  method: 'POST',
                  url: ''
                    .concat(window.location.protocol, '//')
                    .concat(n, '/hb?zone=')
                    .concat(e, '&v=')
                    .concat('1.3'),
                  data: JSON.stringify(r),
                });
              });
            }),
            d
          );
        },
        interpretResponse(e, r) {
          const n = e.body;
          if (!n.seatbid) return [];
          const t = JSON.parse(r.data);
          return n.seatbid
            .map(function (e) {
              return e.bid;
            })
            .reduce(function (e, r) {
              return e.concat(r);
            }, [])
            .map(function (r) {
              const e = o()(t.imp, function (e) {
                return e.id === r.impid;
              });
              const n = {
                requestId: r.impid,
                cpm: r.price,
                creativeId: r.crid,
                currency: 'USD',
                ttl: 360,
                netRevenue: !0,
              };
              return (
                'banner' in e &&
                  ((n.mediaType = a.b),
                  (n.width = r.w),
                  (n.height = r.h),
                  (n.ad = (function (e) {
                    let r = e.adm;
                    'nurl' in e && (r += u.createTrackPixelHtml(''.concat(e.nurl, '&px=1')));
                    return r;
                  })(r))),
                'video' in e &&
                  ((n.mediaType = a.d),
                  (n.vastUrl = r.nurl),
                  (n.width = e.video.w),
                  (n.height = e.video.h)),
                n
              );
            });
        },
        getUserSyncs(e, r) {
          return e.iframeEnabled && r && r.length !== 0
            ? r
                .filter(function (e) {
                  return e.body && e.body.ext && e.body.ext.adk_usersync;
                })
                .map(function (e) {
                  return e.body.ext.adk_usersync;
                })
                .reduce(function (e, r) {
                  return e.concat(r);
                }, [])
                .map(function (e) {
                  return { type: 'iframe', url: e };
                })
            : [];
        },
      };
      function f(e) {
        return e.length !== 2 || u.isArray(e[0]) ? e : [e];
      }
      Object(t.registerBidder)(m);
    },
  },
  [114]
);
pbjsChunk(
  [236],
  {
    190(e, r, t) {
      e.exports = t(191);
    },
    191(e, r, t) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        t.d(r, 'spec', function () {
          return x;
        });
      const s = t(0);
      const n = t(1);
      const i = t(2);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (let r = 1; r < arguments.length; r++) {
              const t = arguments[r];
              for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a() {
        const e = d(['dcn=', '&pos=', '&cmd=bid', '']);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        const e = d(['', '/bidRequest?']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        const e = d([
          '',
          '/pubapi/3.0/',
          '/',
          '/',
          '/',
          '/ADTECH;v=2;cmd=bid;cors=yes;alias=',
          ';misc=',
          ';',
          '',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d(e, r) {
        return (
          (r = r || e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }))
        );
      }
      const p = { AOL: 'aol', ONEMOBILE: 'onemobile', ONEDISPLAY: 'onedisplay' };
      const l = { GET: 'display-get' };
      const m = { GET: 'mobile-get', POST: 'mobile-post' };
      const f = { TAG: 'iframe', TYPE: 'iframe' };
      const b = { TAG: 'img', TYPE: 'image' };
      const h = E(
        u(),
        'host',
        'network',
        'placement',
        'pageid',
        'sizeid',
        'alias',
        'misc',
        'dynamicParams'
      );
      const v = E(c(), 'host');
      const g = E(a(), 'dcn', 'pos', 'dynamicParams');
      const O = {
        us: 'adserver-us.adtech.advertising.com',
        eu: 'adserver-eu.adtech.advertising.com',
        as: 'adserver-as.adtech.advertising.com',
      };
      const y = 'https';
      const P = 1;
      function E(o) {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        return function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          const i = n[n.length - 1] || {};
          const a = [o[0]];
          return (
            t.forEach(function (e, r) {
              const t = s.isInteger(e) ? n[e] : i[e];
              a.push(t, o[r + 1]);
            }),
            a.join('')
          );
        };
      }
      function I(e) {
        return e === p.AOL || e === p.ONEMOBILE;
      }
      function T(e) {
        if (I(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
          const r = e.params.imp[0];
          return (
            r.id &&
            r.tagid &&
            ((r.banner && r.banner.w && r.banner.h) ||
              (r.video && r.video.mimes && r.video.minduration && r.video.maxduration))
          );
        }
      }
      function S(e) {
        return I(e.bidder) && e.params.dcn && e.params.pos;
      }
      function R(e) {
        return (
          (function (e) {
            return e === p.AOL || e === p.ONEDISPLAY;
          })(e.bidder) &&
          e.params.placement &&
          e.params.network
        );
      }
      var x = {
        code: p.AOL,
        aliases: [p.ONEMOBILE, p.ONEDISPLAY],
        supportedMediaTypes: [i.b],
        isBidRequestValid(e) {
          return (
            R(e) ||
            (function (e) {
              return S(e) || T(e);
            })(e)
          );
        },
        buildRequests(e, r) {
          const t = this;
          const n = r ? r.gdprConsent : null;
          return e.map(function (e) {
            const r = (function (e) {
              return S(e) ? m.GET : T(e) ? m.POST : R(e) ? l.GET : void 0;
            })(e);
            if (r) return t.formatBidRequest(r, e, n);
          });
        },
        interpretResponse(e, r) {
          const t = e.body;
          if (t) {
            const n = this._parseBidResponse(t, r);
            if (n) return n;
          } else s.logError('Empty bid response', r.bidderCode, t);
        },
        getUserSyncs(e, r) {
          const t = !s.isEmpty(r) && r[0].body;
          return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : [];
        },
        formatBidRequest(e, r, t) {
          let n;
          switch (e) {
            case l.GET:
              n = { url: this.buildMarketplaceUrl(r, t), method: 'GET', ttl: 60 };
              break;
            case m.GET:
              n = { url: this.buildOneMobileGetUrl(r, t), method: 'GET', ttl: 3600 };
              break;
            case m.POST:
              n = {
                url: this.buildOneMobileBaseUrl(r),
                method: 'POST',
                ttl: 3600,
                data: this.buildOpenRtbRequestData(r, t),
                options: {
                  contentType: 'application/json',
                  customHeaders: { 'x-openrtb-version': '2.2' },
                },
              };
          }
          return (
            (n.bidderCode = r.bidder), (n.bidId = r.bidId), (n.userSyncOn = r.params.userSyncOn), n
          );
        },
        buildMarketplaceUrl(e, r) {
          let t;
          const n = e.params;
          const i = n.server;
          let a = n.region || 'us';
          return (
            O.hasOwnProperty(a) ||
              (s.logWarn("Unknown region '".concat(a, "' for AOL bidder.")), (a = 'us')),
            (t = i || O[a]),
            (n.region = a),
            this.applyProtocol(
              h({
                host: t,
                network: n.network,
                placement: parseInt(n.placement),
                pageid: n.pageId || 0,
                sizeid: n.sizeId || 0,
                alias: n.alias || s.getUniqueIdentifierStr(),
                misc: new Date().getTime(),
                dynamicParams: this.formatMarketplaceDynamicParams(n, r),
              })
            )
          );
        },
        buildOneMobileGetUrl(e, r) {
          const t = e.params;
          const n = t.dcn;
          const i = t.pos;
          const a = t.ext;
          let o = this.buildOneMobileBaseUrl(e);
          if (n && i) {
            const s = this.formatOneMobileDynamicParams(a, r);
            o += g({ dcn: n, pos: i, dynamicParams: s });
          }
          return o;
        },
        buildOneMobileBaseUrl(e) {
          return this.applyProtocol(v({ host: e.params.host || 'c2shb.ssp.yahoo.com' }));
        },
        applyProtocol(e) {
          return /^https?:\/\//i.test(e)
            ? e
            : e.indexOf('//') === 0
            ? ''.concat(y, ':').concat(e)
            : ''.concat(y, '://').concat(e);
        },
        formatMarketplaceDynamicParams(e, r) {
          const t = arguments.length > 0 && void 0 !== e ? e : {};
          const n = arguments.length > 1 ? r : void 0;
          const i = {};
          t.bidFloor && (i.bidfloor = t.bidFloor),
            o(i, this.formatKeyValues(t.keyValues)),
            o(i, this.formatConsentData(n));
          let a = '';
          return (
            s._each(i, function (e, r) {
              a += ''.concat(r, '=').concat(encodeURIComponent(e), ';');
            }),
            a
          );
        },
        formatOneMobileDynamicParams(e, r) {
          const t = arguments.length > 0 && void 0 !== e ? e : {};
          const n = arguments.length > 1 ? r : void 0;
          this.isSecureProtocol() && (t.secure = P), o(t, this.formatConsentData(n));
          let i = '';
          return (
            s._each(t, function (e, r) {
              i += '&'.concat(r, '=').concat(encodeURIComponent(e));
            }),
            i
          );
        },
        buildOpenRtbRequestData(e, r) {
          const t = { id: e.params.id, imp: e.params.imp };
          return (
            this.isConsentRequired(r) &&
              ((t.regs = { ext: { gdpr: P } }),
              r.consentString && (t.user = { ext: { consent: r.consentString } })),
            t
          );
        },
        isConsentRequired(e) {
          return !(!e || !e.gdprApplies);
        },
        formatKeyValues(e) {
          const t = {};
          return (
            s._each(e, function (e, r) {
              t['kv'.concat(r)] = e;
            }),
            t
          );
        },
        formatConsentData(e) {
          const r = {};
          return (
            this.isConsentRequired(e) &&
              ((r.gdpr = P), e.consentString && (r.euconsent = e.consentString)),
            r
          );
        },
        parsePixelItems(e) {
          const n = /\w*(?=\s)/;
          const i = /src=("|')(.*?)\1/;
          const a = [];
          if (e) {
            const r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
            r &&
              r.forEach(function (e) {
                const r = e.match(n)[0];
                const t = e.match(i)[2];
                r && r && a.push({ type: r === b.TAG ? b.TYPE : f.TYPE, url: t });
              });
          }
          return a;
        },
        _parseBidResponse(e, r) {
          let t;
          let n;
          try {
            t = e.seatbid[0].bid[0];
          } catch (e) {
            return;
          }
          if (t.ext && t.ext.encp) n = t.ext.encp;
          else if ((n = t.price) === null || isNaN(n))
            return void s.logError('Invalid price in bid response', p.AOL, bid);
          return {
            bidderCode: r.bidderCode,
            requestId: r.bidId,
            ad: t.adm,
            cpm: n,
            width: t.w,
            height: t.h,
            creativeId: t.crid || 0,
            pubapiId: e.id,
            currency: e.cur || 'USD',
            dealId: t.dealid,
            netRevenue: !0,
            ttl: r.ttl,
          };
        },
        isOneMobileBidder: I,
        isSecureProtocol() {
          return document.location.protocol === 'https:';
        },
      };
      Object(n.registerBidder)(x);
    },
  },
  [190]
);
pbjsChunk(
  [234],
  {
    198(e, r, a) {
      e.exports = a(199);
    },
    199(e, r, a) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        a.d(r, 'spec', function () {
          return m;
        });
      const l = a(11);
      const _ = a(0);
      const k = a(3);
      const f = a(1);
      const v = a(2);
      const o = a(28);
      const t = a(12);
      const I = a.n(t);
      const n = a(10);
      const x = a.n(n);
      const g = a(31);
      function i(e) {
        return (i =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (let r = 1; r < arguments.length; r++) {
              const a = arguments[r];
              for (const t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function A(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
              return a;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              Object.prototype.toString.call(e) === '[object Arguments]'
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      const w = 'appnexus';
      const S = '//ib.adnxs.com/ut/v3/prebid';
      const d = [
        'id',
        'mimes',
        'minduration',
        'maxduration',
        'startdelay',
        'skippable',
        'playback_method',
        'frameworks',
      ];
      const C = ['age', 'externalUid', 'segments', 'gender', 'dnt', 'language'];
      const T = ['geo', 'device_id'];
      const E = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
      const c = {
        body: 'description',
        body2: 'desc2',
        cta: 'ctatext',
        image: { serverName: 'main_image', requiredParams: { required: !0 } },
        icon: { serverName: 'icon', requiredParams: { required: !0 } },
        sponsoredBy: 'sponsored_by',
        privacyLink: 'privacy_link',
        salePrice: 'saleprice',
        displayUrl: 'displayurl',
      };
      const s = '<script';
      const u = /http:\/\/cdn\.adnxs\.com\/v/;
      const p = 'trk.js';
      var m = {
        code: w,
        aliases: [
          'appnexusAst',
          'brealtime',
          'emxdigital',
          'pagescience',
          'defymedia',
          'gourmetads',
          'matomy',
          'featureforward',
          'oftmedia',
          'districtm',
        ],
        supportedMediaTypes: [v.b, v.d, v.c],
        isBidRequestValid(e) {
          return !!(e.params.placementId || (e.params.member && e.params.invCode));
        },
        buildRequests(e, r) {
          let a;
          const t = e.map(O);
          const n = I()(e, P);
          n &&
            ((a = {}),
            Object.keys(n.params.user)
              .filter(function (e) {
                return x()(C, e);
              })
              .forEach(function (e) {
                return (a[e] = n.params.user[e]);
              }));
          let i;
          const s = I()(e, U);
          s &&
            s.params &&
            s.params.app &&
            ((i = {}),
            Object.keys(s.params.app)
              .filter(function (e) {
                return x()(T, e);
              })
              .forEach(function (e) {
                return (i[e] = s.params.app[e]);
              }));
          let o;
          const d = I()(e, q);
          d && d.params && s.params.app && s.params.app.id && (o = { appid: d.params.app.id });
          let c = {};
          const u = {};
          const p = _.getCookie('apn_prebid_debug') || null;
          if (p)
            try {
              c = JSON.parse(p);
            } catch (e) {
              _.logError(`AppNexus Debug Auction Cookie Error:\n\n${e}`);
            }
          else {
            const m = I()(e, z);
            m && m.debug && (c = m.debug);
          }
          c &&
            c.enabled &&
            Object.keys(c)
              .filter(function (e) {
                return x()(E, e);
              })
              .forEach(function (e) {
                u[e] = c[e];
              });
          const l = I()(e, N);
          const f = l ? parseInt(l.params.member, 10) : 0;
          const v = e[0].schain;
          const g = { tags: A(t), user: a, sdk: { source: 'pbjs', version: '2.34.0' }, schain: v };
          if (
            (f > 0 && (g.member_id = f),
            s && (g.device = i),
            d && (g.app = o),
            k.b.getConfig('adpod.brandCategoryExclusion') && (g.brand_category_uniqueness = !0),
            u.enabled &&
              ((g.debug = u),
              _.logInfo(`AppNexus Debug Auction Settings:\n\n${JSON.stringify(u, null, 4)}`)),
            r &&
              r.gdprConsent &&
              (g.gdpr_consent = {
                consent_string: r.gdprConsent.consentString,
                consent_required: r.gdprConsent.gdprApplies,
              }),
            r && r.refererInfo)
          ) {
            const y = {
              rd_ref: encodeURIComponent(r.refererInfo.referer),
              rd_top: r.refererInfo.reachedTop,
              rd_ifs: r.refererInfo.numIframes,
              rd_stk: r.refererInfo.stack
                .map(function (e) {
                  return encodeURIComponent(e);
                })
                .join(','),
            };
            g.referrer_detection = y;
          }
          I()(e, M) &&
            e.filter(M).forEach(function (r) {
              const e = (function (e, r) {
                const a = r.mediaTypes.video;
                const t = a.durationRangeSec;
                const n = a.requireExactDuration;
                const i = (function (e) {
                  const r = e.adPodDurationSec;
                  const a = e.durationRangeSec;
                  const t = e.requireExactDuration;
                  const n = _.getMinValueFromArray(a);
                  const i = Math.floor(r / n);
                  return t ? Math.max(i, a.length) : i;
                })(r.mediaTypes.video);
                const s = _.getMaxValueFromArray(t);
                const o = e.filter(function (e) {
                  return e.uuid === r.bidId;
                });
                const d = _.fill.apply(_, A(o).concat([i]));
                if (n) {
                  const c = Math.ceil(i / t.length);
                  const u = _.chunk(d, c);
                  t.forEach(function (r, e) {
                    u[e].map(function (e) {
                      B(e, 'minduration', r), B(e, 'maxduration', r);
                    });
                  });
                } else
                  d.map(function (e) {
                    return B(e, 'maxduration', s);
                  });
                return d;
              })(t, r);
              const a = g.tags.filter(function (e) {
                return e.uuid !== r.bidId;
              });
              g.tags = [].concat(A(a), A(e));
            });
          const b = _.deepAccess(e[0], 'userId.criteortus.'.concat(w, '.userid'));
          if (b) {
            const h = [];
            h.push({ provider: 'criteo', user_id: b }), (g.tpuids = h);
          }
          return (function (e, a) {
            let t = [];
            if (e.tags.length > 15) {
              const n = _.deepClone(e);
              _.chunk(e.tags, 15).forEach(function (e) {
                n.tags = e;
                const r = JSON.stringify(n);
                t.push({ method: 'POST', url: S, data: r, bidderRequest: a });
              });
            } else {
              const r = JSON.stringify(e);
              t = { method: 'POST', url: S, data: r, bidderRequest: a };
            }
            return t;
          })(g, r);
        },
        interpretResponse(e, r) {
          const t = this;
          const n = r.bidderRequest;
          e = e.body;
          const i = [];
          if (!e || e.error) {
            let a = 'in response for '.concat(n.bidderCode, ' adapter');
            return e && e.error && (a += ': '.concat(e.error)), _.logError(a), i;
          }
          if (
            (e.tags &&
              e.tags.forEach(function (e) {
                const r = (function (e) {
                  return (
                    e &&
                    e.ads &&
                    e.ads.length &&
                    I()(e.ads, function (e) {
                      return e.rtb;
                    })
                  );
                })(e);
                if (r && r.cpm !== 0 && x()(t.supportedMediaTypes, r.ad_type)) {
                  const a = (function (r, e, a) {
                    const t = _.getBidRequest(r.uuid, [a]);
                    const n = {
                      requestId: r.uuid,
                      cpm: e.cpm,
                      creativeId: e.creative_id,
                      dealId: e.deal_id,
                      currency: 'USD',
                      netRevenue: !0,
                      ttl: 300,
                      adUnitCode: t.adUnitCode,
                      appnexus: {
                        buyerMemberId: e.buyer_member_id,
                        dealPriority: e.deal_priority,
                        dealCode: e.deal_code,
                      },
                    };
                    e.advertiser_id && (n.meta = { ...n.meta, advertiserId: e.advertiser_id });
                    if (e.rtb.video) {
                      switch (
                        (y(n, {
                          width: e.rtb.video.player_width,
                          height: e.rtb.video.player_height,
                          vastImpUrl: e.notify_url,
                          ttl: 3600,
                        }),
                        _.deepAccess(t, 'mediaTypes.video.context'))
                      ) {
                        case v.a:
                          var i = Object(f.getIabSubCategory)(t.bidder, e.brand_category_id);
                          (n.meta = { ...n.meta, iabSubCatId: i }),
                            (n.video = {
                              context: v.a,
                              durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                            }),
                            (n.vastUrl = e.rtb.video.asset_url);
                          break;
                        case g.b:
                          if (
                            ((n.adResponse = r),
                            (n.adResponse.ad = n.adResponse.ads[0]),
                            (n.adResponse.ad.video = n.adResponse.ad.rtb.video),
                            (n.vastXml = e.rtb.video.content),
                            e.renderer_url)
                          ) {
                            const s = I()(a.bids, function (e) {
                              return e.bidId === r.uuid;
                            });
                            const o = _.deepAccess(s, 'renderer.options');
                            n.renderer = (function (e, r) {
                              const a =
                                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                              const t = l.a.install({
                                id: r.renderer_id,
                                url: r.renderer_url,
                                config: a,
                                loaded: !1,
                                adUnitCode: e,
                              });
                              try {
                                t.setRender(D);
                              } catch (e) {
                                _.logWarn('Prebid Error calling setRender on renderer', e);
                              }
                              return (
                                t.setEventHandlers({
                                  impression() {
                                    return _.logMessage(
                                      'AppNexus outstream video impression event'
                                    );
                                  },
                                  loaded() {
                                    return _.logMessage('AppNexus outstream video loaded event');
                                  },
                                  ended() {
                                    _.logMessage('AppNexus outstream renderer video event'),
                                      (document.querySelector('#'.concat(e)).style.display =
                                        'none');
                                  },
                                }),
                                t
                              );
                            })(n.adUnitCode, e, o);
                          }
                          break;
                        case g.a:
                          n.vastUrl = e.rtb.video.asset_url;
                      }
                    } else if (e.rtb[v.c]) {
                      const d = e.rtb[v.c];
                      const c = e.viewability.config.replace('src=', 'data-src=');
                      let u = d.javascript_trackers;
                      u == null ? (u = c) : _.isStr(u) ? (u = [u, c]) : u.push(c),
                        (n[v.c] = {
                          title: d.title,
                          body: d.desc,
                          body2: d.desc2,
                          cta: d.ctatext,
                          rating: d.rating,
                          sponsoredBy: d.sponsored,
                          privacyLink: d.privacy_link,
                          address: d.address,
                          downloads: d.downloads,
                          likes: d.likes,
                          phone: d.phone,
                          price: d.price,
                          salePrice: d.saleprice,
                          clickUrl: d.link.url,
                          displayUrl: d.displayurl,
                          clickTrackers: d.link.click_trackers,
                          impressionTrackers: d.impression_trackers,
                          javascriptTrackers: u,
                        }),
                        d.main_img &&
                          (n.native.image = {
                            url: d.main_img.url,
                            height: d.main_img.height,
                            width: d.main_img.width,
                          }),
                        d.icon &&
                          (n.native.icon = {
                            url: d.icon.url,
                            height: d.icon.height,
                            width: d.icon.width,
                          });
                    } else {
                      y(n, {
                        width: e.rtb.banner.width,
                        height: e.rtb.banner.height,
                        ad: e.rtb.banner.content,
                      });
                      try {
                        const p = e.rtb.trackers[0].impression_urls[0];
                        const m = _.createTrackPixelHtml(p);
                        n.ad += m;
                      } catch (e) {
                        _.logError('Error appending tracking pixel', e);
                      }
                    }
                    return n;
                  })(e, r, n);
                  (a.mediaType = (function (e) {
                    const r = e.ad_type;
                    return r === v.d ? v.d : r === v.c ? v.c : v.b;
                  })(r)),
                    i.push(a);
                }
              }),
            e.debug && e.debug.debug_info)
          ) {
            let s = `AppNexus Debug Auction for Prebid\n\n${e.debug.debug_info}`;
            (s = s
              .replace(/(<td>|<th>)/gm, '\t')
              .replace(/(<\/td>|<\/th>)/gm, '\n')
              .replace(/^<br>/gm, '')
              .replace(/(<br>\n|<br>)/gm, '\n')
              .replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n')
              .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n')
              .replace(/(<([^>]+)>)/gim, '')),
              _.logMessage('https://console.appnexus.com/docs/understanding-the-debug-auction'),
              _.logMessage(s);
          }
          return i;
        },
        getMappingFileInfo() {
          return {
            url: '//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json',
            refreshInDays: 7,
          };
        },
        getUserSyncs(e) {
          if (e.iframeEnabled)
            return [
              {
                type: 'iframe',
                url: '//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html',
              },
            ];
        },
        transformBidParams(a, e) {
          return (
            (a = _.convertTypes(
              {
                member: 'string',
                invCode: 'string',
                placementId: 'number',
                keywords: _.transformBidderParamKeywords,
              },
              a
            )),
            e &&
              ((a.use_pmt_rule = typeof a.usePaymentRule === 'boolean' && a.usePaymentRule),
              a.usePaymentRule && delete a.usePaymentRule,
              b(a.keywords) && a.keywords.forEach(h),
              Object.keys(a).forEach(function (e) {
                const r = _.convertCamelToUnderscore(e);
                r !== e && ((a[r] = a[e]), delete a[e]);
              })),
            a
          );
        },
        onBidWon(e) {
          e.native &&
            (function (e) {
              const r = (function (e) {
                let r;
                if (_.isStr(e) && R(e)) r = e;
                else if (_.isArray(e))
                  for (let a = 0; a < e.length; a++) {
                    const t = e[a];
                    R(t) && (r = t);
                  }
                return r;
              })(e.native.javascriptTrackers);
              if (r)
                for (
                  let a = `pbjs_adid=${e.adId};pbjs_auc=${e.adUnitCode}`,
                    t = (function (e) {
                      const r = e.indexOf('src="') + 5;
                      const a = e.indexOf('"', r);
                      return e.substring(r, a);
                    })(r),
                    n = t.replace('dom_id=%native_dom_id%', a),
                    i = document.getElementsByTagName('iframe'),
                    s = !1,
                    o = 0;
                  o < i.length && !s;
                  o++
                ) {
                  const d = i[o];
                  try {
                    const c = d.contentDocument || d.contentWindow.document;
                    if (c)
                      for (
                        let u = c.getElementsByTagName('script'), p = 0;
                        p < u.length && !s;
                        p++
                      ) {
                        const m = u[p];
                        m.getAttribute('data-src') == t &&
                          (m.setAttribute('src', n),
                          m.setAttribute('data-src', ''),
                          m.removeAttribute && m.removeAttribute('data-src'),
                          (s = !0));
                      }
                  } catch (e) {
                    if (!(e instanceof DOMException && e.name === 'SecurityError')) throw e;
                  }
                }
            })(e);
        },
      };
      function b(e) {
        return !!(_.isArray(e) && e.length > 0);
      }
      function h(e) {
        b(e.value) && e.value[0] === '' && delete e.value;
      }
      function R(e) {
        const r = e.match(u);
        const a = r != null && r.length >= 1;
        const t = e.match(p);
        const n = t != null && t.length >= 1;
        return e.startsWith(s) && n && a;
      }
      function O(r) {
        const a = {};
        if (
          ((a.sizes = j(r.sizes)),
          (a.primary_size = a.sizes[0]),
          (a.ad_types = []),
          (a.uuid = r.bidId),
          r.params.placementId
            ? (a.id = parseInt(r.params.placementId, 10))
            : (a.code = r.params.invCode),
          (a.allow_smaller_sizes = r.params.allowSmallerSizes || !1),
          (a.use_pmt_rule = r.params.usePaymentRule || !1),
          (a.prebid = !0),
          (a.disable_psa = !0),
          r.params.reserve && (a.reserve = r.params.reserve),
          r.params.position && (a.position = { above: 1, below: 2 }[r.params.position] || 0),
          r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode),
          r.params.privateSizes && (a.private_sizes = j(r.params.privateSizes)),
          r.params.supplyType && (a.supply_type = r.params.supplyType),
          r.params.pubClick && (a.pubclick = r.params.pubClick),
          r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode),
          r.params.externalImpId && (a.external_imp_id = r.params.externalImpId),
          !_.isEmpty(r.params.keywords))
        ) {
          const e = _.transformBidderParamKeywords(r.params.keywords);
          e.length > 0 && e.forEach(h), (a.keywords = e);
        }
        if (
          (r.mediaType === v.c || _.deepAccess(r, 'mediaTypes.'.concat(v.c))) &&
          (a.ad_types.push(v.c), a.sizes.length === 0 && (a.sizes = j([1, 1])), r.nativeParams)
        ) {
          const t = (function (n) {
            const i = {};
            return (
              Object.keys(n).forEach(function (e) {
                const r = (c[e] && c[e].serverName) || c[e] || e;
                const a = c[e] && c[e].requiredParams;
                if (
                  ((i[r] = { ...a, ...n[e] }),
                  !(r !== c.image.serverName && r !== c.icon.serverName) && i[r].sizes)
                ) {
                  const t = i[r].sizes;
                  (_.isArrayOfNums(t) ||
                    (_.isArray(t) &&
                      t.length > 0 &&
                      t.every(function (e) {
                        return _.isArrayOfNums(e);
                      }))) &&
                    (i[r].sizes = j(i[r].sizes));
                }
                r === c.privacyLink && (i.privacy_supported = !0);
              }),
              i
            );
          })(r.nativeParams);
          a[v.c] = { layouts: [t] };
        }
        const n = _.deepAccess(r, 'mediaTypes.'.concat(v.d));
        const i = _.deepAccess(r, 'mediaTypes.video.context');
        (r.mediaType !== v.d && !n) || a.ad_types.push(v.d),
          (r.mediaType === v.d || (n && i !== 'outstream')) && (a.require_asset_url = !0),
          r.params.video &&
            ((a.video = {}),
            Object.keys(r.params.video)
              .filter(function (e) {
                return x()(d, e);
              })
              .forEach(function (e) {
                return (a.video[e] = r.params.video[e]);
              })),
          r.renderer && (a.video = { ...a.video, custom_renderer_present: !0 });
        const s = I()(o.a.getAdUnits(), function (e) {
          return r.transactionId === e.transactionId;
        });
        return (
          s && s.mediaTypes && s.mediaTypes.banner && a.ad_types.push(v.b),
          a.ad_types.length === 0 && delete a.ad_types,
          a
        );
      }
      function j(e) {
        const r = [];
        let a = {};
        if (_.isArray(e) && e.length === 2 && !_.isArray(e[0]))
          (a.width = parseInt(e[0], 10)), (a.height = parseInt(e[1], 10)), r.push(a);
        else if (i(e) === 'object')
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            ((a = {}).width = parseInt(n[0], 10)), (a.height = parseInt(n[1], 10)), r.push(a);
          }
        return r;
      }
      function P(e) {
        return !!e.params.user;
      }
      function N(e) {
        return !!parseInt(e.params.member, 10);
      }
      function U(e) {
        if (e.params) return !!e.params.app;
      }
      function q(e) {
        return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
      }
      function z(e) {
        return !!e.debug;
      }
      function M(e) {
        return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === v.a;
      }
      function B(e, r, a) {
        _.isEmpty(e.video) && (e.video = {}), (e.video[r] = a);
      }
      function D(e) {
        e.renderer.push(function () {
          window.ANOutstreamVideo.renderAd(
            {
              tagId: e.adResponse.tag_id,
              sizes: [e.getSize().split('x')],
              targetId: e.adUnitCode,
              uuid: e.adResponse.uuid,
              adResponse: e.adResponse,
              rendererOptions: e.renderer.getConfig(),
            },
            function (e, r, a) {
              e.renderer.handleVideoEvent({ id: r, eventName: a });
            }.bind(null, e)
          );
        });
      }
      Object(f.registerBidder)(m);
    },
  },
  [198]
);
pbjsChunk(
  [112],
  {
    482(e, r, a) {
      e.exports = a(483);
    },
    483(e, r, a) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        a.d(r, 'spec', function () {
          return x;
        });
      const p = a(0);
      const i = a(1);
      const c = a(2);
      const t = a(3);
      function u(e) {
        return (u =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      const s = 'pubmatic';
      const l = 'PubMatic: ';
      const m = 'USD';
      const n = 'nFIn8aLzbd';
      const g = void 0;
      const h = {
        kadpageurl: '',
        gender: '',
        yob: '',
        lat: '',
        lon: '',
        wiid: '',
        profId: '',
        verId: '',
      };
      const o = {
        NUMBER: 'number',
        STRING: 'string',
        BOOLEAN: 'boolean',
        ARRAY: 'array',
        OBJECT: 'object',
      };
      const d = {
        mimes: o.ARRAY,
        minduration: o.NUMBER,
        maxduration: o.NUMBER,
        startdelay: o.NUMBER,
        playbackmethod: o.ARRAY,
        api: o.ARRAY,
        protocols: o.ARRAY,
        w: o.NUMBER,
        h: o.NUMBER,
        battr: o.ARRAY,
        linearity: o.NUMBER,
        placement: o.NUMBER,
        minbitrate: o.NUMBER,
        maxbitrate: o.NUMBER,
      };
      const f = {
        TITLE: { ID: 1, KEY: 'title', TYPE: 0 },
        IMAGE: { ID: 2, KEY: 'image', TYPE: 0 },
        ICON: { ID: 3, KEY: 'icon', TYPE: 0 },
        SPONSOREDBY: { ID: 4, KEY: 'sponsoredBy', TYPE: 1 },
        BODY: { ID: 5, KEY: 'body', TYPE: 2 },
        CLICKURL: { ID: 6, KEY: 'clickUrl', TYPE: 0 },
        VIDEO: { ID: 7, KEY: 'video', TYPE: 0 },
        EXT: { ID: 8, KEY: 'ext', TYPE: 0 },
        DATA: { ID: 9, KEY: 'data', TYPE: 0 },
        LOGO: { ID: 10, KEY: 'logo', TYPE: 0 },
        SPONSORED: { ID: 11, KEY: 'sponsored', TYPE: 1 },
        DESC: { ID: 12, KEY: 'data', TYPE: 2 },
        RATING: { ID: 13, KEY: 'rating', TYPE: 3 },
        LIKES: { ID: 14, KEY: 'likes', TYPE: 4 },
        DOWNLOADS: { ID: 15, KEY: 'downloads', TYPE: 5 },
        PRICE: { ID: 16, KEY: 'price', TYPE: 6 },
        SALEPRICE: { ID: 17, KEY: 'saleprice', TYPE: 7 },
        PHONE: { ID: 18, KEY: 'phone', TYPE: 8 },
        ADDRESS: { ID: 19, KEY: 'address', TYPE: 9 },
        DESC2: { ID: 20, KEY: 'desc2', TYPE: 10 },
        DISPLAYURL: { ID: 21, KEY: 'displayurl', TYPE: 11 },
        CTA: { ID: 22, KEY: 'cta', TYPE: 12 },
      };
      const y = { ICON: 1, LOGO: 2, IMAGE: 3 };
      const I = [
        { id: f.SPONSOREDBY.ID, required: !0, data: { type: 1 } },
        { id: f.TITLE.ID, required: !0 },
        { id: f.IMAGE.ID, required: !0 },
      ];
      const v = { 1: 'PMP', 5: 'PREF', 6: 'PMPG' };
      let E = 0;
      let b = !1;
      const w = {};
      const T = {};
      function O(e, r) {
        if (!p.isStr(r))
          return (
            r && p.logWarn(`${l}Ignoring param key: ${e}, expects string-value, found ${u(r)}`), g
          );
        switch (e) {
          case 'pmzoneid':
            return r
              .split(',')
              .slice(0, 50)
              .map(function (e) {
                return e.trim();
              })
              .join();
          case 'kadfloor':
          case 'lat':
          case 'lon':
            return parseFloat(r) || g;
          case 'yob':
            return parseInt(r) || g;
          default:
            return r;
        }
      }
      function D(e) {
        (e.params.adUnit = ''),
          (e.params.adUnitIndex = '0'),
          (e.params.width = 0),
          (e.params.height = 0),
          (e.params.adSlot = (function (e) {
            return p.isStr(e) ? e.replace(/^\s+/g, '').replace(/\s+$/g, '') : '';
          })(e.params.adSlot));
        let r = e.params.adSlot;
        let a = r.split(':');
        if (
          ((r = a[0]),
          a.length == 2 && (e.params.adUnitIndex = a[1]),
          (a = r.split('@')),
          (e.params.adUnit = a[0]),
          a.length > 1)
        ) {
          if ((a = a[1].split('x')).length != 2)
            return void p.logWarn(`${l}AdSlot Error: adSlot not in required format`);
          (e.params.width = parseInt(a[0])), (e.params.height = parseInt(a[1]));
        } else if (
          e.hasOwnProperty('mediaTypes') &&
          e.mediaTypes.hasOwnProperty(c.b) &&
          e.mediaTypes.banner.hasOwnProperty('sizes')
        ) {
          for (var i = 0, t = []; i < e.mediaTypes.banner.sizes.length; i++)
            e.mediaTypes.banner.sizes[i].length === 2 && t.push(e.mediaTypes.banner.sizes[i]);
          (e.mediaTypes.banner.sizes = t),
            e.mediaTypes.banner.sizes.length >= 1 &&
              ((e.params.width = e.mediaTypes.banner.sizes[0][0]),
              (e.params.height = e.mediaTypes.banner.sizes[0][1]),
              (e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(
                1,
                e.mediaTypes.banner.sizes.length - 1
              )));
        }
      }
      function S(e, r, a) {
        let i;
        const t = `Ignoring param key: ${e}, expects ${a}, found ${u(r)}`;
        switch (a) {
          case o.BOOLEAN:
            i = p.isBoolean;
            break;
          case o.NUMBER:
            i = p.isNumber;
            break;
          case o.STRING:
            i = p.isStr;
            break;
          case o.ARRAY:
            i = p.isArray;
        }
        return i(r) ? r : (p.logWarn(l + t), g);
      }
      function Y(e) {
        let r;
        let a;
        let i;
        const t = { assets: [] };
        for (const s in e) {
          if (e.hasOwnProperty(s)) {
            var n = {};
            if (!(t.assets && t.assets.length > 0 && t.assets.hasOwnProperty(s)))
              switch (s) {
                case f.TITLE.KEY:
                  e[s].len || e[s].length
                    ? (n = {
                        id: f.TITLE.ID,
                        required: e[s].required ? 1 : 0,
                        title: { len: e[s].len || e[s].length, ext: e[s].ext },
                      })
                    : p.logWarn(
                        `${l}Error: Title Length is required for native ad: ${JSON.stringify(e)}`
                      );
                  break;
                case f.IMAGE.KEY:
                  e[s].sizes && e[s].sizes.length > 0
                    ? (n = {
                        id: f.IMAGE.ID,
                        required: e[s].required ? 1 : 0,
                        img: {
                          type: y.IMAGE,
                          w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : g),
                          h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : g),
                          wmin:
                            e[s].wmin ||
                            e[s].minimumWidth ||
                            (e[s].minsizes ? e[s].minsizes[0] : g),
                          hmin:
                            e[s].hmin ||
                            e[s].minimumHeight ||
                            (e[s].minsizes ? e[s].minsizes[1] : g),
                          mimes: e[s].mimes,
                          ext: e[s].ext,
                        },
                      })
                    : p.logWarn(
                        `${l}Error: Image sizes is required for native ad: ${JSON.stringify(e)}`
                      );
                  break;
                case f.ICON.KEY:
                  e[s].sizes && e[s].sizes.length > 0
                    ? (n = {
                        id: f.ICON.ID,
                        required: e[s].required ? 1 : 0,
                        img: {
                          type: y.ICON,
                          w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : g),
                          h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : g),
                        },
                      })
                    : p.logWarn(
                        `${l}Error: Icon sizes is required for native ad: ${JSON.stringify(e)}`
                      );
                  break;
                case f.VIDEO.KEY:
                  n = {
                    id: f.VIDEO.ID,
                    required: e[s].required ? 1 : 0,
                    video: {
                      minduration: e[s].minduration,
                      maxduration: e[s].maxduration,
                      protocols: e[s].protocols,
                      mimes: e[s].mimes,
                      ext: e[s].ext,
                    },
                  };
                  break;
                case f.EXT.KEY:
                  n = { id: f.EXT.ID, required: e[s].required ? 1 : 0 };
                  break;
                case f.LOGO.KEY:
                  n = {
                    id: f.LOGO.ID,
                    required: e[s].required ? 1 : 0,
                    img: {
                      type: y.LOGO,
                      w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : g),
                      h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : g),
                    },
                  };
                  break;
                case f.SPONSOREDBY.KEY:
                case f.BODY.KEY:
                case f.RATING.KEY:
                case f.LIKES.KEY:
                case f.DOWNLOADS.KEY:
                case f.PRICE.KEY:
                case f.SALEPRICE.KEY:
                case f.PHONE.KEY:
                case f.ADDRESS.KEY:
                case f.DESC2.KEY:
                case f.DISPLAYURL.KEY:
                case f.CTA.KEY:
                  (r = T[s]),
                    (a = e),
                    void 0,
                    (i = r.KEY),
                    (n = {
                      id: r.ID,
                      required: a[i].required ? 1 : 0,
                      data: { type: r.TYPE, len: a[i].len, ext: a[i].ext },
                    });
              }
          }
          n && n.id && (t.assets[t.assets.length] = n);
        }
        const o = I.length;
        let d = 0;
        return (
          I.forEach(function (e) {
            for (let r = t.assets.length, a = 0; a < r; a++)
              if (e.id == t.assets[a].id) {
                d++;
                break;
              }
          }),
          (b = o != d),
          t
        );
      }
      function P(e) {
        let r;
        let a = e.mediaTypes.banner.sizes;
        let i = [];
        if (a !== g && p.isArray(a)) {
          if (((r = {}), e.params.width || e.params.height))
            (r.w = e.params.width), (r.h = e.params.height);
          else {
            if (a.length === 0)
              return (
                (r = g),
                p.logWarn(
                  `${l}Error: mediaTypes.banner.size missing for adunit: ${e.params.adUnit}. Ignoring the banner impression in the adunit.`
                ),
                r
              );
            (r.w = parseInt(a[0][0])), (r.h = parseInt(a[0][1])), (a = a.splice(1, a.length - 1));
          }
          a.length > 0 &&
            ((i = []),
            a.forEach(function (e) {
              e.length > 1 && i.push({ w: e[0], h: e[1] });
            }),
            i.length > 0 && (r.format = i)),
            (r.pos = 0),
            (r.topframe = p.inIframe() ? 0 : 1);
        } else
          p.logWarn(
            `${l}Error: mediaTypes.banner.size missing for adunit: ${e.params.adUnit}. Ignoring the banner impression in the adunit.`
          ),
            (r = g);
        return r;
      }
      function A(e) {
        let r;
        const a = e.params.video;
        if (a !== g) {
          for (const i in ((r = {}), d)) a.hasOwnProperty(i) && (r[i] = S(i, a[i], d[i]));
          p.isArray(e.mediaTypes.video.playerSize[0])
            ? ((r.w = parseInt(e.mediaTypes.video.playerSize[0][0])),
              (r.h = parseInt(e.mediaTypes.video.playerSize[0][1])))
            : p.isNumber(e.mediaTypes.video.playerSize[0]) &&
              ((r.w = parseInt(e.mediaTypes.video.playerSize[0])),
              (r.h = parseInt(e.mediaTypes.video.playerSize[1]))),
            e.params.video.hasOwnProperty('skippable') &&
              (r.ext = { video_skippable: e.params.video.skippable ? 1 : 0 });
        } else
          (r = g),
            p.logWarn(
              `${l}Error: Video config params missing for adunit: ${e.params.adUnit} with mediaType set as video. Ignoring video impression in the adunit.`
            );
        return r;
      }
      function R(e) {
        const r = (function (e) {
          let r;
          const a =
            ((r =
              window.DigiTrust &&
              (t.b.getConfig('digiTrustId') || window.DigiTrust.getUser({ member: e }))) &&
              r.success &&
              r.identity) ||
            null;
          return !a || (a.privacy && a.privacy.optout) ? null : a;
        })(n);
        r !== null &&
          e.push({
            source: 'digitru.st',
            uids: [{ id: r.id || '', atype: 1, ext: { keyv: parseInt(r.keyv) || 0 } }],
          });
      }
      function k(e, r, a, i) {
        p.isStr(r) && e.push({ source: a, uids: [{ id: r, atype: i }] });
      }
      function N(e, r) {
        const a = [];
        R(a),
          (function (e, r) {
            let a = null;
            const i = t.b.getConfig('adsrvrOrgId');
            p.isStr(p.deepAccess(r, '0.userId.tdid'))
              ? (a = r[0].userId.tdid)
              : i && p.isStr(i.TDID) && (a = i.TDID),
              a !== null &&
                e.push({
                  source: 'adserver.org',
                  uids: [{ id: a, atype: 1, ext: { rtiPartner: 'TDID' } }],
                });
          })(a, r);
        const i = r[0];
        i &&
          i.userId &&
          (k(a, p.deepAccess(i, 'userId.pubcid'), 'pubcommon', 1),
          k(a, p.deepAccess(i, 'userId.digitrustid.data.id'), 'digitru.st', 1),
          k(a, p.deepAccess(i, 'userId.id5id'), 'id5-sync.com', 1),
          k(a, p.deepAccess(i, 'userId.criteortus.'.concat(s, '.userid')), 'criteortus', 1),
          k(a, p.deepAccess(i, 'userId.idl_env'), 'liveramp.com', 1)),
          a.length > 0 && (e.user.eids = a);
      }
      p._each(f, function (e) {
        w[e.ID] = e.KEY;
      }),
        p._each(f, function (e) {
          T[e.KEY] = e;
        });
      var x = {
        code: s,
        supportedMediaTypes: [c.b, c.d, c.c],
        isBidRequestValid(e) {
          return (
            !(!e || !e.params) &&
            (p.isStr(e.params.publisherId)
              ? !!(
                  !e.params.hasOwnProperty('video') ||
                  (e.params.video.hasOwnProperty('mimes') &&
                    p.isArray(e.params.video.mimes) &&
                    e.params.video.mimes.length !== 0)
                ) ||
                (p.logWarn(
                  `${l}Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:${JSON.stringify(
                    e
                  )}`
                ),
                !1)
              : (p.logWarn(
                  `${l}Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ${JSON.stringify(
                    e
                  )}`
                ),
                !1))
          );
        },
        buildRequests(e, r) {
          let a;
          r && r.refererInfo && (a = r.refererInfo);
          let i;
          let t = (function (e) {
            const r = {};
            return (
              (r.pageURL = p.getTopWindowUrl()),
              e && e.referer ? (r.refURL = e.referer) : (r.refURL = ''),
              r
            );
          })(a);
          const s = (function (e) {
            return {
              id: `${new Date().getTime()}`,
              at: 1,
              cur: [m],
              imp: [],
              site: { page: e.pageURL, ref: e.refURL, publisher: {} },
              device: {
                ua: navigator.userAgent,
                js: 1,
                dnt:
                  navigator.doNotTrack == 'yes' ||
                  navigator.doNotTrack == '1' ||
                  navigator.msDoNotTrack == '1'
                    ? 1
                    : 0,
                h: screen.height,
                w: screen.width,
                language: navigator.language,
              },
              user: {},
              ext: {},
            };
          })(t);
          let n = '';
          const o = [];
          let d = [];
          if (
            (e.forEach(function (e) {
              if (
                (((i = p.deepClone(e)).params.adSlot = i.params.adSlot || ''),
                D(i),
                i.params.hasOwnProperty('video'))
              );
              else if (
                !(
                  (i.hasOwnProperty('mediaTypes') && i.mediaTypes.hasOwnProperty(c.c)) ||
                  i.params.width !== 0 ||
                  i.params.height !== 0
                )
              )
                return void p.logWarn(
                  `${l}Skipping the non-standard adslot: `,
                  i.params.adSlot,
                  JSON.stringify(i)
                );
              (t.pubId = t.pubId || i.params.publisherId),
                ((t = (function (e, r) {
                  let a;
                  let i;
                  let t;
                  for (a in (r.kadpageurl || (r.kadpageurl = r.pageURL), h))
                    h.hasOwnProperty(a) &&
                      (i = e[a]) &&
                      (u((t = h[a])) === 'object' && (i = t.f(i, r)),
                      p.isStr(i)
                        ? (r[a] = i)
                        : p.logWarn(
                            `${l}Ignoring param : ${a} with value : ${
                              h[a]
                            }, expects string-value, found ${u(i)}`
                          ));
                  return r;
                })(i.params, t)).transactionId = i.transactionId),
                n === ''
                  ? (n = i.params.currency || g)
                  : i.params.hasOwnProperty('currency') &&
                    n !== i.params.currency &&
                    p.logWarn(`${l}Currency specifier ignored. Only one currency permitted.`),
                (i.params.currency = n),
                i.params.hasOwnProperty('dctr') && p.isStr(i.params.dctr) && o.push(i.params.dctr),
                i.params.hasOwnProperty('bcat') &&
                  p.isArray(i.params.bcat) &&
                  (d = d.concat(i.params.bcat));
              const r = (function (e) {
                let r;
                let a;
                let i = {};
                const t = {};
                let s = e.hasOwnProperty('sizes') ? e.sizes : [];
                let n = '';
                const o = [];
                if (
                  ((i = {
                    id: e.bidId,
                    tagid: e.params.adUnit || void 0,
                    bidfloor: O('kadfloor', e.params.kadfloor),
                    secure: 1,
                    ext: { pmZoneId: O('pmzoneid', e.params.pmzoneid) },
                    bidfloorcur: e.params.currency ? O('currency', e.params.currency) : m,
                  }),
                  e.hasOwnProperty('mediaTypes'))
                )
                  for (n in e.mediaTypes)
                    switch (n) {
                      case c.b:
                        (r = P(e)) !== g && (i.banner = r);
                        break;
                      case c.c:
                        (t.request = JSON.stringify(Y(e.nativeParams))),
                          b
                            ? p.logWarn(
                                `${l}Error: Error in Native adunit ${e.params.adUnit}. Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.`
                              )
                            : (i.native = t);
                        break;
                      case c.d:
                        (a = A(e)) !== g && (i.video = a);
                    }
                else
                  (r = {
                    pos: 0,
                    w: e.params.width,
                    h: e.params.height,
                    topframe: p.inIframe() ? 0 : 1,
                  }),
                    p.isArray(s) &&
                      s.length > 1 &&
                      ((s = s.splice(1, s.length - 1)).forEach(function (e) {
                        o.push({ w: e[0], h: e[1] });
                      }),
                      (r.format = o)),
                    (i.banner = r);
                return i.hasOwnProperty(c.b) || i.hasOwnProperty(c.c) || i.hasOwnProperty(c.d)
                  ? i
                  : g;
              })(i);
              r && s.imp.push(r);
            }),
            s.imp.length != 0)
          )
            return (
              (s.site.publisher.id = t.pubId.trim()),
              (E = t.pubId.trim()),
              (s.ext.wrapper = {}),
              (s.ext.wrapper.profile = parseInt(t.profId) || g),
              (s.ext.wrapper.version = parseInt(t.verId) || g),
              (s.ext.wrapper.wiid = t.wiid || g),
              (s.ext.wrapper.wv = 'prebid_prebid_2.34.0'),
              (s.ext.wrapper.transactionId = t.transactionId),
              (s.ext.wrapper.wp = 'pbjs'),
              (s.user.gender = t.gender ? t.gender.trim() : g),
              (s.user.geo = {}),
              (s.user.geo.lat = O('lat', t.lat)),
              (s.user.geo.lon = O('lon', t.lon)),
              (s.user.yob = O('yob', t.yob)),
              (s.device.geo = s.user.geo),
              (s.site.page = t.kadpageurl.trim() || s.site.page.trim()),
              (s.site.domain = (function (e) {
                const r = document.createElement('a');
                return (r.href = e), r.hostname;
              })(s.site.page)),
              e[0].schain && (s.source = { ext: { schain: e[0].schain } }),
              r &&
                r.gdprConsent &&
                ((s.user.ext = { consent: r.gdprConsent.consentString }),
                (s.regs = { ext: { gdpr: r.gdprConsent.gdprApplies ? 1 : 0 } })),
              (function (e, r, a) {
                let i;
                let t = '';
                if (r.length > 0)
                  if (a[0].params.hasOwnProperty('dctr')) {
                    if (((t = a[0].params.dctr), p.isStr(t) && t.length > 0)) {
                      const s = t.split('|');
                      (t = ''),
                        s.forEach(function (e) {
                          t += e.length > 0 ? `${e.trim()}|` : '';
                        }),
                        (i = t.length),
                        t.substring(i, i - 1) === '|' && (t = t.substring(0, i - 1)),
                        (e.site.ext = { key_val: t.trim() });
                    } else
                      p.logWarn(
                        `${l}Ignoring param : dctr with value : ${t}, expects string-value, found empty or non-string value`
                      );
                    r.length > 1 &&
                      p.logWarn(
                        `${l}dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits`
                      );
                  } else
                    p.logWarn(
                      `${l}dctr value not found in 1st adunit, ignoring values from subsequent adunits`
                    );
              })(s, o, e),
              N(s, e),
              (function (e, r) {
                (r = r
                  .filter(function (e) {
                    return (
                      typeof e === 'string' ||
                      (p.logWarn(
                        `${l}bcat: Each category should be a string, ignoring category: ${e}`
                      ),
                      !1)
                    );
                  })
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(function (e, r, a) {
                    if (e.length > 3) return a.indexOf(e) === r;
                    p.logWarn(
                      `${l}bcat: Each category should have a value of a length of more than 3 characters, ignoring category: ${e}`
                    );
                  })).length > 0 && (p.logWarn(`${l}bcat: Selected: `, r), (e.bcat = r));
              })(s, d),
              {
                method: 'POST',
                url: 'https://hbopenbid.pubmatic.com/translator?source=prebid-client',
                data: JSON.stringify(s),
              }
            );
        },
        interpretResponse(e, r) {
          const i = [];
          let t = m;
          const s = JSON.parse(r.data);
          const n = s.site && s.site.ref ? s.site.ref : '';
          try {
            e.body &&
              e.body.seatbid &&
              p.isArray(e.body.seatbid) &&
              ((t = e.body.cur || t),
              e.body.seatbid.forEach(function (e) {
                e.bid &&
                  p.isArray(e.bid) &&
                  e.bid.forEach(function (r) {
                    const a = {
                      requestId: r.impid,
                      cpm: (parseFloat(r.price) || 0).toFixed(2),
                      width: r.w,
                      height: r.h,
                      creativeId: r.crid || r.id,
                      dealId: r.dealid,
                      currency: t,
                      netRevenue: !1,
                      ttl: 300,
                      referrer: n,
                      ad: r.adm,
                    };
                    s.imp &&
                      s.imp.length > 0 &&
                      s.imp.forEach(function (e) {
                        if (r.impid === e.id)
                          switch (
                            ((function (r, e) {
                              let a = '';
                              const i = new RegExp(/VAST\s+version/);
                              if (r.indexOf('span class="PubAPIAd"') >= 0) e.mediaType = c.b;
                              else if (i.test(r)) e.mediaType = c.d;
                              else
                                try {
                                  (a = JSON.parse(r.replace(/\\/g, ''))) &&
                                    a.native &&
                                    (e.mediaType = c.c);
                                } catch (e) {
                                  p.logWarn(
                                    `${l}Error: Cannot parse native reponse for ad response: ${r}`
                                  );
                                }
                            })(r.adm, a),
                            a.mediaType)
                          ) {
                            case c.b:
                              break;
                            case c.d:
                              (a.width = r.hasOwnProperty('w') ? r.w : e.video.w),
                                (a.height = r.hasOwnProperty('h') ? r.h : e.video.h),
                                (a.vastXml = r.adm);
                              break;
                            case c.c:
                              !(function (e, r) {
                                if (((r.native = {}), e.hasOwnProperty('adm'))) {
                                  let a = '';
                                  try {
                                    a = JSON.parse(e.adm.replace(/\\/g, ''));
                                  } catch (e) {
                                    return p.logWarn(
                                      `${l}Error: Cannot parse native reponse for ad response: ${r.adm}`
                                    );
                                  }
                                  if (
                                    a &&
                                    a.native &&
                                    a.native.assets &&
                                    a.native.assets.length > 0
                                  ) {
                                    r.mediaType = c.c;
                                    for (let i = 0, t = a.native.assets.length; i < t; i++)
                                      switch (a.native.assets[i].id) {
                                        case f.TITLE.ID:
                                          r.native.title =
                                            a.native.assets[i].title &&
                                            a.native.assets[i].title.text;
                                          break;
                                        case f.IMAGE.ID:
                                          r.native.image = {
                                            url:
                                              a.native.assets[i].img && a.native.assets[i].img.url,
                                            height:
                                              a.native.assets[i].img && a.native.assets[i].img.h,
                                            width:
                                              a.native.assets[i].img && a.native.assets[i].img.w,
                                          };
                                          break;
                                        case f.ICON.ID:
                                          r.native.icon = {
                                            url:
                                              a.native.assets[i].img && a.native.assets[i].img.url,
                                            height:
                                              a.native.assets[i].img && a.native.assets[i].img.h,
                                            width:
                                              a.native.assets[i].img && a.native.assets[i].img.w,
                                          };
                                          break;
                                        case f.SPONSOREDBY.ID:
                                        case f.BODY.ID:
                                        case f.LIKES.ID:
                                        case f.DOWNLOADS.ID:
                                        case f.PRICE:
                                        case f.SALEPRICE.ID:
                                        case f.PHONE.ID:
                                        case f.ADDRESS.ID:
                                        case f.DESC2.ID:
                                        case f.CTA.ID:
                                        case f.RATING.ID:
                                        case f.DISPLAYURL.ID:
                                          r.native[w[a.native.assets[i].id]] =
                                            a.native.assets[i].data &&
                                            a.native.assets[i].data.value;
                                      }
                                    (r.native.clickUrl = a.native.link && a.native.link.url),
                                      (r.native.clickTrackers =
                                        (a.native.link && a.native.link.clicktrackers) || []),
                                      (r.native.impressionTrackers = a.native.imptrackers || []),
                                      (r.native.jstracker = a.native.jstracker || []),
                                      r.width || (r.width = 0),
                                      r.height || (r.height = 0);
                                  }
                                }
                              })(r, a);
                          }
                      }),
                      r.ext &&
                        r.ext.deal_channel &&
                        (a.dealChannel = v[r.ext.deal_channel] || null),
                      (a.meta = {}),
                      r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid),
                      r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid),
                      r.adomain && r.adomain.length > 0 && (a.meta.clickUrl = r.adomain[0]),
                      i.push(a);
                  });
              }));
          } catch (e) {
            p.logError(e);
          }
          return i;
        },
        getUserSyncs(e, r, a) {
          let i = `https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=${E}`;
          if (
            (a &&
              ((i += `&gdpr=${a.gdprApplies ? 1 : 0}`),
              (i += `&gdpr_consent=${encodeURIComponent(a.consentString || '')}`)),
            e.iframeEnabled)
          )
            return [{ type: 'iframe', url: i }];
          p.logWarn(`${l}Please enable iframe based user sync.`);
        },
        transformBidParams(e, r) {
          return p.convertTypes({ publisherId: 'string', adSlot: 'string' }, e);
        },
      };
      Object(i.registerBidder)(x);
    },
  },
  [482]
);
pbjsChunk(
  [96],
  {
    528(e, r, t) {
      e.exports = t(529);
    },
    529(e, r, t) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        t.d(r, 'FASTLANE_ENDPOINT', function () {
          return n;
        }),
        t.d(r, 'VIDEO_ENDPOINT', function () {
          return a;
        }),
        t.d(r, 'SYNC_ENDPOINT', function () {
          return o;
        }),
        t.d(r, 'spec', function () {
          return s;
        }),
        (r.hasVideoMediaType = I),
        (r.masSizeOrdering = j),
        (r.determineRubiconVideoSizeId = S),
        (r.getPriceGranularity = k),
        (r.hasValidVideoParams = T),
        (r.resetUserSync = function () {
          C = !1;
        });
      const c = t(0);
      const i = t(1);
      const u = t(3);
      const d = t(2);
      function p(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (let r = 1; r < arguments.length; r++) {
              const t = arguments[r];
              for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                Object.prototype.toString.call(e) === '[object Arguments]'
              )
            )
              return;
            const t = [];
            let i = !0;
            let n = !1;
            let o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r);
                i = !0
              );
            } catch (e) {
              (n = !0), (o = e);
            } finally {
              try {
                i || s.return == null || s.return();
              } finally {
                if (n) throw o;
              }
            }
            return t;
          })(e, r) ||
          (function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function v(e) {
        return (v =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function m() {
        return location.protocol === 'https:';
      }
      var n = '//fastlane.rubiconproject.com/a/api/fastlane.json';
      var a = '//prebid-server.rubiconproject.com/openrtb2/auction';
      var o = 'https://eus.rubiconproject.com/usync.html';
      const g = {
        FASTLANE: { id: 'dt.id', keyv: 'dt.keyv', pref: 'dt.pref' },
        PREBID_SERVER: { id: 'id', keyv: 'keyv' },
      };
      const b = {
        1: '468x60',
        2: '728x90',
        5: '120x90',
        8: '120x600',
        9: '160x600',
        10: '300x600',
        13: '200x200',
        14: '250x250',
        15: '300x250',
        16: '336x280',
        17: '240x400',
        19: '300x100',
        31: '980x120',
        32: '250x360',
        33: '180x500',
        35: '980x150',
        37: '468x400',
        38: '930x180',
        39: '750x100',
        40: '750x200',
        41: '750x300',
        43: '320x50',
        44: '300x50',
        48: '300x300',
        53: '1024x768',
        54: '300x1050',
        55: '970x90',
        57: '970x250',
        58: '1000x90',
        59: '320x80',
        60: '320x150',
        61: '1000x1000',
        64: '580x500',
        65: '640x480',
        66: '930x600',
        67: '320x480',
        68: '1800x1000',
        72: '320x320',
        73: '320x160',
        78: '980x240',
        79: '980x300',
        80: '980x400',
        83: '480x300',
        94: '970x310',
        96: '970x210',
        101: '480x320',
        102: '768x1024',
        103: '480x280',
        105: '250x800',
        108: '320x240',
        113: '1000x300',
        117: '320x100',
        125: '800x250',
        126: '200x600',
        144: '980x600',
        145: '980x150',
        156: '640x320',
        159: '320x250',
        179: '250x600',
        195: '600x300',
        198: '640x360',
        199: '640x200',
        213: '1030x590',
        214: '980x360',
        229: '320x180',
        232: '580x400',
        257: '400x600',
        264: '970x1000',
        265: '1920x1080',
        278: '320x500',
        288: '640x380',
      };
      c._each(b, function (e, r) {
        return (b[e] = r);
      });
      var s = {
        code: 'rubicon',
        supportedMediaTypes: [d.b, d.d],
        isBidRequestValid(e) {
          if (v(e.params) !== 'object') return !1;
          for (let r = 0, t = ['accountId', 'siteId', 'zoneId']; r < t.length; r++)
            if (((e.params[t[r]] = parseInt(e.params[t[r]])), isNaN(e.params[t[r]])))
              return c.logError('Rubicon: wrong format of accountId or siteId or zoneId.'), !1;
          const i = A(e, !0);
          return !!i && (i !== 'video' || T(e));
        },
        buildRequests(e, o) {
          let r = [];
          const t = e
            .filter(function (e) {
              return A(e) === 'video';
            })
            .map(function (e) {
              e.startTime = new Date().getTime();
              const r = {
                id: e.transactionId,
                test: u.b.getConfig('debug') ? 1 : 0,
                cur: ['USD'],
                source: { tid: e.transactionId },
                tmax: u.b.getConfig('TTL') || 1e3,
                imp: [
                  {
                    exp: 300,
                    id: e.adUnitCode,
                    secure: m() || e.params.secure ? 1 : 0,
                    ext: { rubicon: e.params },
                    video: c.deepAccess(e, 'mediaTypes.video') || {},
                  },
                ],
                ext: {
                  prebid: {
                    cache: { vastxml: { returnCreative: !1 } },
                    targeting: {
                      includewinners: !0,
                      includebidderkeys: !1,
                      pricegranularity: k(u.b),
                    },
                  },
                },
              };
              const t = parseFloat(c.deepAccess(e, 'params.floor'));
              isNaN(t) || (r.imp[0].bidfloor = t),
                (r.imp[0].ext.rubicon.video.size_id = S(e)),
                (function (r, t, e) {
                  if (!r) return;
                  v(u.b.getConfig('app')) === 'object'
                    ? (r.app = u.b.getConfig('app'))
                    : (r.site = { page: x(t, e) });
                  v(u.b.getConfig('device')) === 'object' && (r.device = u.b.getConfig('device'));
                  t.params.video.language &&
                    ['site', 'device'].forEach(function (e) {
                      r[e] &&
                        (r[e].content = { language: t.params.video.language, ...r[e].content });
                    });
                })(r, e, o),
                (function (e, r) {
                  v(e.imp[0].video) === 'object' &&
                    void 0 === e.imp[0].video.skip &&
                    (e.imp[0].video.skip = r.params.video.skip);
                  v(e.imp[0].video) === 'object' &&
                    void 0 === e.imp[0].video.skipafter &&
                    (e.imp[0].video.skipafter = r.params.video.skipdelay);
                  v(e.imp[0].video) === 'object' &&
                    void 0 === e.imp[0].video.pos &&
                    (r.params.position === 'atf'
                      ? (e.imp[0].video.pos = 1)
                      : r.params.position === 'btf' && (e.imp[0].video.pos = 3));
                  const t = h(r, 'video');
                  (e.imp[0].video.w = t[0]), (e.imp[0].video.h = t[1]);
                })(r, e);
              let i;
              const n = y(e, 'PREBID_SERVER');
              n && c.deepSetValue(r, 'user.ext.digitrust', n),
                o.gdprConsent &&
                  (typeof o.gdprConsent.gdprApplies === 'boolean' &&
                    (i = o.gdprConsent.gdprApplies ? 1 : 0),
                  r.regs
                    ? r.regs.ext
                      ? (r.regs.ext.gdpr = i)
                      : (r.regs.ext = { gdpr: i })
                    : (r.regs = { ext: { gdpr: i } }),
                  c.deepSetValue(r, 'user.ext.consent', o.gdprConsent.consentString));
              return (
                e.userId &&
                  v(e.userId) === 'object' &&
                  (e.userId.tdid || e.userId.pubcid) &&
                  (c.deepSetValue(r, 'user.ext.eids', []),
                  e.userId.tdid &&
                    r.user.ext.eids.push({
                      source: 'adserver.org',
                      uids: [{ id: e.userId.tdid, ext: { rtiPartner: 'TDID' } }],
                    }),
                  e.userId.pubcid &&
                    r.user.ext.eids.push({
                      source: 'pubcommon',
                      uids: [{ id: e.userId.pubcid }],
                    })),
                !0 === u.b.getConfig('coppa') && c.deepSetValue(r, 'regs.coppa', 1),
                { method: 'POST', url: a, data: r, bidRequest: e }
              );
            });
          if (!0 !== u.b.getConfig('rubicon.singleRequest'))
            r = t.concat(
              e
                .filter(function (e) {
                  return A(e) === 'banner';
                })
                .map(function (e) {
                  const i = s.createSlotParams(e, o);
                  return {
                    method: 'GET',
                    url: n,
                    data:
                      s.getOrderedParams(i).reduce(function (e, r) {
                        const t = i[r];
                        return (c.isStr(t) && t !== '') || c.isNumber(t)
                          ? ''.concat(e).concat(r, '=').concat(encodeURIComponent(t), '&')
                          : e;
                      }, '') + 'slots=1&rand='.concat(Math.random()),
                    bidRequest: e,
                  };
                })
            );
          else {
            const i = e
              .filter(function (e) {
                return A(e) === 'banner';
              })
              .reduce(function (e, r) {
                return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
              }, {});
            r = t.concat(
              Object.keys(i).reduce(function (r, e) {
                return (
                  (function (t, i) {
                    return t
                      .map(function (e, r) {
                        return r % i == 0 ? t.slice(r, r + i) : null;
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(i[e], 10).forEach(function (e) {
                    const i = s.combineSlotUrlParams(
                      e.map(function (e) {
                        return s.createSlotParams(e, o);
                      })
                    );
                    r.push({
                      method: 'GET',
                      url: n,
                      data:
                        s.getOrderedParams(i).reduce(function (e, r) {
                          const t = i[r];
                          return (c.isStr(t) && t !== '') || c.isNumber(t)
                            ? ''.concat(e).concat(r, '=').concat(encodeURIComponent(t), '&')
                            : e;
                        }, '') + 'slots='.concat(e.length, '&rand=').concat(Math.random()),
                      bidRequest: e,
                    });
                  }),
                  r
                );
              }, [])
            );
          }
          return r;
        },
        getOrderedParams(e) {
          const r = /^tg_v/;
          const t = /^tg_i/;
          const i = [
            'tpid_tdid',
            'account_id',
            'site_id',
            'zone_id',
            'size_id',
            'alt_size_ids',
            'p_pos',
            'gdpr',
            'gdpr_consent',
            'rf',
            'dt.id',
            'dt.keyv',
            'dt.pref',
            'p_geo.latitude',
            'p_geo.longitude',
            'kw',
          ]
            .concat(
              Object.keys(e).filter(function (e) {
                return r.test(e);
              })
            )
            .concat(
              Object.keys(e).filter(function (e) {
                return t.test(e);
              })
            )
            .concat([
              'tk_flint',
              'x_source.tid',
              'p_screen_res',
              'rp_floor',
              'rp_secure',
              'tk_user_key',
            ]);
          return i.concat(
            Object.keys(e).filter(function (e) {
              return i.indexOf(e) === -1;
            })
          );
        },
        combineSlotUrlParams(n) {
          if (n.length === 1) return n[0];
          const i = n.reduce(function (r, t, i) {
            return (
              Object.keys(t).forEach(function (e) {
                r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e]);
              }),
              r
            );
          }, {});
          const o = new RegExp('^([^;]*)(;\\1)+$');
          return (
            Object.keys(i).forEach(function (e) {
              const r = i[e].join(';');
              const t = r.match(o);
              i[e] = t ? t[1] : r;
            }),
            i
          );
        },
        createSlotParams(e, r) {
          e.startTime = new Date().getTime();
          const t = e.params;
          const i = h(e, 'banner');
          const n = f(t.latLong || [], 2);
          const o = n[0];
          const a = n[1];
          const s = u.b.getConfig('rubicon.int_type');
          const c = {
            account_id: t.accountId,
            site_id: t.siteId,
            zone_id: t.zoneId,
            size_id: i[0],
            alt_size_ids: i.slice(1).join(',') || void 0,
            rp_floor: (t.floor = parseFloat(t.floor)) > 0.01 ? t.floor : 0.01,
            rp_secure: m() ? '1' : '0',
            tk_flint: ''.concat(s || 'pbjs_lite', '_v2.34.0'),
            'x_source.tid': e.transactionId,
            p_screen_res: [window.screen.width, window.screen.height].join('x'),
            kw: Array.isArray(t.keywords) ? t.keywords.join(',') : '',
            tk_user_key: t.userId,
            'p_geo.latitude': isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
            'p_geo.longitude': isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
            'tg_fl.eid': e.code,
            rf: x(e, r),
          };
          (t.position !== 'atf' && t.position !== 'btf') || (c.p_pos = t.position),
            (e.userId || {}).tdid && (c.tpid_tdid = e.userId.tdid),
            r.gdprConsent &&
              (typeof r.gdprConsent.gdprApplies === 'boolean' &&
                (c.gdpr = Number(r.gdprConsent.gdprApplies)),
              (c.gdpr_consent = r.gdprConsent.consentString)),
            t.visitor !== null &&
              v(t.visitor) === 'object' &&
              Object.keys(t.visitor).forEach(function (e) {
                t.visitor[e] != null && (c['tg_v.'.concat(e)] = t.visitor[e].toString());
              }),
            t.inventory !== null &&
              v(t.inventory) === 'object' &&
              Object.keys(t.inventory).forEach(function (e) {
                t.inventory[e] != null && (c['tg_i.'.concat(e)] = t.inventory[e].toString());
              });
          const d = y(e, 'FASTLANE');
          return l(c, d), !0 === u.b.getConfig('coppa') && (c.coppa = 1), c;
        },
        interpretResponse(a, e) {
          const s = e.bidRequest;
          if (!(a = a.body) || v(a) !== 'object') return [];
          if (a.seatbid) {
            const r = c.deepAccess(a, 'ext.errors.rubicon');
            Array.isArray(r) && r.length > 0 && c.logWarn('Rubicon: Error in video response');
            const o = [];
            return (
              a.seatbid.forEach(function (n) {
                (n.bid || []).forEach(function (e) {
                  const r = {
                    requestId: s.bidId,
                    currency: a.cur || 'USD',
                    creativeId: e.crid,
                    cpm: e.price || 0,
                    bidderCode: n.seat,
                    ttl: 300,
                    netRevenue: u.b.getConfig('rubicon.netRevenue') || !1,
                    width:
                      e.w ||
                      c.deepAccess(s, 'mediaTypes.video.w') ||
                      c.deepAccess(s, 'params.video.playerWidth'),
                    height:
                      e.h ||
                      c.deepAccess(s, 'mediaTypes.video.h') ||
                      c.deepAccess(s, 'params.video.playerHeight'),
                  };
                  e.dealid && (r.dealId = e.dealid);
                  const t = c.deepAccess(a, 'ext.responsetimemillis.rubicon');
                  if (
                    (s && t && (s.serverResponseTimeMs = t),
                    c.deepAccess(e, 'ext.prebid.type') === d.d)
                  ) {
                    r.mediaType = d.d;
                    const i = c.deepAccess(e, 'ext.prebid.targeting');
                    i && v(i) === 'object' && (r.adserverTargeting = i),
                      e.ext.prebid.cache &&
                      v(e.ext.prebid.cache.vastXml) === 'object' &&
                      e.ext.prebid.cache.vastXml.cacheId &&
                      e.ext.prebid.cache.vastXml.url
                        ? ((r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId),
                          (r.vastUrl = e.ext.prebid.cache.vastXml.url))
                        : i &&
                          i.hb_uuid &&
                          i.hb_cache_host &&
                          i.hb_cache_path &&
                          ((r.videoCacheKey = i.hb_uuid),
                          (r.vastUrl = 'https://'
                            .concat(i.hb_cache_host)
                            .concat(i.hb_cache_path, '?uuid=')
                            .concat(i.hb_uuid))),
                      e.adm && (r.vastXml = e.adm),
                      e.nurl && (r.vastUrl = e.nurl),
                      !r.vastUrl && e.nurl && (r.vastUrl = e.nurl);
                  } else c.logWarn('Rubicon: video response received non-video media type');
                  o.push(r);
                });
              }),
              o
            );
          }
          let t = a.ads;
          return (
            v(s) !== 'object' ||
              Array.isArray(s) ||
              A(s) !== 'video' ||
              v(t) !== 'object' ||
              (t = t[s.adUnitCode]),
            !Array.isArray(t) || t.length < 1
              ? []
              : t
                  .reduce(function (e, r, t) {
                    if (r.status !== 'ok') return e;
                    const i = Array.isArray(s) ? s[t] : s;
                    if (i && v(i) === 'object') {
                      const n = {
                        requestId: i.bidId,
                        currency: 'USD',
                        creativeId:
                          r.creative_id ||
                          ''.concat(r.network || '', '-').concat(r.advertiser || ''),
                        cpm: r.cpm || 0,
                        dealId: r.deal,
                        ttl: 300,
                        netRevenue: u.b.getConfig('rubicon.netRevenue') || !1,
                        rubicon: { advertiserId: r.advertiser, networkId: r.network },
                        meta: { advertiserId: r.advertiser, networkId: r.network },
                      };
                      if (
                        (r.creative_type && (n.mediaType = r.creative_type),
                        r.creative_type === d.d)
                      )
                        (n.width = i.params.video.playerWidth),
                          (n.height = i.params.video.playerHeight),
                          (n.vastUrl = r.creative_depot_url),
                          (n.impression_id = r.impression_id),
                          (n.videoCacheKey = r.impression_id);
                      else {
                        n.ad = (function (e, r) {
                          return "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"
                            .concat(r, "'>\n<script type='text/javascript'>")
                            .concat(e, '</script>\n</div>\n</body>\n</html>');
                        })(r.script, r.impression_id);
                        const o = f(
                          b[r.size_id].split('x').map(function (e) {
                            return Number(e);
                          }),
                          2
                        );
                        (n.width = o[0]), (n.height = o[1]);
                      }
                      (n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(
                        function (e, r) {
                          return (e[r.key] = r.values[0]), e;
                        },
                        { rpfl_elemid: i.adUnitCode }
                      )),
                        e.push(n);
                    } else c.logError('Rubicon: bidRequest undefined at index position:'.concat(t), s, a);
                    return e;
                  }, [])
                  .sort(function (e, r) {
                    return (r.cpm || 0) - (e.cpm || 0);
                  })
          );
        },
        getUserSyncs(e, r, t) {
          if (!C && e.iframeEnabled) {
            let i = '';
            return (
              t &&
                typeof t.consentString === 'string' &&
                (typeof t.gdprApplies === 'boolean'
                  ? (i += '?gdpr='
                      .concat(Number(t.gdprApplies), '&gdpr_consent=')
                      .concat(t.consentString))
                  : (i += '?gdpr_consent='.concat(t.consentString))),
              (C = !0),
              { type: 'iframe', url: o + i }
            );
          }
        },
        transformBidParams(e, r) {
          return c.convertTypes({ accountId: 'number', siteId: 'number', zoneId: 'number' }, e);
        },
      };
      function y(e, r) {
        let t;
        const i = arguments.length > 0 && void 0 !== e ? e : {};
        const n = arguments.length > 1 ? r : void 0;
        if (!n || !g[n]) return null;
        const o = g[n];
        const a = (function () {
          const e = c.deepAccess(i, 'userId.digitrustid.data');
          if (e) return e;
          const r =
            window.DigiTrust &&
            (u.b.getConfig('digiTrustId') || window.DigiTrust.getUser({ member: 'T9QSFKPDN9' }));
          return (r && r.success && r.identity) || null;
        })();
        if (!a || (a.privacy && a.privacy.optout)) return null;
        const s = (p((t = {}), o.id, a.id), p(t, o.keyv, a.keyv), t);
        return o.pref && (s[o.pref] = 0), s;
      }
      function x(e, r) {
        let t = u.b.getConfig('pageUrl');
        return (
          (t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer),
          e.params.secure ? t.replace(/^http:/i, 'https:') : t
        );
      }
      function h(e, r) {
        const t = e.params;
        if (r === 'video') {
          let i = [];
          return (
            t.video && t.video.playerWidth && t.video.playerHeight
              ? (i = [t.video.playerWidth, t.video.playerHeight])
              : Array.isArray(c.deepAccess(e, 'mediaTypes.video.playerSize')) &&
                e.mediaTypes.video.playerSize.length === 1
              ? (i = e.mediaTypes.video.playerSize[0])
              : Array.isArray(e.sizes) &&
                e.sizes.length > 0 &&
                Array.isArray(e.sizes[0]) &&
                e.sizes[0].length > 1 &&
                (i = e.sizes[0]),
            i
          );
        }
        let n = [];
        return (
          Array.isArray(t.sizes)
            ? (n = t.sizes)
            : void 0 !== c.deepAccess(e, 'mediaTypes.banner.sizes')
            ? (n = _(e.mediaTypes.banner.sizes))
            : Array.isArray(e.sizes) && e.sizes.length > 0
            ? (n = _(e.sizes))
            : c.logWarn('Rubicon: no sizes are setup or found'),
          j(n)
        );
      }
      function _(e) {
        return c.parseSizesInput(e).reduce(function (e, r) {
          const t = parseInt(b[r], 10);
          return t && e.push(t), e;
        }, []);
      }
      function I(e) {
        return (
          v(c.deepAccess(e, 'params.video')) === 'object' &&
          void 0 !== c.deepAccess(e, 'mediaTypes.'.concat(d.d))
        );
      }
      function A(e, r) {
        const t = arguments.length > 1 && void 0 !== r && r;
        return I(e)
          ? ['outstream', 'instream'].indexOf(
              c.deepAccess(e, 'mediaTypes.'.concat(d.d, '.context'))
            ) === -1
            ? void (
                t && c.logError('Rubicon: mediaTypes.video.context must be outstream or instream')
              )
            : h(e, 'video').length < 2
            ? void (t && c.logError('Rubicon: could not determine the playerSize of the video'))
            : (t && c.logMessage('Rubicon: making video request for adUnit', e.adUnitCode), 'video')
          : h(e, 'banner').length === 0
          ? void (t && c.logError('Rubicon: could not determine the sizes for banner request'))
          : (t && c.logMessage('Rubicon: making banner request for adUnit', e.adUnitCode),
            'banner');
      }
      function j(e) {
        const n = [15, 2, 9];
        return e.sort(function (e, r) {
          const t = n.indexOf(e);
          const i = n.indexOf(r);
          return t > -1 || i > -1 ? (t === -1 ? 1 : i === -1 ? -1 : t - i) : e - r;
        });
      }
      function S(e) {
        const r = parseInt(c.deepAccess(e, 'params.video.size_id'));
        return isNaN(r)
          ? c.deepAccess(e, 'mediaTypes.'.concat(d.d, '.context')) === 'outstream'
            ? 203
            : 201
          : r;
      }
      function k(e) {
        return {
          ranges: {
            low: [{ max: 5, increment: 0.5 }],
            medium: [{ max: 20, increment: 0.1 }],
            high: [{ max: 20, increment: 0.01 }],
            auto: [
              { max: 5, increment: 0.05 },
              { min: 5, max: 10, increment: 0.1 },
              { min: 10, max: 20, increment: 0.5 },
            ],
            dense: [
              { max: 3, increment: 0.01 },
              { min: 3, max: 8, increment: 0.05 },
              { min: 8, max: 20, increment: 0.5 },
            ],
            custom: e.getConfig('customPriceBucket') && e.getConfig('customPriceBucket').buckets,
          }[e.getConfig('priceGranularity')],
        };
      }
      function T(r) {
        let t = !0;
        const e = Object.prototype.toString.call([]);
        const i = Object.prototype.toString.call(0);
        const n = { mimes: e, protocols: e, maxduration: i, linearity: i, api: e };
        return (
          Object.keys(n).forEach(function (e) {
            Object.prototype.toString.call(c.deepAccess(r, `mediaTypes.video.${e}`)) !== n[e] &&
              ((t = !1),
              c.logError(
                `Rubicon: mediaTypes.video.${e} is required and must be of type: ${n[e]}`
              ));
          }),
          t
        );
      }
      var C = !1;
      Object(i.registerBidder)(s);
    },
  },
  [528]
);
pbjs.processQueue();
