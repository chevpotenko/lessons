module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		
		concat: {
			options: {
				separator: ';' 
			},
			dist: {
				src: ['src_js/*.js'],
				dest: 'js/script.js'
			}
		},
		
		uglify:{
			dist:{
				src: ['js/script.js'],
				dest: 'js/script.js'
			}
		},
		
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		
		watch: {
			sass: {
				// We watch and compile sass files as normal but don't live reload here
				files: ['scss/*.scss'],
				tasks: ['sass']
			}
		}
		
	});

	// Load the plugin that provides the "uglify" task.
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).

	grunt.registerTask('default', ['concat','uglify','sass','watch']);

};