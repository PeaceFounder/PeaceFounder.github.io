@def title = "Roadmap"

# Roadmap

The PeaceFounder e-voting system is meticulously designed with both the voter and election authority in mind. Intuitive voting experience while ensuring seamless deployment and maintenance is a priority. Balancing a user-centric design with the highest standards of security, transparency, and privacy is a commitment of the PeaceFounder project, even when these goals are in tension with each other. Every detail reflects our dedication to excellence, a journey thus far curated by a singular, dedicated vision.

In April 2023, a milestone was reached where all cryptographic elements were integrated, paving the way for a unified voting system. Experience PeaceFounder's user-friendly GUI client, crafted in QML, through the most common use scenario by watching the video below:


~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/L7M0FG50ulU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
~~~

The demonstration video captures the project's potential, emphasising its early-stage nature. We're keenly aware of the improvements required to revolutionise the e-voting landscape. Firstly, our primary goal is to streamline the interface for the guardian, ensuring their workflow is more intuitive. Furthermore, we're in the process of developing infrastructure for external braiding. Next on our agenda is enhancing the workflow for auditors. Additionally, we're planning to add a static bulletin board facade website, enabling voters to verify that their votes have been cast as intended.

Looking ahead, mobile phones have become indispensable for daily tasks; we aspire to make the voting system readily accessible on these devices. A significant step in this direction is transitioning the client backend to Rust. Not only would Rust offer complete compilation, but its compatibility with the Arti library (which wraps TOR) is crucial for offering intractability for the voters. This move is especially pertinent given the uncertainty surrounding Julia's adaptability for mobile app integrations in the foreseeable future.

Here are the key milestones we're gearing up to address, beginning with the immediate goal of expanding PeaceFounder's accessibility to a wider user base:

**1. Making the PeaceFounder Ready for Early Adopters**

- **Administrator GUI Interface**: Intuitive control panel for publishing proposals, inviting new members via email and initiating braiding.
- **Client Installation**: Make client bundles for macOS, Linux, and Windows.
- **Server & Client Error Handling**: Robust error and assertion handling in both PeaceFounder server and client, with client errors clearly displayed for users. Features blame forwarding to auditors for accountability.
- **Data Persistence**: Client and server data storage.

**2. Integration of External Braiding Services**

- **Deme Anonymisation**: Demes can run braiding by establishing direct connections with other demes.
- **Braiding Broker**: An automatic braiding from a curated list of demes managed by PeaceFounder. This feature will be the primary monetisation avenue in the later stages.
- **Braiding Protocol Finalization**: Establish and finalise the underlying braiding protocol to ensure seamless integration and functionality.

**3. Auditing & Accountability Enhancements**

- **Vote Proxy Feature**: Simplify the process for users to set up a proxy, ensuring vote accountability.
- **Vote Validation**: Develop a bulletin board facade as a static website where voters can easily confirm their votes have been recorded as intended in the ballot box. 

**4. Mobile Client Development**

- **Vote Tracking Protection**: Leverage the Arti project to prevent backtracking of votes to individual voters.
- **Data Specification**: Establish a specification for the canonical forms of signed data which are exchanged with a client.
- **Backend Implementation**: Craft the client's backend in Rust, ensuring compatibility with the pre-existing QML interface.
- **History Tree Synchronization**: Implement the history tree in Julia to align with the Rust version, ensuring consistency across platforms.

*Note: As we journey through these milestones, PeaceFounder remains committed to continuous improvement and will regularly update this roadmap to reflect our latest endeavours.*

## Important SubProjects

The PeaceFounder project relies on a substantial amount of cryptography, which was designed and implemented in Julia. 

### CryptoGroups.jl

CryptoGroups offers a high-level abstraction for cryptographic groups, with support for both modular prime numbers and elliptic curves. Currently, the project lacks comprehensive documentation. This is partly due to its wide-ranging features, which include ElGamal types, calculations for verifiable random generator vectors, cryptographic pseudorandom number generators, and the management and choice of several elliptic curve parameters. As a result, the project has an extensive API. In an ideal scenario, each of these functionalities would reside in its own distinct package, complete with a dedicated API and set of responsibilities. It seems that a collaborative community effort to modularise these components from the PeaceFounder project would be the most natural next step.

A pressing concern is the performance of elliptic curves. There are several avenues for improvement in this area. One approach could involve wrapping existing implementations from languages like C or Rust. Alternatively, introducing projective coordinates for elliptic curves might enhance their efficiency. Additionally, profiling the code to adopt a more optimised data layout could yield significant improvements.

### CryptoSignatures.jl

CryptoSignatures offers means to form cryptographic signatures which are compliant with FIPS standards. In contrast to many cryptographic libraries, the API emphasises purity. Easiness of signing and verifying messages with a custom generator is also easily accessible as it is used further in PeaceFounder.jl to sign votes with a pseudonym. 

Further directions in this project could add RSA and blind signatures. Adding more test vectors would not hurt either. All performance bottlenecks are within CryptoGroups.jl 

### ShuffleProofs.jl

A proof of shuffle is implemented, but it could benefit from being polished, particularly for inputting from and outputting to files.

~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/2P2FBP47b8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
~~~

Now, shuffle proofs also support decryption proofs and the formation of knot-like structures braids with a bluntly foolproof interface ` braid(g, Y, verifier)`. This hides all the complexity of zero-knowledge proofs in a pure interface executed on a single computer, making the PeaceFounder system greatly more understandable than existing alternatives.

### HistoryTrees.jl

HistoryTrees implements unbalanced Merkle tree hashing usable for any bulletin board or tamper evident logging implementation. An implementation for append-only data structure and efficient leaf and root inclusion proofs is available with the spirit of RFC6962 and RFC9162. 

A further improvement could be made on keeping a cache on roots of even powers, making proof generation more efficient. Also, making the proofs compatible with Rust and Go implementations is one of the pressing tasks for implementing a client application in Rust.

