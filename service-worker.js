const CACHE_NAME = "evm-cache-v1";

const FILES_TO_CACHE = [
  "./index.html",
  "./icon.png",
  "./style.css",  // falls du eine CSS-Datei nutzt
  "./viewer.html", // optional, falls noch vorhanden
  // alle PDFs
  "./pdf/basisalgorithmus.pdf",
  "./pdf/basisalgorithmus_trauma.pdf",
  "./pdf/akutes_koronarsyndrom.pdf",
  "./pdf/linksherzinsuffizienz_dyspnoe.pdf",
  "./pdf/bradykardie.pdf",
  "./pdf/hypertensiver_notfall.pdf",
  "./pdf/obstruktive_atemwegserkrankung_erwachsen.pdf",
  "./pdf/obstruktive_atemwegserkrankung_kind.pdf",
  "./pdf/extrapulmonale_atemwegserkrankung.pdf",
  "./pdf/hypoglykaemie.pdf",
  "./pdf/anaphylaxie.pdf",
  "./pdf/status_epilepticus.pdf",
  "./pdf/schlaganfall.pdf",
  "./pdf/reanimation.pdf",
  "./pdf/geburt.pdf",
  "./pdf/rosc.pdf",
  "./pdf/abdomineller_schmerz.pdf",
  "./pdf/traumatischer_schmerz.pdf",
  "./pdf/thorakaler_schmerz.pdf",
  "./pdf/rueckenschmerzen.pdf",
  "./pdf/starke_uebelkeit.pdf",
  "./pdf/sepsis.pdf",
  "./pdf/kohlenmonoxidvergiftung.pdf",
  "./pdf/thoraxentlastungspunktion.pdf",
  "./pdf/aufziehanleitung.pdf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
