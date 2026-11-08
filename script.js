function openModal(event) {
    var modalId = event.currentTarget.getAttribute("data-modal");
    var modalcontent = document.getElementById(modalId);

    modalcontent.style.display = "block";
    document.body.style.overflow = "hidden";
    // Find and play the video inside the modal
    var video = modalcontent.querySelector("video");
    if (video) {
        video.play();
    }

    // Define a function to close the modal when the content is clicked
    function closeModalOnClick() {
        modalcontent.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";

        // Remove the event listener after use
        modalcontent.removeEventListener("click", closeModalOnClick);
        
    }

    // Add an event listener to the modal content to close it
    modalcontent.addEventListener("click", closeModalOnClick);


}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflowX = "hidden";
    var modalClickables = document.querySelectorAll(".modal-clickable");
    modalClickables.forEach(function (element) {
        element.addEventListener("click", openModal);
        element.addEventListener("touchstart", openModal);
    });
});

(function initMoodsLogoMorph() {
    var STATES = [{"name":"blue","verts":{"C":[849.25,1493.3],"O0":[849.25,2176.27],"O1":[2319.75,1971.08],"O2":[1758.09,242.45],"O3":[448.16,941.84],"O4":[200.27,1704.76],"I0":[1584.5,1834.8],"I1":[1584.5,1106.76],"I2":[1103.11,867.88],"I3":[524.77,1323.3],"I4":[524.77,1831.37]},"tris":[{"type":"grad","x1":1166.4,"y1":1871.1,"x2":2985.2,"y2":2079.22,"mid":0.5,"colors":[[174,229,248],[128,201,238],[81,173,229]]},{"type":"solid","x1":849.25,"y1":1493.3,"x2":2319.75,"y2":1971.08,"mid":0.5,"colors":[[107,207,246],[107,207,246],[107,207,246]]},{"type":"solid","x1":1584.5,"y1":1834.8,"x2":2319.75,"y2":1971.08,"mid":0.5,"colors":[[157,223,247],[157,223,247],[157,223,247]]},{"type":"solid","x1":849.25,"y1":1493.3,"x2":1584.5,"y2":1106.76,"mid":0.5,"colors":[[0,173,239],[0,173,239],[0,173,239]]},{"type":"solid","x1":849.25,"y1":1493.3,"x2":1758.09,"y2":242.45,"mid":0.5,"colors":[[87,196,241],[87,196,241],[87,196,241]]},{"type":"grad","x1":1926.4,"y1":1985.2,"x2":1997.45,"y2":751.4,"mid":0.5,"colors":[[73,141,210],[77,157,220],[81,173,229]]},{"type":"grad","x1":1308.0,"y1":836.94,"x2":785.59,"y2":2038.14,"mid":0.5,"colors":[[73,141,210],[64,127,202],[56,113,193]]},{"type":"solid","x1":849.25,"y1":1493.3,"x2":448.16,"y2":941.84,"mid":0.5,"colors":[[73,141,210],[73,141,210],[73,141,210]]},{"type":"solid","x1":1103.11,"y1":867.88,"x2":448.16,"y2":941.84,"mid":0.5,"colors":[[56,113,193],[56,113,193],[56,113,193]]},{"type":"solid","x1":849.25,"y1":1493.3,"x2":524.77,"y2":1323.3,"mid":0.5,"colors":[[56,113,193],[56,113,193],[56,113,193]]},{"type":"solid","x1":849.25,"y1":1493.3,"x2":200.27,"y2":1704.76,"mid":0.5,"colors":[[81,173,229],[81,173,229],[81,173,229]]},{"type":"grad","x1":640.89,"y1":1751.1,"x2":289.87,"y2":1276.95,"mid":0.5,"colors":[[81,173,229],[68,144,211],[56,114,193]]},{"type":"grad","x1":242.35,"y1":1581.5,"x2":1011.22,"y2":1721.31,"mid":0.5,"colors":[[81,173,229],[128,201,238],[174,229,248]]},{"type":"grad","x1":546.62,"y1":1779.8,"x2":1034.24,"y2":1868.47,"mid":0.5,"colors":[[81,173,229],[128,201,238],[174,229,248]]},{"type":"solid","x1":524.77,"y1":1831.37,"x2":849.25,"y2":2176.27,"mid":0.5,"colors":[[81,173,229],[81,173,229],[81,173,229]]}],"dots":{"I0":[73,141,210],"I4":[73,141,210],"I3":[44,56,146],"I2":[44,56,146],"I1":[44,56,146],"C":[36,38,93]}},{"name":"pink","verts":{"C":[1105.0,1259.3],"O0":[1105.0,2113.98],"O1":[2227.2,1623.93],"O2":[1798.57,304.73],"O3":[798.9,838.46],"O4":[292.83,1523.91],"I0":[1666.1,1683.4],"I1":[1666.1,964.32],"I2":[1298.72,781.99],"I3":[698.92,1181.19],"I4":[698.92,1689.49]},"tris":[{"type":"grad","x1":2910.0,"y1":1188.2,"x2":1135.2,"y2":1678.3,"mid":0.5,"colors":[[236,0,140],[238,66,170],[239,132,200]]},{"type":"solid","x1":1105.0,"y1":1259.3,"x2":2227.2,"y2":1623.93,"mid":0.5,"colors":[[236,0,140],[236,0,140],[236,0,140]]},{"type":"solid","x1":1666.1,"y1":1683.4,"x2":2227.2,"y2":1623.93,"mid":0.5,"colors":[[239,133,200],[239,133,200],[239,133,200]]},{"type":"solid","x1":1105.0,"y1":1259.3,"x2":1666.1,"y2":964.32,"mid":0.5,"colors":[[204,16,145],[204,16,145],[204,16,145]]},{"type":"grad","x1":2113.5,"y1":917.63,"x2":1095.7,"y2":1390.13,"mid":0.5,"colors":[[236,0,140],[207,9,131],[178,18,122]]},{"type":"solid","x1":1666.1,"y1":964.32,"x2":1798.57,"y2":304.73,"mid":0.5,"colors":[[178,18,122],[178,18,122],[178,18,122]]},{"type":"solid","x1":1105.0,"y1":1259.3,"x2":1298.72,"y2":781.99,"mid":0.5,"colors":[[178,18,122],[178,18,122],[178,18,122]]},{"type":"grad","x1":973.43,"y1":1470.2,"x2":1419.27,"y2":238.6,"mid":0.5,"colors":[[119,27,101],[148,22,112],[178,18,122]]},{"type":"solid","x1":1298.72,"y1":781.99,"x2":798.9,"y2":838.46,"mid":0.5,"colors":[[119,27,101],[119,27,101],[119,27,101]]},{"type":"solid","x1":1105.0,"y1":1259.3,"x2":698.92,"y2":1181.19,"mid":0.5,"colors":[[119,27,101],[119,27,101],[119,27,101]]},{"type":"grad","x1":576.9,"y1":1219.5,"x2":1088.12,"y2":1850.59,"mid":0.5,"colors":[[119,27,101],[162,22,123],[204,16,145]]},{"type":"solid","x1":698.92,"y1":1181.19,"x2":292.83,"y2":1523.91,"mid":0.5,"colors":[[178,18,122],[178,18,122],[178,18,122]]},{"type":"grad","x1":681.08,"y1":1346.2,"x2":787.21,"y2":1616.54,"mid":0.509,"colors":[[204,16,145],[225,86,179],[239,132,200]]},{"type":"grad","x1":833.27,"y1":1299.4,"x2":1112.36,"y2":2010.27,"mid":0.509,"colors":[[204,16,145],[225,86,179],[239,132,200]]},{"type":"solid","x1":698.92,"y1":1689.49,"x2":1105.0,"y2":2113.98,"mid":0.5,"colors":[[204,16,145],[204,16,145],[204,16,145]]}],"dots":{"I4":[236,0,140],"I0":[204,16,145],"I1":[119,27,101],"I2":[91,24,77],"I3":[91,24,77],"C":[91,24,77]}},{"name":"red","verts":{"C":[1429.1,942.26],"O0":[1429.1,2229.16],"O1":[2314.92,1230.87],"O2":[1976.56,189.53],"O3":[1095.25,483.25],"O4":[205.16,1339.94],"I0":[1872.01,1585.73],"I1":[1874.19,712.75],"I2":[1535.91,563.1],"I3":[817.13,913.71],"I4":[817.13,1585.73]},"tris":[{"type":"grad","x1":1630.2,"y1":1724.5,"x2":790.71,"y2":1145.07,"mid":0.5,"colors":[[241,68,113],[239,48,74],[237,28,36]]},{"type":"solid","x1":1429.1,"y1":942.26,"x2":2314.92,"y2":1230.87,"mid":0.5,"colors":[[239,42,70],[239,42,70],[239,42,70]]},{"type":"solid","x1":1872.01,"y1":1585.73,"x2":2314.92,"y2":1230.87,"mid":0.5,"colors":[[247,152,179],[247,152,179],[247,152,179]]},{"type":"grad","x1":1429.1,"y1":971.81,"x2":2314.92,"y2":971.81,"mid":0.5,"colors":[[191,27,44],[214,28,40],[237,28,36]]},{"type":"grad","x1":1429.1,"y1":565.89,"x2":1976.56,"y2":565.89,"mid":0.5,"colors":[[191,27,44],[214,28,40],[237,28,36]]},{"type":"solid","x1":1874.19,"y1":712.75,"x2":1976.56,"y2":189.53,"mid":0.5,"colors":[[239,42,70],[239,42,70],[239,42,70]]},{"type":"solid","x1":1429.1,"y1":942.26,"x2":1535.91,"y2":563.1,"mid":0.5,"colors":[[237,28,36],[237,28,36],[237,28,36]]},{"type":"solid","x1":1429.1,"y1":942.26,"x2":1095.25,"y2":483.25,"mid":0.5,"colors":[[239,42,70],[239,42,70],[239,42,70]]},{"type":"solid","x1":1535.91,"y1":563.1,"x2":1095.25,"y2":483.25,"mid":0.5,"colors":[[191,27,44],[191,27,44],[191,27,44]]},{"type":"solid","x1":1429.1,"y1":942.26,"x2":817.13,"y2":913.71,"mid":0.5,"colors":[[237,28,36],[237,28,36],[237,28,36]]},{"type":"grad","x1":931.21,"y1":791.95,"x2":746.99,"y2":1355.54,"mid":0.5,"colors":[[239,42,70],[243,98,124],[247,153,179]]},{"type":"grad","x1":1032.9,"y1":480.77,"x2":767.89,"y2":1291.53,"mid":0.5,"colors":[[239,42,70],[243,98,124],[247,153,179]]},{"type":"grad","x1":1192.0,"y1":1539.3,"x2":769.29,"y2":1090.37,"mid":0.5,"colors":[[241,68,113],[244,110,146],[247,153,179]]},{"type":"grad","x1":1988.2,"y1":2182.7,"x2":1326.41,"y2":1479.86,"mid":0.5,"colors":[[241,68,113],[244,110,146],[247,153,179]]},{"type":"solid","x1":817.13,"y1":1585.73,"x2":1429.1,"y2":2229.16,"mid":0.5,"colors":[[241,68,113],[241,68,113],[241,68,113]]}],"dots":{"I0":[191,27,44],"I4":[239,42,70],"I3":[191,27,44],"I1":[159,26,38],"I2":[159,26,38],"C":[159,26,38]}},{"name":"orange","verts":{"C":[846.74,1100.9],"O0":[846.74,2227.71],"O1":[2326.24,1581.61],"O2":[1508.53,191.04],"O3":[443.2,546.08],"O4":[193.8,1313.66],"I0":[1586.5,1664.3],"I1":[1586.5,886.33],"I2":[975.84,645.97],"I3":[522.34,929.87],"I4":[522.34,1660.73]},"tris":[{"type":"grad","x1":698.64,"y1":1678.4,"x2":1569.25,"y2":1595.42,"mid":0.5,"colors":[[246,204,41],[244,196,41],[241,188,41]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":2326.24,"y2":1581.61,"mid":0.5,"colors":[[241,188,41],[241,188,41],[241,188,41]]},{"type":"solid","x1":1586.5,"y1":1664.3,"x2":2326.24,"y2":1581.61,"mid":0.5,"colors":[[246,204,41],[246,204,41],[246,204,41]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":1586.5,"y2":886.33,"mid":0.5,"colors":[[222,168,34],[222,168,34],[222,168,34]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":1508.53,"y2":191.04,"mid":0.5,"colors":[[246,135,18],[246,135,18],[246,135,18]]},{"type":"grad","x1":1873.5,"y1":417.85,"x2":1949.65,"y2":1232.02,"mid":0.5,"colors":[[246,135,18],[244,162,30],[241,188,41]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":975.84,"y2":645.97,"mid":0.5,"colors":[[228,117,24],[228,117,24],[228,117,24]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":443.2,"y2":546.08,"mid":0.5,"colors":[[192,81,31],[192,81,31],[192,81,31]]},{"type":"solid","x1":975.84,"y1":645.97,"x2":443.2,"y2":546.08,"mid":0.5,"colors":[[168,64,31],[168,64,31],[168,64,31]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":522.34,"y2":929.87,"mid":0.5,"colors":[[177,69,31],[177,69,31],[177,69,31]]},{"type":"grad","x1":350.8,"y1":783.49,"x2":603.53,"y2":1415.49,"mid":0.5,"colors":[[192,81,31],[219,108,24],[246,135,18]]},{"type":"solid","x1":522.34,"y1":929.87,"x2":193.8,"y2":1313.66,"mid":0.5,"colors":[[192,81,31],[192,81,31],[192,81,31]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":522.34,"y2":1660.73,"mid":0.5,"colors":[[241,188,41],[241,188,41],[241,188,41]]},{"type":"solid","x1":846.74,"y1":1100.9,"x2":846.74,"y2":2227.71,"mid":0.5,"colors":[[251,212,70],[251,212,70],[251,212,70]]},{"type":"grad","x1":859.59,"y1":2130.0,"x2":456.75,"y2":1034.5,"mid":0.5,"colors":[[246,204,41],[246,170,30],[246,135,18]]}],"dots":{"I4":[222,168,34],"I0":[222,168,34],"I1":[211,99,29],"I2":[141,48,28],"I3":[168,64,31],"C":[123,44,25]}},{"name":"green","verts":{"C":[854.32,1318.7],"O0":[854.32,1993.22],"O1":[2306.62,1790.56],"O2":[1503.91,425.56],"O3":[458.19,774.04],"O4":[213.36,1527.55],"I0":[1580.5,1656.0],"I1":[1580.5,1108.0],"I2":[981.06,872.11],"I3":[533.85,1150.8],"I4":[533.85,1655.96]},"tris":[{"type":"grad","x1":1620.0,"y1":1913.0,"x2":338.8,"y2":1229.13,"mid":0.5,"colors":[[204,227,16],[223,233,22],[242,239,29]]},{"type":"solid","x1":854.32,"y1":1318.7,"x2":2306.62,"y2":1790.56,"mid":0.5,"colors":[[204,227,16],[204,227,16],[204,227,16]]},{"type":"solid","x1":1580.5,"y1":1656.0,"x2":2306.62,"y2":1790.56,"mid":0.5,"colors":[[242,239,29],[242,239,29],[242,239,29]]},{"type":"solid","x1":854.32,"y1":1318.7,"x2":1580.5,"y2":1108.0,"mid":0.5,"colors":[[174,209,26],[174,209,26],[174,209,26]]},{"type":"solid","x1":854.32,"y1":1318.7,"x2":1503.91,"y2":425.56,"mid":0.5,"colors":[[204,227,16],[204,227,16],[204,227,16]]},{"type":"grad","x1":2109.8,"y1":1055.7,"x2":1593.8,"y2":1187.67,"mid":0.5,"colors":[[204,227,16],[223,233,22],[242,239,29]]},{"type":"grad","x1":854.32,"y1":872.11,"x2":1503.93,"y2":872.11,"mid":0.5,"colors":[[39,150,60],[122,188,38],[204,227,16]]},{"type":"grad","x1":458.18,"y1":872.11,"x2":1503.88,"y2":872.11,"mid":0.5,"colors":[[39,150,60],[122,188,38],[204,227,16]]},{"type":"solid","x1":981.06,"y1":872.11,"x2":458.19,"y2":774.04,"mid":0.5,"colors":[[39,150,60],[39,150,60],[39,150,60]]},{"type":"solid","x1":854.32,"y1":1318.7,"x2":533.85,"y2":1150.8,"mid":0.5,"colors":[[35,118,55],[35,118,55],[35,118,55]]},{"type":"grad","x1":831.31,"y1":1824.6,"x2":198.44,"y2":964.03,"mid":0.6139,"colors":[[204,227,16],[39,150,60],[33,114,50]]},{"type":"grad","x1":632.72,"y1":1554.6,"x2":198.59,"y2":964.27,"mid":0.6139,"colors":[[204,227,16],[39,150,60],[33,114,50]]},{"type":"grad","x1":501.5,"y1":1592.8,"x2":572.37,"y2":1220.98,"mid":0.5,"colors":[[242,239,29],[185,222,34],[128,204,40]]},{"type":"solid","x1":854.32,"y1":1318.7,"x2":854.32,"y2":1993.22,"mid":0.5,"colors":[[247,243,91],[247,243,91],[247,243,91]]},{"type":"solid","x1":533.85,"y1":1655.96,"x2":854.32,"y2":1993.22,"mid":0.5,"colors":[[204,227,16],[204,227,16],[204,227,16]]}],"dots":{"I4":[128,204,40],"I0":[128,204,40],"I1":[39,150,60],"I2":[28,100,52],"I3":[28,100,52],"C":[28,100,52]}}];
    var TRIS = [
        ["C","O0","I0"],["C","I0","O1"],["I0","O0","O1"],
        ["C","O1","I1"],["C","I1","O2"],["I1","O1","O2"],
        ["C","O2","I2"],["C","I2","O3"],["I2","O2","O3"],
        ["C","O3","I3"],["C","I3","O4"],["I3","O3","O4"],
        ["C","O4","I4"],["C","I4","O0"],["I4","O4","O0"]
    ];
    var VERT_KEYS = ["C","O0","O1","O2","O3","O4","I0","I1","I2","I3","I4"];
    var OUTER_KEYS = ["O0","O1","O2","O3","O4"];
    var DOT_KEYS = ["C","I0","I1","I2","I3","I4"];

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function lerpColor(c0, c1, t) {
        var r = Math.round(c0[0] + (c1[0] - c0[0]) * t);
        var g = Math.round(c0[1] + (c1[1] - c0[1]) * t);
        var b = Math.round(c0[2] + (c1[2] - c0[2]) * t);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    function startMorph() {
        var svg = document.getElementById("moods-morph-logo");
        if (!svg) return;

        var clipPoly = document.getElementById("moods-clip-poly");
        var triEls = [];
        var gradEls = [];
        var stopEls = [];
        for (var i = 0; i < 15; i++) {
            triEls.push(document.getElementById("mtri-" + i));
            gradEls.push(document.getElementById("mgrad-" + i));
            stopEls.push([
                document.getElementById("mstop-" + i + "-0"),
                document.getElementById("mstop-" + i + "-1"),
                document.getElementById("mstop-" + i + "-2")
            ]);
        }

        var dotEls = {};
        for (var d = 0; d < DOT_KEYS.length; d++) {
            var dk = DOT_KEYS[d];
            dotEls[dk] = document.getElementById("mdot-" + dk);
        }

        var HOLD_MS = 500;
        var MORPH_MS = 1800;
        var STEP_MS = HOLD_MS + MORPH_MS;
        var TOTAL_MS = STEP_MS * STATES.length;
        var startTime = null;
        var curV = {};

        function frame(now) {
            if (startTime === null) startTime = now;
            var elapsed = (now - startTime) % TOTAL_MS;
            var idx = Math.floor(elapsed / STEP_MS);
            var nextIdx = (idx + 1) % STATES.length;
            var stepElapsed = elapsed - idx * STEP_MS;

            var rawT = stepElapsed <= HOLD_MS ? 0 : (stepElapsed - HOLD_MS) / MORPH_MS;
            var u = easeInOutCubic(Math.max(0, Math.min(1, rawT)));

            var sA = STATES[idx];
            var sB = STATES[nextIdx];

            for (var k = 0; k < VERT_KEYS.length; k++) {
                var vk = VERT_KEYS[k];
                var va = sA.verts[vk];
                var vb = sB.verts[vk];
                curV[vk] = [
                    (va[0] + (vb[0] - va[0]) * u).toFixed(2),
                    (va[1] + (vb[1] - va[1]) * u).toFixed(2)
                ];
            }

            var outerPts = "";
            for (var o = 0; o < 5; o++) {
                var ov = curV[OUTER_KEYS[o]];
                outerPts += (o ? " " : "") + ov[0] + "," + ov[1];
            }
            clipPoly.setAttribute("points", outerPts);

            for (var i = 0; i < 15; i++) {
                var tk = TRIS[i];
                var p0 = curV[tk[0]], p1 = curV[tk[1]], p2 = curV[tk[2]];
                var pts = p0[0] + "," + p0[1] + " " + p1[0] + "," + p1[1] + " " + p2[0] + "," + p2[1];
                triEls[i].setAttribute("points", pts);

                var ta = sA.tris[i];
                var tb = sB.tris[i];

                var x1a = ta.x1, y1a = ta.y1, x2a = ta.x2, y2a = ta.y2, mida = ta.mid;
                var x1b = tb.x1, y1b = tb.y1, x2b = tb.x2, y2b = tb.y2, midb = tb.mid;
                var colA = ta.colors;
                var colB = tb.colors;

                if (ta.type === "solid" && tb.type === "grad") {
                    x1a = x1b; y1a = y1b; x2a = x2b; y2a = y2b; mida = midb;
                } else if (ta.type === "grad" && tb.type === "solid") {
                    x1b = x1a; y1b = y1a; x2b = x2a; y2b = y2a; midb = mida;
                } else if (ta.type === "grad" && tb.type === "grad") {
                    var dot = (x2a - x1a) * (x2b - x1b) + (y2a - y1a) * (y2b - y1a);
                    if (dot < 0) {
                        x1b = tb.x2; y1b = tb.y2; x2b = tb.x1; y2b = tb.y1;
                        midb = 1 - tb.mid;
                        colB = [tb.colors[2], tb.colors[1], tb.colors[0]];
                    }
                }

                var gEl = gradEls[i];
                gEl.setAttribute("x1", lerp(x1a, x1b, u).toFixed(1));
                gEl.setAttribute("y1", lerp(y1a, y1b, u).toFixed(1));
                gEl.setAttribute("x2", lerp(x2a, x2b, u).toFixed(1));
                gEl.setAttribute("y2", lerp(y2a, y2b, u).toFixed(1));

                var sEl = stopEls[i];
                sEl[0].setAttribute("stop-color", lerpColor(colA[0], colB[0], u));
                sEl[1].setAttribute("offset", lerp(mida, midb, u).toFixed(3));
                sEl[1].setAttribute("stop-color", lerpColor(colA[1], colB[1], u));
                sEl[2].setAttribute("stop-color", lerpColor(colA[2], colB[2], u));
            }

            for (var d = 0; d < DOT_KEYS.length; d++) {
                var dk = DOT_KEYS[d];
                var dv = curV[dk];
                var dEl = dotEls[dk];
                dEl.setAttribute("cx", dv[0]);
                dEl.setAttribute("cy", dv[1]);
                dEl.setAttribute("fill", lerpColor(sA.dots[dk], sB.dots[dk], u));
            }

            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startMorph);
    } else {
        startMorph();
    }
})();
