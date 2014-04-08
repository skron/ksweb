#!/bin/bash

T='templates/'

cat $T"header.html" $T"index.html" $T"footer.html" > index.html
cat $T"header.html" $T"klimatizace-acond-byty.html" $T"footer.html" > klimatizace-acond-byty.html
cat $T"header.html" $T"klimatizace-acond.html" $T"footer.html" > klimatizace-acond.html
cat $T"header.html" $T"klimatizace-toshiba.html" $T"footer.html" > klimatizace-toshiba.html
cat $T"header.html" $T"ceniky.html" $T"footer.html" > ceniky.html
cat $T"header.html" $T"kontakt.html" > kontakt.html
cat $T"header.html" $T"o-nas.html" $T"footer.html" > o-nas.html
cat $T"header.html" $T"sluzby.html" $T"footer.html" > sluzby.html

echo `cat *.html | wc -l`" lines processed."
echo "Done."

exit 0
