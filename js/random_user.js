let userBox = document.getElementById("user");
let userPic = document.getElementById("img");
let button = document.getElementById("button");
let bio = document.getElementById("bio");

button.addEventListener("click", function() {
  userBox.classList = "d-flex";

  fetch("https://www.randomuser.me/api")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${
            response.statusText
          }`
        );
      }
    })
    .then((jsonResponse) => {
      //   console.log(jsonResponse);
      let user = jsonResponse.results;
      let name = user[0].name;
      let location = user[0].location;
      let greeting = `Hello human, I'm ${name.title} ${name.first} ${
        name.last
      }. I was born in the city of ${
        location.city
      }, I still live there BTW, so if you want to send me a gift any time soon, my address is ${
        location.street.name
      }, number ${location.street.number}.`;
      let picture = user[0].picture.large;

      userPic.src = picture;
      bio.innerHTML = greeting;
    })
    .catch((error) => {
      alert("Ouch!! The AI factory was hacked!! Run for your life now!!");
      console.log(error);
    });
});

// let user = {
//   results: [
//     {
//       gender: "female",
//       name: { title: "Ms", first: "Amalie", last: "Sørensen" },
//       location: {
//         street: { number: 5735, name: "Stenbjergvej" },
//         city: "Vipperød",
//         state: "Midtjylland",
//         country: "Denmark",
//         postcode: 78726,
//         coordinates: { latitude: "-36.5231", longitude: "165.2280" },
//         timezone: {
//           offset: "+10:00",
//           description: "Eastern Australia, Guam, Vladivostok",
//         },

//       },
//       email: "amalie.sorensen@example.com",
//       login: {
//         uuid: "0fbe9cf5-c604-4f7d-9feb-e12cdef19f66",
//         username: "sadwolf212",
//         password: "trevor",
//         salt: "zdt9BYu9",
//         md5: "3d7122ecab38f79d3d74e0ad7c309562",
//         sha1: "8f08eab7f1770b24658d0138a612d0265a7fa4f5",
//         sha256:
//           "0a900eca0b22a837b4a3e5ca225acbeb9927cb2ce886784767ca360d58d00609",
//       },

//       dob: { date: "1951-10-31T14:32:32.770Z", age: 69 },
//       registered: { date: "2016-04-12T16:28:31.013Z", age: 4 },
//       phone: "99169346",
//       cell: "20910657",
//       id: { name: "CPR", value: "311051-3055" },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/79.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
//       },

//       nat: "DK",
//     },
//   ],
//   info: { seed: "717c142da1e65068", results: 1, page: 1, version: "1.3" },
// };
