! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = {}) }(this, function(t) { "use strict";

  function e() {} void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }), void 0 === Math.sign && (Math.sign = function(t) { return t < 0 ? -1 : 0 < t ? 1 : +t }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", { get: function() { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1] } }), void 0 === Object.assign && (Object.assign = function(t) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var n = arguments[i]; if (null != n)
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }), Object.assign(e.prototype, { addEventListener: function(t, e) { void 0 === this._listeners && (this._listeners = {}); var i = this._listeners;
      void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e) }, hasEventListener: function(t, e) { if (void 0 === this._listeners) return !1; var i = this._listeners; return void 0 !== i[t] && -1 !== i[t].indexOf(e) }, removeEventListener: function(t, e) { if (void 0 !== this._listeners) { var i = this._listeners[t]; if (void 0 !== i) { var n = i.indexOf(e); - 1 !== n && i.splice(n, 1) } } }, dispatchEvent: function(t) { if (void 0 !== this._listeners) { var e = this._listeners[t.type]; if (void 0 !== e) { t.target = this; for (var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t) } } } }); var i, n, l, u, r, a, o, s, c, h, p, d, f, m, g, v, y, x, b, _, w, M, W = 0,
    X = 1,
    q = 2,
    G = 1,
    H = 2,
    D = 0,
    wt = 1,
    et = 2,
    E = 0,
    T = 2,
    Y = 0,
    J = 1,
    Z = 2,
    Q = 3,
    K = 4,
    $ = 5,
    S = 100,
    A = 101,
    L = 102,
    R = 103,
    C = 104,
    P = 200,
    O = 201,
    I = 202,
    N = 203,
    U = 204,
    B = 205,
    F = 206,
    z = 207,
    V = 208,
    k = 209,
    j = 210,
    tt = 0,
    it = 1,
    nt = 2,
    rt = 3,
    at = 4,
    ot = 5,
    st = 6,
    ct = 7,
    ht = 0,
    lt = 1,
    ut = 2,
    pt = 0,
    Mt = 1,
    dt = 2,
    ft = 3,
    mt = 4,
    gt = 301,
    vt = 302,
    yt = 303,
    xt = 304,
    bt = 305,
    _t = 306,
    Et = 307,
    Tt = 1e3,
    St = 1001,
    At = 1002,
    Lt = 1003,
    Rt = 1004,
    Ct = 1005,
    Pt = 1006,
    Ot = 1007,
    It = 1008,
    Nt = 1009,
    Dt = 1010,
    Ut = 1011,
    Bt = 1012,
    Ft = 1013,
    zt = 1014,
    Gt = 1015,
    Ht = 1016,
    Vt = 1017,
    kt = 1018,
    jt = 1019,
    Wt = 1020,
    Xt = 1021,
    qt = 1022,
    Yt = 1023,
    Jt = 1024,
    Zt = 1025,
    Qt = Yt,
    Kt = 1026,
    $t = 1027,
    te = 33776,
    ee = 33777,
    ie = 33778,
    ne = 33779,
    re = 35840,
    ae = 35841,
    oe = 35842,
    se = 35843,
    ce = 36196,
    he = 37808,
    le = 37809,
    ue = 37810,
    pe = 37811,
    de = 37812,
    fe = 37813,
    me = 37814,
    ge = 37815,
    ve = 37816,
    ye = 37817,
    xe = 37818,
    be = 37819,
    _e = 37820,
    we = 37821,
    Me = 2300,
    Ee = 2301,
    Te = 2400,
    Se = 2401,
    Ae = 2402,
    Le = 0,
    Re = 3e3,
    Ce = 3001,
    Pe = 3007,
    Oe = 3002,
    Ie = 3004,
    Ne = 3005,
    De = 3006,
    Ue = 3200,
    Be = 3201,
    Fe = 0,
    ze = 1,
    Ge = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function() { for (var r = [], t = 0; t < 256; t++) r[t] = (t < 16 ? "0" : "") + t.toString(16); return function() { var t = 4294967295 * Math.random() | 0,
            e = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0; return (r[255 & t] + r[t >> 8 & 255] + r[t >> 16 & 255] + r[t >> 24 & 255] + "-" + r[255 & e] + r[e >> 8 & 255] + "-" + r[e >> 16 & 15 | 64] + r[e >> 24 & 255] + "-" + r[63 & i | 128] + r[i >> 8 & 255] + "-" + r[i >> 16 & 255] + r[i >> 24 & 255] + r[255 & n] + r[n >> 8 & 255] + r[n >> 16 & 255] + r[n >> 24 & 255]).toUpperCase() } }(), clamp: function(t, e, i) { return Math.max(e, Math.min(i, t)) }, euclideanModulo: function(t, e) { return (t % e + e) % e }, mapLinear: function(t, e, i, n, r) { return n + (t - e) * (r - n) / (i - e) }, lerp: function(t, e, i) { return (1 - i) * t + i * e }, smoothstep: function(t, e, i) { return t <= e ? 0 : i <= t ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t) }, smootherstep: function(t, e, i) { return t <= e ? 0 : i <= t ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10) }, randInt: function(t, e) { return t + Math.floor(Math.random() * (e - t + 1)) }, randFloat: function(t, e) { return t + Math.random() * (e - t) }, randFloatSpread: function(t) { return t * (.5 - Math.random()) }, degToRad: function(t) { return t * Ge.DEG2RAD }, radToDeg: function(t) { return t * Ge.RAD2DEG }, isPowerOfTwo: function(t) { return 0 == (t & t - 1) && 0 !== t }, ceilPowerOfTwo: function(t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)) }, floorPowerOfTwo: function(t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)) } };

  function He(t, e) { this.x = t || 0, this.y = e || 0 }

  function Ve() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }

  function ke(t, e, i, n) { this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1 }

  function je(t, e, i) { this.x = t || 0, this.y = e || 0, this.z = i || 0 }

  function We() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], 0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") } Object.defineProperties(He.prototype, { width: { get: function() { return this.x }, set: function(t) { this.x = t } }, height: { get: function() { return this.y }, set: function(t) { this.y = t } } }), Object.assign(He.prototype, { isVector2: !0, set: function(t, e) { return this.x = t, this.y = e, this }, setScalar: function(t) { return this.x = t, this.y = t, this }, setX: function(t) { return this.x = t, this }, setY: function(t) { return this.y = t, this }, setComponent: function(t, e) { switch (t) {
        case 0:
          this.x = e; break;
        case 1:
          this.y = e; break;
        default:
          throw new Error("index is out of range: " + t) } return this }, getComponent: function(t) { switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t) } }, clone: function() { return new this.constructor(this.x, this.y) }, copy: function(t) { return this.x = t.x, this.y = t.y, this }, add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this) }, addScalar: function(t) { return this.x += t, this.y += t, this }, addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this }, addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this }, sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this) }, subScalar: function(t) { return this.x -= t, this.y -= t, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this }, multiply: function(t) { return this.x *= t.x, this.y *= t.y, this }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this }, divide: function(t) { return this.x /= t.x, this.y /= t.y, this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, applyMatrix3: function(t) { var e = this.x,
        i = this.y,
        n = t.elements; return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this }, min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this }, max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this }, clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this }, clampScalar: (i = new He, n = new He, function(t, e) { return i.set(t, t), n.set(e, e), this.clamp(i, n) }), clampLength: function(t, e) { var i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))) }, floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, roundToZero: function() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }, negate: function() { return this.x = -this.x, this.y = -this.y, this }, dot: function(t) { return this.x * t.x + this.y * t.y }, cross: function(t) { return this.x * t.y - this.y * t.x }, lengthSq: function() { return this.x * this.x + this.y * this.y }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y) }, manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) }, normalize: function() { return this.divideScalar(this.length() || 1) }, angle: function() { var t = Math.atan2(this.y, this.x); return t < 0 && (t += 2 * Math.PI), t }, distanceTo: function(t) { return Math.sqrt(this.distanceToSquared(t)) }, distanceToSquared: function(t) { var e = this.x - t.x,
        i = this.y - t.y; return e * e + i * i }, manhattanDistanceTo: function(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) }, setLength: function(t) { return this.normalize().multiplyScalar(t) }, lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this }, lerpVectors: function(t, e, i) { return this.subVectors(e, t).multiplyScalar(i).add(t) }, equals: function(t) { return t.x === this.x && t.y === this.y }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t }, fromBufferAttribute: function(t, e, i) { return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this }, rotateAround: function(t, e) { var i = Math.cos(e),
        n = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y; return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this } }), Object.assign(Ve.prototype, { isMatrix4: !0, set: function(t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) { var g = this.elements; return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this }, identity: function() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }, clone: function() { return (new Ve).fromArray(this.elements) }, copy: function(t) { var e = this.elements,
        i = t.elements; return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this }, copyPosition: function(t) { var e = this.elements,
        i = t.elements; return e[12] = i[12], e[13] = i[13], e[14] = i[14], this }, extractBasis: function(t, e, i) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this }, makeBasis: function(t, e, i) { return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this }, extractRotation: (p = new je, function(t) { var e = this.elements,
        i = t.elements,
        n = 1 / p.setFromMatrixColumn(t, 0).length(),
        r = 1 / p.setFromMatrixColumn(t, 1).length(),
        a = 1 / p.setFromMatrixColumn(t, 2).length(); return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this }), makeRotationFromEuler: function(t) { t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z,
        a = Math.cos(i),
        o = Math.sin(i),
        s = Math.cos(n),
        c = Math.sin(n),
        h = Math.cos(r),
        l = Math.sin(r); if ("XYZ" === t.order) { var u = a * h,
          p = a * l,
          d = o * h,
          f = o * l;
        e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s } else if ("YXZ" === t.order) { var m = s * h,
          g = s * l,
          v = c * h,
          y = c * l;
        e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s } else if ("ZXY" === t.order) { m = s * h, g = s * l, v = c * h, y = c * l;
        e[0] = m - y * o, e[4] = -a * l, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s } else if ("ZYX" === t.order) { u = a * h, p = a * l, d = o * h, f = o * l;
        e[0] = s * h, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s } else if ("YZX" === t.order) { var x = a * s,
          b = a * c,
          _ = o * s,
          w = o * c;
        e[0] = s * h, e[4] = w - x * l, e[8] = _ * l + b, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = b * l + _, e[10] = x - w * l } else if ("XZY" === t.order) { x = a * s, b = a * c, _ = o * s, w = o * c;
        e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + w, e[5] = a * h, e[9] = b * l - _, e[2] = _ * l - b, e[6] = o * h, e[10] = w * l + x } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this }, makeRotationFromQuaternion: (c = new je(0, 0, 0), h = new je(1, 1, 1), function(t) { return this.compose(c, t, h) }), lookAt: (a = new je, o = new je, s = new je, function(t, e, i) { var n = this.elements; return s.subVectors(t, e), 0 === s.lengthSq() && (s.z = 1), s.normalize(), a.crossVectors(i, s), 0 === a.lengthSq() && (1 === Math.abs(i.z) ? s.x += 1e-4 : s.z += 1e-4, s.normalize(), a.crossVectors(i, s)), a.normalize(), o.crossVectors(s, a), n[0] = a.x, n[4] = o.x, n[8] = s.x, n[1] = a.y, n[5] = o.y, n[9] = s.y, n[2] = a.z, n[6] = o.z, n[10] = s.z, this }), multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t) }, premultiply: function(t) { return this.multiplyMatrices(t, this) }, multiplyMatrices: function(t, e) { var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        o = i[4],
        s = i[8],
        c = i[12],
        h = i[1],
        l = i[5],
        u = i[9],
        p = i[13],
        d = i[2],
        f = i[6],
        m = i[10],
        g = i[14],
        v = i[3],
        y = i[7],
        x = i[11],
        b = i[15],
        _ = n[0],
        w = n[4],
        M = n[8],
        E = n[12],
        T = n[1],
        S = n[5],
        A = n[9],
        L = n[13],
        R = n[2],
        C = n[6],
        P = n[10],
        O = n[14],
        I = n[3],
        N = n[7],
        D = n[11],
        U = n[15]; return r[0] = a * _ + o * T + s * R + c * I, r[4] = a * w + o * S + s * C + c * N, r[8] = a * M + o * A + s * P + c * D, r[12] = a * E + o * L + s * O + c * U, r[1] = h * _ + l * T + u * R + p * I, r[5] = h * w + l * S + u * C + p * N, r[9] = h * M + l * A + u * P + p * D, r[13] = h * E + l * L + u * O + p * U, r[2] = d * _ + f * T + m * R + g * I, r[6] = d * w + f * S + m * C + g * N, r[10] = d * M + f * A + m * P + g * D, r[14] = d * E + f * L + m * O + g * U, r[3] = v * _ + y * T + x * R + b * I, r[7] = v * w + y * S + x * C + b * N, r[11] = v * M + y * A + x * P + b * D, r[15] = v * E + y * L + x * O + b * U, this }, multiplyScalar: function(t) { var e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this }, applyToBufferAttribute: (r = new je, function(t) { for (var e = 0, i = t.count; e < i; e++) r.x = t.getX(e), r.y = t.getY(e), r.z = t.getZ(e), r.applyMatrix4(this), t.setXYZ(e, r.x, r.y, r.z); return t }), determinant: function() { var t = this.elements,
        e = t[0],
        i = t[4],
        n = t[8],
        r = t[12],
        a = t[1],
        o = t[5],
        s = t[9],
        c = t[13],
        h = t[2],
        l = t[6],
        u = t[10],
        p = t[14]; return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h) }, transpose: function() { var t, e = this.elements; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this }, setPosition: function(t) { var e = this.elements; return e[12] = t.x, e[13] = t.y, e[14] = t.z, this }, getInverse: function(t, e) { var i = this.elements,
        n = t.elements,
        r = n[0],
        a = n[1],
        o = n[2],
        s = n[3],
        c = n[4],
        h = n[5],
        l = n[6],
        u = n[7],
        p = n[8],
        d = n[9],
        f = n[10],
        m = n[11],
        g = n[12],
        v = n[13],
        y = n[14],
        x = n[15],
        b = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x,
        _ = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x,
        w = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x,
        M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y,
        E = r * b + a * _ + o * w + s * M; if (0 === E) { var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"; if (!0 === e) throw new Error(T); return console.warn(T), this.identity() } var S = 1 / E; return i[0] = b * S, i[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * S, i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * S, i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * S, i[4] = _ * S, i[5] = (p * y * s - g * f * s + g * o * m - r * y * m - p * o * x + r * f * x) * S, i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * S, i[7] = (c * f * s - p * l * s + p * o * u - r * f * u - c * o * m + r * l * m) * S, i[8] = w * S, i[9] = (g * d * s - p * v * s - g * a * m + r * v * m + p * a * x - r * d * x) * S, i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * S, i[11] = (p * h * s - c * d * s - p * a * u + r * d * u + c * a * m - r * h * m) * S, i[12] = M * S, i[13] = (p * v * o - g * d * o + g * a * f - r * v * f - p * a * y + r * d * y) * S, i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * S, i[15] = (c * d * o - p * h * o + p * a * l - r * d * l - c * a * f + r * h * f) * S, this }, scale: function(t) { var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z; return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this }, getMaxScaleOnAxis: function() { var t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, i, n)) }, makeTranslation: function(t, e, i) { return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this }, makeRotationX: function(t) { var e = Math.cos(t),
        i = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this }, makeRotationY: function(t) { var e = Math.cos(t),
        i = Math.sin(t); return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this }, makeRotationZ: function(t) { var e = Math.cos(t),
        i = Math.sin(t); return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }, makeRotationAxis: function(t, e) { var i = Math.cos(e),
        n = Math.sin(e),
        r = 1 - i,
        a = t.x,
        o = t.y,
        s = t.z,
        c = r * a,
        h = r * o; return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this }, makeScale: function(t, e, i) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this }, makeShear: function(t, e, i) { return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this }, compose: function(t, e, i) { var n = this.elements,
        r = e._x,
        a = e._y,
        o = e._z,
        s = e._w,
        c = r + r,
        h = a + a,
        l = o + o,
        u = r * c,
        p = r * h,
        d = r * l,
        f = a * h,
        m = a * l,
        g = o * l,
        v = s * c,
        y = s * h,
        x = s * l,
        b = i.x,
        _ = i.y,
        w = i.z; return n[0] = (1 - (f + g)) * b, n[1] = (p + x) * b, n[2] = (d - y) * b, n[3] = 0, n[4] = (p - x) * _, n[5] = (1 - (u + g)) * _, n[6] = (m + v) * _, n[7] = 0, n[8] = (d + y) * w, n[9] = (m - v) * w, n[10] = (1 - (u + f)) * w, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this }, decompose: (l = new je, u = new Ve, function(t, e, i) { var n = this.elements,
        r = l.set(n[0], n[1], n[2]).length(),
        a = l.set(n[4], n[5], n[6]).length(),
        o = l.set(n[8], n[9], n[10]).length();
      this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], u.copy(this); var s = 1 / r,
        c = 1 / a,
        h = 1 / o; return u.elements[0] *= s, u.elements[1] *= s, u.elements[2] *= s, u.elements[4] *= c, u.elements[5] *= c, u.elements[6] *= c, u.elements[8] *= h, u.elements[9] *= h, u.elements[10] *= h, e.setFromRotationMatrix(u), i.x = r, i.y = a, i.z = o, this }), makePerspective: function(t, e, i, n, r, a) { void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); var o = this.elements,
        s = 2 * r / (e - t),
        c = 2 * r / (i - n),
        h = (e + t) / (e - t),
        l = (i + n) / (i - n),
        u = -(a + r) / (a - r),
        p = -2 * a * r / (a - r); return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this }, makeOrthographic: function(t, e, i, n, r, a) { var o = this.elements,
        s = 1 / (e - t),
        c = 1 / (i - n),
        h = 1 / (a - r),
        l = (e + t) * s,
        u = (i + n) * c,
        p = (a + r) * h; return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this }, equals: function(t) { for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
        if (e[n] !== i[n]) return !1; return !0 }, fromArray: function(t, e) { void 0 === e && (e = 0); for (var i = 0; i < 16; i++) this.elements[i] = t[i + e]; return this }, toArray: function(t, e) { void 0 === t && (t = []), void 0 === e && (e = 0); var i = this.elements; return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t } }), Object.assign(ke, { slerp: function(t, e, i, n) { return i.copy(t).slerp(e, n) }, slerpFlat: function(t, e, i, n, r, a, o) { var s = i[n + 0],
        c = i[n + 1],
        h = i[n + 2],
        l = i[n + 3],
        u = r[a + 0],
        p = r[a + 1],
        d = r[a + 2],
        f = r[a + 3]; if (l !== f || s !== u || c !== p || h !== d) { var m = 1 - o,
          g = s * u + c * p + h * d + l * f,
          v = 0 <= g ? 1 : -1,
          y = 1 - g * g; if (y > Number.EPSILON) { var x = Math.sqrt(y),
            b = Math.atan2(x, g * v);
          m = Math.sin(m * b) / x, o = Math.sin(o * b) / x } var _ = o * v; if (s = s * m + u * _, c = c * m + p * _, h = h * m + d * _, l = l * m + f * _, m === 1 - o) { var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
          s *= w, c *= w, h *= w, l *= w } } t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l } }), Object.defineProperties(ke.prototype, { x: { get: function() { return this._x }, set: function(t) { this._x = t, this.onChangeCallback() } }, y: { get: function() { return this._y }, set: function(t) { this._y = t, this.onChangeCallback() } }, z: { get: function() { return this._z }, set: function(t) { this._z = t, this.onChangeCallback() } }, w: { get: function() { return this._w }, set: function(t) { this._w = t, this.onChangeCallback() } } }), Object.assign(ke.prototype, { set: function(t, e, i, n) { return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this }, clone: function() { return new this.constructor(this._x, this._y, this._z, this._w) }, copy: function(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this }, setFromEuler: function(t, e) { if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); var i = t._x,
        n = t._y,
        r = t._z,
        a = t.order,
        o = Math.cos,
        s = Math.sin,
        c = o(i / 2),
        h = o(n / 2),
        l = o(r / 2),
        u = s(i / 2),
        p = s(n / 2),
        d = s(r / 2); return "XYZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "YXZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "ZXY" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "ZYX" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "YZX" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d) : "XZY" === a && (this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d), !1 !== e && this.onChangeCallback(), this }, setFromAxisAngle: function(t, e) { var i = e / 2,
        n = Math.sin(i); return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this }, setFromRotationMatrix: function(t) { var e, i = t.elements,
        n = i[0],
        r = i[4],
        a = i[8],
        o = i[1],
        s = i[5],
        c = i[9],
        h = i[2],
        l = i[6],
        u = i[10],
        p = n + s + u; return 0 < p ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - c) * e, this._y = (a - h) * e, this._z = (o - r) * e) : s < n && u < n ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + h) / e) : u < s ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + h) / e, this._y = (c + l) / e, this._z = .25 * e), this.onChangeCallback(), this }, setFromUnitVectors: (f = new je, function(t, e) { return void 0 === f && (f = new je), (d = t.dot(e) + 1) < 1e-6 ? (d = 0, Math.abs(t.x) > Math.abs(t.z) ? f.set(-t.y, t.x, 0) : f.set(0, -t.z, t.y)) : f.crossVectors(t, e), this._x = f.x, this._y = f.y, this._z = f.z, this._w = d, this.normalize() }), angleTo: function(t) { return 2 * Math.acos(Math.abs(Ge.clamp(this.dot(t), -1, 1))) }, rotateTowards: function(t, e) { var i = this.angleTo(t); if (0 === i) return this; var n = Math.min(1, e / i); return this.slerp(t, n), this }, inverse: function() { return this.conjugate() }, conjugate: function() { return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this }, dot: function(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w }, lengthSq: function() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }, length: function() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) }, normalize: function() { var t = this.length(); return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this }, multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t) }, premultiply: function(t) { return this.multiplyQuaternions(t, this) }, multiplyQuaternions: function(t, e) { var i = t._x,
        n = t._y,
        r = t._z,
        a = t._w,
        o = e._x,
        s = e._y,
        c = e._z,
        h = e._w; return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this.onChangeCallback(), this }, slerp: function(t, e) { if (0 === e) return this; if (1 === e) return this.copy(t); var i = this._x,
        n = this._y,
        r = this._z,
        a = this._w,
        o = a * t._w + i * t._x + n * t._y + r * t._z; if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), 1 <= o) return this._w = a, this._x = i, this._y = n, this._z = r, this; var s = 1 - o * o; if (s <= Number.EPSILON) { var c = 1 - e; return this._w = c * a + e * this._w, this._x = c * i + e * this._x, this._y = c * n + e * this._y, this._z = c * r + e * this._z, this.normalize() } var h = Math.sqrt(s),
        l = Math.atan2(h, o),
        u = Math.sin((1 - e) * l) / h,
        p = Math.sin(e * l) / h; return this._w = a * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this }, equals: function(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w }, fromArray: function(t, e) { return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t }, onChange: function(t) { return this.onChangeCallback = t, this }, onChangeCallback: function() {} }), Object.assign(je.prototype, { isVector3: !0, set: function(t, e, i) { return this.x = t, this.y = e, this.z = i, this }, setScalar: function(t) { return this.x = t, this.y = t, this.z = t, this }, setX: function(t) { return this.x = t, this }, setY: function(t) { return this.y = t, this }, setZ: function(t) { return this.z = t, this }, setComponent: function(t, e) { switch (t) {
        case 0:
          this.x = e; break;
        case 1:
          this.y = e; break;
        case 2:
          this.z = e; break;
        default:
          throw new Error("index is out of range: " + t) } return this }, getComponent: function(t) { switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t) } }, clone: function() { return new this.constructor(this.x, this.y, this.z) }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this }, add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this) }, addScalar: function(t) { return this.x += t, this.y += t, this.z += t, this }, addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this }, addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this }, sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) }, subScalar: function(t) { return this.x -= t, this.y -= t, this.z -= t, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this }, multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this) }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this }, multiplyVectors: function(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this }, applyEuler: (w = new ke, function(t) { return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(w.setFromEuler(t)) }), applyAxisAngle: (_ = new ke, function(t, e) { return this.applyQuaternion(_.setFromAxisAngle(t, e)) }), applyMatrix3: function(t) { var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements; return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this }, applyMatrix4: function(t) { var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]); return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this }, applyQuaternion: function(t) { var e = this.x,
        i = this.y,
        n = this.z,
        r = t.x,
        a = t.y,
        o = t.z,
        s = t.w,
        c = s * e + a * n - o * i,
        h = s * i + o * e - r * n,
        l = s * n + r * i - a * e,
        u = -r * e - a * i - o * n; return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this }, project: (b = new Ve, function(t) { return b.multiplyMatrices(t.projectionMatrix, b.getInverse(t.matrixWorld)), this.applyMatrix4(b) }), unproject: (x = new Ve, function(t) { return x.multiplyMatrices(t.matrixWorld, x.getInverse(t.projectionMatrix)), this.applyMatrix4(x) }), transformDirection: function(t) { var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements; return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize() }, divide: function(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this }, max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this }, clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this }, clampScalar: (v = new je, y = new je, function(t, e) { return v.set(t, t, t), y.set(e, e, e), this.clamp(v, y) }), clampLength: function(t, e) { var i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))) }, floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }, ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }, round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }, roundToZero: function() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }, negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }, dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z }, lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }, manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }, normalize: function() { return this.divideScalar(this.length() || 1) }, setLength: function(t) { return this.normalize().multiplyScalar(t) }, lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this }, lerpVectors: function(t, e, i) { return this.subVectors(e, t).multiplyScalar(i).add(t) }, cross: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t) }, crossVectors: function(t, e) { var i = t.x,
        n = t.y,
        r = t.z,
        a = e.x,
        o = e.y,
        s = e.z; return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this }, projectOnVector: function(t) { var e = t.dot(this) / t.lengthSq(); return this.copy(t).multiplyScalar(e) }, projectOnPlane: (g = new je, function(t) { return g.copy(this).projectOnVector(t), this.sub(g) }), reflect: (m = new je, function(t) { return this.sub(m.copy(t).multiplyScalar(2 * this.dot(t))) }), angleTo: function(t) { var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()); return Math.acos(Ge.clamp(e, -1, 1)) }, distanceTo: function(t) { return Math.sqrt(this.distanceToSquared(t)) }, distanceToSquared: function(t) { var e = this.x - t.x,
        i = this.y - t.y,
        n = this.z - t.z; return e * e + i * i + n * n }, manhattanDistanceTo: function(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) }, setFromSpherical: function(t) { var e = Math.sin(t.phi) * t.radius; return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this }, setFromCylindrical: function(t) { return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this }, setFromMatrixPosition: function(t) { var e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this }, setFromMatrixScale: function(t) { var e = this.setFromMatrixColumn(t, 0).length(),
        i = this.setFromMatrixColumn(t, 1).length(),
        n = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = i, this.z = n, this }, setFromMatrixColumn: function(t, e) { return this.fromArray(t.elements, 4 * e) }, equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t }, fromBufferAttribute: function(t, e, i) { return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this } }), Object.assign(We.prototype, { isMatrix3: !0, set: function(t, e, i, n, r, a, o, s, c) { var h = this.elements; return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this }, identity: function() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }, clone: function() { return (new this.constructor).fromArray(this.elements) }, copy: function(t) { var e = this.elements,
        i = t.elements; return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this }, setFromMatrix4: function(t) { var e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this }, applyToBufferAttribute: (M = new je, function(t) { for (var e = 0, i = t.count; e < i; e++) M.x = t.getX(e), M.y = t.getY(e), M.z = t.getZ(e), M.applyMatrix3(this), t.setXYZ(e, M.x, M.y, M.z); return t }), multiply: function(t) { return this.multiplyMatrices(this, t) }, premultiply: function(t) { return this.multiplyMatrices(t, this) }, multiplyMatrices: function(t, e) { var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        o = i[3],
        s = i[6],
        c = i[1],
        h = i[4],
        l = i[7],
        u = i[2],
        p = i[5],
        d = i[8],
        f = n[0],
        m = n[3],
        g = n[6],
        v = n[1],
        y = n[4],
        x = n[7],
        b = n[2],
        _ = n[5],
        w = n[8]; return r[0] = a * f + o * v + s * b, r[3] = a * m + o * y + s * _, r[6] = a * g + o * x + s * w, r[1] = c * f + h * v + l * b, r[4] = c * m + h * y + l * _, r[7] = c * g + h * x + l * w, r[2] = u * f + p * v + d * b, r[5] = u * m + p * y + d * _, r[8] = u * g + p * x + d * w, this }, multiplyScalar: function(t) { var e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this }, determinant: function() { var t = this.elements,
        e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        s = t[6],
        c = t[7],
        h = t[8]; return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s }, getInverse: function(t, e) { t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument."); var i = t.elements,
        n = this.elements,
        r = i[0],
        a = i[1],
        o = i[2],
        s = i[3],
        c = i[4],
        h = i[5],
        l = i[6],
        u = i[7],
        p = i[8],
        d = p * c - h * u,
        f = h * l - p * s,
        m = u * s - c * l,
        g = r * d + a * f + o * m; if (0 === g) { var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"; if (!0 === e) throw new Error(v); return console.warn(v), this.identity() } var y = 1 / g; return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (h * a - o * c) * y, n[3] = f * y, n[4] = (p * r - o * l) * y, n[5] = (o * s - h * r) * y, n[6] = m * y, n[7] = (a * l - u * r) * y, n[8] = (c * r - a * s) * y, this }, transpose: function() { var t, e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this }, getNormalMatrix: function(t) { return this.setFromMatrix4(t).getInverse(this).transpose() }, transposeIntoArray: function(t) { var e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this }, setUvTransform: function(t, e, i, n, r, a, o) { var s = Math.cos(r),
        c = Math.sin(r);
      this.set(i * s, i * c, -i * (s * a + c * o) + a + t, -n * c, n * s, -n * (-c * a + s * o) + o + e, 0, 0, 1) }, scale: function(t, e) { var i = this.elements; return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this }, rotate: function(t) { var e = Math.cos(t),
        i = Math.sin(t),
        n = this.elements,
        r = n[0],
        a = n[3],
        o = n[6],
        s = n[1],
        c = n[4],
        h = n[7]; return n[0] = e * r + i * s, n[3] = e * a + i * c, n[6] = e * o + i * h, n[1] = -i * r + e * s, n[4] = -i * a + e * c, n[7] = -i * o + e * h, this }, translate: function(t, e) { var i = this.elements; return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this }, equals: function(t) { for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
        if (e[n] !== i[n]) return !1; return !0 }, fromArray: function(t, e) { void 0 === e && (e = 0); for (var i = 0; i < 9; i++) this.elements[i] = t[i + e]; return this }, toArray: function(t, e) { void 0 === t && (t = []), void 0 === e && (e = 0); var i = this.elements; return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t } }); var Xe, qe, Ye, Je, Ze, Qe, Ke, $e, ti, ei, ii, ni, ri, ai, oi, si = { getDataURL: function(t) { var e; if (t instanceof HTMLCanvasElement) e = t;
        else { "undefined" != typeof OffscreenCanvas ? e = new OffscreenCanvas(t.width, t.height) : ((e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height); var i = e.getContext("2d");
          t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height) } return 2048 < e.width || 2048 < e.height ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png") } },
    ci = 0;

  function hi(t, e, i, n, r, a, o, s, c, h) { Object.defineProperty(this, "id", { value: ci++ }), this.uuid = Ge.generateUUID(), this.name = "", this.image = void 0 !== t ? t : hi.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : hi.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : St, this.wrapT = void 0 !== n ? n : St, this.magFilter = void 0 !== r ? r : Pt, this.minFilter = void 0 !== a ? a : It, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Yt, this.type = void 0 !== s ? s : Nt, this.offset = new He(0, 0), this.repeat = new He(1, 1), this.center = new He(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new We, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : Re, this.version = 0, this.onUpdate = null }

  function li(t, e, i, n) { this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1 }

  function ui(t, e, i) { this.width = t, this.height = e, this.scissor = new li(0, 0, t, e), this.scissorTest = !1, this.viewport = new li(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = Pt), this.texture = new hi(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 === i.generateMipmaps || i.generateMipmaps, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null }

  function pi(t, e, i) { ui.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0 }

  function di(t, e, i, n, r, a, o, s, c, h, l, u) { hi.call(this, null, a, o, s, c, h, n, r, l, u), this.image = { data: t, width: e, height: i }, this.magFilter = void 0 !== c ? c : Lt, this.minFilter = void 0 !== h ? h : Lt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 }

  function fi(t, e) { this.min = void 0 !== t ? t : new je(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new je(-1 / 0, -1 / 0, -1 / 0) }

  function mi(t, e) { this.center = void 0 !== t ? t : new je, this.radius = void 0 !== e ? e : 0 }

  function gi(t, e) { this.normal = void 0 !== t ? t : new je(1, 0, 0), this.constant = void 0 !== e ? e : 0 }

  function vi(t, e, i, n, r, a) { this.planes = [void 0 !== t ? t : new gi, void 0 !== e ? e : new gi, void 0 !== i ? i : new gi, void 0 !== n ? n : new gi, void 0 !== r ? r : new gi, void 0 !== a ? a : new gi] } hi.DEFAULT_IMAGE = void 0, hi.DEFAULT_MAPPING = 300, hi.prototype = Object.assign(Object.create(e.prototype), { constructor: hi, isTexture: !0, updateMatrix: function() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this }, toJSON: function(t) { var e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid]; var i = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY }; if (void 0 !== this.image) { var n = this.image; if (void 0 === n.uuid && (n.uuid = Ge.generateUUID()), !e && void 0 === t.images[n.uuid]) { var r; if (Array.isArray(n)) { r = []; for (var a = 0, o = n.length; a < o; a++) r.push(si.getDataURL(n[a])) } else r = si.getDataURL(n);
          t.images[n.uuid] = { uuid: n.uuid, url: r } } i.image = n.uuid } return e || (t.textures[this.uuid] = i), i }, dispose: function() { this.dispatchEvent({ type: "dispose" }) }, transformUv: function(t) { if (300 === this.mapping) { if (t.applyMatrix3(this.matrix), t.x < 0 || 1 < t.x) switch (this.wrapS) {
          case Tt:
            t.x = t.x - Math.floor(t.x); break;
          case St:
            t.x = t.x < 0 ? 0 : 1; break;
          case At:
            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x) }
        if (t.y < 0 || 1 < t.y) switch (this.wrapT) {
          case Tt:
            t.y = t.y - Math.floor(t.y); break;
          case St:
            t.y = t.y < 0 ? 0 : 1; break;
          case At:
            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y) } this.flipY && (t.y = 1 - t.y) } } }), Object.defineProperty(hi.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(li.prototype, { isVector4: !0, set: function(t, e, i, n) { return this.x = t, this.y = e, this.z = i, this.w = n, this }, setScalar: function(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this }, setX: function(t) { return this.x = t, this }, setY: function(t) { return this.y = t, this }, setZ: function(t) { return this.z = t, this }, setW: function(t) { return this.w = t, this }, setComponent: function(t, e) { switch (t) {
        case 0:
          this.x = e; break;
        case 1:
          this.y = e; break;
        case 2:
          this.z = e; break;
        case 3:
          this.w = e; break;
        default:
          throw new Error("index is out of range: " + t) } return this }, getComponent: function(t) { switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t) } }, clone: function() { return new this.constructor(this.x, this.y, this.z, this.w) }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this }, add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this) }, addScalar: function(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this }, addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this }, addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this }, sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this) }, subScalar: function(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this }, applyMatrix4: function(t) { var e = this.x,
        i = this.y,
        n = this.z,
        r = this.w,
        a = t.elements; return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, setAxisAngleFromQuaternion: function(t) { this.w = 2 * Math.acos(t.w); var e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this }, setAxisAngleFromRotationMatrix: function(t) { var e, i, n, r, a = t.elements,
        o = a[0],
        s = a[4],
        c = a[8],
        h = a[1],
        l = a[5],
        u = a[9],
        p = a[2],
        d = a[6],
        f = a[10]; if (Math.abs(s - h) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) { if (Math.abs(s + h) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
        e = Math.PI; var m = (o + 1) / 2,
          g = (l + 1) / 2,
          v = (f + 1) / 2,
          y = (s + h) / 4,
          x = (c + p) / 4,
          b = (u + d) / 4; return g < m && v < m ? m < .01 ? (i = 0, r = n = .707106781) : (n = y / (i = Math.sqrt(m)), r = x / i) : v < g ? g < .01 ? (n = 0, r = i = .707106781) : (i = y / (n = Math.sqrt(g)), r = b / n) : v < .01 ? (n = i = .707106781, r = 0) : (i = x / (r = Math.sqrt(v)), n = b / r), this.set(i, n, r, e), this } var _ = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s)); return Math.abs(_) < .001 && (_ = 1), this.x = (d - u) / _, this.y = (c - p) / _, this.z = (h - s) / _, this.w = Math.acos((o + l + f - 1) / 2), this }, min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this }, max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this }, clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this }, clampScalar: function(t, e) { return void 0 === Xe && (Xe = new li, qe = new li), Xe.set(t, t, t, t), qe.set(e, e, e, e), this.clamp(Xe, qe) }, clampLength: function(t, e) { var i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))) }, floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this }, ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this }, round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this }, roundToZero: function() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this }, negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this }, dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w }, lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) }, manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) }, normalize: function() { return this.divideScalar(this.length() || 1) }, setLength: function(t) { return this.normalize().multiplyScalar(t) }, lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this }, lerpVectors: function(t, e, i) { return this.subVectors(e, t).multiplyScalar(i).add(t) }, equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t }, fromBufferAttribute: function(t, e, i) { return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this } }), ui.prototype = Object.assign(Object.create(e.prototype), { constructor: ui, isWebGLRenderTarget: !0, setSize: function(t, e) { this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), ((pi.prototype = Object.create(ui.prototype)).constructor = pi).prototype.isWebGLRenderTargetCube = !0, ((di.prototype = Object.create(hi.prototype)).constructor = di).prototype.isDataTexture = !0, Object.assign(fi.prototype, { isBox3: !0, set: function(t, e) { return this.min.copy(t), this.max.copy(e), this }, setFromArray: function(t) { for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) { var h = t[s],
          l = t[s + 1],
          u = t[s + 2];
        h < e && (e = h), l < i && (i = l), u < n && (n = u), r < h && (r = h), a < l && (a = l), o < u && (o = u) } return this.min.set(e, i, n), this.max.set(r, a, o), this }, setFromBufferAttribute: function(t) { for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) { var h = t.getX(s),
          l = t.getY(s),
          u = t.getZ(s);
        h < e && (e = h), l < i && (i = l), u < n && (n = u), r < h && (r = h), a < l && (a = l), o < u && (o = u) } return this.min.set(e, i, n), this.max.set(r, a, o), this }, setFromPoints: function(t) { this.makeEmpty(); for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]); return this }, setFromCenterAndSize: (Qe = new je, function(t, e) { var i = Qe.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(i), this.max.copy(t).add(i), this }), setFromObject: function(t) { return this.makeEmpty(), this.expandByObject(t) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.min.copy(t.min), this.max.copy(t.max), this }, makeEmpty: function() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this }, isEmpty: function() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new je), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) }, getSize: function(t) { return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new je), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) }, expandByPoint: function(t) { return this.min.min(t), this.max.max(t), this }, expandByVector: function(t) { return this.min.sub(t), this.max.add(t), this }, expandByScalar: function(t) { return this.min.addScalar(-t), this.max.addScalar(t), this }, expandByObject: function() { var r, a, o, s = new je;

      function e(t) { var e = t.geometry; if (void 0 !== e)
          if (e.isGeometry) { var i = e.vertices; for (a = 0, o = i.length; a < o; a++) s.copy(i[a]), s.applyMatrix4(t.matrixWorld), r.expandByPoint(s) }
        else if (e.isBufferGeometry) { var n = e.attributes.position; if (void 0 !== n)
            for (a = 0, o = n.count; a < o; a++) s.fromBufferAttribute(n, a).applyMatrix4(t.matrixWorld), r.expandByPoint(s) } } return function(t) { return r = this, t.updateMatrixWorld(!0), t.traverse(e), this } }(), containsPoint: function(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z) }, containsBox: function(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z }, getParameter: function(t, e) { return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new je), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) }, intersectsBox: function(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z) }, intersectsSphere: (Ze = new je, function(t) { return this.clampPoint(t.center, Ze), Ze.distanceToSquared(t.center) <= t.radius * t.radius }), intersectsPlane: function(t) { var e, i; return 0 < t.normal.x ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), 0 < t.normal.y ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), 0 < t.normal.z ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant }, intersectsTriangle: function() { var s = new je,
        c = new je,
        h = new je,
        i = new je,
        n = new je,
        r = new je,
        l = new je,
        a = new je,
        u = new je,
        o = new je;

      function p(t) { var e, i; for (e = 0, i = t.length - 3; e <= i; e += 3) { l.fromArray(t, e); var n = u.x * Math.abs(l.x) + u.y * Math.abs(l.y) + u.z * Math.abs(l.z),
            r = s.dot(l),
            a = c.dot(l),
            o = h.dot(l); if (Math.max(-Math.max(r, a, o), Math.min(r, a, o)) > n) return !1 } return !0 } return function(t) { if (this.isEmpty()) return !1;
        this.getCenter(a), u.subVectors(this.max, a), s.subVectors(t.a, a), c.subVectors(t.b, a), h.subVectors(t.c, a), i.subVectors(c, s), n.subVectors(h, c), r.subVectors(s, h); var e = [0, -i.z, i.y, 0, -n.z, n.y, 0, -r.z, r.y, i.z, 0, -i.x, n.z, 0, -n.x, r.z, 0, -r.x, -i.y, i.x, 0, -n.y, n.x, 0, -r.y, r.x, 0]; return !!p(e) && (!!p(e = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (o.crossVectors(i, n), p(e = [o.x, o.y, o.z]))) } }(), clampPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new je), e.copy(t).clamp(this.min, this.max) }, distanceToPoint: (Je = new je, function(t) { return Je.copy(t).clamp(this.min, this.max).sub(t).length() }), getBoundingSphere: (Ye = new je, function(t) { return void 0 === t && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), t = new mi), this.getCenter(t.center), t.radius = .5 * this.getSize(Ye).length(), t }), intersect: function(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this }, union: function(t) { return this.min.min(t.min), this.max.max(t.max), this }, applyMatrix4: function(t) { if (this.isEmpty()) return this; var e = t.elements,
        i = e[0] * this.min.x,
        n = e[1] * this.min.x,
        r = e[2] * this.min.x,
        a = e[0] * this.max.x,
        o = e[1] * this.max.x,
        s = e[2] * this.max.x,
        c = e[4] * this.min.y,
        h = e[5] * this.min.y,
        l = e[6] * this.min.y,
        u = e[4] * this.max.y,
        p = e[5] * this.max.y,
        d = e[6] * this.max.y,
        f = e[8] * this.min.z,
        m = e[9] * this.min.z,
        g = e[10] * this.min.z,
        v = e[8] * this.max.z,
        y = e[9] * this.max.z,
        x = e[10] * this.max.z; return this.min.x = Math.min(i, a) + Math.min(c, u) + Math.min(f, v) + e[12], this.min.y = Math.min(n, o) + Math.min(h, p) + Math.min(m, y) + e[13], this.min.z = Math.min(r, s) + Math.min(l, d) + Math.min(g, x) + e[14], this.max.x = Math.max(i, a) + Math.max(c, u) + Math.max(f, v) + e[12], this.max.y = Math.max(n, o) + Math.max(h, p) + Math.max(m, y) + e[13], this.max.z = Math.max(r, s) + Math.max(l, d) + Math.max(g, x) + e[14], this }, translate: function(t) { return this.min.add(t), this.max.add(t), this }, equals: function(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }), Object.assign(mi.prototype, { set: function(t, e) { return this.center.copy(t), this.radius = e, this }, setFromPoints: (Ke = new fi, function(t, e) { var i = this.center;
      void 0 !== e ? i.copy(e) : Ke.setFromPoints(t).getCenter(i); for (var n = 0, r = 0, a = t.length; r < a; r++) n = Math.max(n, i.distanceToSquared(t[r])); return this.radius = Math.sqrt(n), this }), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.center.copy(t.center), this.radius = t.radius, this }, empty: function() { return this.radius <= 0 }, containsPoint: function(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius }, distanceToPoint: function(t) { return t.distanceTo(this.center) - this.radius }, intersectsSphere: function(t) { var e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e }, intersectsBox: function(t) { return t.intersectsSphere(this) }, intersectsPlane: function(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius }, clampPoint: function(t, e) { var i = this.center.distanceToSquared(t); return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new je), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e }, getBoundingBox: function(t) { return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new fi), t.set(this.center, this.center), t.expandByScalar(this.radius), t }, applyMatrix4: function(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this }, translate: function(t) { return this.center.add(t), this }, equals: function(t) { return t.center.equals(this.center) && t.radius === this.radius } }), Object.assign(gi.prototype, { set: function(t, e) { return this.normal.copy(t), this.constant = e, this }, setComponents: function(t, e, i, n) { return this.normal.set(t, e, i), this.constant = n, this }, setFromNormalAndCoplanarPoint: function(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this }, setFromCoplanarPoints: (ii = new je, ni = new je, function(t, e, i) { var n = ii.subVectors(i, e).cross(ni.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(n, t), this }), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.normal.copy(t.normal), this.constant = t.constant, this }, normalize: function() { var t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this }, negate: function() { return this.constant *= -1, this.normal.negate(), this }, distanceToPoint: function(t) { return this.normal.dot(t) + this.constant }, distanceToSphere: function(t) { return this.distanceToPoint(t.center) - t.radius }, projectPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new je), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t) }, intersectLine: (ei = new je, function(t, e) { void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new je); var i = t.delta(ei),
        n = this.normal.dot(i); if (0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0; var r = -(t.start.dot(this.normal) + this.constant) / n; return r < 0 || 1 < r ? void 0 : e.copy(i).multiplyScalar(r).add(t.start) }), intersectsLine: function(t) { var e = this.distanceToPoint(t.start),
        i = this.distanceToPoint(t.end); return e < 0 && 0 < i || i < 0 && 0 < e }, intersectsBox: function(t) { return t.intersectsPlane(this) }, intersectsSphere: function(t) { return t.intersectsPlane(this) }, coplanarPoint: function(t) { return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new je), t.copy(this.normal).multiplyScalar(-this.constant) }, applyMatrix4: ($e = new je, ti = new We, function(t, e) { var i = e || ti.getNormalMatrix(t),
        n = this.coplanarPoint($e).applyMatrix4(t),
        r = this.normal.applyMatrix3(i).normalize(); return this.constant = -n.dot(r), this }), translate: function(t) { return this.constant -= t.dot(this.normal), this }, equals: function(t) { return t.normal.equals(this.normal) && t.constant === this.constant } }), Object.assign(vi.prototype, { set: function(t, e, i, n, r, a) { var o = this.planes; return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]); return this }, setFromMatrix: function(t) { var e = this.planes,
        i = t.elements,
        n = i[0],
        r = i[1],
        a = i[2],
        o = i[3],
        s = i[4],
        c = i[5],
        h = i[6],
        l = i[7],
        u = i[8],
        p = i[9],
        d = i[10],
        f = i[11],
        m = i[12],
        g = i[13],
        v = i[14],
        y = i[15]; return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + c, f + p, y + g).normalize(), e[3].setComponents(o - r, l - c, f - p, y - g).normalize(), e[4].setComponents(o - a, l - h, f - d, y - v).normalize(), e[5].setComponents(o + a, l + h, f + d, y + v).normalize(), this }, intersectsObject: (oi = new mi, function(t) { var e = t.geometry; return null === e.boundingSphere && e.computeBoundingSphere(), oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(oi) }), intersectsSprite: (ai = new mi, function(t) { return ai.center.set(0, 0, 0), ai.radius = .7071067811865476, ai.applyMatrix4(t.matrixWorld), this.intersectsSphere(ai) }), intersectsSphere: function(t) { for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) { if (e[r].distanceToPoint(i) < n) return !1 } return !0 }, intersectsBox: (ri = new je, function(t) { for (var e = this.planes, i = 0; i < 6; i++) { var n = e[i]; if (ri.x = 0 < n.normal.x ? t.max.x : t.min.x, ri.y = 0 < n.normal.y ? t.max.y : t.min.y, ri.z = 0 < n.normal.z ? t.max.z : t.min.z, n.distanceToPoint(ri) < 0) return !1 } return !0 }), containsPoint: function(t) { for (var e = this.planes, i = 0; i < 6; i++)
        if (e[i].distanceToPoint(t) < 0) return !1; return !0 } }); var yi, xi = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n", alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "\nvec3 transformed = vec3( position );\n", beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n", bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n", color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n", color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif", common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n", defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n", encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n", encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n", envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n", envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n", envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n", fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n", gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n", lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n", lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n", map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n", map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n", map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n", normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n", normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n", project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n", dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n", dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n", shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n", shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n", tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n", uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n", uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n", cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n", equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n", meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n", meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n", meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n", meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n", normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n", normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n", shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tvec4 mvPosition;\n\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n" },
    bi = { merge: function(t) { for (var e = {}, i = 0; i < t.length; i++) { var n = this.clone(t[i]); for (var r in n) e[r] = n[r] } return e }, clone: function(t) { var e = {}; for (var i in t)
          for (var n in e[i] = {}, t[i]) { var r = t[i][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r }
        return e } },
    _i = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

  function wi(t, e, i) { return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i) } Object.assign(wi.prototype, { isColor: !0, r: 1, g: 1, b: 1, set: function(t) { return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this }, setScalar: function(t) { return this.r = t, this.g = t, this.b = t, this }, setHex: function(t) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this }, setRGB: function(t, e, i) { return this.r = t, this.g = e, this.b = i, this }, setHSL: function() {
      function a(t, e, i) { return i < 0 && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t } return function(t, e, i) { if (t = Ge.euclideanModulo(t, 1), e = Ge.clamp(e, 0, 1), i = Ge.clamp(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
        else { var n = i <= .5 ? i * (1 + e) : i + e - i * e,
            r = 2 * i - n;
          this.r = a(r, n, t + 1 / 3), this.g = a(r, n, t), this.b = a(r, n, t - 1 / 3) } return this } }(), setStyle: function(e) {
      function t(t) { void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } var i; if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) { var n, r = i[1],
          a = i[2]; switch (r) {
          case "rgb":
          case "rgba":
            if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, t(n[5]), this; if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, t(n[5]), this; break;
          case "hsl":
          case "hsla":
            if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) { var o = parseFloat(n[1]) / 360,
                s = parseInt(n[2], 10) / 100,
                c = parseInt(n[3], 10) / 100; return t(n[5]), this.setHSL(o, s, c) } } } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(e)) { var h, l = (h = i[1]).length; if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this; if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this } e && 0 < e.length && (void 0 !== (h = _i[e]) ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + e)); return this }, clone: function() { return new this.constructor(this.r, this.g, this.b) }, copy: function(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this }, copyGammaToLinear: function(t, e) { return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this }, copyLinearToGamma: function(t, e) { void 0 === e && (e = 2); var i = 0 < e ? 1 / e : 1; return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this }, convertGammaToLinear: function(t) { return this.copyGammaToLinear(this, t), this }, convertLinearToGamma: function(t) { return this.copyLinearToGamma(this, t), this }, copySRGBToLinear: function() {
      function e(t) { return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4) } return function(t) { return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this } }(), copyLinearToSRGB: function() {
      function e(t) { return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055 } return function(t) { return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this } }(), convertSRGBToLinear: function() { return this.copySRGBToLinear(this), this }, convertLinearToSRGB: function() { return this.copyLinearToSRGB(this), this }, getHex: function() { return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0 }, getHexString: function() { return ("000000" + this.getHex().toString(16)).slice(-6) }, getHSL: function(t) { void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = { h: 0, s: 0, l: 0 }); var e, i, n = this.r,
        r = this.g,
        a = this.b,
        o = Math.max(n, r, a),
        s = Math.min(n, r, a),
        c = (s + o) / 2; if (s === o) i = e = 0;
      else { var h = o - s; switch (i = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
          case n:
            e = (r - a) / h + (r < a ? 6 : 0); break;
          case r:
            e = (a - n) / h + 2; break;
          case a:
            e = (n - r) / h + 4 } e /= 6 } return t.h = e, t.s = i, t.l = c, t }, getStyle: function() { return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")" }, offsetHSL: (yi = {}, function(t, e, i) { return this.getHSL(yi), yi.h += t, yi.s += e, yi.l += i, this.setHSL(yi.h, yi.s, yi.l), this }), add: function(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this }, addColors: function(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this }, addScalar: function(t) { return this.r += t, this.g += t, this.b += t, this }, sub: function(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this }, multiply: function(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this }, multiplyScalar: function(t) { return this.r *= t, this.g *= t, this.b *= t, this }, lerp: function(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this }, equals: function(t) { return t.r === this.r && t.g === this.g && t.b === this.b }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t }, toJSON: function() { return this.getHex() } }); var Mi, Ei, Ti = { common: { diffuse: { value: new wi(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new We }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 }, maxMipLevel: { value: 0 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new He(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new wi(16777215) } }, lights: { ambientLightColor: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } } }, points: { diffuse: { value: new wi(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, uvTransform: { value: new We } }, sprite: { diffuse: { value: new wi(15658734) }, opacity: { value: 1 }, center: { value: new He(.5, .5) }, rotation: { value: 0 }, map: { value: null }, uvTransform: { value: new We } } },
    Si = { basic: { uniforms: bi.merge([Ti.common, Ti.specularmap, Ti.envmap, Ti.aomap, Ti.lightmap, Ti.fog]), vertexShader: xi.meshbasic_vert, fragmentShader: xi.meshbasic_frag }, lambert: { uniforms: bi.merge([Ti.common, Ti.specularmap, Ti.envmap, Ti.aomap, Ti.lightmap, Ti.emissivemap, Ti.fog, Ti.lights, { emissive: { value: new wi(0) } }]), vertexShader: xi.meshlambert_vert, fragmentShader: xi.meshlambert_frag }, phong: { uniforms: bi.merge([Ti.common, Ti.specularmap, Ti.envmap, Ti.aomap, Ti.lightmap, Ti.emissivemap, Ti.bumpmap, Ti.normalmap, Ti.displacementmap, Ti.gradientmap, Ti.fog, Ti.lights, { emissive: { value: new wi(0) }, specular: { value: new wi(1118481) }, shininess: { value: 30 } }]), vertexShader: xi.meshphong_vert, fragmentShader: xi.meshphong_frag }, standard: { uniforms: bi.merge([Ti.common, Ti.envmap, Ti.aomap, Ti.lightmap, Ti.emissivemap, Ti.bumpmap, Ti.normalmap, Ti.displacementmap, Ti.roughnessmap, Ti.metalnessmap, Ti.fog, Ti.lights, { emissive: { value: new wi(0) }, roughness: { value: .5 }, metalness: { value: .5 }, envMapIntensity: { value: 1 } }]), vertexShader: xi.meshphysical_vert, fragmentShader: xi.meshphysical_frag }, points: { uniforms: bi.merge([Ti.points, Ti.fog]), vertexShader: xi.points_vert, fragmentShader: xi.points_frag }, dashed: { uniforms: bi.merge([Ti.common, Ti.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: xi.linedashed_vert, fragmentShader: xi.linedashed_frag }, depth: { uniforms: bi.merge([Ti.common, Ti.displacementmap]), vertexShader: xi.depth_vert, fragmentShader: xi.depth_frag }, normal: { uniforms: bi.merge([Ti.common, Ti.bumpmap, Ti.normalmap, Ti.displacementmap, { opacity: { value: 1 } }]), vertexShader: xi.normal_vert, fragmentShader: xi.normal_frag }, sprite: { uniforms: bi.merge([Ti.sprite, Ti.fog]), vertexShader: xi.sprite_vert, fragmentShader: xi.sprite_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: xi.cube_vert, fragmentShader: xi.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: xi.equirect_vert, fragmentShader: xi.equirect_frag }, distanceRGBA: { uniforms: bi.merge([Ti.common, Ti.displacementmap, { referencePosition: { value: new je }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: xi.distanceRGBA_vert, fragmentShader: xi.distanceRGBA_frag }, shadow: { uniforms: bi.merge([Ti.lights, Ti.fog, { color: { value: new wi(0) }, opacity: { value: 1 } }]), vertexShader: xi.shadow_vert, fragmentShader: xi.shadow_frag } };

  function Ai() { var i = null,
      n = !1,
      r = null;

    function a(t, e) {!1 !== n && (r(t, e), i.requestAnimationFrame(a)) } return { start: function() {!0 !== n && null !== r && (i.requestAnimationFrame(a), n = !0) }, stop: function() { n = !1 }, setAnimationLoop: function(t) { r = t }, setContext: function(t) { i = t } } }

  function Li(c) { var h = new WeakMap; return { get: function(t) { return t.isInterleavedBufferAttribute && (t = t.data), h.get(t) }, remove: function(t) { t.isInterleavedBufferAttribute && (t = t.data); var e = h.get(t);
        e && (c.deleteBuffer(e.buffer), h.delete(t)) }, update: function(t, e) { t.isInterleavedBufferAttribute && (t = t.data); var i, n, r, a, o, s = h.get(t);
        void 0 === s ? h.set(t, function(t, e) { var i = t.array,
            n = t.dynamic ? c.DYNAMIC_DRAW : c.STATIC_DRAW,
            r = c.createBuffer();
          c.bindBuffer(e, r), c.bufferData(e, i, n), t.onUploadCallback(); var a = c.FLOAT; return i instanceof Float32Array ? a = c.FLOAT : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? a = c.UNSIGNED_SHORT : i instanceof Int16Array ? a = c.SHORT : i instanceof Uint32Array ? a = c.UNSIGNED_INT : i instanceof Int32Array ? a = c.INT : i instanceof Int8Array ? a = c.BYTE : i instanceof Uint8Array && (a = c.UNSIGNED_BYTE), { buffer: r, type: a, bytesPerElement: i.BYTES_PER_ELEMENT, version: t.version } }(t, e)) : s.version < t.version && (i = s.buffer, r = e, a = (n = t).array, o = n.updateRange, c.bindBuffer(r, i), !1 === n.dynamic ? c.bufferData(r, a, c.STATIC_DRAW) : -1 === o.count ? c.bufferSubData(r, 0, a) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (c.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1), s.version = t.version) } } }

  function Ri(t, e, i, n) { this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || Ri.DefaultOrder }

  function Ci() { this.mask = 1 } Si.physical = { uniforms: bi.merge([Si.standard.uniforms, { clearCoat: { value: 0 }, clearCoatRoughness: { value: 0 } }]), vertexShader: xi.meshphysical_vert, fragmentShader: xi.meshphysical_frag }, Ri.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Ri.DefaultOrder = "XYZ", Object.defineProperties(Ri.prototype, { x: { get: function() { return this._x }, set: function(t) { this._x = t, this.onChangeCallback() } }, y: { get: function() { return this._y }, set: function(t) { this._y = t, this.onChangeCallback() } }, z: { get: function() { return this._z }, set: function(t) { this._z = t, this.onChangeCallback() } }, order: { get: function() { return this._order }, set: function(t) { this._order = t, this.onChangeCallback() } } }), Object.assign(Ri.prototype, { isEuler: !0, set: function(t, e, i, n) { return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this }, clone: function() { return new this.constructor(this._x, this._y, this._z, this._order) }, copy: function(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this }, setFromRotationMatrix: function(t, e, i) { var n = Ge.clamp,
        r = t.elements,
        a = r[0],
        o = r[4],
        s = r[8],
        c = r[1],
        h = r[5],
        l = r[9],
        u = r[2],
        p = r[6],
        d = r[10]; return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this }, setFromQuaternion: (Ei = new Ve, function(t, e, i) { return Ei.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ei, e, i) }), setFromVector3: function(t, e) { return this.set(t.x, t.y, t.z, e || this._order) }, reorder: (Mi = new ke, function(t) { return Mi.setFromEuler(this), this.setFromQuaternion(Mi, t) }), equals: function(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order }, fromArray: function(t) { return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t }, toVector3: function(t) { return t ? t.set(this._x, this._y, this._z) : new je(this._x, this._y, this._z) }, onChange: function(t) { return this.onChangeCallback = t, this }, onChangeCallback: function() {} }), Object.assign(Ci.prototype, { set: function(t) { this.mask = 1 << t | 0 }, enable: function(t) { this.mask |= 1 << t | 0 }, toggle: function(t) { this.mask ^= 1 << t | 0 }, disable: function(t) { this.mask &= ~(1 << t | 0) }, test: function(t) { return 0 != (this.mask & t.mask) } }); var Pi, Oi, Ii, Ni, Di, Ui, Bi, Fi, zi, Gi, Hi, Vi, ki, ji, Wi, Xi, qi, Yi, Ji = 0;

  function Zi() { Object.defineProperty(this, "id", { value: Ji++ }), this.uuid = Ge.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Zi.DefaultUp.clone(); var t = new je,
      e = new Ri,
      i = new ke,
      n = new je(1, 1, 1);
    e.onChange(function() { i.setFromEuler(e, !1) }), i.onChange(function() { e.setFromQuaternion(i, void 0, !1) }), Object.defineProperties(this, { position: { enumerable: !0, value: t }, rotation: { enumerable: !0, value: e }, quaternion: { enumerable: !0, value: i }, scale: { enumerable: !0, value: n }, modelViewMatrix: { value: new Ve }, normalMatrix: { value: new We } }), this.matrix = new Ve, this.matrixWorld = new Ve, this.matrixAutoUpdate = Zi.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ci, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {} }

  function Qi() { Zi.call(this), this.type = "Camera", this.matrixWorldInverse = new Ve, this.projectionMatrix = new Ve }

  function Ki(t, e, i, n, r, a) { Qi.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix() }

  function $i(t, e, i, n, r, a) { this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new je, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new wi, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0 } Zi.DefaultUp = new je(0, 1, 0), Zi.DefaultMatrixAutoUpdate = !0, Zi.prototype = Object.assign(Object.create(e.prototype), { constructor: Zi, isObject3D: !0, onBeforeRender: function() {}, onAfterRender: function() {}, applyMatrix: function(t) { this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale) }, applyQuaternion: function(t) { return this.quaternion.premultiply(t), this }, setRotationFromAxisAngle: function(t, e) { this.quaternion.setFromAxisAngle(t, e) }, setRotationFromEuler: function(t) { this.quaternion.setFromEuler(t, !0) }, setRotationFromMatrix: function(t) { this.quaternion.setFromRotationMatrix(t) }, setRotationFromQuaternion: function(t) { this.quaternion.copy(t) }, rotateOnAxis: (qi = new ke, function(t, e) { return qi.setFromAxisAngle(t, e), this.quaternion.multiply(qi), this }), rotateOnWorldAxis: (Xi = new ke, function(t, e) { return Xi.setFromAxisAngle(t, e), this.quaternion.premultiply(Xi), this }), rotateX: (Wi = new je(1, 0, 0), function(t) { return this.rotateOnAxis(Wi, t) }), rotateY: (ji = new je(0, 1, 0), function(t) { return this.rotateOnAxis(ji, t) }), rotateZ: (ki = new je(0, 0, 1), function(t) { return this.rotateOnAxis(ki, t) }), translateOnAxis: (Vi = new je, function(t, e) { return Vi.copy(t).applyQuaternion(this.quaternion), this.position.add(Vi.multiplyScalar(e)), this }), translateX: (Hi = new je(1, 0, 0), function(t) { return this.translateOnAxis(Hi, t) }), translateY: (Gi = new je(0, 1, 0), function(t) { return this.translateOnAxis(Gi, t) }), translateZ: (zi = new je(0, 0, 1), function(t) { return this.translateOnAxis(zi, t) }), localToWorld: function(t) { return t.applyMatrix4(this.matrixWorld) }, worldToLocal: (Fi = new Ve, function(t) { return t.applyMatrix4(Fi.getInverse(this.matrixWorld)) }), lookAt: (Ui = new Ve, Bi = new je, function(t, e, i) { t.isVector3 ? Bi.copy(t) : Bi.set(t, e, i), this.isCamera ? Ui.lookAt(this.position, Bi, this.up) : Ui.lookAt(Bi, this.position, this.up), this.quaternion.setFromRotationMatrix(Ui) }), add: function(t) { if (1 < arguments.length) { for (var e = 0; e < arguments.length; e++) this.add(arguments[e]); return this } return t === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", t) : t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({ type: "added" }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this }, remove: function(t) { if (1 < arguments.length) { for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]); return this } var i = this.children.indexOf(t); return -1 !== i && (t.parent = null, t.dispatchEvent({ type: "removed" }), this.children.splice(i, 1)), this }, getObjectById: function(t) { return this.getObjectByProperty("id", t) }, getObjectByName: function(t) { return this.getObjectByProperty("name", t) }, getObjectByProperty: function(t, e) { if (this[t] === e) return this; for (var i = 0, n = this.children.length; i < n; i++) { var r = this.children[i].getObjectByProperty(t, e); if (void 0 !== r) return r } }, getWorldPosition: function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new je), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld) }, getWorldQuaternion: (Ni = new je, Di = new je, function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new ke), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Ni, t, Di), t }), getWorldScale: (Oi = new je, Ii = new ke, function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new je), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Oi, Ii, t), t }), getWorldDirection: (Pi = new ke, function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new je), this.getWorldQuaternion(Pi), t.set(0, 0, 1).applyQuaternion(Pi) }), raycast: function() {}, traverse: function(t) { t(this); for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t) }, traverseVisible: function(t) { if (!1 !== this.visible) { t(this); for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t) } }, traverseAncestors: function(t) { var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t)) }, updateMatrix: function() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 }, updateMatrixWorld: function(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t = !(this.matrixWorldNeedsUpdate = !1)); for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t) }, toJSON: function(i) { var t = void 0 === i || "string" == typeof i,
        e = {};
      t && (i = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {} }, e.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); var n = {};

      function r(t, e) { return void 0 === t[e.uuid] && (t[e.uuid] = e.toJSON(i)), e.uuid } if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) { n.geometry = r(i.geometries, this.geometry); var a = this.geometry.parameters; if (void 0 !== a && void 0 !== a.shapes) { var o = a.shapes; if (Array.isArray(o))
            for (var s = 0, c = o.length; s < c; s++) { var h = o[s];
              r(i.shapes, h) }
          else r(i.shapes, o) } } if (void 0 !== this.material)
        if (Array.isArray(this.material)) { var l = []; for (s = 0, c = this.material.length; s < c; s++) l.push(r(i.materials, this.material[s]));
          n.material = l }
      else n.material = r(i.materials, this.material); if (0 < this.children.length) { n.children = []; for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(i).object) } if (t) { var u = m(i.geometries),
          p = m(i.materials),
          d = m(i.textures),
          f = m(i.images);
        o = m(i.shapes);
        0 < u.length && (e.geometries = u), 0 < p.length && (e.materials = p), 0 < d.length && (e.textures = d), 0 < f.length && (e.images = f), 0 < o.length && (e.shapes = o) } return e.object = n, e;

      function m(t) { var e = []; for (var i in t) { var n = t[i];
          delete n.metadata, e.push(n) } return e } }, clone: function(t) { return (new this.constructor).copy(this, t) }, copy: function(t, e) { if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
        for (var i = 0; i < t.children.length; i++) { var n = t.children[i];
          this.add(n.clone()) }
      return this } }), Qi.prototype = Object.assign(Object.create(Zi.prototype), { constructor: Qi, isCamera: !0, copy: function(t, e) { return Zi.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this }, getWorldDirection: (Yi = new ke, function(t) { return void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new je), this.getWorldQuaternion(Yi), t.set(0, 0, -1).applyQuaternion(Yi) }), updateMatrixWorld: function(t) { Zi.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld) }, clone: function() { return (new this.constructor).copy(this) } }), Ki.prototype = Object.assign(Object.create(Qi.prototype), { constructor: Ki, isOrthographicCamera: !0, copy: function(t, e) { return Qi.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this }, setViewOffset: function(t, e, i, n, r, a) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() }, clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }, updateProjectionMatrix: function() { var t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        i = (this.right + this.left) / 2,
        n = (this.top + this.bottom) / 2,
        r = i - t,
        a = i + t,
        o = n + e,
        s = n - e; if (null !== this.view && this.view.enabled) { var c = this.zoom / (this.view.width / this.view.fullWidth),
          h = this.zoom / (this.view.height / this.view.fullHeight),
          l = (this.right - this.left) / this.view.width,
          u = (this.top - this.bottom) / this.view.height;
        a = (r += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h) } this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far) }, toJSON: function(t) { var e = Zi.prototype.toJSON.call(this, t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e } }), Object.assign($i.prototype, { clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex; for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone(); for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone(); return this } }); var tn, en, nn, rn, an, on, sn, cn = 0;

  function hn() { Object.defineProperty(this, "id", { value: cn += 2 }), this.uuid = Ge.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
      []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1 }

  function ln(t, e, i) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }

  function un(t, e, i) { ln.call(this, new Int8Array(t), e, i) }

  function pn(t, e, i) { ln.call(this, new Uint8Array(t), e, i) }

  function dn(t, e, i) { ln.call(this, new Uint8ClampedArray(t), e, i) }

  function fn(t, e, i) { ln.call(this, new Int16Array(t), e, i) }

  function mn(t, e, i) { ln.call(this, new Uint16Array(t), e, i) }

  function gn(t, e, i) { ln.call(this, new Int32Array(t), e, i) }

  function vn(t, e, i) { ln.call(this, new Uint32Array(t), e, i) }

  function yn(t, e, i) { ln.call(this, new Float32Array(t), e, i) }

  function xn(t, e, i) { ln.call(this, new Float64Array(t), e, i) }

  function bn() { this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1 }

  function _n(t) { if (0 === t.length) return -1 / 0; for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]); return e } hn.prototype = Object.assign(Object.create(e.prototype), { constructor: hn, isGeometry: !0, applyMatrix: function(t) { for (var e = (new We).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) { this.vertices[i].applyMatrix4(t) } for (i = 0, n = this.faces.length; i < n; i++) { var r = this.faces[i];
        r.normal.applyMatrix3(e).normalize(); for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(e).normalize() } return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this }, rotateX: (sn = new Ve, function(t) { return sn.makeRotationX(t), this.applyMatrix(sn), this }), rotateY: (on = new Ve, function(t) { return on.makeRotationY(t), this.applyMatrix(on), this }), rotateZ: (an = new Ve, function(t) { return an.makeRotationZ(t), this.applyMatrix(an), this }), translate: (rn = new Ve, function(t, e, i) { return rn.makeTranslation(t, e, i), this.applyMatrix(rn), this }), scale: (nn = new Ve, function(t, e, i) { return nn.makeScale(t, e, i), this.applyMatrix(nn), this }), lookAt: (en = new Zi, function(t) { en.lookAt(t), en.updateMatrix(), this.applyMatrix(en.matrix) }), fromBufferGeometry: function(t) { var a = this,
        e = null !== t.index ? t.index.array : void 0,
        i = t.attributes,
        n = i.position.array,
        o = void 0 !== i.normal ? i.normal.array : void 0,
        s = void 0 !== i.color ? i.color.array : void 0,
        c = void 0 !== i.uv ? i.uv.array : void 0,
        h = void 0 !== i.uv2 ? i.uv2.array : void 0;
      void 0 !== h && (this.faceVertexUvs[1] = []); for (var l = [], u = [], p = [], r = 0, d = 0; r < n.length; r += 3, d += 2) a.vertices.push(new je(n[r], n[r + 1], n[r + 2])), void 0 !== o && l.push(new je(o[r], o[r + 1], o[r + 2])), void 0 !== s && a.colors.push(new wi(s[r], s[r + 1], s[r + 2])), void 0 !== c && u.push(new He(c[d], c[d + 1])), void 0 !== h && p.push(new He(h[d], h[d + 1]));

      function f(t, e, i, n) { var r = new $i(t, e, i, void 0 !== o ? [l[t].clone(), l[e].clone(), l[i].clone()] : [], void 0 !== s ? [a.colors[t].clone(), a.colors[e].clone(), a.colors[i].clone()] : [], n);
        a.faces.push(r), void 0 !== c && a.faceVertexUvs[0].push([u[t].clone(), u[e].clone(), u[i].clone()]), void 0 !== h && a.faceVertexUvs[1].push([p[t].clone(), p[e].clone(), p[i].clone()]) } var m = t.groups; if (0 < m.length)
        for (r = 0; r < m.length; r++)
          for (var g = m[r], v = g.start, y = (d = v, v + g.count); d < y; d += 3) void 0 !== e ? f(e[d], e[d + 1], e[d + 2], g.materialIndex) : f(d, d + 1, d + 2, g.materialIndex);
      else if (void 0 !== e)
        for (r = 0; r < e.length; r += 3) f(e[r], e[r + 1], e[r + 2]);
      else
        for (r = 0; r < n.length / 3; r += 3) f(r, r + 1, r + 2); return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this }, center: (tn = new je, function() { return this.computeBoundingBox(), this.boundingBox.getCenter(tn).negate(), this.translate(tn.x, tn.y, tn.z), this }), normalize: function() { this.computeBoundingSphere(); var t = this.boundingSphere.center,
        e = this.boundingSphere.radius,
        i = 0 === e ? 1 : 1 / e,
        n = new Ve; return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this }, computeFaceNormals: function() { for (var t = new je, e = new je, i = 0, n = this.faces.length; i < n; i++) { var r = this.faces[i],
          a = this.vertices[r.a],
          o = this.vertices[r.b],
          s = this.vertices[r.c];
        t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t) } }, computeVertexNormals: function(t) { var e, i, n, r, a, o; for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) o[e] = new je; if (t) { var s, c, h, l = new je,
          u = new je; for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l) } else
        for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal); for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize(); for (n = 0, r = this.faces.length; n < r; n++) { var p = (a = this.faces[n]).vertexNormals;
        3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone()) } 0 < this.faces.length && (this.normalsNeedUpdate = !0) }, computeFlatVertexNormals: function() { var t, e, i; for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) { var n = (i = this.faces[t]).vertexNormals;
        3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone()) } 0 < this.faces.length && (this.normalsNeedUpdate = !0) }, computeMorphNormals: function() { var t, e, i, n, r; for (i = 0, n = this.faces.length; i < n; i++)
        for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone(); var a = new hn; for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) { if (!this.morphNormals[t]) { this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = []; var o = this.morphNormals[t].faceNormals,
            s = this.morphNormals[t].vertexNormals; for (i = 0, n = this.faces.length; i < n; i++) c = new je, h = { a: new je, b: new je, c: new je }, o.push(c), s.push(h) } var c, h, l = this.morphNormals[t]; for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = l.faceNormals[i], h = l.vertexNormals[i], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2]) } for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals }, computeBoundingBox: function() { null === this.boundingBox && (this.boundingBox = new fi), this.boundingBox.setFromPoints(this.vertices) }, computeBoundingSphere: function() { null === this.boundingSphere && (this.boundingSphere = new mi), this.boundingSphere.setFromPoints(this.vertices) }, merge: function(t, e, i) { if (t && t.isGeometry) { var n, r = this.vertices.length,
          a = this.vertices,
          o = t.vertices,
          s = this.faces,
          c = t.faces,
          h = this.faceVertexUvs[0],
          l = t.faceVertexUvs[0],
          u = this.colors,
          p = t.colors;
        void 0 === i && (i = 0), void 0 !== e && (n = (new We).getNormalMatrix(e)); for (var d = 0, f = o.length; d < f; d++) { var m = o[d].clone();
          void 0 !== e && m.applyMatrix4(e), a.push(m) } for (d = 0, f = p.length; d < f; d++) u.push(p[d].clone()); for (d = 0, f = c.length; d < f; d++) { var g, v, y, x = c[d],
            b = x.vertexNormals,
            _ = x.vertexColors;
          (g = new $i(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize(); for (var w = 0, M = b.length; w < M; w++) v = b[w].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
          g.color.copy(x.color); for (w = 0, M = _.length; w < M; w++) y = _[w], g.vertexColors.push(y.clone());
          g.materialIndex = x.materialIndex + i, s.push(g) } for (d = 0, f = l.length; d < f; d++) { var E = l[d],
            T = []; if (void 0 !== E) { for (w = 0, M = E.length; w < M; w++) T.push(E[w].clone());
            h.push(T) } } } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t) }, mergeMesh: function(t) { t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) }, mergeVertices: function() { var t, e, i, n, r, a, o, s, c = {},
        h = [],
        l = [],
        u = Math.pow(10, 4); for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[e]]; var p = []; for (i = 0, n = this.faces.length; i < n; i++) {
        (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c]; for (var d = 0; d < 3; d++)
          if (a[d] === a[(d + 1) % 3]) { p.push(i); break } } for (i = p.length - 1; 0 <= i; i--) { var f = p[i]; for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1) } var m = this.vertices.length - h.length; return this.vertices = h, m }, setFromPoints: function(t) { this.vertices = []; for (var e = 0, i = t.length; e < i; e++) { var n = t[e];
        this.vertices.push(new je(n.x, n.y, n.z || 0)) } return this }, sortFacesByMaterialIndex: function() { for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
      t.sort(function(t, e) { return t.materialIndex - e.materialIndex }); var n, r, a = this.faceVertexUvs[0],
        o = this.faceVertexUvs[1];
      a && a.length === e && (n = []), o && o.length === e && (r = []); for (i = 0; i < e; i++) { var s = t[i]._id;
        n && n.push(a[s]), r && r.push(o[s]) } n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r) }, toJSON: function() { var t = { metadata: { version: 4.5, type: "Geometry", generator: "Geometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) { var e = this.parameters; for (var i in e) void 0 !== e[i] && (t[i] = e[i]); return t } for (var n = [], r = 0; r < this.vertices.length; r++) { var a = this.vertices[r];
        n.push(a.x, a.y, a.z) } var o = [],
        s = [],
        c = {},
        h = [],
        l = {},
        u = [],
        p = {}; for (r = 0; r < this.faces.length; r++) { var d = this.faces[r],
          f = void 0 !== this.faceVertexUvs[0][r],
          m = 0 < d.normal.length(),
          g = 0 < d.vertexNormals.length,
          v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
          y = 0 < d.vertexColors.length,
          x = 0; if (x = M(x = M(x = M(x = M(x = M(x = M(x = M(x = M(x, 0, 0), 1, !0), 2, !1), 3, f), 4, m), 5, g), 6, v), 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) { var b = this.faceVertexUvs[0][r];
          o.push(S(b[0]), S(b[1]), S(b[2])) } if (m && o.push(E(d.normal)), g) { var _ = d.vertexNormals;
          o.push(E(_[0]), E(_[1]), E(_[2])) } if (v && o.push(T(d.color)), y) { var w = d.vertexColors;
          o.push(T(w[0]), T(w[1]), T(w[2])) } }

      function M(t, e, i) { return i ? t | 1 << e : t & ~(1 << e) }

      function E(t) { var e = t.x.toString() + t.y.toString() + t.z.toString(); return void 0 !== c[e] || (c[e] = s.length / 3, s.push(t.x, t.y, t.z)), c[e] }

      function T(t) { var e = t.r.toString() + t.g.toString() + t.b.toString(); return void 0 !== l[e] || (l[e] = h.length, h.push(t.getHex())), l[e] }

      function S(t) { var e = t.x.toString() + t.y.toString(); return void 0 !== p[e] || (p[e] = u.length / 2, u.push(t.x, t.y)), p[e] } return t.data = {}, t.data.vertices = n, t.data.normals = s, 0 < h.length && (t.data.colors = h), 0 < u.length && (t.data.uvs = [u]), t.data.faces = o, t }, clone: function() { return (new hn).copy(this) }, copy: function(t) { var e, i, n, r, a, o;
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name; var s = t.vertices; for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone()); var c = t.colors; for (e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone()); var h = t.faces; for (e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone()); for (e = 0, i = t.faceVertexUvs.length; e < i; e++) { var l = t.faceVertexUvs[e]; for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) { var u = l[n],
            p = []; for (a = 0, o = u.length; a < o; a++) { var d = u[a];
            p.push(d.clone()) } this.faceVertexUvs[e].push(p) } } var f = t.morphTargets; for (e = 0, i = f.length; e < i; e++) { var m = {}; if (m.name = f[e].name, void 0 !== f[e].vertices)
          for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push(f[e].vertices[n].clone()); if (void 0 !== f[e].normals)
          for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push(f[e].normals[n].clone());
        this.morphTargets.push(m) } var g = t.morphNormals; for (e = 0, i = g.length; e < i; e++) { var v = {}; if (void 0 !== g[e].vertexNormals)
          for (v.vertexNormals = [], n = 0, r = g[e].vertexNormals.length; n < r; n++) { var y = g[e].vertexNormals[n],
              x = {};
            x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x) }
        if (void 0 !== g[e].faceNormals)
          for (v.faceNormals = [], n = 0, r = g[e].faceNormals.length; n < r; n++) v.faceNormals.push(g[e].faceNormals[n].clone());
        this.morphNormals.push(v) } var b = t.skinWeights; for (e = 0, i = b.length; e < i; e++) this.skinWeights.push(b[e].clone()); var _ = t.skinIndices; for (e = 0, i = _.length; e < i; e++) this.skinIndices.push(_[e].clone()); var w = t.lineDistances; for (e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]); var M = t.boundingBox;
      null !== M && (this.boundingBox = M.clone()); var E = t.boundingSphere; return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), Object.defineProperty(ln.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(ln.prototype, { isBufferAttribute: !0, onUploadCallback: function() {}, setArray: function(t) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this }, setDynamic: function(t) { return this.dynamic = t, this }, copy: function(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this }, copyAt: function(t, e, i) { t *= this.itemSize, i *= e.itemSize; for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n]; return this }, copyArray: function(t) { return this.array.set(t), this }, copyColorsArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new wi), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b } return this }, copyVector2sArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new He), e[i++] = a.x, e[i++] = a.y } return this }, copyVector3sArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new je), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z } return this }, copyVector4sArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new li), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w } return this }, set: function(t, e) { return void 0 === e && (e = 0), this.array.set(t, e), this }, getX: function(t) { return this.array[t * this.itemSize] }, setX: function(t, e) { return this.array[t * this.itemSize] = e, this }, getY: function(t) { return this.array[t * this.itemSize + 1] }, setY: function(t, e) { return this.array[t * this.itemSize + 1] = e, this }, getZ: function(t) { return this.array[t * this.itemSize + 2] }, setZ: function(t, e) { return this.array[t * this.itemSize + 2] = e, this }, getW: function(t) { return this.array[t * this.itemSize + 3] }, setW: function(t, e) { return this.array[t * this.itemSize + 3] = e, this }, setXY: function(t, e, i) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this }, setXYZ: function(t, e, i, n) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this }, setXYZW: function(t, e, i, n, r) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this }, onUpload: function(t) { return this.onUploadCallback = t, this }, clone: function() { return new this.constructor(this.array, this.itemSize).copy(this) } }), (un.prototype = Object.create(ln.prototype)).constructor = un, (pn.prototype = Object.create(ln.prototype)).constructor = pn, (dn.prototype = Object.create(ln.prototype)).constructor = dn, (fn.prototype = Object.create(ln.prototype)).constructor = fn, (mn.prototype = Object.create(ln.prototype)).constructor = mn, (gn.prototype = Object.create(ln.prototype)).constructor = gn, (vn.prototype = Object.create(ln.prototype)).constructor = vn, (yn.prototype = Object.create(ln.prototype)).constructor = yn, (xn.prototype = Object.create(ln.prototype)).constructor = xn, Object.assign(bn.prototype, { computeGroups: function(t) { for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) { var o = r[a];
        o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = { start: 3 * a, materialIndex: n }) } void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i }, fromGeometry: function(t) { var e, i = t.faces,
        n = t.vertices,
        r = t.faceVertexUvs,
        a = r[0] && 0 < r[0].length,
        o = r[1] && 0 < r[1].length,
        s = t.morphTargets,
        c = s.length; if (0 < c) { e = []; for (var h = 0; h < c; h++) e[h] = [];
        this.morphTargets.position = e } var l, u = t.morphNormals,
        p = u.length; if (0 < p) { l = []; for (h = 0; h < p; h++) l[h] = [];
        this.morphTargets.normal = l } var d = t.skinIndices,
        f = t.skinWeights,
        m = d.length === n.length,
        g = f.length === n.length;
      0 < n.length && 0 === i.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported."); for (h = 0; h < i.length; h++) { var v = i[h];
        this.vertices.push(n[v.a], n[v.b], n[v.c]); var y = v.vertexNormals; if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
        else { var x = v.normal;
          this.normals.push(x, x, x) } var b, _ = v.vertexColors; if (3 === _.length) this.colors.push(_[0], _[1], _[2]);
        else { var w = v.color;
          this.colors.push(w, w, w) } if (!0 === a) void 0 !== (b = r[0][h]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new He, new He, new He)); if (!0 === o) void 0 !== (b = r[1][h]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new He, new He, new He)); for (var M = 0; M < c; M++) { var E = s[M].vertices;
          e[M].push(E[v.a], E[v.b], E[v.c]) } for (M = 0; M < p; M++) { var T = u[M].vertexNormals[h];
          l[M].push(T.a, T.b, T.c) } m && this.skinIndices.push(d[v.a], d[v.b], d[v.c]), g && this.skinWeights.push(f[v.a], f[v.b], f[v.c]) } return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this } }); var wn, Mn, En, Tn, Sn, An, Ln, Rn, Cn, Pn, On = 1;

  function In() { Object.defineProperty(this, "id", { value: On += 2 }), this.uuid = Ge.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} }

  function Nn(t, e, i, n, r, a) { hn.call(this), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: i, widthSegments: n, heightSegments: r, depthSegments: a }, this.fromBufferGeometry(new Dn(t, e, i, n, r, a)), this.mergeVertices() }

  function Dn(t, e, i, n, r, a) { In.call(this), this.type = "BoxBufferGeometry", this.parameters = { width: t, height: e, depth: i, widthSegments: n, heightSegments: r, depthSegments: a }; var R = this;
    t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1; var C = [],
      P = [],
      O = [],
      I = [],
      N = 0,
      D = 0;

    function o(t, e, i, n, r, a, o, s, c, h, l) { var u, p, d = a / c,
        f = o / h,
        m = a / 2,
        g = o / 2,
        v = s / 2,
        y = c + 1,
        x = h + 1,
        b = 0,
        _ = 0,
        w = new je; for (p = 0; p < x; p++) { var M = p * f - g; for (u = 0; u < y; u++) { var E = u * d - m;
          w[t] = E * n, w[e] = M * r, w[i] = v, P.push(w.x, w.y, w.z), w[t] = 0, w[e] = 0, w[i] = 0 < s ? 1 : -1, O.push(w.x, w.y, w.z), I.push(u / c), I.push(1 - p / h), b += 1 } } for (p = 0; p < h; p++)
        for (u = 0; u < c; u++) { var T = N + u + y * p,
            S = N + u + y * (p + 1),
            A = N + (u + 1) + y * (p + 1),
            L = N + (u + 1) + y * p;
          C.push(T, S, L), C.push(S, A, L), _ += 6 } R.addGroup(D, _, l), D += _, N += b } o("z", "y", "x", -1, -1, i, e, t, a, r, 0), o("z", "y", "x", 1, -1, i, e, -t, a, r, 1), o("x", "z", "y", 1, 1, t, i, e, n, a, 2), o("x", "z", "y", 1, -1, t, i, -e, n, a, 3), o("x", "y", "z", 1, -1, t, e, i, n, r, 4), o("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(C), this.addAttribute("position", new yn(P, 3)), this.addAttribute("normal", new yn(O, 3)), this.addAttribute("uv", new yn(I, 2)) }

  function Un(t, e, i, n) { hn.call(this), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: i, heightSegments: n }, this.fromBufferGeometry(new Bn(t, e, i, n)), this.mergeVertices() }

  function Bn(t, e, i, n) { In.call(this), this.type = "PlaneBufferGeometry", this.parameters = { width: t, height: e, widthSegments: i, heightSegments: n }; var r, a, o = (t = t || 1) / 2,
      s = (e = e || 1) / 2,
      c = Math.floor(i) || 1,
      h = Math.floor(n) || 1,
      l = c + 1,
      u = h + 1,
      p = t / c,
      d = e / h,
      f = [],
      m = [],
      g = [],
      v = []; for (a = 0; a < u; a++) { var y = a * d - s; for (r = 0; r < l; r++) { var x = r * p - o;
        m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / h) } } for (a = 0; a < h; a++)
      for (r = 0; r < c; r++) { var b = r + l * a,
          _ = r + l * (a + 1),
          w = r + 1 + l * (a + 1),
          M = r + 1 + l * a;
        f.push(b, _, M), f.push(_, w, M) } this.setIndex(f), this.addAttribute("position", new yn(m, 3)), this.addAttribute("normal", new yn(g, 3)), this.addAttribute("uv", new yn(v, 2)) } In.prototype = Object.assign(Object.create(e.prototype), { constructor: In, isBufferGeometry: !0, getIndex: function() { return this.index }, setIndex: function(t) { Array.isArray(t) ? this.index = new(65535 < _n(t) ? vn : mn)(t, 1) : this.index = t }, addAttribute: function(t, e) { return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? ("index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e)) : this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new ln(e, arguments[2]))) }, getAttribute: function(t) { return this.attributes[t] }, removeAttribute: function(t) { return delete this.attributes[t], this }, addGroup: function(t, e, i) { this.groups.push({ start: t, count: e, materialIndex: void 0 !== i ? i : 0 }) }, clearGroups: function() { this.groups = [] }, setDrawRange: function(t, e) { this.drawRange.start = t, this.drawRange.count = e }, applyMatrix: function(t) { var e = this.attributes.position;
      void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0); var i = this.attributes.normal;
      void 0 !== i && ((new We).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0); return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this }, rotateX: (Pn = new Ve, function(t) { return Pn.makeRotationX(t), this.applyMatrix(Pn), this }), rotateY: (Cn = new Ve, function(t) { return Cn.makeRotationY(t), this.applyMatrix(Cn), this }), rotateZ: (Rn = new Ve, function(t) { return Rn.makeRotationZ(t), this.applyMatrix(Rn), this }), translate: (Ln = new Ve, function(t, e, i) { return Ln.makeTranslation(t, e, i), this.applyMatrix(Ln), this }), scale: (An = new Ve, function(t, e, i) { return An.makeScale(t, e, i), this.applyMatrix(An), this }), lookAt: (Sn = new Zi, function(t) { Sn.lookAt(t), Sn.updateMatrix(), this.applyMatrix(Sn.matrix) }), center: (Tn = new je, function() { return this.computeBoundingBox(), this.boundingBox.getCenter(Tn).negate(), this.translate(Tn.x, Tn.y, Tn.z), this }), setFromObject: function(t) { var e = t.geometry; if (t.isPoints || t.isLine) { var i = new yn(3 * e.vertices.length, 3),
          n = new yn(3 * e.colors.length, 3); if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) { var r = new yn(e.lineDistances.length, 1);
          this.addAttribute("lineDistance", r.copyArray(e.lineDistances)) } null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()) } else t.isMesh && e && e.isGeometry && this.fromGeometry(e); return this }, setFromPoints: function(t) { for (var e = [], i = 0, n = t.length; i < n; i++) { var r = t[i];
        e.push(r.x, r.y, r.z || 0) } return this.addAttribute("position", new yn(e, 3)), this }, updateFromObject: function(t) { var e, i = t.geometry; if (t.isMesh) { var n = i.__directGeometry; if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
        n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n } return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this }, fromGeometry: function(t) { return t.__directGeometry = (new bn).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry) }, fromDirectGeometry: function(t) { var e = new Float32Array(3 * t.vertices.length); if (this.addAttribute("position", new ln(e, 3).copyVector3sArray(t.vertices)), 0 < t.normals.length) { var i = new Float32Array(3 * t.normals.length);
        this.addAttribute("normal", new ln(i, 3).copyVector3sArray(t.normals)) } if (0 < t.colors.length) { var n = new Float32Array(3 * t.colors.length);
        this.addAttribute("color", new ln(n, 3).copyColorsArray(t.colors)) } if (0 < t.uvs.length) { var r = new Float32Array(2 * t.uvs.length);
        this.addAttribute("uv", new ln(r, 2).copyVector2sArray(t.uvs)) } if (0 < t.uvs2.length) { var a = new Float32Array(2 * t.uvs2.length);
        this.addAttribute("uv2", new ln(a, 2).copyVector2sArray(t.uvs2)) } for (var o in this.groups = t.groups, t.morphTargets) { for (var s = [], c = t.morphTargets[o], h = 0, l = c.length; h < l; h++) { var u = c[h],
            p = new yn(3 * u.length, 3);
          s.push(p.copyVector3sArray(u)) } this.morphAttributes[o] = s } if (0 < t.skinIndices.length) { var d = new yn(4 * t.skinIndices.length, 4);
        this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices)) } if (0 < t.skinWeights.length) { var f = new yn(4 * t.skinWeights.length, 4);
        this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights)) } return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this }, computeBoundingBox: function() { null === this.boundingBox && (this.boundingBox = new fi); var t = this.attributes.position;
      void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) }, computeBoundingSphere: (Mn = new fi, En = new je, function() { null === this.boundingSphere && (this.boundingSphere = new mi); var t = this.attributes.position; if (t) { var e = this.boundingSphere.center;
        Mn.setFromBufferAttribute(t), Mn.getCenter(e); for (var i = 0, n = 0, r = t.count; n < r; n++) En.x = t.getX(n), En.y = t.getY(n), En.z = t.getZ(n), i = Math.max(i, e.distanceToSquared(En));
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } }), computeFaceNormals: function() {}, computeVertexNormals: function() { var t = this.index,
        e = this.attributes,
        i = this.groups; if (e.position) { var n = e.position.array; if (void 0 === e.normal) this.addAttribute("normal", new ln(new Float32Array(n.length), 3));
        else
          for (var r = e.normal.array, a = 0, o = r.length; a < o; a++) r[a] = 0; var s, c, h, l = e.normal.array,
          u = new je,
          p = new je,
          d = new je,
          f = new je,
          m = new je; if (t) { var g = t.array;
          0 === i.length && this.addGroup(0, g.length); for (var v = 0, y = i.length; v < y; ++v) { var x = i[v],
              b = x.start; for (a = b, o = b + x.count; a < o; a += 3) s = 3 * g[a + 0], c = 3 * g[a + 1], h = 3 * g[a + 2], u.fromArray(n, s), p.fromArray(n, c), d.fromArray(n, h), f.subVectors(d, p), m.subVectors(u, p), f.cross(m), l[s] += f.x, l[s + 1] += f.y, l[s + 2] += f.z, l[c] += f.x, l[c + 1] += f.y, l[c + 2] += f.z, l[h] += f.x, l[h + 1] += f.y, l[h + 2] += f.z } } else
          for (a = 0, o = n.length; a < o; a += 9) u.fromArray(n, a), p.fromArray(n, a + 3), d.fromArray(n, a + 6), f.subVectors(d, p), m.subVectors(u, p), f.cross(m), l[a] = f.x, l[a + 1] = f.y, l[a + 2] = f.z, l[a + 3] = f.x, l[a + 4] = f.y, l[a + 5] = f.z, l[a + 6] = f.x, l[a + 7] = f.y, l[a + 8] = f.z;
        this.normalizeNormals(), e.normal.needsUpdate = !0 } }, merge: function(t, e) { if (t && t.isBufferGeometry) { void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); var i = this.attributes; for (var n in i)
          if (void 0 !== t.attributes[n])
            for (var r = i[n].array, a = t.attributes[n], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++, c++) r[c] = o[s]; return this } console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t) }, normalizeNormals: (wn = new je, function() { for (var t = this.attributes.normal, e = 0, i = t.count; e < i; e++) wn.x = t.getX(e), wn.y = t.getY(e), wn.z = t.getZ(e), wn.normalize(), t.setXYZ(e, wn.x, wn.y, wn.z) }), toNonIndexed: function() { if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this; var t = new In,
        e = this.index.array,
        i = this.attributes; for (var n in i) { for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(e.length * o), c = 0, h = 0, l = 0, u = e.length; l < u; l++) { c = e[l] * o; for (var p = 0; p < o; p++) s[h++] = a[c++] } t.addAttribute(n, new ln(s, o)) } var d = this.groups; for (l = 0, u = d.length; l < u; l++) { var f = d[l];
        t.addGroup(f.start, f.count, f.materialIndex) } return t }, toJSON: function() { var t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), 0 < Object.keys(this.userData).length && (t.userData = this.userData), void 0 !== this.parameters) { var e = this.parameters; for (var i in e) void 0 !== e[i] && (t[i] = e[i]); return t } t.data = { attributes: {} }; var n = this.index; if (null !== n) { var r = Array.prototype.slice.call(n.array);
        t.data.index = { type: n.array.constructor.name, array: r } } var a = this.attributes; for (var i in a) { var o = a[i];
        r = Array.prototype.slice.call(o.array);
        t.data.attributes[i] = { itemSize: o.itemSize, type: o.array.constructor.name, array: r, normalized: o.normalized } } var s = this.groups;
      0 < s.length && (t.data.groups = JSON.parse(JSON.stringify(s))); var c = this.boundingSphere; return null !== c && (t.data.boundingSphere = { center: c.center.toArray(), radius: c.radius }), t }, clone: function() { return (new In).copy(this) }, copy: function(t) { var e, i, n;
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name; var r = t.index;
      null !== r && this.setIndex(r.clone()); var a = t.attributes; for (e in a) { var o = a[e];
        this.addAttribute(e, o.clone()) } var s = t.morphAttributes; for (e in s) { var c = [],
          h = s[e]; for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
        this.morphAttributes[e] = c } var l = t.groups; for (i = 0, n = l.length; i < n; i++) { var u = l[i];
        this.addGroup(u.start, u.count, u.materialIndex) } var p = t.boundingBox;
      null !== p && (this.boundingBox = p.clone()); var d = t.boundingSphere; return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), (Nn.prototype = Object.create(hn.prototype)).constructor = Nn, (Dn.prototype = Object.create(In.prototype)).constructor = Dn, (Un.prototype = Object.create(hn.prototype)).constructor = Un, (Bn.prototype = Object.create(In.prototype)).constructor = Bn; var Fn, zn, Gn, Hn, Vn, kn, jn, Wn, Xn, qn, Yn, Jn, Zn, Qn, Kn, $n, tr, er, ir, nr, rr, ar, or, sr, cr = 0;

  function hr() { Object.defineProperty(this, "id", { value: cr++ }), this.uuid = Ge.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = J, this.side = D, this.flatShading = !1, this.vertexColors = E, this.opacity = 1, this.transparent = !1, this.blendSrc = U, this.blendDst = B, this.blendEquation = S, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = rt, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0 }

  function lr(t) { hr.call(this), this.type = "MeshBasicMaterial", this.color = new wi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ht, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t) }

  function ur(t) { hr.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t)) }

  function pr(t, e) { this.origin = void 0 !== t ? t : new je, this.direction = void 0 !== e ? e : new je }

  function dr(t, e, i) { this.a = void 0 !== t ? t : new je, this.b = void 0 !== e ? e : new je, this.c = void 0 !== i ? i : new je }

  function fr(t, e) { Zi.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new In, this.material = void 0 !== e ? e : new lr({ color: 16777215 * Math.random() }), this.drawMode = Le, this.updateMorphTargets() }

  function mr(a, i, o, n) { var s, c, h, l = new wi(0),
      u = 0;

    function p(t, e) { i.buffers.color.setClear(t.r, t.g, t.b, e, n) } return { getClearColor: function() { return l }, setClearColor: function(t, e) { l.set(t), p(l, u = void 0 !== e ? e : 1) }, getClearAlpha: function() { return u }, setClearAlpha: function(t) { p(l, u = t) }, render: function(t, e, i, n) { var r = e.background;
        null === r ? p(l, u) : r && r.isColor && (p(r, 1), n = !0), (a.autoClear || n) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), r && r.isCubeTexture ? (void 0 === h && ((h = new fr(new Dn(1, 1, 1), new ur({ uniforms: Si.cube.uniforms, vertexShader: Si.cube.vertexShader, fragmentShader: Si.cube.fragmentShader, side: wt, depthTest: !0, depthWrite: !1, fog: !1 }))).geometry.removeAttribute("normal"), h.geometry.removeAttribute("uv"), h.onBeforeRender = function(t, e, i) { this.matrixWorld.copyPosition(i.matrixWorld) }, o.update(h)), h.material.uniforms.tCube.value = r, t.push(h, h.geometry, h.material, 0, null)) : r && r.isTexture && (void 0 === s && (s = new Ki(-1, 1, 1, -1, 0, 1), c = new fr(new Bn(2, 2), new lr({ depthTest: !1, depthWrite: !1, fog: !1 })), o.update(c)), c.material.map = r, a.renderBufferDirect(s, null, c.geometry, c.material, c, null)) } } }

  function gr(r, a, o, s) { var c;
    this.setMode = function(t) { c = t }, this.render = function(t, e) { r.drawArrays(c, t, e), o.update(e, c) }, this.renderInstances = function(t, e, i) { var n; if (s.isWebGL2) n = r;
      else if (null === (n = a.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      n[s.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](c, e, i, t.maxInstancedCount), o.update(i, c, t.maxInstancedCount) } }

  function vr(e, i, t) { var n;

    function r(t) { if ("highp" === t) { if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision) return "highp";
        t = "mediump" } return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp" } var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext,
      o = void 0 !== t.precision ? t.precision : "highp",
      s = r(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s); var c = !0 === t.logarithmicDepthBuffer,
      h = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
      l = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      u = e.getParameter(e.MAX_TEXTURE_SIZE),
      p = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
      d = e.getParameter(e.MAX_VERTEX_ATTRIBS),
      f = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
      m = e.getParameter(e.MAX_VARYING_VECTORS),
      g = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
      v = 0 < l,
      y = a || !!i.get("OES_texture_float"); return { isWebGL2: a, getMaxAnisotropy: function() { if (void 0 !== n) return n; var t = i.get("EXT_texture_filter_anisotropic"); return n = null !== t ? e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0 }, getMaxPrecision: r, precision: o, logarithmicDepthBuffer: c, maxTextures: h, maxVertexTextures: l, maxTextureSize: u, maxCubemapSize: p, maxAttributes: d, maxVertexUniforms: f, maxVaryings: m, maxFragmentUniforms: g, vertexTextures: v, floatFragmentTextures: y, floatVertexTextures: v && y } }

  function yr() { var l = this,
      u = null,
      p = 0,
      d = !1,
      f = !1,
      m = new gi,
      g = new We,
      v = { value: null, needsUpdate: !1 };

    function y() { v.value !== u && (v.value = u, v.needsUpdate = 0 < p), l.numPlanes = p, l.numIntersection = 0 }

    function x(t, e, i, n) { var r = null !== t ? t.length : 0,
        a = null; if (0 !== r) { if (a = v.value, !0 !== n || null === a) { var o = i + 4 * r,
            s = e.matrixWorldInverse;
          g.getNormalMatrix(s), (null === a || a.length < o) && (a = new Float32Array(o)); for (var c = 0, h = i; c !== r; ++c, h += 4) m.copy(t[c]).applyMatrix4(s, g), m.normal.toArray(a, h), a[h + 3] = m.constant } v.value = a, v.needsUpdate = !0 } return l.numPlanes = r, a } this.uniform = v, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, i) { var n = 0 !== t.length || e || 0 !== p || d; return d = e, u = x(t, i, 0), p = t.length, n }, this.beginShadows = function() { f = !0, x(null) }, this.endShadows = function() { f = !1, y() }, this.setState = function(t, e, i, n, r, a) { if (!d || null === t || 0 === t.length || f && !i) f ? x(null) : y();
      else { var o = f ? 0 : p,
          s = 4 * o,
          c = r.clippingState || null;
        v.value = c, c = x(t, n, s, a); for (var h = 0; h !== s; ++h) c[h] = u[h];
        r.clippingState = c, this.numIntersection = e ? this.numPlanes : 0, this.numPlanes += o } } }

  function xr(i) { var n = {}; return { get: function(t) { if (void 0 !== n[t]) return n[t]; var e; switch (t) {
          case "WEBGL_depth_texture":
            e = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture"); break;
          case "EXT_texture_filter_anisotropic":
            e = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break;
          case "WEBGL_compressed_texture_s3tc":
            e = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break;
          case "WEBGL_compressed_texture_pvrtc":
            e = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break;
          default:
            e = i.getExtension(t) } return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), n[t] = e } } }

  function br(u, p, a) { var o = {},
      d = {};

    function s(t) { var e = t.target,
        i = o[e.id]; for (var n in null !== i.index && p.remove(i.index), i.attributes) p.remove(i.attributes[n]);
      e.removeEventListener("dispose", s), delete o[e.id]; var r = d[i.id];
      r && (p.remove(r), delete d[i.id]), a.memory.geometries-- } return { get: function(t, e) { var i = o[e.id]; return i || (e.addEventListener("dispose", s), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new In).setFromObject(t)), i = e._bufferGeometry), o[e.id] = i, a.memory.geometries++, i) }, update: function(t) { var e = t.index,
          i = t.attributes; for (var n in null !== e && p.update(e, u.ELEMENT_ARRAY_BUFFER), i) p.update(i[n], u.ARRAY_BUFFER); var r = t.morphAttributes; for (var n in r)
          for (var a = r[n], o = 0, s = a.length; o < s; o++) p.update(a[o], u.ARRAY_BUFFER) }, getWireframeAttribute: function(t) { var e = d[t.id]; if (e) return e; var i, n = [],
          r = t.index,
          a = t.attributes; if (null !== r)
          for (var o = 0, s = (i = r.array).length; o < s; o += 3) { var c = i[o + 0],
              h = i[o + 1],
              l = i[o + 2];
            n.push(c, h, h, l, l, c) }
        else
          for (o = 0, s = (i = a.position.array).length / 3 - 1; o < s; o += 3) c = o + 0, h = o + 1, l = o + 2, n.push(c, h, h, l, l, c); return e = new(65535 < _n(n) ? vn : mn)(n, 1), p.update(e, u.ELEMENT_ARRAY_BUFFER), d[t.id] = e } } }

  function _r(r, a, o, s) { var c, h, l;
    this.setMode = function(t) { c = t }, this.setIndex = function(t) { h = t.type, l = t.bytesPerElement }, this.render = function(t, e) { r.drawElements(c, e, h, t * l), o.update(e, c) }, this.renderInstances = function(t, e, i) { var n; if (s.isWebGL2) n = r;
      else if (null === (n = a.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      n[s.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](c, i, h, e * l, t.maxInstancedCount), o.update(i, c, t.maxInstancedCount) } }

  function wr(n) { var r = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; return { memory: { geometries: 0, textures: 0 }, render: r, programs: null, autoReset: !0, reset: function() { r.frame++, r.calls = 0, r.triangles = 0, r.points = 0, r.lines = 0 }, update: function(t, e, i) { switch (i = i || 1, r.calls++, e) {
          case n.TRIANGLES:
            r.triangles += i * (t / 3); break;
          case n.TRIANGLE_STRIP:
          case n.TRIANGLE_FAN:
            r.triangles += i * (t - 2); break;
          case n.LINES:
            r.lines += i * (t / 2); break;
          case n.LINE_STRIP:
            r.lines += i * (t - 1); break;
          case n.LINE_LOOP:
            r.lines += i * t; break;
          case n.POINTS:
            r.points += i * t; break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", e) } } } }

  function Mr(t, e) { return Math.abs(e[1]) - Math.abs(t[1]) }

  function Er(d) { var f = {},
      m = new Float32Array(8); return { update: function(t, e, i, n) { var r = t.morphTargetInfluences,
          a = r.length,
          o = f[e.id]; if (void 0 === o) { o = []; for (var s = 0; s < a; s++) o[s] = [s, 0];
          f[e.id] = o } var c = i.morphTargets && e.morphAttributes.position,
          h = i.morphNormals && e.morphAttributes.normal; for (s = 0; s < a; s++) 0 !== (l = o[s])[1] && (c && e.removeAttribute("morphTarget" + s), h && e.removeAttribute("morphNormal" + s)); for (s = 0; s < a; s++)(l = o[s])[0] = s, l[1] = r[s]; for (o.sort(Mr), s = 0; s < 8; s++) { var l; if (l = o[s]) { var u = l[0],
              p = l[1]; if (p) { c && e.addAttribute("morphTarget" + s, c[u]), h && e.addAttribute("morphNormal" + s, h[u]), m[s] = p; continue } } m[s] = 0 } n.getUniforms().setValue(d, "morphTargetInfluences", m) } } }

  function Tr(r, a) { var o = {}; return { update: function(t) { var e = a.render.frame,
          i = t.geometry,
          n = r.get(t, i); return o[n.id] !== e && (i.isGeometry && n.updateFromObject(t), r.update(n), o[n.id] = e), n }, dispose: function() { o = {} } } }

  function Sr(t, e, i, n, r, a, o, s, c, h) { hi.call(this, t = void 0 !== t ? t : [], e = void 0 !== e ? e : gt, i, n, r, a, o, s, c, h), this.flipY = !1 } hr.prototype = Object.assign(Object.create(e.prototype), { constructor: hr, isMaterial: !0, onBeforeCompile: function() {}, setValues: function(t) { if (void 0 !== t)
        for (var e in t) { var i = t[e]; if (void 0 !== i)
            if ("shading" !== e) { var n = this[e];
              void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.") }
          else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
          else console.warn("THREE.Material: '" + e + "' parameter is undefined.") } }, toJSON: function(t) { var e = void 0 === t || "string" == typeof t;
      e && (t = { textures: {}, images: {} }); var i = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };

      function n(t) { var e = []; for (var i in t) { var n = t[i];
          delete n.metadata, e.push(n) } return e } if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== J && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), this.side !== D && (i.side = this.side), this.vertexColors !== E && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), 0 < this.alphaTest && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) { var r = n(t.textures),
          a = n(t.images);
        0 < r.length && (i.textures = r), 0 < a.length && (i.images = a) } return i }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection; var e = t.clippingPlanes,
        i = null; if (null !== e) { var n = e.length;
        i = new Array(n); for (var r = 0; r !== n; ++r) i[r] = e[r].clone() } return this.clippingPlanes = i, this.shadowSide = t.shadowSide, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), ((lr.prototype = Object.create(hr.prototype)).constructor = lr).prototype.isMeshBasicMaterial = !0, lr.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this }, ((ur.prototype = Object.create(hr.prototype)).constructor = ur).prototype.isShaderMaterial = !0, ur.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = bi.clone(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this }, ur.prototype.toJSON = function(t) { var e = hr.prototype.toJSON.call(this, t); return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e }, Object.assign(pr.prototype, { set: function(t, e) { return this.origin.copy(t), this.direction.copy(e), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this }, at: function(t, e) { return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new je), e.copy(this.direction).multiplyScalar(t).add(this.origin) }, lookAt: function(t) { return this.direction.copy(t).sub(this.origin).normalize(), this }, recast: (Yn = new je, function(t) { return this.origin.copy(this.at(t, Yn)), this }), closestPointToPoint: function(t, e) { void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new je), e.subVectors(t, this.origin); var i = e.dot(this.direction); return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin) }, distanceToPoint: function(t) { return Math.sqrt(this.distanceSqToPoint(t)) }, distanceSqToPoint: (qn = new je, function(t) { var e = qn.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (qn.copy(this.direction).multiplyScalar(e).add(this.origin), qn.distanceToSquared(t)) }), distanceSqToSegment: (jn = new je, Wn = new je, Xn = new je, function(t, e, i, n) { jn.copy(t).add(e).multiplyScalar(.5), Wn.copy(e).sub(t).normalize(), Xn.copy(this.origin).sub(jn); var r, a, o, s, c = .5 * t.distanceTo(e),
        h = -this.direction.dot(Wn),
        l = Xn.dot(this.direction),
        u = -Xn.dot(Wn),
        p = Xn.lengthSq(),
        d = Math.abs(1 - h * h); if (0 < d)
        if (a = h * l - u, s = c * d, 0 <= (r = h * u - l))
          if (-s <= a)
            if (a <= s) { var f = 1 / d;
              o = (r *= f) * (r + h * (a *= f) + 2 * l) + a * (h * r + a + 2 * u) + p }
      else a = c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
      else a = -c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
      else a <= -s ? o = -(r = Math.max(0, -(-h * c + l))) * r + (a = 0 < r ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(h * c + l))) * r + (a = 0 < r ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
      else a = 0 < h ? -c : c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p; return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(Wn).multiplyScalar(a).add(jn), o }), intersectSphere: (kn = new je, function(t, e) { kn.subVectors(t.center, this.origin); var i = kn.dot(this.direction),
        n = kn.dot(kn) - i * i,
        r = t.radius * t.radius; if (r < n) return null; var a = Math.sqrt(r - n),
        o = i - a,
        s = i + a; return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e) }), intersectsSphere: function(t) { return this.distanceToPoint(t.center) <= t.radius }, distanceToPlane: function(t) { var e = t.normal.dot(this.direction); if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null; var i = -(this.origin.dot(t.normal) + t.constant) / e; return 0 <= i ? i : null }, intersectPlane: function(t, e) { var i = this.distanceToPlane(t); return null === i ? null : this.at(i, e) }, intersectsPlane: function(t) { var e = t.distanceToPoint(this.origin); return 0 === e || t.normal.dot(this.direction) * e < 0 }, intersectBox: function(t, e) { var i, n, r, a, o, s, c = 1 / this.direction.x,
        h = 1 / this.direction.y,
        l = 1 / this.direction.z,
        u = this.origin; return 0 <= c ? (i = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) * c, n = (t.min.x - u.x) * c), 0 <= h ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), a < i || n < r ? null : ((i < r || i != i) && (i = r), (a < n || n != n) && (n = a), 0 <= l ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), s < i || n < o ? null : ((i < o || i != i) && (i = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(0 <= i ? i : n, e))) }, intersectsBox: (Vn = new je, function(t) { return null !== this.intersectBox(t, Vn) }), intersectTriangle: (Fn = new je, zn = new je, Gn = new je, Hn = new je, function(t, e, i, n, r) { zn.subVectors(e, t), Gn.subVectors(i, t), Hn.crossVectors(zn, Gn); var a, o = this.direction.dot(Hn); if (0 < o) { if (n) return null;
        a = 1 } else { if (!(o < 0)) return null;
        a = -1, o = -o } Fn.subVectors(this.origin, t); var s = a * this.direction.dot(Gn.crossVectors(Fn, Gn)); if (s < 0) return null; var c = a * this.direction.dot(zn.cross(Fn)); if (c < 0) return null; if (o < s + c) return null; var h = -a * Fn.dot(Hn); return h < 0 ? null : this.at(h / o, r) }), applyMatrix4: function(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this }, equals: function(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) } }), Object.assign(dr, { getNormal: ($n = new je, function(t, e, i, n) { void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new je), n.subVectors(i, e), $n.subVectors(t, e), n.cross($n); var r = n.lengthSq(); return 0 < r ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0) }), getBarycoord: (Zn = new je, Qn = new je, Kn = new je, function(t, e, i, n, r) { Zn.subVectors(n, e), Qn.subVectors(i, e), Kn.subVectors(t, e); var a = Zn.dot(Zn),
        o = Zn.dot(Qn),
        s = Zn.dot(Kn),
        c = Qn.dot(Qn),
        h = Qn.dot(Kn),
        l = a * c - o * o; if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new je), 0 === l) return r.set(-2, -1, -1); var u = 1 / l,
        p = (c * s - o * h) * u,
        d = (a * h - o * s) * u; return r.set(1 - p - d, d, p) }), containsPoint: (Jn = new je, function(t, e, i, n) { return dr.getBarycoord(t, e, i, n, Jn), 0 <= Jn.x && 0 <= Jn.y && Jn.x + Jn.y <= 1 }) }), Object.assign(dr.prototype, { set: function(t, e, i) { return this.a.copy(t), this.b.copy(e), this.c.copy(i), this }, setFromPointsAndIndices: function(t, e, i, n) { return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this }, getArea: (or = new je, sr = new je, function() { return or.subVectors(this.c, this.b), sr.subVectors(this.a, this.b), .5 * or.cross(sr).length() }), getMidpoint: function(t) { return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new je), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }, getNormal: function(t) { return dr.getNormal(this.a, this.b, this.c, t) }, getPlane: function(t) { return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new je), t.setFromCoplanarPoints(this.a, this.b, this.c) }, getBarycoord: function(t, e) { return dr.getBarycoord(t, this.a, this.b, this.c, e) }, containsPoint: function(t) { return dr.containsPoint(t, this.a, this.b, this.c) }, intersectsBox: function(t) { return t.intersectsTriangle(this) }, closestPointToPoint: (tr = new je, er = new je, ir = new je, nr = new je, rr = new je, ar = new je, function(t, e) { void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new je); var i, n, r = this.a,
        a = this.b,
        o = this.c;
      tr.subVectors(a, r), er.subVectors(o, r), nr.subVectors(t, r); var s = tr.dot(nr),
        c = er.dot(nr); if (s <= 0 && c <= 0) return e.copy(r);
      rr.subVectors(t, a); var h = tr.dot(rr),
        l = er.dot(rr); if (0 <= h && l <= h) return e.copy(a); var u = s * l - h * c; if (u <= 0 && 0 <= s && h <= 0) return i = s / (s - h), e.copy(r).addScaledVector(tr, i);
      ar.subVectors(t, o); var p = tr.dot(ar),
        d = er.dot(ar); if (0 <= d && p <= d) return e.copy(o); var f = p * c - s * d; if (f <= 0 && 0 <= c && d <= 0) return n = c / (c - d), e.copy(r).addScaledVector(er, n); var m = h * d - p * l; if (m <= 0 && 0 <= l - h && 0 <= p - d) return ir.subVectors(o, a), n = (l - h) / (l - h + (p - d)), e.copy(a).addScaledVector(ir, n); var g = 1 / (m + f + u); return i = f * g, n = u * g, e.copy(r).addScaledVector(tr, i).addScaledVector(er, n) }), equals: function(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) } }), fr.prototype = Object.assign(Object.create(Zi.prototype), { constructor: fr, isMesh: !0, setDrawMode: function(t) { this.drawMode = t }, copy: function(t) { return Zi.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this }, updateMorphTargets: function() { var t, e, i, n = this.geometry; if (n.isBufferGeometry) { var r = n.morphAttributes,
          a = Object.keys(r); if (0 < a.length) { var o = r[a[0]]; if (void 0 !== o)
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t } } else { var s = n.morphTargets; if (void 0 !== s && 0 < s.length)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t } }, raycast: function() { var z = new Ve,
        G = new pr,
        H = new mi,
        V = new je,
        k = new je,
        j = new je,
        W = new je,
        X = new je,
        q = new je,
        Y = new He,
        J = new He,
        Z = new He,
        s = new je,
        Q = new je,
        h = new je;

      function K(t, e, i, n, r, a, o) { return dr.getBarycoord(t, e, i, n, s), r.multiplyScalar(s.x), a.multiplyScalar(s.y), o.multiplyScalar(s.z), r.add(a).add(o), r.clone() }

      function $(t, e, i, n, r, a, o, s) { if (null === (e.side === wt ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, e.side !== et, s))) return null;
        h.copy(s), h.applyMatrix4(t.matrixWorld); var c = i.ray.origin.distanceTo(h); return c < i.near || c > i.far ? null : { distance: c, point: h.clone(), object: t } }

      function tt(t, e, i, n, r, a, o, s, c) { V.fromBufferAttribute(r, o), k.fromBufferAttribute(r, s), j.fromBufferAttribute(r, c); var h = $(t, e, i, n, V, k, j, Q); if (h) { a && (Y.fromBufferAttribute(a, o), J.fromBufferAttribute(a, s), Z.fromBufferAttribute(a, c), h.uv = K(Q, V, k, j, Y, J, Z)); var l = new $i(o, s, c);
          dr.getNormal(V, k, j, l.normal), h.face = l } return h } return function(t, e) { var i, n = this.geometry,
          r = this.material,
          a = this.matrixWorld; if (void 0 !== r && (null === n.boundingSphere && n.computeBoundingSphere(), H.copy(n.boundingSphere), H.applyMatrix4(a), !1 !== t.ray.intersectsSphere(H) && (z.getInverse(a), G.copy(t.ray).applyMatrix4(z), null === n.boundingBox || !1 !== G.intersectsBox(n.boundingBox))))
          if (n.isBufferGeometry) { var o, s, c, h, l, u, p, d, f, m = n.index,
              g = n.attributes.position,
              v = n.attributes.uv,
              y = n.groups,
              x = n.drawRange; if (null !== m)
              if (Array.isArray(r))
                for (h = 0, u = y.length; h < u; h++)
                  for (f = r[(d = y[h]).materialIndex], l = Math.max(d.start, x.start), p = Math.min(d.start + d.count, x.start + x.count); l < p; l += 3) o = m.getX(l), s = m.getX(l + 1), c = m.getX(l + 2), (i = tt(this, f, t, G, g, v, o, s, c)) && (i.faceIndex = Math.floor(l / 3), e.push(i));
              else
                for (h = Math.max(0, x.start), u = Math.min(m.count, x.start + x.count); h < u; h += 3) o = m.getX(h), s = m.getX(h + 1), c = m.getX(h + 2), (i = tt(this, r, t, G, g, v, o, s, c)) && (i.faceIndex = Math.floor(h / 3), e.push(i));
            else if (void 0 !== g)
              if (Array.isArray(r))
                for (h = 0, u = y.length; h < u; h++)
                  for (f = r[(d = y[h]).materialIndex], l = Math.max(d.start, x.start), p = Math.min(d.start + d.count, x.start + x.count); l < p; l += 3)(i = tt(this, f, t, G, g, v, o = l, s = l + 1, c = l + 2)) && (i.faceIndex = Math.floor(l / 3), e.push(i));
              else
                for (h = Math.max(0, x.start), u = Math.min(g.count, x.start + x.count); h < u; h += 3)(i = tt(this, r, t, G, g, v, o = h, s = h + 1, c = h + 2)) && (i.faceIndex = Math.floor(h / 3), e.push(i)) }
        else if (n.isGeometry) { var b, _, w, M, E = Array.isArray(r),
            T = n.vertices,
            S = n.faces,
            A = n.faceVertexUvs[0];
          0 < A.length && (M = A); for (var L = 0, R = S.length; L < R; L++) { var C = S[L],
              P = E ? r[C.materialIndex] : r; if (void 0 !== P) { if (b = T[C.a], _ = T[C.b], w = T[C.c], !0 === P.morphTargets) { var O = n.morphTargets,
                  I = this.morphTargetInfluences;
                V.set(0, 0, 0), k.set(0, 0, 0), j.set(0, 0, 0); for (var N = 0, D = O.length; N < D; N++) { var U = I[N]; if (0 !== U) { var B = O[N].vertices;
                    V.addScaledVector(W.subVectors(B[C.a], b), U), k.addScaledVector(X.subVectors(B[C.b], _), U), j.addScaledVector(q.subVectors(B[C.c], w), U) } } V.add(b), k.add(_), j.add(w), b = V, _ = k, w = j } if (i = $(this, P, t, G, b, _, w, Q)) { if (M && M[L]) { var F = M[L];
                  Y.copy(F[0]), J.copy(F[1]), Z.copy(F[2]), i.uv = K(Q, b, _, w, Y, J, Z) } i.face = C, i.faceIndex = L, e.push(i) } } } } } }(), clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), ((Sr.prototype = Object.create(hi.prototype)).constructor = Sr).prototype.isCubeTexture = !0, Object.defineProperty(Sr.prototype, "images", { get: function() { return this.image }, set: function(t) { this.image = t } }); var Ar = new hi,
    Lr = new Sr;

  function Rr() { this.seq = [], this.map = {} } var Cr = [],
    Pr = [],
    Or = new Float32Array(16),
    Ir = new Float32Array(9),
    Nr = new Float32Array(4);

  function Dr(t, e, i) { var n = t[0]; if (n <= 0 || 0 < n) return t; var r = e * i,
      a = Cr[r]; if (void 0 === a && (a = new Float32Array(r), Cr[r] = a), 0 !== e) { n.toArray(a, 0); for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s) } return a }

  function Ur(t, e) { if (t.length !== e.length) return !1; for (var i = 0, n = t.length; i < n; i++)
      if (t[i] !== e[i]) return !1; return !0 }

  function Br(t, e) { for (var i = 0, n = e.length; i < n; i++) t[i] = e[i] }

  function Fr(t, e) { var i = Pr[e];
    void 0 === i && (i = new Int32Array(e), Pr[e] = i); for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit(); return i }

  function zr(t, e) { var i = this.cache;
    i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e) }

  function Gr(t, e) { var i = this.cache;
    i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e) }

  function Hr(t, e) { var i = this.cache; if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
    else { if (Ur(i, e)) return;
      t.uniform2fv(this.addr, e), Br(i, e) } }

  function Vr(t, e) { var i = this.cache; if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
    else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
    else { if (Ur(i, e)) return;
      t.uniform3fv(this.addr, e), Br(i, e) } }

  function kr(t, e) { var i = this.cache; if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
    else { if (Ur(i, e)) return;
      t.uniform4fv(this.addr, e), Br(i, e) } }

  function jr(t, e) { var i = this.cache,
      n = e.elements; if (void 0 === n) { if (Ur(i, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Br(i, e) } else { if (Ur(i, n)) return;
      Nr.set(n), t.uniformMatrix2fv(this.addr, !1, Nr), Br(i, n) } }

  function Wr(t, e) { var i = this.cache,
      n = e.elements; if (void 0 === n) { if (Ur(i, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Br(i, e) } else { if (Ur(i, n)) return;
      Ir.set(n), t.uniformMatrix3fv(this.addr, !1, Ir), Br(i, n) } }

  function Xr(t, e) { var i = this.cache,
      n = e.elements; if (void 0 === n) { if (Ur(i, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Br(i, e) } else { if (Ur(i, n)) return;
      Or.set(n), t.uniformMatrix4fv(this.addr, !1, Or), Br(i, n) } }

  function qr(t, e, i) { var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || Ar, r) }

  function Yr(t, e, i) { var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || Lr, r) }

  function Jr(t, e) { var i = this.cache;
    Ur(i, e) || (t.uniform2iv(this.addr, e), Br(i, e)) }

  function Zr(t, e) { var i = this.cache;
    Ur(i, e) || (t.uniform3iv(this.addr, e), Br(i, e)) }

  function Qr(t, e) { var i = this.cache;
    Ur(i, e) || (t.uniform4iv(this.addr, e), Br(i, e)) }

  function Kr(t, e) { var i = this.cache;
    Ur(i, e) || (t.uniform1fv(this.addr, e), Br(i, e)) }

  function $r(t, e) { var i = this.cache;
    Ur(i, e) || (t.uniform1iv(this.addr, e), Br(i, e)) }

  function ta(t, e) { var i = this.cache,
      n = Dr(e, this.size, 2);
    Ur(i, n) || (t.uniform2fv(this.addr, n), this.updateCache(n)) }

  function ea(t, e) { var i = this.cache,
      n = Dr(e, this.size, 3);
    Ur(i, n) || (t.uniform3fv(this.addr, n), this.updateCache(n)) }

  function ia(t, e) { var i = this.cache,
      n = Dr(e, this.size, 4);
    Ur(i, n) || (t.uniform4fv(this.addr, n), this.updateCache(n)) }

  function na(t, e) { var i = this.cache,
      n = Dr(e, this.size, 4);
    Ur(i, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n)) }

  function ra(t, e) { var i = this.cache,
      n = Dr(e, this.size, 9);
    Ur(i, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n)) }

  function aa(t, e) { var i = this.cache,
      n = Dr(e, this.size, 16);
    Ur(i, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n)) }

  function oa(t, e, i) { var n = this.cache,
      r = e.length,
      a = Fr(i, r);!1 === Ur(n, a) && (t.uniform1iv(this.addr, a), Br(n, a)); for (var o = 0; o !== r; ++o) i.setTexture2D(e[o] || Ar, a[o]) }

  function sa(t, e, i) { var n = this.cache,
      r = e.length,
      a = Fr(i, r);!1 === Ur(n, a) && (t.uniform1iv(this.addr, a), Br(n, a)); for (var o = 0; o !== r; ++o) i.setTextureCube(e[o] || Lr, a[o]) }

  function ca(t, e, i) { this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) { switch (t) {
        case 5126:
          return zr;
        case 35664:
          return Hr;
        case 35665:
          return Vr;
        case 35666:
          return kr;
        case 35674:
          return jr;
        case 35675:
          return Wr;
        case 35676:
          return Xr;
        case 35678:
        case 36198:
          return qr;
        case 35680:
          return Yr;
        case 5124:
        case 35670:
          return Gr;
        case 35667:
        case 35671:
          return Jr;
        case 35668:
        case 35672:
          return Zr;
        case 35669:
        case 35673:
          return Qr } }(e.type) }

  function ha(t, e, i) { this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) { switch (t) {
        case 5126:
          return Kr;
        case 35664:
          return ta;
        case 35665:
          return ea;
        case 35666:
          return ia;
        case 35674:
          return na;
        case 35675:
          return ra;
        case 35676:
          return aa;
        case 35678:
          return oa;
        case 35680:
          return sa;
        case 5124:
        case 35670:
          return $r;
        case 35667:
        case 35671:
          return Jr;
        case 35668:
        case 35672:
          return Zr;
        case 35669:
        case 35673:
          return Qr } }(e.type) }

  function la(t) { this.id = t, Rr.call(this) } ha.prototype.updateCache = function(t) { var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Br(e, t) }, la.prototype.setValue = function(t, e, i) { for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) { var o = n[r];
      o.setValue(t, e[o.id], i) } }; var ua = /([\w\d_]+)(\])?(\[|\.)?/g;

  function pa(t, e) { t.seq.push(e), t.map[e.id] = e }

  function da(t, e, i) { var n = t.name,
      r = n.length; for (ua.lastIndex = 0;;) { var a = ua.exec(n),
        o = ua.lastIndex,
        s = a[1],
        c = "]" === a[2],
        h = a[3]; if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) { pa(i, void 0 === h ? new ca(s, t, e) : new ha(s, t, e)); break } var l = i.map[s];
      void 0 === l && pa(i, l = new la(s)), i = l } }

  function fa(t, e, i) { Rr.call(this), this.renderer = i; for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) { var a = t.getActiveUniform(e, r);
      da(a, t.getUniformLocation(e, a.name), this) } }

  function ma(t, e, i) { var n = t.createShader(e); return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), function(t) { for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i]; return e.join("\n") }(i)), n } fa.prototype.setValue = function(t, e, i) { var n = this.map[e];
    void 0 !== n && n.setValue(t, i, this.renderer) }, fa.prototype.setOptional = function(t, e, i) { var n = e[i];
    void 0 !== n && this.setValue(t, i, n) }, fa.upload = function(t, e, i, n) { for (var r = 0, a = e.length; r !== a; ++r) { var o = e[r],
        s = i[o.id];!1 !== s.needsUpdate && o.setValue(t, s.value, n) } }, fa.seqWithValue = function(t, e) { for (var i = [], n = 0, r = t.length; n !== r; ++n) { var a = t[n];
      a.id in e && i.push(a) } return i }; var ga = 0;

  function va(t) { switch (t) {
      case Re:
        return ["Linear", "( value )"];
      case Ce:
        return ["sRGB", "( value )"];
      case Oe:
        return ["RGBE", "( value )"];
      case Ie:
        return ["RGBM", "( value, 7.0 )"];
      case Ne:
        return ["RGBM", "( value, 16.0 )"];
      case De:
        return ["RGBD", "( value, 256.0 )"];
      case Pe:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
        throw new Error("unsupported encoding: " + t) } }

  function ya(t, e) { var i = va(e); return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }" }

  function xa(t) { return "" !== t }

  function ba(t, e) { return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights) }

  function _a(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }

  function wa(t) { return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(t, e) { var i = xi[e]; if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">"); return wa(i) }) }

  function Ma(t) { return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, i, n) { for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]"); return r }) }

  function Ea(t, e, i, n, r, a, o) { var s = t.context,
      c = n.defines,
      h = r.vertexShader,
      l = r.fragmentShader,
      u = "SHADOWMAP_TYPE_BASIC";
    a.shadowMapType === G ? u = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === H && (u = "SHADOWMAP_TYPE_PCF_SOFT"); var p = "ENVMAP_TYPE_CUBE",
      d = "ENVMAP_MODE_REFLECTION",
      f = "ENVMAP_BLENDING_MULTIPLY"; if (a.envMap) { switch (n.envMap.mapping) {
        case gt:
        case vt:
          p = "ENVMAP_TYPE_CUBE"; break;
        case _t:
        case Et:
          p = "ENVMAP_TYPE_CUBE_UV"; break;
        case yt:
        case xt:
          p = "ENVMAP_TYPE_EQUIREC"; break;
        case bt:
          p = "ENVMAP_TYPE_SPHERE" } switch (n.envMap.mapping) {
        case vt:
        case xt:
          d = "ENVMAP_MODE_REFRACTION" } switch (n.combine) {
        case ht:
          f = "ENVMAP_BLENDING_MULTIPLY"; break;
        case lt:
          f = "ENVMAP_BLENDING_MIX"; break;
        case ut:
          f = "ENVMAP_BLENDING_ADD" } } var m, g, v, y, x, b, _, w, M = 0 < t.gammaFactor ? t.gammaFactor : 1,
      E = o.isWebGL2 ? "" : (m = n.extensions, g = a, v = e, [(m = m || {}).derivatives || g.envMapCubeUV || g.bumpMap || g.normalMap && !g.objectSpaceNormalMap || g.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (m.fragDepth || g.logarithmicDepthBuffer) && v.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", m.drawBuffers && v.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (m.shaderTextureLOD || g.envMap) && v.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(xa).join("\n")),
      T = function(t) { var e = []; for (var i in t) { var n = t[i];!1 !== n && e.push("#define " + i + " " + n) } return e.join("\n") }(c),
      S = s.createProgram(); if (n.isRawShaderMaterial ? (0 < (y = [T].filter(xa).join("\n")).length && (y += "\n"), 0 < (x = [E, T].filter(xa).join("\n")).length && (x += "\n")) : (y = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, T, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + M, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(xa).join("\n"), x = [E, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, T, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + M, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== pt ? "#define TONE_MAPPING" : "", a.toneMapping !== pt ? xi.tonemapping_pars_fragment : "", a.toneMapping !== pt ? function(t, e) { var i; switch (e) {
          case Mt:
            i = "Linear"; break;
          case dt:
            i = "Reinhard"; break;
          case ft:
            i = "Uncharted2"; break;
          case mt:
            i = "OptimizedCineon"; break;
          default:
            throw new Error("unsupported toneMapping: " + e) } return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }" }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? xi.encodings_pars_fragment : "", a.mapEncoding ? ya("mapTexelToLinear", a.mapEncoding) : "", a.envMapEncoding ? ya("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? ya("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? (b = "linearToOutputTexel", _ = a.outputEncoding, w = va(_), "vec4 " + b + "( vec4 value ) { return LinearTo" + w[0] + w[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(xa).join("\n")), h = _a(h = ba(h = wa(h), a), a), l = _a(l = ba(l = wa(l), a), a), h = Ma(h), l = Ma(l), o.isWebGL2 && !n.isRawShaderMaterial) { var A = !1,
        L = /^\s*#version\s+300\s+es\s*\n/;
      n.isShaderMaterial && null !== h.match(L) && null !== l.match(L) && (A = !0, h = h.replace(L, ""), l = l.replace(L, "")), y = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + y, x = ["#version 300 es\n", "#define varying in", A ? "" : "out highp vec4 pc_fragColor;", A ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + x } var R = y + h,
      C = x + l,
      P = ma(s, s.VERTEX_SHADER, R),
      O = ma(s, s.FRAGMENT_SHADER, C);
    s.attachShader(S, P), s.attachShader(S, O), void 0 !== n.index0AttributeName ? s.bindAttribLocation(S, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(S, 0, "position"), s.linkProgram(S); var I, N, D = s.getProgramInfoLog(S).trim(),
      U = s.getShaderInfoLog(P).trim(),
      B = s.getShaderInfoLog(O).trim(),
      F = !0,
      z = !0; return !1 === s.getProgramParameter(S, s.LINK_STATUS) ? (F = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "gl.VALIDATE_STATUS", s.getProgramParameter(S, s.VALIDATE_STATUS), "gl.getProgramInfoLog", D, U, B)) : "" !== D ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", D) : "" !== U && "" !== B || (z = !1), z && (this.diagnostics = { runnable: F, material: n, programLog: D, vertexShader: { log: U, prefix: y }, fragmentShader: { log: B, prefix: x } }), s.deleteShader(P), s.deleteShader(O), this.getUniforms = function() { return void 0 === I && (I = new fa(s, S, t)), I }, this.getAttributes = function() { return void 0 === N && (N = function(t, e) { for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++) { var a = t.getActiveAttrib(e, r).name;
          i[a] = t.getAttribLocation(e, a) } return i }(s, S)), N }, this.destroy = function() { s.deleteProgram(S), this.program = void 0 }, Object.defineProperties(this, { uniforms: { get: function() { return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms() } }, attributes: { get: function() { return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes() } } }), this.name = r.name, this.id = ga++, this.code = i, this.usedTimes = 1, this.program = S, this.vertexShader = P, this.fragmentShader = O, this }

  function Ta(u, c, p) { var h = [],
      d = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "phong", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" },
      a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

    function f(t, e) { var i; return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding) : i = Re, i === Re && e && (i = Pe), i } this.getParameters = function(t, e, i, n, r, a, o) { var s = d[t.type],
        c = o.isSkinnedMesh ? function(t) { var e = t.skeleton.bones; if (p.floatVertexTextures) return 1024; var i = p.maxVertexUniforms,
            n = Math.floor((i - 20) / 4),
            r = Math.min(n, e.length); return r < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + r + "."), 0) : r }(o) : 0,
        h = p.precision;
      null !== t.precision && (h = p.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", h, "instead."); var l = u.getRenderTarget(); return { shaderID: s, precision: h, supportsVertexTextures: p.vertexTextures, outputEncoding: f(l ? l.texture : null, u.gammaOutput), map: !!t.map, mapEncoding: f(t.map, u.gammaInput), envMap: !!t.envMap, envMapMode: t.envMap && t.envMap.mapping, envMapEncoding: f(t.envMap, u.gammaInput), envMapCubeUV: !!t.envMap && (t.envMap.mapping === _t || t.envMap.mapping === Et), lightMap: !!t.lightMap, aoMap: !!t.aoMap, emissiveMap: !!t.emissiveMap, emissiveMapEncoding: f(t.emissiveMap, u.gammaInput), bumpMap: !!t.bumpMap, normalMap: !!t.normalMap, objectSpaceNormalMap: t.normalMapType === ze, displacementMap: !!t.displacementMap, roughnessMap: !!t.roughnessMap, metalnessMap: !!t.metalnessMap, specularMap: !!t.specularMap, alphaMap: !!t.alphaMap, gradientMap: !!t.gradientMap, combine: t.combine, vertexColors: t.vertexColors, fog: !!n, useFog: t.fog, fogExp: n && n.isFogExp2, flatShading: t.flatShading, sizeAttenuation: t.sizeAttenuation, logarithmicDepthBuffer: p.logarithmicDepthBuffer, skinning: t.skinning && 0 < c, maxBones: c, useVertexTexture: p.floatVertexTextures, morphTargets: t.morphTargets, morphNormals: t.morphNormals, maxMorphTargets: u.maxMorphTargets, maxMorphNormals: u.maxMorphNormals, numDirLights: e.directional.length, numPointLights: e.point.length, numSpotLights: e.spot.length, numRectAreaLights: e.rectArea.length, numHemiLights: e.hemi.length, numClippingPlanes: r, numClipIntersection: a, dithering: t.dithering, shadowMapEnabled: u.shadowMap.enabled && o.receiveShadow && 0 < i.length, shadowMapType: u.shadowMap.type, toneMapping: u.toneMapping, physicallyCorrectLights: u.physicallyCorrectLights, premultipliedAlpha: t.premultipliedAlpha, alphaTest: t.alphaTest, doubleSided: t.side === et, flipSided: t.side === wt, depthPacking: void 0 !== t.depthPacking && t.depthPacking } }, this.getProgramCode = function(t, e) { var i = []; if (e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
        for (var n in t.defines) i.push(n), i.push(t.defines[n]); for (var r = 0; r < a.length; r++) i.push(e[a[r]]); return i.push(t.onBeforeCompile.toString()), i.push(u.gammaOutput), i.join() }, this.acquireProgram = function(t, e, i, n) { for (var r, a = 0, o = h.length; a < o; a++) { var s = h[a]; if (s.code === n) {++(r = s).usedTimes; break } } return void 0 === r && (r = new Ea(u, c, n, t, e, i, p), h.push(r)), r }, this.releaseProgram = function(t) { if (0 == --t.usedTimes) { var e = h.indexOf(t);
        h[e] = h[h.length - 1], h.pop(), t.destroy() } }, this.programs = h }

  function Sa() { var n = new WeakMap; return { get: function(t) { var e = n.get(t); return void 0 === e && (e = {}, n.set(t, e)), e }, remove: function(t) { n.delete(t) }, update: function(t, e, i) { n.get(t)[e] = i }, dispose: function() { n = new WeakMap } } }

  function Aa(t, e) { return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id }

  function La(t, e) { return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id }

  function Ra() { var o = [],
      s = 0,
      c = [],
      h = []; return { opaque: c, transparent: h, init: function() { s = 0, c.length = 0, h.length = 0 }, push: function(t, e, i, n, r) { var a = o[s];
        void 0 === a ? (a = { id: t.id, object: t, geometry: e, material: i, program: i.program, renderOrder: t.renderOrder, z: n, group: r }, o[s] = a) : (a.id = t.id, a.object = t, a.geometry = e, a.material = i, a.program = i.program, a.renderOrder = t.renderOrder, a.z = n, a.group = r), (!0 === i.transparent ? h : c).push(a), s++ }, sort: function() { 1 < c.length && c.sort(Aa), 1 < h.length && h.sort(La) } } }

  function Ca() { var r = {}; return { get: function(t, e) { var i = t.id + "," + e.id,
          n = r[i]; return void 0 === n && (n = new Ra, r[i] = n), n }, dispose: function() { r = {} } } }

  function Pa() { var i = {}; return { get: function(t) { if (void 0 !== i[t.id]) return i[t.id]; var e; switch (t.type) {
          case "DirectionalLight":
            e = { direction: new je, color: new wi, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new He }; break;
          case "SpotLight":
            e = { position: new je, direction: new je, color: new wi, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new He }; break;
          case "PointLight":
            e = { position: new je, color: new wi, distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new He, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break;
          case "HemisphereLight":
            e = { direction: new je, skyColor: new wi, groundColor: new wi }; break;
          case "RectAreaLight":
            e = { color: new wi, position: new je, halfWidth: new je, halfHeight: new je } } return i[t.id] = e } } } var Oa, Ia, Na, Da, Ua, Ba, Fa, za, Ga, Ha, Va, ka, ja, Wa, Xa, qa, Ya = 0;

  function Ja() { var _ = new Pa,
      w = { id: Ya++, hash: { stateID: -1, directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, shadowsLength: -1 }, ambient: [0, 0, 0], directional: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], point: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] },
      M = new je,
      E = new Ve,
      T = new Ve; return { setup: function(t, e, i) { for (var n = 0, r = 0, a = 0, o = 0, s = 0, c = 0, h = 0, l = 0, u = i.matrixWorldInverse, p = 0, d = t.length; p < d; p++) { var f = t[p],
            m = f.color,
            g = f.intensity,
            v = f.distance,
            y = f.shadow && f.shadow.map ? f.shadow.map.texture : null; if (f.isAmbientLight) n += m.r * g, r += m.g * g, a += m.b * g;
          else if (f.isDirectionalLight) { if ((b = _.get(f)).color.copy(f.color).multiplyScalar(f.intensity), b.direction.setFromMatrixPosition(f.matrixWorld), M.setFromMatrixPosition(f.target.matrixWorld), b.direction.sub(M), b.direction.transformDirection(u), b.shadow = f.castShadow, f.castShadow) { var x = f.shadow;
              b.shadowBias = x.bias, b.shadowRadius = x.radius, b.shadowMapSize = x.mapSize } w.directionalShadowMap[o] = y, w.directionalShadowMatrix[o] = f.shadow.matrix, w.directional[o] = b, o++ } else if (f.isSpotLight)(b = _.get(f)).position.setFromMatrixPosition(f.matrixWorld), b.position.applyMatrix4(u), b.color.copy(m).multiplyScalar(g), b.distance = v, b.direction.setFromMatrixPosition(f.matrixWorld), M.setFromMatrixPosition(f.target.matrixWorld), b.direction.sub(M), b.direction.transformDirection(u), b.coneCos = Math.cos(f.angle), b.penumbraCos = Math.cos(f.angle * (1 - f.penumbra)), b.decay = 0 === f.distance ? 0 : f.decay, b.shadow = f.castShadow, f.castShadow && (x = f.shadow, b.shadowBias = x.bias, b.shadowRadius = x.radius, b.shadowMapSize = x.mapSize), w.spotShadowMap[c] = y, w.spotShadowMatrix[c] = f.shadow.matrix, w.spot[c] = b, c++;
          else if (f.isRectAreaLight)(b = _.get(f)).color.copy(m).multiplyScalar(g), b.position.setFromMatrixPosition(f.matrixWorld), b.position.applyMatrix4(u), T.identity(), E.copy(f.matrixWorld), E.premultiply(u), T.extractRotation(E), b.halfWidth.set(.5 * f.width, 0, 0), b.halfHeight.set(0, .5 * f.height, 0), b.halfWidth.applyMatrix4(T), b.halfHeight.applyMatrix4(T), w.rectArea[h] = b, h++;
          else if (f.isPointLight)(b = _.get(f)).position.setFromMatrixPosition(f.matrixWorld), b.position.applyMatrix4(u), b.color.copy(f.color).multiplyScalar(f.intensity), b.distance = f.distance, b.decay = 0 === f.distance ? 0 : f.decay, b.shadow = f.castShadow, f.castShadow && (x = f.shadow, b.shadowBias = x.bias, b.shadowRadius = x.radius, b.shadowMapSize = x.mapSize, b.shadowCameraNear = x.camera.near, b.shadowCameraFar = x.camera.far), w.pointShadowMap[s] = y, w.pointShadowMatrix[s] = f.shadow.matrix, w.point[s] = b, s++;
          else if (f.isHemisphereLight) { var b;
            (b = _.get(f)).direction.setFromMatrixPosition(f.matrixWorld), b.direction.transformDirection(u), b.direction.normalize(), b.skyColor.copy(f.color).multiplyScalar(g), b.groundColor.copy(f.groundColor).multiplyScalar(g), w.hemi[l] = b, l++ } } w.ambient[0] = n, w.ambient[1] = r, w.ambient[2] = a, w.directional.length = o, w.spot.length = c, w.rectArea.length = h, w.point.length = s, w.hemi.length = l, w.hash.stateID = w.id, w.hash.directionalLength = o, w.hash.pointLength = s, w.hash.spotLength = c, w.hash.rectAreaLength = h, w.hash.hemiLength = l, w.hash.shadowsLength = e.length }, state: w } }

  function Za() { var e = new Ja,
      i = [],
      n = []; return { init: function() { i.length = 0, n.length = 0 }, state: { lightsArray: i, shadowsArray: n, lights: e }, setupLights: function(t) { e.setup(i, n, t) }, pushLight: function(t) { i.push(t) }, pushShadow: function(t) { n.push(t) } } }

  function Qa() { var n = {}; return { get: function(t, e) { var i; return void 0 === n[t.id] ? (i = new Za, n[t.id] = {}, n[t.id][e.id] = i) : void 0 === n[t.id][e.id] ? (i = new Za, n[t.id][e.id] = i) : i = n[t.id][e.id], i }, dispose: function() { n = {} } } }

  function Ka(t) { hr.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Ue, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t) }

  function $a(t) { hr.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new je, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t) }

  function to(x, m, t) { for (var b = new vi, _ = new Ve, w = new He, M = new He(t, t), E = new je, T = new je, v = 1, y = 2, e = 1 + (v | y), S = new Array(e), A = new Array(e), L = {}, R = { 0: wt, 1: D, 2: et }, C = [new je(1, 0, 0), new je(-1, 0, 0), new je(0, 0, 1), new je(0, 0, -1), new je(0, 1, 0), new je(0, -1, 0)], P = [new je(0, 1, 0), new je(0, 1, 0), new je(0, 1, 0), new je(0, 1, 0), new je(0, 0, 1), new je(0, 0, -1)], O = [new li, new li, new li, new li, new li, new li], i = 0; i !== e; ++i) { var n = 0 != (i & v),
        r = 0 != (i & y),
        a = new Ka({ depthPacking: Be, morphTargets: n, skinning: r });
      S[i] = a; var o = new $a({ morphTargets: n, skinning: r });
      A[i] = o } var I = this;

    function g(t, e, i, n, r, a) { var o = t.geometry,
        s = null,
        c = S,
        h = t.customDepthMaterial; if (i && (c = A, h = t.customDistanceMaterial), h) s = h;
      else { var l = !1;
        e.morphTargets && (o && o.isBufferGeometry ? l = o.morphAttributes && o.morphAttributes.position && 0 < o.morphAttributes.position.length : o && o.isGeometry && (l = o.morphTargets && 0 < o.morphTargets.length)), t.isSkinnedMesh && !1 === e.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t); var u = t.isSkinnedMesh && e.skinning,
          p = 0;
        l && (p |= v), u && (p |= y), s = c[p] } if (x.localClippingEnabled && !0 === e.clipShadows && 0 !== e.clippingPlanes.length) { var d = s.uuid,
          f = e.uuid,
          m = L[d];
        void 0 === m && (m = {}, L[d] = m); var g = m[f];
        void 0 === g && (g = s.clone(), m[f] = g), s = g } return s.visible = e.visible, s.wireframe = e.wireframe, s.side = null != e.shadowSide ? e.shadowSide : R[e.side], s.clipShadows = e.clipShadows, s.clippingPlanes = e.clippingPlanes, s.clipIntersection = e.clipIntersection, s.wireframeLinewidth = e.wireframeLinewidth, s.linewidth = e.linewidth, i && s.isMeshDistanceMaterial && (s.referencePosition.copy(n), s.nearDistance = r, s.farDistance = a), s }

    function N(t, e, i, n) { if (!1 !== t.visible) { if (t.layers.test(e.layers) && (t.isMesh || t.isLine || t.isPoints) && t.castShadow && (!t.frustumCulled || b.intersectsObject(t))) { t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld); var r = m.update(t),
            a = t.material; if (Array.isArray(a))
            for (var o = r.groups, s = 0, c = o.length; s < c; s++) { var h = o[s],
                l = a[h.materialIndex]; if (l && l.visible) { var u = g(t, l, n, T, i.near, i.far);
                x.renderBufferDirect(i, null, r, u, t, h) } }
          else if (a.visible) { u = g(t, a, n, T, i.near, i.far);
            x.renderBufferDirect(i, null, r, u, t, null) } } for (var p = t.children, d = 0, f = p.length; d < f; d++) N(p[d], e, i, n) } } this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = G, this.render = function(t, e, i) { if (!1 !== I.enabled && (!1 !== I.autoUpdate || !1 !== I.needsUpdate) && 0 !== t.length) { var n, r = x.context,
          a = x.state;
        a.disable(r.BLEND), a.buffers.color.setClear(1, 1, 1, 1), a.buffers.depth.setTest(!0), a.setScissorTest(!1); for (var o = 0, s = t.length; o < s; o++) { var c = t[o],
            h = c.shadow,
            l = c && c.isPointLight; if (void 0 !== h) { var u = h.camera; if (w.copy(h.mapSize), w.min(M), l) { var p = w.x,
                d = w.y;
              O[0].set(2 * p, d, p, d), O[1].set(0, d, p, d), O[2].set(3 * p, d, p, d), O[3].set(p, d, p, d), O[4].set(3 * p, 0, p, d), O[5].set(p, 0, p, d), w.x *= 4, w.y *= 2 } if (null === h.map) { var f = { minFilter: Lt, magFilter: Lt, format: Yt };
              h.map = new ui(w.x, w.y, f), h.map.texture.name = c.name + ".shadowMap", u.updateProjectionMatrix() } h.isSpotLightShadow && h.update(c); var m = h.map,
              g = h.matrix;
            T.setFromMatrixPosition(c.matrixWorld), u.position.copy(T), l ? (n = 6, g.makeTranslation(-T.x, -T.y, -T.z)) : (n = 1, E.setFromMatrixPosition(c.target.matrixWorld), u.lookAt(E), u.updateMatrixWorld(), g.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), g.multiply(u.projectionMatrix), g.multiply(u.matrixWorldInverse)), x.setRenderTarget(m), x.clear(); for (var v = 0; v < n; v++) { if (l) { E.copy(u.position), E.add(C[v]), u.up.copy(P[v]), u.lookAt(E), u.updateMatrixWorld(); var y = O[v];
                a.viewport(y) } _.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse), b.setFromMatrix(_), N(e, i, u, l) } } else console.warn("THREE.WebGLShadowMap:", c, "has no shadow.") } I.needsUpdate = !1 } } }

  function eo(l, i, c, n) { var r = new function() { var e = !1,
          a = new li,
          i = null,
          o = new li(0, 0, 0, 0); return { setMask: function(t) { i === t || e || (l.colorMask(t, t, t, t), i = t) }, setLocked: function(t) { e = t }, setClear: function(t, e, i, n, r) {!0 === r && (t *= n, e *= n, i *= n), a.set(t, e, i, n), !1 === o.equals(a) && (l.clearColor(t, e, i, n), o.copy(a)) }, reset: function() { e = !1, i = null, o.set(-1, 0, 0, 0) } } },
      a = new function() { var e = !1,
          i = null,
          n = null,
          r = null; return { setTest: function(t) { t ? F(l.DEPTH_TEST) : z(l.DEPTH_TEST) }, setMask: function(t) { i === t || e || (l.depthMask(t), i = t) }, setFunc: function(t) { if (n !== t) { if (t) switch (t) {
                case tt:
                  l.depthFunc(l.NEVER); break;
                case it:
                  l.depthFunc(l.ALWAYS); break;
                case nt:
                  l.depthFunc(l.LESS); break;
                case rt:
                  l.depthFunc(l.LEQUAL); break;
                case at:
                  l.depthFunc(l.EQUAL); break;
                case ot:
                  l.depthFunc(l.GEQUAL); break;
                case st:
                  l.depthFunc(l.GREATER); break;
                case ct:
                  l.depthFunc(l.NOTEQUAL); break;
                default:
                  l.depthFunc(l.LEQUAL) }
              else l.depthFunc(l.LEQUAL);
              n = t } }, setLocked: function(t) { e = t }, setClear: function(t) { r !== t && (l.clearDepth(t), r = t) }, reset: function() { e = !1, r = n = i = null } } },
      e = new function() { var e = !1,
          i = null,
          n = null,
          r = null,
          a = null,
          o = null,
          s = null,
          c = null,
          h = null; return { setTest: function(t) { t ? F(l.STENCIL_TEST) : z(l.STENCIL_TEST) }, setMask: function(t) { i === t || e || (l.stencilMask(t), i = t) }, setFunc: function(t, e, i) { n === t && r === e && a === i || (l.stencilFunc(t, e, i), n = t, r = e, a = i) }, setOp: function(t, e, i) { o === t && s === e && c === i || (l.stencilOp(t, e, i), o = t, s = e, c = i) }, setLocked: function(t) { e = t }, setClear: function(t) { h !== t && (l.clearStencil(t), h = t) }, reset: function() { e = !1, h = c = s = o = a = r = n = i = null } } },
      t = l.getParameter(l.MAX_VERTEX_ATTRIBS),
      o = new Uint8Array(t),
      s = new Uint8Array(t),
      h = new Uint8Array(t),
      u = {},
      p = null,
      d = null,
      f = null,
      m = null,
      g = null,
      v = null,
      y = null,
      x = null,
      b = null,
      _ = !1,
      w = null,
      M = null,
      E = null,
      T = null,
      S = null,
      A = l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      L = !1,
      R = 0,
      C = l.getParameter(l.VERSION); - 1 !== C.indexOf("WebGL") ? (R = parseFloat(/^WebGL\ ([0-9])/.exec(C)[1]), L = 1 <= R) : -1 !== C.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(C)[1]), L = 2 <= R); var P = null,
      O = {},
      I = new li,
      N = new li;

    function D(t, e, i) { var n = new Uint8Array(4),
        r = l.createTexture();
      l.bindTexture(t, r), l.texParameteri(t, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(t, l.TEXTURE_MAG_FILTER, l.NEAREST); for (var a = 0; a < i; a++) l.texImage2D(e + a, 0, l.RGBA, 1, 1, 0, l.RGBA, l.UNSIGNED_BYTE, n); return r } var U = {};

    function B(t, e) {
      (o[t] = 1, 0 === s[t] && (l.enableVertexAttribArray(t), s[t] = 1), h[t] !== e) && ((n.isWebGL2 ? l : i.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](t, e), h[t] = e) }

    function F(t) {!0 !== u[t] && (l.enable(t), u[t] = !0) }

    function z(t) {!1 !== u[t] && (l.disable(t), u[t] = !1) }

    function G(t, e, i, n, r, a, o, s) { if (t !== Y ? F(l.BLEND) : z(l.BLEND), t !== $) { if (t !== f || s !== _) switch (t) {
          case Z:
            s ? (l.blendEquationSeparate(l.FUNC_ADD, l.FUNC_ADD), l.blendFuncSeparate(l.ONE, l.ONE, l.ONE, l.ONE)) : (l.blendEquation(l.FUNC_ADD), l.blendFunc(l.SRC_ALPHA, l.ONE)); break;
          case Q:
            s ? (l.blendEquationSeparate(l.FUNC_ADD, l.FUNC_ADD), l.blendFuncSeparate(l.ZERO, l.ZERO, l.ONE_MINUS_SRC_COLOR, l.ONE_MINUS_SRC_ALPHA)) : (l.blendEquation(l.FUNC_ADD), l.blendFunc(l.ZERO, l.ONE_MINUS_SRC_COLOR)); break;
          case K:
            s ? (l.blendEquationSeparate(l.FUNC_ADD, l.FUNC_ADD), l.blendFuncSeparate(l.ZERO, l.SRC_COLOR, l.ZERO, l.SRC_ALPHA)) : (l.blendEquation(l.FUNC_ADD), l.blendFunc(l.ZERO, l.SRC_COLOR)); break;
          default:
            s ? (l.blendEquationSeparate(l.FUNC_ADD, l.FUNC_ADD), l.blendFuncSeparate(l.ONE, l.ONE_MINUS_SRC_ALPHA, l.ONE, l.ONE_MINUS_SRC_ALPHA)) : (l.blendEquationSeparate(l.FUNC_ADD, l.FUNC_ADD), l.blendFuncSeparate(l.SRC_ALPHA, l.ONE_MINUS_SRC_ALPHA, l.ONE, l.ONE_MINUS_SRC_ALPHA)) } b = x = y = v = g = m = null } else r = r || e, a = a || i, o = o || n, e === m && r === y || (l.blendEquationSeparate(c.convert(e), c.convert(r)), m = e, y = r), i === g && n === v && a === x && o === b || (l.blendFuncSeparate(c.convert(i), c.convert(n), c.convert(a), c.convert(o)), g = i, v = n, x = a, b = o);
      f = t, _ = s }

    function H(t) { w !== t && (t ? l.frontFace(l.CW) : l.frontFace(l.CCW), w = t) }

    function V(t) { t !== W ? (F(l.CULL_FACE), t !== M && (t === X ? l.cullFace(l.BACK) : t === q ? l.cullFace(l.FRONT) : l.cullFace(l.FRONT_AND_BACK))) : z(l.CULL_FACE), M = t }

    function k(t, e, i) { t ? (F(l.POLYGON_OFFSET_FILL), T === e && S === i || (l.polygonOffset(e, i), T = e, S = i)) : z(l.POLYGON_OFFSET_FILL) }

    function j(t) { void 0 === t && (t = l.TEXTURE0 + A - 1), P !== t && (l.activeTexture(t), P = t) } return U[l.TEXTURE_2D] = D(l.TEXTURE_2D, l.TEXTURE_2D, 1), U[l.TEXTURE_CUBE_MAP] = D(l.TEXTURE_CUBE_MAP, l.TEXTURE_CUBE_MAP_POSITIVE_X, 6), r.setClear(0, 0, 0, 1), a.setClear(1), e.setClear(0), F(l.DEPTH_TEST), a.setFunc(rt), H(!1), V(X), F(l.CULL_FACE), F(l.BLEND), G(J), { buffers: { color: r, depth: a, stencil: e }, initAttributes: function() { for (var t = 0, e = o.length; t < e; t++) o[t] = 0 }, enableAttribute: function(t) { B(t, 0) }, enableAttributeAndDivisor: B, disableUnusedAttributes: function() { for (var t = 0, e = s.length; t !== e; ++t) s[t] !== o[t] && (l.disableVertexAttribArray(t), s[t] = 0) }, enable: F, disable: z, getCompressedTextureFormats: function() { if (null === p && (p = [], i.get("WEBGL_compressed_texture_pvrtc") || i.get("WEBGL_compressed_texture_s3tc") || i.get("WEBGL_compressed_texture_etc1") || i.get("WEBGL_compressed_texture_astc")))
          for (var t = l.getParameter(l.COMPRESSED_TEXTURE_FORMATS), e = 0; e < t.length; e++) p.push(t[e]); return p }, useProgram: function(t) { return d !== t && (l.useProgram(t), d = t, !0) }, setBlending: G, setMaterial: function(t, e) { t.side === et ? z(l.CULL_FACE) : F(l.CULL_FACE); var i = t.side === wt;
        e && (i = !i), H(i), t.blending === J && !1 === t.transparent ? G(Y) : G(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite), k(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits) }, setFlipSided: H, setCullFace: V, setLineWidth: function(t) { t !== E && (L && l.lineWidth(t), E = t) }, setPolygonOffset: k, setScissorTest: function(t) { t ? F(l.SCISSOR_TEST) : z(l.SCISSOR_TEST) }, activeTexture: j, bindTexture: function(t, e) { null === P && j(); var i = O[P];
        void 0 === i && (i = { type: void 0, texture: void 0 }, O[P] = i), i.type === t && i.texture === e || (l.bindTexture(t, e || U[t]), i.type = t, i.texture = e) }, compressedTexImage2D: function() { try { l.compressedTexImage2D.apply(l, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texImage2D: function() { try { l.texImage2D.apply(l, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, scissor: function(t) {!1 === I.equals(t) && (l.scissor(t.x, t.y, t.z, t.w), I.copy(t)) }, viewport: function(t) {!1 === N.equals(t) && (l.viewport(t.x, t.y, t.z, t.w), N.copy(t)) }, reset: function() { for (var t = 0; t < s.length; t++) 1 === s[t] && (l.disableVertexAttribArray(t), s[t] = 0);
        u = {}, O = {}, M = w = f = d = P = p = null, r.reset(), a.reset(), e.reset() } } }

  function io(g, r, v, y, x, b, _) { var f, s = {};

    function w(t, e) { if (t.width > e || t.height > e) { if ("data" in t) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ")."); var i = e / Math.max(t.width, t.height),
          n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"); return n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height), n } return t }

    function M(t) { return Ge.isPowerOfTwo(t.width) && Ge.isPowerOfTwo(t.height) }

    function E(t, e) { return t.generateMipmaps && e && t.minFilter !== Lt && t.minFilter !== Pt }

    function T(t, e, i, n) { g.generateMipmap(t), y.get(e).__maxMipLevel = Math.log(Math.max(i, n)) * Math.LOG2E }

    function S(t, e) { if (!x.isWebGL2) return t; if (t === g.RGB) { if (e === g.FLOAT) return g.RGB32F; if (e === g.HALF_FLOAT) return g.RGB16F; if (e === g.UNSIGNED_BYTE) return g.RGB8 } if (t === g.RGBA) { if (e === g.FLOAT) return g.RGBA32F; if (e === g.HALF_FLOAT) return g.RGBA16F; if (e === g.UNSIGNED_BYTE) return g.RGBA8 } return t }

    function a(t) { return t === Lt || t === Rt || t === Ct ? g.NEAREST : g.LINEAR }

    function A(t) { var e = t.target;
      e.removeEventListener("dispose", A),
        function(t) { var e = y.get(t); if (t.image && e.__image__webglTextureCube) g.deleteTexture(e.__image__webglTextureCube);
          else { if (void 0 === e.__webglInit) return;
            g.deleteTexture(e.__webglTexture) } y.remove(t) }(e), e.isVideoTexture && delete s[e.id], _.memory.textures-- }

    function o(t) { var e = t.target;
      e.removeEventListener("dispose", o),
        function(t) { var e = y.get(t),
            i = y.get(t.texture); if (!t) return;
          void 0 !== i.__webglTexture && g.deleteTexture(i.__webglTexture);
          t.depthTexture && t.depthTexture.dispose(); if (t.isWebGLRenderTargetCube)
            for (var n = 0; n < 6; n++) g.deleteFramebuffer(e.__webglFramebuffer[n]), e.__webglDepthbuffer && g.deleteRenderbuffer(e.__webglDepthbuffer[n]);
          else g.deleteFramebuffer(e.__webglFramebuffer), e.__webglDepthbuffer && g.deleteRenderbuffer(e.__webglDepthbuffer);
          y.remove(t.texture), y.remove(t) }(e), _.memory.textures-- }

    function c(t, e) { var i, n, r, a = y.get(t); if (t.isVideoTexture && (n = (i = t).id, r = _.render.frame, s[n] !== r && (s[n] = r, i.update())), 0 < t.version && a.__version !== t.version) { var o = t.image; if (void 0 === o) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
        else { if (!1 !== o.complete) return void
          function(t, e, i) { void 0 === t.__webglInit && (t.__webglInit = !0, e.addEventListener("dispose", A), t.__webglTexture = g.createTexture(), _.memory.textures++);
            v.activeTexture(g.TEXTURE0 + i), v.bindTexture(g.TEXTURE_2D, t.__webglTexture), g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, e.flipY), g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), g.pixelStorei(g.UNPACK_ALIGNMENT, e.unpackAlignment); var n = w(e.image, x.maxTextureSize);
            a = e, x.isWebGL2 || a.wrapS === St && a.wrapT === St && (a.minFilter === Lt || a.minFilter === Pt) || !1 !== M(n) || (n = (r = n) instanceof HTMLImageElement || r instanceof HTMLCanvasElement || r instanceof ImageBitmap ? (void 0 === f && (f = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), f.width = Ge.floorPowerOfTwo(r.width), f.height = Ge.floorPowerOfTwo(r.height), f.getContext("2d").drawImage(r, 0, 0, f.width, f.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + r.width + "x" + r.height + "). Resized to " + f.width + "x" + f.height), f) : r); var r; var a; var o = M(n),
              s = b.convert(e.format),
              c = b.convert(e.type),
              h = S(s, c);
            L(g.TEXTURE_2D, e, o); var l, u = e.mipmaps; if (e.isDepthTexture) { if (h = g.DEPTH_COMPONENT, e.type === Gt) { if (!x.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                h = g.DEPTH_COMPONENT32F } else x.isWebGL2 && (h = g.DEPTH_COMPONENT16);
              e.format === Kt && h === g.DEPTH_COMPONENT && e.type !== Bt && e.type !== zt && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), e.type = Bt, c = b.convert(e.type)), e.format === $t && (h = g.DEPTH_STENCIL, e.type !== Wt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), e.type = Wt, c = b.convert(e.type))), v.texImage2D(g.TEXTURE_2D, 0, h, n.width, n.height, 0, s, c, null) } else if (e.isDataTexture)
              if (0 < u.length && o) { for (var p = 0, d = u.length; p < d; p++) l = u[p], v.texImage2D(g.TEXTURE_2D, p, h, l.width, l.height, 0, s, c, l.data);
                e.generateMipmaps = !1, t.__maxMipLevel = u.length - 1 }
            else v.texImage2D(g.TEXTURE_2D, 0, h, n.width, n.height, 0, s, c, n.data), t.__maxMipLevel = 0;
            else if (e.isCompressedTexture) { for (var p = 0, d = u.length; p < d; p++) l = u[p], e.format !== Yt && e.format !== qt ? -1 < v.getCompressedTextureFormats().indexOf(s) ? v.compressedTexImage2D(g.TEXTURE_2D, p, h, l.width, l.height, 0, l.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v.texImage2D(g.TEXTURE_2D, p, h, l.width, l.height, 0, s, c, l.data);
              t.__maxMipLevel = u.length - 1 } else if (0 < u.length && o) { for (var p = 0, d = u.length; p < d; p++) l = u[p], v.texImage2D(g.TEXTURE_2D, p, h, s, c, l);
              e.generateMipmaps = !1, t.__maxMipLevel = u.length - 1 } else v.texImage2D(g.TEXTURE_2D, 0, h, s, c, n), t.__maxMipLevel = 0;
            E(e, o) && T(g.TEXTURE_2D, e, n.width, n.height);
            t.__version = e.version, e.onUpdate && e.onUpdate(e) }(a, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete") } } v.activeTexture(g.TEXTURE0 + e), v.bindTexture(g.TEXTURE_2D, a.__webglTexture) }

    function L(t, e, i) { var n; if (i ? (g.texParameteri(t, g.TEXTURE_WRAP_S, b.convert(e.wrapS)), g.texParameteri(t, g.TEXTURE_WRAP_T, b.convert(e.wrapT)), g.texParameteri(t, g.TEXTURE_MAG_FILTER, b.convert(e.magFilter)), g.texParameteri(t, g.TEXTURE_MIN_FILTER, b.convert(e.minFilter))) : (g.texParameteri(t, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(t, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), e.wrapS === St && e.wrapT === St || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), g.texParameteri(t, g.TEXTURE_MAG_FILTER, a(e.magFilter)), g.texParameteri(t, g.TEXTURE_MIN_FILTER, a(e.minFilter)), e.minFilter !== Lt && e.minFilter !== Pt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), n = r.get("EXT_texture_filter_anisotropic")) { if (e.type === Gt && null === r.get("OES_texture_float_linear")) return; if (e.type === Ht && null === (x.isWebGL2 || r.get("OES_texture_half_float_linear"))) return;
        (1 < e.anisotropy || y.get(e).__currentAnisotropy) && (g.texParameterf(t, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, x.getMaxAnisotropy())), y.get(e).__currentAnisotropy = e.anisotropy) } }

    function h(t, e, i, n) { var r = b.convert(e.texture.format),
        a = b.convert(e.texture.type),
        o = S(r, a);
      v.texImage2D(n, 0, o, e.width, e.height, 0, r, a, null), g.bindFramebuffer(g.FRAMEBUFFER, t), g.framebufferTexture2D(g.FRAMEBUFFER, i, n, y.get(e.texture).__webglTexture, 0), g.bindFramebuffer(g.FRAMEBUFFER, null) }

    function l(t, e) { g.bindRenderbuffer(g.RENDERBUFFER, t), e.depthBuffer && !e.stencilBuffer ? (g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_COMPONENT16, e.width, e.height), g.framebufferRenderbuffer(g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_STENCIL, e.width, e.height), g.framebufferRenderbuffer(g.FRAMEBUFFER, g.DEPTH_STENCIL_ATTACHMENT, g.RENDERBUFFER, t)) : g.renderbufferStorage(g.RENDERBUFFER, g.RGBA4, e.width, e.height), g.bindRenderbuffer(g.RENDERBUFFER, null) }

    function u(t) { var e = y.get(t),
        i = !0 === t.isWebGLRenderTargetCube; if (t.depthTexture) { if (i) throw new Error("target.depthTexture not supported in Cube render targets");! function(t, e) { if (e && e.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported"); if (g.bindFramebuffer(g.FRAMEBUFFER, t), !e.depthTexture || !e.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          y.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0), c(e.depthTexture, 0); var i = y.get(e.depthTexture).__webglTexture; if (e.depthTexture.format === Kt) g.framebufferTexture2D(g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.TEXTURE_2D, i, 0);
          else { if (e.depthTexture.format !== $t) throw new Error("Unknown depthTexture format");
            g.framebufferTexture2D(g.FRAMEBUFFER, g.DEPTH_STENCIL_ATTACHMENT, g.TEXTURE_2D, i, 0) } }(e.__webglFramebuffer, t) } else if (i) { e.__webglDepthbuffer = []; for (var n = 0; n < 6; n++) g.bindFramebuffer(g.FRAMEBUFFER, e.__webglFramebuffer[n]), e.__webglDepthbuffer[n] = g.createRenderbuffer(), l(e.__webglDepthbuffer[n], t) } else g.bindFramebuffer(g.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = g.createRenderbuffer(), l(e.__webglDepthbuffer, t);
      g.bindFramebuffer(g.FRAMEBUFFER, null) } this.setTexture2D = c, this.setTextureCube = function(t, e) { var i = y.get(t); if (6 === t.image.length)
        if (0 < t.version && i.__version !== t.version) { i.__image__webglTextureCube || (t.addEventListener("dispose", A), i.__image__webglTextureCube = g.createTexture(), _.memory.textures++), v.activeTexture(g.TEXTURE0 + e), v.bindTexture(g.TEXTURE_CUBE_MAP, i.__image__webglTextureCube), g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, t.flipY); for (var n = t && t.isCompressedTexture, r = t.image[0] && t.image[0].isDataTexture, a = [], o = 0; o < 6; o++) a[o] = n || r ? r ? t.image[o].image : t.image[o] : w(t.image[o], x.maxCubemapSize); var s = a[0],
            c = M(s),
            h = b.convert(t.format),
            l = b.convert(t.type),
            u = S(h, l); for (L(g.TEXTURE_CUBE_MAP, t, c), o = 0; o < 6; o++)
            if (n)
              for (var p, d = a[o].mipmaps, f = 0, m = d.length; f < m; f++) p = d[f], t.format !== Yt && t.format !== qt ? -1 < v.getCompressedTextureFormats().indexOf(h) ? v.compressedTexImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + o, f, u, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + o, f, u, p.width, p.height, 0, h, l, p.data);
            else r ? v.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, u, a[o].width, a[o].height, 0, h, l, a[o].data) : v.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, u, h, l, a[o]);
          i.__maxMipLevel = n ? d.length - 1 : 0, E(t, c) && T(g.TEXTURE_CUBE_MAP, t, s.width, s.height), i.__version = t.version, t.onUpdate && t.onUpdate(t) }
      else v.activeTexture(g.TEXTURE0 + e), v.bindTexture(g.TEXTURE_CUBE_MAP, i.__image__webglTextureCube) }, this.setTextureCubeDynamic = function(t, e) { v.activeTexture(g.TEXTURE0 + e), v.bindTexture(g.TEXTURE_CUBE_MAP, y.get(t).__webglTexture) }, this.setupRenderTarget = function(t) { var e = y.get(t),
        i = y.get(t.texture);
      t.addEventListener("dispose", o), i.__webglTexture = g.createTexture(), _.memory.textures++; var n = !0 === t.isWebGLRenderTargetCube,
        r = M(t); if (n) { e.__webglFramebuffer = []; for (var a = 0; a < 6; a++) e.__webglFramebuffer[a] = g.createFramebuffer() } else e.__webglFramebuffer = g.createFramebuffer(); if (n) { for (v.bindTexture(g.TEXTURE_CUBE_MAP, i.__webglTexture), L(g.TEXTURE_CUBE_MAP, t.texture, r), a = 0; a < 6; a++) h(e.__webglFramebuffer[a], t, g.COLOR_ATTACHMENT0, g.TEXTURE_CUBE_MAP_POSITIVE_X + a);
        E(t.texture, r) && T(g.TEXTURE_CUBE_MAP, t.texture, t.width, t.height), v.bindTexture(g.TEXTURE_CUBE_MAP, null) } else v.bindTexture(g.TEXTURE_2D, i.__webglTexture), L(g.TEXTURE_2D, t.texture, r), h(e.__webglFramebuffer, t, g.COLOR_ATTACHMENT0, g.TEXTURE_2D), E(t.texture, r) && T(g.TEXTURE_2D, t.texture, t.width, t.height), v.bindTexture(g.TEXTURE_2D, null);
      t.depthBuffer && u(t) }, this.updateRenderTargetMipmap = function(t) { var e = t.texture; if (E(e, M(t))) { var i = t.isWebGLRenderTargetCube ? g.TEXTURE_CUBE_MAP : g.TEXTURE_2D,
          n = y.get(e).__webglTexture;
        v.bindTexture(i, n), T(i, e, t.width, t.height), v.bindTexture(i, null) } } }

  function no(i, n, r) { return { convert: function(t) { var e; if (t === Tt) return i.REPEAT; if (t === St) return i.CLAMP_TO_EDGE; if (t === At) return i.MIRRORED_REPEAT; if (t === Lt) return i.NEAREST; if (t === Rt) return i.NEAREST_MIPMAP_NEAREST; if (t === Ct) return i.NEAREST_MIPMAP_LINEAR; if (t === Pt) return i.LINEAR; if (t === Ot) return i.LINEAR_MIPMAP_NEAREST; if (t === It) return i.LINEAR_MIPMAP_LINEAR; if (t === Nt) return i.UNSIGNED_BYTE; if (t === Vt) return i.UNSIGNED_SHORT_4_4_4_4; if (t === kt) return i.UNSIGNED_SHORT_5_5_5_1; if (t === jt) return i.UNSIGNED_SHORT_5_6_5; if (t === Dt) return i.BYTE; if (t === Ut) return i.SHORT; if (t === Bt) return i.UNSIGNED_SHORT; if (t === Ft) return i.INT; if (t === zt) return i.UNSIGNED_INT; if (t === Gt) return i.FLOAT; if (t === Ht) { if (r.isWebGL2) return i.HALF_FLOAT; if (null !== (e = n.get("OES_texture_half_float"))) return e.HALF_FLOAT_OES } if (t === Xt) return i.ALPHA; if (t === qt) return i.RGB; if (t === Yt) return i.RGBA; if (t === Jt) return i.LUMINANCE; if (t === Zt) return i.LUMINANCE_ALPHA; if (t === Kt) return i.DEPTH_COMPONENT; if (t === $t) return i.DEPTH_STENCIL; if (t === S) return i.FUNC_ADD; if (t === A) return i.FUNC_SUBTRACT; if (t === L) return i.FUNC_REVERSE_SUBTRACT; if (t === P) return i.ZERO; if (t === O) return i.ONE; if (t === I) return i.SRC_COLOR; if (t === N) return i.ONE_MINUS_SRC_COLOR; if (t === U) return i.SRC_ALPHA; if (t === B) return i.ONE_MINUS_SRC_ALPHA; if (t === F) return i.DST_ALPHA; if (t === z) return i.ONE_MINUS_DST_ALPHA; if (t === V) return i.DST_COLOR; if (t === k) return i.ONE_MINUS_DST_COLOR; if (t === j) return i.SRC_ALPHA_SATURATE; if ((t === te || t === ee || t === ie || t === ne) && null !== (e = n.get("WEBGL_compressed_texture_s3tc"))) { if (t === te) return e.COMPRESSED_RGB_S3TC_DXT1_EXT; if (t === ee) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (t === ie) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (t === ne) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT } if ((t === re || t === ae || t === oe || t === se) && null !== (e = n.get("WEBGL_compressed_texture_pvrtc"))) { if (t === re) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (t === ae) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (t === oe) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (t === se) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } if (t === ce && null !== (e = n.get("WEBGL_compressed_texture_etc1"))) return e.COMPRESSED_RGB_ETC1_WEBGL; if ((t === he || t === le || t === ue || t === pe || t === de || t === fe || t === me || t === ge || t === ve || t === ye || t === xe || t === be || t === _e || t === we) && null !== (e = n.get("WEBGL_compressed_texture_astc"))) return t; if (t === R || t === C) { if (r.isWebGL2) { if (t === R) return i.MIN; if (t === C) return i.MAX } if (null !== (e = n.get("EXT_blend_minmax"))) { if (t === R) return e.MIN_EXT; if (t === C) return e.MAX_EXT } } if (t === Wt) { if (r.isWebGL2) return i.UNSIGNED_INT_24_8; if (null !== (e = n.get("WEBGL_depth_texture"))) return e.UNSIGNED_INT_24_8_WEBGL } return 0 } } }

  function ro() { Zi.call(this), this.type = "Group" }

  function ao(t, e, i, n) { Qi.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }

  function oo(t) { ao.call(this), this.cameras = t || [] }

  function so(n) { var s = this,
      c = null,
      h = null,
      l = null,
      u = [],
      p = new Ve,
      d = new Ve; "undefined" != typeof window && "VRFrameData" in window && (h = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", t, !1)); var f = new Ve,
      m = new ke,
      g = new je,
      v = new ao;
    v.bounds = new li(0, 0, .5, 1), v.layers.enable(1); var y = new ao;
    y.bounds = new li(.5, 0, .5, 1), y.layers.enable(2); var r, a, x = new oo([v, y]);

    function o() { return null !== c && !0 === c.isPresenting }

    function t() { if (o()) { var t = c.getEyeParameters("left"),
          e = t.renderWidth,
          i = t.renderHeight;
        a = n.getPixelRatio(), r = n.getSize(), n.setDrawingBufferSize(2 * e, i, 1), w.start() } else s.enabled && (n.setDrawingBufferSize(r.width, r.height, a), w.stop()) } x.layers.enable(1), x.layers.enable(2); var b = [];

    function _(t) { for (var e = navigator.getGamepads && navigator.getGamepads(), i = 0, n = 0, r = e.length; i < r; i++) { var a = e[i]; if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) { if (n === t) return a;
          n++ } } } this.enabled = !1, this.userHeight = 1.6, this.getController = function(t) { var e = u[t]; return void 0 === e && ((e = new ro).matrixAutoUpdate = !1, e.visible = !1, u[t] = e), e }, this.getDevice = function() { return c }, this.setDevice = function(t) { void 0 !== t && (c = t), w.setContext(t) }, this.setPoseTarget = function(t) { void 0 !== t && (l = t) }, this.getCamera = function(t) { if (null === c) return t.position.set(0, s.userHeight, 0), t;
      c.depthNear = t.near, c.depthFar = t.far, c.getFrameData(h); var e = c.stageParameters;
      e ? p.fromArray(e.sittingToStandingTransform) : p.makeTranslation(0, s.userHeight, 0); var i = h.pose,
        n = null !== l ? l : t; if (n.matrix.copy(p), n.matrix.decompose(n.position, n.quaternion, n.scale), null !== i.orientation && (m.fromArray(i.orientation), n.quaternion.multiply(m)), null !== i.position && (m.setFromRotationMatrix(p), g.fromArray(i.position), g.applyQuaternion(m), n.position.add(g)), n.updateMatrixWorld(), !1 === c.isPresenting) return t;
      v.near = t.near, y.near = t.near, v.far = t.far, y.far = t.far, x.matrixWorld.copy(t.matrixWorld), x.matrixWorldInverse.copy(t.matrixWorldInverse), v.matrixWorldInverse.fromArray(h.leftViewMatrix), y.matrixWorldInverse.fromArray(h.rightViewMatrix), d.getInverse(p), v.matrixWorldInverse.multiply(d), y.matrixWorldInverse.multiply(d); var r = n.parent;
      null !== r && (f.getInverse(r.matrixWorld), v.matrixWorldInverse.multiply(f), y.matrixWorldInverse.multiply(f)), v.matrixWorld.getInverse(v.matrixWorldInverse), y.matrixWorld.getInverse(y.matrixWorldInverse), v.projectionMatrix.fromArray(h.leftProjectionMatrix), y.projectionMatrix.fromArray(h.rightProjectionMatrix), x.projectionMatrix.copy(v.projectionMatrix); var a = c.getLayers(); if (a.length) { var o = a[0];
        null !== o.leftBounds && 4 === o.leftBounds.length && v.bounds.fromArray(o.leftBounds), null !== o.rightBounds && 4 === o.rightBounds.length && y.bounds.fromArray(o.rightBounds) } return function() { for (var t = 0; t < u.length; t++) { var e = u[t],
            i = _(t); if (void 0 !== i && void 0 !== i.pose) { if (null === i.pose) return; var n = i.pose;!1 === n.hasPosition && e.position.set(.2, -.6, -.05), null !== n.position && e.position.fromArray(n.position), null !== n.orientation && e.quaternion.fromArray(n.orientation), e.matrix.compose(e.position, e.quaternion, e.scale), e.matrix.premultiply(p), e.matrix.decompose(e.position, e.quaternion, e.scale), e.matrixWorldNeedsUpdate = !0, e.visible = !0; var r = "Daydream Controller" === i.id ? 0 : 1;
            b[t] !== i.buttons[r].pressed && (b[t] = i.buttons[r].pressed, !0 === b[t] ? e.dispatchEvent({ type: "selectstart" }) : (e.dispatchEvent({ type: "selectend" }), e.dispatchEvent({ type: "select" }))) } else e.visible = !1 } }(), x }, this.getStandingMatrix = function() { return p }, this.isPresenting = o; var w = new Ai;
    this.setAnimationLoop = function(t) { w.setAnimationLoop(t) }, this.submitFrame = function() { o() && c.submitFrame() }, this.dispose = function() { "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", t) } }

  function co(i) { var n = i.context,
      e = null,
      p = null,
      d = null,
      f = null,
      m = [],
      g = [];

    function o() { return null !== p && null !== d } var t = new ao;
    t.layers.enable(1), t.viewport = new li; var r = new ao;
    r.layers.enable(2), r.viewport = new li; var v = new oo([t, r]);

    function a(t) { var e = m[g.indexOf(t.inputSource)];
      e && e.dispatchEvent({ type: t.type }) }

    function s() { i.setFramebuffer(null), h.stop() }

    function c(t, e) { null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld) } v.layers.enable(1), v.layers.enable(2), this.enabled = !1, this.getController = function(t) { var e = m[t]; return void 0 === e && ((e = new ro).matrixAutoUpdate = !1, e.visible = !1, m[t] = e), e }, this.getDevice = function() { return e }, this.setDevice = function(t) { void 0 !== t && (e = t), t instanceof XRDevice && n.setCompatibleXRDevice(t) }, this.setSession = function(t, e) { null !== (p = t) && (p.addEventListener("select", a), p.addEventListener("selectstart", a), p.addEventListener("selectend", a), p.addEventListener("end", s), p.baseLayer = new XRWebGLLayer(p, n), p.requestFrameOfReference(e.frameOfReferenceType).then(function(t) { d = t, i.setFramebuffer(p.baseLayer.framebuffer), h.setContext(p), h.start() }), g = p.getInputSources(), p.addEventListener("inputsourceschange", function() { g = p.getInputSources(), console.log(g) })) }, this.getCamera = function(t) { if (o()) { var e = t.parent,
          i = v.cameras;
        c(v, e); for (var n = 0; n < i.length; n++) c(i[n], e);
        t.matrixWorld.copy(v.matrixWorld); for (var r = t.children, a = (n = 0, r.length); n < a; n++) r[n].updateMatrixWorld(!0); return v } return t }, this.isPresenting = o; var y = null; var h = new Ai;
    h.setAnimationLoop(function(t, e) { if (null !== (f = e.getDevicePose(d)))
        for (var i = p.baseLayer, n = e.views, r = 0; r < n.length; r++) { var a = n[r],
            o = i.getViewport(a),
            s = f.getViewMatrix(a),
            c = v.cameras[r];
          c.matrix.fromArray(s).getInverse(c.matrix), c.projectionMatrix.fromArray(a.projectionMatrix), c.viewport.set(o.x, o.y, o.width, o.height), 0 === r && (v.matrix.copy(c.matrix), v.projectionMatrix.copy(c.projectionMatrix)) }
      for (r = 0; r < m.length; r++) { var h = m[r],
          l = g[r]; if (l) { var u = e.getInputPose(l, d); if (null !== u) { h.matrix.elements = u.pointerMatrix, h.matrix.decompose(h.position, h.rotation, h.scale), h.visible = !0; continue } } h.visible = !1 } y && y(t) }), this.setAnimationLoop = function(t) { y = t }, this.dispose = function() {}, this.getStandingMatrix = function() { return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4 }, this.submitFrame = function() {} }

  function ho(t) { console.log("THREE.WebGLRenderer", "95"); var n = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      e = void 0 !== t.context ? t.context : null,
      i = void 0 !== t.alpha && t.alpha,
      r = void 0 === t.depth || t.depth,
      a = void 0 === t.stencil || t.stencil,
      o = void 0 !== t.antialias && t.antialias,
      s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      h = void 0 !== t.powerPreference ? t.powerPreference : "default",
      d = null,
      H = null;
    this.domElement = n, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Mt, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4; var V, M, k, j, l, W, u, E, T, f, y, p, m, g, S, A, L, v, X = this,
      x = !1,
      b = null,
      _ = null,
      w = null,
      q = -1,
      R = { geometry: null, program: null, wireframe: !1 },
      Y = null,
      J = null,
      C = new li,
      P = new li,
      O = null,
      Z = 0,
      I = n.width,
      Q = n.height,
      K = 1,
      N = new li(0, 0, I, Q),
      D = new li(0, 0, I, Q),
      U = !1,
      B = new vi,
      $ = new yr,
      tt = !1,
      et = !1,
      F = new Ve,
      it = new je;

    function z() { return null === _ ? K : 1 } try { var G = { alpha: i, depth: r, stencil: a, antialias: o, premultipliedAlpha: s, preserveDrawingBuffer: c, powerPreference: h }; if (n.addEventListener("webglcontextlost", ot, !1), n.addEventListener("webglcontextrestored", st, !1), null === (V = e || n.getContext("webgl", G) || n.getContext("experimental-webgl", G))) throw null !== n.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      void 0 === V.getShaderPrecisionFormat && (V.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (t) { console.error("THREE.WebGLRenderer: " + t.message) }

    function nt() { M = new xr(V), (k = new vr(V, M, t)).isWebGL2 || (M.get("WEBGL_depth_texture"), M.get("OES_texture_float"), M.get("OES_texture_half_float"), M.get("OES_texture_half_float_linear"), M.get("OES_standard_derivatives"), M.get("OES_element_index_uint"), M.get("ANGLE_instanced_arrays")), M.get("OES_texture_float_linear"), v = new no(V, M, k), (j = new eo(V, M, v, k)).scissor(P.copy(D).multiplyScalar(K)), j.viewport(C.copy(N).multiplyScalar(K)), l = new wr(V), W = new Sa, u = new io(V, M, j, W, k, v, l), E = new Li(V), T = new br(V, E, l), f = new Tr(T, l), S = new Er(V), y = new Ta(X, M, k), p = new Ca, m = new Qa, g = new mr(X, j, f, s), A = new gr(V, M, l, k), L = new _r(V, M, l, k), l.programs = y.programs, X.context = V, X.capabilities = k, X.extensions = M, X.properties = W, X.renderLists = p, X.state = j, X.info = l } nt(); var rt = "xr" in navigator ? new co(X) : new so(X);
    this.vr = rt; var at = new to(X, f, k.maxTextureSize);

    function ot(t) { t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), x = !0 }

    function st() { console.log("THREE.WebGLRenderer: Context Restored."), x = !1, nt() }

    function ct(t) { var e, i = t.target;
      i.removeEventListener("dispose", ct), ht(e = i), W.remove(e) }

    function ht(t) { var e = W.get(t).program;
      (t.program = void 0) !== e && y.releaseProgram(e) } this.shadowMap = at, this.getContext = function() { return V }, this.getContextAttributes = function() { return V.getContextAttributes() }, this.forceContextLoss = function() { var t = M.get("WEBGL_lose_context");
      t && t.loseContext() }, this.forceContextRestore = function() { var t = M.get("WEBGL_lose_context");
      t && t.restoreContext() }, this.getPixelRatio = function() { return K }, this.setPixelRatio = function(t) { void 0 !== t && (K = t, this.setSize(I, Q, !1)) }, this.getSize = function() { return { width: I, height: Q } }, this.setSize = function(t, e, i) { rt.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (I = t, Q = e, n.width = t * K, n.height = e * K, !1 !== i && (n.style.width = t + "px", n.style.height = e + "px"), this.setViewport(0, 0, t, e)) }, this.getDrawingBufferSize = function() { return { width: I * K, height: Q * K } }, this.setDrawingBufferSize = function(t, e, i) { I = t, Q = e, K = i, n.width = t * i, n.height = e * i, this.setViewport(0, 0, t, e) }, this.getCurrentViewport = function() { return C }, this.setViewport = function(t, e, i, n) { N.set(t, Q - e - n, i, n), j.viewport(C.copy(N).multiplyScalar(K)) }, this.setScissor = function(t, e, i, n) { D.set(t, Q - e - n, i, n), j.scissor(P.copy(D).multiplyScalar(K)) }, this.setScissorTest = function(t) { j.setScissorTest(U = t) }, this.getClearColor = function() { return g.getClearColor() }, this.setClearColor = function() { g.setClearColor.apply(g, arguments) }, this.getClearAlpha = function() { return g.getClearAlpha() }, this.setClearAlpha = function() { g.setClearAlpha.apply(g, arguments) }, this.clear = function(t, e, i) { var n = 0;
      (void 0 === t || t) && (n |= V.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= V.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= V.STENCIL_BUFFER_BIT), V.clear(n) }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.clearTarget = function(t, e, i, n) { this.setRenderTarget(t), this.clear(e, i, n) }, this.dispose = function() { n.removeEventListener("webglcontextlost", ot, !1), n.removeEventListener("webglcontextrestored", st, !1), p.dispose(), m.dispose(), W.dispose(), f.dispose(), rt.dispose(), ft.stop() }, this.renderBufferImmediate = function(t, e) { j.initAttributes(); var i = W.get(t);
      t.hasPositions && !i.position && (i.position = V.createBuffer()), t.hasNormals && !i.normal && (i.normal = V.createBuffer()), t.hasUvs && !i.uv && (i.uv = V.createBuffer()), t.hasColors && !i.color && (i.color = V.createBuffer()); var n = e.getAttributes();
      t.hasPositions && (V.bindBuffer(V.ARRAY_BUFFER, i.position), V.bufferData(V.ARRAY_BUFFER, t.positionArray, V.DYNAMIC_DRAW), j.enableAttribute(n.position), V.vertexAttribPointer(n.position, 3, V.FLOAT, !1, 0, 0)), t.hasNormals && (V.bindBuffer(V.ARRAY_BUFFER, i.normal), V.bufferData(V.ARRAY_BUFFER, t.normalArray, V.DYNAMIC_DRAW), j.enableAttribute(n.normal), V.vertexAttribPointer(n.normal, 3, V.FLOAT, !1, 0, 0)), t.hasUvs && (V.bindBuffer(V.ARRAY_BUFFER, i.uv), V.bufferData(V.ARRAY_BUFFER, t.uvArray, V.DYNAMIC_DRAW), j.enableAttribute(n.uv), V.vertexAttribPointer(n.uv, 2, V.FLOAT, !1, 0, 0)), t.hasColors && (V.bindBuffer(V.ARRAY_BUFFER, i.color), V.bufferData(V.ARRAY_BUFFER, t.colorArray, V.DYNAMIC_DRAW), j.enableAttribute(n.color), V.vertexAttribPointer(n.color, 3, V.FLOAT, !1, 0, 0)), j.disableUnusedAttributes(), V.drawArrays(V.TRIANGLES, 0, t.count), t.count = 0 }, this.renderBufferDirect = function(t, e, i, n, r, a) { var o = r.isMesh && r.normalMatrix.determinant() < 0;
      j.setMaterial(n, o); var s = yt(t, e, n, r),
        c = !1;
      R.geometry === i.id && R.program === s.id && R.wireframe === (!0 === n.wireframe) || (R.geometry = i.id, R.program = s.id, R.wireframe = !0 === n.wireframe, c = !0), r.morphTargetInfluences && (S.update(r, i, n, s), c = !0); var h, l = i.index,
        u = i.attributes.position,
        p = 1;!0 === n.wireframe && (l = T.getWireframeAttribute(i), p = 2); var d = A;
      null !== l && (h = E.get(l), (d = L).setIndex(h)), c && (! function(t, e, i) { if (i && i.isInstancedBufferGeometry & !k.isWebGL2 && null === M.get("ANGLE_instanced_arrays")) return console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        j.initAttributes(); var n = i.attributes,
          r = e.getAttributes(),
          a = t.defaultAttributeValues; for (var o in r) { var s = r[o]; if (0 <= s) { var c = n[o]; if (void 0 !== c) { var h = c.normalized,
                l = c.itemSize,
                u = E.get(c); if (void 0 === u) continue; var p = u.buffer,
                d = u.type,
                f = u.bytesPerElement; if (c.isInterleavedBufferAttribute) { var m = c.data,
                  g = m.stride,
                  v = c.offset;
                m && m.isInstancedInterleavedBuffer ? (j.enableAttributeAndDivisor(s, m.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = m.meshPerAttribute * m.count)) : j.enableAttribute(s), V.bindBuffer(V.ARRAY_BUFFER, p), V.vertexAttribPointer(s, l, d, h, g * f, v * f) } else c.isInstancedBufferAttribute ? (j.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = c.meshPerAttribute * c.count)) : j.enableAttribute(s), V.bindBuffer(V.ARRAY_BUFFER, p), V.vertexAttribPointer(s, l, d, h, 0, 0) } else if (void 0 !== a) { var y = a[o]; if (void 0 !== y) switch (y.length) {
                case 2:
                  V.vertexAttrib2fv(s, y); break;
                case 3:
                  V.vertexAttrib3fv(s, y); break;
                case 4:
                  V.vertexAttrib4fv(s, y); break;
                default:
                  V.vertexAttrib1fv(s, y) } } } } j.disableUnusedAttributes() }(n, s, i), null !== l && V.bindBuffer(V.ELEMENT_ARRAY_BUFFER, h.buffer)); var f = 1 / 0;
      null !== l ? f = l.count : void 0 !== u && (f = u.count); var m = i.drawRange.start * p,
        g = i.drawRange.count * p,
        v = null !== a ? a.start * p : 0,
        y = null !== a ? a.count * p : 1 / 0,
        x = Math.max(m, v),
        b = Math.min(f, m + g, v + y) - 1,
        _ = Math.max(0, b - x + 1); if (0 !== _) { if (r.isMesh)
          if (!0 === n.wireframe) j.setLineWidth(n.wireframeLinewidth * z()), d.setMode(V.LINES);
          else switch (r.drawMode) {
            case Le:
              d.setMode(V.TRIANGLES); break;
            case 1:
              d.setMode(V.TRIANGLE_STRIP); break;
            case 2:
              d.setMode(V.TRIANGLE_FAN) }
        else if (r.isLine) { var w = n.linewidth;
          void 0 === w && (w = 1), j.setLineWidth(w * z()), r.isLineSegments ? d.setMode(V.LINES) : r.isLineLoop ? d.setMode(V.LINE_LOOP) : d.setMode(V.LINE_STRIP) } else r.isPoints ? d.setMode(V.POINTS) : r.isSprite && d.setMode(V.TRIANGLES);
        i && i.isInstancedBufferGeometry ? 0 < i.maxInstancedCount && d.renderInstances(i, x, _) : d.render(x, _) } }, this.compile = function(i, t) {
      (H = m.get(i, t)).init(), i.traverse(function(t) { t.isLight && (H.pushLight(t), t.castShadow && H.pushShadow(t)) }), H.setupLights(t), i.traverse(function(t) { if (t.material)
          if (Array.isArray(t.material))
            for (var e = 0; e < t.material.length; e++) vt(t.material[e], i.fog, t);
          else vt(t.material, i.fog, t) }) }; var lt = null; var ut, pt, dt, ft = new Ai;

    function mt(t, e, i, n) { for (var r = 0, a = t.length; r < a; r++) { var o = t[r],
          s = o.object,
          c = o.geometry,
          h = void 0 === n ? o.material : n,
          l = o.group; if (i.isArrayCamera)
          for (var u = (J = i).cameras, p = 0, d = u.length; p < d; p++) { var f = u[p]; if (s.layers.test(f.layers)) { if ("viewport" in f) j.viewport(C.copy(f.viewport));
              else { var m = f.bounds,
                  g = m.x * I,
                  v = m.y * Q,
                  y = m.z * I,
                  x = m.w * Q;
                j.viewport(C.set(g, v, y, x).multiplyScalar(K)) } gt(s, e, f, c, h, l) } }
        else J = null, gt(s, e, i, c, h, l) } }

    function gt(t, e, i, n, r, a) { if (t.onBeforeRender(X, e, i, n, r, a), H = m.get(e, J || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) { j.setMaterial(r); var o = yt(i, e.fog, r, t);
        R.geometry = null, R.program = null, R.wireframe = !1, s = o, t.render(function(t) { X.renderBufferImmediate(t, s) }) } else X.renderBufferDirect(i, e.fog, n, r, t, a); var s;
      t.onAfterRender(X, e, i, n, r, a), H = m.get(e, J || i) }

    function vt(t, e, i) { var n = W.get(t),
        r = H.state.lights,
        a = H.state.shadowsArray,
        o = n.lightsHash,
        s = r.state.hash,
        c = y.getParameters(t, r.state, a, e, $.numPlanes, $.numIntersection, i),
        h = y.getProgramCode(t, c),
        l = n.program,
        u = !0; if (void 0 === l) t.addEventListener("dispose", ct);
      else if (l.code !== h) ht(t);
      else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, u = !1;
      else { if (void 0 !== c.shaderID) return;
        u = !1 } if (u) { if (c.shaderID) { var p = Si[c.shaderID];
          n.shader = { name: t.type, uniforms: bi.clone(p.uniforms), vertexShader: p.vertexShader, fragmentShader: p.fragmentShader } } else n.shader = { name: t.type, uniforms: t.uniforms, vertexShader: t.vertexShader, fragmentShader: t.fragmentShader };
        t.onBeforeCompile(n.shader, X), h = y.getProgramCode(t, c), l = y.acquireProgram(t, n.shader, c, h), n.program = l, t.program = l } var d = l.getAttributes(); if (t.morphTargets)
        for (var f = t.numSupportedMorphTargets = 0; f < X.maxMorphTargets; f++) 0 <= d["morphTarget" + f] && t.numSupportedMorphTargets++; if (t.morphNormals)
        for (f = t.numSupportedMorphNormals = 0; f < X.maxMorphNormals; f++) 0 <= d["morphNormal" + f] && t.numSupportedMorphNormals++; var m = n.shader.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = $.numPlanes, n.numIntersection = $.numIntersection, m.clippingPlanes = $.uniform), n.fog = e, void 0 === o && (n.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, t.lights && (m.ambientLightColor.value = r.state.ambient, m.directionalLights.value = r.state.directional, m.spotLights.value = r.state.spot, m.rectAreaLights.value = r.state.rectArea, m.pointLights.value = r.state.point, m.hemisphereLights.value = r.state.hemi, m.directionalShadowMap.value = r.state.directionalShadowMap, m.directionalShadowMatrix.value = r.state.directionalShadowMatrix, m.spotShadowMap.value = r.state.spotShadowMap, m.spotShadowMatrix.value = r.state.spotShadowMatrix, m.pointShadowMap.value = r.state.pointShadowMap, m.pointShadowMatrix.value = r.state.pointShadowMatrix); var g = n.program.getUniforms(),
        v = fa.seqWithValue(g.seq, m);
      n.uniformsList = v }

    function yt(t, e, i, n) { Z = 0; var r = W.get(i),
        a = H.state.lights,
        o = r.lightsHash,
        s = a.state.hash; if (tt && (et || t !== Y)) { var c = t === Y && i.id === q;
        $.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, c) }!1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : (!i.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === $.numPlanes && r.numIntersection === $.numIntersection) || (i.needsUpdate = !0)), i.needsUpdate && (vt(i, e, n), i.needsUpdate = !1); var h, l, u, p, d, f, m, g, v, y, x, b, _, w, M, E, T, S, A, L, R = !1,
        C = !1,
        P = !1,
        O = r.program,
        I = O.getUniforms(),
        N = r.shader.uniforms; if (j.useProgram(O.program) && (P = C = R = !0), i.id !== q && (q = i.id, C = !0), R || t !== Y) { if (I.setValue(V, "projectionMatrix", t.projectionMatrix), k.logarithmicDepthBuffer && I.setValue(V, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), Y !== (J || t) && (Y = J || t, P = C = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) { var D = I.map.cameraPosition;
          void 0 !== D && D.setValue(V, it.setFromMatrixPosition(t.matrixWorld)) }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && I.setValue(V, "viewMatrix", t.matrixWorldInverse) } if (i.skinning) { I.setOptional(V, n, "bindMatrix"), I.setOptional(V, n, "bindMatrixInverse"); var U = n.skeleton; if (U) { var B = U.bones; if (k.floatVertexTextures) { if (void 0 === U.boneTexture) { var F = Math.sqrt(4 * B.length);
              F = Ge.ceilPowerOfTwo(F), F = Math.max(F, 4); var z = new Float32Array(F * F * 4);
              z.set(U.boneMatrices); var G = new di(z, F, F, Yt, Gt);
              G.needsUpdate = !0, U.boneMatrices = z, U.boneTexture = G, U.boneTextureSize = F } I.setValue(V, "boneTexture", U.boneTexture), I.setValue(V, "boneTextureSize", U.boneTextureSize) } else I.setOptional(V, U, "boneMatrices") } } return C && (I.setValue(V, "toneMappingExposure", X.toneMappingExposure), I.setValue(V, "toneMappingWhitePoint", X.toneMappingWhitePoint), i.lights && (L = P, (A = N).ambientLightColor.needsUpdate = L, A.directionalLights.needsUpdate = L, A.pointLights.needsUpdate = L, A.spotLights.needsUpdate = L, A.rectAreaLights.needsUpdate = L, A.hemisphereLights.needsUpdate = L), e && i.fog && (S = e, (T = N).fogColor.value = S.color, S.isFog ? (T.fogNear.value = S.near, T.fogFar.value = S.far) : S.isFogExp2 && (T.fogDensity.value = S.density)), i.isMeshBasicMaterial ? xt(N, i) : i.isMeshLambertMaterial ? (xt(N, i), M = N, (E = i).emissiveMap && (M.emissiveMap.value = E.emissiveMap)) : i.isMeshPhongMaterial ? (xt(N, i), i.isMeshToonMaterial ? (bt(_ = N, w = i), w.gradientMap && (_.gradientMap.value = w.gradientMap)) : bt(N, i)) : i.isMeshStandardMaterial ? (xt(N, i), i.isMeshPhysicalMaterial ? (_t(x = N, b = i), x.reflectivity.value = b.reflectivity, x.clearCoat.value = b.clearCoat, x.clearCoatRoughness.value = b.clearCoatRoughness) : _t(N, i)) : i.isMeshDepthMaterial ? (xt(N, i), v = N, (y = i).displacementMap && (v.displacementMap.value = y.displacementMap, v.displacementScale.value = y.displacementScale, v.displacementBias.value = y.displacementBias)) : i.isMeshDistanceMaterial ? (xt(N, i), function(t, e) { e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance }(N, i)) : i.isMeshNormalMaterial ? (xt(N, i), function(t, e) { e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === wt && (t.bumpScale.value *= -1));
        e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === wt && t.normalScale.value.negate());
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }(N, i)) : i.isLineBasicMaterial ? (g = i, (m = N).diffuse.value = g.color, m.opacity.value = g.opacity, i.isLineDashedMaterial && (f = i, (d = N).dashSize.value = f.dashSize, d.totalSize.value = f.dashSize + f.gapSize, d.scale.value = f.scale)) : i.isPointsMaterial ? (p = i, (u = N).diffuse.value = p.color, u.opacity.value = p.opacity, u.size.value = p.size * K, u.scale.value = .5 * Q, u.map.value = p.map, null !== p.map && (!0 === p.map.matrixAutoUpdate && p.map.updateMatrix(), u.uvTransform.value.copy(p.map.matrix))) : i.isSpriteMaterial ? (l = i, (h = N).diffuse.value = l.color, h.opacity.value = l.opacity, h.rotation.value = l.rotation, h.map.value = l.map, null !== l.map && (!0 === l.map.matrixAutoUpdate && l.map.updateMatrix(), h.uvTransform.value.copy(l.map.matrix))) : i.isShadowMaterial && (N.color.value = i.color, N.opacity.value = i.opacity), void 0 !== N.ltc_1 && (N.ltc_1.value = Ti.LTC_1), void 0 !== N.ltc_2 && (N.ltc_2.value = Ti.LTC_2), fa.upload(V, r.uniformsList, N, X)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (fa.upload(V, r.uniformsList, N, X), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && I.setValue(V, "center", n.center), I.setValue(V, "modelViewMatrix", n.modelViewMatrix), I.setValue(V, "normalMatrix", n.normalMatrix), I.setValue(V, "modelMatrix", n.matrixWorld), O }

    function xt(t, e) { var i;
      t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = W.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix)) }

    function bt(t, e) { t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === wt && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === wt && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }

    function _t(t, e) { t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === wt && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === wt && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity) } ft.setAnimationLoop(function(t) { rt.isPresenting() || lt && lt(t) }), "undefined" != typeof window && ft.setContext(window), this.setAnimationLoop = function(t) { lt = t, rt.setAnimationLoop(t), ft.start() }, this.render = function(t, e, i, n) { if (e && e.isCamera) { if (!x) { R.geometry = null, R.program = null, R.wireframe = !1, q = -1, !(Y = null) === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), rt.enabled && (e = rt.getCamera(e)), (H = m.get(t, e)).init(), t.onBeforeRender(X, t, e, i), F.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), B.setFromMatrix(F), et = this.localClippingEnabled, tt = $.init(this.clippingPlanes, et, e), (d = p.get(t, e)).init(),
            function t(e, i, n) { if (!1 === e.visible) return; var r = e.layers.test(i.layers); if (r)
                if (e.isLight) H.pushLight(e), e.castShadow && H.pushShadow(e);
                else if (e.isSprite) { if (!e.frustumCulled || B.intersectsSprite(e)) { n && it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F); var a = f.update(e),
                    o = e.material;
                  d.push(e, a, o, it.z, null) } } else if (e.isImmediateRenderObject) n && it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F), d.push(e, null, e.material, it.z, null);
              else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || B.intersectsObject(e))) { n && it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F); var a = f.update(e),
                  o = e.material; if (Array.isArray(o))
                  for (var s = a.groups, c = 0, h = s.length; c < h; c++) { var l = s[c],
                      u = o[l.materialIndex];
                    u && u.visible && d.push(e, a, u, it.z, l) }
                else o.visible && d.push(e, a, o, it.z, null) } var p = e.children; for (var c = 0, h = p.length; c < h; c++) t(p[c], i, n) }(t, e, X.sortObjects), !0 === X.sortObjects && d.sort(), tt && $.beginShadows(); var r = H.state.shadowsArray;
          at.render(r, t, e), H.setupLights(e), tt && $.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), g.render(d, t, e, n); var a = d.opaque,
            o = d.transparent; if (t.overrideMaterial) { var s = t.overrideMaterial;
            a.length && mt(a, t, e, s), o.length && mt(o, t, e, s) } else a.length && mt(a, t, e), o.length && mt(o, t, e);
          i && u.updateRenderTargetMipmap(i), j.buffers.depth.setTest(!0), j.buffers.depth.setMask(!0), j.buffers.color.setMask(!0), j.setPolygonOffset(!1), t.onAfterRender(X, t, e), rt.enabled && rt.submitFrame(), H = d = null } } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.") }, this.allocTextureUnit = function() { var t = Z; return t >= k.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + k.maxTextures), Z += 1, t }, this.setTexture2D = (ut = !1, function(t, e) { t && t.isWebGLRenderTarget && (ut || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), ut = !0), t = t.texture), u.setTexture2D(t, e) }), this.setTexture = (pt = !1, function(t, e) { pt || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), pt = !0), u.setTexture2D(t, e) }), this.setTextureCube = (dt = !1, function(t, e) { t && t.isWebGLRenderTargetCube && (dt || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), dt = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? u.setTextureCube(t, e) : u.setTextureCubeDynamic(t, e) }), this.setFramebuffer = function(t) { b = t }, this.getRenderTarget = function() { return _ }, this.setRenderTarget = function(t) {
      (_ = t) && void 0 === W.get(t).__webglFramebuffer && u.setupRenderTarget(t); var e = b,
        i = !1; if (t) { var n = W.get(t).__webglFramebuffer;
        t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, C.copy(t.viewport), P.copy(t.scissor), O = t.scissorTest } else C.copy(N).multiplyScalar(K), P.copy(D).multiplyScalar(K), O = U; if (w !== e && (V.bindFramebuffer(V.FRAMEBUFFER, e), w = e), j.viewport(C), j.scissor(P), j.setScissorTest(O), i) { var r = W.get(t.texture);
        V.framebufferTexture2D(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel) } }, this.readRenderTargetPixels = function(t, e, i, n, r, a) { if (t && t.isWebGLRenderTarget) { var o = W.get(t).__webglFramebuffer; if (o) { var s = !1;
          o !== w && (V.bindFramebuffer(V.FRAMEBUFFER, o), s = !0); try { var c = t.texture,
              h = c.format,
              l = c.type; if (h !== Yt && v.convert(h) !== V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); if (!(l === Nt || v.convert(l) === V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE) || l === Gt && (k.isWebGL2 || M.get("OES_texture_float") || M.get("WEBGL_color_buffer_float")) || l === Ht && (k.isWebGL2 ? M.get("EXT_color_buffer_float") : M.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            V.checkFramebufferStatus(V.FRAMEBUFFER) === V.FRAMEBUFFER_COMPLETE ? 0 <= e && e <= t.width - n && 0 <= i && i <= t.height - r && V.readPixels(e, i, n, r, v.convert(h), v.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") } finally { s && V.bindFramebuffer(V.FRAMEBUFFER, w) } } } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.") }, this.copyFramebufferToTexture = function(t, e, i) { var n = e.image.width,
        r = e.image.height,
        a = v.convert(e.format);
      this.setTexture2D(e, 0), V.copyTexImage2D(V.TEXTURE_2D, i || 0, a, t.x, t.y, n, r, 0) }, this.copyTextureToTexture = function(t, e, i, n) { var r = e.image.width,
        a = e.image.height,
        o = v.convert(i.format),
        s = v.convert(i.type);
      this.setTexture2D(i, 0), e.isDataTexture ? V.texSubImage2D(V.TEXTURE_2D, n || 0, t.x, t.y, r, a, o, s, e.image.data) : V.texSubImage2D(V.TEXTURE_2D, n || 0, t.x, t.y, o, s, e.image) } }

  function lo(t, e) { this.name = "", this.color = new wi(t), this.density = void 0 !== e ? e : 25e-5 }

  function uo(t, e, i) { this.name = "", this.color = new wi(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3 }

  function po() { Zi.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0 }

  function fo(t, e) { this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }

  function mo(t, e, i, n) { this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n }

  function go(t) { hr.call(this), this.type = "SpriteMaterial", this.color = new wi(16777215), this.map = null, this.rotation = 0, this.lights = !1, this.transparent = !0, this.setValues(t) }

  function vo(t) { if (Zi.call(this), this.type = "Sprite", void 0 === Oa) { Oa = new In; var e = new fo(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
      Oa.setIndex([0, 1, 2, 0, 2, 3]), Oa.addAttribute("position", new mo(e, 3, 0, !1)), Oa.addAttribute("uv", new mo(e, 2, 3, !1)) } this.geometry = Oa, this.material = void 0 !== t ? t : new go, this.center = new He(.5, .5) }

  function yo() { Zi.call(this), this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }) }

  function xo(t, e) { if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
    else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
    else { console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = []; for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new Ve) } }

  function bo() { Zi.call(this), this.type = "Bone" }

  function _o(t, e) { fr.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ve, this.bindMatrixInverse = new Ve; var i = new xo(this.initBones());
    this.bind(i, this.matrixWorld), this.normalizeSkinWeights() }

  function wo(t) { hr.call(this), this.type = "LineBasicMaterial", this.color = new wi(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t) }

  function Mo(t, e, i) { 1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Zi.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new In, this.material = void 0 !== e ? e : new wo({ color: 16777215 * Math.random() }) }

  function Eo(t, e) { Mo.call(this, t, e), this.type = "LineSegments" }

  function To(t, e) { Mo.call(this, t, e), this.type = "LineLoop" }

  function So(t) { hr.call(this), this.type = "PointsMaterial", this.color = new wi(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t) }

  function Ao(t, e) { Zi.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new In, this.material = void 0 !== e ? e : new So({ color: 16777215 * Math.random() }) }

  function Lo(t, e, i, n, r, a, o, s, c) { hi.call(this, t, e, i, n, r, a, o, s, c), this.generateMipmaps = !1 }

  function Ro(t, e, i, n, r, a, o, s, c, h, l, u) { hi.call(this, null, a, o, s, c, h, n, r, l, u), this.image = { width: e, height: i }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1 }

  function Co(t, e, i, n, r, a, o, s, c) { hi.call(this, t, e, i, n, r, a, o, s, c), this.needsUpdate = !0 }

  function Po(t, e, i, n, r, a, o, s, c, h) { if ((h = void 0 !== h ? h : Kt) !== Kt && h !== $t) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === i && h === Kt && (i = Bt), void 0 === i && h === $t && (i = Wt), hi.call(this, null, n, r, a, o, s, h, i, c), this.image = { width: t, height: e }, this.magFilter = void 0 !== o ? o : Lt, this.minFilter = void 0 !== s ? s : Lt, this.flipY = !1, this.generateMipmaps = !1 }

  function Oo(t) { In.call(this), this.type = "WireframeGeometry"; var e, i, n, r, a, o, s, c, h, l, u = [],
      p = [0, 0],
      d = {},
      f = ["a", "b", "c"]; if (t && t.isGeometry) { var m = t.faces; for (e = 0, n = m.length; e < n; e++) { var g = m[e]; for (i = 0; i < 3; i++) s = g[f[i]], c = g[f[(i + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = { index1: p[0], index2: p[1] }) } for (h in d) o = d[h], l = t.vertices[o.index1], u.push(l.x, l.y, l.z), l = t.vertices[o.index2], u.push(l.x, l.y, l.z) } else if (t && t.isBufferGeometry) { var v, y, x, b, _, w; if (l = new je, null !== t.index) { for (v = t.attributes.position, y = t.index, 0 === (x = t.groups).length && (x = [{ start: 0, count: y.count, materialIndex: 0 }]), r = 0, a = x.length; r < a; ++r)
          for (n = (e = (b = x[r]).start) + b.count; e < n; e += 3)
            for (i = 0; i < 3; i++) s = y.getX(e + i), c = y.getX(e + (i + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = { index1: p[0], index2: p[1] }); for (h in d) o = d[h], l.fromBufferAttribute(v, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(v, o.index2), u.push(l.x, l.y, l.z) } else
        for (e = 0, n = (v = t.attributes.position).count / 3; e < n; e++)
          for (i = 0; i < 3; i++) _ = 3 * e + i, l.fromBufferAttribute(v, _), u.push(l.x, l.y, l.z), w = 3 * e + (i + 1) % 3, l.fromBufferAttribute(v, w), u.push(l.x, l.y, l.z) } this.addAttribute("position", new yn(u, 3)) }

  function Io(t, e, i) { hn.call(this), this.type = "ParametricGeometry", this.parameters = { func: t, slices: e, stacks: i }, this.fromBufferGeometry(new No(t, e, i)), this.mergeVertices() }

  function No(t, e, i) { In.call(this), this.type = "ParametricBufferGeometry", this.parameters = { func: t, slices: e, stacks: i }; var n, r, a = [],
      o = [],
      s = [],
      c = [],
      h = new je,
      l = new je,
      u = new je,
      p = new je,
      d = new je;
    t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."); var f = e + 1; for (n = 0; n <= i; n++) { var m = n / i; for (r = 0; r <= e; r++) { var g = r / e;
        t(g, m, l), o.push(l.x, l.y, l.z), 0 <= g - 1e-5 ? (t(g - 1e-5, m, u), p.subVectors(l, u)) : (t(g + 1e-5, m, u), p.subVectors(u, l)), 0 <= m - 1e-5 ? (t(g, m - 1e-5, u), d.subVectors(l, u)) : (t(g, m + 1e-5, u), d.subVectors(u, l)), h.crossVectors(p, d).normalize(), s.push(h.x, h.y, h.z), c.push(g, m) } } for (n = 0; n < i; n++)
      for (r = 0; r < e; r++) { var v = n * f + r,
          y = n * f + r + 1,
          x = (n + 1) * f + r + 1,
          b = (n + 1) * f + r;
        a.push(v, y, b), a.push(y, x, b) } this.setIndex(a), this.addAttribute("position", new yn(o, 3)), this.addAttribute("normal", new yn(s, 3)), this.addAttribute("uv", new yn(c, 2)) }

  function Do(t, e, i, n) { hn.call(this), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: i, detail: n }, this.fromBufferGeometry(new Uo(t, e, i, n)), this.mergeVertices() }

  function Uo(n, a, t, e) { In.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = { vertices: n, indices: a, radius: t, detail: e }, t = t || 1; var l = [],
      u = [];

    function o(t, e, i, n) { var r, a, o = Math.pow(2, n),
        s = []; for (r = 0; r <= o; r++) { s[r] = []; var c = t.clone().lerp(i, r / o),
          h = e.clone().lerp(i, r / o),
          l = o - r; for (a = 0; a <= l; a++) s[r][a] = 0 === a && r === o ? c : c.clone().lerp(h, a / l) } for (r = 0; r < o; r++)
        for (a = 0; a < 2 * (o - r) - 1; a++) { var u = Math.floor(a / 2);
          a % 2 == 0 ? (p(s[r][u + 1]), p(s[r + 1][u]), p(s[r][u])) : (p(s[r][u + 1]), p(s[r + 1][u + 1]), p(s[r + 1][u])) } }

    function p(t) { l.push(t.x, t.y, t.z) }

    function s(t, e) { var i = 3 * t;
      e.x = n[i + 0], e.y = n[i + 1], e.z = n[i + 2] }

    function d(t, e, i, n) { n < 0 && 1 === t.x && (u[e] = t.x - 1), 0 === i.x && 0 === i.z && (u[e] = n / 2 / Math.PI + .5) }

    function f(t) { return Math.atan2(t.z, -t.x) }! function(t) { for (var e = new je, i = new je, n = new je, r = 0; r < a.length; r += 3) s(a[r + 0], e), s(a[r + 1], i), s(a[r + 2], n), o(e, i, n, t) }(e = e || 0),
    function(t) { for (var e = new je, i = 0; i < l.length; i += 3) e.x = l[i + 0], e.y = l[i + 1], e.z = l[i + 2], e.normalize().multiplyScalar(t), l[i + 0] = e.x, l[i + 1] = e.y, l[i + 2] = e.z }(t),
    function() { for (var t = new je, e = 0; e < l.length; e += 3) { t.x = l[e + 0], t.y = l[e + 1], t.z = l[e + 2]; var i = f(t) / 2 / Math.PI + .5,
          n = (r = t, Math.atan2(-r.y, Math.sqrt(r.x * r.x + r.z * r.z)) / Math.PI + .5);
        u.push(i, 1 - n) } var r;
      (function() { for (var t = new je, e = new je, i = new je, n = new je, r = new He, a = new He, o = new He, s = 0, c = 0; s < l.length; s += 9, c += 6) { t.set(l[s + 0], l[s + 1], l[s + 2]), e.set(l[s + 3], l[s + 4], l[s + 5]), i.set(l[s + 6], l[s + 7], l[s + 8]), r.set(u[c + 0], u[c + 1]), a.set(u[c + 2], u[c + 3]), o.set(u[c + 4], u[c + 5]), n.copy(t).add(e).add(i).divideScalar(3); var h = f(n);
          d(r, c + 0, t, h), d(a, c + 2, e, h), d(o, c + 4, i, h) } })(),
      function() { for (var t = 0; t < u.length; t += 6) { var e = u[t + 0],
            i = u[t + 2],
            n = u[t + 4],
            r = Math.max(e, i, n),
            a = Math.min(e, i, n);
          .9 < r && a < .1 && (e < .2 && (u[t + 0] += 1), i < .2 && (u[t + 2] += 1), n < .2 && (u[t + 4] += 1)) } }() }(), this.addAttribute("position", new yn(l, 3)), this.addAttribute("normal", new yn(l.slice(), 3)), this.addAttribute("uv", new yn(u, 2)), 0 === e ? this.computeVertexNormals() : this.normalizeNormals() }

  function Bo(t, e) { hn.call(this), this.type = "TetrahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new Fo(t, e)), this.mergeVertices() }

  function Fo(t, e) { Uo.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

  function zo(t, e) { hn.call(this), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new Go(t, e)), this.mergeVertices() }

  function Go(t, e) { Uo.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

  function Ho(t, e) { hn.call(this), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new Vo(t, e)), this.mergeVertices() }

  function Vo(t, e) { var i = (1 + Math.sqrt(5)) / 2;
    Uo.call(this, [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

  function ko(t, e) { hn.call(this), this.type = "DodecahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new jo(t, e)), this.mergeVertices() }

  function jo(t, e) { var i = (1 + Math.sqrt(5)) / 2,
      n = 1 / i;
    Uo.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

  function Wo(t, e, i, n, r, a) { hn.call(this), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: i, radialSegments: n, closed: r }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed."); var o = new Xo(t, e, i, n, r);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices() }

  function Xo(o, s, c, h, t) { In.call(this), this.type = "TubeBufferGeometry", this.parameters = { path: o, tubularSegments: s, radius: c, radialSegments: h, closed: t }, s = s || 64, c = c || 1, h = h || 8, t = t || !1; var l = o.computeFrenetFrames(s, t);
    this.tangents = l.tangents, this.normals = l.normals, this.binormals = l.binormals; var r, u, p = new je,
      d = new je,
      e = new He,
      f = new je,
      m = [],
      g = [],
      i = [],
      a = [];

    function n(t) { f = o.getPointAt(t / s, f); var e = l.normals[t],
        i = l.binormals[t]; for (u = 0; u <= h; u++) { var n = u / h * Math.PI * 2,
          r = Math.sin(n),
          a = -Math.cos(n);
        d.x = a * e.x + r * i.x, d.y = a * e.y + r * i.y, d.z = a * e.z + r * i.z, d.normalize(), g.push(d.x, d.y, d.z), p.x = f.x + c * d.x, p.y = f.y + c * d.y, p.z = f.z + c * d.z, m.push(p.x, p.y, p.z) } }! function() { for (r = 0; r < s; r++) n(r);
      n(!1 === t ? s : 0),
        function() { for (r = 0; r <= s; r++)
            for (u = 0; u <= h; u++) e.x = r / s, e.y = u / h, i.push(e.x, e.y) }(),
        function() { for (u = 1; u <= s; u++)
            for (r = 1; r <= h; r++) { var t = (h + 1) * (u - 1) + (r - 1),
                e = (h + 1) * u + (r - 1),
                i = (h + 1) * u + r,
                n = (h + 1) * (u - 1) + r;
              a.push(t, e, n), a.push(e, i, n) } }() }(), this.setIndex(a), this.addAttribute("position", new yn(m, 3)), this.addAttribute("normal", new yn(g, 3)), this.addAttribute("uv", new yn(i, 2)) }

  function qo(t, e, i, n, r, a, o) { hn.call(this), this.type = "TorusKnotGeometry", this.parameters = { radius: t, tube: e, tubularSegments: i, radialSegments: n, p: r, q: a }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Yo(t, e, i, n, r, a)), this.mergeVertices() }

  function Yo(t, e, i, n, r, a) { In.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = { radius: t, tube: e, tubularSegments: i, radialSegments: n, p: r, q: a }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3; var o, s, c = [],
      h = [],
      l = [],
      u = [],
      p = new je,
      d = new je,
      f = new je,
      m = new je,
      g = new je,
      v = new je,
      y = new je; for (o = 0; o <= i; ++o) { var x = o / i * r * Math.PI * 2; for (A(x, r, a, t, f), A(x + .01, r, a, t, m), v.subVectors(m, f), y.addVectors(m, f), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= n; ++s) { var b = s / n * Math.PI * 2,
          _ = -e * Math.cos(b),
          w = e * Math.sin(b);
        p.x = f.x + (_ * y.x + w * g.x), p.y = f.y + (_ * y.y + w * g.y), p.z = f.z + (_ * y.z + w * g.z), h.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), l.push(d.x, d.y, d.z), u.push(o / i), u.push(s / n) } } for (s = 1; s <= i; s++)
      for (o = 1; o <= n; o++) { var M = (n + 1) * (s - 1) + (o - 1),
          E = (n + 1) * s + (o - 1),
          T = (n + 1) * s + o,
          S = (n + 1) * (s - 1) + o;
        c.push(M, E, S), c.push(E, T, S) }

    function A(t, e, i, n, r) { var a = Math.cos(t),
        o = Math.sin(t),
        s = i / e * t,
        c = Math.cos(s);
      r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * o * .5, r.z = n * Math.sin(s) * .5 } this.setIndex(c), this.addAttribute("position", new yn(h, 3)), this.addAttribute("normal", new yn(l, 3)), this.addAttribute("uv", new yn(u, 2)) }

  function Jo(t, e, i, n, r) { hn.call(this), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: i, tubularSegments: n, arc: r }, this.fromBufferGeometry(new Zo(t, e, i, n, r)), this.mergeVertices() }

  function Zo(t, e, i, n, r) { In.call(this), this.type = "TorusBufferGeometry", this.parameters = { radius: t, tube: e, radialSegments: i, tubularSegments: n, arc: r }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI; var a, o, s = [],
      c = [],
      h = [],
      l = [],
      u = new je,
      p = new je,
      d = new je; for (a = 0; a <= i; a++)
      for (o = 0; o <= n; o++) { var f = o / n * r,
          m = a / i * Math.PI * 2;
        p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), c.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), h.push(d.x, d.y, d.z), l.push(o / n), l.push(a / i) }
    for (a = 1; a <= i; a++)
      for (o = 1; o <= n; o++) { var g = (n + 1) * a + o - 1,
          v = (n + 1) * (a - 1) + o - 1,
          y = (n + 1) * (a - 1) + o,
          x = (n + 1) * a + o;
        s.push(g, v, x), s.push(v, y, x) } this.setIndex(s), this.addAttribute("position", new yn(c, 3)), this.addAttribute("normal", new yn(h, 3)), this.addAttribute("uv", new yn(l, 2)) }((Ka.prototype = Object.create(hr.prototype)).constructor = Ka).prototype.isMeshDepthMaterial = !0, Ka.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this }, (($a.prototype = Object.create(hr.prototype)).constructor = $a).prototype.isMeshDistanceMaterial = !0, $a.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this }, ro.prototype = Object.assign(Object.create(Zi.prototype), { constructor: ro, isGroup: !0 }), ao.prototype = Object.assign(Object.create(Qi.prototype), { constructor: ao, isPerspectiveCamera: !0, copy: function(t, e) { return Qi.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this }, setFocalLength: function(t) { var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * Ge.RAD2DEG * Math.atan(e), this.updateProjectionMatrix() }, getFocalLength: function() { var t = Math.tan(.5 * Ge.DEG2RAD * this.fov); return .5 * this.getFilmHeight() / t }, getEffectiveFOV: function() { return 2 * Ge.RAD2DEG * Math.atan(Math.tan(.5 * Ge.DEG2RAD * this.fov) / this.zoom) }, getFilmWidth: function() { return this.filmGauge * Math.min(this.aspect, 1) }, getFilmHeight: function() { return this.filmGauge / Math.max(this.aspect, 1) }, setViewOffset: function(t, e, i, n, r, a) { this.aspect = t / e, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() }, clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }, updateProjectionMatrix: function() { var t = this.near,
        e = t * Math.tan(.5 * Ge.DEG2RAD * this.fov) / this.zoom,
        i = 2 * e,
        n = this.aspect * i,
        r = -.5 * n,
        a = this.view; if (null !== this.view && this.view.enabled) { var o = a.fullWidth,
          s = a.fullHeight;
        r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s } var c = this.filmOffset;
      0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far) }, toJSON: function(t) { var e = Zi.prototype.toJSON.call(this, t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e } }), oo.prototype = Object.assign(Object.create(ao.prototype), { constructor: oo, isArrayCamera: !0 }), lo.prototype.isFogExp2 = !0, lo.prototype.clone = function() { return new lo(this.color, this.density) }, lo.prototype.toJSON = function() { return { type: "FogExp2", color: this.color.getHex(), density: this.density } }, uo.prototype.isFog = !0, uo.prototype.clone = function() { return new uo(this.color, this.near, this.far) }, uo.prototype.toJSON = function() { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far } }, po.prototype = Object.assign(Object.create(Zi.prototype), { constructor: po, copy: function(t, e) { return Zi.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this }, toJSON: function(t) { var e = Zi.prototype.toJSON.call(this, t); return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e } }), Object.defineProperty(fo.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(fo.prototype, { isInterleavedBuffer: !0, onUploadCallback: function() {}, setArray: function(t) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this }, setDynamic: function(t) { return this.dynamic = t, this }, copy: function(t) { return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this }, copyAt: function(t, e, i) { t *= this.stride, i *= e.stride; for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n]; return this }, set: function(t, e) { return void 0 === e && (e = 0), this.array.set(t, e), this }, clone: function() { return (new this.constructor).copy(this) }, onUpload: function(t) { return this.onUploadCallback = t, this } }), Object.defineProperties(mo.prototype, { count: { get: function() { return this.data.count } }, array: { get: function() { return this.data.array } } }), Object.assign(mo.prototype, { isInterleavedBufferAttribute: !0, setX: function(t, e) { return this.data.array[t * this.data.stride + this.offset] = e, this }, setY: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 1] = e, this }, setZ: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 2] = e, this }, setW: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 3] = e, this }, getX: function(t) { return this.data.array[t * this.data.stride + this.offset] }, getY: function(t) { return this.data.array[t * this.data.stride + this.offset + 1] }, getZ: function(t) { return this.data.array[t * this.data.stride + this.offset + 2] }, getW: function(t) { return this.data.array[t * this.data.stride + this.offset + 3] }, setXY: function(t, e, i) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this }, setXYZ: function(t, e, i, n) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this }, setXYZW: function(t, e, i, n, r) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this } }), ((go.prototype = Object.create(hr.prototype)).constructor = go).prototype.isSpriteMaterial = !0, go.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this }, vo.prototype = Object.assign(Object.create(Zi.prototype), { constructor: vo, isSprite: !0, raycast: function() { var c = new je,
        h = new je,
        l = new je,
        o = new He,
        s = new He,
        u = new Ve,
        p = new je,
        d = new je,
        f = new je;

      function m(t, e, i, n, r, a) { o.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (s.x = a * o.x - r * o.y, s.y = r * o.x + a * o.y) : s.copy(o), t.copy(e), t.x += s.x, t.y += s.y, t.applyMatrix4(u) } return function(t, e) { h.setFromMatrixScale(this.matrixWorld), u.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), l.setFromMatrixPosition(this.modelViewMatrix); var i, n, r = this.material.rotation;
        0 !== r && (n = Math.cos(r), i = Math.sin(r)); var a = this.center;
        m(p.set(-.5, -.5, 0), l, a, h, i, n), m(d.set(.5, -.5, 0), l, a, h, i, n), m(f.set(.5, .5, 0), l, a, h, i, n); var o = t.ray.intersectTriangle(p, d, f, !1, c); if (null !== o || (m(d.set(-.5, .5, 0), l, a, h, i, n), null !== (o = t.ray.intersectTriangle(p, f, d, !1, c)))) { var s = t.ray.origin.distanceTo(c);
          s < t.near || s > t.far || e.push({ distance: s, point: c.clone(), face: null, object: this }) } } }(), clone: function() { return new this.constructor(this.material).copy(this) }, copy: function(t) { return Zi.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this } }), yo.prototype = Object.assign(Object.create(Zi.prototype), { constructor: yo, copy: function(t) { Zi.prototype.copy.call(this, t, !1); for (var e = t.levels, i = 0, n = e.length; i < n; i++) { var r = e[i];
        this.addLevel(r.object.clone(), r.distance) } return this }, addLevel: function(t, e) { void 0 === e && (e = 0), e = Math.abs(e); for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
      i.splice(n, 0, { distance: e, object: t }), this.add(t) }, getObjectForDistance: function(t) { for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++); return e[i - 1].object }, raycast: (Da = new je, function(t, e) { Da.setFromMatrixPosition(this.matrixWorld); var i = t.ray.origin.distanceTo(Da);
      this.getObjectForDistance(i).raycast(t, e) }), update: (Ia = new je, Na = new je, function(t) { var e = this.levels; if (1 < e.length) { Ia.setFromMatrixPosition(t.matrixWorld), Na.setFromMatrixPosition(this.matrixWorld); var i = Ia.distanceTo(Na);
        e[0].object.visible = !0; for (var n = 1, r = e.length; n < r && i >= e[n].distance; n++) e[n - 1].object.visible = !1, e[n].object.visible = !0; for (; n < r; n++) e[n].object.visible = !1 } }), toJSON: function(t) { var e = Zi.prototype.toJSON.call(this, t);
      e.object.levels = []; for (var i = this.levels, n = 0, r = i.length; n < r; n++) { var a = i[n];
        e.object.levels.push({ object: a.object.uuid, distance: a.distance }) } return e } }), Object.assign(xo.prototype, { calculateInverses: function() { this.boneInverses = []; for (var t = 0, e = this.bones.length; t < e; t++) { var i = new Ve;
        this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i) } }, pose: function() { var t, e, i; for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]); for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale)) }, update: (Ua = new Ve, Ba = new Ve, function() { for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) { var o = t[r] ? t[r].matrixWorld : Ba;
        Ua.multiplyMatrices(o, e[r]), Ua.toArray(i, 16 * r) } void 0 !== n && (n.needsUpdate = !0) }), clone: function() { return new xo(this.bones, this.boneInverses) }, getBoneByName: function(t) { for (var e = 0, i = this.bones.length; e < i; e++) { var n = this.bones[e]; if (n.name === t) return n } } }), bo.prototype = Object.assign(Object.create(Zi.prototype), { constructor: bo, isBone: !0 }), _o.prototype = Object.assign(Object.create(fr.prototype), { constructor: _o, isSkinnedMesh: !0, initBones: function() { var t, e, i, n, r = []; if (this.geometry && void 0 !== this.geometry.bones) { for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], t = new bo, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl); for (i = 0, n = this.geometry.bones.length; i < n; i++) - 1 !== (e = this.geometry.bones[i]).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i]) } return this.updateMatrixWorld(!0), r }, bind: function(t, e) { this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e) }, pose: function() { this.skeleton.pose() }, normalizeSkinWeights: function() { var t, e; if (this.geometry && this.geometry.isGeometry)
        for (e = 0; e < this.geometry.skinWeights.length; e++) { var i = this.geometry.skinWeights[e];
          (t = 1 / i.manhattanLength()) !== 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0) }
      else if (this.geometry && this.geometry.isBufferGeometry) { var n = new li,
          r = this.geometry.attributes.skinWeight; for (e = 0; e < r.count; e++) n.x = r.getX(e), n.y = r.getY(e), n.z = r.getZ(e), n.w = r.getW(e), (t = 1 / n.manhattanLength()) !== 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0), r.setXYZW(e, n.x, n.y, n.z, n.w) } }, updateMatrixWorld: function(t) { fr.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) }, clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), ((wo.prototype = Object.create(hr.prototype)).constructor = wo).prototype.isLineBasicMaterial = !0, wo.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this }, Mo.prototype = Object.assign(Object.create(Zi.prototype), { constructor: Mo, isLine: !0, computeLineDistances: (Ha = new je, Va = new je, function() { var t = this.geometry; if (t.isBufferGeometry)
        if (null === t.index) { for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) Ha.fromBufferAttribute(e, n - 1), Va.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += Ha.distanceTo(Va);
          t.addAttribute("lineDistance", new yn(i, 1)) }
      else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      else if (t.isGeometry) { var a = t.vertices; for ((i = t.lineDistances)[0] = 0, n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n]) } return this }), raycast: (Fa = new Ve, za = new pr, Ga = new mi, function(t, e) { var i = t.linePrecision,
        n = i * i,
        r = this.geometry,
        a = this.matrixWorld; if (null === r.boundingSphere && r.computeBoundingSphere(), Ga.copy(r.boundingSphere), Ga.applyMatrix4(a), !1 !== t.ray.intersectsSphere(Ga)) { Fa.getInverse(a), za.copy(t.ray).applyMatrix4(Fa); var o = new je,
          s = new je,
          c = new je,
          h = new je,
          l = this && this.isLineSegments ? 2 : 1; if (r.isBufferGeometry) { var u = r.index,
            p = r.attributes.position.array; if (null !== u)
            for (var d = u.array, f = 0, m = d.length - 1; f < m; f += l) { var g = d[f],
                v = d[f + 1];
              o.fromArray(p, 3 * g), s.fromArray(p, 3 * v), n < za.distanceSqToSegment(o, s, h, c) || (h.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(h)) < t.near || b > t.far || e.push({ distance: b, point: c.clone().applyMatrix4(this.matrixWorld), index: f, face: null, faceIndex: null, object: this })) }
          else
            for (f = 0, m = p.length / 3 - 1; f < m; f += l) o.fromArray(p, 3 * f), s.fromArray(p, 3 * f + 3), n < za.distanceSqToSegment(o, s, h, c) || (h.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(h)) < t.near || b > t.far || e.push({ distance: b, point: c.clone().applyMatrix4(this.matrixWorld), index: f, face: null, faceIndex: null, object: this })) } else if (r.isGeometry) { var y = r.vertices,
            x = y.length; for (f = 0; f < x - 1; f += l) { var b;
            n < za.distanceSqToSegment(y[f], y[f + 1], h, c) || (h.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(h)) < t.near || b > t.far || e.push({ distance: b, point: c.clone().applyMatrix4(this.matrixWorld), index: f, face: null, faceIndex: null, object: this })) } } } }), clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), Eo.prototype = Object.assign(Object.create(Mo.prototype), { constructor: Eo, isLineSegments: !0, computeLineDistances: (ka = new je, ja = new je, function() { var t = this.geometry; if (t.isBufferGeometry)
        if (null === t.index) { for (var e = t.attributes.position, i = [], n = 0, r = e.count; n < r; n += 2) ka.fromBufferAttribute(e, n), ja.fromBufferAttribute(e, n + 1), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + ka.distanceTo(ja);
          t.addAttribute("lineDistance", new yn(i, 1)) }
      else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      else if (t.isGeometry) { var a = t.vertices; for (i = t.lineDistances, n = 0, r = a.length; n < r; n += 2) ka.copy(a[n]), ja.copy(a[n + 1]), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + ka.distanceTo(ja) } return this }) }), To.prototype = Object.assign(Object.create(Mo.prototype), { constructor: To, isLineLoop: !0 }), ((So.prototype = Object.create(hr.prototype)).constructor = So).prototype.isPointsMaterial = !0, So.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this }, Ao.prototype = Object.assign(Object.create(Zi.prototype), { constructor: Ao, isPoints: !0, raycast: (Wa = new Ve, Xa = new pr, qa = new mi, function(r, a) { var o = this,
        t = this.geometry,
        s = this.matrixWorld,
        e = r.params.Points.threshold; if (null === t.boundingSphere && t.computeBoundingSphere(), qa.copy(t.boundingSphere), qa.applyMatrix4(s), qa.radius += e, !1 !== r.ray.intersectsSphere(qa)) { Wa.getInverse(s), Xa.copy(r.ray).applyMatrix4(Wa); var i = e / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          c = i * i,
          n = new je,
          h = new je; if (t.isBufferGeometry) { var l = t.index,
            u = t.attributes.position.array; if (null !== l)
            for (var p = l.array, d = 0, f = p.length; d < f; d++) { var m = p[d];
              n.fromArray(u, 3 * m), y(n, m) }
          else { d = 0; for (var g = u.length / 3; d < g; d++) n.fromArray(u, 3 * d), y(n, d) } } else { var v = t.vertices; for (d = 0, g = v.length; d < g; d++) y(v[d], d) } }

      function y(t, e) { var i = Xa.distanceSqToPoint(t); if (i < c) { Xa.closestPointToPoint(t, h), h.applyMatrix4(s); var n = r.ray.origin.distanceTo(h); if (n < r.near || n > r.far) return;
          a.push({ distance: n, distanceToRay: Math.sqrt(i), point: h.clone(), index: e, face: null, object: o }) } } }), clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), Lo.prototype = Object.assign(Object.create(hi.prototype), { constructor: Lo, isVideoTexture: !0, update: function() { var t = this.image;
      t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0) } }), ((Ro.prototype = Object.create(hi.prototype)).constructor = Ro).prototype.isCompressedTexture = !0, ((Co.prototype = Object.create(hi.prototype)).constructor = Co).prototype.isCanvasTexture = !0, ((Po.prototype = Object.create(hi.prototype)).constructor = Po).prototype.isDepthTexture = !0, (Oo.prototype = Object.create(In.prototype)).constructor = Oo, (Io.prototype = Object.create(hn.prototype)).constructor = Io, (No.prototype = Object.create(In.prototype)).constructor = No, (Do.prototype = Object.create(hn.prototype)).constructor = Do, (Uo.prototype = Object.create(In.prototype)).constructor = Uo, (Bo.prototype = Object.create(hn.prototype)).constructor = Bo, (Fo.prototype = Object.create(Uo.prototype)).constructor = Fo, (zo.prototype = Object.create(hn.prototype)).constructor = zo, (Go.prototype = Object.create(Uo.prototype)).constructor = Go, (Ho.prototype = Object.create(hn.prototype)).constructor = Ho, (Vo.prototype = Object.create(Uo.prototype)).constructor = Vo, (ko.prototype = Object.create(hn.prototype)).constructor = ko, (jo.prototype = Object.create(Uo.prototype)).constructor = jo, (Wo.prototype = Object.create(hn.prototype)).constructor = Wo, (Xo.prototype = Object.create(In.prototype)).constructor = Xo, (qo.prototype = Object.create(hn.prototype)).constructor = qo, (Yo.prototype = Object.create(In.prototype)).constructor = Yo, (Jo.prototype = Object.create(hn.prototype)).constructor = Jo, (Zo.prototype = Object.create(In.prototype)).constructor = Zo; var Qo = function(t, e, i) { i = i || 2; var n, r, a, o, s, c, h, l = e && e.length,
      u = l ? e[0] * i : t.length,
      p = Ko(t, 0, u, i, !0),
      d = []; if (!p) return d; if (l && (p = function(t, e, i, n) { var r, a, o, s, c, h = []; for (r = 0, a = e.length; r < a; r++) o = e[r] * n, s = r < a - 1 ? e[r + 1] * n : t.length, (c = Ko(t, o, s, n, !1)) === c.next && (c.steiner = !0), h.push(cs(c)); for (h.sort(as), r = 0; r < h.length; r++) os(h[r], i), i = $o(i, i.next); return i }(t, e, p, i)), t.length > 80 * i) { n = a = t[0], r = o = t[1]; for (var f = i; f < u; f += i)(s = t[f]) < n && (n = s), (c = t[f + 1]) < r && (r = c), a < s && (a = s), o < c && (o = c);
      h = 0 !== (h = Math.max(a - n, o - r)) ? 1 / h : 0 } return ts(p, d, i, n, r, h), d };

  function Ko(t, e, i, n, r) { var a, o; if (r === 0 < function(t, e, i, n) { for (var r = 0, a = e, o = i - n; a < i; a += n) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a; return r }(t, e, i, n))
      for (a = e; a < i; a += n) o = ms(a, t[a], t[a + 1], o);
    else
      for (a = i - n; e <= a; a -= n) o = ms(a, t[a], t[a + 1], o); return o && us(o, o.next) && (gs(o), o = o.next), o }

  function $o(t, e) { if (!t) return t;
    e || (e = t); var i, n = t;
    do { if (i = !1, n.steiner || !us(n, n.next) && 0 !== ls(n.prev, n, n.next)) n = n.next;
      else { if (gs(n), (n = e = n.prev) === n.next) break;
        i = !0 } } while (i || n !== e); return e }

  function ts(t, e, i, n, r, a, o) { if (t) {!o && a && function(t, e, i, n) { var r = t; for (; null === r.z && (r.z = ss(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next, r !== t;);
        r.prevZ.nextZ = null, r.prevZ = null,
          function(t) { var e, i, n, r, a, o, s, c, h = 1;
            do { for (i = t, a = t = null, o = 0; i;) { for (o++, n = i, e = s = 0; e < h && (s++, n = n.nextZ); e++); for (c = h; 0 < s || 0 < c && n;) 0 !== s && (0 === c || !n || i.z <= n.z) ? (i = (r = i).nextZ, s--) : (n = (r = n).nextZ, c--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                i = n } a.nextZ = null, h *= 2 } while (1 < o) }(r) }(t, n, r, a); for (var s, c, h = t; t.prev !== t.next;)
        if (s = t.prev, c = t.next, a ? is(t, n, r, a) : es(t)) e.push(s.i / i), e.push(t.i / i), e.push(c.i / i), gs(t), t = c.next, h = c.next;
        else if ((t = c) === h) { o ? 1 === o ? ts(t = ns(t, e, i), e, i, n, r, a, 2) : 2 === o && rs(t, e, i, n, r, a) : ts($o(t), e, i, n, r, a, 1); break } } }

  function es(t) { var e = t.prev,
      i = t,
      n = t.next; if (0 <= ls(e, i, n)) return !1; for (var r = t.next.next; r !== t.prev;) { if (hs(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && 0 <= ls(r.prev, r, r.next)) return !1;
      r = r.next } return !0 }

  function is(t, e, i, n) { var r = t.prev,
      a = t,
      o = t.next; if (0 <= ls(r, a, o)) return !1; for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, h = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = ss(s, c, e, i, n), p = ss(h, l, e, i, n), d = t.nextZ; d && d.z <= p;) { if (d !== t.prev && d !== t.next && hs(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && 0 <= ls(d.prev, d, d.next)) return !1;
      d = d.nextZ } for (d = t.prevZ; d && d.z >= u;) { if (d !== t.prev && d !== t.next && hs(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && 0 <= ls(d.prev, d, d.next)) return !1;
      d = d.prevZ } return !0 }

  function ns(t, e, i) { var n = t;
    do { var r = n.prev,
        a = n.next.next;!us(r, a) && ps(r, n, n.next, a) && ds(r, a) && ds(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), gs(n), gs(n.next), n = t = a), n = n.next } while (n !== t); return n }

  function rs(t, e, i, n, r, a) { var o, s, c = t;
    do { for (var h = c.next.next; h !== c.prev;) { if (c.i !== h.i && (s = h, (o = c).next.i !== s.i && o.prev.i !== s.i && ! function(t, e) { var i = t;
            do { if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && ps(i, i.next, t, e)) return !0;
              i = i.next } while (i !== t); return !1 }(o, s) && ds(o, s) && ds(s, o) && function(t, e) { var i = t,
              n = !1,
              r = (t.x + e.x) / 2,
              a = (t.y + e.y) / 2; for (; i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next, i !== t;); return n }(o, s))) { var l = fs(c, h); return c = $o(c, c.next), l = $o(l, l.next), ts(c, e, i, n, r, a), void ts(l, e, i, n, r, a) } h = h.next } c = c.next } while (c !== t) }

  function as(t, e) { return t.x - e.x }

  function os(t, e) { if (e = function(t, e) { var i, n = e,
          r = t.x,
          a = t.y,
          o = -1 / 0;
        do { if (a <= n.y && a >= n.next.y && n.next.y !== n.y) { var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y); if (s <= r && o < s) { if ((o = s) === r) { if (a === n.y) return n; if (a === n.next.y) return n.next } i = n.x < n.next.x ? n : n.next } } n = n.next } while (n !== e); if (!i) return null; if (r === o) return i.prev; var c, h = i,
          l = i.x,
          u = i.y,
          p = 1 / 0;
        n = i.next; for (; n !== h;) r >= n.x && n.x >= l && r !== n.x && hs(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) && ((c = Math.abs(a - n.y) / (r - n.x)) < p || c === p && n.x > i.x) && ds(n, t) && (i = n, p = c), n = n.next; return i }(t, e)) { var i = fs(e, t);
      $o(i, i.next) } }

  function ss(t, e, i, n, r) { return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1 }

  function cs(t) { for (var e = t, i = t; e.x < i.x && (i = e), (e = e.next) !== t;); return i }

  function hs(t, e, i, n, r, a, o, s) { return 0 <= (r - o) * (e - s) - (t - o) * (a - s) && 0 <= (t - o) * (n - s) - (i - o) * (e - s) && 0 <= (i - o) * (a - s) - (r - o) * (n - s) }

  function ls(t, e, i) { return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y) }

  function us(t, e) { return t.x === e.x && t.y === e.y }

  function ps(t, e, i, n) { return !!(us(t, e) && us(i, n) || us(t, n) && us(i, e)) || 0 < ls(t, e, i) != 0 < ls(t, e, n) && 0 < ls(i, n, t) != 0 < ls(i, n, e) }

  function ds(t, e) { return ls(t.prev, t, t.next) < 0 ? 0 <= ls(t, e, t.next) && 0 <= ls(t, t.prev, e) : ls(t, e, t.prev) < 0 || ls(t, t.next, e) < 0 }

  function fs(t, e) { var i = new vs(t.i, t.x, t.y),
      n = new vs(e.i, e.x, e.y),
      r = t.next,
      a = e.prev; return (t.next = e).prev = t, (i.next = r).prev = i, (n.next = i).prev = n, (a.next = n).prev = a, n }

  function ms(t, e, i, n) { var r = new vs(t, e, i); return n ? (r.next = n.next, (r.prev = n).next.prev = r, n.next = r) : (r.prev = r).next = r, r }

  function gs(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ) }

  function vs(t, e, i) { this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 } var ys = { area: function(t) { for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y; return .5 * i }, isClockWise: function(t) { return ys.area(t) < 0 }, triangulateShape: function(t, e) { var i = [],
        n = [],
        r = [];
      xs(t), bs(i, t); var a = t.length;
      e.forEach(xs); for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, bs(i, e[o]); var s = Qo(i, n); for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3)); return r } };

  function xs(t) { var e = t.length;
    2 < e && t[e - 1].equals(t[0]) && t.pop() }

  function bs(t, e) { for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y) }

  function _s(t, e) { hn.call(this), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, this.fromBufferGeometry(new ws(t, e)), this.mergeVertices() }

  function ws(t, Z) { In.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = { shapes: t, options: Z }, t = Array.isArray(t) ? t : [t]; for (var Q = this, K = [], $ = [], e = 0, i = t.length; e < i; e++) { n(t[e]) }

    function n(t) { var n = [],
        e = void 0 !== Z.curveSegments ? Z.curveSegments : 12,
        c = void 0 !== Z.steps ? Z.steps : 1,
        i = void 0 !== Z.depth ? Z.depth : 100,
        r = void 0 === Z.bevelEnabled || Z.bevelEnabled,
        a = void 0 !== Z.bevelThickness ? Z.bevelThickness : 6,
        o = void 0 !== Z.bevelSize ? Z.bevelSize : a - 2,
        h = void 0 !== Z.bevelSegments ? Z.bevelSegments : 3,
        s = Z.extrudePath,
        l = void 0 !== Z.UVGenerator ? Z.UVGenerator : Ms;
      void 0 !== Z.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), i = Z.amount); var u, p, d, f, m, g, v, y, x = !1;
      s && (u = s.getSpacedPoints(c), r = !(x = !0), p = s.computeFrenetFrames(c, !1), d = new je, f = new je, m = new je), r || (o = a = h = 0); var b = t.extractPoints(e),
        _ = b.shape,
        w = b.holes; if (!ys.isClockWise(_))
        for (_ = _.reverse(), v = 0, y = w.length; v < y; v++) g = w[v], ys.isClockWise(g) && (w[v] = g.reverse()); var M = ys.triangulateShape(_, w),
        E = _; for (v = 0, y = w.length; v < y; v++) g = w[v], _ = _.concat(g);

      function T(t, e, i) { return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t) } var S, A, L, R, C, P, O = _.length,
        I = M.length;

      function N(t, e, i) { var n, r, a, o = t.x - e.x,
          s = t.y - e.y,
          c = i.x - t.x,
          h = i.y - t.y,
          l = o * o + s * s,
          u = o * h - s * c; if (Math.abs(u) > Number.EPSILON) { var p = Math.sqrt(l),
            d = Math.sqrt(c * c + h * h),
            f = e.x - s / p,
            m = e.y + o / p,
            g = ((i.x - h / d - f) * h - (i.y + c / d - m) * c) / (o * h - s * c),
            v = (n = f + o * g - t.x) * n + (r = m + s * g - t.y) * r; if (v <= 2) return new He(n, r);
          a = Math.sqrt(v / 2) } else { var y = !1;
          o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (n = -s, r = o, a = Math.sqrt(l)) : (n = o, r = s, a = Math.sqrt(l / 2)) } return new He(n / a, r / a) } for (var D = [], U = 0, B = E.length, F = B - 1, z = U + 1; U < B; U++, F++, z++) F === B && (F = 0), z === B && (z = 0), D[U] = N(E[U], E[F], E[z]); var G, H, V = [],
        k = D.concat(); for (v = 0, y = w.length; v < y; v++) { for (g = w[v], G = [], U = 0, F = (B = g.length) - 1, z = U + 1; U < B; U++, F++, z++) F === B && (F = 0), z === B && (z = 0), G[U] = N(g[U], g[F], g[z]);
        V.push(G), k = k.concat(G) } for (S = 0; S < h; S++) { for (L = S / h, R = a * Math.cos(L * Math.PI / 2), A = o * Math.sin(L * Math.PI / 2), U = 0, B = E.length; U < B; U++) W((C = T(E[U], D[U], A)).x, C.y, -R); for (v = 0, y = w.length; v < y; v++)
          for (g = w[v], G = V[v], U = 0, B = g.length; U < B; U++) W((C = T(g[U], G[U], A)).x, C.y, -R) } for (A = o, U = 0; U < O; U++) C = r ? T(_[U], k[U], A) : _[U], x ? (f.copy(p.normals[0]).multiplyScalar(C.x), d.copy(p.binormals[0]).multiplyScalar(C.y), m.copy(u[0]).add(f).add(d), W(m.x, m.y, m.z)) : W(C.x, C.y, 0); for (H = 1; H <= c; H++)
        for (U = 0; U < O; U++) C = r ? T(_[U], k[U], A) : _[U], x ? (f.copy(p.normals[H]).multiplyScalar(C.x), d.copy(p.binormals[H]).multiplyScalar(C.y), m.copy(u[H]).add(f).add(d), W(m.x, m.y, m.z)) : W(C.x, C.y, i / c * H); for (S = h - 1; 0 <= S; S--) { for (L = S / h, R = a * Math.cos(L * Math.PI / 2), A = o * Math.sin(L * Math.PI / 2), U = 0, B = E.length; U < B; U++) W((C = T(E[U], D[U], A)).x, C.y, i + R); for (v = 0, y = w.length; v < y; v++)
          for (g = w[v], G = V[v], U = 0, B = g.length; U < B; U++) C = T(g[U], G[U], A), x ? W(C.x, C.y + u[c - 1].y, u[c - 1].x + R) : W(C.x, C.y, i + R) }

      function j(t, e) { var i, n; for (U = t.length; 0 <= --U;) {
          (n = (i = U) - 1) < 0 && (n = t.length - 1); var r = 0,
            a = c + 2 * h; for (r = 0; r < a; r++) { var o = O * r,
              s = O * (r + 1);
            q(e + i + o, e + n + o, e + n + s, e + i + s) } } }

      function W(t, e, i) { n.push(t), n.push(e), n.push(i) }

      function X(t, e, i) { Y(t), Y(e), Y(i); var n = K.length / 3,
          r = l.generateTopUV(Q, K, n - 3, n - 2, n - 1);
        J(r[0]), J(r[1]), J(r[2]) }

      function q(t, e, i, n) { Y(t), Y(e), Y(n), Y(e), Y(i), Y(n); var r = K.length / 3,
          a = l.generateSideWallUV(Q, K, r - 6, r - 3, r - 2, r - 1);
        J(a[0]), J(a[1]), J(a[3]), J(a[1]), J(a[2]), J(a[3]) }

      function Y(t) { K.push(n[3 * t + 0]), K.push(n[3 * t + 1]), K.push(n[3 * t + 2]) }

      function J(t) { $.push(t.x), $.push(t.y) }! function() { var t = K.length / 3; if (r) { var e = 0,
            i = O * e; for (U = 0; U < I; U++) X((P = M[U])[2] + i, P[1] + i, P[0] + i); for (i = O * (e = c + 2 * h), U = 0; U < I; U++) X((P = M[U])[0] + i, P[1] + i, P[2] + i) } else { for (U = 0; U < I; U++) X((P = M[U])[2], P[1], P[0]); for (U = 0; U < I; U++) X((P = M[U])[0] + O * c, P[1] + O * c, P[2] + O * c) } Q.addGroup(t, K.length / 3 - t, 0) }(),
      function() { var t = K.length / 3,
          e = 0; for (j(E, e), e += E.length, v = 0, y = w.length; v < y; v++) j(g = w[v], e), e += g.length;
        Q.addGroup(t, K.length / 3 - t, 1) }() } this.addAttribute("position", new yn(K, 3)), this.addAttribute("uv", new yn($, 2)), this.computeVertexNormals() }((_s.prototype = Object.create(hn.prototype)).constructor = _s).prototype.toJSON = function() { var t = hn.prototype.toJSON.call(this); return Es(this.parameters.shapes, this.parameters.options, t) }, ((ws.prototype = Object.create(In.prototype)).constructor = ws).prototype.toJSON = function() { var t = In.prototype.toJSON.call(this); return Es(this.parameters.shapes, this.parameters.options, t) }; var Ms = { generateTopUV: function(t, e, i, n, r) { var a = e[3 * i],
        o = e[3 * i + 1],
        s = e[3 * n],
        c = e[3 * n + 1],
        h = e[3 * r],
        l = e[3 * r + 1]; return [new He(a, o), new He(s, c), new He(h, l)] }, generateSideWallUV: function(t, e, i, n, r, a) { var o = e[3 * i],
        s = e[3 * i + 1],
        c = e[3 * i + 2],
        h = e[3 * n],
        l = e[3 * n + 1],
        u = e[3 * n + 2],
        p = e[3 * r],
        d = e[3 * r + 1],
        f = e[3 * r + 2],
        m = e[3 * a],
        g = e[3 * a + 1],
        v = e[3 * a + 2]; return Math.abs(s - l) < .01 ? [new He(o, 1 - c), new He(h, 1 - u), new He(p, 1 - f), new He(m, 1 - v)] : [new He(s, 1 - c), new He(l, 1 - u), new He(d, 1 - f), new He(g, 1 - v)] } };

  function Es(t, e, i) { if (i.shapes = [], Array.isArray(t))
      for (var n = 0, r = t.length; n < r; n++) { var a = t[n];
        i.shapes.push(a.uuid) }
    else i.shapes.push(t.uuid); return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i }

  function Ts(t, e) { hn.call(this), this.type = "TextGeometry", this.parameters = { text: t, parameters: e }, this.fromBufferGeometry(new Ss(t, e)), this.mergeVertices() }

  function Ss(t, e) { var i = (e = e || {}).font; if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new hn; var n = i.generateShapes(t, e.size);
    e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), ws.call(this, n, e), this.type = "TextBufferGeometry" }

  function As(t, e, i, n, r, a, o) { hn.call(this), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: i, phiStart: n, phiLength: r, thetaStart: a, thetaLength: o }, this.fromBufferGeometry(new Ls(t, e, i, n, r, a, o)), this.mergeVertices() }

  function Ls(t, e, i, n, r, a, o) { In.call(this), this.type = "SphereBufferGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: i, phiStart: n, phiLength: r, thetaStart: a, thetaLength: o }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI; var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
      l = 0,
      u = [],
      p = new je,
      d = new je,
      f = [],
      m = [],
      g = [],
      v = []; for (c = 0; c <= i; c++) { var y = [],
        x = c / i; for (s = 0; s <= e; s++) { var b = s / e;
        p.x = -t * Math.cos(n + b * r) * Math.sin(a + x * o), p.y = t * Math.cos(a + x * o), p.z = t * Math.sin(n + b * r) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), g.push(d.x, d.y, d.z), v.push(b, 1 - x), y.push(l++) } u.push(y) } for (c = 0; c < i; c++)
      for (s = 0; s < e; s++) { var _ = u[c][s + 1],
          w = u[c][s],
          M = u[c + 1][s],
          E = u[c + 1][s + 1];
        (0 !== c || 0 < a) && f.push(_, w, E), (c !== i - 1 || h < Math.PI) && f.push(w, M, E) } this.setIndex(f), this.addAttribute("position", new yn(m, 3)), this.addAttribute("normal", new yn(g, 3)), this.addAttribute("uv", new yn(v, 2)) }

  function Rs(t, e, i, n, r, a) { hn.call(this), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: n, thetaStart: r, thetaLength: a }, this.fromBufferGeometry(new Cs(t, e, i, n, r, a)), this.mergeVertices() }

  function Cs(t, e, i, n, r, a) { In.call(this), this.type = "RingBufferGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: n, thetaStart: r, thetaLength: a }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8; var o, s, c, h = [],
      l = [],
      u = [],
      p = [],
      d = t,
      f = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
      m = new je,
      g = new He; for (s = 0; s <= n; s++) { for (c = 0; c <= i; c++) o = r + c / i * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), g.x = (m.x / e + 1) / 2, g.y = (m.y / e + 1) / 2, p.push(g.x, g.y);
      d += f } for (s = 0; s < n; s++) { var v = s * (i + 1); for (c = 0; c < i; c++) { var y = o = c + v,
          x = o + i + 1,
          b = o + i + 2,
          _ = o + 1;
        h.push(y, x, _), h.push(x, b, _) } } this.setIndex(h), this.addAttribute("position", new yn(l, 3)), this.addAttribute("normal", new yn(u, 3)), this.addAttribute("uv", new yn(p, 2)) }

  function Ps(t, e, i, n) { hn.call(this), this.type = "LatheGeometry", this.parameters = { points: t, segments: e, phiStart: i, phiLength: n }, this.fromBufferGeometry(new Os(t, e, i, n)), this.mergeVertices() }

  function Os(t, e, i, n) { In.call(this), this.type = "LatheBufferGeometry", this.parameters = { points: t, segments: e, phiStart: i, phiLength: n }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = Ge.clamp(n, 0, 2 * Math.PI); var r, a, o, s = [],
      c = [],
      h = [],
      l = 1 / e,
      u = new je,
      p = new He; for (a = 0; a <= e; a++) { var d = i + a * l * n,
        f = Math.sin(d),
        m = Math.cos(d); for (o = 0; o <= t.length - 1; o++) u.x = t[o].x * f, u.y = t[o].y, u.z = t[o].x * m, c.push(u.x, u.y, u.z), p.x = a / e, p.y = o / (t.length - 1), h.push(p.x, p.y) } for (a = 0; a < e; a++)
      for (o = 0; o < t.length - 1; o++) { var g = r = o + a * t.length,
          v = r + t.length,
          y = r + t.length + 1,
          x = r + 1;
        s.push(g, v, x), s.push(v, y, x) }
    if (this.setIndex(s), this.addAttribute("position", new yn(c, 3)), this.addAttribute("uv", new yn(h, 2)), this.computeVertexNormals(), n === 2 * Math.PI) { var b = this.attributes.normal.array,
        _ = new je,
        w = new je,
        M = new je; for (r = e * t.length * 3, o = a = 0; a < t.length; a++, o += 3) _.x = b[o + 0], _.y = b[o + 1], _.z = b[o + 2], w.x = b[r + o + 0], w.y = b[r + o + 1], w.z = b[r + o + 2], M.addVectors(_, w).normalize(), b[o + 0] = b[r + o + 0] = M.x, b[o + 1] = b[r + o + 1] = M.y, b[o + 2] = b[r + o + 2] = M.z } }

  function Is(t, e) { hn.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = { shapes: t, curveSegments: e }, this.fromBufferGeometry(new Ns(t, e)), this.mergeVertices() }

  function Ns(t, f) { In.call(this), this.type = "ShapeBufferGeometry", this.parameters = { shapes: t, curveSegments: f }, f = f || 12; var m = [],
      g = [],
      v = [],
      y = [],
      e = 0,
      x = 0; if (!1 === Array.isArray(t)) n(t);
    else
      for (var i = 0; i < t.length; i++) n(t[i]), this.addGroup(e, x, i), e += x, x = 0;

    function n(t) { var e, i, n, r = g.length / 3,
        a = t.extractPoints(f),
        o = a.shape,
        s = a.holes; if (!1 === ys.isClockWise(o))
        for (o = o.reverse(), e = 0, i = s.length; e < i; e++) n = s[e], !0 === ys.isClockWise(n) && (s[e] = n.reverse()); var c = ys.triangulateShape(o, s); for (e = 0, i = s.length; e < i; e++) n = s[e], o = o.concat(n); for (e = 0, i = o.length; e < i; e++) { var h = o[e];
        g.push(h.x, h.y, 0), v.push(0, 0, 1), y.push(h.x, h.y) } for (e = 0, i = c.length; e < i; e++) { var l = c[e],
          u = l[0] + r,
          p = l[1] + r,
          d = l[2] + r;
        m.push(u, p, d), x += 3 } } this.setIndex(m), this.addAttribute("position", new yn(g, 3)), this.addAttribute("normal", new yn(v, 3)), this.addAttribute("uv", new yn(y, 2)) }

  function Ds(t, e) { if (e.shapes = [], Array.isArray(t))
      for (var i = 0, n = t.length; i < n; i++) { var r = t[i];
        e.shapes.push(r.uuid) }
    else e.shapes.push(t.uuid); return e }

  function Us(t, e) { In.call(this), this.type = "EdgesGeometry", this.parameters = { thresholdAngle: e }, e = void 0 !== e ? e : 1; var i, n, r, a, o = [],
      s = Math.cos(Ge.DEG2RAD * e),
      c = [0, 0],
      h = {},
      l = ["a", "b", "c"];
    t.isBufferGeometry ? (a = new hn).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals(); for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
      for (var m = p[d], g = 0; g < 3; g++) i = m[l[g]], n = m[l[(g + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = { index1: c[0], index2: c[1], face1: d, face2: void 0 } : h[r].face2 = d; for (r in h) { var v = h[r]; if (void 0 === v.face2 || p[v.face1].normal.dot(p[v.face2].normal) <= s) { var y = u[v.index1];
        o.push(y.x, y.y, y.z), y = u[v.index2], o.push(y.x, y.y, y.z) } } this.addAttribute("position", new yn(o, 3)) }

  function Bs(t, e, i, n, r, a, o, s) { hn.call(this), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: i, radialSegments: n, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: s }, this.fromBufferGeometry(new Fs(t, e, i, n, r, a, o, s)), this.mergeVertices() }

  function Fs(v, y, x, b, _, t, w, M) { In.call(this), this.type = "CylinderBufferGeometry", this.parameters = { radiusTop: v, radiusBottom: y, height: x, radialSegments: b, heightSegments: _, openEnded: t, thetaStart: w, thetaLength: M }; var E = this;
    v = void 0 !== v ? v : 1, y = void 0 !== y ? y : 1, x = x || 1, b = Math.floor(b) || 8, _ = Math.floor(_) || 1, t = void 0 !== t && t, w = void 0 !== w ? w : 0, M = void 0 !== M ? M : 2 * Math.PI; var T = [],
      S = [],
      A = [],
      L = [],
      R = 0,
      C = [],
      P = x / 2,
      O = 0;

    function e(t) { var e, i, n, r = new He,
        a = new je,
        o = 0,
        s = !0 === t ? v : y,
        c = !0 === t ? 1 : -1; for (i = R, e = 1; e <= b; e++) S.push(0, P * c, 0), A.push(0, c, 0), L.push(.5, .5), R++; for (n = R, e = 0; e <= b; e++) { var h = e / b * M + w,
          l = Math.cos(h),
          u = Math.sin(h);
        a.x = s * u, a.y = P * c, a.z = s * l, S.push(a.x, a.y, a.z), A.push(0, c, 0), r.x = .5 * l + .5, r.y = .5 * u * c + .5, L.push(r.x, r.y), R++ } for (e = 0; e < b; e++) { var p = i + e,
          d = n + e;!0 === t ? T.push(d, d + 1, p) : T.push(d + 1, d, p), o += 3 } E.addGroup(O, o, !0 === t ? 1 : 2), O += o }! function() { var t, e, i = new je,
        n = new je,
        r = 0,
        a = (y - v) / x; for (e = 0; e <= _; e++) { var o = [],
          s = e / _,
          c = s * (y - v) + v; for (t = 0; t <= b; t++) { var h = t / b,
            l = h * M + w,
            u = Math.sin(l),
            p = Math.cos(l);
          n.x = c * u, n.y = -s * x + P, n.z = c * p, S.push(n.x, n.y, n.z), i.set(u, a, p).normalize(), A.push(i.x, i.y, i.z), L.push(h, 1 - s), o.push(R++) } C.push(o) } for (t = 0; t < b; t++)
        for (e = 0; e < _; e++) { var d = C[e][t],
            f = C[e + 1][t],
            m = C[e + 1][t + 1],
            g = C[e][t + 1];
          T.push(d, f, g), T.push(f, m, g), r += 6 } E.addGroup(O, r, 0), O += r }(), !1 === t && (0 < v && e(!0), 0 < y && e(!1)), this.setIndex(T), this.addAttribute("position", new yn(S, 3)), this.addAttribute("normal", new yn(A, 3)), this.addAttribute("uv", new yn(L, 2)) }

  function zs(t, e, i, n, r, a, o) { Bs.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: i, heightSegments: n, openEnded: r, thetaStart: a, thetaLength: o } }

  function Gs(t, e, i, n, r, a, o) { Fs.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = { radius: t, height: e, radialSegments: i, heightSegments: n, openEnded: r, thetaStart: a, thetaLength: o } }

  function Hs(t, e, i, n) { hn.call(this), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: i, thetaLength: n }, this.fromBufferGeometry(new Vs(t, e, i, n)), this.mergeVertices() }

  function Vs(t, e, i, n) { In.call(this), this.type = "CircleBufferGeometry", this.parameters = { radius: t, segments: e, thetaStart: i, thetaLength: n }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI; var r, a, o = [],
      s = [],
      c = [],
      h = [],
      l = new je,
      u = new He; for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) { var p = i + a / e * n;
      l.x = t * Math.cos(p), l.y = t * Math.sin(p), s.push(l.x, l.y, l.z), c.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, h.push(u.x, u.y) } for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
    this.setIndex(o), this.addAttribute("position", new yn(s, 3)), this.addAttribute("normal", new yn(c, 3)), this.addAttribute("uv", new yn(h, 2)) }(Ts.prototype = Object.create(hn.prototype)).constructor = Ts, (Ss.prototype = Object.create(ws.prototype)).constructor = Ss, (As.prototype = Object.create(hn.prototype)).constructor = As, (Ls.prototype = Object.create(In.prototype)).constructor = Ls, (Rs.prototype = Object.create(hn.prototype)).constructor = Rs, (Cs.prototype = Object.create(In.prototype)).constructor = Cs, (Ps.prototype = Object.create(hn.prototype)).constructor = Ps, (Os.prototype = Object.create(In.prototype)).constructor = Os, ((Is.prototype = Object.create(hn.prototype)).constructor = Is).prototype.toJSON = function() { var t = hn.prototype.toJSON.call(this); return Ds(this.parameters.shapes, t) }, ((Ns.prototype = Object.create(In.prototype)).constructor = Ns).prototype.toJSON = function() { var t = In.prototype.toJSON.call(this); return Ds(this.parameters.shapes, t) }, (Us.prototype = Object.create(In.prototype)).constructor = Us, (Bs.prototype = Object.create(hn.prototype)).constructor = Bs, (Fs.prototype = Object.create(In.prototype)).constructor = Fs, (zs.prototype = Object.create(Bs.prototype)).constructor = zs, (Gs.prototype = Object.create(Fs.prototype)).constructor = Gs, (Hs.prototype = Object.create(hn.prototype)).constructor = Hs, (Vs.prototype = Object.create(In.prototype)).constructor = Vs; var ks = Object.freeze({ WireframeGeometry: Oo, ParametricGeometry: Io, ParametricBufferGeometry: No, TetrahedronGeometry: Bo, TetrahedronBufferGeometry: Fo, OctahedronGeometry: zo, OctahedronBufferGeometry: Go, IcosahedronGeometry: Ho, IcosahedronBufferGeometry: Vo, DodecahedronGeometry: ko, DodecahedronBufferGeometry: jo, PolyhedronGeometry: Do, PolyhedronBufferGeometry: Uo, TubeGeometry: Wo, TubeBufferGeometry: Xo, TorusKnotGeometry: qo, TorusKnotBufferGeometry: Yo, TorusGeometry: Jo, TorusBufferGeometry: Zo, TextGeometry: Ts, TextBufferGeometry: Ss, SphereGeometry: As, SphereBufferGeometry: Ls, RingGeometry: Rs, RingBufferGeometry: Cs, PlaneGeometry: Un, PlaneBufferGeometry: Bn, LatheGeometry: Ps, LatheBufferGeometry: Os, ShapeGeometry: Is, ShapeBufferGeometry: Ns, ExtrudeGeometry: _s, ExtrudeBufferGeometry: ws, EdgesGeometry: Us, ConeGeometry: zs, ConeBufferGeometry: Gs, CylinderGeometry: Bs, CylinderBufferGeometry: Fs, CircleGeometry: Hs, CircleBufferGeometry: Vs, BoxGeometry: Nn, BoxBufferGeometry: Dn });

  function js(t) { hr.call(this), this.type = "ShadowMaterial", this.color = new wi(0), this.transparent = !0, this.setValues(t) }

  function Ws(t) { ur.call(this, t), this.type = "RawShaderMaterial" }

  function Xs(t) { hr.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new wi(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Fe, this.normalScale = new He(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

  function qs(t) { Xs.call(this), this.defines = { PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t) }

  function Ys(t) { hr.call(this), this.type = "MeshPhongMaterial", this.color = new wi(16777215), this.specular = new wi(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Fe, this.normalScale = new He(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ht, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

  function Js(t) { Ys.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t) }

  function Zs(t) { hr.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Fe, this.normalScale = new He(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

  function Qs(t) { hr.call(this), this.type = "MeshLambertMaterial", this.color = new wi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ht, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

  function Ks(t) { wo.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t) }((js.prototype = Object.create(hr.prototype)).constructor = js).prototype.isShadowMaterial = !0, js.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this }, ((Ws.prototype = Object.create(ur.prototype)).constructor = Ws).prototype.isRawShaderMaterial = !0, ((Xs.prototype = Object.create(hr.prototype)).constructor = Xs).prototype.isMeshStandardMaterial = !0, Xs.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ((qs.prototype = Object.create(Xs.prototype)).constructor = qs).prototype.isMeshPhysicalMaterial = !0, qs.prototype.copy = function(t) { return Xs.prototype.copy.call(this, t), this.defines = { PHYSICAL: "" }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this }, ((Ys.prototype = Object.create(hr.prototype)).constructor = Ys).prototype.isMeshPhongMaterial = !0, Ys.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ((Js.prototype = Object.create(Ys.prototype)).constructor = Js).prototype.isMeshToonMaterial = !0, Js.prototype.copy = function(t) { return Ys.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this }, ((Zs.prototype = Object.create(hr.prototype)).constructor = Zs).prototype.isMeshNormalMaterial = !0, Zs.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ((Qs.prototype = Object.create(hr.prototype)).constructor = Qs).prototype.isMeshLambertMaterial = !0, Qs.prototype.copy = function(t) { return hr.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ((Ks.prototype = Object.create(wo.prototype)).constructor = Ks).prototype.isLineDashedMaterial = !0, Ks.prototype.copy = function(t) { return wo.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this }; var $s = Object.freeze({ ShadowMaterial: js, SpriteMaterial: go, RawShaderMaterial: Ws, ShaderMaterial: ur, PointsMaterial: So, MeshPhysicalMaterial: qs, MeshStandardMaterial: Xs, MeshPhongMaterial: Ys, MeshToonMaterial: Js, MeshNormalMaterial: Zs, MeshLambertMaterial: Qs, MeshDepthMaterial: Ka, MeshDistanceMaterial: $a, MeshBasicMaterial: lr, LineDashedMaterial: Ks, LineBasicMaterial: wo, Material: hr }),
    tc = { enabled: !1, files: {}, add: function(t, e) {!1 !== this.enabled && (this.files[t] = e) }, get: function(t) { if (!1 !== this.enabled) return this.files[t] }, remove: function(t) { delete this.files[t] }, clear: function() { this.files = {} } };

  function ec(t, e, i) { var n = this,
      r = !1,
      a = 0,
      o = 0,
      s = void 0;
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) { o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0 }, this.itemEnd = function(t) { a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad()) }, this.itemError = function(t) { void 0 !== n.onError && n.onError(t) }, this.resolveURL = function(t) { return s ? s(t) : t }, this.setURLModifier = function(t) { return s = t, this } } var ic = new ec,
    nc = {};

  function rc(t) { this.manager = void 0 !== t ? t : ic }

  function ac(t) { this.manager = void 0 !== t ? t : ic, this._parser = null }

  function oc(t) { this.manager = void 0 !== t ? t : ic, this._parser = null }

  function sc(t) { this.manager = void 0 !== t ? t : ic }

  function cc(t) { this.manager = void 0 !== t ? t : ic }

  function hc(t) { this.manager = void 0 !== t ? t : ic }

  function lc() { this.type = "Curve", this.arcLengthDivisions = 200 }

  function uc(t, e, i, n, r, a, o, s) { lc.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0 }

  function pc(t, e, i, n, r, a) { uc.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve" }

  function dc() { var r = 0,
      a = 0,
      o = 0,
      s = 0;

    function h(t, e, i, n) { o = -3 * (r = t) + 3 * e - 2 * (a = i) - n, s = 2 * t - 2 * e + i + n } return { initCatmullRom: function(t, e, i, n, r) { h(e, i, r * (i - t), r * (n - e)) }, initNonuniformCatmullRom: function(t, e, i, n, r, a, o) { var s = (e - t) / r - (i - t) / (r + a) + (i - e) / a,
          c = (i - e) / a - (n - e) / (a + o) + (n - i) / o;
        h(e, i, s *= a, c *= a) }, calc: function(t) { var e = t * t; return r + a * t + o * e + s * (e * t) } } } Object.assign(rc.prototype, { load: function(o, t, e, i) { void 0 === o && (o = ""), void 0 !== this.path && (o = this.path + o), o = this.manager.resolveURL(o); var s = this,
        n = tc.get(o); if (void 0 !== n) return s.manager.itemStart(o), setTimeout(function() { t && t(n), s.manager.itemEnd(o) }, 0), n; if (void 0 === nc[o]) { var r = o.match(/^data:(.*?)(;base64)?,(.*)$/); if (r) { var a = r[1],
            c = !!r[2],
            h = r[3];
          h = window.decodeURIComponent(h), c && (h = window.atob(h)); try { var l, u = (this.responseType || "").toLowerCase(); switch (u) {
              case "arraybuffer":
              case "blob":
                for (var p = new Uint8Array(h.length), d = 0; d < h.length; d++) p[d] = h.charCodeAt(d);
                l = "blob" === u ? new Blob([p.buffer], { type: a }) : p.buffer; break;
              case "document":
                var f = new DOMParser;
                l = f.parseFromString(h, a); break;
              case "json":
                l = JSON.parse(h); break;
              default:
                l = h } window.setTimeout(function() { t && t(l), s.manager.itemEnd(o) }, 0) } catch (t) { window.setTimeout(function() { i && i(t), s.manager.itemEnd(o), s.manager.itemError(o) }, 0) } } else { nc[o] = [], nc[o].push({ onLoad: t, onProgress: e, onError: i }); var m = new XMLHttpRequest; for (var g in m.open("GET", o, !0), m.addEventListener("load", function(t) { var e = this.response;
              tc.add(o, e); var i = nc[o]; if (delete nc[o], 200 === this.status || 0 === this.status) { 0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."); for (var n = 0, r = i.length; n < r; n++) {
                  (a = i[n]).onLoad && a.onLoad(e) } s.manager.itemEnd(o) } else { for (n = 0, r = i.length; n < r; n++) { var a;
                  (a = i[n]).onError && a.onError(t) } s.manager.itemEnd(o), s.manager.itemError(o) } }, !1), m.addEventListener("progress", function(t) { for (var e = nc[o], i = 0, n = e.length; i < n; i++) { var r = e[i];
                r.onProgress && r.onProgress(t) } }, !1), m.addEventListener("error", function(t) { var e = nc[o];
              delete nc[o]; for (var i = 0, n = e.length; i < n; i++) { var r = e[i];
                r.onError && r.onError(t) } s.manager.itemEnd(o), s.manager.itemError(o) }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
          m.send(null) } return s.manager.itemStart(o), m } nc[o].push({ onLoad: t, onProgress: e, onError: i }) }, setPath: function(t) { return this.path = t, this }, setResponseType: function(t) { return this.responseType = t, this }, setWithCredentials: function(t) { return this.withCredentials = t, this }, setMimeType: function(t) { return this.mimeType = t, this }, setRequestHeader: function(t) { return this.requestHeader = t, this } }), Object.assign(ac.prototype, { load: function(t, a, e, n) { var o = this,
        s = [],
        c = new Ro;
      c.image = s; var r = new rc(this.manager);

      function i(i) { r.load(t[i], function(t) { var e = o._parser(t, !0);
          s[i] = { width: e.width, height: e.height, format: e.format, mipmaps: e.mipmaps }, 6 === (h += 1) && (1 === e.mipmapCount && (c.minFilter = Pt), c.format = e.format, c.needsUpdate = !0, a && a(c)) }, e, n) } if (r.setPath(this.path), r.setResponseType("arraybuffer"), Array.isArray(t))
        for (var h = 0, l = 0, u = t.length; l < u; ++l) i(l);
      else r.load(t, function(t) { var e = o._parser(t, !0); if (e.isCubemap)
          for (var i = e.mipmaps.length / e.mipmapCount, n = 0; n < i; n++) { s[n] = { mipmaps: [] }; for (var r = 0; r < e.mipmapCount; r++) s[n].mipmaps.push(e.mipmaps[n * e.mipmapCount + r]), s[n].format = e.format, s[n].width = e.width, s[n].height = e.height }
        else c.image.width = e.width, c.image.height = e.height, c.mipmaps = e.mipmaps;
        1 === e.mipmapCount && (c.minFilter = Pt), c.format = e.format, c.needsUpdate = !0, a && a(c) }, e, n); return c }, setPath: function(t) { return this.path = t, this } }), Object.assign(oc.prototype, { load: function(t, i, e, n) { var r = this,
        a = new di,
        o = new rc(this.manager); return o.setResponseType("arraybuffer"), o.load(t, function(t) { var e = r._parser(t);
        e && (void 0 !== e.image ? a.image = e.image : void 0 !== e.data && (a.image.width = e.width, a.image.height = e.height, a.image.data = e.data), a.wrapS = void 0 !== e.wrapS ? e.wrapS : St, a.wrapT = void 0 !== e.wrapT ? e.wrapT : St, a.magFilter = void 0 !== e.magFilter ? e.magFilter : Pt, a.minFilter = void 0 !== e.minFilter ? e.minFilter : It, a.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1, void 0 !== e.format && (a.format = e.format), void 0 !== e.type && (a.type = e.type), void 0 !== e.mipmaps && (a.mipmaps = e.mipmaps), 1 === e.mipmapCount && (a.minFilter = Pt), a.needsUpdate = !0, i && i(a, e)) }, e, n), a } }), Object.assign(sc.prototype, { crossOrigin: "anonymous", load: function(e, t, i, n) { void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e); var r = this,
        a = tc.get(e); if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() { t && t(a), r.manager.itemEnd(e) }, 0), a; var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

      function s() { o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), tc.add(e, this), t && t(this), r.manager.itemEnd(e) }

      function c(t) { o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), n && n(t), r.manager.itemEnd(e), r.manager.itemError(e) } return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setPath: function(t) { return this.path = t, this } }), Object.assign(cc.prototype, { crossOrigin: "anonymous", load: function(t, i, e, n) { var r = new Sr,
        a = new sc(this.manager);
      a.setCrossOrigin(this.crossOrigin), a.setPath(this.path); var o = 0;

      function s(e) { a.load(t[e], function(t) { r.images[e] = t, 6 === ++o && (r.needsUpdate = !0, i && i(r)) }, void 0, n) } for (var c = 0; c < t.length; ++c) s(c); return r }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setPath: function(t) { return this.path = t, this } }), Object.assign(hc.prototype, { crossOrigin: "anonymous", load: function(i, n, t, e) { var r = new hi,
        a = new sc(this.manager); return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(i, function(t) { r.image = t; var e = 0 < i.search(/\.(jpg|jpeg)$/) || 0 === i.search(/^data\:image\/jpeg/);
        r.format = e ? qt : Yt, r.needsUpdate = !0, void 0 !== n && n(r) }, t, e), r }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setPath: function(t) { return this.path = t, this } }), Object.assign(lc.prototype, { getPoint: function() { return console.warn("THREE.Curve: .getPoint() not implemented."), null }, getPointAt: function(t, e) { var i = this.getUtoTmapping(t); return this.getPoint(i, e) }, getPoints: function(t) { void 0 === t && (t = 5); for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t)); return e }, getSpacedPoints: function(t) { void 0 === t && (t = 5); for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t)); return e }, getLength: function() { var t = this.getLengths(); return t[t.length - 1] }, getLengths: function(t) { if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1; var e, i, n = [],
        r = this.getPoint(0),
        a = 0; for (n.push(0), i = 1; i <= t; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e; return this.cacheArcLengths = n }, updateArcLengths: function() { this.needsUpdate = !0, this.getLengths() }, getUtoTmapping: function(t, e) { var i, n = this.getLengths(),
        r = 0,
        a = n.length;
      i = e || t * n[a - 1]; for (var o, s = 0, c = a - 1; s <= c;)
        if ((o = n[r = Math.floor(s + (c - s) / 2)] - i) < 0) s = r + 1;
        else { if (!(0 < o)) { c = r; break } c = r - 1 }
      if (n[r = c] === i) return r / (a - 1); var h = n[r]; return (r + (i - h) / (n[r + 1] - h)) / (a - 1) }, getTangent: function(t) { var e = t - 1e-4,
        i = t + 1e-4;
      e < 0 && (e = 0), 1 < i && (i = 1); var n = this.getPoint(e); return this.getPoint(i).clone().sub(n).normalize() }, getTangentAt: function(t) { var e = this.getUtoTmapping(t); return this.getTangent(e) }, computeFrenetFrames: function(t, e) { var i, n, r, a = new je,
        o = [],
        s = [],
        c = [],
        h = new je,
        l = new Ve; for (i = 0; i <= t; i++) n = i / t, o[i] = this.getTangentAt(n), o[i].normalize();
      s[0] = new je, c[0] = new je; var u = Number.MAX_VALUE,
        p = Math.abs(o[0].x),
        d = Math.abs(o[0].y),
        f = Math.abs(o[0].z); for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), c[i] = c[i - 1].clone(), h.crossVectors(o[i - 1], o[i]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(Ge.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(l.makeRotationAxis(h, r))), c[i].crossVectors(o[i], s[i]); if (!0 === e)
        for (r = Math.acos(Ge.clamp(s[0].dot(s[t]), -1, 1)), r /= t, 0 < o[0].dot(h.crossVectors(s[0], s[t])) && (r = -r), i = 1; i <= t; i++) s[i].applyMatrix4(l.makeRotationAxis(o[i], r * i)), c[i].crossVectors(o[i], s[i]); return { tangents: o, normals: s, binormals: c } }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this }, toJSON: function() { var t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t }, fromJSON: function(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } }), ((uc.prototype = Object.create(lc.prototype)).constructor = uc).prototype.isEllipseCurve = !0, uc.prototype.getPoint = function(t, e) { for (var i = e || new He, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n; for (; n < r;) r -= n;
    r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n); var o = this.aStartAngle + t * r,
      s = this.aX + this.xRadius * Math.cos(o),
      c = this.aY + this.yRadius * Math.sin(o); if (0 !== this.aRotation) { var h = Math.cos(this.aRotation),
        l = Math.sin(this.aRotation),
        u = s - this.aX,
        p = c - this.aY;
      s = u * h - p * l + this.aX, c = u * l + p * h + this.aY } return i.set(s, c) }, uc.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }, uc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t }, uc.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }, ((pc.prototype = Object.create(uc.prototype)).constructor = pc).prototype.isArcCurve = !0; var fc = new je,
    mc = new dc,
    gc = new dc,
    vc = new dc;

  function yc(t, e, i, n) { lc.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5 }

  function xc(t, e, i, n, r) { var a = .5 * (n - e),
      o = .5 * (r - i),
      s = t * t; return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i }

  function bc(t, e, i, n) { return (o = 1 - t) * o * e + 2 * (1 - (a = t)) * a * i + (r = t) * r * n; var r, a, o }

  function _c(t, e, i, n, r) { return (h = 1 - t) * h * h * e + 3 * (c = 1 - (s = t)) * c * s * i + 3 * (1 - (o = t)) * o * o * n + (a = t) * a * a * r; var a, o, s, c, h }

  function wc(t, e, i, n) { lc.call(this), this.type = "CubicBezierCurve", this.v0 = t || new He, this.v1 = e || new He, this.v2 = i || new He, this.v3 = n || new He }

  function Mc(t, e, i, n) { lc.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new je, this.v1 = e || new je, this.v2 = i || new je, this.v3 = n || new je }

  function Ec(t, e) { lc.call(this), this.type = "LineCurve", this.v1 = t || new He, this.v2 = e || new He }

  function Tc(t, e) { lc.call(this), this.type = "LineCurve3", this.v1 = t || new je, this.v2 = e || new je }

  function Sc(t, e, i) { lc.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new He, this.v1 = e || new He, this.v2 = i || new He }

  function Ac(t, e, i) { lc.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new je, this.v1 = e || new je, this.v2 = i || new je }

  function Lc(t) { lc.call(this), this.type = "SplineCurve", this.points = t || [] }((yc.prototype = Object.create(lc.prototype)).constructor = yc).prototype.isCatmullRomCurve3 = !0, yc.prototype.getPoint = function(t, e) { var i, n, r, a, o = e || new je,
      s = this.points,
      c = s.length,
      h = (c - (this.closed ? 0 : 1)) * t,
      l = Math.floor(h),
      u = h - l; if (this.closed ? l += 0 < l ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || 0 < l ? i = s[(l - 1) % c] : (fc.subVectors(s[0], s[1]).add(s[0]), i = fc), n = s[l % c], r = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (fc.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = fc), "centripetal" === this.curveType || "chordal" === this.curveType) { var p = "chordal" === this.curveType ? .5 : .25,
        d = Math.pow(i.distanceToSquared(n), p),
        f = Math.pow(n.distanceToSquared(r), p),
        m = Math.pow(r.distanceToSquared(a), p);
      f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), mc.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, d, f, m), gc.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, d, f, m), vc.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, d, f, m) } else "catmullrom" === this.curveType && (mc.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), gc.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), vc.initCatmullRom(i.z, n.z, r.z, a.z, this.tension)); return o.set(mc.calc(u), gc.calc(u), vc.calc(u)), o }, yc.prototype.copy = function(t) { lc.prototype.copy.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
      this.points.push(n.clone()) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this }, yc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this);
    t.points = []; for (var e = 0, i = this.points.length; e < i; e++) { var n = this.points[e];
      t.points.push(n.toArray()) } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t }, yc.prototype.fromJSON = function(t) { lc.prototype.fromJSON.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
      this.points.push((new je).fromArray(n)) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this }, ((wc.prototype = Object.create(lc.prototype)).constructor = wc).prototype.isCubicBezierCurve = !0, wc.prototype.getPoint = function(t, e) { var i = e || new He,
      n = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3; return i.set(_c(t, n.x, r.x, a.x, o.x), _c(t, n.y, r.y, a.y, o.y)), i }, wc.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }, wc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }, wc.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this }, ((Mc.prototype = Object.create(lc.prototype)).constructor = Mc).prototype.isCubicBezierCurve3 = !0, Mc.prototype.getPoint = function(t, e) { var i = e || new je,
      n = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3; return i.set(_c(t, n.x, r.x, a.x, o.x), _c(t, n.y, r.y, a.y, o.y), _c(t, n.z, r.z, a.z, o.z)), i }, Mc.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }, Mc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }, Mc.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this }, ((Ec.prototype = Object.create(lc.prototype)).constructor = Ec).prototype.isLineCurve = !0, Ec.prototype.getPoint = function(t, e) { var i = e || new He; return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i }, Ec.prototype.getPointAt = function(t, e) { return this.getPoint(t, e) }, Ec.prototype.getTangent = function() { return this.v2.clone().sub(this.v1).normalize() }, Ec.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Ec.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Ec.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, ((Tc.prototype = Object.create(lc.prototype)).constructor = Tc).prototype.isLineCurve3 = !0, Tc.prototype.getPoint = function(t, e) { var i = e || new je; return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i }, Tc.prototype.getPointAt = function(t, e) { return this.getPoint(t, e) }, Tc.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Tc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Tc.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, ((Sc.prototype = Object.create(lc.prototype)).constructor = Sc).prototype.isQuadraticBezierCurve = !0, Sc.prototype.getPoint = function(t, e) { var i = e || new He,
      n = this.v0,
      r = this.v1,
      a = this.v2; return i.set(bc(t, n.x, r.x, a.x), bc(t, n.y, r.y, a.y)), i }, Sc.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Sc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Sc.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, ((Ac.prototype = Object.create(lc.prototype)).constructor = Ac).prototype.isQuadraticBezierCurve3 = !0, Ac.prototype.getPoint = function(t, e) { var i = e || new je,
      n = this.v0,
      r = this.v1,
      a = this.v2; return i.set(bc(t, n.x, r.x, a.x), bc(t, n.y, r.y, a.y), bc(t, n.z, r.z, a.z)), i }, Ac.prototype.copy = function(t) { return lc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Ac.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Ac.prototype.fromJSON = function(t) { return lc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, ((Lc.prototype = Object.create(lc.prototype)).constructor = Lc).prototype.isSplineCurve = !0, Lc.prototype.getPoint = function(t, e) { var i = e || new He,
      n = this.points,
      r = (n.length - 1) * t,
      a = Math.floor(r),
      o = r - a,
      s = n[0 === a ? a : a - 1],
      c = n[a],
      h = n[a > n.length - 2 ? n.length - 1 : a + 1],
      l = n[a > n.length - 3 ? n.length - 1 : a + 2]; return i.set(xc(o, s.x, c.x, h.x, l.x), xc(o, s.y, c.y, h.y, l.y)), i }, Lc.prototype.copy = function(t) { lc.prototype.copy.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
      this.points.push(n.clone()) } return this }, Lc.prototype.toJSON = function() { var t = lc.prototype.toJSON.call(this);
    t.points = []; for (var e = 0, i = this.points.length; e < i; e++) { var n = this.points[e];
      t.points.push(n.toArray()) } return t }, Lc.prototype.fromJSON = function(t) { lc.prototype.fromJSON.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
      this.points.push((new He).fromArray(n)) } return this }; var Rc = Object.freeze({ ArcCurve: pc, CatmullRomCurve3: yc, CubicBezierCurve: wc, CubicBezierCurve3: Mc, EllipseCurve: uc, LineCurve: Ec, LineCurve3: Tc, QuadraticBezierCurve: Sc, QuadraticBezierCurve3: Ac, SplineCurve: Lc });

  function Cc() { lc.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1 }

  function Pc(t) { Cc.call(this), this.type = "Path", this.currentPoint = new He, t && this.setFromPoints(t) }

  function Oc(t) { Pc.call(this, t), this.uuid = Ge.generateUUID(), this.type = "Shape", this.holes = [] }

  function Ic(t, e) { Zi.call(this), this.type = "Light", this.color = new wi(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0 }

  function Nc(t, e, i) { Ic.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Zi.DefaultUp), this.updateMatrix(), this.groundColor = new wi(e) }

  function Dc(t) { this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new He(512, 512), this.map = null, this.matrix = new Ve }

  function Uc() { Dc.call(this, new ao(50, 1, .5, 500)) }

  function Bc(t, e, i, n, r, a) { Ic.call(this, t, e), this.type = "SpotLight", this.position.copy(Zi.DefaultUp), this.updateMatrix(), this.target = new Zi, Object.defineProperty(this, "power", { get: function() { return this.intensity * Math.PI }, set: function(t) { this.intensity = t / Math.PI } }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Uc }

  function Fc(t, e, i, n) { Ic.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", { get: function() { return 4 * this.intensity * Math.PI }, set: function(t) { this.intensity = t / (4 * Math.PI) } }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Dc(new ao(90, 1, .5, 500)) }

  function zc() { Dc.call(this, new Ki(-5, 5, 5, -5, .5, 500)) }

  function Gc(t, e) { Ic.call(this, t, e), this.type = "DirectionalLight", this.position.copy(Zi.DefaultUp), this.updateMatrix(), this.target = new Zi, this.shadow = new zc }

  function Hc(t, e) { Ic.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0 }

  function Vc(t, e, i, n) { Ic.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10 } Cc.prototype = Object.assign(Object.create(lc.prototype), { constructor: Cc, add: function(t) { this.curves.push(t) }, closePath: function() { var t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new Ec(e, t)) }, getPoint: function(t) { for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) { if (i[n] >= e) { var r = i[n] - e,
            a = this.curves[n],
            o = a.getLength(),
            s = 0 === o ? 0 : 1 - r / o; return a.getPointAt(s) } n++ } return null }, getLength: function() { var t = this.getCurveLengths(); return t[t.length - 1] }, updateArcLengths: function() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() }, getCurveLengths: function() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e); return this.cacheLengths = t }, getSpacedPoints: function(t) { void 0 === t && (t = 40); for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t)); return this.autoClose && e.push(e[0]), e }, getPoints: function(t) { t = t || 12; for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
        for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) { var h = s[c];
          e && e.equals(h) || (i.push(h), e = h) }
      return this.autoClose && 1 < i.length && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i }, copy: function(t) { lc.prototype.copy.call(this, t), this.curves = []; for (var e = 0, i = t.curves.length; e < i; e++) { var n = t.curves[e];
        this.curves.push(n.clone()) } return this.autoClose = t.autoClose, this }, toJSON: function() { var t = lc.prototype.toJSON.call(this);
      t.autoClose = this.autoClose, t.curves = []; for (var e = 0, i = this.curves.length; e < i; e++) { var n = this.curves[e];
        t.curves.push(n.toJSON()) } return t }, fromJSON: function(t) { lc.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = []; for (var e = 0, i = t.curves.length; e < i; e++) { var n = t.curves[e];
        this.curves.push((new Rc[n.type]).fromJSON(n)) } return this } }), Pc.prototype = Object.assign(Object.create(Cc.prototype), { constructor: Pc, setFromPoints: function(t) { this.moveTo(t[0].x, t[0].y); for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y) }, moveTo: function(t, e) { this.currentPoint.set(t, e) }, lineTo: function(t, e) { var i = new Ec(this.currentPoint.clone(), new He(t, e));
      this.curves.push(i), this.currentPoint.set(t, e) }, quadraticCurveTo: function(t, e, i, n) { var r = new Sc(this.currentPoint.clone(), new He(t, e), new He(i, n));
      this.curves.push(r), this.currentPoint.set(i, n) }, bezierCurveTo: function(t, e, i, n, r, a) { var o = new wc(this.currentPoint.clone(), new He(t, e), new He(i, n), new He(r, a));
      this.curves.push(o), this.currentPoint.set(r, a) }, splineThru: function(t) { var e = new Lc([this.currentPoint.clone()].concat(t));
      this.curves.push(e), this.currentPoint.copy(t[t.length - 1]) }, arc: function(t, e, i, n, r, a) { var o = this.currentPoint.x,
        s = this.currentPoint.y;
      this.absarc(t + o, e + s, i, n, r, a) }, absarc: function(t, e, i, n, r, a) { this.absellipse(t, e, i, i, n, r, a) }, ellipse: function(t, e, i, n, r, a, o, s) { var c = this.currentPoint.x,
        h = this.currentPoint.y;
      this.absellipse(t + c, e + h, i, n, r, a, o, s) }, absellipse: function(t, e, i, n, r, a, o, s) { var c = new uc(t, e, i, n, r, a, o, s); if (0 < this.curves.length) { var h = c.getPoint(0);
        h.equals(this.currentPoint) || this.lineTo(h.x, h.y) } this.curves.push(c); var l = c.getPoint(1);
      this.currentPoint.copy(l) }, copy: function(t) { return Cc.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this }, toJSON: function() { var t = Cc.prototype.toJSON.call(this); return t.currentPoint = this.currentPoint.toArray(), t }, fromJSON: function(t) { return Cc.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this } }), Oc.prototype = Object.assign(Object.create(Pc.prototype), { constructor: Oc, getPointsHoles: function(t) { for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t); return e }, extractPoints: function(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) } }, copy: function(t) { Pc.prototype.copy.call(this, t), this.holes = []; for (var e = 0, i = t.holes.length; e < i; e++) { var n = t.holes[e];
        this.holes.push(n.clone()) } return this }, toJSON: function() { var t = Pc.prototype.toJSON.call(this);
      t.uuid = this.uuid, t.holes = []; for (var e = 0, i = this.holes.length; e < i; e++) { var n = this.holes[e];
        t.holes.push(n.toJSON()) } return t }, fromJSON: function(t) { Pc.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = []; for (var e = 0, i = t.holes.length; e < i; e++) { var n = t.holes[e];
        this.holes.push((new Pc).fromJSON(n)) } return this } }), Ic.prototype = Object.assign(Object.create(Zi.prototype), { constructor: Ic, isLight: !0, copy: function(t) { return Zi.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this }, toJSON: function(t) { var e = Zi.prototype.toJSON.call(this, t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e } }), Nc.prototype = Object.assign(Object.create(Ic.prototype), { constructor: Nc, isHemisphereLight: !0, copy: function(t) { return Ic.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this } }), Object.assign(Dc.prototype, { copy: function(t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this }, clone: function() { return (new this.constructor).copy(this) }, toJSON: function() { var t = {}; return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t } }), Uc.prototype = Object.assign(Object.create(Dc.prototype), { constructor: Uc, isSpotLightShadow: !0, update: function(t) { var e = this.camera,
        i = 2 * Ge.RAD2DEG * t.angle,
        n = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()) } }), Bc.prototype = Object.assign(Object.create(Ic.prototype), { constructor: Bc, isSpotLight: !0, copy: function(t) { return Ic.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }), Fc.prototype = Object.assign(Object.create(Ic.prototype), { constructor: Fc, isPointLight: !0, copy: function(t) { return Ic.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this } }), zc.prototype = Object.assign(Object.create(Dc.prototype), { constructor: zc }), Gc.prototype = Object.assign(Object.create(Ic.prototype), { constructor: Gc, isDirectionalLight: !0, copy: function(t) { return Ic.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }), Hc.prototype = Object.assign(Object.create(Ic.prototype), { constructor: Hc, isAmbientLight: !0 }), Vc.prototype = Object.assign(Object.create(Ic.prototype), { constructor: Vc, isRectAreaLight: !0, copy: function(t) { return Ic.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this }, toJSON: function(t) { var e = Ic.prototype.toJSON.call(this, t); return e.object.width = this.width, e.object.height = this.height, e } }); var kc = { arraySlice: function(t, e, i) { return kc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i) }, convertArray: function(t, e, i) { return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) }, isTypedArray: function(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }, getKeyframeOrder: function(i) { for (var t = i.length, e = new Array(t), n = 0; n !== t; ++n) e[n] = n; return e.sort(function(t, e) { return i[t] - i[e] }), e }, sortedArray: function(t, e, i) { for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
        for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c]; return r }, flattenJSON: function(t, e, i, n) { for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++]; if (void 0 !== a) { var o = a[n]; if (void 0 !== o)
          if (Array.isArray(o))
            for (; void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), void 0 !== (a = t[r++]););
          else if (void 0 !== o.toArray)
          for (; void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), void 0 !== (a = t[r++]););
        else
          for (; void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), void 0 !== (a = t[r++]);); } } };

  function jc(t, e, i, n) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i }

  function Wc(t, e, i, n) { jc.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0 }

  function Xc(t, e, i, n) { jc.call(this, t, e, i, n) }

  function qc(t, e, i, n) { jc.call(this, t, e, i, n) }

  function Yc(t, e, i, n) { if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = kc.convertArray(e, this.TimeBufferType), this.values = kc.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation) }

  function Jc(t, e, i) { Yc.call(this, t, e, i) }

  function Zc(t, e, i, n) { Yc.call(this, t, e, i, n) }

  function Qc(t, e, i, n) { Yc.call(this, t, e, i, n) }

  function Kc(t, e, i, n) { jc.call(this, t, e, i, n) }

  function $c(t, e, i, n) { Yc.call(this, t, e, i, n) }

  function th(t, e, i, n) { Yc.call(this, t, e, i, n) }

  function eh(t, e, i, n) { Yc.call(this, t, e, i, n) }

  function ih(t, e, i) { this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = Ge.generateUUID(), this.duration < 0 && this.resetDuration() }

  function nh(t) { if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); var e = function(t) { switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return Qc;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return eh;
        case "color":
          return Zc;
        case "quaternion":
          return $c;
        case "bool":
        case "boolean":
          return Jc;
        case "string":
          return th } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t) }(t.type); if (void 0 === t.times) { var i = [],
        n = [];
      kc.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n } return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation) }

  function rh(t) { this.manager = void 0 !== t ? t : ic, this.textures = {} }

  function ah(t) { this.manager = void 0 !== t ? t : ic } Object.assign(jc.prototype, { evaluate: function(t) { var e = this.parameterPositions,
        i = this._cachedIndex,
        n = e[i],
        r = e[i - 1];
      t: { e: { var a;i: { n: if (!(t < n)) { for (var o = i + 2;;) { if (void 0 === n) { if (t < r) break n; return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r) } if (i === o) break; if (r = n, t < (n = e[++i])) break e } a = e.length; break i } if (r <= t) break t; var s = e[1];t < s && (i = 2, r = s); for (o = i - 2;;) { if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n); if (i === o) break; if (n = r, (r = e[--i - 1]) <= t) break e } a = i, i = 0 } for (; i < a;) { var c = i + a >>> 1;
            t < e[c] ? a = c : i = c + 1 } if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, n); if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t) } this._cachedIndex = i, this.intervalChanged_(i, r, n) }
      return this.interpolate_(i, r, t, n) }, settings: null, DefaultSettings_: {}, getSettings_: function() { return this.settings || this.DefaultSettings_ }, copySampleValue_: function(t) { for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a]; return e }, interpolate_: function() { throw new Error("call to abstract method") }, intervalChanged_: function() {} }), Object.assign(jc.prototype, { beforeStart_: jc.prototype.copySampleValue_, afterEnd_: jc.prototype.copySampleValue_ }), Wc.prototype = Object.assign(Object.create(jc.prototype), { constructor: Wc, DefaultSettings_: { endingStart: Te, endingEnd: Te }, intervalChanged_: function(t, e, i) { var n = this.parameterPositions,
        r = t - 2,
        a = t + 1,
        o = n[r],
        s = n[a]; if (void 0 === o) switch (this.getSettings_().endingStart) {
        case Se:
          r = t, o = 2 * e - i; break;
        case Ae:
          o = e + n[r = n.length - 2] - n[r + 1]; break;
        default:
          r = t, o = i }
      if (void 0 === s) switch (this.getSettings_().endingEnd) {
        case Se:
          a = t, s = 2 * i - e; break;
        case Ae:
          s = i + n[a = 1] - n[0]; break;
        default:
          a = t - 1, s = e }
      var c = .5 * (i - e),
        h = this.valueSize;
      this._weightPrev = c / (e - o), this._weightNext = c / (s - i), this._offsetPrev = r * h, this._offsetNext = a * h }, interpolate_: function(t, e, i, n) { for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b]; return r } }), Xc.prototype = Object.assign(Object.create(jc.prototype), { constructor: Xc, interpolate_: function(t, e, i, n) { for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h; return r } }), qc.prototype = Object.assign(Object.create(jc.prototype), { constructor: qc, interpolate_: function(t) { return this.copySampleValue_(t - 1) } }), Object.assign(Yc, { toJSON: function(t) { var e, i = t.constructor; if (void 0 !== i.toJSON) e = i.toJSON(t);
      else { e = { name: t.name, times: kc.convertArray(t.times, Array), values: kc.convertArray(t.values, Array) }; var n = t.getInterpolation();
        n !== t.DefaultInterpolation && (e.interpolation = n) } return e.type = t.ValueTypeName, e } }), Object.assign(Yc.prototype, { constructor: Yc, TimeBufferType: Float32Array, ValueBufferType: Float32Array, DefaultInterpolation: Ee, InterpolantFactoryMethodDiscrete: function(t) { return new qc(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodLinear: function(t) { return new Xc(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodSmooth: function(t) { return new Wc(this.times, this.values, this.getValueSize(), t) }, setInterpolation: function(t) { var e; switch (t) {
        case Me:
          e = this.InterpolantFactoryMethodDiscrete; break;
        case Ee:
          e = this.InterpolantFactoryMethodLinear; break;
        case 2302:
          e = this.InterpolantFactoryMethodSmooth } if (void 0 === e) { var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (void 0 === this.createInterpolant) { if (t === this.DefaultInterpolation) throw new Error(i);
          this.setInterpolation(this.DefaultInterpolation) } return console.warn("THREE.KeyframeTrack:", i), this } return this.createInterpolant = e, this }, getInterpolation: function() { switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Me;
        case this.InterpolantFactoryMethodLinear:
          return Ee;
        case this.InterpolantFactoryMethodSmooth:
          return 2302 } }, getValueSize: function() { return this.values.length / this.times.length }, shift: function(t) { if (0 !== t)
        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t; return this }, scale: function(t) { if (1 !== t)
        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t; return this }, trim: function(t, e) { for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r; for (; - 1 !== a && i[a] > e;) --a; if (++a, 0 !== r || a !== n) { a <= r && (r = (a = Math.max(a, 1)) - 1); var o = this.getValueSize();
        this.times = kc.arraySlice(i, r, a), this.values = kc.arraySlice(this.values, r * o, a * o) } return this }, validate: function() { var t = !0,
        e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1); var i = this.times,
        n = this.values,
        r = i.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1); for (var a = null, o = 0; o !== r; o++) { var s = i[o]; if ("number" == typeof s && isNaN(s)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1; break } if (null !== a && s < a) { console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1; break } a = s } if (void 0 !== n && kc.isTypedArray(n)) { o = 0; for (var c = n.length; o !== c; ++o) { var h = n[o]; if (isNaN(h)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), t = !1; break } } } return t }, optimize: function() { for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) { var s = !1,
          c = t[o]; if (c !== t[o + 1] && (1 !== o || c !== c[0]))
          if (n) s = !0;
          else
            for (var h = o * i, l = h - i, u = h + i, p = 0; p !== i; ++p) { var d = e[h + p]; if (d !== e[l + p] || d !== e[u + p]) { s = !0; break } }
        if (s) { if (o !== r) { t[r] = t[o]; var f = o * i,
              m = r * i; for (p = 0; p !== i; ++p) e[m + p] = e[f + p] }++r } } if (0 < a) { t[r] = t[a]; for (f = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[f + p];++r } return r !== t.length && (this.times = kc.arraySlice(t, 0, r), this.values = kc.arraySlice(e, 0, r * i)), this } }), Jc.prototype = Object.assign(Object.create(Yc.prototype), { constructor: Jc, ValueTypeName: "bool", ValueBufferType: Array, DefaultInterpolation: Me, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 }), Zc.prototype = Object.assign(Object.create(Yc.prototype), { constructor: Zc, ValueTypeName: "color" }), Qc.prototype = Object.assign(Object.create(Yc.prototype), { constructor: Qc, ValueTypeName: "number" }), Kc.prototype = Object.assign(Object.create(jc.prototype), { constructor: Kc, interpolate_: function(t, e, i, n) { for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (i - e) / (n - e), h = s + o; s !== h; s += 4) ke.slerpFlat(r, 0, a, s - o, a, s, c); return r } }), $c.prototype = Object.assign(Object.create(Yc.prototype), { constructor: $c, ValueTypeName: "quaternion", DefaultInterpolation: Ee, InterpolantFactoryMethodLinear: function(t) { return new Kc(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodSmooth: void 0 }), th.prototype = Object.assign(Object.create(Yc.prototype), { constructor: th, ValueTypeName: "string", ValueBufferType: Array, DefaultInterpolation: Me, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 }), eh.prototype = Object.assign(Object.create(Yc.prototype), { constructor: eh, ValueTypeName: "vector" }), Object.assign(ih, { parse: function(t) { for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(nh(i[r]).scale(n)); return new ih(t.name, t.duration, e) }, toJSON: function(t) { for (var e = [], i = t.tracks, n = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid }, r = 0, a = i.length; r !== a; ++r) e.push(Yc.toJSON(i[r])); return n }, CreateFromMorphTargetSequence: function(t, e, i, n) { for (var r = e.length, a = [], o = 0; o < r; o++) { var s = [],
          c = [];
        s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0); var h = kc.getKeyframeOrder(s);
        s = kc.sortedArray(s, 1, h), c = kc.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new Qc(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / i)) } return new ih(t, -1, a) }, findByName: function(t, e) { var i = t; if (!Array.isArray(t)) { var n = t;
        i = n.geometry && n.geometry.animations || n.animations } for (var r = 0; r < i.length; r++)
        if (i[r].name === e) return i[r]; return null }, CreateClipsFromMorphTargetSequences: function(t, e, i) { for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) { var s = t[a],
          c = s.name.match(r); if (c && 1 < c.length) { var h = n[u = c[1]];
          h || (n[u] = h = []), h.push(s) } } var l = []; for (var u in n) l.push(ih.CreateFromMorphTargetSequence(u, n[u], e, i)); return l }, parseAnimation: function(t, e) { if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; for (var i = function(t, e, i, n, r) { if (0 !== i.length) { var a = [],
              o = [];
            kc.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o)) } }, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) { var h = s[c].keys; if (h && 0 !== h.length)
          if (h[0].morphTargets) { for (var l = {}, u = 0; u < h.length; u++)
              if (h[u].morphTargets)
                for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[p]] = -1; for (var d in l) { var f = [],
                m = []; for (p = 0; p !== h[u].morphTargets.length; ++p) { var g = h[u];
                f.push(g.time), m.push(g.morphTarget === d ? 1 : 0) } n.push(new Qc(".morphTargetInfluence[" + d + "]", f, m)) } a = l.length * (o || 1) }
        else { var v = ".bones[" + e[c].name + "]";
          i(eh, v + ".position", h, "pos", n), i($c, v + ".quaternion", h, "rot", n), i(eh, v + ".scale", h, "scl", n) } } return 0 === n.length ? null : new ih(r, a, n) } }), Object.assign(ih.prototype, { resetDuration: function() { for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) { var n = this.tracks[e];
        t = Math.max(t, n.times[n.times.length - 1]) } return this.duration = t, this }, trim: function() { for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration); return this }, validate: function() { for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate(); return t }, optimize: function() { for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize(); return this } }), Object.assign(rh.prototype, { load: function(t, e, i, n) { var r = this;
      new rc(r.manager).load(t, function(t) { e(r.parse(JSON.parse(t))) }, i, n) }, setTextures: function(t) { this.textures = t }, parse: function(t) { var e = this.textures;

      function i(t) { return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t] } var n = new $s[t.type]; if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (n.uniforms = t.uniforms), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) { var r = t.normalScale;!1 === Array.isArray(r) && (r = [r, r]), n.normalScale = (new He).fromArray(r) } return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), n } }), Object.assign(ah.prototype, { load: function(t, e, i, n) { var r = this;
      new rc(r.manager).load(t, function(t) { e(r.parse(JSON.parse(t))) }, i, n) }, parse: function(t) { var e = new In,
        i = t.data.index; if (void 0 !== i) { var n = new lh[i.type](i.array);
        e.setIndex(new ln(n, 1)) } var r = t.data.attributes; for (var a in r) { var o = r[a];
        n = new lh[o.type](o.array);
        e.addAttribute(a, new ln(n, o.itemSize, o.normalized)) } var s = t.data.groups || t.data.drawcalls || t.data.offsets; if (void 0 !== s)
        for (var c = 0, h = s.length; c !== h; ++c) { var l = s[c];
          e.addGroup(l.start, l.count, l.materialIndex) }
      var u = t.data.boundingSphere; if (void 0 !== u) { var p = new je;
        void 0 !== u.center && p.fromArray(u.center), e.boundingSphere = new mi(p, u.radius) } return e } }); var oh, sh, ch, hh, lh = { Int8Array: Int8Array, Uint8Array: Uint8Array, Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array, Int16Array: Int16Array, Uint16Array: Uint16Array, Int32Array: Int32Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array };

  function uh() {} uh.Handlers = { handlers: [], add: function(t, e) { this.handlers.push(t, e) }, get: function(t) { for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) { var r = e[i],
          a = e[i + 1]; if (r.test(t)) return a } return null } }, Object.assign(uh.prototype, { crossOrigin: "anonymous", onLoadStart: function() {}, onLoadProgress: function() {}, onLoadComplete: function() {}, initMaterials: function(t, e, i) { for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i); return n }, createMaterial: (oh = { NoBlending: Y, NormalBlending: J, AdditiveBlending: Z, SubtractiveBlending: Q, MultiplyBlending: K, CustomBlending: $ }, sh = new wi, ch = new hc, hh = new rh, function(t, h, l) { var u = {};

      function e(t, e, i, n, r) { var a, o = h + t,
          s = uh.Handlers.get(o);
        null !== s ? a = s.load(o) : (ch.setCrossOrigin(l), a = ch.load(o)), void 0 !== e && (a.repeat.fromArray(e), 1 !== e[0] && (a.wrapS = Tt), 1 !== e[1] && (a.wrapT = Tt)), void 0 !== i && a.offset.fromArray(i), void 0 !== n && ("repeat" === n[0] && (a.wrapS = Tt), "mirror" === n[0] && (a.wrapS = At), "repeat" === n[1] && (a.wrapT = Tt), "mirror" === n[1] && (a.wrapT = At)), void 0 !== r && (a.anisotropy = r); var c = Ge.generateUUID(); return u[c] = a, c } var i = { uuid: Ge.generateUUID(), type: "MeshLambertMaterial" }; for (var n in t) { var r = t[n]; switch (n) {
          case "DbgColor":
          case "DbgIndex":
          case "opticalDensity":
          case "illumination":
            break;
          case "DbgName":
            i.name = r; break;
          case "blending":
            i.blending = oh[r]; break;
          case "colorAmbient":
          case "mapAmbient":
            console.warn("THREE.Loader.createMaterial:", n, "is no longer supported."); break;
          case "colorDiffuse":
            i.color = sh.fromArray(r).getHex(); break;
          case "colorSpecular":
            i.specular = sh.fromArray(r).getHex(); break;
          case "colorEmissive":
            i.emissive = sh.fromArray(r).getHex(); break;
          case "specularCoef":
            i.shininess = r; break;
          case "shading":
            "basic" === r.toLowerCase() && (i.type = "MeshBasicMaterial"), "phong" === r.toLowerCase() && (i.type = "MeshPhongMaterial"), "standard" === r.toLowerCase() && (i.type = "MeshStandardMaterial"); break;
          case "mapDiffuse":
            i.map = e(r, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy); break;
          case "mapDiffuseRepeat":
          case "mapDiffuseOffset":
          case "mapDiffuseWrap":
          case "mapDiffuseAnisotropy":
            break;
          case "mapEmissive":
            i.emissiveMap = e(r, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy); break;
          case "mapEmissiveRepeat":
          case "mapEmissiveOffset":
          case "mapEmissiveWrap":
          case "mapEmissiveAnisotropy":
            break;
          case "mapLight":
            i.lightMap = e(r, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy); break;
          case "mapLightRepeat":
          case "mapLightOffset":
          case "mapLightWrap":
          case "mapLightAnisotropy":
            break;
          case "mapAO":
            i.aoMap = e(r, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy); break;
          case "mapAORepeat":
          case "mapAOOffset":
          case "mapAOWrap":
          case "mapAOAnisotropy":
            break;
          case "mapBump":
            i.bumpMap = e(r, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy); break;
          case "mapBumpScale":
            i.bumpScale = r; break;
          case "mapBumpRepeat":
          case "mapBumpOffset":
          case "mapBumpWrap":
          case "mapBumpAnisotropy":
            break;
          case "mapNormal":
            i.normalMap = e(r, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy); break;
          case "mapNormalFactor":
            i.normalScale = r; break;
          case "mapNormalRepeat":
          case "mapNormalOffset":
          case "mapNormalWrap":
          case "mapNormalAnisotropy":
            break;
          case "mapSpecular":
            i.specularMap = e(r, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy); break;
          case "mapSpecularRepeat":
          case "mapSpecularOffset":
          case "mapSpecularWrap":
          case "mapSpecularAnisotropy":
            break;
          case "mapMetalness":
            i.metalnessMap = e(r, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy); break;
          case "mapMetalnessRepeat":
          case "mapMetalnessOffset":
          case "mapMetalnessWrap":
          case "mapMetalnessAnisotropy":
            break;
          case "mapRoughness":
            i.roughnessMap = e(r, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy); break;
          case "mapRoughnessRepeat":
          case "mapRoughnessOffset":
          case "mapRoughnessWrap":
          case "mapRoughnessAnisotropy":
            break;
          case "mapAlpha":
            i.alphaMap = e(r, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy); break;
          case "mapAlphaRepeat":
          case "mapAlphaOffset":
          case "mapAlphaWrap":
          case "mapAlphaAnisotropy":
            break;
          case "flipSided":
            i.side = wt; break;
          case "doubleSided":
            i.side = et; break;
          case "transparency":
            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), i.opacity = r; break;
          case "depthTest":
          case "depthWrite":
          case "colorWrite":
          case "opacity":
          case "reflectivity":
          case "transparent":
          case "visible":
          case "wireframe":
            i[n] = r; break;
          case "vertexColors":
            !0 === r && (i.vertexColors = T), "face" === r && (i.vertexColors = 1); break;
          default:
            console.error("THREE.Loader.createMaterial: Unsupported", n, r) } } return "MeshBasicMaterial" === i.type && delete i.emissive, "MeshPhongMaterial" !== i.type && delete i.specular, i.opacity < 1 && (i.transparent = !0), hh.setTextures(u), hh.parse(i) }) }); var ph = { decodeText: function(t) { if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t); for (var e = "", i = 0, n = t.length; i < n; i++) e += String.fromCharCode(t[i]); return decodeURIComponent(escape(e)) }, extractUrlBase: function(t) { var e = t.lastIndexOf("/"); return -1 === e ? "./" : t.substr(0, e + 1) } };

  function dh(t) { "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : ic, this.withCredentials = !1 }

  function fh(t) { this.manager = void 0 !== t ? t : ic, this.texturePath = "" } Object.assign(dh.prototype, { crossOrigin: "anonymous", load: function(a, o, t, e) { var s = this,
        c = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : ph.extractUrlBase(a),
        i = new rc(this.manager);
      i.setWithCredentials(this.withCredentials), i.load(a, function(t) { var e = JSON.parse(t),
          i = e.metadata; if (void 0 !== i) { var n = i.type; if (void 0 !== n && "object" === n.toLowerCase()) return void console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.ObjectLoader instead.") } var r = s.parse(e, c);
        o(r.geometry, r.materials) }, t, e) }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setTexturePath: function(t) { return this.texturePath = t, this }, parse: function(t, e) { void 0 !== t.data && (t = t.data), void 0 !== t.scale ? t.scale = 1 / t.scale : t.scale = 1; var i = new hn; return function(t, e) {
          function i(t, e) { return t & 1 << e } var n, r, a, o, s, c, h, l, u, p, d, f, m, g, v, y, x, b, _, w, M, E, T, S, A, L = t.faces,
            R = t.vertices,
            C = t.normals,
            P = t.colors,
            O = t.scale,
            I = 0; if (void 0 !== t.uvs) { for (n = 0; n < t.uvs.length; n++) t.uvs[n].length && I++; for (n = 0; n < I; n++) e.faceVertexUvs[n] = [] } for (o = 0, s = R.length; o < s;)(b = new je).x = R[o++] * O, b.y = R[o++] * O, b.z = R[o++] * O, e.vertices.push(b); for (o = 0, s = L.length; o < s;)
            if (d = i(p = L[o++], 0), f = i(p, 1), m = i(p, 3), g = i(p, 4), v = i(p, 5), y = i(p, 6), x = i(p, 7), d) { if ((w = new $i).a = L[o], w.b = L[o + 1], w.c = L[o + 3], (M = new $i).a = L[o + 1], M.b = L[o + 2], M.c = L[o + 3], o += 4, f && (u = L[o++], w.materialIndex = u, M.materialIndex = u), a = e.faces.length, m)
                for (n = 0; n < I; n++)
                  for (S = t.uvs[n], e.faceVertexUvs[n][a] = [], e.faceVertexUvs[n][a + 1] = [], r = 0; r < 4; r++) A = new He(S[2 * (l = L[o++])], S[2 * l + 1]), 2 !== r && e.faceVertexUvs[n][a].push(A), 0 !== r && e.faceVertexUvs[n][a + 1].push(A); if (g && (h = 3 * L[o++], w.normal.set(C[h++], C[h++], C[h]), M.normal.copy(w.normal)), v)
                for (n = 0; n < 4; n++) h = 3 * L[o++], T = new je(C[h++], C[h++], C[h]), 2 !== n && w.vertexNormals.push(T), 0 !== n && M.vertexNormals.push(T); if (y && (E = P[c = L[o++]], w.color.setHex(E), M.color.setHex(E)), x)
                for (n = 0; n < 4; n++) E = P[c = L[o++]], 2 !== n && w.vertexColors.push(new wi(E)), 0 !== n && M.vertexColors.push(new wi(E));
              e.faces.push(w), e.faces.push(M) }
          else { if ((_ = new $i).a = L[o++], _.b = L[o++], _.c = L[o++], f && (u = L[o++], _.materialIndex = u), a = e.faces.length, m)
              for (n = 0; n < I; n++)
                for (S = t.uvs[n], e.faceVertexUvs[n][a] = [], r = 0; r < 3; r++) A = new He(S[2 * (l = L[o++])], S[2 * l + 1]), e.faceVertexUvs[n][a].push(A); if (g && (h = 3 * L[o++], _.normal.set(C[h++], C[h++], C[h])), v)
              for (n = 0; n < 3; n++) h = 3 * L[o++], T = new je(C[h++], C[h++], C[h]), _.vertexNormals.push(T); if (y && (c = L[o++], _.color.setHex(P[c])), x)
              for (n = 0; n < 3; n++) c = L[o++], _.vertexColors.push(new wi(P[c]));
            e.faces.push(_) } }(t, i),
        function(t, e) { var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2; if (t.skinWeights)
            for (var n = 0, r = t.skinWeights.length; n < r; n += i) { var a = t.skinWeights[n],
                o = 1 < i ? t.skinWeights[n + 1] : 0,
                s = 2 < i ? t.skinWeights[n + 2] : 0,
                c = 3 < i ? t.skinWeights[n + 3] : 0;
              e.skinWeights.push(new li(a, o, s, c)) }
          if (t.skinIndices)
            for (n = 0, r = t.skinIndices.length; n < r; n += i) { var h = t.skinIndices[n],
                l = 1 < i ? t.skinIndices[n + 1] : 0,
                u = 2 < i ? t.skinIndices[n + 2] : 0,
                p = 3 < i ? t.skinIndices[n + 3] : 0;
              e.skinIndices.push(new li(h, l, u, p)) } e.bones = t.bones, e.bones && 0 < e.bones.length && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.") }(t, i),
        function(t, e) { var i = t.scale; if (void 0 !== t.morphTargets)
            for (var n = 0, r = t.morphTargets.length; n < r; n++) { e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = []; for (var a = e.morphTargets[n].vertices, o = t.morphTargets[n].vertices, s = 0, c = o.length; s < c; s += 3) { var h = new je;
                h.x = o[s] * i, h.y = o[s + 1] * i, h.z = o[s + 2] * i, a.push(h) } }
          if (void 0 !== t.morphColors && 0 < t.morphColors.length) { console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'); var l = e.faces,
              u = t.morphColors[0].colors; for (n = 0, r = l.length; n < r; n++) l[n].color.fromArray(u, 3 * n) } }(t, i),
        function(t, e) { var i = [],
            n = [];
          void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations)); for (var r = 0; r < n.length; r++) { var a = ih.parseAnimation(n[r], e.bones);
            a && i.push(a) } if (e.morphTargets) { var o = ih.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
            i = i.concat(o) } 0 < i.length && (e.animations = i) }(t, i), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length ? { geometry: i } : { geometry: i, materials: uh.prototype.initMaterials(t.materials, e, this.crossOrigin) } } }), Object.assign(fh.prototype, { crossOrigin: "anonymous", load: function(n, r, t, a) { "" === this.texturePath && (this.texturePath = n.substring(0, n.lastIndexOf("/") + 1)); var o = this;
      new rc(o.manager).load(n, function(t) { var e = null; try { e = JSON.parse(t) } catch (t) { return void 0 !== a && a(t), void console.error("THREE:ObjectLoader: Can't parse " + n + ".", t.message) } var i = e.metadata;
        void 0 !== i && void 0 !== i.type && "geometry" !== i.type.toLowerCase() ? o.parse(e, r) : console.error("THREE.ObjectLoader: Can't load " + n + ". Use THREE.JSONLoader instead.") }, t, a) }, setTexturePath: function(t) { return this.texturePath = t, this }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, parse: function(t, e) { var i = this.parseShape(t.shapes),
        n = this.parseGeometries(t.geometries, i),
        r = this.parseImages(t.images, function() { void 0 !== e && e(s) }),
        a = this.parseTextures(t.textures, r),
        o = this.parseMaterials(t.materials, a),
        s = this.parseObject(t.object, n, o); return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s }, parseShape: function(t) { var e = {}; if (void 0 !== t)
        for (var i = 0, n = t.length; i < n; i++) { var r = (new Oc).fromJSON(t[i]);
          e[r.uuid] = r }
      return e }, parseGeometries: function(t, e) { var i = {}; if (void 0 !== t)
        for (var n = new dh, r = new ah, a = 0, o = t.length; a < o; a++) { var s, c = t[a]; switch (c.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              s = new ks[c.type](c.width, c.height, c.widthSegments, c.heightSegments); break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              s = new ks[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments); break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              s = new ks[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength); break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              s = new ks[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength); break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              s = new ks[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength); break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              s = new ks[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength); break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              s = new ks[c.type](c.radius, c.detail); break;
            case "RingGeometry":
            case "RingBufferGeometry":
              s = new ks[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength); break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              s = new ks[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc); break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              s = new ks[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q); break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              s = new ks[c.type](c.points, c.segments, c.phiStart, c.phiLength); break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              s = new ks[c.type](c.vertices, c.indices, c.radius, c.details); break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              for (var h = [], l = 0, u = c.shapes.length; l < u; l++) { var p = e[c.shapes[l]];
                h.push(p) } s = new ks[c.type](h, c.curveSegments); break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              for (h = [], l = 0, u = c.shapes.length; l < u; l++) { p = e[c.shapes[l]];
                h.push(p) } var d = c.options.extrudePath;
              void 0 !== d && (c.options.extrudePath = (new Rc[d.type]).fromJSON(d)), s = new ks[c.type](h, c.options); break;
            case "BufferGeometry":
              s = r.parse(c); break;
            case "Geometry":
              s = n.parse(c, this.texturePath).geometry; break;
            default:
              console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"'); continue } s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), !0 === s.isBufferGeometry && void 0 !== c.userData && (s.userData = c.userData), i[c.uuid] = s }
      return i }, parseMaterials: function(t, e) { var i = {}; if (void 0 !== t) { var n = new rh;
        n.setTextures(e); for (var r = 0, a = t.length; r < a; r++) { var o = t[r]; if ("MultiMaterial" === o.type) { for (var s = [], c = 0; c < o.materials.length; c++) s.push(n.parse(o.materials[c]));
            i[o.uuid] = s } else i[o.uuid] = n.parse(o) } } return i }, parseAnimations: function(t) { for (var e = [], i = 0; i < t.length; i++) { var n = t[i],
          r = ih.parse(n);
        void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r) } return e }, parseImages: function(t, e) { var i = this,
        n = {};

      function r(t) { return i.manager.itemStart(t), a.load(t, function() { i.manager.itemEnd(t) }, void 0, function() { i.manager.itemEnd(t), i.manager.itemError(t) }) } if (void 0 !== t && 0 < t.length) { var a = new sc(new ec(e));
        a.setCrossOrigin(this.crossOrigin); for (var o = 0, s = t.length; o < s; o++) { var c = t[o],
            h = c.url; if (Array.isArray(h)) { n[c.uuid] = []; for (var l = 0, u = h.length; l < u; l++) { var p = h[l],
                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : i.texturePath + p;
              n[c.uuid].push(r(d)) } } else { d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : i.texturePath + c.url;
            n[c.uuid] = r(d) } } } return n }, parseTextures: function(t, e) {
      function i(t, e) { return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]) } var n = {}; if (void 0 !== t)
        for (var r = 0, a = t.length; r < a; r++) { var o, s = t[r];
          void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(e[s.image]) ? new Sr(e[s.image]) : new hi(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, gh)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], vh), o.wrapT = i(s.wrap[1], vh)), void 0 !== s.format && (o.format = s.format), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, yh)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, yh)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), n[s.uuid] = o }
      return n }, parseObject: function(t, e, a) { var i;

      function n(t) { return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t] }

      function r(t) { if (void 0 !== t) { if (Array.isArray(t)) { for (var e = [], i = 0, n = t.length; i < n; i++) { var r = t[i];
              void 0 === a[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(a[r]) } return e } return void 0 === a[t] && console.warn("THREE.ObjectLoader: Undefined material", t), a[t] } } switch (t.type) {
        case "Scene":
          i = new po, void 0 !== t.background && Number.isInteger(t.background) && (i.background = new wi(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? i.fog = new uo(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (i.fog = new lo(t.fog.color, t.fog.density))); break;
        case "PerspectiveCamera":
          i = new ao(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (i.focus = t.focus), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset), void 0 !== t.view && (i.view = Object.assign({}, t.view)); break;
        case "OrthographicCamera":
          i = new Ki(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.view && (i.view = Object.assign({}, t.view)); break;
        case "AmbientLight":
          i = new Hc(t.color, t.intensity); break;
        case "DirectionalLight":
          i = new Gc(t.color, t.intensity); break;
        case "PointLight":
          i = new Fc(t.color, t.intensity, t.distance, t.decay); break;
        case "RectAreaLight":
          i = new Vc(t.color, t.intensity, t.width, t.height); break;
        case "SpotLight":
          i = new Bc(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay); break;
        case "HemisphereLight":
          i = new Nc(t.color, t.groundColor, t.intensity); break;
        case "SkinnedMesh":
          console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
        case "Mesh":
          var o = n(t.geometry),
            s = r(t.material);
          i = o.bones && 0 < o.bones.length ? new _o(o, s) : new fr(o, s); break;
        case "LOD":
          i = new yo; break;
        case "Line":
          i = new Mo(n(t.geometry), r(t.material), t.mode); break;
        case "LineLoop":
          i = new To(n(t.geometry), r(t.material)); break;
        case "LineSegments":
          i = new Eo(n(t.geometry), r(t.material)); break;
        case "PointCloud":
        case "Points":
          i = new Ao(n(t.geometry), r(t.material)); break;
        case "Sprite":
          i = new vo(r(t.material)); break;
        case "Group":
          i = new ro; break;
        default:
          i = new Zi } if (i.uuid = t.uuid, void 0 !== t.name && (i.name = t.name), void 0 !== t.matrix ? (i.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (i.matrixAutoUpdate = t.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== t.position && i.position.fromArray(t.position), void 0 !== t.rotation && i.rotation.fromArray(t.rotation), void 0 !== t.quaternion && i.quaternion.fromArray(t.quaternion), void 0 !== t.scale && i.scale.fromArray(t.scale)), void 0 !== t.castShadow && (i.castShadow = t.castShadow), void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (i.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (i.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && i.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (i.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.frustumCulled && (i.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (i.renderOrder = t.renderOrder), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.layers && (i.layers.mask = t.layers), void 0 !== t.children)
        for (var c = t.children, h = 0; h < c.length; h++) i.add(this.parseObject(c[h], e, a)); if ("LOD" === t.type)
        for (var l = t.levels, u = 0; u < l.length; u++) { var p = l[u],
            d = i.getObjectByProperty("uuid", p.object);
          void 0 !== d && i.addLevel(d, p.distance) }
      return i } }); var mh, gh = { UVMapping: 300, CubeReflectionMapping: gt, CubeRefractionMapping: vt, EquirectangularReflectionMapping: yt, EquirectangularRefractionMapping: xt, SphericalReflectionMapping: bt, CubeUVReflectionMapping: _t, CubeUVRefractionMapping: Et },
    vh = { RepeatWrapping: Tt, ClampToEdgeWrapping: St, MirroredRepeatWrapping: At },
    yh = { NearestFilter: Lt, NearestMipMapNearestFilter: Rt, NearestMipMapLinearFilter: Ct, LinearFilter: Pt, LinearMipMapNearestFilter: Ot, LinearMipMapLinearFilter: It };

  function xh(t) { "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : ic, this.options = void 0 }

  function bh() { this.type = "ShapePath", this.color = new wi, this.subPaths = [], this.currentPath = null }

  function _h(t) { this.type = "Font", this.data = t }

  function wh(t, e, i, n, r) { var a = r.glyphs[t] || r.glyphs["?"]; if (a) { var o, s, c, h, l, u, p, d, f = new bh; if (a.o)
        for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v;) { switch (m[g++]) {
            case "m":
              o = m[g++] * e + i, s = m[g++] * e + n, f.moveTo(o, s); break;
            case "l":
              o = m[g++] * e + i, s = m[g++] * e + n, f.lineTo(o, s); break;
            case "q":
              c = m[g++] * e + i, h = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, f.quadraticCurveTo(l, u, c, h); break;
            case "b":
              c = m[g++] * e + i, h = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, p = m[g++] * e + i, d = m[g++] * e + n, f.bezierCurveTo(l, u, p, d, c, h) } }
      return { offsetX: a.ha * e, path: f } } }

  function Mh(t) { this.manager = void 0 !== t ? t : ic } xh.prototype = { constructor: xh, setOptions: function(t) { return this.options = t, this }, load: function(e, i, t, n) { void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e); var r = this,
        a = tc.get(e); if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() { i && i(a), r.manager.itemEnd(e) }, 0), a;
      fetch(e).then(function(t) { return t.blob() }).then(function(t) { return createImageBitmap(t, r.options) }).then(function(t) { tc.add(e, t), i && i(t), r.manager.itemEnd(e) }).catch(function(t) { n && n(t), r.manager.itemEnd(e), r.manager.itemError(e) }) }, setCrossOrigin: function() { return this }, setPath: function(t) { return this.path = t, this } }, Object.assign(bh.prototype, { moveTo: function(t, e) { this.currentPath = new Pc, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e) }, lineTo: function(t, e) { this.currentPath.lineTo(t, e) }, quadraticCurveTo: function(t, e, i, n) { this.currentPath.quadraticCurveTo(t, e, i, n) }, bezierCurveTo: function(t, e, i, n, r, a) { this.currentPath.bezierCurveTo(t, e, i, n, r, a) }, splineThru: function(t) { this.currentPath.splineThru(t) }, toShapes: function(t, e) {
      function i(t) { for (var e = [], i = 0, n = t.length; i < n; i++) { var r = t[i],
            a = new Oc;
          a.curves = r.curves, e.push(a) } return e }

      function n(t, e) { for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) { var o = e[r],
            s = e[a],
            c = s.x - o.x,
            h = s.y - o.y; if (Math.abs(h) > Number.EPSILON) { if (h < 0 && (o = e[a], c = -c, s = e[r], h = -h), t.y < o.y || t.y > s.y) continue; if (t.y === o.y) { if (t.x === o.x) return !0 } else { var l = h * (t.x - o.x) - c * (t.y - o.y); if (0 === l) return !0; if (l < 0) continue;
              n = !n } } else { if (t.y !== o.y) continue; if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0 } } return n } var r = ys.isClockWise,
        a = this.subPaths; if (0 === a.length) return []; if (!0 === e) return i(a); var o, s, c, h = []; if (1 === a.length) return s = a[0], (c = new Oc).curves = s.curves, h.push(c), h; var l = !r(a[0].getPoints());
      l = t ? !l : l; var u, p, d = [],
        f = [],
        m = [],
        g = 0;
      f[g] = void 0, m[g] = []; for (var v = 0, y = a.length; v < y; v++) o = r(u = (s = a[v]).getPoints()), (o = t ? !o : o) ? (!l && f[g] && g++, f[g] = { s: new Oc, p: u }, f[g].s.curves = s.curves, l && g++, m[g] = []) : m[g].push({ h: s, p: u[0] }); if (!f[0]) return i(a); if (1 < f.length) { for (var x = !1, b = [], _ = 0, w = f.length; _ < w; _++) d[_] = []; for (_ = 0, w = f.length; _ < w; _++)
          for (var M = m[_], E = 0; E < M.length; E++) { for (var T = M[E], S = !0, A = 0; A < f.length; A++) n(T.p, f[A].p) && (_ !== A && b.push({ froms: _, tos: A, hole: E }), S ? (S = !1, d[A].push(T)) : x = !0);
            S && d[_].push(T) } 0 < b.length && (x || (m = d)) } v = 0; for (var L = f.length; v < L; v++) { c = f[v].s, h.push(c); for (var R = 0, C = (p = m[v]).length; R < C; R++) c.holes.push(p[R].h) } return h } }), Object.assign(_h.prototype, { isFont: !0, generateShapes: function(t, e) { void 0 === e && (e = 100); for (var i = [], n = function(t, e, i) { for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, c = 0, h = 0; h < n.length; h++) { var l = n[h]; if ("\n" === l) s = 0, c -= a;
            else { var u = wh(l, r, s, c, i);
              s += u.offsetX, o.push(u.path) } } return o }(t, e, this.data), r = 0, a = n.length; r < a; r++) Array.prototype.push.apply(i, n[r].toShapes()); return i } }), Object.assign(Mh.prototype, { load: function(t, n, e, i) { var r = this,
        a = new rc(this.manager);
      a.setPath(this.path), a.load(t, function(e) { var i; try { i = JSON.parse(e) } catch (t) { console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(e.substring(65, e.length - 2)) } var t = r.parse(i);
        n && n(t) }, e, i) }, parse: function(t) { return new _h(t) }, setPath: function(t) { return this.path = t, this } }); var Eh, Th, Sh, Ah, Lh, Rh, Ch, Ph, Oh, Ih, Nh, Dh, Uh, Bh, Fh, zh, Gh, Hh, Vh = { getContext: function() { return void 0 === mh && (mh = new(window.AudioContext || window.webkitAudioContext)), mh }, setContext: function(t) { mh = t } };

  function kh(t) { this.manager = void 0 !== t ? t : ic }

  function jh() { this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new ao, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ao, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1 }

  function Wh(t, e, i) { Zi.call(this), this.type = "CubeCamera"; var r = new ao(90, 1, t, e);
    r.up.set(0, -1, 0), r.lookAt(new je(1, 0, 0)), this.add(r); var a = new ao(90, 1, t, e);
    a.up.set(0, -1, 0), a.lookAt(new je(-1, 0, 0)), this.add(a); var o = new ao(90, 1, t, e);
    o.up.set(0, 0, 1), o.lookAt(new je(0, 1, 0)), this.add(o); var s = new ao(90, 1, t, e);
    s.up.set(0, 0, -1), s.lookAt(new je(0, -1, 0)), this.add(s); var c = new ao(90, 1, t, e);
    c.up.set(0, -1, 0), c.lookAt(new je(0, 0, 1)), this.add(c); var h = new ao(90, 1, t, e);
    h.up.set(0, -1, 0), h.lookAt(new je(0, 0, -1)), this.add(h); var n = { format: qt, magFilter: Pt, minFilter: Pt };
    this.renderTarget = new pi(i, i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) { null === this.parent && this.updateMatrixWorld(); var i = this.renderTarget,
        n = i.texture.generateMipmaps;
      i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, r, i), i.activeCubeFace = 1, t.render(e, a, i), i.activeCubeFace = 2, t.render(e, o, i), i.activeCubeFace = 3, t.render(e, s, i), i.activeCubeFace = 4, t.render(e, c, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, t.render(e, h, i), t.setRenderTarget(null) }, this.clear = function(t, e, i, n) { for (var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, t.setRenderTarget(r), t.clear(e, i, n);
      t.setRenderTarget(null) } }

  function Xh() { Zi.call(this), this.type = "AudioListener", this.context = Vh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null }

  function qh(t) { Zi.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = [] }

  function Yh(t) { qh.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain) }

  function Jh(t, e) { this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser) }

  function Zh(t, e, i) { this.binding = t, this.valueSize = i; var n, r = Float64Array; switch (e) {
      case "quaternion":
        n = this._slerp; break;
      case "string":
      case "bool":
        r = Array, n = this._select; break;
      default:
        n = this._lerp } this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0 } Object.assign(kh.prototype, { load: function(t, i, e, n) { var r = new rc(this.manager);
      r.setResponseType("arraybuffer"), r.load(t, function(t) { var e = t.slice(0);
        Vh.getContext().decodeAudioData(e, function(t) { i(t) }) }, e, n) } }), Object.assign(jh.prototype, { update: (Oh = new Ve, Ih = new Ve, function(t) { if (Eh !== this || Th !== t.focus || Sh !== t.fov || Ah !== t.aspect * this.aspect || Lh !== t.near || Rh !== t.far || Ch !== t.zoom || Ph !== this.eyeSep) { Eh = this, Th = t.focus, Sh = t.fov, Ah = t.aspect * this.aspect, Lh = t.near, Rh = t.far, Ch = t.zoom; var e, i, n = t.projectionMatrix.clone(),
          r = (Ph = this.eyeSep / 2) * Lh / Th,
          a = Lh * Math.tan(Ge.DEG2RAD * Sh * .5) / Ch;
        Ih.elements[12] = -Ph, Oh.elements[12] = Ph, e = -a * Ah + r, i = a * Ah + r, n.elements[0] = 2 * Lh / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraL.projectionMatrix.copy(n), e = -a * Ah - r, i = a * Ah - r, n.elements[0] = 2 * Lh / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraR.projectionMatrix.copy(n) } this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Ih), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Oh) }) }), (Wh.prototype = Object.create(Zi.prototype)).constructor = Wh, Xh.prototype = Object.assign(Object.create(Zi.prototype), { constructor: Xh, getInput: function() { return this.gain }, removeFilter: function() { return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this }, getFilter: function() { return this.filter }, setFilter: function(t) { return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this }, getMasterVolume: function() { return this.gain.gain.value }, setMasterVolume: function(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this }, updateMatrixWorld: (Nh = new je, Dh = new ke, Uh = new je, Bh = new je, function(t) { Zi.prototype.updateMatrixWorld.call(this, t); var e = this.context.listener,
        i = this.up;
      this.matrixWorld.decompose(Nh, Dh, Uh), Bh.set(0, 0, -1).applyQuaternion(Dh), e.positionX ? (e.positionX.setValueAtTime(Nh.x, this.context.currentTime), e.positionY.setValueAtTime(Nh.y, this.context.currentTime), e.positionZ.setValueAtTime(Nh.z, this.context.currentTime), e.forwardX.setValueAtTime(Bh.x, this.context.currentTime), e.forwardY.setValueAtTime(Bh.y, this.context.currentTime), e.forwardZ.setValueAtTime(Bh.z, this.context.currentTime), e.upX.setValueAtTime(i.x, this.context.currentTime), e.upY.setValueAtTime(i.y, this.context.currentTime), e.upZ.setValueAtTime(i.z, this.context.currentTime)) : (e.setPosition(Nh.x, Nh.y, Nh.z), e.setOrientation(Bh.x, Bh.y, Bh.z, i.x, i.y, i.z)) }) }), qh.prototype = Object.assign(Object.create(Zi.prototype), { constructor: qh, getOutput: function() { return this.gain }, setNodeSource: function(t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this }, setMediaElementSource: function(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this }, setBuffer: function(t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this }, play: function() { if (!0 !== this.isPlaying) { if (!1 !== this.hasPlaybackControl) { var t = this.context.createBufferSource(); return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect() } console.warn("THREE.Audio: this Audio has no playback control.") } else console.warn("THREE.Audio: Audio is already playing.") }, pause: function() { if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
      console.warn("THREE.Audio: this Audio has no playback control.") }, stop: function() { if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
      console.warn("THREE.Audio: this Audio has no playback control.") }, connect: function() { if (0 < this.filters.length) { this.source.connect(this.filters[0]); for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
        this.filters[this.filters.length - 1].connect(this.getOutput()) } else this.source.connect(this.getOutput()); return this }, disconnect: function() { if (0 < this.filters.length) { this.source.disconnect(this.filters[0]); for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput()) } else this.source.disconnect(this.getOutput()); return this }, getFilters: function() { return this.filters }, setFilters: function(t) { return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this }, getFilter: function() { return this.getFilters()[0] }, setFilter: function(t) { return this.setFilters(t ? [t] : []) }, setPlaybackRate: function(t) { if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this;
      console.warn("THREE.Audio: this Audio has no playback control.") }, getPlaybackRate: function() { return this.playbackRate }, onEnded: function() { this.isPlaying = !1 }, getLoop: function() { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop }, setLoop: function(t) { if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
      console.warn("THREE.Audio: this Audio has no playback control.") }, getVolume: function() { return this.gain.gain.value }, setVolume: function(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this } }), Yh.prototype = Object.assign(Object.create(qh.prototype), { constructor: Yh, getOutput: function() { return this.panner }, getRefDistance: function() { return this.panner.refDistance }, setRefDistance: function(t) { return this.panner.refDistance = t, this }, getRolloffFactor: function() { return this.panner.rolloffFactor }, setRolloffFactor: function(t) { return this.panner.rolloffFactor = t, this }, getDistanceModel: function() { return this.panner.distanceModel }, setDistanceModel: function(t) { return this.panner.distanceModel = t, this }, getMaxDistance: function() { return this.panner.maxDistance }, setMaxDistance: function(t) { return this.panner.maxDistance = t, this }, setDirectionalCone: function(t, e, i) { return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this }, updateMatrixWorld: (Fh = new je, zh = new ke, Gh = new je, Hh = new je, function(t) { Zi.prototype.updateMatrixWorld.call(this, t); var e = this.panner;
      this.matrixWorld.decompose(Fh, zh, Gh), Hh.set(0, 0, 1).applyQuaternion(zh), e.setPosition(Fh.x, Fh.y, Fh.z), e.setOrientation(Hh.x, Hh.y, Hh.z) }) }), Object.assign(Jh.prototype, { getFrequencyData: function() { return this.analyser.getByteFrequencyData(this.data), this.data }, getAverageFrequency: function() { for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i]; return t / e.length } }), Object.assign(Zh.prototype, { accumulate: function(t, e) { var i = this.buffer,
        n = this.valueSize,
        r = t * n + n,
        a = this.cumulativeWeight; if (0 === a) { for (var o = 0; o !== n; ++o) i[r + o] = i[o];
        a = e } else { var s = e / (a += e);
        this._mixBufferRegion(i, r, 0, s, n) } this.cumulativeWeight = a }, apply: function(t) { var e = this.valueSize,
        i = this.buffer,
        n = t * e + e,
        r = this.cumulativeWeight,
        a = this.binding; if (this.cumulativeWeight = 0, r < 1) { var o = 3 * e;
        this._mixBufferRegion(i, n, o, 1 - r, e) } for (var s = e, c = e + e; s !== c; ++s)
        if (i[s] !== i[s + e]) { a.setValue(i, n); break } }, saveOriginalState: function() { var t = this.binding,
        e = this.buffer,
        i = this.valueSize,
        n = 3 * i;
      t.getValue(e, n); for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
      this.cumulativeWeight = 0 }, restoreOriginalState: function() { var t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t) }, _select: function(t, e, i, n, r) { if (.5 <= n)
        for (var a = 0; a !== r; ++a) t[e + a] = t[i + a] }, _slerp: function(t, e, i, n) { ke.slerpFlat(t, e, t, e, t, i, n) }, _lerp: function(t, e, i, n, r) { for (var a = 1 - n, o = 0; o !== r; ++o) { var s = e + o;
        t[s] = t[s] * a + t[i + o] * n } } }); var Qh, Kh, $h, tl, el, il, nl, rl, al, ol, sl, cl, hl, ll, ul, pl, dl, fl, ml, gl, vl, yl, xl, bl, _l, wl, Ml, El, Tl, Sl, Al, Ll, Rl, Cl, Pl, Ol = "\\[\\]\\.:\\/";

  function Il(t, e, i) { var n = i || Nl.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, n) }

  function Nl(t, e, i) { this.path = e, this.parsedPath = i || Nl.parseTrackName(e), this.node = Nl.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t }

  function Dl() { this.uuid = Ge.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0; var t = {};
    this._indicesByUUID = t; for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {}; var n = this;
    this.stats = { objects: { get total() { return n._objects.length }, get inUse() { return this.total - n.nCachedObjects_ } }, get bindingsPerObject() { return n._bindings.length } } }

  function Ul(t, e, i) { this._mixer = t, this._clip = e, this._localRoot = i || null; for (var n = e.tracks, r = n.length, a = new Array(r), o = { endingStart: Te, endingEnd: Te }, s = 0; s !== r; ++s) { var c = n[s].createInterpolant(null);
      (a[s] = c).settings = o } this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0 }

  function Bl(t) { this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1 }

  function Fl(t) { "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t }

  function zl() { In.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0 }

  function Gl(t, e, i) { fo.call(this, t, e), this.meshPerAttribute = i || 1 }

  function Hl(t, e, i) { ln.call(this, t, e), this.meshPerAttribute = i || 1 }

  function Vl(t, e, i, n) { this.ray = new pr(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = { Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {} }, Object.defineProperties(this.params, { PointCloud: { get: function() { return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points } } }) }

  function kl(t, e) { return t.distance - e.distance }

  function jl(t, e, i, n) { if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
      for (var r = t.children, a = 0, o = r.length; a < o; a++) jl(r[a], e, i, !0) }

  function Wl(t) { this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 }

  function Xl(t, e, i) { return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this }

  function ql(t, e, i) { return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this }

  function Yl(t, e) { this.min = void 0 !== t ? t : new He(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new He(-1 / 0, -1 / 0) }

  function Jl(t, e) { this.start = void 0 !== t ? t : new je, this.end = void 0 !== e ? e : new je }

  function Zl(t) { Zi.call(this), this.material = t, this.render = function() {} }

  function Ql(t, e, i, n) { this.object = t, this.size = void 0 !== e ? e : 1; var r = void 0 !== i ? i : 16711680,
      a = void 0 !== n ? n : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count); var c = new In,
      h = new yn(2 * o * 3, 3);
    c.addAttribute("position", h), Eo.call(this, c, new wo({ color: r, linewidth: a })), this.matrixAutoUpdate = !1, this.update() }

  function Kl(t, e) { Zi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e; for (var i = new In, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) { var o = r / 32 * Math.PI * 2,
        s = a / 32 * Math.PI * 2;
      n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1) } i.addAttribute("position", new yn(n, 3)); var c = new wo({ fog: !1 });
    this.cone = new Eo(i, c), this.add(this.cone), this.update() }

  function $l(t) { for (var e = function t(e) { var i = [];
        e && e.isBone && i.push(e); for (var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n])); return i }(t), i = new In, n = [], r = [], a = new wi(0, 0, 1), o = new wi(0, 1, 0), s = 0; s < e.length; s++) { var c = e[s];
      c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b)) } i.addAttribute("position", new yn(n, 3)), i.addAttribute("color", new yn(r, 3)); var h = new wo({ vertexColors: T, depthTest: !1, depthWrite: !1, transparent: !0 });
    Eo.call(this, i, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1 }

  function tu(t, e, i) { this.light = t, this.light.updateMatrixWorld(), this.color = i; var n = new Ls(e, 4, 2),
      r = new lr({ wireframe: !0, fog: !1 });
    fr.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update() }

  function eu(t, e) { Zi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e; var i = new wo({ fog: !1 }),
      n = new In;
    n.addAttribute("position", new ln(new Float32Array(15), 3)), this.line = new Mo(n, i), this.add(this.line), this.update() }

  function iu(t, e, i) { Zi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i; var n = new Go(e);
    n.rotateY(.5 * Math.PI), this.material = new lr({ wireframe: !0, fog: !1 }), void 0 === this.color && (this.material.vertexColors = T); var r = n.getAttribute("position"),
      a = new Float32Array(3 * r.count);
    n.addAttribute("color", new ln(a, 3)), this.add(new fr(n, this.material)), this.update() }

  function nu(t, e, i, n) { t = t || 10, e = e || 10, i = new wi(void 0 !== i ? i : 4473924), n = new wi(void 0 !== n ? n : 8947848); for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) { s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o); var p = h === r ? i : n;
      p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3 } var d = new In;
    d.addAttribute("position", new yn(s, 3)), d.addAttribute("color", new yn(c, 3)); var f = new wo({ vertexColors: T });
    Eo.call(this, d, f) }

  function ru(t, e, i, n, r, a) { t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new wi(void 0 !== r ? r : 4473924), a = new wi(void 0 !== a ? a : 8947848); var o, s, c, h, l, u, p, d = [],
      f = []; for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & h ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b); for (h = 0; h <= i; h++)
      for (p = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b); var m = new In;
    m.addAttribute("position", new yn(d, 3)), m.addAttribute("color", new yn(f, 3)); var g = new wo({ vertexColors: T });
    Eo.call(this, m, g) }

  function au(t, e, i, n) { this.object = t, this.size = void 0 !== e ? e : 1; var r = void 0 !== i ? i : 16776960,
      a = void 0 !== n ? n : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."); var c = new In,
      h = new yn(2 * o * 3, 3);
    c.addAttribute("position", h), Eo.call(this, c, new wo({ color: r, linewidth: a })), this.matrixAutoUpdate = !1, this.update() }

  function ou(t, e, i) { Zi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1); var n = new In;
    n.addAttribute("position", new yn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)); var r = new wo({ fog: !1 });
    this.lightPlane = new Mo(n, r), this.add(this.lightPlane), (n = new In).addAttribute("position", new yn([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Mo(n, r), this.add(this.targetLine), this.update() }

  function su(t) { var e = new In,
      i = new wo({ color: 16777215, vertexColors: 1 }),
      n = [],
      r = [],
      a = {},
      o = new wi(16755200),
      s = new wi(16711680),
      c = new wi(43775),
      h = new wi(16777215),
      l = new wi(3355443);

    function u(t, e, i) { p(t, i), p(e, i) }

    function p(t, e) { n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(n.length / 3 - 1) } u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.addAttribute("position", new yn(n, 3)), e.addAttribute("color", new yn(r, 3)), Eo.call(this, e, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update() }

  function cu(t, e) { this.object = t, void 0 === e && (e = 16776960); var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      n = new Float32Array(24),
      r = new In;
    r.setIndex(new ln(i, 1)), r.addAttribute("position", new ln(n, 3)), Eo.call(this, r, new wo({ color: e })), this.matrixAutoUpdate = !1, this.update() }

  function hu(t, e) { this.type = "Box3Helper", this.box = t; var i = void 0 !== e ? e : 16776960,
      n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      r = new In;
    r.setIndex(new ln(n, 1)), r.addAttribute("position", new yn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Eo.call(this, r, new wo({ color: i })), this.geometry.computeBoundingSphere() }

  function lu(t, e, i) { this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e; var n = void 0 !== i ? i : 16776960,
      r = new In;
    r.addAttribute("position", new yn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Mo.call(this, r, new wo({ color: n })); var a = new In;
    a.addAttribute("position", new yn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new fr(a, new lr({ color: n, opacity: .2, transparent: !0, depthWrite: !1 }))) }

  function uu(t, e, i, n, r, a) { Zi.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === Ll && ((Ll = new In).addAttribute("position", new yn([0, 0, 0, 0, 1, 0], 3)), (Rl = new Fs(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Mo(Ll, new wo({ color: n })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new fr(Rl, new lr({ color: n })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a) }

  function pu(t) { var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
      i = new In;
    i.addAttribute("position", new yn(e, 3)), i.addAttribute("color", new yn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)); var n = new wo({ vertexColors: T });
    Eo.call(this, i, n) } Object.assign(Il.prototype, { getValue: function(t, e) { this.bind(); var i = this._targetGroup.nCachedObjects_,
        n = this._bindings[i];
      void 0 !== n && n.getValue(t, e) }, setValue: function(t, e) { for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e) }, bind: function() { for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind() }, unbind: function() { for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind() } }), Object.assign(Nl, { Composite: Il, create: function(t, e, i) { return t && t.isAnimationObjectGroup ? new Nl.Composite(t, e, i) : new Nl(t, e, i) }, sanitizeNodeName: (al = new RegExp("[" + Ol + "]", "g"), function(t) { return t.replace(/\s/g, "_").replace(al, "") }), parseTrackName: (Qh = "[^" + Ol + "]", Kh = "[^" + Ol.replace("\\.", "") + "]", $h = /((?:WC+[\/:])*)/.source.replace("WC", Qh), tl = /(WCOD+)?/.source.replace("WCOD", Kh), el = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qh), il = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qh), nl = new RegExp("^" + $h + tl + el + il + "$"), rl = ["material", "materials", "bones"], function(t) { var e = nl.exec(t); if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t); var i = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
        n = i.nodeName && i.nodeName.lastIndexOf("."); if (void 0 !== n && -1 !== n) { var r = i.nodeName.substring(n + 1); - 1 !== rl.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r) } if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t); return i }), findNode: function(t, r) { if (!r || "" === r || "root" === r || "." === r || -1 === r || r === t.name || r === t.uuid) return t; if (t.skeleton) { var e = t.skeleton.getBoneByName(r); if (void 0 !== e) return e } if (t.children) { var a = function(t) { for (var e = 0; e < t.length; e++) { var i = t[e]; if (i.name === r || i.uuid === r) return i; var n = a(i.children); if (n) return n } return null },
          i = a(t.children); if (i) return i } return null } }), Object.assign(Nl.prototype, { _getValue_unavailable: function() {}, _setValue_unavailable: function() {}, BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, GetterByBindingType: [function(t, e) { t[e] = this.node[this.propertyName] }, function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n] }, function(t, e) { t[e] = this.resolvedProperty[this.propertyIndex] }, function(t, e) { this.resolvedProperty.toArray(t, e) }], SetterByBindingTypeAndVersioning: [
      [function(t, e) { this.targetObject[this.propertyName] = t[e] }, function(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0 }, function(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }],
      [function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++] }, function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.needsUpdate = !0 }, function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0 }],
      [function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e] }, function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0 }, function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }],
      [function(t, e) { this.resolvedProperty.fromArray(t, e) }, function(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0 }, function(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0 }]
    ], getValue: function(t, e) { this.bind(), this.getValue(t, e) }, setValue: function(t, e) { this.bind(), this.setValue(t, e) }, bind: function() { var t = this.node,
        e = this.parsedPath,
        i = e.objectName,
        n = e.propertyName,
        r = e.propertyIndex; if (t || (t = Nl.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) { if (i) { var a = e.objectIndex; switch (i) {
            case "materials":
              if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              t = t.material.materials; break;
            case "bones":
              if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              t = t.skeleton.bones; for (var o = 0; o < t.length; o++)
                if (t[o].name === a) { a = o; break }
              break;
            default:
              if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              t = t[i] } if (void 0 !== a) { if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            t = t[a] } } var s = t[n]; if (void 0 !== s) { var c = this.Versioning.None;
          void 0 !== t.needsUpdate ? (c = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t); var h = this.BindingType.Direct; if (void 0 !== r) { if ("morphTargetInfluences" === n) { if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); if (t.geometry.isBufferGeometry) { if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                  if (t.geometry.morphAttributes.position[o].name === r) { r = o; break } } else { if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this); for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                  if (t.geometry.morphTargets[o].name === r) { r = o; break } } } h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
          this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c] } else { var l = e.nodeName;
          console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t) } } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.") }, unbind: function() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }), Object.assign(Nl.prototype, { _getValue_unbound: Nl.prototype.getValue, _setValue_unbound: Nl.prototype.setValue }), Object.assign(Dl.prototype, { isAnimationObjectGroup: !0, add: function() { for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) { var u = arguments[h],
          p = u.uuid,
          d = n[p]; if (void 0 === d) { d = e++, n[p] = d, t.push(u); for (var f = 0, m = s; f !== m; ++f) o[f].push(new Nl(u, r[f], a[f])) } else if (d < i) { c = t[d]; var g = --i,
            v = t[g];
          t[n[v.uuid] = d] = v, t[n[p] = g] = u; for (f = 0, m = s; f !== m; ++f) { var y = o[f],
              x = y[g],
              b = y[d];
            y[d] = x, void 0 === b && (b = new Nl(u, r[f], a[f])), y[g] = b } } else t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.") } this.nCachedObjects_ = i }, remove: function() { for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) { var s = arguments[a],
          c = s.uuid,
          h = i[c]; if (void 0 !== h && e <= h) { var l = e++,
            u = t[l];
          t[i[u.uuid] = h] = u, t[i[c] = l] = s; for (var p = 0, d = r; p !== d; ++p) { var f = n[p],
              m = f[l],
              g = f[h];
            f[h] = m, f[l] = g } } } this.nCachedObjects_ = e }, uncache: function() { for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) { var c = arguments[o].uuid,
          h = n[c]; if (void 0 !== h)
          if (delete n[c], h < i) { var l = --i,
              u = t[l],
              p = t[v = --e];
            t[n[u.uuid] = h] = u, t[n[p.uuid] = l] = p, t.pop(); for (var d = 0, f = a; d !== f; ++d) { var m = (y = r[d])[l],
                g = y[v];
              y[h] = m, y[l] = g, y.pop() } }
        else { var v;
          t[n[(p = t[v = --e]).uuid] = h] = p, t.pop(); for (d = 0, f = a; d !== f; ++d) { var y;
            (y = r[d])[h] = y[v], y.pop() } } } this.nCachedObjects_ = i }, subscribe_: function(t, e) { var i = this._bindingsIndicesByPath,
        n = i[t],
        r = this._bindings; if (void 0 !== n) return r[n]; var a = this._paths,
        o = this._parsedPaths,
        s = this._objects,
        c = s.length,
        h = this.nCachedObjects_,
        l = new Array(c);
      n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l); for (var u = h, p = s.length; u !== p; ++u) { var d = s[u];
        l[u] = new Nl(d, t, e) } return l }, unsubscribe_: function(t) { var e = this._bindingsIndicesByPath,
        i = e[t]; if (void 0 !== i) { var n = this._paths,
          r = this._parsedPaths,
          a = this._bindings,
          o = a.length - 1,
          s = a[o];
        a[e[t[o]] = i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop() } } }), Object.assign(Ul.prototype, { play: function() { return this._mixer._activateAction(this), this }, stop: function() { return this._mixer._deactivateAction(this), this.reset() }, reset: function() { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping() }, isRunning: function() { return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this) }, isScheduled: function() { return this._mixer._isActiveAction(this) }, startAt: function(t) { return this._startTime = t, this }, setLoop: function(t, e) { return this.loop = t, this.repetitions = e, this }, setEffectiveWeight: function(t) { return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading() }, getEffectiveWeight: function() { return this._effectiveWeight }, fadeIn: function(t) { return this._scheduleFading(t, 0, 1) }, fadeOut: function(t) { return this._scheduleFading(t, 1, 0) }, crossFadeFrom: function(t, e, i) { if (t.fadeOut(e), this.fadeIn(e), i) { var n = this._clip.duration,
          r = t._clip.duration,
          a = r / n,
          o = n / r;
        t.warp(1, a, e), this.warp(o, 1, e) } return this }, crossFadeTo: function(t, e, i) { return t.crossFadeFrom(this, e, i) }, stopFading: function() { var t = this._weightInterpolant; return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this }, setEffectiveTimeScale: function(t) { return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping() }, getEffectiveTimeScale: function() { return this._effectiveTimeScale }, setDuration: function(t) { return this.timeScale = this._clip.duration / t, this.stopWarping() }, syncWith: function(t) { return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping() }, halt: function(t) { return this.warp(this._effectiveTimeScale, 0, t) }, warp: function(t, e, i) { var n = this._mixer,
        r = n.time,
        a = this._timeScaleInterpolant,
        o = this.timeScale;
      null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a); var s = a.parameterPositions,
        c = a.sampleValues; return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this }, stopWarping: function() { var t = this._timeScaleInterpolant; return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this }, getMixer: function() { return this._mixer }, getClip: function() { return this._clip }, getRoot: function() { return this._localRoot || this._mixer._root }, _update: function(t, e, i, n) { if (this.enabled) { var r = this._startTime; if (null !== r) { var a = (t - r) * i; if (a < 0 || 0 === i) return;
          this._startTime = null, e = i * a } e *= this._updateTimeScale(t); var o = this._updateTime(e),
          s = this._updateWeight(t); if (0 < s)
          for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(n, s) } else this._updateWeight(t) }, _updateWeight: function(t) { var e = 0; if (this.enabled) { e = this.weight; var i = this._weightInterpolant; if (null !== i) { var n = i.evaluate(t)[0];
          e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1)) } } return this._effectiveWeight = e }, _updateTimeScale: function(t) { var e = 0; if (!this.paused) { e = this.timeScale; var i = this._timeScaleInterpolant; if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e) } return this._effectiveTimeScale = e }, _updateTime: function(t) { var e = this.time + t,
        i = this._clip.duration,
        n = this.loop,
        r = this._loopCount,
        a = 2202 === n; if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? i - e : e; if (2200 === n) {-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
        t: { if (i <= e) e = i;
          else { if (!(e < 0)) break t;
            e = 0 } this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 }) } } else { if (-1 === r && (0 <= t ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), i <= e || e < 0) { var o = Math.floor(e / i);
          e -= i * o, r += Math.abs(o); var s = this.repetitions - r; if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = 0 < t ? i : 0, this._mixer.dispatchEvent({ type: "finished", action: this, direction: 0 < t ? 1 : -1 });
          else { if (1 === s) { var c = t < 0;
              this._setEndings(c, !c, a) } else this._setEndings(!1, !1, a);
            this._loopCount = r, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: o }) } } if (a && 1 == (1 & r)) return i - (this.time = e) } return this.time = e }, _setEndings: function(t, e, i) { var n = this._interpolantSettings;
      i ? (n.endingStart = Se, n.endingEnd = Se) : (n.endingStart = t ? this.zeroSlopeAtStart ? Se : Te : Ae, n.endingEnd = e ? this.zeroSlopeAtEnd ? Se : Te : Ae) }, _scheduleFading: function(t, e, i) { var n = this._mixer,
        r = n.time,
        a = this._weightInterpolant;
      null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a); var o = a.parameterPositions,
        s = a.sampleValues; return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this } }), Bl.prototype = Object.assign(Object.create(e.prototype), { constructor: Bl, _bindAction: function(t, e) { var i = t._localRoot || this._root,
        n = t._clip.tracks,
        r = n.length,
        a = t._propertyBindings,
        o = t._interpolants,
        s = i.uuid,
        c = this._bindingsByRootAndName,
        h = c[s];
      void 0 === h && (h = {}, c[s] = h); for (var l = 0; l !== r; ++l) { var u = n[l],
          p = u.name,
          d = h[p]; if (void 0 !== d) a[l] = d;
        else { if (void 0 !== (d = a[l])) { null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p)); continue } var f = e && e._propertyBindings[l].binding.parsedPath;++(d = new Zh(Nl.create(i, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d } o[l].resultBuffer = d.buffer } }, _activateAction: function(t) { if (!this._isActiveAction(t)) { if (null === t._cacheIndex) { var e = (t._localRoot || this._root).uuid,
            i = t._clip.uuid,
            n = this._actionsByClip[i];
          this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e) } for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) { var s = r[a];
          0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState()) } this._lendAction(t) } }, _deactivateAction: function(t) { if (this._isActiveAction(t)) { for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) { var r = e[i];
          0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r)) } this._takeBackAction(t) } }, _initMemoryManager: function() { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; var t = this;
      this.stats = { actions: { get total() { return t._actions.length }, get inUse() { return t._nActiveActions } }, bindings: { get total() { return t._bindings.length }, get inUse() { return t._nActiveBindings } }, controlInterpolants: { get total() { return t._controlInterpolants.length }, get inUse() { return t._nActiveControlInterpolants } } } }, _isActiveAction: function(t) { var e = t._cacheIndex; return null !== e && e < this._nActiveActions }, _addInactiveAction: function(t, e, i) { var n = this._actions,
        r = this._actionsByClip,
        a = r[e]; if (void 0 === a) a = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = a;
      else { var o = a.knownActions;
        t._byClipCacheIndex = o.length, o.push(t) } t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t }, _removeInactiveAction: function(t) { var e = this._actions,
        i = e[e.length - 1],
        n = t._cacheIndex;
      e[i._cacheIndex = n] = i, e.pop(), t._cacheIndex = null; var r = t._clip.uuid,
        a = this._actionsByClip,
        o = a[r],
        s = o.knownActions,
        c = s[s.length - 1],
        h = t._byClipCacheIndex;
      s[c._byClipCacheIndex = h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t) }, _removeInactiveBindingsForAction: function(t) { for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) { var r = e[i];
        0 == --r.referenceCount && this._removeInactiveBinding(r) } }, _lendAction: function(t) { var e = this._actions,
        i = t._cacheIndex,
        n = this._nActiveActions++,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r }, _takeBackAction: function(t) { var e = this._actions,
        i = t._cacheIndex,
        n = --this._nActiveActions,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r }, _addInactiveBinding: function(t, e, i) { var n = this._bindingsByRootAndName,
        r = n[e],
        a = this._bindings;
      void 0 === r && (r = {}, n[e] = r), (r[i] = t)._cacheIndex = a.length, a.push(t) }, _removeInactiveBinding: function(t) { var e = this._bindings,
        i = t.binding,
        n = i.rootNode.uuid,
        r = i.path,
        a = this._bindingsByRootAndName,
        o = a[n],
        s = e[e.length - 1],
        c = t._cacheIndex;
      e[s._cacheIndex = c] = s, e.pop(), delete o[r];
      t: { for (var h in o) break t;delete a[n] } }, _lendBinding: function(t) { var e = this._bindings,
        i = t._cacheIndex,
        n = this._nActiveBindings++,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r }, _takeBackBinding: function(t) { var e = this._bindings,
        i = t._cacheIndex,
        n = --this._nActiveBindings,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r }, _lendControlInterpolant: function() { var t = this._controlInterpolants,
        e = this._nActiveControlInterpolants++,
        i = t[e]; return void 0 === i && (t[(i = new Xc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e] = i), i }, _takeBackControlInterpolant: function(t) { var e = this._controlInterpolants,
        i = t.__cacheIndex,
        n = --this._nActiveControlInterpolants,
        r = e[n];
      e[t.__cacheIndex = n] = t, e[r.__cacheIndex = i] = r }, _controlInterpolantsResultBuffer: new Float32Array(1), clipAction: function(t, e) { var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? ih.findByName(i, t) : t,
        a = null !== r ? r.uuid : t,
        o = this._actionsByClip[a],
        s = null; if (void 0 !== o) { var c = o.actionByRoot[n]; if (void 0 !== c) return c;
        s = o.knownActions[0], null === r && (r = s._clip) } if (null === r) return null; var h = new Ul(this, r, e); return this._bindAction(h, s), this._addInactiveAction(h, a, n), h }, existingAction: function(t, e) { var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? ih.findByName(i, t) : t,
        a = r ? r.uuid : t,
        o = this._actionsByClip[a]; return void 0 !== o && o.actionByRoot[n] || null }, stopAllAction: function() { var t = this._actions,
        e = this._nActiveActions,
        i = this._bindings,
        n = this._nActiveBindings;
      this._nActiveActions = 0; for (var r = this._nActiveBindings = 0; r !== e; ++r) t[r].reset(); for (r = 0; r !== n; ++r) i[r].useCount = 0; return this }, update: function(t) { t *= this.timeScale; for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) { e[o]._update(n, t, r, a) } var s = this._bindings,
        c = this._nActiveBindings; for (o = 0; o !== c; ++o) s[o].apply(a); return this }, getRoot: function() { return this._root }, uncacheClip: function(t) { var e = this._actions,
        i = t.uuid,
        n = this._actionsByClip,
        r = n[i]; if (void 0 !== r) { for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) { var c = a[o];
          this._deactivateAction(c); var h = c._cacheIndex,
            l = e[e.length - 1];
          c._cacheIndex = null, c._byClipCacheIndex = null, e[l._cacheIndex = h] = l, e.pop(), this._removeInactiveBindingsForAction(c) } delete n[i] } }, uncacheRoot: function(t) { var e = t.uuid,
        i = this._actionsByClip; for (var n in i) { var r = i[n].actionByRoot[e];
        void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r)) } var a = this._bindingsByRootAndName[e]; if (void 0 !== a)
        for (var o in a) { var s = a[o];
          s.restoreOriginalState(), this._removeInactiveBinding(s) } }, uncacheAction: function(t, e) { var i = this.existingAction(t, e);
      null !== i && (this._deactivateAction(i), this._removeInactiveAction(i)) } }), Fl.prototype.clone = function() { return new Fl(void 0 === this.value.clone ? this.value : this.value.clone()) }, zl.prototype = Object.assign(Object.create(In.prototype), { constructor: zl, isInstancedBufferGeometry: !0, copy: function(t) { return In.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this }, clone: function() { return (new this.constructor).copy(this) } }), Gl.prototype = Object.assign(Object.create(fo.prototype), { constructor: Gl, isInstancedInterleavedBuffer: !0, copy: function(t) { return fo.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this } }), Hl.prototype = Object.assign(Object.create(ln.prototype), { constructor: Hl, isInstancedBufferAttribute: !0, copy: function(t) { return ln.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this } }), Object.assign(Vl.prototype, { linePrecision: 1, set: function(t, e) { this.ray.set(t, e) }, setFromCamera: function(t, e) { e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.") }, intersectObject: function(t, e, i) { var n = i || []; return jl(t, this, n, e), n.sort(kl), n }, intersectObjects: function(t, e, i) { var n = i || []; if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n; for (var r = 0, a = t.length; r < a; r++) jl(t[r], this, n, e); return n.sort(kl), n } }), Object.assign(Wl.prototype, { start: function() { this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 }, stop: function() { this.getElapsedTime(), this.running = !1, this.autoStart = !1 }, getElapsedTime: function() { return this.getDelta(), this.elapsedTime }, getDelta: function() { var t = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { var e = ("undefined" == typeof performance ? Date : performance).now();
        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t } return t } }), Object.assign(Xl.prototype, { set: function(t, e, i) { return this.radius = t, this.phi = e, this.theta = i, this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this }, makeSafe: function() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this }, setFromVector3: function(t) { return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(Ge.clamp(t.y / this.radius, -1, 1))), this } }), Object.assign(ql.prototype, { set: function(t, e, i) { return this.radius = t, this.theta = e, this.y = i, this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this }, setFromVector3: function(t) { return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this } }), Object.assign(Yl.prototype, { set: function(t, e) { return this.min.copy(t), this.max.copy(e), this }, setFromPoints: function(t) { this.makeEmpty(); for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]); return this }, setFromCenterAndSize: (sl = new He, function(t, e) { var i = sl.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(i), this.max.copy(t).add(i), this }), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.min.copy(t.min), this.max.copy(t.max), this }, makeEmpty: function() { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this }, isEmpty: function() { return this.max.x < this.min.x || this.max.y < this.min.y }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new He), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) }, getSize: function(t) { return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new He), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min) }, expandByPoint: function(t) { return this.min.min(t), this.max.max(t), this }, expandByVector: function(t) { return this.min.sub(t), this.max.add(t), this }, expandByScalar: function(t) { return this.min.addScalar(-t), this.max.addScalar(t), this }, containsPoint: function(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y) }, containsBox: function(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y }, getParameter: function(t, e) { return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new He), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y)) }, intersectsBox: function(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y) }, clampPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new He), e.copy(t).clamp(this.min, this.max) }, distanceToPoint: (ol = new He, function(t) { return ol.copy(t).clamp(this.min, this.max).sub(t).length() }), intersect: function(t) { return this.min.max(t.min), this.max.min(t.max), this }, union: function(t) { return this.min.min(t.min), this.max.max(t.max), this }, translate: function(t) { return this.min.add(t), this.max.add(t), this }, equals: function(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }), Object.assign(Jl.prototype, { set: function(t, e) { return this.start.copy(t), this.end.copy(e), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.start.copy(t.start), this.end.copy(t.end), this }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new je), t.addVectors(this.start, this.end).multiplyScalar(.5) }, delta: function(t) { return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new je), t.subVectors(this.end, this.start) }, distanceSq: function() { return this.start.distanceToSquared(this.end) }, distance: function() { return this.start.distanceTo(this.end) }, at: function(t, e) { return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new je), this.delta(e).multiplyScalar(t).add(this.start) }, closestPointToPointParameter: (cl = new je, hl = new je, function(t, e) { cl.subVectors(t, this.start), hl.subVectors(this.end, this.start); var i = hl.dot(hl),
        n = hl.dot(cl) / i; return e && (n = Ge.clamp(n, 0, 1)), n }), closestPointToPoint: function(t, e, i) { var n = this.closestPointToPointParameter(t, e); return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new je), this.delta(i).multiplyScalar(n).add(this.start) }, applyMatrix4: function(t) { return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this }, equals: function(t) { return t.start.equals(this.start) && t.end.equals(this.end) } }), ((Zl.prototype = Object.create(Zi.prototype)).constructor = Zl).prototype.isImmediateRenderObject = !0, ((Ql.prototype = Object.create(Eo.prototype)).constructor = Ql).prototype.update = (ll = new je, ul = new je, pl = new We, function() { var t = ["a", "b", "c"];
    this.object.updateMatrixWorld(!0), pl.getNormalMatrix(this.object.matrixWorld); var e = this.object.matrixWorld,
      i = this.geometry.attributes.position,
      n = this.object.geometry; if (n && n.isGeometry)
      for (var r = n.vertices, a = n.faces, o = 0, s = 0, c = a.length; s < c; s++)
        for (var h = a[s], l = 0, u = h.vertexNormals.length; l < u; l++) { var p = r[h[t[l]]],
            d = h.vertexNormals[l];
          ll.copy(p).applyMatrix4(e), ul.copy(d).applyMatrix3(pl).normalize().multiplyScalar(this.size).add(ll), i.setXYZ(o, ll.x, ll.y, ll.z), o += 1, i.setXYZ(o, ul.x, ul.y, ul.z), o += 1 }
    else if (n && n.isBufferGeometry) { var f = n.attributes.position,
        m = n.attributes.normal; for (l = o = 0, u = f.count; l < u; l++) ll.set(f.getX(l), f.getY(l), f.getZ(l)).applyMatrix4(e), ul.set(m.getX(l), m.getY(l), m.getZ(l)), ul.applyMatrix3(pl).normalize().multiplyScalar(this.size).add(ll), i.setXYZ(o, ll.x, ll.y, ll.z), o += 1, i.setXYZ(o, ul.x, ul.y, ul.z), o += 1 } i.needsUpdate = !0 }), ((Kl.prototype = Object.create(Zi.prototype)).constructor = Kl).prototype.dispose = function() { this.cone.geometry.dispose(), this.cone.material.dispose() }, Kl.prototype.update = (dl = new je, fl = new je, function() { this.light.updateMatrixWorld(); var t = this.light.distance ? this.light.distance : 1e3,
      e = t * Math.tan(this.light.angle);
    this.cone.scale.set(e, e, t), dl.setFromMatrixPosition(this.light.matrixWorld), fl.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(fl.sub(dl)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color) }), (($l.prototype = Object.create(Eo.prototype)).constructor = $l).prototype.updateMatrixWorld = (ml = new je, gl = new Ve, vl = new Ve, function(t) { var e = this.bones,
      i = this.geometry,
      n = i.getAttribute("position");
    vl.getInverse(this.root.matrixWorld); for (var r = 0, a = 0; r < e.length; r++) { var o = e[r];
      o.parent && o.parent.isBone && (gl.multiplyMatrices(vl, o.matrixWorld), ml.setFromMatrixPosition(gl), n.setXYZ(a, ml.x, ml.y, ml.z), gl.multiplyMatrices(vl, o.parent.matrixWorld), ml.setFromMatrixPosition(gl), n.setXYZ(a + 1, ml.x, ml.y, ml.z), a += 2) } i.getAttribute("position").needsUpdate = !0, Zi.prototype.updateMatrixWorld.call(this, t) }), ((tu.prototype = Object.create(fr.prototype)).constructor = tu).prototype.dispose = function() { this.geometry.dispose(), this.material.dispose() }, tu.prototype.update = function() { void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color) }, ((eu.prototype = Object.create(Zi.prototype)).constructor = eu).prototype.dispose = function() { this.children[0].geometry.dispose(), this.children[0].material.dispose() }, eu.prototype.update = function() { var t = .5 * this.light.width,
      e = .5 * this.light.height,
      i = this.line.geometry.attributes.position,
      n = i.array;
    n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t, n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color) }, ((iu.prototype = Object.create(Zi.prototype)).constructor = iu).prototype.dispose = function() { this.children[0].geometry.dispose(), this.children[0].material.dispose() }, iu.prototype.update = (yl = new je, xl = new wi, bl = new wi, function() { var t = this.children[0]; if (void 0 !== this.color) this.material.color.set(this.color);
    else { var e = t.geometry.getAttribute("color");
      xl.copy(this.light.color), bl.copy(this.light.groundColor); for (var i = 0, n = e.count; i < n; i++) { var r = i < n / 2 ? xl : bl;
        e.setXYZ(i, r.r, r.g, r.b) } e.needsUpdate = !0 } t.lookAt(yl.setFromMatrixPosition(this.light.matrixWorld).negate()) }), (nu.prototype = Object.create(Eo.prototype)).constructor = nu, (ru.prototype = Object.create(Eo.prototype)).constructor = ru, ((au.prototype = Object.create(Eo.prototype)).constructor = au).prototype.update = (_l = new je, wl = new je, Ml = new We, function() { this.object.updateMatrixWorld(!0), Ml.getNormalMatrix(this.object.matrixWorld); for (var t = this.object.matrixWorld, e = this.geometry.attributes.position, i = this.object.geometry, n = i.vertices, r = i.faces, a = 0, o = 0, s = r.length; o < s; o++) { var c = r[o],
        h = c.normal;
      _l.copy(n[c.a]).add(n[c.b]).add(n[c.c]).divideScalar(3).applyMatrix4(t), wl.copy(h).applyMatrix3(Ml).normalize().multiplyScalar(this.size).add(_l), e.setXYZ(a, _l.x, _l.y, _l.z), a += 1, e.setXYZ(a, wl.x, wl.y, wl.z), a += 1 } e.needsUpdate = !0 }), ((ou.prototype = Object.create(Zi.prototype)).constructor = ou).prototype.dispose = function() { this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose() }, ou.prototype.update = (El = new je, Tl = new je, Sl = new je, function() { El.setFromMatrixPosition(this.light.matrixWorld), Tl.setFromMatrixPosition(this.light.target.matrixWorld), Sl.subVectors(Tl, El), this.lightPlane.lookAt(Sl), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Sl), this.targetLine.scale.z = Sl.length() }), ((su.prototype = Object.create(Eo.prototype)).constructor = su).prototype.update = function() { var c, h, l = new je,
      u = new Qi;

    function t(t, e, i, n) { l.set(e, i, n).unproject(u); var r = h[t]; if (void 0 !== r)
        for (var a = c.getAttribute("position"), o = 0, s = r.length; o < s; o++) a.setXYZ(r[o], l.x, l.y, l.z) } return function() { c = this.geometry, h = this.pointMap;
      u.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), c.getAttribute("position").needsUpdate = !0 } }(), ((cu.prototype = Object.create(Eo.prototype)).constructor = cu).prototype.update = (Al = new fi, function(t) { if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Al.setFromObject(this.object), !Al.isEmpty()) { var e = Al.min,
        i = Al.max,
        n = this.geometry.attributes.position,
        r = n.array;
      r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere() } }), cu.prototype.setFromObject = function(t) { return this.object = t, this.update(), this }, ((hu.prototype = Object.create(Eo.prototype)).constructor = hu).prototype.updateMatrixWorld = function(t) { var e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), Zi.prototype.updateMatrixWorld.call(this, t)) }, ((lu.prototype = Object.create(Mo.prototype)).constructor = lu).prototype.updateMatrixWorld = function(t) { var e = -this.plane.constant;
    Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? wt : D, this.lookAt(this.plane.normal), Zi.prototype.updateMatrixWorld.call(this, t) }, ((uu.prototype = Object.create(Zi.prototype)).constructor = uu).prototype.setDirection = (Pl = new je, function(t) { .99999 < t.y ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (Pl.set(t.z, 0, -t.x).normalize(), Cl = Math.acos(t.y), this.quaternion.setFromAxisAngle(Pl, Cl)) }), uu.prototype.setLength = function(t, e, i) { void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix() }, uu.prototype.setColor = function(t) { this.line.material.color.copy(t), this.cone.material.color.copy(t) }, (pu.prototype = Object.create(Eo.prototype)).constructor = pu; var du;

  function fu(t) { console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), yc.call(this, t), this.type = "catmullrom", this.closed = !0 }

  function mu(t) { console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), yc.call(this, t), this.type = "catmullrom" }

  function gu(t) { console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), yc.call(this, t), this.type = "catmullrom" } lc.create = function(t, e) { return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(lc.prototype), (t.prototype.constructor = t).prototype.getPoint = e, t }, Object.assign(Cc.prototype, { createPointsGeometry: function(t) { console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); var e = this.getPoints(t); return this.createGeometry(e) }, createSpacedPointsGeometry: function(t) { console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); var e = this.getSpacedPoints(t); return this.createGeometry(e) }, createGeometry: function(t) { console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); for (var e = new hn, i = 0, n = t.length; i < n; i++) { var r = t[i];
        e.vertices.push(new je(r.x, r.y, r.z || 0)) } return e } }), Object.assign(Pc.prototype, { fromPoints: function(t) { console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t) } }), fu.prototype = Object.create(yc.prototype), mu.prototype = Object.create(yc.prototype), gu.prototype = Object.create(yc.prototype), Object.assign(gu.prototype, { initFromArray: function() { console.error("THREE.Spline: .initFromArray() has been removed.") }, getControlPointsArray: function() { console.error("THREE.Spline: .getControlPointsArray() has been removed.") }, reparametrizeByArcLength: function() { console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.") } }), nu.prototype.setColors = function() { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.") }, $l.prototype.update = function() { console.error("THREE.SkeletonHelper: update() no longer needs to be called.") }, Object.assign(uh.prototype, { extractUrlBase: function(t) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ph.extractUrlBase(t) } }), Object.assign(Yl.prototype, { center: function(t) { return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t) }, empty: function() { return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, isIntersectionBox: function(t) { return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, size: function(t) { return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t) } }), Object.assign(fi.prototype, { center: function(t) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, empty: function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, isIntersectionBox: function(t) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, isIntersectionSphere: function(t) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) }, size: function(t) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t) } }), Jl.prototype.center = function(t) { return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, Object.assign(Ge, { random16: function() { return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random() }, nearestPowerOfTwo: function(t) { return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ge.floorPowerOfTwo(t) }, nextPowerOfTwo: function(t) { return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ge.ceilPowerOfTwo(t) } }), Object.assign(We.prototype, { flattenToArrayOffset: function(t, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, multiplyVector3: function(t) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this) }, multiplyVector3Array: function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") }, applyToBuffer: function(t) { return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t) }, applyToVector3Array: function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") } }), Object.assign(Ve.prototype, { extractPosition: function(t) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t) }, flattenToArrayOffset: function(t, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, getPosition: function() { return void 0 === du && (du = new je), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), du.setFromMatrixColumn(this, 3) }, setRotationFromQuaternion: function(t) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t) }, multiplyToArray: function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") }, multiplyVector3: function(t) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, multiplyVector4: function(t) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, multiplyVector3Array: function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") }, rotateAxis: function(t) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this) }, crossVector: function(t) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, translate: function() { console.error("THREE.Matrix4: .translate() has been removed.") }, rotateX: function() { console.error("THREE.Matrix4: .rotateX() has been removed.") }, rotateY: function() { console.error("THREE.Matrix4: .rotateY() has been removed.") }, rotateZ: function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") }, rotateByAxis: function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") }, applyToBuffer: function(t) { return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t) }, applyToVector3Array: function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") }, makeFrustum: function(t, e, i, n, r, a) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, i, r, a) } }), gi.prototype.isIntersectionLine = function(t) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t) }, ke.prototype.multiplyVector3 = function(t) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this) }, Object.assign(pr.prototype, { isIntersectionBox: function(t) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, isIntersectionPlane: function(t) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t) }, isIntersectionSphere: function(t) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) } }), Object.assign(dr.prototype, { area: function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() }, barycoordFromPoint: function(t, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e) }, midpoint: function(t) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t) }, normal: function(t) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t) }, plane: function(t) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t) } }), Object.assign(dr, { barycoordFromPoint: function(t, e, i, n, r) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), dr.getBarycoord(t, e, i, n, r) }, normal: function(t, e, i, n) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), dr.getNormal(t, e, i, n) } }), Object.assign(Oc.prototype, { extractAllPoints: function(t) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t) }, extrude: function(t) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new _s(this, t) }, makeGeometry: function(t) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Is(this, t) } }), Object.assign(He.prototype, { fromAttribute: function(t, e, i) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i) }, distanceToManhattan: function(t) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, lengthManhattan: function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(je.prototype, { setEulerFromRotationMatrix: function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") }, setEulerFromQuaternion: function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") }, getPositionFromMatrix: function(t) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t) }, getScaleFromMatrix: function(t) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t) }, getColumnFromMatrix: function(t, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t) }, applyProjection: function(t) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t) }, fromAttribute: function(t, e, i) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i) }, distanceToManhattan: function(t) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, lengthManhattan: function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(li.prototype, { fromAttribute: function(t, e, i) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i) }, lengthManhattan: function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(hn.prototype, { computeTangents: function() { console.error("THREE.Geometry: .computeTangents() has been removed.") }, computeLineDistances: function() { console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.") } }), Object.assign(Zi.prototype, { getChildByName: function(t) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t) }, renderDepth: function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") }, translate: function(t, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t) }, getWorldRotation: function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") } }), Object.defineProperties(Zi.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(t) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } }), Object.defineProperties(yo.prototype, { objects: { get: function() { return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels } } }), Object.defineProperty(xo.prototype, "useVertexTexture", { get: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") }, set: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") } }), Object.defineProperty(lc.prototype, "__arcLengthDivisions", { get: function() { return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions }, set: function(t) { console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t } }), ao.prototype.setLens = function(t, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t) }, Object.defineProperties(Ic.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(t) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t } }, shadowCameraLeft: { set: function(t) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t } }, shadowCameraRight: { set: function(t) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t } }, shadowCameraTop: { set: function(t) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t } }, shadowCameraBottom: { set: function(t) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t } }, shadowCameraNear: { set: function(t) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t } }, shadowCameraFar: { set: function(t) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(t) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(t) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t } }, shadowMapHeight: { set: function(t) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t } } }), Object.defineProperties(ln.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, copyIndicesArray: function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") } }), Object.assign(In.prototype, { addIndex: function(t) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t) }, addDrawCall: function(t, e, i) { void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e) }, clearDrawCalls: function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() }, computeTangents: function() { console.warn("THREE.BufferGeometry: .computeTangents() has been removed.") }, computeOffsets: function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") } }), Object.defineProperties(In.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } }), Object.assign(ws.prototype, { getArrays: function() { console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.") }, addShapeList: function() { console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.") }, addShape: function() { console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.") } }), Object.defineProperties(Fl.prototype, { dynamic: { set: function() { console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.") } }, onUpdate: { value: function() { return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this } } }), Object.defineProperties(hr.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new wi } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(t) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t } } }), Object.defineProperties(Ys.prototype, { metal: { get: function() { return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1 }, set: function() { console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead") } } }), Object.defineProperties(ur.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(t) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t } } }), Object.assign(ho.prototype, { animate: function(t) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t) }, getCurrentRenderTarget: function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() }, getMaxAnisotropy: function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() }, getPrecision: function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision }, resetGLState: function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() }, supportsFloatTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") }, supportsHalfFloatTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") }, supportsStandardDerivatives: function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") }, supportsCompressedTextureS3TC: function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") }, supportsCompressedTexturePVRTC: function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") }, supportsBlendMinMax: function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") }, supportsVertexTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures }, supportsInstancedArrays: function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") }, enableScissorTest: function(t) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t) }, initMaterial: function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") }, addPrePlugin: function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") }, addPostPlugin: function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") }, updateShadowMap: function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") }, setFaceCulling: function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") } }), Object.defineProperties(ho.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(to.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(ui.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t } } }), Object.defineProperties(so.prototype, { standing: { set: function() { console.warn("THREE.WebVRManager: .standing has been removed.") } } }), qh.prototype.load = function(t) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); var e = this; return (new kh).load(t, function(t) { e.setBuffer(t) }), this }, Jh.prototype.getData = function() { return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData() }, Wh.prototype.updateCubeMap = function(t, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e) }; var vu = { merge: function(t, e, i) { var n;
      console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e, n, i) }, center: function(t) { return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center() } };
  si.crossOrigin = void 0, si.loadTexture = function(t, e, i, n) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); var r = new hc;
    r.setCrossOrigin(this.crossOrigin); var a = r.load(t, i, void 0, n); return e && (a.mapping = e), a }, si.loadTextureCube = function(t, e, i, n) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); var r = new cc;
    r.setCrossOrigin(this.crossOrigin); var a = r.load(t, i, void 0, n); return e && (a.mapping = e), a }, si.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") }, si.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") }; var yu = { createMultiMaterialObject: function() { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js") }, detach: function() { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js") }, attach: function() { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js") } };
  t.WebGLRenderTargetCube = pi, t.WebGLRenderTarget = ui, t.WebGLRenderer = ho, t.ShaderLib = Si, t.UniformsLib = Ti, t.UniformsUtils = bi, t.ShaderChunk = xi, t.FogExp2 = lo, t.Fog = uo, t.Scene = po, t.Sprite = vo, t.LOD = yo, t.SkinnedMesh = _o, t.Skeleton = xo, t.Bone = bo, t.Mesh = fr, t.LineSegments = Eo, t.LineLoop = To, t.Line = Mo, t.Points = Ao, t.Group = ro, t.VideoTexture = Lo, t.DataTexture = di, t.CompressedTexture = Ro, t.CubeTexture = Sr, t.CanvasTexture = Co, t.DepthTexture = Po, t.Texture = hi, t.CompressedTextureLoader = ac, t.DataTextureLoader = oc, t.CubeTextureLoader = cc, t.TextureLoader = hc, t.ObjectLoader = fh, t.MaterialLoader = rh, t.BufferGeometryLoader = ah, t.DefaultLoadingManager = ic, t.LoadingManager = ec, t.JSONLoader = dh, t.ImageLoader = sc, t.ImageBitmapLoader = xh, t.FontLoader = Mh, t.FileLoader = rc, t.Loader = uh, t.LoaderUtils = ph, t.Cache = tc, t.AudioLoader = kh, t.SpotLightShadow = Uc, t.SpotLight = Bc, t.PointLight = Fc, t.RectAreaLight = Vc, t.HemisphereLight = Nc, t.DirectionalLightShadow = zc, t.DirectionalLight = Gc, t.AmbientLight = Hc, t.LightShadow = Dc, t.Light = Ic, t.StereoCamera = jh, t.PerspectiveCamera = ao, t.OrthographicCamera = Ki, t.CubeCamera = Wh, t.ArrayCamera = oo, t.Camera = Qi, t.AudioListener = Xh, t.PositionalAudio = Yh, t.AudioContext = Vh, t.AudioAnalyser = Jh, t.Audio = qh, t.VectorKeyframeTrack = eh, t.StringKeyframeTrack = th, t.QuaternionKeyframeTrack = $c, t.NumberKeyframeTrack = Qc, t.ColorKeyframeTrack = Zc, t.BooleanKeyframeTrack = Jc, t.PropertyMixer = Zh, t.PropertyBinding = Nl, t.KeyframeTrack = Yc, t.AnimationUtils = kc, t.AnimationObjectGroup = Dl, t.AnimationMixer = Bl, t.AnimationClip = ih, t.Uniform = Fl, t.InstancedBufferGeometry = zl, t.BufferGeometry = In, t.Geometry = hn, t.InterleavedBufferAttribute = mo, t.InstancedInterleavedBuffer = Gl, t.InterleavedBuffer = fo, t.InstancedBufferAttribute = Hl, t.Face3 = $i, t.Object3D = Zi, t.Raycaster = Vl, t.Layers = Ci, t.EventDispatcher = e, t.Clock = Wl, t.QuaternionLinearInterpolant = Kc, t.LinearInterpolant = Xc, t.DiscreteInterpolant = qc, t.CubicInterpolant = Wc, t.Interpolant = jc, t.Triangle = dr, t.Math = Ge, t.Spherical = Xl, t.Cylindrical = ql, t.Plane = gi, t.Frustum = vi, t.Sphere = mi, t.Ray = pr, t.Matrix4 = Ve, t.Matrix3 = We, t.Box3 = fi, t.Box2 = Yl, t.Line3 = Jl, t.Euler = Ri, t.Vector4 = li, t.Vector3 = je, t.Vector2 = He, t.Quaternion = ke, t.Color = wi, t.ImmediateRenderObject = Zl, t.VertexNormalsHelper = Ql, t.SpotLightHelper = Kl, t.SkeletonHelper = $l, t.PointLightHelper = tu, t.RectAreaLightHelper = eu, t.HemisphereLightHelper = iu, t.GridHelper = nu, t.PolarGridHelper = ru, t.FaceNormalsHelper = au, t.DirectionalLightHelper = ou, t.CameraHelper = su, t.BoxHelper = cu, t.Box3Helper = hu, t.PlaneHelper = lu, t.ArrowHelper = uu, t.AxesHelper = pu, t.Shape = Oc, t.Path = Pc, t.ShapePath = bh, t.Font = _h, t.CurvePath = Cc, t.Curve = lc, t.ImageUtils = si, t.ShapeUtils = ys, t.WebGLUtils = no, t.WireframeGeometry = Oo, t.ParametricGeometry = Io, t.ParametricBufferGeometry = No, t.TetrahedronGeometry = Bo, t.TetrahedronBufferGeometry = Fo, t.OctahedronGeometry = zo, t.OctahedronBufferGeometry = Go, t.IcosahedronGeometry = Ho, t.IcosahedronBufferGeometry = Vo, t.DodecahedronGeometry = ko, t.DodecahedronBufferGeometry = jo, t.PolyhedronGeometry = Do, t.PolyhedronBufferGeometry = Uo, t.TubeGeometry = Wo, t.TubeBufferGeometry = Xo, t.TorusKnotGeometry = qo, t.TorusKnotBufferGeometry = Yo, t.TorusGeometry = Jo, t.TorusBufferGeometry = Zo, t.TextGeometry = Ts, t.TextBufferGeometry = Ss, t.SphereGeometry = As, t.SphereBufferGeometry = Ls, t.RingGeometry = Rs, t.RingBufferGeometry = Cs, t.PlaneGeometry = Un, t.PlaneBufferGeometry = Bn, t.LatheGeometry = Ps, t.LatheBufferGeometry = Os, t.ShapeGeometry = Is, t.ShapeBufferGeometry = Ns, t.ExtrudeGeometry = _s, t.ExtrudeBufferGeometry = ws, t.EdgesGeometry = Us, t.ConeGeometry = zs, t.ConeBufferGeometry = Gs, t.CylinderGeometry = Bs, t.CylinderBufferGeometry = Fs, t.CircleGeometry = Hs, t.CircleBufferGeometry = Vs, t.BoxGeometry = Nn, t.BoxBufferGeometry = Dn, t.ShadowMaterial = js, t.SpriteMaterial = go, t.RawShaderMaterial = Ws, t.ShaderMaterial = ur, t.PointsMaterial = So, t.MeshPhysicalMaterial = qs, t.MeshStandardMaterial = Xs, t.MeshPhongMaterial = Ys, t.MeshToonMaterial = Js, t.MeshNormalMaterial = Zs, t.MeshLambertMaterial = Qs, t.MeshDepthMaterial = Ka, t.MeshDistanceMaterial = $a, t.MeshBasicMaterial = lr, t.LineDashedMaterial = Ks, t.LineBasicMaterial = wo, t.Material = hr, t.Float64BufferAttribute = xn, t.Float32BufferAttribute = yn, t.Uint32BufferAttribute = vn, t.Int32BufferAttribute = gn, t.Uint16BufferAttribute = mn, t.Int16BufferAttribute = fn, t.Uint8ClampedBufferAttribute = dn, t.Uint8BufferAttribute = pn, t.Int8BufferAttribute = un, t.BufferAttribute = ln, t.ArcCurve = pc, t.CatmullRomCurve3 = yc, t.CubicBezierCurve = wc, t.CubicBezierCurve3 = Mc, t.EllipseCurve = uc, t.LineCurve = Ec, t.LineCurve3 = Tc, t.QuadraticBezierCurve = Sc, t.QuadraticBezierCurve3 = Ac, t.SplineCurve = Lc, t.REVISION = "95", t.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }, t.CullFaceNone = W, t.CullFaceBack = X, t.CullFaceFront = q, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = 0, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = G, t.PCFSoftShadowMap = H, t.FrontSide = D, t.BackSide = wt, t.DoubleSide = et, t.FlatShading = 1, t.SmoothShading = 2, t.NoColors = E, t.FaceColors = 1, t.VertexColors = T, t.NoBlending = Y, t.NormalBlending = J, t.AdditiveBlending = Z, t.SubtractiveBlending = Q, t.MultiplyBlending = K, t.CustomBlending = $, t.AddEquation = S, t.SubtractEquation = A, t.ReverseSubtractEquation = L, t.MinEquation = R, t.MaxEquation = C, t.ZeroFactor = P, t.OneFactor = O, t.SrcColorFactor = I, t.OneMinusSrcColorFactor = N, t.SrcAlphaFactor = U, t.OneMinusSrcAlphaFactor = B, t.DstAlphaFactor = F, t.OneMinusDstAlphaFactor = z, t.DstColorFactor = V, t.OneMinusDstColorFactor = k, t.SrcAlphaSaturateFactor = j, t.NeverDepth = tt, t.AlwaysDepth = it, t.LessDepth = nt, t.LessEqualDepth = rt, t.EqualDepth = at, t.GreaterEqualDepth = ot, t.GreaterDepth = st, t.NotEqualDepth = ct, t.MultiplyOperation = ht, t.MixOperation = lt, t.AddOperation = ut, t.NoToneMapping = pt, t.LinearToneMapping = Mt, t.ReinhardToneMapping = dt, t.Uncharted2ToneMapping = ft, t.CineonToneMapping = mt, t.UVMapping = 300, t.CubeReflectionMapping = gt, t.CubeRefractionMapping = vt, t.EquirectangularReflectionMapping = yt, t.EquirectangularRefractionMapping = xt, t.SphericalReflectionMapping = bt, t.CubeUVReflectionMapping = _t, t.CubeUVRefractionMapping = Et, t.RepeatWrapping = Tt, t.ClampToEdgeWrapping = St, t.MirroredRepeatWrapping = At, t.NearestFilter = Lt, t.NearestMipMapNearestFilter = Rt, t.NearestMipMapLinearFilter = Ct, t.LinearFilter = Pt, t.LinearMipMapNearestFilter = Ot, t.LinearMipMapLinearFilter = It, t.UnsignedByteType = Nt, t.ByteType = Dt, t.ShortType = Ut, t.UnsignedShortType = Bt, t.IntType = Ft, t.UnsignedIntType = zt, t.FloatType = Gt, t.HalfFloatType = Ht, t.UnsignedShort4444Type = Vt, t.UnsignedShort5551Type = kt, t.UnsignedShort565Type = jt, t.UnsignedInt248Type = Wt, t.AlphaFormat = Xt, t.RGBFormat = qt, t.RGBAFormat = Yt, t.LuminanceFormat = Jt, t.LuminanceAlphaFormat = Zt, t.RGBEFormat = Qt, t.DepthFormat = Kt, t.DepthStencilFormat = $t, t.RGB_S3TC_DXT1_Format = te, t.RGBA_S3TC_DXT1_Format = ee, t.RGBA_S3TC_DXT3_Format = ie, t.RGBA_S3TC_DXT5_Format = ne, t.RGB_PVRTC_4BPPV1_Format = re, t.RGB_PVRTC_2BPPV1_Format = ae, t.RGBA_PVRTC_4BPPV1_Format = oe, t.RGBA_PVRTC_2BPPV1_Format = se, t.RGB_ETC1_Format = ce, t.RGBA_ASTC_4x4_Format = he, t.RGBA_ASTC_5x4_Format = le, t.RGBA_ASTC_5x5_Format = ue, t.RGBA_ASTC_6x5_Format = pe, t.RGBA_ASTC_6x6_Format = de, t.RGBA_ASTC_8x5_Format = fe, t.RGBA_ASTC_8x6_Format = me, t.RGBA_ASTC_8x8_Format = ge, t.RGBA_ASTC_10x5_Format = ve, t.RGBA_ASTC_10x6_Format = ye, t.RGBA_ASTC_10x8_Format = xe, t.RGBA_ASTC_10x10_Format = be, t.RGBA_ASTC_12x10_Format = _e, t.RGBA_ASTC_12x12_Format = we, t.LoopOnce = 2200, t.LoopRepeat = 2201, t.LoopPingPong = 2202, t.InterpolateDiscrete = Me, t.InterpolateLinear = Ee, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = Te, t.ZeroSlopeEnding = Se, t.WrapAroundEnding = Ae, t.TrianglesDrawMode = Le, t.TriangleStripDrawMode = 1, t.TriangleFanDrawMode = 2, t.LinearEncoding = Re, t.sRGBEncoding = Ce, t.GammaEncoding = Pe, t.RGBEEncoding = Oe, t.LogLuvEncoding = 3003, t.RGBM7Encoding = Ie, t.RGBM16Encoding = Ne, t.RGBDEncoding = De, t.BasicDepthPacking = Ue, t.RGBADepthPacking = Be, t.TangentSpaceNormalMap = Fe, t.ObjectSpaceNormalMap = ze, t.CubeGeometry = Nn, t.Face4 = function(t, e, i, n, r, a, o) { return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new $i(t, e, i, r, a, o) }, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = function(t) { return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t }, t.MultiMaterial = function(t) { return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, (t.materials = t).clone = function() { return t.slice() }, t }, t.PointCloud = function(t, e) { return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Ao(t, e) }, t.Particle = function(t) { return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new vo(t) }, t.ParticleSystem = function(t, e) { return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Ao(t, e) }, t.PointCloudMaterial = function(t) { return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new So(t) }, t.ParticleBasicMaterial = function(t) { return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new So(t) }, t.ParticleSystemMaterial = function(t) { return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new So(t) }, t.Vertex = function(t, e, i) { return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new je(t, e, i) }, t.DynamicBufferAttribute = function(t, e) { return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new ln(t, e).setDynamic(!0) }, t.Int8Attribute = function(t, e) { return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new un(t, e) }, t.Uint8Attribute = function(t, e) { return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new pn(t, e) }, t.Uint8ClampedAttribute = function(t, e) { return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new dn(t, e) }, t.Int16Attribute = function(t, e) { return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new fn(t, e) }, t.Uint16Attribute = function(t, e) { return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new mn(t, e) }, t.Int32Attribute = function(t, e) { return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new gn(t, e) }, t.Uint32Attribute = function(t, e) { return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new vn(t, e) }, t.Float32Attribute = function(t, e) { return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new yn(t, e) }, t.Float64Attribute = function(t, e) { return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new xn(t, e) }, t.ClosedSplineCurve3 = fu, t.SplineCurve3 = mu, t.Spline = gu, t.AxisHelper = function(t) { return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new pu(t) }, t.BoundingBoxHelper = function(t, e) { return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new cu(t, e) }, t.EdgesHelper = function(t, e) { return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new Eo(new Us(t.geometry), new wo({ color: void 0 !== e ? e : 16777215 })) }, t.WireframeHelper = function(t, e) { return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new Eo(new Oo(t.geometry), new wo({ color: void 0 !== e ? e : 16777215 })) }, t.XHRLoader = function(t) { return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new rc(t) }, t.BinaryTextureLoader = function(t) { return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new oc(t) }, t.GeometryUtils = vu, t.Projector = function() { console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) { console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e) }, this.unprojectVector = function(t, e) { console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e) }, this.pickingRay = function() { console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().") } }, t.CanvasRenderer = function() { console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {} }, t.SceneUtils = yu, t.LensFlare = function() { console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js") }, Object.defineProperty(t, "__esModule", { value: !0 }) });
