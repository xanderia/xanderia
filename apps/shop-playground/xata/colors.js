


//export default // client-side js
// run by the browser each time your view template is loaded

console.log('Started');


// TODO chainable: `return this`
// Color names: https://commons.wikimedia.org/wiki/File:RBG_color_wheel.svg (with the exception of calling it `lime` and `turquoise`
// HSL cylinder: https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder.png


const color = ({h = 0, s = 100, l = 50, a = 1} = {}) => ({
	values: {h, s, l, a},

	duplicate (_) { return (Object.assign({}, this)); },

	set (_) {
    this.values.h = _.h || this.values.h;
    this.values.s = _.s || this.values.s;
    this.values.l = _.l || this.values.l;
    this.values.a = _.a || this.values.a;

    return this;
  },

	hue (_)        { this.values.h = _; return this; },
  saturation (_) { this.values.s = _; return this; },
	lightness (_)  { this.values.l = _; return this; },
	alpha (_)      { this.values.a = _; return this; },

	lighten (_) {  // EXAMPLE `lighten (50)`, i.e. with l:50 and +50% until l:100 resulting in l:75
    this.values.l =
      Math.min (
        100,
        Math.ceil(this.values.l + (( 100 - this.values.l ) * (_ / 100)))
      );
    return this;
  },

	darken (_) {
    this.values.l =
      Math.max (
        0,
        Math.floor(this.values.l - (( this.values.l ) * (_ / 100)))
      );
    return this;
  },

	saturate (_) {
    this.values.s =
      Math.min (
        100,
        Math.ceil(this.values.s + (( 100 - this.values.s ) * (_ / 100)))
      );
    return this;
  },

	desaturate (_) {
    this.values.s =
      Math.max (
        0,
        Math.floor(this.values.s - (( this.values.s ) * (_ / 100)))
      );
    return this;
  },

	toString () {
    return JSON.stringify({
      h: this.values.h,
      s: this.values.s,
      l: this.values.l,
      a: this.values.a
    });
  },

  _toCSSString (_) { return ("hsla(" + String(_.h).padStart(3, " ") + ", " + String(_.s).padStart(3, " ") + "%, " + String(_.l).padStart(3, " ") + "%, " + String(_.a).padEnd(3, " ") + ")"); },

	toCSSString () { return this._toCSSString(this.values); },

  toConsole() {
    let c = this.toCSSString();
    console.log("%c" + c + " - " + this.toName(), "background-color: " + c + "; border: 1px solid black; padding: 5px 10px; color: black; ");
    return this;
  },

  isLight () { return (this.values.l >= 50); },
  isDark ()  { return (this.values.l  < 50); },

  isTooDesaturated () { return (this.values.s <  5); },
  isTooDark ()        { return (this.values.l < 10); },
  isTooBright ()      { return (this.values.l > 95); },

  isColorful ()       { return ( !this.isTooDesaturated() && !this.isTooDark() && !this.isTooBright() ); },
  isGrayscaleish ()   { return (  this.isTooDesaturated() ||  this.isTooDark() ||  this.isTooBright() ); },
  isGrayscale ()      { return (this.values.s === 0); },

  rawHueNames: [
    {from: 350, to:  19, name: "red"},
    {from:  20, to:  49, name: "orange"},
    {from:  50, to:  79, name: "yellow"},
    {from:  80, to: 119, name: "lime"},
    {from: 110, to: 139, name: "green"},
    {from: 140, to: 169, name: "turquoise"},
    {from: 170, to: 199, name: "cyan"},
    {from: 200, to: 229, name: "azure"},
    {from: 230, to: 259, name: "blue"},
    {from: 260, to: 289, name: "violet"},
    {from: 290, to: 319, name: "magenta"},
    {from: 320, to: 349, name: "rose"},
  ],

  _rawHueName (_) {
    for (let k of this.rawHueNames) {
      if (k.from < k.to) {
        if (k.from <= _ && _ <= k.to) {
          return k.name;
        }
      }
      else {               // in the one case where the hue is defined across the overflow from 360 to 0
        if ((k.from <= _ && _ <= 360) || (0 <= _ && _ <= k.to)) {
          return k.name;
        }
      }
    }

    return null;
  },

  // TODO _rawSaturationNames: [{}],

  _rawSaturationName (_) {
    if (0 <= _ && _ < 5) {return ""; } // Should be caught by `.isTooDesaturated()`
    if (5 <= _ && _ < 30) {return "pale"; }
    if (30 <= _ && _ < 70) {return ""; } // Nothing, just normal `blue` for example.
    if (70 <= _ && _ <= 100) {return "vivid"; }
  },

  // TODO _rawLightnessNames: [{}],

  _rawLightnessName (_) {
    if ( 0 <= _ && _ <   10) {return ""; } // Should be caught by `.isTooDark()`
    if (10 <= _ && _ <   40) {return "dark"; }
    if (40 <= _ && _ <   60) {return ""; } // Nothing, just normal `blue` for example.
    if (60 <= _ && _ <   95) {return "bright"; }
    if (96 <= _ && _ <= 100) {return ""; } // `.isTooBright()`
  },

  // TODO _rawGrayscaleNames: [{}],

  _rawGrayscaleName (_) {
    if (0 === _)            { return "absolute black"; }
    if (0 < _ && _ < 10)    { return "black"; }
    if (10 <= _ && _ < 30)  { return "dark gray"; }
    if (30 <= _ && _ < 70)  { return "gray"; }
    if (70 <= _ && _ < 90)  { return "light gray"; }
    if (90 <= _ && _ < 100) { return "white"; }
    if (100 === _)          { return "absolute white"; }
  },

  _isAbsoluteWhiteOrBlack (_) {
    if (_ === 0 || _ === 100) {
      return true;
    } else {
      return false;
    }
  },

  _capFrom0To360 (_) {
    if (_ < 0)
      return 360 - _;
    else if (_ > 360)
      return _ - 360;
    else
      return _;
  },

  demoHueNames () {
    let iHue   = 0;
    let iHue5  = 0;
    let iHue10 = 0;
    let iHue15 = 0;
    let iHue20 = 0;
    let iHue25 = 0;
    let iName  = "";

    for (let k of this.rawHueNames) {
      iHue   = this._capFrom0To360(k.from);
      iHue5  = this._capFrom0To360(k.from + 5);
      iHue10 = this._capFrom0To360(k.from + 10);
      iHue15 = this._capFrom0To360(k.from + 15);
      iHue20 = this._capFrom0To360(k.from + 20);
      iHue25 = this._capFrom0To360(k.from + 25);

      iName = k.name.padEnd(10, " ");

      console.log("%c" + this._toCSSString({h: iHue  , s: 100, l: 50, a: 1}) + " - " + iName, "color: white; background-color: " + this._toCSSString({h: iHue  , s: 100, l: 50, a: 1}) + "; border: 1px solid black; padding: 5px 10px; ");
      console.log("%c" + this._toCSSString({h: iHue5 , s: 100, l: 50, a: 1}) + " - " + iName, "color: white; background-color: " + this._toCSSString({h: iHue5 , s: 100, l: 50, a: 1}) + "; border: 1px solid black; padding: 5px 10px; ");
      console.log("%c" + this._toCSSString({h: iHue10, s: 100, l: 50, a: 1}) + " - " + iName, "color: white; background-color: " + this._toCSSString({h: iHue10, s: 100, l: 50, a: 1}) + "; border: 1px solid black; padding: 5px 10px; ");
      console.log("%c" + this._toCSSString({h: iHue15, s: 100, l: 50, a: 1}) + " - " + iName, "color: white; background-color: " + this._toCSSString({h: iHue15, s: 100, l: 50, a: 1}) + "; border: 1px solid black; padding: 5px 10px; ");
      console.log("%c" + this._toCSSString({h: iHue20, s: 100, l: 50, a: 1}) + " - " + iName, "color: white; background-color: " + this._toCSSString({h: iHue20, s: 100, l: 50, a: 1}) + "; border: 1px solid black; padding: 5px 10px; ");
      console.log("%c" + this._toCSSString({h: iHue25, s: 100, l: 50, a: 1}) + " - " + iName, "color: white; background-color: " + this._toCSSString({h: iHue25, s: 100, l: 50, a: 1}) + "; border: 1px solid black; padding: 5px 10px; ");
    }
  },

  // Color Names
  // /////////////
  // HUE
  // red, orange, yellow, lime, green,

  // SATURATION
  // 70 - 100: vivid ...
  // 30 -  70: _ ...
  //  5 -  30: pale ...
  //  0 -   5: * GRAY SCALE MODE

  // LIGHTNESS
  // 90 - 100: * `hue`-ish white, e.g. yellow-ish white = GRAY SCALE MODE
  // 70 -  90: light ...
  // 30 -  70: _ ...
  // 10 -  30: dark ...
  //  0 -  10: * GRAY SCALE MODE

  toName () {                  // pale, _, vivid --- dark, _ light ---
    let hueName = "";
    let saturationName = "";
    let lightnessName = "";
    // let alphaName = ""; Omitting alpha currently. Maybe put it at the end of the name: vivid dark purple (50% transparency)

    if (this.isColorful()) {
      hueName = this._rawHueName(this.values.h);
      saturationName = this._rawSaturationName(this.values.s);
      lightnessName = this._rawLightnessName(this.values.l);

      return ([saturationName, lightnessName, hueName].filter(_ => _ !== "").join(" "));
    }
    else {  // `hue`-ish white/light gray/gray/dark gray/black
      hueName = this._isAbsoluteWhiteOrBlack(this.values.l) ? "" : (this._rawHueName(this.values.h) + "-ish"); // Absolute white/black do not get a `blue-ish` prefix.
      saturationName = "";                                                                          // Since this is grayscale there is no need for stating the saturation
      lightnessName = this._rawGrayscaleName(this.values.l);

      return ([hueName, saturationName, lightnessName]).filter(_ => _ !== "").join(" ");
    }
  },

  fromName () {
    // TODO Use regexp with optional elements for everything
  }

});


let c1 = color();
//c1.demoHueNames();

c1.toConsole();
c1.hue(50).toConsole();
c1.hue(100).toConsole();
c1.hue(150).toConsole();
c1.hue(200).toConsole();
c1.hue(250).toConsole();
c1.hue(300).toConsole();

/*
let c1 = color({h: 100, s: 70, l: 90, a: 1});

c1.toConsole();

let c2 = c1.duplicate().lighten(50);
c2.toConsole();

let c3 = c2.lighten(20);
c3.toConsole();
*/


// TODO theme
