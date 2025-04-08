$(document).ready(function() { // Wait for the document to be ready

    // --- Cache Modal Elements (do this once for efficiency) ---
    const modal = $('.modal');
    const modalTitle = modal.find('.title');
    const modalContent = modal.find('.content');
    const closeButton = modal.find('.button-close');
    const header = $('header'); // Cache header selector
    const body = $('body'); // Cache body selector

    // --- Function to Open Modal (reusable logic + hash update) ---
    function openModal(figure) {
        // Get data from the clicked figure
        let projectId = figure.data('project-id'); // *** Get the project ID from data attribute ***
        let classOf = figure.attr("class");
        let figcaption = figure.find('figcaption');
        // Get raw HTML content for the title, as original code did
        let figcaptionContent = figcaption.html();
        let imageSrc = figure.find('img').attr('src');

        // Determine full image URL
        let fullImage = imageSrc.replace('_tmb', '_full');
        if (imageSrc.indexOf('_tmb') == -1) {
            // Added check for _big as in original code
            fullImage = imageSrc.replace('_big', '_full');
        }
        let newImage = $('<img loading="lazy" decoding="async" src="' + fullImage + '">');

        // Populate modal content
        modalContent.empty().append(newImage); // Chain empty() and append()
        modalTitle.empty().append(figcaptionContent); // Use the extracted figcaption HTML

        // Apply specific content class based on figure class
        modalContent.removeClass('wideContent webContent'); // Reset classes first
        if (classOf == 'big' ||
            classOf == 'horizontal' ||
            classOf == 'poster' ||
            classOf == 'corp' ||
            classOf == 'corp-short') {
            modalContent.addClass('wideContent');
        } else if (classOf == 'web') {
            modalContent.addClass('webContent');
        }
        // No else needed if default is no extra class

        // --- *** CHANGE URL HASH *** ---
        if (projectId) {
            // This adds an entry to browser history, allowing back button to close modal
            window.location.hash = projectId;
        }

        // Show modal and update UI
        modal.removeClass('close').addClass('open');
        header.hide(); // Use cached selector
        body.css({ 'overflow-y': 'hidden', 'overflow-x': 'hidden' }); // Use cached selector
    }

    // --- Function to Close Modal (reusable logic + hash removal) ---
    function closeModal() {
        // --- *** REMOVE URL HASH *** ---
        // Use pushState to clear the hash without adding '#' to history
        history.pushState("", document.title, window.location.pathname + window.location.search);

        // Restore UI elements
        header.show('fast'); // Use cached selector
        body.css({ 'overflow-y': 'scroll', 'overflow-x': 'auto' }); // Restore scroll, use 'auto' for x if preferred

        // Start close animation
        modal.addClass('close');
        setTimeout(function() {
            modal.removeClass('open');
            // Optional: Clear modal content after closing animation if needed
            // modalContent.empty();
            // modalTitle.empty();
        }, 600); // Consistent delay
    }

    // --- EVENT LISTENERS ---

    // 1. Figure Click Listener - Calls openModal
    $('figure').on('click', function() {
        // Ensure the figure has a data-project-id before trying to open
        if ($(this).data('project-id')) {
            openModal($(this)); // Pass the clicked jQuery figure object
        } else {
            // Optional: Handle figures without an ID differently if needed
            console.warn("Clicked figure is missing 'data-project-id'. Cannot generate shareable link.");
            // You could still open the modal without setting the hash:
            // openModalWithoutHash($(this)); // (You'd need to create this variation)
            // Or just do nothing / show an error
        }
    });

    // 2. Close Button Listener (Attached only ONCE) - Calls closeModal
    closeButton.on('click', function() {
        closeModal();
    });

    // --- Check Hash on Initial Page Load ---
    function checkHashAndOpenModal() {
        if (window.location.hash) {
            // Remove the '#' character from the hash
            let targetProjectId = window.location.hash.substring(1);

            // Find the figure element with the matching data-project-id
            // Use quotes around the attribute value in the selector!
            let targetFigure = $('figure[data-project-id="' + targetProjectId + '"]');

            if (targetFigure.length) { // Check if a matching figure was found
                // Open the modal for the found figure
                // Use a small delay to help ensure the page is fully rendered
                // and avoid potential race conditions.
                setTimeout(() => {
                    openModal(targetFigure);
                }, 100); // 100ms delay
            } else {
                console.warn("No project figure found for hash:", targetProjectId);
                // Optional: Clear the invalid hash from the URL
                // history.replaceState("", document.title, window.location.pathname + window.location.search);
            }
        }
    }

    // Run the check function once the page is ready
    checkHashAndOpenModal();

    // Optional: Handle browser back/forward button hash changes
    // $(window).on('hashchange', function() {
    //     // If hash becomes empty (back button likely pressed after modal open)
    //     if (!window.location.hash && modal.hasClass('open')) {
    //         closeModal();
    //     }
    //     // If hash appears and modal isn't open (forward button?)
    //     else if (window.location.hash && !modal.hasClass('open')) {
    //         checkHashAndOpenModal(); // Re-check which modal to open
    //     }
    // });

}); // End document ready