
$(document).ready(function() {
    $(".backgroundsound").get(0).play();
});

// var words = new Array("the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "words", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "called", "who", "oil", "sit", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "over", "new", "sound", "take", "only", "little", "work", "know", "place", "years", "live", "me", "back", "give", "most", "very", "after", "things", "our", "just", "name", "good", "sentence", "man", "think", "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "does", "another", "well", "large", "must", "big", "even", "such", "because", "turn", "here", "why", "ask", "went", "men", "read", "need", "land", "different", "home", "us", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don’t", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "late", "miss", "idea", "enough", "eat", "face", "watch", "far", "Indian", "real", "almost", "let", "above", "girl", "sometimes", "mountains", "cut", "young", "talk", "soon", "list", "song", "being", "leave", "family", "it’s", "body", "music", "color", "stand", "sun", "questions", "fish", "area", "mark", "dog", "horse", "birds", "problem", "complete", "room", "knew", "since", "ever", "piece", "told", "usually", "didn’t", "friends", "easy", "heard", "order", "red", "door", "sure", "become", "top", "ship", "across", "today", "during", "short", "better", "best", "however", "low", "hours", "black", "products", "happened", "whole", "measure", "remember", "early", "waves", "reached", "listen", "wind", "rock", "space", "covered", "fast", "several", "hold", "himself", "toward", "five", "step", "morning", "passed", "vowel", "true", "hundred", "against", "pattern", "numeral", "table", "north", "slowly", "money", "map", "farm", "pulled", "draw", "voice", "seen", "cold", "cried", "plan", "notice", "south", "sing", "war", "ground", "fall", "king", "town", "I’ll", "unit", "figure", "certain", "field", "travel", "wood", "fire", "upon", "done", "English", "road", "half", "ten", "fly", "gave", "box", "finally", "wait", "correct", "oh", "quickly", "person", "became", "shown", "minutes", "strong", "verb", "stars", "front", "feel", "fact", "inches", "street", "decided", "contain", "course", "surface", "produce", "building", "ocean", "class", "note", "nothing", "rest", "carefully", "scientists", "inside", "wheels", "stay", "green", "known", "island", "week", "less", "machine", "base", "ago", "stood", "plane", "system", "behind", "ran", "round", "boat", "game", "force", "brought", "understand", "warm", "common", "bring", "explain", "dry", "though", "language", "shape", "deep", "thousands", "yes", "clear", "equation", "yet", "government", "filled", "heat", "full", "hot", "check", "object", "am", "rule", "among", "noun", "power", "cannot", "able", "six", "size", "dark", "ball", "material", "special", "heavy", "fine", "pair", "circle", "include", "built", "can’t", "matter", "square", "syllables", "perhaps", "bill", "felt", "suddenly", "test", "direction", "center", "farmers", "ready", "anything", "divided", "general", "energy", "subject", "Europe", "moon", "region", "return", "believe", "dance", "members", "picked", "simple", "cells", "paint", "mind", "love", "cause", "rain", "exercise", "eggs", "train", "blue", "wish", "drop", "developed", "window", "difference", "distance", "heart", "site", "sum", "summer", "wall", "forest", "probably", "legs", "sat", "main", "winter", "wide", "written", "length", "reason", "kept", "interest", "arms", "brother", "race", "present", "beautiful", "store", "job", "edge", "past", "sign", "record", "finished", "discovered", "wild", "happy", "beside", "gone", "sky", "grass", "million", "west", "lay", "weather", "root", "instruments", "meet", "third", "months", "paragraph", "raised", "represent", "soft", "whether", "clothes", "flowers", "shall", "teacher", "held", "describe", "drive", "cross", "speak", "solve", "appear", "metal", "son", "either", "ice", "sleep", "village", "factors", "result", "jumped", "snow", "ride", "care", "floor", "hill", "pushed", "baby", "buy", "century", "outside", "everything", "tall", "already", "instead", "phrase", "soil", "bed", "copy", "free", "hope", "spring", "case", "laughed", "nation", "quite", "type", "themselves", "temperature", "bright", "lead", "everyone", "method", "section", "lake", "iron", "within", "dictionary", "hair", "age", "amount", "scale", "pounds", "although", "per", "broken", "moment", "tiny", "possible", "gold", "milk", "quiet", "natural", "lot", "stone", "act", "build", "middle", "speed", "count", "consonant", "someone", "sail", "rolled", "bear", "wonder", "smiled", "angle", "fraction", "Africa", "killed", "melody", "bottom", "trip", "hole", "poor", "let’s", "fight", "surprise", "French", "died", "beat", "exactly", "remain", "dress", "cat", "couldn’t", "fingers", "row", "least", "catch", "climbed", "wrote", "shouted", "continued", "itself", "else", "plains", "gas", "England", "burning", "design", "joined", "foot", "law", "ears", "glass", "you’re", "grew", "skin", "valley", "cents", "key", "president", "brown", "trouble", "cool", "cloud", "lost", "sent", "symbols", "wear", "bad", "save", "experiment", "engine", "alone", "drawing", "east", "choose", "single", "touch", "information", "express", "mouth", "yard", "equal", "decimal", "yourself", "control", "practice", "report", "straight", "rise", "statement", "stick", "party", "seeds", "suppose", "woman", "coast", "bank", "period", "wire", "pay", "clean", "visit", "bit", "whose", "received", "garden", "please", "strange", "caught", "fell", "team", "God", "captain", "direct", "ring", "serve", "child", "desert", "increase", "history", "cost", "maybe", "business", "separate", "break", "uncle", "hunting", "flow", "lady", "students", "human", "art", "feeling", "supply", "corner", "electric", "insects", "crops", "tone", "hit", "sand", "doctor", "provide", "thus", "won’t", "cook", "bones", "mall", "board", "modern", "compound", "mine", "wasn’t", "fit", "addition", "belong", "safe", "soldiers", "guess", "silent", "trade", "rather", "compare", "crowd", "poem", "enjoy", "elements", "indicate", "except", "expect", "flat", "seven", "interesting", "sense", "string", "blow", "famous", "value", "wings", "movement", "pole", "exciting", "branches", "thick", "blood", "lie", "spot", "bell", "fun", "loud", "consider", "suggested", "thin", "position", "entered", "fruit", "tied", "rich", "dollars", "send", "sight", "chief", "Japanese", "stream", "planets", "rhythm", "eight", "science", "major", "observe", "tube", "necessary", "weight", "meat", "lifted", "process", "army", "hat", "property", "particular", "swim", "terms", "current", "park", "sell", "shoulder", "industry", "wash", "block", "spread", "cattle", "wife", "sharp", "company", "radio", "we’ll", "action", "capital", "factories", "settled", "yellow", "isn’t", "southern", "truck", "fair", "printed", "wouldn’t", "ahead", "chance", "born", "level", "triangle", "molecules", "France", "repeated", "column", "western", "church", "sister", "oxygen", "plural", "various", "agreed", "opposite", "wrong", "chart", "prepared", "pretty", "solution", "fresh", "shop", "suffix", "especially", "shoes", "actually", "nose", "afraid", "dead", "sugar", "adjective", "fig", "office", "huge", "gun", "similar", "death", "score", "forward", "stretched", "experience", "rose", "allow", "fear", "workers", "Washington", "Greek", "women", "bought", "led", "march", "northern", "create", "British", "difficult", "match", "win", "doesn’t", "steel", "total", "deal", "determine", "evening", "hoe", "rope", "cotton", "apple", "details", "entire", "corn", "substances", "smell", "tools", "conditions", "cows", "track", "arrived", "located", "sir", "seat", "division", "effect", "underline", "view");

// var width= $(window).width();
// var height= $(window).height();



// $(window).resize(function(){
// if (height>0 &&  height<85) {
//   $(".footstep").get(0).play();
//   console.log('footstep is working');

// }else if (height>85){ $('.footstep').stop();}


// if (height>85 && height<130){
//   $(".traintalk").get(0).play();
//    console.log('traintalk is working');
// }

// if (height>130 && height<145){
//   $(".nature").get(0).play();
//    console.log('nature is working');
// }


// if (height>145 && height<430){
//   $(".riverside").get(0).play();
//    console.log('riverside is working');
// }


// if (height>430 && height<580){
//   $(".trainstation").get(0).play();
//    console.log('trainstation is working');
// }


// if (height>430 && height<580){
//   $(".book").get(0).play();
//    console.log('trainstation is working');
// }

// })


// $( window ).resize(function() {

//     if (width<200) {

//  $('body').css("body","red");

// $("p").html(words[Math.floor(Math.random()*words.length)]);
// $("p").append(" ");
// $("p").append(words[Math.floor(Math.random()*words.length)]);
// $("p").append(" ");
// $("p").append(words[Math.floor(Math.random()*words.length)]);


// }
// })


$(document).ready( function(){
  $('body').css('font-size',$(window).height()-300)
})

$( document ).ready( function() {
            var $body = $('body'); //Cache this for performance

            var setBodyScale = function() {
                var scaleSource = $body.width(),
                    scaleFactor = 0.35,                     
                    maxScale = 600,
                    minScale = 30; //Tweak these values to taste

                var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

                if (fontSize > maxScale) fontSize = maxScale;
                if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

                $('body').css('font-size', fontSize + '%');
            }

            $(window).resize(function(){
                setBodyScale();
                console.log("resized")
                // $(".big").css('font-size',($(window).width()*0.2));
                $(".small").css('font-size',($(window).height()*3));
                $(".big").css('font-size',($(window).height()*3));

                // $(".small6").css('font-size',($(window).width()*0.2));


                
            });

        
            setBodyScale();
        });





$(window).resize(function(){

  console.log("resize is work")

var width= $(window).width();
var height= $(window).height();


 $(".camera").get(0).play(this);



 if (height>70&& height<85) {
    $('body').css('background-color','#000000');
    $('.small1').css('display','block');
    $('.small1').css('color','#cce6ff');
}else{
    $('.small1').css('display','none');
}

 if (height>85  && height<100) {
    $('body').css('background-color','#1a1a1a');
    $('.small2').css('display','block')
    $('.small2').css('color','#cc3300');
    
}else{
    $('.small2').css('display','none');
}

 if (height>100&& height<115) {
    $('body').css('background-color','#4d4d4d');
    $('.small3').css('display','block');
     $('.small3').css('color','#cc3300');
 
}else{
    $('.small3').css('display','none');
}



 if (height>115&& height<130) {
    $('body').css('background-color','#808080');
    $('.small4').css('display','block');
     $('.small4').css('color','#cc3300');
     
}else{
    $('.small4').css('display','none');
}



 if (height>130&& height<145) {
    $('body').css('background-color','#b3b3b3');
    $('.small5').css('display','block');
  $('.small5').css('color','##66ccff');
}else{
    $('.small5').css('display','none');
}


 if (height>160&& height<175) {
    $('body').css('background-color',' #e6e6e6');
    $('.small6').css('display','block');
    $('.small6').css('color','##66ccff');
}else{
    $('.small6').css('display','none');
}



 if (height>175&& height<190) {
    $('body').css('background-color',' #e6e6e6');
    $('.small7').css('display','block');
  $('.small7').css('color','#00e6e6');

}else{
    $('.small7').css('display','none');
}




 if (height>190&& height<205) {
    $('body').css('background-color',' #e6e6e6');
    $('.small8').css('display','block');
       $('.small8').css('color','#00e6e6');
}else{
    $('.small8').css('display','none');
}




 if (height>205&& height<220) {
    $('body').css('background-color',' #e6e6e6');
    $('.small9').css('display','block');
      $('.small9').css('color','#00e6e6');
}else{
    $('.small9').css('display','none');
}


 if (height>220&& height<235) {
    $('body').css('background-color',' #e6e6e6');
    $('.small10').css('display','block');
     $('.small10').css('color','#00e6e6');
}else{
    $('.small10').css('display','none');
}
//  if (height>800&& height<900) {
//     $('body').css('background-color','#e6e6e6');
//     $('.small7').css('display','block');
// }else{
//     $('.small7').css('display','none');
// }

 if (height>235&& height<250) {
    $('body').css('background-color',' #e6e6e6');
    $('.small11').css('display','block');
      $('.small11').css('color','#00e6e6');
}else{
    $('.small11').css('display','none');
}

 if (height>250&& height<265) {
    $('body').css('background-color',' #e6e6e6');
    $('.small12').css('display','block');
      $('.small12').css('color','#00e6e6');
}else{
    $('.small12').css('display','none');
}

 if (height>265&& height<280) {
    $('body').css('background-color',' #e6e6e6');
    $('.small13').css('display','block');
      $('.small13').css('color','#00e6e6');
}else{
    $('.small13').css('display','none');
}

 if (height>280&& height<295) {
    $('body').css('background-color',' #e6e6e6');
    $('.small14').css('display','block');
     $('.small14').css('color','#00e6e6');
}else{
    $('.small14').css('display','none');
}


 if (height>295&& height<310) {
    $('body').css('background-color',' #e6e6e6');
    $('.small15').css('display','block');
     $('.small15').css('color','#00e6e6');
}else{
    $('.small15').css('display','none');
}

 if (height>310&& height<325) {
    $('body').css('background-color',' #e6e6e6');
    $('.small16').css('display','block');
      $('.small16').css('color','#00e6e6');
}else{
    $('.small16').css('display','none');
}

 if (height>325&& height<340) {
    $('body').css('background-color',' #e6e6e6');
    $('.small17').css('display','block');
      $('.small17').css('color','#00e6e6');
}else{
    $('.small17').css('display','none');
}

 if (height>340&& height<355) {
    $('body').css('background-color',' #e6e6e6');
    $('.small18').css('display','block');
     $('.small18').css('color','#00e6e6');
}else{
    $('.small18').css('display','none');
}

 if (height>355&& height<370) {
    $('body').css('background-color',' #e6e6e6');
    $('.small19').css('display','block');
     $('.small9').css('color','#00e6e6');
}else{
    $('.small19').css('display','none');
}

 if (height>370&& height<385) {
    $('body').css('background-color',' #e6e6e6');
    $('.small20').css('display','block');
      $('.small20').css('color','#00e6e6');
}else{
    $('.small20').css('display','none');
}

 if (height>385&& height<400) {
    $('body').css('background-color',' #e6e6e6');
    $('.small21').css('display','block');
      $('.small21').css('color','#00e6e6');
}else{
    $('.small21').css('display','none');
}

 if (height>400&& height<415) {
    $('body').css('background-color',' #e6e6e6');
    $('.small22').css('display','block');
     $('.small22').css('color','#00e6e6');
}else{
    $('.small22').css('display','none');
}

 if (height>415&& height<430) {
    $('body').css('background-color',' #e6e6e6');
    $('.small23').css('display','block');
      $('.small23').css('color','#00e6e6');
}else{
    $('.small23').css('display','none');
}

 if (height>430&& height<445) {
    $('body').css('background-color',' #e6e6e6');
    $('.small24').css('display','block');
     $('.small24').css('color','#000033');
}else{
    $('.small24').css('display','none');
}

 if (height>445&& height<460) {
    $('body').css('background-color',' #e6e6e6');
    $('.small25').css('display','block');
      $('.small25').css('color','#000033');
}else{
    $('.small25').css('display','none');
}

 if (height>460&& height<475) {
    $('body').css('background-color',' #e6e6e6');
    $('.small26').css('display','block');
       $('.small26').css('color','#000033');
}else{
    $('.small26').css('display','none');
}

 if (height>475&& height<490) {
    $('body').css('background-color',' #e6e6e6');
    $('.small27').css('display','block');
       $('.small27').css('color','#000033');
}else{
    $('.small27').css('display','none');
}

 if (height>490&& height<505) {
    $('body').css('background-color',' #e6e6e6');
    $('.small28').css('display','block');
       $('.small28').css('color','#000033');
}else{
    $('.small28').css('display','none');
}

 if (height>505&& height<520) {
    $('body').css('background-color',' #e6e6e6');
    $('.small29').css('display','block');
      $('.small29').css('color','#000033');
}else{
    $('.small29').css('display','none');
}

 if (height>520&& height<535) {
    $('body').css('background-color',' #e6e6e6');
    $('.smal30').css('display','block');
      $('.small30').css('color','#000033');
}else{
    $('.small30').css('display','none');
}

 if (height>535&& height<550) {
    $('body').css('background-color',' #e6e6e6');
    $('.small31').css('display','block');
       $('.small31').css('color','#000033');
}else{
    $('.small31').css('display','none');
}

 if (height>550&& height<565) {
    $('body').css('background-color',' #e6e6e6');
    $('.small32').css('display','block');
      $('.small32').css('color','#000033');
}else{
    $('.small32').css('display','none');
}

 if (height>565&& height<580) {
    $('body').css('background-color',' #e6e6e6');
    $('.small33').css('display','block');
       $('.small33').css('color','#000033');
}else{
    $('.small33').css('display','none');
}

 if (height>595&& height<610) {
    $('body').css('background-color',' #e6e6e6');
    $('.small34').css('display','block');
     $('.small34').css('color','#336699');
}else{
    $('.small34').css('display','none');
}

 if (height>610&& height<625) {
    $('body').css('background-color',' #e6e6e6');
    $('.small35').css('display','block');
   $('.small35').css('color','#336699');
}else{
    $('.small35').css('display','none');
}

 if (height>625&& height<640) {
    $('body').css('background-color',' #e6e6e6');
    $('.small36').css('display','block');
    $('.small36').css('color','#336699');
}else{
    $('.small36').css('display','none');
}

 if (height>640&& height<655) {
    $('body').css('background-color',' #e6e6e6');
    $('.small37').css('display','block');
  
}else{
    $('.small37').css('display','none');
}

 if (height>655&& height<670) {
    $('body').css('background-color',' #e6e6e6');
    $('.small38').css('display','block');
    
}else{
    $('.small38').css('display','none');
}

 if (height>670&& height<685) {
    $('body').css('background-color',' #e6e6e6');
    $('.small39').css('display','block');
   
}else{
    $('.small39').css('display','none');
}

 if (height>685&& height<700) {
    $('body').css('background-color',' #e6e6e6');
    $('.small40').css('display','block');
   
}else{
    $('.small40').css('display','none');
}

 if (height>700&& height<715) {
    $('body').css('background-color',' #e6e6e6');
    $('.small41').css('display','block');
    
}else{
    $('.small41').css('display','none');
}

 if (height>715&& height<730) {
    $('body').css('background-color',' #e6e6e6');
    $('.small42').css('display','block');
     
}else{
    $('.small42').css('display','none');
}

 if (height>730&& height<745) {
    $('body').css('background-color',' #e6e6e6');
    $('.small43').css('display','block');
    
}else{
    $('.small43').css('display','none');
}

 if (height>745&& height<760) {
    $('body').css('background-color',' #e6e6e6');
    $('.small44').css('display','block');
    
}else{
    $('.small44').css('display','none');
}

 if (height>760&& height<775) {
    $('body').css('background-color',' #e6e6e6');
    $('.small45').css('display','block');
    
}else{
    $('.small45').css('display','none');
}

 if (height>775&& height<790) {
    $('body').css('background-color',' #e6e6e6');
    $('.small46').css('display','block');
    
}else{
    $('.small46').css('display','none');
}


 

//  if (height>800&& height<850) {
//     $('body').css('background-color',' #e6e6e6');
//     $('.small16').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small16').css('display','none');
// }


//  if (height>850&& height<900) {
//     $('body').css('background-color',' #e6e6e6');
//     $('.small16').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small16').css('display','none');
// }














 if (width<130&& width>100) {
    $('body').addClass('colorchange2');
    $('.big1').css('display','block');
     $('.big1').css('color','#00cc99');
     $(".footstep").get(0).play();
    console.log('colorchange2 is working');
    // $(".big1").css('font-size',($(window).height()*0.3)); 
}else{
    $('.big1').css('display','none');
     $('body').removeClass('colorchange2');
}



 if (width<160&& width>130) {
    $('body').addClass('colorchange2');
    $('.big2').css('display','block');
     $('.big2').css('color','#00cc99');
     $(".traintalk").get(0).play();
     // $(".big2").css('font-size',($(window).width()*0.4));

}else{
    $('.big2').css('display','none');
         $('body').removeClass('colorchange2');
}



 if (width<190&& width>160) {
     $('body').addClass('colorchange3');
    $('.big3').css('display','block');
      $('.big3').css('color','#ffe6cc');
      $(".traintalk").get(0).play();

    console.log('colorchange3 is working')
     // $(".big3").css('font-size',($(window).width()*0.5));

}else{
    $('.big3').css('display','none');
    $('body').removeClass('colorchange3');
}




 if (width<220&& width>190) {
   $('body').addClass('colorchange3');

    $('.big4').css('display','block');
     $('.big4').css('color','#ffe6cc');
}else{
    $('.big4').css('display','none');
    $('body').removeClass('colorchange3');
}




 if (width<250&& width>220) {
   $('body').addClass('colorchange4');
    $('.big5').css('display','block');
    $('.big5').css('color','#000080');
     $(".nature").get(0).play();
}else{
    $('.big5').css('display','none');
    $('body').removeClass('colorchange4');
}






 if (width<280&& width>250) {
    $('body').addClass('colorchange4');
    $('.big6').css('display','block');
    $('.big6').css('color','#000080');
    console.log('colorchange4 is working')
}else{
    $('.big6').css('display','none');
     $('body').removeClass('colorchange4');
}






 if (width<310&& width>280) {
    $('body').addClass('colorchange5');
    $('.big7').css('display','block');
    $('.big7').css('color','#3973ac');
     $(".riverside").get(0).play();
    console.log('colorchange5 is working');
}else{
    $('.big7').css('display','none');
    $('body').removeClass('colorchange5');
}




 if (width<340&& width>310) {
    $('body').addClass('colorchange5');
    $('.big8').css('display','block');
     $('.big8').css('color','#3973ac');
}else{
    $('.big8').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<370&& width>340) {
    $('body').addClass('colorchange5');
    $('.big9').css('display','block');
     $('.big9').css('color','#3973ac');
}else{
    $('.big9').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<400&& width>370) {
   $('body').addClass('colorchange5');
    $('.big10').css('display','block');
    $(".riverside").get(0).play();
     $('.big10').css('color','#3973ac');
}else{
    $('.big10').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<430&& width>400) {
   $('body').addClass('colorchange5');
    $('.big11').css('display','block');
     $('.big11').css('color','#3973ac');
}else{
    $('.big11').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<460&& width>430) {
   $('body').addClass('colorchange5');
    $('.big12').css('display','block');
     $('.big12').css('color','#3973ac');
}else{
    $('.big12').css('display','none');
    $('body').removeClass('colorchange5');
}

 if (width<490&& width>460) {
   $('body').addClass('colorchange5');
    $('.big13').css('display','block');
    $(".riverside").get(0).play();
     $('.big13').css('color','#3973ac');
}else{
    $('.big13').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<520&& width>490) {
   $('body').addClass('colorchange5');
    $('.big14').css('display','block');
     $('.big14').css('color','#3973ac');
}else{
    $('.big14').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<550&& width>520) {
   $('body').addClass('colorchange5');
    $('.big15').css('display','block');
     $('.big15').css('color','#3973ac');
}else{
    $('.big15').css('display','none');
    $('body').removeClass('colorchange5');
}

 if (width<580&& width>550) {
  $('body').addClass('colorchange5');
    $('.big16').css('display','block');
     $('.big16').css('color','#3973ac');
}else{
    $('.big16').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<610&& width>580) {
    $('body').addClass('colorchange5');
    $('.big17').css('display','block');
     $('.big17').css('color','#3973ac');
}else{
    $('.big17').css('display','none');
    $('body').removeClass('colorchange5');
}

 if (width<640&& width>610) {
   $('body').addClass('colorchange5');
    $('.big18').css('display','block');
     $('.big18').css('color','#3973ac');
}else{
    $('.big18').css('display','none');
    $('body').removeClass('colorchange5');
}

 if (width<670&& width>640) {
    $('body').addClass('colorchange5');
    $('.big19').css('display','block');
     $('.big19').css('color','#3973ac');
}else{
    $('.big19').css('display','none');
    $('body').removeClass('colorchange5');
}

 if (width<700&& width>670) {
    $('body').addClass('colorchange5');
    $('.big20').css('display','block');
     $('.big20').css('color','#3973ac');
     $(".trainstation").get(0).play();
}else{
    $('.big20').css('display','none');
    $('body').removeClass('colorchange5');
}

 if (width<760&& width>730) {
    $('body').addClass('colorchange5');
    $('.big21').css('display','block');
     $('.big21').css('color','#3973ac');
}else{
    $('.big21').css('display','none');
    $('body').removeClass('colorchange5');
}


 if (width<820&& width>790) {
  $('body').addClass('colorchange6');
    $('.big22').css('display','block');
     $('.big22').css('color','#ffb3b3');
    console.log('colorchange6 is working')
}else{
    $('.big22').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<850&& width>820) {
  $('body').addClass('colorchange6');
    $('.big23').css('display','block');
     $('.big23').css('color','#ffb3b3');
}else{
    $('.big23').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<880&& width>850) {
  $('body').addClass('colorchange6');
    $('.big24').css('display','block');
     $('.big24').css('color','#ffb3b3');
}else{
    $('.big24').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<910&& width>880) {
   $('body').addClass('colorchange6');
    $('.big25').css('display','block');
     $('.big25').css('color','#ffb3b3');
}else{
    $('.big25').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<940&& width>910) {
    $('body').addClass('colorchange6');
    $('.big26').css('display','block');
     $('.big26').css('color','#ffb3b3');
}else{
    $('.big26').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<970&& width>940) {
   $('body').addClass('colorchange6');
    $('.big27').css('display','block');
     $('.big27').css('color','#ffb3b3');
}else{
    $('.big27').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<1000&& width>970) {
   $('body').addClass('colorchange6');
    $('.big28').css('display','block');
     $('.big28').css('color','#ffb3b3');
}else{
    $('.big28').css('display','none');
    $('body').removeClass('colorchange6');
}

 if (width<1060&& width>1030) {
   $('body').addClass('colorchange6');
    $('.big29').css('display','block');
     $('.big29').css('color','#ffb3b3');
}else{
    $('.big29').css('display','none');
    $('body').removeClass('colorchange6');
}


 if (width<1090&& width>1060) {
    $('body').addClass('colorchange6');
    $('.big30').css('display','block');
     $('.big30').css('color','#ffb3b3');
}else{
    $('.big30').css('display','none');
       $('body').removeClass('colorchange6');
}

 if (width<1120&& width>1090) {
    $('body').addClass('colorchange6');
    $('.big31').css('display','block');
     $('.big31').css('color','#ffb3b3');
}else{
    $('.big31').css('display','none');
       $('body').removeClass('colorchange6');
}


 if (width<1150&& width>1120) {
    $('body').addClass('colorchange6');
    $('.big32').css('display','block');
     $('.big32').css('color','#ffb3b3');
}else{
    $('.big32').css('display','none');
       $('body').removeClass('colorchange6');
}


 if (width<1180&& width>1150) {
    $('body').css('background-color','#000000');
    $('.big33').css('display','block');
    $('.big33').css('color','#336699');
    $(".hotel").get(0).play();

     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big33').css('display','none');
}


 if (width<1210&& width>1180) {
    $('body').css('background-color','#000000');
    $('.big34').css('display','block');
     $('.big34').css('color','#336699');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big34').css('display','none');
}


 if (width<1240&& width>1210) {
    $('body').css('background-color','#000000');
    $('.big35').css('display','block');
     $('.big35').css('color','#336699');
}else{
    $('.big35').css('display','none');
}


 if (width<1270&& width>1240) {
    $('body').css('background-color','#000000');
    $('.big36').css('display','block');
     $('.big36').css('color','#336699');
}else{
    $('.big36').css('display','none');
}


 if (width<1300&& width>1270) {
    $('body').css('background-color','#000000');
    $('.big37').css('display','block');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big37').css('display','none');
}


 if (width<1330&& width>1300) {
    $('body').css('background-color','#000000');
    $('.big38').css('display','block');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big38').css('display','none');
}

 if (width<1360&& width>1330) {
    $('body').css('background-color','#000000');
    $('.big39').css('display','block');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big39').css('display','none');
}


 if (width<1390&& width>1360) {
    $('body').css('background-color','#000000');
    $('.big40').css('display','block');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big40').css('display','none');
}

 if (width<1420&& width>1390) {
    $('body').css('background-color','#000000');
    $('.big41').css('display','block');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big41').css('display','none');
}


 if (width<1440&& width>1420) {
    $('body').css('background-color','#000000');
    $('.big42').css('display','block');
     // $(".big7").css('font-size',($(window).width()*1.5));

}else{
    $('.big42').css('display','none');
}


//  if (width<520&& width>490) {
//     $('body').css('background-color','#000000');
//     $('.big43').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big43').css('display','none');
// }


//  if (width<520&& width>490) {
//     $('body').css('background-color','#000000');
//     $('.big44').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big44').css('display','none');
// }


//  if (width<520&& width>490) {
//     $('body').css('background-color','#000000');
//     $('.big45').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big45').css('display','none');
// }


//  if (width<520&& width>490) {
//     $('body').css('background-color','#000000');
//     $('.big46').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big46').css('display','none');
// }


});






//  if (width<600&& width>550) {
//     $('body').css('background-color','#000000');
//     $('.big13').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big13').css('display','none');
// }




//  if (width<550&& width>500) {
//     $('body').css('background-color','#000000');
//     $('.big13').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big13').css('display','none');
// }


//  if (width<500&& width>550) {
//     $('body').css('background-color','#000000');
//     $('.big13').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big13').css('display','none');
// }




//  if (width<500&& width>550) {
//     $('body').css('background-color','#000000');
//     $('.big13').css('display','block');
//      // $(".big7").css('font-size',($(window).width()*1.5));

// }else{
//     $('.big13').css('display','none');
// }

// });









// $(document).ready(function(){
//   console.log("ready is working")

//     $("div").mouseup(function(){
//       console.log("mouseup is working")

//         $(this).after(

//           $(".small").css('font-size',($(window).height()*0.3));
//                 $(".big").css('font-size',($(window).height()*0.5));
                
//                 );
//     });
//     $("div").mousedown(function(){
//         $(this).after(
//             $(".small").css('font-size',($(window).height()*2));
//                 $(".big").css('font-size',($(window).height()*3));
//          );
//     });
// });



  $(window).ready(function(){
      
            
                console.log("ready is working")
                // $(".big").css('font-size',($(window).width()*0.2));

                 $("div").mouseup(function(){
                $(".small").css('font-size',($(window).height()*3));
                $(".big").css('font-size',($(window).height()*3));
 });
                // $(".small6").css('font-size',($(window).width()*0.2));
                $("div").mousedown(function(){
                $(".small").css('font-size',($(window).height()*0.1));
                $(".big").css('font-size',($(window).height()*0.1));
 });            $(".small").css('top','80%');
                $(".big").css('top','80%');

                
            });















// $(window).scroll(function(){

// var width= $(window).width();
// var height= $(window).height();


// console.log();
 
//     });












// $(window).resize(function(){


//  if (width==1340 && height==690){
//      $('body').css('background-color','#bfbfbf');
//      $('mid2').css('display','block');
//  }
//  else{
//     $('mid2').css('display','none');
//  }


//  if (width==1240 && height==590) {
//      $('body').css('background-color','#bfbfbf');
//      $('mid3').css('display','block');
//  }
//  else{
//     $('mid3').css('display','none');
//  }

//  if (width==1140 && height==490) {
//      $('body').css('background-color','#bfbfbf');
//      $('mid4').css('display','block');
//  }
//  else{
//     $('mid4').css('display','none');
//  }


//  if (width==1040 && height==390) {
//      $('body').css('background-color','#bfbfbf');
//      $('mid5').css('display','block');
//  }
//  else{
//     $('mid5').css('display','none');
//  }


// })








// $(window).resize(function(){

// var width= $(window).width();
// var height= $(window).height();


//  $(".camera").get(0).play(this);



//  if (height>200&& height<300) {
//     $('body').css('background-color','#000000');
//     $('.small1').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small1').css('display','none');
// }


//  if (height>300&& height<400) {
//     $('body').css('background-color','#1a1a1a');
//     $('.small2').css('display','block')
//      $(".footstep").get(0).play();
// }else{
//     $('.small2').css('display','none');
// }




//  if (height>400&& height<500) {
//     $('body').css('background-color','#4d4d4d');
//     $('.small3').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small3').css('display','none');
// }



//  if (height>500&& height<600) {
//     $('body').css('background-color','#808080');
//     $('.small4').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small4').css('display','none');
// }



//  if (height>600&& height<700) {
//     $('body').css('background-color','#b3b3b3');
//     $('.small5').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small5').css('display','none');
// }


//  if (height>700&& height<800) {
//     $('body').css('background-color',' #e6e6e6');
//     $('.small6').css('display','block');
//      $(".footstep").get(0).play();
// }else{
//     $('.small6').css('display','none');
// }



















// $(window).resize(function(){

// 	// var elem= $(this);
// 	// var num= Math.random()*10;
//  	var width = $(window).width();
//     var height = $(window).height();
//     var range;

//    $('body').html( + height +'height'+ width +'width');
   
// })



// if (width<200) {

// 	$('body').css("body","red");

// }
// elem.closest('body').find('.color')
// 	body(this.tagName + 'width:' + elem.width()+', height'+ elem.height());


// 	if (width<900&& width>800 && height<700 && height > 600) {
// 		$('body').css('background-color','red');
// 		$('body').css('display','show');
// 	}

// 	if (width<800&& width>700 && height<700 && height > 600) {
// 		$('body').css('background-color','blue');
		

// 	}
// 	if (width<700&& width>600 && height<700 && height > 600) {
// 		$('body').css('background-color','#00cc00');
		

// 	}
// 	if (width<600&& width>500 && height<700 && height > 600) {
// 		$('body').css('background-color','#8c1aff');
	

// 	}
// 	if (width<500&& width>400 && height<700 && height > 600) {
// 		$('body').css('background-color','#1a75ff');
	
// 	}
// 	if (width<400&& width>300 && height<700 && height > 600) {
// 		$('body').css('background-color','#ff4d4d');
		
// 	}
// 	if (width<300&& width>200 && height<700 && height > 600) {
// 		$('body').css('background-color','#7575a3');
		
// 	}
// 	if (width<200&& width>100 && height<700 && height > 600) {
// 		$('body').css('background-color','#99ccff');

// 	}
// 	if (width<100&& width>0 && height<700 && height > 600) {
// 		$('body').css('background-color','#e6e600');
		

// 	}











// 	if (width<900&& width>800 && height<600 && height > 500) {
// 		$('body').css('background-color','#00b359');
		
// 	}


// 	if (width<900&& width>800 && height<500 && height > 400) {
// 		$('body').css('background-color','#e6e600');
// 	}



// 	if (width<900&& width>800 && height<400 && height > 300) {
// 		$('body').css('background-color','#cc00cc');
// 	}



// 	if (width<900&& width>800 && height<300 && height > 200) {
// 		$('body').css('background-color','#bf4080');
// 	}



// 	if (width<900&& width>800 && height<200 && height > 100) {
// 		$('body').css('background-color','#8585ad');
// 	}



// 	if (width<900&& width>800 && height<100 && height > 0) {
// 		$('body').css('background-color','#9999ff');
// 	}

// 	else{
// 		$('body').css('background-color','black');
// 	}
// 	if (width<400,height<500) {
// 		$('body').css('background-color','blue');

// 	}
  
//   if (300<width<400,400<height<500) {
// 		$('body').css('background-color','blue');
		
// 	}
// });




















