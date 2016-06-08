#!/bin/bash
rm urb.tar.gz
tar -zcvf urb.tar.gz build
scp urb.tar.gz cf-njs-001-root:/root/urb.tar.gz
ssh cf-njs-001-root './update-urb.sh'
