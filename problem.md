@def title = "PeaceFounder - EVoting Problem Analysis"
@def tags = ["syntax", "code", "math"]

# Why E-voting Systems Fail Democracy
*How complexity and opacity undermine democratic accountability*

~~~
<div class="image-hero">
<img src="/assets/extern/computer-deception.png" alt="Computer Deception" />
<div class="img-source">CC: Marcin Wichary</div>
</div>
~~~

## Ontario 2022: A Real-World E-voting Experiment
            
In October 2022, Ontario's municipal elections became an unintentional large-scale experiment in e-voting deployment. Due to the COVID-19 pandemic's lingering effects, each of Ontario's 444 municipalities independently selected their own e-voting solution for their residents. This decentralized decision-making process created a unique natural experiment, revealing how election administrators actually choose between different voting technologies when given complete autonomy.

The results were striking and deeply concerning for democratic accountability. Despite the availability of end-to-end verifiable systems that could provide mathematical proof of accurate vote counting, **the vast majority of municipalities selected simple black-box solutions** that offered no individual verifiability to voters. In these systems, voter anonymity was completely handed over to private vendors, and election results depended entirely on trusting corporate promises about software behavior.

~~~
<div class="content-highlight">
<strong>The Choice Revealed:</strong> When election administrators could freely choose any system, they overwhelmingly rejected verifiable voting in favor of vendor-dependent black boxes, citing complexity concerns and lack of voter understanding.
</div>
~~~

Post-election analysis revealed the administrators' reasoning: verifiable systems were perceived as too complex to deploy reliably, voters wouldn't understand verification mechanisms like Benaloh challenges, and the proposed system deployments required technical expertise that municipalities lacked. Furthermore the vote verifiaction that can be performed by voters always depends on trust in a benevolent third party making it useless for voters to verify honesty of election organizers. Rather than grapple with these challenges, most administrators simply chose to trust vendors completely—a decision that fundamentally undermines democratic accountability.

## The Worst-Case Scenario: What Could Have Gone Wrong

Consider what could have happened in Ontario 2022 if a malicious actor had targeted the election infrastructure. With most municipalities using black-box systems from a handful of vendors, a single compromised vendor could have manipulated results across dozens of communities simultaneously. Unlike paper ballot fraud, which requires physical access to many polling locations, a software attack could alter thousands of votes with a few lines of code.

The attack scenario is chilling in its simplicity: a vendor insider, a hacked software update, or a compromised server could have silently flipped results in multiple races. Worse still, the black-box nature of these systems means such manipulation might never be detected. There would be no paper trail to audit, no cryptographic proofs to verify, and no way for voters to confirm their votes were counted as intended.


### The Institutional Failure

The deeper problem lies not with voters' technical understanding but with election officials who have abdicated their fundamental responsibility to ensure transparent, auditable elections. Even more troubling, the administrators who certified these results would have no independent means to verify them. They would be certifying democratic legitimacy based purely on vendor assurances—essentially outsourcing the fundamental responsibility of election integrity to private companies with their own commercial interests.

Election administrators often become captive to vendor promises and technical assurances they cannot evaluate. They sign contracts for systems with proprietary software, accepting claims about security and accuracy without the means to independently verify them. This represents a profound failure of stewardship—how can officials guarantee the integrity of an election when they must rely entirely on vendor assertions about their own products?

### The Trust Paradox

But this raises an even more fundamental question: why would one trust election administrators at all who, in collusion with vendors or other actors, can pay lip service to the voting process? What prevents them from simply performing theatre, going through the motions of election administration while the actual outcomes are determined elsewhere? The opacity of electronic systems creates perfect cover for such deception.

Moreover, why would you trust your vote to be cast in secret in such a system? Digital voting systems create comprehensive digital trails that can potentially be accessed by system administrators, vendors, or malicious actors. Unlike paper ballots that can be truly anonymous once cast, electronic votes exist as data that can be traced, logged, and potentially linked back to individual voters through infiltration in the vote processing systems.

~~~
<div class="content-highlight">
<strong>Democratic Failure:</strong> When election results depend entirely on trusting vendors rather than verifiable evidence, we have abandoned the principle that democratic legitimacy must be independently verifiable by the governed.
</div>
~~~

## Why Paper Ballots Resist Such Attacks

Paper ballot systems naturally resist surveilance and deception through their fundamental inefficiency. This inefficiency is not a bug—it's a feature that creates democratic security through distributed responsibility and observable processes.

In a paper ballot system, manipulating an election would require infiltrating hundreds of separate polling locations, each staffed by local community members. The attacker would need to bribe or coerce poll workers across multiple municipalities, coordinate simultaneous ballot stuffing or vote switching at dozens of locations, and do all of this while avoiding detection by poll watchers, voters, and other observers.

The distributed nature of paper ballots creates natural security through several mechanisms: **tamper-evidence** (physical seals and boxes reveal unauthorized access), **public counting** (observable processes with multi-party oversight), **anonymity** (ballots become untraceable once deposited), and **simplicity** (minimal attack vectors due to straightforward procedures).
 
Crucially, paper ballot systems enforce privacy through the **voting booth**, where voters are surveilled to ensure they cannot prove to third parties how they voted. This surveillance paradoxically protects democracy by preventing vote buying and coercion—voters cannot sell their votes because they cannot prove their vote choices to buyers.

Most importantly, paper ballots achieve security, transparency, and privacy through what we might call "the power of inefficiency." The very properties that make computers attractive—their ability to process information quickly and at scale—are precisely what make them dangerous for elections. Paper ballots force the distribution of responsibilities in ways that make large-scale fraud economically unfeasible.

## Why We Cannot Monitor Computers Like We Monitor People

The fundamental challenge with electronic voting is that computers are efficient in ways that make observation impossible. Unlike human poll workers whose actions can be watched and verified, computers process data in ways that leave no observable traces.

~~~
<div class="content-highlight">
<strong>Computer Vulnerability:</strong> Computers can manipulate results or collect sensitive information through malicious programs hidden in gigabytes of software or hundreds of chips, leaving no observable evidence of tampering.
</div>
~~~

When we monitor human election workers, we can observe their physical actions—watching them count ballots, verify signatures, and record results. But when a computer processes a vote, the actual computation happens inside silicon chips at microscopic scales. A malicious program could be silently altering vote totals or transmitting voter choices to unauthorized parties, and there would be no way for an observer to detect this behavior.

This is why we need cryptographic evidence rather than human observation for electronic systems. Instead of trying to watch what computers do (which is impossible), we need mathematical proofs that demonstrate what they did. The security model shifts from relying on trusted observers to requiring independently verifiable evidence.

## The Complexity Crisis in E2E Verifiable Systems

The impossibility of observing computer behavior creates a fundamental challenge for electronic voting: we must replace human observation with mathematical proof. End-to-end verifiable voting systems attempt this through cryptographic techniques, but they introduce complexities that often make them impractical for real-world deployment.

Understanding why requires grasping the fundamental tension in democratic voting systems between three essential requirements: **Security**, **Privacy**, and **Transparency**. Every voting system must balance these competing demands, and the trade-offs become especially stark when moving from paper to electronic systems.

### The Democratic Balance

**Security** ensures procedures that enforce honest behavior from all participants—voters, officials, and technology. **Privacy** protects voters' capacity to choose autonomously, free from coercion or vote buying. **Transparency** provides evidence that votes are counted as cast, enabling verification and public trust.

Paper ballot systems achieve this balance through an elegant but crucial insight: strategic inefficiency creates security. The distributed nature of paper voting—with hundreds of polling locations, multiple observers, and physical evidence—makes large-scale fraud economically unfeasible. Privacy is enforced through voting booth surveillance that prevents voters from proving their choices to others. Transparency comes through observable public counting.

Electronic systems break this model. Their efficiency—the very quality that makes them attractive—eliminates the natural security barriers that paper creates. A single compromised server can manipulate thousands of votes instantly, with no observers able to detect the manipulation.

### The Cryptographic Solution's Dilemma

E2E verifiable systems attempt to restore the security-privacy-transparency balance using distributed vote coounting process which supplemented with cryptographic proofs demonstrates integrity of the tally while maintaining privacy. 

However, this approach necesiates a vote decryption ceremony distributed among many parties at the tallying phase to ensure vote privacy which makes their proper deployment prohibitive in partice. The most sophisticated systems require threshold decryption ceremonies—complex multi-party protocols that create their own operational challenges:

1. **Risk Assessment Complexity:** Determining the correct threshold requires precise evaluation of trust relationships that may be impossible to gauge accurately.
2. **Coordination Vulnerabilities:** Multi-party protocols are susceptible to communication sabotage and require meticulous troubleshooting when adversaries disrupt channels.
3. **Technical Failure Risks:** Errors by ceremony participants can leave election results permanently encrypted, while conservative thresholds may expose voter privacy to small corrupt minorities.

These intrinsic complexities stifle broader adoption of verifiable systems. Ontario's 2022 municipal elections demonstrate this reality: municipalities predominantly selected simple black-box systems explicitly citing operational complexity of E2E verifiable systems as the primary deterrent—even though this meant completely surrendering voter anonymity to vendor promises, trusting that vendors do not secretly maintain links between individual votes and voter identities.

## Privacy Without Permanence

Most E2E systems rely on computational privacy assumptions that may be broken by future cryptographic advances or quantum computing. This fundamental limitation is often compensated by eliminating eligibility verifiability, withholding election evidence from the public, or accepting that vote privacy may be retroactively compromised.

When authorities choose simpler deployments to avoid these complexities, vote privacy becomes entirely controlled by vendors, with voters not remaining anonymous during the count—violating the fundamental requirement for independent privacy protection.

~~~
<div class="final-cta">
<p class="final-statement">
If voters cannot independently verify that their votes were counted correctly—regardless of whether administrators are honest or corrupt—then the system has failed its fundamental democratic purpose.
</p>
</div>
~~~

This institutional capture by technology vendors represents a breakdown in democratic governance. The solution cannot rely on trusting election administrators to police themselves—we must require systems that allow voters themselves to detect malicious behavior by election officials.

The solution is not to eliminate technology, but to demand that election systems be transparent to voters, not just to officials. Only systems that allow ordinary citizens to detect manipulation—whether by vendors, hackers, or corrupt administrators—can truly serve democratic accountability.

---

{{cite Brunet2023 Godman2023 E2EV2015 rivest2008 Finogina2021 Finogina2024 sampigethaya2006 schneider2017 gibson2016 belanger2016 veliz2021}}
