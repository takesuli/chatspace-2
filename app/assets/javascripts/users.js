$(function() {
  $(document).on('turbolinks:load', function() {
        // ...
      


    var name_list = $("#user-search-result");
    var member_list =$("#user-member-list");

    function appendName(user) {
    var html = `<div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                    </div>`
        name_list.append(html);
    }

    function appendMember(name,id) {
      var html = `<div class="chat-group-user clearfix">
                        <input name="group[user_ids][]" type="hidden" value="${id}">
                        <p class="chat-group-user__name">${name}</p>
                        <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove" data-user-id="${id}" data-user-name="${name}">削除</a>
                      </div>`
                      
          member_list.append(html);
      }

      $("#user-search-field").on ("keyup",  function() {
        var input = $("#user-search-field").val();
        
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input },
          dataType: 'json'
        })

        .done(function(users) {
          $("#user-search-result").empty();
          if (users.length !== 0) {
            users.forEach(function(user){
              appendName(user);
            });
          }
          else {
            $("#user-search-result").append("一致するグループはありません");
          }
        })
        .fail(function() {
          alert("error");
        });
      });

      $('#user-search-result').on ('click', '.chat-group-user__btn--add' ,function(e){
        var name = $(this).data('user-name');
        var id =$(this).data('user-id');
        // if appendMember
        appendMember(name,id);
      })

      $('#user-search-result').on ('click', '.chat-group-user__btn--add' ,function(e){
        $(this).parent().remove(); 
      })


      $('#chat-group-user')
  });

})
