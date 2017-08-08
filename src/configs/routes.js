import MainTemplate from '../partials/main.html';
import MainController from '../controller/main';

import '../partials/header.html';

import { Paths } from '../config';

export default /*@ngInject*/($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when(Paths.main, {
      templateUrl: MainTemplate,
      controller: MainController,
      controllerAs: 'mainCalc'
    })
    .otherwise({
      redirectTo: Paths.main
    });
};
