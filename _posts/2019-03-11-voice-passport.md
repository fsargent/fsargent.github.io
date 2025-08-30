---
layout: default
title: "My Voice is my Passport, Verify Me — Condo Access via Twilio+Voice"
date: 2019-03-11
category: "Technical"
---

<section id="article">
    <h2>My Voice is my Passport, Verify Me — Condo Access via Twilio+Voice</h2>
    <p><em>March 11, 2019</em></p>
    <p>It’s been raining a lot in Oakland recently, and somehow the keypad on the condo security panel shorted out and no longer works. This means that my old method of using Twilio to dial a passcode to let me into the building no longer works.</p>
    <p>I can open a call to the Twilio number, but I can’t use dial tones — but what about voice? Surely there’s a solution for speech to text and then it can be like Sneakers!</p>
    <p>Enter Twilio Autopilot. The quickstart is a great way to get up to speed. This article will give you everything you need from there to make the system work by leveraging Twimlets.</p>
    <p>The requirements are:</p>
    <ol>
        <li>Let in callers who know the password by replying with a DTMF #9 dial tone.</li>
        <li>If callers do not reply with the password, have them call my phone number (and I can validate them there).</li>
        <li>Callers should be able to mention my partner’s name and it’ll ring their number instead.</li>
    </ol>
    <p>Once you have your Twilio account, navigate to h[ttps://www.twilio.com/console/autopilot](https://www.twilio.com/console/autopilot) and create an autopilot.</p>
    <p>We’re going to build four tasks. Go to the Task Builder and create your first task “Answer”, “call-A”, “call-B”, and “open-door”</p>
    <p>The secret sauce is in the Open Door script which plays a mp3 version of DTMF9.</p>
    <p>Next, go to Defaults and ensure that assistant initiation is set to “answer” and the fallback will be to call you.</p>
    <p>Next, go to the “Natural Language Router” and create four items, and link them to your tasks.</p>
    <ul>
        <li>“My voice is my passport, verify me” -> Open Door</li>
        <li>“Call Jane -> Call A</li>
        <li>“Call John -> Call B</li>
    </ul>
    <p>To finish everything up, build the voice model in the Natural Language Router panel.</p>
    <p>Give your system a run on the Overview page.</p>
    <p>To connect this to your phone number, go to Channels and select Programmable Voice.</p>
    <p>Create a new TwiML app here: [https://www.twilio.com/console/phone-numbers/runtime/twiml-apps](https://www.twilio.com/console/phone-numbers/runtime/twiml-apps)</p>
    <p>Go to your phone number, and set Configure with to TwiML App, and select ‘open-door’.</p>
    <p>Hit save, and you’re all set. Handoff that phone number to your HOA, and you’re done.</p>
</section>
