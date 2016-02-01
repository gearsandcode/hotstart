(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'helloWorld',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

       // activate();







        vm.centerAnchor = true;
        vm.toggleCenterAnchor = function () {vm.centerAnchor = !vm.centerAnchor}
        vm.userChips = [{name:'James Bond'}, {name:'Clark Kent'}, {name:'Bruce Wayne'}];
        vm.droppedUsers = [];
        vm.droppedObjects2= [];
        vm.onDropCompleteUser=function(data,evt){
            var index = vm.droppedUsers.indexOf(data);
            if (index == -1)
                vm.droppedUsers.push(data);
        }
        vm.onDragSuccessUser=function(data,evt){
            console.log("133","vm","onDragSuccessUser", "", evt);
            var index = vm.droppedUsers.indexOf(data);
            if (index > -1) {
                vm.droppedUsers.splice(index, 1);
            }
        }
        vm.onDragSuccess2=function(data,evt){
            var index = vm.droppedObjects2.indexOf(data);
            if (index > -1) {
                vm.droppedObjects2.splice(index, 1);
            }
        }
        vm.onDropComplete2=function(data,evt){
            var index = vm.droppedObjects2.indexOf(data);
            if (index == -1) {
                vm.droppedObjects2.push(data);
            }
        }
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }








        //function activate() {
        //    var promises = [getMessageCount(), getPeople()];
        //    return $q.all(promises).then(function() {
        //        logger.info('Activated Dashboard View');
        //    });
        //}
        //
        //function getMessageCount() {
        //    return dataservice.getMessageCount().then(function (data) {
        //        vm.messageCount = data;
        //        return vm.messageCount;
        //    });
        //}
        //
        //function getPeople() {
        //    return dataservice.getPeople().then(function (data) {
        //        vm.people = data;
        //        return vm.people;
        //    });
        //}
    }
})();
