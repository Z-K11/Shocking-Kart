#!/bin/bash
if [ -z "$1" ]; then
echo "You need to provide project name as argument"
echo "example usage:"
echo "./setUpProjectName.sh <project-name>"
exit 1
fi
echo "replacing \"react-template\" with \"$1\""
grep -rl "react-template" . --exclude-dir=node_modules/ --exclude-dir=.git --exclude=setUpProjectName.sh --exclude="*.md" \
| xargs sed -i "s/react-template/$1/g"