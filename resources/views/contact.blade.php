@extends('layouts.app')

@section('content')


<div id="content">
  <main class="bg-primary-green-600">
    <div class="pin-spacer">
      <section
        class="video-banner-section parallax-effect"
        data-header-color="transparent"
      >
        <div class="video-wrapper">
          <div class="masks-svgs-container">
            <div class="h-screen md:flex">
              <div
               data-animation="fade-in"
                class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center"
              >
                <div>
                  <h1 class="text-orange-500 font-bold text-4xl"  data-animation="fade-in">
                    IKTIKA MEDIA
                  </h1>
                  <h2 class="text-gray-400 fs-5 font-semibold"  data-animation="fade-in">
                    Social Media Markting and Web Design Agency
                  </h2>
                  <p class="text-white mt-1 mb-3" style="width: 500px"  data-animation="fade-in">
                    Whether you need a visually stunning website, engaging
                    content, or a powerful digital marketing strategy, our
                    team is here to bring your ideas to life. Have a
                    question or a project in mind? Contact us today—we’d
                    love to collaborate with you!
                  </p>
                  <div
                    class="rounded-lg bg-card h-min flex items-center aligh-center max-w-full mb-3"
                     data-animation="fade-in"
                  >
                    <span
                      class="relative flex h-5 w-5 bg-orange-500 shrink-0 overflow-hidden rounded-full min-h-[40px] min-w-[40px] p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-full text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path></svg
                    ></span>
                    <div>
                      <p
                        class="text-md font-extrabold text-orange-500 leading-[100%] dark:text-white pl-4"
                      >
                        Mail Address
                      </p>
                      <p
                        class="text-sm font-medium text-gray-200 dark:text-zinc-400 md:mt-2 pl-4 md:text-base"
                      >
                        hello@iktika.com
                      </p>
                    </div>
                  </div>
                  <div
                    class="rounded-lg bg-card h-min flex items-center aligh-center max-w-full mb-3"
                     data-animation="fade-in"
                  >
                    <span
                      class="relative flex h-5 w-5 bg-orange-500 shrink-0 overflow-hidden rounded-full min-h-[40px] min-w-[40px] p-2"
                    >
                      <svg
                        fill="#fff"
                        class="w-full text-gray-400"
                        id="Capa_1"
                        viewBox="0 0 473.806 473.806"
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4    c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8    c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6    c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5    c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26    c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9    c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806    C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20    c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6    c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1    c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3    c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5    c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8    c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9    l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1    C420.456,377.706,420.456,388.206,410.256,398.806z"
                            />
                            <path
                              d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2    c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11    S248.656,111.506,256.056,112.706z"
                            />
                            <path
                              d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11    c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2    c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                            />
                          </g>
                        </g></svg
                    ></span>
                    <div>
                      <p
                        class="text-md font-extrabold text-orange-500 leading-[100%] dark:text-white pl-4"
                      >
                        Phone No.
                      </p>
                      <p
                        class="text-sm font-medium text-gray-200 dark:text-zinc-400 md:mt-2 pl-4 md:text-base"
                      >
                        832 721 7108
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-orange-500 rounded-full border-opacity-30 border-t-8"
                ></div>
                <div
                  class="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-orange-500 rounded-full border-opacity-30 border-t-8"
                ></div>
                <div
                  class="absolute -top-40 -right-0 w-80 h-80 border-4 border-orange-500 rounded-full border-opacity-30 border-t-8"
                ></div>
                <div
                  class="absolute -top-20 -right-20 w-80 h-80 border-4 border-orange-500 rounded-full border-opacity-30 border-t-8"
                ></div>
              </div>
              <div
                class="flex md:w-1/2 justify-center py-10 items-center bg-white"
                 data-animation="fade-in"
              >
                <form class="bg-white">
                  <h1 class="text-gray-800 font-bold text-2xl mb-1">
                    Contact Us
                  </h1>
                  <p class="text-sm font-normal text-gray-600 mb-3">
                    Fill out the form below and we’ll get back to you as
                    soon as possible.
                  </p>
                  <div
                    class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <input
                      class="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Full name"
                    />
                  </div>
                  <div
                    class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#cbd5e0"
                      class="h-5 w-5 text-gray-400"
                      id="Capa_1"
                      viewBox="0 0 473.806 473.806"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4    c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8    c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6    c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5    c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26    c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9    c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806    C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20    c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6    c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1    c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3    c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5    c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8    c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9    l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1    C420.456,377.706,420.456,388.206,410.256,398.806z"
                          />
                          <path
                            d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2    c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11    S248.656,111.506,256.056,112.706z"
                          />
                          <path
                            d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11    c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2    c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                          />
                        </g>
                      </g>
                    </svg>
                    <input
                      class="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone No."
                    />
                  </div>
                  <div
                    class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    <input
                      class="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Email Address"
                    />
                  </div>
                  <div
                    class="flex items-center border-2 py-2 px-3 rounded-2xl"
                  >
                    <textarea
                      class="pl-2 w-100 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="block w-full bg-orange-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="main-content-container">
      <section class="contact-section" data-header-color="green">
        <div class="contact-content-container">
          <div class="main-text-content" style="min-width: 100%">
            <div class="main-title-container">
              <h2 class="main-title px-4">
                We do Media Markting and Web Design.
              </h2>
            </div>
          </div>
          <div class="secondary-text-content">
            <div class="rich-text-container">
              <p>
                We specialize in social media marketing, web design, and
                development to help brands grow online.
              </p>

              <p>
                From engaging content to high-performance websites, we
                make sure your business stands out.
              </p>

              <p>
                Whether you need more engagement or a seamless website,
                we’re here to help you succeed!
              </p>

              <p>
                Let’s create something amazing together — Get in touch
                with us!
              </p>
            </div>
            <div class="button-container btnContact">
              <button class="primary-button">contact us</button>
            </div>
          </div>
        </div>
        <div id="modal" class="modal">
          <div class="modal-overlay"></div>
          <div class="modal-wrapper modal-wrapper-video">
            <div class="modal-content modal-content-single-video">
              <div class="modal-container modal-container-video">
                <div class="content-video">
                  <iframe></iframe>
                </div>
              </div>
              <div
                data-type-element="close-modal"
                class="circle-primary-button btn-close-modal"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="#0F0F0E"
                  ></rect>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8854 14.8856C15.3628 14.4082 16.1368 14.4082 16.6142 14.8856L27.9998 26.2712L39.3854 14.8856C39.8628 14.4082 40.6368 14.4082 41.1142 14.8856C41.5916 15.363 41.5916 16.1371 41.1142 16.6145L29.7286 28L41.1142 39.3856C41.5916 39.863 41.5916 40.6371 41.1142 41.1145C40.6368 41.5919 39.8628 41.5919 39.3854 41.1145L27.9998 29.7289L16.6142 41.1145C16.1368 41.5919 15.3628 41.5919 14.8854 41.1145C14.408 40.6371 14.408 39.863 14.8854 39.3856L26.271 28L14.8854 16.6145C14.408 16.1371 14.408 15.363 14.8854 14.8856Z"
                    fill="#FDFDFD"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</div>
@endsection