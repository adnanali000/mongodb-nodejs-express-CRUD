

$("#add-user").submit(function(event){
    alert("data successfully submitted");   
})

$("#update-user").submit(function(event){
    event.preventDefault();
    var unindexedArray = $(this).serializeArray();
    var data = {};
    $.map(unindexedArray,function(n,i){
        data[n['name']] = n['value']; 
    })
    console.log(data);

    var request = 
    {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("data updated")
    });
})