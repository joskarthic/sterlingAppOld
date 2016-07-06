angular.module('starter.controllers', [])

.controller('ElectionCtrl', function($scope,$http,$location,$ionicModal,$cordovaDialogs) {
    $scope.epicNo={id:'PY/01/015/015450' };
    $scope.registration={epicNo:'PY/01/015/015450',mobile:'',otp:'' };
    $scope.searchBName={name:'',relName:'' };
    $scope.getIngo=[];
    $scope.getNameValue=[];
    $scope.getBloDetails=[];
    $scope.genInfo=[];
    localStorage.setItem("firsttimeReg","nonReg");
    $ionicModal.fromTemplateUrl('contact-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal
    })  

  $scope.openModal = function(epic) {
    $scope.modal.show()
    $scope.getInfo(epic);
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //$scope.$on('$destroy', function() {
  //  $scope.modal.remove();
  //});
  var mobile=localStorage.getItem("mobile");
  var simSerialNumber=localStorage.getItem("simSerialNumber");
  var imeiNo=localStorage.getItem("imeiNo");
  var date=localStorage.getItem("date");
  
  if (localStorage.getItem("Inserted")==null && simSerialNumber!=null && imeiNo!=null && date!=null) {
    
   // alert(date);
     $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"saveGeneralClient",CTZ_MOBILE_NO:mobile,CTZ_SIM_SERIAL_NO:simSerialNumber,CTZ_IMEI_NO:imeiNo,CTZ_APP_INT_DT:date}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
          localStorage.setItem("Inserted","success");
          //alert(data);
          
        })
        .error(function(error){
              
        })
    
  }
    $scope.getInfo=function(epicId)
    {
      //alert(epicId);
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"byIdCard",epic: epicId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
            var ajaxlength = data.rows.length;
            
                //$scope.$apply(function(){
                   $scope.getIngo=data.rows[0];
                   //alert(ajaxlength)
                //})
               
               $("#result").removeClass("hide");
               
            //var db = window.openDatabase("election", "1.0", "election Demo", 100 * 1024 * 1024);
            //db.transaction(function(tx){
            //    tx.executeSql('DROP TABLE IF EXISTS eVoters');
            //    tx.executeSql('CREATE TABLE IF NOT EXISTS eVoters (AC_NO INTEGER, PART_NO INTEGER, SLNOINPART INTEGER, HOUSE_NO TEXT, SECTION_NO TEXT,NAME_EN TEXT,RLN_NAME_EN TEXT,RLN_TYPE TEXT,IDCARD_NO TEXT,SEX TEXT,AGE TEXT,SECTION_NAME_EN TEXT,AC_NAME_EN TEXT,AC_TYPE TEXT)');
            //    tx.executeSql('INSERT OR REPLACE INTO eVoters (AC_NO, PART_NO ,SLNOINPART, HOUSE_NO, SECTION_NO,NAME_EN ,RLN_NAME_EN ,RLN_TYPE ,IDCARD_NO ,SEX ,AGE ,SECTION_NAME_EN  ,AC_NAME_EN ,AC_TYPE ) VALUES("' + data.rows[0].AC_NO + '","' + data.rows[0].PART_NO + '","' + data.rows[0].SLNOINPART + '","' + data.rows[0].HOUSE_NO + '","' + data.rows[0].SECTION_NO + '","' + data.rows[0].NAME_EN + '","' + data.rows[0].RLN_NAME_EN + '","' + data.rows[0].RLN_TYPE + '","' + data.rows[0].IDCARD_NO + '","' + data.rows[0].SEX + '","' + data.rows[0].AGE + '","' + data.rows[0].SECTION_NAME_EN + '","' + data.rows[0].AC_NAME_EN + '","' + data.rows[0].AC_TYPE + '")',successID);
            //    
            //});
        })
        .error(function(error){
            alert("sorry");  
            alert(error);
              
        })
    }
    function successID(){
        return true;
    }
    
    $scope.clear11=function() {
      if ($scope.epicNo.id!="") {
        $scope.epicNo.id="";
        $("#result").addClass("hide");
      }
      
   }
    $scope.getNameInfo=function()
    {
        if ($scope.searchBName.name == "" || $scope.searchBName.relName =="")
        {
            $cordovaDialogs.alert('Its is required', 'Please fill all Fields.', 'OK')
            .then(function() {
              
            });
            return false;
        }
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"byName",name:  $scope.searchBName.name,relName: $scope.searchBName.relName}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
             $scope.getNameValue=data.rows;
             console.log(data.rows);
               $("#searchByName").removeClass("hide");
        })
        .error(function(error){
            alert("sorry");  
            alert(error);
              
        })
        
    }
    $scope.forgotBox=function($epic)
    {
        $("#exampleModal").modal("show");
        $scope.getInfo($epic);
    }
  
    $scope.resetName=function()
    {
      if ($scope.searchBName.name!="" || $scope.searchBName.relName!="") {
        $scope.searchBName={name:'',relName:'' };
        $("#searchByName").addClass("hide");
      }
    }
    
    $scope.searchBAddress={consitituency:'',street:'',door:'' };
     $scope.consitituency=[];
     $scope.streets=[];
     var selectConsitituency="";
      $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"consitituency"}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
          //alert("sataasasdf");
             $scope.consitituency=data.rows;
             console.log(data.rows);
        });
      $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"getIngo"}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .success(function (data) {
        //alert("sataasasdf");
           $scope.genInfo=data.rows;
           console.log(data.rows);
      });
      
      $scope.SelectConsitituency=function()
      {
        //alert($scope.searchBAddress.consitituency.AC_NO);
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"SelectConsitituency",acNo:$scope.searchBAddress.consitituency.AC_NO}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
         // alert();
          
             $scope.streets=data.rows;
              console.log(data.rows);
            
        })
      }
      $scope.getDataByAddress=function()
      {
        if ($scope.searchBAddress.name == "" || $scope.searchBAddress.street =="" || $scope.searchBAddress.door =="" )
        {
            $cordovaDialogs.alert('All Fields are Mandatory', 'Please fill all Fields.', 'OK')
            .then(function() {
              
            });
            return false;
        }
        //console.log($scope.searchBAddress)
        //console.log($scope.searchBAddress.street.SECTION_NO)
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"address",acNo:$scope.searchBAddress.consitituency.AC_NO,sectionNo:$scope.searchBAddress.street.SECTION_NO,partNo:$scope.searchBAddress.street.PART_NO,doorNo:$scope.searchBAddress.door}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
            // console.log(data);
             $scope.getAddressInfo=data.rows;
              $("#searchByName").removeClass("hide");
             
        })
      }
      $scope.resetAddress=function()
      {
        if ($scope.searchBAddress.name != "" || $scope.searchBAddress.street !="" || $scope.searchBAddress.door !="" ) {
          $scope.searchBAddress={consitituency:'',street:'',door:'' };
          $("#searchByName").addClass("hide");
        }
      }
    $scope.getBoothLocation=function(epicId)
    {
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:'location', epic:epicId},{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })
        .success(function(data){
          console.log(data);
               //$scope.modal.show();
              //$scope.initialize(data.rows[0]['latitude']);
             // alert(data.rows[0]['latitude']);
            // alert(data.rows[0]['Polling_Station_Name']);
               var posOptions = {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
             };
            var lat  = data.rows[0]['latitude'];
            var long = data.rows[0]['longitude'];
             var infowindow = new google.maps.InfoWindow({disableAutoPan: true})
            var myLatlng = new google.maps.LatLng(lat, long);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };          
             
            var map = new google.maps.Map(document.getElementById("locationMap"), mapOptions);          
            var marker = new google.maps.Marker({
            map: map,
            // icon: image,
            position: new google.maps.LatLng (lat, long)
          });
             var content =data.rows[0]['Polling_Station_Name'];     
          google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
            return function() {
               infowindow.setContent(content);
               infowindow.open(map,marker);
            };
          })(marker,content,infowindow)); 
            $scope.map = map;
             
              
        }).error(function(){
        });
    }
    
    $scope.getBloDetails=function(epicId)
    {
       //alert(epicId);
        if (epicId== "" )
        {
            $cordovaDialogs.alert('Its is required', 'Please fill Voter Number.', 'OK')
            .then(function() {
              
            });
            return false;
        }
      
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"knowBlo",epic: epicId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
          //console.log(data.rows);
             $scope.getBloDetails=data.rows[0];
             console.log($scope.getBloDetails['name']);
               $("#result").removeClass("hide");
        })
        .error(function(error){
            alert("sorry");  
            alert(error);
              
        })
    }
    
    $scope.clearBlo=function()
    {
      if ($scope.epicNo.id!="" ) {
        $scope.epicNo={id:''};
        $("#result").addClass("hide");
      }
    }
    
  //Crowd Information
  $scope.croudInfo=function()
  {
      
      if (localStorage.getItem("registerMobile")!=null) {
       $location.path("/CroudDetails");
      }
      else{
          $cordovaDialogs.confirm('You dont have permision', 'Registered user only access', ['Sigin Up','Cancel'])
          .then(function(buttonIndex) {
              if (buttonIndex=='1') {
                $location.path("/signup");
              }
          });
      }
  }
  
 
  
  
  
  
  
  
})

.controller('crowdControl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicPlatform,$cordovaDatePicker) {
  $scope.registration={epicNo:'PY/01/015/015450',mobile:'',dob:'',otp:'' };
  
  if (localStorage.getItem("registerMobile")!=null) {
   
         window.history.back();
      }
   
  
  if (localStorage.getItem("registerMobile")!=null)
  {
    var epic=localStorage.getItem("registerEpic");
    var mobileNo=localStorage.getItem("registerMobile");
    var dob=localStorage.getItem("registerDob");
    $scope.registration={epicNo:epic,mobile:mobileNo,dob:dob,otp:'' };
    $("#confirm").attr("readonly",true);
   // $("#mobile").attr("readonly",true);
    $("#otpHide").removeClass("hide");
    $("#register").addClass("hide");
    $("#Conform").removeClass("hide");
    
  }
  
  $scope.getDate=function(){
      var options = {
             date: new Date(),
             mode: 'date', // or 'time'
             minDate: new Date()
         }
      $ionicPlatform.ready(function(){
          $cordovaDatePicker.show(options).then(function(date){
              var date1=date.toString();
              var dataas=date1.split(" ");
              var Month = ["Gobi","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
              var mon = Month.indexOf(dataas[1]); 
              var mon;
              if (dataas[1]=='Jan'){mon='01';}else if (dataas[1]=='Feb'){mon='02';}else if (dataas[1]=='Mar'){mon='03';}else if (dataas[1]=='Apr'){mon='04';}else if (dataas[1]=='May'){mon='05';}else if (dataas[1]=='Jun'){mon='06';}else if (dataas[1]=='Jul'){mon='07';}else if (dataas[1]=='Aug'){mon='08';}else if (dataas[1]=='Sep'){mon='09';}else if (dataas[1]=='Oct'){mon='10';}else if (dataas[1]=='Nov'){mon='11';}else if (dataas[1]=='Dec'){mon='12';}
               var selectedDate=dataas[2]+'-'+mon+'-'+dataas[3];
               //alert(selectedDate);
               $scope.registration.dob=selectedDate;
               //$("#dob").val(selectedDate);
          });
      })
  };
  $scope.backInfo=function()
  {
        if (localStorage.getItem("registerMobile")!=null)
        {
           $cordovaDialogs.confirm('', 'Do you Want to Clear the Entries', ['Yes','No'])
          .then(function(buttonIndex){
              if (buttonIndex=='1') {
                localStorage.removeItem("registerEpic");
                localStorage.removeItem("registerMobile");
                localStorage.removeItem("registerDob");
                $scope.registration={epicNo:'PY/01/015/015450',mobile:'',dob:'',otp:'' };
                $(".confirm").attr("readonly",false);
               // $("#mobile").attr("readonly",false);
                $("#otpHide").addClass("hide");
                $("#register").removeClass("hide");
                $("#Conform").addClass("hide");
              }
          });
            return false;
        }
        else
        {
           $cordovaDialogs.confirm('', 'Do you Want to Clear the Entries', ['Yes','No'])
          .then(function(buttonIndex) {
            if (buttonIndex=='1') {
            $scope.registration={epicNo:'PY/01/015/015450',mobile:'',otp:'' };
            }
            });
           //window.history.back();
        }
      
    
  }
  
  $scope.registerCitizen=function()
  {
     //$scope.registration={epicNo:'PY/01/015/015450',mobile:'' };
     
      var filter = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
      if (filter.test($scope.registration.mobile)) {
     
      }
      else {
      $cordovaDialogs.alert('Its is required', 'Please Enter Valid Mobile Nuber.', 'OK')
            .then(function() {
              
            });
            return false;
      }

      localStorage.setItem("mobile", mobile);
      localStorage.setItem("simSerialNumber", simSerialNumber);
      $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"CitizenRegistration",epic:$scope.registration.epicNo,mobile:$scope.registration.mobile,dob:$scope.registration.dob}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
          console.log(data);
          //return false;
          if (data.exist=="epic") {
              localStorage.setItem("firsttimeReg","registered");
              localStorage.setItem("firsttime","registered");
              $location.path("/CroudDetails");
             //$cordovaDialogs.alert('This Voter Id already exist', 'Please Enter VAlid Voter Id.', 'OK')
             // .then(function() {
             //   
             // });
             // return false;
          }
          else if (data.error=="epic") {
             $cordovaDialogs.alert('Its is required', 'Please Enter Your Voter Id.', 'OK')
              .then(function() {
                
              });
              return false;
          }
          else{
            
            localStorage.setItem("registerEpic", $scope.registration.epicNo);
            localStorage.setItem("registerMobile", $scope.registration.mobile);
            localStorage.setItem("registerdob", $scope.registration.dob);
              $(".confirm").attr("readonly",true);
              $("#otpHide").removeClass("hide");
              $("#register").addClass("hide");
              $("#Conform").removeClass("hide");
              
              //console.log(data);
          }
          //localStorage.setItem("Inserted","success");
          //alert(data);
          
        })
        .error(function(error){
              
        })
  }
  $scope.otpConormation=function()
  {
       
        if ($scope.registration.otp== "" )
        {
            $cordovaDialogs.alert('Its is required', 'Please fill OTP Number.', 'OK')
            .then(function() {
              
            });
            return false;
        }
       
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"otpConormation",epic:$scope.registration.epicNo,mobile:$scope.registration.mobile,otp:$scope.registration.otp}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
          //console.log(data.citizen(0));
          console.log(data.citizen[0].AC_NO);
          
          //return false;
             if (data.error=='otp') {
                 $cordovaDialogs.alert('Its is required', 'Please Enter Your  OTP Number.', 'OK')
                  .then(function() {                    
                  });
                  $scope.registration.otp="";
                  return false;
                
             }
             else
             {
                localStorage.setItem("firsttimeReg","registered");
                localStorage.setItem("firsttime","registered");
                localStorage.setItem("AC_NO",data.citizen[0].AC_NO);
                localStorage.setItem("PART_NO",data.citizen[0].PART_NO);
                localStorage.setItem("CON_NAME",data.citizen[0].ac_name_en);
                localStorage.setItem("BOOTH_NAME",data.citizen[0].Polling_Station_Name);
                $location.path("/CroudDetails");
             }
        
        })
        .error(function(error){
            alert("sorry");  
            alert(error);
              
        })
  }

  
})


.controller('crowdInfoControl', function($scope,$http,$location,$ionicModal,$cordovaDialogs,$ionicPlatform,$cordovaDatePicker,$state) {
        $scope.crowdInfo={epicNo:"",consNo:"",boothNo:"",consName:"",BoothName:"",maleCrowd:"",femaleCrowd:"",lastTime:""};
        $scope.crowdInfo.consNo=localStorage.getItem("AC_NO");
        $scope.crowdInfo.boothNo=localStorage.getItem("PART_NO");
        $scope.crowdInfo.consName=localStorage.getItem("CON_NAME");
        $scope.crowdInfo.BoothName=localStorage.getItem("BOOTH_NAME");
        $scope.crowdInfo.epicNo=localStorage.getItem("registerEpic");
        $http.post('http://10.164.2.122:8000/sqlserverconnection/generalCitizen.php',{searchBy:"getCrowdInfo",epic:$scope.crowdInfo.epicNo,AC_NO:$scope.crowdInfo.consNo,PART_NO:$scope.crowdInfo.boothNo}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .success(function (data) {
          
            console.log(data.crowd[0]);
            var dattta= data.crowd[0].Entry_datetime.date.split(" ");
            var currentTim=dattta[1].split(".");
            var timeing=currentTim[0].split(":");
            var hh = timeing[0];
            var m = timeing[0];
            var s = timeing[0];
            var dd = "AM";
            var h = hh;
            if (h >= 12) {
                h = hh-12;
                dd = "PM";
            }
            if (h == 0) {
                h = 12;
            }
            m = m<10?"0"+m:m;
            
            s = s<10?"0"+s:s;
        
            /* if you want 2 digit hours: */
            h = h<10?"0"+h:h;
            $scope.crowdInfo.maleCrowd=data.crowd[0].M_voters;
            $scope.crowdInfo.femaleCrowd=data.crowd[0].F_voters;
            $scope.crowdInfo.lastTime=h+":"+m+":"+s+" "+dd;
            
        })
  $scope.backtoMain=function()
  {
    $location.path("/first");
  }
  
  });