@def title = "Solution"

# Solution

~~~
<div class="container" style="padding-top: 50px;">
<img src="../assets/knot.png" alt="" style="width: 100%;"/>
<div class="source" style="color: grey;">CC: Jānis Erdmanis</div>
</div>
~~~

The core primitive for the PeaceFounder e-voting system revolves around the ability to generate digital signatures using a single private key for distinct generators, all while maintaining the security of the key. The signatures in such cases are supplemented with a corresponding public key for a relative generator at which the signature is issued. A relationship between these public keys can be established by showing an exponent connecting the relative generators or forming zero-knowledge proof demonstrating the equality of discrete logarithms. 

The concept of unlinkability can be harnessed to create an interconnected structure using multiple private keys resembling a knot. In this structure, input **pseudonyms**—public keys derived by exponentiating input relative generator with private keys—are bound to output pseudonyms. To achieve this, a dealer exponentiates a relative generator and pseudonyms with the same secret exponent and then shuffles the resulting output pseudonym list. We shall refer to this procedure as **braiding** to distinguish that from mixing objectives where input retains the original form after going through a mix cascade. 

To ensure integrity in resulting braids, in particular, that braider had not replaced output pseudonyms with its own, zero-knowledge proofs can be used. This can be done by reformulating exponentiation as ElGamal re-encryption shuffle and consequent decryption as recently proposed in a novel e-voting system design. The zero-knowledge proof of shuffle has been successfully made widely available for ElGamal re-encryption mixnets with Verificatum, which offers proof with relatively standard cryptographic assumptions on the difficulty of computing discrete logarithms and a decisional Diffie Hellman assumption. Combined with zero knowledge proof of correct decryption, a braid proof can be formed, proving to everyone that computations are performed honestly without revealing braider's secret exponentiation factor, which can be safely forgotten afterwards. The resulting braid primitive is available in the *ShuffleProofs.jl* package, which also reimplements a Verificatum-compatible proof of shuffle in Julia. 

The braid primitive enables anonymisation to be transactional with one braider at a time, thus eliminating the need for complex coordination of parties as it is typical for many re-encryption mixnet or homomorphic-based e-voting systems. In addition, it's also possible to publish this evidence on a bulletin board for everyone to verify without compromising participation privacy.

~~~
<div class="container">
<img src="../assets/model-dependencies.svg" alt="" style="width: 75%;"/>
<div class="source" style="color: grey;">CC: Jānis Erdmanis</div>
</div>
~~~

Member's client devices actively monitor the bulletin board, ensuring the immutability of records by tracking bulletin board commits. This method of oversight is scalable, as members only request a history tree consistency proofs, eliminating the need to replicate the actual bulletin board records. These proofs guarantee the protection of their votes and others, assuring that modifications to records are prevented when fresh entries are appended to the bulletin board. This streamlined approach enables prompt identification of bulletin board dishonesty, whether through removing or altering records or the malicious creation of a counterfeit ledger to exclude undesirable votes from the official tally.

The auditor can avoid a formal association to verify the integrity of a resulting tally, as all relevant data is on the public bulletin board (except for the registration roll). This autonomy allows members the freedom to select their trusted auditors. If there are unresolved disputes with the bulletin board, members can even take on the auditor role and, if necessary, seek to replace the bulletin board authority. The system's transparency further allows auditors to cross-check each other's findings, promoting accuracy and preventing the spread of false claims.

~~~
<div class="container">
<img src="../assets/receipt-freeness.svg" alt="" style="width: 75%;"/>
<div class="source" style="color: grey;">CC: Jānis Erdmanis</div>
</div>
~~~

Another essential component for safeguarding democratic elections is the prevention of coercion and vote buying. A significant risk to the PeaceFounder system is for a briber to ask members to forward their votes through a proxy channel they control. To counter this threat, the bulletin board hides the actual votes, showing only their hashes, and gives voters an option to revote, ensuring both receipt freeness and vote fairness. A sequence number along the vote ensures that only the latest cast vote on the device matters. This method undermines the confidence of vote buyers and coercers, as it prevents them from ensuring that the votes they've acquired will be counted in the final tally. As a consequence, they can only return bribes after votes are published on the bulletin board.

To ensure the voting process's integrity, the voter's device must remain trustworthy. With the presence of malware, there's a risk that the device could falsely reassure the voter that their vote is cast as intended. To counter this threat, after the vote is submitted, the voter receives a receipt containing a *timestamp* of the vote's record, the *pseudonym* under which it was cast, and the *index* where the vote resides on the ledger. Once voting concludes and all votes are disclosed on the bulletin board, the voter can cross-reference their receipt with the bulletin board, verifying that the vote at the provided *index* aligns with their choice and matches the *timestamp* when the vote was cast, as well as checking that it was included in the final tally. By maintaining a written record, voters can ensure the accuracy of their vote, safeguarding against malware alterations, unauthorised revoting, or any attempts to redirect multiple voters to a singular vote.

However, it's essential to acknowledge that voters can only detect malware interference post-vote when comparing their receipt to the bulletin board. Additionally, a voter cannot provide evidence to others that their vote was compromised by malware, which means these instances aren't audited within the PeaceFounder system. As a result, members are encouraged and are responsible for utilising more secure devices less susceptible to malware attacks. For more advanced threats, like a briber mandating malware installation for monitoring or extracting the master key, the use of tamper-resistant hardware becomes essential – an extension larger organisations or states might consider.

## Summary

The PeaceFounder e-voting system ensures security, transparency, and privacy as follows:

**Security**:

- **Centralised Responsability**: PeaceFounder does not rely on multiparty ceremonies to ensure voters' privacy or distributed ledgers for the immutability of the records. This enables a single maintainer deployment. 
- **Anonymity Braiding**: The braid primitive lets anonymisation be handled with one transaction at a time, circumventing the need for multiparty ceremonies, which are vulnerable to sabotage attacks. Integrity is guaranteed with battle-tested zero-knowledge proofs, allowing the braiding to be done by an entirely untrusted party.
- **Malware Detection**: The vote displayed on a voter's device matches the vote registered on the bulletin board, preventing any mismatches due to potential malware interference. The device detects if votes have been cast outside the device in cases of key leaks due to spyware or faulty cryptography.
- **Undisputable Evidence:** Even if an adversary controlled the system, there would be no way to fabricate election results without being detected in the public evidence. 

**Transparency**:

- **Embedded Bulletin Board Oversight**: Member devices actively monitor the bulletin board, ensuring the immutability of records. This provides an immediate layer of oversight and transparency.
- **Individually Verifiable**: After the vote, members can verify their receipt against the bulletin board to ensure their vote was registered correctly, assuring them that their vote did count.
- **Accessible Experience**: PeaceFounder is designed to minimise voters' exposure to complicated cryptographic elements, ensuring that they can vote privately without needing to delve into complex technical details while maintaining the cryptographic soundness of the shown information.
- **Auditable**: The auditor plays a central role in upholding the system's integrity. They validate bulletin board records, ensuring each vote is eligible and unlinkable. They also prevent the spread of misinformation by cross-checking each other's findings, preventing the spread of false claims.
- **Separate Authenticity Auditing:** Auditing of the authenticity of the members can be done separately from elections and thus can be less frequent than in conventional E2E verifiable systems.
- **Monitorable**: Auditors can observe uncooperative bulletin boards, particularly in case a member's vote can't be recorded and form a piece of incriminating evidence if they attempt to do so.

**Privacy**:

- **Anonymity**: As member pseudonyms are braided sequentially with one braider at a time, only one honest braider is necessary to guarantee the anonymity of the cast vote. 
- **Coercion and bribery resistance**: Features such as time-restricted receipt freeness and revoting ensure that voters cannot be coerced or bribed effectively, as their actual votes remain private.

In summary, the PeaceFounder e-voting system is built upon the idea of verifiably anonymising voters' pseudonyms rather than their votes. This addresses the tension between security, transparency and privacy without requiring the coordination of multiparty ceremonies. By implementing innovations and focusing on both voter experience and cryptographic soundness, PeaceFounder presents a holistic approach to e-voting.

------------------

Essential resources for zero-knowledge proofs:


{{cite brickell1993 buterin2022}}

Recomputing public keys for shifted generators and their variations have already been proposed together with voting systems but seem to have been sidelined:

{{cite ryan2016 haenni2011 neff2001}}

For WikstromTeralius variant of shuffle, check out: 

{{cite wikstrom2005 wikstrom2009 terelius2010 brenner2017 wikstrom2011}}
