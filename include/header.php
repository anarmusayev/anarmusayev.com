<header>
    <section id="top-menu">
        <a href="home"> <img src="img/logo-main_2.svg" class="logo-main" alt="main logo of Anar Musayev"></a>
        <nav>
            <ul>
                <li><a <?php if ($page == 'home') echo ' class="active"'; ?> href="home"> HOME</a></li>
                <li><a <?php if ($page == 'web-sites') echo ' class="active"'; ?> href="web-sites">WEB</a></li>
                <li><a <?php if ($page == 'applications') echo ' class="active"'; ?> href="applications">APPLICATIONS</a></li>
                <li><a <?php if ($page == 'corporate-design') echo ' class="active"'; ?> href="corporate-design">CORPORATE DESIGN</a></li>
                <li><a <?php if ($page == 'posters') echo ' class="active"'; ?> href="posters">POSTERS</a></li>                <!--                <li><a class="button-primary" href="#">Türkçe</a></li>-->
                <li><a <?php if ($page == 'video-and-animations') echo ' class="active"'; ?> href="video-and-animations">VIDEO & ANIMATIONS</a></li>
                <li><a <?php if ($page == 'illustrations') echo ' class="active"'; ?> href="illustrations">ILLUSTRATIONS</a></li>

            </ul>
        </nav>
    </section>

    <section id="mobil-menu">
        <a href="home"> <img src="img/logo-main.svg" class="logo-main" alt="main logo of Anar Musayev"></a>
        <nav>
            <ul>
                <li><a <?php if ($page == 'home') echo ' class="active"'; ?> href="home"> Home</a></li>
                <li><a <?php if ($page == 'web-sites') echo ' class="active"'; ?> href="web-sites">Web</a></li>
                <li><a <?php if ($page == 'applications') echo ' class="active"'; ?> href="applications">Applications</a></li>
                <li><a <?php if ($page == 'corporate-design') echo ' class="active"'; ?> href="corporate-design">Corporate Design</a></li>
                <li><a <?php if ($page == 'posters') echo ' class="active"'; ?> href="posters">Posters</a></li>
                <li><a <?php if ($page == 'video-and-animations') echo ' class="active"'; ?> href="video-and-animations">Video & Animations</a></li>
                <li><a <?php if ($page == 'illustrations') echo ' class="active"'; ?> href="illustrations">İllustrations</a></li>

                <!--                <li><a class="button-primary" href="#">Türkçe</a></li>-->
            </ul>
        </nav>
        <a href="#" id="bt-hamburger" class="close" aria-label="mobile menu button">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </section>
</header>
