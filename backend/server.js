const express = require('express');


var cors = require('cors')
const axios = require('axios').default;
var r_count = 0;

const app = express();
const { response } = require('express');
// (async function() {
//     // app.set("dataOnStartup", await loadData());
//     app.set('movie_genre_mapping',await get_mappings('movie'));
//     app.set('tv_genre_mapping',await get_mappings('tv'));
//     // The rest of your app startup logic
// })();

const key = '1bfc204dded427db033e8556cb6d8a16'
const poster_base_link = 'https://image.tmdb.org/t/p/original'
const poster_placeholder_image = 'https://cinemaone.net/images/movie_placeholder.png'

const path = require('path')

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

app.use(express.static(path.join(__dirname,'dist/frontend')));


// const movie_genre_mapping={};
// const tv_genre_mapping={};

function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds  = date.getSeconds();
    seconds = ("0" + seconds).slice(-2);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes +  ':' + seconds + ' ' + ampm;
    return strTime;
  }


async function get_mappings(movtv){
    // console.log(r);

    if (movtv=='movie'){
        let r  = await get_data('https://api.themoviedb.org/3/genre/movie/list?api_key=1bfc204dded427db033e8556cb6d8a16&language=en-US')
        let movie_genre_mapping={};
        for(let mapping in r['genres']){
            // console.log(r.genres[mapping])
            movie_genre_mapping[r.genres[mapping].id]= r.genres[mapping].name;
        }
        return movie_genre_mapping;
    }
    else{
        let t =  await get_data('https://api.themoviedb.org/3/genre/tv/list?api_key=1bfc204dded427db033e8556cb6d8a16&language=en-US')
        let tv_genre_mapping={};
        for(let mapping in t['genres']){
            // console.log(t.genres[mapping])
            tv_genre_mapping[t.genres[mapping].id]= t.genres[mapping].name;
        }
        return tv_genre_mapping;
    
    }
        
    
}


app.use(cors());


function time_convert(num)
{ 
  let rt=''
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  if (hours >0)
    rt += hours + 'hrs '
  
  if (minutes>0)
    rt += minutes +'mins'
  return rt;         
}


async function get_data(url){
    try
    {
        let response = await axios.get(url);
        console.log(`Received a request ${r_count}`);
        r_count+=1;
        return response.data;
    }
    catch(error)
    {   
        //  console.log(url)     
        console.log('------------Error------------\n'+error+'\n-----------------------------');  
    }  
}




// ------------------------ Default route -------------------------
app.get('/',async function(req,res)
{   
    res.send('movie_genre_mapping');
});


// ------------------------ Now Playing (Main Carousel) -------------------------
app.get('/now-playing',async function(req,res){
    // 
    
    data = await get_data(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`);
    // console.log(data['results']);

    result = {};
    let count = 0
    
    for(let count in data['results'].slice(0,5) ){
       
        let row = data['results'][count]
        if (row.backdrop_path != null)
        {
        result[count] = {};
        result[count]['id'] = row['id'];
        result[count]['name'] = row['title'];
        result[count]['image'] = poster_base_link+row['backdrop_path']; // angular code
        // result[count]['image'] = poster_base_link+row['poster_path']; // app code
        }
    }

    res.send(result);

});

// ------------------------ Airing Today (Main Carousel) -------------------------
app.get('/airing-today',async function(req,res){
    // 
    
    data = await get_data(`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`);
    // console.log(data['results']);

    result = {};
    let count = 0
    
    for(let count in data['results'].slice(0,5) ){
       
        let row = data['results'][count]
        if (row.backdrop_path != null)
        {
        result[count] = {};
        result[count]['id'] = row['id'];
        result[count]['name'] = row['name'];
        result[count]['image'] = poster_base_link+row['backdrop_path']; // angular code
        // result[count]['image'] = poster_base_link+row['poster_path']; // app code
        }
    }

    res.send(result);

});


// ------------------------ Cast Card Endpoint -------------------------
app.get('/cast/:category/:id', async function(req,res)
{
    data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.id}/credits?api_key=${key}&language=en-US&page=1`);

    // console.log(data);
    result = {};
    // let count = 0
    
    result = [];
    for(let count in data['cast'] ){
       
        let row = data['cast'][count]
        
        if (row.profile_path != null)
        {
        let temp = {};
        temp['actor'] = row['name'];
        temp['id'] = row['id'];
        temp['character'] = row['character'];

        // if (row['profile_path'] == null)
        //     temp['image'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';  //change this
        // else
        temp['image'] = `https://image.tmdb.org/t/p/w500${row['profile_path']}`;
        
        
        result.push(temp);
    }
        // if (req.params.category == 'movie'){
            
        // }
        // else{
            
        // }
        
        
    }
        
    

    res.send(result.slice(0,10)); // sliced to limit to 10 cast members for app
    
});

// ------------------------ Reviews Endpoint -------------------------
app.get('/reviews/:category/:id', async function(req,res)
{

    
    data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.id}/reviews?api_key=${key}&language=en-US&page=1`);

    // console.log(data);
    result = {};
    
    result = [];
    for(let count in data['results'] ){
       
        let row = data['results'][count]
    
        let temp = {};
        temp['author'] = row['author'];
        temp['content'] = row['content'];

        let date = new Date(parseISOString(row['created_at']))
        // temp['date'] = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()},   ${formatAMPM(date)}`; // website
        temp['date'] = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`; // website
        temp['link'] = row['url'];

        if (row.author_details.rating == null)
            temp['rating'] = String(0); // Stringified for app
        else
            temp['rating'] = String(row.author_details.rating/2); // Stringified and divided by 2 for app

        let avatar_path = row.author_details.avatar_path;
        if (avatar_path == null)
            temp['image'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
        else if(row.author_details.avatar_path.includes('http'))
            temp['image'] = avatar_path.slice(1);
        else
            temp['image'] = `https://image.tmdb.org/t/p/original${avatar_path}`;
        
        
        // if (req.params.category == 'movie'){
            
        // }
        // else{
            
        // }
        result.push(temp);
        
        
    }
        
    

    res.send(result.slice(0,3)); //sliced to limit reviews to 3 for app
    
});


// ------------------------ Search (typeahead) Endpoint -------------------------
app.get('/search/:keyword',async function(req,res){
    // 
    
    data = await get_data(`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${req.params.keyword}`);
    // console.log(data['results']);

    result = new Array();
    // let count = 0
    
    for(let count in data['results'] ){
       
        let row = data['results'][count]

        if (row.name != "" && row.backdrop_path != null && row.type!='person' )
        {
            tempobj={};
            tempobj['id'] = row['id'];
            tempobj['image'] = poster_base_link+row['backdrop_path'];

            if (row.media_type=='movie'){
                tempobj['name'] = row['title'];
                tempobj['release_date'] = String((new Date(row['release_date'])).getFullYear());
            
            }
            else{
                tempobj['name'] = row['name'];
                tempobj['release_date'] = String((new Date(row['first_air_date'])).getFullYear());
            }
            tempobj['category'] = row['media_type'];
            tempobj['rating'] = String(row['vote_average']/2);

            
            result.push(tempobj);
        }
    }

    res.send(result);

});


// ------------------------ car-endpoint -------------------------
app.get('/car/:category/:cardcar', async function(req,res)
{
    if (req.params.category=='trending')
      { data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.cardcar}/day?api_key=${key}`);
        // console.log(`https://api.themoviedb.org/3/${req.params.cardcar}/${req.params.category}/day?api_key=${key}`);
    }
    else
       { data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.cardcar}?api_key=${key}&language=en-US&page=1`);
        // console.log(`https://api.themoviedb.org/3/${req.params.category}/${req.params.cardcar}?api_key=${key}&language=en-US&page=1`);
    }

    result = {};
    let count = 0
    
    for(let count in data['results'] ){
       
        let row = data['results'][count]
        result[count] = {};

        if (req.params.category == 'movie' || req.params.cardcar =='movie'){
            result[count]['name'] = row['title'];
            result[count]['release_date'] = String((new Date(row['release_date'])).getFullYear());
        }
        else{
            result[count]['name'] = row['name'];
            result[count]['release_date'] = String((new Date(row['first_air_date'])).getFullYear());
        }
        
        result[count]['id'] = row['id'];
        if (req.params.category=='trending')
            result[count]['category'] = req.params.cardcar;
        else
            result[count]['category'] = req.params.category;
        // result[count]['image'] = poster_base_link+row['poster_path'];

        if (row['poster_path']==null || row['poster_path']=='')
            result[count]['image'] = poster_placeholder_image
        else
            result[count]['image'] = poster_base_link+row['poster_path'];
            
    }

    res.send(result);
    
});


// ------------------------ reco watch car -------------------------
app.get('/reco/:category/:id', async function(req,res)
{
    
    data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.id}/recommendations?api_key=${key}&language=en-US&page=1`);

    result = {};
    let count = 0
    
    for(let count in data['results'] ){
       
        let row = data['results'][count]
        result[count] = {};

        if (req.params.category == 'movie' || req.params.cardcar =='movie'){
            result[count]['name'] = row['title'];
            result[count]['release_date'] = String((new Date(row['release_date'])).getFullYear());
        }
        else{
            result[count]['name'] = row['name'];
            result[count]['release_date'] = String((new Date(row['first_air_date'])).getFullYear());
        }
        
        result[count]['id'] = row['id'];
        // if (req.params.category=='trending')
            // result[count]['category'] = req.params.cardcar;
        // else
            result[count]['category'] = req.params.category;
        // result[count]['image'] = poster_base_link+row['poster_path'];

        if (row['poster_path']==null || row['poster_path']=='')
            result[count]['image'] = poster_placeholder_image
        else
            result[count]['image'] = poster_base_link+row['poster_path'];
        
    }

    res.send(result);
    
});


// ------------------------ similar watch car -------------------------
app.get('/similar/:category/:id', async function(req,res)
{
    
    data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.id}/similar?api_key=${key}&language=en-US&page=1`);

    // console.log(data);
    result = {};
    let count = 0
    
    for(let count in data['results'] ){
       
        let row = data['results'][count]
        result[count] = {};


        if (req.params.category == 'movie' || req.params.cardcar =='movie'){
            result[count]['name'] = row['title'];
        }
        else{
            result[count]['name'] = row['name'];
        }
        
        result[count]['id'] = row['id'];
        // if (req.params.category=='trending')
            // result[count]['category'] = req.params.cardcar;
        // else
            result[count]['category'] = req.params.category;

        if (row['poster_path']==null || row['poster_path']=='')
            result[count]['image'] = poster_placeholder_image
        else
            result[count]['image'] = poster_base_link+row['poster_path'];
        
    }

    res.send(result);
    
});




// ------------------------ Details Endpoint -------------------------
app.get('/details/:category/:id', async function(req,res)
{

    
    data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.id}?api_key=${key}&language=en-US&page=1`);
  
    // console.log(data);
    result = {};
    // let count = 0
    
    // for(let count in data ){
       
        // let row = data['results'][count]
        // result[count] = {};

        if (req.params.category == 'movie'){
            result['name'] = data['title'];

           
            //release date
            result['release_date'] = (new Date(data['release_date'])).getFullYear();

            //run time
            result['runtime'] = time_convert(data['runtime']);

        }
        else{
            result['name'] = data['name'];


            // release date
            result['release_date'] = (new Date(data['first_air_date'])).getFullYear();

            //runtime 
            result['runtime'] = time_convert(data['episode_run_time'][0]);
        }
        
        
        result['genres'] = data['genres'].map( x=> x.name).join(', ')
        result['lang'] = data['spoken_languages'].map( x=> x.english_name).join(', ')
        result['overview'] = data['overview'];
        result['rating'] = String(data['vote_average']/2); //converted to string and divided by 2 for app
        result['tagline'] = data['tagline'];
        // result['poster_path'] = data['poster_path'];
        
        if (data['poster_path']==null || data['poster_path']=='')
            result['poster_path'] = poster_placeholder_image
        else
            result['poster_path'] = poster_base_link+data['poster_path'];
        
        //extra
        result['id'] = data['id'];
        result['category'] = req.params.category;
        
        
    

    res.send(result);
    
});

// ------------------------ Video Endpoint -------------------------
app.get('/video/:category/:id', async function(req,res)
{
    video_data = await get_data(`https://api.themoviedb.org/3/${req.params.category}/${req.params.id}/videos?api_key=${key}&language=en-US&page=1`);
    // console.log(video_data);
    result = {};

    // video_data = {"id":118956,"results":[{"id":"602c68de2cde98003c2c50ab","iso_639_1":"en","iso_3166_1":"US","key":"JM-NqFX2jU8","name":"DOTA: Dragon's Blood | Date Announcement | Netflix","site":"YouTube","size":1080,"type":"Teaser"},
    // {"id":"603d906abb070d00462b2dff","iso_639_1":"en","iso_3166_1":"US","key":"F0evM-hBlcI","name":"DOTA: Dragon’s Blood | Official Trailer | Netflix","site":"YouTube","size":1080,"type":"Trailer"}
    // {"id":"603000035c3247003fdaca23","iso_639_1":"en","iso_3166_1":"US","key":"wWoW9-HBIwI","name":"DOTA: Dragon's Blood | Teaser | Netflix","site":"YouTube","size":1080,"type":"Teaser"}
    // ]}

    if (video_data['results'].length == 0)
        result['videoid'] = 'tzkWB85ULJY';
    else
     {  
        // let trailer = 0;
        for(let video_number in video_data['results'] )
        { 

            if(video_data['results'][video_number].type=="Trailer"){
                result['videoid'] = video_data['results'][video_number]['key'];
                // trailer = 1;
                break;
            }

            // if(video_data['results'][video_number].type=="Teaser"){
                result['videoid'] = video_data['results'][video_number]['key'];
            // }



            // result['videoid'] = video_data['results'][0]['key'];
        }
    }
    res.send(result);
    

});


// ------------------------ Actor Details Endpoint -------------------------
app.get('/actor-details/:id', async function(req,res)
{
    
    actor_data = await get_data(`https://api.themoviedb.org/3/person/${req.params.id}?api_key=${key}&language=en-US&page=1`);
    social_data= await get_data(`https://api.themoviedb.org/3/person/${req.params.id}/external_ids?api_key=${key}&language=en-US&page=1`);
   
    // console.log(actor_data);
    result = {};

    // if (video_data['results'].length == 0)
    //     result['videoid'] = 'tzkWB85ULJY';
    // else
    
    result['dob'] = actor_data['birthday'];
    result['name'] = actor_data['name'];


    if (actor_data['gender']==1){
        result['gender'] = 'Female' ;
    }
    else{
        result['gender'] = 'Male' ;
    }
    
    result['homepage'] = actor_data['homepage']; // can be null

    if (Array.isArray(actor_data['also_known_as']) && actor_data['also_known_as'].length== 0 )
        result['aka'] = null; 
    else
        result['aka'] = actor_data['also_known_as']; // can be null
    result['known_for'] = actor_data['known_for_department'];
    result['bio'] = actor_data['biography'];
    result['image'] = poster_base_link+actor_data['profile_path'];
    result['birthplace'] = actor_data['place_of_birth'];
    

    if (social_data['imdb_id'] != "" && social_data['imdb_id']!= null){
        result['imdb'] = `https://imdb.com/name/${social_data['imdb_id']}`;
    }

    if (social_data['facebook_id'] != "" && social_data['facebook_id']!= null){
        result['fb'] = `https://facebook.com/${social_data['facebook_id']}`;
    }

    if (social_data['instagram_id'] != "" && social_data['instagram_id']!= null){
        result['insta'] = `https://instagram.com/${social_data['instagram_id']}`;
    }

    if (social_data['twitter_id'] != "" && social_data['twitter_id']!= null){
        result['twtr'] = `https://twitter.com/${social_data['twitter_id']}`;
    }
    
    




    res.send(result);
    

});

app.use('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/frontend/index.html'));
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));

