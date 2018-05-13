import Web3 from "web3";

// grab provider from web3 instance from metamask
/*
    NOTE: NEXT.JS makes use of server side rendering. The window object would not be available on the server.
    On next server, make some initial calls to ethereum for some data fetching.
    ALSO: Most people do not run metamask, so cannot assume that metamask is injecting the web3 instance...
*/
// const web3 = new Web3(window.web3.currentProvider);

let web3;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // browser / metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // server / OR user is not running metamask
  // use infura to create own provider
  // pass HttpProvider a URL of a remote node that you have access to... infura
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/KsAC9kkwIlMDfaC6YzqT"
  );

  web3 = new Web3(provider);
}

export default web3;