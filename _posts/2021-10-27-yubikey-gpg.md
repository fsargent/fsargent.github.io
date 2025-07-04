---
layout: default
title: "Sign your git commits using your Yubikey + GPG (OS X)"
date: 2021-10-27
category: "Technical"

---

## Sign your git commits using your Yubikey + GPG (OS X)

*October 27, 2021*

Using GPG can feel like a miniature nightmare of being stuck in a maze. There are too many options, and it’s hard to know which are “safe” or reasonable. In our organization we wanted to ensure that all our commits were signed so that we could trust that the code in our repositories were ours.

This is a guide to set it up Yubikeys and GPG Suite from scratch.

### 1. Installation

First off, using Homebrew, install git, ykman (Yubikey Manager) and gpg-suite.

```bash
brew install git ykman gpg-suite
```

### 2. Key Generation

Ensure you have your Yubikey plugged in now.

```bash
gpg --card-edit
```

This will output something like:

```
Reader ...........: Yubico YubiKey OTP FIDO CCID
Application ID ...: D2760001240103040006169214170000
Application type .: OpenPGP
Version ..........: 3.4
Manufacturer .....: Yubico
Serial number ....: 16921417
Name of cardholder: [not set]
Language prefs ...: [not set]
Salutation .......:
URL of public key : [not set]
Login data .......: [not set]
Signature PIN ....: not forced
Key attributes ...: rsa2048 rsa2048 rsa2048
Max. PIN lengths .: 127 127 127
PIN retry counter : 3 0 3
Signature counter : 0
KDF setting ......: off
Signature key ....: [none]
Encryption key....: [none]
Authentication key: [none]
General key info..: [none]
```

Now, enter admin mode:

```
gpg/card> admin
Admin commands are allowed
```

We’re now in the GPG card editor, and we’re going to start generating a key on the yubikey itself.

```
gpg/card> generate
Make off-card backup of encryption key? (Y/n) y
```

Please note that the factory settings of the PINs are `PIN = '123456'` and `Admin PIN = '12345678'`. You should change them using the `passwd` command.

```
Please specify how long the key should be valid.
0 = key does not expire
<n>  = key expires in n days
<n>w = key expires in n weeks
<n>m = key expires in n months
<n>y = key expires in n years
Key is valid for? (0) 2y
Key expires at Fri Oct 27 11:59:03 2023 PDT
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: Felix Sargent
Email address: felix@example.com
Comment: Yubikey for Example
You selected this USER-ID:
    "Felix Sargent (Yubikey for Example) <felix@example.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: Note: backup of card key saved to '/Users/felix/.gnupg/sk_758CFF2393B22B10.gpg'
gpg: key 1DD85DE9D27C4A68 marked as ultimately trusted
gpg: revocation certificate stored as '/Users/felix/.gnupg/openpgp-revocs.d/73C92609075C87FB8545214E1DD85DE9D27C4A68.rev'
public and secret key created and signed.
```

### 3. Upload Public Key to GitHub

Now that’s done, open up the GPG-Keychain application in `/Applications/GPG-Keychain.app`. Export your public key to your desktop. It’ll be an `.asc` file. **Do not export the private key.**

Back to the terminal. See what’s in the `.asc` file using `cat`:

```bash
cat ~/Documents/Felix\\ Sargent\\ \\(D27C4A68\\)\\ –\\ Public.asc
```

This will output your public key block:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEYXmhiRYJKwYBBAHaRw8BAQdAzUGoX8W3VGDm1LVDE9LmIHDK/6KRGIckUQff
K8a7Swe0OUZlbGl4IFNhcmdlbnQgKFl1YmlrZXkgZm9yIFRydWV3b3JrKSA8ZmVs
aXhAdHJ1ZXdvcmsuY29tPoiWBBMWCAA+FiEEc8kmCQdch/uFRSFOHdhd6dJ8SmgF
AmF5oYkCGwMFCQPCZwAFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQHdhd6dJ8
Smi/ygEAsPSluOpRWPOptPYU37iwxBhxt7vQCjqZiNwNSMCLB0AA/RDNXXqv0rVx
nUHysWLKkl5UR5fcTT+sK1a4TMCzp5APuDMEYXmhiRYJKwYBBAHaRw8BAQdA1ALY
TVhlqYUon59rdmmUF99vMpBZ+8eq0oeM/uAaTkKIfgQYFggAJhYhBHPJJgkHXIf7
hUUhTh3YXenSfEpoBQJheaGJAhsgBQkDwmcAAAoJEB3YXenSfEpo7pUA/0dTRqrY
XjQxWsNMB5nni46d82Ed5x8XZ0S8qXso5+DWAP9ebn/UFYdnTaKLUST0wi5X+mXP
A7DT4UTqhg7b02ONCrg4BGF5oYkSCisGAQQBl1UBBQEBB0DZode07GKwgdicUpHL
p+VWeezqPaP95pxGTAPsk+ghbgMBCAeIfgQYFggAJhYhBHPJJgkHXIf7
hUUhTh3YXenSfEpoBQJheaGJAhsMBQkDwmcAAAoJEB3YXenSfEpocEwA/07sid3xhK5L/rIe
SxX0KPtDk/JKODZsxWuxLt+OfGjxAPsFNRMyAcme+go90tkYjlh2+jqVdH1/szzj
npvgZCNTCA==
=CDad
-----END PGP PUBLIC KEY BLOCK-----
```

Copy this to your clipboard, open [https://github.com/settings/keys](https://github.com/settings/keys), click “New GPG Key”, and paste it in.

### 4. Configure Git

Now back in the terminal, we have to tell git to use your Yubikey’s GPG Signing Key. Identify the key using the key ID, which you can find in GPG Suite’s GUI.

```bash
git config --global gpg.program gpg
git config --global user.signingkey D27C4A68
```

Now when ever we make a commit Git will reach out to GPG to sign the commit. You don’t need to touch your Yubikey to do this, but you do need to have it plugged in. Try signing a commit without your yubikey to validate that it’s working properly.

### 5. Hardening

You should change the pin on your Yubikey. Instructions for that are here: [https://github.com/drduh/YubiKey-Guide#change-pin](https://github.com/drduh/YubiKey-Guide#change-pin)

```bash
gpg --change-pin
```

This will give you a menu:

```
gpg: OpenPGP card no. D2760001240102010006055532110000 detected

1 - change PIN
2 - unblock PIN
3 - change Admin PIN
4 - set the Reset Code
Q - quit
```

To require touch to sign:

```bash
ykman openpgp keys set-touch aut on -f
ykman openpgp keys set-touch sig on -f
ykman openpgp keys set-touch enc on -f
```
