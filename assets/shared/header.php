<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Night Shadow</title>
    <link rel="stylesheet" type="text/css" href="assets/styles/style.css">
    <link rel="stylesheet" type="text/css" href="assets/styles/theme.css">
    <?php if ("assets/styles/" . file_exists(basename($_SERVER['SCRIPT_FILENAME'], ".php") . ".css")) { ?>
        <link href="assets/styles/<?= basename($_SERVER['SCRIPT_FILENAME'], ".php")?>.css" rel="stylesheet" type="text/css" />
    <?php } ?>
    <link rel="shortcut icon" href="assets/images/Logo_Night_Shadow_Version_3.png" type="image/x-icon">
    <meta http-equiv="refresh" content="60">
    <script src="assets/js/konami.js"></script>
    <script>
        const easterEgg = new Konami("../../konami.html");
        var listOfClasses = ["theme1", "theme2", "theme3", "theme4", "theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"];
        var randomNum = Math.floor(Math.random() * listOfClasses.length);
        document.documentElement.classList.add(listOfClasses[randomNum]);
    </script>
</head>
<body>
<header>
    <article class="hearImage">
        <img id="logo_easteregg" src="assets/images/Logo_Night_Shadow_Version_3.png" alt="logo" class="logo">
        <h1>Night Shadow</h1>
    </article>
    <nav>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="prejugés.php">Préjugés</a></li>
            <li><a href="fakeNews.php">Fake News</a></li>
            <li><a href="DonnéesChiffrées.php">Données climatiques</a></li>
            <li><a href="Bongeste.php">Les Bons Gestes</a></li>
            <li><a href="sources.php">Sources</a></li>
        </ul>
    </nav>
</header>
<section class="container">
<script src="assets/js/backstage.js"></script>