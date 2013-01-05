module.exports = function(grunt) {
	
	"use strict";
	
	grunt.initConfig({
		
		jsio: {
			dist: {
				src: ['test/images/*'],
				dest: 'dist/js/jsio-resources.js'
			}
		},
		
		test: {
			files: ['test/**/*.js']
		},
		
		lint: {
			files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
		},
		
		watch: {
			files: '<config:lint.files>',
			tasks: 'default'
		},
		
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true,
				es5: true
			}
		}
	});
	
	grunt.loadTasks('tasks');
	
	grunt.registerTask('default', 'lint jsio test');
};