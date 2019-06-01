
import React from "react";


const XATAContextInitial = {
	firebaseAuth: null,
	firebaseAuthCompleted: false,
	setFirebaseAuth: _ => { console.warn("XATAContext: `setTheme()` wasn't set yet."); },

	theme: null,
	setTheme: _ => { console.warn("XATAContext: `setTheme()` wasn't set yet."); },

	lightnessMode: null,
	setLightnessMode: _ => { console.warn("XATAContext: `setLightnessMode()` wasn't set yet."); },

	locale: null,
	setLocale: _ => { console.warn("XATAContext: `setLocale()` wasn't set yet."); },

	language: null,
	setLanguage: _ => { console.warn("XATAContext: `setLanguage()` wasn't set yet."); },
};

let XATAContext = null;

export default XATAContext = React.createContext(XATAContextInitial);
