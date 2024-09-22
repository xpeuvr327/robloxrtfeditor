function transformText(e, t) {
    let n = {
        bold: "<b>",
        italic: "<i>",
        underline: "<u>",
        strike: "<s>"
    };
    return t in n ? n[t] + e + n[t].replace("<", "</") : e
}

function changeRGB(e, t, n, l) {
    return '<font color="' + ("rgb(" + t + "," + n + ",") + l + ')">' + e
}

function closeFont(e) {
    return e + "</font>"
}

function changeFont(e, t) {
    return '<span style="font-family:' + t + ';">' + e
}

function closeSpan(e) {
    return e + "</span>"
}

function applyStyles() {
    let e = document.getElementById("input"),
        t = document.getElementById("output"),
        n = document.getElementById("bold"),
        l = document.getElementById("italic"),
        u = document.getElementById("underline"),
        a = document.getElementById("strike"),
        o = document.getElementById("font"),
        c = document.getElementById("color"),
        d = document.getElementById("fontFamily"),
        r = document.getElementById("red"),
        g = document.getElementById("green"),
        m = document.getElementById("blue"),
        y = e.value;
    n.checked && (y = transformText(y, "bold")), l.checked && (y = transformText(y, "italic")), u.checked && (y = transformText(y, "underline")), a.checked && (y = transformText(y, "strike")), o.checked && (y = closeSpan(y = changeFont(y, d.value))), c.checked && (y = changeRGB(y, r.value, g.value, m.value)), c.checked && (y = closeFont(y)), t.value = y
}

function applyRGB() {
    let e = document.getElementById("input"),
        t = document.getElementById("output"),
        n = document.getElementById("red"),
        l = document.getElementById("green"),
        u = document.getElementById("blue"),
        a = document.getElementById("redValue"),
        o = document.getElementById("greenValue"),
        c = document.getElementById("blueValue");
    a.value = n.value, o.value = l.value, c.value = u.value;
    let d = changeRGB(e.value, n.value, l.value, u.value),
        r = closeFont(d);
    t.value = r;
    document.getElementById("preview").style.backgroundColor = "rgb(" + n.value + "," + l.value + "," + u.value + ")"
}

function copyText() {
    let e = document.getElementById("output");
    e.select(), document.execCommand("copy"), alert("Texte copi\xe9: " + e.value)
}