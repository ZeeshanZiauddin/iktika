<div class="page">
    <header id="masthead">
        <div class="header-content-container header-transparent">
            <a class="logo-container" href="{{route('home')}}">
                <img src="assets/logo.png" id="Headerlogo" style="width: 200px" alt="Logo IKTIKA" />
            </a>
            <div class="menu-icon-container open-nav">
                <img src="{{asset('assets/icons/menue-white.png')}}" id="menu-icon" alt="menu icon" />
            </div>

            <div class="menu-container">
                <div class="header-content-container">
                    <a class="logo-container" href="/">
                        <img src="assets/logo.png" style="width: 100%" alt="Logo IKTIKA" />
                    </a>
                    <div class="menu-icon-container close-nav">
                        <svg width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4535 26.3308L33.1129 6.90559" stroke="#FAFAFA" stroke-width="1.8"
                                stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M14.457 6.89453L33.1096 26.3283" stroke="#FAFAFA" stroke-width="1.8"
                                stroke-miterlimit="10" stroke-linecap="round"></path>
                        </svg>
                    </div>
                </div>

                <div class="nav-info-container">
                    <nav class="nav-container">
                        <ul id="menu-main-menu" class="main_menu">

                            <x-navlink href="{{route('home')}}" :active="request()->routeIs('home')">Home</x-navlink>
                            <x-navlink href="{{route('contact')}}" :active="request()->routeIs('contact')">Contact
                                Us</x-navlink>
                            <x-navlink href="{{route(name: 'work')}}" :active="request()->routeIs('work')">Our
                                Work</x-navlink>
                        </ul>
                    </nav>
                    <div class="info-container">
                        <div class="address-container">
                            <h4>Get in Touch</h4>
                            <a href="http://maps.google.com/?q=1285 Avenue of the Americas <br /> New York, NY 10019 USA"
                                target="_blank" rel="noopener noreferrer">
                                <p>hello@iktika.com</p>
                            </a>
                            <a href="tel:+12124595000">Tel: 832 721 7108</a>
                        </div>
                        <div class="social-media-container">
                            <h4>SOCIAL</h4>
                            <div class="icons-container">
                                <div class="social-media">
                                    <ul>
                                        <li>
                                            <a href="{{$settings->social_network['instagram']}}" target="_blank"
                                                rel="noopener noreferrer">
                                                <img src="{{asset('assets/icons/instagram.svg')}}" alt="Instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{{$settings->social_network['facebook']}}" target="_blank"
                                                rel="noopener noreferrer">
                                                <img src="{{asset('assets/icons/facebook.svg')}}"
                                                    alt="Facebook Iktika" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{{$settings->social_network['x_twitter']}}" target="_blank"
                                                rel="noopener noreferrer">
                                                <img src="{{asset('assets/icons/twitter.svg')}}" alt="Twitter Iktika" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>