@def title = "Roadmap"


~~~
<style>
iframe {
   display: block;
   margin: 0 auto;
}
</style>
~~~


# Roadmap

PeaceFounder is an e-voting system which relies on advanced developments in cryptography/privacy. It relies on zero-knowledge proof of shuffle implemented in ShuffleProofs.jl and the ability to anonymously access the bulletin board and send messages to it for consideration to avoid being tracked by IP address. For traffic anonymisation, wrapping of existing solutions such as TOR is planned at the later stages of the project. 


## Milestones

1) Implementing a proof of shuffle for easy use [Done]
2) Implementing a proof of decryption [Done]
3) First GUI prototype in Julia [Done] 
4) Canonicalisation of signed data [Not started] 
    - Probably binary encoding as one Verificatum uses will be best here. 
    - An alternative is ASN.1 DER encoding.
5) Client prototype for mobile application [Help, depends on 5]
    - Deploying Julia application on iOS and Android?
    - Otherwise depends on step 4, and the client needs to be implemented in Rust [Help wanted]
6) Prototype for braiding work "bank" [Not started]

A lot of things have been done since last November. The PeaceFounder now has a GUI client written in QML, allowing us to test usability. Furthermore, for the first time ever, the system can be demoed, as can be seen in the following video:


~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/L7M0FG50ulU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
~~~



In future, the client backend will need to be ported to Rust as likely Julia's deployment story for mobile apps would not be solved anytime soon. Rust is also necessary for the client as it already wraps TOR with the Arti library, is stand-alone compilable and thus can be integrated into mobile applications either on Android or iOS.

Now let's go over the key projects on which the PeaceFounder relies and corresponding commentary on what can be done.

## CryptoGroups.jl

It provides a high-level abstraction of a cryptographic group and instances for modular prime numbers and elliptic curve points. 

A pressing problem is the performance of elliptic curves, which could be improved in either of the ways:

- Wrapping existing implementations from C or Rust
- Implement projective coordinates for elliptic curves.
- Profiling the code and using a better data layout

## CryptoSignatures.jl

CryptoSignatures offers means to form cryptographic signatures which are FIPS standard compliant. In contrast to many cryptographic libraries, the API emphasizes purity. Easiness of signing and verifying messages with a custom generator was also essential as it is used further in PeaceFounder.jl to sign votes with a pseudonym. 

Further directions in this project could add RSA and blind signatures. Adding more test vectors would not hurt either. All performance bottlenecks are within CryptoGroups.jl 


## ShuffleProofs.jl

A proof of shuffle is implemented, but it could benefit from being polished, particularly for inputting from and outputting to files. Implementation of threshold decryption could be an interesting avenue to reach more feature parity for election verification with Verification. 

~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/2P2FBP47b8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
~~~

Now shuffle proofs also support decryption proofs and the formation of knot-like structures braids with a bluntly foolproof interface ` braid(g, Y, verifier)`. This hides all complexity of zero-knowledge proofs in a pure interface executed on a single computer making the PeaceFounder system greatly more understandable than existing alternatives using re-encryption mixnets with zero-knowledge proofs. 

## HistoryTrees.jl

HistoryTrees implements unbalanced Merkle tree hashing usable for any bulletin board or tamper evident logging implementation. An implementation for append-only data structure and efficient leaf and root inclusion proofs is available with the spirit of RFC6962 and RFC9162. 

A further improvement could be made on keeping a cache on roots of even powers making proof generation more efficient. Also, making the proofs compatible with Rust and Go implementations is one of the pressing tasks in implementing a client application in Rust.

## PeaceFounder.jl

This is where the voting system will come together to deploy mixes, bookkeeping of bulletin boards, vote collection services, different strategies for configuring and proposing ballots and client-side interactions. A CLI interface for all involved parties will be available here. 

