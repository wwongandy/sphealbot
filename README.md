# sphealbot
A custom Discord bot for Spheal With It.

## TODO
- Everything
    - Individual services to handle
        - Administration system
        - Registration system
        - Voting system
            - Support historical tracking of votes
        - Judge system
        - Points system
            - Support historical tracking of awarding points
    - Update command handler to connect to services
    - Set up in-memory database
    - Set up persistent database
    - Update in-memory DB to connect to persistent DB
        - On Discord bot start up, pull data from persistent database
        - Store data in-memory
        - Use in-memory DB as source of truth for internal CRUD operations
        - Every 2 minutes, push in-memory DB data to persistent DB
            - Or maybe not, can just push new data after every internal operation
    - Update services to connect to in-memory database
    - Test

## Usage
- `npm install`
- Create `./config.json` file following `./config.json.template` template, matching your Discord Application and Gulid details
- `node deploy_commands.js` 
- `node .`

## Other
### Commands
- Total Drama Island registration system
    - `tdparticipant DiscordUser` (A) register someone as a participant.
    - `tdunparticipant DiscordUser` (A) unregister someone as a participant.
    - `tdparticipants` gets all participants.
- Total Drama Island voting system
    - `tdvotestart` (A) starts the voting system.
    - `tdvote DiscordUser` (P) allows a participant to vote someone out.
        - Call someone out if they change their votes more than once.
    - `tdvotecount` (A) sends administrator the vote counts.
    - `tvoteend` (A) ends the voting system and all participants get messaged their results, unregisters participant with highest votes.
- Total Drama Island judge system
    - `tdjudge DiscordUser` (A) register someone as a judge.
    - `tdunjudge DiscordUser` (A) unregister someone as a judge.
    - `tdjudges` gets all judges.
- Total Drama Island points system
    - `tdpointstart` (A) starts the points system.
    - `tdpoint DiscordUser Number` (J) gives a person X points.
    - `tdpointundo` (J) undos the previous `tdpoint`.
    - `tdpointtally` (J) tallies up all of the participants' points.
    - `tdpointend` (A) ends the point system and tallies up all participants' points.
- Total Drama Island customization
    - `tdhelp` get an overview of how Total Drama Island works.
    - `tdvoteexpose DiscordUser` (A) exposes the historic votes for a participant.
    - `tdvotedmessage Text` (P) set the message other participants receive when you get voted by them.
    - `tdseal` get a random oh seal.
