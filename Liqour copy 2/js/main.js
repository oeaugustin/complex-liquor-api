$('#search').on('click', function(){
  var enteredIngred = $('input').val()
  console.log(enteredIngred)
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+ enteredIngred


  $.ajax({

    url: apiUrl,
    success: function(res){
      console.log(res);
      $('p').html(res.ingredients[0].strDescription);
      if (res.ingredients = null){
        alert('Try again young Grasshoppe')
      }

    },
    error: function(err){
      console.log(err)
      alert('Try again young Grasshoppe')
    }
  })
})
