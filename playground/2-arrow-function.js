// const square = function (x) {
//     return x * x;
// };

// const square = (x) => {
//     return x * x;
// };

// const square = (x) => x * x;
const event = {
    name: "Birthday party",
    guestList: ["Sanjana", "Parv", "Nizam"],
    printGuestList() {
        console.log("Guest list for " + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + " is attenting " + this.name);
        });
    },
};

event.printGuestList();

// console.log(square(3));
