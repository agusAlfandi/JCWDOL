const { th } = require("date-fns/locale");

class product {
  //     electronic: {
  //         productName = 'monitor',
  //         price = "100000"
  // },
  //     fashion: {
  //         bedak = 'fafa',
  //         price = '250000'
  //     },
  //     snack: {
  //         fastFood = 'Ciki',
  //         price = '5000'
  //     },
  constructor(name, stock, price) {
    this.name = name;
    this.stok = stock;
    this.price = price;
  }
}

class electronic extends product {
  constructor(brand, name, stock, price) {
    super(name, stock, price);
    this.brand = brand;
  }

  //   elekctro() {
  //     console.log(
  //       `brand: ${this.brand}, jenis barang: ${this.name}, stock: ${this.stock}, price: ${this.price}`
  //     );
  //   }
}

class fashion extends product {
  constructor(name, stock, price, expired) {
    super(name, stock, price);
    this.expired = expired;
  }

  //   fashion() {
  //     console.log(`${this.name} ${this.stock}, ${this.price}, ${this.expired}`);
  //   }
}

const inputElectronic = new electronic("LG", "Monitor", 2, 10000);
const inputFashion = new fashion("Wardah", 2, 10000, "2024-05-12");
// console.log("🚀 ~ inputFashion:", inputFashion);
// console.log("🚀 ~ electronicProduct:", inputElectronic);

class student {
  #password;
  #phonNumber;
  constructor(
    name,
    username,
    email,
    password,
    address,
    phonNumber,
    programSelected
  ) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.#password = password;
    this.address = address;
    this.#phonNumber = phonNumber;
    this.programSelected = programSelected;
  }

  get showPhoneNumber() {
    console.log(`Phone number: ${this.#phonNumber.slice(0, -5) + "*****"}`);
  }

  set validasiEmail(email) {
    if (email.includes("@") && email.includes(".")) {
      this.email = email;
    } else {
      console.log("Email Not valid");
    }
  }
  set validasiPass(password) {
    if (password.length > 10 || password.length < 6) {
      console.log("Password not valid");
    } else {
      this.#password = password;
    }
  }

  set validasiProgram(program) {
    let Matkul = ["JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
    if (Matkul.includes(program.toUpperCase())) {
      this.programSelected = program.toUpperCase();
    } else {
      console.log("Data program invalid");
    }
  }
}

const dataStudent = new student(
  "agus",
  "agusA",
  "agus@gmail.com",
  "1234567",
  "SKH",
  "08961244124",
  ""
);

dataStudent.validasiEmail = "agus@gmail.com";
dataStudent.validasiPass = "123456";
dataStudent.validasiProgram = "JCWd";
dataStudent.showPhoneNumber;
console.log(dataStudent);
