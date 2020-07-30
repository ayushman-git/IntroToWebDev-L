console.log("Check")

let obj = {
  name: "NAME",
  aFunction() {
    console.log(this.name);
  }
}

obj.aFunction();