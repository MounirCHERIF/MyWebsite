$(document).ready(function(){
    stickyElem = document.querySelector(".sticky-div");
    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    window.onscroll = function() {
        let div_container = document.getElementById("div-container")
        let name_div = document.getElementById("name-div")
        if(window.pageYOffset > currStickyPos) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0px";
            stickyElem.style.width = "100%"
            div_container.style.display = "none";
            name_div.style.display = "inline";
            name_div.style.zIndex = 10
        }else {
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
            div_container.style.display = "inline";
            name_div.style.display = "none";
        }
    }

    
     $('#btn-downloadCV').on('click', function () {
        $.ajax({
            url: '../CV.pdf',
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'CV.pdf';
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        });
    });
});