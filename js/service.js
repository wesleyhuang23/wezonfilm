angular.module('wezApp').service('filmSvc', function($http, $stateParams){
var films = [

{"Title":"Billy Lynn's Long Halftime Walk","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NDI1Nzg4OF5BMl5BanBnXkFtZTgwNjYxOTg4ODE@._V1_SX300.jpg",
"imdbID":"tt2513074"
},
{"Title":"Doctor Strange","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2ODA4MTM0M15BMl5BanBnXkFtZTgwNzE5OTYxMDI@._V1_SX300.jpg",
"imdbID":"tt1211837"
},
{"Title":"Hacksaw Ridge","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg",
"imdbID":"tt2119532"
},
{"Title":"Amanda Knox","Year":"2016",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTY5NjE4MTQyNF5BMl5BanBnXkFtZTgwMzg1NjEwMDI@._V1_SX300.jpg",
"link":"https://www.youtube.com/watch?v=f5SFjSxzS7M",
"imdbID":"tt5952332"
},
{"Title":"St. Vincent","Year":"2014",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzI5OTA4MF5BMl5BanBnXkFtZTgwNjc4NTM3MjE@._V1_SX300.jpg",
"imdbID":"tt2170593"
},
{"Title":"Come Drink with Me","Year":"1966","Poster":"http://36.media.tumblr.com/589bc5d311d8d3e41587872aaae660a3/tumblr_nfs02fP10c1qimoe7o4_1280.jpg",
"imdbID":"tt0059079"
},
{"Title":"The Kingdom of Dreams and Madness","Year":"2013",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzkzMzE0OF5BMl5BanBnXkFtZTgwMTY5OTY0MzE@._V1_SX300.jpg",
"imdbID":"tt3204392"
},
{"Title":"Sully","Year":"2016",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_SX300.jpg",
"imdbID":"tt3263904"
},


];

var favorites =
[
{
  "Title":"Mountains May Depart","Year":"2015",
  "Poster":"http://67.media.tumblr.com/831fb9866f1cd765785cef3af8bfef83/tumblr_nvadtqU5Al1rce5tlo2_1280.jpg"
},
{
  "Title":"Cruel Story of Youth","Year":"1960","Poster":"https://image.tmdb.org/t/p/w1280/itF3KhmSogKbzJ8Jvp8OtBxEfS9.jpg","imdbID":"tt0054286"
},
{
  "Title":"Zulu","Year":"1964","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjM4NjE3M15BMl5BanBnXkFtZTcwMjIzMzk3NA@@._V1_SX300.jpg","imdbID":"tt0058777"
},
{
  "Title":"Gate of Hell","Year":"1953",
  "Poster":"https://upload.wikimedia.org/wikipedia/commons/9/98/Jigokumon_poster.jpg",
  "imdbID":"tt0045935"
},
{
  "Title":"Zootopia","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg","imdbID":"tt2948356"
},
{
  "Title":"GasLand","Year":"2010","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDA5NDc4NTUzMl5BMl5BanBnXkFtZTcwMjcxNDg1Mw@@._V1_SX300.jpg","imdbID":"tt1558250"
},
{
  "Title":"Brooklyn","Year":"2015","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzE4MDk5NzEyOV5BMl5BanBnXkFtZTgwNDM4NDA3NjE@._V1_SX300.jpg","imdbID":"tt2381111"
},
{
  "Title":"Divorce Italian Style","Year":"1961",
  "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3NjQxMzE3Nl5BMl5BanBnXkFtZTgwNzMzOTQ1MzE@._V1_SX300.jpg","imdbID":"tt0055913"
},
{"Title":"A Time to Live, a Time to Die","Year":"1985","Poster":"https://image.tmdb.org/t/p/w1280/mnXAh4SIdYDb977TFvnJQPChLvq.jpg","imdbID":"tt0090185"
},
  {"Title":"The Assassin","Year":"2015","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMTk3MjMyOV5BMl5BanBnXkFtZTgwMjA2Mjk4NjE@._V1_SX300.jpg","imdbID":"tt3508840"
},
{
  "Title":"Steve Jobs","Year":"2015","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0NTA2MTEwOV5BMl5BanBnXkFtZTgwNzg4NzU2NjE@._V1_SX300.jpg","imdbID":"tt2080374"
},
{
  "Title":"Invasion of the Body Snatchers","Year":"1956","Poster":"https://pccdn.perfectchannel.com/christies/live/images/item/VintageFilmPosters25099/5812359/original/CSK_10275_0004.jpg","imdbID":"tt0049366",
},
{
  "Title":"Breaking the Waves","Year":"1996","Rated":"R","Released":"13 Nov 1996","Runtime":"159 min","Genre":"Drama, Romance","Director":"Lars von Trier","Writer":"Lars von Trier, Peter Asmussen","Actors":"Emily Watson, Stellan Skarsgård, Katrin Cartlidge, Jean-Marc Barr","Plot":"Oilman Jan is paralyzed in an accident. His wife, who prayed for his return, feels guilty; even more, when Jan urges her to have sex with another.","Language":"English","Country":"Denmark, Sweden, France, Netherlands, Norway, Iceland, Spain","Awards":"Nominated for 1 Oscar. Another 42 wins & 25 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDYwZTU2MzktNWYxMS00NTYzLTgzOWEtMTRiYjc5NGY2Nzg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"76","imdbRating":"7.9","imdbVotes":"49,166","imdbID":"tt0115751","Type":"movie","Response":"True"
},
{
  "Title":"Samsara","Year":"2011","Rated":"PG-13","Released":"23 Aug 2012","Runtime":"102 min","Genre":"Documentary, Music","Director":"Ron Fricke","Writer":"Ron Fricke (concept and treatment written by), Mark Magidson (concept and treatment written by)","Actors":"Balinese Tari Legong Dancers, Ni Made Megahadi Pratiwi, Puti Sri Candra Dewi, Putu Dinda Pratika","Plot":"Filmed over nearly five years in twenty-five countries on five continents, and shot on seventy-millimetre film, Samsara transports us to the varied worlds of sacred grounds, disaster zones, industrial complexes, and natural wonders.","Language":"None","Country":"USA, Indonesia, Singapore, Thailand, Kenya, Denmark, Brazil, Jordan, United Arab Emirates, Saudi Arabia, South Africa, Italy, Ghana, Egypt, China, Japan","Awards":"1 win & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3NzM4MTI5NF5BMl5BanBnXkFtZTcwMjk3NTA5Nw@@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.5","imdbVotes":"23,073","imdbID":"tt0770802","Type":"movie","Response":"True"
},
{
  "Title":"Melancholia","Year":"2011","Rated":"R","Released":"26 May 2011","Runtime":"130 min","Genre":"Drama, Sci-Fi","Director":"Lars von Trier","Writer":"Lars von Trier","Actors":"Kirsten Dunst, Charlotte Gainsbourg, Alexander Skarsgård, Brady Corbet","Plot":"Two sisters find their already strained relationship challenged as a mysterious new planet threatens to collide with Earth.","Language":"English","Country":"Denmark, Sweden, France, Germany","Awards":"32 wins & 85 nominations.","Poster":"http://cdn.collider.com/wp-content/uploads/melancholia-movie-poster.jpg","Metascore":"80","imdbRating":"7.1","imdbVotes":"129,394","imdbID":"tt1527186","Type":"movie","Response":"True"
},
{
  "Title":"Dancer in the Dark","Year":"2000","Rated":"R","Released":"06 Oct 2000","Runtime":"140 min","Genre":"Crime, Drama, Musical","Director":"Lars von Trier","Writer":"Lars von Trier","Actors":"Björk, Catherine Deneuve, David Morse, Peter Stormare","Plot":"An east European girl goes to America with her young son, expecting it to be like a Hollywood film.","Language":"English","Country":"Denmark, Spain, Germany, Netherlands, Italy, USA, UK, France, Sweden, Finland, Iceland, Norway","Awards":"Nominated for 1 Oscar. Another 33 wins & 45 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDVkYWMxNWEtNjc2MC00OGI5LWI3NmUtYWUwNDQyOTc3YmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"61","imdbRating":"8.0","imdbVotes":"80,473","imdbID":"tt0168629","Type":"movie","Response":"True"
},
{"Title":"Kumiko, the Treasure Hunter","Year":"2014","Rated":"N/A","Released":"20 Feb 2015","Runtime":"105 min","Genre":"Drama","Director":"David Zellner","Writer":"David Zellner, Nathan Zellner","Actors":"Rinko Kikuchi, Nobuyuki Katsube, Kanako Higashi, Ichi Kyokaku","Plot":"A jaded Japanese woman discovers a hidden copy of Fargo (1996) on VHS, believing it to be a treasure map indicating the location of a large case of money.","Language":"English, Japanese","Country":"USA","Awards":"10 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzNzI1MTkyNzBeQTJeQWpwZ15BbWU4MDQ0NDU0MzQx._V1_SX300.jpg","Metascore":"68","imdbRating":"6.6","imdbVotes":"8,796","imdbID":"tt3263614","Type":"movie","Response":"True"
},
{"Title":"Inside Out","Year":"2015","Rated":"PG","Released":"19 Jun 2015","Runtime":"95 min","Genre":"Animation, Adventure, Comedy","Director":"Pete Docter, Ronnie Del Carmen","Writer":"Pete Docter (original story by), Ronnie Del Carmen (original story by), Pete Docter (screenplay), Meg LeFauve (screenplay), Josh Cooley (screenplay), Michael Arndt (additional story material by), Bill Hader (additional dialogue by), Amy Poehler (additional dialogue by), Simon Rich (additional story material by)","Actors":"Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader","Plot":"After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 91 wins & 95 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg","Metascore":"94","imdbRating":"8.2","imdbVotes":"367,651","imdbID":"tt2096673","Type":"movie","Response":"True"
},
{"Title":"The Odd Couple","Year":"1968","Rated":"G","Released":"16 May 1968","Runtime":"105 min","Genre":"Comedy","Director":"Gene Saks","Writer":"Neil Simon (from the play by), Neil Simon (screenplay)","Actors":"Jack Lemmon, Walter Matthau, John Fiedler, Herb Edelman","Plot":"Two friends try sharing an apartment, but their ideas of housekeeping and lifestyles are as different as night and day.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 3 wins & 7 nominations.","Poster":"http://www.impawards.com/1968/posters/odd_couple_xxlg.jpg","Metascore":"N/A","imdbRating":"7.7","imdbVotes":"25,292","imdbID":"tt0063374","Type":"movie","Response":"True"
},
{"Title":'Vivre sa vie',"Year":"1962","Rated":"N/A","Released":"N/A","Runtime":"2 min","Genre":"Short, Musical","Director":"Jean-Luc Godard","Writer":"N/A","Actors":"Anna Karina, André S. Labarthe, Sady Rebbot, Guylaine Schlumberger","Plot":"N/A","Language":"French","Country":"France","Awards":"N/A","Poster":"http://1.bp.blogspot.com/-RmHQkHswPwY/UzSsZ8Dn5TI/AAAAAAAAIro/oQsl1yuktHM/s1600/VIVRE+SA+VIE+-+French+Poster+2.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5235730","Type":"movie","Response":"True"
},
{"Title":"Mad Max: Fury Road","Year":"2015","Rated":"R","Released":"15 May 2015","Runtime":"120 min","Genre":"Action, Adventure, Sci-Fi","Director":"George Miller","Writer":"George Miller, Brendan McCarthy, Nick Lathouris","Actors":"Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne","Plot":"A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.","Language":"English, Russian","Country":"Australia, USA","Awards":"Won 6 Oscars. Another 209 wins & 190 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_SX300.jpg","Metascore":"90","imdbRating":"8.1","imdbVotes":"577,243","imdbID":"tt1392190","Type":"movie","Response":"True"
},
{"Title":"Ex Machina","Year":"2015","Rated":"R","Released":"24 Apr 2015","Runtime":"108 min","Genre":"Drama, Mystery, Sci-Fi","Director":"Alex Garland","Writer":"Alex Garland","Actors":"Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander","Plot":"A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.","Language":"English","Country":"UK","Awards":"Won 1 Oscar. Another 61 wins & 135 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg","Metascore":"78","imdbRating":"7.7","imdbVotes":"298,392","imdbID":"tt0470752","Type":"movie","Response":"True"
},

];

this.getFavs = function(){
  return favorites;
};

console.log(films);
  this.getFilm = function(){
    console.log(films);
    return films;
  };

  this.getFilmDetails = function(id){
    console.log(id);
    console.log('reached service');
    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i=' + id + '&plot=short&r=json'
    }).then(function(response){
      var films = [
      {"Title":"Billy Lynn's Long Halftime Walk",
      "link":"https://www.youtube.com/embed/mUULFJ_I048",
      "review":""
      },
      {"Title":"Doctor Strange",
      "link":"https://www.youtube.com/embed/HSzx-zryEgM",
      "review":""
      },
      {"Title":"Hacksaw Ridge",
      "link":"https://www.youtube.com/embed/s2-1hz1juBI",
      "review":""
      },
      {"Title":"Amanda Knox",
      "link":"https://www.youtube.com/embed/f5SFjSxzS7M",
      "review":"Amanda Knox, from what I know from seeing her name in the mainstream media was responsible for brutally stabbing her roomate while studing abroad in Italy. The documentary is told from severl different perspectives, including Amanda Knox, the police chief and the journalist behind the reporting of the incident.     Before seeing the film I never looked into the story of Amanda Knox. Seeing her on TV and how the media projected her I assumed she was guilty and hiding the truth. As the story was unfolding I always had the thought that she could be lying to us, even though she had the look and perception of being innocent.     The filmmakers had their characters sit in the center and speaking directly to the camera. This setup is strikingly similar to that of Kurosawa's film 'Rashomon' where we have a court case and the characters confess to the judge, which in this case is us the audience. Trying to plead their innocnece. You don't know who is really telling the truth. This just shows us how are opnions can be easily manipulated by how information is delivered. We become gulible. In the case of Amanda Knox we thought she was a pervert and a brutal killer. It was this simple persuation and misinterpretation by the police and media that led to her arrest. We are capable of abandoning the truth with simple misinformation and incorrect perception.     We even see instances of that in the film when Amanda was being interogated by the police. Hitting her and repeating the questions to the point where she did not beleive herself. People don't want the truth because the truth or the fact does not align with their beleifs. Therefore people would prefer a different answer that fits with their own. Maybe it might make them look bad. Or it might not make a good headline. People want to be perceived and looked at based on their beleif system. It is during this process we cause harm to others and ourselves."
      },
      {"Title":"St. Vincent",
      "link":"https://www.youtube.com/embed/9dP5lJnJHXg",
      "review":""
      },
      {"Title":"Come Drink with Me",
      "link":"https://www.youtube.com/embed/C4SMPQyiLy4",
      "review":""
      },
      {"Title":"The Kingdom of Dreams and Madness",
      "link":"https://www.youtube.com/embed/24wViGZKVu8",
      "review":""
      },
      {"Title":"Sully",
      "link":"https://www.youtube.com/embed/mjKEXxO2KNE",
      "review":""
      },


      ];
      console.log('reached service.js');
      console.log(response);
      var info = {};
      console.log(response.data.Title);
      info.title = response.data.Title;
      info.year = response.data.Year;
      info.genre = response.data.Genre;
      info.poster = response.data.Poster;
      info.findLink = function(films){
        console.log(films[3].Title);
        for(var i = 0; i < films.length; i++){
          console.log(films[i].Title);
          if(films[i].Title === response.data.Title){
            info.link = films[i].link;
          }
        }
      };
      info.findReview = function(films){
        for(var i = 0; i < films.length; i++){
          if(films[i].Title === response.data.Title){
            info.review = films[i].review;
          }
        }
      };
      info.findReview(films);
      info.findLink(films);
      return info;
    });

  };

});
