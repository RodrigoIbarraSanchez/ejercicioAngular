var app =
    angular.module('app')
        .config(
            [   '$controllerProvider',
             function ($controllerProvider){
                 //Definir controladores
                app.controller = $controllerProvider.register;
             }
            ]);