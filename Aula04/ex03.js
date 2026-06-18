let n = 10;
let r = n % 2;

switch (r) {
    case 0:
        console.log("Par");
        break;
    case 1:
        console.log("Impar");
        break;
        default:
            console.log("Você não deveria ver isso");
}