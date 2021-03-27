var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this; // relationship1을 가리키는 this를 that에 저장
    console.log('that! ', that);
    console.log('relationship1 S');
    this.friends.forEach(function (friend) {
      console.log(this);
      // console.log(that.name, friend);
    });
    console.log('relationship1 E');
  },
};
relationship1.logFriends();

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    console.log('relationship2 S');
    this.friends.forEach(friend => {
      console.log(this);
      // console.log(this.name, friend);
    });
    console.log('relationship2 E');
  },
};
relationship2.logFriends();
