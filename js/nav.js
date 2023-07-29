const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="image/clara.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="image/user.png" alt=""></a>
        <a href="#"><img src="image/cart.png" alt=""></a>
    </div>
</div> 
<ul class="links-container">
<li class="link-item"><a href="#header-section" class="link">HOME</a></li>
<li class="link-item"><a href="#newarrivals-section" class="link">NEW ARRIVALS</a></li>
<li class="link-item"><a href="#product-section" class="link">COLLECTIONS</a></li>
<li class="link-item"><a href="#footer-section" class="link">CONTACT</a></li>
</ul>
    `;
}

createNav();