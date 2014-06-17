(function() {
    var element = null;
    var nav_elements = document.querySelectorAll('.nav-item-container');

    for (var i = 0; i < nav_elements.length; i++) {
        var current = nav_elements[i];
        if (current.innerHTML == 'My Library') {
            element = current;
            break;
        }
    }

    if (element != null) {
        chrome.storage.sync.get({'gpmDefaultLibraryView': 'albums'}, function(item) {
            element.setAttribute('data-type', item.gpmDefaultLibraryView);
        });
    } else {
        console.error('No element found; did Google change the page?');
    }
})();
