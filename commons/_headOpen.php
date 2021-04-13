<!DOCTYPE html>
<?php 
	@session_start();
	$httpProtocol = 'https://';
	$host = $_SERVER['SERVER_NAME'];
    $url = '/';
    $thisPage = $_SERVER['PHP_SELF'];
    $siteName = "Gerpensiones";
    $author = 'Strix Development/maneroto';
    $css =
    '
    	<link rel="stylesheet" type="text/css" href="'.$httpProtocol.$host.$url.'css/style.css"/>
    ';
    $js = 
    '
    	<script src="'.$httpProtocol.$host.$url.'js/jquery-3.4.1.min.js"></script>
    	<script src="'.$httpProtocol.$host.$url.'js/imageObserver.min.js"></script>
    	<script src="'.$httpProtocol.$host.$url.'js/submenu.min.js"></script>
    	<script src="'.$httpProtocol.$host.$url.'js/slider.js"></script>
    	<script src="'.$httpProtocol.$host.$url.'js/main.js"></script>
    ';
?>
<html lang="es" prefix="og: http://ogp.me/ns#">

<head>
    <title><?php if (isset($title)) echo $title; else echo $siteName ?></title>

    <!-- Metas generales -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="<?php if (isset($description))echo $description; else echo $siteName; ?>" />
    <meta name="keywords" content="<?php if (isset($keywords))echo $keywords; else echo $siteName; ?>" />

    <!--Metas GEO-->
    <meta name="geo.region" content="MX-GUA" />
    <meta name="geo.placename" content="Le&oacute;n" />
    <meta name="geo.position" content="21.122245;-101.673277" />
    <meta name="ICBM" content="21.122245, -101.673277" />

    <!--Metas OG-->
    <meta property="og:locale" content="es_MX" />
    <meta property="og:title" content="<?php if (isset($title)) echo $title; else echo $siteName ?>" />
    <meta property="og:description"
        content="<?php if (isset($description))echo $description; else echo $siteName; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo $httpProtocol.$host.$url; ?>" />
    <meta property="og:image" content="<?php echo $httpProtocol.$host.$url; ?>img/logo.svg" />
    <meta property="og:site_name" content="<?php echo $siteName?>" />

    <!--Metas DC-->
    <meta content='<?php if (isset($title)) echo $title; else echo $siteName ?>' NAME='DC.Title' />
    <meta content='<?php if (isset($description))echo $description; else echo $siteName; ?>' NAME='DC.Description' />
    <meta content='<?php echo $author?>' NAME='DC.Creator' />
    <meta content="<?php echo $siteName?>" NAME='DC.Publisher' />
    <meta content='<?php echo $httpProtocol.$host.$url; ?>' NAME='DC.Identifier' />
    <meta content='<?php if (isset($keywords))echo $keywords; else echo $siteName; ?>' NAME='DC.keywords' />

    <!--FAVICON-->
    <link rel="apple-touch-icon" sizes="180x180"
        href="<?php echo $httpProtocol.$host.$url; ?>img/Favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32"
        href="<?php echo $httpProtocol.$host.$url; ?>img/Favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16"
        href="<?php echo $httpProtocol.$host.$url; ?>img/Favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo $httpProtocol.$host.$url; ?>img/Favicon/site.webmanifest">
    <link rel="mask-icon" href="<?php echo $httpProtocol.$host.$url; ?>img/Favicon/safari-pinned-tab.svg"
        color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!-- Author -->
    <meta name="author" content="<?php echo $author; ?>">

    <!--HREFLANG-->
    <link rel="alternate" hreflang="x-default" href="<?php echo $httpProtocol.$host.$url.$thisPage; ?>" />

    <!-- Font Awesome -->
    <link rel="preload" href="<?php echo $httpProtocol.$host.$url?>css/webfonts/fa-solid-900.woff2" as="font"
        type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo $httpProtocol.$host.$url?>css/webfonts/fa-brands-400.woff2" as="font"
        type="font/woff2" crossorigin>
    <link rel="stylesheet" type="text/css"
        href="<?php echo $httpProtocol.$host.$url?>css/Fontawesome/fontawesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $httpProtocol.$host.$url?>css/Fontawesome/brands.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $httpProtocol.$host.$url?>css/Fontawesome/solid.min.css">