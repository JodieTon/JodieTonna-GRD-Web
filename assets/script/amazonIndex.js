
//slide animation


document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function () {

    });
});

const sliders = document.querySelectorAll('.deals-cards');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;

        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

        document.body.style.overflowX = 'hidden';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        document.body.style.overflowX = '';
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        document.body.style.overflowX = '';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;
    });
});


//Toast add to cart pop up


const toastTrigger = document.getElementById('add-to-cart')
const toastLiveExample = document.getElementById('cartToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

//swapping products in product section

function swapImage(element) {
    document.getElementById("displayedImage").src = element.src;
}

//removes drag from clickable items
document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

//follow button

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("followBtn");

    btn.addEventListener("click", function () {
        if (btn.innerText === "Follow") {
            btn.innerText = "Following";
            btn.classList.add("following");
        } else {
            btn.innerText = "Follow";
            btn.classList.remove("following");
        }
    });
});



