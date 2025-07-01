
const friends = ["Siyam","Hossain","Jobbar","Hasan","Siyam Hossain"];

const checkFriends = (tempFriend)=>{
    let largeNam = tempFriend[0];

    for(let i = 0; i < tempFriend.length; i++){
        const temp = tempFriend[i];

        if(temp.length > largeNam.length){
            largeNam = temp;
        }
    }
    return largeNam;
}

const largeName = checkFriends(friends);

console.log(largeName);




//for each Approach
let lNam = friends[0];
friends.forEach(
    (friend)=>{
        if(lNam.length < friend.length){
            lNam = friend;
        }
    }
)
console.log(lNam);