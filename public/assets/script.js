(()=>{function e(){let e=gsap.utils.toArray(".parallax-effect");e&&e.forEach(e=>{gsap.to(e,{scrollTrigger:{trigger:e,start:"top top",pin:!0,pinSpacing:!1,scrub:.5}})})}var t,i,r,a=e,n=()=>{let e={b:document.querySelector(".mask-svg .b"),dotI:document.querySelector(" .mask-svg .dot-i"),i:document.querySelector(".mask-svg .i"),g:document.querySelector(" .mask-svg .g")};return e},o=()=>{let e={b:document.querySelector(".mask-svg-mobile .b"),dotI:document.querySelector(" .mask-svg-mobile .dot-i"),i:document.querySelector(".mask-svg-mobile .i"),g:document.querySelector(" .mask-svg-mobile .g")};return e},s=e=>e.b&&e.dotI&&e.i&&e.g,l=e=>{gsap.set(e.b,{x:-800}),gsap.set(e.dotI,{y:-200}),gsap.set(e.i,{y:800}),gsap.set(e.g,{x:800})},c=e=>{let t=gsap.timeline({duration:1});t.to(e.b,{x:0}),t.to(e.dotI,{y:0},"i"),t.to(e.i,{y:0},"i"),t.to(e.g,{x:0})},d=()=>{let e=window.matchMedia("(max-width: 768px)"),t=e.matches?o():n();s(t)&&(l(t),c(t))},u=()=>{let e=document.querySelector(".header-content-container"),t=document.querySelectorAll("[data-header-color]");if(!e||0===t.length)return;t.forEach(t=>{let r=t.dataset.headerColor;gsap.to(e,{scrollTrigger:{trigger:t,start:"top 10%",end:"bottom 10%",onEnter:()=>i(e,r),onEnterBack:()=>i(e,r)}})});let i=(e,t)=>{if(!e)return;e.classList.forEach(t=>{t.startsWith("header-")&&"header-content-container"!==t&&e.classList.remove(t)}),e.classList.add(`header-${t}`);let i=document.querySelector("#Headerlogo"),r=document.querySelector("#menu-icon");"transparent"==t?(i.src="assets/logo.png",r.src="assets/icons/menue-dark.png"):(i.src="assets/logo-white.png",r.src="assets/icons/menue-white.png")}},m=window.matchMedia("(min-width: 768px)").matches,h=()=>{let e=document.querySelectorAll('[data-animation="fade-in"]');e&&e.forEach(e=>{let{animationStart:t,animationMarkers:i}=e.dataset,r=t||"-40px 85%";m&&gsap.fromTo(e,{opacity:0,y:150},{opacity:1,y:0,duration:1.5,ease:"back.out(1.2)",scrollTrigger:{trigger:e,start:r,toggleActions:"play none none none",markers:!!i}})})},p=window.matchMedia("(min-width: 768px)");function g(){let e=document.querySelector(".right"),t=document.querySelector(".left"),i=document.querySelector(".animation-text-container");if(e&&t&&i){gsap.set(e,{x:p.matches?-600:500}),gsap.set(t,{x:p.matches?600:-600});let r=gsap.timeline({scrollTrigger:{trigger:i,start:"top 70%",end:"bottom 70%",scrub:3}});r.to(e,{x:p.matches?0:285,ease:"power10.inOut"},"b"),r.to(t,{x:p.matches?0:-278,ease:"power10.inOut"},"b")}}var f,y,$=g,v=window.matchMedia("(min-width: 769px)"),w=()=>{let e={works:{container:document.querySelector(".work-section-container"),title:document.querySelector(".text-work-container-desktop"),grid:document.querySelector(".works"),cards:document.querySelectorAll(".card-work")},news:{container:document.querySelector(".news-container"),title:document.querySelector(".text-news-container"),grid:document.querySelector(".news-grid-container")}};return e},b=e=>e.works.container&&e.works.title&&e.works.grid&&e.news.container&&e.news.title&&e.news.grid,S=e=>{gsap.set(e.works.title,{opacity:0,x:-200}),gsap.set(e.works.grid,{opacity:0,x:200}),gsap.set(e.news.title,{opacity:0,x:200}),gsap.set(e.news.grid,{opacity:0,x:-200})},_=(e,t,i,r,a,n,o,s=!1)=>gsap.timeline({scrollTrigger:{trigger:e,start:a,end:n,...0!==o&&{scrub:o},toggleActions:"play none none reverse",markers:s}}).to(t,{opacity:1,x:0,duration:r},"a").to(i,{opacity:1,x:0,duration:r},"a"),x=e=>{_(e.works.container,e.works.title,e.works.grid,1,"top 90%","20% 20%",0)},q=e=>{_(e.news.container,e.news.title,e.news.grid,1,"top 90%","20% 20%",0)},E=()=>{let e=w();v.matches&&b(e)&&(S(e),x(e),q(e))},k=window.matchMedia("(min-width: 768px)").matches,L=()=>{let e=document.querySelector(".news-container");if(!e)return;let t=e.querySelector(".news-grid-container"),i=e.querySelector(".text-news-container");k&&e&&i&&ScrollTrigger.create({trigger:t,start:"top 98px",end:"bottom 70%",pin:i,pinSpacing:!1})};function A(){let e=document.querySelector("#see-more-work"),t=document.querySelector(".works-content-container"),i=1;e&&t&&(document.addEventListener("DOMContentLoaded",()=>{fetch(`/wp-json/wp/v2/work?page=${i}&per_page=12`,{method:"GET"}).then(t=>{i===parseInt(t.headers.get("X-WP-Totalpages"))&&(e.style.display="none")})}),e.addEventListener("click",r=>{r.preventDefault(),fetch(`/wp-json/wp/v2/work?page=${++i}&per_page=12`,{method:"GET"}).then(t=>{if(i===parseInt(t.headers.get("X-WP-Totalpages"))&&(e.style.display="none"),!t.ok)throw Error(`Error ${t.status}: ${t.statusText}`);return t.json()}).then(e=>{let i=document.querySelectorAll(".works-grid-container[data-animation]");i.forEach(e=>e.removeAttribute("data-animation"));let r=`
                  <div class="works-grid-container" data-animation="fade-in">
                  ${e.map((e,t)=>`
                      <a href="${e.link}" class="card-work ${0===t||7===t?"main-card":""} ">
                          <div class="card-work-container">
                              <div class="image-container">
                                  <img src="${0===t||7===t?e.acf?.image_vertical:e.acf?.image}" alt="${e.title?.rendered||"no title"} image">
                              </div>
                              <div class="card-work-text-content">
                                  <h2>${e.title?.rendered||"No title"}</h2>
                                  <div class="subtitle-line">
                                      <div class="line"></div>
                                      <h3>${e.acf?.additional_text||""}</h3>
                                  </div>
                              </div>
                          </div>
                      </a>`).join("")}
                  </div>
                  `;t.insertAdjacentHTML("beforeend",r),h()}).catch(e=>console.error("Error al cargar m\xe1s trabajos:",e))}))}var T=A,C=class{constructor(){this.loadMoreButton=document.querySelector("#see-more-news"),this.contentContainer=document.querySelector(".news-content-container"),this.currentPage=1,this.perPage=6,this.baseUrl="/wp-json/wp/v2",this.endpoint="news",this.init()}init(){this.loadMoreButton&&this.contentContainer&&(this.checkInitialState(),this.bindEvents())}bindEvents(){this.loadMoreButton.addEventListener("click",e=>this.handleLoadMore(e))}async checkInitialState(){try{let{totalPages:e}=await this.fetchNews(this.currentPage);this.updateButtonVisibility(e)}catch(t){console.error("Error checking initial state:",t)}}async handleLoadMore(e){e.preventDefault(),this.currentPage++;try{let{totalPages:t,data:i}=await this.fetchNews(this.currentPage);this.renderNews(i),this.updateButtonVisibility(t)}catch(r){console.error("Error loading news:",r)}}async fetchNews(e){let t=await fetch(`${this.baseUrl}/${this.endpoint}?page=${e}&per_page=${this.perPage}`,{method:"GET"});if(!t.ok)throw Error(`Error ${t.status}: ${t.statusText}`);let i=parseInt(t.headers.get("X-WP-TotalPages")),r=await t.json();return{data:r,totalPages:i}}updateButtonVisibility(e){this.currentPage>=e&&(this.loadMoreButton.style.display="none")}formatDate(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}createNewsCard(e,t){return`
              <a href="${e.acf.news_url}" class="card-news ${0!==t&&4!==t?"horizontal":""} news-page" target="_blank">
                  <div class="card-news__image">
                      <img
                          src="${e.acf.news_image||""}"
                          alt="${e.acf.main_title||"no title"} image"
                      />
                  </div>
                  <div class="card-news__content">
                      <div class="card-news__head">
                          <h3>${e.acf.main_title||"No title"}</h3>
                          <svg width='19' height='19' viewBox='0 0 19 19' fill='none'>
                              <path d='M1 17.3704L18 1M18 1V11.6852M18 1H7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>
                          </svg>
                      </div>
                      <span class="news-date">${this.formatDate(e.date)}</span>
                      <p>${e.acf.main_paragraph||""}</p>
                  </div>
              </a>
          `}renderNews(e){let t=this.contentContainer.querySelectorAll(".news-grid-container[data-animation]");t.forEach(e=>e.removeAttribute("data-animation"));let i=`
              <div class="news-grid-container" data-animation="fade-in">
                  ${e.map((e,t)=>this.createNewsCard(e,t)).join("")}
              </div>
          `;this.contentContainer.insertAdjacentHTML("beforeend",i),h()}};function M(){return new C}var B,I,F,P,D,H,V,j,O,W,N=()=>{let e=document.querySelector(".works-container .works-title");e&&(gsap.set(e,{x:-700}),gsap.to(e,{x:0,duration:1.5,ease:"back.out(1.2)"}))},R=()=>{let e=document.querySelectorAll(".open-modal"),t=document.querySelector("#modal"),i=document.querySelector("#modal .modal-content"),r=document.querySelector("#modal iframe"),a=document.querySelector("#modal .btn-close-modal"),n=document.querySelector("html"),o=e=>{e+="?autoplay=1&rel=0",r.src=e},s=e=>{if(!e.dataset.video)return;let r;r=window.innerWidth<991&&e.dataset.videoMobile?e.dataset.videoMobile:e.dataset.video,t.style.display="flex",t.style.position="fixed",t.style.top="0",t.style.left="0",n.style.overflow="hidden",i.classList.remove("fade-out"),i.classList.add("fade-in"),o(r)},l=()=>{i.classList.remove("fade-in"),i.classList.add("fade-out"),i.addEventListener("animationend",()=>{i.classList.contains("fade-out")&&(t.style.display="none",n.style.overflow="auto")},{once:!0}),r.src=""};e.forEach(e=>{e.addEventListener("click",()=>s(e))}),a&&a.addEventListener("click",l)},z=()=>{let e=document.createElement("link");e.rel="stylesheet",e.href="https://unpkg.com/swiper/swiper-bundle.min.css",document.head.appendChild(e);let t=document.createElement("script");t.src="https://unpkg.com/swiper/swiper-bundle.min.js",t.onload=function(){let e=document.querySelector("#swiper-work-detail");new Swiper(e,{slidesPerView:1,spaceBetween:22,pagination:{el:window.innerWidth>767?".swiper-pagination":".swiper-pagination-mobile",clickable:!0},navigation:{nextEl:window.innerWidth>767?".swiper-button-next":".swiper-button-next-mobile",prevEl:window.innerWidth>767?".swiper-button-prev":".swiper-button-prev-mobile"},breakpoints:{640:{slidesPerView:1,slidesOffsetBefore:16,slidesOffsetAfter:16},768:{slidesPerView:1.5,spaceBetween:20,slidesOffsetBefore:16,slidesOffsetAfter:16},1024:{slidesPerView:2.5,spaceBetween:30,slidesOffsetAfter:40}}})},document.body.appendChild(t)},X=window.matchMedia("(min-width: 1024px)").matches,G=()=>{let e=document.querySelector(".title-work-container"),t=document.querySelector(".work-title-page"),i=document.querySelector(".col1");if(!X||!t||!i||!e)return;let r=gsap.timeline({scrollTrigger:{trigger:e,start:"top center",endTrigger:e,end:"bottom center",toggleActions:"play none none none",onEnter(){let e=Flip.getState(t,{props:"fontSize"});i.appendChild(t),Flip.from(e,{absolute:!0,duration:.5})}}});r.to(".title-work-container",{minHeight:0,delay:.5})},U=window.matchMedia("(min-width: 1024px)"),Z=()=>{let e={toLeft:document.querySelectorAll(".fade-in-left"),toRight:document.querySelectorAll(".fade-in-right")};return e},K=e=>e.toLeft&&e.toRight,Y=(e,t)=>{gsap.set(e,{opacity:0,x:-200}),gsap.set(t,{opacity:0,x:200})},J=e=>{e.toLeft.forEach(e=>{gsap.timeline({scrollTrigger:{trigger:e,start:"-10% 80%",end:"40% 60%",toggleActions:"play none none none",scrub:1}}).to(e,{opacity:1,x:0,duration:1})}),e.toRight.forEach(e=>{gsap.timeline({scrollTrigger:{trigger:e,start:"-30% 80%",end:"bottom 60%",toggleActions:"play none none none",scrub:1}}).to(e,{opacity:1,x:0,duration:1})})},Q=()=>{let e=Z();K(e)&&U.matches&&(Y(e.toRight,e.toLeft),J(e))},ee=window.matchMedia("(min-width: 1024px)").matches,et=()=>{let e=document.querySelector(".more-work-img");if(!e&&!ee)return;gsap.set(e,{x:-200,opacity:0});let t=gsap.timeline({scrollTrigger:{trigger:e,start:"-60% 60%",end:"bottom 60%",toggleActions:"play none none reverse"},defaults:{duration:1.3}});t.to(e,{x:0,opacity:1})},ei=window.matchMedia("(min-width: 768px)").matches,er=()=>{let e=document.querySelector(".main_menu li:last-child"),t=document.getElementById("contact-form-container"),i=document.getElementById("close-form"),r=document.querySelector(".open-nav"),a=document.querySelector(".menu-container"),n=document.querySelector(".close-nav"),o=document.querySelector("html"),s=document.querySelector("#contact-form"),l=()=>{s.reset();let e=s.querySelectorAll("select");e.forEach(e=>{e.selectedIndex=0});let t=s.querySelectorAll('input[type="radio"]');t.forEach(e=>{e.checked=!1});let i=document.getElementById("defaultState"),r=document.getElementById("activeState"),a=document.querySelectorAll(".input-dd-files__file");i&&r&&(i.style.display="flex",r.style.display="none"),a.forEach(e=>e.remove());let n=s.querySelectorAll(".just-validate-error-label");n.forEach(e=>e.remove());let o=s.querySelectorAll("[data-step]");o.forEach(e=>{e.style.visibility="hidden"});let l=s.querySelector(".submit-button");l&&(l.disabled=!1,l.classList.remove("button-disabled"))},c=()=>{gsap.to(t,{duration:.4,width:"0vw",ease:"power1.out"}),o.style.overflow="auto",l()},d=()=>{a.classList.remove("open"),gsap.to(t,{duration:.4,width:"0vw",ease:"power1.out"}),o.style.overflow="auto",l()};e&&t&&i&&(e.addEventListener("click",()=>{gsap.to(t,{duration:.4,width:ei?"70vw":"100vw",ease:"power1.in"}),o.style.overflow="hidden"}),i.addEventListener("click",()=>{c()})),r&&a&&n&&(r.addEventListener("click",()=>{a.classList.add("open"),o.style.overflow="hidden"}),n.addEventListener("click",()=>{d()}));let u=s.querySelector(".cancel-button");u&&u.addEventListener("click",e=>{e.preventDefault(),c()})},ea=window.matchMedia("(max-width: 1023px)"),en=()=>{let e={contact:{contactSection:document.querySelector(".contact-content-container"),textContainer:document.querySelector(".secondary-text-content"),mainTextContainer:document.querySelector(".main-text-content .main-title"),secondaryTextContent:document.querySelector(".secondary-text-content")}};return e},eo=e=>e.contact.contactSection&&e.contact.textContainer&&e.contact.mainTextContainer&&e.contact.secondaryTextContent,es=e=>{gsap.set(e.contact.textContainer,{x:ea.matches?600:0})},el=(e,t,i,r,a,n)=>gsap.timeline({scrollTrigger:{trigger:e,start:i,end:r,scrub:a,duration:n}}).to(t,{x:ea.matches?0:""}),ec=(e,t,i,r,a,n,o)=>{let s=`${n.offsetWidth-o.offsetWidth}px`;return gsap.timeline({scrollTrigger:{trigger:e,start:t,end:i,scrub:r,duration:a}}).to(".main-text-content",{minWidth:ea.matches?"":s})},ed=e=>{el(e.contact.contactSection,e.contact.secondaryTextContent,"top center","37% center",1,2),ec(e.contact.contactSection,"top 35%","20% 30%",1,2,e.contact.mainTextContainer,e.contact.secondaryTextContent)},eu=()=>{let e=en();eo(e)&&(es(e),ed(e))},em=(e,t,i,r)=>{let a=gsap.timeline({scrollTrigger:{trigger:i,start:"top 70%",end:"75% 70%",scrub:1,toggleActions:"play none none reverse"},defaults:{duration:1}});a.to(e,{x:0,y:0},"a"),a.to(t,{opacity:1,x:0},"a"),a.to(e,{y:-100},"b"),a.to(i,{x:-e.offsetWidth+66},"b"),Array.from(r).forEach(e=>{let t=gsap.timeline({scrollTrigger:{trigger:e,start:"10% 75%",end:"25% 75%",toggleActions:"play none none reverse",defaults:{duration:.3}}});gsap.set(e,{x:()=>e.offsetWidth+16}),t.to(e,{x:0})})},eh=(e,t,i,r)=>{gsap.set(e,{y:40}),gsap.set(t,{x:-100,opacity:0});let a=gsap.timeline({scrollTrigger:{trigger:i,start:"-5% 70%",end:"105% 70%",scrub:.3,toggleActions:"play none none reverse"}});a.to(e,{y:0},"n"),a.to(t,{opacity:1,x:0},"n"),a.to(e,{y:-300},"n2"),a.to(i,{x:e.offsetWidth-166},"n2"),r.forEach(e=>{gsap.set(e,{x:-e.offsetWidth-16});let t=gsap.timeline({scrollTrigger:{trigger:e,start:"top 78%",end:"25% 78%",toggleActions:"play none none reverse"},defaults:{duration:.3}});t.to(e,{x:0})})},ep=()=>{let e=document.querySelector(".mobile-special-container"),t=document.querySelector(".mobile-image"),i=document.querySelector(".mobile-special-container .card-work.main-card"),r=document.querySelectorAll(".work-section .card-work:not(.card-work.main-card)"),a=document.querySelector(".mobile-news-special-container"),n=document.querySelector(".mobile-news-image"),o=document.querySelector(".mobile-news-special-container .card-news.horizontal"),s=document.querySelectorAll(".news-grid-container .card-news:not(.card-news.horizontal)"),l=window.matchMedia("(max-width: 768px)");i&&t&&e&&l.matches&&a&&n&&o&&s&&(em(t,i,e,r),eh(n,o,a,s))},eg=e=>{Array.from(e).forEach(e=>{let t=gsap.timeline({scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 80%"}});gsap.set(e,{x:600}),t.to(e,{x:0})})},ef=e=>{let t=gsap.timeline({scrollTrigger:{trigger:e,start:"top 80%",end:"70% 80%",scrub:1}});gsap.set(e,{opacity:0}),t.to(e,{opacity:1})},ey=e=>{Array.from(e).forEach(e=>{let t=gsap.timeline({scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 80%",scrub:1}});gsap.set(e,{opacity:0,x:280}),t.to(e,{opacity:1,x:0})})},e$=aboutUsAnimations=()=>{let e=document.querySelectorAll(".information-section__heading h2"),t=document.querySelectorAll(".closing-section__heading h2"),i=document.querySelector(".video-section__container"),r=document.querySelectorAll(".closing-section__items ul li");e&&eg(e),r&&ey(r),i&&ef(i),t&&window.matchMedia("(min-width: 850px)").matches&&eg(t)},ev=class{constructor(){this.data=[],this.countrySelect=document.querySelector(".contact-form #input-country"),this.officeSelect=document.querySelector(".contact-form #input-office"),this.regionInputs=document.querySelectorAll('input[name="region"]'),this.regionContainer=document.querySelector(".region-options"),this.form=document.querySelector(".contact-form"),this.submitButton=this.form.querySelector(".submit-button"),this.files=new Map,this.formValidation=null,this.init(),this.setupFormSteps(),this.setupFormSubmit()}async fetchFormData(){try{let e=await fetch(`${window.location.origin}/wp-json/acf/v3/options/options`);if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let t=await e.json();return t.acf.list_of_data.continents}catch(i){return console.error("Error fetching form data:",i),[]}}setupEventListeners(){this.regionInputs.forEach(e=>{e.addEventListener("change",e=>this.handleRegionChange(e))}),this.countrySelect.addEventListener("change",e=>this.handleCountryChange(e))}populateRegionCheckboxes(){Array.isArray(this.data)&&this.regionContainer&&(this.regionContainer.innerHTML="",this.data.forEach(e=>{if(e&&e.name){let t=`
                      <label class="custom-checkbox">
                          <input type="radio" name="region" value="${e.name}">
                          <div class="checkbox-visual"></div>
                          <span class="checkbox-label">${e.name}</span>
                      </label>
                  `;this.regionContainer.insertAdjacentHTML("beforeend",t)}}),this.regionInputs=document.querySelectorAll('input[name="region"]'),this.setupEventListeners())}handleRegionChange(e){if(!Array.isArray(this.data)){console.error("Data is not properly initialized");return}let t=e.target.value,i=this.data.find(e=>e&&e.name&&e.name===t);i&&Array.isArray(i.countries)&&(this.countrySelect.innerHTML='<option value="" selected disabled>Select A Country</option>',this.officeSelect.innerHTML='<option value="" selected disabled>Select An Office</option>',i.countries.forEach(e=>{if(e&&e.name){let t=document.createElement("option");t.value=e.name.toLowerCase(),t.textContent=e.name,this.countrySelect.appendChild(t)}}));let r=document.querySelectorAll(".custom-checkbox");r.forEach(t=>{let i=t.querySelector('input[type="radio"]');i&&i!==e.target?t.classList.add("custom-checkbox--unselected"):t.classList.remove("custom-checkbox--unselected")})}handleCountryChange(e){if(!Array.isArray(this.data)){console.error("Data is not properly initialized");return}let t=e.target.value,i=document.querySelector('input[name="region"]:checked')?.value;if(!i)return;let r=this.data.find(e=>e&&e.name===i);if(r&&Array.isArray(r.countries)){let a=r.countries.find(e=>e&&e.name&&e.name.toLowerCase()===t.toLowerCase());a&&Array.isArray(a.companies)&&(this.officeSelect.innerHTML='<option value="" selected disabled>Select An Office</option>',a.companies.forEach(e=>{if(e&&e.name){let t=document.createElement("option");t.value=e.name.toLowerCase(),t.textContent=e.name,t.dataset.pressEmail=e.press_email||"",t.dataset.careersEmail=e.careers_email||"",t.dataset.businessEmail=e.business_email||"",this.officeSelect.appendChild(t)}}))}}async init(){try{let e=await this.fetchFormData();this.data=e.length>0?e:[],0===this.data.length&&console.warn("No data received from API"),this.populateRegionCheckboxes(),this.setupRegionStepHandlers(),this.initializeValidations()}catch(t){console.error("Error initializing form:",t),this.data=[]}}setupFormSteps(){let e=document.getElementById("input-topic"),t=this.countrySelect,i=this.officeSelect,r=document.querySelector('[data-step="1"]'),a=document.querySelector('[data-step="2"]'),n=document.querySelectorAll('[data-step="3"]');r&&(r.style.visibility="hidden"),a&&(a.style.visibility="hidden"),n.forEach(e=>e.style.visibility="hidden"),e?.addEventListener("change",()=>{e.value?r.style.visibility="visible":(r.style.visibility="hidden",a.style.visibility="hidden",n.forEach(e=>e.style.visibility="hidden"))}),this.setupRegionStepHandlers=()=>{let e=document.querySelectorAll('input[name="region"]');e.forEach(e=>{e.addEventListener("change",()=>{e.checked?a.style.visibility="visible":(a.style.visibility="hidden",n.forEach(e=>e.style.visibility="hidden"))})})};let o=!1,s=!1,l=()=>{o&&s?n.forEach(e=>e.style.visibility="visible"):n.forEach(e=>e.style.visibility="hidden")};t?.addEventListener("change",()=>{o=""!==t.value,l()}),i?.addEventListener("change",()=>{s=""!==i.value,l()})}setupFormSubmit(){this.form.addEventListener("submit",e=>{e.preventDefault(),this.handleFormSubmit()})}sendData(e){let t=new FormData;return t.append("to",e.destinationEmail),t.append("name",e.fullName),t.append("email",e.email),t.append("topic",e.topic),t.append("message",e.message),e.files&&e.files.length>0&&e.files.forEach(e=>{t.append("files",e)}),fetch("https://smtp-api.quadi.io/protected/send/",{method:"POST",headers:{"X-API-Key":"2f30f9b1-9912-4cc2-9806-7961c5c17259"},body:t}).then(e=>{if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{console.log("Success:",e);let t=document.querySelector("#contact-form__thanks"),i=document.querySelector(".main-title"),r=document.querySelector("#contact-form");t&&r&&(r.style.display="none",t.style.display="flex",i.style.display="none")}).catch(e=>{console.error("Error:",e)})}handleFormSubmit(){let e={topic:document.getElementById("input-topic").value,region:document.querySelector('input[name="region"]:checked')?.value||"",country:this.countrySelect.value,office:this.officeSelect.value,fullName:document.getElementById("input-fullname").value,email:document.getElementById("input-email").value,message:document.getElementById("input-message").value,files:this.getFilesList(),destinationEmail:this.getDestinationEmail()};this.sendData(e)}getFilesList(){return Array.from(this.files.values())}getDestinationEmail(){let e=document.getElementById("input-topic").value,t=document.querySelector('input[name="region"]:checked')?.value,i=this.countrySelect.value,r=this.officeSelect.value;if(!t||!i||!r)return"";let a=this.data.find(e=>e.name===t);if(!a)return"";let n=a.countries.find(e=>e.name.toLowerCase()===i.toLowerCase());if(!n)return"";let o=n.companies.find(e=>e.name.toLowerCase()===r.toLowerCase());if(!o)return"";for(let s of({careers:["careers_email","business_email","press_email"],"new-business":["business_email","careers_email","press_email",],press:["press_email","business_email","careers_email"]})[e]||["business_email","careers_email","press_email",])if(o[s]&&""!==o[s].trim())return o[s];return o.business_email||o.careers_email||o.press_email||""}initializeValidations(){let e=new JustValidate(this.form,{validateBeforeSubmitting:!0,testingMode:!0});e.onValidate(()=>{let t=e.isValid;t?(this.submitButton.disabled=!1,this.submitButton.classList.remove("button-disabled")):(this.submitButton.disabled=!0,this.submitButton.classList.add("button-disabled"))}),e.addField("#input-topic",[{rule:"required"},]).addRequiredGroup("#region-group","You must select at least one region.").addField("#input-country",[{rule:"required"},]).addField("#input-office",[{rule:"required",errorMessage:"This field is required."},{validator:()=>{let e=document.getElementById("input-topic").value,t=this.officeSelect.options[this.officeSelect.selectedIndex];if(!t)return!1;let i=(({careers:["careers_email","business_email","press_email",],"new-business":["business_email","careers_email","press_email",],press:["press_email","business_email","careers_email",]})[e]||["business_email","careers_email","press_email",]).some(e=>{let t=this.getSelectedOfficeData();return t&&t[e]&&""!==t[e].trim()});return i},errorMessage:"No email address available for this office"},]).addField("#input-fullname",[{rule:"required",errorMessage:"This field is required."},{rule:"minLength",value:2,errorMessage:"The name must have at least 2 characters."},{rule:"maxLength",value:50,errorMessage:"The name cannot have more than 50 characters."},{rule:"customRegexp",value:/^[a-zA-ZÃ¡Ã©Ã­Ã³ÃºÃ±ÃÃ‰ÃÃ“ÃšÃ‘\s]*$/,errorMessage:"This field must contain only letters."},]).addField("#input-email",[{rule:"required",errorMessage:"This field is required."},{rule:"email",errorMessage:"Please enter a valid email address."},{rule:"minLength",value:3,errorMessage:"The email must have at least 10 characters."},{rule:"maxLength",value:50,errorMessage:"The email cannot have more than 50 characters."},]).addField("#input-message",[{rule:"required",errorMessage:"This field is required."},{rule:"minLength",value:50,errorMessage:"The opinion must have at least 50 characters."},{rule:"customRegexp",value:/^[a-zA-ZÃ¡Ã©Ã­Ã³ÃºÃ±ÃÃ‰ÃÃ“ÃšÃ‘\s\d.,;:!?"'()-]*$/,errorMessage:"This field must contain only letters."},],{errorsContainer:".group-message"}).addField("#input-files",[{validator(){let e=document.getElementById("input-files");if(e.files.length>0){let t=["pdf","docx","xlsx","pptx",];for(let i of e.files){let r=i.name.split(".").pop().toLowerCase();if(!t.includes(r)||i.size>5242880)return!1}}return!0},errorMessage:"Files must be PDF, DOCX, XLSX or PPTX and less than 5MB"},]),this.formValidation=e}getSelectedOfficeData(){let e=document.querySelector('input[name="region"]:checked')?.value,t=this.countrySelect.value,i=this.officeSelect.value;if(!e||!t||!i)return null;let r=this.data.find(t=>t.name===e);if(!r)return null;let a=r.countries.find(e=>e.name.toLowerCase()===t.toLowerCase());return a?a.companies.find(e=>e.name.toLowerCase()===i.toLowerCase()):null}},ew=e=>{if(!e){console.error("ContactForm instance is required");return}let t=document.getElementById("uploadArea"),i=document.getElementById("defaultState"),r=document.getElementById("activeState"),a=r?.querySelector(".btn-add");if(!t||!i||!r||!a){console.error("Required elements not found");return}let n=[],o=t=>{let i=document.createElement("div");i.className="input-dd-files__file",i.innerHTML=`
              <div class="input-dd-files__actions">
                  <svg class="input-dd-files__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16h12V9z" stroke="#FAFAFA" stroke-width="2"/>
                  </svg>
                  <span class="input-dd-files__filename">${t.name}</span>
                  <button class="input-dd-files__button" data-filename="${t.name}">
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                          <path d="M11.7225 10.2555V16.7555M7.38916 10.2555V16.7555M3.05583 5.9222V18.9222C3.05583 19.4968 3.2841 20.0479 3.69043 20.4543C4.09676 20.8606 4.64786 21.0889 5.22249 21.0889H13.8892C14.4638 21.0889 15.0149 20.8606 15.4212 20.4543C15.8276 20.0479 16.0558 19.4968 16.0558 18.9222V5.9222M0.88916 5.9222H18.2225M4.13916 5.9222L6.30583 1.58887H12.8058L14.9725 5.9222" stroke="#FAFAFA" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </button>
              </div>
          `,r.insertBefore(i,a.nextSibling),i.querySelector(".input-dd-files__button").addEventListener("click",t=>{t.stopPropagation();let r=t.currentTarget.dataset.filename;n=n.filter(e=>e.name!==r),e.files.delete(r),i.remove(),s()})},s=()=>{n.length>0?(t.classList.add("input-dd-files__area--active"),i.style.display="none",r.style.display="flex"):(t.classList.remove("input-dd-files__area--active"),i.style.display="flex",r.style.display="none")},l=t=>{Array.from(t).forEach(t=>{n.some(e=>e.name===t.name)||(n.push(t),e.files.set(t.name,t),o(t))}),s();let i=document.getElementById("input-files"),r=new DataTransfer;n.forEach(e=>r.items.add(e)),i.files=r.files,i.dispatchEvent(new Event("change",{bubbles:!0}))};function c(e){e.preventDefault(),e.stopPropagation()}function d(){t.classList.add("input-dd-files__area--dragover")}function u(){t.classList.remove("input-dd-files__area--dragover")}function m(e){let t=e.dataTransfer;l(t.files)}["dragenter","dragover","dragleave","drop"].forEach(e=>{t.addEventListener(e,c,!1)}),["dragenter","dragover"].forEach(e=>{t.addEventListener(e,d,!1)}),["dragleave","drop"].forEach(e=>{t.addEventListener(e,u,!1)}),t.addEventListener("drop",m,!1),t.addEventListener("click",()=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.accept=".pdf,.docx,.xlsx,.pptx",e.onchange=e=>{l(e.target.files)},e.click()})},eb=()=>{let e=document.querySelector(".video-wrapper .video-banner");e&&(e.autoplay=!0,e.play())},eS=()=>{let e=document.querySelector(".btnContact button");if(!e)return;let t=document.querySelector(".open-nav"),i=document.querySelector('.menu-container a[href="#"]');if(!i)return;let r=()=>{t.click()},a=()=>{i.click()};e.addEventListener("click",e=>{e.preventDefault(),setTimeout(r,500),setTimeout(a,1e3)})};document.addEventListener("DOMContentLoaded",()=>{d(),a(),u(),h(),$(),E(),L(),T(),M(),N(),R(),z(),G(),Q(),eu(),et(),er(),ep(),e$();let e=new ev;ew(e),eb(),eS()})})();