// SCROLL
$(window).scroll(function () {
    let scrollPosition = $(this).scrollTop();
    let windowHeight = Math.round($(window).height());
    let documentHeight = Math.round($(document).height());
    let gradientVal = Math.round(scrollPosition / (documentHeight - windowHeight) * 100);
    let body = document.body;

    body.style.background = 'linear-gradient(314deg,' +
        'rgb(53,4,86)' + gradientVal + '%,' +
        'rgb(7,3,52)' + 100 - gradientVal + '%)';

    if (scrollPosition > 100) {
        $('header').addClass('sticky-menu');
    } else {
        $('header').removeClass('sticky-menu');
    }

    if (scrollPosition > 400) {
        $('.bg-lines').hide();
        $('.bg-lines-reverse').hide();
    } else {
        $('.bg-lines').show();
        $('.bg-lines-reverse').show();
    }

});

//MAIN MENU
const menuButton = document.getElementById("bt-hamburger");
const navContainer = document.getElementById("mobil-menu");
let isNavOpen = false;

menuButton.addEventListener("click", function () {
    if (isNavOpen) {
        navContainer.classList.remove("open");
        isNavOpen = false;
    } else {
        navContainer.classList.add("open");
        isNavOpen = true;
    }
});

const images = [
    {
        projectName: "bridgebegin",
        images: ["01.jpg", "02.jpg", "03.gif", "04.jpg", "05.gif", "06.jpg", "07.jpg", "08.jpg", "09.gif", "010.jpg"],
        title: "Bridge Begin",
        web: "https://bridgebegin.com",
        ios: "https://apps.apple.com/us/app/bridge-begin/id1241733213?ls=1",
        android: "https://play.google.com/store/apps/details?id=air.bridgebegin",
        info: 'Mobile Educational Game'
    },
    {
        projectName: "kunden-rollsrein",
        images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.gif", "09.jpg", "010.jpg"],
        title: "Kunden Rollsrein",
        web: "https://kunden.rollsrein.de",
        ios: "",
        android: "",
        info: ' Mobile & Web App, ERP Project'
    },
    {
        projectName: "map-ordinals",
        images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "010.jpg", "011.jpg" ,"012.jpg", "013.jpg"],
        title: "Map Ordinals",
        web: "https://mapordinals.com/",
        ios: "",
        android: "",
        info: 'NFT Project'
    },
    {
        projectName: "prosecurus",
        images: ["1.png", "2.png", "3.gif", "4.png", "5.png", "6.png", "7.png"],
        title: "Prosecurus",
        web: "https://prosecurus.de/",
        ios: "",
        android: "",
        info: 'Web Site for Shredding Service'
    },
    {
        projectName: "tart",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
        title: "Tart",
        web: "https://technarts.com/offers/projects?tab=TELECOM",
        ios: "",
        android: "",
        info: 'Traffic Analysis & Reporting SaaS Project '
    },
    {
        projectName: "tech-sign",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.gif", "5.jpg", "7.jpg", "6.gif"],
        title: "Techsign",
        web: "https://www.techsign.com.tr/",
        ios: "",
        android: "",
        info: 'Biometric Signature & forensic tool for mobile devices'
    }
];


//DIALOGS
$(document).ready(function() { // Wait for the document to be ready

    // --- Ensure the 'images' variable is accessible in this scope ---
    // This code assumes 'images' is a global variable or defined before this script.
    // Example structure assumed for 'images':
    // const images = [
    //   { projectName: 'project-id-1', title: 'Project 1', info: 'Info...', images: ['img1.jpg', 'img2.png'], web: '...', ios: '...', android: '...' },
    //   { projectName: 'prosecurus', title: 'Prosecurus', info: '...', images: [...], web: '...', video: 'prosecurus_form.mp4' },
    //   ...
    // ];

    // --- Cache Modal Elements ---
    const modal = $('.modal');
    const modalTitle = modal.find('.title');
    const modalContent = modal.find('.content');
    const closeButton = modal.find('.button-close');
    const header = $('header');
    const body = $('body');

    // --- Function to Open Home Project Modal ---
    function openModal(figure) { // 'figure' is the clicked .home-project element (jQuery object)
        let projectId = figure.attr("id"); // Use the element's ID as the unique identifier

        // Find the corresponding project data in the 'images' array
        // Make sure the 'images' variable is available and populated!
        if (typeof images === 'undefined' || !Array.isArray(images)) {
            console.error("The 'images' variable is not defined or not an array.");
            return; // Exit if data source is missing
        }
        let project = images.find(p => p.projectName === projectId);

        // Handle cases where the project data isn't found for the given ID
        if (!project) {
            console.error("Project data not found for ID:", projectId);
            // Optionally, alert the user or handle this error gracefully
            // alert("Sorry, project details could not be loaded.");
            return; // Exit if project data is missing
        }

        // --- *** Set URL HASH *** ---
        if (projectId) {
            window.location.hash = projectId;
        }

        // --- Populate Modal ---
        modalContent.empty(); // Clear previous content
        modalTitle.empty();   // Clear previous title

        // Add the specific class for home projects styling
        modalContent.addClass('homeProject');

        // Add images from the project data
        if (project.images && Array.isArray(project.images)) {
            project.images.forEach((imageFile) => {
                // Construct image path assuming a structure like img/home-projects/projectId/imageFile
                let imagePath = 'img/home-projects/' + projectId + '/' + imageFile;
                let newImage = $('<img loading="lazy" decoding="async" src="' + imagePath + '">');
                modalContent.append(newImage);
            });
        } else {
            console.warn("No images found in project data for:", projectId);
        }

        // Populate title and info
        // Use text() to prevent potential HTML injection from data if not intended
        // Or keep .append() if project.title/info might contain safe HTML
        modalTitle.append(
            // Using <p> with text() is safer if title/info are plain text
            $('<p></p>').append($('<span></span>').text(project.title || 'Untitled Project')), // Add fallback
            $('<p class="text"></p>').text(project.info || '') // Add fallback
        );

        // Add buttons container
        var buttonsContainer = $('<div class="modal-buttons"></div>'); // Added a class for styling
        modalTitle.append(buttonsContainer); // Append container to title section

        // Conditionally add buttons
        // Prefer appending to the container now
        if (project.web) {
            buttonsContainer.append('<a class="button-fancy-web" target="_blank" href="' + project.web + '">Project´s Page</a>');
        }
        if (project.ios) {
            buttonsContainer.append('<a class="button-secondary" target="_blank" href="' + project.ios + '">Apple Store </a>');
        }
        if (project.android) {
            buttonsContainer.append('<a class="button-secondary" target="_blank" href="' + project.android + '">Google Play</a>');
        }

        // Special case for 'prosecurus' video
        // Consider adding a video property to the data instead of hardcoding the ID
        if (project.projectName === "prosecurus") {
            // Construct video path dynamically if possible, or use hardcoded path
            let videoPath = 'img/home-projects/prosecurus/prosecurus_form.mp4'; // Or project.videoPath
            modalContent.append(
                '<video class="videoContent" height="auto" controls autoplay muted loop playsinline>' + // Added muted, loop, playsinline
                '<source src="' + videoPath + '" type="video/mp4">' +
                'Your browser does not support the video tag.' +
                '</video>'
            );
        }
        // --- End Populate Modal ---

        // Show modal and update UI
        modal.removeClass('close').addClass('open');
        header.hide();
        body.css({ 'overflow-y': 'hidden', 'overflow-x': 'hidden' });
    }

    // --- Function to Close Home Project Modal ---
    function closeModal() {
        // --- *** REMOVE URL HASH *** ---
        history.pushState("", document.title, window.location.pathname + window.location.search);

        // Restore UI
        header.show('fast');
        body.css({ 'overflow-y': 'scroll', 'overflow-x': 'auto' });

        // Start close animation
        modal.addClass('close');

        // Clear content after starting animation (or immediately if preferred)
        // Ensures video stops, images removed etc.
        modalContent.empty().removeClass('homeProject'); // Also remove specific class
        modalTitle.empty();

        setTimeout(function() {
            modal.removeClass('open');
        }, 600); // Consistent delay
    }

    // --- EVENT LISTENERS ---

    // 1. Home Project Click Listener - Calls openModal
    $('.home-project').on('click', function() {
        const figure = $(this);
        if (figure.attr('id')) { // Check if ID exists
            openModal(figure); // Pass the clicked jQuery object
        } else {
            console.warn("Clicked .home-project element is missing an 'id' attribute.");
            // Optionally alert the user or simply don't open the modal
            // alert("Cannot load project details: Missing project identifier.");
        }
    });

    // 2. Close Button Listener (Attached only ONCE) - Calls closeModal
    closeButton.on('click', function() {
        if (modal.hasClass('open')) { // Only close if it's actually open
            closeModal();
        }
    });

    // --- Check Hash on Initial Page Load ---
    function checkHashAndOpenModal() {
        if (window.location.hash) {
            let targetProjectId = window.location.hash.substring(1); // Get ID from hash

            // Find the specific .home-project element by its ID
            let targetFigure = $('#' + targetProjectId + '.home-project');

            if (targetFigure.length) { // Check if the element exists on the page
                // Found the element, open its modal
                setTimeout(() => {
                    openModal(targetFigure);
                }, 100); // Small delay
            } else {
                // Element with that ID wasn't found on this page
                console.warn("Element with ID corresponding to hash not found:", targetProjectId);
                // Optionally clear the hash if it's invalid for this page
                // history.replaceState("", document.title, window.location.pathname + window.location.search);
            }
        }
    }

    // Run the hash check function once the page is ready
    checkHashAndOpenModal();

    // Optional: Handle browser back/forward button hash changes (same as before)
    // $(window).on('hashchange', function() { ... });

}); // End document ready

