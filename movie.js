async function putMovieData(){
    var movie = document.getElementById("title").value;

     let res = await fetch(
         `http://www.omdbapi.com/?t=${movie}&apikey=c98a6996`
     )
     let data = await res.json();
     
     var div = document.getElementById("fill")
     div.innerHTML = null;

     var title = document.createElement("h3")
     title.innerHTML = data.Title;
     var year = document.createElement("div")
     year.innerText = `Year - ${data.Year}`;
     var genre = document.createElement("div")
     genre.innerText = "Genres -" + data.Genres;

     var ratings = document.createElement("table")

     var headings = document.createElement("tr")
     var source = document.createElement("th")
     source.innerText = "Source"
     var value = document.createElement("th")
     value.innerText = "Value"
     headings.append(source,value)
     ratings.append(headings)
     var ratingArray = data.Ratings;
     ratingArray.forEach((el)=>{
         let element = document.createElement("tr") 
         let revTile = document.createElement("td")
         revTile.innerHTML = el.Source;
         let rating = document.createElement("td")
         rating.innerHTML = el.Value;
         
         element.append(revTile,rating)
         ratings.append(element)
     })
     if (ratingArray.length ==0) ratings = ""
     var language = document.createElement("div")
     language.innerText = "Language -"+ data.Language;

     // console.log(data.Language)
     div.append(title , year,language ,ratings);
 }