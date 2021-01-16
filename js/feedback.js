function sendFeedback() {
    var feedback = $('#feedbackComment').val();

    if (!feedback || feedback.trim() === '') {
        toastr.warning('Please Write A Feedback', 'Warning');
    }
    else {
        toastr.success('Feedback Sent', 'Success');
    }
}