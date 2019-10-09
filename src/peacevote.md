# PeaceVote system

The PeaceFounder's greatest asset is the people, and so we believe in open source phylosophy, and closely follow example lead by JuliaComputing.  Thus we do not patent our voting system but are giving that for people to make peace in the world. (The system can be used and furhter developed freely of no charge as long as the system is accuratelly atributed to PeaceFounder's organization). 

## The setup

-   The citizen receives an ID card with PIN code
-   The card holds a private key and a random string burned in during the production of the card. Additionally the card has a log file for the signatures which had been made. (needed to prevent identity theft).
-   The public key is made public without relation to identity during the delivery of the card to the person. For preventing tampering of the ledger, the person would sign a previous newest public key from the public key list. In the process, the citizen checks if the device contains the correct private key and the algorithm. To prevent unauthorized keys to be registered within the ledger, the person's ID data like a name, place of residence (like a town without specific address), first digits from a phone number is submitted to another database, which would be made public. That would allow citizens to check the legitimacy and enable an option to choose a paper bailout. Also another preventative option is that the key is signed by a public key already in the ledger.

## Voting

The citizen has a device with display and numpad, which interfaces the ID card. No internet connection is allowed to prohibit malware. The voting for a user happens after the following steps:

-   User unlocks the card with his PIN code
-   User inputs the information about the vote to be cast.
-   The ID card calculates the hash sum from the information.
-   The message contains a hash sum and a random number (generated during the software burning process).
-   A private key signs the message. The signature contains the full message and its encryption.
-   The person sends the message anonymously (for example using Tor) to one of many vote collecting sites or a physical bailout box. (necessary to prevent DDOS attacks).
-   The voter checks anonymously that the vote had been delivered and recognized as valid in a centralized public ledger.

## Counting

The public ledger contains signatures. On the other ledger, we have public keys which must have been used for a valid vote. So the steps are as follows:

-   For each signature, a valid public key is found from the ledger by looping through all of them.
-   The valid signatures are published to a centralized public ledger with a corresponding public key.
-   Then - count. A protocol for changing the vote can be implemented.

## Antibribery and anti-coercion mechanism

The power of anonymity on the internet is the greatest weakness for many electronic voting schemes as it is so easy to buy votes without dealing with consequences. Here I propose a defence based on activists will to look for the bribery places and to sell their votes so in the process depleting bribers capital. Afterwards, when the transaction is made, activists submit their real ballots. That could be done in secrecy to prevent bribers from gaining the knowledge of the list of activists for the next elections.

To distinguish real votes from the fake votes another login for ID card can be made where the random string added to the message would be known to the department which keeps order. The activist could have been given a choice to select the police department, which he trusts that would not leak the information to the bribers. The steps to set up such system thus are:

-   The activist creates a new login to the ID card and chooses a PIN2 code for that.
-   A new login also requires to input the random string which the card adds for the message before signing. That the activist generates on the local computer to have a cryptographic strength.
-   He then generates another random number and makes a signature on this random number.

The activist goes to the police department, which he trusts and gives the signature to them for safekeeping.

-   The police department puts the signature in a secure database.
-   Then they generate a hash sum of the signature which they put in a public ledger.
-   The activist gets a certificate in a paper form in case the police department fails to recognize the right to change the vote after the elections.

Now to perform a fake vote, the citizen does all the steps from the voting section, but only with the PIN2 code. The police department would scan the ledger continuously for the random strings and would do it's duty when the vote would have been found. It is also pretty clear that no one would dare exploit social relations to collect card and PIN code as there is no way to distinguish real one from the fake one.

# A letter to a lossing party

Dear X

The elections had ended, and your candidacy had not gained significant support from the people. In this letter, we shall explain why we believe that the elections had happened honestly. 

First of all, only eligible citizens were able to make a valid vote. No public keys were possible to be inserted or removed from the anonymous public key ledger since those are chained together by each citizen signing the previous record. And the anonymous keys were signed by ID card issuing personnel where no anomalies were detected. Additionally, we selected a random sample of citizens to whom we asked to validate that their public keys of ID cards can be found in the anonymous public key ledger. Since the number of citizens eligible for electronic voting is the same as the number of eligible anonymous public keys, we deduce that tampering of the ledger had not happened and that only eligible citizens were able to vote.

We can also exclude identity theft (someone copying a private key) as each voter is able to look into a public ledger and see if his private key had not been used for casting a vote. He can prove that to us by showing us the logfile on the card. We can confidently report that no stolen identities were used to cast a vote.

The votes were collected anonymously in a decentralized manner and were publicly available immediately for everyone to save them. Thus no vote filtering was possible during the election since no one gave us unincluded vote in the central vote ledger.  The counting procedure was done with the following piece of code:
```
# check integrity of anonymous publick key ledger
# check that provided the public key for the vote is correct
# check if the public key is in the anonymous public key ledger
# check all votes done by this public key
# count the latest vote
# add votes made in secrecy
```

And lastly, we detected A bribery and coercion cases for buying the votes anonymously on the internet and in-person by borrowing the ID card and the corresponding PIN code. In both cases, a substantial amount of people sold marked votes, and the estimated effectiveness of bribery was about B% (number of people who gave their real votes). The black market price for the vote was C, and the state funding for selling a marked vote to the bribers was 10C. All bribery hunters were able to cast their vote in semi-secret fashion (only hashes of votes are published), and no miscounted vote was reported. Also, no bribery hunter identities or used anonymous public keys were compromised. 

So to sum up, we believe that elections were honest with significant citizen participation in casting votes and in hunting bribers. Everyone was able to follow the vote collection process and also execute counting himself. And lastly, the number of coercion cases A were too small to change the outcome of your candidacy.

We are sincerely sorry for your loss,  
Election committee representative Y

# Imagining PeaceVote in NorthKorea

In NorthKorea, elections are difficult as the state is corrupt, and it can coerce the citizens to vote in a desirable fashion. There is no freedom of speech; thus, facts propagate with high friction. Only a fraction of that might reach independent observers. Also, there would be an issue for citizens to trust state organizations for fighting bribery and coercion. Also, there would be a little trust that only once and all citizens can vote. And that each citizen would be able to vote anonymously as the state might keep a record of public keys and identities. It is pointless to find and report those crimes as they happen.

What we can do, however well, is fieldwork and statistics if we have freedom for the observers to inquiry a random set of citizens in the state confidentially. Without this essential freedom for observers, it is not possible to asses whether the elections had been honest. The other requirements which the state must satisfy are:

-   Accessibility to eligible citizen ledger for electronic voting. The data would contain the necessary information to get in touch with the person. Full data could be delivered to observers confidentially if privacy is of concern.
-   Every citizen can access and download anonymous public key ledger where the keys are signed in a chain.
-   Each eligible citizen for electronic voting must own an ID card with the public key which is in the anonymous public key ledger.
-   Citizens can deliver the votes anonymously to the one or multiple vote collecting places. The votes are available for everyone to download at any time.
-   The citizens trust that the police accurately process marked votes. The police issue a certificate for willing citizens as proof for a random number generator to be marked if the obligation had not been satisfied (hash of random number + counter).

## Possible election abusement scenarios

-   Not all citizens are in the citizen ledger.

Observers select random locations in the state and make statistics on how many real people are in the civil registry.

-   Not all citizens in the citizen ledger own an ID card with a public key which is in the anonymous public key ledger.

Observers select a random set of people from the citizen registry and try to get in touch with them. Asks if they own the ID card and guide them through the procedure of signing random string. That allows them to see if their ID card possesses one of the public keys from the anonymous public key ledger and to know the correctness of implemented asymmetric cryptography.

-   Some citizens own multiple identities, and so can vote more.

If we would live in a perfect world observer with a significant sample size would have a certain probability of finding an instance of a person with more than one identity. A more realistic case seems to be that there would be some fraction of people to which observers could not get in touch. It is pragmatic to assume that those are corrupt votes and adds to the error bar of the election result.

-   The bribers/coercers do have access to the equipment which registers a marked random number generator. Or have access to a backdoor which allows making unmarked votes safely.

The activists (assuming that there are some) could film and report such crime.

-   The state does not act on marked votes. The citizen is not able to revote in secret.

The citizen owns a paper certificate issued by police that a set of random numbers are marked. He can show the document to the third party proving that the counted vote is invalid and that he was not able to revote.

-   The full database of marked random number generators had leaked. Bribers can safely buy valid votes anonymously on the internet.

The activists can report that vote-selling does not work with marked votes but works with valid ones (one, however, needs to sacrifice).

-   The votes can not be delivered anonymously. For example on may think that it is "a good idea" to log in before uploading a vote.

Could be detected by observers by following how citizens make the vote.

-   The votes could be filtered to achieve the desired result. Or there is identity theft.

After elections observers select a random set of citizens from the registry and get in touch with them. Then they would lead them through the procedure for seeing how they voted in the public registry. If they would not see their vote or if someone would have voted in their place with the same public key, they could report that.

-   The state could announce result disregarding the count.

Observers can execute vote-counting code and get the truth.

-   The state could know how each citizen had voted if it keeps a registry between an anonymous public key and identity.

If such a registry exists, it would be very tempting to use that. At some time the registry would reach a person of some integrity who would only need to copy some of the entries and to give them to a third party. That would be enough to prove that elections had not been honest at any time.

-   Added random number could be static, making it possible to distinguish valid votes from invalid ones. For example, one would look into anonymous public key ledger to see if the random number is the same as used for signing. 

Observers check if in vote signatures at the collective vote registry changes the random number from election to election. Or when a person decides to change the vote in the same elections.

-   The state could limit candidates voting to desirable ones.

Collective disobedience. People could sign messages which are out of the states offering. Those should be accepted by vote collecting sites.

