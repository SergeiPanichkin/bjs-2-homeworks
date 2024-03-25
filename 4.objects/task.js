function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty ('marks')) {
    this.marks.push(...marks);
   }
}

Student.prototype.getAverage = function () {
  if  (this.hasOwnProperty('marks') && this.marks.length > 0 ){
    return this.marks.reduce((sum, mark) => (sum + mark)) / this.marks.length;
}
return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}