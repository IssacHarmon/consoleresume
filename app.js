let firstName = "Issac";
let lastName = "Harmon";
let fullName = firstName + " " + lastName;
let fullNameCaps = fullName.toUpperCase();

displayDescription(
  fullNameCaps,
  "Server",
  "I like to sleep...a lot. I also like to sleep more than that."
);

function displayDescription(myName, myCareer, myDescription) {
  console.log("Name: " + myName);
  console.log("Career: " + myCareer);
  console.log("Description: " + myDescription);
}

console.log(" ");

console.log("My Interests:");
displayInterests("Playing World of Warcraft.");
displayInterests("Hiking anywhere I can.");
displayInterests("Learning any new skill.");
displayInterests("Finding new music.");

console.log(" ");

function displayInterests(myInterest) {
  console.log("* " + myInterest);
}

console.log("My Previous Experience:");
displayPosition(
  "Chuys",
  " Server",
  "Serve tables and provide excellent service."
);
displayPosition(
  "Moes Southwest",
  " Line",
  "Honestly, I did a little bit of everything."
);
displayPosition(
  "Coldstone Creamery",
  " Icecream Maker",
  "Mixed icecream on a slab all day."
);

function displayPosition(companyname, jobtitle, jobdescription) {
  console.log("* " + companyname + "," + jobtitle + " - " + jobdescription);
}

console.log(" ");
console.log("My Skills:");
displaySkill("Sleep", true);
displaySkill("Cat-like reflexes", false);
displaySkill("Massaging", true);
displaySkill("Cooking", true);
displaySkill("Procrastinating", true);
displaySkill("Rockclimbing", false);

function displaySkill(skillName, bam) {
  if (bam === true) {
    console.log("* " + "BAM: " + skillName);
  } else if (bam === false) {
    console.log("* " + skillName);
  }
}
