/**
Main
**/
/** Technologies used **/
var technologies = "Built Using Great Technologies."

$(function() {
    $("#html5")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_html5_red.png");
            $("#main_techUsedText").text("HTML5");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_html5_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#css3")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_css3_red.png");
            $("#main_techUsedText").text("CSS3");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_css3_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#javascript")
        .mouseover(function() { 
        $(this).attr("src", "images/latestTech_icons/programming_javascript_red.png");
        $("#main_techUsedText").text("Javascript");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_javascript_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#python")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_python_red.png");
            $("#main_techUsedText").text("Python");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_python_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#angular")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_angular_red.png");
            $("#main_techUsedText").text("Angular");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_angular_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#bootstrap")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_bootstrap_red.png");
            $("#main_techUsedText").text("Bootstrap");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_bootstrap_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#jquery")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_jquery_red.png");
            $("#main_techUsedText").text("JQuery");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_jquery_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#django")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_django_red.png");
            $("#main_techUsedText").text("Django");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_django_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#java8")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_java8_red.png");
            $("#main_techUsedText").text("Java 8");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_java8_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#android")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_android_red.png");
            $("#main_techUsedText").text("Android SDK");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_android_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#selenium")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_selenium_red.png");
            $("#main_techUsedText").text("Selenium");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_selenium_gray.png");
            $("#main_techUsedText").text(technologies);
        });
});
$(function() {
    $("#git")
        .mouseover(function() { 
            $(this).attr("src", "images/latestTech_icons/programming_git_red.png");
            $("#main_techUsedText").text("Git");
        })
        .mouseout(function() {
           $(this).attr("src", "images/latestTech_icons/programming_git_gray.png");
            $("#main_techUsedText").text(technologies);
            $(this).deleteSentence();
            deleteSentence("#main_techUsedText",technologies);
        });
});

$(function() {
    $("#facebookIcon")
        .mouseover(function() { 
            $(this).attr("src", "images/social_media_icons/social-1_logo-facebook-Red.svg");
        })
        .mouseout(function() {
           $(this).attr("src", "images/social_media_icons/social-1_logo-facebook.svg");
        });
});
$(function() {
    $("#githubIcon")
        .mouseover(function() { 
            $(this).attr("src", "images/social_media_icons/social-1_logo-github-Red.svg");
        })
        .mouseout(function() {
           $(this).attr("src", "images/social_media_icons/social-1_logo-github.svg");
        });
});
$(function() {
    $("#youtubeIcon")
        .mouseover(function() { 
            $(this).attr("src", "images/social_media_icons/social-1_logo-youtube-Red.svg");
        })
        .mouseout(function() {
           $(this).attr("src", "images/social_media_icons/social-1_logo-youtube.svg");
        });
});
$(function() {
    $("#instagramIcon")
        .mouseover(function() { 
            $(this).attr("src", "images/social_media_icons/social-1_logo-instagram-Red.svg");
        })
        .mouseout(function() {
           $(this).attr("src", "images/social_media_icons/social-1_logo-instagram.svg");
        });
});