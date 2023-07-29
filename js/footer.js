const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">Causal</a></li>
                    <li><a href="#" class="footer-link">Ethinic</a></li>
                    <li><a href="#" class="footer-link">Western</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                </ul>
            </div>
        </div>
            <p class="footer-title">about company</p>
            <p class="info">Clara is not just about selling clothes; it's about fostering a fashion-forward community that values self-expression and sustainability. Visit Clara today and discover a world of stylish possibilities that speak to your unique identity. Elevate your style with Clara!</p>
            <p class="info">support email - clara@clothing.com</p>
            <p class="info">telephone - 2764589678, 984575325</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
        `;
}

createFooter();