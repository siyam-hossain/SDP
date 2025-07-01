var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];


let largeName = friends[0];
friends.forEach(
    (friend)=>{
        if(friend.length > largeName.length){
            largeName = friend;
        }
    }
)
console.log(largeName,largeName.length);