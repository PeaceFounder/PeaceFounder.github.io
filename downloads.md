@def title = "PeaceFounder - EVoting Problem Analysis"
@def tags = ["syntax", "code"]

# Development Prototype Downloads
*Research implementation for cryptographic verification and testing*


~~~
<div class="download-container">
  <div class="download-card">
    <!-- Visual Header with Split Layout -->
    <div class="download-visual">
      <!-- Left side - App Info -->
      <div class="app-info">
        <img class="app-icon" src="/assets/favicon.png" />

        <div class="app-name">PeaceFounder</div>
        <div class="app-tagline">Evoting for Democracy</div>
        <a href="https://github.com/PeaceFounder/PeaceFounderClient/releases" class="download-btn-visual">
          Download Client
        </a>
      </div>

      <!-- Right side - Screenshot Slideshow -->
      <div class="screenshot-slideshow">
        <div class="screenshot-container">
          <img class="screenshot-slide" src="/assets/client/home.png"/>
          <img class="screenshot-slide" src="/assets/client/deme.png"/>
          <img class="screenshot-slide active" src="/assets/client/proposal.png"/>
          <img class="screenshot-slide" src="/assets/client/guard.png"/>
        </div>
        <div class="slideshow-dots">
          <div class="dot active" onclick="currentSlide(1)"></div>
          <div class="dot" onclick="currentSlide(2)"></div>
          <div class="dot" onclick="currentSlide(3)"></div>
          <div class="dot" onclick="currentSlide(4)"></div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <h3 class="download-title">PeaceFounder Client</h3>
    <p class="download-description">
      Complete voting application with cryptographic verification capabilities 
      designed to run securely on your personal device.
    </p>

    <div class="features-grid">
      <div class="feature-section">
        <h4>Key Features</h4>
        <ul class="feature-list">
          <li>Secure registration via invite</li>
          <li>Proposal retrieval and voting</li>
          <li>Vote persistence assurance</li>
          <li>Individual vote verification</li>
        </ul>
      </div>

      <div class="feature-section requirements-section">
        <h4>System Requirements</h4>
        <ul class="feature-list">
          <li>Windows/macOS/Linux</li>
          <li>4 GB RAM minimum</li>
          <li>2 GB available disk space</li>
          <li>Active network connection</li>
        </ul>
      </div>
    </div>

    <div class="version-info">
      <div class="version-item">
        <div class="version-label">Version</div>
        <div class="version-value">v0.1.1-alpha</div>
      </div>
      <div class="version-item">
        <div class="version-label">Platform</div>
        <div class="version-value">Cross-platform</div>
      </div>
      <div class="version-item">
        <div class="version-label">Size</div>
        <div class="version-value">~300 MB</div>
      </div>
      <div class="version-item">
        <div class="version-label">License</div>
        <div class="version-value">Apache 2.0</div>
      </div>
    </div>

    <div class="server-info">
      <div class="server-info-title">🐳 Server Deployment</div>
      <p class="server-info-text">
        Server setup uses containerized deployment with Podman/Docker. 
        Complete deployment instructions are available in the Getting Started guide below.
      </p>
    </div>
  </div>
</div>
~~~

**Research Preview:** This is a development prototype designed for researchers, cryptographers, and developers interested in testing the PeaceFounder system. It can be tried on a small scale with <1000 members under the assumption that there won't be an active adversary that will sabotage service availability. Furthermore, only deployment without voting calculator is currently available.

## Getting Started

The development prototype includes comprehensive documentation for setting up test elections and verifying the cryptographic protocols. We recommend starting with the provided test scenarios to understand the system's operation.

~~~
<div class="warning-notice"><strong>⚠️ Development Preview Notice:</strong> This prototype is intended for research and testing purposes only. It can be used on a small scale in low stakes scenarios until production hardening happens.</div>
~~~


### Server Setup

~~~
<div class="setup-guide">
  <p><strong>Start the server container:</strong></p>
  <div class="code-block">
    <code>podman run -d --name peacefounder -p 127.0.0.1:3221:3221 -p 4584:4584 ghcr.io/peacefounder/peacefounderadmin:latest</code>
  </div>

  <p class="content-text" style="font-size:1rem;">
    The admin panel is hosted on localhost <code style="background: #f5f5f5; padding: 0.2rem 0.4rem; border-radius: 4px;">127.0.0.1:3221</code>, where you will run a short three-step wizard to configure the system. The admin panel is not directly accessible from external networks for security reasons.
  </p>

  <p><strong>Access the admin panel remotely via SSH port forwarding:</strong></p>
  <div class="code-block">
    <code>ssh -L 3221:127.0.0.1:3221 user@your-server-ip</code>
  </div>

  <p class="content-text" style="font-size:1rem;">
    This approach handles secure authentication to the server and is free from PKI network trust assumptions. The admin panel will be accessible at <code style="background: #f5f5f5; padding: 0.2rem 0.4rem; border-radius: 4px;">http://127.0.0.1:3221</code> in your local browser.
  </p>
</div>
~~~

### System Configuration

~~~

<div class="setup-guide">
  <p><strong>1. Complete the setup wizard</strong> - The admin panel starts with a setup wizard guiding you to select a cryptographic group, choose a hash function, and generate keys. The server generates the guardian key, which is then encrypted with the provided password.</p>
  
  <p><strong>2. Configure server settings</strong> - Set up SMTP for member invitations in the Settings panel and specify the public server address for client connections. This could be a local address, a public IP, or a DNS pointing to the PeaceFounder REST API. Using DNS is recommended for seamless server address upgrades.</p>
  
  <p><strong>3. Register members</strong> - Send email invitations with unique tokens for secure member registration. The process involves dispatching unique tokens via email that serve as authentication keys in the format <code>HMAC(body|timestamp, token)</code>.</p>
  
  <p><strong>4. Braid voters</strong> - Generate braids to boost anonymity. Currently, the system supports only self-braiding, but future updates will enable braiding between different demes to raise the anonymity threshold.</p>
  
  <p><strong>5. Create proposals</strong> - Set up voting proposals with opening/closing times, ballots, and anchor to specific braids. The anchor is the index of a braid whose generator and pseudonyms are used for the vote.</p>
  
  <p><strong>6. Monitor voting</strong> - Track votes in real-time through the ballot box ledger. Voters receive receipts including timestamps and cast indices as tracking numbers to locate their votes on the bulletin board.</p>
  
  <p><strong>7. Publish evidence with CI pipeline</strong> - Publish evidence using continuous integration pipelines to make checking election integrity more accessible.</p>
</div>
~~~

### Voter Experience

~~~
<div class="setup-guide">
  <p><strong>1. Registration</strong> - Voter enters invite into the voting client that registers it securely to the deme.</p>
  
  <p><strong>2. Membership certification</strong> - For member authenticity auditing purposes, voter digitally signs a document with a third party identity provider containing their invite and obtained membership index and sends that to the registrar.</p>
  
  <p><strong>3. Vote casting</strong> - Once proposals are submitted, voter can retrieve them on the voting client and cast their vote.</p>
  
  <p><strong>4. Vote tracking</strong> - After casting the vote, the device shows a pseudonym alias with which you can track your vote. The device keeps a consistency proof chain to ensure that your vote and votes cast by others can't be dropped unnoticed before tallying.</p>
  
  <p><strong>5. Result verification</strong> - Once voting phase ends, a tally board with election evidence is published. Voter can select any statically generated bulletin board mirror and find their vote next to their alias, using timestamps to check that they are exclusive users of the pseudonym, eliminating deception while also being informed of buletin board integrity.</p>
  
  <p><strong>6. Fraud detection</strong> - If votes get dropped, some of the voters' devices including the voter whose vote was omitted will detect inconsistency in their kept history tree. The proof can be extracted and verified by any party, proving to everyone that the vote has been rigged.</p>
</div>
~~~

## Documentation & Support

Comprehensive documentation is included with each download, covering installation, configuration, and the complete testing workflow. Additional resources are available for researchers interested in the underlying cryptographic protocols.

~~~
<div class="research-highlight" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; text-align: center;">
  <div>
    <h4 style="color: #e0dcdd; margin-bottom: 1rem;">📬 Documentation</h4>
    <p style="margin-bottom: 1.5rem;">Implementation details and deployment options</p>
    <a href="https://peacefounder.org/PeaceFounder.jl/dev/" class="btn btn-secondary">Read Docs</a>
  </div>
  <div>
    <h4 style="color: #e0dcdd; margin-bottom: 1rem;">🛠 Issue Tracking</h4>
    <p style="margin-bottom: 1.5rem;">Report bugs and request features</p>
    <a href="https://github.com/PeaceFounder/PeaceFounder.jl/issues" class="btn btn-secondary">GitHub Issues</a>
  </div>
</div>
~~~


## Research & Development Roadmap

This prototype represents the current state of our research implementation. Development focuses on adding missing essential features and user experience improvements along with performance optimizations, while research attempts to create a foundation for protocol specification and security analysis. Collaboration is highly welcome.

There are several features that are not yet implemented but are essential:

- Braiding across different demes (currently only self-braiding is supported)
- Vote submission over Tor for untraceability
- Various admin panel UI/UX shortcuts that need to be addressed
- Static bulletin board website building from published evidence in GitHub/GitLab workflows
- Stronger pseudonym ownership verification with identity commitments
- Vote submission relay shield for ensuring vote acceptance and recording

These features can currently be addressed with current development resources.

Another set of features discussed, but cannot be implemented due to lack of funding resources:

- Voting calculator hardware which is essential for everlasting privacy and receipt-freeness
- Mobile application for voting
- Software integration with voting calculator for vote casting and tallying

If there were a platform for a voting calculator that could communicate with the voting device over NFC/USB/audio, then software development may be within the current development focus.

On top of that, proper security definitions and proofs are at high priority for the upcoming system extension with voting calculator.

### Contributing to Development

We welcome contributions from researchers and developers interested in advancing secure e-voting technology. The codebase is fully open source under Apache 2.0 license, and we maintain active collaboration with the academic community.

~~~
<div class="key-insight">
  <p style="font-size: 1.5rem; margin-bottom: 2rem;">
    <strong>Curios about what PeaceFounder can offer in evoting?</strong>
  </p>
  <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
    <a href="#server_setup" class="btn btn-primary">Just Try It</a>
    <a href="/solution" class="btn btn-secondary">Technical Overview</a>
  </div>
</div>

<div class="contact-section">
  <h4>Questions about the prototype?</h4>
  <p>Contact for technical support and collaboration opportunities.</p>
  <p style="margin-top: 1rem;">
    <a href="mailto:janis@peacefounder.org" style="color: #313131; font-weight: bold;">janis@peacefounder.org</a>
</div>
</div>
~~~
