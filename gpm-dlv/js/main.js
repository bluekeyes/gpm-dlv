(function() {

    function findMyLibraryLink() {
        var candidates = document.querySelectorAll('.nav-item-container');
        for (var i = 0; i < candidates.length; i++) {
            if (candidates[i].textContent === 'My Library') {
                return candidates[i];
            }
        }
    }

    function setViewType(element) {
        chrome.storage.sync.get({'gpmDefaultLibraryView': 'albums'}, function(item) {
            element.setAttribute('data-type', item.gpmDefaultLibraryView);
        });
    }


    var intervalId;
    intervalId = setInterval(function () {
        var element = findMyLibraryLink();
        if (element) {
            clearInterval(intervalId);
            setViewType(element);
        }
    }, 250);
})();
