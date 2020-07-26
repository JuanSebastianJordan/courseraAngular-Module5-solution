(function() {
    'use strict';
    
    var InformationController = function(MenuService, ApiPath) {
        var info = this;
        info.apiPath = ApiPath;
        
        info.signedUp = false;
        
        info.user = MenuService.getClient();
        console.log('User is', info.user);
        if (angular.equals(info.user, {})) {
            info.signedUp = false;
        } else {
            info.signedUp = true;
        }
    };
    InformationController.$inject = ['MenuService', 'ApiPath'];
    angular.module('public').controller('InformationController', InformationController);

})();