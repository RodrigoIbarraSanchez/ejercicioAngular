'use stric';
//Configuracion para el router
angular.module('app')
    .run(
        [           '$rootScope', '$state', '$stateParams',
         function   ($rootScope, $state, $stateParams){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
         }
        ]
    )
    .config(
        [        '$stateProvider',
         function($stateProvider){
            $stateProvider
                 .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'tpl/layout.html',
                    //resolve: load(['js/controllers/formController.js'])
                })
                .state('app.form', {
                    url: '/form',
                    templateUrl: 'tpl/form.html',
                    //resolve: load(['js/controllers/formController.js'])
                });
         }
        ]);