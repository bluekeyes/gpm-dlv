(function() {

    function findTarget(element) {
        if (element.nodeType === 1) {
            var candidates = element.querySelectorAll('.nav-item-container');
            for (var i = 0; i < candidates.length; i++) {
                if (candidates[i].textContent == 'My Library') {
                    return candidates[i];
                }
            }
        }
    }

    function modifyTarget(element) {
        chrome.storage.sync.get({'gpmDefaultLibraryView': 'albums'}, function(item) {
            element.setAttribute('data-type', item.gpmDefaultLibraryView);
        });
    }

    var observer = new MutationObserver(function(mutations, observer) {
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                var element = findTarget(mutation.addedNodes[i]);
                if (element) {
                    modifyTarget(element);
                    observer.disconnect();
                }
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });

})();
