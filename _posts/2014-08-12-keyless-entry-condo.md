---
layout: default
title: "Keyless Entry for your Condo"
date: 2014-08-12
category: "Technical"
---

<section id="article">
    <h2>Keyless Entry to your Condo</h2>
    <p><em>August 12, 2014</em></p>
    <p>I live in a condo secured by incredibly expensive RFID Fobs. They cost ~$50 to replace, and ages to come. I have a tendency to leave my keys around, locking myself out. I would end up dialing my own door number, which would then ring my phone, to let myself in.</p>
    <p>Instead, I wanted to have my doorbell require a password, and open if it passed. This way I could give the password to friends, who could let themselves in.</p>
    <p>I needed to create a new telephone number, and hook that up to listen for a specific passcode. When it heard that passcode, it needed to reply with “9" to simulate me letting in my guest.</p>
    <p><strong>Using Twilio to Setup Passworded Entry to a Condo</strong></p>
    <ol>
        <li><a href="https://www.twilio.com/try-twilio">Register for Twilio</a></li>
        <li>Pick a number in your Condo’s Area Code</li>
        <li>When you’ve found a good number, buy it. It’s cheap at ~$1/mo. Incoming calls are $0.01c every call.</li>
        <li>Go to <a href="https://www.twilio.com/labs/twimlets/menu">https://www.twilio.com/labs/twimlets/menu</a> and enter in a message you want your guests to hear. I used “Hi, please enter the password.”</li>
        <li>We need to set the password. This is a simple menu generator, so we’ll make it so that when the user dials menu item “12345" they get redirected to the 9 dial tone. Change the Menu Item/Password to whatever you would like.</li>
        <li>In the “Go To” field, you need to find an audio file of the “nine” dialing sound. I found a really helpful page hosting them here: <a href="http://jetcityorange.com/dtmf/">http://jetcityorange.com/dtmf/</a> Find the code you want (I used 9), right click, and “Copy Link Address” Paste that into the “Go To” field.</li>
        <li>In the next section, it should have built a long URL for you, such as <a href="http://twimlets.com/menu?Message=Hi%2C%20please%20enter%20the%20password&Options%5B12345%5D=http%3A%2F%2Fjetcityorange.com%2Fdtmf%2FDTMF-9.mp3&">http://twimlets.com/menu?Message=Hi%2C%20please%20enter%20the%20password&Options%5B12345%5D=http%3A%2F%2Fjetcityorange.com%2Fdtmf%2FDTMF-9.mp3</a> Copy that, and paste it into Twilio’s “Voice Request URL” field. Save it, and you’re done!</li>
        <li>To test, dial the number you generated. You should receive the message “Hi, please enter the password.” Dial 12345, and then you should hear the loud BEE” of a 9 dial tone. You’re in!</li>
        <li>Now, call your home management company and give them the new number for the door code. Don’t worry, they never dial the number to figure out that it’s a robot. When they’re done, go try it out!</li>
    </ol>
    <p>I’ve been using this for months now, and it’s great when I want to go out and leave my keys at home (or I forget them!). Even better, if I’m hosting a party, I can have everyone let themselves in, rather than constantly buzzing people in. When the party’s over, I change the password — all secure again.</p>
</section>
