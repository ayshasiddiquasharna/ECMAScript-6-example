/*3) How will you get the output
a) abc
b) xyz*/

let activities = {
    activity1: [
        {
            name: "listen on spotify",
            musicPlayer: {
                song_list: {
                    song_1: "abc",
                    song_2: "bcd"
                },
                id: 1
            }
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
};

// a) Get "abc"
const abc = activities.activity1[0]?.musicPlayer?.song_list?.song_1;
console.log("a) abc:", abc);

// b) Get "xyz"
const xyz = activities.activity1[1]?.song_list?.song_2;
console.log("b) xyz:", xyz);
