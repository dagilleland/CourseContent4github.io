'use strict';
(function app() {
    // Main application structure
    angular.module('courseApp', []);

    appService.$inject = ['$http'];
    function appService($http) {
        var factory = {};
        return factory;

        // Hoisted functions
        function getAppContent() {
            return $http.get('/data/app.json')
                .catch(getAppDataFail);

            // TODO: Add a logger
            function getAppDataFail(error) {
                if(console); else console = {};
                if (console.log); else console.log = alert;
                console.log('XHR failed: ' + error.data);
            }
        };
    };
})();
