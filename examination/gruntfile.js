module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'dist/js/script.min.js': ['src/js/script.js']
				}
			}
		},
		sprite:{
			all: {
				padding: 3,
				src: 'src/img/sprite/*.png',
				dest: 'src/img/sprite.png',
				destCss: 'src/sass/_sprite.scss'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/sass',
					src: ['*.scss'],
					dest: 'src/css',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['sass']
			}
		},
		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['src/index.html']
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'dist/index.html'
				}
			}
		},
		imagemin: {
			static: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					cwd: 'src/img',
					src: ['*.jpg', '*.png'],
					dest: 'dist/img'
				}]
			}
		}
	});
	//min
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	//sass
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//img
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('min', ['uglify', 'cssmin', 'processhtml', 'htmlmin']);
	grunt.registerTask('default', ['sprite', 'imagemin', 'sass', 'uglify', 'cssmin', 'processhtml', 'htmlmin']);
};
