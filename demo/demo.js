// This code doesn't work, it's only for picture purpose

var Messenger = function(el){
    'use strict';
    var m = this;

    m.init = function(){
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        'Thanks for visiting',
        'Kiitos käynnistä',
        'Merci de votre visite',
        '訪問していただきありがとうございます',
        'Tack för ditt besök',
        'Dank u voor uw bezoek',
        'Vielen Dank für Ihren Besuch',
        'Dziękujemy za odwiedzenie',
        'Благодарим вас за посещение',
        'Grazie per aver visitato',
        'Obrigado por visitar',
        'Gracias por visitar',
        'Hvala što ste posjetili',
        '謝謝你的光臨',
        'شكرا لزيارتكم',
        'आने के लिए धंयवाद'
      ];

      setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function(length){
      var random_text = '';
      while(random_text.length < length){
        random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      }

      return random_text;
    };