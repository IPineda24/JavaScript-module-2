async function getData() {
    const url = "https://rickandmortyapi.com/api/character";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.results);
        return json.results;

    } catch (error) {
        console.log(error.message)
    }

}

async function showData() {
    const data = await getData();
    let div = document.getElementById("content");
    data.forEach(e => {
        let p = document.createElement("p");
        p.innerHTML = e.name;
        div.appendChild(p);
    });

}

showData()