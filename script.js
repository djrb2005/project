document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
    var logo = document.getElementById('logo');
    var textAnimation = document.querySelector('.text_animation');
    var imgP = document.querySelector('#img_p'); // تأكد من أن هذا المعرف صحيح ويشير إلى العنصر المطلوب

    window.addEventListener('scroll', function() {
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
            logo.classList.add('hidden'); // إخفاء الشعار
            textAnimation.classList.add('hidden'); // إخفاء النص المتحرك
            if (imgP) {
                imgP.classList.add('hidden'); // إخفاء الصورة إذا كانت موجودة
            }
        } else {
            header.classList.remove('sticky');
            logo.classList.remove('hidden'); // إظهار الشعار
            textAnimation.classList.remove('hidden'); // إظهار النص المتحرك
            if (imgP) {
                imgP.classList.remove('hidden'); // إظهار الصورة إذا كانت موجودة
            }
        }
    });

    var openMenuButton = document.getElementById('openmenu');
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target element
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Smooth scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});








function openPage(pageName) {
    // إخفاء جميع الصفحات
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // عرض الصفحة المطلوبة
    document.getElementById(pageName).style.display = 'block';
}








document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backToTop');

    // إظهار وإخفاء زر العودة إلى الأعلى عند التمرير
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // تغيير الرقم بناءً على متطلباتك
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // التمرير السلس إلى الأعلى عند النقر
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
