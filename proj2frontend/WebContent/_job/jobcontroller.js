app.controller('JobController', function($scope, $location, JobService) {
	$scope.job = {
		jobTitle : '',
		jobDescription : '',
		skillsRequired : '',
		salary : '',
		location : ''
	}
	$scope.saveJob = function() {
		console.log('enteringsave job in job controller')

		JobService.saveJob($scope.job).then(function(response) {
			console.log("successfully inserted job details");
			alert("Posted job successfully");
			$location.path('/home');
		}, function(response) {
			console.log("failure " + response.status);
			console.log(response.data.message)
			$location.path('/postJob')
		})
	}
})
