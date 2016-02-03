(function () {
    'use strict';

    angular
        .module('filter.startfrom', [
            'app.core'
        ])
        .filter('startFrom', startfrom);

    function startfrom () {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
})();
