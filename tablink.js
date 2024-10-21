// let tablinks = document.getElementsByClassName('tab-links');
// let tabcontents = document.getElementsByClassName('tab-contents');

// function opentab(tabname){
//     for(tablink of tablinks){
//         tablink.classList.remove('active-link');
//     }
//     for(tabcontent of tabcontents){
//         tabcontents.classList.remove("active-tab");
//     }
//     Event.currentTarget.classList.add('active-link');
//     document.getElementsById(tabname).classList.add('active-tab');
// }




// let tablinks = document.getElementsByClassName('tab-links');
// let tabcontents = document.getElementsByClassName('tab-contents');

// function opentab(tabname) {
//     // Remove 'active-link' class from all tab links
//     for (let tablink of tablinks) {
//         tablink.classList.remove('active-link');
//     }
//     // Remove 'active-tab' class from all tab contents
//     for (let tabcontent of tabcontents) {
//         tabcontent.classList.remove('active-tab');
//     }
//     // Add 'active-link' class to the clicked tab link
//     event.currentTarget.classList.add('active-link');
//     // Add 'active-tab' class to the corresponding tab content
//     document.getElementById(tabname).classList.add('active-tab');
// }



let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.add('active-tab');
    }
    this.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.remove('active-tab');
}