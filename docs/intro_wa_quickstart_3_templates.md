---
title: WAN Edge Templates
sidebar_label: WAN Edge Templates
---

So far you have an SSR device waiting to be claimed, a network for your LAN, and an `Internet` application for your WAN to deliver.

A WAN Edge template ties them all together! The use of templates allow for re-usable and consistent configuration for every SSR device you deploy. 

![Add template](/img/intro_wa_quickstart_5.gif)

1. Navigate back to the WAN section of the organization sidebar menu, and select **WAN Edge Templates**.
2. Select **Create Template** in the upper right.
3. Name the template.
4. Click **`Create`**.
5. Enter NTP and DNS information to be used by the WAN edge device.

## WAN

The first thing to do in your template is to describe which port to use for the WAN.

![Add WAN](/img/intro_wa_quickstart_6.gif)

1. Scroll to the WAN section of the template, and select **Add WAN**.
2. Name the WAN port `wan1`.
3. Since you already plugged port 0 on the device into the Internet, enter `ge-0/0/0` to designate it as a WAN port.
4. Make sure **IP Configuration** is set to be learned from DHCP, and that Source NAT is enabled.
5. Click **`Add`** at the bottom of the **Edit WAN Configuration** side panel.

![Configure WAN](/img/intro_wa_quickstart_7.png)

## LAN

Next, associate your LAN network segment with the appropriate port on the device, and give the LAN additional network services such as DHCP.

![Add LAN](/img/intro_wa_quickstart_8.gif)

1. Scroll to the LAN section of the template, and select **Add LAN**.
2. From the Network dropdown menu, select your network segment to associate it with the LAN.
3. Enter the port used for the LAN port, for example `ge-0/0/3`.
4. In the **IP Address** setting, enter `192.168.1.1` to assign the WAN edge device `.1` for use as gateway in the network.
5. Enter `/24` for the **Prefix Length**.

![Configure LAN](/img/intro_wa_quickstart_9.png)

6. To provide DHCP services to endpoints on this network, select the button for DHCP server.
7. Give your DHCP server an address pool starting with `192.168.1.100` and ending with `192.168.1.200`.
8. Enter `192.168.1.1` as the Gateway to be assigned to DHCP clients.
9. Finally, enter `1.1.1.1,8.8.8.8` as DNS Servers to be assigned to clients on the network.
5. Click **`Add`** at the bottom of the **Edit LAN Configuration** side panel.

![Configure DHCP](/img/intro_wa_quickstart_10.png)

## Policy

Your template has WANs and LANs; now you need to tell the device how to use them to connect users to applications. This is done using Traffic Steering and Application Policies.

### Steering Policy

![Add steering](/img/intro_wa_quickstart_11.gif)

1. Scroll to the Traffic Steering section of the template, and select **Add Traffic Steering**.
2. Name your steering policy, for example, `local-breakout`.
3. Select **Add Paths** to give your steering policy a path to send traffic.
4. Select `WAN` as the path type, and select your WAN interface. For apps that use the policy, this indicates you want them sent directly out of the local WAN interface.
5. **Click the check** in the upper right of the Add Path box, and then click **`Add`** at the bottom of the **Add Traffic Steering** side panel.


### Application Policy

Finally, tie your networks and applications together in an application policy.

![Add access](/img/intro_wa_quickstart_12.gif)

1. Scroll to the Application Policy section of the template, and select **Add Policy**.
2. Enter a string in the name column, and **click the check** to the right of your entry.
3. From the **Network** column dropdown, select your LAN network.
4. From the **Applications** column dropdown, select your Internet app.
5. From the **Traffic Steering** column dropdown, select your local breakout steering policy.

![Configure access](/img/intro_wa_quickstart_13.gif)

Almost there! You now have a working WAN Edge template you can apply to many sites and devices across your organization.

## Assign to Site

With your template set up, you need to save and assign it to the site where your WAN edge device will be deployed.

![Configure access](/img/intro_wa_quickstart_14.gif)

1. Scroll to the top and click **Save**.
2. Click the **Assign to Site** button, and select the site where you want the template config applied.

Great work! All that remains is to [associate the device with a site](intro_wa_quickstart_4_siteassign.md).
