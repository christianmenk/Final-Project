/*            LOCATION PROTOTYPE/OBJECTS
  Each object in this document is specific to a location
  in the game. They are all objects made from the Location()
  prototype.
  
  
                                                          */
                                                                 
  function Location(id, name, desc, item, visited){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.item = item;
    this.visited = visited;
  }  
                                                     
  function initLocs(){
    
    var startField = new Location();
    startField.id = 0;
    startField.name = "Start Field";
    startField.desc = "You are in a grassy field. The burning wreckage of a small plane is scattered across the field."
    startField.item = false;
    startField.visited= false;

    var wooded = new Location();
    wooded.id = 1;
    wooded.name = "Wooded Area";
    wooded.desc = "wooded area.";
    wooded.item = true; 
    wooded.visited= false; 
    
    var overgrown = new Location();
    overgrown.id = 2;
    overgrown.name = "Overgrown Area";
    overgrown.desc = "heavily overgrown area with thick bushes blocking your path. There isn't much else here.";
    overgrown.item = false;
    overgrown.visited= false;
    
    var marshyArea = new Location();
    marshyArea.id = 3;
    marshyArea.name = "Marshy Area";
    marshyArea.desc = "marshy area with a river. This section of the river can be crossed, rocks are scattered across it. The river flows east, making a raft would allow you to float down it. There is likely civilization downstream.";
    marshyArea.item = false;
    marshyArea.visited= false;

    var rockyArea = new Location();
    rockyArea.id = 4;
    rockyArea.name = "Rocky Area";
    rockyArea.desc = "rocky area. It is hard terrain to walk on and you decide there is nothing of use here.";
    rockyArea.item = false;  
    rockyArea.visited= false;

    var pond = new Location();
    pond.id = 5;
    pond.name = "Pond Area";
    pond.desc = "small area with a pond that is covered with alge and other mossy looking plants. There isn't much else here."; 
    pond.item = false;  
    pond.visited= false;

    var campsite = new Location();
    campsite.id = 6;
    campsite.name = "Campsite Area";
    campsite.desc = "small abandoned campsite with a shed. Seeing something manmade surprises you.";
    campsite.item = true;  
    campsite.visited= false;

    var thickForest = new Location();
    thickForest.id = 7;
    thickForest.name = "Thick Forest";
    thickForest.desc = "thick forest. To your surprise, there are some plane scraps laying around here too. There may be more useful items laying around in surrounding areas.";
    thickForest.item = true;
    thickForest.visited= false; 

    var cliffBase = new Location();
    cliffBase.id = 8;
    cliffBase.name = "Cliff Base";
    cliffBase.desc = "small space at the base of a cliff. It is completely vertical and impossible to climb. There isn't much else here."; 
    cliffBase.item = false; 
    cliffBase.visited= false; 
    
    var mapForest = new Location();
    mapForest.id = 9;
    mapForest.name = "Map Forest";
    mapForest.desc = "lighter, less dense forest. There are a few more scraps on the ground."; 
    mapForest.item = true; 
    mapForest.visited= false;
    
    var endRoom = new Location();
    endRoom.id = 10;
    endRoom.name = "River/Civilization";
    endRoom.desc = "small opening next to the river, a perfect place to push off from a raft.";
    endRoom.item = false;
    endRoom.visited = false;
    
    var raftCompleteRoom = new Location();
    raftCompleteRoom.id = 11;
    raftCompleteRoom.name = "Floating on raft";
    raftCompleteRoom.desc = "By using the axe, you cut the logs into properly shaped pieces for a raft. You then use the rope to fasten these pieces together. After completing the raft, you place it in the water, hop on, and push yourself off into the current. After awhile of traveling down the river, you pass under a bridge, which has a road that leads to a small town. You found civilization and survived, you win! Game over!";
    raftCompleteRoom.item = false;
    raftCompleteRoom.visited = false;
    
    locale[0] = startField,
    locale[1] = wooded,
    locale[2] = overgrown,
    locale[3] = marshyArea,
    locale[4] = rockyArea, 
    locale[5] = pond, 
    locale[6] = campsite,
    locale[7] = thickForest,
    locale[8] = cliffBase,
    locale[9] = mapForest; 
    locale[10] = endRoom; 
    locale[11] = raftCompleteRoom;
  }
/*            ITEM PROTOTYPE/OBJECTS
  Each object in this section is specific to an item in the
  They are all objects made from the Item() prototype.
                                                          */
  function Item(id, name, desc, isTaken){
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.isTaken = isTaken;
  }
    
  function initItems(){
    
    var wood = new Item();
    wood.id = 1;
    wood.name = "wooden logs";
    wood.desc = " There are some wooden logs laying on the ground."
    wood.isTaken = false;
    
    var axe = new Item();
    axe.id = 6;
    axe.name = "axe";
    axe.desc = " The shed contains an axe."
    axe.isTaken = false;
    
    var map = new Item();
    map.id = 9;
    map.name = "map";
    map.desc = " One scrap grabs your attention, a map fragment from the plane!"
    map.isTaken = false;
    
    var rope = new Item();
    rope.id = 7;
    rope.name = "rope";
    rope.desc = " Among the scraps is a piece of rope."
    rope.isTaken = false;
    
    items[1] = wood,
    items[6] = axe,
    items[7] = rope,
    items[9] = map;
  }
  
  