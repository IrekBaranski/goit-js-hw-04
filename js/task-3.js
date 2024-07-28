
const player = {
  profile: {
	          username: "Jacob",
            playTime: 300,
  },

  changeUsername(newName) {
    this.profile.username = newName;
  },

  getInfo() {
    return `${this.profile.username} has ${this.profile.playTime} active hours!`;
  },
  
  updatePlayTime(hours) {
    this.profile.playTime = this.profile.playTime + hours;
  },
}


player.changeUsername("Jacob");
console.log(player.getInfo()); // "Jacob has 300 active hours!"

player.changeUsername("Marco");
console.log(player.getInfo()); // "Marco has 300 active hours!"

player.updatePlayTime(20);
console.log(player.getInfo()); // "Marco has 320 active hours!"
