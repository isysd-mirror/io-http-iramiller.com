+++
weight = 3
date = "2015-11-25T23:11:06-05:00"
draft = false
title = "Contact"

anchor = "Contact"
type = "siteMain"
+++

<form action='https://crm.zoho.com/crm/WebToLeadForm'
      name=WebToLeads1729302000000106047 method='POST'
      onSubmit='return checkMandatory()'
      accept-charset='UTF-8'>

  <!-- Required internal fields. -->
  <input type='text' style='display:none;' name='xnQsjsdp' value='d3b1137b095581ac2be866e9362c6bfc11145c48a5400dfa6fa30f2d967cfd47'/>
  <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
  <input type='text' style='display:none;' name='xmIwtLD' value='be71074d0bfc53517421f4618a1d4dd44a80f2338d5ffacd25da830cd36ba5bb'/>
  <input type='text' style='display:none;'  name='actionType' value='TGVhZHM='/>

  <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;deginner.com' />
   <!-- Required internal fields. -->

  <div class="form-row">
    <label for="name">Name
      <span class="form-error" id="error-name">Please specify your name</span>
    </label>
    <input type="text" maxlength="120" name="name" id="name">
  </div>

  <div class="form-row">
    <label for="email">Email
      <span class="form-error" id="error-email">
        Please specify your email so we can communicate with you
      </span>
    </label>
    <input type="text" maxlength="100" name="email" id="email">
  </div>

  <div class="form-row">
    <label for="message">Message
      <span class="form-error" id="error-message">
        We will need some message to know what you are after
      </span>
    </label>
    <textarea name="message" id="message" cols="40" rows="10"></textarea>
  </div>

  <div class="form-align">
    <input type="submit" value="Send">
    <span class="contact-info">You will receive a copy of this contact
request.</span>
  </div>

  <script>
    var fields = ['name', 'email', 'message'];
    var basicEmail = /^[^ @]+@([^ @]+){2,}\.([^ @]+){2,}$/;

    function checkMandatory() {
      /* Hide any errors. */
      var allErrors = document.getElementsByClassName('form-error');
      for (var i = 0; i < allErrors.length; i++) {
        allErrors[i].style.display = 'none';
      }

      /* Validate the form. */
      var form = document.forms['WebToLeads1729302000000106047'];
      for (var i = 0; i < fields.length; i++) {
        var fieldObj = form[fields[i]];
        if (fieldObj) {
          var failed = fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0;
          if (!failed && fields[i] === 'email') {
            failed = !basicEmail.test(fieldObj.value);
          }

          if (failed) {
            fieldObj.focus();
            var err = document.getElementById('error-' + fields[i]);
            if (err) {
              err.style.display = 'block';
            }
            return false;
          }
        }
      }
    }
  </script>
</form>
