$(document).ready(function () {
    $('#keyboard-upper-container').hide()


    $(document).keydown(function (e) {
        let shifted = e.shiftKey
        if (e.keyCode == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }

    });

    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css("background-color", "yellow")
    })

    $(document).keyup(function (e) {
        $(`#${e.key.charCodeAt(0)}`).css("background-color", "#f5f5f5")
        if (e.keyCode == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

    })
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    let sentenceIndex = 0; 
    let letterIndex = 0; 
    let currentSentence = sentences[sentenceIndex]; 
    let currentLetter = currentSentence[letterIndex]; 
    let sIndex = 0;
    let lIndex = 0;
    let errorCount = 0;
    let startTime;
    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);
    $('#target-letter').text(currentLetter); 
    $('#sentence').text(currentSentence); 


    $(document).keypress(function (e) {
        e.preventDefault();
        $('#' + e.which).addClass('highlighted');
        if (!startTime) {
            startTime = e.timeStamp;
        }
        if (e.which === currentLetter.charCodeAt(0)) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            errorCount++
        }

        lIndex++;

        if (lIndex === currentSentence.length) {

            currentSentence = sentences[sIndex];
            $('#sentence').text(currentSentence);
            lIndex = 0;
            currentLetter = currentSentence.charAt(lIndex);
            $('#target-letter').text(currentLetter);
            $('#feedback').empty();
            $('#yellow-block').css('left', '15px');
        }
        else {
            currentLetter = currentSentence.charAt(lIndex);
            $('#target-letter').text(currentLetter);
            $('#yellow-block').css('left', '+=17.5');
        }
   
    });

    function updateSentence() {
        currentSentence = SENTENCES[sentenceIndex];
        $('#sentence').text(currentSentence);
    } if (lIndex = 0) {
        updateSentence();
    }

    

    
});



//     if (event.shiftKey) {
    //         $('#keyboard-upper-container').show();
    //     }
    // }
    
    // $(document).on('shiftkey', function(){
        //         if (true) {
            //             $('#keyboard-upper-container').show();
            //         }});

            
            // $('#keyboard-upper-container').css('visibility:','hidden')
            // let upKey = document.getElementById('keyboard-upper-container')
            // $(upKey).css('visibility: hidden')
            
            
            // $(document).on('shiftkey', function(){
                //     if (true) {
                    //         $(upKey).css('visibility:','default')
                    //     } else {
                        //         $(upKey).css('visibility:','hidden')
                        //     }
                        // } );
                        


                        // $(document).on('keyup keydown', function(e){shifted = e.shiftKey} )
                        // $(upKey).css('visibility:','default')
                        
                        
                        
                        
                        // let downKey = document.querySelector('keyboard-lower-container')
                        
                        // let shiftChange = document.KeyboardEvent.shiftKey 
                        
                        // let shiftKeyPressed = $(document).on('keyup keydown', function(e){shifted = e.shiftKey} );
                        
                        // if (shiftKeyPressed == true) {
                            //     $(upKey).css('visibility:','default')
                            
                            
                            
                            
                            // let a = $('#97').on('keyPress', function (){
                                //     if (charCode == 97 )
                                //     $('#97').css('background-color:','yellow')
                                // })

                                
                                // let a = $('#97').on('keyPress', function (){
                                    //     if (charCode == 97 )
                                    //     console.log('aaaaaaaa')
                                    // })
                                    
                                    // function pressA (keyPress) {
                                        //     let a = keyPress.charCode
                                        //     if (a == 97 || a == 65) {
                                            //       console.log("aaaAAAAAaaaaaAaaaAAAa");
                                            //     }
                                            //   }
                                            
                                            // function pressA (keyPress) {
                                                //     let a = keyPress.charCode
                                                //     if (a == 97 || a == 65) {
                                                    //       return true;
                                                    //     }
                                                    //     if (pressA == true) {
                                                        //         console.log('aAAAAaaaaAAAAAAAAAAAAAAA')
                                                        //     }
                                                        //   }
                                                        // }; if (shifted == false) {
                                                        //     $('#keyboard-upper-container').hide();
                                                        //     $('#keyboard-lower-container').show();
                                                        // }
                                                        //     function updateSentence() {
                                                        //         currentSentence = sentences[sIndex];
                                                        //         $('#sentence').text(currentSentence);
                                                        //         lIndex = 0;
                                                        //         currentLetter = currentSentence.charAt(lIndex);
                                                        //         $('#target-letter').text(currentLetter);
                                                        //         $('#feedback').empty();
                                                        //         $('#yellow-block').css('left', '15px');
                                                        //     }
                                                        //     function feedbackClear() {
                                                        //         $('#feedback').html('');
                                                        //     }
                                                        //     function blockReset() {
                                                        //         $('#yellow-block').css("left", '');
                                                        //     }
                                                        
                                                        //     function letterWatch(e) { 
                                                        //         expected = String.fromCharCode(e.which);
                                                        //         glyphicon(expected);
                                                        //         if (expected === currentLetter) {
                                                        //             blockMove();
                                                        //             if (letterIndex === (currentSentence.length - 1)) { 
                                                        //                 feedbackClear();
                                                        //                 if (sentenceIndex >= (SENTENCES.length - 1)) {
                                                        //                     gameEnd();
                                                        //                 } else { 
                                                        //                     letterIndex = 0;
                                                        //                     updateSentence();
                                                        //                     updateLetter();
                                                        //                     blockReset();
                                                        //                 }
                                                        //             } else { 
                                                        //                     clockStarted = true;
                                                        //                     stopwatch = setInterval(clock, 1000);
                                                        //                 }
                                                        //                 letterIndex++;
                                                        //                 updateSentence();
                                                        //                 updateLetter();
                                                        //             }
                                                        //         } else {
                                                        //             mistakes++;
                                                        //         };
                                                        
                                                        //         function gameEnd() { 
                                                        //             clearInterval(stopwatch);
                                                        //             $('#sentence').text("You've reached the end!");
                                                        //             $('#target-letter').text('');
                                                        //             $(document).unbind('keypress', keypressMaster);
                                                        //             $(document).keypress(keyHilight);
                                                        //             $('#yellow-block').toggle();
                                                        //             results();
                                                        //             setTimeout(playAgain, 5000);
                                                        //         }
                                                        //     }
                                                        //     $(document).keypress(keypressMaster);
                                                        // function keypressMaster(e) {
                                                        //     keyHilight(e);
                                                        //     letterWatch(e);
                                                        // }