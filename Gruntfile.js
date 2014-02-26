module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	  connect: {
		server: {
		  options: {
			port: 9001,
			keepalive:true,
			base: ''
		  }
		}
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-connect');

};