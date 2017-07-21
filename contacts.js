  $(document).ready(function() {
	  $('.existingIssue').hide();
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            warning: 'glyphicon glyphicon-warning-sign',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                        max:30,
                        message: 'Firstname must be more than 2 characters long'
                    },
                        notEmpty: {
                        message: 'Please provide your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 1,
                    },
                    notEmpty: {
                        message: 'Please provide your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your email address'
                    },
                    emailAddress: {
                        message: 'Please provide a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please provide a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please provide your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please provide your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            subject: {
                validators: {
                    notEmpty: {
                        message: 'Please specify the subject'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please provide vaild zip code'
                    }
                }
            },
            issueId: {
                validators: {
                    notEmpty: {
                        message: 'Please provide Issue Id'
                    }
                    
                }
            },
         
            secText: {
                validators: {
                    notEmpty: {
                        message: 'Please enter the security code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please provide issue description'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
    
    $(function() {
        $('input[name="category"]').on('click', function() {
            if ($(this).val() == 'existing') {
                $('.existingIssue').show();
            }
            else {
                $('.existingIssue').hide();
            }
        });
    });
    
   
});

