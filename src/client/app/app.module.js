(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.admin',
        'app.dashboard',
        'app.layout',
        'filter.truncate',
        'filter.startfrom',
        'filter.partition',
        'ui.bootstrap'
    ]);

})();
