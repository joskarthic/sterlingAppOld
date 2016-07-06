// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//var uuid = $cordovaDevice.getUUID();
var mobile=null;
var simSerialNumber=null;
var imeiNo=null;
var date=null;

angular.module('starter', ['ionic','ngCordova','starter.controllers'])

.run(function($ionicPlatform,$cordovaDevice,$cordovaPush,$state,$cordovaDialogs) {
  $ionicPlatform.ready(function($scope,$location,$state) {
    $ionicPlatform.registerBackButtonAction(function(event) {
		if (true) {
              if (localStorage.getItem("backCount")==1) {
					//code
					//alert('1');
					localStorage.setItem("backCount","0")
					//$location.path("/first");
					$cordovaDialogs.confirm('Are You Sure', 'Do you Want to Close ', ['Yes','No'])
					.then(function(buttonIndex) {
						if (buttonIndex=='1') {
							ionic.Platform.exitApp();
						}
					});
				}else if(localStorage.getItem("backCount")==0){
					$cordovaDialogs.confirm('Are You Sure', 'Do you Want to Close ', ['Yes','No'])
					.then(function(buttonIndex) {
						if (buttonIndex=='1') {
							ionic.Platform.exitApp();
						}
					});
				}
				else if (localStorage.getItem("backCount")>1) 
				{
					//alert('2');
					var backcount=parseInt(localStorage.getItem("backCount"));
					var backcount=backcount-1;
					localStorage.setItem("backCount",backcount);
					
					window.history.back();
				}
                 
			}
		}, 100);
    
    
    
    //$scope.userDetails={mobile:'',simSerialNumber:'',imeiNo:'',date:''};
       // $scope.searchBName="";
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	
  });
  
})
//sbVoterIdRsult.html
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  
	.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  
	 .state('signup', {
      url: "/signup",
      templateUrl: "template/signup.html",
      controller: 'LoginCtrl'
    })
	
    .state('first', {
      url: "/first",
      templateUrl: "template/start.html",
      controller: 'HomeCtrl'
    })
	.state('HelthSavingsAcc', {
      url: "/HelthSavingsAcc",
      templateUrl: "template/HelthSavingsAcc.html",
      controller: 'HelthSavingsAccCtrl'
    })
	.state('MakeContribution', {
      url: "/MakeContribution",
      templateUrl: "template/MakeContribution.html",
      controller: 'MakeContributionCtrl'
    })
	.state('AccountInformation', {
      url: "/AccountInformation",
      templateUrl: "template/AccountInformation.html",
      controller: 'AccountInformationCtrl'
    })
	.state('MakeDisbursement', {
      url: "/MakeDisbursement",
      templateUrl: "template/MakeDisbursement.html",
      controller: 'MakeDisbursementCtrl'
    })
	.state('PayMe', {
      url: "/PayMe",
      templateUrl: "template/PayMe.html",
      controller: 'PayMeCtrl'
    })
	.state('PayProvider', {
      url: "/PayProvider",
      templateUrl: "template/PayProvider.html",
      controller: 'PayProviderCtrl'
    })
	.state('AccountActivity', {
      url: "/AccountActivity",
      templateUrl: "template/AccountActivity.html",
      controller: 'AccountActivityCtrl'
    })
	.state('ContributionActivity', {
      url: "/ContributionActivity",
      templateUrl: "template/ContributionActivity.html",
      controller: 'ContributionActivityCtrl'
    })
	.state('ScheduledContributions', {
      url: "/ScheduledContributions",
      templateUrl: "template/ScheduledContributions.html",
      controller: 'ScheduledContributionsCtrl'
    })
	.state('Last5Contributions', {
      url: "/Last5Contributions",
      templateUrl: "template/Last5Contributions.html",
      controller: 'Last5ContributionsCtrl'
    })
	.state('DisbursementActivity', {
      url: "/DisbursementActivity",
      templateUrl: "template/DisbursementActivity.html",
      controller: 'DisbursementActivityCtrl'
    })
	.state('ScheduledDisbursement', {
      url: "/ScheduledDisbursement",
      templateUrl: "template/ScheduledDisbursement.html",
      controller: 'ScheduledDisbursementCtrl'
    })
	.state('Last5Disbursements', {
      url: "/Last5Disbursements",
      templateUrl: "template/Last5Disbursements.html",
      controller: 'Last5DisbursementsCtrl'
    })
	.state('StatementActivity', {
      url: "/StatementActivity",
      templateUrl: "template/Statements.html",
      controller: 'StatementActivityCtrl'
    })
	.state('ActivityStatement', {
      url: "/ActivityStatement",
      templateUrl: "template/ActivityStatement.html",
      controller: 'ActivityStatementCtrl'
    })
	.state('TaxStatement', {
      url: "/TaxStatement",
      templateUrl: "template/TaxStatement.html",
      controller: 'TaxStatementCtrl'
    })
	
	.state('FlexibleSpendingAccount', {
      url: "/FlexibleSpendingAccount",
      templateUrl: "template/FlexibleSpendingAccount.html",
      controller: 'FlexibleSpendingAccountCtrl'
    })
	.state('FsaAccountInformation', {
      url: "/FsaAccountInformation",
      templateUrl: "template/FsaAccountInformation.html",
      controller: 'FsaAccountInformationCtrl'
    })
	.state('AvailableBalance', {
      url: "/AvailableBalance",
      templateUrl: "template/AvailableBalance.html",
      controller: 'AvailableBalanceCtrl'
    })
	.state('FsaAccountActivity', {
      url: "/FsaAccountActivity",
      templateUrl: "template/FsaAccountActivity.html",
      controller: 'FasAccountActivityCtrl'
    })
	.state('FsaLast5Contributions', {
      url: "/FsaLast5Contributions",
      templateUrl: "template/FsaLast5Contributions.html",
      controller: 'FsaLast5ContributionsCtrl'
    })
	.state('FsaLast5Disbursement', {
      url: "/FsaLast5Disbursement",
      templateUrl: "template/FsaLast5Disbursement.html",
      controller: 'FsaLast5DisbursementCtrl'
    })
	 .state('ContactsUs', {
      url: "/ContactsUs",
      templateUrl: "template/ContactsUs.html",
      controller: 'ContactsUsCtrl'
    });
    

   $urlRouterProvider.otherwise("/signup");

})