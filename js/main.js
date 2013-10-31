 $("a").focus(function(){
    $(this).closest("#submenu1").addClass("hovered");
       });
       
 $("a").focus(function(){
    $(this).closest("#submenu2").addClass("hovered");
       });     
       
        $("a").focusout(function(){
    $(this).closest("#submenu1").removeClass("hovered");
       });
       
 $("a").focusout(function(){
    $(this).closest("#submenu2").removeClass("hovered");
       }); 
       
        $("a").focus(function(){
    $(this).closest("#arrow").addClass("arrowjs");
       });     
       
        $("a").focusout(function(){
    $(this).closest("#arrow").removeClass("arrowjs");
       });

/*^vet inte riktigt vad denna kod gör, men det jag använd den till är att skapa en klass baserat 
på submenu1 och 2 som sedan går att manipulera när en a-tagg har focus... det går inte så bra.
Johan hjälpte mig, istället för "toggleClass" så använde vi add class, 
sen lade vi till att "focusout" skulle removeclass <-- innebär att när man inte längre har
focus på denna klass så försvinner klassen.*/
