    function randomUser() {
    fetch("https://randomuser.me/api/?gender=male")
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        const gender = document.getElementById("gender");
        const fullName =
            data.results[0].name.title +
            " " +
            data.results[0].name.first +
            " " +
            data.results[0].name.last;
        const photo = data.results[0].picture.medium;
        const userPhoto = document.getElementById('user-photo');
        userPhoto.src = photo;
        gender.innerText = `Gender : ${data.results[0].gender}
            Email : ${data.results[0].email}
            Name : ${fullName}
            photo : 
            `;
        });
    }
    randomUser();
