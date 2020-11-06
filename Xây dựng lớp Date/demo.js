function HocVien(ten, tuoi) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.lop = "C9";
  this.maPINNganHang = "1240895";

  this.getMaPin = function () {
    return this.maPINNganHang;
  };
  this.noi = function () {
    console.log("Toi ten la " + this.ten);
  };
  this.logThis = function () {
    console.log(this);
  };
}

function HocVien2(ten, tuoi) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.lop = "C9";
}

HocVien2.prototype.noi = function () {
  console.log("Toi ten la " + this.ten);
};
HocVien2.prototype.logThis = function () {
  console.log(this);
};

class HocVienClass {
  constructor(ten, tuoi) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.lop = "C9";
  }

  noi() {
    console.log("Toi ten la " + this.ten);
  }

  logThis() {
    console.log(this);
  }
}

let hai = new HocVien("Hai", 21);
let tu = new HocVien2("Tu", 20);
let phuoc = new HocVienClass("Phuoc", 19);
let phuoc2 = new HocVienClass("Phuoc2", 190);

// console.log(hai);
hai.logThis();
// console.log(tu);
tu.logThis();
// console.log(phuoc);
phuoc.logThis();
// console.log(phuoc2);
phuoc2.logThis();
