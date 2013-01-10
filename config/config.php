<?php
return array(
	'date.format' => 'M d Y',   // Date format to be used in article page (not for routes)   
	'author.name' => 'karl oscar weber', // Global author name 
	'site.name'  => 'karl oscar weber',   // Site name (Global)
	'site.title' => 'I love Pixels',  // Site default title (Global)
	'article.path'=> './articles',      // Path to articles
	'templates.path' => './templates',  // Path to templates
	'layout.file' => 'layout',    // Site layout file
	'file.extension' => '.md',   // file extension of articles
	'disqus.username' => '',   // Your disqus username or false (Global)
	'markdown'		=> true, //Enable or disable markdown parsing. 
	'base.directory'  => '',
	'prefix' => '',   // prefix to be added with all URLs. eg : '/blog'
	'google.analytics' => false, // Google analytics code. set false to disable
	// Define routes
	'routes' => array(
			// Site root
			'__root__'=> array(
					'route' => '/',
					'template'=>'about',
					'layout' => true
				),
			'article' => array(
					'route' => '/:year/:month/:date/:article',
					'template'=>'article',
					'conditions' => array(
										 'year' => '(19|20)\d\d'
										,'month'=>'([1-9]|[01][0-9])'
										,'date'=>'([1-9]|[0-3][0-9])'
										)
				),
			'archives' => array(
					'route' => '/archives(/:year(/:month(/:date)))',
					'template' => 'archives',
					'conditions' => array(
										'year' => '(19|20)\d\d',
										'month'=>'([1-9]|[01][0-2])'
										)
				),
			'home' => array(
					'route' => '/home',
					'template' => 'about',
					'layout' => true
				),
			'about' => array(
					'route' => '/about',
					'template' => 'about',
					'layout' => true
				),
			'contact' => array(
					'route' => '/contact',
					'template' => 'about',
					'layout' => true
				),			
			'blog' => array(
					'route' => '/blog',
					'template' => 'blog',
					'layout' => true
				),			
			'other' => array(
					'route' => '/other',
					'template' => 'other',
					'layout' => false
				),
			'resume' => array(
					'route' => '/resume',
					'template' => 'resume',
					'layout' => false
				),
			'hireme' => array(
					'route' => '/hireme',
					'template' => 'resume',
					'layout' => false
				),			
			'git-guide' => array(
					'route' => '/git-guide',
					'template' => 'git-guide',
					'layout' => false
				),			
			'cocos2d-guide' => array(
					'route' => '/cocos2d-guide',
					'template' => 'cocos2d-guide',
					'layout' => false
				),			
			'projects' => array(
					'route' => '/projects',
					'template' => 'projects',
					'layout' => false
				),
			'rss' => array(
					'route' => '/feed/rss(.xml)',
					'template' => 'rss',
					'layout' => false,
				),
			'atom' => array(	
					'route' => '/feed(/atom(.xml))',
					'template' => 'atom',
					'layout' => false,
				)
		),
);
