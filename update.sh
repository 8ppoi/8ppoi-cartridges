#!/bin/sh
rm -rf 8ppoi-dev
cp -r ../8ppoi-dev .
rm -rf `find 8ppoi-dev | grep .git*`
