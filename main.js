var ChannelName= "11tinic";
var Views = 0;
var ViewsCurrency = 0;
var Followers = 0;

function addView(number){
	Views = Views + number;
	document.getElementById("views").innerHTML = Views;
	ViewsCurrency = ViewsCurrency + number;
};

function updateFollowers(){
	var followerCost = Math.floor(10 * Math.pow(1.1,Followers));
    
	if(ViewsCurrency >= followerCost){
        Followers++;
    	ViewsCurrency = ViewsCurrency - followerCost;
        document.getElementById('followers').innerHTML = Followers;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,Followers));
	//document.getElementById('followerCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

function getChannelName()
{
    ChannelName = prompt("Enter your channel name: ", "11tinic");
	document.getElementById('channelName').innerHTML = ChannelName;
}

window.setInterval(function(){
	addView(Math.floor(Followers * Math.pow(0.98, Followers)));
	updateFollowers();
}, 1000);