app.controller('OneHundredDaysController',function($sce){
  var vm = this;
  vm.logUrl = $sce.trustAsResourceUrl('https://raw.githubusercontent.com/bozeman42/100-days-of-code/master/log.md');
  
  
});