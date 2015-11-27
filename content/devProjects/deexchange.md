+++
weight = 2
date = "2015-11-25T21:34:51-05:00"
draft = false
title = "De Exchange Node"

logo = "E"
mainurl = "https://github.com/deginner"
+++

An orderbook and matching engine for an exchange, using [redis](http://redis.io/) and [amqp](http://amqp.org). Each Exchange Node operates a single orderbook, representing a currency pair (i.e. BTC/USD), and can handle over 1000 trades per second.
