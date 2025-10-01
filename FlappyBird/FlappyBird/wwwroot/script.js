(function() {
    console.log('🎮 Script.js loaded');

    window.debugCountBirds = function() {
        try {
            return document.querySelectorAll('.bird').length;
        } catch (e) {
            return -1;
        }
    };

    window.keepSingleBird = function(keeperId) {
        try {
            const birds = Array.from(document.querySelectorAll('.bird'));
            birds.forEach(b => {
                if (b.id !== keeperId) b.remove();
            });
            return document.querySelectorAll('.bird').length;
        } catch (e) {
            return -1;
        }
    };

    window.addEventListener('load', function() {
        console.log('✅ Page fully loaded, JS functions ready');
        console.log('🐦 Initial bird count:', window.debugCountBirds());
    });
})();
