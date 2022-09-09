@def title = "FAQ"

# FAQ

### How to get in touch?

The project currently does have only one developer: Janis Erdmanis. You can get in touch with me over janiserdmanis@protonmail.ch I will be happy to have a chat on whatever which may be related to this project. 

### Why Julia?

A great deal of legacy software in cryptography is written in C, C++ and Java, which would make them an obvious choice for implementing an e-voting system. However, these languages have shown their age in presence of new innovations allowing to write code faster by providing tools for code reuse and its deployment like Rust, Go, Swift and etc, where a considerable amount of cryptographic libraries is already available. Thus Julia may seem an odd choice for such a project as an e-voting system. 

The reason for choosing Julia can partly be attributed to my familiarity with the language, whereas as a PhD student, I spent ins and outs of effective Julia codebase management and got addicted to the multiple dispatch and corresponding type system. Objectively speaking, Julia offers everything that a modern language like Rust, Go, and Swift could offer in terms of development speed and deployment of code. But in addition, it does offer great opportunities to experiment with the ability to use a type system for making code more modular, with multiple dispatch and Unicode allows to make code as lean as possible, closely resembling pseudocodes in the papers. And the worry-free compatibility between platforms and Julia versions is a great plus. For instance, ShuffleProofs.jl was developed using Julia 1.7 as a testing platform; however, with no changes, it works with no issues also on Julia 1.0, now a 4-year-old version. 

In future, though the dynamism of Julia may become less attractive when the protocol is stabilized, targeting mobile will become relevant. However, that is far years ahead until such a problem would rise, and development within the Julia community in sense is pushing in that direction with StaticCompiler.jl and BinaryBuilder.jl. Thus in the meantime let’s have fun :) 

### 






























