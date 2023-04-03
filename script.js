

const filterCOntainer = document.querySelector(".gallery-filter"),
galleryItem = document.querySelectorAll(".gallery-item");

filterCOntainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
        // deactivate existing active 'filter-item'
        filterCOntainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItem.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
});