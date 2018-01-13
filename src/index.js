import angular from 'angular';
import 'angular-route';
import 'angular-messages';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

import routes from './routes';
import homeComponent from './home.component';

var app = angular.module("todo", ['ngRoute', 'ngMaterial']);
app.config(routes);
app.component('home', homeComponent);
