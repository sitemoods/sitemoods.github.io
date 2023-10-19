function openModal(event) {
    var modalId = event.currentTarget.getAttribute("data-modal");
    var modalcontent = document.getElementById(modalId);

    modalcontent.style.display = "block";
    document.body.style.overflow = "hidden";

    // Define a function to close the modal when the content is clicked
    function closeModalOnClick() {
        modalcontent.style.display = "none";
        document.body.style.overflow = "auto";

        // Remove the event listener after use
        modalcontent.removeEventListener("click", closeModalOnClick);
    }

    // Add an event listener to the modal content to close it
    modalcontent.addEventListener("click", closeModalOnClick);
}

document.addEventListener("DOMContentLoaded", function () {
    var modalClickables = document.querySelectorAll(".modal-clickable");
    modalClickables.forEach(function (element) {
        element.addEventListener("click", openModal);
        element.addEventListener("touchstart", openModal);
    });
});

