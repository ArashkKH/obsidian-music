setTimeout(() => {
  //======================== On Scroll Animations =======================\
  const animationTargets = document.querySelectorAll(`.scrollFade`);

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.3) {
          startAnimation(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  animationTargets.forEach((target) => {
    animationObserver.observe(target);
  });

  function startAnimation(target) {
    target.classList.add("scrlDoAnim");
  }
  //======================== On Scroll Animations =======================/
}, 0);
