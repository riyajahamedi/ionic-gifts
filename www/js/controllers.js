angular.module('app.controllers', [])

    .controller('registerGiftCtrl', ['$scope', '$stateParams', '$timeout', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $timeout, $rootScope) {
            $scope.selectedGift = "";
            $scope.selectedGiftType = "";
            $scope.selectedIndustry = "";
            $scope.changeIndustry = function () {
                var element = document.getElementById('registerGift-textarea2');
                if (this.selectedIndustry == 'Govt') {
                    element.classList.remove("ng-hide");
                } else {
                    element.classList.add("ng-hide");
                }
            };

            $scope.changeGiftType = function () {
                var element = document.getElementById('registerGift-textarea2');
                if (this.selectedGiftType != 'Gift') {
                    if (!element.classList.contains("ng-hide")) {
                        element.classList.add("ng-hide");
                    }
                }
            };
            $scope.amount = 0;
        }])

    .controller('giftsCtrl', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, $rootScope) {
            $scope.getGifts = function () {
                $state.go($stateParams.viewName);
            }
        }])

    .controller('reportCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {

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
                    $state.go('tabsController.gifts');
                }
            };
        }])

    .controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('approvalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


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
