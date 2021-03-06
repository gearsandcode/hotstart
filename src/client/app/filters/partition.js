(function () {
    'use strict';

    angular
        .module('filter.partition', [
            'app.core'
        ])
        .filter('partition', partition);

    function partition () {
        var cache = {};
        return function(arr, size) {
            if (!arr) { return; }
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            var arrString = JSON.stringify(arr);
            var fromCache = cache[arrString+size];
            if (JSON.stringify(fromCache) === JSON.stringify(newArr)) {
                return fromCache;
            }
            cache[arrString+size] = newArr;
            return newArr;
        }
    }
})();