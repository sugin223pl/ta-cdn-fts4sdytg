<?php
$dir = 'tile-view-2x';
$dh  = opendir($dir);
$files = [];
    while (false !== ($fileName = readdir($dh))) {
        $ext = substr($fileName, strrpos($fileName, '.') + 1);
            if(in_array($ext, array('jpg', 'jpeg', 'png'))) {
                $flname = $fileName;
                $name = basename($flname, '.png');
                $name = ucwords(str_replace("-", " ", $name));
                echo "('$name', 'airbnb/static/select/pdp/amenities/tile-view-2x/$flname', 3, 'amenities'),"."<br />";
            }
    }