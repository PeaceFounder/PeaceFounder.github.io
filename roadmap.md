@def title = "Roadmap"


# Roadmap

The PeaceFounder is a complex project requiring a high degree of contemplation before code can be written and requires an adversarial mindset. On the other hand, it requires taking the voter's point of view and making it as intuitive as possible while paving the way for user experience for them, as in device security. Aligning the project's needs from multiple facets has been the project's top priority.

The PeaceFounder has a GUI client written in QML, allowing us to test usability. Furthermore, for the first time, the system can be demoed, as can be seen in the following video:


~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/L7M0FG50ulU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
~~~

As seen in the demo video, the project is in a rough stage, and more thought needs to be put into making the guardians' job easier. Neither braiding the anonymisation procedure for pseudonyms infrastructure for doing that externally needs to be included. The third part is the lack of a secondary channel where voters can confirm their votes are cast as intended. Lastly, the voting system is intended to be set up on the mobile phone and will require the client backend to be ported to Rust, as likely Julia's deployment story for mobile apps will not be solved anytime soon. Rust is also necessary for the client as it already wraps TOR with the Arti library.

Here are important milestones which are now being planned to be tackled, starting from the lowest-hanging fruit of making PeaceFounder accessible to as many users as possible:

**1. Making the PeaceFounder Ready for Early Adopters**

- **Administrator GUI Interface**: Intuitive control for specifying proposals and inviting new members via email.
- **Client Installation**: PeaceFounder client bundles available for macOS, Linux, and Windows.
- **Server & Client Error Handling**: Robust error and assertion handling in both PeaceFounder server and client, with client errors clearly displayed for users. Features blame forwarding for advanced troubleshooting.
- **Data Persistence**: Client data backup and autoload at startup. The server instance will maintain a record of all transactions and associated keys for secure retrieval.

**2. Integration of External Braiding Services**

- **Deme Anonymisation**: Demes can ensure member anonymity by establishing direct connections with other demes.
- **Braiding Broker**: An automatic braiding feature managed by PeaceFounder. This feature will be the primary monetization avenue in the later stages.
- **Braiding Protocol Finalization**: Establish and finalise the underlying braiding protocol to ensure seamless integration and functionality.

**3. Auditing & Accountability Enhancements**

- **Vote Proxy Feature**: Simplify the process for users to set up a proxy ensuring vote accountability.
- **Vote Validation**: Launch a dedicated static website where voters can easily confirm their votes have been recorded as intended in the ballot box.

**4. Mobile Client Development**

- **Vote Tracking Protection**: Leverage the Arti project to prevent backtracking of votes to individual voters.
- **Data Specification**: Establish a specification for the canonical forms of signed data received by the client.
- **Backend Implementation**: Craft the client's backend in Rust, ensuring compatibility with the pre-existing QML interface.
- **History Tree Synchronization**: Implement the history tree in Julia to align with the Rust version, ensuring consistency across platforms.

*Note: As we journey through these milestones, PeaceFounder remains committed to continuous improvement and will regularly update this roadmap to reflect our latest endeavours.*

## Important SubProjects

The PeaceFounder project relies on a substantial amount of cryptography, which was designed and implemented in Julia. 

### CryptoGroups.jl

It provides a high-level abstraction of a cryptographic group and instances for modular prime numbers and elliptic curve points. 

A pressing problem is the performance of elliptic curves, which could be improved in either of the ways:

- Wrapping existing implementations from C or Rust;
- Implement projective coordinates for elliptic curves;
- Profiling the code and using a better data layout;
- Refactoring code so that it would be easier to documment.

### CryptoSignatures.jl

CryptoSignatures offers means to form cryptographic signatures which are FIPS standard compliant. In contrast to many cryptographic libraries, the API emphasises purity. Easiness of signing and verifying messages with a custom generator was also essential as it is used further in PeaceFounder.jl to sign votes with a pseudonym. 

Further directions in this project could add RSA and blind signatures. Adding more test vectors would not hurt either. All performance bottlenecks are within CryptoGroups.jl 

### ShuffleProofs.jl

A proof of shuffle is implemented, but it could benefit from being polished, particularly for inputting from and outputting to files. Implementation of threshold decryption could be an interesting avenue to reach more feature parity for election verification with Verificatum. 

~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/2P2FBP47b8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
~~~

Now, shuffle proofs also support decryption proofs and the formation of knot-like structures braids with a bluntly foolproof interface ` braid(g, Y, verifier)`. This hides all complexity of zero-knowledge proofs in a pure interface executed on a single computer, making the PeaceFounder system greatly more understandable than existing alternatives using re-encryption mixnets with zero-knowledge proofs. 

### HistoryTrees.jl

HistoryTrees implements unbalanced Merkle tree hashing usable for any bulletin board or tamper evident logging implementation. An implementation for append-only data structure and efficient leaf and root inclusion proofs is available with the spirit of RFC6962 and RFC9162. 

A further improvement could be made on keeping a cache on roots of even powers making proof generation more efficient. Also, making the proofs compatible with Rust and Go implementations is one of the pressing tasks in implementing a client application in Rust.

