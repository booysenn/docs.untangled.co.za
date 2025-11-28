---
title: "Getting Started"
metaTitle: "Getting started with home automation"
metaDescription: "Getting started with home automation"
---

# Hardware

## Solid local network/WiFi
You want a strong local network and reliable WiFi throughout. Especially if you will be using Shelly and ESPHome devices that rely on WiFi. This is outside of the immediate scope of this guide and will be determined by your home size, skillset and personal affordability. If you are not in the tech world or do not want to manage the network too much, TP Link Decos are a good option. Look for a version that supports Wireguard VPN to allow for easy remote access.

## Hosting Home Assistant

I started running Home Assistant on a Raspberry Pi 3 and then a Raspberry Pi 4. These worked great but can be limited and not the most cost effective option. I now run it in a virtual machine on proxmox but am slowly migrating to running only the container to allow for better failover. This is a complex setup and not what I would reccommend for beginners. My reccommendation would be to obtain a small from factor pc such as an Intel NUC or HP/Dell Small Form Factor PC on the second hand market. Alternatively an N100 based computer will do quite well at a fractionally higher price.

## Zigbee/Thread Gateway
I reccommend getting an [SLZB-MR3](https://smlight.tech/global/slzbmr3). I have been using the [SLZB-06p7](https://smlight.tech/global/slzb06p7) for around two years for Zigbee only and the MR3 is my next upgrade to support Matter-over-Thread along with Zigbee. This gateway has some good benefits that make it preferred. It can be powered by POE making it easy to place anywhere you can get an ethernet cable. It can alternatively be powered by USB and connected to Wifi if you are unable to run a cable to a reasonable location. This allows you to centralize the placement for your Zigbee devices and it is decoupled from your home assistant device allowing for advanced failover strategies in the future. This is a buy once cry once type of purchase and will form one of the backbones of your home autoamtion network.

## Zigbee/Matter devices
Prioritize purchasing all smart devices such as plugs/bulbs/switch modules/blinds and other devices in Zigbee or Matter variants. Matter is the protocol of the future but Zigbee has been around for a while and has many cheaper options available. Zigbee will also be around for a long time and once you have the devices and they run you will only replace them when they break.

## Shelly Wifi Modules
I reccommend usign Shelly smart relays anywhere you cannot use Zigbee/Matter or need the more advanced features they supply. Gen 2/3 Shelly devices are Wifi and Bluetooth enabled while Gen 4 adds support for Zigbee and Matter. These are very reliable and Shelly has a long history of being accomodating to the Home Assitant and Open Source community and not forcing their cloud on consumers. Bonus is they also can act as Bluetooth Proxies for Home Assitant allowing for the addition of Bluetooth devices throughout your network.

## ESP32/NodeMCU

ESP32 is a low cost WiFI capable Microcontroller sold by Espressif. Depending on where it is source from it can cost less than a cup of coffee. It supports both WiFi and Bluetooth andthe microcontroller supports Serial, USB and various low level protocols and is capable of connecting to many sensors available online and at electronics stores. My preferred way to program these are using ESPHome.

# Communications

## Ethernet
Wired ethernet is the most reliable connection you can have. If there is a choice always use a wired connection. In this case you would use a wired connection between your route and the Home Assistant host. The other obvious wired connection is between the router and the zigbee router. If you do not have a POE switch a POE injector is the next bst thing to power the zigbee router. Only use USB power if you have no other option and only use it in WiFi mode if running an ethernet cable to a good location is not possible.
 
## WiFi
WiFi is commonly used by IOT devices and you will likely have a few WiFi devices on your network. Notably Shelly and ESP Home devices use WiFi as the primary communications method. There is alos other open source projects like Tasmota that uses WiFi andmany smart appliances use WiFi. If possible use a seperate LAN or VLAN for your IOT devices to seperate it from your regular internet. This supports multiple frequencies but most IOT devices operate in the 2.5GHz range due to the most common hardware only supportng that. This means it can suffer interference with Bluetooth and Zigbee.

## IPv4/IPv6
Both these protocols run over ethernet and WiFI and is tightly associated with those connection methods. IPv4 is the most widely used protocol on the internet and local networks. It has the form 192.168.0.2/24. It is currently the only protocol supported on most IOT devices including Shelly and ESP Home. You will likely only be using this for the forseeable future. IPv6 is the newer protocol that is meant to replace IPv4 to allow for more devices but it has not IPv4 in over 20 years of existense. Home Assistant might use this for inbound comms and newer device like Matter based ones might use it. It has the form fe80::be12:13ef:f1b8:f459/64

## Zigbee
Zigbee is a mesh network protocol used for low power sensors, switches and light bulbs. Most mains powered devices act as routers that extend your mesh and strenghten certain areas. Battery powered devices uses deep sleep and intermittent checkin to run on CR2032 batteries for months. Zigbee uses the 2.5GHz band so can suffer interference with Wifi and Bluetooth. Zigbee 4.0 announced at the end of 2025 adds support for 800Mhz (EU) and 900MHz (US) that will help with this interference but expect most devices on the market will not support this for a few months to years. Many devices are available that support it at reasonable prices and it is the recommended protocol to get started with. Shelly, Xiaomi and Aqara are all brands that commonly support Zigbee.

## Bluetooth
Bluetooth and Bluetooth Low Energy (LE) are supported by many low cost devices. These include some door/window sensors, temperature sensors and smart switches. These run over 2.4GHz so can suffer interference with WiFi and Zigbee. Bluetooth LE device can operate for months on battery. With home assitant it is possible to use ESP Home and Shelly devices as bluetooth and bluetooth LE proxies. This means that you can extend bluetooth well beyond the core home assitant network using WiFI/Ethernet and even the internet with some VPN trickery.

## Thread/Matter
Thread is another protocol like WiFI, Zigbee or Bluetooth. It handles the connection between devices and to us Thread you need a Thread border router that allows communication from IPvX to Thread. Matter is the latest IOT protocol developed by a group of manufacturers to allow for interoperability and reliability over multiple network types and standardize configuration and routers that support it. Matter is often closely associated with Thread but it works over WiFi as well. Matter replaces the MQTT layer in the setup. These are fairly new in the market and devices that support it is only now becoming more common, but can still carry a premium. Typically you would prefe these but in most of my local places Zigbee is still more common.

## MQTT
MQTT is a common IOT communications protocol that support publish and subscribe messaging and allows for device to communicate over IPv4/6 networks in a reliable way. MQTT requires a broker that all clients connects to and where all messages pass through. You are pretty much guaranteed to require MQTT in your setup.

## The rest

### Z-Wave
There are other protocols like Z-Wave that are quite common. But they appear to be more pricy and since I early on started using Zigbee I did not want to add yet another protocol to my setup. I have never used Z-Wave so will not comment on how it compares to the protocols I use and reccommend checking it out through other sources.

### LoRa
LoRa is a low power radio protocol that allows sneidng small amounts of data over long ranges. Typically over 2km is possible. This can be used in agricultural applications. There are devices available for this protocol but more often than not you have ot build your own and program them directly. 

# Software

## Home Assitant
Home Assistant is an opensource project that is made for home automation. It is developed in Python and has direct support for 100s of manufactures and devices. Through 3rd party integrations it supports virtually any IOT/Smart Device in existence. It also support AddOns which are docker containers launched through it's own AddOn interface that allows running other services like an MQTT Broker or Zigbee2MQTT easily with no container/docker knowledge. Refer to the hardware section hosting recommendations.

## Zigbee2MQTT
Zigbee2MQTT allows you to connect to a Zigbee Router such as the SLZB-MR3 and bridge communiation between this and your MQTT broker through to Home Assitant. Home Assistant has a native Zigbee implenetation called ZHA, but having used both I completely prefer Zigbee2MQTT. Zigbee2MQTT can be run as a Home Assistant AddOn.

## MQTT Broker
An MQTT broker is a server that receives messages from clients that publish to it and allows other clients to read those messages. It has some features that allow for unreliably connected devices to reliaby be used by platfroms like Home Assistant.

## ESPHome
ESP Home is an open source project that allows you to easily create customer devices. This is what you would likely use if you cannot find an appropriate device commercially. I reccommend only using Esp32 based boards and unless you are space constrained use NodeMCU type board that has native USB which vastly simplifies initial programming.

## Wireguard
Wireguard is a VPN implementation that is built into the Linux kernel. This leads to it beign widely supported by consumer device built on the Linux kernel as well as Android, IOS, Windows and MacOS. To connect remotely to your smarthome, Wireguard is my preferred VPN connection. It allows me to reach all my self hosted service like Home Assitant from anywhere in the world without exposing anything to the Internet. Alternatives to using Wireguard may be commercial VPNs like Surfshark or a NabuCasa subscription that allows you to reach Home Assistant through their servers. This is a good option if you are unsure of getting a VPN configured.