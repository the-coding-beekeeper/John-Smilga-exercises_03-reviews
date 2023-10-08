const backBtnEl = document.getElementById("back-button");
const forwardBtnEl = document.getElementById("forward-button");
const surpriseBtnEl = document.getElementById("surprise");
const profileFotoEl = document.getElementById("profile-foto");
const nameEl = document.getElementById("name");
const jobEl = document.getElementById("job");
const descriptionEl = document.getElementById("description");
const profiles = [
  {
    image: "images/person1.jpg",
    name: "Susan Smith",
    job: "Web Developer",
    description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    image: "images/person2.jpg",
    name: "Anna Johnson",
    job: "Web Designer",
    description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    image: "images/person3.jpg",
    name: "PeterJones",
    job: "Intern",
    description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    image: "images/person4.jpg",
    name: "Bill Anderson",
    job: "The Boss",
    description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  }
];
let profileNumber = 0;
profileChange();
function profileChange() {
profileFotoEl.src = profiles[profileNumber].image;
nameEl.innerText = profiles[profileNumber].name;
jobEl.innerText = profiles[profileNumber].job;
descriptionEl.innerText = profiles[profileNumber].description;
}

document.addEventListener("click", (e) => {
  if (e.target === backBtnEl) {
    profileNumber -= 1;
    if(profileNumber < 0) {
      profileNumber = 3;
    }
  profileChange();
  };
  if (e.target === forwardBtnEl) {
    profileNumber += 1;
    if(profileNumber > 3) {
      profileNumber = 0;
    }
  profileChange();
  }
  if (e.target === surpriseBtnEl) {
    profileNumber = Math.floor(Math.random()*4);
  }
  console.log(profileNumber);
  profileChange();
});



