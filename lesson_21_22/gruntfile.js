module.exports=function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js'],
					dest: 'dist/js',
					ext: '.js',
					extDot: 'first'
				}]
			}
		},
		watch: {
			babel: {
				files: ['src/js/*.js'],
				tasks: ['babel'],
			}
	 }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['babel']);

};
