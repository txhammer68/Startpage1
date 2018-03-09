/* *************************** *\
Code is poetry.
iam [at] johnho.ca
\* *************************** */

/* Settings *\
\*==========*/
var settings = {
    //"links_path" : "links.txt",
    
    "links_path" : "links.txt",
    //\_added support for mulitple links pages
    //  tried using JS to parse all the files in the links directory but that's not possible in JS
    //  tried using JS + php but this will require that a local server to be running (for PHP to work)
    //     so, getting the user to input manually in the setting is best. ["links.txt","links/dev.txt","links/rmotr.txt"]

    "title":{
	// "add_symbol": "&#2384",
	"default":"Welcome"
    },
    //\_ Page's title: enter your personal mantra

    "navigation": {
	"newWindow": true,
	//\_ open links and search results in new tab?
	"menu_auto_close": false
	//\_ close links dropdown menu after a link is clicked?
    },

    "fonts":{
	"body": "Clear Sans",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
	//\_ should links and search engine label be all uppercase?
    },
    
    "icons": {
	"showIcons": true
    },

    "clock": {
	"IsMilitary": false
    },

    "weather": {
	"show": true,
	"geolocate": true,
	"default_loco": "Houston, Texas",
	"link":"http://wttr.in"
	//\ optional link for weather to a 3rd party app
    },
    
    "background": {
	"source":{
	    "baseUrl": "https://source.unsplash.com/collection/",
	    "dayColId":"407887",
	    "nightColId":"407877",
	    "dawnColId": "407882",
	    "duskColId": "407878"
	},
	"daily": false
	//\_ should background picture in each collection be only updated once per day?
    },
	
    "search": {
	"engines": [// format is [search url, search varible name (different for each site), label to be shown]
		    ["http://google.com/search", "q","GOOGLE"],
		    ["http://images.google.com/search", "q","GImg"],
		    ["http://google.com/maps", "q", "GMap"],
		    ["http://google.com/news", "q", "GNews"],
		    ["http://youtube.com/results", "search_query", "YouTube"],
		    ["http://soundcloud.com/search/sounds", "q", "SoundCloud"],
		    ["http://bing.com/search", "q", "Bing"],
		    ["http://github.com/search", "q", "GitHub"],
		    ["http://duckduckgo.com/", "q", "DuckDuckGo"],
		    ["http://wolframalpha.com/input/", "i", "WolframAlpha"]
		    ],
	"focusSearch": true,
	//\_ should the search box be selected on load?
	"showQuotes": true,
	"quotes":[
		  "Logic will get you from A to Z; imagination will get you everywhere. ~ Einstein",
		  "This Universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
          "Everybody’s, somebody, someday ~ Chris Stapelton",
		  "You are not a drop in the ocean. You are the entire ocean in a drop. ~ Rumi",
		  "Learn from yesterday, live for today, hope for tomorrow. The important thing is to not stop questioning.  ~Einstein",
		  "All that you seek is already within you. ~ Ram Dass",
		  " A dream is not something that you wake up from, but something that wakes you up.~ Charlie Hedges",
		  "One’s the devil, one keeps driving me insane, At times I wonder if they ain’t both the same ~ Chris Stapelton",
		  "In 20 years, you probably won't even remember this. ~ Anonymous",
          "In the end, it's not the years in your life that count. It's the life in your years. ~Abraham Lincoln",
          "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us. ~Alexander Graham Bell",
          "Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent. ~Billy Graham",
          "Life is a journey that must be traveled no matter how bad the roads and accommodations. ~Oliver Goldsmith",
          "You can't always get what you want, But if you try, sometimes you find you get what you need! ~Mick Jagger"
		  ]
    }
};
