// DAY 2 //

// let challenge = "30 Days Of JavaScript";
// console.log(challenge);
// console.log(challenge.length);
// let upper = challenge.toUpperCase();
// let lower = challenge.toLowerCase();
// let firstWord = challenge.substring(3, 6);
// console.log(firstWord);
// console.log(challenge.includes("Script"));
// console.log(challenge.split(" "));
// let word = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(word.split(", "));
// console.log(challenge.replace("JavaScript", "python"));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt(challenge.indexOf("J")));
// console.log(challenge.lastIndexOf("a"));
// let word2 =
//   "You cannot end a sentence with because because because is a conjunction";

// console.log(word2.search("because"));
// console.log(challenge.trim());
// console.log(challenge.endsWith("pt"));
// console.log(challenge.match(/a/g));
// console.log(challenge.match(/a/));
// console.log("30 Days Of".concat("JavaScript"));
// console.log(challenge.repeat(2));

// if (typeof "10" === typeof toString(10)) console.log("true");
// else console.log("false");

// if ("I hope this course is not full of jargon.".includes("jargon"))
//   console.log(true);
// else console.log("false");

// console.log(Math.random() * 255);
// console.log("javascript".charAt(Math.floor(Math.random() * 10)));
// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// let s =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(s.slice(s.indexOf("because"), s.indexOf(" is")));
// const s =
//   "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
// let sm = s.match(/\d+/g);
// let sn = sm.map((s) => +s);
// console.log(sn.reduce((p, c) => p + c, 0));
// let amount = sm.reduce((p, n) => (n += p), 0);
// console.log(amount);

// DAY 3 //
// console.log(3 && 2);

// let x = 1;
// switch (x) {
//   case 1:
//     console.log("x = 1");
//     break;
//   case 2:
//     console.log("x = 2");
//     break;

//   default:
//     console.log("x is s");
//     break;
// }
// let age = 14.5;
// age >= 18
//   ? console.log("you are good to drive")
//   : console.log(`You are left with ${18 - age} years to drive.`);

// DAY 4 //
// DAY 5 //
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// const arr1 = new Array();
// const arr2 = [0, 1, 2, 3, 5];
// console.log(arr2.length);
// console.log(arr2[0]);
// let l = arr2.length - 1;
// console.log(Math.round(l / 2));
// console.log(arr2[l]);
// let mixedDataTypes = [1, "string", true, 1n, { name: "name" }, [1]];
// console.log(mixedDataTypes);
// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// let getP = (arr) => {
//   let f = arr[0];
//   let l = arr.length - 1;
//   let m = arr[Math.floor(l / 2)];
//   l = arr[l];
//   return { f, m, l };
// };

// let getOO = (arr) => {
//   let a = new Array();
//   arr.forEach((com) => {
//     let c = 0;
//     for (i = 0; i < com.length - 1; i++) if (com[i] == "o") c++;
//     if (c > 1) a.push(com);
//   });
//   console.log(a);
// };

// console.log(getP(countries));

// console.log(itCompanies.includes("Facebook"));
// getOO(itCompanies);
// let l = itCompanies.length - 1;
// let m = Math.floor(l / 2);
// console.log(m);
// console.log(itCompanies.slice(m, m + 1));

// itCompanies = [];
// console.log(itCompanies);

// DAY 6 //

// function getP(fnum, snum) {
//   let prime = [];
//   for (let i = fnum; i < snum; i++) {
//     let p = true;
//     for (let j = 2; j < i / 2; j++) {
//       if (i % j == 0) {
//         p = false;
//         break;
//       }
//     }
//     p ? prime.push(i) : null;
//   }
//   return prime;
// }

// console.log(getP(2, 100000));

// function getR(l, m) {
//   let rarr = "";
//   for (let i = 0; i < l; i++) {
//     let leter = String.fromCharCode(Math.round(Math.random() * m) + 33);

//     rarr = rarr.concat(leter);
//   }
//   return rarr;
// }

// console.log(getR(20, 89));
// function getH() {
//   let h = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//   ];
//   let s = "#";
//   for (let i = 0; i < 100; i++) {
//     let rn = Math.round(Math.random() * 15);
//     console.log(rn);
//     let rl = h[rn];
//     s = s.concat(rl);
//   }

//   return s;
// }

// console.log(getH());


