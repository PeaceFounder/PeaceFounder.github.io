@def title = "About"
@def tags = ["syntax", "code"]


**This page is under a heavy development and is published as is in a very first draft stage to provide most updated infomration about PeacFounder project. Check out later for a better reading experience.** 

# Landscape

## Accountability

A peaceful protesters may have come out in demonstrations against the state but are attacked ruthlessly by police and the army. To prevent such acts from happening, the protesters use a camera and film the ruthless acts, which they then distribute to raise contempt and support. For instance, let us take a camera as an example. 

On the opposite side, the oppressor has found other uses for the camera. In protests, the police demonstratively film the demonstration and, when it has dispersed, fiercely punish the disobeying citizens when they are at home alone, one by one. Thus next time, protesters come to a demonstration with fear of being held accountable by the state.

In both cases, information technology is used for accountability. In the first use case, it is used by people to hold the state accountable, which helps assert democracy. In the second use case, the state holds people accountable for imprisoning us through surveillance. 

Wouldn't it be great if we could hold the state accountable without being held accountable by the state for being different, active and assertive? This is where a secret ballot comes in handy to make many different voices be heard equally without being intimidated by ensuring each voter's privacy. Thus **accountability*** of the state by the people and **privacy*** for individuals from the state are two essential properties of democratic elections. 

We can distinguish two modes of accountability which is present in elections. The first form of accountability is when we see with our own eyes that election protocol is followed when we come into a polling station to vote, ensuring that everyone has an equal chance to vote and that each person casts a vote in a private space. (need to accent more on gatekeepers)

The second model comes into play after elections in the form of published evidence. If evidence shows that two neighbouring pooling stations have drastically different results, you would have a reason to believe that corruption in elections has happened and could dig deeper to hold corresponding voting officials accountable. In the same mode, we can also put in all available evidence for the voter, which makes him trust those who count the votes. 

The first mode we can call security. It is the execution of previously agreed protocols/software without deviations like having a camera in a voting booth or giving two envelopes to one voter. The second mode we shall call transparency is all about published evidence that lets an ordinary voter believe in election integrity. 

Privacy can be violated in two directions. It helps to put privacy, security and transparency on a Wein diagram. If votes were published together with corresponding voters, we would end up in a fully transparent system, but that would violate privacy through a property we shall call anonymity, in other words, the inability to trace back votes to the voter. 

On the opposite side, privacy can be violated with security. It's not unusual to find in history a corrupt voting official who says or finds a way to make voters accountable, so the bribers or intimidators could work effectively. This second property is what we shall call voters secrecy, the right to be unobserved when casting a vote. 

Security and transparency also do have a meaningful interaction. Imagine a state where, to improve election security, the election officials are also army soldiers. You could still get privacy in your vote as intended, but here is a catch for whom the army soldiers would be accountable? Would an ordinary voter be able to tell whether army soldiers had followed election protocol honestly? 

When people are part of the election process and are able to observe it from the beginning to the end, we can be quite confident that, generally, election officials acted honestly and followed the protocol as specified. In the end, every voter can ask a question from what I have observed and published evidence. Can I conclude that if the ellection result had been manipulated in any way, would my social circle or I have detected it? 

The term we are looking for is software independence. It states that an election is software-independent if manipulation of election results would leave traces in evidence. In the paper ballot case, we just treat people as computers who run the election protocol.  

To recap, we need privacy to prevent coercion and intimidation of voters, security to not stuff ballot boxes with votes and transparency to have any evidence that security was not compromised. All these things evolved painfully in a paper-based secret ballot, but now with computers connected to the ethernet, can we have remote electronic voting?

-----------------

  * Software independence by Rivest
  * Accountability paper

## E-voting

Perhaps before we dive into the technical challenges, we need to get into touch with why voting could potentially be a good idea and is a problem worth investing time and resources in. Often the top benefits of voting are laid out to give more accessibility, being less intrusive in our daily lives and making elections and referendums cheaper so they could be run more often. The cheapness, however, has not yet materialized and is on the trajectory to never be to which we will get in the second. 

What is, however, often overlooked and merely stated to be more efficient is that with remote electronic voting, it is possible to have more complex ballots (this is, however, rarely emphasized due to limitations of many existing systems)! Computers are efficient, and there is no added computation cost on whether it counts votes for a preferential voting system or a complex ballot. It is fairly easy to imagine a ballot which enables voters to vote on what municipality projects need to be realized given a budget constraint. 

It may also be possible to construct a multiple-question ballot where each voter has an opportunity to cast multiple votes for the propositions which he/she feels strongly about, bringing in space for different minorities to work together in harmony without feeling to be overpowered by majorities. 

There is also an opportunity to sample voters randomly for less important decisions so that voters would not be overwhelmed with decision-making. Or alternatively, the propositions could be sampled randomly for each voter so that each voter would have to spend less time on decision-making. In contrast, a collectively large number of decisions would have been decided democratically. 

Also, another direction where voting could be eye-opening is that it is possible for vote counting to happen fluidly during the serving term of representatives. For instance, in case of a trust for an elected candidate has been lost, the voters could change their choices in the midterm, making him lose his seat, which would be a great addition to keeping representatives accountable. 

Unfortunately, all these benefits have been put on the sidelines for voting systems. In fact, most popular designs make it even harder to have preferential voting when homomorphic vote counting is used as a cryptographic primitive. But why just not take venture capital and build an app which would do all these things? The answer is remarkably simple, and it's because of efficiency.

To help you see that, imagine if it would be possible to have a single ballot box for a whole nation. Since it would be so efficient, it would suffice to be managed by a few officers. When you go to vote, you would see all the same procedures and gatekeepers be in place as in less efficient variant. The main problem is how could you be sure that the efficient officers are not deviating from a protocol? Neither you would have cross accountability between neighbouring pooling stations nor know any of the officers who count the votes. And you know the famous phrase by Stalin, don't you?

To make it clear, privacy is hard because a large amount of data can be copied instantly or silently collected during casting. At the same time, accountability is hard as a large amount of data can be manipulated at scale without leaving any traces. Thus we put a final nail to the idea that we could just leave elections to our efficient voting officers and pay them handsomely, to be honest. 

To increase the trust that the adversary would not be able to see how the voter casts his vote, a mixnet cascade is often used. With it, as long as one party managing the mix honestly acts, there is no way for an adversary to determine how the voter has voted even if he had control over all other parts of the system. 

The second issue we need to track is accountability that neither involved party had not manipulated the ellection result. There are multiple ways to do it, but using re-encryption mixnets together with zero-knowledge proofs of shuffle does not compromise privacy when revealing the evidence to the public. So is voting already solved the problem?

Not quite so. Due to the use of encryption mixnet, the ballots are limited to casting only multiple option questions. The accountability often comes only after the elections have been run. Thus if the adversary spoils one of the keys to the mixed election results, the election result would not be possible to decrypt. The centralization of the system makes it prone to DDOS attacks, and what if an adversary spoils vote casting experience for demographies that do not cast favourable votes and perform a negative vote buying strategy? 

---------------------------

  * Negative vote buying
  * Review voting systems

## Alternative

All these remaining issues have a common issue: remote electronic voting is modelled as a pooling station. Technically such voting systems anonymize votes before they are decrypted. An alternative approach which has been mentioned on the sidelines of a few papers is to anonymize voters before the vote is cast. That sounds complex. Let me show how ordinary voting could work in an alternative universe without a ballot box. 

Ironically voting is difficult because of efficiency. To help you see that image if it were possible to have a single ballot box for the whole nation managed by a small elite. You would likely personally not know anyone from the elite and would be let to trust what they say. Most of the electronic voting systems, unfortunately, are like that. So what is the alternative?

For a moment, consider you are in an alternative universe where secret paper ballots were not invented. Instead, they had a ballot based on the ropes with a little electricity. Here is how it works.

Upon entering a pooling station, each voter gets distributed a rope containing a wire for communicating his choice, just like an old telegraph. Before voters can cast a vote, they come together and form a knot tying together all ropes. Then the ends of the votes are attached to a display where each voter, in secrecy at the other end, sends a signal corresponding to the vote simultaneously with other voters. 

Although highly impractical, it fulfils the requirements for the voting system to ensure security, transparency and privacy. In such ballots, we can easily ensure that no votes had been discarded, added or manipulated by just seeing that number of incoming ropes held by voters are equal to the number of ropes at the monitors and that no rope has been cut and added along the way. Whereas privacy is maintained, presuming that no one could follow through an incoming rope to the outgoing one at the knot. 

Important to note is that in this example, the rope represents a pseudo-identity, and the anonymization happens of the voters rather than the votes. However, the result that no vote can be linked to a corresponding voter is the same. In addition, there are no limitations on how complex the ballot is as it can be easily transferred over the wire. The problem, though is how can we tie such a robust knot with computers? 

The first step is to separate a **braiding** phase where the knot is being tied from the vote casting phase. That we can easily do with public key cryptography where the voter having a secret key makes a public key and transfers it through the not to the monitor just after it is being tied. This enables the voter to cast a vote in secret by signing it with his secret key and delivering it anonymously to the closest vote collection place, which can verify if the signature comes from a valid pseudonym produced after braiding. 

With such separation, the centralization issue disappears as anyone can participate in collecting casted votes preventing the adversary from stopping the election from happening or doing negative vote buying. In addition, accountability comes before elections are being run; thus, in case of security issues have been detected, they can be fixed before the votes are cast, improving the trustworthiness of the election result when it arrives. It is also possible to add decent antibribery and anti-coercion resistance by giving each voter a choice to revote in secret in a pooling station with a paper ballot. (Remote extension is also possible by randomly preallocating secret vote collection stations to voters and still keeping transparency by cross accountability between stations and a reasonable expectation that only a minority of voters would have cast in secret vote collection stations and thus would affect election result marginally. ) 

The accountability of the election also simplifies. We only need to check that each outgoing pseudonym from the knot is owned by one incoming pseudonym and that valid pseudonyms have signed votes. Fortunately, there are ways to do that.

## How to tye a strong knot

Imagine a classroom full of people where the teacher passes through a blank page on which each pupil shall write his secret pseudonym signature and, before passing the page to the next pupil, folds it in. After the page had gone through all class, the teacher opened the page and got the list of all pseudonyms. 

The page is passed through a second time to assure their legitimacy and that the teacher had not made themselves up to boost their own popularity. This time each pupil is asked to sign the page if he/she can find their pseudonym signature in the list. When all signatures are collected, the end result is a knot with input and output pseudonyms where exactly each pupil owns one pseudonym, but you would not be able to tell whom. Thus it is an exact equivalent of the knot. 

Such setups have actually been implemented in the blockchain context as in the CoinShuffle protocol. The beauty of this approach is that one needs only a cryptographic signature scheme to make it work. In addition, only partial synchronicity is necessary between members as multiple braiding steps can be performed between different pseudonyms staging multiple knots. Thus if eventually a quantum computer is being built, we can just replace cryptographic primitives with QC-resistant counterparts. 

An alternative that held a great promise decades ago is using blind signatures. In this setup, you would put your pseudonym in the envelope and come in at the voter's registration place, where the authority would put a stamp on an uncovered place without revealing the vote. Then each voter could use the stamped pseudonym as proof that his secret pseudonym is eligible to participate in the elections. 

One major drawback with such a system is that there is no way to be assured that the adversary could have gained access had put a stamp on his own pseudonyms. For this reason, blind signatures have been sidelined in voting system designs. Nevertheless, it is a cool primitive which enables an authority to enforce quotas without violating users' privacy. 

Another promising primitive is using a ring signature scheme. Such primitive enables every member of the group to issue a signature on behalf of the group, and with additional primitives, it can be possible to tell if two signatures belong to the same member. However, one of the main obstacles to using it in practice for voting systems is that signatures computation costs and its length grows substantially with group size (like one initially used in Monero). Alternatively, more efficient schemes exist, but they do introduce an initial setup phase to generate a common reference string which, if compromised, can enable an adversary to issue a valid signature (like one used in ZCash). So it seems that we do need to resort to a teacher in the classroom moving a page around to tie strong uncompromisable knots.

Fortunately, there is an alternative employing zero-knowledge proofs of shuffle. Although proofs of shuffle have mainly been used in re-encryption mixnet where mixes are set as a pipeline for the votes, it can also be used for forming anonymized pseudonym sets. As it is an integral part of the PeaceFounder's voting system design, let's have a closer look at how it does work for a set of voters:

1. (Setup) Each voter generates a secret key `y` and publishes a public key `Y <- g^y` to a roster approved by election organizers. After every participant has done so, we have a list of eligible public keys:
   `<Y_1, Y_2, Y_3> with a relative generator g`
2. A mix then re-encrypts and shuffles all member pseudonyms as public keys taking `g` and a relative generator `X <- g^x`, where `x` is its session-generated secret key:
```
(a, b) <- (X^r, Y * g^r)
<(a_2, b_2), (a_3, b_3), (a_1, b_1)>
```
3. Procedingly mix uses his secret key and calculates the new public key with a relative basis. In the end, forming an eligible public key list on a new basis:
```
Y' <- b^x/a = (Y * g^r)^x / X^r = Y^x
<Y_2', Y_3', Y_1'> with a relative generator X
```
4. Finally, each voter then can issue ordinary signatures with relative generator `X`, which would have a public key `Y' <- X^y`. The signature would be recognized to belong to one group member but would be anonymous because of shuffling. The procedure can be repeated multiple times with different mixes, thus solidifying anonymity.

The mix does not calculate the shifted list `<Y_2', Y_3', Y_1'>` directly as `Y^x` because there is an efficient and robust zero-knowledge proof available for step 2 and steps 3. In particular, proof of shuffle (step 2) has multiple propositions on how to do them efficiently, but one particularly stands out: the WikstromTerelius variant implemented the Verificatum project. It is capable of encrypting 100k ciphertexts under 30 min, scales linearly, have been deployed in real elections around Europe and is being used in national elections in Estonia. In addition, it is available under an MIT licence and is patent-free. Even more, the setup to use the WikstromTerelius ZK PoS phase is trapdoor free as common reference strings can be generated in a verifiably random way. A rare occurrence in the vast literature of zero-knowledge proofs. Similarly, for step 3, a zero-knowledge proof of decryption can be used for which a well-known and straightforward trapdoor-free implementation exists. 

The end result is that the mixing part can be safely delegated to a third party whose security is not of any concern as long as it can make correct proofs with a given specification. It would not be far-fetched that an ordinary citizen with a small desktop computer could take part in anonymizing pseudonyms for local elections without either party worrying that they messed things up. Because of this property, this voting system does exhibit strong software independence where mistakes can be fixed as they happen without needing to rerun elections. Thus although the voting system runs one of the most complex computations during anonymization, it is cheapest to run and deploy as security comes free. 

------------------

  * Essential resources for zero-knowledge proofs 
    * The first paper showing logarithm equality
    * Vitaek blog post
  * Recomputing public keys for shifted generators and their variations have already been proposed together with voting systems but seems to have been sidelined
    * DSA1
    * DSA2
    * CryptoSanta
  * For WikstromTeralius variant of shuffle, check out
    * verificatum.org
    * Haeinis pseudocode
    * Verifier specification


# Vision


Present voting systems and voting developments seem to be on the wrong track. The pressure from the public and politicians to have mobile internet voting could end democracies in many countries. It is not far-fetched to compare them to a single ballot box for a nation managed by a small elite. An uncompromised voting alternative system is vitally necessary to change tracks and improve democratic decision-making in ways not previously possible with a paper ballot. This is what PeaceFounder stands for:

  * A strong software-independent voting system where mistakes are an opportunity to learn and can be monitored with publicly available data
  * Privacy is ensured through a cascade of mixes which do not need to be trusted, and one of them can be your desktop computer
  * Versatile and innovative ballots:
    * cardinal, preferential voting is possible
    * complex ballots with a budget constrains
    * statistical ballots where a large ballot is split into smaller ones and assigned verifiably random to anonymous voters reducing repetitive work and amplifying each voter's responsibility
    * ability for voters to change their votes after elections making untrusted representatives lose their seats and making them more accountable to society
  * Accessible trust for voters. Every voter can see their vote is cast as intended and counted as cast and can do vote counting and auditing elections themselves.
  * Trusted party-free design.
  * Unstoppable and defendable elections by third parties.
  * Extendable with specialized hardware to support coercion resistance.

# Design

PeaceFounder is an evoting system which relies on advanced developments in cryptography/privacy. It relies on zero knowledge proof of shuffle implemented in ShuffleProofs.jl as well as the ability to anonymously access buletinboard and send messages to it for consideration to avoid being tracked by IP address. For traffic anonymization wrapping of existing solutions such as TOR is planned at the end stages of the project. 

For now let's get through main repositories of the PeaceFounder project.

## CryptoGroups.jl

## ShuffleProofs.jl


## PeaceFounder.jl

This is where voting system will come together for deployment of mixes, bookeepoing of buletin board, vote collection srervices, different strategies for configuring and proposing ballots and clent side interactions. A CLI interface for all involved parties will be available heere. 


# FAQ

## How to get in touch?

The project currently does have only one developer: Janis Erdmanis. You can get in touch with me over janiserdmanis@protonmail.ch I will be happy to have a chat on whatever which may be related to this project. 

## Why Julia?

    Because I did not want to learn or write Java. 

More serisoly speaking Julia type ssytem together with multiple dispatch makes it possible to have a lean, modular codebase which is cross platform and rarelly breaks things when Julia version is updated. For instance, ShuffleProofs.jl tests works on julia 1.0 while it was developed on julia 1.7 without any concern to backwards compatability. 

Furthermore, a lot of evoting system parts are not yet rigorously specified and it may be the case that some intended uses of cryptographic primitives may not be secure. Thus ability to refactor/reorganize code is important in the current state of the development. 

In the future when protocol specification will get stabilized (years ahead) a question on whether to stay on the Julia will become relevant in the context of making a mobile application. In the meantime let's have fun :)












