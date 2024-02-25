class details {
  constructor(
    name = "Nitishkumar S",
    age = 22,
    address = "120M,Arumugam North 2nd st,Tirupathi balaji Nagar,kamarajapuram North,Tirumangalam-625706",
    degree = "B.E CSE",
    Skills = "HTML,CSS,JavaScript,word,Excel,Github",
    hobby = "listening music,playing games,learning new Technology",
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.degree = degree;
    this.Skills = Skills;
    this.hobby = hobby;
  }
}
const details1 = new details();
console.log(details1);
