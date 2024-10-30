//Nvabar *******************************************************************************
var openSidebar;
function openNav() {
    document.getElementById("mySidepanel").style.transition = "0.5s";
    document.getElementById("mySidepanel").style.width = "100%";
    openSidebar = 1;
}

function closeNav() {
    document.getElementById("mySidepanel").style.transition = "0s";
    document.getElementById("mySidepanel").style.width = "0";
    openSidebar = 0;
}

window.addEventListener("resize", changeWindow);
function changeWindow()
{
    if (openSidebar === 0){
        if (screen.width > 768){
            document.getElementById("mySidepanel").style.width = "90%";
        }else{
            document.getElementById("mySidepanel").style.width = "0";
        }
    }
}
//End Navbar

//Pagination all pets *********************************************************************
const hasPets = document.querySelector('.allPets');
if (hasPets){
    $(document).ready(function() {
        var items = $(".allPets");
        var numItems = items.length;
        var perPage = 20;

        items.slice(perPage).hide();

        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&#129028;",
            nextText: "&#129030;",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
    });
}

//End

// choose a photo *******************************************************************************
const fileInput1 = document.getElementById('file-input1');
if (fileInput1){
    const selectFilesText1 = document.getElementById('select-files-text1');
    selectFilesText1.addEventListener('click', () => {
        fileInput1.click();
    });
}

const fileInput2 = document.getElementById('file-input2');
if (fileInput2){
    const selectFilesText2 = document.getElementById('select-files-text2');
    selectFilesText2.addEventListener('click', () => {
        fileInput2.click();
    });
}

const editCoverPhoto = document.getElementById('editCoverPhoto');
if (editCoverPhoto){
    const coverPhoto = document.getElementById('coverPhoto');
    editCoverPhoto.addEventListener('click', () => {
        coverPhoto.click();
    });
}
// End Choose

//product detail ****************************************************************************
const hasSwiper = document.querySelector('.swiper');
if (hasSwiper){
    let tumbNail = new Swiper(".tumbNail", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });

    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: tumbNail,
        },
    });
}
