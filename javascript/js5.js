function kg() {
    // debugger;
    let A = Number(document.getElementById('vl').value);
    let B = Number(document.getElementById('HH').value);
    let C = Number(document.getElementById('SH').value);
    document.getElementById('T').value = A+B+C;
    // let E = D/3;
    document.getElementById('TB').value = (A+B+C)/3;
}