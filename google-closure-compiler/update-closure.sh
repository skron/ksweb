#!/bin/bash

wget -O compiler.tgz "http://dl.google.com/closure-compiler/compiler-latest.tar.gz"

rc=$?
if [[ $rc != 0 ]] ; then
	echo "Error!"
	exit $rc
fi

mv -f compiler.jar compiler.jar.bak
tar xzvf compiler.tgz compiler.jar
rm -f compiler.tgz

echo "Done."

exit 0
