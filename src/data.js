const data = {
    phases: [
        {
            name: 'Growth',
            content: <ul><li>Choose one of your spirit's growth options.</li></ul>
        },
        {
            name: 'Gain Energy',
            content: <ul><li>Gain Energy equal to highest Gain Energy number visible.</li></ul>
        },
        {
            name: 'Play Cards',
            content: <ul><li>Play any number of Power Cards up to the Card Plays limit. Pay Energy for Cards Played.</li></ul>
        },
        {
            name: 'Fast Powers',
            content: <ul><li>Resolve Power Cards with Fast Speed.</li></ul>
        },
        {
            name: 'Event',
            content: <ul><li>Draw an Event card.</li><li>If it is the first turn of the game, discard it without resolving.</li><li>Resolve the Event card. <ul><li>If the Event card depends on Invader Stage, check the stage on the top card of the Invader Deck.</li><li>If the Event Card depends on Terror Level, check the current Terror Level.</li></ul></li></ul>
        },
        {
            name: 'Fear Cards',
            content: <ul><li>Resolve all earned Fear Cards by taking all earned Fear Cards, flip the entire stack of cards over (if more than one), and then read and resolve them in order.</li></ul>
        },
        {
            name: 'Ravage',
            content: <ul><li>Ravage in all lands matching the Ravage Invader Card.</li></ul>
        },
        {
            name: 'Build',
            content: <ul><li>Build in all lands matching the Build Invader Card.</li></ul>
        },
        {
            name: 'Explore',
            content: <ul><li>Reveal the top card of the Invader deck. Explore in all lands matching the revealed Explore Invader Card.</li><li>If the card has a Stage II Escalation Symbol, resolve the Escalation.</li></ul>
        },
        {
            name: 'Slow Powers',
            content: <ul><li>Resolve Power Cards with Slow Speed.</li></ul>
        },
        {
            name: 'Time Passes',
            content: <ul><li>Clear all damage on Invaders and Dahan.</li></ul>
        },
    ],
    adversaries: [
        {
            "Name": "THE TSARDOM OF RUSSIA",
            "Additional Loss Condition": "Hunters Swarm the Island: Put BEAST Destroyed by Adversary rules on this panel. If there are ever more BEAST on this panel than on the island, the Invaders win.",
            "Escalation": "Stalk the Predators: On each board, add 2 EXPLORER (total) among lands with BEAST. If you can't, instead add 2 EXPLORER among lands with BEAST on a different board.",
            "Level": {
                "1": {
                    "Fear Cards": [3, 3, 4], "Game Effects": "Hunters Seek Shell and Hide: During Setup, on each board, add 1 BEAST and 1 EXPLORER to the highest-numbered land with TOWN/CITY. During Play, EXPLORER do +1 Damage. When Ravage adds BLIGHT to a land (including cascades), Destroy 1 BEAST in that land."
                },
                "2": {
                    "Fear Cards": [4, 3, 4], "Game Effects": "A Sense for Impending Disaster: The first time each Action woudl Destroy EXPLORER: If possible, 1 of those EXPLORER is instead Pushed; 1 FEAR when you do so."
                },
                "3": {
                    "Fear Cards": [4, 4, 3], "Game Effects": "Competition Among Hunters: Ravage Cards also match lands with 3 or more EXPLORER. (If the land already matched the Ravage Card, is still Ravages just once.)"
                },
                "4": {
                    "Fear Cards": [4, 4, 4], "Game Effects": "Accelerated Exploitation: When making the Invader Deck, put 1 Stage III Card after each Stage II Card. (New Deck Order: 111-2-3-2-3-2-3-2-33)"
                },
                "5": {
                    "Fear Cards": [4, 5, 4], "Game Effects": "Entrench in the Face of Fear: Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards. When one is revealed, immediately place it in the Build space (face-up)."
                },
                "6": {
                    "Fear Cards": [5, 5, 4], "Game Effects": "Pressure for Fast Profit: After the Ravage Step of turn 2+, on each board where it added no BLIGHT: In the land with the most EXPLORER (min. 1), add 1 EXPLORER and 1 TOWN."
                }
            }
        },
        {
            "Name": "THE KINGDOM OF ENGLAND",
            "Additional Loss Condition": "Proud & Mighty Capital: If 7 or more TOWN/CITY are ever in a single land, the Invaders win.",
            "Escalation": "Building Boom: On each board with TOWN/CITY, Build in the land with the most TOWN/CITY.",
            "Level": {
                "1": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Indentured Servants Earn Land: Invader Build actions affect lands without Invaders, if they are adjacent to at least 2 TOWN/CITY before the Build Action."
                },
                "2": {
                    "Fear Cards": [4, 4, 3], "Game Effects": "Criminals and Malcontents: During Setup, on each board add 1 CITY to land #1, and 1 TOWN to land #2."
                },
                "3": {
                    "Fear Cards": [4, 5, 4], "Game Effects": "High Immigration (I): Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard."
                },
                "4": {
                    "Fear Cards": [4, 5, 5], "Game Effects": "High Immigration (full): The extra Build tile remains out the entire game."
                },
                "5": {
                    "Fear Cards": [4, 5, 5], "Game Effects": "Local Autonomy: TOWN/CITY have +1 Health."
                },
                "6": {
                    "Fear Cards": [4, 5, 4], "Game Effects": "Independent Resolve: During Setup, add an additional FEAR to the Fear Pool per player in the game. During any Invader phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot)."
                }
            }
        },
        {
            "Name": "THE KINGDOM OF SWEDEN",
            "Additional Loss Condition": "None",
            "Escalation": "Swayed by the Invaders: After Invaders Explore into each land this Phase, if that land has at least as many Invaders as DAHAN, replace 1 DAHAN with 1 TOWN.",
            "Level": {
                "1": {
                    "Fear Cards": [3, 3, 3], "Game Effects": "Heavy Mining: If the Invaders do at least 6 Damage to the land during Ravage, add an extra BLIGHT. The additional BLIGHT does not destroy PRESENCE or cause cascades."
                },
                "2": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Population Pressure at Home: During Setup, on each board add 1 CITY to land #4. On boards wehre land #4 starts with BLIGHT, put that BLIGHT in land #5 instead."
                },
                "3": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Fine Steel for Tools and Guns: TOWN deal 3 Damage. CITY deal 5 Damage."
                },
                "4": {
                    "Fear Cards": [3, 4, 4], "Game Effects": "Royal Backing: During Setup, after adding all other Invaders, discard the top card of the Invader Deck. On each Board, add 1 TOWN to the land of that terrain with the fewest Invaders."
                },
                "5": {
                    "Fear Cards": [4, 4, 4], "Game Effects": "Mining Rush: When Ravaging adds at least 1 BLIGHT to a land, also add 1 TOWN to an adjacent land without TOWN/CITY. Cascading BLIGHT does not cause this effect."
                },
                "6": {
                    "Fear Cards": [4, 4, 5], "Game Effects": "Prospecting Outpost: During Setup, on each board add 1 TOWN and 1 BLIGHT to land #8. The BLIGHT comes from the box, not the Blight Card."
                }
            }
        },
        {
            "Name": "THE HAPSBURG MONARCHY (LIVESTOCK COLONY)",
            "Additional Loss Condition": "Irreparable Damage: Track how many BLIGHT come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win.",
            "Escalation": "Seek Prime Territory: After Exploring: on each board with 4 or fewer BLIGHT, add 1 TOWN to a land without TOWN/BLIGHT. On each board with 2 or fewer BLIGHT, do so again.",
            "Level": {
                "1": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Migratory Herders: After the normal Build Step: In each land matching a Build Card, Gather 1 TOWN from a land not matching a Build Card. (In board/land order.)"
                },
                "2": {
                    "Fear Cards": [4, 5, 2], "Game Effects": "More Rural Than Urban: During Setup, on each board, add 1 TOWN to land #2 and 1 TOWN to the highest-numbered land without Setup symbols. During Play, when Invaders would Build 1 CITY in an Inland land, the instead Build 2 TOWN."
                },
                "3": {
                    "Fear Cards": [4, 5, 3], "Game Effects": "Fast Spread: When making the Invader Deck, Remove 1 additional Stage I Card. (New deck order: 11-2222-33333)"
                },
                "4": {
                    "Fear Cards": [4, 5, 3], "Game Effects": "Herds Thrive in Verdant Lands: TOWN in lands without BLIGHT are Durable: they have +2 Health, and \"Destroy TOWN\" effects instead deal 2 Damage (to TOWN only) per TOWN they could Destroy. (\"Destroy all TOWN\" works normally.)"
                },
                "5": {
                    "Fear Cards": [4, 6, 3], "Game Effects": "Wave of Immigration: Before the initial Explore, put the Hapsburg Reminder Card under the top 5 Invader Cards. When revealed, on each board, add 1 CITY to a Coastal land without CITY and 1 TOWN to the 3 Inland lands with the fewest BLIGHT."
                },
                "6": {
                    "Fear Cards": [5, 6, 3], "Game Effects": "Far-Flung Herds: Ravages do +2 Damage (total) if any adjacent lands have TOWN. (This does not cause lands without Invaders to Ravage."
                }
            }
        },
        {
            "Name": "THE KINGDOM OF SCOTLAND",
            "Additional Loss Condition": "Trade Hub: If the number of Coastal lands with CITY is ever greater than (2 x # of boards), the Invaders win.",
            "Escalation": "Ports Sprawl Outward: On the single board with the most Coastal TOWN/CITY, add 1 TOWN to the N lands with the fewest TOWN (N = # of players.)",
            "Level": {
                "1": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Trading Port: After Setup, in Coastal lands, Explore Cards add 1 TOWN instead of 1 EXPLORER. \"Coastal Lands\" Invader Cards do this for maximum 2 lands per board."
                },
                "2": {
                    "Fear Cards": [4, 4, 3], "Game Effects": "Seize Opportunity: During Setup, add 1 CITY to land #2. Place \"Coastal Lands\" as the 3rd Stage II Card, and move the two Stage II Cards above it up by one. (New Deck Order: 11-22-1-C2-33333, where C is the Stage II Coastal Lands Card.)"
                },
                "3": {
                    "Fear Cards": [4, 5, 4], "Game Effects": "Chart the Coastline: In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent CITY."
                },
                "4": {
                    "Fear Cards": [5, 5, 4], "Game Effects": "Ambition of a Minor Nation: During Setup, replace the bottom Stage I Card with the bottom Stage III Card. (New Deck Order: 11-22-3-C2-3333)"
                },
                "5": {
                    "Fear Cards": [5, 6, 4], "Game Effects": "Runoff and Bilgewater: After a Ravage Action adds BLIGHT to a Coastal land, add 1 BLIGHT to taht board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for BLIGHT removal/movement."
                },
                "6": {
                    "Fear Cards": [6, 6, 4], "Game Effects": "Export Fuel Inward Growth: After the Ravage Step, add 1 TOWN to each Inland land that matches a Ravage Card and is within 1 RANGE of TOWN/CITY"
                }
            }
        },
        {
            "Name": "THE KINGDOM OF FRANCE (PLANTATION COLONY)",
            "Additional Loss Condition": "Sprawling Plantations: Before Setup, return all but 7 TOWN per player to the box. Invaders win if you ever cannot place a TOWN.",
            "Escalation": "Demand for New Cash Crops: After Exploring, on each board, pick a land of the shown terrain. If it has TOWN / CITY, add 1 BLIGHT. Otherwise, add 1 TOWN",
            "Level": {
                "1": {
                    "Fear Cards": [3, 3, 3], "Game Effects": "Frontier Explorers: After Setup, when Invaders successfully Explore into a land without TOWN / CITY, add another EXPLORER."
                },
                "2": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Slave Labor: During Setup, put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck. After Invaders Build in a land with 2 EXPLORER or more, replace all but 1 EXPLORER there with an equal number of TOWN."
                },
                "3": {
                    "Fear Cards": [4, 4, 3], "Game Effects": "Early Plantations: During Setup on each board, add 1 TOWN to the highest-numbered land without TOWN. Add 1 TOWN to land #1."
                },
                "4": {
                    "Fear Cards": [4, 4, 4], "Game Effects": "Triangle Trade: Whenever Invaders build a Coastal CITY, add 1 TOWN to the adjacent land with the fewest TOWN."
                },
                "5": {
                    "Fear Cards": [4, 5, 4], "Game Effects": "Slow-healing Ecosystem: When you remove BLIGHT from the board, put it here instead of onto the Blight Card. As soon as you have 3 BLIGHT per player here, move it all back to the Blight Card."
                },
                "6": {
                    "Fear Cards": [4, 5, 5], "Game Effects": "Persistent Explorers: After resolving an Explore Card, on each board add 1 EXPLORER to a land without any. Fear Card effects never remove EXPLORER. If one would, you may instead Push that EXPLORER"
                }
            }
        },
        {
            "Name": "THE KINGDOM OF BRANDENBURG-PRUSSIA",
            "Additional Loss Condition": "None",
            "Escalation": "Land Rush: On each board with TOWN / CITY, add 1 TOWN to a land without TOWN.",
            "Level": {
                "1": {
                    "Fear Cards": [3, 3, 3], "Game Effects": "Fast Start: During Setup, on each board add 1 TOWN to land #3."
                },
                "2": {
                    "Fear Cards": [3, 3, 3], "Game Effects": "Surge of Colonists: When making the Invader Deck, put 1 of the Stage III cards between Stage I and Stage II. (New Deck Order:111-3-2222-3333)"
                },
                "3": {
                    "Fear Cards": [3, 4, 3], "Game Effects": "Efficient: When making the Invader Deck, remove an additional Stage I card. (New Deck Order:11-3-2222-3333)"
                },
                "4": {
                    "Fear Cards": [4, 4, 3], "Game Effects": "Aggressive Timetable: When making the Invader Deck, remove an additional Stage II card. (New Deck Order:11-3-222-3333)"
                },
                "5": {
                    "Fear Cards": [4, 4, 3], "Game Effects": "Ruthlessly Efficient: When making the Invader Deck, remove an additional Stage I card. (New Deck Order:1-3-222-3333)"
                },
                "6": {
                    "Fear Cards": [4, 4, 4], "Game Effects": "Terrifyingly Efficient: When making the Invader Deck, remove all Stage I cards. (New Deck Order:3-222-3333)"
                }
            }
        }
    ],
    spirits: [
        {
            Name: "Lightning's Swift Strike",
            Setup: "Put 2 PRESENCE on your starting board in the highest-numbered Sands.",
            "Play Style": "Virtually all offense to start with: without a more defensive teammate, Blight may become a problem. Excellent at destroying buildings, less good at containing Explorers. Using Thundering Destruction tends to be a burst affair: a turn or two of position and build up Energy, followed by a really big turn.\nStarting Powers are extremely focused on Air and Fire: good for Thundering Destruction, bad for Major Power versatility.",
            Complexity: "Low",
            "Special Rules": "SWIFTNESS OF LIGHTNING\nFor every AIR you have, you may use 1 SLOW Power as if it were FAST. (Power Cards or your Innate Powers.)",
            SpecialRulePhases: ['Fast Powers']
        },
        {
            Name: "River Surges in Sunlight",
            Setup: "Put 1 PRESENCE on your starting board in the highest-numbered Wetlands.",
            "Play Style": "While capable of some direct offense, River Surges in Sunlight is best at flooding out Explorers and Towns, displacing them from lands where they might Build or Ravage.\nThe ability to get free Sacred Sites makes a wide range of Powers more useful.",
            Complexity: "Low",
            "Special Rules": "RIVER'S DOMAIN\nYour PRESENCE in Wetlands counts as HOLYSITE.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Vital Strength of the Earth",
            Setup: "Put 3 PRESENCE on your starting board: 2 in the highest-numbered Mountain, 1 in the highest-numbered Jungle.",
            "Play Style": "Powerful but slow: has potent Power Cards and an excellent Energy income, but starts wtih only one card play per turn, and Growth is limited to adding one Presence per turn.\nAlso slow to change: learning new Powers carries slightly more cost than reclaiming played Power Cards",
            Complexity: "Low",
            "Special Rules": "EARTH'S VITALITY\nDefend 3 in every land where you have HOLYSITE.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Shadows Flicker Like Flame",
            Setup: "Put 3 PRESENCE on your starting board: 2 in the highest-numbered Jungle and 1 in land #5",
            "Play Style": "Good at causing Fear and picking off lone Explorers and Towns, containing the Invaders. Not so good at massive damage - may need to rely on allies to handle thoroughly colonized lands.\nThe ability to boost Range gives more flexibility to Range 0 Powers, and can be important in larger games.",
            Complexity: "Low",
            "Special Rules": "SHADOWS OF THE DAHAN\nWhenever you use a Power, you may pay 1 Energy to target a land with DAHAN regardless of the Power's Range. (Power Cards or your Innate Powers.)",
            SpecialRulePhases: ['Fast Powers', 'Slow Powers', 'Event']
        },
        {
            Name: "Thunderspeaker",
            Setup: "Put 2 PRESENCE on your starting board: 1 in each of the 2 lands with the most DAHAN",
            "Play Style": "Has a keen interest in where the Dahan are - partly because so many of its starting powers work through them, partly because its Presence can move along with them. When picking new Power Cards, it will often want to take good Dahan-centric Powers, but it can also branch out into other areas.",
            Complexity: "Moderate",
            "Special Rules": "ALLY OF THE DAHAN\nYour PRESENCE may move with DAHAN. (Whenever a DAHAN moves from 1 of your lands to another land, you may move 1 PRESENCE along with it.)\nSWORN TO VICTORY\nAfter a Ravage Action destroys 1 or more DAHAN, for each DAHAN Destroyed, Destroy 1 of your PRESENCE within 1 RANGE.[1][2]",
            SpecialRulePhases: ['All']
        },
        {
            Name: "A Spread of Rampant Green",
            Setup: "Put 2 PRESENCE on your starting board; 1 in the highest-numbered Wetland, and 1 in the Jungle without any DAHAN. (If there is more than 1 such Jungle, you may choose)",
            "Play Style": "Fairly good at dealing with Towns, but terrible at handling Explorers (who are unfazed by prolific foliage). Can get Presence onto the board faster than most other Spirits. Extra Presence is good for targeting and especially for 'Choke the Land with Green', which can be extremely effective at slowing down invaders. Just be careful not to destroy Sacred Sites needed for Power use.",
            Complexity: "Moderate",
            "Special Rules": "CHOKE THE LAND WITH GREEN\nWhenever Invaders would Ravage or Build in a land with your Sacredsiteicon.png, you may prevent it by destroying one of your PRESENCE in that land.\nSTEADY REGENERATION\nWhen adding PRESENCE to the board via Growth, you may optionally use your destroyed PRESENCE. If the island is Healthy, do so freely. If the island is Blighted, doing so costs 1 Energy per destroyed PRESENCE you add.",
            SpecialRulePhases: ['Growth', 'Ravage', 'Build']
        },
        {
            Name: "Ocean's Hungry Grasp",
            Setup: "Put 2 PRESENCE onto your starting board: 1 in the Ocean, and 1 in a Coastal land of your choice.",
            "Play Style": "Extremely good at assaulting the coasts where the Invaders start out strong, but quite weak island - the ocean is not accustomed to affecting events so far ashore. Its Presence shifts in and out like the tide, which can be tricky to manage, but permits re-positioning and tactical retreats or offensives in the hands of a skillful player. Has fairly inexpensive Unique Powers, but the energy gained from drowning Invaders can be necessary in stepping up to more potent Powers.",
            Complexity: "High",
            "Special Rules": "OCEAN IN PLAY\nYou may add/move PRESENCE into Oceans, but may not add/move PRESENCE into Inland lands. On boards where you have 1 or more PRESENCE, Oceans are treated as Coastal Wetlands for Spirit Powers/Special Rules and Blighticon.png. You Drown any Invaders or DAHAN moved to those Oceans.\nDROWNING\nDestroy Drowned pieces, placing Drowned Invaders here. At any time you may exchange (X) Health of these Invaders for 1 Energy, where X = number of players. (Ignore modifiers to Invader Health.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Bringer of Dreams and Nightmares",
            Setup: "Put 2 PRESENCE on your starting board in the highest-numbered Sands.",
            "Play Style": "With most Spirits, Terror Victories are a backup plan if the main push against the Invaders stalls out for too long, but Bringer turns Fear into a more viable primary strategy. Its transformation of damage & destruction into Fear can turn Major Powers into tremendous sources of terror and panic. However, the only real offense Bringer has is the Dahan fighting back. While it does have some defensive ability, it is fundamentally poor at clearing areas of Invaders.",
            Complexity: "High",
            "Special Rules": "TO DREAM A THOUSAND DEATHS\nYour Powers never cause Damage, nor can they Destroy anything other than your own PRESENCE.\nWhen your Powers would Destroy (or deal enough Damage to Destroy) Explorericon.png/Townicon.png/Citiyicon.png, instead generate 0/2/5 Fearicon.png. The Power Pushes all Explorericon.png/Townicon.png it would Destroy.\nNotes: A single Power cannot Destroy a given Invader more than once. Powers that cause Damage via DAHAN are affected just like all others. All effects other than Damage/Destroy work as usual.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Sharp Fangs Behind the Leaves",
            Setup: "Put 1 Presenceicon.png and 1 {{{width}}}px on your starting board in the highest-numbered Jungle. Put 1 Presenceicon.png in a land of your choice with {{{width}}}px anywhere on the island.",
            "Play Style": "All about Beasts and Jungles. Can be very fast out of the gate, but doesn't have the late-game power that some spirits do, and is likely to have some difficulty with Blighted areas. \"Ranging Hunt\" is a critical Innate ability, particularly in early-game: it simultaneously gives Beasts mobility and permits picking off a stray Explorers or Towns on most turns.",
            Complexity: "Moderate",
            "Special Rules": "ALLY OF THE BEASTS\nYour Presenceicon.png may move with {{{width}}}px. (Whenever a {{{width}}}px moves from 1 of your lands to another land, you may move 1 Presenceicon.png along with it.)\nCALL FORTH PREDATORS\nDuring each Spirit Phase, you may replace 1 of your Presenceicon.png with 1 {{{width}}}px. The replaced Presenceicon.png leaves the game. (It was not destroyed, so things which return destroyed Presenceicon.png cannot bring it back.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Keeper of the Forbidden Wilds",
            Setup: "Put 1 Presenceicon.png and 1 Wildicon.png on your starting board in the highest-numbered Jungle.",
            "Play Style": "A slowly growing wall - expanding can sometimes be difficult, but the Invaders will have an equally difficult time penetrating wherever the Keeper plants itself.\nIn larger games, it may be useful to spread to one of the two far-distant lands early on, to have multiple points from which to slowly grow.",
            Complexity: "Moderate",
            "Special Rules": "FORBIDDEN GROUND\nAny time you create a Sacredsiteicon.png, Push all Dahanicon.png from that land. Dahan Events never move Dahanicon.png to your Sacredsiteicon.png, but Powers can do so.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Heart of the Wildfire",
            Setup: "Put 3 Presenceicon.png and 2 Blighticon.png on your starting board in the highest-numbered Sands. (Blighticon.png comes from the box, not the Blight Card)",
            "Play Style": "Starts with good offense and gets better from there, but lays down Blight as it grows. The smaller the game, the more restraint is needed to prevent tipping the island over into being completely Blighted. The Wildfire can heal the land where it is, but may benefit from other Blight removal Powers so it can add Presence to problem lands without triggering Blight cascade. Removing Blight from its own lands limits its \"Firestorm\" innate power, however.",
            Complexity: "High",
            "Special Rules": "BLAZING PRESENCE\nAfter you add or move Presenceicon.png after Setup, in the land it goes to:\nFor each Simple fire.png showing on your Presenceicon.png Tracks, do 1 Damage.\nIf 2 Simple fire.png or more are showing on your Presenceicon.png Tracks, add 1 Blighticon.png.\nPush all {{{width}}}px and any number of Dahanicon.png.\nIf you add multiple Presenceicon.png into a land at the same time, only do the above effects once.\nDESTRUCTIVE NATURE\nBlighticon.png added due to Spirit Effects (Powers, Special Rules, Scenario-based Rituals, etc) does not destroy your Presenceicon.png. (This includes cascades.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Serpent Slumbering Beneath the Island",
            Setup: "Put 1 Presenceicon.png on your starting board in the land #5.",
            "Play Style": "There are several ways to play the Serpent, but all require patience: early game involves slowly building up Powers and Presence. It's not helpless during this time, but it isn't as effective as anyone else. It becomes incredibly powerful after awakening, but getting there requires a lot of time.\nMake sure to Absorb Essence before you run up against your Presence cap - and to get other players' buy-in before using Absorb Essence on their Presence.",
            Complexity: "High",
            "Special Rules": "You start off limited to 5 Presenceicon.png on the island. Raise this with your \"Absorb Essence\" Power Card. Each use covers the lowest revealed number; your Presenceicon.png limit is the lowest uncovered number. (5)(7)(8)(10)(11)(12)(13)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Stone's Unyielding Defiance",
            Setup: "Put 2 Presenceicon.png on your starting board: 1 in the lowest-numbered Mountain without Dahanicon.png; 1 in an adjacent land that has Blighticon.png (if possible) or is Sands (if not).",
            "Play Style": "Most of its special rules and innates require being where the Invaders are - particularly in the worst, most-overrun lands, so it can mitigate incoming Blight and (eventually) destroy the Invaders with their own Ravages.\nDoes best with the patience to build up a position over time, and the temperance to hold some Energy in reserve so it can take advantage of Hold the Island Fast With a Bulwark of Will.",
            Complexity: "Moderate",
            "Special Rules": "BESTOW THE ENDURANCE OF BEDROCK\nWhen Blighticon.png is added to one of your lands, unless the Blighticon.png then outnumbers your Presenceicon.png, it does not cascade or destroy Presenceicon.png (yours or others').\nDEEP LAYERS EXPOSED TO THE SURFACE\nThe first time you uncover each of your \"+1 Card Play\" Presenceicon.png spaces, gain a Minor Power. (They're marked with Minorsymbol.png as a reminder.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Shifting Memory of Ages",
            Setup: "Put 2 Presenceicon.png on your starting board in the highest-numbered land that is Sands or Mountain. Prepare 1 Simple moon.png, 1 Simple air.png, and 1 Simple earth.png marker (put them by your Special Rules).",
            "Play Style": "Starts with little ability to influence the board - most of what it does in that regard will come from new Power Cards.\nExtremely good with Major Powers and usually wants to take them early and often. Can either try sprinting towards victory with its phenomenal Energy Growth or build up towards becoming a late-game powerhouse.",
            Complexity: "Moderate",
            "Special Rules": "LONG AGES OF KNOWLEDGE AND FORGETFULNESS\nWhen you would Forget a Power Card from your hand, you may instead discard it. (Max. once per Action.)\nINSIGHTS INTO THE WORLD'S NATURE\nSome of your Actions let you Prepare Element Markers, which are kept here until used. Choose the Elements freely. (I.e., you are not limited to Elements you have at the time.)\nEach Element Marker spent grants 1 of that Element for a single Action. (E.g., one Power use.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Grinning Trickster Stirs Up Trouble",
            Setup: "Put 2 Presenceicon.png on your starting board: 1 in the highest-numbered land with Dahanicon.png, and 1 in land #4.",
            "Play Style": "Requires some comfort with risk: both Overenthusiastic Arson and Let's See What Will Happen involve uncertainty about how the Fast Powers phase will pan out.\nCan be effective from the get-go, but benefits greatly from not working too hard, instead improving its capacity for mischief by adding Presenceicon.png and gaining Power Cards. Bonus Energy from Let's See What Will Happen can be extremely helpful in avoiding the distraction of gaining Energy elsewhere.",
            Complexity: "Moderate",
            "Special Rules": "A REAL FLAIR FOR DISCORD\nAfter one of your Powers adds Strifeicon.png in a land, you may pay 1 Energy to add 1 Strifeicon.png within 1 Rangeicon.png of that land.\nCLEANING UP MESSES IS A DRAG\nAfter one of your Powers Removes Blighticon.png, Destroy 1 of your Presenceicon.png. Ignore this rule for Let's See What Happens.",
            SpecialRulePhases: ['Fast Powers', 'Event', 'Slow Powers']
        },
        {
            Name: "Lure of the Deep Wilderness",
            Setup: "Put 3 Presenceicon.png on your starting board: 2 in land #8, and 1 in land #7. Add 1 {{{width}}}px to land #8.",
            "Play Style": "Very focused on the interior - its best options for coastal lands are \"draw the Invaders inland\" or \"turn Townicon.png/Citiyicon.png into Explorericon.png, then draw them inland\". Likes the interior to be dangerous, full of Badlands.png, BEAST, Diseaseicon.png, and Wildicon.png, ideally where its Presenceicon.png is.\nHas better-than-average potential for containing Invaders and setting up a zone safe from Explores, but the coasts may get messy while doing so.",
            Complexity: "Moderate",
            "Special Rules": "HOME OF THE ISLAND'S HEART\nYour Presenceicon.png may only be added/moved to lands that are Inland.\nENTHRALL THE FOREIGN EXPLORERS\nFor each of your Presenceicon.png in a land, ignore up to 2 Explorericon.png during the Ravage Step and any Ravage Actions.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Many Minds Move as One",
            Setup: "Put 1 Presenceicon.png and 1 {{{width}}}px on your starting board, in a land with {{{width}}}px. Note that you have 5 Unique Power Cards.",
            "Play Style": "Requires heavy spatial thought for {{{width}}}px movement, due to its improved Push/Gather and large numbers of {{{width}}}px.\nHas no offense to start with, but an excellent stalling defense combined with Fearicon.png generation; outright Fear victories may be plausible in smaller games. Both Fear Cards and {{{width}}}px events are unpredictable, however, so swings of fortune are apt to be more relevant than usual.",
            Complexity: "Moderate",
            "Special Rules": "FLY FAST AS THOUGHT\nWhen you Gather or Push {{{width}}}px, they may come from or go to lands up to 2 distant (rather than adjacent only).\nA JOINING OF SWARMS AND FLOCKS\nYour Sacredsiteicon.png may also count as {{{width}}}px. (Note: You never have more than 1 Sacredsiteicon.png in a land, no matter how many Presenceicon.png you have there.)\n(If something changes a {{{width}}}px that is your Sacredsiteicon.png, it affects 2 of your Presenceicon.png there - e.g., Push 1 {{{width}}}px will Push 2 of your Presenceicon.png together.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Volcano Looming High",
            Setup: "Put 1 Presenceicon.png on your starting board in a mountain of your choice. Push all Dahanicon.png from that land.",
            "Play Style": "Benefits more than most Spirits from getting Presenceicon.png onto the board; in addition to the usual benefits, it can fuel an Explosive Eruption. This can result in a huge turn, but if overdone the following turn or two may be very constrained.\nBigger eruptions are extremely powerful, but cause Blighticon.png, and the Invaders may not provide the luxury of enough time to build up the desired pressure - judging the timing of when to erupt and for how much is a key part of playing this Spirit.",
            Complexity: "Moderate",
            "Special Rules": "MOUNTAIN HOME\nYour Presenceicon.png may only be added/moved into Mountain.\nCOLLAPSE IN A BLAST OF LAVA AND STEAM\nWhen your Presenceicon.png is destroyed, in that land, deal 1 Damage per destroyed Presenceicon.png to both Invaders and to Dahanicon.png.\nVOLCANIC PEAKS TOWER OVER THE LANDSCAPE\nYour Power Cards gain +1 Rangeicon.png if you have 3 or more Presenceicon.png in the origin land.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Shroud of Silent Mist",
            Setup: "Put 2 Presenceicon.png on your starting board: 1 in the highest-numbered Wetland and 1 in the highest-numbered Mountain.",
            "Play Style": "Constantly shifting and moving its Presenceicon.png around the board. Hurt more than most by Presenceicon.png loss due to its desire to surround and envelop the Invaders.\nCan (slowly) clear the most built-up of lands, but its real strength is the free Fear from Slow and Silent Death.\nExtremely limited Energy income, but can stretch to Major Powers if it manages to gather enough Energy from its Special Rules.",
            Complexity: "High",
            "Special Rules": "GATHER POWER FROM THE COOL AND DARK\nOnce a turn, when you Gain a Power Card without Simple fire.png, gain 1 Energy.\nMISTS SHIFT AND FLOW\nWhen targeting a land with a Power, you may Gather 1 of your Presenceicon.png into the target or an adjacent land. This can enable you to meet Range and targeting requirements.\nSLOW AND SILENT DEATH\nInvaders and Dahanicon.png in your lands don't heal Damage.\nDuring Time Passes: 1 Fearicon.png (max. 5) per land of yours with Damaged Invaders. Gain 1 Energy per 3 lands of yours with Damaged Invaders.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Vengeance as a Burning Plague",
            Setup: "1 of your Presenceicon.png starts the game already Destroyed. Put 2 Presenceicon.png on your starting board: 1 in a land with Blighticon.png, 1 in a Wetland without Dahanicon.png.",
            "Play Style": "Starts slow, facing an early choice whether to stop Builds (with Diseaseicon.png) or let them happen (to generate Fearicon.png and keep Diseaseicon.png on the island). Grows to be very effective at tearing into heavily-populated lands with lots of Blighticon.png and/or Diseaseicon.png, but setting those up may require some care... and make other Spirits unease, with how much Blighticon.png is piling up.",
            Complexity: "High",
            "Special Rules": "THE TERROR OF A SLOWLY UNFOLDING PLAGUE\nWhen Diseaseicon.png would prevent a Build on a board with your Presenceicon.png, you may let the Build happen (removing no Diseaseicon.png). If you do, 1 Fearicon.png.\nLINGERING PESTILENCE\nWhen your Presenceicon.png is destroyed by anything except a Spirit action, add 1 Diseaseicon.png where each destroyed Presenceicon.png was.\nWREAK VENGEANCE FOR THE LAND'S CORRUPTION\nYour actions treat Blighticon.png on the island as also being Badlands.png.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Starlight Seeks Its Form",
            Setup: "Put 1 Presenceicon.png on your starting board, in a land with Blighticon.png",
            "Play Style": "A build-your-own-Spirit, capable of going in many different directions based on Elements picked, Growth choices selected, and Power Cards kept. Has a very high personal/visual complexity and a huge number of early-game options, but doesn't alter play much for other players at the table.\nAs it commits to choices, it loses versatility - not all paths will be good (or even possible) at all things. It especially wants a measure of adaptation to early Power Cards, rather than trying to pre-select a strategy.",
            Complexity: "Very High",
            "Special Rules": "GROWTH BEGETS GROWTH\nYou have 6 Presenceicon.png tracks. (As usual, you may add Presenceicon.png from any track.) 4 of the Presenceicon.png tracks are next to rows of Growth choices: these choices start unavailable. Upon emptying a Growth track, pick one of its two Growth choices to be immediately available. The other stays unavailable for the rest of the game (cover with a spare piece).\nAfter you add Presenceicon.png from a space marked Energyplus1.png, gain 1 Energy.\nSLOWLY COALESCING NATURE\nAfter revealing an Element.png, place 1 Element Marker of your choice on it. That element is permanent and is constantly available (As if pre-printed on the Presenceicon.png track.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Fractured Days Split the Sky",
            Setup: "Put 3 Presenceicon.png on your starting board: 1 in the lowest-numbered land with 1 Dahanicon.png, and 2 in the highest-numbered land without Dahanicon.png. Deal 4 Minor and Major Powers face-up as your initial Days That Never Were cards; in a 1 or 2-player game, instead deal 6 of each. In a 1-board game, gain 1 Time.",
            "Play Style": "Excellent at support and sweeping indirect effects, but starts off very limited otherwise. Several of its Unique Powers need setup to use well; it's entirely possible 1 or 2 of them may see no play in a given game.\nHas a hard time getting lots of Presenceicon.png onto the board. This can make targeting tricky, and may be quite dangerous if a Blighted Island effect Destroys Presenceicon.png.",
            Complexity: "Very High",
            "Special Rules": "FRAGMENTS OF SHATTERED TIME\nEach Presenceicon.png on this ability represents 1 Time. Many of your Powers require Time as an additional cost. Spend it when you Resolve the Power. (Not when you play it.)\nWhen you Gain 1 Time, put 1 of your Presenceicon.png here from your Presenceicon.png track (or, optionally, the island). When you Spend 1 Time, return it to a Presenceicon.png track - or if you have no free spaces, Destroy it.\nDAYS THAT NEVER WERE\nYour 3rd Growth option lets you gain any one Power Card from a special set you create during Setup. When you gain a Power Card any other way, you may add one unchosen card to this set.",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Downpour Drenches the World",
            Setup: "Put 1 Presenceicon.png on your starting board in the lowest-numbered Wetlands.",
            "Play Style": "Cares about the question \"How useful is this Power in the current context?\" even more than most Spirits; it rarely plays all its Power Cards in any given Reclaim cycle (some get discarded to Growth), and for those it does play, it often has the option of using them multiple times.\nBenefits even more than most Spirits from having lots of Presence on the board, both for Rain and Mud Suppress Conflict and to facilitate its Unique Powers (by making more lands Wetlands).",
            Complexity: "High",
            "Special Rules": "DRENCH THE LANDSCAPE\nSpirit Actions and Special Rules treat your Sacredsiteicon.png as Wetlands in addition to the printed terrain.\nPOUR DOWN POWER ACROSS THE ISLAND\nFor each 2 Simple water.png you have, during the Fasticon.png/Slowicon.png phase you may either:\nGain 1 Energy; or\nRepeat a land-targeting Power Card by paying its cost again. (It need not target the same land.)\nUse scenario markers or spare game pieces to track uses of this rule. (Max 5 times per turn, no matter how much Simple water.png you have.)",
            SpecialRulePhases: ['All']
        },
        {
            Name: "Finder of Paths Unseen",
            Setup: "Put 1 Presenceicon.png on your starting board in land #3. Put 1 Presenceicon.png on any board in land #1. Note that you have 6 Unique Power Cards.",
            "Play Style": "All about moving the Invaders - and Dahanicon.png/Presenceicon.png/{{{width}}}px from time to time. Good at creating Invader-free \"safe-zones,\" due to its many movement Powers and its capacity to Isolate. Can't afford to Destroy Invaders too often without a way to re-add Destroyed Presenceicon.png, so either needs a big-hammer Major Power or to rely on its teammates for offense.\nChanges the topology of the board, which increases complexity for all players - particularly in larger games!",
            Complexity: "Very High",
            "Special Rules": "RESPONSIBILITIES TO THE DEAD\nAfter one of your Actions Destroys 1 or more Dahanicon.png/Invaders, or directly triggers their Destruction by moving them, Destroy 1 of your Presenceicon.png and lose 1 Energy. If you have no Energy to lose, Destroy another Presenceicon.png.\nOPEN THE WAYS\nYou may make up to two of your lands adjacent at a time. You may change which lands are adjacent once between Actions.",
            SpecialRulePhases: ['All']
        },
    ]
}

export default data;