@def title = "About"
@def tags = ["syntax", "code"]


~~~
<style>
/* Container holding the image and the text */
.container {
  position: relative;
  text-align: center;
  color: grey;
  font-size: 12px;
  margin: auto;
}

.source {
  position: absolute;
  bottom: 8px;
  right: 16px;
  transition: opacity 1s;
  transition-timing-function: ease-in;
  opacity: .4;
  color: grey;
}


.container img:hover + .source {
opacity: 1;
}

.container img {
width: 100px;
}

</style>
~~~



~~~
<div class="container">
<img src="../assets/vision.png" alt="" style="width: 100%;"/>
<div class="source" style="color: grey;">CC: Janis Erdmanis</div>
</div>
~~~

PeaceFounder is a cutting-edge e-voting system solution that seamlessly combines centralised responsibility with decentralised accountability while leveraging advanced transactional anonymisation for superior security, transparency, and privacy. It brings unparalleled ease of deployment and adaptability, all while safeguarding the foundational principles of democracy.

## Why Choose PeaceFounder?

**Centralised Responsibility:** PeaceFounder introduces a unique e-voting approach by anonymising voter pseudonyms instead of votes, setting it apart from conventional E2E systems. This design eliminates the risks and complexities of multi-party protocol ceremonies and sidesteps the honest quorum assumption. The result is a simplified system that can be effortlessly deployed by a single maintainer, presenting a groundbreaking solution for organisations.

**Decentralised Accountability:** Every member's client ensures the immutability of records on the bulletin board without replication, allowing oversight to scale naturally with the growing voting population. Members employ independent auditors to address uncooperative bulletin boards and avoid vote suppression. After the vote, all evidence is published on the bulletin board, letting everyone to audit.

**Transactional Anonymization:** PeaceFounder takes a distinctive approach by anonymising voter pseudonyms rather than their votes. This allows for step-by-step anonymisation with individual mixes. Zero-knowledge proofs maintain the process's integrity, and the system's transactional design offers superior opportunities for anonymisation. 

**E2E Verifiable:** The system's evidence is software-independent, ensuring that even if an adversary gains full control over the deployed system, any manipulation of the election results would be detected. This is assured by the use of proven and battle-tested cryptographic primitives. 

**Instant Results:** By anonymising voters' pseudonyms rather than the votes themselves, election results can be tallied and announced immediately after the vote, independent of the number of anonymising mixes employed.

**Voter-Friendly Experience:** The voting client seamlessly balances a user-friendly experience with rigorous security measures. Offers seamless and continuous registration for new members, allowing the organisation to grow. Provides a receipt to verify the inclusion of a vote in the final tally, fertilising trust in the voting process.

**Comprehensive Voter's Security**: Utilises unique tools such as sequence numbers and bitmasks to enable voters' clients to detect private key leaks, whether from spyware or poor cryptography. Ensures detection of potential malware intrusions post-vote. Features revoting and time-restricted receipt freeness that protects from coercers and bribers. 

**Diverse Ballot Support**: Unlike traditional systems, PeaceFounder supports diverse ballot types such as cardinal, budget planning, and preferential ballots, promoting broader democratic practices. Pseudonymity also enables fluid voting, letting voters revise their decisions within set periods during a representative's term and ballot sharding, breaking down lengthy ballots into smaller sections for distribution among members, thus resolving the voting paradox.

**Effortless Integration**: PeaceFounder's modular design easily integrates with current political and digital platforms. It offers customisation options for publishing voting proposals, authenticating new members, and providing electoral rolls for third-party auditors to verify member authenticity. Also, being open-source and available under a permissible Apache 2 license will preserve your investment in its adoption.

*Some features are not supported yet but are straightforward to implement. Reach out to me if those interest you.*







