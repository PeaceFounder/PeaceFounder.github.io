# Cryptographic Foundation

*The shift from prevention to detection and accountability*

~~~
<div class="image-hero">
  <img src="/assets/clockwork.jpg" alt="Clockwork" style="max-width: 75%;" />
  <div class="img-source">AI</div>
</div>
~~~

Traditional paper ballots rely on prevention—poll workers and observers are physically present during voting to ensure manipulation doesn't occur in the first place. With e-voting, we lack this luxury. Malware affecting the election result can hide in any of the hundreds of chips or within gigabytes of operating system code that make up a modern computer, making spotting malware in action as easy as finding a needle in a haystack.

Verifiable remote voting transforms the security model from prevention to detection. Rather than preventing manipulation during voting, the goal is to detect any manipulation of the tally afterwards, providing cryptographic evidence that anyone can verify at any time. **This evidence must prove the tally contains only votes from registered voters who cast at most one vote (universal verifiability) and enable voters to verify their vote was counted (individual verifiability), all while preserving vote privacy.**

This transforms election oversight. Instead of observers preventing fraud alongside administrators in real-time, anyone can independently verify cryptographic proofs after the voting phase closes. The registrar maintains the list of eligible voters—the same trust assumption as paper ballots, and even this can be verified through sampling. Disputes can be resolved through independent cross-border audits, eliminating the need for coordinated real-time oversight. This enables administrators to focus on operational security and redundancy, where only one honest machine among many is needed for resiliency from sabotage.

PeaceFounder addresses the verifiable remote voting challenge through three mechanisms, each solving a fundamental problem in making electronic voting both verifiable and private. These mechanisms build on well-established cryptographic primitives—exponentiation mixes (Haenni & Spycher 2011, Ryan 2016, Selene 2016), Pedersen commitments, verifiable shuffles (Wikström 2005, Verificatum 2011), and history trees (Crosby 2009).

## Anonymous Eligibility Through Pseudonym Braiding

~~~
<div class="image-hero" style="margin: 3rem 0;">
  <img src="/assets/braid.png" alt="Braiding" style="max-width: 75%;" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

Instead of anonymising votes to sever the link between voter and vote, we anonymise the voters' pseudonyms themselves, with which voters sign their votes, proving they are eligible. Think of this as creating a cryptographic knot with colored threads. Your identity enters as a red thread, and your voting pseudonym exits as a blue thread. Multiple independent parties take turns braiding these threads together—each adding their own knot one after another.

Cryptographically, this braiding works through an exponentiation mix. Each voter starts with a generator $g_i$ and a public key $Y_{i,j}$ in position $j$. A braider applies a secret exponent $x$ and permutation $\chi$ while the zero-knowledge proof assures integrity linking input pseudonyms $\{Y_{i,j}\}_j$ with output pseudonyms $\{Y_{i+1,j}\}_j$:

$$\pi_{\text{Braid}} = \text{PoK}\{(\chi, x) : g_{i+1} = g_i^x \land Y_{i+1,j} = Y_{i,\chi(j)}^x\}$$

This zero-knowledge proof demonstrates that the braider performed the transformation correctly without revealing their secret exponent or permutation. Anyone can verify that the knot preserves the count and that each twist was performed correctly, yet following any individual thread through the knot becomes computationally impossible under the discrete logarithm hardness assumption. Even if most braiders collude, as long as one remains honest, your anonymity holds.

The advantage of braiding is that it requires no coordination ceremonies—parties can braid one transaction at a time, completely independently, greatly expanding the number of independent parties who strengthen your anonymity. This creates your anonymous voting identity: a pseudonym that's cryptographically unlinkable to your real identity, yet provably belongs to an eligible voter. When you vote, you'll sign your ballot with this pseudonym, ensuring it counts while keeping you anonymous.

## Verifiability Without Trustees

~~~
<div class="image-hero" style="margin: 3rem 0;">
  <img src="/assets/protocol.svg" alt="Braiding" style="max-width: 90%;" />
  <div class="img-source">CC: Jānis Erdmanis</div>
</div>
~~~

The voting system introduces a novel security mechanism for individual verifiability grounded in observable isolation from communication. 

Picture yourself as a detective interrogating a suspect about a crime. Before questioning begins, you place your suspect—in this case, your voting calculator—into custody, completely cut off from the outside world. No phone calls, no messages, no communication whatsoever. Meanwhile, new evidence emerges: the crime scene investigation completes, witnesses are interviewed, forensics come back. Your suspect, isolated in custody, cannot possibly know what this new evidence reveals.

When you finally interrogate your suspect with this fresh evidence, their response tells you everything. If they're honest, they'll describe details that match the crime scene perfectly—because they were actually there. If they're corrupt and trying to deceive you, they can only guess randomly—and their guesses won't align with reality.

Now let's see how this interrogation unfolds in practice. During voting, your calculator generates secret tracker preimage values $\theta, \lambda \in \mathbb{Z}_q$ along with your vote choice $v \in \mathbb{Z}_q$. These are committed using a homomorphic commitment scheme (Pedersen commitments):

$$V = \text{Com}(v), \quad Q = \text{Com}(\theta), \quad R = \text{Com}(\lambda)$$

publicly signed with a pseudonym, openings with blinding factors are sent over an encrypted channel to the tallier. After you cast your vote, isolate your voting calculator by disconnecting it from all networks—put it in airplane mode, use a Faraday cage, or turn it off. This isolation must occur before challenges are announced, ensuring the calculator cannot learn what trackers appear on the tally board.

> **⚠️ Vote tagging by a malicious calculator:** A malicious calculator can embed identifying information into an encrypted ballot by controlling cryptographic randomness (e.g., encrypted channel parameters or signature nonces), thereby breaking the anonymity of the submission channel. This can be mitigated by forcing the incorporation of entropy from the voter's device at the protocol level. We omit this detail here for clarity; it is explained in the full paper.

Once the voting phase closes, the tallier derives a verifiably random seed from all submitted tracker preimage commitments:

$$\text{seed} = \text{Hash}(\{Q_i, R_i\}_i)$$

This seed generates unique challenges for each voter through a pseudorandom generator:

$$\{e_i\}_i \leftarrow \text{PRG}(\text{seed})$$

You receive your unique challenge $e_i$ and type it into your isolated calculator. The calculator computes your tracker using the formula:

$$t = e \, \theta + e^2\lambda \pmod{q}$$

where $e^2$ represents the square of the challenge. This dual-component design, with the quadratic term and one-attempt limitation (made user-error-free via a checksum), prevents extrapolation attacks—computations with arbitrary challenges during voting could enable a coercer to derive the real tracker once the voters' unique challenges are announced. The voter then uses this tracker to locate their vote on a public tally board $\{t_i, v_i\}_i$.

> **Why not $t=e \, \theta + \lambda$ ?**
>
> A malicious calculator could set $\theta = 0$ to predetermine $t = \lambda$, knowing this tracker will appear on the tally board. This enables a many-to-one attack: multiple voters get the same tracker while the calculator manipulates votes undetected. The quadratic formula prevents this by ensuring no non-trivial null space in the challenge-independent direction.

### The Tracker Binding on the Tally Board

We don't simply trust the tallier to correctly associate trackers with votes. Without cryptographic binding, a corrupt tallier could assign the same tracker to multiple voters while manipulating the freed votes. To eliminate manipulation, we support the tally board with a zero-knowledge proof, ensuring the tally's integrity under the discrete logarithm hardness assumption.

The first step is for the tallier to compute tracker commitments publicly using the homomorphic properties of the commitment scheme:

$$T_i = Q_i^{e_i} R_i^{e_i^2} = \text{Com}(t_i)$$

Then it jointly shuffles tracker commitments with vote commitments, which has a well-understood zero-knowledge proof of shuffle:

$$\pi_{\text{PoS}} = \text{PoK}\{\psi : T_i = \text{Com}(t_{\psi(i)}) \land V_i = \text{Com}(v_{\psi(i)})\}$$

where permutation $\psi$ and blinding factors for the commitments remain secret. This proof assures us that the published tally board $\{t_i, v_i\}_i$ corresponds to the tally board commitments $\{T_i, V_i\}_i$ in shuffled form.

Incidentally, the use of Pedersen commitments provides perfect information-theoretic hiding—even a computationally unbounded adversary cannot determine the committed values from the commitments alone. This provides **everlasting privacy** in the public evidence: your vote remains private even against future adversaries with quantum computers or unlimited computational power.

### The Security Argument for Individual Verifiability

Here's the crucial insight: if your calculator is honest, it computes the correct tracker, and you find your vote. If it were corrupted and trying to deceive you, it faces an impossible task—it doesn't know what's on the tally board (it's been isolated), it doesn't know other voters' challenges (they're unique), and it cannot guess a valid tracker. The probability of successfully guessing is:

$$\Pr[\text{guess}] = 1/q$$

which is negligibly small (approximately $1$ in $10^{77}$ for typical parameters where $q \approx 2^{256}$).

**You observed the isolation. You provided the challenge. The calculator couldn't coordinate its story with the outside world. Therefore, you know the verification is genuine.**

This is individual verifiability without trustees—not depending on the calculator being trustworthy, not depending on authorities being honest, not depending on cryptographic secrets staying secret. It depends only on the isolation you can observe and the discrete logarithm hardness assumption.

> ### ⚠️ Bulletin Board Presentation Assumptions
>
> Trustee-free individual verifiability depends on voters' ability to retrieve their unique challenge. To bind the challenge to each voter's identity while preserving voters' anonymity, the challenge is derived as $e_i=\mathrm{Hash}(\text{seed}|I_i)$ where $I_i=\text{Com}_{\xi_i}(\text{Id}_i)$ is the voter's identity commitment. In practice, the voting device generates a link `{{Bulletin_Board}}#{{xi}}&{{Id}}` that voters forward to their chosen verification machine, which retrieves the seed and derives the challenge locally. The URL fragment parameters (after `#`) remain client-side, allowing the browser to display the identity string (e.g., passport number) for voters to verify commitment ownership—preventing tracking.
>
> The critical vulnerability lies in man-in-the-middle attacks on bulletin board access. Multiple infrastructure layers enable such attacks: DNS hijacking redirects to malicious servers, compromised certificate authorities enable TLS interception, corrupt administrators present personalised false views, and compromised browsers, operating systems, or hardware intercept access directly. If a corrupt vendor colludes with any of these attack vectors, voters could be deceived into entering another voter's challenge, enabling a **many-to-one attack** where votes are cast silently in place of legitimate voters. (Making the seed 2× larger than individual challenges would prevent voters from entering the seed itself.)
>
> While the risk of bulletin board deception also exists in other verifiable voting schemes, **trapdoorless tracker construction forces adversaries to gamble**. In Benaloh-style audits, attackers can adaptively modify unverified ballots. In Selene-type systems, possession of a trapdoor allows an adversary freely manipulate the ballots. By contrast, trapdoorless tracker construction forces the adversary to **commit to fraud during the voting phase, gambling that they can later control challenge delivery to the targeted voters**. This removes adaptivity and increases the likelihood that large-scale manipulation will produce inconsistent evidence across voters and channels, making community-level detection feasible even if individual deception remains possible.

## Receipt Freeness Through Decoy State Simulation




~~~
<div class="isolation-detail">
  <h3>What You Need to Trust (And What You Don't)</h3>
  
  <div class="image-hero" style="margin-bottom:1.5rem; margin-top:1rem;">
    <img src="/assets/decoy-states.png" alt="Decoy States" style="max-width: 60%;" />
  </div>
  
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

Individual verifiability creates a challenge: if you can verify your vote, couldn't a coercer force you to prove how you voted? This is where decoy state simulation comes into play.

Your voting calculator can wear two faces, like an actor switching masks. In its genuine mode, it computes your true tracker using the formula $t = e \,\theta + e^2\lambda$. In its decoy mode, it displays a pre-configured tracker for a specific challenge—simulating verification rather than computing it.

The defence strategy is simple: verify first, then configure the decoy if needed. After obtaining your genuine, unique challenge and verifying your vote, you can configure the calculator to display a fake tracker from the tally board (pointing to the coercer's preferred choice) when your challenge is entered again. If the coercer later demands verification, you hand them the calculator and let them enter the challenge themselves. The calculator displays the pre-configured tracker, appearing to prove you voted as they demanded.

Here's the asymmetry: **you know whether you configured decoy mode, but the coercer cannot tell.** They have no control over what information flowed into the calculator while it was in your possession. You've already verified your real vote, giving you both verification capability and plausible deniability.

To prevent coercers from breaking this deniability, the device is designed to compute only one genuine tracker. This constraint prevents the extraction of the secret values $\theta$ and $\lambda$ from the calculator. Without access to these secrets, a coercer cannot independently verify whether a displayed tracker is genuine or a decoy, making the defence work.

> ### Known Limitations
>
> **⚠️ Severing the calculator from the voter:** If a coercer severs the calculator from the voter before the tally board is announced, then it can completely bypass the defence. This requires active time-bound intervention during voting.
>
> **⚠️ Temporary device access coercion:** A coercer briefly gains physical access to the calculator during the voting phase and secretly decides whether to install a decoy tracker, enabling later detection. This requires active, time-bound intervention during voting.
>
> **⚠️ Accidental selection of a coercer-controlled tracker:** A voter may mistakenly choose a tracker from the public tally board that is known to or controlled by a coercer, allowing the coercer to distinguish whether the voter is presenting a genuine or fake tracker. This can be mitigated by providing pre-tallied decoy trackers indistinguishable from real votes.
>
> **⚠️ Italian (pattern) attack:** With complex ballots, unique vote patterns visible on the public tally board can be used to single out individual voters. This is inherent to systems that publish individual ballots and is mitigated by keeping ballots simple.

------

All these mechanisms connect through a public bulletin board—a transparent ledger containing every submitted vote with its corresponding tracker. Anyone can download this ledger, verify the cryptographic proofs, recount the votes, and confirm the announced tally. The pseudonym braiding proofs ensure that all votes came from eligible voters. The tracker assignments prove each voter received a unique, unpredictable challenge. The shuffle proofs guarantee that votes and trackers were correctly anonymised.

PeaceFounder solves bulletin board integrity by using history trees, giving each voter a lightweight consistency proof chain that shows their vote appears on the same bulletin board everyone else sees. If the authority attempts to show different voters different boards or selectively drops votes, the fraud becomes immediately detectable with irrefutable evidence.

The combination enables verifiable remote voting in practice. One authority runs the infrastructure, providing operational simplicity, while public cryptographic proofs ensure transparent accountability. Anyone can audit the tally remotely, and disputes can be resolved through cryptographic proof rather than trust. The approach scales from small organisational elections to national democratic processes and, because privacy relies on information-theoretic properties rather than computational assumptions, votes remain private even against future adversaries with quantum computers if they ever become cryptographically relevant.

~~~
<div class="research-highlight">
  <p style="font-size: 1.5rem; margin-bottom: 2rem;">
    <strong>Don't trust these claims—verify them!</strong>
  </p>
  <div class="cta-buttons">
        <a href="https://eprint.iacr.org/2025/1186" class="btn btn-primary">Read the Preprint</a>
      </div>
</div>
~~~

---

{{cite PeaceFounder2024 Haenni2011 UniVote2013 Tor2004 Crosby2009 ShuffleProofs2022 Wikstrom2005 Wikstrom2011 Haenni2017 PeaceFounder2025 Ryan2016 Selene2016 DRAND2017}}