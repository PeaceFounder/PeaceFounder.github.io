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
2) Implementing a proof of decryption [Not started]
3) First terminal UI prototype in Julia [Started, depends on 2] 
4) Canonicalization of signed data [Not started] 
    - Probably binary encoding as one Verificatum uses will be best here. 
    - Alternative is ASN.1 DER encoding
5) Client prototype implemented in Rust with TUI interface [Help, depends on 3 and 4]
6) Client prototype for mobile application [Help, depends on 5]
7) Prototype for braiding work "bank" [Not started]

Currently, I am on track to do 3 -> 2 -> 4 -> 7 as it best fits my expertise. Rust is necessary for the client as it already wraps TOR with the Arti library, is stand-alone compilable and thus can be integrated into mobile application either on android or ios. 

For now, let's get through the main repositories of the PeaceFounder project.

## CryptoGroups.jl

It provides a high-level abstraction of a cryptographic group and instances for modular prime numbers and elliptic curve points. 

A pressing problem is the performance of elliptic curves, which could be improved in either of the ways:

- Wrapping existing implementations from C or Rust
- Implement projective coordinates for elliptic curves
- Profiling the code and using a better data layout


## ShuffleProofs.jl

A proof of shuffle is implemented, but it could benefit from being polished, particularly for inputting from and outputting to files. Implementation of threshold decryption could be an interesting avenue to reach more feature parity for election verification with Verification. 

~~~
<iframe width="560" height="315" src="https://www.youtube.com/embed/2P2FBP47b8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
~~~


## PeaceFounder.jl

This is where the voting system will come together to deploy mixes, bookkeeping of bulletin boards, vote collection services, different strategies for configuring and proposing ballots and client-side interactions. A CLI interface for all involved parties will be available here. 

