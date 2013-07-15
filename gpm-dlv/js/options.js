function save_options() {
    var select = document.getElementById("default");
    var value = select.children[select.selectedIndex].value;

    chrome.storage.sync.set({'gpmDefaultLibraryView': value}, function() {
        var status = document.getElementById("status");
        status.innerHTML = "Saved; refresh any Google Music tabs.";
        setTimeout(function() {
            status.innerHTML = "";
        }, 2500);
    });
}

function restore_options() {
    chrome.storage.sync.get({'gpmDefaultLibraryView': 'albums'}, function(item) {
        var select = document.getElementById("default");
        for (var i = 0; i < select.children.length; i++) {
            var child = select.children[i];
            if (child.value == item.gpmDefaultLibraryView) {
                child.selected = "true";
                break;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener('click', save_options);
