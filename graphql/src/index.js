"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var resolvers_1 = require("./root/resolvers");
var typeDefs_1 = require("./root/typeDefs");
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs_1["default"],
    resolvers: resolvers_1["default"]
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
