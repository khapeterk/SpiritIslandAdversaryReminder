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
            "Special Rules": "SWIFTNESS OF LIGHTNING\nFor every AIR you have, you may use 1 SLOW Power as if it were FAST. (Power Cards or your Innate Powers.)"
        },
        {
            Name: "River Surges in Sunlight",
            Setup: "Put 1 Presenceicon.png on your starting board in the highest-numbered Wetlands.",
            "Play Style": "While capable of some direct offense, River Surges in Sunlight is best at flooding out Explorers and Towns, displacing them from lands where they might Build or Ravage.\nThe ability to get free Sacred Sites makes a wide range of Powers more useful.",
            Complexity: "Low",
            "Special Rules": "RIVER'S DOMAIN\nYour Presenceicon.png in Wetlands counts as Sacredsiteicon.png."
        },
        {
            Name: "Vital Strength of the Earth",
            Setup: "Put 3 Presenceicon.png on your starting board: 2 in the highest-numbered Mountain, 1 in the highest-numbered Jungle.",
            "Play Style": "Powerful but slow: has potent Power Cards and an excellent Energy income, but starts wtih only one card play per turn, and Growth is limited to adding one Presence per turn.\nAlso slow to change: learning new Powers carries slightly more cost than reclaiming played Power Cards",
            Complexity: "Low",
            "Special Rules": "EARTH'S VITALITY\nDefend 3 in every land where you have Sacredsiteicon.png."
        },
        {
            Name: "Shadows Flicker Like Flame",
            Setup: "Put 3 Presenceicon.png on your starting board: 2 in the highest-numbered Jungle and 1 in land #5",
            "Play Style": "Good at causing Fear and picking off lone Explorers and Towns, containing the Invaders. Not so good at massive damage - may need to rely on allies to handle thoroughly colonized lands.\nThe ability to boost Range gives more flexibility to Range 0 Powers, and can be important in larger games.",
            Complexity: "Low",
            "Special Rules": "SHADOWS OF THE DAHAN\nWhenever you use a Power, you may pay 1 Energy to target a land with Dahanicon.png regardless of the Power's Range. (Power Cards or your Innate Powers.)"
        },
    ]
}

export default data;