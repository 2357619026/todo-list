#!/bin/bash
txt=" user    age  password \nzenos  19  123 \nfu  19  123"
echo $txt | grep "19" | cut -d ' ' -f 1,2
user=$(grep ":80" ${txt})
echo ${user}

#curl -l -H 'Content-type: application/json' -X POST -d '{"username":"zenos", "password":123}' http://localhost:3044/login