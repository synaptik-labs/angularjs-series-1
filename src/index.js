import angular from 'angular';
import 'angular-route';

import routes from './routes';
import homeComponent from './home.component';

var app = angular.module("todo", ['ngRoute']);
app.config(routes);
app.component('home', homeComponent);
