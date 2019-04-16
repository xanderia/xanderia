"use strict";

const log = require("./log");



let state = {};
let reactions = {};



// NOTE ***
// This approach has been abandoned. The redux approach appears to only be a more concise, explicit approach to notate state changes also allowing state rollbacks.
// Since Firebase offers much of the event listening and one-state philosophy, i.e. the firebase firestore itself, there is little benefit in creating another entity
// as a bottleneck to arbiter any state changes.



let myAction = {
	doc:	"paypal.webhooks",
	data:	""
};

let myReaction = {		// Not only are actions JSON objects that clearly state what they're about, but also reactions clearly state what firebase documents they're listening to and using which query and which ones they're writing to.
};







module.exports = {
	init: _ => {		// Initializes the state machine with the globally used firebase instance from the main app + add all action handlers/listeners/reducers
	},


	addHandler: _ => {	// Add action handler/listener/reducer. You would usually add these in `.init()` but can do this later on as well.
	},



	get: _ => {			// Retrieve current state
	},



	change: _ => {		// NOTE Change state.
	},



	scry: _ => {		// NOTE Similar to `.change()` but does not set the new state, thereby only scrying into the future if that change would have been made, returning the theoretically new state.
	},



	revert: _ => {		// NOTE Roll back state by one step (or more).
	},
};
