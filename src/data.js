export const rooms = [
 {id:'library',name:'The Forbidden Library',short:'Forbidden Library',key:'Grammar Key',color:'#b59aff',symbol:'book',bg:'forbidden-library-background',door:'purple-door',intro:'Read the spell. Choose the door with the correct answer.',monster:'book-monster',warning:'Wrong spell! You shall not pass!',praise:'Excellent!',questions:[
 {text:'The witch usually ___ magic potions.',options:['is making','makes','make'],answer:1,hint:'Present Simple describes habits and routines. With he, she or it, add -s to the verb.'},
 {text:'Look! The ghosts ___ around the tower!',options:['fly','flies','are flying'],answer:2,hint:'Look! describes something happening now. Use am, is or are + verb-ing.'},
 {text:'Every morning, this vampire ___ breakfast.',options:['eats','is eating','eat'],answer:0,hint:'Every morning is a routine. Use Present Simple; think about he, she and it.'}]},
 {id:'gallery',name:'The Gallery of Shadows',short:'Gallery of Shadows',key:'Mystery Key',color:'#7be5bc',symbol:'portrait',bg:'gallery-background',door:'green-door',intro:'Listen to the riddle. Choose the portrait that holds the answer.',monster:'stone-guardian',warning:'Not this one! Look again!',praise:'Brilliant!',questions:[
 {text:"I have sharp teeth. I sleep in a coffin. I don't like sunlight. Who am I?",options:['Witch','Vampire','Ghost'],answer:1,hint:'Think of the creature with fangs that hides from the sun.'},
 {text:'I change when the full moon rises. I look like a wolf. Who am I?',options:['Werewolf','Skeleton','Monster'],answer:0,hint:'The full moon transforms this creature into a wild animal.'},
 {text:'I have eight legs. I make webs. What am I?',options:['Bat','Witch','Spider'],answer:2,hint:'Count the legs. This small creature spins a silky home.'}]},
 {id:'tower',name:'The Clock Tower',short:'Clock Tower',key:'Time Key',color:'#8cceff',symbol:'clock',bg:'clock-tower-background',door:'blue-door',intro:'Complete the spells to bring the clockwork back to life.',monster:'ghost-knight',warning:'Time is running out! Try again!',praise:'Amazing!',questions:[
 {text:'Listen! Someone ___ at the door.',options:['knocks','is knocking','knock'],answer:1,hint:'Listen! tells us the action is happening now. Use is + verb-ing with someone.'},
 {text:'The skeleton ___ in the castle every night.',options:['dances','is dancing','dance'],answer:0,hint:'Every night describes a repeated action. Use Present Simple with a singular subject.'},
 {text:'Look! The bats ___ above the castle!',options:['flies','fly','are flying'],answer:2,hint:'The action is happening now. With a plural subject, use are + verb-ing.'}]}
];
export const welcome = "Welcome to Boo's Academy! Oh no! The castle gates are locked! Find three magic keys to escape!";
