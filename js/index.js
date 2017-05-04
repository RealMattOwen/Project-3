var userCards = [                          // Array called 'userCards' with objects for each card and name : value pairs of properties for each.
  {
    Picture : 'images/user-icon.png',
    Name : 'Shawn Garner',
    Handle : '@onlydesign',
    Tasks : 68
  },
  {
    Picture : 'images/user-icon.png',
    Name : 'Mathew Carron',
    Handle : '@mathew',
    Tasks : 0
  },
  {
    Picture : 'images/user-icon.png',
    Name : 'Leona Curtis',
    Handle : '@norules',
    Tasks : 34
  }/*                                      // Objects for pre-existing cards, commented out so new cards can be created.
  {
    Picture : 'images/user-icon.png',
    Name : 'Alta Black',
    Handle : '@altablack',
    Tasks : 74
  },
  {
    Picture : 'images/user-icon.png',
    Name : 'Abbie Roy',
    Handle : '@abbie',
    Tasks : 0
  },
  {
    Picture : 'images/user-icon.png',
    Name : 'Juan Bennet',
    Handle : '@bennet',
    Tasks : 0
  },
  {
    Picture : 'images/user-icon.png',
    Name : 'Jared Lambert',
    Handle : '@jared89',
    Tasks : 21
  },
  {
    Picture : 'images/user-icon.png',
    Name : 'Matt Owen',
    Handle : '@matt',
    Tasks : 0
  }*/
];

var increment = 0;                         // Declaring a variable called 'increment' and setting its value to '0'.

function updateCards(i) {                  // Function called updateCards, with a parameter of 'i', which passes the value current value of 'i' through to the function.

    for (i; i < userCards.length; i++) {   // For loop calling the value of 'i', then checking the condition of whether the value of 'i' is less than the length of the 'userCards' array, if it is then 'i' will increment by '1', if not it wont increment.
    
        var userPicture = userCards[i].Picture;     // Declaring a variable called 'userPicture' and storing the value of the 'Picture' key from the object that is in the 'userCards' array that is currently being accessed.
                                                    // All objects in the array will be iterated through because the object that is being accessed is dependant on the value of 'i', which will keep incrementing until the number of objects is reached because of the for loop that it is within.

        var userName = userCards[i].Name;           // Declaring a variable called 'userName' and storing the value of the 'Name' key from the object that is in the 'userCards' array that is currently being accessed.
                                                    // All objects in the array will be iterated through because the object that is being accessed is dependant on the value of 'i', which will keep incrementing until the number of objects is reached because of the for loop that it is within.

        var userHandle = userCards[i].Handle;       // Declaring a variable called 'userHandle' and storing the value of the 'Handle' key from the object that is in the 'userCards' array that is currently being accessed.
                                                    // All objects in the array will be iterated through because the object that is being accessed is dependant on the value of 'i', which will keep incrementing until the number of objects is reached because of the for loop that it is within.
        
        var userTasks = userCards[i].Tasks;         // Declaring a variable called 'userTasks' and storing the value of the 'Tasks' key from the object that is in the 'userCards' array that is currently being accessed.
                                                    // All objects in the array will be iterated through because the object that is being accessed is dependant on the value of 'i', which will keep incrementing until the number of objects is reached because of the for loop that it is within.

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

        // Declaring a variable called 'card' and storing the HTML and JS for the creation of a new card instead of copy and pasting it 8 times, 1 time for each card, it makes it easier to declare it once as a variable and reuse it.
        // I used '\' at the end of each line to utilise 'multi-line' javascript, which allows you to continue your code onto the next line but have it act as if it were on one line.
        // IMPORTANT: It is important to note that no spaces are left after the '\' at the end of the line as it will cause your code not to work.
        // Within the variable 'card', you can see the previously created variables: 'i', 'userPicture', 'userName', 'userHandle' and 'userTasks' being used, the values of each are being concatenated to the relevant line of HTML.
        // The variable 'i' is being used to create a unique id for every card created by being concatenated with the current id of 'card', because the id is utilising the variable 'i' which will be incremented every time the loop runs, each card will be given its own unique id.

        var addCard = $('#add-card'); // Declaring a variable called 'addCard' and storing the HTML element with the id of 'add-card' this is so that it can be used later on in the code without having to be redeclared multiple times.

        increment++;        // On this line you can see the variable 'increment' being incremented by one.

        switch(i) {         // Switch statement, runs appropriate case code depending on which case value matches the current value of 'i'.
                            // Switch statements can accept numbers as well as strings, be sure to enclose the case values within apostrophes, not sure what everyone else calls them, but these things ''.
            case 0:         // Example: case '0' runs if the value of 'i' is 0 and so on.
                addCard.before(card);               //
                $('#card0').hide().fadeIn(1000);
                break;
            case 1:
                addCard.before(card);
                $('#card1').hide().fadeIn(1000);
                break;
            case 2:
                addCard.before(card);
                $('#card2').hide().fadeIn(1000);
                break;
            case 3:
                addCard.before(card);
                $('#card3').hide().fadeIn(1000);
                break;
            case 4:
                addCard.before(card);
                $('#card4').hide().fadeIn(1000);
                break;
            case 5:
                addCard.before(card);
                $('#card5').hide().fadeIn(1000);
                break;
            case 6:
                addCard.before(card);
                $('#card6').hide().fadeIn(1000);
                break;
            case 7: 
                addCard.before(card);
                $('#card7').hide().fadeIn(1000);
                addCard.remove();
                break;
            default:
                break;
        }

    }

}

var pictureValidationPass = 'false';
var nameValidationPass = 'false';
var handleValidationPass = 'false';
var taskValidationPass = 'false';

var pictureInput = document.getElementById('picture');
var nameInput = document.getElementById('name');
var handleInput = document.getElementById('handle');
var taskInput = document.getElementById('tasks');

var blankInputCheck = '';
var imageURL = /(https?:\/\/.*\.(?:png|jpg))/i;
var letters = /^[a-zA-Z\s]+$/;
var lettersAndNumbers = /^[a-zA-Z0-9_]+$/;
var numbers = /^[0-9]+$/;

pictureInput.onInput = function() {
    if ((this.value.match(imageURL)) && (this.value !== blankInputCheck)) {
        pictureValidationPass = 'true';
    } else {
        pictureValidationPass = 'false';
    }
};

nameInput.onInput = function() {
    if (this.value.match(letters) && (this.value !== blankInputCheck)) {
        nameValidationPass = 'true';
    } else {
        nameValidationPass = 'false';
    }
};

handleInput.onInput = function() {
    if (this.value.match(lettersAndNumbers) && (this.value !== blankInputCheck)) {
        handleValidationPass = 'true';
    } else {
        handleValidationPass = 'false';
    }
};

taskInput.onInput = function() {
    if (this.value.match(numbers) && (this.value !== blankInputCheck)) {
        taskValidationPass = 'true';
    } else {
        taskValidationPass = 'false';
    }
};


$('#form').submit(function(e) {

		e.preventDefault();

        if((pictureValidationPass !== 'false') && (nameValidationPass !== 'false') && (handleValidationPass !== 'false') && (taskValidationPass !== 'false')) {
            userCards.push({
                Picture : pictureInput.value,
                Name : nameInput.value,
                Handle : '@' + handleInput.value,
                Tasks : taskInput.value
            }); 

            updateCards(increment);

            $('#modal').fadeOut();
            
            $("#form").each(function(){
                this.reset();
            });

        } else {
            $('#submit').attr("disabled", true).val('Please fill in all fields.');
            setTimeout(function() {
                $('#submit').val('Submit').attr("disabled", false);;
            }, 4000);
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
        if (event.target === this) {
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

    input.onInput = function () {
        memberSearch();
    };

});