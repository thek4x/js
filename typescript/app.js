var typescript = /** @class */ (function () {
    function typescript() {
    }
    typescript.prototype.hello = function (parameter) {
        console.log(parameter);
    };
    return typescript;
}());
var test;
(function (test) {
    test["name"] = "enes";
    test["srname"] = "kaya";
})(test || (test = {}));
;
console.log(test.name, " - ", test.srname);
