@def title = "PeaceFounder - EVoting Problem Analysis"
@def tags = ["syntax", "code", "text"]

# The PeaceFounder Solution
*Unconditional individual verifiability with receipt freeness via post-cast isolation*

~~~
<div class="image-hero">
  <img src="/assets/vision.png" alt="PeaceFounder Cryptographic Knot" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

## The Core Innovation

PeaceFounder introduces a revolutionary approach to remote electronic voting that solves the fundamental tension between verifiability and privacy. At its heart lies a **trapdoorless tracker construction** that derives security from information flow control rather than cryptographic secrets, enabling voters to independently verify their votes without trusting any authorities or vendors.


~~~
<div class="isolation-detail">
  <h3>What You Need to Trust (And What You Don't)</h3>
  
  <div class="trust-grid">
    <div class="trust-item no-trust">
      <h4>✓ Individual Verifiability - No Trust Required</h4>
      <p>Your voting calculator can be completely corrupted, and you'll still detect if your vote was manipulated. The isolation prevents corrupt calculators from showing you other voters' trackers, and any fake tracker will fail when you look it up on the tally board.</p>
    </div>
    
    <div class="trust-item limited-trust">
      <h4>⚠ Receipt-Freeness - Limited Trust Required</h4>
      <p>Only if you need protection from coercion does the voting calculator need to be tamper-resistant. This prevents coercers from extracting your real tracker or detecting whether you've set up a fake one.</p>
    </div>
  </div>
</div>
~~~

For anonymity, the system relies on generating digital signatures using a single private key for braided generators delivered to the voting device along with voting options once casting begins. As multiple independent parties participate in braiding before the voting phase starts, this enables computational hiding of the link between voters' identities and the pseudonyms with which votes are signed. This allows everyone to verify vote eligibility via zero-knowledge proofs while keeping voters private—much like verifying that a knot tied on multiple threads preserves input and output threads while preventing anyone from following them through.

The PeaceFounder system also resolves bulletin board deployment ingeniously. While existing systems rely on monitors that replicate the bulletin board to ensure votes are not selectively discarded during voting, PeaceFounder uses history trees that every voter's device employs with consistency proof chains to ensure bulletin board integrity without replication. This, combined with a ceremonyless anonymization procedure, enables fully centralized deployment with clearly defined responsibilities for the election authority, making it much easier to maintain accountability while preserving voters' privacy.


## How It Works: Four Phases


### Phase 1: Setup - Pseudonym Anonymization

~~~
<div class="image-hero" style="margin: 3rem 0;">
  <img src="/assets/braid.png" alt="Braiding" style="max-width: 75%;" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

Before voting begins, each voter receives a voting calculator containing a secret private key and registered public key. These public keys undergo **open transactional anonymization** through sequential braiding operations in an exponentiation mix. Anyone can participate in this anonymization process, with each braider providing zero-knowledge proofs of honest behavior.

This creates a braided generator and a list of eligible pseudonyms that determines your anonymous voting identity while maintaining eligibility verification. The beauty of this approach is that it eliminates the need for complex coordination—braiding can be done one transaction at a time by entirely untrusted parties.

### Phase 2: Voting - Cryptographic Commitments

~~~
<div class="image-hero" style="margin: 3rem 0;">
  <img src="/assets/voting.png" alt="Voting Process" style="max-width: 75%;" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

When you vote, your voting calculator creates a sophisticated cryptographic envelope containing two main components: a publicly verifiable part with cryptographic commitments and an encrypted part that only the tallier can access. The vote structure includes:

**Vote commitments** that hide both your selection and tracker preimages using perfectly hiding Pedersen commitments, **identity commitments** that bind your identity to the vote, and **encrypted openings** that contain the mathematical keys needed later for verification—all signed with your anonymized pseudonym.

~~~
<div class="content-highlight">
  <strong>Critical Security Step:</strong> After casting your vote, you must isolate your voting calculator using a kill switch or Faraday cage. This isolation is essential for unconditional individual verifiability.
</div>
~~~

~~~
<div class="isolation-detail">
  <h4>Why Isolation Works Even With Corrupt Devices</h4>
  <p>The isolation isn't about trusting your device—it's about <strong>information flow control</strong>. After voting closes, you get a unique challenge that only works with your vote. A corrupt calculator can't show you someone else's tracker because:</p>
  <ul>
    <li>It doesn't know other voters' challenges (they're published after isolation)</li>
    <li>It can't guess valid trackers (probability: 1 in 2^256)</li>
    <li>Any fake tracker it shows won't exist on the tally board</li>
  </ul>
  <p><strong>Simple isolation methods:</strong> Airplane mode, unplugging ethernet, or a Faraday cage. The key is preventing communication, not device integrity.</p>
</div>
~~~

### Phase 3: Tally Board Announcement

Once voting closes, the tallier processes all collected votes to create the public tally board. A crucial security feature is that the tallier computes a **verifiably random seed** from all vote commitments, which generates unique tracker challenges for each voter. This ensures no tracker can be computed before the voting phase closes—a key requirement for unconditional individual verifiability.

The system then publishes a tally board containing all votes with corresponding tracking numbers, created through a verifiable commitment shuffle that anonymizes votes while preserving vote-tracker pairings. This provides **everlasting privacy** through information-theoretic hiding rather than computational assumptions.

### Phase 4: Verification - Post-Cast Isolation

~~~
<div class="image-hero" style="margin: 3rem 0;">
  <img src="/assets/individual_verifiability.png" alt="Individual Verifiability" style="max-width: 75%;" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

The final phase enables you to verify your vote was correctly recorded and counted. You retrieve your unique tracker challenge from the bulletin board along with proof of your pseudonym ownership, then enter this challenge into your isolated voting calculator.

Your calculator computes your personal tracker using the formula: $t = e \cdot \theta + e^* \cdot \lambda$, where $e$ is your challenge, $e^*$ is a hash of your challenge, and $(\theta, \lambda)$ are your tracker preimages. This dual-component design prevents coercers from linking trackers computed during voting to actual trackers after the voting phase closes.


~~~
<div class="unconditional-explanation">
  <h4>What "Unconditional" Really Means</h4>
  <p>Unlike other e-voting systems where verifiability depends on trusting authorities, software, or hardware, PeaceFounder's verification works even when:</p>
  <ul style="margin-left:2rem;">
    <li>Your voting calculator is completely compromised</li>
    <li>The tallier tries to manipulate results</li>
    <li>Your voting device has malware</li>
    <li>Election authorities are corrupt</li>
  </ul>
  <p>You only need to trust: (1) your ability to isolate the calculator temporarily, and (2) basic math (discrete logarithm hardness).</p>
</div>

<div class="feature-callout">
  <h3>Receipt Freeness Through Tracker Override</h3>
  <p>For protection against coercion, you can configure your calculator to display any tracker from the tally board instead of your real one, allowing you to hide your true vote while maintaining your ability to verify independently.</p>
</div>


<div class="isolation-detail">
  <div class="image-hero" style="margin-bottom:1.5rem; margin-top:0rem;">
    <img src="/assets/decoy-states.png" alt="Decoy States" style="max-width: 60%;" />
  </div>

  <h4>FAQ: How Can You Verify AND Deny Your Vote?</h4>
  <p><strong>Q:</strong> If I can show fake trackers to coercers, how is my verification meaningful?</p>
  <p><strong>A:</strong> The tracker override is a local setting you control. YOU know whether you're looking at your real tracker or a fake one. A coercer cannot tell the difference as it has no control on the flow of information in the calculator as long as it remains in your possession, but you do. This gives you both genuine verification and plausible deniability.</p>
</div>
~~~

## Deployment Architecture

~~~
<div class="image-hero" style="margin: 3rem 0;">
  <img src="/assets/model-dependencies.svg" alt="PeaceFounder Security Model" style="max-width: 75%;" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

PeaceFounder operates as a modular microservice architecture that manages the **deme**—the system state defining participants and their permissions. The architecture centers on three key roles with clearly defined responsibilities and trust boundaries, designed to scale from small organizational elections to large-scale democratic processes.

The guardian configures the deme and manages the identities of registrars and proposers, establishing foundational trust relationships and system parameters that define who can register voters and initiate elections within the deme. The registrar handles member registration and maintenance, requiring SMTP configuration for email invitations and ideally a public IP address with DNS setup for optimal accessibility. Members receive invitations, register their devices, and confirm registration through a shared identity provider, enabling seamless integration with existing authentication systems and supporting remote registration through established organizational portals.

The proposer creates and submits election proposals that define the voting options, time windows, and other election parameters. During the voting phase, voters receive these proposals containing the braided generator, voting time window, and voting options. The anonymization process occurs through external demes that perform exponential mixing on pseudonyms. This automated braiding process produces anonymized outputs with accompanying zero-knowledge proofs of integrity, requiring no manual coordination and enabling security through decentralized participation or centralized brokers as needed. The system maintains a pool of certified braiders to ensure anonymization can proceed even if some participants become unavailable.

When elections begin, registered voters receive the proposer's election proposals containing braided generators, time windows, and voting options through redundant delivery channels. The voting process maintains anonymity through Tor-based delivery with fallback anonymization networks, where voters sign their selections with anonymized pseudonyms and submit them through the anonymity network to prevent traffic analysis and tracking. If primary anonymity networks become unavailable, the system gracefully degrades to alternative privacy-preserving channels while maintaining audit trails of any such transitions.

~~~
<div class="isolation-detail">
  <h3>Deployment Options</h3>
  <div class="deployment-scenario">
    <h4>Basic Deployment: Individual Verifiability Only</h4>
    <p>
      In basic deployment without voting calculators, voters select their preferences on their voting device and sign with their pseudonym, delivering the vote anonymously via Tor. Once voting ends, voters can locate their vote listed alongside their pseudonym alias with a timestamp (or identity commitment in future versions) confirming exclusive vote ownership. The system provides clear voter education materials and simplified verification interfaces to ensure accessibility across technical skill levels.
    </p>
    <p><strong>Best for:</strong> Elections where vote buying and coercion are not primary concerns, but verifiable integrity is essential.</p>
  </div>
  
  <div class="deployment-scenario">
    <h4>Enhanced Deployment: With Receipt-Freeness and Everlasting Privacy</h4>
    <p>
      For deployments with voting calculators, voters make their selection on the voting device, then enter their PIN into the voting calculator to assemble vote commitments, tracker commitments, and encrypted openings. The voting device delivers these via Tor, after which voters isolate their calculators from all communication.
    </p>
    <p>
      Post-voting, voters access their preferred bulletin board mirror to retrieve their unique challenge alongside their identity commitment. They enter this challenge into their isolated calculator to compute their personal tracker, enabling vote location on the tally board. For coercion resistance, voters can configure their calculator into a decoy state using any preferred tracker from the tally board. 
    </p>
    <p><strong>Best for:</strong> High-stakes elections where coercion resistance and long-term privacy protection are critical requirements.</p>
  </div>
</div>
~~~

The system ensures bulletin board immutability through history trees that every voter's device employs with consistency proof chains to guarantee that votes are not selectively discarded during voting. This innovative approach provides assurance that both the voter's own vote and votes cast by others don't get dropped before tallying, enabling immediate transparency and tamper detection without the overhead of traditional replication schemes. If votes are improperly excluded, a proof of dishonesty that can be publicly verified can be extracted from the voting device. 

For enhanced transparency and independent verification, the bulletin board can be published to a Git repository after voting closes, with continuous integration pipelines automatically verifying cryptographic proofs and tallies. This creates an immutable, distributed record enabling independent verification by multiple parties and making auditing tools accessible to the broader technical community. Automated dispute resolution mechanisms provide clear protocols for handling verification discrepancies, while comprehensive logging ensures full accountability throughout the election process.

--- 

{{cite PeaceFounder2024 ShuffleProofs2022 Ryan2016 Haenni2011 UniVote2013 Wikstrom2005 Wikstrom2011 Haenni2017 Crosby2009 DRAND2017 Tor2004}}
