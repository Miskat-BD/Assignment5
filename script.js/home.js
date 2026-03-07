// console.log("Home connected")
const cardContainer = document.getElementById('all-cards-container');
const loadingSpinner = document.getElementById('loading-spinner');
const allFilterBtn = document.getElementById('all-filter-btn')
const openFilterBtn = document.getElementById('open-filter-btn')
const closedFilterBtn = document.getElementById('closed-filter-btn');
const modalContainer = document.getElementById('modal-container');
let totalIssues = document.getElementById('total-issue');

let count = 0;

const createElement = (labels) => {
    let label = labels.map(item => `<span class="text-[12px] bg-amber-300 p-1 rounded-xl">${item}</span>`)
    return (label.join(" "));
}
// Loading Spinner
const showSpinner = () => {
    loadingSpinner.classList.remove('hidden')
    cardContainer.classList.add('hidden')
}
const hideSpinner = () => {
    loadingSpinner.classList.add('hidden')
    cardContainer.classList.remove('hidden')
}

const loadModal = async (id) => {
    // console.log(id)
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await res.json();

    displayModal(data.data)
}

const displayModal = (data) => {
    const modal = document.getElementById('my_modal_1')
    console.log(data)
    modal.showModal()
    const modalDiv = document.createElement('div');
    modalContainer.innerHTML = "";
    modalDiv.innerHTML = `
        <h1 class="text-2xl font-bold mb-2.5">${data.title}</h1>
                <div class="flex gap-2 items-center mb-6">
                    <p class="${data.status == 'open' ? "bg-green-500":"bg-purple-500"} text-white text-[12px] py-1.5 px-2 rounded-2xl">${data.status == 'open'? "Opend" : "Closed"}</p>
                    <p class="text-[#64748B] text-[12px]">Opened by <span>${data.author}</span></p>
                    <p class="text-[#64748B] text-[12px]">${data.createdAt}</p>
                </div>
                <div class="flex gap-1.5 mb-6">
                    <div class="">${createElement(data.labels)}</div>
                </div>
                <p class="text-[#64748B] mb-7">${data.description}</p>
                <div class="flex gap-20">
                    <div class="">
                        <h1 class="text-[#64748B]">Assignee:</h1>
                        <p class="font-bold">${data.assignee}</p>
                    </div>
                    <div class="">
                        <h1 class="text-[#64748B]">Priority:</h1>
                        <p class="font-bold text-center ${data.priority == 'high' ? "bg-red-500": data.priority == 'medium' ? "bg-amber-400" : "bg-gray-500"} text-white text-[12px] py-1 px-2 rounded-2xl">${data.priority.toUpperCase()}</p>
                    </div>
                </div>
    
    `;
    modalContainer.appendChild(modalDiv)

    // console.log(data);
}

const loadAllIssues = async () => {
    showSpinner()
    openFilterBtn.classList.remove("btn-primary")
    closedFilterBtn.classList.remove("btn-primary")
    allFilterBtn.classList.add("btn-primary")
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url);
    const data = await res.json();
    displayAllIssues(data.data)
    hideSpinner()

}

const displayAllIssues = (cardsData) => {
    totalIssues.innerText = ""
    cardContainer.innerHTML = "";
    cardsData.forEach(element => {
        count++;
        // console.log(element.id)
        const card = document.createElement('div');
        card.className = `card bg-base-100 shadow-2xl h-64 border-t-4 ${element.status == 'open' ? "border-t-green-700" : "border-t-purple-700"} p-4 `;
        card.innerHTML = `
        <div onclick="loadModal(${element.id})" class="cursor-pointer">   
                    
                    <div class="flex justify-between mb-3.5" >
                    <p>${element.status == 'open' ? `<img src="assets/Open-Status.png"></img>` : `<img src="assets/Closed- Status .png" alt="">`}</p>
                    <div class="badge badge-soft ${element.priority == 'high'?"badge-error": element.priority == 'medium'? "badge-warning" : "badge-neutral"}">${element.priority.toUpperCase()}</div></div>
                    <h2 class="text-[14px] font-semibold mb-3.5">${element.title}</h2>
                    <p class="text-[12px] text-[#64748B] line-clamp-2">${element.description}</p>
                    <div class="flex gap-1.5">
                        <div class="">${createElement(element.labels)}</div>
                        
                        
                    </div>
                    <p  class="text-[12px] text-[#64748B] my-3.5"><span>#${element.id} by </span>${element.author}</p>
                    <p  class="text-[12px] text-[#64748B] ">${element.createdAt}</p>
                </div> 
        
        `;
        cardContainer.appendChild(card)
        totalIssues.innerText = cardsData.length;
    });
}

const loadOpenIssues = async () => {
    showSpinner()
    openFilterBtn.classList.add("btn-primary")
    closedFilterBtn.classList.remove("btn-primary")
    allFilterBtn.classList.remove("btn-primary")
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url);
    const data = await res.json();
    displayOpenIssues(data.data)
    hideSpinner()
}

const displayOpenIssues = (cardsData) => {
    totalIssues.innerText = ""
    cardContainer.innerHTML = "";
    totalOpen = cardsData.filter(item => item.status === 'open');
    cardsData.forEach(element => {
        // console.log(element)
        if (element.status === "open") {
            const card = document.createElement('div');
            card.className = `card bg-base-100 shadow-2xl h-64 border-t-4 ${element.status == 'open' ? "border-t-green-700" : "border-t-purple-700"} p-4 `;
            card.innerHTML = `
        <div onclick="loadModal(${element.id})">   
                    
                    <div class="flex justify-between mb-3.5">
                    <p>${element.status == 'open' ? `<img src="assets/Open-Status.png"></img>` : `<img src="assets/Closed- Status .png" alt="">`}</p>
                    <div class="badge badge-soft ${element.priority == 'high'?"badge-error": element.priority == 'medium'? "badge-warning" : "badge-neutral"}">${element.priority.toUpperCase()}</div></div>
                    <h2 class="text-[14px] font-semibold mb-3.5">${element.title}</h2>
                    <p class="text-[12px] text-[#64748B] line-clamp-2">${element.description}</p>
                    <div class="flex gap-1.5">
                        <div class="">${createElement(element.labels)}</div>
                        
                        
                    </div>
                    <p  class="text-[12px] text-[#64748B] my-3.5"><span>#${element.id} by </span>${element.author}</p>
                    <p  class="text-[12px] text-[#64748B] ">${element.createdAt}</p>
                </div> 
        
        `;
            cardContainer.appendChild(card)
            totalIssues.innerText = totalOpen.length
        }

    });
}

const loadClosedIssues = async () => {
    showSpinner()
    openFilterBtn.classList.remove("btn-primary")
    closedFilterBtn.classList.add("btn-primary")
    allFilterBtn.classList.remove("btn-primary")
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url);
    const data = await res.json();
    displayClosedIssues(data.data)
    hideSpinner()
}

const displayClosedIssues = (cardsData) => {
    totalIssues.innerText = ""
    cardContainer.innerHTML = "";
    totalClosed = cardsData.filter(item => item.status === 'closed');
    cardsData.forEach(element => {
        // console.log(element)
        if (element.status === "closed") {
            const card = document.createElement('div');
            card.className = `card bg-base-100 shadow-2xl h-64 border-t-4 ${element.status == 'open' ? "border-t-green-700" : "border-t-purple-700"} p-4 `;
            card.innerHTML = `
        <div onclick="loadModal(${element.id})">   
                    
                    <div class="flex justify-between mb-3.5">
                    <p>${element.status == 'open' ? `<img src="assets/Open-Status.png"></img>` : `<img src="assets/Closed- Status .png" alt="">`}</p>
                    <div class="badge badge-soft ${element.priority == 'high'?"badge-error": element.priority == 'medium'? "badge-warning" : "badge-neutral"}">${element.priority.toUpperCase()}</div></div>
                    <h2 class="text-[14px] font-semibold mb-3.5">${element.title}</h2>
                    <p class="text-[12px] text-[#64748B] line-clamp-2">${element.description}</p>
                    <div class="flex gap-1.5">
                        <div class="">${createElement(element.labels)}</div>
                        
                        
                    </div>
                    <p  class="text-[12px] text-[#64748B] my-3.5"><span>#${element.id} by </span>${element.author}</p>
                    <p  class="text-[12px] text-[#64748B] ">${element.createdAt}</p>
                </div> 
        
        `;
            cardContainer.appendChild(card)
            totalIssues.innerText = totalClosed.length;
        }

    });
}

// Searching
document.getElementById('search-btn').addEventListener('click', () => {
    const input = document.getElementById('search-input');
    const searchValue = input.value.trim().toLowerCase();
    // console.log(searchValue)
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.data;
            //    console.log(allCards)
            const filterCards = allCards.filter(item => item.title.toLowerCase().includes(searchValue))
            displayAllIssues(filterCards)
        })
})
loadAllIssues()