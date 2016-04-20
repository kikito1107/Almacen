require('angular');
require('angular-i18n/angular-locale_es-mx');
require('angular-route');

var uibs = require('angular-ui-bootstrap');

var messaging = angular.module('messaging', [
    "ngRoute",
    uibs
]);