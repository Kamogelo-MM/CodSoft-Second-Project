function scroll() {
  let controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "218%",
    triggerElement: ".background",
    triggerHook: 0,
  })

    .setPin(".background")
    .addIndicators()
    .addTo(controller);
}

scroll();
