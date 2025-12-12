@def title = "PeaceFounder - Why it matters?"
@def tags = ["syntax", "code"]

# Why It Matters

*The Missing Infrastructure for 21st Century Democracy*

~~~
<div class="image-hero">
  <img src="/assets/extern/accountability.jpg" alt="Panopticon" />
  <div class="img-source">Postcard 1927</div>
</div>
~~~

The same technologies that promised to democratize knowledge and empower citizen voices have become sophisticated instruments of surveillance and deception. Mobile phones can broadcast injustices worldwide in seconds, yet facial recognition systems can track protesters long after demonstrations end. Social networks enable grassroots organising, yet algorithmic manipulation shapes what we see, think, and believe.

Under these conditions, traditional forms of protest like marches and demonstrations become increasingly vulnerable. Surveillance offers authoritarian regimes a simple means to keep society in check by weeding out outliers in silence. Whereas algorithmic deception leaves citizens confused, unable to distinguish authentic grassroots movements from manufactured campaigns designed to fracture solidarity and undermine collective action.

As traditional channels of democratic expression become compromised or ineffective, the ballot box emerges as democracy's last protected sanctuary. It enables us to express our true opinions and learn public sentiment in a trustworthy manner without trusting a surveyor while keeping our opinions private. As such, it carries the full weight of democratic expression and must be secure against all forms of surveillance, keeping each voter's vote private while enabling public verifiability for everyone to fight against deception.

---

As such, we need to vote more often and on more complex ballots to get the discourse back to core issues rather than the labels assigned in misinformation campaigns and algorithmic echo chambers. But how can we do so? Paper ballots require mobilisation of poll workers, and people must travel to polling stations in person. The logistical burden means we can consult the public will only a handful of times per year, creating long windows where governments act without democratic mandate—gaps that deception campaigns exploit to manufacture consent or sow confusion about actual public sentiment.

E-voting systems could enable both rapid deployment and complex preference structures—ranked choices, conditional logic, budget constraints—letting citizens express nuanced positions that resist manipulation through oversimplification. However, current e-voting systems fail at what makes voting a sanctuary: trustworthy verification without surveillance.

Public verifiability is essential. Computers have hundreds of chips, each of which can host critical malware that manipulates the final tally. For this reason, the tally needs to be Software Independent, meaning that a flaw in execution cannot leave an effect on the tally undetected. This is what current E2E verifiable systems already offer. But they fall short in making the evidence publicly available so that anyone can audit the integrity of the tally without requiring continuous engagement or signing NDAs. Even though most people won't find the zero-knowledge proofs convincing themselves, seeing diverse independent auditors verifying the evidence across borders would boost confidence, hence making public auditability a desirable goal.

Another shortcoming of existing systems is the way they implement individual verifiability. One of the threats is that a voter's device could be infected with malware when they cast their vote, which can alter it or drop it before it reaches submission, while deceiving the voter that all is well. Many systems rely on a second device, but if the first one had been corrupted, why wouldn't a capable adversary also corrupt the second one?

---

**The absence of progress on public auditability, individual verifiability without trustees and accessible deployments is the core motivation of the PeaceFounder project.** We improve universal verifiability by making evidence available in a public git repository that anyone can mirror and run continuous integration tests, which assures that the resulting tally consists only of registered voters who cast at most one vote. At the same time, anticipating the perception of a quantum threat, the use of perfectly hiding proofs ensures that even a quantum computer would not be able to uncover voters' choices in a collect-now-and-decrypt-later attack.

Individual verifiability is the second ingredient. We can't eliminate the possibility that the voting or verifier device is corrupt. Instead of relying on threshold trust assumptions, we make a different call. We suspect the verifier device is compromised and verify its output authenticity through interrogation, isolating it from external communication via a Faraday cage and typing in or scanning a barcode for a single publicly announced and voter-unique challenge, which can only be created after all votes have been received.

These two verifiability mechanisms, in addition to the transactional braiding mechanism for attaining vote privacy, make the election evidence undisputable, with no trusted parties involved other than the registrar who maintains the registration roll. Incidentally, this also makes the system much easier to deploy, as it eliminates all ceremonial steps to achieve independence and can be deployed in a centralized manner by the same vendor keeping the registration roll, making and delivering verifier devices, running the vote collection, and as a matter of fact providing users' mobile phones or personal computers (a privacy nightmare), as there is no means for deceiving the voter given the robust public evidence.

In addition, PeaceFounder can offer a more modern view of e-voting that no current e-voting system can achieve, thanks to its pseudonym-anonymisation mechanism and public tracker construction.

~~~
<div class="isolation-detail">
  <h3>Democratic Expression with PeaceFounder</h3>
  <div class="deployment-scenario">
    <h4>Complex Ballots</h4>
    <p>
      <b>Complex ballots</b> are nothing new and are already available for most e-voting systems that rely on mixnet construction. The Italian attack is, of course, a valid concern, but for ballots of moderate complexity, we can maintain voters' ability to deny their vote while making their preferences heard in nuanced budget planning or on preferential ballots.
    </p>
  </div>
  
  <div class="deployment-scenario">
    <h4>Fluid Voting</h4>
    <p>
      A new mechanism, previously unavailable, is <b>fluid voting</b>. With this mechanism, voters can revise their choices at previously agreed milestone points as circumstances evolve and new information emerges. Only voters who want to change or cast their vote need to do so, while the remaining votes remain intact. This is a great advantage of the used <b>trapdorless tracker construction</b>, which enables a replay at later times by the tallier, allowing votes to be nullified and new ones cast in a publicly verifiable manner.
    </p>
  </div>
  
  <div class="deployment-scenario">
    <h4>Ballot Sharding</h4>
    <p>
      Another novel mechanism enabled by the transactional braiding mechanism is <b>ballot sharding</b>. Instead of overwhelming citizens with a list of complex decisions, the system breaks issues into manageable shards distributed verifiably at random among participants while keeping the recipients anonymous. From the collected votes, a final tally can be inferred that amplifies each voter's influence while reducing the number of decisions each voter needs to make, preventing decision fatigue.
    </p>
  </div>
</div>
~~~

**This isn't just about better elections—it's about democracy's survival and evolution.** When traditional forms of collective action are compromised, when misinformation fractures social consensus, when surveillance chills free expression, we need voting systems that can handle more frequent consultation, more nuanced decisions, and more meaningful participation.

Technologies of surveillance and deception have already inflicted undeniable harm on democratic discourse. E-voting that renews democracy is possible. **PeaceFounder chooses empowerment.** It offers a path toward democracy that is more secure, more expressive, more responsive, and more genuinely participatory than anything we've known before. In a world where the stakes of getting democracy right have never been higher, this isn't just an innovation—it's a necessity.

~~~
<div class="research-highlight">
  <p style="font-size: 1.5rem; margin-bottom: 2rem;">
    <strong>Don't trust these claims—verify them!</strong>
  </p>
  <p>
  PeaceFounder is under active development. Reviewers at EVoteID 2025 found this approach interesting but identified the need for formal security definitions and proofs.
</p>
  <div class="cta-buttons">
        <a href="https://eprint.iacr.org/2025/1186" class="btn btn-primary">Read the Preprint</a>
        <a href="/solution" class="btn btn-secondary">Technical Overview</a>
      </div>
</div>
~~~