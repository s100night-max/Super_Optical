// This file is responsible for registering the service worker for the Progressive Web App (PWA).

// Check if service workers are supported by the browser
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register the service worker
        navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
    });
} else {
    console.warn('Service workers are not supported in this browser.');
}