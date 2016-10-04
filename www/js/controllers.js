angular.module('app.controllers', [])

    .controller('registerGiftCtrl', ['$scope', '$stateParams', '$timeout', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $timeout, $rootScope) {
            $scope.selectedTransaction = "Gift";
            $scope.selectedGiftType = "Green";
            $scope.previousGift = "No";
            $scope.selectedRelationship = "Vendor";

            $scope.changeGiftType = function () {
                var red = document.getElementById('registerGift-select15');
                var green = document.getElementById('registerGift-select14');
                
                if (this.selectedGiftType == 'Red') {
                    red.classList.remove("ng-hide");
                    green.classList.add("ng-hide");
                } else {
                    red.classList.add("ng-hide");
                    green.classList.remove("ng-hide");
                }
            };
        }])

    .controller('giftsCtrl', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, $rootScope) {
            $scope.getGifts = function () {
                $state.go($stateParams.viewName);
            }
        }])

    .controller('reportCtrl', ['$scope', '$stateParams','$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, $rootScope) {
            $scope.onItemClick = function () {
                $state.go('tabsController.reportGiftDetail');
            }
        }])

    .controller('loginCtrl', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, $rootScope) {
            $scope.username = "";
            $scope.password = "";
            // $scope.state = $state;
            $scope.login = function () {
                if (this.username.toLowerCase() == "employee" && this.password == "123456") {
                    //Employee login 
                    $rootScope.hideApprove = true;
                    $state.go('tabsController.registerGift');
                } else if (this.username.toLowerCase() == "approver" && this.password == "123456") {
                    //Approver login
                    $rootScope.hideApprove = false;
                    $state.go('tabsController.registerGift');
                }
            };
        }])

    .controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('approvalCtrl', ['$scope', '$stateParams','$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, $rootScope) {
            $scope.onItemClick = function () {
                $state.go('tabsController.giftDetail');
            }
        }])

    .controller('tabController', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, $rootScope) {
            $scope.reportTabClick = function () {
                $state.go('tabsController.reportGifts');
            }

            $scope.approveTabClick = function () {
                $state.go('tabsController.gifts');
            }
        }])
    .controller('disclosureCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('formACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {
            $scope.selectedRelationship = "Spouse";
            $scope.investmentOnCloseRelation = "No";
        }])

    .controller('formBCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {
            $scope.selectedRelationship = "Spouse";
            $scope.investmentOnCloseRelation = "No";
        }])

    .controller('giftDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {
            $scope.showButtons = true;
            if($stateParams.viewName == "tabsController.report"){
                $scope.showButtons = false;
            }
        }])
