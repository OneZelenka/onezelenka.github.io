if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/panel/sw.js', { scope: '/panel' })})}