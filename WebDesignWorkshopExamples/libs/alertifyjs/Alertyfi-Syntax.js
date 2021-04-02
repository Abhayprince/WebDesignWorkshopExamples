
//------------------ Custom Browser Dialog ---------------

if (!alertify.myAlert) {
    //define a new dialog
    alertify.dialog('myAlert', function () {
        return {
            main: function (message) {
                this.message = message;
            },
            setup: function () {
                return {
                    buttons: [{ text: "cool!", key: 27/*Esc*/ }],
                    focus: { element: 0 }
                };
            },
            prepare: function () {
                this.setContent(this.message);
            }
        }
    });
}
//launch it.
alertify.myAlert("Browser dialogs made easy!");

//----------------------------------------------------------------------------------//

//----------------- Default Dialogs -------------------------------------------

alertify
  .alert("This is an alert dialog.", function () {
      alertify.message('OK');
  });

//---------

alertify.confirm("This is a confirm dialog.",
  function () {
      alertify.success('Ok');
  },
  function () {
      alertify.error('Cancel');
  });

//-----------

alertify.prompt("This is a prompt dialog.", "Default value",
  function (evt, value) {
      alertify.success('Ok: ' + value);
  },
  function () {
      alertify.error('Cancel');
  })
;

//-----------------------------------------------------------------------------//

//-------------------- Default Notifcations ---------------------------------

// success notification
// Shorthand for:
// alertify.notify( message, 'success', [wait, callback]);
alertify.success('Success message');

//---------

// error notification
// Shorthand for:
// alertify.notify( message, 'error', [wait, callback]);
alertify.error('Error message');

//---------

// warning notification
// Shorthand for:
// alertify.notify( message, 'warning', [wait, callback]);
alertify.warning('Warning message');

//------------

// default notification
// Shorthand for:
// alertify.notify( message, [type, wait, callback]);
alertify.message('Normal message');

//--------------------------------------------------------------------------