#!/usr/bin/env bash
# Things between backticks is evaluated by the shell
if [ -f .offline.pid ]; then
  kill `cat .offline.pid`
  rm -f .offline.pid
fi

SERVICE="node"
PID=$(pgrep -x "$SERVICE")
if [[ $PID ]] 
then
    echo "Killing process $PID"
    kill $PID
else
    echo "No process found..."
fi
    