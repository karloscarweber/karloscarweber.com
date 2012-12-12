<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>
      <?php 
        $title= (isset($global['title'])) ? $global['title'] : $global['site.title'];
        echo $global['site.name'] .' | '. $title;
      ?>
    </title>
    <meta name="description" content="">
    <meta content='Authur Name' name='Author'/> 

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le styles -->
    <link href="<?php echo $global['base.directory'];?>/templates/css/main.css" rel="stylesheet">
    <link href="<?php echo $global['base.directory'];?>/templates/css/grater.css" rel="stylesheet">

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">

    <!-- Mobile viewport optimized: h5bp.com/viewport -->
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />


  </head>

  <body>

    <div class="container">
      <a href="" class="logoIcon"></a>
      <div class="header">
        <div class="nav">
          <ul>
            <li><a href="<?Php echo $global['prefix'];?>/archives">Archives</a></li>
            <li><a href="<?Php echo $global['prefix'];?>/about">About</a></li>
            <li><a href="<?Php echo $global['prefix'];?>/other">Other</a></li>
          </ul>
        </div>
        <h1>
          <a class="logo" href="<?Php echo $global['prefix'];?>/"><?Php echo $global['site.name'];?></a>
        </h1>


      </div><!-- End .header -->
    </div><!-- End .container -->