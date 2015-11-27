+++
weight = 3
date = "2015-11-25T21:34:51-05:00"
draft = false
title = "De Broker"

logo = "E"
mainurl = "https://github.com/deginner"
+++

An automated exchange broker, which will create and fill guaranteed quotes for clients.

A quote consists of [De Exchange Node]({{< ref "deexchange" >}}) orders which the client needs to approve. Once the client approves the orders, and [De Shared Wallet]({{< ref "desharedwallet" >}}) indicates the quote is funded, the broker will fill the orders, fulfilling its quoted obligation to the user.
