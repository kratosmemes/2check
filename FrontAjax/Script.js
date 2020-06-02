let data = [{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
]


$(function(){

    $('#getProducts').on('click' , function(){
        $.ajax({
            url: 'http://localhost:3000/productos',
            success: function(products){
            	for(let i=0 ; i<=2 ; i++){
               $('tbody').append(`<tr>
                <td>${products[i].id}</td> 
                <td>${products[i].producto}</td>
                <td> <button>Update</button> <button>Delete</button> </td>
               	</tr>

					`);

            	}

            }
        })
    })

   	$('productForm').on('click' ,  function(){
   		
   	})
});  