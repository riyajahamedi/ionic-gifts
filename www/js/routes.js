angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tabsController.registerGift', {
        url: '/page2',
        views: {
          'tab1': {
            templateUrl: 'templates/registerGift.html',
            controller: 'registerGiftCtrl'
          }
        }
      })

      .state('tabsController.gifts', {
        url: '/page3',
        params: {
          viewName: 'tabsController.approval'
        },
        views: {
          'tab2': {
            templateUrl: 'templates/gifts.html',
            controller: 'giftsCtrl'
          }
        }
      })

      .state('tabsController.reportGifts', {
        url: '/page3',
        params: {
          viewName: 'tabsController.report'
        },
        views: {
          'tab3': {
            templateUrl: 'templates/gifts.html',
            controller: 'giftsCtrl'
          }
        }
      })

      .state('tabsController.report', {
        url: '/page4',
        views: {
          'tab3': {
            templateUrl: 'templates/report.html',
            controller: 'reportCtrl'
          }
        }
      })

      .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true,
        controller: 'tabController'
      })

      .state('login', {
        url: '/page5',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('signup', {
        url: '/page6',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      })

      .state('tabsController.approval', {
        url: '/page8',
        views: {
          'tab2': {
            templateUrl: 'templates/approval.html',
            controller: 'approvalCtrl'
          }
        }
      })

      .state('tabsController.disclosure', {
        url: '/page10',
        views: {
          'tab4': {
            templateUrl: 'templates/disclosure.html',
            controller: 'disclosureCtrl'
          }
        }
      })

      .state('tabsController.formA', {
        url: '/page12',
        views: {
          'tab4': {
            templateUrl: 'templates/formA.html',
            controller: 'formACtrl'
          }
        }
      })

      .state('tabsController.formB', {
        url: '/page14',
        views: {
          'tab4': {
            templateUrl: 'templates/formB.html',
            controller: 'formBCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/page5')
  });