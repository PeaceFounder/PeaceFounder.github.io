# PeaceCard

PeaceCard is software for smartcards which enables to secure electronic ballots against bribery and coercion. There are multiple issues for the ballots performed with KeyChain, particularly on those aspects. For example, one can buy member keys to get the desired result within the community. Or one can watch the person while he/she is still voting, which can even be done with some proxy anonymously. Also, malware on the device used for voting is a significant problem. For preventing such cases, a hardware solution is necessary to protect the keys and would give members tools for fighting against coercion cases. 

To design such anti-bribery and anti-coercion scheme, I use the following assumptions:

* We can not read human minds (PIN codes).
* We can have a smartcard which prevents anyone from reading its program after it the card is produced. (Even with the most powerful microscope.)
* We can test the integrity of specific programs by just looking at how they transform an input to an output. 
* We can entangle random number generators easily.

## Setup

1. The citizens receive an ID card with 3 PIN codes (arbitrary but sounds like a good number). All PIN codes are the same on the issue what one can do with them. 
2. Each PIN code is bound with a private key, random string and counter. The hash of the public key is publicly known. 
3. The card holds a log file for the signatures it makes.
4. The ballot organizers publicly announce the set of people which can participate for the ballot. 

## Voting

1. Citizen attaches the smartcard to a supplementary device which allows uploading in a message of size 32*N bytes (where N is a number of participants in SynchronicBallot) and downloading output of a size of 1 Kb (typical size of signature). Typing probably is not an option, but QR codes perhaps are feasible. 
2. Citizen unlocks the card with one of his PIN codes.
3. Citizen uploads a voting message.
4. The PeaceCard generates a random number for a unique token with HMAC, counter and burned in a unique random string.
5. The PeaceCard performs SynchronicBallot protocol as the message taking citizens uploaded voting message and the generated token.

## Counting

1. All citizens can see all ballots and verify their validity.
2. Each citizen can check that his ballot is available in the registry. 
3. Each citizen can count the result.

## Anti-bribery and anti-coercion extension

The power of anonymity on the internet is the greatest weakness for many electronic voting schemes as it is so easy to buy votes without dealing with consequences. A standard way to deal with that is with allowing the smartcard to send the vote only to certified servers and do DH key exchange (in SSH sense) with the server and the card (I guess Estonian system uses this approach). With SynchronicBallot scheme that is possible, however, that is not exciting. That also does not address the issue of coercion where your briber, boss, etc may sit next to you to closely inspect whether the owner votes for the party which one wishes. 

Here I propose an extension for the protocol for citizens to defend themselves and the democracy by giving them what they want and so depleting their capital (financial or trust). Meanwhile, the citizens and policing department of their choice would know that a particular vote is fake and meanwhile they would perform ballot in secret. 

The idea of the protocol is to register the token generator with the policing department, which then would be used for scanning ballots and perform a previously agreed action. The registration protocol is as simple as follows:

1. The citizen goes to the police department
2. The citizen logs in with his PIN code which he wants to register as a fake for voting.
3. He/she generates a signature for the parameters of a token generator. This signature does not appear in a user-accessible log file for self-evident reasons. 
4. He/she hands the signature over to the representative and chooses the action what should be done when it is triggered.
5. The representative signs the received signature and gives back a certificate which citizen may use as a proof in the case of inaction or other issues. 

After that, the policing department scans every ballot for illegitimate public keys registered within their database.

If an illegitimately used key is found, the policing department performs one of the previously agreed actions. Additionally, since the department knows the set of tokens generated, they can allow changing the vote in secret. The same SynchronicBallot can be performed where instead of publishing the ballot its hash is published and a tally (for counted and discounted votes) to not bribers/coercers know that they had bought fraudulent votes.

Since the policing department for the ballot is not fully transparent, there could be multiple issues. For instance, the voter could register his fake public key in multiple places and so get more votes than others. Or the policing department could modify a tally for discounted votes as they wish. Fortunately, those bad behaviours can be detected by observers auditing the police departments. 





 

