function Solve(v) {
    var res = document.getElementById("res");
    var oldvalue = res.value;
    var t = oldvalue.length;
    var lastchr = oldvalue[t - 1];


    var oprsym = ["+", "-", "*", "/", ".", "%"];
    if (oprsym.includes(v)) {
        if (oprsym.includes(lastchr)) {
            var removelast = oldvalue.slice(0, -1);
            res.value = removelast + v;

        }
        else {
            res.value = oldvalue + v;
        }
    }
    else {
        res.value = oldvalue + v;
    }
}

function caldata() {
    var res = document.getElementById("res");
    var oldvalue = eval(res.value);
    res.value = oldvalue;
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}