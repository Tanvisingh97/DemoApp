function deleteTodo(id){
    $.ajax{
        async:false,
        url:"/todo/"+id,
        method:'POST',
        success:function(res){
            // redirect and toast
        }
    }
}
function sendAjax(_url,_method,_data){
    $.ajax{
            async:false,
            url:_url,
            method:_method,
            data:_data,
            success:function(res){
                // redirect and toast
            }
        }
}
function createTodo(e){
e.preventDefault();
    let title = $("#title").val();
    let desc = $("#desc").val();
    let deadline = $("#deadline").val();
    let formData = {title,desc,deadline}
    console.table(formData);
//    sendAjax("/todo/new","POST",formData);

}