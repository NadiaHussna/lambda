#!/usr/bin/env bash
if [ -f ./offline.log ]; then
  rm -f ./offline.log
fi

TMPFILE=$(mktemp ./offline.log)
if [ -f .offline.pid ]; then
  echo "Found file .offline.pid. Not starting."
  exit 1
fi
# start up serverless
# $! is the pid of the last program your shell ran in the background
$(sls offline --httpPort 3030 start) &> "$TMPFILE" & PID=$!
echo $PID > .offline.pid
while ! grep "Offline listening" $TMPFILE
do
  sleep 1;
done
rm -f $TMPFILE