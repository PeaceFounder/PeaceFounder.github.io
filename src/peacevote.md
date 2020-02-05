@def title = "PeaceVote"

# The PeaceFounder's project

Online voting systems had been active research problem since the discovery of asymmetric cryptography. However, none to my knowledge is trustworthy. It is easy to imagine a software-independent system where anonymity is disregarded by having a public ledger to which one submits their signed votes. But the anonymity is essential to the integrity of elections! Or one imagines a software which is perfect and so preserves anonymity while being secure. However, what if a villain takes over the server and replaces the software with its own?

There are many metrics which had been introduced for measuring the trustworthiness of the electronic voting system. I propose to group them into three categories - transparency, security and anonymity. Which are easy to remember through existing technologies:

+ security + anonymity: Trust the system X doing Y. Most electronic voting systems fit into this category, for example, the Estonian system. Their Achilles heel is the software dependance.
+ security + transparency: Trust the voter X being independent of Y. Such a voting system makes sense when X is representative of Y. However, for ordinary citizens, this is inappropriate as that enables easy coercion, shaming and bribery. 
+ transparency + anonymity: Trust X not doing Y. These are all voting systems to which you can authorize with anonymous means. The best example would be a privately generated bitcoin by a PoW which acts as a token for a vote to be transferred to an account A, B and C representing a choice.

More specifically, I propose to fix the definitions for anonymity, transparency and security as follows:

### Transparency:

+ Open source and open participation
+ Software independence. If someone hacks in the system and replaces that with his own, he shall not be able to change an election outcome without being detected. (I apply this notion here as that the collected data would not change, so it does not overlap with verifiability.)
+ Individual verifiability. See proof how you voted and that you were counted.
+ Universal verifiability. Fairness and accurateness can be proved from publically available data.

### Security:

+ Legitimacy. All participating members are real and verified. 
+ Accountable. Misbehaving individuals can be isolated. 
+ The publically available data can not be tampered with to change the election outcome. (cryptographically secure)
+ No single attackable entity (phone, server, cryptographic protocol, ....) which can significantly change the election outcome. (There is always a possibility of malware. I assume that it is a minority and the detection and prevention of that is the Vendor's responsibility whose reputation would be at stake.)

### Anonymity:

+ Privacy: Noone knows how you voted without your cooperation.
+ Prooflessness: You can not prove how you voted for another person, even with your cooperation, also known as receipt freeness and secret ballot. I don't use those definitions because the voting system can have a receipt, but it might not be the only one. 

Prooflessness can be implemented with software by giving the citizen a choice to vote in a traditional voting ceremony which would override the online voting receipt while not revealing whether he/she did so to the public. In such a case, the system needs a trusted auditor who produces a compensated tally. It seems reasonable to assume that the secret ballot would be much smaller than a public (not open) ballot thus universal verifiability would still hold. However, before, that is reasonable to implement one needs to prevent such a simple thing as identity selling which one could achieve with hardware (see the PeaceCard project). 

The focus thus for PeaceVote is voluntarily democracies. It is the democracies of communities where members get engaged by making a significant change in their surroundings and so would want to protect their democracy. The privacy would make decisions less group biased and more thoughtful by individuals themselves for the community. The democracy could also be a great tool to unite audiences of two opposing divisions of the society by giving them the ability to delegate representatives for a discussion.  The system is also useful for anonymous questionnaires where the minority members do not feel safe to be publically known. Or for whistleblowers who do feel that their integrity had been intact. The last part is essential to punish those members who are documented to sell their votes on the field or sell their representative power within the community. 

# The design of PeaceVote

The design of PeaceVote voting system as basis uses a thought experiment. Imagine that you go to elections, register with a gatekeeper and enter the ballot cabin with the envelope. Now instead of selecting candidates, you put in a public key which you have generated in secret and put the envelope in that ballot box. The keys public keys collected that way would have a great property: anonymity and legitimacy. Those keys then allow doing anonymous, transparent and secure electronic voting.  

But of course, life is not simple, and no one would try to explain to an ordinary person what the public key is and how to securely generate that. Instead, we need to have an electronic voting system to get anonymous keys for electronic voting. Right, that is a tautology. Can we do better?

Let's consider an electronic ballot server which does have some reason of trust, is secure and anonymous by design. Multiple people would participate and would form a ballot. The server would randomize the ballot and publish that. Since the server is like a black box is there anything else what we can do to increase the trust of the result? In the end, we do not want to lose the ability to vote.

We can validate ballot! Every participating member must sign the ballot to confirm that his newly generated key is there. If everyone signs the ballot, we form a braid which connects old input keys with new output keys. In this way, we for sure, know that the system is secure. Whereas the anonymity of new keys is guaranteed by having trust in the system and depends on the ballot protocol used.  However, there is a pressing issue with such a design. What if a participating member refuses to sign the ballot? Shall we consider him a victim or a villain? Since the relation between input and output is lost, we can not give any knowledge on the issue. Such an electronic voting system is simply not accountable and scales badly as we increase the number of participants.

The idea I am proposing is to do multiple small ballots, which we can retry quickly in case a participant refuses to sign the ballot, and chain them together to braid anonymity. This is the idea of the BraidChain which firstly allows scaling of unaccountable voting systems and secondly offers a natural extension for distributing the trust of anonymity over multiple participating ballot servers. Thus, in the end, we obtain the list of anonymous and legitimate keys which allows us to do secure, anonymous and transparent electronic voting. 

# References

After I finalized the design and found it trustworthy from my perspective, I tried to research shit of existing systems, the values and general criticisms of electronic voting. For example, I discovered that `SynchronicBallot.jl` which is the system I developed as part of functional `Community.jl` turns out is not very novel as it is a mixnet combined with kind of a blind signature scheme and was remarkably used to my surprise for Bitcoin in part of CoinJoin project and derivatives. Perhaps my contribution here was an extra validation step, but I don't know for sure. These are, in my opinion, the most important references I have found so far about electronic voting:

+ https://www.youtube.com/watch?v=LkH2r-sNjQs
+ https://www.youtube.com/watch?v=abQCqIbBBeM&feature=emb_title
+ https://en.wikipedia.org/wiki/Software_independence
+ https://en.bitcoin.it/wiki/CoinJoin
+ https://arxiv.org/pdf/1707.08619.pdf