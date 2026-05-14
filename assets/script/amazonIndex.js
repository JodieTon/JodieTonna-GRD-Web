
//slide animation
console.log("amazonIndex.js is loaded");

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
    
    if (!btn) return; 
    
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
//contact form

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const offers = document.getElementById("offers").checked ? "Yes" : "No";
        
        const subject = "New Mailing List Signup";
        
        const body =
`New form submission:
        
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Offers Opt-in: ${offers}`;
        
        window.location.href =
        `mailto:hello@website.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

//price slider

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider");
    const maxValue = document.getElementById("maxValue");

    if (slider && maxValue) {
        slider.addEventListener("input", function () {
            maxValue.textContent = "€" + this.value;
        });
    }

});
    
    // removs item from favorites
    
    
    document.addEventListener("click", function (e) {
        const deleteIcon = e.target.closest(".delete-icon");
        if (!deleteIcon) return;
        
        const card = deleteIcon.closest(".box-favorites");
        if (card) {
            card.remove();
        }
    });
    
    
     // Favorites right card
    
     
     document.addEventListener("DOMContentLoaded", function () {
     
         function updateFavoritesStats() {
             const items = document.querySelectorAll(".box-favorites");
     
             let total = 0;
             let outOfStock = 0;
     
             items.forEach(item => {
                 const price = parseFloat(item.dataset.price) || 0;
                 const stock = parseInt(item.dataset.stock) || 0;
     
                 total += price;
     
                 if (stock === 0) {
                     outOfStock++;
                 }
             });
     
             const saved = total * 0.2;
     
             document.getElementById("fav-items").textContent = items.length;
             document.getElementById("fav-stock").textContent = `${outOfStock} item(s) out of stock`;
             document.getElementById("fav-total").textContent = `€${total.toFixed(2)}`;
             document.getElementById("fav-saved").textContent = `€${saved.toFixed(2)}`;
         }
     
         // DELETE (FIXED: works with span icons)
         document.addEventListener("click", function (e) {
             const deleteBtn = e.target.closest(".delete-icon");
     
             if (deleteBtn) {
                 const item = deleteBtn.closest(".box-favorites");
                 if (item) {
                     item.remove();
                     updateFavoritesStats();
                 }
             }
         });
     
         // initial run
         updateFavoritesStats();
     });
    


// MOVE ALL TO CART BUTTON


function showPopup() {
    document.getElementById("cart-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("cart-popup").style.display = "none";
}

// MOVE ALL TO CART (LEFT + RIGHT SIDE)
document.querySelector(".move-all-cart").addEventListener("click", function () {

    // remove ALL left items
    const items = document.querySelectorAll(".box-favorites");
    items.forEach(item => item.remove());

    // remove RIGHT summary box
    const rightBox = document.querySelector(".box-right-favorites");
    if (rightBox) {
        rightBox.remove();
    }

    // show popup
    showPopup();
});




// fav button

function showCartPopup(message) {
    document.getElementById("cart-popup-text").textContent = message;
    document.getElementById("add-cart-popup").style.display = "flex";
}

function closeCartPopup() {
    document.getElementById("add-cart-popup").style.display = "none";
}


document.addEventListener("click", function(e) {
    const cartBtn = e.target.closest(".bag-icon");

    if (cartBtn) {
        const item = cartBtn.closest(".box-favorites");

        const name = item.querySelector(".product-name-favorites").textContent;

        // remove item
        item.remove();

        // update stats
        updateFavoritesStats();

        // popup instead of alert
        showCartPopup(`${name} added to cart`);
    }
});

// basket button

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider");
    const maxValue = document.getElementById("maxValue");

    if (slider && maxValue) {
        slider.addEventListener("input", function () {
            maxValue.textContent = "€" + this.value;
        });
    }

    // DELETE ITEM FROM BASKET
    document.addEventListener("click", function (e) {
        const deleteIcon = e.target.closest(".delete-icon");
        if (!deleteIcon) return;

        const card = deleteIcon.closest(".box-basket");
        if (card) {
            card.remove();
        }
    });

});