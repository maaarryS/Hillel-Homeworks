function Student(name, faculty, marks) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;
  this.avgMark = function() {
    let sum = marks.reduce((a, b) => a + b, 0);
    return sum / marks.length;
  };
  this.maxMark = function() {
    return marks.reduce((a, b) => (a > b) ? a : b);
  };
  this.minMark = function() {
    return marks.reduce((a, b) => (b > a) ? a : b);
  };
  this.total = function() {
    return sum = marks.reduce((a, b) => a + b, 0);
  };
  this.info = function() {
    return `${this.name} from course ${this.faculty} has total ${this.total()} scores!`;
  };
}

const student = new Student("John", "Front End Pro", [100, 98, 100, 95, 99]);


console.log(student);
console.log(`Average mark: ${student.avgMark()}`);
console.log(`Max mark: ${student.maxMark()}`);
console.log(`Min mark: ${student.minMark()}`);
console.log(`Total score: ${student.total()}`);
console.log(student.info());


