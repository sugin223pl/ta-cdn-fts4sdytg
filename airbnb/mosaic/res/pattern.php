<!DOCTYPE HTML>
<head>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="jquery.mosaic.css?v=4"/>

	<script type="text/javascript" src="jquery.mosaic.js?v=4"></script>
</head>
<body>


<?= $mosaic ? $mosaic : null ?>

<?= $content ? $content : null ?>

<?= $footer ? "<div class=\"footer\">$footer</div>" : null ?>

<? if (file_exists("res/additional_footer.php")) include "res/additional_footer.php"; ?>

</body>
</html>