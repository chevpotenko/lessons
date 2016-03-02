module.exports = function(grunt) {

	grunt.initConfig({

		concat: {
			js: {
				src: ['js/src_js/*.js',],
				dest: 'js/script.js',
			},
			css: {
				src: ['css/src_css/*.css',],
				dest: 'css/style.css',
			}
		},

		uglify: {
			my_target: {
				files: {
					'js/script.min.js': ['js/script.js']
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
