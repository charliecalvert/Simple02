/**
 * @author Chris Bennett
 */

/* jshint -W099 */


module.exports = function(grunt)
{
	'use strict';

	grunt.initConfig(
	{
   	jshint:{
      all:[
         '**/*.js'
      ],
      options:{
         ignores:[
         'node_modules/**',
         'lib/**'
         ],
         reporter:'checkstyle',
         reporterOutput:'result.xml',
         strict:true,
         newcap:false,
         globals:{
            describe:true,
            afterEach:true,
            beforeEach:true,
            inject:true,
            it:true,
            jasmine:true,
            expect:true,
            angular:true,
            module:true,
            require:true,
            console:true,
            jQuery:true
         }
      }
   	},
	


	});

	// Load plugins here
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['qunit']);
	//grunt.registerTask('dothecopything', ['copy']);
};

