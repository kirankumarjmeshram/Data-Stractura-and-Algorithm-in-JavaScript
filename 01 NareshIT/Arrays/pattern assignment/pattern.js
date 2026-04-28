//Design the program for below three patterns:
// 1 Butterfly pattern

function Butterfly(n){
    for(let i=1;i<=n;i++) {
        let row ='';
        for(let j=1;j<=i;j++){
            row+="*"
        }
        for(let j=1;j<=2*(n-i);j++) {
            row+=" ";
        }
        for(let j=1;j<=i;j++) {
            row+="*";
        }

        console.log(row)

    }
}
Butterfly(5)

// function butterflyPattern(n) {
//     // Upper half
//     for (let i = 1; i <= n; i++) {
//         let row = "";

//         // Left stars
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         // Spaces
//         for (let j = 1; j <= 2 * (n - i); j++) {
//             row += " ";
//         }

//         // Right stars
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         console.log(row);
//     }

//     // Lower half
//     for (let i = n - 1; i >= 1; i--) {
//         let row = "";

//         // Left stars
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         // Spaces
//         for (let j = 1; j <= 2 * (n - i); j++) {
//             row += " ";
//         }

//         // Right stars
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }

// // Run
// butterflyPattern(5);