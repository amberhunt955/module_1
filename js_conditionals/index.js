//* Global Scope
// var favColor = "red";
// console.log(favColor);

// if (favColor === "red") {
    //* Local Scope
    // var favColor = "pink"
    // alert(favColor);
// }

//* because we used var, red has been overwritten
// console.log(favColor);

// let userName = "amber23";

// if (userName === "amber23") {
    // let userName = "amber";
    // console.log(userName); //amber
    // alert(userName); //amber
// }

// console.log(userName); //amber23
// alert(userName); //amber23


//* Interesting bit about const and "overwriting"
// let color = "red"
// const socialNumber = "123456";
// console.log(socialNumber);

// if (color === "red") {
//     let socialNumber = "123";
//     console.log(socialNumber);
//     // this is not being reassigned
//     // this socialNumber is a completely diff variable
//     // even though it has the same name
//     // because you cannot overwrite a const
//     // let is declaring a new variable
//     // if you get rid of let, it doesn't work
// }

// console.log(socialNumber);

//* Internet connection issues for score if/else


//* switch 

const color = "purple";

switch (color) {

    case "red":
        console.log("Color is red.");
        break;

    case "yellow":
        console.log("Color is yellow");
        break;

    case "purple":
        console.log("Color is purple");
        break;
    
    default:
        console.log("Please pick a color!");
}
