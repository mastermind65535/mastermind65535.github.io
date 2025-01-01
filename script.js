function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

function redirectTo(event) {
    window.location.href = event.getAttribute("url");
}

function addBadgeImages() {
    let BADGES = {}
    BADGES["Python"] = "https://camo.githubusercontent.com/0d0779a129f1dcf6c31613b701fe0646fd4e4d2ed2a7cbd61b27fd5514baa938/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534";
    BADGES["CSharp"] = "https://camo.githubusercontent.com/e12029f1d6292800c6a63b7c134a199d76f99552944e2000beef21abca451162/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632532332d2532333233393132302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d637368617270266c6f676f436f6c6f723d7768697465";
    BADGES["CPP"] = "https://camo.githubusercontent.com/88e1b21c4e11afd4f06cfb2b510dbb3690dbd300fb1a6d4676fd553a70bafa82/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632b2b2d2532333030353939432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465";
    BADGES["PHP"] = "https://camo.githubusercontent.com/a7fff07e5cafec1541292e8ded465ab230075fc069fe23317dbb317b3bbaf65d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d2532333737374242342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465";
    BADGES["JavaScript"] = "https://camo.githubusercontent.com/29d02b3669d6450d67e043cf5909e740dcb94c1e2306d88ac48b15b4ec55dc65/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145";
    
    const badges = document.querySelectorAll('.badge');

    badges.forEach(badge => {
        const text = badge.textContent;
        const match = text.match(/badge=(\w+)/);

        if (match) {
            const badgeName = match[1];
            const imageUrl = BADGES[badgeName];

            if (imageUrl) {
                badge.innerHTML = "";
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `${badgeName} Badge`;
                badge.appendChild(img);
            } else {
                console.warn(`No URL defined for badge: ${badgeName}`);
            }
        }
    });
}

function ShowPublic() {
    const rows = document.querySelectorAll('.projects tbody tr');

    rows.forEach(row => {
        if (row.innerHTML.includes('project-info')) {
            return; // Skip this row if 'colspan' is 8 or 'project-info' class exists
        }

        const publicCell = row.cells[5]; // 6th column (index 5)

        const publicText = publicCell.innerText.trim(); // Use innerText and trim spaces
        if (publicText === "No") {
            publicCell.classList.add('red');
        } else if (publicText === "Yes") {
            publicCell.classList.add('green');
        }
    });
}

function ShowLevel() {
    const rows = document.querySelectorAll('.projects tbody tr');

    rows.forEach(row => {
        if (row.innerHTML.includes('project-info')) {
            return; // Skip this row if 'colspan' is 8 or 'project-info' class exists
        }

        const publicCell = row.cells[6]; // 7th column (index 6)

        const publicText = publicCell.innerText.trim(); // Use innerText and trim spaces
        if (publicText === "Excellent") {
            publicCell.classList.add('excellent');
        } else if (publicText === "Advanced") {
            publicCell.classList.add('advanced');
        } else if (publicText === "Intermediate") {
            publicCell.classList.add('intermediate');
        } else if (publicText === "Basic") {
            publicCell.classList.add('basic');
        } else if (publicText === "Experimental") {
            publicCell.classList.add('experimental');
        }
    });
}

function makeGoBack() {
    
}

function Init() {
    addBadgeImages();
    // ShowPublic();
    // ShowLevel();
}