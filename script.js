let data = [];

async function getRandomUser() {
    // fetching data.
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const userFname = data.results[0].name.first;
    const userLname = data.results[0].name.last;

    const newUser = {name: `${userFname} ${userLname}`, wealth: Math.floor(Math.random() * 10000000)};
    appData(newUser);

}

function appData(obj) {
    data.push(obj);
    updateDom(data);
}

function updateDom(providedData = data) {
    const parent = document.getElementById('parent');
    parent.innerHTML = '';
    providedData.forEach((ele) => {
        const {name, wealth} = ele;
        const child = document.createElement('div');
        child.innerHTML = `
        <div class="flex justify-between py-1 px-2 text-base capitalize text-white bg-violet-900 rounded">
            <p class="font-bold">${name} </p>
            <p><span class="font-bold">$</span><span class='double'>${formatMoney(wealth)}</span> </p>
        </div>`;
        parent.appendChild(child);
    })
}

function formatMoney(number) {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}





