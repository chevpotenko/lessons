module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'dist/js/script.js'
			}
		},
		uglify:{
			dist:{
				src: ['dist/js/script.js'],
				dest: 'dist/js/script.js'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/sass',
					src: ['*.scss'],
					dest: 'dist/css',
					ext: '.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['src/sass/*.scss'],
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
