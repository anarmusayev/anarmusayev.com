$(document).ready(function() { // Wait for the document to be ready

    // --- Cache Modal Elements (do this once for efficiency) ---
    const modal = $('.modal');
    const modalTitle = modal.find('.title');
    const modalContent = modal.find('.content');
    const closeButton = modal.find('.button-close');
    const header = $('header'); // Cache header selector
    const body = $('body'); // Cache body selector

    // --- Function to Open VIDEO Modal (reusable logic + hash update) ---
    function openModal(figure) {
        // Get data from the clicked figure
        let projectId = figure.data('project-id'); // *** Get the project ID from data attribute ***
        let figcaption = figure.find('figcaption');
        // Get raw HTML content for the title, as original code did
        let figcaptionContent = figcaption.html();
        let imageSrc = figure.find('img').attr('src'); // Get image src to derive video src

        // --- Video Specific Logic ---
        // Derive video source (assuming specific naming convention)
        let videoSrc = imageSrc.replace('_tmb.webp', '.mp4'); // Specific to this modal type

        // Create video player element
        let videoPlayer = $(
            '<video controls autoplay muted loop playsinline>' + // Added muted, loop, playsinline for better UX
            '<source src="' + videoSrc + '" type="video/mp4">' +
            'Your browser does not support the video tag.' +
            '</video>'
        );
        // --- End Video Specific Logic ---

        // Populate modal content
        modalContent.empty().append(videoPlayer); // Append video player
        modalTitle.empty().append(figcaptionContent); // Use the extracted figcaption HTML

        // --- *** CHANGE URL HASH *** ---
        if (projectId) {
            // This adds an entry to browser history, allowing back button to close modal
            window.location.hash = projectId;
        }

        // Show modal and update UI
        modalContent.addClass('wideContent'); // Always add wideContent for video modals
        modal.removeClass('close').addClass('open');
        header.hide(); // Use cached selector
        body.css({ 'overflow-y': 'hidden', 'overflow-x': 'hidden' }); // Use cached selector
    }

    // --- Function to Close VIDEO Modal (reusable logic + hash removal) ---
    function closeModal() {
        // --- *** REMOVE URL HASH *** ---
        // Use pushState to clear the hash without adding '#' to history
        history.pushState("", document.title, window.location.pathname + window.location.search);

        // Restore UI elements
        header.show('fast'); // Use cached selector
        body.css({ 'overflow-y': 'scroll', 'overflow-x': 'auto' }); // Restore scroll

        // Start close animation
        modal.addClass('close');

        // --- Video Specific: Stop video by emptying content ---
        // Empty content immediately or after delay based on visual needs
        // Emptying immediately ensures video sound stops promptly.
        modalContent.empty();
        // ---

        setTimeout(function() {
            modal.removeClass('open');
            // Content is already empty, no need to empty again here
        }, 600); // Consistent delay
    }

    // --- EVENT LISTENERS ---

    // 1. Figure Click Listener - Calls openModal
    // IMPORTANT: This assumes figures meant to open this *video* modal have the correct
    // image source format (_tmb.webp) and a corresponding .mp4 video.
    // You might need to add a specific class (e.g., class="video-figure") to these figures
    // and change the selector to $('figure.video-figure').on('click', ...)
    // if you have different types of figures on the same page.

    $('figure').on('click', function() { // Consider making this selector more specific if needed
        const figure = $(this);
        // Check if it has a project ID AND potentially if it's meant to be a video
        if (figure.data('project-id')) {
            // Simple check if image source matches expected pattern for video
            let imgSrc = figure.find('img').attr('src');
            if (imgSrc && imgSrc.includes('_tmb.webp')) {
                openModal(figure); // Pass the clicked jQuery figure object
            } else {
                // This figure might be for a different modal type (e.g., image)
                // console.log("Figure clicked, but not detected as video type.");
                // If you have other modal scripts, they might handle this click instead.
            }
        } else {
            console.warn("Clicked figure is missing 'data-project-id'. Cannot generate shareable link.");
        }
    });

    // 2. Close Button Listener (Attached only ONCE) - Calls closeModal
    closeButton.on('click', function() {
        // Check if the modal is actually open before trying to close
        // This prevents issues if the button is somehow clicked when modal is hidden
        if (modal.hasClass('open')) {
            closeModal();
        }
    });

    // --- Check Hash on Initial Page Load ---
    function checkHashAndOpenModal() {
        if (window.location.hash) {
            // Remove the '#' character from the hash
            let targetProjectId = window.location.hash.substring(1);

            // Find the figure element with the matching data-project-id
            let targetFigure = $('figure[data-project-id="' + targetProjectId + '"]');

            if (targetFigure.length) { // Check if a matching figure was found
                // *** Check if the found figure is intended for this VIDEO modal ***
                let imgSrc = targetFigure.find('img').attr('src');
                if (imgSrc && imgSrc.includes('_tmb.webp')) {
                    // It has the ID and looks like a video figure, open it
                    setTimeout(() => {
                        openModal(targetFigure);
                    }, 100); // Small delay
                } else {
                    // Found a figure with the ID, but it might be for a different modal type
                    console.warn("Figure found for hash, but doesn't seem to be video type:", targetProjectId);
                    // Clear the hash if it's invalid for this context?
                    // history.replaceState("", document.title, window.location.pathname + window.location.search);
                }
            } else {
                console.warn("No project figure found for hash:", targetProjectId);
            }
        }
    }

    // Run the check function once the page is ready
    checkHashAndOpenModal();

    // Optional: Handle browser back/forward button hash changes (same as before)
    // $(window).on('hashchange', function() { ... });

}); // End document ready