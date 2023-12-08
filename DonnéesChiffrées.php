<?php
include 'assets/shared/header.php';
?>
<h1>Données Chiffrées</h1>
<section>
    <!-- Button accès données niveau France -->
    <article>
        <button onclick="location.href='DonnéesNvFrance.php';">
            <img src="assets/images/iconFrance.png" width=300 height=300 alt="France icon"/>
            <p> Chiffres en France </p>
        </button>
    </article>
    <!-- Button accès données niveau Europe -->
    <article>
        <button onclick="location.href='DonnéesNvEurope.php';">
            <img src="assets/images/iconEurope.png" width=300 height=300 alt="France icon"/>
            <p> Chiffres en Europe </p>
        </button>
    </article>
    <!-- Button accès données niveau Monde -->
    <article>
        <button onclick="location.href='DonnéesNvMonde.php';">
            <img src="assets/images/worldIcon.png" width=300 height=300 alt="France icon"/>
            <p> Chiffres dans le Monde </p>
        </button>
    </article>
</section>
</body>
</html>