// Blazor yüklenene kadar bekle
(function() {
    console.log('🎮 Script.js loaded');

    window.debugCountBirds = function() {
        try {
            const count = document.querySelectorAll('.bird').length;
            console.log('🐦 Bird count:', count);
            return count;
        } catch (e) {
            console.error('❌ debugCountBirds error:', e);
            return -1;
        }
    };

    window.keepSingleBird = function(keeperId) {
        try {
            const birds = Array.from(document.querySelectorAll('.bird'));
            console.log('🔍 Total birds before cleanup:', birds.length);

            birds.forEach(b => {
                if (b.id !== keeperId) {
                    console.log('🗑️ Removing bird:', b.id);
                    b.remove();
                }
            });

            const remaining = document.querySelectorAll('.bird').length;
            console.log('✅ Birds after cleanup:', remaining);
            return remaining;
        } catch (e) {
            console.error('❌ keepSingleBird error:', e);
            return -1;
        }
    };

    // Blazor yüklendiğinde log
    window.addEventListener('load', function() {
        console.log('✅ Page fully loaded, JS functions ready');
        console.log('🐦 Initial bird count:', window.debugCountBirds());
    });
})();