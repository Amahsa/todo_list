
if (localStorage.getItem('tasks') == null)
{
  tasks_array = [];
}
else{
  tasks_array = JSON.parse(localStorage.getItem('tasks')) 
  past_tasks = JSON.stringify(tasks_array)
  localStorage.setItem('tasks',past_tasks);
  tasks_array.forEach(add_to_list)
}
//-----------------------------------------------------------------------
//     add task to list
$('.btn-primary').on('click',function(event)
{
  input_task = $('#task').val()
  if (input_task)
  {
    event.preventDefault();

    input_task = $('#task').val()

    tasks_array.push(input_task);
    localStorage.setItem('tasks',JSON.stringify(tasks_array));

    add_to_list(input_task);

    $('#task').val('');
  }
  
})
//--------------------------------------------------------------------------
//     remove all tasks
$('.clear-tasks').on('click',function()
{
  if (confirm("آیا مطمئنید که میخواهید همه ی تسک ها را پاک کنید؟"))
    {
      $('ul').empty();
      tasks_array = [];
      // localStorage.setItem('tasks',JSON.stringify(tasks_array));
      localStorage.clear();
    }
})
//------------------------------------------------------------------------------
function remove_a_task()
{
  console.log('removing')
      if (confirm("آیا مطمئنید؟"))
       {
        var index = $('li').index($(this).parent());
        console.log(index);
        $(this).parent().remove();
        tasks_array.splice(index,1);
        localStorage.setItem('tasks',JSON.stringify(tasks_array));
      }
}
//-------------------------------------------------------------------------
function add_to_list(item)
{
    var li_tag = $("<li></li>")
    li_tag.addClass('list-group-item d-flex justify-content-between')
    li_tag.text(item);

    var i_tag = $("<i></i>")
    i_tag.addClass('btn fas fa-times text-danger mr-auto delete-item')
    i_tag.on('click',remove_a_task)
    li_tag.append(i_tag)
    $('ul').append(li_tag);
}


