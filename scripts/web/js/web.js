$(document).ready(function () {
    $('#smtxtFullName').hide();
    $('#smtxtEmail').hide();
    $('#smtxtPhoneNumber').hide();
    $('#smtxtSubject').hide();
    $('#smtxtMessage').hide();
})

function ValidateForm() {
    let valid = true;

    //$('#btnContactForm:input[type="text"]').each(function () {
    //    console.log($(this))
    //    if (this.value == "") {
    //        $('#btnContactForm small').show();
    //        $('.SendBtn').prop('disabled', true);
    //        isValid = false;
    //    }
    //    else
    //    {
    //        $('#btnContactForm small').hide();
    //        $('.SendBtn').prop('disabled',false);
    //        isValid = true;
    //    }
    //});
    if ($('#txtFullName').val() == "") {
        $('#smtxtFullName').show();
       // $('.SendBtn').prop('disabled', false);
        valid = false;
    } else {
        $('#smtxtFullName').hide();
        //valid = true;
    }
    if ($('#txtEmail').val() == "") {
        $('#smtxtEmail').show();
        //$('.SendBtn').prop('disabled', true);
        valid = false;
    } else {
        if (validateCaseSensitiveEmail($("#txtEmail").val())) {
            $('#smtxtEmail').hide();
            //valid = true;
        } else {
            valid = false;
            $('#smtxtEmail').show();
            $("#smtxtEmail").html("Please enter valid Email");
        }        
    }
    if ($('#txtPhoneNumber').val() == "") {
        $('#smtxtPhoneNumber').show();
        //$('.SendBtn').prop('disabled', true);
        valid = false;
    }
    else {
        $('#smtxtPhoneNumber').hide();
        //valid = true;
    }
    if ($('#txtSubject').val() == "") {
        $('#smtxtSubject').show();
        //$('.SendBtn').prop('disabled', true);
        valid = false;
    }
    else {
        $('#smtxtSubject').hide();
        //valid = true;
    }
    if ($('#txtMessage').val() == "") {
        $('#smtxtMessage').show();
        //$('.SendBtn').prop('disabled', true);
        valid = false;
    } else {
        $('#smtxtMessage').hide();
        //valid = true;
    }
    //if (valid) {
    //    $('.SendBtn').prop('disabled', false);
    //}
    return valid;

}






$('.SendBtn').click(function () {
    let validationValue = ValidateForm()
    console.log(validationValue)
    let name = $('#txtFullName').val();
    let email = $('#txtEmail').val();
    let phone = $('#txtPhoneNumber').val();
    let subject = $('#txtSubject').val();
    let message = $('#txtMessage').val();
    let RequestVerificationToken = $("input[name='__RequestVerificationToken']").val();
    if (ValidateForm()) {
        $('#btnContactForm').prop('disabled', true);
        $.ajax({
            url: 'Web/ContactUs',
            type: 'POST',
            dataType: 'json',
            data: { FullName: name, PhoneNumber: phone, Email: email, Subject: subject, Message: message, __RequestVerificationToken: RequestVerificationToken },
            success: function (resp) {
                //$.getScript('/js/sweetalert2a11.js', function () {
                //    swal("Submmited", `${resp.message}`).then((rssult) => {
                //        location.reload();
                //    });
                //});
                $('#btnContactForm').prop('disabled', false);
                $.getScript('/js/sweetalert2a11.js', function () {
                    Swal.fire({
                        title: 'Submitted',
                        text: resp.message,
                        icon: 'success',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
                });
                ResetForm();
            },
            error: function (err) {

            }
        });
    }
});

function ResetForm() {
    $('#txtFullName').val("");
    $('#txtEmail').val("");
    $('#txtPhoneNumber').val("");
    $('#txtSubject').val("");
    $('#txtMessage').val("");

}




function validateCaseSensitiveEmail(email) {

    var reg = new RegExp("[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}");
    if (reg.test(email)) {
        return true;
    }
    else {
        return false;
    }

}