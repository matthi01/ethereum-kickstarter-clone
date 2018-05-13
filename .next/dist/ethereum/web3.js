"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

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