function sendFeedback() {
    var feedback = $('#feedbackComment').val();

    if (!feedback || feedback.trim() === '') {
        toastr.warning('Please Write A Feedback Before You Can Submit ', 'Warning');
    }
    else {
        console.log("Feedback success!");
    }
}