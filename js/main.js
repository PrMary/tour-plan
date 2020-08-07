$(document).ready(function () {
  new Swiper(".hotel-slider", {
    loop: !0,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: { enabled: !0, onlyInViewport: !1 },
  }),
    new Swiper(".reviews-slider", {
      loop: !0,
      navigation: {
        nextEl: ".reviews-slider__button--next",
        prevEl: ".reviews-slider__button--prev",
      },
      keyboard: { enabled: !0, onlyInViewport: !1 },
    });
  $(".menu-button").on("click", function () {
    console.log("Клик по кнопке меню"),
      $(".navbar-bottom").toggleClass("navbar-bottom_visible");
  });
  var e = $("[data-toggle=modal]"),
    o = $(".modal__close");
  e.on("click", function () {
    console.log("Клик по кнопке openModal");
    var e = $(".modal__overlay"),
      o = $(".modal__dialog");
    e.addClass("modal__overlay--visible"), o.addClass("modal__dialog--visible");
  }),
    o.on("click", function (e) {
      console.log("Клик по кнопке closeModal"), e.preventDefault();
      var o = $(".modal__overlay"),
        l = $(".modal__dialog");
      o.removeClass("modal__overlay--visible"),
        l.removeClass("modal__dialog--visible");
    }),
    $(document).on("keydown", function (e) {
      var o, l;
      console.log("Клик по кнопке Esc"),
        27 == e.keyCode &&
          ((o = $(".modal__overlay")),
          (l = $(".modal__dialog")),
          o.removeClass("modal__overlay--visible"),
          l.removeClass("modal__dialog--visible"));
    }),
    $(".form").each(function () {
      $(this).validate({
        errorClass: "invalid",
        messages: {
          name: {
            required: "Please specify your name",
            minlength: "Name must be at least 2 characters long",
          },
          email: {
            required: "We need your email address to contact you",
            email:
              "Your email address must be in the format of name@domain.com",
          },
          phone: {
            required: "Please specify your phone number",
            minlength: "Please specify your phone number",
          },
        },
      });
    }),
    $(".phone").mask("+7(000) 000-0000"),
    $(".map").mouseover(function () {
      var emptyMap = $(".map-g");
      if (!(emptyMap.length > 0)) {
        $("div.map").html(
          '<iframe class="map-g" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0413263625387!2d98.29254741477877!3d7.890745494315331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1596707340875!5m2!1sru!2sru" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        );
      }
    });
});
