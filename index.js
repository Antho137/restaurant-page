const tabs = document.querySelector(".container");
const tabBtn = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

// clicking on specific target ID open the related tab which become active, and the already active one will be removed
tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabBtn.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}
