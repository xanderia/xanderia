! function(e, n) {
	for (var t in n) e[t] = n[t]
}(window, function(e) {
	var n = {};

	function t(r) {
		if (n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	return t.m = e, t.c = n, t.d = function(e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: r
		})
	}, t.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, t.t = function(e, n) {
		if (1 & n && (e = t(e)), 8 & n) return e;
		if (4 & n && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (t.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & n && "string" != typeof e)
			for (var o in e) t.d(r, o, function(n) {
				return e[n]
			}.bind(null, o));
		return r
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, n) {
		return {}.hasOwnProperty.call(e, n)
	}, t.p = "", t(t.s = 87)
}([function(e, n, t) {
	"use strict";
	var r = t(7);

	function o(e) {
		if (!o.types.hasOwnProperty(e.type)) throw new Error(e.type + " is not a valid type.");
		if (!e.code) throw new Error("Error code required.");
		if (!e.message) throw new Error("Error message required.");
		this.name = "BraintreeError", this.code = e.code, this.message = e.message, this.type = e.type, this.details = e.details
	}(o.prototype = Object.create(Error.prototype)).constructor = o, o.types = r(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]), o.findRootError = function(e) {
		return e instanceof o && e.details && e.details.originalError ? o.findRootError(e.details.originalError) : e
	}, e.exports = o
}, function(e, n, t) {
	"use strict";
	var r = "function" == typeof Object.assign ? Object.assign : o;

	function o(e) {
		var n, t, r;
		for (n = 1; n < arguments.length; n++)
			for (r in t = arguments[n]) t.hasOwnProperty(r) && (e[r] = t[r]);
		return e
	}
	e.exports = {
		assign: r,
		_assign: o
	}
}, function(e, n, t) {
	"use strict";
	var r = window.Promise || t(88);
	e.exports = r
}, function(e, n, t) {
	"use strict";
	var r = "3.32.0-payments-sdk-dev";
	e.exports = {
		ANALYTICS_PREFIX: "web.",
		ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
		INTEGRATION_TIMEOUT_MS: 6e4,
		VERSION: r,
		INTEGRATION: "custom",
		SOURCE: "client",
		PLATFORM: "web",
		BRAINTREE_LIBRARY_VERSION: "braintree/web/" + r
	}
}, function(e, n, t) {
	"use strict";
	var r = t(46),
		o = t(47),
		i = t(48);

	function a(e) {
		return function() {
			var n, t = [].slice.call(arguments);
			return "function" == typeof t[t.length - 1] && (n = t.pop(), n = o(r(n))), i(e.apply(this, t), n)
		}
	}
	a.wrapPrototype = function(e, n) {
		var t, r;
		return t = (n = n || {}).ignoreMethods || [], r = !0 === n.transformPrivateMethods, Object.getOwnPropertyNames(e.prototype).filter(function(n) {
			var o, i = "constructor" !== n && "function" == typeof e.prototype[n],
				a = -1 === t.indexOf(n);
			return o = !!r || "_" !== n.charAt(0), i && o && a
		}).forEach(function(n) {
			e.prototype[n] = a(e.prototype[n])
		}), e
	}, e.exports = a
}, function(e, n, t) {
	"use strict";
	var r = t(0);
	e.exports = {
		INVALID_USE_OF_INTERNAL_FUNCTION: {
			type: r.types.INTERNAL,
			code: "INVALID_USE_OF_INTERNAL_FUNCTION"
		},
		CALLBACK_REQUIRED: {
			type: r.types.MERCHANT,
			code: "CALLBACK_REQUIRED"
		},
		INSTANTIATION_OPTION_REQUIRED: {
			type: r.types.MERCHANT,
			code: "INSTANTIATION_OPTION_REQUIRED"
		},
		INVALID_OPTION: {
			type: r.types.MERCHANT,
			code: "INVALID_OPTION"
		},
		INCOMPATIBLE_VERSIONS: {
			type: r.types.MERCHANT,
			code: "INCOMPATIBLE_VERSIONS"
		},
		METHOD_CALLED_AFTER_TEARDOWN: {
			type: r.types.MERCHANT,
			code: "METHOD_CALLED_AFTER_TEARDOWN"
		},
		BRAINTREE_API_ACCESS_RESTRICTED: {
			type: r.types.MERCHANT,
			code: "BRAINTREE_API_ACCESS_RESTRICTED",
			message: "Your access is restricted and cannot use this part of the Braintree API."
		},
		PAYPAL_API_ACCESS_RESTRICTED: {
			type: r.types.MERCHANT,
			code: "PAYPAL_API_ACCESS_RESTRICTED",
			message: "Your access is restricted and cannot use this part of the PayPal API."
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(0);
	e.exports = {
		HOSTED_FIELDS_TIMEOUT: {
			type: r.types.UNKNOWN,
			code: "HOSTED_FIELDS_TIMEOUT",
			message: "Hosted Fields timed out when attempting to set up."
		},
		HOSTED_FIELDS_INVALID_FIELD_KEY: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_INVALID_FIELD_KEY"
		},
		HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
			message: "Selector does not reference a valid DOM node."
		},
		HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
			message: "Element already contains a Braintree iframe."
		},
		HOSTED_FIELDS_FIELD_INVALID: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_FIELD_INVALID"
		},
		HOSTED_FIELDS_FIELD_NOT_PRESENT: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_FIELD_NOT_PRESENT"
		},
		HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
			type: r.types.NETWORK,
			code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
			message: "A tokenization network error occurred."
		},
		HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
			type: r.types.CUSTOMER,
			code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
			message: "This credit card already exists in the merchant's vault."
		},
		HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
			type: r.types.CUSTOMER,
			code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
			message: "CVV verification failed during tokenization."
		},
		HOSTED_FIELDS_FAILED_TOKENIZATION: {
			type: r.types.CUSTOMER,
			code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
			message: "The supplied card data failed tokenization."
		},
		HOSTED_FIELDS_FIELDS_EMPTY: {
			type: r.types.CUSTOMER,
			code: "HOSTED_FIELDS_FIELDS_EMPTY",
			message: "All fields are empty. Cannot tokenize empty card fields."
		},
		HOSTED_FIELDS_FIELDS_INVALID: {
			type: r.types.CUSTOMER,
			code: "HOSTED_FIELDS_FIELDS_INVALID",
			message: "Some payment input fields are invalid. Cannot tokenize invalid card fields."
		},
		HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED"
		},
		HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED"
		},
		HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
			type: r.types.MERCHANT,
			code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID"
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		return n = null == n ? "" : n, e.reduce(function(e, t) {
			return e[t] = n + t, e
		}, {})
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return -1 !== (e = e || navigator.userAgent).indexOf("MSIE 9")
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		var n = !1;
		return function() {
			n || (n = !0, e.apply(null, arguments))
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
			var n = 16 * Math.random() | 0;
			return ("x" === e ? n : 3 & n | 8).toString(16)
		})
	}
}, function(e, n, t) {
	"use strict";
	var r = t(0);
	e.exports = {
		CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
			type: r.types.MERCHANT,
			code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"
		},
		CLIENT_OPTION_REQUIRED: {
			type: r.types.MERCHANT,
			code: "CLIENT_OPTION_REQUIRED"
		},
		CLIENT_OPTION_INVALID: {
			type: r.types.MERCHANT,
			code: "CLIENT_OPTION_INVALID"
		},
		CLIENT_MISSING_GATEWAY_CONFIGURATION: {
			type: r.types.INTERNAL,
			code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
			message: "Missing gatewayConfiguration."
		},
		CLIENT_INVALID_AUTHORIZATION: {
			type: r.types.MERCHANT,
			code: "CLIENT_INVALID_AUTHORIZATION",
			message: "Authorization is invalid. Make sure your client token or tokenization key is valid."
		},
		CLIENT_GATEWAY_NETWORK: {
			type: r.types.NETWORK,
			code: "CLIENT_GATEWAY_NETWORK",
			message: "Cannot contact the gateway at this time."
		},
		CLIENT_REQUEST_TIMEOUT: {
			type: r.types.NETWORK,
			code: "CLIENT_REQUEST_TIMEOUT",
			message: "Request timed out waiting for a reply."
		},
		CLIENT_REQUEST_ERROR: {
			type: r.types.NETWORK,
			code: "CLIENT_REQUEST_ERROR",
			message: "There was a problem with your request."
		},
		CLIENT_RATE_LIMITED: {
			type: r.types.MERCHANT,
			code: "CLIENT_RATE_LIMITED",
			message: "You are being rate-limited; please try again in a few minutes."
		},
		CLIENT_AUTHORIZATION_INSUFFICIENT: {
			type: r.types.MERCHANT,
			code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
			message: "The authorization used has insufficient privileges."
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(7),
		o = t(6),
		i = {
			VERSION: "3.32.0-payments-sdk-dev",
			maxExpirationYearAge: 19,
			externalEvents: {
				FOCUS: "focus",
				BLUR: "blur",
				EMPTY: "empty",
				NOT_EMPTY: "notEmpty",
				VALIDITY_CHANGE: "validityChange",
				CARD_TYPE_CHANGE: "cardTypeChange"
			},
			defaultMaxLengths: {
				number: 19,
				postalCode: 8,
				expirationDate: 7,
				expirationMonth: 2,
				expirationYear: 4,
				cvv: 3
			},
			externalClasses: {
				FOCUSED: "braintree-hosted-fields-focused",
				INVALID: "braintree-hosted-fields-invalid",
				VALID: "braintree-hosted-fields-valid"
			},
			defaultIFrameStyle: {
				border: "none",
				width: "100%",
				height: "100%",
				float: "left"
			},
			tokenizationErrorCodes: {
				81724: o.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
				81736: o.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED
			},
			whitelistedStyles: ["-moz-appearance", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-webkit-appearance", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition", "appearance", "color", "direction", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-weight", "letter-spacing", "line-height", "padding", "opacity", "outline", "text-shadow", "transition"],
			whitelistedFields: {
				number: {
					name: "credit-card-number",
					label: "Credit Card Number"
				},
				cvv: {
					name: "cvv",
					label: "CVV"
				},
				expirationDate: {
					name: "expiration",
					label: "Expiration Date"
				},
				expirationMonth: {
					name: "expiration-month",
					label: "Expiration Month"
				},
				expirationYear: {
					name: "expiration-year",
					label: "Expiration Year"
				},
				postalCode: {
					name: "postal-code",
					label: "Postal Code"
				}
			},
			whitelistedAttributes: {
				"aria-invalid": "boolean",
				"aria-required": "boolean",
				disabled: "boolean",
				placeholder: "string"
			},
			autocompleteMappings: {
				"credit-card-number": "cc-number",
				expiration: "cc-exp",
				"expiration-month": "cc-exp-month",
				"expiration-year": "cc-exp-year",
				cvv: "cc-csc",
				"postal-code": "billing postal-code"
			}
		};
	i.events = r(["FRAME_READY", "VALIDATE_STRICT", "CONFIGURATION", "TOKENIZATION_REQUEST", "INPUT_EVENT", "TRIGGER_INPUT_FOCUS", "ADD_CLASS", "REMOVE_CLASS", "SET_ATTRIBUTE", "REMOVE_ATTRIBUTE", "CLEAR_FIELD", "AUTOFILL_EXPIRATION_DATE", "SET_MESSAGE"], "hosted-fields:"), e.exports = i
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return e = e || window.navigator.userAgent, /iPhone|iPod|iPad/i.test(e)
	}
}, function(e, n, t) {
	var r = t(29),
		o = t(8);
	e.exports = {
		isIe: r,
		isIe9: o
	}
}, function(e, n, t) {
	"use strict";
	var r, o = t(9),
		i = t(31),
		a = t(32),
		s = t(41),
		c = t(42);
	e.exports = function(e, n) {
		n = o(n || Function.prototype), e.method = (e.method || "GET").toUpperCase(), e.timeout = null == e.timeout ? 6e4 : e.timeout, e.data = e.data || {}, null == r && (r = !(c() && /MSIE\s(8|9)/.test(s()))), r ? a.request(e, n) : i.request(e, n)
	}
}, function(e, n, t) {
	"use strict";

	function r(e, n) {
		var t, o, i, a, s = [];
		for (i in e) e.hasOwnProperty(i) && (o = e[i], t = n ? (a = e) && "object" == typeof a && "number" == typeof a.length && "[object Array]" === {}.toString.call(a) ? n + "[]" : n + "[" + i + "]" : i, s.push("object" == typeof o ? r(o, t) : encodeURIComponent(t) + "=" + encodeURIComponent(o)));
		return s.join("&")
	}
	e.exports = {
		parse: function(e) {
			return e = e || window.location.href, /\?/.test(e) ? e.replace(/#.*$/, "").replace(/^.*\?/, "").split("&").reduce(function(e, n) {
				var t = n.split("="),
					r = decodeURIComponent(t[0]),
					o = decodeURIComponent(t[1]);
				return e[r] = o, e
			}, {}) : {}
		},
		stringify: r,
		queryify: function(e, n) {
			var t = "",
				o = "";
			return -1 !== (e = e || "").indexOf("#") && (o = e.split("#"), e = o[0], t = "#" + o[1]), null != n && "object" == typeof n && function(e) {
				var n;
				for (n in e)
					if (e.hasOwnProperty(n)) return !0;
				return !1
			}(n) && (e += -1 === e.indexOf("?") ? "?" : "", e += -1 !== e.indexOf("=") ? "&" : "", e += r(n)), e + t
		}
	}
}, function(e, n, t) {
	"use strict";
	var r, o = {
		"paypal.com": 1,
		"paypalcorp.com": 1,
		"braintreepayments.com": 1,
		"braintreegateway.com": 1,
		"braintree-api.com": 1,
		"herokuapp.com": 1
	};
	e.exports = function(e) {
		var n;
		return e = e.toLowerCase(), !!/^https:/.test(e) && ((r = r || document.createElement("a")).href = e, n = r.hostname.split(".").slice(-2).join("."), o.hasOwnProperty(n))
	}
}, function(e, n, t) {
	"use strict";
	var r = t(19),
		o = t(45),
		i = t(3);
	e.exports = function(e, n) {
		var t, a = n ? o(n) : {},
			s = r(e.authorization).attrs,
			c = o(e.analyticsMetadata);
		for (t in a.braintreeLibraryVersion = i.BRAINTREE_LIBRARY_VERSION, a._meta) a._meta.hasOwnProperty(t) && (c[t] = a._meta[t]);
		return a._meta = c, s.tokenizationKey ? a.tokenizationKey = s.tokenizationKey : a.authorizationFingerprint = s.authorizationFingerprint, a
	}
}, function(e, n, t) {
	"use strict";
	var r = t(1).assign,
		o = t(44).atob,
		i = {
			production: "https://api.braintreegateway.com:443",
			sandbox: "https://api.sandbox.braintreegateway.com:443"
		};
	e.exports = function(e) {
		var n, t, a, s, c = {
			attrs: {},
			configUrl: ""
		};
		return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (s = (a = e.split("_"))[0], t = {
			merchantId: a.slice(2).join("_"),
			environment: s
		}, c.attrs.tokenizationKey = e, c.configUrl = i[t.environment] + "/merchants/" + t.merchantId + "/client_api/v1/configuration", c.type = "TOKENIZATION_KEY") : (n = JSON.parse(o(e)), /3-paypal/.test(n.version) ? (c = r(c, {
			attrs: {
				configVersion: n.version
			},
			paypal: n.paypal
		})).type = "UNIFIED_CLIENT_TOKEN" : c.type = "CLIENT_TOKEN", c.configUrl = n.configUrl, c.attrs.authorizationFingerprint = n.authorizationFingerprint), c
	}
}, function(e, n, t) {
	"use strict";
	var r = t(3),
		o = t(18);
	e.exports = {
		sendEvent: function(e, n, t) {
			var i, a = e.getConfiguration(),
				s = e._request,
				c = (i = Date.now(), Math.floor(i / 1e3));
			s({
				url: a.gatewayConfiguration.analytics.url,
				method: "post",
				data: o(a, {
					analytics: [{
						kind: r.ANALYTICS_PREFIX + n,
						timestamp: c
					}]
				}),
				timeout: r.ANALYTICS_REQUEST_TIMEOUT_MS
			}, t)
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return Object.keys(e).filter(function(n) {
			return "function" == typeof e[n]
		})
	}
}, function(e, n, t) {
	"use strict";
	var r = t(0),
		o = t(5);
	e.exports = function(e, n) {
		n.forEach(function(n) {
			e[n] = function() {
				throw new r({
					type: o.METHOD_CALLED_AFTER_TEARDOWN.type,
					code: o.METHOD_CALLED_AFTER_TEARDOWN.code,
					message: n + " cannot be called after teardown."
				})
			}
		})
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return e ? "" : ".min"
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return e ? JSON.parse(JSON.stringify(e)) : null
	}
}, function(e, n, t) {
	var r = t(0),
		o = t(27),
		i = t(51),
		a = t(52).getConfiguration,
		s = t(2),
		c = t(4),
		u = t(5),
		l = t(11),
		d = t(53),
		p = {};
	e.exports = {
		create: c(function(e) {
			return e.authorization ? p[e.authorization] ? s.resolve(p[e.authorization]) : (e.paymentsSdk && e.configuration ? function(e, n) {
				var t = d.setup();
				try {
					n = JSON.parse(window.atob(n))
				} catch (e) {
					return s.reject(new r(l.CLIENT_INVALID_AUTHORIZATION))
				}
				var o = Object.keys(i.FUNDING_ELIGIBILITY.card.vendors).filter(function(e) {
					return i.FUNDING_ELIGIBILITY.card.vendors[e].eligible
				});
				return s.resolve({
					analyticsMetadata: "todo_analytics_metadata_needs_to_be_set",
					authorization: "sandbox_f252zhq7_hh4cpc39zq4rgjcg",
					authorizationType: "TOKENIZATION_KEY",
					correlationId: e.correlationId,
					deviceDataId: t.sessionId,
					gatewayConfiguration: {
						paypalApi: {
							baseUrl: e.paypalApi,
							accessToken: n.paypal.accessToken
						},
						assetsUrl: e.assetsUrl,
						analytics: {
							url: "https://example.com/TODO"
						},
						creditCards: {
							supportedCardTypes: o,
							supportedGateways: [{
								name: "paypalApi"
							}]
						}
					}
				})
			}(e.configuration, e.authorization) : a(e)).then(function(n) {
				var t;
				return e.debug && (n.isDebug = !0), t = new o(n), p[e.authorization] = t, t
			}) : s.reject(new r({
				type: u.INSTANTIATION_OPTION_REQUIRED.type,
				code: u.INSTANTIATION_OPTION_REQUIRED.code,
				message: "options.authorization is required when instantiating a client."
			}))
		}),
		VERSION: "3.32.0-payments-sdk-dev",
		_clearCache: function() {
			p = {}
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(54),
		o = t(80),
		i = t(6),
		a = t(81),
		s = t(4),
		c = t(0),
		u = t(2);
	e.exports = {
		supportsInputFormatting: a,
		create: s(function(e) {
			return o.verify({
				name: "Hosted Fields",
				client: e.client
			}).then(function() {
				var n = new r(e);
				return new u(function(e, t) {
					n.on("ready", function() {
						e(n)
					}), n.on("timeout", function() {
						t(new c(i.HOSTED_FIELDS_TIMEOUT))
					})
				})
			})
		}),
		VERSION: "3.32.0-payments-sdk-dev"
	}
}, function(e, n, t) {
	"use strict";
	var r = t(28),
		o = t(15),
		i = t(17),
		a = t(0),
		s = t(43),
		c = t(18),
		u = t(2),
		l = t(4),
		d = t(9),
		p = t(49),
		f = t(1).assign,
		h = (t(20), t(50)),
		E = t(11),
		m = t(5),
		g = t(3).VERSION,
		y = t(21),
		w = t(22);

	function v(e) {
		var n, t, s, c;
		if (e = e || {}, n = JSON.stringify(e), !(t = e.gatewayConfiguration)) throw new a(E.CLIENT_MISSING_GATEWAY_CONFIGURATION);
		if (["assetsUrl", "clientApiUrl", "configUrl"].forEach(function(e) {
				if (e in t && !i(t[e])) throw new a({
					type: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
					code: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
					message: e + " property is on an invalid domain."
				})
			}), this.getConfiguration = function() {
				return JSON.parse(n)
			}, this._request = o, this._configuration = this.getConfiguration(), this._clientApiBaseUrl = t.clientApiUrl + "/v1/", (s = t.braintreeApi) && (this._braintreeApi = {
				baseUrl: s.url + "/",
				accessToken: s.accessToken
			}, !i(this._braintreeApi.baseUrl))) throw new a({
			type: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
			code: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
			message: "braintreeApi URL is on an invalid domain."
		});
		if (t.graphQL && (this._graphQL = new r({
				graphQL: t.graphQL
			})), (c = t.paypalApi) && (this._paypalApi = {
				baseUrl: c.baseUrl + "/",
				accessToken: c.accessToken
			}, !i(this._paypalApi.baseUrl))) throw new a({
			type: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
			code: E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
			message: "paypalApi URL is on an invalid domain."
		})
	}
	v.prototype.request = function(e, n) {
		var t = this,
			r = new u(function(n, r) {
				var o, i, u, l;
				if (e.method ? e.endpoint || (o = "options.endpoint") : o = "options.method", o) throw new a({
					type: E.CLIENT_OPTION_REQUIRED.type,
					code: E.CLIENT_OPTION_REQUIRED.code,
					message: o + " is required when making a request."
				});
				if (l = {
						method: e.method,
						graphQL: t._graphQL,
						timeout: e.timeout,
						metadata: t._configuration.analyticsMetadata
					}, "clientApi" === (i = "api" in e ? e.api : "clientApi")) u = t._clientApiBaseUrl, l.data = c(t._configuration, e.data);
				else if ("braintreeApi" === i) {
					if (!t._braintreeApi) throw new a(m.BRAINTREE_API_ACCESS_RESTRICTED);
					u = t._braintreeApi.baseUrl, l.data = e.data, l.headers = {
						"Braintree-Version": h.BRAINTREE_API_VERSION_HEADER,
						Authorization: "Bearer " + t._braintreeApi.accessToken
					}
				} else {
					if ("paypalApi" !== i) throw new a({
						type: E.CLIENT_OPTION_INVALID.type,
						code: E.CLIENT_OPTION_INVALID.code,
						message: "options.api is invalid."
					});
					if (!t._paypalApi) throw new a(m.PAYPAL_API_ACCESS_RESTRICTED);
					u = t._paypalApi.baseUrl, l.data = e.data, l.headers = {
						Authorization: "Bearer " + t._paypalApi.accessToken,
						"Braintree-SDK-Version": g,
						"PayPal-Client-Metadata-Id": t._configuration.deviceDataId
					}
				}
				l.url = u + e.endpoint, l.sendAnalyticsEvent = function(e) {}, t._request(l, function(e, t, o) {
					var c, u;
					(u = "clientApi" === i ? function(e, n) {
						var t;
						if (-1 === e ? t = new a(E.CLIENT_REQUEST_TIMEOUT) : 403 === e ? t = new a(E.CLIENT_AUTHORIZATION_INSUFFICIENT) : 429 === e ? t = new a(E.CLIENT_RATE_LIMITED) : e >= 500 ? t = new a(E.CLIENT_GATEWAY_NETWORK) : (e < 200 || e >= 400) && (t = s(n, {
								type: E.CLIENT_REQUEST_ERROR.type,
								code: E.CLIENT_REQUEST_ERROR.code,
								message: E.CLIENT_REQUEST_ERROR.message
							})), t) return t.details = t.details || {}, t.details.httpStatus = e, t
					}(o, e) : e) ? r(u): (c = f({
						_httpStatus: o
					}, t), n(c))
				})
			});
		return "function" == typeof n ? (n = d(p(n)), void r.then(function(e) {
			n(null, e, e._httpStatus)
		}).catch(function(e) {
			n(e, null, e && e.details && e.details.httpStatus)
		})) : r
	}, v.prototype.toJSON = function() {
		return this.getConfiguration()
	}, v.prototype.getVersion = function() {
		return g
	}, v.prototype.teardown = l(function() {
		return w(this, y(v.prototype)), u.resolve()
	}), e.exports = v
}, function(e, n, t) {
	"use strict";
	var r = t(14),
		o = {
			tokenize_credit_cards: "payment_methods/credit_cards"
		},
		i = ["creditCard.options.unionPayEnrollment"];

	function a(e) {
		this._config = e.graphQL
	}
	a.prototype.getGraphQLEndpoint = function() {
		return this._config.url
	}, a.prototype.isGraphQLRequest = function(e, n) {
		var t, a = this.getClientApiPath(e);
		return !(!this._isGraphQLEnabled() || !a || r.isIe9()) && (t = this._config.features.some(function(e) {
			return o[e] === a
		}), ! function(e) {
			return i.some(function(n) {
				return void 0 !== n.split(".").reduce(function(e, n) {
					return e && e[n]
				}, e)
			})
		}(n) && t)
	}, a.prototype.getClientApiPath = function(e) {
		var n, t = e.split("/client_api/v1/");
		return t.length > 1 && (n = t[1].split("?")[0]), n
	}, a.prototype._isGraphQLEnabled = function() {
		return Boolean(this._config)
	}, e.exports = a
}, function(e, n, t) {
	"use strict";
	var r = t(30);
	e.exports = function(e) {
		return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE") || r(e)
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return -1 !== (e = e || navigator.userAgent).indexOf("Trident/7")
	}
}, function(e, n, t) {
	"use strict";
	var r, o = t(10),
		i = t(16),
		a = {};

	function s(e) {
		try {
			delete window[e]
		} catch (n) {
			window[e] = null
		}
	}
	e.exports = {
		request: function(e, n) {
			var t, c = "callback_json_" + o().replace(/-/g, ""),
				u = e.url,
				l = e.method,
				d = e.timeout;
			u = i.queryify(u, e.data),
				function(e, n, t) {
					window[t] = function(r) {
						var o = r.status || 500,
							i = null,
							c = null;
						delete r.status, o >= 400 || o < 200 ? i = r : c = r, s(t),
							function(e) {
								e && e.parentNode && e.parentNode.removeChild(e)
							}(e), clearTimeout(a[t]), n(i, c, o)
					}
				}(t = function(e, n) {
					var t = document.createElement("script"),
						r = !1;
					return t.src = e, t.async = !0, t.onerror = function() {
						window[n]({
							message: "error",
							status: 500
						})
					}, t.onload = t.onreadystatechange = function() {
						r || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (r = !0, t.onload = t.onreadystatechange = null)
					}, t
				}(u = i.queryify(u, {
					_method: l,
					callback: c
				}), c), n, c),
				function(e, n) {
					a[n] = setTimeout(function() {
						a[n] = null, window[n]({
							error: "timeout",
							status: -1
						}), window[n] = function() {
							s(n)
						}
					}, e)
				}(d, c), r || (r = document.getElementsByTagName("head")[0]), r.appendChild(t)
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(16),
		o = t(14),
		i = t(1).assign,
		a = t(33),
		s = t(34),
		c = t(35),
		u = c.isAvailable,
		l = t(36),
		d = t(40);
	e.exports = {
		request: function(e, n) {
			! function e(n, t, p) {
				var f, h, E, m, g, y, w, v = n.url,
					_ = n.graphQL,
					T = n.timeout,
					N = c.getRequestObject(),
					C = p,
					I = Boolean(_ && _.isGraphQLRequest(v, n.data));
				n.headers = i({
					"Content-Type": "application/json"
				}, n.headers), v = (E = I ? new l(n) : new d(n)).getUrl(), m = E.getBody(), g = E.getMethod(), y = E.getHeaders(), "GET" === g && (v = r.queryify(v, m), m = null), u ? N.onreadystatechange = function() {
					if (4 === N.readyState) {
						if (0 === N.status && I) return delete n.graphQL, void e(n, t, p);
						if (w = s(N.responseText), h = E.adaptResponseBody(w), (f = E.determineStatus(N.status, w)) >= 400 || f < 200) {
							if (I && "unknown_error" === (!(r = w).data && r.errors && r.errors[0] && r.errors[0].extensions && r.errors[0].extensions.errorType)) return delete n.graphQL, void e(n, t, p);
							if (t < 1 && function(e) {
									return (!e || 408 === e) && o.isIe()
								}(f)) return void e(n, ++t, p);
							C(h || "error", null, f || 500)
						} else C(null, h, f);
						var r
					}
				} : (n.headers && (v = r.queryify(v, y)), N.onload = function() {
					C(null, s(N.responseText), N.status)
				}, N.onerror = function() {
					C("error", null, 500)
				}, N.onprogress = function() {}, N.ontimeout = function() {
					C("timeout", null, -1)
				});
				try {
					N.open(g, v, !0)
				} catch (r) {
					if (!I) throw r;
					return delete n.graphQL, void e(n, t, p)
				}
				N.timeout = T, u && Object.keys(y).forEach(function(e) {
					N.setRequestHeader(e, y[e])
				});
				try {
					N.send(a(g, m))
				} catch (e) {}
			}(e, 0, n)
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		if ("string" != typeof e) throw new Error("Method must be a string");
		return "get" !== e.toLowerCase() && null != n && (n = "string" == typeof n ? n : JSON.stringify(n)), n
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		try {
			e = JSON.parse(e)
		} catch (e) {}
		return e
	}
}, function(e, n, t) {
	"use strict";
	var r = window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest;
	e.exports = {
		isAvailable: r,
		getRequestObject: function() {
			return r ? new XMLHttpRequest : new XDomainRequest
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(1).assign,
		o = t(37),
		i = t(38),
		a = {
			"payment_methods/credit_cards": o
		},
		s = {
			"payment_methods/credit_cards": i
		};

	function c(e) {
		var n = e.graphQL.getClientApiPath(e.url);
		this._graphQL = e.graphQL, this._data = e.data, this._method = e.method, this._headers = e.headers, this._clientSdkMetadata = {
			source: e.metadata.source,
			integration: e.metadata.integration,
			sessionId: e.metadata.sessionId
		}, this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype, this._generator = a[n], this._adapter = s[n], this._sendAnalyticsEvent("graphql.init")
	}
	c.prototype.getUrl = function() {
		return this._graphQL.getGraphQLEndpoint()
	}, c.prototype.getBody = function() {
		var e = function e(n) {
				var t = {};
				return Object.keys(n).forEach(function(r) {
					var o, i = -1 === (o = r).indexOf("_") ? o : o.toLowerCase().replace(/(\_\w)/g, function(e) {
						return e[1].toUpperCase()
					});
					t[i] = "object" == typeof n[r] ? e(n[r]) : "number" == typeof n[r] ? String(n[r]) : n[r]
				}), t
			}(this._data),
			n = this._generator(e),
			t = r({
				clientSdkMetadata: this._clientSdkMetadata
			}, n);
		return JSON.stringify(t)
	}, c.prototype.getMethod = function() {
		return "POST"
	}, c.prototype.getHeaders = function() {
		var e;
		return this._data.authorizationFingerprint ? (this._sendAnalyticsEvent("graphql.authorization-fingerprint"), e = this._data.authorizationFingerprint) : (this._sendAnalyticsEvent("graphql.tokenization-key"), e = this._data.tokenizationKey), r({}, this._headers, {
			Authorization: "Bearer " + e,
			"Braintree-Version": "2018-03-05"
		})
	}, c.prototype.adaptResponseBody = function(e) {
		return this._adapter(e)
	}, c.prototype.determineStatus = function(e, n) {
		var t, r;
		return 200 === e ? (r = n.errors && n.errors[0] && n.errors[0].extensions && n.errors[0].extensions.errorType, t = n.data && !n.errors ? 200 : "user_error" === r ? 422 : "developer_error" === r ? 403 : "unknown_error" === r ? 500 : function(e, n) {
			return !e && n.errors[0].message
		}(r, n) ? 403 : 500) : t = e || 500, this._sendAnalyticsEvent("graphql.status." + e), this._sendAnalyticsEvent("graphql.determinedStatus." + t), t
	}, e.exports = c
}, function(e, n, t) {
	"use strict";
	var r = t(1).assign;

	function o(e) {
		var n = e.creditCard,
			t = n && n.billingAddress,
			o = n && n.expirationDate,
			i = n && (n.expirationMonth || o && o.split("/")[0].trim()),
			a = n && (n.expirationYear || o && o.split("/")[1].trim()),
			s = {
				input: {
					creditCard: {
						number: n && n.number,
						expirationMonth: i,
						expirationYear: a,
						cvv: n && n.cvv,
						cardholderName: n && n.cardholderName
					},
					options: {}
				}
			};
		return t && (s.input.creditCard.billingAddress = t), s.input = function(e, n) {
			var t;
			return e.creditCard && e.creditCard.options && "boolean" == typeof e.creditCard.options.validate ? t = e.creditCard.options.validate : e.authorizationFingerprint && e.tokenizationKey || e.authorizationFingerprint ? t = !0 : e.tokenizationKey && (t = !1), "boolean" == typeof t && (n.options = r({
				validate: t
			}, n.options)), n
		}(e, s.input), s
	}
	e.exports = function(e) {
		return {
			query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
			variables: o(e),
			operationName: "TokenizeCreditCard"
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(39),
		o = {
			american_express: "American Express",
			diners: "Discover",
			discover: "Discover",
			international_maestro: "Maestro",
			jcb: "JCB",
			mastercard: "MasterCard",
			uk_maestro: "Maestro",
			union_pay: "Union Pay",
			visa: "Visa"
		};
	e.exports = function(e) {
		return e.data && !e.errors ? (i = (t = (n = e.data.tokenizeCreditCard).creditCard).last4 ? t.last4.substr(2, 4) : "", (a = t.binData) && ["issuingBank", "countryOfIssuance", "productId"].forEach(function(e) {
			null === a[e] && (a[e] = "Unknown")
		}), {
			creditCards: [{
				binData: a,
				consumed: !1,
				description: i ? "ending in " + i : "",
				nonce: n.token,
				details: {
					cardType: o[t.brandCode] || "Unknown",
					lastFour: t.last4 || "",
					lastTwo: i
				},
				type: "CreditCard",
				threeDSecureInfo: null
			}]
		}) : r(e);
		var n, t, i, a
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		var n = e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorType;
		return "user_error" === n ? function(e) {
			var n, t, r = function(n) {
				var t = [];
				return e.errors.forEach(function(e) {
					! function e(n, t, r) {
						var o, i = t.extensions.legacyCode,
							a = n[0];
						1 !== n.length ? (r.forEach(function(e) {
							e.field === a && (o = e)
						}), o || r.push(o = {
							field: a,
							fieldErrors: []
						}), e(n.slice(1), t, o.fieldErrors)) : r.push({
							code: i,
							field: a,
							message: t.message
						})
					}(e.extensions.inputPath.slice(1), e, t)
				}), t
			}();
			return {
				error: {
					message: (n = r, t = n[0].field, {
						creditCard: "Credit card is invalid"
					} [t])
				},
				fieldErrors: r
			}
		}(e) : n ? function(e) {
			return {
				error: {
					message: e.errors[0].message
				},
				fieldErrors: []
			}
		}(e) : {
			error: {
				message: "There was a problem serving your request"
			},
			fieldErrors: []
		}
	}
}, function(e, n, t) {
	"use strict";

	function r(e) {
		this._url = e.url, this._data = e.data, this._method = e.method, this._headers = e.headers
	}
	r.prototype.getUrl = function() {
		return this._url
	}, r.prototype.getBody = function() {
		return this._data
	}, r.prototype.getMethod = function() {
		return this._method
	}, r.prototype.getHeaders = function() {
		return this._headers
	}, r.prototype.adaptResponseBody = function(e) {
		return e
	}, r.prototype.determineStatus = function(e) {
		return e
	}, e.exports = r
}, function(e, n, t) {
	"use strict";
	e.exports = function() {
		return window.navigator.userAgent
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function() {
		return "http:" === window.location.protocol
	}
}, function(e, n, t) {
	"use strict";
	var r = t(0);
	e.exports = function(e, n) {
		return e instanceof r ? e : new r({
			type: n.type,
			code: n.code,
			message: n.message,
			details: {
				originalError: e
			}
		})
	}
}, function(e, n, t) {
	"use strict";
	var r = "function" == typeof window.atob ? window.atob : o;

	function o(e) {
		var n, t, r, o, i, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			c = "";
		if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e)) throw new Error("Non base64 encoded input passed to window.atob polyfill");
		a = 0;
		do {
			r = s.indexOf(e.charAt(a++)), n = (15 & (o = s.indexOf(e.charAt(a++)))) << 4 | (i = s.indexOf(e.charAt(a++))) >> 2 & 15, t = (3 & i) << 6 | 63 & s.indexOf(e.charAt(a++)), c += String.fromCharCode((63 & r) << 2 | o >> 4 & 3) + (n ? String.fromCharCode(n) : "") + (t ? String.fromCharCode(t) : "")
		} while (a < e.length);
		return c
	}
	e.exports = {
		atob: function(e) {
			return r.call(window, e)
		},
		_atob: o
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return JSON.parse(JSON.stringify(e))
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return function() {
			var n = arguments;
			setTimeout(function() {
				e.apply(null, n)
			}, 1)
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		var n = !1;
		return function() {
			n || (n = !0, e.apply(null, arguments))
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		if (!n) return e;
		e.then(function(e) {
			n(null, e)
		}).catch(function(e) {
			n(e)
		})
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return function() {
			var n = arguments;
			setTimeout(function() {
				e.apply(null, n)
			}, 1)
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = {
		BRAINTREE_API_VERSION_HEADER: "2017-04-03"
	}
}, function(e, n) {
	e.exports.FUNDING_ELIGIBILITY = Object({
		paypal: Object({
			eligible: !0,
			guest: !1,
			remembered: !1
		}),
		venmo: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		credit: Object({
			eligible: !0,
			guest: !1,
			remembered: !1
		}),
		card: Object({
			eligible: !0,
			guest: !1,
			remembered: !1,
			vendors: Object({
				visa: Object({
					eligible: !0
				}),
				mastercard: Object({
					eligible: !0
				}),
				amex: Object({
					eligible: !0
				}),
				discover: Object({
					eligible: !1
				}),
				hiper: Object({
					eligible: !1
				}),
				elo: Object({
					eligible: !1
				}),
				jcb: Object({
					eligible: !1
				}),
				cup: Object({
					eligible: !1
				})
			}),
			branded: !1
		}),
		ideal: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		sepa: Object({
			eligible: !0,
			guest: !1,
			remembered: !1
		}),
		bancontact: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		giropay: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		sofort: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		eps: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		mybank: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		p24: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		zimpler: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		}),
		wechatpay: Object({
			eligible: !1,
			guest: !1,
			remembered: !1
		})
	})
}, function(e, n, t) {
	"use strict";
	var r = t(1).assign,
		o = t(0),
		i = t(2),
		a = t(4),
		s = t(15),
		c = t(10),
		u = t(3),
		l = t(19),
		d = t(11);

	function p(e) {
		return {
			paypalApi: e.paypalApi,
			creditCards: {
				supportedCardTypes: e.gatewayConfiguration.credit_card_types
			}
		}
	}

	function f(e) {
		var n = e.authData.attrs,
			t = e.authData.configUrl,
			r = c(),
			a = {
				merchantAppId: window.location.host,
				platform: u.PLATFORM,
				sdkVersion: u.VERSION,
				source: u.SOURCE,
				integration: u.INTEGRATION,
				integrationType: u.INTEGRATION,
				sessionId: r
			};
		return new i(function(r, i) {
			n._meta = a, n.braintreeLibraryVersion = u.BRAINTREE_LIBRARY_VERSION, n.configVersion = e.configVersion, s({
				url: t,
				method: "GET",
				data: n
			}, function(n, t, s) {
				var c;
				n ? i(new o({
					type: (c = 403 === s ? d.CLIENT_AUTHORIZATION_INSUFFICIENT : d.CLIENT_GATEWAY_NETWORK).type,
					code: c.code,
					message: c.message,
					details: {
						originalError: n
					}
				})) : r({
					authorization: e.authorization,
					analyticsMetadata: a,
					authorizationType: e.authData.type,
					gatewayConfiguration: t
				})
			})
		})
	}
	e.exports = {
		getConfiguration: a(function(e) {
			return new i(function(n, t) {
				var a, c = {
					authorization: e.authorization
				};
				try {
					a = l(e.authorization)
				} catch (e) {
					return void t(new o(d.CLIENT_INVALID_AUTHORIZATION))
				}
				c.authData = a, "UNIFIED_CLIENT_TOKEN" === a.type ? n(function(e) {
					var n = e.authData.attrs,
						t = {
							baseUrl: "https://mapi.paypalcorp.com",
							accessToken: e.authData.paypal.accessToken
						};
					return new i(function(a, c) {
						var l, h;
						e.configVersion = n.configVersion, l = f(e), h = new i(function(n, r) {
							s({
								url: e.authData.paypal.configUrl,
								method: "GET",
								data: {},
								headers: {
									Authorization: "Bearer " + e.authData.paypal.accessToken,
									"Braintree-SDK-Version": u.VERSION
								}
							}, function(e, i) {
								e ? r(new o({
									type: d.CLIENT_GATEWAY_NETWORK.type,
									code: d.CLIENT_GATEWAY_NETWORK.code,
									message: d.CLIENT_GATEWAY_NETWORK.message,
									details: {
										originalError: e
									}
								})) : n({
									paypalApi: t,
									gatewayConfiguration: i
								})
							})
						}).then(p), i.all([l, h]).then(function(e) {
							var n = e[0];
							n.gatewayConfiguration = r({}, n.gatewayConfiguration, e[1]), a(n)
						}).catch(c)
					})
				}(c)) : (c.configVersion = "3", n(f(c)))
			})
		})
	}
}, function(e, n, t) {
	"use strict";

	function r() {
		this.sessionId = function() {
			var e, n = "";
			for (e = 0; e < 32; e++) n += Math.floor(16 * Math.random()).toString(16);
			return n
		}(), this._beaconId = "https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=" + this.sessionId + "&t=" + (new Date).getTime() / 1e3 + "&a=14", this._parameterBlock = function(e, n) {
			var t = document.body.appendChild(document.createElement("script"));
			return t.type = "application/json", t.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), t.text = JSON.stringify({
				f: e,
				s: "BRAINTREE_SIGNIN",
				b: n
			}), t
		}(this.sessionId, this._beaconId), this._thirdPartyBlock = function() {
			var e, n, t = document.createElement("iframe");
			t.src = "about:blank", t.title = "", t.role = "presentation", (t.frameElement || t).style.cssText = "width: 0; height: 0; border: 0; position: absolute; z-index: -999", document.body.appendChild(t);
			try {
				n = t.contentWindow.document
			} catch (r) {
				e = document.domain, t.src = 'javascript:var d=document.open();d.domain="' + e + '";void(0);', n = t.contentWindow.document
			}

			function r() {
				n._l()
			}
			return n.open()._l = function() {
				var n = this.createElement("script");
				e && (this.domain = e), n.id = "js-iframe-async", n.src = "https://www.paypalobjects.com/webstatic/r/fb/fb-all-prod.pp.min.js", this.body.appendChild(n)
			}, t.addEventListener ? t.addEventListener("load", r, !1) : t.attachEvent ? t.attachEvent("onload", r) : n.write('<body onload="document._l();">'), n.close(), t
		}()
	}
	r.prototype.teardown = function() {
		this._thirdPartyBlock.parentNode.removeChild(this._thirdPartyBlock)
	}, e.exports = {
		setup: function() {
			return new r
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(1).assign,
		o = t(55),
		i = t(57),
		a = t(58),
		s = t(62),
		c = t(0),
		u = t(66),
		l = t(12),
		d = t(6),
		p = t(3).INTEGRATION_TIMEOUT_MS,
		f = t(10),
		h = t(67),
		E = t(68),
		m = l.events,
		g = t(70),
		y = t(71),
		w = (t(20), l.whitelistedFields),
		v = t(21),
		_ = t(22),
		T = t(5),
		N = t(72),
		C = t(78),
		I = t(79),
		O = t(23),
		b = t(2),
		L = t(4);

	function A(e) {
		var n, t, h, w = this,
			I = {},
			O = {},
			L = 0,
			R = f();
		if (t = e.client.getConfiguration(), !e.fields) throw new c({
			type: T.INSTANTIATION_OPTION_REQUIRED.type,
			code: T.INSTANTIATION_OPTION_REQUIRED.code,
			message: "options.fields is required when instantiating Hosted Fields."
		});
		g.call(this), this._injectedNodes = [], this._destructor = new o, this._fields = I, this._state = {
			fields: {},
			cards: N("")
		}, this._bus = new s({
			channel: R,
			merchantUrl: location.href
		}), this._destructor.registerFunctionForTeardown(function() {
			w._bus.teardown()
		}), this._client = e.client, Object.keys(e.fields).forEach(function(n) {
			var r, o, i;
			if (!l.whitelistedFields.hasOwnProperty(n)) throw new c({
				type: d.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
				code: d.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
				message: '"' + n + '" is not a valid field.'
			});
			if (r = e.fields[n], !(o = document.querySelector(r.selector))) throw new c({
				type: d.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
				code: d.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
				message: d.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
				details: {
					fieldSelector: r.selector,
					fieldKey: n
				}
			});
			if (o.querySelector('iframe[name^="braintree-"]')) throw new c({
				type: d.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
				code: d.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
				message: d.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
				details: {
					fieldSelector: r.selector,
					fieldKey: n
				}
			});
			if (r.maxlength && "number" != typeof r.maxlength) throw new c({
				type: d.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
				code: d.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
				message: "The value for maxlength must be a number.",
				details: {
					fieldKey: n
				}
			});
			if (r.minlength && "number" != typeof r.minlength) throw new c({
				type: d.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
				code: d.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
				message: "The value for minlength must be a number.",
				details: {
					fieldKey: n
				}
			});
			i = a({
				type: n,
				name: "braintree-hosted-field-" + n,
				style: l.defaultIFrameStyle
			}), this._injectedNodes = this._injectedNodes.concat(y(i, o)), this._setupLabelFocus(n, o), I[n] = {
				frameElement: i,
				containerElement: o
			}, L++, this._state.fields[n] = {
				isEmpty: !0,
				isValid: !1,
				isPotentiallyValid: !0,
				isFocused: !1,
				container: o
			}, C(i, u(t.gatewayConfiguration.assetsUrl, R, t.isDebug))
		}.bind(this)), e.fields.number && e.fields.number.rejectUnsupportedCards && (O.supportedCardTypes = t.gatewayConfiguration.creditCards.supportedCardTypes), h = [this._waitForIframeInputsToBeReady(L, r({}, e, O)), this._setupTokenizationFrame(R, e)], n = setTimeout(function() {
			w._emit("timeout")
		}, p), b.all(h).then(function() {
			clearTimeout(n), w._emit("ready")
		}), this._bus.on(m.INPUT_EVENT, function(e) {
			return function(n) {
				var t, r = n.merchantPayload,
					o = r.emittedBy,
					a = e[o].containerElement;
				Object.keys(r.fields).forEach(function(n) {
					r.fields[n].container = e[n].containerElement
				}), t = r.fields[o], "blur" === n.type && function(e) {
					var n;
					E.isIos() && document.activeElement === document.body && ((n = e.querySelector("input")) || ((n = document.createElement("input")).type = "button", n.style.height = "0px", n.style.width = "0px", n.style.opacity = "0", n.style.padding = "0", n.style.position = "absolute", n.style.left = "-200%", n.style.top = "0px", e.insertBefore(n, e.firstChild)), n.focus(), n.blur())
				}(a), i.toggle(a, l.externalClasses.FOCUSED, t.isFocused), i.toggle(a, l.externalClasses.VALID, t.isValid), i.toggle(a, l.externalClasses.INVALID, !t.isPotentiallyValid), this._state = {
					cards: r.cards,
					fields: r.fields
				}, this._emit(n.type, r)
			}
		}(I).bind(this)), this._destructor.registerFunctionForTeardown(function() {
			var e, n, t;
			for (e = 0; e < w._injectedNodes.length; e++)(t = (n = w._injectedNodes[e]).parentNode).removeChild(n), i.remove(t, l.externalClasses.FOCUSED, l.externalClasses.INVALID, l.externalClasses.VALID)
		}), this._destructor.registerFunctionForTeardown(function() {
			w._tokenizationFrame.parentNode.removeChild(w._tokenizationFrame)
		}), this._destructor.registerFunctionForTeardown(function() {
			var e = v(A.prototype).concat(v(g.prototype));
			_(w, e)
		})
	}(A.prototype = Object.create(g.prototype, {
		constructor: A
	}))._setupLabelFocus = function(e, n) {
		var t, r, o = E.isIos(),
			i = this._bus;
		if (!o && null != n.id) {
			for (t = (t = [].slice.call(document.querySelectorAll('label[for="' + n.id + '"]'))).concat(h(n, "label")), r = 0; r < t.length; r++) t[r].addEventListener("click", a, !1);
			this._destructor.registerFunctionForTeardown(function() {
				for (r = 0; r < t.length; r++) t[r].removeEventListener("click", a, !1)
			})
		}

		function a() {
			i.emit(m.TRIGGER_INPUT_FOCUS, e)
		}
	}, A.prototype._waitForIframeInputsToBeReady = function(e, n) {
		return new b(function(t) {
			this._bus.on(m.FRAME_READY, function(r) {
				0 == --e && (r(n), t())
			})
		}.bind(this))
	}, A.prototype._setupTokenizationFrame = function(e, n) {
		var t = this._client.getConfiguration();
		return this._tokenizationFrame = a({
			name: "hosted-fields-tokenization-frame_" + e,
			src: t.gatewayConfiguration.assetsUrl + "/web/3.32.0-payments-sdk-dev/html/" + (n.paymentsSdk ? "hosted-fields-payments-sdk-tokenization" : "hosted-fields-tokenization") + "-frame" + O(t.isDebug) + ".html",
			height: 0,
			width: 0
		}), new b(function(e) {
			this._bus.on(s.events.CONFIGURATION_REQUEST, function(n) {
				n(this._client), e()
			}.bind(this)), document.body.appendChild(this._tokenizationFrame)
		}.bind(this))
	}, A.prototype._getBusChannel = function() {
		return this._bus && this._bus.channel
	}, A.prototype.teardown = function() {
		var e = this;
		return new b(function(n, t) {
			e._destructor.teardown(function(e) {
				e ? t(e) : n()
			})
		})
	}, A.prototype.tokenize = function(e) {
		var n = this;
		return e || (e = {}), new b(function(t, r) {
			n._bus.emit(m.TOKENIZATION_REQUEST, e, function(e) {
				var n = e[0],
					o = e[1];
				n ? r(n) : t(o)
			})
		})
	}, A.prototype.addClass = function(e, n) {
		var t;
		return w.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(m.ADD_CLASS, e, n) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
			code: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
			message: 'Cannot add class to "' + e + '" field because it is not part of the current Hosted Fields options.'
		}) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_INVALID.type,
			code: d.HOSTED_FIELDS_FIELD_INVALID.code,
			message: '"' + e + '" is not a valid field. You must use a valid field option when adding a class.'
		}), t ? b.reject(t) : b.resolve()
	}, A.prototype.removeClass = function(e, n) {
		var t;
		return w.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(m.REMOVE_CLASS, e, n) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
			code: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
			message: 'Cannot remove class from "' + e + '" field because it is not part of the current Hosted Fields options.'
		}) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_INVALID.type,
			code: d.HOSTED_FIELDS_FIELD_INVALID.code,
			message: '"' + e + '" is not a valid field. You must use a valid field option when removing a class.'
		}), t ? b.reject(t) : b.resolve()
	}, A.prototype.setAttribute = function(e) {
		var n, t;
		return w.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (n = I(e.attribute, e.value)) ? t = n : this._bus.emit(m.SET_ATTRIBUTE, e.field, e.attribute, e.value) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
			code: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
			message: 'Cannot set attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
		}) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_INVALID.type,
			code: d.HOSTED_FIELDS_FIELD_INVALID.code,
			message: '"' + e.field + '" is not a valid field. You must use a valid field option when setting an attribute.'
		}), t ? b.reject(t) : b.resolve()
	}, A.prototype.setMessage = function(e) {
		this._bus.emit(m.SET_MESSAGE, e.field, e.message)
	}, A.prototype.removeAttribute = function(e) {
		var n, t;
		return w.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (n = I(e.attribute)) ? t = n : this._bus.emit(m.REMOVE_ATTRIBUTE, e.field, e.attribute) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
			code: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
			message: 'Cannot remove attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
		}) : t = new c({
			type: d.HOSTED_FIELDS_FIELD_INVALID.type,
			code: d.HOSTED_FIELDS_FIELD_INVALID.code,
			message: '"' + e.field + '" is not a valid field. You must use a valid field option when removing an attribute.'
		}), t ? b.reject(t) : b.resolve()
	}, A.prototype.setPlaceholder = function(e, n) {
		return this.setAttribute({
			field: e,
			attribute: "placeholder",
			value: n
		})
	}, A.prototype.clear = function(e) {
		var n;
		return w.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(m.CLEAR_FIELD, e) : n = new c({
			type: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
			code: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
			message: 'Cannot clear "' + e + '" field because it is not part of the current Hosted Fields options.'
		}) : n = new c({
			type: d.HOSTED_FIELDS_FIELD_INVALID.type,
			code: d.HOSTED_FIELDS_FIELD_INVALID.code,
			message: '"' + e + '" is not a valid field. You must use a valid field option when clearing a field.'
		}), n ? b.reject(n) : b.resolve()
	}, A.prototype.focus = function(e) {
		var n;
		return w.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(m.TRIGGER_INPUT_FOCUS, e) : n = new c({
			type: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
			code: d.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
			message: 'Cannot focus "' + e + '" field because it is not part of the current Hosted Fields options.'
		}) : n = new c({
			type: d.HOSTED_FIELDS_FIELD_INVALID.type,
			code: d.HOSTED_FIELDS_FIELD_INVALID.code,
			message: '"' + e + '" is not a valid field. You must use a valid field option when focusing a field.'
		}), n ? b.reject(n) : b.resolve()
	}, A.prototype.getState = function() {
		return this._state
	}, e.exports = L.wrapPrototype(A)
}, function(e, n, t) {
	"use strict";
	var r = t(56);

	function o() {
		this._teardownRegistry = [], this._isTearingDown = !1
	}
	o.prototype.registerFunctionForTeardown = function(e) {
		"function" == typeof e && this._teardownRegistry.push(e)
	}, o.prototype.teardown = function(e) {
		this._isTearingDown ? e(new Error("Destructor is already tearing down")) : (this._isTearingDown = !0, r(this._teardownRegistry, function(n) {
			this._teardownRegistry = [], this._isTearingDown = !1, "function" == typeof e && e(n)
		}.bind(this)))
	}, e.exports = o
}, function(e, n, t) {
	"use strict";
	var r = t(9);

	function o(e, n) {
		0 === e.length ? (e(), n(null)) : e(n)
	}
	e.exports = function(e, n) {
		var t, i = e.length,
			a = i,
			s = r(n);
		if (0 !== i)
			for (t = 0; t < i; t++) o(e[t], c);
		else s(null);

		function c(e) {
			e ? s(e) : 0 == (a -= 1) && s(null)
		}
	}
}, function(e, n, t) {
	"use strict";

	function r(e) {
		return e.className.trim().split(/\s+/)
	}

	function o(e) {
		var n = [].slice.call(arguments, 1),
			t = r(e).filter(function(e) {
				return -1 === n.indexOf(e)
			}).concat(n).join(" ");
		e.className = t
	}

	function i(e) {
		var n = [].slice.call(arguments, 1),
			t = r(e).filter(function(e) {
				return -1 === n.indexOf(e)
			}).join(" ");
		e.className = t
	}
	e.exports = {
		add: o,
		remove: i,
		toggle: function(e, n, t) {
			t ? o(e, n) : i(e, n)
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(59),
		o = t(60),
		i = t(61);
	e.exports = function(e) {
		var n = document.createElement("iframe"),
			t = i({}, o, e);
		return t.style && "string" != typeof t.style && (i(n.style, t.style), delete t.style), r(n, t), n.getAttribute("id") || (n.id = n.name), n
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		var t;
		for (var r in n) n.hasOwnProperty(r) && (null == (t = n[r]) ? e.removeAttribute(r) : e.setAttribute(r, t))
	}
}, function(e, n, t) {
	"use strict";
	e.exports = {
		src: "about:blank",
		frameBorder: 0,
		allowtransparency: !0,
		scrolling: "no"
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return [].slice.call(arguments, 1).forEach(function(n) {
			"object" == typeof n && Object.keys(n).forEach(function(t) {
				e[t] = n[t]
			})
		}), e
	}
}, function(e, n, t) {
	"use strict";
	var r = t(63),
		o = t(64),
		i = t(65).checkOrigin,
		a = t(0);

	function s(e) {
		if (this.channel = (e = e || {}).channel, !this.channel) throw new a({
			type: a.types.INTERNAL,
			code: "MISSING_CHANNEL_ID",
			message: "Channel ID must be specified."
		});
		this.merchantUrl = e.merchantUrl, this._isDestroyed = !1, this._isVerbose = !1, this._listeners = [], this._log("new bus on channel " + this.channel, [location.href])
	}
	s.prototype.on = function(e, n) {
		var t, o, a = n,
			s = this;
		this._isDestroyed || (this.merchantUrl && (a = function() {
			i(this.origin, s.merchantUrl) && n.apply(this, arguments)
		}), t = this._namespaceEvent(e), (o = [].slice.call(arguments))[0] = t, o[1] = a, this._log("on", o), r.on.apply(r, o), this._listeners.push({
			eventName: e,
			handler: a,
			originalHandler: n
		}))
	}, s.prototype.emit = function(e) {
		var n;
		this._isDestroyed || ((n = [].slice.call(arguments))[0] = this._namespaceEvent(e), this._log("emit", n), r.emit.apply(r, n))
	}, s.prototype._offDirect = function(e) {
		var n = [].slice.call(arguments);
		this._isDestroyed || (n[0] = this._namespaceEvent(e), this._log("off", n), r.off.apply(r, n))
	}, s.prototype.off = function(e, n) {
		var t, r, o = n;
		if (!this._isDestroyed) {
			if (this.merchantUrl)
				for (t = 0; t < this._listeners.length; t++)(r = this._listeners[t]).originalHandler === n && (o = r.handler);
			this._offDirect(e, o)
		}
	}, s.prototype._namespaceEvent = function(e) {
		return ["braintree", this.channel, e].join(":")
	}, s.prototype.teardown = function() {
		var e, n;
		for (n = 0; n < this._listeners.length; n++) this._offDirect((e = this._listeners[n]).eventName, e.handler);
		this._listeners.length = 0, this._isDestroyed = !0
	}, s.prototype._log = function(e, n) {
		this._isVerbose && console.log(e, n)
	}, s.events = o, e.exports = s
}, function(e, n, t) {
	"use strict";
	var r, o, i = [],
		a = {},
		s = "/*framebus*/";

	function c(e) {
		var n, t = d(this);
		return !p(e) && !p(t) && !1 !== (n = f(e, [].slice.call(arguments, 1), t)) && (w(r.top || r.self, n, t), !0)
	}

	function u(e, n) {
		var t = d(this);
		return !_(e, n, t) && (a[t] = a[t] || {}, a[t][e] = a[t][e] || [], a[t][e].push(n), !0)
	}

	function l(e, n) {
		var t, r, o = d(this);
		if (_(e, n, o)) return !1;
		if (!(r = a[o] && a[o][e])) return !1;
		for (t = 0; t < r.length; t++)
			if (r[t] === n) return r.splice(t, 1), !0;
		return !1
	}

	function d(e) {
		return e && e._origin || "*"
	}

	function p(e) {
		return "string" != typeof e
	}

	function f(e, n, t) {
		var r = !1,
			o = {
				event: e,
				origin: t
			},
			i = n[n.length - 1];
		"function" == typeof i && (o.reply = v(i, t), n = n.slice(0, -1)), o.args = n;
		try {
			r = s + JSON.stringify(o)
		} catch (e) {
			throw new Error("Could not stringify event: " + e.message)
		}
		return r
	}

	function h(e) {
		var n, t, r, o;
		if (e.data.slice(0, s.length) !== s) return !1;
		try {
			n = JSON.parse(e.data.slice(s.length))
		} catch (e) {
			return !1
		}
		return null != n.reply && (t = e.origin, r = e.source, o = n.reply, n.reply = function(e) {
			var n;
			return !!r && !1 !== (n = f(o, [e], t)) && void r.postMessage(n, t)
		}, n.args.push(n.reply)), n
	}

	function E(e) {
		r || ((r = e || window).addEventListener ? r.addEventListener("message", g, !1) : r.attachEvent ? r.attachEvent("onmessage", g) : null === r.onmessage ? r.onmessage = g : r = null)
	}

	function m() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
			var n = 16 * Math.random() | 0;
			return ("x" === e ? n : 3 & n | 8).toString(16)
		})
	}

	function g(e) {
		var n;
		p(e.data) || (n = h(e)) && (y("*", n.event, n.args, e), y(e.origin, n.event, n.args, e), function(e, n, t) {
			var r, o;
			for (r = i.length - 1; r >= 0; r--) !0 === (o = i[r]).closed ? i = i.slice(r, 1) : t !== o && w(o.top, e, n)
		}(e.data, n.origin, e.source))
	}

	function y(e, n, t, r) {
		var o;
		if (a[e] && a[e][n])
			for (o = 0; o < a[e][n].length; o++) a[e][n][o].apply(r, t)
	}

	function w(e, n, t) {
		var r, o = 0;
		try {
			for (e.postMessage(n, t), function(e) {
					return e.top === e && null != e.opener && e.opener !== e && !0 !== e.opener.closed
				}(e) && w(e.opener.top, n, t); r = e.frames[o];) w(r, n, t), o++
		} catch (e) {}
	}

	function v(e, n) {
		var t = m();
		return o.target(n).subscribe(t, function r(i, a) {
			e(i, a), o.target(n).unsubscribe(t, r)
		}), t
	}

	function _(e, n, t) {
		return !!p(e) || "function" != typeof n || !!p(t)
	}
	E(), e.exports = o = {
		target: function(e) {
			var n, t = {};
			for (n in o) o.hasOwnProperty(n) && (t[n] = o[n]);
			return t._origin = e || "*", t
		},
		_packagePayload: f,
		_unpackPayload: h,
		_attach: E,
		_detach: function() {
			null != r && (r.removeEventListener ? r.removeEventListener("message", g, !1) : r.detachEvent ? r.detachEvent("onmessage", g) : r.onmessage === g && (r.onmessage = null), r = null, i = [], a = {})
		},
		_dispatch: y,
		_broadcast: w,
		_subscribeReplier: v,
		_subscriptionArgsInvalid: _,
		_onmessage: g,
		_uuid: m,
		_getSubscribers: function() {
			return a
		},
		_win: function() {
			return r
		},
		include: function(e) {
			return null != e && null != e.Window && e.constructor === e.Window && (i.push(e), !0)
		},
		publish: c,
		pub: c,
		trigger: c,
		emit: c,
		subscribe: u,
		sub: u,
		on: u,
		unsubscribe: l,
		unsub: l,
		off: l
	}
}, function(e, n, t) {
	"use strict";
	var r = t(7);
	e.exports = r(["CONFIGURATION_REQUEST"], "bus:")
}, function(e, n, t) {
	"use strict";
	var r = t(17);
	e.exports = {
		checkOrigin: function(e, n) {
			var t, o = document.createElement("a");
			return o.href = n, t = "https:" === o.protocol ? o.host.replace(/:443$/, "") : "http:" === o.protocol ? o.host.replace(/:80$/, "") : o.host, o.protocol + "//" + t === e || (o.href = e, r(e))
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(12),
		o = t(23);
	e.exports = function(e, n, t) {
		return e + "/web/" + r.VERSION + "/html/hosted-fields-input-frame" + o(t) + ".html#" + n
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		for (var t = e.parentNode, r = []; null != t;) null != t.tagName && t.tagName.toLowerCase() === n && r.push(t), t = t.parentNode;
		return r
	}
}, function(e, n, t) {
	"use strict";
	e.exports = {
		isIe9: t(8),
		isIos: t(13),
		isIosWebview: t(69)
	}
}, function(e, n, t) {
	"use strict";
	var r = t(13);
	e.exports = function(e) {
		return e = e || window.navigator.userAgent, !!r(e) && (!! function(e) {
			return /\bGSA\b/.test(e)
		}(e) || /.+AppleWebKit(?!.*Safari)/.test(e))
	}
}, function(e, n, t) {
	"use strict";

	function r() {
		this._events = {}
	}
	r.prototype.on = function(e, n) {
		this._events[e] ? this._events[e].push(n) : this._events[e] = [n]
	}, r.prototype._emit = function(e) {
		var n, t, r = this._events[e];
		if (r)
			for (t = [].slice.call(arguments, 1), n = 0; n < r.length; n++) r[n].apply(null, t)
	}, e.exports = r
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		var t = document.createElement("div"),
			r = document.createDocumentFragment();
		return t.style.clear = "both", r.appendChild(e), r.appendChild(t), n.appendChild(r), [e, t]
	}
}, function(e, n, t) {
	"use strict";
	var r, o = t(73),
		i = t(24),
		a = t(74),
		s = t(75),
		c = t(76),
		u = {},
		l = {
			VISA: "visa",
			MASTERCARD: "mastercard",
			AMERICAN_EXPRESS: "american-express",
			DINERS_CLUB: "diners-club",
			DISCOVER: "discover",
			JCB: "jcb",
			UNIONPAY: "unionpay",
			MAESTRO: "maestro",
			ELO: "elo",
			MIR: "mir",
			HIPER: "hiper",
			HIPERCARD: "hipercard"
		},
		d = [l.VISA, l.MASTERCARD, l.AMERICAN_EXPRESS, l.DINERS_CLUB, l.DISCOVER, l.JCB, l.UNIONPAY, l.MAESTRO, l.ELO, l.MIR, l.HIPER, l.HIPERCARD];

	function p(e) {
		return u[e] || o[e]
	}

	function f(e, n) {
		var t = r.indexOf(e);
		if (!n && -1 === t) throw new Error('"' + e + '" is not a supported card type.');
		return t
	}

	function h(e) {
		var n, t = [];
		return s(e) ? 0 === e.length ? r.map(function(e) {
			return i(p(e))
		}) : (r.forEach(function(n) {
			var r = p(n);
			c(e, r, t)
		}), (n = a(t)) ? [n] : t) : []
	}
	r = i(d), h.getTypeInfo = function(e) {
		return i(p(e))
	}, h.removeCard = function(e) {
		var n = f(e);
		r.splice(n, 1)
	}, h.addCard = function(e) {
		var n = f(e.type, !0);
		u[e.type] = e, -1 === n && r.push(e.type)
	}, h.updateCard = function(e, n) {
		var t, r = u[e] || o[e];
		if (!r) throw new Error('"' + e + '" is not a recognized type. Use `addCard` instead.');
		if (n.type && r.type !== n.type) throw new Error("Cannot overwrite type parameter.");
		t = i(r, !0), Object.keys(t).forEach(function(e) {
			n[e] && (t[e] = n[e])
		}), u[t.type] = t
	}, h.changeOrder = function(e, n) {
		var t = f(e);
		r.splice(t, 1), r.splice(n, 0, e)
	}, h.resetModifications = function() {
		r = i(d), u = {}
	}, h.types = l, e.exports = h
}, function(e, n, t) {
	"use strict";
	e.exports = {
		visa: {
			niceType: "Visa",
			type: "visa",
			patterns: [4],
			gaps: [4, 8, 12],
			lengths: [16, 18, 19],
			code: {
				name: "CVV",
				size: 3
			}
		},
		mastercard: {
			niceType: "Mastercard",
			type: "mastercard",
			patterns: [
				[51, 55],
				[2221, 2229],
				[223, 229],
				[23, 26],
				[270, 271], 2720
			],
			gaps: [4, 8, 12],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		"american-express": {
			niceType: "American Express",
			type: "american-express",
			patterns: [34, 37],
			gaps: [4, 10],
			lengths: [15],
			code: {
				name: "CID",
				size: 4
			}
		},
		"diners-club": {
			niceType: "Diners Club",
			type: "diners-club",
			patterns: [
				[300, 305], 36, 38, 39
			],
			gaps: [4, 10],
			lengths: [14, 16, 19],
			code: {
				name: "CVV",
				size: 3
			}
		},
		discover: {
			niceType: "Discover",
			type: "discover",
			patterns: [6011, [644, 649], 65],
			gaps: [4, 8, 12],
			lengths: [16, 19],
			code: {
				name: "CID",
				size: 3
			}
		},
		jcb: {
			niceType: "JCB",
			type: "jcb",
			patterns: [2131, 1800, [3528, 3589]],
			gaps: [4, 8, 12],
			lengths: [16, 17, 18, 19],
			code: {
				name: "CVV",
				size: 3
			}
		},
		unionpay: {
			niceType: "UnionPay",
			type: "unionpay",
			patterns: [620, [624, 626],
				[62100, 62182],
				[62184, 62187],
				[62185, 62197],
				[62200, 62205],
				[622010, 622999], 622018, [622019, 622999],
				[62207, 62209],
				[622126, 622925],
				[623, 626], 6270, 6272, 6276, [627700, 627779],
				[627781, 627799],
				[6282, 6289], 6291, 6292
			],
			gaps: [4, 8, 12],
			lengths: [16, 17, 18, 19],
			code: {
				name: "CVN",
				size: 3
			}
		},
		maestro: {
			niceType: "Maestro",
			type: "maestro",
			patterns: [493698, [5e5, 506698],
				[506779, 508999],
				[56, 59], 63, 67, 6
			],
			gaps: [4, 8, 12],
			lengths: [12, 13, 14, 15, 16, 17, 18, 19],
			code: {
				name: "CVC",
				size: 3
			}
		},
		elo: {
			niceType: "Elo",
			type: "elo",
			patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778],
				[509e3, 509999], 627780, 636297, 636368, [650031, 650033],
				[650035, 650051],
				[650405, 650439],
				[650485, 650538],
				[650541, 650598],
				[650700, 650718],
				[650720, 650727],
				[650901, 650978],
				[651652, 651679],
				[655e3, 655019],
				[655021, 655058]
			],
			gaps: [4, 8, 12],
			lengths: [16],
			code: {
				name: "CVE",
				size: 3
			}
		},
		mir: {
			niceType: "Mir",
			type: "mir",
			patterns: [
				[2200, 2204]
			],
			gaps: [4, 8, 12],
			lengths: [16, 17, 18, 19],
			code: {
				name: "CVP2",
				size: 3
			}
		},
		hiper: {
			niceType: "Hiper",
			type: "hiper",
			patterns: [637095, 637568, 637599, 637609, 637612],
			gaps: [4, 8, 12],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		hipercard: {
			niceType: "Hipercard",
			type: "hipercard",
			patterns: [606282],
			gaps: [4, 8, 12],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		if (function(e) {
				var n = e.filter(function(e) {
					return e.matchStrength
				}).length;
				return n > 0 && n === e.length
			}(e)) return e.reduce(function(e, n) {
			return e ? e.matchStrength < n.matchStrength ? n : e : n
		})
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return "string" == typeof e || e instanceof String
	}
}, function(e, n, t) {
	"use strict";
	var r = t(24),
		o = t(77);
	e.exports = function(e, n, t) {
		var i, a, s, c;
		for (i = 0; i < n.patterns.length; i++)
			if (o(e, a = n.patterns[i])) {
				c = r(n), s = Array.isArray(a) ? String(a[0]).length : String(a).length, e.length >= s && (c.matchStrength = s), t.push(c);
				break
			}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		return Array.isArray(n) ? function(e, n, t) {
			var r = String(n).length,
				o = e.substr(0, r),
				i = parseInt(o, 10);
			return n = parseInt(String(n).substr(0, o.length), 10), t = parseInt(String(t).substr(0, o.length), 10), i >= n && i <= t
		}(e, n[0], n[1]) : function(e, n) {
			return (n = String(n)).substring(0, e.length) === e.substring(0, n.length)
		}(e, n)
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e, n) {
		setTimeout(function() {
			window.navigator && window.navigator.vendor && -1 === window.navigator.vendor.indexOf("Apple") && (e.src = "about:blank"), setTimeout(function() {
				e.src = n
			}, 0)
		}, 0)
	}
}, function(e, n, t) {
	"use strict";
	var r = t(0),
		o = t(6),
		i = t(12).whitelistedAttributes;
	e.exports = function(e, n) {
		var t;
		return i.hasOwnProperty(e) ? null == n || function(e, n) {
			return "string" === i[e] ? "string" == typeof n || "number" == typeof n : "boolean" === i[e] && ("true" === String(n) || "false" === String(n))
		}(e, n) || (t = new r({
			type: o.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
			code: o.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
			message: 'Value "' + n + '" is not allowed for "' + e + '" attribute.'
		})) : t = new r({
			type: o.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
			code: o.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
			message: 'The "' + e + '" attribute is not supported in Hosted Fields.'
		}), t
	}
}, function(e, n, t) {
	"use strict";
	var r = t(0),
		o = t(2),
		i = t(5),
		a = "3.32.0-payments-sdk-dev";
	e.exports = {
		verify: function(e) {
			var n, t, s;
			return e ? (s = e.name, null == (n = e.client) ? o.reject(new r({
				type: i.INSTANTIATION_OPTION_REQUIRED.type,
				code: i.INSTANTIATION_OPTION_REQUIRED.code,
				message: "options.client is required when instantiating " + s + "."
			})) : (t = n.getVersion()) !== a ? o.reject(new r({
				type: i.INCOMPATIBLE_VERSIONS.type,
				code: i.INCOMPATIBLE_VERSIONS.code,
				message: "Client (version " + t + ") and " + s + " (version " + a + ") components must be from the same SDK version."
			})) : o.resolve()) : o.reject(new r({
				type: i.INVALID_USE_OF_INTERNAL_FUNCTION.type,
				code: i.INVALID_USE_OF_INTERNAL_FUNCTION.code,
				message: "Options must be passed to basicComponentVerification function."
			}))
		}
	}
}, function(e, n, t) {
	"use strict";
	var r = t(82);
	e.exports = function() {
		return !r.isSamsungBrowser()
	}
}, function(e, n, t) {
	"use strict";
	var r = window.navigator && window.navigator.userAgent,
		o = t(83),
		i = t(84),
		a = t(13),
		s = t(8),
		c = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
	e.exports = {
		isIE9: s,
		isAndroidChrome: function(e) {
			var n = e || r;
			return o(n) && i(n)
		},
		isIos: a,
		isKitKatWebview: function(e) {
			var n = e || r;
			return o(n) && c.test(n)
		},
		isSamsungBrowser: function(e) {
			return /SamsungBrowser/.test(e = e || r) || function(e) {
				return !i(e) && e.indexOf("Samsung") > -1
			}(e)
		}
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return e = e || window.navigator.userAgent, /Android/.test(e)
	}
}, function(e, n, t) {
	"use strict";
	var r = t(85),
		o = t(86);
	e.exports = function(e) {
		return !(-1 === (e = e || navigator.userAgent).indexOf("Chrome") && -1 === e.indexOf("CriOS") || r(e) || o(e))
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return -1 !== (e = e || navigator.userAgent).indexOf("Edge/")
	}
}, function(e, n, t) {
	"use strict";
	e.exports = function(e) {
		return e = e || window.navigator.userAgent, /SamsungBrowser/i.test(e)
	}
}, function(e, n, t) {
	"use strict";
	t.r(n);
	var r = {};
	t.r(r), t.d(r, "WeakMap", function() {
		return ce
	});
	var o = {};
	t.r(o), t.d(o, "HostedFields", function() {
		return ei
	});
	var i = {};
	t.r(i), t.d(i, "request", function() {
		return $a
	}), t.d(i, "Buttons", function() {
		return es
	}), t.d(i, "Checkout", function() {
		return ns
	}), t.d(i, "CardFields", function() {
		return ts
	}), t.d(i, "ButtonsTemplate", function() {
		return rs
	}), t.d(i, "PopupOpenError", function() {
		return os
	}), t.d(i, "allowIframe", function() {
		return is
	}), t.d(i, "forceIframe", function() {
		return as
	}), t.d(i, "destroyAll", function() {
		return ss
	}), t.d(i, "setup", function() {
		return cs
	}), t.d(i, "destroy", function() {
		return us
	});
	var a = {};

	function s(e, n) {
		if (null == e) return {};
		var t, r, o = {},
			i = Object.keys(e);
		for (r = 0; r < i.length; r++) n.indexOf(t = i[r]) >= 0 || (o[t] = e[t]);
		return o
	}

	function c() {
		return window.navigator.mockUserAgent || window.navigator.userAgent
	}

	function u() {
		return !!c().match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)
	}

	function l(e) {
		return void 0 === e && (e = c()), e.indexOf("Opera Mini") > -1
	}

	function d(e) {
		return void 0 === e && (e = c()), /iPhone|iPod|iPad/.test(e)
	}

	function p() {
		if (window.document.documentMode) try {
			var e = window.status;
			return window.status = "testIntranetMode", "testIntranetMode" === window.status && (window.status = e, !0)
		} catch (e) {
			return !1
		}
		return !1
	}

	function f(e) {
		return void 0 === e && (e = c()), !(function(e) {
			return void 0 === e && (e = c()), !!d(e) && (!! function(e) {
				return void 0 === e && (e = c()), /\bGSA\b/.test(e)
			}(e) || /.+AppleWebKit(?!.*Safari)/.test(e))
		}(e) || function(e) {
			return void 0 === e && (e = c()), !! function(e) {
				return void 0 === e && (e = c()), /Android/.test(e)
			}(e) && /Version\/[\d.]+/.test(e) && !l(e)
		}(e) || l(e) || function(e) {
			return void 0 === e && (e = c()), /FxiOS/i.test(e)
		}(e) || function(e) {
			return void 0 === e && (e = c()), /EdgiOS/i.test(e)
		}(e) || function(e) {
			return void 0 === e && (e = c()), -1 !== e.indexOf("FBAN") || -1 !== e.indexOf("FBAV")
		}(e) || function(e) {
			return void 0 === e && (e = c()), /QQBrowser/.test(e)
		}(e) || "undefined" != typeof process && process.versions && process.versions.electron || (n = c(), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(n)) || !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches);
		var n
	}

	function h() {
		return (h = Object.assign || function(e) {
			for (var n = 1; n < arguments.length; n++) {
				var t = arguments[n];
				for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
			}
			return e
		}).apply(this, arguments)
	}

	function E(e) {
		try {
			if (!e) return !1;
			if ("undefined" != typeof Promise && e instanceof Promise) return !0;
			if ("undefined" != typeof window && window.Window && e instanceof window.Window) return !1;
			if ("undefined" != typeof window && window.constructor && e instanceof window.constructor) return !1;
			var n = {}.toString;
			if (n) {
				var t = n.call(e);
				if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
			}
			if ("function" == typeof e.then) return !0
		} catch (e) {
			return !1
		}
		return !1
	}
	t.r(a), t.d(a, "setup", function() {
		return ls
	});
	var m, g = [],
		y = [],
		w = 0;

	function v() {
		if (!w && m) {
			var e = m;
			m = null, e.resolve()
		}
	}

	function _() {
		w += 1
	}

	function T() {
		w -= 1, v()
	}
	var N = function() {
		function e(e) {
			var n = this;
			if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], e) {
				var t, r, o = !1,
					i = !1,
					a = !1;
				_();
				try {
					e(function(e) {
						a ? n.resolve(e) : (o = !0, t = e)
					}, function(e) {
						a ? n.reject(e) : (i = !0, r = e)
					})
				} catch (e) {
					return T(), void this.reject(e)
				}
				T(), a = !0, o ? this.resolve(t) : i && this.reject(r)
			}
		}
		var n = e.prototype;
		return n.resolve = function(e) {
			if (this.resolved || this.rejected) return this;
			if (E(e)) throw new Error("Can not resolve promise with another promise");
			return this.resolved = !0, this.value = e, this.dispatch(), this
		}, n.reject = function(e) {
			var n = this;
			if (this.resolved || this.rejected) return this;
			if (E(e)) throw new Error("Can not reject promise with another promise");
			if (!e) {
				var t = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
				e = new Error("Expected reject to be called with Error, got " + t)
			}
			return this.rejected = !0, this.error = e, this.errorHandled || setTimeout(function() {
				n.errorHandled || function(e, n) {
					if (-1 === g.indexOf(e)) {
						g.push(e), setTimeout(function() {
							throw e
						}, 1);
						for (var t = 0; t < y.length; t++) y[t](e, n)
					}
				}(e, n)
			}, 1), this.dispatch(), this
		}, n.asyncReject = function(e) {
			return this.errorHandled = !0, this.reject(e), this
		}, n.dispatch = function() {
			var n = this,
				t = this.resolved,
				r = this.rejected,
				o = this.handlers;
			if (!this.dispatching && (t || r)) {
				this.dispatching = !0, _();
				for (var i = function(i) {
						var a = o[i],
							s = a.onSuccess,
							c = a.onError,
							u = a.promise,
							l = void 0;
						if (t) try {
							l = s ? s(n.value) : n.value
						} catch (e) {
							return u.reject(e), "continue"
						} else if (r) {
							if (!c) return u.reject(n.error), "continue";
							try {
								l = c(n.error)
							} catch (e) {
								return u.reject(e), "continue"
							}
						} l instanceof e && (l.resolved || l.rejected) ? (l.resolved ? u.resolve(l.value) : u.reject(l.error), l.errorHandled = !0) : E(l) ? l instanceof e && (l.resolved || l.rejected) ? l.resolved ? u.resolve(l.value) : u.reject(l.error) : l.then(function(e) {
							u.resolve(e)
						}, function(e) {
							u.reject(e)
						}) : u.resolve(l)
					}, a = 0; a < o.length; a++) i(a);
				o.length = 0, this.dispatching = !1, T()
			}
		}, n.then = function(n, t) {
			if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
			if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
			var r = new e;
			return this.handlers.push({
				promise: r,
				onSuccess: n,
				onError: t
			}), this.errorHandled = !0, this.dispatch(), r
		}, n.catch = function(e) {
			return this.then(void 0, e)
		}, n.finally = function(n) {
			if (n && "function" != typeof n && !n.call) throw new Error("Promise.finally expected a function");
			return this.then(function(t) {
				return e.try(n).then(function() {
					return t
				})
			}, function(t) {
				return e.try(n).then(function() {
					throw t
				})
			})
		}, n.timeout = function(e, n) {
			var t = this;
			if (this.resolved || this.rejected) return this;
			var r = setTimeout(function() {
				t.resolved || t.rejected || t.reject(n || new Error("Promise timed out after " + e + "ms"))
			}, e);
			return this.then(function(e) {
				return clearTimeout(r), e
			})
		}, n.toPromise = function() {
			if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
			return Promise.resolve(this)
		}, e.resolve = function(n) {
			return n instanceof e ? n : E(n) ? new e(function(e, t) {
				return n.then(e, t)
			}) : (new e).resolve(n)
		}, e.reject = function(n) {
			return (new e).reject(n)
		}, e.asyncReject = function(n) {
			return (new e).asyncReject(n)
		}, e.all = function(n) {
			var t = new e,
				r = n.length,
				o = [];
			if (!r) return t.resolve(o), t;
			for (var i = function(i) {
					var a = n[i];
					if (a instanceof e) {
						if (a.resolved) return o[i] = a.value, r -= 1, "continue"
					} else if (!E(a)) return o[i] = a, r -= 1, "continue";
					e.resolve(a).then(function(e) {
						o[i] = e, 0 == (r -= 1) && t.resolve(o)
					}, function(e) {
						t.reject(e)
					})
				}, a = 0; a < n.length; a++) i(a);
			return 0 === r && t.resolve(o), t
		}, e.hash = function(n) {
			var t = {};
			return e.all(Object.keys(n).map(function(r) {
				return e.resolve(n[r]).then(function(e) {
					t[r] = e
				})
			})).then(function() {
				return t
			})
		}, e.map = function(n, t) {
			return e.all(n.map(t))
		}, e.onPossiblyUnhandledException = function(e) {
			return function(e) {
				return y.push(e), {
					cancel: function() {
						y.splice(y.indexOf(e), 1)
					}
				}
			}(e)
		}, e.try = function(n, t, r) {
			if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
			var o;
			_();
			try {
				o = n.apply(t, r || [])
			} catch (n) {
				return T(), e.reject(n)
			}
			return T(), e.resolve(o)
		}, e.delay = function(n) {
			return new e(function(e) {
				setTimeout(e, n)
			})
		}, e.isPromise = function(n) {
			return !!(n && n instanceof e) || E(n)
		}, e.flush = function() {
			return n = m = m || new e, v(), n;
			var n
		}, e
	}();

	function C(e) {
		return "[object RegExp]" === {}.toString.call(e)
	}
	var I = {
			MOCK: "mock:",
			FILE: "file:",
			ABOUT: "about:"
		},
		O = "*",
		b = {
			IFRAME: "iframe",
			POPUP: "popup"
		},
		L = "Call was rejected by callee.\r\n";

	function A(e) {
		return void 0 === e && (e = window), e.location.protocol === I.ABOUT
	}

	function R(e) {
		if (e) try {
			if (e.parent && e.parent !== e) return e.parent
		} catch (e) {}
	}

	function S(e) {
		if (e && !R(e)) try {
			return e.opener
		} catch (e) {}
	}

	function D(e) {
		try {
			return !0
		} catch (e) {}
		return !1
	}

	function x(e) {
		var n = (e = e || window).location;
		if (!n) throw new Error("Can not read window location");
		var t = n.protocol;
		if (!t) throw new Error("Can not read window protocol");
		if (t === I.FILE) return I.FILE + "//";
		if (t === I.ABOUT) {
			var r = R(e);
			return r && D() ? x(r) : I.ABOUT + "//"
		}
		var o = n.host;
		if (!o) throw new Error("Can not read window host");
		return t + "//" + o
	}

	function P(e) {
		var n = x(e = e || window);
		return n && e.mockDomain && 0 === e.mockDomain.indexOf(I.MOCK) ? e.mockDomain : n
	}

	function F(e) {
		if (! function(e) {
				try {
					if (e === window) return !0
				} catch (e) {}
				try {
					var n = Object.getOwnPropertyDescriptor(e, "location");
					if (n && !1 === n.enumerable) return !1
				} catch (e) {}
				try {
					if (A(e) && D()) return !0
				} catch (e) {}
				try {
					if (x(e) === x(window)) return !0
				} catch (e) {}
				return !1
			}(e)) return !1;
		try {
			if (e === window) return !0;
			if (A(e) && D()) return !0;
			if (P(window) === P(e)) return !0
		} catch (e) {}
		return !1
	}

	function M(e) {
		if (!F(e)) throw new Error("Expected window to be same domain");
		return e
	}

	function U(e, n) {
		if (!e || !n) return !1;
		var t = R(n);
		return t ? t === e : -1 !== function(e) {
			var n = [];
			try {
				for (; e.parent !== e;) n.push(e.parent), e = e.parent
			} catch (e) {}
			return n
		}(n).indexOf(e)
	}

	function H(e) {
		var n, t, r = [];
		try {
			n = e.frames
		} catch (t) {
			n = e
		}
		try {
			t = n.length
		} catch (e) {}
		if (0 === t) return r;
		if (t) {
			for (var o = 0; o < t; o++) {
				var i = void 0;
				try {
					i = n[o]
				} catch (e) {
					continue
				}
				r.push(i)
			}
			return r
		}
		for (var a = 0; a < 100; a++) {
			var s = void 0;
			try {
				s = n[a]
			} catch (e) {
				return r
			}
			if (!s) return r;
			r.push(s)
		}
		return r
	}

	function k(e) {
		for (var n = [], t = 0, r = H(e); t < r.length; t++) {
			var o = r[t];
			n.push(o);
			for (var i = 0, a = k(o); i < a.length; i++) n.push(a[i])
		}
		return n
	}

	function B(e) {
		if (e) {
			try {
				if (e.top) return e.top
			} catch (e) {}
			if (R(e) === e) return e;
			try {
				if (U(window, e) && window.top) return window.top
			} catch (e) {}
			try {
				if (U(e, window) && window.top) return window.top
			} catch (e) {}
			for (var n = 0, t = k(e); n < t.length; n++) {
				var r = t[n];
				try {
					if (r.top) return r.top
				} catch (e) {}
				if (R(r) === r) return r
			}
		}
	}

	function j(e) {
		var n = B(e);
		if (!n) throw new Error("Can not determine top window");
		return [].concat(k(n), [n])
	}
	var W = [],
		z = [];

	function Z(e, n) {
		void 0 === n && (n = !0);
		try {
			if (e === window) return !1
		} catch (e) {
			return !0
		}
		try {
			if (!e) return !0
		} catch (e) {
			return !0
		}
		try {
			if (e.closed) return !0
		} catch (e) {
			return !e || e.message !== L
		}
		if (n && F(e)) try {
			if (e.mockclosed) return !0
		} catch (e) {}
		try {
			if (!e.parent || !e.top) return !0
		} catch (e) {}
		var t = function(e, n) {
			for (var t = 0; t < e.length; t++) try {
				if (e[t] === n) return t
			} catch (e) {}
			return -1
		}(W, e);
		if (-1 !== t) {
			var r = z[t];
			if (r && function(e) {
					if (!e.contentWindow) return !0;
					if (!e.parentNode) return !0;
					var n = e.ownerDocument;
					return !(!n || !n.documentElement || n.documentElement.contains(e))
				}(r)) return !0
		}
		return !1
	}

	function V(e) {
		return (e = e || window).navigator.mockUserAgent || e.navigator.userAgent
	}

	function G(e, n) {
		for (var t = H(e), r = 0; r < t.length; r++) {
			var o = t[r];
			try {
				if (F(o) && o.name === n && -1 !== t.indexOf(o)) return o
			} catch (e) {}
		}
		try {
			if (-1 !== t.indexOf(e.frames[n])) return e.frames[n]
		} catch (e) {}
		try {
			if (-1 !== t.indexOf(e[n])) return e[n]
		} catch (e) {}
	}

	function Y(e, n) {
		return e === S(n)
	}

	function K(e) {
		return S(e = e || window) || R(e) || void 0
	}

	function q(e, n) {
		for (var t = 0; t < e.length; t++)
			for (var r = e[t], o = 0; o < n.length; o++)
				if (r === n[o]) return !0;
		return !1
	}

	function J(e) {
		void 0 === e && (e = window);
		for (var n = 0, t = e; t;)(t = R(t)) && (n += 1);
		return n
	}

	function X(e, n) {
		var t = B(e) || e,
			r = B(n) || n;
		try {
			if (t && r) return t === r
		} catch (e) {}
		var o = j(e),
			i = j(n);
		if (q(o, i)) return !0;
		var a = S(t),
			s = S(r);
		return !(a && q(j(a), i) || (s && q(j(s), o), 1))
	}

	function Q(e, n) {
		if ("string" == typeof e) {
			if ("string" == typeof n) return e === O || n === e;
			if (C(n)) return !1;
			if (Array.isArray(n)) return !1
		}
		return C(e) ? C(n) ? e.toString() === n.toString() : !Array.isArray(n) && Boolean(n.match(e)) : !!Array.isArray(e) && (Array.isArray(n) ? JSON.stringify(e) === JSON.stringify(n) : !C(n) && e.some(function(e) {
			return Q(e, n)
		}))
	}

	function $(e) {
		return e.match(/^(https?|mock|file):\/\//) ? e.split("/").slice(0, 3).join("/") : P()
	}

	function ee(e, n, t, r) {
		var o;
		return void 0 === t && (t = 1e3), void 0 === r && (r = 1 / 0),
			function i() {
				if (Z(e)) return o && clearTimeout(o), n();
				r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
			}(), {
				cancel: function() {
					o && clearTimeout(o)
				}
			}
	}

	function ne(e) {
		try {
			if (e === window) return !0
		} catch (e) {
			if (e && e.message === L) return !0
		}
		try {
			if ("[object Window]" === {}.toString.call(e)) return !0
		} catch (e) {
			if (e && e.message === L) return !0
		}
		try {
			if (window.Window && e instanceof window.Window) return !0
		} catch (e) {
			if (e && e.message === L) return !0
		}
		try {
			if (e && e.self === e) return !0
		} catch (e) {
			if (e && e.message === L) return !0
		}
		try {
			if (e && e.parent === e) return !0
		} catch (e) {
			if (e && e.message === L) return !0
		}
		try {
			if (e && e.top === e) return !0
		} catch (e) {
			if (e && e.message === L) return !0
		}
		return !1
	}

	function te(e) {
		if (0 !== $(e).indexOf(I.MOCK)) return e;
		throw new Error("Mock urls not supported out of test mode")
	}

	function re(e, n) {
		for (var t = 0; t < e.length; t++) try {
			if (e[t] === n) return t
		} catch (e) {}
		return -1
	}
	var oe, ie, ae = Object.defineProperty,
		se = Date.now() % 1e9,
		ce = function() {
			function e() {
				if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, se += 1, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + se, function() {
						if ("undefined" == typeof WeakMap) return !1;
						if (void 0 === Object.freeze) return !1;
						try {
							var e = new WeakMap,
								n = {};
							return Object.freeze(n), e.set(n, "__testvalue__"), "__testvalue__" === e.get(n)
						} catch (e) {
							return !1
						}
					}()) try {
					this.weakmap = new WeakMap
				} catch (e) {}
				this.keys = [], this.values = []
			}
			var n = e.prototype;
			return n._cleanupClosedWindows = function() {
				for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
					var r = n[t];
					if (ne(r) && Z(r)) {
						if (e) try {
							e.delete(r)
						} catch (e) {}
						n.splice(t, 1), this.values.splice(t, 1), t -= 1
					}
				}
			}, n.isSafeToReadWrite = function(e) {
				return !ne(e)
			}, n.set = function(e, n) {
				if (!e) throw new Error("WeakMap expected key");
				var t = this.weakmap;
				if (t) try {
					t.set(e, n)
				} catch (e) {
					delete this.weakmap
				}
				if (this.isSafeToReadWrite(e)) {
					var r = this.name,
						o = e[r];
					o && o[0] === e ? o[1] = n : ae(e, r, {
						value: [e, n],
						writable: !0
					})
				} else {
					this._cleanupClosedWindows();
					var i = this.keys,
						a = this.values,
						s = re(i, e); - 1 === s ? (i.push(e), a.push(n)) : a[s] = n
				}
			}, n.get = function(e) {
				if (!e) throw new Error("WeakMap expected key");
				var n = this.weakmap;
				if (n) try {
					if (n.has(e)) return n.get(e)
				} catch (e) {
					delete this.weakmap
				}
				if (!this.isSafeToReadWrite(e)) {
					this._cleanupClosedWindows();
					var t = re(this.keys, e);
					if (-1 === t) return;
					return this.values[t]
				}
				var r = e[this.name];
				if (r && r[0] === e) return r[1]
			}, n.delete = function(e) {
				if (!e) throw new Error("WeakMap expected key");
				var n = this.weakmap;
				if (n) try {
					n.delete(e)
				} catch (e) {
					delete this.weakmap
				}
				if (this.isSafeToReadWrite(e)) {
					var t = e[this.name];
					t && t[0] === e && (t[0] = t[1] = void 0)
				} else {
					this._cleanupClosedWindows();
					var r = this.keys,
						o = re(r, e); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
				}
			}, n.has = function(e) {
				if (!e) throw new Error("WeakMap expected key");
				var n = this.weakmap;
				if (n) try {
					if (n.has(e)) return !0
				} catch (e) {
					delete this.weakmap
				}
				if (this.isSafeToReadWrite(e)) {
					var t = e[this.name];
					return !(!t || t[0] !== e)
				}
				return this._cleanupClosedWindows(), -1 !== re(this.keys, e)
			}, n.getOrSet = function(e, n) {
				if (this.has(e)) return this.get(e);
				var t = n();
				return this.set(e, t), t
			}, e
		}();

	function ue(e) {
		if ("function" == typeof btoa) return btoa(e);
		if ("undefined" != typeof Buffer) return Buffer.from(e, "utf8").toString("base64");
		throw new Error("Can not find window.btoa or Buffer")
	}

	function le() {
		var e = "0123456789abcdef";
		return "xxxxxxxxxx".replace(/./g, function() {
			return e.charAt(Math.floor(Math.random() * e.length))
		}) + "_" + ue((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
	}

	function de() {
		if ("undefined" != typeof window) return window;
		if ("undefined" != typeof window) return window;
		if ("undefined" != typeof global) return global;
		throw new Error("No global found")
	}

	function pe(e) {
		try {
			return JSON.stringify([].slice.call(e), function(e, n) {
				return "function" == typeof n ? "memoize[" + function(e) {
					if (oe = oe || new ce, null == e || "object" != typeof e && "function" != typeof e) throw new Error("Invalid object");
					var n = oe.get(e);
					return n || (n = typeof e + ":" + le(), oe.set(e, n)), n
				}(n) + "]" : n
			})
		} catch (e) {
			throw new Error("Arguments not serializable -- can not be used to memoize")
		}
	}

	function fe(e) {
		var n = {};

		function t() {
			for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
			var i = pe(r);
			return n.hasOwnProperty(i) ? n[i] : (n[i] = e.apply(this, arguments).finally(function() {
				delete n[i]
			}), n[i])
		}
		return t.reset = function() {
			n = {}
		}, t
	}

	function he(e, n, t) {
		void 0 === t && (t = []);
		var r = e.__inline_memoize_cache__ = e.__inline_memoize_cache__ || {},
			o = pe(t);
		return r.hasOwnProperty(o) ? r[o] : r[o] = n.apply(void 0, t)
	}

	function Ee() {}

	function me(e) {
		var n = !1;
		return function() {
			if (!n) return n = !0, e.apply(this, arguments)
		}
	}

	function ge(e, n) {
		if (void 0 === n && (n = 1), n >= 3) return "stringifyError stack overflow";
		try {
			if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
			if ("string" == typeof e) return e;
			if (e instanceof Error) {
				var t = e && e.stack,
					r = e && e.message;
				if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
				if (t) return t;
				if (r) return r
			}
			return "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
		} catch (e) {
			return "Error while stringifying error: " + ge(e, n + 1)
		}
	}

	function ye(e) {
		return "string" == typeof e ? e : e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
	}

	function we(e, n) {
		if (!n) return e;
		if (Object.assign) return Object.assign(e, n);
		for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
		return e
	}

	function ve(e) {
		var n = [];
		for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
		return n
	}

	function _e(e, n) {
		return Math.round(e * n / 100)
	}

	function Te() {
		return Math.max.apply(Math, arguments)
	}

	function Ne(e) {
		return "data:image/svg+xml;base64," + ue(e)
	}

	function Ce(e, n) {
		void 0 === n && (n = Boolean);
		var t = {};
		for (var r in e) e.hasOwnProperty(r) && n(e[r], r) && (t[r] = e[r]);
		return t
	}

	function Ie(e) {
		return e
	}

	function Oe(e, n) {
		var t;
		return function r() {
			t = setTimeout(function() {
				e(), r()
			}, n)
		}(), {
			cancel: function() {
				clearTimeout(t)
			}
		}
	}

	function be(e, n, t) {
		if (Array.isArray(e)) {
			if ("number" != typeof n) throw new TypeError("Array key must be number")
		} else if ("object" == typeof e && null !== e && "string" != typeof n) throw new TypeError("Object key must be string");
		Object.defineProperty(e, n, {
			configurable: !0,
			enumerable: !0,
			get: function() {
				delete e[n];
				var r = t();
				return e[n] = r, r
			},
			set: function(t) {
				delete e[n], e[n] = t
			}
		})
	}

	function Le(e) {
		return "object" == typeof(n = e) && null !== n && "[object Object]" === {}.toString.call(e);
		var n
	}

	function Ae(e) {
		if (!Le(e)) return !1;
		var n = e.constructor;
		if ("function" != typeof n) return !1;
		var t = n.prototype;
		return !!Le(t) && !!t.hasOwnProperty("isPrototypeOf")
	}

	function Re(e, n, t) {
		if (void 0 === t && (t = ""), Array.isArray(e)) {
			for (var r = e.length, o = [], i = function(r) {
					be(o, r, function() {
						var o = t ? t + "." + r : "" + r,
							i = n(e[r], r, o);
						return (Ae(i) || Array.isArray(i)) && (i = Re(i, n, o)), i
					})
				}, a = 0; a < r; a++) i(a);
			return o
		}
		if (Ae(e)) {
			var s = {},
				c = function(r) {
					if (!e.hasOwnProperty(r)) return "continue";
					be(s, r, function() {
						var o = t ? t + "." + r : "" + r,
							i = n(e[r], r, o);
						return (Ae(i) || Array.isArray(i)) && (i = Re(i, n, o)), i
					})
				};
			for (var u in e) c(u);
			return s
		}
		throw new Error("Pass an object or array")
	}

	function Se(e) {
		return null != e
	}

	function De(e) {
		return "[object RegExp]" === {}.toString.call(e)
	}

	function xe(e, n, t) {
		if (e.hasOwnProperty(n)) return e[n];
		var r = t();
		return e[n] = r, r
	}

	function Pe(e) {
		var n = [],
			t = !1;
		return {
			set: function(n, r) {
				return t || (e[n] = r, this.register(function() {
					delete e[n]
				})), r
			},
			register: function(e) {
				t ? e() : n.push(me(e))
			},
			all: function() {
				var e = [];
				for (t = !0; n.length;) {
					var r = n.pop();
					e.push(r())
				}
				return N.all(e).then(Ee)
			}
		}
	}

	function Fe(e, n) {
		if (null == n) throw new Error("Expected " + e + " to be present");
		return n
	}

	function Me() {
		return Boolean(document.body) && "complete" === document.readyState
	}

	function Ue(e) {
		return e.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B")
	}

	function He() {
		return he(He, function() {
			return new N(function(e) {
				if (Me()) return e();
				var n = setInterval(function() {
					if (Me()) return clearInterval(n), e()
				}, 10)
			})
		})
	}

	function ke(e) {
		return he(ke, function() {
			var n = {};
			if (!e) return n;
			if (-1 === e.indexOf("=")) return n;
			for (var t = 0, r = e.split("&"); t < r.length; t++) {
				var o = r[t];
				(o = o.split("="))[0] && o[1] && (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
			}
			return n
		}, [e])
	}

	function Be(e, n) {
		return void 0 === n && (n = {}), n && Object.keys(n).length ? (void 0 === (t = h({}, ke(e), n)) && (t = {}), Object.keys(t).filter(function(e) {
			return "string" == typeof t[e]
		}).map(function(e) {
			return Ue(e) + "=" + Ue(t[e])
		}).join("&")) : e;
		var t
	}

	function je(e, n) {
		return void 0 === n && (n = window), new N(function(t) {
			n.location = e,
				function(e) {
					return -1 === e.indexOf("#") || 0 !== e.indexOf("#") && e.split("#")[0] !== window.location.href.split("#")[0]
				}(e) || t()
		})
	}

	function We() {
		return he(We, function() {
			return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0)
		})
	}

	function ze() {
		return "undefined" != typeof window
	}

	function Ze(e) {
		var n = e.host,
			t = void 0 === n ? window.location.host : n,
			r = e.path;
		return he(Ze, function() {
			for (var e = "" + t + r, n = [].slice.call(document.getElementsByTagName("script")), o = 0; o < n.length; o++) {
				var i = n[o];
				if (i.src && i.src.replace(/^https?:\/\//, "").split("?")[0] === e) return i
			}
		}, [r])
	}

	function Ve() {
		return he(Ve, function() {
			try {
				if ("undefined" == typeof window) return !1;
				if (window.localStorage) {
					var e = Math.random().toString();
					window.localStorage.setItem("__test__localStorage__", e);
					var n = window.localStorage.getItem("__test__localStorage__");
					if (window.localStorage.removeItem("__test__localStorage__"), e === n) return !0
				}
			} catch (e) {}
			return !1
		})
	}

	function Ge() {
		var e = window.navigator,
			n = e.languages ? [].slice.apply(e.languages) : [];
		return e.language && n.push(e.language), e.userLanguage && n.push(e.userLanguage), n.map(function(e) {
			if (e && e.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
				var n = e.split(/[-_]/);
				return {
					country: n[1],
					lang: n[0]
				}
			}
			return e && e.match(/^[a-z]{2}$/) ? {
				lang: e
			} : null
		}).filter(Boolean)
	}

	function Ye(e, n) {
		e.appendChild(n)
	}

	function Ke(e) {
		return e instanceof window.Element || null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
	}

	function qe(e, n) {
		return void 0 === n && (n = document), Ke(e) ? e : "string" == typeof e ? n.querySelector(e) : void 0
	}

	function Je(e, n) {
		void 0 === n && (n = document);
		var t = qe(e, n);
		if (t) return t;
		throw new Error("Can not find element: " + ye(e))
	}

	function Xe(e) {
		return new N(function(n, t) {
			var r = ye(e),
				o = qe(e);
			if (o) return n(o);
			if (Me()) return t(new Error("Document is ready and element " + r + " does not exist"));
			var i = setInterval(function() {
				return (o = qe(e)) ? (clearInterval(i), n(o)) : Me() ? (clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))) : void 0
			}, 10)
		})
	}

	function Qe(e) {
		this.message = e
	}

	function $e(e, n) {
		var t = (n = n || {}).width,
			r = n.height,
			o = 0,
			i = 0;
		t && (window.outerWidth ? i = Math.round((window.outerWidth - t) / 2) + window.screenX : window.screen.width && (i = Math.round((window.screen.width - t) / 2))), r && (window.outerHeight ? o = Math.round((window.outerHeight - r) / 2) + window.screenY : window.screen.height && (o = Math.round((window.screen.height - r) / 2)));
		var a = (n = h({
			top: o,
			left: i,
			width: t,
			height: r,
			status: 1,
			toolbar: 0,
			menubar: 0,
			resizable: 1,
			scrollbars: 1
		}, n)).name || "";
		delete n.name;
		var s, c, u = Object.keys(n).map(function(e) {
			if (n[e]) return e + "=" + ye(n[e])
		}).filter(Boolean).join(",");
		try {
			s = window.open(e, a, u, !0)
		} catch (c) {
			throw new Qe("Can not open popup window - " + (c.stack || c.message))
		}
		if (Z(s)) throw new Qe("Can not open popup window - blocked");
		return window.addEventListener("unload", function() {
			return s.close()
		}), s
	}

	function en(e, n) {
		var t = n.tagName.toLowerCase();
		if ("html" !== t) throw new Error("Expected element to be html, got " + t);
		for (var r = e.document.documentElement; r.children && r.children.length;) r.removeChild(r.children[0]);
		for (; n.children.length;) r.appendChild(n.children[0])
	}

	function nn(e) {
		if ((ie = ie || new ce).has(e)) {
			var n = ie.get(e);
			if (n) return n
		}
		var t = new N(function(n, t) {
			e.addEventListener("load", function() {
				(function(e) {
					if (function() {
							for (var e = 0; e < W.length; e++) {
								var n = !1;
								try {
									n = W[e].closed
								} catch (e) {}
								n && (z.splice(e, 1), W.splice(e, 1))
							}
						}(), e && e.contentWindow) try {
						W.push(e.contentWindow), z.push(e)
					} catch (e) {}
				})(e), n(e)
			}), e.addEventListener("error", function(r) {
				e.contentWindow ? n(e) : t(r)
			})
		});
		return ie.set(e, t), t
	}

	function tn(e) {
		return nn(e).then(function(e) {
			if (!e.contentWindow) throw new Error("Could not find window in iframe");
			return e.contentWindow
		})
	}

	function rn(e, n) {
		void 0 === e && (e = {});
		var t = e.style || {},
			r = function(e, n, t) {
				void 0 === e && (e = "div"), void 0 === n && (n = {}), e = e.toLowerCase();
				var r, o, i, a = document.createElement(e);
				if (n.style && we(a.style, n.style), n.class && (a.className = n.class.join(" ")), n.id && a.setAttribute("id", n.id), n.attributes)
					for (var s = 0, c = Object.keys(n.attributes); s < c.length; s++) {
						var u = c[s];
						a.setAttribute(u, n.attributes[u])
					}
				if (n.styleSheet && (r = a, o = n.styleSheet, void 0 === i && (i = window.document), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(i.createTextNode(o))), n.html) {
					if ("iframe" === e) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
					a.innerHTML = n.html
				}
				return a
			}("iframe", {
				attributes: h({
					allowTransparency: "true"
				}, e.attributes || {}),
				style: h({
					backgroundColor: "transparent",
					border: "none"
				}, t),
				html: e.html,
				class: e.class
			}),
			o = window.navigator.userAgent.match(/MSIE|Edge/i);
		return r.hasAttribute("id") || r.setAttribute("id", le()), nn(r), n && Je(n).appendChild(r), (e.url || o) && r.setAttribute("src", e.url || "about:blank"), r
	}

	function on(e, n, t) {
		return e.addEventListener(n, t), {
			cancel: function() {
				e.removeEventListener(n, t)
			}
		}
	}

	function an(e, n, t) {
		t = me(t);
		for (var r = 0; r < n.length; r++) e.addEventListener(n[r], t);
		return {
			cancel: me(function() {
				for (var r = 0; r < n.length; r++) e.removeEventListener(n[r], t)
			})
		}
	}
	Qe.prototype = Object.create(Error.prototype);
	var sn = ["webkit", "moz", "ms", "o"],
		cn = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
		un = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];

	function ln(e, n, t, r) {
		return void 0 === r && (r = 1e3), new N(function(o, i) {
			var a = Je(e);
			if (!a) return o();
			var s, c, u, l, d = !1;

			function p() {
				clearTimeout(s), clearTimeout(c), u.cancel(), l.cancel()
			}
			u = an(a, cn, function(e) {
					e.target === a && e.animationName === n && (clearTimeout(s), e.stopPropagation(), u.cancel(), d = !0, c = setTimeout(function() {
						p(), o()
					}, r))
				}), l = an(a, un, function(e) {
					if (e.target === a && e.animationName === n) return p(), "string" == typeof e.animationName && e.animationName !== n ? i("Expected animation name to be " + n + ", found " + e.animationName) : o()
				}),
				function(e, n, t) {
					e.style[n] = t;
					for (var r, o = (r = n).charAt(0).toUpperCase() + r.slice(1).toLowerCase(), i = 0; i < sn.length; i++) e.style["" + sn[i] + o] = t
				}(a, "animationName", n), s = setTimeout(function() {
					if (!d) return p(), o()
				}, 200), t && t(p)
		})
	}

	function dn(e) {
		e && e.parentNode && e.parentNode.removeChild(e)
	}

	function pn(e) {
		return !e || !e.parentNode
	}

	function fn(e, n, t) {
		var r = void 0 === t ? {} : t,
			o = r.width,
			i = void 0 === o || o,
			a = r.height,
			s = void 0 === a || a,
			c = r.interval,
			u = void 0 === c ? 100 : c,
			l = r.win,
			d = void 0 === l ? window : l,
			p = e.offsetWidth,
			f = e.offsetHeight;
		n({
			width: p,
			height: f
		});
		var h, E, m = function() {
			var t = e.offsetWidth,
				r = e.offsetHeight;
			(i && t !== p || s && r !== f) && n({
				width: t,
				height: r
			}), p = t, f = r
		};
		return void 0 !== d.ResizeObserver ? (h = new d.ResizeObserver(m)).observe(e) : void 0 !== d.MutationObserver ? ((h = new d.MutationObserver(m)).observe(e, {
			attributes: !0,
			childList: !0,
			subtree: !0,
			characterData: !1
		}), d.addEventListener("resize", m)) : function e() {
			m(), E = setTimeout(e, u)
		}(), {
			cancel: function() {
				h.disconnect(), window.removeEventListener("resize", m), clearTimeout(E)
			}
		}
	}
	var hn = 12e5;

	function En(e) {
		var n = e.name,
			t = e.lifetime,
			r = void 0 === t ? hn : t;
		return he(En, function() {
			var e, t = "__" + n + "_storage__";

			function o(n) {
				var r, o = Ve();
				if (e && (r = e), !r && o) {
					var i = window.localStorage.getItem(t);
					i && (r = JSON.parse(i))
				}
				r || (r = de()[t]), r || (r = {
					id: le()
				}), r.id || (r.id = le()), e = r;
				var a = n(r);
				return o ? window.localStorage.setItem(t, JSON.stringify(r)) : de()[t] = r, e = null, a
			}

			function i(e) {
				return o(function(n) {
					var t = n.__session__,
						o = Date.now();
					return t && o - t.created > r && (t = null), t || (t = {
						guid: le(),
						created: o
					}), n.__session__ = t, e(t)
				})
			}
			return {
				getState: o,
				getID: function() {
					return o(function(e) {
						return e.id
					})
				},
				getSessionState: function(e) {
					return i(function(n) {
						return n.state = n.state || {}, e(n.state)
					})
				},
				getSessionID: function() {
					return i(function(e) {
						return e.guid
					})
				}
			}
		}, [{
			name: n,
			lifetime: r
		}])
	}
	var mn, gn = {
			CONTENT_TYPE: "content-type",
			ACCEPT: "accept"
		},
		yn = [];

	function wn(e) {
		var n = e.url,
			t = e.method,
			r = void 0 === t ? "get" : t,
			o = e.headers,
			i = void 0 === o ? {} : o,
			a = e.json,
			s = e.data,
			c = e.body,
			u = e.win,
			l = void 0 === u ? window : u,
			d = e.timeout,
			p = void 0 === d ? 0 : d;
		return new N(function(e, t) {
			if (a && s || a && c || s && a) throw new Error("Only options.json or options.data or options.body should be passed");
			for (var o = {}, u = 0, d = Object.keys(i); u < d.length; u++) {
				var f = d[u];
				o[f.toLowerCase()] = i[f]
			}
			a ? o[gn.CONTENT_TYPE] = o[gn.CONTENT_TYPE] || "application/json" : (s || c) && (o[gn.CONTENT_TYPE] = o[gn.CONTENT_TYPE] || "application/x-www-form-urlencoded; charset=utf-8"), o[gn.ACCEPT] = o[gn.ACCEPT] || "application/json";
			for (var h = 0; h < yn.length; h++)
				for (var E = (0, yn[h])(), m = 0, g = Object.keys(E); m < g.length; m++) {
					var y = g[m];
					o[y.toLowerCase()] = E[y]
				}
			var w = new l.XMLHttpRequest;
			for (var v in w.addEventListener("load", function() {
					var o = function(e) {
						void 0 === e && (e = "");
						for (var n = {}, t = 0, r = e.trim().split("\n"); t < r.length; t++) {
							var o = r[t].split(":"),
								i = o[0],
								a = o.slice(1);
							n[i.toLowerCase()] = a.join(":").trim()
						}
						return n
					}(this.getAllResponseHeaders());
					if (!this.status) return t(new Error("Request to " + r.toLowerCase() + " " + n + " failed: no response status code."));
					var i = o["content-type"],
						a = i && (0 === i.indexOf("application/json") || 0 === i.indexOf("text/json")),
						s = this.responseText;
					try {
						s = JSON.parse(s)
					} catch (e) {
						if (a) return t(new Error("Invalid json: " + this.responseText + "."))
					}
					return e({
						status: this.status,
						headers: o,
						body: s
					})
				}, !1), w.addEventListener("error", function(e) {
					t(new Error("Request to " + r.toLowerCase() + " " + n + " failed: " + e.toString() + "."))
				}, !1), w.open(r, n, !0), o) o.hasOwnProperty(v) && w.setRequestHeader(v, o[v]);
			a ? c = JSON.stringify(a) : s && (c = Object.keys(s).map(function(e) {
				return encodeURIComponent(e) + "=" + (s ? encodeURIComponent(s[e]) : "")
			}).join("&")), w.timeout = p, w.ontimeout = function() {
				t(new Error("Request to " + r.toLowerCase() + " " + n + " has timed out"))
			}, w.send(c)
		})
	}

	function vn(e) {
		return "string" == typeof e && /^[0-9]+%$/.test(e)
	}

	function _n(e) {
		return "string" == typeof e && /^[0-9]+px$/.test(e)
	}

	function Tn(e) {
		if ("number" == typeof e) return e;
		var n = e.match(/^([0-9]+)(px|%)$/);
		if (!n) throw new Error("Could not match css value from " + e);
		return parseInt(n[1], 10)
	}

	function Nn(e) {
		return Tn(e) + "px"
	}

	function Cn(e) {
		return "number" == typeof e ? Nn(e) : vn(e) ? e : Nn(e)
	}

	function In(e, n) {
		if ("number" == typeof e) return e;
		if (vn(e)) return parseInt(n * Tn(e) / 100, 10);
		if (_n(e)) return Tn(e);
		throw new Error("Can not normalize dimension: " + e)
	}
	var On = {
			AD: "AD",
			AE: "AE",
			AG: "AG",
			AI: "AI",
			AL: "AL",
			AM: "AM",
			AN: "AN",
			AO: "AO",
			AR: "AR",
			AT: "AT",
			AU: "AU",
			AW: "AW",
			AZ: "AZ",
			BA: "BA",
			BB: "BB",
			BE: "BE",
			BF: "BF",
			BG: "BG",
			BH: "BH",
			BI: "BI",
			BJ: "BJ",
			BM: "BM",
			BN: "BN",
			BO: "BO",
			BR: "BR",
			BS: "BS",
			BT: "BT",
			BW: "BW",
			BY: "BY",
			BZ: "BZ",
			CA: "CA",
			CD: "CD",
			CG: "CG",
			CH: "CH",
			CI: "CI",
			CK: "CK",
			CL: "CL",
			CM: "CM",
			CN: "CN",
			CO: "CO",
			CR: "CR",
			CV: "CV",
			CY: "CY",
			CZ: "CZ",
			DE: "DE",
			DJ: "DJ",
			DK: "DK",
			DM: "DM",
			DO: "DO",
			DZ: "DZ",
			EC: "EC",
			EE: "EE",
			EG: "EG",
			ER: "ER",
			ES: "ES",
			ET: "ET",
			FI: "FI",
			FJ: "FJ",
			FK: "FK",
			FM: "FM",
			FO: "FO",
			FR: "FR",
			GA: "GA",
			GB: "GB",
			GD: "GD",
			GE: "GE",
			GF: "GF",
			GI: "GI",
			GL: "GL",
			GM: "GM",
			GN: "GN",
			GP: "GP",
			GR: "GR",
			GT: "GT",
			GW: "GW",
			GY: "GY",
			HK: "HK",
			HN: "HN",
			HR: "HR",
			HU: "HU",
			ID: "ID",
			IE: "IE",
			IL: "IL",
			IN: "IN",
			IS: "IS",
			IT: "IT",
			JM: "JM",
			JO: "JO",
			JP: "JP",
			KE: "KE",
			KG: "KG",
			KH: "KH",
			KI: "KI",
			KM: "KM",
			KN: "KN",
			KR: "KR",
			KW: "KW",
			KY: "KY",
			KZ: "KZ",
			LA: "LA",
			LC: "LC",
			LI: "LI",
			LK: "LK",
			LS: "LS",
			LT: "LT",
			LU: "LU",
			LV: "LV",
			MA: "MA",
			MC: "MC",
			MD: "MD",
			ME: "ME",
			MG: "MG",
			MH: "MH",
			MK: "MK",
			ML: "ML",
			MN: "MN",
			MQ: "MQ",
			MR: "MR",
			MS: "MS",
			MT: "MT",
			MU: "MU",
			MV: "MV",
			MW: "MW",
			MX: "MX",
			MY: "MY",
			MZ: "MZ",
			NA: "NA",
			NC: "NC",
			NE: "NE",
			NF: "NF",
			NG: "NG",
			NI: "NI",
			NL: "NL",
			NO: "NO",
			NP: "NP",
			NR: "NR",
			NU: "NU",
			NZ: "NZ",
			OM: "OM",
			PA: "PA",
			PE: "PE",
			PF: "PF",
			PG: "PG",
			PH: "PH",
			PL: "PL",
			PM: "PM",
			PN: "PN",
			PT: "PT",
			PW: "PW",
			PY: "PY",
			QA: "QA",
			RE: "RE",
			RO: "RO",
			RS: "RS",
			RU: "RU",
			RW: "RW",
			SA: "SA",
			SB: "SB",
			SC: "SC",
			SE: "SE",
			SG: "SG",
			SH: "SH",
			SI: "SI",
			SJ: "SJ",
			SK: "SK",
			SL: "SL",
			SM: "SM",
			SN: "SN",
			SO: "SO",
			SR: "SR",
			ST: "ST",
			SV: "SV",
			SZ: "SZ",
			TC: "TC",
			TD: "TD",
			TG: "TG",
			TH: "TH",
			TJ: "TJ",
			TM: "TM",
			TN: "TN",
			TO: "TO",
			TR: "TR",
			TT: "TT",
			TV: "TV",
			TW: "TW",
			TZ: "TZ",
			UA: "UA",
			UG: "UG",
			US: "US",
			UY: "UY",
			VA: "VA",
			VC: "VC",
			VE: "VE",
			VG: "VG",
			VN: "VN",
			VU: "VU",
			WF: "WF",
			WS: "WS",
			YE: "YE",
			YT: "YT",
			ZA: "ZA",
			ZM: "ZM",
			ZW: "ZW"
		},
		bn = {
			AR: "ar",
			CS: "cs",
			DA: "da",
			DE: "de",
			EL: "el",
			EN: "en",
			ES: "es",
			FI: "fi",
			FR: "fr",
			HE: "he",
			HU: "hu",
			ID: "id",
			IT: "it",
			JA: "ja",
			KO: "ko",
			NL: "nl",
			NO: "no",
			PL: "pl",
			PT: "pt",
			RU: "ru",
			SK: "sk",
			SV: "sv",
			TH: "th",
			TR: "tr",
			ZH: "zh"
		},
		Ln = ((mn = {})[On.AD] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AE] = [bn.EN, bn.FR, bn.ES, bn.ZH, bn.AR], mn[On.AG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AI] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AL] = [bn.EN], mn[On.AM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AN] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AO] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AR] = [bn.ES, bn.EN], mn[On.AT] = [bn.DE, bn.EN], mn[On.AU] = [bn.EN], mn[On.AW] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.AZ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.BA] = [bn.EN], mn[On.BB] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.BE] = [bn.EN, bn.NL, bn.FR], mn[On.BF] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.BG] = [bn.EN], mn[On.BH] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.BI] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.BJ] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.BM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.BN] = [bn.EN], mn[On.BO] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.BR] = [bn.PT, bn.EN], mn[On.BS] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.BT] = [bn.EN], mn[On.BW] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.BY] = [bn.EN], mn[On.BZ] = [bn.EN, bn.ES, bn.FR, bn.ZH], mn[On.CA] = [bn.EN, bn.FR], mn[On.CD] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.CG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.CH] = [bn.DE, bn.FR, bn.EN], mn[On.CI] = [bn.FR, bn.EN], mn[On.CK] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.CL] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.CM] = [bn.FR, bn.EN], mn[On.CN] = [bn.ZH], mn[On.CO] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.CR] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.CV] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.CY] = [bn.EN], mn[On.CZ] = [bn.CS, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.DE] = [bn.DE, bn.EN], mn[On.DJ] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.DK] = [bn.DA, bn.EN], mn[On.DM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.DO] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.DZ] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.EC] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.EE] = [bn.EN, bn.RU, bn.FR, bn.ES, bn.ZH], mn[On.EG] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ER] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ES] = [bn.ES, bn.EN], mn[On.ET] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.FI] = [bn.FI, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.FJ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.FK] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.FM] = [bn.EN], mn[On.FO] = [bn.DA, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.FR] = [bn.FR, bn.EN], mn[On.GA] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.GB] = [bn.EN], mn[On.GD] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GE] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GF] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GI] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GL] = [bn.DA, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GN] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.GP] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GR] = [bn.EL, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GT] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.GW] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.GY] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.HK] = [bn.EN, bn.ZH], mn[On.HN] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.HR] = [bn.EN], mn[On.HU] = [bn.HU, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ID] = [bn.ID, bn.EN], mn[On.IE] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.IL] = [bn.HE, bn.EN], mn[On.IN] = [bn.EN], mn[On.IS] = [bn.EN], mn[On.IT] = [bn.IT, bn.EN], mn[On.JM] = [bn.EN, bn.ES, bn.FR, bn.ZH], mn[On.JO] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.JP] = [bn.JA, bn.EN], mn[On.KE] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.KG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.KH] = [bn.EN], mn[On.KI] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.KM] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.KN] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.KR] = [bn.KO, bn.EN], mn[On.KW] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.KY] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.KZ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.LA] = [bn.EN], mn[On.LC] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.LI] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.LK] = [bn.EN], mn[On.LS] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.LT] = [bn.EN, bn.RU, bn.FR, bn.ES, bn.ZH], mn[On.LU] = [bn.EN, bn.DE, bn.FR, bn.ES, bn.ZH], mn[On.LV] = [bn.EN, bn.RU, bn.FR, bn.ES, bn.ZH], mn[On.MA] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MC] = [bn.FR, bn.EN], mn[On.MD] = [bn.EN], mn[On.ME] = [bn.EN], mn[On.MG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MH] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MK] = [bn.EN], mn[On.ML] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.MN] = [bn.EN], mn[On.MQ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MR] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MS] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MT] = [bn.EN], mn[On.MU] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MV] = [bn.EN], mn[On.MW] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.MX] = [bn.ES, bn.EN], mn[On.MY] = [bn.EN], mn[On.MZ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.NA] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.NC] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.NE] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.NF] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.NG] = [bn.EN], mn[On.NI] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.NL] = [bn.NL, bn.EN], mn[On.NO] = [bn.NO, bn.EN], mn[On.NP] = [bn.EN], mn[On.NR] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.NU] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.NZ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.OM] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.PA] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.PE] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.PF] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.PG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.PH] = [bn.EN], mn[On.PL] = [bn.PL, bn.EN], mn[On.PM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.PN] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.PT] = [bn.PT, bn.EN], mn[On.PW] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.PY] = [bn.ES, bn.EN], mn[On.QA] = [bn.EN, bn.FR, bn.ES, bn.ZH, bn.AR], mn[On.RE] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.RO] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.RS] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.RU] = [bn.RU, bn.EN], mn[On.RW] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.SA] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SB] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SC] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.SE] = [bn.SV, bn.EN], mn[On.SG] = [bn.EN], mn[On.SH] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SI] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SJ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SK] = [bn.SK, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SL] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SN] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.SO] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SR] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ST] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.SV] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.SZ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TC] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TD] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.TG] = [bn.FR, bn.EN, bn.ES, bn.ZH], mn[On.TH] = [bn.TH, bn.EN], mn[On.TJ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TN] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TO] = [bn.EN], mn[On.TR] = [bn.TR, bn.EN], mn[On.TT] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TV] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.TW] = [bn.ZH, bn.EN], mn[On.TZ] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.UA] = [bn.EN, bn.RU, bn.FR, bn.ES, bn.ZH], mn[On.UG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.US] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.UY] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.VA] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.VC] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.VE] = [bn.ES, bn.EN, bn.FR, bn.ZH], mn[On.VG] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.VN] = [bn.EN], mn[On.VU] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.WF] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.WS] = [bn.EN], mn[On.YE] = [bn.AR, bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.YT] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ZA] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ZM] = [bn.EN, bn.FR, bn.ES, bn.ZH], mn[On.ZW] = [bn.EN], mn),
		An = {
			CLIENT_TOKEN: "data-client-token",
			PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
			STAGE_HOST: "data-stage-host",
			API_STAGE_HOST: "data-api-stage-host",
			CSP_NONCE: "data-csp-nonce"
		},
		Rn = {
			COMPONENTS: "components",
			ENV: "env",
			DEBUG: "debug",
			CACHEBUST: "cachebust",
			CLIENT_ID: "client-id",
			MERCHANT_ID: "merchant-id",
			LOCALE: "locale",
			CURRENCY: "currency",
			INTENT: "intent",
			COMMIT: "commit",
			VAULT: "vault",
			BUYER_COUNTRY: "buyer-country",
			DISABLE_FUNDING: "disable-funding",
			DISABLE_CARD: "disable-card",
			LOCALE_COUNTRY: "locale-country",
			LOCALE_LANG: "locale-lang",
			FRAMEWORK: "framework",
			INTEGRATION_DATE: "integration-date",
			ORDER_CURRENCY: "order-currency",
			ORDER_INTENT: "order-intent",
			ORDER_COMMIT: "order-commit",
			ORDER_VAULT: "order-vault"
		},
		Sn = {
			TRUE: "true",
			FALSE: "false"
		},
		Dn = "unknown",
		xn = {
			LOCAL: "local",
			STAGE: "stage",
			SANDBOX: "sandbox",
			PRODUCTION: "production",
			TEST: "test"
		},
		Pn = {
			FEED: "feed_name",
			STATE: "state_name",
			TRANSITION: "transition_name",
			BUTTON_TYPE: "button_type",
			SESSION_UID: "page_session_id",
			BUTTON_SESSION_UID: "button_session_id",
			TOKEN: "token",
			CONTEXT_ID: "context_id",
			CONTEXT_TYPE: "context_type",
			REFERER: "referer_url",
			PAY_ID: "pay_id",
			SELLER_ID: "seller_id",
			CLIENT_ID: "client_id",
			DATA_SOURCE: "serverside_data_source",
			BUTTON_SOURCE: "button_source",
			ERROR_CODE: "ext_error_code",
			ERROR_DESC: "ext_error_desc",
			PAGE_LOAD_TIME: "page_load_time",
			EXPERIMENT_NAME: "pxp_exp_id",
			TREATMENT_NAME: "pxp_trtmnt_id",
			TRANSITION_TIME: "transition_time",
			FUNDING_LIST: "eligible_payment_methods",
			FUNDING_COUNT: "eligible_payment_count",
			CHOSEN_FUNDING: "selected_payment_method",
			BUTTON_LAYOUT: "button_layout",
			VERSION: "checkoutjs_version",
			LOCALE: "locale",
			BUYER_COUNTRY: "buyer_cntry",
			INTEGRATION_IDENTIFIER: "integration_identifier",
			PARTNER_ATTRIBUTION_ID: "bn_code",
			SDK_NAME: "sdk_name",
			SDK_VERSION: "sdk_version",
			USER_AGENT: "user_agent",
			USER_ACTION: "user_action",
			CONTEXT_CORRID: "context_correlation_id"
		},
		Fn = {
			COMMIT: "commit",
			CONTINUE: "continue"
		},
		Mn = {
			PAYMENTS_SDK: "checkout"
		},
		Un = {
			PAYMENTS_SDK: "payments_sdk"
		},
		Hn = {
			PAYMENTS_SDK: "payments_sdk"
		},
		kn = {
			CAPTURE: "capture",
			AUTHORIZE: "authorize",
			ORDER: "order"
		},
		Bn = {
			DESKTOP: "desktop",
			MOBILE: "mobile"
		},
		jn = {
			PAYPAL: "paypal",
			VENMO: "venmo",
			CREDIT: "credit",
			CARD: "card",
			IDEAL: "ideal",
			SEPA: "sepa",
			BANCONTACT: "bancontact",
			GIROPAY: "giropay",
			SOFORT: "sofort",
			EPS: "eps",
			MYBANK: "mybank",
			P24: "p24",
			ZIMPLER: "zimpler",
			WECHATPAY: "wechatpay"
		},
		Wn = "USD",
		zn = kn.CAPTURE,
		Zn = !0,
		Vn = !0,
		Gn = !1;

	function Yn() {
		return "production"
	}
	var Kn = {
		sb: "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R"
	};

	function qn() {
		return he(qn, function() {
			var e = "www.paypal.com",
				n = Ze({
					host: e,
					path: "/sdk/js"
				});
			if (!n) throw new Error('PayPal Payments SDK script not present on page! Excected to find <script src="https://' + e + '/sdk/js">');
			return n
		})
	}

	function Jn() {
		return he(Jn, function() {
			for (var e = {}, n = 0, t = qn().attributes; n < t.length; n++) {
				var r = t[n];
				0 === r.name.indexOf("data-") && (e[r.name] = r.value)
			}
			return e
		})
	}

	function Xn(e, n) {
		return Jn()[e] || n
	}

	function Qn(e, n) {
		return ke(qn().src.split("?")[1] || "")[e] || n
	}

	function $n() {
		var e = qn().getAttribute("src");
		if (!e) throw new Error("Can not find src for sdk script");
		return e
	}

	function et(e, n) {
		return Qn(e, n ? n.toString() : Sn.FALSE) === Sn.TRUE
	}

	function nt() {
		var e = Qn(Rn.CLIENT_ID);
		if (!e) throw new Error("Expected " + Rn.CLIENT_ID + " parameter in sdk url");
		return Kn[e] ? Kn[e] : e
	}

	function tt() {
		return Qn(Rn.MERCHANT_ID)
	}

	function rt() {
		return Qn(Rn.INTENT, zn)
	}

	function ot() {
		return et(Rn.COMMIT, rt() === kn.CAPTURE ? Zn : Vn)
	}

	function it() {
		return et(Rn.VAULT, Gn)
	}

	function at() {
		return Qn(Rn.CURRENCY, Wn)
	}

	function st() {
		return Qn(Rn.BUYER_COUNTRY)
	}

	function ct() {
		return Xn(An.PARTNER_ATTRIBUTION_ID)
	}

	function ut() {
		return Xn(An.STAGE_HOST, "www.paypal.com")
	}

	function lt() {
		return Xn(An.API_STAGE_HOST, "msmaster.qa.paypal.com")
	}

	function dt() {
		var e = Qn(Rn.LOCALE);
		if (e) {
			var n = e.split("_");
			return {
				lang: n[0],
				country: n[1]
			}
		}
		for (var t = 0, r = Ge(); t < r.length; t++) {
			var o = r[t],
				i = o.country,
				a = o.lang;
			if (Ln.hasOwnProperty(i) && -1 !== Ln[i].indexOf(a)) return {
				country: i,
				lang: a
			}
		}
		for (var s = 0, c = Ge(); s < c.length; s++) {
			var u = c[s].country;
			if (Ln.hasOwnProperty(u)) return {
				country: u,
				lang: Ln[u][0]
			}
		}
		return {
			lang: bn.EN,
			country: On.US
		}
	}

	function pt() {
		return Xn(An.CSP_NONCE)
	}

	function ft(e) {
		var n = function(e, n) {
			if ("object" != typeof e || null === e) return e;
			var t = e[Symbol.toPrimitive];
			if (void 0 !== t) {
				var r = t.call(e, "string");
				if ("object" != typeof r) return r;
				throw new TypeError("@@toPrimitive must return a primitive value.")
			}
			return String(e)
		}(e);
		return "symbol" == typeof n ? n : String(n)
	}
	var ht = {
		LOGGER: "/xoplatform/logger/api/logger",
		AUTH: "/v1/oauth2/token",
		ORDER: "/v2/checkout/orders"
	};

	function Et() {
		return ut(), "https://www.paypal.com"
	}

	function mt() {
		return lt(), lt(), "https://cors.api.paypal.com"
	}

	function gt(e) {
		return void 0 === e && (e = ""), "" + (n = Et(), "undefined" != typeof window && void 0 !== window.location && P() === n ? Et() : mt()) + e;
		var n
	}

	function yt() {
		return Boolean(P().match(/\.paypal\.com(:\d+)?$/))
	}
	var wt = {
			DEBUG: "debug",
			INFO: "info",
			WARN: "warn",
			ERROR: "error"
		},
		vt = [wt.WARN, wt.ERROR],
		_t = [wt.ERROR, wt.WARN, wt.INFO, wt.DEBUG],
		Tt = 6e4,
		Nt = wt.WARN;

	function Ct(e) {
		return wn({
			url: e.url,
			method: e.method,
			headers: e.headers,
			json: e.json
		}).then(Ee)
	}

	function It(e, n) {
		for (var t in n) n.hasOwnProperty(t) && n[t] && (e[t] = n[t])
	}

	function Ot() {
		return En({
			name: "paypal"
		})
	}

	function bt() {
		return Ot().getSessionID()
	}

	function Lt() {
		return he(Lt, function() {
			return function(e) {
				var n = e.url,
					t = e.prefix,
					r = e.logLevel,
					o = void 0 === r ? Nt : r,
					i = e.transport,
					a = void 0 === i ? Ct : i,
					s = e.flushInterval,
					c = void 0 === s ? Tt : s,
					u = [],
					l = [],
					d = [],
					p = [],
					f = [],
					E = [];

				function m(e, n, t) {
					if (ze() && window.console && window.console.log) {
						var r = o;
						if (window.LOG_LEVEL && -1 !== _t.indexOf(window.LOG_LEVEL) && (r = window.LOG_LEVEL), !(_t.indexOf(e) > _t.indexOf(r))) {
							var i = [n];
							i.push(t), (t.error || t.warning) && i.push("\n\n", t.error || t.warning);
							try {
								window.console[e] && window.console[e].apply ? window.console[e].apply(window.console, i) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, i)
							} catch (e) {}
						}
					}
				}

				function g() {
					return N.try(function() {
						if (ze() && (u.length || l.length)) {
							for (var e = {}, t = 0; t < p.length; t++) It(e, (0, p[t])(e));
							for (var r = {}, o = 0; o < E.length; o++) It(r, (0, E[o])(r));
							var i = a({
								method: "POST",
								url: n,
								headers: r,
								json: {
									events: u,
									meta: e,
									tracking: l
								}
							});
							return u = [], l = [], i.then(Ee)
						}
					})
				}
				var y, w, v, _, T = (y = g, void 0 === w && (w = 50), function() {
					_ && clearTimeout(_);
					var e = v = v || new N;
					return _ = setTimeout(function() {
						v = null, _ = null, N.try(y).then(function(n) {
							e.resolve(n)
						}, function(n) {
							e.reject(n)
						})
					}, w), e
				});

				function C(e, n, r) {
					if (void 0 === r && (r = {}), !ze()) return O;
					t && (n = t + "_" + n);
					for (var o = h({}, Ce(r), {
							timestamp: Date.now().toString()
						}), i = 0; i < d.length; i++) It(o, (0, d[i])(o));
					return function(e, n, t) {
						u.push({
							level: e,
							event: n,
							payload: o
						}), -1 !== vt.indexOf(e) && T()
					}(e, n), m(e, n, o), O
				}

				function I(e, n) {
					return e.push(n), O
				}
				ze() && Oe(T, c);
				var O = {
					debug: function(e, n) {
						return C(wt.DEBUG, e, n)
					},
					info: function(e, n) {
						return C(wt.INFO, e, n)
					},
					warn: function(e, n) {
						return C(wt.WARN, e, n)
					},
					error: function(e, n) {
						return C(wt.ERROR, e, n)
					},
					track: function(e) {
						if (void 0 === e && (e = {}), !ze()) return O;
						for (var n = Ce(e), t = 0; t < f.length; t++) It(n, (0, f[t])(n));
						return m(wt.DEBUG, "track", n), l.push(n), O
					},
					flush: T,
					immediateFlush: g,
					addPayloadBuilder: function(e) {
						return I(d, e)
					},
					addMetaBuilder: function(e) {
						return I(p, e)
					},
					addTrackingBuilder: function(e) {
						return I(f, e)
					},
					addHeaderBuilder: function(e) {
						return I(E, e)
					},
					setTransport: function(e) {
						return a = e, O
					}
				};
				return O
			}({
				url: (void 0 === (e = ht.LOGGER) && (e = ""), "" + Et() + e)
			});
			var e
		})
	}

	function At() {
		return ue(JSON.stringify({
			url: $n(),
			stageHost: ut(),
			apiStageHost: lt()
		}))
	}
	var Rt = {
			ORDER_ID: "EC-Token"
		},
		St = {
			CREATE_ORDER: "process_create_order",
			SCRIPT_LOAD: "process_script_load",
			PXP: "process_pxp_check"
		};

	function Dt(e) {
		return he(Dt, function() {
			Lt().info("rest_api_create_access_token");
			var n = ue(e + ":");
			return wn({
				method: "post",
				url: gt(ht.AUTH),
				headers: {
					Authorization: "Basic " + n
				},
				data: {
					grant_type: "client_credentials"
				}
			}).then(function(n) {
				var t = n.body;
				if (t && "invalid_client" === t.error) throw new Error("Auth Api invalid client id: " + e + ":\n\n" + JSON.stringify(t, null, 4));
				if (!t || !t.access_token) throw new Error("Auth Api response error:\n\n" + JSON.stringify(t, null, 4));
				return t.access_token
			})
		}, [e])
	}

	function xt(e, n, t) {
		var r = (void 0 === t ? {} : t).fptiState,
			o = void 0 === r ? "" : r;
		if (Lt().info("rest_api_create_order_token"), !e) throw new Error("Client ID not passed");
		if (!n) throw new Error("Expected order details to be passed");
		var i = at(),
			a = rt(),
			s = tt();
		if ((n = h({}, n)).intent && n.intent.toLowerCase() !== a) throw new Error("Unexpected intent: " + n.intent + " passed to order.create. Please ensure you are passing /sdk/js?" + Rn.INTENT + "=" + n.intent.toLowerCase() + " in the paypal script tag.");
		return (n = h({}, n, {
			intent: a.toUpperCase()
		})).purchase_units = n.purchase_units.map(function(e) {
			if (e.amount.currency_code && e.amount.currency_code !== i) throw new Error("Unexpected currency: " + e.amount.currency_code + " passed to order.create. Please ensure you are passing /sdk/js?" + Rn.CURRENCY + "=" + e.amount.currency_code + " in the paypal script tag.");
			var n = e.payee;
			if (n) {
				if (!s) throw new Error("Pass " + Rn.MERCHANT_ID + "=XYZ in the paypal script tag. Pass " + Rn.MERCHANT_ID + "=" + Dn + " if you do not have access to the merchant id");
				if (n.merchant_id && s !== Dn && n.merchant_id !== s) throw new Error('Expected payee.merchant_id to be "' + s + '"')
			}
			return s && s !== Dn && (n = h({}, n, {
				merchant_id: s
			})), h({}, e, {
				payee: n,
				amount: h({}, e.amount, {
					currency_code: i
				})
			})
		}), n.application_context = n.application_context || {}, Dt(e).then(function(e) {
			var t = {
				Authorization: "Bearer " + e,
				"PayPal-Partner-Attribution-Id": ct()
			};
			return wn({
				method: "post",
				url: gt(ht.ORDER),
				headers: t,
				json: n
			})
		}).then(function(e) {
			var n, t = e.body;
			if (!t || !t.id) throw new Error("Order Api response error:\n\n" + JSON.stringify(t, null, 4));
			return Lt().track(((n = {})[Pn.STATE] = o, n[Pn.TRANSITION] = St.CREATE_ORDER, n[Pn.CONTEXT_TYPE] = Rt.ORDER_ID, n[Pn.TOKEN] = t.id, n[Pn.CONTEXT_ID] = t.id, n)), t.id
		})
	}
	var Pt = t(25),
		Ft = t.n(Pt),
		Mt = t(26),
		Ut = t.n(Mt),
		Ht = {
			METHOD: "postrobot_method",
			HELLO: "postrobot_hello",
			OPEN_TUNNEL: "postrobot_open_tunnel"
		},
		kt = "__postrobot_bridge__",
		Bt = "*",
		jt = {
			CROSS_DOMAIN_ZALGO_PROMISE: "cross_domain_zalgo_promise",
			CROSS_DOMAIN_FUNCTION: "cross_domain_function",
			CROSS_DOMAIN_WINDOW: "cross_domain_window"
		};

	function Wt(e) {
		return void 0 === e && (e = window), e !== window ? e.__post_robot_10_0_14__ : e.__post_robot_10_0_14__ = e.__post_robot_10_0_14__ || {}
	}
	var zt = function() {
		return {}
	};

	function Zt(e, n) {
		return void 0 === e && (e = "store"), void 0 === n && (n = zt), xe(Wt(), e, function() {
			var e = n();
			return {
				has: function(n) {
					return e.hasOwnProperty(n)
				},
				get: function(n, t) {
					return e.hasOwnProperty(n) ? e[n] : t
				},
				set: function(n, t) {
					return e[n] = t, t
				},
				del: function(n) {
					delete e[n]
				},
				getOrSet: function(n, t) {
					return xe(e, n, t)
				},
				reset: function() {
					e = n()
				},
				keys: function() {
					return Object.keys(e)
				}
			}
		})
	}
	var Vt = function() {};

	function Gt() {
		var e = Wt();
		return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new Vt, e.WINDOW_WILDCARD
	}

	function Yt(e, n) {
		return void 0 === e && (e = "store"), void 0 === n && (n = zt), Zt("windowStore").getOrSet(e, function() {
			var t = new ce,
				r = function(e) {
					return t.getOrSet(e, n)
				};
			return {
				has: function(n) {
					return r(n).hasOwnProperty(e)
				},
				get: function(n, t) {
					var o = r(n);
					return o.hasOwnProperty(e) ? o[e] : t
				},
				set: function(n, t) {
					return r(n)[e] = t, t
				},
				del: function(n) {
					delete r(n)[e]
				},
				getOrSet: function(n, t) {
					return xe(r(n), e, t)
				}
			}
		})
	}

	function Kt() {
		return Zt("instance").getOrSet("instanceID", le)
	}

	function qt(e) {
		return Yt("helloPromises").getOrSet(e, function() {
			return new N
		})
	}

	function Jt(e, n) {
		return (0, n.send)(e, Ht.HELLO, {
			instanceID: Kt()
		}, {
			domain: Bt,
			timeout: -1
		}).then(function(n) {
			var t = n.origin,
				r = n.data.instanceID;
			return qt(e).resolve({
				win: e,
				domain: t
			}), {
				win: e,
				domain: t,
				instanceID: r
			}
		})
	}

	function Xt(e, n) {
		var t = n.send;
		return Yt("windowInstanceIDPromises").getOrSet(e, function() {
			return Jt(e, {
				send: t
			}).then(function(e) {
				return e.instanceID
			})
		})
	}

	function Qt(e, n, t) {
		void 0 === n && (n = 5e3), void 0 === t && (t = "Window");
		var r = qt(e);
		return -1 !== n && (r = r.timeout(n, new Error(t + " did not load after " + n + "ms"))), r
	}

	function $t(e) {
		Yt("knownWindows").set(e, !0)
	}
	var er, nr = {
		FUNCTION: "function",
		ERROR: "error",
		PROMISE: "promise",
		REGEX: "regex",
		DATE: "date",
		ARRAY: "array",
		OBJECT: "object",
		STRING: "string",
		NUMBER: "number",
		BOOLEAN: "boolean",
		NULL: "null",
		UNDEFINED: "undefined"
	};

	function tr(e) {
		return "object" == typeof e && null !== e && "string" == typeof e.__type__
	}

	function rr(e) {
		return void 0 === e ? nr.UNDEFINED : null === e ? nr.NULL : Array.isArray(e) ? nr.ARRAY : "function" == typeof e ? nr.FUNCTION : "object" == typeof e ? e instanceof Error ? nr.ERROR : "function" == typeof e.then ? nr.PROMISE : "[object RegExp]" === {}.toString.call(e) ? nr.REGEX : "[object Date]" === {}.toString.call(e) ? nr.DATE : nr.OBJECT : "string" == typeof e ? nr.STRING : "number" == typeof e ? nr.NUMBER : "boolean" == typeof e ? nr.BOOLEAN : void 0
	}

	function or(e, n) {
		return {
			__type__: e,
			__val__: n
		}
	}
	var ir, ar = ((er = {})[nr.FUNCTION] = function() {}, er[nr.ERROR] = function(e) {
			return or(nr.ERROR, {
				message: e.message,
				stack: e.stack,
				code: e.code
			})
		}, er[nr.PROMISE] = function() {}, er[nr.REGEX] = function(e) {
			return or(nr.REGEX, e.source)
		}, er[nr.DATE] = function(e) {
			return or(nr.DATE, e.toJSON())
		}, er[nr.ARRAY] = function(e) {
			return e
		}, er[nr.OBJECT] = function(e) {
			return e
		}, er[nr.STRING] = function(e) {
			return e
		}, er[nr.NUMBER] = function(e) {
			return e
		}, er[nr.BOOLEAN] = function(e) {
			return e
		}, er[nr.NULL] = function(e) {
			return e
		}, er),
		sr = {},
		cr = ((ir = {})[nr.FUNCTION] = function() {
			throw new Error("Function serialization is not implemented; nothing to deserialize")
		}, ir[nr.ERROR] = function(e) {
			var n = e.stack,
				t = e.code,
				r = new Error(e.message);
			return r.code = t, r.stack = n + "\n\n" + r.stack, r
		}, ir[nr.PROMISE] = function() {
			throw new Error("Promise serialization is not implemented; nothing to deserialize")
		}, ir[nr.REGEX] = function(e) {
			return new RegExp(e)
		}, ir[nr.DATE] = function(e) {
			return new Date(e)
		}, ir[nr.ARRAY] = function(e) {
			return e
		}, ir[nr.OBJECT] = function(e) {
			return e
		}, ir[nr.STRING] = function(e) {
			return e
		}, ir[nr.NUMBER] = function(e) {
			return e
		}, ir[nr.BOOLEAN] = function(e) {
			return e
		}, ir[nr.NULL] = function(e) {
			return e
		}, ir),
		ur = {};

	function lr() {
		return !!V(window).match(/MSIE|trident|edge\/12|edge\/13/i)
	}

	function dr(e) {
		return !X(window, e)
	}

	function pr(e, n) {
		if (e) {
			if (P() !== $(e)) return !0
		} else if (n && !F(n)) return !0;
		return !1
	}

	function fr(e) {
		var n = e.win,
			t = e.domain;
		return !(!lr() || t && !pr(t, n) || n && !dr(n))
	}

	function hr(e) {
		var n = (e = e || $(e)).replace(/[^a-zA-Z0-9]+/g, "_");
		return kt + "_" + n
	}

	function Er() {
		return Boolean(window.name && window.name === hr(P()))
	}
	var mr = new N(function(e) {
		if (window.document && window.document.body) return e(window.document.body);
		var n = setInterval(function() {
			if (window.document && window.document.body) return clearInterval(n), e(window.document.body)
		}, 10)
	});

	function gr(e) {
		Yt("remoteWindowPromises").getOrSet(e, function() {
			return new N
		})
	}

	function yr(e) {
		var n = Yt("remoteWindowPromises").get(e);
		if (!n) throw new Error("Remote window promise not found");
		return n
	}

	function wr(e, n, t) {
		yr(e).resolve(function(r, o, i) {
			if (r !== e) throw new Error("Remote window does not match window");
			if (!Q(o, n)) throw new Error("Remote domain " + o + " does not match domain " + n);
			t.fireAndForget(i)
		})
	}

	function vr(e, n) {
		yr(e).reject(n).catch(Ee)
	}

	function _r(e) {
		for (var n = e.win, t = e.name, r = e.domain, o = Zt("popupWindowsByName"), i = Yt("popupWindowsByWin"), a = 0, s = o.keys(); a < s.length; a++) {
			var c = s[a];
			Z(o.get(c).win) && o.del(c)
		}
		var u = i.getOrSet(n, function() {
			return t ? o.getOrSet(t, function() {
				return {
					win: n,
					name: t
				}
			}) : {
				win: n
			}
		});
		if (u.win && u.win !== n) throw new Error("Different window already linked for window: " + (t || "undefined"));
		if (t) {
			if (u.name && u.name !== t) throw new Error("Different window already linked for name " + t + ": " + u.name);
			u.name = t, o.set(t, u)
		}
		return r && (u.domain = r, gr(n)), i.set(n, u), u
	}

	function Tr(e) {
		var n, t = e.on,
			r = e.send,
			o = e.receiveMessage;
		n = window.open, window.open = function(e, t, r, o) {
				var i = n.call(this, te(e), t, r, o);
				return i ? (_r({
					win: i,
					name: t,
					domain: e ? $(e) : null
				}), i) : i
			},
			function(e) {
				var n = e.on,
					t = e.send,
					r = e.receiveMessage,
					o = Zt("popupWindowsByName");
				n(Ht.OPEN_TUNNEL, function(e) {
					var i = e.source,
						a = e.origin,
						s = e.data,
						c = Zt("bridges").get(a);
					if (!c) throw new Error("Can not find bridge promise for domain " + a);
					return c.then(function(e) {
						if (i !== e) throw new Error("Message source does not matched registered bridge for domain " + a);
						if (!s.name) throw new Error("Register window expected to be passed window name");
						if (!s.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
						if (!o.has(s.name)) throw new Error("Window with name " + s.name + " does not exist, or was not opened by this window");
						if (!o.get(s.name).domain) throw new Error("We do not have a registered domain for window " + s.name);
						if (o.get(s.name).domain !== a) throw new Error("Message origin " + a + " does not matched registered window origin " + o.get(s.name).domain);
						return wr(o.get(s.name).win, a, s.sendMessage), {
							sendMessage: function(e) {
								if (window && !window.closed) {
									var i = o.get(s.name);
									if (i) try {
										r({
											data: e,
											origin: i.domain,
											source: i.win
										}, {
											on: n,
											send: t
										})
									} catch (e) {
										N.reject(e)
									}
								}
							}
						}
					})
				})
			}({
				on: t,
				send: r,
				receiveMessage: o
			}),
			function(e) {
				var n = e.send;
				Wt(window).openTunnelToParent = function(e) {
					var t = e.name,
						r = e.source,
						o = e.canary,
						i = e.sendMessage,
						a = Zt("tunnelWindows"),
						s = R(window);
					if (!s) throw new Error("No parent window found to open tunnel to");
					var c = function(e) {
						var n = e.name,
							t = e.source,
							r = e.canary,
							o = e.sendMessage;
						! function() {
							for (var e = Zt("tunnelWindows"), n = 0, t = e.keys(); n < t.length; n++) {
								var r = t[n];
								Z(e[r].source) && e.del(r)
							}
						}();
						var i = le();
						return Zt("tunnelWindows").set(i, {
							name: n,
							source: t,
							canary: r,
							sendMessage: o
						}), i
					}({
						name: t,
						source: r,
						canary: o,
						sendMessage: i
					});
					return n(s, Ht.OPEN_TUNNEL, {
						name: t,
						sendMessage: function() {
							var e = a.get(c);
							if (e && e.source && !Z(e.source)) {
								try {
									e.canary()
								} catch (e) {
									return
								}
								e.sendMessage.apply(this, arguments)
							}
						}
					}, {
						domain: Bt
					})
				}
			}({
				on: t,
				send: r
			}),
			function(e) {
				var n = e.on,
					t = e.send,
					r = e.receiveMessage;
				N.try(function() {
					var e, o = S(window);
					if (o && fr({
							win: o
						})) return gr(o), (e = o, Yt("remoteBridgeAwaiters").getOrSet(e, function() {
						return N.try(function() {
							var n = G(e, hr(P()));
							if (n) return F(n) && F(n) && Wt(n) ? n : new N(function(e) {
								var t, r;
								t = setInterval(function() {
									if (n && F(n) && Wt(n)) return clearInterval(t), clearTimeout(r), e(n)
								}, 100), r = setTimeout(function() {
									return clearInterval(t), e()
								}, 2e3)
							})
						})
					})).then(function(e) {
						return e ? window.name ? Wt(e).openTunnelToParent({
							name: window.name,
							source: window,
							canary: function() {},
							sendMessage: function(e) {
								if (window && !window.closed) try {
									r({
										data: e,
										origin: this.origin,
										source: this.source
									}, {
										on: n,
										send: t
									})
								} catch (e) {
									N.reject(e)
								}
							}
						}).then(function(e) {
							var n = e.source,
								t = e.origin,
								r = e.data;
							if (n !== o) throw new Error("Source does not match opener");
							wr(n, t, r.sendMessage)
						}).catch(function(e) {
							throw vr(o, e), e
						}) : vr(o, new Error("Can not register with opener: window does not have a name")) : vr(o, new Error("Can not register with opener: no bridge found in opener"))
					})
				})
			}({
				on: t,
				send: r,
				receiveMessage: o
			})
	}

	function Nr() {
		for (var e = Zt("idToProxyWindow"), n = 0, t = e.keys(); n < t.length; n++) {
			var r = t[n];
			e.get(r).shouldClean() && e.del(r)
		}
	}

	function Cr(e, n, t) {
		var r, o = t.send;
		return {
			id: e,
			type: S(n) ? b.POPUP : b.IFRAME,
			getInstanceID: fe(function() {
				return Xt(n, {
					send: o
				})
			}),
			close: function() {
				return N.try(function() {
					n.close()
				})
			},
			getName: function() {
				return N.try(function() {
					if (!Z(n)) return r
				})
			},
			focus: function() {
				return N.try(function() {
					n.focus()
				})
			},
			isClosed: function() {
				return N.try(function() {
					return Z(n)
				})
			},
			setLocation: function(e) {
				return N.try(function() {
					if (F(n)) try {
						if (n.location && "function" == typeof n.location.replace) return void n.location.replace(e)
					} catch (e) {}
					n.location = e
				})
			},
			setName: function(e) {
				return N.try(function() {
					_r({
						win: n,
						name: e
					}), (n = M(n)).name = e, n.frameElement && n.frameElement.setAttribute("name", e), r = e
				})
			}
		}
	}
	var Ir = function() {
		function e(e, n, t) {
			var r = t.send;
			this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.serializedWindow = e, this.actualWindowPromise = new N, this.send = r, n && this.setWindow(n)
		}
		var n = e.prototype;
		return n.getType = function() {
			return this.serializedWindow.type
		}, n.isPopup = function() {
			return this.getType() === b.POPUP
		}, n.isIframe = function() {
			return this.getType() === b.IFRAME
		}, n.setLocation = function(e) {
			var n = this;
			return this.serializedWindow.setLocation(e).then(function() {
				return n
			})
		}, n.setName = function(e) {
			var n = this;
			return this.serializedWindow.setName(e).then(function() {
				return n
			})
		}, n.close = function() {
			var e = this;
			return this.serializedWindow.close().then(function() {
				return e
			})
		}, n.focus = function() {
			var e = this;
			return N.try(function() {
				return N.all([e.isPopup() && e.serializedWindow.getName().then(function(e) {
					e && window.open("", e)
				}), e.serializedWindow.focus()])
			}).then(function() {
				return e
			})
		}, n.isClosed = function() {
			return this.serializedWindow.isClosed()
		}, n.getWindow = function() {
			return this.actualWindow
		}, n.setWindow = function(e) {
			this.actualWindow = e, this.serializedWindow = Cr(this.serializedWindow.id, e, {
				send: this.send
			}), this.actualWindowPromise.resolve(e)
		}, n.awaitWindow = function() {
			return this.actualWindowPromise
		}, n.matchWindow = function(e) {
			var n = this;
			return N.try(function() {
				return n.actualWindow ? e === n.actualWindow : N.all([n.getInstanceID(), Xt(e, {
					send: n.send
				})]).then(function(t) {
					var r = t[0] === t[1];
					return r && n.setWindow(e), r
				})
			})
		}, n.unwrap = function() {
			return this.actualWindow || this
		}, n.getInstanceID = function() {
			return this.serializedWindow.getInstanceID()
		}, n.serialize = function() {
			return this.serializedWindow
		}, n.shouldClean = function() {
			return this.actualWindow && Z(this.actualWindow)
		}, e.unwrap = function(n) {
			return e.isProxyWindow(n) ? n.unwrap() : n
		}, e.serialize = function(n, t) {
			var r = t.send;
			return Nr(), e.toProxyWindow(n, {
				send: r
			}).serialize()
		}, e.deserialize = function(n, t) {
			var r = t.on,
				o = t.send;
			return Nr(), Zt("idToProxyWindow").getOrSet(n.id, function() {
				return new e(n, null, {
					on: r,
					send: o
				})
			})
		}, e.isProxyWindow = function(e) {
			return Boolean(e && !ne(e) && e.isProxyWindow)
		}, e.toProxyWindow = function(n, t) {
			var r = t.send;
			if (Nr(), e.isProxyWindow(n)) return n;
			var o = n;
			return Yt("winToProxyWindow").getOrSet(n, function() {
				var n = le(),
					t = new e(Cr(n, o, {
						send: r
					}), o, {
						send: r
					});
				return Zt("idToProxyWindow").set(n, t)
			})
		}, e
	}();

	function Or(e, n, t, r, o) {
		var i = Yt("methodStore"),
			a = Zt("proxyWindowMethods");
		Ir.isProxyWindow(r) ? a.set(e, {
			val: n,
			name: t,
			domain: o,
			source: r
		}) : (a.del(e), i.getOrSet(r, function() {
			return {}
		})[e] = {
			domain: o,
			name: t,
			val: n,
			source: r
		})
	}

	function br(e, n) {
		var t = Yt("methodStore"),
			r = Zt("proxyWindowMethods");
		return t.getOrSet(e, function() {
			return {}
		})[n] || r.get(n)
	}

	function Lr(e, n, t, r, o) {
		! function(e) {
			var n = o.on;
			Zt("builtinListeners").getOrSet("functionCalls", function() {
				return n(Ht.METHOD, {
					domain: Bt
				}, function(e) {
					var n = e.source,
						t = e.origin,
						r = e.data,
						o = r.id,
						i = r.name,
						a = br(n, o);
					if (!a) throw new Error("Could not find method '" + r.name + "' with id: " + r.id + " in " + P(window));
					var s = a.source,
						c = a.domain,
						u = a.val;
					return N.try(function() {
						if (!Q(c, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(De(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + P(window));
						if (Ir.isProxyWindow(s)) return s.matchWindow(n).then(function(e) {
							if (!e) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + P(window))
						})
					}).then(function() {
						return u.apply({
							source: n,
							origin: t
						}, r.args)
					}, function(e) {
						return N.try(function() {
							if (u.onError) return u.onError(e)
						}).then(function() {
							throw e.stack && (e.stack = "Remote call to " + i + "()\n\n" + e.stack), e
						})
					}).then(function(e) {
						return {
							result: e,
							id: o,
							name: i
						}
					})
				})
			})
		}();
		var i = t.__id__ || le();
		e = Ir.unwrap(e);
		var a = t.__name__ || t.name || r;
		return Ir.isProxyWindow(e) ? (Or(i, t, a, e, n), e.awaitWindow().then(function(e) {
			Or(i, t, a, e, n)
		})) : Or(i, t, a, e, n), or(jt.CROSS_DOMAIN_FUNCTION, {
			id: i,
			name: a
		})
	}

	function Ar(e, n, t, r) {
		var o, i = r.on,
			a = r.send;
		return function(e, n) {
			void 0 === n && (n = sr);
			var t = JSON.stringify(e, function(e) {
				var t = this[e];
				if (tr(this)) return t;
				var r = rr(t);
				if (!r) return t;
				var o = n[r] || ar[r];
				return o ? o(t, e) : t
			});
			return void 0 === t ? nr.UNDEFINED : t
		}(t, ((o = {})[nr.PROMISE] = function(t, r) {
			return function(e, n, t, r, o) {
				return or(jt.CROSS_DOMAIN_ZALGO_PROMISE, {
					then: Lr(e, n, function(e, n) {
						return t.then(e, n)
					}, r, {
						on: o.on,
						send: o.send
					})
				})
			}(e, n, t, r, {
				on: i,
				send: a
			})
		}, o[nr.FUNCTION] = function(t, r) {
			return Lr(e, n, t, r, {
				on: i,
				send: a
			})
		}, o[nr.OBJECT] = function(e) {
			return ne(e) || Ir.isProxyWindow(e) ? or(jt.CROSS_DOMAIN_WINDOW, Ir.serialize(e, {
				send: a
			})) : e
		}, o))
	}

	function Rr(e, n, t, r) {
		var o, i = r.on,
			a = r.send;
		return function(e, n) {
			if (void 0 === n && (n = ur), e !== nr.UNDEFINED) return JSON.parse(e, function(e, t) {
				if (tr(this)) return t;
				var r, o;
				if (tr(t) ? (r = t.__type__, o = t.__val__) : (r = rr(t), o = t), !r) return o;
				var i = n[r] || cr[r];
				return i ? i(o, e) : o
			})
		}(t, ((o = {})[jt.CROSS_DOMAIN_ZALGO_PROMISE] = function(e) {
			return new N(e.then)
		}, o[jt.CROSS_DOMAIN_FUNCTION] = function(t) {
			return function(e, n, r, o) {
				var i = t.id,
					a = t.name,
					s = o.send,
					c = function(t) {
						function r() {
							var o = arguments;
							return Ir.toProxyWindow(e, {
								send: s
							}).awaitWindow().then(function(e) {
								var c = br(e, i);
								if (c && c.val !== r) return c.val.apply({
									source: window,
									origin: P()
								}, o);
								var u = {
										domain: n,
										fireAndForget: t.fireAndForget
									},
									l = [].slice.call(o);
								return s(e, Ht.METHOD, {
									id: i,
									name: a,
									args: l
								}, u).then(function(e) {
									if (!t.fireAndForget) return e.data.result
								})
							}).catch(function(e) {
								throw e
							})
						}
						return void 0 === t && (t = {}), r.__name__ = a, r.__origin__ = n, r.__source__ = e, r.__id__ = i, r.origin = n, r
					},
					u = c();
				return u.fireAndForget = c({
					fireAndForget: !0
				}), u
			}(e, n, 0, {
				on: i,
				send: a
			})
		}, o[jt.CROSS_DOMAIN_WINDOW] = function(e) {
			return Ir.deserialize(e, {
				on: (n = {
					on: i,
					send: a
				}).on,
				send: n.send
			});
			var n
		}, o))
	}
	var Sr = {};

	function Dr(e, n, t, r) {
		var o, i = r.on,
			a = r.send;
		if (Z(e)) throw new Error("Window is closed");
		for (var s = Ar(e, n, ((o = {}).__post_robot_10_0_14__ = h({
				id: le(),
				origin: P(window)
			}, t), o), {
				on: i,
				send: a
			}), c = Object.keys(Sr), u = [], l = 0; l < c.length; l++) {
			var d = c[l];
			try {
				Sr[d](e, s, n)
			} catch (e) {
				u.push(e)
			}
		}
		if (u.length === c.length) throw new Error("All post-robot messaging strategies failed:\n\n" + u.map(ge).join("\n\n"))
	}
	Sr.postrobot_post_message = function(e, n, t) {
		(Array.isArray(t) ? t : "string" == typeof t ? [t] : [Bt]).map(function(e) {
			return 0 === e.indexOf(I.FILE) ? Bt : e
		}).forEach(function(t) {
			e.postMessage(n, t)
		})
	}, Sr.postrobot_bridge = function(e, n, t) {
		if (lr() || Er()) {
			if (F(e)) throw new Error("Post message through bridge disabled between same domain windows");
			if (!1 !== X(window, e)) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
			! function(e, n, t) {
				var r = Y(window, e),
					o = Y(e, window);
				if (!r && !o) throw new Error("Can only send messages to and from parent and popup windows");
				yr(e).then(function(r) {
					return r(e, n, t)
				})
			}(e, t, n)
		}
	}, Sr.postrobot_global = function(e, n) {
		if (V(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) {
			if (!F(e)) throw new Error("Post message through global disabled between different domain windows");
			if (!1 !== X(window, e)) throw new Error("Can only use global to communicate between two different windows, not between frames");
			var t = Wt(e);
			if (!t) throw new Error("Can not find postRobot global on foreign window");
			t.receiveMessage({
				source: window,
				origin: P(),
				data: n
			})
		}
	};
	var xr, Pr = "__domain_regex__";

	function Fr(e) {
		return Zt("responseListeners").get(e)
	}

	function Mr(e) {
		Zt("responseListeners").del(e)
	}

	function Ur(e) {
		return Zt("erroredResponseListeners").has(e)
	}

	function Hr(e) {
		var n = e.name,
			t = e.win,
			r = e.domain,
			o = Yt("requestListeners");
		if (t === Bt && (t = null), r === Bt && (r = null), !n) throw new Error("Name required to get request listener");
		for (var i = 0, a = [t, Gt()]; i < a.length; i++) {
			var s = a[i];
			if (s) {
				var c = o.get(s);
				if (c) {
					var u = c[n];
					if (u) {
						if (r && "string" == typeof r) {
							if (u[r]) return u[r];
							if (u[Pr])
								for (var l = 0, d = u[Pr]; l < d.length; l++) {
									var p = d[l],
										f = p.listener;
									if (Q(p.regex, r)) return f
								}
						}
						if (u[Bt]) return u[Bt]
					}
				}
			}
		}
	}
	var kr = ((xr = {}).postrobot_message_request = function(e, n, t, r) {
		var o = r.on,
			i = r.send,
			a = Hr({
				name: t.name,
				win: e,
				domain: n
			});

		function s(r, a, s) {
			void 0 === s && (s = {}), t.fireAndForget || Z(e) || Dr(e, n, h({
				type: r,
				ack: a,
				hash: t.hash,
				name: t.name
			}, s), {
				on: o,
				send: i
			})
		}
		return N.all([s("postrobot_message_ack"), N.try(function() {
			if (!a) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
			if (!Q(a.domain, n)) throw new Error("Request origin " + n + " does not match domain " + a.domain.toString());
			return a.handler({
				source: e,
				origin: n,
				data: t.data
			})
		}).then(function(e) {
			return s("postrobot_message_response", "success", {
				data: e
			})
		}, function(e) {
			return s("postrobot_message_response", "error", {
				error: e
			})
		})]).then(Ee).catch(function(e) {
			if (a && a.handleError) return a.handleError(e);
			throw e
		})
	}, xr.postrobot_message_ack = function(e, n, t) {
		if (!Ur(t.hash)) {
			var r = Fr(t.hash);
			if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
			if (!Q(r.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + r.domain.toString());
			if (e !== r.win) throw new Error("Ack source does not match registered window");
			r.ack = !0
		}
	}, xr.postrobot_message_response = function(e, n, t) {
		if (!Ur(t.hash)) {
			var r, o = Fr(t.hash);
			if (!o) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
			if (!Q(o.domain, n)) throw new Error("Response origin " + n + " does not match domain " + (r = o.domain, Array.isArray(r) ? "(" + r.join(" | ") + ")" : C(r) ? "RegExp(" + r.toString() : r.toString()));
			if (e !== o.win) throw new Error("Response source does not match registered window");
			Mr(t.hash), "error" === t.ack ? o.promise.reject(t.error) : "success" === t.ack && o.promise.resolve({
				source: e,
				origin: n,
				data: t.data
			})
		}
	}, xr);

	function Br(e, n) {
		var t = n.on,
			r = n.send,
			o = Zt("receivedMessages");
		if (!window || window.closed) throw new Error("Message recieved in closed window");
		try {
			if (!e.source) return
		} catch (e) {
			return
		}
		var i = e.source,
			a = e.origin,
			s = function(e, n, t, r) {
				var o, i = r.on,
					a = r.send;
				try {
					o = Rr(n, t, e, {
						on: i,
						send: a
					})
				} catch (e) {
					return
				}
				if (o && "object" == typeof o && null !== o && (o = o.__post_robot_10_0_14__) && "object" == typeof o && null !== o && o.type && "string" == typeof o.type && kr[o.type]) return o
			}(e.data, i, a, {
				on: t,
				send: r
			});
		s && ($t(i), o.has(s.id) || (o.set(s.id, !0), Z(i) && !s.fireAndForget || (0 === s.origin.indexOf(I.FILE) && (a = I.FILE + "//"), kr[s.type](i, a, s, {
			on: t,
			send: r
		}))))
	}

	function jr(e, n, t) {
		if (!e) throw new Error("Expected name");
		if ("function" == typeof n && (t = n, n = {}), !t) throw new Error("Expected handler");
		(n = n || {}).name = e, n.handler = t || n.handler;
		var r = n.window,
			o = n.domain,
			i = function e(n, t) {
				var r = n.name,
					o = n.win,
					i = n.domain,
					a = Yt("requestListeners");
				if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
				if (Array.isArray(o)) {
					for (var s = [], c = 0, u = o; c < u.length; c++) s.push(e({
						name: r,
						domain: i,
						win: u[c]
					}, t));
					return {
						cancel: function() {
							for (var e = 0; e < s.length; e++) s[e].cancel()
						}
					}
				}
				if (Array.isArray(i)) {
					for (var l = [], d = 0, p = i; d < p.length; d++) l.push(e({
						name: r,
						win: o,
						domain: p[d]
					}, t));
					return {
						cancel: function() {
							for (var e = 0; e < l.length; e++) l[e].cancel()
						}
					}
				}
				var f = Hr({
					name: r,
					win: o,
					domain: i
				});
				if (o && o !== Bt || (o = Gt()), i = i || Bt, f) throw o && i ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (o === Gt() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + r + " for " + (o === Gt() ? "wildcard" : "specified") + " window") : i ? new Error("Request listener already exists for " + r + " on domain " + i.toString()) : new Error("Request listener already exists for " + r);
				var h, E, m = a.getOrSet(o, function() {
						return {}
					}),
					g = xe(m, r, function() {
						return {}
					}),
					y = i.toString();
				return De(i) ? (h = xe(g, Pr, function() {
					return []
				})).push(E = {
					regex: i,
					listener: t
				}) : g[y] = t, {
					cancel: function() {
						delete g[y], E && (h.splice(h.indexOf(E, 1)), h.length || delete g[Pr]), Object.keys(g).length || delete m[r], o && !Object.keys(m).length && a.del(o)
					}
				}
			}({
				name: e,
				win: r,
				domain: o
			}, {
				handler: n.handler,
				handleError: n.errorHandler || function(e) {
					throw e
				},
				window: r,
				domain: o || Bt,
				name: e
			});
		return {
			cancel: function() {
				i.cancel()
			}
		}
	}
	var Wr, zr = function e(n, t, r, o) {
		var i = (o = o || {}).domain || Bt,
			a = o.timeout || -1,
			s = o.timeout || 5e3,
			c = o.fireAndForget || !1;
		return N.try(function() {
			return function(e, n, t) {
					if (!e) throw new Error("Expected name");
					if (t && "string" != typeof t && !Array.isArray(t) && !De(t)) throw new TypeError("Expected domain to be a string, array, or regex");
					if (Z(n)) throw new Error("Target window is closed")
				}(t, n, i),
				function(e, n, t, r) {
					var o = r.send;
					return N.try(function() {
						return function(e, n) {
							var t = K(n);
							if (t) return t === e;
							if (n === e) return !1;
							if (B(n) === n) return !1;
							for (var r = 0, o = H(e); r < o.length; r++)
								if (o[r] === n) return !0;
							return !1
						}(window, e) ? Qt(e, t) : De(n) ? Jt(e, {
							send: o
						}) : {
							domain: n
						}
					}).then(function(e) {
						return e.domain
					})
				}(n, i, s, {
					send: e
				})
		}).then(function(o) {
			if (!Q(i, o)) throw new Error("Domain " + ye(i) + " does not match " + ye(o));
			i = o;
			var s = t === Ht.METHOD && r && "string" == typeof r.name ? r.name + "()" : t,
				u = new N,
				l = t + "_" + le();
			if (!c) {
				var d = {
					name: t,
					win: n,
					domain: i,
					promise: u
				};
				! function(e, n) {
					Zt("responseListeners").set(e, n)
				}(l, d);
				var p = Yt("requestPromises").getOrSet(n, function() {
					return []
				});
				p.push(u), u.catch(function() {
					! function(e) {
						Zt("erroredResponseListeners").set(e, !0)
					}(l), Mr(l)
				});
				var f = function(e) {
						return Yt("knownWindows").get(e, !1)
					}(n) ? 1e4 : 2e3,
					h = a,
					E = f,
					m = h,
					g = Oe(function() {
						return Z(n) ? u.reject(new Error("Window closed for " + t + " before " + (d.ack ? "response" : "ack"))) : d.cancelled ? u.reject(new Error("Response listener was cancelled for " + t)) : (E = Math.max(E - 500, 0), -1 !== m && (m = Math.max(m - 500, 0)), d.ack || 0 !== E ? 0 === m ? u.reject(new Error("No response for postMessage " + s + " in " + P() + " in " + h + "ms")) : void 0 : u.reject(new Error("No ack for postMessage " + s + " in " + P() + " in " + f + "ms")))
					}, 500);
				u.finally(function() {
					g.cancel(), p.splice(p.indexOf(u, 1))
				}).catch(Ee)
			}
			return Dr(n, i, {
				type: "postrobot_message_request",
				hash: l,
				name: t,
				data: r,
				fireAndForget: c
			}, {
				on: jr,
				send: e
			}), c ? u.resolve() : u
		})
	};

	function Zr(e, n, t) {
		return Ar(e, n, t, {
			on: jr,
			send: zr
		})
	}

	function Vr(e, n, t) {
		return Rr(e, n, t, {
			on: jr,
			send: zr
		})
	}

	function Gr(e) {
		return Ir.toProxyWindow(e, {
			send: zr
		})
	}

	function Yr() {
		var e, n, t, r;
		Wt().initialized || (Wt().initialized = !0, n = (e = {
			on: jr,
			send: zr
		}).on, t = e.send, (r = Wt()).receiveMessage = r.receiveMessage || function(e) {
			return Br(e, {
				on: n,
				send: t
			})
		}, function(e) {
			var n = e.on,
				t = e.send;
			Zt().getOrSet("postMessageListener", function() {
				return on(window, "message", function(e) {
					! function(e, n) {
						var t = n.on,
							r = n.send,
							o = e.source || e.sourceElement,
							i = e.origin || e.originalEvent && e.originalEvent.origin,
							a = e.data;
						if ("null" === i && (i = I.FILE + "//"), o) {
							if (!i) throw new Error("Post message did not have origin domain");
							Br({
								source: o,
								origin: i,
								data: a
							}, {
								on: t,
								send: r
							})
						}
					}(e, {
						on: n,
						send: t
					})
				})
			})
		}({
			on: jr,
			send: zr
		}), Tr({
			on: jr,
			send: zr,
			receiveMessage: Br
		}), function(e) {
			var n = e.on,
				t = e.send;
			Zt("builtinListeners").getOrSet("helloListener", function() {
				var e = n(Ht.HELLO, {
						domain: Bt
					}, function(e) {
						var n = e.source,
							t = e.origin;
						return qt(n).resolve({
							win: n,
							domain: t
						}), {
							instanceID: Kt()
						}
					}),
					r = K();
				return r && Jt(r, {
					send: t
				}).catch(Ee), e
			})
		}({
			on: jr,
			send: zr
		}))
	}

	function Kr(e) {
		for (var n = 0, t = Yt("requestPromises").get(e, []); n < t.length; n++) t[n].reject(new Error("Window cleaned up before response")).catch(Ee)
	}

	function qr(e) {
		if (void 0 === e && (e = window), !F(e)) throw new Error("Can not get global for window on different domain");
		return e.__zoid_9_0_22__ || (e.__zoid_9_0_22__ = {}), e.__zoid_9_0_22__
	}

	function Jr(e) {
		return {
			get: function() {
				var n = this;
				return N.try(function() {
					if (n.source && n.source !== window) throw new Error("Can not call get on proxy object from a remote window");
					return e
				})
			}
		}
	}
	Wr = {
		setupBridge: Tr,
		openBridge: function(e, n) {
			var t = Zt("bridges"),
				r = Zt("bridgeFrames");
			return n = n || $(e), t.getOrSet(n, function() {
				return N.try(function() {
					if (P() === n) throw new Error("Can not open bridge on the same domain as current domain: " + n);
					var t = hr(n);
					if (G(window, t)) throw new Error("Frame with name " + t + " already exists on page");
					var o = function(e, n) {
						var t = document.createElement("iframe");
						return t.setAttribute("name", e), t.setAttribute("id", e), t.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;"), t.setAttribute("frameborder", "0"), t.setAttribute("border", "0"), t.setAttribute("scrolling", "no"), t.setAttribute("allowTransparency", "true"), t.setAttribute("tabindex", "-1"), t.setAttribute("hidden", "true"), t.setAttribute("title", ""), t.setAttribute("role", "presentation"), t.src = n, t
					}(t, e);
					return r.set(n, o), mr.then(function(n) {
						n.appendChild(o);
						var t = o.contentWindow;
						return new N(function(e, n) {
							o.addEventListener("load", e), o.addEventListener("error", n)
						}).then(function() {
							return Qt(t, 5e3, "Bridge " + e)
						}).then(function() {
							return t
						})
					})
				})
			})
		},
		linkWindow: _r,
		linkUrl: function(e, n) {
			_r({
				win: e,
				domain: $(n)
			})
		},
		isBridge: Er,
		needsBridge: fr,
		needsBridgeForBrowser: lr,
		hasBridge: function(e, n) {
			return Zt("bridges").has(n || $(e))
		},
		needsBridgeForWin: dr,
		needsBridgeForDomain: pr,
		destroyBridges: function() {
			for (var e = Zt("bridges"), n = Zt("bridgeFrames"), t = 0, r = n.keys(); t < r.length; t++) {
				var o = n.get(r[t]);
				o && o.parentNode && o.parentNode.removeChild(o)
			}
			n.reset(), e.reset()
		}
	}, Yr();
	var Xr = "zoid",
		Qr = Xr + "_delegate",
		$r = Xr + "_allow_delegate",
		eo = {
			STRING: "string",
			OBJECT: "object",
			FUNCTION: "function",
			BOOLEAN: "boolean",
			NUMBER: "number",
			ARRAY: "array"
		},
		no = "json",
		to = "dotify",
		ro = "base64",
		oo = b,
		io = "*",
		ao = {
			WIDTH: "300px",
			HEIGHT: "150px"
		},
		so = {
			RENDER: "zoid-render",
			RENDERED: "zoid-rendered",
			DISPLAY: "zoid-display",
			ERROR: "zoid-error",
			CLOSE: "zoid-close",
			PROPS: "zoid-props",
			RESIZE: "zoid-resize"
		};

	function co(e, n, t, r, o) {
		var i = e.getPropDefinition(t);
		return i && "function" == typeof i.childDecorate ? i.childDecorate(h({
			value: r
		}, o)) : r
	}

	function uo(e) {
		return he(uo, function() {
			if (!e) throw new Error("No window name");
			var n = e.split("__"),
				t = n[1],
				r = n[2],
				o = n[3];
			if (t !== Xr) throw new Error("Window not rendered by zoid - got " + t);
			if (!r) throw new Error("Expected component name");
			if (!o) throw new Error("Expected encoded payload");
			try {
				return JSON.parse(function(e) {
					if ("undefined" != typeof window && "function" == typeof window.atob) return window.atob(e);
					if ("undefined" != typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
					throw new Error("Can not find window.atob or Buffer")
				}(o))
			} catch (e) {
				throw new Error("Can not decode window name payload: " + o + ": " + ge(e))
			}
		}, [e])
	}

	function lo() {
		try {
			return uo(window.name)
		} catch (e) {}
	}
	var po = function() {
			function e(e) {
				var n = this;
				this.component = void 0, this.props = void 0, this.context = void 0, this.parent = void 0, this.parentDomain = void 0, this.parentComponentWindow = void 0, this.onPropHandlers = void 0, this.autoResize = void 0, N.try(function() {
					n.component = e, n.onPropHandlers = [];
					var t = lo();
					if (!t) throw new Error("No child payload found");
					if ("9_0_22" !== t.version) throw new Error("Parent window has zoid version " + t.version + ", child window has version 9_0_22");
					var r = t.parent,
						o = t.domain,
						i = t.exports,
						a = t.props;
					n.context = t.context, n.parentComponentWindow = n.getParentComponentWindow(r), n.parentDomain = o, n.parent = Vr(n.parentComponentWindow, o, i), n.checkParentDomain(o);
					var s = n.getPropsByRef(n.parentComponentWindow, o, a);
					return n.setProps(s, o), $t(n.parentComponentWindow), n.watchForClose(), n.parent.init(n.buildExports())
				}).then(function() {
					return n.watchForResize()
				}).catch(function(e) {
					n.onError(e)
				})
			}
			var n = e.prototype;
			return n.getHelpers = function() {
				var e = this;
				return {
					focus: function() {
						return e.focus()
					},
					close: function() {
						return e.close()
					},
					resize: function(n) {
						return e.resize({
							width: n.width,
							height: n.height
						})
					},
					onError: function(n) {
						return e.onError(n)
					},
					onProps: function(n) {
						return e.onProps(n)
					},
					getParent: function() {
						return e.parentComponentWindow
					},
					getParentDomain: function() {
						return e.parentDomain
					}
				}
			}, n.checkParentDomain = function(e) {
				if (!Q(this.component.allowedParentDomains, e)) throw new Error("Can not be rendered by domain: " + e)
			}, n.onProps = function(e) {
				this.onPropHandlers.push(e)
			}, n.getPropsByRef = function(e, n, t) {
				var r, o = t.type,
					i = t.uid;
				if ("raw" === o) r = t.value;
				else if ("uid" === o) {
					if (!F(e)) throw new Error("Parent component window is on a different domain - expected " + P() + " - can not retrieve props");
					var a = qr(e);
					r = Fe("props", a && a.props[i])
				}
				if (!r) throw new Error("Could not find props");
				return Vr(e, n, r)
			}, n.getParentComponentWindow = function(e) {
				var n, t, r = e.type;
				if ("opener" === r) return Fe("opener", S(window));
				if ("parent" === r) return Fe("parent", (n = window, void 0 === (t = e.distance) && (t = 1), function(e, n) {
					void 0 === n && (n = 1);
					for (var t = e, r = 0; r < n; r++) {
						if (!t) return;
						t = R(t)
					}
					return t
				}(n, J(n) - t)));
				if ("global" === r) {
					var o = e.uid,
						i = K(window);
					if (!i) throw new Error("Can not find ancestor window");
					for (var a = 0, s = j(i); a < s.length; a++) {
						var c = s[a];
						if (F(c)) {
							var u = qr(c);
							if (u && u.windows && u.windows[o]) return u.windows[o]
						}
					}
				}
				throw new Error("Unable to find " + r + " parent component window")
			}, n.getProps = function() {
				return this.props = this.props || {}, this.props
			}, n.setProps = function(e, n, t) {
				void 0 === t && (t = !1);
				var r = this.getHelpers(),
					o = this.getProps();
				we(o, function(e, n, t, r, o, i) {
					void 0 === i && (i = !1);
					for (var a = {}, s = 0, c = Object.keys(t); s < c.length; s++) {
						var u = c[s],
							l = n.getPropDefinition(u);
						if (!l || !l.sameDomain || r === P(window) && F(e)) {
							var d = co(n, 0, u, t[u], o);
							a[u] = d, l && l.alias && !a[l.alias] && (a[l.alias] = d)
						}
					}
					if (!i)
						for (var p = 0, f = n.getPropNames(); p < f.length; p++) {
							var h = f[p];
							t.hasOwnProperty(h) || (a[h] = co(n, 0, h, t[h], o))
						}
					return a
				}(this.parentComponentWindow, this.component, e, n, r, t));
				for (var i = 0, a = this.onPropHandlers; i < a.length; i++) a[i].call(this, o)
			}, n.watchForClose = function() {
				var e = this;
				window.addEventListener("beforeunload", function() {
					e.parent.checkClose.fireAndForget()
				}), window.addEventListener("unload", function() {
					e.parent.checkClose.fireAndForget()
				}), ee(this.parentComponentWindow, function() {
					e.destroy()
				})
			}, n.getAutoResize = function() {
				var e = this.autoResize || this.component.autoResize || {},
					n = e.width,
					t = e.height,
					r = e.element,
					o = void 0 === r ? "body" : r;
				return {
					width: void 0 !== n && n,
					height: void 0 !== t && t,
					element: o = qe(o)
				}
			}, n.watchForResize = function() {
				var e = this;
				return He().then(function() {
					if (document.body) return document.body;
					throw new Error("Document ready but document.body not present")
				}).then(function() {
					var n = e.getAutoResize(),
						t = n.width,
						r = n.height,
						o = n.element;
					o && (t || r) && e.context !== oo.POPUP && fn(o, function(n) {
						e.resize({
							width: t ? n.width : void 0,
							height: r ? n.height : void 0
						})
					}, {
						width: t,
						height: r
					})
				})
			}, n.buildExports = function() {
				var e = this;
				return {
					updateProps: function(n) {
						var t = this;
						return N.try(function() {
							return e.setProps(n, t.__origin__, !0)
						})
					},
					close: function() {
						return N.try(function() {
							return e.destroy()
						})
					}
				}
			}, n.resize = function(e) {
				return this.parent.resize.fireAndForget({
					width: e.width,
					height: e.height
				})
			}, n.close = function() {
				return this.parent.close()
			}, n.destroy = function() {
				return N.try(function() {
					window.close()
				})
			}, n.focus = function() {
				return N.try(function() {
					window.focus()
				})
			}, n.onError = function(e) {
				var n = this;
				return N.try(function() {
					if (n.parent && n.parent.onError) return n.parent.onError(e);
					throw e
				})
			}, e
		}(),
		fo = {};

	function ho(e, n, t) {
		return N.try(function() {
			return "function" == typeof e.queryParam ? e.queryParam({
				value: t
			}) : "string" == typeof e.queryParam ? e.queryParam : n
		})
	}

	function Eo(e, n, t) {
		return N.try(function() {
			return "function" == typeof e.queryValue && Se(t) ? e.queryValue({
				value: t
			}) : t
		})
	}
	fo[oo.IFRAME] = {
		openOnClick: !1,
		openFrame: function() {
			return Jr(rn({
				attributes: h({
					title: this.component.name
				}, this.component.attributes.iframe)
			}))
		},
		open: function(e) {
			var n = this;
			if (!e) throw new Error("Expected proxy frame to be passed");
			return e.get().then(function(e) {
				return tn(e).then(function(t) {
					var r, o, i, a = (r = e, o = me(o = function() {
						return n.close()
					}), pn(r) ? o() : i = Oe(function() {
						pn(r) && (i.cancel(), o())
					}, 50), {
						cancel: function() {
							i && i.cancel()
						}
					});
					return n.clean.register(function() {
						return a.cancel()
					}), n.clean.register(function() {
						return dn(e)
					}), n.clean.register(function() {
						return Kr(t)
					}), Gr(t)
				})
			})
		},
		openPrerenderFrame: function() {
			return Jr(rn({
				attributes: h({
					name: "__zoid_prerender_frame__" + this.component.name + "_" + le() + "__",
					title: "prerender__" + this.component.name
				}, this.component.attributes.iframe)
			}))
		},
		openPrerender: function(e, n) {
			var t = this;
			if (!n) throw new Error("Expected proxy frame to be passed");
			return n.get().then(function(e) {
				return t.clean.register(function() {
					return dn(e)
				}), tn(e).then(function(e) {
					return M(e)
				}).then(function(e) {
					return Gr(e)
				})
			})
		},
		delegate: ["getProxyContainer", "renderContainer", "openFrame", "openPrerenderFrame", "prerender", "open", "openPrerender"]
	}, fo[oo.POPUP] = {
		openOnClick: !0,
		open: function() {
			var e = this;
			return N.try(function() {
				var n = e.component.dimensions,
					t = n.width,
					r = n.height,
					o = $e("", h({
						width: t = In(t, window.outerWidth),
						height: r = In(r, window.outerWidth)
					}, e.component.attributes.popup));
				return e.clean.register(function() {
					o.close(), Kr(o)
				}), Gr(o)
			})
		},
		openPrerender: function(e) {
			return N.try(function() {
				return e
			})
		},
		delegate: ["getProxyContainer", "renderContainer", "setProxyWin"]
	};
	var mo = function() {
			function e(e, n) {
				var t = this;
				this.component = void 0, this.driver = void 0, this.clean = void 0, this.event = void 0, this.initPromise = void 0, this.handledErrors = void 0, this.props = void 0, this.state = void 0, this.child = void 0, this.proxyWin = void 0, this.initPromise = new N, this.handledErrors = [], this.props = {}, this.clean = Pe(this), this.state = {}, this.component = e, this.setupEvents(n.onError), this.setProps(n), this.component.registerActiveComponent(this), this.clean.register(function() {
					return t.component.destroyActiveComponent(t)
				}), this.watchForUnload()
			}
			var n = e.prototype;
			return n.setupEvents = function(e) {
				var n, t, r = this;
				this.event = (n = {}, t = {}, {
					on: function(e, n) {
						var r = t[e] = t[e] || [];
						r.push(n);
						var o = !1;
						return {
							cancel: function() {
								o || (o = !0, r.splice(r.indexOf(n), 1))
							}
						}
					},
					once: function(e, n) {
						var t = this.on(e, function() {
							t.cancel(), n()
						});
						return t
					},
					trigger: function(e) {
						for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
						var i = t[e],
							a = [];
						if (i)
							for (var s = function(e) {
									var n = i[e];
									a.push(N.try(function() {
										return n.apply(void 0, r)
									}))
								}, c = 0; c < i.length; c++) s(c);
						return N.all(a).then(Ee)
					},
					triggerOnce: function(e) {
						if (n[e]) return N.resolve();
						n[e] = !0;
						for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
						return this.trigger.apply(this, [e].concat(r))
					}
				}), this.event.on(so.RENDER, function() {
					return r.props.onRender()
				}), this.event.on(so.DISPLAY, function() {
					return r.props.onDisplay()
				}), this.event.on(so.RENDERED, function() {
					return r.props.onRendered()
				}), this.event.on(so.CLOSE, function() {
					return r.props.onClose()
				}), this.event.on(so.PROPS, function(e) {
					return r.props.onProps(e)
				}), this.event.on(so.ERROR, function(n) {
					return r.props && r.props.onError ? r.props.onError(n) : e ? e(n) : r.initPromise.reject(n).then(function() {
						setTimeout(function() {
							throw n
						}, 1)
					})
				})
			}, n.render = function(e, n, t) {
				var r = this;
				return N.try(function() {
					r.component.log("render"), r.driver = fo[t];
					var o = Xr + "-" + r.component.tag + "-" + le(),
						i = r.getDomain(),
						a = r.getInitialDomain();
					r.component.checkAllowRender(e, i, n), e !== window && r.delegate(t, e);
					var s = {};
					return s.init = r.initPromise, s.buildUrl = r.buildUrl(), s.onRender = r.event.trigger(so.RENDER), s.getProxyContainer = r.getProxyContainer(n), s.openFrame = r.openFrame(), s.openPrerenderFrame = r.openPrerenderFrame(), s.renderContainer = N.all([s.getProxyContainer, s.openFrame, s.openPrerenderFrame]).then(function(e) {
						return r.renderContainer(e[0], {
							context: t,
							uid: o,
							proxyFrame: e[1],
							proxyPrerenderFrame: e[2]
						})
					}), s.open = r.driver.openOnClick ? r.open() : s.openFrame.then(function(e) {
						return r.open(e)
					}), s.openPrerender = N.all([s.open, s.openPrerenderFrame]).then(function(e) {
						return r.openPrerender(e[0], e[1])
					}), s.setState = N.all([s.open.then(function(e) {
						return r.proxyWin = e, r.setProxyWin(e)
					})]), s.prerender = N.all([s.openPrerender, s.setState]).then(function(e) {
						return r.prerender(e[0], {
							context: t,
							uid: o
						})
					}), s.loadUrl = N.all([s.open, s.buildUrl, s.setWindowName, s.prerender]).then(function(e) {
						return e[0].setLocation(e[1])
					}), s.buildWindowName = s.open.then(function(n) {
						return r.buildWindowName({
							proxyWin: n,
							initialDomain: a,
							domain: i,
							target: e,
							context: t,
							uid: o
						})
					}), s.setWindowName = N.all([s.open, s.buildWindowName]).then(function(e) {
						return e[0].setName(e[1])
					}), s.watchForClose = s.open.then(function(e) {
						r.watchForClose(e)
					}), s.onDisplay = N.all([s.renderContainer, s.prerender]).then(function() {
						return r.event.trigger(so.DISPLAY)
					}), s.openBridge = s.open.then(function(e) {
						return r.openBridge(e, a, t)
					}), s.runTimeout = s.loadUrl.then(function() {
						return r.runTimeout()
					}), s.onRender = s.init.then(function() {
						return r.event.trigger(so.RENDERED)
					}), N.hash(s)
				}).catch(function(e) {
					return N.all([r.onError(e), r.destroy(e)]).then(function() {
						throw e
					})
				}).then(Ee)
			}, n.getProxyContainer = function(e) {
				return N.try(function() {
					return Xe(e)
				}).then(function(e) {
					return Jr(e)
				})
			}, n.buildWindowName = function(e) {
				var n = this.buildChildPayload({
					proxyWin: e.proxyWin,
					initialDomain: e.initialDomain,
					domain: e.domain,
					target: e.target,
					context: e.context,
					uid: e.uid
				});
				return "__" + Xr + "__" + this.component.name + "__" + ue(JSON.stringify(n)) + "__"
			}, n.getPropsRef = function(e, n, t, r) {
				var o = Zr(e, t, this.getPropsForChild(t)),
					i = n === P() ? {
						type: "uid",
						uid: r
					} : {
						type: "raw",
						value: o
					};
				if ("uid" === i.type) {
					var a = qr(window);
					a.props = a.props || {}, a.props[r] = o, this.clean.register(function() {
						delete a.props[r]
					})
				}
				return i
			}, n.buildChildPayload = function(e) {
				var n = void 0 === e ? {} : e,
					t = n.proxyWin,
					r = n.initialDomain,
					o = n.domain,
					i = n.target,
					a = void 0 === i ? window : i,
					s = n.context,
					c = n.uid;
				return {
					uid: c,
					context: s,
					version: "9_0_22",
					domain: P(window),
					tag: this.component.tag,
					parent: this.getWindowRef(a, r, c, s),
					props: this.getPropsRef(t, r, o, c),
					exports: Zr(t, o, this.buildParentExports(t))
				}
			}, n.setProxyWin = function(e) {
				var n = this;
				return N.try(function() {
					n.proxyWin = e
				})
			}, n.getHelpers = function() {
				var e = this;
				return {
					state: this.state,
					event: this.event,
					close: function() {
						return e.close()
					},
					focus: function() {
						return e.focus()
					},
					resize: function(n) {
						return e.resize({
							width: n.width,
							height: n.height
						})
					},
					onError: function(n) {
						return e.onError(n)
					},
					updateProps: function(n) {
						return e.updateProps(n)
					}
				}
			}, n.setProps = function(e, n) {
				void 0 === n && (n = !1), this.component.validate && this.component.validate({
					props: e
				});
				var t = this.getHelpers();
				! function(e, n, t, r, o) {
					void 0 === o && (o = !1), we(n, t = t || {});
					for (var i = o ? [] : [].concat(e.getPropNames()), a = 0, s = Object.keys(t); a < s.length; a++) {
						var c = s[a]; - 1 === i.indexOf(c) && i.push(c)
					}
					for (var u = [], l = r.state, d = r.close, p = r.focus, f = r.onError, h = 0; h < i.length; h++) {
						var E = i[h],
							m = e.getPropDefinition(E),
							g = t[E];
						if (m) {
							var y = m.alias;
							if (y && (!Se(g) && Se(t[y]) && (g = t[y]), u.push(y)), m.value && (g = m.value({
									props: n,
									state: l,
									close: d,
									focus: p,
									onError: f
								})), !Se(g) && m.default && (g = m.default({
									props: n,
									state: l,
									close: d,
									focus: p,
									onError: f
								})), Se(g) && ("array" === m.type ? !Array.isArray(g) : typeof g !== m.type)) throw new TypeError("Prop is not of type " + m.type + ": " + E);
							n[E] = g
						}
					}
					for (var w = 0; w < u.length; w++) delete n[u[w]];
					for (var v = 0, _ = Object.keys(n); v < _.length; v++) {
						var T = _[v],
							N = e.getPropDefinition(T),
							C = n[T];
						N && (Se(C) && N.validate && N.validate({
							value: C,
							props: n
						}), Se(C) && N.decorate && (n[T] = N.decorate({
							value: C,
							props: n,
							state: l,
							close: d,
							focus: p,
							onError: f
						})))
					}
					for (var I = 0, O = e.getPropNames(); I < O.length; I++) {
						var b = O[I];
						if (!1 !== e.getPropDefinition(b).required && !Se(n[b])) throw new Error('Expected prop "' + b + '" to be defined')
					}
				}(this.component, this.props, e, t, n)
			}, n.buildUrl = function() {
				var e, n, t, r = this;
				return (e = h({}, this.component.props, this.component.builtinProps), n = this.props, t = {}, N.all(Object.keys(n).map(function(r) {
					var o = e[r];
					if (o) return N.resolve().then(function() {
						var e = n[r];
						if (e && o.queryParam) return e
					}).then(function(e) {
						if (null != e) return N.all([ho(o, r, e), Eo(o, 0, e)]).then(function(e) {
							var n, i = e[0],
								a = e[1];
							if ("boolean" == typeof a) n = a.toString();
							else if ("string" == typeof a) n = a.toString();
							else if ("object" == typeof a && null !== a) {
								if (o.serialization === no) n = JSON.stringify(a);
								else if (o.serialization === ro) n = btoa(JSON.stringify(a));
								else if (o.serialization === to || !o.serialization) {
									n = function e(n, t, r) {
										for (var o in void 0 === t && (t = ""), void 0 === r && (r = {}), t = t ? t + "." : t, n) n.hasOwnProperty(o) && null != n[o] && "function" != typeof n[o] && (n[o] && Array.isArray(n[o]) && n[o].length && n[o].every(function(e) {
											return "object" != typeof e
										}) ? r["" + t + o + "[]"] = n[o].join(",") : n[o] && "object" == typeof n[o] ? r = e(n[o], "" + t + o, r) : r["" + t + o] = n[o].toString());
										return r
									}(a, r);
									for (var s = 0, c = Object.keys(n); s < c.length; s++) {
										var u = c[s];
										t[u] = n[u]
									}
									return
								}
							} else "number" == typeof a && (n = a.toString());
							t[i] = n
						})
					})
				})).then(function() {
					return t
				})).then(function(e) {
					return function(e, n) {
						void 0 === n && (n = {});
						var t, r, o = n.query || {},
							i = n.hash || {},
							a = e.split("#");
						r = a[1];
						var s = (t = a[0]).split("?");
						t = s[0];
						var c = Be(s[1], o),
							u = Be(r, i);
						return c && (t = t + "?" + c), u && (t = t + "#" + u), t
					}(te(r.component.getUrl(r.props)), {
						query: e
					})
				})
			}, n.getDomain = function() {
				return this.component.getDomain(this.props)
			}, n.getInitialDomain = function() {
				return this.component.getInitialDomain(this.props)
			}, n.getPropsForChild = function(e) {
				for (var n = {}, t = 0, r = Object.keys(this.props); t < r.length; t++) {
					var o = r[t],
						i = this.component.getPropDefinition(o);
					i && !1 === i.sendToChild || i && i.sameDomain && !Q(e, P(window)) || (n[o] = this.props[o])
				}
				return n
			}, n.updateProps = function(e) {
				var n = this;
				return this.setProps(e, !0), this.initPromise.then(function() {
					if (n.child) return n.child.updateProps(n.getPropsForChild(n.getDomain())).catch(function(e) {
						if (n.child && n.proxyWin) return n.checkClose(n.proxyWin).then(function() {
							if (n.child) throw e
						})
					})
				})
			}, n.openFrame = function() {
				var e = this;
				return N.try(function() {
					if (e.driver.openFrame) return e.driver.openFrame.call(e)
				})
			}, n.openPrerenderFrame = function() {
				var e = this;
				return N.try(function() {
					if (e.driver.openPrerenderFrame) return e.driver.openPrerenderFrame.call(e)
				})
			}, n.open = function(e) {
				var n = this;
				return N.try(function() {
					n.component.log("open");
					var t = n.props.window;
					return t ? (n.clean.register(function() {
						return t.close()
					}), Gr(t)) : n.driver.open.call(n, e)
				}).then(function(e) {
					return n.proxyWin = e, e
				})
			}, n.openPrerender = function(e, n) {
				var t = this;
				return N.try(function() {
					return t.driver.openPrerender.call(t, e, n)
				})
			}, n.focus = function() {
				var e = this;
				return N.try(function() {
					if (e.proxyWin) return e.proxyWin.focus().then(Ee)
				})
			}, n.delegate = function(e, n) {
				var t = this;
				this.component.log("delegate");
				for (var r = {}, o = 0, i = this.component.getPropNames(); o < i.length; o++) {
					var a = i[o];
					this.component.getPropDefinition(a).allowDelegate && (r[a] = this.props[a])
				}
				for (var s = zr(n, Qr + "_" + this.component.name, {
						context: e,
						props: r,
						overrides: {
							event: this.event,
							close: function() {
								return t.close()
							},
							onError: function(e) {
								return t.onError(e)
							}
						}
					}).then(function(e) {
						var n = e.data;
						return t.clean.register(n.destroy), n.overrides
					}).catch(function(e) {
						throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + ge(e))
					}), c = function(e, n) {
						var r = n[e];
						t[r] = function() {
							var e = this,
								n = arguments;
							return s.then(function(t) {
								return t[r].apply(e, n)
							})
						}
					}, u = 0, l = this.driver.delegate; u < l.length; u++) c(u, l)
			}, n.getWindowRef = function(e, n, t, r) {
				if (n === P(window)) {
					var o = qr(window);
					return o.windows = o.windows || {}, o.windows[t] = window, this.clean.register(function() {
						delete o.windows[t]
					}), {
						type: "global",
						uid: t
					}
				}
				return r === oo.POPUP ? {
					type: "opener"
				} : {
					type: "parent",
					distance: J(window)
				}
			}, n.watchForClose = function(e) {
				var n = this,
					t = !1;
				return this.clean.register(function() {
					t = !0
				}), N.delay(2e3).then(function() {
					return e.isClosed()
				}).then(function(r) {
					return r ? (n.component.log("detect_close_child"), n.close()) : t ? void 0 : n.watchForClose(e)
				})
			}, n.watchForUnload = function() {
				var e = this,
					n = on(window, "unload", me(function() {
						e.component.log("navigate_away"), e.destroy(new Error("Window navigated away"))
					}));
				this.clean.register(n.cancel)
			}, n.runTimeout = function() {
				var e = this;
				return N.try(function() {
					var n = e.props.timeout;
					if (n) return e.initPromise.timeout(n, new Error("Loading component timed out after " + n + " milliseconds"))
				})
			}, n.initChild = function(e) {
				var n = this;
				return N.try(function() {
					n.clean.set("child", e), n.initPromise.resolve()
				})
			}, n.buildParentExports = function(e) {
				var n = this,
					t = function(e) {
						return n.onError(e)
					},
					r = function(e) {
						return n.initChild(e)
					};
				return r.onError = t, {
					init: r,
					close: function() {
						return n.close()
					},
					checkClose: function() {
						return n.checkClose(e)
					},
					resize: function(e) {
						return n.resize({
							width: e.width,
							height: e.height
						})
					},
					onError: t
				}
			}, n.resize = function(e) {
				var n = this,
					t = e.width,
					r = e.height;
				return N.try(function() {
					n.event.trigger(so.RESIZE, {
						width: t,
						height: r
					})
				})
			}, n.checkClose = function(e) {
				var n = this;
				return e.isClosed().then(function(t) {
					return t ? n.close() : N.delay(200).then(function() {
						return e.isClosed()
					}).then(function(e) {
						if (e) return n.close()
					})
				})
			}, n.close = function() {
				var e = this;
				return N.try(function() {
					return e.component.log("close"), e.event.trigger(so.CLOSE)
				}).then(function() {
					return e.child && e.child.close.fireAndForget().catch(Ee), e.destroy(new Error("Window closed"), !1)
				})
			}, n.prerender = function(e, n) {
				var t = this,
					r = n.context,
					o = n.uid;
				return N.try(function() {
					var n = t.component.prerenderTemplate;
					if (n) {
						var i = e.getWindow();
						if (i && F(i) && function(e) {
								try {
									if (!e.location.href) return !0;
									if ("about:blank" === e.location.href) return !0
								} catch (e) {}
								return !1
							}(i)) {
							var a = (i = M(i)).document,
								s = t.renderTemplate(n, {
									context: r,
									uid: o,
									doc: a
								});
							if (s) {
								if (s.ownerDocument !== a) throw new Error("Expected prerender template to have been created with document from child window");
								en(i, s);
								var c = t.component.autoResize || {},
									u = c.width,
									l = void 0 !== u && u,
									d = c.height,
									p = void 0 !== d && d,
									f = c.element,
									h = void 0 === f ? "body" : f;
								(h = qe(h, a)) && (l || p) && fn(h, function(e) {
									t.resize({
										width: l ? e.width : void 0,
										height: p ? e.height : void 0
									})
								}, {
									width: l,
									height: p,
									win: i
								})
							}
						}
					}
				})
			}, n.renderTemplate = function(e, n) {
				var t = this;
				return e.call(this, {
					container: n.container,
					context: n.context,
					uid: n.uid,
					doc: n.doc,
					frame: n.frame,
					prerenderFrame: n.prerenderFrame,
					focus: function() {
						return t.focus()
					},
					close: function() {
						return t.close()
					},
					state: this.state,
					props: this.props,
					tag: this.component.tag,
					dimensions: this.component.dimensions,
					event: this.event
				})
			}, n.renderContainer = function(e, n) {
				var t = this,
					r = n.proxyFrame,
					o = n.proxyPrerenderFrame,
					i = n.context,
					a = n.uid;
				return N.all([e.get().then(Xe), r ? r.get() : null, o ? o.get() : null]).then(function(e) {
					var n = e[0],
						r = t.renderTemplate(t.component.containerTemplate, {
							context: i,
							uid: a,
							container: n,
							frame: e[1],
							prerenderFrame: e[2],
							doc: document
						});
					if (r) return Ye(n, r), t.clean.register(function() {
						return dn(r)
					}), Jr(r)
				})
			}, n.destroy = function(e, n) {
				var t = this;
				return void 0 === n && (n = !0), N.try(function() {
					return e || (n = !1, e = new Error("Component destroyed")), t.component.log("destroy"), t.onError(e, n)
				}).then(function() {
					return t.clean.all()
				})
			}, n.onError = function(e, n) {
				var t = this;
				return void 0 === n && (n = !0), N.try(function() {
					if (-1 === t.handledErrors.indexOf(e)) return t.handledErrors.push(e), t.initPromise.asyncReject(e), n ? t.event.trigger(so.ERROR, e) : void 0
				})
			}, n.openBridge = function(e, n, t) {
				var r = this;
				return N.try(function() {
					return e.awaitWindow()
				}).then(function(e) {
					if (Wr && Wr.needsBridge({
							win: e,
							domain: n
						}) && !Wr.hasBridge(n, n)) {
						var o = r.component.getBridgeUrl();
						if (!o) throw new Error("Bridge needed to render " + t);
						var i = $(o);
						return Wr.linkUrl(e, n), Wr.openBridge(te(o), i)
					}
				})
			}, e
		}(),
		go = function() {
			function e(e, n, t) {
				var r = this;
				this.component = void 0, this.source = void 0, this.context = void 0, this.driver = void 0, this.props = void 0, this.clean = void 0, this.focus = void 0, this.resize = void 0, this.renderTemplate = void 0, this.close = void 0, this.onError = void 0, this.event = void 0, this.component = e, this.context = t.context, this.driver = fo[t.context], this.clean = Pe(this), this.focus = mo.prototype.focus, this.resize = mo.prototype.resize, this.renderTemplate = mo.prototype.renderTemplate, this.props = {};
				for (var o = 0, i = Object.keys(t.props); o < i.length; o++) {
					var a = i[o],
						s = this.component.getPropDefinition(a);
					s && s.allowDelegate && t.props[a] && (this.props[a] = t.props[a])
				}
				this.close = t.overrides.close, this.onError = t.overrides.onError, this.event = t.overrides.event, this.component.registerActiveComponent(this), this.clean.register(function() {
					return r.component.destroyActiveComponent(r)
				}), this.watchForSourceClose(n)
			}
			var n = e.prototype;
			return n.getDelegate = function() {
				var e = this;
				return {
					overrides: this.getOverrides(),
					destroy: function() {
						return e.destroy()
					}
				}
			}, n.watchForSourceClose = function(e) {
				var n = this,
					t = ee(e, function() {
						return n.destroy()
					}, 3e3);
				this.clean.register(t.cancel)
			}, n.getOverrides = function() {
				for (var e = {}, n = this, t = function(t, r) {
						var o = r[t];
						e[o] = function() {
							return mo.prototype[o].apply(n, arguments)
						}, e[o].__name__ = o
					}, r = 0, o = this.driver.delegate; r < o.length; r++) t(r, o);
				return e
			}, n.destroy = function() {
				return this.clean.all()
			}, e
		}(),
		yo = {
			register: function(e, n) {
				var t = n.React,
					r = n.ReactDOM;
				return function(n) {
					var o, i;

					function a() {
						return n.apply(this, arguments) || this
					}
					i = n, (o = a).prototype = Object.create(i.prototype), o.prototype.constructor = o, o.__proto__ = i;
					var s = a.prototype;
					return s.render = function() {
						return t.createElement("div", null)
					}, s.componentDidMount = function() {
						e.log("instantiate_react_component");
						var n = r.findDOMNode(this),
							t = e.init(we({}, this.props));
						t.render(n, oo.IFRAME), this.setState({
							parent: t
						})
					}, s.componentDidUpdate = function() {
						this.state && this.state.parent && this.state.parent.updateProps(we({}, this.props)).catch(Ee)
					}, a
				}(t.Component)
			}
		},
		wo = {
			register: function(e, n) {
				return n.component(e.tag, {
					render: function(e) {
						return e("div")
					},
					inheritAttrs: !1,
					mounted: function() {
						var n = this.$el;
						this.parent = e.init(we({}, this.$attrs)), this.parent.render(n, oo.IFRAME)
					},
					watch: {
						$attrs: {
							handler: function() {
								this.parent && this.$attrs && this.parent.updateProps(we({}, this.$attrs)).catch(Ee)
							},
							deep: !0
						}
					}
				})
			}
		},
		vo = {
			register: function(e, n) {
				return n.module(e.tag, []).directive(e.tag.replace(/-([a-z])/g, function(e) {
					return e[1].toUpperCase()
				}), function() {
					for (var n = {}, t = 0, r = e.getPropNames(); t < r.length; t++) n[r[t]] = "=";
					return n.props = "=", {
						scope: n,
						restrict: "E",
						controller: ["$scope", "$element", function(n, t) {
							e.log("instantiate_angular_component");
							var r = function() {
									return Re(n.props, function(e) {
										return "function" == typeof e ? function() {
											var t = e.apply(this, arguments);
											return function() {
												if ("$apply" !== n.$root.$$phase && "$digest" !== n.$root.$$phase) try {
													n.$apply()
												} catch (e) {}
											}(), t
										} : e
									})
								},
								o = e.init(r());
							o.render(t[0], oo.IFRAME), n.$watch(function() {
								o.updateProps(r()).catch(Ee)
							})
						}]
					}
				})
			}
		},
		_o = {
			register: function(e, n) {
				var t = n.Component,
					r = n.NgModule,
					o = n.ElementRef,
					i = n.NgZone;
				e.log("initializing angular2 component");
				var a = function(e) {
						return Re(h({}, e.internalProps, e.props), function(n) {
							return "function" == typeof n ? function() {
								var t = this,
									r = arguments;
								return e.zone.run(function() {
									return n.apply(t, r)
								})
							} : n
						})
					},
					s = t({
						selector: e.tag,
						template: "<div></div>",
						inputs: ["props"]
					}).Class({
						constructor: [o, i, function(e, n) {
							this._props = {}, this.elementRef = e, this.zone = n
						}],
						ngOnInit: function() {
							var n = this.elementRef.nativeElement;
							this.parent = e.init(a(this)), this.parent.render(n, oo.IFRAME)
						},
						ngDoCheck: function() {
							this.parent && ! function(e, n) {
								var t = {};
								for (var r in e)
									if (e.hasOwnProperty(r) && (t[r] = !0, e[r] !== n[r])) return !1;
								for (var o in n)
									if (!t[o]) return !1;
								return !0
							}(this._props, this.props) && (this._props = h({}, this.props), this.parent.updateProps(a(this)))
						}
					});
				return r({
					declarations: [s],
					exports: [s]
				}).Class({
					constructor: function() {}
				})
			}
		},
		To = {
			VISIBLE: "visible",
			INVISIBLE: "invisible"
		};

	function No(e) {
		var n = e.uid,
			t = e.frame,
			r = e.prerenderFrame,
			o = e.doc,
			i = e.props,
			a = e.event,
			s = e.dimensions,
			c = s.width,
			u = s.height;
		if (t && r) {
			var l = o.createElement("div");
			l.setAttribute("id", n);
			var d = o.createElement("style");
			return i.cspNonce && d.setAttribute("nonce", i.cspNonce), d.appendChild(o.createTextNode("\n            #" + n + " {\n                display: inline-block;\n                position: relative;\n                width: " + c + ";\n                height: " + u + ";\n            }\n\n            #" + n + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + n + " > iframe." + To.INVISIBLE + " {\n                opacity: 0;\n            }\n\n            #" + n + " > iframe." + To.VISIBLE + " {\n                opacity: 1;\n        }\n        ")), l.appendChild(t), l.appendChild(r), l.appendChild(d), r.classList.add(To.VISIBLE), t.classList.add(To.INVISIBLE), a.on(so.RENDERED, function() {
				r.classList.remove(To.VISIBLE), r.classList.add(To.INVISIBLE), t.classList.remove(To.INVISIBLE), t.classList.add(To.VISIBLE), setTimeout(function() {
					dn(r)
				}, 1)
			}), a.on(so.RESIZE, function(e) {
				var n = e.width,
					t = e.height;
				"number" == typeof n && (l.style.width = Cn(n)), "number" == typeof t && (l.style.height = Cn(t))
			}), l
		}
	}

	function Co(e) {
		var n = e.doc,
			t = e.props,
			r = n.createElement("html"),
			o = n.createElement("body"),
			i = n.createElement("style"),
			a = n.createElement("div");
		return a.classList.add("spinner"), t.cspNonce && i.setAttribute("nonce", t.cspNonce), r.appendChild(o), o.appendChild(a), o.appendChild(i), i.appendChild(n.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        ")), r
	}
	var Io = function() {
			return Ee
		},
		Oo = function(e) {
			return me(e.value)
		},
		bo = function() {
			function e(e) {
				this.tag = void 0, this.name = void 0, this.url = void 0, this.domain = void 0, this.bridgeUrl = void 0, this.props = void 0, this.builtinProps = void 0, this.dimensions = void 0, this.autoResize = void 0, this.allowedParentDomains = void 0, this.defaultContext = void 0, this.attributes = void 0, this.containerTemplate = void 0, this.prerenderTemplate = void 0, this.validate = void 0, this.driverCache = void 0, this.xprops = void 0, this.logger = void 0, this.propNames = void 0,
					function(e) {
						if (!e) throw new Error("Expected options to be passed");
						if (!e.tag || !e.tag.match(/^([a-z0-9]+-)+[a-z0-9]+$/)) throw new Error("Invalid options.tag: " + e.tag);
						if (function(e) {
								if (e.props && "object" != typeof e.props) throw new Error("Expected options.props to be an object");
								var n = ve(eo);
								if (e.props)
									for (var t = 0, r = Object.keys(e.props); t < r.length; t++) {
										var o = r[t],
											i = e.props[o];
										if (!i || "object" != typeof i) throw new Error("Expected options.props." + o + " to be an object");
										if (!i.type) throw new Error("Expected prop.type");
										if (-1 === n.indexOf(i.type)) throw new Error("Expected prop.type to be one of " + n.join(", "));
										if (i.required && i.default) throw new Error("Required prop can not have a default value");
										if (i.type === eo.FUNCTION && i.queryParam && !i.queryValue) throw new Error("Do not pass queryParam for function prop")
									}
							}(e), e.dimensions) {
							if (e.dimensions && !_n(e.dimensions.width) && !vn(e.dimensions.width)) throw new Error("Expected options.dimensions.width to be a px or % string value");
							if (e.dimensions && !_n(e.dimensions.height) && !vn(e.dimensions.height)) throw new Error("Expected options.dimensions.height to be a px or % string value")
						}
						if (e.defaultContext && e.defaultContext !== oo.IFRAME && e.defaultContext !== oo.POPUP) throw new Error("Unsupported context type: " + (e.defaultContext || "unknown"));
						if (!e.url) throw new Error("Must pass url");
						if ("string" != typeof e.url && "function" != typeof e.url) throw new TypeError("Expected url to be string or function");
						if (e.prerenderTemplate && "function" != typeof e.prerenderTemplate) throw new Error("Expected options.prerenderTemplate to be a function");
						if (e.containerTemplate && "function" != typeof e.containerTemplate) throw new Error("Expected options.containerTemplate to be a function")
					}(e), this.tag = e.tag, this.name = this.tag.replace(/-/g, "_"), this.allowedParentDomains = e.allowedParentDomains || io;
				var n = qr();
				if (n.components = n.components || {}, n.components[this.tag]) throw new Error("Can not register multiple components with the same tag: " + this.tag);
				this.builtinProps = {
					window: {
						type: "object",
						sendToChild: !1,
						required: !1,
						allowDelegate: !0,
						validate: function(e) {
							var n = e.value;
							if (!ne(n) && !Ir.isProxyWindow(n)) throw new Error("Expected Window or ProxyWindow")
						},
						decorate: function(e) {
							return Gr(e.value)
						}
					},
					timeout: {
						type: "number",
						required: !1,
						sendToChild: !1
					},
					close: {
						type: "function",
						required: !1,
						sendToChild: !1,
						childDecorate: function(e) {
							return e.close
						}
					},
					focus: {
						type: "function",
						required: !1,
						sendToChild: !1,
						childDecorate: function(e) {
							return e.focus
						}
					},
					resize: {
						type: "function",
						required: !1,
						sendToChild: !1,
						childDecorate: function(e) {
							return e.resize
						}
					},
					cspNonce: {
						type: "string",
						required: !1
					},
					getParent: {
						type: "function",
						required: !1,
						sendToChild: !1,
						childDecorate: function(e) {
							return e.getParent
						}
					},
					getParentDomain: {
						type: "function",
						required: !1,
						sendToChild: !1,
						childDecorate: function(e) {
							return e.getParentDomain
						}
					},
					onDisplay: {
						type: "function",
						required: !1,
						sendToChild: !1,
						allowDelegate: !0,
						default: Io,
						decorate: Oo
					},
					onRendered: {
						type: "function",
						required: !1,
						sendToChild: !1,
						default: Io,
						decorate: Oo
					},
					onRender: {
						type: "function",
						required: !1,
						sendToChild: !1,
						default: Io,
						decorate: Oo
					},
					onClose: {
						type: "function",
						required: !1,
						sendToChild: !1,
						allowDelegate: !0,
						default: Io,
						decorate: Oo
					},
					onError: {
						type: "function",
						required: !1,
						sendToChild: !1,
						childDecorate: function(e) {
							return e.onError
						}
					},
					onProps: {
						type: "function",
						required: !1,
						sendToChild: !1,
						default: Io,
						childDecorate: function(e) {
							return e.onProps
						}
					}
				}, this.props = e.props || {};
				var t = e.dimensions || {},
					r = t.width,
					o = t.height;
				this.dimensions = {
					width: void 0 === r ? ao.WIDTH : r,
					height: void 0 === o ? ao.HEIGHT : o
				}, this.url = e.url, this.domain = e.domain, this.bridgeUrl = e.bridgeUrl, this.attributes = e.attributes || {}, this.attributes.iframe = this.attributes.iframe || {}, this.attributes.popup = this.attributes.popup || {}, this.defaultContext = e.defaultContext || oo.IFRAME, this.autoResize = e.autoResize, this.containerTemplate = e.containerTemplate ? e.containerTemplate : No, this.prerenderTemplate = e.prerenderTemplate ? e.prerenderTemplate : Co, this.validate = e.validate, this.logger = e.logger || {
					debug: Ee,
					info: Ee,
					warn: Ee,
					error: Ee
				}, this.registerChild(), this.listenDelegate(), n.components[this.tag] = this
			}
			var n = e.prototype;
			return n.getPropNames = function() {
				if (this.propNames) return this.propNames;
				for (var e = Object.keys(this.props), n = 0, t = Object.keys(this.builtinProps); n < t.length; n++) {
					var r = t[n]; - 1 === e.indexOf(r) && e.push(r)
				}
				return this.propNames = e, e
			}, n.getPropDefinition = function(e) {
				return this.props[e] || this.builtinProps[e]
			}, n.driver = function(e, n) {
				var t = {
					react: yo,
					angular: vo,
					vue: wo,
					angular2: _o
				};
				if (!t[e]) throw new Error("Could not find driver for framework: " + e);
				return this.driverCache = this.driverCache || {}, this.driverCache[e] || (this.driverCache[e] = t[e].register(this, n)), this.driverCache[e]
			}, n.registerChild = function() {
				if (this.isChild()) {
					if (window.xprops) throw new Error("Can not register " + this.name + " as child - can not attach multiple components to the same window");
					var e = new po(this);
					window.xprops = this.xprops = e.getProps()
				}
			}, n.listenDelegate = function() {
				var e = this;
				jr($r + "_" + this.name, function() {
					return !0
				}), jr(Qr + "_" + this.name, function(n) {
					var t = n.data;
					return new go(e, n.source, {
						context: t.context,
						props: t.props,
						overrides: t.overrides
					}).getDelegate()
				})
			}, n.canRenderTo = function(e) {
				return zr(e, $r + "_" + this.name).then(function(e) {
					return e.data
				}).catch(function() {
					return !1
				})
			}, n.getUrl = function(e) {
				return "function" == typeof this.url ? this.url({
					props: e
				}) : this.url
			}, n.getInitialDomain = function(e) {
				return this.domain && "string" == typeof this.domain ? this.domain : $(this.getUrl(e))
			}, n.getDomain = function(e) {
				return De(this.domain) ? this.domain : this.getInitialDomain(e)
			}, n.getBridgeUrl = function() {
				if (this.bridgeUrl) return this.bridgeUrl
			}, n.isChild = function() {
				var e = lo();
				return Boolean(e && e.tag === this.tag)
			}, n.getDefaultContainer = function(e, n) {
				if (n) {
					if ("string" != typeof n && !Ke(n)) throw new TypeError("Expected string or element selector to be passed");
					return n
				}
				if (e === oo.POPUP) return "body";
				throw new Error("Expected element to be passed to render iframe")
			}, n.getDefaultContext = function(e, n) {
				if (n.window) return Gr(n.window).getType();
				if (e) {
					if (e !== oo.IFRAME && e !== oo.POPUP) throw new Error("Unrecognized context: " + e);
					return e
				}
				return this.defaultContext
			}, n.init = function(e) {
				var n = this,
					t = new mo(this, e = e || {}),
					r = function(r, o, i) {
						return N.try(function() {
							if (!ne(r)) throw new Error("Must pass window to renderTo");
							return i = n.getDefaultContext(i, e), o = n.getDefaultContainer(i, o), t.render(r, o, i)
						})
					};
				return h({}, t.getHelpers(), {
					render: function(e, n) {
						return r(window, e, n)
					},
					renderTo: function(e, n, t) {
						return r(e, n, t)
					}
				})
			}, n.checkAllowRender = function(e, n, t) {
				if (e !== window) {
					if (!X(window, e)) throw new Error("Can only renderTo an adjacent frame");
					var r = P();
					if (!Q(n, r) && !F(e)) throw new Error("Can not render remotely to " + n.toString() + " - can only render to " + r);
					if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }")
				}
			}, n.log = function(e, n) {
				this.logger.info(this.name + "_" + e, n)
			}, n.registerActiveComponent = function(e) {
				var n = qr();
				n.activeComponents = n.activeComponents || [], n.activeComponents.push(e)
			}, n.destroyActiveComponent = function(e) {
				var n = qr();
				n.activeComponents = n.activeComponents || [], n.activeComponents.splice(n.activeComponents.indexOf(e), 1)
			}, e
		}();

	function Lo(e) {
		Yr();
		var n = new bo(e),
			t = function(e) {
				return n.init(e)
			};
		return t.driver = function(e, t) {
			return n.driver(e, t)
		}, t.isChild = function() {
			return n.isChild()
		}, t.canRenderTo = function(e) {
			return n.canRenderTo(e)
		}, t.xprops = n.xprops, t
	}

	function Ao() {
		Wr && Wr.destroyBridges();
		var e = [],
			n = qr();
		for (n.activeComponents = n.activeComponents || []; n.activeComponents.length;) e.push(n.activeComponents[0].destroy(new Error("zoid desroyed all"), !1));
		return N.all(e).then(Ee)
	}
	var Ro = Ao;
	var So = {
		ELEMENT: "element",
		TEXT: "text",
		COMPONENT: "component",
		FRAGMENT: "fragment"
	};

	function Do(e, n) {
		for (var t = [], r = 0; r < e.length; r++) {
			var o = e[r].render(n);
			if (o)
				if (Array.isArray(o))
					for (var i = 0; i < o.length; i++) {
						var a = o[i];
						a && t.push(a)
					} else t.push(o)
		}
		return t
	}
	var xo = function() {
			function e(e, n, t) {
				this.type = So.ELEMENT, this.name = void 0, this.props = void 0, this.children = void 0, this.onRender = void 0, this.name = e, this.props = n, this.children = t;
				var r = n.onRender;
				"function" == typeof r && (this.onRender = r, delete n.onRender)
			}
			var n = e.prototype;
			return n.render = function(e) {
				var n = e(this);
				return this.onRender && this.onRender(n), n
			}, n.renderChildren = function(e) {
				return Do(this.children, e)
			}, e
		}(),
		Po = function() {
			function e(e) {
				this.type = So.FRAGMENT, this.children = void 0, this.children = e
			}
			return e.prototype.render = function(e) {
				return this.children.map(e)
			}, e
		}(),
		Fo = function() {
			function e(e) {
				this.type = So.TEXT, this.text = void 0, this.text = e
			}
			return e.prototype.render = function(e) {
				return e(this)
			}, e
		}(),
		Mo = function() {
			function e(e, n, t) {
				this.type = So.COMPONENT, this.component = void 0, this.props = void 0, this.children = void 0, this.component = e, this.props = n, this.children = t
			}
			var n = e.prototype;
			return n.renderComponent = function(e) {
				var n = function(e) {
					var n = Uo(Array.isArray(e) ? e : [e]);
					return 1 === n.length ? n[0] : n.length > 1 ? new Po(n) : void 0
				}(this.component(this.props, this.children));
				if (n) return n.render(e)
			}, n.render = function(e) {
				return e(this)
			}, n.renderChildren = function(e) {
				return Do(this.children, e)
			}, e
		}();

	function Uo(e) {
		for (var n = [], t = 0; t < e.length; t++) {
			var r = e[t];
			if (r)
				if ("string" == typeof r) n.push(new Fo(r));
				else if (Array.isArray(r))
				for (var o = 0, i = Uo(r); o < i.length; o++) n.push(i[o]);
			else {
				if (!r || r.type !== So.ELEMENT && r.type !== So.TEXT && r.type !== So.COMPONENT) throw new TypeError("Unrecognized node type: " + typeof r);
				n.push(r)
			}
		}
		return n
	}
	var Ho, ko = function(e, n) {
			for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
			if (n = n || {}, r = Uo(r), "string" == typeof e) return new xo(e, n, r);
			if ("function" == typeof e) return new Mo(e, n, r);
			throw new TypeError("Expected jsx element to be a string or a function")
		},
		Bo = function(e, n) {
			if (e && Object.keys(e).length) throw new Error("Do not pass props to Fragment");
			return n
		},
		jo = "0123456789abcdef",
		Wo = {
			HTML: "html",
			IFRAME: "iframe",
			SCRIPT: "script",
			NODE: "node",
			DEFAULT: "default"
		},
		zo = {
			ID: "id",
			INNER_HTML: "innerHTML",
			EL: "el"
		},
		Zo = ((Ho = {})[Wo.IFRAME] = function(e, n) {
			var t = n.children[0];
			if (1 !== n.children.length || !t || t.type !== So.ELEMENT || t.name !== Wo.HTML) throw new Error("Expected only single html element node as child of " + Wo.IFRAME + " element");
			e.addEventListener("load", function() {
				var n = e.contentWindow;
				if (!n) throw new Error("Expected frame to have contentWindow");
				for (var r = n.document, o = r.documentElement; o.children && o.children.length;) o.removeChild(o.children[0]);
				for (var i = t.render(Vo({
						doc: r
					})); i.children.length;) o.appendChild(i.children[0])
			})
		}, Ho[Wo.SCRIPT] = function(e, n) {
			var t = n.children[0];
			if (1 !== n.children.length || !t || t.type !== So.TEXT) throw new Error("Expected only single text node as child of " + Wo.SCRIPT + " element");
			e.text = t.text
		}, Ho[Wo.DEFAULT] = function(e, n, t) {
			for (var r = 0, o = n.renderChildren(t); r < o.length; r++) e.appendChild(o[r])
		}, Ho);

	function Vo(e) {
		void 0 === e && (e = {});
		var n = e.doc,
			t = void 0 === n ? document : n;
		return function e(n) {
			if (n.type === So.COMPONENT) return n.renderComponent(e);
			if (n.type === So.TEXT) return function(e, n) {
				return e.createTextNode(n.text)
			}(t, n);
			if (n.type === So.ELEMENT) {
				var r = function(e, n) {
					return n.props[zo.EL] ? n.props[zo.EL] : e.createElement(n.name)
				}(t, n);
				return function(e, n) {
						for (var t = n.props, r = 0, o = Object.keys(t); r < o.length; r++) {
							var i = o[r],
								a = t[i];
							if (null != a && i !== zo.EL && i !== zo.INNER_HTML)
								if (i.match(/^on[A-Z][a-z]/) && "function" == typeof a) e.addEventListener(i.slice(2).toLowerCase(), a);
								else if ("string" == typeof a || "number" == typeof a) e.setAttribute(i, a.toString());
							else {
								if ("boolean" != typeof a) throw new TypeError("Can not render prop " + i + " of type " + typeof a);
								!0 === a && e.setAttribute(i, "")
							}
						}
						e.tagName.toLowerCase() !== Wo.IFRAME || t.id || e.setAttribute(zo.ID, "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, function() {
							return jo.charAt(Math.floor(Math.random() * jo.length))
						}))
					}(r, n),
					function(e, n, t, r) {
						if (n.props.hasOwnProperty(zo.INNER_HTML)) {
							if (n.children.length) throw new Error("Expected no children to be passed when " + zo.INNER_HTML + " prop is set");
							var o = n.props[zo.INNER_HTML];
							if ("string" != typeof o) throw new TypeError(zo.INNER_HTML + " prop must be string");
							n.name === Wo.SCRIPT ? e.text = o : (e.innerHTML = o, function(e, n) {
								void 0 === n && (n = window.document);
								for (var t = 0, r = e.querySelectorAll("script"); t < r.length; t++) {
									var o = r[t],
										i = o.parentNode;
									if (i) {
										var a = n.createElement("script");
										a.text = o.textContent, i.replaceChild(a, o)
									}
								}
							}(e, t))
						} else(Zo[n.name] || Zo[Wo.DEFAULT])(e, n, r)
					}(r, n, t, e), r
			}
			throw new TypeError("Unhandleable node")
		}
	}
	var Go = {
			INNER_HTML: "innerHTML"
		},
		Yo = {
			br: !0
		};

	function Ko(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
	}

	function qo() {
		return function e(n) {
			if (n.type === So.COMPONENT) return [].concat(n.renderComponent(e)).join("");
			if (n.type === So.ELEMENT) {
				var t = (o = n.props, (i = Object.keys(o).filter(function(e) {
					var n = o[e];
					return e !== Go.INNER_HTML && !!n && ("string" == typeof n || "number" == typeof n || !0 === n)
				})).length ? " " + i.map(function(e) {
					var n = o[e];
					if (!0 === n) return "" + Ko(e);
					if ("string" != typeof n && "number" != typeof n) throw new TypeError("Unexpected prop type: " + typeof n);
					return Ko(e) + '="' + Ko(n.toString()) + '"'
				}).join(" ") : "");
				if (Yo[n.name]) return "<" + n.name + t + " />";
				var r = "string" == typeof n.props[Go.INNER_HTML] ? n.props[Go.INNER_HTML] : n.renderChildren(e).join("");
				return "<" + n.name + t + ">" + r + "</" + n.name + ">"
			}
			var o, i;
			if (n.type === So.TEXT) return Ko(n.text);
			throw new TypeError("Unhandleable node: " + n.type)
		}
	}
	var Jo, Xo = Lo({
		url: function() {
			return Et() + "/webapps/helios"
		},
		props: {
			action: {
				type: "string",
				queryParam: !0
			},
			xcomponent: {
				type: "string",
				queryParam: !0
			},
			flow: {
				type: "string",
				queryParam: !0
			},
			cart_id: {
				type: "string",
				queryParam: !0
			},
			clientID: {
				type: "string",
				value: nt,
				queryParam: !0
			},
			onContingencyResult: {
				type: "function"
			},
			onError: {
				type: "function"
			},
			sdkMeta: {
				type: "string",
				queryParam: !0,
				sendToChild: !1,
				value: function() {
					return At()
				}
			}
		},
		tag: "payments-sdk-contingency-handler",
		containerTemplate: function(e) {
			var n = e.uid,
				t = e.tag,
				r = e.context,
				o = e.focus,
				i = e.close,
				a = e.frame,
				s = e.prerenderFrame,
				c = e.doc,
				u = e.event;
			if (a && s) return a.classList.add("component-frame"), s.classList.add("prerender-frame"), a.classList.add("invisible"), s.classList.add("visible"), u.on(so.RENDERED, function() {
				s.classList.remove("visible"), s.classList.add("invisible"), a.classList.remove("invisible"), a.classList.add("visible"), setTimeout(function() {
					dn(s)
				}, 1)
			}), ko("div", {
				id: n,
				onClick: function(e) {
					return e.preventDefault(), e.stopPropagation(), o()
				},
				class: t + " " + t + "-tag-" + t + " " + t + "-context-" + r + " " + t + "-focus"
			}, ko("a", {
				href: "#",
				onClick: function(e) {
					return e.preventDefault(), e.stopPropagation(), Jo && (Jo({
						success: !1
					}), Jo = null), i()
				},
				class: t + "-close"
			}), ko("div", {
				class: "outlet"
			}, ko("node", {
				el: a
			}), ko("node", {
				el: s
			})), ko("style", null, "\n          #" + n + " {\n              position: fixed;\n              top: 0;\n              left: 0;\n              width: 100%;\n              height: 100%;\n              background-color: rgba(0, 0, 0, 0.6);\n              z-index: 400;\n          }\n\n          #" + n + "." + t + "-context-" + oo.POPUP + " {\n              cursor: pointer;\n          }\n\n          #" + n + "." + t + "-context-" + oo.IFRAME + " .outlet {\n              box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);\n              position: fixed;\n              top: 50%;\n              left: 50%;\n              transform: translate3d(-50%, -50%, 0);\n              -webkit-transform: translate3d(-50%, -50%, 0);\n              -moz-transform: translate3d(-50%, -50%, 0);\n              -o-transform: translate3d(-50%, -50%, 0);\n              -ms-transform: translate3d(-50%, -50%, 0);\n          }\n\n          #" + n + "." + t + "-context-" + oo.IFRAME + " .outlet {\n              height: 510px;\n              width: 450px;\n          }\n\n          #" + n + "." + t + "-context-" + oo.IFRAME + " .outlet iframe {\n              height: 100%;\n              width: 100%;\n              position: absolute;\n              top: 0;\n              left: 0;\n              transition: opacity .2s ease-in-out;\n          }\n\n          #" + n + " > .outlet > iframe.visible {\n              opacity: 1;\n          }\n\n          #" + n + " > .outlet > iframe.invisible {\n              opacity: 0;\n          }\n\n          #" + n + " > .outlet > iframe.component-frame {\n              z-index: 200;\n          }\n\n          #" + n + " > .outlet > iframe.prerender-frame {\n              z-index: 100;\n          }\n\n          #" + n + " ." + t + "-close {\n              position: absolute;\n              right: 16px;\n              top: 16px;\n              width: 16px;\n              height: 16px;\n              opacity: 0.6;\n          }\n\n          #" + n + " ." + t + "-close:hover {\n              opacity: 1;\n          }\n\n          #" + n + " ." + t + "-close:before,\n          #" + n + " ." + t + "-close:after {\n              position: absolute;\n              left: 8px;\n              content: ' ';\n              height: 16px;\n              width: 2px;\n              background-color: white;\n          }\n\n          #" + n + " ." + t + "-close:before {\n              transform: rotate(45deg);\n          }\n\n          #" + n + " ." + t + "-close:after {\n              transform: rotate(-45deg);\n          }\n          ")).render(Vo({
				doc: c
			}))
		}
	});
	Xo.isChild() && (window.xchild = {
		close: function() {
			return window.xprops.close()
		}
	});
	var Qo = {
			Component: Xo
		},
		$o = "",
		ei = {
			isEligible: function() {
				var e = Object({
					eligible: !0,
					guest: !1,
					remembered: !1,
					vendors: Object({
						visa: Object({
							eligible: !0
						}),
						mastercard: Object({
							eligible: !0
						}),
						amex: Object({
							eligible: !0
						}),
						discover: Object({
							eligible: !1
						}),
						hiper: Object({
							eligible: !1
						}),
						elo: Object({
							eligible: !1
						}),
						jcb: Object({
							eligible: !1
						}),
						cup: Object({
							eligible: !1
						})
					}),
					branded: !1
				});
				return e.eligible && !e.branded
			},
			render: function(e, n) {
				var t = Lt();
				if ("function" != typeof e.createOrder) return N.reject(new Error("createOrder parameter must be a function."));
				var r = Object({
					fundingEligibility: Object({
						paypal: Object({
							eligible: !0,
							guest: !1,
							remembered: !1
						}),
						venmo: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						credit: Object({
							eligible: !0,
							guest: !1,
							remembered: !1
						}),
						card: Object({
							eligible: !0,
							guest: !1,
							remembered: !1,
							vendors: Object({
								visa: Object({
									eligible: !0
								}),
								mastercard: Object({
									eligible: !0
								}),
								amex: Object({
									eligible: !0
								}),
								discover: Object({
									eligible: !1
								}),
								hiper: Object({
									eligible: !1
								}),
								elo: Object({
									eligible: !1
								}),
								jcb: Object({
									eligible: !1
								}),
								cup: Object({
									eligible: !1
								})
							}),
							branded: !1
						}),
						ideal: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						sepa: Object({
							eligible: !0,
							guest: !1,
							remembered: !1
						}),
						bancontact: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						giropay: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						sofort: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						eps: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						mybank: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						p24: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						zimpler: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						}),
						wechatpay: Object({
							eligible: !1,
							guest: !1,
							remembered: !1
						})
					})
				});
				r.assetsUrl = "https://assets.braintreegateway.com", !r.card && r.paypalMerchantConfiguration && r.paypalMerchantConfiguration.creditCard && (r.card = r.paypalMerchantConfiguration.creditCard);
				var o = function() {
					var e = Xn(An.CLIENT_TOKEN);
					if (!e) throw new Error("Expected data-client-token to be passed with client token, to " + qn().outerHTML);
					return e
				}();
				r.correlationId = "919affecc3202", r.paypalApi = mt();
				var i, a = function() {
					return N.resolve().then(function() {
						return e.createOrder()
					})
				};
				if (n && e.onApprove && !(i = document.querySelector(n))) return N.reject(new Error("Could not find selector `" + n + "` on the page"));
				var s = JSON.parse(JSON.stringify(e));
				return Ft.a.create({
					authorization: o,
					paymentsSdk: !0,
					configuration: r
				}).then(function(e) {
					return s.paymentsSdk = !0, s.client = e, Ut.a.create(s)
				}).then(function(n) {
					var r;
					return n.submit = function(e, n) {
						return function(t) {
							void 0 === t && (t = {});
							var r = Lt();
							return n().then(function(n) {
								var o;
								return r.track(((o = {})[Pn.STATE] = "CARD_PAYMENT_FORM", o[Pn.TRANSITION] = "process_receive_order", o.hosted_payment_session_id = $o, o[Pn.CONTEXT_TYPE] = "Cart-ID", o[Pn.CONTEXT_ID] = n, o)), r.flush(), e.tokenize(h({}, t, {
									orderId: n
								})).catch(function(e) {
									return e.details && e.details.find && e.details.find(function(e) {
										return "CONTINGENCY" === e.issue
									}) ? function(e) {
										var n = ke(e.split("?")[1]),
											t = document.body;
										if (!t) throw new Error("No document body available to render to");
										return new N(function(e, r) {
											Jo = e, Qo.Component({
												action: n.action,
												xcomponent: "1",
												flow: n.flow,
												cart_id: n.cart_id,
												onContingencyResult: function(n, t) {
													Jo = null, n ? r(n) : e(t)
												},
												onError: function(e) {
													Jo = null, r(e)
												}
											}).render(t)
										})
									}("" + e.links.find(function(e) {
										return "3ds-contingency-resolution" === e.rel
									}).href) : N.reject(e)
								}).then(function(e) {
									var t;
									return r.track(((t = {
										comp: "hostedpayment",
										card_brand: e && e.payment_source && e.payment_source.card.card_type,
										api_integration_type: "PAYPALSDK",
										product_identifier: "PAYPAL_FOR_MARKETPLACES"
									})[Pn.STATE] = "CARD_PAYMENT_FORM", t[Pn.TRANSITION] = "process_card_payment", t.hosted_payment_session_cre_dt = (new Date).toString(), t.hosted_payment_session_cre_ts_epoch = Date.now().toString(), t)), r.flush(), {
										liabilityShifted: e.success,
										orderId: n
									}
								})
							})
						}
					}(n, a), i && i.addEventListener("click", function() {
						n.submit().then(function(n) {
							return e.onApprove(n)
						}).catch(function(n) {
							e.onError && e.onError(n)
						})
					}), $o = le(), t.track(((r = {
						comp: "hostedpayment",
						api_integration_type: "PAYPALSDK",
						product_identifier: "PAYPAL_FOR_MARKETPLACES"
					})[Pn.STATE] = "CARD_PAYMENT_FORM", r[Pn.TRANSITION] = "collect_card_info", r.hosted_payment_textboxes_shown = Object.keys(s.fields).join(":"), r.hosted_payment_session_cre_dt = (new Date).toString(), r.hosted_payment_session_cre_ts_epoch = Date.now().toString(), r[Pn.CONTEXT_TYPE] = "hosted_session_id", r[Pn.CONTEXT_ID] = $o, r)), t.flush(), n
				})
			}
		},
		ni = {
			PAYPAL: "paypal",
			CHECKOUT: "checkout",
			BUYNOW: "buynow",
			PAY: "pay",
			CREDIT: "credit",
			CARD: "card",
			INSTALLMENT: "installment",
			VENMO: "venmo",
			IDEAL: "ideal",
			SEPA: "sepa",
			BANCONTACT: "bancontact",
			GIROPAY: "giropay",
			SOFORT: "sofort",
			EPS: "eps",
			MYBANK: "mybank",
			P24: "p24",
			ZIMPLER: "zimpler",
			WECHATPAY: "wechatpay"
		},
		ti = {
			DEFAULT: "default",
			GOLD: "gold",
			BLUE: "blue",
			SILVER: "silver",
			DARKBLUE: "darkblue",
			BLACK: "black",
			WHITE: "white",
			TRANSPARENT: "transparent"
		},
		ri = {
			TINY: "tiny",
			SMALL: "small",
			MEDIUM: "medium",
			LARGE: "large",
			HUGE: "huge",
			RESPONSIVE: "responsive"
		},
		oi = {
			BLACK: "black",
			BLUE: "blue"
		},
		ii = {
			PILL: "pill",
			RECT: "rect"
		},
		ai = {
			HORIZONTAL: "horizontal",
			VERTICAL: "vertical"
		},
		si = {
			SINGLE: "single",
			MULTIPLE: "multiple"
		},
		ci = {
			IFRAME: "iframe"
		},
		ui = {
			BUTTON_SESSION_ID: "button_session_id",
			ORDER_ID: "EC-Token"
		},
		li = {
			BUTTON: "smart_button",
			CHECKOUT: "smart_checkout"
		},
		di = {
			BUTTON_RENDER: "process_button_render",
			BUTTON_LOAD: "process_button_load",
			BUTTON_CLICK: "process_button_click",
			RECIEVE_ORDER: "process_recieve_order",
			CHECKOUT_INIT: "process_checkout_init",
			CHECKOUT_AUTHORIZE: "process_checkout_authorize",
			CHECKOUT_SHIPPING_CHANGE: "process_checkout_shipping_change",
			CHECKOUT_CANCEL: "process_checkout_cancel",
			CHECKOUT_ERROR: "process_checkout_error",
			EXTERNAL_EXPERIMENT: "process_external_experiment",
			EXTERNAL_EXPERIMENT_COMPLETE: "process_external_experiment_complete"
		},
		pi = {
			BUTTON: "data-button",
			FUNDING_SOURCE: "data-funding-source",
			CARD: "data-card"
		},
		fi = "default",
		hi = {
			CONTAINER: "paypal-button-container",
			BUTTON: "paypal-button",
			LABEL: "paypal-button-label",
			COLOR: "paypal-button-color",
			SHAPE: "paypal-button-shape",
			LAYOUT: "paypal-button-layout",
			NUMBER: "paypal-button-number",
			ENV: "paypal-button-env",
			TAGLINE: "paypal-button-tagline",
			TAGLINE_COLOR: "paypal-button-tagline-color",
			TEXT: "paypal-button-text",
			CARD: "paypal-button-card",
			SEPARATOR: "paypal-separator"
		};

	function Ei() {
		return window.xprops && window.xprops.sessionID ? window.xprops.sessionID : bt()
	}

	function mi() {
		if (window.xprops && window.xprops.buttonSessionID) return window.xprops.buttonSessionID
	}

	function gi() {
		if (!yt()) throw new Error("Can only determine if iframe rendering is allowed on paypal domain");
		if (!f()) return !0;
		var e = window.xprops && window.xprops.getParent();
		return !(!e || !F(e))
	}
	var yi = {
		CHECKOUT: "production" === xn.LOCAL ? "/webapps/hermes?ul=0" : "/checkoutnow",
		BUTTON: "/smart/buttons",
		CARD: "/smart/card-fields"
	};

	function wi() {
		return "" + Et() + yi.CHECKOUT
	}

	function vi() {
		return "" + Et() + yi.BUTTON
	}

	function _i() {
		return "" + Et() + yi.CARD
	}
	var Ti = {
			WIDTH: 450,
			HEIGHT: 535
		},
		Ni = "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n";

	function Ci(e) {
		var n = e.doc,
			t = e.props.nonce;
		return ko("html", null, ko("head", null, ko("title", null, "PayPal"), ko("meta", {
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		})), ko("body", null, ko("div", {
			class: "preloader spinner"
		}, ko("style", {
			nonce: t
		}, Ni), ko("div", {
			class: "spinWrap"
		}, ko("p", {
			class: "spinnerImage"
		}), ko("p", {
			class: "loader"
		}))))).render(Vo({
			doc: n
		}))
	}
	var Ii, Oi, bi = {
			PP: "pp",
			PAYPAL: "paypal",
			VENMO: "venmo",
			CREDIT: "credit",
			IDEAL: "ideal",
			ELV: "elv",
			SEPA: "sepa",
			BANCONTACT: "bancontact",
			GIROPAY: "giropay",
			SOFORT: "sofort",
			EPS: "eps",
			MYBANK: "mybank",
			P24: "p24",
			ZIMPLER: "zimpler",
			WECHATPAY: "wechatpay"
		},
		Li = {
			BLUE: "blue",
			BLACK: "black",
			WHITE: "white",
			DEFAULT: "default"
		},
		Ai = {
			LOGO: "paypal-logo",
			CARD: "paypal-logo-card",
			LOGO_COLOR: "paypal-logo-color"
		};

	function Ri(e) {
		var n = e.svg,
			t = s(e, ["svg"]);
		if (!n) throw new TypeError("Expected svg prop");
		if ("string" != typeof(n = n.render(qo()))) throw new TypeError("Expected svg prop to be a string or jsx node");
		return ko("img", h({
			src: Ne(n)
		}, t))
	}

	function Si(e) {
		var n = e.name,
			t = e.logoColor;
		return ko(Ri, {
			svg: (0, e.render)(),
			alt: n,
			class: Ai.LOGO + " " + Ai.LOGO + "-" + n + " " + (t ? Ai.LOGO_COLOR + "-" + t : "")
		})
	}

	function Di(e, n, t) {
		var r = t ? n[t] : n[Li.DEFAULT];
		if (!r) throw new Error("No " + (t || Li.DEFAULT) + " logo available for " + e);
		return r
	}(Ii = {})[Li.DEFAULT] = {
		primary: "#005498",
		secondary: "#FFD800"
	}, Ii[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff"
	};
	var xi, Pi, Fi, Mi, Ui, Hi, ki = ((Oi = {})[Li.DEFAULT] = {
		primary: "#003087"
	}, Oi[Li.BLUE] = {
		primary: "#003087"
	}, Oi[Li.WHITE] = {
		primary: "#ffffff"
	}, Oi[Li.BLACK] = {
		primary: "#333030"
	}, Oi);

	function Bi(e) {
		var n = e.logoColor,
			t = e.locale,
			r = Di(bi.CREDIT, ki, n).primary,
			o = t.country;
		return ko(Si, {
			name: bi.CREDIT,
			logoColor: n,
			render: function() {
				switch (o) {
					case On.DE:
						return ko("svg", {
							width: "135",
							height: "32",
							viewBox: "0 0 135 32",
							preserveAspectRatio: "xMinYMin meet",
							xmlns: "http://www.w3.org/2000/svg"
						}, ko("g", {
							transform: "matrix(1.3333333,0,0,-1.3333333,10,40)",
							fill: r
						}, ko("g", {
							transform: "matrix(0.17016911,0,0,0.17819595,39.327112,22.053803)"
						}, ko("path", {
							d: "m 0,0 -1.35,-8.619 c -0.146,-0.929 -0.946,-1.613 -1.886,-1.613 h -40.935 c -0.922,0 -1.445,1.057 -0.884,1.79 l 29.853,39.007 h -19.237 c -0.683,0 -1.205,0.611 -1.099,1.286 l 1.35,8.619 c 0.145,0.929 0.945,1.613 1.885,1.613 H 7.112 c 0.922,0 1.444,-1.055 0.886,-1.788 L -21.724,1.286 H -1.1 C -0.416,1.286 0.106,0.675 0,0 m 203.3312,42.0833 c 0.684,0 1.206,-0.611 1.1,-1.287 l -4.446,-28.132 c -1.041,-6.73 -2.359,-13.391 -8.395,-18.456 -5.065,-4.302 -12.143,-5.828 -18.248,-5.828 -6.106,0 -12.767,1.526 -16.444,5.828 -4.371,5.065 -3.608,11.726 -2.567,18.456 l 4.394,27.808 c 0.146,0.928 0.946,1.611 1.885,1.611 h 10.668 c 0.683,0 1.205,-0.61 1.1,-1.285 l -4.101,-26.261 c -1.11,-6.799 -1.804,-14.223 6.938,-14.223 8.743,0 10.408,7.424 11.518,14.223 l 4.05,25.932 c 0.145,0.929 0.945,1.614 1.885,1.614 z m -361.2517,-52.3157 h -10.665 c -0.685,0 -1.207,0.611 -1.1,1.287 l 6.249,39.511 h -9.939 c -0.684,0 -1.206,0.61 -1.1,1.285 l 1.35,8.619 c 0.146,0.929 0.946,1.614 1.886,1.614 h 33.145 c 0.684,0 1.206,-0.611 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -9.608 l -6.198,-39.188 c -0.147,-0.927 -0.946,-1.61 -1.885,-1.61 m -98.5277,28.8638 h 1.318 c 4.441,0 9.549,0.837 10.477,6.522 0.929,5.688 -2.034,6.505 -6.779,6.522 h -1.927 c -0.58,0 -1.075,-0.422 -1.166,-0.995 z m 23.345,-28.864 h -13.977 c -0.594,0 -1.136,0.341 -1.393,0.878 l -9.224,19.244 h -0.139 l -2.985,-18.819 c -0.119,-0.75 -0.766,-1.303 -1.526,-1.303 h -10.977 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.848,49.725 c 0.119,0.751 0.766,1.304 1.526,1.304 h 19.009 c 10.339,0 17.416,-4.926 15.681,-16.097 -1.179,-7.216 -6.175,-13.461 -13.807,-14.779 l 12.015,-19.748 c 0.451,-0.742 -0.083,-1.692 -0.951,-1.692 m 445.918,52.3159 h 11.349 c 0.385,0 0.743,-0.199 0.946,-0.526 l 19.517,-31.46 h 0.139 l 4.81,30.376 c 0.147,0.927 0.946,1.61 1.885,1.61 h 10.667 c 0.684,0 1.206,-0.611 1.099,-1.287 l -7.799,-49.418 c -0.147,-0.927 -0.946,-1.611 -1.886,-1.611 h -11.347 c -0.386,0 -0.744,0.2 -0.947,0.528 l -19.517,31.528 h -0.139 l -4.811,-30.445 c -0.146,-0.928 -0.946,-1.611 -1.885,-1.611 h -10.666 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.8,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 m -304.5422,0 h 11.349 c 0.385,0 0.743,-0.199 0.946,-0.526 l 19.517,-31.46 h 0.139 l 4.81,30.376 c 0.147,0.927 0.946,1.61 1.885,1.61 h 10.667 c 0.684,0 1.206,-0.611 1.099,-1.287 l -7.799,-49.418 c -0.147,-0.927 -0.946,-1.611 -1.886,-1.611 h -11.347 c -0.386,0 -0.744,0.2 -0.947,0.528 l -19.517,31.528 h -0.139 l -4.811,-30.445 c -0.146,-0.928 -0.946,-1.611 -1.885,-1.611 h -10.666 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.8,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 M 131.156,1.2855 h 15.004 c 0.684,0 1.206,-0.61 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.928 -0.945,-1.613 -1.885,-1.613 h -26.969 c -0.685,0 -1.207,0.611 -1.1,1.287 l 7.799,49.418 c 0.147,0.927 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.612 1.099,-1.287 z m -33.5321,20.607 2.937,18.58 c 0.147,0.928 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.611 1.1,-1.287 l -7.8,-49.418 c -0.146,-0.927 -0.946,-1.611 -1.885,-1.611 h -10.664 c -0.685,0 -1.207,0.612 -1.1,1.288 l 3.196,20.152 h -19.636 l -3.145,-19.83 c -0.147,-0.927 -0.946,-1.61 -1.885,-1.61 h -10.666 c -0.685,0 -1.207,0.611 -1.1,1.287 l 7.799,49.418 c 0.147,0.928 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.611 1.099,-1.287 l -2.988,-18.904 z m 221.8207,-2.9142 c 0.699,0 1.224,-0.638 1.094,-1.325 -1.342,-7.069 -3.07,-13.21 -8.427,-19.351 -6.245,-7.147 -14.432,-10.269 -23.175,-10.269 -16.444,0 -26.088,11.171 -23.521,27.615 2.706,16.999 15.958,28.17 32.819,28.17 10.373,0 17.776,-4.519 20.966,-13.617 0.198,-0.566 -0.087,-1.189 -0.644,-1.409 l -11.599,-4.569 c -0.598,-0.236 -1.275,0.081 -1.466,0.694 -1.354,4.349 -4.637,7.175 -9.686,7.175 -8.95,0 -14.987,-8.535 -16.236,-16.514 -1.318,-8.118 2.29,-16.374 11.24,-16.374 5.898,0 10.894,3.053 12.351,9.089 h -9.793 c -0.686,0 -1.209,0.614 -1.099,1.292 l 1.373,8.458 c 0.088,0.539 0.553,0.935 1.099,0.935 z m -438.1464,9.9777 -1.132,-7.133 h 14.032 c 0.684,0 1.206,-0.61 1.1,-1.285 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -12.076 c -0.937,0 -1.735,-0.68 -1.884,-1.605 l -1.198,-7.415 h 14.865 c 0.684,0 1.206,-0.611 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -26.831 c -0.684,0 -1.206,0.611 -1.099,1.286 l 7.799,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 h 26.834 c 0.683,0 1.206,-0.61 1.1,-1.285 l -1.35,-8.619 c -0.146,-0.929 -0.946,-1.614 -1.886,-1.614 h -12.904 c -0.939,0 -1.738,-0.682 -1.885,-1.609 M 34.135,25.9168 H 33.996 L 25.739,9.2648 h 11.31 z m -13.807,-27.06 -4.747,-8.518 c -0.197,-0.353 -0.569,-0.571 -0.973,-0.571 H 2.701 c -0.844,0 -1.381,0.902 -0.979,1.644 l 27.171,50.089 c 0.194,0.359 0.57,0.583 0.978,0.583 h 13.29 c 0.523,0 0.976,-0.365 1.088,-0.876 L 55.21,-8.8812 c 0.152,-0.694 -0.377,-1.351 -1.088,-1.351 H 41.905 c -0.525,0 -0.979,0.367 -1.089,0.88 l -1.755,8.209 z m -216.5493,27.06 h -0.139 l -8.257,-16.652 h 11.31 z m -13.807,-27.06 -4.747,-8.518 c -0.197,-0.353 -0.569,-0.571 -0.973,-0.571 h -11.907 c -0.844,0 -1.381,0.902 -0.979,1.644 l 27.171,50.089 c 0.194,0.359 0.57,0.583 0.978,0.583 h 13.29 c 0.523,0 0.976,-0.365 1.088,-0.876 l 10.961,-50.089 c 0.152,-0.694 -0.377,-1.351 -1.088,-1.351 h -12.217 c -0.525,0 -0.979,0.367 -1.089,0.88 l -1.755,8.209 z m 517.9793,-39.4791 -6.146,-39.098 c -0.119,-0.757 0.467,-1.442 1.233,-1.442 h 6.181 c 1.024,0 1.896,0.745 2.055,1.756 l 6.06,38.396 c 0.119,0.757 -0.466,1.442 -1.233,1.442 h -6.917 c -0.614,0 -1.138,-0.447 -1.233,-1.054 m -77.0618,-12.7966 h -7.207 c -0.689,0 -1.334,-0.342 -1.721,-0.912 l -9.942,-14.642 -4.213,14.07 c -0.263,0.88 -1.073,1.484 -1.993,1.484 h -7.084 c -0.856,0 -1.457,-0.842 -1.182,-1.651 l 7.936,-23.294 -7.464,-10.531 c -0.586,-0.827 0.005,-1.97 1.018,-1.97 h 7.2 c 0.683,0 1.322,0.334 1.71,0.895 l 23.968,34.591 c 0.574,0.828 -0.019,1.96 -1.026,1.96 m 58.6183,-13.956 c -0.693,-4.097 -3.945,-6.847 -8.093,-6.847 -2.08,0 -3.744,0.669 -4.815,1.935 -1.06,1.256 -1.46,3.045 -1.123,5.037 0.645,4.06 3.95,6.899 8.035,6.899 2.036,0 3.689,-0.675 4.78,-1.954 1.099,-1.287 1.53,-3.088 1.216,-5.07 m 9.992,13.956 h -7.169 c -0.615,0 -1.138,-0.447 -1.234,-1.054 l -0.315,-2.004 -0.501,0.726 c -1.553,2.254 -5.014,3.007 -8.469,3.007 -7.922,0 -14.689,-6.003 -16.006,-14.422 -0.685,-4.201 0.288,-8.215 2.669,-11.016 2.189,-2.574 5.311,-3.646 9.031,-3.646 6.385,0 9.927,4.102 9.927,4.102 l -0.321,-1.993 c -0.12,-0.758 0.466,-1.443 1.233,-1.443 h 6.457 c 1.024,0 1.896,0.744 2.055,1.756 l 3.876,24.545 c 0.12,0.757 -0.466,1.442 -1.233,1.442 m -116.7913,-13.956 c -0.693,-4.097 -3.945,-6.847 -8.093,-6.847 -2.08,0 -3.744,0.669 -4.815,1.935 -1.06,1.256 -1.46,3.045 -1.123,5.037 0.645,4.06 3.95,6.899 8.035,6.899 2.036,0 3.689,-0.675 4.78,-1.954 1.099,-1.287 1.531,-3.088 1.216,-5.07 m 9.992,13.956 h -7.169 c -0.615,0 -1.138,-0.447 -1.233,-1.054 l -0.316,-2.004 -0.501,0.726 c -1.553,2.254 -5.014,3.007 -8.469,3.007 -7.921,0 -14.689,-6.003 -16.006,-14.422 -0.685,-4.201 0.288,-8.215 2.669,-11.016 2.189,-2.574 5.311,-3.646 9.031,-3.646 6.385,0 9.927,4.102 9.927,4.102 l -0.321,-1.993 c -0.12,-0.758 0.466,-1.443 1.233,-1.443 h 6.457 c 1.024,0 1.896,0.744 2.055,1.756 l 3.876,24.545 c 0.12,0.757 -0.466,1.442 -1.233,1.442 m -43.0269,-0.172 c -0.818,-5.375 -4.924,-5.375 -8.894,-5.375 h -2.259 l 1.585,10.035 c 0.096,0.607 0.618,1.054 1.233,1.054 h 1.035 c 2.703,0 5.256,0 6.572,-1.54 0.787,-0.922 1.026,-2.287 0.728,-4.174 m -1.728,14.023 h -14.974 c -1.024,0 -1.896,-0.745 -2.055,-1.756 l -6.055,-38.396 c -0.119,-0.757 0.466,-1.442 1.233,-1.442 h 7.149 c 1.024,0 1.896,0.745 2.055,1.756 l 1.634,10.358 c 0.16,1.012 1.031,1.757 2.055,1.757 h 4.739 c 9.863,0 15.555,4.773 17.043,14.233 0.669,4.138 0.027,7.389 -1.911,9.665 -2.129,2.502 -5.904,3.825 -10.913,3.825 m 108.5272,-14.023 c -0.818,-5.375 -4.923,-5.375 -8.894,-5.375 h -2.259 l 1.585,10.035 c 0.096,0.607 0.619,1.054 1.233,1.054 h 1.035 c 2.703,0 5.256,0 6.572,-1.54 0.787,-0.922 1.026,-2.287 0.728,-4.174 m -1.728,14.023 h -14.974 c -1.024,0 -1.896,-0.745 -2.055,-1.756 l -6.055,-38.396 c -0.119,-0.757 0.466,-1.442 1.233,-1.442 h 7.683 c 0.717,0 1.327,0.521 1.438,1.229 l 1.717,10.885 c 0.16,1.012 1.031,1.757 2.055,1.757 h 4.739 c 9.863,0 15.555,4.773 17.043,14.233 0.669,4.138 0.027,7.389 -1.911,9.665 -2.129,2.502 -5.903,3.825 -10.913,3.825 m -161.6161,-40.475 -4.55,18.557 h 3.561 l 3.442,-14.442 7.914,14.442 h 3.798 l -15.748,-27.656 h -3.758 z M 82.525,-65.6994 c -0.989,1.121 -2.328,1.681 -4.016,1.681 -1.319,0 -2.546,-0.356 -3.679,-1.068 -1.135,-0.712 -2.045,-1.701 -2.731,-2.967 -0.686,-1.267 -1.028,-2.691 -1.028,-4.274 0,-1.767 0.5,-3.205 1.503,-4.313 1.002,-1.107 2.242,-1.661 3.719,-1.661 1.346,0 2.612,0.369 3.799,1.108 1.187,0.738 2.136,1.746 2.848,3.026 0.713,1.28 1.069,2.672 1.069,4.175 0,1.74 -0.495,3.171 -1.484,4.293 m -8.527,12.206 -1.661,-10.604 c 0.791,0.976 1.806,1.761 3.047,2.354 1.239,0.594 2.65,0.891 4.233,0.891 1.529,0 2.908,-0.376 4.135,-1.128 1.226,-0.752 2.182,-1.787 2.868,-3.106 0.686,-1.319 1.029,-2.809 1.029,-4.472 0,-2.162 -0.515,-4.153 -1.543,-5.974 -1.029,-1.819 -2.388,-3.264 -4.075,-4.332 -1.689,-1.068 -3.469,-1.602 -5.342,-1.602 -1.635,0 -2.981,0.329 -4.036,0.988 -1.055,0.659 -1.912,1.623 -2.571,2.889 l -0.515,-3.205 h -3.403 l 4.313,27.301 z M 39.4576,-76.5416 c 0.976,-1.121 2.308,-1.681 3.996,-1.681 1.319,0 2.552,0.356 3.699,1.069 1.148,0.712 2.064,1.701 2.751,2.967 0.685,1.266 1.028,2.691 1.028,4.273 0,1.767 -0.501,3.198 -1.503,4.293 -1.003,1.095 -2.256,1.642 -3.759,1.642 -1.32,0 -2.572,-0.37 -3.759,-1.108 -1.187,-0.738 -2.136,-1.741 -2.849,-3.007 -0.712,-1.266 -1.068,-2.651 -1.068,-4.155 0,-1.741 0.488,-3.171 1.464,-4.293 m 9.892,-4.253 0.474,2.968 c -0.844,-1.108 -1.899,-1.986 -3.165,-2.631 -1.266,-0.647 -2.704,-0.969 -4.313,-0.969 -1.53,0 -2.902,0.369 -4.115,1.107 -1.214,0.738 -2.163,1.767 -2.848,3.086 -0.687,1.319 -1.029,2.823 -1.029,4.51 0,2.111 0.507,4.083 1.523,5.916 1.016,1.833 2.347,3.29 3.996,4.372 1.648,1.081 3.357,1.622 5.124,1.622 3.297,0 5.553,-1.279 6.766,-3.837 l 1.781,11.157 h 3.521 l -4.313,-27.301 z m -28.8284,15.3321 c -1.253,-1.094 -2.104,-2.421 -2.552,-3.976 h 11.474 c 0.026,0.21 0.04,0.501 0.04,0.87 0,1.478 -0.395,2.638 -1.187,3.482 -0.792,0.844 -1.913,1.266 -3.363,1.266 -1.688,0 -3.159,-0.548 -4.412,-1.642 m 10.406,2.454 c 1.306,-1.439 1.958,-3.305 1.958,-5.6 0,-0.764 -0.039,-1.397 -0.118,-1.899 -0.079,-0.501 -0.212,-1.095 -0.396,-1.78 h -14.877 c -0.079,-1.979 0.435,-3.502 1.543,-4.57 1.108,-1.068 2.612,-1.602 4.511,-1.602 1.319,0 2.519,0.164 3.601,0.494 1.081,0.33 2.149,0.824 3.205,1.484 l -0.476,-2.968 c -2.031,-1.371 -4.431,-2.057 -7.201,-2.057 -1.82,0 -3.396,0.39 -4.728,1.167 -1.332,0.777 -2.348,1.854 -3.046,3.225 -0.699,1.371 -1.049,2.914 -1.049,4.629 0,1.688 0.422,3.435 1.266,5.243 0.845,1.806 2.124,3.323 3.839,4.55 1.714,1.226 3.824,1.84 6.33,1.84 2.453,0 4.333,-0.719 5.638,-2.156 m -18.0138,-1.4448 c -1.556,0 -2.875,-0.561 -3.956,-1.681 -1.082,-1.122 -1.794,-2.751 -2.137,-4.888 l -1.543,-9.772 h -3.522 l 3.047,19.308 h 3.403 l -0.515,-3.283 c 1.583,2.268 3.483,3.402 5.698,3.402 0.554,0 1.068,-0.039 1.543,-0.119 l -0.475,-3.086 c -0.474,0.079 -0.989,0.119 -1.543,0.119 m -24.5657,-1.0092 c -1.253,-1.094 -2.104,-2.421 -2.552,-3.976 h 11.474 c 0.026,0.21 0.04,0.501 0.04,0.87 0,1.478 -0.396,2.638 -1.187,3.482 -0.792,0.844 -1.913,1.266 -3.363,1.266 -1.689,0 -3.159,-0.548 -4.412,-1.642 m 10.406,2.454 c 1.305,-1.439 1.958,-3.305 1.958,-5.6 0,-0.764 -0.039,-1.397 -0.118,-1.899 -0.079,-0.501 -0.212,-1.095 -0.396,-1.78 h -14.877 c -0.079,-1.979 0.435,-3.502 1.543,-4.57 1.108,-1.068 2.612,-1.602 4.511,-1.602 1.319,0 2.519,0.164 3.601,0.494 1.081,0.33 2.149,0.824 3.204,1.484 l -0.475,-2.968 c -2.031,-1.371 -4.431,-2.057 -7.201,-2.057 -1.82,0 -3.396,0.39 -4.728,1.167 -1.332,0.777 -2.348,1.854 -3.046,3.225 -0.699,1.371 -1.049,2.914 -1.049,4.629 0,1.688 0.422,3.435 1.266,5.243 0.844,1.806 2.124,3.323 3.838,4.55 1.715,1.226 3.824,1.84 6.331,1.84 2.453,0 4.333,-0.719 5.638,-2.156 m -24.4869,-17.7856 h -3.561 l -2.057,14.837 -6.766,-14.837 h -3.522 l -2.77,19.308 h 3.522 l 1.741,-15.193 6.805,15.193 h 3.324 l 2.017,-15.154 6.529,15.154 h 3.6 z M -59.063,-65.225 c -1.201,-0.778 -2.124,-1.807 -2.77,-3.086 -0.647,-1.28 -0.969,-2.619 -0.969,-4.017 0,-1.741 0.494,-3.171 1.484,-4.292 0.988,-1.122 2.261,-1.682 3.817,-1.682 1.53,0 2.889,0.402 4.076,1.207 1.187,0.805 2.11,1.852 2.769,3.146 0.659,1.292 0.99,2.637 0.99,4.035 0,1.715 -0.495,3.12 -1.484,4.215 -0.989,1.093 -2.262,1.641 -3.818,1.641 -1.53,0 -2.896,-0.389 -4.095,-1.167 M -50.28,-62 c 1.332,-0.766 2.368,-1.827 3.106,-3.185 0.738,-1.359 1.108,-2.896 1.108,-4.61 0,-1.952 -0.482,-3.825 -1.444,-5.618 -0.963,-1.794 -2.321,-3.251 -4.075,-4.372 -1.755,-1.122 -3.766,-1.682 -6.034,-1.682 -1.688,0 -3.199,0.383 -4.531,1.148 -1.331,0.764 -2.374,1.833 -3.125,3.205 -0.752,1.37 -1.128,2.914 -1.128,4.628 0,1.979 0.481,3.859 1.444,5.639 0.963,1.781 2.321,3.224 4.076,4.332 1.753,1.108 3.764,1.663 6.033,1.663 1.715,0 3.238,-0.383 4.57,-1.148 m -20.7559,4.1545 c -0.897,0.87 -2.255,1.305 -4.075,1.305 h -4.471 l -1.82,-11.513 h 4.668 c 2.401,0 4.175,0.639 5.322,1.919 1.148,1.279 1.721,2.894 1.721,4.847 0,1.424 -0.448,2.571 -1.345,3.442 m 3.027,2.373 c 1.464,-1.318 2.196,-3.112 2.196,-5.38 0,-3.113 -0.944,-5.599 -2.829,-7.459 -1.887,-1.859 -4.715,-2.789 -8.487,-2.789 h -4.748 l -1.543,-9.694 h -3.759 l 4.313,27.301 h 8.309 c 2.901,0 5.084,-0.66 6.548,-1.979"
						}))));
					default:
						return ko("svg", {
							width: "100",
							height: "32",
							viewBox: "0 0 95 32",
							preserveAspectRatio: "xMinYMin meet",
							xmlns: "http://www.w3.org/2000/svg"
						}, ko("path", {
							fill: r,
							d: "M 52.732 6.347 C 52.83 5.963 53.122 5.675 53.512 5.675 L 60.626 5.675 C 66.571 5.675 70.664 10.187 69.69 15.851 C 68.813 21.515 63.16 25.931 57.313 25.931 L 50.004 25.931 C 49.711 25.931 49.516 25.739 49.614 25.451 L 52.732 6.347 Z M 55.753 21.515 L 57.02 21.515 C 60.236 21.515 63.355 19.787 64.037 15.851 C 64.622 12.203 62.478 10.187 58.97 10.187 L 57.995 10.187 C 57.8 10.187 57.605 10.283 57.605 10.475 L 55.753 21.515 Z"
						}), ko("path", {
							fill: r,
							d: "M 43.571 10.763 L 43.084 13.547 L 48.737 13.547 C 49.029 13.547 49.224 13.739 49.224 14.027 L 48.639 17.387 C 48.542 17.771 48.249 17.963 47.859 17.963 L 42.987 17.963 C 42.597 17.963 42.304 18.251 42.207 18.635 L 41.72 21.515 L 47.762 21.515 C 48.054 21.515 48.249 21.707 48.152 21.995 L 47.665 25.355 C 47.567 25.643 47.275 25.931 46.885 25.931 L 36.067 25.931 C 35.775 25.931 35.58 25.643 35.58 25.451 L 38.699 6.347 C 38.796 5.963 39.186 5.675 39.478 5.675 L 50.393 5.675 C 50.588 5.675 50.881 5.963 50.783 6.155 L 50.296 9.515 C 50.198 9.899 49.906 10.091 49.516 10.091 L 44.254 10.091 C 43.864 10.187 43.571 10.379 43.571 10.763 Z"
						}), ko("path", {
							fill: r,
							d: "M 74.563 25.931 L 70.274 25.931 C 69.982 25.931 69.787 25.739 69.787 25.451 L 73.003 6.347 C 73.003 5.963 73.393 5.675 73.685 5.675 L 78.071 5.675 C 78.266 5.675 78.558 5.963 78.461 6.251 L 75.342 25.355 C 75.245 25.643 74.952 25.931 74.563 25.931 Z"
						}), ko("path", {
							fill: r,
							d: "M 34.118 25.931 L 28.466 25.931 C 28.173 25.931 27.978 25.835 27.881 25.643 L 24.178 18.155 L 24.08 18.155 L 22.911 25.451 C 22.813 25.739 22.618 25.931 22.326 25.931 L 17.843 25.931 C 17.551 25.931 17.356 25.739 17.453 25.451 L 20.572 6.251 C 20.669 5.963 20.864 5.675 21.156 5.675 L 28.855 5.675 C 33.046 5.675 35.97 7.595 35.288 11.915 C 34.8 14.699 32.754 17.195 29.635 17.675 L 34.508 25.355 C 34.703 25.547 34.411 25.931 34.118 25.931 Z M 24.665 14.795 L 25.152 14.795 C 27.004 14.795 29.05 14.411 29.44 12.203 C 29.83 10.091 28.661 9.707 26.711 9.707 L 25.932 9.707 C 25.639 9.707 25.445 9.899 25.445 10.091 L 24.665 14.795 Z"
						}), ko("path", {
							fill: r,
							d: "M 86.16 25.931 L 81.872 25.931 C 81.579 25.931 81.384 25.739 81.482 25.451 L 83.918 10.187 L 79.923 10.187 C 79.63 10.187 79.435 9.899 79.533 9.611 L 80.02 6.347 C 80.118 5.963 80.41 5.675 80.8 5.675 L 94.249 5.675 C 94.444 5.675 94.736 5.963 94.639 6.251 L 94.054 9.515 C 94.054 9.899 93.761 10.187 93.372 10.187 L 89.473 10.187 L 86.939 25.355 C 86.939 25.643 86.647 25.931 86.16 25.931 Z"
						}), ko("path", {
							fill: r,
							d: "M 17.648 11.435 C 17.648 11.819 17.161 12.011 16.868 11.723 C 15.894 10.763 14.529 10.283 13.068 10.283 C 9.657 10.283 7.025 12.779 6.441 15.851 C 5.953 19.019 7.902 21.323 11.313 21.323 C 12.678 21.323 14.237 20.843 15.407 19.979 C 15.796 19.787 16.284 20.075 16.186 20.459 L 15.407 25.067 C 15.309 25.355 15.114 25.547 14.822 25.643 C 13.165 26.123 11.898 26.507 10.339 26.507 C 1.178 26.507 -0.284 19.019 0.203 15.851 C 1.47 6.923 9.072 4.907 13.652 5.195 C 15.114 5.195 16.479 5.387 17.745 5.867 C 18.233 6.059 18.428 6.443 18.33 6.923 L 17.648 11.435 Z"
						}))
				}
			}
		})
	}(xi = {})[Li.DEFAULT] = {
		primary: "#c8036f",
		secondary: "#71706f"
	}, xi[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff"
	}, (Pi = {})[Li.DEFAULT] = {
		primary: "#ED1C24",
		secondary: "#ffffff",
		tertiary: "#003a7d"
	}, Pi[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff",
		tertiary: "#ffffff"
	}, (Fi = {})[Li.DEFAULT] = {
		primary: "#000000",
		secondary: "#cd0067",
		tertiary: "#ffffff"
	}, Fi[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff",
		tertiary: "#ffffff"
	}, (Mi = {})[Li.DEFAULT] = {
		primary: "#00C0EE",
		secondary: "#1a4b67"
	}, Mi[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff"
	}, (Ui = {})[Li.DEFAULT] = {
		primary: "#d03238",
		secondary: "#b3b1b1"
	}, Ui[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff"
	};
	var ji, Wi = ((Hi = {})[Li.DEFAULT] = {
		primary: "#003087",
		secondary: "#009cde"
	}, Hi[Li.BLUE] = {
		primary: "#003087",
		secondary: "#009cde"
	}, Hi[Li.WHITE] = {
		primary: "#ffffff",
		secondary: "#ffffff"
	}, Hi[Li.BLACK] = {
		primary: "#333030",
		secondary: "#636363"
	}, Hi);

	function zi(e) {
		var n = e.logoColor,
			t = Di(bi.PAYPAL, Wi, n),
			r = t.primary,
			o = t.secondary;
		return ko(Si, {
			name: bi.PAYPAL,
			logoColor: n,
			render: function() {
				return ko("svg", {
					width: "100",
					height: "32",
					viewBox: "0 0 100 32",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "xMinYMin meet"
				}, ko("path", {
					fill: r,
					d: "M 12 4.917 L 4.2 4.917 C 3.7 4.917 3.2 5.317 3.1 5.817 L 0 25.817 C -0.1 26.217 0.2 26.517 0.6 26.517 L 4.3 26.517 C 4.8 26.517 5.3 26.117 5.4 25.617 L 6.2 20.217 C 6.3 19.717 6.7 19.317 7.3 19.317 L 9.8 19.317 C 14.9 19.317 17.9 16.817 18.7 11.917 C 19 9.817 18.7 8.117 17.7 6.917 C 16.6 5.617 14.6 4.917 12 4.917 Z M 12.9 12.217 C 12.5 15.017 10.3 15.017 8.3 15.017 L 7.1 15.017 L 7.9 9.817 C 7.9 9.517 8.2 9.317 8.5 9.317 L 9 9.317 C 10.4 9.317 11.7 9.317 12.4 10.117 C 12.9 10.517 13.1 11.217 12.9 12.217 Z"
				}), ko("path", {
					fill: r,
					d: "M 35.2 12.117 L 31.5 12.117 C 31.2 12.117 30.9 12.317 30.9 12.617 L 30.7 13.617 L 30.4 13.217 C 29.6 12.017 27.8 11.617 26 11.617 C 21.9 11.617 18.4 14.717 17.7 19.117 C 17.3 21.317 17.8 23.417 19.1 24.817 C 20.2 26.117 21.9 26.717 23.8 26.717 C 27.1 26.717 29 24.617 29 24.617 L 28.8 25.617 C 28.7 26.017 29 26.417 29.4 26.417 L 32.8 26.417 C 33.3 26.417 33.8 26.017 33.9 25.517 L 35.9 12.717 C 36 12.517 35.6 12.117 35.2 12.117 Z M 30.1 19.317 C 29.7 21.417 28.1 22.917 25.9 22.917 C 24.8 22.917 24 22.617 23.4 21.917 C 22.8 21.217 22.6 20.317 22.8 19.317 C 23.1 17.217 24.9 15.717 27 15.717 C 28.1 15.717 28.9 16.117 29.5 16.717 C 30 17.417 30.2 18.317 30.1 19.317 Z"
				}), ko("path", {
					fill: r,
					d: "M 55.1 12.117 L 51.4 12.117 C 51 12.117 50.7 12.317 50.5 12.617 L 45.3 20.217 L 43.1 12.917 C 43 12.417 42.5 12.117 42.1 12.117 L 38.4 12.117 C 38 12.117 37.6 12.517 37.8 13.017 L 41.9 25.117 L 38 30.517 C 37.7 30.917 38 31.517 38.5 31.517 L 42.2 31.517 C 42.6 31.517 42.9 31.317 43.1 31.017 L 55.6 13.017 C 55.9 12.717 55.6 12.117 55.1 12.117 Z"
				}), ko("path", {
					fill: o,
					d: "M 67.5 4.917 L 59.7 4.917 C 59.2 4.917 58.7 5.317 58.6 5.817 L 55.5 25.717 C 55.4 26.117 55.7 26.417 56.1 26.417 L 60.1 26.417 C 60.5 26.417 60.8 26.117 60.8 25.817 L 61.7 20.117 C 61.8 19.617 62.2 19.217 62.8 19.217 L 65.3 19.217 C 70.4 19.217 73.4 16.717 74.2 11.817 C 74.5 9.717 74.2 8.017 73.2 6.817 C 72 5.617 70.1 4.917 67.5 4.917 Z M 68.4 12.217 C 68 15.017 65.8 15.017 63.8 15.017 L 62.6 15.017 L 63.4 9.817 C 63.4 9.517 63.7 9.317 64 9.317 L 64.5 9.317 C 65.9 9.317 67.2 9.317 67.9 10.117 C 68.4 10.517 68.5 11.217 68.4 12.217 Z"
				}), ko("path", {
					fill: o,
					d: "M 90.7 12.117 L 87 12.117 C 86.7 12.117 86.4 12.317 86.4 12.617 L 86.2 13.617 L 85.9 13.217 C 85.1 12.017 83.3 11.617 81.5 11.617 C 77.4 11.617 73.9 14.717 73.2 19.117 C 72.8 21.317 73.3 23.417 74.6 24.817 C 75.7 26.117 77.4 26.717 79.3 26.717 C 82.6 26.717 84.5 24.617 84.5 24.617 L 84.3 25.617 C 84.2 26.017 84.5 26.417 84.9 26.417 L 88.3 26.417 C 88.8 26.417 89.3 26.017 89.4 25.517 L 91.4 12.717 C 91.4 12.517 91.1 12.117 90.7 12.117 Z M 85.5 19.317 C 85.1 21.417 83.5 22.917 81.3 22.917 C 80.2 22.917 79.4 22.617 78.8 21.917 C 78.2 21.217 78 20.317 78.2 19.317 C 78.5 17.217 80.3 15.717 82.4 15.717 C 83.5 15.717 84.3 16.117 84.9 16.717 C 85.5 17.417 85.7 18.317 85.5 19.317 Z"
				}), ko("path", {
					fill: o,
					d: "M 95.1 5.417 L 91.9 25.717 C 91.8 26.117 92.1 26.417 92.5 26.417 L 95.7 26.417 C 96.2 26.417 96.7 26.017 96.8 25.517 L 100 5.617 C 100.1 5.217 99.8 4.917 99.4 4.917 L 95.8 4.917 C 95.4 4.917 95.2 5.117 95.1 5.417 Z"
				}))
			}
		})
	}

	function Zi(e) {
		var n = e.logoColor;
		return ko(Si, {
			name: bi.PP,
			logoColor: n,
			render: function() {
				if (n === Li.BLUE) return ko("svg", {
					width: "24",
					height: "32",
					viewBox: "0 0 24 32",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "xMinYMin meet"
				}, ko("path", {
					fill: "#009cde",
					d: "M 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.7 C 18.564 3.3 16.411 2.6 13.697 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3.1 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 6.675 28.9 C 6.581 29.3 6.862 29.6 7.236 29.6 L 11.356 29.6 C 11.825 29.6 12.292 29.3 12.386 28.8 L 12.386 28.5 L 13.228 23.3 L 13.228 23.1 C 13.322 22.6 13.79 22.2 14.258 22.2 L 14.821 22.2 C 18.845 22.2 21.935 20.5 22.871 15.5 C 23.339 13.4 23.153 11.7 22.029 10.5 C 21.748 10.1 21.279 9.8 20.905 9.5 L 20.905 9.5"
				}), ko("path", {
					fill: "#012169",
					d: "M 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.7 C 18.564 3.3 16.411 2.6 13.697 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3.1 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 8.267 18.4 L 8.173 18.7 C 8.267 18.1 8.735 17.7 9.296 17.7 L 11.636 17.7 C 16.224 17.7 19.782 15.7 20.905 10.1 C 20.812 9.8 20.905 9.7 20.905 9.5"
				}), ko("path", {
					fill: "#003087",
					d: "M 9.485 9.5 C 9.577 9.2 9.765 8.9 10.046 8.7 C 10.232 8.7 10.326 8.6 10.513 8.6 L 16.692 8.6 C 17.442 8.6 18.189 8.7 18.753 8.8 C 18.939 8.8 19.127 8.8 19.314 8.9 C 19.501 9 19.688 9 19.782 9.1 C 19.875 9.1 19.968 9.1 20.063 9.1 C 20.343 9.2 20.624 9.4 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.6 C 18.658 3.2 16.506 2.6 13.79 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 8.267 18.4 L 9.485 9.5 Z"
				}));
				if (n === Li.WHITE) return ko("svg", {
					width: "24",
					height: "32",
					viewBox: "0 0 24 32",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "xMinYMin meet"
				}, ko("path", {
					fill: "#ffffff",
					opacity: "0.7",
					d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 6.378 28.938 C 6.285 29.238 6.659 29.638 6.94 29.638 L 11.153 29.638 C 11.621 29.638 11.995 29.238 12.089 28.739 L 12.182 28.539 L 12.931 23.341 L 13.025 23.041 C 13.119 22.441 13.493 22.141 13.961 22.141 L 14.616 22.141 C 18.642 22.141 21.731 20.342 22.668 15.443 C 23.042 13.344 22.855 11.545 21.825 10.345 C 21.451 10.046 21.076 9.646 20.702 9.446 L 20.702 9.446"
				}), ko("path", {
					fill: "#ffffff",
					opacity: "0.7",
					d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 7.876 18.642 C 8.063 18.043 8.438 17.643 9.093 17.643 L 11.433 17.643 C 16.021 17.643 19.578 15.643 20.608 9.946 C 20.608 9.746 20.608 9.546 20.702 9.446"
				}), ko("path", {
					fill: "#ffffff",
					d: "M 9.28 9.446 C 9.28 9.146 9.468 8.846 9.842 8.646 C 9.936 8.646 10.123 8.546 10.216 8.546 L 16.489 8.546 C 17.238 8.546 17.893 8.646 18.548 8.746 C 18.736 8.746 18.829 8.746 19.11 8.846 C 19.204 8.946 19.391 8.946 19.578 9.046 C 19.672 9.046 19.672 9.046 19.859 9.146 C 20.14 9.246 20.421 9.346 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.648 C 18.361 3.248 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 3.048 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 9.28 9.446 Z"
				}), ko("g", {
					transform: "matrix(0.497737, 0, 0, 0.52612, 1.10144, 0.638654)",
					opacity: "0.2"
				}, ko("path", {
					fill: "#231f20",
					d: "M39.3 16.7c0.9 0.5 1.7 1.1 2.3 1.8 1 1.1 1.6 2.5 1.9 4.1 0.3-3.2-0.2-5.8-1.9-7.8-0.6-0.7-1.3-1.2-2.1-1.7C39.5 14.2 39.5 15.4 39.3 16.7z"
				}), ko("path", {
					fill: "#231f20",
					d: "M0.4 45.2L6.7 5.6C6.8 4.5 7.8 3.7 8.9 3.7h16c5.5 0 9.8 1.2 12.2 3.9 1.2 1.4 1.9 3 2.2 4.8 0.4-3.6-0.2-6.1-2.2-8.4C34.7 1.2 30.4 0 24.9 0H8.9c-1.1 0-2.1 0.8-2.3 1.9L0 44.1C0 44.5 0.1 44.9 0.4 45.2z"
				}), ko("path", {
					fill: "#231f20",
					d: "M10.7 49.4l-0.1 0.6c-0.1 0.4 0.1 0.8 0.4 1.1l0.3-1.7H10.7z"
				})));
				if (n === Li.BLACK) return ko("svg", {
					width: "24",
					height: "32",
					viewBox: "0 0 24 32",
					preserveAspectRatio: "xMinYMin meet",
					xmlns: "http://www.w3.org/2000/svg"
				}, ko("path", {
					opacity: "0.7",
					d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 6.378 28.938 C 6.285 29.238 6.659 29.638 6.94 29.638 L 11.153 29.638 C 11.621 29.638 11.995 29.238 12.089 28.739 L 12.182 28.539 L 12.931 23.341 L 13.025 23.041 C 13.119 22.441 13.493 22.141 13.961 22.141 L 14.616 22.141 C 18.642 22.141 21.731 20.342 22.668 15.443 C 23.042 13.344 22.855 11.545 21.825 10.345 C 21.451 10.046 21.076 9.646 20.702 9.446 L 20.702 9.446",
					fill: "rgb(99, 99, 99)"
				}), ko("path", {
					opacity: "0.7",
					d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 7.876 18.642 C 8.063 18.043 8.438 17.643 9.093 17.643 L 11.433 17.643 C 16.021 17.643 19.578 15.643 20.608 9.946 C 20.608 9.746 20.608 9.546 20.702 9.446"
				}), ko("path", {
					d: "M 9.28 9.446 C 9.28 9.146 9.468 8.846 9.842 8.646 C 9.936 8.646 10.123 8.546 10.216 8.546 L 16.489 8.546 C 17.238 8.546 17.893 8.646 18.548 8.746 C 18.736 8.746 18.829 8.746 19.11 8.846 C 19.204 8.946 19.391 8.946 19.578 9.046 C 19.672 9.046 19.672 9.046 19.859 9.146 C 20.14 9.246 20.421 9.346 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.648 C 18.361 3.248 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 3.048 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 9.28 9.446 Z",
					fill: "rgb(51, 48, 48)"
				}), ko("g", {
					transform: "matrix(0.497737, 0, 0, 0.52612, 1.10144, 0.638654)",
					opacity: "0.2"
				}, ko("path", {
					fill: "#231f20",
					d: "M39.3 16.7c0.9 0.5 1.7 1.1 2.3 1.8 1 1.1 1.6 2.5 1.9 4.1 0.3-3.2-0.2-5.8-1.9-7.8-0.6-0.7-1.3-1.2-2.1-1.7C39.5 14.2 39.5 15.4 39.3 16.7z"
				}), ko("path", {
					fill: "#231f20",
					d: "M0.4 45.2L6.7 5.6C6.8 4.5 7.8 3.7 8.9 3.7h16c5.5 0 9.8 1.2 12.2 3.9 1.2 1.4 1.9 3 2.2 4.8 0.4-3.6-0.2-6.1-2.2-8.4C34.7 1.2 30.4 0 24.9 0H8.9c-1.1 0-2.1 0.8-2.3 1.9L0 44.1C0 44.5 0.1 44.9 0.4 45.2z"
				}), ko("path", {
					fill: "#231f20",
					d: "M10.7 49.4l-0.1 0.6c-0.1 0.4 0.1 0.8 0.4 1.1l0.3-1.7H10.7z"
				})));
				throw new Error("No " + n + " paypal logo available")
			}
		})
	}
	var Vi, Gi, Yi, Ki, qi = ((ji = {})[Li.DEFAULT] = {
		main: "#005DA0",
		card: "#AEB1BC"
	}, ji[Li.WHITE] = {
		main: "#FFFFFF",
		card: "#FFFFFF"
	}, ji);

	function Ji(e) {
		var n = e.logoColor,
			t = Di(bi.SEPA, qi, n),
			r = t.main,
			o = t.card;
		return ko(Si, {
			name: bi.SEPA,
			logoColor: n,
			render: function() {
				return ko("svg", {
					width: "100",
					height: "32",
					viewBox: "0 0 100 32",
					preserveAspectRatio: "xMinYMin meet",
					xmlns: "http://www.w3.org/2000/svg"
				}, ko("path", {
					fill: r,
					d: "M 39.871 18.772 C 37.78 18.772 35.843 18.278 34.272 17.425 L 34.81 13.935 C 36.409 14.769 38.051 15.263 39.826 15.263 C 41.809 15.263 42.661 14.544 42.661 13.284 C 42.661 10.45 34.34 11.641 34.34 5.59 C 34.34 2.53 36.319 0.055 40.885 0.055 C 42.639 0.055 44.549 0.416 45.946 0.999 L 45.474 4.395 C 43.989 3.926 42.481 3.633 41.108 3.633 C 38.86 3.633 38.275 4.395 38.275 5.364 C 38.275 8.175 46.598 6.895 46.598 13.013 C 46.576 16.569 44.101 18.772 39.871 18.772 Z"
				}), ko("path", {
					fill: r,
					d: "M 62.233 14.881 L 62.233 18.413 L 49.951 18.413 L 49.951 0.345 L 62.233 0.345 L 62.233 3.946 L 54.022 3.946 L 54.022 7.549 L 60.705 7.549 L 60.705 10.787 L 54.022 10.787 L 54.022 14.905 L 62.233 14.905 Z"
				}), ko("path", {
					fill: r,
					d: "M 72.313 12.565 L 69.905 12.565 L 69.905 18.437 L 65.834 18.437 L 65.834 0.345 L 72.313 0.345 C 77.328 0.345 79.376 2.328 79.376 6.534 C 79.376 10.361 77.355 12.565 72.313 12.565 Z M 72.313 3.766 L 69.905 3.766 L 69.905 9.302 L 72.313 9.302 C 74.314 9.302 75.194 8.808 75.194 6.534 C 75.194 4.352 74.428 3.766 72.313 3.766 Z"
				}), ko("path", {
					fill: r,
					d: "M 91.797 14.924 L 85.246 14.924 L 84.234 18.437 L 79.939 18.437 L 86.193 0.345 L 91.031 0.345 L 97.352 18.437 L 92.808 18.437 L 91.797 14.924 Z M 88.04 5.318 L 86.238 11.506 L 90.85 11.506 L 89.118 5.318 L 88.645 3.408 L 88.578 3.408 L 88.04 5.318 Z"
				}), ko("path", {
					fill: r,
					d: "M 39.736 30.157 L 39.692 31.867 L 34.382 31.867 L 34.382 23.475 L 36.299 23.475 L 36.299 30.157 L 39.736 30.157 Z"
				}), ko("path", {
					fill: r,
					d: "M 44.798 31.215 L 44.778 31.215 C 44.371 31.71 43.722 31.977 42.931 31.977 C 41.648 31.977 40.818 31.257 40.818 29.727 C 40.818 28.468 41.695 27.613 43.222 27.613 C 43.722 27.613 44.168 27.68 44.527 27.796 L 44.527 27.411 C 44.527 26.736 44.168 26.421 43.244 26.421 C 42.505 26.421 42.007 26.534 41.382 26.782 L 41.245 25.387 C 41.919 25.095 42.707 24.936 43.563 24.936 C 45.563 24.936 46.263 25.792 46.263 27.658 L 46.263 31.867 L 44.933 31.867 L 44.798 31.215 Z M 44.549 28.966 C 44.393 28.896 44.056 28.828 43.583 28.828 C 42.819 28.828 42.46 29.12 42.46 29.727 C 42.46 30.38 42.842 30.63 43.427 30.63 C 44.012 30.63 44.549 30.271 44.549 29.842 L 44.549 28.966 Z"
				}), ko("path", {
					fill: r,
					d: "M 50.02 32.002 C 49.21 32.002 48.466 31.842 47.883 31.529 L 48.062 30.088 C 48.625 30.405 49.41 30.561 49.996 30.561 C 50.693 30.561 50.986 30.29 50.986 29.887 C 50.986 28.807 47.84 29.436 47.84 27.051 C 47.84 25.838 48.667 24.959 50.403 24.959 C 51.075 24.959 51.752 25.095 52.336 25.32 L 52.201 26.736 C 51.64 26.512 50.897 26.396 50.381 26.396 C 49.816 26.396 49.503 26.625 49.503 26.961 C 49.503 27.995 52.603 27.366 52.603 29.707 C 52.603 31.101 51.862 32.002 50.02 32.002 Z"
				}), ko("path", {
					fill: r,
					d: "M 56.026 26.375 L 56.026 29.842 C 56.026 30.36 56.295 30.582 56.836 30.582 C 57.014 30.582 57.239 30.561 57.374 30.514 L 57.464 31.776 C 57.239 31.888 56.789 31.956 56.295 31.956 C 54.946 31.956 54.27 31.169 54.27 29.887 L 54.27 26.352 L 53.506 26.352 L 53.506 25.095 L 54.337 25.095 L 54.631 23.562 L 56.002 23.451 L 56.002 25.116 L 57.51 25.116 L 57.51 26.421 L 56.026 26.421 Z"
				}), ko("path", {
					fill: r,
					d: "M 60.885 32.002 C 60.073 32.002 59.331 31.842 58.748 31.529 L 58.929 30.088 C 59.49 30.405 60.275 30.561 60.862 30.561 C 61.561 30.561 61.851 30.29 61.851 29.887 C 61.851 28.807 58.702 29.436 58.702 27.051 C 58.702 25.838 59.534 24.959 61.269 24.959 C 61.943 24.959 62.615 25.095 63.203 25.32 L 63.069 26.736 C 62.505 26.512 61.764 26.396 61.246 26.396 C 60.681 26.396 60.367 26.625 60.367 26.961 C 60.367 27.995 63.47 27.366 63.47 29.707 C 63.47 31.101 62.729 32.002 60.885 32.002 Z"
				}), ko("path", {
					fill: r,
					d: "M 69.365 26.736 C 69.028 26.625 68.603 26.534 68.22 26.534 C 66.958 26.534 66.53 27.051 66.53 28.49 C 66.53 29.954 67.116 30.514 68.174 30.514 C 68.623 30.514 69.05 30.425 69.41 30.271 L 69.525 31.616 C 69.119 31.867 68.511 32.002 67.792 32.002 C 65.787 32.002 64.732 30.854 64.732 28.49 C 64.732 26.242 65.653 24.981 67.835 24.981 C 68.397 24.981 69.05 25.095 69.479 25.276 L 69.365 26.736 Z"
				}), ko("path", {
					fill: r,
					d: "M 75.078 31.867 L 75.078 27.546 C 75.078 26.849 74.743 26.491 74.001 26.491 C 73.508 26.491 73.055 26.714 72.855 27.008 L 72.855 31.867 L 71.122 31.867 L 71.122 23.16 L 72.855 23.069 L 72.855 24.622 L 72.83 25.52 L 72.855 25.545 C 73.348 25.116 73.979 24.959 74.541 24.959 C 75.98 24.959 76.812 25.926 76.812 27.546 L 76.812 31.867 L 75.078 31.867 Z"
				}), ko("path", {
					fill: r,
					d: "M 78.658 31.867 L 78.658 25.139 L 80.052 25.072 L 80.21 26.199 L 80.231 26.199 C 80.66 25.387 81.313 24.981 82.098 24.981 C 82.39 24.981 82.663 25.028 82.84 25.072 L 82.731 26.782 C 82.528 26.714 82.257 26.667 81.985 26.667 C 81.088 26.667 80.413 27.321 80.413 28.468 L 80.413 31.867 L 78.658 31.867 Z"
				}), ko("path", {
					fill: r,
					d: "M 85.382 24.35 C 84.708 24.35 84.395 24.172 84.395 23.609 C 84.395 23.136 84.708 22.867 85.382 22.867 C 86.058 22.867 86.375 23.113 86.375 23.609 C 86.354 24.105 86.058 24.35 85.382 24.35 Z M 84.484 31.867 L 84.484 25.139 L 86.259 25.072 L 86.259 31.888 L 84.484 31.888 Z"
				}), ko("path", {
					fill: r,
					d: "M 88.757 31.867 L 88.757 26.375 L 87.902 26.375 L 87.902 25.095 L 88.757 25.095 L 88.757 24.798 C 88.757 23.79 89.454 22.935 91.076 22.935 C 91.459 22.935 91.885 22.979 92.178 23.069 L 92.063 24.195 C 91.863 24.147 91.636 24.126 91.411 24.126 C 90.738 24.126 90.466 24.399 90.466 24.825 L 90.466 25.072 L 91.907 25.072 L 91.907 26.352 L 90.466 26.352 L 90.466 31.842 L 88.757 31.842 Z"
				}), ko("path", {
					fill: r,
					d: "M 95.486 26.375 L 95.486 29.842 C 95.486 30.36 95.754 30.582 96.296 30.582 C 96.473 30.582 96.698 30.561 96.834 30.514 L 96.924 31.776 C 96.698 31.888 96.249 31.956 95.754 31.956 C 94.406 31.956 93.729 31.169 93.729 29.887 L 93.729 26.352 L 92.965 26.352 L 92.965 25.095 L 93.798 25.095 L 94.09 23.562 L 95.461 23.451 L 95.461 25.116 L 96.969 25.116 L 96.969 26.421 L 95.486 26.421 Z"
				}), ko("path", {
					fill: o,
					d: "M 20.357 8.826 L 15.368 5.081 L 10.379 1.334 C 10.033 1.074 9.54 1.146 9.281 1.493 L 4.883 7.322 C 4.811 7.409 4.768 7.51 4.754 7.624 C 4.68 7.93 4.782 8.248 5.043 8.45 L 8.022 10.677 L 12.042 13.698 L 15.021 15.926 C 15.281 16.13 15.629 16.13 15.888 15.97 C 15.991 15.912 16.062 15.854 16.136 15.752 L 20.531 9.91 C 20.763 9.578 20.706 9.087 20.357 8.826 Z M 10.047 1.769 L 13.012 3.995 L 13.012 3.995 L 15.021 5.5 L 17.046 7.017 L 17.046 7.017 L 20.025 9.245 C 20.142 9.332 20.156 9.491 20.082 9.607 L 19.374 10.591 L 16.005 8.058 L 12.36 5.326 L 8.976 2.809 L 9.684 1.826 C 9.772 1.709 9.931 1.682 10.047 1.769 Z M 15.673 15.463 C 15.629 15.507 15.585 15.536 15.528 15.55 C 15.469 15.564 15.398 15.55 15.339 15.507 L 12.345 13.265 L 8.34 10.257 L 5.361 8.001 C 5.302 7.958 5.275 7.9 5.259 7.842 C 5.259 7.785 5.259 7.726 5.302 7.669 L 6.113 6.585 C 6.113 6.585 7.009 5.427 7.791 4.386 L 11.16 6.917 L 14.804 9.65 L 18.173 12.181 C 17.393 13.222 16.496 14.379 16.496 14.379 L 15.673 15.463 Z"
				}), ko("g", {
					transform: "matrix(0.144619, 0, 0, 0.144619, -7.250457, -3.988513)"
				}, ko("path", {
					fill: r,
					d: "M197.1,150.4l52-69.6l5.3-7c0,0,0.1-0.2,0.2-0.2c0.4-0.5,0.3-1.2-0.2-1.6l-14.7-10.7 c-0.5-0.4-1.2-0.2-1.6,0.3c-0.1,0.1-0.2,0.2-0.2,0.2l-2,2.5l-64.3,86l-70.8,0l-26.5,87.4h177.1l-25-87.4L197.1,150.4z M79.1,234.3 l24.2-80.5l65.7,0l-5.7,7.6l-8.1,11.3l-0.9,1.7l-0.9,1.9l-0.9,2.2l-0.9,2.3l-0.9,2.5l-0.9,2.5l-0.8,2.5l-0.8,2.4l-0.7,2.3 l-0.7,2.1l-0.6,1.9l-0.4,1.6l-0.3,1.2l-0.3,0.7c0,0-0.1,0.2-0.2,0.4c-0.2,0.2-1.2,1.1-2,0.5c-0.8-0.6-0.7-2.6-0.6-3.6 c0.2-3,0.5-6,0.7-8.9c0.1-1-1.2-1.6-2-1.2c-3.6,2.1-5.8,4.6-7.8,7.5c0.2-0.7,0.4-1.4,0.6-2c0.8-3.1,2-6.2,2.5-9.4 c0.3-1.8-0.2-3.9-2.3-4.3c-2.4-0.4-3.9,2.1-5.1,3.7c-3.5,5-5.6,11.2-9.9,15.5c-1.6,1.6-3.5,2.8-5.8,2.1c-2.7-0.8-3.8,2.4,1,2.9 c4.7,0.4,8.3-4.6,10.4-8.1c1.6-2.5,2.9-5.2,4.5-7.8c0.7-1.2,1.5-2.4,2.3-3.6c0.4-0.5,1-1.8,1.7-2c0.8-0.2,0.6,0.3,0.6,0.9 c-0.1,1.5-0.7,3-1.1,4.5c-0.4,1.6-0.9,3.2-1.3,4.7c-0.9,3.4-1.8,6.8-2.8,10.1c-0.4,1.5,1.6,2.2,2.5,1c3.4-4.8,5.1-8.9,9.2-12.1 c-0.1,1.1-0.2,2.1-0.3,3.2c-0.1,1.7-0.5,3.6-0.4,5.3c0.2,2.9,2.4,4.8,5.1,3.6c1.4-0.7,2.4-1.7,2.4-1.7l0.2-0.1l0.6-0.4l1-0.7 l1.4-1l1.6-1.2l1.7-1.2l2.1-1.4l2.1-1.5l2.1-1.5l2.1-1.5l2-1.5l1.9-1.4l1.8-1.4l1.5-1.2l1.2-1.1l1-0.9l0-0.1l0,0l6.5-7.6 l16.6-22.1l29.4,0l22.9,80.5H79.1z"
				}), ko("path", {
					fill: r,
					d: "M261.1,77.1l-1.9-1.5c-0.4-0.3-0.9-0.2-1.2,0.2l-24.7,32.9c-0.3,0.4-0.2,0.9,0.2,1.2l1.9,1.5 c0.4,0.3,0.9,0.2,1.2-0.2l24.7-32.9C261.5,77.9,261.5,77.4,261.1,77.1z"
				}), ko("polygon", {
					fill: r,
					points: "161.7,217.2 210.9,217.2 209.9,213.3 161.7,213.3 113.6,213.3 112.5,217.2 \t\t"
				})))
			}
		})
	}(Vi = {})[Li.DEFAULT] = {
		primary: "#000000"
	}, Vi[Li.WHITE] = {
		primary: "#ffffff"
	}, (Gi = {})[Li.DEFAULT] = {
		primary: "#3D93CE"
	}, Gi[Li.BLUE] = {
		primary: "#3D93CE"
	}, Gi[Li.WHITE] = {
		primary: "#ffffff"
	}, (Yi = {})[Li.DEFAULT] = {
		primary: "#1AAD19",
		secondary: "#4D4D4D"
	}, Yi[Li.WHITE] = {
		primary: "#FFFFFF",
		secondary: "#FFFFFF"
	}, (Ki = {})[Li.DEFAULT] = {
		primary: "#00A599"
	}, Ki[Li.WHITE] = {
		primary: "#FFFFFF"
	};
	var Xi, Qi, $i = {
			de: {
				windowMessage: "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen",
				continueMessage: "Weiter"
			},
			en: {
				windowMessage: "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase",
				continueMessage: "Click to Continue"
			},
			zh: {
				windowMessage: "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款",
				continueMessage: "继续"
			},
			es: {
				windowMessage: "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra",
				continueMessage: "Continuar"
			},
			fr: {
				windowMessage: "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat",
				continueMessage: "Continuer"
			},
			ar: {
				windowMessage: "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك",
				continueMessage: "متابعة"
			},
			da: {
				windowMessage: "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale",
				continueMessage: "Fortsæt"
			},
			ru: {
				windowMessage: "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку",
				continueMessage: "Продолжить"
			},
			tr: {
				windowMessage: "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız",
				continueMessage: "Devam"
			},
			th: {
				windowMessage: "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย",
				continueMessage: "ดำเนินการต่อ"
			},
			sk: {
				windowMessage: "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť",
				continueMessage: "Pokračovať"
			},
			sv: {
				windowMessage: "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp",
				continueMessage: "Fortsätt"
			},
			pt: {
				windowMessage: "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra",
				continueMessage: "Continuar"
			},
			pl: {
				windowMessage: "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu",
				continueMessage: "Kontynuuj"
			},
			no: {
				windowMessage: "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet",
				continueMessage: "Fortsett"
			},
			nl: {
				windowMessage: "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien",
				continueMessage: "Doorgaan"
			},
			ko: {
				windowMessage: "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다",
				continueMessage: "계속"
			},
			ja: {
				windowMessage: "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします",
				continueMessage: "続行"
			},
			it: {
				windowMessage: "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto",
				continueMessage: "Continua"
			},
			he: {
				windowMessage: "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך",
				continueMessage: "המשך"
			},
			hu: {
				windowMessage: "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást",
				continueMessage: "Folytatás"
			},
			id: {
				windowMessage: "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda",
				continueMessage: "Lanjutkan"
			},
			el: {
				windowMessage: "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας",
				continueMessage: "Συνέχεια"
			},
			fi: {
				windowMessage: "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten",
				continueMessage: "Jatka"
			},
			cs: {
				windowMessage: "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit",
				continueMessage: "Pokračovat"
			}
		},
		ea = {
			OUTLET: "outlet",
			VISIBLE: "visible",
			INVISIBLE: "invisible",
			COMPONENT_FRAME: "component-frame",
			PRERENDER_FRAME: "prerender-frame"
		};

	function na(e) {
		var n, t = e.uid,
			r = e.tag,
			o = e.context,
			i = e.close,
			a = e.focus,
			s = e.doc,
			c = e.event,
			u = e.frame,
			l = e.prerenderFrame,
			p = $i[e.props.locale.lang],
			f = function(e) {
				return function(n) {
					c.on(so.DISPLAY, function() {
						return ln(n, "show-" + e, Ee)
					}), c.on(so.CLOSE, function() {
						return ln(n, "hide-" + e, Ee)
					})
				}
			};
		return u && l && (u.classList.add(ea.COMPONENT_FRAME), l.classList.add(ea.PRERENDER_FRAME), l.classList.add(ea.VISIBLE), u.classList.add(ea.INVISIBLE), c.on(so.RENDERED, function() {
			l.classList.remove(ea.VISIBLE), l.classList.add(ea.INVISIBLE), u.classList.remove(ea.INVISIBLE), u.classList.add(ea.VISIBLE), setTimeout(function() {
				dn(l)
			}, 1)
		}), n = ko("div", {
			class: ea.OUTLET,
			onRender: f("component")
		}, ko("node", {
			el: u
		}), ko("node", {
			el: l
		}))), ko("div", {
			id: t,
			onRender: f("container"),
			class: "paypal-checkout-sandbox"
		}, ko("style", null, function(e) {
			var n = e.uid;
			return "\n        #" + n + ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" + n + ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
		}({
			uid: t
		})), ko("iframe", {
			title: "PayPal Checkout Overlay",
			name: "__paypal_checkout_sandbox_" + t + "__",
			scrolling: "no",
			class: "paypal-checkout-sandbox-iframe"
		}, ko("html", null, ko("body", null, ko("div", {
			id: t,
			onClick: function(e) {
				e.preventDefault(), e.stopPropagation(), d() ? window.alert("Please switch tabs to reactivate the PayPal window") : a()
			},
			class: r + "-context-" + o + " paypal-checkout-overlay"
		}, ko("a", {
			href: "#",
			class: "paypal-checkout-close",
			onClick: function(e) {
				e.preventDefault(), e.stopPropagation(), i()
			},
			"aria-label": "close",
			role: "button"
		}), ko("div", {
			class: "paypal-checkout-modal"
		}, ko("div", {
			class: "paypal-checkout-logo"
		}, ko(Zi, {
			logoColor: Li.WHITE
		}), ko(zi, {
			logoColor: Li.WHITE
		})), ko("div", {
			class: "paypal-checkout-message"
		}, p.windowMessage), ko("div", {
			class: "paypal-checkout-continue"
		}, ko("a", {
			onClick: a,
			href: "#"
		}, p.continueMessage)), ko("div", {
			class: "paypal-checkout-loader"
		}, ko("div", {
			class: "paypal-spinner"
		}))), ko("div", {
			class: "paypal-checkout-iframe-container"
		}, n), ko("style", null, function(e) {
			var n = e.uid,
				t = e.tag;
			return "\n        #" + n + " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" + n + " a {\n            color: #fff;\n        }\n\n        #" + n + " .paypal-checkout-close:before,\n        #" + n + " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" + n + "." + t + "-context-" + oo.POPUP + " {\n            cursor: pointer;\n        }\n\n        #" + n + " a {\n            text-decoration: none;\n        }\n\n        #" + n + ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' + n + "." + t + "-loading .paypal-checkout-message, #" + n + "." + t + "-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" + n + "." + t + "-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-message, #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" + n + " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" + n + "." + t + "-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" + n + " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" + n + " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" + n + " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" + n + " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" + n + " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-iframe-container,\n        #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-iframe-container > ." + ea.OUTLET + ",\n        #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-iframe-container > ." + ea.OUTLET + " > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " > iframe." + ea.COMPONENT_FRAME + " {\n            z-index: 100;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " > iframe." + ea.PRERENDER_FRAME + " {\n            z-index: 200;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " > iframe." + ea.VISIBLE + " {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " > iframe." + ea.INVISIBLE + " {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" + n + "." + t + "-context-" + oo.IFRAME + " .paypal-checkout-iframe-container,\n            #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" + n + "." + t + "-context-" + oo.IFRAME + " ." + ea.OUTLET + " iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
		}({
			uid: t,
			tag: r
		}))))))).render(Vo({
			doc: s
		}))
	}

	function ta() {
		return he(ta, function() {
			var e = Lo({
				tag: "paypal-checkout",
				attributes: {
					iframe: {
						scrolling: "yes"
					}
				},
				defaultContext: f() ? oo.POPUP : oo.IFRAME,
				url: wi,
				domain: /\.paypal\.com(:\d+)?$/,
				logger: Lt(),
				validate: function() {
					p() && Lt().warn("checkout_render_intranet_mode")
				},
				prerenderTemplate: Ci,
				containerTemplate: na,
				props: {
					clientID: {
						type: "string",
						value: function() {
							return nt()
						},
						queryParam: !0
					},
					sessionID: {
						type: "string",
						value: function() {
							return Ei()
						},
						queryParam: !0
					},
					buttonSessionID: {
						type: "string",
						required: !1,
						default: function() {
							return mi()
						},
						queryParam: !0
					},
					env: {
						type: "string",
						queryParam: !0,
						value: function() {
							return "production"
						}
					},
					sdkMeta: {
						type: "string",
						queryParam: !0,
						value: function() {
							return At()
						}
					},
					nonce: {
						type: "string",
						required: !1,
						value: pt
					},
					meta: {
						type: "object",
						default: function() {
							return window.xprops && window.xprops.meta || {}
						}
					},
					buyerCountry: {
						type: "string",
						queryParam: !0,
						required: !1,
						default: st
					},
					locale: {
						type: "object",
						queryParam: "locale.x",
						allowDelegate: !0,
						queryValue: function(e) {
							var n = e.value;
							return n.lang + "_" + n.country
						},
						value: function() {
							return dt()
						}
					},
					createOrder: {
						type: "function",
						queryParam: "token",
						alias: "payment",
						queryValue: function(e) {
							return N.try(e.value)
						},
						decorate: function(e) {
							var n = e.value;
							return function(e, n) {
								var t = this;
								void 0 === n && (n = {});
								var r = new ce;

								function o() {
									for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
									var a = r.getOrSet(n.thisNamespace ? this : e, function() {
											return {}
										}),
										s = pe(o),
										c = n.time;
									if (a[s] && c && Date.now() - a[s].time < c && delete a[s], a[s]) return a[s].value;
									var u = Date.now(),
										l = e.apply(this, arguments);
									return a[s] = {
										time: u,
										value: l
									}, a[s].value
								}
								return o.reset = function() {
									r.delete(n.thisNamespace ? t : e)
								}, n.name && (o.displayName = n.name + ":memoized"), o
							}(function() {
								return N.try(n).then(function(e) {
									if (!e) throw new Error("No order id passed");
									return e
								})
							})
						}
					},
					xcomponent: {
						type: "string",
						queryParam: !0,
						value: function() {
							return "1"
						}
					},
					version: {
						type: "string",
						queryParam: !0,
						value: function() {
							return "5"
						}
					},
					commit: {
						type: "boolean",
						queryParam: !0,
						value: ot
					},
					fundingSource: {
						type: "string",
						queryParam: !0,
						default: function() {
							return jn.PAYPAL
						}
					},
					onApprove: {
						type: "function",
						alias: "onAuthorize",
						decorate: function(e) {
							var n = e.value,
								t = e.state,
								r = e.close,
								o = e.onError;
							return function(e, i) {
								return N.try(function() {
									return t.approved = !0, n(e, i)
								}).catch(function(e) {
									return o(e)
								}).finally(function() {
									return r()
								})
							}
						}
					},
					onShippingChange: {
						type: "function",
						required: !1
					},
					onAuth: {
						type: "function",
						required: !1,
						sameDomain: !0
					},
					accessToken: {
						type: "string",
						required: !1
					},
					onCancel: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.close,
								r = e.onError;
							return me(function(e, o) {
								return void 0 === o && (o = {}), N.try(function() {
									return n(e, o)
								}).catch(function(e) {
									return r(e)
								}).finally(function() {
									t()
								})
							})
						},
						default: function() {
							return Ee
						}
					},
					onClose: {
						type: "function",
						required: !1,
						allowDelegate: !0,
						decorate: function(e) {
							var n = e.value,
								t = e.props,
								r = e.state;
							return me(function(e) {
								for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
								return N.try(function() {
									return r.approved ? n.apply(void 0, i) : N.try(function() {
										return t.onCancel()
									}).then(function() {
										return n.apply(void 0, i)
									})
								})
							})
						},
						default: function() {
							return Ee
						}
					},
					onDisplay: {
						type: "function",
						required: !1,
						allowDelegate: !0,
						decorate: function(e) {
							var n = e.value;
							return me(function() {
								var e = this,
									t = arguments;
								return N.try(function() {
									return n.apply(e, t)
								})
							})
						},
						default: function() {
							return Ee
						}
					},
					test: {
						type: "object",
						default: function() {
							return window.__test__ || {
								action: "checkout"
							}
						}
					}
				},
				dimensions: u() ? {
					width: "100%",
					height: Ti.HEIGHT + "px"
				} : {
					width: Ti.WIDTH + "px",
					height: Ti.HEIGHT + "px"
				}
			});
			return e.isChild() && (window.xchild = {
				props: e.xprops,
				show: Ee,
				hide: Ee
			}), e
		})
	}
	var ra = {
			layouts: [ai.VERTICAL],
			platforms: [Bn.DESKTOP, Bn.MOBILE]
		},
		oa = {
			colors: [ti.SILVER, ti.BLACK, ti.WHITE],
			logoColors: (Xi = {}, Xi[ti.BLACK] = Li.WHITE, Xi[ti.WHITE] = Li.BLUE, Xi),
			shapes: [ii.PILL, ii.RECT],
			secondaryColors: (Qi = {}, Qi[fi] = ti.SILVER, Qi[ti.BLACK] = ti.BLACK, Qi[ti.WHITE] = ti.WHITE, Qi)
		};

	function ia(e, n) {
		return ko("span", {
			class: hi.TEXT
		}, n)
	}
	var aa, sa = function(e, n) {
			var t = e.logoColor;
			return ko(Bo, null, ko(Zi, {
				logoColor: t
			}), " ", ko(zi, {
				logoColor: t
			}), " ", ko(ia, null, n))
		},
		ca = {
			en: {
				checkout: "{pp} {paypal} Checkout",
				safer_tag: "The safer, easier way to pay",
				pay: "Pay with {paypal}",
				installment: function(e) {
					return ko(sa, {
						logoColor: e.logoColor
					}, " Interest free", ko("br", null), " payments")
				},
				installment_period: function(e) {
					var n = e.period;
					return ko(sa, {
						logoColor: e.logoColor
					}, " Pay up to ", n ? n.toString() : "", "x", ko("br", null), " without interest")
				},
				dual_tag: "Two easy ways to pay",
				buynow: "{pp} {paypal} Buy Now",
				poweredBy: "Powered by {paypal}"
			},
			fr: {
				checkout: "{pp} {paypal} Payer",
				safer_tag: "Votre réflexe sécurité pour payer en ligne",
				pay: "Payer avec {paypal}",
				buynow: "{pp} {paypal} Acheter",
				poweredBy: "Optimisé par {paypal}"
			},
			es: {
				checkout: "{pp} {paypal} Pagar",
				safer_tag: "La forma rápida y segura de pagar",
				pay: "Pagar con {paypal}",
				installment: function(e) {
					return ko(sa, {
						logoColor: e.logoColor
					}, " Pagos en", ko("br", null), " mensualidades")
				},
				installment_period: function(e) {
					var n = e.period;
					return ko(sa, {
						logoColor: e.logoColor
					}, " Pague hasta ", n ? n.toString() : "", "x", ko("br", null), " sin interés")
				},
				buynow: "{pp} {paypal} Comprar ahora",
				poweredBy: "Desarrollado por {paypal}"
			},
			zh: {
				checkout: "{pp} {paypal} 結帳",
				safer_tag: "更安全、更便捷的付款方式",
				pay: "用{paypal}付款",
				buynow: "{pp} {paypal} 立即购买",
				poweredBy: "技术支持提供方： {paypal}"
			},
			ar: {
				checkout: "السداد بواسطة {pp} {paypal}",
				safer_tag: "الطريقة الأسهل والأكثر أماناً في الدفع",
				pay: "دفع بواسطة {paypal}",
				buynow: "{pp} {paypal} شراء الآن",
				poweredBy: "مدعوم من {paypal}"
			},
			de: {
				checkout: "Direkt zu {pp} {paypal}",
				safer_tag: "Überall schnell und sicher bezahlen",
				pay: "Mit {paypal} zahlen",
				buynow: "{pp} {paypal} Jetzt kaufen",
				poweredBy: "Abgewickelt durch {paypal}"
			},
			nl: {
				checkout: "{pp} {paypal} Betalen",
				safer_tag: "De veiligere en snellere manier om te betalen",
				pay: "Betalen met {paypal}",
				buynow: "{pp} {paypal} Nu kopen",
				poweredBy: "Mogelijk gemaakt door {paypal}"
			},
			pt: {
				checkout: "{pp} {paypal} Checkout",
				safer_tag: "A maneira fácil e segura de pagar",
				pay: "Pague com {paypal}",
				installment: function(e) {
					return ko(sa, {
						logoColor: e.logoColor
					}, " Pagamentos", ko("br", null), " parcelados")
				},
				installment_period: function(e) {
					var n = e.period;
					return ko(sa, {
						logoColor: e.logoColor
					}, " Pague em até", ko("br", null), n ? n.toString() : "", "x sem juros")
				},
				buynow: "{pp} {paypal} Comprar agora",
				poweredBy: "Powered by {paypal}"
			},
			cs: {
				checkout: "Zaplatit přes {pp} {paypal}",
				safer_tag: "Jednodušší a bezpečnější způsob placení",
				pay: "Zaplatit přes {paypal}",
				buynow: "Koupit ihned přes {pp} {paypal}",
				poweredBy: "Využívá službu {paypal}"
			},
			da: {
				checkout: "{pp} {paypal} Betal",
				safer_tag: "Betal nemt og sikkert",
				pay: "Betal med {paypal}",
				buynow: "{pp} {paypal} Køb nu",
				poweredBy: "Leveret af {paypal}"
			},
			ru: {
				checkout: "{pp} {paypal} Оформить покупку",
				safer_tag: "Более безопасный и простой способ оплаты",
				pay: "Оплатить через {paypal}",
				buynow: "{pp} {paypal} Купить сейчас",
				poweredBy: "Обработано {paypal}"
			},
			fi: {
				checkout: "{pp} {paypal}-maksu",
				safer_tag: "Turvallisempi ja helpompi maksutapa",
				pay: "{paypal}-maksu",
				buynow: "{pp} {paypal} Osta nyt",
				poweredBy: "Palvelun tarjoaa {paypal}"
			},
			el: {
				checkout: "Ολοκλήρωση αγοράς μέσω {pp} {paypal}",
				safer_tag: "Ο ασφαλέστερος και ευκολότερος τρόπος πληρωμής",
				pay: "Πληρωμή μέσω {paypal}",
				buynow: "{pp} {paypal} Αγορά τώρα",
				poweredBy: "Με την υποστήριξη του {paypal}"
			},
			hu: {
				checkout: "{pp} {paypal}-fizetés",
				safer_tag: "Biztonságosabb, könnyebb fizetési mód",
				pay: "{paypal}-fizetés",
				buynow: "{pp} {paypal} Vásárlás",
				poweredBy: "Üzemeltető: {paypal}"
			},
			id: {
				checkout: "{pp} {paypal} Checkout",
				safer_tag: "Cara yang lebih mudah dan aman untuk membayar",
				pay: "Bayar dengan {paypal}",
				buynow: "{pp} {paypal} Beli Sekarang",
				poweredBy: "Ditunjang teknologi {paypal}"
			},
			he: {
				checkout: "{pp} {paypal} שלם",
				safer_tag: ".הדרך הקלה והבטוחה יותר לשלם",
				pay: "שלם באמצעות {paypal}‏",
				buynow: "{pp} {paypal} קנה עכשיו",
				poweredBy: "{paypal} מופעל על-ידי"
			},
			it: {
				checkout: "{pp} {paypal} Paga adesso",
				safer_tag: "Il modo rapido e sicuro per pagare",
				pay: "Paga con {paypal}",
				buynow: "{pp} {paypal} Paga adesso",
				poweredBy: "Con tecnologia {paypal}"
			},
			ja: {
				checkout: "{pp} {paypal}で支払う",
				safer_tag: "より安全・簡単にお支払い",
				pay: "{paypal}で支払う",
				buynow: "{pp} {paypal} 購入",
				poweredBy: "Powered by {paypal}"
			},
			ko: {
				checkout: "{pp} {paypal} 체크 아웃",
				safer_tag: "더 안전하고 빠른 결제 방법",
				pay: "{paypal}로 지불하기",
				buynow: "{pp} {paypal} 바로 구매",
				poweredBy: "제공: {paypal}"
			},
			no: {
				checkout: "{pp} {paypal} Betal",
				safer_tag: "En trygg og enkel betalingsmetode",
				pay: "Betal med {paypal}",
				buynow: "{pp} {paypal} Kjøp nå",
				poweredBy: "Leveres av {paypal}"
			},
			pl: {
				checkout: "{pp} {paypal} Do kasy",
				safer_tag: "Płać wygodnie i bezpiecznie",
				pay: "Zapłać z {paypal}",
				buynow: "{pp} {paypal} Kup teraz",
				poweredBy: "Powered by {paypal}"
			},
			sv: {
				checkout: "{pp} {paypal} Betala",
				safer_tag: "Ett tryggt och smidigt sätt att betala",
				pay: "Betala med {paypal}",
				buynow: "{pp} {paypal} Köp nu",
				poweredBy: "Tillhandahålls av {paypal}"
			},
			sk: {
				checkout: "Zaplatiť cez {pp} {paypal}",
				safer_tag: "Jednoduchší a bezpečnejší spôsob platby",
				pay: "Zaplatiť cez {paypal}",
				buynow: "{pp} {paypal} Kúpiť",
				poweredBy: "Používa technológiu {paypal}"
			},
			th: {
				checkout: "{pp} {paypal} ชำระเงิน",
				safer_tag: "วิธีชำระเงินที่ปลอดภัยและง่ายกว่า",
				pay: "ชำระเงินด้วย {paypal}",
				buynow: "{pp} {paypal} ซื้อทันที",
				poweredBy: "ให้บริการโดย {paypal}"
			},
			tr: {
				checkout: "{pp} {paypal} ile Satın Alın",
				safer_tag: "Ödeme yapmanın daha güvenli ve kolay yolu",
				pay: "{paypal} ile Öde",
				buynow: "{pp} {paypal} Hemen Satın Alın",
				poweredBy: "Çalıştıran {paypal}"
			}
		};

	function ua(e, n, t) {
		var r, o, i = void 0 === t ? {} : t,
			a = i.logoColor,
			s = i.period,
			c = ca[n.lang][e];
		return "string" == typeof c ? (r = {
			text: function(e) {
				return ko("span", {
					class: hi.TEXT
				}, e)
			},
			pp: function() {
				return ko(Zi, {
					logoColor: a
				})
			},
			paypal: function() {
				return ko(zi, {
					logoColor: a
				})
			}
		}, (o = [], c.replace(/(\{[a-z]+\})|([^{}]+)/g, function(e) {
			return o.push(e), ""
		}), o).map(function(e) {
			var n = e.match(/^{([a-z]+)}$/);
			return n ? r[n[1]]() : r.text ? r.text(e) : e
		}).filter(Boolean)) : ko(c, {
			logoColor: a,
			period: s
		})
	}

	function la(e) {
		var n = e.logoColor;
		return ko(Bo, null, ko(Zi, {
			logoColor: n
		}), " ", ko(zi, {
			logoColor: n
		}))
	}

	function da(e) {
		return ua("checkout", e.locale, {
			logoColor: e.logoColor
		})
	}

	function pa(e) {
		return ua("buynow", e.locale, {
			logoColor: e.logoColor
		})
	}

	function fa(e) {
		return ua("pay", e.locale, {
			logoColor: e.logoColor
		})
	}

	function ha(e) {
		var n = e.period;
		return ua(n ? "installment_period" : "installment", e.locale, {
			logoColor: e.logoColor,
			period: n
		})
	}

	function Ea(e) {
		return ua("safer_tag", e.locale)
	}

	function ma(e) {
		var n = e.locale;
		return ua(ca[n.lang].dual_tag ? "dual_tag" : "safer_tag", n)
	}
	var ga, ya, wa, va = h({}, oa, {
			colors: [ti.GOLD, ti.BLUE, ti.SILVER, ti.BLACK, ti.WHITE],
			logoColors: (aa = {}, aa[ti.GOLD] = Li.BLUE, aa[ti.SILVER] = Li.BLUE, aa[ti.BLUE] = Li.WHITE, aa[ti.BLACK] = Li.WHITE, aa[ti.WHITE] = Li.BLUE, aa),
			Tag: function(e) {
				return ko(e.multiple ? ma : Ea, {
					locale: e.locale
				})
			}
		}),
		_a = [jn.PAYPAL, jn.VENMO, jn.CREDIT, jn.IDEAL, jn.SEPA, jn.BANCONTACT, jn.GIROPAY, jn.EPS, jn.SOFORT, jn.MYBANK, jn.P24, jn.ZIMPLER, jn.WECHATPAY, jn.CARD];

	function Ta() {
		return he(Ta, function() {
			var e, n;
			return (e = {})[jn.PAYPAL] = h({}, ra, {
				defaultLabel: ni.PAYPAL,
				layouts: [ai.HORIZONTAL, ai.VERTICAL],
				labels: (n = {}, n[ni.PAYPAL] = h({}, va, {
					Label: la
				}), n[ni.CHECKOUT] = h({}, va, {
					Label: da
				}), n[ni.PAY] = h({}, va, {
					Label: fa
				}), n[ni.BUYNOW] = h({}, va, {
					Label: pa
				}), n[ni.INSTALLMENT] = h({}, va, {
					Label: ha
				}), n)
			}), e[jn.VENMO] = null, e[jn.CREDIT] = function() {
				var e, n, t;
				return h({}, ra, {
					defaultLabel: ni.CREDIT,
					layouts: [ai.HORIZONTAL, ai.VERTICAL],
					labels: (t = {}, t[ni.CREDIT] = h({}, oa, {
						Label: function(e) {
							var n = e.locale,
								t = e.logoColor;
							return n.country === On.DE ? ko(Bi, {
								logoColor: t,
								locale: n
							}) : ko(Bo, null, ko(Zi, {
								logoColor: t
							}), " ", ko(zi, {
								logoColor: t
							}), " ", ko(Bi, {
								logoColor: t,
								locale: n
							}))
						},
						colors: [ti.DARKBLUE, ti.BLACK, ti.WHITE],
						secondaryColors: h({}, oa.secondaryColors, (e = {}, e[fi] = ti.DARKBLUE, e)),
						logoColors: (n = {}, n[fi] = Li.WHITE, n[ti.WHITE] = Li.BLUE, n)
					}), t)
				})
			}(), e[jn.CARD] = null, e[jn.IDEAL] = null, e[jn.SEPA] = function() {
				var e;
				return h({}, ra, {
					layouts: [ai.VERTICAL],
					defaultLabel: ni.SEPA,
					labels: (e = {}, e[ni.SEPA] = h({}, oa, {
						Label: Ji
					}), e)
				})
			}(), e[jn.BANCONTACT] = null, e[jn.GIROPAY] = null, e[jn.SOFORT] = null, e[jn.EPS] = null, e[jn.MYBANK] = null, e[jn.P24] = null, e[jn.ZIMPLER] = null, e[jn.WECHATPAY] = null, e
		})
	}
	var Na = ((ga = {})[ai.HORIZONTAL] = ri.SMALL, ga[ai.VERTICAL] = ri.MEDIUM, ga),
		Ca = ((ya = {})[ai.HORIZONTAL] = ri.HUGE, ya[ai.VERTICAL] = ri.HUGE, ya),
		Ia = {
			TAGLINE: 50,
			VERTICAL_MARGIN: 30
		},
		Oa = ((wa = {})[ri.TINY] = {
			defaultWidth: 75,
			defaultHeight: 25,
			minWidth: 75,
			maxWidth: 150,
			minHeight: 25,
			maxHeight: 30
		}, wa[ri.SMALL] = {
			defaultWidth: 150,
			defaultHeight: 25,
			minWidth: 150,
			maxWidth: 200,
			minHeight: 25,
			maxHeight: 55
		}, wa[ri.MEDIUM] = {
			defaultWidth: 250,
			defaultHeight: 35,
			minWidth: 200,
			maxWidth: 300,
			minHeight: 35,
			maxHeight: 55
		}, wa[ri.LARGE] = {
			defaultWidth: 350,
			defaultHeight: 45,
			minWidth: 300,
			maxWidth: 500,
			minHeight: 30,
			maxHeight: 55
		}, wa[ri.HUGE] = {
			defaultWidth: 500,
			defaultHeight: 55,
			minWidth: 500,
			maxWidth: 750,
			minHeight: 40,
			maxHeight: 55
		}, wa),
		ba = {
			LABEL: ni.PAYPAL,
			LAYOUT: ai.VERTICAL,
			COLOR: ti.GOLD,
			SHAPE: ii.RECT
		},
		La = {
			LOCALE: {
				country: On.US,
				lang: bn.EN
			},
			COMMIT: !0,
			VAULT: !1,
			INTENT: kn.CAPTURE,
			ENV: xn.PRODUCTION,
			PLATFORM: Bn.DESKTOP
		};

	function Aa(e) {
		if (!e) throw new Error("Expected props.style to be set");
		var n = e.label,
			t = void 0 === n ? ba.LABEL : n,
			r = e.layout,
			o = void 0 === r ? ba.LAYOUT : r,
			i = e.color,
			a = void 0 === i ? ba.COLOR : i,
			s = e.shape,
			c = void 0 === s ? ba.SHAPE : s,
			u = e.tagline,
			l = void 0 === u ? o === ai.HORIZONTAL : u,
			d = e.height,
			p = e.period;
		if (-1 === ve(ai).indexOf(o)) throw new Error("Invalid layout: " + o);
		var f = Ta()[jn.PAYPAL];
		if (!f) throw new Error("Expected " + jn.PAYPAL + " to be eligible");
		var h = f.labels[t];
		if (!h) throw new Error("Can not find label config for " + t);
		if (a && -1 === h.colors.indexOf(a)) throw new Error("Unexpected style.color for " + t + " button: " + a + ", expected " + h.colors.join(", "));
		if (c && -1 === h.shapes.indexOf(c)) throw new Error("Unexpected style.shape for " + t + " button: " + c + ", expected " + h.shapes.join(", "));
		if (void 0 !== d) {
			if ("number" != typeof d) throw new TypeError("Expected style.height to be a number, got: " + d);
			var E = [Oa[ri.SMALL].minHeight, Oa[ri.HUGE].maxHeight],
				m = E[0],
				g = E[1];
			if (d < m || d > g) throw new Error("Expected style.height to be between " + m + "px and " + g + "px - got " + d + "px")
		}
		if (o === ai.VERTICAL && l) throw new Error("style.tagline is not allowed for " + ai.VERTICAL + " layout");
		return {
			label: t,
			layout: o,
			color: a,
			shape: c,
			tagline: l,
			height: d,
			period: p
		}
	}
	var Ra = ve(On),
		Sa = ve(jn),
		Da = ve(xn),
		xa = ve(Bn),
		Pa = "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: center;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n    }\n",
		Fa = "\n\n    ." + hi.CONTAINER + ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;R\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' + hi.BUTTON + " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        outline: none;\n        overflow: hidden;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.TRANSPARENT + " {\n        cursor: auto;\n    }\n\n    ." + hi.BUTTON + " * {\n        cursor: pointer;\n    }\n\n    ." + hi.CONTAINER + "." + hi.ENV + "-" + xn.TEST + " ." + hi.TEXT + " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." + hi.BUTTON + ":hover {\n        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.GOLD + ":hover,\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.SILVER + ":hover {\n        box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.05);\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.TRANSPARENT + ":hover {\n        box-shadow: none;\n    }\n\n    ." + hi.CARD + " {\n        cursor: pointer;\n    }\n\n    ." + hi.CARD + ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." + hi.BUTTON + ":focus {\n        box-shadow: -1px -1px 18px 1px rgba(0, 0, 0, 0.25) inset;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.TRANSPARENT + ":focus {\n        box-shadow: none;\n    }\n\n    ." + Ai.LOGO + " {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." + hi.TEXT + " {\n        display: inline-block;\n        white-space: pre-wrap;\n    }\n\n    ." + hi.BUTTON + " ." + Ai.LOGO + ",\n    ." + hi.BUTTON + " ." + hi.TEXT + " {\n        vertical-align: top;\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        text-align: left;\n    }\n\n    ." + hi.BUTTON + " ." + hi.TEXT + " {\n        visibility: hidden;\n    }\n\n    ." + hi.TAGLINE + " {\n        max-width: 100%;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n        visibility: hidden;\n    }\n",
		Ma = "\n\n    ." + hi.BUTTON + "." + hi.LABEL + "-" + ni.CARD + " {\n        border-radius: 0 !important;\n    }\n\n    ." + hi.BUTTON + "." + hi.LABEL + "-" + ni.CREDIT + " ." + hi.TEXT + " {\n        display: none !important;\n    }\n\n    ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + "." + hi.LABEL + "-" + ni.CREDIT + " ." + Ai.LOGO + "." + Ai.LOGO + "-" + bi.PAYPAL + " {\n        display: none;\n    }\n\n    @media only screen and (max-width : " + Oa[ri.SMALL].minWidth + "px) {\n\n        ." + hi.BUTTON + "." + hi.LABEL + "-" + ni.CREDIT + " ." + Ai.LOGO + "." + Ai.LOGO + "-" + bi.PAYPAL + " {\n            display: none;\n        }\n    }\n\n    @media only screen and (min-width : " + Oa[ri.SMALL].minWidth + "px) {\n\n        ." + hi.BUTTON + "." + hi.LABEL + "-" + ni.CREDIT + " ." + Ai.LOGO + "." + Ai.LOGO + "-" + bi.PAYPAL + " {\n            display: inline-block;\n        }\n    }\n",
		Ua = 2.8,
		Ha = "\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.GOLD + " {\n        background: #ffc439;\n        color: #111;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.BLUE + " {\n        background: #009cde;\n        color: #fff;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.SILVER + " {\n        background: #eee;\n        color: #111;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.DARKBLUE + " {\n        background: #003087;\n        color: #fff;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.TRANSPARENT + " {\n        background: transparent;\n        color: #111;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.BLACK + " {\n        background: #2C2E2F;\n        color: #fff;\n    }\n\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.WHITE + " {\n        background: #fff;\n        color: #2C2E2F;\n    }\n\n    ." + hi.BUTTON + "." + hi.COLOR + "-" + ti.WHITE + ":not(." + hi.LABEL + "-" + ni.CARD + ") {\n        border: 1px solid #2C2E2F;\n    }\n";

	function ka(e) {
		var n = e.style;
		return [hi.LAYOUT + "-" + n.layout, hi.SHAPE + "-" + n.shape, hi.NUMBER + "-" + (e.multiple ? si.MULTIPLE : si.SINGLE), hi.ENV + "-" + e.env].join(" ")
	}

	function Ba(e) {
		var n, t = e.fundingSource,
			r = e.style,
			o = e.multiple,
			i = e.locale,
			a = e.env,
			s = e.fundingEligibility,
			c = e.i,
			u = e.nonce,
			l = e.onClick,
			d = void 0 === l ? Ee : l,
			p = r.color,
			f = r.period,
			E = function(e) {
				var n = e.fundingSource,
					t = e.style,
					r = Ta()[n];
				if (!r) throw new Error("Can not find config for " + n);
				var o = t.label;
				if (r.labels[o]) return o;
				if (r.defaultLabel) return r.defaultLabel;
				throw new Error("Could not determine label for " + n)
			}({
				fundingSource: t,
				style: r
			}),
			m = Ta()[t];
		if (!m) throw new Error("Can not find funding config for " + t);
		var g = m.labels[E];
		if (!g) throw new Error("Can not find label config for " + E);
		var y = g.secondaryColors || {};
		o && c > 0 && (p = y[p] || y[ti.DEFAULT] || g.colors[0]);
		var w, v = g.logoColors || {},
			_ = v[p] || v[Li.DEFAULT] || Li.DEFAULT,
			T = g.Label,
			N = function(e, n) {
				var r = (void 0 === n ? {} : n).card;
				e.preventDefault(), e.stopPropagation(), (t !== jn.CARD || r) && d({
					fundingSource: t,
					card: r
				})
			};
		return ko("div", h({}, ((n = {})[pi.FUNDING_SOURCE] = t, n[pi.BUTTON] = !0, n), {
			class: hi.BUTTON + " " + hi.NUMBER + "-" + c + " " + ka({
				style: r,
				multiple: o,
				env: a
			}) + " " + (w = {
				label: E,
				color: p,
				logoColor: _
			}, [hi.LABEL + "-" + w.label, hi.COLOR + "-" + w.color, Ai.LOGO_COLOR + "-" + w.logoColor].join(" ")),
			role: "button",
			"aria-label": t,
			onClick: N,
			tabindex: "0"
		}), ko(T, {
			nonce: u,
			locale: i,
			logoColor: _,
			period: f,
			multiple: o,
			fundingEligibility: s,
			onClick: N
		}))
	}

	function ja(e) {
		var n = e.fundingSource,
			t = e.style,
			r = e.locale,
			o = e.multiple,
			i = e.nonce,
			a = t.label;
		if (t.tagline) {
			var s = Ta()[n];
			if (!s) throw new Error("Can not get config for " + n);
			var c = s.labels[a];
			if (!c) throw new Error("Can not find label config for " + a);
			var u = c.Tag;
			if (u) return ko("div", {
				class: hi.TAGLINE + " " + hi.TAGLINE_COLOR + "-" + oi.BLACK
			}, ko(u, {
				nonce: i,
				locale: r,
				multiple: o
			}))
		}
	}

	function Wa(e) {
		var n = e.nonce,
			t = function() {
				var e = {
					BLOCK: "block",
					INLINE_BLOCK: "inline-block",
					NONE: "none",
					VISIBLE: "visible",
					HIDDEN: "hidden"
				};

				function n(e, n) {
					return n = n || document, [].slice.call(n.querySelectorAll(e))
				}

				function t(n, t) {
					void 0 === t && (t = e.INLINE_BLOCK), n.style.display = t
				}

				function r(n) {
					n.style.display = e.NONE
				}

				function o(n) {
					n.style.visibility = e.VISIBLE
				}

				function i(n) {
					n.style.visibility = e.HIDDEN
				}

				function a(n) {
					return n.every(function(n) {
						return function(e) {
							var n = e.getBoundingClientRect();
							return Boolean(n.height && n.width)
						}(n) || function(n) {
							var t = window.getComputedStyle(n);
							return !t || t.display === e.NONE
						}(n)
					})
				}

				function s(e) {
					if (e.offsetWidth < e.scrollWidth || e.offsetHeight < e.scrollHeight) return !0;
					var n = e.parentNode;
					if (!n) return !1;
					var t = e.getBoundingClientRect(),
						r = n.getBoundingClientRect();
					return t.top < r.top || t.left < r.left || t.right > r.right || t.bottom > r.bottom || t.left < 0 || t.top < 0 || t.left + t.width > window.innerWidth || t.top + t.height > window.innerHeight
				}
				var c = n(".{ CLASS.BUTTON } .{ LOGO_CLASS.LOGO }"),
					u = n(".{ CLASS.BUTTON } .{ CLASS.TEXT }"),
					l = n(".{ CLASS.TAGLINE }"),
					d = n(".{ CLASS.BUTTON }-label-credit .{ CLASS.BUTTON }-logo-paypal");

				function p() {
					l.some(s) ? l.forEach(i) : l.forEach(o), u.forEach(function(e) {
						return t(e)
					}), d.forEach(function(e) {
						return t(e)
					}), c.some(s) || u.some(s) ? (u.forEach(r), d.forEach(r)) : (u.forEach(o), d.forEach(function(e) {
						return t(e)
					}))
				}
				p(),
					function(e, n) {
						if (a(e)) n();
						else var t = setInterval(function() {
							a(e) && (clearInterval(t), n())
						}, 5)
					}(c, function() {
						c.forEach(o), p(), document.addEventListener("DOMContentLoaded", p), window.addEventListener("load", p), window.addEventListener("resize", p),
							function e(n, t, r) {
								setTimeout(function() {
									n(), (r -= 1) && e(n, t, r)
								}, t)
							}(p, 10, 10)
					})
			}.toString();
		return t = (t = t.replace(/\{\s*CLASS\.([A-Z0-9_]+)\s*\}/g, function(e, n) {
			return hi[n]
		})).replace(/\{\s*LOGO_CLASS\.([A-Z0-9_]+)\s*\}/g, function(e, n) {
			return Ai[n]
		}), ko("script", {
			nonce: n,
			innerHTML: "(" + t + ")()"
		})
	}

	function za(e) {
		var n, t = e.nonce,
			r = "\n        " + Pa + "\n        " + Fa + "\n        " + Ha + "\n        " + Ma + "\n        " + function(e) {
				var n = e.height,
					t = e.cardNumber,
					r = void 0 === t ? 4 : t;
				return Object.keys(Oa).map(function(e) {
					var t = Oa[e],
						o = n || t.defaultHeight,
						i = Math.round(o * Ua * 2);
					return "\n\n            @media only screen and (min-width: " + t.minWidth + "px) {\n\n                ." + hi.CONTAINER + " {\n                    min-width: " + t.minWidth + "px;\n                    max-width: " + t.maxWidth + "px;\n                    font-size: " + Te(_e(o, 32), 10) + "px;\n                }\n\n                ." + hi.BUTTON + " {\n                    height: " + o + "px;\n                    min-height: " + (n || t.minHeight) + "px;\n                    max-height: " + (n || t.maxHeight) + "px;\n                }\n\n                ." + Ai.LOGO + " {\n                    height: " + (_e(o, 35) + 5) + "px;\n                    max-height: " + _e(o, 60) + "px;\n                    min-height: " + _e(o, 40) + "px;\n                }\n                \n                ." + Ai.LOGO + "." + Ai.LOGO + "-" + ni.EPS + ",\n                ." + Ai.LOGO + "." + Ai.LOGO + "-" + ni.MYBANK + " {\n                    height: " + (_e(o, 50) + 5) + "px;\n                    max-height: " + _e(o, 70) + "px;\n                    min-height: " + _e(o, 40) + "px;\n                }\n\n                ." + hi.BUTTON + "." + hi.SHAPE + "-" + ii.RECT + " {\n                    border-radius: 4px;\n                }\n\n                ." + hi.BUTTON + "." + hi.SHAPE + "-" + ii.PILL + " {\n                    border-radius: " + Math.ceil(o / 2) + "px;\n                }\n\n                ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.VERTICAL + " {\n                    margin-bottom: " + _e(o, Ia.VERTICAL_MARGIN) + "px;\n                }\n\n                ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.VERTICAL + ":last-of-type {\n                    margin-bottom: 0;\n                }\n                \n                ." + hi.TAGLINE + " {\n                    height: " + _e(o, Ia.TAGLINE) + "px;\n                    line-height: " + _e(o, Ia.TAGLINE) + "px;\n                }\n\n                ." + hi.CARD + " {\n                    display: inline-block;\n                }\n\n                ." + hi.BUTTON + " ." + hi.CARD + " {\n                    width: " + (90 / r).toFixed(2) + "%;\n                    max-width: " + _e(o, 160) + "px;\n                    margin-top: 0;\n                    margin-left: " + (5 / r).toFixed(2) + "%;\n                    margin-right: " + (5 / r).toFixed(2) + "%;\n                }\n\n                ." + hi.BUTTON + " ." + hi.CARD + " img {\n                    width: 100%;\n                }\n            }\n\n            @media only screen and (min-width: " + t.minWidth + "px) and (max-width: " + i + "px) {\n\n                ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + "." + hi.NUMBER + "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + "." + hi.NUMBER + "-1 {\n                    display: none;\n                }\n\n                ." + hi.CONTAINER + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + " ." + hi.TAGLINE + " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " + Te(t.minWidth, i) + "px) {\n\n                ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + "." + hi.NUMBER + "-0 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                    margin-right: 4px;\n                }\n\n                ." + hi.BUTTON + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + "." + hi.NUMBER + "-1 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                }\n\n                ." + hi.CONTAINER + "." + hi.LAYOUT + "-" + ai.HORIZONTAL + "." + hi.NUMBER + "-" + si.MULTIPLE + " ." + hi.TAGLINE + " {\n                    display: block;\n                }\n            }\n        "
				}).join("\n")
			}({
				height: (n = {
					height: e.style.height,
					cardNumber: e.cardNumber
				}).height,
				cardNumber: n.cardNumber
			}) + "\n    ",
			o = ko("style", {
				nonce: t,
				innerHTML: r
			});
		try {
			return o.render(qo()), o
		} catch (e) {
			return ko("style", {
				nonce: t
			}, r)
		}
	}

	function Za(e) {
		var n = Ta()[jn.CARD],
			t = n && n.vendors,
			r = 4;
		if (n && n.maxCards && n.maxCards[e.country] && (r = n.maxCards[e.country]), t) {
			var o = Object.keys(t).length;
			return Math.min(o, r)
		}
		return r
	}

	function Va(e) {
		var n = e.onClick,
			t = function(e) {
				if (!e) throw new Error("Expected props");
				var n = e.clientID,
					t = e.style,
					r = void 0 === t ? {} : t,
					o = e.remembered,
					i = void 0 === o ? [] : o,
					a = e.locale,
					s = void 0 === a ? La.LOCALE : a,
					c = e.env,
					u = void 0 === c ? La.ENV : c,
					l = e.platform,
					d = void 0 === l ? La.PLATFORM : l,
					p = e.commit,
					f = void 0 === p ? La.COMMIT : p,
					h = e.fundingEligibility,
					E = e.sessionID,
					m = void 0 === E ? le() : E,
					g = e.buttonSessionID,
					y = void 0 === g ? le() : g,
					w = e.csp,
					v = void 0 === w ? {} : w,
					_ = e.nonce,
					T = void 0 === _ ? "" : _,
					N = s.country,
					C = s.lang;
				if (!N || -1 === Ra.indexOf(N)) throw new Error("Expected valid country, got " + (N || "undefined"));
				if (!C || -1 === Ln[N].indexOf(C)) throw new Error("Expected valid lang, got " + (C || "undefined"));
				if (i.some(function(e) {
						return -1 === Sa.indexOf(e)
					})) throw new Error("Expected valid funding sources, got " + JSON.stringify(i));
				if (-1 === Da.indexOf(u)) throw new Error("Expected valid env, got " + (u || "undefined"));
				if (!h) throw new Error("Expected fundingEligibility");
				if (-1 === xa.indexOf(d)) throw new Error("Expected valid platform, got " + (d || "undefined"));
				return v && v.nonce && (T = v.nonce), {
					clientID: n,
					style: r = Aa(r),
					locale: s,
					remembered: i,
					env: u,
					fundingEligibility: h,
					platform: d,
					buttonSessionID: y,
					commit: f,
					sessionID: m,
					nonce: T
				}
			}(e),
			r = t.style,
			o = t.locale,
			i = t.env,
			a = t.fundingEligibility,
			s = t.nonce,
			c = function(e) {
				var n = e.platform,
					t = e.remembered,
					r = e.fundingEligibility,
					o = e.style.layout,
					i = _a.filter(function(e) {
						return function(e, n) {
							var t = n.layout,
								r = n.platform,
								o = n.remembered,
								i = n.fundingEligibility;
							if (!i[e] || !i[e].eligible || !1 === i[e].branded) return !1;
							var a = Ta()[e];
							return !(!a || a.layouts && -1 === a.layouts.indexOf(t) || a.platforms && -1 === a.platforms.indexOf(r) || a.remembered && o && -1 === o.indexOf(e))
						}(e, {
							layout: o,
							platform: n,
							remembered: t,
							fundingEligibility: r
						})
					});
				return o === ai.HORIZONTAL && (i = i.slice(0, 2)), i
			}({
				style: r,
				remembered: t.remembered,
				platform: t.platform,
				fundingEligibility: a
			}),
			u = c.length > 1;
		if (!c.length) throw new Error("No eligible funding fundingSources found to render buttons:\n\n" + JSON.stringify(a, null, 4));
		var l = ko("div", {
			class: hi.CONTAINER + " " + ka({
				style: r,
				multiple: u,
				env: i
			})
		}, ko(za, {
			nonce: s,
			style: r,
			cardNumber: Za(o)
		}), c.map(function(e, t) {
			return ko(Ba, {
				i: t,
				style: r,
				fundingSource: e,
				multiple: u,
				env: i,
				locale: o,
				nonce: s,
				fundingEligibility: a,
				onClick: n
			})
		}), ko(ja, {
			fundingSource: c[0],
			style: r,
			locale: o,
			multiple: u,
			nonce: s
		}), ko(Wa, {
			nonce: s
		}));
		l.toString = function() {
			return l.render(qo())
		};
		var d = l.render;
		return l.render = function(e) {
			return 3 === e.length && "undefined" == typeof window ? d.call(l, qo()) : d.call(l, e)
		}, l
	}
	var Ga = {
		VISIBLE: "visible",
		INVISIBLE: "invisible",
		COMPONENT_FRAME: "component-frame",
		PRERENDER_FRAME: "prerender-frame"
	};

	function Ya(e) {
		var n = e.uid,
			t = e.props,
			r = e.tag,
			o = e.context,
			i = e.frame,
			a = e.prerenderFrame,
			s = e.doc,
			c = e.container,
			u = e.event;
		if (i && a) {
			if (c && "button" === c.tagName.toLowerCase()) throw new Error("Do not render the PayPal button into a button element");
			i.classList.add(Ga.COMPONENT_FRAME), a.classList.add(Ga.PRERENDER_FRAME), i.classList.add(Ga.INVISIBLE), a.classList.add(Ga.VISIBLE), u.on(so.RENDERED, function() {
				a.classList.remove(Ga.VISIBLE), a.classList.add(Ga.INVISIBLE), i.classList.remove(Ga.INVISIBLE), i.classList.add(Ga.VISIBLE), setTimeout(function() {
					dn(a)
				}, 1)
			});
			var l = t.style,
				d = l.label,
				p = l.layout,
				f = l.height,
				h = Na[p],
				E = Ca[p];
			if (f) {
				var m = ve(ri).filter(function(e) {
					return Oa[e] && f && Oa[e].minHeight <= f && Oa[e].maxHeight >= f
				});
				m.sort(function(e, n) {
					return Oa[e].defaultWidth - Oa[n].defaultWidth
				}), h = m[0]
			}
			var g = ko("div", {
				id: n,
				onRender: function(e) {
					u.on(so.RESIZE, function(n) {
						var t = n.width,
							r = n.height;
						"number" == typeof t && (e.style.width = Cn(t)), "number" == typeof r && (e.style.height = Cn(r))
					})
				},
				class: r + " " + r + "-context-" + o + " " + r + "-label-" + d + " " + r + "-layout-" + p
			}, ko("style", null, "\n                    #" + n + " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-width: " + Oa[h].minWidth + "px;\n                        max-width: " + Oa[E].maxWidth + "px;\n                        font-size: 0;\n                    }\n\n                    #" + n + " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" + n + " > iframe." + Ga.COMPONENT_FRAME + " {\n                        z-index: 100;\n                    }\n\n                    #" + n + " > iframe." + Ga.PRERENDER_FRAME + " {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" + n + " > iframe." + Ga.VISIBLE + " {\n                        opacity: 1;\n                    }\n\n                    #" + n + " > iframe." + Ga.INVISIBLE + " {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n                "), ko("node", {
				el: i
			}), ko("node", {
				el: a
			})).render(Vo({
				doc: s
			}));
			return u.on(so.RENDERED, function() {
				g.style.transition = "all 0.5s ease-in-out"
			}), g
		}
	}

	function Ka(e) {
		return void 0 === e && (e = Ie),
			function(e) {
				return Ot().getState(e)
			}(function(n) {
				return n.rememberedFunding = n.rememberedFunding || [], e(n.rememberedFunding)
			})
	}

	function qa(e) {
		Ka(function(n) {
			for (var t = 0; t < e.length; t++) {
				var r = e[t]; - 1 === n.indexOf(r) && n.push(r)
			}
		})
	}

	function Ja() {
		return he(Ja, function() {
			var e = Lo({
				tag: "paypal-buttons",
				url: vi,
				domain: /\.paypal\.com(:\d+)?$/,
				autoResize: {
					width: !1,
					height: !0
				},
				containerTemplate: Ya,
				logger: Lt(),
				prerenderTemplate: function(e) {
					var n = e.state,
						t = e.props,
						r = e.doc;
					return ko("html", null, ko("body", null, ko("div", null, ko(Va, h({}, t, {
						onClick: function(e) {
							var r, o = e.fundingSource,
								i = e.card;
							f() && en(r = $e("", {
								width: Ti.WIDTH,
								height: Ti.HEIGHT
							}), Ci({
								document: r.document,
								props: {
									nonce: t.nonce
								}
							})), n.prerenderDetails = {
								win: r,
								fundingSource: o,
								card: i
							}
						}
					}))))).render(Vo({
						doc: r
					}))
				},
				attributes: {
					iframe: {
						allowpaymentrequest: "allowpaymentrequest",
						scrolling: "no"
					}
				},
				validate: function() {
					p() && Lt().warn("button_render_intranet_mode")
				},
				props: {
					style: {
						type: "object",
						queryParam: !0,
						required: !1,
						decorate: function(e) {
							var n = Aa(e.value),
								t = n.label,
								r = n.layout,
								o = n.color,
								i = n.shape,
								a = n.tagline,
								s = n.height,
								c = n.period,
								u = Lt();
							return u.info("button_render_color_" + o), u.info("button_render_shape_" + i), u.info("button_render_label_" + t), u.info("button_render_layout_" + t), u.info("button_render_tagline_" + a.toString()), {
								label: t,
								layout: r,
								color: o,
								shape: i,
								tagline: a,
								height: s,
								period: c
							}
						},
						validate: function(e) {
							var n = e.value;
							Aa(void 0 === n ? {} : n)
						},
						default: function() {
							return {}
						}
					},
					locale: {
						type: "object",
						queryParam: !0,
						value: function() {
							return dt()
						}
					},
					sdkMeta: {
						type: "string",
						queryParam: !0,
						sendToChild: !1,
						value: function() {
							return At()
						}
					},
					createOrder: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.props,
								r = e.state;
							return function() {
								return N.try(function() {
									return n({}, {
										order: {
											create: function(e) {
												return (r.remoteCreateOrder || xt)(t.clientID, e, {
													fptiState: li.BUTTON
												})
											}
										}
									})
								}).then(function(e) {
									var n;
									if (!e || "string" != typeof e) throw new Error("Expected a promise for a string order id to be passed to createOrder");
									return Lt().track((n = {}, n[Pn.STATE] = li.CHECKOUT, n[Pn.TRANSITION] = di.RECIEVE_ORDER, n[Pn.CONTEXT_TYPE] = ui.ORDER_ID, n[Pn.CONTEXT_ID] = e, n[Pn.BUTTON_SESSION_UID] = t.buttonSessionID, n)).flush(), e
								})
							}
						},
						default: function(e) {
							if (!e.props.createBillingAgreement) return function(e, n) {
								return n.order.create({
									purchase_units: [{
										amount: {
											currency_code: "USD",
											value: "0.01"
										}
									}]
								})
							}
						}
					},
					createBillingAgreement: {
						type: "function",
						required: !1,
						validate: function(e) {
							if (e.props.createOrder) throw new Error("Do not pass both createOrder and createBillingAgreement")
						},
						decorate: function(e) {
							var n = e.value;
							return function() {
								return N.try(function() {
									if (!it()) throw new Error("Must pass vault=true to sdk to use billing agreement flow");
									return n()
								}).then(function(e) {
									var n = Lt();
									if (!e || "string" != typeof e) throw n.error("no_billing_token_passed_to_createbillingagreement"), new Error("Expected a promise for a string billing token to be passed to createBillingAgreement");
									return n.flush(), e
								})
							}
						}
					},
					onApprove: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.props,
								r = e.close;
							return function(e, o) {
								var i;
								return Lt().info("button_authorize").track((i = {}, i[Pn.STATE] = li.CHECKOUT, i[Pn.TRANSITION] = di.CHECKOUT_AUTHORIZE, i[Pn.BUTTON_SESSION_UID] = t.buttonSessionID, i)).flush(), o = h({}, o, {
									redirect: function(e, n) {
										if (!e) throw new Error("Expected redirect url");
										return N.try(function() {
											return r()
										}).then(function() {
											return je(e, n || window.top)
										})
									}
								}), N.try(function() {
									return n(e, o)
								}).catch(function(e) {
									if (t.onError) return t.onError(e);
									throw e
								})
							}
						},
						default: function(e) {
							var n = e.props;
							return function(e, t) {
								if (n.intent === kn.CAPTURE) {
									if (n.intent === kn.CAPTURE) return t.order.capture().then(Ee);
									if (n.intent === kn.AUTHORIZE) return t.order.authorize().then(Ee)
								}
								throw new Error("Please specify onApprove callback to handle buyer approval success")
							}
						}
					},
					onShippingChange: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.props,
								r = e.onError;
							return function(e, o) {
								var i;
								void 0 === o && (o = {});
								var a = Lt();
								a.info("button_shipping_change"), a.track(((i = {})[Pn.STATE] = li.CHECKOUT, i[Pn.TRANSITION] = di.CHECKOUT_SHIPPING_CHANGE, i[Pn.BUTTON_SESSION_UID] = t.buttonSessionID, i)), a.flush();
								var s = function() {
										return N.resolve()
									},
									c = o.reject || function() {
										throw new Error("Missing reject action callback")
									};
								return N.try(function() {
									return n(e, h({}, o, {
										resolve: s,
										reject: c
									}))
								}).catch(function(e) {
									throw r && r(e), e
								})
							}
						}
					},
					onCancel: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.props,
								r = e.close;
							return function(e, o) {
								var i;
								void 0 === o && (o = {});
								var a = Lt();
								return a.info("button_cancel"), a.track(((i = {})[Pn.STATE] = li.CHECKOUT, i[Pn.TRANSITION] = di.CHECKOUT_CANCEL, i[Pn.BUTTON_SESSION_UID] = t.buttonSessionID, i)), a.flush(), o = h({}, o, {
									redirect: function(e, n) {
										if (!e) throw new Error("Expected redirect url");
										return N.all([je(e, n || window.top), r()])
									}
								}), N.try(function() {
									return n(e, o)
								}).catch(function(e) {
									if (t.onError) return t.onError(e);
									throw e
								})
							}
						},
						default: function() {
							return Ee
						}
					},
					onClick: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.props;
							return function(e, r) {
								var o;
								return Lt().info("button_click").track((o = {}, o[Pn.STATE] = li.BUTTON, o[Pn.TRANSITION] = di.BUTTON_CLICK, o[Pn.BUTTON_TYPE] = ci.IFRAME, o[Pn.BUTTON_SESSION_UID] = t.buttonSessionID, o[Pn.CHOSEN_FUNDING] = e && (e.card || e.fundingSource), o)).flush(), n({}, r)
							}
						},
						default: function() {
							return Ee
						}
					},
					onRender: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.props;
							return function() {
								var e;
								return Lt().track((e = {}, e[Pn.STATE] = li.BUTTON, e[Pn.TRANSITION] = di.BUTTON_RENDER, e[Pn.BUTTON_TYPE] = ci.IFRAME, e[Pn.BUTTON_SESSION_UID] = t.buttonSessionID, e)).flush(), n()
							}
						},
						default: function() {
							return Ee
						}
					},
					getPrerenderDetails: {
						type: "function",
						value: function(e) {
							var n = e.state;
							return function() {
								return n.prerenderDetails
							}
						}
					},
					proxyRest: {
						type: "function",
						value: function(e) {
							var n = e.state;
							return function(e) {
								n.remoteCreateOrder = e.createOrder
							}
						}
					},
					clientID: {
						type: "string",
						value: function() {
							return nt()
						},
						queryParam: !0
					},
					sessionID: {
						type: "string",
						value: function() {
							return Ei()
						},
						queryParam: !0
					},
					buttonSessionID: {
						type: "string",
						value: function() {
							return le()
						},
						queryParam: !0
					},
					env: {
						type: "string",
						queryParam: !0,
						value: function() {
							return "production"
						}
					},
					fundingEligibility: {
						type: "object",
						value: function() {
							return Object({
								paypal: Object({
									eligible: !0,
									guest: !1,
									remembered: !1
								}),
								venmo: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								credit: Object({
									eligible: !0,
									guest: !1,
									remembered: !1
								}),
								card: Object({
									eligible: !0,
									guest: !1,
									remembered: !1,
									vendors: Object({
										visa: Object({
											eligible: !0
										}),
										mastercard: Object({
											eligible: !0
										}),
										amex: Object({
											eligible: !0
										}),
										discover: Object({
											eligible: !1
										}),
										hiper: Object({
											eligible: !1
										}),
										elo: Object({
											eligible: !1
										}),
										jcb: Object({
											eligible: !1
										}),
										cup: Object({
											eligible: !1
										})
									}),
									branded: !1
								}),
								ideal: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								sepa: Object({
									eligible: !0,
									guest: !1,
									remembered: !1
								}),
								bancontact: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								giropay: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								sofort: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								eps: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								mybank: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								p24: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								zimpler: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								}),
								wechatpay: Object({
									eligible: !1,
									guest: !1,
									remembered: !1
								})
							})
						},
						queryParam: !0,
						serialization: "base64"
					},
					platform: {
						type: "string",
						queryParam: !0,
						value: function() {
							return u() ? Bn.MOBILE : Bn.DESKTOP
						}
					},
					remembered: {
						type: "array",
						queryParam: !0,
						value: function() {
							return Ka()
						}
					},
					remember: {
						type: "function",
						value: function() {
							return qa
						}
					},
					currency: {
						type: "string",
						queryParam: !0,
						value: function() {
							return at()
						}
					},
					intent: {
						type: "string",
						queryParam: !0,
						value: function() {
							return rt()
						}
					},
					buyerCountry: {
						type: "string",
						queryParam: !0,
						required: !1,
						value: st
					},
					commit: {
						type: "boolean",
						queryParam: !0,
						value: function() {
							return ot()
						}
					},
					vault: {
						type: "boolean",
						queryParam: !0,
						value: function() {
							return it()
						}
					},
					csp: {
						type: "object",
						required: !1,
						value: function() {
							return {
								nonce: pt()
							}
						}
					},
					test: {
						type: "object",
						default: function() {
							return {
								action: "checkout"
							}
						}
					}
				}
			});
			e.isChild() && function(e) {
				p() && Lt().warn("button_child_intranet_mode");
				var n = e.xprops;
				if (!n) throw new Error("No xprops found");
				He().then(function() {
					if (We()) {
						var e = window.performance.timing;
						return e.connectEnd && e.domInteractive ? e.domInteractive - e.connectEnd : void 0
					}
				}).then(function(e) {
					var t, r = Lt(),
						o = [].slice.call(document.querySelectorAll("[" + pi.FUNDING_SOURCE + "]")).map(function(e) {
							return e.getAttribute(pi.CARD) || e.getAttribute(pi.FUNDING_SOURCE)
						}).filter(function(e) {
							return e && e !== jn.CARD
						}),
						i = ai.HORIZONTAL;
					n.style && n.style.layout && (i = n.style.layout), r.track(((t = {})[Pn.STATE] = li.BUTTON, t[Pn.TRANSITION] = di.BUTTON_LOAD, t[Pn.BUTTON_TYPE] = ci.IFRAME, t[Pn.FUNDING_LIST] = o.join(":"), t[Pn.FUNDING_COUNT] = o.length.toString(), t[Pn.PAGE_LOAD_TIME] = e ? e.toString() : "", t[Pn.BUTTON_LAYOUT] = i, t)), r.flush()
				}), n.proxyRest({
					createOrder: xt
				})
			}(e);
			var n = e.driver;
			return e.driver = function(e, t) {
				return Lt().info("driver_" + e + "_production"), Lt().flush(), n(e, t)
			}, e
		})
	}

	function Xa() {
		return he(Xa, function() {
			return Lo({
				tag: "card-fields",
				name: "ppcard",
				url: _i,
				dimensions: {
					height: "300px",
					width: "100%"
				},
				autoResize: {
					height: !0,
					width: !1
				},
				props: {
					sessionID: {
						type: "string",
						required: !1,
						def: function() {
							return Ei()
						},
						queryParam: !0
					},
					createOrder: {
						type: "function",
						queryParam: "token",
						alias: "payment",
						queryValue: function(e) {
							return N.try(e.value)
						}
					},
					buttonSessionID: {
						type: "string",
						required: !1,
						def: function() {
							return mi()
						},
						queryParam: !0
					},
					commit: {
						type: "boolean",
						queryParam: !0,
						value: ot
					},
					env: {
						type: "string",
						queryParam: !0,
						value: Yn
					},
					locale: {
						type: "object",
						queryParam: "locale.x",
						allowDelegate: !0,
						queryValue: function(e) {
							var n = e.value;
							return n.lang + "_" + n.country
						},
						value: function() {
							return dt()
						}
					},
					onApprove: {
						type: "function",
						alias: "onAuthorize"
					},
					onAuth: {
						type: "function",
						required: !1,
						sameDomain: !0
					},
					onCancel: {
						type: "function",
						required: !1,
						decorate: function(e) {
							var n = e.value,
								t = e.close,
								r = e.onError;
							return me(function(e, o) {
								return void 0 === o && (o = {}), N.try(function() {
									return n(e, o)
								}).catch(function(e) {
									return r(e)
								}).finally(function() {
									t()
								})
							})
						},
						default: function() {
							return Ee
						}
					},
					sdkMeta: {
						type: "string",
						queryParam: !0,
						value: At
					},
					style: {
						type: "object",
						required: !1,
						queryParam: !0,
						def: function() {
							return {
								cardIcons: {
									display: !1
								},
								submitButton: {
									display: !0
								},
								currencyConversion: {
									display: !0
								}
							}
						}
					}
				}
			})
		})
	}

	function Qa(e) {
		if (yt()) return e
	}
	var $a = {
			addHeaderBuilder: function() {}
		},
		es = {
			__get__: function() {
				return Ja()
			}
		},
		ns = {
			__get__: function() {
				return Qa(ta())
			}
		},
		ts = {
			__get__: function() {
				return Qa(Xa())
			}
		},
		rs = {
			__get__: function() {
				return Qa(Va)
			}
		},
		os = {
			__get__: function() {
				return Qa(Qe)
			}
		},
		is = {
			__get__: function() {
				return Qa(gi)
			}
		},
		as = {
			__get__: function() {
				return Qa(gi)
			}
		},
		ss = {
			__get__: function() {
				return Qa(Ro)
			}
		};

	function cs() {
		Lt().addTrackingBuilder(function() {
			var e, n, t, r = window.root && window.root.token ? window.root.token : ke(window.location.search.slice(1)).token || void 0,
				o = mi();
			return r ? (n = ui.ORDER_ID, t = r) : o && (n = ui.BUTTON_SESSION_ID, t = o), (e = {})[Pn.CONTEXT_TYPE] = n, e[Pn.CONTEXT_ID] = t, e[Pn.BUTTON_SESSION_UID] = o, e[Pn.TOKEN] = r, e[Pn.REFERER] = window.xprops && window.xprops.getParentDomain ? window.xprops.getParentDomain() : window.location.host, e
		}), Ja(), ta()
	}

	function us() {
		var e;
		Ao(), delete window.__zoid_9_0_22__,
			function() {
				for (var e = Zt("responseListeners"), n = 0, t = e.keys(); n < t.length; n++) {
					var r = t[n],
						o = e.get(r);
					o && (o.cancelled = !0), e.del(r)
				}
			}(), (e = Zt().get("postMessageListener")) && e.cancel(), delete window.__post_robot_10_0_14__
	}

	function ls() {
		var e;
		qn(), (e = Lt()).addPayloadBuilder(function() {
			return {
				referer: window.location.host,
				uid: bt(),
				env: "production"
			}
		}), e.addTrackingBuilder(function() {
			var e, n = dt(),
				t = n.lang,
				r = n.country;
			return (e = {})[Pn.FEED] = Un.PAYMENTS_SDK, e[Pn.DATA_SOURCE] = Mn.PAYMENTS_SDK, e[Pn.CLIENT_ID] = nt(), e[Pn.SELLER_ID] = tt(), e[Pn.SESSION_UID] = bt(), e[Pn.REFERER] = window.location.host, e[Pn.LOCALE] = t + "_" + r, e[Pn.INTEGRATION_IDENTIFIER] = nt(), e[Pn.PARTNER_ATTRIBUTION_ID] = ct(), e[Pn.SDK_NAME] = Hn.PAYMENTS_SDK, e[Pn.SDK_VERSION] = "5.0.19", e[Pn.USER_AGENT] = window.navigator && window.navigator.userAgent, e[Pn.USER_ACTION] = ot() ? Fn.COMMIT : Fn.CONTINUE, e[Pn.CONTEXT_CORRID] = "919affecc3202", e
		}), N.onPossiblyUnhandledException(function(n) {
			var t;
			e.track(((t = {})[Pn.ERROR_CODE] = "payments_sdk_error", t[Pn.ERROR_DESC] = function(e) {
				var n = "<unknown error: " + {}.toString.call(e) + ">";
				return e ? e instanceof Error ? e.message || n : "string" == typeof e.message && e.message || n : n
			}(n), t)), e.error("unhandled_error", {
				err: ge(n)
			}), e.flush().catch(Ee)
		}), e.info("setup_production")
	}! function(e) {
		if (window.paypal) {
			if (!window.paypal["__destroy_5.0.19_internal__"]) throw new Error("Error loading paypal version 5.0.19 - version " + (window.paypal.version || "(unknown)") + " already loaded on page");
			window.paypal["__destroy_5.0.19_internal__"]()
		}
		window.paypal = window.paypal || {}, window.paypal.version = "5.0.19";
		for (var n = [], t = function(t) {
				var r = e[t],
					o = r.name,
					i = r.requirer,
					a = r.setupHandler;
				try {
					var c = i(),
						u = c[a],
						l = c.setup,
						d = c.destroy,
						p = s(c, [a, "setup", "destroy"].map(ft));
					u ? u() : l && l(), d && n.push(d);
					for (var f = 0, h = Object.keys(p); f < h.length; f++) {
						var E = h[f],
							m = p[E];
						m && m.__get__ && (m = m.__get__()), m && (window.paypal[E] = m)
					}
				} catch (e) {
					return setTimeout(function() {
						throw new Error("Bootstrap Error for " + o + ":\n\n" + e.message + "\n\n" + e.stack)
					}, 1), "continue"
				}
			}, r = 0; r < e.length; r++) t(r);
		Object.defineProperty(window.paypal, "__destroy_5.0.19_internal__", {
			enumerable: !1,
			value: function() {
				n.forEach(function(e) {
					return e()
				}), dn(qn()), delete window.paypal
			}
		})
	}([{
		name: "hosted-fields",
		setupHandler: void 0,
		requirer: function() {
			return o
		}
	}, {
		name: "buttons",
		setupHandler: "setupButtons",
		requirer: function() {
			return i
		}
	}, {
		name: "__paypal-sdk-client__",
		setupHandler: "setupClient",
		requirer: function() {
			return a
		}
	}])
}, function(e, n, t) {
	"use strict";
	t.r(n);
	var r = setTimeout;

	function o() {}

	function i(e) {
		if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
		if ("function" != typeof e) throw new TypeError("not a function");
		this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
	}

	function a(e, n) {
		for (; 3 === e._state;) e = e._value;
		0 !== e._state ? (e._handled = !0, i._immediateFn(function() {
			var t = 1 === e._state ? n.onFulfilled : n.onRejected;
			if (null !== t) {
				var r;
				try {
					r = t(e._value)
				} catch (e) {
					return void c(n.promise, e)
				}
				s(n.promise, r)
			} else(1 === e._state ? s : c)(n.promise, e._value)
		})) : e._deferreds.push(n)
	}

	function s(e, n) {
		try {
			if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
			if (n && ("object" == typeof n || "function" == typeof n)) {
				var t = n.then;
				if (n instanceof i) return e._state = 3, e._value = n, void u(e);
				if ("function" == typeof t) return void d((r = t, o = n, function() {
					r.apply(o, arguments)
				}), e)
			}
			e._state = 1, e._value = n, u(e)
		} catch (n) {
			c(e, n)
		}
		var r, o
	}

	function c(e, n) {
		e._state = 2, e._value = n, u(e)
	}

	function u(e) {
		2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
			e._handled || i._unhandledRejectionFn(e._value)
		});
		for (var n = 0, t = e._deferreds.length; n < t; n++) a(e, e._deferreds[n]);
		e._deferreds = null
	}

	function l(e, n, t) {
		this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
	}

	function d(e, n) {
		var t = !1;
		try {
			e(function(e) {
				t || (t = !0, s(n, e))
			}, function(e) {
				t || (t = !0, c(n, e))
			})
		} catch (e) {
			if (t) return;
			t = !0, c(n, e)
		}
	}
	i.prototype.catch = function(e) {
		return this.then(null, e)
	}, i.prototype.then = function(e, n) {
		var t = new this.constructor(o);
		return a(this, new l(e, n, t)), t
	}, i.prototype.finally = function(e) {
		var n = this.constructor;
		return this.then(function(t) {
			return n.resolve(e()).then(function() {
				return t
			})
		}, function(t) {
			return n.resolve(e()).then(function() {
				return n.reject(t)
			})
		})
	}, i.all = function(e) {
		return new i(function(n, t) {
			if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
			var r = [].slice.call(e);
			if (0 === r.length) return n([]);
			var o = r.length;

			function i(e, a) {
				try {
					if (a && ("object" == typeof a || "function" == typeof a)) {
						var s = a.then;
						if ("function" == typeof s) return void s.call(a, function(n) {
							i(e, n)
						}, t)
					}
					r[e] = a, 0 == --o && n(r)
				} catch (e) {
					t(e)
				}
			}
			for (var a = 0; a < r.length; a++) i(a, r[a])
		})
	}, i.resolve = function(e) {
		return e && "object" == typeof e && e.constructor === i ? e : new i(function(n) {
			n(e)
		})
	}, i.reject = function(e) {
		return new i(function(n, t) {
			t(e)
		})
	}, i.race = function(e) {
		return new i(function(n, t) {
			for (var r = 0, o = e.length; r < o; r++) e[r].then(n, t)
		})
	}, i._immediateFn = "function" == typeof setImmediate && function(e) {
		setImmediate(e)
	} || function(e) {
		r(e, 0)
	}, i._unhandledRejectionFn = function(e) {
		"undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
	}, n.default = i
}]));
