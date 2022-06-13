var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://static.vecteezy.com/system/resources/previews/000/682/917/original/a-cute-boy-character.jpg", "https://webstockreview.net/images/father-clipart-10.jpg" , "https://th.bing.com/th/id/OIP.k5QiH2IixeObF9SYB1CKFwHaPr?pid=ImgDet&rs=1",
 "https://th.bing.com/th/id/OIP.CVSLEw3Bj7LPny5STr_NzgHaJl?w=166&h=216&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  " https://th.bing.com/th/id/OIP.4GWrvSsdbw_dhjGSjQe22QHaTH?pid=ImgDet&rs=1"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
   
    var updatedImage = images[i];

    var updatedName = names[i] ;
    


 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
