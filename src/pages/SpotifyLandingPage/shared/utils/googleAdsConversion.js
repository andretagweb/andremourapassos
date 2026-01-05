export function trackMusicConversion({ platform, url }) {
  let opened = false;

  const openOnce = () => {
    if (opened) return;
    opened = true;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!window.gtag) {
    openOnce();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-993081860/pVCgCOaq3NgbEIT0xNkD",
    event_category: "music_platform",
    event_label: platform,
    event_callback: openOnce,
  });

  setTimeout(openOnce, 800);
}
