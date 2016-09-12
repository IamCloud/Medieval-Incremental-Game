var ChannelName= "11tinic";
var Views = 0;
var ViewsCurrency = 0;
var Followers = 0;
var Energy = 0;
var streaming = false;

function addView(number){
	if (streaming){
		Views = Views + number;
		document.getElementById("views").innerHTML = Views;
		ViewsCurrency = ViewsCurrency + number;
	}
};

function updateFollowers(){
	var followerCost = Math.floor(10 * Math.pow(1.01,Followers));
    
	if(ViewsCurrency >= followerCost){
        Followers++;
		addEnergy(1);
    	ViewsCurrency = ViewsCurrency - followerCost;
        document.getElementById('followers').innerHTML = Followers;
		document.getElementById('followersPerView').innerHTML = Math.round(Followers/Views * 100) / 100;
    };
    var nextCost = Math.floor(10 * Math.pow(1.01,Followers));
}

function addEnergy(number){
	Energy = Energy + number;
	document.getElementById('energy').innerHTML = Energy;
}

function toggleStreaming() {
	if (streaming){
		streaming = false;
		document.getElementById('streamingButton').innerHTML = "Start Streaming";
		document.getElementById('changeImage').src = 'offline.png';
	}else{
		streaming = true;
		document.getElementById('streamingButton').innerHTML = "Stop Streaming";
		document.getElementById('changeImage').src = 'online.png';
	}
}

function eventDance() {
	if (streaming && Energy >= 15){
		Energy = Energy - 15;
		Followers = Followers + 20;
		document.getElementById('followers').innerHTML = Followers;
		document.getElementById('energy').innerHTML = Energy;
	}
}

function eventSing() {
	if (streaming && Energy >= 30){
		Energy = Energy - 30;
		Followers = Followers + 40;
		document.getElementById('followers').innerHTML = Followers;
		document.getElementById('energy').innerHTML = Energy;
	}
}

function getChannelName()
{
    ChannelName = prompt("Enter your channel name: ", "11tinic");
	document.getElementById('channelName').innerHTML = ChannelName;
}

window.setInterval(function(){
	if (streaming == true){
		addView(Math.floor(Followers/15));
		updateFollowers();
	}
}, 1000);