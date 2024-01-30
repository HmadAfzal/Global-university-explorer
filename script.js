let url = 'http://universities.hipolabs.com/search?name=';
async function getName() {
    try {
        let input = document.querySelector("input")
        let country = input.value;
        console.log(country)
        let names = await axios.get(url + country);
        return names.data
    } catch (error) {
        console.log(error)
    }

}

let btn = document.querySelector("button");
btn.addEventListener("click", async function ()  {
    try {
        let collegeData = await getName();
        console.log(collegeData);

        let ul = document.querySelector("ul");
        ul.innerHTML = "";  // Clear the existing list before appending new items

        if (Array.isArray(collegeData) && collegeData.length > 0) {
            for (let university of collegeData) {
                let li = document.createElement("li");
                li.innerText = university.name;
                ul.appendChild(li);
            }
        } else {
           let ul = document.querySelector("ul")
           let li= document.createElement("li")
           ul.appendChild(li)
           li.innerText= "No data found"
        }
    } catch (error) {
        console.error(error);
    }
});
