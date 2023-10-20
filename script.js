function openModal(event) {
    var modalId = event.currentTarget.getAttribute("data-modal");
    var modalcontent = document.getElementById(modalId);

    modalcontent.style.display = "block";
    document.body.style.overflow = "hidden";
    // Find and play the video inside the modal
    var video = modalcontent.querySelector("video");
    if (video) {
        video.play();
    }

    // Define a function to close the modal when the content is clicked
    function closeModalOnClick() {
        modalcontent.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";

        // Remove the event listener after use
        modalcontent.removeEventListener("click", closeModalOnClick);
        
    }

    // Add an event listener to the modal content to close it
    modalcontent.addEventListener("click", closeModalOnClick);


}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflowX = "hidden";
    var modalClickables = document.querySelectorAll(".modal-clickable");
    modalClickables.forEach(function (element) {
        element.addEventListener("click", openModal);
        element.addEventListener("touchstart", openModal);
    });
});

