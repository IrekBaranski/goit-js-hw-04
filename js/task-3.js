console.log('\n<task-3>');
//The "profile" => object contains: username, playTime,
//+ methods to work with its properties.
//+ changeUsername(newName):= changes the value of username. Returns nothing.
//+ updatePlayTime(hours):= takes (number of hours) and increments the value of the playTime property by it. Returns nothing.
//+ getInfo():= returns a string in the format: `<Username> has <amount> active hours!`

//const player = {
const profile = {
	  username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
      this.username = newName;
    },

    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    },
  
    updatePlayTime(hours) {
      this.playTime = this.playTime + hours;
    },
}


profile.changeUsername("Jacob");
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
