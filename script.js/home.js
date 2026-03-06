// console.log("Home connected")
const cardContainer = document.getElementById('all-cards-container');
const loadingSpinner = document.getElementById('loading-spinner');
let count = 0;

const createElement = (labels) =>{
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

const loadAllIssues = async () => {
    showSpinner()
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url);
    const data = await res.json();
    displayAllIssues(data.data)
    hideSpinner()

}

const displayAllIssues = (cardsData) => {
    cardContainer.innerHTML = "";
    cardsData.forEach(element => {
        count++;
        // console.log(element)
        const card = document.createElement('div');
        card.className = `card bg-base-100 shadow-2xl h-64 border-t-4 ${element.status == 'open' ? "border-t-green-700" : "border-t-red-700"} p-4 `;
        card.innerHTML = `
        <div>
                    <div class="flex justify-end mb-3.5"><div class="badge badge-soft badge-error">${element.priority}</div></div>
                    <h2 class="text-[14px] font-semibold mb-3.5">${element.title}</h2>
                    <p class="text-[12px] text-[#64748B] line-clamp-2">${element.description}</p>
                    <div class="flex gap-1.5">
                        <div class="">${createElement(element.labels)}</div>
                        
                        
                    </div>
                    <p  class="text-[12px] text-[#64748B] mb-3.5">${element.author}</p>
                    <p  class="text-[12px] text-[#64748B] ">${element.createdAt}</p>
                </div> 
        
        `;
        cardContainer.appendChild(card)

    });
}
