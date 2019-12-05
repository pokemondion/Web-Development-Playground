(function(){

    'use strict';

    angular.module('app',[])
        .controller('controller', indexcontroller);
    
    function indexcontroller () {
        var vm = this;
        vm.gg = 'gg game';
        vm.blur = false;
        vm.blurEffect = function () {
            vm.blur = !vm.blur;
        }
    }
}());