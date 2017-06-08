function add()
{
    var userInput = document.getElementById('input').value;

    var list = document.createElement('LI');
    var item = document.createTextNode(userInput);
    list.appendChild(item);

    document.getElementById('list').appendChild(list)
}

function del()
{
document.getElementById('list').innerHTML=" "
}