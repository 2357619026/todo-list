#!/bin/bash

if [ "${1}" == "hello" ]; then
echo "Hello, how are you ?" 
elif [ "${1}" == "" ]; then
echo "You MUST input parameters, example> {${0} someword)}"
else
user="the only parameter is 'hello', example> {${0} hello}"
echo ${user}
fi