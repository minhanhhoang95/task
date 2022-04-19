function kq() {
    let numA=Number(document.getElementsByClassName('inA').value);
    let numB=Number(document.getElementsByClassName('inB').value);
    let numC=Number(document.getElementsByClassName('inC').value);
    let d= (numB*numB)- (4*numA*numC);
    let X = ((-numB-Math.sqrt(d))/(2*numA));
    let Y = ((-numB+Math.sqrt(d))/(2*numA));
    let E = (-numB/2*numA);
  if (numA == 0) {
      alert('đây không phải là hàm bậc hai!');
   else if (d == 0) {
      document.getElementsByClassName('inX').value=E;
      document.getElementsByClassName('inY').value=E;
  } else if (d > 0) {
    document.getElementsByClassName('inX').value=X;
    document.getElementsByClassName('inY').value=Y;
  } else {
      alert('phương trình vô nghiệm');
  }
}