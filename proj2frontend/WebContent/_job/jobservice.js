app.factory('JobService',function($http){
	var jobService={};
	var BASE_URL="http://localhost:8082/proj2backend"
		jobService.saveJob=function(job){
		return $http.post(BASE_URL + "/postJob" , job);
	}
	return jobService;
})