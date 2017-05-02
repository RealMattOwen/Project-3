var userCards = [
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Shawn Garner',
    'Handle' : '@onlydesign',
    'Tasks' : '68'
  },
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Mathew Carron',
    'Handle' : '@mathew',
    'Tasks' : '0'
  },
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Leona Curtis',
    'Handle' : '@norules',
    'Tasks' : '34'
  }/*,
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Alta Black',
    'Handle' : '@altablack',
    'Tasks' : '74'
  },
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Abbie Roy',
    'Handle' : '@abbie',
    'Tasks' : '0'
  },
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Juan Bennet',
    'Handle' : '@bennet',
    'Tasks' : '0'
  },
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Jared Lambert',
    'Handle' : '@jared89',
    'Tasks' : '21'
  },
  {
    'Picture' : 'images/user-icon.png',
    'Name' : 'Matt Owen',
    'Handle' : '@matt',
    'Tasks' : '0'
  }*/
];

var i;

var increment = 0;

function updateCards(i) {

    for (i; i < userCards.length; i++) {
    
        var userPicture = userCards[i].Picture;
        var userName = userCards[i].Name;
        var userHandle = userCards[i].Handle;
        var userTasks = userCards[i].Tasks;

        var card = '<div id="card' + i + '" class="card searchRef">\
                        <img class="profile-img" src="' + userPicture + '">\
                        <div class="username">\
                            <h4 class="name">' + userName + '</h4>\
                            <h6 class="handle">' + userHandle + '</h6>\
                        </div>\
                        <div class="icons">\
                            <div class="pencil"><span class="icon-pencil"></span></div>\
                            <div class="bell"><span class="icon-bell-o"></span></div>\
                            <div class="garbage"><span class="icon-delete-garbage-streamline"></span></div>\
                        </div>\
                        <div class="tasks">\
                            <div class="graph">&nbsp;</div>\
                            <div class="open-tasks">\
                                <span class="task-number">' + userTasks + '</span>\
                                <div class="task-text">Open Tasks</div>\
                            </div>\
                        </div>\
                        <div class="info">\
                            <div class="user-cards"><div class="info-button1-icon"><span class="icon-th-large"></span></div><h4 class="info-button1">cards</h4></div>\
                            <div class="user-profile"><div class="info-button2-icon"><span class="icon-torso"></span></div><h4 class="info-button2">profile</h4></div>\
                        </div>\
                    </div>';
        
        increment++;

        switch(i) {
            case 0:
                $('#add-card').before(card);
                $('#card0').hide().fadeIn(1000);
                break;
            case 1:
                $('#add-card').before(card);
                $('#card1').hide().fadeIn(1000);
                break;
            case 2:
                $('#add-card').before(card);
                $('#card2').hide().fadeIn(1000);
                break;
            case 3:
                $('#add-card').before(card);
                $('#card3').hide().fadeIn(1000);
                break;
            case 4:
                $('#add-card').before(card);
                $('#card4').hide().fadeIn(1000);
                break;
            case 5:
                $('#add-card').before(card);
                $('#card5').hide().fadeIn(1000);
                break;
            case 6:
                $('#add-card').before(card);
                $('#card6').hide().fadeIn(1000);
                break;
            case 7: 
                $('#add-card').before(card);
                $('#card7').hide().fadeIn(1000);
                $('#add-card').remove();
                break;
            default:
                break;
        }

    }

}

var pictureValidationPass = "false";
var nameValidationPass = "false";
var handleValidationPass = "false";
var taskValidationPass = "false";

var pictureInput = document.getElementById('picture');
var nameInput = document.getElementById('name');
var handleInput = document.getElementById('handle');
var taskInput = document.getElementById('tasks');

var blankInputCheck = '';
var imageURL = /(https?:\/\/.*\.(?:png|jpg))/i;
var letters = /^[a-zA-Z\s]+$/;
var lettersAndNumbers = /^[a-zA-Z0-9_]+$/;
var numbers = /^[0-9]+$/;

pictureInput.oninput = function() {
    if ((this.value.match(imageURL)) && (this.value !== blankInputCheck)) {
        pictureValidationPass = "true";
    } else {
        pictureValidationPass = "false";
    }
};

nameInput.oninput = function() {
    if (this.value.match(letters) && (this.value !== blankInputCheck)) {
        nameValidationPass = "true";
    } else {
        nameValidationPass = "false";
    }
};

handleInput.oninput = function() {
    if (this.value.match(lettersAndNumbers) && (this.value !== blankInputCheck)) {
        handleValidationPass = "true";
    } else {
        handleValidationPass = "false";
    }
};

taskInput.oninput = function() {
    if (this.value.match(numbers) && (this.value !== blankInputCheck)) {
        taskValidationPass = "true";
    } else {
        taskValidationPass = "false";
    }
};


$('#form').submit(function(e) {

		e.preventDefault();

        if((pictureValidationPass !== "false") && (nameValidationPass !== "false") && (handleValidationPass !== "false") && (taskValidationPass !== "false")) {
            userCards.push({
                'Picture' : pictureInput.value,
                'Name' : nameInput.value,
                'Handle' : '@' + handleInput.value,
                'Tasks' : taskInput.value
            }); 

            updateCards(increment);

            $('#modal').fadeOut();
            
            $("#form").each(function(){
                this.reset();
            });

        }

});

function memberSearch() {
    // Declare variables 
    var input, filter, profiles, profile, profileNames, profileName, searchNumber;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    profiles = document.getElementsByClassName('searchRef');

    // Loop through all table rows, and hide those who don't match the search query
    for (searchNumber = 0; searchNumber < profiles.length; searchNumber++) {

        profile = document.getElementsByClassName('name');

        profileNames = profile[searchNumber];
        profileName = profileNames.innerHTML;

        if (profileNames) {
            if (profileName.toUpperCase().indexOf(filter) > -1) {
                $(profiles[searchNumber]).css('display', 'inline-block');
            } else {
                $(profiles[searchNumber]).css('display', 'none');
            }
        } 
    }
}

$(document).ready(function() {
    
    updateCards(0);
    $('#add-btn').click(function() {
        $('#modal').fadeIn();
    });

    $("#modal").on("click",function(event) {
        if (event.target == this) {
            $("#modal").fadeOut();
        }
    });

    $('#menu').click(function() {
        $('#side-menu').slideToggle();
    });

    $('#filter').click(function() {
        $('#user-search').toggle('slide', {direction:'right'}, 400);
    });

    var input = document.getElementById('search-box');

    input.oninput = function () {
        memberSearch();
    };

});