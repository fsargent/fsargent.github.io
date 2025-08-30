---
layout: default
title: "Secure Client Side Feature Flags with Launch Darkly + Auth0 Webtasks"
date: 2019-03-11
category: "Technical"
---

<section id="article">
    <h2>Secure Client Side Feature Flags with Launch Darkly + Auth0 Webtasks</h2>
    <p><em>March 11, 2019</em></p>
    <p>Feature flags are an essential part of the modern web application. Decoupling the activation of features from deployment means there are fewer things to worry about at deploy time, teams can deliver features to customers, and segment features to specific audiences.</p>
    <p>Client Side flags present a security problem — what if a user tries to see what feature flags another user has? A poorly named feature flag might describe unreleased features, or worse expose administrative elements to regular users.</p>
    <p>At MediaMath, we use Launch Darkly for feature flagging. To address the client side flags issue the Launch Darkly Javascript SDK has a Secure Mode feature to only allow users to see flags associated with their accounts. To use Secure Mode conventionally you integrate it into your back end application, exposing an API endpoint to take the user’s name, hash it with a private key, and return it to the client. Sure, this is easy, but why add an unrelated feature to your existing code base when you could leverage your existing authentication provider?</p>
    <p>Auth0 provides Webtask.io, an AWS Lambda-esque service, for running Javascript. Webtasks come with a lot of batteries included if you use Auth0 as your authentication provider, and can validate users tokens for you.</p>
    <pre><code>
const app = new (require('express'))();
const wt = require('webtask-tools');
const crypto = require('crypto'); // Be sure to specify your SDK key for your environment! app.get('/', (req, res) => {
  const hmac = crypto.createHmac('sha256',
    req.webtaskContext.secrets.LD_SDK_KEY);
  hmac.update(req.user.email);
  req.user.ld_hash = hmac.digest('hex');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.user));
});
 module.exports = wt.fromExpress(app).auth0();
    </code></pre>
    <p>This tiny script validates your user’s JWT, creates a hash of their e-mail with a secret key stored in environment variables, and returns it in a JSON blob ready to be consumed by the customer’s browser.</p>
    <p>Deploying the script to Webtask.io is dead simple.</p>
    <pre><code>
$ npm install -g wt-cli$ wt init --container "my\_company" --url "https://sandbox.it.auth0.com" -p "default" --auth0$ wt create generate\_ld\_secure\_hash.js \\
 -s AUTH0\_CLIENT\_ID=<auth0\_client\_id> \\
 -s AUTH0\_CLIENT\_SECRET=<auth0\_client\_secret> \\
 -s AUTH0\_DOMAIN=<auth0\_account\_name>.auth0.com \\
 -s AUTH0\_SECRET\_ENCODING=utf8 \\
 -s LD\_SDK\_KEY=<LaunchDarkly SDK key> \\
 --profile default \\
 --name ld-secure-hash
Webtask createdYou can access your webtask at the following url:[https://your\_company.us.webtask.io/ld-secure-hash-compass-prod](https://mediamath.us.webtask.io/ld-secure-hash-compass-prod)
    </code></pre>
    <p>Now query that URL with a valid JWT, and you’ll see a full response with your secure hash, which you can then hand to the Launch Darkly Javascript SDK.</p>
    <pre><code>
{"email":"felix@example.com","iss":"https://your\_company.auth0.com/","sub":"auth0|1","aud":"2w4EIreeMnopeRkYyMkWw3669P1euhq","iat":1552341211,"exp":1552377211,"ld\_hash":"f71ab9c1sdfa0nope57084f86e1eebe85cfe00a03f28ef192610c8e32cf371b0a3"}var ldclient = LDClient.initialize('YOUR\_CLIENT\_SIDE\_ID', user, options = {
  hash: SERVER\_GENERATED\_HASH
});
    </code></pre>
    <p>Done!</p>
</section>
