(function() {
  emailjs.init('MBI9URL4q5hcGdRe4');
})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var data = {
        service_id: 'service_2kh8cvo',
        template_id: 'template_c06ypqi',
        user_id: 'MBI9URL4q5hcGdRe4',
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });

      // generate a five digit number for the contact_number variable
      // this.contact_number.value = Math.random() * 100000 | 0;
      // // these IDs from the previous steps
      // emailjs.send ("service_2kh8cvo", "template_c06ypqi")
      // // emailjs.sendForm('service_2kh8cvo', 'contact_form', this)
      //     .then(function() {
      //         console.log('SUCCESS!');
      //     }, function(error) {
      //         console.log('FAILED...', error);
      //     });
  });
}