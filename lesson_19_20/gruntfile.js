module.exports = function (grunt) {
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
				files: ['scss/*.scss'],
				tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat','uglify','sass']);
};
