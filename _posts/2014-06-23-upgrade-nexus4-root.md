---
layout: post	
title: How I upgraded my Nexus to Android 4.4.4 without losing root, files (and Xposed Framework)
date: '2014-06-23 12:00pm'
description: Upgrading my phone to Android 4.4.4
---

I just got the OTA for Android 4.4.4 on my Nexus 4. It could have been as easy as installing the update and rebooting my device, but the problem was that my phone was rooted. If I had installed the OTA directly I could have ended up with a boot-loop or have to re-root and installed apps all over again . I've had a similar experience in the past.

<br>

#### So what did I do?

Here are the steps I took to retain root after the OTA update;

1. Open SuperSU, tap on Settings &amp; Enable Survival Mode.
2. Open Xposed Installer, tap on Framework &amp; tap Uninstall &amp; Reboot
3. Install the OTA &amp; Reboot
4. Enable Xposed Installer &amp; Reboot

![image](https://68.media.tumblr.com/2fdc21d54e558dc14c7e67876024dfd9/tumblr_inline_n7n6paunRA1qzu4ed.png)

You should have all your files, root intact and your OTA installed.