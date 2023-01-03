async function getCoderData() {
    let login_name = document.getElementById('login_name');
    const response = await fetch("https://api.github.com/users/"+ login_name.value +"");
    var coderData = await response.json();
    console.log(coderData)
    let login = document.getElementById('login');
    let logo = document.getElementById('avatar_url');
    login.innerHTML = coderData['name'] + " has " + coderData['followers'] + " followers";
    logo.innerHTML = '<img src="'+ coderData['avatar_url'] + '">';
    logo.innerHTML = '<img src="https://avatars.githubusercontent.com/u/43325621?v=4">';
    console.log(coderData['avatar_url']);
}
    


/*
data = {
    "avatar_url": "https://avatars.githubusercontent.com/u/43325621?v=4",
    "bio": null,
    "blog": "",
    "company": null,
    "created_at": "2018-09-16T23:29:16Z",
email
: 
null
events_url
: 
"https://api.github.com/users/adion81/events{/privacy}"
followers
: 
79
followers_url
: 
"https://api.github.com/users/adion81/followers"
following
: 
11
following_url
: 
"https://api.github.com/users/adion81/following{/other_user}"
gists_url
: 
"https://api.github.com/users/adion81/gists{/gist_id}"
gravatar_id
: 
""
hireable
: 
null
html_url
: 
"https://github.com/adion81"
id
: 
43325621
location
: 
null
login
: 
"adion81"
name
: 
"Adrien Dion"
node_id
: 
"MDQ6VXNlcjQzMzI1NjIx"
organizations_url
: 
"https://api.github.com/users/adion81/orgs"
public_gists
: 
0
public_repos
: 
126
received_events_url
: 
"https://api.github.com/users/adion81/received_events"
repos_url
: 
"https://api.github.com/users/adion81/repos"
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/adion81/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/adion81/subscriptions"
twitter_username
: 
null
type
: 
"User"
updated_at
: 
"2022-12-13T22:43:00Z"
url
: 
"https://api.github.com/users/adion81"
}
*/





