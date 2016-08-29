(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'wu.masonry',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .controller('HomeController', HomeController)
    .controller('ProjectsController', ProjectsController)
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider', '$windowProvider'];

  function config($urlProvider, $locationProvider, $windowProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);                    
  }

HomeController.$inject = ['$window', '$scope', '$stateParams', '$state', '$controller', '$sanitize', '$sce'];
function HomeController($window, $scope, $stateParams, $state, $controller, $sanitize, $sce) {
  angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

  $scope.scrollPos = 0;
  $window.onscroll = function() {
    console.log("scroll");
    $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
    $scope.$apply(); //or simply $scope.$digest();
  };             

  $scope.events = [{"title":"this.begin", "date":"July 8th, 1996", 
      "description":"I was born in Tonasket, Washington, a neighboring town to my childhood home: Republic.", 
      "icon":"heart", "color":"red"},
    
    {"title":"First place team: Math is Cool Masters", "date":"Winter, 2012", "icon":"trophy", "color":"blue"},
    
    {"title":"PRObE Intern", "date":"Summer, 2013", "icon":"briefcase", "color":"orange"},
    
    {"title":"Eagle Scout Court of Honor", "date":"Spring, 2014", "icon":"trophy", "color":"yellow"},
    
    {"title":"High School Graduation", "date":"Spring, 2014", "description":"I graduated high school, salutatorian of my class.", "icon":"school", "color":"blue"},
    
    {"title":"Interpretive Guide, Stonerose Fossil Center", "date":"Summer, 2014", "icon":"briefcase", "color":"yellow"},
    
    {"title":"Undergraduate Degree: University of Washington", "date":"Fall, 2014", "description":"I began my undergraduate education at the University of Washington.", "icon":"school", "color":"purple"},
    
    {"title":"Forest Service Fuels Tech", "date":"Summer, 2015", "icon":"briefcase", "color":"green"},
    
    {"title":"Declared Informatics Degree", "date":"Summer, 2015", "icon":"information-variant", "color":"yellow"},
    
    {"title":"Declared Applied Computational Math Scienced Degree", "date":"Fall, 2015", "icon":"matrix", "color":"orange"},
    
    {"title":"IT Help Desk: Information School", "date":"Summer, 2016", "description":"I started working at the Information School as an IT Help Desk Assistant, performing systems admin duties, managing accounts, troubleshooting sofware issues, and renting and repairing hardware.", "icon":"briefcase", "color":"purple"}];
}

ProjectsController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function ProjectsController($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

  $scope.projects = [{"url":"../assets/images/auracle-banner.png", "destination":"auracle"},
    {"url":"../assets/images/stickers-banner.png", "destination":"stickers"},
    {"url":"../assets/images/uiuxcontest-banner.png", "destination":"uiux"},
    {"url":"../assets/images/welp-banner.png", "destination":"welp"},
    {"url":"../assets/images/pedestrian-banner.png", "destination":"pedestrian"},
    {"url":"../assets/images/unstressed.gif", "destination":"unstressed"}];
}

})();
