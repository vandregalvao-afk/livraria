// Service Worker mínimo — o Chrome exige um SW registrado
// para oferecer a opção "Instalar app" (PWA real com ícone no launcher).
// Este SW não faz cache offline (o app depende de dados online do Supabase),
// apenas passa as requisições adiante.

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Passa a requisição normalmente — sem cache.
  // Deixamos o handler vazio para atender o critério de "SW controla fetches"
  // que o Chrome verifica antes de mostrar o prompt de instalação.
});
