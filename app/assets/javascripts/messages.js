$(function(){
  function buildGroup(message){
    var image = message.image ? `<img src="${message.image}">` : ""; 
    
    var html = `<div  class="main_contents__chatspace__head">
                  <div class="main_contents__chatspace__head__user_name">
                    ${message.user_name}
                  </div>

                  <div class="main_contents__chatspace__head__time">
                    ${message.created_at}
                  </div>
                </div>

                <div class="main_contents__chatspace__text">
                  <p class="main_contents__chatspace__text">
                    ${message.content}
                  </p>
                    ${image}
                </div>`
    
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();

    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildGroup(message);
      $(".main_contents__chatspace").append(html)
    
      $('.main_contents__form__submit').attr('disabled', false);
      $('.main_contents__chatspace').animate({ scrollTop: $('.main_contents__chatspace')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  })
});

