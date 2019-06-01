const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

tabItems.forEach(item => {
    item.addEventListener("click", selectTab);
});

function selectTab() {
    removeBorder();
    removeContent();
    this.classList.add("selected-tab");
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.remove("hidden");
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove("selected-tab");
    });
}

function removeContent() {
    tabContents.forEach(item => {
        item.classList.add("hidden");
    });
}
