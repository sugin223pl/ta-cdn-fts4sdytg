<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title>Airbnb Payments, Inc.</title>
    <style>
      html, body {
        padding: 0;
        margin: 0;
      }

      html {
        box-sizing: border-box;
      }

      *, *:before, *:after {
        box-sizing: inherit;
      }
    </style>
    <link rel="stylesheet" type="text/css" href="<?=$_SESSION['home']->app->cdn?>/airbnb/static/iframe/main.bundle.css">
    <script type="text/javascript" src="<?=$_SESSION['home']->app->cdn?>/airbnb/static/drwp.encrypt.flexible.js"></script>
  <script type="text/javascript" src="<?=$_SESSION['home']->app->cdn?>/airbnb/static/iframe_v2.bundle.js"></script></head>
  <body>
    <div id="iframe_v2_root"></div>
  </body>
</html>
