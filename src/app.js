import '../styles/app.scss';

import routes from './configs/routes';
import CalculateService from './services/calculate';

angular.module('calculator', [
  'ngMaterial',
  'ngRoute'
])
  .config(routes)
  .service('calculateService', CalculateService)
;
