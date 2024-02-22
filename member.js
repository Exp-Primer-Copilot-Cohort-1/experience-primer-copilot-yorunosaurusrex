function skillsMember() {
  this.skills = ['JavaScript', 'React', 'Node.js'];
  this.addSkill = function(skill) {
    this.skills.push(skill);
  };
}
