<?php
$uri = $_SERVER['REQUEST_URI'];
$page = basename($uri);

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php
    if ($page == 'home') {
        echo '<meta name="description" content="Portfolio site of Anar Musayev, UX & UI GRAPHIC DESIGN FRONT END WEB DEVELOPMENT">';
    } else if ($page == 'web-sites') {
        echo '<meta name="description" content="Web sites developed by Anar Musayev">';
    } else if ($page == 'video-and-animations') {
        echo '<meta name="description" content="video and animations made by Anar Musayev">';
    } else if ($page == 'applications') {
        echo '<meta name="description" content="mobile and web applications developed by Anar Musayev">';
    } else if ($page == 'corporate-design') {
        echo '<meta name="description" content="corporate design elements like logos, iconography, packaging, infographics, banner and logotypes designed by Anar Musayev">';
    } else if ($page == 'illustrations') {
        echo '<meta name="description" content="character designs, vector and raster image illustrations designed by Anar Musayev">';
    } else if ($page == 'posters') {
        echo '<meta name="description" content="music, concert, conference, information, infographic, competition and event designed by Anar Musayev">';
    } else {
        echo '<meta name="description" content="Portfolio site of Anar Musayev, UX & UI GRAPHIC DESIGN FRONT END WEB DEVELOPMENT">';
    }
    ?>

    <!-- <link rel="stylesheet" href="css/style.css?5">-->
    <link rel="stylesheet" href="css/style.min.css?13">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png">
    <title>Anar Musayev</title>
    <script src="scripts/jquery.min.js"></script>
    <script src="scripts/main.js?1" defer></script>

    <?php
    if ($page == 'home' || $page == 'anarmusayev_new' || $page == '') {
        echo '<script src="scripts/home.js?7" defer></script>';
    } else if ($page == 'applications') {
        echo '<script src="scripts/applications.js?5" defer></script>';
    } else if ($page == 'video-and-animations') {
        echo '<script src="scripts/video-and-animations.js?5" defer></script>';
    } else {
        echo '<script src="scripts/content.js?5" defer></script>';
    }
    ?>

</head>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8N5C4YDMCL"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-8N5C4YDMCL');
</script>


<div class="modal">
    <div class="header">
        <div class="title">
            <!-- Title content goes here -->
        </div>
    </div>
    <div class="content <?php echo ($page == 'illustrations') ? 'illustration-content' : ''; ?>">
        <!-- Content goes here -->
    </div>
    <div class="button-close">&#x292B</div>
</div>



