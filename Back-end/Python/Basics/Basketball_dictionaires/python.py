player = []

class Player:
    
    def __init__(self, dictionary):
        self.name = dictionary["name"]
        self.age = dictionary["age"]
        self.position = dictionary["position"]
        self.team = dictionary["team"]
    
    def __repr__(self):
        return f"Name = {self.name}, Age = {self.age}, Position = {self.position}, Team = {self.team}"

    @classmethod
    def challengeThree(cls, dictionary):
        for i in dictionary:
            player.append(dictionary['name'])
            print(player)
            return cls

kevin = {
    "name": "Kevin Durant", 
    "age":34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
}
jason = {
    "name": "Jason Tatum", 
    "age":24, 
    "position": "small forward", 
    "team": "Boston Celtics"
}
kyrie = {
	"name": "Kyrie Irving", 
    "age":32, "position": "Point Guard", 
    "team": "Brooklyn Nets"
}
    
Kevin = Player(kevin)
Jason = Player(jason)
Kyrie = Player(kyrie)
print(Kevin)
print(Jason)
print(Kyrie)

players = [
    {
	"name": "Kevin Durant", 
	"age":34, 
	"position": "small forward", 
	"team": "Brooklyn Nets"
    },
    {
	"name": "Jason Tatum", 
	"age":24, 
	"position": "small forward", 
	"team": "Boston Celtics"
    },
    {
	"name": "Kyrie Irving", 
	"age":32, "position": "Point Guard", 
	"team": "Brooklyn Nets"
    },
    {
	"name": "Damian Lillard", 
	"age":33, "position": "Point Guard", 
	"team": "Portland Trailblazers"
    },
    {
	"name": "Joel Embiid", 
	"age":32, "position": "Power Foward", 
	"team": "Philidelphia 76ers"
    },
    {
	"name": "", 
	"age":16, 
	"position": "P", 
	"team": "en"
    }
]

new_team = []
for dicitionary in players:
    player = Player(dicitionary)
    new_team.append(player)

print(new_team)
