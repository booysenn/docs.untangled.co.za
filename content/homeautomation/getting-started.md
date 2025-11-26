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

# Communications

## Ethernet
 
## WiFi

## IPv4/IPv4

## Zigbee

## Bluetooth

## Thread/Matter

## MQTT

## The rest

# Software

## Home Assitant

## Zigbee2MQTT

## MQTT Broker

## ESPHome

## Wireguard