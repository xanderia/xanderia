(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{463:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),i=n(126),l=n(3),s=n(2),c=n(142),u=n(57),m=n(386),f=n(425),g=n(90);var d={tintColor:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc",tabBar:"#fefefe",errorBackground:"red",errorText:"#fff",warningBackground:"#EAEB5E",warningText:"#666804",noticeBackground:"#2f95dc",noticeText:"#fff"},p="/Users/xanderiel/Development/xanderia/apps/shop-playground/components/TabBarIcon.js";class b extends o.a.Component{render(){return o.a.createElement(m.a.FontAwesome,{name:this.props.name,size:26,style:{marginBottom:-3},color:this.props.focused?d.tabIconSelected:d.tabIconDefault,__source:{fileName:p,lineNumber:12}})}}var h=n(9),y=n(39);const _={firebaseAuth:null,theme:null,setTheme:e=>{console.warn("XATAContext: `setTheme()` wasn't set yet.")},lightnessMode:null,setLightnessMode:e=>{console.warn("XATAContext: `setLightnessMode()` wasn't set yet.")},locale:null,setLocale:e=>{console.warn("XATAContext: `setLocale()` wasn't set yet.")},language:null,setLanguage:e=>{console.warn("XATAContext: `setLanguage()` wasn't set yet.")}};let N=null;var v=N=o.a.createContext(_);var w={startAuthFlow:e=>{const t="xata.auth.startAuthFlow()",n=e.authProvider||console.warn(t+": `_.authProvider cannot be null"),a=e.useRedirectOrPopup||(e=>"web"===r.a.OS&&0===window.screenTop?"redirect":"web"===r.a.OS&&0!==window.screenTop?"popup":void 0)(),o="https://xanderia.one/login/google/start";if(console.log(t+": starting auth flow",{authProvider:n,useRedirectOrPopup:a,url:o}),window.confirm("Proceed to the auth flow?")){if("redirect"===a)return document.location.assign(o),{status:"loading redirect"};if("popup"===a)return{status:"loading popup",windowReference:window.open(o,"","menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=624,height=968,bottom=0,left=0")}}}},P="/Users/xanderiel/Development/xanderia/apps/shop-playground/components/AuthArea.js";class x extends o.a.Component{constructor(e){super(e),console.log("AuthArea.constructor(): started")}onPress(){const e="AuthArea.onPress()";console.log(e+": started",{this:this,auth:w});let t=w.startAuthFlow({authProvider:"google"});console.log(e+": authFlowResult",{authFlowResult:t})}render(){console.log("AuthArea.render(): started");return o.a.createElement(s.a,{style:S.MainView,__source:{fileName:P,lineNumber:42}},o.a.createElement(y.a,{onPress:this.onPress,style:S.LoginButton,__source:{fileName:P,lineNumber:43}},o.a.createElement(v.Consumer,{__source:{fileName:P,lineNumber:44}},e=>null!==e.firebaseAuth?o.a.createElement(h.a,{style:S.LoginText,__source:{fileName:P,lineNumber:46}},"My Username"):o.a.createElement(h.a,{style:S.LoginText,__source:{fileName:P,lineNumber:48}},"Login"))))}}const S=l.a.create({MainView:{width:"100%",height:"100%",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",alignContent:"center"},LoginButton:{flex:1,marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"auto",height:"35px",width:"80px",backgroundColor:"hsla(94, 78%, 57%, 1)"},LoginText:{marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto",backgroundColor:"hsla(93, 57%, 23%, 1)"}});var O="/Users/xanderiel/Development/xanderia/apps/shop-playground/screens/HeaderBar.js";class C extends o.a.Component{render(){return console.log("HeaderBar.render(): started"),console.log("Use this console filter: -PanGestureHandler -[Violation] -Animation"),o.a.createElement(s.a,{style:T.MainView,__source:{fileName:O,lineNumber:31}},o.a.createElement(s.a,{style:T.AppMenuView,__source:{fileName:O,lineNumber:32}},o.a.createElement(h.a,{style:T.TextPlaceholder,__source:{fileName:O,lineNumber:33}},"MENU")),o.a.createElement(s.a,{style:T.TitleView,__source:{fileName:O,lineNumber:36}},o.a.createElement(h.a,{style:T.TextPlaceholder,__source:{fileName:O,lineNumber:37}},"TITLE")),o.a.createElement(s.a,{style:T.AuthView,__source:{fileName:O,lineNumber:40}},o.a.createElement(x,{__source:{fileName:O,lineNumber:41}})))}}const T=l.a.create({MainView:{width:"100%",height:"100%",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"stretch",alignContent:"stretch"},AppMenuView:{flex:1,backgroundColor:"hsla(95, 88%, 34%, 1)"},TitleView:{flex:3,backgroundColor:"hsla(225, 62%, 25%, 1)"},AuthView:{flex:1,backgroundColor:"hsla(314, 38%, 24%, 1)"},TextPlaceholder:{marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto",color:"white",fontWeight:"bold"}});var E=n(68),k=n(23);var A="/Users/xanderiel/Development/xanderia/apps/shop-playground/screens/ConfigurationScreen.js";function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}class L extends o.a.Component{constructor(){var e,t;super(...arguments),e=this,this.onPressPaymentFlowButton=(t=function*(){console.log("PaymentTestScreen::onPressPaymentFlowButton() start");let t=yield u.b.openBrowserAsync("https://expo.io");console.log("PaymentTestScreen::onPressPaymentFlowButton() end",t),e.setState({result:t})},function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(e){j(r,a,o,i,l,"next",e)}function l(e){j(r,a,o,i,l,"throw",e)}i(void 0)})})}render(){return o.a.createElement(s.a,{style:I.container,__source:{fileName:A,lineNumber:29}},o.a.createElement(k.a,{style:I.container,contentContainerStyle:I.contentContainer,__source:{fileName:A,lineNumber:30}},o.a.createElement(s.a,{style:I.getStartedContainer,__source:{fileName:A,lineNumber:32}},o.a.createElement(h.a,{__source:{fileName:A,lineNumber:34}},"Configuration"),o.a.createElement(h.a,{style:I.getStartedText,__source:{fileName:A,lineNumber:37}},"PayPal Payment Test"),o.a.createElement(E.a,{style:I.paragraph,title:"Open WebBrowser",onPress:this.onPressPaymentFlowButton,__source:{fileName:A,lineNumber:41}}))))}}L.navigationOptions=(e=>{e.navigation,e.navigationOptions,e.screenProps});const I=l.a.create({container:{flex:1,backgroundColor:"#fff"},contentContainer:{paddingTop:30},getStartedContainer:{alignItems:"center",marginHorizontal:50},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){B(e,t,n[t])})}return e}({position:"absolute",bottom:0,left:0,right:0},r.a.select({ios:{shadowColor:"black",shadowOffset:{height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}});var D="/Users/xanderiel/Development/xanderia/apps/shop-playground/screens/OnboardingScreen.js";function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}class M extends o.a.Component{constructor(){var e,t;super(...arguments),e=this,this.onPressPaymentFlowButton=(t=function*(){console.log("PaymentTestScreen::onPressPaymentFlowButton() start");let t=yield u.b.openBrowserAsync("https://expo.io");console.log("PaymentTestScreen::onPressPaymentFlowButton() end",t),e.setState({result:t})},function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(e){z(r,a,o,i,l,"next",e)}function l(e){z(r,a,o,i,l,"throw",e)}i(void 0)})})}render(){return o.a.createElement(s.a,{style:V.container,__source:{fileName:D,lineNumber:29}},o.a.createElement(k.a,{style:V.container,contentContainerStyle:V.contentContainer,__source:{fileName:D,lineNumber:30}},o.a.createElement(s.a,{style:V.getStartedContainer,__source:{fileName:D,lineNumber:32}},o.a.createElement(h.a,{__source:{fileName:D,lineNumber:34}},"Onboarding"),o.a.createElement(h.a,{style:V.getStartedText,__source:{fileName:D,lineNumber:37}},"PayPal Payment Test"),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:41}},"PayPal partner account."),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:42}},"Client ID: |_________|"),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:43}},"Client Secret: |_________|"),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:44}},"TODO: Add Webhook to this account"),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:45}},"TODO: Let PayPal configure account for ISU"),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:46}},"[ Link PayPal merchant account\xa0]"),o.a.createElement(h.a,{__source:{fileName:D,lineNumber:47}},"Merchant Account information"))))}}M.navigationOptions=(e=>{e.navigation,e.navigationOptions,e.screenProps});const V=l.a.create({container:{flex:1,backgroundColor:"#fff"},contentContainer:{paddingTop:30},getStartedContainer:{alignItems:"center",marginHorizontal:50},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){F(e,t,n[t])})}return e}({position:"absolute",bottom:0,left:0,right:0},r.a.select({ios:{shadowColor:"black",shadowOffset:{height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}});var R="/Users/xanderiel/Development/xanderia/apps/shop-playground/screens/CheckoutScreen.js";function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class H extends o.a.Component{componentDidMount(){console.log("CheckoutScreen.componentDidMount(): started",{"this.props":this.props}),this.props.navigation.setParams({auth:"myauth"})}render(){return o.a.createElement(s.a,{style:W.container,__source:{fileName:R,lineNumber:32}},o.a.createElement(k.a,{style:W.container,contentContainerStyle:W.contentContainer,__source:{fileName:R,lineNumber:33}},o.a.createElement(s.a,{style:W.getStartedContainer,__source:{fileName:R,lineNumber:35}},o.a.createElement(h.a,{__source:{fileName:R,lineNumber:37}},"Checkout"),o.a.createElement(h.a,{style:W.getStartedText,__source:{fileName:R,lineNumber:39}},"PayPal Payment Test"))))}}H.navigationOptions=(e=>{e.navigation,e.navigationOptions,e.screenProps});const W=l.a.create({container:{flex:1,backgroundColor:"#fff"},contentContainer:{paddingTop:30},getStartedContainer:{alignItems:"center",marginHorizontal:50},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){U(e,t,n[t])})}return e}({position:"absolute",bottom:0,left:0,right:0},r.a.select({ios:{shadowColor:"black",shadowOffset:{height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}});var X="/Users/xanderiel/Development/xanderia/apps/shop-playground/screens/TransactionsScreen.js";function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}class q extends o.a.Component{constructor(){var e,t;super(...arguments),e=this,this.onPressPaymentFlowButton=(t=function*(){console.log("PaymentTestScreen::onPressPaymentFlowButton() start");let t=yield u.b.openBrowserAsync("https://expo.io");console.log("PaymentTestScreen::onPressPaymentFlowButton() end",t),e.setState({result:t})},function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(e){G(r,a,o,i,l,"next",e)}function l(e){G(r,a,o,i,l,"throw",e)}i(void 0)})})}render(){return o.a.createElement(s.a,{style:K.container,__source:{fileName:X,lineNumber:29}},o.a.createElement(k.a,{style:K.container,contentContainerStyle:K.contentContainer,__source:{fileName:X,lineNumber:30}},o.a.createElement(s.a,{style:K.getStartedContainer,__source:{fileName:X,lineNumber:32}},o.a.createElement(h.a,{__source:{fileName:X,lineNumber:34}},"Transactions"),o.a.createElement(h.a,{style:K.getStartedText,__source:{fileName:X,lineNumber:37}},"PayPal Payment Test"),o.a.createElement(E.a,{style:K.paragraph,title:"Open WebBrowser",onPress:this.onPressPaymentFlowButton,__source:{fileName:X,lineNumber:41}}))))}}q.navigationOptions=(e=>{e.navigation,e.navigationOptions,e.screenProps});const K=l.a.create({container:{flex:1,backgroundColor:"#fff"},contentContainer:{paddingTop:30},getStartedContainer:{alignItems:"center",marginHorizontal:50},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){J(e,t,n[t])})}return e}({position:"absolute",bottom:0,left:0,right:0},r.a.select({ios:{shadowColor:"black",shadowOffset:{height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}});var Q="/Users/xanderiel/Development/xanderia/apps/shop-playground/screens/DisputesScreen.js";function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}class $ extends o.a.Component{constructor(){var e,t;super(...arguments),e=this,this.onPressPaymentFlowButton=(t=function*(){console.log("PaymentTestScreen::onPressPaymentFlowButton() start");let t=yield u.b.openBrowserAsync("https://expo.io");console.log("PaymentTestScreen::onPressPaymentFlowButton() end",t),e.setState({result:t})},function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(e){Y(r,a,o,i,l,"next",e)}function l(e){Y(r,a,o,i,l,"throw",e)}i(void 0)})})}render(){return o.a.createElement(s.a,{style:ee.container,__source:{fileName:Q,lineNumber:29}},o.a.createElement(k.a,{style:ee.container,contentContainerStyle:ee.contentContainer,__source:{fileName:Q,lineNumber:30}},o.a.createElement(s.a,{style:ee.getStartedContainer,__source:{fileName:Q,lineNumber:32}},o.a.createElement(h.a,{__source:{fileName:Q,lineNumber:34}},"Disputes"),o.a.createElement(h.a,{style:ee.getStartedText,__source:{fileName:Q,lineNumber:37}},"PayPal Payment Test"),o.a.createElement(E.a,{style:ee.paragraph,title:"Open WebBrowser",onPress:this.onPressPaymentFlowButton,__source:{fileName:Q,lineNumber:41}}))))}}$.navigationOptions=(e=>{e.navigation,e.navigationOptions,e.screenProps});const ee=l.a.create({container:{flex:1,backgroundColor:"#fff"},contentContainer:{paddingTop:30},getStartedContainer:{alignItems:"center",marginHorizontal:50},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Z(e,t,n[t])})}return e}({position:"absolute",bottom:0,left:0,right:0},r.a.select({ios:{shadowColor:"black",shadowOffset:{height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}});var te="/Users/xanderiel/Development/xanderia/apps/shop-playground/navigation/MainTabNavigator.js";const ne=Object(g.createStackNavigator)({Configuration:L},{defaultNavigationOptions:{headerTitle:o.a.createElement(C,{__source:{fileName:te,lineNumber:16}})}}),ae=Object(g.createStackNavigator)({Onboarding:M},{defaultNavigationOptions:{headerTitle:o.a.createElement(C,{__source:{fileName:te,lineNumber:17}})}}),oe=Object(g.createStackNavigator)({Checkout:H},{defaultNavigationOptions:{headerTitle:o.a.createElement(C,{__source:{fileName:te,lineNumber:18}})}}),re=Object(g.createStackNavigator)({Transactions:q},{defaultNavigationOptions:{headerTitle:o.a.createElement(C,{__source:{fileName:te,lineNumber:19}})}}),ie=Object(g.createStackNavigator)({Disputes:$},{defaultNavigationOptions:{headerTitle:o.a.createElement(C,{__source:{fileName:te,lineNumber:20}})}});ne.navigationOptions={tabBarLabel:"Configuration",tabBarIcon:e=>{let t=e.focused;return o.a.createElement(b,{focused:t,name:"cog",__source:{fileName:te,lineNumber:22}})}},ae.navigationOptions={tabBarLabel:"Onboarding",tabBarIcon:e=>{let t=e.focused;return o.a.createElement(b,{focused:t,name:"user-plus",__source:{fileName:te,lineNumber:23}})}},oe.navigationOptions={tabBarLabel:"Checkout",tabBarIcon:e=>{let t=e.focused;return o.a.createElement(b,{focused:t,name:"shopping-cart",__source:{fileName:te,lineNumber:24}})}},re.navigationOptions={tabBarLabel:"Transactions",tabBarIcon:e=>{let t=e.focused;return o.a.createElement(b,{focused:t,name:"list",__source:{fileName:te,lineNumber:25}})}},ie.navigationOptions={tabBarLabel:"Disputes",tabBarIcon:e=>{let t=e.focused;return o.a.createElement(b,{focused:t,name:"exclamation-triangle",__source:{fileName:te,lineNumber:26}})}};var le=Object(g.createBottomTabNavigator)({ConfigurationStack:ne,OnboardingStack:ae,CheckoutStack:oe,TransactionsStack:re,DisputesStack:ie},{initialRouteName:"CheckoutStack",lazy:!0,navigationOptions:{headerStyle:{backgroundColor:"#f4511e"},headerTintColor:"#00ffff",headerTitleStyle:{fontWeight:"bold"}},defaultNavigationOptions:{headerStyle:{backgroundColor:"#f4511e"},headerTintColor:"#00ffff",headerTitleStyle:{fontWeight:"bold"}}}),se=Object(g.createAppContainer)(Object(g.createSwitchNavigator)({Main:le})),ce=n(342),ue=(n(999),n(1001),n(41));n.d(t,"a",function(){return pe});var me="/Users/xanderiel/Development/xanderia/apps/shop-playground/App.js";function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ge(e,t,n[t])})}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}ce.initializeApp({apiKey:"AIzaSyD5QsWJ7GXajn35NZoI02zBWqjwLpurT6s",authDomain:"xanderia-e7b8f.firebaseapp.com",databaseURL:"https://xanderia-e7b8f.firebaseio.com",projectId:"xanderia-e7b8f",storageBucket:"xanderia-e7b8f.appspot.com",messagingSenderId:"815820095221"}),"web"!==r.a.OS&&Object(ue.d)();class pe extends o.a.Component{constructor(e){var t;super(e),this.state={isLoadingComplete:!1,firebaseAuth:null,theme:null,lightnessMode:null,locale:null,language:null},this.setTheme=(e=>{this.setState(t=>{t.theme;return{theme:e}})}),this.setLightnessMode=(e=>{this.setState(t=>{t.lightnessMode;return{lightnessMode:e}})}),this.setLocale=(e=>{this.setState(t=>{t.locale;return{locale:e}})}),this.setLanguage=(e=>{this.setState(t=>{t.language;return{language:e}})}),this._loadResourcesAsync=(t=function*(){return Promise.all([c.a.loadAsync([]),u.a.loadAsync(fe({},m.a.FontAwesome.font))])},function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(e){de(r,a,o,i,l,"next",e)}function l(e){de(r,a,o,i,l,"throw",e)}i(void 0)})}),this._handleLoadingError=(e=>{console.warn(e)}),this._handleFinishLoading=(()=>{this.setState({isLoadingComplete:!0})});let n=localStorage.getItem("xanderiaSessionID");console.log("App.constructor(): started",{props:e,xanderiaSessionId:n})}componentDidMount(){let e="App.componentDidMount()";console.log(e+": started",{this:this});let t=this;ce.auth().onAuthStateChanged(function(n){if(console.log(e+".onAuthStateChanged:",{user:n}),null===t.state.firebaseAuth&&null===n||t.setState({firebaseAuth:n}),n)n.displayName,n.email,n.emailVerified,n.photoURL,n.isAnonymous,n.uid,n.providerData})}render(){let e={firebaseAuth:this.state.firebaseAuth,theme:this.state.theme,setTheme:this.setTheme,lightnessMode:this.state.lightnessMode,setLightnessMode:this.setLightnessMode,locale:this.state.locale,setLocale:this.setLocale,language:this.state.language,setLanguage:this.setLanguage};return console.log("App.render(): started",{state:this.state,contextValue:e}),console.log("================================"),this.state.isLoadingComplete||this.props.skipLoadingScreen?o.a.createElement(s.a,{style:be.container,__source:{fileName:me,lineNumber:84}},"ios"===r.a.OS&&o.a.createElement(i.a,{barStyle:"default",__source:{fileName:me,lineNumber:85}}),o.a.createElement(v.Provider,{value:e,__source:{fileName:me,lineNumber:86}},o.a.createElement(se,{__source:{fileName:me,lineNumber:87}}))):o.a.createElement(f.a,{startAsync:this._loadResourcesAsync,onError:this._handleLoadingError,onFinish:this._handleFinishLoading,__source:{fileName:me,lineNumber:81}})}}const be=l.a.create({container:{flex:1,backgroundColor:"#fff"}})},570:function(e,t,n){n(571),e.exports=n(757)}},[[570,1,2]]]);