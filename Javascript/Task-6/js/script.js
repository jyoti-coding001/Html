const data = [
  {
    "id": 1,
    "name": { "first": "John", "middle": "A.", "last": "Doe" },
    "role": "Frontend Developer",
    "company": "TechCorp",
    "experience": 5,
    "city": "New York"
  },
  {
    "id": 2,
    "name": { "first": "Jane", "middle": "B.", "last": "Smith" },
    "role": "Backend Developer",
    "company": "CodeBase",
    "experience": 7,
    "city": "London"
  },
  {
    "id": 3,
    "name": { "first": "Amit", "middle": "", "last": "Sharma" },
    "role": "Full Stack Developer",
    "company": "Infosys",
    "experience": 4,
    "city": "Delhi"
  },
  {
    "id": 4,
    "name": { "first": "Emily", "middle": "C.", "last": "Brown" },
    "role": "UI Designer",
    "company": "DesignPro",
    "experience": 6,
    "city": "Toronto"
  },
  {
    "id": 5,
    "name": { "first": "Carlos", "middle": "D.", "last": "Garcia" },
    "role": "Software Engineer",
    "company": "Globex",
    "experience": 8,
    "city": "Madrid"
  },
  {
    "id": 6,
    "name": { "first": "Li", "middle": "", "last": "Wang" },
    "role": "DevOps Engineer",
    "company": "Alibaba",
    "experience": 5,
    "city": "Beijing"
  },
  {
    "id": 7,
    "name": { "first": "Fatima", "middle": "E.", "last": "Khan" },
    "role": "Mobile Developer",
    "company": "Careem",
    "experience": 3,
    "city": "Dubai"
  },
  {
    "id": 8,
    "name": { "first": "Luca", "middle": "", "last": "Rossi" },
    "role": "Backend Engineer",
    "company": "Ferrari Tech",
    "experience": 6,
    "city": "Rome"
  },
  {
    "id": 9,
    "name": { "first": "Sofia", "middle": "F.", "last": "Martinez" },
    "role": "Product Designer",
    "company": "UXWorks",
    "experience": 2,
    "city": "Buenos Aires"
  },
  {
    "id": 10,
    "name": { "first": "Noah", "middle": "G.", "last": "Wilson" },
    "role": "Cloud Engineer",
    "company": "Amazon",
    "experience": 9,
    "city": "Sydney"
  }
]
 let m = 0
while (m <data.length ) { 
  document.writeln( `${data[m].name.last} ${data[m].name.first} ${data[m].name.middle} is a ${data[m].role} at ${data[m].company} with ${data[m].experience} years of experience, based in ${data[m].city}</br>`)
  m++

}
console.log(data[0].name);