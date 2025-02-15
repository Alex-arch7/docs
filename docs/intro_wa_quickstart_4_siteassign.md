---
title: Add Device to Site
sidebar_label: Add Device to Site
---

At this point you have the following:
* Your SSR device in your inventory.
* A WAN edge template for configuration in Mist.
* Your WAN edge template associated with your site in Mist.

Associating the device with the site and template gets you a working config!

![Add network](/img/intro_wa_quickstart_site_assign.gif)

1. Go to your organization's WAN Edges Inventory.
2. Select your device.
3. Assign the device to your site.
4. Check the **`Manage configuration with Mist`** checkbox.
5. Select **Assign to Site**.

## Congratulations!
Mist is now sending the template-driven configuration down to your device. After a few minutes to process and apply the configuration, it will begin forwarding sessions from LAN to WAN as described by your policy.

Head over to the WAN Edges menu on the sidebar, select your device, and watch events as the device completes ZTP.

As your client devices connected to the LAN are assigned addresses from the WAN Edge DHCP server and begin sending sessions, telemetry will populate the insights page, and Marvis will start analyzing it on your behalf.

Continue reading in the Mist and SSR Documentation for more advanced design use cases, deployment and onboarding scenarios, and AI operations with Mist WAN Assurance!
