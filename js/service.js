angular.module('wezApp').service('filmSvc', function($http, $stateParams){
var films = [
  {"Title":"Arrival","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg","imdbID":"tt2543164"
},
  {"Title":"Kung Fu Panda 3","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_SX300.jpg","imdbID":"tt2267968", "Year":"2016"},
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
  "Poster":"http://67.media.tumblr.com/831fb9866f1cd765785cef3af8bfef83/tumblr_nvadtqU5Al1rce5tlo2_1280.jpg","imdbID":"tt3740778"
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
{"Title":"The Story of Qiu Ju","Year":"1992","Rated":"PG","Released":"16 Apr 1993","Runtime":"100 min","Genre":"Comedy, Drama","Director":"Yimou Zhang","Writer":"Yuan Bin Chen (writer of the the novella on which the film is based, \"The Wan Family's Lawsuit\"), Heng Liu","Actors":"Li Gong, Peiqi Liu, Liuchun Yang, Kesheng Lei","Plot":"A pregnant peasant woman seeks redress from the Chinese bureaucracy after the village chief kicks her husband in the groin in this comedy of justice. As she is frustrated by each level of ...","Language":"Mandarin","Country":"China, Hong Kong","Awards":"15 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4ODA2OTcyOF5BMl5BanBnXkFtZTcwOTIyNjQyMQ@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.6","imdbVotes":"4,121","imdbID":"tt0105197","Type":"movie","Response":"True"},
{"Title":"Selma","Year":"2014","Rated":"PG-13","Released":"09 Jan 2015","Runtime":"128 min","Genre":"Biography, Drama, History","Director":"Ava DuVernay","Writer":"Paul Webb","Actors":"David Oyelowo, Carmen Ejogo, Jim France, Trinity Simone","Plot":"A chronicle of Martin Luther King's campaign to secure equal voting rights via an epic march from Selma to Montgomery, Alabama in 1965.","Language":"English","Country":"UK, USA","Awards":"Won 1 Oscar. Another 57 wins & 87 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZGZkNzFkYTgtYTBkZC00M2MzLWJhNzUtMGE4YzRhYmU2Zjg0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"89","imdbRating":"7.5","imdbVotes":"63,026","imdbID":"tt1020072","Type":"movie","Response":"True"},
{"Title":"To Kill a Mockingbird","Year":"1962","Rated":"NOT RATED","Released":"16 Mar 1963","Runtime":"129 min","Genre":"Crime, Drama","Director":"Robert Mulligan","Writer":"Harper Lee (based on her novel \"To Kill a Mockingbird\"), Horton Foote (screenplay)","Actors":"Gregory Peck, John Megna, Frank Overton, Rosemary Murphy","Plot":"Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his children against prejudice.","Language":"English","Country":"USA","Awards":"Won 3 Oscars. Another 10 wins & 16 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.3","imdbVotes":"219,628","imdbID":"tt0056592","Type":"movie","Response":"True"},
{"Title":"The Wind That Shakes the Barley","Year":"2006","Rated":"NOT RATED","Released":"23 Mar 2007","Runtime":"127 min","Genre":"Drama, War","Director":"Ken Loach","Writer":"Paul Laverty","Actors":"Cillian Murphy, Pádraic Delaney, Liam Cunningham, Orla Fitzgerald","Plot":"Against the backdrop of the Irish War of Independence, two brothers fight a guerrilla war against British forces.","Language":"English, Irish, Latin","Country":"Ireland, UK, Germany, Italy, Spain, France, Belgium, Switzerland","Awards":"6 wins & 23 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc1MjA5ODY2Ml5BMl5BanBnXkFtZTcwMTk2MTQ1MQ@@._V1_SX300.jpg","Metascore":"82","imdbRating":"7.5","imdbVotes":"37,300","imdbID":"tt0460989","Type":"movie","Response":"True"},
{"Title":"The Birdcage","Year":"1996","Rated":"R","Released":"08 Mar 1996","Runtime":"117 min","Genre":"Comedy","Director":"Mike Nichols","Writer":"Jean Poiret (play), Francis Veber (earlier screenplay), Édouard Molinaro (earlier screenplay), Marcello Danon (earlier screenplay), Jean Poiret (earlier screenplay), Elaine May (screenplay)","Actors":"Robin Williams, Gene Hackman, Nathan Lane, Dianne Wiest","Plot":"A gay cabaret owner and his drag queen companion agree to put up a false straight front so that their son can introduce them to his fiancée's right-wing moralistic parents.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 6 wins & 21 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2NjExODYyOF5BMl5BanBnXkFtZTcwNTc0NjgyNA@@._V1_SX300.jpg","Metascore":"72","imdbRating":"7.0","imdbVotes":"62,988","imdbID":"tt0115685","Type":"movie","Response":"True"},
{"Title":"The Bridges of Madison County","Year":"1995","Rated":"PG-13","Released":"02 Jun 1995","Runtime":"135 min","Genre":"Drama, Romance","Director":"Clint Eastwood","Writer":"Richard LaGravenese (screenplay), Robert James Waller (novel)","Actors":"Clint Eastwood, Meryl Streep, Annie Corley, Victor Slezak","Plot":"Photographer Robert Kincaid wanders into the life of housewife Francesca Johnson, for four days in the 1960s.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 6 wins & 14 nominations.","Poster":"http://movieposters.2038.net/p/Bridges-of-Madison-County_1.jpg","Metascore":"66","imdbRating":"7.5","imdbVotes":"55,267","imdbID":"tt0112579","Type":"movie","Response":"True"},
{"Title":"Journey to Italy","Year":"1954","Rated":"NOT RATED","Released":"20 Dec 1954","Runtime":"97 min","Genre":"Drama, Romance","Director":"Roberto Rossellini","Writer":"Vitaliano Brancati (story and screenplay), Roberto Rossellini (story and screenplay), Colette (novel)","Actors":"Ingrid Bergman, George Sanders, Maria Mauban, Anna Proclemer","Plot":"Catherine and Alexander, wealthy and sophisticated, drive to Naples to dispose of a deceased uncle's villa. There's a coolness in their relationship and aspects of Naples add to the strain....","Language":"English, Italian","Country":"Italy, France","Awards":"2 wins.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDYyM2VjYmEtMWNhMy00ODIwLTk4M2MtNmNhMjc2OGU5MGZlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"100","imdbRating":"7.4","imdbVotes":"5,526","imdbID":"tt0046511","Type":"movie","Response":"True"},
{"Title":"Aguirre, the Wrath of God","Year":"1972","Rated":"NOT RATED","Released":"03 Apr 1977","Runtime":"93 min","Genre":"Adventure, Drama, History","Director":"Werner Herzog","Writer":"Werner Herzog","Actors":"Klaus Kinski, Helena Rojo, Del Negro, Ruy Guerra","Plot":"N/A","Language":"German, Quechua, Spanish","Country":"West Germany","Awards":"4 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjRkY2VhYzMtZWQyNS00OTY2LWE5NTAtYjlhNmQyYzE5MmUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.0","imdbVotes":"39,238","imdbID":"tt0068182","Type":"movie","Response":"True"},
{"Title":"Sansho the Bailiff","Year":"1954","Rated":"NOT RATED","Released":"N/A","Runtime":"124 min","Genre":"Drama","Director":"Kenji Mizoguchi","Writer":"Ogai Mori (short story \"Sanshô dayû\"), Fuji Yahiro (screenplay), Yoshikata Yoda (screenplay)","Actors":"Kinuyo Tanaka, Yoshiaki Hanayagi, Kyôko Kagawa, Eitarô Shindô","Plot":"In mediaeval Japan a compassionate governor is sent into exile. His wife and children try to join him, but are separated, and the children grow up amid suffering and oppression.","Language":"Japanese","Country":"Japan","Awards":"1 win & 1 nomination.","Poster":"http://marqueeposter.com/wp-content/uploads/2015/12/5-sansho-the-bailiff-japanese-b2-1954-01-845x1200.jpg","Metascore":"N/A","imdbRating":"8.4","imdbVotes":"10,302","imdbID":"tt0047445","Type":"movie","Response":"True"},
{"Title":"Forrest Gump","Year":"1994","Rated":"PG-13","Released":"06 Jul 1994","Runtime":"142 min","Genre":"Comedy, Drama","Director":"Robert Zemeckis","Writer":"Winston Groom (novel), Eric Roth (screenplay)","Actors":"Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys","Plot":"Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 39 wins & 65 nominations.","Poster":"http://www.wichitaorpheum.com/wp-content/uploads/2013/12/Forrest-Gump-Poster.jpg","Metascore":"82","imdbRating":"8.8","imdbVotes":"1,279,349","imdbID":"tt0109830","Type":"movie","Response":"True"},
{"Title":"City of Life and Death","Year":"2009","Rated":"R","Released":"22 Apr 2009","Runtime":"133 min","Genre":"Drama, History, War","Director":"Chuan Lu","Writer":"Chuan Lu","Actors":"Ye Liu, Yuanyuan Gao, Hideo Nakaizumi, Wei Fan","Plot":"In 1937, Japan occupied Nanjing, the Chinese capital. There was a battle and subsequent atrocities against the inhabitants, especially those who took refuge in the International Security Zone.","Language":"Mandarin, English, Japanese, German","Country":"China, Hong Kong","Awards":"9 wins & 9 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4Mzg0MTM5OF5BMl5BanBnXkFtZTcwMjA0NDY5NQ@@._V1_SX300.jpg","Metascore":"85","imdbRating":"7.7","imdbVotes":"8,528","imdbID":"tt1124052","Type":"movie","Response":"True"},
{"Title":"Chan Is Missing","Year":"1982","Rated":"N/A","Released":"04 Jun 1982","Runtime":"80 min","Genre":"Drama, Mystery","Director":"Wayne Wang","Writer":"Isaac Cronin, Wayne Wang","Actors":"Wood Moy, Marc Hayashi, Laureen Chew, Peter Wang","Plot":"Two cabbies search San Francisco's Chinatown for a mysterious character who has disappeared with their $4000. Their quest leads them on a humorous, if mundane, journey which illuminates the...","Language":"English, Cantonese","Country":"USA","Awards":"2 wins & 1 nomination.","Poster":"http://twi-ny.com/blog/wp-content/uploads/2016/09/chan-is-missing.jpeg","Metascore":"N/A","imdbRating":"7.1","imdbVotes":"808","imdbID":"tt0083728","Type":"movie","Response":"True"},
{"Title":"Touch of Evil","Year":"1958","Rated":"PG-13","Released":"21 May 1958","Runtime":"95 min","Genre":"Crime, Drama, Film-Noir","Director":"Orson Welles","Writer":"Orson Welles (screenplay), Whit Masterson (based on the novel \"Badge Of Evil\" by)","Actors":"Charlton Heston, Janet Leigh, Orson Welles, Joseph Calleia","Plot":"A stark, perverse story of murder, kidnapping, and police corruption in a Mexican border town.","Language":"English, Spanish","Country":"USA","Awards":"6 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTBlNGM0MjMtMDBhNi00NGJhLTliOTUtNDdlNjUwMTBkOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.1","imdbVotes":"74,079","imdbID":"tt0052311","Type":"movie","Response":"True"},
{"Title":"The Homesman","Year":"2014","Rated":"R","Released":"18 May 2014","Runtime":"122 min","Genre":"Drama, Western","Director":"Tommy Lee Jones","Writer":"Tommy Lee Jones (screenplay), Kieran Fitzgerald (screenplay), Wesley A. Oliver (screenplay), Glendon Swarthout (novel)","Actors":"Tommy Lee Jones, Hilary Swank, Grace Gummer, Miranda Otto","Plot":"Three women who have been driven mad by pioneer life are to be transported across the country by covered wagon by the pious, independent-minded Mary Bee Cuddy, who in turn employs low-life drifter George Briggs to assist her.","Language":"English, Danish","Country":"USA, France","Awards":"4 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NTkxOTEyMl5BMl5BanBnXkFtZTgwOTI1NzcwMzE@._V1_SX300.jpg","Metascore":"68","imdbRating":"6.6","imdbVotes":"21,849","imdbID":"tt2398231","Type":"movie","Response":"True"},
{"Title":"Monster","Year":"2003","Rated":"R","Released":"30 Jan 2004","Runtime":"109 min","Genre":"Biography, Crime, Drama","Director":"Patty Jenkins","Writer":"Patty Jenkins","Actors":"Charlize Theron, Christina Ricci, Bruce Dern, Lee Tergesen","Plot":"Based on the life of Aileen Wuornos, a Daytona Beach prostitute who became a serial killer.","Language":"English","Country":"USA, Germany","Awards":"Won 1 Oscar. Another 26 wins & 23 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NzI5NzEwNl5BMl5BanBnXkFtZTcwNjc1NjQyMQ@@._V1_SX300.jpg","Metascore":"74","imdbRating":"7.3","imdbVotes":"106,721","imdbID":"tt0340855","Type":"movie","Response":"True"},
{"Title":"Fitzcarraldo","Year":"1982","Rated":"PG","Released":"10 Oct 1982","Runtime":"158 min","Genre":"Adventure, Drama","Director":"Werner Herzog","Writer":"Werner Herzog","Actors":"Klaus Kinski, Claudia Cardinale, José Lewgoy, Miguel Ángel Fuentes","Plot":"The story of Brian Sweeney Fitzgerald, an extremely determined man who intends to build an opera house in the middle of a jungle.","Language":"German, Spanish, Italian","Country":"West Germany, Peru","Awards":"Nominated for 1 Golden Globe. Another 4 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjIzNTYxMTctZjAwNS00YzI3LWExMGMtMGQxNGM5ZTc1NzhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.2","imdbVotes":"22,633","imdbID":"tt0083946","Type":"movie","Response":"True"},
{"Title":"Summer with Monika","Year":"1953","Rated":"R","Released":"09 Feb 1953","Runtime":"96 min","Genre":"Drama, Romance","Director":"Ingmar Bergman","Writer":"Per Anders Fogelström (screenplay)","Actors":"Harriet Andersson, Lars Ekborg, Dagmar Ebbesen, Åke Fridell","Plot":"Harry Lund is a nineteen-year-old man who meets Monika, a romantic, reckless and rebellious seventeen-year-old, and they fall in love. They leave their families and jobs in their small town...","Language":"Swedish","Country":"Sweden","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZWM5MmZhZTUtMzk4NS00ZDI0LWIzZWUtZmVkMTlkYjZjZGFhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.6","imdbVotes":"7,875","imdbID":"tt0046345","Type":"movie","Response":"True"},
{"Title":"Paper Moon","Year":"1973","Rated":"PG","Released":"09 May 1973","Runtime":"102 min","Genre":"Comedy, Crime, Drama","Director":"Peter Bogdanovich","Writer":"Joe David Brown (novel), Alvin Sargent (screenplay)","Actors":"Ryan O'Neal, Tatum O'Neal, Madeline Kahn, John Hillerman","Plot":"During the Great Depression, a con man finds himself saddled with a young girl who may or may not be his daughter, and the two forge an unlikely partnership.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 7 wins & 10 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOWVmYzQwY2MtOTBjNi00MDNhLWI5OGMtN2RiMDYxODI3MjU5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.2","imdbVotes":"23,587","imdbID":"tt0070510","Type":"movie","Response":"True"},
{"Title":"Wild","Year":"2014","Rated":"R","Released":"19 Dec 2014","Runtime":"115 min","Genre":"Adventure, Biography, Drama","Director":"Jean-Marc Vallée","Writer":"Nick Hornby (screenplay), Cheryl Strayed (memoir \"Wild: From Lost to Found on the Pacific Crest Trail\")","Actors":"Reese Witherspoon, Laura Dern, Thomas Sadoski, Keene McRae","Plot":"A chronicle of one woman's 1,100-mile solo hike undertaken as a way to recover from a recent personal tragedy.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 10 wins & 61 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNzI2MDc1Ml5BMl5BanBnXkFtZTgwOTU5NTYxMjE@._V1_SX300.jpg","Metascore":"76","imdbRating":"7.1","imdbVotes":"89,569","imdbID":"tt2305051","Type":"movie","Response":"True"},
{"Title":"Ugetsu","Year":"1953","Rated":"APPROVED","Released":"07 Sep 1954","Runtime":"96 min","Genre":"Drama, Fantasy, War","Director":"Kenji Mizoguchi","Writer":"Matsutarô Kawaguchi (adaptation), Hisakazu Tsuji (idea), Akinari Ueda (stories), Yoshikata Yoda (screenplay)","Actors":"Machiko Kyô, Mitsuko Mito, Kinuyo Tanaka, Masayuki Mori","Plot":"A fantastic tale of war, love, family and ambition set in the midst of the Japanese Civil Wars of the sixteenth century.","Language":"Japanese","Country":"Japan","Awards":"Nominated for 1 Oscar. Another 4 wins & 1 nomination.","Poster":"http://www.kennelco.com/wp-content/uploads/2014/09/Ugetsu.jpg","Metascore":"N/A","imdbRating":"8.2","imdbVotes":"14,404","imdbID":"tt0046478","Type":"movie","Response":"True"},
{"Title":"Mulholland Drive","Year":"2001","Rated":"R","Released":"19 Oct 2001","Runtime":"147 min","Genre":"Drama, Mystery, Thriller","Director":"David Lynch","Writer":"David Lynch","Actors":"Naomi Watts, Jeanne Bates, Dan Birnbaum, Laura Harring","Plot":"After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.","Language":"English, Spanish","Country":"France, USA","Awards":"Nominated for 1 Oscar. Another 46 wins & 56 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNWM2MDZmMDgtYjViOS00YzBmLWE4YzctMDMyYTQ2YTc4MmVkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Metascore":"81","imdbRating":"8.0","imdbVotes":"242,922","imdbID":"tt0166924","Type":"movie","Response":"True"},
{"Title":"The Skin I Live In","Year":"2011","Rated":"R","Released":"02 Sep 2011","Runtime":"120 min","Genre":"Crime, Drama, Thriller","Director":"Pedro Almodóvar","Writer":"Agustín Almodóvar (collaboration), Pedro Almodóvar, Thierry Jonquet (novel)","Actors":"Antonio Banderas, Elena Anaya, Marisa Paredes, Jan Cornet","Plot":"A brilliant plastic surgeon, haunted by past tragedies, creates a type of synthetic skin that withstands any kind of damage. His guinea pig: a mysterious and volatile woman who holds the key to his obsession.","Language":"Spanish","Country":"Spain","Awards":"Nominated for 1 Golden Globe. Another 26 wins & 64 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwOTYyNDY4NV5BMl5BanBnXkFtZTcwNDI1ODk0Ng@@._V1_SX300.jpg","Metascore":"70","imdbRating":"7.6","imdbVotes":"103,897","imdbID":"tt1189073","Type":"movie","Response":"True"},
{"Title":"Grizzly Man","Year":"2005","Rated":"R","Released":"02 Sep 2005","Runtime":"103 min","Genre":"Documentary, Biography","Director":"Werner Herzog","Writer":"Werner Herzog","Actors":"Werner Herzog, Carol Dexter, Val Dexter, Sam Egli","Plot":"A devastating and heartrending take on grizzly bear activists Timothy Treadwell and Amie Huguenard, who were killed in October of 2003 while living among grizzlies in Alaska.","Language":"English","Country":"USA","Awards":"21 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODc3NTAxMTY1MV5BMl5BanBnXkFtZTcwOTE4NjUzMw@@._V1_SX300.jpg","Metascore":"87","imdbRating":"7.8","imdbVotes":"41,703","imdbID":"tt0427312","Type":"movie","Response":"True"},
{"Title":"Mr. Turner","Year":"2014","Rated":"R","Released":"31 Oct 2014","Runtime":"150 min","Genre":"Biography, Drama, History","Director":"Mike Leigh","Writer":"Mike Leigh","Actors":"Timothy Spall, Paul Jesson, Dorothy Atkinson, Marion Bailey","Plot":"An exploration of the last quarter century of the great, if eccentric, British painter J.M.W. Turner's life.","Language":"English","Country":"UK, France, Germany","Awards":"Nominated for 4 Oscars. Another 19 wins & 57 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzNTg0MzM3NF5BMl5BanBnXkFtZTgwNDg3NTY5MjE@._V1_SX300.jpg","Metascore":"94","imdbRating":"6.8","imdbVotes":"18,497","imdbID":"tt2473794","Type":"movie","Response":"True"},
{"Title":"Tampopo","Year":"1985","Rated":"N/A","Released":"01 Sep 1987","Runtime":"114 min","Genre":"Comedy","Director":"Jûzô Itami","Writer":"Jûzô Itami","Actors":"Tsutomu Yamazaki, Nobuko Miyamoto, Kôji Yakusho, Ken Watanabe","Plot":"A truck driver stops at a small family-run noodle shop and decides to help its fledgling business. The story is intertwined with various vignettes about the relationship of love and food.","Language":"Japanese","Country":"Japan","Awards":"5 wins & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTI1NTYxNjg5Ml5BMl5BanBnXkFtZTcwMTM5ODI3Mw@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"9,614","imdbID":"tt0092048","Type":"movie","Response":"True"},
{"Title":"Harakiri","Year":"1962","Rated":"NOT RATED","Released":"04 Aug 1964","Runtime":"133 min","Genre":"Action, Drama, History","Director":"Masaki Kobayashi","Writer":"Shinobu Hashimoto (screenplay), Yasuhiko Takiguchi (novel), Yasuhiko Takiguchi","Actors":"Tatsuya Nakadai, Akira Ishihama, Shima Iwashita, Tetsurô Tanba","Plot":"An elder ronin samurai arrives at a feudal lord's home and requests an honorable place to commit suicide. But when the ronin inquires about a younger samurai who arrived before him things take an unexpected turn.","Language":"Japanese","Country":"Japan","Awards":"8 wins & 2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzMwNjk5Ml5BMl5BanBnXkFtZTgwNTQwOTkxMTE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.7","imdbVotes":"19,162","imdbID":"tt0056058","Type":"movie","Response":"True"}



];

this.getFavs = function(){
  return favorites;
};

console.log(films);
  this.getFilm = function(){
    console.log(films);
    return films;
  };

  this.getTrailer = function(id){
    console.log('reached service');
    return $http({
      method:'GET',
      url: 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US'
    }).then(function(response){
      console.log(response.data.results);
      var trailers = response.data.results;
      var results = trailers.filter(function(trailers){
        return trailers.name === 'The Birdcage (1996)' || trailers.key === 'kCFaTffMMeE' || (trailers.name.includes('Trailer') && trailers.type === 'Trailer');
      });
      console.log(results);
      return results;
    });
  };

  this.getFilmDetails = function(id){
    console.log(id);
    console.log('reached service');
    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i=' + id + '&plot=short&r=json'
    }).then(function(response){
      var films = [
        {"Title":"Mr. Turner",
        "imdbID":"tt2473794",
          "review1":"Mr. Turner is an artist in England during the 1800’s. I am not an expert so can’t really give any concrete details. He is not a man that is what you can call handsome, but he is a man that can capture great beauty with his paint brush. As presented in his canvases. A film that focuses on the idea of inner beauty. Only the people that can understand this beauty is Turner himself, his father and a widowed lady that he falls in loves with. People of society see his painting as vile with no structure or formula. They can only see the surface what the true meaning of art is. Genius is seen as trivial. Inteligence is seen as as stupidity",
"review2":"When a man approaches to buy his painting for 100,000 pounds he firmly rejects his offer as he only offers his works of art to the public of England. After the death of his father he expresses himself with the painting of a prostitute asking her to pose in a gesture of grief. Art comes from the expression of the human so and Mike Leigh is able to capture this moment with great delicacy."},
      {"Title":"Billy Lynn's Long Halftime Walk",
      "imdbID":"tt2513074",
      "review1":"",
      "review2":"",
      "review3":"",
      "review4":"",
      "review5":""
      },
      {"Title":"Doctor Strange",
      "review1":"Marvel brings another super hero to the big screen. This time it is Doctor Strange. Our hero began his journey as an aclaimed  neurosurgeon, who loses control over his hands during a terrible car accident. Doing all he can to treat it. When western medicine as failed him he is directed to Kamar-Taj, Nepal to seek the Ancient One who is known to heal another man with a similar condition.",
      "review2":"Doctor Strange is not strange at all compared to other marvel super heros. It is a story of the hero's journey. We see strange, once living his lavish lifestyle in New York city and through a series of circumstances propels him into a journey that tranforms him. Like Tony Stark who once lived the lavish life saw the injustice he was controbuting with his own line of weapons. What makes Marvel super hero movies work is that each super hero has their own unique story to becoming a hero. Most of the time they are not suited to live in the society that is provided to them and need to take refuge elsewhere. Learning the skills from the Ancient one Stephen Strange is rushed into a world of chaos as he needs to protect the world from Kaecilius a previous pupil turned evil and wants to destroy the world. You know how it goes",
      "review3":"The visual effects are impressive in Docotr Strange. The magic and world bending scenes are great to watch, but I found myself having a hard time being engaged as if I almost seen this movie several times. I had a de javu momement as New York was once again the city that needed to be destoryed for another super hero to be put on the big screen. Inception like visual effects are cool, but so is the circus. They are only there to wow us but not invoke us. Docotor Strange is the new super hero around the block, but I feel as if I don't want another formal introduction.",
      "review4":"",
      "review5":""
      },
      {"Title":"Hacksaw Ridge",
      "imdbID":"tt2119532",
      "review1":"'Hacksaw Ridge' tells the story of Private Desmond Doss, who was a World War 2 field medic who chose not to carry a weapon in battle. When I first saw the trailer for Hacksaw Ridge I was really excited. Historical films have always been a favorite genre of mine. What hooked me about the story was a man who stuck to his beleifs and never under any circumstances did he give them up, even when his life was in danger.",
      "review2":"Mel Gibson who has returned to the big screen once again does a great job allowing the veiwers to empathize with Desmond. We see who this man was and how he came to formulate the beleifs that he had. The stories structure has it centered around his beleif he came to adopt from the bible of 'Thou shall not kill'. We see Desmond grow as a child, then through boot camp where the tempatation to fight back or protect is clearly present. There were many times in the film where his beleif was tested. We always have our own philosophies, but when is it do we ever stick to them and apply them to our lives.",
      "review3":"It is those who stick with it and come through the end can really define themselves and who they really are. One does not need to be religious to understand this principle. The film captures that briliantly using the war as a backdrop, but isn't life a war? Don't we need to make decisions and every move we make will test us? As it tested Desmond. I saw some of the most brutal action sequences since 'Saving Private Ryan'. It was terrifying and engaging to watch. The film is one of the best war films I've seen in recent memory. Mel has not lost his sense of direction."
      },
      {"Title":"Amanda Knox",
      "imdbID":"tt5952332",
      "review1":"Amanda Knox, from what I know from seeing her name in the mainstream media was responsible for brutally stabbing her roomate while studing abroad in Italy. The documentary is told from severl different perspectives, including Amanda Knox, the police chief and the journalist behind the reporting of the incident.",
      "review2":"Before seeing the film I never looked into the story of Amanda Knox. Seeing her on TV and how the media projected her I assumed she was guilty and hiding the truth. As the story was unfolding I always had the thought that she could be lying to us, even though she had the look and perception of being innocent.",
      "review3":"The filmmakers had their characters sit in the center and speaking directly to the camera. This setup is strikingly similar to that of Kurosawa's film 'Rashomon' where we have a court case and the characters confess to the judge, which in this case is us the audience. Trying to plead their innocnece. You don't know who is really telling the truth. This just shows us how are opnions can be easily manipulated by how information is delivered. We become gulible. In the case of Amanda Knox we thought she was a pervert and a brutal killer. It was this simple persuation and misinterpretation by the police and media that led to her arrest. We are capable of abandoning the truth with simple misinformation and incorrect perception.",
      "review4":"We even see instances of that in the film when Amanda was being interogated by the police. Hitting her and repeating the questions to the point where she did not beleive herself. People don't want the truth because the truth or the fact does not align with their beleifs. Therefore people would prefer a different answer that fits with their own. Maybe it might make them look bad. Or it might not make a good headline. People want to be perceived and looked at based on their beleif system. It is during this process we cause harm to others and ourselves."
      },
      {"Title":"St. Vincent",
      "review1":"",
      "review2":"",
      "review3":"",
      "review4":"",
      "review5":"",
      "imdbID":"tt2170593"
      },
      {"Title":"Come Drink with Me",
      "imdbID":"tt0059079",
      "review1":"",
      "review2":"",
      "review3":"",
      "review4":"",
      "review5":""
      },
      {"Title":"The Kingdom of Dreams and Madness",
      "imdbID":"tt3204392",
      "review1":"",
      "review2":"",
      "review3":"",
      "review4":"",
      "review5":""
      },
      {"Title":"Sully",
      "imdbID":"tt3263904",
      "review1":"",
      "review2":"",
      "review3":"",
      "review4":"",
      "review5":""
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
      info.actors = response.data.Actors;
      info.director = response.data.Director;
      info.runtime = response.data.Runtime;
      info.writer = response.data.Writer;
      info.language = response.data.Language;
      info.country = response.data.Country;
      info.release = response.data.Released;
      info.plot = response.data.Plot;
      // info.findLink = function(films){
      //   console.log(films[3].Title);
      //   for(var i = 0; i < films.length; i++){
      //     console.log(films[i].Title);
      //     if(films[i].Title === response.data.Title){
      //       info.link = films[i].link;
      //     }
      //   }
      // };
      info.findReview1 = function(films){
        for(var i = 0; i < films.length; i++){
          if(films[i].imdbID === response.data.imdbID){
            info.review1 = films[i].review1;
          }
        }
      };
      info.findReview2 = function(films){
        for(var i = 0; i < films.length; i++){
          if(films[i].imdbID === response.data.imdbID){
            info.review2 = films[i].review2;
          }
        }
      };
      info.findReview3 = function(films){
        for(var i = 0; i < films.length; i++){
          if(films[i].imdbID === response.data.imdbID){
            info.review3 = films[i].review3;
          }
        }
      };
      info.findReview4 = function(films){
        for(var i = 0; i < films.length; i++){
          if(films[i].imdbID === response.data.imdbID){
            info.review4 = films[i].review4;
          }
        }
      };
      info.findReview5 = function(films){
        for(var i = 0; i < films.length; i++){
          if(films[i].imdbID === response.data.imdbID){
            info.review5 = films[i].review5;
          }
        }
      };

      info.findReview1(films);
      info.findReview2(films);
      info.findReview3(films);
      info.findReview4(films);
      info.findReview5(films);
      //info.findLink(films);
      return info;
    });

  };

});
