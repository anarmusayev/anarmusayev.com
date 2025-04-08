$(document).ready(function() { // Wait for the document to be ready

    // --- Cache Modal Elements ---
    const modal = $('.modal');
    const modalTitle = modal.find('.title');
    const modalContent = modal.find('.content');
    const closeButton = modal.find('.button-close');
    const header = $('header');
    const body = $('body');

    // --- Function to Open '.app' Modal ---
    function openModal(figure) { // 'figure' is the clicked .app element (jQuery object)
        // --- Get Data Attributes ---
        let projectId = figure.data('project-id'); // *** Get the project ID ***
        let numOfImages = figure.data('images');   // Get the number of images

        // --- Validate Data Attributes ---
        if (!projectId) {
            console.error("Clicked .app element is missing 'data-project-id'. Cannot create shareable link.");
            return; // Exit if ID is missing
        }
        if (typeof numOfImages !== 'number' || numOfImages <= 0) {
            console.error("Invalid or missing 'data-images' attribute for project:", projectId);
            return; // Exit if image count is invalid
        }

        // --- Get Base Image Info ---
        let figcaption = figure.find('figcaption');
        let figcaptionContent = figcaption.html(); // Get caption HTML
        let thumbImageSrc = figure.find('img').attr('src'); // Get thumbnail src

        if (!thumbImageSrc) {
            console.error("Missing image thumbnail src for project:", projectId);
            return; // Exit if thumbnail is missing
        }

        // --- *** Set URL HASH *** ---
        window.location.hash = projectId; // Use data-project-id for the hash

        // --- Populate Modal ---
        modalContent.empty(); // Clear previous content
        modalTitle.empty();   // Clear previous title

        // Add the specific class for app projects styling
        modalContent.addClass('application');

        // Add images based on naming convention and data-images count
        let baseImagePath = '';
        let extension = '';
        const tmbMarker = '_tmb.'; // Marker to find before the extension

        const tmbIndex = thumbImageSrc.lastIndexOf(tmbMarker);
        if (tmbIndex !== -1) {
            baseImagePath = thumbImageSrc.substring(0, tmbIndex);
            extension = thumbImageSrc.substring(tmbIndex + tmbMarker.length -1); // Keep the dot
        } else {
            console.error("Thumbnail src does not contain '_tmb.' marker:", thumbImageSrc);
            // Fallback or exit? For now, just log error and continue without images.
            // return;
        }

        if (baseImagePath) { // Only loop if we could parse the base path
            for (let i = 1; i <= numOfImages; i++) {
                // Construct full image path: base-i_full.ext
                let fullImageSrc = baseImagePath + '-' + i + '_full' + extension;
                let newImage = $('<img loading="lazy" decoding="async" src="' + fullImageSrc + '">');
                // Add error handling for broken images
                newImage.on('error', function() {
                    console.warn("Failed to load image:", fullImageSrc);
                    // Optionally replace with a placeholder or remove
                    // $(this).replaceWith('<p>Image not available</p>');
                    $(this).remove();
                });
                modalContent.append(newImage);
            }
        }

        // Populate title (using the original figcaption HTML)
        modalTitle.append(figcaptionContent); // Use the cached variable 'modalTitle'
        // --- End Populate Modal ---


        // Show modal and update UI

        modal.removeClass('close').addClass('open');
        header.hide();
        body.css({ 'overflow-y': 'hidden', 'overflow-x': 'hidden' });
    }

    // --- Function to Close '.app' Modal ---
    function closeModal() {
        // --- *** REMOVE URL HASH *** ---
        history.pushState("", document.title, window.location.pathname + window.location.search);

        // Restore UI
        header.show('fast');
        body.css({ 'overflow-y': 'scroll', 'overflow-x': 'auto' });

        // Start close animation
        modal.addClass('close');

        // Clear content after starting animation
        modalContent.empty().removeClass('application'); // Remove specific class
        modalTitle.empty();

        setTimeout(function() {
            modal.removeClass('open');
        }, 600); // Consistent delay
    }

    // --- EVENT LISTENERS ---

    // 1. '.app' Figure Click Listener - Calls openModal
    $('.app').on('click', function() {
        const figure = $(this);
        // Check for required data attributes before opening
        if (figure.data('project-id') && typeof figure.data('images') === 'number' && figure.data('images') > 0) {
            openModal(figure); // Pass the clicked jQuery object
        } else {
            console.warn(".app element is missing 'data-project-id' or has invalid 'data-images'.");
            // alert("Cannot load project details: Missing required information.");
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

            // Find the specific .app figure by its data-project-id
            // Use quotes around the attribute value in the selector!
            let targetFigure = $('figure.app[data-project-id="' + targetProjectId + '"]');

            if (targetFigure.length) { // Check if the element exists
                // Also check if it has the required data-images attribute
                if (typeof targetFigure.data('images') === 'number' && targetFigure.data('images') > 0) {
                    // Found the element and it has image data, open its modal
                    setTimeout(() => {
                        openModal(targetFigure);
                    }, 100); // Small delay
                } else {
                    console.warn("Element found for hash, but missing valid 'data-images':", targetProjectId);
                    // history.replaceState("", document.title, window.location.pathname + window.location.search); // Optional: Clear invalid hash
                }
            } else {
                // Element with that ID/class wasn't found on this page
                console.warn("Element '.app' with data-project-id corresponding to hash not found:", targetProjectId);
            }
        }
    }

    // Run the hash check function once the page is ready
    checkHashAndOpenModal();

    // Optional: Handle browser back/forward button hash changes (same as before)
    // $(window).on('hashchange', function() { ... });

}); // End document ready