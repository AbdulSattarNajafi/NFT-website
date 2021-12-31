(function ($) {
  $(function () {
    $(window).on("scroll", function () {
      fnOnScroll();
    });

    $(window).on("resize", function () {
      fnOnResize();
    });

    var agTimeline = $(".js-timeline"),
      agTimelineLine = $(".js-timeline_line"),
      agTimelineLineProgress = $(".js-timeline_line-progress"),
      agTimelinePoint = $(".js-timeline-card_point-box"),
      agTimelineItem = $(".js-timeline_item"),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top:
          agTimelineItem.first().find(agTimelinePoint).offset().top -
          agTimelineItem.first().offset().top,
        bottom:
          agTimeline.offset().top +
          agTimeline.outerHeight() -
          agTimelineItem.last().find(agTimelinePoint).offset().top,
      });

      f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({ height: n + "px" });

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight
          ? $(this).addClass("js-ag-active")
          : $(this).removeClass("js-ag-active");
      });
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }
  });
})(jQuery);

// Copy Policy ID
function myFunction() {
  const copyText = "8ab2467e8a86851321da8ae26ce4249e8fad8ae04d8c40515d7bae6d";
  navigator.clipboard.writeText(copyText);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

// Series Slider
$("#slide-right").owlCarousel({
  autoWidth: true,
  loop: true,
  rtl: true,
  margin: 20,
  slideTransition: "linear",
  center: true,
  smartSpeed: 5000,
  autoplay: true,
  autoplayTimeout: 5000,
  slideBy: 1,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      margin: 1,
    },
    600: {
      margin: 10,
    },
    1000: {
      margin: 20,
    },
  },
});

$("#slide-left").owlCarousel({
  autoWidth: true,
  loop: true,
  margin: 20,
  slideTransition: "linear",
  center: true,
  smartSpeed: 5000,
  autoplay: true,
  autoplayTimeout: 4000,
  slideBy: 1,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      margin: 1,
    },
    600: {
      margin: 10,
    },
    1000: {
      margin: 20,
    },
  },
});

// Team Slider
$(".team-item-container").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// FAQ Accordion
const accordionItems = document.querySelectorAll(".faq-accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".faq-accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".faq-accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
