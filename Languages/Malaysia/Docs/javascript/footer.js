document.getElementById('dynamic-footer').innerHTML = `
    <div class="px-5 md:px-12 2xl:px-0 bg-[#115934] md:pt-16 pt-10 md:pb-5 pb-3">
        <div class="max-w-[80rem] mx-auto">
            <div class="flex md:gap-28 md:flex-row flex-col gap-5">
                <a href="./index.html">
                    <img src="/Docs/Assets/Images/Global/fullWhiteLogo.svg" class="max-w-[103.43px] w-full" alt="">
                </a>
                <div class="w-full">
                    <ul class="grid text-white md:grid-cols-4 grid-cols-3 gap-y-2 w-full md:text-[16px] text-[12px]">
                        <a href="/Languages/Malaysia/about.html"><li>Tentang Kami</li></a>
                        <a href="/Languages/Malaysia/case-study.html"><li>Kajian Kes</li></a>
                        <a href="/Languages/Malaysia/News/chup-news.html"><li>Berita & Blog</li></a>
                        <a href="/Languages/Malaysia/Products.html"><li>Produk</li></a>
                        <a href="/Languages/Malaysia/FAQ.html"><li>Soalan Lazim </li></a>
                        <a href="/Languages/Malaysia/Career.html"><li>Kerjaya</li></a>
                        <a href="/Languages/Malaysia/Security-Compliance.html"><li class="text-nowrap">Pematuhan Keselamatan</li></a>
                    </ul>
                </div>
            </div>
            <div class="w-full h-[1px] bg-white md:mt-10 mt-6 mb-5"></div>
            <p class="text-white text-center">© 2024 Chup Online Sdn Bhd. All rights reserved.</p>
        </div>
    </div>
`;

const responsiveLanguages = document.getElementById('responsiveLanguages');
const responsiveLanguagesShow = document.getElementById('responsiveLanguagesShow');
responsiveLanguages.addEventListener('click', () => {
    responsiveLanguagesShow.style.display = responsiveLanguagesShow.style.display === "block" ? "none" : "block";
});