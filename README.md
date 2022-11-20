# sphealbot
A custom Discord bot for Spheal With It.

## Usage
- `npm install`
- Create `./config.json` file following template, matching your Discord Application and Gulid details
- `node deploy_commands.js` 
- `node .`

## TODO
- Total Drama Island registration system
    - `tdparticipant DiscordUser` (A) register someone as a participant
    - `tdunparticipant DiscordUser` (A) unregister someone as a participant
    - `tdparticipants` gets all participants
- Total Drama Island voting system
    - `tdvotestart` (A) starts the voting system
    - `tdvote DiscordUser` (P) allows a participant to vote someone out
        - Call someone out if they change their votes more than once
    - `tdvotecount` (A) sends administrator the vote counts
    - `tvoteend` (A) ends the voting system and all participants get messaged their results, unregisters participant with highest votes
- Total Drama Island judge system
    - `tdjudge DiscordUser` (A) register someone as a judge
    - `tdunjudge DiscordUser` (A) unregister someone as a judge
    - `tdjudges` gets all judges
- Total Drama Island points system
    - `tdpointstart` (A) starts the points system
    - `tdpoint DiscordUser Number` (J) gives a person X points
    - `tdpointundo` (J) undos the previous `tdpoint`
    - `tdpointtally` (J) tallies up all of the participants' points
    - `tdpointend` (A) ends the point system and tallies up all participants' points
- Total Drama Island customization
    - `tdhelp` get an overview of how Total Drama Island works
    - `tdvoteexpose DiscordUser` (A) exposes the historic votes for a participant
    - `tdvotedmessage Text` (P) set the message other participants receive when you get voted by them
    - `tdseal` get a random oh seal
