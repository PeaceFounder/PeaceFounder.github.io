@def title = "FAQ"

# FAQ

### How to get in touch?

The project currently does have only one developer: Janis Erdmanis. You can get in touch with me at janiserdmanis@protonmail.ch I will be happy to chat about whatever may be related to this project. 

### Why Julia?

Many legacy software in cryptography is written in C, C++ and Java, making them an obvious choice for implementing an e-voting system. However, these languages have shown their age in the presence of innovations in code reuse and its deployment like Rust, Go, Swift, Julia etc. However, Julia may seem least desirable as it lacks considerable amount of cryptographic libraries such as CryptoGroups.jl, CryptoSignatiures.jl and HistoryTrees.jl which would be already been available in Rust and Go from a start.

The reason for choosing Julia can partly be attributed to my familiarity with the language. As a PhD student, I spent the ins and outs of effective Julia codebase management and got addicted to the multiple dispatch and corresponding type system. Objectively speaking, Julia offers everything that a modern language like Rust, Go, and Swift could offer in terms of development speed and deployment of code. But in addition, it does offer great opportunities to experiment with the ability to use a type system for making code more modular, with multiple dispatch and Unicode allowing to make code as lean as possible, closely resembling pseudocodes in the papers. And the worry-free compatibility between platforms and Julia versions is a great plus. For instance, ShuffleProofs.jl was developed using Julia 1.7 as a testing platform; however, with no changes, it works with no issues, also on Julia 1.0, now a 4-year-old version. 

In future, though its dynamism of Julia may become less attractive when the protocol is stabilised, targeting mobile will become relevant. However, that is far years ahead until such a problem would rise, and development within the Julia community, in a sense, is pushing in that direction with StaticCompiler.jl and BinaryBuilder.jl. Thus in the meantime, let’s have fun :) 

### How does PeaceFounder compare with XYZ?

PeaceFounder aims to raise verifiability to a new level by providing conclusive public evidence that elections have happened fairly. To achieve this goal, a zero-knowledge proof of shuffle for encryption shuffle takes a central part of the design to get this evidence. The same proof system has been used in elections before in shuffling votes for re-encryption mixnet voting system pipeline. 

A typical re-encryption voting system makes conclusive evidence for election integrity but closes that behind the doors and is available only to auditors with special access. We could place the Estonian election system and other state-wide systems in this category where the Verificatum system has been used. I added another column to see what happens if all evidence in such a system is published. A Helios voting system could fit into this category, providing an explicit "Coerce Me" button. 

~~~
<style>

  td.ok {
      background: #93D150;
  }

  td.fair { 
      background: #EDE373;
  }

  td.poor {
      background: #ED8B73;
  }


  td:first-child {
      background: #EAE9F4;
      width: 150px;
      border: 2px solid white;

  }

   td:nth-child(2) {
      border: 2px solid white;
  }

 td:nth-child(3) {
      border: 2px solid white;
  }

 td:nth-child(4) {
      border: 2px solid white;
  }

 tr:first-child {
      border: 2px solid white;
  }
</style>

<table>
  <tr style="border: 2px solid white">
    <th style="border: 2px solid white"></th>
    <th style="border: 2px solid white">Typical re-encryption voting system</th> 
    <th style="border: 2px solid white">Transparent re-encryption voting system</th> 
    <th style="border: 2px solid white">PeaceFounder</th>
  </tr>

  <tr>
    <td>Vote</td>
    <td colspan="2">ElGamal encrypted, signed non-anonymously</td>
    <td>Plaintext, signed with a pseudonym</td>
  </tr>

  <tr>
    <td>Voting types</td>
    <td class="fair" colspan="2">Multiple options, referenda; limited to a small number of bits</td>
    <td class="ok">Multiple options, referenda, cardinal, quadratic, budget, preferential, whistleblowing</td>
  </tr>

  <tr>
    <td>Long ballot sharding</td>
    <td class="poor" colspan="2">A link between shard and voter identity is necessary; anonymisation can happen only within a shard, complex implementation.</td>
    <td class="ok">Shard is assigned to the voters pseudonym; thus, a link is secret; trivial implementation.</td>
  </tr>

  <tr>
    <td>Evidence</td>
    <td class="ok" colspan="2">ZKP of shuffle and threshold decryption; signed encrypted votes</td> 
    <td class="ok">ZKP of shuffle and decryption; signed plaintext votes</td>
  </tr>
  <tr>
    <td>Auditability</td>
    <td class="fair">Evidence is behind closed doors, and auditors need special access</td>
    <td class="ok">All evidence is public</td>
    <td class="ok">All evidence is public</td>
  </tr>
  <tr>
    <td>Threats to integrity</td>
    <td class="fair">Auditors who verify evidence conspire with election officials; public key cryptography is broken</td> 
    <td class="ok">Public key cryptography is broken</td> 
    <td class="ok">Public key cryptography is broken</td>
  </tr>


  <tr>
    <td>Threats to accessibility</td>
    <td class="poor">If the authentification server is infected, it can make the voting experience artificially harder for voters who may not vote in desired ways (negative vote buying); DDOS attack on the authentification server</td>
    <td class="ok">DDOS attacks on vote collection server: can be mitigated as a third party can take over vote collection, or votes can be sent over mail;</td>
    <td class="ok">DDOS attacks on vote collection servers or TOR: can be mitigated as a third party can take over vote collection, or votes can be sent over mail;</td>
  </tr>


  <tr>
    <td>Threats to anonimity</td>
    <td class="fair">All internal mixes conspire or are being spied upon; decryption keys have leaked; spyware on the phone.</td>
    <td class="fair">All outsourced mixes conspire or are being spied upon; decryption keys have leaked; spyware on the phone.</td>
    <td class="ok">The interested party controls the TOR network; an unlimited number of outsourced mixes conspire or are spied upon; spyware on the phone.</td>
  </tr>

  <tr>
    <td>Participation privacy</td>
    <td class="fair">The server knows</td>
    <td class="poor">Everyone knows</td>
    <td class="ok">Yes</td>
  </tr>

  <tr>
    <td>Revoting</td>
    <td class="fair" colspan="2">Until election ends</td>
    <td class="ok">Even possible to change the vote at midterm</td>
  </tr>

  <tr>
    <td>Coercion resistance</td>
    <td class="ok">Possible to revote secretly at the pooling station</td>
    <td class="poor">Coercer sees in the public evidence if the vote has been counted</td>
    <td class="ok">Possible to revote secretly at the pooling station</td>
  </tr>
    
  <tr>
    <td>Time to result</td>
    <td class="fair">Encrypted votes go through mixes where they generate proof; lastly, threshold decryption is used. Time-consuming ZKP can be delayed and rely on operational security</td>
    <td class="poor">Encrypted votes go through outsourced mixes but may be inaccessible, which can cause delays; lastly, threshold decryption is used</td>
    <td class="ok">Votes are instantly available to be run through a counting program</td>
  </tr>

  <tr>
    <td>Doomsday scenario</td>
    <td class="poor">Auditors disagree between themselves; decryption parties had lost the secret, and no election result can be announced; a large number of user devices infected with malware manipulate the vote before it's signed (detectable?)</td>
    <td class="fair">Decryption parties had lost the secret, and no election result could be announced; a large number of user devices infected with malware manipulate the vote before it's signed (detectable?);</td>
    <td class="ok">A large number of user devices infected with malware manipulate votes before signed (voters can detect this by looking at the bulletin board);</td>
  </tr>

  <tr>
    <td>Cost/Security</td>
    <td class="poor">Internally managed mixing parties for a quick result; decryption secret management with multiple internal parties; arrangement of independent auditors; expensive</td>
    <td class="fair">Decryption secret management with multiple internal parties;</td>
    <td class="ok">Outsourced mixing; failures recoverable; no secrets to keep => cheap</td>
  </tr>

</table>

~~~

The colours green, yellow, and red are relative measures of how well a corresponding property for a voting system is achieved compared to alternatives. Note also that this is a subjective selection of frame and evaluation. For instance, participation privacy may be undesirable when a law obligates citizens to vote, like in Australia or requires them to know who had participated. 

### How does the PeaceFounder system protect against vote selling and coercion? 

Coercion resistance can be implemented by allowing voters to revote and keep it a secret that they have done so. When counting the votes, those who have voted at the pooling station can be substracted by the ellection authorithy from a public ledger. It's also possible to do this remotely and add different cross-accountability mechanisms, but now that is out of the scope of the PeaceFounder project. Also, to do that properly, one would need to add hardware so that coercers could not extract voters secret keys. 

An alternative way to look at coercion resistance is through a way an individual could protect his/her voters privacy. The ability to whistleblow anonymously in case one offers to buy a vote or has heard about that from a friend could enable easier investigation. Sharding of long ballots can prevent the briber from reaching the key voters who decide on a sensitive question. Also, voting more often could make life more inconvenient for coercers, and bribers as a single ballot would have less stake in it. 































