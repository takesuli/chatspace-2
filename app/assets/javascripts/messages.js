$(function(){
  $(document).on('turbolinks:load', function() {
    function buildGroup(message){
      var text = message.content ? `${message.content}` : " " ; 
      var image = message.image ? `<img class="main_contents_box" src="${message.image}">`: " ";
      var html = `<div class="main_contents_box" data-message-id="${message.id}">
                    <div class="main_contents__chatspace__head">
                      <div class="main_contents__chatspace__head__user_name">
                        ${message.user_name}
                      </div>
                      <div class="main_contents__chatspace__head__time">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="main_contents__chatspace__text">
                      <p class="main_contents__chatspace__text">
                        ${text}
                      </p>
                        ${image}
                    </div>
                  </div>`
    
      return html;
    };
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
        $('#new_message')[0].reset();
      })
      .fail(function(){
        alert('error');
      })
    })

    var reloadMessages = function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){  
        message_id = $(".main_contents_box:last").data('message-id');
        $.ajax({
          url: 'api/messages#index {:format=>"json"}',
          type: 'get',
          dataType: 'json',
          data: {id: message_id}
        })

        .done(function(messages) {
          var insertHTML = '';
          messages.forEach(function(message){
            insertHTML = buildGroup(message);
            $('.main_contents__chatspace').append(insertHTML);
            $('.main_contents__chatspace').animate({scrollTop: $('.main_contents__chatspace')[0].scrollHeight}, 'fast');
            $('#new_message')[0].reset();
          });
        })
        .fail(function() {
          alert('error');      
        });
      }
    }
    setInterval(reloadMessages, 5000);
  });
});

    
  

