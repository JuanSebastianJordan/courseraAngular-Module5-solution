(function() {
    'use strict';
    
    var SignUpController = function(MenuService) {
        var sign = this;

        sign.user = {};
        sign.favoriteDish = {};

        sign.showError = false;       
        sign.showMessage = false;     

        sign.signup = function(form) {
            sign.showError = false;
            sign.showMessage = false;
            // If the form is not valid don't submit
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }
            
            MenuService.getFavDish(sign.user.favoriteDish).then(function(response) {
                sign.user.favoriteDishDetails = response.data;
                console.log(sign.favoriteDish);
                MenuService.saveClient(sign.user);
                sign.showMessage = true;
            }, function(error) {
                console.log(error);
                sign.showError = true;
            });
            
        }
    };
    
    SignUpController.$inject = ['MenuService'];
    angular.module('public').controller('SignUpController', SignUpController);
    
})();