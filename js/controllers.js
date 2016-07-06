
//var IPAddress="demogepla2016.py.gov.in/fst";
//var IPAddress="164.100.148.137/ElectionApp";

var db = window.openDatabase("Election", "1.0", "Election Demo", 100 * 1024 * 1024);
angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope,$http,$location,$ionicModal,$ionicPlatform,$cordovaDialogs) {
	
	
	// $ionicPlatform.registerBackButtonAction(function(event) {
		// if (true) {
			// alert();
			// if (localStorage.getItem("backCount")==1) {
				// //code
				// alert('1');
				// localStorage.setItem("backCount","0")
				// $location.path("/first");
			// }
			// else if (localStorage.getItem("backCount")>1) 
			// {
				// //alert('2');
				// var backcount=parseInt(localStorage.getItem("backCount"));
				// var backcount=backcount-1;
				// localStorage.setItem("backCount",backcount);
				
				// window.history.back();
			// }
			// else{
				// $cordovaDialogs.confirm('Are You Sure', 'Do you Want to Exit ', ['Yes','No'])
				// .then(function(buttonIndex) {
					// if (buttonIndex=='1') {
					// ionic.Platform.exitApp();
					// }
					// // else if (buttonIndex=='2') {
						// // $location.path("/caughtEnRouteEntryIn");
					// // }
				// });  
			// }
		// }
	// }, 100);
  
	//$(".headder").addClass("hide");
	$scope.logIn=function()
	{
		$location.path("/first");
		$(".headder").removeClass("hide");
		
		
	}
	$scope.Logout=function()
	{
		$(".headder").addClass("hide");
		$location.path("/signup");
		
	}
	
	$scope.goBack=function()
	{
		//alert(localStorage.getItem("backCount"));
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
	
	$scope.goHome=function(){
		localStorage.setItem("backCount","1");
		$location.path("/first");
	}
	
	
	
})
.controller('HomeCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","1");
	
})
.controller('HelthSavingsAccCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","2");
	
})

.controller('MakeContributionCtrl', function($scope,$ionicPlatform,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork,$cordovaDatePicker) {

	localStorage.setItem("backCount","3");
	//$scope.MakeCont.transactionDate
	$scope.transactionDate="";
	$scope.getTransactionDate=function(){
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["Gobi","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.transactionDate=selectedDate;
					$("#deliveryDate").val(selectedDate);
				});
			})
		
	};
	
})

.controller('AccountInformationCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('MakeDisbursementCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('PayMeCtrl', function($scope,$ionicPlatform,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork,$cordovaDatePicker) {

	localStorage.setItem("backCount","4");
	$scope.TransDate="";
	
	$scope.getTransDate=function(){
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["Gobi","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.TransDate=selectedDate;
				});
			})
		
	};
	
	
})
.controller('PayProviderCtrl', function($scope,$ionicPlatform,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork,$cordovaDatePicker) {

	localStorage.setItem("backCount","4");
	
	$scope.TransDate="";
	
	$scope.getTransDate=function(){
		
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["Gobi","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.TransDate=selectedDate;
				});
			})
		
	};
	
	
	
})
.controller('AccountActivityCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('ContributionActivityCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","4");
	
})
.controller('ScheduledContributionsCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","5");
	
})
.controller('Last5ContributionsCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","5");
	
})
.controller('DisbursementActivityCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","4");
	
})
.controller('ScheduledDisbursementCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","5");
	
})
.controller('Last5DisbursementsCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","5");
	
})
.controller('StatementActivityCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('ActivityStatementCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","4");
	$scope.activity={startDate:'',EndtDate:''};
	
	$scope.getStartDate=function(){
		
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["Gobi","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.activity.startDate=selectedDate;
				});
			})
		
	};
	$scope.getEndDate=function(){
		
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["Gobi","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.activity.EndtDate=selectedDate;
				});
			})
		
	};
	
	
})
.controller('TaxStatementCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","4");
	
})



.controller('FlexibleSpendingAccountCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","2");
	
})
.controller('FsaAccountInformationCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('AvailableBalanceCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('FasAccountActivityCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","3");
	
})
.controller('FsaLast5ContributionsCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","4");
	
})
.controller('FsaLast5DisbursementCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","4");
	
})


.controller('ContactsUsCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {

	localStorage.setItem("backCount","2");
	
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	alert("AppCtrl");
})