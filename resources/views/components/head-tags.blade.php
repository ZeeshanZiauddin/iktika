<meta charset="utf-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title>@yield('meta-title'){{$settings->site_title ?? env('APP_NAME', 'Itika Media')}}</title>


<meta name="description" content="{{$settings->site_description}}" />

<meta name="keywords"
  content="social media marketing, web design, content creation, digital marketing agency, branding services, SEO optimization, online advertising, graphic design, website development, social media management, creative agency, digital strategy, business growth, brand identity, marketing solutions" />


<!-- Robots Meta Tag (to control search engine crawling and indexing) -->
<meta name="robots" content="index, follow" />

<!-- Open Graph Meta Tags (for social media sharing) -->
<meta property="og:title" content="{{$settings->site_title ?? env('APP_NAME', 'Itika Media')}}" />
<meta property="og:description"
  content="Elevate your brand with IKTIKA MEDIA's expert social media marketing, innovative web design, and compelling content creation services. Contact us today to transform your digital presence." />
<meta property="og:image" content="{{asset('assets/img/og-image.jpg')}}" />
<meta property="og:url" content="https://www.iktika.com/" />
<meta property="og:type" content="website" />

<!-- Twitter Card Meta Tags (for Twitter sharing) -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{$settings->site_title ?? env('APP_NAME', 'Itika Media')}}" />
<meta name="twitter:description"
  content="Elevate your brand with IKTIKA MEDIA's expert social media marketing, innovative web design, and compelling content creation services. Contact us today to transform your digital presence." />
<meta name="twitter:image" content="{{asset('og-image.jpg')}}" />
<meta name="twitter:url" content="https://www.iktika.com/" />
<link rel="canonical" href="{{ url()->current() }}" />


<meta name="author" content="Zeeshan Ziauddin - Web Developer">
<link rel="author" href="https://www.linkedin.com/in/zeeshan-ziauddin/">
<!-- Favicons -->
<link href="{{asset('favicon.png')}}" rel="icon" />
<link href="{{asset('apple-touch-icon.png')}}" rel="apple-touch-icon" />

<!-- Fonts -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
<script src="https://unpkg.com/@tailwindcss/browser@4"></script>
<link href="{{asset('css/tailwind.css')}}" rel="stylesheet" />
<link rel="stylesheet" href="/assets/style.css" />