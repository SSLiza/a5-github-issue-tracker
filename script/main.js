const threeBtn = document.querySelectorAll('.btn-three')

let allIssues = [];

// threeBtn.forEach(btn => {
//     btn.onclick = () => selectCategory(btn)
// })


// const selectCategory = (button) => {
//     threeBtn.forEach(btn => {
//         btn.classList.remove("btn-primary");
//         btn.classList.add("btn-outline");
//     })
//     button.classList.add("btn-primary");
//     button.classList.remove("btn-outline");
// }

async function loadCards() {
    const cardContainer = document.getElementById('card-container')
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json()
    //console.log(data);
    allIssues = data.data;
    updateTotalCount(allIssues.length);
    displayCards(allIssues)
}

async function selectIssues(status) {
    threeBtn.forEach((btn) => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
    });
    const clickedBtn = document.getElementById(status === 'all-btn' ? 'all-btn' : status);
    if (clickedBtn) {
        clickedBtn.classList.add("btn-primary");
        clickedBtn.classList.remove("btn-outline");
    }
    let filtered;
    if (status === 'all-btn') {
        filtered = allIssues;
    } else {
        // status will be 'open' or 'closed'
        filtered = allIssues.filter(item => item.status === status);
    }

    // C. Re-render the UI
    displayCards(filtered);
    updateTotalCount(filtered.length);

}

function displayCards(cards) {
    //console.log(cards)
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    cards.forEach((element) => {
        const card = document.createElement("div");
        card.innerHTML = `
                <div class="bg-white p-4 space-y-4 border-t-4 
                ${element.status == 'open' ? 'border-green-800' : 'border-purple-800'
            } rounded-md">
                    <div class="flex justify-between">
                        <div>${element.status == 'open' ? `<img src="/assets/Open-Status.png"` : `<img src="/assets/Closed- Status .png"`}/></div>
                        <h3 class="rounded px-2
${element.priority === 'high'
                ? 'bg-red-200 text-red-600'
                : element.priority === 'medium'
                    ? 'bg-yellow-200 text-yellow-600'
                    : 'bg-green-200 text-green-600'
            }">
${element.priority.toUpperCase()}
</h3>
                    </div>
                    <h2 class="text-xl font-bold">${element.title}</h2>
                    <p class="text-[#64748B] line-clamp-2">
                    ${element.description}
                    </p>
                    <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    ${element.labels.map(label => `<span class="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-500 uppercase">${label}</span>`).join('')}
                </div>
                    <div class="mt-4">
                    <p class="text-[#64748B]">#${element.id} by ${element.author}</p>
                    <p class="text-[#64748B]">
${new Date(element.createdAt).toLocaleDateString()}
</p>

                    </div>
                    
                </div>

`
        cardContainer.appendChild(card)
    });
}

function updateTotalCount(count) {
    const countHeader = document.querySelector('h2.text-xl.font-bold');
    if (countHeader && countHeader.innerText.includes('Issues')) {
        countHeader.innerText = `${count} Issues`;
    }
}

loadCards()


//selectIssues()


const performSearch = () => {
    const input = document.getElementById("input-search");
    if (!input) return;
    
    const term = input.value.trim().toLowerCase();

        const activeBtn = Array.from(threeBtn).find(btn => btn.classList.contains('btn-primary'));
    const currentStatus = activeBtn ? activeBtn.id : 'all-btn';
    
    const filteredIssues = allIssues.filter(issue => {
        const matchesSearch = issue.title.toLowerCase().includes(term)
        
        const matchesStatus = (currentStatus === 'all-btn') || (issue.status === currentStatus);
        
        return matchesSearch && matchesStatus;
    });

    displayCards(filteredIssues);
    updateTotalCount(filteredIssues.length);
};

const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}
const searchInput = document.getElementById('input-search');
if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}
