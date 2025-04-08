// Mouse Takibi
const positionElement = $('#home-banner');

// Initialize previous mouse coordinates
let prevX = null;
let prevY = null;

$(document).mousemove((event) => {
    if (prevX !== null && prevY !== null) {
        let deltaX = event.clientX - prevX;
        let deltaY = event.clientY - prevY;

        let direction = '';

        if (deltaX > 0) {
            direction += 'Right ';
            $('#banner-pc-w-1').css('transform', `translateX(-44%)`);
            $('#banner-pc-w-2').css('transform', `translateX(-40%)`);
            $('#banner-pc-w-3').css('transform', `translateX(-36%)`);
            $('#banner-pc-w-4').css('transform', `translateX(-32%)`);
            $('#banner-pc-w-5').css('transform', `translateX(-32%)`);
            $('#banner-pc-w-6').css('transform', `translateX(-36%)`);
            $('#banner-pc-w-7').css('transform', `translateX(-40%)`);
            $('#banner-pc-w-8').css('transform', `translateX(-44%)`);
            $('#banner-phone').css('transform', `translate(-4%, -4%)`);
        } else if (deltaX < 0) {
            direction += 'Left ';
            $('#banner-pc-w-1').css('transform', `translateX(44%)`);
            $('#banner-pc-w-2').css('transform', `translateX(40%)`);
            $('#banner-pc-w-3').css('transform', `translateX(36%)`);
            $('#banner-pc-w-4').css('transform', `translateX(32%)`);
            $('#banner-pc-w-5').css('transform', `translateX(32%)`);
            $('#banner-pc-w-6').css('transform', `translateX(36%)`);
            $('#banner-pc-w-7').css('transform', `translateX(40%)`);
            $('#banner-pc-w-8').css('transform', `translateX(44%)`);
            $('#banner-phone').css('transform', `translate(4%, 4%)`);
        }

        if (deltaY > 0) {
            direction += 'Down';
            $('#banner-pc').css('transform', `translateY(1%)`);
            $('#banner-phone-w-1').css('transform', `translateY(5%)`);
            $('#banner-phone-w-2').css('transform', `translateY(15%)`);
            $('#banner-phone-w-3').css('transform', `translateY(30%)`);
            $('#banner-box-1').css('transform', `translateY(-5%)`);
            $('#banner-box-2').css('transform', `translateY(-10%)`);
            $('#banner-box-3').css('transform', `translateY(-15%)`);
        } else if (deltaY < 0) {
            direction += 'Up';
            $('#banner-pc').css('transform', `translateY(-1%)`);
            $('#banner-phone-w-1').css('transform', `translateY(-5%)`);
            $('#banner-phone-w-2').css('transform', `translateY(-15%)`);
            $('#banner-phone-w-3').css('transform', `translateY(-30%)`);
            $('#banner-box-1').css('transform', `translateY(5%)`);
            $('#banner-box-2').css('transform', `translateY(10%)`);
            $('#banner-box-3').css('transform', `translateY(15%)`);
        }

    }

    prevX = event.clientX;
    prevY = event.clientY;
});


let lastScrollPosition = 0;

let val_1 = 300;
let val_2 = 400;
let val_3 = 850;
let val_4 = 1200;
let val_5 = 2000;
let val_6 = 2200; // UX DESIGN
let val_7_1 = 2400;
let val_7_2 = 2900;
let val_8 = 2600; // WEB DESIGN
let val_8_1 = 2900;
let val_8_2 = 3200;
let val_9 = 3400; // MOBIL DESIGN
let val_9_1 = 3570;
let val_9_2 = 3900;
let val_10 = 3900; // OTHERS
let val_11 = 4200; // HOW I DO
let val_12 = 4500; // UX/UI TEXT
let val_13 = 4800; // UX/UI IMAGE
let val_14 = 6100; // Crafting
let val_15 = 6800; // TECH STACK
let val_16 = 7300; // FRONT END
let val_17 = 7300; // BACK END
let val_18 = 7800; // MOBILE
let val_19 = 8300; // Collaboration
let val_20 = 8700;

// SCROLL
$(window).scroll(function () {

    let scrollPosition = Math.round($(this).scrollTop());
    let viewportWidth = window.innerWidth;
    // console.log('scrollPosition:', scrollPosition);
    // $('#position').html(scrollPosition);
    // $('#wwidth').html(viewportWidth);

    if (viewportWidth <= 1536 && viewportWidth > 1366) {
        val_1 = 300;
        val_2 = 400;
        val_3 = 850;
        val_4 = 1200;
        val_5 = 2000;
        val_6 = 2200;   // UX DESIGN
        val_7_1 = 2400;
        val_7_2 = 2750;
        val_8 = 2600;   // WEB DESIGN
        val_8_1 = 2800;
        val_8_2 = 3300;
        val_9 = 3100;   // MOBIL DESIGN
        val_9_1 = 3450;
        val_9_2 = 3800;
        val_10 = 3700;  // OTHERS
        val_11 = 4200;  // HOW I DO
        val_12 = 4400;  // UX/UI TEXT
        val_13 = 4700;  // UX/UI IMAGE
        val_14 = 5900;  // Crafting
        val_15 = 6800;  // TECH STACK
        val_16 = 7300;  // FRONT END
        val_17 = 7800;  // BACK END
        val_18 = 7800;  // MOBILE
        val_19 = 8300;  // Collaboration
        val_20 = 8700;
    } else if (viewportWidth <= 1366 && viewportWidth > 1280) {
        val_1 = 300;
        val_2 = 400;
        val_3 = 850;
        val_4 = 1200;
        val_5 = 2000;
        val_6 = 2200;   // UX DESIGN
        val_7_1 = 2400;
        val_7_2 = 2750;
        val_8 = 2600;   // WEB DESIGN
        val_8_1 = 2800;
        val_8_2 = 3300;
        val_9 = 3100;   // MOBIL DESIGN
        val_9_1 = 3400;
        val_9_2 = 3800;
        val_10 = 3700;  // OTHERS
        val_11 = 4200;  // HOW I DO
        val_12 = 4400;  // UX/UI TEXT
        val_13 = 4700;  // UX/UI IMAGE
        val_14 = 5900;  // Crafting
        val_15 = 6800;  // TECH STACK
        val_16 = 7500;  // FRONT END
        val_17 = 8000;  // BACK END
        val_18 = 8000;  // MOBILE
        val_19 = 8500;  // Collaboration
        val_20 = 9200;
    } else if (viewportWidth <= 1280 && viewportWidth > 430) {
        val_1 = 300;
        val_2 = 400;
        val_3 = 1150;  // HOME PROJECTS
        val_4 = 1400; // HOME PROJECTS
        val_5 = 2700; // SERVICES
        val_6 = 2800;   // UX DESIGN
        val_7_1 = 2900;
        val_7_2 = 3300;
        val_8 = 3300;   // WEB DESIGN
        val_8_1 = 3500;
        val_8_2 = 4000;
        val_9 = 3900;   // MOBIL DESIGN
        val_9_1 = 4300;
        val_9_2 = 4700;
        val_10 = 4600;  // OTHERS
        val_11 = 5100;  // HOW I DO
        val_12 = 5300;  // UX/UI TEXT
        val_13 = 5700;  // UX/UI IMAGE
        val_14 = 7000;  // Crafting
        val_15 = 8000;  // TECH STACK
        val_16 = 9000;  // FRONT END
        val_17 = 9400;  // BACK END
        val_18 = 9900;  // MOBILE
        val_19 = 10400;  // Collaboration
        val_20 = 11100;
    } else if (viewportWidth <= 430 && viewportWidth > 360) {
        val_1 = 300;
        val_2 = 400;
        val_3 = 1150;  // HOME PROJECTS
        val_4 = 1470; // HOME PROJECTS
        val_5 = 3300; // SERVICES
        val_6 = 3400;   // UX DESIGN
        val_7_1 = 3600;
        val_7_2 = 4100;
        val_8 = 3900;   // WEB DESIGN
        val_8_1 = 4200;
        val_8_2 = 4500;
        val_9 = 5000;   // MOBIL DESIGN
        val_9_1 = 5200;
        val_9_2 = 5600;
        val_10 = 6000;  // OTHERS
        val_11 = 6600;  // HOW I DO
        val_12 = 6700;  // UX/UI TEXT
        val_13 = 7100;  // UX/UI IMAGE
        val_14 = 8600;  // Crafting
        val_15 = 9600;  // TECH STACK
        val_16 = 10600;  // FRONT END
        val_17 = 11000;  // BACK END
        val_18 = 11500;  // MOBILE
        val_19 = 11800;  // Collaboration
        val_20 = 12800;
    } else if (viewportWidth <= 360) {
        val_1 = 300;
        val_2 = 400;
        val_3 = 1100;  // HOME PROJECTS
        val_4 = 1470; // HOME PROJECTS
        val_5 = 3100; // SERVICES
        val_6 = 3300;   // UX DESIGN
        val_7_1 = 3400;
        val_7_2 = 3700;
        val_8 = 4000;   // WEB DESIGN
        val_8_1 = 4100;
        val_8_2 = 4500;
        val_9 = 4900;   // MOBIL DESIGN
        val_9_1 = 5000;
        val_9_2 = 5400;
        val_10 = 6000;  // OTHERS
        val_11 = 6600;  // HOW I DO
        val_12 = 6800;  // UX/UI TEXT
        val_13 = 7100;  // UX/UI IMAGE
        val_14 = 8600;  // Crafting
        val_15 = 9700;  // TECH STACK
        val_16 = 10800;  // FRONT END
        val_17 = 11300;  // BACK END
        val_18 = 11800;  // MOBILE
        val_19 = 12200;  // Collaboration
        val_20 = 13400;
    }

// BANNER
    if (scrollPosition > val_1) {
        $('#mainImage').removeClass('homePhotoIn');
        $('#mainImage').addClass('homePhotoOut');
        $('.banner-text').removeClass('moveInLeft');
        $('.banner-text').addClass('moveOutLeft');
        $('.banner-labels').removeClass('moveInUp');
        $('.banner-labels').addClass('moveOutUp');
    } else {
        $('#mainImage').addClass('homePhotoIn');
        $('#mainImage').removeClass('homePhotoOut');
        $('.banner-text').addClass('moveInLeft');
        $('.banner-text').removeClass('moveOutLeft');
        $('.banner-labels').addClass('moveInUp');
        $('.banner-labels').removeClass('moveOutUp');
    }

// HELLO
    if (scrollPosition > val_1) {
        $('#hello').addClass('moveInUp');
        $('#hello').removeClass('moveOutUp');
    } else {
        $('#hello').removeClass('moveInUp');
        $('#hello').addClass('moveOutUp');
    }

    if (scrollPosition > val_2) {
        $('#hello').find('.content').addClass('moveInRight');
        $('#hello').find('.content').removeClass('moveOutRight');
    } else {
        $('#hello').find('.content').removeClass('moveInRight');
        $('#hello').find('.content').addClass('moveOutRight');
    }

// HOME PROJECTS
    if (scrollPosition > val_3) {
        $('#home-projects-header').addClass('moveInUp');
        $('#home-projects-header').removeClass('moveOutUp');
    } else {
        $('#home-projects-header').removeClass('moveInUp');
        $('#home-projects-header').addClass('moveOutUp');
    }

    if (scrollPosition > val_4) {
        $('#home-projects > .home-project').each(function (index) {
            setTimeout(() => {
                $(this).removeClass('moveOutUp');
                $(this).addClass('moveInUp');
            }, index * 100);
        });
    } else {
        $('#home-projects > .home-project').each(function (index) {
            $(this).addClass('moveOutUp');
            $(this).removeClass('moveInUp');
        });
    }

// SERVICES
    if (scrollPosition > val_5) {
        $('#services-header').addClass('moveInUp');
        $('#services-header').removeClass('moveOutUp');
    } else {
        $('#services-header').removeClass('moveInUp');
        $('#services-header').addClass('moveOutUp');
    }

// UX DESIGN
    if (scrollPosition > val_6) {
        $('#ux-design').find('.content').addClass('moveInLeft');
        $('#ux-design').find('.content').removeClass('moveOutLeft');
        $('.ux-images').addClass('moveInRight');
        $('.ux-images').removeClass('moveOutRight');
    } else {
        $('#ux-design').find('.content').removeClass('moveInLeft');
        $('#ux-design').find('.content').addClass('moveOutLeft');
        $('.ux-images').removeClass('moveInRight');
        $('.ux-images').addClass('moveOutRight');
    }

    if (scrollPosition > val_7_1 && scrollPosition < val_7_2) {

        const currentScrollPosition = window.scrollY;
        let direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up';

        let currentBottomUx2 = 20;
        let currentBottomUx3 = 60;

        if (direction === 'down') {
            currentBottomUx2 = 120;
            currentBottomUx3 = 240;
        } else {
            currentBottomUx2 = 20;
            currentBottomUx3 = 60;
        }

        document.getElementById('ux-2').style.bottom = `${currentBottomUx2}px`;
        document.getElementById('ux-3').style.bottom = `${currentBottomUx3}px`;

        lastScrollPosition = currentScrollPosition;
    }

// WEB DESIGN
    if (scrollPosition > val_8) {
        $('#web-design').find('.content').addClass('moveInRight');
        $('#web-design').find('.content').removeClass('moveOutRight');
        $('#web-design').find('.web-images').addClass('moveInLeft');
        $('#web-design').find('.web-images').removeClass('moveOutLeft');
    } else {
        $('#web-design').find('.content').removeClass('moveInRight');
        $('#web-design').find('.content').addClass('moveOutRight');
        $('#web-design').find('.web-images').removeClass('moveInLeft');
        $('#web-design').find('.web-images').addClass('moveOutLeft');
    }

    if (scrollPosition > val_8_1 && scrollPosition < val_8_2) {
        const currentScrollPosition = window.scrollY;
        let direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up';

        let currentBottom2 = 3;
        let currentBottom3 = 2;
        let currentBottom4 = 5;
        let currentBottom5 = -3;

        let currentLeft2 = -7;
        let currentLeft3 = -1;
        let currentLeft4 = -6;
        let currentLeft5 = -6;

        if (direction === 'down') {
            currentBottom2 = 12;
            currentBottom3 = 3;
            currentBottom4 = -5;
            currentBottom5 = -11;

            currentLeft2 = 8;
            currentLeft3 = 23;
            currentLeft4 = -9;
            currentLeft5 = 11;
        } else {
            currentBottom2 = 3;
            currentBottom3 = 2;
            currentBottom4 = 5;
            currentBottom5 = -3;
            currentLeft2 = -7;
            currentLeft3 = -1;
            currentLeft4 = -6;
            currentLeft5 = -6;
        }

        document.getElementById('web-2').style.bottom = `${currentBottom2}rem`;
        document.getElementById('web-3').style.bottom = `${currentBottom3}rem`;
        document.getElementById('web-4').style.bottom = `${currentBottom4}rem`;
        document.getElementById('web-5').style.bottom = `${currentBottom5}rem`;
        document.getElementById('web-2').style.left = `${currentLeft2}rem`;
        document.getElementById('web-3').style.left = `${currentLeft3}rem`;
        document.getElementById('web-4').style.left = `${currentLeft4}rem`;
        document.getElementById('web-5').style.left = `${currentLeft5}rem`;

        lastScrollPosition = currentScrollPosition;
    }

// MOBILE
    if (scrollPosition > val_9) {
        $('#mobile-design').find('.content').addClass('moveInRight');
        $('#mobile-design').find('.content').removeClass('moveOutRight');
        $('#mobile-design').find('.mobile-images').addClass('moveInLeft');
        $('#mobile-design').find('.mobile-images').removeClass('moveOutLeft');
    } else {
        $('#mobile-design').find('.content').removeClass('moveInRight');
        $('#mobile-design').find('.content').addClass('moveOutRight');
        $('#mobile-design').find('.mobile-images').removeClass('moveInLeft');
        $('#mobile-design').find('.mobile-images').addClass('moveOutLeft');
    }

    if (scrollPosition > val_9_1 && scrollPosition < val_9_2) {
        const currentScrollPosition = window.scrollY;
        let direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up';

        let currentBottom2 = 0;
        let currentBottom3 = 0;
        let currentBottom4 = 0;

        let currentLeft2 = -7;
        let currentLeft3 = -1;
        let currentLeft4 = -6;

        if (direction === 'down') {
            currentBottom2 = 4;
            currentBottom3 = 8;
            currentBottom4 = 12;

            currentLeft2 = -3.4;
            currentLeft3 = -9.2;
            currentLeft4 = -12.6;
        } else {
            currentBottom2 = 0;
            currentBottom3 = 0;
            currentBottom4 = 0;

            currentLeft2 = -.4;
            currentLeft3 = -.4;
            currentLeft4 = -.4;
        }

        document.getElementById('mobile-2').style.bottom = `${currentBottom2}rem`;
        document.getElementById('mobile-3').style.bottom = `${currentBottom3}rem`;
        document.getElementById('mobile-4').style.bottom = `${currentBottom4}rem`;
        document.getElementById('mobile-2').style.left = `${currentLeft2}rem`;
        document.getElementById('mobile-3').style.left = `${currentLeft3}rem`;
        document.getElementById('mobile-4').style.left = `${currentLeft4}rem`;

        lastScrollPosition = currentScrollPosition;
    }

// OTHER SERVICES
    if (scrollPosition > val_10) {
        $('#other-services').find('.content').addClass('moveInUp');
        $('#other-services').find('.content').removeClass('moveOutUp');
    } else {
        $('#other-services').find('.content').removeClass('moveInUp');
        $('#other-services').find('.content').addClass('moveOutUp');
    }

// HOW I DO
    if (scrollPosition > val_11) {
        $('#how-i-do-header').addClass('moveInUp');
        $('#how-i-do-header').removeClass('moveOutUp');
    } else {
        $('#how-i-do-header').removeClass('moveInUp');
        $('#how-i-do-header').addClass('moveOutUp');
    }

// HOW I DO CONTENT
    if (scrollPosition > val_12) {
        $('#how-i-do-content').addClass('moveInUp');
        $('#how-i-do-content').removeClass('moveOutUp');
    } else {
        $('#how-i-do-content').removeClass('moveInUp');
        $('#how-i-do-content').addClass('moveOutUp');
    }

// UX-SKILLS
    if (scrollPosition > val_13) {
        $('.ux-skills > .ux-skill').each(function (index) {
            setTimeout(() => {
                $(this).removeClass('moveOutUp');
                $(this).addClass('moveInUp');
            }, index * 100);
        });
    } else {
        $('.ux-skills > .ux-skill').each(function (index) {
            $(this).addClass('moveOutUp');
            $(this).removeClass('moveInUp');
        });
    }

// CRAFTING
    if (scrollPosition > val_14) {
        $('#crafting-icons').addClass('moveInRight');
        $('#crafting-icons').removeClass('moveOutRight');
        $('#crafting-content').addClass('moveInLeft');
        $('#crafting-content').removeClass('moveOutLeft');
    } else {
        $('#crafting-icons').removeClass('moveInRight');
        $('#crafting-icons').addClass('moveOutRight');
        $('#crafting-content').removeClass('moveInLeft');
        $('#crafting-content').addClass('moveOutLeft');
    }

// TECH STACK
    if (scrollPosition > val_15) {
        $('#tech-stack-text').addClass('moveInUp');
        $('#tech-stack-text').removeClass('moveOutUp');
    } else {
        $('#tech-stack-text').removeClass('moveInUp');
        $('#tech-stack-text').addClass('moveOutUp');
    }

// front-end
    if (scrollPosition > val_16) {
        $('#front-end').addClass('moveInLeft');
        $('#front-end').removeClass('moveOutLeft');
    } else {
        $('#front-end').removeClass('moveInLeft');
        $('#front-end').addClass('moveOutLeft');
    }

// back-end
    if (scrollPosition > val_17) {
        $('#back-end').addClass('moveInRight');
        $('#back-end').removeClass('moveOutRight');
    } else {
        $('#back-end').removeClass('moveInRight');
        $('#back-end').addClass('moveOutRight');
    }

// mobile
    if (scrollPosition > val_18) {
        $('#mobile').addClass('moveInUp');
        $('#mobile').removeClass('moveOutUp');
    } else {
        $('#mobile').removeClass('moveInUp');
        $('#mobile').addClass('moveOutUp');
    }

// collaboration-content
    if (scrollPosition > val_19) {
        $('#collaboration-content').addClass('moveInUp');
        $('#collaboration-content').removeClass('moveOutUp');
    } else {
        $('#collaboration-content').removeClass('moveInUp');
        $('#collaboration-content').addClass('moveOutUp');
    }

// collaboration-icons
    if (scrollPosition > val_20) {
        $('#collaboration-icons').addClass('moveInUp');
        $('#collaboration-icons').removeClass('moveOutUp');
    } else {
        $('#collaboration-icons').removeClass('moveInUp');
        $('#collaboration-icons').addClass('moveOutUp');
    }


});

