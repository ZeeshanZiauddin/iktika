(() => {
    // javascript/modules/paralax-animation-home.js
    function parallaxAnimation() {
        const containers = gsap.utils.toArray(".parallax-effect");
        if (containers) {
            containers.forEach((section) => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                        scrub: 0.5,
                    },
                });
            });
        }
    }
    var paralax_animation_home_default = parallaxAnimation;

    // javascript/modules/video-banner-animation.js
    var getLetterDesktopElements = () => {
        const lettersElemets = {
            b: document.querySelector(".mask-svg .b"),
            dotI: document.querySelector(" .mask-svg .dot-i"),
            i: document.querySelector(".mask-svg .i"),
            g: document.querySelector(" .mask-svg .g"),
        };
        return lettersElemets;
    };
    var getLetterMobileElements = () => {
        const lettersElemets = {
            b: document.querySelector(".mask-svg-mobile .b"),
            dotI: document.querySelector(" .mask-svg-mobile .dot-i"),
            i: document.querySelector(".mask-svg-mobile .i"),
            g: document.querySelector(" .mask-svg-mobile .g"),
        };
        return lettersElemets;
    };
    var validateLetterElements = (elements) => {
        return elements.b && elements.dotI && elements.i && elements.g;
    };
    var setGsapLetterAnimations = (letterElement) => {
        gsap.set(letterElement.b, {
            x: -800,
        });
        gsap.set(letterElement.dotI, {
            y: -200,
        });
        gsap.set(letterElement.i, {
            y: 800,
        });
        gsap.set(letterElement.g, {
            x: 800,
        });
    };
    var setLettersTimeLine = (letterElement) => {
        const tl = gsap.timeline({ duration: 1 });
        tl.to(letterElement.b, { x: 0 });
        tl.to(letterElement.dotI, { y: 0 }, "i");
        tl.to(letterElement.i, { y: 0 }, "i");
        tl.to(letterElement.g, { x: 0 });
    };
    var videoBannerAnimationInit = () => {
        const mm = window.matchMedia("(max-width: 768px)");
        const getLetters = mm.matches
            ? getLetterMobileElements()
            : getLetterDesktopElements();
        if (validateLetterElements(getLetters)) {
            setGsapLetterAnimations(getLetters);
            setLettersTimeLine(getLetters);
        }
    };
    var video_banner_animation_default = videoBannerAnimationInit;

    // javascript/modules/header-animation.js
    var headerAnimation = () => {
        const header = document.querySelector(".header-content-container");
        const colorSection = document.querySelectorAll("[data-header-color]");
        if (!header || colorSection.length === 0) return;
        colorSection.forEach((section) => {
            const getColor = section.dataset.headerColor;
            gsap.to(header, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 10%",
                    end: "bottom 10%",
                    onEnter: () =>
                        updateHeaderClass(header, getColor, "logo-white.png"),
                    onEnterBack: () =>
                        updateHeaderClass(header, getColor, "logo.png"),
                },
            });
        });
        const updateHeaderClass = (header2, color, logo) => {
            if (!header2) return;

            // Update the header class to the new color
            header2.classList.forEach((cls) => {
                if (
                    cls.startsWith("header-") &&
                    cls !== "header-content-container"
                ) {
                    header2.classList.remove(cls);
                }
            });
            header2.classList.add(`header-${color}`);

            // Change the logo image source based on the passed condition
            if (logo) {
                const logoImage = document.querySelector("#Headerlogo");
                let root_url = logoImage.dataset.root;
                if (logoImage) {
                    // Switch logo path based on the condition (scroll state)
                    logoImage.src = root_url + "/" + logo; // Change the logo image source
                }
            }
        };
    };
    var header_animation_default = headerAnimation;

    // javascript/modules/home-fade-in-animations.js
    var isDesktop = window.matchMedia("(min-width: 768px)").matches;
    var fadeInAnimation = () => {
        const elements = document.querySelectorAll(
            '[data-animation="fade-in"]'
        );
        if (!elements) return;
        elements.forEach((element) => {
            const { animationStart, animationMarkers } = element.dataset;
            const defaultStart = "-40px 85%";
            const start = animationStart || defaultStart;
            if (isDesktop) {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 150 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: element,
                            start,
                            toggleActions: "play none none none",
                            markers: !!animationMarkers,
                        },
                    }
                );
            }
        });
    };
    var home_fade_in_animations_default = fadeInAnimation;

    // javascript/modules/do-big-things.js
    var mediaQuery = window.matchMedia("(min-width: 768px)");
    function textDoBigThings() {
        const right = document.querySelector(".right");
        const left = document.querySelector(".left");
        const containerText = document.querySelector(
            ".animation-text-container"
        );
        if (right && left && containerText) {
            gsap.set(right, {
                x: mediaQuery.matches ? -600 : 500,
            });
            gsap.set(left, {
                x: mediaQuery.matches ? 600 : -600,
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerText,
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: 3,
                },
            });
            tl.to(
                right,
                {
                    x: mediaQuery.matches ? 0 : 285,
                    ease: "power10.inOut",
                },
                "b"
            );
            tl.to(
                left,
                {
                    x: mediaQuery.matches ? 0 : -278,
                    ease: "power10.inOut",
                },
                "b"
            );
        }
    }
    var iktika_default = textDoBigThings;

    // javascript/modules/fade-animations.js
    var mediaQuery2 = window.matchMedia("(min-width: 769px)");
    var getAnimationElements = () => {
        const elements = {
            works: {
                container: document.querySelector(".work-section-container"),
                title: document.querySelector(".text-work-container-desktop"),
                grid: document.querySelector(".works"),
                cards: document.querySelectorAll(".card-work"),
            },
            news: {
                container: document.querySelector(".news-container"),
                title: document.querySelector(".text-news-container"),
                grid: document.querySelector(".news-grid-container"),
            },
        };
        return elements;
    };
    var validateElements = (elements) => {
        return (
            elements.works.container &&
            elements.works.title &&
            elements.works.grid &&
            elements.news.container &&
            elements.news.title &&
            elements.news.grid
        );
    };
    var setGsapElements = (elements) => {
        gsap.set(elements.works.title, {
            opacity: 0,
            x: -200,
        });
        gsap.set(elements.works.grid, {
            opacity: 0,
            x: 200,
        });
        gsap.set(elements.news.title, {
            opacity: 0,
            x: 200,
        });
        gsap.set(elements.news.grid, {
            opacity: 0,
            x: -200,
        });
    };
    var timeline = (
        container,
        title,
        grid,
        duration,
        start,
        end,
        scrub,
        markers = false
    ) => {
        return gsap
            .timeline({
                scrollTrigger: {
                    trigger: container,
                    start,
                    end,
                    ...(scrub !== 0 && { scrub }),
                    toggleActions: "play none none reverse",
                    markers,
                },
            })
            .to(title, { opacity: 1, x: 0, duration }, "a")
            .to(grid, { opacity: 1, x: 0, duration }, "a");
    };
    var fadeWorksDesktop = (elements) => {
        timeline(
            elements.works.container,
            elements.works.title,
            elements.works.grid,
            1,
            "top 90%",
            "20% 20%",
            0
        );
    };
    var fadeNewsDesktop = (elements) => {
        timeline(
            elements.news.container,
            elements.news.title,
            elements.news.grid,
            1,
            "top 90%",
            "20% 20%",
            0
        );
    };
    var initializeFadeAnimations = () => {
        const elements = getAnimationElements();
        if (mediaQuery2.matches && validateElements(elements)) {
            setGsapElements(elements);
            fadeWorksDesktop(elements);
            fadeNewsDesktop(elements);
        }
    };
    var fade_animations_default = initializeFadeAnimations;

    // javascript/modules/pin-text.js
    var isDesktop2 = window.matchMedia("(min-width: 768px)").matches;
    var pinDesktopText = () => {
        const newsSectionContainer = document.querySelector(".news-container");
        if (!newsSectionContainer) return;
        const gridContainer = newsSectionContainer.querySelector(
            ".news-grid-container"
        );
        const title = newsSectionContainer.querySelector(
            ".text-news-container"
        );
        if (!isDesktop2) return;
        if (!newsSectionContainer || !title) return;
        ScrollTrigger.create({
            trigger: gridContainer,
            start: "top 98px",
            end: "bottom 70%",
            pin: title,
            pinSpacing: false,
        });
    };
    var pin_text_default = pinDesktopText;

    // javascript/modules/load-works.js
    function loadMoreWorks() {
        let loadMoreButton = document.querySelector("#see-more-work");
        const worksContentContainer = document.querySelector(
            ".works-content-container"
        );
        let currentPage = 1;
        if (!loadMoreButton || !worksContentContainer) return;
        document.addEventListener("DOMContentLoaded", () => {
            fetch(`/wp-json/wp/v2/work?page=${currentPage}&per_page=12`, {
                method: "GET",
            }).then((response) => {
                let totalPages = parseInt(
                    response.headers.get("X-WP-Totalpages")
                );
                if (currentPage === totalPages) {
                    loadMoreButton.style.display = "none";
                }
            });
        });
        loadMoreButton.addEventListener("click", (event) => {
            event.preventDefault();
            currentPage++;
            fetch(`/wp-json/wp/v2/work?page=${currentPage}&per_page=12`, {
                method: "GET",
            })
                .then((response) => {
                    let totalPages = parseInt(
                        response.headers.get("X-WP-Totalpages")
                    );
                    if (currentPage === totalPages) {
                        loadMoreButton.style.display = "none";
                    }
                    if (!response.ok) {
                        throw new Error(
                            `Error ${response.status}: ${response.statusText}`
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    const existingGrids = document.querySelectorAll(
                        ".works-grid-container[data-animation]"
                    );
                    existingGrids.forEach((grid2) =>
                        grid2.removeAttribute("data-animation")
                    );
                    const grid = `
                    <div class="works-grid-container" data-animation="fade-in">
                    ${data
                        .map((item, index) => {
                            return `
                        <a href="${item.link}" class="card-work ${
                                index === 0 || index === 7 ? "main-card" : ""
                            } ">
                            <div class="card-work-container">
                                <div class="image-container">
                                    <img src="${
                                        index === 0 || index === 7
                                            ? item.acf?.image_vertical
                                            : item.acf?.image
                                    }" alt="${
                                item.title?.rendered || "no title"
                            } image">
                                </div>
                                <div class="card-work-text-content">
                                    <h2>${
                                        item.title?.rendered || "No title"
                                    }</h2>
                                    <div class="subtitle-line">
                                        <div class="line"></div>
                                        <h3>${
                                            item.acf?.additional_text || ""
                                        }</h3>
                                    </div>
                                </div>
                            </div>
                        </a>`;
                        })
                        .join("")}
                    </div>
                    `;
                    worksContentContainer.insertAdjacentHTML("beforeend", grid);
                    home_fade_in_animations_default();
                })
                .catch((error) =>
                    console.error("Error al cargar m\xE1s trabajos:", error)
                );
        });
    }
    var load_works_default = loadMoreWorks;

    // javascript/modules/load-news.js
    var NewsLoader = class {
        constructor() {
            this.loadMoreButton = document.querySelector("#see-more-news");
            this.contentContainer = document.querySelector(
                ".news-content-container"
            );
            this.currentPage = 1;
            this.perPage = 6;
            this.baseUrl = "/wp-json/wp/v2";
            this.endpoint = "news";
            this.init();
        }
        init() {
            if (!this.loadMoreButton || !this.contentContainer) return;
            this.checkInitialState();
            this.bindEvents();
        }
        bindEvents() {
            this.loadMoreButton.addEventListener("click", (event) =>
                this.handleLoadMore(event)
            );
        }
        async checkInitialState() {
            try {
                const { totalPages } = await this.fetchNews(this.currentPage);
                this.updateButtonVisibility(totalPages);
            } catch (error) {
                console.error("Error checking initial state:", error);
            }
        }
        async handleLoadMore(event) {
            event.preventDefault();
            this.currentPage++;
            try {
                const { totalPages, data } = await this.fetchNews(
                    this.currentPage
                );
                this.renderNews(data);
                this.updateButtonVisibility(totalPages);
            } catch (error) {
                console.error("Error loading news:", error);
            }
        }
        async fetchNews(page) {
            const response = await fetch(
                `${this.baseUrl}/${this.endpoint}?page=${page}&per_page=${this.perPage}`,
                { method: "GET" }
            );
            if (!response.ok) {
                throw new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
            }
            const totalPages = parseInt(
                response.headers.get("X-WP-TotalPages")
            );
            const data = await response.json();
            return { data, totalPages };
        }
        updateButtonVisibility(totalPages) {
            if (this.currentPage >= totalPages) {
                this.loadMoreButton.style.display = "none";
            }
        }
        formatDate(dateString) {
            return new Date(dateString).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        }
        createNewsCard(item, index) {
            const isHorizontal = index !== 0 && index !== 4;
            return `
                <a href="${item.acf.news_url}" class="card-news ${
                isHorizontal ? "horizontal" : ""
            } news-page" target="_blank">
                    <div class="card-news__image">
                        <img
                            src="${item.acf.news_image || ""}"
                            alt="${item.acf.main_title || "no title"} image"
                        />
                    </div>
                    <div class="card-news__content">
                        <div class="card-news__head">
                            <h3>${item.acf.main_title || "No title"}</h3>
                            <svg width='19' height='19' viewBox='0 0 19 19' fill='none'>
                                <path d='M1 17.3704L18 1M18 1V11.6852M18 1H7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>
                            </svg>
                        </div>
                        <span class="news-date">${this.formatDate(
                            item.date
                        )}</span>
                        <p>${item.acf.main_paragraph || ""}</p>
                    </div>
                </a>
            `;
        }
        renderNews(data) {
            const existingGrids = this.contentContainer.querySelectorAll(
                ".news-grid-container[data-animation]"
            );
            existingGrids.forEach((grid2) =>
                grid2.removeAttribute("data-animation")
            );
            const grid = `
                <div class="news-grid-container" data-animation="fade-in">
                    ${data
                        .map((item, index) => this.createNewsCard(item, index))
                        .join("")}
                </div>
            `;
            this.contentContainer.insertAdjacentHTML("beforeend", grid);
            home_fade_in_animations_default();
        }
    };
    function initNews() {
        return new NewsLoader();
    }

    // javascript/modules/work-page-animations.js
    var workPageAnimation = () => {
        const title = document.querySelector(".works-container .works-title");
        if (title) {
            gsap.set(title, {
                x: -700,
            });
            gsap.to(title, {
                x: 0,
                duration: 1.5,
                ease: "back.out(1.2)",
            });
        }
    };
    var work_page_animations_default = workPageAnimation;

    // javascript/modules/modal-work-detail.js
    var setModal = () => {
        const btnTriggers = document.querySelectorAll(".open-modal");
        const modal = document.querySelector("#modal");
        const modalContent = document.querySelector("#modal .modal-content");
        const iframe = document.querySelector("#modal iframe");
        const btnClose = document.querySelector("#modal .btn-close-modal");
        const html = document.querySelector("html");
        const setVideoIntoFrame = (video) => {
            video += "?autoplay=1&rel=0";
            iframe.src = video;
        };
        const openModal = (button) => {
            if (!button.dataset.video) {
                return;
            }
            let videoUrl;
            if (window.innerWidth < 991 && button.dataset.videoMobile) {
                videoUrl = button.dataset.videoMobile;
            } else {
                videoUrl = button.dataset.video;
            }
            modal.style.display = "flex";
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            html.style.overflow = "hidden";
            modalContent.classList.remove("fade-out");
            modalContent.classList.add("fade-in");
            setVideoIntoFrame(videoUrl);
        };
        const closeModal = () => {
            modalContent.classList.remove("fade-in");
            modalContent.classList.add("fade-out");
            modalContent.addEventListener(
                "animationend",
                () => {
                    if (modalContent.classList.contains("fade-out")) {
                        modal.style.display = "none";
                        html.style.overflow = "auto";
                    }
                },
                { once: true }
            );
            iframe.src = "";
        };
        btnTriggers.forEach((button) => {
            button.addEventListener("click", () => openModal(button));
        });
        if (btnClose) {
            btnClose.addEventListener("click", closeModal);
        }
    };
    var modal_work_detail_default = setModal;

    // javascript/modules/swiper-work-detail.js
    var setSliders = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/swiper/swiper-bundle.min.css";
        document.head.appendChild(link);
        const script = document.createElement("script");
        script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
        script.onload = function () {
            const swiperElement = document.querySelector("#swiper-work-detail");
            const swiper = new Swiper(swiperElement, {
                slidesPerView: 1,
                spaceBetween: 22,
                pagination: {
                    el:
                        window.innerWidth > 767
                            ? ".swiper-pagination"
                            : ".swiper-pagination-mobile",
                    clickable: true,
                },
                navigation: {
                    nextEl:
                        window.innerWidth > 767
                            ? ".swiper-button-next"
                            : ".swiper-button-next-mobile",
                    prevEl:
                        window.innerWidth > 767
                            ? ".swiper-button-prev"
                            : ".swiper-button-prev-mobile",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        slidesOffsetBefore: 16,
                        slidesOffsetAfter: 16,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                        slidesOffsetBefore: 16,
                        slidesOffsetAfter: 16,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                        slidesOffsetAfter: 40,
                    },
                },
            });
        };
        document.body.appendChild(script);
    };
    var swiper_work_detail_default = setSliders;

    // javascript/modules/flip-work-detail-anim.js
    var isDesktop3 = window.matchMedia("(min-width: 1024px)").matches;
    var flipAnimation = () => {
        const titleContainer = document.querySelector(".title-work-container");
        const title = document.querySelector(".work-title-page");
        const leftColumn = document.querySelector(".col1");
        if (!isDesktop3 || !title || !leftColumn || !titleContainer) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleContainer,
                start: "top center",
                endTrigger: titleContainer,
                end: "bottom center",
                toggleActions: "play none none none",
                onEnter: () => {
                    const state = Flip.getState(title, { props: "fontSize" });
                    leftColumn.appendChild(title);
                    Flip.from(state, {
                        absolute: true,
                        duration: 0.5,
                    });
                },
            },
        });
        tl.to(".title-work-container", {
            minHeight: 0,
            delay: 0.5,
        });
    };
    var flip_work_detail_anim_default = flipAnimation;

    // javascript/modules/layout-work-detail-anim.js
    var mediaQuery3 = window.matchMedia("(min-width: 1024px)");
    var getLayouts = () => {
        const elements = {
            toLeft: document.querySelectorAll(".fade-in-left"),
            toRight: document.querySelectorAll(".fade-in-right"),
        };
        return elements;
    };
    var validateAnimationElements = (elements) => {
        return elements.toLeft && elements.toRight;
    };
    var setGsapLayOuts = (toRight, toLeft) => {
        gsap.set(toRight, {
            opacity: 0,
            x: -200,
        });
        gsap.set(toLeft, {
            opacity: 0,
            x: 200,
        });
    };
    var animateElements = (elements) => {
        elements.toLeft.forEach((element) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "-10% 80%",
                    end: "40% 60%",
                    toggleActions: "play none none none",
                    scrub: 1,
                },
            }).to(element, {
                opacity: 1,
                x: 0,
                duration: 1,
            });
        });
        elements.toRight.forEach((element) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "-30% 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                    scrub: 1,
                },
            }).to(element, {
                opacity: 1,
                x: 0,
                duration: 1,
            });
        });
    };
    var fadeLayoutInit = () => {
        const elements = getLayouts();
        if (validateAnimationElements(elements) && mediaQuery3.matches) {
            setGsapLayOuts(elements.toRight, elements.toLeft);
            animateElements(elements);
        }
    };
    var layout_work_detail_anim_default = fadeLayoutInit;

    // javascript/modules/more-work-anim.js
    var isDesktop4 = window.matchMedia("(min-width: 1024px)").matches;
    var animateHorizontalImage = () => {
        const image = document.querySelector(".more-work-img");
        if (!image && !isDesktop4) return;
        gsap.set(image, {
            x: -200,
            opacity: 0,
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image,
                start: "-60% 60%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            },
            defaults: {
                duration: 1.3,
            },
        });
        tl.to(image, {
            x: 0,
            opacity: 1,
        });
    };
    var more_work_anim_default = animateHorizontalImage;

    // javascript/modules/open-contact-form.js
    var isDesktop5 = window.matchMedia("(min-width: 768px)").matches;
    var handleUIInteractions = () => {
        const contactUsButton = document.querySelector(
            ".main_menu li:last-child"
        );
        const contactFormContainer = document.getElementById(
            "contact-form-container"
        );
        const closeFormButton = document.getElementById("close-form");
        const openNavButton = document.querySelector(".open-nav");
        const menuContainer = document.querySelector(".menu-container");
        const closeNavButton = document.querySelector(".close-nav");
        const html = document.querySelector("html");
        const form = document.querySelector("#contact-form");
        const resetForm = () => {
            form.reset();
            const selects = form.querySelectorAll("select");
            selects.forEach((select) => {
                select.selectedIndex = 0;
            });
            const radios = form.querySelectorAll('input[type="radio"]');
            radios.forEach((radio) => {
                radio.checked = false;
            });
            const defaultState = document.getElementById("defaultState");
            const activeState = document.getElementById("activeState");
            const uploadedFiles = document.querySelectorAll(
                ".input-dd-files__file"
            );
            if (defaultState && activeState) {
                defaultState.style.display = "flex";
                activeState.style.display = "none";
            }
            uploadedFiles.forEach((file) => file.remove());
            const errorMessages = form.querySelectorAll(
                ".just-validate-error-label"
            );
            errorMessages.forEach((error) => error.remove());
            const steps = form.querySelectorAll("[data-step]");
            steps.forEach((step) => {
                step.style.visibility = "hidden";
            });
            const submitButton = form.querySelector(".submit-button");
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.classList.remove("button-disabled");
            }
        };
        const closeForm = () => {
            gsap.to(contactFormContainer, {
                duration: 0.4,
                width: "0vw",
                ease: "power1.out",
            });
            html.style.overflow = "auto";
            resetForm();
        };
        const closeAll = () => {
            menuContainer.classList.remove("open");
            gsap.to(contactFormContainer, {
                duration: 0.4,
                width: "0vw",
                ease: "power1.out",
            });
            html.style.overflow = "auto";
            resetForm();
        };
        if (contactUsButton && contactFormContainer && closeFormButton) {
            contactUsButton.addEventListener("click", () => {
                gsap.to(contactFormContainer, {
                    duration: 0.4,
                    width: isDesktop5 ? "70vw" : "100vw",
                    ease: "power1.in",
                });
                html.style.overflow = "hidden";
            });
            closeFormButton.addEventListener("click", () => {
                closeForm();
            });
        }
        if (openNavButton && menuContainer && closeNavButton) {
            openNavButton.addEventListener("click", () => {
                menuContainer.classList.add("open");
                html.style.overflow = "hidden";
            });
            closeNavButton.addEventListener("click", () => {
                closeAll();
            });
        }
        const cancelButton = form.querySelector(".cancel-button");
        if (cancelButton) {
            cancelButton.addEventListener("click", (e) => {
                e.preventDefault();
                closeForm();
            });
        }
    };
    var open_contact_form_default = handleUIInteractions;

    // javascript/modules/home-contact-anim.js
    var mediaQuery4 = window.matchMedia("(max-width: 1023px)");
    var getContactElements = () => {
        const elements = {
            contact: {
                contactSection: document.querySelector(
                    ".contact-content-container"
                ),
                textContainer: document.querySelector(
                    ".secondary-text-content"
                ),
                mainTextContainer: document.querySelector(
                    ".main-text-content .main-title"
                ),
                secondaryTextContent: document.querySelector(
                    ".secondary-text-content"
                ),
            },
        };
        return elements;
    };
    var validateGsapElements = (elements) => {
        return (
            elements.contact.contactSection &&
            elements.contact.textContainer &&
            elements.contact.mainTextContainer &&
            elements.contact.secondaryTextContent
        );
    };
    var setGsapElements2 = (elements) => {
        gsap.set(elements.contact.textContainer, {
            x: mediaQuery4.matches ? 600 : 0,
        });
    };
    var timelineMobile = (container, element, start, end, scrub, duration) => {
        return gsap
            .timeline({
                scrollTrigger: {
                    trigger: container,
                    start,
                    end,
                    scrub,
                    duration,
                },
            })
            .to(element, { x: mediaQuery4.matches ? 0 : "" });
    };
    var timelineDesktop = (
        container,
        start,
        end,
        scrub,
        duration,
        mainTextContainer,
        secondaryTextContent
    ) => {
        const allWidth = `${
            mainTextContainer.offsetWidth - secondaryTextContent.offsetWidth
        }px`;
        return gsap
            .timeline({
                scrollTrigger: {
                    trigger: container,
                    start,
                    end,
                    scrub,
                    duration,
                },
            })
            .to(".main-text-content", {
                minWidth: mediaQuery4.matches ? "" : allWidth,
            });
    };
    var setTimelines = (elements) => {
        timelineMobile(
            elements.contact.contactSection,
            elements.contact.secondaryTextContent,
            "top center",
            "37% center",
            1,
            2
        );
        timelineDesktop(
            elements.contact.contactSection,
            "top 35%",
            "20% 30%",
            1,
            2,
            elements.contact.mainTextContainer,
            elements.contact.secondaryTextContent
        );
    };
    var contactHomeAnim = () => {
        const elements = getContactElements();
        if (!validateGsapElements(elements)) return;
        setGsapElements2(elements);
        setTimelines(elements);
    };
    var home_contact_anim_default = contactHomeAnim;

    // javascript/modules/home-mobile-works-news-anim.js
    var setWorksAnimations = (
        mobileImage,
        cardSpecial,
        mobileSpecialContainer,
        cardsWorks
    ) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mobileSpecialContainer,
                start: "top 70%",
                end: "75% 70%",
                scrub: 1,
                toggleActions: "play none none reverse",
            },
            defaults: {
                duration: 1,
            },
        });
        tl.to(
            mobileImage,
            {
                x: 0,
                y: 0,
            },
            "a"
        );
        tl.to(
            cardSpecial,
            {
                opacity: 1,
                x: 0,
            },
            "a"
        );
        tl.to(
            mobileImage,
            {
                y: -100,
            },
            "b"
        );
        tl.to(
            mobileSpecialContainer,
            {
                x: -mobileImage.offsetWidth + 66,
            },
            "b"
        );
        Array.from(cardsWorks).forEach((card) => {
            const fadeLeftTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "10% 75%",
                    end: "25% 75%",
                    toggleActions: "play none none reverse",
                    defaults: {
                        duration: 0.3,
                    },
                },
            });
            const PADDING = 16;
            gsap.set(card, {
                x: () => card.offsetWidth + PADDING,
            });
            fadeLeftTl.to(card, {
                x: 0,
            });
        });
    };
    var setNewsAnimations = (
        mobileNewsImage,
        cardNewsEspecial,
        mobileSpecialNewsContainer,
        cardNews
    ) => {
        gsap.set(mobileNewsImage, {
            y: 40,
        });
        gsap.set(cardNewsEspecial, {
            x: -100,
            opacity: 0,
        });
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: mobileSpecialNewsContainer,
                start: "-5% 70%",
                end: "105% 70%",
                scrub: 0.3,
                toggleActions: "play none none reverse",
            },
        });
        tl3.to(
            mobileNewsImage,
            {
                y: 0,
            },
            "n"
        );
        tl3.to(
            cardNewsEspecial,
            {
                opacity: 1,
                x: 0,
            },
            "n"
        );
        tl3.to(
            mobileNewsImage,
            {
                y: -300,
            },
            "n2"
        );
        tl3.to(
            mobileSpecialNewsContainer,
            {
                x: mobileNewsImage.offsetWidth - 166,
            },
            "n2"
        );
        cardNews.forEach((cardNews2) => {
            gsap.set(cardNews2, {
                x: -cardNews2.offsetWidth - 16,
            });
            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: cardNews2,
                    start: "top 78%",
                    end: "25% 78%",
                    toggleActions: "play none none reverse",
                },
                defaults: {
                    duration: 0.3,
                },
            });
            tl4.to(cardNews2, {
                x: 0,
            });
        });
    };
    var mobileHomeAnimations = () => {
        const mobileSpecialContainer = document.querySelector(
            ".mobile-special-container"
        );
        const mobileImage = document.querySelector(".mobile-image");
        const cardSpecial = document.querySelector(
            ".mobile-special-container .card-work.main-card"
        );
        const cardsWorks = document.querySelectorAll(
            ".work-section .card-work:not(.card-work.main-card)"
        );
        const mobileSpecialNewsContainer = document.querySelector(
            ".mobile-news-special-container"
        );
        const mobileNewsImage = document.querySelector(".mobile-news-image");
        const cardNewsEspecial = document.querySelector(
            ".mobile-news-special-container .card-news.horizontal"
        );
        const cardNews = document.querySelectorAll(
            ".news-grid-container .card-news:not(.card-news.horizontal)"
        );
        const mm = window.matchMedia("(max-width: 768px)");
        if (
            cardSpecial &&
            mobileImage &&
            mobileSpecialContainer &&
            mm.matches &&
            mobileSpecialNewsContainer &&
            mobileNewsImage &&
            cardNewsEspecial &&
            cardNews
        ) {
            setWorksAnimations(
                mobileImage,
                cardSpecial,
                mobileSpecialContainer,
                cardsWorks
            );
            setNewsAnimations(
                mobileNewsImage,
                cardNewsEspecial,
                mobileSpecialNewsContainer,
                cardNews
            );
        }
    };
    var home_mobile_works_news_anim_default = mobileHomeAnimations;

    // javascript/modules/about-us-animations.js
    var fadeInLeft = (sections) => {
        Array.from(sections).forEach((section) => {
            const fadeInLeftTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 80%",
                },
            });
            gsap.set(section, {
                x: 600,
            });
            fadeInLeftTl.to(section, {
                x: 0,
            });
        });
    };
    var showVideo = (section) => {
        const showVideoTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "70% 80%",
                scrub: 1,
            },
        });
        gsap.set(section, {
            opacity: 0,
        });
        showVideoTl.to(section, {
            opacity: 1,
        });
    };
    var fadeInItems = (items) => {
        Array.from(items).forEach((item) => {
            const fadeInTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            });
            gsap.set(item, {
                opacity: 0,
                x: 280,
            });
            fadeInTl.to(item, {
                opacity: 1,
                x: 0,
            });
        });
    };
    var about_us_animations_default = (aboutUsAnimations = () => {
        const title = document.querySelectorAll(
            ".information-section__heading h2"
        );
        const titleClosingSection = document.querySelectorAll(
            ".closing-section__heading h2"
        );
        const videoSection = document.querySelector(
            ".video-section__container"
        );
        const recognitionsItems = document.querySelectorAll(
            ".closing-section__items ul li"
        );
        title && fadeInLeft(title);
        recognitionsItems && fadeInItems(recognitionsItems);
        videoSection && showVideo(videoSection);
        if (titleClosingSection) {
            if (window.matchMedia("(min-width: 850px)").matches) {
                fadeInLeft(titleClosingSection);
            }
        }
    });

    // javascript/modules/home-redirect-btn.js

    var setPlayVideo = () => {
        const video = document.querySelector(".video-wrapper .video-banner");
        if (!video) return;
        video.autoplay = true;
        video.play();
    };

    // javascript/script.js
    document.addEventListener("DOMContentLoaded", () => {
        video_banner_animation_default();
        paralax_animation_home_default();
        header_animation_default();
        home_fade_in_animations_default();
        iktika_default();
        fade_animations_default();
        pin_text_default();
        load_works_default();
        initNews();
        work_page_animations_default();
        modal_work_detail_default();
        swiper_work_detail_default();
        flip_work_detail_anim_default();
        layout_work_detail_anim_default();
        home_contact_anim_default();
        more_work_anim_default();
        open_contact_form_default();
        home_mobile_works_news_anim_default();
        about_us_animations_default();
        setFileDragDrop(contactForm);
        setPlayVideo();
    });
})();
