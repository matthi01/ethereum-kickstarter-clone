webpackHotUpdate(5,{

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(498);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// grab provider from web3 instance from metamask
/*
    NOTE: NEXT.JS makes use of server side rendering. The window object would not be available on the server.
    On next server, make some initial calls to ethereum for some data fetching.
    ALSO: Most people do not run metamask, so cannot assume that metamask is injecting the web3 instance...
*/
// const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // browser / metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // server / OR user is not running metamask
  // use infura to create own provider
  // pass HttpProvider a URL of a remote node that you have access to... infura
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/KsAC9kkwIlMDfaC6YzqT");

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUE7QUFDQTs7Ozs7QUFLQTs7QUFFQSxJQUFJLFlBQUo7QUFDQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN2RTtBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDRDtBQUhELE9BR08sQUFDTDtBQUNBO0FBQ0E7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFJQTs7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2NhcnVobGFuL0RvY3VtZW50cy91ZGVteS9FdGhlcmV1bS9ldGhlcmV1bS1raWNrc3RhcnRlci1jbG9uZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\caruhlan\\Documents\\udemy\\Ethereum\\ethereum-kickstarter-clone\\ethereum\\web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\caruhlan\\Documents\\udemy\\Ethereum\\ethereum-kickstarter-clone\\ethereum\\web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZTEwMTA3N2U5MjRlNDgwOTE2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz82ZTRhOWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG4vLyBncmFiIHByb3ZpZGVyIGZyb20gd2ViMyBpbnN0YW5jZSBmcm9tIG1ldGFtYXNrXHJcbi8qXHJcbiAgICBOT1RFOiBORVhULkpTIG1ha2VzIHVzZSBvZiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcuIFRoZSB3aW5kb3cgb2JqZWN0IHdvdWxkIG5vdCBiZSBhdmFpbGFibGUgb24gdGhlIHNlcnZlci5cclxuICAgIE9uIG5leHQgc2VydmVyLCBtYWtlIHNvbWUgaW5pdGlhbCBjYWxscyB0byBldGhlcmV1bSBmb3Igc29tZSBkYXRhIGZldGNoaW5nLlxyXG4gICAgQUxTTzogTW9zdCBwZW9wbGUgZG8gbm90IHJ1biBtZXRhbWFzaywgc28gY2Fubm90IGFzc3VtZSB0aGF0IG1ldGFtYXNrIGlzIGluamVjdGluZyB0aGUgd2ViMyBpbnN0YW5jZS4uLlxyXG4qL1xyXG4vLyBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuXHJcbmxldCB3ZWIzO1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAvLyBicm93c2VyIC8gbWV0YW1hc2sgaXMgcnVubmluZ1xyXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG59IGVsc2Uge1xyXG4gIC8vIHNlcnZlciAvIE9SIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcclxuICAvLyB1c2UgaW5mdXJhIHRvIGNyZWF0ZSBvd24gcHJvdmlkZXJcclxuICAvLyBwYXNzIEh0dHBQcm92aWRlciBhIFVSTCBvZiBhIHJlbW90ZSBub2RlIHRoYXQgeW91IGhhdmUgYWNjZXNzIHRvLi4uIGluZnVyYVxyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby9Lc0FDOWtrd0lsTURmYUM2WXpxVFwiXHJcbiAgKTtcclxuXHJcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ldGhlcmV1bS93ZWIzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==